try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "078f45af-9269-4b2f-9dc6-7b33d1dd6f36", e._sentryDebugIdIdentifier = "sentry-dbid-078f45af-9269-4b2f-9dc6-7b33d1dd6f36")
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
        useControllableState: () => c,
        useControllableStateReducer: () => f
      });
      var o = n(4637),
        r = n.t(o, 2),
        s = n(10198),
        d = r[" useEffectEvent ".trim().toString()],
        a = r[" useInsertionEffect ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()] || s.N;

      function c({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, d, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), d = o.useRef(t);
          return l(() => {
            d.current = t
          }, [t]), o.useEffect(() => {
            s.current !== n && (d.current?.(n), s.current = n)
          }, [n, s]), [n, r, d]
        }({
          defaultProp: t,
          onChange: n
        }), c = void 0 !== e, u = c ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== c) {
              const t = e ? "controlled" : "uncontrolled",
                n = c ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = c
          }, [c, r])
        }
        const f = o.useCallback(t => {
          if (c) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && a.current?.(n)
          } else d(t)
        }, [c, e, d, a]);
        return [u, f]
      }
      var u = Symbol("RADIX:SYNC_STATE");

      function f(e, t, n, r) {
        const {
          prop: l,
          defaultProp: c,
          onChange: f,
          caller: i
        } = t, b = void 0 !== l, g = function(e) {
          if ("function" == typeof d) return d(e);
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
          state: c
        }];
        r && p.push(r);
        const [h, y] = o.useReducer((t, n) => {
          if (n.type === u) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return b && !Object.is(o.state, t.state) && g(o.state), o
        }, ...p), w = h.state, m = o.useRef(w);
        o.useEffect(() => {
          m.current !== w && (m.current = w, b || g(w))
        }, [w, m, b]);
        const E = o.useMemo(() => void 0 !== l ? {
          ...h,
          state: l
        } : h, [h, l]);
        return o.useEffect(() => {
          b && !Object.is(l, h.state) && y({
            type: u,
            state: l
          })
        }, [l, h.state, b]), [E, y]
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