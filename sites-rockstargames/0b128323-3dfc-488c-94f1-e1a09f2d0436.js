try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0b128323-3dfc-488c-94f1-e1a09f2d0436", e._sentryDebugIdIdentifier = "sentry-dbid-0b128323-3dfc-488c-94f1-e1a09f2d0436")
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
  [1798, 8818], {
    444: (e, t, n) => {
      n.d(t, {
        A: () => P
      });
      var r = Math.ceil,
        o = Math.max;
      const i = "object" == typeof global && global && global.Object === Object && global;
      var a = "object" == typeof self && self && self.Object === Object && self;
      const s = (i || a || Function("return this")()).Symbol;
      var l = Object.prototype,
        c = l.hasOwnProperty,
        u = l.toString,
        f = s ? s.toStringTag : void 0;
      var d = Object.prototype.toString;
      var p = s ? s.toStringTag : void 0;
      const m = function(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? function(e) {
            var t = c.call(e, f),
              n = e[f];
            try {
              e[f] = void 0;
              var r = !0
            } catch (e) {}
            var o = u.call(e);
            return r && (t ? e[f] = n : delete e[f]), o
          }(e) : function(e) {
            return d.call(e)
          }(e)
        },
        v = function(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
        },
        h = function(e) {
          return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
          }(e.length) && ! function(e) {
            if (!v(e)) return !1;
            var t = m(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
          }(e)
        };
      var g = /^(?:0|[1-9]\d*)$/;
      const y = function(e, t, n) {
        if (!v(n)) return !1;
        var r = typeof t;
        return !!("number" == r ? h(n) && function(e, t) {
          var n = typeof e;
          return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && g.test(e)) && e > -1 && e % 1 == 0 && e < t
        }(t, n.length) : "string" == r && t in n) && function(e, t) {
          return e === t || e != e && t != t
        }(n[t], e)
      };
      var b = /\s/;
      var w = /^\s+/;
      const x = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && b.test(e.charAt(t)););
          return t
        }(e) + 1).replace(w, "") : e
      };
      var E = /^[-+]0x[0-9a-f]+$/i,
        S = /^0b[01]+$/i,
        O = /^0o[0-7]+$/i,
        _ = parseInt;
      const M = function(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
              return null != e && "object" == typeof e
            }(e) && "[object Symbol]" == m(e)
          }(e)) return NaN;
        if (v(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = v(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = x(e);
        var n = S.test(e);
        return n || O.test(e) ? _(e.slice(2), n ? 2 : 8) : E.test(e) ? NaN : +e
      };
      var D = 1 / 0;
      const T = function(e) {
          return e ? (e = M(e)) === D || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        P = function(e, t, n) {
          return n && "number" != typeof n && y(e, t, n) && (t = n = void 0), e = T(e), void 0 === t ? (t = e, e = 0) : t = T(t),
            function(e, t, n, i) {
              for (var a = -1, s = o(r((t - e) / (n || 1)), 0), l = Array(s); s--;) l[i ? s : ++a] = e, e += n;
              return l
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : T(n), void 0)
        }
    },
    4094: (e, t, n) => {
      n.d(t, {
        fp: () => v
      });
      var r = n(71127),
        o = n(20250),
        i = n(34705);
      const a = (0, r.createContext)(void 0);

      function s(e) {
        const t = (0, r.useContext)(a);
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
        u = r.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (c(e), e)
        }),
        f = new WeakMap,
        d = (e, t, n) => {
          const r = (0, i.oJ)(e)[26];
          let o = f.get(t);
          return o || (o = new Promise((i, a) => {
            let s = t;
            const c = e => t => {
                s === e && i(t)
              },
              u = e => t => {
                s === e && a(t)
              },
              d = () => {
                try {
                  const t = n();
                  l(t) ? (f.set(t, o), s = t, t.then(c(t), u(t)), r(e, t, d)) : i(t)
                } catch (e) {
                  a(e)
                }
              };
            t.then(c(t), u(t)), r(e, t, d)
          }), f.set(t, o)), o
        };

      function p(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: o = !r.use
        } = t || {}, i = s(t), [
          [a, f, p], m
        ] = (0, r.useReducer)(t => {
          const n = i.get(e);
          return Object.is(t[0], n) && t[1] === i && t[2] === e ? t : [n, i, e]
        }, void 0, () => [i.get(e), i, e]);
        let v = a;
        if (f === i && p === e || (m(), v = i.get(e)), (0, r.useEffect)(() => {
            const t = i.sub(e, () => {
              if (o) try {
                const t = i.get(e);
                l(t) && c(d(i, t, () => i.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(m, n);
              m()
            });
            return m(), t
          }, [i, e, n, o]), (0, r.useDebugValue)(v), l(v)) {
          const t = d(i, v, () => i.get(e));
          return o && c(t), u(t)
        }
        return v
      }

      function m(e, t) {
        const n = s(t);
        return (0, r.useCallback)((...t) => {
          if (!("write" in e)) throw new Error("not writable atom");
          return n.set(e, ...t)
        }, [n, e])
      }

      function v(e, t) {
        return [p(e, t), m(e, t)]
      }
    },
    4408: (e, t, n) => {
      n.d(t, {
        DX: () => f,
        xV: () => v,
        s6: () => w
      });
      var r = n(71127),
        o = n.t(r, 2),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = o[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function u(e) {
        const t = d(e),
          n = r.forwardRef((e, n) => {
            let {
              children: o,
              ...i
            } = e;
            c(o) && "function" == typeof l && (o = l(o._payload));
            const s = r.Children.toArray(o),
              u = s.find(h);
            if (u) {
              const e = u.props.children,
                o = s.map(t => t === u ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var f = u("Slot");

      function d(e) {
        const t = r.forwardRef((e, t) => {
          let {
            children: n,
            ...o
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, a)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function m(e) {
        const t = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
      }
      var v = m("Slottable");

      function h(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      n(18429);
      var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = u(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        y = Object.freeze({
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
        b = r.forwardRef((e, t) => (0, a.jsx)(g.span, {
          ...e,
          ref: t,
          style: {
            ...y,
            ...e.style
          }
        }));
      b.displayName = "VisuallyHidden";
      const w = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? b : r.Fragment;
        return (0, a.jsx)(n, {
          ...t
        })
      }
    },
    12100: (e, t, n) => {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      n.d(t, {
        u: () => cn
      });
      var o, i, a, s, l, c, u, f, d, p, m, v, h, g = function() {
          return o || "undefined" != typeof window && (o = window.gsap) && o.registerPlugin && o
        },
        y = 1,
        b = [],
        w = [],
        x = [],
        E = Date.now,
        S = function(e, t) {
          return t
        },
        O = function(e, t) {
          return ~x.indexOf(e) && x[x.indexOf(e) + 1][t]
        },
        _ = function(e) {
          return !!~p.indexOf(e)
        },
        M = function(e, t, n, r, o) {
          return e.addEventListener(t, n, {
            passive: !1 !== r,
            capture: !!o
          })
        },
        D = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        T = "scrollLeft",
        P = "scrollTop",
        C = function() {
          return m && m.isPressed || w.cache++
        },
        k = function(e, t) {
          var n = function n(r) {
            if (r || 0 === r) {
              y && (a.history.scrollRestoration = "manual");
              var o = m && m.isPressed;
              r = n.v = Math.round(r) || (m && m.iOS ? 1 : 0), e(r), n.cacheID = w.cache, o && S("ss", r)
            } else(t || w.cache !== n.cacheID || S("ref")) && (n.cacheID = w.cache, n.v = e());
            return n.v + n.offset
          };
          return n.offset = 0, e && n
        },
        A = {
          s: T,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: k(function(e) {
            return arguments.length ? a.scrollTo(e, N.sc()) : a.pageXOffset || s[T] || l[T] || c[T] || 0
          })
        },
        N = {
          s: P,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: A,
          sc: k(function(e) {
            return arguments.length ? a.scrollTo(A.sc(), e) : a.pageYOffset || s[P] || l[P] || c[P] || 0
          })
        },
        R = function(e, t) {
          return (t && t._ctx && t._ctx.selector || o.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== o.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        j = function(e, t) {
          var n = t.s,
            r = t.sc;
          _(e) && (e = s.scrollingElement || l);
          var i = w.indexOf(e),
            a = r === N.sc ? 1 : 2;
          !~i && (i = w.push(e) - 1), w[i + a] || M(e, "scroll", C);
          var c = w[i + a],
            u = c || (w[i + a] = k(O(e, n), !0) || (_(e) ? r : k(function(t) {
              return arguments.length ? e[n] = t : e[n]
            })));
          return u.target = e, c || (u.smooth = "smooth" === o.getProperty(e, "scrollBehavior")), u
        },
        I = function(e, t, n) {
          var r = e,
            o = e,
            i = E(),
            a = i,
            s = t || 50,
            l = Math.max(500, 3 * s),
            c = function(e, t) {
              var l = E();
              t || l - i > s ? (o = r, r = e, a = i, i = l) : n ? r += e : r = o + (e - o) / (l - a) * (i - a)
            };
          return {
            update: c,
            reset: function() {
              o = r = n ? 0 : r, a = i = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = o,
                u = E();
              return (e || 0 === e) && e !== r && c(e), i === a || u - a > l ? 0 : (r + (n ? s : -s)) / ((n ? u : i) - t) * 1e3
            }
          }
        },
        L = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        F = function(e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n
        },
        W = function() {
          var e, t, n, r;
          (d = o.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies, n.push.apply(n, w), r.push.apply(r, x), w = n, x = r, S = function(e, n) {
            return t[e](n)
          })
        },
        z = function(e) {
          return o = e || g(), !i && o && "undefined" != typeof document && document.body && (a = window, s = document, l = s.documentElement, c = s.body, p = [a, s, l, c], o.utils.clamp, h = o.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", u = B.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, v = B.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return y = 0
          }, 500), W(), i = 1), i
        };
      A.op = N, w.cache = 0;
      var B = function() {
        function e(e) {
          this.init(e)
        }
        var t, n;
        return e.prototype.init = function(e) {
          i || z(o) || console.warn("Please gsap.registerPlugin(Observer)"), d || W();
          var t = e.tolerance,
            n = e.dragMinimum,
            r = e.type,
            p = e.target,
            g = e.lineHeight,
            y = e.debounce,
            w = e.preventDefault,
            x = e.onStop,
            S = e.onStopDelay,
            O = e.ignore,
            T = e.wheelSpeed,
            P = e.event,
            k = e.onDragStart,
            B = e.onDragEnd,
            V = e.onDrag,
            X = e.onPress,
            Y = e.onRelease,
            U = e.onRight,
            H = e.onLeft,
            $ = e.onUp,
            q = e.onDown,
            K = e.onChangeX,
            G = e.onChangeY,
            J = e.onChange,
            Z = e.onToggleX,
            Q = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            ne = e.onMove,
            re = e.ignoreCheck,
            oe = e.isNormalizer,
            ie = e.onGestureStart,
            ae = e.onGestureEnd,
            se = e.onWheel,
            le = e.onEnable,
            ce = e.onDisable,
            ue = e.onClick,
            fe = e.scrollSpeed,
            de = e.capture,
            pe = e.allowClicks,
            me = e.lockAxis,
            ve = e.onLockAxis;
          this.target = p = R(p) || l, this.vars = e, O && (O = o.utils.toArray(O)), t = t || 1e-9, n = n || 0, T = T || 1, fe = fe || 1, r = r || "wheel,touch,pointer", y = !1 !== y, g || (g = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
          var he, ge, ye, be, we, xe, Ee, Se = this,
            Oe = 0,
            _e = 0,
            Me = e.passive || !w,
            De = j(p, A),
            Te = j(p, N),
            Pe = De(),
            Ce = Te(),
            ke = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === v[0],
            Ae = _(p),
            Ne = p.ownerDocument || s,
            Re = [0, 0, 0],
            je = [0, 0, 0],
            Ie = 0,
            Le = function() {
              return Ie = E()
            },
            Fe = function(e, t) {
              return (Se.event = e) && O && ~O.indexOf(e.target) || t && ke && "touch" !== e.pointerType || re && re(e, t)
            },
            We = function() {
              var e = Se.deltaX = F(Re),
                n = Se.deltaY = F(je),
                r = Math.abs(e) >= t,
                o = Math.abs(n) >= t;
              J && (r || o) && J(Se, e, n, Re, je), r && (U && Se.deltaX > 0 && U(Se), H && Se.deltaX < 0 && H(Se), K && K(Se), Z && Se.deltaX < 0 != Oe < 0 && Z(Se), Oe = Se.deltaX, Re[0] = Re[1] = Re[2] = 0), o && (q && Se.deltaY > 0 && q(Se), $ && Se.deltaY < 0 && $(Se), G && G(Se), Q && Se.deltaY < 0 != _e < 0 && Q(Se), _e = Se.deltaY, je[0] = je[1] = je[2] = 0), (be || ye) && (ne && ne(Se), ye && (V(Se), ye = !1), be = !1), xe && !(xe = !1) && ve && ve(Se), we && (se(Se), we = !1), he = 0
            },
            ze = function(e, t, n) {
              Re[n] += e, je[n] += t, Se._vx.update(e), Se._vy.update(t), y ? he || (he = requestAnimationFrame(We)) : We()
            },
            Be = function(e, t) {
              me && !Ee && (Se.axis = Ee = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), "y" !== Ee && (Re[2] += e, Se._vx.update(e, !0)), "x" !== Ee && (je[2] += t, Se._vy.update(t, !0)), y ? he || (he = requestAnimationFrame(We)) : We()
            },
            Ve = function(e) {
              if (!Fe(e, 1)) {
                var t = (e = L(e, w)).clientX,
                  r = e.clientY,
                  o = t - Se.x,
                  i = r - Se.y,
                  a = Se.isDragging;
                Se.x = t, Se.y = r, (a || Math.abs(Se.startX - t) >= n || Math.abs(Se.startY - r) >= n) && (V && (ye = !0), a || (Se.isDragging = !0), Be(o, i), a || k && k(Se))
              }
            },
            Xe = Se.onPress = function(e) {
              Fe(e, 1) || e && e.button || (Se.axis = Ee = null, ge.pause(), Se.isPressed = !0, e = L(e), Oe = _e = 0, Se.startX = Se.x = e.clientX, Se.startY = Se.y = e.clientY, Se._vx.reset(), Se._vy.reset(), M(oe ? p : Ne, v[1], Ve, Me, !0), Se.deltaX = Se.deltaY = 0, X && X(Se))
            },
            Ye = Se.onRelease = function(e) {
              if (!Fe(e, 1)) {
                D(oe ? p : Ne, v[1], Ve, !0);
                var t = !isNaN(Se.y - Se.startY),
                  n = Se.isDragging,
                  r = n && (Math.abs(Se.x - Se.startX) > 3 || Math.abs(Se.y - Se.startY) > 3),
                  i = L(e);
                !r && t && (Se._vx.reset(), Se._vy.reset(), w && pe && o.delayedCall(.08, function() {
                  if (E() - Ie > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Ne.createEvent) {
                    var t = Ne.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), Se.isDragging = Se.isGesturing = Se.isPressed = !1, x && n && !oe && ge.restart(!0), B && n && B(Se), Y && Y(Se, r)
              }
            },
            Ue = function(e) {
              return e.touches && e.touches.length > 1 && (Se.isGesturing = !0) && ie(e, Se.isDragging)
            },
            He = function() {
              return (Se.isGesturing = !1) || ae(Se)
            },
            $e = function(e) {
              if (!Fe(e)) {
                var t = De(),
                  n = Te();
                ze((t - Pe) * fe, (n - Ce) * fe, 1), Pe = t, Ce = n, x && ge.restart(!0)
              }
            },
            qe = function(e) {
              if (!Fe(e)) {
                e = L(e, w), se && (we = !0);
                var t = (1 === e.deltaMode ? g : 2 === e.deltaMode ? a.innerHeight : 1) * T;
                ze(e.deltaX * t, e.deltaY * t, 0), x && !oe && ge.restart(!0)
              }
            },
            Ke = function(e) {
              if (!Fe(e)) {
                var t = e.clientX,
                  n = e.clientY,
                  r = t - Se.x,
                  o = n - Se.y;
                Se.x = t, Se.y = n, be = !0, x && ge.restart(!0), (r || o) && Be(r, o)
              }
            },
            Ge = function(e) {
              Se.event = e, ee(Se)
            },
            Je = function(e) {
              Se.event = e, te(Se)
            },
            Ze = function(e) {
              return Fe(e) || L(e, w) && ue(Se)
            };
          ge = Se._dc = o.delayedCall(S || .25, function() {
            Se._vx.reset(), Se._vy.reset(), ge.pause(), x && x(Se)
          }).pause(), Se.deltaX = Se.deltaY = 0, Se._vx = I(0, 50, !0), Se._vy = I(0, 50, !0), Se.scrollX = De, Se.scrollY = Te, Se.isDragging = Se.isGesturing = Se.isPressed = !1, h(this), Se.enable = function(e) {
            return Se.isEnabled || (M(Ae ? Ne : p, "scroll", C), r.indexOf("scroll") >= 0 && M(Ae ? Ne : p, "scroll", $e, Me, de), r.indexOf("wheel") >= 0 && M(p, "wheel", qe, Me, de), (r.indexOf("touch") >= 0 && u || r.indexOf("pointer") >= 0) && (M(p, v[0], Xe, Me, de), M(Ne, v[2], Ye), M(Ne, v[3], Ye), pe && M(p, "click", Le, !0, !0), ue && M(p, "click", Ze), ie && M(Ne, "gesturestart", Ue), ae && M(Ne, "gestureend", He), ee && M(p, f + "enter", Ge), te && M(p, f + "leave", Je), ne && M(p, f + "move", Ke)), Se.isEnabled = !0, e && e.type && Xe(e), le && le(Se)), Se
          }, Se.disable = function() {
            Se.isEnabled && (b.filter(function(e) {
              return e !== Se && _(e.target)
            }).length || D(Ae ? Ne : p, "scroll", C), Se.isPressed && (Se._vx.reset(), Se._vy.reset(), D(oe ? p : Ne, v[1], Ve, !0)), D(Ae ? Ne : p, "scroll", $e, de), D(p, "wheel", qe, de), D(p, v[0], Xe, de), D(Ne, v[2], Ye), D(Ne, v[3], Ye), D(p, "click", Le, !0), D(p, "click", Ze), D(Ne, "gesturestart", Ue), D(Ne, "gestureend", He), D(p, f + "enter", Ge), D(p, f + "leave", Je), D(p, f + "move", Ke), Se.isEnabled = Se.isPressed = Se.isDragging = !1, ce && ce(Se))
          }, Se.kill = Se.revert = function() {
            Se.disable();
            var e = b.indexOf(Se);
            e >= 0 && b.splice(e, 1), m === Se && (m = 0)
          }, b.push(Se), oe && _(p) && (m = Se), Se.enable(P)
        }, t = e, (n = [{
          key: "velocityX",
          get: function() {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function() {
            return this._vy.getVelocity()
          }
        }]) && r(t.prototype, n), e
      }();
      B.version = "3.12.5", B.create = function(e) {
        return new B(e)
      }, B.register = z, B.getAll = function() {
        return b.slice()
      }, B.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, g() && o.registerPlugin(B);
      var V, X, Y, U, H, $, q, K, G, J, Z, Q, ee, te, ne, re, oe, ie, ae, se, le, ce, ue, fe, de, pe, me, ve, he, ge, ye, be, we, xe, Ee, Se, Oe, _e, Me = 1,
        De = Date.now,
        Te = De(),
        Pe = 0,
        Ce = 0,
        ke = function(e, t, n) {
          var r = Ue(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Ae = function(e, t) {
          return !t || Ue(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Ne = function e() {
          return Ce && requestAnimationFrame(e)
        },
        Re = function() {
          return te = 1
        },
        je = function() {
          return te = 0
        },
        Ie = function(e) {
          return e
        },
        Le = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Fe = function() {
          return "undefined" != typeof window
        },
        We = function() {
          return V || Fe() && (V = window.gsap) && V.registerPlugin && V
        },
        ze = function(e) {
          return !!~q.indexOf(e)
        },
        Be = function(e) {
          return ("Height" === e ? ye : Y["inner" + e]) || H["client" + e] || $["client" + e]
        },
        Ve = function(e) {
          return O(e, "getBoundingClientRect") || (ze(e) ? function() {
            return tn.width = Y.innerWidth, tn.height = ye, tn
          } : function() {
            return mt(e)
          })
        },
        Xe = function(e, t) {
          var n = t.s,
            r = t.d2,
            o = t.d,
            i = t.a;
          return Math.max(0, (n = "scroll" + r) && (i = O(e, n)) ? i() - Ve(e)()[o] : ze(e) ? (H[n] || $[n]) - Be(r) : e[n] - e["offset" + r])
        },
        Ye = function(e, t) {
          for (var n = 0; n < ae.length; n += 3)(!t || ~t.indexOf(ae[n + 1])) && e(ae[n], ae[n + 1], ae[n + 2])
        },
        Ue = function(e) {
          return "string" == typeof e
        },
        He = function(e) {
          return "function" == typeof e
        },
        $e = function(e) {
          return "number" == typeof e
        },
        qe = function(e) {
          return "object" == typeof e
        },
        Ke = function(e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause()
        },
        Ge = function(e, t) {
          if (e.enabled) {
            var n = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            n && n.totalTime && (e.callbackAnimation = n)
          }
        },
        Je = Math.abs,
        Ze = "left",
        Qe = "right",
        et = "bottom",
        tt = "width",
        nt = "height",
        rt = "Right",
        ot = "Left",
        it = "Top",
        at = "Bottom",
        st = "padding",
        lt = "margin",
        ct = "Width",
        ut = "Height",
        ft = "px",
        dt = function(e) {
          return Y.getComputedStyle(e)
        },
        pt = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        mt = function(e, t) {
          var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== dt(e)[ne] && V.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            r = e.getBoundingClientRect();
          return n && n.progress(0).kill(), r
        },
        vt = function(e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0
        },
        ht = function(e) {
          var t, n = [],
            r = e.labels,
            o = e.duration();
          for (t in r) n.push(r[t] / o);
          return n
        },
        gt = function(e) {
          var t = V.utils.snap(e),
            n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
              return e - t
            });
          return n ? function(e, r, o) {
            var i;
            if (void 0 === o && (o = .001), !r) return t(e);
            if (r > 0) {
              for (e -= o, i = 0; i < n.length; i++)
                if (n[i] >= e) return n[i];
              return n[i - 1]
            }
            for (i = n.length, e += o; i--;)
              if (n[i] <= e) return n[i];
            return n[0]
          } : function(n, r, o) {
            void 0 === o && (o = .001);
            var i = t(n);
            return !r || Math.abs(i - n) < o || i - n < 0 == r < 0 ? i : t(r < 0 ? n - e : n + e)
          }
        },
        yt = function(e, t, n, r) {
          return n.split(",").forEach(function(n) {
            return e(t, n, r)
          })
        },
        bt = function(e, t, n, r, o) {
          return e.addEventListener(t, n, {
            passive: !r,
            capture: !!o
          })
        },
        wt = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        xt = function(e, t, n) {
          (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n))
        },
        Et = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        St = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Ot = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        _t = function(e, t) {
          if (Ue(e)) {
            var n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Ot ? Ot[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Mt = function(e, t, n, r, o, i, a, s) {
          var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            d = o.fontWeight,
            p = U.createElement("div"),
            m = ze(n) || "fixed" === O(n, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            h = m ? $ : n,
            g = -1 !== e.indexOf("start"),
            y = g ? l : c,
            b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || s) && m ? "fixed;" : "absolute;"), (v || s || !m) && (b += (r === N ? Qe : et) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = g, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p), p._offset = p["offset" + r.op.d2], Dt(p, 0, r, g), p
        },
        Dt = function(e, t, n, r) {
          var o = {
              display: "block"
            },
            i = n[r ? "os2" : "p2"],
            a = n[r ? "p2" : "os2"];
          e._isFlipped = r, o[n.a + "Percent"] = r ? -100 : 0, o[n.a] = r ? "1px" : 0, o["border" + i + ct] = 1, o["border" + a + ct] = 0, o[n.p] = t + "px", V.set(e, o)
        },
        Tt = [],
        Pt = {},
        Ct = function() {
          return De() - Pe > 34 && (Ee || (Ee = requestAnimationFrame(qt)))
        },
        kt = function() {
          (!ue || !ue.isPressed || ue.startX > $.clientWidth) && (w.cache++, ue ? Ee || (Ee = requestAnimationFrame(qt)) : qt(), Pe || Lt("scrollStart"), Pe = De())
        },
        At = function() {
          pe = Y.innerWidth, de = Y.innerHeight
        },
        Nt = function() {
          w.cache++, !ee && !ce && !U.fullscreenElement && !U.webkitFullscreenElement && (!fe || pe !== Y.innerWidth || Math.abs(Y.innerHeight - de) > .25 * Y.innerHeight) && K.restart(!0)
        },
        Rt = {},
        jt = [],
        It = function e() {
          return wt(cn, "scrollEnd", e) || Ut(!0)
        },
        Lt = function(e) {
          return Rt[e] && Rt[e].map(function(e) {
            return e()
          }) || jt
        },
        Ft = [],
        Wt = function(e) {
          for (var t = 0; t < Ft.length; t += 5)(!e || Ft[t + 4] && Ft[t + 4].query === e) && (Ft[t].style.cssText = Ft[t + 1], Ft[t].getBBox && Ft[t].setAttribute("transform", Ft[t + 2] || ""), Ft[t + 3].uncache = 1)
        },
        zt = function(e, t) {
          var n;
          for (re = 0; re < Tt.length; re++) !(n = Tt[re]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
          be = !0, t && Wt(t), t || Lt("revert")
        },
        Bt = function(e, t) {
          w.cache++, (t || !Se) && w.forEach(function(e) {
            return He(e) && e.cacheID++ && (e.rec = 0)
          }), Ue(e) && (Y.history.scrollRestoration = he = e)
        },
        Vt = 0,
        Xt = function() {
          $.appendChild(ge), ye = !ue && ge.offsetHeight || Y.innerHeight, $.removeChild(ge)
        },
        Yt = function(e) {
          return G(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Ut = function(e, t) {
          if (!Pe || e || be) {
            Xt(), Se = cn.isRefreshing = !0, w.forEach(function(e) {
              return He(e) && ++e.cacheID && (e.rec = e())
            });
            var n = Lt("refreshInit");
            se && cn.sort(), t || zt(), w.forEach(function(e) {
              He(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), Tt.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, Tt.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  n = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh()
              }
            }), we = 1, Yt(!0), Tt.forEach(function(e) {
              var t = Xe(e.scroller, e._dir),
                n = "max" === e.vars.end || e._endClamp && e.end > t,
                r = e._startClamp && e.start >= t;
              (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
            }), Yt(!1), we = 0, n.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), w.forEach(function(e) {
              He(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Bt(he, 1), K.pause(), Vt++, Se = 2, qt(2), Tt.forEach(function(e) {
              return He(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), Se = cn.isRefreshing = !1, Lt("refresh")
          } else bt(cn, "scrollEnd", It)
        },
        Ht = 0,
        $t = 1,
        qt = function(e) {
          if (2 === e || !Se && !be) {
            cn.isUpdating = !0, _e && _e.update(0);
            var t = Tt.length,
              n = De(),
              r = n - Te >= 50,
              o = t && Tt[0].scroll();
            if ($t = Ht > o ? -1 : 1, Se || (Ht = o), r && (Pe && !te && n - Pe > 200 && (Pe = 0, Lt("scrollEnd")), Z = Te, Te = n), $t < 0) {
              for (re = t; re-- > 0;) Tt[re] && Tt[re].update(0, r);
              $t = 1
            } else
              for (re = 0; re < t; re++) Tt[re] && Tt[re].update(0, r);
            cn.isUpdating = !1
          }
          Ee = 0
        },
        Kt = [Ze, "top", et, Qe, lt + at, lt + rt, lt + it, lt + ot, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Gt = Kt.concat([tt, nt, "boxSizing", "max" + ct, "max" + ut, "position", lt, st, st + it, st + rt, st + at, st + ot]),
        Jt = function(e, t, n, r) {
          if (!e._gsap.swappedIn) {
            for (var o, i = Kt.length, a = t.style, s = e.style; i--;) a[o = Kt[i]] = n[o];
            a.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (a.display = "inline-block"), s[et] = s[Qe] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = vt(e, A) + ft, a[nt] = vt(e, N) + ft, a[st] = s[lt] = s.top = s[Ze] = "0", Qt(r), s[tt] = s["max" + ct] = n[tt], s[nt] = s["max" + ut] = n[nt], s[st] = n[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Zt = /([A-Z])/g,
        Qt = function(e) {
          if (e) {
            var t, n, r = e.t.style,
              o = e.length,
              i = 0;
            for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; i < o; i += 2) n = e[i + 1], t = e[i], n ? r[t] = n : r[t] && r.removeProperty(t.replace(Zt, "-$1").toLowerCase())
          }
        },
        en = function(e) {
          for (var t = Gt.length, n = e.style, r = [], o = 0; o < t; o++) r.push(Gt[o], n[Gt[o]]);
          return r.t = e, r
        },
        tn = {
          left: 0,
          top: 0
        },
        nn = function(e, t, n, r, o, i, a, s, l, c, u, f, d, p) {
          He(e) && (e = e(s)), Ue(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? _t("0" + e.substr(3), n) : 0));
          var m, v, h, g = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), $e(e)) d && (e = V.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && Dt(a, n, r, !0);
          else {
            He(t) && (t = t(s));
            var y, b, w, x, E = (e || "0").split(" ");
            h = R(t, s) || $, (y = mt(h) || {}) && (y.left || y.top) || "none" !== dt(h).display || (x = h.style.display, h.style.display = "block", y = mt(h), x ? h.style.display = x : h.style.removeProperty("display")), b = _t(E[0], y[r.d]), w = _t(E[1] || "0", n), e = y[r.p] - l[r.p] - c + b + o - w, a && Dt(a, w, r, n - w < 20 || a._isStart && w > 20), n -= n - w
          }
          if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
            var S = e + n,
              O = i._isStart;
            m = "scroll" + r.d2, Dt(i, S, r, O && S > 20 || !O && (u ? Math.max($[m], H[m]) : i.parentNode[m]) <= S + 1), u && (l = mt(a), u && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + ft))
          }
          return d && h && (m = mt(h), d.seek(f), v = mt(h), d._caScrollDist = m[r.p] - v[r.p], e = e / d._caScrollDist * f), d && d.seek(g), d ? e : Math.round(e)
        },
        rn = /(webkit|moz|length|cssText|inset)/i,
        on = function(e, t, n, r) {
          if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === $) {
              for (o in e._stOrig = a.cssText, i = dt(e)) + o || rn.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
              a.top = n, a.left = r
            } else a.cssText = e._stOrig;
            V.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        an = function(e, t, n) {
          var r = t,
            o = r;
          return function(t) {
            var i = Math.round(e());
            return i !== r && i !== o && Math.abs(i - r) > 3 && Math.abs(i - o) > 3 && (t = i, n && n()), o = r, r = t, t
          }
        },
        sn = function(e, t, n) {
          var r = {};
          r[t.p] = "+=" + n, V.set(e, r)
        },
        ln = function(e, t) {
          var n = j(e, t),
            r = "_scroll" + t.p2,
            o = function t(o, i, a, s, l) {
              var c = t.tween,
                u = i.onComplete,
                f = {};
              a = a || n();
              var d = an(n, a, function() {
                c.kill(), t.tween = 0
              });
              return l = s && l || 0, s = s || o - a, c && c.kill(), i[r] = o, i.inherit = !1, i.modifiers = f, f[r] = function() {
                return d(a + s * c.ratio + l * c.ratio * c.ratio)
              }, i.onUpdate = function() {
                w.cache++, t.tween && qt()
              }, i.onComplete = function() {
                t.tween = 0, u && u.call(c)
              }, c = t.tween = V.to(e, i)
            };
          return e[r] = n, n.wheelHandler = function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
          }, bt(e, "wheel", n.wheelHandler), cn.isTouch && bt(e, "touchmove", n.wheelHandler), o
        },
        cn = function() {
          function e(t, n) {
            X || e.register(V) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ve(this), this.init(t, n)
          }
          return e.prototype.init = function(t, n) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Ce) {
              var r, o, i, a, s, l, c, u, f, d, p, m, v, h, g, y, b, E, S, _, M, D, T, P, C, k, I, L, F, W, z, B, X, q, K, Q, ne, oe, ie, ae, ce, ue, fe = t = pt(Ue(t) || $e(t) || t.nodeType ? {
                  trigger: t
                } : t, St),
                de = fe.onUpdate,
                pe = fe.toggleClass,
                me = fe.id,
                ve = fe.onToggle,
                he = fe.onRefresh,
                ge = fe.scrub,
                ye = fe.trigger,
                be = fe.pin,
                Ee = fe.pinSpacing,
                Te = fe.invalidateOnRefresh,
                Ne = fe.anticipatePin,
                Re = fe.onScrubComplete,
                je = fe.onSnapComplete,
                Fe = fe.once,
                We = fe.snap,
                Ye = fe.pinReparent,
                Ze = fe.pinSpacer,
                Qe = fe.containerAnimation,
                et = fe.fastScrollEnd,
                yt = fe.preventOverlaps,
                xt = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? A : N,
                Ot = !ge && 0 !== ge,
                Dt = R(t.scroller || Y),
                Ct = V.core.getCache(Dt),
                At = ze(Dt),
                Rt = "fixed" === ("pinType" in t ? t.pinType : O(Dt, "pinType") || At && "fixed"),
                jt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Lt = Ot && t.toggleActions.split(" "),
                Ft = "markers" in t ? t.markers : St.markers,
                Wt = At ? 0 : parseFloat(dt(Dt)["border" + xt.p2 + ct]) || 0,
                zt = this,
                Bt = t.onRefreshInit && function() {
                  return t.onRefreshInit(zt)
                },
                Xt = function(e, t, n) {
                  var r = n.d,
                    o = n.d2,
                    i = n.a;
                  return (i = O(e, "getBoundingClientRect")) ? function() {
                    return i()[r]
                  } : function() {
                    return (t ? Be(o) : e["client" + o]) || 0
                  }
                }(Dt, At, xt),
                Yt = function(e, t) {
                  return !t || ~x.indexOf(e) ? Ve(e) : function() {
                    return tn
                  }
                }(Dt, At),
                Ht = 0,
                qt = 0,
                Kt = 0,
                Gt = j(Dt, xt);
              if (zt._startClamp = zt._endClamp = !1, zt._dir = xt, Ne *= 45, zt.scroller = Dt, zt.scroll = Qe ? Qe.time.bind(Qe) : Gt, a = Gt(), zt.vars = t, n = n || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (_e = zt)), Ct.tweenScroll = Ct.tweenScroll || {
                  top: ln(Dt, N),
                  left: ln(Dt, A)
                }, zt.tweenTo = r = Ct.tweenScroll[xt.p], zt.scrubDuration = function(e) {
                  (X = $e(e) && e) ? B ? B.duration(e) : B = V.to(n, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: X,
                    paused: !0,
                    onComplete: function() {
                      return Re && Re(zt)
                    }
                  }): (B && B.progress(1).kill(), B = 0)
                }, n && (n.vars.lazy = !1, n._initted && !zt.isReverted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.duration() && n.render(0, !0, !0), zt.animation = n.pause(), n.scrollTrigger = zt, zt.scrubDuration(ge), W = 0, me || (me = n.vars.id)), We && (qe(We) && !We.push || (We = {
                  snapTo: We
                }), "scrollBehavior" in $.style && V.set(At ? [$, H] : Dt, {
                  scrollBehavior: "auto"
                }), w.forEach(function(e) {
                  return He(e) && e.target === (At ? U.scrollingElement || H : Dt) && (e.smooth = !1)
                }), i = He(We.snapTo) ? We.snapTo : "labels" === We.snapTo ? function(e) {
                  return function(t) {
                    return V.utils.snap(ht(e), t)
                  }
                }(n) : "labelsDirectional" === We.snapTo ? (ae = n, function(e, t) {
                  return gt(ht(ae))(e, t.direction)
                }) : !1 !== We.directional ? function(e, t) {
                  return gt(We.snapTo)(e, De() - qt < 500 ? 0 : t.direction)
                } : V.utils.snap(We.snapTo), q = We.duration || {
                  min: .1,
                  max: 2
                }, q = qe(q) ? J(q.min, q.max) : J(q, q), K = V.delayedCall(We.delay || X / 2 || .1, function() {
                  var e = Gt(),
                    t = De() - qt < 500,
                    o = r.tween;
                  if (!(t || Math.abs(zt.getVelocity()) < 10) || o || te || Ht === e) zt.isActive && Ht !== e && K.restart(!0);
                  else {
                    var a, s, u = (e - l) / h,
                      f = n && !Ot ? n.totalProgress() : u,
                      d = t ? 0 : (f - z) / (De() - Z) * 1e3 || 0,
                      p = V.utils.clamp(-u, 1 - u, Je(d / 2) * d / .185),
                      m = u + (!1 === We.inertia ? 0 : p),
                      v = We,
                      g = v.onStart,
                      y = v.onInterrupt,
                      b = v.onComplete;
                    if (a = i(m, zt), $e(a) || (a = m), s = Math.round(l + a * h), e <= c && e >= l && s !== e) {
                      if (o && !o._initted && o.data <= Je(s - e)) return;
                      !1 === We.inertia && (p = a - u), r(s, {
                        duration: q(Je(.185 * Math.max(Je(m - f), Je(a - f)) / d / .05 || 0)),
                        ease: We.ease || "power3",
                        data: Je(s - e),
                        onInterrupt: function() {
                          return K.restart(!0) && y && y(zt)
                        },
                        onComplete: function() {
                          zt.update(), Ht = Gt(), n && (B ? B.resetTo("totalProgress", a, n._tTime / n._tDur) : n.progress(a)), W = z = n && !Ot ? n.totalProgress() : zt.progress, je && je(zt), b && b(zt)
                        }
                      }, e, p * h, s - e - p * h), g && g(zt, r.tween)
                    }
                  }
                }).pause()), me && (Pt[me] = zt), (ie = (ye = zt.trigger = R(ye || !0 !== be && be)) && ye._gsap && ye._gsap.stRevert) && (ie = ie(zt)), be = !0 === be ? ye : R(be), Ue(pe) && (pe = {
                  targets: ye,
                  className: pe
                }), be && (!1 === Ee || Ee === lt || (Ee = !(!Ee && be.parentNode && be.parentNode.style && "flex" === dt(be.parentNode).display) && st), zt.pin = be, (o = V.core.getCache(be)).spacer ? g = o.pinState : (Ze && ((Ze = R(Ze)) && !Ze.nodeType && (Ze = Ze.current || Ze.nativeElement), o.spacerIsNative = !!Ze, Ze && (o.spacerState = en(Ze))), o.spacer = E = Ze || U.createElement("div"), E.classList.add("pin-spacer"), me && E.classList.add("pin-spacer-" + me), o.pinState = g = en(be)), !1 !== t.force3D && V.set(be, {
                  force3D: !0
                }), zt.spacer = E = o.spacer, F = dt(be), P = F[Ee + xt.os2], _ = V.getProperty(be), M = V.quickSetter(be, xt.a, ft), Jt(be, E, F), b = en(be)), Ft) {
                m = qe(Ft) ? pt(Ft, Et) : Et, d = Mt("scroller-start", me, Dt, xt, m, 0), p = Mt("scroller-end", me, Dt, xt, m, 0, d), S = d["offset" + xt.op.d2];
                var Zt = R(O(Dt, "content") || Dt);
                u = this.markerStart = Mt("start", me, Zt, xt, m, S, 0, Qe), f = this.markerEnd = Mt("end", me, Zt, xt, m, S, 0, Qe), Qe && (oe = V.quickSetter([u, f], xt.a, ft)), Rt || x.length && !0 === O(Dt, "fixedMarkers") || (ue = dt(ce = At ? $ : Dt).position, ce.style.position = "absolute" === ue || "fixed" === ue ? ue : "relative", V.set([d, p], {
                  force3D: !0
                }), k = V.quickSetter(d, xt.a, ft), L = V.quickSetter(p, xt.a, ft))
              }
              if (Qe) {
                var rn = Qe.vars.onUpdate,
                  an = Qe.vars.onUpdateParams;
                Qe.eventCallback("onUpdate", function() {
                  zt.update(0, 0, 1), rn && rn.apply(Qe, an || [])
                })
              }
              if (zt.previous = function() {
                  return Tt[Tt.indexOf(zt) - 1]
                }, zt.next = function() {
                  return Tt[Tt.indexOf(zt) + 1]
                }, zt.revert = function(e, t) {
                  if (!t) return zt.kill(!0);
                  var r = !1 !== e || !zt.enabled,
                    o = ee;
                  r !== zt.isReverted && (r && (Q = Math.max(Gt(), zt.scroll.rec || 0), Kt = zt.progress, ne = n && n.progress()), u && [u, f, d, p].forEach(function(e) {
                    return e.style.display = r ? "none" : "block"
                  }), r && (ee = zt, zt.update(r)), !be || Ye && zt.isActive || (r ? function(e, t, n) {
                    Qt(n);
                    var r = e._gsap;
                    if (r.spacerIsNative) Qt(r.spacerState);
                    else if (e._gsap.swappedIn) {
                      var o = t.parentNode;
                      o && (o.insertBefore(e, t), o.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, E, g) : Jt(be, E, dt(be), C)), r || zt.update(r), ee = o, zt.isReverted = r)
                }, zt.refresh = function(o, i, m, w) {
                  if (!ee && zt.enabled || i)
                    if (be && o && Pe) bt(e, "scrollEnd", It);
                    else {
                      !Se && Bt && Bt(zt), ee = zt, r.tween && !m && (r.tween.kill(), r.tween = 0), B && B.pause(), Te && n && n.revert({
                        kill: !1
                      }).invalidate(), zt.isReverted || zt.revert(!0, !0), zt._subPinOffset = !1;
                      var x, S, O, M, P, k, L, F, W, z, X, Y, q, G = Xt(),
                        J = Yt(),
                        Z = Qe ? Qe.duration() : Xe(Dt, xt),
                        te = h <= .01,
                        re = 0,
                        oe = w || 0,
                        ie = qe(m) ? m.end : t.end,
                        ae = t.endTrigger || ye,
                        se = qe(m) ? m.start : t.start || (0 !== t.start && ye ? be ? "0 0" : "0 100%" : 0),
                        ce = zt.pinnedContainer = t.pinnedContainer && R(t.pinnedContainer, zt),
                        ue = ye && Math.max(0, Tt.indexOf(zt)) || 0,
                        fe = ue;
                      for (Ft && qe(m) && (Y = V.getProperty(d, xt.p), q = V.getProperty(p, xt.p)); fe--;)(k = Tt[fe]).end || k.refresh(0, 1) || (ee = zt), !(L = k.pin) || L !== ye && L !== be && L !== ce || k.isReverted || (z || (z = []), z.unshift(k), k.revert(!0, !0)), k !== Tt[fe] && (ue--, fe--);
                      for (He(se) && (se = se(zt)), se = ke(se, "start", zt), l = nn(se, ye, G, xt, Gt(), u, d, zt, J, Wt, Rt, Z, Qe, zt._startClamp && "_startClamp") || (be ? -.001 : 0), He(ie) && (ie = ie(zt)), Ue(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (Ue(se) ? se.split(" ")[0] : "") + ie : (re = _t(ie.substr(2), G), ie = Ue(se) ? se : (Qe ? V.utils.mapRange(0, Qe.duration(), Qe.scrollTrigger.start, Qe.scrollTrigger.end, l) : l) + re, ae = ye)), ie = ke(ie, "end", zt), c = Math.max(l, nn(ie || (ae ? "100% 0" : Z), ae, G, xt, Gt() + re, f, p, zt, J, Wt, Rt, Z, Qe, zt._endClamp && "_endClamp")) || -.001, re = 0, fe = ue; fe--;)(L = (k = Tt[fe]).pin) && k.start - k._pinPush <= l && !Qe && k.end > 0 && (x = k.end - (zt._startClamp ? Math.max(0, k.start) : k.start), (L === ye && k.start - k._pinPush < l || L === ce) && isNaN(se) && (re += x * (1 - k.progress)), L === be && (oe += x));
                      if (l += re, c += re, zt._startClamp && (zt._startClamp += re), zt._endClamp && !Se && (zt._endClamp = c || -.001, c = Math.min(c, Xe(Dt, xt))), h = c - l || (l -= .01) && .001, te && (Kt = V.utils.clamp(0, 1, V.utils.normalize(l, c, Q))), zt._pinPush = oe, u && re && ((x = {})[xt.a] = "+=" + re, ce && (x[xt.p] = "-=" + Gt()), V.set([u, f], x)), !be || we && zt.end >= Xe(Dt, xt)) {
                        if (ye && Gt() && !Qe)
                          for (S = ye.parentNode; S && S !== $;) S._pinOffset && (l -= S._pinOffset, c -= S._pinOffset), S = S.parentNode
                      } else x = dt(be), M = xt === N, O = Gt(), D = parseFloat(_(xt.a)) + oe, !Z && c > 1 && (X = {
                        style: X = (At ? U.scrollingElement || H : Dt).style,
                        value: X["overflow" + xt.a.toUpperCase()]
                      }, At && "scroll" !== dt($)["overflow" + xt.a.toUpperCase()] && (X.style["overflow" + xt.a.toUpperCase()] = "scroll")), Jt(be, E, x), b = en(be), S = mt(be, !0), F = Rt && j(Dt, M ? A : N)(), Ee ? ((C = [Ee + xt.os2, h + oe + ft]).t = E, (fe = Ee === st ? vt(be, xt) + h + oe : 0) && (C.push(xt.d, fe + ft), "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft)), Qt(C), ce && Tt.forEach(function(e) {
                        e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Rt && Gt(Q)) : (fe = vt(be, xt)) && "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft), Rt && ((P = {
                        top: S.top + (M ? O - l : F) + ft,
                        left: S.left + (M ? F : O - l) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = P["max" + ct] = Math.ceil(S.width) + ft, P[nt] = P["max" + ut] = Math.ceil(S.height) + ft, P[lt] = P[lt + it] = P[lt + rt] = P[lt + at] = P[lt + ot] = "0", P[st] = x[st], P[st + it] = x[st + it], P[st + rt] = x[st + rt], P[st + at] = x[st + at], P[st + ot] = x[st + ot], y = function(e, t, n) {
                        for (var r, o = [], i = e.length, a = n ? 8 : 0; a < i; a += 2) r = e[a], o.push(r, r in t ? t[r] : e[a + 1]);
                        return o.t = e.t, o
                      }(g, P, Ye), Se && Gt(0)), n ? (W = n._initted, le(1), n.render(n.duration(), !0, !0), T = _(xt.a) - D + h + oe, I = Math.abs(h - T) > 1, Rt && I && y.splice(y.length - 2, 2), n.render(0, !0, !0), W || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), le(0)) : T = h, X && (X.value ? X.style["overflow" + xt.a.toUpperCase()] = X.value : X.style.removeProperty("overflow-" + xt.a));
                      z && z.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), zt.start = l, zt.end = c, a = s = Se ? Q : Gt(), Qe || Se || (a < Q && Gt(Q), zt.scroll.rec = 0), zt.revert(!1, !0), qt = De(), K && (Ht = -1, K.restart(!0)), ee = 0, n && Ot && (n._initted || ne) && n.progress() !== ne && n.progress(ne || 0, !0).render(n.time(), !0, !0), (te || Kt !== zt.progress || Qe || Te) && (n && !Ot && n.totalProgress(Qe && l < -.001 && !Kt ? V.utils.normalize(l, c, 0) : Kt, !0), zt.progress = te || (a - l) / h === Kt ? 0 : Kt), be && Ee && (E._pinOffset = Math.round(zt.progress * T)), B && B.invalidate(), isNaN(Y) || (Y -= V.getProperty(d, xt.p), q -= V.getProperty(p, xt.p), sn(d, xt, Y), sn(u, xt, Y - (w || 0)), sn(p, xt, q), sn(f, xt, q - (w || 0))), te && !Se && zt.update(), !he || Se || v || (v = !0, he(zt), v = !1)
                    }
                }, zt.getVelocity = function() {
                  return (Gt() - s) / (De() - Z) * 1e3 || 0
                }, zt.endAnimation = function() {
                  Ke(zt.callbackAnimation), n && (B ? B.progress(1) : n.paused() ? Ot || Ke(n, zt.direction < 0, 1) : Ke(n, n.reversed()))
                }, zt.labelToScroll = function(e) {
                  return n && n.labels && (l || zt.refresh() || l) + n.labels[e] / n.duration() * h || 0
                }, zt.getTrailing = function(e) {
                  var t = Tt.indexOf(zt),
                    n = zt.direction > 0 ? Tt.slice(0, t).reverse() : Tt.slice(t + 1);
                  return (Ue(e) ? n.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : n).filter(function(e) {
                    return zt.direction > 0 ? e.end <= l : e.start >= c
                  })
                }, zt.update = function(e, t, o) {
                  if (!Qe || o || e) {
                    var i, u, f, p, m, v, g, w = !0 === Se ? Q : zt.scroll(),
                      x = e ? 0 : (w - l) / h,
                      S = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      O = zt.progress;
                    if (t && (s = a, a = Qe ? Gt() : w, We && (z = W, W = n && !Ot ? n.totalProgress() : S)), Ne && be && !ee && !Me && Pe && (!S && l < w + (w - s) / (De() - Z) * Ne ? S = 1e-4 : 1 === S && c > w + (w - s) / (De() - Z) * Ne && (S = .9999)), S !== O && zt.enabled) {
                      if (p = (m = (i = zt.isActive = !!S && S < 1) != (!!O && O < 1)) || !!S != !!O, zt.direction = S > O ? 1 : -1, zt.progress = S, p && !ee && (u = S && !O ? 0 : 1 === S ? 1 : 1 === O ? 2 : 3, Ot && (f = !m && "none" !== Lt[u + 1] && Lt[u + 1] || Lt[u], g = n && ("complete" === f || "reset" === f || f in n))), yt && (m || g) && (g || ge || !n) && (He(yt) ? yt(zt) : zt.getTrailing(yt).forEach(function(e) {
                          return e.endAnimation()
                        })), Ot || (!B || ee || Me ? n && n.totalProgress(S, !(!ee || !qt && !e)) : (B._dp._time - B._start !== B._time && B.render(B._dp._time - B._start), B.resetTo ? B.resetTo("totalProgress", S, n._tTime / n._tDur) : (B.vars.totalProgress = S, B.invalidate().restart()))), be)
                        if (e && Ee && (E.style[Ee + xt.os2] = P), Rt) {
                          if (p) {
                            if (v = !e && S > O && c + 1 > w && w + 1 >= Xe(Dt, xt), Ye)
                              if (e || !i && !v) on(be, E);
                              else {
                                var _ = mt(be, !0),
                                  C = w - l;
                                on(be, $, _.top + (xt === N ? C : 0) + ft, _.left + (xt === N ? 0 : C) + ft)
                              } Qt(i || v ? y : b), I && S < 1 && i || M(D + (1 !== S || v ? 0 : T))
                          }
                        } else M(Le(D + T * S));
                      We && !r.tween && !ee && !Me && K.restart(!0), pe && (m || Fe && S && (S < 1 || !xe)) && G(pe.targets).forEach(function(e) {
                        return e.classList[i || Fe ? "add" : "remove"](pe.className)
                      }), de && !Ot && !e && de(zt), p && !ee ? (Ot && (g && ("complete" === f ? n.pause().totalProgress(1) : "reset" === f ? n.restart(!0).pause() : "restart" === f ? n.restart(!0) : n[f]()), de && de(zt)), !m && xe || (ve && m && Ge(zt, ve), jt[u] && Ge(zt, jt[u]), Fe && (1 === S ? zt.kill(!1, 1) : jt[u] = 0), m || jt[u = 1 === S ? 1 : 3] && Ge(zt, jt[u])), et && !i && Math.abs(zt.getVelocity()) > ($e(et) ? et : 2500) && (Ke(zt.callbackAnimation), B ? B.progress(1) : Ke(n, "reverse" === f ? 1 : !S, 1))) : Ot && de && !ee && de(zt)
                    }
                    if (L) {
                      var A = Qe ? w / Qe.duration() * (Qe._caScrollDist || 0) : w;
                      k(A + (d._isFlipped ? 1 : 0)), L(A)
                    }
                    oe && oe(-w / Qe.duration() * (Qe._caScrollDist || 0))
                  }
                }, zt.enable = function(t, n) {
                  zt.enabled || (zt.enabled = !0, bt(Dt, "resize", Nt), At || bt(Dt, "scroll", kt), Bt && bt(e, "refreshInit", Bt), !1 !== t && (zt.progress = Kt = 0, a = s = Ht = Gt()), !1 !== n && zt.refresh())
                }, zt.getTween = function(e) {
                  return e && r ? r.tween : B
                }, zt.setPositions = function(e, t, n, r) {
                  if (Qe) {
                    var o = Qe.scrollTrigger,
                      i = Qe.duration(),
                      a = o.end - o.start;
                    e = o.start + a * e / i, t = o.start + a * t / i
                  }
                  zt.refresh(!1, !1, {
                    start: Ae(e, n && !!zt._startClamp),
                    end: Ae(t, n && !!zt._endClamp)
                  }, r), zt.update()
                }, zt.adjustPinSpacing = function(e) {
                  if (C && e) {
                    var t = C.indexOf(xt.d) + 1;
                    C[t] = parseFloat(C[t]) + e + ft, C[1] = parseFloat(C[1]) + e + ft, Qt(C)
                  }
                }, zt.disable = function(t, n) {
                  if (zt.enabled && (!1 !== t && zt.revert(!0, !0), zt.enabled = zt.isActive = !1, n || B && B.pause(), Q = 0, o && (o.uncache = 1), Bt && wt(e, "refreshInit", Bt), K && (K.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !At)) {
                    for (var i = Tt.length; i--;)
                      if (Tt[i].scroller === Dt && Tt[i] !== zt) return;
                    wt(Dt, "resize", Nt), At || wt(Dt, "scroll", kt)
                  }
                }, zt.kill = function(e, r) {
                  zt.disable(e, r), B && !r && B.kill(), me && delete Pt[me];
                  var i = Tt.indexOf(zt);
                  i >= 0 && Tt.splice(i, 1), i === re && $t > 0 && re--, i = 0, Tt.forEach(function(e) {
                    return e.scroller === zt.scroller && (i = 1)
                  }), i || Se || (zt.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({
                    kill: !1
                  }), r || n.kill()), u && [u, f, d, p].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), _e === zt && (_e = 0), be && (o && (o.uncache = 1), i = 0, Tt.forEach(function(e) {
                    return e.pin === be && i++
                  }), i || (o.spacer = 0)), t.onKill && t.onKill(zt)
                }, Tt.push(zt), zt.enable(!1, !1), ie && ie(zt), n && n.add && !h) {
                var cn = zt.update;
                zt.update = function() {
                  zt.update = cn, l || c || zt.refresh()
                }, V.delayedCall(.01, zt.update), h = .01, l = c = 0
              } else zt.refresh();
              be && function() {
                if (Oe !== Vt) {
                  var e = Oe = Vt;
                  requestAnimationFrame(function() {
                    return e === Vt && Ut(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Ie
          }, e.register = function(t) {
            return X || (V = t || We(), Fe() && window.document && e.enable(), X = Ce), X
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) St[t] = e[t];
            return St
          }, e.disable = function(e, t) {
            Ce = 0, Tt.forEach(function(n) {
              return n[t ? "kill" : "disable"](e)
            }), wt(Y, "wheel", kt), wt(U, "scroll", kt), clearInterval(Q), wt(U, "touchcancel", Ie), wt($, "touchstart", Ie), yt(wt, U, "pointerdown,touchstart,mousedown", Re), yt(wt, U, "pointerup,touchend,mouseup", je), K.kill(), Ye(wt);
            for (var n = 0; n < w.length; n += 3) xt(wt, w[n], w[n + 1]), xt(wt, w[n], w[n + 2])
          }, e.enable = function() {
            if (Y = window, U = document, H = U.documentElement, $ = U.body, V && (G = V.utils.toArray, J = V.utils.clamp, ve = V.core.context || Ie, le = V.core.suppressOverwrites || Ie, he = Y.history.scrollRestoration || "auto", Ht = Y.pageYOffset, V.core.globals("ScrollTrigger", e), $)) {
              Ce = 1, (ge = document.createElement("div")).style.height = "100vh", ge.style.position = "absolute", Xt(), Ne(), B.register(V), e.isTouch = B.isTouch, me = B.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === B.isTouch, bt(Y, "wheel", kt), q = [Y, U, H, $], V.matchMedia ? (e.matchMedia = function(e) {
                var t, n = V.matchMedia();
                for (t in e) n.add(t, e[t]);
                return n
              }, V.addEventListener("matchMediaInit", function() {
                return zt()
              }), V.addEventListener("matchMediaRevert", function() {
                return Wt()
              }), V.addEventListener("matchMedia", function() {
                Ut(0, 1), Lt("matchMedia")
              }), V.matchMedia("(orientation: portrait)", function() {
                return At(), At
              })) : console.warn("Requires GSAP 3.11.0 or later"), At(), bt(U, "scroll", kt);
              var t, n, r = $.style,
                o = r.borderTopStyle,
                i = V.core.Animation.prototype;
              for (i.revert || Object.defineProperty(i, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), r.borderTopStyle = "solid", t = mt($), N.m = Math.round(t.top + N.sc()) || 0, A.m = Math.round(t.left + A.sc()) || 0, o ? r.borderTopStyle = o : r.removeProperty("border-top-style"), Q = setInterval(Ct, 250), V.delayedCall(.5, function() {
                  return Me = 0
                }), bt(U, "touchcancel", Ie), bt($, "touchstart", Ie), yt(bt, U, "pointerdown,touchstart,mousedown", Re), yt(bt, U, "pointerup,touchend,mouseup", je), ne = V.utils.checkPrefix("transform"), Gt.push(ne), X = De(), K = V.delayedCall(.2, Ut).pause(), ae = [U, "visibilitychange", function() {
                  var e = Y.innerWidth,
                    t = Y.innerHeight;
                  U.hidden ? (oe = e, ie = t) : oe === e && ie === t || Nt()
                }, U, "DOMContentLoaded", Ut, Y, "load", Ut, Y, "resize", Nt], Ye(bt), Tt.forEach(function(e) {
                  return e.enable(0, 1)
                }), n = 0; n < w.length; n += 3) xt(wt, w[n], w[n + 1]), xt(wt, w[n], w[n + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (xe = !!t.limitCallbacks);
            var n = t.syncInterval;
            n && clearInterval(Q) || (Q = n) && setInterval(Ct, n), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ye(wt) || Ye(bt, t.autoRefreshEvents || "none"), ce = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var n = R(e),
              r = w.indexOf(n),
              o = ze(n);
            ~r && w.splice(r, o ? 6 : 2), t && (o ? x.unshift(Y, t, $, t, H, t) : x.unshift(n, t))
          }, e.clearMatchMedia = function(e) {
            Tt.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, n) {
            var r = (Ue(e) ? R(e) : e).getBoundingClientRect(),
              o = r[n ? tt : nt] * t || 0;
            return n ? r.right - o > 0 && r.left + o < Y.innerWidth : r.bottom - o > 0 && r.top + o < Y.innerHeight
          }, e.positionInViewport = function(e, t, n) {
            Ue(e) && (e = R(e));
            var r = e.getBoundingClientRect(),
              o = r[n ? tt : nt],
              i = null == t ? o / 2 : t in Ot ? Ot[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return n ? (r.left + i) / Y.innerWidth : (r.top + i) / Y.innerHeight
          }, e.killAll = function(e) {
            if (Tt.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              }), !0 !== e) {
              var t = Rt.killAll || [];
              Rt = {}, t.forEach(function(e) {
                return e()
              })
            }
          }, e
        }();
      cn.version = "3.12.5", cn.saveStyles = function(e) {
        return e ? G(e).forEach(function(e) {
          if (e && e.style) {
            var t = Ft.indexOf(e);
            t >= 0 && Ft.splice(t, 5), Ft.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), V.core.getCache(e), ve())
          }
        }) : Ft
      }, cn.revert = function(e, t) {
        return zt(!e, t)
      }, cn.create = function(e, t) {
        return new cn(e, t)
      }, cn.refresh = function(e) {
        return e ? Nt() : (X || cn.register()) && Ut(!0)
      }, cn.update = function(e) {
        return ++w.cache && qt(!0 === e ? 2 : 0)
      }, cn.clearScrollMemory = Bt, cn.maxScroll = function(e, t) {
        return Xe(e, t ? A : N)
      }, cn.getScrollFunc = function(e, t) {
        return j(R(e), t ? A : N)
      }, cn.getById = function(e) {
        return Pt[e]
      }, cn.getAll = function() {
        return Tt.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, cn.isScrolling = function() {
        return !!Pe
      }, cn.snapDirectional = gt, cn.addEventListener = function(e, t) {
        var n = Rt[e] || (Rt[e] = []);
        ~n.indexOf(t) || n.push(t)
      }, cn.removeEventListener = function(e, t) {
        var n = Rt[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
      }, cn.batch = function(e, t) {
        var n, r = [],
          o = {},
          i = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var n = [],
              r = [],
              o = V.delayedCall(i, function() {
                t(n, r), n = [], r = []
              }).pause();
            return function(e) {
              n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1)
            }
          };
        for (n in t) o[n] = "on" === n.substr(0, 2) && He(t[n]) && "onRefreshInit" !== n ? s(0, t[n]) : t[n];
        return He(a) && (a = a(), bt(cn, "refresh", function() {
          return a = t.batchMax()
        })), G(e).forEach(function(e) {
          var t = {};
          for (n in o) t[n] = o[n];
          t.trigger = e, r.push(cn.create(t))
        }), r
      };
      var un, fn = function(e, t, n, r) {
          return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        },
        dn = function e(t, n) {
          !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (B.isTouch ? " pinch-zoom" : "") : "none", t === H && e($, n)
        },
        pn = {
          auto: 1,
          scroll: 1
        },
        mn = function(e) {
          var t, n = e.event,
            r = e.target,
            o = e.axis,
            i = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = i._gsap || V.core.getCache(i),
            s = De();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; i && i !== $ && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !pn[(t = dt(i)).overflowY] && !pn[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== r && !ze(i) && (pn[(t = dt(i)).overflowY] || pn[t.overflowX]), a._isScrollT = s, !i.hasAttribute("role") || "dialog" !== i.getAttribute("role") || i.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === o) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        vn = function(e, t, n, r) {
          return B.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: r = r && mn,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
              return n && bt(U, B.eventTypes[0], gn, !1, !0)
            },
            onDisable: function() {
              return wt(U, B.eventTypes[0], gn, !0)
            }
          })
        },
        hn = /(input|label|select|textarea)/i,
        gn = function(e) {
          var t = hn.test(e.target.tagName);
          (t || un) && (e._gsapAllow = !0, un = t)
        };
      cn.sort = function(e) {
        return Tt.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, cn.observe = function(e) {
        return new B(e)
      }, cn.normalizeScroll = function(e) {
        if (void 0 === e) return ue;
        if (!0 === e && ue) return ue.enable();
        if (!1 === e) return ue && ue.kill(), void(ue = e);
        var t = e instanceof B ? e : function(e) {
          qe(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, n, r, o, i, a, s, l, c = e,
            u = c.normalizeScrollX,
            f = c.momentum,
            d = c.allowNestedScroll,
            p = c.onRelease,
            m = R(e.target) || H,
            v = V.core.globals().ScrollSmoother,
            h = v && v.get(),
            g = me && (e.content && R(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            y = j(m, N),
            b = j(m, A),
            x = 1,
            E = (B.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth,
            S = 0,
            O = He(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            _ = vn(m, e.type, !0, d),
            M = function() {
              return o = !1
            },
            D = Ie,
            T = Ie,
            P = function() {
              n = Xe(m, N), T = J(me ? 1 : 0, n), u && (D = J(0, Xe(m, A))), r = Vt
            },
            C = function() {
              g._gsap.y = Le(parseFloat(g._gsap.y) + y.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            k = function() {
              P(), i.isActive() && i.vars.scrollY > n && (y() > n ? i.progress(1) && y(n) : i.resetTo("scrollY", n))
            };
          return g && V.set(g, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return me && "touchmove" === e.type && function() {
              if (o) {
                requestAnimationFrame(M);
                var e = Le(t.deltaY / 2),
                  n = T(y.v - e);
                if (g && n !== y.v + y.offset) {
                  y.offset = n - y.v;
                  var r = Le((parseFloat(g && g._gsap.y) || 0) - y.offset);
                  g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", g._gsap.y = r + "px", y.cacheID = w.cache, qt()
                }
                return !0
              }
              y.offset && C(), o = !0
            }() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            o = !1;
            var e = x;
            x = Le((Y.visualViewport && Y.visualViewport.scale || 1) / E), i.pause(), e !== x && dn(m, x > 1.01 || !u && "x"), a = b(), s = y(), P(), r = Vt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (y.offset && C(), t) {
              w.cache++;
              var r, o, a = O();
              u && (o = (r = b()) + .05 * a * -e.velocityX / .227, a *= fn(b, r, o, Xe(m, A)), i.vars.scrollX = D(o)), o = (r = y()) + .05 * a * -e.velocityY / .227, a *= fn(y, r, o, Xe(m, N)), i.vars.scrollY = T(o), i.invalidate().duration(a).play(.01), (me && i.vars.scrollY >= n || r >= n - 1) && V.to({}, {
                onUpdate: k,
                duration: a
              })
            } else l.restart(!0);
            p && p(e)
          }, e.onWheel = function() {
            i._ts && i.pause(), De() - S > 1e3 && (r = 0, S = De())
          }, e.onChange = function(e, t, n, o, i) {
            if (Vt !== r && P(), t && u && b(D(o[2] === t ? a + (e.startX - e.x) : b() + t - o[1])), n) {
              y.offset && C();
              var l = i[2] === n,
                c = l ? s + e.startY - e.y : y() + n - i[1],
                f = T(c);
              l && c !== f && (s += f - c), y(f)
            }(n || t) && qt()
          }, e.onEnable = function() {
            dn(m, !u && "x"), cn.addEventListener("refresh", k), bt(Y, "resize", k), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), _.enable()
          }, e.onDisable = function() {
            dn(m, !0), wt(Y, "resize", k), cn.removeEventListener("refresh", k), _.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new B(e)).iOS = me, me && !y() && y(1), me && V.ticker.add(Ie), l = t._dc, i = V.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: an(y, y(), function() {
                return i.pause()
              })
            },
            onUpdate: qt,
            onComplete: l.vars.onComplete
          }), t
        }(e);
        return ue && ue.target === t.target && ue.kill(), ze(t.target) && (ue = t), t
      }, cn.core = {
        _getVelocityProp: I,
        _inputObserver: vn,
        _scrollers: w,
        _proxies: x,
        bridge: {
          ss: function() {
            Pe || Lt("scrollStart"), Pe = De()
          },
          ref: function() {
            return ee
          }
        }
      }, We() && V.registerPlugin(cn)
    },
    12919: (e, t, n) => {
      n.d(t, {
        UP: () => a,
        Ub: () => i
      });
      var r = n(60211),
        o = n(71127);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const i = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, s] = (0, o.useState)(() => n ? i(e) : t);

        function l() {
          s(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), a
      }

      function a(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      n(51105)
    },
    17328: (e, t, n) => {
      n.d(t, {
        X3: () => r.X,
        fi: () => i,
        v6: () => s.v
      });
      var r = n(60211);
      const o = e => e - .02,
        i = {
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
      var a, s = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(a || (a = {})), Symbol.toStringTag
    },
    17982: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const r = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null
      };

      function o(e = {}) {
        let t, n, i, a, s = null,
          l = 0,
          c = !1,
          u = !1,
          f = !1,
          d = !1;

        function p() {
          i || (h() ? f = !0 : (c || n.emit("autoplay:play"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(l), l = e.setTimeout(x, a[n.selectedScrollSnap()]), s = (new Date).getTime(), n.emit("autoplay:timerset")
          }(), c = !0))
        }

        function m() {
          i || (c && n.emit("autoplay:stop"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(l), l = 0, s = null, n.emit("autoplay:timerstopped")
          }(), c = !1)
        }

        function v() {
          if (h()) return f = c, m();
          f && p()
        }

        function h() {
          const {
            ownerDocument: e
          } = n.internalEngine();
          return "hidden" === e.visibilityState
        }

        function g() {
          u || m()
        }

        function y() {
          u || p()
        }

        function b() {
          u = !0, m()
        }

        function w() {
          u = !1, p()
        }

        function x() {
          const {
            index: e
          } = n.internalEngine(), r = e.clone().add(1).get(), o = n.scrollSnapList().length - 1, i = t.stopOnLastSnap && r === o;
          if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), i) return m();
          p()
        }
        return {
          name: "autoplay",
          options: e,
          init: function(s, l) {
            n = s;
            const {
              mergeOptions: c,
              optionsAtMedia: u
            } = l, f = c(r, o.globalOptions), h = c(f, e);
            if (t = u(h), n.scrollSnapList().length <= 1) return;
            d = t.jump, i = !1, a = function(e, t) {
              const n = e.scrollSnapList();
              return "number" == typeof t ? n.map(() => t) : t(n, e)
            }(n, t.delay);
            const {
              eventStore: x,
              ownerDocument: E
            } = n.internalEngine(), S = !!n.internalEngine().options.watchDrag, O = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            x.add(E, "visibilitychange", v), S && n.on("pointerDown", g), S && !t.stopOnInteraction && n.on("pointerUp", y), t.stopOnMouseEnter && x.add(O, "mouseenter", b), t.stopOnMouseEnter && !t.stopOnInteraction && x.add(O, "mouseleave", w), t.stopOnFocusIn && n.on("slideFocusStart", m), t.stopOnFocusIn && !t.stopOnInteraction && x.add(n.containerNode(), "focusout", p), t.playOnInit && p()
          },
          destroy: function() {
            n.off("pointerDown", g).off("pointerUp", y).off("slideFocusStart", m), m(), i = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (d = e), p()
          },
          stop: function() {
            c && m()
          },
          reset: function() {
            c && p()
          },
          isPlaying: function() {
            return c
          },
          timeUntilNext: function() {
            return s ? a[n.selectedScrollSnap()] - ((new Date).getTime() - s) : null
          }
        }
      }
      o.globalOptions = void 0
    },
    20170: (e, t, n) => {
      n.d(t, {
        bm: () => Me,
        UC: () => Se,
        VY: () => _e,
        hJ: () => Ee,
        ZL: () => xe,
        bL: () => we,
        hE: () => Oe
      });
      var r = n(71127);

      function o(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var i = n(95362),
        a = n(85426),
        s = n(86126),
        l = n(53054),
        c = n(18429),
        u = n(42295);

      function f(e) {
        const t = d(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...i
            } = e, a = r.Children.toArray(o), s = a.find(m);
            if (s) {
              const e = s.props.children,
                o = a.map(t => t === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, u.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, u.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function d(e) {
        const t = r.forwardRef((e, t) => {
          const {
            children: n,
            ...o
          } = e, a = r.isValidElement(n) ? function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(n) : void 0, s = (0, i.s)(a, t);
          if (r.isValidElement(n)) {
            const e = function(e, t) {
              const n = {
                ...t
              };
              for (const r in t) {
                const o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                  const t = i(...e);
                  return o(...e), t
                } : o && (n[r] = o) : "style" === r ? n[r] = {
                  ...o,
                  ...i
                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
              }
              return {
                ...e,
                ...n
              }
            }(o, n.props);
            return n.type !== r.Fragment && (e.ref = s), r.cloneElement(n, e)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function m(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      var v, h = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = f(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        g = n(76286),
        y = n(94040),
        b = "dismissableLayer.update",
        w = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        x = r.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: l,
            onInteractOutside: c,
            onDismiss: f,
            ...d
          } = e, p = r.useContext(w), [m, x] = r.useState(null), O = m?.ownerDocument ?? globalThis?.document, [, _] = r.useState({}), M = (0, i.s)(t, e => x(e)), D = Array.from(p.layers), [T] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), P = D.indexOf(T), C = m ? D.indexOf(m) : -1, k = p.layersWithOutsidePointerEventsDisabled.size > 0, A = C >= P, N = function(e, t = globalThis?.document) {
            const n = (0, g.c)(e),
              o = r.useRef(!1),
              i = r.useRef(() => {});
            return r.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      S("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", i.current);
                  o.current = !1
                },
                r = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...p.branches].some(e => e.contains(t));
            A && !n && (s?.(e), c?.(e), e.defaultPrevented || f?.())
          }, O), R = function(e, t = globalThis?.document) {
            const n = (0, g.c)(e),
              o = r.useRef(!1);
            return r.useEffect(() => {
              const e = e => {
                e.target && !o.current && S("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }(e => {
            const t = e.target;
            [...p.branches].some(e => e.contains(t)) || (l?.(e), c?.(e), e.defaultPrevented || f?.())
          }, O);
          return (0, y.U)(e => {
            C === p.layers.size - 1 && (a?.(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
          }, O), r.useEffect(() => {
            if (m) return n && (0 === p.layersWithOutsidePointerEventsDisabled.size && (v = O.body.style.pointerEvents, O.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), E(), () => {
              n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (O.body.style.pointerEvents = v)
            }
          }, [m, O, n, p]), r.useEffect(() => () => {
            m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), E())
          }, [m, p]), r.useEffect(() => {
            const e = () => _({});
            return document.addEventListener(b, e), () => document.removeEventListener(b, e)
          }, []), (0, u.jsx)(h.div, {
            ...d,
            ref: M,
            style: {
              pointerEvents: k ? A ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: o(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: o(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: o(e.onPointerDownCapture, N.onPointerDownCapture)
          })
        });

      function E() {
        const e = new CustomEvent(b);
        document.dispatchEvent(e)
      }

      function S(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && c.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      x.displayName = "DismissableLayer", r.forwardRef((e, t) => {
        const n = r.useContext(w),
          o = r.useRef(null),
          a = (0, i.s)(t, o);
        return r.useEffect(() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, u.jsx)(h.div, {
          ...e,
          ref: a
        })
      }).displayName = "DismissableLayerBranch";
      var O = "focusScope.autoFocusOnMount",
        _ = "focusScope.autoFocusOnUnmount",
        M = {
          bubbles: !1,
          cancelable: !0
        },
        D = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: a,
            onUnmountAutoFocus: s,
            ...l
          } = e, [c, f] = r.useState(null), d = (0, g.c)(a), p = (0, g.c)(s), m = r.useRef(null), v = (0, i.s)(t, e => f(e)), y = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (o) {
              let e = function(e) {
                  if (y.paused || !c) return;
                  const t = e.target;
                  c.contains(t) ? m.current = t : k(m.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (y.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || k(m.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && k(c)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return c && r.observe(c, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [o, c, y.paused]), r.useEffect(() => {
            if (c) {
              A.add(y);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(O, M);
                c.addEventListener(O, d), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (k(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(T(c).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && k(c))
              }
              return () => {
                c.removeEventListener(O, d), setTimeout(() => {
                  const t = new CustomEvent(_, M);
                  c.addEventListener(_, p), c.dispatchEvent(t), t.defaultPrevented || k(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(_, p), A.remove(y)
                }, 0)
              }
            }
          }, [c, d, p, y]);
          const b = r.useCallback(e => {
            if (!n && !o) return;
            if (y.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = T(e);
                  return [P(t, e), P(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && k(i, {
                select: !0
              })) : (e.preventDefault(), n && k(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, o, y.paused]);
          return (0, u.jsx)(h.div, {
            tabIndex: -1,
            ...l,
            ref: v,
            onKeyDown: b
          })
        });

      function T(e) {
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

      function P(e, t) {
        for (const n of e)
          if (!C(n, {
              upTo: t
            })) return n
      }

      function C(e, {
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

      function k(e, {
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
      D.displayName = "FocusScope";
      var A = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = N(e, t), e.unshift(t)
          },
          remove(t) {
            e = N(e, t), e[0]?.resume()
          }
        }
      }();

      function N(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var R = n(63155),
        j = r.forwardRef((e, t) => {
          const {
            container: n,
            ...o
          } = e, [i, a] = r.useState(!1);
          (0, R.N)(() => a(!0), []);
          const s = n || i && globalThis?.document?.body;
          return s ? c.createPortal((0, u.jsx)(h.div, {
            ...o,
            ref: t
          }), s) : null
        });
      j.displayName = "Portal";
      var I = e => {
        const {
          present: t,
          children: n
        } = e, o = function(e) {
          const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), a = r.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = function(e, t) {
            return r.useReducer((e, n) => t[e][n] ?? e, e)
          }(s, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return r.useEffect(() => {
            const e = L(o.current);
            a.current = "mounted" === l ? e : "none"
          }, [l]), (0, R.N)(() => {
            const t = o.current,
              n = i.current;
            if (n !== e) {
              const r = a.current,
                o = L(t);
              c(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
            }
          }, [e, c]), (0, R.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                r = r => {
                  const a = L(o.current).includes(r.animationName);
                  if (r.target === t && a && (c("ANIMATION_END"), !i.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                s = e => {
                  e.target === t && (a.current = L(o.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
              }
            }
            c("ANIMATION_END")
          }, [t, c]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: r.useCallback(e => {
              o.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), a = "function" == typeof n ? n({
          present: o.isPresent
        }) : r.Children.only(n), s = (0, i.s)(o.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(a));
        return "function" == typeof n || o.isPresent ? r.cloneElement(a, {
          ref: s
        }) : null
      };

      function L(e) {
        return e?.animationName || "none"
      }
      I.displayName = "Presence";
      var F = 0;

      function W() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var z = n(97359),
        B = n(94926),
        V = "Dialog",
        [X, Y] = (0, a.A)(V),
        [U, H] = X(V),
        $ = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: a,
            modal: c = !0
          } = e, f = r.useRef(null), d = r.useRef(null), [p, m] = (0, l.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: a,
            caller: V
          });
          return (0, u.jsx)(U, {
            scope: t,
            triggerRef: f,
            contentRef: d,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: p,
            onOpenChange: m,
            onOpenToggle: r.useCallback(() => m(e => !e), [m]),
            modal: c,
            children: n
          })
        };
      $.displayName = V;
      var q = "DialogTrigger";
      r.forwardRef((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, a = H(q, n), s = (0, i.s)(t, a.triggerRef);
        return (0, u.jsx)(h.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": a.open,
          "aria-controls": a.contentId,
          "data-state": me(a.open),
          ...r,
          ref: s,
          onClick: o(e.onClick, a.onOpenToggle)
        })
      }).displayName = q;
      var K = "DialogPortal",
        [G, J] = X(K, {
          forceMount: void 0
        }),
        Z = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: i
          } = e, a = H(K, t);
          return (0, u.jsx)(G, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, u.jsx)(I, {
              present: n || a.open,
              children: (0, u.jsx)(j, {
                asChild: !0,
                container: i,
                children: e
              })
            }))
          })
        };
      Z.displayName = K;
      var Q = "DialogOverlay",
        ee = r.forwardRef((e, t) => {
          const n = J(Q, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = H(Q, e.__scopeDialog);
          return i.modal ? (0, u.jsx)(I, {
            present: r || i.open,
            children: (0, u.jsx)(ne, {
              ...o,
              ref: t
            })
          }) : null
        });
      ee.displayName = Q;
      var te = f("DialogOverlay.RemoveScroll"),
        ne = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = H(Q, n);
          return (0, u.jsx)(z.A, {
            as: te,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(h.div, {
              "data-state": me(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        re = "DialogContent",
        oe = r.forwardRef((e, t) => {
          const n = J(re, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = H(re, e.__scopeDialog);
          return (0, u.jsx)(I, {
            present: r || i.open,
            children: i.modal ? (0, u.jsx)(ie, {
              ...o,
              ref: t
            }) : (0, u.jsx)(ae, {
              ...o,
              ref: t
            })
          })
        });
      oe.displayName = re;
      var ie = r.forwardRef((e, t) => {
          const n = H(re, e.__scopeDialog),
            a = r.useRef(null),
            s = (0, i.s)(t, n.contentRef, a);
          return r.useEffect(() => {
            const e = a.current;
            if (e) return (0, B.Eq)(e)
          }, []), (0, u.jsx)(se, {
            ...e,
            ref: s,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: o(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: o(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: o(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        ae = r.forwardRef((e, t) => {
          const n = H(re, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, u.jsx)(se, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const r = t.target,
                a = n.triggerRef.current?.contains(r);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        se = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: a,
            onCloseAutoFocus: s,
            ...l
          } = e, c = H(re, n), f = r.useRef(null), d = (0, i.s)(t, f);
          return r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? W()), document.body.insertAdjacentElement("beforeend", e[1] ?? W()), F++, () => {
              1 === F && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), F--
            }
          }, []), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(D, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: a,
              onUnmountAutoFocus: s,
              children: (0, u.jsx)(x, {
                role: "dialog",
                id: c.contentId,
                "aria-describedby": c.descriptionId,
                "aria-labelledby": c.titleId,
                "data-state": me(c.open),
                ...l,
                ref: d,
                onDismiss: () => c.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(ye, {
                titleId: c.titleId
              }), (0, u.jsx)(be, {
                contentRef: f,
                descriptionId: c.descriptionId
              })]
            })]
          })
        }),
        le = "DialogTitle",
        ce = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = H(le, n);
          return (0, u.jsx)(h.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      ce.displayName = le;
      var ue = "DialogDescription",
        fe = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = H(ue, n);
          return (0, u.jsx)(h.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      fe.displayName = ue;
      var de = "DialogClose",
        pe = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = H(de, n);
          return (0, u.jsx)(h.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: o(e.onClick, () => i.onOpenChange(!1))
          })
        });

      function me(e) {
        return e ? "open" : "closed"
      }
      pe.displayName = de;
      var ve = "DialogTitleWarning",
        [he, ge] = (0, a.q)(ve, {
          contentName: re,
          titleName: le,
          docsSlug: "dialog"
        }),
        ye = ({
          titleId: e
        }) => {
          const t = ge(ve),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        be = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ge("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        we = $,
        xe = Z,
        Ee = ee,
        Se = oe,
        Oe = ce,
        _e = fe,
        Me = pe
    },
    20250: (e, t, n) => {
      n.d(t, {
        eU: () => s,
        zp: () => u
      });
      var r = n(34705);
      let o, i, a = 0;

      function s(e, t) {
        const n = "atom" + ++a,
          r = {
            toString() {
              return this.debugLabel ? n + ":" + this.debugLabel : n
            }
          };
        return "function" == typeof e ? r.read = e : (r.init = e, r.read = l, r.write = c), t && (r.write = t), r
      }

      function l(e) {
        return e(this)
      }

      function c(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function u() {
        return i || (i = o ? o() : (0, r.ff)(), globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = i), globalThis.__JOTAI_DEFAULT_STORE__ !== i && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")), i
      }
    },
    30257: (e, t, n) => {
      function r() {
        return r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(this, arguments)
      }

      function o(e, t) {
        if (e.length !== t.length) throw new Error("vectors must be same length");
        return e.map(function(e, n) {
          return e + t[n]
        })
      }

      function i(e) {
        return Math.max.apply(Math, e.map(Math.abs))
      }

      function a(e) {
        return Object.freeze(e), Object.values(e).forEach(function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || a(e)
        }), e
      }
      n.d(t, {
        J: () => p
      });
      var s = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        l = [-1, -1, -1],
        c = a({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const u = function(e) {
        void 0 === e && (e = {});
        var t, n, u, f = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
            }
            return a({
              on: function(n, r) {
                return e[n] = (e[n] || []).concat(r),
                  function() {
                    return t(n, r)
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
          d = f.on,
          p = f.off,
          m = f.dispatch,
          v = c,
          h = {
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
          g = !1,
          y = function(e) {
            Array.isArray(e) ? e.forEach(function(e) {
              return x(e)
            }) : x(e)
          },
          b = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? v : v = a(r({}, c, v, e))
          },
          w = function(e) {
            var i = r({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: h.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: h.axisVelocity,
              axisMovement: h.axisMovement,
              get axisMovementProjection() {
                return o(i.axisMovement, i.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            m("wheel", r({}, i, {
              previous: n
            })), n = i
          },
          x = function(e) {
            var n, a, c, u, f, d = (f = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? l : t.map(function(e) {
                  return e ? -1 : 1
                });
                return r({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((a = (n = e).deltaX * s[n.deltaMode], c = n.deltaY * s[n.deltaMode], u = (n.deltaZ || 0) * s[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [a, c, u]
              }), v.reverseSign), r({}, f, {
                axisDelta: f.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              p = d.axisDelta,
              m = d.timeStamp,
              y = i(p);
            e.preventDefault && function(e, t) {
              var n = v.preventWheelAction,
                r = t[0],
                o = t[1],
                i = t[2];
              if ("boolean" == typeof n) return n;
              switch (n) {
                case "x":
                  return Math.abs(r) >= e;
                case "y":
                  return Math.abs(o) >= e;
                case "z":
                  return Math.abs(i) >= e;
                default:
                  return !1
              }
            }(y, p) && e.preventDefault(), h.isStarted ? h.isMomentum && y > Math.max(2, 2 * h.lastAbsDelta) && (k(!0), P()) : P(), 0 === y && Object.is && Object.is(e.deltaX, -0) ? g = !0 : (t = e, h.axisMovement = o(h.axisMovement, p), h.lastAbsDelta = y, h.scrollPointsToMerge.push({
              axisDelta: p,
              timeStamp: m
            }), E(), w({
              axisDelta: p,
              isStart: !h.isStartPublished
            }), h.isStartPublished = !0, C())
          },
          E = function() {
            var e;
            2 === h.scrollPointsToMerge.length ? (h.scrollPoints.unshift({
              axisDeltaSum: h.scrollPointsToMerge.map(function(e) {
                return e.axisDelta
              }).reduce(o),
              timeStamp: (e = h.scrollPointsToMerge.map(function(e) {
                return e.timeStamp
              }), e.reduce(function(e, t) {
                return e + t
              }) / e.length)
            }), O(), h.scrollPointsToMerge.length = 0, h.scrollPoints.length = 1, h.isMomentum || D()) : h.isStartPublished || S()
          },
          S = function() {
            var e;
            h.axisVelocity = (e = h.scrollPointsToMerge, e[e.length - 1]).axisDelta.map(function(e) {
              return e / h.willEndTimeout
            })
          },
          O = function() {
            var e = h.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var r = t.timeStamp - n.timeStamp;
              if (!(r <= 0)) {
                var o = t.axisDeltaSum.map(function(e) {
                    return e / r
                  }),
                  i = o.map(function(e, t) {
                    return e / (h.axisVelocity[t] || 1)
                  });
                h.axisVelocity = o, h.accelerationFactors.push(i), _(r)
              }
            }
          },
          _ = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            h.isMomentum || (t = Math.max(100, 2 * t)), h.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          M = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          D = function() {
            if (h.accelerationFactors.length >= 5) {
              if (g && (g = !1, i(h.axisVelocity) >= .2)) return void T();
              var e = h.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(M).length === e.length;
                return t || n
              }) && T(), h.accelerationFactors = e
            }
          },
          T = function() {
            h.isMomentum = !0
          },
          P = function() {
            (h = {
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
            }).isStarted = !0, h.startTime = Date.now(), n = void 0, g = !1
          },
          C = function() {
            clearTimeout(u), u = setTimeout(k, h.willEndTimeout)
          },
          k = function(e) {
            void 0 === e && (e = !1), h.isStarted && (h.isMomentum && e ? w({
              isEnding: !0,
              isMomentumCancel: !0
            }) : w({
              isEnding: !0
            }), h.isMomentum = !1, h.isStarted = !1)
          },
          A = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
              };
            return a({
              observe: function(r) {
                return r.addEventListener("wheel", e, {
                    passive: !1
                  }), t.push(r),
                  function() {
                    return n(r)
                  }
              },
              unobserve: n,
              disconnect: function() {
                t.forEach(n)
              }
            })
          }(y),
          N = A.observe,
          R = A.unobserve,
          j = A.disconnect;
        return b(e), a({
          on: d,
          off: p,
          observe: N,
          unobserve: R,
          disconnect: j,
          feedWheel: y,
          updateOptions: b
        })
      };
      var f = {
        active: !0,
        breakpoints: {},
        wheelDraggingClass: "is-wheel-dragging",
        forceWheelAxis: void 0,
        target: void 0
      };
      p.globalOptions = void 0;
      var d = !1;

      function p(e) {
        var t;
        void 0 === e && (e = {});
        var n = function() {};
        return {
          name: "wheelGestures",
          options: e,
          init: function(r, o) {
            var i, a, s = o.mergeOptions,
              l = o.optionsAtMedia,
              c = s(f, p.globalOptions),
              m = s(c, e);
            t = l(m);
            var v = r.internalEngine(),
              h = null != (i = t.target) ? i : r.containerNode().parentNode,
              g = null != (a = t.forceWheelAxis) ? a : v.options.axis,
              y = u({
                preventWheelAction: g,
                reverseSign: [!0, !0, !1]
              });

            function b() {
              _ = ("x" === g ? v.containerRect.width : v.containerRect.height) / 2
            }
            var w, x = y.observe(h),
              E = y.on("wheel", function(e) {
                var r = e.axisDelta,
                  o = r[0],
                  i = r[1],
                  a = "x" === g ? o : i,
                  s = "x" === g ? i : o,
                  l = e.isMomentum && e.previous && !e.previous.isMomentum,
                  c = e.isEnding && !e.isMomentum || l;
                Math.abs(a) > Math.abs(s) && !S && !e.isMomentum && !M && function(e) {
                  try {
                    k(w = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return d && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n()
                  }
                  S = !0, O = 0, document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0), t.wheelDraggingClass && h.classList.add(t.wheelDraggingClass)
                }(e), M && e.isEnding && (M = !1), S && (function(e) {
                  var t = A(e),
                    n = t.isAtBoundary,
                    r = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((O += Math.abs(r)) > _) return M = !0, D(e), !0
                  } else O = 0;
                  return !1
                }(e) || (c ? D(e) : k(C("mousemove", e))))
              }),
              S = !1,
              O = 0,
              _ = 0,
              M = !1;

            function D(e) {
              S = !1, k(C("mouseup", e)), T(), t.wheelDraggingClass && h.classList.remove(t.wheelDraggingClass)
            }

            function T() {
              document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0)
            }

            function P(e) {
              S && e.isTrusted && e.stopImmediatePropagation()
            }

            function C(e, t) {
              var n, r;
              if (g === v.options.axis) {
                var o = t.axisMovement;
                n = o[0], r = o[1]
              } else {
                var i = t.axisMovement;
                r = i[0], n = i[1]
              }
              if (A(t).isAtBoundary) {
                var a = Math.min(O / _, 1),
                  s = O * (n > 0 ? -1 : 1) * (.25 + .5 * a);
                n += s, r += s
              }
              if (!v.options.skipSnaps && !v.options.dragFree) {
                var l = v.containerRect.width,
                  c = v.containerRect.height;
                n = n < 0 ? Math.max(n, -l) : Math.min(n, l), r = r < 0 ? Math.max(r, -c) : Math.min(r, c)
              }
              return new MouseEvent(e, {
                clientX: w.clientX + n,
                clientY: w.clientY + r,
                screenX: w.screenX + n,
                screenY: w.screenY + r,
                movementX: n,
                movementY: r,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function k(e) {
              r.containerNode().dispatchEvent(e)
            }

            function A(e) {
              var t = e.axisDelta,
                n = t[0],
                o = t[1],
                i = r.scrollProgress(),
                a = "x" === g ? n : o;
              return {
                isAtBoundary: a < 0 && !(i < 1) || a > 0 && !(i > 0),
                primaryAxisDelta: a
              }
            }
            b(), r.on("resize", b), n = function() {
              x(), E(), r.off("resize", b), T()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
    },
    34705: (e, t, n) => {
      function r(e) {
        return "init" in e
      }

      function o(e) {
        return !!e.write
      }

      function i(e) {
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
          const r = () => n.p.delete(e);
          t.then(r, r)
        }
      }

      function c(e, t, n) {
        var r;
        const o = new Set;
        for (const t of (null == (r = n.get(e)) ? void 0 : r.t) || []) o.add(t);
        for (const e of t.p) o.add(e);
        return o
      }
      n.d(t, {
        ff: () => N,
        oJ: () => A
      });
      const u = (e, t, ...n) => t.read(...n),
        f = (e, t, ...n) => t.write(...n),
        d = (e, t) => {
          var n;
          return null == (n = t.INTERNAL_onInit) ? void 0 : n.call(t, e)
        },
        p = (e, t, n) => {
          var r;
          return null == (r = t.onMount) ? void 0 : r.call(t, n)
        },
        m = (e, t) => {
          var n;
          const r = k(e),
            o = r[0],
            i = r[6],
            a = r[9];
          if (!t) throw new Error("Atom is undefined or null");
          let s = o.get(t);
          return s || (s = {
            d: new Map,
            p: new Set,
            n: 0
          }, o.set(t, s), null == (n = i.i) || n.call(i, t), null == a || a(e, t)), s
        },
        v = e => {
          const t = k(e),
            n = t[1],
            r = t[3],
            o = t[4],
            i = t[5],
            a = t[6],
            s = t[13],
            l = [],
            c = e => {
              try {
                e()
              } catch (e) {
                l.push(e)
              }
            };
          do {
            a.f && c(a.f);
            const t = new Set,
              l = t.add.bind(t);
            r.forEach(e => {
              var t;
              return null == (t = n.get(e)) ? void 0 : t.l.forEach(l)
            }), r.clear(), i.forEach(l), i.clear(), o.forEach(l), o.clear(), t.forEach(c), r.size && s(e)
          } while (r.size || i.size || o.size);
          if (l.length) throw new AggregateError(l)
        },
        h = e => {
          const t = k(e),
            n = t[1],
            r = t[2],
            o = t[3],
            i = t[11],
            a = t[14],
            s = t[17],
            l = [],
            u = new WeakSet,
            f = new WeakSet,
            d = Array.from(o);
          for (; d.length;) {
            const t = d[d.length - 1],
              o = i(e, t);
            if (f.has(t)) d.pop();
            else if (u.has(t)) {
              if (r.get(t) === o.n) l.push([t, o]);
              else if (r.has(t)) throw new Error("[Bug] invalidated atom exists");
              f.add(t), d.pop()
            } else {
              u.add(t);
              for (const e of c(t, o, n)) u.has(e) || d.push(e)
            }
          }
          for (let t = l.length - 1; t >= 0; --t) {
            const [n, i] = l[t];
            let c = !1;
            for (const e of i.d.keys())
              if (e !== n && o.has(e)) {
                c = !0;
                break
              } c && (r.set(n, i.n), a(e, n), s(e, n)), r.delete(n)
          }
        },
        g = new WeakSet,
        y = (e, t) => {
          var n, c;
          const u = k(e),
            f = u[1],
            d = u[2],
            p = u[3],
            m = u[6],
            v = u[7],
            h = u[11],
            y = u[12],
            b = u[13],
            w = u[14],
            x = u[16],
            E = u[17],
            S = u[20],
            O = u[26],
            _ = u[28],
            M = h(e, t),
            D = _[0];
          if (i(M)) {
            if (f.has(t) && d.get(t) !== M.n || M.m === D) return M.m = D, M;
            let n = !1;
            for (const [t, r] of M.d)
              if (w(e, t).n !== r) {
                n = !0;
                break
              } if (!n) return M.m = D, M
          }
          let T = !0;
          const P = new Set(M.d.keys()),
            C = new Map,
            A = () => {
              for (const e of P) C.has(e) || M.d.delete(e)
            },
            N = () => {
              if (f.has(t)) {
                const n = !p.size;
                E(e, t), n && (b(e), y(e))
              }
            },
            R = n => {
              var o;
              if (n === t) {
                const t = h(e, n);
                if (!i(t)) {
                  if (!r(n)) throw new Error("no atom init");
                  S(e, n, n.init)
                }
                return a(t)
              }
              const c = w(e, n);
              try {
                return a(c)
              } finally {
                C.set(n, c.n), M.d.set(n, c.n), s(M.v) && l(t, M.v, c), f.has(t) && (null == (o = f.get(n)) || o.t.add(t)), T || N()
              }
            };
          let j, I;
          const L = {
              get signal() {
                return j || (j = new AbortController), j.signal
              },
              get setSelf() {
                return console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), o(t) || console.warn("setSelf function cannot be used with read-only atom"), !I && o(t) && (I = (...n) => {
                  if (T && console.warn("setSelf function cannot be called in sync"), !T) try {
                    return x(e, t, ...n)
                  } finally {
                    b(e), y(e)
                  }
                }), I
              }
            },
            F = M.n,
            W = d.get(t) === F;
          try {
            g.delete(e);
            const r = v(e, t, R, L);
            if (g.has(e) && console.warn("Detected store mutation during atom read. This is not supported."), S(e, t, r), s(r)) {
              O(e, r, () => null == j ? void 0 : j.abort());
              const t = () => {
                A(), N()
              };
              r.then(t, t)
            } else A();
            return null == (n = m.r) || n.call(m, t), M.m = D, M
          } catch (e) {
            return delete M.v, M.e = e, ++M.n, M.m = D, M
          } finally {
            T = !1, M.n !== F && W && (d.set(t, M.n), p.add(t), null == (c = m.c) || c.call(m, t))
          }
        },
        b = (e, t) => {
          const n = k(e),
            r = n[1],
            o = n[2],
            i = n[11],
            a = [t];
          for (; a.length;) {
            const t = a.pop(),
              n = i(e, t);
            for (const s of c(t, n, r)) {
              const t = i(e, s);
              o.get(s) !== t.n && (o.set(s, t.n), a.push(s))
            }
          }
        },
        w = (e, t, ...n) => {
          const o = k(e),
            i = o[3],
            s = o[6],
            l = o[8],
            c = o[11],
            u = o[12],
            f = o[13],
            d = o[14],
            p = o[15],
            m = o[16],
            v = o[17],
            h = o[20],
            y = o[28];
          let b = !0;
          const w = t => a(d(e, t)),
            x = (n, ...o) => {
              var a;
              const l = c(e, n);
              try {
                if (n === t) {
                  if (!r(n)) throw new Error("atom not writable");
                  g.add(e);
                  const t = l.n,
                    c = o[0];
                  return h(e, n, c), v(e, n), void(t !== l.n && (++y[0], i.add(n), p(e, n), null == (a = s.c) || a.call(s, n)))
                }
                return m(e, n, ...o)
              } finally {
                b || (f(e), u(e))
              }
            };
          try {
            return l(e, t, w, x, ...n)
          } finally {
            b = !1
          }
        },
        x = (e, t) => {
          var n;
          const r = k(e),
            o = r[1],
            i = r[3],
            a = r[6],
            s = r[11],
            l = r[15],
            c = r[18],
            u = r[19],
            f = s(e, t),
            d = o.get(t);
          if (d) {
            for (const [r, o] of f.d)
              if (!d.d.has(r)) {
                const u = s(e, r);
                c(e, r).t.add(t), d.d.add(r), o !== u.n && (i.add(r), l(e, r), null == (n = a.c) || n.call(a, r))
              } for (const n of d.d)
              if (!f.d.has(n)) {
                d.d.delete(n);
                const r = u(e, n);
                null == r || r.t.delete(t)
              }
          }
        },
        E = (e, t) => {
          var n;
          const r = k(e),
            i = r[1],
            a = r[4],
            s = r[6],
            l = r[10],
            c = r[11],
            u = r[12],
            f = r[13],
            d = r[14],
            p = r[16],
            m = r[18],
            v = c(e, t);
          let h = i.get(t);
          if (!h) {
            d(e, t);
            for (const n of v.d.keys()) m(e, n).t.add(t);
            if (h = {
                l: new Set,
                d: new Set(v.d.keys()),
                t: new Set
              }, i.set(t, h), o(t)) {
              const n = () => {
                let n = !0;
                const r = (...r) => {
                  try {
                    return p(e, t, ...r)
                  } finally {
                    n || (f(e), u(e))
                  }
                };
                try {
                  const o = l(e, t, r);
                  o && (h.u = () => {
                    n = !0;
                    try {
                      o()
                    } finally {
                      n = !1
                    }
                  })
                } finally {
                  n = !1
                }
              };
              a.add(n)
            }
            null == (n = s.m) || n.call(s, t)
          }
          return h
        },
        S = (e, t) => {
          var n, r;
          const o = k(e),
            i = o[1],
            a = o[5],
            s = o[6],
            l = o[11],
            c = o[19],
            u = l(e, t);
          let f = i.get(t);
          if (!f || f.l.size) return f;
          let d = !1;
          for (const e of f.t)
            if (null == (n = i.get(e)) ? void 0 : n.d.has(t)) {
              d = !0;
              break
            } if (d) return f;
          f.u && a.add(f.u), f = void 0, i.delete(t);
          for (const n of u.d.keys()) {
            const r = c(e, n);
            null == r || r.t.delete(t)
          }
          null == (r = s.u) || r.call(s, t)
        },
        O = (e, t, n) => {
          const r = k(e),
            o = r[11],
            i = r[27],
            a = o(e, t),
            c = "v" in a,
            u = a.v;
          if (s(n))
            for (const r of a.d.keys()) l(t, n, o(e, r));
          a.v = n, delete a.e, c && Object.is(u, a.v) || (++a.n, s(u) && i(e, u))
        },
        _ = (e, t) => a((0, k(e)[14])(e, t)),
        M = (e, t, ...n) => {
          const r = k(e),
            o = r[3],
            i = r[12],
            a = r[13],
            s = r[16],
            l = o.size;
          try {
            return s(e, t, ...n)
          } finally {
            o.size !== l && (a(e), i(e))
          }
        },
        D = (e, t, n) => {
          const r = k(e),
            o = r[12],
            i = r[18],
            a = r[19],
            s = i(e, t).l;
          return s.add(n), o(e), () => {
            s.delete(n), a(e, t), o(e)
          }
        },
        T = (e, t, n) => {
          const r = k(e)[25];
          let o = r.get(t);
          if (!o) {
            o = new Set, r.set(t, o);
            const e = () => r.delete(t);
            t.then(e, e)
          }
          o.add(n)
        },
        P = (e, t) => {
          const n = k(e)[25].get(t);
          null == n || n.forEach(e => e())
        },
        C = new WeakMap,
        k = e => {
          const t = C.get(e);
          if (!t) throw new Error("Store must be created by buildStore to read its building blocks");
          return t
        };

      function A(e) {
        const t = k(e),
          n = t[24];
        return n ? n(t) : t
      }

      function N(...e) {
        const t = {
            get: e => (0, k(t)[21])(t, e),
            set: (e, ...n) => (0, k(t)[22])(t, e, ...n),
            sub: (e, n) => (0, k(t)[23])(t, e, n)
          },
          n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, u, f, d, p, m, v, h, y, b, w, x, E, S, O, _, M, D, void 0, new WeakMap, T, P, [0]].map((t, n) => e[n] || t);
        return C.set(t, Object.freeze(n)), t
      }
    },
    49292: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const r = {
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
        let t, n, i, a, s, l = 0,
          c = !1,
          u = !1;

        function f() {
          if (i) return;
          if (c) return;
          n.emit("autoScroll:play");
          const e = n.internalEngine(),
            {
              ownerWindow: r
            } = e;
          l = r.setTimeout(() => {
            e.scrollBody = function(e) {
              const {
                location: r,
                previousLocation: o,
                offsetLocation: i,
                target: a,
                scrollTarget: s,
                index: l,
                indexPrevious: c,
                limit: {
                  reachedMin: u,
                  reachedMax: f,
                  constrain: p
                },
                options: {
                  loop: m
                }
              } = e, v = "forward" === t.direction ? -1 : 1, h = () => E;
              let g = 0,
                y = 0,
                b = r.get(),
                w = 0,
                x = !1;
              const E = {
                direction: () => y,
                duration: () => -1,
                velocity: () => g,
                settled: () => x,
                seek: function() {
                  let e = 0;
                  o.set(r), g = v * t.speed, b += g, r.add(g), a.set(r), e = b - w, y = Math.sign(e), w = b;
                  const h = s.byDistance(0, !1).index;
                  l.get() !== h && (c.set(l.get()), l.set(h), n.emit("select"));
                  const S = "forward" === t.direction ? u(i.get()) : f(i.get());
                  if (!m && S) {
                    x = !0;
                    const e = p(r.get());
                    r.set(e), a.set(r), d()
                  }
                  return E
                },
                useBaseFriction: h,
                useBaseDuration: h,
                useFriction: h,
                useDuration: h
              };
              return E
            }(e), e.animation.start()
          }, a), c = !0
        }

        function d() {
          if (i) return;
          if (!c) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = s, t.clearTimeout(l), l = 0, c = !1
        }

        function p() {
          u || d()
        }

        function m() {
          u || y()
        }

        function v() {
          u = !0, d()
        }

        function h() {
          u = !1, f()
        }

        function g() {
          n.off("settle", g), f()
        }

        function y() {
          n.on("settle", g)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(l, c) {
            n = l;
            const {
              mergeOptions: u,
              optionsAtMedia: g
            } = c, y = u(r, o.globalOptions), b = u(y, e);
            if (t = g(b), n.scrollSnapList().length <= 1) return;
            a = t.startDelay, i = !1, s = n.internalEngine().scrollBody;
            const {
              eventStore: w
            } = n.internalEngine(), x = !!n.internalEngine().options.watchDrag, E = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            x && n.on("pointerDown", p), x && !t.stopOnInteraction && n.on("pointerUp", m), t.stopOnMouseEnter && w.add(E, "mouseenter", v), t.stopOnMouseEnter && !t.stopOnInteraction && w.add(E, "mouseleave", h), t.stopOnFocusIn && n.on("slideFocusStart", d), t.stopOnFocusIn && !t.stopOnInteraction && w.add(n.containerNode(), "focusout", f), t.playOnInit && f()
          },
          destroy: function() {
            n.off("pointerDown", p).off("pointerUp", m).off("slideFocusStart", d).off("settle", g), d(), i = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (a = e), f()
          },
          stop: function() {
            c && d()
          },
          reset: function() {
            c && (d(), y())
          },
          isPlaying: function() {
            return c
          }
        }
      }
      o.globalOptions = void 0
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    91633: (e, t, n) => {
      n.d(t, {
        m: () => r.m
      });
      var r = n(25778)
    },
    96369: (e, t, n) => {
      function r(e) {
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
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
            var o, i, a;
            o = e, i = t, a = n[t], (i = r(i)) in o ? Object.defineProperty(o, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[i] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function a(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n.d(t, {
        c: () => l
      });
      var s = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        l = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = i(i({}, e.defaultVariants), t);
            for (var o in r) {
              var a, l = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var c = l;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var u = e.variantClassNames[o][c];
                u && (n += " " + u)
              }
            }
            for (var [f, d] of e.compoundVariants) s(f, r, e.defaultVariants) && (n += " " + d);
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
    }
  }
]);