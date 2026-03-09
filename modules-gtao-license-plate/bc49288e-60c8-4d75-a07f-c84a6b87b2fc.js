try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bc49288e-60c8-4d75-a07f-c84a6b87b2fc", e._sentryDebugIdIdentifier = "sentry-dbid-bc49288e-60c8-4d75-a07f-c84a6b87b2fc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [8970], {
    28423: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(78322).__importDefault(a(33688));
      Object.defineProperty(Intl, "ListFormat", {
        value: l.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    33688: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(78322),
        n = a(62306),
        o = a(74578);

      function r(e, t) {
        if (!(e instanceof _)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function i(e) {
        if ("object" != typeof e) return [];
        for (var t, a = [], l = e[Symbol.iterator](); !(t = l.next()).done;) {
          if ("string" != typeof t.value) {
            var n = t.value;
            throw new TypeError("Iterable yielded ".concat(n, " which is not a string"))
          }
          a.push(t.value)
        }
        return a
      }

      function s(e, t, a) {
        var l = a.length;
        if (0 === l) return [];
        if (2 === l) return c((0, n.getInternalSlot)(e, t, "templatePair"), {
          0: {
            type: "element",
            value: a[0]
          },
          1: {
            type: "element",
            value: a[1]
          }
        });
        for (var o = {
            type: "element",
            value: a[l - 1]
          }, r = l - 2; r >= 0;) o = c(0 === r ? (0, n.getInternalSlot)(e, t, "templateStart") : r < l - 2 ? (0, n.getInternalSlot)(e, t, "templateMiddle") : (0, n.getInternalSlot)(e, t, "templateEnd"), {
          0: {
            type: "element",
            value: a[r]
          },
          1: o
        }), r--;
        return o
      }

      function c(e, t) {
        for (var a = [], l = 0, o = (0, n.PartitionPattern)(e); l < o.length; l++) {
          var r = o[l],
            i = r.type;
          if ((0, n.isLiteralPart)(r)) a.push({
            type: "literal",
            value: r.value
          });
          else {
            (0, n.invariant)(i in t, "".concat(i, " is missing from placables"));
            var s = t[i];
            Array.isArray(s) ? a.push.apply(a, s) : a.push(s)
          }
        }
        return a
      }
      var _ = function() {
        function e(t, a) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.ListFormat must be called with 'new'");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", !0);
          var l = (0, n.CanonicalizeLocaleList)(t),
            r = Object.create(null),
            i = (0, n.GetOptionsObject)(a),
            s = (0, n.GetOption)(i, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
          r.localeMatcher = s;
          var c = e.localeData,
            _ = (0, o.ResolveLocale)(e.availableLocales, l, r, e.relevantExtensionKeys, c, e.getDefaultLocale);
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale", _.locale);
          var f = (0, n.GetOption)(i, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type", f);
          var d = (0, n.GetOption)(i, "style", "string", ["long", "short", "narrow"], "long");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style", d);
          var u = _.dataLocale,
            p = c[u];
          (0, n.invariant)(!!p, "Missing locale data for ".concat(u));
          var y = p[f][d];
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templatePair", y.pair), (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateStart", y.start), (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateMiddle", y.middle), (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateEnd", y.end)
        }
        return e.prototype.format = function(t) {
          r(this, "format");
          var a = "",
            l = s(e.__INTERNAL_SLOT_MAP__, this, i(t));
          if (!Array.isArray(l)) return l.value;
          for (var n = 0, o = l; n < o.length; n++) a += o[n].value;
          return a
        }, e.prototype.formatToParts = function(t) {
          r(this, "format");
          var a = s(e.__INTERNAL_SLOT_MAP__, this, i(t));
          if (!Array.isArray(a)) return [a];
          for (var n = [], o = 0, c = a; o < c.length; o++) {
            var _ = c[o];
            n.push(l.__assign({}, _))
          }
          return n
        }, e.prototype.resolvedOptions = function() {
          return r(this, "resolvedOptions"), {
            locale: (0, n.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale"),
            type: (0, n.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type"),
            style: (0, n.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style")
          }
        }, e.supportedLocalesOf = function(t, a) {
          return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(t), a)
        }, e.__addLocaleData = function() {
          for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
          for (var l = 0, n = t; l < n.length; l++) {
            var o = n[l],
              r = o.data,
              i = o.locale,
              s = new Intl.Locale(i).minimize().toString();
            e.localeData[i] = e.localeData[s] = r, e.availableLocales.add(s), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = s)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e.__INTERNAL_SLOT_MAP__ = new WeakMap, e
      }();
      t.default = _;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(_.prototype, Symbol.toStringTag, {
          value: "Intl.ListFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    }
  }
]);