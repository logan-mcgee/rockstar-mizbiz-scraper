! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c43c0eab-3667-40aa-9b3d-9e1043edecb2", e._sentryDebugIdIdentifier = "sentry-dbid-c43c0eab-3667-40aa-9b3d-9e1043edecb2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8002], {
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

      function _(e) {
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

      function C(e) {
        return _(e) === c
      }
      n.AsyncMode = d, n.ConcurrentMode = c, n.ContextConsumer = l, n.ContextProvider = u, n.Element = r, n.ForwardRef = f, n.Fragment = i, n.Lazy = A, n.Memo = y, n.Portal = o, n.Profiler = s, n.StrictMode = a, n.Suspense = p, n.isAsyncMode = function(e) {
        return C(e) || _(e) === d
      }, n.isConcurrentMode = C, n.isContextConsumer = function(e) {
        return _(e) === l
      }, n.isContextProvider = function(e) {
        return _(e) === u
      }, n.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, n.isForwardRef = function(e) {
        return _(e) === f
      }, n.isFragment = function(e) {
        return _(e) === i
      }, n.isLazy = function(e) {
        return _(e) === A
      }, n.isMemo = function(e) {
        return _(e) === y
      }, n.isPortal = function(e) {
        return _(e) === o
      }, n.isProfiler = function(e) {
        return _(e) === s
      }, n.isStrictMode = function(e) {
        return _(e) === a
      }, n.isSuspense = function(e) {
        return _(e) === p
      }, n.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === c || e === s || e === a || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === A || e.$$typeof === y || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || e.$$typeof === m || e.$$typeof === b || e.$$typeof === g || e.$$typeof === v)
      }, n.typeOf = _
    },
    95463: (e, n, t) => {
      e.exports = t(85075)
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
    28002: (e, n, t) => {
      t.r(n), t.d(n, {
        Body: () => Sk,
        BreadcrumbItem: () => wE,
        Breadcrumbs: () => EE,
        Button: () => yr,
        Caption: () => W,
        Checkbox: () => iw,
        CloseButton: () => Dk,
        Description: () => jk,
        Divider: () => $w,
        Dropdown: () => p_,
        ErrorText: () => Mk,
        Footer: () => Rk,
        Header: () => Pk,
        Heading: () => S,
        Icon: () => Ok,
        IconButton: () => Lp,
        Lightbox: () => Um,
        Link: () => Nk,
        Metadata: () => te,
        Option: () => h_,
        Paragraph: () => I,
        RadioButton: () => zw,
        RadioContext: () => Sw,
        RadioGroup: () => Tw,
        Root: () => xk,
        RootContext: () => kk,
        Subtitle: () => ce,
        Switch: () => pk,
        Text: () => _e,
        TextArea: () => Un,
        TextSemantics: () => ge,
        Title: () => Lk,
        Tooltip: () => DA,
        iconStatusMap: () => Tk,
        useAlertContext: () => Bk
      });
      var r = {};
      t.r(r), t.d(r, {
        CheckLG: () => xE,
        CheckMD: () => BE,
        CheckXL: () => PE,
        DashLG: () => TE,
        DashMD: () => SE,
        DashXL: () => OE
      });
      var o = {};
      t.r(o), t.d(o, {
        DotLG: () => Lw,
        DotMD: () => Ow,
        DotXL: () => jw
      });
      var i = t(73855),
        a = t(4255),
        s = t(62229),
        u = t.t(s, 2),
        l = t.n(s),
        d = t(6449),
        c = t(53178),
        f = t.n(c),
        p = t(94566),
        h = t.n(p),
        y = t(31610),
        A = t.n(y),
        v = t(82510),
        m = t.n(v),
        b = t(19602),
        g = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function _(e) {
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

      function C(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function E(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? C(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = _(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function w(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      g.setAttributes = A(), g.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, g.domAPI = h(), g.insertStyleElement = m(), f()(b.A, g), b.A && b.A.locals && b.A.locals;
      var k, B, x = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        P = (k = {
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
        }, B = e => {
          var n = k.defaultClassName,
            t = E(E({}, k.defaultVariants), e);
          for (var r in t) {
            var o, i = null !== (o = t[r]) && void 0 !== o ? o : k.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = k.variantClassNames[r][a];
              s && (n += " " + s)
            }
          }
          for (var [u, l] of k.compoundVariants) x(u, t, k.defaultVariants) && (n += " " + l);
          return n
        }, B.variants = () => Object.keys(k.variantClassNames), B.classNames = {
          get base() {
            return k.defaultClassName.split(" ")[0]
          },
          get variants() {
            return w(k.variantClassNames, (e => w(e, (e => e.split(" ")[0]))))
          }
        }, B);
      const S = (0, s.forwardRef)((({
        asChild: e,
        level: n,
        testId: t,
        ...r
      }, o) => {
        const s = e ? d.DX : `h${n}`,
          u = (0, a.v6)(r, {
            className: P({
              level: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));
      var T = t(22338),
        O = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function L(e) {
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

      function j(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function N(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? j(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = L(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function R(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      O.setAttributes = A(), O.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, O.domAPI = h(), O.insertStyleElement = m(), f()(T.A, O), T.A && T.A.locals && T.A.locals;
      var M = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        D = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = N(N({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) M(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return R(e.variantClassNames, (e => R(e, (e => e.split(" ")[0]))))
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
      const I = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "p",
          u = (0, a.v6)(r, {
            className: D({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var H = t(22718),
        z = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function q(e) {
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

      function F(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function U(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? F(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = q(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function V(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      z.setAttributes = A(), z.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, z.domAPI = h(), z.insertStyleElement = m(), f()(H.A, z), H.A && H.A.locals && H.A.locals;
      var G = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        K = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = U(U({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) G(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return V(e.variantClassNames, (e => V(e, (e => e.split(" ")[0]))))
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
      const W = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "span",
          u = (0, a.v6)(r, {
            className: K({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var X = t(44533),
        $ = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function Y(e) {
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

      function Z(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Q(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Z(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Y(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function J(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      $.setAttributes = A(), $.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, $.domAPI = h(), $.insertStyleElement = m(), f()(X.A, $), X.A && X.A.locals && X.A.locals;
      var ee = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        ne = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = Q(Q({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) ee(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return J(e.variantClassNames, (e => J(e, (e => e.split(" ")[0]))))
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
      const te = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "span",
          u = (0, a.v6)(r, {
            className: ne({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var re = t(13786),
        oe = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function ie(e) {
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

      function ae(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function se(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? ae(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = ie(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ae(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function ue(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      oe.setAttributes = A(), oe.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, oe.domAPI = h(), oe.insertStyleElement = m(), f()(re.A, oe), re.A && re.A.locals && re.A.locals;
      var le = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        de = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = se(se({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) le(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ue(e.variantClassNames, (e => ue(e, (e => e.split(" ")[0]))))
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
      const ce = (0, s.forwardRef)((({
        asChild: e,
        testId: n,
        appearance: t = "default",
        ...r
      }, o) => {
        const s = e ? d.DX : "p",
          u = (0, a.v6)(r, {
            className: de({
              appearance: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));
      var fe = t(95075),
        pe = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function he(e) {
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

      function ye(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Ae(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? ye(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = he(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ye(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function ve(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      pe.setAttributes = A(), pe.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, pe.domAPI = h(), pe.insertStyleElement = m(), f()(fe.A, pe), fe.A && fe.A.locals && fe.A.locals;
      var me = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        be = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = Ae(Ae({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) me(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ve(e.variantClassNames, (e => ve(e, (e => e.split(" ")[0]))))
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
      const ge = {
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
        _e = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          semantic: t = "default",
          ...r
        }, o) => {
          const s = e ? d.DX : ge[t] || "span",
            u = (0, a.v6)(r, {
              className: be({
                semantic: t
              })
            });
          return (0, i.jsx)(s, {
            ref: o,
            "data-testid": n,
            ...u
          })
        }));
      var Ce = t(84514);
      const Ee = new Set(["id"]),
        we = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ke = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Be = /^(data-.*)$/;
      const xe = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Pe(e) {
        const n = (0, s.useRef)(null);
        return xe((() => {
          n.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const t = n.current;
          return null == t ? void 0 : t(...e)
        }), [])
      }
      const Se = e => {
          var n;
          return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document
        },
        Te = e => e && "window" in e && e.window === e ? e : Se(e).defaultView || window;

      function Oe(...e) {
        return (...n) => {
          for (let t of e) "function" == typeof t && t(...n)
        }
      }
      const Le = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        je = s.createContext(Le),
        Ne = s.createContext(!1);
      let Re = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Me = new WeakMap;
      const De = "function" == typeof s.useId ? function(e) {
        let n = s.useId(),
          [t] = (0, s.useState)("function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(ze, Ie, He) : (0, s.useContext)(Ne));
        return e || `${t?"react-aria":`react-aria${Le.prefix}`}-${n}`
      } : function(e) {
        let n = (0, s.useContext)(je);
        n !== Le || Re || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let t = function(e = !1) {
            let n = (0, s.useContext)(je),
              t = (0, s.useRef)(null);
            if (null === t.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let t = Me.get(e);
                null == t ? Me.set(e, {
                  id: n.current,
                  state: e.memoizedState
                }) : e.memoizedState !== t.state && (n.current = t.id, Me.delete(e))
              }
              t.current = ++n.current
            }
            return t.current
          }(!!e),
          r = `react-aria${n.prefix}`;
        return e || `${r}-${t}`
      };

      function Ie() {
        return !1
      }

      function He() {
        return !0
      }

      function ze(e) {
        return () => {}
      }
      let qe = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Fe = new Map;

      function Ue(e) {
        let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = De(n), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return qe && Fe.set(o, i), xe((() => {
          let e = o;
          return () => {
            Fe.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, t(e))
        })), o
      }

      function Ve(e, n) {
        if (e === n) return e;
        let t = Fe.get(e);
        if (t) return t(n), n;
        let r = Fe.get(n);
        return r ? (r(e), e) : n
      }

      function Ge(e = []) {
        let n = Ue(),
          [t, r] = function(e) {
            let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = Pe((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : n === e.value ? o() : t(e.value)
            }));
            xe((() => {
              r.current && o()
            }));
            let i = Pe((e => {
              r.current = e(n), o()
            }));
            return [n, i]
          }(n),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield n, yield document.getElementById(n) ? n : void 0
            }))
          }), [n, r]);
        return xe(o, [n, o, ...e]), t
      }
      var Ke = t(5060);

      function We(...e) {
        let n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          let r = e[t];
          for (let e in r) {
            let t = n[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = Oe(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? n.id = Ve(t, o) : n[e] = void 0 !== o ? o : t : n[e] = (0, Ke.A)(t, o)
          }
        }
        return n
      }

      function Xe(e, n) {
        let {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (t = Ue(t), o && r) {
          let e = new Set([t, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !n || (r = n), {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function $e(e) {
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
          n = Ue(n);
          let a = Ue(),
            s = {};
          return t ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? n : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: Xe({
              id: n,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = Ge([Boolean(n), Boolean(t), r, o]), u = Ge([Boolean(n), Boolean(t), r, o]);
        return a = We(a, {
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
      let Ye = new Map,
        Ze = new Set;

      function Qe() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let n = t => {
          if (!e(t) || !t.target) return;
          let r = Ye.get(t.target);
          if (r && (r.delete(t.propertyName), 0 === r.size && (t.target.removeEventListener("transitioncancel", n), Ye.delete(t.target)), 0 === Ye.size)) {
            for (let e of Ze) e();
            Ze.clear()
          }
        };
        document.body.addEventListener("transitionrun", (t => {
          if (!e(t) || !t.target) return;
          let r = Ye.get(t.target);
          r || (r = new Set, Ye.set(t.target, r), t.target.addEventListener("transitioncancel", n, {
            once: !0
          })), r.add(t.propertyName)
        })), document.body.addEventListener("transitionend", n)
      }

      function Je(e) {
        if (function() {
            if (null == en) {
              en = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return en = !0, !0
                  }
                })
              } catch (e) {}
            }
            return en
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
      "undefined" != typeof document && ("loading" !== document.readyState ? Qe() : document.addEventListener("DOMContentLoaded", Qe));
      let en = null;

      function nn() {
        return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform);
        var e, n
      }

      function tn(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (n = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((e => n.test(e.brand)))) || n.test(window.navigator.userAgent)) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
        var n, t
      }
      let rn = null,
        on = new Set,
        an = new Map,
        sn = !1,
        un = !1;

      function ln(e, n) {
        for (let t of on) t(e, n)
      }

      function dn(e) {
        sn = !0,
          function(e) {
            return !(e.metaKey || !nn() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (rn = "keyboard", ln("keyboard", e))
      }

      function cn(e) {
        rn = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (sn = !0, ln("pointer", e))
      }

      function fn(e) {
        tn(e) && (sn = !0, rn = "virtual")
      }

      function pn(e) {
        e.target !== window && e.target !== document && (sn || un || (rn = "virtual", ln("virtual", e)), sn = !1, un = !1)
      }

      function hn() {
        sn = !1, un = !0
      }

      function yn(e) {
        if ("undefined" == typeof window || an.get(Te(e))) return;
        const n = Te(e),
          t = Se(e);
        let r = n.HTMLElement.prototype.focus;
        n.HTMLElement.prototype.focus = function() {
          sn = !0, r.apply(this, arguments)
        }, t.addEventListener("keydown", dn, !0), t.addEventListener("keyup", dn, !0), t.addEventListener("click", fn, !0), n.addEventListener("focus", pn, !0), n.addEventListener("blur", hn, !1), "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", cn, !0), t.addEventListener("pointermove", cn, !0), t.addEventListener("pointerup", cn, !0)) : (t.addEventListener("mousedown", cn, !0), t.addEventListener("mousemove", cn, !0), t.addEventListener("mouseup", cn, !0)), n.addEventListener("beforeunload", (() => {
          An(e)
        }), {
          once: !0
        }), an.set(n, {
          focus: r
        })
      }
      const An = (e, n) => {
        const t = Te(e),
          r = Se(e);
        n && r.removeEventListener("DOMContentLoaded", n), an.has(t) && (t.HTMLElement.prototype.focus = an.get(t).focus, r.removeEventListener("keydown", dn, !0), r.removeEventListener("keyup", dn, !0), r.removeEventListener("click", fn, !0), t.removeEventListener("focus", pn, !0), t.removeEventListener("blur", hn, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", cn, !0), r.removeEventListener("pointermove", cn, !0), r.removeEventListener("pointerup", cn, !0)) : (r.removeEventListener("mousedown", cn, !0), r.removeEventListener("mousemove", cn, !0), r.removeEventListener("mouseup", cn, !0)), an.delete(t))
      };
      "undefined" != typeof document && function(e) {
        const n = Se(e);
        let t;
        "loading" !== n.readyState ? yn(e) : (t = () => {
          yn(e)
        }, n.addEventListener("DOMContentLoaded", t))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class vn {
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

      function mn(e) {
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
            xe((() => {
              const e = n.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let t = Pe((n => {
              null == e || e(n)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                n.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    n.current.isFocused = !1, r.disabled && t(new vn("blur", e)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
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
            const n = Se(e.target);
            e.target === e.currentTarget && n.activeElement === e.target && (t && t(e), o && o(!0), a(e))
          }), [o, t, a]);
        return {
          focusProps: {
            onFocus: !n && (t || o || r) ? u : void 0,
            onBlur: n || !r && !o ? void 0 : i
          }
        }
      }

      function bn(e) {
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
      let gn = s.createContext(null);

      function _n(e) {
        let n = (0, s.useContext)(gn) || {};
        ! function(e, n) {
          xe((() => {
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

      function Cn(e, n) {
        let {
          focusProps: t
        } = mn(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: bn(e.onKeyDown),
              onKeyUp: bn(e.onKeyUp)
            }
          }
        }(e), o = We(t, r), i = _n(n), a = e.isDisabled ? {} : i, u = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          u.current && n.current && function(e) {
            const n = Se(e);
            if ("virtual" === rn) {
              let r = n.activeElement;
              t = () => {
                n.activeElement === r && e.isConnected && Je(e)
              }, requestAnimationFrame((() => {
                0 === Ye.size ? t() : Ze.add(t)
              }))
            } else Je(e);
            var t
          }(n.current), u.current = !1
        }), [n]), {
          focusableProps: We({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }

      function En(e) {
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
      const wn = {
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
        kn = {
          ...wn,
          customError: !0,
          valid: !1
        },
        Bn = {
          isInvalid: !1,
          validationDetails: wn,
          validationErrors: []
        },
        xn = (0, s.createContext)({}),
        Pn = "__formValidationState" + Date.now();

      function Sn(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Tn(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: kn
        } : null
      }

      function On(e, n) {
        return e === n || e && n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every(((e, t) => e === n.validationErrors[t])) && Object.entries(e.validationDetails).every((([e, t]) => n.validationDetails[e] === t))
      }

      function Ln(e, n) {
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
        } = Cn(e, n), f = function(e) {
          if (e[Pn]) {
            let {
              realtimeValidation: n,
              displayValidation: t,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            } = e[Pn];
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
                validationDetails: kn
              } : null,
              d = (0, s.useMemo)((() => Tn(function(e, n) {
                if ("function" == typeof e) {
                  let t = e(n);
                  if (t && "boolean" != typeof t) return Sn(t)
                }
                return []
              }(a, o))), [a, o]);
            (null == i ? void 0 : i.validationDetails.valid) && (i = null);
            let c = (0, s.useContext)(xn),
              f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => Sn(c[e]))) : Sn(c[r]) : []), [c, r]),
              [p, h] = (0, s.useState)(c),
              [y, A] = (0, s.useState)(!1);
            c !== p && (h(c), A(!1));
            let v = (0, s.useMemo)((() => Tn(y ? [] : f)), [y, f]),
              m = (0, s.useRef)(Bn),
              [b, g] = (0, s.useState)(Bn),
              _ = (0, s.useRef)(Bn),
              [C, E] = (0, s.useState)(!1);
            return (0, s.useEffect)((() => {
              if (!C) return;
              E(!1);
              let e = d || i || m.current;
              On(e, _.current) || (_.current = e, g(e))
            })), {
              realtimeValidation: l || v || d || i || Bn,
              displayValidation: "native" === u ? l || v || b : l || v || d || i || b,
              updateValidation(e) {
                "aria" !== u || On(b, e) ? m.current = e : g(e)
              },
              resetValidation() {
                let e = Bn;
                On(e, _.current) || (_.current = e, g(e)), "native" === u && E(!1), A(!0)
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
        } = $e({
          ...e,
          isInvalid: p,
          errorMessage: e.errorMessage || h
        }), g = function(e, n = {}) {
          let {
            labelable: t,
            isLink: r,
            propNames: o
          } = n, i = {};
          for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (Ee.has(n) || t && we.has(n) || r && ke.has(n) || (null == o ? void 0 : o.has(n)) || Be.test(n)) && (i[n] = e[n]);
          return i
        }(e, {
          labelable: !0
        });
        const _ = {
          type: a,
          pattern: e.pattern
        };
        return function(e, n, t) {
            let r = (0, s.useRef)(n),
              o = Pe((() => {
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
            xe((() => {
              if ("native" === r && (null == t ? void 0 : t.current)) {
                let r = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                t.current.setCustomValidity(r), t.current.hasAttribute("title") || (t.current.title = ""), n.realtimeValidation.isInvalid || n.updateValidation({
                  isInvalid: !(e = t.current).validity.valid,
                  validationDetails: En(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let i = Pe((() => {
                n.resetValidation()
              })),
              a = Pe((e => {
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
                }(i) === t.current && (o ? o() : null === (a = t.current) || void 0 === a || a.focus(), rn = "keyboard", ln("keyboard", null)), e.preventDefault()
              })),
              u = Pe((() => {
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
            if (n.current instanceof Te(n.current).HTMLTextAreaElement) {
              let e = n.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [n]), {
            labelProps: A,
            inputProps: We(g, "input" === t && _, {
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
      var jn = t(76430),
        Nn = t(88691),
        Rn = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function Mn(e) {
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

      function Dn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function In(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Dn(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Mn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dn(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Hn(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      Rn.setAttributes = A(), Rn.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, Rn.domAPI = h(), Rn.insertStyleElement = m(), f()(Nn.A, Rn), Nn.A && Nn.A.locals && Nn.A.locals;
      var zn = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        qn = "foundry_vq8c3j8",
        Fn = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = In(In({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) zn(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hn(e.variantClassNames, (e => Hn(e, (e => e.split(" ")[0]))))
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
      const Un = (0, s.forwardRef)((({
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
          _ = (0, jn.UP)(g, b),
          {
            inputProps: C,
            labelProps: E,
            descriptionProps: w,
            isInvalid: k,
            errorMessageProps: B,
            validationErrors: x
          } = Ln({
            ...m,
            label: n,
            description: u,
            isRequired: t,
            inputElementType: "textarea",
            validate: e => A?.(e) ?? (!v || [v])
          }, g),
          P = (0, a.v6)({
            ...C,
            className: c
          }, {
            className: Fn({
              isInvalid: k
            }),
            "aria-errormessage": B?.id
          }),
          S = e ? d.DX : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(n || r) && (0, i.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, i.jsx)(d.s6, {
              enabled: !!p,
              children: (0, i.jsx)(W, {
                ...E,
                className: (0, Ke.$)("foundry_vq8c3j2", C.disabled && qn),
                asChild: !0,
                children: (0, i.jsxs)("label", {
                  children: [n, t && !y && (0, i.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, i.jsx)(te, {
              className: "foundry_vq8c3j3",
              children: r
            })]
          }), (0, i.jsx)(S, {
            rows: f,
            ref: _,
            "data-testid": l,
            ...P,
            children: o
          }), u && (0, i.jsx)(d.s6, {
            enabled: x.length > 0 || !!h,
            children: (0, i.jsx)(W, {
              ...w,
              className: (0, Ke.$)("foundry_vq8c3j4", C.disabled && qn),
              children: u
            })
          }), x.length > 0 && (0, i.jsxs)(W, {
            ...B,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, i.jsx)(Ce.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), x.join(". ")]
          })]
        })
      }));

      function Vn(...e) {
        return (...n) => {
          for (let t of e) "function" == typeof t && t(...n)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Gn = new Map;

      function Kn(e, n) {
        if (e === n) return e;
        let t = Gn.get(e);
        if (t) return t(n), n;
        let r = Gn.get(n);
        return r ? (r(e), e) : n
      }

      function Wn(...e) {
        let n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          let r = e[t];
          for (let e in r) {
            let t = n[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = Vn(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? n.id = Kn(t, o) : n[e] = void 0 !== o ? o : t : n[e] = (0, Ke.A)(t, o)
          }
        }
        return n
      }
      const Xn = new Set(["id"]),
        $n = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Yn = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Zn = /^(data-.*)$/;
      const Qn = e => {
          var n;
          return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document
        },
        Jn = e => e && "window" in e && e.window === e ? e : Qn(e).defaultView || window;
      let et = new Map,
        nt = new Set;

      function tt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let n = t => {
          if (!e(t) || !t.target) return;
          let r = et.get(t.target);
          if (r && (r.delete(t.propertyName), 0 === r.size && (t.target.removeEventListener("transitioncancel", n), et.delete(t.target)), 0 === et.size)) {
            for (let e of nt) e();
            nt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (t => {
          if (!e(t) || !t.target) return;
          let r = et.get(t.target);
          r || (r = new Set, et.set(t.target, r), t.target.addEventListener("transitioncancel", n, {
            once: !0
          })), r.add(t.propertyName)
        })), document.body.addEventListener("transitionend", n)
      }

      function rt(e) {
        requestAnimationFrame((() => {
          0 === et.size ? e() : nt.add(e)
        }))
      }

      function ot(e) {
        if (function() {
            if (null == it) {
              it = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return it = !0, !0
                  }
                })
              } catch (e) {}
            }
            return it
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
      "undefined" != typeof document && ("loading" !== document.readyState ? tt() : document.addEventListener("DOMContentLoaded", tt));
      let it = null;

      function at(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((n => e.test(n.brand)))) || e.test(window.navigator.userAgent))
      }

      function st(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform)
      }

      function ut() {
        return st(/^Mac/i)
      }

      function lt() {
        return st(/^iPad/i) || ut() && navigator.maxTouchPoints > 1
      }

      function dt() {
        return st(/^iPhone/i) || lt()
      }

      function ct() {
        return at(/Android/i)
      }

      function ft(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (ct() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let pt = null,
        ht = new Set,
        yt = new Map,
        At = !1,
        vt = !1;

      function mt(e, n) {
        for (let t of ht) t(e, n)
      }

      function bt(e) {
        At = !0,
          function(e) {
            return !(e.metaKey || !ut() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (pt = "keyboard", mt("keyboard", e))
      }

      function gt(e) {
        pt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (At = !0, mt("pointer", e))
      }

      function _t(e) {
        ft(e) && (At = !0, pt = "virtual")
      }

      function Ct(e) {
        e.target !== window && e.target !== document && (At || vt || (pt = "virtual", mt("virtual", e)), At = !1, vt = !1)
      }

      function Et() {
        At = !1, vt = !0
      }

      function wt(e) {
        if ("undefined" == typeof window || yt.get(Jn(e))) return;
        const n = Jn(e),
          t = Qn(e);
        let r = n.HTMLElement.prototype.focus;
        n.HTMLElement.prototype.focus = function() {
          At = !0, r.apply(this, arguments)
        }, t.addEventListener("keydown", bt, !0), t.addEventListener("keyup", bt, !0), t.addEventListener("click", _t, !0), n.addEventListener("focus", Ct, !0), n.addEventListener("blur", Et, !1), "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", gt, !0), t.addEventListener("pointermove", gt, !0), t.addEventListener("pointerup", gt, !0)) : (t.addEventListener("mousedown", gt, !0), t.addEventListener("mousemove", gt, !0), t.addEventListener("mouseup", gt, !0)), n.addEventListener("beforeunload", (() => {
          kt(e)
        }), {
          once: !0
        }), yt.set(n, {
          focus: r
        })
      }
      const kt = (e, n) => {
        const t = Jn(e),
          r = Qn(e);
        n && r.removeEventListener("DOMContentLoaded", n), yt.has(t) && (t.HTMLElement.prototype.focus = yt.get(t).focus, r.removeEventListener("keydown", bt, !0), r.removeEventListener("keyup", bt, !0), r.removeEventListener("click", _t, !0), t.removeEventListener("focus", Ct, !0), t.removeEventListener("blur", Et, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", gt, !0), r.removeEventListener("pointermove", gt, !0), r.removeEventListener("pointerup", gt, !0)) : (r.removeEventListener("mousedown", gt, !0), r.removeEventListener("mousemove", gt, !0), r.removeEventListener("mouseup", gt, !0)), yt.delete(t))
      };
      "undefined" != typeof document && function(e) {
        const n = Qn(e);
        let t;
        "loading" !== n.readyState ? wt(e) : (t = () => {
          wt(e)
        }, n.addEventListener("DOMContentLoaded", t))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const Bt = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function xt(e, n) {
        Bt((() => {
          if (e && e.ref && n) return e.ref.current = n.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function Pt(e) {
        const n = (0, s.useRef)(null);
        return Bt((() => {
          n.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const t = n.current;
          return null == t ? void 0 : t(...e)
        }), [])
      }
      class St {
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

      function Tt(e) {
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
            Bt((() => {
              const e = n.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let t = Pt((n => {
              null == e || e(n)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                n.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    n.current.isFocused = !1, r.disabled && t(new St("blur", e)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
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
            const n = Qn(e.target);
            e.target === e.currentTarget && n.activeElement === e.target && (t && t(e), o && o(!0), a(e))
          }), [o, t, a]);
        return {
          focusProps: {
            onFocus: !n && (t || o || r) ? u : void 0,
            onBlur: n || !r && !o ? void 0 : i
          }
        }
      }

      function Ot(e) {
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
      let Lt = s.createContext(null);

      function jt(e, n) {
        let {
          focusProps: t
        } = Tt(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Ot(e.onKeyDown),
              onKeyUp: Ot(e.onKeyUp)
            }
          }
        }(e), o = Wn(t, r), i = function(e) {
          let n = (0, s.useContext)(Lt) || {};
          xt(n, e);
          let {
            ref: t,
            ...r
          } = n;
          return r
        }(n), a = e.isDisabled ? {} : i, u = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          u.current && n.current && function(e) {
            const n = Qn(e);
            if ("virtual" === pt) {
              let t = n.activeElement;
              rt((() => {
                n.activeElement === t && e.isConnected && ot(e)
              }))
            } else ot(e)
          }(n.current), u.current = !1
        }), [n]), {
          focusableProps: Wn({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let Nt = "default",
        Rt = "",
        Mt = new WeakMap;

      function Dt(e) {
        if (dt()) {
          if ("default" === Nt) {
            const n = Qn(e);
            Rt = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none"
          }
          Nt = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Mt.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function It(e) {
        if (dt()) {
          if ("disabled" !== Nt) return;
          Nt = "restoring", setTimeout((() => {
            rt((() => {
              if ("restoring" === Nt) {
                const n = Qn(e);
                "none" === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = Rt || ""), Rt = "", Nt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mt.has(e)) {
          let n = Mt.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = n), "" === e.getAttribute("style") && e.removeAttribute("style"), Mt.delete(e)
        }
      }
      const Ht = s.createContext({
        register: () => {}
      });

      function zt(e, n, t) {
        if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
        return n.get(e)
      }

      function qt(e, n) {
        return function(e, n) {
          return n.get ? n.get.call(e) : n.value
        }(e, zt(e, n, "get"))
      }

      function Ft(e, n, t) {
        ! function(e, n) {
          if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, n), n.set(e, t)
      }

      function Ut(e, n, t) {
        return function(e, n, t) {
          if (n.set) n.set.call(e, t);
          else {
            if (!n.writable) throw new TypeError("attempted to set read only private field");
            n.value = t
          }
        }(e, zt(e, n, "set"), t), t
      }

      function Vt(e, n, t = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        } = n;
        at(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (ut() ? i = !0 : a = !0);
        let l = at(/AppleWebKit/i) && !at(/Chrome/i) && ut() && !lt() ? new KeyboardEvent("keydown", {
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
        Vt.isOpening = t, ot(e), e.dispatchEvent(l), Vt.isOpening = !1
      }
      Ht.displayName = "PressResponderContext", Vt.isOpening = !1;
      var Gt = new WeakMap;
      class Kt {
        continuePropagation() {
          Ut(this, Gt, !1)
        }
        get shouldStopPropagation() {
          return qt(this, Gt)
        }
        constructor(e, n, t) {
          Ft(this, Gt, {
            writable: !0,
            value: void 0
          }), Ut(this, Gt, !0), this.type = e, this.pointerType = n, this.target = t.currentTarget, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.ctrlKey = t.ctrlKey, this.altKey = t.altKey
        }
      }
      const Wt = Symbol("linkClicked");

      function Xt(e) {
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
          let n = (0, s.useContext)(Ht);
          if (n) {
            let {
              register: t,
              ...r
            } = n;
            e = Wn(r, e), t()
          }
          return xt(n, e.ref), e
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
        }(), b = Pt(((e, n) => {
          let o = A.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let t = new Kt("pressstart", n, e);
            r(t), i = t.shouldStopPropagation
          }
          return t && t(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        })), g = Pt(((e, r, i = !0) => {
          let s = A.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let u = !0;
          if (o) {
            let n = new Kt("pressend", r, e);
            o(n), u = n.shouldStopPropagation
          }
          if (t && t(!1), y(!1), n && i && !a) {
            let t = new Kt("press", r, e);
            n(t), u && (u = t.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, u
        })), _ = Pt(((e, n) => {
          let t = A.current;
          if (a) return !1;
          if (i) {
            t.isTriggeringEvent = !0;
            let r = new Kt("pressup", n, e);
            return i(r), t.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), C = Pt((e => {
          let n = A.current;
          n.isPressed && n.target && (n.isOverTarget && null != n.pointerType && g(Qt(n.target, e), n.pointerType, !1), n.isPressed = !1, n.isOverTarget = !1, n.activePointerId = null, n.pointerType = null, m(), c || It(n.target))
        })), E = Pt((e => {
          d && C(e)
        })), w = (0, s.useMemo)((() => {
          let e = A.current,
            n = {
              onKeyDown(n) {
                if (Yt(n.nativeEvent, n.currentTarget) && n.currentTarget.contains(n.target)) {
                  var r;
                  nr(n.target, n.key) && n.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !n.repeat) {
                    e.target = n.currentTarget, e.isPressed = !0, o = b(n, "keyboard");
                    let r = n.currentTarget,
                      i = n => {
                        Yt(n, r) && !n.repeat && r.contains(n.target) && e.target && _(Qt(e.target, n), "keyboard")
                      };
                    v(Qn(n.currentTarget), "keyup", Vn(i, t), !0)
                  }
                  o && n.stopPropagation(), n.metaKey && ut() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(n.key, n.nativeEvent))
                } else "Meta" === n.key && (e.metaKeyEvents = new Map)
              },
              onClick(n) {
                if ((!n || n.currentTarget.contains(n.target)) && n && 0 === n.button && !e.isTriggeringEvent && !Vt.isOpening) {
                  let t = !0;
                  if (a && n.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || ft(n.nativeEvent))) {
                    a || l || ot(n.currentTarget);
                    let e = b(n, "virtual"),
                      r = _(n, "virtual"),
                      o = g(n, "virtual");
                    t = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, t && n.stopPropagation()
                }
              }
            },
            t = n => {
              var t;
              if (e.isPressed && e.target && Yt(n, e.target)) {
                var r;
                nr(n.target, n.key) && n.preventDefault();
                let t = n.target;
                g(Qt(e.target, n), "keyboard", e.target.contains(t)), m(), "Enter" !== n.key && $t(e.target) && e.target.contains(t) && !n[Wt] && (n[Wt] = !0, Vt(e.target, n, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(n.key)
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
              if (i = n.nativeEvent, !ct() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              er(n.currentTarget) && n.preventDefault(), e.pointerType = n.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, a || l || ot(n.currentTarget), c || Dt(e.target), s = b(n, e.pointerType), v(Qn(n.currentTarget), "pointermove", t, !1), v(Qn(n.currentTarget), "pointerup", r, !1), v(Qn(n.currentTarget), "pointercancel", o, !1)), s && n.stopPropagation()
            }, n.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (er(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, n.onPointerUp = n => {
              n.currentTarget.contains(n.target) && "virtual" !== e.pointerType && 0 === n.button && Jt(n, n.currentTarget) && _(n, e.pointerType || n.pointerType)
            };
            let t = n => {
                n.pointerId === e.activePointerId && (e.target && Jt(n, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(Qt(e.target, n), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, g(Qt(e.target, n), e.pointerType, !1), E(n)))
              },
              r = n => {
                n.pointerId === e.activePointerId && e.isPressed && 0 === n.button && e.target && (Jt(n, e.target) && null != e.pointerType ? g(Qt(e.target, n), e.pointerType) : e.isOverTarget && null != e.pointerType && g(Qt(e.target, n), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, m(), c || It(e.target))
              },
              o = e => {
                C(e)
              };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && C(e)
            }
          } else {
            n.onMouseDown = n => {
              0 === n.button && n.currentTarget.contains(n.target) && (er(n.currentTarget) && n.preventDefault(), e.ignoreEmulatedMouseEvents ? n.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = n.currentTarget, e.pointerType = ft(n.nativeEvent) ? "virtual" : "mouse", a || l || ot(n.currentTarget), b(n, e.pointerType) && n.stopPropagation(), v(Qn(n.currentTarget), "mouseup", t, !1)))
            }, n.onMouseEnter = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, t = b(n, e.pointerType)), t && n.stopPropagation()
            }, n.onMouseLeave = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, t = g(n, e.pointerType, !1), E(n)), t && n.stopPropagation()
            }, n.onMouseUp = n => {
              n.currentTarget.contains(n.target) && (e.ignoreEmulatedMouseEvents || 0 !== n.button || _(n, e.pointerType || "mouse"))
            };
            let t = n => {
              0 === n.button && (e.isPressed = !1, m(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && Jt(n, e.target) && null != e.pointerType ? g(Qt(e.target, n), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && g(Qt(e.target, n), e.pointerType, !1), e.isOverTarget = !1))
            };
            n.onTouchStart = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = function(e) {
                const {
                  targetTouches: n
                } = e;
                return n.length > 0 ? n[0] : null
              }(n.nativeEvent);
              t && (e.activePointerId = t.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = n.currentTarget, e.pointerType = "touch", a || l || ot(n.currentTarget), c || Dt(e.target), b(n, e.pointerType) && n.stopPropagation(), v(Jn(n.currentTarget), "scroll", r, !0))
            }, n.onTouchMove = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = Zt(n.nativeEvent, e.activePointerId),
                r = !0;
              t && Jt(t, n.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(n, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = g(n, e.pointerType, !1), E(n)), r && n.stopPropagation()
            }, n.onTouchEnd = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = Zt(n.nativeEvent, e.activePointerId),
                r = !0;
              t && Jt(t, n.currentTarget) && null != e.pointerType ? (_(n, e.pointerType), r = g(n, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = g(n, e.pointerType, !1)), r && n.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !c && It(e.target), m()
            }, n.onTouchCancel = n => {
              n.currentTarget.contains(n.target) && (n.stopPropagation(), e.isPressed && C(n))
            };
            let r = n => {
              e.isPressed && n.target.contains(e.target) && C({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && C(e)
            }
          }
          return n
        }), [v, a, l, m, c, C, E, g, b, _]);
        return (0, s.useEffect)((() => () => {
          var e;
          c || It(null !== (e = A.current.target) && void 0 !== e ? e : void 0)
        }), [c]), {
          isPressed: u || h,
          pressProps: Wn(p, w)
        }
      }

      function $t(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Yt(e, n) {
        const {
          key: t,
          code: r
        } = e, o = n, i = o.getAttribute("role");
        return !("Enter" !== t && " " !== t && "Spacebar" !== t && "Space" !== r || o instanceof Jn(o).HTMLInputElement && !rr(o, t) || o instanceof Jn(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && $t(o)) && "Enter" !== t)
      }

      function Zt(e, n) {
        const t = e.changedTouches;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (r.identifier === n) return r
        }
        return null
      }

      function Qt(e, n) {
        return {
          currentTarget: e,
          shiftKey: n.shiftKey,
          ctrlKey: n.ctrlKey,
          metaKey: n.metaKey,
          altKey: n.altKey
        }
      }

      function Jt(e, n) {
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

      function er(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function nr(e, n) {
        return e instanceof HTMLInputElement ? !rr(e, n) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !$t(e)
      }
      const tr = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function rr(e, n) {
        return "checkbox" === e.type || "radio" === e.type ? " " === n : tr.has(e.type)
      }

      function or(e, n) {
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
        } = Xt({
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
        } = jt(e, n);
        c && (b.tabIndex = o ? -1 : b.tabIndex);
        let g = Wn(b, v, function(e, n = {}) {
          let {
            labelable: t,
            isLink: r,
            propNames: o
          } = n, i = {};
          for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (Xn.has(n) || t && $n.has(n) || r && Yn.has(n) || (null == o ? void 0 : o.has(n)) || Zn.test(n)) && (i[n] = e[n]);
          return i
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: m,
          buttonProps: Wn(t, g, {
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
      var ir = t(86706),
        ar = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function sr(e) {
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

      function ur(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function lr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? ur(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = sr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ur(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function dr(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      ar.setAttributes = A(), ar.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, ar.domAPI = h(), ar.insertStyleElement = m(), f()(ir.A, ar), ir.A && ir.A.locals && ir.A.locals;
      var cr = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        fr = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = lr(lr({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) cr(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dr(e.variantClassNames, (e => dr(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        pr = fr({
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
        hr = fr({
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
      const yr = (0, s.forwardRef)((({
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
          g = (0, jn.UP)(b, m),
          {
            events: _,
            others: C
          } = (0, a.bZ)(v, {
            onPress: !1
          }),
          {
            buttonProps: E,
            isPressed: w
          } = or({
            ...C,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => C.onPress?.(e) ?? o?.(e)
          }, b),
          k = (0, a.v6)({
            ...E,
            className: t
          }, {
            ..._,
            role: "button",
            "data-pressed": w,
            "data-testid": e,
            className: pr({
              appearance: p,
              size: h,
              fullWidth: A,
              allCaps: y
            })
          }),
          B = u && Ce[u],
          x = c && Ce[c],
          P = n ? d.DX : "button",
          S = A && (x || x && B);
        return (0, i.jsxs)(P, {
          ref: g,
          ...k,
          children: [S && (0, i.jsx)("div", {
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
            className: hr({
              fullWidth: A
            })
          })]
        })
      }));
      var Ar = t(23476);
      const vr = {
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

      function mr(e, n, t) {
        return 0 === n || Math.abs(n) === 1 / 0 ? Math.pow(e, 5 * t) : e * n * t / (n + t * e)
      }

      function br(e, n, t) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, n, t) {
          return Math.max(n, Math.min(e, t))
        }(e, n, t) : e < n ? -mr(n - e, t - n, r) + n : e > t ? +mr(e - t, t - n, r) + t : e
      }

      function gr(e, n, t) {
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

      function _r(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Cr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? _r(Object(t), !0).forEach((function(n) {
            gr(e, n, t[n])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }
      const Er = {
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

      function wr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const kr = ["enter", "leave"];
      const Br = ["gotpointercapture", "lostpointercapture"];

      function xr(e) {
        let n = e.substring(2).toLowerCase();
        const t = !!~n.indexOf("passive");
        t && (n = n.replace("passive", ""));
        const r = Br.includes(n) ? "capturecapture" : "capture",
          o = !!~n.indexOf(r);
        return o && (n = n.replace("capture", "")), {
          device: n,
          capture: o,
          passive: t
        }
      }

      function Pr(e) {
        return "touches" in e
      }

      function Sr(e) {
        return Pr(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Tr(e) {
        return Pr(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Or(e, n) {
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

      function Lr(e, n) {
        const [t, r] = Array.from(e.touches).filter((e => n.includes(e.identifier)));
        return Or(t, r)
      }

      function jr(e) {
        const n = Tr(e);
        return Pr(e) ? n.identifier : n.pointerId
      }

      function Nr(e) {
        const n = Tr(e);
        return [n.clientX, n.clientY]
      }

      function Rr(e) {
        let {
          deltaX: n,
          deltaY: t,
          deltaMode: r
        } = e;
        return 1 === r ? (n *= 40, t *= 40) : 2 === r && (n *= 800, t *= 800), [n, t]
      }

      function Mr(e) {
        if ("function" == typeof e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          return e(...t)
        }
        return e
      }

      function Dr() {}

      function Ir() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return 0 === n.length ? Dr : 1 === n.length ? n[0] : function() {
          let e;
          for (const t of n) e = t.apply(this, arguments) || e;
          return e
        }
      }

      function Hr(e, n) {
        return Object.assign({}, n, e || {})
      }
      class zr {
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
          n._active || (this.reset(), this.computeInitial(), n._active = !0, n.target = e.target, n.currentTarget = e.currentTarget, n.lastOffset = t.from ? Mr(t.from, n) : n.offset, n.offset = n.lastOffset, n.startTime = n.timeStamp = e.timeStamp)
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
            vr.addTo(n._distance, e)
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
          p && (n.first = n._active && !n.active, n.last = !n._active && n.active, n.active = r[this.ingKey] = n._active, e && (n.first && ("bounds" in t && (n._bounds = Mr(t.bounds, n)), this.setup && this.setup()), n.movement = c, this.computeOffset()));
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
              return [br(r, s, u, i), br(o, l, d, a)]
            }(n._bounds, n.offset, g), n.delta = vr.sub(n.offset, f), this.computeMovement(), p && (!n.last || o > 32)) {
            n.delta = vr.sub(n.offset, f);
            const e = n.delta.map(Math.abs);
            vr.addTo(n.distance, e), n.direction = n.delta.map(Math.sign), n._direction = n._delta.map(Math.sign), !n.first && o > 0 && (n.velocity = [e[0] / o, e[1] / o], n.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            n = this.shared,
            t = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !t.triggerAllEvents) return;
          const r = this.handler(Cr(Cr(Cr({}, n), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class qr extends zr {
        constructor() {
          super(...arguments), gr(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = vr.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = vr.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const n = this.state,
            t = this.config;
          if (!n.axis && e) {
            const r = "object" == typeof t.axisThreshold ? t.axisThreshold[Sr(e)] : t.axisThreshold;
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
      const Fr = e => e,
        Ur = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, n, t) => Cr(Cr({}, t.shared.eventOptions), e),
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
                return vr.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? vr.toVector(e) : void 0,
          transform(e, n, t) {
            const r = e || t.shared.transform;
            return this.hasCustomTransform = !!r, r || Fr
          },
          threshold: e => vr.toVector(e, 0)
        },
        Vr = Cr(Cr({}, Ur), {}, {
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
            if ("function" == typeof e) return n => Vr.bounds(e(n));
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
        Gr = {
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
        Kr = "undefined" != typeof window && window.document && window.document.createElement;

      function Wr() {
        return Kr && "ontouchstart" in window
      }
      const Xr = {
          isBrowser: Kr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Wr(),
          touchscreen: Wr() || Kr && window.navigator.maxTouchPoints > 1,
          pointer: Kr && "onpointerdown" in window,
          pointerLock: Kr && "exitPointerLock" in window.document
        },
        $r = .5,
        Yr = 50,
        Zr = 250,
        Qr = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Jr = Cr(Cr({}, Vr), {}, {
          device(e, n, t) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = t;
            return this.pointerLock = o && Xr.pointerLock, Xr.touch && r ? "touch" : this.pointerLock ? "mouse" : Xr.pointer && !i ? "pointer" : Xr.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, n, t) {
            let {
              preventScroll: r
            } = t;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Xr.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = vr.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = $r,
              distance: n = Yr,
              duration: t = Zr
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(vr.toVector(e)),
              distance: this.transform(vr.toVector(n)),
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
          axisThreshold: e => e ? Cr(Cr({}, Qr), e) : Qr,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function eo(e) {
        const [n, t] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (n < 0 && r > 0 && i < 0 || n > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (t < 0 && o > 0 && a < 0 || t > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const no = Cr(Cr({}, Ur), {}, {
          device(e, n, t) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = t;
            if (r.target && !Xr.touch && Xr.gesture) return "gesture";
            if (Xr.touch && o) return "touch";
            if (Xr.touchscreen) {
              if (Xr.pointer) return "pointer";
              if (Xr.touch) return "touch"
            }
          },
          bounds(e, n, t) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = t;
            const i = e => {
                const n = Hr(Mr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [n.min, n.max]
              },
              a = e => {
                const n = Hr(Mr(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [n.min, n.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, n, t) {
            return this.lockDirection = "lock" === t.axis, vr.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        to = Cr(Cr({}, Vr), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        ro = Vr,
        oo = Vr,
        io = Cr(Cr({}, Vr), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        ao = new Map,
        so = new Map;

      function uo(e) {
        ao.set(e.key, e.engine), so.set(e.key, e.resolver)
      }
      const lo = {
          key: "drag",
          engine: class extends qr {
            constructor() {
              super(...arguments), gr(this, "ingKey", "dragging")
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
                e._bounds = Vr.bounds(r)
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
              n.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && t._pointerActive || (this.start(e), this.setupPointer(e), t._pointerId = jr(e), t._pointerActive = !0, this.computeValues(Nr(e)), this.computeInitial(), n.preventScrollAxis && "mouse" !== Sr(e) ? (t._active = !1, this.setupScrollPrevention(e)) : n.delay > 0 ? (this.setupDelayTrigger(e), n.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const n = this.state;
              n._active = !0, n._preventScroll = !0, n._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const n = this.state,
                t = this.config;
              if (!n._pointerActive) return;
              const r = jr(e);
              if (void 0 !== n._pointerId && r !== n._pointerId) return;
              const o = Nr(e);
              return document.pointerLockElement === e.target ? n._delta = [e.movementX, e.movementY] : (n._delta = vr.sub(o, n._values), this.computeValues(o)), vr.addTo(n._movement, n._delta), this.compute(e), n._delayed && n.intentional ? (this.timeoutStore.remove("dragDelay"), n.active = !1, void this.startPointerDrag(e)) : t.preventScrollAxis && !n._preventScroll ? n.axis ? n.axis === t.preventScrollAxis || "xy" === t.preventScrollAxis ? (n._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const n = this.state,
                t = this.config;
              if (!n._active || !n._pointerActive) return;
              const r = jr(e);
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
              const n = Gr[e.key];
              if (n) {
                const t = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), t._delta = n(this.config.keyboardDisplacement, r), t._keyboardActive = !0, vr.addTo(t._movement, t._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Gr && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const n = this.config.device;
              e(n, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(n, "change", this.pointerMove.bind(this)), e(n, "end", this.pointerUp.bind(this)), e(n, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Jr
        },
        co = {
          key: "hover",
          engine: class extends qr {
            constructor() {
              super(...arguments), gr(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Nr(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const n = this.state;
              if (!n._active) return;
              n._active = !1;
              const t = Nr(e);
              n._movement = n._delta = vr.sub(t, n._values), this.computeValues(t), this.compute(e), n.delta = n.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: io
        },
        fo = {
          key: "move",
          engine: class extends qr {
            constructor() {
              super(...arguments), gr(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Nr(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const n = Nr(e),
                t = this.state;
              t._delta = vr.sub(n, t._values), vr.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: to
        },
        po = {
          key: "pinch",
          engine: class extends zr {
            constructor() {
              super(...arguments), gr(this, "ingKey", "pinching"), gr(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? vr.add(n, t) : [(1 + n[0]) * t[0], n[1] + t[1]]
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
              const r = Lr(e, n._touchIds);
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
              const o = Or(...Array.from(t.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, n) {
              this.state.origin = n.origin, this.computeValues([n.distance, n.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const n = Lr(e, this.state._touchIds);
              n && this.pinchMove(e, n)
            }
            pointerMove(e) {
              const n = this.state._pointerEvents;
              if (n.has(e.pointerId) && n.set(e.pointerId, e), !this.state._active) return;
              const t = Or(...Array.from(n.values()));
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
              n._movement = [e.scale - 1, e.rotation], n._delta = vr.sub(n._movement, t), this.compute(e), this.emit()
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
              n._delta = [-Rr(e)[1] / 100 * n.offset[0], 0], vr.addTo(n._movement, n._delta), eo(n), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: no
        },
        ho = {
          key: "scroll",
          engine: class extends qr {
            constructor() {
              super(...arguments), gr(this, "ingKey", "scrolling")
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
              n._delta = vr.sub(t, n._values), vr.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: ro
        },
        yo = {
          key: "wheel",
          engine: class extends qr {
            constructor() {
              super(...arguments), gr(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const n = this.state;
              n._delta = Rr(e), vr.addTo(n._movement, n._delta), eo(n), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: oo
        };
      const Ao = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xr.isBrowser ? window : void 0
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
        vo = ["target", "eventOptions", "window", "enabled", "transform"];

      function mo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        const t = {};
        for (const [r, o] of Object.entries(n)) switch (typeof o) {
          case "function":
            t[r] = o.call(t, e[r], r, e);
            break;
          case "object":
            t[r] = mo(e[r], o);
            break;
          case "boolean":
            o && (t[r] = e[r])
        }
        return t
      }
      class bo {
        constructor(e, n) {
          gr(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = n
        }
        add(e, n, t, r, o) {
          const i = this._listeners,
            a = function(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const t = Er[e];
              return e + (t && t[n] || n)
            }(n, t),
            s = Cr(Cr({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class go {
        constructor() {
          gr(this, "_timeouts", new Map)
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
      class _o {
        constructor(e) {
          var n, t;
          gr(this, "gestures", new Set), gr(this, "_targetEventStore", new bo(this)), gr(this, "gestureEventStores", {}), gr(this, "gestureTimeoutStores", {}), gr(this, "handlers", {}), gr(this, "config", {}), gr(this, "pointerIds", new Set), gr(this, "touchIds", new Set), gr(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), n = this, (t = e).drag && Co(n, "drag"), t.wheel && Co(n, "wheel"), t.scroll && Co(n, "scroll"), t.move && Co(n, "move"), t.pinch && Co(n, "pinch"), t.hover && Co(n, "hover")
        }
        setEventIds(e) {
          return Pr(e) ? (this.touchIds = new Set(function(e) {
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
              }(r, vo);
            if (t.shared = mo({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: u
              }, Ao), n) {
              const e = so.get(n);
              t[n] = mo(Cr({
                shared: t.shared
              }, l), e)
            } else
              for (const e in l) {
                const n = so.get(e);
                n && (t[e] = mo(Cr({
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
                  r = Eo(o, t.eventOptions, !!i);
                t.enabled && new(ao.get(e))(this, n, e).bind(r)
              }
              const e = Eo(o, r.eventOptions, !!i);
              for (const t in this.nativeHandlers) e(t, "", (e => this.nativeHandlers[t](Cr(Cr({}, this.state.shared), {}, {
                event: e,
                args: n
              }))), void 0, !0)
            }
            for (const e in o) o[e] = Ir(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: n,
                capture: t,
                passive: r
              } = xr(e);
              this._targetEventStore.add(i, n, "", o[e], {
                capture: t,
                passive: r
              })
            }
          }
        }
      }

      function Co(e, n) {
        e.gestures.add(n), e.gestureEventStores[n] = new bo(e, n), e.gestureTimeoutStores[n] = new go
      }
      const Eo = (e, n, t) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var u, l;
          const d = null !== (u = a.capture) && void 0 !== u ? u : n.capture,
            c = null !== (l = a.passive) && void 0 !== l ? l : n.passive;
          let f = s ? r : function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = Er[e],
              o = r && r[n] || n;
            return "on" + wr(e) + wr(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !kr.includes(e)
            }(t, o) ? "Capture" : "")
          }(r, o, d);
          t && c && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        wo = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function ko(e, n, t, r, o, i) {
        if (!e.has(t)) return;
        if (!ao.has(r)) return;
        const a = t + "Start",
          s = t + "End";
        o[r] = e => {
          let r;
          return e.first && a in n && n[a](e), t in n && (r = n[t](e)), e.last && s in n && n[s](e), r
        }, i[r] = i[r] || {}
      }

      function Bo(e, n) {
        const t = ([lo, po, ho, yo, fo, co].forEach(uo), function(e, n) {
          const {
            handlers: t,
            nativeHandlers: r,
            config: o
          } = function(e, n) {
            const [t, r, o] = function(e) {
              const n = {},
                t = {},
                r = new Set;
              for (let o in e) wo.test(o) ? (r.add(RegExp.lastMatch), t[o] = e[o]) : n[o] = e[o];
              return [t, n, r]
            }(e), i = {};
            return ko(o, t, "onDrag", "drag", i, n), ko(o, t, "onWheel", "wheel", i, n), ko(o, t, "onScroll", "scroll", i, n), ko(o, t, "onPinch", "pinch", i, n), ko(o, t, "onMove", "move", i, n), ko(o, t, "onHover", "hover", i, n), {
              handlers: i,
              config: n,
              nativeHandlers: r
            }
          }(e, n || {});
          return function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = l().useMemo((() => new _o(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(n, t), l().useEffect(o.effect.bind(o)), l().useEffect((() => o.clean.bind(o)), []), void 0 === n.target) return o.bind.bind(o)
          }(t, o, void 0, r)
        });
        return t(e, n || {})
      }
      var xo = Uo(),
        Po = e => Ho(e, xo),
        So = Uo();
      Po.write = e => Ho(e, So);
      var To = Uo();
      Po.onStart = e => Ho(e, To);
      var Oo = Uo();
      Po.onFrame = e => Ho(e, Oo);
      var Lo = Uo();
      Po.onFinish = e => Ho(e, Lo);
      var jo = [];
      Po.setTimeout = (e, n) => {
        const t = Po.now() + n,
          r = () => {
            const e = jo.findIndex((e => e.cancel == r));
            ~e && jo.splice(e, 1), Do -= ~e ? 1 : 0
          },
          o = {
            time: t,
            handler: e,
            cancel: r
          };
        return jo.splice(No(t), 0, o), Do += 1, zo(), o
      };
      var No = e => ~(~jo.findIndex((n => n.time > e)) || ~jo.length);
      Po.cancel = e => {
        To.delete(e), Oo.delete(e), Lo.delete(e), xo.delete(e), So.delete(e)
      }, Po.sync = e => {
        Io = !0, Po.batchedUpdates(e), Io = !1
      }, Po.throttle = e => {
        let n;

        function t() {
          try {
            e(...n)
          } finally {
            n = null
          }
        }

        function r(...e) {
          n = e, Po.onStart(t)
        }
        return r.handler = e, r.cancel = () => {
          To.delete(t), n = null
        }, r
      };
      var Ro = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Po.use = e => Ro = e, Po.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Po.batchedUpdates = e => e(), Po.catch = console.error, Po.frameLoop = "always", Po.advance = () => {
        "demand" !== Po.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Fo()
      };
      var Mo = -1,
        Do = 0,
        Io = !1;

      function Ho(e, n) {
        Io ? (n.delete(e), e(0)) : (n.add(e), zo())
      }

      function zo() {
        Mo < 0 && (Mo = 0, "demand" !== Po.frameLoop && Ro(qo))
      }

      function qo() {
        ~Mo && (Ro(qo), Po.batchedUpdates(Fo))
      }

      function Fo() {
        const e = Mo;
        Mo = Po.now();
        const n = No(Mo);
        n && (Vo(jo.splice(0, n), (e => e.handler())), Do -= n), Do ? (To.flush(), xo.flush(e ? Math.min(64, Mo - e) : 16.667), Oo.flush(), So.flush(), Lo.flush()) : Mo = -1
      }

      function Uo() {
        let e = new Set,
          n = e;
        return {
          add(t) {
            Do += n != e || e.has(t) ? 0 : 1, e.add(t)
          },
          delete: t => (Do -= n == e && e.has(t) ? 1 : 0, e.delete(t)),
          flush(t) {
            n.size && (e = new Set, Do -= n.size, Vo(n, (n => n(t) && e.add(n))), Do += e.size, n = e)
          }
        }
      }

      function Vo(e, n) {
        e.forEach((e => {
          try {
            n(e)
          } catch (e) {
            Po.catch(e)
          }
        }))
      }
      var Go = Object.defineProperty,
        Ko = {};

      function Wo() {}((e, n) => {
        for (var t in n) Go(e, t, {
          get: n[t],
          enumerable: !0
        })
      })(Ko, {
        assign: () => si,
        colors: () => oi,
        createStringInterpolator: () => ei,
        skipAnimation: () => ii,
        to: () => ni,
        willAdvance: () => ai
      });
      var Xo = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function $o(e, n) {
        if (Xo.arr(e)) {
          if (!Xo.arr(n) || e.length !== n.length) return !1;
          for (let t = 0; t < e.length; t++)
            if (e[t] !== n[t]) return !1;
          return !0
        }
        return e === n
      }
      var Yo = (e, n) => e.forEach(n);

      function Zo(e, n, t) {
        if (Xo.arr(e))
          for (let r = 0; r < e.length; r++) n.call(t, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && n.call(t, e[r], r)
      }
      var Qo = e => Xo.und(e) ? [] : Xo.arr(e) ? e : [e];

      function Jo(e, n) {
        if (e.size) {
          const t = Array.from(e);
          e.clear(), Yo(t, n)
        }
      }
      var ei, ni, ti = (e, ...n) => Jo(e, (e => e(...n))),
        ri = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        oi = null,
        ii = !1,
        ai = Wo,
        si = e => {
          e.to && (ni = e.to), e.now && (Po.now = e.now), void 0 !== e.colors && (oi = e.colors), null != e.skipAnimation && (ii = e.skipAnimation), e.createStringInterpolator && (ei = e.createStringInterpolator), e.requestAnimationFrame && Po.use(e.requestAnimationFrame), e.batchedUpdates && (Po.batchedUpdates = e.batchedUpdates), e.willAdvance && (ai = e.willAdvance), e.frameLoop && (Po.frameLoop = e.frameLoop)
        },
        ui = new Set,
        li = [],
        di = [],
        ci = 0,
        fi = {
          get idle() {
            return !ui.size && !li.length
          },
          start(e) {
            ci > e.priority ? (ui.add(e), Po.onStart(pi)) : (hi(e), Po(Ai))
          },
          advance: Ai,
          sort(e) {
            if (ci) Po.onFrame((() => fi.sort(e)));
            else {
              const n = li.indexOf(e);
              ~n && (li.splice(n, 1), yi(e))
            }
          },
          clear() {
            li = [], ui.clear()
          }
        };

      function pi() {
        ui.forEach(hi), ui.clear(), Po(Ai)
      }

      function hi(e) {
        li.includes(e) || yi(e)
      }

      function yi(e) {
        li.splice(function(n, t) {
          const r = n.findIndex((n => n.priority > e.priority));
          return r < 0 ? n.length : r
        }(li), 0, e)
      }

      function Ai(e) {
        const n = di;
        for (let t = 0; t < li.length; t++) {
          const r = li[t];
          ci = r.priority, r.idle || (ai(r), r.advance(e), r.idle || n.push(r))
        }
        return ci = 0, (di = li).length = 0, (li = n).length > 0
      }
      var vi = {
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
        mi = "[-+]?\\d*\\.?\\d+",
        bi = mi + "%";

      function gi(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var _i = new RegExp("rgb" + gi(mi, mi, mi)),
        Ci = new RegExp("rgba" + gi(mi, mi, mi, mi)),
        Ei = new RegExp("hsl" + gi(mi, bi, bi)),
        wi = new RegExp("hsla" + gi(mi, bi, bi, mi)),
        ki = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Bi = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xi = /^#([0-9a-fA-F]{6})$/,
        Pi = /^#([0-9a-fA-F]{8})$/;

      function Si(e, n, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (n - e) * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e
      }

      function Ti(e, n, t) {
        const r = t < .5 ? t * (1 + n) : t + n - t * n,
          o = 2 * t - r,
          i = Si(o, r, e + 1 / 3),
          a = Si(o, r, e),
          s = Si(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Oi(e) {
        const n = parseInt(e, 10);
        return n < 0 ? 0 : n > 255 ? 255 : n
      }

      function Li(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ji(e) {
        const n = parseFloat(e);
        return n < 0 ? 0 : n > 1 ? 255 : Math.round(255 * n)
      }

      function Ni(e) {
        const n = parseFloat(e);
        return n < 0 ? 0 : n > 100 ? 1 : n / 100
      }

      function Ri(e) {
        let n = function(e) {
          let n;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = xi.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : oi && void 0 !== oi[e] ? oi[e] : (n = _i.exec(e)) ? (Oi(n[1]) << 24 | Oi(n[2]) << 16 | Oi(n[3]) << 8 | 255) >>> 0 : (n = Ci.exec(e)) ? (Oi(n[1]) << 24 | Oi(n[2]) << 16 | Oi(n[3]) << 8 | ji(n[4])) >>> 0 : (n = ki.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0 : (n = Pi.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = Bi.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0 : (n = Ei.exec(e)) ? (255 | Ti(Li(n[1]), Ni(n[2]), Ni(n[3]))) >>> 0 : (n = wi.exec(e)) ? (Ti(Li(n[1]), Ni(n[2]), Ni(n[3])) | ji(n[4])) >>> 0 : null
        }(e);
        return null === n ? e : (n = n || 0, `rgba(${(4278190080&n)>>>24}, ${(16711680&n)>>>16}, ${(65280&n)>>>8}, ${(255&n)/255})`)
      }
      var Mi = (e, n, t) => {
          if (Xo.fun(e)) return e;
          if (Xo.arr(e)) return Mi({
            range: e,
            output: n,
            extrapolate: t
          });
          if (Xo.str(e.output[0])) return ei(e);
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
        Di = 1.70158,
        Ii = 1.525 * Di,
        Hi = Di + 1,
        zi = 2 * Math.PI / 3,
        qi = 2 * Math.PI / 4.5,
        Fi = e => {
          const n = 7.5625,
            t = 2.75;
          return e < 1 / t ? n * e * e : e < 2 / t ? n * (e -= 1.5 / t) * e + .75 : e < 2.5 / t ? n * (e -= 2.25 / t) * e + .9375 : n * (e -= 2.625 / t) * e + .984375
        },
        Ui = {
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
          easeInBack: e => Hi * e * e * e - Di * e * e,
          easeOutBack: e => 1 + Hi * Math.pow(e - 1, 3) + Di * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Ii) / 2 : (Math.pow(2 * e - 2, 2) * ((Ii + 1) * (2 * e - 2) + Ii) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * zi),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * zi) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * qi) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * qi) / 2 + 1,
          easeInBounce: e => 1 - Fi(1 - e),
          easeOutBounce: Fi,
          easeInOutBounce: e => e < .5 ? (1 - Fi(1 - 2 * e)) / 2 : (1 + Fi(2 * e - 1)) / 2,
          steps: (e, n = "end") => t => {
            const r = (t = "end" === n ? Math.min(t, .999) : Math.max(t, .001)) * e;
            return o = ("end" === n ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        Vi = Symbol.for("FluidValue.get"),
        Gi = Symbol.for("FluidValue.observers"),
        Ki = e => Boolean(e && e[Vi]),
        Wi = e => e && e[Vi] ? e[Vi]() : e,
        Xi = e => e[Gi] || null;

      function $i(e, n) {
        const t = e[Gi];
        t && t.forEach((e => {
          ! function(e, n) {
            e.eventObserved ? e.eventObserved(n) : e(n)
          }(e, n)
        }))
      }
      var Yi = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Zi(this, e)
          }
        },
        Zi = (e, n) => na(e, Vi, n);

      function Qi(e, n) {
        if (e[Vi]) {
          let t = e[Gi];
          t || na(e, Gi, t = new Set), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n))
        }
        return n
      }

      function Ji(e, n) {
        const t = e[Gi];
        if (t && t.has(n)) {
          const r = t.size - 1;
          r ? t.delete(n) : e[Gi] = null, e.observerRemoved && e.observerRemoved(r, n)
        }
      }
      var ea, na = (e, n, t) => Object.defineProperty(e, n, {
          value: t,
          writable: !0,
          configurable: !0
        }),
        ta = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ra = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        oa = new RegExp(`(${ta.source})(%|[a-z]+)`, "i"),
        ia = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        aa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        sa = e => {
          const [n, t] = ua(e);
          if (!n || ri()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
          if (r) return r.trim();
          if (t && t.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(t) || e
          }
          return t && aa.test(t) ? sa(t) : t || e
        },
        ua = e => {
          const n = aa.exec(e);
          if (!n) return [, ];
          const [, t, r] = n;
          return [t, r]
        },
        la = (e, n, t, r, o) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${o})`,
        da = e => {
          ea || (ea = oi ? new RegExp(`(${Object.keys(oi).join("|")})(?!\\w)`, "g") : /^\b$/);
          const n = e.output.map((e => Wi(e).replace(aa, sa).replace(ra, Ri).replace(ea, Ri))),
            t = n.map((e => e.match(ta).map(Number))),
            r = t[0].map(((e, n) => t.map((e => {
              if (!(n in e)) throw Error('The arity of each "output" value must be equal');
              return e[n]
            })))).map((n => Mi({
              ...e,
              output: n
            })));
          return e => {
            const t = !oa.test(n[0]) && n.find((e => oa.test(e)))?.replace(ta, "");
            let o = 0;
            return n[0].replace(ta, (() => `${r[o++](e)}${t||""}`)).replace(ia, la)
          }
        },
        ca = "react-spring: ",
        fa = e => {
          const n = e;
          let t = !1;
          if ("function" != typeof n) throw new TypeError(`${ca}once requires a function parameter`);
          return (...e) => {
            t || (n(...e), t = !0)
          }
        },
        pa = fa(console.warn),
        ha = fa(console.warn);

      function ya(e) {
        return Xo.str(e) && ("#" == e[0] || /\d/.test(e) || !ri() && aa.test(e) || e in (oi || {}))
      }
      var Aa = ri() ? s.useEffect : s.useLayoutEffect,
        va = () => {
          const e = (0, s.useRef)(!1);
          return Aa((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function ma() {
        const e = (0, s.useState)()[1],
          n = va();
        return () => {
          n.current && e(Math.random())
        }
      }
      var ba = e => (0, s.useEffect)(e, ga),
        ga = [];

      function _a(e) {
        const n = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          n.current = e
        })), n.current
      }
      var Ca = Symbol.for("Animated:node"),
        Ea = e => e && e[Ca],
        wa = (e, n) => {
          return t = e, r = Ca, o = n, Object.defineProperty(t, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var t, r, o
        },
        ka = e => e && e[Ca] && e[Ca].getPayload(),
        Ba = class {
          constructor() {
            wa(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        xa = class extends Ba {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Xo.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new xa(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, n) {
            return Xo.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Xo.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Pa = class extends xa {
          constructor(e) {
            super(0), this._string = null, this._toString = Mi({
              output: [e, e]
            })
          }
          static create(e) {
            return new Pa(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Xo.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Mi({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Sa = {
          dependencies: null
        },
        Ta = class extends Ba {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const n = {};
            return Zo(this.source, ((t, r) => {
              var o;
              (o = t) && o[Ca] === o ? n[r] = t.getValue(e) : Ki(t) ? n[r] = Wi(t) : e || (n[r] = t)
            })), n
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Yo(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const n = new Set;
              return Zo(e, this._addToPayload, n), Array.from(n)
            }
          }
          _addToPayload(e) {
            Sa.dependencies && Ki(e) && Sa.dependencies.add(e);
            const n = ka(e);
            n && Yo(n, (e => this.add(e)))
          }
        },
        Oa = class extends Ta {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Oa(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const n = this.getPayload();
            return e.length == n.length ? n.map(((n, t) => n.setValue(e[t]))).some(Boolean) : (super.setValue(e.map(La)), !0)
          }
        };

      function La(e) {
        return (ya(e) ? Pa : xa).create(e)
      }

      function ja(e) {
        const n = Ea(e);
        return n ? n.constructor : Xo.arr(e) ? Oa : ya(e) ? Pa : xa
      }
      var Na = (e, n) => {
          const t = !Xo.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, o) => {
            const i = (0, s.useRef)(null),
              a = t && (0, s.useCallback)((e => {
                i.current = function(e, n) {
                  return e && (Xo.fun(e) ? e(n) : e.current = n), n
                }(o, e)
              }), [o]),
              [u, l] = function(e, n) {
                const t = new Set;
                return Sa.dependencies = t, e.style && (e = {
                  ...e,
                  style: n.createAnimatedStyle(e.style)
                }), e = new Ta(e), Sa.dependencies = null, [e, t]
              }(r, n),
              d = ma(),
              c = () => {
                const e = i.current;
                t && !e || !1 === (!!e && n.applyAnimatedValues(e, u.getValue(!0))) && d()
              },
              f = new Ra(c, l),
              p = (0, s.useRef)();
            Aa((() => (p.current = f, Yo(l, (e => Qi(e, f))), () => {
              p.current && (Yo(p.current.deps, (e => Ji(e, p.current))), Po.cancel(p.current.update))
            }))), (0, s.useEffect)(c, []), ba((() => () => {
              const e = p.current;
              Yo(e.deps, (n => Ji(n, e)))
            }));
            const h = n.getComponentProps(u.getValue());
            return s.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        Ra = class {
          constructor(e, n) {
            this.update = e, this.deps = n
          }
          eventObserved(e) {
            "change" == e.type && Po.write(this.update)
          }
        },
        Ma = Symbol.for("AnimatedComponent"),
        Da = (e, {
          applyAnimatedValues: n = (() => !1),
          createAnimatedStyle: t = (e => new Ta(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: n,
              createAnimatedStyle: t,
              getComponentProps: r
            },
            i = e => {
              const n = Ia(e) || "Anonymous";
              return (e = Xo.str(e) ? i[e] || (i[e] = Na(e, o)) : e[Ma] || (e[Ma] = Na(e, o))).displayName = `Animated(${n})`, e
            };
          return Zo(e, ((n, t) => {
            Xo.arr(e) && (t = Ia(n)), i[t] = i(n)
          })), {
            animated: i
          }
        },
        Ia = e => Xo.str(e) ? e : e && Xo.str(e.displayName) ? e.displayName : Xo.fun(e) && e.name || null;

      function Ha(e, ...n) {
        return Xo.fun(e) ? e(...n) : e
      }
      var za = (e, n) => !0 === e || !!(n && e && (Xo.fun(e) ? e(n) : Qo(e).includes(n))),
        qa = (e, n) => Xo.obj(e) ? n && e[n] : e,
        Fa = (e, n) => !0 === e.default ? e[n] : e.default ? e.default[n] : void 0,
        Ua = e => e,
        Va = (e, n = Ua) => {
          let t = Ga;
          e.default && !0 !== e.default && (e = e.default, t = Object.keys(e));
          const r = {};
          for (const o of t) {
            const t = n(e[o], o);
            Xo.und(t) || (r[o] = t)
          }
          return r
        },
        Ga = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ka = {
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

      function Wa(e) {
        const n = function(e) {
          const n = {};
          let t = 0;
          if (Zo(e, ((e, r) => {
              Ka[r] || (n[r] = e, t++)
            })), t) return n
        }(e);
        if (n) {
          const t = {
            to: n
          };
          return Zo(e, ((e, r) => r in n || (t[r] = e))), t
        }
        return {
          ...e
        }
      }

      function Xa(e) {
        return e = Wi(e), Xo.arr(e) ? e.map(Xa) : ya(e) ? Ko.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function $a(e) {
        for (const n in e) return !0;
        return !1
      }

      function Ya(e) {
        return Xo.fun(e) || Xo.arr(e) && Xo.obj(e[0])
      }

      function Za(e, n) {
        e.ref?.delete(e), n?.delete(e)
      }

      function Qa(e, n) {
        n && e.ref !== n && (e.ref?.delete(e), n.add(e), e.ref = n)
      }
      var Ja = {
          tension: 170,
          friction: 26
        },
        es = {
          ...Ja,
          mass: 1,
          damping: 1,
          easing: Ui.linear,
          clamp: !1
        },
        ns = class {
          constructor() {
            this.velocity = 0, Object.assign(this, es)
          }
        };

      function ts(e, n) {
        if (Xo.und(n.decay)) {
          const t = !Xo.und(n.tension) || !Xo.und(n.friction);
          !t && Xo.und(n.frequency) && Xo.und(n.damping) && Xo.und(n.mass) || (e.duration = void 0, e.decay = void 0), t && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var rs = [],
        os = class {
          constructor() {
            this.changed = !1, this.values = rs, this.toValues = null, this.fromValues = rs, this.config = new ns, this.immediate = !1
          }
        };

      function is(e, {
        key: n,
        props: t,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let u, l, d = za(t.cancel ?? r?.cancel, n);
          if (d) p();
          else {
            Xo.und(t.pause) || (o.paused = za(t.pause, n));
            let e = r?.pause;
            !0 !== e && (e = o.paused || za(e, n)), u = Ha(t.delay || 0, n), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function c() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), u = l.time - Po.now()
          }

          function f() {
            u > 0 && !Ko.skipAnimation ? (o.delayed = !0, l = Po.setTimeout(p, u), o.pauseQueue.add(c), o.timeouts.add(l)) : p()
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
      var as = (e, n) => 1 == n.length ? n[0] : n.some((e => e.cancelled)) ? ls(e.get()) : n.every((e => e.noop)) ? ss(e.get()) : us(e.get(), n.every((e => e.finished))),
        ss = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        us = (e, n, t = !1) => ({
          value: e,
          finished: n,
          cancelled: t
        }),
        ls = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ds(e, n, t, r) {
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
          const l = Va(n, ((e, n) => "onRest" === n ? void 0 : e));
          let d, c;
          const f = new Promise(((e, n) => (d = e, c = n))),
            p = e => {
              const n = o <= (t.cancelId || 0) && ls(r) || o !== t.asyncId && us(r, !1);
              if (n) throw e.result = n, c(e), e
            },
            h = (e, n) => {
              const i = new fs,
                a = new ps;
              return (async () => {
                if (Ko.skipAnimation) throw cs(t), a.result = us(r, !1), c(a), a;
                p(i);
                const s = Xo.obj(e) ? {
                  ...e
                } : {
                  ...n,
                  to: e
                };
                s.parentId = o, Zo(l, ((e, n) => {
                  Xo.und(s[n]) && (s[n] = e)
                }));
                const u = await r.start(s);
                return p(i), t.paused && await new Promise((e => {
                  t.resumeQueue.add(e)
                })), u
              })()
            };
          let y;
          if (Ko.skipAnimation) return cs(t), us(r, !1);
          try {
            let n;
            n = Xo.arr(e) ? (async e => {
              for (const n of e) await h(n)
            })(e) : Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([n.then(d), f]), y = us(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof fs) y = e.result;
            else {
              if (!(e instanceof ps)) throw e;
              y = e.result
            }
          } finally {
            o == t.asyncId && (t.asyncId = i, t.asyncTo = i ? s : void 0, t.promise = i ? u : void 0)
          }
          return Xo.fun(a) && Po.batchedUpdates((() => {
            a(y, r, r.item)
          })), y
        })() : u
      }

      function cs(e, n) {
        Jo(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, n && (e.cancelId = n)
      }
      var fs = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ps = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        hs = e => e instanceof As,
        ys = 1,
        As = class extends Yi {
          constructor() {
            super(...arguments), this.id = ys++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Ea(this);
            return e && e.getValue()
          }
          to(...e) {
            return Ko.to(this, e)
          }
          interpolate(...e) {
            return pa(`${ca}The "interpolate" function is deprecated in v9 (use "to" instead)`), Ko.to(this, e)
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
            $i(this, {
              type: "change",
              parent: this,
              value: e,
              idle: n
            })
          }
          _onPriorityChange(e) {
            this.idle || fi.sort(this), $i(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        vs = Symbol.for("SpringPhase"),
        ms = e => (1 & e[vs]) > 0,
        bs = e => (2 & e[vs]) > 0,
        gs = e => (4 & e[vs]) > 0,
        _s = (e, n) => n ? e[vs] |= 3 : e[vs] &= -3,
        Cs = (e, n) => n ? e[vs] |= 4 : e[vs] &= -5,
        Es = class extends As {
          constructor(e, n) {
            if (super(), this.animation = new os, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Xo.und(e) || !Xo.und(n)) {
              const t = Xo.obj(e) ? {
                ...e
              } : {
                ...n,
                from: e
              };
              Xo.und(t.default) && (t.default = !0), this.start(t)
            }
          }
          get idle() {
            return !(bs(this) || this._state.asyncTo) || gs(this)
          }
          get goal() {
            return Wi(this.animation.to)
          }
          get velocity() {
            const e = Ea(this);
            return e instanceof xa ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return ms(this)
          }
          get isAnimating() {
            return bs(this)
          }
          get isPaused() {
            return gs(this)
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
            } = r, a = ka(r.to);
            !a && Ki(r.to) && (o = Qo(Wi(r.to))), r.values.forEach(((s, u) => {
              if (s.done) return;
              const l = s.constructor == Pa ? 1 : a ? a[u].lastPosition : o[u];
              let d = r.immediate,
                c = l;
              if (!d) {
                if (c = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let n = s.elapsedTime += e;
                const t = r.fromValues[u],
                  o = null != s.v0 ? s.v0 : s.v0 = Xo.arr(i.velocity) ? i.velocity[u] : i.velocity;
                let a;
                const f = i.precision || (t == l ? .005 : Math.min(1, .001 * Math.abs(l - t)));
                if (Xo.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * n);
                    c = t + o / (1 - e) * (1 - r), d = Math.abs(s.lastPosition - c) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const n = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      u = !Xo.und(r),
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
            const s = Ea(this),
              u = s.getValue();
            if (n) {
              const e = Wi(r.to);
              u === e && !t || i.decay ? t && i.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)), this._stop()
            } else t && this._onChange(u)
          }
          set(e) {
            return Po.batchedUpdates((() => {
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
            if (bs(this)) {
              const {
                to: e,
                config: n
              } = this.animation;
              Po.batchedUpdates((() => {
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
            return Xo.und(e) ? (t = this.queue || [], this.queue = []) : t = [Xo.obj(e) ? e : {
              ...n,
              to: e
            }], Promise.all(t.map((e => this._update(e)))).then((e => as(this, e)))
          }
          stop(e) {
            const {
              to: n
            } = this.animation;
            return this._focus(this.get()), cs(this._state, e && this._lastCallId), Po.batchedUpdates((() => this._stop(n, e))), this
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
            t = Xo.obj(t) ? t[n] : t, (null == t || Ya(t)) && (t = void 0), r = Xo.obj(r) ? r[n] : r, null == r && (r = void 0);
            const o = {
              to: t,
              from: r
            };
            return ms(this) || (e.reverse && ([t, r] = [r, t]), r = Wi(r), Xo.und(r) ? Ea(this) || this._set(t) : this._set(r)), o
          }
          _update({
            ...e
          }, n) {
            const {
              key: t,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Va(e, ((e, n) => /^on/.test(n) ? qa(e, t) : e))), Ts(this, e, "onProps"), Os(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return is(++this._lastCallId, {
              key: t,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  gs(this) || (Cs(this, !0), ti(i.pauseQueue), Os(this, "onPause", us(this, ws(this, this.animation.to)), this))
                },
                resume: () => {
                  gs(this) && (Cs(this, !1), bs(this) && this._resume(), ti(i.resumeQueue), Os(this, "onResume", us(this, ws(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((t => {
              if (e.loop && t.finished && (!n || !t.noop)) {
                const n = ks(e);
                if (n) return this._update(n, !0)
              }
              return t
            }))
          }
          _merge(e, n, t) {
            if (n.cancel) return this.stop(!0), t(ls(this));
            const r = !Xo.und(e.to),
              o = !Xo.und(e.from);
            if (r || o) {
              if (!(n.callId > this._lastToId)) return t(ls(this));
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
            !o || r || n.default && !Xo.und(d) || (d = c), n.reverse && ([d, c] = [c, d]);
            const f = !$o(c, l);
            f && (s.from = c), c = Wi(c);
            const p = !$o(d, u);
            p && this._focus(d);
            const h = Ya(n.to),
              {
                config: y
              } = s,
              {
                decay: A,
                velocity: v
              } = y;
            (r || o) && (y.velocity = 0), n.config && !h && function(e, n, t) {
              t && (ts(t = {
                ...t
              }, n), n = {
                ...t,
                ...n
              }), ts(e, n), Object.assign(e, n);
              for (const n in es) null == e[n] && (e[n] = es[n]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Xo.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(y, Ha(n.config, i), n.config !== a.config ? Ha(a.config, i) : void 0);
            let m = Ea(this);
            if (!m || Xo.und(d)) return t(us(this, !0));
            const b = Xo.und(n.reset) ? o && !n.default : !Xo.und(c) && za(n.reset, i),
              g = b ? c : this.get(),
              _ = Xa(d),
              C = Xo.num(_) || Xo.arr(_) || ya(_),
              E = !h && (!C || za(a.immediate || n.immediate, i));
            if (p) {
              const e = ja(d);
              if (e !== m.constructor) {
                if (!E) throw Error(`Cannot animate between ${m.constructor.name} and ${e.name}, as the "to" prop suggests`);
                m = this._set(_)
              }
            }
            const w = m.constructor;
            let k = Ki(d),
              B = !1;
            if (!k) {
              const e = b || !ms(this) && f;
              (p || e) && (B = $o(Xa(g), _), k = !B), ($o(s.immediate, E) || E) && $o(y.decay, A) && $o(y.velocity, v) || (k = !0)
            }
            if (B && bs(this) && (s.changed && !b ? k = !0 : k || this._stop(u)), !h && ((k || Ki(u)) && (s.values = m.getPayload(), s.toValues = Ki(d) ? null : w == Pa ? [1] : Qo(_)), s.immediate != E && (s.immediate = E, E || b || this._set(u)), k)) {
              const {
                onRest: e
              } = s;
              Yo(Ss, (e => Ts(this, n, e)));
              const r = us(this, ws(this, u));
              ti(this._pendingCalls, r), this._pendingCalls.add(t), s.changed && Po.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Ha(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(g), h ? t(ds(n.to, n, this._state, this)) : k ? this._start() : bs(this) && !p ? this._pendingCalls.add(t) : t(ss(g))
          }
          _focus(e) {
            const n = this.animation;
            e !== n.to && (Xi(this) && this._detach(), n.to = e, Xi(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: n
            } = this.animation;
            Ki(n) && (Qi(n, this), hs(n) && (e = n.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Ki(e) && Ji(e, this)
          }
          _set(e, n = !0) {
            const t = Wi(e);
            if (!Xo.und(t)) {
              const e = Ea(this);
              if (!e || !$o(t, e.getValue())) {
                const r = ja(t);
                e && e.constructor == r ? e.setValue(t) : wa(this, r.create(t)), e && Po.batchedUpdates((() => {
                  this._onChange(t, n)
                }))
              }
            }
            return Ea(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Os(this, "onStart", us(this, ws(this, e.to)), this))
          }
          _onChange(e, n) {
            n || (this._onStart(), Ha(this.animation.onChange, e, this)), Ha(this.defaultProps.onChange, e, this), super._onChange(e, n)
          }
          _start() {
            const e = this.animation;
            Ea(this).reset(Wi(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), bs(this) || (_s(this, !0), gs(this) || this._resume())
          }
          _resume() {
            Ko.skipAnimation ? this.finish() : fi.start(this)
          }
          _stop(e, n) {
            if (bs(this)) {
              _s(this, !1);
              const t = this.animation;
              Yo(t.values, (e => {
                e.done = !0
              })), t.toValues && (t.onChange = t.onPause = t.onResume = void 0), $i(this, {
                type: "idle",
                parent: this
              });
              const r = n ? ls(this.get()) : us(this.get(), ws(this, e ?? t.to));
              ti(this._pendingCalls, r), t.changed && (t.changed = !1, Os(this, "onRest", r, this))
            }
          }
        };

      function ws(e, n) {
        const t = Xa(n);
        return $o(Xa(e.get()), t)
      }

      function ks(e, n = e.loop, t = e.to) {
        const r = Ha(n);
        if (r) {
          const o = !0 !== r && Wa(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Bs({
            ...e,
            loop: n,
            default: !1,
            pause: void 0,
            to: !i || Ya(t) ? t : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Bs(e) {
        const {
          to: n,
          from: t
        } = e = Wa(e), r = new Set;
        return Xo.obj(n) && Ps(n, r), Xo.obj(t) && Ps(t, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function xs(e) {
        const n = Bs(e);
        return Xo.und(n.default) && (n.default = Va(n)), n
      }

      function Ps(e, n) {
        Zo(e, ((e, t) => null != e && n.add(t)))
      }
      var Ss = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ts(e, n, t) {
        e.animation[t] = n[t] !== Fa(n, t) ? qa(n[t], e.key) : void 0
      }

      function Os(e, n, ...t) {
        e.animation[n]?.(...t), e.defaultProps[n]?.(...t)
      }
      var Ls = ["onStart", "onChange", "onRest"],
        js = 1,
        Ns = class {
          constructor(e, n) {
            this.id = js++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Xo.und(t) || this.springs[n].set(t)
            }
          }
          update(e) {
            return e && this.queue.push(Bs(e)), this
          }
          start(e) {
            let {
              queue: n
            } = this;
            return e ? n = Qo(e).map(Bs) : this.queue = [], this._flush ? this._flush(this, n) : (qs(this, n), Rs(this, n))
          }
          stop(e, n) {
            if (e !== !!e && (n = e), n) {
              const t = this.springs;
              Yo(Qo(n), (n => t[n].stop(!!e)))
            } else cs(this._state, this._lastAsyncId), this.each((n => n.stop(!!e)));
            return this
          }
          pause(e) {
            if (Xo.und(e)) this.start({
              pause: !0
            });
            else {
              const n = this.springs;
              Yo(Qo(e), (e => n[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Xo.und(e)) this.start({
              pause: !1
            });
            else {
              const n = this.springs;
              Yo(Qo(e), (e => n[e].resume()))
            }
            return this
          }
          each(e) {
            Zo(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: n,
              onRest: t
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Jo(e, (([e, n]) => {
              n.value = this.get(), e(n, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && t.size ? this.get() : null;
            o && n.size && Jo(n, (([e, n]) => {
              n.value = a, e(n, this, this._item)
            })), i && (this._started = !1, Jo(t, (([e, n]) => {
              n.value = a, e(n, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Po.onFrame(this._onFrame)
          }
        };

      function Rs(e, n) {
        return Promise.all(n.map((n => Ms(e, n)))).then((n => as(e, n)))
      }
      async function Ms(e, n, t) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: u
        } = n, l = Xo.obj(n.default) && n.default;
        a && (n.loop = !1), !1 === o && (n.to = null), !1 === i && (n.from = null);
        const d = Xo.arr(o) || Xo.fun(o) ? o : void 0;
        d ? (n.to = void 0, n.onRest = void 0, l && (l.onRest = void 0)) : Yo(Ls, (t => {
          const r = n[t];
          if (Xo.fun(r)) {
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
        n.pause === !c.paused ? (c.paused = n.pause, ti(n.pause ? c.pauseQueue : c.resumeQueue)) : c.paused && (n.pause = !0);
        const f = (r || Object.keys(e.springs)).map((t => e.springs[t].start(n))),
          p = !0 === n.cancel || !0 === Fa(n, "cancel");
        (d || p && c.asyncId) && f.push(is(++e._lastAsyncId, {
          props: n,
          state: c,
          actions: {
            pause: Wo,
            resume: Wo,
            start(n, t) {
              p ? (cs(c, e._lastAsyncId), t(ls(e))) : (n.onRest = s, t(ds(d, n, c, e)))
            }
          }
        })), c.paused && await new Promise((e => {
          c.resumeQueue.add(e)
        }));
        const h = as(e, await Promise.all(f));
        if (a && h.finished && (!t || !h.noop)) {
          const t = ks(n, a, o);
          if (t) return qs(e, [t]), Ms(e, t, !0)
        }
        return u && Po.batchedUpdates((() => u(h, e, e.item))), h
      }

      function Ds(e, n) {
        const t = {
          ...e.springs
        };
        return n && Yo(Qo(n), (e => {
          Xo.und(e.keys) && (e = Bs(e)), Xo.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), zs(t, e, (e => Hs(e)))
        })), Is(e, t), t
      }

      function Is(e, n) {
        Zo(n, ((n, t) => {
          e.springs[t] || (e.springs[t] = n, Qi(n, e))
        }))
      }

      function Hs(e, n) {
        const t = new Es;
        return t.key = e, n && Qi(t, n), t
      }

      function zs(e, n, t) {
        n.keys && Yo(n.keys, (r => {
          (e[r] || (e[r] = t(r)))._prepareNode(n)
        }))
      }

      function qs(e, n) {
        Yo(n, (n => {
          zs(e.springs, n, (n => Hs(n, e)))
        }))
      }
      var Fs, Us, Vs = ({
          children: e,
          ...n
        }) => {
          const t = (0, s.useContext)(Gs),
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
          } = Gs;
          return s.createElement(i, {
            value: n
          }, e)
        },
        Gs = (Fs = Vs, Us = {}, Object.assign(Fs, s.createContext(Us)), Fs.Provider._context = Fs, Fs.Consumer._context = Fs, Fs);
      Vs.Provider = Gs.Provider, Vs.Consumer = Gs.Consumer;
      var Ks = () => {
        const e = [],
          n = function(n) {
            ha(`${ca}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Yo(e, ((e, o) => {
              if (Xo.und(n)) r.push(e.start());
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
          return Yo(e, (e => e.pause(...arguments))), this
        }, n.resume = function() {
          return Yo(e, (e => e.resume(...arguments))), this
        }, n.set = function(n) {
          Yo(e, ((e, t) => {
            const r = Xo.fun(n) ? n(t, e) : n;
            r && e.set(r)
          }))
        }, n.start = function(n) {
          const t = [];
          return Yo(e, ((e, r) => {
            if (Xo.und(n)) t.push(e.start());
            else {
              const o = this._getProps(n, e, r);
              o && t.push(e.start(o))
            }
          })), t
        }, n.stop = function() {
          return Yo(e, (e => e.stop(...arguments))), this
        }, n.update = function(n) {
          return Yo(e, ((e, t) => e.update(this._getProps(n, e, t)))), this
        };
        const t = function(e, n, t) {
          return Xo.fun(e) ? e(t, n) : e
        };
        return n._getProps = t, n
      };

      function Ws(e, n) {
        const t = Xo.fun(e),
          [
            [r], o
          ] = function(e, n, t) {
            const r = Xo.fun(n) && n;
            r && !t && (t = []);
            const o = (0, s.useMemo)((() => r || 3 == arguments.length ? Ks() : void 0), []),
              i = (0, s.useRef)(0),
              a = ma(),
              u = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, n) {
                  const t = Ds(e, n);
                  return i.current > 0 && !u.queue.length && !Object.keys(t).some((n => !e.springs[n])) ? Rs(e, n) : new Promise((r => {
                    Is(e, t), u.queue.push((() => {
                      r(Rs(e, n))
                    })), a()
                  }))
                }
              })), []),
              l = (0, s.useRef)([...u.ctrls]),
              d = [],
              c = _a(e) || 0;

            function f(e, t) {
              for (let o = e; o < t; o++) {
                const e = l.current[o] || (l.current[o] = new Ns(null, u.flush)),
                  t = r ? r(o, e) : n[o];
                t && (d[o] = xs(t))
              }
            }(0, s.useMemo)((() => {
              Yo(l.current.slice(e, c), (e => {
                Za(e, o), e.stop(!0)
              })), l.current.length = e, f(c, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(c, e))
            }), t);
            const p = l.current.map(((e, n) => Ds(e, d[n]))),
              h = (0, s.useContext)(Vs),
              y = _a(h),
              A = h !== y && $a(h);
            Aa((() => {
              i.current++, u.ctrls = l.current;
              const {
                queue: e
              } = u;
              e.length && (u.queue = [], Yo(e, (e => e()))), Yo(l.current, ((e, n) => {
                o?.add(e), A && e.start({
                  default: h
                });
                const t = d[n];
                t && (Qa(e, t.ref), e.ref ? e.queue.push(t) : e.start(t))
              }))
            })), ba((() => () => {
              Yo(u.ctrls, (e => e.stop(!0)))
            }));
            const v = p.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, t ? e : [e], t ? n || [] : n);
        return t || 2 == arguments.length ? [r, o] : r
      }
      var Xs = () => Ks(),
        $s = () => (0, s.useState)(Xs)[0];
      var Ys = 1,
        Zs = class extends As {
          constructor(e, n) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Mi(...n);
            const t = this._get(),
              r = ja(t);
            wa(this, r.create(t))
          }
          advance(e) {
            const n = this._get();
            $o(n, this.get()) || (Ea(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Js(this._active) && eu(this)
          }
          _get() {
            const e = Xo.arr(this.source) ? this.source.map(Wi) : Qo(Wi(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Js(this._active) && (this.idle = !1, Yo(ka(this), (e => {
              e.done = !1
            })), Ko.skipAnimation ? (Po.batchedUpdates((() => this.advance())), eu(this)) : fi.start(this))
          }
          _attach() {
            let e = 1;
            Yo(Qo(this.source), (n => {
              Ki(n) && Qi(n, this), hs(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Yo(Qo(this.source), (e => {
              Ki(e) && Ji(e, this)
            })), this._active.clear(), eu(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Qo(this.source).reduce(((e, n) => Math.max(e, (hs(n) ? n.priority : 0) + 1)), 0))
          }
        };

      function Qs(e) {
        return !1 !== e.idle
      }

      function Js(e) {
        return !e.size || Array.from(e).every(Qs)
      }

      function eu(e) {
        e.idle || (e.idle = !0, Yo(ka(e), (e => {
          e.done = !0
        })), $i(e, {
          type: "idle",
          parent: e
        }))
      }
      Ko.assign({
        createStringInterpolator: da,
        to: (e, n) => new Zs(e, n)
      }), fi.advance;
      var nu = t(44853),
        tu = /^--/;

      function ru(e, n) {
        return null == n || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || tu.test(e) || iu.hasOwnProperty(e) && iu[e] ? ("" + n).trim() : n + "px"
      }
      var ou = {},
        iu = {
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
        au = ["Webkit", "Ms", "Moz", "O"];
      iu = Object.keys(iu).reduce(((e, n) => (au.forEach((t => e[((e, n) => e + n.charAt(0).toUpperCase() + n.substring(1))(t, n)] = e[n])), e)), iu);
      var su = /^(matrix|translate|scale|rotate|skew)/,
        uu = /^(translate)/,
        lu = /^(rotate|skew)/,
        du = (e, n) => Xo.num(e) && 0 !== e ? e + n : e,
        cu = (e, n) => Xo.arr(e) ? e.every((e => cu(e, n))) : Xo.num(e) ? e === n : parseFloat(e) === n,
        fu = class extends Ta {
          constructor({
            x: e,
            y: n,
            z: t,
            ...r
          }) {
            const o = [],
              i = [];
            (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((e => [`translate3d(${e.map((e=>du(e,"px"))).join(",")})`, cu(e, 0)]))), Zo(r, ((e, n) => {
              if ("transform" === n) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (su.test(n)) {
                if (delete r[n], Xo.und(e)) return;
                const t = uu.test(n) ? "px" : lu.test(n) ? "deg" : "";
                o.push(Qo(e)), i.push("rotate3d" === n ? ([e, n, r, o]) => [`rotate3d(${e},${n},${r},${du(o,t)})`, cu(o, 0)] : e => [`${n}(${e.map((e=>du(e,t))).join(",")})`, cu(e, n.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new pu(o, i)), super(r)
          }
        },
        pu = class extends Yi {
          constructor(e, n) {
            super(), this.inputs = e, this.transforms = n, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              n = !0;
            return Yo(this.inputs, ((t, r) => {
              const o = Wi(t[0]),
                [i, a] = this.transforms[r](Xo.arr(o) ? o : t.map(Wi));
              e += " " + i, n = n && a
            })), n ? "none" : e
          }
          observerAdded(e) {
            1 == e && Yo(this.inputs, (e => Yo(e, (e => Ki(e) && Qi(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Yo(this.inputs, (e => Yo(e, (e => Ki(e) && Ji(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), $i(this, e)
          }
        };
      Ko.assign({
        batchedUpdates: nu.unstable_batchedUpdates,
        createStringInterpolator: da,
        colors: vi
      });
      var hu = Da(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
            c = Object.keys(l).map((n => t || e.hasAttribute(n) ? n : ou[n] || (ou[n] = n.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const n in o)
            if (o.hasOwnProperty(n)) {
              const t = ru(n, o[n]);
              tu.test(n) ? e.style.setProperty(n, t) : e.style[n] = t
            } c.forEach(((n, t) => {
            e.setAttribute(n, d[t])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== u && e.setAttribute("viewBox", u)
        },
        createAnimatedStyle: e => new fu(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: n,
          ...t
        }) => t
      }).animated;
      const yu = (e, n, t) => {
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
        Au = e => {
          const n = (e, n, t) => {
            t(e, n) && (e = n)
          };
          return [...e.children].reduce(((e, t) => {
            const r = t.getBoundingClientRect();
            return e ? (n(e.top, r.top, ((e, n) => e < n)), n(e.bottom, r.bottom, ((e, n) => e > n)), n(e.left, r.left, ((e, n) => e < n)), n(e.right, r.right, ((e, n) => e > n)), n(e.height, e.bottom - e.top, (() => !0)), n(e.width, e.right - e.left, (() => !0)), n(e.x, e.left, (() => !0)), n(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        vu = ([e, n], t) => {
          const {
            a: r
          } = new DOMMatrix(t.style.transform), o = Au(t), i = o.width / r, a = 100 * bu(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * bu(n, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        mu = (e, n, t, r) => {
          let o = t[0],
            i = t[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, u = Au(e), l = n.getBoundingClientRect(), d = u.width / a / 2, c = l.width / 2, f = d * s > c ? d * s - c : 0, p = u.height / a / 2, h = l.height / 2, y = p * s > h ? p * s - h : 0, A = -o > f, v = o > f, m = i > y, b = -i > y;
          return A && !v ? o = -f : v && !A && (o = f), m && !b ? i = y : b && !m && (i = -y), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: y
          }
        },
        bu = (e, n, t) => Math.min(Math.max(e, n), t),
        gu = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        _u = Ja,
        Cu = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        };
      var Eu = t(59509),
        wu = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      wu.setAttributes = A(), wu.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, wu.domAPI = h(), wu.insertStyleElement = m(), f()(Eu.A, wu), Eu.A && Eu.A.locals && Eu.A.locals;
      const ku = ({
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
        }), Bo({
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
          children: (0, i.jsx)(hu.div, {
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
      var Bu, xu, Pu, Su, Tu = t(91299);

      function Ou(e) {
        return e.type === xu.literal
      }

      function Lu(e) {
        return e.type === xu.argument
      }

      function ju(e) {
        return e.type === xu.number
      }

      function Nu(e) {
        return e.type === xu.date
      }

      function Ru(e) {
        return e.type === xu.time
      }

      function Mu(e) {
        return e.type === xu.select
      }

      function Du(e) {
        return e.type === xu.plural
      }

      function Iu(e) {
        return e.type === xu.pound
      }

      function Hu(e) {
        return e.type === xu.tag
      }

      function zu(e) {
        return !(!e || "object" != typeof e || e.type !== Pu.number)
      }

      function qu(e) {
        return !(!e || "object" != typeof e || e.type !== Pu.dateTime)
      }(Su = Bu || (Bu = {}))[Su.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Su[Su.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Su[Su.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Su[Su.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Su[Su.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Su[Su.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Su[Su.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Su[Su.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Su[Su.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Su[Su.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Su[Su.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Su[Su.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Su[Su.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Su[Su.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Su[Su.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Su[Su.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Su[Su.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Su[Su.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Su[Su.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Su[Su.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Su[Su.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Su[Su.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Su[Su.INVALID_TAG = 23] = "INVALID_TAG", Su[Su.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Su[Su.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Su[Su.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(xu || (xu = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Pu || (Pu = {}));
      var Fu = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Uu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Vu(e) {
        var n = {};
        return e.replace(Uu, (function(e) {
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
      var Gu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Ku = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Wu = /^(@+)?(\+|#+)?[rs]?$/g,
        Xu = /(\*)(0+)|(#+)(0+)|(0+)/g,
        $u = /^(0+)$/;

      function Yu(e) {
        var n = {};
        return "r" === e[e.length - 1] ? n.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (n.roundingPriority = "lessPrecision"), e.replace(Wu, (function(e, t, r) {
          return "string" != typeof r ? (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length) : "+" === r ? n.minimumSignificantDigits = t.length : "#" === t[0] ? n.maximumSignificantDigits = t.length : (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
        })), n
      }

      function Zu(e) {
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

      function Qu(e) {
        var n;
        if ("E" === e[0] && "E" === e[1] ? (n = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (n = {
            notation: "scientific"
          }, e = e.slice(1)), n) {
          var t = e.slice(0, 2);
          if ("+!" === t ? (n.signDisplay = "always", e = e.slice(2)) : "+?" === t && (n.signDisplay = "exceptZero", e = e.slice(2)), !$u.test(e)) throw new Error("Malformed concise eng/scientific notation");
          n.minimumIntegerDigits = e.length
        }
        return n
      }

      function Ju(e) {
        return Zu(e) || {}
      }

      function el(e) {
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
              n = (0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, n), {
                notation: "scientific"
              }), o.options.reduce((function(e, n) {
                return (0, Tu.__assign)((0, Tu.__assign)({}, e), Ju(n))
              }), {}));
              continue;
            case "engineering":
              n = (0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, n), {
                notation: "engineering"
              }), o.options.reduce((function(e, n) {
                return (0, Tu.__assign)((0, Tu.__assign)({}, e), Ju(n))
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
              o.options[0].replace(Xu, (function(e, t, r, o, i, a) {
                if (t) n.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if ($u.test(o.stem)) n.minimumIntegerDigits = o.stem.length;
          else if (Ku.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Ku, (function(e, t, r, o, i, a) {
              return "*" === r ? n.minimumFractionDigits = t.length : o && "#" === o[0] ? n.maximumFractionDigits = o.length : i && a ? (n.minimumFractionDigits = i.length, n.maximumFractionDigits = i.length + a.length) : (n.minimumFractionDigits = t.length, n.maximumFractionDigits = t.length), ""
            }));
            var i = o.options[0];
            "w" === i ? n = (0, Tu.__assign)((0, Tu.__assign)({}, n), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (n = (0, Tu.__assign)((0, Tu.__assign)({}, n), Yu(i)))
          } else if (Wu.test(o.stem)) n = (0, Tu.__assign)((0, Tu.__assign)({}, n), Yu(o.stem));
          else {
            var a = Zu(o.stem);
            a && (n = (0, Tu.__assign)((0, Tu.__assign)({}, n), a));
            var s = Qu(o.stem);
            s && (n = (0, Tu.__assign)((0, Tu.__assign)({}, n), s))
          }
        }
        return n
      }
      var nl, tl = {
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

      function rl(e) {
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
        return "root" !== r && (t = e.maximize().region), (tl[t || ""] || tl[r || ""] || tl["".concat(r, "-001")] || tl["001"])[0]
      }
      var ol = new RegExp("^".concat(Fu.source, "*")),
        il = new RegExp("".concat(Fu.source, "*$"));

      function al(e, n) {
        return {
          start: e,
          end: n
        }
      }
      var sl = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        ul = !!String.fromCodePoint,
        ll = !!Object.fromEntries,
        dl = !!String.prototype.codePointAt,
        cl = !!String.prototype.trimStart,
        fl = !!String.prototype.trimEnd,
        pl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        hl = !0;
      try {
        hl = "a" === (null === (nl = Cl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === nl ? void 0 : nl[0])
      } catch (e) {
        hl = !1
      }
      var yl, Al = sl ? function(e, n, t) {
          return e.startsWith(n, t)
        } : function(e, n, t) {
          return e.slice(t, t + n.length) === n
        },
        vl = ul ? String.fromCodePoint : function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          for (var t, r = "", o = e.length, i = 0; o > i;) {
            if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
            r += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
          }
          return r
        },
        ml = ll ? Object.fromEntries : function(e) {
          for (var n = {}, t = 0, r = e; t < r.length; t++) {
            var o = r[t],
              i = o[0],
              a = o[1];
            n[i] = a
          }
          return n
        },
        bl = dl ? function(e, n) {
          return e.codePointAt(n)
        } : function(e, n) {
          var t = e.length;
          if (!(n < 0 || n >= t)) {
            var r, o = e.charCodeAt(n);
            return o < 55296 || o > 56319 || n + 1 === t || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        gl = cl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ol, "")
        },
        _l = fl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(il, "")
        };

      function Cl(e, n) {
        return new RegExp(e, n)
      }
      if (hl) {
        var El = Cl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        yl = function(e, n) {
          var t;
          return El.lastIndex = n, null !== (t = El.exec(e)[1]) && void 0 !== t ? t : ""
        }
      } else yl = function(e, n) {
        for (var t = [];;) {
          var r = bl(e, n);
          if (void 0 === r || Bl(r) || xl(r)) break;
          t.push(r), n += r >= 65536 ? 2 : 1
        }
        return vl.apply(void 0, t)
      };
      var wl = function() {
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
                  return this.error(Bu.UNMATCHED_CLOSING_TAG, al(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && kl(this.peek() || 0)) {
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
                  type: xu.pound,
                  location: al(a, this.clonePosition())
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
              type: xu.literal,
              value: "<".concat(r, "/>"),
              location: al(t, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, n, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !kl(this.char())) return this.error(Bu.INVALID_TAG, al(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Bu.UNMATCHED_CLOSING_TAG, al(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: xu.tag,
                  value: r,
                  children: i,
                  location: al(t, this.clonePosition())
                },
                err: null
              } : this.error(Bu.INVALID_TAG, al(a, this.clonePosition())))
            }
            return this.error(Bu.UNCLOSED_TAG, al(t, this.clonePosition()))
          }
          return this.error(Bu.INVALID_TAG, al(t, this.clonePosition()))
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
          var s = al(t, this.clonePosition());
          return {
            val: {
              type: xu.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (kl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return vl.apply(void 0, n)
        }, e.prototype.tryParseUnquoted = function(e, n) {
          if (this.isEOF()) return null;
          var t = this.char();
          return 60 === t || 123 === t || 35 === t && ("plural" === n || "selectordinal" === n) || 125 === t && e > 0 ? null : (this.bump(), vl(t))
        }, e.prototype.parseArgument = function(e, n) {
          var t = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Bu.EXPECT_ARGUMENT_CLOSING_BRACE, al(t, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Bu.EMPTY_ARGUMENT, al(t, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Bu.MALFORMED_ARGUMENT, al(t, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Bu.EXPECT_ARGUMENT_CLOSING_BRACE, al(t, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: xu.argument,
                  value: r,
                  location: al(t, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Bu.EXPECT_ARGUMENT_CLOSING_BRACE, al(t, this.clonePosition())) : this.parseArgumentOptions(e, n, r, t);
            default:
              return this.error(Bu.MALFORMED_ARGUMENT, al(t, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            n = this.offset(),
            t = yl(this.message, n),
            r = n + t.length;
          return this.bumpTo(r), {
            value: t,
            location: al(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, n, t, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Bu.EXPECT_ARGUMENT_TYPE, al(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var u = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var l = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (p = _l(v.val)).length) return this.error(Bu.EXPECT_ARGUMENT_STYLE, al(this.clonePosition(), this.clonePosition()));
                u = {
                  style: p,
                  styleLocation: al(l, this.clonePosition())
                }
              }
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var d = al(r, this.clonePosition());
              if (u && Al(null == u ? void 0 : u.style, "::", 0)) {
                var c = gl(u.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(c, u.styleLocation)).err ? v : {
                  val: {
                    type: xu.number,
                    value: t,
                    location: d,
                    style: v.val
                  },
                  err: null
                };
                if (0 === c.length) return this.error(Bu.EXPECT_DATE_TIME_SKELETON, d);
                var f = c;
                this.locale && (f = function(e, n) {
                  for (var t = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        u = rl(n);
                      for ("H" != u && "k" != u || (s = 0); s-- > 0;) t += "a";
                      for (; a-- > 0;) t = u + t
                    } else t += "J" === o ? "H" : o
                  }
                  return t
                }(c, this.locale));
                var p = {
                  type: Pu.dateTime,
                  pattern: f,
                  location: u.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vu(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? xu.date : xu.time,
                    value: t,
                    location: d,
                    style: p
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? xu.number : "date" === a ? xu.date : xu.time,
                  value: t,
                  location: d,
                  style: null !== (o = null == u ? void 0 : u.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var h = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Bu.EXPECT_SELECT_ARGUMENT_OPTIONS, al(h, (0, Tu.__assign)({}, h)));
              this.bumpSpace();
              var y = this.parseIdentifierIfPossible(),
                A = 0;
              if ("select" !== a && "offset" === y.value) {
                if (!this.bumpIf(":")) return this.error(Bu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, al(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Bu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Bu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), y = this.parseIdentifierIfPossible(), A = v.val
              }
              var m, b = this.tryParsePluralOrSelectOptions(e, a, n, y);
              if (b.err) return b;
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var g = al(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: xu.select,
                  value: t,
                  options: ml(b.val),
                  location: g
                },
                err: null
              } : {
                val: {
                  type: xu.plural,
                  value: t,
                  options: ml(b.val),
                  offset: A,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: g
                },
                err: null
              };
            default:
              return this.error(Bu.INVALID_ARGUMENT_TYPE, al(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Bu.EXPECT_ARGUMENT_CLOSING_BRACE, al(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, n = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var t = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Bu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, al(t, this.clonePosition()));
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
              for (var n = [], t = 0, r = e.split(Gu).filter((function(e) {
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
            return this.error(Bu.INVALID_NUMBER_SKELETON, n)
          }
          return {
            val: {
              type: Pu.number,
              tokens: t,
              location: n,
              parsedOptions: this.shouldParseSkeletons ? el(t) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, n, t, r) {
          for (var o, i = !1, a = [], s = new Set, u = r.value, l = r.location;;) {
            if (0 === u.length) {
              var d = this.clonePosition();
              if ("select" === n || !this.bumpIf("=")) break;
              var c = this.tryParseDecimalInteger(Bu.EXPECT_PLURAL_ARGUMENT_SELECTOR, Bu.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (c.err) return c;
              l = al(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset())
            }
            if (s.has(u)) return this.error("select" === n ? Bu.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Bu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === u && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === n ? Bu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Bu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, al(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, n, t);
            if (p.err) return p;
            var h = this.tryParseArgumentClose(f);
            if (h.err) return h;
            a.push([u, {
              value: p.val,
              location: al(f, this.clonePosition())
            }]), s.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, l = o.location
          }
          return 0 === a.length ? this.error("select" === n ? Bu.EXPECT_SELECT_ARGUMENT_SELECTOR : Bu.EXPECT_PLURAL_ARGUMENT_SELECTOR, al(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Bu.MISSING_OTHER_CLAUSE, al(this.clonePosition(), this.clonePosition())) : {
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
          var s = al(r, this.clonePosition());
          return o ? pl(i *= t) ? {
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
          var n = bl(this.message, e);
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
          if (Al(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Bl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            n = this.offset(),
            t = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
          return null != t ? t : null
        }, e
      }();

      function kl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Bl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function xl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Pl(e) {
        e.forEach((function(e) {
          if (delete e.location, Mu(e) || Du(e))
            for (var n in e.options) delete e.options[n].location, Pl(e.options[n].value);
          else ju(e) && zu(e.style) || (Nu(e) || Ru(e)) && qu(e.style) ? delete e.style.location : Hu(e) && Pl(e.children)
        }))
      }

      function Sl(e, n) {
        void 0 === n && (n = {}), n = (0, Tu.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, n);
        var t = new wl(e, n).parse();
        if (t.err) {
          var r = SyntaxError(Bu[t.err.kind]);
          throw r.location = t.err.location, r.originalMessage = t.err.message, r
        }
        return (null == n ? void 0 : n.captureLocation) || Pl(t.val), t.val
      }

      function Tl(e, n) {
        var t = n && n.cache ? n.cache : Il,
          r = n && n.serializer ? n.serializer : Rl;
        return (n && n.strategy ? n.strategy : Nl)(e, {
          cache: t,
          serializer: r
        })
      }

      function Ol(e, n, t, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : t(r),
          a = n.get(i);
        return void 0 === a && (a = e.call(this, r), n.set(i, a)), a
      }

      function Ll(e, n, t) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = t(r),
          i = n.get(o);
        return void 0 === i && (i = e.apply(this, r), n.set(o, i)), i
      }

      function jl(e, n, t, r, o) {
        return t.bind(n, e, r, o)
      }

      function Nl(e, n) {
        return jl(e, this, 1 === e.length ? Ol : Ll, n.cache.create(), n.serializer)
      }
      var Rl = function() {
        return JSON.stringify(arguments)
      };

      function Ml() {
        this.cache = Object.create(null)
      }
      Ml.prototype.get = function(e) {
        return this.cache[e]
      }, Ml.prototype.set = function(e, n) {
        this.cache[e] = n
      };
      var Dl, Il = {
          create: function() {
            return new Ml
          }
        },
        Hl = {
          variadic: function(e, n) {
            return jl(e, this, Ll, n.cache.create(), n.serializer)
          },
          monadic: function(e, n) {
            return jl(e, this, Ol, n.cache.create(), n.serializer)
          }
        };
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(Dl || (Dl = {}));
      var zl, ql = function(e) {
          function n(n, t, r) {
            var o = e.call(this, n) || this;
            return o.code = t, o.originalMessage = r, o
          }
          return (0, Tu.__extends)(n, e), n.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, n
        }(Error),
        Fl = function(e) {
          function n(n, t, r, o) {
            return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(t, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Dl.INVALID_VALUE, o) || this
          }
          return (0, Tu.__extends)(n, e), n
        }(ql),
        Ul = function(e) {
          function n(n, t, r) {
            return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(t), Dl.INVALID_VALUE, r) || this
          }
          return (0, Tu.__extends)(n, e), n
        }(ql),
        Vl = function(e) {
          function n(n, t) {
            return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(t, '"'), Dl.MISSING_VALUE, t) || this
          }
          return (0, Tu.__extends)(n, e), n
        }(ql);

      function Gl(e) {
        return "function" == typeof e
      }

      function Kl(e, n, t, r, o, i, a) {
        if (1 === e.length && Ou(e[0])) return [{
          type: zl.literal,
          value: e[0].value
        }];
        for (var s = [], u = 0, l = e; u < l.length; u++) {
          var d = l[u];
          if (Ou(d)) s.push({
            type: zl.literal,
            value: d.value
          });
          else if (Iu(d)) "number" == typeof i && s.push({
            type: zl.literal,
            value: t.getNumberFormat(n).format(i)
          });
          else {
            var c = d.value;
            if (!o || !(c in o)) throw new Vl(c, a);
            var f = o[c];
            if (Lu(d)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? zl.literal : zl.object,
              value: f
            });
            else if (Nu(d)) {
              var p = "string" == typeof d.style ? r.date[d.style] : qu(d.style) ? d.style.parsedOptions : void 0;
              s.push({
                type: zl.literal,
                value: t.getDateTimeFormat(n, p).format(f)
              })
            } else if (Ru(d)) p = "string" == typeof d.style ? r.time[d.style] : qu(d.style) ? d.style.parsedOptions : r.time.medium, s.push({
              type: zl.literal,
              value: t.getDateTimeFormat(n, p).format(f)
            });
            else if (ju(d))(p = "string" == typeof d.style ? r.number[d.style] : zu(d.style) ? d.style.parsedOptions : void 0) && p.scale && (f *= p.scale || 1), s.push({
              type: zl.literal,
              value: t.getNumberFormat(n, p).format(f)
            });
            else {
              if (Hu(d)) {
                var h = d.children,
                  y = d.value,
                  A = o[y];
                if (!Gl(A)) throw new Ul(y, "function", a);
                var v = A(Kl(h, n, t, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? zl.literal : zl.object,
                    value: e
                  }
                })))
              }
              if (Mu(d)) {
                if (!(m = d.options[f] || d.options.other)) throw new Fl(d.value, f, Object.keys(d.options), a);
                s.push.apply(s, Kl(m.value, n, t, r, o))
              } else if (Du(d)) {
                var m;
                if (!(m = d.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new ql('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Dl.MISSING_INTL_API, a);
                  var b = t.getPluralRules(n, {
                    type: d.pluralType
                  }).select(f - (d.offset || 0));
                  m = d.options[b] || d.options.other
                }
                if (!m) throw new Fl(d.value, f, Object.keys(d.options), a);
                s.push.apply(s, Kl(m.value, n, t, r, o, f - (d.offset || 0)))
              }
            }
          }
        }
        return (g = s).length < 2 ? g : g.reduce((function(e, n) {
          var t = e[e.length - 1];
          return t && t.type === zl.literal && n.type === zl.literal ? t.value += n.value : e.push(n), e
        }), []);
        var g
      }

      function Wl(e) {
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
      }(zl || (zl = {}));
      var Xl = function() {
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
                return e.length && n.type === zl.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += n.value : e.push(n.value), e
              }), []);
              return t.length <= 1 ? t[0] || "" : t
            }, this.formatToParts = function(e) {
              return Kl(u.ast, u.locales, u.formatters, u.formats, e, void 0, u.message)
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
              d = (l.formatters, (0, Tu.__rest)(l, ["formatters"]));
            this.ast = e.__parse(n, (0, Tu.__assign)((0, Tu.__assign)({}, d), {
              locale: this.resolvedLocale
            }))
          } else this.ast = n;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, n) {
            return e[n] = function(e, n) {
              return n ? (0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, e || {}), n || {}), Object.keys(e).reduce((function(t, r) {
                return t[r] = (0, Tu.__assign)((0, Tu.__assign)({}, e[r]), n[r] || {}), t
              }), {})) : e
            }(a[n], s[n]), e
          }), (0, Tu.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Tl((function() {
              for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Tu.__spreadArray)([void 0], n, !1)))
            }), {
              cache: Wl(i.number),
              strategy: Hl.variadic
            }),
            getDateTimeFormat: Tl((function() {
              for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Tu.__spreadArray)([void 0], n, !1)))
            }), {
              cache: Wl(i.dateTime),
              strategy: Hl.variadic
            }),
            getPluralRules: Tl((function() {
              for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Tu.__spreadArray)([void 0], n, !1)))
            }), {
              cache: Wl(i.pluralRules),
              strategy: Hl.variadic
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
        }, e.__parse = Sl, e.formats = {
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

      function $l(e, n) {
        var t = n && n.cache ? n.cache : rd,
          r = n && n.serializer ? n.serializer : ed;
        return (n && n.strategy ? n.strategy : Jl)(e, {
          cache: t,
          serializer: r
        })
      }

      function Yl(e, n, t, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : t(r),
          a = n.get(i);
        return void 0 === a && (a = e.call(this, r), n.set(i, a)), a
      }

      function Zl(e, n, t) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = t(r),
          i = n.get(o);
        return void 0 === i && (i = e.apply(this, r), n.set(o, i)), i
      }

      function Ql(e, n, t, r, o) {
        return t.bind(n, e, r, o)
      }

      function Jl(e, n) {
        return Ql(e, this, 1 === e.length ? Yl : Zl, n.cache.create(), n.serializer)
      }
      var ed = function() {
        return JSON.stringify(arguments)
      };

      function nd() {
        this.cache = Object.create(null)
      }
      nd.prototype.get = function(e) {
        return this.cache[e]
      }, nd.prototype.set = function(e, n) {
        this.cache[e] = n
      };
      var td, rd = {
          create: function() {
            return new nd
          }
        },
        od = {
          variadic: function(e, n) {
            return Ql(e, this, Zl, n.cache.create(), n.serializer)
          },
          monadic: function(e, n) {
            return Ql(e, this, Yl, n.cache.create(), n.serializer)
          }
        };
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(td || (td = {}));
      var id = function(e) {
          function n(t, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(t, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, n), i
          }
          return (0, Tu.__extends)(n, e), n
        }(Error),
        ad = function(e) {
          function n(n, t) {
            return e.call(this, td.UNSUPPORTED_FORMATTER, n, t) || this
          }
          return (0, Tu.__extends)(n, e), n
        }(id),
        sd = function(e) {
          function n(n, t) {
            return e.call(this, td.INVALID_CONFIG, n, t) || this
          }
          return (0, Tu.__extends)(n, e), n
        }(id),
        ud = function(e) {
          function n(n, t) {
            return e.call(this, td.MISSING_DATA, n, t) || this
          }
          return (0, Tu.__extends)(n, e), n
        }(id),
        ld = function(e) {
          function n(n, t, r) {
            var o = e.call(this, td.FORMAT_ERROR, "".concat(n, "\nLocale: ").concat(t, "\n"), r) || this;
            return o.locale = t, o
          }
          return (0, Tu.__extends)(n, e), n
        }(id),
        dd = function(e) {
          function n(n, t, r, o) {
            var i = e.call(this, "".concat(n, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), t, o) || this;
            return i.descriptor = r, i.locale = t, i
          }
          return (0, Tu.__extends)(n, e), n
        }(ld),
        cd = function(e) {
          function n(n, t) {
            var r = e.call(this, td.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(t, '", using ').concat(n.defaultMessage ? "default message (".concat("string" == typeof n.defaultMessage ? n.defaultMessage : n.defaultMessage.map((function(e) {
              var n;
              return null !== (n = e.value) && void 0 !== n ? n : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = n, r
          }
          return (0, Tu.__extends)(n, e), n
        }(id);

      function fd(e, n, t) {
        return void 0 === t && (t = {}), n.reduce((function(n, r) {
          return r in e ? n[r] = e[r] : r in t && (n[r] = t[r]), n
        }), {})
      }
      var pd = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function hd(e) {
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

      function yd(e, n, t, r) {
        var o, i = e && e[n];
        if (i && (o = i[t]), o) return o;
        r(new ad("No ".concat(n, " format named: ").concat(t)))
      }

      function Ad(e) {
        ! function(e, n, t) {
          if (void 0 === t && (t = Error), !e) throw new t("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var vd = (0, Tu.__assign)((0, Tu.__assign)({}, pd), {
        textComponent: s.Fragment
      });
      t(62607);
      var md, bd, gd, _d = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        Cd = (_d.Consumer, _d.Provider),
        Ed = _d;
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(md || (md = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(bd || (bd = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(gd || (gd = {}));
      var wd = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        kd = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Bd(e) {
        var n = {};
        return e.replace(kd, (function(e) {
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
      var xd = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Pd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Sd = /^(@+)?(\+|#+)?[rs]?$/g,
        Td = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Od = /^(0+)$/;

      function Ld(e) {
        var n = {};
        return "r" === e[e.length - 1] ? n.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (n.roundingPriority = "lessPrecision"), e.replace(Sd, (function(e, t, r) {
          return "string" != typeof r ? (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length) : "+" === r ? n.minimumSignificantDigits = t.length : "#" === t[0] ? n.maximumSignificantDigits = t.length : (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
        })), n
      }

      function jd(e) {
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

      function Nd(e) {
        var n;
        if ("E" === e[0] && "E" === e[1] ? (n = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (n = {
            notation: "scientific"
          }, e = e.slice(1)), n) {
          var t = e.slice(0, 2);
          if ("+!" === t ? (n.signDisplay = "always", e = e.slice(2)) : "+?" === t && (n.signDisplay = "exceptZero", e = e.slice(2)), !Od.test(e)) throw new Error("Malformed concise eng/scientific notation");
          n.minimumIntegerDigits = e.length
        }
        return n
      }

      function Rd(e) {
        return jd(e) || {}
      }

      function Md(e) {
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
              n = (0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, n), {
                notation: "scientific"
              }), o.options.reduce((function(e, n) {
                return (0, Tu.__assign)((0, Tu.__assign)({}, e), Rd(n))
              }), {}));
              continue;
            case "engineering":
              n = (0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, n), {
                notation: "engineering"
              }), o.options.reduce((function(e, n) {
                return (0, Tu.__assign)((0, Tu.__assign)({}, e), Rd(n))
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
              o.options[0].replace(Td, (function(e, t, r, o, i, a) {
                if (t) n.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Od.test(o.stem)) n.minimumIntegerDigits = o.stem.length;
          else if (Pd.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Pd, (function(e, t, r, o, i, a) {
              return "*" === r ? n.minimumFractionDigits = t.length : o && "#" === o[0] ? n.maximumFractionDigits = o.length : i && a ? (n.minimumFractionDigits = i.length, n.maximumFractionDigits = i.length + a.length) : (n.minimumFractionDigits = t.length, n.maximumFractionDigits = t.length), ""
            }));
            var i = o.options[0];
            "w" === i ? n = (0, Tu.__assign)((0, Tu.__assign)({}, n), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (n = (0, Tu.__assign)((0, Tu.__assign)({}, n), Ld(i)))
          } else if (Sd.test(o.stem)) n = (0, Tu.__assign)((0, Tu.__assign)({}, n), Ld(o.stem));
          else {
            var a = jd(o.stem);
            a && (n = (0, Tu.__assign)((0, Tu.__assign)({}, n), a));
            var s = Nd(o.stem);
            s && (n = (0, Tu.__assign)((0, Tu.__assign)({}, n), s))
          }
        }
        return n
      }
      var Dd, Id = {
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

      function Hd(e) {
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
        return "root" !== r && (t = e.maximize().region), (Id[t || ""] || Id[r || ""] || Id["".concat(r, "-001")] || Id["001"])[0]
      }
      var zd = new RegExp("^".concat(wd.source, "*")),
        qd = new RegExp("".concat(wd.source, "*$"));

      function Fd(e, n) {
        return {
          start: e,
          end: n
        }
      }
      var Ud = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Vd = !!String.fromCodePoint,
        Gd = !!Object.fromEntries,
        Kd = !!String.prototype.codePointAt,
        Wd = !!String.prototype.trimStart,
        Xd = !!String.prototype.trimEnd,
        $d = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Yd = !0;
      try {
        Yd = "a" === (null === (Dd = oc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Dd ? void 0 : Dd[0])
      } catch (e) {
        Yd = !1
      }
      var Zd, Qd = Ud ? function(e, n, t) {
          return e.startsWith(n, t)
        } : function(e, n, t) {
          return e.slice(t, t + n.length) === n
        },
        Jd = Vd ? String.fromCodePoint : function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          for (var t, r = "", o = e.length, i = 0; o > i;) {
            if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
            r += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
          }
          return r
        },
        ec = Gd ? Object.fromEntries : function(e) {
          for (var n = {}, t = 0, r = e; t < r.length; t++) {
            var o = r[t],
              i = o[0],
              a = o[1];
            n[i] = a
          }
          return n
        },
        nc = Kd ? function(e, n) {
          return e.codePointAt(n)
        } : function(e, n) {
          var t = e.length;
          if (!(n < 0 || n >= t)) {
            var r, o = e.charCodeAt(n);
            return o < 55296 || o > 56319 || n + 1 === t || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        tc = Wd ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(zd, "")
        },
        rc = Xd ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(qd, "")
        };

      function oc(e, n) {
        return new RegExp(e, n)
      }
      if (Yd) {
        var ic = oc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Zd = function(e, n) {
          var t;
          return ic.lastIndex = n, null !== (t = ic.exec(e)[1]) && void 0 !== t ? t : ""
        }
      } else Zd = function(e, n) {
        for (var t = [];;) {
          var r = nc(e, n);
          if (void 0 === r || sc(r) || uc(r)) break;
          t.push(r), n += r >= 65536 ? 2 : 1
        }
        return Jd.apply(void 0, t)
      };

      function ac(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function sc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function uc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function lc(e, n) {
        return Object.keys(e).reduce((function(t, r) {
          return t[r] = (0, Tu.__assign)({
            timeZone: n
          }, e[r]), t
        }), {})
      }

      function dc(e, n) {
        return Object.keys((0, Tu.__assign)((0, Tu.__assign)({}, e), n)).reduce((function(t, r) {
          return t[r] = (0, Tu.__assign)((0, Tu.__assign)({}, e[r] || {}), n[r] || {}), t
        }), {})
      }

      function cc(e, n) {
        if (!n) return e;
        var t = Xl.formats;
        return (0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, t), e), {
          date: dc(lc(t.date, n), lc(e.date || {}, n)),
          time: dc(lc(t.time, n), lc(e.time || {}, n))
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
                  return this.error(md.UNMATCHED_CLOSING_TAG, Fd(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && ac(this.peek() || 0)) {
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
                  type: bd.pound,
                  location: Fd(a, this.clonePosition())
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
              type: bd.literal,
              value: "<".concat(r, "/>"),
              location: Fd(t, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, n, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ac(this.char())) return this.error(md.INVALID_TAG, Fd(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(md.UNMATCHED_CLOSING_TAG, Fd(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: bd.tag,
                  value: r,
                  children: i,
                  location: Fd(t, this.clonePosition())
                },
                err: null
              } : this.error(md.INVALID_TAG, Fd(a, this.clonePosition())))
            }
            return this.error(md.UNCLOSED_TAG, Fd(t, this.clonePosition()))
          }
          return this.error(md.INVALID_TAG, Fd(t, this.clonePosition()))
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
          var s = Fd(t, this.clonePosition());
          return {
            val: {
              type: bd.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ac(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Jd.apply(void 0, n)
        }, e.prototype.tryParseUnquoted = function(e, n) {
          if (this.isEOF()) return null;
          var t = this.char();
          return 60 === t || 123 === t || 35 === t && ("plural" === n || "selectordinal" === n) || 125 === t && e > 0 ? null : (this.bump(), Jd(t))
        }, e.prototype.parseArgument = function(e, n) {
          var t = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(md.EXPECT_ARGUMENT_CLOSING_BRACE, Fd(t, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(md.EMPTY_ARGUMENT, Fd(t, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(md.MALFORMED_ARGUMENT, Fd(t, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(md.EXPECT_ARGUMENT_CLOSING_BRACE, Fd(t, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: bd.argument,
                  value: r,
                  location: Fd(t, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(md.EXPECT_ARGUMENT_CLOSING_BRACE, Fd(t, this.clonePosition())) : this.parseArgumentOptions(e, n, r, t);
            default:
              return this.error(md.MALFORMED_ARGUMENT, Fd(t, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            n = this.offset(),
            t = Zd(this.message, n),
            r = n + t.length;
          return this.bumpTo(r), {
            value: t,
            location: Fd(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, n, t, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(md.EXPECT_ARGUMENT_TYPE, Fd(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var u = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var l = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (p = rc(v.val)).length) return this.error(md.EXPECT_ARGUMENT_STYLE, Fd(this.clonePosition(), this.clonePosition()));
                u = {
                  style: p,
                  styleLocation: Fd(l, this.clonePosition())
                }
              }
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var d = Fd(r, this.clonePosition());
              if (u && Qd(null == u ? void 0 : u.style, "::", 0)) {
                var c = tc(u.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(c, u.styleLocation)).err ? v : {
                  val: {
                    type: bd.number,
                    value: t,
                    location: d,
                    style: v.val
                  },
                  err: null
                };
                if (0 === c.length) return this.error(md.EXPECT_DATE_TIME_SKELETON, d);
                var f = c;
                this.locale && (f = function(e, n) {
                  for (var t = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        u = Hd(n);
                      for ("H" != u && "k" != u || (s = 0); s-- > 0;) t += "a";
                      for (; a-- > 0;) t = u + t
                    } else t += "J" === o ? "H" : o
                  }
                  return t
                }(c, this.locale));
                var p = {
                  type: gd.dateTime,
                  pattern: f,
                  location: u.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Bd(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? bd.date : bd.time,
                    value: t,
                    location: d,
                    style: p
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? bd.number : "date" === a ? bd.date : bd.time,
                  value: t,
                  location: d,
                  style: null !== (o = null == u ? void 0 : u.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var h = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(md.EXPECT_SELECT_ARGUMENT_OPTIONS, Fd(h, (0, Tu.__assign)({}, h)));
              this.bumpSpace();
              var y = this.parseIdentifierIfPossible(),
                A = 0;
              if ("select" !== a && "offset" === y.value) {
                if (!this.bumpIf(":")) return this.error(md.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Fd(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(md.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, md.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), y = this.parseIdentifierIfPossible(), A = v.val
              }
              var m, b = this.tryParsePluralOrSelectOptions(e, a, n, y);
              if (b.err) return b;
              if ((m = this.tryParseArgumentClose(r)).err) return m;
              var g = Fd(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: bd.select,
                  value: t,
                  options: ec(b.val),
                  location: g
                },
                err: null
              } : {
                val: {
                  type: bd.plural,
                  value: t,
                  options: ec(b.val),
                  offset: A,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: g
                },
                err: null
              };
            default:
              return this.error(md.INVALID_ARGUMENT_TYPE, Fd(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(md.EXPECT_ARGUMENT_CLOSING_BRACE, Fd(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, n = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var t = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(md.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Fd(t, this.clonePosition()));
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
              for (var n = [], t = 0, r = e.split(xd).filter((function(e) {
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
            return this.error(md.INVALID_NUMBER_SKELETON, n)
          }
          return {
            val: {
              type: gd.number,
              tokens: t,
              location: n,
              parsedOptions: this.shouldParseSkeletons ? Md(t) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, n, t, r) {
          for (var o, i = !1, a = [], s = new Set, u = r.value, l = r.location;;) {
            if (0 === u.length) {
              var d = this.clonePosition();
              if ("select" === n || !this.bumpIf("=")) break;
              var c = this.tryParseDecimalInteger(md.EXPECT_PLURAL_ARGUMENT_SELECTOR, md.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (c.err) return c;
              l = Fd(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset())
            }
            if (s.has(u)) return this.error("select" === n ? md.DUPLICATE_SELECT_ARGUMENT_SELECTOR : md.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === u && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === n ? md.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : md.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Fd(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, n, t);
            if (p.err) return p;
            var h = this.tryParseArgumentClose(f);
            if (h.err) return h;
            a.push([u, {
              value: p.val,
              location: Fd(f, this.clonePosition())
            }]), s.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, l = o.location
          }
          return 0 === a.length ? this.error("select" === n ? md.EXPECT_SELECT_ARGUMENT_SELECTOR : md.EXPECT_PLURAL_ARGUMENT_SELECTOR, Fd(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(md.MISSING_OTHER_CLAUSE, Fd(this.clonePosition(), this.clonePosition())) : {
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
          var s = Fd(r, this.clonePosition());
          return o ? $d(i *= t) ? {
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
          var n = nc(this.message, e);
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
          if (Qd(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && sc(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            n = this.offset(),
            t = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
          return null != t ? t : null
        }
      }();
      var fc = function(e, n, t, r, o) {
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
          if (Array.isArray(v) && 1 === v.length && v[0].type === bd.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !p) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, Tu.__assign)((0, Tu.__assign)({}, p), r || {}), a = cc(a, f), l = cc(l, f), !v) {
            if (!1 === d && "" === v) return v;
            if ((!y || i && i.toLowerCase() !== u.toLowerCase()) && c(new cd(t, i)), y) try {
              return n.getMessageFormat(y, u, l, o).format(r)
            } catch (e) {
              return c(new dd('Error formatting default message for: "'.concat(A, '", rendering default message verbatim'), i, t, e)), "string" == typeof y ? y : A
            }
            return A
          }
          try {
            return n.getMessageFormat(v, i, a, (0, Tu.__assign)({
              formatters: n
            }, o || {})).format(r)
          } catch (e) {
            c(new dd('Error formatting message: "'.concat(A, '", using ').concat(y ? "default message" : "id", " as fallback."), i, t, e))
          }
          if (y) try {
            return n.getMessageFormat(y, u, l, o).format(r)
          } catch (e) {
            c(new dd('Error formatting the default message for: "'.concat(A, '", rendering message verbatim'), i, t, e))
          }
          return "string" == typeof v ? v : "string" == typeof y ? y : A
        },
        pc = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function hc(e, n, t) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === t && (t = {});
        var a = t.format,
          s = a && yd(o, "number", a, i) || {};
        return n(r, fd(t, pc, s))
      }

      function yc(e, n, t, r) {
        void 0 === r && (r = {});
        try {
          return hc(e, n, r).format(t)
        } catch (n) {
          e.onError(new ld("Error formatting number.", e.locale, n))
        }
        return String(t)
      }

      function Ac(e, n, t, r) {
        void 0 === r && (r = {});
        try {
          return hc(e, n, r).formatToParts(t)
        } catch (n) {
          e.onError(new ld("Error formatting number.", e.locale, n))
        }
        return []
      }
      var vc = ["numeric", "style"];

      function mc(e, n, t, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new ql('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Dl.MISSING_INTL_API));
        try {
          return function(e, n, t) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === t && (t = {});
            var a = t.format,
              s = !!a && yd(o, "relative", a, i) || {};
            return n(r, fd(t, vc, s))
          }(e, n, o).format(t, r)
        } catch (n) {
          e.onError(new ld("Error formatting relative time.", e.locale, n))
        }
        return String(t)
      }
      var bc = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function gc(e, n, t, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var u = r.format,
          l = (0, Tu.__assign)((0, Tu.__assign)({}, s && {
            timeZone: s
          }), u && yd(i, n, u, a)),
          d = fd(r, bc, l);
        return "time" !== n || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, Tu.__assign)((0, Tu.__assign)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), t(o, d)
      }

      function _c(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return gc(e, "date", n, a).format(s)
        } catch (n) {
          e.onError(new ld("Error formatting date.", e.locale, n))
        }
        return String(s)
      }

      function Cc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return gc(e, "time", n, a).format(s)
        } catch (n) {
          e.onError(new ld("Error formatting time.", e.locale, n))
        }
        return String(s)
      }

      function Ec(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = t[2],
          s = void 0 === a ? {} : a,
          u = e.timeZone,
          l = e.locale,
          d = e.onError,
          c = fd(s, bc, u ? {
            timeZone: u
          } : {});
        try {
          return n(l, c).formatRange(o, i)
        } catch (n) {
          d(new ld("Error formatting date time range.", e.locale, n))
        }
        return String(o)
      }

      function wc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return gc(e, "date", n, a).formatToParts(s)
        } catch (n) {
          e.onError(new ld("Error formatting date.", e.locale, n))
        }
        return []
      }

      function kc(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var o = t[0],
          i = t[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return gc(e, "time", n, a).formatToParts(s)
        } catch (n) {
          e.onError(new ld("Error formatting time.", e.locale, n))
        }
        return []
      }
      var Bc = ["type"];

      function xc(e, n, t, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new ql('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Dl.MISSING_INTL_API));
        var a = fd(r, Bc);
        try {
          return n(o, a).select(t)
        } catch (e) {
          i(new ld("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Pc = ["type", "style"],
        Sc = Date.now();

      function Tc(e, n, t, r) {
        void 0 === r && (r = {});
        var o = Oc(e, n, t, r).reduce((function(e, n) {
          var t = n.value;
          return "string" != typeof t ? e.push(t) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Oc(e, n, t, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new ql('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Dl.MISSING_INTL_API));
        var a = fd(r, Pc);
        try {
          var s = {},
            u = t.map((function(e, n) {
              if ("object" == typeof e) {
                var t = function(e) {
                  return "".concat(Sc, "_").concat(e, "_").concat(Sc)
                }(n);
                return s[t] = e, t
              }
              return String(e)
            }));
          return n(o, a).formatToParts(u).map((function(e) {
            return "literal" === e.type ? e : (0, Tu.__assign)((0, Tu.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new ld("Error formatting list.", o, e))
        }
        return t
      }
      var Lc = ["style", "type", "fallback", "languageDisplay"];

      function jc(e, n, t, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new ql('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Dl.MISSING_INTL_API));
        var a = fd(r, Lc);
        try {
          return n(o, a).of(t)
        } catch (e) {
          i(new ld("Error formatting display name.", o, e))
        }
      }

      function Nc(e, n) {
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
              o = $l((function() {
                for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Tu.__spreadArray)([void 0], n, !1)))
              }), {
                cache: hd(e.dateTime),
                strategy: od.variadic
              }),
              i = $l((function() {
                for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Tu.__spreadArray)([void 0], n, !1)))
              }), {
                cache: hd(e.number),
                strategy: od.variadic
              }),
              a = $l((function() {
                for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Tu.__spreadArray)([void 0], n, !1)))
              }), {
                cache: hd(e.pluralRules),
                strategy: od.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: $l((function(e, n, t, r) {
                return new Xl(e, n, t, (0, Tu.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: hd(e.message),
                strategy: od.variadic
              }),
              getRelativeTimeFormat: $l((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Tu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: hd(e.relativeTime),
                strategy: od.variadic
              }),
              getPluralRules: a,
              getListFormat: $l((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, Tu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: hd(e.list),
                strategy: od.variadic
              }),
              getDisplayNames: $l((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(r.bind.apply(r, (0, Tu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: hd(e.displayNames),
                strategy: od.variadic
              })
            }
          }(n),
          r = (0, Tu.__assign)((0, Tu.__assign)({}, pd), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new ud('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new ud('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new sd('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, Tu.__assign)((0, Tu.__assign)({}, r), {
            formatters: t,
            formatNumber: yc.bind(null, r, t.getNumberFormat),
            formatNumberToParts: Ac.bind(null, r, t.getNumberFormat),
            formatRelativeTime: mc.bind(null, r, t.getRelativeTimeFormat),
            formatDate: _c.bind(null, r, t.getDateTimeFormat),
            formatDateToParts: wc.bind(null, r, t.getDateTimeFormat),
            formatTime: Cc.bind(null, r, t.getDateTimeFormat),
            formatDateTimeRange: Ec.bind(null, r, t.getDateTimeFormat),
            formatTimeToParts: kc.bind(null, r, t.getDateTimeFormat),
            formatPlural: xc.bind(null, r, t.getPluralRules),
            formatMessage: fc.bind(null, r, t),
            $t: fc.bind(null, r, t),
            formatList: Tc.bind(null, r, t.getListFormat),
            formatListToParts: Oc.bind(null, r, t.getListFormat),
            formatDisplayName: jc.bind(null, r, t.getDisplayNames)
          })
      }

      function Rc(e) {
        return e ? Object.keys(e).reduce((function(n, t) {
          var r, o = e[t];
          return n[t] = Gl(o) ? (r = o, function(e) {
            return r(s.Children.toArray(e))
          }) : o, n
        }), {}) : e
      }
      var Mc = function(e, n, t, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = Rc(r),
            u = fc.apply(void 0, (0, Tu.__spreadArray)([e, n, t, a], o, !1));
          return Array.isArray(u) ? s.Children.toArray(u) : u
        },
        Dc = function(e, n) {
          var t = e.defaultRichTextElements,
            r = (0, Tu.__rest)(e, ["defaultRichTextElements"]),
            o = Rc(t),
            i = Nc((0, Tu.__assign)((0, Tu.__assign)((0, Tu.__assign)({}, vd), r), {
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
          return (0, Tu.__assign)((0, Tu.__assign)({}, i), {
            formatMessage: Mc.bind(null, a, i.formatters),
            $t: Mc.bind(null, a, i.formatters)
          })
        };

      function Ic(e) {
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
      var Hc = function(e) {
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
            intl: Dc(Ic(n.props), n.cache),
            prevConfig: Ic(n.props)
          }, n
        }
        return (0, Tu.__extends)(n, e), n.getDerivedStateFromProps = function(e, n) {
          var t = n.prevConfig,
            r = n.cache,
            o = Ic(e);
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
            intl: Dc(o, r),
            prevConfig: o
          }
        }, n.prototype.render = function() {
          return Ad(this.state.intl), s.createElement(Cd, {
            value: this.state.intl
          }, this.props.children)
        }, n.displayName = "IntlProvider", n.defaultProps = vd, n
      }(s.PureComponent);
      const zc = Hc;

      function qc() {
        var e = s.useContext(Ed);
        return Ad(e), e
      }
      var Fc, Uc;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Fc || (Fc = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Uc || (Uc = {}));
      var Vc = function(e) {
        var n = qc(),
          t = e.value,
          r = e.children,
          o = (0, Tu.__rest)(e, ["value", "children"]);
        return r(n.formatNumberToParts(t, o))
      };

      function Gc(e) {
        var n = function(n) {
          var t = qc(),
            r = n.value,
            o = n.children,
            i = (0, Tu.__rest)(n, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? t.formatDateToParts(a, i) : t.formatTimeToParts(a, i))
        };
        return n.displayName = Uc[e], n
      }

      function Kc(e) {
        var n = function(n) {
          var t = qc(),
            r = n.value,
            o = n.children,
            i = (0, Tu.__rest)(n, ["value", "children"]),
            a = t[e](r, i);
          if ("function" == typeof o) return o(a);
          var u = t.textComponent || s.Fragment;
          return s.createElement(u, null, a)
        };
        return n.displayName = Fc[e], n
      }
      Vc.displayName = "FormattedNumberParts", Vc.displayName = "FormattedNumberParts", Kc("formatDate"), Kc("formatTime"), Kc("formatNumber"), Kc("formatList"), Kc("formatDisplayName"), Gc("formatDate"), Gc("formatTime");
      const Wc = ({
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
          }), [t]), o ? (0, i.jsx)(zc, {
            locale: t,
            messages: o,
            children: e
          }) : r || null
        },
        Xc = {
          id: "Lightbox_Open_Button_Label"
        },
        $c = {
          id: "Lightbox_Dialog_Title"
        },
        Yc = {
          id: "Lightbox_Dialog_Description"
        },
        Zc = {
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
      var Qc = t(74487);
      const Jc = (e, n) => {
        const t = "more" === n ? Qc.xW.lightHc : Qc.xW.light,
          r = "more" === n ? Qc.xW.darkHc : Qc.xW.dark;
        return "dark" === e ? r : t
      };

      function ef(e, [n, t]) {
        return Math.min(t, Math.max(n, e))
      }

      function nf(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function tf(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function rf(e, n = []) {
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
        }, of(r, ...n)]
      }

      function of(...e) {
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

      function af(e) {
        const n = s.useRef(e);
        return s.useEffect((() => {
          n.current = e
        })), s.useMemo((() => (...e) => n.current?.(...e)), [])
      }

      function sf({
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
            i = af(n);
          return s.useEffect((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), t
        }({
          defaultProp: n,
          onChange: t
        }), i = void 0 !== e, a = i ? e : r, u = af(t);
        return [a, s.useCallback((n => {
          if (i) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && u(t)
          } else o(n)
        }), [i, e, o, u])]
      }
      var uf = s.createContext(void 0);

      function lf(e) {
        const n = s.useContext(uf);
        return e || n || "ltr"
      }

      function df(e) {
        const n = s.useRef({
          value: e,
          previous: e
        });
        return s.useMemo((() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous)), [e])
      }
      var cf = Boolean(globalThis?.document) ? s.useLayoutEffect : () => {};

      function ff(e) {
        const [n, t] = s.useState(void 0);
        return cf((() => {
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
      var pf = t(11735),
        hf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? pf.DX : n;
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
        yf = ["PageUp", "PageDown"],
        Af = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        vf = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        mf = "Slider",
        [bf, gf, _f] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = rf(n),
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
              } = e, o = tf(n, a(l, t).collectionRef);
              return (0, i.jsx)(pf.DX, {
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
              } = e, u = s.useRef(null), l = tf(n, u), d = a(c, t);
              return s.useEffect((() => (d.itemMap.set(u, {
                ref: u,
                ...o
              }), () => {
                d.itemMap.delete(u)
              }))), (0, i.jsx)(pf.DX, {
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
        }(mf),
        [Cf, Ef] = rf(mf, [_f]),
        [wf, kf] = Cf(mf),
        Bf = s.forwardRef(((e, n) => {
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
          } = e, v = s.useRef(new Set), m = s.useRef(0), b = "horizontal" === u ? Sf : Tf, [g = [], _] = sf({
            prop: f,
            defaultProp: c,
            onChange: e => {
              const n = [...v.current];
              n[m.current]?.focus(), p(e)
            }
          }), C = s.useRef(g);

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
              u = ef(s, [r, o]);
            _(((e = []) => {
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
          return (0, i.jsx)(wf, {
            scope: e.__scopeSlider,
            name: t,
            disabled: l,
            min: r,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: v.current,
            values: g,
            orientation: u,
            children: (0, i.jsx)(bf.Provider, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(bf.Slot, {
                scope: e.__scopeSlider,
                children: (0, i.jsx)(b, {
                  "aria-disabled": l,
                  "data-disabled": l ? "" : void 0,
                  ...A,
                  ref: n,
                  onPointerDown: nf(A.onPointerDown, (() => {
                    l || (C.current = g)
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
                    const e = C.current[m.current];
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
                      const t = yf.includes(e.key) || e.shiftKey && Af.includes(e.key) ? 10 : 1,
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
      Bf.displayName = mf;
      var [xf, Pf] = Cf(mf, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Sf = s.forwardRef(((e, n) => {
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
        } = e, [p, h] = s.useState(null), y = tf(n, (e => h(e))), A = s.useRef(), v = lf(o), m = "ltr" === v, b = m && !a || !m && a;

        function g(e) {
          const n = A.current || p.getBoundingClientRect(),
            o = qf([0, n.width], b ? [t, r] : [r, t]);
          return A.current = n, o(e - n.left)
        }
        return (0, i.jsx)(xf, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, i.jsx)(Of, {
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
              const n = vf[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: n ? -1 : 1
              })
            }
          })
        })
      })), Tf = s.forwardRef(((e, n) => {
        const {
          min: t,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: u,
          onSlideEnd: l,
          onStepKeyDown: d,
          ...c
        } = e, f = s.useRef(null), p = tf(n, f), h = s.useRef(), y = !o;

        function A(e) {
          const n = h.current || f.current.getBoundingClientRect(),
            o = qf([0, n.height], y ? [r, t] : [t, r]);
          return h.current = n, o(e - n.top)
        }
        return (0, i.jsx)(xf, {
          scope: e.__scopeSlider,
          startEdge: y ? "bottom" : "top",
          endEdge: y ? "top" : "bottom",
          size: "height",
          direction: y ? 1 : -1,
          children: (0, i.jsx)(Of, {
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
              const n = vf[y ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: n ? -1 : 1
              })
            }
          })
        })
      })), Of = s.forwardRef(((e, n) => {
        const {
          __scopeSlider: t,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: u,
          onStepKeyDown: l,
          ...d
        } = e, c = kf(mf, t);
        return (0, i.jsx)(hf.span, {
          ...d,
          ref: n,
          onKeyDown: nf(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (u(e), e.preventDefault()) : yf.concat(Af).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: nf(e.onPointerDown, (e => {
            const n = e.target;
            n.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(n) ? n.focus() : r(e)
          })),
          onPointerMove: nf(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: nf(e.onPointerUp, (e => {
            const n = e.target;
            n.hasPointerCapture(e.pointerId) && (n.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), Lf = "SliderTrack", jf = s.forwardRef(((e, n) => {
        const {
          __scopeSlider: t,
          ...r
        } = e, o = kf(Lf, t);
        return (0, i.jsx)(hf.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: n
        })
      }));
      jf.displayName = Lf;
      var Nf = "SliderRange",
        Rf = s.forwardRef(((e, n) => {
          const {
            __scopeSlider: t,
            ...r
          } = e, o = kf(Nf, t), a = Pf(Nf, t), u = tf(n, s.useRef(null)), l = o.values.length, d = o.values.map((e => zf(e, o.min, o.max))), c = l > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
          return (0, i.jsx)(hf.span, {
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
      Rf.displayName = Nf;
      var Mf = "SliderThumb",
        Df = s.forwardRef(((e, n) => {
          const t = gf(e.__scopeSlider),
            [r, o] = s.useState(null),
            a = tf(n, (e => o(e))),
            u = s.useMemo((() => r ? t().findIndex((e => e.ref.current === r)) : -1), [t, r]);
          return (0, i.jsx)(If, {
            ...e,
            ref: a,
            index: u
          })
        })),
        If = s.forwardRef(((e, n) => {
          const {
            __scopeSlider: t,
            index: r,
            name: o,
            ...a
          } = e, u = kf(Mf, t), l = Pf(Mf, t), [d, c] = s.useState(null), f = tf(n, (e => c(e))), p = !d || Boolean(d.closest("form")), h = ff(d), y = u.values[r], A = void 0 === y ? 0 : zf(y, u.min, u.max), v = function(e, n) {
            return n > 2 ? `Value ${e+1} of ${n}` : 2 === n ? ["Minimum", "Maximum"][e] : void 0
          }(r, u.values.length), m = h?.[l.size], b = m ? function(e, n, t) {
            const r = e / 2;
            return (r - qf([0, 50], [0, r])(n) * t) * t
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
            children: [(0, i.jsx)(bf.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(hf.span, {
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
                onFocus: nf(e.onFocus, (() => {
                  u.valueIndexToChangeRef.current = r
                }))
              })
            }), p && (0, i.jsx)(Hf, {
              name: o ?? (u.name ? u.name + (u.values.length > 1 ? "[]" : "") : void 0),
              value: y
            }, r)]
          })
        }));
      Df.displayName = Mf;
      var Hf = e => {
        const {
          value: n,
          ...t
        } = e, r = s.useRef(null), o = df(n);
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

      function zf(e, n, t) {
        return ef(100 / (t - n) * (e - n), [0, 100])
      }

      function qf(e, n) {
        return t => {
          if (e[0] === e[1] || n[0] === n[1]) return n[0];
          const r = (n[1] - n[0]) / (e[1] - e[0]);
          return n[0] + r * (t - e[0])
        }
      }
      var Ff = Bf,
        Uf = jf,
        Vf = Rf,
        Gf = Df;
      const Kf = {
          id: "Lightbox_Close_Button_Label"
        },
        Wf = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Xf = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        $f = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Yf = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Zf = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Qf = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Jf = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        ep = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        np = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        tp = {
          id: "Lightbox_Download_Button_Label"
        },
        rp = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function op() {
        return op = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, op.apply(this, arguments)
      }
      var ip = ["shift", "alt", "meta", "mod", "ctrl"],
        ap = {
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

      function sp(e) {
        return (ap[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function up(e, n) {
        return void 0 === n && (n = ","), e.split(n)
      }

      function lp(e, n, t) {
        void 0 === n && (n = "+");
        var r = e.toLocaleLowerCase().split(n).map((function(e) {
          return sp(e)
        }));
        return op({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !ip.includes(e)
          })),
          description: t
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && fp([sp(e.key), sp(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && pp([sp(e.key), sp(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        dp.clear()
      }));
      var dp = new Set;

      function cp(e) {
        return Array.isArray(e)
      }

      function fp(e) {
        var n = Array.isArray(e) ? e : [e];
        dp.has("meta") && dp.forEach((function(e) {
          return ! function(e) {
            return ip.includes(e)
          }(e) && dp.delete(e.toLowerCase())
        })), n.forEach((function(e) {
          return dp.add(e.toLowerCase())
        }))
      }

      function pp(e) {
        var n = Array.isArray(e) ? e : [e];
        "meta" === e ? dp.clear() : n.forEach((function(e) {
          return dp.delete(e.toLowerCase())
        }))
      }

      function hp(e, n) {
        var t = e.target;
        void 0 === n && (n = !1);
        var r = t && t.tagName;
        return cp(n) ? Boolean(r && n && n.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && n && !0 === n)
      }
      var yp = (0, s.createContext)(void 0);

      function Ap(e) {
        var n = e.addHotkey,
          t = e.removeHotkey,
          r = e.children;
        return (0, i.jsx)(yp.Provider, {
          value: {
            addHotkey: n,
            removeHotkey: t
          },
          children: r
        })
      }

      function vp(e, n) {
        return e && n && "object" == typeof e && "object" == typeof n ? Object.keys(e).length === Object.keys(n).length && Object.keys(e).reduce((function(t, r) {
          return t && vp(e[r], n[r])
        }), !0) : e === n
      }
      var mp = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        bp = function(e) {
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
                  return !vp(n, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(mp.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: d,
              enableScope: f,
              disableScope: p,
              toggleScope: h
            },
            children: (0, i.jsx)(Ap, {
              addHotkey: y,
              removeHotkey: A,
              children: r
            })
          })
        },
        gp = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        _p = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function Cp(e, n, t, r) {
        var o = (0, s.useRef)(null),
          i = (0, s.useRef)(!1),
          a = t instanceof Array ? r instanceof Array ? void 0 : r : t,
          u = cp(e) ? e.join(null == a ? void 0 : a.splitKey) : e,
          l = t instanceof Array ? t : r instanceof Array ? r : void 0,
          d = (0, s.useCallback)(n, null != l ? l : []),
          c = (0, s.useRef)(d);
        c.current = l ? d : n;
        var f = function(e) {
            var n = (0, s.useRef)(void 0);
            return vp(n.current, e) || (n.current = e), n.current
          }(a),
          p = (0, s.useContext)(mp).enabledScopes,
          h = (0, s.useContext)(yp);
        return _p((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = p, n = null == f ? void 0 : f.scopes, 0 === e.length && n ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !n || e.some((function(e) {
              return n.includes(e)
            })) || e.includes("*"))) {
            var e, n, t = function(e, n) {
                var t;
                if (void 0 === n && (n = !1), !hp(e, ["input", "textarea", "select"]) || hp(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var r = o.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== o.current && !o.current.contains(r.activeElement)) return void gp(e)
                  }(null == (t = e.target) || !t.isContentEditable || null != f && f.enableOnContentEditable) && up(u, null == f ? void 0 : f.splitKey).forEach((function(t) {
                    var r, o = lp(t, null == f ? void 0 : f.combinationKey);
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
                          v = sp(f),
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
                        return !(!d || 1 !== d.length || !d.includes(m) && !d.includes(v)) || (d ? (void 0 === o && (o = ","), (cp(r = d) ? r : r.split(o)).every((function(e) {
                          return dp.has(e.trim().toLowerCase())
                        }))) : !d)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (n && i.current) return;
                      if (function(e, n, t) {
                          ("function" == typeof t && t(e, n) || !0 === t) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, n, t) {
                          return "function" == typeof t ? t(e, n) : !0 === t || void 0 === t
                        }(e, o, null == f ? void 0 : f.enabled)) return void gp(e);
                      c.current(e, o), n || (i.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (fp(sp(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && t(e))
              },
              s = function(e) {
                void 0 !== e.key && (pp(sp(e.code)), i.current = !1, null != f && f.keyup && t(e, !0))
              },
              l = o.current || (null == a ? void 0 : a.document) || document;
            return l.addEventListener("keyup", s), l.addEventListener("keydown", r), h && up(u, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return h.addHotkey(lp(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                l.removeEventListener("keyup", s), l.removeEventListener("keydown", r), h && up(u, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return h.removeHotkey(lp(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [u, f, p]), o
      }
      var Ep = t(40492),
        wp = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function kp(e) {
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

      function Bp(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function xp(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Bp(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = kp(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bp(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Pp(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      wp.setAttributes = A(), wp.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, wp.domAPI = h(), wp.insertStyleElement = m(), f()(Ep.A, wp), Ep.A && Ep.A.locals && Ep.A.locals;
      var Sp = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Tp = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = xp(xp({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Sp(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pp(e.variantClassNames, (e => Pp(e, (e => e.split(" ")[0]))))
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
      const Op = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Lp = (0, s.forwardRef)((({
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
            v = (0, jn.UP)(A, y),
            {
              events: m,
              others: b
            } = (0, a.bZ)(h, {
              onPress: !1
            }),
            {
              buttonProps: g,
              isPressed: _
            } = or({
              ...b,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => b.onPress?.(e) ?? f?.(e)
            }, A),
            C = (0, a.v6)({
              ...g,
              className: t
            }, {
              ...m,
              role: "button",
              "data-pressed": _,
              "data-testid": e,
              className: Tp({
                appearance: u,
                size: l,
                fullWidth: c
              })
            }),
            E = Ce[r],
            w = n ? d.DX : "button",
            k = Op[l];
          return (0, i.jsxs)(w, {
            ref: v,
            ...C,
            children: [E && (0, i.jsx)(E, {
              label: o || "",
              size: k
            }), (0, i.jsx)(d.xV, {
              children: p
            })]
          })
        }));
      var jp = t(86845),
        Np = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      Np.setAttributes = A(), Np.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, Np.domAPI = h(), Np.insertStyleElement = m(), f()(jp.A, Np), jp.A && jp.A.locals && jp.A.locals;
      const Rp = (0, s.forwardRef)((({
        shortcut: e,
        isInline: n,
        onShortcut: t
      }, r) => (Cp(e, (e => t?.(e)), [t]), (0, i.jsx)(te, {
        className: (0, Ke.$)("foundry_bc732x0", {
          foundry_bc732x1: n
        }),
        asChild: !0,
        children: (0, i.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));
      var Mp = /^--/;

      function Dp(e, n) {
        return null == n || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || Mp.test(e) || Hp.hasOwnProperty(e) && Hp[e] ? ("" + n).trim() : n + "px"
      }
      var Ip = {},
        Hp = {
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
        zp = ["Webkit", "Ms", "Moz", "O"];
      Hp = Object.keys(Hp).reduce(((e, n) => (zp.forEach((t => e[((e, n) => e + n.charAt(0).toUpperCase() + n.substring(1))(t, n)] = e[n])), e)), Hp);
      var qp = /^(matrix|translate|scale|rotate|skew)/,
        Fp = /^(translate)/,
        Up = /^(rotate|skew)/,
        Vp = (e, n) => Xo.num(e) && 0 !== e ? e + n : e,
        Gp = (e, n) => Xo.arr(e) ? e.every((e => Gp(e, n))) : Xo.num(e) ? e === n : parseFloat(e) === n,
        Kp = class extends Ta {
          constructor({
            x: e,
            y: n,
            z: t,
            ...r
          }) {
            const o = [],
              i = [];
            (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((e => [`translate3d(${e.map((e=>Vp(e,"px"))).join(",")})`, Gp(e, 0)]))), Zo(r, ((e, n) => {
              if ("transform" === n) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (qp.test(n)) {
                if (delete r[n], Xo.und(e)) return;
                const t = Fp.test(n) ? "px" : Up.test(n) ? "deg" : "";
                o.push(Qo(e)), i.push("rotate3d" === n ? ([e, n, r, o]) => [`rotate3d(${e},${n},${r},${Vp(o,t)})`, Gp(o, 0)] : e => [`${n}(${e.map((e=>Vp(e,t))).join(",")})`, Gp(e, n.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new Wp(o, i)), super(r)
          }
        },
        Wp = class extends Yi {
          constructor(e, n) {
            super(), this.inputs = e, this.transforms = n, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              n = !0;
            return Yo(this.inputs, ((t, r) => {
              const o = Wi(t[0]),
                [i, a] = this.transforms[r](Xo.arr(o) ? o : t.map(Wi));
              e += " " + i, n = n && a
            })), n ? "none" : e
          }
          observerAdded(e) {
            1 == e && Yo(this.inputs, (e => Yo(e, (e => Ki(e) && Qi(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Yo(this.inputs, (e => Yo(e, (e => Ki(e) && Ji(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), $i(this, e)
          }
        };
      Ko.assign({
        batchedUpdates: nu.unstable_batchedUpdates,
        createStringInterpolator: da,
        colors: vi
      });
      var Xp = Da(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
              c = Object.keys(l).map((n => t || e.hasAttribute(n) ? n : Ip[n] || (Ip[n] = n.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const n in o)
              if (o.hasOwnProperty(n)) {
                const t = Dp(n, o[n]);
                Mp.test(n) ? e.style.setProperty(n, t) : e.style[n] = t
              } c.forEach(((n, t) => {
              e.setAttribute(n, d[t])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== u && e.setAttribute("viewBox", u)
          },
          createAnimatedStyle: e => new Kp(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: n,
            ...t
          }) => t
        }).animated,
        $p = t(95923),
        Yp = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function Zp(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function Qp(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function Jp(...e) {
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
      Yp.setAttributes = A(), Yp.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, Yp.domAPI = h(), Yp.insertStyleElement = m(), f()($p.A, Yp), $p.A && $p.A.locals && $p.A.locals;
      var eh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
        const t = s.forwardRef(((e, t) => {
          const {
            asChild: r,
            ...o
          } = e, a = r ? pf.DX : n;
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

      function nh(e, n = globalThis?.document) {
        const t = af(e);
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
      var th, rh = "dismissableLayer.update",
        oh = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        ih = s.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...d
          } = e, c = s.useContext(oh), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, y] = s.useState({}), A = Qp(n, (e => p(e))), v = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = f ? v.indexOf(f) : -1, _ = c.layersWithOutsidePointerEventsDisabled.size > 0, C = g >= b, E = function(e, n = globalThis?.document) {
            const t = af(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      sh("dismissableLayer.pointerDownOutside", t, i, {
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
            C && !t && (o?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h), w = function(e, n = globalThis?.document) {
            const t = af(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && sh("dismissableLayer.focusOutside", t, {
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
          return nh((e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          }), h), s.useEffect((() => {
            if (f) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (th = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), ah(), () => {
              t && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = th)
            }
          }), [f, h, t, c]), s.useEffect((() => () => {
            f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), ah())
          }), [f, c]), s.useEffect((() => {
            const e = () => y({});
            return document.addEventListener(rh, e), () => document.removeEventListener(rh, e)
          }), []), (0, i.jsx)(eh.div, {
            ...d,
            ref: A,
            style: {
              pointerEvents: _ ? C ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Zp(e.onFocusCapture, w.onFocusCapture),
            onBlurCapture: Zp(e.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: Zp(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function ah() {
        const e = new CustomEvent(rh);
        document.dispatchEvent(e)
      }

      function sh(e, n, t, {
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
          e && nu.flushSync((() => e.dispatchEvent(n)))
        }(o, i) : o.dispatchEvent(i)
      }
      ih.displayName = "DismissableLayer", s.forwardRef(((e, n) => {
        const t = s.useContext(oh),
          r = s.useRef(null),
          o = Qp(n, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, i.jsx)(eh.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var uh = u["useId".toString()] || (() => {}),
        lh = 0;

      function dh(e) {
        const [n, t] = s.useState(uh());
        return cf((() => {
          e || t((e => e ?? String(lh++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const ch = ["top", "right", "bottom", "left"],
        fh = Math.min,
        ph = Math.max,
        hh = Math.round,
        yh = Math.floor,
        Ah = e => ({
          x: e,
          y: e
        }),
        vh = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        mh = {
          start: "end",
          end: "start"
        };

      function bh(e, n, t) {
        return ph(e, fh(n, t))
      }

      function gh(e, n) {
        return "function" == typeof e ? e(n) : e
      }

      function _h(e) {
        return e.split("-")[0]
      }

      function Ch(e) {
        return e.split("-")[1]
      }

      function Eh(e) {
        return "x" === e ? "y" : "x"
      }

      function wh(e) {
        return "y" === e ? "height" : "width"
      }

      function kh(e) {
        return ["top", "bottom"].includes(_h(e)) ? "y" : "x"
      }

      function Bh(e) {
        return Eh(kh(e))
      }

      function xh(e) {
        return e.replace(/start|end/g, (e => mh[e]))
      }

      function Ph(e) {
        return e.replace(/left|right|bottom|top/g, (e => vh[e]))
      }

      function Sh(e) {
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

      function Th(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }

      function Oh(e, n, t) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = kh(n),
          a = Bh(n),
          s = wh(a),
          u = _h(n),
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
        switch (Ch(n)) {
          case "start":
            p[a] -= f * (t && l ? -1 : 1);
            break;
          case "end":
            p[a] += f * (t && l ? -1 : 1)
        }
        return p
      }
      async function Lh(e, n) {
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
        } = gh(n, e), h = Sh(p), y = s[f ? "floating" === c ? "reference" : "floating" : c], A = Th(await i.getClippingRect({
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
        }, g = Th(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
      const jh = e => ({
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
            } = gh(e, n) || {};
            if (null == l) return {};
            const c = Sh(d),
              f = {
                x: t,
                y: r
              },
              p = Bh(o),
              h = wh(p),
              y = await a.getDimensions(l),
              A = "y" === p,
              v = A ? "top" : "left",
              m = A ? "bottom" : "right",
              b = A ? "clientHeight" : "clientWidth",
              g = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              _ = f[p] - i.reference[p],
              C = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(l));
            let E = C ? C[b] : 0;
            E && await (null == a.isElement ? void 0 : a.isElement(C)) || (E = s.floating[b] || i.floating[h]);
            const w = g / 2 - _ / 2,
              k = E / 2 - y[h] / 2 - 1,
              B = fh(c[v], k),
              x = fh(c[m], k),
              P = B,
              S = E - y[h] - x,
              T = E / 2 - y[h] / 2 + w,
              O = bh(P, T, S),
              L = !u.arrow && null != Ch(o) && T != O && i.reference[h] / 2 - (T < P ? B : x) - y[h] / 2 < 0,
              j = L ? T < P ? T - P : T - S : 0;
            return {
              [p]: f[p] + j,
              data: {
                [p]: O,
                centerOffset: T - O - j,
                ...L && {
                  alignmentOffset: j
                }
              },
              reset: L
            }
          }
        }),
        Nh = function(e) {
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
              } = gh(e, n);
              if (null != (t = i.arrow) && t.alignmentOffset) return {};
              const v = _h(o),
                m = _h(s) === s,
                b = await (null == u.isRTL ? void 0 : u.isRTL(l.floating)),
                g = f || (m || !y ? [Ph(s)] : function(e) {
                  const n = Ph(e);
                  return [xh(e), n, xh(n)]
                }(s));
              f || "none" === h || g.push(... function(e, n, t, r) {
                const o = Ch(e);
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
                }(_h(e), "start" === t, r);
                return o && (i = i.map((e => e + "-" + o)), n && (i = i.concat(i.map(xh)))), i
              }(s, y, h, b));
              const _ = [s, ...g],
                C = await Lh(n, A),
                E = [];
              let w = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (d && E.push(C[v]), c) {
                const e = function(e, n, t) {
                  void 0 === t && (t = !1);
                  const r = Ch(e),
                    o = Bh(e),
                    i = wh(o);
                  let a = "x" === o ? r === (t ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return n.reference[i] > n.floating[i] && (a = Ph(a)), [a, Ph(a)]
                }(o, a, b);
                E.push(C[e[0]], C[e[1]])
              }
              if (w = [...w, {
                  placement: o,
                  overflows: E
                }], !E.every((e => e <= 0))) {
                var k, B;
                const e = ((null == (k = i.flip) ? void 0 : k.index) || 0) + 1,
                  n = _[e];
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

      function Rh(e, n) {
        return {
          top: e.top - n.height,
          right: e.right - n.width,
          bottom: e.bottom - n.height,
          left: e.left - n.width
        }
      }

      function Mh(e) {
        return ch.some((n => e[n] >= 0))
      }
      const Dh = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(n) {
              const {
                rects: t
              } = n, {
                strategy: r = "referenceHidden",
                ...o
              } = gh(e, n);
              switch (r) {
                case "referenceHidden": {
                  const e = Rh(await Lh(n, {
                    ...o,
                    elementContext: "reference"
                  }), t.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: Mh(e)
                    }
                  }
                }
                case "escaped": {
                  const e = Rh(await Lh(n, {
                    ...o,
                    altBoundary: !0
                  }), t.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: Mh(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Ih = function(e) {
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
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = _h(t), s = Ch(t), u = "y" === kh(t), l = ["left", "top"].includes(a) ? -1 : 1, d = i && u ? -1 : 1, c = gh(n, e);
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
        Hh = function(e) {
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
              } = gh(e, n), l = {
                x: t,
                y: r
              }, d = await Lh(n, u), c = kh(_h(o)), f = Eh(c);
              let p = l[f],
                h = l[c];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                p = bh(p + d["y" === f ? "top" : "left"], p, p - d[e])
              }
              if (a) {
                const e = "y" === c ? "bottom" : "right";
                h = bh(h + d["y" === c ? "top" : "left"], h, h - d[e])
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
        zh = function(e) {
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
              } = gh(e, n), d = {
                x: t,
                y: r
              }, c = kh(o), f = Eh(c);
              let p = d[f],
                h = d[c];
              const y = gh(s, n),
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
                  n = ["top", "left"].includes(_h(o)),
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
        qh = function(e) {
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
              } = gh(e, n), u = await Lh(n, s), l = _h(t), d = Ch(t), c = "y" === kh(t), {
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
                g = d || m ? fh(v, e) : e
              } else {
                const e = p - u.top - u.bottom;
                b = d || m ? fh(A, e) : e
              }
              if (m && !d) {
                const e = ph(u.left, 0),
                  n = ph(u.right, 0),
                  t = ph(u.top, 0),
                  r = ph(u.bottom, 0);
                c ? g = f - 2 * (0 !== e || 0 !== n ? e + n : ph(u.left, u.right)) : b = p - 2 * (0 !== t || 0 !== r ? t + r : ph(u.top, u.bottom))
              }
              await a({
                ...n,
                availableWidth: g,
                availableHeight: b
              });
              const _ = await o.getDimensions(i.floating);
              return f !== _.width || p !== _.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        };

      function Fh(e) {
        return Gh(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Uh(e) {
        var n;
        return (null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView) || window
      }

      function Vh(e) {
        var n;
        return null == (n = (Gh(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : n.documentElement
      }

      function Gh(e) {
        return e instanceof Node || e instanceof Uh(e).Node
      }

      function Kh(e) {
        return e instanceof Element || e instanceof Uh(e).Element
      }

      function Wh(e) {
        return e instanceof HTMLElement || e instanceof Uh(e).HTMLElement
      }

      function Xh(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof Uh(e).ShadowRoot)
      }

      function $h(e) {
        const {
          overflow: n,
          overflowX: t,
          overflowY: r,
          display: o
        } = ey(e);
        return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !["inline", "contents"].includes(o)
      }

      function Yh(e) {
        return ["table", "td", "th"].includes(Fh(e))
      }

      function Zh(e) {
        const n = Qh(),
          t = ey(e);
        return "none" !== t.transform || "none" !== t.perspective || !!t.containerType && "normal" !== t.containerType || !n && !!t.backdropFilter && "none" !== t.backdropFilter || !n && !!t.filter && "none" !== t.filter || ["transform", "perspective", "filter"].some((e => (t.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (t.contain || "").includes(e)))
      }

      function Qh() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function Jh(e) {
        return ["html", "body", "#document"].includes(Fh(e))
      }

      function ey(e) {
        return Uh(e).getComputedStyle(e)
      }

      function ny(e) {
        return Kh(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function ty(e) {
        if ("html" === Fh(e)) return e;
        const n = e.assignedSlot || e.parentNode || Xh(e) && e.host || Vh(e);
        return Xh(n) ? n.host : n
      }

      function ry(e) {
        const n = ty(e);
        return Jh(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Wh(n) && $h(n) ? n : ry(n)
      }

      function oy(e, n, t) {
        var r;
        void 0 === n && (n = []), void 0 === t && (t = !0);
        const o = ry(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = Uh(o);
        return i ? n.concat(a, a.visualViewport || [], $h(o) ? o : [], a.frameElement && t ? oy(a.frameElement) : []) : n.concat(o, oy(o, [], t))
      }

      function iy(e) {
        const n = ey(e);
        let t = parseFloat(n.width) || 0,
          r = parseFloat(n.height) || 0;
        const o = Wh(e),
          i = o ? e.offsetWidth : t,
          a = o ? e.offsetHeight : r,
          s = hh(t) !== i || hh(r) !== a;
        return s && (t = i, r = a), {
          width: t,
          height: r,
          $: s
        }
      }

      function ay(e) {
        return Kh(e) ? e : e.contextElement
      }

      function sy(e) {
        const n = ay(e);
        if (!Wh(n)) return Ah(1);
        const t = n.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = iy(n);
        let a = (i ? hh(t.width) : t.width) / r,
          s = (i ? hh(t.height) : t.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const uy = Ah(0);

      function ly(e) {
        const n = Uh(e);
        return Qh() && n.visualViewport ? {
          x: n.visualViewport.offsetLeft,
          y: n.visualViewport.offsetTop
        } : uy
      }

      function dy(e, n, t, r) {
        void 0 === n && (n = !1), void 0 === t && (t = !1);
        const o = e.getBoundingClientRect(),
          i = ay(e);
        let a = Ah(1);
        n && (r ? Kh(r) && (a = sy(r)) : a = sy(e));
        const s = function(e, n, t) {
          return void 0 === n && (n = !1), !(!t || n && t !== Uh(e)) && n
        }(i, t, r) ? ly(i) : Ah(0);
        let u = (o.left + s.x) / a.x,
          l = (o.top + s.y) / a.y,
          d = o.width / a.x,
          c = o.height / a.y;
        if (i) {
          const e = Uh(i),
            n = r && Kh(r) ? Uh(r) : r;
          let t = e.frameElement;
          for (; t && r && n !== e;) {
            const e = sy(t),
              n = t.getBoundingClientRect(),
              r = ey(t),
              o = n.left + (t.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = n.top + (t.clientTop + parseFloat(r.paddingTop)) * e.y;
            u *= e.x, l *= e.y, d *= e.x, c *= e.y, u += o, l += i, t = Uh(t).frameElement
          }
        }
        return Th({
          width: d,
          height: c,
          x: u,
          y: l
        })
      }

      function cy(e) {
        return dy(Vh(e)).left + ny(e).scrollLeft
      }

      function fy(e, n, t) {
        let r;
        if ("viewport" === n) r = function(e, n) {
          const t = Uh(e),
            r = Vh(e),
            o = t.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            u = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = Qh();
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
          const n = Vh(e),
            t = ny(e),
            r = e.ownerDocument.body,
            o = ph(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth),
            i = ph(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -t.scrollLeft + cy(e);
          const s = -t.scrollTop;
          return "rtl" === ey(r).direction && (a += ph(n.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(Vh(e));
        else if (Kh(n)) r = function(e, n) {
          const t = dy(e, !0, "fixed" === n),
            r = t.top + e.clientTop,
            o = t.left + e.clientLeft,
            i = Wh(e) ? sy(e) : Ah(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(n, t);
        else {
          const t = ly(e);
          r = {
            ...n,
            x: n.x - t.x,
            y: n.y - t.y
          }
        }
        return Th(r)
      }

      function py(e, n) {
        const t = ty(e);
        return !(t === n || !Kh(t) || Jh(t)) && ("fixed" === ey(t).position || py(t, n))
      }

      function hy(e, n, t) {
        const r = Wh(n),
          o = Vh(n),
          i = "fixed" === t,
          a = dy(e, !0, i, n);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const u = Ah(0);
        if (r || !r && !i)
          if (("body" !== Fh(n) || $h(o)) && (s = ny(n)), r) {
            const e = dy(n, !0, i, n);
            u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
          } else o && (u.x = cy(o));
        return {
          x: a.left + s.scrollLeft - u.x,
          y: a.top + s.scrollTop - u.y,
          width: a.width,
          height: a.height
        }
      }

      function yy(e, n) {
        return Wh(e) && "fixed" !== ey(e).position ? n ? n(e) : e.offsetParent : null
      }

      function Ay(e, n) {
        const t = Uh(e);
        if (!Wh(e)) return t;
        let r = yy(e, n);
        for (; r && Yh(r) && "static" === ey(r).position;) r = yy(r, n);
        return r && ("html" === Fh(r) || "body" === Fh(r) && "static" === ey(r).position && !Zh(r)) ? t : r || function(e) {
          let n = ty(e);
          for (; Wh(n) && !Jh(n);) {
            if (Zh(n)) return n;
            n = ty(n)
          }
          return null
        }(e) || t
      }
      const vy = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: n,
            offsetParent: t,
            strategy: r
          } = e;
          const o = Wh(t),
            i = Vh(t);
          if (t === i) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            s = Ah(1);
          const u = Ah(0);
          if ((o || !o && "fixed" !== r) && (("body" !== Fh(t) || $h(i)) && (a = ny(t)), Wh(t))) {
            const e = dy(t);
            s = sy(t), u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
          }
          return {
            width: n.width * s.x,
            height: n.height * s.y,
            x: n.x * s.x - a.scrollLeft * s.x + u.x,
            y: n.y * s.y - a.scrollTop * s.y + u.y
          }
        },
        getDocumentElement: Vh,
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
              let r = oy(e, [], !1).filter((e => Kh(e) && "body" !== Fh(e))),
                o = null;
              const i = "fixed" === ey(e).position;
              let a = i ? ty(e) : e;
              for (; Kh(a) && !Jh(a);) {
                const n = ey(a),
                  t = Zh(a);
                t || "fixed" !== n.position || (o = null), (i ? !t && !o : !t && "static" === n.position && o && ["absolute", "fixed"].includes(o.position) || $h(a) && !t && py(e, a)) ? r = r.filter((e => e !== a)) : o = n, a = ty(a)
              }
              return n.set(e, r), r
            }(n, this._c) : [].concat(t), r],
            a = i[0],
            s = i.reduce(((e, t) => {
              const r = fy(n, t, o);
              return e.top = ph(r.top, e.top), e.right = fh(r.right, e.right), e.bottom = fh(r.bottom, e.bottom), e.left = ph(r.left, e.left), e
            }), fy(n, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Ay,
        getElementRects: async function(e) {
          let {
            reference: n,
            floating: t,
            strategy: r
          } = e;
          const o = this.getOffsetParent || Ay,
            i = this.getDimensions;
          return {
            reference: hy(n, await o(t), r),
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
          return iy(e)
        },
        getScale: sy,
        isElement: Kh,
        isRTL: function(e) {
          return "rtl" === ey(e).direction
        }
      };
      const my = (e, n, t) => {
          const r = new Map,
            o = {
              platform: vy,
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
              } = Oh(l, r, u),
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
              } = Oh(l, f, u))), t = -1)
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
        by = e => ({
          name: "arrow",
          options: e,
          fn(n) {
            const {
              element: t,
              padding: r
            } = "function" == typeof e ? e(n) : e;
            return t && (o = t, {}.hasOwnProperty.call(o, "current")) ? null != t.current ? jh({
              element: t.current,
              padding: r
            }).fn(n) : {} : t ? jh({
              element: t,
              padding: r
            }).fn(n) : {};
            var o
          }
        });
      var gy = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

      function _y(e, n) {
        if (e === n) return !0;
        if (typeof e != typeof n) return !1;
        if ("function" == typeof e && e.toString() === n.toString()) return !0;
        let t, r, o;
        if (e && n && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (t = e.length, t != n.length) return !1;
            for (r = t; 0 != r--;)
              if (!_y(e[r], n[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length) return !1;
          for (r = t; 0 != r--;)
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = t; 0 != r--;) {
            const t = o[r];
            if (!("_owner" === t && e.$$typeof || _y(e[t], n[t]))) return !1
          }
          return !0
        }
        return e != e && n != n
      }

      function Cy(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ey(e, n) {
        const t = Cy(e);
        return Math.round(n * t) / t
      }

      function wy(e) {
        const n = s.useRef(e);
        return gy((() => {
          n.current = e
        })), n
      }
      var ky = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? pf.DX : n;
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
        By = s.forwardRef(((e, n) => {
          const {
            children: t,
            width: r = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, i.jsx)(ky.svg, {
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
      By.displayName = "Arrow";
      var xy = By;

      function Py(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function Sy(...e) {
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
      var Ty = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? pf.DX : n;
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
        Oy = "Popper",
        [Ly, jy] = function(e, n = []) {
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
          }, Sy(r, ...n)]
        }(Oy),
        [Ny, Ry] = Ly(Oy),
        My = e => {
          const {
            __scopePopper: n,
            children: t
          } = e, [r, o] = s.useState(null);
          return (0, i.jsx)(Ny, {
            scope: n,
            anchor: r,
            onAnchorChange: o,
            children: t
          })
        };
      My.displayName = Oy;
      var Dy = "PopperAnchor",
        Iy = s.forwardRef(((e, n) => {
          const {
            __scopePopper: t,
            virtualRef: r,
            ...o
          } = e, a = Ry(Dy, t), u = s.useRef(null), l = Py(n, u);
          return s.useEffect((() => {
            a.onAnchorChange(r?.current || u.current)
          })), r ? null : (0, i.jsx)(Ty.div, {
            ...o,
            ref: l
          })
        }));
      Iy.displayName = Dy;
      var Hy = "PopperContent",
        [zy, qy] = Ly(Hy),
        Fy = s.forwardRef(((e, n) => {
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
          } = e, m = Ry(Hy, t), [b, g] = s.useState(null), _ = Py(n, (e => g(e))), [C, E] = s.useState(null), w = ff(C), k = w?.width ?? 0, B = w?.height ?? 0, x = r + ("center" !== a ? "-" + a : ""), P = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, S = Array.isArray(c) ? c : [c], T = S.length > 0, O = {
            padding: P,
            boundary: S.filter(Ky),
            altBoundary: T
          }, {
            refs: L,
            floatingStyles: j,
            placement: N,
            isPositioned: R,
            middlewareData: M
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
            _y(p, r) || h(r);
            const [y, A] = s.useState(null), [v, m] = s.useState(null), b = s.useCallback((e => {
              e != E.current && (E.current = e, A(e))
            }), [A]), g = s.useCallback((e => {
              e !== w.current && (w.current = e, m(e))
            }), [m]), _ = i || y, C = a || v, E = s.useRef(null), w = s.useRef(null), k = s.useRef(c), B = wy(l), x = wy(o), P = s.useCallback((() => {
              if (!E.current || !w.current) return;
              const e = {
                placement: n,
                strategy: t,
                middleware: p
              };
              x.current && (e.platform = x.current), my(E.current, w.current, e).then((e => {
                const n = {
                  ...e,
                  isPositioned: !0
                };
                S.current && !_y(k.current, n) && (k.current = n, nu.flushSync((() => {
                  f(n)
                })))
              }))
            }), [p, n, t, x]);
            gy((() => {
              !1 === d && k.current.isPositioned && (k.current.isPositioned = !1, f((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [d]);
            const S = s.useRef(!1);
            gy((() => (S.current = !0, () => {
              S.current = !1
            })), []), gy((() => {
              if (_ && (E.current = _), C && (w.current = C), _ && C) {
                if (B.current) return B.current(_, C, P);
                P()
              }
            }), [_, C, P, B]);
            const T = s.useMemo((() => ({
                reference: E,
                floating: w,
                setReference: b,
                setFloating: g
              })), [b, g]),
              O = s.useMemo((() => ({
                reference: _,
                floating: C
              })), [_, C]),
              L = s.useMemo((() => {
                const e = {
                  position: t,
                  left: 0,
                  top: 0
                };
                if (!O.floating) return e;
                const n = Ey(O.floating, c.x),
                  r = Ey(O.floating, c.y);
                return u ? {
                  ...e,
                  transform: "translate(" + n + "px, " + r + "px)",
                  ...Cy(O.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: t,
                  left: n,
                  top: r
                }
              }), [t, u, O.floating, c.x, c.y]);
            return s.useMemo((() => ({
              ...c,
              update: P,
              refs: T,
              elements: O,
              floatingStyles: L
            })), [c, P, T, O, L])
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
              } = r, l = ay(e), d = o || i ? [...l ? oy(l) : [], ...oy(n)] : [];
              d.forEach((e => {
                o && e.addEventListener("scroll", t, {
                  passive: !0
                }), i && e.addEventListener("resize", t)
              }));
              const c = l && s ? function(e, n) {
                let t, r = null;
                const o = Vh(e);

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
                    rootMargin: -yh(d) + "px " + -yh(o.clientWidth - (l + c)) + "px " + -yh(o.clientHeight - (d + f)) + "px " + -yh(l) + "px",
                    threshold: ph(0, fh(1, u)) || 1
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
              let y = u ? dy(e) : null;
              return u && function n() {
                const r = dy(e);
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
            middleware: [Ih({
              mainAxis: o + B,
              alignmentAxis: u
            }), d && Hh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === p ? zh() : void 0,
              ...O
            }), d && Nh({
              ...O
            }), qh({
              ...O,
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
            }), C && by({
              element: C,
              padding: l
            }), Wy({
              arrowWidth: k,
              arrowHeight: B
            }), h && Dh({
              strategy: "referenceHidden",
              ...O
            })]
          }), [D, I] = Xy(N), H = af(A);
          cf((() => {
            R && H?.()
          }), [R, H]);
          const z = M.arrow?.x,
            q = M.arrow?.y,
            F = 0 !== M.arrow?.centerOffset,
            [U, V] = s.useState();
          return cf((() => {
            b && V(window.getComputedStyle(b).zIndex)
          }), [b]), (0, i.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...j,
              transform: R ? j.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
              ...M.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, i.jsx)(zy, {
              scope: t,
              placedSide: D,
              onArrowChange: E,
              arrowX: z,
              arrowY: q,
              shouldHideArrow: F,
              children: (0, i.jsx)(Ty.div, {
                "data-side": D,
                "data-align": I,
                ...v,
                ref: _,
                style: {
                  ...v.style,
                  animation: R ? void 0 : "none"
                }
              })
            })
          })
        }));
      Fy.displayName = Hy;
      var Uy = "PopperArrow",
        Vy = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Gy = s.forwardRef((function(e, n) {
          const {
            __scopePopper: t,
            ...r
          } = e, o = qy(Uy, t), a = Vy[o.placedSide];
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
            children: (0, i.jsx)(xy, {
              ...r,
              ref: n,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function Ky(e) {
        return null !== e
      }
      Gy.displayName = Uy;
      var Wy = e => ({
        name: "transformOrigin",
        options: e,
        fn(n) {
          const {
            placement: t,
            rects: r,
            middlewareData: o
          } = n, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [u, l] = Xy(t), d = {
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

      function Xy(e) {
        const [n, t = "center"] = e.split("-");
        return [n, t]
      }
      var $y = My,
        Yy = Iy,
        Zy = Fy,
        Qy = Gy,
        Jy = s.forwardRef(((e, n) => {
          const {
            container: t,
            ...r
          } = e, [o, a] = s.useState(!1);
          cf((() => a(!0)), []);
          const u = t || o && globalThis?.document?.body;
          return u ? nu.createPortal((0, i.jsx)(eh.div, {
            ...r,
            ref: n
          }), u) : null
        }));
      Jy.displayName = "Portal";
      var eA = e => {
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
            const e = nA(r.current);
            i.current = "mounted" === u ? e : "none"
          }), [u]), cf((() => {
            const n = r.current,
              t = o.current;
            if (t !== e) {
              const r = i.current,
                a = nA(n);
              l(e ? "MOUNT" : "none" === a || "none" === n?.display ? "UNMOUNT" : t && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), cf((() => {
            if (n) {
              const e = e => {
                  const t = nA(r.current).includes(e.animationName);
                  e.target === n && t && nu.flushSync((() => l("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (i.current = nA(r.current))
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
        }) : s.Children.only(t), i = Qp(r.ref, function(e) {
          let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = n && "isReactWarning" in n && n.isReactWarning;
          return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof t || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function nA(e) {
        return e?.animationName || "none"
      }
      eA.displayName = "Presence";
      var tA = s.forwardRef(((e, n) => (0, i.jsx)(eh.span, {
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
      tA.displayName = "VisuallyHidden";
      var rA = tA,
        [oA, iA] = function(e, n = []) {
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
          }, Jp(r, ...n)]
        }("Tooltip", [jy]),
        aA = jy(),
        sA = "TooltipProvider",
        uA = 700,
        lA = "tooltip.open",
        [dA, cA] = oA(sA),
        fA = e => {
          const {
            __scopeTooltip: n,
            delayDuration: t = uA,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, [u, l] = s.useState(!0), d = s.useRef(!1), c = s.useRef(0);
          return s.useEffect((() => {
            const e = c.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(dA, {
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
      fA.displayName = sA;
      var pA = "Tooltip",
        [hA, yA] = oA(pA),
        AA = e => {
          const {
            __scopeTooltip: n,
            children: t,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: u,
            delayDuration: l
          } = e, d = cA(pA, e.__scopeTooltip), c = aA(n), [f, p] = s.useState(null), h = dh(), y = s.useRef(0), A = u ?? d.disableHoverableContent, v = l ?? d.delayDuration, m = s.useRef(!1), [b = !1, g] = sf({
            prop: r,
            defaultProp: o,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(lA))) : d.onClose(), a?.(e)
            }
          }), _ = s.useMemo((() => b ? m.current ? "delayed-open" : "instant-open" : "closed"), [b]), C = s.useCallback((() => {
            window.clearTimeout(y.current), m.current = !1, g(!0)
          }), [g]), E = s.useCallback((() => {
            window.clearTimeout(y.current), g(!1)
          }), [g]), w = s.useCallback((() => {
            window.clearTimeout(y.current), y.current = window.setTimeout((() => {
              m.current = !0, g(!0)
            }), v)
          }), [v, g]);
          return s.useEffect((() => () => window.clearTimeout(y.current)), []), (0, i.jsx)($y, {
            ...c,
            children: (0, i.jsx)(hA, {
              scope: n,
              contentId: h,
              open: b,
              stateAttribute: _,
              trigger: f,
              onTriggerChange: p,
              onTriggerEnter: s.useCallback((() => {
                d.isOpenDelayed ? w() : C()
              }), [d.isOpenDelayed, w, C]),
              onTriggerLeave: s.useCallback((() => {
                A ? E() : window.clearTimeout(y.current)
              }), [E, A]),
              onOpen: C,
              onClose: E,
              disableHoverableContent: A,
              children: t
            })
          })
        };
      AA.displayName = pA;
      var vA = "TooltipTrigger",
        mA = s.forwardRef(((e, n) => {
          const {
            __scopeTooltip: t,
            ...r
          } = e, o = yA(vA, t), a = cA(vA, t), u = aA(t), l = Qp(n, s.useRef(null), o.onTriggerChange), d = s.useRef(!1), c = s.useRef(!1), f = s.useCallback((() => d.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, i.jsx)(Yy, {
            asChild: !0,
            ...u,
            children: (0, i.jsx)(eh.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Zp(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              })),
              onPointerLeave: Zp(e.onPointerLeave, (() => {
                o.onTriggerLeave(), c.current = !1
              })),
              onPointerDown: Zp(e.onPointerDown, (() => {
                d.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: Zp(e.onFocus, (() => {
                d.current || o.onOpen()
              })),
              onBlur: Zp(e.onBlur, o.onClose),
              onClick: Zp(e.onClick, o.onClose)
            })
          })
        }));
      mA.displayName = vA;
      var bA = "TooltipPortal",
        [gA, _A] = oA(bA, {
          forceMount: void 0
        }),
        CA = e => {
          const {
            __scopeTooltip: n,
            forceMount: t,
            children: r,
            container: o
          } = e, a = yA(bA, n);
          return (0, i.jsx)(gA, {
            scope: n,
            forceMount: t,
            children: (0, i.jsx)(eA, {
              present: t || a.open,
              children: (0, i.jsx)(Jy, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      CA.displayName = bA;
      var EA = "TooltipContent",
        wA = s.forwardRef(((e, n) => {
          const t = _A(EA, e.__scopeTooltip),
            {
              forceMount: r = t.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = yA(EA, e.__scopeTooltip);
          return (0, i.jsx)(eA, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(PA, {
              side: o,
              ...a,
              ref: n
            }) : (0, i.jsx)(kA, {
              side: o,
              ...a,
              ref: n
            })
          })
        })),
        kA = s.forwardRef(((e, n) => {
          const t = yA(EA, e.__scopeTooltip),
            r = cA(EA, e.__scopeTooltip),
            o = s.useRef(null),
            a = Qp(n, o),
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
          }), [d, f, u, c, h]), (0, i.jsx)(PA, {
            ...e,
            ref: a
          })
        })),
        [BA, xA] = oA(pA, {
          isInside: !1
        }),
        PA = s.forwardRef(((e, n) => {
          const {
            __scopeTooltip: t,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            ...l
          } = e, d = yA(EA, t), c = aA(t), {
            onClose: f
          } = d;
          return s.useEffect((() => (document.addEventListener(lA, f), () => document.removeEventListener(lA, f))), [f]), s.useEffect((() => {
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
          }), [d.trigger, f]), (0, i.jsx)(ih, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)(Zy, {
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
              children: [(0, i.jsx)(pf.xV, {
                children: r
              }), (0, i.jsx)(BA, {
                scope: t,
                isInside: !0,
                children: (0, i.jsx)(rA, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      wA.displayName = EA;
      var SA = "TooltipArrow",
        TA = s.forwardRef(((e, n) => {
          const {
            __scopeTooltip: t,
            ...r
          } = e, o = aA(t);
          return xA(SA, t).isInside ? null : (0, i.jsx)(Qy, {
            ...o,
            ...r,
            ref: n
          })
        }));
      TA.displayName = SA;
      var OA = fA,
        LA = AA,
        jA = mA,
        NA = CA,
        RA = wA,
        MA = TA;
      const DA = ({
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
        portalContainer: _,
        testId: C
      }) => {
        const [E = !1, w] = (0, jn.ic)({
          defaultProp: y,
          prop: A,
          onChange: v
        }), k = (0, jn.ZC)(E), B = Ws({
          opacity: E ? 1 : 0,
          immediate: E && !k
        }), x = "left" === t || "right" === t ? "center" : o, P = b ? {
          container: _
        } : {}, S = b ? NA : s.Fragment, T = g ? {
          className: "foundry_h3lgaa2"
        } : {}, O = g ? MA : s.Fragment;
        return (0, i.jsx)(OA, {
          delayDuration: m,
          children: (0, i.jsxs)(LA, {
            open: E,
            onOpenChange: w,
            children: [(0, i.jsx)(jA, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: n
            }), (0, i.jsx)(S, {
              ...P,
              children: (0, i.jsx)(RA, {
                side: t,
                align: x,
                sticky: c,
                forceMount: !0,
                "aria-label": h,
                "data-testid": C,
                sideOffset: r,
                alignOffset: a,
                onEscapeKeyDown: f,
                avoidCollisions: u,
                collisionPadding: d,
                collisionBoundary: l,
                onPointerDownOutside: p,
                children: (0, i.jsxs)(Xp.div, {
                  className: "foundry_h3lgaa0",
                  style: B,
                  children: [(0, i.jsx)(W, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, i.jsx)(O, {
                    ...T
                  })]
                })
              })
            })]
          })
        })
      };
      var IA = t(36033),
        HA = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      HA.setAttributes = A(), HA.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, HA.domAPI = h(), HA.insertStyleElement = m(), f()(IA.A, HA), IA.A && IA.A.locals && IA.A.locals;
      var zA = "foundry_bwy1ds1",
        qA = "foundry_bwy1dsg",
        FA = "foundry_bwy1dsf";
      const UA = e => {
          e.preventDefault?.()
        },
        VA = (0, s.forwardRef)((({
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
          const v = qc(),
            m = (0, jn.Ub)("screen and (max-width: 1024px)"),
            b = t !== h,
            g = m ? "SM" : "LG",
            _ = Ws({
              opacity: b ? 1 : 0,
              immediate: (0, jn.jt)()
            });
          Cp(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: y
          }), Cp(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: y
          }), Cp("r", (() => c?.()), {
            preventDefault: !0,
            enabled: y
          });
          const C = (0, jn.rl)() && m;
          return (0, i.jsx)(bp, {
            children: (0, i.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: A,
              children: [(0, i.jsx)(DA, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: UA,
                content: (0, i.jsxs)("div", {
                  className: FA,
                  children: [v.formatMessage(Kf), (0, i.jsx)(te, {
                    className: qA,
                    children: v.formatMessage(Wf, {
                      shortcut: (0, i.jsx)(Rp, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, i.jsx)(Lp, {
                  size: g,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Kf),
                  className: (0, Ke.$)(zA, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!C && y && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, i.jsx)(DA, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: UA,
                      content: (0, i.jsxs)("div", {
                        className: FA,
                        children: [v.formatMessage(Xf), (0, i.jsx)(te, {
                          className: qA,
                          children: v.formatMessage($f, {
                            shortcut: (0, i.jsx)(Rp, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Lp, {
                        size: g,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Xf),
                        className: (0, Ke.$)(zA, "foundry_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, i.jsxs)(Ff, {
                      className: "foundry_bwy1dsa",
                      value: [t],
                      max: u,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, i.jsx)(Uf, {
                        className: "foundry_bwy1dsb",
                        children: (0, i.jsx)(Vf, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, i.jsx)(DA, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: UA,
                        content: v.formatMessage(np, {
                          zoom: t.toFixed(0)
                        }),
                        children: (0, i.jsx)(Gf, {
                          className: "foundry_bwy1dsd",
                          "aria-label": v.formatMessage(ep),
                          children: (0, i.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, i.jsx)(DA, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: UA,
                      content: (0, i.jsxs)("div", {
                        className: FA,
                        children: [v.formatMessage(Yf), (0, i.jsx)(te, {
                          className: qA,
                          children: v.formatMessage(Zf, {
                            shortcut: (0, i.jsx)(Rp, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Lp, {
                        size: g,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Yf),
                        className: (0, Ke.$)(zA, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !d
                      })
                    })]
                  }), (0, i.jsx)(hu.div, {
                    style: _,
                    children: (0, i.jsx)(DA, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: UA,
                      content: (0, i.jsxs)("div", {
                        className: FA,
                        children: [v.formatMessage(Qf), (0, i.jsx)(te, {
                          className: qA,
                          children: v.formatMessage(Jf, {
                            shortcut: (0, i.jsx)(Rp, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Lp, {
                        size: g,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: v.formatMessage(Qf),
                        className: (0, Ke.$)(zA, "foundry_bwy1ds7"),
                        onPress: c,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), p && C && (0, i.jsx)(DA, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: UA,
                  content: v.formatMessage(rp),
                  children: (0, i.jsx)(Lp, {
                    size: g,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(tp),
                    className: zA,
                    onPress: e
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [f && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, i.jsx)(I, {
                    "aria-hidden": !0,
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), p && !C && (0, i.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, i.jsx)(DA, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: UA,
                    content: v.formatMessage(rp),
                    children: (0, i.jsx)(Lp, {
                      size: g,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(tp),
                      className: zA,
                      onPress: n
                    })
                  })
                })]
              })]
            })
          })
        }));
      var GA = t(86365),
        KA = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      KA.setAttributes = A(), KA.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, KA.domAPI = h(), KA.insertStyleElement = m(), f()(GA.A, KA), GA.A && GA.A.locals && GA.A.locals;
      var WA = "foundry_1a74xwb4";

      function XA(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function $A(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }

      function YA(...e) {
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
      var ZA, QA = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? pf.DX : n;
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
        JA = "dismissableLayer.update",
        ev = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        nv = s.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...d
          } = e, c = s.useContext(ev), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, y] = s.useState({}), A = $A(n, (e => p(e))), v = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = f ? v.indexOf(f) : -1, _ = c.layersWithOutsidePointerEventsDisabled.size > 0, C = g >= b, E = function(e, n = globalThis?.document) {
            const t = af(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      rv("dismissableLayer.pointerDownOutside", t, i, {
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
            C && !t && (o?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h), w = function(e, n = globalThis?.document) {
            const t = af(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && rv("dismissableLayer.focusOutside", t, {
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
          return nh((e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          }), h), s.useEffect((() => {
            if (f) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (ZA = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), tv(), () => {
              t && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = ZA)
            }
          }), [f, h, t, c]), s.useEffect((() => () => {
            f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), tv())
          }), [f, c]), s.useEffect((() => {
            const e = () => y({});
            return document.addEventListener(JA, e), () => document.removeEventListener(JA, e)
          }), []), (0, i.jsx)(QA.div, {
            ...d,
            ref: A,
            style: {
              pointerEvents: _ ? C ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: XA(e.onFocusCapture, w.onFocusCapture),
            onBlurCapture: XA(e.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: XA(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function tv() {
        const e = new CustomEvent(JA);
        document.dispatchEvent(e)
      }

      function rv(e, n, t, {
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
          e && nu.flushSync((() => e.dispatchEvent(n)))
        }(o, i) : o.dispatchEvent(i)
      }
      nv.displayName = "DismissableLayer", s.forwardRef(((e, n) => {
        const t = s.useContext(ev),
          r = s.useRef(null),
          o = $A(n, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, i.jsx)(QA.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var ov = "focusScope.autoFocusOnMount",
        iv = "focusScope.autoFocusOnUnmount",
        av = {
          bubbles: !1,
          cancelable: !0
        },
        sv = s.forwardRef(((e, n) => {
          const {
            loop: t = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...u
          } = e, [l, d] = s.useState(null), c = af(o), f = af(a), p = s.useRef(null), h = $A(n, (e => d(e))), y = s.useRef({
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
                  l.contains(n) ? p.current = n : cv(p.current, {
                    select: !0
                  })
                },
                n = function(e) {
                  if (y.paused || !l) return;
                  const n = e.relatedTarget;
                  null !== n && (l.contains(n) || cv(p.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const n of e) n.removedNodes.length > 0 && cv(l)
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
              fv.add(y);
              const e = document.activeElement;
              if (!l.contains(e)) {
                const n = new CustomEvent(ov, av);
                l.addEventListener(ov, c), l.dispatchEvent(n), n.defaultPrevented || (function(e, {
                  select: n = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const r of e)
                    if (cv(r, {
                        select: n
                      }), document.activeElement !== t) return
                }(uv(l).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && cv(l))
              }
              return () => {
                l.removeEventListener(ov, c), setTimeout((() => {
                  const n = new CustomEvent(iv, av);
                  l.addEventListener(iv, f), l.dispatchEvent(n), n.defaultPrevented || cv(e ?? document.body, {
                    select: !0
                  }), l.removeEventListener(iv, f), fv.remove(y)
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
                  const n = uv(e);
                  return [lv(n, e), lv(n.reverse(), e)]
                }(n);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), t && cv(i, {
                select: !0
              })) : (e.preventDefault(), t && cv(r, {
                select: !0
              })) : o === n && e.preventDefault()
            }
          }), [t, r, y.paused]);
          return (0, i.jsx)(QA.div, {
            tabIndex: -1,
            ...u,
            ref: h,
            onKeyDown: A
          })
        }));

      function uv(e) {
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

      function lv(e, n) {
        for (const t of e)
          if (!dv(t, {
              upTo: n
            })) return t
      }

      function dv(e, {
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

      function cv(e, {
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
      sv.displayName = "FocusScope";
      var fv = function() {
        let e = [];
        return {
          add(n) {
            const t = e[0];
            n !== t && t?.pause(), e = pv(e, n), e.unshift(n)
          },
          remove(n) {
            e = pv(e, n), e[0]?.resume()
          }
        }
      }();

      function pv(e, n) {
        const t = [...e],
          r = t.indexOf(n);
        return -1 !== r && t.splice(r, 1), t
      }
      var hv = s.forwardRef(((e, n) => {
        const {
          container: t,
          ...r
        } = e, [o, a] = s.useState(!1);
        cf((() => a(!0)), []);
        const u = t || o && globalThis?.document?.body;
        return u ? nu.createPortal((0, i.jsx)(QA.div, {
          ...r,
          ref: n
        }), u) : null
      }));
      hv.displayName = "Portal";
      var yv = e => {
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
            const e = Av(r.current);
            i.current = "mounted" === u ? e : "none"
          }), [u]), cf((() => {
            const n = r.current,
              t = o.current;
            if (t !== e) {
              const r = i.current,
                a = Av(n);
              l(e ? "MOUNT" : "none" === a || "none" === n?.display ? "UNMOUNT" : t && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), cf((() => {
            if (n) {
              const e = e => {
                  const t = Av(r.current).includes(e.animationName);
                  e.target === n && t && nu.flushSync((() => l("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (i.current = Av(r.current))
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
        }) : s.Children.only(t), i = $A(r.ref, function(e) {
          let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = n && "isReactWarning" in n && n.isReactWarning;
          return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof t || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function Av(e) {
        return e?.animationName || "none"
      }
      yv.displayName = "Presence";
      var vv = 0;

      function mv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var bv = "right-scroll-bar-position",
        gv = "width-before-scroll-bar";
      var _v = (0, t(2788).f)(),
        Cv = function() {},
        Ev = s.forwardRef((function(e, n) {
          var t = s.useRef(null),
            r = s.useState({
              onScrollCapture: Cv,
              onWheelCapture: Cv,
              onTouchMoveCapture: Cv
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
            g = (0, Tu.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            _ = p,
            C = function(e, n) {
              return t = n || null, r = function(n) {
                return e.forEach((function(e) {
                  return function(e, n) {
                    return "function" == typeof e ? e(n) : e && (e.current = n), e
                  }(e, n)
                }))
              }, (o = (0, s.useState)((function() {
                return {
                  value: t,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value
                    },
                    set current(e) {
                      var n = o.value;
                      n !== e && (o.value = e, o.callback(e, n))
                    }
                  }
                }
              }))[0]).callback = r, o.facade;
              var t, r, o
            }([t, n]),
            E = (0, Tu.__assign)((0, Tu.__assign)({}, g), o);
          return s.createElement(s.Fragment, null, c && s.createElement(_, {
            sideCar: _v,
            removeScrollBar: d,
            shards: f,
            noIsolation: h,
            inert: y,
            setCallbacks: i,
            allowPinchZoom: !!A,
            lockRef: t,
            gapMode: b
          }), a ? s.cloneElement(s.Children.only(u), (0, Tu.__assign)((0, Tu.__assign)({}, E), {
            ref: C
          })) : s.createElement(m, (0, Tu.__assign)({}, E, {
            className: l,
            ref: C
          }), u))
        }));
      Ev.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Ev.classNames = {
        fullWidth: gv,
        zeroRight: bv
      };
      var wv = t(91116),
        kv = t(33758),
        Bv = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        xv = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Pv = (0, kv.T0)(),
        Sv = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(bv, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(gv, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(bv, " .").concat(bv, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(gv, " .").concat(gv, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Tv = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            i = s.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Bv;
                var n = function(e) {
                    var n = window.getComputedStyle(document.body),
                      t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = n["padding" === e ? "paddingTop" : "marginTop"],
                      o = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [xv(t), xv(r), xv(o)]
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
          return s.createElement(Pv, {
            styles: Sv(i, !n, o, t ? "" : "!important")
          })
        },
        Ov = !1;
      if ("undefined" != typeof window) try {
        var Lv = Object.defineProperty({}, "passive", {
          get: function() {
            return Ov = !0, !0
          }
        });
        window.addEventListener("test", Lv, Lv), window.removeEventListener("test", Lv, Lv)
      } catch (e) {
        Ov = !1
      }
      var jv = !!Ov && {
          passive: !1
        },
        Nv = function(e, n) {
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        Rv = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Mv(e, r)) {
              var o = Dv(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        Mv = function(e, n) {
          return "v" === e ? function(e) {
            return Nv(e, "overflowY")
          }(n) : function(e) {
            return Nv(e, "overflowX")
          }(n)
        },
        Dv = function(e, n) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(n) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n)
        },
        Iv = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Hv = function(e) {
          return [e.deltaX, e.deltaY]
        },
        zv = function(e) {
          return e && "current" in e ? e.current : e
        },
        qv = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        Fv = 0,
        Uv = [];

      function Vv(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const Gv = (0, wv.m)(_v, (function(e) {
        var n = s.useRef([]),
          t = s.useRef([0, 0]),
          r = s.useRef(),
          o = s.useState(Fv++)[0],
          i = s.useState(kv.T0)[0],
          a = s.useRef(e);
        s.useEffect((function() {
          a.current = e
        }), [e]), s.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var n = (0, Tu.__spreadArray)([e.lockRef.current], (e.shards || []).map(zv), !0).filter(Boolean);
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
            var o, i = Iv(e),
              s = t.current,
              u = "deltaX" in e ? e.deltaX : s[0] - i[0],
              l = "deltaY" in e ? e.deltaY : s[1] - i[1],
              d = e.target,
              c = Math.abs(u) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === c && "range" === d.type) return !1;
            var f = Rv(c, d);
            if (!f) return !0;
            if (f ? o = c : (o = "v" === c ? "h" : "v", f = Rv(c, d)), !f) return !1;
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
                var p = Dv(e, s),
                  h = p[0],
                  y = p[1] - p[2] - i * h;
                (h || y) && Mv(e, s) && (c += y, f += h), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!u && s !== document.body || u && (n.contains(s) || n === s));
              return (d && (Math.abs(c) < 1 || !1) || !d && (Math.abs(f) < 1 || !1)) && (l = !0), l
            }(p, n, e, "h" === p ? u : l)
          }), []),
          l = s.useCallback((function(e) {
            var t = e;
            if (Uv.length && Uv[Uv.length - 1] === i) {
              var r = "deltaY" in t ? Hv(t) : Iv(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var s = (a.current.shards || []).map(zv).filter(Boolean).filter((function(e) {
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
              shadowParent: Vv(r)
            };
            n.current.push(i), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          c = s.useCallback((function(e) {
            t.current = Iv(e), r.current = void 0
          }), []),
          f = s.useCallback((function(n) {
            d(n.type, Hv(n), n.target, u(n, e.lockRef.current))
          }), []),
          p = s.useCallback((function(n) {
            d(n.type, Iv(n), n.target, u(n, e.lockRef.current))
          }), []);
        s.useEffect((function() {
          return Uv.push(i), e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", l, jv), document.addEventListener("touchmove", l, jv), document.addEventListener("touchstart", c, jv),
            function() {
              Uv = Uv.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, jv), document.removeEventListener("touchmove", l, jv), document.removeEventListener("touchstart", c, jv)
            }
        }), []);
        var h = e.removeScrollBar,
          y = e.inert;
        return s.createElement(s.Fragment, null, y ? s.createElement(i, {
          styles: qv(o)
        }) : null, h ? s.createElement(Tv, {
          gapMode: e.gapMode
        }) : null)
      }));
      var Kv = s.forwardRef((function(e, n) {
        return s.createElement(Ev, (0, Tu.__assign)({}, e, {
          ref: n,
          sideCar: Gv
        }))
      }));
      Kv.classNames = Ev.classNames;
      const Wv = Kv;
      var Xv = new WeakMap,
        $v = new WeakMap,
        Yv = {},
        Zv = 0,
        Qv = function(e) {
          return e && (e.host || Qv(e.parentNode))
        },
        Jv = function(e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, n, t, r) {
            var o = function(e, n) {
              return n.map((function(n) {
                if (e.contains(n)) return n;
                var t = Qv(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(n, Array.isArray(e) ? e : [e]);
            Yv[t] || (Yv[t] = new WeakMap);
            var i = Yv[t],
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
                    u = (Xv.get(e) || 0) + 1,
                    l = (i.get(e) || 0) + 1;
                  Xv.set(e, u), i.set(e, l), a.push(e), 1 === u && o && $v.set(e, !0), 1 === l && e.setAttribute(t, "true"), o || e.setAttribute(r, "true")
                }
              }))
            };
            return d(n), s.clear(), Zv++,
              function() {
                a.forEach((function(e) {
                  var n = Xv.get(e) - 1,
                    o = i.get(e) - 1;
                  Xv.set(e, n), i.set(e, o), n || ($v.has(e) || e.removeAttribute(r), $v.delete(e)), o || e.removeAttribute(t)
                })), --Zv || (Xv = new WeakMap, Xv = new WeakMap, $v = new WeakMap, Yv = {})
              }
          }(r, o, t, "aria-hidden")) : function() {
            return null
          }
        },
        em = "Dialog",
        [nm, tm] = function(e, n = []) {
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
          }, YA(r, ...n)]
        }(em),
        [rm, om] = nm(em),
        im = e => {
          const {
            __scopeDialog: n,
            children: t,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: u = !0
          } = e, l = s.useRef(null), d = s.useRef(null), [c = !1, f] = sf({
            prop: r,
            defaultProp: o,
            onChange: a
          });
          return (0, i.jsx)(rm, {
            scope: n,
            triggerRef: l,
            contentRef: d,
            contentId: dh(),
            titleId: dh(),
            descriptionId: dh(),
            open: c,
            onOpenChange: f,
            onOpenToggle: s.useCallback((() => f((e => !e))), [f]),
            modal: u,
            children: t
          })
        };
      im.displayName = em;
      var am = "DialogTrigger",
        sm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = om(am, t), a = $A(n, o.triggerRef);
          return (0, i.jsx)(QA.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": km(o.open),
            ...r,
            ref: a,
            onClick: XA(e.onClick, o.onOpenToggle)
          })
        }));
      sm.displayName = am;
      var um = "DialogPortal",
        [lm, dm] = nm(um, {
          forceMount: void 0
        }),
        cm = e => {
          const {
            __scopeDialog: n,
            forceMount: t,
            children: r,
            container: o
          } = e, a = om(um, n);
          return (0, i.jsx)(lm, {
            scope: n,
            forceMount: t,
            children: s.Children.map(r, (e => (0, i.jsx)(yv, {
              present: t || a.open,
              children: (0, i.jsx)(hv, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      cm.displayName = um;
      var fm = "DialogOverlay",
        pm = s.forwardRef(((e, n) => {
          const t = dm(fm, e.__scopeDialog),
            {
              forceMount: r = t.forceMount,
              ...o
            } = e,
            a = om(fm, e.__scopeDialog);
          return a.modal ? (0, i.jsx)(yv, {
            present: r || a.open,
            children: (0, i.jsx)(hm, {
              ...o,
              ref: n
            })
          }) : null
        }));
      pm.displayName = fm;
      var hm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = om(fm, t);
          return (0, i.jsx)(Wv, {
            as: pf.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, i.jsx)(QA.div, {
              "data-state": km(o.open),
              ...r,
              ref: n,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        ym = "DialogContent",
        Am = s.forwardRef(((e, n) => {
          const t = dm(ym, e.__scopeDialog),
            {
              forceMount: r = t.forceMount,
              ...o
            } = e,
            a = om(ym, e.__scopeDialog);
          return (0, i.jsx)(yv, {
            present: r || a.open,
            children: a.modal ? (0, i.jsx)(vm, {
              ...o,
              ref: n
            }) : (0, i.jsx)(mm, {
              ...o,
              ref: n
            })
          })
        }));
      Am.displayName = ym;
      var vm = s.forwardRef(((e, n) => {
          const t = om(ym, e.__scopeDialog),
            r = s.useRef(null),
            o = $A(n, t.contentRef, r);
          return s.useEffect((() => {
            const e = r.current;
            if (e) return Jv(e)
          }), []), (0, i.jsx)(bm, {
            ...e,
            ref: o,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: XA(e.onCloseAutoFocus, (e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            })),
            onPointerDownOutside: XA(e.onPointerDownOutside, (e => {
              const n = e.detail.originalEvent,
                t = 0 === n.button && !0 === n.ctrlKey;
              (2 === n.button || t) && e.preventDefault()
            })),
            onFocusOutside: XA(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        mm = s.forwardRef(((e, n) => {
          const t = om(ym, e.__scopeDialog),
            r = s.useRef(!1),
            o = s.useRef(!1);
          return (0, i.jsx)(bm, {
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
        bm = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...u
          } = e, l = om(ym, t), d = s.useRef(null), c = $A(n, d);
          return s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? mv()), document.body.insertAdjacentElement("beforeend", e[1] ?? mv()), vv++, () => {
              1 === vv && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), vv--
            }
          }), []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(sv, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, i.jsx)(nv, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": km(l.open),
                ...u,
                ref: c,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Sm, {
                titleId: l.titleId
              }), (0, i.jsx)(Tm, {
                contentRef: d,
                descriptionId: l.descriptionId
              })]
            })]
          })
        })),
        gm = "DialogTitle",
        _m = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = om(gm, t);
          return (0, i.jsx)(QA.h2, {
            id: o.titleId,
            ...r,
            ref: n
          })
        }));
      _m.displayName = gm;
      var Cm = "DialogDescription",
        Em = s.forwardRef(((e, n) => {
          const {
            __scopeDialog: t,
            ...r
          } = e, o = om(Cm, t);
          return (0, i.jsx)(QA.p, {
            id: o.descriptionId,
            ...r,
            ref: n
          })
        }));
      Em.displayName = Cm;
      var wm = "DialogClose";

      function km(e) {
        return e ? "open" : "closed"
      }
      s.forwardRef(((e, n) => {
        const {
          __scopeDialog: t,
          ...r
        } = e, o = om(wm, t);
        return (0, i.jsx)(QA.button, {
          type: "button",
          ...r,
          ref: n,
          onClick: XA(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = wm;
      var Bm = "DialogTitleWarning",
        [xm, Pm] = function(e, n) {
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
        }(Bm, {
          contentName: ym,
          titleName: gm,
          docsSlug: "dialog"
        }),
        Sm = ({
          titleId: e
        }) => {
          const n = Pm(Bm),
            t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
          return s.useEffect((() => {
            e && (document.getElementById(e) || console.error(t))
          }), [t, e]), null
        },
        Tm = ({
          contentRef: e,
          descriptionId: n
        }) => {
          const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Pm("DialogDescriptionWarning").contentName}}.`;
          return s.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            n && r && (document.getElementById(n) || console.warn(t))
          }), [t, e, n]), null
        },
        Om = im,
        Lm = sm,
        jm = cm,
        Nm = Am,
        Rm = _m,
        Mm = Em;
      const Dm = hu(pm),
        Im = hu(Nm),
        Hm = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        zm = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        qm = (0, a.AK)(.77, 0, .175, 1),
        Fm = ({
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
          defaultZoomLevel: _ = 100,
          minZoomLevel: C = 100,
          maxZoomLevel: E = 300,
          zoomLevelStep: w = 100,
          onZoomLevelChange: k,
          gestureSettings: B,
          testId: x,
          showZoomControls: P = !0,
          disableGesturesOn: S,
          asChild: T,
          children: O,
          className: L,
          usePortal: j = !0,
          enabled: N = !0
        }) => {
          const R = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            D = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            H = $s(),
            z = $s(),
            q = $s(),
            F = (0, s.useRef)(!1),
            U = qc(),
            V = (0, jn.Ub)("screen and (max-width: 1024px)"),
            G = (0, jn.rl)() && V,
            K = (0, jn.jt)(),
            W = "pointer-devices" !== S || G,
            [X, $] = (0, s.useState)(!0),
            [Y, Z] = (0, s.useState)(!1),
            [Q = !1, J] = (0, jn.ic)({
              prop: A,
              defaultProp: y,
              onChange: v
            }),
            [ee, ne] = (0, s.useState)(!1),
            [te, re] = (0, s.useState)(null),
            oe = (0, s.useDeferredValue)(ee),
            ie = h || K || y && !F.current;
          (0, s.useEffect)((() => {
            o?.()
          }), []), (0, s.useEffect)((() => {
            (y || A) && ne(Q)
          }), []), (0, jn.qn)((() => {
            ee !== oe && (async function(e, {
              onOpen: n,
              onClose: t
            }) {
              const r = D.current.getBoundingClientRect(),
                o = D.current.querySelector("img"),
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
                  }), D.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === m ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === m ? `${A}px` : `${window.innerWidth}px`,
                    x: "horizontal" === m ? b : 0,
                    y: "horizontal" === m ? 0 : b,
                    scale: _ / 100,
                    immediate: ie,
                    config: {
                      duration: 550,
                      easing: qm
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
                      easing: qm
                    }
                  }), D.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), t?.()
                }
              })
            }(ee, {
              onClose: () => J(!1)
            }), F.current = !0)
          }), [ee]), (0, jn.qn)((() => {
            Q ? Promise.resolve().then((() => async function() {
              const e = D.current.querySelector("img");
              if (I.current) {
                let n = Hm;
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
            } = (0, jn.gr)({
              enabled: oe
            }),
            {
              isHovered: le
            } = (0, jn.Mk)({
              ref: M,
              enabled: oe
            }),
            {
              isFocused: de
            } = (0, jn.iQ)({
              ref: M,
              enabled: oe
            }),
            {
              isIdle: ce
            } = (0, jn.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: oe && !le && !de && !G
            }),
            fe = function(e, n, t) {
              const r = Xo.fun(n) && n,
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
                p = (0, s.useMemo)((() => r || 3 == arguments.length ? Ks() : void 0), []),
                h = Qo(e),
                y = [],
                A = (0, s.useRef)(null),
                v = o ? null : A.current;
              Aa((() => {
                A.current = y
              })), ba((() => (Yo(y, (e => {
                p?.add(e.ctrl), e.ctrl.ref = p
              })), () => {
                Yo(A.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Za(e.ctrl, p), e.ctrl.stop(!0)
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
                      return t ? (n.add(t), t.key) : Ys++
                    }))
                  }
                  return Xo.und(t) ? e : Xo.fun(t) ? e.map(t) : Qo(t)
                }(h, r ? r() : n, v),
                b = o && A.current || [];
              Aa((() => Yo(b, (({
                ctrl: e,
                item: n,
                key: t
              }) => {
                Za(e, p), Ha(d, n, t)
              }))));
              const g = [];
              if (v && Yo(v, ((e, n) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(n = g[n] = m.indexOf(e.key)) && (y[n] = e)
                })), Yo(h, ((e, n) => {
                  y[n] || (y[n] = {
                    key: m[n],
                    item: e,
                    phase: "mount",
                    ctrl: new Ns
                  }, y[n].ctrl.item = e)
                })), g.length) {
                let e = -1;
                const {
                  leave: t
                } = r ? r() : n;
                Yo(g, ((n, r) => {
                  const o = v[r];
                  ~n ? (e = y.indexOf(o), y[e] = {
                    ...o,
                    item: h[n]
                  }) : t && y.splice(++e, 0, o)
                }))
              }
              Xo.fun(i) && y.sort(((e, n) => i(e.item, n.item)));
              let _ = -a;
              const C = ma(),
                E = Va(n),
                w = new Map,
                k = (0, s.useRef)(new Map),
                B = (0, s.useRef)(!1);
              Yo(y, ((e, t) => {
                const o = e.key,
                  i = e.phase,
                  s = r ? r() : n;
                let d, p;
                const h = Ha(s.delay || 0, o);
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
                if (d = Ha(d, e.item, t), d = Xo.obj(d) ? Wa(d) : {
                    to: d
                  }, !d.config) {
                  const n = f || E.config;
                  d.config = Ha(n, e.item, t, p)
                }
                _ += a;
                const y = {
                  ...E,
                  delay: h + _,
                  ref: c,
                  immediate: s.immediate,
                  reset: !1,
                  ...d
                };
                if ("enter" == p && Xo.und(y.from)) {
                  const o = r ? r() : n,
                    i = Xo.und(o.initial) || v ? o.from : o.initial;
                  y.from = Ha(i, e.item, t)
                }
                const {
                  onResolve: b
                } = y;
                y.onResolve = e => {
                  Ha(b, e);
                  const n = A.current,
                    t = n.find((e => e.key === o));
                  if (t && (!e.cancelled || "update" == t.phase) && t.ctrl.idle) {
                    const e = n.every((e => e.ctrl.idle));
                    if ("leave" == t.phase) {
                      const n = Ha(u, t.item);
                      if (!1 !== n) {
                        const r = !0 === n ? 0 : n;
                        if (t.expired = !0, !e && r > 0) return void(r <= 2147483647 && (t.expirationId = setTimeout(C, r)))
                      }
                    }
                    e && n.some((e => e.expired)) && (k.current.delete(t), l && (B.current = !0), C())
                  }
                };
                const g = Ds(e.ctrl, y);
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
              const x = (0, s.useContext)(Vs),
                P = _a(x),
                S = x !== P && $a(x);
              Aa((() => {
                S && Yo(y, (e => {
                  e.ctrl.start({
                    default: x
                  })
                }))
              }), [x]), Yo(w, ((e, n) => {
                if (k.current.size) {
                  const e = y.findIndex((e => e.key === n.key));
                  y.splice(e, 1)
                }
              })), Aa((() => {
                Yo(k.current.size ? k.current : w, (({
                  phase: e,
                  payload: n
                }, t) => {
                  const {
                    ctrl: r
                  } = t;
                  t.phase = e, p?.add(r), S && "enter" == e && r.start({
                    default: x
                  }), n && (Qa(r, n.ref), !r.ref && !p || B.current ? (r.start(n), B.current && (B.current = !1)) : r.update(n))
                }))
              }), o ? void 0 : t);
              const T = e => s.createElement(s.Fragment, null, y.map(((n, t) => {
                const {
                  springs: r
                } = w.get(n) || n.ctrl, o = e({
                  ...r
                }, n.item, n, t);
                return o && o.type ? s.createElement(o.type, {
                  ...o.props,
                  key: Xo.str(n.key) || Xo.num(n.key) ? n.key : n.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return p ? [T, p] : T
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
            [pe] = Ws((() => ({
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
              gestureSettings: h = Cu,
              enabled: y
            }) => {
              const A = (0, jn.jt)(),
                [v = n, m] = (0, jn.ic)({
                  prop: e,
                  defaultProp: n,
                  onChange: t
                }),
                [b = u, g] = (0, jn.ic)({
                  prop: a,
                  defaultProp: u,
                  onChange: l
                }),
                _ = (0, s.useRef)(null),
                C = (0, s.useRef)(null),
                [E, w] = (0, s.useState)(!1),
                k = b > r,
                B = b < o,
                x = b > r,
                P = b === r,
                [S, T] = Ws((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: n[0],
                    y: n[1]
                  },
                  immediate: A,
                  config: gu
                }))),
                O = (e, {
                  origin: t,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (_.current && C.current) {
                    t || (t = [C.current.clientWidth / 2, C.current.clientHeight / 2]);
                    const s = bu(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const u = {
                      config: a || gu,
                      x: n[0],
                      y: n[1],
                      scale: b,
                      immediate: A
                    };
                    if (s <= r) m(n);
                    else {
                      const e = mu(_.current, C.current, (({
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
                        contentRef: _,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: t
                      }), s);
                      u.x = e.xy[0], u.y = e.xy[1], m(e.xy)
                    }
                    u.scale = s / 100, T(u), g(s)
                  }
                },
                L = (e, n) => e.y < n.top || e.y > n.bottom || e.x < n.left || e.x > n.right,
                {
                  handleClick: j
                } = (0, jn.Rv)({
                  onDoubleClick: e => {
                    if (_.current) {
                      const n = Au(_.current),
                        t = L(e, n) ? "overlay" : "content";
                      p?.({
                        target: t,
                        origin: [e.clientX, e.clientY],
                        contentBounds: n
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (_.current && 0 === e.button) {
                      const n = Au(_.current),
                        t = L(e, n) ? "overlay" : "content";
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
                containerRef: C,
                contentRef: _,
                canPan: k,
                isPanning: E,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  O(b + i, e)
                },
                zoomOut: e => {
                  O(b - i, e)
                },
                zoomTo: O,
                resetZoom: () => {
                  m(n), g(u);
                  const e = {
                    config: _u,
                    x: n[0],
                    y: n[1],
                    scale: u / 100,
                    immediate: A
                  };
                  T(e)
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
                    if (!C.current || !_.current) return;
                    if (s) return void j(l);
                    if (o && i && !E && w(!0), u > 1) return;
                    if (a || b < r) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = mu(_.current, C.current, v, b), p = o * h.dragFactor, y = i * h.dragFactor, g = {
                      config: gu,
                      x: n[0],
                      y: n[1],
                      immediate: A
                    };
                    if (b === r) {
                      const e = [t[0], t[1] + y],
                        {
                          y: n
                        } = vu(e, _.current),
                        r = bu(100 * Math.abs(n) / h.closePc, 0, 100);
                      g.config = _u, g.x = e[0], g.y = e[1], m(e), c?.(r)
                    } else {
                      const e = [yu(t[0] + p, -d, d), yu(t[1] + y, -f, f)];
                      g.x = e[0], g.y = e[1], m(e)
                    }
                    return T(g), t
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (C.current && _.current)
                      if (b === r) {
                        const {
                          y: e
                        } = vu(v, _.current);
                        if (bu(100 * Math.abs(e) / h.closePc, 0, 100) >= 100) d?.();
                        else {
                          const e = {
                            config: _u,
                            x: n[0],
                            y: n[1],
                            immediate: A
                          };
                          T(e), m(n), c?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = mu(_.current, C.current, v, b),
                        n = {
                          config: gu,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: A
                        };
                      T(n), w(!1), m(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: n,
                    offset: [t],
                    origin: [r, o],
                    first: i
                  }) => {
                    if (_.current && C.current) {
                      if (i && w(!0), n) return void e();
                      O(100 * t, {
                        origin: [r, o],
                        delta: t - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    C.current && _.current && w(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: n,
                    movement: t
                  }) => {
                    if (_.current && C.current) {
                      const r = -1 * t[1];
                      if (r && E && w(!0), e) return;
                      const o = [n.clientX, n.clientY],
                        i = b / 100,
                        a = i + r / h.scrollFactor;
                      O(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    C.current && _.current && w(!1)
                  }
                },
                getCursor: () => P && !y ? "zoom-out" : P && B ? "zoom-in" : k ? E ? "grabbing" : "grab" : "pointer",
                enabled: y,
                animation: S
              }
            })({
              enabled: W && oe,
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
                      animationConfig: _u
                    })
                  }
              },
              onRequestedClose: ae,
              onRequestingClose: e => {
                if (ee) {
                  const n = 1,
                    t = .25,
                    r = bu(n - e * (n - t) / 100, t, n);
                  H.start({
                    opacity: r
                  });
                  const o = bu(1 - e / 100, 0, 1);
                  z.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: g,
              defaultZoomLevel: _,
              minZoomLevel: C,
              maxZoomLevel: E,
              zoomLevelStep: w,
              onZoomLevelChange: k,
              defaultPosition: [0, 0],
              gestureSettings: B
            }),
            ye = Ws({
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
            Ae = Ws({
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
            Aa((() => {
              if (n) {
                let r = 0;
                Yo(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = t * n[o];
                    isNaN(a) ? a = r : r = a, Yo(i, (e => {
                      Yo(e.queue, (e => {
                        const n = e.delay;
                        e.delay = e => a + Ha(n || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let n = Promise.resolve();
                Yo(e, (e => {
                  const t = e.current;
                  if (t.length) {
                    const r = t.map((e => {
                      const n = e.queue;
                      return e.queue = [], n
                    }));
                    n = n.then((() => (Yo(t, ((e, n) => Yo(r[n] || [], (n => e.queue.push(n))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(oe ? ve[0] : ve[0].reverse(), ve[1]);
          const be = T ? (0, i.jsx)(d.DX, {
            className: WA,
            ref: null,
            children: O
          }) : (0, i.jsx)("img", {
            alt: "",
            src: l,
            "aria-hidden": !0,
            loading: a,
            className: WA,
            crossOrigin: r,
            referrerPolicy: u
          });
          (0, s.useEffect)((() => {
            $(!G)
          }), [G]);
          const {
            contrastMode: ge
          } = (0, Ar.DP)(), _e = ((e, n) => [Qc.xW.tokens, Jc("dark", n)].join(" "))(0, ge);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(Om, {
              open: Q,
              children: (0, i.jsxs)("div", {
                className: (0, Ke.A)("foundry_1a74xwb0", L),
                children: [(0, i.jsx)(Lm, {
                  asChild: !0,
                  children: (0, i.jsxs)(hu.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      N && J(!Q)
                    },
                    ref: D,
                    "data-idle": !ee,
                    style: {
                      aspectRatio: c,
                      objectPosition: f,
                      objectFit: p
                    },
                    children: [(0, i.jsx)(d.s6, {
                      children: U.formatMessage(Xc)
                    }), be, fe(((e, n) => m && !n && (0, i.jsx)(hu.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, i.jsx)(Ce.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, i.jsxs)(jm, {
                  ...!j && {
                    container: te
                  },
                  children: [(0, i.jsx)(hu.img, {
                    "aria-hidden": !0,
                    src: Hm,
                    ref: I,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: c,
                      backgroundPosition: f,
                      backgroundSize: p,
                      ...ye
                    }
                  }), fe(((o, s) => s && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(Dm, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, i.jsxs)(Im, {
                      "data-testid": x,
                      onEscapeKeyDown: ae,
                      onOpenAutoFocus: zm,
                      onCloseAutoFocus: e => ((e, n) => {
                        e?.preventDefault(), n.current?.focus({
                          preventScroll: !0
                        })
                      })(e, D),
                      className: _e,
                      children: [(0, i.jsx)(d.s6, {
                        children: (0, i.jsx)(Rm, {
                          children: U.formatMessage($c)
                        })
                      }), (0, i.jsx)(d.s6, {
                        children: (0, i.jsx)(Mm, {
                          children: t || U.formatMessage(Yc, {
                            alt: n
                          })
                        })
                      }), (0, i.jsx)(hu.div, {
                        className: "foundry_1a74xwb6",
                        style: Ae,
                        children: (0, i.jsx)(ku, {
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
                      }), (0, i.jsx)(hu.div, {
                        className: "foundry_1a74xwb9",
                        style: pe,
                        children: (0, i.jsx)(VA, {
                          ...he,
                          ref: M,
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
            }), !j && (0, i.jsx)("div", {
              ref: re
            })]
          })
        },
        Um = e => {
          const n = (0, Ar.Ym)();
          return (0, i.jsx)(Wc, {
            messages: Zc,
            locale: n,
            children: (0, i.jsx)(Fm, {
              ...e
            })
          })
        };

      function Vm(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }

      function Gm(e, n = []) {
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
        }, Km(r, ...n)]
      }

      function Km(...e) {
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

      function Wm(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }
      var Xm, $m = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? pf.DX : n;
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
        Ym = "dismissableLayer.update",
        Zm = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Qm = s.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...d
          } = e, c = s.useContext(Zm), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, y] = s.useState({}), A = Wm(n, (e => p(e))), v = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = f ? v.indexOf(f) : -1, _ = c.layersWithOutsidePointerEventsDisabled.size > 0, C = g >= b, E = function(e, n = globalThis?.document) {
            const t = af(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      eb("dismissableLayer.pointerDownOutside", t, i, {
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
            C && !t && (o?.(e), u?.(e), e.defaultPrevented || l?.())
          }), h), w = function(e, n = globalThis?.document) {
            const t = af(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && eb("dismissableLayer.focusOutside", t, {
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
          return nh((e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          }), h), s.useEffect((() => {
            if (f) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Xm = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Jm(), () => {
              t && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = Xm)
            }
          }), [f, h, t, c]), s.useEffect((() => () => {
            f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Jm())
          }), [f, c]), s.useEffect((() => {
            const e = () => y({});
            return document.addEventListener(Ym, e), () => document.removeEventListener(Ym, e)
          }), []), (0, i.jsx)($m.div, {
            ...d,
            ref: A,
            style: {
              pointerEvents: _ ? C ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Vm(e.onFocusCapture, w.onFocusCapture),
            onBlurCapture: Vm(e.onBlurCapture, w.onBlurCapture),
            onPointerDownCapture: Vm(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function Jm() {
        const e = new CustomEvent(Ym);
        document.dispatchEvent(e)
      }

      function eb(e, n, t, {
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
          e && nu.flushSync((() => e.dispatchEvent(n)))
        }(o, i) : o.dispatchEvent(i)
      }
      Qm.displayName = "DismissableLayer", s.forwardRef(((e, n) => {
        const t = s.useContext(Zm),
          r = s.useRef(null),
          o = Wm(n, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, i.jsx)($m.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var nb = 0;

      function tb() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var rb = "focusScope.autoFocusOnMount",
        ob = "focusScope.autoFocusOnUnmount",
        ib = {
          bubbles: !1,
          cancelable: !0
        },
        ab = s.forwardRef(((e, n) => {
          const {
            loop: t = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...u
          } = e, [l, d] = s.useState(null), c = af(o), f = af(a), p = s.useRef(null), h = Wm(n, (e => d(e))), y = s.useRef({
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
                  l.contains(n) ? p.current = n : db(p.current, {
                    select: !0
                  })
                },
                n = function(e) {
                  if (y.paused || !l) return;
                  const n = e.relatedTarget;
                  null !== n && (l.contains(n) || db(p.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const n of e) n.removedNodes.length > 0 && db(l)
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
              cb.add(y);
              const e = document.activeElement;
              if (!l.contains(e)) {
                const n = new CustomEvent(rb, ib);
                l.addEventListener(rb, c), l.dispatchEvent(n), n.defaultPrevented || (function(e, {
                  select: n = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const r of e)
                    if (db(r, {
                        select: n
                      }), document.activeElement !== t) return
                }(sb(l).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && db(l))
              }
              return () => {
                l.removeEventListener(rb, c), setTimeout((() => {
                  const n = new CustomEvent(ob, ib);
                  l.addEventListener(ob, f), l.dispatchEvent(n), n.defaultPrevented || db(e ?? document.body, {
                    select: !0
                  }), l.removeEventListener(ob, f), cb.remove(y)
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
                  const n = sb(e);
                  return [ub(n, e), ub(n.reverse(), e)]
                }(n);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), t && db(i, {
                select: !0
              })) : (e.preventDefault(), t && db(r, {
                select: !0
              })) : o === n && e.preventDefault()
            }
          }), [t, r, y.paused]);
          return (0, i.jsx)($m.div, {
            tabIndex: -1,
            ...u,
            ref: h,
            onKeyDown: A
          })
        }));

      function sb(e) {
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

      function ub(e, n) {
        for (const t of e)
          if (!lb(t, {
              upTo: n
            })) return t
      }

      function lb(e, {
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

      function db(e, {
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
      ab.displayName = "FocusScope";
      var cb = function() {
        let e = [];
        return {
          add(n) {
            const t = e[0];
            n !== t && t?.pause(), e = fb(e, n), e.unshift(n)
          },
          remove(n) {
            e = fb(e, n), e[0]?.resume()
          }
        }
      }();

      function fb(e, n) {
        const t = [...e],
          r = t.indexOf(n);
        return -1 !== r && t.splice(r, 1), t
      }
      var pb = s.forwardRef(((e, n) => {
        const {
          container: t,
          ...r
        } = e, [o, a] = s.useState(!1);
        cf((() => a(!0)), []);
        const u = t || o && globalThis?.document?.body;
        return u ? nu.createPortal((0, i.jsx)($m.div, {
          ...r,
          ref: n
        }), u) : null
      }));
      pb.displayName = "Portal";
      var hb = s.forwardRef(((e, n) => (0, i.jsx)($m.span, {
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
      hb.displayName = "VisuallyHidden";
      var yb = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ab = [" ", "Enter"],
        vb = "Select",
        [mb, bb, gb] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = Gm(n),
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
              } = e, o = Wm(n, a(l, t).collectionRef);
              return (0, i.jsx)(pf.DX, {
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
              } = e, u = s.useRef(null), l = Wm(n, u), d = a(c, t);
              return s.useEffect((() => (d.itemMap.set(u, {
                ref: u,
                ...o
              }), () => {
                d.itemMap.delete(u)
              }))), (0, i.jsx)(pf.DX, {
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
        }(vb),
        [_b, Cb] = Gm(vb, [gb, jy]),
        Eb = jy(),
        [wb, kb] = _b(vb),
        [Bb, xb] = _b(vb),
        Pb = e => {
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
          } = e, A = Eb(n), [v, m] = s.useState(null), [b, g] = s.useState(null), [_, C] = s.useState(!1), E = lf(c), [w = !1, k] = sf({
            prop: r,
            defaultProp: o,
            onChange: a
          }), [B, x] = sf({
            prop: u,
            defaultProp: l,
            onChange: d
          }), P = s.useRef(null), S = !v || Boolean(v.closest("form")), [T, O] = s.useState(new Set), L = Array.from(T).map((e => e.props.value)).join(";");
          return (0, i.jsx)($y, {
            ...A,
            children: (0, i.jsxs)(wb, {
              required: y,
              scope: n,
              trigger: v,
              onTriggerChange: m,
              valueNode: b,
              onValueNodeChange: g,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: C,
              contentId: dh(),
              value: B,
              onValueChange: x,
              open: w,
              onOpenChange: k,
              dir: E,
              triggerPointerDownPosRef: P,
              disabled: h,
              children: [(0, i.jsx)(mb.Provider, {
                scope: n,
                children: (0, i.jsx)(Bb, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    O((n => new Set(n).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    O((n => {
                      const t = new Set(n);
                      return t.delete(e), t
                    }))
                  }), []),
                  children: t
                })
              }), S ? (0, i.jsxs)(lg, {
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
                }) : null, Array.from(T)]
              }, L) : null]
            })
          })
        };
      Pb.displayName = vb;
      var Sb = "SelectTrigger",
        Tb = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            disabled: r = !1,
            ...o
          } = e, a = Eb(t), s = kb(Sb, t), u = s.disabled || r, l = Wm(n, s.onTriggerChange), d = bb(t), [c, f, p] = dg((e => {
            const n = d().filter((e => !e.disabled)),
              t = n.find((e => e.value === s.value)),
              r = cg(n, e, t);
            void 0 !== r && s.onValueChange(r.value)
          })), h = () => {
            u || (s.onOpenChange(!0), p())
          };
          return (0, i.jsx)(Yy, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)($m.button, {
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
              "data-placeholder": ug(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Vm(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: Vm(o.onPointerDown, (e => {
                const n = e.target;
                n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (h(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: Vm(o.onKeyDown, (e => {
                const n = "" !== c.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), n && " " === e.key || yb.includes(e.key) && (h(), e.preventDefault())
              }))
            })
          })
        }));
      Tb.displayName = Sb;
      var Ob = "SelectValue",
        Lb = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            className: r,
            style: o,
            children: a,
            placeholder: s = "",
            ...u
          } = e, l = kb(Ob, t), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== a, f = Wm(n, l.onValueNodeChange);
          return cf((() => {
            d(c)
          }), [d, c]), (0, i.jsx)($m.span, {
            ...u,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: ug(l.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      Lb.displayName = Ob;
      var jb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          children: r,
          ...o
        } = e;
        return (0, i.jsx)($m.span, {
          "aria-hidden": !0,
          ...o,
          ref: n,
          children: r || "▼"
        })
      }));
      jb.displayName = "SelectIcon";
      var Nb = e => (0, i.jsx)(pb, {
        asChild: !0,
        ...e
      });
      Nb.displayName = "SelectPortal";
      var Rb = "SelectContent",
        Mb = s.forwardRef(((e, n) => {
          const t = kb(Rb, e.__scopeSelect),
            [r, o] = s.useState();
          if (cf((() => {
              o(new DocumentFragment)
            }), []), !t.open) {
            const n = r;
            return n ? nu.createPortal((0, i.jsx)(Ib, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(mb.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), n) : null
          }
          return (0, i.jsx)(zb, {
            ...e,
            ref: n
          })
        }));
      Mb.displayName = Rb;
      var Db = 10,
        [Ib, Hb] = _b(Rb),
        zb = s.forwardRef(((e, n) => {
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
          } = e, g = kb(Rb, t), [_, C] = s.useState(null), [E, w] = s.useState(null), k = Wm(n, (e => C(e))), [B, x] = s.useState(null), [P, S] = s.useState(null), T = bb(t), [O, L] = s.useState(!1), j = s.useRef(!1);
          s.useEffect((() => {
            if (_) return Jv(_)
          }), [_]), s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? tb()), document.body.insertAdjacentElement("beforeend", e[1] ?? tb()), nb++, () => {
              1 === nb && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), nb--
            }
          }), []);
          const N = s.useCallback((e => {
              const [n, ...t] = T().map((e => e.ref.current)), [r] = t.slice(-1), o = document.activeElement;
              for (const t of e) {
                if (t === o) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === n && E && (E.scrollTop = 0), t === r && E && (E.scrollTop = E.scrollHeight), t?.focus(), document.activeElement !== o) return
              }
            }), [T, E]),
            R = s.useCallback((() => N([B, _])), [N, B, _]);
          s.useEffect((() => {
            O && R()
          }), [O, R]);
          const {
            onOpenChange: M,
            triggerPointerDownPosRef: D
          } = g;
          s.useEffect((() => {
            if (_) {
              let e = {
                x: 0,
                y: 0
              };
              const n = n => {
                  e = {
                    x: Math.abs(Math.round(n.pageX) - (D.current?.x ?? 0)),
                    y: Math.abs(Math.round(n.pageY) - (D.current?.y ?? 0))
                  }
                },
                t = t => {
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : _.contains(t.target) || M(!1), document.removeEventListener("pointermove", n), D.current = null
                };
              return null !== D.current && (document.addEventListener("pointermove", n), document.addEventListener("pointerup", t, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", t, {
                  capture: !0
                })
              }
            }
          }), [_, M, D]), s.useEffect((() => {
            const e = () => M(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [M]);
          const [I, H] = dg((e => {
            const n = T().filter((e => !e.disabled)),
              t = n.find((e => e.ref.current === document.activeElement)),
              r = cg(n, e, t);
            r && setTimeout((() => r.ref.current.focus()))
          })), z = s.useCallback(((e, n, t) => {
            const r = !j.current && !t;
            (void 0 !== g.value && g.value === n || r) && (x(e), r && (j.current = !0))
          }), [g.value]), q = s.useCallback((() => _?.focus()), [_]), F = s.useCallback(((e, n, t) => {
            const r = !j.current && !t;
            (void 0 !== g.value && g.value === n || r) && S(e)
          }), [g.value]), U = "popper" === r ? Fb : qb, V = U === Fb ? {
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
          return (0, i.jsx)(Ib, {
            scope: t,
            content: _,
            viewport: E,
            onViewportChange: w,
            itemRefCallback: z,
            selectedItem: B,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: R,
            selectedItemText: P,
            position: r,
            isPositioned: O,
            searchRef: I,
            children: (0, i.jsx)(Wv, {
              as: pf.DX,
              allowPinchZoom: !0,
              children: (0, i.jsx)(ab, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Vm(o, (e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(Qm, {
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
                    onPlaced: () => L(!0),
                    ref: k,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Vm(b.onKeyDown, (e => {
                      const n = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), n || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const n = T().filter((e => !e.disabled));
                        let t = n.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1)
                        }
                        setTimeout((() => N(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      zb.displayName = "SelectContentImpl";
      var qb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          onPlaced: r,
          ...o
        } = e, a = kb(Rb, t), u = Hb(Rb, t), [l, d] = s.useState(null), [c, f] = s.useState(null), p = Wm(n, (e => f(e))), h = bb(t), y = s.useRef(!1), A = s.useRef(!0), {
          viewport: v,
          selectedItem: m,
          selectedItemText: b,
          focusSelectedItem: g
        } = u, _ = s.useCallback((() => {
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
                d = window.innerWidth - Db,
                c = ef(i, [Db, d - u]);
              l.style.minWidth = s + "px", l.style.left = c + "px"
            } else {
              const r = n.right - o.right,
                i = window.innerWidth - t.right - r,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                u = Math.max(s, n.width),
                d = window.innerWidth - Db,
                c = ef(i, [Db, d - u]);
              l.style.minWidth = s + "px", l.style.right = c + "px"
            }
            const i = h(),
              s = window.innerHeight - 2 * Db,
              u = v.scrollHeight,
              d = window.getComputedStyle(c),
              f = parseInt(d.borderTopWidth, 10),
              p = parseInt(d.paddingTop, 10),
              A = parseInt(d.borderBottomWidth, 10),
              g = f + p + u + parseInt(d.paddingBottom, 10) + A,
              _ = Math.min(5 * m.offsetHeight, g),
              C = window.getComputedStyle(v),
              E = parseInt(C.paddingTop, 10),
              w = parseInt(C.paddingBottom, 10),
              k = e.top + e.height / 2 - Db,
              B = s - k,
              x = m.offsetHeight / 2,
              P = f + p + (m.offsetTop + x),
              S = g - P;
            if (P <= k) {
              const e = m === i[i.length - 1].ref.current;
              l.style.bottom = "0px";
              const n = c.clientHeight - v.offsetTop - v.offsetHeight,
                t = P + Math.max(B, x + (e ? w : 0) + n + A);
              l.style.height = t + "px"
            } else {
              const e = m === i[0].ref.current;
              l.style.top = "0px";
              const n = Math.max(k, f + v.offsetTop + (e ? E : 0) + x) + S;
              l.style.height = n + "px", v.scrollTop = P - k + v.offsetTop
            }
            l.style.margin = `${Db}px 0`, l.style.minHeight = _ + "px", l.style.maxHeight = s + "px", r?.(), requestAnimationFrame((() => y.current = !0))
          }
        }), [h, a.trigger, a.valueNode, l, c, v, m, b, a.dir, r]);
        cf((() => _()), [_]);
        const [C, E] = s.useState();
        cf((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const w = s.useCallback((e => {
          e && !0 === A.current && (_(), g?.(), A.current = !1)
        }), [_, g]);
        return (0, i.jsx)(Ub, {
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
              zIndex: C
            },
            children: (0, i.jsx)($m.div, {
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
      qb.displayName = "SelectItemAlignedPosition";
      var Fb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          align: r = "start",
          collisionPadding: o = Db,
          ...a
        } = e, s = Eb(t);
        return (0, i.jsx)(Zy, {
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
      Fb.displayName = "SelectPopperPosition";
      var [Ub, Vb] = _b(Rb, {}), Gb = "SelectViewport", Kb = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          nonce: r,
          ...o
        } = e, a = Hb(Gb, t), u = Vb(Gb, t), l = Wm(n, a.onViewportChange), d = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, i.jsx)(mb.Slot, {
            scope: t,
            children: (0, i.jsx)($m.div, {
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
              onScroll: Vm(o.onScroll, (e => {
                const n = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: r
                  } = u;
                if (r?.current && t) {
                  const e = Math.abs(d.current - n.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Db,
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
      Kb.displayName = Gb;
      var Wb = "SelectGroup",
        [Xb, $b] = _b(Wb);
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e, o = dh();
        return (0, i.jsx)(Xb, {
          scope: t,
          id: o,
          children: (0, i.jsx)($m.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: n
          })
        })
      })).displayName = Wb;
      var Yb = "SelectLabel";
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e, o = $b(Yb, t);
        return (0, i.jsx)($m.div, {
          id: o.id,
          ...r,
          ref: n
        })
      })).displayName = Yb;
      var Zb = "SelectItem",
        [Qb, Jb] = _b(Zb),
        eg = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...u
          } = e, l = kb(Zb, t), d = Hb(Zb, t), c = l.value === r, [f, p] = s.useState(a ?? ""), [h, y] = s.useState(!1), A = Wm(n, (e => d.itemRefCallback?.(e, r, o))), v = dh(), m = () => {
            o || (l.onValueChange(r), l.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(Qb, {
            scope: t,
            value: r,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: s.useCallback((e => {
              p((n => n || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(mb.ItemSlot, {
              scope: t,
              value: r,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)($m.div, {
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
                onFocus: Vm(u.onFocus, (() => y(!0))),
                onBlur: Vm(u.onBlur, (() => y(!1))),
                onPointerUp: Vm(u.onPointerUp, m),
                onPointerMove: Vm(u.onPointerMove, (e => {
                  o ? d.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Vm(u.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                })),
                onKeyDown: Vm(u.onKeyDown, (e => {
                  "" !== d.searchRef?.current && " " === e.key || (Ab.includes(e.key) && m(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      eg.displayName = Zb;
      var ng = "SelectItemText",
        tg = s.forwardRef(((e, n) => {
          const {
            __scopeSelect: t,
            className: r,
            style: o,
            ...a
          } = e, u = kb(ng, t), l = Hb(ng, t), d = Jb(ng, t), c = xb(ng, t), [f, p] = s.useState(null), h = Wm(n, (e => p(e)), d.onItemTextChange, (e => l.itemTextRefCallback?.(e, d.value, d.disabled))), y = f?.textContent, A = s.useMemo((() => (0, i.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: y
          }, d.value)), [d.disabled, d.value, y]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: m
          } = c;
          return cf((() => (v(A), () => m(A))), [v, m, A]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)($m.span, {
              id: d.textId,
              ...a,
              ref: h
            }), d.isSelected && u.valueNode && !u.valueNodeHasChildren ? nu.createPortal(a.children, u.valueNode) : null]
          })
        }));
      tg.displayName = ng;
      var rg = "SelectItemIndicator";
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e;
        return Jb(rg, t).isSelected ? (0, i.jsx)($m.span, {
          "aria-hidden": !0,
          ...r,
          ref: n
        }) : null
      })).displayName = rg;
      var og = "SelectScrollUpButton";
      s.forwardRef(((e, n) => {
        const t = Hb(og, e.__scopeSelect),
          r = Vb(og, e.__scopeSelect),
          [o, a] = s.useState(!1),
          u = Wm(n, r.onScrollButtonChange);
        return cf((() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = n.scrollTop > 0;
              a(e)
            };
            const n = t.viewport;
            return e(), n.addEventListener("scroll", e), () => n.removeEventListener("scroll", e)
          }
        }), [t.viewport, t.isPositioned]), o ? (0, i.jsx)(ag, {
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
      })).displayName = og;
      var ig = "SelectScrollDownButton";
      s.forwardRef(((e, n) => {
        const t = Hb(ig, e.__scopeSelect),
          r = Vb(ig, e.__scopeSelect),
          [o, a] = s.useState(!1),
          u = Wm(n, r.onScrollButtonChange);
        return cf((() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = n.scrollHeight - n.clientHeight,
                t = Math.ceil(n.scrollTop) < e;
              a(t)
            };
            const n = t.viewport;
            return e(), n.addEventListener("scroll", e), () => n.removeEventListener("scroll", e)
          }
        }), [t.viewport, t.isPositioned]), o ? (0, i.jsx)(ag, {
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
      })).displayName = ig;
      var ag = s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          onAutoScroll: r,
          ...o
        } = e, a = Hb("SelectScrollButton", t), u = s.useRef(null), l = bb(t), d = s.useCallback((() => {
          null !== u.current && (window.clearInterval(u.current), u.current = null)
        }), []);
        return s.useEffect((() => () => d()), [d]), cf((() => {
          const e = l().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [l]), (0, i.jsx)($m.div, {
          "aria-hidden": !0,
          ...o,
          ref: n,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Vm(o.onPointerDown, (() => {
            null === u.current && (u.current = window.setInterval(r, 50))
          })),
          onPointerMove: Vm(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === u.current && (u.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Vm(o.onPointerLeave, (() => {
            d()
          }))
        })
      }));
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e;
        return (0, i.jsx)($m.div, {
          "aria-hidden": !0,
          ...r,
          ref: n
        })
      })).displayName = "SelectSeparator";
      var sg = "SelectArrow";

      function ug(e) {
        return "" === e || void 0 === e
      }
      s.forwardRef(((e, n) => {
        const {
          __scopeSelect: t,
          ...r
        } = e, o = Eb(t), a = kb(sg, t), s = Hb(sg, t);
        return a.open && "popper" === s.position ? (0, i.jsx)(Qy, {
          ...o,
          ...r,
          ref: n
        }) : null
      })).displayName = sg;
      var lg = s.forwardRef(((e, n) => {
        const {
          value: t,
          ...r
        } = e, o = s.useRef(null), a = Wm(n, o), u = df(t);
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
        }), [u, t]), (0, i.jsx)(hb, {
          asChild: !0,
          children: (0, i.jsx)("select", {
            ...r,
            ref: a,
            defaultValue: t
          })
        })
      }));

      function dg(e) {
        const n = af(e),
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

      function cg(e, n, t) {
        const r = n.length > 1 && Array.from(n).every((e => e === n[0])) ? n[0] : n,
          o = t ? e.indexOf(t) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, n) => a[(s + n) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== t)));
        const u = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return u !== t ? u : void 0
      }
      lg.displayName = "BubbleSelect";
      var fg = Pb,
        pg = Tb,
        hg = Lb,
        yg = jb,
        Ag = Nb,
        vg = Mb,
        mg = Kb,
        bg = eg,
        gg = tg,
        _g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = s.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? pf.DX : n;
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

      function Cg(...e) {
        return s.useCallback(function(...e) {
          return n => e.forEach((e => function(e, n) {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          }(e, n)))
        }(...e), e)
      }
      var Eg = e => {
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
            const e = wg(r.current);
            i.current = "mounted" === u ? e : "none"
          }), [u]), cf((() => {
            const n = r.current,
              t = o.current;
            if (t !== e) {
              const r = i.current,
                a = wg(n);
              l(e ? "MOUNT" : "none" === a || "none" === n?.display ? "UNMOUNT" : t && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), cf((() => {
            if (n) {
              const e = e => {
                  const t = wg(r.current).includes(e.animationName);
                  e.target === n && t && nu.flushSync((() => l("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (i.current = wg(r.current))
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
        }) : s.Children.only(t), i = Cg(r.ref, function(e) {
          let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = n && "isReactWarning" in n && n.isReactWarning;
          return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof t || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function wg(e) {
        return e?.animationName || "none"
      }

      function kg(...e) {
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

      function Bg(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      Eg.displayName = "Presence";
      var xg = "ScrollArea",
        [Pg, Sg] = function(e, n = []) {
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
          }, kg(r, ...n)]
        }(xg),
        [Tg, Og] = Pg(xg),
        Lg = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...u
          } = e, [l, d] = s.useState(null), [c, f] = s.useState(null), [p, h] = s.useState(null), [y, A] = s.useState(null), [v, m] = s.useState(null), [b, g] = s.useState(0), [_, C] = s.useState(0), [E, w] = s.useState(!1), [k, B] = s.useState(!1), x = Cg(n, (e => d(e))), P = lf(o);
          return (0, i.jsx)(Tg, {
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
            onCornerHeightChange: C,
            children: (0, i.jsx)(_g.div, {
              dir: P,
              ...u,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": _ + "px",
                ...e.style
              }
            })
          })
        }));
      Lg.displayName = xg;
      var jg = "ScrollAreaViewport",
        Ng = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            children: r,
            nonce: o,
            ...a
          } = e, u = Og(jg, t), l = Cg(n, s.useRef(null), u.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(_g.div, {
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
      Ng.displayName = jg;
      var Rg = "ScrollAreaScrollbar",
        Mg = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Og(Rg, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: u
          } = o, l = "horizontal" === e.orientation;
          return s.useEffect((() => (l ? a(!0) : u(!0), () => {
            l ? a(!1) : u(!1)
          })), [l, a, u]), "hover" === o.type ? (0, i.jsx)(Dg, {
            ...r,
            ref: n,
            forceMount: t
          }) : "scroll" === o.type ? (0, i.jsx)(Ig, {
            ...r,
            ref: n,
            forceMount: t
          }) : "auto" === o.type ? (0, i.jsx)(Hg, {
            ...r,
            ref: n,
            forceMount: t
          }) : "always" === o.type ? (0, i.jsx)(zg, {
            ...r,
            ref: n
          }) : null
        }));
      Mg.displayName = Rg;
      var Dg = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Og(Rg, e.__scopeScrollArea), [a, u] = s.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(Eg, {
            present: t || a,
            children: (0, i.jsx)(Hg, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: n
            })
          })
        })),
        Ig = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Og(Rg, e.__scopeScrollArea), a = "horizontal" === e.orientation, u = o_((() => d("SCROLL_END")), 100), [l, d] = ("hidden", c = {
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
          }), [o.viewport, a, d, u]), (0, i.jsx)(Eg, {
            present: t || "hidden" !== l,
            children: (0, i.jsx)(zg, {
              "data-state": "hidden" === l ? "hidden" : "visible",
              ...r,
              ref: n,
              onPointerEnter: Bg(e.onPointerEnter, (() => d("POINTER_ENTER"))),
              onPointerLeave: Bg(e.onPointerLeave, (() => d("POINTER_LEAVE")))
            })
          })
        })),
        Hg = s.forwardRef(((e, n) => {
          const t = Og(Rg, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, u] = s.useState(!1),
            l = "horizontal" === e.orientation,
            d = o_((() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  n = t.viewport.offsetHeight < t.viewport.scrollHeight;
                u(l ? e : n)
              }
            }), 10);
          return i_(t.viewport, d), i_(t.content, d), (0, i.jsx)(Eg, {
            present: r || a,
            children: (0, i.jsx)(zg, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: n
            })
          })
        })),
        zg = s.forwardRef(((e, n) => {
          const {
            orientation: t = "vertical",
            ...r
          } = e, o = Og(Rg, e.__scopeScrollArea), a = s.useRef(null), u = s.useRef(0), [l, d] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Qg(l.viewport, l.content), f = {
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
              const o = Jg(t),
                i = n || o / 2,
                a = o - i,
                s = t.scrollbar.paddingStart + i,
                u = t.scrollbar.size - t.scrollbar.paddingEnd - a,
                l = t.content - t.viewport;
              return n_([s, u], "ltr" === r ? [0, l] : [-1 * l, 0])(e)
            }(e, u.current, l, n)
          }
          return "horizontal" === t ? (0, i.jsx)(qg, {
            ...f,
            ref: n,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = e_(o.viewport.scrollLeft, l, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === t ? (0, i.jsx)(Fg, {
            ...f,
            ref: n,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = e_(o.viewport.scrollTop, l);
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
        qg = s.forwardRef(((e, n) => {
          const {
            sizes: t,
            onSizesChange: r,
            ...o
          } = e, a = Og(Rg, e.__scopeScrollArea), [u, l] = s.useState(), d = s.useRef(null), c = Cg(n, d, a.onScrollbarXChange);
          return s.useEffect((() => {
            d.current && l(getComputedStyle(d.current))
          }), [d]), (0, i.jsx)(Gg, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Jg(t) + "px",
              ...e.style
            },
            onThumbPointerDown: n => e.onThumbPointerDown(n.x),
            onDragScroll: n => e.onDragScroll(n.x),
            onWheelScroll: (n, t) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + n.deltaX;
                e.onWheelScroll(r), t_(r, t) && n.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && u && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Zg(u.paddingLeft),
                  paddingEnd: Zg(u.paddingRight)
                }
              })
            }
          })
        })),
        Fg = s.forwardRef(((e, n) => {
          const {
            sizes: t,
            onSizesChange: r,
            ...o
          } = e, a = Og(Rg, e.__scopeScrollArea), [u, l] = s.useState(), d = s.useRef(null), c = Cg(n, d, a.onScrollbarYChange);
          return s.useEffect((() => {
            d.current && l(getComputedStyle(d.current))
          }), [d]), (0, i.jsx)(Gg, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Jg(t) + "px",
              ...e.style
            },
            onThumbPointerDown: n => e.onThumbPointerDown(n.y),
            onDragScroll: n => e.onDragScroll(n.y),
            onWheelScroll: (n, t) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + n.deltaY;
                e.onWheelScroll(r), t_(r, t) && n.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && u && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Zg(u.paddingTop),
                  paddingEnd: Zg(u.paddingBottom)
                }
              })
            }
          })
        })),
        [Ug, Vg] = Pg(Rg),
        Gg = s.forwardRef(((e, n) => {
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
          } = e, y = Og(Rg, t), [A, v] = s.useState(null), m = Cg(n, (e => v(e))), b = s.useRef(null), g = s.useRef(""), _ = y.viewport, C = r.content - r.viewport, E = af(f), w = af(d), k = o_(p, 10);

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
              t && E(e, C)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [_, A, C, E]), s.useEffect(w, [r, w]), i_(A, k), i_(y.content, k), (0, i.jsx)(Ug, {
            scope: t,
            scrollbar: A,
            hasThumb: o,
            onThumbChange: af(a),
            onThumbPointerUp: af(u),
            onThumbPositionChange: w,
            onThumbPointerDown: af(l),
            children: (0, i.jsx)(_g.div, {
              ...h,
              ref: m,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: Bg(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = A.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), B(e))
              })),
              onPointerMove: Bg(e.onPointerMove, B),
              onPointerUp: Bg(e.onPointerUp, (e => {
                const n = e.target;
                n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, y.viewport && (y.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Kg = "ScrollAreaThumb",
        Wg = s.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = Vg(Kg, e.__scopeScrollArea);
          return (0, i.jsx)(Eg, {
            present: t || o.hasThumb,
            children: (0, i.jsx)(Xg, {
              ref: n,
              ...r
            })
          })
        })),
        Xg = s.forwardRef(((e, n) => {
          const {
            __scopeScrollArea: t,
            style: r,
            ...o
          } = e, a = Og(Kg, t), u = Vg(Kg, t), {
            onThumbPositionChange: l
          } = u, d = Cg(n, (e => u.onThumbChange(e))), c = s.useRef(), f = o_((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const n = () => {
                if (f(), !c.current) {
                  const n = r_(e, l);
                  c.current = n, l()
                }
              };
              return l(), e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [a.viewport, f, l]), (0, i.jsx)(_g.div, {
            "data-state": u.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Bg(e.onPointerDownCapture, (e => {
              const n = e.target.getBoundingClientRect(),
                t = e.clientX - n.left,
                r = e.clientY - n.top;
              u.onThumbPointerDown({
                x: t,
                y: r
              })
            })),
            onPointerUp: Bg(e.onPointerUp, u.onThumbPointerUp)
          })
        }));
      Wg.displayName = Kg;
      var $g = "ScrollAreaCorner";
      s.forwardRef(((e, n) => {
        const t = Og($g, e.__scopeScrollArea),
          r = Boolean(t.scrollbarX && t.scrollbarY);
        return "scroll" !== t.type && r ? (0, i.jsx)(Yg, {
          ...e,
          ref: n
        }) : null
      })).displayName = $g;
      var Yg = s.forwardRef(((e, n) => {
        const {
          __scopeScrollArea: t,
          ...r
        } = e, o = Og($g, t), [a, u] = s.useState(0), [l, d] = s.useState(0), c = Boolean(a && l);
        return i_(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        })), i_(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), u(e)
        })), c ? (0, i.jsx)(_g.div, {
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

      function Zg(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Qg(e, n) {
        const t = e / n;
        return isNaN(t) ? 0 : t
      }

      function Jg(e) {
        const n = Qg(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - t) * n;
        return Math.max(r, 18)
      }

      function e_(e, n, t = "ltr") {
        const r = Jg(n),
          o = n.scrollbar.paddingStart + n.scrollbar.paddingEnd,
          i = n.scrollbar.size - o,
          a = n.content - n.viewport,
          s = i - r,
          u = ef(e, "ltr" === t ? [0, a] : [-1 * a, 0]);
        return n_([0, a], [0, s])(u)
      }

      function n_(e, n) {
        return t => {
          if (e[0] === e[1] || n[0] === n[1]) return n[0];
          const r = (n[1] - n[0]) / (e[1] - e[0]);
          return n[0] + r * (t - e[0])
        }
      }

      function t_(e, n) {
        return e > 0 && e < n
      }
      var r_ = (e, n = (() => {})) => {
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

      function o_(e, n) {
        const t = af(e),
          r = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), s.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(t, n)
        }), [t, n])
      }

      function i_(e, n) {
        const t = af(n);
        cf((() => {
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
      var a_ = Lg,
        s_ = Ng,
        u_ = Mg,
        l_ = Wg,
        d_ = t(27949),
        c_ = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      c_.setAttributes = A(), c_.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, c_.domAPI = h(), c_.insertStyleElement = m(), f()(d_.A, c_), d_.A && d_.A.locals && d_.A.locals;
      var f_ = "foundry_uaq1gwn";
      const p_ = (0, s.forwardRef)((({
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
          isDisabled: _,
          isReadOnly: C,
          className: E,
          ariaLabelledBy: w
        }, k) => {
          const B = (0, s.useRef)(null),
            x = (0, jn.UP)(B, k),
            P = (0, s.useId)(),
            S = (0, s.useId)(),
            [T = !1, O] = (0, jn.ic)({
              prop: v,
              defaultProp: m,
              onChange: b
            });
          return (0, i.jsxs)("div", {
            className: (0, Ke.$)("foundry_uaq1gw0", E),
            children: [(n && !u || t) && (0, i.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, i.jsx)(d.s6, {
                enabled: !!u,
                children: (0, i.jsx)(W, {
                  className: (0, Ke.$)("foundry_uaq1gw2", _ && f_),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: P,
                    children: [n, g && !c && (0, i.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), t && (0, i.jsx)(te, {
                className: (0, Ke.$)("foundry_uaq1gw3", _ && f_),
                children: t
              })]
            }), (0, i.jsxs)(fg, {
              required: g,
              disabled: _,
              open: T,
              onOpenChange: () => O(!C && !T),
              value: h,
              defaultValue: y,
              onValueChange: A,
              children: [(0, i.jsxs)(pg, {
                className: (0, Ke.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!p && "foundry_uaq1gw7", C && "foundry_uaq1gw6"),
                ref: x,
                "data-testid": a,
                "aria-activedescendant": h,
                "aria-labelledby": w || P,
                "aria-controls": S,
                children: [(0, i.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, i.jsx)(hg, {
                    placeholder: r,
                    "aria-label": h
                  })
                }), (0, i.jsx)(yg, {
                  asChild: !0,
                  className: (0, Ke.$)("foundry_uaq1gw9", (C || _) && "foundry_uaq1gwa"),
                  children: T ? (0, i.jsx)(Ce.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(Ce.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(Ag, {
                children: (0, i.jsx)(vg, {
                  id: S,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, i.jsxs)(a_, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, i.jsx)(mg, {
                      className: (0, Ke.$)("foundry_uaq1gwc", f && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(s_, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(u_, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, i.jsx)(l_, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(d.s6, {
              enabled: !!p || l || 0 === o.length,
              children: (0, i.jsx)(W, {
                className: (0, Ke.$)("foundry_uaq1gwf", _ && f_),
                children: o
              })
            }), p && (0, i.jsxs)(W, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, i.jsx)(Ce.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), p]
            })]
          })
        })),
        h_ = (0, s.forwardRef)((({
          label: e,
          value: n,
          icon: t,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: u
        }, l) => {
          const d = (0, s.useRef)(null),
            c = (0, jn.UP)(d, l),
            f = t && Ce[t];
          return (0, i.jsxs)(bg, {
            value: n,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: c,
            disabled: a,
            "data-testid": u,
            children: [f && "left" === o && (0, i.jsx)(f, {
              label: r || "",
              size: "LG"
            }), (0, i.jsx)(gg, {
              children: e
            }), f && "right" === o && (0, i.jsx)(f, {
              label: r || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var y_;
      y_ = {
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
      const A_ = new Set(["id"]),
        v_ = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        m_ = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        b_ = /^(data-.*)$/;

      function g_(e, n = {}) {
        let {
          labelable: t,
          isLink: r,
          propNames: o
        } = n, i = {};
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (A_.has(n) || t && v_.has(n) || r && m_.has(n) || (null == o ? void 0 : o.has(n)) || b_.test(n)) && (i[n] = e[n]);
        return i
      }
      const __ = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        C_ = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function E_(e) {
        if (Intl.Locale) {
          let n = new Intl.Locale(e).maximize(),
            t = "function" == typeof n.getTextInfo ? n.getTextInfo() : n.textInfo;
          if (t) return "rtl" === t.direction;
          if (n.script) return __.has(n.script)
        }
        let n = e.split("-")[0];
        return C_.has(n)
      }
      const w_ = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        k_ = s.createContext(w_),
        B_ = s.createContext(!1);
      let x_ = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        P_ = new WeakMap;
      const S_ = "function" == typeof s.useId ? function(e) {
        let n = s.useId(),
          [t] = (0, s.useState)(j_());
        return e || `${t?"react-aria":`react-aria${w_.prefix}`}-${n}`
      } : function(e) {
        let n = (0, s.useContext)(k_);
        n !== w_ || x_ || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let t = function(e = !1) {
            let n = (0, s.useContext)(k_),
              t = (0, s.useRef)(null);
            if (null === t.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let t = P_.get(e);
                null == t ? P_.set(e, {
                  id: n.current,
                  state: e.memoizedState
                }) : e.memoizedState !== t.state && (n.current = t.id, P_.delete(e))
              }
              t.current = ++n.current
            }
            return t.current
          }(!!e),
          r = `react-aria${n.prefix}`;
        return e || `${r}-${t}`
      };

      function T_() {
        return !1
      }

      function O_() {
        return !0
      }

      function L_(e) {
        return () => {}
      }

      function j_() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(L_, T_, O_) : (0, s.useContext)(B_)
      }
      const N_ = Symbol.for("react-aria.i18n.locale");

      function R_() {
        let e = "undefined" != typeof window && window[N_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (n) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: E_(e) ? "rtl" : "ltr"
        }
      }
      let M_ = R_(),
        D_ = new Set;

      function I_() {
        M_ = R_();
        for (let e of D_) e(M_)
      }
      const H_ = s.createContext(null);

      function z_() {
        let e = function() {
          let e = j_(),
            [n, t] = (0, s.useState)(M_);
          return (0, s.useEffect)((() => (0 === D_.size && window.addEventListener("languagechange", I_), D_.add(t), () => {
            D_.delete(t), 0 === D_.size && window.removeEventListener("languagechange", I_)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : n
        }();
        return (0, s.useContext)(H_) || e
      }
      const q_ = Symbol.for("react-aria.i18n.locale"),
        F_ = Symbol.for("react-aria.i18n.strings");
      let U_;
      class V_ {
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
          let n = window[q_];
          if (void 0 === U_) {
            let e = window[F_];
            if (!e) return null;
            U_ = {};
            for (let t in e) U_[t] = new V_({
              [n]: e[t]
            }, n)
          }
          let t = null == U_ ? void 0 : U_[e];
          if (!t) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return t
        }
        constructor(e, n = "en-US") {
          this.strings = Object.fromEntries(Object.entries(e).filter((([, e]) => e))), this.defaultLocale = n
        }
      }
      const G_ = new Map,
        K_ = new Map;
      class W_ {
        format(e, n) {
          let t = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof t ? t(n, this) : t
        }
        plural(e, n, t = "cardinal") {
          let r = n["=" + e];
          if (r) return "function" == typeof r ? r() : r;
          let o = this.locale + ":" + t,
            i = G_.get(o);
          return i || (i = new Intl.PluralRules(this.locale, {
            type: t
          }), G_.set(o, i)), r = n[i.select(e)] || n.other, "function" == typeof r ? r() : r
        }
        number(e) {
          let n = K_.get(this.locale);
          return n || (n = new Intl.NumberFormat(this.locale), K_.set(this.locale, n)), n.format(e)
        }
        select(e, n) {
          let t = e[n] || e.other;
          return "function" == typeof t ? t() : t
        }
        constructor(e, n) {
          this.locale = e, this.strings = n
        }
      }
      const X_ = new WeakMap;

      function $_(e, n) {
        let {
          locale: t
        } = z_(), r = function(e, n) {
          return n && V_.getGlobalDictionaryForPackage(n) || function(e) {
            let n = X_.get(e);
            return n || (n = new V_(e), X_.set(e, n)), n
          }(e)
        }(e, n);
        return (0, s.useMemo)((() => new W_(t, r)), [t, r])
      }

      function Y_(...e) {
        return (...n) => {
          for (let t of e) "function" == typeof t && t(...n)
        }
      }
      const Z_ = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Q_(e) {
        const n = (0, s.useRef)(null);
        return Z_((() => {
          n.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const t = n.current;
          return null == t ? void 0 : t(...e)
        }), [])
      }
      let J_ = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        eC = new Map;

      function nC(e) {
        let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = S_(n), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return J_ && (eC.has(o) && !eC.get(o).includes(i) ? eC.set(o, [...eC.get(o), i]) : eC.set(o, [i])), Z_((() => {
          let e = o;
          return () => {
            eC.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, t(e))
        })), o
      }

      function tC(e, n) {
        if (e === n) return e;
        let t = eC.get(e);
        if (t) return t.forEach((e => e(n))), n;
        let r = eC.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function rC(e = []) {
        let n = nC(),
          [t, r] = function(e) {
            let [n, t] = (0, s.useState)(e), r = (0, s.useRef)(null), o = Q_((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : n === e.value ? o() : t(e.value)
            }));
            Z_((() => {
              r.current && o()
            }));
            let i = Q_((e => {
              r.current = e(n), o()
            }));
            return [n, i]
          }(n),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield n, yield document.getElementById(n) ? n : void 0
            }))
          }), [n, r]);
        return Z_(o, [n, o, ...e]), t
      }

      function oC(...e) {
        let n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          let r = e[t];
          for (let e in r) {
            let t = n[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = Y_(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? n.id = tC(t, o) : n[e] = void 0 !== o ? o : t : n[e] = (0, Ke.A)(t, o)
          }
        }
        return n
      }

      function iC(e) {
        if (function() {
            if (null == aC) {
              aC = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return aC = !0, !0
                  }
                })
              } catch (e) {}
            }
            return aC
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
      let aC = null;

      function sC(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((n => e.test(n.brand)))) || e.test(window.navigator.userAgent))
      }

      function uC(e) {
        var n;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform)
      }

      function lC(e) {
        let n = null;
        return () => (null == n && (n = e()), n)
      }
      const dC = lC((function() {
          return uC(/^Mac/i)
        })),
        cC = lC((function() {
          return uC(/^iPhone/i)
        })),
        fC = lC((function() {
          return uC(/^iPad/i) || dC() && navigator.maxTouchPoints > 1
        })),
        pC = lC((function() {
          return cC() || fC()
        })),
        hC = (lC((function() {
          return dC() || pC()
        })), lC((function() {
          return sC(/AppleWebKit/i) && !yC()
        }))),
        yC = lC((function() {
          return sC(/Chrome/i)
        })),
        AC = lC((function() {
          return sC(/Android/i)
        })),
        vC = lC((function() {
          return sC(/Firefox/i)
        })),
        mC = (0, s.createContext)({
          isNative: !0,
          open: function(e, n) {
            ! function(e, n) {
              if (e instanceof HTMLAnchorElement) n(e);
              else if (e.hasAttribute("data-href")) {
                let t = document.createElement("a");
                t.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (t.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (t.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (t.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (t.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (t.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(t), n(t), e.removeChild(t)
              }
            }(e, (e => gC(e, n)))
          },
          useHref: e => e
        });

      function bC() {
        return (0, s.useContext)(mC)
      }

      function gC(e, n, t = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: u
        } = n;
        vC() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (dC() ? i = !0 : a = !0);
        let l = hC() && dC() && !fC() ? new KeyboardEvent("keydown", {
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
        gC.isOpening = t, iC(e), e.dispatchEvent(l), gC.isOpening = !1
      }

      function _C(e) {
        var n;
        const t = bC().useHref(null !== (n = null == e ? void 0 : e.href) && void 0 !== n ? n : "");
        return {
          href: (null == e ? void 0 : e.href) ? t : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      gC.isOpening = !1;
      const CC = e => {
          var n;
          return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document
        },
        EC = e => e && "window" in e && e.window === e ? e : CC(e).defaultView || window;
      let wC = new Map,
        kC = new Set;

      function BC() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let n = t => {
          if (!e(t) || !t.target) return;
          let r = wC.get(t.target);
          if (r && (r.delete(t.propertyName), 0 === r.size && (t.target.removeEventListener("transitioncancel", n), wC.delete(t.target)), 0 === wC.size)) {
            for (let e of kC) e();
            kC.clear()
          }
        };
        document.body.addEventListener("transitionrun", (t => {
          if (!e(t) || !t.target) return;
          let r = wC.get(t.target);
          r || (r = new Set, wC.set(t.target, r), t.target.addEventListener("transitioncancel", n, {
            once: !0
          })), r.add(t.propertyName)
        })), document.body.addEventListener("transitionend", n)
      }

      function xC(e) {
        requestAnimationFrame((() => {
          0 === wC.size ? e() : kC.add(e)
        }))
      }

      function PC(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (AC() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? BC() : document.addEventListener("DOMContentLoaded", BC));
      let SC = null,
        TC = new Set,
        OC = new Map,
        LC = !1,
        jC = !1;

      function NC(e, n) {
        for (let t of TC) t(e, n)
      }

      function RC(e) {
        LC = !0,
          function(e) {
            return !(e.metaKey || !dC() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (SC = "keyboard", NC("keyboard", e))
      }

      function MC(e) {
        SC = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (LC = !0, NC("pointer", e))
      }

      function DC(e) {
        PC(e) && (LC = !0, SC = "virtual")
      }

      function IC(e) {
        e.target !== window && e.target !== document && (LC || jC || (SC = "virtual", NC("virtual", e)), LC = !1, jC = !1)
      }

      function HC() {
        LC = !1, jC = !0
      }

      function zC(e) {
        if ("undefined" == typeof window || OC.get(EC(e))) return;
        const n = EC(e),
          t = CC(e);
        let r = n.HTMLElement.prototype.focus;
        n.HTMLElement.prototype.focus = function() {
          LC = !0, r.apply(this, arguments)
        }, t.addEventListener("keydown", RC, !0), t.addEventListener("keyup", RC, !0), t.addEventListener("click", DC, !0), n.addEventListener("focus", IC, !0), n.addEventListener("blur", HC, !1), "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", MC, !0), t.addEventListener("pointermove", MC, !0), t.addEventListener("pointerup", MC, !0)) : (t.addEventListener("mousedown", MC, !0), t.addEventListener("mousemove", MC, !0), t.addEventListener("mouseup", MC, !0)), n.addEventListener("beforeunload", (() => {
          qC(e)
        }), {
          once: !0
        }), OC.set(n, {
          focus: r
        })
      }
      const qC = (e, n) => {
        const t = EC(e),
          r = CC(e);
        n && r.removeEventListener("DOMContentLoaded", n), OC.has(t) && (t.HTMLElement.prototype.focus = OC.get(t).focus, r.removeEventListener("keydown", RC, !0), r.removeEventListener("keyup", RC, !0), r.removeEventListener("click", DC, !0), t.removeEventListener("focus", IC, !0), t.removeEventListener("blur", HC, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", MC, !0), r.removeEventListener("pointermove", MC, !0), r.removeEventListener("pointerup", MC, !0)) : (r.removeEventListener("mousedown", MC, !0), r.removeEventListener("mousemove", MC, !0), r.removeEventListener("mouseup", MC, !0)), OC.delete(t))
      };

      function FC(e, n) {
        Z_((() => {
          if (e && e.ref && n) return e.ref.current = n.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const n = CC(e);
        let t;
        "loading" !== n.readyState ? zC(e) : (t = () => {
          zC(e)
        }, n.addEventListener("DOMContentLoaded", t))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class UC {
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

      function VC(e) {
        let n = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        Z_((() => {
          const e = n.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let t = Q_((n => {
          null == e || e(n)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            n.current.isFocused = !0;
            let r = e.target,
              o = e => {
                n.current.isFocused = !1, r.disabled && t(new UC("blur", e)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
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

      function GC(e) {
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
      let KC = s.createContext(null);

      function WC(e, n) {
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
            a = VC(i),
            u = (0, s.useCallback)((e => {
              const n = CC(e.target);
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
              onKeyDown: GC(e.onKeyDown),
              onKeyUp: GC(e.onKeyUp)
            }
          }
        }(e), o = oC(t, r), i = function(e) {
          let n = (0, s.useContext)(KC) || {};
          FC(n, e);
          let {
            ref: t,
            ...r
          } = n;
          return r
        }(n), a = e.isDisabled ? {} : i, u = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          u.current && n.current && function(e) {
            const n = CC(e);
            if ("virtual" === SC) {
              let t = n.activeElement;
              xC((() => {
                n.activeElement === t && e.isConnected && iC(e)
              }))
            } else iC(e)
          }(n.current), u.current = !1
        }), [n]), {
          focusableProps: oC({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let XC = "default",
        $C = "",
        YC = new WeakMap;

      function ZC(e) {
        if (pC()) {
          if ("default" === XC) {
            const n = CC(e);
            $C = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none"
          }
          XC = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (YC.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function QC(e) {
        if (pC()) {
          if ("disabled" !== XC) return;
          XC = "restoring", setTimeout((() => {
            xC((() => {
              if ("restoring" === XC) {
                const n = CC(e);
                "none" === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = $C || ""), $C = "", XC = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && YC.has(e)) {
          let n = YC.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = n), "" === e.getAttribute("style") && e.removeAttribute("style"), YC.delete(e)
        }
      }
      const JC = s.createContext({
        register: () => {}
      });
      JC.displayName = "PressResponderContext";
      var eE = new WeakMap;
      class nE {
        continuePropagation() {
          Ut(this, eE, !1)
        }
        get shouldStopPropagation() {
          return qt(this, eE)
        }
        constructor(e, n, t, r) {
          var o;
          Ft(this, eE, {
            writable: !0,
            value: void 0
          }), Ut(this, eE, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : t.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, u, l = 0,
            d = null;
          null != t.clientX && null != t.clientY && (u = t.clientX, d = t.clientY), a && (null != u && null != d ? (s = u - a.left, l = d - a.top) : (s = a.width / 2, l = a.height / 2)), this.type = e, this.pointerType = n, this.target = t.currentTarget, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.x = s, this.y = l
        }
      }
      const tE = Symbol("linkClicked");

      function rE(e) {
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
          let n = (0, s.useContext)(JC);
          if (n) {
            let {
              register: t,
              ...r
            } = n;
            e = oC(r, e), t()
          }
          return FC(n, e.ref), e
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
        }(), b = Q_(((e, n) => {
          let o = A.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let t = new nE("pressstart", n, e);
            r(t), i = t.shouldStopPropagation
          }
          return t && t(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        })), g = Q_(((e, r, i = !0) => {
          let s = A.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let u = !0;
          if (o) {
            let n = new nE("pressend", r, e);
            o(n), u = n.shouldStopPropagation
          }
          if (t && t(!1), y(!1), n && i && !a) {
            let t = new nE("press", r, e);
            n(t), u && (u = t.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, u
        })), _ = Q_(((e, n) => {
          let t = A.current;
          if (a) return !1;
          if (i) {
            t.isTriggeringEvent = !0;
            let r = new nE("pressup", n, e);
            return i(r), t.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), C = Q_((e => {
          let n = A.current;
          n.isPressed && n.target && (n.isOverTarget && null != n.pointerType && g(uE(n.target, e), n.pointerType, !1), n.isPressed = !1, n.isOverTarget = !1, n.activePointerId = null, n.pointerType = null, m(), c || QC(n.target))
        })), E = Q_((e => {
          d && C(e)
        })), w = (0, s.useMemo)((() => {
          let e = A.current,
            n = {
              onKeyDown(n) {
                if (iE(n.nativeEvent, n.currentTarget) && n.currentTarget.contains(n.target)) {
                  var r;
                  fE(n.target, n.key) && n.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !n.repeat) {
                    e.target = n.currentTarget, e.isPressed = !0, o = b(n, "keyboard");
                    let r = n.currentTarget,
                      i = n => {
                        iE(n, r) && !n.repeat && r.contains(n.target) && e.target && _(uE(e.target, n), "keyboard")
                      };
                    v(CC(n.currentTarget), "keyup", Y_(i, t), !0)
                  }
                  o && n.stopPropagation(), n.metaKey && dC() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(n.key, n.nativeEvent))
                } else "Meta" === n.key && (e.metaKeyEvents = new Map)
              },
              onClick(n) {
                if ((!n || n.currentTarget.contains(n.target)) && n && 0 === n.button && !e.isTriggeringEvent && !gC.isOpening) {
                  let t = !0;
                  if (a && n.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || PC(n.nativeEvent))) {
                    a || l || iC(n.currentTarget);
                    let e = b(n, "virtual"),
                      r = _(n, "virtual"),
                      o = g(n, "virtual");
                    t = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, t && n.stopPropagation()
                }
              }
            },
            t = n => {
              var t;
              if (e.isPressed && e.target && iE(n, e.target)) {
                var r;
                fE(n.target, n.key) && n.preventDefault();
                let t = n.target;
                g(uE(e.target, n), "keyboard", e.target.contains(t)), m(), "Enter" !== n.key && oE(e.target) && e.target.contains(t) && !n[tE] && (n[tE] = !0, gC(e.target, n, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(n.key)
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
              if (o = n.nativeEvent, !AC() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              dE(n.currentTarget) && n.preventDefault(), e.pointerType = n.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, a || l || iC(n.currentTarget), c || ZC(e.target), s = b(n, e.pointerType), v(CC(n.currentTarget), "pointermove", t, !1), v(CC(n.currentTarget), "pointerup", r, !1), v(CC(n.currentTarget), "pointercancel", i, !1)), s && n.stopPropagation()
            }, n.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (dE(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, n.onPointerUp = n => {
              n.currentTarget.contains(n.target) && "virtual" !== e.pointerType && 0 === n.button && lE(n, n.currentTarget) && _(n, e.pointerType || n.pointerType)
            };
            let t = n => {
                n.pointerId === e.activePointerId && (e.target && lE(n, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(uE(e.target, n), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, g(uE(e.target, n), e.pointerType, !1), E(n)))
              },
              r = n => {
                n.pointerId === e.activePointerId && e.isPressed && 0 === n.button && e.target && (lE(n, e.target) && null != e.pointerType ? g(uE(e.target, n), e.pointerType) : e.isOverTarget && null != e.pointerType && g(uE(e.target, n), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, m(), c || QC(e.target), "ontouchend" in e.target && "mouse" !== n.pointerType && v(e.target, "touchend", o, {
                  once: !0
                }))
              },
              o = e => {
                cE(e.currentTarget) && e.preventDefault()
              },
              i = e => {
                C(e)
              };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && C(e)
            }
          } else {
            n.onMouseDown = n => {
              0 === n.button && n.currentTarget.contains(n.target) && (dE(n.currentTarget) && n.preventDefault(), e.ignoreEmulatedMouseEvents ? n.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = n.currentTarget, e.pointerType = PC(n.nativeEvent) ? "virtual" : "mouse", a || l || iC(n.currentTarget), b(n, e.pointerType) && n.stopPropagation(), v(CC(n.currentTarget), "mouseup", t, !1)))
            }, n.onMouseEnter = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, t = b(n, e.pointerType)), t && n.stopPropagation()
            }, n.onMouseLeave = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, t = g(n, e.pointerType, !1), E(n)), t && n.stopPropagation()
            }, n.onMouseUp = n => {
              n.currentTarget.contains(n.target) && (e.ignoreEmulatedMouseEvents || 0 !== n.button || _(n, e.pointerType || "mouse"))
            };
            let t = n => {
              0 === n.button && (e.isPressed = !1, m(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && lE(n, e.target) && null != e.pointerType ? g(uE(e.target, n), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && g(uE(e.target, n), e.pointerType, !1), e.isOverTarget = !1))
            };
            n.onTouchStart = n => {
              if (!n.currentTarget.contains(n.target)) return;
              let t = function(e) {
                const {
                  targetTouches: n
                } = e;
                return n.length > 0 ? n[0] : null
              }(n.nativeEvent);
              t && (e.activePointerId = t.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = n.currentTarget, e.pointerType = "touch", a || l || iC(n.currentTarget), c || ZC(e.target), b(sE(e.target, n), e.pointerType) && n.stopPropagation(), v(EC(n.currentTarget), "scroll", r, !0))
            }, n.onTouchMove = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = aE(n.nativeEvent, e.activePointerId),
                r = !0;
              t && lE(t, n.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(sE(e.target, n), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = g(sE(e.target, n), e.pointerType, !1), E(sE(e.target, n))), r && n.stopPropagation()
            }, n.onTouchEnd = n => {
              if (!n.currentTarget.contains(n.target)) return;
              if (!e.isPressed) return void n.stopPropagation();
              let t = aE(n.nativeEvent, e.activePointerId),
                r = !0;
              t && lE(t, n.currentTarget) && null != e.pointerType ? (_(sE(e.target, n), e.pointerType), r = g(sE(e.target, n), e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = g(sE(e.target, n), e.pointerType, !1)), r && n.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !c && QC(e.target), m()
            }, n.onTouchCancel = n => {
              n.currentTarget.contains(n.target) && (n.stopPropagation(), e.isPressed && C(sE(e.target, n)))
            };
            let r = n => {
              e.isPressed && n.target.contains(e.target) && C({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            n.onDragStart = e => {
              e.currentTarget.contains(e.target) && C(e)
            }
          }
          return n
        }), [v, a, l, m, c, C, E, g, b, _]);
        return (0, s.useEffect)((() => () => {
          var e;
          c || QC(null !== (e = A.current.target) && void 0 !== e ? e : void 0)
        }), [c]), {
          isPressed: u || h,
          pressProps: oC(p, w)
        }
      }

      function oE(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function iE(e, n) {
        const {
          key: t,
          code: r
        } = e, o = n, i = o.getAttribute("role");
        return !("Enter" !== t && " " !== t && "Spacebar" !== t && "Space" !== r || o instanceof EC(o).HTMLInputElement && !hE(o, t) || o instanceof EC(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && oE(o)) && "Enter" !== t)
      }

      function aE(e, n) {
        const t = e.changedTouches;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (r.identifier === n) return r
        }
        return null
      }

      function sE(e, n) {
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

      function uE(e, n) {
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

      function lE(e, n) {
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

      function dE(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function cE(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : oE(e)))
      }

      function fE(e, n) {
        return e instanceof HTMLInputElement ? !hE(e, n) : cE(e)
      }
      const pE = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function hE(e, n) {
        return "checkbox" === e.type || "radio" === e.type ? " " === n : pE.has(e.type)
      }

      function yE(e, n) {
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
        } = WC(e, n), {
          pressProps: c,
          isPressed: f
        } = rE({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          isDisabled: s,
          ref: n
        }), p = g_(u, {
          labelable: !0
        }), h = oC(d, c), y = bC();
        return {
          isPressed: f,
          linkProps: oC(p, _C(e), {
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
      var AE = t(79370),
        vE = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      vE.setAttributes = A(), vE.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, vE.domAPI = h(), vE.insertStyleElement = m(), f()(AE.A, vE), AE.A && AE.A.locals && AE.A.locals;
      var mE = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        bE = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        gE = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        _E = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        CE = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      const EE = (0, s.forwardRef)((({
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
            c = (0, jn.UP)(d, l),
            f = (0, s.useRef)(null),
            {
              countWrappedElements: p
            } = (0, jn.Pt)(),
            h = e[0],
            y = e[e.length - 1],
            A = e.slice(1, e.length - 1),
            [v, m] = (0, s.useState)(A),
            [b, g] = (0, s.useState)([]),
            _ = (0, s.useCallback)((() => {
              const e = p(f);
              m(A.slice(e, A.length)), g(A.slice(0, e))
            }), [f]);
          (0, s.useEffect)((() => {
            const e = new ResizeObserver(_);
            return f.current && e.observe(f.current), () => {
              f.current && e.unobserve(f.current)
            }
          }), [f.current]);
          const C = (0, s.useMemo)((() => {
              const e = A.slice().reverse();
              return (0, i.jsxs)("ol", {
                className: mE[n],
                ref: f,
                "aria-hidden": "true",
                children: [!r && h && (0, i.jsx)(wE, {
                  href: h.url,
                  size: n,
                  icon: h.icon,
                  iconLabel: h.iconLabel,
                  iconPosition: h.iconPosition,
                  children: h.label
                }, h.label), b.length > 0 && (0, i.jsx)("li", {
                  className: gE[n],
                  children: (0, i.jsx)("button", {
                    className: _E,
                    children: "..."
                  })
                }), o && y && (0, i.jsx)(wE, {
                  href: y.url,
                  size: n,
                  icon: y.icon,
                  iconLabel: y.iconLabel,
                  iconPosition: y.iconPosition,
                  isCurrent: !0,
                  children: y.label
                }, y.label), e.map((e => (0, i.jsx)(wE, {
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
              } = e, r = $_((o = y_) && o.__esModule ? o.default : o, "@react-aria/breadcrumbs");
              var o;
              return {
                navProps: {
                  ...g_(t, {
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
              className: CE[n],
              "data-testid": a,
              ref: c,
              children: [!r && h && (0, i.jsx)(wE, {
                href: h.url,
                size: n,
                icon: h.icon,
                iconLabel: h.iconLabel,
                iconPosition: h.iconPosition,
                children: h.label
              }, h.label), b.length > 0 && (0, i.jsx)("li", {
                className: gE[n],
                children: (0, i.jsx)(kE, {
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
                return (0, i.jsx)(wE, {
                  href: o,
                  size: n,
                  icon: a,
                  iconLabel: s,
                  iconPosition: u,
                  children: r
                }, `${r.replace(/\s/g,"")}-${t}`)
              })), o && y && (0, i.jsx)(wE, {
                href: y.url,
                size: n,
                icon: y.icon,
                iconLabel: y.iconLabel,
                iconPosition: y.iconPosition,
                isCurrent: !0,
                children: y.label
              }, y.label)]
            }), C]
          })
        })),
        wE = ({
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
              } = yE({
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
            f = n && Ce[n];
          return (0, i.jsx)("li", {
            className: gE[e],
            children: (0, i.jsxs)(c, {
              ...u,
              ref: a,
              className: (0, Ke.$)(bE[e], l && "foundry_m1icrxd"),
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
        kE = ({
          items: e
        }) => {
          const [n, t] = (0, s.useState)(!1);
          return (0, i.jsxs)(fg, {
            open: n,
            onOpenChange: () => t(!n),
            children: [(0, i.jsx)(pg, {
              className: _E,
              children: "..."
            }), (0, i.jsx)(Ag, {
              children: (0, i.jsx)(vg, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, i.jsx)(mg, {
                  className: "foundry_m1icrxg",
                  children: e.map(((e, n) => (0, i.jsx)(bg, {
                    value: e.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, i.jsx)(gg, {
                      children: e.label
                    })
                  }, `${e.label}-${n}`)))
                })
              })
            })]
          })
        },
        BE = ({
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
        xE = ({
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
        PE = ({
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
        SE = ({
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
        TE = ({
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
        OE = ({
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

      function LE(e, n, t) {
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

      function jE(e = {}) {
        let {
          isReadOnly: n
        } = e, [t, r] = LE(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function NE(e, n, t) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        Z_((() => {
          if ("native" === r && (null == t ? void 0 : t.current)) {
            let r = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            t.current.setCustomValidity(r), t.current.hasAttribute("title") || (t.current.title = ""), n.realtimeValidation.isInvalid || n.updateValidation({
              isInvalid: !(e = t.current).validity.valid,
              validationDetails: RE(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = Q_((() => {
            n.resetValidation()
          })),
          a = Q_((e => {
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
            }(i) === t.current && (o ? o() : null === (a = t.current) || void 0 === a || a.focus(), SC = "keyboard", NC("keyboard", null)), e.preventDefault()
          })),
          u = Q_((() => {
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

      function RE(e) {
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
      const ME = {
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
        DE = {
          ...ME,
          customError: !0,
          valid: !1
        },
        IE = {
          isInvalid: !1,
          validationDetails: ME,
          validationErrors: []
        },
        HE = (0, s.createContext)({}),
        zE = "__formValidationState" + Date.now();

      function qE(e) {
        if (e[zE]) {
          let {
            realtimeValidation: n,
            displayValidation: t,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[zE];
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
              validationDetails: DE
            } : null,
            d = (0, s.useMemo)((() => UE(function(e, n) {
              if ("function" == typeof e) {
                let t = e(n);
                if (t && "boolean" != typeof t) return FE(t)
              }
              return []
            }(a, o))), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = null);
          let c = (0, s.useContext)(HE),
            f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => FE(c[e]))) : FE(c[r]) : []), [c, r]),
            [p, h] = (0, s.useState)(c),
            [y, A] = (0, s.useState)(!1);
          c !== p && (h(c), A(!1));
          let v = (0, s.useMemo)((() => UE(y ? [] : f)), [y, f]),
            m = (0, s.useRef)(IE),
            [b, g] = (0, s.useState)(IE),
            _ = (0, s.useRef)(IE),
            [C, E] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!C) return;
            E(!1);
            let e = d || i || m.current;
            VE(e, _.current) || (_.current = e, g(e))
          })), {
            realtimeValidation: l || v || d || i || IE,
            displayValidation: "native" === u ? l || v || b : l || v || d || i || b,
            updateValidation(e) {
              "aria" !== u || VE(b, e) ? m.current = e : g(e)
            },
            resetValidation() {
              let e = IE;
              VE(e, _.current) || (_.current = e, g(e)), "native" === u && E(!1), A(!0)
            },
            commitValidation() {
              "native" === u && E(!0), A(!0)
            }
          }
        }(e)
      }

      function FE(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function UE(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: DE
        } : null
      }

      function VE(e, n) {
        return e === n || e && n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every(((e, t) => e === n.validationErrors[t])) && Object.entries(e.validationDetails).every((([e, t]) => n.validationDetails[e] === t))
      }

      function GE(e, n, t) {
        let r = (0, s.useRef)(n),
          o = Q_((() => {
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

      function KE(e, n, t) {
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
        } = rE({
          isDisabled: r
        }), {
          pressProps: h,
          isPressed: y
        } = rE({
          isDisabled: r || o,
          onPress() {
            n.toggle()
          }
        }), {
          focusableProps: A
        } = WC(e, t), v = oC(f, A), m = g_(e, {
          labelable: !0
        });
        return GE(t, n.isSelected, n.setSelected), {
          labelProps: oC(h, {
            onClick: e => e.preventDefault()
          }),
          inputProps: oC(m, {
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
      var WE = t(44161),
        XE = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function $E(e) {
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

      function YE(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function ZE(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? YE(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = $E(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : YE(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function QE(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      XE.setAttributes = A(), XE.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, XE.domAPI = h(), XE.insertStyleElement = m(), f()(WE.A, XE), WE.A && WE.A.locals && WE.A.locals;
      var JE = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        ew = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = ZE(ZE({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) JE(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return QE(e.variantClassNames, (e => QE(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        nw = ew({
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
        tw = ew({
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
        rw = ew({
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
        ow = ew({
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
      const iw = (0, s.forwardRef)((({
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
            g = (0, jn.UP)(b, m),
            _ = (0, s.useId)(),
            {
              setSelected: C,
              ...E
            } = jE({
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
              let r = qE({
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
                } = KE({
                  ...e,
                  isInvalid: o
                }, n, t);
              NE(e, r, t);
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
              id: _
            }, {
              ...E,
              setSelected: v.isReadOnly ? () => !1 : C
            }, b),
            S = (0, a.v6)({
              ...w,
              "aria-checked": P,
              className: A
            }, {
              className: "foundry_11gbdty1"
            }),
            T = f ? r[`Dash${l}`] : r[`Check${l}`],
            O = x && !!y;
          return (0, i.jsxs)("label", {
            className: "foundry_11gbdty0",
            children: [(0, i.jsxs)("div", {
              className: tw({
                size: l
              }),
              children: [(0, i.jsx)(d.s6, {
                children: (0, i.jsx)("input", {
                  ...S,
                  ref: g
                })
              }), (0, i.jsx)("div", {
                className: nw({
                  size: l,
                  appearance: c
                }),
                "aria-hidden": "true",
                "data-state": f ? "mixed" : P ? "checked" : "unchecked",
                "data-disabled": k || B,
                "data-testid": h,
                children: (0, i.jsx)("span", {
                  className: "foundry_11gbdtyc",
                  children: (P || f) && (0, i.jsx)(T, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, i.jsx)(d.s6, {
              enabled: !!p,
              children: (0, i.jsxs)("div", {
                className: ow({
                  size: l,
                  isDisabled: k
                }),
                children: [(0, i.jsx)("p", {
                  className: rw({
                    size: l
                  }),
                  children: o
                }), u && !O && (0, i.jsx)("p", {
                  className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: u
                }), O && (0, i.jsx)("p", {
                  className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: y
                })]
              })
            })]
          })
        })),
        aw = new WeakMap;

      function sw(e, n) {
        return "#comment" !== e.nodeName && function(e) {
          const n = EC(e);
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
        }(e, n) && (!e.parentElement || sw(e.parentElement, e))
      }
      const uw = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        lw = uw.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      uw.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const dw = uw.join(':not([hidden]):not([tabindex="-1"]),');

      function cw(e, n) {
        return !!e && !!n && n.some((n => n.contains(e)))
      }

      function fw(e, n, t) {
        let r = (null == n ? void 0 : n.tabbable) ? dw : lw,
          o = CC(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == n || null === (o = n.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !sw(e) || t && !cw(e, t) || (null == n ? void 0 : n.accept) && !n.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == n ? void 0 : n.from) && (o.currentNode = n.from), o
      }
      class pw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, n, t) {
          let r = this.fastMap.get(null != n ? n : null);
          if (!r) return;
          let o = new hw({
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
          for (let e of this.traverse()) e !== n && n.nodeToRestore && e.nodeToRestore && n.scopeRef && n.scopeRef.current && cw(e.nodeToRestore, n.scopeRef.current) && (e.nodeToRestore = n.nodeToRestore);
          let r = n.children;
          t && (t.removeChild(n), r.size > 0 && r.forEach((e => t && t.addChild(e)))), this.fastMap.delete(n.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let n of e.children) yield* this.traverse(n)
        }
        clone() {
          var e;
          let n = new pw;
          var t;
          for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
          return n
        }
        constructor() {
          this.fastMap = new Map, this.root = new hw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class hw {
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

      function yw(e, n) {
        let {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (t = nC(t), o && r) {
          let e = new Set([t, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !n || (r = n), {
          id: t,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function Aw(e) {
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
          n = nC(n);
          let a = nC(),
            s = {};
          return t ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? n : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: yw({
              id: n,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = rC([Boolean(n), Boolean(t), r, o]), u = rC([Boolean(n), Boolean(t), r, o]);
        return a = oC(a, {
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

      function vw(e, n) {
        let {
          name: t,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: u = "aria"
        } = e, {
          direction: l
        } = z_(), {
          isInvalid: d,
          validationErrors: c,
          validationDetails: f
        } = n.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: y,
          errorMessageProps: A
        } = Aw({
          ...e,
          labelElementType: "span",
          isInvalid: n.isInvalid,
          errorMessage: e.errorMessage || c
        }), v = g_(e, {
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
          }), [t, o, i]), u = VC(a), l = (0, s.useCallback)((e => {
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
        }), b = nC(t);
        return aw.set(n, {
          name: b,
          descriptionId: y.id,
          errorMessageId: A.id,
          validationBehavior: u
        }), {
          radioGroupProps: oC(v, {
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
              let r, o = fw(e.currentTarget, {
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
      new pw;
      let mw = Math.round(1e10 * Math.random()),
        bw = 0;
      var gw = t(44625),
        _w = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function Cw(e) {
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

      function Ew(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function ww(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Ew(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Cw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ew(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function kw(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      _w.setAttributes = A(), _w.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, _w.domAPI = h(), _w.insertStyleElement = m(), f()(gw.A, _w), gw.A && gw.A.locals && gw.A.locals;
      var Bw = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        xw = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = ww(ww({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Bw(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kw(e.variantClassNames, (e => kw(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        Pw = xw({
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
      const Sw = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        Tw = (0, s.forwardRef)((({
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
          } = y, m = (0, s.useRef)(null), b = (0, jn.UP)(m, A), g = y.id || (0, s.useId)(), _ = function(e) {
            let n = (0, s.useMemo)((() => e.name || `radio-group-${mw}-${++bw}`), [e.name]);
            var t;
            let [r, o] = LE(e.value, null !== (t = e.defaultValue) && void 0 !== t ? t : null, e.onChange), [i, a] = (0, s.useState)(null), u = qE({
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
          }(y), C = {
            state: _,
            size: t,
            appearance: r
          }, {
            radioGroupProps: E,
            labelProps: w,
            descriptionProps: k,
            isInvalid: B,
            errorMessageProps: x
          } = vw({
            ...y,
            id: g,
            label: e,
            isRequired: u,
            description: n,
            orientation: h
          }, _), P = (0, a.v6)({
            ...E,
            className: f
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": x?.id
          }), S = B && !!p;
          return (0, i.jsxs)("div", {
            ref: b,
            "data-testid": c,
            ...P,
            children: [(0, i.jsx)(d.s6, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, i.jsx)(W, {
                  ...w,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, u && !l && (0, i.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), n && (0, i.jsx)(te, {
                  ...k,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: n
                })]
              })
            }), (0, i.jsx)("div", {
              className: Pw({
                size: t,
                orientation: h
              }),
              children: (0, i.jsx)(Sw.Provider, {
                value: C,
                children: v
              })
            }), S && (0, i.jsxs)(W, {
              ...x,
              appearance: "bold",
              className: "foundry_njguqnb",
              children: [(0, i.jsx)(Ce.X, {
                size: "MD",
                label: "",
                className: "foundry_njguqnc"
              }), p]
            })]
          })
        })),
        Ow = ({
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
        Lw = ({
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
        jw = ({
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
      var Nw = t(96295),
        Rw = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      Rw.setAttributes = A(), Rw.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, Rw.domAPI = h(), Rw.insertStyleElement = m(), f()(Nw.A, Rw), Nw.A && Nw.A.locals && Nw.A.locals;
      var Mw = xw({
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
        Dw = xw({
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
        Iw = xw({
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
        Hw = xw({
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
      const zw = (0, s.forwardRef)((({
        label: e,
        description: n,
        hideLabel: t,
        testId: r,
        className: a,
        ...u
      }, l) => {
        const c = (0, s.useRef)(null),
          f = (0, jn.UP)(c, l),
          p = u.id || (0, s.useId)(),
          h = (0, s.useContext)(Sw),
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
              } = rE({
                isDisabled: s
              }),
              {
                pressProps: c,
                isPressed: f
              } = rE({
                isDisabled: s,
                onPress() {
                  n.setSelectedValue(r)
                }
              }),
              {
                focusableProps: p
              } = WC(oC(e, {
                onFocus: () => n.setLastFocusedValue(r)
              }), t),
              h = oC(l, p),
              y = g_(e, {
                labelable: !0
              }),
              A = -1;
            null != n.selectedValue ? n.selectedValue === r && (A = 0) : n.lastFocusedValue !== r && null != n.lastFocusedValue || (A = 0), s && (A = void 0);
            let {
              name: v,
              descriptionId: m,
              errorMessageId: b,
              validationBehavior: g
            } = aw.get(n);
            return GE(t, n.selectedValue, n.setSelectedValue), NE({
              validationBehavior: g
            }, n, t), {
              labelProps: oC(c, {
                onClick: e => e.preventDefault()
              }),
              inputProps: oC(y, {
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
          _ = o[`Dot${v}`];
        return (0, i.jsxs)("label", {
          className: (0, Ke.$)("foundry_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: Iw({
              size: v
            }),
            children: [(0, i.jsx)(d.s6, {
              children: (0, i.jsx)("input", {
                ...m,
                ref: f,
                className: "foundry_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: Dw({
                appearance: A
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": g,
              "data-testid": r,
              children: (0, i.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, i.jsx)(_, {})
              })
            })]
          }), (0, i.jsx)(d.s6, {
            enabled: !!t,
            children: (0, i.jsxs)("div", {
              className: Hw({
                size: v
              }),
              children: [(0, i.jsx)("p", {
                className: Mw({
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
      var qw = t(17401),
        Fw = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function Uw(e) {
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

      function Vw(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function Gw(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? Vw(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Uw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vw(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function Kw(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      Fw.setAttributes = A(), Fw.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, Fw.domAPI = h(), Fw.insertStyleElement = m(), f()(qw.A, Fw), qw.A && qw.A.locals && qw.A.locals;
      var Ww = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        Xw = (e => {
          var n = n => {
            var t = e.defaultClassName,
              r = Gw(Gw({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) Ww(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kw(e.variantClassNames, (e => Kw(e, (e => e.split(" ")[0]))))
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
      const $w = (0, s.forwardRef)((({
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
            className: (0, Ke.$)(Xw({
              thickness: t,
              orientation: n
            }), e),
            role: c,
            "aria-orientation": n,
            "data-testid": a,
            ...s
          })
        })),
        Yw = ({
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
        Zw = ({
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
        Qw = ({
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
      var Jw = t(96722),
        ek = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function nk(e) {
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

      function tk(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function rk(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? tk(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = nk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tk(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function ok(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      ek.setAttributes = A(), ek.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, ek.domAPI = h(), ek.insertStyleElement = m(), f()(Jw.A, ek), Jw.A && Jw.A.locals && Jw.A.locals;
      var ik = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        ak = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = rk(rk({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) ik(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ok(e.variantClassNames, (e => ok(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        sk = ak({
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
        uk = ak({
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
        lk = ak({
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
        dk = ak({
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
        ck = ak({
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
        fk = ak({
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
      const pk = (0, s.forwardRef)((({
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
          y = (0, jn.UP)(h, p),
          A = (0, s.useId)(),
          v = jE(f),
          {
            inputProps: m,
            isDisabled: b,
            isReadOnly: g,
            isSelected: _
          } = function(e, n, t) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: u
            } = KE(e, n, t);
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
          C = a ? Ce[a] : Qw,
          E = u ? Ce[u] : Zw;
        return (0, i.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, i.jsxs)("div", {
            className: ck({
              appearance: r
            }),
            "data-state": _ ? "selected" : "unselected",
            "data-disabled": b || g,
            "data-testid": c,
            children: [(0, i.jsx)(d.s6, {
              children: (0, i.jsx)("input", {
                ...m,
                ref: y
              })
            }), (0, i.jsxs)("div", {
              className: dk({
                size: t
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: sk({
                  size: t,
                  isSelected: _
                }),
                children: (0, i.jsx)(Yw, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: uk({
                    size: t,
                    isSelected: _,
                    position: "left"
                  }),
                  children: (0, i.jsx)(C, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: uk({
                    size: t,
                    isSelected: _,
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
              className: fk({
                size: t,
                isDisabled: b
              }),
              children: [(0, i.jsx)("p", {
                className: lk({
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
      pk.displayName = "Switch";
      var hk = t(77802),
        yk = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };

      function Ak(e) {
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

      function vk(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function mk(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? vk(Object(t), !0).forEach((function(n) {
            var r, o, i;
            r = e, o = n, i = t[n], (o = Ak(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vk(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }

      function bk(e, n) {
        var t = {};
        for (var r in e) t[r] = n(e[r], r);
        return t
      }
      yk.setAttributes = A(), yk.insert = e => {
        const n = e.dataset.shadowtarget;
        n && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [n]: e
          }
        })
      }, yk.domAPI = h(), yk.insertStyleElement = m(), f()(hk.A, yk), hk.A && hk.A.locals && hk.A.locals;
      var gk = (e, n, t) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = n[r]) && void 0 !== o ? o : t[r])) return !1
          }
          return !0
        },
        _k = e => {
          var n = n => {
            var t = e.defaultClassName,
              r = mk(mk({}, e.defaultVariants), n);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var u = e.variantClassNames[o][s];
                u && (t += " " + u)
              }
            }
            for (var [l, d] of e.compoundVariants) gk(l, r, e.defaultVariants) && (t += " " + d);
            return t
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bk(e.variantClassNames, (e => bk(e, (e => e.split(" ")[0]))))
            }
          }, n
        },
        Ck = _k({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ek = _k({
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
        wk = _k({
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
      const kk = (0, s.createContext)(null);

      function Bk() {
        const e = (0, s.useContext)(kk);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const xk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          status: t,
          background: r,
          ...o
        }, s) => {
          const u = e ? d.DX : "div",
            l = (0, a.v6)(o, {
              className: wk({
                status: t,
                background: r
              })
            });
          return (0, i.jsx)(kk.Provider, {
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
        Pk = (0, s.forwardRef)((({
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
        Sk = (0, s.forwardRef)((({
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
        Tk = {
          danger: "XCircleSolid",
          information: "InfoCircleSolid",
          success: "CheckCircleSolid",
          warning: "AlertTriangleSolid"
        },
        Ok = (0, s.forwardRef)((({
          icon: e,
          ...n
        }, t) => {
          const {
            status: r
          } = Bk(), o = e || Tk[r], s = Ce[o], u = (0, a.v6)(n, {
            className: Ek({
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
        Lk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          ...t
        }, r) => {
          const o = e ? d.DX : "div",
            s = (0, a.v6)(t, {
              className: "foundry_1m368qhi"
            });
          return (0, i.jsx)(S, {
            level: 5,
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": n,
              ...s
            })
          })
        })),
        jk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          ...t
        }, r) => {
          const o = e ? d.DX : "div",
            s = (0, a.v6)(t, {
              className: "foundry_1m368qhj"
            });
          return (0, i.jsx)(W, {
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": n,
              ...s
            })
          })
        })),
        Nk = (0, s.forwardRef)((({
          asChild: e,
          children: n,
          testId: t,
          ...r
        }, o) => {
          const u = (0, s.useRef)(null),
            l = (0, jn.UP)(u, o),
            c = e ? d.DX : "a",
            {
              linkProps: f,
              isPressed: p
            } = yE(r, u),
            h = (0, a.v6)(f, {
              className: "foundry_1m368qhk foundry_1d5mo5m0"
            });
          return (0, i.jsx)(W, {
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
        Rk = (0, s.forwardRef)((({
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
        Mk = (0, s.forwardRef)((({
          asChild: e,
          testId: n,
          className: t,
          ...r
        }, o) => {
          const a = e ? d.DX : "div";
          return (0, i.jsx)(W, {
            asChild: !0,
            children: (0, i.jsx)(a, {
              ref: o,
              "data-testid": n,
              className: (0, Ke.$)(t, "foundry_1m368qho"),
              ...r
            })
          })
        })),
        Dk = (0, s.forwardRef)((({
          testId: e,
          label: n = "close alert",
          ...t
        }, r) => {
          const {
            background: o
          } = Bk(), s = (0, a.v6)(t, {
            className: Ck({
              hasBackground: "none" !== o
            })
          });
          return (0, i.jsx)(Lp, {
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
    91299: (e, n, t) => {
      t.r(n), t.d(n, {
        __addDisposableResource: () => N,
        __assign: () => i,
        __asyncDelegator: () => k,
        __asyncGenerator: () => w,
        __asyncValues: () => B,
        __await: () => E,
        __awaiter: () => h,
        __classPrivateFieldGet: () => O,
        __classPrivateFieldIn: () => j,
        __classPrivateFieldSet: () => L,
        __createBinding: () => A,
        __decorate: () => s,
        __disposeResources: () => M,
        __esDecorate: () => l,
        __exportStar: () => v,
        __extends: () => o,
        __generator: () => y,
        __importDefault: () => T,
        __importStar: () => S,
        __makeTemplateObject: () => x,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => c,
        __read: () => b,
        __rest: () => a,
        __runInitializers: () => d,
        __setFunctionName: () => f,
        __spread: () => g,
        __spreadArray: () => C,
        __spreadArrays: () => _,
        __values: () => m,
        default: () => D
      });
      var r = function(e, n) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }, r(e, n)
      };

      function o(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
      }
      var i = function() {
        return i = Object.assign || function(e) {
          for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          return e
        }, i.apply(this, arguments)
      };

      function a(e, n) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
        }
        return t
      }

      function s(e, n, t, r) {
        var o, i = arguments.length,
          a = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, t) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, n, t, r);
        else
          for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(n, t, a) : o(n, t)) || a);
        return i > 3 && a && Object.defineProperty(n, t, a), a
      }

      function u(e, n) {
        return function(t, r) {
          n(t, r, e)
        }
      }

      function l(e, n, t, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, u = r.kind, l = "getter" === u ? "get" : "setter" === u ? "set" : "value", d = !n && e ? r.static ? e : e.prototype : null, c = n || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), f = !1, p = t.length - 1; p >= 0; p--) {
          var h = {};
          for (var y in r) h[y] = "access" === y ? {} : r[y];
          for (var y in r.access) h.access[y] = r.access[y];
          h.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            i.push(a(e || null))
          };
          var A = (0, t[p])("accessor" === u ? {
            get: c.get,
            set: c.set
          } : c[l], h);
          if ("accessor" === u) {
            if (void 0 === A) continue;
            if (null === A || "object" != typeof A) throw new TypeError("Object expected");
            (s = a(A.get)) && (c.get = s), (s = a(A.set)) && (c.set = s), (s = a(A.init)) && o.unshift(s)
          } else(s = a(A)) && ("field" === u ? o.unshift(s) : c[l] = s)
        }
        d && Object.defineProperty(d, r.name, c), f = !0
      }

      function d(e, n, t) {
        for (var r = arguments.length > 2, o = 0; o < n.length; o++) t = r ? n[o].call(e, t) : n[o].call(e);
        return r ? t : void 0
      }

      function c(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, n, t) {
        return "symbol" == typeof n && (n = n.description ? "[".concat(n.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: t ? "".concat(t, " ", n) : n
        })
      }

      function p(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, n)
      }

      function h(e, n, t, r) {
        return new(t || (t = Promise))((function(o, i) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (e) {
              i(e)
            }
          }

          function s(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              i(e)
            }
          }

          function u(e) {
            var n;
            e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
              e(n)
            }))).then(a, s)
          }
          u((r = r.apply(e, n || [])).next())
        }))
      }

      function y(e, n) {
        var t, r, o, i, a = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return i = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(u) {
            return function(s) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                if (t = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
                switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                  case 0:
                  case 1:
                    o = s;
                    break;
                  case 4:
                    return a.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = s[1], s = [0];
                    continue;
                  case 7:
                    s = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                      a.label = s[1];
                      break
                    }
                    if (6 === s[0] && a.label < o[1]) {
                      a.label = o[1], o = s;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(s);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                s = n.call(e, a)
              } catch (e) {
                s = [6, e], r = 0
              } finally {
                t = o = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, u])
          }
        }
      }
      var A = Object.create ? function(e, n, t, r) {
        void 0 === r && (r = t);
        var o = Object.getOwnPropertyDescriptor(n, t);
        o && !("get" in o ? !n.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return n[t]
          }
        }), Object.defineProperty(e, r, o)
      } : function(e, n, t, r) {
        void 0 === r && (r = t), e[r] = n[t]
      };

      function v(e, n) {
        for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(n, t) || A(n, e, t)
      }

      function m(e) {
        var n = "function" == typeof Symbol && Symbol.iterator,
          t = n && e[n],
          r = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function b(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r, o, i = t.call(e),
          a = [];
        try {
          for (;
            (void 0 === n || n-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (t = i.return) && t.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }

      function g() {
        for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(b(arguments[n]));
        return e
      }

      function _() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        var r = Array(e),
          o = 0;
        for (n = 0; n < t; n++)
          for (var i = arguments[n], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r
      }

      function C(e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, i = n.length; o < i; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
      }

      function E(e) {
        return this instanceof E ? (this.v = e, this) : new E(e)
      }

      function w(e, n, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = t.apply(e, n || []),
          i = [];
        return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function a(e) {
          o[e] && (r[e] = function(n) {
            return new Promise((function(t, r) {
              i.push([e, n, t, r]) > 1 || s(e, n)
            }))
          })
        }

        function s(e, n) {
          try {
            (t = o[e](n)).value instanceof E ? Promise.resolve(t.value.v).then(u, l) : d(i[0][2], t)
          } catch (e) {
            d(i[0][3], e)
          }
          var t
        }

        function u(e) {
          s("next", e)
        }

        function l(e) {
          s("throw", e)
        }

        function d(e, n) {
          e(n), i.shift(), i.length && s(i[0][0], i[0][1])
        }
      }

      function k(e) {
        var n, t;
        return n = {}, r("next"), r("throw", (function(e) {
          throw e
        })), r("return"), n[Symbol.iterator] = function() {
          return this
        }, n;

        function r(r, o) {
          n[r] = e[r] ? function(n) {
            return (t = !t) ? {
              value: E(e[r](n)),
              done: !1
            } : o ? o(n) : n
          } : o
        }
      }

      function B(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = m(e), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
          return this
        }, n);

        function r(t) {
          n[t] = e[t] && function(n) {
            return new Promise((function(r, o) {
              ! function(e, n, t, r) {
                Promise.resolve(r).then((function(n) {
                  e({
                    value: n,
                    done: t
                  })
                }), n)
              }(r, o, (n = e[t](n)).done, n.value)
            }))
          }
        }
      }

      function x(e, n) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: n
        }) : e.raw = n, e
      }
      var P = Object.create ? function(e, n) {
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: n
        })
      } : function(e, n) {
        e.default = n
      };

      function S(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && A(n, e, t);
        return P(n, e), n
      }

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function O(e, n, t, r) {
        if ("a" === t && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof n ? e !== n || !r : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === t ? r : "a" === t ? r.call(e) : r ? r.value : n.get(e)
      }

      function L(e, n, t, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof n ? e !== n || !o : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, t) : o ? o.value = t : n.set(e, t), t
      }

      function j(e, n) {
        if (null === n || "object" != typeof n && "function" != typeof n) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? n === e : e.has(n)
      }

      function N(e, n, t) {
        if (null != n) {
          if ("object" != typeof n && "function" != typeof n) throw new TypeError("Object expected.");
          var r;
          if (t) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = n[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = n[Symbol.dispose]
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          e.stack.push({
            value: n,
            dispose: r,
            async: t
          })
        } else t && e.stack.push({
          async: !0
        });
        return n
      }
      var R = "function" == typeof SuppressedError ? SuppressedError : function(e, n, t) {
        var r = new Error(t);
        return r.name = "SuppressedError", r.error = e, r.suppressed = n, r
      };

      function M(e) {
        function n(n) {
          e.error = e.hasError ? new R(n, e.error, "An error was suppressed during disposal.") : n, e.hasError = !0
        }
        return function t() {
          for (; e.stack.length;) {
            var r = e.stack.pop();
            try {
              var o = r.dispose && r.dispose.call(r.value);
              if (r.async) return Promise.resolve(o).then(t, (function(e) {
                return n(e), t()
              }))
            } catch (e) {
              n(e)
            }
          }
          if (e.hasError) throw e.error
        }()
      }
      const D = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: s,
        __param: u,
        __metadata: p,
        __awaiter: h,
        __generator: y,
        __createBinding: A,
        __exportStar: v,
        __values: m,
        __read: b,
        __spread: g,
        __spreadArrays: _,
        __spreadArray: C,
        __await: E,
        __asyncGenerator: w,
        __asyncDelegator: k,
        __asyncValues: B,
        __makeTemplateObject: x,
        __importStar: S,
        __importDefault: T,
        __classPrivateFieldGet: O,
        __classPrivateFieldSet: L,
        __classPrivateFieldIn: j,
        __addDisposableResource: N,
        __disposeResources: M
      }
    }
  }
]);