try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "472033e7-5150-421a-a541-b5c40d0e5263", e._sentryDebugIdIdentifier = "sentry-dbid-472033e7-5150-421a-a541-b5c40d0e5263")
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
  [314], {
    7937: (e, n, r) => {
      function t(e) {
        return Intl.getCanonicalLocales(e)
      }

      function i(e, n) {
        var r = n.zoneNames,
          t = n.uppercaseLinks,
          i = e.toUpperCase(),
          u = r.reduce(function(e, n) {
            return e[n.toUpperCase()] = n, e
          }, {}),
          a = t[i] || u[i];
        return "Etc/UTC" === a || "Etc/GMT" === a ? "UTC" : a
      }
      r.r(n), r.d(n, {
        ApplyUnsignedRoundingMode: () => Se,
        ArrayCreate: () => _,
        CanonicalizeLocaleList: () => t,
        CanonicalizeTimeZoneName: () => i,
        CoerceOptionsToObject: () => fe,
        CollapseNumberRange: () => Te,
        ComputeExponent: () => Le,
        ComputeExponentForMagnitude: () => Ne,
        CurrencyDigits: () => _e,
        DateFromTime: () => J,
        Day: () => U,
        DayFromYear: () => W,
        DayWithinYear: () => H,
        DaysInYear: () => $,
        FormatApproximately: () => $e,
        FormatNumeric: () => Ke,
        FormatNumericRange: () => Je,
        FormatNumericRangeToParts: () => Qe,
        FormatNumericToParts: () => Xe,
        FormatNumericToString: () => Me,
        GetNumberOption: () => ge,
        GetOption: () => de,
        GetOptionsObject: () => pe,
        GetStringOrBooleanOption: () => ye,
        GetUnsignedRoundingMode: () => xe,
        HasOwnProperty: () => R,
        HourFromTime: () => ie,
        InLeapYear: () => K,
        InitializeNumberFormat: () => on,
        IsSanctionedSimpleUnitIdentifier: () => he,
        IsValidTimeZoneName: () => Fe,
        IsWellFormedCurrencyCode: () => we,
        IsWellFormedUnitIdentifier: () => Ce,
        MinFromTime: () => ue,
        MonthFromTime: () => V,
        OrdinaryHasInstance: () => le,
        PartitionNumberPattern: () => He,
        PartitionNumberRangePattern: () => Ve,
        PartitionPattern: () => ln,
        RangePatternType: () => en,
        SANCTIONED_UNITS: () => ve,
        SIMPLE_UNITS: () => be,
        SameValue: () => L,
        SecFromTime: () => ae,
        SetNumberFormatDigitOptions: () => un,
        SetNumberFormatUnitOptions: () => an,
        SupportedLocales: () => cn,
        TimeClip: () => B,
        TimeFromYear: () => q,
        ToIntlMathematicalValue: () => fn,
        ToNumber: () => j,
        ToObject: () => M,
        ToPrimitive: () => se,
        ToRawFixed: () => je,
        ToRawPrecision: () => Be,
        ToString: () => P,
        Type: () => k,
        WeekDay: () => G,
        YearFromTime: () => Y,
        ZERO: () => a,
        _formatToParts: () => Ge,
        createDataProperty: () => S,
        createMemoizedDateTimeFormat: () => N,
        createMemoizedListFormat: () => x,
        createMemoizedLocale: () => I,
        createMemoizedNumberFormat: () => T,
        createMemoizedPluralRules: () => O,
        defineProperty: () => C,
        getInternalSlot: () => F,
        getMultiInternalSlots: () => E,
        invariant: () => A,
        isLiteralPart: () => w,
        isMissingLocaleDataError: () => sn,
        msFromTime: () => ce,
        removeUnitNamespace: () => De,
        setInternalSlot: () => b,
        setMultiInternalSlots: () => h
      });
      var u = r(76582),
        a = (new u.A(10), new u.A(0)),
        o = new u.A(-0),
        l = r(31635);

      function c(e, n) {
        var r = n && n.cache ? n.cache : y,
          t = n && n.serializer ? n.serializer : d;
        return (n && n.strategy ? n.strategy : g)(e, {
          cache: r,
          serializer: t
        })
      }

      function s(e, n, r, t) {
        var i, u = null == (i = t) || "number" == typeof i || "boolean" == typeof i ? t : r(t),
          a = n.get(u);
        return void 0 === a && (a = e.call(this, t), n.set(u, a)), a
      }

      function f(e, n, r) {
        var t = Array.prototype.slice.call(arguments, 3),
          i = r(t),
          u = n.get(i);
        return void 0 === u && (u = e.apply(this, t), n.set(i, u)), u
      }

      function m(e, n, r, t, i) {
        return r.bind(n, e, t, i)
      }

      function g(e, n) {
        return m(e, this, 1 === e.length ? s : f, n.cache.create(), n.serializer)
      }
      var d = function() {
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
          var u = i[t];
          b(e, n, u, r[u])
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

      function C(e, n, r) {
        var t = r.value;
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        })
      }

      function S(e, n, r) {
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: r
        })
      }

      function A(e, n, r) {
        if (void 0 === r && (r = Error), !e) throw new r(n)
      }
      var T = c(function() {
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
        O = c(function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        I = c(function() {
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

      function j(e) {
        if ("number" == typeof e) return new u.W(e);
        if (A("bigint" != typeof e && "symbol" != typeof e, "BigInt and Symbol are not supported", TypeError), void 0 === e) return new u.W(NaN);
        if (null === e || 0 === e) return a;
        if (!0 === e) return new u.W(1);
        if ("string" == typeof e) try {
          return new u.W(e)
        } catch (e) {
          return new u.W(NaN)
        }
        A("object" == typeof e, "object expected", TypeError);
        var n = se(e, "number");
        return A("object" != typeof n, "object expected", TypeError), j(n)
      }

      function B(e) {
        return e.isFinite() ? e.abs().greaterThan(8640000000000001) ? new u.W(NaN) : function(e) {
          var n = j(e);
          if (n.isNaN() || n.isZero()) return a;
          if (n.isFinite()) return n;
          var r = n.abs().floor();
          return n.isNegative() && (r = r.negated()), r
        }(e) : new u.W(NaN)
      }

      function M(e) {
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

      function Z(e, n) {
        return e - Math.floor(e / n) * n
      }

      function U(e) {
        return Math.floor(e / z)
      }

      function G(e) {
        return Z(U(e) + 4, 7)
      }

      function W(e) {
        return Date.UTC(e, 0) / z
      }

      function q(e) {
        return Date.UTC(e, 0)
      }

      function Y(e) {
        return new Date(e).getUTCFullYear()
      }

      function $(e) {
        return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366
      }

      function H(e) {
        return U(e) - W(Y(e))
      }

      function K(e) {
        return 365 === $(Y(e)) ? 0 : 1
      }

      function V(e) {
        var n = H(e),
          r = K(e);
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
        var n = H(e),
          r = V(e),
          t = K(e);
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
        return Z(Math.floor(e / te), Q)
      }

      function ue(e) {
        return Z(Math.floor(e / re), X)
      }

      function ae(e) {
        return Z(Math.floor(e / ne), ee)
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
        return Z(e, ne)
      }

      function se(e, n) {
        if ("object" == typeof e && null != e) {
          var r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0,
            t = void 0;
          if (void 0 !== r) {
            void 0 === n ? t = "default" : "string" === n ? t = "string" : (A("number" === n, 'preferredType must be "string" or "number"'), t = "number");
            var i = r.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("Cannot convert exotic object to primitive.")
          }
          return void 0 === n && (n = "number"),
            function(e, n) {
              for (var r = 0, t = "string" === n ? ["toString", "valueOf"] : ["valueOf", "toString"]; r < t.length; r++) {
                var i = e[t[r]];
                if (oe(i)) {
                  var u = i.call(e);
                  if ("object" != typeof u) return u
                }
              }
              throw new TypeError("Cannot convert object to primitive value")
            }(e, n)
        }
        return e
      }

      function fe(e) {
        return void 0 === e ? Object.create(null) : M(e)
      }

      function me(e, n, r, t) {
        if (void 0 === e) return t;
        var i = Number(e);
        if (isNaN(i) || i < n || i > r) throw new RangeError("".concat(i, " is outside of range [").concat(n, ", ").concat(r, "]"));
        return Math.floor(i)
      }

      function ge(e, n, r, t, i) {
        return me(e[n], r, t, i)
      }

      function de(e, n, r, t, i) {
        if ("object" != typeof e) throw new TypeError("Options must be an object");
        var u = e[n];
        if (void 0 !== u) {
          if ("boolean" !== r && "string" !== r) throw new TypeError("invalid type");
          if ("boolean" === r && (u = Boolean(u)), "string" === r && (u = P(u)), void 0 !== t && !t.filter(function(e) {
              return e == u
            }).length) throw new RangeError("".concat(u, " is not within ").concat(t.join(", ")));
          return u
        }
        return i
      }

      function pe(e) {
        if (void 0 === e) return Object.create(null);
        if ("object" == typeof e) return e;
        throw new TypeError("Options must be an object")
      }

      function ye(e, n, r, t, i, u) {
        var a = e[n];
        if (void 0 === a) return u;
        if (!0 === a) return t;
        if (!1 === Boolean(a)) return i;
        if ("true" === (a = P(a)) || "false" === a) return u;
        if (-1 === (r || []).indexOf(a)) throw new RangeError("Invalid value ".concat(a));
        return a
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
          u = new Set,
          a = new Set;
        return r.map(function(e) {
          return e.toUpperCase()
        }).forEach(function(e) {
          return u.add(e)
        }), Object.keys(t).forEach(function(e) {
          a.add(e.toUpperCase()), u.add(t[e].toUpperCase())
        }), u.has(i) || a.has(i)
      }
      var Ee = /[^A-Z]/;

      function we(e) {
        return 3 === (e = e.replace(/([a-z])/g, function(e, n) {
          return n.toUpperCase()
        })).length && !Ee.test(e)
      }

      function Ce(e) {
        if (he(e = e.replace(/([A-Z])/g, function(e, n) {
            return n.toLowerCase()
          }))) return !0;
        var n = e.split("-per-");
        if (2 !== n.length) return !1;
        var r = n[0],
          t = n[1];
        return !(!he(r) || !he(t))
      }

      function Se(e, n, r, t) {
        if (e.eq(n)) return n;
        if (A(n.lessThan(e) && e.lessThan(r), "x should be between r1 and r2 but x=".concat(e, ", r1=").concat(n, ", r2=").concat(r)), "zero" === t) return n;
        if ("infinity" === t) return r;
        var i = e.minus(n),
          u = r.minus(e);
        return i.lessThan(u) ? n : u.lessThan(i) ? r : (A(i.eq(u), "d1 should be equal to d2"), "half-zero" === t ? n : "half-infinity" === t ? r : (A("half-even" === t, "unsignedRoundingMode should be half-even"), n.div(r.minus(n)).mod(2).isZero() ? n : r))
      }
      var Ae = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);

      function Te(e, n, r) {
        for (var t = (0, r.getInternalSlots)(e), i = t.dataLocaleData.numbers.symbols[t.numberingSystem], u = new RegExp("s?[".concat(i.rangeSign, "]s?")), a = n.findIndex(function(e) {
            return "literal" === e.type && u.test(e.value)
          }), o = [], l = a - 1; l >= 0 && Ae.has(n[l].type); l--) o.unshift(n[l]);
        if (Array.from(o.map(function(e) {
            return e.value
          }).join("")).length > 1) return (c = Array.from(n)).splice(a - o.length, o.length), c;
        var c, s = [];
        for (l = a + 1; l < n.length && Ae.has(n[l].type); l++) s.push(n[l]);
        return Array.from(s.map(function(e) {
          return e.value
        }).join("")).length > 1 ? ((c = Array.from(n)).splice(a + 1, s.length), c) : n
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
            A("compact" === r, "Invalid notation");
            var a = e.compactDisplay,
              o = e.style,
              l = e.currencyDisplay,
              c = void 0;
            if ("currency" === o && "name" !== l) c = (t.numbers.currency[i] || t.numbers.currency[t.numbers.nu[0]]).short;
            else {
              var s = t.numbers.decimal[i] || t.numbers.decimal[t.numbers.nu[0]];
              c = "long" === a ? s.long : s.short
            }
            if (!c) return 0;
            var f = u.A.pow(10, n).toString(),
              m = Object.keys(c);
            if (f < m[0]) return 0;
            if (f > m[m.length - 1]) return m[m.length - 1].length - 1;
            var g = m.indexOf(f);
            if (-1 === g) return 0;
            var d = m[g];
            return "0" === c[d].other ? 0 : d.length - c[d].other.match(/0+/)[0].length
        }
      }
      u.A.set({
        toExpPos: 100
      });
      var Oe = {
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
        Ie = {
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
        return n ? Oe[e] : Ie[e]
      }

      function Pe(e, n) {
        return e.times(u.A.pow(10, -n))
      }

      function je(e, n, r, t, i) {
        var a, o, l, c, s = r,
          f = function(e, n, r) {
            var t = e.times(u.A.pow(10, n)).floor().div(r).floor().times(r);
            return {
              n1: t,
              r1: Pe(t, n)
            }
          }(e, s, t),
          m = f.n1,
          g = f.r1,
          d = function(e, n, r) {
            var t = e.times(u.A.pow(10, n)).ceil().div(r).ceil().times(r);
            return {
              n2: t,
              r2: Pe(t, n)
            }
          }(e, s, t),
          p = d.n2,
          y = d.r2;
        if (Se(e, g, y, i).eq(g) ? (a = m, o = g) : (a = p, o = y), l = a.isZero() ? "0" : a.toString(), 0 !== s) {
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

      function Be(e, n, r, t) {
        var i, o, l, c, s = r;
        if (e.isZero()) i = D("0", s), o = 0, l = a;
        else {
          var f = function(e, n) {
              for (var r = u.A.pow(10, n), t = u.A.pow(10, n - 1), i = e.div(t).log(10).plus(n).minus(1).ceil();;) {
                var a = e.div(u.A.pow(10, i.minus(n).plus(1))).floor();
                if (a.lessThan(r) && a.greaterThanOrEqualTo(t)) {
                  var o = a.times(u.A.pow(10, i.minus(n).plus(1)));
                  if (o.lessThanOrEqualTo(e)) return {
                    n1: a,
                    e1: i,
                    r1: o
                  }
                }
                i = i.minus(1)
              }
            }(e, s),
            m = f.n1,
            g = f.e1,
            d = f.r1,
            p = function(e, n) {
              for (var r = u.A.pow(10, n), t = u.A.pow(10, n - 1), i = e.div(r).log(10).plus(n).minus(1).floor();;) {
                var a = e.div(u.A.pow(10, i.minus(n).plus(1))).ceil();
                if (a.lessThan(r) && a.greaterThanOrEqualTo(t)) {
                  var o = a.times(u.A.pow(10, i.minus(n).plus(1)));
                  if (o.greaterThanOrEqualTo(e)) return {
                    n2: a,
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
          Se(e, d, b, t).eq(d) ? (h = m, o = g.toNumber(), l = d) : (h = y, o = v.toNumber(), l = b), i = h.toString()
        }
        if (o >= s - 1 ? (i += D("0", o - s + 1), c = o + 1) : o >= 0 ? (i = i.slice(0, o + 1) + "." + i.slice(i.length - (s - (o + 1))), c = o + 1) : (A(o < 0, "e should be less than 0"), i = "0." + D("0", -o - 1) + i, c = 1), i.includes(".") && r > n) {
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

      function Me(e, n) {
        var r, t, i = n;
        i.isZero() && i.isNegative() ? (r = "negative", i = a) : (A(i.isFinite(), "NumberFormatDigitInternalSlots value is not finite"), "negative" == (r = i.lessThan(0) ? "negative" : "positive") && (i = i.negated()));
        var u = e.roundingType,
          l = xe(e.roundingMode, "negative" === r);
        switch (u) {
          case "significantDigits":
            t = Be(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l);
            break;
          case "fractionDigits":
            t = je(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            break;
          default:
            var c = Be(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l),
              s = je(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            "morePrecision" === e.roundingType ? t = c.roundingMagnitude <= s.roundingMagnitude ? c : s : (A("lessPrecision" === e.roundingType, "Invalid roundingType"), t = c.roundingMagnitude <= s.roundingMagnitude ? s : c)
        }
        i = t.roundedNumber;
        var f = t.formattedString;
        if ("stripIfInteger" === e.trailingZeroDisplay && i.isInteger()) {
          var m = f.indexOf(".");
          m > -1 && (f = f.slice(0, m))
        }
        var g = t.integerDigitsCount,
          d = e.minimumIntegerDigits;
        return g < d && (f = D("0", d - g) + f), "negative" === r && (i = i.isZero() ? o : i.negated()), {
          roundedNumber: i,
          formattedString: f
        }
      }

      function Le(e, n) {
        if (n.isZero()) return [0, 0];
        n.isNegative() && (n = n.negated());
        var r = n.log(10).floor(),
          t = Ne(e, r),
          i = Me(e, n = n.times(u.A.pow(10, -t)));
        return i.roundedNumber.isZero() || i.roundedNumber.log(10).floor().eq(r.minus(t)) ? [t, r.toNumber()] : [Ne(e, r.plus(1)), r.plus(1).toNumber()]
      }

      function _e(e, n) {
        var r = n.currencyDigitsData;
        return R(r, e) ? r[e] : 2
      }
      u.A.set({
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
        Ze = new RegExp("".concat(Re.source, "$")),
        Ue = /[#0](?:[\.,][#0]+)*/g;

      function Ge(e, n, r, t) {
        var i, a, o, l = e.sign,
          c = e.exponent,
          s = e.magnitude,
          f = t.notation,
          m = t.style,
          g = t.numberingSystem,
          d = n.numbers.nu[0],
          p = null;
        if ("compact" === f && s && (p = function(e, n, r, t, i, u, a) {
            var o, l, c = e.roundedNumber,
              s = e.sign,
              f = e.magnitude,
              m = String(Math.pow(10, f)),
              g = r.numbers.nu[0];
            if ("currency" === t && "name" !== u) {
              var d = null === (o = ((p = r.numbers.currency)[a] || p[g]).short) || void 0 === o ? void 0 : o[m];
              if (!d) return null;
              l = Ye(n, c.toNumber(), d)
            } else {
              var p, y = ((p = r.numbers.decimal)[a] || p[g])[i][m];
              if (!y) return null;
              l = Ye(n, c.toNumber(), y)
            }
            return "0" === l ? null : l = qe(l, s).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
          }(e, r, n, m, t.compactDisplay, t.currencyDisplay, g)), "currency" === m && "name" !== t.currencyDisplay) {
          var y = n.currencies[t.currency];
          if (y) switch (t.currencyDisplay) {
            case "code":
              a = t.currency;
              break;
            case "symbol":
              a = y.symbol;
              break;
            default:
              a = y.narrow
          } else a = t.currency
        }
        o = p || ("decimal" === m || "unit" === m || "currency" === m && "name" === t.currencyDisplay ? qe((n.numbers.decimal[g] || n.numbers.decimal[d]).standard, l) : qe("currency" === m ? (D = n.numbers.currency[g] || n.numbers.currency[d])[t.currencySign] : n.numbers.percent[g] || n.numbers.percent[d], l));
        var v = Ue.exec(o)[0];
        if (o = o.replace(Ue, "{0}").replace(/'(.)'/g, "$1"), "currency" === m && "name" !== t.currencyDisplay) {
          var D, b = (D = n.numbers.currency[g] || n.numbers.currency[d]).currencySpacing.afterInsertBetween;
          b && !Ze.test(a) && (o = o.replace("¤{0}", "¤".concat(b, "{0}")));
          var h = D.currencySpacing.beforeInsertBetween;
          h && !ze.test(a) && (o = o.replace("{0}¤", "{0}".concat(h, "¤")))
        }
        for (var F = o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), E = [], w = n.numbers.symbols[g] || n.numbers.symbols[d], C = 0, S = F; C < S.length; C++)
          if (W = S[C]) switch (W) {
            case "{0}":
              E.push.apply(E, We(w, e, f, c, g, !p && (null === (i = t.useGrouping) || void 0 === i || i), v, m, t.roundingIncrement, xe(t.roundingMode, -1 === l)));
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
                value: a
              });
              break;
            default:
              /^\{c:/.test(W) ? E.push({
                type: "compact",
                value: W.substring(3, W.length - 1)
              }) : E.push({
                type: "literal",
                value: W
              })
          }
        switch (m) {
          case "currency":
            if ("name" === t.currencyDisplay) {
              var A, T = (n.numbers.currency[g] || n.numbers.currency[d]).unitPattern,
                N = n.currencies[t.currency];
              A = N ? Ye(r, e.roundedNumber.times(u.A.pow(10, c)).toNumber(), N.displayName) : t.currency;
              for (var O = [], I = 0, x = T.split(/(\{[01]\})/g); I < x.length; I++) switch (W = x[I]) {
                case "{0}":
                  O.push.apply(O, E);
                  break;
                case "{1}":
                  O.push({
                    type: "currency",
                    value: A
                  });
                  break;
                default:
                  W && O.push({
                    type: "literal",
                    value: W
                  })
              }
              return O
            }
            return E;
          case "unit":
            var P = t.unit,
              j = t.unitDisplay,
              B = n.units.simple[P];
            if (T = void 0, B) T = Ye(r, e.roundedNumber.times(u.A.pow(10, c)).toNumber(), n.units.simple[P][j]);
            else {
              var M = P.split("-per-"),
                L = M[0],
                _ = M[1];
              B = n.units.simple[L];
              var R = Ye(r, e.roundedNumber.times(u.A.pow(10, c)).toNumber(), n.units.simple[L][j]),
                k = n.units.simple[_].perUnit[j];
              if (k) T = k.replace("{0}", R);
              else {
                var z = n.units.compound.per[j],
                  Z = Ye(r, 1, n.units.simple[_][j]);
                T = T = z.replace("{0}", R).replace("{1}", Z.replace("{0}", ""))
              }
            }
            O = [];
            for (var U = 0, G = T.split(/(\s*\{0\}\s*)/); U < G.length; U++) {
              var W = G[U],
                q = /^(\s*)\{0\}(\s*)$/.exec(W);
              q ? (q[1] && O.push({
                type: "literal",
                value: q[1]
              }), O.push.apply(O, E), q[2] && O.push({
                type: "literal",
                value: q[2]
              })) : W && O.push({
                type: "unit",
                value: W
              })
            }
            return O;
          default:
            return E
        }
      }

      function We(e, n, r, t, i, a, o, l, c, s) {
        var f = [],
          m = n.formattedString,
          g = n.roundedNumber;
        if (g.isNaN()) return [{
          type: "nan",
          value: m
        }];
        if (!g.isFinite()) return [{
          type: "infinity",
          value: m
        }];
        var d = ke[i];
        d && (m = m.replace(/\d/g, function(e) {
          return d[+e] || e
        }));
        var p, y, v = m.indexOf(".");
        v > 0 ? (p = m.slice(0, v), y = m.slice(v + 1)) : p = m;
        var D = !1;
        if ("always" === a ? D = !0 : "min2" === a ? D = g.greaterThanOrEqualTo(1e4) : ("auto" === a || a) && (D = "compact" !== r || g.greaterThanOrEqualTo(1e4)), D) {
          var b = "currency" === l && null != e.currencyGroup ? e.currencyGroup : e.group,
            h = [],
            F = o.split(".")[0].split(","),
            E = 3,
            w = 3;
          F.length > 1 && (E = F[F.length - 1].length), F.length > 2 && (w = F[F.length - 2].length);
          var C = p.length - E;
          if (C > 0) {
            for (h.push(p.slice(C, C + E)), C -= w; C > 0; C -= w) h.push(p.slice(C, C + w));
            h.push(p.slice(0, C + w))
          } else h.push(p);
          for (; h.length > 0;) {
            var S = h.pop();
            f.push({
              type: "integer",
              value: S
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
          var A = "currency" === l && null != e.currencyDecimal ? e.currencyDecimal : e.decimal;
          f.push({
            type: "decimal",
            value: A
          }, {
            type: "fraction",
            value: y
          })
        }
        if (("scientific" === r || "engineering" === r) && g.isFinite()) {
          f.push({
            type: "exponentSeparator",
            value: e.exponential
          }), t < 0 && (f.push({
            type: "exponentMinusSign",
            value: e.minusSign
          }), t = -t);
          var T = je(new u.A(t), 0, 0, c, s);
          f.push({
            type: "exponentInteger",
            value: T.formattedString
          })
        }
        return f
      }

      function qe(e, n) {
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

      function He(e, n) {
        var r, t, i, a = n,
          o = 0,
          l = e.pl,
          c = e.dataLocaleData,
          s = e.numberingSystem,
          f = c.numbers.symbols[s] || c.numbers.symbols[c.numbers.nu[0]],
          m = 0;
        if (a.isNaN()) t = f.nan;
        else if (a.isFinite()) {
          a.isZero() || (A(a.isFinite(), "Input must be a mathematical value"), "percent" == e.style && (a = a.times(100)), m = (r = Le(e, a))[0], o = r[1], a = a.times(u.A.pow(10, -m)));
          var g = Me(e, a);
          t = g.formattedString, a = g.roundedNumber
        } else t = f.infinity;
        var d = e.signDisplay;
        switch (d) {
          case "never":
            i = 0;
            break;
          case "auto":
            i = a.isPositive() || a.isNaN() ? 0 : -1;
            break;
          case "always":
            i = a.isPositive() || a.isNaN() ? 1 : -1;
            break;
          case "exceptZero":
            i = a.isZero() ? 0 : a.isNegative() ? -1 : 1;
            break;
          default:
            A("negative" === d, 'signDisplay must be "negative"'), i = a.isNegative() && !a.isZero() ? -1 : 0
        }
        return Ge({
          roundedNumber: a,
          formattedString: t,
          exponent: m,
          magnitude: o,
          sign: i
        }, e.dataLocaleData, l, e)
      }

      function Ke(e, n) {
        return He(e, n).map(function(e) {
          return e.value
        }).join("")
      }

      function Ve(e, n, r, t) {
        var i = t.getInternalSlots;
        A(!n.isNaN() && !r.isNaN(), "Input must be a number", RangeError);
        var u = i(e),
          a = He(u, n),
          o = He(u, r);
        if (Ke(u, n) === Ke(u, r)) {
          var l = $e(u, a);
          return l.forEach(function(e) {
            e.source = "shared"
          }), l
        }
        var c = [];
        a.forEach(function(e) {
          e.source = "startRange", c.push(e)
        });
        var s = u.dataLocaleData.numbers.symbols[u.numberingSystem].rangeSign;
        return c.push({
          type: "literal",
          value: s,
          source: "shared"
        }), o.forEach(function(e) {
          e.source = "endRange", c.push(e)
        }), Te(e, c, {
          getInternalSlots: i
        })
      }

      function Je(e, n, r, t) {
        return Ve(e, n, r, {
          getInternalSlots: t.getInternalSlots
        }).map(function(e) {
          return e.value
        }).join("")
      }

      function Qe(e, n, r, t) {
        return Ve(e, n, r, {
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
        for (var t = He(r.getInternalSlots(e), n), i = _(0), u = 0, a = t; u < a.length; u++) {
          var o = a[u];
          i.push({
            type: o.type,
            value: o.value
          })
        }
        return i
      }
      var en, nn, rn = r(50551),
        tn = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3]);

      function un(e, n, r, t, i) {
        var u = ge(n, "minimumIntegerDigits", 1, 21, 1),
          a = n.minimumFractionDigits,
          o = n.maximumFractionDigits,
          l = n.minimumSignificantDigits,
          c = n.maximumSignificantDigits;
        e.minimumIntegerDigits = u;
        var s = ge(n, "roundingIncrement", 1, 5e3, 1);
        A(tn.has(s), "Invalid rounding increment value: ".concat(s, ".\nValid values are ").concat(Array.from(tn).join(", "), "."));
        var f = de(n, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand"),
          m = de(n, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto"),
          g = de(n, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
        1 !== s && (t = r), e.roundingIncrement = s, e.roundingMode = f, e.trailingZeroDisplay = g;
        var d = void 0 !== l || void 0 !== c,
          p = void 0 !== a || void 0 !== o,
          y = !0,
          v = !0;
        if ("auto" === m && (y = d, (d || !p && "compact" === i) && (v = !1)), y && (d ? (e.minimumSignificantDigits = me(l, 1, 21, 1), e.maximumSignificantDigits = me(c, e.minimumSignificantDigits, 21, 21)) : (e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 21)), v)
          if (p) {
            if (a = me(a, 0, 100, void 0), o = me(o, 0, 100, void 0), void 0 === a) A(void 0 !== o, "maximumFractionDigits must be defined"), a = Math.min(r, o);
            else if (void 0 === o) o = Math.max(t, a);
            else if (a > o) throw new RangeError("Invalid range, ".concat(a, " > ").concat(o));
            e.minimumFractionDigits = a, e.maximumFractionDigits = o
          } else e.minimumFractionDigits = r, e.maximumFractionDigits = t;
        y || v ? "morePrecision" === m ? (e.roundingType = "morePrecision", e.roundingPriority = "morePrecision") : "lessPrecision" === m ? (e.roundingType = "lessPrecision", e.roundingPriority = "lessPrecision") : d ? (e.roundingType = "significantDigits", e.roundingPriority = "auto") : (e.roundingType = "fractionDigits", e.roundingPriority = "auto") : (e.minimumFractionDigits = 0, e.maximumFractionDigits = 0, e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 2, e.roundingType = "morePrecision", e.roundingPriority = "morePrecision"), 1 !== s && (A("fractionDigits" === e.roundingType, "Invalid roundingType", TypeError), A(e.maximumFractionDigits === e.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError))
      }

      function an(e, n) {
        void 0 === n && (n = Object.create(null));
        var r = de(n, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        e.style = r;
        var t = de(n, "currency", "string", void 0, void 0);
        A(void 0 === t || we(t), "Malformed currency code", RangeError), A("currency" !== r || void 0 !== t, "currency cannot be undefined", TypeError);
        var i = de(n, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
          u = de(n, "currencySign", "string", ["standard", "accounting"], "standard"),
          a = de(n, "unit", "string", void 0, void 0);
        A(void 0 === a || Ce(a), "Invalid unit argument for Intl.NumberFormat()", RangeError), A("unit" !== r || void 0 !== a, "unit cannot be undefined", TypeError);
        var o = de(n, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        "currency" === r && (e.currency = t.toUpperCase(), e.currencyDisplay = i, e.currencySign = u), "unit" === r && (e.unit = a, e.unitDisplay = o)
      }

      function on(e, n, r, i) {
        var u = i.getInternalSlots,
          a = i.localeData,
          o = i.availableLocales,
          l = i.numberingSystemNames,
          c = i.getDefaultLocale,
          s = i.currencyDigitsData,
          f = t(n),
          m = fe(r),
          g = Object.create(null),
          d = de(m, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        g.localeMatcher = d;
        var p = de(m, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== p && l.indexOf(p) < 0) throw RangeError("Invalid numberingSystems: ".concat(p));
        g.nu = p;
        var y = (0, rn.ResolveLocale)(Array.from(o), f, g, ["nu"], a, c),
          v = a[y.dataLocale];
        A(!!v, "Missing locale data for ".concat(y.dataLocale));
        var D = u(e);
        D.locale = y.locale, D.dataLocale = y.dataLocale, D.numberingSystem = y.nu, D.dataLocaleData = v, an(D, m);
        var b, h, F = D.style,
          E = de(m, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        if (D.notation = E, "currency" === F && "standard" === E) {
          var w = _e(D.currency, {
            currencyDigitsData: s
          });
          b = w, h = w
        } else b = 0, h = "percent" === F ? 0 : 3;
        un(D, m, b, h, E);
        var C = de(m, "compactDisplay", "string", ["short", "long"], "short"),
          S = "auto";
        "compact" === E && (D.compactDisplay = C, S = "min2");
        var T = ye(m, "useGrouping", ["min2", "auto", "always"], "always", !1, S);
        D.useGrouping = T;
        var N = de(m, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
        return D.signDisplay = N, e
      }

      function ln(e) {
        for (var n = [], r = e.indexOf("{"), t = 0, i = 0, u = e.length; r < e.length && r > -1;) A((t = e.indexOf("}", r)) > r, "Invalid pattern ".concat(e)), r > i && n.push({
          type: "literal",
          value: e.substring(i, r)
        }), n.push({
          type: e.substring(r + 1, t),
          value: void 0
        }), i = t + 1, r = e.indexOf("{", i);
        return i < u && n.push({
          type: "literal",
          value: e.substring(i, u)
        }), n
      }

      function cn(e, n, r) {
        return void 0 !== r && de(r = M(r), "localeMatcher", "string", ["lookup", "best fit"], "best fit"), (0, rn.LookupSupportedLocales)(Array.from(e), n)
      }

      function sn(e) {
        return "MISSING_LOCALE_DATA" === e.type
      }

      function fn(e) {
        var n = se(e, "number");
        if ("bigint" == typeof n) return new u.A(n);
        if (void 0 === n) return new u.A(NaN);
        if (!0 === n) return new u.A(1);
        if (!1 === n) return new u.A(0);
        if (null === n) return new u.A(0);
        try {
          return new u.A(n)
        } catch (e) {
          return new u.A(NaN)
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
    39355: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.PluralRules = void 0;
      var t = r(31635),
        i = r(7937),
        u = r(94205),
        a = r(47996),
        o = t.__importDefault(r(55949));

      function l(e, n) {
        if (!(e instanceof s)) throw new TypeError("Method Intl.PluralRules.prototype.".concat(n, " called on incompatible receiver ").concat(String(e)))
      }

      function c(e, n, r, t) {
        var i = t.IntegerDigits,
          u = t.NumberOfFractionDigits,
          a = t.FractionDigits;
        return s.localeData[e].fn(u ? "".concat(i, ".").concat(a) : i, "ordinal" === n)
      }
      var s = function() {
        function e(n, r) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.PluralRules must be called with 'new'");
          return (0, u.InitializePluralRules)(this, n, r, {
            availableLocales: e.availableLocales,
            relevantExtensionKeys: e.relevantExtensionKeys,
            localeData: e.localeData,
            getDefaultLocale: e.getDefaultLocale,
            getInternalSlots: o.default
          })
        }
        return e.prototype.resolvedOptions = function() {
          l(this, "resolvedOptions");
          var n = Object.create(null),
            r = (0, o.default)(this);
          return n.locale = r.locale, n.type = r.type, ["minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"].forEach(function(e) {
            var t = r[e];
            void 0 !== t && (n[e] = t)
          }), n.pluralCategories = t.__spreadArray([], e.localeData[n.locale].categories[n.type], !0), n
        }, e.prototype.select = function(e) {
          l(this, "select");
          var n = (0, i.ToNumber)(e);
          return (0, a.ResolvePlural)(this, n, {
            getInternalSlots: o.default,
            PluralRuleSelect: c
          })
        }, e.prototype.toString = function() {
          return "[object Intl.PluralRules]"
        }, e.supportedLocalesOf = function(n, r) {
          return (0, i.SupportedLocales)(e.availableLocales, (0, i.CanonicalizeLocaleList)(n), r)
        }, e.__addLocaleData = function() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          for (var t = 0, i = n; t < i.length; t++) {
            var u = i[t],
              a = u.data,
              o = u.locale;
            e.localeData[o] = a, e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = o)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e
      }();
      n.PluralRules = s;
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
    47996: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.ResolvePlural = function(e, n, r) {
        var u = r.getInternalSlots,
          a = r.PluralRuleSelect,
          o = u(e);
        if ((0, t.invariant)("Object" === (0, t.Type)(o), "pl has to be an object"), (0, t.invariant)("initializedPluralRules" in o, "pluralrules must be initialized"), !n.isFinite()) return "other";
        var l = o.locale,
          c = o.type,
          s = (0, t.FormatNumericToString)(o, n).formattedString;
        return a(l, c, n, (0, i.GetOperands)(s))
      };
      var t = r(7937),
        i = r(52236)
    },
    52236: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.GetOperands = function(e) {
        (0, t.invariant)("string" == typeof e, "GetOperands should have been called with a string");
        var n = (0, t.ToNumber)(e);
        (0, t.invariant)(n.isFinite(), "n should be finite");
        var r, i, u, a = e.indexOf("."),
          o = ""; - 1 === a ? (r = n, i = t.ZERO, u = 0) : (r = e.slice(0, a), o = e.slice(a, e.length), i = (0, t.ToNumber)(o), u = o.length);
        var l, c, s = (0, t.ToNumber)(r).abs();
        if (i.isZero()) l = 0, c = t.ZERO;
        else {
          var f = o.replace(/0+$/, "");
          l = f.length, c = (0, t.ToNumber)(f)
        }
        return {
          Number: n,
          IntegerDigits: s.toNumber(),
          NumberOfFractionDigits: u,
          NumberOfFractionDigitsWithoutTrailing: l,
          FractionDigits: i.toNumber(),
          FractionDigitsWithoutTrailing: c.toNumber()
        }
      };
      var t = r(7937)
    },
    55949: (e, n) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = function(e) {
        var n = r.get(e);
        return n || (n = Object.create(null), r.set(e, n)), n
      };
      var r = new WeakMap
    },
    77146: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t = r(39355);
      Object.defineProperty(Intl, "PluralRules", {
        value: t.PluralRules,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    94205: (e, n, r) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.InitializePluralRules = function(e, n, r, u) {
        var a = u.availableLocales,
          o = u.relevantExtensionKeys,
          l = u.localeData,
          c = u.getDefaultLocale,
          s = u.getInternalSlots,
          f = (0, t.CanonicalizeLocaleList)(n),
          m = Object.create(null),
          g = (0, t.CoerceOptionsToObject)(r),
          d = s(e);
        d.initializedPluralRules = !0;
        var p = (0, t.GetOption)(g, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        m.localeMatcher = p;
        var y = (0, i.ResolveLocale)(a, f, m, o, l, c);
        return d.locale = y.locale, d.type = (0, t.GetOption)(g, "type", "string", ["cardinal", "ordinal"], "cardinal"), (0, t.SetNumberFormatDigitOptions)(d, g, 0, 3, "standard"), e
      };
      var t = r(7937),
        i = r(50551)
    }
  }
]);