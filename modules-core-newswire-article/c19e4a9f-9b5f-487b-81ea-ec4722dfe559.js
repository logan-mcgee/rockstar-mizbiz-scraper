! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c19e4a9f-9b5f-487b-81ea-ec4722dfe559", e._sentryDebugIdIdentifier = "sentry-dbid-c19e4a9f-9b5f-487b-81ea-ec4722dfe559")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [907], {
    74188: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = r(35237),
        o = r(48050),
        a = r(19550);
      (0, a.defineProperty)(Intl, "NumberFormat", {
        value: n.NumberFormat
      }), (0, a.defineProperty)(Number.prototype, "toLocaleString", {
        value: function(e, t) {
          return (0, o.toLocaleString)(this, e, t)
        }
      })
    },
    35237: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NumberFormat = void 0;
      var n = r(11050),
        o = r(19550),
        a = r(47743),
        i = r(51451),
        c = n.__importDefault(r(10232)),
        l = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "currencySign", "unit", "unitDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping", "notation", "compactDisplay", "signDisplay"];

      function u(e) {
        return (0, o.FormatNumericToParts)(this, (0, o.ToIntlMathematicalValue)(e), {
          getInternalSlots: c.default
        })
      }
      t.NumberFormat = function(e, r) {
        if (!this || !(0, o.OrdinaryHasInstance)(t.NumberFormat, this)) return new t.NumberFormat(e, r);
        (0, o.InitializeNumberFormat)(this, e, r, {
          getInternalSlots: c.default,
          localeData: t.NumberFormat.localeData,
          availableLocales: t.NumberFormat.availableLocales,
          getDefaultLocale: t.NumberFormat.getDefaultLocale,
          currencyDigitsData: a.currencyDigitsData,
          numberingSystemNames: i.numberingSystemNames
        });
        var n = (0, c.default)(this),
          l = n.dataLocale,
          u = t.NumberFormat.localeData[l];
        return (0, o.invariant)(void 0 !== u, "Cannot load locale-dependent data for ".concat(l, ".")), n.pl = (0, o.createMemoizedPluralRules)(l, {
          minimumFractionDigits: n.minimumFractionDigits,
          maximumFractionDigits: n.maximumFractionDigits,
          minimumIntegerDigits: n.minimumIntegerDigits,
          minimumSignificantDigits: n.minimumSignificantDigits,
          maximumSignificantDigits: n.maximumSignificantDigits
        }), this
      };
      try {
        Object.defineProperty(u, "name", {
          value: "formatToParts",
          enumerable: !1,
          writable: !1,
          configurable: !0
        })
      } catch (e) {}(0, o.defineProperty)(t.NumberFormat.prototype, "formatToParts", {
        value: u
      }), (0, o.defineProperty)(t.NumberFormat.prototype, "formatRange", {
        value: function(e, t) {
          return (0, o.FormatNumericRange)(this, (0, o.ToIntlMathematicalValue)(e), (0, o.ToIntlMathematicalValue)(t), {
            getInternalSlots: c.default
          })
        }
      }), (0, o.defineProperty)(t.NumberFormat.prototype, "formatRangeToParts", {
        value: function(e, t) {
          return (0, o.FormatNumericRangeToParts)(this, (0, o.ToIntlMathematicalValue)(e), (0, o.ToIntlMathematicalValue)(t), {
            getInternalSlots: c.default
          })
        }
      }), (0, o.defineProperty)(t.NumberFormat.prototype, "resolvedOptions", {
        value: function() {
          if ("object" != typeof this || !(0, o.OrdinaryHasInstance)(t.NumberFormat, this)) throw TypeError("Method Intl.NumberFormat.prototype.resolvedOptions called on incompatible receiver");
          for (var e = (0, c.default)(this), r = {}, n = 0, a = l; n < a.length; n++) {
            var i = a[n],
              u = e[i];
            void 0 !== u && (r[i] = u)
          }
          return "morePrecision" === e.roundingType ? r.roundingPriority = "morePrecision" : "lessPrecision" === e.roundingType ? r.roundingPriority = "lessPrecision" : r.roundingPriority = "auto", r
        }
      });
      var s = {
        enumerable: !1,
        configurable: !0,
        get: function() {
          if ("object" != typeof this || !(0, o.OrdinaryHasInstance)(t.NumberFormat, this)) throw TypeError("Intl.NumberFormat format property accessor called on incompatible receiver");
          var e = (0, c.default)(this),
            r = e.boundFormat;
          if (void 0 === r) {
            r = function(t) {
              return (0, o.FormatNumeric)(e, (0, o.ToIntlMathematicalValue)(t))
            };
            try {
              Object.defineProperty(r, "name", {
                configurable: !0,
                enumerable: !1,
                writable: !1,
                value: ""
              })
            } catch (e) {}
            e.boundFormat = r
          }
          return r
        }
      };
      try {
        Object.defineProperty(s.get, "name", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: "get format"
        })
      } catch (e) {}
      Object.defineProperty(t.NumberFormat.prototype, "format", s), (0, o.defineProperty)(t.NumberFormat, "supportedLocalesOf", {
        value: function(e, r) {
          return (0, o.SupportedLocales)(t.NumberFormat.availableLocales, (0, o.CanonicalizeLocaleList)(e), r)
        }
      }), t.NumberFormat.__addLocaleData = function() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        for (var n = 0, o = e; n < o.length; n++) {
          var a = o[n],
            i = a.data,
            c = a.locale,
            l = new Intl.Locale(c).minimize().toString();
          t.NumberFormat.localeData[c] = t.NumberFormat.localeData[l] = i, t.NumberFormat.availableLocales.add(l), t.NumberFormat.availableLocales.add(c), t.NumberFormat.__defaultLocale || (t.NumberFormat.__defaultLocale = l)
        }
      }, t.NumberFormat.__addUnitData = function(e, r) {
        var n = t.NumberFormat.localeData[e];
        if (!n) throw new Error('Locale data for "'.concat(e, '" has not been loaded in NumberFormat. \nPlease __addLocaleData before adding additional unit data'));
        for (var o in r.simple) n.units.simple[o] = r.simple[o];
        for (var o in r.compound) n.units.compound[o] = r.compound[o]
      }, t.NumberFormat.__defaultLocale = "", t.NumberFormat.localeData = {}, t.NumberFormat.availableLocales = new Set, t.NumberFormat.getDefaultLocale = function() {
        return t.NumberFormat.__defaultLocale
      }, t.NumberFormat.polyfilled = !0;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(t.NumberFormat.prototype, Symbol.toStringTag, {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: "Intl.NumberFormat"
        }), Object.defineProperty(t.NumberFormat.prototype.constructor, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: 0
        }), Object.defineProperty(t.NumberFormat.supportedLocalesOf, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: 1
        }), Object.defineProperty(t.NumberFormat, "prototype", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: t.NumberFormat.prototype
        })
      } catch (e) {}
    },
    47743: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.currencyDigitsData = void 0, t.currencyDigitsData = {
        ADP: 0,
        AFN: 0,
        ALL: 0,
        AMD: 2,
        BHD: 3,
        BIF: 0,
        BYN: 2,
        BYR: 0,
        CAD: 2,
        CHF: 2,
        CLF: 4,
        CLP: 0,
        COP: 2,
        CRC: 2,
        CZK: 2,
        DEFAULT: 2,
        DJF: 0,
        DKK: 2,
        ESP: 0,
        GNF: 0,
        GYD: 2,
        HUF: 2,
        IDR: 2,
        IQD: 0,
        IRR: 0,
        ISK: 0,
        ITL: 0,
        JOD: 3,
        JPY: 0,
        KMF: 0,
        KPW: 0,
        KRW: 0,
        KWD: 3,
        LAK: 0,
        LBP: 0,
        LUF: 0,
        LYD: 3,
        MGA: 0,
        MGF: 0,
        MMK: 0,
        MNT: 2,
        MRO: 0,
        MUR: 2,
        NOK: 2,
        OMR: 3,
        PKR: 2,
        PYG: 0,
        RSD: 0,
        RWF: 0,
        SEK: 2,
        SLE: 2,
        SLL: 0,
        SOS: 0,
        STD: 0,
        SYP: 0,
        TMM: 0,
        TND: 3,
        TRL: 0,
        TWD: 2,
        TZS: 2,
        UGX: 0,
        UYI: 0,
        UYW: 4,
        UZS: 2,
        VEF: 2,
        VND: 0,
        VUV: 0,
        XAF: 0,
        XOF: 0,
        XPF: 0,
        YER: 0,
        ZMK: 0,
        ZWD: 0
      }
    },
    10232: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = r.get(e);
        return t || (t = Object.create(null), r.set(e, t)), t
      };
      var r = new WeakMap
    },
    51451: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.numberingSystemNames = void 0, t.numberingSystemNames = ["adlm", "ahom", "arab", "arabext", "armn", "armnlow", "bali", "beng", "bhks", "brah", "cakm", "cham", "cyrl", "deva", "diak", "ethi", "fullwide", "gara", "geor", "gong", "gonm", "grek", "greklow", "gujr", "gukh", "guru", "hanidays", "hanidec", "hans", "hansfin", "hant", "hantfin", "hebr", "hmng", "hmnp", "java", "jpan", "jpanfin", "jpanyear", "kali", "kawi", "khmr", "knda", "krai", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrepka", "mymrpao", "mymrshan", "mymrtlng", "nagm", "newa", "nkoo", "olck", "onao", "orya", "osma", "outlined", "rohg", "roman", "romanlow", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "sunu", "takr", "talu", "taml", "tamldec", "telu", "thai", "tibt", "tirh", "tnsa", "vaii", "wara", "wcho"]
    },
    48050: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.toLocaleString = function(e, t, r) {
        return new n.NumberFormat(t, r).format(e)
      };
      var n = r(35237)
    },
    11050: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => R,
        __assign: () => a,
        __asyncDelegator: () => O,
        __asyncGenerator: () => D,
        __asyncValues: () => S,
        __await: () => F,
        __awaiter: () => d,
        __classPrivateFieldGet: () => L,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => k,
        __createBinding: () => b,
        __decorate: () => c,
        __disposeResources: () => A,
        __esDecorate: () => u,
        __exportStar: () => _,
        __extends: () => o,
        __generator: () => y,
        __importDefault: () => E,
        __importStar: () => T,
        __makeTemplateObject: () => j,
        __metadata: () => p,
        __param: () => l,
        __propKey: () => f,
        __read: () => g,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => C,
        __runInitializers: () => s,
        __setFunctionName: () => m,
        __spread: () => v,
        __spreadArray: () => P,
        __spreadArrays: () => w,
        __values: () => h,
        default: () => K
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

      function l(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function u(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, l = n.kind, u = "getter" === l ? "get" : "setter" === l ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, f = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), m = !1, p = r.length - 1; p >= 0; p--) {
          var d = {};
          for (var y in n) d[y] = "access" === y ? {} : n[y];
          for (var y in n.access) d.access[y] = n.access[y];
          d.addInitializer = function(e) {
            if (m) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[p])("accessor" === l ? {
            get: f.get,
            set: f.set
          } : f[u], d);
          if ("accessor" === l) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (c = i(b.get)) && (f.get = c), (c = i(b.set)) && (f.set = c), (c = i(b.init)) && o.unshift(c)
          } else(c = i(b)) && ("field" === l ? o.unshift(c) : f[u] = c)
        }
        s && Object.defineProperty(s, n.name, f), m = !0
      }

      function s(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function m(e, t, r) {
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
              l(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              l(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, c)
          }
          l((n = n.apply(e, t || [])).next())
        }))
      }

      function y(e, t) {
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
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function c(c) {
          return function(l) {
            return function(c) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      a.label = o[1], o = c;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(c);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
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
            }([c, l])
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

      function _(e, t) {
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

      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
        return n
      }

      function P(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function F(e) {
        return this instanceof F ? (this.v = e, this) : new F(e)
      }

      function D(e, t, r) {
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
              a.push([e, t, r, n]) > 1 || c(e, t)
            }))
          }, t && (n[e] = t(n[e])))
        }

        function c(e, t) {
          try {
            (r = o[e](t)).value instanceof F ? Promise.resolve(r.value.v).then(l, u) : s(a[0][2], r)
          } catch (e) {
            s(a[0][3], e)
          }
          var r
        }

        function l(e) {
          c("next", e)
        }

        function u(e) {
          c("throw", e)
        }

        function s(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function O(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: F(e[n](t)),
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

      function j(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var N = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        I = function(e) {
          return I = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, I(e)
        };

      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = I(e), n = 0; n < r.length; n++) "default" !== r[n] && b(t, e, r[n]);
        return N(t, e), t
      }

      function E(e) {
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

      function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function R(e, t, r) {
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
      var x = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new x(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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
      const K = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: l,
        __esDecorate: u,
        __runInitializers: s,
        __propKey: f,
        __setFunctionName: m,
        __metadata: p,
        __awaiter: d,
        __generator: y,
        __createBinding: b,
        __exportStar: _,
        __values: h,
        __read: g,
        __spread: v,
        __spreadArrays: w,
        __spreadArray: P,
        __await: F,
        __asyncGenerator: D,
        __asyncDelegator: O,
        __asyncValues: S,
        __makeTemplateObject: j,
        __importStar: T,
        __importDefault: E,
        __classPrivateFieldGet: L,
        __classPrivateFieldSet: k,
        __classPrivateFieldIn: M,
        __addDisposableResource: R,
        __disposeResources: A,
        __rewriteRelativeImportExtension: C
      }
    }
  }
]);