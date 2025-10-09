try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1e34d437-486d-4fcc-be66-1eca5ba09df8", e._sentryDebugIdIdentifier = "sentry-dbid-1e34d437-486d-4fcc-be66-1eca5ba09df8")
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
        useControllableState: () => d,
        useControllableStateReducer: () => u
      });
      var o = n(71127),
        r = n.t(o, 2),
        s = n(63155),
        c = r[" useEffectEvent ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()],
        a = r[" useInsertionEffect ".trim().toString()] || s.N;

      function d({
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
          return a((() => {
            c.current = t
          }), [t]), o.useEffect((() => {
            s.current !== n && (c.current?.(n), s.current = n)
          }), [n, s]), [n, r, c]
        }({
          defaultProp: t,
          onChange: n
        }), d = void 0 !== e, f = d ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = t.current;
            if (e !== d) {
              const t = e ? "controlled" : "uncontrolled",
                n = d ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = d
          }), [d, r])
        }
        const u = o.useCallback((t => {
          if (d) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else c(t)
        }), [d, e, c, l]);
        return [f, u]
      }
      var f = Symbol("RADIX:SYNC_STATE");

      function u(e, t, n, r) {
        const {
          prop: a,
          defaultProp: d,
          onChange: u,
          caller: i
        } = t, g = void 0 !== a, b = function(e) {
          if ("function" == typeof c) return c(e);
          const t = o.useRef((() => {
            throw new Error("Cannot call an event handler while rendering.")
          }));
          return "function" == typeof l ? l((() => {
            t.current = e
          })) : (0, s.N)((() => {
            t.current = e
          })), o.useMemo((() => (...e) => t.current?.(...e)), [])
        }(u); {
          const e = o.useRef(void 0 !== a);
          o.useEffect((() => {
            const t = e.current;
            if (t !== g) {
              const e = t ? "controlled" : "uncontrolled",
                n = g ? "controlled" : "uncontrolled";
              console.warn(`${i} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = g
          }), [g, i])
        }
        const p = [{
          ...n,
          state: d
        }];
        r && p.push(r);
        const [h, y] = o.useReducer(((t, n) => {
          if (n.type === f) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return g && !Object.is(o.state, t.state) && b(o.state), o
        }), ...p), w = h.state, m = o.useRef(w);
        o.useEffect((() => {
          m.current !== w && (m.current = w, g || b(w))
        }), [b, w, m, g]);
        const E = o.useMemo((() => void 0 !== a ? {
          ...h,
          state: a
        } : h), [h, a]);
        return o.useEffect((() => {
          g && !Object.is(a, h.state) && y({
            type: f,
            state: a
          })
        }), [a, h.state, g]), [E, y]
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