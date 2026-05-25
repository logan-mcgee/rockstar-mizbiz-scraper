try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ad569e2a-8511-4016-8b14-55ed0c7a67c0", e._sentryDebugIdIdentifier = "sentry-dbid-ad569e2a-8511-4016-8b14-55ed0c7a67c0")
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
  [8819], {
    45787(e, t, n) {
      n.d(t, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        i = 0,
        c = function(e) {
          return e && (e.host || c(e.parentNode))
        },
        s = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var s = Array.from(Array.isArray(e) ? e : [e]),
            u = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return u ? (s.push.apply(s, Array.from(u.querySelectorAll("[aria-live], script"))), function(e, t, n, s) {
            var u = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = c(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var d = a[n],
              l = [],
              f = new Set,
              p = new Set(u),
              v = function(e) {
                e && !f.has(e) && (f.add(e), v(e.parentNode))
              };
            u.forEach(v);
            var m = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) m(e);
                else try {
                  var t = e.getAttribute(s),
                    a = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    c = (d.get(e) || 0) + 1;
                  r.set(e, i), d.set(e, c), l.push(e), 1 === i && a && o.set(e, !0), 1 === c && e.setAttribute(n, "true"), a || e.setAttribute(s, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return m(t), f.clear(), i++,
              function() {
                l.forEach(function(e) {
                  var t = r.get(e) - 1,
                    a = d.get(e) - 1;
                  r.set(e, t), d.set(e, a), t || (o.has(e) || e.removeAttribute(s), o.delete(e)), a || e.removeAttribute(n)
                }), --i || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(s, u, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    35328(e, t, n) {
      n.d(t, {
        A: () => K
      });
      var r = n(51177),
        o = n(93082),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var s = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        u = new WeakMap;

      function d(e) {
        return e
      }
      var l = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = d);
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
                  i = function() {
                    return Promise.resolve().then(a)
                  };
                i(), n = {
                  push: function(e) {
                    t.push(e), i()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        f = function() {},
        p = o.forwardRef(function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            i = a[0],
            d = a[1],
            p = e.forwardProps,
            v = e.children,
            m = e.className,
            h = e.removeScrollBar,
            g = e.enabled,
            y = e.shards,
            b = e.sideCar,
            E = e.noRelative,
            w = e.noIsolation,
            C = e.inert,
            _ = e.allowPinchZoom,
            D = e.as,
            R = void 0 === D ? "div" : D,
            x = e.gapMode,
            S = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            k = b,
            N = function(e, t) {
              var n, r, a, i = (n = t || null, r = function(t) {
                return e.forEach(function(e) {
                  return c(e, t)
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
              return s(function() {
                var t = u.get(i);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = i.current;
                  n.forEach(function(e) {
                    r.has(e) || c(e, null)
                  }), r.forEach(function(e) {
                    n.has(e) || c(e, o)
                  })
                }
                u.set(i, e)
              }, [e]), i
            }([n, t]),
            L = (0, r.__assign)((0, r.__assign)({}, S), i);
          return o.createElement(o.Fragment, null, g && o.createElement(k, {
            sideCar: l,
            removeScrollBar: h,
            shards: y,
            noRelative: E,
            noIsolation: w,
            inert: C,
            setCallbacks: d,
            allowPinchZoom: !!_,
            lockRef: n,
            gapMode: x
          }), p ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, L), {
            ref: N
          })) : o.createElement(R, (0, r.__assign)({}, L, {
            className: m,
            ref: N
          }), v))
        });
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var v = function(e) {
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, n))
      };
      v.isSideCarExport = !0;
      var m = function() {
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
        h = function() {
          var e, t = (e = m(), function(t, n) {
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
        y = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = h(),
        E = "data-scroll-locked",
        w = function(e, t, n, r) {
          var o = e.left,
            c = e.top,
            s = e.right,
            u = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(E, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(E, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(E) || "0", 10);
          return isFinite(e) ? e : 0
        },
        _ = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect(function() {
            return document.body.setAttribute(E, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(E) : document.body.setAttribute(E, e.toString())
              }
          }, []);
          var i = o.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return g;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [y(n), y(r), y(o)]
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
            styles: w(i, !t, a, n ? "" : "!important")
          })
        },
        D = !1;
      if ("undefined" != typeof window) try {
        var R = Object.defineProperty({}, "passive", {
          get: function() {
            return D = !0, !0
          }
        });
        window.addEventListener("test", R, R), window.removeEventListener("test", R, R)
      } catch (e) {
        D = !1
      }
      var x = !!D && {
          passive: !1
        },
        S = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        k = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), N(e, r)) {
              var o = L(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        N = function(e, t) {
          return "v" === e ? function(e) {
            return S(e, "overflowY")
          }(t) : function(e) {
            return S(e, "overflowX")
          }(t)
        },
        L = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        T = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        M = function(e) {
          return [e.deltaX, e.deltaY]
        },
        A = function(e) {
          return e && "current" in e ? e.current : e
        },
        O = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        P = 0,
        I = [];

      function F(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const j = (W = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(P++)[0],
          c = o.useState(h)[0],
          s = o.useRef(e);
        o.useEffect(function() {
          s.current = e
        }, [e]), o.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(A), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), t.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var u = o.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
            var r, o = T(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              u = "deltaY" in e ? e.deltaY : i[1] - o[1],
              d = e.target,
              l = Math.abs(c) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === l && "range" === d.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === d || p.contains(d))) return !1;
            var v = k(l, d);
            if (!v) return !0;
            if (v ? r = l : (r = "v" === l ? "h" : "v", v = k(l, d)), !v) return !1;
            if (!a.current && "changedTouches" in e && (c || u) && (a.current = r), !r) return !0;
            var m = a.current || r;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = o * r,
                i = n.target,
                c = t.contains(i),
                s = !1,
                u = a > 0,
                d = 0,
                l = 0;
              do {
                if (!i) break;
                var f = L(e, i),
                  p = f[0],
                  v = f[1] - f[2] - o * p;
                (p || v) && N(e, i) && (d += v, l += p);
                var m = i.parentNode;
                i = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
              } while (!c && i !== document.body || c && (t.contains(i) || t === i));
              return (u && (Math.abs(d) < 1 || !1) || !u && (Math.abs(l) < 1 || !1)) && (s = !0), s
            }(m, t, e, "h" === m ? c : u)
          }, []),
          d = o.useCallback(function(e) {
            var n = e;
            if (I.length && I[I.length - 1] === c) {
              var r = "deltaY" in n ? M(n) : T(n),
                o = t.current.filter(function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                })[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (s.current.shards || []).map(A).filter(Boolean).filter(function(e) {
                  return e.contains(n.target)
                });
                (a.length > 0 ? u(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }, []),
          l = o.useCallback(function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: F(r)
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
          p = o.useCallback(function(t) {
            l(t.type, M(t), t.target, u(t, e.lockRef.current))
          }, []),
          v = o.useCallback(function(t) {
            l(t.type, T(t), t.target, u(t, e.lockRef.current))
          }, []);
        o.useEffect(function() {
          return I.push(c), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", d, x), document.addEventListener("touchmove", d, x), document.addEventListener("touchstart", f, x),
            function() {
              I = I.filter(function(e) {
                return e !== c
              }), document.removeEventListener("wheel", d, x), document.removeEventListener("touchmove", d, x), document.removeEventListener("touchstart", f, x)
            }
        }, []);
        var m = e.removeScrollBar,
          g = e.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(c, {
          styles: O(i)
        }) : null, m ? o.createElement(_, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, l.useMedium(W), v);
      var W, B = o.forwardRef(function(e, t) {
        return o.createElement(p, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: j
        }))
      });
      B.classNames = p.classNames;
      const K = B
    },
    88819(e, t, n) {
      n.d(t, {
        UC: () => ne,
        VY: () => oe,
        ZL: () => ee,
        bL: () => J,
        bm: () => ae,
        hE: () => re,
        hJ: () => te,
        l9: () => Q
      });
      var r = n(93082),
        o = n(8316),
        a = n(50446),
        i = n(31201),
        c = n(96883),
        s = n(1531),
        u = n(17028),
        d = n(83876),
        l = n(2823),
        f = n(47306),
        p = n(66704),
        v = n(91685),
        m = n(35328),
        h = n(45787),
        g = n(2976),
        y = n(39793),
        b = "Dialog",
        [E, w] = (0, i.A)(b),
        [C, _] = E(b),
        D = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: a,
            onOpenChange: i,
            modal: u = !0
          } = e, d = r.useRef(null), l = r.useRef(null), [f, p] = (0, s.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: i,
            caller: b
          });
          return (0, y.jsx)(C, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, c.B)(),
            titleId: (0, c.B)(),
            descriptionId: (0, c.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: u,
            children: n
          })
        };
      D.displayName = b;
      var R = "DialogTrigger",
        x = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = _(R, n), c = (0, a.s)(t, i.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": X(i.open),
            ...r,
            ref: c,
            onClick: (0, o.mK)(e.onClick, i.onOpenToggle)
          })
        });
      x.displayName = R;
      var S = "DialogPortal",
        [k, N] = E(S, {
          forceMount: void 0
        }),
        L = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: a
          } = e, i = _(S, t);
          return (0, y.jsx)(k, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, y.jsx)(f.C, {
              present: n || i.open,
              children: (0, y.jsx)(l.Z, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        };
      L.displayName = S;
      var T = "DialogOverlay",
        M = r.forwardRef((e, t) => {
          const n = N(T, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = _(T, e.__scopeDialog);
          return a.modal ? (0, y.jsx)(f.C, {
            present: r || a.open,
            children: (0, y.jsx)(O, {
              ...o,
              ref: t
            })
          }) : null
        });
      M.displayName = T;
      var A = (0, g.TL)("DialogOverlay.RemoveScroll"),
        O = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _(T, n);
          return (0, y.jsx)(m.A, {
            as: A,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": X(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        P = "DialogContent",
        I = r.forwardRef((e, t) => {
          const n = N(P, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = _(P, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: r || a.open,
            children: a.modal ? (0, y.jsx)(F, {
              ...o,
              ref: t
            }) : (0, y.jsx)(j, {
              ...o,
              ref: t
            })
          })
        });
      I.displayName = P;
      var F = r.forwardRef((e, t) => {
          const n = _(P, e.__scopeDialog),
            i = r.useRef(null),
            c = (0, a.s)(t, n.contentRef, i);
          return r.useEffect(() => {
            const e = i.current;
            if (e) return (0, h.Eq)(e)
          }, []), (0, y.jsx)(W, {
            ...e,
            ref: c,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, o.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, o.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, o.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        j = r.forwardRef((e, t) => {
          const n = _(P, e.__scopeDialog),
            o = r.useRef(!1),
            a = r.useRef(!1);
          return (0, y.jsx)(W, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        }),
        W = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: i,
            onCloseAutoFocus: c,
            ...s
          } = e, l = _(P, n), f = r.useRef(null), p = (0, a.s)(t, f);
          return (0, v.Oh)(), (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: i,
              onUnmountAutoFocus: c,
              children: (0, y.jsx)(u.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": X(l.open),
                ...s,
                ref: p,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)($, {
                titleId: l.titleId
              }), (0, y.jsx)(V, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        }),
        B = "DialogTitle",
        K = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _(B, n);
          return (0, y.jsx)(p.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      K.displayName = B;
      var G = "DialogDescription",
        q = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _(G, n);
          return (0, y.jsx)(p.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      q.displayName = G;
      var Y = "DialogClose",
        Z = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, a = _(Y, n);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });

      function X(e) {
        return e ? "open" : "closed"
      }
      Z.displayName = Y;
      var z = "DialogTitleWarning",
        [U, H] = (0, i.q)(z, {
          contentName: P,
          titleName: B,
          docsSlug: "dialog"
        }),
        $ = ({
          titleId: e
        }) => {
          const t = H(z),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        V = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${H("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        J = D,
        Q = x,
        ee = L,
        te = M,
        ne = I,
        re = K,
        oe = q,
        ae = Z
    },
    17028(e, t, n) {
      n.d(t, {
        lg: () => g,
        qW: () => f,
        bL: () => h
      });
      var r, o = n(93082),
        a = n(8316),
        i = n(66704),
        c = n(50446),
        s = n(38351),
        u = n(39793),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        f = o.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: f,
            onPointerDownOutside: p,
            onFocusOutside: h,
            onInteractOutside: g,
            onDismiss: y,
            ...b
          } = e, E = o.useContext(l), [w, C] = o.useState(null), _ = w?.ownerDocument ?? globalThis?.document, [, D] = o.useState({}), R = (0, c.s)(t, e => C(e)), x = Array.from(E.layers), [S] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), k = x.indexOf(S), N = w ? x.indexOf(w) : -1, L = E.layersWithOutsidePointerEventsDisabled.size > 0, T = N >= k, M = function(e, t = globalThis?.document) {
            const n = (0, s.c)(e),
              r = o.useRef(!1),
              a = o.useRef(() => {});
            return o.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      m("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", a.current), a.current = r, t.addEventListener("click", a.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", a.current);
                  r.current = !1
                },
                o = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...E.branches].some(e => e.contains(t));
            T && !n && (p?.(e), g?.(e), e.defaultPrevented || y?.())
          }, _), A = function(e, t = globalThis?.document) {
            const n = (0, s.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            const t = e.target;
            [...E.branches].some(e => e.contains(t)) || (h?.(e), g?.(e), e.defaultPrevented || y?.())
          }, _);
          return function(e, t = globalThis?.document) {
            const n = (0, s.c)(e);
            o.useEffect(() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [n, t])
          }(e => {
            N === E.layers.size - 1 && (f?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
          }, _), o.useEffect(() => {
            if (w) return n && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(w)), E.layers.add(w), v(), () => {
              n && 1 === E.layersWithOutsidePointerEventsDisabled.size && (_.body.style.pointerEvents = r)
            }
          }, [w, _, n, E]), o.useEffect(() => () => {
            w && (E.layers.delete(w), E.layersWithOutsidePointerEventsDisabled.delete(w), v())
          }, [w, E]), o.useEffect(() => {
            const e = () => D({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }, []), (0, u.jsx)(i.sG.div, {
            ...b,
            ref: R,
            style: {
              pointerEvents: L ? T ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, a.mK)(e.onFocusCapture, A.onFocusCapture),
            onBlurCapture: (0, a.mK)(e.onBlurCapture, A.onBlurCapture),
            onPointerDownCapture: (0, a.mK)(e.onPointerDownCapture, M.onPointerDownCapture)
          })
        });
      f.displayName = "DismissableLayer";
      var p = o.forwardRef((e, t) => {
        const n = o.useContext(l),
          r = o.useRef(null),
          a = (0, c.s)(t, r);
        return o.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, u.jsx)(i.sG.div, {
          ...e,
          ref: a
        })
      });

      function v() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function m(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, i.hO)(o, a) : o.dispatchEvent(a)
      }
      p.displayName = "DismissableLayerBranch";
      var h = f,
        g = p
    },
    91685(e, t, n) {
      n.d(t, {
        Oh: () => a
      });
      var r = n(93082),
        o = 0;

      function a() {
        r.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? i()), document.body.insertAdjacentElement("beforeend", e[1] ?? i()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    83876(e, t, n) {
      n.d(t, {
        n: () => l
      });
      var r = n(93082),
        o = n(50446),
        a = n(66704),
        i = n(38351),
        c = n(39793),
        s = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        l = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: l = !1,
            onMountAutoFocus: v,
            onUnmountAutoFocus: g,
            ...y
          } = e, [b, E] = r.useState(null), w = (0, i.c)(v), C = (0, i.c)(g), _ = r.useRef(null), D = (0, o.s)(t, e => E(e)), R = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (l) {
              let e = function(e) {
                  if (R.paused || !b) return;
                  const t = e.target;
                  b.contains(t) ? _.current = t : m(_.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (R.paused || !b) return;
                  const t = e.relatedTarget;
                  null !== t && (b.contains(t) || m(_.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && m(b)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return b && r.observe(b, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [l, b, R.paused]), r.useEffect(() => {
            if (b) {
              h.add(R);
              const e = document.activeElement;
              if (!b.contains(e)) {
                const t = new CustomEvent(s, d);
                b.addEventListener(s, w), b.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (m(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(b).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && m(b))
              }
              return () => {
                b.removeEventListener(s, w), setTimeout(() => {
                  const t = new CustomEvent(u, d);
                  b.addEventListener(u, C), b.dispatchEvent(t), t.defaultPrevented || m(e ?? document.body, {
                    select: !0
                  }), b.removeEventListener(u, C), h.remove(R)
                }, 0)
              }
            }
          }, [b, w, C, R]);
          const x = r.useCallback(e => {
            if (!n && !l) return;
            if (R.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, a] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              o && a ? e.shiftKey || r !== a ? e.shiftKey && r === o && (e.preventDefault(), n && m(a, {
                select: !0
              })) : (e.preventDefault(), n && m(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, l, R.paused]);
          return (0, c.jsx)(a.sG.div, {
            tabIndex: -1,
            ...y,
            ref: D,
            onKeyDown: x
          })
        });

      function f(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function p(e, t) {
        for (const n of e)
          if (!v(n, {
              upTo: t
            })) return n
      }

      function v(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function m(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      l.displayName = "FocusScope";
      var h = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = g(e, t), e.unshift(t)
          },
          remove(t) {
            e = g(e, t), e[0]?.resume()
          }
        }
      }();

      function g(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    2823(e, t, n) {
      n.d(t, {
        Z: () => s
      });
      var r = n(93082),
        o = n(84017),
        a = n(66704),
        i = n(86627),
        c = n(39793),
        s = r.forwardRef((e, t) => {
          const {
            container: n,
            ...s
          } = e, [u, d] = r.useState(!1);
          (0, i.N)(() => d(!0), []);
          const l = n || u && globalThis?.document?.body;
          return l ? o.createPortal((0, c.jsx)(a.sG.div, {
            ...s,
            ref: t
          }), l) : null
        });
      s.displayName = "Portal"
    },
    38351(e, t, n) {
      n.d(t, {
        c: () => o
      });
      var r = n(93082);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
    }
  }
]);