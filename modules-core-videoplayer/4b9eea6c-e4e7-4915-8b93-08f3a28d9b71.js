! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4b9eea6c-e4e7-4915-8b93-08f3a28d9b71", e._sentryDebugIdIdentifier = "sentry-dbid-4b9eea6c-e4e7-4915-8b93-08f3a28d9b71")
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
  [314], {
    58471: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetOperands = function(e) {
        (0, n.invariant)("string" == typeof e, "GetOperands should have been called with a string");
        var t = (0, n.ToNumber)(e);
        (0, n.invariant)(t.isFinite(), "n should be finite");
        var r, o, a, i = e.indexOf("."),
          l = ""; - 1 === i ? (r = t, o = n.ZERO, a = 0) : (r = e.slice(0, i), l = e.slice(i, e.length), o = (0, n.ToNumber)(l), a = l.length);
        var c, u, s = (0, n.ToNumber)(r).abs();
        if (o.isZero()) c = 0, u = n.ZERO;
        else {
          var f = l.replace(/0+$/, "");
          c = f.length, u = (0, n.ToNumber)(f)
        }
        return {
          Number: t,
          IntegerDigits: s.toNumber(),
          NumberOfFractionDigits: a,
          NumberOfFractionDigitsWithoutTrailing: c,
          FractionDigits: o.toNumber(),
          FractionDigitsWithoutTrailing: u.toNumber()
        }
      };
      var n = r(50721)
    },
    97410: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializePluralRules = function(e, t, r, a) {
        var i = a.availableLocales,
          l = a.relevantExtensionKeys,
          c = a.localeData,
          u = a.getDefaultLocale,
          s = a.getInternalSlots,
          f = (0, n.CanonicalizeLocaleList)(t),
          p = Object.create(null),
          d = (0, n.CoerceOptionsToObject)(r),
          y = s(e);
        y.initializedPluralRules = !0;
        var b = (0, n.GetOption)(d, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        p.localeMatcher = b;
        var _ = (0, o.ResolveLocale)(i, f, p, l, c, u);
        return y.locale = _.locale, y.type = (0, n.GetOption)(d, "type", "string", ["cardinal", "ordinal"], "cardinal"), (0, n.SetNumberFormatDigitOptions)(y, d, 0, 3, "standard"), e
      };
      var n = r(50721),
        o = r(85254)
    },
    34451: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ResolvePlural = function(e, t, r) {
        var a = r.getInternalSlots,
          i = r.PluralRuleSelect,
          l = a(e);
        if ((0, n.invariant)("Object" === (0, n.Type)(l), "pl has to be an object"), (0, n.invariant)("initializedPluralRules" in l, "pluralrules must be initialized"), !t.isFinite()) return "other";
        var c = l.locale,
          u = l.type,
          s = (0, n.FormatNumericToString)(l, t).formattedString;
        return i(c, u, t, (0, o.GetOperands)(s))
      };
      var n = r(50721),
        o = r(58471)
    },
    55746: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = r.get(e);
        return t || (t = Object.create(null), r.set(e, t)), t
      };
      var r = new WeakMap
    },
    28218: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PluralRules = void 0;
      var n = r(74817),
        o = r(50721),
        a = r(97410),
        i = r(34451),
        l = n.__importDefault(r(55746));

      function c(e, t) {
        if (!(e instanceof s)) throw new TypeError("Method Intl.PluralRules.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function u(e, t, r, n) {
        var o = n.IntegerDigits,
          a = n.NumberOfFractionDigits,
          i = n.FractionDigits;
        return s.localeData[e].fn(a ? "".concat(o, ".").concat(i) : o, "ordinal" === t)
      }
      var s = function() {
        function e(t, r) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.PluralRules must be called with 'new'");
          return (0, a.InitializePluralRules)(this, t, r, {
            availableLocales: e.availableLocales,
            relevantExtensionKeys: e.relevantExtensionKeys,
            localeData: e.localeData,
            getDefaultLocale: e.getDefaultLocale,
            getInternalSlots: l.default
          })
        }
        return e.prototype.resolvedOptions = function() {
          c(this, "resolvedOptions");
          var t = Object.create(null),
            r = (0, l.default)(this);
          return t.locale = r.locale, t.type = r.type, ["minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"].forEach((function(e) {
            var n = r[e];
            void 0 !== n && (t[e] = n)
          })), t.pluralCategories = n.__spreadArray([], e.localeData[t.locale].categories[t.type], !0), t
        }, e.prototype.select = function(e) {
          c(this, "select");
          var t = (0, o.ToNumber)(e);
          return (0, i.ResolvePlural)(this, t, {
            getInternalSlots: l.default,
            PluralRuleSelect: u
          })
        }, e.prototype.toString = function() {
          return "[object Intl.PluralRules]"
        }, e.supportedLocalesOf = function(t, r) {
          return (0, o.SupportedLocales)(e.availableLocales, (0, o.CanonicalizeLocaleList)(t), r)
        }, e.__addLocaleData = function() {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
          for (var n = 0, o = t; n < o.length; n++) {
            var a = o[n],
              i = a.data,
              l = a.locale;
            e.localeData[l] = i, e.availableLocales.add(l), e.__defaultLocale || (e.__defaultLocale = l)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e
      }();
      t.PluralRules = s;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        });
        try {
          Object.defineProperty(s, "length", {
            value: 0,
            writable: !1,
            enumerable: !1,
            configurable: !0
          })
        } catch (e) {}
        Object.defineProperty(s.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s, "name", {
          value: "PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    6321: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = r(28218);
      Object.defineProperty(Intl, "PluralRules", {
        value: n.PluralRules,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    74817: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => M,
        __assign: () => a,
        __asyncDelegator: () => S,
        __asyncGenerator: () => j,
        __asyncValues: () => D,
        __await: () => P,
        __awaiter: () => y,
        __classPrivateFieldGet: () => L,
        __classPrivateFieldIn: () => F,
        __classPrivateFieldSet: () => k,
        __createBinding: () => _,
        __decorate: () => l,
        __disposeResources: () => A,
        __esDecorate: () => u,
        __exportStar: () => v,
        __extends: () => o,
        __generator: () => b,
        __importDefault: () => x,
        __importStar: () => T,
        __makeTemplateObject: () => E,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => g,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => C,
        __runInitializers: () => s,
        __setFunctionName: () => p,
        __spread: () => m,
        __spreadArray: () => O,
        __spreadArrays: () => w,
        __values: () => h,
        default: () => z
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

      function l(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var l = e.length - 1; l >= 0; l--)(o = e[l]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
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
        for (var l, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, f = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var b in n) y[b] = "access" === b ? {} : n[b];
          for (var b in n.access) y.access[b] = n.access[b];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var _ = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], y);
          if ("accessor" === c) {
            if (void 0 === _) continue;
            if (null === _ || "object" != typeof _) throw new TypeError("Object expected");
            (l = i(_.get)) && (f.get = l), (l = i(_.set)) && (f.set = l), (l = i(_.init)) && o.unshift(l)
          } else(l = i(_)) && ("field" === c ? o.unshift(l) : f[u] = l)
        }
        s && Object.defineProperty(s, n.name, f), p = !0
      }

      function s(e, t, r) {
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

          function l(e) {
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
            }))).then(i, l)
          }
          c((n = n.apply(e, t || [])).next())
        }))
      }

      function b(e, t) {
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
        return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function l(l) {
          return function(c) {
            return function(l) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, l[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
                switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                  case 0:
                  case 1:
                    o = l;
                    break;
                  case 4:
                    return a.label++, {
                      value: l[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = l[1], l = [0];
                    continue;
                  case 7:
                    l = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                      a.label = l[1];
                      break
                    }
                    if (6 === l[0] && a.label < o[1]) {
                      a.label = o[1], o = l;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(l);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                l = t.call(e, a)
              } catch (e) {
                l = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & l[0]) throw l[1];
              return {
                value: l[0] ? l[1] : void 0,
                done: !0
              }
            }([l, c])
          }
        }
      }
      var _ = Object.create ? function(e, t, r, n) {
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

      function v(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || _(t, e, r)
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

      function g(e, t) {
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
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++) n[o] = a[i];
        return n
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function P(e) {
        return this instanceof P ? (this.v = e, this) : new P(e)
      }

      function j(e, t, r) {
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
              a.push([e, t, r, n]) > 1 || l(e, t)
            }))
          }, t && (n[e] = t(n[e])))
        }

        function l(e, t) {
          try {
            (r = o[e](t)).value instanceof P ? Promise.resolve(r.value.v).then(c, u) : s(a[0][2], r)
          } catch (e) {
            s(a[0][3], e)
          }
          var r
        }

        function c(e) {
          l("next", e)
        }

        function u(e) {
          l("throw", e)
        }

        function s(e, t) {
          e(t), a.shift(), a.length && l(a[0][0], a[0][1])
        }
      }

      function S(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: P(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function D(e) {
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

      function E(e, t) {
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
        R = function(e) {
          return R = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, R(e)
        };

      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = R(e), n = 0; n < r.length; n++) "default" !== r[n] && _(t, e, r[n]);
        return I(t, e), t
      }

      function x(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function L(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function k(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function F(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function M(e, t, r) {
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
      var N = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new N(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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

      function C(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const z = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: l,
        __param: c,
        __esDecorate: u,
        __runInitializers: s,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: b,
        __createBinding: _,
        __exportStar: v,
        __values: h,
        __read: g,
        __spread: m,
        __spreadArrays: w,
        __spreadArray: O,
        __await: P,
        __asyncGenerator: j,
        __asyncDelegator: S,
        __asyncValues: D,
        __makeTemplateObject: E,
        __importStar: T,
        __importDefault: x,
        __classPrivateFieldGet: L,
        __classPrivateFieldSet: k,
        __classPrivateFieldIn: F,
        __addDisposableResource: M,
        __disposeResources: A,
        __rewriteRelativeImportExtension: C
      }
    }
  }
]);