try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "16e918ba-675f-4144-aa57-fd99748a6230", e._sentryDebugIdIdentifier = "sentry-dbid-16e918ba-675f-4144-aa57-fd99748a6230")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [265], {
    45787(e, t, n) {
      n.d(t, {
        Eq: () => u
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        c = 0,
        i = function(e) {
          return e && (e.host || i(e.parentNode))
        },
        u = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var u = Array.from(Array.isArray(e) ? e : [e]),
            l = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return l ? (u.push.apply(u, Array.from(l.querySelectorAll("[aria-live], script"))), function(e, t, n, u) {
            var l = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = i(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var s = a[n],
              d = [],
              f = new Set,
              v = new Set(l),
              h = function(e) {
                e && !f.has(e) && (f.add(e), h(e.parentNode))
              };
            l.forEach(h);
            var p = function(e) {
              e && !v.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) p(e);
                else try {
                  var t = e.getAttribute(u),
                    a = null !== t && "false" !== t,
                    c = (r.get(e) || 0) + 1,
                    i = (s.get(e) || 0) + 1;
                  r.set(e, c), s.set(e, i), d.push(e), 1 === c && a && o.set(e, !0), 1 === i && e.setAttribute(n, "true"), a || e.setAttribute(u, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return p(t), f.clear(), c++,
              function() {
                d.forEach(function(e) {
                  var t = r.get(e) - 1,
                    a = s.get(e) - 1;
                  r.set(e, t), s.set(e, a), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), a || e.removeAttribute(n)
                }), --c || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(u, l, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    38100(e, t, n) {
      n.d(t, {
        A: () => F
      });
      var r = n(51177),
        o = n(93082),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function s(e) {
        return e
      }
      var d = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = s);
            var n = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
              },
              useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                  function() {
                    n = n.filter(function(e) {
                      return e !== o
                    })
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                  var t = n;
                  n = [], t.forEach(e)
                }
                n = {
                  push: function(t) {
                    return e(t)
                  },
                  filter: function() {
                    return n
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  n = [], o.forEach(e), t = n
                }
                var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                  },
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), n = {
                  push: function(e) {
                    t.push(e), c()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.Cl)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        f = function() {},
        v = o.forwardRef(function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            c = a[0],
            s = a[1],
            v = e.forwardProps,
            h = e.children,
            p = e.className,
            m = e.removeScrollBar,
            g = e.enabled,
            w = e.shards,
            b = e.sideCar,
            y = e.noRelative,
            E = e.noIsolation,
            C = e.inert,
            S = e.allowPinchZoom,
            M = e.as,
            k = void 0 === M ? "div" : M,
            N = e.gapMode,
            R = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            x = b,
            A = function(e, t) {
              var n, r, a, c = (n = t || null, r = function(t) {
                return e.forEach(function(e) {
                  return i(e, t)
                })
              }, (a = (0, o.useState)(function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var t = a.value;
                      t !== e && (a.value = e, a.callback(e, t))
                    }
                  }
                }
              })[0]).callback = r, a.facade);
              return u(function() {
                var t = l.get(c);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = c.current;
                  n.forEach(function(e) {
                    r.has(e) || i(e, null)
                  }), r.forEach(function(e) {
                    n.has(e) || i(e, o)
                  })
                }
                l.set(c, e)
              }, [e]), c
            }([n, t]),
            P = (0, r.Cl)((0, r.Cl)({}, R), c);
          return o.createElement(o.Fragment, null, g && o.createElement(x, {
            sideCar: d,
            removeScrollBar: m,
            shards: w,
            noRelative: y,
            noIsolation: E,
            inert: C,
            setCallbacks: s,
            allowPinchZoom: !!S,
            lockRef: n,
            gapMode: N
          }), v ? o.cloneElement(o.Children.only(h), (0, r.Cl)((0, r.Cl)({}, P), {
            ref: A
          })) : o.createElement(k, (0, r.Cl)({}, P, {
            className: p,
            ref: A
          }), h))
        });
      v.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, v.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var h = function(e) {
        var t = e.sideCar,
          n = (0, r.Tt)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.Cl)({}, n))
      };
      h.isSideCarExport = !0;
      var p = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (a = r, (o = t).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        m = function() {
          var e, t = (e = p(), function(t, n) {
            o.useEffect(function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }, [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        g = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        w = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = m(),
        y = "data-scroll-locked",
        E = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(y, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(y, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(y) || "0", 10);
          return isFinite(e) ? e : 0
        },
        S = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect(function() {
            return document.body.setAttribute(y, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(y) : document.body.setAttribute(y, e.toString())
              }
          }, []);
          var c = o.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return g;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [w(n), w(r), w(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(a)
          }, [a]);
          return o.createElement(b, {
            styles: E(c, !t, a, n ? "" : "!important")
          })
        },
        M = !1;
      if ("undefined" != typeof window) try {
        var k = Object.defineProperty({}, "passive", {
          get: function() {
            return M = !0, !0
          }
        });
        window.addEventListener("test", k, k), window.removeEventListener("test", k, k)
      } catch (e) {
        M = !1
      }
      var N = !!M && {
          passive: !1
        },
        R = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        x = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), A(e, r)) {
              var o = P(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        A = function(e, t) {
          return "v" === e ? function(e) {
            return R(e, "overflowY")
          }(t) : function(e) {
            return R(e, "overflowX")
          }(t)
        },
        P = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        T = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        _ = function(e) {
          return [e.deltaX, e.deltaY]
        },
        D = function(e) {
          return e && "current" in e ? e.current : e
        },
        I = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        O = 0,
        j = [];

      function L(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const W = ($ = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(O++)[0],
          i = o.useState(m)[0],
          u = o.useRef(e);
        o.useEffect(function() {
          u.current = e
        }, [e]), o.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.fX)([e.lockRef.current], (e.shards || []).map(D), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), t.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = T(e),
              c = n.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              s = e.target,
              d = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === s.type) return !1;
            var f = window.getSelection(),
              v = f && f.anchorNode;
            if (v && (v === s || v.contains(s))) return !1;
            var h = x(d, s);
            if (!h) return !0;
            if (h ? r = d : (r = "v" === d ? "h" : "v", h = x(d, s)), !h) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = o * r,
                c = n.target,
                i = t.contains(c),
                u = !1,
                l = a > 0,
                s = 0,
                d = 0;
              do {
                if (!c) break;
                var f = P(e, c),
                  v = f[0],
                  h = f[1] - f[2] - o * v;
                (v || h) && A(e, c) && (s += h, d += v);
                var p = c.parentNode;
                c = p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? p.host : p
              } while (!i && c !== document.body || i && (t.contains(c) || t === c));
              return (l && (Math.abs(s) < 1 || !1) || !l && (Math.abs(d) < 1 || !1)) && (u = !0), u
            }(p, t, e, "h" === p ? i : l)
          }, []),
          s = o.useCallback(function(e) {
            var n = e;
            if (j.length && j[j.length - 1] === i) {
              var r = "deltaY" in n ? _(n) : T(n),
                o = t.current.filter(function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                })[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(D).filter(Boolean).filter(function(e) {
                  return e.contains(n.target)
                });
                (a.length > 0 ? l(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }, []),
          d = o.useCallback(function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: L(r)
            };
            t.current.push(a), setTimeout(function() {
              t.current = t.current.filter(function(e) {
                return e !== a
              })
            }, 1)
          }, []),
          f = o.useCallback(function(e) {
            n.current = T(e), a.current = void 0
          }, []),
          v = o.useCallback(function(t) {
            d(t.type, _(t), t.target, l(t, e.lockRef.current))
          }, []),
          h = o.useCallback(function(t) {
            d(t.type, T(t), t.target, l(t, e.lockRef.current))
          }, []);
        o.useEffect(function() {
          return j.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", s, N), document.addEventListener("touchmove", s, N), document.addEventListener("touchstart", f, N),
            function() {
              j = j.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", s, N), document.removeEventListener("touchmove", s, N), document.removeEventListener("touchstart", f, N)
            }
        }, []);
        var p = e.removeScrollBar,
          g = e.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(i, {
          styles: I(c)
        }) : null, p ? o.createElement(S, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, d.useMedium($), h);
      var $, B = o.forwardRef(function(e, t) {
        return o.createElement(v, (0, r.Cl)({}, e, {
          ref: t,
          sideCar: W
        }))
      });
      B.classNames = v.classNames;
      const F = B
    },
    44752(e, t, n) {
      n.d(t, {
        mK: () => c
      });
      var r = Object.defineProperty,
        o = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        }),
        a = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function c(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return o(function(r) {
          if (e?.(r), !1 === n || !r || !r.defaultPrevented) return t?.(r)
        }, "handleEvent")
      }

      function i(e) {
        if (!a) throw new Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function u(e) {
        return "IFRAME" === e.tagName
      }
      o(c, "composeEventHandlers"), o(function(e) {
        if (!a) throw new Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), o(i, "getOwnerDocument"), o(function e(t, n = !1) {
        const {
          activeElement: r
        } = i(t);
        if (!r?.nodeName) return null;
        if (u(r) && r.contentDocument) return e(r.contentDocument.body, n);
        if (n) {
          const e = r.getAttribute("aria-activedescendant");
          if (e) {
            const t = i(r).getElementById(e);
            if (t) return t
          }
        }
        return r
      }, "getActiveElement"), o(u, "isFrame")
    },
    76733(e, t, n) {
      n.d(t, {
        D: () => r
      });
      var r = !1
    },
    72579(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var r = n(93082),
        o = n(39793),
        a = Object.defineProperty,
        c = (e, t) => a(e, "name", {
          value: t,
          configurable: !0
        });

      function i(e, t = []) {
        let n = [];

        function a(t, a) {
          const i = r.createContext(a);
          i.displayName = t + "Context";
          const u = n.length;
          n = [...n, a];
          const l = c(t => {
            const {
              scope: n,
              children: a,
              ...c
            } = t, l = n?.[e]?.[u] || i, s = r.useMemo(() => c, Object.values(c));
            return (0, o.jsx)(l.Provider, {
              value: s,
              children: a
            })
          }, "Provider");

          function s(n, o, c = {}) {
            const {
              optional: l = !1
            } = c, s = o?.[e]?.[u] || i, d = r.useContext(s);
            if (d) return d;
            if (void 0 !== a) return a;
            if (!l) throw new Error(`\`${n}\` must be used within \`${t}\``)
          }
          return l.displayName = t + "Provider", c(s, "useContext"), [l, s]
        }
        c(a, "createContext");
        const i = c(() => {
          const t = n.map(e => r.createContext(e));
          return c(function(n) {
            const o = n?.[e] || t;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            }), [n, o])
          }, "useScope")
        }, "createScope");
        return i.scopeName = e, [a, u(i, ...t)]
      }

      function u(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = c(() => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return c(function(e) {
            const o = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${t.scopeName}`]: o
            }), [o])
          }, "useComposedScopes")
        }, "createScope");
        return n.scopeName = t.scopeName, n
      }
      c(function(e, t) {
        const n = r.createContext(t);
        n.displayName = e + "Context";
        const a = c(e => {
          const {
            children: t,
            ...a
          } = e, c = r.useMemo(() => a, Object.values(a));
          return (0, o.jsx)(n.Provider, {
            value: c,
            children: t
          })
        }, "Provider");

        function i(o, a = {}) {
          const {
            optional: c = !1
          } = a, i = r.useContext(n);
          if (i) return i;
          if (void 0 !== t) return t;
          if (!c) throw new Error(`\`${o}\` must be used within \`${e}\``)
        }
        return a.displayName = e + "Provider", c(i, "useContext"), [a, i]
      }, "createContext"), c(i, "createContextScope"), c(u, "composeContextScopes")
    },
    86187(e, t, n) {
      n.d(t, {
        Oh: () => u
      });
      var r = n(93082),
        o = Object.defineProperty,
        a = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        }),
        c = 0,
        i = null;

      function u() {
        r.useEffect(() => {
          i || (i = {
            start: l(),
            end: l()
          });
          const {
            start: e,
            end: t
          } = i;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), c++, () => {
            1 === c && (i?.start.remove(), i?.end.remove(), i = null), c = Math.max(0, c - 1)
          }
        }, [])
      }

      function l() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      a(function(e) {
        return u(), e.children
      }, "FocusGuards"), a(u, "useFocusGuards"), a(l, "createFocusGuard")
    },
    88918(e, t, n) {
      let r;
      n.d(t, {
        B: () => l
      });
      var o = n(93082),
        a = n(9608),
        c = Object.defineProperty,
        i = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function l(e) {
        const [t, n] = o.useState(i());
        return (0, a.N)(() => {
          e || n(e => e ?? String(u++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      c(l, "name", {
        value: "useId",
        configurable: !0
      })
    },
    7198(e, t, n) {
      n.d(t, {
        c: () => o
      });
      var r = n(93082);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }(0, Object.defineProperty)(o, "name", {
        value: "useCallbackRef",
        configurable: !0
      })
    },
    15782(e, t, n) {
      n.d(t, {
        i: () => h
      });
      var r = n(93082),
        o = n.t(r, 2),
        a = n(76733),
        c = n(9608),
        i = Object.defineProperty,
        u = o[" useEffectEvent ".trim().toString()],
        l = o[" useInsertionEffect ".trim().toString()];

      function s(e) {
        if ("function" == typeof u) return u(e);
        const t = r.useRef(() => {
          throw new Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof l ? l(() => {
          t.current = e
        }) : (0, c.N)(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
      i(s, "name", {
        value: "useEffectEvent",
        configurable: !0
      });
      var d = Object.defineProperty,
        f = (e, t) => d(e, "name", {
          value: t,
          configurable: !0
        }),
        v = o[" useInsertionEffect ".trim().toString()] || c.N;

      function h({
        prop: e,
        defaultProp: t,
        onChange: n = f(() => {}, "onChange"),
        caller: o
      }) {
        const [c, i, u] = p({
          defaultProp: t,
          onChange: n
        }), l = void 0 !== e, s = l ? e : c;
        if (a.D) {
          const t = r.useRef(void 0 !== e);
          r.useEffect(() => {
            const e = t.current;
            if (e !== l) {
              const t = e ? "controlled" : "uncontrolled",
                n = l ? "controlled" : "uncontrolled";
              console.warn(`${o} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = l
          }, [l, o])
        }
        return [s, r.useCallback(t => {
          if (l) {
            const n = m(t) ? t(e) : t;
            n !== e && u.current?.(n)
          } else i(t)
        }, [l, e, i, u])]
      }

      function p({
        defaultProp: e,
        onChange: t
      }) {
        const [n, o] = r.useState(e), a = r.useRef(n), c = r.useRef(t);
        return v(() => {
          c.current = t
        }, [t]), r.useEffect(() => {
          a.current !== n && (c.current?.(n), a.current = n)
        }, [n, a]), [n, o, c]
      }

      function m(e) {
        return "function" == typeof e
      }
      f(h, "useControllableState"), f(p, "useUncontrolledState"), f(m, "isFunction");
      var g = Symbol("RADIX:SYNC_STATE");
      f(function(e, t, n, o) {
        const {
          prop: c,
          defaultProp: i,
          onChange: u,
          caller: l
        } = t, d = void 0 !== c, f = s(u);
        if (a.D) {
          const e = r.useRef(void 0 !== c);
          r.useEffect(() => {
            const t = e.current;
            if (t !== d) {
              const e = t ? "controlled" : "uncontrolled",
                n = d ? "controlled" : "uncontrolled";
              console.warn(`${l} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = d
          }, [d, l])
        }
        const v = [{
          ...n,
          state: i
        }];
        o && v.push(o);
        const [h, p] = r.useReducer((t, n) => {
          if (n.type === g) return {
            ...t,
            state: n.state
          };
          const r = e(t, n);
          return d && !Object.is(r.state, t.state) && f(r.state), r
        }, ...v), m = h.state, w = r.useRef(m);
        r.useEffect(() => {
          w.current !== m && (w.current = m, d || f(m))
        }, [m, w, d]);
        const b = r.useMemo(() => void 0 !== c ? {
          ...h,
          state: c
        } : h, [h, c]);
        return r.useEffect(() => {
          d && !Object.is(c, h.state) && p({
            type: g,
            state: c
          })
        }, [c, h.state, d]), [b, p]
      }, "useControllableStateReducer")
    },
    9608(e, t, n) {
      n.d(t, {
        N: () => o
      });
      var r = n(93082),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);