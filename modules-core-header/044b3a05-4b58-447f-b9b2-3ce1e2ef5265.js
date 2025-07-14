try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "044b3a05-4b58-447f-b9b2-3ce1e2ef5265", e._sentryDebugIdIdentifier = "sentry-dbid-044b3a05-4b58-447f-b9b2-3ce1e2ef5265")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2083, 4464], {
    44464: (e, t, n) => {
      n.r(t), n.d(t, {
        useControllableState: () => a,
        useControllableStateReducer: () => f
      });
      var o = n(71127),
        r = n.t(o, 2),
        c = n(85307),
        s = r[" useEffectEvent ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()],
        u = r[" useInsertionEffect ".trim().toString()] || c.N;

      function a({
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
          return u((() => {
            s.current = t
          }), [t]), o.useEffect((() => {
            c.current !== n && (s.current?.(n), c.current = n)
          }), [n, c]), [n, r, s]
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, d = a ? e : c; {
          const t = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = t.current;
            if (e !== a) {
              const t = e ? "controlled" : "uncontrolled",
                n = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }), [a, r])
        }
        const f = o.useCallback((t => {
          if (a) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else s(t)
        }), [a, e, s, l]);
        return [d, f]
      }
      var d = Symbol("RADIX:SYNC_STATE");

      function f(e, t, n, r) {
        const {
          prop: u,
          defaultProp: a,
          onChange: f,
          caller: i
        } = t, b = void 0 !== u, g = function(e) {
          if ("function" == typeof s) return s(e);
          const t = o.useRef((() => {
            throw new Error("Cannot call an event handler while rendering.")
          }));
          return "function" == typeof l ? l((() => {
            t.current = e
          })) : (0, c.N)((() => {
            t.current = e
          })), o.useMemo((() => (...e) => t.current?.(...e)), [])
        }(f); {
          const e = o.useRef(void 0 !== u);
          o.useEffect((() => {
            const t = e.current;
            if (t !== b) {
              const e = t ? "controlled" : "uncontrolled",
                n = b ? "controlled" : "uncontrolled";
              console.warn(`${i} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = b
          }), [b, i])
        }
        const p = [{
          ...n,
          state: a
        }];
        r && p.push(r);
        const [h, y] = o.useReducer(((t, n) => {
          if (n.type === d) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return b && !Object.is(o.state, t.state) && g(o.state), o
        }), ...p), w = h.state, m = o.useRef(w);
        o.useEffect((() => {
          m.current !== w && (m.current = w, b || g(w))
        }), [g, w, m, b]);
        const E = o.useMemo((() => void 0 !== u ? {
          ...h,
          state: u
        } : h), [h, u]);
        return o.useEffect((() => {
          b && !Object.is(u, h.state) && y({
            type: d,
            state: u
          })
        }), [u, h.state, b]), [E, y]
      }
    },
    85307: (e, t, n) => {
      n.d(t, {
        N: () => r
      });
      var o = n(71127),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);