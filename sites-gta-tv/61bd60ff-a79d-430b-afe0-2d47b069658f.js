try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "61bd60ff-a79d-430b-afe0-2d47b069658f", e._sentryDebugIdIdentifier = "sentry-dbid-61bd60ff-a79d-430b-afe0-2d47b069658f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [3343], {
    5771: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.CanonicalCodeForDisplayNames = function(e, a) {
        if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !r.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, s;
        if ("script" === e) {
          if (s = a, !i.test(s)) throw RangeError("invalid script");
          return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return o.test(e)
            }(a)) throw RangeError("invalid calendar");
          return a.toLowerCase()
        }
        if ("dateTimeField" === e) {
          if (!(0, n.IsValidDateTimeFieldCode)(a)) throw RangeError("invalid dateTimeField");
          return a
        }
        if ((0, l.invariant)("currency" === e, "invalid type"), !(0, l.IsWellFormedCurrencyCode)(a)) throw RangeError("invalid currency");
        return a.toUpperCase()
      };
      var l = t(4480),
        n = t(8939),
        r = /^([a-z]{2}|[0-9]{3})$/i,
        i = /^[a-z]{4}$/i,
        o = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    7056: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var l = t(3514),
        n = t(4480),
        r = t(5771),
        i = t(8939),
        o = t(7353),
        s = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var l = (0, n.CanonicalizeLocaleList)(a);
            t = (0, n.GetOptionsObject)(t);
            var r = Object.create(null),
              i = e.localeData,
              s = (0, n.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            r.localeMatcher = s;
            var d = (0, o.ResolveLocale)(Array.from(e.availableLocales), l, r, [], e.localeData, e.getDefaultLocale),
              c = (0, n.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            f(this, "style", c);
            var u = (0, n.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === u) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            f(this, "type", u), f(this, "fallback", (0, n.GetOption)(t, "fallback", "string", ["code", "none"], "code")), f(this, "locale", d.locale);
            var p = d.dataLocale,
              g = i[p];
            (0, n.invariant)(!!g, "Missing locale data for ".concat(p)), f(this, "localeData", g), (0, n.invariant)(void 0 !== g, "locale data for ".concat(d.locale, " does not exist."));
            var y = g.types;
            (0, n.invariant)("object" == typeof y && null != y, "invalid types data");
            var b = y[u];
            (0, n.invariant)("object" == typeof b && null != b, "invalid typeFields data");
            var v = (0, n.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === u) {
              f(this, "languageDisplay", v);
              var h = y[u][v];
              (0, n.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var w = "language" === u ? y[u][v][c] : y[u][c];
            (0, n.invariant)("object" == typeof w && null != w, "invalid styleFields data"), f(this, "fields", w)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var l = 0, n = a; l < n.length; l++) {
              var r = n[l],
                i = r.data,
                o = r.locale,
                s = new Intl.Locale(o).minimize().toString();
              e.localeData[o] = e.localeData[s] = i, e.availableLocales.add(s), e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = s)
            }
          }, e.prototype.of = function(e) {
            u(this, "of");
            var a = c(this, "type"),
              t = (0, n.ToString)(e);
            if (! function(e, a) {
                switch (e) {
                  case "language":
                    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);
                  case "region":
                    return /^([a-z]{2}|\d{3})$/i.test(a);
                  case "script":
                    return /^[a-z]{4}$/i.test(a);
                  case "currency":
                    return (0, n.IsWellFormedCurrencyCode)(a);
                  case "calendar":
                    return /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);
                  case "dateTimeField":
                    return (0, i.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var l, o = (0, n.getMultiInternalSlots)(d, this, "localeData", "style", "fallback"),
              s = o.localeData,
              f = o.style,
              p = o.fallback,
              g = (0, r.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) l = function(e, a, t, l, n) {
              var r = a.types.language[e],
                i = r[t][l] || r.long[l];
              if (void 0 !== i) return i;
              var o = /-([a-z]{2}|\d{3})\b/i.exec(l);
              if (o) {
                var s = l.substring(0, o.index) + l.substring(o.index + o[0].length),
                  d = o[1],
                  c = r[t][s] || r.long[s];
                if (void 0 === c || !d) return c;
                var f = a.types.region,
                  u = f[t][d] || f.long[d];
                if (u || "code" === n) return a.patterns.locale.replace("{0}", c).replace("{1}", u || d)
              }
            }(c(this, "languageDisplay"), s, f, g, p);
            else {
              var y = s.types[a];
              l = y[f][g] || y.long[g]
            }
            return void 0 !== l ? l : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return u(this, "resolvedOptions"), l.__assign({}, (0, n.getMultiInternalSlots)(d, this, "locale", "style", "type", "fallback", "languageDisplay"))
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
        }();
      a.DisplayNames = s;
      try {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.DisplayNames",
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), Object.defineProperty(s, "length", {
          value: 2,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
      var d = new WeakMap;

      function c(e, a) {
        return (0, n.getInternalSlot)(d, e, a)
      }

      function f(e, a, t) {
        (0, n.setInternalSlot)(d, e, a, t)
      }

      function u(e, a) {
        if (!(e instanceof s)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    },
    8939: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.IsValidDateTimeFieldCode = function(e) {
        return t.indexOf(e) >= 0
      };
      var t = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    },
    9039: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(7056);
      Object.defineProperty(Intl, "DisplayNames", {
        value: l.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    }
  }
]);