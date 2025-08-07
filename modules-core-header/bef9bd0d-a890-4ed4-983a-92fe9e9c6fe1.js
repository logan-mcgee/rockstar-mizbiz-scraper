try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bef9bd0d-a890-4ed4-983a-92fe9e9c6fe1", e._sentryDebugIdIdentifier = "sentry-dbid-bef9bd0d-a890-4ed4-983a-92fe9e9c6fe1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
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
        l = r[" useEffectEvent ".trim().toString()],
        c = r[" useInsertionEffect ".trim().toString()],
        d = r[" useInsertionEffect ".trim().toString()] || s.N;

      function u({
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
          return d((() => {
            l.current = t
          }), [t]), o.useEffect((() => {
            s.current !== n && (l.current?.(n), s.current = n)
          }), [n, s]), [n, r, l]
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
        const f = o.useCallback((t => {
          if (u) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && c.current?.(n)
          } else l(t)
        }), [u, e, l, c]);
        return [a, f]
      }
      var a = Symbol("RADIX:SYNC_STATE");

      function f(e, t, n, r) {
        const {
          prop: d,
          defaultProp: u,
          onChange: f,
          caller: i
        } = t, b = void 0 !== d, g = function(e) {
          if ("function" == typeof l) return l(e);
          const t = o.useRef((() => {
            throw new Error("Cannot call an event handler while rendering.")
          }));
          return "function" == typeof c ? c((() => {
            t.current = e
          })) : (0, s.N)((() => {
            t.current = e
          })), o.useMemo((() => (...e) => t.current?.(...e)), [])
        }(f); {
          const e = o.useRef(void 0 !== d);
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
        const E = o.useMemo((() => void 0 !== d ? {
          ...h,
          state: d
        } : h), [h, d]);
        return o.useEffect((() => {
          b && !Object.is(d, h.state) && y({
            type: a,
            state: d
          })
        }), [d, h.state, b]), [E, y]
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