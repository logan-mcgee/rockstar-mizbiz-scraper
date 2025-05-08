! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7acb754e-7f9a-4c6d-99dd-06e88fa8abdf", e._sentryDebugIdIdentifier = "sentry-dbid-7acb754e-7f9a-4c6d-99dd-06e88fa8abdf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8881, 3855, 6236, 9093, 1474], {
    91270: (e, n, r) => {
      r.d(n, {
        Eq: () => f
      });
      var t = new WeakMap,
        a = new WeakMap,
        o = {},
        d = 0,
        u = function(e) {
          return e && (e.host || u(e.parentNode))
        },
        f = function(e, n, r) {
          void 0 === r && (r = "data-aria-hidden");
          var f = Array.from(Array.isArray(e) ? e : [e]),
            c = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (f.push.apply(f, Array.from(c.querySelectorAll("[aria-live]"))), function(e, n, r, f) {
            var c = function(e, n) {
              return n.map((function(n) {
                if (e.contains(n)) return n;
                var r = u(n);
                return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(n, Array.isArray(e) ? e : [e]);
            o[r] || (o[r] = new WeakMap);
            var s = o[r],
              i = [],
              l = new Set,
              p = new Set(c),
              y = function(e) {
                e && !l.has(e) && (l.add(e), y(e.parentNode))
              };
            c.forEach(y);
            var b = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (l.has(e)) b(e);
                else {
                  var n = e.getAttribute(f),
                    o = null !== n && "false" !== n,
                    d = (t.get(e) || 0) + 1,
                    u = (s.get(e) || 0) + 1;
                  t.set(e, d), s.set(e, u), i.push(e), 1 === d && o && a.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(f, "true")
                }
              }))
            };
            return b(n), l.clear(), d++,
              function() {
                i.forEach((function(e) {
                  var n = t.get(e) - 1,
                    o = s.get(e) - 1;
                  t.set(e, n), s.set(e, o), n || (a.has(e) || e.removeAttribute(f), a.delete(e)), o || e.removeAttribute(r)
                })), --d || (t = new WeakMap, t = new WeakMap, a = new WeakMap, o = {})
              }
          }(f, c, r, "aria-hidden")) : function() {
            return null
          }
        }
    },
    32469: (e, n, r) => {
      var t = r(62229),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, n, r) {
        var t, o = {},
          c = null,
          s = null;
        for (t in void 0 !== r && (c = "" + r), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (s = n.ref), n) d.call(n, t) && !f.hasOwnProperty(t) && (o[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === o[t] && (o[t] = n[t]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: s,
          props: o,
          _owner: u.current
        }
      }
      n.Fragment = o, n.jsx = c, n.jsxs = c
    },
    73855: (e, n, r) => {
      e.exports = r(32469)
    },
    26727: (e, n, r) => {
      r.d(n, {
        c: () => a
      });
      var t = r(62229);

      function a(e) {
        const n = t.useRef(e);
        return t.useEffect((() => {
          n.current = e
        })), t.useMemo((() => (...e) => n.current?.(...e)), [])
      }
    },
    48087: (e, n, r) => {
      r.d(n, {
        i: () => o
      });
      var t = r(62229),
        a = r(26727);

      function o({
        prop: e,
        defaultProp: n,
        onChange: r = (() => {})
      }) {
        const [o, d] = function({
          defaultProp: e,
          onChange: n
        }) {
          const r = t.useState(e),
            [o] = r,
            d = t.useRef(o),
            u = (0, a.c)(n);
          return t.useEffect((() => {
            d.current !== o && (u(o), d.current = o)
          }), [o, d, u]), r
        }({
          defaultProp: n,
          onChange: r
        }), u = void 0 !== e, f = u ? e : o, c = (0, a.c)(r);
        return [f, t.useCallback((n => {
          if (u) {
            const r = "function" == typeof n ? n(e) : n;
            r !== e && c(r)
          } else d(n)
        }), [u, e, d, c])]
      }
    },
    62865: (e, n, r) => {
      r.d(n, {
        U: () => o
      });
      var t = r(62229),
        a = r(26727);

      function o(e, n = globalThis?.document) {
        const r = (0, a.c)(e);
        t.useEffect((() => {
          const e = e => {
            "Escape" === e.key && r(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [r, n])
      }
    },
    92600: (e, n, r) => {
      r.d(n, {
        N: () => a
      });
      var t = r(62229),
        a = Boolean(globalThis?.document) ? t.useLayoutEffect : () => {}
    }
  }
]);