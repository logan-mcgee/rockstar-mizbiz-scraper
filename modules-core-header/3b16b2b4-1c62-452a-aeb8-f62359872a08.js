try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3b16b2b4-1c62-452a-aeb8-f62359872a08", e._sentryDebugIdIdentifier = "sentry-dbid-3b16b2b4-1c62-452a-aeb8-f62359872a08")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5775, 8156], {
    38156: (e, t, n) => {
      n.r(t), n.d(t, {
        useControllableState: () => u,
        useControllableStateReducer: () => f
      });
      var o = n(71127),
        r = n.t(o, 2),
        s = n(92600),
        a = r[" useEffectEvent ".trim().toString()],
        c = r[" useInsertionEffect ".trim().toString()],
        l = r[" useInsertionEffect ".trim().toString()] || s.N;

      function u({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, a, c] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), a = o.useRef(t);
          return l((() => {
            a.current = t
          }), [t]), o.useEffect((() => {
            s.current !== n && (a.current?.(n), s.current = n)
          }), [n, s]), [n, r, a]
        }({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, d = u ? e : s; {
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
        const f = o.useCallback((t => {
          if (u) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && c.current?.(n)
          } else a(t)
        }), [u, e, a, c]);
        return [d, f]
      }
      var d = Symbol("RADIX:SYNC_STATE");

      function f(e, t, n, r) {
        const {
          prop: l,
          defaultProp: u,
          onChange: f,
          caller: i
        } = t, b = void 0 !== l, g = function(e) {
          if ("function" == typeof a) return a(e);
          const t = o.useRef((() => {
            throw new Error("Cannot call an event handler while rendering.")
          }));
          return "function" == typeof c ? c((() => {
            t.current = e
          })) : (0, s.N)((() => {
            t.current = e
          })), o.useMemo((() => (...e) => t.current?.(...e)), [])
        }(f); {
          const e = o.useRef(void 0 !== l);
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
        const E = o.useMemo((() => void 0 !== l ? {
          ...h,
          state: l
        } : h), [h, l]);
        return o.useEffect((() => {
          b && !Object.is(l, h.state) && y({
            type: d,
            state: l
          })
        }), [l, h.state, b]), [E, y]
      }
    },
    92600: (e, t, n) => {
      n.d(t, {
        N: () => r
      });
      var o = n(71127),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);