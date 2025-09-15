try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b61b9727-87bf-40b1-9ced-d694e1838aa7", e._sentryDebugIdIdentifier = "sentry-dbid-b61b9727-87bf-40b1-9ced-d694e1838aa7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [907], {
    33641: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.currencyDigitsData = void 0, a.currencyDigitsData = {
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
    39990: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = function(e) {
        var a = t.get(e);
        return a || (a = Object.create(null), t.set(e, a)), a
      };
      var t = new WeakMap
    },
    72694: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var r = t(90827),
        o = t(91248),
        n = t(62306);
      (0, n.defineProperty)(Intl, "NumberFormat", {
        value: r.NumberFormat
      }), (0, n.defineProperty)(Number.prototype, "toLocaleString", {
        value: function(e, a) {
          return (0, o.toLocaleString)(this, e, a)
        }
      })
    },
    76257: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.numberingSystemNames = void 0, a.numberingSystemNames = ["adlm", "ahom", "arab", "arabext", "armn", "armnlow", "bali", "beng", "bhks", "brah", "cakm", "cham", "cyrl", "deva", "diak", "ethi", "fullwide", "gara", "geor", "gong", "gonm", "grek", "greklow", "gujr", "gukh", "guru", "hanidays", "hanidec", "hans", "hansfin", "hant", "hantfin", "hebr", "hmng", "hmnp", "java", "jpan", "jpanfin", "jpanyear", "kali", "kawi", "khmr", "knda", "krai", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrepka", "mymrpao", "mymrshan", "mymrtlng", "nagm", "newa", "nkoo", "olck", "onao", "orya", "osma", "outlined", "rohg", "roman", "romanlow", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "sunu", "takr", "talu", "taml", "tamldec", "telu", "thai", "tibt", "tirh", "tnsa", "vaii", "wara", "wcho"]
    },
    90827: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.NumberFormat = void 0;
      var r = t(78322),
        o = t(62306),
        n = t(33641),
        i = t(76257),
        l = r.__importDefault(t(39990)),
        m = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "currencySign", "unit", "unitDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping", "notation", "compactDisplay", "signDisplay"];

      function u(e) {
        return (0, o.FormatNumericToParts)(this, (0, o.ToIntlMathematicalValue)(e), {
          getInternalSlots: l.default
        })
      }
      a.NumberFormat = function(e, t) {
        if (!this || !(0, o.OrdinaryHasInstance)(a.NumberFormat, this)) return new a.NumberFormat(e, t);
        (0, o.InitializeNumberFormat)(this, e, t, {
          getInternalSlots: l.default,
          localeData: a.NumberFormat.localeData,
          availableLocales: a.NumberFormat.availableLocales,
          getDefaultLocale: a.NumberFormat.getDefaultLocale,
          currencyDigitsData: n.currencyDigitsData,
          numberingSystemNames: i.numberingSystemNames
        });
        var r = (0, l.default)(this),
          m = r.dataLocale,
          u = a.NumberFormat.localeData[m];
        return (0, o.invariant)(void 0 !== u, "Cannot load locale-dependent data for ".concat(m, ".")), r.pl = (0, o.createMemoizedPluralRules)(m, {
          minimumFractionDigits: r.minimumFractionDigits,
          maximumFractionDigits: r.maximumFractionDigits,
          minimumIntegerDigits: r.minimumIntegerDigits,
          minimumSignificantDigits: r.minimumSignificantDigits,
          maximumSignificantDigits: r.maximumSignificantDigits
        }), this
      };
      try {
        Object.defineProperty(u, "name", {
          value: "formatToParts",
          enumerable: !1,
          writable: !1,
          configurable: !0
        })
      } catch (e) {}(0, o.defineProperty)(a.NumberFormat.prototype, "formatToParts", {
        value: u
      }), (0, o.defineProperty)(a.NumberFormat.prototype, "formatRange", {
        value: function(e, a) {
          return (0, o.FormatNumericRange)(this, (0, o.ToIntlMathematicalValue)(e), (0, o.ToIntlMathematicalValue)(a), {
            getInternalSlots: l.default
          })
        }
      }), (0, o.defineProperty)(a.NumberFormat.prototype, "formatRangeToParts", {
        value: function(e, a) {
          return (0, o.FormatNumericRangeToParts)(this, (0, o.ToIntlMathematicalValue)(e), (0, o.ToIntlMathematicalValue)(a), {
            getInternalSlots: l.default
          })
        }
      }), (0, o.defineProperty)(a.NumberFormat.prototype, "resolvedOptions", {
        value: function() {
          if ("object" != typeof this || !(0, o.OrdinaryHasInstance)(a.NumberFormat, this)) throw TypeError("Method Intl.NumberFormat.prototype.resolvedOptions called on incompatible receiver");
          for (var e = (0, l.default)(this), t = {}, r = 0, n = m; r < n.length; r++) {
            var i = n[r],
              u = e[i];
            void 0 !== u && (t[i] = u)
          }
          return "morePrecision" === e.roundingType ? t.roundingPriority = "morePrecision" : "lessPrecision" === e.roundingType ? t.roundingPriority = "lessPrecision" : t.roundingPriority = "auto", t
        }
      });
      var d = {
        enumerable: !1,
        configurable: !0,
        get: function() {
          if ("object" != typeof this || !(0, o.OrdinaryHasInstance)(a.NumberFormat, this)) throw TypeError("Intl.NumberFormat format property accessor called on incompatible receiver");
          var e = (0, l.default)(this),
            t = e.boundFormat;
          if (void 0 === t) {
            t = function(a) {
              return (0, o.FormatNumeric)(e, (0, o.ToIntlMathematicalValue)(a))
            };
            try {
              Object.defineProperty(t, "name", {
                configurable: !0,
                enumerable: !1,
                writable: !1,
                value: ""
              })
            } catch (e) {}
            e.boundFormat = t
          }
          return t
        }
      };
      try {
        Object.defineProperty(d.get, "name", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: "get format"
        })
      } catch (e) {}
      Object.defineProperty(a.NumberFormat.prototype, "format", d), (0, o.defineProperty)(a.NumberFormat, "supportedLocalesOf", {
        value: function(e, t) {
          return (0, o.SupportedLocales)(a.NumberFormat.availableLocales, (0, o.CanonicalizeLocaleList)(e), t)
        }
      }), a.NumberFormat.__addLocaleData = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var r = 0, o = e; r < o.length; r++) {
          var n = o[r],
            i = n.data,
            l = n.locale,
            m = new Intl.Locale(l).minimize().toString();
          a.NumberFormat.localeData[l] = a.NumberFormat.localeData[m] = i, a.NumberFormat.availableLocales.add(m), a.NumberFormat.availableLocales.add(l), a.NumberFormat.__defaultLocale || (a.NumberFormat.__defaultLocale = m)
        }
      }, a.NumberFormat.__addUnitData = function(e, t) {
        var r = a.NumberFormat.localeData[e];
        if (!r) throw new Error('Locale data for "'.concat(e, '" has not been loaded in NumberFormat. \nPlease __addLocaleData before adding additional unit data'));
        for (var o in t.simple) r.units.simple[o] = t.simple[o];
        for (var o in t.compound) r.units.compound[o] = t.compound[o]
      }, a.NumberFormat.__defaultLocale = "", a.NumberFormat.localeData = {}, a.NumberFormat.availableLocales = new Set, a.NumberFormat.getDefaultLocale = function() {
        return a.NumberFormat.__defaultLocale
      }, a.NumberFormat.polyfilled = !0;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(a.NumberFormat.prototype, Symbol.toStringTag, {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: "Intl.NumberFormat"
        }), Object.defineProperty(a.NumberFormat.prototype.constructor, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: 0
        }), Object.defineProperty(a.NumberFormat.supportedLocalesOf, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: 1
        }), Object.defineProperty(a.NumberFormat, "prototype", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a.NumberFormat.prototype
        })
      } catch (e) {}
    },
    91248: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.toLocaleString = function(e, a, t) {
        return new r.NumberFormat(a, t).format(e)
      };
      var r = t(90827)
    }
  }
]);