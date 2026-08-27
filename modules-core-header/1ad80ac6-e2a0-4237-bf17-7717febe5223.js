try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ad80ac6-e2a0-4237-bf17-7717febe5223", e._sentryDebugIdIdentifier = "sentry-dbid-1ad80ac6-e2a0-4237-bf17-7717febe5223")
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
  [3401, 5782], {
    76733(e, t, n) {
      n.d(t, {
        D: () => o
      });
      var o = !1
    },
    15782(e, t, n) {
      n.r(t), n.d(t, {
        useControllableState: () => g,
        useControllableStateReducer: () => m
      });
      var o = n(4637),
        r = n.t(o, 2),
        s = n(76733),
        a = n(9608),
        l = Object.defineProperty,
        c = r[" useEffectEvent ".trim().toString()],
        u = r[" useInsertionEffect ".trim().toString()];

      function d(e) {
        if ("function" == typeof c) return c(e);
        const t = o.useRef(() => {
          throw new Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof u ? u(() => {
          t.current = e
        }) : (0, a.N)(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }
      l(d, "name", {
        value: "useEffectEvent",
        configurable: !0
      });
      var f = Object.defineProperty,
        i = (e, t) => f(e, "name", {
          value: t,
          configurable: !0
        }),
        b = r[" useInsertionEffect ".trim().toString()] || a.N;

      function g({
        prop: e,
        defaultProp: t,
        onChange: n = i(() => {}, "onChange"),
        caller: r
      }) {
        const [a, l, c] = p({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, d = u ? e : a;
        if (s.D) {
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
        return [d, o.useCallback(t => {
          if (u) {
            const n = h(t) ? t(e) : t;
            n !== e && c.current?.(n)
          } else l(t)
        }, [u, e, l, c])]
      }

      function p({
        defaultProp: e,
        onChange: t
      }) {
        const [n, r] = o.useState(e), s = o.useRef(n), a = o.useRef(t);
        return b(() => {
          a.current = t
        }, [t]), o.useEffect(() => {
          s.current !== n && (a.current?.(n), s.current = n)
        }, [n, s]), [n, r, a]
      }

      function h(e) {
        return "function" == typeof e
      }
      i(g, "useControllableState"), i(p, "useUncontrolledState"), i(h, "isFunction");
      var y = Symbol("RADIX:SYNC_STATE");

      function m(e, t, n, r) {
        const {
          prop: a,
          defaultProp: l,
          onChange: c,
          caller: u
        } = t, f = void 0 !== a, i = d(c);
        if (s.D) {
          const e = o.useRef(void 0 !== a);
          o.useEffect(() => {
            const t = e.current;
            if (t !== f) {
              const e = t ? "controlled" : "uncontrolled",
                n = f ? "controlled" : "uncontrolled";
              console.warn(`${u} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = f
          }, [f, u])
        }
        const b = [{
          ...n,
          state: l
        }];
        r && b.push(r);
        const [g, p] = o.useReducer((t, n) => {
          if (n.type === y) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return f && !Object.is(o.state, t.state) && i(o.state), o
        }, ...b), h = g.state, m = o.useRef(h);
        o.useEffect(() => {
          m.current !== h && (m.current = h, f || i(h))
        }, [h, m, f]);
        const w = o.useMemo(() => void 0 !== a ? {
          ...g,
          state: a
        } : g, [g, a]);
        return o.useEffect(() => {
          f && !Object.is(a, g.state) && p({
            type: y,
            state: a
          })
        }, [a, g.state, f]), [w, p]
      }
      i(m, "useControllableStateReducer")
    },
    9608(e, t, n) {
      n.d(t, {
        N: () => r
      });
      var o = n(4637),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);