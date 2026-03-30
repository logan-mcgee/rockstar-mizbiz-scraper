try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "48e61421-4c7f-4dfd-b9cd-d03eb3336dc7", e._sentryDebugIdIdentifier = "sentry-dbid-48e61421-4c7f-4dfd-b9cd-d03eb3336dc7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2787], {
    9872: (e, t, r) => {
      r.d(t, {
        A: () => c
      });
      var n = r(78322),
        i = r(95758),
        o = r(71127),
        a = r(55165),
        s = r(13031),
        h = r(76535);

      function u(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      const c = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = (0, i.MT)(), t.state = {
            cache: t.cache,
            intl: (0, s.E)(u(t.props), t.cache),
            prevConfig: u(t.props)
          }, t
        }
        return (0, n.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            i = u(e);
          return (0, a.bN)(r, i) ? null : {
            intl: (0, s.E)(i, n),
            prevConfig: i
          }
        }, t.prototype.render = function() {
          return (0, a.HM)(this.state.intl), o.createElement(h.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = a.JF, t
      }(o.PureComponent)
    },
    13031: (e, t, r) => {
      r.d(t, {
        E: () => Ie
      });
      var n, i, o, a, s, h = r(78322);
      (s = n || (n = {}))[s.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", s[s.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", s[s.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", s[s.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", s[s.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", s[s.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", s[s.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", s[s.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", s[s.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", s[s.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", s[s.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", s[s.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", s[s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", s[s.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", s[s.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", s[s.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", s[s.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", s[s.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", s[s.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", s[s.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", s[s.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", s[s.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", s[s.INVALID_TAG = 23] = "INVALID_TAG", s[s.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", s[s.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", s[s.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (a = i || (i = {}))[a.literal = 0] = "literal", a[a.argument = 1] = "argument", a[a.number = 2] = "number", a[a.date = 3] = "date", a[a.time = 4] = "time", a[a.select = 5] = "select", a[a.plural = 6] = "plural", a[a.pound = 7] = "pound", a[a.tag = 8] = "tag",
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(o || (o = {}));
      var u = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        c = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function l(e) {
        var t = {};
        return e.replace(c, function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        }), t
      }
      var f = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function p(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var m = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        g = /^(@+)?(\+|#+)?[rs]?$/g,
        E = /(\*)(0+)|(#+)(0+)|(0+)/g,
        _ = /^(0+)$/;

      function d(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(g, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function b(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function y(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !_.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function v(e) {
        return b(e) || {}
      }

      function T(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var i = n[r];
          switch (i.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = i.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = p(i.options[0]);
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, h.__assign)((0, h.__assign)((0, h.__assign)({}, t), {
                notation: "scientific"
              }), i.options.reduce(function(e, t) {
                return (0, h.__assign)((0, h.__assign)({}, e), v(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, h.__assign)((0, h.__assign)((0, h.__assign)({}, t), {
                notation: "engineering"
              }), i.options.reduce(function(e, t) {
                return (0, h.__assign)((0, h.__assign)({}, e), v(t))
              }, {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(i.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              i.options[0].replace(E, function(e, r, n, i, o, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (i && o) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (_.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
          else if (m.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(m, function(e, r, n, i, o, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && a ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var o = i.options[0];
            "w" === o ? t = (0, h.__assign)((0, h.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = (0, h.__assign)((0, h.__assign)({}, t), d(o)))
          } else if (g.test(i.stem)) t = (0, h.__assign)((0, h.__assign)({}, t), d(i.stem));
          else {
            var a = b(i.stem);
            a && (t = (0, h.__assign)((0, h.__assign)({}, t), a));
            var s = y(i.stem);
            s && (t = (0, h.__assign)((0, h.__assign)({}, t), s))
          }
        }
        return t
      }
      var H, B = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["h", "H", "hB", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["h", "H", "hB", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["h", "H", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["h", "H", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["h", "H", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function A(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (B[r || ""] || B[n || ""] || B["".concat(n, "-001")] || B["001"])[0]
      }
      var P = new RegExp("^".concat(u.source, "*")),
        S = new RegExp("".concat(u.source, "*$"));

      function N(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var I = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        L = !!String.fromCodePoint,
        R = !!Object.fromEntries,
        C = !!String.prototype.codePointAt,
        w = !!String.prototype.trimStart,
        M = !!String.prototype.trimEnd,
        O = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        D = !0;
      try {
        D = "a" === (null === (H = X("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === H ? void 0 : H[0])
      } catch (e) {
        D = !1
      }
      var U, G = I ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        F = L ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", i = e.length, o = 0; i > o;) {
            if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        k = R ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var i = n[r],
              o = i[0],
              a = i[1];
            t[o] = a
          }
          return t
        },
        x = C ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, i = e.charCodeAt(t);
            return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
          }
        },
        j = w ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(P, "")
        },
        V = M ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(S, "")
        };

      function X(e, t) {
        return new RegExp(e, t)
      }
      if (D) {
        var K = X("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        U = function(e, t) {
          var r;
          return K.lastIndex = t, null !== (r = K.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else U = function(e, t) {
        for (var r = [];;) {
          var n = x(e, t);
          if (void 0 === n || W(n) || J(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return F.apply(void 0, r)
      };

      function Y(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Z(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function W(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function J(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }! function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var o = []; !this.isEOF();) {
            var a = this.char();
            if (123 === a) {
              if ((s = this.parseArgument(e, r)).err) return s;
              o.push(s.val)
            } else {
              if (125 === a && e > 0) break;
              if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(n.UNMATCHED_CLOSING_TAG, N(this.clonePosition(), this.clonePosition()))
                }
                if (60 === a && !this.ignoreTag && Y(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  o.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  o.push(s.val)
                }
              } else {
                var h = this.clonePosition();
                this.bump(), o.push({
                  type: i.pound,
                  location: N(h, this.clonePosition())
                })
              }
            }
          }
          return {
            val: o,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var o = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: i.literal,
              value: "<".concat(o, "/>"),
              location: N(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var s = a.val,
              h = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Y(this.char())) return this.error(n.INVALID_TAG, N(h, this.clonePosition()));
              var u = this.clonePosition();
              return o !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, N(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: i.tag,
                  value: o,
                  children: s,
                  location: N(r, this.clonePosition())
                },
                err: null
              } : this.error(n.INVALID_TAG, N(h, this.clonePosition())))
            }
            return this.error(n.UNCLOSED_TAG, N(r, this.clonePosition()))
          }
          return this.error(n.INVALID_TAG, N(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Z(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var h = N(r, this.clonePosition());
          return {
            val: {
              type: i.literal,
              value: n,
              location: h
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Y(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return F.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), F(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, N(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, N(r, this.clonePosition()));
          var o = this.parseIdentifierIfPossible().value;
          if (!o) return this.error(n.MALFORMED_ARGUMENT, N(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, N(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: i.argument,
                  value: o,
                  location: N(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, N(r, this.clonePosition())) : this.parseArgumentOptions(e, t, o, r);
            default:
              return this.error(n.MALFORMED_ARGUMENT, N(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = U(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: N(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, a) {
          var s, u = this.clonePosition(),
            c = this.parseIdentifierIfPossible().value,
            f = this.clonePosition();
          switch (c) {
            case "":
              return this.error(n.EXPECT_ARGUMENT_TYPE, N(u, f));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var p = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var m = this.clonePosition();
                if ((T = this.parseSimpleArgStyleIfPossible()).err) return T;
                if (0 === (d = V(T.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, N(this.clonePosition(), this.clonePosition()));
                p = {
                  style: d,
                  styleLocation: N(m, this.clonePosition())
                }
              }
              if ((H = this.tryParseArgumentClose(a)).err) return H;
              var g = N(a, this.clonePosition());
              if (p && G(null == p ? void 0 : p.style, "::", 0)) {
                var E = j(p.style.slice(2));
                if ("number" === c) return (T = this.parseNumberSkeletonFromString(E, p.styleLocation)).err ? T : {
                  val: {
                    type: i.number,
                    value: r,
                    location: g,
                    style: T.val
                  },
                  err: null
                };
                if (0 === E.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, g);
                var _ = E;
                this.locale && (_ = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var i = e.charAt(n);
                    if ("j" === i) {
                      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                      var a = 1 + (1 & o),
                        s = o < 2 ? 1 : 3 + (o >> 1),
                        h = A(t);
                      for ("H" != h && "k" != h || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = h + r
                    } else r += "J" === i ? "H" : i
                  }
                  return r
                }(E, this.locale));
                var d = {
                  type: o.dateTime,
                  pattern: _,
                  location: p.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? l(_) : {}
                };
                return {
                  val: {
                    type: "date" === c ? i.date : i.time,
                    value: r,
                    location: g,
                    style: d
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === c ? i.number : "date" === c ? i.date : i.time,
                  value: r,
                  location: g,
                  style: null !== (s = null == p ? void 0 : p.style) && void 0 !== s ? s : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var b = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, N(b, (0, h.__assign)({}, b)));
              this.bumpSpace();
              var y = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== c && "offset" === y.value) {
                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, N(this.clonePosition(), this.clonePosition()));
                var T;
                if (this.bumpSpace(), (T = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return T;
                this.bumpSpace(), y = this.parseIdentifierIfPossible(), v = T.val
              }
              var H, B = this.tryParsePluralOrSelectOptions(e, c, t, y);
              if (B.err) return B;
              if ((H = this.tryParseArgumentClose(a)).err) return H;
              var P = N(a, this.clonePosition());
              return "select" === c ? {
                val: {
                  type: i.select,
                  value: r,
                  options: k(B.val),
                  location: P
                },
                err: null
              } : {
                val: {
                  type: i.plural,
                  value: r,
                  options: k(B.val),
                  offset: v,
                  pluralType: "plural" === c ? "cardinal" : "ordinal",
                  location: P
                },
                err: null
              };
            default:
              return this.error(n.INVALID_ARGUMENT_TYPE, N(u, f))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, N(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, N(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(f).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var i = n[r].split("/");
                if (0 === i.length) throw new Error("Invalid number skeleton");
                for (var o = i[0], a = i.slice(1), s = 0, h = a; s < h.length; s++)
                  if (0 === h[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: o,
                  options: a
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(n.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: o.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? T(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, i) {
          for (var o, a = !1, s = [], h = new Set, u = i.value, c = i.location;;) {
            if (0 === u.length) {
              var l = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              c = N(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
            }
            if (h.has(u)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === u && (a = !0), this.bumpSpace();
            var p = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, N(this.clonePosition(), this.clonePosition()));
            var m = this.parseMessage(e + 1, t, r);
            if (m.err) return m;
            var g = this.tryParseArgumentClose(p);
            if (g.err) return g;
            s.push([u, {
              value: m.val,
              location: N(p, this.clonePosition())
            }]), h.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, N(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, N(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var i = !1, o = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            i = !0, o = 10 * o + (a - 48), this.bump()
          }
          var s = N(n, this.clonePosition());
          return i ? O(o *= r) ? {
            val: o,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = x(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (G(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && W(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }();
      var Q = r(34064),
        q = r(80825),
        z = r(95758);

      function $(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, h.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function ee(e, t) {
        return Object.keys((0, h.__assign)((0, h.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, h.__assign)((0, h.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function te(e, t) {
        if (!t) return e;
        var r = Q.S.formats;
        return (0, h.__assign)((0, h.__assign)((0, h.__assign)({}, r), e), {
          date: ee($(r.date, t), $(e.date || {}, t)),
          time: ee($(r.time, t), $(e.time || {}, t))
        })
      }
      var re = function(e, t, r, n, o) {
          var a = e.locale,
            s = e.formats,
            u = e.messages,
            c = e.defaultLocale,
            l = e.defaultFormats,
            f = e.fallbackOnEmptyString,
            p = e.onError,
            m = e.timeZone,
            g = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var E = r.id,
            _ = r.defaultMessage;
          (0, z.V1)(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var d = String(E),
            b = u && Object.prototype.hasOwnProperty.call(u, d) && u[d];
          if (Array.isArray(b) && 1 === b.length && b[0].type === i.literal) return b[0].value;
          if (!n && b && "string" == typeof b && !g) return b.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, h.__assign)((0, h.__assign)({}, g), n || {}), s = te(s, m), l = te(l, m), !b) {
            if (!1 === f && "" === b) return b;
            if ((!_ || a && a.toLowerCase() !== c.toLowerCase()) && p(new q.sb(r, a)), _) try {
              return t.getMessageFormat(_, c, l, o).format(n)
            } catch (e) {
              return p(new q.Ho('Error formatting default message for: "'.concat(d, '", rendering default message verbatim'), a, r, e)), "string" == typeof _ ? _ : d
            }
            return d
          }
          try {
            return t.getMessageFormat(b, a, s, (0, h.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            p(new q.Ho('Error formatting message: "'.concat(d, '", using ').concat(_ ? "default message" : "id", " as fallback."), a, r, e))
          }
          if (_) try {
            return t.getMessageFormat(_, c, l, o).format(n)
          } catch (e) {
            p(new q.Ho('Error formatting the default message for: "'.concat(d, '", rendering message verbatim'), a, r, e))
          }
          return "string" == typeof b ? b : "string" == typeof _ ? _ : d
        },
        ne = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function ie(e, t, r, n) {
        var i = e.locale,
          o = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var u = n.format,
          c = (0, h.__assign)((0, h.__assign)({}, s && {
            timeZone: s
          }), u && (0, z.F3)(o, t, u, a)),
          l = (0, z.J9)(n, ne, c);
        return "time" !== t || l.hour || l.minute || l.second || l.timeStyle || l.dateStyle || (l = (0, h.__assign)((0, h.__assign)({}, l), {
          hour: "numeric",
          minute: "numeric"
        })), r(i, l)
      }

      function oe(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return ie(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new q.pg("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function ae(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return ie(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new q.pg("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function se(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          h = "string" == typeof i ? new Date(i || 0) : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ie(e, "dateTimeRange", t, s).formatRange(h, u)
        } catch (t) {
          e.onError(new q.pg("Error formatting date time range.", e.locale, t))
        }
        return String(h)
      }

      function he(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return ie(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new q.pg("Error formatting date.", e.locale, t))
        }
        return []
      }

      function ue(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return ie(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new q.pg("Error formatting time.", e.locale, t))
        }
        return []
      }
      var ce = r(93189),
        le = ["style", "type", "fallback", "languageDisplay"];

      function fe(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        Intl.DisplayNames || o(new ce.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', ce.O4.MISSING_INTL_API));
        var a = (0, z.J9)(n, le);
        try {
          return t(i, a).of(r)
        } catch (e) {
          o(new q.pg("Error formatting display name.", i, e))
        }
      }
      var pe = ["type", "style"],
        me = Date.now();

      function ge(e, t, r, n) {
        void 0 === n && (n = {});
        var i = Ee(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i
      }

      function Ee(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || o(new ce.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', ce.O4.MISSING_INTL_API));
        var a = (0, z.J9)(n, pe);
        try {
          var s = {},
            u = Array.from(r).map(function(e, t) {
              if ("object" == typeof e && null !== e) {
                var r = function(e) {
                  return "".concat(me, "_").concat(e, "_").concat(me)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            });
          return t(i, a).formatToParts(u).map(function(e) {
            return "literal" === e.type ? e : (0, h.__assign)((0, h.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          })
        } catch (e) {
          o(new q.pg("Error formatting list.", i, e))
        }
        return r
      }
      var _e = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function de(e, t, r) {
        var n = e.locale,
          i = e.formats,
          o = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && (0, z.F3)(i, "number", a, o) || {};
        return t(n, (0, z.J9)(r, _e, s))
      }

      function be(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return de(e, t, n).format(r)
        } catch (t) {
          e.onError(new q.pg("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function ye(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return de(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new q.pg("Error formatting number.", e.locale, t))
        }
        return []
      }
      var ve = ["type"];

      function Te(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new ce.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ce.O4.MISSING_INTL_API));
        var a = (0, z.J9)(n, ve);
        try {
          return t(i, a).select(r)
        } catch (e) {
          o(new q.pg("Error formatting plural.", i, e))
        }
        return "other"
      }
      var He = ["numeric", "style"];

      function Be(e, t, r, n, i) {
        void 0 === i && (i = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new ce.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', ce.O4.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              i = e.formats,
              o = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && (0, z.F3)(i, "relative", a, o) || {};
            return t(n, (0, z.J9)(r, He, s))
          }(e, t, i).format(r, n)
        } catch (t) {
          e.onError(new q.pg("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var Ae = r(34880),
        Pe = r(55165);

      function Se(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n = e[r];
          return t[r] = (0, Ae.RK)(n) ? (0, Pe.yU)(n) : n, t
        }, {}) : e
      }
      var Ne = function(e, t, r, n) {
          for (var i = [], o = 4; o < arguments.length; o++) i[o - 4] = arguments[o];
          var a = Se(n),
            s = re.apply(void 0, (0, h.__spreadArray)([e, t, r, a], i, !1));
          return Array.isArray(s) ? (0, Pe.SP)(s) : s
        },
        Ie = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, h.__rest)(e, ["defaultRichTextElements"]),
            i = Se(r),
            o = function(e, t) {
              var r = (0, z.GT)(t),
                n = (0, h.__assign)((0, h.__assign)({}, z.JF), e),
                i = n.locale,
                o = n.defaultLocale,
                a = n.onError;
              return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new q.hr('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new q.hr('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new q.uo('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
                function(e) {
                  var t;
                  e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(n), (0, h.__assign)((0, h.__assign)({}, n), {
                  formatters: r,
                  formatNumber: be.bind(null, n, r.getNumberFormat),
                  formatNumberToParts: ye.bind(null, n, r.getNumberFormat),
                  formatRelativeTime: Be.bind(null, n, r.getRelativeTimeFormat),
                  formatDate: oe.bind(null, n, r.getDateTimeFormat),
                  formatDateToParts: he.bind(null, n, r.getDateTimeFormat),
                  formatTime: ae.bind(null, n, r.getDateTimeFormat),
                  formatDateTimeRange: se.bind(null, n, r.getDateTimeFormat),
                  formatTimeToParts: ue.bind(null, n, r.getDateTimeFormat),
                  formatPlural: Te.bind(null, n, r.getPluralRules),
                  formatMessage: re.bind(null, n, r),
                  $t: re.bind(null, n, r),
                  formatList: ge.bind(null, n, r.getListFormat),
                  formatListToParts: Ee.bind(null, n, r.getListFormat),
                  formatDisplayName: fe.bind(null, n, r.getDisplayNames)
                })
            }((0, h.__assign)((0, h.__assign)((0, h.__assign)({}, Pe.JF), n), {
              defaultRichTextElements: i
            }), t),
            a = {
              locale: o.locale,
              timeZone: o.timeZone,
              fallbackOnEmptyString: o.fallbackOnEmptyString,
              formats: o.formats,
              defaultLocale: o.defaultLocale,
              defaultFormats: o.defaultFormats,
              messages: o.messages,
              onError: o.onError,
              defaultRichTextElements: i
            };
          return (0, h.__assign)((0, h.__assign)({}, o), {
            formatMessage: Ne.bind(null, a, o.formatters),
            $t: Ne.bind(null, a, o.formatters)
          })
        }
    },
    24944: (e, t, r) => {
      r.d(t, {
        YK: () => l
      });
      var n, i, o = r(78322),
        a = r(71127),
        s = r(30597);
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(n || (n = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(i || (i = {}));
      var h = function(e) {
        var t = (0, s.A)(),
          r = e.value,
          n = e.children,
          i = (0, o.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, i))
      };

      function u(e) {
        var t = function(t) {
          var r = (0, s.A)(),
            n = t.value,
            i = t.children,
            a = (0, o.__rest)(t, ["value", "children"]),
            h = "string" == typeof n ? new Date(n || 0) : n;
          return i("formatDate" === e ? r.formatDateToParts(h, a) : r.formatTimeToParts(h, a))
        };
        return t.displayName = i[e], t
      }

      function c(e) {
        var t = function(t) {
          var r = (0, s.A)(),
            n = t.value,
            i = t.children,
            h = (0, o.__rest)(t, ["value", "children"]),
            u = r[e](n, h);
          if ("function" == typeof i) return i(u);
          var c = r.textComponent || a.Fragment;
          return a.createElement(c, null, u)
        };
        return t.displayName = n[e], t
      }

      function l(e) {
        return e
      }
      h.displayName = "FormattedNumberParts", h.displayName = "FormattedNumberParts", c("formatDate"), c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), u("formatDate"), u("formatTime")
    },
    30597: (e, t, r) => {
      r.d(t, {
        A: () => a
      });
      var n = r(71127),
        i = r(55165),
        o = r(76535);

      function a() {
        var e = n.useContext(o.ob);
        return (0, i.HM)(e), e
      }
    },
    30762: (e, t, r) => {
      function n(e, t) {
        var r = t && t.cache ? t.cache : c,
          n = t && t.serializer ? t.serializer : h;
        return (t && t.strategy ? t.strategy : s)(e, {
          cache: r,
          serializer: n
        })
      }

      function i(e, t, r, n) {
        var i, o = null == (i = n) || "number" == typeof i || "boolean" == typeof i ? n : r(n),
          a = t.get(o);
        return void 0 === a && (a = e.call(this, n), t.set(o, a)), a
      }

      function o(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
      }

      function a(e, t, r, n, i) {
        return r.bind(t, e, n, i)
      }

      function s(e, t) {
        return a(e, this, 1 === e.length ? i : o, t.cache.create(), t.serializer)
      }
      r.d(t, {
        B: () => n,
        W: () => l
      });
      var h = function() {
          return JSON.stringify(arguments)
        },
        u = function() {
          function e() {
            this.cache = Object.create(null)
          }
          return e.prototype.get = function(e) {
            return this.cache[e]
          }, e.prototype.set = function(e, t) {
            this.cache[e] = t
          }, e
        }(),
        c = {
          create: function() {
            return new u
          }
        },
        l = {
          variadic: function(e, t) {
            return a(e, this, o, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, i, t.cache.create(), t.serializer)
          }
        }
    },
    31780: (e, t, r) => {
      r.d(t, {
        Im: () => u,
        tv: () => l,
        Tu: () => d,
        eW: () => h,
        oF: () => c,
        N1: () => _,
        N6: () => m,
        jA: () => g,
        Jp: () => p,
        xm: () => E,
        Qh: () => f,
        qg: () => he
      });
      var n, i, o, a, s = r(78322);

      function h(e) {
        return e.type === i.literal
      }

      function u(e) {
        return e.type === i.argument
      }

      function c(e) {
        return e.type === i.number
      }

      function l(e) {
        return e.type === i.date
      }

      function f(e) {
        return e.type === i.time
      }

      function p(e) {
        return e.type === i.select
      }

      function m(e) {
        return e.type === i.plural
      }

      function g(e) {
        return e.type === i.pound
      }

      function E(e) {
        return e.type === i.tag
      }

      function _(e) {
        return !(!e || "object" != typeof e || e.type !== o.number)
      }

      function d(e) {
        return !(!e || "object" != typeof e || e.type !== o.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(n || (n = {})), (a = i || (i = {}))[a.literal = 0] = "literal", a[a.argument = 1] = "argument", a[a.number = 2] = "number", a[a.date = 3] = "date", a[a.time = 4] = "time", a[a.select = 5] = "select", a[a.plural = 6] = "plural", a[a.pound = 7] = "pound", a[a.tag = 8] = "tag",
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(o || (o = {}));
      var b = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        y = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function v(e) {
        var t = {};
        return e.replace(y, function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        }), t
      }
      var T = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function H(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var B = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        A = /^(@+)?(\+|#+)?[rs]?$/g,
        P = /(\*)(0+)|(#+)(0+)|(0+)/g,
        S = /^(0+)$/;

      function N(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(A, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function I(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function L(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !S.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function R(e) {
        return I(e) || {}
      }

      function C(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var i = n[r];
          switch (i.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = i.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = H(i.options[0]);
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, s.__assign)((0, s.__assign)((0, s.__assign)({}, t), {
                notation: "scientific"
              }), i.options.reduce(function(e, t) {
                return (0, s.__assign)((0, s.__assign)({}, e), R(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, s.__assign)((0, s.__assign)((0, s.__assign)({}, t), {
                notation: "engineering"
              }), i.options.reduce(function(e, t) {
                return (0, s.__assign)((0, s.__assign)({}, e), R(t))
              }, {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(i.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              i.options[0].replace(P, function(e, r, n, i, o, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (i && o) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (S.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
          else if (B.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(B, function(e, r, n, i, o, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && a ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var o = i.options[0];
            "w" === o ? t = (0, s.__assign)((0, s.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = (0, s.__assign)((0, s.__assign)({}, t), N(o)))
          } else if (A.test(i.stem)) t = (0, s.__assign)((0, s.__assign)({}, t), N(i.stem));
          else {
            var a = I(i.stem);
            a && (t = (0, s.__assign)((0, s.__assign)({}, t), a));
            var h = L(i.stem);
            h && (t = (0, s.__assign)((0, s.__assign)({}, t), h))
          }
        }
        return t
      }
      var w, M = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["h", "H", "hB", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["h", "H", "hB", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["h", "H", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["h", "H", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["h", "H", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function O(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (M[r || ""] || M[n || ""] || M["".concat(n, "-001")] || M["001"])[0]
      }
      var D = new RegExp("^".concat(b.source, "*")),
        U = new RegExp("".concat(b.source, "*$"));

      function G(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var F = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        k = !!String.fromCodePoint,
        x = !!Object.fromEntries,
        j = !!String.prototype.codePointAt,
        V = !!String.prototype.trimStart,
        X = !!String.prototype.trimEnd,
        K = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Y = !0;
      try {
        Y = "a" === (null === (w = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === w ? void 0 : w[0])
      } catch (e) {
        Y = !1
      }
      var Z, W = F ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        J = k ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", i = e.length, o = 0; i > o;) {
            if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Q = x ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var i = n[r],
              o = i[0],
              a = i[1];
            t[o] = a
          }
          return t
        },
        q = j ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, i = e.charCodeAt(t);
            return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
          }
        },
        z = V ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(D, "")
        },
        $ = X ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(U, "")
        };

      function ee(e, t) {
        return new RegExp(e, t)
      }
      if (Y) {
        var te = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Z = function(e, t) {
          var r;
          return te.lastIndex = t, null !== (r = te.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Z = function(e, t) {
        for (var r = [];;) {
          var n = q(e, t);
          if (void 0 === n || oe(n) || ae(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return J.apply(void 0, r)
      };
      var re = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var o = []; !this.isEOF();) {
            var a = this.char();
            if (123 === a) {
              if ((s = this.parseArgument(e, r)).err) return s;
              o.push(s.val)
            } else {
              if (125 === a && e > 0) break;
              if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(n.UNMATCHED_CLOSING_TAG, G(this.clonePosition(), this.clonePosition()))
                }
                if (60 === a && !this.ignoreTag && ne(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  o.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  o.push(s.val)
                }
              } else {
                var h = this.clonePosition();
                this.bump(), o.push({
                  type: i.pound,
                  location: G(h, this.clonePosition())
                })
              }
            }
          }
          return {
            val: o,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var o = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: i.literal,
              value: "<".concat(o, "/>"),
              location: G(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var s = a.val,
              h = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ne(this.char())) return this.error(n.INVALID_TAG, G(h, this.clonePosition()));
              var u = this.clonePosition();
              return o !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, G(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: i.tag,
                  value: o,
                  children: s,
                  location: G(r, this.clonePosition())
                },
                err: null
              } : this.error(n.INVALID_TAG, G(h, this.clonePosition())))
            }
            return this.error(n.UNCLOSED_TAG, G(r, this.clonePosition()))
          }
          return this.error(n.INVALID_TAG, G(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && ie(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var h = G(r, this.clonePosition());
          return {
            val: {
              type: i.literal,
              value: n,
              location: h
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ne(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return J.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), J(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, G(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, G(r, this.clonePosition()));
          var o = this.parseIdentifierIfPossible().value;
          if (!o) return this.error(n.MALFORMED_ARGUMENT, G(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, G(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: i.argument,
                  value: o,
                  location: G(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, G(r, this.clonePosition())) : this.parseArgumentOptions(e, t, o, r);
            default:
              return this.error(n.MALFORMED_ARGUMENT, G(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Z(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: G(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, a) {
          var h, u = this.clonePosition(),
            c = this.parseIdentifierIfPossible().value,
            l = this.clonePosition();
          switch (c) {
            case "":
              return this.error(n.EXPECT_ARGUMENT_TYPE, G(u, l));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var f = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var p = this.clonePosition();
                if ((T = this.parseSimpleArgStyleIfPossible()).err) return T;
                if (0 === (_ = $(T.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, G(this.clonePosition(), this.clonePosition()));
                f = {
                  style: _,
                  styleLocation: G(p, this.clonePosition())
                }
              }
              if ((H = this.tryParseArgumentClose(a)).err) return H;
              var m = G(a, this.clonePosition());
              if (f && W(null == f ? void 0 : f.style, "::", 0)) {
                var g = z(f.style.slice(2));
                if ("number" === c) return (T = this.parseNumberSkeletonFromString(g, f.styleLocation)).err ? T : {
                  val: {
                    type: i.number,
                    value: r,
                    location: m,
                    style: T.val
                  },
                  err: null
                };
                if (0 === g.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, m);
                var E = g;
                this.locale && (E = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var i = e.charAt(n);
                    if ("j" === i) {
                      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                      var a = 1 + (1 & o),
                        s = o < 2 ? 1 : 3 + (o >> 1),
                        h = O(t);
                      for ("H" != h && "k" != h || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = h + r
                    } else r += "J" === i ? "H" : i
                  }
                  return r
                }(g, this.locale));
                var _ = {
                  type: o.dateTime,
                  pattern: E,
                  location: f.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? v(E) : {}
                };
                return {
                  val: {
                    type: "date" === c ? i.date : i.time,
                    value: r,
                    location: m,
                    style: _
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === c ? i.number : "date" === c ? i.date : i.time,
                  value: r,
                  location: m,
                  style: null !== (h = null == f ? void 0 : f.style) && void 0 !== h ? h : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var d = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, G(d, (0, s.__assign)({}, d)));
              this.bumpSpace();
              var b = this.parseIdentifierIfPossible(),
                y = 0;
              if ("select" !== c && "offset" === b.value) {
                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, G(this.clonePosition(), this.clonePosition()));
                var T;
                if (this.bumpSpace(), (T = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return T;
                this.bumpSpace(), b = this.parseIdentifierIfPossible(), y = T.val
              }
              var H, B = this.tryParsePluralOrSelectOptions(e, c, t, b);
              if (B.err) return B;
              if ((H = this.tryParseArgumentClose(a)).err) return H;
              var A = G(a, this.clonePosition());
              return "select" === c ? {
                val: {
                  type: i.select,
                  value: r,
                  options: Q(B.val),
                  location: A
                },
                err: null
              } : {
                val: {
                  type: i.plural,
                  value: r,
                  options: Q(B.val),
                  offset: y,
                  pluralType: "plural" === c ? "cardinal" : "ordinal",
                  location: A
                },
                err: null
              };
            default:
              return this.error(n.INVALID_ARGUMENT_TYPE, G(u, l))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, G(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, G(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(T).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var i = n[r].split("/");
                if (0 === i.length) throw new Error("Invalid number skeleton");
                for (var o = i[0], a = i.slice(1), s = 0, h = a; s < h.length; s++)
                  if (0 === h[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: o,
                  options: a
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(n.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: o.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? C(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, i) {
          for (var o, a = !1, s = [], h = new Set, u = i.value, c = i.location;;) {
            if (0 === u.length) {
              var l = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              c = G(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
            }
            if (h.has(u)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === u && (a = !0), this.bumpSpace();
            var p = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, G(this.clonePosition(), this.clonePosition()));
            var m = this.parseMessage(e + 1, t, r);
            if (m.err) return m;
            var g = this.tryParseArgumentClose(p);
            if (g.err) return g;
            s.push([u, {
              value: m.val,
              location: G(p, this.clonePosition())
            }]), h.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, G(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, G(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var i = !1, o = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            i = !0, o = 10 * o + (a - 48), this.bump()
          }
          var s = G(n, this.clonePosition());
          return i ? K(o *= r) ? {
            val: o,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = q(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (W(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && oe(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function ne(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ie(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function oe(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ae(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function se(e) {
        e.forEach(function(e) {
          if (delete e.location, p(e) || m(e))
            for (var t in e.options) delete e.options[t].location, se(e.options[t].value);
          else c(e) && _(e.style) || (l(e) || f(e)) && d(e.style) ? delete e.style.location : E(e) && se(e.children)
        })
      }

      function he(e, t) {
        void 0 === t && (t = {}), t = (0, s.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new re(e, t).parse();
        if (r.err) {
          var i = SyntaxError(n[r.err.kind]);
          throw i.location = r.err.location, i.originalMessage = r.err.message, i
        }
        return (null == t ? void 0 : t.captureLocation) || se(r.val), r.val
      }
    },
    34064: (e, t, r) => {
      r.d(t, {
        S: () => h
      });
      var n = r(78322),
        i = r(30762),
        o = r(31780),
        a = r(34880);

      function s(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }
      var h = function() {
        function e(t, r, o, h) {
          void 0 === r && (r = e.defaultLocale);
          var u, c, l, f = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = f.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === a.TT.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return (0, a.hN)(f.ast, f.locales, f.formatters, f.formats, e, void 0, f.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = f.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
              }
            }, this.getAst = function() {
              return f.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var p = h || {},
              m = (p.formatters, (0, n.__rest)(p, ["formatters"]));
            this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, m), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (c = e.formats, (l = o) ? Object.keys(c).reduce(function(e, t) {
            var r, i;
            return e[t] = (r = c[t], (i = l[t]) ? (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r || {}), i || {}), Object.keys(r).reduce(function(e, t) {
              return e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), i[t] || {}), e
            }, {})) : r), e
          }, (0, n.__assign)({}, c)) : c), this.formatters = h && h.formatters || (void 0 === (u = this.formatterCache) && (u = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, i.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }, {
              cache: s(u.number),
              strategy: i.W.variadic
            }),
            getDateTimeFormat: (0, i.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }, {
              cache: s(u.dateTime),
              strategy: i.W.variadic
            }),
            getPluralRules: (0, i.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }, {
              cache: s(u.pluralRules),
              strategy: i.W.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = o.qg, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }()
    },
    34880: (e, t, r) => {
      r.d(t, {
        RK: () => a,
        TT: () => n,
        hN: () => s
      });
      var n, i = r(31780),
        o = r(93189);

      function a(e) {
        return "function" == typeof e
      }

      function s(e, t, r, h, u, c, l) {
        if (1 === e.length && (0, i.eW)(e[0])) return [{
          type: n.literal,
          value: e[0].value
        }];
        for (var f = [], p = 0, m = e; p < m.length; p++) {
          var g = m[p];
          if ((0, i.eW)(g)) f.push({
            type: n.literal,
            value: g.value
          });
          else if ((0, i.jA)(g)) "number" == typeof c && f.push({
            type: n.literal,
            value: r.getNumberFormat(t).format(c)
          });
          else {
            var E = g.value;
            if (!u || !(E in u)) throw new o.Ei(E, l);
            var _ = u[E];
            if ((0, i.Im)(g)) _ && "string" != typeof _ && "number" != typeof _ || (_ = "string" == typeof _ || "number" == typeof _ ? String(_) : ""), f.push({
              type: "string" == typeof _ ? n.literal : n.object,
              value: _
            });
            else if ((0, i.tv)(g)) {
              var d = "string" == typeof g.style ? h.date[g.style] : (0, i.Tu)(g.style) ? g.style.parsedOptions : void 0;
              f.push({
                type: n.literal,
                value: r.getDateTimeFormat(t, d).format(_)
              })
            } else if ((0, i.Qh)(g)) d = "string" == typeof g.style ? h.time[g.style] : (0, i.Tu)(g.style) ? g.style.parsedOptions : h.time.medium, f.push({
              type: n.literal,
              value: r.getDateTimeFormat(t, d).format(_)
            });
            else if ((0, i.oF)(g))(d = "string" == typeof g.style ? h.number[g.style] : (0, i.N1)(g.style) ? g.style.parsedOptions : void 0) && d.scale && (_ *= d.scale || 1), f.push({
              type: n.literal,
              value: r.getNumberFormat(t, d).format(_)
            });
            else {
              if ((0, i.xm)(g)) {
                var b = g.children,
                  y = g.value,
                  v = u[y];
                if (!a(v)) throw new o.Zo(y, "function", l);
                var T = v(s(b, t, r, h, u, c).map(function(e) {
                  return e.value
                }));
                Array.isArray(T) || (T = [T]), f.push.apply(f, T.map(function(e) {
                  return {
                    type: "string" == typeof e ? n.literal : n.object,
                    value: e
                  }
                }))
              }
              if ((0, i.Jp)(g)) {
                if (!(H = g.options[_] || g.options.other)) throw new o.$x(g.value, _, Object.keys(g.options), l);
                f.push.apply(f, s(H.value, t, r, h, u))
              } else if ((0, i.N6)(g)) {
                var H;
                if (!(H = g.options["=".concat(_)])) {
                  if (!Intl.PluralRules) throw new o.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.O4.MISSING_INTL_API, l);
                  var B = r.getPluralRules(t, {
                    type: g.pluralType
                  }).select(_ - (g.offset || 0));
                  H = g.options[B] || g.options.other
                }
                if (!H) throw new o.$x(g.value, _, Object.keys(g.options), l);
                f.push.apply(f, s(H.value, t, r, h, u, _ - (g.offset || 0)))
              }
            }
          }
        }
        return (A = f).length < 2 ? A : A.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === n.literal && t.type === n.literal ? r.value += t.value : e.push(t), e
        }, []);
        var A
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(n || (n = {}))
    },
    55165: (e, t, r) => {
      r.d(t, {
        HM: () => a,
        JF: () => s,
        SP: () => u,
        bN: () => l,
        yU: () => c
      });
      var n = r(78322),
        i = r(71127),
        o = r(95758);

      function a(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var s = (0, n.__assign)((0, n.__assign)({}, o.JF), {
          textComponent: i.Fragment
        }),
        h = function(e, t) {
          return i.isValidElement(e) ? i.cloneElement(e, {
            key: t
          }) : e
        },
        u = function(e) {
          var t;
          return null !== (t = i.Children.map(e, h)) && void 0 !== t ? t : []
        };

      function c(e) {
        return function(t) {
          return e(u(t))
        }
      }

      function l(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          n = Object.keys(t),
          i = r.length;
        if (n.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var a = r[o];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
        }
        return !0
      }
    },
    76535: (e, t, r) => {
      r.d(t, {
        Kq: () => o,
        ob: () => a
      }), r(35255);
      var n = r(71127),
        i = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        o = (i.Consumer, i.Provider),
        a = i
    },
    78322: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => O,
        __assign: () => o,
        __asyncDelegator: () => A,
        __asyncGenerator: () => B,
        __asyncValues: () => P,
        __await: () => H,
        __awaiter: () => m,
        __classPrivateFieldGet: () => C,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => w,
        __createBinding: () => E,
        __decorate: () => s,
        __disposeResources: () => U,
        __esDecorate: () => u,
        __exportStar: () => _,
        __extends: () => i,
        __generator: () => g,
        __importDefault: () => R,
        __importStar: () => L,
        __makeTemplateObject: () => S,
        __metadata: () => p,
        __param: () => h,
        __propKey: () => l,
        __read: () => b,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => G,
        __runInitializers: () => c,
        __setFunctionName: () => f,
        __spread: () => y,
        __spreadArray: () => T,
        __spreadArrays: () => v,
        __values: () => d,
        default: () => F
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

      function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, o.apply(this, arguments)
      };

      function a(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
        }
        return r
      }

      function s(e, t, r, n) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
        return o > 3 && a && Object.defineProperty(t, r, a), a
      }

      function h(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function u(e, t, r, n, i, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, h = n.kind, u = "getter" === h ? "get" : "setter" === h ? "set" : "value", c = !t && e ? n.static ? e : e.prototype : null, l = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
          var m = {};
          for (var g in n) m[g] = "access" === g ? {} : n[g];
          for (var g in n.access) m.access[g] = n.access[g];
          m.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(e || null))
          };
          var E = (0, r[p])("accessor" === h ? {
            get: l.get,
            set: l.set
          } : l[u], m);
          if ("accessor" === h) {
            if (void 0 === E) continue;
            if (null === E || "object" != typeof E) throw new TypeError("Object expected");
            (s = a(E.get)) && (l.get = s), (s = a(E.set)) && (l.set = s), (s = a(E.init)) && i.unshift(s)
          } else(s = a(E)) && ("field" === h ? i.unshift(s) : l[u] = s)
        }
        c && Object.defineProperty(c, n.name, l), f = !0
      }

      function c(e, t, r) {
        for (var n = arguments.length > 2, i = 0; i < t.length; i++) r = n ? t[i].call(e, r) : t[i].call(e);
        return n ? r : void 0
      }

      function l(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function m(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
          function a(e) {
            try {
              h(n.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              h(n.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function h(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(a, s)
          }
          h((n = n.apply(e, t || [])).next())
        })
      }

      function g(e, t) {
        var r, n, i, o = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1];
              return i[1]
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function s(s) {
          return function(h) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                  case 0:
                  case 1:
                    i = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < i[1]) {
                      o.label = i[1], i = s;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(s);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = t.call(e, o)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = i = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, h])
          }
        }
      }
      var E = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var i = Object.getOwnPropertyDescriptor(t, r);
        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, i)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function _(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || E(t, e, r)
      }

      function d(e) {
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

      function b(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }

      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e
      }

      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
        return n
      }

      function T(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function H(e) {
        return this instanceof H ? (this.v = e, this) : new H(e)
      }

      function B(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, i = r.apply(e, t || []),
          o = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function a(e, t) {
          i[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              o.push([e, t, r, n]) > 1 || s(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
          try {
            (r = i[e](t)).value instanceof H ? Promise.resolve(r.value.v).then(h, u) : c(o[0][2], r)
          } catch (e) {
            c(o[0][3], e)
          }
          var r
        }

        function h(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function c(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function A(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, i) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: H(e[n](t)),
              done: !1
            } : i ? i(t) : t
          } : i
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(n, i) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(n, i, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function S(e, t) {
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

      function L(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = I(e), n = 0; n < r.length; n++) "default" !== r[n] && E(t, e, r[n]);
        return N(t, e), t
      }

      function R(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function C(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function w(e, t, r, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
      }

      function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function O(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, i;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (i = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          i && (n = function() {
            try {
              i.call(this)
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
      var D = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function U(e) {
        function t(t) {
          e.error = e.hasError ? new D(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function i() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(i);
            if (r.dispose) {
              var o = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(o).then(i, function(e) {
                return t(e), i()
              })
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function G(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, i, o) {
          return r ? t ? ".jsx" : ".js" : !n || i && o ? n + i + "." + o.toLowerCase() + "js" : e
        }) : e
      }
      const F = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: h,
        __esDecorate: u,
        __runInitializers: c,
        __propKey: l,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: m,
        __generator: g,
        __createBinding: E,
        __exportStar: _,
        __values: d,
        __read: b,
        __spread: y,
        __spreadArrays: v,
        __spreadArray: T,
        __await: H,
        __asyncGenerator: B,
        __asyncDelegator: A,
        __asyncValues: P,
        __makeTemplateObject: S,
        __importStar: L,
        __importDefault: R,
        __classPrivateFieldGet: C,
        __classPrivateFieldSet: w,
        __classPrivateFieldIn: M,
        __addDisposableResource: O,
        __disposeResources: U,
        __rewriteRelativeImportExtension: G
      }
    },
    80825: (e, t, r) => {
      r.d(t, {
        Ho: () => c,
        OC: () => a,
        hr: () => h,
        pg: () => u,
        sb: () => l,
        uo: () => s
      });
      var n, i = r(78322);
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(n || (n = {}));
      var o = function(e) {
          function t(r, n, i) {
            var o = this,
              a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
            return (o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, t), o
          }
          return (0, i.__extends)(t, e), t
        }(Error),
        a = function(e) {
          function t(t, r) {
            return e.call(this, n.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        s = function(e) {
          function t(t, r) {
            return e.call(this, n.INVALID_CONFIG, t, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        h = function(e) {
          function t(t, r) {
            return e.call(this, n.MISSING_DATA, t, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        u = function(e) {
          function t(t, r, i) {
            var o = e.call(this, n.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), i) || this;
            return o.locale = r, o
          }
          return (0, i.__extends)(t, e), t
        }(o),
        c = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, i) || this;
            return o.descriptor = n, o.locale = r, o
          }
          return (0, i.__extends)(t, e), t
        }(u),
        l = function(e) {
          function t(t, r) {
            var i = e.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return i.descriptor = t, i
          }
          return (0, i.__extends)(t, e), t
        }(o)
    },
    93189: (e, t, r) => {
      r.d(t, {
        $x: () => a,
        Ei: () => h,
        IF: () => o,
        O4: () => n,
        Zo: () => s
      });
      var n, i = r(78322);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(n || (n = {}));
      var o = function(e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return i.code = r, i.originalMessage = n, i
          }
          return (0, i.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        a = function(e) {
          function t(t, r, i, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), n.INVALID_VALUE, o) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        s = function(e) {
          function t(t, r, i) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        h = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o)
    },
    95758: (e, t, r) => {
      r.d(t, {
        F3: () => p,
        GT: () => f,
        J9: () => h,
        JF: () => u,
        MT: () => c,
        V1: () => s
      });
      var n = r(78322),
        i = r(30762),
        o = r(34064),
        a = r(80825);

      function s(e, t, r) {
        if (void 0 === r && (r = Error), !e) throw new r(t)
      }

      function h(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var u = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function c() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        }
      }

      function l(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function f(e) {
        void 0 === e && (e = {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        });
        var t = Intl.RelativeTimeFormat,
          r = Intl.ListFormat,
          a = Intl.DisplayNames,
          s = (0, i.B)(function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: l(e.dateTime),
            strategy: i.W.variadic
          }),
          h = (0, i.B)(function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: l(e.number),
            strategy: i.W.variadic
          }),
          u = (0, i.B)(function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: l(e.pluralRules),
            strategy: i.W.variadic
          });
        return {
          getDateTimeFormat: s,
          getNumberFormat: h,
          getMessageFormat: (0, i.B)(function(e, t, r, i) {
            return new o.S(e, t, r, (0, n.__assign)({
              formatters: {
                getNumberFormat: h,
                getDateTimeFormat: s,
                getPluralRules: u
              }
            }, i || {}))
          }, {
            cache: l(e.message),
            strategy: i.W.variadic
          }),
          getRelativeTimeFormat: (0, i.B)(function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new(t.bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: l(e.relativeTime),
            strategy: i.W.variadic
          }),
          getPluralRules: u,
          getListFormat: (0, i.B)(function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(r.bind.apply(r, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: l(e.list),
            strategy: i.W.variadic
          }),
          getDisplayNames: (0, i.B)(function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(a.bind.apply(a, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: l(e.displayNames),
            strategy: i.W.variadic
          })
        }
      }

      function p(e, t, r, n) {
        var i, o = e && e[t];
        if (o && (i = o[r]), i) return i;
        n(new a.OC("No ".concat(t, " format named: ").concat(r)))
      }
    }
  }
]);