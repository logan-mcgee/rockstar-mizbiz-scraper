try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7a27d985-86ac-4170-9ef3-585898da1e8d", e._sentryDebugIdIdentifier = "sentry-dbid-7a27d985-86ac-4170-9ef3-585898da1e8d")
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
  [2635, 5016], {
    6508: e => {
      "use strict";
      e.exports = function() {}
    },
    45098: e => {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function u(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var f, i, s, c;
          if (Array.isArray(e)) {
            if ((f = e.length) != a.length) return !1;
            for (i = f; 0 != i--;)
              if (!u(e[i], a[i])) return !1;
            return !0
          }
          if (r && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!a.has(i.value[0])) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!u(i.value[1], a.get(i.value[0]))) return !1;
            return !0
          }
          if (n && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(i = c.next()).done;)
              if (!a.has(i.value[0])) return !1;
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((f = e.length) != a.length) return !1;
            for (i = f; 0 != i--;)
              if (e[i] !== a[i]) return !1;
            return !0
          }
          if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
          if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf) return e.valueOf() === a.valueOf();
          if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString) return e.toString() === a.toString();
          if ((f = (s = Object.keys(e)).length) !== Object.keys(a).length) return !1;
          for (i = f; 0 != i--;)
            if (!Object.prototype.hasOwnProperty.call(a, s[i])) return !1;
          if (t && e instanceof Element) return !1;
          for (i = f; 0 != i--;)
            if (("_owner" !== s[i] && "__v" !== s[i] && "__o" !== s[i] || !e.$$typeof) && !u(e[s[i]], a[s[i]])) return !1;
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
    62635: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        Manager: () => a,
        Popper: () => E,
        Reference: () => k,
        usePopper: () => b
      });
      var n = r(71127),
        o = n.createContext(),
        u = n.createContext();

      function a(e) {
        var t = e.children,
          r = n.useState(null),
          a = r[0],
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
          value: a
        }, n.createElement(u.Provider, {
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
        d = r(18429),
        p = r(43386),
        y = r(45098),
        m = r.n(y),
        g = [],
        b = function(e, t, r) {
          void 0 === r && (r = {});
          var o = n.useRef(null),
            u = {
              onFirstUpdate: r.onFirstUpdate,
              placement: r.placement || "bottom",
              strategy: r.strategy || "absolute",
              modifiers: r.modifiers || g
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
            f = a[0],
            i = a[1],
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
            b = n.useRef();
          return l((function() {
            b.current && b.current.setOptions(y)
          }), [y]), l((function() {
            if (null != e && null != t) {
              var n = (r.createPopper || p.createPopper)(e, t, y);
              return b.current = n,
                function() {
                  n.destroy(), b.current = null
                }
            }
          }), [e, t, r.createPopper]), {
            state: b.current ? b.current.state : null,
            styles: f.styles,
            attributes: f.attributes,
            update: b.current ? b.current.update : null,
            forceUpdate: b.current ? b.current.forceUpdate : null
          }
        },
        h = function() {},
        v = function() {
          return Promise.resolve(null)
        },
        w = [];

      function E(e) {
        var t = e.placement,
          r = void 0 === t ? "bottom" : t,
          u = e.strategy,
          a = void 0 === u ? "absolute" : u,
          i = e.modifiers,
          c = void 0 === i ? w : i,
          l = e.referenceElement,
          d = e.onFirstUpdate,
          p = e.innerRef,
          y = e.children,
          m = n.useContext(o),
          g = n.useState(null),
          E = g[0],
          _ = g[1],
          S = n.useState(null),
          k = S[0],
          M = S[1];
        n.useEffect((function() {
          s(p, E)
        }), [p, E]);
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
          P = b(l || m, E, O),
          R = P.state,
          U = P.styles,
          x = P.forceUpdate,
          A = P.update,
          j = n.useMemo((function() {
            return {
              ref: _,
              style: U.popper,
              placement: R ? R.placement : r,
              hasPopperEscaped: R && R.modifiersData.hide ? R.modifiersData.hide.hasPopperEscaped : null,
              isReferenceHidden: R && R.modifiersData.hide ? R.modifiersData.hide.isReferenceHidden : null,
              arrowProps: {
                style: U.arrow,
                ref: M
              },
              forceUpdate: x || h,
              update: A || v
            }
          }), [_, M, r, R, U, A, x]);
        return f(y)(j)
      }
      var _ = r(6508),
        S = r.n(_);

      function k(e) {
        var t = e.children,
          r = e.innerRef,
          o = n.useContext(u),
          a = n.useCallback((function(e) {
            s(r, e), i(o, e)
          }), [r, o]);
        return n.useEffect((function() {
          return function() {
            return s(r, null)
          }
        }), []), n.useEffect((function() {
          S()(Boolean(o), "`Reference` should not be used outside of a `Manager` component.")
        }), [o]), f(t)({
          ref: a
        })
      }
    }
  }
]);