try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5f6f7927-0fb3-4464-bebc-b6e2b4c93d04", e._sentryDebugIdIdentifier = "sentry-dbid-5f6f7927-0fb3-4464-bebc-b6e2b4c93d04")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2865, 5246], {
    22865: (e, t, n) => {
      n.r(t), n.d(t, {
        useControllableState: () => u,
        useControllableStateReducer: () => d
      });
      var o = n(71127),
        r = n.t(o, 2),
        s = n(63155),
        c = r[" useEffectEvent ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()],
        f = r[" useInsertionEffect ".trim().toString()] || s.N;

      function u({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, c, l] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), c = o.useRef(t);
          return f((() => {
            c.current = t
          }), [t]), o.useEffect((() => {
            s.current !== n && (c.current?.(n), s.current = n)
          }), [n, s]), [n, r, c]
        }({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, a = u ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = t.current;
            if (e !== u) {
              const t = e ? "controlled" : "uncontrolled",
                n = u ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = u
          }), [u, r])
        }
        const d = o.useCallback((t => {
          if (u) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else c(t)
        }), [u, e, c, l]);
        return [a, d]
      }
      var a = Symbol("RADIX:SYNC_STATE");

      function d(e, t, n, r) {
        const {
          prop: f,
          defaultProp: u,
          onChange: d,
          caller: i
        } = t, b = void 0 !== f, g = function(e) {
          if ("function" == typeof c) return c(e);
          const t = o.useRef((() => {
            throw new Error("Cannot call an event handler while rendering.")
          }));
          return "function" == typeof l ? l((() => {
            t.current = e
          })) : (0, s.N)((() => {
            t.current = e
          })), o.useMemo((() => (...e) => t.current?.(...e)), [])
        }(d); {
          const e = o.useRef(void 0 !== f);
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
          state: u
        }];
        r && p.push(r);
        const [h, y] = o.useReducer(((t, n) => {
          if (n.type === a) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return b && !Object.is(o.state, t.state) && g(o.state), o
        }), ...p), w = h.state, m = o.useRef(w);
        o.useEffect((() => {
          m.current !== w && (m.current = w, b || g(w))
        }), [g, w, m, b]);
        const E = o.useMemo((() => void 0 !== f ? {
          ...h,
          state: f
        } : h), [h, f]);
        return o.useEffect((() => {
          b && !Object.is(f, h.state) && y({
            type: a,
            state: f
          })
        }), [f, h.state, b]), [E, y]
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