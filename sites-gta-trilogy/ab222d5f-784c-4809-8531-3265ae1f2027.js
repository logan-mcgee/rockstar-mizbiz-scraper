try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ab222d5f-784c-4809-8531-3265ae1f2027", e._sentryDebugIdIdentifier = "sentry-dbid-ab222d5f-784c-4809-8531-3265ae1f2027")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [1299, 1503, 9625], {
    954: (e, t, r) => {
      "use strict";
      e.exports = r(2834)
    },
    1299: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => N,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => k,
        __asyncValues: () => P,
        __await: () => j,
        __awaiter: () => y,
        __classPrivateFieldGet: () => C,
        __classPrivateFieldIn: () => L,
        __classPrivateFieldSet: () => $,
        __createBinding: () => b,
        __decorate: () => s,
        __disposeResources: () => A,
        __esDecorate: () => u,
        __exportStar: () => h,
        __extends: () => n,
        __generator: () => _,
        __importDefault: () => T,
        __importStar: () => I,
        __makeTemplateObject: () => S,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => F,
        __runInitializers: () => l,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => m,
        default: () => M
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function s(e, t, r, o) {
        var n, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o);
        else
          for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function u(e, t, r, o, n, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = o.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? o.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, o.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var _ in o) y[_] = "access" === _ ? {} : o[_];
          for (var _ in o.access) y.access[_] = o.access[_];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], y);
          if ("accessor" === c) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (s = i(b.get)) && (f.get = s), (s = i(b.set)) && (f.set = s), (s = i(b.init)) && n.unshift(s)
          } else(s = i(b)) && ("field" === c ? n.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, o.name, f), p = !0
      }

      function l(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function p(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, r, o) {
        return new(r || (r = Promise))((function(n, a) {
          function i(e) {
            try {
              c(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            try {
              c(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, s)
          }
          c((o = o.apply(e, t || [])).next())
        }))
      }

      function _(e, t) {
        var r, o, n, a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return a.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = s[1], s = [0];
                    continue;
                  case 7:
                    s = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      a.label = s[1];
                      break
                    }
                    if (6 === s[0] && a.label < n[1]) {
                      a.label = n[1], n = s;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(s);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                s = t.call(e, a)
              } catch (e) {
                s = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var b = Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r);
        var n = Object.getOwnPropertyDescriptor(t, r);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, o, n)
      } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
      };

      function h(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
      }

      function m(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          o = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && o >= e.length && (e = void 0), {
              value: e && e[o++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, n, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = a.next()).done;) i.push(o.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a)
          } finally {
            if (n) throw n.error
          }
        }
        return i
      }

      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var o = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, n++) o[n] = a[i];
        return o
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function k(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        })), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function i(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise((function(r, o) {
              a.push([e, t, r, o]) > 1 || s(e, t)
            }))
          }, t && (o[e] = t(o[e])))
        }

        function s(e, t) {
          try {
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, u) : l(a[0][2], r)
          } catch (e) {
            l(a[0][3], e)
          }
          var r
        }

        function c(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
      }

      function E(e) {
        var t, r;
        return t = {}, o("next"), o("throw", (function(e) {
          throw e
        })), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: j(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = m(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function o(r) {
          t[r] = e[r] && function(t) {
            return new Promise((function(o, n) {
              ! function(e, t, r, o) {
                Promise.resolve(o).then((function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }), t)
              }(o, n, (t = e[r](t)).done, t.value)
            }))
          }
        }
      }

      function S(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var x = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        D = function(e) {
          return D = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, D(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = D(e), o = 0; o < r.length; o++) "default" !== r[o] && b(t, e, r[o]);
        return x(t, e), t
      }

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function C(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function $(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function L(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function N(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var o, n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            o = t[Symbol.asyncDispose]
          }
          if (void 0 === o) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            o = t[Symbol.dispose], r && (n = o)
          }
          if ("function" != typeof o) throw new TypeError("Object not disposable.");
          n && (o = function() {
            try {
              n.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: o,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var R = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new R(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, o = 0;
        return function n() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === o) return o = 0, e.stack.push(r), Promise.resolve().then(n);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return o |= 2, Promise.resolve(a).then(n, (function(e) {
                return t(e), n()
              }))
            } else o |= 1
          } catch (e) {
            t(e)
          }
          if (1 === o) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const M = {
        __extends: n,
        __assign: a,
        __rest: i,
        __decorate: s,
        __param: c,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: _,
        __createBinding: b,
        __exportStar: h,
        __values: m,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: k,
        __asyncDelegator: E,
        __asyncValues: P,
        __makeTemplateObject: S,
        __importStar: I,
        __importDefault: T,
        __classPrivateFieldGet: C,
        __classPrivateFieldSet: $,
        __classPrivateFieldIn: L,
        __addDisposableResource: N,
        __disposeResources: A,
        __rewriteRelativeImportExtension: F
      }
    },
    2562: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    2779: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = n.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, n] = t;
            return n === r && (e = {
              site: o,
              subDomain: n
            }, !0)
          })) >= 0)), a = n[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    2834: (e, t, r) => {
      "use strict";
      var o = r(2229),
        n = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var o, c = {},
          u = null,
          l = null;
        for (o in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, o) && !s.hasOwnProperty(o) && (c[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === c[o] && (c[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: c,
          _owner: i.current
        }
      }
      t.jsx = c, t.jsxs = c
    },
    3019: (e, t, r) => {
      var o = {
        "./de": [7625, 6879],
        "./en": [2609, 2243],
        "./es": [1270, 278],
        "./fr": [5598, 9022],
        "./it": [8355, 2365],
        "./ja": [1647, 9377],
        "./ko": [2800, 9028],
        "./pl": [438, 1242],
        "./pt": [5534, 7970],
        "./ru": [3779, 7453],
        "./zh": [8336, 8880]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 3019, e.exports = n
    },
    3514: (e, t, r) => {
      var o = {
        "./de": [7148, 4710],
        "./en": [8052, 3486],
        "./es": [1719, 4011],
        "./fr": [5803, 4851],
        "./it": [8842, 9936],
        "./ja": [2090, 2156],
        "./ko": [5529, 3885],
        "./pl": [3031, 6891],
        "./pt": [1039, 3475],
        "./ru": [2542, 4528],
        "./zh": [2049, 4861]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 3514, e.exports = n
    },
    4375: (e, t, r) => {
      var o = {
        "./de": [8883, 5639],
        "./en": [3420, 6267],
        "./es": [9116, 5742],
        "./fr": [4632, 2678],
        "./it": [2685, 6997],
        "./ja": [9437, 6361],
        "./ko": [5130, 7452],
        "./pl": [6096, 2642],
        "./pt": [9464, 3034],
        "./ru": [8825, 3941],
        "./zh": [7030, 5832]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 4375, e.exports = n
    },
    4819: (e, t, r) => {
      var o = {
        "./de": [821, 5259],
        "./en": [5021, 4799],
        "./es": [8042, 3370],
        "./fr": [4850, 7010],
        "./it": [4215, 4913],
        "./ja": [2379, 6285],
        "./ko": [6372, 6664],
        "./pl": [3194, 1054],
        "./pt": [6514, 662],
        "./ru": [3796, 5233],
        "./zh": [7900, 4700]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 4819, e.exports = n
    },
    5267: (e, t, r) => {
      var o = {
        "./de": [2265, 299],
        "./en": [5649, 5663],
        "./es": [534, 5530],
        "./fr": [2414, 2466],
        "./it": [4083, 7073],
        "./ja": [4271, 4621],
        "./ko": [5648, 824],
        "./pl": [5270, 2398],
        "./pt": [4984, 9126],
        "./ru": [5475, 3697],
        "./zh": [400, 1868]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 5267, e.exports = n
    },
    8525: (e, t, r) => {
      var o = {
        "./de": [2016, 9990],
        "./en": [3944, 1822],
        "./es": [1395, 2347],
        "./fr": [9767, 131],
        "./it": [5126, 8272],
        "./ja": [1134, 7436],
        "./ko": [8789, 2221],
        "./pl": [7635, 2171],
        "./pt": [155, 8755],
        "./ru": [6570, 2864],
        "./zh": [5333, 3197]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 8525, e.exports = n
    },
    8718: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => b,
        ReactIntlProviderForMocking: () => s.A,
        createDevLocaleHook: () => P,
        createIntl: () => a.E,
        defineMessages: () => o.YK,
        englishLocale: () => _,
        getCookieValueByName: () => p,
        getLocale: () => m,
        linkWithLocale: () => S,
        localeCookieHandler: () => d,
        locales: () => h,
        onLanguageChange: () => x,
        splitLocale: () => E,
        useIntl: () => i.A,
        withIntl: () => k
      });
      var o = r(6479),
        n = r(8855),
        a = r(1664),
        i = r(6644),
        s = r(4047),
        c = r(2229),
        u = r(2779),
        l = r(2562);
      const f = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${(0,l.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        p = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find((e => e.startsWith(r))),
            n = o?.substring(r.length, o.length);
          return n
        },
        d = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const o = p(e);
          return o && !r || f(e, t), [o, (n = e, e => {
            f(n, e)
          })];
          var n
        },
        y = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        _ = y[0],
        b = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = y,
        m = () => {
          const {
            location: e
          } = window, t = (0, u.A)(), r = (e => {
            const t = h.map((e => e.subdomaincom)),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), n = _;
          let a = n;
          const i = `rockstarweb_lang.${t.cookieIdentifier}`,
            s = p(i);
          a = t.currentSite?.site === u.C.www ? h.find((e => e.subdomaincom === o)) || h.find((e => e.subdomaincom === r)) || n : h.find((e => e.iso === s)) || n;
          const [c, l] = d(i, a.iso);
          return [a, l]
        };
      var w = r(7781);
      const v = () => "en-US";

      function g(e) {
        const t = e.split("-");
        return (0, w.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function O(e, t) {
        return e[t] ?? {}
      }
      var j = r(954);

      function k(e, t, r, o) {
        return n => {
          const a = (0, c.useMemo)((() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? m()[0].iso ?? v(),
                  [, o] = [g(r), O(e, r)];
                var n;
                return {
                  rsLocale: r,
                  locale: r,
                  messages: (n = o, {
                    ...n
                  })
                }
              }(e, t)
            }(t, r)
          }), [r]);
          return (0, j.jsx)(s.A, {
            locale: a?.locale || v(),
            messages: {
              ...a?.messages
            },
            onError: o,
            children: a && (0, j.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function E(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const P = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = m(), [r, o] = E(t);
            return e?.[o] ?? e.us
          }
        },
        S = e => {
          const [{
            subdomaincom: t
          }] = m();
          if (/^http(s):\/\//.test(e)) return e;
          const r = h.map((e => e.subdomaincom));
          return "en" !== t && r.includes(t) ? `${window.location.origin}/${t}/${e.replaceAll(/^\//g,"")}}` : `${window.location.origin}/${e.replaceAll(/^\//g,"")}}`
        },
        x = e => {
          let {
            selectedLocale: t,
            track: r,
            parent: o = ""
          } = e;
          const n = (0, u.A)(),
            [, a] = m(),
            {
              subdomaincom: i,
              iso: s
            } = t,
            c = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return h.map((e => e.subdomaincom)).includes(r[0]) && (t = r.slice(1).join("/")), n.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(i);
          r?.({
            event: "cta_other",
            link_url: c,
            text: i,
            element_placement: o?.toLowerCase()
          }), a(s), window.location.href = c
        }
    }
  }
]);