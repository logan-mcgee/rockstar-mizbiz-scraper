! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d3c0742-e346-421a-905a-ce2eb7ed1c52", e._sentryDebugIdIdentifier = "sentry-dbid-7d3c0742-e346-421a-905a-ce2eb7ed1c52")
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
  [4059, 6440], {
    17796: e => {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function u(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var i, f, s, c;
          if (Array.isArray(e)) {
            if ((i = e.length) != a.length) return !1;
            for (f = i; 0 != f--;)
              if (!u(e[f], a[f])) return !1;
            return !0
          }
          if (r && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(f = c.next()).done;)
              if (!a.has(f.value[0])) return !1;
            for (c = e.entries(); !(f = c.next()).done;)
              if (!u(f.value[1], a.get(f.value[0]))) return !1;
            return !0
          }
          if (n && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(f = c.next()).done;)
              if (!a.has(f.value[0])) return !1;
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((i = e.length) != a.length) return !1;
            for (f = i; 0 != f--;)
              if (e[f] !== a[f]) return !1;
            return !0
          }
          if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
          if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf) return e.valueOf() === a.valueOf();
          if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString) return e.toString() === a.toString();
          if ((i = (s = Object.keys(e)).length) !== Object.keys(a).length) return !1;
          for (f = i; 0 != f--;)
            if (!Object.prototype.hasOwnProperty.call(a, s[f])) return !1;
          if (t && e instanceof Element) return !1;
          for (f = i; 0 != f--;)
            if (("_owner" !== s[f] && "__v" !== s[f] && "__o" !== s[f] || !e.$$typeof) && !u(e[s[f]], a[s[f]])) return !1;
          return !0
        }
        return e != e && a != a
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
    44059: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        Manager: () => a,
        Popper: () => _,
        Reference: () => k,
        usePopper: () => g
      });
      var n = r(62229),
        o = n.createContext(),
        u = n.createContext();

      function a(e) {
        var t = e.children,
          r = n.useState(null),
          a = r[0],
          i = r[1],
          f = n.useRef(!1);
        n.useEffect((function() {
          return function() {
            f.current = !0
          }
        }), []);
        var s = n.useCallback((function(e) {
          f.current || i(e)
        }), []);
        return n.createElement(o.Provider, {
          value: a
        }, n.createElement(u.Provider, {
          value: s
        }, t))
      }
      var i = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        f = function(e) {
          if ("function" == typeof e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return e.apply(void 0, r)
          }
        },
        s = function(e, t) {
          if ("function" == typeof e) return f(e, t);
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
        d = r(44853),
        p = r(9005),
        y = r(17796),
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
            a = n.useState({
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
            i = a[0],
            f = a[1],
            s = n.useMemo((function() {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                  var t = e.state,
                    r = Object.keys(t.elements);
                  d.flushSync((function() {
                    f({
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
            styles: i.styles,
            attributes: i.attributes,
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
          a = void 0 === u ? "absolute" : u,
          f = e.modifiers,
          c = void 0 === f ? h : f,
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
              strategy: a,
              onFirstUpdate: d,
              modifiers: [].concat(c, [{
                name: "arrow",
                enabled: null != k,
                options: {
                  element: k
                }
              }])
            }
          }), [r, a, d, c, k]),
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
        return i(y)(j)
      }
      var E = r(16650),
        S = r.n(E);

      function k(e) {
        var t = e.children,
          r = e.innerRef,
          o = n.useContext(u),
          a = n.useCallback((function(e) {
            s(r, e), f(o, e)
          }), [r, o]);
        return n.useEffect((function() {
          return function() {
            return s(r, null)
          }
        }), []), n.useEffect((function() {
          S()(Boolean(o), "`Reference` should not be used outside of a `Manager` component.")
        }), [o]), i(t)({
          ref: a
        })
      }
    },
    16650: e => {
      "use strict";
      e.exports = function() {}
    }
  }
]);