! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb0e74a5-1b1e-4b1d-9168-813aeea4c211", e._sentryDebugIdIdentifier = "sentry-dbid-eb0e74a5-1b1e-4b1d-9168-813aeea4c211")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [8970], {
    75109: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(23514),
        n = a(64480),
        o = a(27353);

      function r(e, t) {
        if (!(e instanceof d)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function i(e) {
        if (void 0 === e) return [];
        for (var t = [], a = 0, l = e; a < l.length; a++) {
          var n = l[a];
          if ("string" != typeof n) throw new TypeError("array list[".concat(e.indexOf(n), "] is not type String"));
          t.push(n)
        }
        return t
      }

      function s(e, t, a) {
        var l = a.length;
        if (0 === l) return [];
        if (2 === l) return _((0, n.getInternalSlot)(e, t, "templatePair"), {
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
          }, r = l - 2; r >= 0;) o = _(0 === r ? (0, n.getInternalSlot)(e, t, "templateStart") : r < l - 2 ? (0, n.getInternalSlot)(e, t, "templateMiddle") : (0, n.getInternalSlot)(e, t, "templateEnd"), {
          0: {
            type: "element",
            value: a[r]
          },
          1: o
        }), r--;
        return o
      }

      function _(e, t) {
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
      var d = function() {
        function e(t, a) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.ListFormat must be called with 'new'");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", !0);
          var l = (0, n.CanonicalizeLocaleList)(t),
            r = Object.create(null),
            i = (0, n.GetOptionsObject)(a),
            s = (0, n.GetOption)(i, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
          r.localeMatcher = s;
          var _ = e.localeData,
            d = (0, o.ResolveLocale)(e.availableLocales, l, r, e.relevantExtensionKeys, _, e.getDefaultLocale);
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale", d.locale);
          var c = (0, n.GetOption)(i, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type", c);
          var u = (0, n.GetOption)(i, "style", "string", ["long", "short", "narrow"], "long");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style", u);
          var f = d.dataLocale,
            p = _[f];
          (0, n.invariant)(!!p, "Missing locale data for ".concat(f));
          var y = p[c][u];
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
          for (var n = [], o = 0, _ = a; o < _.length; o++) {
            var d = _[o];
            n.push(l.__assign({}, d))
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
      t.default = d;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(d.prototype, Symbol.toStringTag, {
          value: "Intl.ListFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(d.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(d.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    78204: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(23514).__importDefault(a(75109));
      Object.defineProperty(Intl, "ListFormat", {
        value: l.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    }
  }
]);