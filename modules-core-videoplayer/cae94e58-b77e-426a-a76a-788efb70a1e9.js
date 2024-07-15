! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cae94e58-b77e-426a-a76a-788efb70a1e9", e._sentryDebugIdIdentifier = "sentry-dbid-cae94e58-b77e-426a-a76a-788efb70a1e9")
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
  [953, 334], {
    5334: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        Manager: () => u,
        Popper: () => _,
        Reference: () => k,
        usePopper: () => g
      });
      var n = r(51664),
        o = n.createContext(),
        a = n.createContext();

      function u(e) {
        var t = e.children,
          r = n.useState(null),
          u = r[0],
          f = r[1],
          i = n.useRef(!1);
        n.useEffect((function() {
          return function() {
            i.current = !0
          }
        }), []);
        var s = n.useCallback((function(e) {
          i.current || f(e)
        }), []);
        return n.createElement(o.Provider, {
          value: u
        }, n.createElement(a.Provider, {
          value: s
        }, t))
      }
      var f = function(e) {
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
        d = r(77364),
        p = r(4304),
        y = r(33928),
        m = r.n(y),
        b = [],
        g = function(e, t, r) {
          void 0 === r && (r = {});
          var o = n.useRef(null),
            a = {
              onFirstUpdate: r.onFirstUpdate,
              placement: r.placement || "bottom",
              strategy: r.strategy || "absolute",
              modifiers: r.modifiers || b
            },
            u = n.useState({
              styles: {
                popper: {
                  position: a.strategy,
                  left: "0",
                  top: "0"
                },
                arrow: {
                  position: "absolute"
                }
              },
              attributes: {}
            }),
            f = u[0],
            i = u[1],
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
                onFirstUpdate: a.onFirstUpdate,
                placement: a.placement,
                strategy: a.strategy,
                modifiers: [].concat(a.modifiers, [s, {
                  name: "applyStyles",
                  enabled: !1
                }])
              };
              return m()(o.current, e) ? o.current || e : (o.current = e, e)
            }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, s]),
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
            styles: f.styles,
            attributes: f.attributes,
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
          a = e.strategy,
          u = void 0 === a ? "absolute" : a,
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
              strategy: u,
              onFirstUpdate: d,
              modifiers: [].concat(c, [{
                name: "arrow",
                enabled: null != k,
                options: {
                  element: k
                }
              }])
            }
          }), [r, u, d, c, k]),
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
        return f(y)(j)
      }
      var E = r(70312),
        S = r.n(E);

      function k(e) {
        var t = e.children,
          r = e.innerRef,
          o = n.useContext(a),
          u = n.useCallback((function(e) {
            s(r, e), i(o, e)
          }), [r, o]);
        return n.useEffect((function() {
          return function() {
            return s(r, null)
          }
        }), []), n.useEffect((function() {
          S()(Boolean(o), "`Reference` should not be used outside of a `Manager` component.")
        }), [o]), f(t)({
          ref: u
        })
      }
    },
    33928: e => {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function a(e, u) {
        if (e === u) return !0;
        if (e && u && "object" == typeof e && "object" == typeof u) {
          if (e.constructor !== u.constructor) return !1;
          var f, i, s, c;
          if (Array.isArray(e)) {
            if ((f = e.length) != u.length) return !1;
            for (i = f; 0 != i--;)
              if (!a(e[i], u[i])) return !1;
            return !0
          }
          if (r && e instanceof Map && u instanceof Map) {
            if (e.size !== u.size) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!u.has(i.value[0])) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!a(i.value[1], u.get(i.value[0]))) return !1;
            return !0
          }
          if (n && e instanceof Set && u instanceof Set) {
            if (e.size !== u.size) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!u.has(i.value[0])) return !1;
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(u)) {
            if ((f = e.length) != u.length) return !1;
            for (i = f; 0 != i--;)
              if (e[i] !== u[i]) return !1;
            return !0
          }
          if (e.constructor === RegExp) return e.source === u.source && e.flags === u.flags;
          if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof u.valueOf) return e.valueOf() === u.valueOf();
          if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof u.toString) return e.toString() === u.toString();
          if ((f = (s = Object.keys(e)).length) !== Object.keys(u).length) return !1;
          for (i = f; 0 != i--;)
            if (!Object.prototype.hasOwnProperty.call(u, s[i])) return !1;
          if (t && e instanceof Element) return !1;
          for (i = f; 0 != i--;)
            if (("_owner" !== s[i] && "__v" !== s[i] && "__o" !== s[i] || !e.$$typeof) && !a(e[s[i]], u[s[i]])) return !1;
          return !0
        }
        return e != e && u != u
      }
      e.exports = function(e, t) {
        try {
          return a(e, t)
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw e
        }
      }
    },
    70312: e => {
      "use strict";
      e.exports = function() {}
    }
  }
]);