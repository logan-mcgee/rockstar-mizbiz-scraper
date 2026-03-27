try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "aaa1e3ee-9869-4dfa-9287-3a45b597956d", e._sentryDebugIdIdentifier = "sentry-dbid-aaa1e3ee-9869-4dfa-9287-3a45b597956d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [8391], {
    15912: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t = r(31635),
        i = r(48880),
        a = r(76563),
        u = r(63288),
        o = t.__importDefault(r(49948)),
        l = function() {
          function e(n, r) {
            if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");
            return (0, a.InitializeRelativeTimeFormat)(this, n, r, {
              getInternalSlots: o.default,
              availableLocales: e.availableLocales,
              relevantExtensionKeys: e.relevantExtensionKeys,
              localeData: e.localeData,
              getDefaultLocale: e.getDefaultLocale
            })
          }
          return e.prototype.format = function(e, n) {
            if ("object" != typeof this) throw new TypeError("format was called on a non-object");
            if (!(0, o.default)(this).initializedRelativeTimeFormat) throw new TypeError("format was called on a invalid context");
            return (0, u.PartitionRelativeTimePattern)(this, Number(e), (0, i.ToString)(n), {
              getInternalSlots: o.default
            }).map(function(e) {
              return e.value
            }).join("")
          }, e.prototype.formatToParts = function(e, n) {
            if ("object" != typeof this) throw new TypeError("formatToParts was called on a non-object");
            if (!(0, o.default)(this).initializedRelativeTimeFormat) throw new TypeError("formatToParts was called on a invalid context");
            return (0, u.PartitionRelativeTimePattern)(this, Number(e), (0, i.ToString)(n), {
              getInternalSlots: o.default
            })
          }, e.prototype.resolvedOptions = function() {
            if ("object" != typeof this) throw new TypeError("resolvedOptions was called on a non-object");
            var e = (0, o.default)(this);
            if (!e.initializedRelativeTimeFormat) throw new TypeError("resolvedOptions was called on a invalid context");
            return {
              locale: e.locale,
              style: e.style,
              numeric: e.numeric,
              numberingSystem: e.numberingSystem
            }
          }, e.supportedLocalesOf = function(n, r) {
            return (0, i.SupportedLocales)(e.availableLocales, (0, i.CanonicalizeLocaleList)(n), r)
          }, e.__addLocaleData = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            for (var t = 0, i = n; t < i.length; t++) {
              var a = i[t],
                u = a.data,
                o = a.locale,
                l = new Intl.Locale(o).minimize().toString();
              e.localeData[o] = e.localeData[l] = u, e.availableLocales.add(l), e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = l)
            }
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = ["nu"], e.polyfilled = !0, e
        }();
      n.default = l;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(l.prototype, Symbol.toStringTag, {
          value: "Intl.RelativeTimeFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(l.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(l.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    20535: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t = r(31635).__importDefault(r(15912));
      Object.defineProperty(Intl, "RelativeTimeFormat", {
        value: t.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    48880: (e, n, r) => {
      function t(e) {
        return Intl.getCanonicalLocales(e)
      }

      function i(e, n) {
        var r = n.zoneNames,
          t = n.uppercaseLinks,
          i = e.toUpperCase(),
          a = r.reduce(function(e, n) {
            return e[n.toUpperCase()] = n, e
          }, {}),
          u = t[i] || a[i];
        return "Etc/UTC" === u || "Etc/GMT" === u ? "UTC" : u
      }
      r.r(n), r.d(n, {
        ApplyUnsignedRoundingMode: () => Te,
        ArrayCreate: () => _,
        CanonicalizeLocaleList: () => t,
        CanonicalizeTimeZoneName: () => i,
        CoerceOptionsToObject: () => fe,
        CollapseNumberRange: () => Ae,
        ComputeExponent: () => Le,
        ComputeExponentForMagnitude: () => Ne,
        CurrencyDigits: () => _e,
        DateFromTime: () => J,
        Day: () => Z,
        DayFromYear: () => q,
        DayWithinYear: () => V,
        DaysInYear: () => $,
        FormatApproximately: () => $e,
        FormatNumeric: () => He,
        FormatNumericRange: () => Je,
        FormatNumericRangeToParts: () => Qe,
        FormatNumericToParts: () => Xe,
        FormatNumericToString: () => Be,
        GetNumberOption: () => de,
        GetOption: () => ge,
        GetOptionsObject: () => pe,
        GetStringOrBooleanOption: () => ye,
        GetUnsignedRoundingMode: () => xe,
        HasOwnProperty: () => R,
        HourFromTime: () => ie,
        InLeapYear: () => H,
        InitializeNumberFormat: () => on,
        IsSanctionedSimpleUnitIdentifier: () => he,
        IsValidTimeZoneName: () => Fe,
        IsWellFormedCurrencyCode: () => we,
        IsWellFormedUnitIdentifier: () => Se,
        MinFromTime: () => ae,
        MonthFromTime: () => K,
        OrdinaryHasInstance: () => le,
        PartitionNumberPattern: () => Ve,
        PartitionNumberRangePattern: () => Ke,
        PartitionPattern: () => ln,
        RangePatternType: () => en,
        SANCTIONED_UNITS: () => ve,
        SIMPLE_UNITS: () => be,
        SameValue: () => L,
        SecFromTime: () => ue,
        SetNumberFormatDigitOptions: () => an,
        SetNumberFormatUnitOptions: () => un,
        SupportedLocales: () => cn,
        TimeClip: () => j,
        TimeFromYear: () => W,
        ToIntlMathematicalValue: () => fn,
        ToNumber: () => M,
        ToObject: () => B,
        ToPrimitive: () => se,
        ToRawFixed: () => Me,
        ToRawPrecision: () => je,
        ToString: () => P,
        Type: () => k,
        WeekDay: () => G,
        YearFromTime: () => Y,
        ZERO: () => u,
        _formatToParts: () => Ge,
        createDataProperty: () => T,
        createMemoizedDateTimeFormat: () => N,
        createMemoizedListFormat: () => x,
        createMemoizedLocale: () => O,
        createMemoizedNumberFormat: () => A,
        createMemoizedPluralRules: () => I,
        defineProperty: () => S,
        getInternalSlot: () => F,
        getMultiInternalSlots: () => E,
        invariant: () => C,
        isLiteralPart: () => w,
        isMissingLocaleDataError: () => sn,
        msFromTime: () => ce,
        removeUnitNamespace: () => De,
        setInternalSlot: () => b,
        setMultiInternalSlots: () => h
      });
      var a = r(76582),
        u = (new a.A(10), new a.A(0)),
        o = new a.A(-0),
        l = r(31635);

      function c(e, n) {
        var r = n && n.cache ? n.cache : y,
          t = n && n.serializer ? n.serializer : g;
        return (n && n.strategy ? n.strategy : d)(e, {
          cache: r,
          serializer: t
        })
      }

      function s(e, n, r, t) {
        var i, a = null == (i = t) || "number" == typeof i || "boolean" == typeof i ? t : r(t),
          u = n.get(a);
        return void 0 === u && (u = e.call(this, t), n.set(a, u)), u
      }

      function f(e, n, r) {
        var t = Array.prototype.slice.call(arguments, 3),
          i = r(t),
          a = n.get(i);
        return void 0 === a && (a = e.apply(this, t), n.set(i, a)), a
      }

      function m(e, n, r, t, i) {
        return r.bind(n, e, t, i)
      }

      function d(e, n) {
        return m(e, this, 1 === e.length ? s : f, n.cache.create(), n.serializer)
      }
      var g = function() {
          return JSON.stringify(arguments)
        },
        p = function() {
          function e() {
            this.cache = Object.create(null)
          }
          return e.prototype.get = function(e) {
            return this.cache[e]
          }, e.prototype.set = function(e, n) {
            this.cache[e] = n
          }, e
        }(),
        y = {
          create: function() {
            return new p
          }
        },
        v = {
          variadic: function(e, n) {
            return m(e, this, f, n.cache.create(), n.serializer)
          },
          monadic: function(e, n) {
            return m(e, this, s, n.cache.create(), n.serializer)
          }
        };

      function D(e, n) {
        if ("function" == typeof e.repeat) return e.repeat(n);
        for (var r = new Array(n), t = 0; t < r.length; t++) r[t] = e;
        return r.join("")
      }

      function b(e, n, r, t) {
        e.get(n) || e.set(n, Object.create(null)), e.get(n)[r] = t
      }

      function h(e, n, r) {
        for (var t = 0, i = Object.keys(r); t < i.length; t++) {
          var a = i[t];
          b(e, n, a, r[a])
        }
      }

      function F(e, n, r) {
        return E(e, n, r)[r]
      }

      function E(e, n) {
        for (var r = [], t = 2; t < arguments.length; t++) r[t - 2] = arguments[t];
        var i = e.get(n);
        if (!i) throw new TypeError("".concat(n, " InternalSlot has not been initialized"));
        return r.reduce(function(e, n) {
          return e[n] = i[n], e
        }, Object.create(null))
      }

      function w(e) {
        return "literal" === e.type
      }

      function S(e, n, r) {
        var t = r.value;
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        })
      }

      function T(e, n, r) {
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: r
        })
      }

      function C(e, n, r) {
        if (void 0 === r && (r = Error), !e) throw new r(n)
      }
      var A = c(function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.NumberFormat).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        N = c(function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.DateTimeFormat).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        I = c(function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        O = c(function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.Locale).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        x = c(function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.ListFormat).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        });

      function P(e) {
        if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
        return String(e)
      }

      function M(e) {
        if ("number" == typeof e) return new a.W(e);
        if (C("bigint" != typeof e && "symbol" != typeof e, "BigInt and Symbol are not supported", TypeError), void 0 === e) return new a.W(NaN);
        if (null === e || 0 === e) return u;
        if (!0 === e) return new a.W(1);
        if ("string" == typeof e) try {
          return new a.W(e)
        } catch (e) {
          return new a.W(NaN)
        }
        C("object" == typeof e, "object expected", TypeError);
        var n = se(e, "number");
        return C("object" != typeof n, "object expected", TypeError), M(n)
      }

      function j(e) {
        return e.isFinite() ? e.abs().greaterThan(8640000000000001) ? new a.W(NaN) : function(e) {
          var n = M(e);
          if (n.isNaN() || n.isZero()) return u;
          if (n.isFinite()) return n;
          var r = n.abs().floor();
          return n.isNegative() && (r = r.negated()), r
        }(e) : new a.W(NaN)
      }

      function B(e) {
        if (null == e) throw new TypeError("undefined/null cannot be converted to object");
        return Object(e)
      }

      function L(e, n) {
        return Object.is ? Object.is(e, n) : e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
      }

      function _(e) {
        return new Array(e)
      }

      function R(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }

      function k(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : void 0
      }
      var z = 864e5;

      function U(e, n) {
        return e - Math.floor(e / n) * n
      }

      function Z(e) {
        return Math.floor(e / z)
      }

      function G(e) {
        return U(Z(e) + 4, 7)
      }

      function q(e) {
        return Date.UTC(e, 0) / z
      }

      function W(e) {
        return Date.UTC(e, 0)
      }

      function Y(e) {
        return new Date(e).getUTCFullYear()
      }

      function $(e) {
        return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366
      }

      function V(e) {
        return Z(e) - q(Y(e))
      }

      function H(e) {
        return 365 === $(Y(e)) ? 0 : 1
      }

      function K(e) {
        var n = V(e),
          r = H(e);
        if (n >= 0 && n < 31) return 0;
        if (n < 59 + r) return 1;
        if (n < 90 + r) return 2;
        if (n < 120 + r) return 3;
        if (n < 151 + r) return 4;
        if (n < 181 + r) return 5;
        if (n < 212 + r) return 6;
        if (n < 243 + r) return 7;
        if (n < 273 + r) return 8;
        if (n < 304 + r) return 9;
        if (n < 334 + r) return 10;
        if (n < 365 + r) return 11;
        throw new Error("Invalid time")
      }

      function J(e) {
        var n = V(e),
          r = K(e),
          t = H(e);
        if (0 === r) return n + 1;
        if (1 === r) return n - 30;
        if (2 === r) return n - 58 - t;
        if (3 === r) return n - 89 - t;
        if (4 === r) return n - 119 - t;
        if (5 === r) return n - 150 - t;
        if (6 === r) return n - 180 - t;
        if (7 === r) return n - 211 - t;
        if (8 === r) return n - 242 - t;
        if (9 === r) return n - 272 - t;
        if (10 === r) return n - 303 - t;
        if (11 === r) return n - 333 - t;
        throw new Error("Invalid time")
      }
      var Q = 24,
        X = 60,
        ee = 60,
        ne = 1e3,
        re = ne * ee,
        te = re * X;

      function ie(e) {
        return U(Math.floor(e / te), Q)
      }

      function ae(e) {
        return U(Math.floor(e / re), X)
      }

      function ue(e) {
        return U(Math.floor(e / ne), ee)
      }

      function oe(e) {
        return "function" == typeof e
      }

      function le(e, n, r) {
        if (!oe(e)) return !1;
        if (null == r ? void 0 : r.boundTargetFunction) return n instanceof(null == r ? void 0 : r.boundTargetFunction);
        if ("object" != typeof n) return !1;
        var t = e.prototype;
        if ("object" != typeof t) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        return Object.prototype.isPrototypeOf.call(t, n)
      }

      function ce(e) {
        return U(e, ne)
      }

      function se(e, n) {
        if ("object" == typeof e && null != e) {
          var r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0,
            t = void 0;
          if (void 0 !== r) {
            void 0 === n ? t = "default" : "string" === n ? t = "string" : (C("number" === n, 'preferredType must be "string" or "number"'), t = "number");
            var i = r.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("Cannot convert exotic object to primitive.")
          }
          return void 0 === n && (n = "number"),
            function(e, n) {
              for (var r = 0, t = "string" === n ? ["toString", "valueOf"] : ["valueOf", "toString"]; r < t.length; r++) {
                var i = e[t[r]];
                if (oe(i)) {
                  var a = i.call(e);
                  if ("object" != typeof a) return a
                }
              }
              throw new TypeError("Cannot convert object to primitive value")
            }(e, n)
        }
        return e
      }

      function fe(e) {
        return void 0 === e ? Object.create(null) : B(e)
      }

      function me(e, n, r, t) {
        if (void 0 === e) return t;
        var i = Number(e);
        if (isNaN(i) || i < n || i > r) throw new RangeError("".concat(i, " is outside of range [").concat(n, ", ").concat(r, "]"));
        return Math.floor(i)
      }

      function de(e, n, r, t, i) {
        return me(e[n], r, t, i)
      }

      function ge(e, n, r, t, i) {
        if ("object" != typeof e) throw new TypeError("Options must be an object");
        var a = e[n];
        if (void 0 !== a) {
          if ("boolean" !== r && "string" !== r) throw new TypeError("invalid type");
          if ("boolean" === r && (a = Boolean(a)), "string" === r && (a = P(a)), void 0 !== t && !t.filter(function(e) {
              return e == a
            }).length) throw new RangeError("".concat(a, " is not within ").concat(t.join(", ")));
          return a
        }
        return i
      }

      function pe(e) {
        if (void 0 === e) return Object.create(null);
        if ("object" == typeof e) return e;
        throw new TypeError("Options must be an object")
      }

      function ye(e, n, r, t, i, a) {
        var u = e[n];
        if (void 0 === u) return a;
        if (!0 === u) return t;
        if (!1 === Boolean(u)) return i;
        if ("true" === (u = P(u)) || "false" === u) return a;
        if (-1 === (r || []).indexOf(u)) throw new RangeError("Invalid value ".concat(u));
        return u
      }
      var ve = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

      function De(e) {
        return e.slice(e.indexOf("-") + 1)
      }
      var be = ve.map(De);

      function he(e) {
        return be.indexOf(e) > -1
      }

      function Fe(e, n) {
        var r = n.zoneNamesFromData,
          t = n.uppercaseLinks,
          i = e.toUpperCase(),
          a = new Set,
          u = new Set;
        return r.map(function(e) {
          return e.toUpperCase()
        }).forEach(function(e) {
          return a.add(e)
        }), Object.keys(t).forEach(function(e) {
          u.add(e.toUpperCase()), a.add(t[e].toUpperCase())
        }), a.has(i) || u.has(i)
      }
      var Ee = /[^A-Z]/;

      function we(e) {
        return 3 === (e = e.replace(/([a-z])/g, function(e, n) {
          return n.toUpperCase()
        })).length && !Ee.test(e)
      }

      function Se(e) {
        if (he(e = e.replace(/([A-Z])/g, function(e, n) {
            return n.toLowerCase()
          }))) return !0;
        var n = e.split("-per-");
        if (2 !== n.length) return !1;
        var r = n[0],
          t = n[1];
        return !(!he(r) || !he(t))
      }

      function Te(e, n, r, t) {
        if (e.eq(n)) return n;
        if (C(n.lessThan(e) && e.lessThan(r), "x should be between r1 and r2 but x=".concat(e, ", r1=").concat(n, ", r2=").concat(r)), "zero" === t) return n;
        if ("infinity" === t) return r;
        var i = e.minus(n),
          a = r.minus(e);
        return i.lessThan(a) ? n : a.lessThan(i) ? r : (C(i.eq(a), "d1 should be equal to d2"), "half-zero" === t ? n : "half-infinity" === t ? r : (C("half-even" === t, "unsignedRoundingMode should be half-even"), n.div(r.minus(n)).mod(2).isZero() ? n : r))
      }
      var Ce = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);

      function Ae(e, n, r) {
        for (var t = (0, r.getInternalSlots)(e), i = t.dataLocaleData.numbers.symbols[t.numberingSystem], a = new RegExp("s?[".concat(i.rangeSign, "]s?")), u = n.findIndex(function(e) {
            return "literal" === e.type && a.test(e.value)
          }), o = [], l = u - 1; l >= 0 && Ce.has(n[l].type); l--) o.unshift(n[l]);
        if (Array.from(o.map(function(e) {
            return e.value
          }).join("")).length > 1) return (c = Array.from(n)).splice(u - o.length, o.length), c;
        var c, s = [];
        for (l = u + 1; l < n.length && Ce.has(n[l].type); l++) s.push(n[l]);
        return Array.from(s.map(function(e) {
          return e.value
        }).join("")).length > 1 ? ((c = Array.from(n)).splice(u + 1, s.length), c) : n
      }

      function Ne(e, n) {
        var r = e.notation,
          t = e.dataLocaleData,
          i = e.numberingSystem;
        switch (r) {
          case "standard":
            return 0;
          case "scientific":
            return n.toNumber();
          case "engineering":
            return n.div(3).floor().times(3).toNumber();
          default:
            C("compact" === r, "Invalid notation");
            var u = e.compactDisplay,
              o = e.style,
              l = e.currencyDisplay,
              c = void 0;
            if ("currency" === o && "name" !== l) c = (t.numbers.currency[i] || t.numbers.currency[t.numbers.nu[0]]).short;
            else {
              var s = t.numbers.decimal[i] || t.numbers.decimal[t.numbers.nu[0]];
              c = "long" === u ? s.long : s.short
            }
            if (!c) return 0;
            var f = a.A.pow(10, n).toString(),
              m = Object.keys(c);
            if (f < m[0]) return 0;
            if (f > m[m.length - 1]) return m[m.length - 1].length - 1;
            var d = m.indexOf(f);
            if (-1 === d) return 0;
            var g = m[d];
            return "0" === c[g].other ? 0 : g.length - c[g].other.match(/0+/)[0].length
        }
      }
      a.A.set({
        toExpPos: 100
      });
      var Ie = {
          ceil: "zero",
          floor: "infinity",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-zero",
          halfFloor: "half-infinity",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        },
        Oe = {
          ceil: "infinity",
          floor: "zero",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-infinity",
          halfFloor: "half-zero",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        };

      function xe(e, n) {
        return n ? Ie[e] : Oe[e]
      }

      function Pe(e, n) {
        return e.times(a.A.pow(10, -n))
      }

      function Me(e, n, r, t, i) {
        var u, o, l, c, s = r,
          f = function(e, n, r) {
            var t = e.times(a.A.pow(10, n)).floor().div(r).floor().times(r);
            return {
              n1: t,
              r1: Pe(t, n)
            }
          }(e, s, t),
          m = f.n1,
          d = f.r1,
          g = function(e, n, r) {
            var t = e.times(a.A.pow(10, n)).ceil().div(r).ceil().times(r);
            return {
              n2: t,
              r2: Pe(t, n)
            }
          }(e, s, t),
          p = g.n2,
          y = g.r2;
        if (Te(e, d, y, i).eq(d) ? (u = m, o = d) : (u = p, o = y), l = u.isZero() ? "0" : u.toString(), 0 !== s) {
          var v = l.length;
          v <= s && (l = D("0", s - v + 1) + l, v = s + 1);
          var b = l.slice(0, v - s),
            h = l.slice(l.length - s);
          l = b + "." + h, c = b.length
        } else c = l.length;
        for (var F = r - n; F > 0 && "0" === l[l.length - 1];) l = l.slice(0, l.length - 1), F--;
        return "." === l[l.length - 1] && (l = l.slice(0, l.length - 1)), {
          formattedString: l,
          roundedNumber: o,
          integerDigitsCount: c,
          roundingMagnitude: -s
        }
      }

      function je(e, n, r, t) {
        var i, o, l, c, s = r;
        if (e.isZero()) i = D("0", s), o = 0, l = u;
        else {
          var f = function(e, n) {
              for (var r = a.A.pow(10, n), t = a.A.pow(10, n - 1), i = e.div(t).log(10).plus(n).minus(1).ceil();;) {
                var u = e.div(a.A.pow(10, i.minus(n).plus(1))).floor();
                if (u.lessThan(r) && u.greaterThanOrEqualTo(t)) {
                  var o = u.times(a.A.pow(10, i.minus(n).plus(1)));
                  if (o.lessThanOrEqualTo(e)) return {
                    n1: u,
                    e1: i,
                    r1: o
                  }
                }
                i = i.minus(1)
              }
            }(e, s),
            m = f.n1,
            d = f.e1,
            g = f.r1,
            p = function(e, n) {
              for (var r = a.A.pow(10, n), t = a.A.pow(10, n - 1), i = e.div(r).log(10).plus(n).minus(1).floor();;) {
                var u = e.div(a.A.pow(10, i.minus(n).plus(1))).ceil();
                if (u.lessThan(r) && u.greaterThanOrEqualTo(t)) {
                  var o = u.times(a.A.pow(10, i.minus(n).plus(1)));
                  if (o.greaterThanOrEqualTo(e)) return {
                    n2: u,
                    e2: i,
                    r2: o
                  }
                }
                i = i.plus(1)
              }
            }(e, s),
            y = p.n2,
            v = p.e2,
            b = p.r2,
            h = void 0;
          Te(e, g, b, t).eq(g) ? (h = m, o = d.toNumber(), l = g) : (h = y, o = v.toNumber(), l = b), i = h.toString()
        }
        if (o >= s - 1 ? (i += D("0", o - s + 1), c = o + 1) : o >= 0 ? (i = i.slice(0, o + 1) + "." + i.slice(i.length - (s - (o + 1))), c = o + 1) : (C(o < 0, "e should be less than 0"), i = "0." + D("0", -o - 1) + i, c = 1), i.includes(".") && r > n) {
          for (var F = r - n; F > 0 && "0" === i[i.length - 1];) i = i.slice(0, i.length - 1), F--;
          "." === i[i.length - 1] && (i = i.slice(0, i.length - 1))
        }
        return {
          formattedString: i,
          roundedNumber: l,
          integerDigitsCount: c,
          roundingMagnitude: o
        }
      }

      function Be(e, n) {
        var r, t, i = n;
        i.isZero() && i.isNegative() ? (r = "negative", i = u) : (C(i.isFinite(), "NumberFormatDigitInternalSlots value is not finite"), "negative" == (r = i.lessThan(0) ? "negative" : "positive") && (i = i.negated()));
        var a = e.roundingType,
          l = xe(e.roundingMode, "negative" === r);
        switch (a) {
          case "significantDigits":
            t = je(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l);
            break;
          case "fractionDigits":
            t = Me(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            break;
          default:
            var c = je(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l),
              s = Me(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            "morePrecision" === e.roundingType ? t = c.roundingMagnitude <= s.roundingMagnitude ? c : s : (C("lessPrecision" === e.roundingType, "Invalid roundingType"), t = c.roundingMagnitude <= s.roundingMagnitude ? s : c)
        }
        i = t.roundedNumber;
        var f = t.formattedString;
        if ("stripIfInteger" === e.trailingZeroDisplay && i.isInteger()) {
          var m = f.indexOf(".");
          m > -1 && (f = f.slice(0, m))
        }
        var d = t.integerDigitsCount,
          g = e.minimumIntegerDigits;
        return d < g && (f = D("0", g - d) + f), "negative" === r && (i = i.isZero() ? o : i.negated()), {
          roundedNumber: i,
          formattedString: f
        }
      }

      function Le(e, n) {
        if (n.isZero()) return [0, 0];
        n.isNegative() && (n = n.negated());
        var r = n.log(10).floor(),
          t = Ne(e, r),
          i = Be(e, n = n.times(a.A.pow(10, -t)));
        return i.roundedNumber.isZero() || i.roundedNumber.log(10).floor().eq(r.minus(t)) ? [t, r.toNumber()] : [Ne(e, r.plus(1)), r.plus(1).toNumber()]
      }

      function _e(e, n) {
        var r = n.currencyDigitsData;
        return R(r, e) ? r[e] : 2
      }
      a.A.set({
        toExpPos: 100
      });
      var Re = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
        ke = {
          adlm: ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
          ahom: ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
          arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
          arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
          bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
          beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
          bhks: ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
          brah: ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
          cakm: ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
          cham: ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
          deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
          diak: ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
          fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
          gong: ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
          gonm: ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
          gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
          guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
          hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
          hmng: ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
          hmnp: ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
          java: ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
          kali: ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
          khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
          knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
          lana: ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
          lanatham: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
          lepc: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
          mathbold: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
          mathdbl: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
          mathmono: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
          mathsanb: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
          mathsans: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
          mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
          modi: ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
          mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
          mroo: ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
          mtei: ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
          mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
          mymrshan: ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
          mymrtlng: ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
          newa: ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
          nkoo: ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
          olck: ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
          orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
          osma: ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
          rohg: ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
          saur: ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
          segment: ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
          shrd: ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
          sind: ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
          sinh: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
          sora: ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
          sund: ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
          takr: ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
          talu: ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
          tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
          telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
          thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
          tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
          tirh: ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
          vaii: ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
          wara: ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
          wcho: ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"]
        },
        ze = new RegExp("^".concat(Re.source)),
        Ue = new RegExp("".concat(Re.source, "$")),
        Ze = /[#0](?:[\.,][#0]+)*/g;

      function Ge(e, n, r, t) {
        var i, u, o, l = e.sign,
          c = e.exponent,
          s = e.magnitude,
          f = t.notation,
          m = t.style,
          d = t.numberingSystem,
          g = n.numbers.nu[0],
          p = null;
        if ("compact" === f && s && (p = function(e, n, r, t, i, a, u) {
            var o, l, c = e.roundedNumber,
              s = e.sign,
              f = e.magnitude,
              m = String(Math.pow(10, f)),
              d = r.numbers.nu[0];
            if ("currency" === t && "name" !== a) {
              var g = null === (o = ((p = r.numbers.currency)[u] || p[d]).short) || void 0 === o ? void 0 : o[m];
              if (!g) return null;
              l = Ye(n, c.toNumber(), g)
            } else {
              var p, y = ((p = r.numbers.decimal)[u] || p[d])[i][m];
              if (!y) return null;
              l = Ye(n, c.toNumber(), y)
            }
            return "0" === l ? null : l = We(l, s).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
          }(e, r, n, m, t.compactDisplay, t.currencyDisplay, d)), "currency" === m && "name" !== t.currencyDisplay) {
          var y = n.currencies[t.currency];
          if (y) switch (t.currencyDisplay) {
            case "code":
              u = t.currency;
              break;
            case "symbol":
              u = y.symbol;
              break;
            default:
              u = y.narrow
          } else u = t.currency
        }
        o = p || ("decimal" === m || "unit" === m || "currency" === m && "name" === t.currencyDisplay ? We((n.numbers.decimal[d] || n.numbers.decimal[g]).standard, l) : We("currency" === m ? (D = n.numbers.currency[d] || n.numbers.currency[g])[t.currencySign] : n.numbers.percent[d] || n.numbers.percent[g], l));
        var v = Ze.exec(o)[0];
        if (o = o.replace(Ze, "{0}").replace(/'(.)'/g, "$1"), "currency" === m && "name" !== t.currencyDisplay) {
          var D, b = (D = n.numbers.currency[d] || n.numbers.currency[g]).currencySpacing.afterInsertBetween;
          b && !Ue.test(u) && (o = o.replace("¤{0}", "¤".concat(b, "{0}")));
          var h = D.currencySpacing.beforeInsertBetween;
          h && !ze.test(u) && (o = o.replace("{0}¤", "{0}".concat(h, "¤")))
        }
        for (var F = o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), E = [], w = n.numbers.symbols[d] || n.numbers.symbols[g], S = 0, T = F; S < T.length; S++)
          if (q = T[S]) switch (q) {
            case "{0}":
              E.push.apply(E, qe(w, e, f, c, d, !p && (null === (i = t.useGrouping) || void 0 === i || i), v, m, t.roundingIncrement, xe(t.roundingMode, -1 === l)));
              break;
            case "-":
              E.push({
                type: "minusSign",
                value: w.minusSign
              });
              break;
            case "+":
              E.push({
                type: "plusSign",
                value: w.plusSign
              });
              break;
            case "%":
              E.push({
                type: "percentSign",
                value: w.percentSign
              });
              break;
            case "¤":
              E.push({
                type: "currency",
                value: u
              });
              break;
            default:
              /^\{c:/.test(q) ? E.push({
                type: "compact",
                value: q.substring(3, q.length - 1)
              }) : E.push({
                type: "literal",
                value: q
              })
          }
        switch (m) {
          case "currency":
            if ("name" === t.currencyDisplay) {
              var C, A = (n.numbers.currency[d] || n.numbers.currency[g]).unitPattern,
                N = n.currencies[t.currency];
              C = N ? Ye(r, e.roundedNumber.times(a.A.pow(10, c)).toNumber(), N.displayName) : t.currency;
              for (var I = [], O = 0, x = A.split(/(\{[01]\})/g); O < x.length; O++) switch (q = x[O]) {
                case "{0}":
                  I.push.apply(I, E);
                  break;
                case "{1}":
                  I.push({
                    type: "currency",
                    value: C
                  });
                  break;
                default:
                  q && I.push({
                    type: "literal",
                    value: q
                  })
              }
              return I
            }
            return E;
          case "unit":
            var P = t.unit,
              M = t.unitDisplay,
              j = n.units.simple[P];
            if (A = void 0, j) A = Ye(r, e.roundedNumber.times(a.A.pow(10, c)).toNumber(), n.units.simple[P][M]);
            else {
              var B = P.split("-per-"),
                L = B[0],
                _ = B[1];
              j = n.units.simple[L];
              var R = Ye(r, e.roundedNumber.times(a.A.pow(10, c)).toNumber(), n.units.simple[L][M]),
                k = n.units.simple[_].perUnit[M];
              if (k) A = k.replace("{0}", R);
              else {
                var z = n.units.compound.per[M],
                  U = Ye(r, 1, n.units.simple[_][M]);
                A = A = z.replace("{0}", R).replace("{1}", U.replace("{0}", ""))
              }
            }
            I = [];
            for (var Z = 0, G = A.split(/(\s*\{0\}\s*)/); Z < G.length; Z++) {
              var q = G[Z],
                W = /^(\s*)\{0\}(\s*)$/.exec(q);
              W ? (W[1] && I.push({
                type: "literal",
                value: W[1]
              }), I.push.apply(I, E), W[2] && I.push({
                type: "literal",
                value: W[2]
              })) : q && I.push({
                type: "unit",
                value: q
              })
            }
            return I;
          default:
            return E
        }
      }

      function qe(e, n, r, t, i, u, o, l, c, s) {
        var f = [],
          m = n.formattedString,
          d = n.roundedNumber;
        if (d.isNaN()) return [{
          type: "nan",
          value: m
        }];
        if (!d.isFinite()) return [{
          type: "infinity",
          value: m
        }];
        var g = ke[i];
        g && (m = m.replace(/\d/g, function(e) {
          return g[+e] || e
        }));
        var p, y, v = m.indexOf(".");
        v > 0 ? (p = m.slice(0, v), y = m.slice(v + 1)) : p = m;
        var D = !1;
        if ("always" === u ? D = !0 : "min2" === u ? D = d.greaterThanOrEqualTo(1e4) : ("auto" === u || u) && (D = "compact" !== r || d.greaterThanOrEqualTo(1e4)), D) {
          var b = "currency" === l && null != e.currencyGroup ? e.currencyGroup : e.group,
            h = [],
            F = o.split(".")[0].split(","),
            E = 3,
            w = 3;
          F.length > 1 && (E = F[F.length - 1].length), F.length > 2 && (w = F[F.length - 2].length);
          var S = p.length - E;
          if (S > 0) {
            for (h.push(p.slice(S, S + E)), S -= w; S > 0; S -= w) h.push(p.slice(S, S + w));
            h.push(p.slice(0, S + w))
          } else h.push(p);
          for (; h.length > 0;) {
            var T = h.pop();
            f.push({
              type: "integer",
              value: T
            }), h.length > 0 && f.push({
              type: "group",
              value: b
            })
          }
        } else f.push({
          type: "integer",
          value: p
        });
        if (void 0 !== y) {
          var C = "currency" === l && null != e.currencyDecimal ? e.currencyDecimal : e.decimal;
          f.push({
            type: "decimal",
            value: C
          }, {
            type: "fraction",
            value: y
          })
        }
        if (("scientific" === r || "engineering" === r) && d.isFinite()) {
          f.push({
            type: "exponentSeparator",
            value: e.exponential
          }), t < 0 && (f.push({
            type: "exponentMinusSign",
            value: e.minusSign
          }), t = -t);
          var A = Me(new a.A(t), 0, 0, c, s);
          f.push({
            type: "exponentInteger",
            value: A.formattedString
          })
        }
        return f
      }

      function We(e, n) {
        e.indexOf(";") < 0 && (e = "".concat(e, ";-").concat(e));
        var r = e.split(";"),
          t = r[0],
          i = r[1];
        switch (n) {
          case 0:
            return t;
          case -1:
            return i;
          default:
            return i.indexOf("-") >= 0 ? i.replace(/-/g, "+") : "+".concat(t)
        }
      }

      function Ye(e, n, r) {
        return r[e.select(n)] || r.other
      }

      function $e(e, n) {
        var r = e.dataLocaleData.numbers.symbols[e.numberingSystem].approximatelySign;
        return n.push({
          type: "approximatelySign",
          value: r
        }), n
      }

      function Ve(e, n) {
        var r, t, i, u = n,
          o = 0,
          l = e.pl,
          c = e.dataLocaleData,
          s = e.numberingSystem,
          f = c.numbers.symbols[s] || c.numbers.symbols[c.numbers.nu[0]],
          m = 0;
        if (u.isNaN()) t = f.nan;
        else if (u.isFinite()) {
          u.isZero() || (C(u.isFinite(), "Input must be a mathematical value"), "percent" == e.style && (u = u.times(100)), m = (r = Le(e, u))[0], o = r[1], u = u.times(a.A.pow(10, -m)));
          var d = Be(e, u);
          t = d.formattedString, u = d.roundedNumber
        } else t = f.infinity;
        var g = e.signDisplay;
        switch (g) {
          case "never":
            i = 0;
            break;
          case "auto":
            i = u.isPositive() || u.isNaN() ? 0 : -1;
            break;
          case "always":
            i = u.isPositive() || u.isNaN() ? 1 : -1;
            break;
          case "exceptZero":
            i = u.isZero() ? 0 : u.isNegative() ? -1 : 1;
            break;
          default:
            C("negative" === g, 'signDisplay must be "negative"'), i = u.isNegative() && !u.isZero() ? -1 : 0
        }
        return Ge({
          roundedNumber: u,
          formattedString: t,
          exponent: m,
          magnitude: o,
          sign: i
        }, e.dataLocaleData, l, e)
      }

      function He(e, n) {
        return Ve(e, n).map(function(e) {
          return e.value
        }).join("")
      }

      function Ke(e, n, r, t) {
        var i = t.getInternalSlots;
        C(!n.isNaN() && !r.isNaN(), "Input must be a number", RangeError);
        var a = i(e),
          u = Ve(a, n),
          o = Ve(a, r);
        if (He(a, n) === He(a, r)) {
          var l = $e(a, u);
          return l.forEach(function(e) {
            e.source = "shared"
          }), l
        }
        var c = [];
        u.forEach(function(e) {
          e.source = "startRange", c.push(e)
        });
        var s = a.dataLocaleData.numbers.symbols[a.numberingSystem].rangeSign;
        return c.push({
          type: "literal",
          value: s,
          source: "shared"
        }), o.forEach(function(e) {
          e.source = "endRange", c.push(e)
        }), Ae(e, c, {
          getInternalSlots: i
        })
      }

      function Je(e, n, r, t) {
        return Ke(e, n, r, {
          getInternalSlots: t.getInternalSlots
        }).map(function(e) {
          return e.value
        }).join("")
      }

      function Qe(e, n, r, t) {
        return Ke(e, n, r, {
          getInternalSlots: t.getInternalSlots
        }).map(function(e, n) {
          return {
            type: e.type,
            value: e.value,
            source: e.source,
            result: n.toString()
          }
        })
      }

      function Xe(e, n, r) {
        for (var t = Ve(r.getInternalSlots(e), n), i = _(0), a = 0, u = t; a < u.length; a++) {
          var o = u[a];
          i.push({
            type: o.type,
            value: o.value
          })
        }
        return i
      }
      var en, nn, rn = r(74786),
        tn = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3]);

      function an(e, n, r, t, i) {
        var a = de(n, "minimumIntegerDigits", 1, 21, 1),
          u = n.minimumFractionDigits,
          o = n.maximumFractionDigits,
          l = n.minimumSignificantDigits,
          c = n.maximumSignificantDigits;
        e.minimumIntegerDigits = a;
        var s = de(n, "roundingIncrement", 1, 5e3, 1);
        C(tn.has(s), "Invalid rounding increment value: ".concat(s, ".\nValid values are ").concat(Array.from(tn).join(", "), "."));
        var f = ge(n, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand"),
          m = ge(n, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto"),
          d = ge(n, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
        1 !== s && (t = r), e.roundingIncrement = s, e.roundingMode = f, e.trailingZeroDisplay = d;
        var g = void 0 !== l || void 0 !== c,
          p = void 0 !== u || void 0 !== o,
          y = !0,
          v = !0;
        if ("auto" === m && (y = g, (g || !p && "compact" === i) && (v = !1)), y && (g ? (e.minimumSignificantDigits = me(l, 1, 21, 1), e.maximumSignificantDigits = me(c, e.minimumSignificantDigits, 21, 21)) : (e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 21)), v)
          if (p) {
            if (u = me(u, 0, 100, void 0), o = me(o, 0, 100, void 0), void 0 === u) C(void 0 !== o, "maximumFractionDigits must be defined"), u = Math.min(r, o);
            else if (void 0 === o) o = Math.max(t, u);
            else if (u > o) throw new RangeError("Invalid range, ".concat(u, " > ").concat(o));
            e.minimumFractionDigits = u, e.maximumFractionDigits = o
          } else e.minimumFractionDigits = r, e.maximumFractionDigits = t;
        y || v ? "morePrecision" === m ? (e.roundingType = "morePrecision", e.roundingPriority = "morePrecision") : "lessPrecision" === m ? (e.roundingType = "lessPrecision", e.roundingPriority = "lessPrecision") : g ? (e.roundingType = "significantDigits", e.roundingPriority = "auto") : (e.roundingType = "fractionDigits", e.roundingPriority = "auto") : (e.minimumFractionDigits = 0, e.maximumFractionDigits = 0, e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 2, e.roundingType = "morePrecision", e.roundingPriority = "morePrecision"), 1 !== s && (C("fractionDigits" === e.roundingType, "Invalid roundingType", TypeError), C(e.maximumFractionDigits === e.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError))
      }

      function un(e, n) {
        void 0 === n && (n = Object.create(null));
        var r = ge(n, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        e.style = r;
        var t = ge(n, "currency", "string", void 0, void 0);
        C(void 0 === t || we(t), "Malformed currency code", RangeError), C("currency" !== r || void 0 !== t, "currency cannot be undefined", TypeError);
        var i = ge(n, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
          a = ge(n, "currencySign", "string", ["standard", "accounting"], "standard"),
          u = ge(n, "unit", "string", void 0, void 0);
        C(void 0 === u || Se(u), "Invalid unit argument for Intl.NumberFormat()", RangeError), C("unit" !== r || void 0 !== u, "unit cannot be undefined", TypeError);
        var o = ge(n, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        "currency" === r && (e.currency = t.toUpperCase(), e.currencyDisplay = i, e.currencySign = a), "unit" === r && (e.unit = u, e.unitDisplay = o)
      }

      function on(e, n, r, i) {
        var a = i.getInternalSlots,
          u = i.localeData,
          o = i.availableLocales,
          l = i.numberingSystemNames,
          c = i.getDefaultLocale,
          s = i.currencyDigitsData,
          f = t(n),
          m = fe(r),
          d = Object.create(null),
          g = ge(m, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        d.localeMatcher = g;
        var p = ge(m, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== p && l.indexOf(p) < 0) throw RangeError("Invalid numberingSystems: ".concat(p));
        d.nu = p;
        var y = (0, rn.ResolveLocale)(Array.from(o), f, d, ["nu"], u, c),
          v = u[y.dataLocale];
        C(!!v, "Missing locale data for ".concat(y.dataLocale));
        var D = a(e);
        D.locale = y.locale, D.dataLocale = y.dataLocale, D.numberingSystem = y.nu, D.dataLocaleData = v, un(D, m);
        var b, h, F = D.style,
          E = ge(m, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        if (D.notation = E, "currency" === F && "standard" === E) {
          var w = _e(D.currency, {
            currencyDigitsData: s
          });
          b = w, h = w
        } else b = 0, h = "percent" === F ? 0 : 3;
        an(D, m, b, h, E);
        var S = ge(m, "compactDisplay", "string", ["short", "long"], "short"),
          T = "auto";
        "compact" === E && (D.compactDisplay = S, T = "min2");
        var A = ye(m, "useGrouping", ["min2", "auto", "always"], "always", !1, T);
        D.useGrouping = A;
        var N = ge(m, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
        return D.signDisplay = N, e
      }

      function ln(e) {
        for (var n = [], r = e.indexOf("{"), t = 0, i = 0, a = e.length; r < e.length && r > -1;) C((t = e.indexOf("}", r)) > r, "Invalid pattern ".concat(e)), r > i && n.push({
          type: "literal",
          value: e.substring(i, r)
        }), n.push({
          type: e.substring(r + 1, t),
          value: void 0
        }), i = t + 1, r = e.indexOf("{", i);
        return i < a && n.push({
          type: "literal",
          value: e.substring(i, a)
        }), n
      }

      function cn(e, n, r) {
        return void 0 !== r && ge(r = B(r), "localeMatcher", "string", ["lookup", "best fit"], "best fit"), (0, rn.LookupSupportedLocales)(Array.from(e), n)
      }

      function sn(e) {
        return "MISSING_LOCALE_DATA" === e.type
      }

      function fn(e) {
        var n = se(e, "number");
        if ("bigint" == typeof n) return new a.A(n);
        if (void 0 === n) return new a.A(NaN);
        if (!0 === n) return new a.A(1);
        if (!1 === n) return new a.A(0);
        if (null === n) return new a.A(0);
        try {
          return new a.A(n)
        } catch (e) {
          return new a.A(NaN)
        }
      }
      nn = Error, (0, l.__extends)(function() {
          var e = null !== nn && nn.apply(this, arguments) || this;
          return e.type = "MISSING_LOCALE_DATA", e
        }, nn),
        function(e) {
          e.startRange = "startRange", e.shared = "shared", e.endRange = "endRange"
        }(en || (en = {}))
    },
    49948: (e, n) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = function(e) {
        var n = r.get(e);
        return n || (n = Object.create(null), r.set(e, n)), n
      };
      var r = new WeakMap
    },
    63288: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.PartitionRelativeTimePattern = function(e, n, r, u) {
        var o = u.getInternalSlots;
        if ((0, t.invariant)("Number" === (0, t.Type)(n), "value must be number, instead got ".concat(typeof n), TypeError), (0, t.invariant)("String" === (0, t.Type)(r), "unit must be number, instead got ".concat(typeof n), TypeError), isNaN(n) || !isFinite(n)) throw new RangeError("Invalid value ".concat(n));
        var l = (0, i.SingularRelativeTimeUnit)(r),
          c = o(e),
          s = c.fields,
          f = c.style,
          m = c.numeric,
          d = c.pluralRules,
          g = c.numberFormat,
          p = l;
        "short" === f ? p = "".concat(l, "-short") : "narrow" === f && (p = "".concat(l, "-narrow")), p in s || (p = l);
        var y = s[p];
        if ("auto" === m && (0, t.ToString)(n) in y) return [{
          type: "literal",
          value: y[(0, t.ToString)(n)]
        }];
        var v = "future";
        ((0, t.SameValue)(n, -0) || n < 0) && (v = "past");
        var D = y[v],
          b = "function" == typeof g.formatToParts ? g.formatToParts(Math.abs(n)) : [{
            type: "literal",
            value: g.format(Math.abs(n)),
            unit: r
          }],
          h = D[d.select(n)];
        return (0, a.MakePartsList)(h, l, b)
      };
      var t = r(48880),
        i = r(88625),
        a = r(82851)
    },
    76563: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.InitializeRelativeTimeFormat = function(e, n, r, u) {
        var o = u.getInternalSlots,
          l = u.availableLocales,
          c = u.relevantExtensionKeys,
          s = u.localeData,
          f = u.getDefaultLocale,
          m = o(e);
        m.initializedRelativeTimeFormat = !0;
        var d = (0, t.CanonicalizeLocaleList)(n),
          g = Object.create(null),
          p = (0, t.CoerceOptionsToObject)(r),
          y = (0, t.GetOption)(p, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        g.localeMatcher = y;
        var v = (0, t.GetOption)(p, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== v && !a.test(v)) throw new RangeError("Invalid numbering system ".concat(v));
        g.nu = v;
        var D = (0, i.ResolveLocale)(l, d, g, c, s, f),
          b = D.locale,
          h = D.nu;
        m.locale = b, m.style = (0, t.GetOption)(p, "style", "string", ["long", "narrow", "short"], "long"), m.numeric = (0, t.GetOption)(p, "numeric", "string", ["always", "auto"], "always");
        var F = s[D.dataLocale];
        return (0, t.invariant)(!!F, "Missing locale data for ".concat(D.dataLocale)), m.fields = F, m.numberFormat = (0, t.createMemoizedNumberFormat)(n), m.pluralRules = (0, t.createMemoizedPluralRules)(n), m.numberingSystem = h, e
      };
      var t = r(48880),
        i = r(74786),
        a = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
    },
    82851: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.MakePartsList = function(e, n, r) {
        for (var i = [], a = 0, u = (0, t.PartitionPattern)(e); a < u.length; a++) {
          var o = u[a];
          if ("literal" === o.type) i.push({
            type: "literal",
            value: o.value
          });
          else {
            (0, t.invariant)("0" === o.type, "Malformed pattern ".concat(e));
            for (var l = 0, c = r; l < c.length; l++) {
              var s = c[l];
              i.push({
                type: s.type,
                value: s.value,
                unit: n
              })
            }
          }
        }
        return i
      };
      var t = r(48880)
    },
    88625: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.SingularRelativeTimeUnit = function(e) {
        if ((0, t.invariant)("String" === (0, t.Type)(e), "unit must be a string"), "seconds" === e) return "second";
        if ("minutes" === e) return "minute";
        if ("hours" === e) return "hour";
        if ("days" === e) return "day";
        if ("weeks" === e) return "week";
        if ("months" === e) return "month";
        if ("quarters" === e) return "quarter";
        if ("years" === e) return "year";
        if ("second" !== e && "minute" !== e && "hour" !== e && "day" !== e && "week" !== e && "month" !== e && "quarter" !== e && "year" !== e) throw new RangeError("invalid unit");
        return e
      };
      var t = r(48880)
    }
  }
]);