try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2479d63-d96b-4f83-9241-2ea13e9f76bb", e._sentryDebugIdIdentifier = "sentry-dbid-a2479d63-d96b-4f83-9241-2ea13e9f76bb")
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
  [6755, 9136], {
    66755(e, t, n) {
      n.r(t), n.d(t, {
        useControllableState: () => d,
        useControllableStateReducer: () => f
      });
      var o = n(4637),
        r = n.t(o, 2),
        s = n(10198),
        l = r[" useEffectEvent ".trim().toString()],
        c = r[" useInsertionEffect ".trim().toString()],
        u = r[" useInsertionEffect ".trim().toString()] || s.N;

      function d({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, l, c] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), l = o.useRef(t);
          return u(() => {
            l.current = t
          }, [t]), o.useEffect(() => {
            s.current !== n && (l.current?.(n), s.current = n)
          }, [n, s]), [n, r, l]
        }({
          defaultProp: t,
          onChange: n
        }), d = void 0 !== e, a = d ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== d) {
              const t = e ? "controlled" : "uncontrolled",
                n = d ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = d
          }, [d, r])
        }
        const f = o.useCallback(t => {
          if (d) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && c.current?.(n)
          } else l(t)
        }, [d, e, l, c]);
        return [a, f]
      }
      var a = Symbol("RADIX:SYNC_STATE");

      function f(e, t, n, r) {
        const {
          prop: u,
          defaultProp: d,
          onChange: f,
          caller: i
        } = t, b = void 0 !== u, g = function(e) {
          if ("function" == typeof l) return l(e);
          const t = o.useRef(() => {
            throw new Error("Cannot call an event handler while rendering.")
          });
          return "function" == typeof c ? c(() => {
            t.current = e
          }) : (0, s.N)(() => {
            t.current = e
          }), o.useMemo(() => (...e) => t.current?.(...e), [])
        }(f); {
          const e = o.useRef(void 0 !== u);
          o.useEffect(() => {
            const t = e.current;
            if (t !== b) {
              const e = t ? "controlled" : "uncontrolled",
                n = b ? "controlled" : "uncontrolled";
              console.warn(`${i} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = b
          }, [b, i])
        }
        const p = [{
          ...n,
          state: d
        }];
        r && p.push(r);
        const [h, y] = o.useReducer((t, n) => {
          if (n.type === a) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return b && !Object.is(o.state, t.state) && g(o.state), o
        }, ...p), w = h.state, m = o.useRef(w);
        o.useEffect(() => {
          m.current !== w && (m.current = w, b || g(w))
        }, [w, m, b]);
        const E = o.useMemo(() => void 0 !== u ? {
          ...h,
          state: u
        } : h, [h, u]);
        return o.useEffect(() => {
          b && !Object.is(u, h.state) && y({
            type: a,
            state: u
          })
        }, [u, h.state, b]), [E, y]
      }
    },
    10198(e, t, n) {
      n.d(t, {
        N: () => r
      });
      var o = n(4637),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);