! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0146a998-0474-434f-afc0-167b1ecece7c", e._sentryDebugIdIdentifier = "sentry-dbid-0146a998-0474-434f-afc0-167b1ecece7c")
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
  [6638, 3980], {
    53980: e => {
      e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjcuNTkgMTI4LjgzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjEyMDIwOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTQuODQsMTI4LjgzbDEzLjgyLTI5LjcxLTcuNDgtNy44OWMtNS41My01LjgzLTcuMjEtNy42LTcuNjctOC4yNWwtLjA4LjA2Yy0xLjIxLTEuNjItMS40OS01LjU0LTEuNDktNi43OSwwLTEuOTYuMTItMy45NC4yNS02LjA0LjE1LTIuNDIuMzEtNC45Mi4zMS03Ljc4LDAtNy4xMi0zLjEzLTEwLjI5LTEwLjE3LTEwLjI5aC0xMy43OWwtNi4xOCwyOS4yNUgwTDE3LjE5LDBoNDAuNThjMTMuMjYsMCwyNi44MiwyLjU0LDI2LjgyLDIxLjM0LDAsMTIuNDYtNi4yMywyMC40NC0xNy41OSwyMi42NCw0Ljk5LDEuOCw3LjE0LDUuOTEsNy4xNCwxMy4zOSwwLDMuMTEtLjA5LDUuNzktLjE4LDguMzktLjA4LDIuMjYtLjE1LDQuNC0uMTUsNi41NiwwLDIuNzkuNzIsNy4wMywyLjMsOS45MmgyLjM5bDE2LjQyLTI3Ljc0LDQuNDQsMjcuOTNoMjguMjJsLTI1LjQ3LDE3LjgzLDQuMDgsMjcuODUtMjEuODctMTYuOC0yOS41LDE3LjUzWk01NC4yMSw4Mi40M2MuNDUuNDksMTAuMjMsMTAuOCwxNS40MSwxNi4yNmwuMjMuMjUtMTIuNzQsMjcuMzksMjcuMy0xNi4yMiwyMC40NSwxNS43MS0zLjgxLTI2LjAyLDIzLjM3LTE2LjM2aC0yNS45bC00LjE0LTI2LjAzLTE1LjMsMjUuODRoLTMuNTRsLS4xNC0uMjVjLTEuNzgtMy4wNy0yLjU4LTcuNTctMi41OC0xMC42NywwLTIuMTguMDctNC4zMi4xNS02LjYuMDktMi41OS4xOC01LjI3LjE4LTguMzYsMC03LjgtMi4zMS0xMS41My03Ljk4LTEyLjlsLS4zOC0uMDl2LTEuMDZsLjQzLS4wNmMxNS4xOS0yLjExLDE4LjM4LTEzLjA5LDE4LjM4LTIxLjkyLDAtMTcuOTItMTMuMDUtMjAuMzQtMjUuODItMjAuMzRIMThMMS4yMyw4MC40aDIwLjMzbDYuMTgtMjkuMjVoMTQuNmM3LjUxLDAsMTEuMTcsMy42OSwxMS4xNywxMS4yOSwwLDIuODktLjE2LDUuNDEtLjMxLDcuODQtLjEzLDIuMDgtLjI1LDQuMDUtLjI1LDUuOTcsMCwxLjguNCw0Ljk5LDEuMjcsNi4xN1pNNDguNzEsMzcuMDloLTE3LjU4bDQuMjctMjAuMzhoMTYuMTljNy45NCwwLDExLjk3LDIuOTcsMTEuOTcsOC44NCwwLDcuNjYtNSwxMS41NC0xNC44NSwxMS41NFpNMzIuMzYsMzYuMDloMTYuMzVjOS4zMiwwLDEzLjg1LTMuNDUsMTMuODUtMTAuNTQsMC01LjI4LTMuNTktNy44NC0xMC45Ny03Ljg0aC0xNS4zOGwtMy44NSwxOC4zOFoiLz4KICA8L2c+Cjwvc3ZnPg=="
    },
    91299: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => z,
        __assign: () => a,
        __asyncDelegator: () => T,
        __asyncGenerator: () => N,
        __asyncValues: () => D,
        __await: () => v,
        __awaiter: () => d,
        __classPrivateFieldGet: () => S,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => x,
        __createBinding: () => w,
        __decorate: () => c,
        __disposeResources: () => P,
        __esDecorate: () => s,
        __exportStar: () => _,
        __extends: () => o,
        __generator: () => M,
        __importDefault: () => E,
        __importStar: () => I,
        __makeTemplateObject: () => m,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => f,
        __read: () => L,
        __rest: () => i,
        __runInitializers: () => l,
        __setFunctionName: () => y,
        __spread: () => b,
        __spreadArray: () => h,
        __spreadArrays: () => g,
        __values: () => j,
        default: () => k
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

      function c(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function u(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function s(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, u = n.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), y = !1, p = r.length - 1; p >= 0; p--) {
          var d = {};
          for (var M in n) d[M] = "access" === M ? {} : n[M];
          for (var M in n.access) d.access[M] = n.access[M];
          d.addInitializer = function(e) {
            if (y) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var w = (0, r[p])("accessor" === u ? {
            get: f.get,
            set: f.set
          } : f[s], d);
          if ("accessor" === u) {
            if (void 0 === w) continue;
            if (null === w || "object" != typeof w) throw new TypeError("Object expected");
            (c = i(w.get)) && (f.get = c), (c = i(w.set)) && (f.set = c), (c = i(w.init)) && o.unshift(c)
          } else(c = i(w)) && ("field" === u ? o.unshift(c) : f[s] = c)
        }
        l && Object.defineProperty(l, n.name, f), y = !0
      }

      function l(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function y(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function d(e, t, r, n) {
        return new(r || (r = Promise))((function(o, a) {
          function i(e) {
            try {
              u(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              u(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function u(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, c)
          }
          u((n = n.apply(e, t || [])).next())
        }))
      }

      function M(e, t) {
        var r, n, o, a, i = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function c(c) {
          return function(u) {
            return function(c) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return i.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = c[1], c = [0];
                    continue;
                  case 7:
                    c = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      i.label = c[1];
                      break
                    }
                    if (6 === c[0] && i.label < o[1]) {
                      i.label = o[1], o = c;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(c);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                c = t.call(e, i)
              } catch (e) {
                c = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, u])
          }
        }
      }
      var w = Object.create ? function(e, t, r, n) {
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

      function _(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || w(t, e, r)
      }

      function j(e) {
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

      function L(e, t) {
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

      function b() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(L(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
        return n
      }

      function h(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function v(e) {
        return this instanceof v ? (this.v = e, this) : new v(e)
      }

      function N(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e) {
          o[e] && (n[e] = function(t) {
            return new Promise((function(r, n) {
              a.push([e, t, r, n]) > 1 || c(e, t)
            }))
          })
        }

        function c(e, t) {
          try {
            (r = o[e](t)).value instanceof v ? Promise.resolve(r.value.v).then(u, s) : l(a[0][2], r)
          } catch (e) {
            l(a[0][3], e)
          }
          var r
        }

        function u(e) {
          c("next", e)
        }

        function s(e) {
          c("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function T(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: v(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function D(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = j(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
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

      function m(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var O = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: t
        })
      } : function(e, t) {
        e.default = t
      };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && w(t, e, r);
        return O(t, e), t
      }

      function E(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function S(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function x(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function z(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose]
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var A = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function P(e) {
        function t(t) {
          e.error = e.hasError ? new A(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        return function r() {
          for (; e.stack.length;) {
            var n = e.stack.pop();
            try {
              var o = n.dispose && n.dispose.call(n.value);
              if (n.async) return Promise.resolve(o).then(r, (function(e) {
                return t(e), r()
              }))
            } catch (e) {
              t(e)
            }
          }
          if (e.hasError) throw e.error
        }()
      }
      const k = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: u,
        __metadata: p,
        __awaiter: d,
        __generator: M,
        __createBinding: w,
        __exportStar: _,
        __values: j,
        __read: L,
        __spread: b,
        __spreadArrays: g,
        __spreadArray: h,
        __await: v,
        __asyncGenerator: N,
        __asyncDelegator: T,
        __asyncValues: D,
        __makeTemplateObject: m,
        __importStar: I,
        __importDefault: E,
        __classPrivateFieldGet: S,
        __classPrivateFieldSet: x,
        __classPrivateFieldIn: C,
        __addDisposableResource: z,
        __disposeResources: P
      }
    }
  }
]);