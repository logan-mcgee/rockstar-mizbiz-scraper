try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b076ea9-cf30-4f40-ac22-f91b4795dce1", e._sentryDebugIdIdentifier = "sentry-dbid-2b076ea9-cf30-4f40-ac22-f91b4795dce1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2865, 5246], {
    22865: (e, t, n) => {
      n.r(t), n.d(t, {
        useControllableState: () => f,
        useControllableStateReducer: () => d
      });
      var o = n(71127),
        r = n.t(o, 2),
        c = n(63155),
        s = r[" useEffectEvent ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()],
        a = r[" useInsertionEffect ".trim().toString()] || c.N;

      function f({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [c, s, l] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), c = o.useRef(n), s = o.useRef(t);
          return a(() => {
            s.current = t
          }, [t]), o.useEffect(() => {
            c.current !== n && (s.current?.(n), c.current = n)
          }, [n, c]), [n, r, s]
        }({
          defaultProp: t,
          onChange: n
        }), f = void 0 !== e, u = f ? e : c; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== f) {
              const t = e ? "controlled" : "uncontrolled",
                n = f ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = f
          }, [f, r])
        }
        const d = o.useCallback(t => {
          if (f) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else s(t)
        }, [f, e, s, l]);
        return [u, d]
      }
      var u = Symbol("RADIX:SYNC_STATE");

      function d(e, t, n, r) {
        const {
          prop: a,
          defaultProp: f,
          onChange: d,
          caller: i
        } = t, g = void 0 !== a, p = function(e) {
          if ("function" == typeof s) return s(e);
          const t = o.useRef(() => {
            throw new Error("Cannot call an event handler while rendering.")
          });
          return "function" == typeof l ? l(() => {
            t.current = e
          }) : (0, c.N)(() => {
            t.current = e
          }), o.useMemo(() => (...e) => t.current?.(...e), [])
        }(d); {
          const e = o.useRef(void 0 !== a);
          o.useEffect(() => {
            const t = e.current;
            if (t !== g) {
              const e = t ? "controlled" : "uncontrolled",
                n = g ? "controlled" : "uncontrolled";
              console.warn(`${i} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = g
          }, [g, i])
        }
        const b = [{
          ...n,
          state: f
        }];
        r && b.push(r);
        const [h, y] = o.useReducer((t, n) => {
          if (n.type === u) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return g && !Object.is(o.state, t.state) && p(o.state), o
        }, ...b), w = h.state, m = o.useRef(w);
        o.useEffect(() => {
          m.current !== w && (m.current = w, g || p(w))
        }, [p, w, m, g]);
        const E = o.useMemo(() => void 0 !== a ? {
          ...h,
          state: a
        } : h, [h, a]);
        return o.useEffect(() => {
          g && !Object.is(a, h.state) && y({
            type: u,
            state: a
          })
        }, [a, h.state, g]), [E, y]
      }
    },
    63155: (e, t, n) => {
      n.d(t, {
        N: () => r
      });
      var o = n(71127),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);