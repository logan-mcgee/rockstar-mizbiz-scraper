! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2c8e81dd-4dc9-455e-ad1c-0830a4163aac", e._sentryDebugIdIdentifier = "sentry-dbid-2c8e81dd-4dc9-455e-ad1c-0830a4163aac")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8447], {
    62607: (e, n, t) => {
      var r = t(95463),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function u(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var l = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(n, t, r) {
        if ("string" != typeof t) {
          if (h) {
            var o = p(t);
            o && o !== h && e(n, o, r)
          }
          var a = d(t);
          c && (a = a.concat(c(t)));
          for (var s = u(n), y = u(t), A = 0; A < a.length; ++A) {
            var v = a[A];
            if (!(i[v] || r && r[v] || y && y[v] || s && s[v])) {
              var m = f(t, v);
              try {
                l(n, v, m)
              } catch (e) {}
            }
          }
        }
        return n
      }
    },
    85075: (e, n) => {
      var t = "function" == typeof Symbol && Symbol.for,
        r = t ? Symbol.for("react.element") : 60103,
        o = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        a = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        u = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        d = t ? Symbol.for("react.async_mode") : 60111,
        c = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        p = t ? Symbol.for("react.suspense") : 60113,
        h = t ? Symbol.for("react.suspense_list") : 60120,
        y = t ? Symbol.for("react.memo") : 60115,
        A = t ? Symbol.for("react.lazy") : 60116,
        v = t ? Symbol.for("react.block") : 60121,
        m = t ? Symbol.for("react.fundamental") : 60117,
        b = t ? Symbol.for("react.responder") : 60118,
        g = t ? Symbol.for("react.scope") : 60119;

      function C(e) {
        if ("object" == typeof e && null !== e) {
          var n = e.$$typeof;
          switch (n) {
            case r:
              switch (e = e.type) {
                case d:
                case c:
                case i:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case l:
                    case f:
                    case A:
                    case y:
                    case u:
                      return e;
                    default:
                      return n
                  }
              }
            case o:
              return n
          }
        }
      }

      function _(e) {
        return C(e) === c
      }
      n.AsyncMode = d, n.ConcurrentMode = c, n.ContextConsumer = l, n.ContextProvider = u, n.Element = r, n.ForwardRef = f, n.Fragment = i, n.Lazy = A, n.Memo = y, n.Portal = o, n.Profiler = s, n.StrictMode = a, n.Suspense = p, n.isAsyncMode = function(e) {
        return _(e) || C(e) === d
      }, n.isConcurrentMode = _, n.isContextConsumer = function(e) {
        return C(e) === l
      }, n.isContextProvider = function(e) {
        return C(e) === u
      }, n.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, n.isForwardRef = function(e) {
        return C(e) === f
      }, n.isFragment = function(e) {
        return C(e) === i
      }, n.isLazy = function(e) {
        return C(e) === A
      }, n.isMemo = function(e) {
        return C(e) === y
      }, n.isPortal = function(e) {
        return C(e) === o
      }, n.isProfiler = function(e) {
        return C(e) === s
      }, n.isStrictMode = function(e) {
        return C(e) === a
      }, n.isSuspense = function(e) {
        return C(e) === p
      }, n.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === c || e === s || e === a || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === A || e.$$typeof === y || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || e.$$typeof === m || e.$$typeof === b || e.$$typeof === g || e.$$typeof === v)
      }, n.typeOf = C
    },
    95463: (e, n, t) => {
      e.exports = t(85075)
    },
    96433: (e, n, t) => {
      t.d(n, {
        S: () => o
      });
      var r = t(62229);

      function o(e, n) {
        return t = n || null, o = function(n) {
          return e.forEach((function(e) {
            return function(e, n) {
              return "function" == typeof e ? e(n) : e && (e.current = n), e
            }(e, n)
          }))
        }, (i = (0, r.useState)((function() {
          return {
            value: t,
            callback: o,
            facade: {
              get current() {
                return i.value
              },
              set current(e) {
                var n = i.value;
                n !== e && (i.value = e, i.callback(e, n))
              }
            }
          }
        }))[0]).callback = o, i.facade;
        var t, o, i
      }
    },
    2788: (e, n, t) => {
      t.d(n, {
        C: () => a,
        f: () => s
      });
      var r = t(91299);

      function o(e) {
        return e
      }

      function i(e, n) {
        void 0 === n && (n = o);
        var t = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : e
          },
          useMedium: function(e) {
            var o = n(e, r);
            return t.push(o),
              function() {
                t = t.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; t.length;) {
              var n = t;
              t = [], n.forEach(e)
            }
            t = {
              push: function(n) {
                return e(n)
              },
              filter: function() {
                return t
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var n = [];
            if (t.length) {
              var o = t;
              t = [], o.forEach(e), n = t
            }
            var i = function() {
                var t = n;
                n = [], t.forEach(e)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), t = {
              push: function(e) {
                n.push(e), a()
              },
              filter: function(e) {
                return n = n.filter(e), t
              }
            }
          }
        }
      }

      function a(e, n) {
        return void 0 === n && (n = o), i(e, n)
      }

      function s(e) {
        void 0 === e && (e = {});
        var n = i(null);
        return n.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    77802: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_1m368qh2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: var(--foundry_nu8bkpn);\n  border-width: 1px;\n  border-radius: var(--foundry_nu8bkp5);\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_1m368qh3 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp89);\n  --foundry_1m368qh1: var(--foundry_nu8bkp4h);\n}\n.foundry_1m368qh4 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp87);\n  --foundry_1m368qh1: var(--foundry_nu8bkp6t);\n}\n.foundry_1m368qh5 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp86);\n  --foundry_1m368qh1: var(--foundry_nu8bkp61);\n}\n.foundry_1m368qh6 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp88);\n  --foundry_1m368qh1: var(--foundry_nu8bkp59);\n}\n.foundry_1m368qh7 {\n  background-color: var(--foundry_1m368qh0);\n  border-color: var(--foundry_1m368qh1);\n}\n.foundry_1m368qh8 {\n  background-color: var(--foundry_nu8bkp3s);\n  border-color: var(--foundry_nu8bkp9n);\n}\n.foundry_1m368qh9 {\n  padding: 0;\n  background-color: transparent;\n  border-color: transparent;\n}\n.foundry_1m368qha {\n  display: grid;\n  grid-template-areas: "icon title";\n  grid-template-columns: min-content 1fr;\n  grid-column-gap: var(--foundry_nu8bkpk);\n  grid-row-gap: var(--foundry_nu8bkpm);\n  padding-right: var(--foundry_nu8bkpq);\n  position: relative;\n}\n.foundry_1m368qhb {\n  display: grid;\n  grid-row-gap: var(--foundry_nu8bkpi);\n}\n.foundry_1m368qhc {\n  height: var(--foundry_nu8bkp18);\n  display: flex;\n  align-items: center;\n}\n.foundry_1m368qhd {\n  grid-area: icon;\n}\n.foundry_1m368qhe {\n  color: var(--foundry_nu8bkp90);\n}\n.foundry_1m368qhf {\n  color: var(--foundry_nu8bkp9f);\n}\n.foundry_1m368qhg {\n  color: var(--foundry_nu8bkp95);\n}\n.foundry_1m368qhh {\n  color: var(--foundry_nu8bkp9a);\n}\n.foundry_1m368qhi {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhj {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhk {\n  width: max-content;\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n  color: var(--foundry_nu8bkp8m);\n  border-radius: var(--foundry_nu8bkp3);\n  outline-offset: 2px;\n}\n.foundry_1m368qhk:not([data-pressed="true"]):not([disabled]):hover {\n  color: var(--foundry_nu8bkp3x);\n}\n.foundry_1m368qhk[data-pressed="true"] {\n  color: var(--foundry_nu8bkp3y);\n  outline-color: transparent;\n}\n.foundry_1m368qhk:disabled {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1m368qhk:visited {\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_1m368qhl {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp8l);\n  border-top: 1px solid var(--foundry_nu8bkp3w);\n  padding-top: var(--foundry_nu8bkp15);\n}\n.foundry_1m368qhm {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: var(--foundry_nu8bkpj);\n  outline-offset: 0;\n}\n.foundry_1m368qhm[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp7z);\n  border-color: var(--foundry_nu8bkp7z);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhn {\n  top: 0;\n  right: 0;\n}\n.foundry_1m368qho {\n  color: var(--foundry_nu8bkp8l);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/alert/dist/alert/alert.css"],
        names: [],
        mappings: "AAAA;EACE,WAAW;EACX,sBAAsB;EACtB,+BAA+B;EAC/B,iBAAiB;EACjB,qCAAqC;EACrC,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,2CAA2C;AAC7C;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,UAAU;EACV,6BAA6B;EAC7B,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,sCAAsC;EACtC,uCAAuC;EACvC,oCAAoC;EACpC,qCAAqC;EACrC,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;AACrC;AACA;EACE,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;EACnC,8BAA8B;EAC9B,qCAAqC;EACrC,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,6CAA6C;EAC7C,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,+BAA+B;EAC/B,iBAAiB;AACnB;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,MAAM;EACN,QAAQ;AACV;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_1m368qh2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: var(--foundry_nu8bkpn);\n  border-width: 1px;\n  border-radius: var(--foundry_nu8bkp5);\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_1m368qh3 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp89);\n  --foundry_1m368qh1: var(--foundry_nu8bkp4h);\n}\n.foundry_1m368qh4 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp87);\n  --foundry_1m368qh1: var(--foundry_nu8bkp6t);\n}\n.foundry_1m368qh5 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp86);\n  --foundry_1m368qh1: var(--foundry_nu8bkp61);\n}\n.foundry_1m368qh6 {\n  --foundry_1m368qh0: var(--foundry_nu8bkp88);\n  --foundry_1m368qh1: var(--foundry_nu8bkp59);\n}\n.foundry_1m368qh7 {\n  background-color: var(--foundry_1m368qh0);\n  border-color: var(--foundry_1m368qh1);\n}\n.foundry_1m368qh8 {\n  background-color: var(--foundry_nu8bkp3s);\n  border-color: var(--foundry_nu8bkp9n);\n}\n.foundry_1m368qh9 {\n  padding: 0;\n  background-color: transparent;\n  border-color: transparent;\n}\n.foundry_1m368qha {\n  display: grid;\n  grid-template-areas: "icon title";\n  grid-template-columns: min-content 1fr;\n  grid-column-gap: var(--foundry_nu8bkpk);\n  grid-row-gap: var(--foundry_nu8bkpm);\n  padding-right: var(--foundry_nu8bkpq);\n  position: relative;\n}\n.foundry_1m368qhb {\n  display: grid;\n  grid-row-gap: var(--foundry_nu8bkpi);\n}\n.foundry_1m368qhc {\n  height: var(--foundry_nu8bkp18);\n  display: flex;\n  align-items: center;\n}\n.foundry_1m368qhd {\n  grid-area: icon;\n}\n.foundry_1m368qhe {\n  color: var(--foundry_nu8bkp90);\n}\n.foundry_1m368qhf {\n  color: var(--foundry_nu8bkp9f);\n}\n.foundry_1m368qhg {\n  color: var(--foundry_nu8bkp95);\n}\n.foundry_1m368qhh {\n  color: var(--foundry_nu8bkp9a);\n}\n.foundry_1m368qhi {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhj {\n  color: var(--foundry_nu8bkp8j);\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n}\n.foundry_1m368qhk {\n  width: max-content;\n  display: inline-flex;\n  align-items: center;\n  min-height: var(--foundry_nu8bkp18);\n  color: var(--foundry_nu8bkp8m);\n  border-radius: var(--foundry_nu8bkp3);\n  outline-offset: 2px;\n}\n.foundry_1m368qhk:not([data-pressed="true"]):not([disabled]):hover {\n  color: var(--foundry_nu8bkp3x);\n}\n.foundry_1m368qhk[data-pressed="true"] {\n  color: var(--foundry_nu8bkp3y);\n  outline-color: transparent;\n}\n.foundry_1m368qhk:disabled {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1m368qhk:visited {\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_1m368qhl {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp8l);\n  border-top: 1px solid var(--foundry_nu8bkp3w);\n  padding-top: var(--foundry_nu8bkp15);\n}\n.foundry_1m368qhm {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: var(--foundry_nu8bkpj);\n  outline-offset: 0;\n}\n.foundry_1m368qhm[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp7z);\n  border-color: var(--foundry_nu8bkp7z);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhm:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp7y);\n  border-color: var(--foundry_nu8bkp7y);\n}\n.foundry_1m368qhn {\n  top: 0;\n  right: 0;\n}\n.foundry_1m368qho {\n  color: var(--foundry_nu8bkp8l);\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    79370: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_m1icrx0 {\n  position: relative;\n  width: 100%;\n}\n.foundry_m1icrx1 {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.foundry_m1icrx2 {\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrx3 {\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx4 {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.foundry_m1icrx7 {\n  color: var(--foundry_nu8bkp3x);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:after {\n  content: "/";\n  padding: 0 var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:hover {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_m1icrx7:last-child:after {\n  content: "";\n}\n.foundry_m1icrxa {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  outline-offset: -1px;\n  white-space: nowrap;\n}\n.foundry_m1icrxa:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxb {\n  padding: var(--foundry_nu8bkph) var(--foundry_nu8bkpi) var(--foundry_nu8bkph) var(--foundry_nu8bkph);\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrxc {\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpj) var(--foundry_nu8bkpi) var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrxd {\n  color: var(--foundry_nu8bkp8j);\n  white-space: normal;\n}\n.foundry_m1icrxd:hover {\n  color: var(--foundry_nu8bkp8j);\n  text-decoration: none;\n}\n.foundry_m1icrxe {\n  background: transparent;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n}\n.foundry_m1icrxe:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxe[data-state="open"] {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxf {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  min-width: var(--foundry_nu8bkp1l);\n}\n.foundry_m1icrxh {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_m1icrxh:focus {\n  outline: none;\n}\n.foundry_m1icrxh:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_m1icrxh:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_m1icrxh[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_m1icrxh[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_m1icrxh[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_m1icrxg .foundry_m1icrxh:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg .foundry_m1icrxh:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/breadcrumbs/dist/breadcrumbs/breadcrumbs.css"],
        names: [],
        mappings: "AAAA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,WAAW;AACb;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,iCAAiC;AACnC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;EAC9B,qCAAqC;EACrC,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,oGAAoG;EACpG,2BAA2B;AAC7B;AACA;EACE,oGAAoG;EACpG,2BAA2B;AAC7B;AACA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,qBAAqB;AACvB;AACA;EACE,uBAAuB;EACvB,8BAA8B;EAC9B,qCAAqC;EACrC,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,qCAAqC;EACrC,6FAA6F;EAC7F,kCAAkC;AACpC;AACA;EACE,SAAS;EACT,+BAA+B;EAC/B,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;EAC9C,+CAA+C;AACjD;AACA;EACE,iDAAiD;EACjD,kDAAkD;AACpD",
        sourcesContent: ['.foundry_m1icrx0 {\n  position: relative;\n  width: 100%;\n}\n.foundry_m1icrx1 {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.foundry_m1icrx2 {\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrx3 {\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx4 {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.foundry_m1icrx7 {\n  color: var(--foundry_nu8bkp3x);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:after {\n  content: "/";\n  padding: 0 var(--foundry_nu8bkpi);\n}\n.foundry_m1icrx7:hover {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_m1icrx7:last-child:after {\n  content: "";\n}\n.foundry_m1icrxa {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  outline-offset: -1px;\n  white-space: nowrap;\n}\n.foundry_m1icrxa:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxb {\n  padding: var(--foundry_nu8bkph) var(--foundry_nu8bkpi) var(--foundry_nu8bkph) var(--foundry_nu8bkph);\n  gap: var(--foundry_nu8bkph);\n}\n.foundry_m1icrxc {\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpj) var(--foundry_nu8bkpi) var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_m1icrxd {\n  color: var(--foundry_nu8bkp8j);\n  white-space: normal;\n}\n.foundry_m1icrxd:hover {\n  color: var(--foundry_nu8bkp8j);\n  text-decoration: none;\n}\n.foundry_m1icrxe {\n  background: transparent;\n  color: var(--foundry_nu8bkp3x);\n  border-radius: var(--foundry_nu8bkp3);\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n}\n.foundry_m1icrxe:hover {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxe[data-state="open"] {\n  color: var(--foundry_nu8bkp8l);\n  text-decoration: underline;\n}\n.foundry_m1icrxf {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  min-width: var(--foundry_nu8bkp1l);\n}\n.foundry_m1icrxh {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_m1icrxh:focus {\n  outline: none;\n}\n.foundry_m1icrxh:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_m1icrxh:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_m1icrxh:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_m1icrxh[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_m1icrxh[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_m1icrxh[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_m1icrxg .foundry_m1icrxh:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_m1icrxg .foundry_m1icrxh:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    86706: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_17pcofy1 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkp5);\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_17pcofy1:disabled {\n  cursor: not-allowed;\n}\n.foundry_17pcofya {\n  --foundry_17pcofy0: var(--foundry_nu8bkpj);\n  padding: var(--foundry_nu8bkpk) var(--foundry_nu8bkpo);\n}\n.foundry_17pcofyb {\n  --foundry_17pcofy0: var(--foundry_nu8bkpk);\n  padding: var(--foundry_nu8bkpm) var(--foundry_nu8bkpp);\n}\n.foundry_17pcofyc {\n  width: 100%;\n}\n.foundry_17pcofyk {\n  margin-right: var(--foundry_17pcofy0);\n}\n.foundry_17pcofym {\n  margin-left: auto;\n}\n.foundry_17pcofyn {\n  margin-left: var(--foundry_17pcofy0);\n}\n.foundry_17pcofyo {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  margin-right: auto;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/button/dist/button/button.css"],
        names: [],
        mappings: "AAAA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,qCAAqC;EACrC,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,yEAAyE;AAC3E;AACA;EACE,mBAAmB;AACrB;AACA;EACE,0CAA0C;EAC1C,sDAAsD;AACxD;AACA;EACE,0CAA0C;EAC1C,sDAAsD;AACxD;AACA;EACE,WAAW;AACb;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,kBAAkB;AACpB",
        sourcesContent: [".foundry_17pcofy1 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkp5);\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_17pcofy1:disabled {\n  cursor: not-allowed;\n}\n.foundry_17pcofya {\n  --foundry_17pcofy0: var(--foundry_nu8bkpj);\n  padding: var(--foundry_nu8bkpk) var(--foundry_nu8bkpo);\n}\n.foundry_17pcofyb {\n  --foundry_17pcofy0: var(--foundry_nu8bkpk);\n  padding: var(--foundry_nu8bkpm) var(--foundry_nu8bkpp);\n}\n.foundry_17pcofyc {\n  width: 100%;\n}\n.foundry_17pcofyk {\n  margin-right: var(--foundry_17pcofy0);\n}\n.foundry_17pcofym {\n  margin-left: auto;\n}\n.foundry_17pcofyn {\n  margin-left: var(--foundry_17pcofy0);\n}\n.foundry_17pcofyo {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  margin-right: auto;\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    22718: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_tv8xa40 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/caption/dist/caption/caption.css"],
        names: [],
        mappings: "AAAA;EACE,cAAc;EACd,8BAA8B;AAChC",
        sourcesContent: [".foundry_tv8xa40 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    44161: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_11gbdty0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_11gbdty2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_11gbdty3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 2px;\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 3px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 4px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkp3);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_11gbdty8 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty9 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdtya {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_11gbdtya:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-state="checked"], .foundry_11gbdtya[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-disabled="true"], .foundry_11gbdtya[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyb {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_11gbdtyb:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-state="checked"], .foundry_11gbdtyb[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-disabled="true"], .foundry_11gbdtyb[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_11gbdtyd {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_11gbdtyf {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_11gbdtyg {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_11gbdtyh {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_11gbdtyi {\n  margin: 0;\n}\n.foundry_11gbdtym {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_11gbdtyn {\n  color: var(--foundry_nu8bkp8q);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/checkbox/dist/checkbox/checkbox.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,YAAY;EACZ,WAAW;EACX,qCAAqC;EACrC,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,yCAAyC;EACzC,qCAAqC;EACrC,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,yCAAyC;EACzC,qCAAqC;EACrC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_11gbdty0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_11gbdty2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_11gbdty2:has(.foundry_11gbdty1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_11gbdty3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 2px;\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 3px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 4px;\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_11gbdty6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkp3);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_11gbdty8 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdty9 {\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_11gbdtya {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_11gbdtya:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-state="checked"], .foundry_11gbdtya[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_11gbdtya[data-disabled="true"], .foundry_11gbdtya[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyb {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_11gbdtyb:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-state="checked"], .foundry_11gbdtyb[data-state="mixed"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_11gbdtyb[data-disabled="true"], .foundry_11gbdtyb[data-disabled="true"]:hover {\n  color: var(--foundry_nu8bkp8t);\n  background-color: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_11gbdtyc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_11gbdtyd {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_11gbdtyf {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_11gbdtyg {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_11gbdtyh {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_11gbdtyi {\n  margin: 0;\n}\n.foundry_11gbdtym {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_11gbdtyn {\n  color: var(--foundry_nu8bkp8q);\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    17401: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_thj3a31 {\n  border: none;\n  margin: 0;\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_thj3a32 {\n  --foundry_thj3a30: 1px;\n}\n.foundry_thj3a33 {\n  --foundry_thj3a30: 2px;\n}\n.foundry_thj3a34 {\n  --foundry_thj3a30: 3px;\n}\n.foundry_thj3a35 {\n  --foundry_thj3a30: 4px;\n}\n.foundry_thj3a36 {\n  height: var(--foundry_thj3a30);\n  width: 100%;\n}\n.foundry_thj3a37 {\n  width: var(--foundry_thj3a30);\n  height: 100%;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/divider/dist/divider/divider.css"],
        names: [],
        mappings: "AAAA;EACE,YAAY;EACZ,SAAS;EACT,yCAAyC;AAC3C;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,YAAY;AACd",
        sourcesContent: [".foundry_thj3a31 {\n  border: none;\n  margin: 0;\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_thj3a32 {\n  --foundry_thj3a30: 1px;\n}\n.foundry_thj3a33 {\n  --foundry_thj3a30: 2px;\n}\n.foundry_thj3a34 {\n  --foundry_thj3a30: 3px;\n}\n.foundry_thj3a35 {\n  --foundry_thj3a30: 4px;\n}\n.foundry_thj3a36 {\n  height: var(--foundry_thj3a30);\n  width: 100%;\n}\n.foundry_thj3a37 {\n  width: var(--foundry_thj3a30);\n  height: 100%;\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    27949: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_uaq1gw0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_uaq1gw1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_uaq1gw2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_uaq1gw3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw4 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gw5 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: var(--foundry_nu8bkpk);\n  width: 100%;\n  background: var(--foundry_nu8bkp3p);\n  color: var(--foundry_nu8bkp8k);\n  border: 1px solid var(--foundry_nu8bkp9o);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gw5:hover {\n  border-color: var(--foundry_nu8bkp3z);\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw5:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  z-index: 1;\n}\n.foundry_uaq1gw5:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gw5:not([data-placeholder]) {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw5[data-state="open"] {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw6 {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_uaq1gw6:hover {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw7 {\n  border-color: var(--foundry_nu8bkp9z);\n  border-width: 2px;\n}\n.foundry_uaq1gw7:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_uaq1gw7:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gw8 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.foundry_uaq1gw9 {\n  color: var(--foundry_nu8bkp8s);\n  flex: none;\n}\n.foundry_uaq1gwa {\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_uaq1gwb {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  width: var(--radix-select-trigger-width);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  width: var(--radix-select-trigger-width);\n  max-height: calc(var(--radix-select-trigger-height) * 5);\n}\n.foundry_uaq1gwe {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_uaq1gwe::after {\n  content: "";\n  position: absolute;\n  margin: auto;\n  bottom: 3px;\n  left: 0;\n  right: 0;\n  width: calc(100% - (var(--foundry_nu8bkp13) * 2));\n  height: 1px;\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:focus {\n  outline: none;\n}\n.foundry_uaq1gwe:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gwe[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_uaq1gwe[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gwe[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type:after {\n  display: none;\n}\n.foundry_uaq1gwd .foundry_uaq1gwe:after {\n  display: none;\n}\n.foundry_uaq1gwf {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gwg {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_uaq1gwh {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gwi {\n  margin-left: auto;\n}\n.foundry_uaq1gwj {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwk {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwl {\n  width: 6px;\n  padding: 8px 5px;\n}\n.foundry_uaq1gwm {\n  background: var(--foundry_nu8bkp3u);\n  border-radius: var(--foundry_nu8bkpb);\n}\n.foundry_uaq1gwn {\n  color: var(--foundry_nu8bkp8k);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/dropdown/dist/dropdown/dropdown.css"],
        names: [],
        mappings: "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,0CAA0C;EAC1C,2BAA2B;EAC3B,qBAAqB;EACrB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,WAAW;EACX,mCAAmC;EACnC,8BAA8B;EAC9B,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,0CAA0C;EAC1C,UAAU;AACZ;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,iBAAiB;AACnB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,wCAAwC;EACxC,qCAAqC;AACvC;AACA;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,qCAAqC;EACrC,6FAA6F;EAC7F,wCAAwC;EACxC,wDAAwD;AAC1D;AACA;EACE,SAAS;EACT,+BAA+B;EAC/B,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,OAAO;EACP,QAAQ;EACR,iDAAiD;EACjD,WAAW;EACX,mCAAmC;AACrC;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;EAC9C,+CAA+C;AACjD;AACA;EACE,iDAAiD;EACjD,kDAAkD;AACpD;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;AACtC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,qCAAqC;AACvC;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_uaq1gw0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_uaq1gw1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_uaq1gw2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_uaq1gw3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw4 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gw5 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: var(--foundry_nu8bkpk);\n  width: 100%;\n  background: var(--foundry_nu8bkp3p);\n  color: var(--foundry_nu8bkp8k);\n  border: 1px solid var(--foundry_nu8bkp9o);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gw5:hover {\n  border-color: var(--foundry_nu8bkp3z);\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gw5:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  z-index: 1;\n}\n.foundry_uaq1gw5:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gw5:not([data-placeholder]) {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw5[data-state="open"] {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw6 {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_uaq1gw6:hover {\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_uaq1gw7 {\n  border-color: var(--foundry_nu8bkp9z);\n  border-width: 2px;\n}\n.foundry_uaq1gw7:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_uaq1gw7:focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gw8 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.foundry_uaq1gw9 {\n  color: var(--foundry_nu8bkp8s);\n  flex: none;\n}\n.foundry_uaq1gwa {\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_uaq1gwb {\n  border: 1px solid var(--foundry_nu8bkpa6);\n  width: var(--radix-select-trigger-width);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc {\n  margin: 0;\n  padding: 0;\n  background: var(--foundry_nu8bkp3p);\n  border-radius: var(--foundry_nu8bkp5);\n  box-shadow: 0px 0px 2px 0px var(--foundry_nu8bkp7z), 0px 8px 24px 0px var(--foundry_nu8bkp7z);\n  width: var(--radix-select-trigger-width);\n  max-height: calc(var(--radix-select-trigger-height) * 5);\n}\n.foundry_uaq1gwe {\n  margin: 0;\n  padding: var(--foundry_nu8bkpk);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_uaq1gwe::after {\n  content: "";\n  position: absolute;\n  margin: auto;\n  bottom: 3px;\n  left: 0;\n  right: 0;\n  width: calc(100% - (var(--foundry_nu8bkp13) * 2));\n  height: 1px;\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:focus {\n  outline: none;\n}\n.foundry_uaq1gwe:hover {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:active {\n  background: var(--foundry_nu8bkp3t);\n}\n.foundry_uaq1gwe:hover:not(:focus-visible) {\n  background: var(--foundry_nu8bkp3s);\n}\n.foundry_uaq1gwe:not(:hover):focus-visible {\n  outline: 2px solid var(--foundry_nu8bkp9q);\n  outline-offset: -2px;\n  z-index: 1;\n}\n.foundry_uaq1gwe[data-state="checked"] {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_uaq1gwe[data-disabled] {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_uaq1gwe[data-disabled]:hover {\n  background: var(--foundry_nu8bkp3r);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:first-of-type {\n  border-top-left-radius: var(--foundry_nu8bkp5);\n  border-top-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type {\n  border-bottom-left-radius: var(--foundry_nu8bkp5);\n  border-bottom-right-radius: var(--foundry_nu8bkp5);\n}\n.foundry_uaq1gwc .foundry_uaq1gwe:last-of-type:after {\n  display: none;\n}\n.foundry_uaq1gwd .foundry_uaq1gwe:after {\n  display: none;\n}\n.foundry_uaq1gwf {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_uaq1gwg {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_uaq1gwh {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_uaq1gwi {\n  margin-left: auto;\n}\n.foundry_uaq1gwj {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwk {\n  width: 100%;\n  height: 100%;\n}\n.foundry_uaq1gwl {\n  width: 6px;\n  padding: 8px 5px;\n}\n.foundry_uaq1gwm {\n  background: var(--foundry_nu8bkp3u);\n  border-radius: var(--foundry_nu8bkpb);\n}\n.foundry_uaq1gwn {\n  color: var(--foundry_nu8bkp8k);\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    19602: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_vsn8np0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8m);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/heading/dist/heading/heading.css"],
        names: [],
        mappings: "AAAA;EACE,SAAS;EACT,8BAA8B;AAChC",
        sourcesContent: [".foundry_vsn8np0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8m);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    40492: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_a5x3kh0 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_a5x3kh0:disabled {\n  cursor: not-allowed;\n}\n.foundry_a5x3kh9 {\n  padding: var(--foundry_nu8bkpj);\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_a5x3kha {\n  padding: var(--foundry_nu8bkpk);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khb {\n  padding: calc(var(--foundry_nu8bkpj) + 2.5px);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khc {\n  padding: var(--foundry_nu8bkpm);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khd {\n  width: 100%;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/icon-button/dist/icon-button/icon-button.css"],
        names: [],
        mappings: "AAAA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,yEAAyE;AAC3E;AACA;EACE,mBAAmB;AACrB;AACA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;AACA;EACE,6CAA6C;EAC7C,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;AACA;EACE,WAAW;AACb",
        sourcesContent: [".foundry_a5x3kh0 {\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  transition: all 0.15s ease-out;\n  transition-property: color, background-color, border-color, outline-color;\n}\n.foundry_a5x3kh0:disabled {\n  cursor: not-allowed;\n}\n.foundry_a5x3kh9 {\n  padding: var(--foundry_nu8bkpj);\n  border-radius: var(--foundry_nu8bkp4);\n}\n.foundry_a5x3kha {\n  padding: var(--foundry_nu8bkpk);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khb {\n  padding: calc(var(--foundry_nu8bkpj) + 2.5px);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khc {\n  padding: var(--foundry_nu8bkpm);\n  border-radius: var(--foundry_nu8bkp5);\n}\n.foundry_a5x3khd {\n  width: 100%;\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    86845: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_bc732x0 {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: var(--foundry_nu8bkp4);\n  padding: var(--foundry_nu8bkp11) var(--foundry_nu8bkp12);\n  border-style: solid;\n  border-width: 1px;\n  border-color: var(--foundry_nu8bkp9m);\n  user-select: none;\n  font-family: var(--foundry_nu8bkp2n);\n  font-size: var(--foundry_nu8bkp38);\n  white-space: nowrap;\n}\n.foundry_bc732x1 {\n  display: inline;\n  padding: 0 var(--foundry_nu8bkp11);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/keyboard/dist/keyboard/keyboard.css"],
        names: [],
        mappings: "AAAA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,qCAAqC;EACrC,wDAAwD;EACxD,mBAAmB;EACnB,iBAAiB;EACjB,qCAAqC;EACrC,iBAAiB;EACjB,oCAAoC;EACpC,kCAAkC;EAClC,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kCAAkC;AACpC",
        sourcesContent: [".foundry_bc732x0 {\n  background: var(--foundry_nu8bkp3r);\n  color: var(--foundry_nu8bkp8j);\n  border-radius: var(--foundry_nu8bkp4);\n  padding: var(--foundry_nu8bkp11) var(--foundry_nu8bkp12);\n  border-style: solid;\n  border-width: 1px;\n  border-color: var(--foundry_nu8bkp9m);\n  user-select: none;\n  font-family: var(--foundry_nu8bkp2n);\n  font-size: var(--foundry_nu8bkp38);\n  white-space: nowrap;\n}\n.foundry_bc732x1 {\n  display: inline;\n  padding: 0 var(--foundry_nu8bkp11);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    36033: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_bwy1ds0 {\n  display: block;\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  z-index: 3;\n}\n.foundry_bwy1ds1:disabled {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_bwy1ds1:not(:disabled) {\n  pointer-events: auto;\n}\n.foundry_bwy1ds2 {\n  position: fixed;\n  top: var(--foundry_nu8bkp15);\n  left: var(--foundry_nu8bkp15);\n}\n.foundry_bwy1ds3 {\n  top: var(--foundry_nu8bkp15);\n  right: var(--foundry_nu8bkp15);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_bwy1ds4 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--foundry_nu8bkpj);\n  border-color: var(--foundry_nu8bkp3n);\n  background-color: var(--foundry_nu8bkp3n);\n  border-radius: var(--foundry_nu8bkp6);\n  pointer-events: auto;\n}\n.foundry_bwy1ds5 {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.foundry_bwy1ds6 {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.foundry_bwy1ds8 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: var(--foundry_nu8bkpm);\n  padding: 0 var(--foundry_nu8bkp15) var(--foundry_nu8bkp15);\n  box-sizing: border-box;\n}\n.foundry_bwy1ds9 {\n  margin-left: auto;\n}\n.foundry_bwy1dsa {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  user-select: none;\n  touch-action: none;\n  width: 100%;\n  height: 64px;\n}\n.foundry_bwy1dsb {\n  background-color: var(--foundry_nu8bkp3l);\n  position: relative;\n  flex-grow: 1;\n  width: var(--foundry_nu8bkp10);\n}\n.foundry_bwy1dsc {\n  position: absolute;\n  background-color: var(--foundry_nu8bkp3l);\n  height: 100%;\n}\n.foundry_bwy1dsb + span {\n  width: 100%;\n  pointer-events: none;\n}\n.foundry_bwy1dsd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.foundry_bwy1dsd:focus-visible {\n  outline: none;\n}\n.foundry_bwy1dse {\n  display: block;\n  width: var(--foundry_nu8bkp13);\n  height: var(--foundry_nu8bkp13);\n  background-color: var(--foundry_nu8bkp3d);\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.foundry_bwy1dsd:focus-visible .foundry_bwy1dse {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_bwy1dsf {\n  display: flex;\n  flex-direction: column;\n}\n.foundry_bwy1dsf .foundry_bwy1dsg {\n  color: var(--foundry_nu8bkp3j);\n}\n.foundry_bwy1dsh {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  min-height: var(--foundry_nu8bkp1l);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.65) 75%);\n  z-index: -1;\n}\n@media screen and (min-width: 1024px) {\n  .foundry_bwy1ds2 {\n    top: var(--foundry_nu8bkp18);\n    left: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds3 {\n    top: var(--foundry_nu8bkp18);\n    right: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds8 {\n    padding: 0 var(--foundry_nu8bkp18) var(--foundry_nu8bkp18);\n  }\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/lightbox/dist/lightbox-controls/lightbox-controls.css"],
        names: [],
        mappings: "AAAA;EACE,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,QAAQ;EACR,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,qCAAqC;EACrC,yCAAyC;EACzC,qCAAqC;EACrC,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,yBAAyB;EACzB,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,2BAA2B;EAC3B,0DAA0D;EAC1D,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,yCAAyC;EACzC,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,YAAY;AACd;AACA;EACE,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,8BAA8B;EAC9B,+BAA+B;EAC/B,yCAAyC;EACzC,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,mCAAmC;EACnC,oFAAoF;EACpF,WAAW;AACb;AACA;EACE;IACE,4BAA4B;IAC5B,6BAA6B;EAC/B;EACA;IACE,4BAA4B;IAC5B,8BAA8B;EAChC;EACA;IACE,0DAA0D;EAC5D;AACF",
        sourcesContent: [".foundry_bwy1ds0 {\n  display: block;\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  z-index: 3;\n}\n.foundry_bwy1ds1:disabled {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_bwy1ds1:not(:disabled) {\n  pointer-events: auto;\n}\n.foundry_bwy1ds2 {\n  position: fixed;\n  top: var(--foundry_nu8bkp15);\n  left: var(--foundry_nu8bkp15);\n}\n.foundry_bwy1ds3 {\n  top: var(--foundry_nu8bkp15);\n  right: var(--foundry_nu8bkp15);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_bwy1ds4 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--foundry_nu8bkpj);\n  border-color: var(--foundry_nu8bkp3n);\n  background-color: var(--foundry_nu8bkp3n);\n  border-radius: var(--foundry_nu8bkp6);\n  pointer-events: auto;\n}\n.foundry_bwy1ds5 {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.foundry_bwy1ds6 {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.foundry_bwy1ds8 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: var(--foundry_nu8bkpm);\n  padding: 0 var(--foundry_nu8bkp15) var(--foundry_nu8bkp15);\n  box-sizing: border-box;\n}\n.foundry_bwy1ds9 {\n  margin-left: auto;\n}\n.foundry_bwy1dsa {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  user-select: none;\n  touch-action: none;\n  width: 100%;\n  height: 64px;\n}\n.foundry_bwy1dsb {\n  background-color: var(--foundry_nu8bkp3l);\n  position: relative;\n  flex-grow: 1;\n  width: var(--foundry_nu8bkp10);\n}\n.foundry_bwy1dsc {\n  position: absolute;\n  background-color: var(--foundry_nu8bkp3l);\n  height: 100%;\n}\n.foundry_bwy1dsb + span {\n  width: 100%;\n  pointer-events: none;\n}\n.foundry_bwy1dsd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.foundry_bwy1dsd:focus-visible {\n  outline: none;\n}\n.foundry_bwy1dse {\n  display: block;\n  width: var(--foundry_nu8bkp13);\n  height: var(--foundry_nu8bkp13);\n  background-color: var(--foundry_nu8bkp3d);\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.foundry_bwy1dsd:focus-visible .foundry_bwy1dse {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_bwy1dsf {\n  display: flex;\n  flex-direction: column;\n}\n.foundry_bwy1dsf .foundry_bwy1dsg {\n  color: var(--foundry_nu8bkp3j);\n}\n.foundry_bwy1dsh {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  min-height: var(--foundry_nu8bkp1l);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.65) 75%);\n  z-index: -1;\n}\n@media screen and (min-width: 1024px) {\n  .foundry_bwy1ds2 {\n    top: var(--foundry_nu8bkp18);\n    left: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds3 {\n    top: var(--foundry_nu8bkp18);\n    right: var(--foundry_nu8bkp18);\n  }\n  .foundry_bwy1ds8 {\n    padding: 0 var(--foundry_nu8bkp18) var(--foundry_nu8bkp18);\n  }\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    86365: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_1a74xwb0 {\n  position: relative;\n  display: block;\n}\n.foundry_1a74xwb1 {\n  background: none;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: zoom-in;\n  position: relative;\n  width: 100%;\n  transform-origin: center;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  will-change: transform, width, height, top, left, aspect-ratio, position, object-fit, object-position, opacity;\n}\n.foundry_1a74xwb2 {\n  opacity: 0;\n  position: fixed;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 8003;\n}\n.foundry_1a74xwb3 {\n  outline-width: 4px;\n  outline-offset: -4px;\n}\n.foundry_1a74xwb3:focus-visible {\n  outline-color: var(--foundry_nu8bkp7x);\n}\n.foundry_1a74xwb3[data-idle="false"]:focus-visible {\n  outline-color: transparent !important;\n}\n.foundry_1a74xwb3 > * {\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_1a74xwb4 {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: inherit;\n  object-position: inherit;\n}\n.foundry_1a74xwb5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--foundry_nu8bkp1a);\n  width: var(--foundry_nu8bkp1a);\n  position: absolute;\n  bottom: var(--foundry_nu8bkp17);\n  right: var(--foundry_nu8bkp17);\n  color: var(--foundry_nu8bkp3g);\n  background-color: color-mix(in srgb, var(--foundry_nu8bkp85), transparent 50%);\n  border-radius: var(--foundry_nu8bkpa);\n  backdrop-filter: blur(5px);\n  transition: all 0.15s ease-out;\n  will-change: opacity;\n}\n.foundry_1a74xwb3:hover .foundry_1a74xwb5, .foundry_1a74xwb3:focus-visible .foundry_1a74xwb5 {\n  background-color: var(--foundry_nu8bkp3g);\n  color: var(--foundry_nu8bkp3n);\n}\n.foundry_1a74xwb6 {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 8002;\n  will-change: opacity;\n}\n.foundry_1a74xwb7 {\n  touch-action: none;\n  will-change: transform;\n  cursor: grab;\n}\n.foundry_1a74xwb8 {\n  position: fixed;\n  inset: 0;\n  background-color: var(--foundry_nu8bkp85);\n  z-index: 8001;\n  will-change: opacity;\n}\n.foundry_1a74xwb9 {\n  position: relative;\n  z-index: 8004;\n  will-change: opacity;\n}\n.foundry_1a74xwba {\n  display: block;\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/lightbox/dist/lightbox/lightbox.css"],
        names: [],
        mappings: "AAAA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,iBAAiB;EACjB,uBAAuB;EACvB,cAAc;EACd,8GAA8G;AAChH;AACA;EACE,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;EAC/B,8BAA8B;EAC9B,kBAAkB;EAClB,+BAA+B;EAC/B,8BAA8B;EAC9B,8BAA8B;EAC9B,8EAA8E;EAC9E,qCAAqC;EACrC,0BAA0B;EAC1B,8BAA8B;EAC9B,oBAAoB;AACtB;AACA;EACE,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,eAAe;EACf,QAAQ;EACR,yCAAyC;EACzC,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB",
        sourcesContent: ['.foundry_1a74xwb0 {\n  position: relative;\n  display: block;\n}\n.foundry_1a74xwb1 {\n  background: none;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: zoom-in;\n  position: relative;\n  width: 100%;\n  transform-origin: center;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  will-change: transform, width, height, top, left, aspect-ratio, position, object-fit, object-position, opacity;\n}\n.foundry_1a74xwb2 {\n  opacity: 0;\n  position: fixed;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 8003;\n}\n.foundry_1a74xwb3 {\n  outline-width: 4px;\n  outline-offset: -4px;\n}\n.foundry_1a74xwb3:focus-visible {\n  outline-color: var(--foundry_nu8bkp7x);\n}\n.foundry_1a74xwb3[data-idle="false"]:focus-visible {\n  outline-color: transparent !important;\n}\n.foundry_1a74xwb3 > * {\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_1a74xwb4 {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: inherit;\n  object-position: inherit;\n}\n.foundry_1a74xwb5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--foundry_nu8bkp1a);\n  width: var(--foundry_nu8bkp1a);\n  position: absolute;\n  bottom: var(--foundry_nu8bkp17);\n  right: var(--foundry_nu8bkp17);\n  color: var(--foundry_nu8bkp3g);\n  background-color: color-mix(in srgb, var(--foundry_nu8bkp85), transparent 50%);\n  border-radius: var(--foundry_nu8bkpa);\n  backdrop-filter: blur(5px);\n  transition: all 0.15s ease-out;\n  will-change: opacity;\n}\n.foundry_1a74xwb3:hover .foundry_1a74xwb5, .foundry_1a74xwb3:focus-visible .foundry_1a74xwb5 {\n  background-color: var(--foundry_nu8bkp3g);\n  color: var(--foundry_nu8bkp3n);\n}\n.foundry_1a74xwb6 {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 8002;\n  will-change: opacity;\n}\n.foundry_1a74xwb7 {\n  touch-action: none;\n  will-change: transform;\n  cursor: grab;\n}\n.foundry_1a74xwb8 {\n  position: fixed;\n  inset: 0;\n  background-color: var(--foundry_nu8bkp85);\n  z-index: 8001;\n  will-change: opacity;\n}\n.foundry_1a74xwb9 {\n  position: relative;\n  z-index: 8004;\n  will-change: opacity;\n}\n.foundry_1a74xwba {\n  display: block;\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    59509: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_148vt480 {\n  z-index: 1;\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_148vt481 {\n  will-change: transform;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  touch-action: none;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/lightbox/dist/zoom-pan/zoom-pan.css"],
        names: [],
        mappings: "AAAA;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB",
        sourcesContent: [".foundry_148vt480 {\n  z-index: 1;\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.foundry_148vt481 {\n  will-change: transform;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  touch-action: none;\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    44533: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_13plll30 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/metadata/dist/metadata/metadata.css"],
        names: [],
        mappings: "AAAA;EACE,cAAc;EACd,8BAA8B;AAChC",
        sourcesContent: [".foundry_13plll30 {\n  display: block;\n  color: var(--foundry_nu8bkp8j);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    22338: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_kwp8su0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_kwp8su0 + .foundry_kwp8su0 {\n  margin-top: var(--foundry_nu8bkp2z);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/paragraph/dist/paragraph/paragraph.css"],
        names: [],
        mappings: "AAAA;EACE,SAAS;EACT,8BAA8B;AAChC;AACA;EACE,mCAAmC;AACrC",
        sourcesContent: [".foundry_kwp8su0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}\n.foundry_kwp8su0 + .foundry_kwp8su0 {\n  margin-top: var(--foundry_nu8bkp2z);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    96295: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_1pfduet0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_1pfduet2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpa);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_1pfduet3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 1px;\n}\n.foundry_1pfduet4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 2px;\n}\n.foundry_1pfduet5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 3px;\n}\n.foundry_1pfduet6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkpa);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_1pfduet7 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_1pfduet7:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-state="checked"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet7[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet8 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1pfduet8:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-state="checked"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet8[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_1pfdueta {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_1pfduetc {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_1pfduetd {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_1pfduete {\n  margin: 0;\n}\n.foundry_1pfdueti {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1pfduetj {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_1pfduetk {\n  color: var(--foundry_nu8bkp8q);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/radio-group/dist/radio-button/radio-button.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,qCAAqC;AACvC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;EACX,qCAAqC;EACrC,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC",
        sourcesContent: ['.foundry_1pfduet0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_1pfduet2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpa);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9z);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1[aria-invalid="true"]):hover {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp4m);\n}\n.foundry_1pfduet2:has(.foundry_1pfduet1:focus-visible) {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_1pfduet3 {\n  height: var(--foundry_nu8bkp15);\n  width: var(--foundry_nu8bkp15);\n  padding: 1px;\n}\n.foundry_1pfduet4 {\n  height: var(--foundry_nu8bkp17);\n  width: var(--foundry_nu8bkp17);\n  padding: 2px;\n}\n.foundry_1pfduet5 {\n  height: var(--foundry_nu8bkp18);\n  width: var(--foundry_nu8bkp18);\n  padding: 3px;\n}\n.foundry_1pfduet6 {\n  height: 100%;\n  width: 100%;\n  border-radius: var(--foundry_nu8bkpa);\n  box-sizing: border-box;\n  border-width: var(--foundry_nu8bkpe);\n}\n.foundry_1pfduet7 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_1pfduet7:hover {\n  border-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-state="checked"] {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n}\n.foundry_1pfduet7[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet7[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet8 {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1pfduet8:hover {\n  border-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-state="checked"] {\n  border-color: var(--foundry_nu8bkp40);\n  background-color: var(--foundry_nu8bkp40);\n}\n.foundry_1pfduet8[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  cursor: not-allowed;\n}\n.foundry_1pfduet8[data-state="checked"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1pfduet9 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  transition: all 0.15s ease-out;\n}\n.foundry_1pfdueta {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_1pfduetc {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_1pfduetd {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_1pfduete {\n  margin: 0;\n}\n.foundry_1pfdueti {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_1pfduetj {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_1pfduetk {\n  color: var(--foundry_nu8bkp8q);\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    44625: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_njguqn0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpo);\n}\n.foundry_njguqn1 {\n  display: flex;\n  align-items: flex-start;\n}\n.foundry_njguqn2 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn3 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn4 {\n  gap: var(--foundry_nu8bkpn);\n}\n.foundry_njguqn5 {\n  flex-direction: row;\n}\n.foundry_njguqn6 {\n  flex-direction: column;\n}\n.foundry_njguqn7 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_njguqn8 {\n  margin: 0;\n}\n.foundry_njguqn9 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_njguqna {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_njguqnb {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_njguqnc {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/radio-group/dist/radio-group/radio-group.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;AACtC",
        sourcesContent: [".foundry_njguqn0 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpo);\n}\n.foundry_njguqn1 {\n  display: flex;\n  align-items: flex-start;\n}\n.foundry_njguqn2 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn3 {\n  gap: var(--foundry_nu8bkpm);\n}\n.foundry_njguqn4 {\n  gap: var(--foundry_nu8bkpn);\n}\n.foundry_njguqn5 {\n  flex-direction: row;\n}\n.foundry_njguqn6 {\n  flex-direction: column;\n}\n.foundry_njguqn7 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_njguqn8 {\n  margin: 0;\n}\n.foundry_njguqn9 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_njguqna {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_njguqnb {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_njguqnc {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    13786: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_xnp8ik0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/subtitle/dist/subtitle/subtitle.css"],
        names: [],
        mappings: "AAAA;EACE,SAAS;EACT,8BAA8B;AAChC",
        sourcesContent: [".foundry_xnp8ik0 {\n  margin: 0;\n  color: var(--foundry_nu8bkp8j);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    96722: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_okz6z20 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_okz6z21 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpb);\n  border-width: var(--foundry_nu8bkpe);\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  transition: all 100ms ease-in-out;\n}\n.foundry_okz6z21:has(input:focus-visible) {\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_okz6z22 {\n  background-color: transparent;\n  color: var(--foundry_nu8bkp8v);\n}\n.foundry_okz6z22:hover {\n  border-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkpap);\n}\n.foundry_okz6z22[data-state="selected"], .foundry_okz6z22[data-state="selected"]:hover {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_okz6z22[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z22[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z23 {\n  background-color: transparent;\n  border-color: var(--foundry_nu8bkp8s);\n  color: var(--foundry_nu8bkp8s);\n}\n.foundry_okz6z23:hover {\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_okz6z23[data-state="selected"], .foundry_okz6z23[data-state="selected"]:hover {\n  background-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_okz6z23[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z23[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z24 {\n  width: var(--foundry_nu8bkp19);\n}\n.foundry_okz6z25 {\n  height: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z26 {\n  width: var(--foundry_nu8bkp1a);\n}\n.foundry_okz6z27 {\n  height: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z28 {\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkpb);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n.foundry_okz6z29 {\n  padding-left: 4px;\n}\n.foundry_okz6z2a {\n  padding-left: 5px;\n}\n.foundry_okz6z2b {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_okz6z2c {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_okz6z2d {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_okz6z2e {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_okz6z2f {\n  margin: 0;\n}\n.foundry_okz6z2i {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_okz6z2k {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2l {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2m {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2n {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2o {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  margin: auto;\n  transition: opacity 50ms ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.foundry_okz6z2p {\n  --foundry_okz6z2j: 5px;\n}\n.foundry_okz6z2q {\n  --foundry_okz6z2j: 7px;\n}\n.foundry_okz6z2r {\n  left: var(--foundry_okz6z2j);\n  right: auto;\n}\n.foundry_okz6z2s {\n  left: auto;\n  right: var(--foundry_okz6z2j);\n}\n.foundry_okz6z2v {\n  opacity: 1;\n}\n.foundry_okz6z2w {\n  opacity: 1;\n}\n.foundry_okz6z2y {\n  width: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z2z {\n  height: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z210 {\n  width: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z211 {\n  height: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z212 {\n  display: flex;\n  transition: transform 80ms ease-out;\n  will-change: transform;\n}\n.foundry_okz6z213 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z214 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z215 {\n  transform: translateX(var(--foundry_okz6z2x));\n}\n@supports (width: round(1px, 1px)) {\n  .foundry_okz6z24 {\n    width: round(var(--foundry_nu8bkp19), 2px);\n  }\n  .foundry_okz6z26 {\n    width: round(var(--foundry_nu8bkp1a), 2px);\n  }\n  .foundry_okz6z2k {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2m {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2y {\n    width: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z210 {\n    width: round(var(--foundry_nu8bkp14), 2px);\n  }\n}\n@supports (height: round(1px, 1px)) {\n  .foundry_okz6z25 {\n    height: round(var(--foundry_nu8bkp16), 2px);\n  }\n  .foundry_okz6z27 {\n    height: round(var(--foundry_nu8bkp17), 2px);\n  }\n  .foundry_okz6z2l {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2n {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2z {\n    height: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z211 {\n    height: round(var(--foundry_nu8bkp14), 2px);\n  }\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/switch/dist/switch/switch.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,qCAAqC;EACrC,oCAAoC;EACpC,mBAAmB;EACnB,qCAAqC;EACrC,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,sBAAsB;EACtB,qCAAqC;EACrC,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,UAAU;EACV,6BAA6B;AAC/B;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,6CAA6C;AAC/C;AACA;EACE;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,0CAA0C;EAC5C;AACF;AACA;EACE;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,2CAA2C;EAC7C;AACF",
        sourcesContent: ['.foundry_okz6z20 {\n  color: var(--foundry_nu8bkp8j);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpk);\n}\n.foundry_okz6z21 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  border-radius: var(--foundry_nu8bkpb);\n  border-width: var(--foundry_nu8bkpe);\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8v);\n  transition: all 100ms ease-in-out;\n}\n.foundry_okz6z21:has(input:focus-visible) {\n  outline-width: 2px;\n  outline-offset: 2px;\n  outline-style: solid;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_okz6z22 {\n  background-color: transparent;\n  color: var(--foundry_nu8bkp8v);\n}\n.foundry_okz6z22:hover {\n  border-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkpap);\n}\n.foundry_okz6z22[data-state="selected"], .foundry_okz6z22[data-state="selected"]:hover {\n  border-color: var(--foundry_nu8bkpap);\n  background-color: var(--foundry_nu8bkpap);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_okz6z22[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z22[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z23 {\n  background-color: transparent;\n  border-color: var(--foundry_nu8bkp8s);\n  color: var(--foundry_nu8bkp8s);\n}\n.foundry_okz6z23:hover {\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp40);\n}\n.foundry_okz6z23[data-state="selected"], .foundry_okz6z23[data-state="selected"]:hover {\n  background-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_okz6z23[data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  color: var(--foundry_nu8bkp3v);\n  cursor: not-allowed;\n}\n.foundry_okz6z23[data-state="selected"][data-disabled="true"] {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n  color: var(--foundry_nu8bkp8t);\n}\n.foundry_okz6z24 {\n  width: var(--foundry_nu8bkp19);\n}\n.foundry_okz6z25 {\n  height: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z26 {\n  width: var(--foundry_nu8bkp1a);\n}\n.foundry_okz6z27 {\n  height: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z28 {\n  box-sizing: border-box;\n  border-radius: var(--foundry_nu8bkpb);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n.foundry_okz6z29 {\n  padding-left: 4px;\n}\n.foundry_okz6z2a {\n  padding-left: 5px;\n}\n.foundry_okz6z2b {\n  display: flex;\n  flex-direction: column;\n  gap: var(--foundry_nu8bkpi);\n}\n.foundry_okz6z2c {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_okz6z2d {\n  padding-top: var(--foundry_nu8bkph);\n}\n.foundry_okz6z2e {\n  padding-top: var(--foundry_nu8bkpi);\n  gap: var(--foundry_nu8bkpj);\n}\n.foundry_okz6z2f {\n  margin: 0;\n}\n.foundry_okz6z2i {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_okz6z2k {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2l {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2m {\n  width: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2n {\n  height: var(--foundry_nu8bkp15);\n}\n.foundry_okz6z2o {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  margin: auto;\n  transition: opacity 50ms ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.foundry_okz6z2p {\n  --foundry_okz6z2j: 5px;\n}\n.foundry_okz6z2q {\n  --foundry_okz6z2j: 7px;\n}\n.foundry_okz6z2r {\n  left: var(--foundry_okz6z2j);\n  right: auto;\n}\n.foundry_okz6z2s {\n  left: auto;\n  right: var(--foundry_okz6z2j);\n}\n.foundry_okz6z2v {\n  opacity: 1;\n}\n.foundry_okz6z2w {\n  opacity: 1;\n}\n.foundry_okz6z2y {\n  width: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z2z {\n  height: var(--foundry_nu8bkp13);\n}\n.foundry_okz6z210 {\n  width: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z211 {\n  height: var(--foundry_nu8bkp14);\n}\n.foundry_okz6z212 {\n  display: flex;\n  transition: transform 80ms ease-out;\n  will-change: transform;\n}\n.foundry_okz6z213 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp16);\n}\n.foundry_okz6z214 {\n  --foundry_okz6z2x: var(--foundry_nu8bkp17);\n}\n.foundry_okz6z215 {\n  transform: translateX(var(--foundry_okz6z2x));\n}\n@supports (width: round(1px, 1px)) {\n  .foundry_okz6z24 {\n    width: round(var(--foundry_nu8bkp19), 2px);\n  }\n  .foundry_okz6z26 {\n    width: round(var(--foundry_nu8bkp1a), 2px);\n  }\n  .foundry_okz6z2k {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2m {\n    width: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2y {\n    width: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z210 {\n    width: round(var(--foundry_nu8bkp14), 2px);\n  }\n}\n@supports (height: round(1px, 1px)) {\n  .foundry_okz6z25 {\n    height: round(var(--foundry_nu8bkp16), 2px);\n  }\n  .foundry_okz6z27 {\n    height: round(var(--foundry_nu8bkp17), 2px);\n  }\n  .foundry_okz6z2l {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2n {\n    height: round(var(--foundry_nu8bkp15), 2px);\n  }\n  .foundry_okz6z2z {\n    height: round(var(--foundry_nu8bkp13), 2px);\n  }\n  .foundry_okz6z211 {\n    height: round(var(--foundry_nu8bkp14), 2px);\n  }\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    88691: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, '.foundry_vq8c3j0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_vq8c3j1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_vq8c3j2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_vq8c3j3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j4 {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j5 {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_vq8c3j6 {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j7 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j8 {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9 {\n  resize: none;\n  padding: var(--foundry_nu8bkpk);\n  padding-right: 0;\n  border-radius: var(--foundry_nu8bkp5);\n  background: var(--foundry_nu8bkp3p);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp9o);\n  color: var(--foundry_nu8bkp8j);\n  width: 100%;\n  box-sizing: border-box;\n  scrollbar-gutter: stable;\n}\n.foundry_vq8c3j9:hover {\n  border-color: var(--foundry_nu8bkp3z);\n}\n.foundry_vq8c3j9:focus-visible {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: -2px;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_vq8c3j9::placeholder {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_vq8c3j9:read-only {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9::-webkit-scrollbar {\n  width: calc(var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj));\n}\n.foundry_vq8c3j9::-webkit-scrollbar-track {\n  display: none;\n  user-select: none;\n  touch-action: none;\n}\n.foundry_vq8c3j9::-webkit-scrollbar-thumb {\n  border-width: calc((var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj) - 6px) / 2);\n  border-style: solid;\n  border-color: transparent;\n  background-color: var(--foundry_nu8bkp9m);\n  border-radius: var(--foundry_nu8bkpb);\n  background-clip: content-box;\n}\n.foundry_vq8c3j9:hover::placeholder {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j9[aria-invalid="true"]:disabled, .foundry_vq8c3j9[aria-invalid="true"][readonly] {\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb {\n  border-width: 2px;\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_vq8c3jb:focus-visible {\n  border-color: transparent;\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/text-area/dist/text-area/text-area.css"],
        names: [],
        mappings: "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,0CAA0C;EAC1C,2BAA2B;EAC3B,qBAAqB;EACrB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oCAAoC;AACtC;AACA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,+BAA+B;EAC/B,gBAAgB;EAChB,qCAAqC;EACrC,mCAAmC;EACnC,iBAAiB;EACjB,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,sCAAsC;AACxC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,4DAA4D;AAC9D;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,+EAA+E;EAC/E,mBAAmB;EACnB,yBAAyB;EACzB,yCAAyC;EACzC,qCAAqC;EACrC,4BAA4B;AAC9B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,iBAAiB;EACjB,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;AAC3B",
        sourcesContent: ['.foundry_vq8c3j0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: var(--foundry_nu8bkpj);\n  width: 100%;\n}\n.foundry_vq8c3j1 {\n  display: grid;\n  grid-template-areas: "label hint";\n  grid-template-columns: 1fr max(20%, 100px);\n  gap: var(--foundry_nu8bkpj);\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n.foundry_vq8c3j2 {\n  grid-area: label;\n  word-break: break-all;\n}\n.foundry_vq8c3j3 {\n  grid-area: hint;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j4 {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j5 {\n  color: var(--foundry_nu8bkp8q);\n}\n.foundry_vq8c3j6 {\n  padding-top: 3px;\n  vertical-align: text-top;\n  margin-right: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j7 {\n  color: var(--foundry_nu8bkp8q);\n  margin-left: var(--foundry_nu8bkpi);\n}\n.foundry_vq8c3j8 {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9 {\n  resize: none;\n  padding: var(--foundry_nu8bkpk);\n  padding-right: 0;\n  border-radius: var(--foundry_nu8bkp5);\n  background: var(--foundry_nu8bkp3p);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp9o);\n  color: var(--foundry_nu8bkp8j);\n  width: 100%;\n  box-sizing: border-box;\n  scrollbar-gutter: stable;\n}\n.foundry_vq8c3j9:hover {\n  border-color: var(--foundry_nu8bkp3z);\n}\n.foundry_vq8c3j9:focus-visible {\n  border-color: transparent;\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: -2px;\n  outline-color: var(--foundry_nu8bkp9q);\n}\n.foundry_vq8c3j9::placeholder {\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9:disabled {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n  cursor: not-allowed;\n}\n.foundry_vq8c3j9:read-only {\n  background: var(--foundry_nu8bkp3u);\n  border-color: var(--foundry_nu8bkpa5);\n  color: var(--foundry_nu8bkp8k);\n}\n.foundry_vq8c3j9::-webkit-scrollbar {\n  width: calc(var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj));\n}\n.foundry_vq8c3j9::-webkit-scrollbar-track {\n  display: none;\n  user-select: none;\n  touch-action: none;\n}\n.foundry_vq8c3j9::-webkit-scrollbar-thumb {\n  border-width: calc((var(--foundry_nu8bkpm) + var(--foundry_nu8bkpj) - 6px) / 2);\n  border-style: solid;\n  border-color: transparent;\n  background-color: var(--foundry_nu8bkp9m);\n  border-radius: var(--foundry_nu8bkpb);\n  background-clip: content-box;\n}\n.foundry_vq8c3j9:hover::placeholder {\n  color: var(--foundry_nu8bkp8l);\n}\n.foundry_vq8c3j9[aria-invalid="true"]:disabled, .foundry_vq8c3j9[aria-invalid="true"][readonly] {\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb {\n  border-width: 2px;\n  border-color: var(--foundry_nu8bkp9z);\n}\n.foundry_vq8c3jb:hover {\n  border-color: var(--foundry_nu8bkp4m);\n}\n.foundry_vq8c3jb:focus-visible {\n  border-color: transparent;\n}'],
        sourceRoot: ""
      }]);
      const s = a
    },
    95075: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_12nwidl1 {\n  text-decoration-line: underline;\n}\n.foundry_12nwidl2 {\n  font-style: italic;\n}\n.foundry_12nwidl3 {\n  font-style: italic;\n}\n.foundry_12nwidl4 {\n  font-style: italic;\n}\n.foundry_12nwidl5 {\n  background: var(--foundry_nu8bkp4x);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_12nwidl6 {\n  text-decoration-line: strikethrough;\n}\n.foundry_12nwidl7 {\n  font-weight: bold;\n}\n.foundry_12nwidla {\n  text-decoration-line: underline;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/text/dist/text/text.css"],
        names: [],
        mappings: "AAAA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,8BAA8B;AAChC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,+BAA+B;AACjC",
        sourcesContent: [".foundry_12nwidl1 {\n  text-decoration-line: underline;\n}\n.foundry_12nwidl2 {\n  font-style: italic;\n}\n.foundry_12nwidl3 {\n  font-style: italic;\n}\n.foundry_12nwidl4 {\n  font-style: italic;\n}\n.foundry_12nwidl5 {\n  background: var(--foundry_nu8bkp4x);\n  color: var(--foundry_nu8bkp85);\n}\n.foundry_12nwidl6 {\n  text-decoration-line: strikethrough;\n}\n.foundry_12nwidl7 {\n  font-weight: bold;\n}\n.foundry_12nwidla {\n  text-decoration-line: underline;\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    95923: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(42587),
        o = t.n(r),
        i = t(15081),
        a = t.n(i)()(o());
      a.push([e.id, ".foundry_h3lgaa0 {\n  border-radius: var(--foundry_nu8bkp4);\n  background-color: var(--foundry_nu8bkp8i);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8i);\n  box-shadow: 0 0 2px var(--foundry_nu8bkp7z), 0 8px 24px var(--foundry_nu8bkp7z);\n  user-select: none;\n  max-width: var(--foundry_nu8bkp1p);\n  position: relative;\n  z-index: 110;\n}\n.foundry_h3lgaa1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpk);\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp7x);\n}\n.foundry_h3lgaa2 {\n  fill: var(--foundry_nu8bkp8i);\n  width: var(--foundry_nu8bkp12);\n  height: var(--foundry_nu8bkp11);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tooltip/dist/tooltip/tooltip.css"],
        names: [],
        mappings: "AAAA;EACE,qCAAqC;EACrC,yCAAyC;EACzC,iBAAiB;EACjB,mBAAmB;EACnB,qCAAqC;EACrC,+EAA+E;EAC/E,iBAAiB;EACjB,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sDAAsD;EACtD,2BAA2B;EAC3B,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;AACjC",
        sourcesContent: [".foundry_h3lgaa0 {\n  border-radius: var(--foundry_nu8bkp4);\n  background-color: var(--foundry_nu8bkp8i);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--foundry_nu8bkp8i);\n  box-shadow: 0 0 2px var(--foundry_nu8bkp7z), 0 8px 24px var(--foundry_nu8bkp7z);\n  user-select: none;\n  max-width: var(--foundry_nu8bkp1p);\n  position: relative;\n  z-index: 110;\n}\n.foundry_h3lgaa1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--foundry_nu8bkpi) var(--foundry_nu8bkpk);\n  gap: var(--foundry_nu8bkpj);\n  color: var(--foundry_nu8bkp7x);\n}\n.foundry_h3lgaa2 {\n  fill: var(--foundry_nu8bkp8i);\n  width: var(--foundry_nu8bkp12);\n  height: var(--foundry_nu8bkp11);\n}"],
        sourceRoot: ""
      }]);
      const s = a
    },
    88447: (e, n, t) => {
      t.r(n), t.d(n, {
        Body: () => Dk,
        BreadcrumbItem: () => jE,
        Breadcrumbs: () => SE,
        Button: () => gr,
        Caption: () => Z,
        Checkbox: () => fw,
        CloseButton: () => Vk,
        Description: () => zk,
        Divider: () => tk,
        Dropdown: () => gC,
        ErrorText: () => Uk,
        Footer: () => Fk,
        Header: () => Rk,
        Heading: () => N,
        Icon: () => Ik,
        IconButton: () => Mp,
        Lightbox: () => Ym,
        Link: () => qk,
        Metadata: () => ae,
        Option: () => CC,
        Paragraph: () => F,
        RadioButton: () => Kw,
        RadioContext: () => Dw,
        RadioGroup: () => Mw,
        Root: () => Lk,
        RootContext: () => Ok,
        Subtitle: () => ye,
        Switch: () => gk,
        Text: () => ke,
        TextArea: () => Xn,
        TextSemantics: () => we,
        Title: () => Hk,
        Tooltip: () => FA,
        iconStatusMap: () => Mk,
        useAlertContext: () => Nk
      });
      var r = {};
      t.r(r), t.d(r, {
        CheckLG: () => LE,
        CheckMD: () => NE,
        CheckXL: () => RE,
        DashLG: () => ME,
        DashMD: () => DE,
        DashXL: () => IE
      });
      var o = {};
      t.r(o), t.d(o, {
        DotLG: () => Hw,
        DotMD: () => Iw,
        DotXL: () => zw
      });
      var i = t(73855),
        a = t(4255),
        s = t(62229),
        u = t.t(s, 2),
        l = t.n(s),
        d = t(17984),
        c = t(53178),
        f = t.n(c),
        p = t(27835),
        h = t.n(p),
        y = t(17529),
        A = t.n(y),
        v = t(72162),
        m = t.n(v),
        b = t(82510),
        g = t.n(b),
        C = t(90675),
        _ = t.n(C),
        E = t(19602),
        w = {};

      function k(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function B(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function x(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? B(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = k(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function P(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      w.styleTagTransform = _(), w.setAttributes = m(), w.insert = A().bind(null, "head"), w.domAPI = h(), w.insertStyleElement = g(), f()(E.A, w), E.A && E.A.locals && E.A.locals;
      var T, S, j = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        O = (T = {
          defaultClassName: "foundry_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd3",
              2: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd4",
              3: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd5",
              4: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd6",
              5: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7",
              6: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, S = e => {
          var n = T.defaultClassName,
            t = x(x({}, T.defaultVariants), e);
          for (var r in t) {
            var o, i = null !== (o = t[r]) && void 0 !== o ? o : T.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = T.variantClassNames[r][a];
              s && (n += " " + s)
            }
          }
          for (var [u, l] of T.compoundVariants) j(u, t, T.defaultVariants) && (n += " " + l);
          return n
        }, S.variants = () => Object.keys(T.variantClassNames), S.classNames = {
          get base() {
            return T.defaultClassName.split(" ")[0]
          },
          get variants() {
            return P(T.variantClassNames, (e => P(e, (e => e.split(" ")[0]))))
          }
        }, S);
      const N = (0, s.forwardRef)((({
        asChild: e,
        level: n,
        testId: t,
        ...r
      }, o) => {
        const s = e ? d.DX : `h${n}`,
          u = (0, a.v6)(r, {
            className: O({
              level: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));
      var L = t(22338),
        R = {};

      function D(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function M(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function I(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? M(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = D(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function H(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      R.styleTagTransform = _(), R.setAttributes = m(), R.insert = A().bind(null, "head"), R.domAPI = h(), R.insertStyleElement = g(), f()(L.A, R), L.A && L.A.locals && L.A.locals;
      var z = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        q = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = I(I({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) z(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return H(e.variantClassNames, (e => H(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_kwp8su0",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
              bold: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
              hyperlink: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdh",
              allCaps: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const F = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "p",
          u = (0, a.v6)(r, {
            className: q({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var U = t(22718),
        V = {};

      function G(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function W(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function K(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? W(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = G(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function X(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      V.styleTagTransform = _(), V.setAttributes = m(), V.insert = A().bind(null, "head"), V.domAPI = h(), V.insertStyleElement = g(), f()(U.A, V), U.A && U.A.locals && U.A.locals;
      var $ = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Y = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = K(K({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) $(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return X(e.variantClassNames, (e => X(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_tv8xa40",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
              hyperlink: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
              allCaps: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Z = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "span",
          u = (0, a.v6)(r, {
            className: Y({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var Q = t(44533),
        J = {};

      function ee(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function ne(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function te(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? ne(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = ee(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ne(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function re(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      J.styleTagTransform = _(), J.setAttributes = m(), J.insert = A().bind(null, "head"), J.domAPI = h(), J.insertStyleElement = g(), f()(Q.A, J), Q.A && Q.A.locals && Q.A.locals;
      var oe = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        ie = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = te(te({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) oe(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return re(e.variantClassNames, (e => re(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_13plll30",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              bold: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcds"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ae = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "span",
          u = (0, a.v6)(r, {
            className: ie({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var se = t(13786),
        ue = {};

      function le(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function de(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function ce(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? de(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = le(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : de(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function fe(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      ue.styleTagTransform = _(), ue.setAttributes = m(), ue.insert = A().bind(null, "head"), ue.domAPI = h(), ue.insertStyleElement = g(), f()(se.A, ue), se.A && se.A.locals && se.A.locals;
      var pe = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        he = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = ce(ce({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) pe(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fe(e.variantClassNames, (e => fe(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_xnp8ik0",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcd9 foundry_tdsdcd0 foundry_tdsdcdb",
              bold: "foundry_tdsdcd9 foundry_tdsdcd0 foundry_tdsdcdc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ye = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "p",
          u = (0, a.v6)(r, {
            className: he({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var Ae = t(95075),
        ve = {};

      function me(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function be(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function ge(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? be(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = me(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : be(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Ce(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      ve.styleTagTransform = _(), ve.setAttributes = m(), ve.insert = A().bind(null, "head"), ve.domAPI = h(), ve.insertStyleElement = g(), f()(Ae.A, ve), Ae.A && Ae.A.locals && Ae.A.locals;
      var _e = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Ee = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = ge(ge({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) _e(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ce(e.variantClassNames, (e => Ce(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_12nwidl1",
              cite: "foundry_12nwidl2",
              emphasis: "foundry_12nwidl3",
              idiomatic: "foundry_12nwidl4",
              mark: "foundry_12nwidl5",
              "strike-through": "foundry_12nwidl6",
              strong: "foundry_12nwidl7",
              sub: "foundry_12nwidl8",
              sup: "foundry_12nwidl9",
              underline: "foundry_12nwidla",
              default: "foundry_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const we = {
          abbr: "abbr",
          cite: "cite",
          emphasis: "em",
          idiomatic: "i",
          mark: "mark",
          "strike-through": "s",
          strong: "strong",
          sub: "sub",
          sup: "sup",
          underline: "u",
          default: "span"
        },
        ke = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          semantic: t = "default",
          ...r
        }, o) => {
          const s = e ? d.DX : we[t] || "span",
            u = (0, a.v6)(r, {
              className: Ee({
                semantic: t
              })
            });
          return (0, i.jsx)(s, {
            ref: o,
            "data-testid": n,
            ...u
          })
        }));
      var Be = t(81409),
        xe = t.t(Be, 2);
      const Pe = new Set(["id"]),
        Te = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Se = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        je = /^(data-.*)$/;
      const Oe = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Ne(e) {
        const n = (0, s.useRef)(null);
        return Oe((() => {
          n.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const t = n.current;
          return null == t ? void 0 : t(...e)
        }), [])
      }
      const Le = e => {
          var n;
          return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document
        },
        Re = e => e && "window" in e && e.window === e ? e : Le(e).defaultView || window;

      function De(...e) {
        return (...n) => {
          for (let t of e) "function" == typeof t && t(...n)
        }
      }
      const Me = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Ie = s.createContext(Me),
        He = s.createContext(!1);
      let ze = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        qe = new WeakMap;
      const Fe = "function" == typeof s.useId ? function(e) {
        let n = s.useId(),
          [t] = (0, s.useState)("function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(Ge, Ue, Ve) : (0, s.useContext)(He));
        return e || `${t?"react-aria":`react-aria${Me.prefix}`}-${n}`
      } : function(e) {
        let n = (0, s.useContext)(Ie);
        n !== Me || ze || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let t = function(e = !1) {
            let n = (0, s.useContext)(Ie),
              t = (0, s.useRef)(null);
            if (null === t.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let t = qe.get(e);
                null == t ? qe.set(e, {
                  id: n.current,
                  state: e.memoizedState
                }) : e.memoizedState !== t.state && (n.current = t.id, qe.delete(e))
              }
              t.current = ++n.current
            }
            return t.current
          }(!!e),
          r = `react-aria${n.prefix}`;
        return e || `${r}-${t}`
      };

      function Ue() {
        return !1
      }

      function Ve() {
        return !0
      }

      function Ge(e) {
        return () => {}
      }
      let We = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Ke = new Map;

      function Xe(e) {
        let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = Fe(n), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return We && Ke.set(o, i), Oe((() => {
          let e = o;
          return () => {
            Ke.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, t(e))
        })), o
      }

      function $e(e, n) {
        if (e === n) return e;
        let t = Ke.get(e);
        if (t) return t(n), n;
        let r = Ke.get(n);
        return r ? (r(e), e) : n
      }

      function Ye(e = []) {
        let n = Xe(),
          [t, r] = function(e) {
            let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = Ne((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : n === e.value ? o() : t(e.value)
            }));
            Oe((() => {
              r.current && o()
            }));
            let i = Ne((e => {
              r.current = e(n), o()
            }));
            return [n, i]
          }(n),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield n, yield document.getElementById(n) ? n : void 0
            }))
          }), [n, r]);
        return Oe(o, [n, o, ...e]), t
      }
      var Ze = t(5060);

      function Qe(...e) {
        let n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          let r = e[t];
          for (let e in r) {
            let t = n[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = De(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? n.id = $e(t, o) : n[e] = void 0 !== o ? o : t : n[e] = (0, Ze.A)(t, o)
          }
        }
        return n
      }

      function Je(e, n) {
        let {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (t = Xe(t), o && r) {
          let e = new Set([t, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !n || (r = n), {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function en(e) {
        let {
          description: n,
          errorMessage: t,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: n,
            label: t,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          n = Xe(n);
          let a = Xe(),
            s = {};
          return t ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? n : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: Je({
              id: n,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = Ye([Boolean(n), Boolean(t), r, o]), u = Ye([Boolean(n), Boolean(t), r, o]);
        return a = Qe(a, {
          "aria-describedby": [s, u, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: u
          }
        }
      }
      let nn = new Map,
        tn = new Set;

      function rn() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let n = t => {
          if (!e(t) || !t.target) return;
          let r = nn.get(t.target);
          if (r && (r.delete(t.propertyName), 0 === r.size && (t.target.removeEventListener("transitioncancel", n), nn.delete(t.target)), 0 === nn.size)) {
            for (let e of tn) e();
            tn.clear()
          }
        };
        document.body.addEventListener("transitionrun", (t => {
          if (!e(t) || !t.target) return;
          let r = nn.get(t.target);
          r || (r = new Set, nn.set(t.target, r), t.target.addEventListener("transitioncancel", n, {
            once: !0
          })), r.add(t.propertyName)
        })), document.body.addEventListener("transitionend", n)
      }

      function on(e) {
        if (function() {
            if (null == an) {
              an = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return an = !0, !0
                  }
                })
              } catch (e) {}
            }
            return an
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let n = function(e) {
            let n = e.parentNode,
              t = [],
              r = document.scrollingElement || document.documentElement;
            for (; n instanceof HTMLElement && n !== r;)(n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && t.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), n = n.parentNode;
            return r instanceof HTMLElement && t.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), t
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: n,
                  scrollTop: t,
                  scrollLeft: r
                }
                of e) n.scrollTop = t, n.scrollLeft = r
            }(n)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? rn() : document.addEventListener("DOMContentLoaded", rn));
      let an = null;

      function sn() {
        return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform);
        var e, n
      }

      function un(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (n = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((e => n.test(e.brand)))) || n.test(window.navigator.userAgent)) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
        var n, t
      }
      let ln = null,
        dn = new Set,
        cn = new Map,
        fn = !1,
        pn = !1;

      function hn(e, n) {
        for (let t of dn) t(e, n)
      }

      function yn(e) {
        fn = !0,
          function(e) {
            return !(e.metaKey || !sn() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (ln = "keyboard", hn("keyboard", e))
      }

      function An(e) {
        ln = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (fn = !0, hn("pointer", e))
      }

      function vn(e) {
        un(e) && (fn = !0, ln = "virtual")
      }

      function mn(e) {
        e.target !== window && e.target !== document && (fn || pn || (ln = "virtual", hn("virtual", e)), fn = !1, pn = !1)
      }

      function bn() {
        fn = !1, pn = !0
      }

      function gn(e) {
        if ("undefined" == typeof window || cn.get(Re(e))) return;
        const n = Re(e),
          t = Le(e);
        let r = n.HTMLElement.prototype.focus;
        n.HTMLElement.prototype.focus = function() {
          fn = !0, r.apply(this, arguments)
        }, t.addEventListener("keydown", yn, !0), t.addEventListener("keyup", yn, !0), t.addEventListener("click", vn, !0), n.addEventListener("focus", mn, !0), n.addEventListener("blur", bn, !1), "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", An, !0), t.addEventListener("pointermove", An, !0), t.addEventListener("pointerup", An, !0)) : (t.addEventListener("mousedown", An, !0), t.addEventListener("mousemove", An, !0), t.addEventListener("mouseup", An, !0)), n.addEventListener("beforeunload", (() => {
          Cn(e)
        }), {
          once: !0
        }), cn.set(n, {
          focus: r
        })
      }
      const Cn = (e, n) => {
        const t = Re(e),
          r = Le(e);
        n && r.removeEventListener("DOMContentLoaded", n), cn.has(t) && (t.HTMLElement.prototype.focus = cn.get(t).focus, r.removeEventListener("keydown", yn, !0), r.removeEventListener("keyup", yn, !0), r.removeEventListener("click", vn, !0), t.removeEventListener("focus", mn, !0), t.removeEventListener("blur", bn, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", An, !0), r.removeEventListener("pointermove", An, !0), r.removeEventListener("pointerup", An, !0)) : (r.removeEventListener("mousedown", An, !0), r.removeEventListener("mousemove", An, !0), r.removeEventListener("mouseup", An, !0)), cn.delete(t))
      };
      "undefined" != typeof document && function(e) {
        const n = Le(e);
        let t;
        "loading" !== n.readyState ? gn(e) : (t = () => {
          gn(e)
        }, n.addEventListener("DOMContentLoaded", t))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class _n {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, n) {
          this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = e
        }
      }

      function En(e) {
        let {
          isDisabled: n,
          onFocus: t,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, s.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }), [r, o]),
          a = function(e) {
            let n = (0, s.useRef)({
              isFocused: !1,
              observer: null
            });
            Oe((() => {
              const e = n.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let t = Ne((n => {
              null == e || e(n)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                n.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    n.current.isFocused = !1, r.disabled && t(new _n("blur", e)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), n.current.observer = new MutationObserver((() => {
                  if (n.current.isFocused && r.disabled) {
                    var e;
                    null === (e = n.current.observer) || void 0 === e || e.disconnect();
                    let t = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: t
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: t
                    }))
                  }
                })), n.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [t])
          }(i),
          u = (0, s.useCallback)((e => {
            const n = Le(e.target);
            e.target === e.currentTarget && n.activeElement === e.target && (t && t(e), o && o(!0), a(e))
          }), [o, t, a]);
        return {
          focusProps: {
            onFocus: !n && (t || o || r) ? u : void 0,
            onBlur: n || !r && !o ? void 0 : i
          }
        }
      }

      function wn(e) {
        if (!e) return;
        let n = !0;
        return t => {
          let r = {
            ...t,
            preventDefault() {
              t.preventDefault()
            },
            isDefaultPrevented: () => t.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              n = !1
            }
          };
          e(r), n && t.stopPropagation()
        }
      }
      let kn = s.createContext(null);

      function Bn(e) {
        let n = (0, s.useContext)(kn) || {};
        ! function(e, n) {
          Oe((() => {
            if (e && e.ref && n) return e.ref.current = n.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(n, e);
        let {
          ref: t,
          ...r
        } = n;
        return r
      }

      function xn(e, n) {
        let {
          focusProps: t
        } = En(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: wn(e.onKeyDown),
              onKeyUp: wn(e.onKeyUp)
            }
          }
        }(e), o = Qe(t, r), i = Bn(n), a = e.isDisabled ? {} : i, u = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          u.current && n.current && function(e) {
            const n = Le(e);
            if ("virtual" === ln) {
              let r = n.activeElement;
              t = () => {
                n.activeElement === r && e.isConnected && on(e)
              }, requestAnimationFrame((() => {
                0 === nn.size ? t() : tn.add(t)
              }))
            } else on(e);
            var t
          }(n.current), u.current = !1
        }), [n]), {
          focusableProps: Qe({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }

      function Pn(e) {
        let n = e.validity;
        return {
          badInput: n.badInput,
          customError: n.customError,
          patternMismatch: n.patternMismatch,
          rangeOverflow: n.rangeOverflow,
          rangeUnderflow: n.rangeUnderflow,
          stepMismatch: n.stepMismatch,
          tooLong: n.tooLong,
          tooShort: n.tooShort,
          typeMismatch: n.typeMismatch,
          valueMissing: n.valueMissing,
          valid: n.valid
        }
      }
      const Tn = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        Sn = {
          ...Tn,
          customError: !0,
          valid: !1
        },
        jn = {
          isInvalid: !1,
          validationDetails: Tn,
          validationErrors: []
        },
        On = (0, s.createContext)({}),
        Nn = "__formValidationState" + Date.now();

      function Ln(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Rn(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Sn
        } : null
      }

      function Dn(e, n) {
        return e === n || e && n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every(((e, t) => e === n.validationErrors[t])) && Object.entries(e.validationDetails).every((([e, t]) => n.validationDetails[e] === t))
      }

      function Mn(e, n) {
        let {
          inputElementType: t = "input",
          isDisabled: r = !1,
          isRequired: o = !1,
          isReadOnly: i = !1,
          type: a = "text",
          validationBehavior: u = "aria"
        } = e, [l, d] = function(e, n, t) {
          let [r, o] = (0, s.useState)(e || n), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
          (0, s.useEffect)((() => {
            let e = i.current;
            e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), i.current = a
          }), [a]);
          let u = a ? e : r,
            l = (0, s.useCallback)(((e, ...n) => {
              let r = (e, ...n) => {
                t && (Object.is(u, e) || t(e, ...n)), a || (u = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((t, ...o) => {
                let i = e(a ? u : t, ...o);
                return r(i, ...n), a ? t : i
              }))) : (a || o(e), r(e, ...n))
            }), [a, u, t]);
          return [u, l]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: c
        } = xn(e, n), f = function(e) {
          if (e[Nn]) {
            let {
              realtimeValidation: n,
              displayValidation: t,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            } = e[Nn];
            return {
              realtimeValidation: n,
              displayValidation: t,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            }
          }
          return function(e) {
            let {
              isInvalid: n,
              validationState: t,
              name: r,
              value: o,
              builtinValidation: i,
              validate: a,
              validationBehavior: u = "aria"
            } = e;
            t && (n || (n = "invalid" === t));
            let l = void 0 !== n ? {
                isInvalid: n,
                validationErrors: [],
                validationDetails: Sn
              } : null,
              d = (0, s.useMemo)((() => Rn(function(e, n) {
                if ("function" == typeof e) {
                  let t = e(n);
                  if (t && "boolean" != typeof t) return Ln(t)
                }
                return []
              }(a, o))), [a, o]);
            (null == i ? void 0 : i.validationDetails.valid) && (i = null);
            let c = (0, s.useContext)(On),
              f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => Ln(c[e]))) : Ln(c[r]) : []), [c, r]),
              [p, h] = (0, s.useState)(c),
              [y, A] = (0, s.useState)(!1);
            c !== p && (h(c), A(!1));
            let v = (0, s.useMemo)((() => Rn(y ? [] : f)), [y, f]),
              m = (0, s.useRef)(jn),
              [b, g] = (0, s.useState)(jn),
              C = (0, s.useRef)(jn),
              [_, E] = (0, s.useState)(!1);
            return (0, s.useEffect)((() => {
              if (!_) return;
              E(!1);
              let e = d || i || m.current;
              Dn(e, C.current) || (C.current = e, g(e))
            })), {
              realtimeValidation: l || v || d || i || jn,
              displayValidation: "native" === u ? l || v || b : l || v || d || i || b,
              updateValidation(e) {
                "aria" !== u || Dn(b, e) ? m.current = e : g(e)
              },
              resetValidation() {
                let e = jn;
                Dn(e, C.current) || (C.current = e, g(e)), "native" === u && E(!1), A(!0)
              },
              commitValidation() {
                "native" === u && E(!0), A(!0)
              }
            }
          }(e)
        }({
          ...e,
          value: l
        }), {
          isInvalid: p,
          validationErrors: h,
          validationDetails: y
        } = f.displayValidation, {
          labelProps: A,
          fieldProps: v,
          descriptionProps: m,
          errorMessageProps: b
        } = en({
          ...e,
          isInvalid: p,
          errorMessage: e.errorMessage || h
        }), g = function(e, n = {}) {
          let {
            labelable: t,
            isLink: r,
            propNames: o
          } = n, i = {};
          for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (Pe.has(n) || t && Te.has(n) || r && Se.has(n) || (null == o ? void 0 : o.has(n)) || je.test(n)) && (i[n] = e[n]);
          return i
        }(e, {
          labelable: !0
        });
        const C = {
          type: a,
          pattern: e.pattern
        };
        return function(e, n, t) {
            let r = (0, s.useRef)(n),
              o = Ne((() => {
                t && t(r.current)
              }));
            (0, s.useEffect)((() => {
              var n;
              let t = null == e || null === (n = e.current) || void 0 === n ? void 0 : n.form;
              return null == t || t.addEventListener("reset", o), () => {
                null == t || t.removeEventListener("reset", o)
              }
            }), [e, o])
          }(n, l, d),
          function(e, n, t) {
            let {
              validationBehavior: r,
              focus: o
            } = e;
            Oe((() => {
              if ("native" === r && (null == t ? void 0 : t.current)) {
                let r = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                t.current.setCustomValidity(r), t.current.hasAttribute("title") || (t.current.title = ""), n.realtimeValidation.isInvalid || n.updateValidation({
                  isInvalid: !(e = t.current).validity.valid,
                  validationDetails: Pn(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let i = Ne((() => {
                n.resetValidation()
              })),
              a = Ne((e => {
                var r;
                n.displayValidation.isInvalid || n.commitValidation();
                let i = null == t || null === (r = t.current) || void 0 === r ? void 0 : r.form;
                var a;
                !e.defaultPrevented && t && i && function(e) {
                  for (let n = 0; n < e.elements.length; n++) {
                    let t = e.elements[n];
                    if (!t.validity.valid) return t
                  }
                  return null
                }(i) === t.current && (o ? o() : null === (a = t.current) || void 0 === a || a.focus(), ln = "keyboard", hn("keyboard", null)), e.preventDefault()
              })),
              u = Ne((() => {
                n.commitValidation()
              }));
            (0, s.useEffect)((() => {
              let e = null == t ? void 0 : t.current;
              if (!e) return;
              let n = e.form;
              return e.addEventListener("invalid", a), e.addEventListener("change", u), null == n || n.addEventListener("reset", i), () => {
                e.removeEventListener("invalid", a), e.removeEventListener("change", u), null == n || n.removeEventListener("reset", i)
              }
            }), [t, a, u, i, r])
          }(e, f, n), (0, s.useEffect)((() => {
            if (n.current instanceof Re(n.current).HTMLTextAreaElement) {
              let e = n.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [n]), {
            labelProps: A,
            inputProps: Qe(g, "input" === t && C, {
              disabled: r,
              readOnly: i,
              required: o && "native" === u,
              "aria-required": o && "aria" === u || void 0,
              "aria-invalid": p || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-activedescendant": e["aria-activedescendant"],
              "aria-autocomplete": e["aria-autocomplete"],
              "aria-haspopup": e["aria-haspopup"],
              value: l,
              onChange: e => d(e.target.value),
              autoComplete: e.autoComplete,
              autoCapitalize: e.autoCapitalize,
              maxLength: e.maxLength,
              minLength: e.minLength,
              name: e.name,
              placeholder: e.placeholder,
              inputMode: e.inputMode,
              onCopy: e.onCopy,
              onCut: e.onCut,
              onPaste: e.onPaste,
              onCompositionEnd: e.onCompositionEnd,
              onCompositionStart: e.onCompositionStart,
              onCompositionUpdate: e.onCompositionUpdate,
              onSelect: e.onSelect,
              onBeforeInput: e.onBeforeInput,
              onInput: e.onInput,
              ...c,
              ...v
            }),
            descriptionProps: m,
            errorMessageProps: b,
            isInvalid: p,
            validationErrors: h,
            validationDetails: y
          }
      }
      var In = t(76430),
        Hn = t(88691),
        zn = {};

      function qn(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function Fn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Un(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Fn(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = qn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fn(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Vn(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      zn.styleTagTransform = _(), zn.setAttributes = m(), zn.insert = A().bind(null, "head"), zn.domAPI = h(), zn.insertStyleElement = g(), f()(Hn.A, zn), Hn.A && Hn.A.locals && Hn.A.locals;
      var Gn = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Wn = "foundry_vq8c3j8",
        Kn = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = Un(Un({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Gn(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vn(e.variantClassNames, (e => Vn(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isInvalid: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Xn = (0, s.forwardRef)((({
        asChild: e,
        label: n,
        isRequired: t,
        hint: r,
        children: o,
        description: u,
        testId: l,
        className: c,
        rows: f = 5,
        hideLabel: p,
        hideDescription: h,
        hideRequiredAsterisk: y,
        validate: A,
        errorMessage: v,
        ...m
      }, b) => {
        const g = (0, s.useRef)(null),
          C = (0, In.UP)(g, b),
          {
            inputProps: _,
            labelProps: E,
            descriptionProps: w,
            isInvalid: k,
            errorMessageProps: B,
            validationErrors: x
          } = Mn({
            ...m,
            label: n,
            description: u,
            isRequired: t,
            inputElementType: "textarea",
            validate: e => A?.(e) ?? (!v || [v])
          }, g),
          P = (0, a.v6)({
            ..._,
            className: c
          }, {
            className: Kn({
              isInvalid: k
            }),
            "aria-errormessage": B?.id
          }),
          T = e ? d.DX : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(n || r) && (0, i.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, i.jsx)(d.s6, {
              enabled: !!p,
              children: (0, i.jsx)(Z, {
                ...E,
                className: (0, Ze.$)("foundry_vq8c3j2", _.disabled && Wn),
                asChild: !0,
                children: (0, i.jsxs)("label", {
                  children: [n, t && !y && (0, i.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, i.jsx)(ae, {
              className: "foundry_vq8c3j3",
              children: r
            })]
          }), (0, i.jsx)(T, {
            rows: f,
            ref: C,
            "data-testid": l,
            ...P,
            children: o
          }), u && (0, i.jsx)(d.s6, {
            enabled: x.length > 0 || !!h,
            children: (0, i.jsx)(Z, {
              ...w,
              className: (0, Ze.$)("foundry_vq8c3j4", _.disabled && Wn),
              children: u
            })
          }), x.length > 0 && (0, i.jsxs)(Z, {
            ...B,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, i.jsx)(Be.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), x.join(". ")]
          })]
        })
      }));

      function $n(...e) {
        return (...n) => {
          for (let t of e) "function" == typeof t && t(...n)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Yn = new Map;

      function Zn(e, n) {
        if (e === n) return e;
        let t = Yn.get(e);
        if (t) return t(n), n;
        let r = Yn.get(n);
        return r ? (r(e), e) : n
      }

      function Qn(...e) {
        let n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          let r = e[t];
          for (let e in r) {
            let t = n[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = $n(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? n.id = Zn(t, o) : n[e] = void 0 !== o ? o : t : n[e] = (0, Ze.A)(t, o)
          }
        }
        return n
      }
      const Jn = new Set(["id"]),
        et = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        nt = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        tt = /^(data-.*)$/;
      const rt = e => {
          var n;
          return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document
        },
        ot = e => e && "window" in e && e.window === e ? e : rt(e).defaultView || window;
      let it = new Map,
        at = new Set;

      function st() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let n = t => {
          if (!e(t) || !t.target) return;
          let r = it.get(t.target);
          if (r && (r.delete(t.propertyName), 0 === r.size && (t.target.removeEventListener("transitioncancel", n), it.delete(t.target)), 0 === it.size)) {
            for (let e of at) e();
            at.clear()
          }
        };
        document.body.addEventListener("transitionrun", (t => {
          if (!e(t) || !t.target) return;
          let r = it.get(t.target);
          r || (r = new Set, it.set(t.target, r), t.target.addEventListener("transitioncancel", n, {
            once: !0
          })), r.add(t.propertyName)
        })), document.body.addEventListener("transitionend", n)
      }

      function ut(e) {
        requestAnimationFrame((() => {
          0 === it.size ? e() : at.add(e)
        }))
      }

      function lt(e) {
        if (function() {
            if (null == dt) {
              dt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return dt = !0, !0
                  }
                })
              } catch (e) {}
            }
            return dt
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let n = function(e) {
            let n = e.parentNode,
              t = [],
              r = document.scrollingElement || document.documentElement;
            for (; n instanceof HTMLElement && n !== r;)(n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && t.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), n = n.parentNode;
            return r instanceof HTMLElement && t.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), t
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: n,
                  scrollTop: t,
                  scrollLeft: r
                }
                of e) n.scrollTop = t, n.scrollLeft = r
            }(n)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? st() : document.addEventListener("DOMContentLoaded", st));
      let dt = null;

      function ct(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((n => e.test(n.brand)))) || e.test(window.navigator.userAgent))
      }

      function ft(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform)
      }

      function pt() {
        return ft(/^Mac/i)
      }

      function ht() {
        return ft(/^iPad/i) || pt() && navigator.maxTouchPoints > 1
      }

      function yt() {
        return ft(/^iPhone/i) || ht()
      }

      function At() {
        return ct(/Android/i)
      }

      function vt(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (At() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let mt = null,
        bt = new Set,
        gt = new Map,
        Ct = !1,
        _t = !1;

      function Et(e, n) {
        for (let t of bt) t(e, n)
      }

      function wt(e) {
        Ct = !0,
          function(e) {
            return !(e.metaKey || !pt() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (mt = "keyboard", Et("keyboard", e))
      }

      function kt(e) {
        mt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Ct = !0, Et("pointer", e))
      }

      function Bt(e) {
        vt(e) && (Ct = !0, mt = "virtual")
      }

      function xt(e) {
        e.target !== window && e.target !== document && (Ct || _t || (mt = "virtual", Et("virtual", e)), Ct = !1, _t = !1)
      }

      function Pt() {
        Ct = !1, _t = !0
      }

      function Tt(e) {
        if ("undefined" == typeof window || gt.get(ot(e))) return;
        const n = ot(e),
          t = rt(e);
        let r = n.HTMLElement.prototype.focus;
        n.HTMLElement.prototype.focus = function() {
          Ct = !0, r.apply(this, arguments)
        }, t.addEventListener("keydown", wt, !0), t.addEventListener("keyup", wt, !0), t.addEventListener("click", Bt, !0), n.addEventListener("focus", xt, !0), n.addEventListener("blur", Pt, !1), "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", kt, !0), t.addEventListener("pointermove", kt, !0), t.addEventListener("pointerup", kt, !0)) : (t.addEventListener("mousedown", kt, !0), t.addEventListener("mousemove", kt, !0), t.addEventListener("mouseup", kt, !0)), n.addEventListener("beforeunload", (() => {
          St(e)
        }), {
          once: !0
        }), gt.set(n, {
          focus: r
        })
      }
      const St = (e, n) => {
        const t = ot(e),
          r = rt(e);
        n && r.removeEventListener("DOMContentLoaded", n), gt.has(t) && (t.HTMLElement.prototype.focus = gt.get(t).focus, r.removeEventListener("keydown", wt, !0), r.removeEventListener("keyup", wt, !0), r.removeEventListener("click", Bt, !0), t.removeEventListener("focus", xt, !0), t.removeEventListener("blur", Pt, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", kt, !0), r.removeEventListener("pointermove", kt, !0), r.removeEventListener("pointerup", kt, !0)) : (r.removeEventListener("mousedown", kt, !0), r.removeEventListener("mousemove", kt, !0), r.removeEventListener("mouseup", kt, !0)), gt.delete(t))
      };
      "undefined" != typeof document && function(e) {
        const n = rt(e);
        let t;
        "loading" !== n.readyState ? Tt(e) : (t = () => {
          Tt(e)
        }, n.addEventListener("DOMContentLoaded", t))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const jt = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Ot(e, n) {
        jt((() => {
          if (e && e.ref && n) return e.ref.current = n.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function Nt(e) {
        const n = (0, s.useRef)(null);
        return jt((() => {
          n.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const t = n.current;
          return null == t ? void 0 : t(...e)
        }), [])
      }
      class Lt {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, n) {
          this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = e
        }
      }

      function Rt(e) {
        let {
          isDisabled: n,
          onFocus: t,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, s.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }), [r, o]),
          a = function(e) {
            let n = (0, s.useRef)({
              isFocused: !1,
              observer: null
            });
            jt((() => {
              const e = n.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let t = Nt((n => {
              null == e || e(n)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                n.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    n.current.isFocused = !1, r.disabled && t(new Lt("blur", e)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), n.current.observer = new MutationObserver((() => {
                  if (n.current.isFocused && r.disabled) {
                    var e;
                    null === (e = n.current.observer) || void 0 === e || e.disconnect();
                    let t = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: t
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: t
                    }))
                  }
                })), n.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [t])
          }(i),
          u = (0, s.useCallback)((e => {
            const n = rt(e.target);
            e.target === e.currentTarget && n.activeElement === e.target && (t && t(e), o && o(!0), a(e))
          }), [o, t, a]);
        return {
          focusProps: {
            onFocus: !n && (t || o || r) ? u : void 0,
            onBlur: n || !r && !o ? void 0 : i
          }
        }
      }

      function Dt(e) {
        if (!e) return;
        let n = !0;
        return t => {
          let r = {
            ...t,
            preventDefault() {
              t.preventDefault()
            },
            isDefaultPrevented: () => t.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              n = !1
            }
          };
          e(r), n && t.stopPropagation()
        }
      }
      let Mt = s.createContext(null);

      function It(e, n) {
        let {
          focusProps: t
        } = Rt(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Dt(e.onKeyDown),
              onKeyUp: Dt(e.onKeyUp)
            }
          }
        }(e), o = Qn(t, r), i = function(e) {
          let n = (0, s.useContext)(Mt) || {};
          Ot(n, e);
          let {
            ref: t,
            ...r
          } = n;
          return r
        }(n), a = e.isDisabled ? {} : i, u = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          u.current && n.current && function(e) {
            const n = rt(e);
            if ("virtual" === mt) {
              let t = n.activeElement;
              ut((() => {
                n.activeElement === t && e.isConnected && lt(e)
              }))
            } else lt(e)
          }(n.current), u.current = !1
        }), [n]), {
          focusableProps: Qn({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let Ht = "default",
        zt = "",
        qt = new WeakMap;

      function Ft(e) {
        if (yt()) {
          if ("default" === Ht) {
            const n = rt(e);
            zt = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none"
          }
          Ht = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (qt.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function Ut(e) {
        if (yt()) {
          if ("disabled" !== Ht) return;
          Ht = "restoring", setTimeout((() => {
            ut((() => {
              if ("restoring" === Ht) {
                const n = rt(e);
                "none" === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = zt || ""), zt = "", Ht = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && qt.has(e)) {
          let n = qt.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = n), "" === e.getAttribute("style") && e.removeAttribute("style"), qt.delete(e)
        }
      }
      const Vt = s.createContext({
        register: () => {}
      });

      function Gt(e, n, t) {
        if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
        return n.get(e)
      }

      function Wt(e, n) {
        return function(e, n) {
          return n.get ? n.get.call(e) : n.value
        }(e, Gt(e, n, "get"))
      }

      function Kt(e, n, t) {
        ! function(e, n) {
          if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, n), n.set(e, t)
      }

      function Xt(e, n, t) {
        return function(e, n, t) {
          if (n.set) n.set.call(e, t);
          else {
            if (!n.writable) throw new TypeError("attempted to set read only private field");
            n.value = t
          }
        }(e, Gt(e, n, "set"), t), t
      }

      function $t(e, n, t = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        } = n;
        ct(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (pt() ? i = !0 : a = !0);
        let l = ct(/AppleWebKit/i) && !ct(/Chrome/i) && pt() && !ht() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u,
          bubbles: !0,
          cancelable: !0
        });
        $t.isOpening = t, lt(e), e.dispatchEvent(l), $t.isOpening = !1
      }
      Vt.displayName = "PressResponderContext", $t.isOpening = !1;
      var Yt = new WeakMap;
      class Zt {
        continuePropagation() {
          Xt(this, Yt, !1)
        }
        get shouldStopPropagation() {
          return Wt(this, Yt)
        }
        constructor(e, n, t) {
          Kt(this, Yt, {
            writable: !0,
            value: void 0
          }), Xt(this, Yt, !0), this.type = e, this.pointerType = n, this.target = t.currentTarget, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.ctrlKey = t.ctrlKey, this.altKey = t.altKey
        }
      }
      const Qt = Symbol("linkClicked");

      function Jt(e) {
        let {
          onPress: n,
          onPressChange: t,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          isDisabled: a,
          isPressed: u,
          preventFocusOnPress: l,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: c,
          ref: f,
          ...p
        } = function(e) {
          let n = (0, s.useContext)(Vt);
          if (n) {
            let {
              register: t,
              ...r
            } = n;
            e = Qn(r, e), t()
          }
          return Ot(n, e.ref), e
        }(e), [h, y] = (0, s.useState)(!1), A = (0, s.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: v,
          removeAllGlobalListeners: m
        } = function() {
          let e = (0, s.useRef)(new Map),
            n = (0, s.useCallback)(((n, t, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...n) => {
                e.current.delete(r), r(...n)
              } : r;
              e.current.set(r, {
                type: t,
                eventTarget: n,
                fn: i,
                options: o
              }), n.addEventListener(t, r, o)
            }), []),
            t = (0, s.useCallback)(((n, t, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              n.removeEventListener(t, a, o), e.current.delete(r)
            }), []),
            r = (0, s.useCallback)((() => {
              e.current.forEach(((e, n) => {
                t(e.eventTarget, e.type, n, e.options)
              }))
            }), [t]);
          return (0, s.useEffect)((() => r), [r]), {
            addGlobalListener: n,
            removeGlobalListener: t,
            removeAllGlobalListeners: r
          }
        }(), b = Nt(((e, n) => {
          let o = A.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let t = new Zt("pressstart", n, e);
            r(t), i = t.shouldStopPropagation
          }
          return t && t(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        })), g = Nt(((e, r, i = !0) => {
          let s = A.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let u = !0;
          if (o) {
            let n = new Zt("pressend", r, e);
            o(n), u = n.shouldStopPropagation
          }
          if (t && t(!1), y(!1), n && i && !a) {
            let t = new Zt("press", r, e);
            n(t), u && (u = t.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, u
        })), C = Nt(((e, n) => {
          let t = A.current;
          if (a) return !1;
          if (i) {
            t.isTriggeringEvent = !0;
            let r = new Zt("pressup", n, e);
            return i(r), t.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = Nt((e => {
          let n = A.current;
          n.isPressed && n.target && (n.isOverTarget && null != n.pointerType && g(rr(n.target, e), n.pointerType, !1), n.isPressed = !1, n.isOverTarget = !1, n.activePointerId = null, n.pointerType = null, m(), c || Ut(n.target))
        })), E = Nt((e => {
          d && _(e)
        })), w = (0, s.useMemo)((() => {
          let e = A.current,
            n = {
              onKeyDown(n) {
                if (nr(n.nativeEvent, n.currentTarget) && n.currentTarget.contains(n.target)) {
                  var r;
                  ar(n.target, n.key) && n.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !n.repeat) {
                    e.target = n.currentTarget, e.isPressed = !0, o = b(n, "keyboard");
                    let r = n.currentTarget,
                      i = n => {
                        nr(n, r) && !n.repeat && r.contains(n.target) && e.target && C(rr(e.target, n), "keyboard")
                      };
                    v(rt(n.currentTarget), "keyup", $n(i, t), !0)
                  }
                  o && n.stopPropagation(), n.metaKey && pt() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(n.key, n.nativeEvent))
                } else "Meta" === n.key && (e.metaKeyEvents = new Map)
              },
              onClick(n) {
                if ((!n || n.currentTarget.contains(n.target)) && n && 0 === n.button && !e.isTriggeringEvent && !$t.isOpening) {
                  let t = !0;
                  if (a && n.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || vt(n.nativeEvent))) {
                    a || l || lt(n.currentTarget);
                    let e = b(n, "virtual"),
                      r = C(n, "virtual"),
                      o = g(n, "virtual");
                    t = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, t && n.stopPropagation()
                }
              }
            },
            t = n => {
              var t;
              if (e.isPressed && e.target && nr(n, e.target)) {
                var r;
                ar(n.target, n.key) && n.preventDefault();
                let t = n.target;
                g(rr(e.target, n), "keyboard", e.target.contains(t)), m(), "Enter" !== n.key && er(e.target) && e.target.contains(t) && !n[Qt] && (n[Qt] = !0, $t(e.target, n, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(n.key)
              } else if ("Meta" === n.key && (null === (t = e.metaKeyEvents) || void 0 === t ? void 0 : t.size)) {
                var o;
                let n = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let t of n.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", t))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            n.onPointerDown = n => {
              if (0 !== n.button || !n.currentTarget.contains(n.target)) return;
              if (i = n.nativeEvent, !At() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              ir(n.currentTarget) && n.preventDefault(), e.pointerType = n.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, a || l || lt(n.currentTarget), c || Ft(e.target), s = b(n, e.pointerType), v(rt(n.currentTarget), "pointermove", t, !1), v(rt(n.currentTarget), "pointerup", r, !1), v(rt(n.currentTarget), "pointercancel", o, !1)), s && n.stopPropagation()
            }, n.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (ir(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, n.onPointerUp = n => {
              n.currentTarget.contains(n.target) && "virtual" !== e.pointerType && 0 === n.button && or(n, n.currentTarget) && C(n, e.pointerType || n.pointerType)
            };
            let t = n => {
                n.pointerId === e.activePointerId && (e.target && or(n, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(rr(e.target, n), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, g(rr(e.target, n), e.pointerType, !1), E(n)))
              },
              r = n => {
                n.pointerId === e.activePointerId && e.isPressed && 0 === n.button && e.target && (or(n, e.target) && null != e.pointerType ? g(rr(e.target, n), e.pointerType) : e.isOverTarget && null != e.pointerType && g(rr(e.target, n), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, m(), c || Ut(e.target))
              },
              o = e => {
                _(e)
              };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            n.onMouseDown = n => {
              0 === n.button && n.currentTarget.contains(n.target) && (ir(n.currentTarget) && n.preventDefault(), e.ignoreEmulatedMouseEvents ? n.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = n.currentTarget, e.pointerType = vt(n.nativeEvent) ? "virtual" : "mouse", a || l || lt(n.currentTarget), b(n, e.pointerType) && n.stopPropagation(), v(rt(n.currentTarget), "mouseup", t, !1)))
            }, n.onMouseEnter = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, t = b(n, e.pointerType)), t && n.stopPropagation()
            }, n.onMouseLeave = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, t = g(n, e.pointerType, !1), E(n)), t && n.stopPropagation()
            }, n.onMouseUp = n => {
              n.currentTarget.contains(n.target) && (e.ignoreEmulatedMouseEvents || 0 !== n.button || C(n, e.pointerType || "mouse"))
            };
            let t = n => {
              0 === n.button && (e.isPressed = !1, m(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && or(n, e.target) && null != e.pointerType ? g(rr(e.target, n), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && g(rr(e.target, n), e.pointerType, !1), e.isOverTarget = !1))
            };
            n.onTouchStart = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = function(e) {
                const {
                  targetTouches: n
                } = e;
                return n.length > 0 ? n[0] : null
              }(n.nativeEvent);
              t && (e.activePointerId = t.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = n.currentTarget, e.pointerType = "touch", a || l || lt(n.currentTarget), c || Ft(e.target), b(n, e.pointerType) && n.stopPropagation(), v(ot(n.currentTarget), "scroll", r, !0))
            }, n.onTouchMove = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = tr(n.nativeEvent, e.activePointerId),
                r = !0;
              t && or(t, n.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(n, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = g(n, e.pointerType, !1), E(n)), r && n.stopPropagation()
            }, n.onTouchEnd = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = tr(n.nativeEvent, e.activePointerId),
                r = !0;
              t && or(t, n.currentTarget) && null != e.pointerType ? (C(n, e.pointerType), r = g(n, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = g(n, e.pointerType, !1)), r && n.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !c && Ut(e.target), m()
            }, n.onTouchCancel = n => {
              n.currentTarget.contains(n.target) && (n.stopPropagation(), e.isPressed && _(n))
            };
            let r = n => {
              e.isPressed && n.target.contains(e.target) && _({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          }
          return n
        }), [v, a, l, m, c, _, E, g, b, C]);
        return (0, s.useEffect)((() => () => {
          var e;
          c || Ut(null !== (e = A.current.target) && void 0 !== e ? e : void 0)
        }), [c]), {
          isPressed: u || h,
          pressProps: Qn(p, w)
        }
      }

      function er(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function nr(e, n) {
        const {
          key: t,
          code: r
        } = e, o = n, i = o.getAttribute("role");
        return !("Enter" !== t && " " !== t && "Spacebar" !== t && "Space" !== r || o instanceof ot(o).HTMLInputElement && !ur(o, t) || o instanceof ot(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && er(o)) && "Enter" !== t)
      }

      function tr(e, n) {
        const t = e.changedTouches;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (r.identifier === n) return r
        }
        return null
      }

      function rr(e, n) {
        return {
          currentTarget: e,
          shiftKey: n.shiftKey,
          ctrlKey: n.ctrlKey,
          metaKey: n.metaKey,
          altKey: n.altKey
        }
      }

      function or(e, n) {
        let t = n.getBoundingClientRect(),
          r = function(e) {
            let n = 0,
              t = 0;
            return void 0 !== e.width ? n = e.width / 2 : void 0 !== e.radiusX && (n = e.radiusX), void 0 !== e.height ? t = e.height / 2 : void 0 !== e.radiusY && (t = e.radiusY), {
              top: e.clientY - t,
              right: e.clientX + n,
              bottom: e.clientY + t,
              left: e.clientX - n
            }
          }(e);
        return i = r, !((o = t).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
        var o, i
      }

      function ir(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function ar(e, n) {
        return e instanceof HTMLInputElement ? !ur(e, n) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !er(e)
      }
      const sr = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ur(e, n) {
        return "checkbox" === e.type || "radio" === e.type ? " " === n : sr.has(e.type)
      }

      function lr(e, n) {
        let t, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: u,
          onPressChange: l,
          preventFocusOnPress: d,
          allowFocusWhenDisabled: c,
          onClick: f,
          href: p,
          target: h,
          rel: y,
          type: A = "button"
        } = e;
        t = "button" === r ? {
          type: A,
          disabled: o
        } : {
          role: "button",
          tabIndex: o ? void 0 : 0,
          href: "a" === r && o ? void 0 : p,
          target: "a" === r ? h : void 0,
          type: "input" === r ? A : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? y : void 0
        };
        let {
          pressProps: v,
          isPressed: m
        } = Jt({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: l,
          onPress: i,
          onPressUp: u,
          isDisabled: o,
          preventFocusOnPress: d,
          ref: n
        }), {
          focusableProps: b
        } = It(e, n);
        c && (b.tabIndex = o ? -1 : b.tabIndex);
        let g = Qn(b, v, function(e, n = {}) {
          let {
            labelable: t,
            isLink: r,
            propNames: o
          } = n, i = {};
          for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (Jn.has(n) || t && et.has(n) || r && nt.has(n) || (null == o ? void 0 : o.has(n)) || tt.test(n)) && (i[n] = e[n]);
          return i
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: m,
          buttonProps: Qn(t, g, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: e => {
              f && (f(e), console.warn("onClick is deprecated, please use onPress"))
            }
          })
        }
      }
      var dr = t(86706),
        cr = {};

      function fr(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function pr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function hr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? pr(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = fr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pr(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function yr(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      cr.styleTagTransform = _(), cr.setAttributes = m(), cr.insert = A().bind(null, "head"), cr.domAPI = h(), cr.insertStyleElement = g(), f()(dr.A, cr), dr.A && dr.A.locals && dr.A.locals;
      var Ar = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        vr = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = hr(hr({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Ar(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yr(e.variantClassNames, (e => yr(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        mr = vr({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy1",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5",
              monochrome: "foundry_1qqcnua0 foundry_1qqcnua7"
            },
            size: {
              MD: "foundry_17pcofya",
              LG: "foundry_17pcofyb"
            },
            fullWidth: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
            },
            allCaps: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              allCaps: !1
            }, "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm"],
            [{
              size: "MD",
              allCaps: !0
            }, "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"],
            [{
              size: "LG",
              allCaps: !1
            }, "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg"],
            [{
              size: "LG",
              allCaps: !0
            }, "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdi"]
          ]
        }),
        br = vr({
          defaultClassName: "foundry_17pcofyl",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofym",
              false: "foundry_17pcofyn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gr = (0, s.forwardRef)((({
        testId: e,
        asChild: n,
        className: t,
        children: r,
        onClick: o,
        iconLeft: u,
        iconLeftLabel: l,
        iconRight: c,
        iconRightLabel: f,
        appearance: p,
        size: h = "MD",
        allCaps: y = !1,
        fullWidth: A = !1,
        ...v
      }, m) => {
        const b = (0, s.useRef)(null),
          g = (0, In.UP)(b, m),
          {
            events: C,
            others: _
          } = (0, a.bZ)(v, {
            onPress: !1
          }),
          {
            buttonProps: E,
            isPressed: w
          } = lr({
            ..._,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => _.onPress?.(e) ?? o?.(e)
          }, b),
          k = (0, a.v6)({
            ...E,
            className: t
          }, {
            ...C,
            role: "button",
            "data-pressed": w,
            "data-testid": e,
            className: mr({
              appearance: p,
              size: h,
              fullWidth: A,
              allCaps: y
            })
          }),
          B = u && xe[u],
          x = c && xe[c],
          P = n ? d.DX : "button",
          T = A && (x || x && B);
        return (0, i.jsxs)(P, {
          ref: g,
          ...k,
          children: [T && (0, i.jsx)("div", {
            className: "foundry_17pcofyo"
          }), B && (0, i.jsx)(B, {
            label: l || "",
            size: h,
            className: "foundry_17pcofyk"
          }), (0, i.jsx)(d.xV, {
            children: r
          }), x && (0, i.jsx)(x, {
            label: f || "",
            size: h,
            className: br({
              fullWidth: A
            })
          })]
        })
      }));
      var Cr = t(23476);
      const _r = {
        toVector: (e, n) => (void 0 === e && (e = n), Array.isArray(e) ? e : [e, e]),
        add: (e, n) => [e[0] + n[0], e[1] + n[1]],
        sub: (e, n) => [e[0] - n[0], e[1] - n[1]],
        addTo(e, n) {
          e[0] += n[0], e[1] += n[1]
        },
        subTo(e, n) {
          e[0] -= n[0], e[1] -= n[1]
        }
      };

      function Er(e, n, t) {
        return 0 === n || Math.abs(n) === 1 / 0 ? Math.pow(e, 5 * t) : e * n * t / (n + t * e)
      }

      function wr(e, n, t) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, n, t) {
          return Math.max(n, Math.min(e, t))
        }(e, n, t) : e < n ? -Er(n - e, t - n, r) + n : e > t ? +Er(e - t, t - n, r) + t : e
      }

      function kr(e, n, t) {
        return (n = function(e) {
          var n = function(e, n) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof n ? n : String(n)
        }(n)) in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e
      }

      function Br(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function xr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Br(Object(t), !0).forEach((function(n) {
            kr(e, n, t[n])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Br(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }
      const Pr = {
        pointer: {
          start: "down",
          change: "move",
          end: "up"
        },
        mouse: {
          start: "down",
          change: "move",
          end: "up"
        },
        touch: {
          start: "start",
          change: "move",
          end: "end"
        },
        gesture: {
          start: "start",
          change: "change",
          end: "end"
        }
      };

      function Tr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Sr = ["enter", "leave"];
      const jr = ["gotpointercapture", "lostpointercapture"];

      function Or(e) {
        let n = e.substring(2).toLowerCase();
        const t = !!~n.indexOf("passive");
        t && (n = n.replace("passive", ""));
        const r = jr.includes(n) ? "capturecapture" : "capture",
          o = !!~n.indexOf(r);
        return o && (n = n.replace("capture", "")), {
          device: n,
          capture: o,
          passive: t
        }
      }

      function Nr(e) {
        return "touches" in e
      }

      function Lr(e) {
        return Nr(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Rr(e) {
        return Nr(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Dr(e, n) {
        try {
          const t = n.clientX - e.clientX,
            r = n.clientY - e.clientY,
            o = (n.clientX + e.clientX) / 2,
            i = (n.clientY + e.clientY) / 2,
            a = Math.hypot(t, r);
          return {
            angle: -180 * Math.atan2(t, r) / Math.PI,
            distance: a,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function Mr(e, n) {
        const [t, r] = Array.from(e.touches).filter((e => n.includes(e.identifier)));
        return Dr(t, r)
      }

      function Ir(e) {
        const n = Rr(e);
        return Nr(e) ? n.identifier : n.pointerId
      }

      function Hr(e) {
        const n = Rr(e);
        return [n.clientX, n.clientY]
      }

      function zr(e) {
        let {
          deltaX: n,
          deltaY: t,
          deltaMode: r
        } = e;
        return 1 === r ? (n *= 40, t *= 40) : 2 === r && (n *= 800, t *= 800), [n, t]
      }

      function qr(e) {
        if ("function" == typeof e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          return e(...t)
        }
        return e
      }

      function Fr() {}

      function Ur() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return 0 === n.length ? Fr : 1 === n.length ? n[0] : function() {
          let e;
          for (const t of n) e = t.apply(this, arguments) || e;
          return e
        }
      }

      function Vr(e, n) {
        return Object.assign({}, n, e || {})
      }
      class Gr {
        constructor(e, n, t) {
          this.ctrl = e, this.args = n, this.key = t, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(e) {
          this.ctrl.state[this.key] = e
        }
        get shared() {
          return this.ctrl.state.shared
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
          return this.ctrl.config[this.key]
        }
        get sharedConfig() {
          return this.ctrl.config.shared
        }
        get handler() {
          return this.ctrl.handlers[this.key]
        }
        reset() {
          const {
            state: e,
            shared: n,
            ingKey: t,
            args: r
          } = this;
          n[t] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const n = this.state,
            t = this.config;
          n._active || (this.reset(), this.computeInitial(), n._active = !0, n.target = e.target, n.currentTarget = e.currentTarget, n.lastOffset = t.from ? qr(t.from, n) : n.offset, n.offset = n.lastOffset, n.startTime = n.timeStamp = e.timeStamp)
        }
        computeValues(e) {
          const n = this.state;
          n._values = e, n.values = this.config.transform(e)
        }
        computeInitial() {
          const e = this.state;
          e._initial = e._values, e.initial = e.values
        }
        compute(e) {
          const {
            state: n,
            config: t,
            shared: r
          } = this;
          n.args = this.args;
          let o = 0;
          if (e && (n.event = e, t.preventDefault && e.cancelable && n.event.preventDefault(), n.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function(e) {
              const n = {};
              if ("buttons" in e && (n.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: t,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(n, {
                  shiftKey: t,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return n
            }(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = e.timeStamp - n.timeStamp, n.timeStamp = e.timeStamp, n.elapsedTime = n.timeStamp - n.startTime), n._active) {
            const e = n._delta.map(Math.abs);
            _r.addTo(n._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = n._movement, [s, u] = t.threshold, {
            _step: l,
            values: d
          } = n;
          if (t.hasCustomTransform ? (!1 === l[0] && (l[0] = Math.abs(i) >= s && d[0]), !1 === l[1] && (l[1] = Math.abs(a) >= u && d[1])) : (!1 === l[0] && (l[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === l[1] && (l[1] = Math.abs(a) >= u && Math.sign(a) * u)), n.intentional = !1 !== l[0] || !1 !== l[1], !n.intentional) return;
          const c = [0, 0];
          if (t.hasCustomTransform) {
            const [e, n] = d;
            c[0] = !1 !== l[0] ? e - l[0] : 0, c[1] = !1 !== l[1] ? n - l[1] : 0
          } else c[0] = !1 !== l[0] ? i - l[0] : 0, c[1] = !1 !== l[1] ? a - l[1] : 0;
          this.restrictToAxis && !n._blocked && this.restrictToAxis(c);
          const f = n.offset,
            p = n._active && !n._blocked || n.active;
          p && (n.first = n._active && !n.active, n.last = !n._active && n.active, n.active = r[this.ingKey] = n._active, e && (n.first && ("bounds" in t && (n._bounds = qr(t.bounds, n)), this.setup && this.setup()), n.movement = c, this.computeOffset()));
          const [h, y] = n.offset, [
            [A, v],
            [m, b]
          ] = n._bounds;
          n.overflow = [h < A ? -1 : h > v ? 1 : 0, y < m ? -1 : y > b ? 1 : 0], n._movementBound[0] = !!n.overflow[0] && (!1 === n._movementBound[0] ? n._movement[0] : n._movementBound[0]), n._movementBound[1] = !!n.overflow[1] && (!1 === n._movementBound[1] ? n._movement[1] : n._movementBound[1]);
          const g = n._active && t.rubberband || [0, 0];
          if (n.offset = function(e, n, t) {
              let [r, o] = n, [i, a] = t;
              const [
                [s, u],
                [l, d]
              ] = e;
              return [wr(r, s, u, i), wr(o, l, d, a)]
            }(n._bounds, n.offset, g), n.delta = _r.sub(n.offset, f), this.computeMovement(), p && (!n.last || o > 32)) {
            n.delta = _r.sub(n.offset, f);
            const e = n.delta.map(Math.abs);
            _r.addTo(n.distance, e), n.direction = n.delta.map(Math.sign), n._direction = n._delta.map(Math.sign), !n.first && o > 0 && (n.velocity = [e[0] / o, e[1] / o], n.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            n = this.shared,
            t = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !t.triggerAllEvents) return;
          const r = this.handler(xr(xr(xr({}, n), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Wr extends Gr {
        constructor() {
          super(...arguments), kr(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = _r.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = _r.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const n = this.state,
            t = this.config;
          if (!n.axis && e) {
            const r = "object" == typeof t.axisThreshold ? t.axisThreshold[Lr(e)] : t.axisThreshold;
            n.axis = function(e, n) {
              let [t, r] = e;
              const o = Math.abs(t),
                i = Math.abs(r);
              return o > i && o > n ? "x" : i > o && i > n ? "y" : void 0
            }(n._movement, r)
          }
          n._blocked = (t.lockDirection || !!t.axis) && !n.axis || !!t.axis && t.axis !== n.axis
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              e[1] = 0;
              break;
            case "y":
              e[0] = 0
          }
        }
      }
      const Kr = e => e,
        Xr = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, n, t) => xr(xr({}, t.shared.eventOptions), e),
          preventDefault() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          triggerAllEvents() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          rubberband() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return _r.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? _r.toVector(e) : void 0,
          transform(e, n, t) {
            const r = e || t.shared.transform;
            return this.hasCustomTransform = !!r, r || Kr
          },
          threshold: e => _r.toVector(e, 0)
        },
        $r = xr(xr({}, Xr), {}, {
          axis(e, n, t) {
            let {
              axis: r
            } = t;
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          },
          bounds() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("function" == typeof e) return n => $r.bounds(e(n));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: n = -1 / 0,
              right: t = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [n, t],
              [r, o]
            ]
          }
        }),
        Yr = {
          ArrowRight: function(e) {
            return [e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowLeft: function(e) {
            return [-1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowUp: function(e) {
            return [0, -1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          },
          ArrowDown: function(e) {
            return [0, e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          }
        },
        Zr = "undefined" != typeof window && window.document && window.document.createElement;

      function Qr() {
        return Zr && "ontouchstart" in window
      }
      const Jr = {
          isBrowser: Zr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Qr(),
          touchscreen: Qr() || Zr && window.navigator.maxTouchPoints > 1,
          pointer: Zr && "onpointerdown" in window,
          pointerLock: Zr && "exitPointerLock" in window.document
        },
        eo = .5,
        no = 50,
        to = 250,
        ro = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        oo = xr(xr({}, $r), {}, {
          device(e, n, t) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = t;
            return this.pointerLock = o && Jr.pointerLock, Jr.touch && r ? "touch" : this.pointerLock ? "mouse" : Jr.pointer && !i ? "pointer" : Jr.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, n, t) {
            let {
              preventScroll: r
            } = t;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Jr.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
          },
          pointerCapture(e, n, t) {
            let {
              pointer: {
                capture: r = !0,
                buttons: o = 1,
                keys: i = !0
              } = {}
            } = t;
            return this.pointerButtons = o, this.keys = i, !this.pointerLock && "pointer" === this.device && r
          },
          threshold(e, n, t) {
            let {
              filterTaps: r = !1,
              tapsThreshold: o = 3,
              axis: i
            } = t;
            const a = _r.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = eo,
              distance: n = no,
              duration: t = to
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(_r.toVector(e)),
              distance: this.transform(_r.toVector(n)),
              duration: t
            }
          },
          delay() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? xr(xr({}, ro), e) : ro,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function io(e) {
        const [n, t] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (n < 0 && r > 0 && i < 0 || n > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (t < 0 && o > 0 && a < 0 || t > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const ao = xr(xr({}, Xr), {}, {
          device(e, n, t) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = t;
            if (r.target && !Jr.touch && Jr.gesture) return "gesture";
            if (Jr.touch && o) return "touch";
            if (Jr.touchscreen) {
              if (Jr.pointer) return "pointer";
              if (Jr.touch) return "touch"
            }
          },
          bounds(e, n, t) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = t;
            const i = e => {
                const n = Vr(qr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [n.min, n.max]
              },
              a = e => {
                const n = Vr(qr(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [n.min, n.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, n, t) {
            return this.lockDirection = "lock" === t.axis, _r.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        so = xr(xr({}, $r), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        uo = $r,
        lo = $r,
        co = xr(xr({}, $r), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        fo = new Map,
        po = new Map;

      function ho(e) {
        fo.set(e.key, e.engine), po.set(e.key, e.resolver)
      }
      const yo = {
          key: "drag",
          engine: class extends Wr {
            constructor() {
              super(...arguments), kr(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const e = this.state;
              e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
            }
            setup() {
              const e = this.state;
              if (e._bounds instanceof HTMLElement) {
                const n = e._bounds.getBoundingClientRect(),
                  t = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: n.left - t.left + e.offset[0],
                    right: n.right - t.right + e.offset[0],
                    top: n.top - t.top + e.offset[1],
                    bottom: n.bottom - t.bottom + e.offset[1]
                  };
                e._bounds = $r.bounds(r)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout((() => {
                this.compute(), this.emit()
              }), 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(e) {
              const n = this.config,
                t = this.state;
              if (null != e.buttons && (Array.isArray(n.pointerButtons) ? !n.pointerButtons.includes(e.buttons) : -1 !== n.pointerButtons && n.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              n.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && t._pointerActive || (this.start(e), this.setupPointer(e), t._pointerId = Ir(e), t._pointerActive = !0, this.computeValues(Hr(e)), this.computeInitial(), n.preventScrollAxis && "mouse" !== Lr(e) ? (t._active = !1, this.setupScrollPrevention(e)) : n.delay > 0 ? (this.setupDelayTrigger(e), n.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const n = this.state;
              n._active = !0, n._preventScroll = !0, n._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const n = this.state,
                t = this.config;
              if (!n._pointerActive) return;
              const r = Ir(e);
              if (void 0 !== n._pointerId && r !== n._pointerId) return;
              const o = Hr(e);
              return document.pointerLockElement === e.target ? n._delta = [e.movementX, e.movementY] : (n._delta = _r.sub(o, n._values), this.computeValues(o)), _r.addTo(n._movement, n._delta), this.compute(e), n._delayed && n.intentional ? (this.timeoutStore.remove("dragDelay"), n.active = !1, void this.startPointerDrag(e)) : t.preventScrollAxis && !n._preventScroll ? n.axis ? n.axis === t.preventScrollAxis || "xy" === t.preventScrollAxis ? (n._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const n = this.state,
                t = this.config;
              if (!n._active || !n._pointerActive) return;
              const r = Ir(e);
              if (void 0 !== n._pointerId && r !== n._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = n._distance;
              if (n.tap = o <= t.tapsThreshold && i <= t.tapsThreshold, n.tap && t.filterTaps) n._force = !0;
              else {
                const [e, r] = n._delta, [o, i] = n._movement, [a, s] = t.swipe.velocity, [u, l] = t.swipe.distance, d = t.swipe.duration;
                if (n.elapsedTime < d) {
                  const t = Math.abs(e / n.timeDelta),
                    d = Math.abs(r / n.timeDelta);
                  t > a && Math.abs(o) > u && (n.swipe[0] = Math.sign(e)), d > s && Math.abs(i) > l && (n.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const n = this.config,
                t = n.device;
              n.pointerLock && e.currentTarget.requestPointerLock(), n.pointerCapture || (this.eventStore.add(this.sharedConfig.window, t, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, t, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, t, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault()
            }
            setupScrollPrevention(e) {
              this.state._preventScroll = !1,
                function(e) {
                  "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
              const n = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", n), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", n), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
            }
            setupDelayTrigger(e) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", (() => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }), this.config.delay)
            }
            keyDown(e) {
              const n = Yr[e.key];
              if (n) {
                const t = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), t._delta = n(this.config.keyboardDisplacement, r), t._keyboardActive = !0, _r.addTo(t._movement, t._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Yr && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const n = this.config.device;
              e(n, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(n, "change", this.pointerMove.bind(this)), e(n, "end", this.pointerUp.bind(this)), e(n, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: oo
        },
        Ao = {
          key: "hover",
          engine: class extends Wr {
            constructor() {
              super(...arguments), kr(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Hr(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const n = this.state;
              if (!n._active) return;
              n._active = !1;
              const t = Hr(e);
              n._movement = n._delta = _r.sub(t, n._values), this.computeValues(t), this.compute(e), n.delta = n.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: co
        },
        vo = {
          key: "move",
          engine: class extends Wr {
            constructor() {
              super(...arguments), kr(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Hr(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const n = Hr(e),
                t = this.state;
              t._delta = _r.sub(n, t._values), _r.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: so
        },
        mo = {
          key: "pinch",
          engine: class extends Gr {
            constructor() {
              super(...arguments), kr(this, "ingKey", "pinching"), kr(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const e = this.state;
              e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0
            }
            computeOffset() {
              const {
                type: e,
                movement: n,
                lastOffset: t
              } = this.state;
              this.state.offset = "wheel" === e ? _r.add(n, t) : [(1 + n[0]) * t[0], n[1] + t[1]]
            }
            computeMovement() {
              const {
                offset: e,
                lastOffset: n
              } = this.state;
              this.state.movement = [e[0] / n[0], e[1] - n[1]]
            }
            axisIntent() {
              const e = this.state,
                [n, t] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(n) - Math.abs(t);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection && ("scale" === this.state.axis ? e[1] = 0 : "angle" === this.state.axis && (e[0] = 0))
            }
            cancel() {
              const e = this.state;
              e.canceled || setTimeout((() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }), 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const n = this.state,
                t = this.ctrl.touchIds;
              if (n._active && n._touchIds.every((e => t.has(e)))) return;
              if (t.size < 2) return;
              this.start(e), n._touchIds = Array.from(t).slice(0, 2);
              const r = Mr(e, n._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const n = this.state,
                t = n._pointerEvents,
                r = this.ctrl.pointerIds;
              if (n._active && Array.from(t.keys()).every((e => r.has(e)))) return;
              if (t.size < 2 && t.set(e.pointerId, e), n._pointerEvents.size < 2) return;
              this.start(e);
              const o = Dr(...Array.from(t.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, n) {
              this.state.origin = n.origin, this.computeValues([n.distance, n.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const n = Mr(e, this.state._touchIds);
              n && this.pinchMove(e, n)
            }
            pointerMove(e) {
              const n = this.state._pointerEvents;
              if (n.has(e.pointerId) && n.set(e.pointerId, e), !this.state._active) return;
              const t = Dr(...Array.from(n.values()));
              t && this.pinchMove(e, t)
            }
            pinchMove(e, n) {
              const t = this.state,
                r = t._values[1],
                o = n.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([n.distance, n.angle - 360 * i]), t.origin = n.origin, t.turns = i, t._movement = [t._values[0] / t._initial[0] - 1, t._values[1] - t._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((e => !this.ctrl.touchIds.has(e))) && (this.state._active = !1, this.compute(e), this.emit())
            }
            pointerEnd(e) {
              const n = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              n._pointerEvents.has(e.pointerId) && n._pointerEvents.delete(e.pointerId), n._active && n._pointerEvents.size < 2 && (n._active = !1, this.compute(e), this.emit())
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              const n = this.state;
              n._active || (this.start(e), this.computeValues([e.scale, e.rotation]), n.origin = [e.clientX, e.clientY], this.compute(e), this.emit())
            }
            gestureMove(e) {
              if (e.cancelable && e.preventDefault(), !this.state._active) return;
              const n = this.state;
              this.computeValues([e.scale, e.rotation]), n.origin = [e.clientX, e.clientY];
              const t = n._movement;
              n._movement = [e.scale - 1, e.rotation], n._delta = _r.sub(n._movement, t), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const n = this.config.modifierKey;
              n && !(Array.isArray(n) ? n.find((n => e[n])) : e[n]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const n = this.state;
              n._delta = [-zr(e)[1] / 100 * n.offset[0], 0], _r.addTo(n._movement, n._delta), io(n), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              const n = this.config.device;
              n && (e(n, "start", this[n + "Start"].bind(this)), e(n, "change", this[n + "Move"].bind(this)), e(n, "end", this[n + "End"].bind(this)), e(n, "cancel", this[n + "End"].bind(this)), e("lostPointerCapture", "", this[n + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: ao
        },
        bo = {
          key: "scroll",
          engine: class extends Wr {
            constructor() {
              super(...arguments), kr(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const n = this.state,
                t = function(e) {
                  var n, t;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: a
                  } = e.currentTarget;
                  return [null !== (n = null != r ? r : i) && void 0 !== n ? n : 0, null !== (t = null != o ? o : a) && void 0 !== t ? t : 0]
                }(e);
              n._delta = _r.sub(t, n._values), _r.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: uo
        },
        go = {
          key: "wheel",
          engine: class extends Wr {
            constructor() {
              super(...arguments), kr(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const n = this.state;
              n._delta = zr(e), _r.addTo(n._movement, n._delta), io(n), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: lo
        };
      const Co = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jr.isBrowser ? window : void 0
          },
          eventOptions() {
            let {
              passive: e = !0,
              capture: n = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              passive: e,
              capture: n
            }
          },
          transform: e => e
        },
        _o = ["target", "eventOptions", "window", "enabled", "transform"];

      function Eo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        const t = {};
        for (const [r, o] of Object.entries(n)) switch (typeof o) {
          case "function":
            t[r] = o.call(t, e[r], r, e);
            break;
          case "object":
            t[r] = Eo(e[r], o);
            break;
          case "boolean":
            o && (t[r] = e[r])
        }
        return t
      }
      class wo {
        constructor(e, n) {
          kr(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = n
        }
        add(e, n, t, r, o) {
          const i = this._listeners,
            a = function(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const t = Pr[e];
              return e + (t && t[n] || n)
            }(n, t),
            s = xr(xr({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(a, r, s);
          const u = () => {
            e.removeEventListener(a, r, s), i.delete(u)
          };
          return i.add(u), u
        }
        clean() {
          this._listeners.forEach((e => e())), this._listeners.clear()
        }
      }
      class ko {
        constructor() {
          kr(this, "_timeouts", new Map)
        }
        add(e, n) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
          this.remove(e);
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
          this._timeouts.set(e, window.setTimeout(n, t, ...o))
        }
        remove(e) {
          const n = this._timeouts.get(e);
          n && window.clearTimeout(n)
        }
        clean() {
          this._timeouts.forEach((e => {
            window.clearTimeout(e)
          })), this._timeouts.clear()
        }
      }
      class Bo {
        constructor(e) {
          var n, t;
          kr(this, "gestures", new Set), kr(this, "_targetEventStore", new wo(this)), kr(this, "gestureEventStores", {}), kr(this, "gestureTimeoutStores", {}), kr(this, "handlers", {}), kr(this, "config", {}), kr(this, "pointerIds", new Set), kr(this, "touchIds", new Set), kr(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), n = this, (t = e).drag && xo(n, "drag"), t.wheel && xo(n, "wheel"), t.scroll && xo(n, "scroll"), t.move && xo(n, "move"), t.pinch && xo(n, "pinch"), t.hover && xo(n, "hover")
        }
        setEventIds(e) {
          return Nr(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter((n => {
                var t, r;
                return n.target === e.currentTarget || (null === (t = e.currentTarget) || void 0 === t || null === (r = t.contains) || void 0 === r ? void 0 : r.call(t, n.target))
              }))
            }(e).map((e => e.identifier))
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, n) {
          this.handlers = e, this.nativeHandlers = n
        }
        applyConfig(e, n) {
          this.config = function(e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const r = e,
              {
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: u
              } = r,
              l = function(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                  if (null == e) return {};
                  var t, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                  return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
              }(r, _o);
            if (t.shared = Eo({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: u
              }, Co), n) {
              const e = po.get(n);
              t[n] = Eo(xr({
                shared: t.shared
              }, l), e)
            } else
              for (const e in l) {
                const n = po.get(e);
                n && (t[e] = Eo(xr({
                  shared: t.shared
                }, l[e]), n))
              }
            return t
          }(e, n, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          const r = this.config.shared,
            o = {};
          let i;
          if (!r.target || (i = r.target(), i)) {
            if (r.enabled) {
              for (const e of this.gestures) {
                const t = this.config[e],
                  r = Po(o, t.eventOptions, !!i);
                t.enabled && new(fo.get(e))(this, n, e).bind(r)
              }
              const e = Po(o, r.eventOptions, !!i);
              for (const t in this.nativeHandlers) e(t, "", (e => this.nativeHandlers[t](xr(xr({}, this.state.shared), {}, {
                event: e,
                args: n
              }))), void 0, !0)
            }
            for (const e in o) o[e] = Ur(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: n,
                capture: t,
                passive: r
              } = Or(e);
              this._targetEventStore.add(i, n, "", o[e], {
                capture: t,
                passive: r
              })
            }
          }
        }
      }

      function xo(e, n) {
        e.gestures.add(n), e.gestureEventStores[n] = new wo(e, n), e.gestureTimeoutStores[n] = new ko
      }
      const Po = (e, n, t) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var u, l;
          const d = null !== (u = a.capture) && void 0 !== u ? u : n.capture,
            c = null !== (l = a.passive) && void 0 !== l ? l : n.passive;
          let f = s ? r : function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = Pr[e],
              o = r && r[n] || n;
            return "on" + Tr(e) + Tr(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !Sr.includes(e)
            }(t, o) ? "Capture" : "")
          }(r, o, d);
          t && c && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        To = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function So(e, n, t, r, o, i) {
        if (!e.has(t)) return;
        if (!fo.has(r)) return;
        const a = t + "Start",
          s = t + "End";
        o[r] = e => {
          let r;
          return e.first && a in n && n[a](e), t in n && (r = n[t](e)), e.last && s in n && n[s](e), r
        }, i[r] = i[r] || {}
      }

      function jo(e, n) {
        const t = ([yo, mo, bo, go, vo, Ao].forEach(ho), function(e, n) {
          const {
            handlers: t,
            nativeHandlers: r,
            config: o
          } = function(e, n) {
            const [t, r, o] = function(e) {
              const n = {},
                t = {},
                r = new Set;
              for (let o in e) To.test(o) ? (r.add(RegExp.lastMatch), t[o] = e[o]) : n[o] = e[o];
              return [t, n, r]
            }(e), i = {};
            return So(o, t, "onDrag", "drag", i, n), So(o, t, "onWheel", "wheel", i, n), So(o, t, "onScroll", "scroll", i, n), So(o, t, "onPinch", "pinch", i, n), So(o, t, "onMove", "move", i, n), So(o, t, "onHover", "hover", i, n), {
              handlers: i,
              config: n,
              nativeHandlers: r
            }
          }(e, n || {});
          return function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = l().useMemo((() => new Bo(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(n, t), l().useEffect(o.effect.bind(o)), l().useEffect((() => o.clean.bind(o)), []), void 0 === n.target) return o.bind.bind(o)
          }(t, o, void 0, r)
        });
        return t(e, n || {})
      }
      var Oo = Xo(),
        No = e => Vo(e, Oo),
        Lo = Xo();
      No.write = e => Vo(e, Lo);
      var Ro = Xo();
      No.onStart = e => Vo(e, Ro);
      var Do = Xo();
      No.onFrame = e => Vo(e, Do);
      var Mo = Xo();
      No.onFinish = e => Vo(e, Mo);
      var Io = [];
      No.setTimeout = (e, n) => {
        const t = No.now() + n,
          r = () => {
            const e = Io.findIndex((e => e.cancel == r));
            ~e && Io.splice(e, 1), Fo -= ~e ? 1 : 0
          },
          o = {
            time: t,
            handler: e,
            cancel: r
          };
        return Io.splice(Ho(t), 0, o), Fo += 1, Go(), o
      };
      var Ho = e => ~(~Io.findIndex((n => n.time > e)) || ~Io.length);
      No.cancel = e => {
        Ro.delete(e), Do.delete(e), Mo.delete(e), Oo.delete(e), Lo.delete(e)
      }, No.sync = e => {
        Uo = !0, No.batchedUpdates(e), Uo = !1
      }, No.throttle = e => {
        let n;

        function t() {
          try {
            e(...n)
          } finally {
            n = null
          }
        }

        function r(...e) {
          n = e, No.onStart(t)
        }
        return r.handler = e, r.cancel = () => {
          Ro.delete(t), n = null
        }, r
      };
      var zo = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      No.use = e => zo = e, No.now = "undefined" != typeof performance ? () => performance.now() : Date.now, No.batchedUpdates = e => e(), No.catch = console.error, No.frameLoop = "always", No.advance = () => {
        "demand" !== No.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ko()
      };
      var qo = -1,
        Fo = 0,
        Uo = !1;

      function Vo(e, n) {
        Uo ? (n.delete(e), e(0)) : (n.add(e), Go())
      }

      function Go() {
        qo < 0 && (qo = 0, "demand" !== No.frameLoop && zo(Wo))
      }

      function Wo() {
        ~qo && (zo(Wo), No.batchedUpdates(Ko))
      }

      function Ko() {
        const e = qo;
        qo = No.now();
        const n = Ho(qo);
        n && ($o(Io.splice(0, n), (e => e.handler())), Fo -= n), Fo ? (Ro.flush(), Oo.flush(e ? Math.min(64, qo - e) : 16.667), Do.flush(), Lo.flush(), Mo.flush()) : qo = -1
      }

      function Xo() {
        let e = new Set,
          n = e;
        return {
          add(t) {
            Fo += n != e || e.has(t) ? 0 : 1, e.add(t)
          },
          delete: t => (Fo -= n == e && e.has(t) ? 1 : 0, e.delete(t)),
          flush(t) {
            n.size && (e = new Set, Fo -= n.size, $o(n, (n => n(t) && e.add(n))), Fo += e.size, n = e)
          }
        }
      }

      function $o(e, n) {
        e.forEach((e => {
          try {
            n(e)
          } catch (e) {
            No.catch(e)
          }
        }))
      }
      var Yo = Object.defineProperty,
        Zo = {};

      function Qo() {}((e, n) => {
        for (var t in n) Yo(e, t, {
          get: n[t],
          enumerable: !0
        })
      })(Zo, {
        assign: () => fi,
        colors: () => li,
        createStringInterpolator: () => ii,
        skipAnimation: () => di,
        to: () => ai,
        willAdvance: () => ci
      });
      var Jo = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function ei(e, n) {
        if (Jo.arr(e)) {
          if (!Jo.arr(n) || e.length !== n.length) return !1;
          for (let t = 0; t < e.length; t++)
            if (e[t] !== n[t]) return !1;
          return !0
        }
        return e === n
      }
      var ni = (e, n) => e.forEach(n);

      function ti(e, n, t) {
        if (Jo.arr(e))
          for (let r = 0; r < e.length; r++) n.call(t, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && n.call(t, e[r], r)
      }
      var ri = e => Jo.und(e) ? [] : Jo.arr(e) ? e : [e];

      function oi(e, n) {
        if (e.size) {
          const t = Array.from(e);
          e.clear(), ni(t, n)
        }
      }
      var ii, ai, si = (e, ...n) => oi(e, (e => e(...n))),
        ui = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        li = null,
        di = !1,
        ci = Qo,
        fi = e => {
          e.to && (ai = e.to), e.now && (No.now = e.now), void 0 !== e.colors && (li = e.colors), null != e.skipAnimation && (di = e.skipAnimation), e.createStringInterpolator && (ii = e.createStringInterpolator), e.requestAnimationFrame && No.use(e.requestAnimationFrame), e.batchedUpdates && (No.batchedUpdates = e.batchedUpdates), e.willAdvance && (ci = e.willAdvance), e.frameLoop && (No.frameLoop = e.frameLoop)
        },
        pi = new Set,
        hi = [],
        yi = [],
        Ai = 0,
        vi = {
          get idle() {
            return !pi.size && !hi.length
          },
          start(e) {
            Ai > e.priority ? (pi.add(e), No.onStart(mi)) : (bi(e), No(Ci))
          },
          advance: Ci,
          sort(e) {
            if (Ai) No.onFrame((() => vi.sort(e)));
            else {
              const n = hi.indexOf(e);
              ~n && (hi.splice(n, 1), gi(e))
            }
          },
          clear() {
            hi = [], pi.clear()
          }
        };

      function mi() {
        pi.forEach(bi), pi.clear(), No(Ci)
      }

      function bi(e) {
        hi.includes(e) || gi(e)
      }

      function gi(e) {
        hi.splice(function(n, t) {
          const r = n.findIndex((n => n.priority > e.priority));
          return r < 0 ? n.length : r
        }(hi), 0, e)
      }

      function Ci(e) {
        const n = yi;
        for (let t = 0; t < hi.length; t++) {
          const r = hi[t];
          Ai = r.priority, r.idle || (ci(r), r.advance(e), r.idle || n.push(r))
        }
        return Ai = 0, (yi = hi).length = 0, (hi = n).length > 0
      }
      var _i = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        },
        Ei = "[-+]?\\d*\\.?\\d+",
        wi = Ei + "%";

      function ki(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Bi = new RegExp("rgb" + ki(Ei, Ei, Ei)),
        xi = new RegExp("rgba" + ki(Ei, Ei, Ei, Ei)),
        Pi = new RegExp("hsl" + ki(Ei, wi, wi)),
        Ti = new RegExp("hsla" + ki(Ei, wi, wi, Ei)),
        Si = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ji = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Oi = /^#([0-9a-fA-F]{6})$/,
        Ni = /^#([0-9a-fA-F]{8})$/;

      function Li(e, n, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (n - e) * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e
      }

      function Ri(e, n, t) {
        const r = t < .5 ? t * (1 + n) : t + n - t * n,
          o = 2 * t - r,
          i = Li(o, r, e + 1 / 3),
          a = Li(o, r, e),
          s = Li(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Di(e) {
        const n = parseInt(e, 10);
        return n < 0 ? 0 : n > 255 ? 255 : n
      }

      function Mi(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ii(e) {
        const n = parseFloat(e);
        return n < 0 ? 0 : n > 1 ? 255 : Math.round(255 * n)
      }

      function Hi(e) {
        const n = parseFloat(e);
        return n < 0 ? 0 : n > 100 ? 1 : n / 100
      }

      function zi(e) {
        let n = function(e) {
          let n;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = Oi.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : li && void 0 !== li[e] ? li[e] : (n = Bi.exec(e)) ? (Di(n[1]) << 24 | Di(n[2]) << 16 | Di(n[3]) << 8 | 255) >>> 0 : (n = xi.exec(e)) ? (Di(n[1]) << 24 | Di(n[2]) << 16 | Di(n[3]) << 8 | Ii(n[4])) >>> 0 : (n = Si.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0 : (n = Ni.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = ji.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0 : (n = Pi.exec(e)) ? (255 | Ri(Mi(n[1]), Hi(n[2]), Hi(n[3]))) >>> 0 : (n = Ti.exec(e)) ? (Ri(Mi(n[1]), Hi(n[2]), Hi(n[3])) | Ii(n[4])) >>> 0 : null
        }(e);
        return null === n ? e : (n = n || 0, `rgba(${(4278190080&n)>>>24}, ${(16711680&n)>>>16}, ${(65280&n)>>>8}, ${(255&n)/255})`)
      }
      var qi = (e, n, t) => {
          if (Jo.fun(e)) return e;
          if (Jo.arr(e)) return qi({
            range: e,
            output: n,
            extrapolate: t
          });
          if (Jo.str(e.output[0])) return ii(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            a = r.extrapolateLeft || r.extrapolate || "extend",
            s = r.extrapolateRight || r.extrapolate || "extend",
            u = r.easing || (e => e);
          return e => {
            const n = function(e, n) {
              for (var t = 1; t < n.length - 1 && !(n[t] >= e); ++t);
              return t - 1
            }(e, i);
            return function(e, n, t, r, o, i, a, s, u) {
              let l = u ? u(e) : e;
              if (l < n) {
                if ("identity" === a) return l;
                "clamp" === a && (l = n)
              }
              if (l > t) {
                if ("identity" === s) return l;
                "clamp" === s && (l = t)
              }
              return r === o ? r : n === t ? e <= n ? r : o : (n === -1 / 0 ? l = -l : t === 1 / 0 ? l -= n : l = (l - n) / (t - n), l = i(l), r === -1 / 0 ? l = -l : o === 1 / 0 ? l += r : l = l * (o - r) + r, l)
            }(e, i[n], i[n + 1], o[n], o[n + 1], u, a, s, r.map)
          }
        },
        Fi = 1.70158,
        Ui = 1.525 * Fi,
        Vi = Fi + 1,
        Gi = 2 * Math.PI / 3,
        Wi = 2 * Math.PI / 4.5,
        Ki = e => {
          const n = 7.5625,
            t = 2.75;
          return e < 1 / t ? n * e * e : e < 2 / t ? n * (e -= 1.5 / t) * e + .75 : e < 2.5 / t ? n * (e -= 2.25 / t) * e + .9375 : n * (e -= 2.625 / t) * e + .984375
        },
        Xi = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => Vi * e * e * e - Fi * e * e,
          easeOutBack: e => 1 + Vi * Math.pow(e - 1, 3) + Fi * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Ui) / 2 : (Math.pow(2 * e - 2, 2) * ((Ui + 1) * (2 * e - 2) + Ui) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Gi),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Gi) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Wi) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Wi) / 2 + 1,
          easeInBounce: e => 1 - Ki(1 - e),
          easeOutBounce: Ki,
          easeInOutBounce: e => e < .5 ? (1 - Ki(1 - 2 * e)) / 2 : (1 + Ki(2 * e - 1)) / 2,
          steps: (e, n = "end") => t => {
            const r = (t = "end" === n ? Math.min(t, .999) : Math.max(t, .001)) * e;
            return o = ("end" === n ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        $i = Symbol.for("FluidValue.get"),
        Yi = Symbol.for("FluidValue.observers"),
        Zi = e => Boolean(e && e[$i]),
        Qi = e => e && e[$i] ? e[$i]() : e,
        Ji = e => e[Yi] || null;

      function ea(e, n) {
        const t = e[Yi];
        t && t.forEach((e => {
          ! function(e, n) {
            e.eventObserved ? e.eventObserved(n) : e(n)
          }(e, n)
        }))
      }
      var na = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ta(this, e)
          }
        },
        ta = (e, n) => aa(e, $i, n);

      function ra(e, n) {
        if (e[$i]) {
          let t = e[Yi];
          t || aa(e, Yi, t = new Set), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n))
        }
        return n
      }

      function oa(e, n) {
        const t = e[Yi];
        if (t && t.has(n)) {
          const r = t.size - 1;
          r ? t.delete(n) : e[Yi] = null, e.observerRemoved && e.observerRemoved(r, n)
        }
      }
      var ia, aa = (e, n, t) => Object.defineProperty(e, n, {
          value: t,
          writable: !0,
          configurable: !0
        }),
        sa = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ua = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        la = new RegExp(`(${sa.source})(%|[a-z]+)`, "i"),
        da = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ca = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        fa = e => {
          const [n, t] = pa(e);
          if (!n || ui()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
          if (r) return r.trim();
          if (t && t.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(t) || e
          }
          return t && ca.test(t) ? fa(t) : t || e
        },
        pa = e => {
          const n = ca.exec(e);
          if (!n) return [, ];
          const [, t, r] = n;
          return [t, r]
        },
        ha = (e, n, t, r, o) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${o})`,
        ya = e => {
          ia || (ia = li ? new RegExp(`(${Object.keys(li).join("|")})(?!\\w)`, "g") : /^\b$/);
          const n = e.output.map((e => Qi(e).replace(ca, fa).replace(ua, zi).replace(ia, zi))),
            t = n.map((e => e.match(sa).map(Number))),
            r = t[0].map(((e, n) => t.map((e => {
              if (!(n in e)) throw Error('The arity of each "output" value must be equal');
              return e[n]
            })))).map((n => qi({
              ...e,
              output: n
            })));
          return e => {
            const t = !la.test(n[0]) && n.find((e => la.test(e)))?.replace(sa, "");
            let o = 0;
            return n[0].replace(sa, (() => `${r[o++](e)}${t||""}`)).replace(da, ha)
          }
        },
        Aa = "react-spring: ",
        va = e => {
          const n = e;
          let t = !1;
          if ("function" != typeof n) throw new TypeError(`${Aa}once requires a function parameter`);
          return (...e) => {
            t || (n(...e), t = !0)
          }
        },
        ma = va(console.warn),
        ba = va(console.warn);

      function ga(e) {
        return Jo.str(e) && ("#" == e[0] || /\d/.test(e) || !ui() && ca.test(e) || e in (li || {}))
      }
      var Ca = ui() ? s.useEffect : s.useLayoutEffect,
        _a = () => {
          const e = (0, s.useRef)(!1);
          return Ca((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function Ea() {
        const e = (0, s.useState)()[1],
          n = _a();
        return () => {
          n.current && e(Math.random())
        }
      }
      var wa = e => (0, s.useEffect)(e, ka),
        ka = [];

      function Ba(e) {
        const n = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          n.current = e
        })), n.current
      }
      var xa = Symbol.for("Animated:node"),
        Pa = e => e && e[xa],
        Ta = (e, n) => {
          return t = e, r = xa, o = n, Object.defineProperty(t, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var t, r, o
        },
        Sa = e => e && e[xa] && e[xa].getPayload(),
        ja = class {
          constructor() {
            Ta(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Oa = class extends ja {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Jo.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Oa(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, n) {
            return Jo.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Jo.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Na = class extends Oa {
          constructor(e) {
            super(0), this._string = null, this._toString = qi({
              output: [e, e]
            })
          }
          static create(e) {
            return new Na(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Jo.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = qi({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        La = {
          dependencies: null
        },
        Ra = class extends ja {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const n = {};
            return ti(this.source, ((t, r) => {
              var o;
              (o = t) && o[xa] === o ? n[r] = t.getValue(e) : Zi(t) ? n[r] = Qi(t) : e || (n[r] = t)
            })), n
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ni(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const n = new Set;
              return ti(e, this._addToPayload, n), Array.from(n)
            }
          }
          _addToPayload(e) {
            La.dependencies && Zi(e) && La.dependencies.add(e);
            const n = Sa(e);
            n && ni(n, (e => this.add(e)))
          }
        },
        Da = class extends Ra {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Da(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const n = this.getPayload();
            return e.length == n.length ? n.map(((n, t) => n.setValue(e[t]))).some(Boolean) : (super.setValue(e.map(Ma)), !0)
          }
        };

      function Ma(e) {
        return (ga(e) ? Na : Oa).create(e)
      }

      function Ia(e) {
        const n = Pa(e);
        return n ? n.constructor : Jo.arr(e) ? Da : ga(e) ? Na : Oa
      }
      var Ha = (e, n) => {
          const t = !Jo.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, o) => {
            const i = (0, s.useRef)(null),
              a = t && (0, s.useCallback)((e => {
                i.current = function(e, n) {
                  return e && (Jo.fun(e) ? e(n) : e.current = n), n
                }(o, e)
              }), [o]),
              [u, l] = function(e, n) {
                const t = new Set;
                return La.dependencies = t, e.style && (e = {
                  ...e,
                  style: n.createAnimatedStyle(e.style)
                }), e = new Ra(e), La.dependencies = null, [e, t]
              }(r, n),
              d = Ea(),
              c = () => {
                const e = i.current;
                t && !e || !1 === (!!e && n.applyAnimatedValues(e, u.getValue(!0))) && d()
              },
              f = new za(c, l),
              p = (0, s.useRef)();
            Ca((() => (p.current = f, ni(l, (e => ra(e, f))), () => {
              p.current && (ni(p.current.deps, (e => oa(e, p.current))), No.cancel(p.current.update))
            }))), (0, s.useEffect)(c, []), wa((() => () => {
              const e = p.current;
              ni(e.deps, (n => oa(n, e)))
            }));
            const h = n.getComponentProps(u.getValue());
            return s.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        za = class {
          constructor(e, n) {
            this.update = e, this.deps = n
          }
          eventObserved(e) {
            "change" == e.type && No.write(this.update)
          }
        },
        qa = Symbol.for("AnimatedComponent"),
        Fa = (e, {
          applyAnimatedValues: n = (() => !1),
          createAnimatedStyle: t = (e => new Ra(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: n,
              createAnimatedStyle: t,
              getComponentProps: r
            },
            i = e => {
              const n = Ua(e) || "Anonymous";
              return (e = Jo.str(e) ? i[e] || (i[e] = Ha(e, o)) : e[qa] || (e[qa] = Ha(e, o))).displayName = `Animated(${n})`, e
            };
          return ti(e, ((n, t) => {
            Jo.arr(e) && (t = Ua(n)), i[t] = i(n)
          })), {
            animated: i
          }
        },
        Ua = e => Jo.str(e) ? e : e && Jo.str(e.displayName) ? e.displayName : Jo.fun(e) && e.name || null;

      function Va(e, ...n) {
        return Jo.fun(e) ? e(...n) : e
      }
      var Ga = (e, n) => !0 === e || !!(n && e && (Jo.fun(e) ? e(n) : ri(e).includes(n))),
        Wa = (e, n) => Jo.obj(e) ? n && e[n] : e,
        Ka = (e, n) => !0 === e.default ? e[n] : e.default ? e.default[n] : void 0,
        Xa = e => e,
        $a = (e, n = Xa) => {
          let t = Ya;
          e.default && !0 !== e.default && (e = e.default, t = Object.keys(e));
          const r = {};
          for (const o of t) {
            const t = n(e[o], o);
            Jo.und(t) || (r[o] = t)
          }
          return r
        },
        Ya = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Za = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function Qa(e) {
        const n = function(e) {
          const n = {};
          let t = 0;
          if (ti(e, ((e, r) => {
              Za[r] || (n[r] = e, t++)
            })), t) return n
        }(e);
        if (n) {
          const t = {
            to: n
          };
          return ti(e, ((e, r) => r in n || (t[r] = e))), t
        }
        return {
          ...e
        }
      }

      function Ja(e) {
        return e = Qi(e), Jo.arr(e) ? e.map(Ja) : ga(e) ? Zo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function es(e) {
        for (const n in e) return !0;
        return !1
      }

      function ns(e) {
        return Jo.fun(e) || Jo.arr(e) && Jo.obj(e[0])
      }

      function ts(e, n) {
        e.ref?.delete(e), n?.delete(e)
      }

      function rs(e, n) {
        n && e.ref !== n && (e.ref?.delete(e), n.add(e), e.ref = n)
      }
      var os = {
          tension: 170,
          friction: 26
        },
        is = {
          ...os,
          mass: 1,
          damping: 1,
          easing: Xi.linear,
          clamp: !1
        },
        as = class {
          constructor() {
            this.velocity = 0, Object.assign(this, is)
          }
        };

      function ss(e, n) {
        if (Jo.und(n.decay)) {
          const t = !Jo.und(n.tension) || !Jo.und(n.friction);
          !t && Jo.und(n.frequency) && Jo.und(n.damping) && Jo.und(n.mass) || (e.duration = void 0, e.decay = void 0), t && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var us = [],
        ls = class {
          constructor() {
            this.changed = !1, this.values = us, this.toValues = null, this.fromValues = us, this.config = new as, this.immediate = !1
          }
        };

      function ds(e, {
        key: n,
        props: t,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let u, l, d = Ga(t.cancel ?? r?.cancel, n);
          if (d) p();
          else {
            Jo.und(t.pause) || (o.paused = Ga(t.pause, n));
            let e = r?.pause;
            !0 !== e && (e = o.paused || Ga(e, n)), u = Va(t.delay || 0, n), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function c() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), u = l.time - No.now()
          }

          function f() {
            u > 0 && !Zo.skipAnimation ? (o.delayed = !0, l = No.setTimeout(p, u), o.pauseQueue.add(c), o.timeouts.add(l)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(c), o.timeouts.delete(l), e <= (o.cancelId || 0) && (d = !0);
            try {
              i.start({
                ...t,
                callId: e,
                cancel: d
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var cs = (e, n) => 1 == n.length ? n[0] : n.some((e => e.cancelled)) ? hs(e.get()) : n.every((e => e.noop)) ? fs(e.get()) : ps(e.get(), n.every((e => e.finished))),
        fs = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ps = (e, n, t = !1) => ({
          value: e,
          finished: n,
          cancelled: t
        }),
        hs = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ys(e, n, t, r) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = n, {
          asyncTo: s,
          promise: u
        } = t;
        return i || e !== s || n.reset ? t.promise = (async () => {
          t.asyncId = o, t.asyncTo = e;
          const l = $a(n, ((e, n) => "onRest" === n ? void 0 : e));
          let d, c;
          const f = new Promise(((e, n) => (d = e, c = n))),
            p = e => {
              const n = o <= (t.cancelId || 0) && hs(r) || o !== t.asyncId && ps(r, !1);
              if (n) throw e.result = n, c(e), e
            },
            h = (e, n) => {
              const i = new vs,
                a = new ms;
              return (async () => {
                if (Zo.skipAnimation) throw As(t), a.result = ps(r, !1), c(a), a;
                p(i);
                const s = Jo.obj(e) ? {
                  ...e
                } : {
                  ...n,
                  to: e
                };
                s.parentId = o, ti(l, ((e, n) => {
                  Jo.und(s[n]) && (s[n] = e)
                }));
                const u = await r.start(s);
                return p(i), t.paused && await new Promise((e => {
                  t.resumeQueue.add(e)
                })), u
              })()
            };
          let y;
          if (Zo.skipAnimation) return As(t), ps(r, !1);
          try {
            let n;
            n = Jo.arr(e) ? (async e => {
              for (const n of e) await h(n)
            })(e) : Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([n.then(d), f]), y = ps(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof vs) y = e.result;
            else {
              if (!(e instanceof ms)) throw e;
              y = e.result
            }
          } finally {
            o == t.asyncId && (t.asyncId = i, t.asyncTo = i ? s : void 0, t.promise = i ? u : void 0)
          }
          return Jo.fun(a) && No.batchedUpdates((() => {
            a(y, r, r.item)
          })), y
        })() : u
      }

      function As(e, n) {
        oi(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, n && (e.cancelId = n)
      }
      var vs = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ms = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        bs = e => e instanceof Cs,
        gs = 1,
        Cs = class extends na {
          constructor() {
            super(...arguments), this.id = gs++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Pa(this);
            return e && e.getValue()
          }
          to(...e) {
            return Zo.to(this, e)
          }
          interpolate(...e) {
            return ma(`${Aa}The "interpolate" function is deprecated in v9 (use "to" instead)`), Zo.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, n = !1) {
            ea(this, {
              type: "change",
              parent: this,
              value: e,
              idle: n
            })
          }
          _onPriorityChange(e) {
            this.idle || vi.sort(this), ea(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        _s = Symbol.for("SpringPhase"),
        Es = e => (1 & e[_s]) > 0,
        ws = e => (2 & e[_s]) > 0,
        ks = e => (4 & e[_s]) > 0,
        Bs = (e, n) => n ? e[_s] |= 3 : e[_s] &= -3,
        xs = (e, n) => n ? e[_s] |= 4 : e[_s] &= -5,
        Ps = class extends Cs {
          constructor(e, n) {
            if (super(), this.animation = new ls, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Jo.und(e) || !Jo.und(n)) {
              const t = Jo.obj(e) ? {
                ...e
              } : {
                ...n,
                from: e
              };
              Jo.und(t.default) && (t.default = !0), this.start(t)
            }
          }
          get idle() {
            return !(ws(this) || this._state.asyncTo) || ks(this)
          }
          get goal() {
            return Qi(this.animation.to)
          }
          get velocity() {
            const e = Pa(this);
            return e instanceof Oa ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Es(this)
          }
          get isAnimating() {
            return ws(this)
          }
          get isPaused() {
            return ks(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let n = !0,
              t = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: i
            } = r, a = Sa(r.to);
            !a && Zi(r.to) && (o = ri(Qi(r.to))), r.values.forEach(((s, u) => {
              if (s.done) return;
              const l = s.constructor == Na ? 1 : a ? a[u].lastPosition : o[u];
              let d = r.immediate,
                c = l;
              if (!d) {
                if (c = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let n = s.elapsedTime += e;
                const t = r.fromValues[u],
                  o = null != s.v0 ? s.v0 : s.v0 = Jo.arr(i.velocity) ? i.velocity[u] : i.velocity;
                let a;
                const f = i.precision || (t == l ? .005 : Math.min(1, .001 * Math.abs(l - t)));
                if (Jo.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * n);
                    c = t + o / (1 - e) * (1 - r), d = Math.abs(s.lastPosition - c) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const n = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      u = !Jo.und(r),
                      p = t == l ? s.v0 > 0 : t < l;
                    let h, y = !1;
                    const A = 1,
                      v = Math.ceil(e / A);
                    for (let e = 0; e < v && (h = Math.abs(a) > n, h || (d = Math.abs(l - c) <= f, !d)); ++e) u && (y = c == l || c > l == p, y && (a = -a * r, c = l)), a += (1e-6 * -i.tension * (c - l) + .001 * -i.friction * a) / i.mass * A, c += a * A
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, n = s.elapsedTime += e)), r = (i.progress || 0) + n / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), c = t + i.easing(r) * (l - t), a = (c - s.lastPosition) / e, d = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              a && !a[u].done && (d = !1), d ? s.done = !0 : n = !1, s.setValue(c, i.round) && (t = !0)
            }));
            const s = Pa(this),
              u = s.getValue();
            if (n) {
              const e = Qi(r.to);
              u === e && !t || i.decay ? t && i.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)), this._stop()
            } else t && this._onChange(u)
          }
          set(e) {
            return No.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (ws(this)) {
              const {
                to: e,
                config: n
              } = this.animation;
              No.batchedUpdates((() => {
                this._onStart(), n.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, n) {
            let t;
            return Jo.und(e) ? (t = this.queue || [], this.queue = []) : t = [Jo.obj(e) ? e : {
              ...n,
              to: e
            }], Promise.all(t.map((e => this._update(e)))).then((e => cs(this, e)))
          }
          stop(e) {
            const {
              to: n
            } = this.animation;
            return this._focus(this.get()), As(this._state, e && this._lastCallId), No.batchedUpdates((() => this._stop(n, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const n = this.key || "";
            let {
              to: t,
              from: r
            } = e;
            t = Jo.obj(t) ? t[n] : t, (null == t || ns(t)) && (t = void 0), r = Jo.obj(r) ? r[n] : r, null == r && (r = void 0);
            const o = {
              to: t,
              from: r
            };
            return Es(this) || (e.reverse && ([t, r] = [r, t]), r = Qi(r), Jo.und(r) ? Pa(this) || this._set(t) : this._set(r)), o
          }
          _update({
            ...e
          }, n) {
            const {
              key: t,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, $a(e, ((e, n) => /^on/.test(n) ? Wa(e, t) : e))), Rs(this, e, "onProps"), Ds(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return ds(++this._lastCallId, {
              key: t,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  ks(this) || (xs(this, !0), si(i.pauseQueue), Ds(this, "onPause", ps(this, Ts(this, this.animation.to)), this))
                },
                resume: () => {
                  ks(this) && (xs(this, !1), ws(this) && this._resume(), si(i.resumeQueue), Ds(this, "onResume", ps(this, Ts(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((t => {
              if (e.loop && t.finished && (!n || !t.noop)) {
                const n = Ss(e);
                if (n) return this._update(n, !0)
              }
              return t
            }))
          }
          _merge(e, n, t) {
            if (n.cancel) return this.stop(!0), t(hs(this));
            const r = !Jo.und(e.to),
              o = !Jo.und(e.from);
            if (r || o) {
              if (!(n.callId > this._lastToId)) return t(hs(this));
              this._lastToId = n.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: u,
              from: l
            } = s;
            let {
              to: d = u,
              from: c = l
            } = e;
            !o || r || n.default && !Jo.und(d) || (d = c), n.reverse && ([d, c] = [c, d]);
            const f = !ei(c, l);
            f && (s.from = c), c = Qi(c);
            const p = !ei(d, u);
            p && this._focus(d);
            const h = ns(n.to),
              {
                config: y
              } = s,
              {
                decay: A,
                velocity: v
              } = y;
            (r || o) && (y.velocity = 0), n.config && !h && function(e, n, t) {
              t && (ss(t = {
                ...t
              }, n), n = {
                ...t,
                ...n
              }), ss(e, n), Object.assign(e, n);
              for (const n in is) null == e[n] && (e[n] = is[n]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Jo.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(y, Va(n.config, i), n.config !== a.config ? Va(a.config, i) : void 0);
            let m = Pa(this);
            if (!m || Jo.und(d)) return t(ps(this, !0));
            const b = Jo.und(n.reset) ? o && !n.default : !Jo.und(c) && Ga(n.reset, i),
              g = b ? c : this.get(),
              C = Ja(d),
              _ = Jo.num(C) || Jo.arr(C) || ga(C),
              E = !h && (!_ || Ga(a.immediate || n.immediate, i));
            if (p) {
              const e = Ia(d);
              if (e !== m.constructor) {
                if (!E) throw Error(`Cannot animate between ${m.constructor.name} and ${e.name}, as the "to" prop suggests`);
                m = this._set(C)
              }
            }
            const w = m.constructor;
            let k = Zi(d),
              B = !1;
            if (!k) {
              const e = b || !Es(this) && f;
              (p || e) && (B = ei(Ja(g), C), k = !B), (ei(s.immediate, E) || E) && ei(y.decay, A) && ei(y.velocity, v) || (k = !0)
            }
            if (B && ws(this) && (s.changed && !b ? k = !0 : k || this._stop(u)), !h && ((k || Zi(u)) && (s.values = m.getPayload(), s.toValues = Zi(d) ? null : w == Na ? [1] : ri(C)), s.immediate != E && (s.immediate = E, E || b || this._set(u)), k)) {
              const {
                onRest: e
              } = s;
              ni(Ls, (e => Rs(this, n, e)));
              const r = ps(this, Ts(this, u));
              si(this._pendingCalls, r), this._pendingCalls.add(t), s.changed && No.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Va(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(g), h ? t(ys(n.to, n, this._state, this)) : k ? this._start() : ws(this) && !p ? this._pendingCalls.add(t) : t(fs(g))
          }
          _focus(e) {
            const n = this.animation;
            e !== n.to && (Ji(this) && this._detach(), n.to = e, Ji(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: n
            } = this.animation;
            Zi(n) && (ra(n, this), bs(n) && (e = n.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Zi(e) && oa(e, this)
          }
          _set(e, n = !0) {
            const t = Qi(e);
            if (!Jo.und(t)) {
              const e = Pa(this);
              if (!e || !ei(t, e.getValue())) {
                const r = Ia(t);
                e && e.constructor == r ? e.setValue(t) : Ta(this, r.create(t)), e && No.batchedUpdates((() => {
                  this._onChange(t, n)
                }))
              }
            }
            return Pa(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Ds(this, "onStart", ps(this, Ts(this, e.to)), this))
          }
          _onChange(e, n) {
            n || (this._onStart(), Va(this.animation.onChange, e, this)), Va(this.defaultProps.onChange, e, this), super._onChange(e, n)
          }
          _start() {
            const e = this.animation;
            Pa(this).reset(Qi(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), ws(this) || (Bs(this, !0), ks(this) || this._resume())
          }
          _resume() {
            Zo.skipAnimation ? this.finish() : vi.start(this)
          }
          _stop(e, n) {
            if (ws(this)) {
              Bs(this, !1);
              const t = this.animation;
              ni(t.values, (e => {
                e.done = !0
              })), t.toValues && (t.onChange = t.onPause = t.onResume = void 0), ea(this, {
                type: "idle",
                parent: this
              });
              const r = n ? hs(this.get()) : ps(this.get(), Ts(this, e ?? t.to));
              si(this._pendingCalls, r), t.changed && (t.changed = !1, Ds(this, "onRest", r, this))
            }
          }
        };

      function Ts(e, n) {
        const t = Ja(n);
        return ei(Ja(e.get()), t)
      }

      function Ss(e, n = e.loop, t = e.to) {
        const r = Va(n);
        if (r) {
          const o = !0 !== r && Qa(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return js({
            ...e,
            loop: n,
            default: !1,
            pause: void 0,
            to: !i || ns(t) ? t : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function js(e) {
        const {
          to: n,
          from: t
        } = e = Qa(e), r = new Set;
        return Jo.obj(n) && Ns(n, r), Jo.obj(t) && Ns(t, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function Os(e) {
        const n = js(e);
        return Jo.und(n.default) && (n.default = $a(n)), n
      }

      function Ns(e, n) {
        ti(e, ((e, t) => null != e && n.add(t)))
      }
      var Ls = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Rs(e, n, t) {
        e.animation[t] = n[t] !== Ka(n, t) ? Wa(n[t], e.key) : void 0
      }

      function Ds(e, n, ...t) {
        e.animation[n]?.(...t), e.defaultProps[n]?.(...t)
      }
      var Ms = ["onStart", "onChange", "onRest"],
        Is = 1,
        Hs = class {
          constructor(e, n) {
            this.id = Is++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((n, t) => e[t] = n.get())), e
          }
          set(e) {
            for (const n in e) {
              const t = e[n];
              Jo.und(t) || this.springs[n].set(t)
            }
          }
          update(e) {
            return e && this.queue.push(js(e)), this
          }
          start(e) {
            let {
              queue: n
            } = this;
            return e ? n = ri(e).map(js) : this.queue = [], this._flush ? this._flush(this, n) : (Ws(this, n), zs(this, n))
          }
          stop(e, n) {
            if (e !== !!e && (n = e), n) {
              const t = this.springs;
              ni(ri(n), (n => t[n].stop(!!e)))
            } else As(this._state, this._lastAsyncId), this.each((n => n.stop(!!e)));
            return this
          }
          pause(e) {
            if (Jo.und(e)) this.start({
              pause: !0
            });
            else {
              const n = this.springs;
              ni(ri(e), (e => n[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Jo.und(e)) this.start({
              pause: !1
            });
            else {
              const n = this.springs;
              ni(ri(e), (e => n[e].resume()))
            }
            return this
          }
          each(e) {
            ti(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: n,
              onRest: t
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, oi(e, (([e, n]) => {
              n.value = this.get(), e(n, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && t.size ? this.get() : null;
            o && n.size && oi(n, (([e, n]) => {
              n.value = a, e(n, this, this._item)
            })), i && (this._started = !1, oi(t, (([e, n]) => {
              n.value = a, e(n, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            No.onFrame(this._onFrame)
          }
        };

      function zs(e, n) {
        return Promise.all(n.map((n => qs(e, n)))).then((n => cs(e, n)))
      }
      async function qs(e, n, t) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: u
        } = n, l = Jo.obj(n.default) && n.default;
        a && (n.loop = !1), !1 === o && (n.to = null), !1 === i && (n.from = null);
        const d = Jo.arr(o) || Jo.fun(o) ? o : void 0;
        d ? (n.to = void 0, n.onRest = void 0, l && (l.onRest = void 0)) : ni(Ms, (t => {
          const r = n[t];
          if (Jo.fun(r)) {
            const o = e._events[t];
            n[t] = ({
              finished: e,
              cancelled: n
            }) => {
              const t = o.get(r);
              t ? (e || (t.finished = !1), n && (t.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: n || !1
              })
            }, l && (l[t] = n[t])
          }
        }));
        const c = e._state;
        n.pause === !c.paused ? (c.paused = n.pause, si(n.pause ? c.pauseQueue : c.resumeQueue)) : c.paused && (n.pause = !0);
        const f = (r || Object.keys(e.springs)).map((t => e.springs[t].start(n))),
          p = !0 === n.cancel || !0 === Ka(n, "cancel");
        (d || p && c.asyncId) && f.push(ds(++e._lastAsyncId, {
          props: n,
          state: c,
          actions: {
            pause: Qo,
            resume: Qo,
            start(n, t) {
              p ? (As(c, e._lastAsyncId), t(hs(e))) : (n.onRest = s, t(ys(d, n, c, e)))
            }
          }
        })), c.paused && await new Promise((e => {
          c.resumeQueue.add(e)
        }));
        const h = cs(e, await Promise.all(f));
        if (a && h.finished && (!t || !h.noop)) {
          const t = Ss(n, a, o);
          if (t) return Ws(e, [t]), qs(e, t, !0)
        }
        return u && No.batchedUpdates((() => u(h, e, e.item))), h
      }

      function Fs(e, n) {
        const t = {
          ...e.springs
        };
        return n && ni(ri(n), (e => {
          Jo.und(e.keys) && (e = js(e)), Jo.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Gs(t, e, (e => Vs(e)))
        })), Us(e, t), t
      }

      function Us(e, n) {
        ti(n, ((n, t) => {
          e.springs[t] || (e.springs[t] = n, ra(n, e))
        }))
      }

      function Vs(e, n) {
        const t = new Ps;
        return t.key = e, n && ra(t, n), t
      }

      function Gs(e, n, t) {
        n.keys && ni(n.keys, (r => {
          (e[r] || (e[r] = t(r)))._prepareNode(n)
        }))
      }

      function Ws(e, n) {
        ni(n, (n => {
          Gs(e.springs, n, (n => Vs(n, e)))
        }))
      }
      var Ks, Xs, $s = ({
          children: e,
          ...n
        }) => {
          const t = (0, s.useContext)(Ys),
            r = n.pause || !!t.pause,
            o = n.immediate || !!t.immediate;
          n = function(e, n) {
            const [t] = (0, s.useState)((() => ({
              inputs: n,
              result: e()
            }))), r = (0, s.useRef)(), o = r.current;
            let i = o;
            return i ? Boolean(n && i.inputs && function(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; t++)
                if (e[t] !== n[t]) return !1;
              return !0
            }(n, i.inputs)) || (i = {
              inputs: n,
              result: e()
            }) : i = t, (0, s.useEffect)((() => {
              r.current = i, o == t && (t.inputs = t.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: i
          } = Ys;
          return s.createElement(i, {
            value: n
          }, e)
        },
        Ys = (Ks = $s, Xs = {}, Object.assign(Ks, s.createContext(Xs)), Ks.Provider._context = Ks, Ks.Consumer._context = Ks, Ks);
      $s.Provider = Ys.Provider, $s.Consumer = Ys.Consumer;
      var Zs = () => {
        const e = [],
          n = function(n) {
            ba(`${Aa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return ni(e, ((e, o) => {
              if (Jo.und(n)) r.push(e.start());
              else {
                const i = t(n, e, o);
                i && r.push(e.start(i))
              }
            })), r
          };
        n.current = e, n.add = function(n) {
          e.includes(n) || e.push(n)
        }, n.delete = function(n) {
          const t = e.indexOf(n);
          ~t && e.splice(t, 1)
        }, n.pause = function() {
          return ni(e, (e => e.pause(...arguments))), this
        }, n.resume = function() {
          return ni(e, (e => e.resume(...arguments))), this
        }, n.set = function(n) {
          ni(e, ((e, t) => {
            const r = Jo.fun(n) ? n(t, e) : n;
            r && e.set(r)
          }))
        }, n.start = function(n) {
          const t = [];
          return ni(e, ((e, r) => {
            if (Jo.und(n)) t.push(e.start());
            else {
              const o = this._getProps(n, e, r);
              o && t.push(e.start(o))
            }
          })), t
        }, n.stop = function() {
          return ni(e, (e => e.stop(...arguments))), this
        }, n.update = function(n) {
          return ni(e, ((e, t) => e.update(this._getProps(n, e, t)))), this
        };
        const t = function(e, n, t) {
          return Jo.fun(e) ? e(t, n) : e
        };
        return n._getProps = t, n
      };

      function Qs(e, n) {
        const t = Jo.fun(e),
          [
            [r], o
          ] = function(e, n, t) {
            const r = Jo.fun(n) && n;
            r && !t && (t = []);
            const o = (0, s.useMemo)((() => r || 3 == arguments.length ? Zs() : void 0), []),
              i = (0, s.useRef)(0),
              a = Ea(),
              u = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, n) {
                  const t = Fs(e, n);
                  return i.current > 0 && !u.queue.length && !Object.keys(t).some((n => !e.springs[n])) ? zs(e, n) : new Promise((r => {
                    Us(e, t), u.queue.push((() => {
                      r(zs(e, n))
                    })), a()
                  }))
                }
              })), []),
              l = (0, s.useRef)([...u.ctrls]),
              d = [],
              c = Ba(e) || 0;

            function f(e, t) {
              for (let o = e; o < t; o++) {
                const e = l.current[o] || (l.current[o] = new Hs(null, u.flush)),
                  t = r ? r(o, e) : n[o];
                t && (d[o] = Os(t))
              }
            }(0, s.useMemo)((() => {
              ni(l.current.slice(e, c), (e => {
                ts(e, o), e.stop(!0)
              })), l.current.length = e, f(c, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(c, e))
            }), t);
            const p = l.current.map(((e, n) => Fs(e, d[n]))),
              h = (0, s.useContext)($s),
              y = Ba(h),
              A = h !== y && es(h);
            Ca((() => {
              i.current++, u.ctrls = l.current;
              const {
                queue: e
              } = u;
              e.length && (u.queue = [], ni(e, (e => e()))), ni(l.current, ((e, n) => {
                o?.add(e), A && e.start({
                  default: h
                });
                const t = d[n];
                t && (rs(e, t.ref), e.ref ? e.queue.push(t) : e.start(t))
              }))
            })), wa((() => () => {
              ni(u.ctrls, (e => e.stop(!0)))
            }));
            const v = p.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, t ? e : [e], t ? n || [] : n);
        return t || 2 == arguments.length ? [r, o] : r
      }
      var Js = () => Zs(),
        eu = () => (0, s.useState)(Js)[0];
      var nu = 1,
        tu = class extends Cs {
          constructor(e, n) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = qi(...n);
            const t = this._get(),
              r = Ia(t);
            Ta(this, r.create(t))
          }
          advance(e) {
            const n = this._get();
            ei(n, this.get()) || (Pa(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ou(this._active) && iu(this)
          }
          _get() {
            const e = Jo.arr(this.source) ? this.source.map(Qi) : ri(Qi(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ou(this._active) && (this.idle = !1, ni(Sa(this), (e => {
              e.done = !1
            })), Zo.skipAnimation ? (No.batchedUpdates((() => this.advance())), iu(this)) : vi.start(this))
          }
          _attach() {
            let e = 1;
            ni(ri(this.source), (n => {
              Zi(n) && ra(n, this), bs(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            ni(ri(this.source), (e => {
              Zi(e) && oa(e, this)
            })), this._active.clear(), iu(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = ri(this.source).reduce(((e, n) => Math.max(e, (bs(n) ? n.priority : 0) + 1)), 0))
          }
        };

      function ru(e) {
        return !1 !== e.idle
      }

      function ou(e) {
        return !e.size || Array.from(e).every(ru)
      }

      function iu(e) {
        e.idle || (e.idle = !0, ni(Sa(e), (e => {
          e.done = !0
        })), ea(e, {
          type: "idle",
          parent: e
        }))
      }
      Zo.assign({
        createStringInterpolator: ya,
        to: (e, n) => new tu(e, n)
      }), vi.advance;
      var au = t(44853),
        su = /^--/;

      function uu(e, n) {
        return null == n || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || su.test(e) || du.hasOwnProperty(e) && du[e] ? ("" + n).trim() : n + "px"
      }
      var lu = {},
        du = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        cu = ["Webkit", "Ms", "Moz", "O"];
      du = Object.keys(du).reduce(((e, n) => (cu.forEach((t => e[((e, n) => e + n.charAt(0).toUpperCase() + n.substring(1))(t, n)] = e[n])), e)), du);
      var fu = /^(matrix|translate|scale|rotate|skew)/,
        pu = /^(translate)/,
        hu = /^(rotate|skew)/,
        yu = (e, n) => Jo.num(e) && 0 !== e ? e + n : e,
        Au = (e, n) => Jo.arr(e) ? e.every((e => Au(e, n))) : Jo.num(e) ? e === n : parseFloat(e) === n,
        vu = class extends Ra {
          constructor({
            x: e,
            y: n,
            z: t,
            ...r
          }) {
            const o = [],
              i = [];
            (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((e => [`translate3d(${e.map((e=>yu(e,"px"))).join(",")})`, Au(e, 0)]))), ti(r, ((e, n) => {
              if ("transform" === n) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (fu.test(n)) {
                if (delete r[n], Jo.und(e)) return;
                const t = pu.test(n) ? "px" : hu.test(n) ? "deg" : "";
                o.push(ri(e)), i.push("rotate3d" === n ? ([e, n, r, o]) => [`rotate3d(${e},${n},${r},${yu(o,t)})`, Au(o, 0)] : e => [`${n}(${e.map((e=>yu(e,t))).join(",")})`, Au(e, n.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new mu(o, i)), super(r)
          }
        },
        mu = class extends na {
          constructor(e, n) {
            super(), this.inputs = e, this.transforms = n, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              n = !0;
            return ni(this.inputs, ((t, r) => {
              const o = Qi(t[0]),
                [i, a] = this.transforms[r](Jo.arr(o) ? o : t.map(Qi));
              e += " " + i, n = n && a
            })), n ? "none" : e
          }
          observerAdded(e) {
            1 == e && ni(this.inputs, (e => ni(e, (e => Zi(e) && ra(e, this)))))
          }
          observerRemoved(e) {
            0 == e && ni(this.inputs, (e => ni(e, (e => Zi(e) && oa(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ea(this, e)
          }
        };
      Zo.assign({
        batchedUpdates: au.unstable_batchedUpdates,
        createStringInterpolator: ya,
        colors: _i
      });
      var bu = Fa(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, n) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const t = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
              className: r,
              style: o,
              children: i,
              scrollTop: a,
              scrollLeft: s,
              viewBox: u,
              ...l
            } = n,
            d = Object.values(l),
            c = Object.keys(l).map((n => t || e.hasAttribute(n) ? n : lu[n] || (lu[n] = n.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const n in o)
            if (o.hasOwnProperty(n)) {
              const t = uu(n, o[n]);
              su.test(n) ? e.style.setProperty(n, t) : e.style[n] = t
            } c.forEach(((n, t) => {
            e.setAttribute(n, d[t])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== u && e.setAttribute("viewBox", u)
        },
        createAnimatedStyle: e => new vu(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: n,
          ...t
        }) => t
      }).animated;
      const gu = (e, n, t) => {
          if (e > t) {
            const n = e - t;
            return t + 2 * (n > 0 ? Math.sqrt(n) : -Math.sqrt(-n))
          }
          if (e < n) {
            const t = e - n;
            return n + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
          }
          return e
        },
        Cu = e => {
          const n = (e, n, t) => {
            t(e, n) && (e = n)
          };
          return [...e.children].reduce(((e, t) => {
            const r = t.getBoundingClientRect();
            return e ? (n(e.top, r.top, ((e, n) => e < n)), n(e.bottom, r.bottom, ((e, n) => e > n)), n(e.left, r.left, ((e, n) => e < n)), n(e.right, r.right, ((e, n) => e > n)), n(e.height, e.bottom - e.top, (() => !0)), n(e.width, e.right - e.left, (() => !0)), n(e.x, e.left, (() => !0)), n(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        _u = ([e, n], t) => {
          const {
            a: r
          } = new DOMMatrix(t.style.transform), o = Cu(t), i = o.width / r, a = 100 * wu(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * wu(n, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        Eu = (e, n, t, r) => {
          let o = t[0],
            i = t[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, u = Cu(e), l = n.getBoundingClientRect(), d = u.width / a / 2, c = l.width / 2, f = d * s > c ? d * s - c : 0, p = u.height / a / 2, h = l.height / 2, y = p * s > h ? p * s - h : 0, A = -o > f, v = o > f, m = i > y, b = -i > y;
          return A && !v ? o = -f : v && !A && (o = f), m && !b ? i = y : b && !m && (i = -y), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: y
          }
        },
        wu = (e, n, t) => Math.min(Math.max(e, n), t),
        ku = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        Bu = os,
        xu = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        };
      var Pu = t(59509),
        Tu = {};
      Tu.styleTagTransform = _(), Tu.setAttributes = m(), Tu.insert = A().bind(null, "head"), Tu.domAPI = h(), Tu.insertStyleElement = g(), f()(Pu.A, Tu), Pu.A && Pu.A.locals && Pu.A.locals;
      const Su = ({
        children: e,
        containerRef: n,
        contentRef: t,
        minZoomLevel: r,
        maxZoomLevel: o,
        eventHandlers: a,
        enabled: u,
        animation: l
      }) => {
        (({
          containerRef: e,
          contentRef: n
        }) => {
          const t = e => {
            e.preventDefault(), e.nativeEvent?.preventDefault()
          };
          (0, s.useEffect)((() => (document.addEventListener("gesturestart", t), document.addEventListener("gesturechange", t), n.current?.addEventListener("dragstart", t), n.current?.addEventListener("click", t), e.current?.addEventListener("dragstart", t), e.current?.addEventListener("click", t), () => {
            document.removeEventListener("gesturestart", t), document.removeEventListener("gesturechange", t), n.current?.removeEventListener("dragstart", t), n.current?.removeEventListener("click", t), e.current?.removeEventListener("dragstart", t), e.current?.removeEventListener("click", t)
          })), [e.current, n.current])
        })({
          containerRef: n,
          contentRef: t
        }), jo({
          onDrag: a.onDrag,
          onDragEnd: a.onDragEnd,
          onPinch: a.onPinch,
          onPinchEnd: a.onPinchEnd,
          onWheel: a.onWheel,
          onWheelEnd: a.onWheelEnd
        }, {
          enabled: !0,
          target: n,
          drag: {
            filterTaps: !0
          },
          pinch: {
            enabled: u,
            scaleBounds: {
              min: r / 100,
              max: o / 100
            }
          },
          wheel: {
            enabled: u
          },
          eventOptions: {
            passive: !1
          }
        });
        const d = {
          touchAction: "none",
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none"
        };
        return (0, i.jsx)("div", {
          ref: n,
          className: "foundry_148vt480",
          style: d,
          children: (0, i.jsx)(bu.div, {
            ref: t,
            className: "foundry_148vt481",
            style: {
              ...l,
              ...d,
              width: "100%",
              height: "100%"
            },
            children: e
          })
        })
      };
      var ju, Ou, Nu, Lu, Ru = t(91299);

      function Du(e) {
        return e.type === Ou.literal
      }

      function Mu(e) {
        return e.type === Ou.argument
      }

      function Iu(e) {
        return e.type === Ou.number
      }

      function Hu(e) {
        return e.type === Ou.date
      }

      function zu(e) {
        return e.type === Ou.time
      }

      function qu(e) {
        return e.type === Ou.select
      }

      function Fu(e) {
        return e.type === Ou.plural
      }

      function Uu(e) {
        return e.type === Ou.pound
      }

      function Vu(e) {
        return e.type === Ou.tag
      }

      function Gu(e) {
        return !(!e || "object" != typeof e || e.type !== Nu.number)
      }

      function Wu(e) {
        return !(!e || "object" != typeof e || e.type !== Nu.dateTime)
      }(Lu = ju || (ju = {}))[Lu.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Lu[Lu.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Lu[Lu.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Lu[Lu.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Lu[Lu.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Lu[Lu.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Lu[Lu.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Lu[Lu.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Lu[Lu.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Lu[Lu.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Lu[Lu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Lu[Lu.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Lu[Lu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Lu[Lu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Lu[Lu.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Lu[Lu.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Lu[Lu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Lu[Lu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Lu[Lu.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Lu[Lu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Lu[Lu.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Lu[Lu.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Lu[Lu.INVALID_TAG = 23] = "INVALID_TAG", Lu[Lu.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Lu[Lu.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Lu[Lu.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Ou || (Ou = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Nu || (Nu = {}));
      var Ku = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Xu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function $u(e) {
        var n = {};
        return e.replace(Xu, (function(e) {
          var t = e.length;
          switch (e[0]) {
            case "G":
              n.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
              break;
            case "y":
              n.year = 2 === t ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              n.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              n.day = ["numeric", "2-digit"][t - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              n.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
              break;
            case "e":
              if (t < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              n.weekday = ["short", "long", "narrow", "short"][t - 4];
              break;
            case "c":
              if (t < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              n.weekday = ["short", "long", "narrow", "short"][t - 4];
              break;
            case "a":
              n.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              n.hourCycle = "h12", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "H":
              n.hourCycle = "h23", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "K":
              n.hourCycle = "h11", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "k":
              n.hourCycle = "h24", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              n.minute = ["numeric", "2-digit"][t - 1];
              break;
            case "s":
              n.second = ["numeric", "2-digit"][t - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              n.timeZoneName = t < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), n
      }
      var Yu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Zu = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Qu = /^(@+)?(\+|#+)?[rs]?$/g,
        Ju = /(\*)(0+)|(#+)(0+)|(0+)/g,
        el = /^(0+)$/;

      function nl(e) {
        var n = {};
        return "r" === e[e.length - 1] ? n.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (n.roundingPriority = "lessPrecision"), e.replace(Qu, (function(e, t, r) {
          return "string" != typeof r ? (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length) : "+" === r ? n.minimumSignificantDigits = t.length : "#" === t[0] ? n.maximumSignificantDigits = t.length : (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
        })), n
      }

      function tl(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function rl(e) {
        var n;
        if ("E" === e[0] && "E" === e[1] ? (n = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (n = {
            notation: "scientific"
          }, e = e.slice(1)), n) {
          var t = e.slice(0, 2);
          if ("+!" === t ? (n.signDisplay = "always", e = e.slice(2)) : "+?" === t && (n.signDisplay = "exceptZero", e = e.slice(2)), !el.test(e)) throw new Error("Malformed concise eng/scientific notation");
          n.minimumIntegerDigits = e.length
        }
        return n
      }

      function ol(e) {
        return tl(e) || {}
      }

      function il(e) {
        for (var n = {}, t = 0, r = e; t < r.length; t++) {
          var o = r[t];
          switch (o.stem) {
            case "percent":
            case "%":
              n.style = "percent";
              continue;
            case "%x100":
              n.style = "percent", n.scale = 100;
              continue;
            case "currency":
              n.style = "currency", n.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              n.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              n.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              n.style = "unit", n.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              n.notation = "compact", n.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              n.notation = "compact", n.compactDisplay = "long";
              continue;
            case "scientific":
              n = (0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, n), {
                notation: "scientific"
              }), o.options.reduce((function(e, n) {
                return (0, Ru.__assign)((0, Ru.__assign)({}, e), ol(n))
              }), {}));
              continue;
            case "engineering":
              n = (0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, n), {
                notation: "engineering"
              }), o.options.reduce((function(e, n) {
                return (0, Ru.__assign)((0, Ru.__assign)({}, e), ol(n))
              }), {}));
              continue;
            case "notation-simple":
              n.notation = "standard";
              continue;
            case "unit-width-narrow":
              n.currencyDisplay = "narrowSymbol", n.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              n.currencyDisplay = "code", n.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              n.currencyDisplay = "name", n.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              n.currencyDisplay = "symbol";
              continue;
            case "scale":
              n.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              n.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              n.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              n.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              n.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              n.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              n.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              n.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(Ju, (function(e, t, r, o, i, a) {
                if (t) n.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (el.test(o.stem)) n.minimumIntegerDigits = o.stem.length;
          else if (Zu.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Zu, (function(e, t, r, o, i, a) {
              return "*" === r ? n.minimumFractionDigits = t.length : o && "#" === o[0] ? n.maximumFractionDigits = o.length : i && a ? (n.minimumFractionDigits = i.length, n.maximumFractionDigits = i.length + a.length) : (n.minimumFractionDigits = t.length, n.maximumFractionDigits = t.length), ""
            }));
            var i = o.options[0];
            "w" === i ? n = (0, Ru.__assign)((0, Ru.__assign)({}, n), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (n = (0, Ru.__assign)((0, Ru.__assign)({}, n), nl(i)))
          } else if (Qu.test(o.stem)) n = (0, Ru.__assign)((0, Ru.__assign)({}, n), nl(o.stem));
          else {
            var a = tl(o.stem);
            a && (n = (0, Ru.__assign)((0, Ru.__assign)({}, n), a));
            var s = rl(o.stem);
            s && (n = (0, Ru.__assign)((0, Ru.__assign)({}, n), s))
          }
        }
        return n
      }
      var al, sl = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["H", "hB", "h", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["H", "hB", "h", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["H", "h", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["H", "h", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["H", "h", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function ul(e) {
        var n = e.hourCycle;
        if (void 0 === n && e.hourCycles && e.hourCycles.length && (n = e.hourCycles[0]), n) switch (n) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var t, r = e.language;
        return "root" !== r && (t = e.maximize().region), (sl[t || ""] || sl[r || ""] || sl["".concat(r, "-001")] || sl["001"])[0]
      }
      var ll = new RegExp("^".concat(Ku.source, "*")),
        dl = new RegExp("".concat(Ku.source, "*$"));

      function cl(e, n) {
        return {
          start: e,
          end: n
        }
      }
      var fl = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        pl = !!String.fromCodePoint,
        hl = !!Object.fromEntries,
        yl = !!String.prototype.codePointAt,
        Al = !!String.prototype.trimStart,
        vl = !!String.prototype.trimEnd,
        ml = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        bl = !0;
      try {
        bl = "a" === (null === (al = xl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === al ? void 0 : al[0])
      } catch (e) {
        bl = !1
      }
      var gl, Cl = fl ? function(e, n, t) {
          return e.startsWith(n, t)
        } : function(e, n, t) {
          return e.slice(t, t + n.length) === n
        },
        _l = pl ? String.fromCodePoint : function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          for (var t, r = "", o = e.length, i = 0; o > i;) {
            if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
            r += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
          }
          return r
        },
        El = hl ? Object.fromEntries : function(e) {
          for (var n = {}, t = 0, r = e; t < r.length; t++) {
            var o = r[t],
              i = o[0],
              a = o[1];
            n[i] = a
          }
          return n
        },
        wl = yl ? function(e, n) {
          return e.codePointAt(n)
        } : function(e, n) {
          var t = e.length;
          if (!(n < 0 || n >= t)) {
            var r, o = e.charCodeAt(n);
            return o < 55296 || o > 56319 || n + 1 === t || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        kl = Al ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ll, "")
        },
        Bl = vl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(dl, "")
        };

      function xl(e, n) {
        return new RegExp(e, n)
      }
      if (bl) {
        var Pl = xl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        gl = function(e, n) {
          var t;
          return Pl.lastIndex = n, null !== (t = Pl.exec(e)[1]) && void 0 !== t ? t : ""
        }
      } else gl = function(e, n) {
        for (var t = [];;) {
          var r = wl(e, n);
          if (void 0 === r || jl(r) || Ol(r)) break;
          t.push(r), n += r >= 65536 ? 2 : 1
        }
        return _l.apply(void 0, t)
      };
      var Tl = function() {
        function e(e, n) {
          void 0 === n && (n = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, n, t) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, t)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== n && "selectordinal" !== n) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (t) break;
                  return this.error(ju.UNMATCHED_CLOSING_TAG, cl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Sl(this.peek() || 0)) {
                  if ((i = this.parseTag(e, n)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, n)).err) return i;
                  r.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: Ou.pound,
                  location: cl(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, n) {
          var t = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Ou.literal,
              value: "<".concat(r, "/>"),
              location: cl(t, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, n, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Sl(this.char())) return this.error(ju.INVALID_TAG, cl(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(ju.UNMATCHED_CLOSING_TAG, cl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ou.tag,
                  value: r,
                  children: i,
                  location: cl(t, this.clonePosition())
                },
                err: null
              } : this.error(ju.INVALID_TAG, cl(a, this.clonePosition())))
            }
            return this.error(ju.UNCLOSED_TAG, cl(t, this.clonePosition()))
          }
          return this.error(ju.INVALID_TAG, cl(t, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, n = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(n, this.offset())
        }, e.prototype.parseLiteral = function(e, n) {
          for (var t = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(n);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, n);
              if (i) r += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var s = cl(t, this.clonePosition());
          return {
            val: {
              type: Ou.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Sl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var n = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var t = this.char();
            if (39 === t) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              n.push(39), this.bump()
            } else n.push(t);
            this.bump()
          }
          return _l.apply(void 0, n)
        }, e.prototype.tryParseUnquoted = function(e, n) {
          if (this.isEOF()) return null;
          var t = this.char();
          return 60 === t || 123 === t || 35 === t && ("plural" === n || "selectordinal" === n) || 125 === t && e > 0 ? null : (this.bump(), _l(t))
        }, e.prototype.parseArgument = function(e, n) {
          var t = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ju.EXPECT_ARGUMENT_CLOSING_BRACE, cl(t, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ju.EMPTY_ARGUMENT, cl(t, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(ju.MALFORMED_ARGUMENT, cl(t, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ju.EXPECT_ARGUMENT_CLOSING_BRACE, cl(t, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ou.argument,
                  value: r,
                  location: cl(t, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ju.EXPECT_ARGUMENT_CLOSING_BRACE, cl(t, this.clonePosition())) : this.parseArgumentOptions(e, n, r, t);
            default:
              return this.error(ju.MALFORMED_ARGUMENT, cl(t, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            n = this.offset(),
            t = gl(this.message, n),
            r = n + t.length;
          return this.bumpTo(r), {
            value: t,
            location: cl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, n, t, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(ju.EXPECT_ARGUMENT_TYPE, cl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var u = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var l = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (p = Bl(v.val)).length) return this.error(ju.EXPECT_ARGUMENT_STYLE, cl(this.clonePosition(), this.clonePosition()));
                u = {
                  style: p,
                  styleLocation: cl(l, this.clonePosition())
                }
              }
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var d = cl(r, this.clonePosition());
              if (u && Cl(null == u ? void 0 : u.style, "::", 0)) {
                var c = kl(u.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(c, u.styleLocation)).err ? v : {
                  val: {
                    type: Ou.number,
                    value: t,
                    location: d,
                    style: v.val
                  },
                  err: null
                };
                if (0 === c.length) return this.error(ju.EXPECT_DATE_TIME_SKELETON, d);
                var f = c;
                this.locale && (f = function(e, n) {
                  for (var t = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        u = ul(n);
                      for ("H" != u && "k" != u || (s = 0); s-- > 0;) t += "a";
                      for (; a-- > 0;) t = u + t
                    } else t += "J" === o ? "H" : o
                  }
                  return t
                }(c, this.locale));
                var p = {
                  type: Nu.dateTime,
                  pattern: f,
                  location: u.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? $u(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Ou.date : Ou.time,
                    value: t,
                    location: d,
                    style: p
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Ou.number : "date" === a ? Ou.date : Ou.time,
                  value: t,
                  location: d,
                  style: null !== (o = null == u ? void 0 : u.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var h = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ju.EXPECT_SELECT_ARGUMENT_OPTIONS, cl(h, (0, Ru.__assign)({}, h)));
              this.bumpSpace();
              var y = this.parseIdentifierIfPossible(),
                A = 0;
              if ("select" !== a && "offset" === y.value) {
                if (!this.bumpIf(":")) return this.error(ju.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, cl(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(ju.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ju.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), y = this.parseIdentifierIfPossible(), A = v.val
              }
              var m, b = this.tryParsePluralOrSelectOptions(e, a, n, y);
              if (b.err) return b;
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var g = cl(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Ou.select,
                  value: t,
                  options: El(b.val),
                  location: g
                },
                err: null
              } : {
                val: {
                  type: Ou.plural,
                  value: t,
                  options: El(b.val),
                  offset: A,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: g
                },
                err: null
              };
            default:
              return this.error(ju.INVALID_ARGUMENT_TYPE, cl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ju.EXPECT_ARGUMENT_CLOSING_BRACE, cl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, n = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var t = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ju.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, cl(t, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(n.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, n) {
          var t = [];
          try {
            t = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var n = [], t = 0, r = e.split(Yu).filter((function(e) {
                  return e.length > 0
                })); t < r.length; t++) {
                var o = r[t].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], a = o.slice(1), s = 0, u = a; s < u.length; s++)
                  if (0 === u[s].length) throw new Error("Invalid number skeleton");
                n.push({
                  stem: i,
                  options: a
                })
              }
              return n
            }(e)
          } catch (e) {
            return this.error(ju.INVALID_NUMBER_SKELETON, n)
          }
          return {
            val: {
              type: Nu.number,
              tokens: t,
              location: n,
              parsedOptions: this.shouldParseSkeletons ? il(t) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, n, t, r) {
          for (var o, i = !1, a = [], s = new Set, u = r.value, l = r.location;;) {
            if (0 === u.length) {
              var d = this.clonePosition();
              if ("select" === n || !this.bumpIf("=")) break;
              var c = this.tryParseDecimalInteger(ju.EXPECT_PLURAL_ARGUMENT_SELECTOR, ju.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (c.err) return c;
              l = cl(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset())
            }
            if (s.has(u)) return this.error("select" === n ? ju.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ju.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === u && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === n ? ju.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ju.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, cl(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, n, t);
            if (p.err) return p;
            var h = this.tryParseArgumentClose(f);
            if (h.err) return h;
            a.push([u, {
              value: p.val,
              location: cl(f, this.clonePosition())
            }]), s.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, l = o.location
          }
          return 0 === a.length ? this.error("select" === n ? ju.EXPECT_SELECT_ARGUMENT_SELECTOR : ju.EXPECT_PLURAL_ARGUMENT_SELECTOR, cl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ju.MISSING_OTHER_CLAUSE, cl(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, n) {
          var t = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (t = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = cl(r, this.clonePosition());
          return o ? ml(i *= t) ? {
            val: i,
            err: null
          } : this.error(n, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var n = wl(this.message, e);
          if (void 0 === n) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return n
        }, e.prototype.error = function(e, n) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: n
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (Cl(this.message, e, this.offset())) {
            for (var n = 0; n < e.length; n++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var n = this.offset(),
            t = this.message.indexOf(e, n);
          return t >= 0 ? (this.bumpTo(t), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var n = this.offset();
            if (n === e) break;
            if (n > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && jl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            n = this.offset(),
            t = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
          return null != t ? t : null
        }, e
      }();

      function Sl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function jl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ol(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Nl(e) {
        e.forEach((function(e) {
          if (delete e.location, qu(e) || Fu(e))
            for (var n in e.options) delete e.options[n].location, Nl(e.options[n].value);
          else Iu(e) && Gu(e.style) || (Hu(e) || zu(e)) && Wu(e.style) ? delete e.style.location : Vu(e) && Nl(e.children)
        }))
      }

      function Ll(e, n) {
        void 0 === n && (n = {}), n = (0, Ru.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, n);
        var t = new Tl(e, n).parse();
        if (t.err) {
          var r = SyntaxError(ju[t.err.kind]);
          throw r.location = t.err.location, r.originalMessage = t.err.message, r
        }
        return (null == n ? void 0 : n.captureLocation) || Nl(t.val), t.val
      }

      function Rl(e, n) {
        var t = n && n.cache ? n.cache : Ul,
          r = n && n.serializer ? n.serializer : zl;
        return (n && n.strategy ? n.strategy : Hl)(e, {
          cache: t,
          serializer: r
        })
      }

      function Dl(e, n, t, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : t(r),
          a = n.get(i);
        return void 0 === a && (a = e.call(this, r), n.set(i, a)), a
      }

      function Ml(e, n, t) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = t(r),
          i = n.get(o);
        return void 0 === i && (i = e.apply(this, r), n.set(o, i)), i
      }

      function Il(e, n, t, r, o) {
        return t.bind(n, e, r, o)
      }

      function Hl(e, n) {
        return Il(e, this, 1 === e.length ? Dl : Ml, n.cache.create(), n.serializer)
      }
      var zl = function() {
        return JSON.stringify(arguments)
      };

      function ql() {
        this.cache = Object.create(null)
      }
      ql.prototype.get = function(e) {
        return this.cache[e]
      }, ql.prototype.set = function(e, n) {
        this.cache[e] = n
      };
      var Fl, Ul = {
          create: function() {
            return new ql
          }
        },
        Vl = {
          variadic: function(e, n) {
            return Il(e, this, Ml, n.cache.create(), n.serializer)
          },
          monadic: function(e, n) {
            return Il(e, this, Dl, n.cache.create(), n.serializer)
          }
        };
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(Fl || (Fl = {}));
      var Gl, Wl = function(e) {
          function n(n, t, r) {
            var o = e.call(this, n) || this;
            return o.code = t, o.originalMessage = r, o
          }
          return (0, Ru.__extends)(n, e), n.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, n
        }(Error),
        Kl = function(e) {
          function n(n, t, r, o) {
            return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(t, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Fl.INVALID_VALUE, o) || this
          }
          return (0, Ru.__extends)(n, e), n
        }(Wl),
        Xl = function(e) {
          function n(n, t, r) {
            return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(t), Fl.INVALID_VALUE, r) || this
          }
          return (0, Ru.__extends)(n, e), n
        }(Wl),
        $l = function(e) {
          function n(n, t) {
            return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(t, '"'), Fl.MISSING_VALUE, t) || this
          }
          return (0, Ru.__extends)(n, e), n
        }(Wl);

      function Yl(e) {
        return "function" == typeof e
      }

      function Zl(e, n, t, r, o, i, a) {
        if (1 === e.length && Du(e[0])) return [{
          type: Gl.literal,
          value: e[0].value
        }];
        for (var s = [], u = 0, l = e; u < l.length; u++) {
          var d = l[u];
          if (Du(d)) s.push({
            type: Gl.literal,
            value: d.value
          });
          else if (Uu(d)) "number" == typeof i && s.push({
            type: Gl.literal,
            value: t.getNumberFormat(n).format(i)
          });
          else {
            var c = d.value;
            if (!o || !(c in o)) throw new $l(c, a);
            var f = o[c];
            if (Mu(d)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? Gl.literal : Gl.object,
              value: f
            });
            else if (Hu(d)) {
              var p = "string" == typeof d.style ? r.date[d.style] : Wu(d.style) ? d.style.parsedOptions : void 0;
              s.push({
                type: Gl.literal,
                value: t.getDateTimeFormat(n, p).format(f)
              })
            } else if (zu(d)) p = "string" == typeof d.style ? r.time[d.style] : Wu(d.style) ? d.style.parsedOptions : r.time.medium, s.push({
              type: Gl.literal,
              value: t.getDateTimeFormat(n, p).format(f)
            });
            else if (Iu(d))(p = "string" == typeof d.style ? r.number[d.style] : Gu(d.style) ? d.style.parsedOptions : void 0) && p.scale && (f *= p.scale || 1), s.push({
              type: Gl.literal,
              value: t.getNumberFormat(n, p).format(f)
            });
            else {
              if (Vu(d)) {
                var h = d.children,
                  y = d.value,
                  A = o[y];
                if (!Yl(A)) throw new Xl(y, "function", a);
                var v = A(Zl(h, n, t, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? Gl.literal : Gl.object,
                    value: e
                  }
                })))
              }
              if (qu(d)) {
                if (!(m = d.options[f] || d.options.other)) throw new Kl(d.value, f, Object.keys(d.options), a);
                s.push.apply(s, Zl(m.value, n, t, r, o))
              } else if (Fu(d)) {
                var m;
                if (!(m = d.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Wl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Fl.MISSING_INTL_API, a);
                  var b = t.getPluralRules(n, {
                    type: d.pluralType
                  }).select(f - (d.offset || 0));
                  m = d.options[b] || d.options.other
                }
                if (!m) throw new Kl(d.value, f, Object.keys(d.options), a);
                s.push.apply(s, Zl(m.value, n, t, r, o, f - (d.offset || 0)))
              }
            }
          }
        }
        return (g = s).length < 2 ? g : g.reduce((function(e, n) {
          var t = e[e.length - 1];
          return t && t.type === Gl.literal && n.type === Gl.literal ? t.value += n.value : e.push(n), e
        }), []);
        var g
      }

      function Ql(e) {
        return {
          create: function() {
            return {
              get: function(n) {
                return e[n]
              },
              set: function(n, t) {
                e[n] = t
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Gl || (Gl = {}));
      var Jl = function() {
        function e(n, t, r, o) {
          var i, a, s, u = this;
          if (void 0 === t && (t = e.defaultLocale), this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var n = u.formatToParts(e);
              if (1 === n.length) return n[0].value;
              var t = n.reduce((function(e, n) {
                return e.length && n.type === Gl.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += n.value : e.push(n.value), e
              }), []);
              return t.length <= 1 ? t[0] || "" : t
            }, this.formatToParts = function(e) {
              return Zl(u.ast, u.locales, u.formatters, u.formats, e, void 0, u.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = u.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(u.locales)[0]
              }
            }, this.getAst = function() {
              return u.ast
            }, this.locales = t, this.resolvedLocale = e.resolveLocale(t), "string" == typeof n) {
            if (this.message = n, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var l = o || {},
              d = (l.formatters, (0, Ru.__rest)(l, ["formatters"]));
            this.ast = e.__parse(n, (0, Ru.__assign)((0, Ru.__assign)({}, d), {
              locale: this.resolvedLocale
            }))
          } else this.ast = n;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, n) {
            return e[n] = function(e, n) {
              return n ? (0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, e || {}), n || {}), Object.keys(e).reduce((function(t, r) {
                return t[r] = (0, Ru.__assign)((0, Ru.__assign)({}, e[r]), n[r] || {}), t
              }), {})) : e
            }(a[n], s[n]), e
          }), (0, Ru.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Rl((function() {
              for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Ru.__spreadArray)([void 0], n, !1)))
            }), {
              cache: Ql(i.number),
              strategy: Vl.variadic
            }),
            getDateTimeFormat: Rl((function() {
              for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ru.__spreadArray)([void 0], n, !1)))
            }), {
              cache: Ql(i.dateTime),
              strategy: Vl.variadic
            }),
            getPluralRules: Rl((function() {
              for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Ru.__spreadArray)([void 0], n, !1)))
            }), {
              cache: Ql(i.pluralRules),
              strategy: Vl.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var n = Intl.NumberFormat.supportedLocalesOf(e);
            return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = Ll, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }();

      function ed(e, n) {
        var t = n && n.cache ? n.cache : ud,
          r = n && n.serializer ? n.serializer : id;
        return (n && n.strategy ? n.strategy : od)(e, {
          cache: t,
          serializer: r
        })
      }

      function nd(e, n, t, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : t(r),
          a = n.get(i);
        return void 0 === a && (a = e.call(this, r), n.set(i, a)), a
      }

      function td(e, n, t) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = t(r),
          i = n.get(o);
        return void 0 === i && (i = e.apply(this, r), n.set(o, i)), i
      }

      function rd(e, n, t, r, o) {
        return t.bind(n, e, r, o)
      }

      function od(e, n) {
        return rd(e, this, 1 === e.length ? nd : td, n.cache.create(), n.serializer)
      }
      var id = function() {
        return JSON.stringify(arguments)
      };

      function ad() {
        this.cache = Object.create(null)
      }
      ad.prototype.get = function(e) {
        return this.cache[e]
      }, ad.prototype.set = function(e, n) {
        this.cache[e] = n
      };
      var sd, ud = {
          create: function() {
            return new ad
          }
        },
        ld = {
          variadic: function(e, n) {
            return rd(e, this, td, n.cache.create(), n.serializer)
          },
          monadic: function(e, n) {
            return rd(e, this, nd, n.cache.create(), n.serializer)
          }
        };
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(sd || (sd = {}));
      var dd = function(e) {
          function n(t, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(t, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, n), i
          }
          return (0, Ru.__extends)(n, e), n
        }(Error),
        cd = function(e) {
          function n(n, t) {
            return e.call(this, sd.UNSUPPORTED_FORMATTER, n, t) || this
          }
          return (0, Ru.__extends)(n, e), n
        }(dd),
        fd = function(e) {
          function n(n, t) {
            return e.call(this, sd.INVALID_CONFIG, n, t) || this
          }
          return (0, Ru.__extends)(n, e), n
        }(dd),
        pd = function(e) {
          function n(n, t) {
            return e.call(this, sd.MISSING_DATA, n, t) || this
          }
          return (0, Ru.__extends)(n, e), n
        }(dd),
        hd = function(e) {
          function n(n, t, r) {
            var o = e.call(this, sd.FORMAT_ERROR, "".concat(n, "\nLocale: ").concat(t, "\n"), r) || this;
            return o.locale = t, o
          }
          return (0, Ru.__extends)(n, e), n
        }(dd),
        yd = function(e) {
          function n(n, t, r, o) {
            var i = e.call(this, "".concat(n, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), t, o) || this;
            return i.descriptor = r, i.locale = t, i
          }
          return (0, Ru.__extends)(n, e), n
        }(hd),
        Ad = function(e) {
          function n(n, t) {
            var r = e.call(this, sd.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(t, '", using ').concat(n.defaultMessage ? "default message (".concat("string" == typeof n.defaultMessage ? n.defaultMessage : n.defaultMessage.map((function(e) {
              var n;
              return null !== (n = e.value) && void 0 !== n ? n : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = n, r
          }
          return (0, Ru.__extends)(n, e), n
        }(dd);

      function vd(e, n, t) {
        return void 0 === t && (t = {}), n.reduce((function(n, r) {
          return r in e ? n[r] = e[r] : r in t && (n[r] = t[r]), n
        }), {})
      }
      var md = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function bd(e) {
        return {
          create: function() {
            return {
              get: function(n) {
                return e[n]
              },
              set: function(n, t) {
                e[n] = t
              }
            }
          }
        }
      }

      function gd(e, n, t, r) {
        var o, i = e && e[n];
        if (i && (o = i[t]), o) return o;
        r(new cd("No ".concat(n, " format named: ").concat(t)))
      }

      function Cd(e) {
        ! function(e, n, t) {
          if (void 0 === t && (t = Error), !e) throw new t("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var _d = (0, Ru.__assign)((0, Ru.__assign)({}, md), {
        textComponent: s.Fragment
      });
      t(62607);
      var Ed, wd, kd, Bd = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        xd = (Bd.Consumer, Bd.Provider),
        Pd = Bd;
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ed || (Ed = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(wd || (wd = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(kd || (kd = {}));
      var Td = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Sd = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function jd(e) {
        var n = {};
        return e.replace(Sd, (function(e) {
          var t = e.length;
          switch (e[0]) {
            case "G":
              n.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
              break;
            case "y":
              n.year = 2 === t ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              n.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              n.day = ["numeric", "2-digit"][t - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              n.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
              break;
            case "e":
              if (t < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              n.weekday = ["short", "long", "narrow", "short"][t - 4];
              break;
            case "c":
              if (t < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              n.weekday = ["short", "long", "narrow", "short"][t - 4];
              break;
            case "a":
              n.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              n.hourCycle = "h12", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "H":
              n.hourCycle = "h23", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "K":
              n.hourCycle = "h11", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "k":
              n.hourCycle = "h24", n.hour = ["numeric", "2-digit"][t - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              n.minute = ["numeric", "2-digit"][t - 1];
              break;
            case "s":
              n.second = ["numeric", "2-digit"][t - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              n.timeZoneName = t < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), n
      }
      var Od = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Nd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ld = /^(@+)?(\+|#+)?[rs]?$/g,
        Rd = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Dd = /^(0+)$/;

      function Md(e) {
        var n = {};
        return "r" === e[e.length - 1] ? n.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (n.roundingPriority = "lessPrecision"), e.replace(Ld, (function(e, t, r) {
          return "string" != typeof r ? (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length) : "+" === r ? n.minimumSignificantDigits = t.length : "#" === t[0] ? n.maximumSignificantDigits = t.length : (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
        })), n
      }

      function Id(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function Hd(e) {
        var n;
        if ("E" === e[0] && "E" === e[1] ? (n = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (n = {
            notation: "scientific"
          }, e = e.slice(1)), n) {
          var t = e.slice(0, 2);
          if ("+!" === t ? (n.signDisplay = "always", e = e.slice(2)) : "+?" === t && (n.signDisplay = "exceptZero", e = e.slice(2)), !Dd.test(e)) throw new Error("Malformed concise eng/scientific notation");
          n.minimumIntegerDigits = e.length
        }
        return n
      }

      function zd(e) {
        return Id(e) || {}
      }

      function qd(e) {
        for (var n = {}, t = 0, r = e; t < r.length; t++) {
          var o = r[t];
          switch (o.stem) {
            case "percent":
            case "%":
              n.style = "percent";
              continue;
            case "%x100":
              n.style = "percent", n.scale = 100;
              continue;
            case "currency":
              n.style = "currency", n.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              n.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              n.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              n.style = "unit", n.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              n.notation = "compact", n.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              n.notation = "compact", n.compactDisplay = "long";
              continue;
            case "scientific":
              n = (0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, n), {
                notation: "scientific"
              }), o.options.reduce((function(e, n) {
                return (0, Ru.__assign)((0, Ru.__assign)({}, e), zd(n))
              }), {}));
              continue;
            case "engineering":
              n = (0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, n), {
                notation: "engineering"
              }), o.options.reduce((function(e, n) {
                return (0, Ru.__assign)((0, Ru.__assign)({}, e), zd(n))
              }), {}));
              continue;
            case "notation-simple":
              n.notation = "standard";
              continue;
            case "unit-width-narrow":
              n.currencyDisplay = "narrowSymbol", n.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              n.currencyDisplay = "code", n.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              n.currencyDisplay = "name", n.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              n.currencyDisplay = "symbol";
              continue;
            case "scale":
              n.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              n.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              n.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              n.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              n.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              n.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              n.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              n.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(Rd, (function(e, t, r, o, i, a) {
                if (t) n.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Dd.test(o.stem)) n.minimumIntegerDigits = o.stem.length;
          else if (Nd.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Nd, (function(e, t, r, o, i, a) {
              return "*" === r ? n.minimumFractionDigits = t.length : o && "#" === o[0] ? n.maximumFractionDigits = o.length : i && a ? (n.minimumFractionDigits = i.length, n.maximumFractionDigits = i.length + a.length) : (n.minimumFractionDigits = t.length, n.maximumFractionDigits = t.length), ""
            }));
            var i = o.options[0];
            "w" === i ? n = (0, Ru.__assign)((0, Ru.__assign)({}, n), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (n = (0, Ru.__assign)((0, Ru.__assign)({}, n), Md(i)))
          } else if (Ld.test(o.stem)) n = (0, Ru.__assign)((0, Ru.__assign)({}, n), Md(o.stem));
          else {
            var a = Id(o.stem);
            a && (n = (0, Ru.__assign)((0, Ru.__assign)({}, n), a));
            var s = Hd(o.stem);
            s && (n = (0, Ru.__assign)((0, Ru.__assign)({}, n), s))
          }
        }
        return n
      }
      var Fd, Ud = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["H", "hB", "h", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["H", "hB", "h", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["H", "h", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["H", "h", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["H", "h", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function Vd(e) {
        var n = e.hourCycle;
        if (void 0 === n && e.hourCycles && e.hourCycles.length && (n = e.hourCycles[0]), n) switch (n) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var t, r = e.language;
        return "root" !== r && (t = e.maximize().region), (Ud[t || ""] || Ud[r || ""] || Ud["".concat(r, "-001")] || Ud["001"])[0]
      }
      var Gd = new RegExp("^".concat(Td.source, "*")),
        Wd = new RegExp("".concat(Td.source, "*$"));

      function Kd(e, n) {
        return {
          start: e,
          end: n
        }
      }
      var Xd = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        $d = !!String.fromCodePoint,
        Yd = !!Object.fromEntries,
        Zd = !!String.prototype.codePointAt,
        Qd = !!String.prototype.trimStart,
        Jd = !!String.prototype.trimEnd,
        ec = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        nc = !0;
      try {
        nc = "a" === (null === (Fd = lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Fd ? void 0 : Fd[0])
      } catch (e) {
        nc = !1
      }
      var tc, rc = Xd ? function(e, n, t) {
          return e.startsWith(n, t)
        } : function(e, n, t) {
          return e.slice(t, t + n.length) === n
        },
        oc = $d ? String.fromCodePoint : function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          for (var t, r = "", o = e.length, i = 0; o > i;) {
            if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
            r += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
          }
          return r
        },
        ic = Yd ? Object.fromEntries : function(e) {
          for (var n = {}, t = 0, r = e; t < r.length; t++) {
            var o = r[t],
              i = o[0],
              a = o[1];
            n[i] = a
          }
          return n
        },
        ac = Zd ? function(e, n) {
          return e.codePointAt(n)
        } : function(e, n) {
          var t = e.length;
          if (!(n < 0 || n >= t)) {
            var r, o = e.charCodeAt(n);
            return o < 55296 || o > 56319 || n + 1 === t || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        sc = Qd ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Gd, "")
        },
        uc = Jd ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Wd, "")
        };

      function lc(e, n) {
        return new RegExp(e, n)
      }
      if (nc) {
        var dc = lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        tc = function(e, n) {
          var t;
          return dc.lastIndex = n, null !== (t = dc.exec(e)[1]) && void 0 !== t ? t : ""
        }
      } else tc = function(e, n) {
        for (var t = [];;) {
          var r = ac(e, n);
          if (void 0 === r || fc(r) || pc(r)) break;
          t.push(r), n += r >= 65536 ? 2 : 1
        }
        return oc.apply(void 0, t)
      };

      function cc(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function fc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function pc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function hc(e, n) {
        return Object.keys(e).reduce((function(t, r) {
          return t[r] = (0, Ru.__assign)({
            timeZone: n
          }, e[r]), t
        }), {})
      }

      function yc(e, n) {
        return Object.keys((0, Ru.__assign)((0, Ru.__assign)({}, e), n)).reduce((function(t, r) {
          return t[r] = (0, Ru.__assign)((0, Ru.__assign)({}, e[r] || {}), n[r] || {}), t
        }), {})
      }

      function Ac(e, n) {
        if (!n) return e;
        var t = Jl.formats;
        return (0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, t), e), {
          date: yc(hc(t.date, n), hc(e.date || {}, n)),
          time: yc(hc(t.time, n), hc(e.time || {}, n))
        })
      }! function() {
        function e(e, n) {
          void 0 === n && (n = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, n, t) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, t)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== n && "selectordinal" !== n) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (t) break;
                  return this.error(Ed.UNMATCHED_CLOSING_TAG, Kd(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && cc(this.peek() || 0)) {
                  if ((i = this.parseTag(e, n)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, n)).err) return i;
                  r.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: wd.pound,
                  location: Kd(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, n) {
          var t = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: wd.literal,
              value: "<".concat(r, "/>"),
              location: Kd(t, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, n, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !cc(this.char())) return this.error(Ed.INVALID_TAG, Kd(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Ed.UNMATCHED_CLOSING_TAG, Kd(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: wd.tag,
                  value: r,
                  children: i,
                  location: Kd(t, this.clonePosition())
                },
                err: null
              } : this.error(Ed.INVALID_TAG, Kd(a, this.clonePosition())))
            }
            return this.error(Ed.UNCLOSED_TAG, Kd(t, this.clonePosition()))
          }
          return this.error(Ed.INVALID_TAG, Kd(t, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, n = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(n, this.offset())
        }, e.prototype.parseLiteral = function(e, n) {
          for (var t = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(n);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, n);
              if (i) r += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var s = Kd(t, this.clonePosition());
          return {
            val: {
              type: wd.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (cc(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var n = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var t = this.char();
            if (39 === t) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              n.push(39), this.bump()
            } else n.push(t);
            this.bump()
          }
          return oc.apply(void 0, n)
        }, e.prototype.tryParseUnquoted = function(e, n) {
          if (this.isEOF()) return null;
          var t = this.char();
          return 60 === t || 123 === t || 35 === t && ("plural" === n || "selectordinal" === n) || 125 === t && e > 0 ? null : (this.bump(), oc(t))
        }, e.prototype.parseArgument = function(e, n) {
          var t = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ed.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(t, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ed.EMPTY_ARGUMENT, Kd(t, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Ed.MALFORMED_ARGUMENT, Kd(t, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ed.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(t, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: wd.argument,
                  value: r,
                  location: Kd(t, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ed.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(t, this.clonePosition())) : this.parseArgumentOptions(e, n, r, t);
            default:
              return this.error(Ed.MALFORMED_ARGUMENT, Kd(t, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            n = this.offset(),
            t = tc(this.message, n),
            r = n + t.length;
          return this.bumpTo(r), {
            value: t,
            location: Kd(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, n, t, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Ed.EXPECT_ARGUMENT_TYPE, Kd(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var u = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var l = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (p = uc(v.val)).length) return this.error(Ed.EXPECT_ARGUMENT_STYLE, Kd(this.clonePosition(), this.clonePosition()));
                u = {
                  style: p,
                  styleLocation: Kd(l, this.clonePosition())
                }
              }
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var d = Kd(r, this.clonePosition());
              if (u && rc(null == u ? void 0 : u.style, "::", 0)) {
                var c = sc(u.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(c, u.styleLocation)).err ? v : {
                  val: {
                    type: wd.number,
                    value: t,
                    location: d,
                    style: v.val
                  },
                  err: null
                };
                if (0 === c.length) return this.error(Ed.EXPECT_DATE_TIME_SKELETON, d);
                var f = c;
                this.locale && (f = function(e, n) {
                  for (var t = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        u = Vd(n);
                      for ("H" != u && "k" != u || (s = 0); s-- > 0;) t += "a";
                      for (; a-- > 0;) t = u + t
                    } else t += "J" === o ? "H" : o
                  }
                  return t
                }(c, this.locale));
                var p = {
                  type: kd.dateTime,
                  pattern: f,
                  location: u.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? jd(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? wd.date : wd.time,
                    value: t,
                    location: d,
                    style: p
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? wd.number : "date" === a ? wd.date : wd.time,
                  value: t,
                  location: d,
                  style: null !== (o = null == u ? void 0 : u.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var h = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ed.EXPECT_SELECT_ARGUMENT_OPTIONS, Kd(h, (0, Ru.__assign)({}, h)));
              this.bumpSpace();
              var y = this.parseIdentifierIfPossible(),
                A = 0;
              if ("select" !== a && "offset" === y.value) {
                if (!this.bumpIf(":")) return this.error(Ed.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Kd(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Ed.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ed.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), y = this.parseIdentifierIfPossible(), A = v.val
              }
              var m, b = this.tryParsePluralOrSelectOptions(e, a, n, y);
              if (b.err) return b;
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var g = Kd(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: wd.select,
                  value: t,
                  options: ic(b.val),
                  location: g
                },
                err: null
              } : {
                val: {
                  type: wd.plural,
                  value: t,
                  options: ic(b.val),
                  offset: A,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: g
                },
                err: null
              };
            default:
              return this.error(Ed.INVALID_ARGUMENT_TYPE, Kd(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ed.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, n = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var t = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ed.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Kd(t, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(n.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, n) {
          var t = [];
          try {
            t = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var n = [], t = 0, r = e.split(Od).filter((function(e) {
                  return e.length > 0
                })); t < r.length; t++) {
                var o = r[t].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], a = o.slice(1), s = 0, u = a; s < u.length; s++)
                  if (0 === u[s].length) throw new Error("Invalid number skeleton");
                n.push({
                  stem: i,
                  options: a
                })
              }
              return n
            }(e)
          } catch (e) {
            return this.error(Ed.INVALID_NUMBER_SKELETON, n)
          }
          return {
            val: {
              type: kd.number,
              tokens: t,
              location: n,
              parsedOptions: this.shouldParseSkeletons ? qd(t) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, n, t, r) {
          for (var o, i = !1, a = [], s = new Set, u = r.value, l = r.location;;) {
            if (0 === u.length) {
              var d = this.clonePosition();
              if ("select" === n || !this.bumpIf("=")) break;
              var c = this.tryParseDecimalInteger(Ed.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ed.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (c.err) return c;
              l = Kd(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset())
            }
            if (s.has(u)) return this.error("select" === n ? Ed.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ed.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === u && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === n ? Ed.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ed.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Kd(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, n, t);
            if (p.err) return p;
            var h = this.tryParseArgumentClose(f);
            if (h.err) return h;
            a.push([u, {
              value: p.val,
              location: Kd(f, this.clonePosition())
            }]), s.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, l = o.location
          }
          return 0 === a.length ? this.error("select" === n ? Ed.EXPECT_SELECT_ARGUMENT_SELECTOR : Ed.EXPECT_PLURAL_ARGUMENT_SELECTOR, Kd(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ed.MISSING_OTHER_CLAUSE, Kd(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, n) {
          var t = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (t = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = Kd(r, this.clonePosition());
          return o ? ec(i *= t) ? {
            val: i,
            err: null
          } : this.error(n, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var n = ac(this.message, e);
          if (void 0 === n) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return n
        }, e.prototype.error = function(e, n) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: n
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (rc(this.message, e, this.offset())) {
            for (var n = 0; n < e.length; n++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var n = this.offset(),
            t = this.message.indexOf(e, n);
          return t >= 0 ? (this.bumpTo(t), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var n = this.offset();
            if (n === e) break;
            if (n > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && fc(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            n = this.offset(),
            t = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
          return null != t ? t : null
        }
      }();
      var vc = function(e, n, t, r, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            u = e.defaultLocale,
            l = e.defaultFormats,
            d = e.fallbackOnEmptyString,
            c = e.onError,
            f = e.timeZone,
            p = e.defaultRichTextElements;
          void 0 === t && (t = {
            id: ""
          });
          var h = t.id,
            y = t.defaultMessage;
          ! function(e, n, t) {
            if (void 0 === t && (t = Error), !e) throw new t("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!h);
          var A = String(h),
            v = s && Object.prototype.hasOwnProperty.call(s, A) && s[A];
          if (Array.isArray(v) && 1 === v.length && v[0].type === wd.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !p) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, Ru.__assign)((0, Ru.__assign)({}, p), r || {}), a = Ac(a, f), l = Ac(l, f), !v) {
            if (!1 === d && "" === v) return v;
            if ((!y || i && i.toLowerCase() !== u.toLowerCase()) && c(new Ad(t, i)), y) try {
              return n.getMessageFormat(y, u, l, o).format(r)
            } catch (e) {
              return c(new yd('Error formatting default message for: "'.concat(A, '", rendering default message verbatim'), i, t, e)), "string" == typeof y ? y : A
            }
            return A
          }
          try {
            return n.getMessageFormat(v, i, a, (0, Ru.__assign)({
              formatters: n
            }, o || {})).format(r)
          } catch (e) {
            c(new yd('Error formatting message: "'.concat(A, '", using ').concat(y ? "default message" : "id", " as fallback."), i, t, e))
          }
          if (y) try {
            return n.getMessageFormat(y, u, l, o).format(r)
          } catch (e) {
            c(new yd('Error formatting the default message for: "'.concat(A, '", rendering message verbatim'), i, t, e))
          }
          return "string" == typeof v ? v : "string" == typeof y ? y : A
        },
        mc = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function bc(e, n, t) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === t && (t = {});
        var a = t.format,
          s = a && gd(o, "number", a, i) || {};
        return n(r, vd(t, mc, s))
      }

      function gc(e, n, t, r) {
        void 0 === r && (r = {});
        try {
          return bc(e, n, r).format(t)
        } catch (n) {
          e.onError(new hd("Error formatting number.", e.locale, n))
        }
        return String(t)
      }

      function Cc(e, n, t, r) {
        void 0 === r && (r = {});
        try {
          return bc(e, n, r).formatToParts(t)
        } catch (n) {
          e.onError(new hd("Error formatting number.", e.locale, n))
        }
        return []
      }
      var _c = ["numeric", "style"];

      function Ec(e, n, t, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Wl('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Fl.MISSING_INTL_API));
        try {
          return function(e, n, t) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === t && (t = {});
            var a = t.format,
              s = !!a && gd(o, "relative", a, i) || {};
            return n(r, vd(t, _c, s))
          }(e, n, o).format(t, r)
        } catch (n) {
          e.onError(new hd("Error formatting relative time.", e.locale, n))
        }
        return String(t)
      }
      var wc = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function kc(e, n, t, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var u = r.format,
          l = (0, Ru.__assign)((0, Ru.__assign)({}, s && {
            timeZone: s
          }), u && gd(i, n, u, a)),
          d = vd(r, wc, l);
        return "time" !== n || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, Ru.__assign)((0, Ru.__assign)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), t(o, d)
      }

      function Bc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return kc(e, "date", n, a).format(s)
        } catch (n) {
          e.onError(new hd("Error formatting date.", e.locale, n))
        }
        return String(s)
      }

      function xc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return kc(e, "time", n, a).format(s)
        } catch (n) {
          e.onError(new hd("Error formatting time.", e.locale, n))
        }
        return String(s)
      }

      function Pc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = t[2],
          s = void 0 === a ? {} : a,
          u = e.timeZone,
          l = e.locale,
          d = e.onError,
          c = vd(s, wc, u ? {
            timeZone: u
          } : {});
        try {
          return n(l, c).formatRange(o, i)
        } catch (n) {
          d(new hd("Error formatting date time range.", e.locale, n))
        }
        return String(o)
      }

      function Tc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return kc(e, "date", n, a).formatToParts(s)
        } catch (n) {
          e.onError(new hd("Error formatting date.", e.locale, n))
        }
        return []
      }

      function Sc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return kc(e, "time", n, a).formatToParts(s)
        } catch (n) {
          e.onError(new hd("Error formatting time.", e.locale, n))
        }
        return []
      }
      var jc = ["type"];

      function Oc(e, n, t, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Wl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Fl.MISSING_INTL_API));
        var a = vd(r, jc);
        try {
          return n(o, a).select(t)
        } catch (e) {
          i(new hd("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Nc = ["type", "style"],
        Lc = Date.now();

      function Rc(e, n, t, r) {
        void 0 === r && (r = {});
        var o = Dc(e, n, t, r).reduce((function(e, n) {
          var t = n.value;
          return "string" != typeof t ? e.push(t) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Dc(e, n, t, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Wl('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Fl.MISSING_INTL_API));
        var a = vd(r, Nc);
        try {
          var s = {},
            u = t.map((function(e, n) {
              if ("object" == typeof e) {
                var t = function(e) {
                  return "".concat(Lc, "_").concat(e, "_").concat(Lc)
                }(n);
                return s[t] = e, t
              }
              return String(e)
            }));
          return n(o, a).formatToParts(u).map((function(e) {
            return "literal" === e.type ? e : (0, Ru.__assign)((0, Ru.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new hd("Error formatting list.", o, e))
        }
        return t
      }
      var Mc = ["style", "type", "fallback", "languageDisplay"];

      function Ic(e, n, t, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Wl('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Fl.MISSING_INTL_API));
        var a = vd(r, Mc);
        try {
          return n(o, a).of(t)
        } catch (e) {
          i(new hd("Error formatting display name.", o, e))
        }
      }

      function Hc(e, n) {
        var t = function(e) {
            void 0 === e && (e = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            });
            var n = Intl.RelativeTimeFormat,
              t = Intl.ListFormat,
              r = Intl.DisplayNames,
              o = ed((function() {
                for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ru.__spreadArray)([void 0], n, !1)))
              }), {
                cache: bd(e.dateTime),
                strategy: ld.variadic
              }),
              i = ed((function() {
                for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Ru.__spreadArray)([void 0], n, !1)))
              }), {
                cache: bd(e.number),
                strategy: ld.variadic
              }),
              a = ed((function() {
                for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Ru.__spreadArray)([void 0], n, !1)))
              }), {
                cache: bd(e.pluralRules),
                strategy: ld.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ed((function(e, n, t, r) {
                return new Jl(e, n, t, (0, Ru.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: bd(e.message),
                strategy: ld.variadic
              }),
              getRelativeTimeFormat: ed((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Ru.__spreadArray)([void 0], e, !1)))
              }), {
                cache: bd(e.relativeTime),
                strategy: ld.variadic
              }),
              getPluralRules: a,
              getListFormat: ed((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, Ru.__spreadArray)([void 0], e, !1)))
              }), {
                cache: bd(e.list),
                strategy: ld.variadic
              }),
              getDisplayNames: ed((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(r.bind.apply(r, (0, Ru.__spreadArray)([void 0], e, !1)))
              }), {
                cache: bd(e.displayNames),
                strategy: ld.variadic
              })
            }
          }(n),
          r = (0, Ru.__assign)((0, Ru.__assign)({}, md), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new pd('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new pd('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new fd('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, Ru.__assign)((0, Ru.__assign)({}, r), {
            formatters: t,
            formatNumber: gc.bind(null, r, t.getNumberFormat),
            formatNumberToParts: Cc.bind(null, r, t.getNumberFormat),
            formatRelativeTime: Ec.bind(null, r, t.getRelativeTimeFormat),
            formatDate: Bc.bind(null, r, t.getDateTimeFormat),
            formatDateToParts: Tc.bind(null, r, t.getDateTimeFormat),
            formatTime: xc.bind(null, r, t.getDateTimeFormat),
            formatDateTimeRange: Pc.bind(null, r, t.getDateTimeFormat),
            formatTimeToParts: Sc.bind(null, r, t.getDateTimeFormat),
            formatPlural: Oc.bind(null, r, t.getPluralRules),
            formatMessage: vc.bind(null, r, t),
            $t: vc.bind(null, r, t),
            formatList: Rc.bind(null, r, t.getListFormat),
            formatListToParts: Dc.bind(null, r, t.getListFormat),
            formatDisplayName: Ic.bind(null, r, t.getDisplayNames)
          })
      }

      function zc(e) {
        return e ? Object.keys(e).reduce((function(n, t) {
          var r, o = e[t];
          return n[t] = Yl(o) ? (r = o, function(e) {
            return r(s.Children.toArray(e))
          }) : o, n
        }), {}) : e
      }
      var qc = function(e, n, t, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = zc(r),
            u = vc.apply(void 0, (0, Ru.__spreadArray)([e, n, t, a], o, !1));
          return Array.isArray(u) ? s.Children.toArray(u) : u
        },
        Fc = function(e, n) {
          var t = e.defaultRichTextElements,
            r = (0, Ru.__rest)(e, ["defaultRichTextElements"]),
            o = zc(t),
            i = Hc((0, Ru.__assign)((0, Ru.__assign)((0, Ru.__assign)({}, _d), r), {
              defaultRichTextElements: o
            }), n),
            a = {
              locale: i.locale,
              timeZone: i.timeZone,
              fallbackOnEmptyString: i.fallbackOnEmptyString,
              formats: i.formats,
              defaultLocale: i.defaultLocale,
              defaultFormats: i.defaultFormats,
              messages: i.messages,
              onError: i.onError,
              defaultRichTextElements: o
            };
          return (0, Ru.__assign)((0, Ru.__assign)({}, i), {
            formatMessage: qc.bind(null, a, i.formatters),
            $t: qc.bind(null, a, i.formatters)
          })
        };

      function Uc(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      var Vc = function(e) {
        function n() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n.cache = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }, n.state = {
            cache: n.cache,
            intl: Fc(Uc(n.props), n.cache),
            prevConfig: Uc(n.props)
          }, n
        }
        return (0, Ru.__extends)(n, e), n.getDerivedStateFromProps = function(e, n) {
          var t = n.prevConfig,
            r = n.cache,
            o = Uc(e);
          return function(e, n) {
            if (e === n) return !0;
            if (!e || !n) return !1;
            var t = Object.keys(e),
              r = Object.keys(n),
              o = t.length;
            if (r.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var a = t[i];
              if (e[a] !== n[a] || !Object.prototype.hasOwnProperty.call(n, a)) return !1
            }
            return !0
          }(t, o) ? null : {
            intl: Fc(o, r),
            prevConfig: o
          }
        }, n.prototype.render = function() {
          return Cd(this.state.intl), s.createElement(xd, {
            value: this.state.intl
          }, this.props.children)
        }, n.displayName = "IntlProvider", n.defaultProps = _d, n
      }(s.PureComponent);
      const Gc = Vc;

      function Wc() {
        var e = s.useContext(Pd);
        return Cd(e), e
      }
      var Kc, Xc;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Kc || (Kc = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Xc || (Xc = {}));
      var $c = function(e) {
        var n = Wc(),
          t = e.value,
          r = e.children,
          o = (0, Ru.__rest)(e, ["value", "children"]);
        return r(n.formatNumberToParts(t, o))
      };

      function Yc(e) {
        var n = function(n) {
          var t = Wc(),
            r = n.value,
            o = n.children,
            i = (0, Ru.__rest)(n, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? t.formatDateToParts(a, i) : t.formatTimeToParts(a, i))
        };
        return n.displayName = Xc[e], n
      }

      function Zc(e) {
        var n = function(n) {
          var t = Wc(),
            r = n.value,
            o = n.children,
            i = (0, Ru.__rest)(n, ["value", "children"]),
            a = t[e](r, i);
          if ("function" == typeof o) return o(a);
          var u = t.textComponent || s.Fragment;
          return s.createElement(u, null, a)
        };
        return n.displayName = Kc[e], n
      }
      $c.displayName = "FormattedNumberParts", $c.displayName = "FormattedNumberParts", Zc("formatDate"), Zc("formatTime"), Zc("formatNumber"), Zc("formatList"), Zc("formatDisplayName"), Yc("formatDate"), Yc("formatTime");
      const Qc = ({
          children: e,
          messages: n,
          locale: t,
          fallback: r
        }) => {
          const [o, a] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            (n?.[t] ?? n["en-US"]).then((e => {
              a(e.default)
            }))
          }), [t]), o ? (0, i.jsx)(Gc, {
            locale: t,
            messages: o,
            children: e
          }) : r || null
        },
        Jc = {
          id: "Lightbox_Open_Button_Label"
        },
        ef = {
          id: "Lightbox_Dialog_Title"
        },
        nf = {
          id: "Lightbox_Dialog_Description"
        },
        tf = {
          "en-US": t.e(7039).then(t.bind(t, 7039)),
          "de-DE": t.e(4220).then(t.bind(t, 94220)),
          "es-ES": t.e(4186).then(t.bind(t, 14186)),
          "es-MX": t.e(1607).then(t.bind(t, 11607)),
          "fr-FR": t.e(3622).then(t.bind(t, 3622)),
          "it-IT": t.e(6940).then(t.bind(t, 36940)),
          "ja-JP": t.e(5247).then(t.bind(t, 85247)),
          "ko-KR": t.e(2941).then(t.bind(t, 22941)),
          "pl-PL": t.e(9642).then(t.bind(t, 19642)),
          "pt-BR": t.e(9474).then(t.bind(t, 19474)),
          "ru-RU": t.e(888).then(t.bind(t, 10888)),
          "zh-CN": t.e(377).then(t.bind(t, 80377)),
          "zh-TW": t.e(969).then(t.bind(t, 70969))
        };
      var rf = t(74487);
      const of = (e, n) => {
        const t = "more" === n ? rf.xW.lightHc : rf.xW.light,
          r = "more" === n ? rf.xW.darkHc : rf.xW.dark;
        return "dark" === e ? r : t
      };

      function af(e, [n, t]) {
        return Math.min(t, Math.max(n, e))
      }

      function sf(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function uf(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function lf(e, n = []) {
        let t = [];
        const r = () => {
          const n = t.map((e => s.createContext(e)));
          return function(t) {
            const r = t?.[e] || n;
            return s.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: r
              }
            })), [t, r])
          }
        };
        return r.scopeName = e, [function(n, r) {
          const o = s.createContext(r),
            a = t.length;

          function u(n) {
            const {
              scope: t,
              children: r,
              ...u
            } = n, l = t?.[e][a] || o, d = s.useMemo((() => u), Object.values(u));
            return (0, i.jsx)(l.Provider, {
              value: d,
              children: r
            })
          }
          return t = [...t, r], u.displayName = n + "Provider", [u, function(t, i) {
            const u = i?.[e][a] || o,
              l = s.useContext(u);
            if (l) return l;
            if (void 0 !== r) return r;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, df(r, ...n)]
      }

      function df(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }

      function cf(e) {
        const n = s.useRef(e);
        return s.useEffect((() => {
          n.current = e
        })), s.useMemo((() => (...e) => n.current?.(...e)), [])
      }

      function ff({
        prop: e,
        defaultProp: n,
        onChange: t = (() => {})
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = s.useState(e),
            [r] = t,
            o = s.useRef(r),
            i = cf(n);
          return s.useEffect((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), t
        }({
          defaultProp: n,
          onChange: t
        }), i = void 0 !== e, a = i ? e : r, u = cf(t);
        return [a, s.useCallback((n => {
          if (i) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && u(t)
          } else o(n)
        }), [i, e, o, u])]
      }
      var pf = s.createContext(void 0);

      function hf(e) {
        const n = s.useContext(pf);
        return e || n || "ltr"
      }

      function yf(e) {
        const n = s.useRef({
          value: e,
          previous: e
        });
        return s.useMemo((() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous)), [e])
      }
      var Af = Boolean(globalThis?.document) ? s.useLayoutEffect : () => {};

      function vf(e) {
        const [n, t] = s.useState(void 0);
        return Af((() => {
          if (e) {
            t({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const n = new ResizeObserver((n => {
              if (!Array.isArray(n)) return;
              if (!n.length) return;
              const r = n[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  n = Array.isArray(e) ? e[0] : e;
                o = n.inlineSize, i = n.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              t({
                width: o,
                height: i
              })
            }));
            return n.observe(e, {
              box: "border-box"
            }), () => n.unobserve(e)
          }
          t(void 0)
        }), [e]), n
      }
      var mf = t(11735),
        bf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? mf.DX : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        gf = ["PageUp", "PageDown"],
        Cf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        _f = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Ef = "Slider",
        [wf, kf, Bf] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = lf(n),
            [o, a] = t(n, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            u = e => {
              const {
                scope: n,
                children: t
              } = e, r = s.useRef(null), a = s.useRef(new Map).current;
              return (0, i.jsx)(o, {
                scope: n,
                itemMap: a,
                collectionRef: r,
                children: t
              })
            };
          u.displayName = n;
          const l = e + "CollectionSlot",
            d = s.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r
              } = e, o = uf(n, a(l, t).collectionRef);
              return (0, i.jsx)(mf.DX, {
                ref: o,
                children: r
              })
            }));
          d.displayName = l;
          const c = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = s.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r,
                ...o
              } = e, u = s.useRef(null), l = uf(n, u), d = a(c, t);
              return s.useEffect((() => (d.itemMap.set(u, {
                ref: u,
                ...o
              }), () => {
                d.itemMap.delete(u)
              }))), (0, i.jsx)(mf.DX, {
                [f]: "",
                ref: l,
                children: r
              })
            }));
          return p.displayName = c, [{
            Provider: u,
            Slot: d,
            ItemSlot: p
          }, function(n) {
            const t = a(e + "CollectionConsumer", n);
            return s.useCallback((() => {
              const e = t.collectionRef.current;
              if (!e) return [];
              const n = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
            }), [t.collectionRef, t.itemMap])
          }, r]
        }(Ef),
        [xf, Pf] = lf(Ef, [Bf]),
        [Tf, Sf] = xf(Ef),
        jf = s.forwardRef(((e, n) => {
          const {
            name: t,
            min: r = 0,
            max: o = 100,
            step: a = 1,
            orientation: u = "horizontal",
            disabled: l = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: c = [r],
            value: f,
            onValueChange: p = (() => {}),
            onValueCommit: h = (() => {}),
            inverted: y = !1,
            ...A
          } = e, v = s.useRef(new Set), m = s.useRef(0), b = "horizontal" === u ? Lf : Rf, [g = [], C] = ff({
            prop: f,
            defaultProp: c,
            onChange: e => {
              const n = [...v.current];
              n[m.current]?.focus(), p(e)
            }
          }), _ = s.useRef(g);

          function E(e, n, {
            commit: t
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              s = function(e, n) {
                const t = Math.pow(10, n);
                return Math.round(e * t) / t
              }(Math.round((e - r) / a) * a + r, i),
              u = af(s, [r, o]);
            C(((e = []) => {
              const r = function(e = [], n, t) {
                const r = [...e];
                return r[t] = n, r.sort(((e, n) => e - n))
              }(e, u, n);
              if (function(e, n) {
                  if (n > 0) {
                    const t = function(e) {
                      return e.slice(0, -1).map(((n, t) => e[t + 1] - n))
                    }(e);
                    return Math.min(...t) >= n
                  }
                  return !0
                }(r, d * a)) {
                m.current = r.indexOf(u);
                const n = String(r) !== String(e);
                return n && t && h(r), n ? r : e
              }
              return e
            }))
          }
          return (0, i.jsx)(Tf, {
            scope: e.__scopeSlider,
            name: t,
            disabled: l,
            min: r,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: v.current,
            values: g,
            orientation: u,
            children: (0, i.jsx)(wf.Provider, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(wf.Slot, {
                scope: e.__scopeSlider,
                children: (0, i.jsx)(b, {
                  "aria-disabled": l,
                  "data-disabled": l ? "" : void 0,
                  ...A,
                  ref: n,
                  onPointerDown: sf(A.onPointerDown, (() => {
                    l || (_.current = g)
                  })),
                  min: r,
                  max: o,
                  inverted: y,
                  onSlideStart: l ? void 0 : function(e) {
                    const n = function(e, n) {
                      if (1 === e.length) return 0;
                      const t = e.map((e => Math.abs(e - n))),
                        r = Math.min(...t);
                      return t.indexOf(r)
                    }(g, e);
                    E(e, n)
                  },
                  onSlideMove: l ? void 0 : function(e) {
                    E(e, m.current)
                  },
                  onSlideEnd: l ? void 0 : function() {
                    const e = _.current[m.current];
                    g[m.current] !== e && h(g)
                  },
                  onHomeKeyDown: () => !l && E(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !l && E(o, g.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: n
                  }) => {
                    if (!l) {
                      const t = gf.includes(e.key) || e.shiftKey && Cf.includes(e.key) ? 10 : 1,
                        r = m.current;
                      E(g[r] + a * t * n, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      jf.displayName = Ef;
      var [Of, Nf] = xf(Ef, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Lf = s.forwardRef(((e, n) => {
        const {
          min: t,
          max: r,
          dir: o,
          inverted: a,
          onSlideStart: u,
          onSlideMove: l,
          onSlideEnd: d,
          onStepKeyDown: c,
          ...f
        } = e, [p, h] = s.useState(null), y = uf(n, (e => h(e))), A = s.useRef(), v = hf(o), m = "ltr" === v, b = m && !a || !m && a;

        function g(e) {
          const n = A.current || p.getBoundingClientRect(),
            o = Wf([0, n.width], b ? [t, r] : [r, t]);
          return A.current = n, o(e - n.left)
        }
        return (0, i.jsx)(Of, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, i.jsx)(Df, {
            dir: v,
            "data-orientation": "horizontal",
            ...f,
            ref: y,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const n = g(e.clientX);
              u?.(n)
            },
            onSlideMove: e => {
              const n = g(e.clientX);
              l?.(n)
            },
            onSlideEnd: () => {
              A.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const n = _f[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: n ? -1 : 1
              })
            }
          })
        })
      })), Rf = s.forwardRef(((e, n) => {
        const {
          min: t,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: u,
          onSlideEnd: l,
          onStepKeyDown: d,
          ...c
        } = e, f = s.useRef(null), p = uf(n, f), h = s.useRef(), y = !o;

        function A(e) {
          const n = h.current || f.current.getBoundingClientRect(),
            o = Wf([0, n.height], y ? [r, t] : [t, r]);
          return h.current = n, o(e - n.top)
        }
        return (0, i.jsx)(Of, {
          scope: e.__scopeSlider,
          startEdge: y ? "bottom" : "top",
          endEdge: y ? "top" : "bottom",
          size: "height",
          direction: y ? 1 : -1,
          children: (0, i.jsx)(Df, {
            "data-orientation": "vertical",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const n = A(e.clientY);
              a?.(n)
            },
            onSlideMove: e => {
              const n = A(e.clientY);
              u?.(n)
            },
            onSlideEnd: () => {
              h.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const n = _f[y ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: n ? -1 : 1
              })
            }
          })
        })
      })), Df = s.forwardRef(((e, n) => {
        const {
          __scopeSlider: t,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: u,
          onStepKeyDown: l,
          ...d
        } = e, c = Sf(Ef, t);
        return (0, i.jsx)(bf.span, {
          ...d,
          ref: n,
          onKeyDown: sf(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (u(e), e.preventDefault()) : gf.concat(Cf).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: sf(e.onPointerDown, (e => {
            const n = e.target;
            n.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(n) ? n.focus() : r(e)
          })),
          onPointerMove: sf(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: sf(e.onPointerUp, (e => {
            const n = e.target;
            n.hasPointerCapture(e.pointerId) && (n.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), Mf = "SliderTrack", If = s.forwardRef(((e, n) => {
        const {
          __scopeSlider: t,
          ...r
        } = e, o = Sf(Mf, t);
        return (0, i.jsx)(bf.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: n
        })
      }));
      If.displayName = Mf;
      var Hf = "SliderRange",
        zf = s.forwardRef(((e, n) => {
          const {
            __scopeSlider: t,
            ...r
          } = e, o = Sf(Hf, t), a = Nf(Hf, t), u = uf(n, s.useRef(null)), l = o.values.length, d = o.values.map((e => Gf(e, o.min, o.max))), c = l > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
          return (0, i.jsx)(bf.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: u,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: f + "%"
            }
          })
        }));
      zf.displayName = Hf;
      var qf = "SliderThumb",
        Ff = s.forwardRef(((e, n) => {
          const t = kf(e.__scopeSlider),
            [r, o] = s.useState(null),
            a = uf(n, (e => o(e))),
            u = s.useMemo((() => r ? t().findIndex((e => e.ref.current === r)) : -1), [t, r]);
          return (0, i.jsx)(Uf, {
            ...e,
            ref: a,
            index: u
          })
        })),
        Uf = s.forwardRef(((e, n) => {
          const {
            __scopeSlider: t,
            index: r,
            name: o,
            ...a
          } = e, u = Sf(qf, t), l = Nf(qf, t), [d, c] = s.useState(null), f = uf(n, (e => c(e))), p = !d || Boolean(d.closest("form")), h = vf(d), y = u.values[r], A = void 0 === y ? 0 : Gf(y, u.min, u.max), v = function(e, n) {
            return n > 2 ? `Value ${e+1} of ${n}` : 2 === n ? ["Minimum", "Maximum"][e] : void 0
          }(r, u.values.length), m = h?.[l.size], b = m ? function(e, n, t) {
            const r = e / 2;
            return (r - Wf([0, 50], [0, r])(n) * t) * t
          }(m, A, l.direction) : 0;
          return s.useEffect((() => {
            if (d) return u.thumbs.add(d), () => {
              u.thumbs.delete(d)
            }
          }), [d, u.thumbs]), (0, i.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [l.startEdge]: `calc(${A}% + ${b}px)`
            },
            children: [(0, i.jsx)(wf.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(bf.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": u.min,
                "aria-valuenow": y,
                "aria-valuemax": u.max,
                "aria-orientation": u.orientation,
                "data-orientation": u.orientation,
                "data-disabled": u.disabled ? "" : void 0,
                tabIndex: u.disabled ? void 0 : 0,
                ...a,
                ref: f,
                style: void 0 === y ? {
                  display: "none"
                } : e.style,
                onFocus: sf(e.onFocus, (() => {
                  u.valueIndexToChangeRef.current = r
                }))
              })
            }), p && (0, i.jsx)(Vf, {
              name: o ?? (u.name ? u.name + (u.values.length > 1 ? "[]" : "") : void 0),
              value: y
            }, r)]
          })
        }));
      Ff.displayName = qf;
      var Vf = e => {
        const {
          value: n,
          ...t
        } = e, r = s.useRef(null), o = yf(n);
        return s.useEffect((() => {
          const e = r.current,
            t = window.HTMLInputElement.prototype,
            i = Object.getOwnPropertyDescriptor(t, "value").set;
          if (o !== n && i) {
            const t = new Event("input", {
              bubbles: !0
            });
            i.call(e, n), e.dispatchEvent(t)
          }
        }), [o, n]), (0, i.jsx)("input", {
          style: {
            display: "none"
          },
          ...t,
          ref: r,
          defaultValue: n
        })
      };

      function Gf(e, n, t) {
        return af(100 / (t - n) * (e - n), [0, 100])
      }

      function Wf(e, n) {
        return t => {
          if (e[0] === e[1] || n[0] === n[1]) return n[0];
          const r = (n[1] - n[0]) / (e[1] - e[0]);
          return n[0] + r * (t - e[0])
        }
      }
      var Kf = jf,
        Xf = If,
        $f = zf,
        Yf = Ff;
      const Zf = {
          id: "Lightbox_Close_Button_Label"
        },
        Qf = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Jf = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        ep = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        np = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        tp = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        rp = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        op = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        ip = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        ap = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        sp = {
          id: "Lightbox_Download_Button_Label"
        },
        up = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function lp() {
        return lp = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, lp.apply(this, arguments)
      }
      var dp = ["shift", "alt", "meta", "mod", "ctrl"],
        cp = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function fp(e) {
        return (cp[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function pp(e, n) {
        return void 0 === n && (n = ","), e.split(n)
      }

      function hp(e, n, t) {
        void 0 === n && (n = "+");
        var r = e.toLocaleLowerCase().split(n).map((function(e) {
          return fp(e)
        }));
        return lp({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !dp.includes(e)
          })),
          description: t
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && vp([fp(e.key), fp(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && mp([fp(e.key), fp(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        yp.clear()
      }));
      var yp = new Set;

      function Ap(e) {
        return Array.isArray(e)
      }

      function vp(e) {
        var n = Array.isArray(e) ? e : [e];
        yp.has("meta") && yp.forEach((function(e) {
          return ! function(e) {
            return dp.includes(e)
          }(e) && yp.delete(e.toLowerCase())
        })), n.forEach((function(e) {
          return yp.add(e.toLowerCase())
        }))
      }

      function mp(e) {
        var n = Array.isArray(e) ? e : [e];
        "meta" === e ? yp.clear() : n.forEach((function(e) {
          return yp.delete(e.toLowerCase())
        }))
      }

      function bp(e, n) {
        var t = e.target;
        void 0 === n && (n = !1);
        var r = t && t.tagName;
        return Ap(n) ? Boolean(r && n && n.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && n && !0 === n)
      }
      var gp = (0, s.createContext)(void 0);

      function Cp(e) {
        var n = e.addHotkey,
          t = e.removeHotkey,
          r = e.children;
        return (0, i.jsx)(gp.Provider, {
          value: {
            addHotkey: n,
            removeHotkey: t
          },
          children: r
        })
      }

      function _p(e, n) {
        return e && n && "object" == typeof e && "object" == typeof n ? Object.keys(e).length === Object.keys(n).length && Object.keys(e).reduce((function(t, r) {
          return t && _p(e[r], n[r])
        }), !0) : e === n
      }
      var Ep = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        wp = function(e) {
          var n = e.initiallyActiveScopes,
            t = void 0 === n ? ["*"] : n,
            r = e.children,
            o = (0, s.useState)((null == t ? void 0 : t.length) > 0 ? t : ["*"]),
            a = o[0],
            u = o[1],
            l = (0, s.useState)([]),
            d = l[0],
            c = l[1],
            f = (0, s.useCallback)((function(e) {
              u((function(n) {
                return n.includes("*") ? [e] : Array.from(new Set([].concat(n, [e])))
              }))
            }), []),
            p = (0, s.useCallback)((function(e) {
              u((function(n) {
                return 0 === n.filter((function(n) {
                  return n !== e
                })).length ? ["*"] : n.filter((function(n) {
                  return n !== e
                }))
              }))
            }), []),
            h = (0, s.useCallback)((function(e) {
              u((function(n) {
                return n.includes(e) ? 0 === n.filter((function(n) {
                  return n !== e
                })).length ? ["*"] : n.filter((function(n) {
                  return n !== e
                })) : n.includes("*") ? [e] : Array.from(new Set([].concat(n, [e])))
              }))
            }), []),
            y = (0, s.useCallback)((function(e) {
              c((function(n) {
                return [].concat(n, [e])
              }))
            }), []),
            A = (0, s.useCallback)((function(e) {
              c((function(n) {
                return n.filter((function(n) {
                  return !_p(n, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(Ep.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: d,
              enableScope: f,
              disableScope: p,
              toggleScope: h
            },
            children: (0, i.jsx)(Cp, {
              addHotkey: y,
              removeHotkey: A,
              children: r
            })
          })
        },
        kp = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Bp = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function xp(e, n, t, r) {
        var o = (0, s.useRef)(null),
          i = (0, s.useRef)(!1),
          a = t instanceof Array ? r instanceof Array ? void 0 : r : t,
          u = Ap(e) ? e.join(null == a ? void 0 : a.splitKey) : e,
          l = t instanceof Array ? t : r instanceof Array ? r : void 0,
          d = (0, s.useCallback)(n, null != l ? l : []),
          c = (0, s.useRef)(d);
        c.current = l ? d : n;
        var f = function(e) {
            var n = (0, s.useRef)(void 0);
            return _p(n.current, e) || (n.current = e), n.current
          }(a),
          p = (0, s.useContext)(Ep).enabledScopes,
          h = (0, s.useContext)(gp);
        return Bp((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = p, n = null == f ? void 0 : f.scopes, 0 === e.length && n ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !n || e.some((function(e) {
              return n.includes(e)
            })) || e.includes("*"))) {
            var e, n, t = function(e, n) {
                var t;
                if (void 0 === n && (n = !1), !bp(e, ["input", "textarea", "select"]) || bp(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var r = o.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== o.current && !o.current.contains(r.activeElement)) return void kp(e)
                  }(null == (t = e.target) || !t.isContentEditable || null != f && f.enableOnContentEditable) && pp(u, null == f ? void 0 : f.splitKey).forEach((function(t) {
                    var r, o = hp(t, null == f ? void 0 : f.combinationKey);
                    if (function(e, n, t) {
                        void 0 === t && (t = !1);
                        var r, o, i = n.alt,
                          a = n.meta,
                          s = n.mod,
                          u = n.shift,
                          l = n.ctrl,
                          d = n.keys,
                          c = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          y = e.shiftKey,
                          A = e.altKey,
                          v = fp(f),
                          m = c.toLowerCase();
                        if (!(null != d && d.includes(v) || null != d && d.includes(m) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(v))) return !1;
                        if (!t) {
                          if (i === !A && "alt" !== m) return !1;
                          if (u === !y && "shift" !== m) return !1;
                          if (s) {
                            if (!h && !p) return !1
                          } else {
                            if (a === !h && "meta" !== m && "os" !== m) return !1;
                            if (l === !p && "ctrl" !== m && "control" !== m) return !1
                          }
                        }
                        return !(!d || 1 !== d.length || !d.includes(m) && !d.includes(v)) || (d ? (void 0 === o && (o = ","), (Ap(r = d) ? r : r.split(o)).every((function(e) {
                          return yp.has(e.trim().toLowerCase())
                        }))) : !d)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (n && i.current) return;
                      if (function(e, n, t) {
                          ("function" == typeof t && t(e, n) || !0 === t) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, n, t) {
                          return "function" == typeof t ? t(e, n) : !0 === t || void 0 === t
                        }(e, o, null == f ? void 0 : f.enabled)) return void kp(e);
                      c.current(e, o), n || (i.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (vp(fp(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && t(e))
              },
              s = function(e) {
                void 0 !== e.key && (mp(fp(e.code)), i.current = !1, null != f && f.keyup && t(e, !0))
              },
              l = o.current || (null == a ? void 0 : a.document) || document;
            return l.addEventListener("keyup", s), l.addEventListener("keydown", r), h && pp(u, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return h.addHotkey(hp(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                l.removeEventListener("keyup", s), l.removeEventListener("keydown", r), h && pp(u, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return h.removeHotkey(hp(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [u, f, p]), o
      }
      var Pp = t(40492),
        Tp = {};

      function Sp(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function jp(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Op(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? jp(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Sp(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : jp(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Np(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      Tp.styleTagTransform = _(), Tp.setAttributes = m(), Tp.insert = A().bind(null, "head"), Tp.domAPI = h(), Tp.insertStyleElement = g(), f()(Pp.A, Tp), Pp.A && Pp.A.locals && Pp.A.locals;
      var Lp = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Rp = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = Op(Op({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Lp(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Np(e.variantClassNames, (e => Np(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5",
              monochrome: "foundry_1qqcnua0 foundry_1qqcnua7"
            },
            size: {
              XS: "foundry_a5x3kh9",
              SM: "foundry_a5x3kha",
              MD: "foundry_a5x3khb",
              LG: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Dp = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Mp = (0, s.forwardRef)((({
          testId: e,
          asChild: n,
          className: t,
          icon: r,
          label: o,
          appearance: u,
          size: l = "MD",
          fullWidth: c = !1,
          onClick: f,
          children: p,
          ...h
        }, y) => {
          const A = (0, s.useRef)(null),
            v = (0, In.UP)(A, y),
            {
              events: m,
              others: b
            } = (0, a.bZ)(h, {
              onPress: !1
            }),
            {
              buttonProps: g,
              isPressed: C
            } = lr({
              ...b,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => b.onPress?.(e) ?? f?.(e)
            }, A),
            _ = (0, a.v6)({
              ...g,
              className: t
            }, {
              ...m,
              role: "button",
              "data-pressed": C,
              "data-testid": e,
              className: Rp({
                appearance: u,
                size: l,
                fullWidth: c
              })
            }),
            E = xe[r],
            w = n ? d.DX : "button",
            k = Dp[l];
          return (0, i.jsxs)(w, {
            ref: v,
            ..._,
            children: [E && (0, i.jsx)(E, {
              label: o || "",
              size: k
            }), (0, i.jsx)(d.xV, {
              children: p
            })]
          })
        }));
      var Ip = t(86845),
        Hp = {};
      Hp.styleTagTransform = _(), Hp.setAttributes = m(), Hp.insert = A().bind(null, "head"), Hp.domAPI = h(), Hp.insertStyleElement = g(), f()(Ip.A, Hp), Ip.A && Ip.A.locals && Ip.A.locals;
      const zp = (0, s.forwardRef)((({
        shortcut: e,
        isInline: n,
        onShortcut: t
      }, r) => (xp(e, (e => t?.(e)), [t]), (0, i.jsx)(ae, {
        className: (0, Ze.$)("foundry_bc732x0", {
          foundry_bc732x1: n
        }),
        asChild: !0,
        children: (0, i.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));
      var qp = /^--/;

      function Fp(e, n) {
        return null == n || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || qp.test(e) || Vp.hasOwnProperty(e) && Vp[e] ? ("" + n).trim() : n + "px"
      }
      var Up = {},
        Vp = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Gp = ["Webkit", "Ms", "Moz", "O"];
      Vp = Object.keys(Vp).reduce(((e, n) => (Gp.forEach((t => e[((e, n) => e + n.charAt(0).toUpperCase() + n.substring(1))(t, n)] = e[n])), e)), Vp);
      var Wp = /^(matrix|translate|scale|rotate|skew)/,
        Kp = /^(translate)/,
        Xp = /^(rotate|skew)/,
        $p = (e, n) => Jo.num(e) && 0 !== e ? e + n : e,
        Yp = (e, n) => Jo.arr(e) ? e.every((e => Yp(e, n))) : Jo.num(e) ? e === n : parseFloat(e) === n,
        Zp = class extends Ra {
          constructor({
            x: e,
            y: n,
            z: t,
            ...r
          }) {
            const o = [],
              i = [];
            (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((e => [`translate3d(${e.map((e=>$p(e,"px"))).join(",")})`, Yp(e, 0)]))), ti(r, ((e, n) => {
              if ("transform" === n) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Wp.test(n)) {
                if (delete r[n], Jo.und(e)) return;
                const t = Kp.test(n) ? "px" : Xp.test(n) ? "deg" : "";
                o.push(ri(e)), i.push("rotate3d" === n ? ([e, n, r, o]) => [`rotate3d(${e},${n},${r},${$p(o,t)})`, Yp(o, 0)] : e => [`${n}(${e.map((e=>$p(e,t))).join(",")})`, Yp(e, n.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new Qp(o, i)), super(r)
          }
        },
        Qp = class extends na {
          constructor(e, n) {
            super(), this.inputs = e, this.transforms = n, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              n = !0;
            return ni(this.inputs, ((t, r) => {
              const o = Qi(t[0]),
                [i, a] = this.transforms[r](Jo.arr(o) ? o : t.map(Qi));
              e += " " + i, n = n && a
            })), n ? "none" : e
          }
          observerAdded(e) {
            1 == e && ni(this.inputs, (e => ni(e, (e => Zi(e) && ra(e, this)))))
          }
          observerRemoved(e) {
            0 == e && ni(this.inputs, (e => ni(e, (e => Zi(e) && oa(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ea(this, e)
          }
        };
      Zo.assign({
        batchedUpdates: au.unstable_batchedUpdates,
        createStringInterpolator: ya,
        colors: _i
      });
      var Jp = Fa(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, n) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const t = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: u,
                ...l
              } = n,
              d = Object.values(l),
              c = Object.keys(l).map((n => t || e.hasAttribute(n) ? n : Up[n] || (Up[n] = n.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const n in o)
              if (o.hasOwnProperty(n)) {
                const t = Fp(n, o[n]);
                qp.test(n) ? e.style.setProperty(n, t) : e.style[n] = t
              } c.forEach(((n, t) => {
              e.setAttribute(n, d[t])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== u && e.setAttribute("viewBox", u)
          },
          createAnimatedStyle: e => new Zp(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: n,
            ...t
          }) => t
        }).animated,
        eh = t(95923),
        nh = {};

      function th(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function rh(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function oh(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
      nh.styleTagTransform = _(), nh.setAttributes = m(), nh.insert = A().bind(null, "head"), nh.domAPI = h(), nh.insertStyleElement = g(), f()(eh.A, nh), eh.A && eh.A.locals && eh.A.locals;
      var ih = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
        const t = s.forwardRef(((e, t) => {
          const {
            asChild: r,
            ...o
          } = e, a = r ? mf.DX : n;
          return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
            ...o,
            ref: t
          })
        }));
        return t.displayName = `Primitive.${n}`, {
          ...e,
          [n]: t
        }
      }), {});

      function ah(e, n = globalThis?.document) {
        const t = cf(e);
        s.useEffect((() => {
          const e = e => {
            "Escape" === e.key && t(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [t, n])
      }
      var sh, uh = "dismissableLayer.update",
        lh = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        dh = s.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...d
          } = e, c = s.useContext(lh), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, y] = s.useState({}), A = rh(n, (e => p(e))), v = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = f ? v.indexOf(f) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= b, E = function(e, n = globalThis?.document) {
            const t = cf(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      fh("dismissableLayer.pointerDownOutside", t, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = r, n.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else n.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  n.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), n.removeEventListener("pointerdown", e), n.removeEventListener("click", o.current)
              }
            }), [n, t]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const n = e.target,
              t = [...c.branches].some((e => e.contains(n)));
            _ && !t && (o?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h), w = function(e, n = globalThis?.document) {
            const t = cf(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && fh("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }), [n, t]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const n = e.target;
            [...c.branches].some((e => e.contains(n))) || (a?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h);
          return ah((e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          }), h), s.useEffect((() => {
            if (f) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (sh = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), ch(), () => {
              t && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = sh)
            }
          }), [f, h, t, c]), s.useEffect((() => () => {
            f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), ch())
          }), [f, c]), s.useEffect((() => {
            const e = () => y({});
            return document.addEventListener(uh, e), () => document.removeEventListener(uh, e)
          }), []), (0, i.jsx)(ih.div, {
            ...d,
            ref: A,
            style: {
              pointerEvents: C ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: th(e.onFocusCapture, w.onFocusCapture),
            onBlurCapture: th(e.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: th(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function ch() {
        const e = new CustomEvent(uh);
        document.dispatchEvent(e)
      }

      function fh(e, n, t, {
        discrete: r
      }) {
        const o = t.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
          });
        n && o.addEventListener(e, n, {
          once: !0
        }), r ? function(e, n) {
          e && au.flushSync((() => e.dispatchEvent(n)))
        }(o, i) : o.dispatchEvent(i)
      }
      dh.displayName = "DismissableLayer", s.forwardRef(((e, n) => {
        const t = s.useContext(lh),
          r = s.useRef(null),
          o = rh(n, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, i.jsx)(ih.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var ph = u["useId".toString()] || (() => {}),
        hh = 0;

      function yh(e) {
        const [n, t] = s.useState(ph());
        return Af((() => {
          e || t((e => e ?? String(hh++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const Ah = ["top", "right", "bottom", "left"],
        vh = Math.min,
        mh = Math.max,
        bh = Math.round,
        gh = Math.floor,
        Ch = e => ({
          x: e,
          y: e
        }),
        _h = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Eh = {
          start: "end",
          end: "start"
        };

      function wh(e, n, t) {
        return mh(e, vh(n, t))
      }

      function kh(e, n) {
        return "function" == typeof e ? e(n) : e
      }

      function Bh(e) {
        return e.split("-")[0]
      }

      function xh(e) {
        return e.split("-")[1]
      }

      function Ph(e) {
        return "x" === e ? "y" : "x"
      }

      function Th(e) {
        return "y" === e ? "height" : "width"
      }

      function Sh(e) {
        return ["top", "bottom"].includes(Bh(e)) ? "y" : "x"
      }

      function jh(e) {
        return Ph(Sh(e))
      }

      function Oh(e) {
        return e.replace(/start|end/g, (e => Eh[e]))
      }

      function Nh(e) {
        return e.replace(/left|right|bottom|top/g, (e => _h[e]))
      }

      function Lh(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function Rh(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }

      function Dh(e, n, t) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Sh(n),
          a = jh(n),
          s = Th(a),
          u = Bh(n),
          l = "y" === i,
          d = r.x + r.width / 2 - o.width / 2,
          c = r.y + r.height / 2 - o.height / 2,
          f = r[s] / 2 - o[s] / 2;
        let p;
        switch (u) {
          case "top":
            p = {
              x: d,
              y: r.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: d,
              y: r.y + r.height
            };
            break;
          case "right":
            p = {
              x: r.x + r.width,
              y: c
            };
            break;
          case "left":
            p = {
              x: r.x - o.width,
              y: c
            };
            break;
          default:
            p = {
              x: r.x,
              y: r.y
            }
        }
        switch (xh(n)) {
          case "start":
            p[a] -= f * (t && l ? -1 : 1);
            break;
          case "end":
            p[a] += f * (t && l ? -1 : 1)
        }
        return p
      }
      async function Mh(e, n) {
        var t;
        void 0 === n && (n = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: s,
          strategy: u
        } = e, {
          boundary: l = "clippingAncestors",
          rootBoundary: d = "viewport",
          elementContext: c = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = kh(n, e), h = Lh(p), y = s[f ? "floating" === c ? "reference" : "floating" : c], A = Rh(await i.getClippingRect({
          element: null == (t = await (null == i.isElement ? void 0 : i.isElement(y))) || t ? y : y.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: l,
          rootBoundary: d,
          strategy: u
        })), v = "floating" === c ? {
          ...a.floating,
          x: r,
          y: o
        } : a.reference, m = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(m)) && await (null == i.getScale ? void 0 : i.getScale(m)) || {
          x: 1,
          y: 1
        }, g = Rh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: v,
          offsetParent: m,
          strategy: u
        }) : v);
        return {
          top: (A.top - g.top + h.top) / b.y,
          bottom: (g.bottom - A.bottom + h.bottom) / b.y,
          left: (A.left - g.left + h.left) / b.x,
          right: (g.right - A.right + h.right) / b.x
        }
      }
      const Ih = e => ({
          name: "arrow",
          options: e,
          async fn(n) {
            const {
              x: t,
              y: r,
              placement: o,
              rects: i,
              platform: a,
              elements: s,
              middlewareData: u
            } = n, {
              element: l,
              padding: d = 0
            } = kh(e, n) || {};
            if (null == l) return {};
            const c = Lh(d),
              f = {
                x: t,
                y: r
              },
              p = jh(o),
              h = Th(p),
              y = await a.getDimensions(l),
              A = "y" === p,
              v = A ? "top" : "left",
              m = A ? "bottom" : "right",
              b = A ? "clientHeight" : "clientWidth",
              g = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              C = f[p] - i.reference[p],
              _ = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(l));
            let E = _ ? _[b] : 0;
            E && await (null == a.isElement ? void 0 : a.isElement(_)) || (E = s.floating[b] || i.floating[h]);
            const w = g / 2 - C / 2,
              k = E / 2 - y[h] / 2 - 1,
              B = vh(c[v], k),
              x = vh(c[m], k),
              P = B,
              T = E - y[h] - x,
              S = E / 2 - y[h] / 2 + w,
              j = wh(P, S, T),
              O = !u.arrow && null != xh(o) && S != j && i.reference[h] / 2 - (S < P ? B : x) - y[h] / 2 < 0,
              N = O ? S < P ? S - P : S - T : 0;
            return {
              [p]: f[p] + N,
              data: {
                [p]: j,
                centerOffset: S - j - N,
                ...O && {
                  alignmentOffset: N
                }
              },
              reset: O
            }
          }
        }),
        Hh = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(n) {
              var t, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: u,
                elements: l
              } = n, {
                mainAxis: d = !0,
                crossAxis: c = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: y = !0,
                ...A
              } = kh(e, n);
              if (null != (t = i.arrow) && t.alignmentOffset) return {};
              const v = Bh(o),
                m = Bh(s) === s,
                b = await (null == u.isRTL ? void 0 : u.isRTL(l.floating)),
                g = f || (m || !y ? [Nh(s)] : function(e) {
                  const n = Nh(e);
                  return [Oh(e), n, Oh(n)]
                }(s));
              f || "none" === h || g.push(... function(e, n, t, r) {
                const o = xh(e);
                let i = function(e, n, t) {
                  const r = ["left", "right"],
                    o = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return t ? n ? o : r : n ? r : o;
                    case "left":
                    case "right":
                      return n ? i : a;
                    default:
                      return []
                  }
                }(Bh(e), "start" === t, r);
                return o && (i = i.map((e => e + "-" + o)), n && (i = i.concat(i.map(Oh)))), i
              }(s, y, h, b));
              const C = [s, ...g],
                _ = await Mh(n, A),
                E = [];
              let w = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (d && E.push(_[v]), c) {
                const e = function(e, n, t) {
                  void 0 === t && (t = !1);
                  const r = xh(e),
                    o = jh(e),
                    i = Th(o);
                  let a = "x" === o ? r === (t ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return n.reference[i] > n.floating[i] && (a = Nh(a)), [a, Nh(a)]
                }(o, a, b);
                E.push(_[e[0]], _[e[1]])
              }
              if (w = [...w, {
                  placement: o,
                  overflows: E
                }], !E.every((e => e <= 0))) {
                var k, B;
                const e = ((null == (k = i.flip) ? void 0 : k.index) || 0) + 1,
                  n = C[e];
                if (n) return {
                  data: {
                    index: e,
                    overflows: w
                  },
                  reset: {
                    placement: n
                  }
                };
                let t = null == (B = w.filter((e => e.overflows[0] <= 0)).sort(((e, n) => e.overflows[1] - n.overflows[1]))[0]) ? void 0 : B.placement;
                if (!t) switch (p) {
                  case "bestFit": {
                    var x;
                    const e = null == (x = w.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, n) => e + n), 0)])).sort(((e, n) => e[1] - n[1]))[0]) ? void 0 : x[0];
                    e && (t = e);
                    break
                  }
                  case "initialPlacement":
                    t = s
                }
                if (o !== t) return {
                  reset: {
                    placement: t
                  }
                }
              }
              return {}
            }
          }
        };

      function zh(e, n) {
        return {
          top: e.top - n.height,
          right: e.right - n.width,
          bottom: e.bottom - n.height,
          left: e.left - n.width
        }
      }

      function qh(e) {
        return Ah.some((n => e[n] >= 0))
      }
      const Fh = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(n) {
              const {
                rects: t
              } = n, {
                strategy: r = "referenceHidden",
                ...o
              } = kh(e, n);
              switch (r) {
                case "referenceHidden": {
                  const e = zh(await Mh(n, {
                    ...o,
                    elementContext: "reference"
                  }), t.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: qh(e)
                    }
                  }
                }
                case "escaped": {
                  const e = zh(await Mh(n, {
                    ...o,
                    altBoundary: !0
                  }), t.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: qh(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Uh = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(n) {
              const {
                x: t,
                y: r
              } = n, o = await async function(e, n) {
                const {
                  placement: t,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Bh(t), s = xh(t), u = "y" === Sh(t), l = ["left", "top"].includes(a) ? -1 : 1, d = i && u ? -1 : 1, c = kh(n, e);
                let {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: h
                } = "number" == typeof c ? {
                  mainAxis: c,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...c
                };
                return s && "number" == typeof h && (p = "end" === s ? -1 * h : h), u ? {
                  x: p * d,
                  y: f * l
                } : {
                  x: f * l,
                  y: p * d
                }
              }(n, e);
              return {
                x: t + o.x,
                y: r + o.y,
                data: o
              }
            }
          }
        },
        Vh = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(n) {
              const {
                x: t,
                y: r,
                placement: o
              } = n, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
                  fn: e => {
                    let {
                      x: n,
                      y: t
                    } = e;
                    return {
                      x: n,
                      y: t
                    }
                  }
                },
                ...u
              } = kh(e, n), l = {
                x: t,
                y: r
              }, d = await Mh(n, u), c = Sh(Bh(o)), f = Ph(c);
              let p = l[f],
                h = l[c];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                p = wh(p + d["y" === f ? "top" : "left"], p, p - d[e])
              }
              if (a) {
                const e = "y" === c ? "bottom" : "right";
                h = wh(h + d["y" === c ? "top" : "left"], h, h - d[e])
              }
              const y = s.fn({
                ...n,
                [f]: p,
                [c]: h
              });
              return {
                ...y,
                data: {
                  x: y.x - t,
                  y: y.y - r
                }
              }
            }
          }
        },
        Gh = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(n) {
              const {
                x: t,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = n, {
                offset: s = 0,
                mainAxis: u = !0,
                crossAxis: l = !0
              } = kh(e, n), d = {
                x: t,
                y: r
              }, c = Sh(o), f = Ph(c);
              let p = d[f],
                h = d[c];
              const y = kh(s, n),
                A = "number" == typeof y ? {
                  mainAxis: y,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...y
                };
              if (u) {
                const e = "y" === f ? "height" : "width",
                  n = i.reference[f] - i.floating[e] + A.mainAxis,
                  t = i.reference[f] + i.reference[e] - A.mainAxis;
                p < n ? p = n : p > t && (p = t)
              }
              if (l) {
                var v, m;
                const e = "y" === f ? "width" : "height",
                  n = ["top", "left"].includes(Bh(o)),
                  t = i.reference[c] - i.floating[e] + (n && (null == (v = a.offset) ? void 0 : v[c]) || 0) + (n ? 0 : A.crossAxis),
                  r = i.reference[c] + i.reference[e] + (n ? 0 : (null == (m = a.offset) ? void 0 : m[c]) || 0) - (n ? A.crossAxis : 0);
                h < t ? h = t : h > r && (h = r)
              }
              return {
                [f]: p,
                [c]: h
              }
            }
          }
        },
        Wh = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(n) {
              const {
                placement: t,
                rects: r,
                platform: o,
                elements: i
              } = n, {
                apply: a = (() => {}),
                ...s
              } = kh(e, n), u = await Mh(n, s), l = Bh(t), d = xh(t), c = "y" === Sh(t), {
                width: f,
                height: p
              } = r.floating;
              let h, y;
              "top" === l || "bottom" === l ? (h = l, y = d === (await (null == o.isRTL ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = l, h = "end" === d ? "top" : "bottom");
              const A = p - u[h],
                v = f - u[y],
                m = !n.middlewareData.shift;
              let b = A,
                g = v;
              if (c) {
                const e = f - u.left - u.right;
                g = d || m ? vh(v, e) : e
              } else {
                const e = p - u.top - u.bottom;
                b = d || m ? vh(A, e) : e
              }
              if (m && !d) {
                const e = mh(u.left, 0),
                  n = mh(u.right, 0),
                  t = mh(u.top, 0),
                  r = mh(u.bottom, 0);
                c ? g = f - 2 * (0 !== e || 0 !== n ? e + n : mh(u.left, u.right)) : b = p - 2 * (0 !== t || 0 !== r ? t + r : mh(u.top, u.bottom))
              }
              await a({
                ...n,
                availableWidth: g,
                availableHeight: b
              });
              const C = await o.getDimensions(i.floating);
              return f !== C.width || p !== C.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        };

      function Kh(e) {
        return Yh(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Xh(e) {
        var n;
        return (null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView) || window
      }

      function $h(e) {
        var n;
        return null == (n = (Yh(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : n.documentElement
      }

      function Yh(e) {
        return e instanceof Node || e instanceof Xh(e).Node
      }

      function Zh(e) {
        return e instanceof Element || e instanceof Xh(e).Element
      }

      function Qh(e) {
        return e instanceof HTMLElement || e instanceof Xh(e).HTMLElement
      }

      function Jh(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof Xh(e).ShadowRoot)
      }

      function ey(e) {
        const {
          overflow: n,
          overflowX: t,
          overflowY: r,
          display: o
        } = iy(e);
        return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !["inline", "contents"].includes(o)
      }

      function ny(e) {
        return ["table", "td", "th"].includes(Kh(e))
      }

      function ty(e) {
        const n = ry(),
          t = iy(e);
        return "none" !== t.transform || "none" !== t.perspective || !!t.containerType && "normal" !== t.containerType || !n && !!t.backdropFilter && "none" !== t.backdropFilter || !n && !!t.filter && "none" !== t.filter || ["transform", "perspective", "filter"].some((e => (t.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (t.contain || "").includes(e)))
      }

      function ry() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function oy(e) {
        return ["html", "body", "#document"].includes(Kh(e))
      }

      function iy(e) {
        return Xh(e).getComputedStyle(e)
      }

      function ay(e) {
        return Zh(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function sy(e) {
        if ("html" === Kh(e)) return e;
        const n = e.assignedSlot || e.parentNode || Jh(e) && e.host || $h(e);
        return Jh(n) ? n.host : n
      }

      function uy(e) {
        const n = sy(e);
        return oy(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qh(n) && ey(n) ? n : uy(n)
      }

      function ly(e, n, t) {
        var r;
        void 0 === n && (n = []), void 0 === t && (t = !0);
        const o = uy(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = Xh(o);
        return i ? n.concat(a, a.visualViewport || [], ey(o) ? o : [], a.frameElement && t ? ly(a.frameElement) : []) : n.concat(o, ly(o, [], t))
      }

      function dy(e) {
        const n = iy(e);
        let t = parseFloat(n.width) || 0,
          r = parseFloat(n.height) || 0;
        const o = Qh(e),
          i = o ? e.offsetWidth : t,
          a = o ? e.offsetHeight : r,
          s = bh(t) !== i || bh(r) !== a;
        return s && (t = i, r = a), {
          width: t,
          height: r,
          $: s
        }
      }

      function cy(e) {
        return Zh(e) ? e : e.contextElement
      }

      function fy(e) {
        const n = cy(e);
        if (!Qh(n)) return Ch(1);
        const t = n.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = dy(n);
        let a = (i ? bh(t.width) : t.width) / r,
          s = (i ? bh(t.height) : t.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const py = Ch(0);

      function hy(e) {
        const n = Xh(e);
        return ry() && n.visualViewport ? {
          x: n.visualViewport.offsetLeft,
          y: n.visualViewport.offsetTop
        } : py
      }

      function yy(e, n, t, r) {
        void 0 === n && (n = !1), void 0 === t && (t = !1);
        const o = e.getBoundingClientRect(),
          i = cy(e);
        let a = Ch(1);
        n && (r ? Zh(r) && (a = fy(r)) : a = fy(e));
        const s = function(e, n, t) {
          return void 0 === n && (n = !1), !(!t || n && t !== Xh(e)) && n
        }(i, t, r) ? hy(i) : Ch(0);
        let u = (o.left + s.x) / a.x,
          l = (o.top + s.y) / a.y,
          d = o.width / a.x,
          c = o.height / a.y;
        if (i) {
          const e = Xh(i),
            n = r && Zh(r) ? Xh(r) : r;
          let t = e.frameElement;
          for (; t && r && n !== e;) {
            const e = fy(t),
              n = t.getBoundingClientRect(),
              r = iy(t),
              o = n.left + (t.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = n.top + (t.clientTop + parseFloat(r.paddingTop)) * e.y;
            u *= e.x, l *= e.y, d *= e.x, c *= e.y, u += o, l += i, t = Xh(t).frameElement
          }
        }
        return Rh({
          width: d,
          height: c,
          x: u,
          y: l
        })
      }

      function Ay(e) {
        return yy($h(e)).left + ay(e).scrollLeft
      }

      function vy(e, n, t) {
        let r;
        if ("viewport" === n) r = function(e, n) {
          const t = Xh(e),
            r = $h(e),
            o = t.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            u = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = ry();
            (!e || e && "fixed" === n) && (s = o.offsetLeft, u = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: s,
            y: u
          }
        }(e, t);
        else if ("document" === n) r = function(e) {
          const n = $h(e),
            t = ay(e),
            r = e.ownerDocument.body,
            o = mh(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth),
            i = mh(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -t.scrollLeft + Ay(e);
          const s = -t.scrollTop;
          return "rtl" === iy(r).direction && (a += mh(n.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }($h(e));
        else if (Zh(n)) r = function(e, n) {
          const t = yy(e, !0, "fixed" === n),
            r = t.top + e.clientTop,
            o = t.left + e.clientLeft,
            i = Qh(e) ? fy(e) : Ch(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(n, t);
        else {
          const t = hy(e);
          r = {
            ...n,
            x: n.x - t.x,
            y: n.y - t.y
          }
        }
        return Rh(r)
      }

      function my(e, n) {
        const t = sy(e);
        return !(t === n || !Zh(t) || oy(t)) && ("fixed" === iy(t).position || my(t, n))
      }

      function by(e, n, t) {
        const r = Qh(n),
          o = $h(n),
          i = "fixed" === t,
          a = yy(e, !0, i, n);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const u = Ch(0);
        if (r || !r && !i)
          if (("body" !== Kh(n) || ey(o)) && (s = ay(n)), r) {
            const e = yy(n, !0, i, n);
            u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
          } else o && (u.x = Ay(o));
        return {
          x: a.left + s.scrollLeft - u.x,
          y: a.top + s.scrollTop - u.y,
          width: a.width,
          height: a.height
        }
      }

      function gy(e, n) {
        return Qh(e) && "fixed" !== iy(e).position ? n ? n(e) : e.offsetParent : null
      }

      function Cy(e, n) {
        const t = Xh(e);
        if (!Qh(e)) return t;
        let r = gy(e, n);
        for (; r && ny(r) && "static" === iy(r).position;) r = gy(r, n);
        return r && ("html" === Kh(r) || "body" === Kh(r) && "static" === iy(r).position && !ty(r)) ? t : r || function(e) {
          let n = sy(e);
          for (; Qh(n) && !oy(n);) {
            if (ty(n)) return n;
            n = sy(n)
          }
          return null
        }(e) || t
      }
      const _y = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: n,
            offsetParent: t,
            strategy: r
          } = e;
          const o = Qh(t),
            i = $h(t);
          if (t === i) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            s = Ch(1);
          const u = Ch(0);
          if ((o || !o && "fixed" !== r) && (("body" !== Kh(t) || ey(i)) && (a = ay(t)), Qh(t))) {
            const e = yy(t);
            s = fy(t), u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
          }
          return {
            width: n.width * s.x,
            height: n.height * s.y,
            x: n.x * s.x - a.scrollLeft * s.x + u.x,
            y: n.y * s.y - a.scrollTop * s.y + u.y
          }
        },
        getDocumentElement: $h,
        getClippingRect: function(e) {
          let {
            element: n,
            boundary: t,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === t ? function(e, n) {
              const t = n.get(e);
              if (t) return t;
              let r = ly(e, [], !1).filter((e => Zh(e) && "body" !== Kh(e))),
                o = null;
              const i = "fixed" === iy(e).position;
              let a = i ? sy(e) : e;
              for (; Zh(a) && !oy(a);) {
                const n = iy(a),
                  t = ty(a);
                t || "fixed" !== n.position || (o = null), (i ? !t && !o : !t && "static" === n.position && o && ["absolute", "fixed"].includes(o.position) || ey(a) && !t && my(e, a)) ? r = r.filter((e => e !== a)) : o = n, a = sy(a)
              }
              return n.set(e, r), r
            }(n, this._c) : [].concat(t), r],
            a = i[0],
            s = i.reduce(((e, t) => {
              const r = vy(n, t, o);
              return e.top = mh(r.top, e.top), e.right = vh(r.right, e.right), e.bottom = vh(r.bottom, e.bottom), e.left = mh(r.left, e.left), e
            }), vy(n, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Cy,
        getElementRects: async function(e) {
          let {
            reference: n,
            floating: t,
            strategy: r
          } = e;
          const o = this.getOffsetParent || Cy,
            i = this.getDimensions;
          return {
            reference: by(n, await o(t), r),
            floating: {
              x: 0,
              y: 0,
              ...await i(t)
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          return dy(e)
        },
        getScale: fy,
        isElement: Zh,
        isRTL: function(e) {
          return "rtl" === iy(e).direction
        }
      };
      const Ey = (e, n, t) => {
          const r = new Map,
            o = {
              platform: _y,
              ...t
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, n, t) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = t, s = i.filter(Boolean), u = await (null == a.isRTL ? void 0 : a.isRTL(n));
            let l = await a.getElementRects({
                reference: e,
                floating: n,
                strategy: o
              }),
              {
                x: d,
                y: c
              } = Dh(l, r, u),
              f = r,
              p = {},
              h = 0;
            for (let t = 0; t < s.length; t++) {
              const {
                name: i,
                fn: y
              } = s[t], {
                x: A,
                y: v,
                data: m,
                reset: b
              } = await y({
                x: d,
                y: c,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: p,
                rects: l,
                platform: a,
                elements: {
                  reference: e,
                  floating: n
                }
              });
              d = null != A ? A : d, c = null != v ? v : c, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...m
                }
              }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (l = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: n,
                strategy: o
              }) : b.rects), ({
                x: d,
                y: c
              } = Dh(l, f, u))), t = -1)
            }
            return {
              x: d,
              y: c,
              placement: f,
              strategy: o,
              middlewareData: p
            }
          })(e, n, {
            ...o,
            platform: i
          })
        },
        wy = e => ({
          name: "arrow",
          options: e,
          fn(n) {
            const {
              element: t,
              padding: r
            } = "function" == typeof e ? e(n) : e;
            return t && (o = t, {}.hasOwnProperty.call(o, "current")) ? null != t.current ? Ih({
              element: t.current,
              padding: r
            }).fn(n) : {} : t ? Ih({
              element: t,
              padding: r
            }).fn(n) : {};
            var o
          }
        });
      var ky = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

      function By(e, n) {
        if (e === n) return !0;
        if (typeof e != typeof n) return !1;
        if ("function" == typeof e && e.toString() === n.toString()) return !0;
        let t, r, o;
        if (e && n && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (t = e.length, t != n.length) return !1;
            for (r = t; 0 != r--;)
              if (!By(e[r], n[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length) return !1;
          for (r = t; 0 != r--;)
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = t; 0 != r--;) {
            const t = o[r];
            if (!("_owner" === t && e.$$typeof || By(e[t], n[t]))) return !1
          }
          return !0
        }
        return e != e && n != n
      }

      function xy(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Py(e, n) {
        const t = xy(e);
        return Math.round(n * t) / t
      }

      function Ty(e) {
        const n = s.useRef(e);
        return ky((() => {
          n.current = e
        })), n
      }
      var Sy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? mf.DX : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        jy = s.forwardRef(((e, n) => {
          const {
            children: t,
            width: r = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, i.jsx)(Sy.svg, {
            ...a,
            ref: n,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : (0, i.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      jy.displayName = "Arrow";
      var Oy = jy;

      function Ny(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function Ly(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
      var Ry = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? mf.DX : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        Dy = "Popper",
        [My, Iy] = function(e, n = []) {
          let t = [];
          const r = () => {
            const n = t.map((e => s.createContext(e)));
            return function(t) {
              const r = t?.[e] || n;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...t,
                  [e]: r
                }
              })), [t, r])
            }
          };
          return r.scopeName = e, [function(n, r) {
            const o = s.createContext(r),
              a = t.length;

            function u(n) {
              const {
                scope: t,
                children: r,
                ...u
              } = n, l = t?.[e][a] || o, d = s.useMemo((() => u), Object.values(u));
              return (0, i.jsx)(l.Provider, {
                value: d,
                children: r
              })
            }
            return t = [...t, r], u.displayName = n + "Provider", [u, function(t, i) {
              const u = i?.[e][a] || o,
                l = s.useContext(u);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``)
            }]
          }, Ly(r, ...n)]
        }(Dy),
        [Hy, zy] = My(Dy),
        qy = e => {
          const {
            __scopePopper: n,
            children: t
          } = e, [r, o] = s.useState(null);
          return (0, i.jsx)(Hy, {
            scope: n,
            anchor: r,
            onAnchorChange: o,
            children: t
          })
        };
      qy.displayName = Dy;
      var Fy = "PopperAnchor",
        Uy = s.forwardRef(((e, n) => {
          const {
            __scopePopper: t,
            virtualRef: r,
            ...o
          } = e, a = zy(Fy, t), u = s.useRef(null), l = Ny(n, u);
          return s.useEffect((() => {
            a.onAnchorChange(r?.current || u.current)
          })), r ? null : (0, i.jsx)(Ry.div, {
            ...o,
            ref: l
          })
        }));
      Uy.displayName = Fy;
      var Vy = "PopperContent",
        [Gy, Wy] = My(Vy),
        Ky = s.forwardRef(((e, n) => {
          const {
            __scopePopper: t,
            side: r = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: u = 0,
            arrowPadding: l = 0,
            avoidCollisions: d = !0,
            collisionBoundary: c = [],
            collisionPadding: f = 0,
            sticky: p = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: A,
            ...v
          } = e, m = zy(Vy, t), [b, g] = s.useState(null), C = Ny(n, (e => g(e))), [_, E] = s.useState(null), w = vf(_), k = w?.width ?? 0, B = w?.height ?? 0, x = r + ("center" !== a ? "-" + a : ""), P = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, T = Array.isArray(c) ? c : [c], S = T.length > 0, j = {
            padding: P,
            boundary: T.filter(Zy),
            altBoundary: S
          }, {
            refs: O,
            floatingStyles: N,
            placement: L,
            isPositioned: R,
            middlewareData: D
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: n = "bottom",
              strategy: t = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: i,
                floating: a
              } = {},
              transform: u = !0,
              whileElementsMounted: l,
              open: d
            } = e, [c, f] = s.useState({
              x: 0,
              y: 0,
              strategy: t,
              placement: n,
              middlewareData: {},
              isPositioned: !1
            }), [p, h] = s.useState(r);
            By(p, r) || h(r);
            const [y, A] = s.useState(null), [v, m] = s.useState(null), b = s.useCallback((e => {
              e != E.current && (E.current = e, A(e))
            }), [A]), g = s.useCallback((e => {
              e !== w.current && (w.current = e, m(e))
            }), [m]), C = i || y, _ = a || v, E = s.useRef(null), w = s.useRef(null), k = s.useRef(c), B = Ty(l), x = Ty(o), P = s.useCallback((() => {
              if (!E.current || !w.current) return;
              const e = {
                placement: n,
                strategy: t,
                middleware: p
              };
              x.current && (e.platform = x.current), Ey(E.current, w.current, e).then((e => {
                const n = {
                  ...e,
                  isPositioned: !0
                };
                T.current && !By(k.current, n) && (k.current = n, au.flushSync((() => {
                  f(n)
                })))
              }))
            }), [p, n, t, x]);
            ky((() => {
              !1 === d && k.current.isPositioned && (k.current.isPositioned = !1, f((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [d]);
            const T = s.useRef(!1);
            ky((() => (T.current = !0, () => {
              T.current = !1
            })), []), ky((() => {
              if (C && (E.current = C), _ && (w.current = _), C && _) {
                if (B.current) return B.current(C, _, P);
                P()
              }
            }), [C, _, P, B]);
            const S = s.useMemo((() => ({
                reference: E,
                floating: w,
                setReference: b,
                setFloating: g
              })), [b, g]),
              j = s.useMemo((() => ({
                reference: C,
                floating: _
              })), [C, _]),
              O = s.useMemo((() => {
                const e = {
                  position: t,
                  left: 0,
                  top: 0
                };
                if (!j.floating) return e;
                const n = Py(j.floating, c.x),
                  r = Py(j.floating, c.y);
                return u ? {
                  ...e,
                  transform: "translate(" + n + "px, " + r + "px)",
                  ...xy(j.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: t,
                  left: n,
                  top: r
                }
              }), [t, u, j.floating, c.x, c.y]);
            return s.useMemo((() => ({
              ...c,
              update: P,
              refs: S,
              elements: j,
              floatingStyles: O
            })), [c, P, S, j, O])
          }({
            strategy: "fixed",
            placement: x,
            whileElementsMounted: (...e) => function(e, n, t, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, l = cy(e), d = o || i ? [...l ? ly(l) : [], ...ly(n)] : [];
              d.forEach((e => {
                o && e.addEventListener("scroll", t, {
                  passive: !0
                }), i && e.addEventListener("resize", t)
              }));
              const c = l && s ? function(e, n) {
                let t, r = null;
                const o = $h(e);

                function i() {
                  clearTimeout(t), r && r.disconnect(), r = null
                }
                return function a(s, u) {
                  void 0 === s && (s = !1), void 0 === u && (u = 1), i();
                  const {
                    left: l,
                    top: d,
                    width: c,
                    height: f
                  } = e.getBoundingClientRect();
                  if (s || n(), !c || !f) return;
                  const p = {
                    rootMargin: -gh(d) + "px " + -gh(o.clientWidth - (l + c)) + "px " + -gh(o.clientHeight - (d + f)) + "px " + -gh(l) + "px",
                    threshold: mh(0, vh(1, u)) || 1
                  };
                  let h = !0;

                  function y(e) {
                    const n = e[0].intersectionRatio;
                    if (n !== u) {
                      if (!h) return a();
                      n ? a(!1, n) : t = setTimeout((() => {
                        a(!1, 1e-7)
                      }), 100)
                    }
                    h = !1
                  }
                  try {
                    r = new IntersectionObserver(y, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(y, p)
                  }
                  r.observe(e)
                }(!0), i
              }(l, t) : null;
              let f, p = -1,
                h = null;
              a && (h = new ResizeObserver((e => {
                let [r] = e;
                r && r.target === l && h && (h.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame((() => {
                  h && h.observe(n)
                }))), t()
              })), l && !u && h.observe(l), h.observe(n));
              let y = u ? yy(e) : null;
              return u && function n() {
                const r = yy(e);
                !y || r.x === y.x && r.y === y.y && r.width === y.width && r.height === y.height || t(), y = r, f = requestAnimationFrame(n)
              }(), t(), () => {
                d.forEach((e => {
                  o && e.removeEventListener("scroll", t), i && e.removeEventListener("resize", t)
                })), c && c(), h && h.disconnect(), h = null, u && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: m.anchor
            },
            middleware: [Uh({
              mainAxis: o + B,
              alignmentAxis: u
            }), d && Vh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === p ? Gh() : void 0,
              ...j
            }), d && Hh({
              ...j
            }), Wh({
              ...j,
              apply: ({
                elements: e,
                rects: n,
                availableWidth: t,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = n.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${t}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), _ && wy({
              element: _,
              padding: l
            }), Qy({
              arrowWidth: k,
              arrowHeight: B
            }), h && Fh({
              strategy: "referenceHidden",
              ...j
            })]
          }), [M, I] = Jy(L), H = cf(A);
          Af((() => {
            R && H?.()
          }), [R, H]);
          const z = D.arrow?.x,
            q = D.arrow?.y,
            F = 0 !== D.arrow?.centerOffset,
            [U, V] = s.useState();
          return Af((() => {
            b && V(window.getComputedStyle(b).zIndex)
          }), [b]), (0, i.jsx)("div", {
            ref: O.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...N,
              transform: R ? N.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [D.transformOrigin?.x, D.transformOrigin?.y].join(" "),
              ...D.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, i.jsx)(Gy, {
              scope: t,
              placedSide: M,
              onArrowChange: E,
              arrowX: z,
              arrowY: q,
              shouldHideArrow: F,
              children: (0, i.jsx)(Ry.div, {
                "data-side": M,
                "data-align": I,
                ...v,
                ref: C,
                style: {
                  ...v.style,
                  animation: R ? void 0 : "none"
                }
              })
            })
          })
        }));
      Ky.displayName = Vy;
      var Xy = "PopperArrow",
        $y = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Yy = s.forwardRef((function(e, n) {
          const {
            __scopePopper: t,
            ...r
          } = e, o = Wy(Xy, t), a = $y[o.placedSide];
          return (0, i.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, i.jsx)(Oy, {
              ...r,
              ref: n,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function Zy(e) {
        return null !== e
      }
      Yy.displayName = Xy;
      var Qy = e => ({
        name: "transformOrigin",
        options: e,
        fn(n) {
          const {
            placement: t,
            rects: r,
            middlewareData: o
          } = n, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [u, l] = Jy(t), d = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], c = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let p = "",
            h = "";
          return "bottom" === u ? (p = i ? d : `${c}px`, h = -s + "px") : "top" === u ? (p = i ? d : `${c}px`, h = `${r.floating.height+s}px`) : "right" === u ? (p = -s + "px", h = i ? d : `${f}px`) : "left" === u && (p = `${r.floating.width+s}px`, h = i ? d : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function Jy(e) {
        const [n, t = "center"] = e.split("-");
        return [n, t]
      }
      var eA = qy,
        nA = Uy,
        tA = Ky,
        rA = Yy,
        oA = s.forwardRef(((e, n) => {
          const {
            container: t,
            ...r
          } = e, [o, a] = s.useState(!1);
          Af((() => a(!0)), []);
          const u = t || o && globalThis?.document?.body;
          return u ? au.createPortal((0, i.jsx)(ih.div, {
            ...r,
            ref: n
          }), u) : null
        }));
      oA.displayName = "Portal";
      var iA = e => {
        const {
          present: n,
          children: t
        } = e, r = function(e) {
          const [n, t] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [u, l] = function(e, n) {
            return s.useReducer(((e, t) => n[e][t] ?? e), e)
          }(a, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return s.useEffect((() => {
            const e = aA(r.current);
            i.current = "mounted" === u ? e : "none"
          }), [u]), Af((() => {
            const n = r.current,
              t = o.current;
            if (t !== e) {
              const r = i.current,
                a = aA(n);
              l(e ? "MOUNT" : "none" === a || "none" === n?.display ? "UNMOUNT" : t && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Af((() => {
            if (n) {
              const e = e => {
                  const t = aA(r.current).includes(e.animationName);
                  e.target === n && t && au.flushSync((() => l("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (i.current = aA(r.current))
                };
              return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
              }
            }
            l("ANIMATION_END")
          }), [n, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(u),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), t(e)
            }), [])
          }
        }(n), o = "function" == typeof t ? t({
          present: r.isPresent
        }) : s.Children.only(t), i = rh(r.ref, function(e) {
          let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = n && "isReactWarning" in n && n.isReactWarning;
          return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof t || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function aA(e) {
        return e?.animationName || "none"
      }
      iA.displayName = "Presence";
      var sA = s.forwardRef(((e, n) => (0, i.jsx)(ih.span, {
        ...e,
        ref: n,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style
        }
      })));
      sA.displayName = "VisuallyHidden";
      var uA = sA,
        [lA, dA] = function(e, n = []) {
          let t = [];
          const r = () => {
            const n = t.map((e => s.createContext(e)));
            return function(t) {
              const r = t?.[e] || n;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...t,
                  [e]: r
                }
              })), [t, r])
            }
          };
          return r.scopeName = e, [function(n, r) {
            const o = s.createContext(r),
              a = t.length;

            function u(n) {
              const {
                scope: t,
                children: r,
                ...u
              } = n, l = t?.[e][a] || o, d = s.useMemo((() => u), Object.values(u));
              return (0, i.jsx)(l.Provider, {
                value: d,
                children: r
              })
            }
            return t = [...t, r], u.displayName = n + "Provider", [u, function(t, i) {
              const u = i?.[e][a] || o,
                l = s.useContext(u);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``)
            }]
          }, oh(r, ...n)]
        }("Tooltip", [Iy]),
        cA = Iy(),
        fA = "TooltipProvider",
        pA = 700,
        hA = "tooltip.open",
        [yA, AA] = lA(fA),
        vA = e => {
          const {
            __scopeTooltip: n,
            delayDuration: t = pA,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, [u, l] = s.useState(!0), d = s.useRef(!1), c = s.useRef(0);
          return s.useEffect((() => {
            const e = c.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(yA, {
            scope: n,
            isOpenDelayed: u,
            delayDuration: t,
            onOpen: s.useCallback((() => {
              window.clearTimeout(c.current), l(!1)
            }), []),
            onClose: s.useCallback((() => {
              window.clearTimeout(c.current), c.current = window.setTimeout((() => l(!0)), r)
            }), [r]),
            isPointerInTransitRef: d,
            onPointerInTransitChange: s.useCallback((e => {
              d.current = e
            }), []),
            disableHoverableContent: o,
            children: a
          })
        };
      vA.displayName = fA;
      var mA = "Tooltip",
        [bA, gA] = lA(mA),
        CA = e => {
          const {
            __scopeTooltip: n,
            children: t,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: u,
            delayDuration: l
          } = e, d = AA(mA, e.__scopeTooltip), c = cA(n), [f, p] = s.useState(null), h = yh(), y = s.useRef(0), A = u ?? d.disableHoverableContent, v = l ?? d.delayDuration, m = s.useRef(!1), [b = !1, g] = ff({
            prop: r,
            defaultProp: o,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(hA))) : d.onClose(), a?.(e)
            }
          }), C = s.useMemo((() => b ? m.current ? "delayed-open" : "instant-open" : "closed"), [b]), _ = s.useCallback((() => {
            window.clearTimeout(y.current), m.current = !1, g(!0)
          }), [g]), E = s.useCallback((() => {
            window.clearTimeout(y.current), g(!1)
          }), [g]), w = s.useCallback((() => {
            window.clearTimeout(y.current), y.current = window.setTimeout((() => {
              m.current = !0, g(!0)
            }), v)
          }), [v, g]);
          return s.useEffect((() => () => window.clearTimeout(y.current)), []), (0, i.jsx)(eA, {
            ...c,
            children: (0, i.jsx)(bA, {
              scope: n,
              contentId: h,
              open: b,
              stateAttribute: C,
              trigger: f,
              onTriggerChange: p,
              onTriggerEnter: s.useCallback((() => {
                d.isOpenDelayed ? w() : _()
              }), [d.isOpenDelayed, w, _]),
              onTriggerLeave: s.useCallback((() => {
                A ? E() : window.clearTimeout(y.current)
              }), [E, A]),
              onOpen: _,
              onClose: E,
              disableHoverableContent: A,
              children: t
            })
          })
        };
      CA.displayName = mA;
      var _A = "TooltipTrigger",
        EA = s.forwardRef(((e, n) => {
          const {
            __scopeTooltip: t,
            ...r
          } = e, o = gA(_A, t), a = AA(_A, t), u = cA(t), l = rh(n, s.useRef(null), o.onTriggerChange), d = s.useRef(!1), c = s.useRef(!1), f = s.useCallback((() => d.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, i.jsx)(nA, {
            asChild: !0,
            ...u,
            children: (0, i.jsx)(ih.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: th(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              })),
              onPointerLeave: th(e.onPointerLeave, (() => {
                o.onTriggerLeave(), c.current = !1
              })),
              onPointerDown: th(e.onPointerDown, (() => {
                d.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: th(e.onFocus, (() => {
                d.current || o.onOpen()
              })),
              onBlur: th(e.onBlur, o.onClose),
              onClick: th(e.onClick, o.onClose)
            })
          })
        }));
      EA.displayName = _A;
      var wA = "TooltipPortal",
        [kA, BA] = lA(wA, {
          forceMount: void 0
        }),
        xA = e => {
          const {
            __scopeTooltip: n,
            forceMount: t,
            children: r,
            container: o
          } = e, a = gA(wA, n);
          return (0, i.jsx)(kA, {
            scope: n,
            forceMount: t,
            children: (0, i.jsx)(iA, {
              present: t || a.open,
              children: (0, i.jsx)(oA, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      xA.displayName = wA;
      var PA = "TooltipContent",
        TA = s.forwardRef(((e, n) => {
          const t = BA(PA, e.__scopeTooltip),
            {
              forceMount: r = t.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = gA(PA, e.__scopeTooltip);
          return (0, i.jsx)(iA, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(NA, {
              side: o,
              ...a,
              ref: n
            }) : (0, i.jsx)(SA, {
              side: o,
              ...a,
              ref: n
            })
          })
        })),
        SA = s.forwardRef(((e, n) => {
          const t = gA(PA, e.__scopeTooltip),
            r = AA(PA, e.__scopeTooltip),
            o = s.useRef(null),
            a = rh(n, o),
            [u, l] = s.useState(null),
            {
              trigger: d,
              onClose: c
            } = t,
            f = o.current,
            {
              onPointerInTransitChange: p
            } = r,
            h = s.useCallback((() => {
              l(null), p(!1)
            }), [p]),
            y = s.useCallback(((e, n) => {
              const t = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, n, t = 5) {
                  const r = [];
                  switch (n) {
                    case "top":
                      r.push({
                        x: e.x - t,
                        y: e.y + t
                      }, {
                        x: e.x + t,
                        y: e.y + t
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - t,
                        y: e.y - t
                      }, {
                        x: e.x + t,
                        y: e.y - t
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + t,
                        y: e.y - t
                      }, {
                        x: e.x + t,
                        y: e.y + t
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - t,
                        y: e.y - t
                      }, {
                        x: e.x - t,
                        y: e.y + t
                      })
                  }
                  return r
                }(r, function(e, n) {
                  const t = Math.abs(n.top - e.y),
                    r = Math.abs(n.bottom - e.y),
                    o = Math.abs(n.right - e.x),
                    i = Math.abs(n.left - e.x);
                  switch (Math.min(t, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case t:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, t.getBoundingClientRect())),
                i = function(e) {
                  const n = e.slice();
                  return n.sort(((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const n = [];
                      for (let t = 0; t < e.length; t++) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      n.pop();
                      const t = [];
                      for (let n = e.length - 1; n >= 0; n--) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      return t.pop(), 1 === n.length && 1 === t.length && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t)
                    }(n)
                }([...o, ... function(e) {
                  const {
                    top: n,
                    right: t,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: n
                  }, {
                    x: t,
                    y: n
                  }, {
                    x: t,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(n.getBoundingClientRect())]);
              l(i), p(!0)
            }), [p]);
          return s.useEffect((() => () => h()), [h]), s.useEffect((() => {
            if (d && f) {
              const e = e => y(e, f),
                n = e => y(e, d);
              return d.addEventListener("pointerleave", e), f.addEventListener("pointerleave", n), () => {
                d.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", n)
              }
            }
          }), [d, f, y, h]), s.useEffect((() => {
            if (u) {
              const e = e => {
                const n = e.target,
                  t = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = d?.contains(n) || f?.contains(n),
                  o = ! function(e, n) {
                    const {
                      x: t,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = n.length - 1; e < n.length; i = e++) {
                      const a = n[e].x,
                        s = n[e].y,
                        u = n[i].x,
                        l = n[i].y;
                      s > r != l > r && t < (u - a) * (r - s) / (l - s) + a && (o = !o)
                    }
                    return o
                  }(t, u);
                r ? h() : o && (h(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [d, f, u, c, h]), (0, i.jsx)(NA, {
            ...e,
            ref: a
          })
        })),
        [jA, OA] = lA(mA, {
          isInside: !1
        }),
        NA = s.forwardRef(((e, n) => {
          const {
            __scopeTooltip: t,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            ...l
          } = e, d = gA(PA, t), c = cA(t), {
            onClose: f
          } = d;
          return s.useEffect((() => (document.addEventListener(hA, f), () => document.removeEventListener(hA, f))), [f]), s.useEffect((() => {
            if (d.trigger) {
              const e = e => {
                const n = e.target;
                n?.contains(d.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [d.trigger, f]), (0, i.jsx)(dh, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)(tA, {
              "data-state": d.stateAttribute,
              ...c,
              ...l,
              ref: n,
              style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, i.jsx)(mf.xV, {
                children: r
              }), (0, i.jsx)(jA, {
                scope: t,
                isInside: !0,
                children: (0, i.jsx)(uA, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      TA.displayName = PA;
      var LA = "TooltipArrow",
        RA = s.forwardRef(((e, n) => {
          const {
            __scopeTooltip: t,
            ...r
          } = e, o = cA(t);
          return OA(LA, t).isInside ? null : (0, i.jsx)(rA, {
            ...o,
            ...r,
            ref: n
          })
        }));
      RA.displayName = LA;
      var DA = vA,
        MA = CA,
        IA = EA,
        HA = xA,
        zA = TA,
        qA = RA;
      const FA = ({
        content: e,
        children: n,
        side: t = "top",
        sideOffset: r = 8,
        align: o = "center",
        alignOffset: a = 0,
        avoidCollisions: u = !0,
        collisionBoundary: l,
        collisionPadding: d,
        sticky: c = "partial",
        onEscapeKeyDown: f,
        onPointerDownOutside: p,
        label: h,
        defaultOpen: y,
        open: A,
        onOpenChange: v,
        delayDuration: m = 400,
        portal: b = !0,
        arrow: g = !0,
        portalContainer: C,
        testId: _
      }) => {
        const [E = !1, w] = (0, In.ic)({
          defaultProp: y,
          prop: A,
          onChange: v
        }), k = (0, In.ZC)(E), B = Qs({
          opacity: E ? 1 : 0,
          immediate: E && !k
        }), x = "left" === t || "right" === t ? "center" : o, P = b ? {
          container: C
        } : {}, T = b ? HA : s.Fragment, S = g ? {
          className: "foundry_h3lgaa2"
        } : {}, j = g ? qA : s.Fragment;
        return (0, i.jsx)(DA, {
          delayDuration: m,
          children: (0, i.jsxs)(MA, {
            open: E,
            onOpenChange: w,
            children: [(0, i.jsx)(IA, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: n
            }), (0, i.jsx)(T, {
              ...P,
              children: (0, i.jsx)(zA, {
                side: t,
                align: x,
                sticky: c,
                forceMount: !0,
                "aria-label": h,
                "data-testid": _,
                sideOffset: r,
                alignOffset: a,
                onEscapeKeyDown: f,
                avoidCollisions: u,
                collisionPadding: d,
                collisionBoundary: l,
                onPointerDownOutside: p,
                children: (0, i.jsxs)(Jp.div, {
                  className: "foundry_h3lgaa0",
                  style: B,
                  children: [(0, i.jsx)(Z, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, i.jsx)(j, {
                    ...S
                  })]
                })
              })
            })]
          })
        })
      };
      var UA = t(36033),
        VA = {};
      VA.styleTagTransform = _(), VA.setAttributes = m(), VA.insert = A().bind(null, "head"), VA.domAPI = h(), VA.insertStyleElement = g(), f()(UA.A, VA), UA.A && UA.A.locals && UA.A.locals;
      var GA = "foundry_bwy1ds1",
        WA = "foundry_bwy1dsg",
        KA = "foundry_bwy1dsf";
      const XA = e => {
          e.preventDefault?.()
        },
        $A = (0, s.forwardRef)((({
          onClose: e,
          onDownload: n,
          zoomLevel: t,
          zoomIn: r,
          zoomOut: o,
          zoomTo: a,
          minZoomLevel: s,
          maxZoomLevel: u,
          canZoomIn: l,
          canZoomOut: d,
          resetZoom: c,
          caption: f,
          showDownloadButton: p,
          defaultZoomLevel: h,
          showZoomControls: y
        }, A) => {
          const v = Wc(),
            m = (0, In.Ub)("screen and (max-width: 1024px)"),
            b = t !== h,
            g = m ? "SM" : "LG",
            C = Qs({
              opacity: b ? 1 : 0,
              immediate: (0, In.jt)()
            });
          xp(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: y
          }), xp(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: y
          }), xp("r", (() => c?.()), {
            preventDefault: !0,
            enabled: y
          });
          const _ = (0, In.rl)() && m;
          return (0, i.jsx)(wp, {
            children: (0, i.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: A,
              children: [(0, i.jsx)(FA, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: XA,
                content: (0, i.jsxs)("div", {
                  className: KA,
                  children: [v.formatMessage(Zf), (0, i.jsx)(ae, {
                    className: WA,
                    children: v.formatMessage(Qf, {
                      shortcut: (0, i.jsx)(zp, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, i.jsx)(Mp, {
                  size: g,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Zf),
                  className: (0, Ze.$)(GA, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!_ && y && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, i.jsx)(FA, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: XA,
                      content: (0, i.jsxs)("div", {
                        className: KA,
                        children: [v.formatMessage(Jf), (0, i.jsx)(ae, {
                          className: WA,
                          children: v.formatMessage(ep, {
                            shortcut: (0, i.jsx)(zp, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Mp, {
                        size: g,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Jf),
                        className: (0, Ze.$)(GA, "foundry_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, i.jsxs)(Kf, {
                      className: "foundry_bwy1dsa",
                      value: [t],
                      max: u,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, i.jsx)(Xf, {
                        className: "foundry_bwy1dsb",
                        children: (0, i.jsx)($f, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, i.jsx)(FA, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: XA,
                        content: v.formatMessage(ap, {
                          zoom: t.toFixed(0)
                        }),
                        children: (0, i.jsx)(Yf, {
                          className: "foundry_bwy1dsd",
                          "aria-label": v.formatMessage(ip),
                          children: (0, i.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, i.jsx)(FA, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: XA,
                      content: (0, i.jsxs)("div", {
                        className: KA,
                        children: [v.formatMessage(np), (0, i.jsx)(ae, {
                          className: WA,
                          children: v.formatMessage(tp, {
                            shortcut: (0, i.jsx)(zp, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Mp, {
                        size: g,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(np),
                        className: (0, Ze.$)(GA, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !d
                      })
                    })]
                  }), (0, i.jsx)(bu.div, {
                    style: C,
                    children: (0, i.jsx)(FA, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: XA,
                      content: (0, i.jsxs)("div", {
                        className: KA,
                        children: [v.formatMessage(rp), (0, i.jsx)(ae, {
                          className: WA,
                          children: v.formatMessage(op, {
                            shortcut: (0, i.jsx)(zp, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Mp, {
                        size: g,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: v.formatMessage(rp),
                        className: (0, Ze.$)(GA, "foundry_bwy1ds7"),
                        onPress: c,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), p && _ && (0, i.jsx)(FA, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: XA,
                  content: v.formatMessage(up),
                  children: (0, i.jsx)(Mp, {
                    size: g,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(sp),
                    className: GA,
                    onPress: e
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [f && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, i.jsx)(F, {
                    "aria-hidden": !0,
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), p && !_ && (0, i.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, i.jsx)(FA, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: XA,
                    content: v.formatMessage(up),
                    children: (0, i.jsx)(Mp, {
                      size: g,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(sp),
                      className: GA,
                      onPress: n
                    })
                  })
                })]
              })]
            })
          })
        }));
      var YA = t(86365),
        ZA = {};
      ZA.styleTagTransform = _(), ZA.setAttributes = m(), ZA.insert = A().bind(null, "head"), ZA.domAPI = h(), ZA.insertStyleElement = g(), f()(YA.A, ZA), YA.A && YA.A.locals && YA.A.locals;
      var QA = "foundry_1a74xwb4";

      function JA(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function ev(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function nv(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
      var tv, rv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? mf.DX : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        ov = "dismissableLayer.update",
        iv = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        av = s.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...d
          } = e, c = s.useContext(iv), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, y] = s.useState({}), A = ev(n, (e => p(e))), v = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = f ? v.indexOf(f) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= b, E = function(e, n = globalThis?.document) {
            const t = cf(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      uv("dismissableLayer.pointerDownOutside", t, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = r, n.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else n.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  n.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), n.removeEventListener("pointerdown", e), n.removeEventListener("click", o.current)
              }
            }), [n, t]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const n = e.target,
              t = [...c.branches].some((e => e.contains(n)));
            _ && !t && (o?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h), w = function(e, n = globalThis?.document) {
            const t = cf(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && uv("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }), [n, t]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const n = e.target;
            [...c.branches].some((e => e.contains(n))) || (a?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h);
          return ah((e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          }), h), s.useEffect((() => {
            if (f) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (tv = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), sv(), () => {
              t && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = tv)
            }
          }), [f, h, t, c]), s.useEffect((() => () => {
            f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), sv())
          }), [f, c]), s.useEffect((() => {
            const e = () => y({});
            return document.addEventListener(ov, e), () => document.removeEventListener(ov, e)
          }), []), (0, i.jsx)(rv.div, {
            ...d,
            ref: A,
            style: {
              pointerEvents: C ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: JA(e.onFocusCapture, w.onFocusCapture),
            onBlurCapture: JA(e.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: JA(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function sv() {
        const e = new CustomEvent(ov);
        document.dispatchEvent(e)
      }

      function uv(e, n, t, {
        discrete: r
      }) {
        const o = t.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
          });
        n && o.addEventListener(e, n, {
          once: !0
        }), r ? function(e, n) {
          e && au.flushSync((() => e.dispatchEvent(n)))
        }(o, i) : o.dispatchEvent(i)
      }
      av.displayName = "DismissableLayer", s.forwardRef(((e, n) => {
        const t = s.useContext(iv),
          r = s.useRef(null),
          o = ev(n, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, i.jsx)(rv.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var lv = "focusScope.autoFocusOnMount",
        dv = "focusScope.autoFocusOnUnmount",
        cv = {
          bubbles: !1,
          cancelable: !0
        },
        fv = s.forwardRef(((e, n) => {
          const {
            loop: t = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...u
          } = e, [l, d] = s.useState(null), c = cf(o), f = cf(a), p = s.useRef(null), h = ev(n, (e => d(e))), y = s.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          s.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (y.paused || !l) return;
                  const n = e.target;
                  l.contains(n) ? p.current = n : Av(p.current, {
                    select: !0
                  })
                },
                n = function(e) {
                  if (y.paused || !l) return;
                  const n = e.relatedTarget;
                  null !== n && (l.contains(n) || Av(p.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const n of e) n.removedNodes.length > 0 && Av(l)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", n);
              const r = new MutationObserver(t);
              return l && r.observe(l, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", n), r.disconnect()
              }
            }
          }), [r, l, y.paused]), s.useEffect((() => {
            if (l) {
              vv.add(y);
              const e = document.activeElement;
              if (!l.contains(e)) {
                const n = new CustomEvent(lv, cv);
                l.addEventListener(lv, c), l.dispatchEvent(n), n.defaultPrevented || (function(e, {
                  select: n = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const r of e)
                    if (Av(r, {
                        select: n
                      }), document.activeElement !== t) return
                }(pv(l).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Av(l))
              }
              return () => {
                l.removeEventListener(lv, c), setTimeout((() => {
                  const n = new CustomEvent(dv, cv);
                  l.addEventListener(dv, f), l.dispatchEvent(n), n.defaultPrevented || Av(e ?? document.body, {
                    select: !0
                  }), l.removeEventListener(dv, f), vv.remove(y)
                }), 0)
              }
            }
          }), [l, c, f, y]);
          const A = s.useCallback((e => {
            if (!t && !r) return;
            if (y.paused) return;
            const n = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (n && o) {
              const n = e.currentTarget,
                [r, i] = function(e) {
                  const n = pv(e);
                  return [hv(n, e), hv(n.reverse(), e)]
                }(n);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), t && Av(i, {
                select: !0
              })) : (e.preventDefault(), t && Av(r, {
                select: !0
              })) : o === n && e.preventDefault()
            }
          }), [t, r, y.paused]);
          return (0, i.jsx)(rv.div, {
            tabIndex: -1,
            ...u,
            ref: h,
            onKeyDown: A
          })
        }));

      function pv(e) {
        const n = [],
          t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const n = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || n ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; t.nextNode();) n.push(t.currentNode);
        return n
      }

      function hv(e, n) {
        for (const t of e)
          if (!yv(t, {
              upTo: n
            })) return t
      }

      function yv(e, {
        upTo: n
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== n && e === n) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function Av(e, {
        select: n = !1
      } = {}) {
        if (e && e.focus) {
          const t = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== t && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && n && e.select()
        }
      }
      fv.displayName = "FocusScope";
      var vv = function() {
        let e = [];
        return {
          add(n) {
            const t = e[0];
            n !== t && t?.pause(), e = mv(e, n), e.unshift(n)
          },
          remove(n) {
            e = mv(e, n), e[0]?.resume()
          }
        }
      }();

      function mv(e, n) {
        const t = [...e],
          r = t.indexOf(n);
        return -1 !== r && t.splice(r, 1), t
      }
      var bv = s.forwardRef(((e, n) => {
        const {
          container: t,
          ...r
        } = e, [o, a] = s.useState(!1);
        Af((() => a(!0)), []);
        const u = t || o && globalThis?.document?.body;
        return u ? au.createPortal((0, i.jsx)(rv.div, {
          ...r,
          ref: n
        }), u) : null
      }));
      bv.displayName = "Portal";
      var gv = e => {
        const {
          present: n,
          children: t
        } = e, r = function(e) {
          const [n, t] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [u, l] = function(e, n) {
            return s.useReducer(((e, t) => n[e][t] ?? e), e)
          }(a, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return s.useEffect((() => {
            const e = Cv(r.current);
            i.current = "mounted" === u ? e : "none"
          }), [u]), Af((() => {
            const n = r.current,
              t = o.current;
            if (t !== e) {
              const r = i.current,
                a = Cv(n);
              l(e ? "MOUNT" : "none" === a || "none" === n?.display ? "UNMOUNT" : t && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Af((() => {
            if (n) {
              const e = e => {
                  const t = Cv(r.current).includes(e.animationName);
                  e.target === n && t && au.flushSync((() => l("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (i.current = Cv(r.current))
                };
              return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
              }
            }
            l("ANIMATION_END")
          }), [n, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(u),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), t(e)
            }), [])
          }
        }(n), o = "function" == typeof t ? t({
          present: r.isPresent
        }) : s.Children.only(t), i = ev(r.ref, function(e) {
          let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = n && "isReactWarning" in n && n.isReactWarning;
          return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof t || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function Cv(e) {
        return e?.animationName || "none"
      }
      gv.displayName = "Presence";
      var _v = 0;

      function Ev() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var wv = "right-scroll-bar-position",
        kv = "width-before-scroll-bar",
        Bv = t(96433),
        xv = (0, t(2788).f)(),
        Pv = function() {},
        Tv = s.forwardRef((function(e, n) {
          var t = s.useRef(null),
            r = s.useState({
              onScrollCapture: Pv,
              onWheelCapture: Pv,
              onTouchMoveCapture: Pv
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            u = e.children,
            l = e.className,
            d = e.removeScrollBar,
            c = e.enabled,
            f = e.shards,
            p = e.sideCar,
            h = e.noIsolation,
            y = e.inert,
            A = e.allowPinchZoom,
            v = e.as,
            m = void 0 === v ? "div" : v,
            b = e.gapMode,
            g = (0, Ru.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = p,
            _ = (0, Bv.S)([t, n]),
            E = (0, Ru.__assign)((0, Ru.__assign)({}, g), o);
          return s.createElement(s.Fragment, null, c && s.createElement(C, {
            sideCar: xv,
            removeScrollBar: d,
            shards: f,
            noIsolation: h,
            inert: y,
            setCallbacks: i,
            allowPinchZoom: !!A,
            lockRef: t,
            gapMode: b
          }), a ? s.cloneElement(s.Children.only(u), (0, Ru.__assign)((0, Ru.__assign)({}, E), {
            ref: _
          })) : s.createElement(m, (0, Ru.__assign)({}, E, {
            className: l,
            ref: _
          }), u))
        }));
      Tv.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Tv.classNames = {
        fullWidth: kv,
        zeroRight: wv
      };
      var Sv = function(e) {
        var n = e.sideCar,
          t = (0, Ru.__rest)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = n.read();
        if (!r) throw new Error("Sidecar medium not found");
        return s.createElement(r, (0, Ru.__assign)({}, t))
      };
      Sv.isSideCarExport = !0;
      var jv = function() {
          var e = 0,
            n = null;
          return {
            add: function(r) {
              var o, i;
              0 == e && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = t.nc;
                return n && e.setAttribute("nonce", n), e
              }()) && (i = r, (o = n).styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(n)), e++
            },
            remove: function() {
              !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
          }
        },
        Ov = function() {
          var e, n = (e = jv(), function(n, t) {
            s.useEffect((function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }), [n && t])
          });
          return function(e) {
            var t = e.styles,
              r = e.dynamic;
            return n(t, r), null
          }
        },
        Nv = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Lv = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Rv = Ov(),
        Dv = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(wv, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(kv, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(wv, " .").concat(wv, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(kv, " .").concat(kv, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Mv = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            i = s.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Nv;
                var n = function(e) {
                    var n = window.getComputedStyle(document.body),
                      t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = n["padding" === e ? "paddingTop" : "marginTop"],
                      o = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [Lv(t), Lv(r), Lv(o)]
                  }(e),
                  t = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: n[0],
                  top: n[1],
                  right: n[2],
                  gap: Math.max(0, r - t + n[2] - n[0])
                }
              }(o)
            }), [o]);
          return s.createElement(Rv, {
            styles: Dv(i, !n, o, t ? "" : "!important")
          })
        },
        Iv = !1;
      if ("undefined" != typeof window) try {
        var Hv = Object.defineProperty({}, "passive", {
          get: function() {
            return Iv = !0, !0
          }
        });
        window.addEventListener("test", Hv, Hv), window.removeEventListener("test", Hv, Hv)
      } catch (e) {
        Iv = !1
      }
      var zv = !!Iv && {
          passive: !1
        },
        qv = function(e, n) {
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        Fv = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Uv(e, r)) {
              var o = Vv(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        Uv = function(e, n) {
          return "v" === e ? function(e) {
            return qv(e, "overflowY")
          }(n) : function(e) {
            return qv(e, "overflowX")
          }(n)
        },
        Vv = function(e, n) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(n) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n)
        },
        Gv = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Wv = function(e) {
          return [e.deltaX, e.deltaY]
        },
        Kv = function(e) {
          return e && "current" in e ? e.current : e
        },
        Xv = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        $v = 0,
        Yv = [];

      function Zv(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const Qv = (xv.useMedium((function(e) {
        var n = s.useRef([]),
          t = s.useRef([0, 0]),
          r = s.useRef(),
          o = s.useState($v++)[0],
          i = s.useState(Ov)[0],
          a = s.useRef(e);
        s.useEffect((function() {
          a.current = e
        }), [e]), s.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var n = (0, Ru.__spreadArray)([e.lockRef.current], (e.shards || []).map(Kv), !0).filter(Boolean);
            return n.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(o))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(o)), n.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(o))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var u = s.useCallback((function(e, n) {
            if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
            var o, i = Gv(e),
              s = t.current,
              u = "deltaX" in e ? e.deltaX : s[0] - i[0],
              l = "deltaY" in e ? e.deltaY : s[1] - i[1],
              d = e.target,
              c = Math.abs(u) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === c && "range" === d.type) return !1;
            var f = Fv(c, d);
            if (!f) return !0;
            if (f ? o = c : (o = "v" === c ? "h" : "v", f = Fv(c, d)), !f) return !1;
            if (!r.current && "changedTouches" in e && (u || l) && (r.current = o), !o) return !0;
            var p = r.current || o;
            return function(e, n, t, r, o) {
              var i = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                a = i * r,
                s = t.target,
                u = n.contains(s),
                l = !1,
                d = a > 0,
                c = 0,
                f = 0;
              do {
                var p = Vv(e, s),
                  h = p[0],
                  y = p[1] - p[2] - i * h;
                (h || y) && Uv(e, s) && (c += y, f += h), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!u && s !== document.body || u && (n.contains(s) || n === s));
              return (d && (o && Math.abs(c) < 1 || !o && a > c) || !d && (o && Math.abs(f) < 1 || !o && -a > f)) && (l = !0), l
            }(p, n, e, "h" === p ? u : l, !0)
          }), []),
          l = s.useCallback((function(e) {
            var t = e;
            if (Yv.length && Yv[Yv.length - 1] === i) {
              var r = "deltaY" in t ? Wv(t) : Gv(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var s = (a.current.shards || []).map(Kv).filter(Boolean).filter((function(e) {
                  return e.contains(t.target)
                }));
                (s.length > 0 ? u(t, s[0]) : !a.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          d = s.useCallback((function(e, t, r, o) {
            var i = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: Zv(r)
            };
            n.current.push(i), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          c = s.useCallback((function(e) {
            t.current = Gv(e), r.current = void 0
          }), []),
          f = s.useCallback((function(n) {
            d(n.type, Wv(n), n.target, u(n, e.lockRef.current))
          }), []),
          p = s.useCallback((function(n) {
            d(n.type, Gv(n), n.target, u(n, e.lockRef.current))
          }), []);
        s.useEffect((function() {
          return Yv.push(i), e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", l, zv), document.addEventListener("touchmove", l, zv), document.addEventListener("touchstart", c, zv),
            function() {
              Yv = Yv.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, zv), document.removeEventListener("touchmove", l, zv), document.removeEventListener("touchstart", c, zv)
            }
        }), []);
        var h = e.removeScrollBar,
          y = e.inert;
        return s.createElement(s.Fragment, null, y ? s.createElement(i, {
          styles: Xv(o)
        }) : null, h ? s.createElement(Mv, {
          gapMode: e.gapMode
        }) : null)
      })), Sv);
      var Jv = s.forwardRef((function(e, n) {
        return s.createElement(Tv, (0, Ru.__assign)({}, e, {
          ref: n,
          sideCar: Qv
        }))
      }));
      Jv.classNames = Tv.classNames;
      const em = Jv;
      var nm = new WeakMap,
        tm = new WeakMap,
        rm = {},
        om = 0,
        im = function(e) {
          return e && (e.host || im(e.parentNode))
        },
        am = function(e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, n, t, r) {
            var o = function(e, n) {
              return n.map((function(n) {
                if (e.contains(n)) return n;
                var t = im(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(n, Array.isArray(e) ? e : [e]);
            rm[t] || (rm[t] = new WeakMap);
            var i = rm[t],
              a = [],
              s = new Set,
              u = new Set(o),
              l = function(e) {
                e && !s.has(e) && (s.add(e), l(e.parentNode))
              };
            o.forEach(l);
            var d = function(e) {
              e && !u.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (s.has(e)) d(e);
                else {
                  var n = e.getAttribute(r),
                    o = null !== n && "false" !== n,
                    u = (nm.get(e) || 0) + 1,
                    l = (i.get(e) || 0) + 1;
                  nm.set(e, u), i.set(e, l), a.push(e), 1 === u && o && tm.set(e, !0), 1 === l && e.setAttribute(t, "true"), o || e.setAttribute(r, "true")
                }
              }))
            };
            return d(n), s.clear(), om++,
              function() {
                a.forEach((function(e) {
                  var n = nm.get(e) - 1,
                    o = i.get(e) - 1;
                  nm.set(e, n), i.set(e, o), n || (tm.has(e) || e.removeAttribute(r), tm.delete(e)), o || e.removeAttribute(t)
                })), --om || (nm = new WeakMap, nm = new WeakMap, tm = new WeakMap, rm = {})
              }
          }(r, o, t, "aria-hidden")) : function() {
            return null
          }
        },
        sm = "Dialog",
        [um, lm] = function(e, n = []) {
          let t = [];
          const r = () => {
            const n = t.map((e => s.createContext(e)));
            return function(t) {
              const r = t?.[e] || n;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...t,
                  [e]: r
                }
              })), [t, r])
            }
          };
          return r.scopeName = e, [function(n, r) {
            const o = s.createContext(r),
              a = t.length;

            function u(n) {
              const {
                scope: t,
                children: r,
                ...u
              } = n, l = t?.[e][a] || o, d = s.useMemo((() => u), Object.values(u));
              return (0, i.jsx)(l.Provider, {
                value: d,
                children: r
              })
            }
            return t = [...t, r], u.displayName = n + "Provider", [u, function(t, i) {
              const u = i?.[e][a] || o,
                l = s.useContext(u);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``)
            }]
          }, nv(r, ...n)]
        }(sm),
        [dm, cm] = um(sm),
        fm = e => {
          const {
            __scopeDialog: n,
            children: t,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: u = !0
          } = e, l = s.useRef(null), d = s.useRef(null), [c = !1, f] = ff({
            prop: r,
            defaultProp: o,
            onChange: a
          });
          return (0, i.jsx)(dm, {
            scope: n,
            triggerRef: l,
            contentRef: d,
            contentId: yh(),
            titleId: yh(),
            descriptionId: yh(),
            open: c,
            onOpenChange: f,
            onOpenToggle: s.useCallback((() => f((e => !e))), [f]),
            modal: u,
            children: t
          })
        };
      fm.displayName = sm;
      var pm = "DialogTrigger",
        hm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = cm(pm, t), a = ev(n, o.triggerRef);
          return (0, i.jsx)(rv.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Om(o.open),
            ...r,
            ref: a,
            onClick: JA(e.onClick, o.onOpenToggle)
          })
        }));
      hm.displayName = pm;
      var ym = "DialogPortal",
        [Am, vm] = um(ym, {
          forceMount: void 0
        }),
        mm = e => {
          const {
            __scopeDialog: n,
            forceMount: t,
            children: r,
            container: o
          } = e, a = cm(ym, n);
          return (0, i.jsx)(Am, {
            scope: n,
            forceMount: t,
            children: s.Children.map(r, (e => (0, i.jsx)(gv, {
              present: t || a.open,
              children: (0, i.jsx)(bv, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      mm.displayName = ym;
      var bm = "DialogOverlay",
        gm = s.forwardRef(((e, n) => {
          const t = vm(bm, e.__scopeDialog),
            {
              forceMount: r = t.forceMount,
              ...o
            } = e,
            a = cm(bm, e.__scopeDialog);
          return a.modal ? (0, i.jsx)(gv, {
            present: r || a.open,
            children: (0, i.jsx)(Cm, {
              ...o,
              ref: n
            })
          }) : null
        }));
      gm.displayName = bm;
      var Cm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = cm(bm, t);
          return (0, i.jsx)(em, {
            as: mf.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, i.jsx)(rv.div, {
              "data-state": Om(o.open),
              ...r,
              ref: n,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        _m = "DialogContent",
        Em = s.forwardRef(((e, n) => {
          const t = vm(_m, e.__scopeDialog),
            {
              forceMount: r = t.forceMount,
              ...o
            } = e,
            a = cm(_m, e.__scopeDialog);
          return (0, i.jsx)(gv, {
            present: r || a.open,
            children: a.modal ? (0, i.jsx)(wm, {
              ...o,
              ref: n
            }) : (0, i.jsx)(km, {
              ...o,
              ref: n
            })
          })
        }));
      Em.displayName = _m;
      var wm = s.forwardRef(((e, n) => {
          const t = cm(_m, e.__scopeDialog),
            r = s.useRef(null),
            o = ev(n, t.contentRef, r);
          return s.useEffect((() => {
            const e = r.current;
            if (e) return am(e)
          }), []), (0, i.jsx)(Bm, {
            ...e,
            ref: o,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: JA(e.onCloseAutoFocus, (e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            })),
            onPointerDownOutside: JA(e.onPointerDownOutside, (e => {
              const n = e.detail.originalEvent,
                t = 0 === n.button && !0 === n.ctrlKey;
              (2 === n.button || t) && e.preventDefault()
            })),
            onFocusOutside: JA(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        km = s.forwardRef(((e, n) => {
          const t = cm(_m, e.__scopeDialog),
            r = s.useRef(!1),
            o = s.useRef(!1);
          return (0, i.jsx)(Bm, {
            ...e,
            ref: n,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: n => {
              e.onCloseAutoFocus?.(n), n.defaultPrevented || (r.current || t.triggerRef.current?.focus(), n.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: n => {
              e.onInteractOutside?.(n), n.defaultPrevented || (r.current = !0, "pointerdown" === n.detail.originalEvent.type && (o.current = !0));
              const i = n.target,
                a = t.triggerRef.current?.contains(i);
              a && n.preventDefault(), "focusin" === n.detail.originalEvent.type && o.current && n.preventDefault()
            }
          })
        })),
        Bm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...u
          } = e, l = cm(_m, t), d = s.useRef(null), c = ev(n, d);
          return s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ev()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ev()), _v++, () => {
              1 === _v && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), _v--
            }
          }), []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(fv, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, i.jsx)(av, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": Om(l.open),
                ...u,
                ref: c,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Dm, {
                titleId: l.titleId
              }), (0, i.jsx)(Mm, {
                contentRef: d,
                descriptionId: l.descriptionId
              })]
            })]
          })
        })),
        xm = "DialogTitle",
        Pm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = cm(xm, t);
          return (0, i.jsx)(rv.h2, {
            id: o.titleId,
            ...r,
            ref: n
          })
        }));
      Pm.displayName = xm;
      var Tm = "DialogDescription",
        Sm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = cm(Tm, t);
          return (0, i.jsx)(rv.p, {
            id: o.descriptionId,
            ...r,
            ref: n
          })
        }));
      Sm.displayName = Tm;
      var jm = "DialogClose";

      function Om(e) {
        return e ? "open" : "closed"
      }
      s.forwardRef(((e, n) => {
        const {
          __scopeDialog: t,
          ...r
        } = e, o = cm(jm, t);
        return (0, i.jsx)(rv.button, {
          type: "button",
          ...r,
          ref: n,
          onClick: JA(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = jm;
      var Nm = "DialogTitleWarning",
        [Lm, Rm] = function(e, n) {
          const t = s.createContext(n);

          function r(e) {
            const {
              children: n,
              ...r
            } = e, o = s.useMemo((() => r), Object.values(r));
            return (0, i.jsx)(t.Provider, {
              value: o,
              children: n
            })
          }
          return r.displayName = e + "Provider", [r, function(r) {
            const o = s.useContext(t);
            if (o) return o;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(Nm, {
          contentName: _m,
          titleName: xm,
          docsSlug: "dialog"
        }),
        Dm = ({
          titleId: e
        }) => {
          const n = Rm(Nm),
            t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
          return s.useEffect((() => {
            e && (document.getElementById(e) || console.error(t))
          }), [t, e]), null
        },
        Mm = ({
          contentRef: e,
          descriptionId: n
        }) => {
          const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Rm("DialogDescriptionWarning").contentName}}.`;
          return s.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            n && r && (document.getElementById(n) || console.warn(t))
          }), [t, e, n]), null
        },
        Im = fm,
        Hm = hm,
        zm = mm,
        qm = Em,
        Fm = Pm,
        Um = Sm;
      const Vm = bu(gm),
        Gm = bu(qm),
        Wm = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Km = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Xm = (0, a.AK)(.77, 0, .175, 1),
        $m = ({
          src: e,
          alt: n,
          caption: t,
          crossOrigin: r,
          onReady: o,
          loading: a,
          referrerPolicy: u,
          thumbnail: l,
          thumbnailAspectRatio: c,
          thumbnailPosition: f,
          thumbnailFit: p,
          reduceMotion: h = !1,
          defaultOpen: y,
          open: A,
          onOpenChange: v,
          showOpenButton: m,
          showDownloadButton: b,
          zoomLevel: g,
          defaultZoomLevel: C = 100,
          minZoomLevel: _ = 100,
          maxZoomLevel: E = 300,
          zoomLevelStep: w = 100,
          onZoomLevelChange: k,
          gestureSettings: B,
          testId: x,
          showZoomControls: P = !0,
          disableGesturesOn: T,
          asChild: S,
          children: j,
          className: O,
          usePortal: N = !0,
          enabled: L = !0
        }) => {
          const R = (0, s.useRef)(null),
            D = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            H = eu(),
            z = eu(),
            q = eu(),
            F = (0, s.useRef)(!1),
            U = Wc(),
            V = (0, In.Ub)("screen and (max-width: 1024px)"),
            G = (0, In.rl)() && V,
            W = (0, In.jt)(),
            K = "pointer-devices" !== T || G,
            [X, $] = (0, s.useState)(!0),
            [Y, Z] = (0, s.useState)(!1),
            [Q = !1, J] = (0, In.ic)({
              prop: A,
              defaultProp: y,
              onChange: v
            }),
            [ee, ne] = (0, s.useState)(!1),
            [te, re] = (0, s.useState)(null),
            oe = (0, s.useDeferredValue)(ee),
            ie = h || W || y && !F.current;
          (0, s.useEffect)((() => {
            o?.()
          }), []), (0, s.useEffect)((() => {
            (y || A) && ne(Q)
          }), []), (0, In.qn)((() => {
            ee !== oe && (async function(e, {
              onOpen: n,
              onClose: t
            }) {
              const r = M.current.getBoundingClientRect(),
                o = M.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: u
                } = new DOMMatrix(i?.transform),
                l = o?.naturalWidth ?? r.width,
                d = o?.naturalHeight ?? r.height,
                c = l / window.innerWidth,
                h = l / c,
                y = d / c,
                A = window.innerHeight * h / y,
                v = window.innerWidth * y / h,
                m = y >= window.innerHeight ? "horizontal" : "vertical",
                b = ((e, n = 0) => Number.isNaN(e) ? n : e)("horizontal" === m ? (window.innerWidth - window.innerHeight * h / y) / 2 : (window.innerHeight - window.innerWidth * y / h) / 2, 0);
              e ? q.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    aspectRatio: "unset",
                    scale: u,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    objectFit: p || a,
                    objectPosition: f || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), M.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === m ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === m ? `${A}px` : `${window.innerWidth}px`,
                    x: "horizontal" === m ? b : 0,
                    y: "horizontal" === m ? 0 : b,
                    scale: C / 100,
                    immediate: ie,
                    config: {
                      duration: 550,
                      easing: Xm
                    }
                  }), await e({
                    immediate: !0,
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    x: 0,
                    y: 0,
                    objectFit: "contain",
                    objectPosition: "center"
                  }), "vertical" === m ? R.current?.style.setProperty("width", "100%") : "horizontal" === m && R.current?.style.setProperty("height", "100%"), n?.()
                }
              }) : q.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === m ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === m ? `${A}px` : `${window.innerWidth}px`,
                    x: he.position[0] + ("horizontal" === m ? b : 0),
                    y: he.position[1] + ("horizontal" === m ? 0 : b),
                    scale: he.zoomLevel / 100,
                    objectFit: p || a,
                    objectPosition: f || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: u,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    immediate: ie,
                    config: {
                      duration: 250,
                      easing: Xm
                    }
                  }), M.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), t?.()
                }
              })
            }(ee, {
              onClose: () => J(!1)
            }), F.current = !0)
          }), [ee]), (0, In.qn)((() => {
            Q ? Promise.resolve().then((() => async function() {
              const e = M.current.querySelector("img");
              if (I.current) {
                let n = Wm;
                e?.currentSrc && (n = e?.currentSrc), I.current.src = n, await me(I.current)
              }
            }())).then((() => me(I.current))).then((() => ne(Q))) : ne(!1)
          }), [Q]);
          const ae = () => {
              ne(!1)
            },
            {
              loaded: se,
              eventHandlers: ue
            } = (0, In.gr)({
              enabled: oe
            }),
            {
              isHovered: le
            } = (0, In.Mk)({
              ref: D,
              enabled: oe
            }),
            {
              isFocused: de
            } = (0, In.iQ)({
              ref: D,
              enabled: oe
            }),
            {
              isIdle: ce
            } = (0, In.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: oe && !le && !de && !G
            }),
            fe = function(e, n, t) {
              const r = Jo.fun(n) && n,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: u = !0,
                  exitBeforeEnter: l = !1,
                  onDestroyed: d,
                  ref: c,
                  config: f
                } = r ? r() : n,
                p = (0, s.useMemo)((() => r || 3 == arguments.length ? Zs() : void 0), []),
                h = ri(e),
                y = [],
                A = (0, s.useRef)(null),
                v = o ? null : A.current;
              Ca((() => {
                A.current = y
              })), wa((() => (ni(y, (e => {
                p?.add(e.ctrl), e.ctrl.ref = p
              })), () => {
                ni(A.current, (e => {
                  e.expired && clearTimeout(e.expirationId), ts(e.ctrl, p), e.ctrl.stop(!0)
                }))
              })));
              const m = function(e, {
                  key: n,
                  keys: t = n
                }, r) {
                  if (null === t) {
                    const n = new Set;
                    return e.map((e => {
                      const t = r && r.find((t => t.item === e && "leave" !== t.phase && !n.has(t)));
                      return t ? (n.add(t), t.key) : nu++
                    }))
                  }
                  return Jo.und(t) ? e : Jo.fun(t) ? e.map(t) : ri(t)
                }(h, r ? r() : n, v),
                b = o && A.current || [];
              Ca((() => ni(b, (({
                ctrl: e,
                item: n,
                key: t
              }) => {
                ts(e, p), Va(d, n, t)
              }))));
              const g = [];
              if (v && ni(v, ((e, n) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(n = g[n] = m.indexOf(e.key)) && (y[n] = e)
                })), ni(h, ((e, n) => {
                  y[n] || (y[n] = {
                    key: m[n],
                    item: e,
                    phase: "mount",
                    ctrl: new Hs
                  }, y[n].ctrl.item = e)
                })), g.length) {
                let e = -1;
                const {
                  leave: t
                } = r ? r() : n;
                ni(g, ((n, r) => {
                  const o = v[r];
                  ~n ? (e = y.indexOf(o), y[e] = {
                    ...o,
                    item: h[n]
                  }) : t && y.splice(++e, 0, o)
                }))
              }
              Jo.fun(i) && y.sort(((e, n) => i(e.item, n.item)));
              let C = -a;
              const _ = Ea(),
                E = $a(n),
                w = new Map,
                k = (0, s.useRef)(new Map),
                B = (0, s.useRef)(!1);
              ni(y, ((e, t) => {
                const o = e.key,
                  i = e.phase,
                  s = r ? r() : n;
                let d, p;
                const h = Va(s.delay || 0, o);
                if ("mount" == i) d = s.enter, p = "enter";
                else {
                  const e = m.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) d = s.leave, p = "leave";
                    else {
                      if (!(d = s.update)) return;
                      p = "update"
                    }
                  else {
                    if (e) return;
                    d = s.enter, p = "enter"
                  }
                }
                if (d = Va(d, e.item, t), d = Jo.obj(d) ? Qa(d) : {
                    to: d
                  }, !d.config) {
                  const n = f || E.config;
                  d.config = Va(n, e.item, t, p)
                }
                C += a;
                const y = {
                  ...E,
                  delay: h + C,
                  ref: c,
                  immediate: s.immediate,
                  reset: !1,
                  ...d
                };
                if ("enter" == p && Jo.und(y.from)) {
                  const o = r ? r() : n,
                    i = Jo.und(o.initial) || v ? o.from : o.initial;
                  y.from = Va(i, e.item, t)
                }
                const {
                  onResolve: b
                } = y;
                y.onResolve = e => {
                  Va(b, e);
                  const n = A.current,
                    t = n.find((e => e.key === o));
                  if (t && (!e.cancelled || "update" == t.phase) && t.ctrl.idle) {
                    const e = n.every((e => e.ctrl.idle));
                    if ("leave" == t.phase) {
                      const n = Va(u, t.item);
                      if (!1 !== n) {
                        const r = !0 === n ? 0 : n;
                        if (t.expired = !0, !e && r > 0) return void(r <= 2147483647 && (t.expirationId = setTimeout(_, r)))
                      }
                    }
                    e && n.some((e => e.expired)) && (k.current.delete(t), l && (B.current = !0), _())
                  }
                };
                const g = Fs(e.ctrl, y);
                "leave" === p && l ? k.current.set(e, {
                  phase: p,
                  springs: g,
                  payload: y
                }) : w.set(e, {
                  phase: p,
                  springs: g,
                  payload: y
                })
              }));
              const x = (0, s.useContext)($s),
                P = Ba(x),
                T = x !== P && es(x);
              Ca((() => {
                T && ni(y, (e => {
                  e.ctrl.start({
                    default: x
                  })
                }))
              }), [x]), ni(w, ((e, n) => {
                if (k.current.size) {
                  const e = y.findIndex((e => e.key === n.key));
                  y.splice(e, 1)
                }
              })), Ca((() => {
                ni(k.current.size ? k.current : w, (({
                  phase: e,
                  payload: n
                }, t) => {
                  const {
                    ctrl: r
                  } = t;
                  t.phase = e, p?.add(r), T && "enter" == e && r.start({
                    default: x
                  }), n && (rs(r, n.ref), !r.ref && !p || B.current ? (r.start(n), B.current && (B.current = !1)) : r.update(n))
                }))
              }), o ? void 0 : t);
              const S = e => s.createElement(s.Fragment, null, y.map(((n, t) => {
                const {
                  springs: r
                } = w.get(n) || n.ctrl, o = e({
                  ...r
                }, n.item, n, t);
                return o && o.type ? s.createElement(o.type, {
                  ...o.props,
                  key: Jo.str(n.key) || Jo.num(n.key) ? n.key : n.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return p ? [S, p] : S
            }(oe, {
              ref: H,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: ie
            }),
            [pe] = Qs((() => ({
              ref: z,
              opacity: oe && !ce && se && X ? 1 : 0,
              immediate: ie
            })), [oe, ce, se, X]),
            he = (({
              position: e,
              defaultPosition: n,
              onPositionChange: t,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: u,
              onZoomLevelChange: l,
              onRequestedClose: d,
              onRequestingClose: c,
              onClick: f,
              onDoubleClick: p,
              gestureSettings: h = xu,
              enabled: y
            }) => {
              const A = (0, In.jt)(),
                [v = n, m] = (0, In.ic)({
                  prop: e,
                  defaultProp: n,
                  onChange: t
                }),
                [b = u, g] = (0, In.ic)({
                  prop: a,
                  defaultProp: u,
                  onChange: l
                }),
                C = (0, s.useRef)(null),
                _ = (0, s.useRef)(null),
                [E, w] = (0, s.useState)(!1),
                k = b > r,
                B = b < o,
                x = b > r,
                P = b === r,
                [T, S] = Qs((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: n[0],
                    y: n[1]
                  },
                  immediate: A,
                  config: ku
                }))),
                j = (e, {
                  origin: t,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (C.current && _.current) {
                    t || (t = [_.current.clientWidth / 2, _.current.clientHeight / 2]);
                    const s = wu(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const u = {
                      config: a || ku,
                      x: n[0],
                      y: n[1],
                      scale: b,
                      immediate: A
                    };
                    if (s <= r) m(n);
                    else {
                      const e = Eu(C.current, _.current, (({
                        currentTranslate: [e, n],
                        contentRef: t,
                        pinchDelta: r,
                        scale: o,
                        touchOrigin: [i, a]
                      }) => {
                        if (!t?.current) return [0, 0];
                        const {
                          height: s,
                          left: u,
                          top: l,
                          width: d
                        } = t.current?.getBoundingClientRect();
                        return [-(i - u - d / 2) / o * r + e, -(a - l - s / 2) / o * r + n]
                      })({
                        currentTranslate: v,
                        contentRef: C,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: t
                      }), s);
                      u.x = e.xy[0], u.y = e.xy[1], m(e.xy)
                    }
                    u.scale = s / 100, S(u), g(s)
                  }
                },
                O = (e, n) => e.y < n.top || e.y > n.bottom || e.x < n.left || e.x > n.right,
                {
                  handleClick: N
                } = (0, In.Rv)({
                  onDoubleClick: e => {
                    if (C.current) {
                      const n = Cu(C.current),
                        t = O(e, n) ? "overlay" : "content";
                      p?.({
                        target: t,
                        origin: [e.clientX, e.clientY],
                        contentBounds: n
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (C.current && 0 === e.button) {
                      const n = Cu(C.current),
                        t = O(e, n) ? "overlay" : "content";
                      f?.({
                        target: t,
                        origin: [e.clientX, e.clientY],
                        contentBounds: n
                      })
                    }
                  },
                  latency: 350
                });
              return {
                containerRef: _,
                contentRef: C,
                canPan: k,
                isPanning: E,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  j(b + i, e)
                },
                zoomOut: e => {
                  j(b - i, e)
                },
                zoomTo: j,
                resetZoom: () => {
                  m(n), g(u);
                  const e = {
                    config: Bu,
                    x: n[0],
                    y: n[1],
                    scale: u / 100,
                    immediate: A
                  };
                  S(e)
                },
                canZoomIn: B,
                canZoomOut: x,
                zoomLevelStep: i,
                maxZoomLevel: o,
                minZoomLevel: r,
                defaultZoomLevel: u,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: t = [0, 0],
                    movement: [o, i],
                    pinching: a,
                    tap: s,
                    touches: u,
                    event: l
                  }) => {
                    if (!_.current || !C.current) return;
                    if (s) return void N(l);
                    if (o && i && !E && w(!0), u > 1) return;
                    if (a || b < r) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = Eu(C.current, _.current, v, b), p = o * h.dragFactor, y = i * h.dragFactor, g = {
                      config: ku,
                      x: n[0],
                      y: n[1],
                      immediate: A
                    };
                    if (b === r) {
                      const e = [t[0], t[1] + y],
                        {
                          y: n
                        } = _u(e, C.current),
                        r = wu(100 * Math.abs(n) / h.closePc, 0, 100);
                      g.config = Bu, g.x = e[0], g.y = e[1], m(e), c?.(r)
                    } else {
                      const e = [gu(t[0] + p, -d, d), gu(t[1] + y, -f, f)];
                      g.x = e[0], g.y = e[1], m(e)
                    }
                    return S(g), t
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (_.current && C.current)
                      if (b === r) {
                        const {
                          y: e
                        } = _u(v, C.current);
                        if (wu(100 * Math.abs(e) / h.closePc, 0, 100) >= 100) d?.();
                        else {
                          const e = {
                            config: Bu,
                            x: n[0],
                            y: n[1],
                            immediate: A
                          };
                          S(e), m(n), c?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = Eu(C.current, _.current, v, b),
                        n = {
                          config: ku,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: A
                        };
                      S(n), w(!1), m(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: n,
                    offset: [t],
                    origin: [r, o],
                    first: i
                  }) => {
                    if (C.current && _.current) {
                      if (i && w(!0), n) return void e();
                      j(100 * t, {
                        origin: [r, o],
                        delta: t - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    _.current && C.current && w(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: n,
                    movement: t
                  }) => {
                    if (C.current && _.current) {
                      const r = -1 * t[1];
                      if (r && E && w(!0), e) return;
                      const o = [n.clientX, n.clientY],
                        i = b / 100,
                        a = i + r / h.scrollFactor;
                      j(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    _.current && C.current && w(!1)
                  }
                },
                getCursor: () => P && !y ? "zoom-out" : P && B ? "zoom-in" : k ? E ? "grabbing" : "grab" : "pointer",
                enabled: y,
                animation: T
              }
            })({
              enabled: K && oe,
              onClick: function() {
                V ? $(!X) : ae()
              },
              onDoubleClick: function(e) {
                if (G && he.containerRef.current && "content" === e.target)
                  if (he.zoomLevel > he.minZoomLevel) he.resetZoom();
                  else {
                    const n = ((e, n, t) => {
                      const r = e.height / (t / 100);
                      return 100 * n.height / r
                    })(e.contentBounds, he.containerRef.current.getBoundingClientRect(), he.zoomLevel);
                    he.zoomTo(n, {
                      animationConfig: Bu
                    })
                  }
              },
              onRequestedClose: ae,
              onRequestingClose: e => {
                if (ee) {
                  const n = 1,
                    t = .25,
                    r = wu(n - e * (n - t) / 100, t, n);
                  H.start({
                    opacity: r
                  });
                  const o = wu(1 - e / 100, 0, 1);
                  z.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: g,
              defaultZoomLevel: C,
              minZoomLevel: _,
              maxZoomLevel: E,
              zoomLevelStep: w,
              onZoomLevelChange: k,
              defaultPosition: [0, 0],
              gestureSettings: B
            }),
            ye = Qs({
              ref: q,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: c,
                position: "fixed",
                objectFit: p,
                objectPosition: f,
                opacity: 0
              },
              onStart: () => {
                oe || Z(!1)
              },
              onRest: async () => {
                oe ? Z(!0) : (he.resetZoom(), $(!0))
              }
            }),
            Ae = Qs({
              opacity: oe && se && Y ? 1 : 0,
              immediate: !0,
              onRest: () => {
                oe && ee && se && q.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ve = [
              [q, H, z],
              [0, 0, .1]
            ];
          async function me(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((n, t) => {
              e.onload = () => n(e), e.onerror = t
            }))
          }! function(e, n, t = 1e3) {
            Ca((() => {
              if (n) {
                let r = 0;
                ni(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = t * n[o];
                    isNaN(a) ? a = r : r = a, ni(i, (e => {
                      ni(e.queue, (e => {
                        const n = e.delay;
                        e.delay = e => a + Va(n || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let n = Promise.resolve();
                ni(e, (e => {
                  const t = e.current;
                  if (t.length) {
                    const r = t.map((e => {
                      const n = e.queue;
                      return e.queue = [], n
                    }));
                    n = n.then((() => (ni(t, ((e, n) => ni(r[n] || [], (n => e.queue.push(n))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(oe ? ve[0] : ve[0].reverse(), ve[1]);
          const be = S ? (0, i.jsx)(d.DX, {
            className: QA,
            ref: null,
            children: j
          }) : (0, i.jsx)("img", {
            alt: "",
            src: l,
            "aria-hidden": !0,
            loading: a,
            className: QA,
            crossOrigin: r,
            referrerPolicy: u
          });
          (0, s.useEffect)((() => {
            $(!G)
          }), [G]);
          const {
            contrastMode: ge
          } = (0, Cr.DP)(), Ce = ((e, n) => [rf.xW.tokens, of("dark", n)].join(" "))(0, ge);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(Im, {
              open: Q,
              children: (0, i.jsxs)("div", {
                className: (0, Ze.A)("foundry_1a74xwb0", O),
                children: [(0, i.jsx)(Hm, {
                  asChild: !0,
                  children: (0, i.jsxs)(bu.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      L && J(!Q)
                    },
                    ref: M,
                    "data-idle": !ee,
                    style: {
                      aspectRatio: c,
                      objectPosition: f,
                      objectFit: p
                    },
                    children: [(0, i.jsx)(d.s6, {
                      children: U.formatMessage(Jc)
                    }), be, fe(((e, n) => m && !n && (0, i.jsx)(bu.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, i.jsx)(Be.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, i.jsxs)(zm, {
                  ...!N && {
                    container: te
                  },
                  children: [(0, i.jsx)(bu.img, {
                    "aria-hidden": !0,
                    src: Wm,
                    ref: I,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: c,
                      backgroundPosition: f,
                      backgroundSize: p,
                      ...ye
                    }
                  }), fe(((o, s) => s && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(Vm, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, i.jsxs)(Gm, {
                      "data-testid": x,
                      onEscapeKeyDown: ae,
                      onOpenAutoFocus: Km,
                      onCloseAutoFocus: e => ((e, n) => {
                        e?.preventDefault(), n.current?.focus({
                          preventScroll: !0
                        })
                      })(e, M),
                      className: Ce,
                      children: [(0, i.jsx)(d.s6, {
                        children: (0, i.jsx)(Fm, {
                          children: U.formatMessage(ef)
                        })
                      }), (0, i.jsx)(d.s6, {
                        children: (0, i.jsx)(Um, {
                          children: t || U.formatMessage(nf, {
                            alt: n
                          })
                        })
                      }), (0, i.jsx)(bu.div, {
                        className: "foundry_1a74xwb6",
                        style: Ae,
                        children: (0, i.jsx)(Su, {
                          ...he,
                          children: (0, i.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: R,
                            loading: a,
                            className: "foundry_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: u,
                            style: {
                              cursor: he.getCursor()
                            },
                            ...ue
                          })
                        })
                      }), (0, i.jsx)(bu.div, {
                        className: "foundry_1a74xwb9",
                        style: pe,
                        children: (0, i.jsx)($A, {
                          ...he,
                          ref: D,
                          onClose: ae,
                          caption: t,
                          onDownload: () => (e => {
                            const n = document.createElement("a");
                            n.href = e, n.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(n), n.click(), document.body.removeChild(n)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: P
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !N && (0, i.jsx)("div", {
              ref: re
            })]
          })
        },
        Ym = e => {
          const n = (0, Cr.Ym)();
          return (0, i.jsx)(Qc, {
            messages: tf,
            locale: n,
            children: (0, i.jsx)($m, {
              ...e
            })
          })
        };

      function Zm(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function Qm(e, n = []) {
        let t = [];
        const r = () => {
          const n = t.map((e => s.createContext(e)));
          return function(t) {
            const r = t?.[e] || n;
            return s.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: r
              }
            })), [t, r])
          }
        };
        return r.scopeName = e, [function(n, r) {
          const o = s.createContext(r),
            a = t.length;

          function u(n) {
            const {
              scope: t,
              children: r,
              ...u
            } = n, l = t?.[e][a] || o, d = s.useMemo((() => u), Object.values(u));
            return (0, i.jsx)(l.Provider, {
              value: d,
              children: r
            })
          }
          return t = [...t, r], u.displayName = n + "Provider", [u, function(t, i) {
            const u = i?.[e][a] || o,
              l = s.useContext(u);
            if (l) return l;
            if (void 0 !== r) return r;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, Jm(r, ...n)]
      }

      function Jm(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }

      function eb(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }
      var nb, tb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? mf.DX : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        rb = "dismissableLayer.update",
        ob = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        ib = s.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...d
          } = e, c = s.useContext(ob), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, y] = s.useState({}), A = eb(n, (e => p(e))), v = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = f ? v.indexOf(f) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= b, E = function(e, n = globalThis?.document) {
            const t = cf(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      sb("dismissableLayer.pointerDownOutside", t, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = r, n.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else n.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  n.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), n.removeEventListener("pointerdown", e), n.removeEventListener("click", o.current)
              }
            }), [n, t]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const n = e.target,
              t = [...c.branches].some((e => e.contains(n)));
            _ && !t && (o?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h), w = function(e, n = globalThis?.document) {
            const t = cf(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && sb("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }), [n, t]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const n = e.target;
            [...c.branches].some((e => e.contains(n))) || (a?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h);
          return ah((e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          }), h), s.useEffect((() => {
            if (f) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (nb = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), ab(), () => {
              t && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = nb)
            }
          }), [f, h, t, c]), s.useEffect((() => () => {
            f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), ab())
          }), [f, c]), s.useEffect((() => {
            const e = () => y({});
            return document.addEventListener(rb, e), () => document.removeEventListener(rb, e)
          }), []), (0, i.jsx)(tb.div, {
            ...d,
            ref: A,
            style: {
              pointerEvents: C ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Zm(e.onFocusCapture, w.onFocusCapture),
            onBlurCapture: Zm(e.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: Zm(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function ab() {
        const e = new CustomEvent(rb);
        document.dispatchEvent(e)
      }

      function sb(e, n, t, {
        discrete: r
      }) {
        const o = t.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
          });
        n && o.addEventListener(e, n, {
          once: !0
        }), r ? function(e, n) {
          e && au.flushSync((() => e.dispatchEvent(n)))
        }(o, i) : o.dispatchEvent(i)
      }
      ib.displayName = "DismissableLayer", s.forwardRef(((e, n) => {
        const t = s.useContext(ob),
          r = s.useRef(null),
          o = eb(n, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, i.jsx)(tb.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var ub = 0;

      function lb() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var db = "focusScope.autoFocusOnMount",
        cb = "focusScope.autoFocusOnUnmount",
        fb = {
          bubbles: !1,
          cancelable: !0
        },
        pb = s.forwardRef(((e, n) => {
          const {
            loop: t = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...u
          } = e, [l, d] = s.useState(null), c = cf(o), f = cf(a), p = s.useRef(null), h = eb(n, (e => d(e))), y = s.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          s.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (y.paused || !l) return;
                  const n = e.target;
                  l.contains(n) ? p.current = n : vb(p.current, {
                    select: !0
                  })
                },
                n = function(e) {
                  if (y.paused || !l) return;
                  const n = e.relatedTarget;
                  null !== n && (l.contains(n) || vb(p.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const n of e) n.removedNodes.length > 0 && vb(l)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", n);
              const r = new MutationObserver(t);
              return l && r.observe(l, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", n), r.disconnect()
              }
            }
          }), [r, l, y.paused]), s.useEffect((() => {
            if (l) {
              mb.add(y);
              const e = document.activeElement;
              if (!l.contains(e)) {
                const n = new CustomEvent(db, fb);
                l.addEventListener(db, c), l.dispatchEvent(n), n.defaultPrevented || (function(e, {
                  select: n = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const r of e)
                    if (vb(r, {
                        select: n
                      }), document.activeElement !== t) return
                }(hb(l).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && vb(l))
              }
              return () => {
                l.removeEventListener(db, c), setTimeout((() => {
                  const n = new CustomEvent(cb, fb);
                  l.addEventListener(cb, f), l.dispatchEvent(n), n.defaultPrevented || vb(e ?? document.body, {
                    select: !0
                  }), l.removeEventListener(cb, f), mb.remove(y)
                }), 0)
              }
            }
          }), [l, c, f, y]);
          const A = s.useCallback((e => {
            if (!t && !r) return;
            if (y.paused) return;
            const n = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (n && o) {
              const n = e.currentTarget,
                [r, i] = function(e) {
                  const n = hb(e);
                  return [yb(n, e), yb(n.reverse(), e)]
                }(n);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), t && vb(i, {
                select: !0
              })) : (e.preventDefault(), t && vb(r, {
                select: !0
              })) : o === n && e.preventDefault()
            }
          }), [t, r, y.paused]);
          return (0, i.jsx)(tb.div, {
            tabIndex: -1,
            ...u,
            ref: h,
            onKeyDown: A
          })
        }));

      function hb(e) {
        const n = [],
          t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const n = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || n ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; t.nextNode();) n.push(t.currentNode);
        return n
      }

      function yb(e, n) {
        for (const t of e)
          if (!Ab(t, {
              upTo: n
            })) return t
      }

      function Ab(e, {
        upTo: n
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== n && e === n) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function vb(e, {
        select: n = !1
      } = {}) {
        if (e && e.focus) {
          const t = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== t && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && n && e.select()
        }
      }
      pb.displayName = "FocusScope";
      var mb = function() {
        let e = [];
        return {
          add(n) {
            const t = e[0];
            n !== t && t?.pause(), e = bb(e, n), e.unshift(n)
          },
          remove(n) {
            e = bb(e, n), e[0]?.resume()
          }
        }
      }();

      function bb(e, n) {
        const t = [...e],
          r = t.indexOf(n);
        return -1 !== r && t.splice(r, 1), t
      }
      var gb = s.forwardRef(((e, n) => {
        const {
          container: t,
          ...r
        } = e, [o, a] = s.useState(!1);
        Af((() => a(!0)), []);
        const u = t || o && globalThis?.document?.body;
        return u ? au.createPortal((0, i.jsx)(tb.div, {
          ...r,
          ref: n
        }), u) : null
      }));
      gb.displayName = "Portal";
      var Cb = s.forwardRef(((e, n) => (0, i.jsx)(tb.span, {
        ...e,
        ref: n,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style
        }
      })));
      Cb.displayName = "VisuallyHidden";
      var _b = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Eb = [" ", "Enter"],
        wb = "Select",
        [kb, Bb, xb] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = Qm(n),
            [o, a] = t(n, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            u = e => {
              const {
                scope: n,
                children: t
              } = e, r = s.useRef(null), a = s.useRef(new Map).current;
              return (0, i.jsx)(o, {
                scope: n,
                itemMap: a,
                collectionRef: r,
                children: t
              })
            };
          u.displayName = n;
          const l = e + "CollectionSlot",
            d = s.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r
              } = e, o = eb(n, a(l, t).collectionRef);
              return (0, i.jsx)(mf.DX, {
                ref: o,
                children: r
              })
            }));
          d.displayName = l;
          const c = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = s.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r,
                ...o
              } = e, u = s.useRef(null), l = eb(n, u), d = a(c, t);
              return s.useEffect((() => (d.itemMap.set(u, {
                ref: u,
                ...o
              }), () => {
                d.itemMap.delete(u)
              }))), (0, i.jsx)(mf.DX, {
                [f]: "",
                ref: l,
                children: r
              })
            }));
          return p.displayName = c, [{
            Provider: u,
            Slot: d,
            ItemSlot: p
          }, function(n) {
            const t = a(e + "CollectionConsumer", n);
            return s.useCallback((() => {
              const e = t.collectionRef.current;
              if (!e) return [];
              const n = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
            }), [t.collectionRef, t.itemMap])
          }, r]
        }(wb),
        [Pb, Tb] = Qm(wb, [xb, Iy]),
        Sb = Iy(),
        [jb, Ob] = Pb(wb),
        [Nb, Lb] = Pb(wb),
        Rb = e => {
          const {
            __scopeSelect: n,
            children: t,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            value: u,
            defaultValue: l,
            onValueChange: d,
            dir: c,
            name: f,
            autoComplete: p,
            disabled: h,
            required: y
          } = e, A = Sb(n), [v, m] = s.useState(null), [b, g] = s.useState(null), [C, _] = s.useState(!1), E = hf(c), [w = !1, k] = ff({
            prop: r,
            defaultProp: o,
            onChange: a
          }), [B, x] = ff({
            prop: u,
            defaultProp: l,
            onChange: d
          }), P = s.useRef(null), T = !v || Boolean(v.closest("form")), [S, j] = s.useState(new Set), O = Array.from(S).map((e => e.props.value)).join(";");
          return (0, i.jsx)(eA, {
            ...A,
            children: (0, i.jsxs)(jb, {
              required: y,
              scope: n,
              trigger: v,
              onTriggerChange: m,
              valueNode: b,
              onValueNodeChange: g,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: _,
              contentId: yh(),
              value: B,
              onValueChange: x,
              open: w,
              onOpenChange: k,
              dir: E,
              triggerPointerDownPosRef: P,
              disabled: h,
              children: [(0, i.jsx)(kb.Provider, {
                scope: n,
                children: (0, i.jsx)(Nb, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    j((n => new Set(n).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    j((n => {
                      const t = new Set(n);
                      return t.delete(e), t
                    }))
                  }), []),
                  children: t
                })
              }), T ? (0, i.jsxs)(Ag, {
                "aria-hidden": !0,
                required: y,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: B,
                onChange: e => x(e.target.value),
                disabled: h,
                children: [void 0 === B ? (0, i.jsx)("option", {
                  value: ""
                }) : null, Array.from(S)]
              }, O) : null]
            })
          })
        };
      Rb.displayName = wb;
      var Db = "SelectTrigger",
        Mb = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            disabled: r = !1,
            ...o
          } = e, a = Sb(t), s = Ob(Db, t), u = s.disabled || r, l = eb(n, s.onTriggerChange), d = Bb(t), [c, f, p] = vg((e => {
            const n = d().filter((e => !e.disabled)),
              t = n.find((e => e.value === s.value)),
              r = mg(n, e, t);
            void 0 !== r && s.onValueChange(r.value)
          })), h = () => {
            u || (s.onOpenChange(!0), p())
          };
          return (0, i.jsx)(nA, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)(tb.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: u,
              "data-disabled": u ? "" : void 0,
              "data-placeholder": yg(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Zm(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: Zm(o.onPointerDown, (e => {
                const n = e.target;
                n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (h(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: Zm(o.onKeyDown, (e => {
                const n = "" !== c.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), n && " " === e.key || _b.includes(e.key) && (h(), e.preventDefault())
              }))
            })
          })
        }));
      Mb.displayName = Db;
      var Ib = "SelectValue",
        Hb = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            className: r,
            style: o,
            children: a,
            placeholder: s = "",
            ...u
          } = e, l = Ob(Ib, t), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== a, f = eb(n, l.onValueNodeChange);
          return Af((() => {
            d(c)
          }), [d, c]), (0, i.jsx)(tb.span, {
            ...u,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: yg(l.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      Hb.displayName = Ib;
      var zb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          children: r,
          ...o
        } = e;
        return (0, i.jsx)(tb.span, {
          "aria-hidden": !0,
          ...o,
          ref: n,
          children: r || "▼"
        })
      }));
      zb.displayName = "SelectIcon";
      var qb = e => (0, i.jsx)(gb, {
        asChild: !0,
        ...e
      });
      qb.displayName = "SelectPortal";
      var Fb = "SelectContent",
        Ub = s.forwardRef(((e, n) => {
          const t = Ob(Fb, e.__scopeSelect),
            [r, o] = s.useState();
          if (Af((() => {
              o(new DocumentFragment)
            }), []), !t.open) {
            const n = r;
            return n ? au.createPortal((0, i.jsx)(Gb, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(kb.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), n) : null
          }
          return (0, i.jsx)(Kb, {
            ...e,
            ref: n
          })
        }));
      Ub.displayName = Fb;
      var Vb = 10,
        [Gb, Wb] = Pb(Fb),
        Kb = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            side: l,
            sideOffset: d,
            align: c,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: h,
            collisionPadding: y,
            sticky: A,
            hideWhenDetached: v,
            avoidCollisions: m,
            ...b
          } = e, g = Ob(Fb, t), [C, _] = s.useState(null), [E, w] = s.useState(null), k = eb(n, (e => _(e))), [B, x] = s.useState(null), [P, T] = s.useState(null), S = Bb(t), [j, O] = s.useState(!1), N = s.useRef(!1);
          s.useEffect((() => {
            if (C) return am(C)
          }), [C]), s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? lb()), document.body.insertAdjacentElement("beforeend", e[1] ?? lb()), ub++, () => {
              1 === ub && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), ub--
            }
          }), []);
          const L = s.useCallback((e => {
              const [n, ...t] = S().map((e => e.ref.current)), [r] = t.slice(-1), o = document.activeElement;
              for (const t of e) {
                if (t === o) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === n && E && (E.scrollTop = 0), t === r && E && (E.scrollTop = E.scrollHeight), t?.focus(), document.activeElement !== o) return
              }
            }), [S, E]),
            R = s.useCallback((() => L([B, C])), [L, B, C]);
          s.useEffect((() => {
            j && R()
          }), [j, R]);
          const {
            onOpenChange: D,
            triggerPointerDownPosRef: M
          } = g;
          s.useEffect((() => {
            if (C) {
              let e = {
                x: 0,
                y: 0
              };
              const n = n => {
                  e = {
                    x: Math.abs(Math.round(n.pageX) - (M.current?.x ?? 0)),
                    y: Math.abs(Math.round(n.pageY) - (M.current?.y ?? 0))
                  }
                },
                t = t => {
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : C.contains(t.target) || D(!1), document.removeEventListener("pointermove", n), M.current = null
                };
              return null !== M.current && (document.addEventListener("pointermove", n), document.addEventListener("pointerup", t, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", t, {
                  capture: !0
                })
              }
            }
          }), [C, D, M]), s.useEffect((() => {
            const e = () => D(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [D]);
          const [I, H] = vg((e => {
            const n = S().filter((e => !e.disabled)),
              t = n.find((e => e.ref.current === document.activeElement)),
              r = mg(n, e, t);
            r && setTimeout((() => r.ref.current.focus()))
          })), z = s.useCallback(((e, n, t) => {
            const r = !N.current && !t;
            (void 0 !== g.value && g.value === n || r) && (x(e), r && (N.current = !0))
          }), [g.value]), q = s.useCallback((() => C?.focus()), [C]), F = s.useCallback(((e, n, t) => {
            const r = !N.current && !t;
            (void 0 !== g.value && g.value === n || r) && T(e)
          }), [g.value]), U = "popper" === r ? $b : Xb, V = U === $b ? {
            side: l,
            sideOffset: d,
            align: c,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: h,
            collisionPadding: y,
            sticky: A,
            hideWhenDetached: v,
            avoidCollisions: m
          } : {};
          return (0, i.jsx)(Gb, {
            scope: t,
            content: C,
            viewport: E,
            onViewportChange: w,
            itemRefCallback: z,
            selectedItem: B,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: R,
            selectedItemText: P,
            position: r,
            isPositioned: j,
            searchRef: I,
            children: (0, i.jsx)(em, {
              as: mf.DX,
              allowPinchZoom: !0,
              children: (0, i.jsx)(pb, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Zm(o, (e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(ib, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: u,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, i.jsx)(U, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...V,
                    onPlaced: () => O(!0),
                    ref: k,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Zm(b.onKeyDown, (e => {
                      const n = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), n || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const n = S().filter((e => !e.disabled));
                        let t = n.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1)
                        }
                        setTimeout((() => L(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Kb.displayName = "SelectContentImpl";
      var Xb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          onPlaced: r,
          ...o
        } = e, a = Ob(Fb, t), u = Wb(Fb, t), [l, d] = s.useState(null), [c, f] = s.useState(null), p = eb(n, (e => f(e))), h = Bb(t), y = s.useRef(!1), A = s.useRef(!0), {
          viewport: v,
          selectedItem: m,
          selectedItemText: b,
          focusSelectedItem: g
        } = u, C = s.useCallback((() => {
          if (a.trigger && a.valueNode && l && c && v && m && b) {
            const e = a.trigger.getBoundingClientRect(),
              n = c.getBoundingClientRect(),
              t = a.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const r = o.left - n.left,
                i = t.left - r,
                a = e.left - i,
                s = e.width + a,
                u = Math.max(s, n.width),
                d = window.innerWidth - Vb,
                c = af(i, [Vb, d - u]);
              l.style.minWidth = s + "px", l.style.left = c + "px"
            } else {
              const r = n.right - o.right,
                i = window.innerWidth - t.right - r,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                u = Math.max(s, n.width),
                d = window.innerWidth - Vb,
                c = af(i, [Vb, d - u]);
              l.style.minWidth = s + "px", l.style.right = c + "px"
            }
            const i = h(),
              s = window.innerHeight - 2 * Vb,
              u = v.scrollHeight,
              d = window.getComputedStyle(c),
              f = parseInt(d.borderTopWidth, 10),
              p = parseInt(d.paddingTop, 10),
              A = parseInt(d.borderBottomWidth, 10),
              g = f + p + u + parseInt(d.paddingBottom, 10) + A,
              C = Math.min(5 * m.offsetHeight, g),
              _ = window.getComputedStyle(v),
              E = parseInt(_.paddingTop, 10),
              w = parseInt(_.paddingBottom, 10),
              k = e.top + e.height / 2 - Vb,
              B = s - k,
              x = m.offsetHeight / 2,
              P = f + p + (m.offsetTop + x),
              T = g - P;
            if (P <= k) {
              const e = m === i[i.length - 1].ref.current;
              l.style.bottom = "0px";
              const n = c.clientHeight - v.offsetTop - v.offsetHeight,
                t = P + Math.max(B, x + (e ? w : 0) + n + A);
              l.style.height = t + "px"
            } else {
              const e = m === i[0].ref.current;
              l.style.top = "0px";
              const n = Math.max(k, f + v.offsetTop + (e ? E : 0) + x) + T;
              l.style.height = n + "px", v.scrollTop = P - k + v.offsetTop
            }
            l.style.margin = `${Vb}px 0`, l.style.minHeight = C + "px", l.style.maxHeight = s + "px", r?.(), requestAnimationFrame((() => y.current = !0))
          }
        }), [h, a.trigger, a.valueNode, l, c, v, m, b, a.dir, r]);
        Af((() => C()), [C]);
        const [_, E] = s.useState();
        Af((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const w = s.useCallback((e => {
          e && !0 === A.current && (C(), g?.(), A.current = !1)
        }), [C, g]);
        return (0, i.jsx)(Yb, {
          scope: t,
          contentWrapper: l,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: w,
          children: (0, i.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, i.jsx)(tb.div, {
              ...o,
              ref: p,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      Xb.displayName = "SelectItemAlignedPosition";
      var $b = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          align: r = "start",
          collisionPadding: o = Vb,
          ...a
        } = e, s = Sb(t);
        return (0, i.jsx)(tA, {
          ...s,
          ...a,
          ref: n,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      $b.displayName = "SelectPopperPosition";
      var [Yb, Zb] = Pb(Fb, {}), Qb = "SelectViewport", Jb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          nonce: r,
          ...o
        } = e, a = Wb(Qb, t), u = Zb(Qb, t), l = eb(n, a.onViewportChange), d = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, i.jsx)(kb.Slot, {
            scope: t,
            children: (0, i.jsx)(tb.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: l,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...o.style
              },
              onScroll: Zm(o.onScroll, (e => {
                const n = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: r
                  } = u;
                if (r?.current && t) {
                  const e = Math.abs(d.current - n.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Vb,
                      o = parseFloat(t.style.minHeight),
                      i = parseFloat(t.style.height),
                      a = Math.max(o, i);
                    if (a < r) {
                      const o = a + e,
                        i = Math.min(r, o),
                        s = o - i;
                      t.style.height = i + "px", "0px" === t.style.bottom && (n.scrollTop = s > 0 ? s : 0, t.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = n.scrollTop
              }))
            })
          })]
        })
      }));
      Jb.displayName = Qb;
      var eg = "SelectGroup",
        [ng, tg] = Pb(eg);
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e, o = yh();
        return (0, i.jsx)(ng, {
          scope: t,
          id: o,
          children: (0, i.jsx)(tb.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: n
          })
        })
      })).displayName = eg;
      var rg = "SelectLabel";
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e, o = tg(rg, t);
        return (0, i.jsx)(tb.div, {
          id: o.id,
          ...r,
          ref: n
        })
      })).displayName = rg;
      var og = "SelectItem",
        [ig, ag] = Pb(og),
        sg = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...u
          } = e, l = Ob(og, t), d = Wb(og, t), c = l.value === r, [f, p] = s.useState(a ?? ""), [h, y] = s.useState(!1), A = eb(n, (e => d.itemRefCallback?.(e, r, o))), v = yh(), m = () => {
            o || (l.onValueChange(r), l.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(ig, {
            scope: t,
            value: r,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: s.useCallback((e => {
              p((n => n || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(kb.ItemSlot, {
              scope: t,
              value: r,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)(tb.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...u,
                ref: A,
                onFocus: Zm(u.onFocus, (() => y(!0))),
                onBlur: Zm(u.onBlur, (() => y(!1))),
                onPointerUp: Zm(u.onPointerUp, m),
                onPointerMove: Zm(u.onPointerMove, (e => {
                  o ? d.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Zm(u.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                })),
                onKeyDown: Zm(u.onKeyDown, (e => {
                  "" !== d.searchRef?.current && " " === e.key || (Eb.includes(e.key) && m(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      sg.displayName = og;
      var ug = "SelectItemText",
        lg = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            className: r,
            style: o,
            ...a
          } = e, u = Ob(ug, t), l = Wb(ug, t), d = ag(ug, t), c = Lb(ug, t), [f, p] = s.useState(null), h = eb(n, (e => p(e)), d.onItemTextChange, (e => l.itemTextRefCallback?.(e, d.value, d.disabled))), y = f?.textContent, A = s.useMemo((() => (0, i.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: y
          }, d.value)), [d.disabled, d.value, y]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: m
          } = c;
          return Af((() => (v(A), () => m(A))), [v, m, A]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(tb.span, {
              id: d.textId,
              ...a,
              ref: h
            }), d.isSelected && u.valueNode && !u.valueNodeHasChildren ? au.createPortal(a.children, u.valueNode) : null]
          })
        }));
      lg.displayName = ug;
      var dg = "SelectItemIndicator";
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e;
        return ag(dg, t).isSelected ? (0, i.jsx)(tb.span, {
          "aria-hidden": !0,
          ...r,
          ref: n
        }) : null
      })).displayName = dg;
      var cg = "SelectScrollUpButton";
      s.forwardRef(((e, n) => {
        const t = Wb(cg, e.__scopeSelect),
          r = Zb(cg, e.__scopeSelect),
          [o, a] = s.useState(!1),
          u = eb(n, r.onScrollButtonChange);
        return Af((() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = n.scrollTop > 0;
              a(e)
            };
            const n = t.viewport;
            return e(), n.addEventListener("scroll", e), () => n.removeEventListener("scroll", e)
          }
        }), [t.viewport, t.isPositioned]), o ? (0, i.jsx)(pg, {
          ...e,
          ref: u,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: n
            } = t;
            e && n && (e.scrollTop = e.scrollTop - n.offsetHeight)
          }
        }) : null
      })).displayName = cg;
      var fg = "SelectScrollDownButton";
      s.forwardRef(((e, n) => {
        const t = Wb(fg, e.__scopeSelect),
          r = Zb(fg, e.__scopeSelect),
          [o, a] = s.useState(!1),
          u = eb(n, r.onScrollButtonChange);
        return Af((() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = n.scrollHeight - n.clientHeight,
                t = Math.ceil(n.scrollTop) < e;
              a(t)
            };
            const n = t.viewport;
            return e(), n.addEventListener("scroll", e), () => n.removeEventListener("scroll", e)
          }
        }), [t.viewport, t.isPositioned]), o ? (0, i.jsx)(pg, {
          ...e,
          ref: u,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: n
            } = t;
            e && n && (e.scrollTop = e.scrollTop + n.offsetHeight)
          }
        }) : null
      })).displayName = fg;
      var pg = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          onAutoScroll: r,
          ...o
        } = e, a = Wb("SelectScrollButton", t), u = s.useRef(null), l = Bb(t), d = s.useCallback((() => {
          null !== u.current && (window.clearInterval(u.current), u.current = null)
        }), []);
        return s.useEffect((() => () => d()), [d]), Af((() => {
          const e = l().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [l]), (0, i.jsx)(tb.div, {
          "aria-hidden": !0,
          ...o,
          ref: n,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Zm(o.onPointerDown, (() => {
            null === u.current && (u.current = window.setInterval(r, 50))
          })),
          onPointerMove: Zm(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === u.current && (u.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Zm(o.onPointerLeave, (() => {
            d()
          }))
        })
      }));
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e;
        return (0, i.jsx)(tb.div, {
          "aria-hidden": !0,
          ...r,
          ref: n
        })
      })).displayName = "SelectSeparator";
      var hg = "SelectArrow";

      function yg(e) {
        return "" === e || void 0 === e
      }
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e, o = Sb(t), a = Ob(hg, t), s = Wb(hg, t);
        return a.open && "popper" === s.position ? (0, i.jsx)(rA, {
          ...o,
          ...r,
          ref: n
        }) : null
      })).displayName = hg;
      var Ag = s.forwardRef(((e, n) => {
        const {
          value: t,
          ...r
        } = e, o = s.useRef(null), a = eb(n, o), u = yf(t);
        return s.useEffect((() => {
          const e = o.current,
            n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (u !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [u, t]), (0, i.jsx)(Cb, {
          asChild: !0,
          children: (0, i.jsx)("select", {
            ...r,
            ref: a,
            defaultValue: t
          })
        })
      }));

      function vg(e) {
        const n = cf(e),
          t = s.useRef(""),
          r = s.useRef(0),
          o = s.useCallback((e => {
            const o = t.current + e;
            n(o),
              function e(n) {
                t.current = n, window.clearTimeout(r.current), "" !== n && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [n]),
          i = s.useCallback((() => {
            t.current = "", window.clearTimeout(r.current)
          }), []);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), [t, o, i]
      }

      function mg(e, n, t) {
        const r = n.length > 1 && Array.from(n).every((e => e === n[0])) ? n[0] : n,
          o = t ? e.indexOf(t) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, n) => a[(s + n) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== t)));
        const u = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return u !== t ? u : void 0
      }
      Ag.displayName = "BubbleSelect";
      var bg = Rb,
        gg = Mb,
        Cg = Hb,
        _g = zb,
        Eg = qb,
        wg = Ub,
        kg = Jb,
        Bg = sg,
        xg = lg,
        Pg = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? mf.DX : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {});

      function Tg(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }
      var Sg = e => {
        const {
          present: n,
          children: t
        } = e, r = function(e) {
          const [n, t] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [u, l] = function(e, n) {
            return s.useReducer(((e, t) => n[e][t] ?? e), e)
          }(a, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return s.useEffect((() => {
            const e = jg(r.current);
            i.current = "mounted" === u ? e : "none"
          }), [u]), Af((() => {
            const n = r.current,
              t = o.current;
            if (t !== e) {
              const r = i.current,
                a = jg(n);
              l(e ? "MOUNT" : "none" === a || "none" === n?.display ? "UNMOUNT" : t && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Af((() => {
            if (n) {
              const e = e => {
                  const t = jg(r.current).includes(e.animationName);
                  e.target === n && t && au.flushSync((() => l("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (i.current = jg(r.current))
                };
              return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
              }
            }
            l("ANIMATION_END")
          }), [n, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(u),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), t(e)
            }), [])
          }
        }(n), o = "function" == typeof t ? t({
          present: r.isPresent
        }) : s.Children.only(t), i = Tg(r.ref, function(e) {
          let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = n && "isReactWarning" in n && n.isReactWarning;
          return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof t || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function jg(e) {
        return e?.animationName || "none"
      }

      function Og(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }

      function Ng(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      Sg.displayName = "Presence";
      var Lg = "ScrollArea",
        [Rg, Dg] = function(e, n = []) {
          let t = [];
          const r = () => {
            const n = t.map((e => s.createContext(e)));
            return function(t) {
              const r = t?.[e] || n;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...t,
                  [e]: r
                }
              })), [t, r])
            }
          };
          return r.scopeName = e, [function(n, r) {
            const o = s.createContext(r),
              a = t.length;

            function u(n) {
              const {
                scope: t,
                children: r,
                ...u
              } = n, l = t?.[e][a] || o, d = s.useMemo((() => u), Object.values(u));
              return (0, i.jsx)(l.Provider, {
                value: d,
                children: r
              })
            }
            return t = [...t, r], u.displayName = n + "Provider", [u, function(t, i) {
              const u = i?.[e][a] || o,
                l = s.useContext(u);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``)
            }]
          }, Og(r, ...n)]
        }(Lg),
        [Mg, Ig] = Rg(Lg),
        Hg = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...u
          } = e, [l, d] = s.useState(null), [c, f] = s.useState(null), [p, h] = s.useState(null), [y, A] = s.useState(null), [v, m] = s.useState(null), [b, g] = s.useState(0), [C, _] = s.useState(0), [E, w] = s.useState(!1), [k, B] = s.useState(!1), x = Tg(n, (e => d(e))), P = hf(o);
          return (0, i.jsx)(Mg, {
            scope: t,
            type: r,
            dir: P,
            scrollHideDelay: a,
            scrollArea: l,
            viewport: c,
            onViewportChange: f,
            content: p,
            onContentChange: h,
            scrollbarX: y,
            onScrollbarXChange: A,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: w,
            scrollbarY: v,
            onScrollbarYChange: m,
            scrollbarYEnabled: k,
            onScrollbarYEnabledChange: B,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, i.jsx)(Pg.div, {
              dir: P,
              ...u,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": C + "px",
                ...e.style
              }
            })
          })
        }));
      Hg.displayName = Lg;
      var zg = "ScrollAreaViewport",
        qg = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            children: r,
            nonce: o,
            ...a
          } = e, u = Ig(zg, t), l = Tg(n, s.useRef(null), u.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(Pg.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
              style: {
                overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, i.jsx)("div", {
                ref: u.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        }));
      qg.displayName = zg;
      var Fg = "ScrollAreaScrollbar",
        Ug = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Ig(Fg, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: u
          } = o, l = "horizontal" === e.orientation;
          return s.useEffect((() => (l ? a(!0) : u(!0), () => {
            l ? a(!1) : u(!1)
          })), [l, a, u]), "hover" === o.type ? (0, i.jsx)(Vg, {
            ...r,
            ref: n,
            forceMount: t
          }) : "scroll" === o.type ? (0, i.jsx)(Gg, {
            ...r,
            ref: n,
            forceMount: t
          }) : "auto" === o.type ? (0, i.jsx)(Wg, {
            ...r,
            ref: n,
            forceMount: t
          }) : "always" === o.type ? (0, i.jsx)(Kg, {
            ...r,
            ref: n
          }) : null
        }));
      Ug.displayName = Fg;
      var Vg = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Ig(Fg, e.__scopeScrollArea), [a, u] = s.useState(!1);
          return s.useEffect((() => {
            const e = o.scrollArea;
            let n = 0;
            if (e) {
              const t = () => {
                  window.clearTimeout(n), u(!0)
                },
                r = () => {
                  n = window.setTimeout((() => u(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", t), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(n), e.removeEventListener("pointerenter", t), e.removeEventListener("pointerleave", r)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(Sg, {
            present: t || a,
            children: (0, i.jsx)(Wg, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: n
            })
          })
        })),
        Gg = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Ig(Fg, e.__scopeScrollArea), a = "horizontal" === e.orientation, u = cC((() => d("SCROLL_END")), 100), [l, d] = ("hidden", c = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, s.useReducer(((e, n) => c[e][n] ?? e), "hidden"));
          var c;
          return s.useEffect((() => {
            if ("idle" === l) {
              const e = window.setTimeout((() => d("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [l, o.scrollHideDelay, d]), s.useEffect((() => {
            const e = o.viewport,
              n = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let t = e[n];
              const r = () => {
                const r = e[n];
                t !== r && (d("SCROLL"), u()), t = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, a, d, u]), (0, i.jsx)(Sg, {
            present: t || "hidden" !== l,
            children: (0, i.jsx)(Kg, {
              "data-state": "hidden" === l ? "hidden" : "visible",
              ...r,
              ref: n,
              onPointerEnter: Ng(e.onPointerEnter, (() => d("POINTER_ENTER"))),
              onPointerLeave: Ng(e.onPointerLeave, (() => d("POINTER_LEAVE")))
            })
          })
        })),
        Wg = s.forwardRef(((e, n) => {
          const t = Ig(Fg, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, u] = s.useState(!1),
            l = "horizontal" === e.orientation,
            d = cC((() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  n = t.viewport.offsetHeight < t.viewport.scrollHeight;
                u(l ? e : n)
              }
            }), 10);
          return fC(t.viewport, d), fC(t.content, d), (0, i.jsx)(Sg, {
            present: r || a,
            children: (0, i.jsx)(Kg, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: n
            })
          })
        })),
        Kg = s.forwardRef(((e, n) => {
          const {
            orientation: t = "vertical",
            ...r
          } = e, o = Ig(Fg, e.__scopeScrollArea), a = s.useRef(null), u = s.useRef(0), [l, d] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = iC(l.viewport, l.content), f = {
            ...r,
            sizes: l,
            onSizesChange: d,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => u.current = 0,
            onThumbPointerDown: e => u.current = e
          };

          function p(e, n) {
            return function(e, n, t, r = "ltr") {
              const o = aC(t),
                i = n || o / 2,
                a = o - i,
                s = t.scrollbar.paddingStart + i,
                u = t.scrollbar.size - t.scrollbar.paddingEnd - a,
                l = t.content - t.viewport;
              return uC([s, u], "ltr" === r ? [0, l] : [-1 * l, 0])(e)
            }(e, u.current, l, n)
          }
          return "horizontal" === t ? (0, i.jsx)(Xg, {
            ...f,
            ref: n,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = sC(o.viewport.scrollLeft, l, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === t ? (0, i.jsx)($g, {
            ...f,
            ref: n,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = sC(o.viewport.scrollTop, l);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = p(e))
            }
          }) : null
        })),
        Xg = s.forwardRef(((e, n) => {
          const {
            sizes: t,
            onSizesChange: r,
            ...o
          } = e, a = Ig(Fg, e.__scopeScrollArea), [u, l] = s.useState(), d = s.useRef(null), c = Tg(n, d, a.onScrollbarXChange);
          return s.useEffect((() => {
            d.current && l(getComputedStyle(d.current))
          }), [d]), (0, i.jsx)(Qg, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": aC(t) + "px",
              ...e.style
            },
            onThumbPointerDown: n => e.onThumbPointerDown(n.x),
            onDragScroll: n => e.onDragScroll(n.x),
            onWheelScroll: (n, t) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + n.deltaX;
                e.onWheelScroll(r), lC(r, t) && n.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && u && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: oC(u.paddingLeft),
                  paddingEnd: oC(u.paddingRight)
                }
              })
            }
          })
        })),
        $g = s.forwardRef(((e, n) => {
          const {
            sizes: t,
            onSizesChange: r,
            ...o
          } = e, a = Ig(Fg, e.__scopeScrollArea), [u, l] = s.useState(), d = s.useRef(null), c = Tg(n, d, a.onScrollbarYChange);
          return s.useEffect((() => {
            d.current && l(getComputedStyle(d.current))
          }), [d]), (0, i.jsx)(Qg, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": aC(t) + "px",
              ...e.style
            },
            onThumbPointerDown: n => e.onThumbPointerDown(n.y),
            onDragScroll: n => e.onDragScroll(n.y),
            onWheelScroll: (n, t) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + n.deltaY;
                e.onWheelScroll(r), lC(r, t) && n.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && u && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: oC(u.paddingTop),
                  paddingEnd: oC(u.paddingBottom)
                }
              })
            }
          })
        })),
        [Yg, Zg] = Rg(Fg),
        Qg = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            sizes: r,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: u,
            onThumbPointerDown: l,
            onThumbPositionChange: d,
            onDragScroll: c,
            onWheelScroll: f,
            onResize: p,
            ...h
          } = e, y = Ig(Fg, t), [A, v] = s.useState(null), m = Tg(n, (e => v(e))), b = s.useRef(null), g = s.useRef(""), C = y.viewport, _ = r.content - r.viewport, E = cf(f), w = cf(d), k = cC(p, 10);

          function B(e) {
            if (b.current) {
              const n = e.clientX - b.current.left,
                t = e.clientY - b.current.top;
              c({
                x: n,
                y: t
              })
            }
          }
          return s.useEffect((() => {
            const e = e => {
              const n = e.target,
                t = A?.contains(n);
              t && E(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [C, A, _, E]), s.useEffect(w, [r, w]), fC(A, k), fC(y.content, k), (0, i.jsx)(Yg, {
            scope: t,
            scrollbar: A,
            hasThumb: o,
            onThumbChange: cf(a),
            onThumbPointerUp: cf(u),
            onThumbPositionChange: w,
            onThumbPointerDown: cf(l),
            children: (0, i.jsx)(Pg.div, {
              ...h,
              ref: m,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: Ng(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = A.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), B(e))
              })),
              onPointerMove: Ng(e.onPointerMove, B),
              onPointerUp: Ng(e.onPointerUp, (e => {
                const n = e.target;
                n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, y.viewport && (y.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Jg = "ScrollAreaThumb",
        eC = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Zg(Jg, e.__scopeScrollArea);
          return (0, i.jsx)(Sg, {
            present: t || o.hasThumb,
            children: (0, i.jsx)(nC, {
              ref: n,
              ...r
            })
          })
        })),
        nC = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            style: r,
            ...o
          } = e, a = Ig(Jg, t), u = Zg(Jg, t), {
            onThumbPositionChange: l
          } = u, d = Tg(n, (e => u.onThumbChange(e))), c = s.useRef(), f = cC((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const n = () => {
                if (f(), !c.current) {
                  const n = dC(e, l);
                  c.current = n, l()
                }
              };
              return l(), e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [a.viewport, f, l]), (0, i.jsx)(Pg.div, {
            "data-state": u.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Ng(e.onPointerDownCapture, (e => {
              const n = e.target.getBoundingClientRect(),
                t = e.clientX - n.left,
                r = e.clientY - n.top;
              u.onThumbPointerDown({
                x: t,
                y: r
              })
            })),
            onPointerUp: Ng(e.onPointerUp, u.onThumbPointerUp)
          })
        }));
      eC.displayName = Jg;
      var tC = "ScrollAreaCorner";
      s.forwardRef(((e, n) => {
        const t = Ig(tC, e.__scopeScrollArea),
          r = Boolean(t.scrollbarX && t.scrollbarY);
        return "scroll" !== t.type && r ? (0, i.jsx)(rC, {
          ...e,
          ref: n
        }) : null
      })).displayName = tC;
      var rC = s.forwardRef(((e, n) => {
        const {
          __scopeScrollArea: t,
          ...r
        } = e, o = Ig(tC, t), [a, u] = s.useState(0), [l, d] = s.useState(0), c = Boolean(a && l);
        return fC(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        })), fC(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), u(e)
        })), c ? (0, i.jsx)(Pg.div, {
          ...r,
          ref: n,
          style: {
            width: a,
            height: l,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function oC(e) {
        return e ? parseInt(e, 10) : 0
      }

      function iC(e, n) {
        const t = e / n;
        return isNaN(t) ? 0 : t
      }

      function aC(e) {
        const n = iC(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - t) * n;
        return Math.max(r, 18)
      }

      function sC(e, n, t = "ltr") {
        const r = aC(n),
          o = n.scrollbar.paddingStart + n.scrollbar.paddingEnd,
          i = n.scrollbar.size - o,
          a = n.content - n.viewport,
          s = i - r,
          u = af(e, "ltr" === t ? [0, a] : [-1 * a, 0]);
        return uC([0, a], [0, s])(u)
      }

      function uC(e, n) {
        return t => {
          if (e[0] === e[1] || n[0] === n[1]) return n[0];
          const r = (n[1] - n[0]) / (e[1] - e[0]);
          return n[0] + r * (t - e[0])
        }
      }

      function lC(e, n) {
        return e > 0 && e < n
      }
      var dC = (e, n = (() => {})) => {
        let t = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = t.left !== i.left,
            s = t.top !== i.top;
          (a || s) && n(), t = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function cC(e, n) {
        const t = cf(e),
          r = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), s.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(t, n)
        }), [t, n])
      }

      function fC(e, n) {
        const t = cf(n);
        Af((() => {
          let n = 0;
          if (e) {
            const r = new ResizeObserver((() => {
              cancelAnimationFrame(n), n = window.requestAnimationFrame(t)
            }));
            return r.observe(e), () => {
              window.cancelAnimationFrame(n), r.unobserve(e)
            }
          }
        }), [e, t])
      }
      var pC = Hg,
        hC = qg,
        yC = Ug,
        AC = eC,
        vC = t(27949),
        mC = {};
      mC.styleTagTransform = _(), mC.setAttributes = m(), mC.insert = A().bind(null, "head"), mC.domAPI = h(), mC.insertStyleElement = g(), f()(vC.A, mC), vC.A && vC.A.locals && vC.A.locals;
      var bC = "foundry_uaq1gwn";
      const gC = (0, s.forwardRef)((({
          children: e,
          label: n,
          hint: t,
          placeholder: r,
          description: o,
          testId: a,
          hideLabel: u,
          hideDescription: l = !1,
          hideRequiredAsterisk: c,
          hideDividers: f,
          errorMessage: p,
          value: h,
          defaultValue: y,
          onValueChange: A,
          open: v,
          defaultOpen: m,
          onOpenChange: b,
          isRequired: g,
          isDisabled: C,
          isReadOnly: _,
          className: E,
          ariaLabelledBy: w
        }, k) => {
          const B = (0, s.useRef)(null),
            x = (0, In.UP)(B, k),
            P = (0, s.useId)(),
            T = (0, s.useId)(),
            [S = !1, j] = (0, In.ic)({
              prop: v,
              defaultProp: m,
              onChange: b
            });
          return (0, i.jsxs)("div", {
            className: (0, Ze.$)("foundry_uaq1gw0", E),
            children: [(n && !u || t) && (0, i.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, i.jsx)(d.s6, {
                enabled: !!u,
                children: (0, i.jsx)(Z, {
                  className: (0, Ze.$)("foundry_uaq1gw2", C && bC),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: P,
                    children: [n, g && !c && (0, i.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), t && (0, i.jsx)(ae, {
                className: (0, Ze.$)("foundry_uaq1gw3", C && bC),
                children: t
              })]
            }), (0, i.jsxs)(bg, {
              required: g,
              disabled: C,
              open: S,
              onOpenChange: () => j(!_ && !S),
              value: h,
              defaultValue: y,
              onValueChange: A,
              children: [(0, i.jsxs)(gg, {
                className: (0, Ze.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!p && "foundry_uaq1gw7", _ && "foundry_uaq1gw6"),
                ref: x,
                "data-testid": a,
                "aria-activedescendant": h,
                "aria-labelledby": w || P,
                "aria-controls": T,
                children: [(0, i.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, i.jsx)(Cg, {
                    placeholder: r,
                    "aria-label": h
                  })
                }), (0, i.jsx)(_g, {
                  asChild: !0,
                  className: (0, Ze.$)("foundry_uaq1gw9", (_ || C) && "foundry_uaq1gwa"),
                  children: S ? (0, i.jsx)(Be.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(Be.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(Eg, {
                children: (0, i.jsx)(wg, {
                  id: T,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, i.jsxs)(pC, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, i.jsx)(kg, {
                      className: (0, Ze.$)("foundry_uaq1gwc", f && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(hC, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(yC, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, i.jsx)(AC, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(d.s6, {
              enabled: !!p || l || 0 === o.length,
              children: (0, i.jsx)(Z, {
                className: (0, Ze.$)("foundry_uaq1gwf", C && bC),
                children: o
              })
            }), p && (0, i.jsxs)(Z, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, i.jsx)(Be.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), p]
            })]
          })
        })),
        CC = (0, s.forwardRef)((({
          label: e,
          value: n,
          icon: t,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: u
        }, l) => {
          const d = (0, s.useRef)(null),
            c = (0, In.UP)(d, l),
            f = t && xe[t];
          return (0, i.jsxs)(Bg, {
            value: n,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: c,
            disabled: a,
            "data-testid": u,
            children: [f && "left" === o && (0, i.jsx)(f, {
              label: r || "",
              size: "LG"
            }), (0, i.jsx)(xg, {
              children: e
            }), f && "right" === o && (0, i.jsx)(f, {
              label: r || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var _C;
      _C = {
        "ar-AE": {
          breadcrumbs: "عناصر الواجهة"
        },
        "bg-BG": {
          breadcrumbs: "Трохи хляб"
        },
        "cs-CZ": {
          breadcrumbs: "Popis cesty"
        },
        "da-DK": {
          breadcrumbs: "Brødkrummer"
        },
        "de-DE": {
          breadcrumbs: "Breadcrumbs"
        },
        "el-GR": {
          breadcrumbs: "Πλοηγήσεις breadcrumb"
        },
        "en-US": {
          breadcrumbs: "Breadcrumbs"
        },
        "es-ES": {
          breadcrumbs: "Migas de pan"
        },
        "et-EE": {
          breadcrumbs: "Lingiread"
        },
        "fi-FI": {
          breadcrumbs: "Navigointilinkit"
        },
        "fr-FR": {
          breadcrumbs: "Chemin de navigation"
        },
        "he-IL": {
          breadcrumbs: "שבילי ניווט"
        },
        "hr-HR": {
          breadcrumbs: "Navigacijski putovi"
        },
        "hu-HU": {
          breadcrumbs: "Morzsamenü"
        },
        "it-IT": {
          breadcrumbs: "Breadcrumb"
        },
        "ja-JP": {
          breadcrumbs: "パンくずリスト"
        },
        "ko-KR": {
          breadcrumbs: "탐색 표시"
        },
        "lt-LT": {
          breadcrumbs: "Naršymo kelias"
        },
        "lv-LV": {
          breadcrumbs: "Atpakaļceļi"
        },
        "nb-NO": {
          breadcrumbs: "Navigasjonsstier"
        },
        "nl-NL": {
          breadcrumbs: "Broodkruimels"
        },
        "pl-PL": {
          breadcrumbs: "Struktura nawigacyjna"
        },
        "pt-BR": {
          breadcrumbs: "Caminho detalhado"
        },
        "pt-PT": {
          breadcrumbs: "Categorias"
        },
        "ro-RO": {
          breadcrumbs: "Miez de pâine"
        },
        "ru-RU": {
          breadcrumbs: "Навигация"
        },
        "sk-SK": {
          breadcrumbs: "Navigačné prvky Breadcrumbs"
        },
        "sl-SI": {
          breadcrumbs: "Drobtine"
        },
        "sr-SP": {
          breadcrumbs: "Putanje navigacije"
        },
        "sv-SE": {
          breadcrumbs: "Sökvägar"
        },
        "tr-TR": {
          breadcrumbs: "İçerik haritaları"
        },
        "uk-UA": {
          breadcrumbs: "Навігаційна стежка"
        },
        "zh-CN": {
          breadcrumbs: "导航栏"
        },
        "zh-TW": {
          breadcrumbs: "導覽列"
        }
      };
      const EC = new Set(["id"]),
        wC = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        kC = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        BC = /^(data-.*)$/;

      function xC(e, n = {}) {
        let {
          labelable: t,
          isLink: r,
          propNames: o
        } = n, i = {};
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (EC.has(n) || t && wC.has(n) || r && kC.has(n) || (null == o ? void 0 : o.has(n)) || BC.test(n)) && (i[n] = e[n]);
        return i
      }
      const PC = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        TC = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function SC(e) {
        if (Intl.Locale) {
          let n = new Intl.Locale(e).maximize(),
            t = "function" == typeof n.getTextInfo ? n.getTextInfo() : n.textInfo;
          if (t) return "rtl" === t.direction;
          if (n.script) return PC.has(n.script)
        }
        let n = e.split("-")[0];
        return TC.has(n)
      }
      const jC = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        OC = s.createContext(jC),
        NC = s.createContext(!1);
      let LC = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        RC = new WeakMap;
      const DC = "function" == typeof s.useId ? function(e) {
        let n = s.useId(),
          [t] = (0, s.useState)(zC());
        return e || `${t?"react-aria":`react-aria${jC.prefix}`}-${n}`
      } : function(e) {
        let n = (0, s.useContext)(OC);
        n !== jC || LC || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let t = function(e = !1) {
            let n = (0, s.useContext)(OC),
              t = (0, s.useRef)(null);
            if (null === t.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let t = RC.get(e);
                null == t ? RC.set(e, {
                  id: n.current,
                  state: e.memoizedState
                }) : e.memoizedState !== t.state && (n.current = t.id, RC.delete(e))
              }
              t.current = ++n.current
            }
            return t.current
          }(!!e),
          r = `react-aria${n.prefix}`;
        return e || `${r}-${t}`
      };

      function MC() {
        return !1
      }

      function IC() {
        return !0
      }

      function HC(e) {
        return () => {}
      }

      function zC() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(HC, MC, IC) : (0, s.useContext)(NC)
      }
      const qC = Symbol.for("react-aria.i18n.locale");

      function FC() {
        let e = "undefined" != typeof window && window[qC] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (n) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: SC(e) ? "rtl" : "ltr"
        }
      }
      let UC = FC(),
        VC = new Set;

      function GC() {
        UC = FC();
        for (let e of VC) e(UC)
      }
      const WC = s.createContext(null);

      function KC() {
        let e = function() {
          let e = zC(),
            [n, t] = (0, s.useState)(UC);
          return (0, s.useEffect)((() => (0 === VC.size && window.addEventListener("languagechange", GC), VC.add(t), () => {
            VC.delete(t), 0 === VC.size && window.removeEventListener("languagechange", GC)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : n
        }();
        return (0, s.useContext)(WC) || e
      }
      const XC = Symbol.for("react-aria.i18n.locale"),
        $C = Symbol.for("react-aria.i18n.strings");
      let YC;
      class ZC {
        getStringForLocale(e, n) {
          let t = this.getStringsForLocale(n)[e];
          if (!t) throw new Error(`Could not find intl message ${e} in ${n} locale`);
          return t
        }
        getStringsForLocale(e) {
          let n = this.strings[e];
          return n || (n = function(e, n, t = "en-US") {
            if (n[e]) return n[e];
            let r = function(e) {
              return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
            }(e);
            if (n[r]) return n[r];
            for (let e in n)
              if (e.startsWith(r + "-")) return n[e];
            return n[t]
          }(e, this.strings, this.defaultLocale), this.strings[e] = n), n
        }
        static getGlobalDictionaryForPackage(e) {
          if ("undefined" == typeof window) return null;
          let n = window[XC];
          if (void 0 === YC) {
            let e = window[$C];
            if (!e) return null;
            YC = {};
            for (let t in e) YC[t] = new ZC({
              [n]: e[t]
            }, n)
          }
          let t = null == YC ? void 0 : YC[e];
          if (!t) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return t
        }
        constructor(e, n = "en-US") {
          this.strings = Object.fromEntries(Object.entries(e).filter((([, e]) => e))), this.defaultLocale = n
        }
      }
      const QC = new Map,
        JC = new Map;
      class e_ {
        format(e, n) {
          let t = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof t ? t(n, this) : t
        }
        plural(e, n, t = "cardinal") {
          let r = n["=" + e];
          if (r) return "function" == typeof r ? r() : r;
          let o = this.locale + ":" + t,
            i = QC.get(o);
          return i || (i = new Intl.PluralRules(this.locale, {
            type: t
          }), QC.set(o, i)), r = n[i.select(e)] || n.other, "function" == typeof r ? r() : r
        }
        number(e) {
          let n = JC.get(this.locale);
          return n || (n = new Intl.NumberFormat(this.locale), JC.set(this.locale, n)), n.format(e)
        }
        select(e, n) {
          let t = e[n] || e.other;
          return "function" == typeof t ? t() : t
        }
        constructor(e, n) {
          this.locale = e, this.strings = n
        }
      }
      const n_ = new WeakMap;

      function t_(e, n) {
        let {
          locale: t
        } = KC(), r = function(e, n) {
          return n && ZC.getGlobalDictionaryForPackage(n) || function(e) {
            let n = n_.get(e);
            return n || (n = new ZC(e), n_.set(e, n)), n
          }(e)
        }(e, n);
        return (0, s.useMemo)((() => new e_(t, r)), [t, r])
      }

      function r_(...e) {
        return (...n) => {
          for (let t of e) "function" == typeof t && t(...n)
        }
      }
      const o_ = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function i_(e) {
        const n = (0, s.useRef)(null);
        return o_((() => {
          n.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const t = n.current;
          return null == t ? void 0 : t(...e)
        }), [])
      }
      let a_ = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        s_ = new Map;

      function u_(e) {
        let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = DC(n), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return a_ && (s_.has(o) && !s_.get(o).includes(i) ? s_.set(o, [...s_.get(o), i]) : s_.set(o, [i])), o_((() => {
          let e = o;
          return () => {
            s_.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, t(e))
        })), o
      }

      function l_(e, n) {
        if (e === n) return e;
        let t = s_.get(e);
        if (t) return t.forEach((e => e(n))), n;
        let r = s_.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function d_(e = []) {
        let n = u_(),
          [t, r] = function(e) {
            let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = i_((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : n === e.value ? o() : t(e.value)
            }));
            o_((() => {
              r.current && o()
            }));
            let i = i_((e => {
              r.current = e(n), o()
            }));
            return [n, i]
          }(n),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield n, yield document.getElementById(n) ? n : void 0
            }))
          }), [n, r]);
        return o_(o, [n, o, ...e]), t
      }

      function c_(...e) {
        let n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          let r = e[t];
          for (let e in r) {
            let t = n[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = r_(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? n.id = l_(t, o) : n[e] = void 0 !== o ? o : t : n[e] = (0, Ze.A)(t, o)
          }
        }
        return n
      }

      function f_(e) {
        if (function() {
            if (null == p_) {
              p_ = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return p_ = !0, !0
                  }
                })
              } catch (e) {}
            }
            return p_
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let n = function(e) {
            let n = e.parentNode,
              t = [],
              r = document.scrollingElement || document.documentElement;
            for (; n instanceof HTMLElement && n !== r;)(n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && t.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), n = n.parentNode;
            return r instanceof HTMLElement && t.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), t
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: n,
                  scrollTop: t,
                  scrollLeft: r
                }
                of e) n.scrollTop = t, n.scrollLeft = r
            }(n)
        }
      }
      let p_ = null;

      function h_(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((n => e.test(n.brand)))) || e.test(window.navigator.userAgent))
      }

      function y_(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform)
      }

      function A_(e) {
        let n = null;
        return () => (null == n && (n = e()), n)
      }
      const v_ = A_((function() {
          return y_(/^Mac/i)
        })),
        m_ = A_((function() {
          return y_(/^iPhone/i)
        })),
        b_ = A_((function() {
          return y_(/^iPad/i) || v_() && navigator.maxTouchPoints > 1
        })),
        g_ = A_((function() {
          return m_() || b_()
        })),
        C_ = (A_((function() {
          return v_() || g_()
        })), A_((function() {
          return h_(/AppleWebKit/i) && !__()
        }))),
        __ = A_((function() {
          return h_(/Chrome/i)
        })),
        E_ = A_((function() {
          return h_(/Android/i)
        })),
        w_ = A_((function() {
          return h_(/Firefox/i)
        })),
        k_ = (0, s.createContext)({
          isNative: !0,
          open: function(e, n) {
            ! function(e, n) {
              if (e instanceof HTMLAnchorElement) n(e);
              else if (e.hasAttribute("data-href")) {
                let t = document.createElement("a");
                t.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (t.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (t.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (t.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (t.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (t.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(t), n(t), e.removeChild(t)
              }
            }(e, (e => x_(e, n)))
          },
          useHref: e => e
        });

      function B_() {
        return (0, s.useContext)(k_)
      }

      function x_(e, n, t = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        } = n;
        w_() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (v_() ? i = !0 : a = !0);
        let l = C_() && v_() && !b_() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u,
          bubbles: !0,
          cancelable: !0
        });
        x_.isOpening = t, f_(e), e.dispatchEvent(l), x_.isOpening = !1
      }

      function P_(e) {
        var n;
        const t = B_().useHref(null !== (n = null == e ? void 0 : e.href) && void 0 !== n ? n : "");
        return {
          href: (null == e ? void 0 : e.href) ? t : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      x_.isOpening = !1;
      const T_ = e => {
          var n;
          return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document
        },
        S_ = e => e && "window" in e && e.window === e ? e : T_(e).defaultView || window;
      let j_ = new Map,
        O_ = new Set;

      function N_() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let n = t => {
          if (!e(t) || !t.target) return;
          let r = j_.get(t.target);
          if (r && (r.delete(t.propertyName), 0 === r.size && (t.target.removeEventListener("transitioncancel", n), j_.delete(t.target)), 0 === j_.size)) {
            for (let e of O_) e();
            O_.clear()
          }
        };
        document.body.addEventListener("transitionrun", (t => {
          if (!e(t) || !t.target) return;
          let r = j_.get(t.target);
          r || (r = new Set, j_.set(t.target, r), t.target.addEventListener("transitioncancel", n, {
            once: !0
          })), r.add(t.propertyName)
        })), document.body.addEventListener("transitionend", n)
      }

      function L_(e) {
        requestAnimationFrame((() => {
          0 === j_.size ? e() : O_.add(e)
        }))
      }

      function R_(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (E_() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? N_() : document.addEventListener("DOMContentLoaded", N_));
      let D_ = null,
        M_ = new Set,
        I_ = new Map,
        H_ = !1,
        z_ = !1;

      function q_(e, n) {
        for (let t of M_) t(e, n)
      }

      function F_(e) {
        H_ = !0,
          function(e) {
            return !(e.metaKey || !v_() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (D_ = "keyboard", q_("keyboard", e))
      }

      function U_(e) {
        D_ = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (H_ = !0, q_("pointer", e))
      }

      function V_(e) {
        R_(e) && (H_ = !0, D_ = "virtual")
      }

      function G_(e) {
        e.target !== window && e.target !== document && (H_ || z_ || (D_ = "virtual", q_("virtual", e)), H_ = !1, z_ = !1)
      }

      function W_() {
        H_ = !1, z_ = !0
      }

      function K_(e) {
        if ("undefined" == typeof window || I_.get(S_(e))) return;
        const n = S_(e),
          t = T_(e);
        let r = n.HTMLElement.prototype.focus;
        n.HTMLElement.prototype.focus = function() {
          H_ = !0, r.apply(this, arguments)
        }, t.addEventListener("keydown", F_, !0), t.addEventListener("keyup", F_, !0), t.addEventListener("click", V_, !0), n.addEventListener("focus", G_, !0), n.addEventListener("blur", W_, !1), "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", U_, !0), t.addEventListener("pointermove", U_, !0), t.addEventListener("pointerup", U_, !0)) : (t.addEventListener("mousedown", U_, !0), t.addEventListener("mousemove", U_, !0), t.addEventListener("mouseup", U_, !0)), n.addEventListener("beforeunload", (() => {
          X_(e)
        }), {
          once: !0
        }), I_.set(n, {
          focus: r
        })
      }
      const X_ = (e, n) => {
        const t = S_(e),
          r = T_(e);
        n && r.removeEventListener("DOMContentLoaded", n), I_.has(t) && (t.HTMLElement.prototype.focus = I_.get(t).focus, r.removeEventListener("keydown", F_, !0), r.removeEventListener("keyup", F_, !0), r.removeEventListener("click", V_, !0), t.removeEventListener("focus", G_, !0), t.removeEventListener("blur", W_, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", U_, !0), r.removeEventListener("pointermove", U_, !0), r.removeEventListener("pointerup", U_, !0)) : (r.removeEventListener("mousedown", U_, !0), r.removeEventListener("mousemove", U_, !0), r.removeEventListener("mouseup", U_, !0)), I_.delete(t))
      };

      function $_(e, n) {
        o_((() => {
          if (e && e.ref && n) return e.ref.current = n.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const n = T_(e);
        let t;
        "loading" !== n.readyState ? K_(e) : (t = () => {
          K_(e)
        }, n.addEventListener("DOMContentLoaded", t))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class Y_ {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, n) {
          this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = e
        }
      }

      function Z_(e) {
        let n = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        o_((() => {
          const e = n.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let t = i_((n => {
          null == e || e(n)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            n.current.isFocused = !0;
            let r = e.target,
              o = e => {
                n.current.isFocused = !1, r.disabled && t(new Y_("blur", e)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), n.current.observer = new MutationObserver((() => {
              if (n.current.isFocused && r.disabled) {
                var e;
                null === (e = n.current.observer) || void 0 === e || e.disconnect();
                let t = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: t
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: t
                }))
              }
            })), n.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [t])
      }

      function Q_(e) {
        if (!e) return;
        let n = !0;
        return t => {
          let r = {
            ...t,
            preventDefault() {
              t.preventDefault()
            },
            isDefaultPrevented: () => t.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              n = !1
            }
          };
          e(r), n && t.stopPropagation()
        }
      }
      let J_ = s.createContext(null);

      function eE(e, n) {
        let {
          focusProps: t
        } = function(e) {
          let {
            isDisabled: n,
            onFocus: t,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, s.useCallback)((e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }), [r, o]),
            a = Z_(i),
            u = (0, s.useCallback)((e => {
              const n = T_(e.target);
              e.target === e.currentTarget && n.activeElement === e.target && (t && t(e), o && o(!0), a(e))
            }), [o, t, a]);
          return {
            focusProps: {
              onFocus: !n && (t || o || r) ? u : void 0,
              onBlur: n || !r && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Q_(e.onKeyDown),
              onKeyUp: Q_(e.onKeyUp)
            }
          }
        }(e), o = c_(t, r), i = function(e) {
          let n = (0, s.useContext)(J_) || {};
          $_(n, e);
          let {
            ref: t,
            ...r
          } = n;
          return r
        }(n), a = e.isDisabled ? {} : i, u = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          u.current && n.current && function(e) {
            const n = T_(e);
            if ("virtual" === D_) {
              let t = n.activeElement;
              L_((() => {
                n.activeElement === t && e.isConnected && f_(e)
              }))
            } else f_(e)
          }(n.current), u.current = !1
        }), [n]), {
          focusableProps: c_({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let nE = "default",
        tE = "",
        rE = new WeakMap;

      function oE(e) {
        if (g_()) {
          if ("default" === nE) {
            const n = T_(e);
            tE = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none"
          }
          nE = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (rE.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function iE(e) {
        if (g_()) {
          if ("disabled" !== nE) return;
          nE = "restoring", setTimeout((() => {
            L_((() => {
              if ("restoring" === nE) {
                const n = T_(e);
                "none" === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = tE || ""), tE = "", nE = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && rE.has(e)) {
          let n = rE.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = n), "" === e.getAttribute("style") && e.removeAttribute("style"), rE.delete(e)
        }
      }
      const aE = s.createContext({
        register: () => {}
      });
      aE.displayName = "PressResponderContext";
      var sE = new WeakMap;
      class uE {
        continuePropagation() {
          Xt(this, sE, !1)
        }
        get shouldStopPropagation() {
          return Wt(this, sE)
        }
        constructor(e, n, t, r) {
          var o;
          Kt(this, sE, {
            writable: !0,
            value: void 0
          }), Xt(this, sE, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : t.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, u, l = 0,
            d = null;
          null != t.clientX && null != t.clientY && (u = t.clientX, d = t.clientY), a && (null != u && null != d ? (s = u - a.left, l = d - a.top) : (s = a.width / 2, l = a.height / 2)), this.type = e, this.pointerType = n, this.target = t.currentTarget, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.x = s, this.y = l
        }
      }
      const lE = Symbol("linkClicked");

      function dE(e) {
        let {
          onPress: n,
          onPressChange: t,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          isDisabled: a,
          isPressed: u,
          preventFocusOnPress: l,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: c,
          ref: f,
          ...p
        } = function(e) {
          let n = (0, s.useContext)(aE);
          if (n) {
            let {
              register: t,
              ...r
            } = n;
            e = c_(r, e), t()
          }
          return $_(n, e.ref), e
        }(e), [h, y] = (0, s.useState)(!1), A = (0, s.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: v,
          removeAllGlobalListeners: m
        } = function() {
          let e = (0, s.useRef)(new Map),
            n = (0, s.useCallback)(((n, t, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...n) => {
                e.current.delete(r), r(...n)
              } : r;
              e.current.set(r, {
                type: t,
                eventTarget: n,
                fn: i,
                options: o
              }), n.addEventListener(t, r, o)
            }), []),
            t = (0, s.useCallback)(((n, t, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              n.removeEventListener(t, a, o), e.current.delete(r)
            }), []),
            r = (0, s.useCallback)((() => {
              e.current.forEach(((e, n) => {
                t(e.eventTarget, e.type, n, e.options)
              }))
            }), [t]);
          return (0, s.useEffect)((() => r), [r]), {
            addGlobalListener: n,
            removeGlobalListener: t,
            removeAllGlobalListeners: r
          }
        }(), b = i_(((e, n) => {
          let o = A.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let t = new uE("pressstart", n, e);
            r(t), i = t.shouldStopPropagation
          }
          return t && t(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        })), g = i_(((e, r, i = !0) => {
          let s = A.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let u = !0;
          if (o) {
            let n = new uE("pressend", r, e);
            o(n), u = n.shouldStopPropagation
          }
          if (t && t(!1), y(!1), n && i && !a) {
            let t = new uE("press", r, e);
            n(t), u && (u = t.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, u
        })), C = i_(((e, n) => {
          let t = A.current;
          if (a) return !1;
          if (i) {
            t.isTriggeringEvent = !0;
            let r = new uE("pressup", n, e);
            return i(r), t.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = i_((e => {
          let n = A.current;
          n.isPressed && n.target && (n.isOverTarget && null != n.pointerType && g(yE(n.target, e), n.pointerType, !1), n.isPressed = !1, n.isOverTarget = !1, n.activePointerId = null, n.pointerType = null, m(), c || iE(n.target))
        })), E = i_((e => {
          d && _(e)
        })), w = (0, s.useMemo)((() => {
          let e = A.current,
            n = {
              onKeyDown(n) {
                if (fE(n.nativeEvent, n.currentTarget) && n.currentTarget.contains(n.target)) {
                  var r;
                  bE(n.target, n.key) && n.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !n.repeat) {
                    e.target = n.currentTarget, e.isPressed = !0, o = b(n, "keyboard");
                    let r = n.currentTarget,
                      i = n => {
                        fE(n, r) && !n.repeat && r.contains(n.target) && e.target && C(yE(e.target, n), "keyboard")
                      };
                    v(T_(n.currentTarget), "keyup", r_(i, t), !0)
                  }
                  o && n.stopPropagation(), n.metaKey && v_() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(n.key, n.nativeEvent))
                } else "Meta" === n.key && (e.metaKeyEvents = new Map)
              },
              onClick(n) {
                if ((!n || n.currentTarget.contains(n.target)) && n && 0 === n.button && !e.isTriggeringEvent && !x_.isOpening) {
                  let t = !0;
                  if (a && n.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || R_(n.nativeEvent))) {
                    a || l || f_(n.currentTarget);
                    let e = b(n, "virtual"),
                      r = C(n, "virtual"),
                      o = g(n, "virtual");
                    t = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, t && n.stopPropagation()
                }
              }
            },
            t = n => {
              var t;
              if (e.isPressed && e.target && fE(n, e.target)) {
                var r;
                bE(n.target, n.key) && n.preventDefault();
                let t = n.target;
                g(yE(e.target, n), "keyboard", e.target.contains(t)), m(), "Enter" !== n.key && cE(e.target) && e.target.contains(t) && !n[lE] && (n[lE] = !0, x_(e.target, n, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(n.key)
              } else if ("Meta" === n.key && (null === (t = e.metaKeyEvents) || void 0 === t ? void 0 : t.size)) {
                var o;
                let n = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let t of n.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", t))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            n.onPointerDown = n => {
              if (0 !== n.button || !n.currentTarget.contains(n.target)) return;
              if (o = n.nativeEvent, !E_() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              vE(n.currentTarget) && n.preventDefault(), e.pointerType = n.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, a || l || f_(n.currentTarget), c || oE(e.target), s = b(n, e.pointerType), v(T_(n.currentTarget), "pointermove", t, !1), v(T_(n.currentTarget), "pointerup", r, !1), v(T_(n.currentTarget), "pointercancel", i, !1)), s && n.stopPropagation()
            }, n.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (vE(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, n.onPointerUp = n => {
              n.currentTarget.contains(n.target) && "virtual" !== e.pointerType && 0 === n.button && AE(n, n.currentTarget) && C(n, e.pointerType || n.pointerType)
            };
            let t = n => {
                n.pointerId === e.activePointerId && (e.target && AE(n, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(yE(e.target, n), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, g(yE(e.target, n), e.pointerType, !1), E(n)))
              },
              r = n => {
                n.pointerId === e.activePointerId && e.isPressed && 0 === n.button && e.target && (AE(n, e.target) && null != e.pointerType ? g(yE(e.target, n), e.pointerType) : e.isOverTarget && null != e.pointerType && g(yE(e.target, n), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, m(), c || iE(e.target), "ontouchend" in e.target && "mouse" !== n.pointerType && v(e.target, "touchend", o, {
                  once: !0
                }))
              },
              o = e => {
                mE(e.currentTarget) && e.preventDefault()
              },
              i = e => {
                _(e)
              };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            n.onMouseDown = n => {
              0 === n.button && n.currentTarget.contains(n.target) && (vE(n.currentTarget) && n.preventDefault(), e.ignoreEmulatedMouseEvents ? n.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = n.currentTarget, e.pointerType = R_(n.nativeEvent) ? "virtual" : "mouse", a || l || f_(n.currentTarget), b(n, e.pointerType) && n.stopPropagation(), v(T_(n.currentTarget), "mouseup", t, !1)))
            }, n.onMouseEnter = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, t = b(n, e.pointerType)), t && n.stopPropagation()
            }, n.onMouseLeave = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, t = g(n, e.pointerType, !1), E(n)), t && n.stopPropagation()
            }, n.onMouseUp = n => {
              n.currentTarget.contains(n.target) && (e.ignoreEmulatedMouseEvents || 0 !== n.button || C(n, e.pointerType || "mouse"))
            };
            let t = n => {
              0 === n.button && (e.isPressed = !1, m(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && AE(n, e.target) && null != e.pointerType ? g(yE(e.target, n), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && g(yE(e.target, n), e.pointerType, !1), e.isOverTarget = !1))
            };
            n.onTouchStart = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = function(e) {
                const {
                  targetTouches: n
                } = e;
                return n.length > 0 ? n[0] : null
              }(n.nativeEvent);
              t && (e.activePointerId = t.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = n.currentTarget, e.pointerType = "touch", a || l || f_(n.currentTarget), c || oE(e.target), b(hE(e.target, n), e.pointerType) && n.stopPropagation(), v(S_(n.currentTarget), "scroll", r, !0))
            }, n.onTouchMove = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = pE(n.nativeEvent, e.activePointerId),
                r = !0;
              t && AE(t, n.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(hE(e.target, n), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = g(hE(e.target, n), e.pointerType, !1), E(hE(e.target, n))), r && n.stopPropagation()
            }, n.onTouchEnd = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = pE(n.nativeEvent, e.activePointerId),
                r = !0;
              t && AE(t, n.currentTarget) && null != e.pointerType ? (C(hE(e.target, n), e.pointerType), r = g(hE(e.target, n), e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = g(hE(e.target, n), e.pointerType, !1)), r && n.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !c && iE(e.target), m()
            }, n.onTouchCancel = n => {
              n.currentTarget.contains(n.target) && (n.stopPropagation(), e.isPressed && _(hE(e.target, n)))
            };
            let r = n => {
              e.isPressed && n.target.contains(e.target) && _({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          }
          return n
        }), [v, a, l, m, c, _, E, g, b, C]);
        return (0, s.useEffect)((() => () => {
          var e;
          c || iE(null !== (e = A.current.target) && void 0 !== e ? e : void 0)
        }), [c]), {
          isPressed: u || h,
          pressProps: c_(p, w)
        }
      }

      function cE(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function fE(e, n) {
        const {
          key: t,
          code: r
        } = e, o = n, i = o.getAttribute("role");
        return !("Enter" !== t && " " !== t && "Spacebar" !== t && "Space" !== r || o instanceof S_(o).HTMLInputElement && !CE(o, t) || o instanceof S_(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && cE(o)) && "Enter" !== t)
      }

      function pE(e, n) {
        const t = e.changedTouches;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (r.identifier === n) return r
        }
        return null
      }

      function hE(e, n) {
        let t = 0,
          r = 0;
        return n.targetTouches && 1 === n.targetTouches.length && (t = n.targetTouches[0].clientX, r = n.targetTouches[0].clientY), {
          currentTarget: e,
          shiftKey: n.shiftKey,
          ctrlKey: n.ctrlKey,
          metaKey: n.metaKey,
          altKey: n.altKey,
          clientX: t,
          clientY: r
        }
      }

      function yE(e, n) {
        let t = n.clientX,
          r = n.clientY;
        return {
          currentTarget: e,
          shiftKey: n.shiftKey,
          ctrlKey: n.ctrlKey,
          metaKey: n.metaKey,
          altKey: n.altKey,
          clientX: t,
          clientY: r
        }
      }

      function AE(e, n) {
        let t = n.getBoundingClientRect(),
          r = function(e) {
            let n = 0,
              t = 0;
            return void 0 !== e.width ? n = e.width / 2 : void 0 !== e.radiusX && (n = e.radiusX), void 0 !== e.height ? t = e.height / 2 : void 0 !== e.radiusY && (t = e.radiusY), {
              top: e.clientY - t,
              right: e.clientX + n,
              bottom: e.clientY + t,
              left: e.clientX - n
            }
          }(e);
        return i = r, !((o = t).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
        var o, i
      }

      function vE(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function mE(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : cE(e)))
      }

      function bE(e, n) {
        return e instanceof HTMLInputElement ? !CE(e, n) : mE(e)
      }
      const gE = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function CE(e, n) {
        return "checkbox" === e.type || "radio" === e.type ? " " === n : gE.has(e.type)
      }

      function _E(e, n) {
        let {
          elementType: t = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...u
        } = e, l = {};
        "a" !== t && (l = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: d
        } = eE(e, n), {
          pressProps: c,
          isPressed: f
        } = dE({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          isDisabled: s,
          ref: n
        }), p = xC(u, {
          labelable: !0
        }), h = c_(d, c), y = B_();
        return {
          isPressed: f,
          linkProps: c_(p, P_(e), {
            ...h,
            ...l,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: n => {
              var t;
              null === (t = c.onClick) || void 0 === t || t.call(c, n), a && (a(n), console.warn("onClick is deprecated, please use onPress")), !y.isNative && n.currentTarget instanceof HTMLAnchorElement && n.currentTarget.href && !n.isDefaultPrevented() && function(e, n) {
                let t = e.getAttribute("target");
                return !(t && "_self" !== t || e.origin !== location.origin || e.hasAttribute("download") || n.metaKey || n.ctrlKey || n.altKey || n.shiftKey)
              }(n.currentTarget, n) && e.href && (n.preventDefault(), y.open(n.currentTarget, n, e.href, e.routerOptions))
            }
          })
        }
      }
      var EE = t(79370),
        wE = {};
      wE.styleTagTransform = _(), wE.setAttributes = m(), wE.insert = A().bind(null, "head"), wE.domAPI = h(), wE.insertStyleElement = g(), f()(EE.A, wE), EE.A && EE.A.locals && EE.A.locals;
      var kE = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        BE = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        xE = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        PE = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        TE = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      const SE = (0, s.forwardRef)((({
          breadcrumbs: e,
          size: n = "MD",
          isLandmark: t = !0,
          hideRootPage: r,
          showCurrentPage: o,
          testId: a,
          ...u
        }, l) => {
          if (0 === e.length) return null;
          const d = (0, s.useRef)(null),
            c = (0, In.UP)(d, l),
            f = (0, s.useRef)(null),
            {
              countWrappedElements: p
            } = (0, In.Pt)(),
            h = e[0],
            y = e[e.length - 1],
            A = e.slice(1, e.length - 1),
            [v, m] = (0, s.useState)(A),
            [b, g] = (0, s.useState)([]),
            C = (0, s.useCallback)((() => {
              const e = p(f);
              m(A.slice(e, A.length)), g(A.slice(0, e))
            }), [f]);
          (0, s.useEffect)((() => {
            const e = new ResizeObserver(C);
            return f.current && e.observe(f.current), () => {
              f.current && e.unobserve(f.current)
            }
          }), [f.current]);
          const _ = (0, s.useMemo)((() => {
              const e = A.slice().reverse();
              return (0, i.jsxs)("ol", {
                className: kE[n],
                ref: f,
                "aria-hidden": "true",
                children: [!r && h && (0, i.jsx)(jE, {
                  href: h.url,
                  size: n,
                  icon: h.icon,
                  iconLabel: h.iconLabel,
                  iconPosition: h.iconPosition,
                  children: h.label
                }, h.label), b.length > 0 && (0, i.jsx)("li", {
                  className: xE[n],
                  children: (0, i.jsx)("button", {
                    className: PE,
                    children: "..."
                  })
                }), o && y && (0, i.jsx)(jE, {
                  href: y.url,
                  size: n,
                  icon: y.icon,
                  iconLabel: y.iconLabel,
                  iconPosition: y.iconPosition,
                  isCurrent: !0,
                  children: y.label
                }, y.label), e.map((e => (0, i.jsx)(jE, {
                  href: e.url,
                  size: n,
                  icon: e.icon,
                  iconLabel: e.iconLabel,
                  iconPosition: e.iconPosition,
                  children: e.label
                }, e.label)))]
              })
            }), [e, b]),
            {
              navProps: E
            } = function(e) {
              let {
                "aria-label": n,
                ...t
              } = e, r = t_((o = _C) && o.__esModule ? o.default : o, "@react-aria/breadcrumbs");
              var o;
              return {
                navProps: {
                  ...xC(t, {
                    labelable: !0
                  }),
                  "aria-label": n || r.format("breadcrumbs")
                }
              }
            }(u),
            w = t ? "nav" : "div";
          return (0, i.jsxs)(w, {
            ...E,
            role: t ? "navigation" : null,
            className: "foundry_m1icrx0",
            children: [(0, i.jsxs)("ol", {
              className: TE[n],
              "data-testid": a,
              ref: c,
              children: [!r && h && (0, i.jsx)(jE, {
                href: h.url,
                size: n,
                icon: h.icon,
                iconLabel: h.iconLabel,
                iconPosition: h.iconPosition,
                children: h.label
              }, h.label), b.length > 0 && (0, i.jsx)("li", {
                className: xE[n],
                children: (0, i.jsx)(OE, {
                  items: b
                })
              }), v.length > 0 && v.map(((e, t) => {
                const {
                  label: r,
                  url: o,
                  icon: a,
                  iconLabel: s,
                  iconPosition: u
                } = e;
                return (0, i.jsx)(jE, {
                  href: o,
                  size: n,
                  icon: a,
                  iconLabel: s,
                  iconPosition: u,
                  children: r
                }, `${r.replace(/\s/g,"")}-${t}`)
              })), o && y && (0, i.jsx)(jE, {
                href: y.url,
                size: n,
                icon: y.icon,
                iconLabel: y.iconLabel,
                iconPosition: y.iconPosition,
                isCurrent: !0,
                children: y.label
              }, y.label)]
            }), _]
          })
        })),
        jE = ({
          size: e,
          icon: n,
          iconLabel: t,
          iconPosition: r = "left",
          ...o
        }) => {
          const a = (0, s.useRef)(null),
            {
              itemProps: u
            } = function(e, n) {
              let {
                isCurrent: t,
                isDisabled: r,
                "aria-current": o,
                elementType: i = "a",
                ...a
              } = e, {
                linkProps: s
              } = _E({
                isDisabled: r || t,
                elementType: i,
                ...a
              }, n), u = {};
              return /^h[1-6]$/.test(i) || (u = s), t && (u["aria-current"] = o || "page", u.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": r,
                  ...u
                }
              }
            }({
              ...o,
              elementType: "a"
            }, a),
            {
              isCurrent: l,
              children: d
            } = o,
            c = l ? "span" : "a",
            f = n && xe[n];
          return (0, i.jsx)("li", {
            className: xE[e],
            children: (0, i.jsxs)(c, {
              ...u,
              ref: a,
              className: (0, Ze.$)(BE[e], l && "foundry_m1icrxd"),
              children: [f && "left" === r && (0, i.jsx)(f, {
                label: t || "",
                size: "LG"
              }), d, f && "right" === r && (0, i.jsx)(f, {
                label: t || "",
                size: "LG"
              })]
            })
          })
        },
        OE = ({
          items: e
        }) => {
          const [n, t] = (0, s.useState)(!1);
          return (0, i.jsxs)(bg, {
            open: n,
            onOpenChange: () => t(!n),
            children: [(0, i.jsx)(gg, {
              className: PE,
              children: "..."
            }), (0, i.jsx)(Eg, {
              children: (0, i.jsx)(wg, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, i.jsx)(kg, {
                  className: "foundry_m1icrxg",
                  children: e.map(((e, n) => (0, i.jsx)(Bg, {
                    value: e.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, i.jsx)(xg, {
                      children: e.label
                    })
                  }, `${e.label}-${n}`)))
                })
              })
            })]
          })
        },
        NE = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        LE = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        RE = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        DE = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        ME = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        IE = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function HE(e, n, t) {
        let [r, o] = (0, s.useState)(e || n), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
        (0, s.useEffect)((() => {
          let e = i.current;
          e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), i.current = a
        }), [a]);
        let u = a ? e : r,
          l = (0, s.useCallback)(((e, ...n) => {
            let r = (e, ...n) => {
              t && (Object.is(u, e) || t(e, ...n)), a || (u = e)
            };
            "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((t, ...o) => {
              let i = e(a ? u : t, ...o);
              return r(i, ...n), a ? t : i
            }))) : (a || o(e), r(e, ...n))
          }), [a, u, t]);
        return [u, l]
      }

      function zE(e = {}) {
        let {
          isReadOnly: n
        } = e, [t, r] = HE(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: t,
          setSelected: function(e) {
            n || r(e)
          },
          toggle: function() {
            n || r(!t)
          }
        }
      }

      function qE(e, n, t) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        o_((() => {
          if ("native" === r && (null == t ? void 0 : t.current)) {
            let r = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            t.current.setCustomValidity(r), t.current.hasAttribute("title") || (t.current.title = ""), n.realtimeValidation.isInvalid || n.updateValidation({
              isInvalid: !(e = t.current).validity.valid,
              validationDetails: FE(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = i_((() => {
            n.resetValidation()
          })),
          a = i_((e => {
            var r;
            n.displayValidation.isInvalid || n.commitValidation();
            let i = null == t || null === (r = t.current) || void 0 === r ? void 0 : r.form;
            var a;
            !e.defaultPrevented && t && i && function(e) {
              for (let n = 0; n < e.elements.length; n++) {
                let t = e.elements[n];
                if (!t.validity.valid) return t
              }
              return null
            }(i) === t.current && (o ? o() : null === (a = t.current) || void 0 === a || a.focus(), D_ = "keyboard", q_("keyboard", null)), e.preventDefault()
          })),
          u = i_((() => {
            n.commitValidation()
          }));
        (0, s.useEffect)((() => {
          let e = null == t ? void 0 : t.current;
          if (!e) return;
          let n = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", u), null == n || n.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", u), null == n || n.removeEventListener("reset", i)
          }
        }), [t, a, u, i, r])
      }

      function FE(e) {
        let n = e.validity;
        return {
          badInput: n.badInput,
          customError: n.customError,
          patternMismatch: n.patternMismatch,
          rangeOverflow: n.rangeOverflow,
          rangeUnderflow: n.rangeUnderflow,
          stepMismatch: n.stepMismatch,
          tooLong: n.tooLong,
          tooShort: n.tooShort,
          typeMismatch: n.typeMismatch,
          valueMissing: n.valueMissing,
          valid: n.valid
        }
      }
      const UE = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        VE = {
          ...UE,
          customError: !0,
          valid: !1
        },
        GE = {
          isInvalid: !1,
          validationDetails: UE,
          validationErrors: []
        },
        WE = (0, s.createContext)({}),
        KE = "__formValidationState" + Date.now();

      function XE(e) {
        if (e[KE]) {
          let {
            realtimeValidation: n,
            displayValidation: t,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[KE];
          return {
            realtimeValidation: n,
            displayValidation: t,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: n,
            validationState: t,
            name: r,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: u = "aria"
          } = e;
          t && (n || (n = "invalid" === t));
          let l = void 0 !== n ? {
              isInvalid: n,
              validationErrors: [],
              validationDetails: VE
            } : null,
            d = (0, s.useMemo)((() => YE(function(e, n) {
              if ("function" == typeof e) {
                let t = e(n);
                if (t && "boolean" != typeof t) return $E(t)
              }
              return []
            }(a, o))), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = null);
          let c = (0, s.useContext)(WE),
            f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => $E(c[e]))) : $E(c[r]) : []), [c, r]),
            [p, h] = (0, s.useState)(c),
            [y, A] = (0, s.useState)(!1);
          c !== p && (h(c), A(!1));
          let v = (0, s.useMemo)((() => YE(y ? [] : f)), [y, f]),
            m = (0, s.useRef)(GE),
            [b, g] = (0, s.useState)(GE),
            C = (0, s.useRef)(GE),
            [_, E] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!_) return;
            E(!1);
            let e = d || i || m.current;
            ZE(e, C.current) || (C.current = e, g(e))
          })), {
            realtimeValidation: l || v || d || i || GE,
            displayValidation: "native" === u ? l || v || b : l || v || d || i || b,
            updateValidation(e) {
              "aria" !== u || ZE(b, e) ? m.current = e : g(e)
            },
            resetValidation() {
              let e = GE;
              ZE(e, C.current) || (C.current = e, g(e)), "native" === u && E(!1), A(!0)
            },
            commitValidation() {
              "native" === u && E(!0), A(!0)
            }
          }
        }(e)
      }

      function $E(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function YE(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: VE
        } : null
      }

      function ZE(e, n) {
        return e === n || e && n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every(((e, t) => e === n.validationErrors[t])) && Object.entries(e.validationDetails).every((([e, t]) => n.validationDetails[e] === t))
      }

      function QE(e, n, t) {
        let r = (0, s.useRef)(n),
          o = i_((() => {
            t && t(r.current)
          }));
        (0, s.useEffect)((() => {
          var n;
          let t = null == e || null === (n = e.current) || void 0 === n ? void 0 : n.form;
          return null == t || t.addEventListener("reset", o), () => {
            null == t || t.removeEventListener("reset", o)
          }
        }), [e, o])
      }

      function JE(e, n, t) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": u,
          "aria-labelledby": l,
          validationState: d = "valid",
          isInvalid: c
        } = e;
        null != s || null != u || null != l || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
          pressProps: f,
          isPressed: p
        } = dE({
          isDisabled: r
        }), {
          pressProps: h,
          isPressed: y
        } = dE({
          isDisabled: r || o,
          onPress() {
            n.toggle()
          }
        }), {
          focusableProps: A
        } = eE(e, t), v = c_(f, A), m = xC(e, {
          labelable: !0
        });
        return QE(t, n.isSelected, n.setSelected), {
          labelProps: c_(h, {
            onClick: e => e.preventDefault()
          }),
          inputProps: c_(m, {
            "aria-invalid": c || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), n.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            type: "checkbox",
            ...v
          }),
          isSelected: n.isSelected,
          isPressed: p || y,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: c || "invalid" === d
        }
      }
      var ew = t(44161),
        nw = {};

      function tw(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function rw(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function ow(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? rw(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = tw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : rw(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function iw(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      nw.styleTagTransform = _(), nw.setAttributes = m(), nw.insert = A().bind(null, "head"), nw.domAPI = h(), nw.insertStyleElement = g(), f()(ew.A, nw), ew.A && ew.A.locals && ew.A.locals;
      var aw = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        sw = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = ow(ow({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) aw(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iw(e.variantClassNames, (e => iw(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        uw = sw({
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lw = sw({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dw = sw({
          defaultClassName: "foundry_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              XL: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cw = sw({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtye",
              LG: "foundry_11gbdtyf",
              XL: "foundry_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const fw = (0, s.forwardRef)((({
          isChecked: e,
          defaultChecked: n,
          onCheckedChange: t,
          label: o,
          description: u,
          size: l = "MD",
          appearance: c = "primary",
          isIndeterminate: f,
          hideLabel: p,
          testId: h,
          errorMessage: y,
          className: A,
          ...v
        }, m) => {
          const b = (0, s.useRef)(null),
            g = (0, In.UP)(b, m),
            C = (0, s.useId)(),
            {
              setSelected: _,
              ...E
            } = zE({
              isSelected: e,
              defaultSelected: n,
              onChange: t,
              value: v.value
            }),
            {
              inputProps: w,
              isDisabled: k,
              isReadOnly: B,
              isInvalid: x,
              isSelected: P
            } = function(e, n, t) {
              let r = XE({
                  ...e,
                  value: n.isSelected
                }),
                {
                  isInvalid: o,
                  validationErrors: i,
                  validationDetails: a
                } = r.displayValidation,
                {
                  labelProps: u,
                  inputProps: l,
                  isSelected: d,
                  isPressed: c,
                  isDisabled: f,
                  isReadOnly: p
                } = JE({
                  ...e,
                  isInvalid: o
                }, n, t);
              qE(e, r, t);
              let {
                isIndeterminate: h,
                isRequired: y,
                validationBehavior: A = "aria"
              } = e;
              return (0, s.useEffect)((() => {
                t.current && (t.current.indeterminate = !!h)
              })), {
                labelProps: u,
                inputProps: {
                  ...l,
                  checked: d,
                  "aria-required": y && "aria" === A || void 0,
                  required: y && "native" === A
                },
                isSelected: d,
                isPressed: c,
                isDisabled: f,
                isReadOnly: p,
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              }
            }({
              ...v,
              "aria-label": o,
              id: C
            }, {
              ...E,
              setSelected: v.isReadOnly ? () => !1 : _
            }, b),
            T = (0, a.v6)({
              ...w,
              "aria-checked": P,
              className: A
            }, {
              className: "foundry_11gbdty1"
            }),
            S = f ? r[`Dash${l}`] : r[`Check${l}`],
            j = x && !!y;
          return (0, i.jsxs)("label", {
            className: "foundry_11gbdty0",
            children: [(0, i.jsxs)("div", {
              className: lw({
                size: l
              }),
              children: [(0, i.jsx)(d.s6, {
                children: (0, i.jsx)("input", {
                  ...T,
                  ref: g
                })
              }), (0, i.jsx)("div", {
                className: uw({
                  size: l,
                  appearance: c
                }),
                "aria-hidden": "true",
                "data-state": f ? "mixed" : P ? "checked" : "unchecked",
                "data-disabled": k || B,
                "data-testid": h,
                children: (0, i.jsx)("span", {
                  className: "foundry_11gbdtyc",
                  children: (P || f) && (0, i.jsx)(S, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, i.jsx)(d.s6, {
              enabled: !!p,
              children: (0, i.jsxs)("div", {
                className: cw({
                  size: l,
                  isDisabled: k
                }),
                children: [(0, i.jsx)("p", {
                  className: dw({
                    size: l
                  }),
                  children: o
                }), u && !j && (0, i.jsx)("p", {
                  className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: u
                }), j && (0, i.jsx)("p", {
                  className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: y
                })]
              })
            })]
          })
        })),
        pw = new WeakMap;

      function hw(e, n) {
        return "#comment" !== e.nodeName && function(e) {
          const n = S_(e);
          if (!(e instanceof n.HTMLElement || e instanceof n.SVGElement)) return !1;
          let {
            display: t,
            visibility: r
          } = e.style, o = "none" !== t && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: n
            } = e.ownerDocument.defaultView;
            let {
              display: t,
              visibility: r
            } = n(e);
            o = "none" !== t && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, n) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !n || "SUMMARY" === n.nodeName || e.hasAttribute("open"))
        }(e, n) && (!e.parentElement || hw(e.parentElement, e))
      }
      const yw = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        Aw = yw.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      yw.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const vw = yw.join(':not([hidden]):not([tabindex="-1"]),');

      function mw(e, n) {
        return !!e && !!n && n.some((n => n.contains(e)))
      }

      function bw(e, n, t) {
        let r = (null == n ? void 0 : n.tabbable) ? vw : Aw,
          o = T_(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == n || null === (o = n.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !hw(e) || t && !mw(e, t) || (null == n ? void 0 : n.accept) && !n.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == n ? void 0 : n.from) && (o.currentNode = n.from), o
      }
      class gw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, n, t) {
          let r = this.fastMap.get(null != n ? n : null);
          if (!r) return;
          let o = new Cw({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), t && (o.nodeToRestore = t)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let n = this.fastMap.get(e);
          if (!n) return;
          let t = n.parent;
          for (let e of this.traverse()) e !== n && n.nodeToRestore && e.nodeToRestore && n.scopeRef && n.scopeRef.current && mw(e.nodeToRestore, n.scopeRef.current) && (e.nodeToRestore = n.nodeToRestore);
          let r = n.children;
          t && (t.removeChild(n), r.size > 0 && r.forEach((e => t && t.addChild(e)))), this.fastMap.delete(n.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let n of e.children) yield* this.traverse(n)
        }
        clone() {
          var e;
          let n = new gw;
          var t;
          for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
          return n
        }
        constructor() {
          this.fastMap = new Map, this.root = new Cw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Cw {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }

      function _w(e, n) {
        let {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (t = u_(t), o && r) {
          let e = new Set([t, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !n || (r = n), {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function Ew(e) {
        let {
          description: n,
          errorMessage: t,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: n,
            label: t,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          n = u_(n);
          let a = u_(),
            s = {};
          return t ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? n : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: _w({
              id: n,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = d_([Boolean(n), Boolean(t), r, o]), u = d_([Boolean(n), Boolean(t), r, o]);
        return a = c_(a, {
          "aria-describedby": [s, u, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: u
          }
        }
      }

      function ww(e, n) {
        let {
          name: t,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: u = "aria"
        } = e, {
          direction: l
        } = KC(), {
          isInvalid: d,
          validationErrors: c,
          validationDetails: f
        } = n.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: y,
          errorMessageProps: A
        } = Ew({
          ...e,
          labelElementType: "span",
          isInvalid: n.isInvalid,
          errorMessage: e.errorMessage || c
        }), v = xC(e, {
          labelable: !0
        }), {
          focusWithinProps: m
        } = function(e) {
          let {
            isDisabled: n,
            onBlurWithin: t,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, s.useRef)({
            isFocusWithin: !1
          }), a = (0, s.useCallback)((e => {
            i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, t && t(e), o && o(!1))
          }), [t, o, i]), u = Z_(a), l = (0, s.useCallback)((e => {
            i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, u(e))
          }), [r, o, u]);
          return n ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: l,
              onBlur: a
            }
          }
        }({
          onBlurWithin(t) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, t), n.selectedValue || n.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = u_(t);
        return pw.set(n, {
          name: b,
          descriptionId: y.id,
          errorMessageId: A.id,
          validationBehavior: u
        }), {
          radioGroupProps: c_(v, {
            role: "radiogroup",
            onKeyDown: e => {
              let t;
              switch (e.key) {
                case "ArrowRight":
                  t = "rtl" === l && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  t = "rtl" === l && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  t = "next";
                  break;
                case "ArrowUp":
                  t = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = bw(e.currentTarget, {
                from: e.target
              });
              "next" === t ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), n.setSelectedValue(r.value))
            },
            "aria-invalid": n.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": r || void 0,
            "aria-required": o || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
            ...h,
            ...m
          }),
          labelProps: p,
          descriptionProps: y,
          errorMessageProps: A,
          isInvalid: d,
          validationErrors: c,
          validationDetails: f
        }
      }
      new gw;
      let kw = Math.round(1e10 * Math.random()),
        Bw = 0;
      var xw = t(44625),
        Pw = {};

      function Tw(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function Sw(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function jw(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Sw(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Tw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sw(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Ow(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      Pw.styleTagTransform = _(), Pw.setAttributes = m(), Pw.insert = A().bind(null, "head"), Pw.domAPI = h(), Pw.insertStyleElement = g(), f()(xw.A, Pw), xw.A && xw.A.locals && xw.A.locals;
      var Nw = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Lw = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = jw(jw({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Nw(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ow(e.variantClassNames, (e => Ow(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        Rw = Lw({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Dw = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        Mw = (0, s.forwardRef)((({
          label: e,
          description: n,
          size: t = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: u,
          hideRequiredAsterisk: l,
          testId: c,
          className: f,
          errorMessage: p,
          orientation: h = "vertical",
          ...y
        }, A) => {
          const {
            children: v
          } = y, m = (0, s.useRef)(null), b = (0, In.UP)(m, A), g = y.id || (0, s.useId)(), C = function(e) {
            let n = (0, s.useMemo)((() => e.name || `radio-group-${kw}-${++Bw}`), [e.name]);
            var t;
            let [r, o] = HE(e.value, null !== (t = e.defaultValue) && void 0 !== t ? t : null, e.onChange), [i, a] = (0, s.useState)(null), u = XE({
              ...e,
              value: r
            }), l = u.displayValidation.isInvalid;
            return {
              ...u,
              name: n,
              selectedValue: r,
              setSelectedValue: n => {
                e.isReadOnly || e.isDisabled || (o(n), u.commitValidation())
              },
              lastFocusedValue: i,
              setLastFocusedValue: a,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (l ? "invalid" : null),
              isInvalid: l
            }
          }(y), _ = {
            state: C,
            size: t,
            appearance: r
          }, {
            radioGroupProps: E,
            labelProps: w,
            descriptionProps: k,
            isInvalid: B,
            errorMessageProps: x
          } = ww({
            ...y,
            id: g,
            label: e,
            isRequired: u,
            description: n,
            orientation: h
          }, C), P = (0, a.v6)({
            ...E,
            className: f
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": x?.id
          }), T = B && !!p;
          return (0, i.jsxs)("div", {
            ref: b,
            "data-testid": c,
            ...P,
            children: [(0, i.jsx)(d.s6, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, i.jsx)(Z, {
                  ...w,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, u && !l && (0, i.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), n && (0, i.jsx)(ae, {
                  ...k,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: n
                })]
              })
            }), (0, i.jsx)("div", {
              className: Rw({
                size: t,
                orientation: h
              }),
              children: (0, i.jsx)(Dw.Provider, {
                value: _,
                children: v
              })
            }), T && (0, i.jsxs)(Z, {
              ...x,
              appearance: "bold",
              className: "foundry_njguqnb",
              children: [(0, i.jsx)(Be.X, {
                size: "MD",
                label: "",
                className: "foundry_njguqnc"
              }), p]
            })]
          })
        })),
        Iw = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Hw = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        zw = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var qw = t(96295),
        Fw = {};
      Fw.styleTagTransform = _(), Fw.setAttributes = m(), Fw.insert = A().bind(null, "head"), Fw.domAPI = h(), Fw.insertStyleElement = g(), f()(qw.A, Fw), qw.A && qw.A.locals && qw.A.locals;
      var Uw = Lw({
          defaultClassName: "foundry_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              XL: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            },
            isDisabled: {
              true: "foundry_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vw = Lw({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gw = Lw({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ww = Lw({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduetb",
              LG: "foundry_1pfduetc",
              XL: "foundry_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Kw = (0, s.forwardRef)((({
        label: e,
        description: n,
        hideLabel: t,
        testId: r,
        className: a,
        ...u
      }, l) => {
        const c = (0, s.useRef)(null),
          f = (0, In.UP)(c, l),
          p = u.id || (0, s.useId)(),
          h = (0, s.useContext)(Dw),
          {
            state: y,
            appearance: A,
            size: v
          } = h,
          {
            inputProps: m
          } = function(e, n, t) {
            let {
              value: r,
              children: o,
              "aria-label": i,
              "aria-labelledby": a
            } = e;
            const s = e.isDisabled || n.isDisabled;
            null != o || null != i || null != a || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
            let u = n.selectedValue === r,
              {
                pressProps: l,
                isPressed: d
              } = dE({
                isDisabled: s
              }),
              {
                pressProps: c,
                isPressed: f
              } = dE({
                isDisabled: s,
                onPress() {
                  n.setSelectedValue(r)
                }
              }),
              {
                focusableProps: p
              } = eE(c_(e, {
                onFocus: () => n.setLastFocusedValue(r)
              }), t),
              h = c_(l, p),
              y = xC(e, {
                labelable: !0
              }),
              A = -1;
            null != n.selectedValue ? n.selectedValue === r && (A = 0) : n.lastFocusedValue !== r && null != n.lastFocusedValue || (A = 0), s && (A = void 0);
            let {
              name: v,
              descriptionId: m,
              errorMessageId: b,
              validationBehavior: g
            } = pw.get(n);
            return QE(t, n.selectedValue, n.setSelectedValue), qE({
              validationBehavior: g
            }, n, t), {
              labelProps: c_(c, {
                onClick: e => e.preventDefault()
              }),
              inputProps: c_(y, {
                ...h,
                type: "radio",
                name: v,
                tabIndex: A,
                disabled: s,
                required: n.isRequired && "native" === g,
                checked: u,
                value: r,
                onChange: e => {
                  e.stopPropagation(), n.setSelectedValue(r)
                },
                "aria-describedby": [e["aria-describedby"], n.isInvalid ? b : null, m].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: u,
              isPressed: d || f
            }
          }({
            ...u,
            "aria-label": e,
            id: p
          }, y, c),
          b = m.checked,
          g = m.disabled || y?.isReadOnly,
          C = o[`Dot${v}`];
        return (0, i.jsxs)("label", {
          className: (0, Ze.$)("foundry_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: Gw({
              size: v
            }),
            children: [(0, i.jsx)(d.s6, {
              children: (0, i.jsx)("input", {
                ...m,
                ref: f,
                className: "foundry_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: Vw({
                appearance: A
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": g,
              "data-testid": r,
              children: (0, i.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, i.jsx)(C, {})
              })
            })]
          }), (0, i.jsx)(d.s6, {
            enabled: !!t,
            children: (0, i.jsxs)("div", {
              className: Ww({
                size: v
              }),
              children: [(0, i.jsx)("p", {
                className: Uw({
                  size: v,
                  isDisabled: m.disabled
                }),
                "aria-label": e,
                children: e
              }), n && (0, i.jsx)("p", {
                className: "foundry_1pfduetj foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: n
              })]
            })
          })]
        })
      }));
      var Xw = t(17401),
        $w = {};

      function Yw(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function Zw(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Qw(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Zw(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Yw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Zw(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Jw(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      $w.styleTagTransform = _(), $w.setAttributes = m(), $w.insert = A().bind(null, "head"), $w.domAPI = h(), $w.insertStyleElement = g(), f()(Xw.A, $w), Xw.A && Xw.A.locals && Xw.A.locals;
      var ek = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        nk = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = Qw(Qw({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) ek(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jw(e.variantClassNames, (e => Jw(e, (e => e.split(" ")[0]))))
            }
          }, n
        })({
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tk = (0, s.forwardRef)((({
          className: e,
          orientation: n = "horizontal",
          thickness: t = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: a,
          ...s
        }, u) => {
          const l = "horizontal" !== n || r ? "div" : "hr",
            c = r || "hr" === l ? void 0 : "separator",
            f = o ? d.DX : l;
          return (0, i.jsx)(f, {
            ref: u,
            className: (0, Ze.$)(nk({
              thickness: t,
              orientation: n
            }), e),
            role: c,
            "aria-orientation": n,
            "data-testid": a,
            ...s
          })
        })),
        rk = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: e
          })
        }),
        ok = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        ik = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: e
          })
        });
      var ak = t(96722),
        sk = {};

      function uk(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function lk(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function dk(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? lk(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = uk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : lk(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function ck(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      sk.styleTagTransform = _(), sk.setAttributes = m(), sk.insert = A().bind(null, "head"), sk.domAPI = h(), sk.insertStyleElement = g(), f()(ak.A, sk), ak.A && ak.A.locals && ak.A.locals;
      var fk = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        pk = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = dk(dk({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) fk(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ck(e.variantClassNames, (e => ck(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        hk = pk({
          defaultClassName: "foundry_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z213 foundry_okz6z2y foundry_okz6z2z",
              LG: "foundry_okz6z214 foundry_okz6z210 foundry_okz6z211"
            },
            isSelected: {
              true: "foundry_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yk = pk({
          defaultClassName: "foundry_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2p foundry_okz6z2k foundry_okz6z2l",
              LG: "foundry_okz6z2q foundry_okz6z2m foundry_okz6z2n"
            },
            position: {
              left: "foundry_okz6z2r",
              right: "foundry_okz6z2s"
            },
            isSelected: {
              true: "foundry_okz6z2t",
              false: "foundry_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_okz6z2w"]
          ]
        }),
        Ak = pk({
          defaultClassName: "foundry_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              LG: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vk = pk({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mk = pk({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bk = pk({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2c"
            },
            size: {
              MD: "foundry_okz6z2d",
              LG: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gk = (0, s.forwardRef)((({
        label: e,
        description: n,
        size: t = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: a,
        unselectedIcon: u,
        hideLabel: l,
        testId: c,
        ...f
      }, p) => {
        const h = (0, s.useRef)(null),
          y = (0, In.UP)(h, p),
          A = (0, s.useId)(),
          v = zE(f),
          {
            inputProps: m,
            isDisabled: b,
            isReadOnly: g,
            isSelected: C
          } = function(e, n, t) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: u
            } = JE(e, n, t);
            return {
              labelProps: r,
              inputProps: {
                ...o,
                role: "switch",
                checked: i
              },
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: u
            }
          }({
            ...f,
            "aria-label": e,
            id: A
          }, v, h),
          _ = a ? xe[a] : ik,
          E = u ? xe[u] : ok;
        return (0, i.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, i.jsxs)("div", {
            className: mk({
              appearance: r
            }),
            "data-state": C ? "selected" : "unselected",
            "data-disabled": b || g,
            "data-testid": c,
            children: [(0, i.jsx)(d.s6, {
              children: (0, i.jsx)("input", {
                ...m,
                ref: y
              })
            }), (0, i.jsxs)("div", {
              className: vk({
                size: t
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: hk({
                  size: t,
                  isSelected: C
                }),
                children: (0, i.jsx)(rk, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: yk({
                    size: t,
                    isSelected: C,
                    position: "left"
                  }),
                  children: (0, i.jsx)(_, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: yk({
                    size: t,
                    isSelected: C,
                    position: "right"
                  }),
                  children: (0, i.jsx)(E, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, i.jsx)(d.s6, {
            enabled: !!l,
            children: (0, i.jsxs)("div", {
              className: bk({
                size: t,
                isDisabled: b
              }),
              children: [(0, i.jsx)("p", {
                className: Ak({
                  size: t
                }),
                children: e
              }), n && (0, i.jsx)("p", {
                className: "foundry_okz6z2i foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: n
              })]
            })
          })]
        })
      }));
      gk.displayName = "Switch";
      var Ck = t(77802),
        _k = {};

      function Ek(e) {
        var n = function(e, n) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function wk(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function kk(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? wk(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Ek(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wk(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Bk(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      _k.styleTagTransform = _(), _k.setAttributes = m(), _k.insert = A().bind(null, "head"), _k.domAPI = h(), _k.insertStyleElement = g(), f()(Ck.A, _k), Ck.A && Ck.A.locals && Ck.A.locals;
      var xk = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Pk = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = kk(kk({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) xk(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bk(e.variantClassNames, (e => Bk(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        Tk = Pk({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sk = Pk({
          defaultClassName: "foundry_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhe",
              danger: "foundry_1m368qhf",
              success: "foundry_1m368qhg",
              warning: "foundry_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jk = Pk({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ok = (0, s.createContext)(null);

      function Nk() {
        const e = (0, s.useContext)(Ok);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Lk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          status: t,
          background: r,
          ...o
        }, s) => {
          const u = e ? d.DX : "div",
            l = (0, a.v6)(o, {
              className: jk({
                status: t,
                background: r
              })
            });
          return (0, i.jsx)(Ok.Provider, {
            value: {
              status: t,
              background: r
            },
            children: (0, i.jsx)(u, {
              ref: s,
              "data-testid": n,
              ...l,
              ...o
            })
          })
        })),
        Rk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          ...t
        }, r) => {
          const o = e ? d.DX : "div",
            s = (0, a.v6)(t, {
              className: "foundry_1m368qha"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": n,
            ...s
          })
        })),
        Dk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          ...t
        }, r) => {
          const o = e ? d.DX : "div",
            s = (0, a.v6)(t, {
              className: "foundry_1m368qhb"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": n,
            ...s
          })
        })),
        Mk = {
          danger: "XCircleSolid",
          information: "InfoCircleSolid",
          success: "CheckCircleSolid",
          warning: "AlertTriangleSolid"
        },
        Ik = (0, s.forwardRef)((({
          icon: e,
          ...n
        }, t) => {
          const {
            status: r
          } = Nk(), o = e || Mk[r], s = xe[o], u = (0, a.v6)(n, {
            className: Sk({
              status: r
            })
          });
          return (0, i.jsx)("div", {
            className: "foundry_1m368qhc",
            children: (0, i.jsx)(s, {
              title: "",
              ref: t,
              ...u
            })
          })
        })),
        Hk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          ...t
        }, r) => {
          const o = e ? d.DX : "div",
            s = (0, a.v6)(t, {
              className: "foundry_1m368qhi"
            });
          return (0, i.jsx)(N, {
            level: 5,
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": n,
              ...s
            })
          })
        })),
        zk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          ...t
        }, r) => {
          const o = e ? d.DX : "div",
            s = (0, a.v6)(t, {
              className: "foundry_1m368qhj"
            });
          return (0, i.jsx)(Z, {
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": n,
              ...s
            })
          })
        })),
        qk = (0, s.forwardRef)((({
          asChild: e,
          children: n,
          testId: t,
          ...r
        }, o) => {
          const u = (0, s.useRef)(null),
            l = (0, In.UP)(u, o),
            c = e ? d.DX : "a",
            {
              linkProps: f,
              isPressed: p
            } = _E(r, u),
            h = (0, a.v6)(f, {
              className: "foundry_1m368qhk foundry_1d5mo5m0"
            });
          return (0, i.jsx)(Z, {
            asChild: !0,
            appearance: "hyperlink",
            children: (0, i.jsx)(c, {
              "data-pressed": p,
              "data-testid": t,
              ref: l,
              ...h,
              children: n
            })
          })
        })),
        Fk = (0, s.forwardRef)((({
          asChild: e,
          children: n,
          testId: t,
          ...r
        }, o) => {
          const s = e ? d.DX : "div",
            u = (0, a.v6)(r, {
              className: "foundry_1m368qhl"
            });
          return (0, i.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...u,
            children: n
          })
        })),
        Uk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          className: t,
          ...r
        }, o) => {
          const a = e ? d.DX : "div";
          return (0, i.jsx)(Z, {
            asChild: !0,
            children: (0, i.jsx)(a, {
              ref: o,
              "data-testid": n,
              className: (0, Ze.$)(t, "foundry_1m368qho"),
              ...r
            })
          })
        })),
        Vk = (0, s.forwardRef)((({
          testId: e,
          label: n = "close alert",
          ...t
        }, r) => {
          const {
            background: o
          } = Nk(), s = (0, a.v6)(t, {
            className: Tk({
              hasBackground: "none" !== o
            })
          });
          return (0, i.jsx)(Mp, {
            ref: r,
            label: n,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...s
          })
        }))
    },
    11735: (e, n, t) => {
      t.d(n, {
        DX: () => a,
        xV: () => u
      });
      var r = t(62229);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      var i = t(73855),
        a = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...o
          } = e, a = r.Children.toArray(t), u = a.find(l);
          if (u) {
            const e = u.props.children,
              t = a.map((n => n === u ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
            return (0, i.jsx)(s, {
              ...o,
              ref: n,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null
            })
          }
          return (0, i.jsx)(s, {
            ...o,
            ref: n,
            children: t
          })
        }));
      a.displayName = "Slot";
      var s = r.forwardRef(((e, n) => {
        const {
          children: t,
          ...i
        } = e;
        if (r.isValidElement(t)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(t);
          return r.cloneElement(t, {
            ...d(i, t.props),
            ref: n ? o(n, e) : e
          })
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      var u = ({
        children: e
      }) => (0, i.jsx)(i.Fragment, {
        children: e
      });

      function l(e) {
        return r.isValidElement(e) && e.type === u
      }

      function d(e, n) {
        const t = {
          ...n
        };
        for (const r in n) {
          const o = e[r],
            i = n[r];
          /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
            i(...e), o(...e)
          } : o && (t[r] = o) : "style" === r ? t[r] = {
            ...o,
            ...i
          } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
    }
  }
]);