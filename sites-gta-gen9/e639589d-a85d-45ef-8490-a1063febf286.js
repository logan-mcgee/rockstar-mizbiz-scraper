try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e639589d-a85d-45ef-8490-a1063febf286", e._sentryDebugIdIdentifier = "sentry-dbid-e639589d-a85d-45ef-8490-a1063febf286")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8391], {
    3659: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SingularRelativeTimeUnit = function(e) {
        if ((0, r.invariant)("String" === (0, r.Type)(e), "unit must be a string"), "seconds" === e) return "second";
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
      var r = a(20114)
    },
    7134: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(91299),
        n = a(20114),
        o = a(29213),
        l = a(75082),
        i = r.__importDefault(a(9438)),
        s = function() {
          function e(t, a) {
            if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");
            return (0, o.InitializeRelativeTimeFormat)(this, t, a, {
              getInternalSlots: i.default,
              availableLocales: e.availableLocales,
              relevantExtensionKeys: e.relevantExtensionKeys,
              localeData: e.localeData,
              getDefaultLocale: e.getDefaultLocale
            })
          }
          return e.prototype.format = function(e, t) {
            if ("object" != typeof this) throw new TypeError("format was called on a non-object");
            if (!(0, i.default)(this).initializedRelativeTimeFormat) throw new TypeError("format was called on a invalid context");
            return (0, l.PartitionRelativeTimePattern)(this, Number(e), (0, n.ToString)(t), {
              getInternalSlots: i.default
            }).map((function(e) {
              return e.value
            })).join("")
          }, e.prototype.formatToParts = function(e, t) {
            if ("object" != typeof this) throw new TypeError("formatToParts was called on a non-object");
            if (!(0, i.default)(this).initializedRelativeTimeFormat) throw new TypeError("formatToParts was called on a invalid context");
            return (0, l.PartitionRelativeTimePattern)(this, Number(e), (0, n.ToString)(t), {
              getInternalSlots: i.default
            })
          }, e.prototype.resolvedOptions = function() {
            if ("object" != typeof this) throw new TypeError("resolvedOptions was called on a non-object");
            var e = (0, i.default)(this);
            if (!e.initializedRelativeTimeFormat) throw new TypeError("resolvedOptions was called on a invalid context");
            return {
              locale: e.locale,
              style: e.style,
              numeric: e.numeric,
              numberingSystem: e.numberingSystem
            }
          }, e.supportedLocalesOf = function(t, a) {
            return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(t), a)
          }, e.__addLocaleData = function() {
            for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
            for (var r = 0, n = t; r < n.length; r++) {
              var o = n[r],
                l = o.data,
                i = o.locale,
                s = new Intl.Locale(i).minimize().toString();
              e.localeData[i] = e.localeData[s] = l, e.availableLocales.add(s), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = s)
            }
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = ["nu"], e.polyfilled = !0, e
        }();
      t.default = s;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.RelativeTimeFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    9438: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = a.get(e);
        return t || (t = Object.create(null), a.set(e, t)), t
      };
      var a = new WeakMap
    },
    29213: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializeRelativeTimeFormat = function(e, t, a, l) {
        var i = l.getInternalSlots,
          s = l.availableLocales,
          u = l.relevantExtensionKeys,
          f = l.localeData,
          c = l.getDefaultLocale,
          d = i(e);
        d.initializedRelativeTimeFormat = !0;
        var y = (0, r.CanonicalizeLocaleList)(t),
          p = Object.create(null),
          v = (0, r.CoerceOptionsToObject)(a),
          m = (0, r.GetOption)(v, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        p.localeMatcher = m;
        var b = (0, r.GetOption)(v, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== b && !o.test(b)) throw new RangeError("Invalid numbering system ".concat(b));
        p.nu = b;
        var g = (0, n.ResolveLocale)(s, y, p, u, f, c),
          w = g.locale,
          h = g.nu;
        d.locale = w, d.style = (0, r.GetOption)(v, "style", "string", ["long", "narrow", "short"], "long"), d.numeric = (0, r.GetOption)(v, "numeric", "string", ["always", "auto"], "always");
        var _ = f[g.dataLocale];
        return (0, r.invariant)(!!_, "Missing locale data for ".concat(g.dataLocale)), d.fields = _, d.numberFormat = (0, r.createMemoizedNumberFormat)(t), d.pluralRules = (0, r.createMemoizedPluralRules)(t), d.numberingSystem = h, e
      };
      var r = a(20114),
        n = a(39368),
        o = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
    },
    65869: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(91299).__importDefault(a(7134));
      Object.defineProperty(Intl, "RelativeTimeFormat", {
        value: r.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    75082: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PartitionRelativeTimePattern = function(e, t, a, l) {
        var i = l.getInternalSlots;
        if ((0, r.invariant)("Number" === (0, r.Type)(t), "value must be number, instead got ".concat(typeof t), TypeError), (0, r.invariant)("String" === (0, r.Type)(a), "unit must be number, instead got ".concat(typeof t), TypeError), isNaN(t) || !isFinite(t)) throw new RangeError("Invalid value ".concat(t));
        var s = (0, n.SingularRelativeTimeUnit)(a),
          u = i(e),
          f = u.fields,
          c = u.style,
          d = u.numeric,
          y = u.pluralRules,
          p = u.numberFormat,
          v = s;
        "short" === c ? v = "".concat(s, "-short") : "narrow" === c && (v = "".concat(s, "-narrow")), v in f || (v = s);
        var m = f[v];
        if ("auto" === d && (0, r.ToString)(t) in m) return [{
          type: "literal",
          value: m[(0, r.ToString)(t)]
        }];
        var b = "future";
        ((0, r.SameValue)(t, -0) || t < 0) && (b = "past");
        var g = m[b],
          w = "function" == typeof p.formatToParts ? p.formatToParts(Math.abs(t)) : [{
            type: "literal",
            value: p.format(Math.abs(t)),
            unit: a
          }],
          h = g[y.select(t)];
        return (0, o.MakePartsList)(h, s, w)
      };
      var r = a(20114),
        n = a(3659),
        o = a(79101)
    },
    79101: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MakePartsList = function(e, t, a) {
        for (var n = [], o = 0, l = (0, r.PartitionPattern)(e); o < l.length; o++) {
          var i = l[o];
          if ("literal" === i.type) n.push({
            type: "literal",
            value: i.value
          });
          else {
            (0, r.invariant)("0" === i.type, "Malformed pattern ".concat(e));
            for (var s = 0, u = a; s < u.length; s++) {
              var f = u[s];
              n.push({
                type: f.type,
                value: f.value,
                unit: t
              })
            }
          }
        }
        return n
      };
      var r = a(20114)
    }
  }
]);