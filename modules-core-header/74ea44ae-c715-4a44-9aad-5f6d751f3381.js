try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "74ea44ae-c715-4a44-9aad-5f6d751f3381", e._sentryDebugIdIdentifier = "sentry-dbid-74ea44ae-c715-4a44-9aad-5f6d751f3381")
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
        useControllableState: () => u,
        useControllableStateReducer: () => f
      });
      var o = n(71127),
        r = n.t(o, 2),
        s = n(63155),
        c = r[" useEffectEvent ".trim().toString()],
        a = r[" useInsertionEffect ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()] || s.N;

      function u({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, c, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), c = o.useRef(t);
          return l(() => {
            c.current = t
          }, [t]), o.useEffect(() => {
            s.current !== n && (c.current?.(n), s.current = n)
          }, [n, s]), [n, r, c]
        }({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, d = u ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== u) {
              const t = e ? "controlled" : "uncontrolled",
                n = u ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = u
          }, [u, r])
        }
        const f = o.useCallback(t => {
          if (u) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && a.current?.(n)
          } else c(t)
        }, [u, e, c, a]);
        return [d, f]
      }
      var d = Symbol("RADIX:SYNC_STATE");

      function f(e, t, n, r) {
        const {
          prop: l,
          defaultProp: u,
          onChange: f,
          caller: i
        } = t, g = void 0 !== l, p = function(e) {
          if ("function" == typeof c) return c(e);
          const t = o.useRef(() => {
            throw new Error("Cannot call an event handler while rendering.")
          });
          return "function" == typeof a ? a(() => {
            t.current = e
          }) : (0, s.N)(() => {
            t.current = e
          }), o.useMemo(() => (...e) => t.current?.(...e), [])
        }(f); {
          const e = o.useRef(void 0 !== l);
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
        const h = [{
          ...n,
          state: u
        }];
        r && h.push(r);
        const [y, b] = o.useReducer((t, n) => {
          if (n.type === d) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return g && !Object.is(o.state, t.state) && p(o.state), o
        }, ...h), w = y.state, m = o.useRef(w);
        o.useEffect(() => {
          m.current !== w && (m.current = w, g || p(w))
        }, [p, w, m, g]);
        const E = o.useMemo(() => void 0 !== l ? {
          ...y,
          state: l
        } : y, [y, l]);
        return o.useEffect(() => {
          g && !Object.is(l, y.state) && b({
            type: d,
            state: l
          })
        }, [l, y.state, g]), [E, b]
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