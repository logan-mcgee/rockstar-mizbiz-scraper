try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "42e8906d-f662-4d85-9c35-6c29781ad483", e._sentryDebugIdIdentifier = "sentry-dbid-42e8906d-f662-4d85-9c35-6c29781ad483")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [8894], {
    148: (e, t, r) => {
      r.d(t, {
        A: () => a,
        C: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        o = [{
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
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = o.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, o] = t;
            return o === r && (e = {
              site: n,
              subDomain: o
            }, !0)
          })) >= 0)), a = o[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    1454: (e, t, r) => {
      var n = r(2229),
        o = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var n, c = {},
          u = null,
          l = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, n) && !s.hasOwnProperty(n) && (c[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === c[n] && (c[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: l,
          props: c,
          _owner: i.current
        }
      }
      t.jsx = c, t.jsxs = c
    },
    3514: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => F,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => P,
        __asyncValues: () => S,
        __await: () => j,
        __awaiter: () => y,
        __classPrivateFieldGet: () => R,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => A,
        __createBinding: () => b,
        __decorate: () => s,
        __disposeResources: () => N,
        __esDecorate: () => u,
        __exportStar: () => w,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => D,
        __importStar: () => k,
        __makeTemplateObject: () => x,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => v,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => G,
        __runInitializers: () => l,
        __setFunctionName: () => p,
        __spread: () => m,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => h,
        default: () => L
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function s(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function u(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
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
            (s = i(b.get)) && (f.get = s), (s = i(b.set)) && (f.set = s), (s = i(b.init)) && o.unshift(s)
          } else(s = i(b)) && ("field" === c ? o.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, n.name, f), p = !0
      }

      function l(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
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

      function y(e, t, r, n) {
        return new(r || (r = Promise))((function(o, a) {
          function i(e) {
            try {
              c(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            try {
              c(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, s)
          }
          c((n = n.apply(e, t || [])).next())
        }))
      }

      function _(e, t) {
        var r, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
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
                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
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
                    a.label++, n = s[1], s = [0];
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
                s = t.call(e, a)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = o = 0
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
      var b = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var o = Object.getOwnPropertyDescriptor(t, r);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, o)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function w(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
      }

      function h(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function v(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function m() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
        return n
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function P(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        })), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise((function(r, n) {
              a.push([e, t, r, n]) > 1 || s(e, t)
            }))
          }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
          try {
            (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, u) : l(a[0][2], r)
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
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: j(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise((function(n, o) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then((function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }), t)
              }(n, o, (t = e[r](t)).done, t.value)
            }))
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var I = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, T(e)
        };

      function k(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = T(e), n = 0; n < r.length; n++) "default" !== r[n] && b(t, e, r[n]);
        return I(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function R(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function A(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function F(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, o;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          o && (n = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var M = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function N(e) {
        function t(t) {
          e.error = e.hasError ? new M(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function o() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(a).then(o, (function(e) {
                return t(e), o()
              }))
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function G(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const L = {
        __extends: o,
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
        __exportStar: w,
        __values: h,
        __read: v,
        __spread: m,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: P,
        __asyncDelegator: E,
        __asyncValues: S,
        __makeTemplateObject: x,
        __importStar: k,
        __importDefault: D,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: C,
        __addDisposableResource: F,
        __disposeResources: N,
        __rewriteRelativeImportExtension: G
      }
    },
    5854: (e, t, r) => {
      e.exports = r(1454)
    },
    7171: (e, t, r) => {
      r.d(t, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    }
  }
]);