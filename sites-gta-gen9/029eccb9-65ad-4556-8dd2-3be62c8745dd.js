try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "029eccb9-65ad-4556-8dd2-3be62c8745dd", e._sentryDebugIdIdentifier = "sentry-dbid-029eccb9-65ad-4556-8dd2-3be62c8745dd")
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
  [8959], {
    45787(e, n, t) {
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
            l = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return l ? (u.push.apply(u, Array.from(l.querySelectorAll("[aria-live], script"))), function(e, n, t, u) {
            var l = function(e, n) {
              return n.map(function(n) {
                if (e.contains(n)) return n;
                var t = i(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(n, Array.isArray(e) ? e : [e]);
            a[t] || (a[t] = new WeakMap);
            var d = a[t],
              s = [],
              f = new Set,
              p = new Set(l),
              h = function(e) {
                e && !f.has(e) && (f.add(e), h(e.parentNode))
              };
            l.forEach(h);
            var v = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) v(e);
                else try {
                  var n = e.getAttribute(u),
                    a = null !== n && "false" !== n,
                    c = (r.get(e) || 0) + 1,
                    i = (d.get(e) || 0) + 1;
                  r.set(e, c), d.set(e, i), s.push(e), 1 === c && a && o.set(e, !0), 1 === i && e.setAttribute(t, "true"), a || e.setAttribute(u, "true")
                } catch (n) {
                  console.error("aria-hidden: cannot operate on ", e, n)
                }
              })
            };
            return v(n), f.clear(), c++,
              function() {
                s.forEach(function(e) {
                  var n = r.get(e) - 1,
                    a = d.get(e) - 1;
                  r.set(e, n), d.set(e, a), n || (o.has(e) || e.removeAttribute(u), o.delete(e)), a || e.removeAttribute(t)
                }), --c || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(u, l, t, "aria-hidden")) : function() {
            return null
          }
        }
    },
    35328(e, n, t) {
      t.d(n, {
        A: () => X
      });
      var r = t(51177),
        o = t(93082),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function d(e) {
        return e
      }
      var s = function(e) {
          void 0 === e && (e = {});
          var n = function(e, n) {
            void 0 === n && (n = d);
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
          return n.options = (0, r.Cl)({
            async: !0,
            ssr: !1
          }, e), n
        }(),
        f = function() {},
        p = o.forwardRef(function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            c = a[0],
            d = a[1],
            p = e.forwardProps,
            h = e.children,
            v = e.className,
            m = e.removeScrollBar,
            g = e.enabled,
            y = e.shards,
            b = e.sideCar,
            w = e.noRelative,
            E = e.noIsolation,
            C = e.inert,
            S = e.allowPinchZoom,
            k = e.as,
            M = void 0 === k ? "div" : k,
            N = e.gapMode,
            R = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            A = b,
            x = function(e, n) {
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
                var n = l.get(c);
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
                l.set(c, e)
              }, [e]), c
            }([t, n]),
            T = (0, r.Cl)((0, r.Cl)({}, R), c);
          return o.createElement(o.Fragment, null, g && o.createElement(A, {
            sideCar: s,
            removeScrollBar: m,
            shards: y,
            noRelative: w,
            noIsolation: E,
            inert: C,
            setCallbacks: d,
            allowPinchZoom: !!S,
            lockRef: t,
            gapMode: N
          }), p ? o.cloneElement(o.Children.only(h), (0, r.Cl)((0, r.Cl)({}, T), {
            ref: x
          })) : o.createElement(M, (0, r.Cl)({}, T, {
            className: v,
            ref: x
          }), h))
        });
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var h = function(e) {
        var n = e.sideCar,
          t = (0, r.Tt)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.Cl)({}, t))
      };
      h.isSideCarExport = !0;
      var v = function() {
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
        m = function() {
          var e, n = (e = v(), function(n, t) {
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
        g = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        y = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = m(),
        w = "data-scroll-locked",
        E = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(w, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(w, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(w) || "0", 10);
          return isFinite(e) ? e : 0
        },
        S = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect(function() {
            return document.body.setAttribute(w, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(w) : document.body.setAttribute(w, e.toString())
              }
          }, []);
          var c = o.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return g;
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
        k = !1;
      if ("undefined" != typeof window) try {
        var M = Object.defineProperty({}, "passive", {
          get: function() {
            return k = !0, !0
          }
        });
        window.addEventListener("test", M, M), window.removeEventListener("test", M, M)
      } catch (e) {
        k = !1
      }
      var N = !!k && {
          passive: !1
        },
        R = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        A = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), x(e, r)) {
              var o = T(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        x = function(e, n) {
          return "v" === e ? function(e) {
            return R(e, "overflowY")
          }(n) : function(e) {
            return R(e, "overflowX")
          }(n)
        },
        T = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        _ = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        P = function(e) {
          return [e.deltaX, e.deltaY]
        },
        L = function(e) {
          return e && "current" in e ? e.current : e
        },
        I = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        W = 0,
        D = [];

      function j(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const $ = (B = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(W++)[0],
          i = o.useState(m)[0],
          u = o.useRef(e);
        o.useEffect(function() {
          u.current = e
        }, [e]), o.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.fX)([e.lockRef.current], (e.shards || []).map(L), !0).filter(Boolean);
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
        var l = o.useCallback(function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = _(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              s = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === d.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === d || p.contains(d))) return !1;
            var h = A(s, d);
            if (!h) return !0;
            if (h ? r = s : (r = "v" === s ? "h" : "v", h = A(s, d)), !h) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var v = a.current || r;
            return function(e, n, t, r) {
              var o = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                a = o * r,
                c = t.target,
                i = n.contains(c),
                u = !1,
                l = a > 0,
                d = 0,
                s = 0;
              do {
                if (!c) break;
                var f = T(e, c),
                  p = f[0],
                  h = f[1] - f[2] - o * p;
                (p || h) && x(e, c) && (d += h, s += p);
                var v = c.parentNode;
                c = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v
              } while (!i && c !== document.body || i && (n.contains(c) || n === c));
              return (l && (Math.abs(d) < 1 || !1) || !l && (Math.abs(s) < 1 || !1)) && (u = !0), u
            }(v, n, e, "h" === v ? i : l)
          }, []),
          d = o.useCallback(function(e) {
            var t = e;
            if (D.length && D[D.length - 1] === i) {
              var r = "deltaY" in t ? P(t) : _(t),
                o = n.current.filter(function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                })[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(L).filter(Boolean).filter(function(e) {
                  return e.contains(t.target)
                });
                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }, []),
          s = o.useCallback(function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: j(r)
            };
            n.current.push(a), setTimeout(function() {
              n.current = n.current.filter(function(e) {
                return e !== a
              })
            }, 1)
          }, []),
          f = o.useCallback(function(e) {
            t.current = _(e), a.current = void 0
          }, []),
          p = o.useCallback(function(n) {
            s(n.type, P(n), n.target, l(n, e.lockRef.current))
          }, []),
          h = o.useCallback(function(n) {
            s(n.type, _(n), n.target, l(n, e.lockRef.current))
          }, []);
        o.useEffect(function() {
          return D.push(i), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", d, N), document.addEventListener("touchmove", d, N), document.addEventListener("touchstart", f, N),
            function() {
              D = D.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", d, N), document.removeEventListener("touchmove", d, N), document.removeEventListener("touchstart", f, N)
            }
        }, []);
        var v = e.removeScrollBar,
          g = e.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(i, {
          styles: I(c)
        }) : null, v ? o.createElement(S, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, s.useMedium(B), h);
      var B, O = o.forwardRef(function(e, n) {
        return o.createElement(p, (0, r.Cl)({}, e, {
          ref: n,
          sideCar: $
        }))
      });
      O.classNames = p.classNames;
      const X = O
    },
    8316(e, n, t) {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    31201(e, n, t) {
      t.d(n, {
        A: () => c,
        q: () => a
      });
      var r = t(93082),
        o = t(39793);

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
            } = n, l = t?.[e]?.[i] || c, d = r.useMemo(() => u, Object.values(u));
            return (0, o.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return u.displayName = n + "Provider", [u, function(t, o) {
            const u = o?.[e]?.[i] || c,
              l = r.useContext(u);
            if (l) return l;
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
    91685(e, n, t) {
      t.d(n, {
        Oh: () => a
      });
      var r = t(93082),
        o = 0;

      function a() {
        r.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? c()), document.body.insertAdjacentElement("beforeend", e[1] ?? c()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function c() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    96883(e, n, t) {
      var r;
      t.d(n, {
        B: () => u
      });
      var o = t(93082),
        a = t(86627),
        c = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        i = 0;

      function u(e) {
        const [n, t] = o.useState(c());
        return (0, a.N)(() => {
          e || t(e => e ?? String(i++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    2976(e, n, t) {
      t.d(n, {
        Dc: () => l,
        TL: () => c
      });
      var r = t(93082),
        o = t(50446),
        a = t(39793);

      function c(e) {
        const n = i(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...c
            } = e, i = r.Children.toArray(o), u = i.find(d);
            if (u) {
              const e = u.props.children,
                o = i.map(n => n === u ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, a.jsx)(n, {
                ...c,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(n, {
              ...c,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }

      function i(e) {
        const n = r.forwardRef((e, n) => {
          const {
            children: t,
            ...a
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              c = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    a = n[r];
                  /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
                    const n = a(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(a, t.props);
            return t.type !== r.Fragment && (c.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, c)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var u = Symbol("radix.slottable");

      function l(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = u, n
      }

      function d(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
      }
    },
    38351(e, n, t) {
      t.d(n, {
        c: () => o
      });
      var r = t(93082);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect(() => {
          n.current = e
        }), r.useMemo(() => (...e) => n.current?.(...e), [])
      }
    },
    1531(e, n, t) {
      var r;
      t.d(n, {
        i: () => i
      });
      var o = t(93082),
        a = t(86627),
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
        }), l = void 0 !== e, d = l ? e : a; {
          const n = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = n.current;
            if (e !== l) {
              const n = e ? "controlled" : "uncontrolled",
                t = l ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = l
          }, [l, r])
        }
        const s = o.useCallback(n => {
          if (l) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && u.current?.(t)
          } else i(n)
        }, [l, e, i, u]);
        return [d, s]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    2471(e, n, t) {
      t.d(n, {
        U: () => a
      });
      var r = t(93082),
        o = t(38351);

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
    86627(e, n, t) {
      t.d(n, {
        N: () => o
      });
      var r = t(93082),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);