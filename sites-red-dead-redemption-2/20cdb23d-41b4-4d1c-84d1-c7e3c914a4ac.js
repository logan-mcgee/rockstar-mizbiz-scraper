try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "20cdb23d-41b4-4d1c-84d1-c7e3c914a4ac", e._sentryDebugIdIdentifier = "sentry-dbid-20cdb23d-41b4-4d1c-84d1-c7e3c914a4ac")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8391], {
    6999: (e, t, a) => {
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
      var r = a(64480)
    },
    51586: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(23514),
        n = a(64480),
        o = a(99265),
        i = a(80030),
        l = r.__importDefault(a(84170)),
        s = function() {
          function e(t, a) {
            if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");
            return (0, o.InitializeRelativeTimeFormat)(this, t, a, {
              getInternalSlots: l.default,
              availableLocales: e.availableLocales,
              relevantExtensionKeys: e.relevantExtensionKeys,
              localeData: e.localeData,
              getDefaultLocale: e.getDefaultLocale
            })
          }
          return e.prototype.format = function(e, t) {
            if ("object" != typeof this) throw new TypeError("format was called on a non-object");
            if (!(0, l.default)(this).initializedRelativeTimeFormat) throw new TypeError("format was called on a invalid context");
            return (0, i.PartitionRelativeTimePattern)(this, Number(e), (0, n.ToString)(t), {
              getInternalSlots: l.default
            }).map((function(e) {
              return e.value
            })).join("")
          }, e.prototype.formatToParts = function(e, t) {
            if ("object" != typeof this) throw new TypeError("formatToParts was called on a non-object");
            if (!(0, l.default)(this).initializedRelativeTimeFormat) throw new TypeError("formatToParts was called on a invalid context");
            return (0, i.PartitionRelativeTimePattern)(this, Number(e), (0, n.ToString)(t), {
              getInternalSlots: l.default
            })
          }, e.prototype.resolvedOptions = function() {
            if ("object" != typeof this) throw new TypeError("resolvedOptions was called on a non-object");
            var e = (0, l.default)(this);
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
                i = o.data,
                l = o.locale,
                s = new Intl.Locale(l).minimize().toString();
              e.localeData[l] = e.localeData[s] = i, e.availableLocales.add(s), e.availableLocales.add(l), e.__defaultLocale || (e.__defaultLocale = s)
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
    62137: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(23514).__importDefault(a(51586));
      Object.defineProperty(Intl, "RelativeTimeFormat", {
        value: r.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    80030: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PartitionRelativeTimePattern = function(e, t, a, i) {
        var l = i.getInternalSlots;
        if ((0, r.invariant)("Number" === (0, r.Type)(t), "value must be number, instead got ".concat(typeof t), TypeError), (0, r.invariant)("String" === (0, r.Type)(a), "unit must be number, instead got ".concat(typeof t), TypeError), isNaN(t) || !isFinite(t)) throw new RangeError("Invalid value ".concat(t));
        var s = (0, n.SingularRelativeTimeUnit)(a),
          u = l(e),
          c = u.fields,
          d = u.style,
          f = u.numeric,
          p = u.pluralRules,
          b = u.numberFormat,
          y = s;
        "short" === d ? y = "".concat(s, "-short") : "narrow" === d && (y = "".concat(s, "-narrow")), y in c || (y = s);
        var m = c[y];
        if ("auto" === f && (0, r.ToString)(t) in m) return [{
          type: "literal",
          value: m[(0, r.ToString)(t)]
        }];
        var v = "future";
        ((0, r.SameValue)(t, -0) || t < 0) && (v = "past");
        var g = m[v],
          w = "function" == typeof b.formatToParts ? b.formatToParts(Math.abs(t)) : [{
            type: "literal",
            value: b.format(Math.abs(t)),
            unit: a
          }],
          h = g[p.select(t)];
        return (0, o.MakePartsList)(h, s, w)
      };
      var r = a(64480),
        n = a(6999),
        o = a(96209)
    },
    84170: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = a.get(e);
        return t || (t = Object.create(null), a.set(e, t)), t
      };
      var a = new WeakMap
    },
    96209: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MakePartsList = function(e, t, a) {
        for (var n = [], o = 0, i = (0, r.PartitionPattern)(e); o < i.length; o++) {
          var l = i[o];
          if ("literal" === l.type) n.push({
            type: "literal",
            value: l.value
          });
          else {
            (0, r.invariant)("0" === l.type, "Malformed pattern ".concat(e));
            for (var s = 0, u = a; s < u.length; s++) {
              var c = u[s];
              n.push({
                type: c.type,
                value: c.value,
                unit: t
              })
            }
          }
        }
        return n
      };
      var r = a(64480)
    },
    99265: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializeRelativeTimeFormat = function(e, t, a, i) {
        var l = i.getInternalSlots,
          s = i.availableLocales,
          u = i.relevantExtensionKeys,
          c = i.localeData,
          d = i.getDefaultLocale,
          f = l(e);
        f.initializedRelativeTimeFormat = !0;
        var p = (0, r.CanonicalizeLocaleList)(t),
          b = Object.create(null),
          y = (0, r.CoerceOptionsToObject)(a),
          m = (0, r.GetOption)(y, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        b.localeMatcher = m;
        var v = (0, r.GetOption)(y, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== v && !o.test(v)) throw new RangeError("Invalid numbering system ".concat(v));
        b.nu = v;
        var g = (0, n.ResolveLocale)(s, p, b, u, c, d),
          w = g.locale,
          h = g.nu;
        f.locale = w, f.style = (0, r.GetOption)(y, "style", "string", ["long", "narrow", "short"], "long"), f.numeric = (0, r.GetOption)(y, "numeric", "string", ["always", "auto"], "always");
        var _ = c[g.dataLocale];
        return (0, r.invariant)(!!_, "Missing locale data for ".concat(g.dataLocale)), f.fields = _, f.numberFormat = (0, r.createMemoizedNumberFormat)(t), f.pluralRules = (0, r.createMemoizedPluralRules)(t), f.numberingSystem = h, e
      };
      var r = a(64480),
        n = a(27353),
        o = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
    }
  }
]);