! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1a3b414-1097-4940-925e-0919674a2bde", e._sentryDebugIdIdentifier = "sentry-dbid-b1a3b414-1097-4940-925e-0919674a2bde")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [7353], {
    1133: (e, n, r) => {
      r.r(n), r.d(n, {
        __addDisposableResource: () => N,
        __assign: () => d,
        __asyncDelegator: () => G,
        __asyncGenerator: () => T,
        __asyncValues: () => L,
        __await: () => S,
        __awaiter: () => w,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldIn: () => R,
        __classPrivateFieldSet: () => O,
        __createBinding: () => p,
        __decorate: () => s,
        __disposeResources: () => k,
        __esDecorate: () => o,
        __exportStar: () => m,
        __extends: () => a,
        __generator: () => f,
        __importDefault: () => P,
        __importStar: () => B,
        __makeTemplateObject: () => E,
        __metadata: () => l,
        __param: () => _,
        __propKey: () => u,
        __read: () => g,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => K,
        __runInitializers: () => c,
        __setFunctionName: () => y,
        __spread: () => M,
        __spreadArray: () => b,
        __spreadArrays: () => v,
        __values: () => h,
        default: () => q
      });
      var t = function(e, n) {
        return t = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }, t(e, n)
      };

      function a(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
      }
      var d = function() {
        return d = Object.assign || function(e) {
          for (var n, r = 1, t = arguments.length; r < t; r++)
            for (var a in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          return e
        }, d.apply(this, arguments)
      };

      function i(e, n) {
        var r = {};
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (t = Object.getOwnPropertySymbols(e); a < t.length; a++) n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]])
        }
        return r
      }

      function s(e, n, r, t) {
        var a, d = arguments.length,
          i = d < 3 ? n : null === t ? t = Object.getOwnPropertyDescriptor(n, r) : t;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, n, r, t);
        else
          for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (d < 3 ? a(i) : d > 3 ? a(n, r, i) : a(n, r)) || i);
        return d > 3 && i && Object.defineProperty(n, r, i), i
      }

      function _(e, n) {
        return function(r, t) {
          n(r, t, e)
        }
      }

      function o(e, n, r, t, a, d) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, _ = t.kind, o = "getter" === _ ? "get" : "setter" === _ ? "set" : "value", c = !n && e ? t.static ? e : e.prototype : null, u = n || (c ? Object.getOwnPropertyDescriptor(c, t.name) : {}), y = !1, l = r.length - 1; l >= 0; l--) {
          var w = {};
          for (var f in t) w[f] = "access" === f ? {} : t[f];
          for (var f in t.access) w.access[f] = t.access[f];
          w.addInitializer = function(e) {
            if (y) throw new TypeError("Cannot add initializers after decoration has completed");
            d.push(i(e || null))
          };
          var p = (0, r[l])("accessor" === _ ? {
            get: u.get,
            set: u.set
          } : u[o], w);
          if ("accessor" === _) {
            if (void 0 === p) continue;
            if (null === p || "object" != typeof p) throw new TypeError("Object expected");
            (s = i(p.get)) && (u.get = s), (s = i(p.set)) && (u.set = s), (s = i(p.init)) && a.unshift(s)
          } else(s = i(p)) && ("field" === _ ? a.unshift(s) : u[o] = s)
        }
        c && Object.defineProperty(c, t.name, u), y = !0
      }

      function c(e, n, r) {
        for (var t = arguments.length > 2, a = 0; a < n.length; a++) r = t ? n[a].call(e, r) : n[a].call(e);
        return t ? r : void 0
      }

      function u(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function y(e, n, r) {
        return "symbol" == typeof n && (n = n.description ? "[".concat(n.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", n) : n
        })
      }

      function l(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, n)
      }

      function w(e, n, r, t) {
        return new(r || (r = Promise))((function(a, d) {
          function i(e) {
            try {
              _(t.next(e))
            } catch (e) {
              d(e)
            }
          }

          function s(e) {
            try {
              _(t.throw(e))
            } catch (e) {
              d(e)
            }
          }

          function _(e) {
            var n;
            e.done ? a(e.value) : (n = e.value, n instanceof r ? n : new r((function(e) {
              e(n)
            }))).then(i, s)
          }
          _((t = t.apply(e, n || [])).next())
        }))
      }

      function f(e, n) {
        var r, t, a, d = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(_) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (d = 0)), d;) try {
                if (r = 1, t && (a = 2 & s[0] ? t.return : s[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, s[1])).done) return a;
                switch (t = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return d.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    d.label++, t = s[1], s = [0];
                    continue;
                  case 7:
                    s = d.ops.pop(), d.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = d.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      d = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      d.label = s[1];
                      break
                    }
                    if (6 === s[0] && d.label < a[1]) {
                      d.label = a[1], a = s;
                      break
                    }
                    if (a && d.label < a[2]) {
                      d.label = a[2], d.ops.push(s);
                      break
                    }
                    a[2] && d.ops.pop(), d.trys.pop();
                    continue
                }
                s = n.call(e, d)
              } catch (e) {
                s = [6, e], t = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, _])
          }
        }
      }
      var p = Object.create ? function(e, n, r, t) {
        void 0 === t && (t = r);
        var a = Object.getOwnPropertyDescriptor(n, r);
        a && !("get" in a ? !n.__esModule : a.writable || a.configurable) || (a = {
          enumerable: !0,
          get: function() {
            return n[r]
          }
        }), Object.defineProperty(e, t, a)
      } : function(e, n, r, t) {
        void 0 === t && (t = r), e[t] = n[r]
      };

      function m(e, n) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(n, r) || p(n, e, r)
      }

      function h(e) {
        var n = "function" == typeof Symbol && Symbol.iterator,
          r = n && e[n],
          t = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && t >= e.length && (e = void 0), {
              value: e && e[t++],
              done: !e
            }
          }
        };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function g(e, n) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var t, a, d = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === n || n-- > 0) && !(t = d.next()).done;) i.push(t.value)
        } catch (e) {
          a = {
            error: e
          }
        } finally {
          try {
            t && !t.done && (r = d.return) && r.call(d)
          } finally {
            if (a) throw a.error
          }
        }
        return i
      }

      function M() {
        for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(g(arguments[n]));
        return e
      }

      function v() {
        for (var e = 0, n = 0, r = arguments.length; n < r; n++) e += arguments[n].length;
        var t = Array(e),
          a = 0;
        for (n = 0; n < r; n++)
          for (var d = arguments[n], i = 0, s = d.length; i < s; i++, a++) t[a] = d[i];
        return t
      }

      function b(e, n, r) {
        if (r || 2 === arguments.length)
          for (var t, a = 0, d = n.length; a < d; a++) !t && a in n || (t || (t = Array.prototype.slice.call(n, 0, a)), t[a] = n[a]);
        return e.concat(t || Array.prototype.slice.call(n))
      }

      function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e)
      }

      function T(e, n, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, a = r.apply(e, n || []),
          d = [];
        return t = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(n) {
            return Promise.resolve(n).then(e, o)
          }
        })), t[Symbol.asyncIterator] = function() {
          return this
        }, t;

        function i(e, n) {
          a[e] && (t[e] = function(n) {
            return new Promise((function(r, t) {
              d.push([e, n, r, t]) > 1 || s(e, n)
            }))
          }, n && (t[e] = n(t[e])))
        }

        function s(e, n) {
          try {
            (r = a[e](n)).value instanceof S ? Promise.resolve(r.value.v).then(_, o) : c(d[0][2], r)
          } catch (e) {
            c(d[0][3], e)
          }
          var r
        }

        function _(e) {
          s("next", e)
        }

        function o(e) {
          s("throw", e)
        }

        function c(e, n) {
          e(n), d.shift(), d.length && s(d[0][0], d[0][1])
        }
      }

      function G(e) {
        var n, r;
        return n = {}, t("next"), t("throw", (function(e) {
          throw e
        })), t("return"), n[Symbol.iterator] = function() {
          return this
        }, n;

        function t(t, a) {
          n[t] = e[t] ? function(n) {
            return (r = !r) ? {
              value: S(e[t](n)),
              done: !1
            } : a ? a(n) : n
          } : a
        }
      }

      function L(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = h(e), n = {}, t("next"), t("throw"), t("return"), n[Symbol.asyncIterator] = function() {
          return this
        }, n);

        function t(r) {
          n[r] = e[r] && function(n) {
            return new Promise((function(t, a) {
              ! function(e, n, r, t) {
                Promise.resolve(t).then((function(n) {
                  e({
                    value: n,
                    done: r
                  })
                }), n)
              }(t, a, (n = e[r](n)).done, n.value)
            }))
          }
        }
      }

      function E(e, n) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: n
        }) : e.raw = n, e
      }
      var A = Object.create ? function(e, n) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: n
          })
        } : function(e, n) {
          e.default = n
        },
        C = function(e) {
          return C = Object.getOwnPropertyNames || function(e) {
            var n = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[n.length] = r);
            return n
          }, C(e)
        };

      function B(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var r = C(e), t = 0; t < r.length; t++) "default" !== r[t] && p(n, e, r[t]);
        return A(n, e), n
      }

      function P(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function I(e, n, r, t) {
        if ("a" === r && !t) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof n ? e !== n || !t : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? t : "a" === r ? t.call(e) : t ? t.value : n.get(e)
      }

      function O(e, n, r, t, a) {
        if ("m" === t) throw new TypeError("Private method is not writable");
        if ("a" === t && !a) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof n ? e !== n || !a : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === t ? a.call(e, r) : a ? a.value = r : n.set(e, r), r
      }

      function R(e, n) {
        if (null === n || "object" != typeof n && "function" != typeof n) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? n === e : e.has(n)
      }

      function N(e, n, r) {
        if (null != n) {
          if ("object" != typeof n && "function" != typeof n) throw new TypeError("Object expected.");
          var t, a;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            t = n[Symbol.asyncDispose]
          }
          if (void 0 === t) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            t = n[Symbol.dispose], r && (a = t)
          }
          if ("function" != typeof t) throw new TypeError("Object not disposable.");
          a && (t = function() {
            try {
              a.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: n,
            dispose: t,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return n
      }
      var D = "function" == typeof SuppressedError ? SuppressedError : function(e, n, r) {
        var t = new Error(r);
        return t.name = "SuppressedError", t.error = e, t.suppressed = n, t
      };

      function k(e) {
        function n(n) {
          e.error = e.hasError ? new D(n, e.error, "An error was suppressed during disposal.") : n, e.hasError = !0
        }
        var r, t = 0;
        return function a() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === t) return t = 0, e.stack.push(r), Promise.resolve().then(a);
            if (r.dispose) {
              var d = r.dispose.call(r.value);
              if (r.async) return t |= 2, Promise.resolve(d).then(a, (function(e) {
                return n(e), a()
              }))
            } else t |= 1
          } catch (e) {
            n(e)
          }
          if (1 === t) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function K(e, n) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, t, a, d) {
          return r ? n ? ".jsx" : ".js" : !t || a && d ? t + a + "." + d.toLowerCase() + "js" : e
        })) : e
      }
      const q = {
        __extends: a,
        __assign: d,
        __rest: i,
        __decorate: s,
        __param: _,
        __esDecorate: o,
        __runInitializers: c,
        __propKey: u,
        __setFunctionName: y,
        __metadata: l,
        __awaiter: w,
        __generator: f,
        __createBinding: p,
        __exportStar: m,
        __values: h,
        __read: g,
        __spread: M,
        __spreadArrays: v,
        __spreadArray: b,
        __await: S,
        __asyncGenerator: T,
        __asyncDelegator: G,
        __asyncValues: L,
        __makeTemplateObject: E,
        __importStar: B,
        __importDefault: P,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: O,
        __classPrivateFieldIn: R,
        __addDisposableResource: N,
        __disposeResources: k,
        __rewriteRelativeImportExtension: K
      }
    },
    7353: (e, n, r) => {
      r.r(n), r.d(n, {
        LookupSupportedLocales: () => m,
        ResolveLocale: () => p,
        match: () => h
      });
      var t = r(1133),
        a = {
          supplemental: {
            languageMatching: {
              "written-new": [{
                paradigmLocales: {
                  _locales: "en en_GB es es_419 pt_BR pt_PT"
                }
              }, {
                $enUS: {
                  _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
                }
              }, {
                $cnsar: {
                  _value: "HK+MO"
                }
              }, {
                $americas: {
                  _value: "019"
                }
              }, {
                $maghreb: {
                  _value: "MA+DZ+TN+LY+MR+EH"
                }
              }, {
                no: {
                  _desired: "nb",
                  _distance: "1"
                }
              }, {
                bs: {
                  _desired: "hr",
                  _distance: "4"
                }
              }, {
                bs: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                hr: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                sr: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                aa: {
                  _desired: "ssy",
                  _distance: "4"
                }
              }, {
                de: {
                  _desired: "gsw",
                  _distance: "4",
                  _oneway: "true"
                }
              }, {
                de: {
                  _desired: "lb",
                  _distance: "4",
                  _oneway: "true"
                }
              }, {
                no: {
                  _desired: "da",
                  _distance: "8"
                }
              }, {
                nb: {
                  _desired: "da",
                  _distance: "8"
                }
              }, {
                ru: {
                  _desired: "ab",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ach",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                nl: {
                  _desired: "af",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ak",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "am",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "ay",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "az",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ur: {
                  _desired: "bal",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "be",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "bem",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "bh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "bn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "bo",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "br",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "ca",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fil: {
                  _desired: "ceb",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "chr",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ckb",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "co",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "crs",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                sk: {
                  _desired: "cs",
                  _distance: "20"
                }
              }, {
                en: {
                  _desired: "cy",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ee",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "eo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "eu",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                da: {
                  _desired: "fo",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                nl: {
                  _desired: "fy",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ga",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "gaa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "gd",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "gl",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "gn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "gu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ha",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "haw",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "ht",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "hy",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ia",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ig",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "is",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "jv",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ka",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "kg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "kk",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "km",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "kn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "kri",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                tr: {
                  _desired: "ku",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "ky",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                it: {
                  _desired: "la",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "lg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "ln",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "lo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "loz",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "lua",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "mai",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mfe",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "mg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mi",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ml",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "mn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "mr",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "ms",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mt",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "my",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ne",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                nb: {
                  _desired: "nn",
                  _distance: "20"
                }
              }, {
                no: {
                  _desired: "nn",
                  _distance: "20"
                }
              }, {
                en: {
                  _desired: "nso",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ny",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "nyn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "oc",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "om",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "or",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "pa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "pcm",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ps",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "qu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                de: {
                  _desired: "rm",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "rn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "rw",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "sa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sd",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "si",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "so",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sq",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "st",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "su",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sw",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ta",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "te",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ti",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tk",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tlh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "to",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tt",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tum",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "ug",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "uk",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ur",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "uz",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "wo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "xh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "yi",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "yo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "za",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "zu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aao",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "abh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "abv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "adf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aeb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aec",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "afb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ajp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "apc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "apd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "arq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ars",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ary",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "arz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "auz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "avl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "bbz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "pga",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "shu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ssh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                az: {
                  _desired: "azb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                et: {
                  _desired: "vro",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "ffm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fub",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fue",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gnw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gun",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "nhd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                iu: {
                  _desired: "ikt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "enb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "eyo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "niq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "oki",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "pko",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "sgc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "tec",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "tuy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kok: {
                  _desired: "gom",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kpe: {
                  _desired: "gkp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "ida",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lkb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lko",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lks",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lri",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lrm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lsm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lto",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lts",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lwg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "nle",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "nyd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "rag",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                lv: {
                  _desired: "ltg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bhr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bjq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bmm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bzc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "msh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "skg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "tdx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "tkg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "txy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "xmv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "xmw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mn: {
                  _desired: "mvf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bjn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "btj",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bve",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bvu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "coa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "dup",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "hji",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "id",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "jak",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "jax",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kvb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kvr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kxd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "lce",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "lcf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "liw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "max",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "meo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mfa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mfb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "min",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mqg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "msi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "orn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "ors",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "pel",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "pse",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "tmw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "urk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "vkk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "vkt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "xmm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "zlm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "zmi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ne: {
                  _desired: "dty",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "gax",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "hae",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "orc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                or: {
                  _desired: "spv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ps: {
                  _desired: "pbt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ps: {
                  _desired: "pst",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qub",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qud",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qug",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qul",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qup",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qur",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qus",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qux",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qva",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qve",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvj",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvs",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qws",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sdc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sdn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sro",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aae",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aat",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aln",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                syr: {
                  _desired: "aii",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                uz: {
                  _desired: "uzs",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                yi: {
                  _desired: "yih",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cdo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cjy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cpx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "czh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "czo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "gan",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "hak",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "hsn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "lzh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "mnp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "nan",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "wuu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "yue",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "*": {
                  _desired: "*",
                  _distance: "80"
                }
              }, {
                "en-Latn": {
                  _desired: "am-Ethi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "az-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "bn-Beng",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "bo-Tibt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "hy-Armn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ka-Geor",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "km-Khmr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "kn-Knda",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "lo-Laoo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ml-Mlym",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "my-Mymr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ne-Deva",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "or-Orya",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "pa-Guru",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ps-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "sd-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "si-Sinh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ta-Taml",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "te-Telu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ti-Ethi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "tk-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ur-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "uz-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "yi-Hebr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "sr-Cyrl": {
                  _desired: "sr-Latn",
                  _distance: "5"
                }
              }, {
                "zh-Hans": {
                  _desired: "za-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "zh-Hani",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "zh-Hant": {
                  _desired: "zh-Hani",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ar-Arab": {
                  _desired: "ar-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "bn-Beng": {
                  _desired: "bn-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "gu-Gujr": {
                  _desired: "gu-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "hi-Deva": {
                  _desired: "hi-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "kn-Knda": {
                  _desired: "kn-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ml-Mlym": {
                  _desired: "ml-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "mr-Deva": {
                  _desired: "mr-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ta-Taml": {
                  _desired: "ta-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "te-Telu": {
                  _desired: "te-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "zh-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Latn",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hani",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hira",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Kana",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hrkt",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Hrkt": {
                  _desired: "ja-Hira",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Hrkt": {
                  _desired: "ja-Kana",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Hani",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Hang",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Jamo",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Hang": {
                  _desired: "ko-Jamo",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "*-*": {
                  _desired: "*-*",
                  _distance: "50"
                }
              }, {
                "ar-*-$maghreb": {
                  _desired: "ar-*-$maghreb",
                  _distance: "4"
                }
              }, {
                "ar-*-$!maghreb": {
                  _desired: "ar-*-$!maghreb",
                  _distance: "4"
                }
              }, {
                "ar-*-*": {
                  _desired: "ar-*-*",
                  _distance: "5"
                }
              }, {
                "en-*-$enUS": {
                  _desired: "en-*-$enUS",
                  _distance: "4"
                }
              }, {
                "en-*-GB": {
                  _desired: "en-*-$!enUS",
                  _distance: "3"
                }
              }, {
                "en-*-$!enUS": {
                  _desired: "en-*-$!enUS",
                  _distance: "4"
                }
              }, {
                "en-*-*": {
                  _desired: "en-*-*",
                  _distance: "5"
                }
              }, {
                "es-*-$americas": {
                  _desired: "es-*-$americas",
                  _distance: "4"
                }
              }, {
                "es-*-$!americas": {
                  _desired: "es-*-$!americas",
                  _distance: "4"
                }
              }, {
                "es-*-*": {
                  _desired: "es-*-*",
                  _distance: "5"
                }
              }, {
                "pt-*-$americas": {
                  _desired: "pt-*-$americas",
                  _distance: "4"
                }
              }, {
                "pt-*-$!americas": {
                  _desired: "pt-*-$!americas",
                  _distance: "4"
                }
              }, {
                "pt-*-*": {
                  _desired: "pt-*-*",
                  _distance: "5"
                }
              }, {
                "zh-Hant-$cnsar": {
                  _desired: "zh-Hant-$cnsar",
                  _distance: "4"
                }
              }, {
                "zh-Hant-$!cnsar": {
                  _desired: "zh-Hant-$!cnsar",
                  _distance: "4"
                }
              }, {
                "zh-Hant-*": {
                  _desired: "zh-Hant-*",
                  _distance: "5"
                }
              }, {
                "*-*-*": {
                  _desired: "*-*-*",
                  _distance: "4"
                }
              }]
            }
          }
        },
        d = {
          "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
          "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
          "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"],
          "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"],
          "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"],
          "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"],
          "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"],
          142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"],
          150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"],
          151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"],
          154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
          419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"],
          EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
          EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
        },
        i = /-u(?:-[0-9a-z]{2,8})+/gi;

      function s(e, n, r) {
        if (void 0 === r && (r = Error), !e) throw new r(n)
      }
      var _, o = 838;

      function c(e, n, r) {
        var a = n.split("-"),
          i = a[0],
          s = a[1],
          _ = a[2],
          o = !0;
        if (_ && "$" === _[0]) {
          var c = "!" !== _[1],
            u = (c ? r[_.slice(1)] : r[_.slice(2)]).map((function(e) {
              return d[e] || [e]
            })).reduce((function(e, n) {
              return (0, t.__spreadArray)((0, t.__spreadArray)([], e, !0), n, !0)
            }), []);
          o && (o = !(u.indexOf(e.region || "") > -1 != c))
        } else o && (o = !e.region || "*" === _ || _ === e.region);
        return o && (o = !e.script || "*" === s || s === e.script), o && (o = !e.language || "*" === i || i === e.language), o
      }

      function u(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-")
      }

      function y(e, n, r) {
        for (var t = 0, a = r.matches; t < a.length; t++) {
          var d = a[t],
            i = c(e, d.desired, r.matchVariables) && c(n, d.supported, r.matchVariables);
          if (d.oneway || i || (i = c(e, d.supported, r.matchVariables) && c(n, d.desired, r.matchVariables)), i) {
            var s = 10 * d.distance;
            return r.paradigmLocales.indexOf(u(e)) > -1 != r.paradigmLocales.indexOf(u(n)) > -1 ? s - 1 : s
          }
        }
        throw new Error("No matching distance found")
      }

      function l(e, n, r) {
        var d, s, c = [],
          u = n.reduce((function(e, n) {
            var r = n.replace(i, "");
            return c.push(r), e[r] = n, e
          }), {}),
          l = function(e, n, r) {
            void 0 === r && (r = o);
            var d = 1 / 0,
              i = {
                matchedDesiredLocale: "",
                distances: {}
              };
            return e.forEach((function(e, r) {
              i.distances[e] || (i.distances[e] = {}), n.forEach((function(n) {
                var s = function(e, n) {
                  var r = new Intl.Locale(e).maximize(),
                    d = new Intl.Locale(n).maximize(),
                    i = {
                      language: r.language,
                      script: r.script || "",
                      region: r.region || ""
                    },
                    s = {
                      language: d.language,
                      script: d.script || "",
                      region: d.region || ""
                    },
                    o = 0,
                    c = function() {
                      var e, n;
                      if (!_) {
                        var r = null === (n = null === (e = a.supplemental.languageMatching["written-new"][0]) || void 0 === e ? void 0 : e.paradigmLocales) || void 0 === n ? void 0 : n._locales.split(" "),
                          d = a.supplemental.languageMatching["written-new"].slice(1, 5),
                          i = a.supplemental.languageMatching["written-new"].slice(5).map((function(e) {
                            var n = Object.keys(e)[0],
                              r = e[n];
                            return {
                              supported: n,
                              desired: r._desired,
                              distance: +r._distance,
                              oneway: "true" === r.oneway
                            }
                          }), {});
                        _ = {
                          matches: i,
                          matchVariables: d.reduce((function(e, n) {
                            var r = Object.keys(n)[0],
                              t = n[r];
                            return e[r.slice(1)] = t._value.split("+"), e
                          }), {}),
                          paradigmLocales: (0, t.__spreadArray)((0, t.__spreadArray)([], r, !0), r.map((function(e) {
                            return new Intl.Locale(e.replace(/_/g, "-")).maximize().toString()
                          })), !0)
                        }
                      }
                      return _
                    }();
                  return i.language !== s.language && (o += y({
                    language: r.language,
                    script: "",
                    region: ""
                  }, {
                    language: d.language,
                    script: "",
                    region: ""
                  }, c)), i.script !== s.script && (o += y({
                    language: r.language,
                    script: i.script,
                    region: ""
                  }, {
                    language: d.language,
                    script: s.script,
                    region: ""
                  }, c)), i.region !== s.region && (o += y(i, s, c)), o
                }(e, n) + 0 + 40 * r;
                i.distances[e][n] = s, s < d && (d = s, i.matchedDesiredLocale = e, i.matchedSupportedLocale = n)
              }))
            })), d >= r && (i.matchedDesiredLocale = void 0, i.matchedSupportedLocale = void 0), i
          }(c, e);
        return l.matchedSupportedLocale && l.matchedDesiredLocale && (d = l.matchedSupportedLocale, s = u[l.matchedDesiredLocale].slice(l.matchedDesiredLocale.length) || void 0), d ? {
          locale: d,
          extension: s
        } : {
          locale: r()
        }
      }

      function w(e) {
        return Intl.getCanonicalLocales(e)[0]
      }

      function f(e, n) {
        for (var r = n;;) {
          if (e.indexOf(r) > -1) return r;
          var t = r.lastIndexOf("-");
          if (!~t) return;
          t >= 2 && "-" === r[t - 2] && (t -= 2), r = r.slice(0, t)
        }
      }

      function p(e, n, r, t, a, d) {
        var _, o;
        o = "lookup" === r.localeMatcher ? function(e, n, r) {
          for (var t = {
              locale: ""
            }, a = 0, d = n; a < d.length; a++) {
            var s = d[a],
              _ = s.replace(i, ""),
              o = f(e, _);
            if (o) return t.locale = o, s !== _ && (t.extension = s.slice(_.length, s.length)), t
          }
          return t.locale = r(), t
        }(Array.from(e), n, d) : l(Array.from(e), n, d), null == o && (o = {
          locale: d(),
          extension: ""
        });
        var c, u, y = o.locale,
          p = a[y],
          m = {
            locale: "en",
            dataLocale: y
          };
        o.extension ? (c = function(e) {
          s(e === e.toLowerCase(), "Expected extension to be lowercase"), s("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
          for (var n, r = [], t = [], a = e.length, d = 3; d < a;) {
            var i, _ = e.indexOf("-", d);
            i = -1 === _ ? a - d : _ - d;
            var o = e.slice(d, d + i);
            s(i >= 2, "Expected a subtag to have at least 2 characters"), void 0 === n && 2 != i ? -1 === r.indexOf(o) && r.push(o) : 2 === i ? (n = {
              key: o,
              value: ""
            }, void 0 === t.find((function(e) {
              return e.key === (null == n ? void 0 : n.key)
            })) && t.push(n)) : "" === (null == n ? void 0 : n.value) ? n.value = o : (s(void 0 !== n, "Expected keyword to be defined"), n.value += "-" + o), d += i + 1
          }
          return {
            attributes: r,
            keywords: t
          }
        }(o.extension), u = c.keywords) : u = [];
        for (var h = [], g = function(e) {
            var n = null !== (_ = null == p ? void 0 : p[e]) && void 0 !== _ ? _ : [];
            s(Array.isArray(n), "keyLocaleData for ".concat(e, " must be an array"));
            var t = n[0];
            s(void 0 === t || "string" == typeof t, "value must be a string or undefined");
            var a = void 0,
              d = u.find((function(n) {
                return n.key === e
              }));
            if (d) {
              var i = d.value;
              "" !== i ? n.indexOf(i) > -1 && (a = {
                key: e,
                value: t = i
              }) : n.indexOf("true") > -1 && (a = {
                key: e,
                value: t = "true"
              })
            }
            var o, c, y = r[e];
            s(null == y || "string" == typeof y, "optionsValue must be a string or undefined"), "string" == typeof y && (o = e.toLowerCase(), c = y.toLowerCase(), s(void 0 !== o, "ukey must be defined"), "" === (y = c) && (y = "true")), y !== t && n.indexOf(y) > -1 && (t = y, a = void 0), a && h.push(a), m[e] = t
          }, M = 0, v = t; M < v.length; M++) g(v[M]);
        return h.length > 0 && (y = function(e, n, r) {
          s(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
          for (var t = "-u", a = 0, d = []; a < d.length; a++) {
            t += "-".concat(d[a])
          }
          for (var i = 0, _ = r; i < _.length; i++) {
            var o = _[i],
              c = o.key,
              u = o.value;
            t += "-".concat(c), "" !== u && (t += "-".concat(u))
          }
          if ("-u" === t) return w(e);
          var y = e.indexOf("-x-");
          return w(-1 === y ? e + t : e.slice(0, y) + t + e.slice(y))
        }(y, 0, h)), m.locale = y, m
      }

      function m(e, n) {
        for (var r = [], t = 0, a = n; t < a.length; t++) {
          var d = f(e, a[t].replace(i, ""));
          d && r.push(d)
        }
        return r
      }

      function h(e, n, r, t) {
        return p(n, (a = e, Intl.getCanonicalLocales(a)), {
          localeMatcher: (null == t ? void 0 : t.algorithm) || "best fit"
        }, [], {}, (function() {
          return r
        })).locale;
        var a
      }
    }
  }
]);