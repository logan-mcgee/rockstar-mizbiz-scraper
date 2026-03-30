try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2b6d702b-14a5-4a67-ac54-0675a817d980", e._sentryDebugIdIdentifier = "sentry-dbid-2b6d702b-14a5-4a67-ac54-0675a817d980")
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
  [4254], {
    53054: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => i
      });
      var o = t(71127),
        a = t(63155),
        c = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function i({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [a, i, u] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), a = o.useRef(t), i = o.useRef(n);
          return c(() => {
            i.current = n
          }, [n]), o.useEffect(() => {
            a.current !== t && (i.current?.(t), a.current = t)
          }, [t, a]), [t, r, i]
        }({
          defaultProp: n,
          onChange: t
        }), s = void 0 !== e, l = s ? e : a; {
          const n = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = n.current;
            if (e !== s) {
              const n = e ? "controlled" : "uncontrolled",
                t = s ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = s
          }, [s, r])
        }
        const d = o.useCallback(n => {
          if (s) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && u.current?.(t)
          } else i(n)
        }, [s, e, i, u]);
        return [l, d]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    76286: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(71127);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect(() => {
          n.current = e
        }), r.useMemo(() => (...e) => n.current?.(...e), [])
      }
    },
    85426: (e, n, t) => {
      t.d(n, {
        A: () => c,
        q: () => a
      });
      var r = t(71127),
        o = t(42295);

      function a(e, n) {
        const t = r.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, c = r.useMemo(() => a, Object.values(a));
            return (0, o.jsx)(t.Provider, {
              value: c,
              children: n
            })
          };
        return a.displayName = e + "Provider", [a, function(o) {
          const a = r.useContext(t);
          if (a) return a;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function c(e, n = []) {
        let t = [];
        const a = () => {
          const n = t.map(e => r.createContext(e));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            }), [t, o])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const c = r.createContext(a),
            i = t.length;
          t = [...t, a];
          const u = n => {
            const {
              scope: t,
              children: a,
              ...u
            } = n, s = t?.[e]?.[i] || c, l = r.useMemo(() => u, Object.values(u));
            return (0, o.jsx)(s.Provider, {
              value: l,
              children: a
            })
          };
          return u.displayName = n + "Provider", [u, function(t, o) {
            const u = o?.[e]?.[i] || c,
              s = r.useContext(u);
            if (s) return s;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, i(a, ...n)]
      }

      function i(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = t.reduce((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${n.scopeName}`]: o
            }), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    86126: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => u
      });
      var o = t(71127),
        a = t(63155),
        c = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        i = 0;

      function u(e) {
        const [n, t] = o.useState(c());
        return (0, a.N)(() => {
          e || t(e => e ?? String(i++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    94040: (e, n, t) => {
      t.d(n, {
        U: () => a
      });
      var r = t(71127),
        o = t(76286);

      function a(e, n = globalThis?.document) {
        const t = (0, o.c)(e);
        r.useEffect(() => {
          const e = e => {
            "Escape" === e.key && t(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }, [t, n])
      }
    },
    94926: (e, n, t) => {
      t.d(n, {
        Eq: () => u
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        c = 0,
        i = function(e) {
          return e && (e.host || i(e.parentNode))
        },
        u = function(e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var u = Array.from(Array.isArray(e) ? e : [e]),
            s = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return s ? (u.push.apply(u, Array.from(s.querySelectorAll("[aria-live], script"))), function(e, n, t, u) {
            var s = function(e, n) {
              return n.map(function(n) {
                if (e.contains(n)) return n;
                var t = i(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(n, Array.isArray(e) ? e : [e]);
            a[t] || (a[t] = new WeakMap);
            var l = a[t],
              d = [],
              f = new Set,
              h = new Set(s),
              v = function(e) {
                e && !f.has(e) && (f.add(e), v(e.parentNode))
              };
            s.forEach(v);
            var p = function(e) {
              e && !h.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) p(e);
                else try {
                  var n = e.getAttribute(u),
                    a = null !== n && "false" !== n,
                    c = (r.get(e) || 0) + 1,
                    i = (l.get(e) || 0) + 1;
                  r.set(e, c), l.set(e, i), d.push(e), 1 === c && a && o.set(e, !0), 1 === i && e.setAttribute(t, "true"), a || e.setAttribute(u, "true")
                } catch (n) {
                  console.error("aria-hidden: cannot operate on ", e, n)
                }
              })
            };
            return p(n), f.clear(), c++,
              function() {
                d.forEach(function(e) {
                  var n = r.get(e) - 1,
                    a = l.get(e) - 1;
                  r.set(e, n), l.set(e, a), n || (o.has(e) || e.removeAttribute(u), o.delete(e)), a || e.removeAttribute(t)
                }), --c || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(u, s, t, "aria-hidden")) : function() {
            return null
          }
        }
    },
    97359: (e, n, t) => {
      t.d(n, {
        A: () => j
      });
      var r = t(78322),
        o = t(71127),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        s = new WeakMap;

      function l(e) {
        return e
      }
      var d = function(e) {
          void 0 === e && (e = {});
          var n = function(e, n) {
            void 0 === n && (n = l);
            var t = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return t.length ? t[t.length - 1] : e
              },
              useMedium: function(e) {
                var o = n(e, r);
                return t.push(o),
                  function() {
                    t = t.filter(function(e) {
                      return e !== o
                    })
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; t.length;) {
                  var n = t;
                  t = [], n.forEach(e)
                }
                t = {
                  push: function(n) {
                    return e(n)
                  },
                  filter: function() {
                    return t
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var n = [];
                if (t.length) {
                  var o = t;
                  t = [], o.forEach(e), n = t
                }
                var a = function() {
                    var t = n;
                    n = [], t.forEach(e)
                  },
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), t = {
                  push: function(e) {
                    n.push(e), c()
                  },
                  filter: function(e) {
                    return n = n.filter(e), t
                  }
                }
              }
            }
          }(null);
          return n.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), n
        }(),
        f = function() {},
        h = o.forwardRef(function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            c = a[0],
            l = a[1],
            h = e.forwardProps,
            v = e.children,
            p = e.className,
            g = e.removeScrollBar,
            m = e.enabled,
            y = e.shards,
            b = e.sideCar,
            w = e.noRelative,
            E = e.noIsolation,
            _ = e.inert,
            k = e.allowPinchZoom,
            C = e.as,
            S = void 0 === C ? "div" : C,
            M = e.gapMode,
            N = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            R = b,
            A = function(e, n) {
              var t, r, a, c = (t = n || null, r = function(n) {
                return e.forEach(function(e) {
                  return i(e, n)
                })
              }, (a = (0, o.useState)(function() {
                return {
                  value: t,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var n = a.value;
                      n !== e && (a.value = e, a.callback(e, n))
                    }
                  }
                }
              })[0]).callback = r, a.facade);
              return u(function() {
                var n = s.get(c);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = c.current;
                  t.forEach(function(e) {
                    r.has(e) || i(e, null)
                  }), r.forEach(function(e) {
                    t.has(e) || i(e, o)
                  })
                }
                s.set(c, e)
              }, [e]), c
            }([t, n]),
            T = (0, r.__assign)((0, r.__assign)({}, N), c);
          return o.createElement(o.Fragment, null, m && o.createElement(R, {
            sideCar: d,
            removeScrollBar: g,
            shards: y,
            noRelative: w,
            noIsolation: E,
            inert: _,
            setCallbacks: l,
            allowPinchZoom: !!k,
            lockRef: t,
            gapMode: M
          }), h ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, T), {
            ref: A
          })) : o.createElement(S, (0, r.__assign)({}, T, {
            className: p,
            ref: A
          }), v))
        });
      h.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, h.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var v = function(e) {
        var n = e.sideCar,
          t = (0, r.__rest)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, t))
      };
      v.isSideCarExport = !0;
      var p = function() {
          var e = 0,
            n = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = t.nc;
                return n && e.setAttribute("nonce", n), e
              }()) && (a = r, (o = n).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(n)), e++
            },
            remove: function() {
              !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
          }
        },
        g = function() {
          var e, n = (e = p(), function(n, t) {
            o.useEffect(function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }, [n && t])
          });
          return function(e) {
            var t = e.styles,
              r = e.dynamic;
            return n(t, r), null
          }
        },
        m = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        y = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = g(),
        w = "data-scroll-locked",
        E = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            s = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(w, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(w, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        _ = function() {
          var e = parseInt(document.body.getAttribute(w) || "0", 10);
          return isFinite(e) ? e : 0
        },
        k = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect(function() {
            return document.body.setAttribute(w, (_() + 1).toString()),
              function() {
                var e = _() - 1;
                e <= 0 ? document.body.removeAttribute(w) : document.body.setAttribute(w, e.toString())
              }
          }, []);
          var c = o.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
              var n = function(e) {
                  var n = window.getComputedStyle(document.body),
                    t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = n["padding" === e ? "paddingTop" : "marginTop"],
                    o = n["padding" === e ? "paddingRight" : "marginRight"];
                  return [y(t), y(r), y(o)]
                }(e),
                t = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: n[0],
                top: n[1],
                right: n[2],
                gap: Math.max(0, r - t + n[2] - n[0])
              }
            }(a)
          }, [a]);
          return o.createElement(b, {
            styles: E(c, !n, a, t ? "" : "!important")
          })
        },
        C = !1;
      if ("undefined" != typeof window) try {
        var S = Object.defineProperty({}, "passive", {
          get: function() {
            return C = !0, !0
          }
        });
        window.addEventListener("test", S, S), window.removeEventListener("test", S, S)
      } catch (e) {
        C = !1
      }
      var M = !!C && {
          passive: !1
        },
        N = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        R = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), A(e, r)) {
              var o = T(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        A = function(e, n) {
          return "v" === e ? function(e) {
            return N(e, "overflowY")
          }(n) : function(e) {
            return N(e, "overflowX")
          }(n)
        },
        T = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        x = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        L = function(e) {
          return [e.deltaX, e.deltaY]
        },
        P = function(e) {
          return e && "current" in e ? e.current : e
        },
        I = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        W = 0,
        D = [];

      function B(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const $ = (Y = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(W++)[0],
          i = o.useState(g)[0],
          u = o.useRef(e);
        o.useEffect(function() {
          u.current = e
        }, [e]), o.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(P), !0).filter(Boolean);
            return n.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), n.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var s = o.useCallback(function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = x(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              s = "deltaY" in e ? e.deltaY : c[1] - o[1],
              l = e.target,
              d = Math.abs(i) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === l.type) return !1;
            var f = R(d, l);
            if (!f) return !0;
            if (f ? r = d : (r = "v" === d ? "h" : "v", f = R(d, l)), !f) return !1;
            if (!a.current && "changedTouches" in e && (i || s) && (a.current = r), !r) return !0;
            var h = a.current || r;
            return function(e, n, t, r) {
              var o = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                a = o * r,
                c = t.target,
                i = n.contains(c),
                u = !1,
                s = a > 0,
                l = 0,
                d = 0;
              do {
                if (!c) break;
                var f = T(e, c),
                  h = f[0],
                  v = f[1] - f[2] - o * h;
                (h || v) && A(e, c) && (l += v, d += h);
                var p = c.parentNode;
                c = p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? p.host : p
              } while (!i && c !== document.body || i && (n.contains(c) || n === c));
              return (s && (Math.abs(l) < 1 || !1) || !s && (Math.abs(d) < 1 || !1)) && (u = !0), u
            }(h, n, e, "h" === h ? i : s)
          }, []),
          l = o.useCallback(function(e) {
            var t = e;
            if (D.length && D[D.length - 1] === i) {
              var r = "deltaY" in t ? L(t) : x(t),
                o = n.current.filter(function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                })[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(P).filter(Boolean).filter(function(e) {
                  return e.contains(t.target)
                });
                (a.length > 0 ? s(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }, []),
          d = o.useCallback(function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: B(r)
            };
            n.current.push(a), setTimeout(function() {
              n.current = n.current.filter(function(e) {
                return e !== a
              })
            }, 1)
          }, []),
          f = o.useCallback(function(e) {
            t.current = x(e), a.current = void 0
          }, []),
          h = o.useCallback(function(n) {
            d(n.type, L(n), n.target, s(n, e.lockRef.current))
          }, []),
          v = o.useCallback(function(n) {
            d(n.type, x(n), n.target, s(n, e.lockRef.current))
          }, []);
        o.useEffect(function() {
          return D.push(i), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", l, M), document.addEventListener("touchmove", l, M), document.addEventListener("touchstart", f, M),
            function() {
              D = D.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", l, M), document.removeEventListener("touchmove", l, M), document.removeEventListener("touchstart", f, M)
            }
        }, []);
        var p = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: I(c)
        }) : null, p ? o.createElement(k, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, d.useMedium(Y), v);
      var Y, X = o.forwardRef(function(e, n) {
        return o.createElement(h, (0, r.__assign)({}, e, {
          ref: n,
          sideCar: $
        }))
      });
      X.classNames = h.classNames;
      const j = X
    }
  }
]);