! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "34020a0f-e1dc-4557-a88a-667d757ba7e1", e._sentryDebugIdIdentifier = "sentry-dbid-34020a0f-e1dc-4557-a88a-667d757ba7e1")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [314], {
    1051: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.InitializePluralRules = function(e, a, t, n) {
        var o = n.availableLocales,
          i = n.relevantExtensionKeys,
          u = n.localeData,
          s = n.getDefaultLocale,
          c = n.getInternalSlots,
          d = (0, l.CanonicalizeLocaleList)(a),
          f = Object.create(null),
          b = (0, l.CoerceOptionsToObject)(t),
          g = c(e);
        g.initializedPluralRules = !0;
        var p = (0, l.GetOption)(b, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        f.localeMatcher = p;
        var y = (0, r.ResolveLocale)(o, d, f, i, u, s);
        return g.locale = y.locale, g.type = (0, l.GetOption)(b, "type", "string", ["cardinal", "ordinal"], "cardinal"), (0, l.SetNumberFormatDigitOptions)(g, b, 0, 3, "standard"), e
      };
      var l = t(4480),
        r = t(7353)
    },
    1233: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.PluralRules = void 0;
      var l = t(3514),
        r = t(4480),
        n = t(1051),
        o = t(7930),
        i = l.__importDefault(t(4495));

      function u(e, a) {
        if (!(e instanceof c)) throw new TypeError("Method Intl.PluralRules.prototype.".concat(a, " called on incompatible receiver ").concat(String(e)))
      }

      function s(e, a, t, l) {
        var r = l.IntegerDigits,
          n = l.NumberOfFractionDigits,
          o = l.FractionDigits;
        return c.localeData[e].fn(n ? "".concat(r, ".").concat(o) : r, "ordinal" === a)
      }
      var c = function() {
        function e(a, t) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.PluralRules must be called with 'new'");
          return (0, n.InitializePluralRules)(this, a, t, {
            availableLocales: e.availableLocales,
            relevantExtensionKeys: e.relevantExtensionKeys,
            localeData: e.localeData,
            getDefaultLocale: e.getDefaultLocale,
            getInternalSlots: i.default
          })
        }
        return e.prototype.resolvedOptions = function() {
          u(this, "resolvedOptions");
          var a = Object.create(null),
            t = (0, i.default)(this);
          return a.locale = t.locale, a.type = t.type, ["minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"].forEach((function(e) {
            var l = t[e];
            void 0 !== l && (a[e] = l)
          })), a.pluralCategories = l.__spreadArray([], e.localeData[a.locale].categories[a.type], !0), a
        }, e.prototype.select = function(e) {
          u(this, "select");
          var a = (0, r.ToNumber)(e);
          return (0, o.ResolvePlural)(this, a, {
            getInternalSlots: i.default,
            PluralRuleSelect: s
          })
        }, e.prototype.toString = function() {
          return "[object Intl.PluralRules]"
        }, e.supportedLocalesOf = function(a, t) {
          return (0, r.SupportedLocales)(e.availableLocales, (0, r.CanonicalizeLocaleList)(a), t)
        }, e.__addLocaleData = function() {
          for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
          for (var l = 0, r = a; l < r.length; l++) {
            var n = r[l],
              o = n.data,
              i = n.locale;
            e.localeData[i] = o, e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = i)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e
      }();
      a.PluralRules = c;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(c.prototype, Symbol.toStringTag, {
          value: "Intl.PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        });
        try {
          Object.defineProperty(c, "length", {
            value: 0,
            writable: !1,
            enumerable: !1,
            configurable: !0
          })
        } catch (e) {}
        Object.defineProperty(c.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c, "name", {
          value: "PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    4495: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = function(e) {
        var a = t.get(e);
        return a || (a = Object.create(null), t.set(e, a)), a
      };
      var t = new WeakMap
    },
    5066: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.GetOperands = function(e) {
        (0, l.invariant)("string" == typeof e, "GetOperands should have been called with a string");
        var a = (0, l.ToNumber)(e);
        (0, l.invariant)(a.isFinite(), "n should be finite");
        var t, r, n, o = e.indexOf("."),
          i = ""; - 1 === o ? (t = a, r = l.ZERO, n = 0) : (t = e.slice(0, o), i = e.slice(o, e.length), r = (0, l.ToNumber)(i), n = i.length);
        var u, s, c = (0, l.ToNumber)(t).abs();
        if (r.isZero()) u = 0, s = l.ZERO;
        else {
          var d = i.replace(/0+$/, "");
          u = d.length, s = (0, l.ToNumber)(d)
        }
        return {
          Number: a,
          IntegerDigits: c.toNumber(),
          NumberOfFractionDigits: n,
          NumberOfFractionDigitsWithoutTrailing: u,
          FractionDigits: r.toNumber(),
          FractionDigitsWithoutTrailing: s.toNumber()
        }
      };
      var l = t(4480)
    },
    6288: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(1233);
      Object.defineProperty(Intl, "PluralRules", {
        value: l.PluralRules,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    7930: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.ResolvePlural = function(e, a, t) {
        var n = t.getInternalSlots,
          o = t.PluralRuleSelect,
          i = n(e);
        if ((0, l.invariant)("Object" === (0, l.Type)(i), "pl has to be an object"), (0, l.invariant)("initializedPluralRules" in i, "pluralrules must be initialized"), !a.isFinite()) return "other";
        var u = i.locale,
          s = i.type,
          c = (0, l.FormatNumericToString)(i, a).formattedString;
        return o(u, s, a, (0, r.GetOperands)(c))
      };
      var l = t(4480),
        r = t(5066)
    }
  }
]);