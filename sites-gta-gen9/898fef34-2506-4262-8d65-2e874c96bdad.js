try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "898fef34-2506-4262-8d65-2e874c96bdad", e._sentryDebugIdIdentifier = "sentry-dbid-898fef34-2506-4262-8d65-2e874c96bdad")
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
  [8183], {
    53213(e, n, t) {
      t.d(n, {
        we: () => f
      });
      var r = t(61980),
        o = t(93082),
        l = t(84017),
        s = "undefined" != typeof document ? o.useLayoutEffect : function() {};

      function a(e, n) {
        if (e === n) return !0;
        if (typeof e != typeof n) return !1;
        if ("function" == typeof e && e.toString() === n.toString()) return !0;
        let t, r, o;
        if (e && n && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (t = e.length, t !== n.length) return !1;
            for (r = t; 0 !== r--;)
              if (!a(e[r], n[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length) return !1;
          for (r = t; 0 !== r--;)
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = t; 0 !== r--;) {
            const t = o[r];
            if (!("_owner" === t && e.$$typeof || a(e[t], n[t]))) return !1
          }
          return !0
        }
        return e != e && n != n
      }

      function i(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function c(e, n) {
        const t = i(e);
        return Math.round(n * t) / t
      }

      function u(e) {
        const n = o.useRef(e);
        return s(() => {
          n.current = e
        }), n
      }

      function f(e) {
        void 0 === e && (e = {});
        const {
          placement: n = "bottom",
          strategy: t = "absolute",
          middleware: f = [],
          platform: d,
          elements: {
            reference: p,
            floating: m
          } = {},
          transform: g = !0,
          whileElementsMounted: y,
          open: h
        } = e, [w, b] = o.useState({
          x: 0,
          y: 0,
          strategy: t,
          placement: n,
          middlewareData: {},
          isPositioned: !1
        }), [v, R] = o.useState(f);
        a(v, f) || R(f);
        const [E, x] = o.useState(null), [M, T] = o.useState(null), C = o.useCallback(e => {
          e !== I.current && (I.current = e, x(e))
        }, []), S = o.useCallback(e => {
          e !== P.current && (P.current = e, T(e))
        }, []), k = p || E, _ = m || M, I = o.useRef(null), P = o.useRef(null), A = o.useRef(w), U = null != y, j = u(y), D = u(d), L = u(h), N = o.useCallback(() => {
          if (!I.current || !P.current) return;
          const e = {
            placement: n,
            strategy: t,
            middleware: v
          };
          D.current && (e.platform = D.current), (0, r.rD)(I.current, P.current, e).then(e => {
            const n = {
              ...e,
              isPositioned: !1 !== L.current
            };
            O.current && !a(A.current, n) && (A.current = n, l.flushSync(() => {
              b(n)
            }))
          })
        }, [v, n, t, D, L]);
        s(() => {
          !1 === h && A.current.isPositioned && (A.current.isPositioned = !1, b(e => ({
            ...e,
            isPositioned: !1
          })))
        }, [h]);
        const O = o.useRef(!1);
        s(() => (O.current = !0, () => {
          O.current = !1
        }), []), s(() => {
          if (k && (I.current = k), _ && (P.current = _), k && _) {
            if (j.current) return j.current(k, _, N);
            N()
          }
        }, [k, _, N, j, U]);
        const q = o.useMemo(() => ({
            reference: I,
            floating: P,
            setReference: C,
            setFloating: S
          }), [C, S]),
          B = o.useMemo(() => ({
            reference: k,
            floating: _
          }), [k, _]),
          G = o.useMemo(() => {
            const e = {
              position: t,
              left: 0,
              top: 0
            };
            if (!B.floating) return e;
            const n = c(B.floating, w.x),
              r = c(B.floating, w.y);
            return g ? {
              ...e,
              transform: "translate(" + n + "px, " + r + "px)",
              ...i(B.floating) >= 1.5 && {
                willChange: "transform"
              }
            } : {
              position: t,
              left: n,
              top: r
            }
          }, [t, g, B.floating, w.x, w.y]);
        return o.useMemo(() => ({
          ...w,
          update: N,
          refs: q,
          elements: B,
          floatingStyles: G
        }), [w, N, q, B, G])
      }
      t.d(n, ["BN", 0, (e, n) => {
        const t = (0, r.BN)(e);
        return {
          name: t.name,
          fn: t.fn,
          options: [e, n]
        }
      }, "ER", 0, (e, n) => ({
        fn: (0, r.ER)(e).fn,
        options: [e, n]
      }), "Ej", 0, (e, n) => {
        const t = (0, r.Ej)(e);
        return {
          name: t.name,
          fn: t.fn,
          options: [e, n]
        }
      }, "UE", 0, (e, n) => {
        const t = (e => ({
          name: "arrow",
          options: e,
          fn(n) {
            const {
              element: t,
              padding: o
            } = "function" == typeof e ? e(n) : e;
            return t && (l = t, {}.hasOwnProperty.call(l, "current")) ? null != t.current ? (0, r.UE)({
              element: t.current,
              padding: o
            }).fn(n) : {} : t ? (0, r.UE)({
              element: t,
              padding: o
            }).fn(n) : {};
            var l
          }
        }))(e);
        return {
          name: t.name,
          fn: t.fn,
          options: [e, n]
        }
      }, "UU", 0, (e, n) => {
        const t = (0, r.UU)(e);
        return {
          name: t.name,
          fn: t.fn,
          options: [e, n]
        }
      }, "cY", 0, (e, n) => {
        const t = (0, r.cY)(e);
        return {
          name: t.name,
          fn: t.fn,
          options: [e, n]
        }
      }, "jD", 0, (e, n) => {
        const t = (0, r.jD)(e);
        return {
          name: t.name,
          fn: t.fn,
          options: [e, n]
        }
      }])
    },
    4139(e, n, t) {
      t.d(n, {
        we: () => h
      });
      var r = t(93082),
        o = t.t(r, 2),
        l = "undefined" != typeof document ? r.useLayoutEffect : function() {};
      const s = {
        ...o
      }.useInsertionEffect || (e => e());
      t(39793);
      var a = t(91538),
        i = (t(84017), t(53213));
      const c = {
        ...o
      };
      let u = !1,
        f = 0;
      const d = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + f++,
        p = c.useId || function() {
          const [e, n] = r.useState(() => u ? d() : void 0);
          return l(() => {
            null == e && n(d())
          }, []), r.useEffect(() => {
            u = !0
          }, []), e
        };
      const m = r.createContext(null),
        g = r.createContext(null);

      function y(e) {
        const {
          open: n = !1,
          onOpenChange: t,
          elements: o
        } = e, l = p(), a = r.useRef({}), [i] = r.useState(() => function() {
          const e = new Map;
          return {
            emit(n, t) {
              var r;
              null == (r = e.get(n)) || r.forEach(e => e(t))
            },
            on(n, t) {
              e.has(n) || e.set(n, new Set), e.get(n).add(t)
            },
            off(n, t) {
              var r;
              null == (r = e.get(n)) || r.delete(t)
            }
          }
        }()), c = null != ((null == (u = r.useContext(m)) ? void 0 : u.id) || null);
        var u;
        const [f, d] = r.useState(o.reference), g = function(e) {
          const n = r.useRef(() => {});
          return s(() => {
            n.current = e
          }), r.useCallback(function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...t)
          }, [])
        }((e, n, r) => {
          a.current.openEvent = e ? n : void 0, i.emit("openchange", {
            open: e,
            event: n,
            reason: r,
            nested: c
          }), null == t || t(e, n, r)
        }), y = r.useMemo(() => ({
          setPositionReference: d
        }), []), h = r.useMemo(() => ({
          reference: f || o.reference || null,
          floating: o.floating || null,
          domReference: o.reference
        }), [f, o.reference, o.floating]);
        return r.useMemo(() => ({
          dataRef: a,
          open: n,
          onOpenChange: g,
          elements: h,
          events: i,
          floatingId: l,
          refs: y
        }), [n, g, h, i, l, y])
      }

      function h(e) {
        var n, t;
        let {
          elements: o,
          ...s
        } = void 0 === e ? {} : e;
        const {
          nodeId: c
        } = s, u = y({
          ...s,
          elements: {
            reference: null != (n = null == o ? void 0 : o.reference) ? n : null,
            floating: null != (t = null == o ? void 0 : o.floating) ? t : null
          }
        }), f = s.rootContext || u, d = f.elements, [p, m] = r.useState(null), [h, w] = r.useState(null), b = (null == d ? void 0 : d.domReference) || p, v = r.useRef(null), R = r.useContext(g);
        l(() => {
          b && (v.current = b)
        }, [b]);
        const E = (0, i.we)({
            ...s,
            elements: {
              ...d,
              ...h && {
                reference: h
              }
            }
          }),
          x = r.useCallback(e => {
            const n = (0, a.vq)(e) ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e
            } : e;
            w(n), E.refs.setReference(n)
          }, [E.refs]),
          M = r.useCallback(e => {
            ((0, a.vq)(e) || null === e) && (v.current = e, m(e)), ((0, a.vq)(E.refs.reference.current) || null === E.refs.reference.current || null !== e && !(0, a.vq)(e)) && E.refs.setReference(e)
          }, [E.refs]),
          T = r.useMemo(() => ({
            ...E.refs,
            setReference: M,
            setPositionReference: x,
            domReference: v
          }), [E.refs, M, x]),
          C = r.useMemo(() => ({
            ...E.elements,
            domReference: b
          }), [E.elements, b]),
          S = r.useMemo(() => ({
            ...E,
            ...f,
            refs: T,
            elements: C,
            nodeId: c
          }), [E, T, C, c, f]);
        return l(() => {
          f.dataRef.current.floatingContext = S;
          const e = null == R ? void 0 : R.nodesRef.current.find(e => e.id === c);
          e && (e.context = S)
        }), r.useMemo(() => ({
          ...E,
          context: S,
          refs: T,
          elements: C
        }), [E, T, C, S])
      }
    },
    44211(e, n, t) {
      t.d(n, {
        LU: () => r.LU
      });
      var r = t(28214);
      t(52350)
    },
    89539(e, n, t) {
      t.d(n, {
        A: () => o
      });
      var r = t(20212);

      function o(e) {
        let {
          swiper: n,
          extendParams: t,
          on: o
        } = e;

        function l(e, n) {
          const t = function() {
            let e, n, t;
            return (r, o) => {
              for (n = -1, e = r.length; e - n > 1;) t = e + n >> 1, r[t] <= o ? n = t : e = t;
              return e
            }
          }();
          let r, o;
          return this.x = e, this.y = n, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (o = t(this.x, e), r = o - 1, (e - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0
          }, this
        }

        function s() {
          n.controller.control && n.controller.spline && (n.controller.spline = void 0, delete n.controller.spline)
        }
        t({
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        }), n.controller = {
          control: void 0
        }, o("beforeInit", () => {
          "undefined" != typeof window && ("string" == typeof n.params.controller.control || n.params.controller.control instanceof HTMLElement) ? ("string" == typeof n.params.controller.control ? [...document.querySelectorAll(n.params.controller.control)] : [n.params.controller.control]).forEach(e => {
            if (n.controller.control || (n.controller.control = []), e && e.swiper) n.controller.control.push(e.swiper);
            else if (e) {
              const t = `${n.params.eventsPrefix}init`,
                r = o => {
                  n.controller.control.push(o.detail[0]), n.update(), e.removeEventListener(t, r)
                };
              e.addEventListener(t, r)
            }
          }) : n.controller.control = n.params.controller.control
        }), o("update", () => {
          s()
        }), o("resize", () => {
          s()
        }), o("observerUpdate", () => {
          s()
        }), o("setTranslate", (e, t, r) => {
          n.controller.control && !n.controller.control.destroyed && n.controller.setTranslate(t, r)
        }), o("setTransition", (e, t, r) => {
          n.controller.control && !n.controller.control.destroyed && n.controller.setTransition(t, r)
        }), Object.assign(n.controller, {
          setTranslate: function(e, t) {
            const r = n.controller.control;
            let o, s;
            const a = n.constructor;

            function i(e) {
              if (e.destroyed) return;
              const t = n.rtlTranslate ? -n.translate : n.translate;
              "slide" === n.params.controller.by && (function(e) {
                n.controller.spline = n.params.loop ? new l(n.slidesGrid, e.slidesGrid) : new l(n.snapGrid, e.snapGrid)
              }(e), s = -n.controller.spline.interpolate(-t)), s && "container" !== n.params.controller.by || (o = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), !Number.isNaN(o) && Number.isFinite(o) || (o = 1), s = (t - n.minTranslate()) * o + e.minTranslate()), n.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, n), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            if (Array.isArray(r))
              for (let e = 0; e < r.length; e += 1) r[e] !== t && r[e] instanceof a && i(r[e]);
            else r instanceof a && t !== r && i(r)
          },
          setTransition: function(e, t) {
            const o = n.constructor,
              l = n.controller.control;
            let s;

            function a(t) {
              t.destroyed || (t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && (0, r.n)(() => {
                t.updateAutoHeight()
              }), (0, r.l)(t.wrapperEl, () => {
                l && t.transitionEnd()
              })))
            }
            if (Array.isArray(l))
              for (s = 0; s < l.length; s += 1) l[s] !== t && l[s] instanceof o && a(l[s]);
            else l instanceof o && t !== l && a(l)
          }
        })
      }
    }
  }
]);