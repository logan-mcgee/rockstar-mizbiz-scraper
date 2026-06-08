try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e2008ecc-bc25-4690-8c58-810bfebe5f69", e._sentryDebugIdIdentifier = "sentry-dbid-e2008ecc-bc25-4690-8c58-810bfebe5f69")
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
  [3660], {
    93223(e, n, t) {
      t.d(n, {
        we: () => y
      });
      var o = t(93082),
        s = t.t(o, 2),
        r = "undefined" != typeof document ? o.useLayoutEffect : function() {};
      const l = {
        ...s
      }.useInsertionEffect || (e => e());
      t(39793);
      var f = t(24843),
        u = (t(84017), t(17966));
      const c = {
        ...s
      };
      let a = !1,
        d = 0;
      const i = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + d++,
        g = c.useId || function() {
          const [e, n] = o.useState(() => a ? i() : void 0);
          return r(() => {
            null == e && n(i())
          }, []), o.useEffect(() => {
            a = !0
          }, []), e
        };
      const b = o.createContext(null),
        m = o.createContext(null);

      function p(e) {
        const {
          open: n = !1,
          onOpenChange: t,
          elements: s
        } = e, r = g(), f = o.useRef({}), [u] = o.useState(() => function() {
          const e = new Map;
          return {
            emit(n, t) {
              var o;
              null == (o = e.get(n)) || o.forEach(e => e(t))
            },
            on(n, t) {
              e.has(n) || e.set(n, new Set), e.get(n).add(t)
            },
            off(n, t) {
              var o;
              null == (o = e.get(n)) || o.delete(t)
            }
          }
        }()), c = null != ((null == (a = o.useContext(b)) ? void 0 : a.id) || null);
        var a;
        const [d, i] = o.useState(s.reference), m = function(e) {
          const n = o.useRef(() => {});
          return l(() => {
            n.current = e
          }), o.useCallback(function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
            return null == n.current ? void 0 : n.current(...t)
          }, [])
        }((e, n, o) => {
          f.current.openEvent = e ? n : void 0, u.emit("openchange", {
            open: e,
            event: n,
            reason: o,
            nested: c
          }), null == t || t(e, n, o)
        }), p = o.useMemo(() => ({
          setPositionReference: i
        }), []), y = o.useMemo(() => ({
          reference: d || s.reference || null,
          floating: s.floating || null,
          domReference: s.reference
        }), [d, s.reference, s.floating]);
        return o.useMemo(() => ({
          dataRef: f,
          open: n,
          onOpenChange: m,
          elements: y,
          events: u,
          floatingId: r,
          refs: p
        }), [n, m, y, u, r, p])
      }

      function y(e) {
        void 0 === e && (e = {});
        const {
          nodeId: n
        } = e, t = p({
          ...e,
          elements: {
            reference: null,
            floating: null,
            ...e.elements
          }
        }), s = e.rootContext || t, l = s.elements, [c, a] = o.useState(null), [d, i] = o.useState(null), g = (null == l ? void 0 : l.domReference) || c, b = o.useRef(null), y = o.useContext(m);
        r(() => {
          g && (b.current = g)
        }, [g]);
        const w = (0, u.we)({
            ...e,
            elements: {
              ...l,
              ...d && {
                reference: d
              }
            }
          }),
          v = o.useCallback(e => {
            const n = (0, f.vq)(e) ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e
            } : e;
            i(n), w.refs.setReference(n)
          }, [w.refs]),
          R = o.useCallback(e => {
            ((0, f.vq)(e) || null === e) && (b.current = e, a(e)), ((0, f.vq)(w.refs.reference.current) || null === w.refs.reference.current || null !== e && !(0, f.vq)(e)) && w.refs.setReference(e)
          }, [w.refs]),
          h = o.useMemo(() => ({
            ...w.refs,
            setReference: R,
            setPositionReference: v,
            domReference: b
          }), [w.refs, R, v]),
          C = o.useMemo(() => ({
            ...w.elements,
            domReference: g
          }), [w.elements, g]),
          M = o.useMemo(() => ({
            ...w,
            ...s,
            refs: h,
            elements: C,
            nodeId: n
          }), [w, h, C, n, s]);
        return r(() => {
          s.dataRef.current.floatingContext = M;
          const e = null == y ? void 0 : y.nodesRef.current.find(e => e.id === n);
          e && (e.context = M)
        }), o.useMemo(() => ({
          ...w,
          context: M,
          refs: h,
          elements: C
        }), [w, h, C, M])
      }
    },
    46966(e, n, t) {
      t.d(n, {
        LU: () => o.LU
      });
      var o = t(30740);
      t(21423)
    }
  }
]);