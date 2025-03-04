! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b8c7f969-26cc-4a81-9c6d-54f715f093fb", e._sentryDebugIdIdentifier = "sentry-dbid-b8c7f969-26cc-4a81-9c6d-54f715f093fb")
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
  [3067, 1029, 3410, 5791, 8172], {
    58924: (e, n, r) => {
      r.d(n, {
        Eq: () => d
      });
      var t = new WeakMap,
        a = new WeakMap,
        o = {},
        f = 0,
        u = function(e) {
          return e && (e.host || u(e.parentNode))
        },
        d = function(e, n, r) {
          void 0 === r && (r = "data-aria-hidden");
          var d = Array.from(Array.isArray(e) ? e : [e]),
            s = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return s ? (d.push.apply(d, Array.from(s.querySelectorAll("[aria-live]"))), function(e, n, r, d) {
            var s = function(e, n) {
              return n.map((function(n) {
                if (e.contains(n)) return n;
                var r = u(n);
                return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(n, Array.isArray(e) ? e : [e]);
            o[r] || (o[r] = new WeakMap);
            var c = o[r],
              i = [],
              l = new Set,
              p = new Set(s),
              y = function(e) {
                e && !l.has(e) && (l.add(e), y(e.parentNode))
              };
            s.forEach(y);
            var b = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (l.has(e)) b(e);
                else {
                  var n = e.getAttribute(d),
                    o = null !== n && "false" !== n,
                    f = (t.get(e) || 0) + 1,
                    u = (c.get(e) || 0) + 1;
                  t.set(e, f), c.set(e, u), i.push(e), 1 === f && o && a.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(d, "true")
                }
              }))
            };
            return b(n), l.clear(), f++,
              function() {
                i.forEach((function(e) {
                  var n = t.get(e) - 1,
                    o = c.get(e) - 1;
                  t.set(e, n), c.set(e, o), n || (a.has(e) || e.removeAttribute(d), a.delete(e)), o || e.removeAttribute(r)
                })), --f || (t = new WeakMap, t = new WeakMap, a = new WeakMap, o = {})
              }
          }(d, s, r, "aria-hidden")) : function() {
            return null
          }
        }
    },
    65039: (e, n, r) => {
      var t = r(62229),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, r) {
        var t, o = {},
          s = null,
          c = null;
        for (t in void 0 !== r && (s = "" + r), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n) f.call(n, t) && !d.hasOwnProperty(t) && (o[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === o[t] && (o[t] = n[t]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: c,
          props: o,
          _owner: u.current
        }
      }
      n.Fragment = o, n.jsx = s, n.jsxs = s
    },
    91029: (e, n, r) => {
      e.exports = r(65039)
    },
    59693: (e, n, r) => {
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
    91377: (e, n, r) => {
      r.d(n, {
        i: () => o
      });
      var t = r(62229),
        a = r(59693);

      function o({
        prop: e,
        defaultProp: n,
        onChange: r = (() => {})
      }) {
        const [o, f] = function({
          defaultProp: e,
          onChange: n
        }) {
          const r = t.useState(e),
            [o] = r,
            f = t.useRef(o),
            u = (0, a.c)(n);
          return t.useEffect((() => {
            f.current !== o && (u(o), f.current = o)
          }), [o, f, u]), r
        }({
          defaultProp: n,
          onChange: r
        }), u = void 0 !== e, d = u ? e : o, s = (0, a.c)(r);
        return [d, t.useCallback((n => {
          if (u) {
            const r = "function" == typeof n ? n(e) : n;
            r !== e && s(r)
          } else f(n)
        }), [u, e, f, s])]
      }
    },
    99935: (e, n, r) => {
      r.d(n, {
        U: () => o
      });
      var t = r(62229),
        a = r(59693);

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
    66698: (e, n, r) => {
      r.d(n, {
        N: () => a
      });
      var t = r(62229),
        a = Boolean(globalThis?.document) ? t.useLayoutEffect : () => {}
    }
  }
]);