! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a0a49f00-fff1-4e3e-97f6-a87cd2f71db7", e._sentryDebugIdIdentifier = "sentry-dbid-a0a49f00-fff1-4e3e-97f6-a87cd2f71db7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [806, 425], {
    6515: e => {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function u(e, f) {
        if (e === f) return !0;
        if (e && f && "object" == typeof e && "object" == typeof f) {
          if (e.constructor !== f.constructor) return !1;
          var a, i, s, c;
          if (Array.isArray(e)) {
            if ((a = e.length) != f.length) return !1;
            for (i = a; 0 != i--;)
              if (!u(e[i], f[i])) return !1;
            return !0
          }
          if (r && e instanceof Map && f instanceof Map) {
            if (e.size !== f.size) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!f.has(i.value[0])) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!u(i.value[1], f.get(i.value[0]))) return !1;
            return !0
          }
          if (n && e instanceof Set && f instanceof Set) {
            if (e.size !== f.size) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!f.has(i.value[0])) return !1;
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(f)) {
            if ((a = e.length) != f.length) return !1;
            for (i = a; 0 != i--;)
              if (e[i] !== f[i]) return !1;
            return !0
          }
          if (e.constructor === RegExp) return e.source === f.source && e.flags === f.flags;
          if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof f.valueOf) return e.valueOf() === f.valueOf();
          if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof f.toString) return e.toString() === f.toString();
          if ((a = (s = Object.keys(e)).length) !== Object.keys(f).length) return !1;
          for (i = a; 0 != i--;)
            if (!Object.prototype.hasOwnProperty.call(f, s[i])) return !1;
          if (t && e instanceof Element) return !1;
          for (i = a; 0 != i--;)
            if (("_owner" !== s[i] && "__v" !== s[i] && "__o" !== s[i] || !e.$$typeof) && !u(e[s[i]], f[s[i]])) return !1;
          return !0
        }
        return e != e && f != f
      }
      e.exports = function(e, t) {
        try {
          return u(e, t)
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw e
        }
      }
    },
    2806: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        Manager: () => f,
        Popper: () => _,
        Reference: () => k,
        usePopper: () => g
      });
      var n = r(2229),
        o = n.createContext(),
        u = n.createContext();

      function f(e) {
        var t = e.children,
          r = n.useState(null),
          f = r[0],
          a = r[1],
          i = n.useRef(!1);
        n.useEffect((function() {
          return function() {
            i.current = !0
          }
        }), []);
        var s = n.useCallback((function(e) {
          i.current || a(e)
        }), []);
        return n.createElement(o.Provider, {
          value: f
        }, n.createElement(u.Provider, {
          value: s
        }, t))
      }
      var a = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        i = function(e) {
          if ("function" == typeof e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return e.apply(void 0, r)
          }
        },
        s = function(e, t) {
          if ("function" == typeof e) return i(e, t);
          null != e && (e.current = t)
        },
        c = function(e) {
          return e.reduce((function(e, t) {
            var r = t[0],
              n = t[1];
            return e[r] = n, e
          }), {})
        },
        l = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
        d = r(4853),
        p = r(9005),
        y = r(6515),
        m = r.n(y),
        b = [],
        g = function(e, t, r) {
          void 0 === r && (r = {});
          var o = n.useRef(null),
            u = {
              onFirstUpdate: r.onFirstUpdate,
              placement: r.placement || "bottom",
              strategy: r.strategy || "absolute",
              modifiers: r.modifiers || b
            },
            f = n.useState({
              styles: {
                popper: {
                  position: u.strategy,
                  left: "0",
                  top: "0"
                },
                arrow: {
                  position: "absolute"
                }
              },
              attributes: {}
            }),
            a = f[0],
            i = f[1],
            s = n.useMemo((function() {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                  var t = e.state,
                    r = Object.keys(t.elements);
                  d.flushSync((function() {
                    i({
                      styles: c(r.map((function(e) {
                        return [e, t.styles[e] || {}]
                      }))),
                      attributes: c(r.map((function(e) {
                        return [e, t.attributes[e]]
                      })))
                    })
                  }))
                },
                requires: ["computeStyles"]
              }
            }), []),
            y = n.useMemo((function() {
              var e = {
                onFirstUpdate: u.onFirstUpdate,
                placement: u.placement,
                strategy: u.strategy,
                modifiers: [].concat(u.modifiers, [s, {
                  name: "applyStyles",
                  enabled: !1
                }])
              };
              return m()(o.current, e) ? o.current || e : (o.current = e, e)
            }), [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, s]),
            g = n.useRef();
          return l((function() {
            g.current && g.current.setOptions(y)
          }), [y]), l((function() {
            if (null != e && null != t) {
              var n = (r.createPopper || p.createPopper)(e, t, y);
              return g.current = n,
                function() {
                  n.destroy(), g.current = null
                }
            }
          }), [e, t, r.createPopper]), {
            state: g.current ? g.current.state : null,
            styles: a.styles,
            attributes: a.attributes,
            update: g.current ? g.current.update : null,
            forceUpdate: g.current ? g.current.forceUpdate : null
          }
        },
        v = function() {},
        w = function() {
          return Promise.resolve(null)
        },
        h = [];

      function _(e) {
        var t = e.placement,
          r = void 0 === t ? "bottom" : t,
          u = e.strategy,
          f = void 0 === u ? "absolute" : u,
          i = e.modifiers,
          c = void 0 === i ? h : i,
          l = e.referenceElement,
          d = e.onFirstUpdate,
          p = e.innerRef,
          y = e.children,
          m = n.useContext(o),
          b = n.useState(null),
          _ = b[0],
          E = b[1],
          S = n.useState(null),
          k = S[0],
          M = S[1];
        n.useEffect((function() {
          s(p, _)
        }), [p, _]);
        var O = n.useMemo((function() {
            return {
              placement: r,
              strategy: f,
              onFirstUpdate: d,
              modifiers: [].concat(c, [{
                name: "arrow",
                enabled: null != k,
                options: {
                  element: k
                }
              }])
            }
          }), [r, f, d, c, k]),
          P = g(l || m, _, O),
          R = P.state,
          U = P.styles,
          x = P.forceUpdate,
          A = P.update,
          j = n.useMemo((function() {
            return {
              ref: E,
              style: U.popper,
              placement: R ? R.placement : r,
              hasPopperEscaped: R && R.modifiersData.hide ? R.modifiersData.hide.hasPopperEscaped : null,
              isReferenceHidden: R && R.modifiersData.hide ? R.modifiersData.hide.isReferenceHidden : null,
              arrowProps: {
                style: U.arrow,
                ref: M
              },
              forceUpdate: x || v,
              update: A || w
            }
          }), [E, M, r, R, U, A, x]);
        return a(y)(j)
      }
      var E = r(283),
        S = r.n(E);

      function k(e) {
        var t = e.children,
          r = e.innerRef,
          o = n.useContext(u),
          f = n.useCallback((function(e) {
            s(r, e), i(o, e)
          }), [r, o]);
        return n.useEffect((function() {
          return function() {
            return s(r, null)
          }
        }), []), n.useEffect((function() {
          S()(Boolean(o), "`Reference` should not be used outside of a `Manager` component.")
        }), [o]), a(t)({
          ref: f
        })
      }
    },
    283: e => {
      "use strict";
      e.exports = function() {}
    }
  }
]);