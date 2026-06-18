try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "819734cd-b5eb-428c-9046-ce7de0784c60", e._sentryDebugIdIdentifier = "sentry-dbid-819734cd-b5eb-428c-9046-ce7de0784c60")
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
  [1138], {
    17966(e, n, t) {
      t.d(n, {
        BN: () => g,
        ER: () => m,
        Ej: () => y,
        UE: () => w,
        UU: () => p,
        cY: () => d,
        jD: () => b,
        we: () => i
      });
      var r = t(45750),
        o = t(93082),
        s = t(84017),
        u = "undefined" != typeof document ? o.useLayoutEffect : function() {};

      function f(e, n) {
        if (e === n) return !0;
        if (typeof e != typeof n) return !1;
        if ("function" == typeof e && e.toString() === n.toString()) return !0;
        let t, r, o;
        if (e && n && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (t = e.length, t !== n.length) return !1;
            for (r = t; 0 !== r--;)
              if (!f(e[r], n[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length) return !1;
          for (r = t; 0 !== r--;)
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = t; 0 !== r--;) {
            const t = o[r];
            if (!("_owner" === t && e.$$typeof || f(e[t], n[t]))) return !1
          }
          return !0
        }
        return e != e && n != n
      }

      function l(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function c(e, n) {
        const t = l(e);
        return Math.round(n * t) / t
      }

      function a(e) {
        const n = o.useRef(e);
        return u(() => {
          n.current = e
        }), n
      }

      function i(e) {
        void 0 === e && (e = {});
        const {
          placement: n = "bottom",
          strategy: t = "absolute",
          middleware: i = [],
          platform: d,
          elements: {
            reference: g,
            floating: m
          } = {},
          transform: p = !0,
          whileElementsMounted: y,
          open: b
        } = e, [w, R] = o.useState({
          x: 0,
          y: 0,
          strategy: t,
          placement: n,
          middlewareData: {},
          isPositioned: !1
        }), [h, v] = o.useState(i);
        f(h, i) || v(i);
        const [M, E] = o.useState(null), [C, k] = o.useState(null), _ = o.useCallback(e => {
          e !== P.current && (P.current = e, E(e))
        }, []), S = o.useCallback(e => {
          e !== D.current && (D.current = e, k(e))
        }, []), x = g || M, I = m || C, P = o.useRef(null), D = o.useRef(null), U = o.useRef(w), j = null != y, O = a(y), T = a(d), L = a(b), q = o.useCallback(() => {
          if (!P.current || !D.current) return;
          const e = {
            placement: n,
            strategy: t,
            middleware: h
          };
          T.current && (e.platform = T.current), (0, r.rD)(P.current, D.current, e).then(e => {
            const n = {
              ...e,
              isPositioned: !1 !== L.current
            };
            A.current && !f(U.current, n) && (U.current = n, s.flushSync(() => {
              R(n)
            }))
          })
        }, [h, n, t, T, L]);
        u(() => {
          !1 === b && U.current.isPositioned && (U.current.isPositioned = !1, R(e => ({
            ...e,
            isPositioned: !1
          })))
        }, [b]);
        const A = o.useRef(!1);
        u(() => (A.current = !0, () => {
          A.current = !1
        }), []), u(() => {
          if (x && (P.current = x), I && (D.current = I), x && I) {
            if (O.current) return O.current(x, I, q);
            q()
          }
        }, [x, I, q, O, j]);
        const B = o.useMemo(() => ({
            reference: P,
            floating: D,
            setReference: _,
            setFloating: S
          }), [_, S]),
          N = o.useMemo(() => ({
            reference: x,
            floating: I
          }), [x, I]),
          Y = o.useMemo(() => {
            const e = {
              position: t,
              left: 0,
              top: 0
            };
            if (!N.floating) return e;
            const n = c(N.floating, w.x),
              r = c(N.floating, w.y);
            return p ? {
              ...e,
              transform: "translate(" + n + "px, " + r + "px)",
              ...l(N.floating) >= 1.5 && {
                willChange: "transform"
              }
            } : {
              position: t,
              left: n,
              top: r
            }
          }, [t, p, N.floating, w.x, w.y]);
        return o.useMemo(() => ({
          ...w,
          update: q,
          refs: B,
          elements: N,
          floatingStyles: Y
        }), [w, q, B, N, Y])
      }
      const d = (e, n) => {
          const t = (0, r.cY)(e);
          return {
            name: t.name,
            fn: t.fn,
            options: [e, n]
          }
        },
        g = (e, n) => {
          const t = (0, r.BN)(e);
          return {
            name: t.name,
            fn: t.fn,
            options: [e, n]
          }
        },
        m = (e, n) => ({
          fn: (0, r.ER)(e).fn,
          options: [e, n]
        }),
        p = (e, n) => {
          const t = (0, r.UU)(e);
          return {
            name: t.name,
            fn: t.fn,
            options: [e, n]
          }
        },
        y = (e, n) => {
          const t = (0, r.Ej)(e);
          return {
            name: t.name,
            fn: t.fn,
            options: [e, n]
          }
        },
        b = (e, n) => {
          const t = (0, r.jD)(e);
          return {
            name: t.name,
            fn: t.fn,
            options: [e, n]
          }
        },
        w = (e, n) => {
          const t = (e => ({
            name: "arrow",
            options: e,
            fn(n) {
              const {
                element: t,
                padding: o
              } = "function" == typeof e ? e(n) : e;
              return t && (s = t, {}.hasOwnProperty.call(s, "current")) ? null != t.current ? (0, r.UE)({
                element: t.current,
                padding: o
              }).fn(n) : {} : t ? (0, r.UE)({
                element: t,
                padding: o
              }).fn(n) : {};
              var s
            }
          }))(e);
          return {
            name: t.name,
            fn: t.fn,
            options: [e, n]
          }
        }
    },
    93223(e, n, t) {
      t.d(n, {
        we: () => b
      });
      var r = t(93082),
        o = t.t(r, 2),
        s = "undefined" != typeof document ? r.useLayoutEffect : function() {};
      const u = {
        ...o
      }.useInsertionEffect || (e => e());
      t(39793);
      var f = t(24843),
        l = (t(84017), t(17966));
      const c = {
        ...o
      };
      let a = !1,
        i = 0;
      const d = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + i++,
        g = c.useId || function() {
          const [e, n] = r.useState(() => a ? d() : void 0);
          return s(() => {
            null == e && n(d())
          }, []), r.useEffect(() => {
            a = !0
          }, []), e
        };
      const m = r.createContext(null),
        p = r.createContext(null);

      function y(e) {
        const {
          open: n = !1,
          onOpenChange: t,
          elements: o
        } = e, s = g(), f = r.useRef({}), [l] = r.useState(() => function() {
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
        }()), c = null != ((null == (a = r.useContext(m)) ? void 0 : a.id) || null);
        var a;
        const [i, d] = r.useState(o.reference), p = function(e) {
          const n = r.useRef(() => {});
          return u(() => {
            n.current = e
          }), r.useCallback(function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...t)
          }, [])
        }((e, n, r) => {
          f.current.openEvent = e ? n : void 0, l.emit("openchange", {
            open: e,
            event: n,
            reason: r,
            nested: c
          }), null == t || t(e, n, r)
        }), y = r.useMemo(() => ({
          setPositionReference: d
        }), []), b = r.useMemo(() => ({
          reference: i || o.reference || null,
          floating: o.floating || null,
          domReference: o.reference
        }), [i, o.reference, o.floating]);
        return r.useMemo(() => ({
          dataRef: f,
          open: n,
          onOpenChange: p,
          elements: b,
          events: l,
          floatingId: s,
          refs: y
        }), [n, p, b, l, s, y])
      }

      function b(e) {
        void 0 === e && (e = {});
        const {
          nodeId: n
        } = e, t = y({
          ...e,
          elements: {
            reference: null,
            floating: null,
            ...e.elements
          }
        }), o = e.rootContext || t, u = o.elements, [c, a] = r.useState(null), [i, d] = r.useState(null), g = (null == u ? void 0 : u.domReference) || c, m = r.useRef(null), b = r.useContext(p);
        s(() => {
          g && (m.current = g)
        }, [g]);
        const w = (0, l.we)({
            ...e,
            elements: {
              ...u,
              ...i && {
                reference: i
              }
            }
          }),
          R = r.useCallback(e => {
            const n = (0, f.vq)(e) ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e
            } : e;
            d(n), w.refs.setReference(n)
          }, [w.refs]),
          h = r.useCallback(e => {
            ((0, f.vq)(e) || null === e) && (m.current = e, a(e)), ((0, f.vq)(w.refs.reference.current) || null === w.refs.reference.current || null !== e && !(0, f.vq)(e)) && w.refs.setReference(e)
          }, [w.refs]),
          v = r.useMemo(() => ({
            ...w.refs,
            setReference: h,
            setPositionReference: R,
            domReference: m
          }), [w.refs, h, R]),
          M = r.useMemo(() => ({
            ...w.elements,
            domReference: g
          }), [w.elements, g]),
          E = r.useMemo(() => ({
            ...w,
            ...o,
            refs: v,
            elements: M,
            nodeId: n
          }), [w, v, M, n, o]);
        return s(() => {
          o.dataRef.current.floatingContext = E;
          const e = null == b ? void 0 : b.nodesRef.current.find(e => e.id === n);
          e && (e.context = E)
        }), r.useMemo(() => ({
          ...w,
          context: E,
          refs: v,
          elements: M
        }), [w, v, M, E])
      }
    },
    40732(e, n, t) {
      t.d(n, {
        LU: () => r.LU
      });
      var r = t(68428);
      t(48785)
    }
  }
]);