! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "624a1162-5852-47bb-a4da-88190a9f8c60", e._sentryDebugIdIdentifier = "sentry-dbid-624a1162-5852-47bb-a4da-88190a9f8c60")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4733, 7114], {
    28901: e => {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function o(e, u) {
        if (e === u) return !0;
        if (e && u && "object" == typeof e && "object" == typeof u) {
          if (e.constructor !== u.constructor) return !1;
          var f, i, s, l;
          if (Array.isArray(e)) {
            if ((f = e.length) != u.length) return !1;
            for (i = f; 0 != i--;)
              if (!o(e[i], u[i])) return !1;
            return !0
          }
          if (r && e instanceof Map && u instanceof Map) {
            if (e.size !== u.size) return !1;
            for (l = e.entries(); !(i = l.next()).done;)
              if (!u.has(i.value[0])) return !1;
            for (l = e.entries(); !(i = l.next()).done;)
              if (!o(i.value[1], u.get(i.value[0]))) return !1;
            return !0
          }
          if (n && e instanceof Set && u instanceof Set) {
            if (e.size !== u.size) return !1;
            for (l = e.entries(); !(i = l.next()).done;)
              if (!u.has(i.value[0])) return !1;
            return !0
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(u)) {
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
            if (("_owner" !== s[i] && "__v" !== s[i] && "__o" !== s[i] || !e.$$typeof) && !o(e[s[i]], u[s[i]])) return !1;
          return !0
        }
        return e != e && u != u
      }
      e.exports = function(e, t) {
        try {
          return o(e, t)
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw e
        }
      }
    },
    39969: e => {
      "use strict";
      e.exports = function() {}
    },
    84733: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        Manager: () => u,
        Popper: () => M,
        Reference: () => S,
        usePopper: () => g
      });
      var n = r(71127),
        a = n.createContext(),
        o = n.createContext();

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
        return n.createElement(a.Provider, {
          value: u
        }, n.createElement(o.Provider, {
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
        l = function(e) {
          return e.reduce((function(e, t) {
            var r = t[0],
              n = t[1];
            return e[r] = n, e
          }), {})
        },
        c = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
        d = r(18429),
        p = r(43386),
        y = r(28901),
        b = r.n(y),
        m = [],
        g = function(e, t, r) {
          void 0 === r && (r = {});
          var a = n.useRef(null),
            o = {
              onFirstUpdate: r.onFirstUpdate,
              placement: r.placement || "bottom",
              strategy: r.strategy || "absolute",
              modifiers: r.modifiers || m
            },
            u = n.useState({
              styles: {
                popper: {
                  position: o.strategy,
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
                      styles: l(r.map((function(e) {
                        return [e, t.styles[e] || {}]
                      }))),
                      attributes: l(r.map((function(e) {
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
                onFirstUpdate: o.onFirstUpdate,
                placement: o.placement,
                strategy: o.strategy,
                modifiers: [].concat(o.modifiers, [s, {
                  name: "applyStyles",
                  enabled: !1
                }])
              };
              return b()(a.current, e) ? a.current || e : (a.current = e, e)
            }), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]),
            g = n.useRef();
          return c((function() {
            g.current && g.current.setOptions(y)
          }), [y]), c((function() {
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
        h = function() {},
        v = function() {
          return Promise.resolve(null)
        },
        w = [];

      function M(e) {
        var t = e.placement,
          r = void 0 === t ? "bottom" : t,
          o = e.strategy,
          u = void 0 === o ? "absolute" : o,
          i = e.modifiers,
          l = void 0 === i ? w : i,
          c = e.referenceElement,
          d = e.onFirstUpdate,
          p = e.innerRef,
          y = e.children,
          b = n.useContext(a),
          m = n.useState(null),
          M = m[0],
          _ = m[1],
          E = n.useState(null),
          S = E[0],
          k = E[1];
        n.useEffect((function() {
          s(p, M)
        }), [p, M]);
        var O = n.useMemo((function() {
            return {
              placement: r,
              strategy: u,
              onFirstUpdate: d,
              modifiers: [].concat(l, [{
                name: "arrow",
                enabled: null != S,
                options: {
                  element: S
                }
              }])
            }
          }), [r, u, d, l, S]),
          P = g(c || b, M, O),
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
                ref: k
              },
              forceUpdate: x || h,
              update: A || v
            }
          }), [_, k, r, R, U, A, x]);
        return f(y)(j)
      }
      var _ = r(39969),
        E = r.n(_);

      function S(e) {
        var t = e.children,
          r = e.innerRef,
          a = n.useContext(o),
          u = n.useCallback((function(e) {
            s(r, e), i(a, e)
          }), [r, a]);
        return n.useEffect((function() {
          return function() {
            return s(r, null)
          }
        }), []), n.useEffect((function() {
          E()(Boolean(a), "`Reference` should not be used outside of a `Manager` component.")
        }), [a]), f(t)({
          ref: u
        })
      }
    }
  }
]);