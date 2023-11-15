/*! For license information please see 6576cd45bfab9cce1a56fa4d3dac681f.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [882, 705], {
    441: (t, e, i) => {
      "use strict";
      var r = i(6183);
      e.s = r.createRoot, r.hydrateRoot
    },
    1093: (t, e, i) => {
      "use strict";
      i.d(e, {
        Z: () => Se
      });
      var r = function(t, e) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }, r(t, e)
      };

      function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function i() {
          this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
      }
      var n = function() {
        return n = Object.assign || function(t) {
          for (var e, i = 1, r = arguments.length; i < r; i++)
            for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
          return t
        }, n.apply(this, arguments)
      };

      function a(t, e) {
        var i = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (i[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (r = Object.getOwnPropertySymbols(t); s < r.length; s++) e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (i[r[s]] = t[r[s]])
        }
        return i
      }

      function o(t, e, i) {
        if (i || 2 === arguments.length)
          for (var r, s = 0, n = e.length; s < n; s++) !r && s in e || (r || (r = Array.prototype.slice.call(e, 0, s)), r[s] = e[s]);
        return t.concat(r || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var h = i(279);
      i(2571);
      var c, p, l, u = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        f = (u.Consumer, u.Provider);

      function d(t, e, i) {
        if (void 0 === i && (i = Error), !t) throw new i(e)
      }

      function m(t) {
        return t.type === p.literal
      }

      function g(t) {
        return t.type === p.argument
      }

      function y(t) {
        return t.type === p.number
      }

      function v(t) {
        return t.type === p.date
      }

      function x(t) {
        return t.type === p.time
      }

      function b(t) {
        return t.type === p.select
      }

      function _(t) {
        return t.type === p.plural
      }

      function E(t) {
        return t.type === p.pound
      }

      function S(t) {
        return t.type === p.tag
      }

      function w(t) {
        return !(!t || "object" != typeof t || t.type !== l.number)
      }

      function k(t) {
        return !(!t || "object" != typeof t || t.type !== l.dateTime)
      }! function(t) {
        t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(c || (c = {})),
      function(t) {
        t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag"
      }(p || (p = {})),
      function(t) {
        t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime"
      }(l || (l = {}));
      var C = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        A = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function T(t) {
        var e = {};
        return t.replace(A, (function(t) {
          var i = t.length;
          switch (t[0]) {
            case "G":
              e.era = 4 === i ? "long" : 5 === i ? "narrow" : "short";
              break;
            case "y":
              e.year = 2 === i ? "2-digit" : "numeric";
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
              e.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              e.day = ["numeric", "2-digit"][i - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              e.weekday = 4 === i ? "short" : 5 === i ? "narrow" : "short";
              break;
            case "e":
              if (i < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              e.weekday = ["short", "long", "narrow", "short"][i - 4];
              break;
            case "c":
              if (i < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              e.weekday = ["short", "long", "narrow", "short"][i - 4];
              break;
            case "a":
              e.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][i - 1];
              break;
            case "H":
              e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][i - 1];
              break;
            case "K":
              e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][i - 1];
              break;
            case "k":
              e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][i - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              e.minute = ["numeric", "2-digit"][i - 1];
              break;
            case "s":
              e.second = ["numeric", "2-digit"][i - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              e.timeZoneName = i < 4 ? "short" : "long";
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
        })), e
      }
      var I = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        P = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        N = /^(@+)?(\+|#+)?[rs]?$/g,
        L = /(\*)(0+)|(#+)(0+)|(0+)/g,
        O = /^(0+)$/;

      function R(t) {
        var e = {};
        return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(N, (function(t, i, r) {
          return "string" != typeof r ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : "+" === r ? e.minimumSignificantDigits = i.length : "#" === i[0] ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + ("string" == typeof r ? r.length : 0)), ""
        })), e
      }

      function B(t) {
        switch (t) {
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

      function M(t) {
        var e;
        if ("E" === t[0] && "E" === t[1] ? (e = {
            notation: "engineering"
          }, t = t.slice(2)) : "E" === t[0] && (e = {
            notation: "scientific"
          }, t = t.slice(1)), e) {
          var i = t.slice(0, 2);
          if ("+!" === i ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === i && (e.signDisplay = "exceptZero", t = t.slice(2)), !O.test(t)) throw new Error("Malformed concise eng/scientific notation");
          e.minimumIntegerDigits = t.length
        }
        return e
      }

      function V(t) {
        return B(t) || {}
      }

      function D(t) {
        for (var e = {}, i = 0, r = t; i < r.length; i++) {
          var s = r[i];
          switch (s.stem) {
            case "percent":
            case "%":
              e.style = "percent";
              continue;
            case "%x100":
              e.style = "percent", e.scale = 100;
              continue;
            case "currency":
              e.style = "currency", e.currency = s.options[0];
              continue;
            case "group-off":
            case ",_":
              e.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              e.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              e.style = "unit", e.unit = s.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              e.notation = "compact", e.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              e.notation = "compact", e.compactDisplay = "long";
              continue;
            case "scientific":
              e = n(n(n({}, e), {
                notation: "scientific"
              }), s.options.reduce((function(t, e) {
                return n(n({}, t), V(e))
              }), {}));
              continue;
            case "engineering":
              e = n(n(n({}, e), {
                notation: "engineering"
              }), s.options.reduce((function(t, e) {
                return n(n({}, t), V(e))
              }), {}));
              continue;
            case "notation-simple":
              e.notation = "standard";
              continue;
            case "unit-width-narrow":
              e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              e.currencyDisplay = "code", e.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              e.currencyDisplay = "name", e.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              e.currencyDisplay = "symbol";
              continue;
            case "scale":
              e.scale = parseFloat(s.options[0]);
              continue;
            case "integer-width":
              if (s.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              s.options[0].replace(L, (function(t, i, r, s, n, a) {
                if (i) e.minimumIntegerDigits = r.length;
                else {
                  if (s && n) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (O.test(s.stem)) e.minimumIntegerDigits = s.stem.length;
          else if (P.test(s.stem)) {
            if (s.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            s.stem.replace(P, (function(t, i, r, s, n, a) {
              return "*" === r ? e.minimumFractionDigits = i.length : s && "#" === s[0] ? e.maximumFractionDigits = s.length : n && a ? (e.minimumFractionDigits = n.length, e.maximumFractionDigits = n.length + a.length) : (e.minimumFractionDigits = i.length, e.maximumFractionDigits = i.length), ""
            }));
            var a = s.options[0];
            "w" === a ? e = n(n({}, e), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (e = n(n({}, e), R(a)))
          } else if (N.test(s.stem)) e = n(n({}, e), R(s.stem));
          else {
            var o = B(s.stem);
            o && (e = n(n({}, e), o));
            var h = M(s.stem);
            h && (e = n(n({}, e), h))
          }
        }
        return e
      }
      var H, U = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
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
        BO: ["H", "hB", "h", "hb"],
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
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
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
        EC: ["H", "hB", "h", "hb"],
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
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
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
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
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
        PY: ["H", "h", "hB", "hb"],
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
        SV: ["H", "h", "hB", "hb"],
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
        UY: ["H", "h", "hB", "hb"],
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
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
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

      function F(t) {
        var e = t.hourCycle;
        if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
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
        var i, r = t.language;
        return "root" !== r && (i = t.maximize().region), (U[i || ""] || U[r || ""] || U["".concat(r, "-001")] || U["001"])[0]
      }
      var j = new RegExp("^".concat(C.source, "*")),
        G = new RegExp("".concat(C.source, "*$"));

      function W(t, e) {
        return {
          start: t,
          end: e
        }
      }
      var q = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        z = !!String.fromCodePoint,
        X = !!Object.fromEntries,
        K = !!String.prototype.codePointAt,
        Q = !!String.prototype.trimStart,
        Z = !!String.prototype.trimEnd,
        Y = Number.isSafeInteger ? Number.isSafeInteger : function(t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991
        },
        $ = !0;
      try {
        $ = "a" === (null === (H = at("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === H ? void 0 : H[0])
      } catch (t) {
        $ = !1
      }
      var J, tt = q ? function(t, e, i) {
          return t.startsWith(e, i)
        } : function(t, e, i) {
          return t.slice(i, i + e.length) === e
        },
        et = z ? String.fromCodePoint : function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          for (var i, r = "", s = t.length, n = 0; s > n;) {
            if ((i = t[n++]) > 1114111) throw RangeError(i + " is not a valid code point");
            r += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(55296 + ((i -= 65536) >> 10), i % 1024 + 56320)
          }
          return r
        },
        it = X ? Object.fromEntries : function(t) {
          for (var e = {}, i = 0, r = t; i < r.length; i++) {
            var s = r[i],
              n = s[0],
              a = s[1];
            e[n] = a
          }
          return e
        },
        rt = K ? function(t, e) {
          return t.codePointAt(e)
        } : function(t, e) {
          var i = t.length;
          if (!(e < 0 || e >= i)) {
            var r, s = t.charCodeAt(e);
            return s < 55296 || s > 56319 || e + 1 === i || (r = t.charCodeAt(e + 1)) < 56320 || r > 57343 ? s : r - 56320 + (s - 55296 << 10) + 65536
          }
        },
        st = Q ? function(t) {
          return t.trimStart()
        } : function(t) {
          return t.replace(j, "")
        },
        nt = Z ? function(t) {
          return t.trimEnd()
        } : function(t) {
          return t.replace(G, "")
        };

      function at(t, e) {
        return new RegExp(t, e)
      }
      if ($) {
        var ot = at("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        J = function(t, e) {
          var i;
          return ot.lastIndex = e, null !== (i = ot.exec(t)[1]) && void 0 !== i ? i : ""
        }
      } else J = function(t, e) {
        for (var i = [];;) {
          var r = rt(t, e);
          if (void 0 === r || pt(r) || lt(r)) break;
          i.push(r), e += r >= 65536 ? 2 : 1
        }
        return et.apply(void 0, i)
      };
      var ht = function() {
        function t(t, e) {
          void 0 === e && (e = {}), this.message = t, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
        }
        return t.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, t.prototype.parseMessage = function(t, e, i) {
          for (var r = []; !this.isEOF();) {
            var s = this.char();
            if (123 === s) {
              if ((n = this.parseArgument(t, i)).err) return n;
              r.push(n.val)
            } else {
              if (125 === s && t > 0) break;
              if (35 !== s || "plural" !== e && "selectordinal" !== e) {
                if (60 === s && !this.ignoreTag && 47 === this.peek()) {
                  if (i) break;
                  return this.error(c.UNMATCHED_CLOSING_TAG, W(this.clonePosition(), this.clonePosition()))
                }
                if (60 === s && !this.ignoreTag && ct(this.peek() || 0)) {
                  if ((n = this.parseTag(t, e)).err) return n;
                  r.push(n.val)
                } else {
                  var n;
                  if ((n = this.parseLiteral(t, e)).err) return n;
                  r.push(n.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: p.pound,
                  location: W(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, t.prototype.parseTag = function(t, e) {
          var i = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: p.literal,
              value: "<".concat(r, "/>"),
              location: W(i, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var s = this.parseMessage(t + 1, e, !0);
            if (s.err) return s;
            var n = s.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ct(this.char())) return this.error(c.INVALID_TAG, W(a, this.clonePosition()));
              var o = this.clonePosition();
              return r !== this.parseTagName() ? this.error(c.UNMATCHED_CLOSING_TAG, W(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: p.tag,
                  value: r,
                  children: n,
                  location: W(i, this.clonePosition())
                },
                err: null
              } : this.error(c.INVALID_TAG, W(a, this.clonePosition())))
            }
            return this.error(c.UNCLOSED_TAG, W(i, this.clonePosition()))
          }
          return this.error(c.INVALID_TAG, W(i, this.clonePosition()))
        }, t.prototype.parseTagName = function() {
          var t, e = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (t = this.char()) || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039);) this.bump();
          return this.message.slice(e, this.offset())
        }, t.prototype.parseLiteral = function(t, e) {
          for (var i = this.clonePosition(), r = "";;) {
            var s = this.tryParseQuote(e);
            if (s) r += s;
            else {
              var n = this.tryParseUnquoted(t, e);
              if (n) r += n;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var o = W(i, this.clonePosition());
          return {
            val: {
              type: p.literal,
              value: r,
              location: o
            },
            err: null
          }
        }, t.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ct(t = this.peek() || 0) || 47 === t) ? null : (this.bump(), "<");
          var t
        }, t.prototype.tryParseQuote = function(t) {
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
              if ("plural" === t || "selectordinal" === t) break;
              return null;
            default:
              return null
          }
          this.bump();
          var e = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var i = this.char();
            if (39 === i) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              e.push(39), this.bump()
            } else e.push(i);
            this.bump()
          }
          return et.apply(void 0, e)
        }, t.prototype.tryParseUnquoted = function(t, e) {
          if (this.isEOF()) return null;
          var i = this.char();
          return 60 === i || 123 === i || 35 === i && ("plural" === e || "selectordinal" === e) || 125 === i && t > 0 ? null : (this.bump(), et(i))
        }, t.prototype.parseArgument = function(t, e) {
          var i = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, W(i, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(c.EMPTY_ARGUMENT, W(i, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(c.MALFORMED_ARGUMENT, W(i, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, W(i, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: p.argument,
                  value: r,
                  location: W(i, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, W(i, this.clonePosition())) : this.parseArgumentOptions(t, e, r, i);
            default:
              return this.error(c.MALFORMED_ARGUMENT, W(i, this.clonePosition()))
          }
        }, t.prototype.parseIdentifierIfPossible = function() {
          var t = this.clonePosition(),
            e = this.offset(),
            i = J(this.message, e),
            r = e + i.length;
          return this.bumpTo(r), {
            value: i,
            location: W(t, this.clonePosition())
          }
        }, t.prototype.parseArgumentOptions = function(t, e, i, r) {
          var s, a = this.clonePosition(),
            o = this.parseIdentifierIfPossible().value,
            h = this.clonePosition();
          switch (o) {
            case "":
              return this.error(c.EXPECT_ARGUMENT_TYPE, W(a, h));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var u = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var f = this.clonePosition();
                if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
                if (0 === (y = nt(_.val)).length) return this.error(c.EXPECT_ARGUMENT_STYLE, W(this.clonePosition(), this.clonePosition()));
                u = {
                  style: y,
                  styleLocation: W(f, this.clonePosition())
                }
              }
              if ((E = this.tryParseArgumentClose(r)).err) return E;
              var d = W(r, this.clonePosition());
              if (u && tt(null == u ? void 0 : u.style, "::", 0)) {
                var m = st(u.style.slice(2));
                if ("number" === o) return (_ = this.parseNumberSkeletonFromString(m, u.styleLocation)).err ? _ : {
                  val: {
                    type: p.number,
                    value: i,
                    location: d,
                    style: _.val
                  },
                  err: null
                };
                if (0 === m.length) return this.error(c.EXPECT_DATE_TIME_SKELETON, d);
                var g = m;
                this.locale && (g = function(t, e) {
                  for (var i = "", r = 0; r < t.length; r++) {
                    var s = t.charAt(r);
                    if ("j" === s) {
                      for (var n = 0; r + 1 < t.length && t.charAt(r + 1) === s;) n++, r++;
                      var a = 1 + (1 & n),
                        o = n < 2 ? 1 : 3 + (n >> 1),
                        h = F(e);
                      for ("H" != h && "k" != h || (o = 0); o-- > 0;) i += "a";
                      for (; a-- > 0;) i = h + i
                    } else i += "J" === s ? "H" : s
                  }
                  return i
                }(m, this.locale));
                var y = {
                  type: l.dateTime,
                  pattern: g,
                  location: u.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? T(g) : {}
                };
                return {
                  val: {
                    type: "date" === o ? p.date : p.time,
                    value: i,
                    location: d,
                    style: y
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === o ? p.number : "date" === o ? p.date : p.time,
                  value: i,
                  location: d,
                  style: null !== (s = null == u ? void 0 : u.style) && void 0 !== s ? s : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var v = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(c.EXPECT_SELECT_ARGUMENT_OPTIONS, W(v, n({}, v)));
              this.bumpSpace();
              var x = this.parseIdentifierIfPossible(),
                b = 0;
              if ("select" !== o && "offset" === x.value) {
                if (!this.bumpIf(":")) return this.error(c.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, W(this.clonePosition(), this.clonePosition()));
                var _;
                if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(c.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, c.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
                this.bumpSpace(), x = this.parseIdentifierIfPossible(), b = _.val
              }
              var E, S = this.tryParsePluralOrSelectOptions(t, o, e, x);
              if (S.err) return S;
              if ((E = this.tryParseArgumentClose(r)).err) return E;
              var w = W(r, this.clonePosition());
              return "select" === o ? {
                val: {
                  type: p.select,
                  value: i,
                  options: it(S.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: p.plural,
                  value: i,
                  options: it(S.val),
                  offset: b,
                  pluralType: "plural" === o ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(c.INVALID_ARGUMENT_TYPE, W(a, h))
          }
        }, t.prototype.tryParseArgumentClose = function(t) {
          return this.isEOF() || 125 !== this.char() ? this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, W(t, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, t.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var t = 0, e = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var i = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(c.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, W(i, this.clonePosition()));
              this.bump();
              break;
            case 123:
              t += 1, this.bump();
              break;
            case 125:
              if (!(t > 0)) return {
                val: this.message.slice(e.offset, this.offset()),
                err: null
              };
              t -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(e.offset, this.offset()),
            err: null
          }
        }, t.prototype.parseNumberSkeletonFromString = function(t, e) {
          var i = [];
          try {
            i = function(t) {
              if (0 === t.length) throw new Error("Number skeleton cannot be empty");
              for (var e = [], i = 0, r = t.split(I).filter((function(t) {
                  return t.length > 0
                })); i < r.length; i++) {
                var s = r[i].split("/");
                if (0 === s.length) throw new Error("Invalid number skeleton");
                for (var n = s[0], a = s.slice(1), o = 0, h = a; o < h.length; o++)
                  if (0 === h[o].length) throw new Error("Invalid number skeleton");
                e.push({
                  stem: n,
                  options: a
                })
              }
              return e
            }(t)
          } catch (t) {
            return this.error(c.INVALID_NUMBER_SKELETON, e)
          }
          return {
            val: {
              type: l.number,
              tokens: i,
              location: e,
              parsedOptions: this.shouldParseSkeletons ? D(i) : {}
            },
            err: null
          }
        }, t.prototype.tryParsePluralOrSelectOptions = function(t, e, i, r) {
          for (var s, n = !1, a = [], o = new Set, h = r.value, p = r.location;;) {
            if (0 === h.length) {
              var l = this.clonePosition();
              if ("select" === e || !this.bumpIf("=")) break;
              var u = this.tryParseDecimalInteger(c.EXPECT_PLURAL_ARGUMENT_SELECTOR, c.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (u.err) return u;
              p = W(l, this.clonePosition()), h = this.message.slice(l.offset, this.offset())
            }
            if (o.has(h)) return this.error("select" === e ? c.DUPLICATE_SELECT_ARGUMENT_SELECTOR : c.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, p);
            "other" === h && (n = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === e ? c.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : c.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, W(this.clonePosition(), this.clonePosition()));
            var d = this.parseMessage(t + 1, e, i);
            if (d.err) return d;
            var m = this.tryParseArgumentClose(f);
            if (m.err) return m;
            a.push([h, {
              value: d.val,
              location: W(f, this.clonePosition())
            }]), o.add(h), this.bumpSpace(), h = (s = this.parseIdentifierIfPossible()).value, p = s.location
          }
          return 0 === a.length ? this.error("select" === e ? c.EXPECT_SELECT_ARGUMENT_SELECTOR : c.EXPECT_PLURAL_ARGUMENT_SELECTOR, W(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !n ? this.error(c.MISSING_OTHER_CLAUSE, W(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, t.prototype.tryParseDecimalInteger = function(t, e) {
          var i = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (i = -1);
          for (var s = !1, n = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            s = !0, n = 10 * n + (a - 48), this.bump()
          }
          var o = W(r, this.clonePosition());
          return s ? Y(n *= i) ? {
            val: n,
            err: null
          } : this.error(e, o) : this.error(t, o)
        }, t.prototype.offset = function() {
          return this.position.offset
        }, t.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, t.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, t.prototype.char = function() {
          var t = this.position.offset;
          if (t >= this.message.length) throw Error("out of bound");
          var e = rt(this.message, t);
          if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
          return e
        }, t.prototype.error = function(t, e) {
          return {
            val: null,
            err: {
              kind: t,
              message: this.message,
              location: e
            }
          }
        }, t.prototype.bump = function() {
          if (!this.isEOF()) {
            var t = this.char();
            10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
          }
        }, t.prototype.bumpIf = function(t) {
          if (tt(this.message, t, this.offset())) {
            for (var e = 0; e < t.length; e++) this.bump();
            return !0
          }
          return !1
        }, t.prototype.bumpUntil = function(t) {
          var e = this.offset(),
            i = this.message.indexOf(t, e);
          return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1)
        }, t.prototype.bumpTo = function(t) {
          if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (t = Math.min(t, this.message.length);;) {
            var e = this.offset();
            if (e === t) break;
            if (e > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, t.prototype.bumpSpace = function() {
          for (; !this.isEOF() && pt(this.char());) this.bump()
        }, t.prototype.peek = function() {
          if (this.isEOF()) return null;
          var t = this.char(),
            e = this.offset(),
            i = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
          return null != i ? i : null
        }, t
      }();

      function ct(t) {
        return t >= 97 && t <= 122 || t >= 65 && t <= 90
      }

      function pt(t) {
        return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t
      }

      function lt(t) {
        return t >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094
      }

      function ut(t) {
        t.forEach((function(t) {
          if (delete t.location, b(t) || _(t))
            for (var e in t.options) delete t.options[e].location, ut(t.options[e].value);
          else y(t) && w(t.style) || (v(t) || x(t)) && k(t.style) ? delete t.style.location : S(t) && ut(t.children)
        }))
      }

      function ft(t, e) {
        void 0 === e && (e = {}), e = n({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, e);
        var i = new ht(t, e).parse();
        if (i.err) {
          var r = SyntaxError(c[i.err.kind]);
          throw r.location = i.err.location, r.originalMessage = i.err.message, r
        }
        return (null == e ? void 0 : e.captureLocation) || ut(i.val), i.val
      }

      function dt(t, e) {
        var i = e && e.cache ? e.cache : Et,
          r = e && e.serializer ? e.serializer : xt;
        return (e && e.strategy ? e.strategy : vt)(t, {
          cache: i,
          serializer: r
        })
      }

      function mt(t, e, i, r) {
        var s, n = null == (s = r) || "number" == typeof s || "boolean" == typeof s ? r : i(r),
          a = e.get(n);
        return void 0 === a && (a = t.call(this, r), e.set(n, a)), a
      }

      function gt(t, e, i) {
        var r = Array.prototype.slice.call(arguments, 3),
          s = i(r),
          n = e.get(s);
        return void 0 === n && (n = t.apply(this, r), e.set(s, n)), n
      }

      function yt(t, e, i, r, s) {
        return i.bind(e, t, r, s)
      }

      function vt(t, e) {
        return yt(t, this, 1 === t.length ? mt : gt, e.cache.create(), e.serializer)
      }
      var xt = function() {
        return JSON.stringify(arguments)
      };

      function bt() {
        this.cache = Object.create(null)
      }
      bt.prototype.get = function(t) {
        return this.cache[t]
      }, bt.prototype.set = function(t, e) {
        this.cache[t] = e
      };
      var _t, Et = {
          create: function() {
            return new bt
          }
        },
        St = {
          variadic: function(t, e) {
            return yt(t, this, gt, e.cache.create(), e.serializer)
          },
          monadic: function(t, e) {
            return yt(t, this, mt, e.cache.create(), e.serializer)
          }
        };
      ! function(t) {
        t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API"
      }(_t || (_t = {}));
      var wt, kt = function(t) {
          function e(e, i, r) {
            var s = t.call(this, e) || this;
            return s.code = i, s.originalMessage = r, s
          }
          return s(e, t), e.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, e
        }(Error),
        Ct = function(t) {
          function e(e, i, r, s) {
            return t.call(this, 'Invalid values for "'.concat(e, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), _t.INVALID_VALUE, s) || this
          }
          return s(e, t), e
        }(kt),
        At = function(t) {
          function e(e, i, r) {
            return t.call(this, 'Value for "'.concat(e, '" must be of type ').concat(i), _t.INVALID_VALUE, r) || this
          }
          return s(e, t), e
        }(kt),
        Tt = function(t) {
          function e(e, i) {
            return t.call(this, 'The intl string context variable "'.concat(e, '" was not provided to the string "').concat(i, '"'), _t.MISSING_VALUE, i) || this
          }
          return s(e, t), e
        }(kt);

      function It(t) {
        return "function" == typeof t
      }

      function Pt(t, e, i, r, s, n, a) {
        if (1 === t.length && m(t[0])) return [{
          type: wt.literal,
          value: t[0].value
        }];
        for (var o = [], h = 0, c = t; h < c.length; h++) {
          var p = c[h];
          if (m(p)) o.push({
            type: wt.literal,
            value: p.value
          });
          else if (E(p)) "number" == typeof n && o.push({
            type: wt.literal,
            value: i.getNumberFormat(e).format(n)
          });
          else {
            var l = p.value;
            if (!s || !(l in s)) throw new Tt(l, a);
            var u = s[l];
            if (g(p)) u && "string" != typeof u && "number" != typeof u || (u = "string" == typeof u || "number" == typeof u ? String(u) : ""), o.push({
              type: "string" == typeof u ? wt.literal : wt.object,
              value: u
            });
            else if (v(p)) {
              var f = "string" == typeof p.style ? r.date[p.style] : k(p.style) ? p.style.parsedOptions : void 0;
              o.push({
                type: wt.literal,
                value: i.getDateTimeFormat(e, f).format(u)
              })
            } else if (x(p)) f = "string" == typeof p.style ? r.time[p.style] : k(p.style) ? p.style.parsedOptions : r.time.medium, o.push({
              type: wt.literal,
              value: i.getDateTimeFormat(e, f).format(u)
            });
            else if (y(p))(f = "string" == typeof p.style ? r.number[p.style] : w(p.style) ? p.style.parsedOptions : void 0) && f.scale && (u *= f.scale || 1), o.push({
              type: wt.literal,
              value: i.getNumberFormat(e, f).format(u)
            });
            else {
              if (S(p)) {
                var d = p.children,
                  C = p.value,
                  A = s[C];
                if (!It(A)) throw new At(C, "function", a);
                var T = A(Pt(d, e, i, r, s, n).map((function(t) {
                  return t.value
                })));
                Array.isArray(T) || (T = [T]), o.push.apply(o, T.map((function(t) {
                  return {
                    type: "string" == typeof t ? wt.literal : wt.object,
                    value: t
                  }
                })))
              }
              if (b(p)) {
                if (!(I = p.options[u] || p.options.other)) throw new Ct(p.value, u, Object.keys(p.options), a);
                o.push.apply(o, Pt(I.value, e, i, r, s))
              } else if (_(p)) {
                var I;
                if (!(I = p.options["=".concat(u)])) {
                  if (!Intl.PluralRules) throw new kt('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', _t.MISSING_INTL_API, a);
                  var P = i.getPluralRules(e, {
                    type: p.pluralType
                  }).select(u - (p.offset || 0));
                  I = p.options[P] || p.options.other
                }
                if (!I) throw new Ct(p.value, u, Object.keys(p.options), a);
                o.push.apply(o, Pt(I.value, e, i, r, s, u - (p.offset || 0)))
              }
            }
          }
        }
        return (N = o).length < 2 ? N : N.reduce((function(t, e) {
          var i = t[t.length - 1];
          return i && i.type === wt.literal && e.type === wt.literal ? i.value += e.value : t.push(e), t
        }), []);
        var N
      }

      function Nt(t) {
        return {
          create: function() {
            return {
              get: function(e) {
                return t[e]
              },
              set: function(e, i) {
                t[e] = i
              }
            }
          }
        }
      }! function(t) {
        t[t.literal = 0] = "literal", t[t.object = 1] = "object"
      }(wt || (wt = {}));
      var Lt, Ot = function() {
        function t(e, i, r, s) {
          void 0 === i && (i = t.defaultLocale);
          var h, c, p, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(t) {
              var e = l.formatToParts(t);
              if (1 === e.length) return e[0].value;
              var i = e.reduce((function(t, e) {
                return t.length && e.type === wt.literal && "string" == typeof t[t.length - 1] ? t[t.length - 1] += e.value : t.push(e.value), t
              }), []);
              return i.length <= 1 ? i[0] || "" : i
            }, this.formatToParts = function(t) {
              return Pt(l.ast, l.locales, l.formatters, l.formats, t, void 0, l.message)
            }, this.resolvedOptions = function() {
              var t;
              return {
                locale: (null === (t = l.resolvedLocale) || void 0 === t ? void 0 : t.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = i, this.resolvedLocale = t.resolveLocale(i), "string" == typeof e) {
            if (this.message = e, !t.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var u = s || {},
              f = (u.formatters, a(u, ["formatters"]));
            this.ast = t.__parse(e, n(n({}, f), {
              locale: this.resolvedLocale
            }))
          } else this.ast = e;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (c = t.formats, (p = r) ? Object.keys(c).reduce((function(t, e) {
            var i, r;
            return t[e] = (i = c[e], (r = p[e]) ? n(n(n({}, i || {}), r || {}), Object.keys(i).reduce((function(t, e) {
              return t[e] = n(n({}, i[e]), r[e] || {}), t
            }), {})) : i), t
          }), n({}, c)) : c), this.formatters = s && s.formatters || (void 0 === (h = this.formatterCache) && (h = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: dt((function() {
              for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
              return new((t = Intl.NumberFormat).bind.apply(t, o([void 0], e, !1)))
            }), {
              cache: Nt(h.number),
              strategy: St.variadic
            }),
            getDateTimeFormat: dt((function() {
              for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
              return new((t = Intl.DateTimeFormat).bind.apply(t, o([void 0], e, !1)))
            }), {
              cache: Nt(h.dateTime),
              strategy: St.variadic
            }),
            getPluralRules: dt((function() {
              for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
              return new((t = Intl.PluralRules).bind.apply(t, o([void 0], e, !1)))
            }), {
              cache: Nt(h.pluralRules),
              strategy: St.variadic
            })
          })
        }
        return Object.defineProperty(t, "defaultLocale", {
          get: function() {
            return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), t.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), t.memoizedDefaultLocale = null, t.resolveLocale = function(t) {
          if (void 0 !== Intl.Locale) {
            var e = Intl.NumberFormat.supportedLocalesOf(t);
            return e.length > 0 ? new Intl.Locale(e[0]) : new Intl.Locale("string" == typeof t ? t : t[0])
          }
        }, t.__parse = ft, t.formats = {
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
        }, t
      }();
      ! function(t) {
        t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(Lt || (Lt = {}));
      var Rt = function(t) {
          function e(i, r, s) {
            var n = this,
              a = s ? s instanceof Error ? s : new Error(String(s)) : void 0;
            return (n = t.call(this, "[@formatjs/intl Error ".concat(i, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = i, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(n, e), n
          }
          return s(e, t), e
        }(Error),
        Bt = function(t) {
          function e(e, i) {
            return t.call(this, Lt.UNSUPPORTED_FORMATTER, e, i) || this
          }
          return s(e, t), e
        }(Rt),
        Mt = function(t) {
          function e(e, i) {
            return t.call(this, Lt.INVALID_CONFIG, e, i) || this
          }
          return s(e, t), e
        }(Rt),
        Vt = function(t) {
          function e(e, i) {
            return t.call(this, Lt.MISSING_DATA, e, i) || this
          }
          return s(e, t), e
        }(Rt),
        Dt = function(t) {
          function e(e, i, r) {
            var s = t.call(this, Lt.FORMAT_ERROR, "".concat(e, "\nLocale: ").concat(i, "\n"), r) || this;
            return s.locale = i, s
          }
          return s(e, t), e
        }(Rt),
        Ht = function(t) {
          function e(e, i, r, s) {
            var n = t.call(this, "".concat(e, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), i, s) || this;
            return n.descriptor = r, n.locale = i, n
          }
          return s(e, t), e
        }(Dt),
        Ut = function(t) {
          function e(e, i) {
            var r = t.call(this, Lt.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(i, '", using ').concat(e.defaultMessage ? "default message (".concat("string" == typeof e.defaultMessage ? e.defaultMessage : e.defaultMessage.map((function(t) {
              var e;
              return null !== (e = t.value) && void 0 !== e ? e : JSON.stringify(t)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = e, r
          }
          return s(e, t), e
        }(Rt);

      function Ft(t, e, i) {
        return void 0 === i && (i = {}), e.reduce((function(e, r) {
          return r in t ? e[r] = t[r] : r in i && (e[r] = i[r]), e
        }), {})
      }
      var jt = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(t) {},
        onWarn: function(t) {}
      };

      function Gt(t) {
        return {
          create: function() {
            return {
              get: function(e) {
                return t[e]
              },
              set: function(e, i) {
                t[e] = i
              }
            }
          }
        }
      }

      function Wt(t, e, i, r) {
        var s, n = t && t[e];
        if (n && (s = n[i]), s) return s;
        r(new Bt("No ".concat(e, " format named: ").concat(i)))
      }
      var qt = n(n({}, jt), {
        textComponent: h.Fragment
      });

      function zt(t, e) {
        return Object.keys(t).reduce((function(i, r) {
          return i[r] = n({
            timeZone: e
          }, t[r]), i
        }), {})
      }

      function Xt(t, e) {
        return Object.keys(n(n({}, t), e)).reduce((function(i, r) {
          return i[r] = n(n({}, t[r] || {}), e[r] || {}), i
        }), {})
      }

      function Kt(t, e) {
        if (!e) return t;
        var i = Ot.formats;
        return n(n(n({}, i), t), {
          date: Xt(zt(i.date, e), zt(t.date || {}, e)),
          time: Xt(zt(i.time, e), zt(t.time || {}, e))
        })
      }
      var Qt = function(t, e, i, r, s) {
          var a = t.locale,
            o = t.formats,
            h = t.messages,
            c = t.defaultLocale,
            l = t.defaultFormats,
            u = t.fallbackOnEmptyString,
            f = t.onError,
            m = t.timeZone,
            g = t.defaultRichTextElements;
          void 0 === i && (i = {
            id: ""
          });
          var y = i.id,
            v = i.defaultMessage;
          d(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var x = String(y),
            b = h && Object.prototype.hasOwnProperty.call(h, x) && h[x];
          if (Array.isArray(b) && 1 === b.length && b[0].type === p.literal) return b[0].value;
          if (!r && b && "string" == typeof b && !g) return b.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = n(n({}, g), r || {}), o = Kt(o, m), l = Kt(l, m), !b) {
            if (!1 === u && "" === b) return b;
            if ((!v || a && a.toLowerCase() !== c.toLowerCase()) && f(new Ut(i, a)), v) try {
              return e.getMessageFormat(v, c, l, s).format(r)
            } catch (t) {
              return f(new Ht('Error formatting default message for: "'.concat(x, '", rendering default message verbatim'), a, i, t)), "string" == typeof v ? v : x
            }
            return x
          }
          try {
            return e.getMessageFormat(b, a, o, n({
              formatters: e
            }, s || {})).format(r)
          } catch (t) {
            f(new Ht('Error formatting message: "'.concat(x, '", using ').concat(v ? "default message" : "id", " as fallback."), a, i, t))
          }
          if (v) try {
            return e.getMessageFormat(v, c, l, s).format(r)
          } catch (t) {
            f(new Ht('Error formatting the default message for: "'.concat(x, '", rendering message verbatim'), a, i, t))
          }
          return "string" == typeof b ? b : "string" == typeof v ? v : x
        },
        Zt = ["style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];

      function Yt(t, e, i) {
        var r = t.locale,
          s = t.formats,
          n = t.onError;
        void 0 === i && (i = {});
        var a = i.format,
          o = a && Wt(s, "number", a, n) || {};
        return e(r, Ft(i, Zt, o))
      }

      function $t(t, e, i, r) {
        void 0 === r && (r = {});
        try {
          return Yt(t, e, r).format(i)
        } catch (e) {
          t.onError(new Dt("Error formatting number.", t.locale, e))
        }
        return String(i)
      }

      function Jt(t, e, i, r) {
        void 0 === r && (r = {});
        try {
          return Yt(t, e, r).formatToParts(i)
        } catch (e) {
          t.onError(new Dt("Error formatting number.", t.locale, e))
        }
        return []
      }
      var te = ["numeric", "style"];

      function ee(t, e, i, r, s) {
        void 0 === s && (s = {}), r || (r = "second"), Intl.RelativeTimeFormat || t.onError(new kt('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', _t.MISSING_INTL_API));
        try {
          return function(t, e, i) {
            var r = t.locale,
              s = t.formats,
              n = t.onError;
            void 0 === i && (i = {});
            var a = i.format,
              o = !!a && Wt(s, "relative", a, n) || {};
            return e(r, Ft(i, te, o))
          }(t, e, s).format(i, r)
        } catch (e) {
          t.onError(new Dt("Error formatting relative time.", t.locale, e))
        }
        return String(i)
      }
      var ie = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function re(t, e, i, r) {
        var s = t.locale,
          a = t.formats,
          o = t.onError,
          h = t.timeZone;
        void 0 === r && (r = {});
        var c = r.format,
          p = n(n({}, h && {
            timeZone: h
          }), c && Wt(a, e, c, o)),
          l = Ft(r, ie, p);
        return "time" !== e || l.hour || l.minute || l.second || l.timeStyle || l.dateStyle || (l = n(n({}, l), {
          hour: "numeric",
          minute: "numeric"
        })), i(s, l)
      }

      function se(t, e) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        var s = i[0],
          n = i[1],
          a = void 0 === n ? {} : n,
          o = "string" == typeof s ? new Date(s || 0) : s;
        try {
          return re(t, "date", e, a).format(o)
        } catch (e) {
          t.onError(new Dt("Error formatting date.", t.locale, e))
        }
        return String(o)
      }

      function ne(t, e) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        var s = i[0],
          n = i[1],
          a = void 0 === n ? {} : n,
          o = "string" == typeof s ? new Date(s || 0) : s;
        try {
          return re(t, "time", e, a).format(o)
        } catch (e) {
          t.onError(new Dt("Error formatting time.", t.locale, e))
        }
        return String(o)
      }

      function ae(t, e) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        var s = i[0],
          n = i[1],
          a = i[2],
          o = void 0 === a ? {} : a,
          h = t.timeZone,
          c = t.locale,
          p = t.onError,
          l = Ft(o, ie, h ? {
            timeZone: h
          } : {});
        try {
          return e(c, l).formatRange(s, n)
        } catch (e) {
          p(new Dt("Error formatting date time range.", t.locale, e))
        }
        return String(s)
      }

      function oe(t, e) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        var s = i[0],
          n = i[1],
          a = void 0 === n ? {} : n,
          o = "string" == typeof s ? new Date(s || 0) : s;
        try {
          return re(t, "date", e, a).formatToParts(o)
        } catch (e) {
          t.onError(new Dt("Error formatting date.", t.locale, e))
        }
        return []
      }

      function he(t, e) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        var s = i[0],
          n = i[1],
          a = void 0 === n ? {} : n,
          o = "string" == typeof s ? new Date(s || 0) : s;
        try {
          return re(t, "time", e, a).formatToParts(o)
        } catch (e) {
          t.onError(new Dt("Error formatting time.", t.locale, e))
        }
        return []
      }
      var ce = ["type"];

      function pe(t, e, i, r) {
        var s = t.locale,
          n = t.onError;
        void 0 === r && (r = {}), Intl.PluralRules || n(new kt('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', _t.MISSING_INTL_API));
        var a = Ft(r, ce);
        try {
          return e(s, a).select(i)
        } catch (t) {
          n(new Dt("Error formatting plural.", s, t))
        }
        return "other"
      }
      var le = ["type", "style"],
        ue = Date.now();

      function fe(t, e, i, r) {
        void 0 === r && (r = {});
        var s = de(t, e, i, r).reduce((function(t, e) {
          var i = e.value;
          return "string" != typeof i ? t.push(i) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += i : t.push(i), t
        }), []);
        return 1 === s.length ? s[0] : 0 === s.length ? "" : s
      }

      function de(t, e, i, r) {
        var s = t.locale,
          a = t.onError;
        void 0 === r && (r = {}), Intl.ListFormat || a(new kt('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', _t.MISSING_INTL_API));
        var o = Ft(r, le);
        try {
          var h = {},
            c = i.map((function(t, e) {
              if ("object" == typeof t) {
                var i = function(t) {
                  return "".concat(ue, "_").concat(t, "_").concat(ue)
                }(e);
                return h[i] = t, i
              }
              return String(t)
            }));
          return e(s, o).formatToParts(c).map((function(t) {
            return "literal" === t.type ? t : n(n({}, t), {
              value: h[t.value] || t.value
            })
          }))
        } catch (t) {
          a(new Dt("Error formatting list.", s, t))
        }
        return i
      }
      var me = ["style", "type", "fallback", "languageDisplay"];

      function ge(t, e, i, r) {
        var s = t.locale,
          n = t.onError;
        Intl.DisplayNames || n(new kt('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', _t.MISSING_INTL_API));
        var a = Ft(r, me);
        try {
          return e(s, a).of(i)
        } catch (t) {
          n(new Dt("Error formatting display name.", s, t))
        }
      }

      function ye(t, e) {
        var i = function(t) {
            void 0 === t && (t = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            });
            var e = Intl.RelativeTimeFormat,
              i = Intl.ListFormat,
              r = Intl.DisplayNames,
              s = dt((function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                return new((t = Intl.DateTimeFormat).bind.apply(t, o([void 0], e, !1)))
              }), {
                cache: Gt(t.dateTime),
                strategy: St.variadic
              }),
              a = dt((function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                return new((t = Intl.NumberFormat).bind.apply(t, o([void 0], e, !1)))
              }), {
                cache: Gt(t.number),
                strategy: St.variadic
              }),
              h = dt((function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                return new((t = Intl.PluralRules).bind.apply(t, o([void 0], e, !1)))
              }), {
                cache: Gt(t.pluralRules),
                strategy: St.variadic
              });
            return {
              getDateTimeFormat: s,
              getNumberFormat: a,
              getMessageFormat: dt((function(t, e, i, r) {
                return new Ot(t, e, i, n({
                  formatters: {
                    getNumberFormat: a,
                    getDateTimeFormat: s,
                    getPluralRules: h
                  }
                }, r || {}))
              }), {
                cache: Gt(t.message),
                strategy: St.variadic
              }),
              getRelativeTimeFormat: dt((function() {
                for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                return new(e.bind.apply(e, o([void 0], t, !1)))
              }), {
                cache: Gt(t.relativeTime),
                strategy: St.variadic
              }),
              getPluralRules: h,
              getListFormat: dt((function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new(i.bind.apply(i, o([void 0], t, !1)))
              }), {
                cache: Gt(t.list),
                strategy: St.variadic
              }),
              getDisplayNames: dt((function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new(r.bind.apply(r, o([void 0], t, !1)))
              }), {
                cache: Gt(t.displayNames),
                strategy: St.variadic
              })
            }
          }(e),
          r = n(n({}, jt), t),
          s = r.locale,
          a = r.defaultLocale,
          h = r.onError;
        return s ? !Intl.NumberFormat.supportedLocalesOf(s).length && h ? h(new Vt('Missing locale data for locale: "'.concat(s, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(s).length && h && h(new Vt('Missing locale data for locale: "'.concat(s, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (h && h(new Mt('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(t) {
            var e;
            t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), n(n({}, r), {
            formatters: i,
            formatNumber: $t.bind(null, r, i.getNumberFormat),
            formatNumberToParts: Jt.bind(null, r, i.getNumberFormat),
            formatRelativeTime: ee.bind(null, r, i.getRelativeTimeFormat),
            formatDate: se.bind(null, r, i.getDateTimeFormat),
            formatDateToParts: oe.bind(null, r, i.getDateTimeFormat),
            formatTime: ne.bind(null, r, i.getDateTimeFormat),
            formatDateTimeRange: ae.bind(null, r, i.getDateTimeFormat),
            formatTimeToParts: he.bind(null, r, i.getDateTimeFormat),
            formatPlural: pe.bind(null, r, i.getPluralRules),
            formatMessage: Qt.bind(null, r, i),
            $t: Qt.bind(null, r, i),
            formatList: fe.bind(null, r, i.getListFormat),
            formatListToParts: de.bind(null, r, i.getListFormat),
            formatDisplayName: ge.bind(null, r, i.getDisplayNames)
          })
      }

      function ve(t) {
        return {
          locale: t.locale,
          timeZone: t.timeZone,
          fallbackOnEmptyString: t.fallbackOnEmptyString,
          formats: t.formats,
          textComponent: t.textComponent,
          messages: t.messages,
          defaultLocale: t.defaultLocale,
          defaultFormats: t.defaultFormats,
          onError: t.onError,
          onWarn: t.onWarn,
          wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
          defaultRichTextElements: t.defaultRichTextElements
        }
      }

      function xe(t) {
        return t ? Object.keys(t).reduce((function(e, i) {
          var r, s = t[i];
          return e[i] = It(s) ? (r = s, function(t) {
            return r(h.Children.toArray(t))
          }) : s, e
        }), {}) : t
      }
      var be = function(t, e, i, r) {
          for (var s = [], n = 4; n < arguments.length; n++) s[n - 4] = arguments[n];
          var a = xe(r),
            c = Qt.apply(void 0, o([t, e, i, a], s, !1));
          return Array.isArray(c) ? h.Children.toArray(c) : c
        },
        _e = function(t, e) {
          var i = t.defaultRichTextElements,
            r = a(t, ["defaultRichTextElements"]),
            s = xe(i),
            o = ye(n(n(n({}, qt), r), {
              defaultRichTextElements: s
            }), e),
            h = {
              locale: o.locale,
              timeZone: o.timeZone,
              fallbackOnEmptyString: o.fallbackOnEmptyString,
              formats: o.formats,
              defaultLocale: o.defaultLocale,
              defaultFormats: o.defaultFormats,
              messages: o.messages,
              onError: o.onError,
              defaultRichTextElements: s
            };
          return n(n({}, o), {
            formatMessage: be.bind(null, h, o.formatters),
            $t: be.bind(null, h, o.formatters)
          })
        },
        Ee = function(t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.cache = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            }, e.state = {
              cache: e.cache,
              intl: _e(ve(e.props), e.cache),
              prevConfig: ve(e.props)
            }, e
          }
          return s(e, t), e.getDerivedStateFromProps = function(t, e) {
            var i = e.prevConfig,
              r = e.cache,
              s = ve(t);
            return function(t, e) {
              if (t === e) return !0;
              if (!t || !e) return !1;
              var i = Object.keys(t),
                r = Object.keys(e),
                s = i.length;
              if (r.length !== s) return !1;
              for (var n = 0; n < s; n++) {
                var a = i[n];
                if (t[a] !== e[a] || !Object.prototype.hasOwnProperty.call(e, a)) return !1
              }
              return !0
            }(i, s) ? null : {
              intl: _e(s, r),
              prevConfig: s
            }
          }, e.prototype.render = function() {
            return d(this.state.intl, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry."), h.createElement(f, {
              value: this.state.intl
            }, this.props.children)
          }, e.displayName = "IntlProvider", e.defaultProps = qt, e
        }(h.PureComponent);
      const Se = Ee
    },
    9885: function(t) {
      t.exports = function() {
        "use strict";

        function t(e) {
          return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, t(e)
        }

        function e(t, i) {
          return e = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
          }, e(t, i)
        }

        function i(t, r, s) {
          return i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }() ? Reflect.construct : function(t, i, r) {
            var s = [null];
            s.push.apply(s, i);
            var n = new(Function.bind.apply(t, s));
            return r && e(n, r.prototype), n
          }, i.apply(null, arguments)
        }

        function r(t) {
          return function(t) {
            if (Array.isArray(t)) return s(t)
          }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(t) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return s(t, e);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? s(t, e) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function s(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
          return r
        }
        var n = Object.hasOwnProperty,
          a = Object.setPrototypeOf,
          o = Object.isFrozen,
          h = Object.getPrototypeOf,
          c = Object.getOwnPropertyDescriptor,
          p = Object.freeze,
          l = Object.seal,
          u = Object.create,
          f = "undefined" != typeof Reflect && Reflect,
          d = f.apply,
          m = f.construct;
        d || (d = function(t, e, i) {
          return t.apply(e, i)
        }), p || (p = function(t) {
          return t
        }), l || (l = function(t) {
          return t
        }), m || (m = function(t, e) {
          return i(t, r(e))
        });
        var g, y = T(Array.prototype.forEach),
          v = T(Array.prototype.pop),
          x = T(Array.prototype.push),
          b = T(String.prototype.toLowerCase),
          _ = T(String.prototype.toString),
          E = T(String.prototype.match),
          S = T(String.prototype.replace),
          w = T(String.prototype.indexOf),
          k = T(String.prototype.trim),
          C = T(RegExp.prototype.test),
          A = (g = TypeError, function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return m(g, e)
          });

        function T(t) {
          return function(e) {
            for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s];
            return d(t, e, r)
          }
        }

        function I(t, e, i) {
          var r;
          i = null !== (r = i) && void 0 !== r ? r : b, a && a(t, null);
          for (var s = e.length; s--;) {
            var n = e[s];
            if ("string" == typeof n) {
              var h = i(n);
              h !== n && (o(e) || (e[s] = h), n = h)
            }
            t[n] = !0
          }
          return t
        }

        function P(t) {
          var e, i = u(null);
          for (e in t) !0 === d(n, t, [e]) && (i[e] = t[e]);
          return i
        }

        function N(t, e) {
          for (; null !== t;) {
            var i = c(t, e);
            if (i) {
              if (i.get) return T(i.get);
              if ("function" == typeof i.value) return T(i.value)
            }
            t = h(t)
          }
          return function(t) {
            return console.warn("fallback value for", t), null
          }
        }
        var L = p(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          O = p(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          R = p(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          B = p(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          M = p(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          V = p(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          D = p(["#text"]),
          H = p(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          U = p(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          F = p(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          j = p(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          G = l(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = l(/<%[\w\W]*|[\w\W]*%>/gm),
          q = l(/\${[\w\W]*}/gm),
          z = l(/^data-[\-\w.\u00B7-\uFFFF]/),
          X = l(/^aria-[\-\w]+$/),
          K = l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          Q = l(/^(?:\w+script|data):/i),
          Z = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Y = l(/^html$/i),
          $ = function() {
            return "undefined" == typeof window ? null : window
          };
        return function e() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $(),
            s = function(t) {
              return e(t)
            };
          if (s.version = "2.4.7", s.removed = [], !i || !i.document || 9 !== i.document.nodeType) return s.isSupported = !1, s;
          var n = i.document,
            a = i.document,
            o = i.DocumentFragment,
            h = i.HTMLTemplateElement,
            c = i.Node,
            l = i.Element,
            u = i.NodeFilter,
            f = i.NamedNodeMap,
            d = void 0 === f ? i.NamedNodeMap || i.MozNamedAttrMap : f,
            m = i.HTMLFormElement,
            g = i.DOMParser,
            T = i.trustedTypes,
            J = l.prototype,
            tt = N(J, "cloneNode"),
            et = N(J, "nextSibling"),
            it = N(J, "childNodes"),
            rt = N(J, "parentNode");
          if ("function" == typeof h) {
            var st = a.createElement("template");
            st.content && st.content.ownerDocument && (a = st.content.ownerDocument)
          }
          var nt = function(e, i) {
              if ("object" !== t(e) || "function" != typeof e.createPolicy) return null;
              var r = null,
                s = "data-tt-policy-suffix";
              i.currentScript && i.currentScript.hasAttribute(s) && (r = i.currentScript.getAttribute(s));
              var n = "dompurify" + (r ? "#" + r : "");
              try {
                return e.createPolicy(n, {
                  createHTML: function(t) {
                    return t
                  },
                  createScriptURL: function(t) {
                    return t
                  }
                })
              } catch (t) {
                return console.warn("TrustedTypes policy " + n + " could not be created."), null
              }
            }(T, n),
            at = nt ? nt.createHTML("") : "",
            ot = a,
            ht = ot.implementation,
            ct = ot.createNodeIterator,
            pt = ot.createDocumentFragment,
            lt = ot.getElementsByTagName,
            ut = n.importNode,
            ft = {};
          try {
            ft = P(a).documentMode ? a.documentMode : {}
          } catch (t) {}
          var dt = {};
          s.isSupported = "function" == typeof rt && ht && void 0 !== ht.createHTMLDocument && 9 !== ft;
          var mt, gt, yt = G,
            vt = W,
            xt = q,
            bt = z,
            _t = X,
            Et = Q,
            St = Z,
            wt = K,
            kt = null,
            Ct = I({}, [].concat(r(L), r(O), r(R), r(M), r(D))),
            At = null,
            Tt = I({}, [].concat(r(H), r(U), r(F), r(j))),
            It = Object.seal(Object.create(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
              }
            })),
            Pt = null,
            Nt = null,
            Lt = !0,
            Ot = !0,
            Rt = !1,
            Bt = !0,
            Mt = !1,
            Vt = !1,
            Dt = !1,
            Ht = !1,
            Ut = !1,
            Ft = !1,
            jt = !1,
            Gt = !0,
            Wt = !1,
            qt = !0,
            zt = !1,
            Xt = {},
            Kt = null,
            Qt = I({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Zt = null,
            Yt = I({}, ["audio", "video", "img", "source", "image", "track"]),
            $t = null,
            Jt = I({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            te = "http://www.w3.org/1998/Math/MathML",
            ee = "http://www.w3.org/2000/svg",
            ie = "http://www.w3.org/1999/xhtml",
            re = ie,
            se = !1,
            ne = null,
            ae = I({}, [te, ee, ie], _),
            oe = ["application/xhtml+xml", "text/html"],
            he = null,
            ce = a.createElement("form"),
            pe = function(t) {
              return t instanceof RegExp || t instanceof Function
            },
            le = function(e) {
              he && he === e || (e && "object" === t(e) || (e = {}), e = P(e), mt = mt = -1 === oe.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, gt = "application/xhtml+xml" === mt ? _ : b, kt = "ALLOWED_TAGS" in e ? I({}, e.ALLOWED_TAGS, gt) : Ct, At = "ALLOWED_ATTR" in e ? I({}, e.ALLOWED_ATTR, gt) : Tt, ne = "ALLOWED_NAMESPACES" in e ? I({}, e.ALLOWED_NAMESPACES, _) : ae, $t = "ADD_URI_SAFE_ATTR" in e ? I(P(Jt), e.ADD_URI_SAFE_ATTR, gt) : Jt, Zt = "ADD_DATA_URI_TAGS" in e ? I(P(Yt), e.ADD_DATA_URI_TAGS, gt) : Yt, Kt = "FORBID_CONTENTS" in e ? I({}, e.FORBID_CONTENTS, gt) : Qt, Pt = "FORBID_TAGS" in e ? I({}, e.FORBID_TAGS, gt) : {}, Nt = "FORBID_ATTR" in e ? I({}, e.FORBID_ATTR, gt) : {}, Xt = "USE_PROFILES" in e && e.USE_PROFILES, Lt = !1 !== e.ALLOW_ARIA_ATTR, Ot = !1 !== e.ALLOW_DATA_ATTR, Rt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Bt = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Mt = e.SAFE_FOR_TEMPLATES || !1, Vt = e.WHOLE_DOCUMENT || !1, Ut = e.RETURN_DOM || !1, Ft = e.RETURN_DOM_FRAGMENT || !1, jt = e.RETURN_TRUSTED_TYPE || !1, Ht = e.FORCE_BODY || !1, Gt = !1 !== e.SANITIZE_DOM, Wt = e.SANITIZE_NAMED_PROPS || !1, qt = !1 !== e.KEEP_CONTENT, zt = e.IN_PLACE || !1, wt = e.ALLOWED_URI_REGEXP || wt, re = e.NAMESPACE || ie, It = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && pe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (It.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && pe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (It.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (It.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Mt && (Ot = !1), Ft && (Ut = !0), Xt && (kt = I({}, r(D)), At = [], !0 === Xt.html && (I(kt, L), I(At, H)), !0 === Xt.svg && (I(kt, O), I(At, U), I(At, j)), !0 === Xt.svgFilters && (I(kt, R), I(At, U), I(At, j)), !0 === Xt.mathMl && (I(kt, M), I(At, F), I(At, j))), e.ADD_TAGS && (kt === Ct && (kt = P(kt)), I(kt, e.ADD_TAGS, gt)), e.ADD_ATTR && (At === Tt && (At = P(At)), I(At, e.ADD_ATTR, gt)), e.ADD_URI_SAFE_ATTR && I($t, e.ADD_URI_SAFE_ATTR, gt), e.FORBID_CONTENTS && (Kt === Qt && (Kt = P(Kt)), I(Kt, e.FORBID_CONTENTS, gt)), qt && (kt["#text"] = !0), Vt && I(kt, ["html", "head", "body"]), kt.table && (I(kt, ["tbody"]), delete Pt.tbody), p && p(e), he = e)
            },
            ue = I({}, ["mi", "mo", "mn", "ms", "mtext"]),
            fe = I({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            de = I({}, ["title", "style", "font", "a", "script"]),
            me = I({}, O);
          I(me, R), I(me, B);
          var ge = I({}, M);
          I(ge, V);
          var ye = function(t) {
              x(s.removed, {
                element: t
              });
              try {
                t.parentNode.removeChild(t)
              } catch (e) {
                try {
                  t.outerHTML = at
                } catch (e) {
                  t.remove()
                }
              }
            },
            ve = function(t, e) {
              try {
                x(s.removed, {
                  attribute: e.getAttributeNode(t),
                  from: e
                })
              } catch (t) {
                x(s.removed, {
                  attribute: null,
                  from: e
                })
              }
              if (e.removeAttribute(t), "is" === t && !At[t])
                if (Ut || Ft) try {
                  ye(e)
                } catch (t) {} else try {
                  e.setAttribute(t, "")
                } catch (t) {}
            },
            xe = function(t) {
              var e, i;
              if (Ht) t = "<remove></remove>" + t;
              else {
                var r = E(t, /^[\r\n\t ]+/);
                i = r && r[0]
              }
              "application/xhtml+xml" === mt && re === ie && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
              var s = nt ? nt.createHTML(t) : t;
              if (re === ie) try {
                e = (new g).parseFromString(s, mt)
              } catch (t) {}
              if (!e || !e.documentElement) {
                e = ht.createDocument(re, "template", null);
                try {
                  e.documentElement.innerHTML = se ? at : s
                } catch (t) {}
              }
              var n = e.body || e.documentElement;
              return t && i && n.insertBefore(a.createTextNode(i), n.childNodes[0] || null), re === ie ? lt.call(e, Vt ? "html" : "body")[0] : Vt ? e.documentElement : n
            },
            be = function(t) {
              return ct.call(t.ownerDocument || t, t, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1)
            },
            _e = function(e) {
              return "object" === t(c) ? e instanceof c : e && "object" === t(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            },
            Ee = function(t, e, i) {
              dt[t] && y(dt[t], (function(t) {
                t.call(s, e, i, he)
              }))
            },
            Se = function(t) {
              var e, i;
              if (Ee("beforeSanitizeElements", t, null), (i = t) instanceof m && ("string" != typeof i.nodeName || "string" != typeof i.textContent || "function" != typeof i.removeChild || !(i.attributes instanceof d) || "function" != typeof i.removeAttribute || "function" != typeof i.setAttribute || "string" != typeof i.namespaceURI || "function" != typeof i.insertBefore || "function" != typeof i.hasChildNodes)) return ye(t), !0;
              if (C(/[\u0080-\uFFFF]/, t.nodeName)) return ye(t), !0;
              var r = gt(t.nodeName);
              if (Ee("uponSanitizeElement", t, {
                  tagName: r,
                  allowedTags: kt
                }), t.hasChildNodes() && !_e(t.firstElementChild) && (!_e(t.content) || !_e(t.content.firstElementChild)) && C(/<[/\w]/g, t.innerHTML) && C(/<[/\w]/g, t.textContent)) return ye(t), !0;
              if ("select" === r && C(/<template/i, t.innerHTML)) return ye(t), !0;
              if (!kt[r] || Pt[r]) {
                if (!Pt[r] && ke(r)) {
                  if (It.tagNameCheck instanceof RegExp && C(It.tagNameCheck, r)) return !1;
                  if (It.tagNameCheck instanceof Function && It.tagNameCheck(r)) return !1
                }
                if (qt && !Kt[r]) {
                  var n = rt(t) || t.parentNode,
                    a = it(t) || t.childNodes;
                  if (a && n)
                    for (var o = a.length - 1; o >= 0; --o) n.insertBefore(tt(a[o], !0), et(t))
                }
                return ye(t), !0
              }
              return t instanceof l && ! function(t) {
                var e = rt(t);
                e && e.tagName || (e = {
                  namespaceURI: re,
                  tagName: "template"
                });
                var i = b(t.tagName),
                  r = b(e.tagName);
                return !!ne[t.namespaceURI] && (t.namespaceURI === ee ? e.namespaceURI === ie ? "svg" === i : e.namespaceURI === te ? "svg" === i && ("annotation-xml" === r || ue[r]) : Boolean(me[i]) : t.namespaceURI === te ? e.namespaceURI === ie ? "math" === i : e.namespaceURI === ee ? "math" === i && fe[r] : Boolean(ge[i]) : t.namespaceURI === ie ? !(e.namespaceURI === ee && !fe[r]) && !(e.namespaceURI === te && !ue[r]) && !ge[i] && (de[i] || !me[i]) : !("application/xhtml+xml" !== mt || !ne[t.namespaceURI]))
              }(t) ? (ye(t), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !C(/<\/no(script|embed|frames)/i, t.innerHTML) ? (Mt && 3 === t.nodeType && (e = t.textContent, e = S(e, yt, " "), e = S(e, vt, " "), e = S(e, xt, " "), t.textContent !== e && (x(s.removed, {
                element: t.cloneNode()
              }), t.textContent = e)), Ee("afterSanitizeElements", t, null), !1) : (ye(t), !0)
            },
            we = function(t, e, i) {
              if (Gt && ("id" === e || "name" === e) && (i in a || i in ce)) return !1;
              if (Ot && !Nt[e] && C(bt, e));
              else if (Lt && C(_t, e));
              else if (!At[e] || Nt[e]) {
                if (!(ke(t) && (It.tagNameCheck instanceof RegExp && C(It.tagNameCheck, t) || It.tagNameCheck instanceof Function && It.tagNameCheck(t)) && (It.attributeNameCheck instanceof RegExp && C(It.attributeNameCheck, e) || It.attributeNameCheck instanceof Function && It.attributeNameCheck(e)) || "is" === e && It.allowCustomizedBuiltInElements && (It.tagNameCheck instanceof RegExp && C(It.tagNameCheck, i) || It.tagNameCheck instanceof Function && It.tagNameCheck(i)))) return !1
              } else if ($t[e]);
              else if (C(wt, S(i, St, "")));
              else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== w(i, "data:") || !Zt[t])
                if (Rt && !C(Et, S(i, St, "")));
                else if (i) return !1;
              return !0
            },
            ke = function(t) {
              return t.indexOf("-") > 0
            },
            Ce = function(e) {
              var i, r, n, a;
              Ee("beforeSanitizeAttributes", e, null);
              var o = e.attributes;
              if (o) {
                var h = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: At
                };
                for (a = o.length; a--;) {
                  var c = i = o[a],
                    p = c.name,
                    l = c.namespaceURI;
                  if (r = "value" === p ? i.value : k(i.value), n = gt(p), h.attrName = n, h.attrValue = r, h.keepAttr = !0, h.forceKeepAttr = void 0, Ee("uponSanitizeAttribute", e, h), r = h.attrValue, !h.forceKeepAttr && (ve(p, e), h.keepAttr))
                    if (Bt || !C(/\/>/i, r)) {
                      Mt && (r = S(r, yt, " "), r = S(r, vt, " "), r = S(r, xt, " "));
                      var u = gt(e.nodeName);
                      if (we(u, n, r)) {
                        if (!Wt || "id" !== n && "name" !== n || (ve(p, e), r = "user-content-" + r), nt && "object" === t(T) && "function" == typeof T.getAttributeType)
                          if (l);
                          else switch (T.getAttributeType(u, n)) {
                            case "TrustedHTML":
                              r = nt.createHTML(r);
                              break;
                            case "TrustedScriptURL":
                              r = nt.createScriptURL(r)
                          }
                        try {
                          l ? e.setAttributeNS(l, p, r) : e.setAttribute(p, r), v(s.removed)
                        } catch (t) {}
                      }
                    } else ve(p, e)
                }
                Ee("afterSanitizeAttributes", e, null)
              }
            },
            Ae = function t(e) {
              var i, r = be(e);
              for (Ee("beforeSanitizeShadowDOM", e, null); i = r.nextNode();) Ee("uponSanitizeShadowNode", i, null), Se(i) || (i.content instanceof o && t(i.content), Ce(i));
              Ee("afterSanitizeShadowDOM", e, null)
            };
          return s.sanitize = function(e) {
            var r, a, h, p, l, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((se = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !_e(e)) {
              if ("function" != typeof e.toString) throw A("toString is not a function");
              if ("string" != typeof(e = e.toString())) throw A("dirty is not a string, aborting")
            }
            if (!s.isSupported) {
              if ("object" === t(i.toStaticHTML) || "function" == typeof i.toStaticHTML) {
                if ("string" == typeof e) return i.toStaticHTML(e);
                if (_e(e)) return i.toStaticHTML(e.outerHTML)
              }
              return e
            }
            if (Dt || le(u), s.removed = [], "string" == typeof e && (zt = !1), zt) {
              if (e.nodeName) {
                var f = gt(e.nodeName);
                if (!kt[f] || Pt[f]) throw A("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (e instanceof c) 1 === (a = (r = xe("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? r = a : r.appendChild(a);
            else {
              if (!Ut && !Mt && !Vt && -1 === e.indexOf("<")) return nt && jt ? nt.createHTML(e) : e;
              if (!(r = xe(e))) return Ut ? null : jt ? at : ""
            }
            r && Ht && ye(r.firstChild);
            for (var d = be(zt ? e : r); h = d.nextNode();) 3 === h.nodeType && h === p || Se(h) || (h.content instanceof o && Ae(h.content), Ce(h), p = h);
            if (p = null, zt) return e;
            if (Ut) {
              if (Ft)
                for (l = pt.call(r.ownerDocument); r.firstChild;) l.appendChild(r.firstChild);
              else l = r;
              return (At.shadowroot || At.shadowrootmod) && (l = ut.call(n, l, !0)), l
            }
            var m = Vt ? r.outerHTML : r.innerHTML;
            return Vt && kt["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && C(Y, r.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + m), Mt && (m = S(m, yt, " "), m = S(m, vt, " "), m = S(m, xt, " ")), nt && jt ? nt.createHTML(m) : m
          }, s.setConfig = function(t) {
            le(t), Dt = !0
          }, s.clearConfig = function() {
            he = null, Dt = !1
          }, s.isValidAttribute = function(t, e, i) {
            he || le({});
            var r = gt(t),
              s = gt(e);
            return we(r, s, i)
          }, s.addHook = function(t, e) {
            "function" == typeof e && (dt[t] = dt[t] || [], x(dt[t], e))
          }, s.removeHook = function(t) {
            if (dt[t]) return v(dt[t])
          }, s.removeHooks = function(t) {
            dt[t] && (dt[t] = [])
          }, s.removeAllHooks = function() {
            dt = {}
          }, s
        }()
      }()
    },
    7199: (t, e, i) => {
      "use strict";

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
          }
          return t
        }, r.apply(this, arguments)
      }

      function s(t) {
        return "/" === t.charAt(0)
      }

      function n(t, e) {
        for (var i = e, r = i + 1, s = t.length; r < s; i += 1, r += 1) t[i] = t[r];
        t.pop()
      }
      i.d(e, {
        lX: () => m
      });
      const a = function(t, e) {
        void 0 === e && (e = "");
        var i, r = t && t.split("/") || [],
          a = e && e.split("/") || [],
          o = t && s(t),
          h = e && s(e),
          c = o || h;
        if (t && s(t) ? a = r : r.length && (a.pop(), a = a.concat(r)), !a.length) return "/";
        if (a.length) {
          var p = a[a.length - 1];
          i = "." === p || ".." === p || "" === p
        } else i = !1;
        for (var l = 0, u = a.length; u >= 0; u--) {
          var f = a[u];
          "." === f ? n(a, u) : ".." === f ? (n(a, u), l++) : l && (n(a, u), l--)
        }
        if (!c)
          for (; l--; l) a.unshift("..");
        !c || "" === a[0] || a[0] && s(a[0]) || a.unshift("");
        var d = a.join("/");
        return i && "/" !== d.substr(-1) && (d += "/"), d
      };
      var o = !0,
        h = "Invariant failed";

      function c(t, e, i, s) {
        var n;
        "string" == typeof t ? (n = function(t) {
          var e = t || "/",
            i = "",
            r = "",
            s = e.indexOf("#"); - 1 !== s && (r = e.substr(s), e = e.substr(0, s));
          var n = e.indexOf("?");
          return -1 !== n && (i = e.substr(n), e = e.substr(0, n)), {
            pathname: e,
            search: "?" === i ? "" : i,
            hash: "#" === r ? "" : r
          }
        }(t), n.state = e) : (void 0 === (n = r({}, t)).pathname && (n.pathname = ""), n.search ? "?" !== n.search.charAt(0) && (n.search = "?" + n.search) : n.search = "", n.hash ? "#" !== n.hash.charAt(0) && (n.hash = "#" + n.hash) : n.hash = "", void 0 !== e && void 0 === n.state && (n.state = e));
        try {
          n.pathname = decodeURI(n.pathname)
        } catch (t) {
          throw t instanceof URIError ? new URIError('Pathname "' + n.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
        }
        return i && (n.key = i), s ? n.pathname ? "/" !== n.pathname.charAt(0) && (n.pathname = a(n.pathname, s.pathname)) : n.pathname = s.pathname : n.pathname || (n.pathname = "/"), n
      }
      var p = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function l(t, e) {
        e(window.confirm(t))
      }
      var u = "popstate",
        f = "hashchange";

      function d() {
        try {
          return window.history.state || {}
        } catch (t) {
          return {}
        }
      }

      function m(t) {
        void 0 === t && (t = {}), p || function(t, e) {
          if (o) throw new Error(h);
          throw new Error(h)
        }();
        var e, i, s = window.history,
          n = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          a = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          m = t,
          g = m.forceRefresh,
          y = void 0 !== g && g,
          v = m.getUserConfirmation,
          x = void 0 === v ? l : v,
          b = m.keyLength,
          _ = void 0 === b ? 6 : b,
          E = t.basename ? function(t) {
            return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
          }("/" === (i = t.basename).charAt(0) ? i : "/" + i) : "";

        function S(t) {
          var e = t || {},
            i = e.key,
            r = e.state,
            s = window.location,
            n = s.pathname + s.search + s.hash;
          return E && (n = function(t, e) {
            return function(t, e) {
              return 0 === t.toLowerCase().indexOf(e.toLowerCase()) && -1 !== "/?#".indexOf(t.charAt(e.length))
            }(t, e) ? t.substr(e.length) : t
          }(n, E)), c(n, r, i)
        }

        function w() {
          return Math.random().toString(36).substr(2, _)
        }
        var k, C, A = (k = null, C = [], {
          setPrompt: function(t) {
            return k = t,
              function() {
                k === t && (k = null)
              }
          },
          confirmTransitionTo: function(t, e, i, r) {
            if (null != k) {
              var s = "function" == typeof k ? k(t, e) : k;
              "string" == typeof s ? "function" == typeof i ? i(s, r) : r(!0) : r(!1 !== s)
            } else r(!0)
          },
          appendListener: function(t) {
            var e = !0;

            function i() {
              e && t.apply(void 0, arguments)
            }
            return C.push(i),
              function() {
                e = !1, C = C.filter((function(t) {
                  return t !== i
                }))
              }
          },
          notifyListeners: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            C.forEach((function(t) {
              return t.apply(void 0, e)
            }))
          }
        });

        function T(t) {
          r(U, t), U.length = s.length, A.notifyListeners(U.location, U.action)
        }

        function I(t) {
          (function(t) {
            return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(t) || L(S(t.state))
        }

        function P() {
          L(S(d()))
        }
        var N = !1;

        function L(t) {
          N ? (N = !1, T()) : A.confirmTransitionTo(t, "POP", x, (function(e) {
            e ? T({
              action: "POP",
              location: t
            }) : function(t) {
              var e = U.location,
                i = R.indexOf(e.key); - 1 === i && (i = 0);
              var r = R.indexOf(t.key); - 1 === r && (r = 0);
              var s = i - r;
              s && (N = !0, M(s))
            }(t)
          }))
        }
        var O = S(d()),
          R = [O.key];

        function B(t) {
          return E + function(t) {
            var e = t.pathname,
              i = t.search,
              r = t.hash,
              s = e || "/";
            return i && "?" !== i && (s += "?" === i.charAt(0) ? i : "?" + i), r && "#" !== r && (s += "#" === r.charAt(0) ? r : "#" + r), s
          }(t)
        }

        function M(t) {
          s.go(t)
        }
        var V = 0;

        function D(t) {
          1 === (V += t) && 1 === t ? (window.addEventListener(u, I), a && window.addEventListener(f, P)) : 0 === V && (window.removeEventListener(u, I), a && window.removeEventListener(f, P))
        }
        var H = !1,
          U = {
            length: s.length,
            action: "POP",
            location: O,
            createHref: B,
            push: function(t, e) {
              var i = "PUSH",
                r = c(t, e, w(), U.location);
              A.confirmTransitionTo(r, i, x, (function(t) {
                if (t) {
                  var e = B(r),
                    a = r.key,
                    o = r.state;
                  if (n)
                    if (s.pushState({
                        key: a,
                        state: o
                      }, null, e), y) window.location.href = e;
                    else {
                      var h = R.indexOf(U.location.key),
                        c = R.slice(0, h + 1);
                      c.push(r.key), R = c, T({
                        action: i,
                        location: r
                      })
                    }
                  else window.location.href = e
                }
              }))
            },
            replace: function(t, e) {
              var i = "REPLACE",
                r = c(t, e, w(), U.location);
              A.confirmTransitionTo(r, i, x, (function(t) {
                if (t) {
                  var e = B(r),
                    a = r.key,
                    o = r.state;
                  if (n)
                    if (s.replaceState({
                        key: a,
                        state: o
                      }, null, e), y) window.location.replace(e);
                    else {
                      var h = R.indexOf(U.location.key); - 1 !== h && (R[h] = r.key), T({
                        action: i,
                        location: r
                      })
                    }
                  else window.location.replace(e)
                }
              }))
            },
            go: M,
            goBack: function() {
              M(-1)
            },
            goForward: function() {
              M(1)
            },
            block: function(t) {
              void 0 === t && (t = !1);
              var e = A.setPrompt(t);
              return H || (D(1), H = !0),
                function() {
                  return H && (H = !1, D(-1)), e()
                }
            },
            listen: function(t) {
              var e = A.appendListener(t);
              return D(1),
                function() {
                  D(-1), e()
                }
            }
          };
        return U
      }
    },
    2571: (t, e, i) => {
      "use strict";
      var r = i(4607),
        s = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        n = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        o = {};

      function h(t) {
        return r.isMemo(t) ? a : o[t.$$typeof] || s
      }
      o[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, o[r.Memo] = a;
      var c = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        d = Object.prototype;
      t.exports = function t(e, i, r) {
        if ("string" != typeof i) {
          if (d) {
            var s = f(i);
            s && s !== d && t(e, s, r)
          }
          var a = p(i);
          l && (a = a.concat(l(i)));
          for (var o = h(e), m = h(i), g = 0; g < a.length; ++g) {
            var y = a[g];
            if (!(n[y] || r && r[y] || m && m[y] || o && o[y])) {
              var v = u(i, y);
              try {
                c(e, y, v)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    7478: (t, e) => {
      "use strict";
      var i = "function" == typeof Symbol && Symbol.for,
        r = i ? Symbol.for("react.element") : 60103,
        s = i ? Symbol.for("react.portal") : 60106,
        n = i ? Symbol.for("react.fragment") : 60107,
        a = i ? Symbol.for("react.strict_mode") : 60108,
        o = i ? Symbol.for("react.profiler") : 60114,
        h = i ? Symbol.for("react.provider") : 60109,
        c = i ? Symbol.for("react.context") : 60110,
        p = i ? Symbol.for("react.async_mode") : 60111,
        l = i ? Symbol.for("react.concurrent_mode") : 60111,
        u = i ? Symbol.for("react.forward_ref") : 60112,
        f = i ? Symbol.for("react.suspense") : 60113,
        d = i ? Symbol.for("react.suspense_list") : 60120,
        m = i ? Symbol.for("react.memo") : 60115,
        g = i ? Symbol.for("react.lazy") : 60116,
        y = i ? Symbol.for("react.block") : 60121,
        v = i ? Symbol.for("react.fundamental") : 60117,
        x = i ? Symbol.for("react.responder") : 60118,
        b = i ? Symbol.for("react.scope") : 60119;

      function _(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch (t = t.type) {
                case p:
                case l:
                case n:
                case o:
                case a:
                case f:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case c:
                    case u:
                    case g:
                    case m:
                    case h:
                      return t;
                    default:
                      return e
                  }
              }
            case s:
              return e
          }
        }
      }

      function E(t) {
        return _(t) === l
      }
      e.AsyncMode = p, e.ConcurrentMode = l, e.ContextConsumer = c, e.ContextProvider = h, e.Element = r, e.ForwardRef = u, e.Fragment = n, e.Lazy = g, e.Memo = m, e.Portal = s, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(t) {
        return E(t) || _(t) === p
      }, e.isConcurrentMode = E, e.isContextConsumer = function(t) {
        return _(t) === c
      }, e.isContextProvider = function(t) {
        return _(t) === h
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === r
      }, e.isForwardRef = function(t) {
        return _(t) === u
      }, e.isFragment = function(t) {
        return _(t) === n
      }, e.isLazy = function(t) {
        return _(t) === g
      }, e.isMemo = function(t) {
        return _(t) === m
      }, e.isPortal = function(t) {
        return _(t) === s
      }, e.isProfiler = function(t) {
        return _(t) === o
      }, e.isStrictMode = function(t) {
        return _(t) === a
      }, e.isSuspense = function(t) {
        return _(t) === f
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === n || t === l || t === o || t === a || t === f || t === d || "object" == typeof t && null !== t && (t.$$typeof === g || t.$$typeof === m || t.$$typeof === h || t.$$typeof === c || t.$$typeof === u || t.$$typeof === v || t.$$typeof === x || t.$$typeof === b || t.$$typeof === y)
      }, e.typeOf = _
    },
    4607: (t, e, i) => {
      "use strict";
      t.exports = i(7478)
    },
    3032: (t, e, i) => {
      "use strict";
      var r = i(279),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(t, e, i) {
        var r, n = {},
          c = null,
          p = null;
        for (r in void 0 !== i && (c = "" + i), void 0 !== e.key && (c = "" + e.key), void 0 !== e.ref && (p = e.ref), e) a.call(e, r) && !h.hasOwnProperty(r) && (n[r] = e[r]);
        if (t && t.defaultProps)
          for (r in e = t.defaultProps) void 0 === n[r] && (n[r] = e[r]);
        return {
          $$typeof: s,
          type: t,
          key: c,
          ref: p,
          props: n,
          _owner: o.current
        }
      }
      e.Fragment = n, e.jsx = c, e.jsxs = c
    },
    3705: (t, e, i) => {
      "use strict";
      t.exports = i(3032)
    },
    3891: function(t, e, i) {
      var r;
      t.exports = (r = i(279), (() => {
        var t = {
            977: (t, e, i) => {
              "use strict";
              const r = i(325),
                s = /^[\da-fA-F]+$/,
                n = /^\d+$/,
                a = new WeakMap;

              function o(t) {
                t = t.Parser.acorn || t;
                let e = a.get(t);
                if (!e) {
                  const i = t.tokTypes,
                    r = t.TokContext,
                    s = t.TokenType,
                    n = new r("<tag", !1),
                    o = new r("</tag", !1),
                    h = new r("<tag>...</tag>", !0, !0),
                    c = {
                      tc_oTag: n,
                      tc_cTag: o,
                      tc_expr: h
                    },
                    p = {
                      jsxName: new s("jsxName"),
                      jsxText: new s("jsxText", {
                        beforeExpr: !0
                      }),
                      jsxTagStart: new s("jsxTagStart", {
                        startsExpr: !0
                      }),
                      jsxTagEnd: new s("jsxTagEnd")
                    };
                  p.jsxTagStart.updateContext = function() {
                    this.context.push(h), this.context.push(n), this.exprAllowed = !1
                  }, p.jsxTagEnd.updateContext = function(t) {
                    let e = this.context.pop();
                    e === n && t === i.slash || e === o ? (this.context.pop(), this.exprAllowed = this.curContext() === h) : this.exprAllowed = !0
                  }, e = {
                    tokContexts: c,
                    tokTypes: p
                  }, a.set(t, e)
                }
                return e
              }

              function h(t) {
                return t ? "JSXIdentifier" === t.type ? t.name : "JSXNamespacedName" === t.type ? t.namespace.name + ":" + t.name.name : "JSXMemberExpression" === t.type ? h(t.object) + "." + h(t.property) : void 0 : t
              }
              t.exports = function(t) {
                return t = t || {},
                  function(e) {
                    return function(t, e) {
                      const a = e.acorn || i(234),
                        c = o(a),
                        p = a.tokTypes,
                        l = c.tokTypes,
                        u = a.tokContexts,
                        f = c.tokContexts.tc_oTag,
                        d = c.tokContexts.tc_cTag,
                        m = c.tokContexts.tc_expr,
                        g = a.isNewLine,
                        y = a.isIdentifierStart,
                        v = a.isIdentifierChar;
                      return class extends e {
                        static get acornJsx() {
                          return c
                        }
                        jsx_readToken() {
                          let t = "",
                            e = this.pos;
                          for (;;) {
                            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
                            let i = this.input.charCodeAt(this.pos);
                            switch (i) {
                              case 60:
                              case 123:
                                return this.pos === this.start ? 60 === i && this.exprAllowed ? (++this.pos, this.finishToken(l.jsxTagStart)) : this.getTokenFromCode(i) : (t += this.input.slice(e, this.pos), this.finishToken(l.jsxText, t));
                              case 38:
                                t += this.input.slice(e, this.pos), t += this.jsx_readEntity(), e = this.pos;
                                break;
                              case 62:
                              case 125:
                                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (62 === i ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
                              default:
                                g(i) ? (t += this.input.slice(e, this.pos), t += this.jsx_readNewLine(!0), e = this.pos) : ++this.pos
                            }
                          }
                        }
                        jsx_readNewLine(t) {
                          let e, i = this.input.charCodeAt(this.pos);
                          return ++this.pos, 13 === i && 10 === this.input.charCodeAt(this.pos) ? (++this.pos, e = t ? "\n" : "\r\n") : e = String.fromCharCode(i), this.options.locations && (++this.curLine, this.lineStart = this.pos), e
                        }
                        jsx_readString(t) {
                          let e = "",
                            i = ++this.pos;
                          for (;;) {
                            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                            let r = this.input.charCodeAt(this.pos);
                            if (r === t) break;
                            38 === r ? (e += this.input.slice(i, this.pos), e += this.jsx_readEntity(), i = this.pos) : g(r) ? (e += this.input.slice(i, this.pos), e += this.jsx_readNewLine(!1), i = this.pos) : ++this.pos
                          }
                          return e += this.input.slice(i, this.pos++), this.finishToken(p.string, e)
                        }
                        jsx_readEntity() {
                          let t, e = "",
                            i = 0,
                            a = this.input[this.pos];
                          "&" !== a && this.raise(this.pos, "Entity must start with an ampersand");
                          let o = ++this.pos;
                          for (; this.pos < this.input.length && i++ < 10;) {
                            if (a = this.input[this.pos++], ";" === a) {
                              "#" === e[0] ? "x" === e[1] ? (e = e.substr(2), s.test(e) && (t = String.fromCharCode(parseInt(e, 16)))) : (e = e.substr(1), n.test(e) && (t = String.fromCharCode(parseInt(e, 10)))) : t = r[e];
                              break
                            }
                            e += a
                          }
                          return t || (this.pos = o, "&")
                        }
                        jsx_readWord() {
                          let t, e = this.pos;
                          do {
                            t = this.input.charCodeAt(++this.pos)
                          } while (v(t) || 45 === t);
                          return this.finishToken(l.jsxName, this.input.slice(e, this.pos))
                        }
                        jsx_parseIdentifier() {
                          let t = this.startNode();
                          return this.type === l.jsxName ? t.name = this.value : this.type.keyword ? t.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier")
                        }
                        jsx_parseNamespacedName() {
                          let e = this.start,
                            i = this.startLoc,
                            r = this.jsx_parseIdentifier();
                          if (!t.allowNamespaces || !this.eat(p.colon)) return r;
                          var s = this.startNodeAt(e, i);
                          return s.namespace = r, s.name = this.jsx_parseIdentifier(), this.finishNode(s, "JSXNamespacedName")
                        }
                        jsx_parseElementName() {
                          if (this.type === l.jsxTagEnd) return "";
                          let e = this.start,
                            i = this.startLoc,
                            r = this.jsx_parseNamespacedName();
                          for (this.type !== p.dot || "JSXNamespacedName" !== r.type || t.allowNamespacedObjects || this.unexpected(); this.eat(p.dot);) {
                            let t = this.startNodeAt(e, i);
                            t.object = r, t.property = this.jsx_parseIdentifier(), r = this.finishNode(t, "JSXMemberExpression")
                          }
                          return r
                        }
                        jsx_parseAttributeValue() {
                          switch (this.type) {
                            case p.braceL:
                              let t = this.jsx_parseExpressionContainer();
                              return "JSXEmptyExpression" === t.expression.type && this.raise(t.start, "JSX attributes must only be assigned a non-empty expression"), t;
                            case l.jsxTagStart:
                            case p.string:
                              return this.parseExprAtom();
                            default:
                              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text")
                          }
                        }
                        jsx_parseEmptyExpression() {
                          let t = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
                          return this.finishNodeAt(t, "JSXEmptyExpression", this.start, this.startLoc)
                        }
                        jsx_parseExpressionContainer() {
                          let t = this.startNode();
                          return this.next(), t.expression = this.type === p.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(p.braceR), this.finishNode(t, "JSXExpressionContainer")
                        }
                        jsx_parseAttribute() {
                          let t = this.startNode();
                          return this.eat(p.braceL) ? (this.expect(p.ellipsis), t.argument = this.parseMaybeAssign(), this.expect(p.braceR), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsx_parseNamespacedName(), t.value = this.eat(p.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(t, "JSXAttribute"))
                        }
                        jsx_parseOpeningElementAt(e, i) {
                          let r = this.startNodeAt(e, i);
                          r.attributes = [];
                          let s = this.jsx_parseElementName();
                          for (s && (r.name = s); this.type !== p.slash && this.type !== l.jsxTagEnd;) r.attributes.push(this.jsx_parseAttribute());
                          r.selfClosing = this.eat(p.slash), this.expect(l.jsxTagEnd);
                          return t.autoCloseVoidElements && s && ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"].includes(s.name) && (r.selfClosing = !0), this.finishNode(r, s ? "JSXOpeningElement" : "JSXOpeningFragment")
                        }
                        jsx_parseClosingElementAt(t, e) {
                          let i = this.startNodeAt(t, e),
                            r = this.jsx_parseElementName();
                          return r && (i.name = r), this.expect(l.jsxTagEnd), this.finishNode(i, r ? "JSXClosingElement" : "JSXClosingFragment")
                        }
                        jsx_parseElementAt(t, e) {
                          let i = this.startNodeAt(t, e),
                            r = [],
                            s = this.jsx_parseOpeningElementAt(t, e),
                            n = null;
                          if (!s.selfClosing) {
                            t: for (;;) switch (this.type) {
                              case l.jsxTagStart:
                                if (t = this.start, e = this.startLoc, this.next(), this.eat(p.slash)) {
                                  n = this.jsx_parseClosingElementAt(t, e);
                                  break t
                                }
                                r.push(this.jsx_parseElementAt(t, e));
                                break;
                              case l.jsxText:
                                r.push(this.parseExprAtom());
                                break;
                              case p.braceL:
                                r.push(this.jsx_parseExpressionContainer());
                                break;
                              default:
                                this.unexpected()
                            }
                            h(n.name) !== h(s.name) && this.raise(n.start, "Expected corresponding JSX closing tag for <" + h(s.name) + ">")
                          }
                          let a = s.name ? "Element" : "Fragment";
                          return i["opening" + a] = s, i["closing" + a] = n, i.children = r, this.type === p.relational && "<" === this.value && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(i, "JSX" + a)
                        }
                        jsx_parseText() {
                          let t = this.parseLiteral(this.value);
                          return t.type = "JSXText", t
                        }
                        jsx_parseElement() {
                          let t = this.start,
                            e = this.startLoc;
                          return this.next(), this.jsx_parseElementAt(t, e)
                        }
                        parseExprAtom(t) {
                          return this.type === l.jsxText ? this.jsx_parseText() : this.type === l.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(t)
                        }
                        readToken(t) {
                          let e = this.curContext();
                          if (e === m) return this.jsx_readToken();
                          if (e === f || e === d) {
                            if (y(t)) return this.jsx_readWord();
                            if (62 == t) return ++this.pos, this.finishToken(l.jsxTagEnd);
                            if ((34 === t || 39 === t) && e == f) return this.jsx_readString(t)
                          }
                          return 60 === t && this.exprAllowed && 33 !== this.input.charCodeAt(this.pos + 1) ? (++this.pos, this.finishToken(l.jsxTagStart)) : super.readToken(t)
                        }
                        updateContext(t) {
                          if (this.type == p.braceL) {
                            var e = this.curContext();
                            e == f ? this.context.push(u.b_expr) : e == m ? this.context.push(u.b_tmpl) : super.updateContext(t), this.exprAllowed = !0
                          } else {
                            if (this.type !== p.slash || t !== l.jsxTagStart) return super.updateContext(t);
                            this.context.length -= 2, this.context.push(d), this.exprAllowed = !1
                          }
                        }
                      }
                    }({
                      allowNamespaces: !1 !== t.allowNamespaces,
                      allowNamespacedObjects: !!t.allowNamespacedObjects,
                      autoCloseVoidElements: !!t.autoCloseVoidElements
                    }, e)
                  }
              }, Object.defineProperty(t.exports, "tokTypes", {
                get: function() {
                  return o(i(234)).tokTypes
                },
                configurable: !0,
                enumerable: !0
              })
            },
            325: t => {
              t.exports = {
                quot: '"',
                amp: "&",
                apos: "'",
                lt: "<",
                gt: ">",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                times: "×",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                divide: "÷",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                int: "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                lang: "〈",
                rang: "〉",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦"
              }
            },
            234: function(t, e) {
              ! function(t) {
                "use strict";
                var e = {
                    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                    5: "class enum extends super const export import",
                    6: "enum",
                    strict: "implements interface let package private protected public static yield",
                    strictBind: "eval arguments"
                  },
                  i = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                  r = {
                    5: i,
                    "5module": i + " export import",
                    6: i + " const class extends export import super"
                  },
                  s = /^in(stanceof)?$/,
                  n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                  a = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                  o = new RegExp("[" + n + "]"),
                  h = new RegExp("[" + n + a + "]");
                n = a = null;
                var c = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                  p = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

                function l(t, e) {
                  for (var i = 65536, r = 0; r < e.length; r += 2) {
                    if ((i += e[r]) > t) return !1;
                    if ((i += e[r + 1]) >= t) return !0
                  }
                }

                function u(t, e) {
                  return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && o.test(String.fromCharCode(t)) : !1 !== e && l(t, c)))
                }

                function f(t, e) {
                  return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && h.test(String.fromCharCode(t)) : !1 !== e && (l(t, c) || l(t, p)))))
                }
                var d = function(t, e) {
                  void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
                };

                function m(t, e) {
                  return new d(t, {
                    beforeExpr: !0,
                    binop: e
                  })
                }
                var g = {
                    beforeExpr: !0
                  },
                  y = {
                    startsExpr: !0
                  },
                  v = {};

                function x(t, e) {
                  return void 0 === e && (e = {}), e.keyword = t, v[t] = new d(t, e)
                }
                var b = {
                    num: new d("num", y),
                    regexp: new d("regexp", y),
                    string: new d("string", y),
                    name: new d("name", y),
                    eof: new d("eof"),
                    bracketL: new d("[", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    bracketR: new d("]"),
                    braceL: new d("{", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    braceR: new d("}"),
                    parenL: new d("(", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    parenR: new d(")"),
                    comma: new d(",", g),
                    semi: new d(";", g),
                    colon: new d(":", g),
                    dot: new d("."),
                    question: new d("?", g),
                    questionDot: new d("?."),
                    arrow: new d("=>", g),
                    template: new d("template"),
                    invalidTemplate: new d("invalidTemplate"),
                    ellipsis: new d("...", g),
                    backQuote: new d("`", y),
                    dollarBraceL: new d("${", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    eq: new d("=", {
                      beforeExpr: !0,
                      isAssign: !0
                    }),
                    assign: new d("_=", {
                      beforeExpr: !0,
                      isAssign: !0
                    }),
                    incDec: new d("++/--", {
                      prefix: !0,
                      postfix: !0,
                      startsExpr: !0
                    }),
                    prefix: new d("!/~", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    logicalOR: m("||", 1),
                    logicalAND: m("&&", 2),
                    bitwiseOR: m("|", 3),
                    bitwiseXOR: m("^", 4),
                    bitwiseAND: m("&", 5),
                    equality: m("==/!=/===/!==", 6),
                    relational: m("</>/<=/>=", 7),
                    bitShift: m("<</>>/>>>", 8),
                    plusMin: new d("+/-", {
                      beforeExpr: !0,
                      binop: 9,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    modulo: m("%", 10),
                    star: m("*", 10),
                    slash: m("/", 10),
                    starstar: new d("**", {
                      beforeExpr: !0
                    }),
                    coalesce: m("??", 1),
                    _break: x("break"),
                    _case: x("case", g),
                    _catch: x("catch"),
                    _continue: x("continue"),
                    _debugger: x("debugger"),
                    _default: x("default", g),
                    _do: x("do", {
                      isLoop: !0,
                      beforeExpr: !0
                    }),
                    _else: x("else", g),
                    _finally: x("finally"),
                    _for: x("for", {
                      isLoop: !0
                    }),
                    _function: x("function", y),
                    _if: x("if"),
                    _return: x("return", g),
                    _switch: x("switch"),
                    _throw: x("throw", g),
                    _try: x("try"),
                    _var: x("var"),
                    _const: x("const"),
                    _while: x("while", {
                      isLoop: !0
                    }),
                    _with: x("with"),
                    _new: x("new", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    _this: x("this", y),
                    _super: x("super", y),
                    _class: x("class", y),
                    _extends: x("extends", g),
                    _export: x("export"),
                    _import: x("import", y),
                    _null: x("null", y),
                    _true: x("true", y),
                    _false: x("false", y),
                    _in: x("in", {
                      beforeExpr: !0,
                      binop: 7
                    }),
                    _instanceof: x("instanceof", {
                      beforeExpr: !0,
                      binop: 7
                    }),
                    _typeof: x("typeof", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    _void: x("void", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    _delete: x("delete", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    })
                  },
                  _ = /\r\n?|\n|\u2028|\u2029/,
                  E = new RegExp(_.source, "g");

                function S(t, e) {
                  return 10 === t || 13 === t || !e && (8232 === t || 8233 === t)
                }
                var w = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                  k = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                  C = Object.prototype,
                  A = C.hasOwnProperty,
                  T = C.toString;

                function I(t, e) {
                  return A.call(t, e)
                }
                var P = Array.isArray || function(t) {
                  return "[object Array]" === T.call(t)
                };

                function N(t) {
                  return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$")
                }
                var L = function(t, e) {
                  this.line = t, this.column = e
                };
                L.prototype.offset = function(t) {
                  return new L(this.line, this.column + t)
                };
                var O = function(t, e, i) {
                  this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile)
                };

                function R(t, e) {
                  for (var i = 1, r = 0;;) {
                    E.lastIndex = r;
                    var s = E.exec(t);
                    if (!(s && s.index < e)) return new L(i, e - r);
                    ++i, r = s.index + s[0].length
                  }
                }
                var B = {
                    ecmaVersion: null,
                    sourceType: "script",
                    onInsertedSemicolon: null,
                    onTrailingComma: null,
                    allowReserved: null,
                    allowReturnOutsideFunction: !1,
                    allowImportExportEverywhere: !1,
                    allowAwaitOutsideFunction: !1,
                    allowHashBang: !1,
                    locations: !1,
                    onToken: null,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null,
                    directSourceFile: null,
                    preserveParens: !1
                  },
                  M = !1;

                function V(t) {
                  var e = {};
                  for (var i in B) e[i] = t && I(t, i) ? t[i] : B[i];
                  if ("latest" === e.ecmaVersion ? e.ecmaVersion = 1e8 : null == e.ecmaVersion ? (!M && "object" == typeof console && console.warn && (M = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), P(e.onToken)) {
                    var r = e.onToken;
                    e.onToken = function(t) {
                      return r.push(t)
                    }
                  }
                  return P(e.onComment) && (e.onComment = function(t, e) {
                    return function(i, r, s, n, a, o) {
                      var h = {
                        type: i ? "Block" : "Line",
                        value: r,
                        start: s,
                        end: n
                      };
                      t.locations && (h.loc = new O(this, a, o)), t.ranges && (h.range = [s, n]), e.push(h)
                    }
                  }(e, e.onComment)), e
                }

                function D(t, e) {
                  return 2 | (t ? 4 : 0) | (e ? 8 : 0)
                }
                var H = function(t, i, s) {
                    this.options = t = V(t), this.sourceFile = t.sourceFile, this.keywords = N(r[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                    var n = "";
                    !0 !== t.allowReserved && (n = e[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (n += " await")), this.reservedWords = N(n);
                    var a = (n ? n + " " : "") + e.strict;
                    this.reservedWordsStrict = N(a), this.reservedWordsStrictBind = N(a + " " + e.strictBind), this.input = String(i), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf("\n", s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(_).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = b.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
                  },
                  U = {
                    inFunction: {
                      configurable: !0
                    },
                    inGenerator: {
                      configurable: !0
                    },
                    inAsync: {
                      configurable: !0
                    },
                    allowSuper: {
                      configurable: !0
                    },
                    allowDirectSuper: {
                      configurable: !0
                    },
                    treatFunctionsAsVar: {
                      configurable: !0
                    },
                    inNonArrowFunction: {
                      configurable: !0
                    }
                  };
                H.prototype.parse = function() {
                  var t = this.options.program || this.startNode();
                  return this.nextToken(), this.parseTopLevel(t)
                }, U.inFunction.get = function() {
                  return (2 & this.currentVarScope().flags) > 0
                }, U.inGenerator.get = function() {
                  return (8 & this.currentVarScope().flags) > 0
                }, U.inAsync.get = function() {
                  return (4 & this.currentVarScope().flags) > 0
                }, U.allowSuper.get = function() {
                  return (64 & this.currentThisScope().flags) > 0
                }, U.allowDirectSuper.get = function() {
                  return (128 & this.currentThisScope().flags) > 0
                }, U.treatFunctionsAsVar.get = function() {
                  return this.treatFunctionsAsVarInScope(this.currentScope())
                }, U.inNonArrowFunction.get = function() {
                  return (2 & this.currentThisScope().flags) > 0
                }, H.extend = function() {
                  for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                  for (var i = this, r = 0; r < t.length; r++) i = t[r](i);
                  return i
                }, H.parse = function(t, e) {
                  return new this(e, t).parse()
                }, H.parseExpressionAt = function(t, e, i) {
                  var r = new this(i, t, e);
                  return r.nextToken(), r.parseExpression()
                }, H.tokenizer = function(t, e) {
                  return new this(e, t)
                }, Object.defineProperties(H.prototype, U);
                var F = H.prototype,
                  j = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

                function G() {
                  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
                }
                F.strictDirective = function(t) {
                  for (;;) {
                    k.lastIndex = t, t += k.exec(this.input)[0].length;
                    var e = j.exec(this.input.slice(t));
                    if (!e) return !1;
                    if ("use strict" === (e[1] || e[2])) {
                      k.lastIndex = t + e[0].length;
                      var i = k.exec(this.input),
                        r = i.index + i[0].length,
                        s = this.input.charAt(r);
                      return ";" === s || "}" === s || _.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || "!" === s && "=" === this.input.charAt(r + 1))
                    }
                    t += e[0].length, k.lastIndex = t, t += k.exec(this.input)[0].length, ";" === this.input[t] && t++
                  }
                }, F.eat = function(t) {
                  return this.type === t && (this.next(), !0)
                }, F.isContextual = function(t) {
                  return this.type === b.name && this.value === t && !this.containsEsc
                }, F.eatContextual = function(t) {
                  return !!this.isContextual(t) && (this.next(), !0)
                }, F.expectContextual = function(t) {
                  this.eatContextual(t) || this.unexpected()
                }, F.canInsertSemicolon = function() {
                  return this.type === b.eof || this.type === b.braceR || _.test(this.input.slice(this.lastTokEnd, this.start))
                }, F.insertSemicolon = function() {
                  if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
                }, F.semicolon = function() {
                  this.eat(b.semi) || this.insertSemicolon() || this.unexpected()
                }, F.afterTrailingComma = function(t, e) {
                  if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
                }, F.expect = function(t) {
                  this.eat(t) || this.unexpected()
                }, F.unexpected = function(t) {
                  this.raise(null != t ? t : this.start, "Unexpected token")
                }, F.checkPatternErrors = function(t, e) {
                  if (t) {
                    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                    i > -1 && this.raiseRecoverable(i, "Parenthesized pattern")
                  }
                }, F.checkExpressionErrors = function(t, e) {
                  if (!t) return !1;
                  var i = t.shorthandAssign,
                    r = t.doubleProto;
                  if (!e) return i >= 0 || r >= 0;
                  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property")
                }, F.checkYieldAwaitInDefaultParams = function() {
                  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
                }, F.isSimpleAssignTarget = function(t) {
                  return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
                };
                var W = H.prototype;
                W.parseTopLevel = function(t) {
                  var e = Object.create(null);
                  for (t.body || (t.body = []); this.type !== b.eof;) {
                    var i = this.parseStatement(null, !0, e);
                    t.body.push(i)
                  }
                  if (this.inModule)
                    for (var r = 0, s = Object.keys(this.undefinedExports); r < s.length; r += 1) {
                      var n = s[r];
                      this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined")
                    }
                  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
                };
                var q = {
                    kind: "loop"
                  },
                  z = {
                    kind: "switch"
                  };
                W.isLet = function(t) {
                  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                  k.lastIndex = this.pos;
                  var e = k.exec(this.input),
                    i = this.pos + e[0].length,
                    r = this.input.charCodeAt(i);
                  if (91 === r) return !0;
                  if (t) return !1;
                  if (123 === r) return !0;
                  if (u(r, !0)) {
                    for (var n = i + 1; f(this.input.charCodeAt(n), !0);) ++n;
                    var a = this.input.slice(i, n);
                    if (!s.test(a)) return !0
                  }
                  return !1
                }, W.isAsyncFunction = function() {
                  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                  k.lastIndex = this.pos;
                  var t = k.exec(this.input),
                    e = this.pos + t[0].length;
                  return !(_.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 !== this.input.length && f(this.input.charAt(e + 8)))
                }, W.parseStatement = function(t, e, i) {
                  var r, s = this.type,
                    n = this.startNode();
                  switch (this.isLet(t) && (s = b._var, r = "let"), s) {
                    case b._break:
                    case b._continue:
                      return this.parseBreakContinueStatement(n, s.keyword);
                    case b._debugger:
                      return this.parseDebuggerStatement(n);
                    case b._do:
                      return this.parseDoStatement(n);
                    case b._for:
                      return this.parseForStatement(n);
                    case b._function:
                      return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !t);
                    case b._class:
                      return t && this.unexpected(), this.parseClass(n, !0);
                    case b._if:
                      return this.parseIfStatement(n);
                    case b._return:
                      return this.parseReturnStatement(n);
                    case b._switch:
                      return this.parseSwitchStatement(n);
                    case b._throw:
                      return this.parseThrowStatement(n);
                    case b._try:
                      return this.parseTryStatement(n);
                    case b._const:
                    case b._var:
                      return r = r || this.value, t && "var" !== r && this.unexpected(), this.parseVarStatement(n, r);
                    case b._while:
                      return this.parseWhileStatement(n);
                    case b._with:
                      return this.parseWithStatement(n);
                    case b.braceL:
                      return this.parseBlock(!0, n);
                    case b.semi:
                      return this.parseEmptyStatement(n);
                    case b._export:
                    case b._import:
                      if (this.options.ecmaVersion > 10 && s === b._import) {
                        k.lastIndex = this.pos;
                        var a = k.exec(this.input),
                          o = this.pos + a[0].length,
                          h = this.input.charCodeAt(o);
                        if (40 === h || 46 === h) return this.parseExpressionStatement(n, this.parseExpression())
                      }
                      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === b._import ? this.parseImport(n) : this.parseExport(n, i);
                    default:
                      if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(n, !0, !t);
                      var c = this.value,
                        p = this.parseExpression();
                      return s === b.name && "Identifier" === p.type && this.eat(b.colon) ? this.parseLabeledStatement(n, c, p, t) : this.parseExpressionStatement(n, p)
                  }
                }, W.parseBreakContinueStatement = function(t, e) {
                  var i = "break" === e;
                  this.next(), this.eat(b.semi) || this.insertSemicolon() ? t.label = null : this.type !== b.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
                  for (var r = 0; r < this.labels.length; ++r) {
                    var s = this.labels[r];
                    if (null == t.label || s.name === t.label.name) {
                      if (null != s.kind && (i || "loop" === s.kind)) break;
                      if (t.label && i) break
                    }
                  }
                  return r === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
                }, W.parseDebuggerStatement = function(t) {
                  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
                }, W.parseDoStatement = function(t) {
                  return this.next(), this.labels.push(q), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(b._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(b.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
                }, W.parseForStatement = function(t) {
                  this.next();
                  var e = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
                  if (this.labels.push(q), this.enterScope(0), this.expect(b.parenL), this.type === b.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                  var i = this.isLet();
                  if (this.type === b._var || this.type === b._const || i) {
                    var r = this.startNode(),
                      s = i ? "let" : this.value;
                    return this.next(), this.parseVar(r, !0, s), this.finishNode(r, "VariableDeclaration"), (this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === r.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === b._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, r)) : (e > -1 && this.unexpected(e), this.parseFor(t, r))
                  }
                  var n = new G,
                    a = this.parseExpression(!0, n);
                  return this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === b._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(a, !1, n), this.checkLValPattern(a), this.parseForIn(t, a)) : (this.checkExpressionErrors(n, !0), e > -1 && this.unexpected(e), this.parseFor(t, a))
                }, W.parseFunctionStatement = function(t, e, i) {
                  return this.next(), this.parseFunction(t, K | (i ? 0 : Q), !1, e)
                }, W.parseIfStatement = function(t) {
                  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(b._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
                }, W.parseReturnStatement = function(t) {
                  return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(b.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
                }, W.parseSwitchStatement = function(t) {
                  var e;
                  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(b.braceL), this.labels.push(z), this.enterScope(0);
                  for (var i = !1; this.type !== b.braceR;)
                    if (this.type === b._case || this.type === b._default) {
                      var r = this.type === b._case;
                      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), r ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(b.colon)
                    } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
                }, W.parseThrowStatement = function(t) {
                  return this.next(), _.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
                };
                var X = [];
                W.parseTryStatement = function(t) {
                  if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === b._catch) {
                    var e = this.startNode();
                    if (this.next(), this.eat(b.parenL)) {
                      e.param = this.parseBindingAtom();
                      var i = "Identifier" === e.param.type;
                      this.enterScope(i ? 32 : 0), this.checkLValPattern(e.param, i ? 4 : 2), this.expect(b.parenR)
                    } else this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0);
                    e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
                  }
                  return t.finalizer = this.eat(b._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
                }, W.parseVarStatement = function(t, e) {
                  return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration")
                }, W.parseWhileStatement = function(t) {
                  return this.next(), t.test = this.parseParenExpression(), this.labels.push(q), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
                }, W.parseWithStatement = function(t) {
                  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
                }, W.parseEmptyStatement = function(t) {
                  return this.next(), this.finishNode(t, "EmptyStatement")
                }, W.parseLabeledStatement = function(t, e, i, r) {
                  for (var s = 0, n = this.labels; s < n.length; s += 1) n[s].name === e && this.raise(i.start, "Label '" + e + "' is already declared");
                  for (var a = this.type.isLoop ? "loop" : this.type === b._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                    var h = this.labels[o];
                    if (h.statementStart !== t.start) break;
                    h.statementStart = this.start, h.kind = a
                  }
                  return this.labels.push({
                    name: e,
                    kind: a,
                    statementStart: this.start
                  }), t.body = this.parseStatement(r ? -1 === r.indexOf("label") ? r + "label" : r : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
                }, W.parseExpressionStatement = function(t, e) {
                  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
                }, W.parseBlock = function(t, e, i) {
                  for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(b.braceL), t && this.enterScope(0); this.type !== b.braceR;) {
                    var r = this.parseStatement(null);
                    e.body.push(r)
                  }
                  return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
                }, W.parseFor = function(t, e) {
                  return t.init = e, this.expect(b.semi), t.test = this.type === b.semi ? null : this.parseExpression(), this.expect(b.semi), t.update = this.type === b.parenR ? null : this.parseExpression(), this.expect(b.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
                }, W.parseForIn = function(t, e) {
                  var i = this.type === b._in;
                  return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(b.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
                }, W.parseVar = function(t, e, i) {
                  for (t.declarations = [], t.kind = i;;) {
                    var r = this.startNode();
                    if (this.parseVarId(r, i), this.eat(b.eq) ? r.init = this.parseMaybeAssign(e) : "const" !== i || this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === r.id.type || e && (this.type === b._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(b.comma)) break
                  }
                  return t
                }, W.parseVarId = function(t, e) {
                  t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
                };
                var K = 1,
                  Q = 2;
                W.parseFunction = function(t, e, i, r) {
                  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === b.star && e & Q && this.unexpected(), t.generator = this.eat(b.star)), this.options.ecmaVersion >= 8 && (t.async = !!r), e & K && (t.id = 4 & e && this.type !== b.name ? null : this.parseIdent(), !t.id || e & Q || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                  var s = this.yieldPos,
                    n = this.awaitPos,
                    a = this.awaitIdentPos;
                  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(D(t.async, t.generator)), e & K || (t.id = this.type === b.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(t, e & K ? "FunctionDeclaration" : "FunctionExpression")
                }, W.parseFunctionParams = function(t) {
                  this.expect(b.parenL), t.params = this.parseBindingList(b.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
                }, W.parseClass = function(t, e) {
                  this.next();
                  var i = this.strict;
                  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
                  var r = this.startNode(),
                    s = !1;
                  for (r.body = [], this.expect(b.braceL); this.type !== b.braceR;) {
                    var n = this.parseClassElement(null !== t.superClass);
                    n && (r.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind && (s && this.raise(n.start, "Duplicate constructor in the same class"), s = !0))
                  }
                  return this.strict = i, this.next(), t.body = this.finishNode(r, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
                }, W.parseClassElement = function(t) {
                  var e = this;
                  if (this.eat(b.semi)) return null;
                  var i = this.startNode(),
                    r = function(t, r) {
                      void 0 === r && (r = !1);
                      var s = e.start,
                        n = e.startLoc;
                      return !(!e.eatContextual(t) || (e.type === b.parenL || r && e.canInsertSemicolon()) && (i.key && e.unexpected(), i.computed = !1, i.key = e.startNodeAt(s, n), i.key.name = t, e.finishNode(i.key, "Identifier"), 1))
                    };
                  i.kind = "method", i.static = r("static");
                  var s = this.eat(b.star),
                    n = !1;
                  s || (this.options.ecmaVersion >= 8 && r("async", !0) ? (n = !0, s = this.options.ecmaVersion >= 9 && this.eat(b.star)) : r("get") ? i.kind = "get" : r("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
                  var a = i.key,
                    o = !1;
                  return i.computed || i.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? i.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(a.start, "Constructor can't have get/set modifier"), s && this.raise(a.start, "Constructor can't be a generator"), n && this.raise(a.start, "Constructor can't be an async method"), i.kind = "constructor", o = t), this.parseClassMethod(i, s, n, o), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i
                }, W.parseClassMethod = function(t, e, i, r) {
                  return t.value = this.parseMethod(e, i, r), this.finishNode(t, "MethodDefinition")
                }, W.parseClassId = function(t, e) {
                  this.type === b.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
                }, W.parseClassSuper = function(t) {
                  t.superClass = this.eat(b._extends) ? this.parseExprSubscripts() : null
                }, W.parseExport = function(t, e) {
                  if (this.next(), this.eat(b.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseIdent(!0), this.checkExport(e, t.exported.name, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== b.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
                  if (this.eat(b._default)) {
                    var i;
                    if (this.checkExport(e, "default", this.lastTokStart), this.type === b._function || (i = this.isAsyncFunction())) {
                      var r = this.startNode();
                      this.next(), i && this.next(), t.declaration = this.parseFunction(r, 4 | K, !1, i)
                    } else if (this.type === b._class) {
                      var s = this.startNode();
                      t.declaration = this.parseClass(s, "nullableID")
                    } else t.declaration = this.parseMaybeAssign(), this.semicolon();
                    return this.finishNode(t, "ExportDefaultDeclaration")
                  }
                  if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(null), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start), t.specifiers = [], t.source = null;
                  else {
                    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== b.string && this.unexpected(), t.source = this.parseExprAtom();
                    else {
                      for (var n = 0, a = t.specifiers; n < a.length; n += 1) {
                        var o = a[n];
                        this.checkUnreserved(o.local), this.checkLocalExport(o.local)
                      }
                      t.source = null
                    }
                    this.semicolon()
                  }
                  return this.finishNode(t, "ExportNamedDeclaration")
                }, W.checkExport = function(t, e, i) {
                  t && (I(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0)
                }, W.checkPatternExport = function(t, e) {
                  var i = e.type;
                  if ("Identifier" === i) this.checkExport(t, e.name, e.start);
                  else if ("ObjectPattern" === i)
                    for (var r = 0, s = e.properties; r < s.length; r += 1) {
                      var n = s[r];
                      this.checkPatternExport(t, n)
                    } else if ("ArrayPattern" === i)
                      for (var a = 0, o = e.elements; a < o.length; a += 1) {
                        var h = o[a];
                        h && this.checkPatternExport(t, h)
                      } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(t, e.expression)
                }, W.checkVariableExport = function(t, e) {
                  if (t)
                    for (var i = 0, r = e; i < r.length; i += 1) {
                      var s = r[i];
                      this.checkPatternExport(t, s.id)
                    }
                }, W.shouldParseExportStatement = function() {
                  return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
                }, W.parseExportSpecifiers = function(t) {
                  var e = [],
                    i = !0;
                  for (this.expect(b.braceL); !this.eat(b.braceR);) {
                    if (i) i = !1;
                    else if (this.expect(b.comma), this.afterTrailingComma(b.braceR)) break;
                    var r = this.startNode();
                    r.local = this.parseIdent(!0), r.exported = this.eatContextual("as") ? this.parseIdent(!0) : r.local, this.checkExport(t, r.exported.name, r.exported.start), e.push(this.finishNode(r, "ExportSpecifier"))
                  }
                  return e
                }, W.parseImport = function(t) {
                  return this.next(), this.type === b.string ? (t.specifiers = X, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === b.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
                }, W.parseImportSpecifiers = function() {
                  var t = [],
                    e = !0;
                  if (this.type === b.name) {
                    var i = this.startNode();
                    if (i.local = this.parseIdent(), this.checkLValSimple(i.local, 2), t.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(b.comma)) return t
                  }
                  if (this.type === b.star) {
                    var r = this.startNode();
                    return this.next(), this.expectContextual("as"), r.local = this.parseIdent(), this.checkLValSimple(r.local, 2), t.push(this.finishNode(r, "ImportNamespaceSpecifier")), t
                  }
                  for (this.expect(b.braceL); !this.eat(b.braceR);) {
                    if (e) e = !1;
                    else if (this.expect(b.comma), this.afterTrailingComma(b.braceR)) break;
                    var s = this.startNode();
                    s.imported = this.parseIdent(!0), this.eatContextual("as") ? s.local = this.parseIdent() : (this.checkUnreserved(s.imported), s.local = s.imported), this.checkLValSimple(s.local, 2), t.push(this.finishNode(s, "ImportSpecifier"))
                  }
                  return t
                }, W.adaptDirectivePrologue = function(t) {
                  for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
                }, W.isDirectiveCandidate = function(t) {
                  return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
                };
                var Z = H.prototype;
                Z.toAssignable = function(t, e, i) {
                  if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
                    case "Identifier":
                      this.inAsync && "await" === t.name && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
                      break;
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "AssignmentPattern":
                    case "RestElement":
                      break;
                    case "ObjectExpression":
                      t.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
                      for (var r = 0, s = t.properties; r < s.length; r += 1) {
                        var n = s[r];
                        this.toAssignable(n, e), "RestElement" !== n.type || "ArrayPattern" !== n.argument.type && "ObjectPattern" !== n.argument.type || this.raise(n.argument.start, "Unexpected token")
                      }
                      break;
                    case "Property":
                      "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
                      break;
                    case "ArrayExpression":
                      t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);
                      break;
                    case "SpreadElement":
                      t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
                      break;
                    case "AssignmentExpression":
                      "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                      break;
                    case "ParenthesizedExpression":
                      this.toAssignable(t.expression, e, i);
                      break;
                    case "ChainExpression":
                      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                      break;
                    case "MemberExpression":
                      if (!e) break;
                    default:
                      this.raise(t.start, "Assigning to rvalue")
                  } else i && this.checkPatternErrors(i, !0);
                  return t
                }, Z.toAssignableList = function(t, e) {
                  for (var i = t.length, r = 0; r < i; r++) {
                    var s = t[r];
                    s && this.toAssignable(s, e)
                  }
                  if (i) {
                    var n = t[i - 1];
                    6 === this.options.ecmaVersion && e && n && "RestElement" === n.type && "Identifier" !== n.argument.type && this.unexpected(n.argument.start)
                  }
                  return t
                }, Z.parseSpread = function(t) {
                  var e = this.startNode();
                  return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
                }, Z.parseRestBinding = function() {
                  var t = this.startNode();
                  return this.next(), 6 === this.options.ecmaVersion && this.type !== b.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
                }, Z.parseBindingAtom = function() {
                  if (this.options.ecmaVersion >= 6) switch (this.type) {
                    case b.bracketL:
                      var t = this.startNode();
                      return this.next(), t.elements = this.parseBindingList(b.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                    case b.braceL:
                      return this.parseObj(!0)
                  }
                  return this.parseIdent()
                }, Z.parseBindingList = function(t, e, i) {
                  for (var r = [], s = !0; !this.eat(t);)
                    if (s ? s = !1 : this.expect(b.comma), e && this.type === b.comma) r.push(null);
                    else {
                      if (i && this.afterTrailingComma(t)) break;
                      if (this.type === b.ellipsis) {
                        var n = this.parseRestBinding();
                        this.parseBindingListItem(n), r.push(n), this.type === b.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                        break
                      }
                      var a = this.parseMaybeDefault(this.start, this.startLoc);
                      this.parseBindingListItem(a), r.push(a)
                    } return r
                }, Z.parseBindingListItem = function(t) {
                  return t
                }, Z.parseMaybeDefault = function(t, e, i) {
                  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(b.eq)) return i;
                  var r = this.startNodeAt(t, e);
                  return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern")
                }, Z.checkLValSimple = function(t, e, i) {
                  void 0 === e && (e = 0);
                  var r = 0 !== e;
                  switch (t.type) {
                    case "Identifier":
                      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (r ? "Binding " : "Assigning to ") + t.name + " in strict mode"), r && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (I(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
                      break;
                    case "ChainExpression":
                      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                      break;
                    case "MemberExpression":
                      r && this.raiseRecoverable(t.start, "Binding member expression");
                      break;
                    case "ParenthesizedExpression":
                      return r && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
                    default:
                      this.raise(t.start, (r ? "Binding" : "Assigning to") + " rvalue")
                  }
                }, Z.checkLValPattern = function(t, e, i) {
                  switch (void 0 === e && (e = 0), t.type) {
                    case "ObjectPattern":
                      for (var r = 0, s = t.properties; r < s.length; r += 1) {
                        var n = s[r];
                        this.checkLValInnerPattern(n, e, i)
                      }
                      break;
                    case "ArrayPattern":
                      for (var a = 0, o = t.elements; a < o.length; a += 1) {
                        var h = o[a];
                        h && this.checkLValInnerPattern(h, e, i)
                      }
                      break;
                    default:
                      this.checkLValSimple(t, e, i)
                  }
                }, Z.checkLValInnerPattern = function(t, e, i) {
                  switch (void 0 === e && (e = 0), t.type) {
                    case "Property":
                      this.checkLValInnerPattern(t.value, e, i);
                      break;
                    case "AssignmentPattern":
                      this.checkLValPattern(t.left, e, i);
                      break;
                    case "RestElement":
                      this.checkLValPattern(t.argument, e, i);
                      break;
                    default:
                      this.checkLValPattern(t, e, i)
                  }
                };
                var Y = H.prototype;
                Y.checkPropClash = function(t, e, i) {
                  if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
                    var r, s = t.key;
                    switch (s.type) {
                      case "Identifier":
                        r = s.name;
                        break;
                      case "Literal":
                        r = String(s.value);
                        break;
                      default:
                        return
                    }
                    var n = t.kind;
                    if (this.options.ecmaVersion >= 6) "__proto__" === r && "init" === n && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), e.proto = !0);
                    else {
                      var a = e[r = "$" + r];
                      a ? ("init" === n ? this.strict && a.init || a.get || a.set : a.init || a[n]) && this.raiseRecoverable(s.start, "Redefinition of property") : a = e[r] = {
                        init: !1,
                        get: !1,
                        set: !1
                      }, a[n] = !0
                    }
                  }
                }, Y.parseExpression = function(t, e) {
                  var i = this.start,
                    r = this.startLoc,
                    s = this.parseMaybeAssign(t, e);
                  if (this.type === b.comma) {
                    var n = this.startNodeAt(i, r);
                    for (n.expressions = [s]; this.eat(b.comma);) n.expressions.push(this.parseMaybeAssign(t, e));
                    return this.finishNode(n, "SequenceExpression")
                  }
                  return s
                }, Y.parseMaybeAssign = function(t, e, i) {
                  if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(t);
                    this.exprAllowed = !1
                  }
                  var r = !1,
                    s = -1,
                    n = -1;
                  e ? (s = e.parenthesizedAssign, n = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new G, r = !0);
                  var a = this.start,
                    o = this.startLoc;
                  this.type !== b.parenL && this.type !== b.name || (this.potentialArrowAt = this.start);
                  var h = this.parseMaybeConditional(t, e);
                  if (i && (h = i.call(this, h, a, o)), this.type.isAssign) {
                    var c = this.startNodeAt(a, o);
                    return c.operator = this.value, this.type === b.eq && (h = this.toAssignable(h, !1, e)), r || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= h.start && (e.shorthandAssign = -1), this.type === b.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), c.left = h, this.next(), c.right = this.parseMaybeAssign(t), this.finishNode(c, "AssignmentExpression")
                  }
                  return r && this.checkExpressionErrors(e, !0), s > -1 && (e.parenthesizedAssign = s), n > -1 && (e.trailingComma = n), h
                }, Y.parseMaybeConditional = function(t, e) {
                  var i = this.start,
                    r = this.startLoc,
                    s = this.parseExprOps(t, e);
                  if (this.checkExpressionErrors(e)) return s;
                  if (this.eat(b.question)) {
                    var n = this.startNodeAt(i, r);
                    return n.test = s, n.consequent = this.parseMaybeAssign(), this.expect(b.colon), n.alternate = this.parseMaybeAssign(t), this.finishNode(n, "ConditionalExpression")
                  }
                  return s
                }, Y.parseExprOps = function(t, e) {
                  var i = this.start,
                    r = this.startLoc,
                    s = this.parseMaybeUnary(e, !1);
                  return this.checkExpressionErrors(e) || s.start === i && "ArrowFunctionExpression" === s.type ? s : this.parseExprOp(s, i, r, -1, t)
                }, Y.parseExprOp = function(t, e, i, r, s) {
                  var n = this.type.binop;
                  if (null != n && (!s || this.type !== b._in) && n > r) {
                    var a = this.type === b.logicalOR || this.type === b.logicalAND,
                      o = this.type === b.coalesce;
                    o && (n = b.logicalAND.binop);
                    var h = this.value;
                    this.next();
                    var c = this.start,
                      p = this.startLoc,
                      l = this.parseExprOp(this.parseMaybeUnary(null, !1), c, p, n, s),
                      u = this.buildBinary(e, i, t, l, h, a || o);
                    return (a && this.type === b.coalesce || o && (this.type === b.logicalOR || this.type === b.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, i, r, s)
                  }
                  return t
                }, Y.buildBinary = function(t, e, i, r, s, n) {
                  var a = this.startNodeAt(t, e);
                  return a.left = i, a.operator = s, a.right = r, this.finishNode(a, n ? "LogicalExpression" : "BinaryExpression")
                }, Y.parseMaybeUnary = function(t, e) {
                  var i, r = this.start,
                    s = this.startLoc;
                  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), e = !0;
                  else if (this.type.prefix) {
                    var n = this.startNode(),
                      a = this.type === b.incDec;
                    n.operator = this.value, n.prefix = !0, this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), a ? this.checkLValSimple(n.argument) : this.strict && "delete" === n.operator && "Identifier" === n.argument.type ? this.raiseRecoverable(n.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(n, a ? "UpdateExpression" : "UnaryExpression")
                  } else {
                    if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;
                    for (; this.type.postfix && !this.canInsertSemicolon();) {
                      var o = this.startNodeAt(r, s);
                      o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLValSimple(i), this.next(), i = this.finishNode(o, "UpdateExpression")
                    }
                  }
                  return !e && this.eat(b.starstar) ? this.buildBinary(r, s, i, this.parseMaybeUnary(null, !1), "**", !1) : i
                }, Y.parseExprSubscripts = function(t) {
                  var e = this.start,
                    i = this.startLoc,
                    r = this.parseExprAtom(t);
                  if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r;
                  var s = this.parseSubscripts(r, e, i);
                  return t && "MemberExpression" === s.type && (t.parenthesizedAssign >= s.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= s.start && (t.parenthesizedBind = -1)), s
                }, Y.parseSubscripts = function(t, e, i, r) {
                  for (var s = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
                    var a = this.parseSubscript(t, e, i, r, s, n);
                    if (a.optional && (n = !0), a === t || "ArrowFunctionExpression" === a.type) {
                      if (n) {
                        var o = this.startNodeAt(e, i);
                        o.expression = a, a = this.finishNode(o, "ChainExpression")
                      }
                      return a
                    }
                    t = a
                  }
                }, Y.parseSubscript = function(t, e, i, r, s, n) {
                  var a = this.options.ecmaVersion >= 11,
                    o = a && this.eat(b.questionDot);
                  r && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                  var h = this.eat(b.bracketL);
                  if (h || o && this.type !== b.parenL && this.type !== b.backQuote || this.eat(b.dot)) {
                    var c = this.startNodeAt(e, i);
                    c.object = t, c.property = h ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), c.computed = !!h, h && this.expect(b.bracketR), a && (c.optional = o), t = this.finishNode(c, "MemberExpression")
                  } else if (!r && this.eat(b.parenL)) {
                    var p = new G,
                      l = this.yieldPos,
                      u = this.awaitPos,
                      f = this.awaitIdentPos;
                    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                    var d = this.parseExprList(b.parenR, this.options.ecmaVersion >= 8, !1, p);
                    if (s && !o && !this.canInsertSemicolon() && this.eat(b.arrow)) return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = l, this.awaitPos = u, this.awaitIdentPos = f, this.parseArrowExpression(this.startNodeAt(e, i), d, !0);
                    this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = u || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
                    var m = this.startNodeAt(e, i);
                    m.callee = t, m.arguments = d, a && (m.optional = o), t = this.finishNode(m, "CallExpression")
                  } else if (this.type === b.backQuote) {
                    (o || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                    var g = this.startNodeAt(e, i);
                    g.tag = t, g.quasi = this.parseTemplate({
                      isTagged: !0
                    }), t = this.finishNode(g, "TaggedTemplateExpression")
                  }
                  return t
                }, Y.parseExprAtom = function(t) {
                  this.type === b.slash && this.readRegexp();
                  var e, i = this.potentialArrowAt === this.start;
                  switch (this.type) {
                    case b._super:
                      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), e = this.startNode(), this.next(), this.type !== b.parenL || this.allowDirectSuper || this.raise(e.start, "super() call outside constructor of a subclass"), this.type !== b.dot && this.type !== b.bracketL && this.type !== b.parenL && this.unexpected(), this.finishNode(e, "Super");
                    case b._this:
                      return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
                    case b.name:
                      var r = this.start,
                        s = this.startLoc,
                        n = this.containsEsc,
                        a = this.parseIdent(!1);
                      if (this.options.ecmaVersion >= 8 && !n && "async" === a.name && !this.canInsertSemicolon() && this.eat(b._function)) return this.parseFunction(this.startNodeAt(r, s), 0, !1, !0);
                      if (i && !this.canInsertSemicolon()) {
                        if (this.eat(b.arrow)) return this.parseArrowExpression(this.startNodeAt(r, s), [a], !1);
                        if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === b.name && !n) return a = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(b.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(r, s), [a], !0)
                      }
                      return a;
                    case b.regexp:
                      var o = this.value;
                      return (e = this.parseLiteral(o.value)).regex = {
                        pattern: o.pattern,
                        flags: o.flags
                      }, e;
                    case b.num:
                    case b.string:
                      return this.parseLiteral(this.value);
                    case b._null:
                    case b._true:
                    case b._false:
                      return (e = this.startNode()).value = this.type === b._null ? null : this.type === b._true, e.raw = this.type.keyword, this.next(), this.finishNode(e, "Literal");
                    case b.parenL:
                      var h = this.start,
                        c = this.parseParenAndDistinguishExpression(i);
                      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(c) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), c;
                    case b.bracketL:
                      return e = this.startNode(), this.next(), e.elements = this.parseExprList(b.bracketR, !0, !0, t), this.finishNode(e, "ArrayExpression");
                    case b.braceL:
                      return this.parseObj(!1, t);
                    case b._function:
                      return e = this.startNode(), this.next(), this.parseFunction(e, 0);
                    case b._class:
                      return this.parseClass(this.startNode(), !1);
                    case b._new:
                      return this.parseNew();
                    case b.backQuote:
                      return this.parseTemplate();
                    case b._import:
                      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
                    default:
                      this.unexpected()
                  }
                }, Y.parseExprImport = function() {
                  var t = this.startNode();
                  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
                  var e = this.parseIdent(!0);
                  switch (this.type) {
                    case b.parenL:
                      return this.parseDynamicImport(t);
                    case b.dot:
                      return t.meta = e, this.parseImportMeta(t);
                    default:
                      this.unexpected()
                  }
                }, Y.parseDynamicImport = function(t) {
                  if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(b.parenR)) {
                    var e = this.start;
                    this.eat(b.comma) && this.eat(b.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
                  }
                  return this.finishNode(t, "ImportExpression")
                }, Y.parseImportMeta = function(t) {
                  this.next();
                  var e = this.containsEsc;
                  return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" !== this.options.sourceType && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
                }, Y.parseLiteral = function(t) {
                  var e = this.startNode();
                  return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
                }, Y.parseParenExpression = function() {
                  this.expect(b.parenL);
                  var t = this.parseExpression();
                  return this.expect(b.parenR), t
                }, Y.parseParenAndDistinguishExpression = function(t) {
                  var e, i = this.start,
                    r = this.startLoc,
                    s = this.options.ecmaVersion >= 8;
                  if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var n, a = this.start,
                      o = this.startLoc,
                      h = [],
                      c = !0,
                      p = !1,
                      l = new G,
                      u = this.yieldPos,
                      f = this.awaitPos;
                    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== b.parenR;) {
                      if (c ? c = !1 : this.expect(b.comma), s && this.afterTrailingComma(b.parenR, !0)) {
                        p = !0;
                        break
                      }
                      if (this.type === b.ellipsis) {
                        n = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === b.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                        break
                      }
                      h.push(this.parseMaybeAssign(!1, l, this.parseParenItem))
                    }
                    var d = this.start,
                      m = this.startLoc;
                    if (this.expect(b.parenR), t && !this.canInsertSemicolon() && this.eat(b.arrow)) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = u, this.awaitPos = f, this.parseParenArrowList(i, r, h);
                    h.length && !p || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = f || this.awaitPos, h.length > 1 ? ((e = this.startNodeAt(a, o)).expressions = h, this.finishNodeAt(e, "SequenceExpression", d, m)) : e = h[0]
                  } else e = this.parseParenExpression();
                  if (this.options.preserveParens) {
                    var g = this.startNodeAt(i, r);
                    return g.expression = e, this.finishNode(g, "ParenthesizedExpression")
                  }
                  return e
                }, Y.parseParenItem = function(t) {
                  return t
                }, Y.parseParenArrowList = function(t, e, i) {
                  return this.parseArrowExpression(this.startNodeAt(t, e), i)
                };
                var $ = [];
                Y.parseNew = function() {
                  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                  var t = this.startNode(),
                    e = this.parseIdent(!0);
                  if (this.options.ecmaVersion >= 6 && this.eat(b.dot)) {
                    t.meta = e;
                    var i = this.containsEsc;
                    return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction || this.raiseRecoverable(t.start, "'new.target' can only be used in functions"), this.finishNode(t, "MetaProperty")
                  }
                  var r = this.start,
                    s = this.startLoc,
                    n = this.type === b._import;
                  return t.callee = this.parseSubscripts(this.parseExprAtom(), r, s, !0), n && "ImportExpression" === t.callee.type && this.raise(r, "Cannot use new with import()"), this.eat(b.parenL) ? t.arguments = this.parseExprList(b.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = $, this.finishNode(t, "NewExpression")
                }, Y.parseTemplateElement = function(t) {
                  var e = t.isTagged,
                    i = this.startNode();
                  return this.type === b.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
                    raw: this.value,
                    cooked: null
                  }) : i.value = {
                    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                    cooked: this.value
                  }, this.next(), i.tail = this.type === b.backQuote, this.finishNode(i, "TemplateElement")
                }, Y.parseTemplate = function(t) {
                  void 0 === t && (t = {});
                  var e = t.isTagged;
                  void 0 === e && (e = !1);
                  var i = this.startNode();
                  this.next(), i.expressions = [];
                  var r = this.parseTemplateElement({
                    isTagged: e
                  });
                  for (i.quasis = [r]; !r.tail;) this.type === b.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(b.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(b.braceR), i.quasis.push(r = this.parseTemplateElement({
                    isTagged: e
                  }));
                  return this.next(), this.finishNode(i, "TemplateLiteral")
                }, Y.isAsyncProp = function(t) {
                  return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === b.name || this.type === b.num || this.type === b.string || this.type === b.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === b.star) && !_.test(this.input.slice(this.lastTokEnd, this.start))
                }, Y.parseObj = function(t, e) {
                  var i = this.startNode(),
                    r = !0,
                    s = {};
                  for (i.properties = [], this.next(); !this.eat(b.braceR);) {
                    if (r) r = !1;
                    else if (this.expect(b.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(b.braceR)) break;
                    var n = this.parseProperty(t, e);
                    t || this.checkPropClash(n, s, e), i.properties.push(n)
                  }
                  return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
                }, Y.parseProperty = function(t, e) {
                  var i, r, s, n, a = this.startNode();
                  if (this.options.ecmaVersion >= 9 && this.eat(b.ellipsis)) return t ? (a.argument = this.parseIdent(!1), this.type === b.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === b.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, e), this.type === b.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
                  this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (t || e) && (s = this.start, n = this.startLoc), t || (i = this.eat(b.star)));
                  var o = this.containsEsc;
                  return this.parsePropertyName(a), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a) ? (r = !0, i = this.options.ecmaVersion >= 9 && this.eat(b.star), this.parsePropertyName(a, e)) : r = !1, this.parsePropertyValue(a, t, i, r, s, n, e, o), this.finishNode(a, "Property")
                }, Y.parsePropertyValue = function(t, e, i, r, s, n, a, o) {
                  if ((i || r) && this.type === b.colon && this.unexpected(), this.eat(b.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), t.kind = "init";
                  else if (this.options.ecmaVersion >= 6 && this.type === b.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, r);
                  else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === b.comma || this.type === b.braceR || this.type === b.eq) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || r) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = s), t.kind = "init", e ? t.value = this.parseMaybeDefault(s, n, this.copyNode(t.key)) : this.type === b.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), t.value = this.parseMaybeDefault(s, n, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected();
                  else {
                    (i || r) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                    var h = "get" === t.kind ? 0 : 1;
                    if (t.value.params.length !== h) {
                      var c = t.value.start;
                      "get" === t.kind ? this.raiseRecoverable(c, "getter should have no params") : this.raiseRecoverable(c, "setter should have exactly one param")
                    } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
                  }
                }, Y.parsePropertyName = function(t) {
                  if (this.options.ecmaVersion >= 6) {
                    if (this.eat(b.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(b.bracketR), t.key;
                    t.computed = !1
                  }
                  return t.key = this.type === b.num || this.type === b.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
                }, Y.initFunction = function(t) {
                  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
                }, Y.parseMethod = function(t, e, i) {
                  var r = this.startNode(),
                    s = this.yieldPos,
                    n = this.awaitPos,
                    a = this.awaitIdentPos;
                  return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = t), this.options.ecmaVersion >= 8 && (r.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | D(e, r.generator) | (i ? 128 : 0)), this.expect(b.parenL), r.params = this.parseBindingList(b.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(r, "FunctionExpression")
                }, Y.parseArrowExpression = function(t, e, i) {
                  var r = this.yieldPos,
                    s = this.awaitPos,
                    n = this.awaitIdentPos;
                  return this.enterScope(16 | D(i, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1), this.yieldPos = r, this.awaitPos = s, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
                }, Y.parseFunctionBody = function(t, e, i) {
                  var r = e && this.type !== b.braceL,
                    s = this.strict,
                    n = !1;
                  if (r) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);
                  else {
                    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                    s && !a || (n = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                    var o = this.labels;
                    this.labels = [], n && (this.strict = !0), this.checkParams(t, !s && !n && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !s), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = o
                  }
                  this.exitScope()
                }, Y.isSimpleParamList = function(t) {
                  for (var e = 0, i = t; e < i.length; e += 1)
                    if ("Identifier" !== i[e].type) return !1;
                  return !0
                }, Y.checkParams = function(t, e) {
                  for (var i = Object.create(null), r = 0, s = t.params; r < s.length; r += 1) {
                    var n = s[r];
                    this.checkLValInnerPattern(n, 1, e ? null : i)
                  }
                }, Y.parseExprList = function(t, e, i, r) {
                  for (var s = [], n = !0; !this.eat(t);) {
                    if (n) n = !1;
                    else if (this.expect(b.comma), e && this.afterTrailingComma(t)) break;
                    var a = void 0;
                    i && this.type === b.comma ? a = null : this.type === b.ellipsis ? (a = this.parseSpread(r), r && this.type === b.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, r), s.push(a)
                  }
                  return s
                }, Y.checkUnreserved = function(t) {
                  var e = t.start,
                    i = t.end,
                    r = t.name;
                  this.inGenerator && "yield" === r && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === r && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(r) && this.raise(e, "Unexpected keyword '" + r + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, i).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(r) && (this.inAsync || "await" !== r || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + r + "' is reserved"))
                }, Y.parseIdent = function(t, e) {
                  var i = this.startNode();
                  return this.type === b.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(!!t), this.finishNode(i, "Identifier"), t || (this.checkUnreserved(i), "await" !== i.name || this.awaitIdentPos || (this.awaitIdentPos = i.start)), i
                }, Y.parseYield = function(t) {
                  this.yieldPos || (this.yieldPos = this.start);
                  var e = this.startNode();
                  return this.next(), this.type === b.semi || this.canInsertSemicolon() || this.type !== b.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(b.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
                }, Y.parseAwait = function() {
                  this.awaitPos || (this.awaitPos = this.start);
                  var t = this.startNode();
                  return this.next(), t.argument = this.parseMaybeUnary(null, !0), this.finishNode(t, "AwaitExpression")
                };
                var J = H.prototype;
                J.raise = function(t, e) {
                  var i = R(this.input, t);
                  e += " (" + i.line + ":" + i.column + ")";
                  var r = new SyntaxError(e);
                  throw r.pos = t, r.loc = i, r.raisedAt = this.pos, r
                }, J.raiseRecoverable = J.raise, J.curPosition = function() {
                  if (this.options.locations) return new L(this.curLine, this.pos - this.lineStart)
                };
                var tt = H.prototype,
                  et = function(t) {
                    this.flags = t, this.var = [], this.lexical = [], this.functions = []
                  };
                tt.enterScope = function(t) {
                  this.scopeStack.push(new et(t))
                }, tt.exitScope = function() {
                  this.scopeStack.pop()
                }, tt.treatFunctionsAsVarInScope = function(t) {
                  return 2 & t.flags || !this.inModule && 1 & t.flags
                }, tt.declareName = function(t, e, i) {
                  var r = !1;
                  if (2 === e) {
                    var s = this.currentScope();
                    r = s.lexical.indexOf(t) > -1 || s.functions.indexOf(t) > -1 || s.var.indexOf(t) > -1, s.lexical.push(t), this.inModule && 1 & s.flags && delete this.undefinedExports[t]
                  } else if (4 === e) this.currentScope().lexical.push(t);
                  else if (3 === e) {
                    var n = this.currentScope();
                    r = this.treatFunctionsAsVar ? n.lexical.indexOf(t) > -1 : n.lexical.indexOf(t) > -1 || n.var.indexOf(t) > -1, n.functions.push(t)
                  } else
                    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                      var o = this.scopeStack[a];
                      if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
                        r = !0;
                        break
                      }
                      if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 3 & o.flags) break
                    }
                  r && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
                }, tt.checkLocalExport = function(t) {
                  -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
                }, tt.currentScope = function() {
                  return this.scopeStack[this.scopeStack.length - 1]
                }, tt.currentVarScope = function() {
                  for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (3 & e.flags) return e
                  }
                }, tt.currentThisScope = function() {
                  for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (3 & e.flags && !(16 & e.flags)) return e
                  }
                };
                var it = function(t, e, i) {
                    this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new O(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
                  },
                  rt = H.prototype;

                function st(t, e, i, r) {
                  return t.type = e, t.end = i, this.options.locations && (t.loc.end = r), this.options.ranges && (t.range[1] = i), t
                }
                rt.startNode = function() {
                  return new it(this, this.start, this.startLoc)
                }, rt.startNodeAt = function(t, e) {
                  return new it(this, t, e)
                }, rt.finishNode = function(t, e) {
                  return st.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
                }, rt.finishNodeAt = function(t, e, i, r) {
                  return st.call(this, t, e, i, r)
                }, rt.copyNode = function(t) {
                  var e = new it(this, t.start, this.startLoc);
                  for (var i in t) e[i] = t[i];
                  return e
                };
                var nt = function(t, e, i, r, s) {
                    this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = r, this.generator = !!s
                  },
                  at = {
                    b_stat: new nt("{", !1),
                    b_expr: new nt("{", !0),
                    b_tmpl: new nt("${", !1),
                    p_stat: new nt("(", !1),
                    p_expr: new nt("(", !0),
                    q_tmpl: new nt("`", !0, !0, (function(t) {
                      return t.tryReadTemplateToken()
                    })),
                    f_stat: new nt("function", !1),
                    f_expr: new nt("function", !0),
                    f_expr_gen: new nt("function", !0, !1, null, !0),
                    f_gen: new nt("function", !1, !1, null, !0)
                  },
                  ot = H.prototype;
                ot.initialContext = function() {
                  return [at.b_stat]
                }, ot.braceIsBlock = function(t) {
                  var e = this.curContext();
                  return e === at.f_expr || e === at.f_stat || (t !== b.colon || e !== at.b_stat && e !== at.b_expr ? t === b._return || t === b.name && this.exprAllowed ? _.test(this.input.slice(this.lastTokEnd, this.start)) : t === b._else || t === b.semi || t === b.eof || t === b.parenR || t === b.arrow || (t === b.braceL ? e === at.b_stat : t !== b._var && t !== b._const && t !== b.name && !this.exprAllowed) : !e.isExpr)
                }, ot.inGeneratorContext = function() {
                  for (var t = this.context.length - 1; t >= 1; t--) {
                    var e = this.context[t];
                    if ("function" === e.token) return e.generator
                  }
                  return !1
                }, ot.updateContext = function(t) {
                  var e, i = this.type;
                  i.keyword && t === b.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
                }, b.parenR.updateContext = b.braceR.updateContext = function() {
                  if (1 !== this.context.length) {
                    var t = this.context.pop();
                    t === at.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
                  } else this.exprAllowed = !0
                }, b.braceL.updateContext = function(t) {
                  this.context.push(this.braceIsBlock(t) ? at.b_stat : at.b_expr), this.exprAllowed = !0
                }, b.dollarBraceL.updateContext = function() {
                  this.context.push(at.b_tmpl), this.exprAllowed = !0
                }, b.parenL.updateContext = function(t) {
                  var e = t === b._if || t === b._for || t === b._with || t === b._while;
                  this.context.push(e ? at.p_stat : at.p_expr), this.exprAllowed = !0
                }, b.incDec.updateContext = function() {}, b._function.updateContext = b._class.updateContext = function(t) {
                  !t.beforeExpr || t === b._else || t === b.semi && this.curContext() !== at.p_stat || t === b._return && _.test(this.input.slice(this.lastTokEnd, this.start)) || (t === b.colon || t === b.braceL) && this.curContext() === at.b_stat ? this.context.push(at.f_stat) : this.context.push(at.f_expr), this.exprAllowed = !1
                }, b.backQuote.updateContext = function() {
                  this.curContext() === at.q_tmpl ? this.context.pop() : this.context.push(at.q_tmpl), this.exprAllowed = !1
                }, b.star.updateContext = function(t) {
                  if (t === b._function) {
                    var e = this.context.length - 1;
                    this.context[e] === at.f_expr ? this.context[e] = at.f_expr_gen : this.context[e] = at.f_gen
                  }
                  this.exprAllowed = !0
                }, b.name.updateContext = function(t) {
                  var e = !1;
                  this.options.ecmaVersion >= 6 && t !== b.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
                };
                var ht = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                  ct = ht + " Extended_Pictographic",
                  pt = {
                    9: ht,
                    10: ct,
                    11: ct,
                    12: ct + " EBase EComp EMod EPres ExtPict"
                  },
                  lt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                  ut = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                  ft = ut + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                  dt = ft + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
                  mt = {
                    9: ut,
                    10: ft,
                    11: dt,
                    12: dt + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi"
                  },
                  gt = {};

                function yt(t) {
                  var e = gt[t] = {
                    binary: N(pt[t] + " " + lt),
                    nonBinary: {
                      General_Category: N(lt),
                      Script: N(mt[t])
                    }
                  };
                  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions
                }
                yt(9), yt(10), yt(11), yt(12);
                var vt = H.prototype,
                  xt = function(t) {
                    this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = gt[t.options.ecmaVersion >= 12 ? 12 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
                  };

                function bt(t) {
                  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                }

                function _t(t) {
                  return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
                }

                function Et(t) {
                  return t >= 65 && t <= 90 || t >= 97 && t <= 122
                }

                function St(t) {
                  return Et(t) || 95 === t
                }

                function wt(t) {
                  return St(t) || kt(t)
                }

                function kt(t) {
                  return t >= 48 && t <= 57
                }

                function Ct(t) {
                  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
                }

                function At(t) {
                  return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
                }

                function Tt(t) {
                  return t >= 48 && t <= 55
                }
                xt.prototype.reset = function(t, e, i) {
                  var r = -1 !== i.indexOf("u");
                  this.start = 0 | t, this.source = e + "", this.flags = i, this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchN = r && this.parser.options.ecmaVersion >= 9
                }, xt.prototype.raise = function(t) {
                  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
                }, xt.prototype.at = function(t, e) {
                  void 0 === e && (e = !1);
                  var i = this.source,
                    r = i.length;
                  if (t >= r) return -1;
                  var s = i.charCodeAt(t);
                  if (!e && !this.switchU || s <= 55295 || s >= 57344 || t + 1 >= r) return s;
                  var n = i.charCodeAt(t + 1);
                  return n >= 56320 && n <= 57343 ? (s << 10) + n - 56613888 : s
                }, xt.prototype.nextIndex = function(t, e) {
                  void 0 === e && (e = !1);
                  var i = this.source,
                    r = i.length;
                  if (t >= r) return r;
                  var s, n = i.charCodeAt(t);
                  return !e && !this.switchU || n <= 55295 || n >= 57344 || t + 1 >= r || (s = i.charCodeAt(t + 1)) < 56320 || s > 57343 ? t + 1 : t + 2
                }, xt.prototype.current = function(t) {
                  return void 0 === t && (t = !1), this.at(this.pos, t)
                }, xt.prototype.lookahead = function(t) {
                  return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
                }, xt.prototype.advance = function(t) {
                  void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
                }, xt.prototype.eat = function(t, e) {
                  return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
                }, vt.validateRegExpFlags = function(t) {
                  for (var e = t.validFlags, i = t.flags, r = 0; r < i.length; r++) {
                    var s = i.charAt(r); - 1 === e.indexOf(s) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(s, r + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag")
                  }
                }, vt.validateRegExpPattern = function(t) {
                  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t))
                }, vt.regexp_pattern = function(t) {
                  t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                  for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                    var r = i[e]; - 1 === t.groupNames.indexOf(r) && t.raise("Invalid named capture referenced")
                  }
                }, vt.regexp_disjunction = function(t) {
                  for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
                  this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
                }, vt.regexp_alternative = function(t) {
                  for (; t.pos < t.source.length && this.regexp_eatTerm(t););
                }, vt.regexp_eatTerm = function(t) {
                  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !!(t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
                }, vt.regexp_eatAssertion = function(t) {
                  var e = t.pos;
                  if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return !0;
                  if (t.eat(92)) {
                    if (t.eat(66) || t.eat(98)) return !0;
                    t.pos = e
                  }
                  if (t.eat(40) && t.eat(63)) {
                    var i = !1;
                    if (this.options.ecmaVersion >= 9 && (i = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t), t.eat(41) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !i, !0
                  }
                  return t.pos = e, !1
                }, vt.regexp_eatQuantifier = function(t, e) {
                  return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
                }, vt.regexp_eatQuantifierPrefix = function(t, e) {
                  return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
                }, vt.regexp_eatBracedQuantifier = function(t, e) {
                  var i = t.pos;
                  if (t.eat(123)) {
                    var r = 0,
                      s = -1;
                    if (this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue), t.eat(125))) return -1 !== s && s < r && !e && t.raise("numbers out of order in {} quantifier"), !0;
                    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
                  }
                  return !1
                }, vt.regexp_eatAtom = function(t) {
                  return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
                }, vt.regexp_eatReverseSolidusAtomEscape = function(t) {
                  var e = t.pos;
                  if (t.eat(92)) {
                    if (this.regexp_eatAtomEscape(t)) return !0;
                    t.pos = e
                  }
                  return !1
                }, vt.regexp_eatUncapturingGroup = function(t) {
                  var e = t.pos;
                  if (t.eat(40)) {
                    if (t.eat(63) && t.eat(58)) {
                      if (this.regexp_disjunction(t), t.eat(41)) return !0;
                      t.raise("Unterminated group")
                    }
                    t.pos = e
                  }
                  return !1
                }, vt.regexp_eatCapturingGroup = function(t) {
                  if (t.eat(40)) {
                    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                    t.raise("Unterminated group")
                  }
                  return !1
                }, vt.regexp_eatExtendedAtom = function(t) {
                  return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
                }, vt.regexp_eatInvalidBracedQuantifier = function(t) {
                  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
                }, vt.regexp_eatSyntaxCharacter = function(t) {
                  var e = t.current();
                  return !!_t(e) && (t.lastIntValue = e, t.advance(), !0)
                }, vt.regexp_eatPatternCharacters = function(t) {
                  for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !_t(i);) t.advance();
                  return t.pos !== e
                }, vt.regexp_eatExtendedPatternCharacter = function(t) {
                  var e = t.current();
                  return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e || (t.advance(), 0))
                }, vt.regexp_groupSpecifier = function(t) {
                  if (t.eat(63)) {
                    if (this.regexp_eatGroupName(t)) return -1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"), void t.groupNames.push(t.lastStringValue);
                    t.raise("Invalid group")
                  }
                }, vt.regexp_eatGroupName = function(t) {
                  if (t.lastStringValue = "", t.eat(60)) {
                    if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                    t.raise("Invalid capture group name")
                  }
                  return !1
                }, vt.regexp_eatRegExpIdentifierName = function(t) {
                  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                    for (t.lastStringValue += bt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += bt(t.lastIntValue);
                    return !0
                  }
                  return !1
                }, vt.regexp_eatRegExpIdentifierStart = function(t) {
                  var e = t.pos,
                    i = this.options.ecmaVersion >= 11,
                    r = t.current(i);
                  return t.advance(i), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (r = t.lastIntValue),
                    function(t) {
                      return u(t, !0) || 36 === t || 95 === t
                    }(r) ? (t.lastIntValue = r, !0) : (t.pos = e, !1)
                }, vt.regexp_eatRegExpIdentifierPart = function(t) {
                  var e = t.pos,
                    i = this.options.ecmaVersion >= 11,
                    r = t.current(i);
                  return t.advance(i), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (r = t.lastIntValue),
                    function(t) {
                      return f(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
                    }(r) ? (t.lastIntValue = r, !0) : (t.pos = e, !1)
                }, vt.regexp_eatAtomEscape = function(t) {
                  return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
                }, vt.regexp_eatBackReference = function(t) {
                  var e = t.pos;
                  if (this.regexp_eatDecimalEscape(t)) {
                    var i = t.lastIntValue;
                    if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                    if (i <= t.numCapturingParens) return !0;
                    t.pos = e
                  }
                  return !1
                }, vt.regexp_eatKGroupName = function(t) {
                  if (t.eat(107)) {
                    if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                    t.raise("Invalid named reference")
                  }
                  return !1
                }, vt.regexp_eatCharacterEscape = function(t) {
                  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
                }, vt.regexp_eatCControlLetter = function(t) {
                  var e = t.pos;
                  if (t.eat(99)) {
                    if (this.regexp_eatControlLetter(t)) return !0;
                    t.pos = e
                  }
                  return !1
                }, vt.regexp_eatZero = function(t) {
                  return 48 === t.current() && !kt(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
                }, vt.regexp_eatControlEscape = function(t) {
                  var e = t.current();
                  return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
                }, vt.regexp_eatControlLetter = function(t) {
                  var e = t.current();
                  return !!Et(e) && (t.lastIntValue = e % 32, t.advance(), !0)
                }, vt.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
                  void 0 === e && (e = !1);
                  var i = t.pos,
                    r = e || t.switchU;
                  if (t.eat(117)) {
                    if (this.regexp_eatFixedHexDigits(t, 4)) {
                      var s = t.lastIntValue;
                      if (r && s >= 55296 && s <= 56319) {
                        var n = t.pos;
                        if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                          var a = t.lastIntValue;
                          if (a >= 56320 && a <= 57343) return t.lastIntValue = 1024 * (s - 55296) + (a - 56320) + 65536, !0
                        }
                        t.pos = n, t.lastIntValue = s
                      }
                      return !0
                    }
                    if (r && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && function(t) {
                        return t >= 0 && t <= 1114111
                      }(t.lastIntValue)) return !0;
                    r && t.raise("Invalid unicode escape"), t.pos = i
                  }
                  return !1
                }, vt.regexp_eatIdentityEscape = function(t) {
                  if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
                  var e = t.current();
                  return !(99 === e || t.switchN && 107 === e || (t.lastIntValue = e, t.advance(), 0))
                }, vt.regexp_eatDecimalEscape = function(t) {
                  t.lastIntValue = 0;
                  var e = t.current();
                  if (e >= 49 && e <= 57) {
                    do {
                      t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
                    } while ((e = t.current()) >= 48 && e <= 57);
                    return !0
                  }
                  return !1
                }, vt.regexp_eatCharacterClassEscape = function(t) {
                  var e = t.current();
                  if (function(t) {
                      return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
                    }(e)) return t.lastIntValue = -1, t.advance(), !0;
                  if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                    if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return !0;
                    t.raise("Invalid property name")
                  }
                  return !1
                }, vt.regexp_eatUnicodePropertyValueExpression = function(t) {
                  var e = t.pos;
                  if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                    var i = t.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(t)) {
                      var r = t.lastStringValue;
                      return this.regexp_validateUnicodePropertyNameAndValue(t, i, r), !0
                    }
                  }
                  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                    var s = t.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameOrValue(t, s), !0
                  }
                  return !1
                }, vt.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
                  I(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value")
                }, vt.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
                  t.unicodeProperties.binary.test(e) || t.raise("Invalid property name")
                }, vt.regexp_eatUnicodePropertyName = function(t) {
                  var e = 0;
                  for (t.lastStringValue = ""; St(e = t.current());) t.lastStringValue += bt(e), t.advance();
                  return "" !== t.lastStringValue
                }, vt.regexp_eatUnicodePropertyValue = function(t) {
                  var e = 0;
                  for (t.lastStringValue = ""; wt(e = t.current());) t.lastStringValue += bt(e), t.advance();
                  return "" !== t.lastStringValue
                }, vt.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
                  return this.regexp_eatUnicodePropertyValue(t)
                }, vt.regexp_eatCharacterClass = function(t) {
                  if (t.eat(91)) {
                    if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return !0;
                    t.raise("Unterminated character class")
                  }
                  return !1
                }, vt.regexp_classRanges = function(t) {
                  for (; this.regexp_eatClassAtom(t);) {
                    var e = t.lastIntValue;
                    if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                      var i = t.lastIntValue;
                      !t.switchU || -1 !== e && -1 !== i || t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class")
                    }
                  }
                }, vt.regexp_eatClassAtom = function(t) {
                  var e = t.pos;
                  if (t.eat(92)) {
                    if (this.regexp_eatClassEscape(t)) return !0;
                    if (t.switchU) {
                      var i = t.current();
                      (99 === i || Tt(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                    }
                    t.pos = e
                  }
                  var r = t.current();
                  return 93 !== r && (t.lastIntValue = r, t.advance(), !0)
                }, vt.regexp_eatClassEscape = function(t) {
                  var e = t.pos;
                  if (t.eat(98)) return t.lastIntValue = 8, !0;
                  if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
                  if (!t.switchU && t.eat(99)) {
                    if (this.regexp_eatClassControlLetter(t)) return !0;
                    t.pos = e
                  }
                  return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
                }, vt.regexp_eatClassControlLetter = function(t) {
                  var e = t.current();
                  return !(!kt(e) && 95 !== e || (t.lastIntValue = e % 32, t.advance(), 0))
                }, vt.regexp_eatHexEscapeSequence = function(t) {
                  var e = t.pos;
                  if (t.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                    t.switchU && t.raise("Invalid escape"), t.pos = e
                  }
                  return !1
                }, vt.regexp_eatDecimalDigits = function(t) {
                  var e = t.pos,
                    i = 0;
                  for (t.lastIntValue = 0; kt(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
                  return t.pos !== e
                }, vt.regexp_eatHexDigits = function(t) {
                  var e = t.pos,
                    i = 0;
                  for (t.lastIntValue = 0; Ct(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + At(i), t.advance();
                  return t.pos !== e
                }, vt.regexp_eatLegacyOctalEscapeSequence = function(t) {
                  if (this.regexp_eatOctalDigit(t)) {
                    var e = t.lastIntValue;
                    if (this.regexp_eatOctalDigit(t)) {
                      var i = t.lastIntValue;
                      e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                    } else t.lastIntValue = e;
                    return !0
                  }
                  return !1
                }, vt.regexp_eatOctalDigit = function(t) {
                  var e = t.current();
                  return Tt(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
                }, vt.regexp_eatFixedHexDigits = function(t, e) {
                  var i = t.pos;
                  t.lastIntValue = 0;
                  for (var r = 0; r < e; ++r) {
                    var s = t.current();
                    if (!Ct(s)) return t.pos = i, !1;
                    t.lastIntValue = 16 * t.lastIntValue + At(s), t.advance()
                  }
                  return !0
                };
                var It = function(t) {
                    this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new O(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
                  },
                  Pt = H.prototype;

                function Nt(t) {
                  return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
                }

                function Lt(t) {
                  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                }
                Pt.next = function(t) {
                  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new It(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
                }, Pt.getToken = function() {
                  return this.next(), new It(this)
                }, "undefined" != typeof Symbol && (Pt[Symbol.iterator] = function() {
                  var t = this;
                  return {
                    next: function() {
                      var e = t.getToken();
                      return {
                        done: e.type === b.eof,
                        value: e
                      }
                    }
                  }
                }), Pt.curContext = function() {
                  return this.context[this.context.length - 1]
                }, Pt.nextToken = function() {
                  var t = this.curContext();
                  return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(b.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
                }, Pt.readToken = function(t) {
                  return u(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
                }, Pt.fullCharCodeAtPos = function() {
                  var t = this.input.charCodeAt(this.pos);
                  return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
                }, Pt.skipBlockComment = function() {
                  var t, e = this.options.onComment && this.curPosition(),
                    i = this.pos,
                    r = this.input.indexOf("*/", this.pos += 2);
                  if (-1 === r && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations)
                    for (E.lastIndex = i;
                      (t = E.exec(this.input)) && t.index < this.pos;) ++this.curLine, this.lineStart = t.index + t[0].length;
                  this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, r), i, this.pos, e, this.curPosition())
                }, Pt.skipLineComment = function(t) {
                  for (var e = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !S(r);) r = this.input.charCodeAt(++this.pos);
                  this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
                }, Pt.skipSpace = function() {
                  t: for (; this.pos < this.input.length;) {
                    var t = this.input.charCodeAt(this.pos);
                    switch (t) {
                      case 32:
                      case 160:
                        ++this.pos;
                        break;
                      case 13:
                        10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                      case 10:
                      case 8232:
                      case 8233:
                        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                        break;
                      case 47:
                        switch (this.input.charCodeAt(this.pos + 1)) {
                          case 42:
                            this.skipBlockComment();
                            break;
                          case 47:
                            this.skipLineComment(2);
                            break;
                          default:
                            break t
                        }
                        break;
                      default:
                        if (!(t > 8 && t < 14 || t >= 5760 && w.test(String.fromCharCode(t)))) break t;
                        ++this.pos
                    }
                  }
                }, Pt.finishToken = function(t, e) {
                  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
                  var i = this.type;
                  this.type = t, this.value = e, this.updateContext(i)
                }, Pt.readToken_dot = function() {
                  var t = this.input.charCodeAt(this.pos + 1);
                  if (t >= 48 && t <= 57) return this.readNumber(!0);
                  var e = this.input.charCodeAt(this.pos + 2);
                  return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(b.ellipsis)) : (++this.pos, this.finishToken(b.dot))
                }, Pt.readToken_slash = function() {
                  var t = this.input.charCodeAt(this.pos + 1);
                  return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(b.assign, 2) : this.finishOp(b.slash, 1)
                }, Pt.readToken_mult_modulo_exp = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1),
                    i = 1,
                    r = 42 === t ? b.star : b.modulo;
                  return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, r = b.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(b.assign, i + 1) : this.finishOp(r, i)
                }, Pt.readToken_pipe_amp = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(b.assign, 3) : this.finishOp(124 === t ? b.logicalOR : b.logicalAND, 2) : 61 === e ? this.finishOp(b.assign, 2) : this.finishOp(124 === t ? b.bitwiseOR : b.bitwiseAND, 1)
                }, Pt.readToken_caret = function() {
                  return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(b.assign, 2) : this.finishOp(b.bitwiseXOR, 1)
                }, Pt.readToken_plus_min = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !_.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(b.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(b.assign, 2) : this.finishOp(b.plusMin, 1)
                }, Pt.readToken_lt_gt = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1),
                    i = 1;
                  return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(b.assign, i + 1) : this.finishOp(b.bitShift, i)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(b.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
                }, Pt.readToken_eq_excl = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return 61 === e ? this.finishOp(b.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(b.arrow)) : this.finishOp(61 === t ? b.eq : b.prefix, 1)
                }, Pt.readToken_question = function() {
                  var t = this.options.ecmaVersion;
                  if (t >= 11) {
                    var e = this.input.charCodeAt(this.pos + 1);
                    if (46 === e) {
                      var i = this.input.charCodeAt(this.pos + 2);
                      if (i < 48 || i > 57) return this.finishOp(b.questionDot, 2)
                    }
                    if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(b.assign, 3) : this.finishOp(b.coalesce, 2)
                  }
                  return this.finishOp(b.question, 1)
                }, Pt.getTokenFromCode = function(t) {
                  switch (t) {
                    case 46:
                      return this.readToken_dot();
                    case 40:
                      return ++this.pos, this.finishToken(b.parenL);
                    case 41:
                      return ++this.pos, this.finishToken(b.parenR);
                    case 59:
                      return ++this.pos, this.finishToken(b.semi);
                    case 44:
                      return ++this.pos, this.finishToken(b.comma);
                    case 91:
                      return ++this.pos, this.finishToken(b.bracketL);
                    case 93:
                      return ++this.pos, this.finishToken(b.bracketR);
                    case 123:
                      return ++this.pos, this.finishToken(b.braceL);
                    case 125:
                      return ++this.pos, this.finishToken(b.braceR);
                    case 58:
                      return ++this.pos, this.finishToken(b.colon);
                    case 96:
                      if (this.options.ecmaVersion < 6) break;
                      return ++this.pos, this.finishToken(b.backQuote);
                    case 48:
                      var e = this.input.charCodeAt(this.pos + 1);
                      if (120 === e || 88 === e) return this.readRadixNumber(16);
                      if (this.options.ecmaVersion >= 6) {
                        if (111 === e || 79 === e) return this.readRadixNumber(8);
                        if (98 === e || 66 === e) return this.readRadixNumber(2)
                      }
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      return this.readNumber(!1);
                    case 34:
                    case 39:
                      return this.readString(t);
                    case 47:
                      return this.readToken_slash();
                    case 37:
                    case 42:
                      return this.readToken_mult_modulo_exp(t);
                    case 124:
                    case 38:
                      return this.readToken_pipe_amp(t);
                    case 94:
                      return this.readToken_caret();
                    case 43:
                    case 45:
                      return this.readToken_plus_min(t);
                    case 60:
                    case 62:
                      return this.readToken_lt_gt(t);
                    case 61:
                    case 33:
                      return this.readToken_eq_excl(t);
                    case 63:
                      return this.readToken_question();
                    case 126:
                      return this.finishOp(b.prefix, 1)
                  }
                  this.raise(this.pos, "Unexpected character '" + Lt(t) + "'")
                }, Pt.finishOp = function(t, e) {
                  var i = this.input.slice(this.pos, this.pos + e);
                  return this.pos += e, this.finishToken(t, i)
                }, Pt.readRegexp = function() {
                  for (var t, e, i = this.pos;;) {
                    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                    var r = this.input.charAt(this.pos);
                    if (_.test(r) && this.raise(i, "Unterminated regular expression"), t) t = !1;
                    else {
                      if ("[" === r) e = !0;
                      else if ("]" === r && e) e = !1;
                      else if ("/" === r && !e) break;
                      t = "\\" === r
                    }++this.pos
                  }
                  var s = this.input.slice(i, this.pos);
                  ++this.pos;
                  var n = this.pos,
                    a = this.readWord1();
                  this.containsEsc && this.unexpected(n);
                  var o = this.regexpState || (this.regexpState = new xt(this));
                  o.reset(i, s, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                  var h = null;
                  try {
                    h = new RegExp(s, a)
                  } catch (t) {}
                  return this.finishToken(b.regexp, {
                    pattern: s,
                    flags: a,
                    value: h
                  })
                }, Pt.readInt = function(t, e, i) {
                  for (var r = this.options.ecmaVersion >= 12 && void 0 === e, s = i && 48 === this.input.charCodeAt(this.pos), n = this.pos, a = 0, o = 0, h = 0, c = null == e ? 1 / 0 : e; h < c; ++h, ++this.pos) {
                    var p = this.input.charCodeAt(this.pos),
                      l = void 0;
                    if (r && 95 === p) s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = p;
                    else {
                      if ((l = p >= 97 ? p - 97 + 10 : p >= 65 ? p - 65 + 10 : p >= 48 && p <= 57 ? p - 48 : 1 / 0) >= t) break;
                      o = p, a = a * t + l
                    }
                  }
                  return r && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || null != e && this.pos - n !== e ? null : a
                }, Pt.readRadixNumber = function(t) {
                  var e = this.pos;
                  this.pos += 2;
                  var i = this.readInt(t);
                  return null == i && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = Nt(this.input.slice(e, this.pos)), ++this.pos) : u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(b.num, i)
                }, Pt.readNumber = function(t) {
                  var e = this.pos;
                  t || null !== this.readInt(10, void 0, !0) || this.raise(e, "Invalid number");
                  var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
                  i && this.strict && this.raise(e, "Invalid number");
                  var r = this.input.charCodeAt(this.pos);
                  if (!i && !t && this.options.ecmaVersion >= 11 && 110 === r) {
                    var s = Nt(this.input.slice(e, this.pos));
                    return ++this.pos, u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(b.num, s)
                  }
                  i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), 46 !== r || i || (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), 69 !== r && 101 !== r || i || (43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                  var n = function(t, e) {
                    return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""))
                  }(this.input.slice(e, this.pos), i);
                  return this.finishToken(b.num, n)
                }, Pt.readCodePoint = function() {
                  var t;
                  if (123 === this.input.charCodeAt(this.pos)) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var e = ++this.pos;
                    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
                  } else t = this.readHexChar(4);
                  return t
                }, Pt.readString = function(t) {
                  for (var e = "", i = ++this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                    var r = this.input.charCodeAt(this.pos);
                    if (r === t) break;
                    92 === r ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : (S(r, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                  }
                  return e += this.input.slice(i, this.pos++), this.finishToken(b.string, e)
                };
                var Ot = {};
                Pt.tryReadTemplateToken = function() {
                  this.inTemplateElement = !0;
                  try {
                    this.readTmplToken()
                  } catch (t) {
                    if (t !== Ot) throw t;
                    this.readInvalidTemplateToken()
                  }
                  this.inTemplateElement = !1
                }, Pt.invalidStringToken = function(t, e) {
                  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ot;
                  this.raise(t, e)
                }, Pt.readTmplToken = function() {
                  for (var t = "", e = this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                    var i = this.input.charCodeAt(this.pos);
                    if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== b.template && this.type !== b.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(b.template, t)) : 36 === i ? (this.pos += 2, this.finishToken(b.dollarBraceL)) : (++this.pos, this.finishToken(b.backQuote));
                    if (92 === i) t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
                    else if (S(i)) {
                      switch (t += this.input.slice(e, this.pos), ++this.pos, i) {
                        case 13:
                          10 === this.input.charCodeAt(this.pos) && ++this.pos;
                        case 10:
                          t += "\n";
                          break;
                        default:
                          t += String.fromCharCode(i)
                      }
                      this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos
                    } else ++this.pos
                  }
                }, Pt.readInvalidTemplateToken = function() {
                  for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                    case "\\":
                      ++this.pos;
                      break;
                    case "$":
                      if ("{" !== this.input[this.pos + 1]) break;
                    case "`":
                      return this.finishToken(b.invalidTemplate, this.input.slice(this.start, this.pos))
                  }
                  this.raise(this.start, "Unterminated template")
                }, Pt.readEscapedChar = function(t) {
                  var e = this.input.charCodeAt(++this.pos);
                  switch (++this.pos, e) {
                    case 110:
                      return "\n";
                    case 114:
                      return "\r";
                    case 120:
                      return String.fromCharCode(this.readHexChar(2));
                    case 117:
                      return Lt(this.readCodePoint());
                    case 116:
                      return "\t";
                    case 98:
                      return "\b";
                    case 118:
                      return "\v";
                    case 102:
                      return "\f";
                    case 13:
                      10 === this.input.charCodeAt(this.pos) && ++this.pos;
                    case 10:
                      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                    case 56:
                    case 57:
                      if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), t) {
                        var i = this.pos - 1;
                        return this.invalidStringToken(i, "Invalid escape sequence in template string"), null
                      }
                    default:
                      if (e >= 48 && e <= 55) {
                        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                          s = parseInt(r, 8);
                        return s > 255 && (r = r.slice(0, -1), s = parseInt(r, 8)), this.pos += r.length - 1, e = this.input.charCodeAt(this.pos), "0" === r && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - r.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(s)
                      }
                      return S(e) ? "" : String.fromCharCode(e)
                  }
                }, Pt.readHexChar = function(t) {
                  var e = this.pos,
                    i = this.readInt(16, t);
                  return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
                }, Pt.readWord1 = function() {
                  this.containsEsc = !1;
                  for (var t = "", e = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                    var s = this.fullCharCodeAtPos();
                    if (f(s, r)) this.pos += s <= 65535 ? 1 : 2;
                    else {
                      if (92 !== s) break;
                      this.containsEsc = !0, t += this.input.slice(i, this.pos);
                      var n = this.pos;
                      117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                      var a = this.readCodePoint();
                      (e ? u : f)(a, r) || this.invalidStringToken(n, "Invalid Unicode escape"), t += Lt(a), i = this.pos
                    }
                    e = !1
                  }
                  return t + this.input.slice(i, this.pos)
                }, Pt.readWord = function() {
                  var t = this.readWord1(),
                    e = b.name;
                  return this.keywords.test(t) && (e = v[t]), this.finishToken(e, t)
                };
                var Rt = "8.0.5";
                H.acorn = {
                  Parser: H,
                  version: Rt,
                  defaultOptions: B,
                  Position: L,
                  SourceLocation: O,
                  getLineInfo: R,
                  Node: it,
                  TokenType: d,
                  tokTypes: b,
                  keywordTypes: v,
                  TokContext: nt,
                  tokContexts: at,
                  isIdentifierChar: f,
                  isIdentifierStart: u,
                  Token: It,
                  isNewLine: S,
                  lineBreak: _,
                  lineBreakG: E,
                  nonASCIIwhitespace: w
                }, t.Node = it, t.Parser = H, t.Position = L, t.SourceLocation = O, t.TokContext = nt, t.Token = It, t.TokenType = d, t.defaultOptions = B, t.getLineInfo = R, t.isIdentifierChar = f, t.isIdentifierStart = u, t.isNewLine = S, t.keywordTypes = v, t.lineBreak = _, t.lineBreakG = E, t.nonASCIIwhitespace = w, t.parse = function(t, e) {
                  return H.parse(t, e)
                }, t.parseExpressionAt = function(t, e, i) {
                  return H.parseExpressionAt(t, e, i)
                }, t.tokContexts = at, t.tokTypes = b, t.tokenizer = function(t, e) {
                  return H.tokenizer(t, e)
                }, t.version = Rt, Object.defineProperty(t, "__esModule", {
                  value: !0
                })
              }(e)
            },
            272: (t, e, i) => {
              "use strict";
              i.r(e), i.d(e, {
                default: () => ue
              });
              var r = {
                  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                  5: "class enum extends super const export import",
                  6: "enum",
                  strict: "implements interface let package private protected public static yield",
                  strictBind: "eval arguments"
                },
                s = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                n = {
                  5: s,
                  "5module": s + " export import",
                  6: s + " const class extends export import super"
                },
                a = /^in(stanceof)?$/,
                o = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                h = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                c = new RegExp("[" + o + "]"),
                p = new RegExp("[" + o + h + "]");
              o = h = null;
              var l = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                u = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

              function f(t, e) {
                for (var i = 65536, r = 0; r < e.length; r += 2) {
                  if ((i += e[r]) > t) return !1;
                  if ((i += e[r + 1]) >= t) return !0
                }
              }

              function d(t, e) {
                return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && c.test(String.fromCharCode(t)) : !1 !== e && f(t, l)))
              }

              function m(t, e) {
                return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && p.test(String.fromCharCode(t)) : !1 !== e && (f(t, l) || f(t, u)))))
              }
              var g = function(t, e) {
                void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
              };

              function y(t, e) {
                return new g(t, {
                  beforeExpr: !0,
                  binop: e
                })
              }
              var v = {
                  beforeExpr: !0
                },
                x = {
                  startsExpr: !0
                },
                b = {};

              function _(t, e) {
                return void 0 === e && (e = {}), e.keyword = t, b[t] = new g(t, e)
              }
              var E = {
                  num: new g("num", x),
                  regexp: new g("regexp", x),
                  string: new g("string", x),
                  name: new g("name", x),
                  eof: new g("eof"),
                  bracketL: new g("[", {
                    beforeExpr: !0,
                    startsExpr: !0
                  }),
                  bracketR: new g("]"),
                  braceL: new g("{", {
                    beforeExpr: !0,
                    startsExpr: !0
                  }),
                  braceR: new g("}"),
                  parenL: new g("(", {
                    beforeExpr: !0,
                    startsExpr: !0
                  }),
                  parenR: new g(")"),
                  comma: new g(",", v),
                  semi: new g(";", v),
                  colon: new g(":", v),
                  dot: new g("."),
                  question: new g("?", v),
                  questionDot: new g("?."),
                  arrow: new g("=>", v),
                  template: new g("template"),
                  invalidTemplate: new g("invalidTemplate"),
                  ellipsis: new g("...", v),
                  backQuote: new g("`", x),
                  dollarBraceL: new g("${", {
                    beforeExpr: !0,
                    startsExpr: !0
                  }),
                  eq: new g("=", {
                    beforeExpr: !0,
                    isAssign: !0
                  }),
                  assign: new g("_=", {
                    beforeExpr: !0,
                    isAssign: !0
                  }),
                  incDec: new g("++/--", {
                    prefix: !0,
                    postfix: !0,
                    startsExpr: !0
                  }),
                  prefix: new g("!/~", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                  }),
                  logicalOR: y("||", 1),
                  logicalAND: y("&&", 2),
                  bitwiseOR: y("|", 3),
                  bitwiseXOR: y("^", 4),
                  bitwiseAND: y("&", 5),
                  equality: y("==/!=/===/!==", 6),
                  relational: y("</>/<=/>=", 7),
                  bitShift: y("<</>>/>>>", 8),
                  plusMin: new g("+/-", {
                    beforeExpr: !0,
                    binop: 9,
                    prefix: !0,
                    startsExpr: !0
                  }),
                  modulo: y("%", 10),
                  star: y("*", 10),
                  slash: y("/", 10),
                  starstar: new g("**", {
                    beforeExpr: !0
                  }),
                  coalesce: y("??", 1),
                  _break: _("break"),
                  _case: _("case", v),
                  _catch: _("catch"),
                  _continue: _("continue"),
                  _debugger: _("debugger"),
                  _default: _("default", v),
                  _do: _("do", {
                    isLoop: !0,
                    beforeExpr: !0
                  }),
                  _else: _("else", v),
                  _finally: _("finally"),
                  _for: _("for", {
                    isLoop: !0
                  }),
                  _function: _("function", x),
                  _if: _("if"),
                  _return: _("return", v),
                  _switch: _("switch"),
                  _throw: _("throw", v),
                  _try: _("try"),
                  _var: _("var"),
                  _const: _("const"),
                  _while: _("while", {
                    isLoop: !0
                  }),
                  _with: _("with"),
                  _new: _("new", {
                    beforeExpr: !0,
                    startsExpr: !0
                  }),
                  _this: _("this", x),
                  _super: _("super", x),
                  _class: _("class", x),
                  _extends: _("extends", v),
                  _export: _("export"),
                  _import: _("import", x),
                  _null: _("null", x),
                  _true: _("true", x),
                  _false: _("false", x),
                  _in: _("in", {
                    beforeExpr: !0,
                    binop: 7
                  }),
                  _instanceof: _("instanceof", {
                    beforeExpr: !0,
                    binop: 7
                  }),
                  _typeof: _("typeof", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                  }),
                  _void: _("void", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                  }),
                  _delete: _("delete", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                  })
                },
                S = /\r\n?|\n|\u2028|\u2029/,
                w = new RegExp(S.source, "g");

              function k(t, e) {
                return 10 === t || 13 === t || !e && (8232 === t || 8233 === t)
              }
              var C = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                A = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                T = Object.prototype,
                I = T.hasOwnProperty,
                P = T.toString;

              function N(t, e) {
                return I.call(t, e)
              }
              var L = Array.isArray || function(t) {
                return "[object Array]" === P.call(t)
              };

              function O(t) {
                return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$")
              }
              var R = function(t, e) {
                this.line = t, this.column = e
              };
              R.prototype.offset = function(t) {
                return new R(this.line, this.column + t)
              };
              var B = function(t, e, i) {
                this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile)
              };

              function M(t, e) {
                for (var i = 1, r = 0;;) {
                  w.lastIndex = r;
                  var s = w.exec(t);
                  if (!(s && s.index < e)) return new R(i, e - r);
                  ++i, r = s.index + s[0].length
                }
              }
              var V = {
                  ecmaVersion: null,
                  sourceType: "script",
                  onInsertedSemicolon: null,
                  onTrailingComma: null,
                  allowReserved: null,
                  allowReturnOutsideFunction: !1,
                  allowImportExportEverywhere: !1,
                  allowAwaitOutsideFunction: !1,
                  allowHashBang: !1,
                  locations: !1,
                  onToken: null,
                  onComment: null,
                  ranges: !1,
                  program: null,
                  sourceFile: null,
                  directSourceFile: null,
                  preserveParens: !1
                },
                D = !1;

              function H(t, e) {
                return 2 | (t ? 4 : 0) | (e ? 8 : 0)
              }
              var U = function(t, e, i) {
                  this.options = t = function(t) {
                    var e = {};
                    for (var i in V) e[i] = t && N(t, i) ? t[i] : V[i];
                    if ("latest" === e.ecmaVersion ? e.ecmaVersion = 1e8 : null == e.ecmaVersion ? (!D && "object" == typeof console && console.warn && (D = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), L(e.onToken)) {
                      var r = e.onToken;
                      e.onToken = function(t) {
                        return r.push(t)
                      }
                    }
                    return L(e.onComment) && (e.onComment = function(t, e) {
                      return function(i, r, s, n, a, o) {
                        var h = {
                          type: i ? "Block" : "Line",
                          value: r,
                          start: s,
                          end: n
                        };
                        t.locations && (h.loc = new B(this, a, o)), t.ranges && (h.range = [s, n]), e.push(h)
                      }
                    }(e, e.onComment)), e
                  }(t), this.sourceFile = t.sourceFile, this.keywords = O(n[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                  var s = "";
                  !0 !== t.allowReserved && (s = r[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (s += " await")), this.reservedWords = O(s);
                  var a = (s ? s + " " : "") + r.strict;
                  this.reservedWordsStrict = O(a), this.reservedWordsStrictBind = O(a + " " + r.strictBind), this.input = String(e), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(S).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = E.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
                },
                F = {
                  inFunction: {
                    configurable: !0
                  },
                  inGenerator: {
                    configurable: !0
                  },
                  inAsync: {
                    configurable: !0
                  },
                  allowSuper: {
                    configurable: !0
                  },
                  allowDirectSuper: {
                    configurable: !0
                  },
                  treatFunctionsAsVar: {
                    configurable: !0
                  },
                  inNonArrowFunction: {
                    configurable: !0
                  }
                };
              U.prototype.parse = function() {
                var t = this.options.program || this.startNode();
                return this.nextToken(), this.parseTopLevel(t)
              }, F.inFunction.get = function() {
                return (2 & this.currentVarScope().flags) > 0
              }, F.inGenerator.get = function() {
                return (8 & this.currentVarScope().flags) > 0
              }, F.inAsync.get = function() {
                return (4 & this.currentVarScope().flags) > 0
              }, F.allowSuper.get = function() {
                return (64 & this.currentThisScope().flags) > 0
              }, F.allowDirectSuper.get = function() {
                return (128 & this.currentThisScope().flags) > 0
              }, F.treatFunctionsAsVar.get = function() {
                return this.treatFunctionsAsVarInScope(this.currentScope())
              }, F.inNonArrowFunction.get = function() {
                return (2 & this.currentThisScope().flags) > 0
              }, U.extend = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var i = this, r = 0; r < t.length; r++) i = t[r](i);
                return i
              }, U.parse = function(t, e) {
                return new this(e, t).parse()
              }, U.parseExpressionAt = function(t, e, i) {
                var r = new this(i, t, e);
                return r.nextToken(), r.parseExpression()
              }, U.tokenizer = function(t, e) {
                return new this(e, t)
              }, Object.defineProperties(U.prototype, F);
              var j = U.prototype,
                G = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

              function W() {
                this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
              }
              j.strictDirective = function(t) {
                for (;;) {
                  A.lastIndex = t, t += A.exec(this.input)[0].length;
                  var e = G.exec(this.input.slice(t));
                  if (!e) return !1;
                  if ("use strict" === (e[1] || e[2])) {
                    A.lastIndex = t + e[0].length;
                    var i = A.exec(this.input),
                      r = i.index + i[0].length,
                      s = this.input.charAt(r);
                    return ";" === s || "}" === s || S.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || "!" === s && "=" === this.input.charAt(r + 1))
                  }
                  t += e[0].length, A.lastIndex = t, t += A.exec(this.input)[0].length, ";" === this.input[t] && t++
                }
              }, j.eat = function(t) {
                return this.type === t && (this.next(), !0)
              }, j.isContextual = function(t) {
                return this.type === E.name && this.value === t && !this.containsEsc
              }, j.eatContextual = function(t) {
                return !!this.isContextual(t) && (this.next(), !0)
              }, j.expectContextual = function(t) {
                this.eatContextual(t) || this.unexpected()
              }, j.canInsertSemicolon = function() {
                return this.type === E.eof || this.type === E.braceR || S.test(this.input.slice(this.lastTokEnd, this.start))
              }, j.insertSemicolon = function() {
                if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
              }, j.semicolon = function() {
                this.eat(E.semi) || this.insertSemicolon() || this.unexpected()
              }, j.afterTrailingComma = function(t, e) {
                if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
              }, j.expect = function(t) {
                this.eat(t) || this.unexpected()
              }, j.unexpected = function(t) {
                this.raise(null != t ? t : this.start, "Unexpected token")
              }, j.checkPatternErrors = function(t, e) {
                if (t) {
                  t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                  var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                  i > -1 && this.raiseRecoverable(i, "Parenthesized pattern")
                }
              }, j.checkExpressionErrors = function(t, e) {
                if (!t) return !1;
                var i = t.shorthandAssign,
                  r = t.doubleProto;
                if (!e) return i >= 0 || r >= 0;
                i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property")
              }, j.checkYieldAwaitInDefaultParams = function() {
                this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
              }, j.isSimpleAssignTarget = function(t) {
                return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
              };
              var q = U.prototype;
              q.parseTopLevel = function(t) {
                var e = Object.create(null);
                for (t.body || (t.body = []); this.type !== E.eof;) {
                  var i = this.parseStatement(null, !0, e);
                  t.body.push(i)
                }
                if (this.inModule)
                  for (var r = 0, s = Object.keys(this.undefinedExports); r < s.length; r += 1) {
                    var n = s[r];
                    this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined")
                  }
                return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
              };
              var z = {
                  kind: "loop"
                },
                X = {
                  kind: "switch"
                };
              q.isLet = function(t) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                A.lastIndex = this.pos;
                var e = A.exec(this.input),
                  i = this.pos + e[0].length,
                  r = this.input.charCodeAt(i);
                if (91 === r) return !0;
                if (t) return !1;
                if (123 === r) return !0;
                if (d(r, !0)) {
                  for (var s = i + 1; m(this.input.charCodeAt(s), !0);) ++s;
                  var n = this.input.slice(i, s);
                  if (!a.test(n)) return !0
                }
                return !1
              }, q.isAsyncFunction = function() {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                A.lastIndex = this.pos;
                var t = A.exec(this.input),
                  e = this.pos + t[0].length;
                return !(S.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 !== this.input.length && m(this.input.charAt(e + 8)))
              }, q.parseStatement = function(t, e, i) {
                var r, s = this.type,
                  n = this.startNode();
                switch (this.isLet(t) && (s = E._var, r = "let"), s) {
                  case E._break:
                  case E._continue:
                    return this.parseBreakContinueStatement(n, s.keyword);
                  case E._debugger:
                    return this.parseDebuggerStatement(n);
                  case E._do:
                    return this.parseDoStatement(n);
                  case E._for:
                    return this.parseForStatement(n);
                  case E._function:
                    return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !t);
                  case E._class:
                    return t && this.unexpected(), this.parseClass(n, !0);
                  case E._if:
                    return this.parseIfStatement(n);
                  case E._return:
                    return this.parseReturnStatement(n);
                  case E._switch:
                    return this.parseSwitchStatement(n);
                  case E._throw:
                    return this.parseThrowStatement(n);
                  case E._try:
                    return this.parseTryStatement(n);
                  case E._const:
                  case E._var:
                    return r = r || this.value, t && "var" !== r && this.unexpected(), this.parseVarStatement(n, r);
                  case E._while:
                    return this.parseWhileStatement(n);
                  case E._with:
                    return this.parseWithStatement(n);
                  case E.braceL:
                    return this.parseBlock(!0, n);
                  case E.semi:
                    return this.parseEmptyStatement(n);
                  case E._export:
                  case E._import:
                    if (this.options.ecmaVersion > 10 && s === E._import) {
                      A.lastIndex = this.pos;
                      var a = A.exec(this.input),
                        o = this.pos + a[0].length,
                        h = this.input.charCodeAt(o);
                      if (40 === h || 46 === h) return this.parseExpressionStatement(n, this.parseExpression())
                    }
                    return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === E._import ? this.parseImport(n) : this.parseExport(n, i);
                  default:
                    if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(n, !0, !t);
                    var c = this.value,
                      p = this.parseExpression();
                    return s === E.name && "Identifier" === p.type && this.eat(E.colon) ? this.parseLabeledStatement(n, c, p, t) : this.parseExpressionStatement(n, p)
                }
              }, q.parseBreakContinueStatement = function(t, e) {
                var i = "break" === e;
                this.next(), this.eat(E.semi) || this.insertSemicolon() ? t.label = null : this.type !== E.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
                for (var r = 0; r < this.labels.length; ++r) {
                  var s = this.labels[r];
                  if (null == t.label || s.name === t.label.name) {
                    if (null != s.kind && (i || "loop" === s.kind)) break;
                    if (t.label && i) break
                  }
                }
                return r === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
              }, q.parseDebuggerStatement = function(t) {
                return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
              }, q.parseDoStatement = function(t) {
                return this.next(), this.labels.push(z), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(E._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(E.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
              }, q.parseForStatement = function(t) {
                this.next();
                var e = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
                if (this.labels.push(z), this.enterScope(0), this.expect(E.parenL), this.type === E.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                var i = this.isLet();
                if (this.type === E._var || this.type === E._const || i) {
                  var r = this.startNode(),
                    s = i ? "let" : this.value;
                  return this.next(), this.parseVar(r, !0, s), this.finishNode(r, "VariableDeclaration"), (this.type === E._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === r.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === E._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, r)) : (e > -1 && this.unexpected(e), this.parseFor(t, r))
                }
                var n = new W,
                  a = this.parseExpression(!0, n);
                return this.type === E._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === E._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(a, !1, n), this.checkLValPattern(a), this.parseForIn(t, a)) : (this.checkExpressionErrors(n, !0), e > -1 && this.unexpected(e), this.parseFor(t, a))
              }, q.parseFunctionStatement = function(t, e, i) {
                return this.next(), this.parseFunction(t, Q | (i ? 0 : Z), !1, e)
              }, q.parseIfStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(E._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
              }, q.parseReturnStatement = function(t) {
                return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(E.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
              }, q.parseSwitchStatement = function(t) {
                var e;
                this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(E.braceL), this.labels.push(X), this.enterScope(0);
                for (var i = !1; this.type !== E.braceR;)
                  if (this.type === E._case || this.type === E._default) {
                    var r = this.type === E._case;
                    e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), r ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(E.colon)
                  } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
              }, q.parseThrowStatement = function(t) {
                return this.next(), S.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
              };
              var K = [];
              q.parseTryStatement = function(t) {
                if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === E._catch) {
                  var e = this.startNode();
                  if (this.next(), this.eat(E.parenL)) {
                    e.param = this.parseBindingAtom();
                    var i = "Identifier" === e.param.type;
                    this.enterScope(i ? 32 : 0), this.checkLValPattern(e.param, i ? 4 : 2), this.expect(E.parenR)
                  } else this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0);
                  e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
                }
                return t.finalizer = this.eat(E._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
              }, q.parseVarStatement = function(t, e) {
                return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration")
              }, q.parseWhileStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), this.labels.push(z), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
              }, q.parseWithStatement = function(t) {
                return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
              }, q.parseEmptyStatement = function(t) {
                return this.next(), this.finishNode(t, "EmptyStatement")
              }, q.parseLabeledStatement = function(t, e, i, r) {
                for (var s = 0, n = this.labels; s < n.length; s += 1) n[s].name === e && this.raise(i.start, "Label '" + e + "' is already declared");
                for (var a = this.type.isLoop ? "loop" : this.type === E._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                  var h = this.labels[o];
                  if (h.statementStart !== t.start) break;
                  h.statementStart = this.start, h.kind = a
                }
                return this.labels.push({
                  name: e,
                  kind: a,
                  statementStart: this.start
                }), t.body = this.parseStatement(r ? -1 === r.indexOf("label") ? r + "label" : r : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
              }, q.parseExpressionStatement = function(t, e) {
                return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
              }, q.parseBlock = function(t, e, i) {
                for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(E.braceL), t && this.enterScope(0); this.type !== E.braceR;) {
                  var r = this.parseStatement(null);
                  e.body.push(r)
                }
                return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
              }, q.parseFor = function(t, e) {
                return t.init = e, this.expect(E.semi), t.test = this.type === E.semi ? null : this.parseExpression(), this.expect(E.semi), t.update = this.type === E.parenR ? null : this.parseExpression(), this.expect(E.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
              }, q.parseForIn = function(t, e) {
                var i = this.type === E._in;
                return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(E.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
              }, q.parseVar = function(t, e, i) {
                for (t.declarations = [], t.kind = i;;) {
                  var r = this.startNode();
                  if (this.parseVarId(r, i), this.eat(E.eq) ? r.init = this.parseMaybeAssign(e) : "const" !== i || this.type === E._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === r.id.type || e && (this.type === E._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(E.comma)) break
                }
                return t
              }, q.parseVarId = function(t, e) {
                t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
              };
              var Q = 1,
                Z = 2;
              q.parseFunction = function(t, e, i, r) {
                this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === E.star && e & Z && this.unexpected(), t.generator = this.eat(E.star)), this.options.ecmaVersion >= 8 && (t.async = !!r), e & Q && (t.id = 4 & e && this.type !== E.name ? null : this.parseIdent(), !t.id || e & Z || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                var s = this.yieldPos,
                  n = this.awaitPos,
                  a = this.awaitIdentPos;
                return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(H(t.async, t.generator)), e & Q || (t.id = this.type === E.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(t, e & Q ? "FunctionDeclaration" : "FunctionExpression")
              }, q.parseFunctionParams = function(t) {
                this.expect(E.parenL), t.params = this.parseBindingList(E.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
              }, q.parseClass = function(t, e) {
                this.next();
                var i = this.strict;
                this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
                var r = this.startNode(),
                  s = !1;
                for (r.body = [], this.expect(E.braceL); this.type !== E.braceR;) {
                  var n = this.parseClassElement(null !== t.superClass);
                  n && (r.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind && (s && this.raise(n.start, "Duplicate constructor in the same class"), s = !0))
                }
                return this.strict = i, this.next(), t.body = this.finishNode(r, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
              }, q.parseClassElement = function(t) {
                var e = this;
                if (this.eat(E.semi)) return null;
                var i = this.startNode(),
                  r = function(t, r) {
                    void 0 === r && (r = !1);
                    var s = e.start,
                      n = e.startLoc;
                    return !(!e.eatContextual(t) || (e.type === E.parenL || r && e.canInsertSemicolon()) && (i.key && e.unexpected(), i.computed = !1, i.key = e.startNodeAt(s, n), i.key.name = t, e.finishNode(i.key, "Identifier"), 1))
                  };
                i.kind = "method", i.static = r("static");
                var s = this.eat(E.star),
                  n = !1;
                s || (this.options.ecmaVersion >= 8 && r("async", !0) ? (n = !0, s = this.options.ecmaVersion >= 9 && this.eat(E.star)) : r("get") ? i.kind = "get" : r("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
                var a = i.key,
                  o = !1;
                return i.computed || i.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? i.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(a.start, "Constructor can't have get/set modifier"), s && this.raise(a.start, "Constructor can't be a generator"), n && this.raise(a.start, "Constructor can't be an async method"), i.kind = "constructor", o = t), this.parseClassMethod(i, s, n, o), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i
              }, q.parseClassMethod = function(t, e, i, r) {
                return t.value = this.parseMethod(e, i, r), this.finishNode(t, "MethodDefinition")
              }, q.parseClassId = function(t, e) {
                this.type === E.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
              }, q.parseClassSuper = function(t) {
                t.superClass = this.eat(E._extends) ? this.parseExprSubscripts() : null
              }, q.parseExport = function(t, e) {
                if (this.next(), this.eat(E.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseIdent(!0), this.checkExport(e, t.exported.name, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== E.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
                if (this.eat(E._default)) {
                  var i;
                  if (this.checkExport(e, "default", this.lastTokStart), this.type === E._function || (i = this.isAsyncFunction())) {
                    var r = this.startNode();
                    this.next(), i && this.next(), t.declaration = this.parseFunction(r, 4 | Q, !1, i)
                  } else if (this.type === E._class) {
                    var s = this.startNode();
                    t.declaration = this.parseClass(s, "nullableID")
                  } else t.declaration = this.parseMaybeAssign(), this.semicolon();
                  return this.finishNode(t, "ExportDefaultDeclaration")
                }
                if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(null), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start), t.specifiers = [], t.source = null;
                else {
                  if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== E.string && this.unexpected(), t.source = this.parseExprAtom();
                  else {
                    for (var n = 0, a = t.specifiers; n < a.length; n += 1) {
                      var o = a[n];
                      this.checkUnreserved(o.local), this.checkLocalExport(o.local)
                    }
                    t.source = null
                  }
                  this.semicolon()
                }
                return this.finishNode(t, "ExportNamedDeclaration")
              }, q.checkExport = function(t, e, i) {
                t && (N(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0)
              }, q.checkPatternExport = function(t, e) {
                var i = e.type;
                if ("Identifier" === i) this.checkExport(t, e.name, e.start);
                else if ("ObjectPattern" === i)
                  for (var r = 0, s = e.properties; r < s.length; r += 1) {
                    var n = s[r];
                    this.checkPatternExport(t, n)
                  } else if ("ArrayPattern" === i)
                    for (var a = 0, o = e.elements; a < o.length; a += 1) {
                      var h = o[a];
                      h && this.checkPatternExport(t, h)
                    } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(t, e.expression)
              }, q.checkVariableExport = function(t, e) {
                if (t)
                  for (var i = 0, r = e; i < r.length; i += 1) {
                    var s = r[i];
                    this.checkPatternExport(t, s.id)
                  }
              }, q.shouldParseExportStatement = function() {
                return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
              }, q.parseExportSpecifiers = function(t) {
                var e = [],
                  i = !0;
                for (this.expect(E.braceL); !this.eat(E.braceR);) {
                  if (i) i = !1;
                  else if (this.expect(E.comma), this.afterTrailingComma(E.braceR)) break;
                  var r = this.startNode();
                  r.local = this.parseIdent(!0), r.exported = this.eatContextual("as") ? this.parseIdent(!0) : r.local, this.checkExport(t, r.exported.name, r.exported.start), e.push(this.finishNode(r, "ExportSpecifier"))
                }
                return e
              }, q.parseImport = function(t) {
                return this.next(), this.type === E.string ? (t.specifiers = K, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === E.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
              }, q.parseImportSpecifiers = function() {
                var t = [],
                  e = !0;
                if (this.type === E.name) {
                  var i = this.startNode();
                  if (i.local = this.parseIdent(), this.checkLValSimple(i.local, 2), t.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(E.comma)) return t
                }
                if (this.type === E.star) {
                  var r = this.startNode();
                  return this.next(), this.expectContextual("as"), r.local = this.parseIdent(), this.checkLValSimple(r.local, 2), t.push(this.finishNode(r, "ImportNamespaceSpecifier")), t
                }
                for (this.expect(E.braceL); !this.eat(E.braceR);) {
                  if (e) e = !1;
                  else if (this.expect(E.comma), this.afterTrailingComma(E.braceR)) break;
                  var s = this.startNode();
                  s.imported = this.parseIdent(!0), this.eatContextual("as") ? s.local = this.parseIdent() : (this.checkUnreserved(s.imported), s.local = s.imported), this.checkLValSimple(s.local, 2), t.push(this.finishNode(s, "ImportSpecifier"))
                }
                return t
              }, q.adaptDirectivePrologue = function(t) {
                for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
              }, q.isDirectiveCandidate = function(t) {
                return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
              };
              var Y = U.prototype;
              Y.toAssignable = function(t, e, i) {
                if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
                  case "Identifier":
                    this.inAsync && "await" === t.name && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
                    break;
                  case "ObjectPattern":
                  case "ArrayPattern":
                  case "AssignmentPattern":
                  case "RestElement":
                    break;
                  case "ObjectExpression":
                    t.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
                    for (var r = 0, s = t.properties; r < s.length; r += 1) {
                      var n = s[r];
                      this.toAssignable(n, e), "RestElement" !== n.type || "ArrayPattern" !== n.argument.type && "ObjectPattern" !== n.argument.type || this.raise(n.argument.start, "Unexpected token")
                    }
                    break;
                  case "Property":
                    "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
                    break;
                  case "ArrayExpression":
                    t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);
                    break;
                  case "SpreadElement":
                    t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
                    break;
                  case "AssignmentExpression":
                    "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                    break;
                  case "ParenthesizedExpression":
                    this.toAssignable(t.expression, e, i);
                    break;
                  case "ChainExpression":
                    this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                    break;
                  case "MemberExpression":
                    if (!e) break;
                  default:
                    this.raise(t.start, "Assigning to rvalue")
                } else i && this.checkPatternErrors(i, !0);
                return t
              }, Y.toAssignableList = function(t, e) {
                for (var i = t.length, r = 0; r < i; r++) {
                  var s = t[r];
                  s && this.toAssignable(s, e)
                }
                if (i) {
                  var n = t[i - 1];
                  6 === this.options.ecmaVersion && e && n && "RestElement" === n.type && "Identifier" !== n.argument.type && this.unexpected(n.argument.start)
                }
                return t
              }, Y.parseSpread = function(t) {
                var e = this.startNode();
                return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
              }, Y.parseRestBinding = function() {
                var t = this.startNode();
                return this.next(), 6 === this.options.ecmaVersion && this.type !== E.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
              }, Y.parseBindingAtom = function() {
                if (this.options.ecmaVersion >= 6) switch (this.type) {
                  case E.bracketL:
                    var t = this.startNode();
                    return this.next(), t.elements = this.parseBindingList(E.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                  case E.braceL:
                    return this.parseObj(!0)
                }
                return this.parseIdent()
              }, Y.parseBindingList = function(t, e, i) {
                for (var r = [], s = !0; !this.eat(t);)
                  if (s ? s = !1 : this.expect(E.comma), e && this.type === E.comma) r.push(null);
                  else {
                    if (i && this.afterTrailingComma(t)) break;
                    if (this.type === E.ellipsis) {
                      var n = this.parseRestBinding();
                      this.parseBindingListItem(n), r.push(n), this.type === E.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                      break
                    }
                    var a = this.parseMaybeDefault(this.start, this.startLoc);
                    this.parseBindingListItem(a), r.push(a)
                  } return r
              }, Y.parseBindingListItem = function(t) {
                return t
              }, Y.parseMaybeDefault = function(t, e, i) {
                if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(E.eq)) return i;
                var r = this.startNodeAt(t, e);
                return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern")
              }, Y.checkLValSimple = function(t, e, i) {
                void 0 === e && (e = 0);
                var r = 0 !== e;
                switch (t.type) {
                  case "Identifier":
                    this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (r ? "Binding " : "Assigning to ") + t.name + " in strict mode"), r && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (N(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
                    break;
                  case "ChainExpression":
                    this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                    break;
                  case "MemberExpression":
                    r && this.raiseRecoverable(t.start, "Binding member expression");
                    break;
                  case "ParenthesizedExpression":
                    return r && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
                  default:
                    this.raise(t.start, (r ? "Binding" : "Assigning to") + " rvalue")
                }
              }, Y.checkLValPattern = function(t, e, i) {
                switch (void 0 === e && (e = 0), t.type) {
                  case "ObjectPattern":
                    for (var r = 0, s = t.properties; r < s.length; r += 1) {
                      var n = s[r];
                      this.checkLValInnerPattern(n, e, i)
                    }
                    break;
                  case "ArrayPattern":
                    for (var a = 0, o = t.elements; a < o.length; a += 1) {
                      var h = o[a];
                      h && this.checkLValInnerPattern(h, e, i)
                    }
                    break;
                  default:
                    this.checkLValSimple(t, e, i)
                }
              }, Y.checkLValInnerPattern = function(t, e, i) {
                switch (void 0 === e && (e = 0), t.type) {
                  case "Property":
                    this.checkLValInnerPattern(t.value, e, i);
                    break;
                  case "AssignmentPattern":
                    this.checkLValPattern(t.left, e, i);
                    break;
                  case "RestElement":
                    this.checkLValPattern(t.argument, e, i);
                    break;
                  default:
                    this.checkLValPattern(t, e, i)
                }
              };
              var $ = U.prototype;
              $.checkPropClash = function(t, e, i) {
                if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
                  var r, s = t.key;
                  switch (s.type) {
                    case "Identifier":
                      r = s.name;
                      break;
                    case "Literal":
                      r = String(s.value);
                      break;
                    default:
                      return
                  }
                  var n = t.kind;
                  if (this.options.ecmaVersion >= 6) "__proto__" === r && "init" === n && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), e.proto = !0);
                  else {
                    var a = e[r = "$" + r];
                    a ? ("init" === n ? this.strict && a.init || a.get || a.set : a.init || a[n]) && this.raiseRecoverable(s.start, "Redefinition of property") : a = e[r] = {
                      init: !1,
                      get: !1,
                      set: !1
                    }, a[n] = !0
                  }
                }
              }, $.parseExpression = function(t, e) {
                var i = this.start,
                  r = this.startLoc,
                  s = this.parseMaybeAssign(t, e);
                if (this.type === E.comma) {
                  var n = this.startNodeAt(i, r);
                  for (n.expressions = [s]; this.eat(E.comma);) n.expressions.push(this.parseMaybeAssign(t, e));
                  return this.finishNode(n, "SequenceExpression")
                }
                return s
              }, $.parseMaybeAssign = function(t, e, i) {
                if (this.isContextual("yield")) {
                  if (this.inGenerator) return this.parseYield(t);
                  this.exprAllowed = !1
                }
                var r = !1,
                  s = -1,
                  n = -1;
                e ? (s = e.parenthesizedAssign, n = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new W, r = !0);
                var a = this.start,
                  o = this.startLoc;
                this.type !== E.parenL && this.type !== E.name || (this.potentialArrowAt = this.start);
                var h = this.parseMaybeConditional(t, e);
                if (i && (h = i.call(this, h, a, o)), this.type.isAssign) {
                  var c = this.startNodeAt(a, o);
                  return c.operator = this.value, this.type === E.eq && (h = this.toAssignable(h, !1, e)), r || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= h.start && (e.shorthandAssign = -1), this.type === E.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), c.left = h, this.next(), c.right = this.parseMaybeAssign(t), this.finishNode(c, "AssignmentExpression")
                }
                return r && this.checkExpressionErrors(e, !0), s > -1 && (e.parenthesizedAssign = s), n > -1 && (e.trailingComma = n), h
              }, $.parseMaybeConditional = function(t, e) {
                var i = this.start,
                  r = this.startLoc,
                  s = this.parseExprOps(t, e);
                if (this.checkExpressionErrors(e)) return s;
                if (this.eat(E.question)) {
                  var n = this.startNodeAt(i, r);
                  return n.test = s, n.consequent = this.parseMaybeAssign(), this.expect(E.colon), n.alternate = this.parseMaybeAssign(t), this.finishNode(n, "ConditionalExpression")
                }
                return s
              }, $.parseExprOps = function(t, e) {
                var i = this.start,
                  r = this.startLoc,
                  s = this.parseMaybeUnary(e, !1);
                return this.checkExpressionErrors(e) || s.start === i && "ArrowFunctionExpression" === s.type ? s : this.parseExprOp(s, i, r, -1, t)
              }, $.parseExprOp = function(t, e, i, r, s) {
                var n = this.type.binop;
                if (null != n && (!s || this.type !== E._in) && n > r) {
                  var a = this.type === E.logicalOR || this.type === E.logicalAND,
                    o = this.type === E.coalesce;
                  o && (n = E.logicalAND.binop);
                  var h = this.value;
                  this.next();
                  var c = this.start,
                    p = this.startLoc,
                    l = this.parseExprOp(this.parseMaybeUnary(null, !1), c, p, n, s),
                    u = this.buildBinary(e, i, t, l, h, a || o);
                  return (a && this.type === E.coalesce || o && (this.type === E.logicalOR || this.type === E.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, i, r, s)
                }
                return t
              }, $.buildBinary = function(t, e, i, r, s, n) {
                var a = this.startNodeAt(t, e);
                return a.left = i, a.operator = s, a.right = r, this.finishNode(a, n ? "LogicalExpression" : "BinaryExpression")
              }, $.parseMaybeUnary = function(t, e) {
                var i, r = this.start,
                  s = this.startLoc;
                if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), e = !0;
                else if (this.type.prefix) {
                  var n = this.startNode(),
                    a = this.type === E.incDec;
                  n.operator = this.value, n.prefix = !0, this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), a ? this.checkLValSimple(n.argument) : this.strict && "delete" === n.operator && "Identifier" === n.argument.type ? this.raiseRecoverable(n.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(n, a ? "UpdateExpression" : "UnaryExpression")
                } else {
                  if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;
                  for (; this.type.postfix && !this.canInsertSemicolon();) {
                    var o = this.startNodeAt(r, s);
                    o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLValSimple(i), this.next(), i = this.finishNode(o, "UpdateExpression")
                  }
                }
                return !e && this.eat(E.starstar) ? this.buildBinary(r, s, i, this.parseMaybeUnary(null, !1), "**", !1) : i
              }, $.parseExprSubscripts = function(t) {
                var e = this.start,
                  i = this.startLoc,
                  r = this.parseExprAtom(t);
                if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r;
                var s = this.parseSubscripts(r, e, i);
                return t && "MemberExpression" === s.type && (t.parenthesizedAssign >= s.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= s.start && (t.parenthesizedBind = -1)), s
              }, $.parseSubscripts = function(t, e, i, r) {
                for (var s = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
                  var a = this.parseSubscript(t, e, i, r, s, n);
                  if (a.optional && (n = !0), a === t || "ArrowFunctionExpression" === a.type) {
                    if (n) {
                      var o = this.startNodeAt(e, i);
                      o.expression = a, a = this.finishNode(o, "ChainExpression")
                    }
                    return a
                  }
                  t = a
                }
              }, $.parseSubscript = function(t, e, i, r, s, n) {
                var a = this.options.ecmaVersion >= 11,
                  o = a && this.eat(E.questionDot);
                r && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                var h = this.eat(E.bracketL);
                if (h || o && this.type !== E.parenL && this.type !== E.backQuote || this.eat(E.dot)) {
                  var c = this.startNodeAt(e, i);
                  c.object = t, c.property = h ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), c.computed = !!h, h && this.expect(E.bracketR), a && (c.optional = o), t = this.finishNode(c, "MemberExpression")
                } else if (!r && this.eat(E.parenL)) {
                  var p = new W,
                    l = this.yieldPos,
                    u = this.awaitPos,
                    f = this.awaitIdentPos;
                  this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                  var d = this.parseExprList(E.parenR, this.options.ecmaVersion >= 8, !1, p);
                  if (s && !o && !this.canInsertSemicolon() && this.eat(E.arrow)) return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = l, this.awaitPos = u, this.awaitIdentPos = f, this.parseArrowExpression(this.startNodeAt(e, i), d, !0);
                  this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = u || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
                  var m = this.startNodeAt(e, i);
                  m.callee = t, m.arguments = d, a && (m.optional = o), t = this.finishNode(m, "CallExpression")
                } else if (this.type === E.backQuote) {
                  (o || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                  var g = this.startNodeAt(e, i);
                  g.tag = t, g.quasi = this.parseTemplate({
                    isTagged: !0
                  }), t = this.finishNode(g, "TaggedTemplateExpression")
                }
                return t
              }, $.parseExprAtom = function(t) {
                this.type === E.slash && this.readRegexp();
                var e, i = this.potentialArrowAt === this.start;
                switch (this.type) {
                  case E._super:
                    return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), e = this.startNode(), this.next(), this.type !== E.parenL || this.allowDirectSuper || this.raise(e.start, "super() call outside constructor of a subclass"), this.type !== E.dot && this.type !== E.bracketL && this.type !== E.parenL && this.unexpected(), this.finishNode(e, "Super");
                  case E._this:
                    return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
                  case E.name:
                    var r = this.start,
                      s = this.startLoc,
                      n = this.containsEsc,
                      a = this.parseIdent(!1);
                    if (this.options.ecmaVersion >= 8 && !n && "async" === a.name && !this.canInsertSemicolon() && this.eat(E._function)) return this.parseFunction(this.startNodeAt(r, s), 0, !1, !0);
                    if (i && !this.canInsertSemicolon()) {
                      if (this.eat(E.arrow)) return this.parseArrowExpression(this.startNodeAt(r, s), [a], !1);
                      if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === E.name && !n) return a = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(E.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(r, s), [a], !0)
                    }
                    return a;
                  case E.regexp:
                    var o = this.value;
                    return (e = this.parseLiteral(o.value)).regex = {
                      pattern: o.pattern,
                      flags: o.flags
                    }, e;
                  case E.num:
                  case E.string:
                    return this.parseLiteral(this.value);
                  case E._null:
                  case E._true:
                  case E._false:
                    return (e = this.startNode()).value = this.type === E._null ? null : this.type === E._true, e.raw = this.type.keyword, this.next(), this.finishNode(e, "Literal");
                  case E.parenL:
                    var h = this.start,
                      c = this.parseParenAndDistinguishExpression(i);
                    return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(c) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), c;
                  case E.bracketL:
                    return e = this.startNode(), this.next(), e.elements = this.parseExprList(E.bracketR, !0, !0, t), this.finishNode(e, "ArrayExpression");
                  case E.braceL:
                    return this.parseObj(!1, t);
                  case E._function:
                    return e = this.startNode(), this.next(), this.parseFunction(e, 0);
                  case E._class:
                    return this.parseClass(this.startNode(), !1);
                  case E._new:
                    return this.parseNew();
                  case E.backQuote:
                    return this.parseTemplate();
                  case E._import:
                    return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
                  default:
                    this.unexpected()
                }
              }, $.parseExprImport = function() {
                var t = this.startNode();
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
                var e = this.parseIdent(!0);
                switch (this.type) {
                  case E.parenL:
                    return this.parseDynamicImport(t);
                  case E.dot:
                    return t.meta = e, this.parseImportMeta(t);
                  default:
                    this.unexpected()
                }
              }, $.parseDynamicImport = function(t) {
                if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(E.parenR)) {
                  var e = this.start;
                  this.eat(E.comma) && this.eat(E.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
                }
                return this.finishNode(t, "ImportExpression")
              }, $.parseImportMeta = function(t) {
                this.next();
                var e = this.containsEsc;
                return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" !== this.options.sourceType && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
              }, $.parseLiteral = function(t) {
                var e = this.startNode();
                return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
              }, $.parseParenExpression = function() {
                this.expect(E.parenL);
                var t = this.parseExpression();
                return this.expect(E.parenR), t
              }, $.parseParenAndDistinguishExpression = function(t) {
                var e, i = this.start,
                  r = this.startLoc,
                  s = this.options.ecmaVersion >= 8;
                if (this.options.ecmaVersion >= 6) {
                  this.next();
                  var n, a = this.start,
                    o = this.startLoc,
                    h = [],
                    c = !0,
                    p = !1,
                    l = new W,
                    u = this.yieldPos,
                    f = this.awaitPos;
                  for (this.yieldPos = 0, this.awaitPos = 0; this.type !== E.parenR;) {
                    if (c ? c = !1 : this.expect(E.comma), s && this.afterTrailingComma(E.parenR, !0)) {
                      p = !0;
                      break
                    }
                    if (this.type === E.ellipsis) {
                      n = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === E.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                      break
                    }
                    h.push(this.parseMaybeAssign(!1, l, this.parseParenItem))
                  }
                  var d = this.start,
                    m = this.startLoc;
                  if (this.expect(E.parenR), t && !this.canInsertSemicolon() && this.eat(E.arrow)) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = u, this.awaitPos = f, this.parseParenArrowList(i, r, h);
                  h.length && !p || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = f || this.awaitPos, h.length > 1 ? ((e = this.startNodeAt(a, o)).expressions = h, this.finishNodeAt(e, "SequenceExpression", d, m)) : e = h[0]
                } else e = this.parseParenExpression();
                if (this.options.preserveParens) {
                  var g = this.startNodeAt(i, r);
                  return g.expression = e, this.finishNode(g, "ParenthesizedExpression")
                }
                return e
              }, $.parseParenItem = function(t) {
                return t
              }, $.parseParenArrowList = function(t, e, i) {
                return this.parseArrowExpression(this.startNodeAt(t, e), i)
              };
              var J = [];
              $.parseNew = function() {
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                var t = this.startNode(),
                  e = this.parseIdent(!0);
                if (this.options.ecmaVersion >= 6 && this.eat(E.dot)) {
                  t.meta = e;
                  var i = this.containsEsc;
                  return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction || this.raiseRecoverable(t.start, "'new.target' can only be used in functions"), this.finishNode(t, "MetaProperty")
                }
                var r = this.start,
                  s = this.startLoc,
                  n = this.type === E._import;
                return t.callee = this.parseSubscripts(this.parseExprAtom(), r, s, !0), n && "ImportExpression" === t.callee.type && this.raise(r, "Cannot use new with import()"), this.eat(E.parenL) ? t.arguments = this.parseExprList(E.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = J, this.finishNode(t, "NewExpression")
              }, $.parseTemplateElement = function(t) {
                var e = t.isTagged,
                  i = this.startNode();
                return this.type === E.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
                  raw: this.value,
                  cooked: null
                }) : i.value = {
                  raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                  cooked: this.value
                }, this.next(), i.tail = this.type === E.backQuote, this.finishNode(i, "TemplateElement")
              }, $.parseTemplate = function(t) {
                void 0 === t && (t = {});
                var e = t.isTagged;
                void 0 === e && (e = !1);
                var i = this.startNode();
                this.next(), i.expressions = [];
                var r = this.parseTemplateElement({
                  isTagged: e
                });
                for (i.quasis = [r]; !r.tail;) this.type === E.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(E.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(E.braceR), i.quasis.push(r = this.parseTemplateElement({
                  isTagged: e
                }));
                return this.next(), this.finishNode(i, "TemplateLiteral")
              }, $.isAsyncProp = function(t) {
                return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === E.name || this.type === E.num || this.type === E.string || this.type === E.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === E.star) && !S.test(this.input.slice(this.lastTokEnd, this.start))
              }, $.parseObj = function(t, e) {
                var i = this.startNode(),
                  r = !0,
                  s = {};
                for (i.properties = [], this.next(); !this.eat(E.braceR);) {
                  if (r) r = !1;
                  else if (this.expect(E.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(E.braceR)) break;
                  var n = this.parseProperty(t, e);
                  t || this.checkPropClash(n, s, e), i.properties.push(n)
                }
                return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
              }, $.parseProperty = function(t, e) {
                var i, r, s, n, a = this.startNode();
                if (this.options.ecmaVersion >= 9 && this.eat(E.ellipsis)) return t ? (a.argument = this.parseIdent(!1), this.type === E.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === E.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, e), this.type === E.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
                this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (t || e) && (s = this.start, n = this.startLoc), t || (i = this.eat(E.star)));
                var o = this.containsEsc;
                return this.parsePropertyName(a), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a) ? (r = !0, i = this.options.ecmaVersion >= 9 && this.eat(E.star), this.parsePropertyName(a, e)) : r = !1, this.parsePropertyValue(a, t, i, r, s, n, e, o), this.finishNode(a, "Property")
              }, $.parsePropertyValue = function(t, e, i, r, s, n, a, o) {
                if ((i || r) && this.type === E.colon && this.unexpected(), this.eat(E.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), t.kind = "init";
                else if (this.options.ecmaVersion >= 6 && this.type === E.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, r);
                else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === E.comma || this.type === E.braceR || this.type === E.eq) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || r) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = s), t.kind = "init", e ? t.value = this.parseMaybeDefault(s, n, this.copyNode(t.key)) : this.type === E.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), t.value = this.parseMaybeDefault(s, n, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected();
                else {
                  (i || r) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                  var h = "get" === t.kind ? 0 : 1;
                  if (t.value.params.length !== h) {
                    var c = t.value.start;
                    "get" === t.kind ? this.raiseRecoverable(c, "getter should have no params") : this.raiseRecoverable(c, "setter should have exactly one param")
                  } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
                }
              }, $.parsePropertyName = function(t) {
                if (this.options.ecmaVersion >= 6) {
                  if (this.eat(E.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(E.bracketR), t.key;
                  t.computed = !1
                }
                return t.key = this.type === E.num || this.type === E.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
              }, $.initFunction = function(t) {
                t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
              }, $.parseMethod = function(t, e, i) {
                var r = this.startNode(),
                  s = this.yieldPos,
                  n = this.awaitPos,
                  a = this.awaitIdentPos;
                return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = t), this.options.ecmaVersion >= 8 && (r.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | H(e, r.generator) | (i ? 128 : 0)), this.expect(E.parenL), r.params = this.parseBindingList(E.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(r, "FunctionExpression")
              }, $.parseArrowExpression = function(t, e, i) {
                var r = this.yieldPos,
                  s = this.awaitPos,
                  n = this.awaitIdentPos;
                return this.enterScope(16 | H(i, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1), this.yieldPos = r, this.awaitPos = s, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
              }, $.parseFunctionBody = function(t, e, i) {
                var r = e && this.type !== E.braceL,
                  s = this.strict,
                  n = !1;
                if (r) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);
                else {
                  var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                  s && !a || (n = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                  var o = this.labels;
                  this.labels = [], n && (this.strict = !0), this.checkParams(t, !s && !n && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !s), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = o
                }
                this.exitScope()
              }, $.isSimpleParamList = function(t) {
                for (var e = 0, i = t; e < i.length; e += 1)
                  if ("Identifier" !== i[e].type) return !1;
                return !0
              }, $.checkParams = function(t, e) {
                for (var i = Object.create(null), r = 0, s = t.params; r < s.length; r += 1) {
                  var n = s[r];
                  this.checkLValInnerPattern(n, 1, e ? null : i)
                }
              }, $.parseExprList = function(t, e, i, r) {
                for (var s = [], n = !0; !this.eat(t);) {
                  if (n) n = !1;
                  else if (this.expect(E.comma), e && this.afterTrailingComma(t)) break;
                  var a = void 0;
                  i && this.type === E.comma ? a = null : this.type === E.ellipsis ? (a = this.parseSpread(r), r && this.type === E.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, r), s.push(a)
                }
                return s
              }, $.checkUnreserved = function(t) {
                var e = t.start,
                  i = t.end,
                  r = t.name;
                this.inGenerator && "yield" === r && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === r && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(r) && this.raise(e, "Unexpected keyword '" + r + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, i).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(r) && (this.inAsync || "await" !== r || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + r + "' is reserved"))
              }, $.parseIdent = function(t, e) {
                var i = this.startNode();
                return this.type === E.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(!!t), this.finishNode(i, "Identifier"), t || (this.checkUnreserved(i), "await" !== i.name || this.awaitIdentPos || (this.awaitIdentPos = i.start)), i
              }, $.parseYield = function(t) {
                this.yieldPos || (this.yieldPos = this.start);
                var e = this.startNode();
                return this.next(), this.type === E.semi || this.canInsertSemicolon() || this.type !== E.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(E.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
              }, $.parseAwait = function() {
                this.awaitPos || (this.awaitPos = this.start);
                var t = this.startNode();
                return this.next(), t.argument = this.parseMaybeUnary(null, !0), this.finishNode(t, "AwaitExpression")
              };
              var tt = U.prototype;
              tt.raise = function(t, e) {
                var i = M(this.input, t);
                e += " (" + i.line + ":" + i.column + ")";
                var r = new SyntaxError(e);
                throw r.pos = t, r.loc = i, r.raisedAt = this.pos, r
              }, tt.raiseRecoverable = tt.raise, tt.curPosition = function() {
                if (this.options.locations) return new R(this.curLine, this.pos - this.lineStart)
              };
              var et = U.prototype,
                it = function(t) {
                  this.flags = t, this.var = [], this.lexical = [], this.functions = []
                };
              et.enterScope = function(t) {
                this.scopeStack.push(new it(t))
              }, et.exitScope = function() {
                this.scopeStack.pop()
              }, et.treatFunctionsAsVarInScope = function(t) {
                return 2 & t.flags || !this.inModule && 1 & t.flags
              }, et.declareName = function(t, e, i) {
                var r = !1;
                if (2 === e) {
                  var s = this.currentScope();
                  r = s.lexical.indexOf(t) > -1 || s.functions.indexOf(t) > -1 || s.var.indexOf(t) > -1, s.lexical.push(t), this.inModule && 1 & s.flags && delete this.undefinedExports[t]
                } else if (4 === e) this.currentScope().lexical.push(t);
                else if (3 === e) {
                  var n = this.currentScope();
                  r = this.treatFunctionsAsVar ? n.lexical.indexOf(t) > -1 : n.lexical.indexOf(t) > -1 || n.var.indexOf(t) > -1, n.functions.push(t)
                } else
                  for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                    var o = this.scopeStack[a];
                    if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
                      r = !0;
                      break
                    }
                    if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 3 & o.flags) break
                  }
                r && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
              }, et.checkLocalExport = function(t) {
                -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
              }, et.currentScope = function() {
                return this.scopeStack[this.scopeStack.length - 1]
              }, et.currentVarScope = function() {
                for (var t = this.scopeStack.length - 1;; t--) {
                  var e = this.scopeStack[t];
                  if (3 & e.flags) return e
                }
              }, et.currentThisScope = function() {
                for (var t = this.scopeStack.length - 1;; t--) {
                  var e = this.scopeStack[t];
                  if (3 & e.flags && !(16 & e.flags)) return e
                }
              };
              var rt = function(t, e, i) {
                  this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new B(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
                },
                st = U.prototype;

              function nt(t, e, i, r) {
                return t.type = e, t.end = i, this.options.locations && (t.loc.end = r), this.options.ranges && (t.range[1] = i), t
              }
              st.startNode = function() {
                return new rt(this, this.start, this.startLoc)
              }, st.startNodeAt = function(t, e) {
                return new rt(this, t, e)
              }, st.finishNode = function(t, e) {
                return nt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
              }, st.finishNodeAt = function(t, e, i, r) {
                return nt.call(this, t, e, i, r)
              }, st.copyNode = function(t) {
                var e = new rt(this, t.start, this.startLoc);
                for (var i in t) e[i] = t[i];
                return e
              };
              var at = function(t, e, i, r, s) {
                  this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = r, this.generator = !!s
                },
                ot = {
                  b_stat: new at("{", !1),
                  b_expr: new at("{", !0),
                  b_tmpl: new at("${", !1),
                  p_stat: new at("(", !1),
                  p_expr: new at("(", !0),
                  q_tmpl: new at("`", !0, !0, (function(t) {
                    return t.tryReadTemplateToken()
                  })),
                  f_stat: new at("function", !1),
                  f_expr: new at("function", !0),
                  f_expr_gen: new at("function", !0, !1, null, !0),
                  f_gen: new at("function", !1, !1, null, !0)
                },
                ht = U.prototype;
              ht.initialContext = function() {
                return [ot.b_stat]
              }, ht.braceIsBlock = function(t) {
                var e = this.curContext();
                return e === ot.f_expr || e === ot.f_stat || (t !== E.colon || e !== ot.b_stat && e !== ot.b_expr ? t === E._return || t === E.name && this.exprAllowed ? S.test(this.input.slice(this.lastTokEnd, this.start)) : t === E._else || t === E.semi || t === E.eof || t === E.parenR || t === E.arrow || (t === E.braceL ? e === ot.b_stat : t !== E._var && t !== E._const && t !== E.name && !this.exprAllowed) : !e.isExpr)
              }, ht.inGeneratorContext = function() {
                for (var t = this.context.length - 1; t >= 1; t--) {
                  var e = this.context[t];
                  if ("function" === e.token) return e.generator
                }
                return !1
              }, ht.updateContext = function(t) {
                var e, i = this.type;
                i.keyword && t === E.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
              }, E.parenR.updateContext = E.braceR.updateContext = function() {
                if (1 !== this.context.length) {
                  var t = this.context.pop();
                  t === ot.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
                } else this.exprAllowed = !0
              }, E.braceL.updateContext = function(t) {
                this.context.push(this.braceIsBlock(t) ? ot.b_stat : ot.b_expr), this.exprAllowed = !0
              }, E.dollarBraceL.updateContext = function() {
                this.context.push(ot.b_tmpl), this.exprAllowed = !0
              }, E.parenL.updateContext = function(t) {
                var e = t === E._if || t === E._for || t === E._with || t === E._while;
                this.context.push(e ? ot.p_stat : ot.p_expr), this.exprAllowed = !0
              }, E.incDec.updateContext = function() {}, E._function.updateContext = E._class.updateContext = function(t) {
                !t.beforeExpr || t === E._else || t === E.semi && this.curContext() !== ot.p_stat || t === E._return && S.test(this.input.slice(this.lastTokEnd, this.start)) || (t === E.colon || t === E.braceL) && this.curContext() === ot.b_stat ? this.context.push(ot.f_stat) : this.context.push(ot.f_expr), this.exprAllowed = !1
              }, E.backQuote.updateContext = function() {
                this.curContext() === ot.q_tmpl ? this.context.pop() : this.context.push(ot.q_tmpl), this.exprAllowed = !1
              }, E.star.updateContext = function(t) {
                if (t === E._function) {
                  var e = this.context.length - 1;
                  this.context[e] === ot.f_expr ? this.context[e] = ot.f_expr_gen : this.context[e] = ot.f_gen
                }
                this.exprAllowed = !0
              }, E.name.updateContext = function(t) {
                var e = !1;
                this.options.ecmaVersion >= 6 && t !== E.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
              };
              var ct = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                pt = ct + " Extended_Pictographic",
                lt = {
                  9: ct,
                  10: pt,
                  11: pt,
                  12: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict"
                },
                ut = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                ft = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                dt = ft + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                mt = {
                  9: ft,
                  10: dt,
                  11: dt + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
                  12: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi"
                },
                gt = {};

              function yt(t) {
                var e = gt[t] = {
                  binary: O(lt[t] + " " + ut),
                  nonBinary: {
                    General_Category: O(ut),
                    Script: O(mt[t])
                  }
                };
                e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions
              }
              yt(9), yt(10), yt(11), yt(12);
              var vt = U.prototype,
                xt = function(t) {
                  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = gt[t.options.ecmaVersion >= 12 ? 12 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
                };

              function bt(t) {
                return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              }

              function _t(t) {
                return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
              }

              function Et(t) {
                return t >= 65 && t <= 90 || t >= 97 && t <= 122
              }

              function St(t) {
                return Et(t) || 95 === t
              }

              function wt(t) {
                return St(t) || kt(t)
              }

              function kt(t) {
                return t >= 48 && t <= 57
              }

              function Ct(t) {
                return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
              }

              function At(t) {
                return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
              }

              function Tt(t) {
                return t >= 48 && t <= 55
              }
              xt.prototype.reset = function(t, e, i) {
                var r = -1 !== i.indexOf("u");
                this.start = 0 | t, this.source = e + "", this.flags = i, this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchN = r && this.parser.options.ecmaVersion >= 9
              }, xt.prototype.raise = function(t) {
                this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
              }, xt.prototype.at = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                  r = i.length;
                if (t >= r) return -1;
                var s = i.charCodeAt(t);
                if (!e && !this.switchU || s <= 55295 || s >= 57344 || t + 1 >= r) return s;
                var n = i.charCodeAt(t + 1);
                return n >= 56320 && n <= 57343 ? (s << 10) + n - 56613888 : s
              }, xt.prototype.nextIndex = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                  r = i.length;
                if (t >= r) return r;
                var s, n = i.charCodeAt(t);
                return !e && !this.switchU || n <= 55295 || n >= 57344 || t + 1 >= r || (s = i.charCodeAt(t + 1)) < 56320 || s > 57343 ? t + 1 : t + 2
              }, xt.prototype.current = function(t) {
                return void 0 === t && (t = !1), this.at(this.pos, t)
              }, xt.prototype.lookahead = function(t) {
                return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
              }, xt.prototype.advance = function(t) {
                void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
              }, xt.prototype.eat = function(t, e) {
                return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
              }, vt.validateRegExpFlags = function(t) {
                for (var e = t.validFlags, i = t.flags, r = 0; r < i.length; r++) {
                  var s = i.charAt(r); - 1 === e.indexOf(s) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(s, r + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag")
                }
              }, vt.validateRegExpPattern = function(t) {
                this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t))
              }, vt.regexp_pattern = function(t) {
                t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                  var r = i[e]; - 1 === t.groupNames.indexOf(r) && t.raise("Invalid named capture referenced")
                }
              }, vt.regexp_disjunction = function(t) {
                for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
                this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
              }, vt.regexp_alternative = function(t) {
                for (; t.pos < t.source.length && this.regexp_eatTerm(t););
              }, vt.regexp_eatTerm = function(t) {
                return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !!(t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
              }, vt.regexp_eatAssertion = function(t) {
                var e = t.pos;
                if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return !0;
                if (t.eat(92)) {
                  if (t.eat(66) || t.eat(98)) return !0;
                  t.pos = e
                }
                if (t.eat(40) && t.eat(63)) {
                  var i = !1;
                  if (this.options.ecmaVersion >= 9 && (i = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t), t.eat(41) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !i, !0
                }
                return t.pos = e, !1
              }, vt.regexp_eatQuantifier = function(t, e) {
                return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
              }, vt.regexp_eatQuantifierPrefix = function(t, e) {
                return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
              }, vt.regexp_eatBracedQuantifier = function(t, e) {
                var i = t.pos;
                if (t.eat(123)) {
                  var r = 0,
                    s = -1;
                  if (this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue), t.eat(125))) return -1 !== s && s < r && !e && t.raise("numbers out of order in {} quantifier"), !0;
                  t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
                }
                return !1
              }, vt.regexp_eatAtom = function(t) {
                return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
              }, vt.regexp_eatReverseSolidusAtomEscape = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                  if (this.regexp_eatAtomEscape(t)) return !0;
                  t.pos = e
                }
                return !1
              }, vt.regexp_eatUncapturingGroup = function(t) {
                var e = t.pos;
                if (t.eat(40)) {
                  if (t.eat(63) && t.eat(58)) {
                    if (this.regexp_disjunction(t), t.eat(41)) return !0;
                    t.raise("Unterminated group")
                  }
                  t.pos = e
                }
                return !1
              }, vt.regexp_eatCapturingGroup = function(t) {
                if (t.eat(40)) {
                  if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                  t.raise("Unterminated group")
                }
                return !1
              }, vt.regexp_eatExtendedAtom = function(t) {
                return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
              }, vt.regexp_eatInvalidBracedQuantifier = function(t) {
                return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
              }, vt.regexp_eatSyntaxCharacter = function(t) {
                var e = t.current();
                return !!_t(e) && (t.lastIntValue = e, t.advance(), !0)
              }, vt.regexp_eatPatternCharacters = function(t) {
                for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !_t(i);) t.advance();
                return t.pos !== e
              }, vt.regexp_eatExtendedPatternCharacter = function(t) {
                var e = t.current();
                return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e || (t.advance(), 0))
              }, vt.regexp_groupSpecifier = function(t) {
                if (t.eat(63)) {
                  if (this.regexp_eatGroupName(t)) return -1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"), void t.groupNames.push(t.lastStringValue);
                  t.raise("Invalid group")
                }
              }, vt.regexp_eatGroupName = function(t) {
                if (t.lastStringValue = "", t.eat(60)) {
                  if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                  t.raise("Invalid capture group name")
                }
                return !1
              }, vt.regexp_eatRegExpIdentifierName = function(t) {
                if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                  for (t.lastStringValue += bt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += bt(t.lastIntValue);
                  return !0
                }
                return !1
              }, vt.regexp_eatRegExpIdentifierStart = function(t) {
                var e = t.pos,
                  i = this.options.ecmaVersion >= 11,
                  r = t.current(i);
                return t.advance(i), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (r = t.lastIntValue),
                  function(t) {
                    return d(t, !0) || 36 === t || 95 === t
                  }(r) ? (t.lastIntValue = r, !0) : (t.pos = e, !1)
              }, vt.regexp_eatRegExpIdentifierPart = function(t) {
                var e = t.pos,
                  i = this.options.ecmaVersion >= 11,
                  r = t.current(i);
                return t.advance(i), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (r = t.lastIntValue),
                  function(t) {
                    return m(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
                  }(r) ? (t.lastIntValue = r, !0) : (t.pos = e, !1)
              }, vt.regexp_eatAtomEscape = function(t) {
                return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
              }, vt.regexp_eatBackReference = function(t) {
                var e = t.pos;
                if (this.regexp_eatDecimalEscape(t)) {
                  var i = t.lastIntValue;
                  if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                  if (i <= t.numCapturingParens) return !0;
                  t.pos = e
                }
                return !1
              }, vt.regexp_eatKGroupName = function(t) {
                if (t.eat(107)) {
                  if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                  t.raise("Invalid named reference")
                }
                return !1
              }, vt.regexp_eatCharacterEscape = function(t) {
                return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
              }, vt.regexp_eatCControlLetter = function(t) {
                var e = t.pos;
                if (t.eat(99)) {
                  if (this.regexp_eatControlLetter(t)) return !0;
                  t.pos = e
                }
                return !1
              }, vt.regexp_eatZero = function(t) {
                return 48 === t.current() && !kt(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
              }, vt.regexp_eatControlEscape = function(t) {
                var e = t.current();
                return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
              }, vt.regexp_eatControlLetter = function(t) {
                var e = t.current();
                return !!Et(e) && (t.lastIntValue = e % 32, t.advance(), !0)
              }, vt.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
                void 0 === e && (e = !1);
                var i, r = t.pos,
                  s = e || t.switchU;
                if (t.eat(117)) {
                  if (this.regexp_eatFixedHexDigits(t, 4)) {
                    var n = t.lastIntValue;
                    if (s && n >= 55296 && n <= 56319) {
                      var a = t.pos;
                      if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                        var o = t.lastIntValue;
                        if (o >= 56320 && o <= 57343) return t.lastIntValue = 1024 * (n - 55296) + (o - 56320) + 65536, !0
                      }
                      t.pos = a, t.lastIntValue = n
                    }
                    return !0
                  }
                  if (s && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && (i = t.lastIntValue) >= 0 && i <= 1114111) return !0;
                  s && t.raise("Invalid unicode escape"), t.pos = r
                }
                return !1
              }, vt.regexp_eatIdentityEscape = function(t) {
                if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
                var e = t.current();
                return !(99 === e || t.switchN && 107 === e || (t.lastIntValue = e, t.advance(), 0))
              }, vt.regexp_eatDecimalEscape = function(t) {
                t.lastIntValue = 0;
                var e = t.current();
                if (e >= 49 && e <= 57) {
                  do {
                    t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
                  } while ((e = t.current()) >= 48 && e <= 57);
                  return !0
                }
                return !1
              }, vt.regexp_eatCharacterClassEscape = function(t) {
                var e = t.current();
                if (function(t) {
                    return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
                  }(e)) return t.lastIntValue = -1, t.advance(), !0;
                if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                  if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return !0;
                  t.raise("Invalid property name")
                }
                return !1
              }, vt.regexp_eatUnicodePropertyValueExpression = function(t) {
                var e = t.pos;
                if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                  var i = t.lastStringValue;
                  if (this.regexp_eatUnicodePropertyValue(t)) {
                    var r = t.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameAndValue(t, i, r), !0
                  }
                }
                if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                  var s = t.lastStringValue;
                  return this.regexp_validateUnicodePropertyNameOrValue(t, s), !0
                }
                return !1
              }, vt.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
                N(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value")
              }, vt.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
                t.unicodeProperties.binary.test(e) || t.raise("Invalid property name")
              }, vt.regexp_eatUnicodePropertyName = function(t) {
                var e = 0;
                for (t.lastStringValue = ""; St(e = t.current());) t.lastStringValue += bt(e), t.advance();
                return "" !== t.lastStringValue
              }, vt.regexp_eatUnicodePropertyValue = function(t) {
                var e = 0;
                for (t.lastStringValue = ""; wt(e = t.current());) t.lastStringValue += bt(e), t.advance();
                return "" !== t.lastStringValue
              }, vt.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
                return this.regexp_eatUnicodePropertyValue(t)
              }, vt.regexp_eatCharacterClass = function(t) {
                if (t.eat(91)) {
                  if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return !0;
                  t.raise("Unterminated character class")
                }
                return !1
              }, vt.regexp_classRanges = function(t) {
                for (; this.regexp_eatClassAtom(t);) {
                  var e = t.lastIntValue;
                  if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                    var i = t.lastIntValue;
                    !t.switchU || -1 !== e && -1 !== i || t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class")
                  }
                }
              }, vt.regexp_eatClassAtom = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                  if (this.regexp_eatClassEscape(t)) return !0;
                  if (t.switchU) {
                    var i = t.current();
                    (99 === i || Tt(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                  }
                  t.pos = e
                }
                var r = t.current();
                return 93 !== r && (t.lastIntValue = r, t.advance(), !0)
              }, vt.regexp_eatClassEscape = function(t) {
                var e = t.pos;
                if (t.eat(98)) return t.lastIntValue = 8, !0;
                if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
                if (!t.switchU && t.eat(99)) {
                  if (this.regexp_eatClassControlLetter(t)) return !0;
                  t.pos = e
                }
                return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
              }, vt.regexp_eatClassControlLetter = function(t) {
                var e = t.current();
                return !(!kt(e) && 95 !== e || (t.lastIntValue = e % 32, t.advance(), 0))
              }, vt.regexp_eatHexEscapeSequence = function(t) {
                var e = t.pos;
                if (t.eat(120)) {
                  if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                  t.switchU && t.raise("Invalid escape"), t.pos = e
                }
                return !1
              }, vt.regexp_eatDecimalDigits = function(t) {
                var e = t.pos,
                  i = 0;
                for (t.lastIntValue = 0; kt(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
                return t.pos !== e
              }, vt.regexp_eatHexDigits = function(t) {
                var e = t.pos,
                  i = 0;
                for (t.lastIntValue = 0; Ct(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + At(i), t.advance();
                return t.pos !== e
              }, vt.regexp_eatLegacyOctalEscapeSequence = function(t) {
                if (this.regexp_eatOctalDigit(t)) {
                  var e = t.lastIntValue;
                  if (this.regexp_eatOctalDigit(t)) {
                    var i = t.lastIntValue;
                    e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                  } else t.lastIntValue = e;
                  return !0
                }
                return !1
              }, vt.regexp_eatOctalDigit = function(t) {
                var e = t.current();
                return Tt(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
              }, vt.regexp_eatFixedHexDigits = function(t, e) {
                var i = t.pos;
                t.lastIntValue = 0;
                for (var r = 0; r < e; ++r) {
                  var s = t.current();
                  if (!Ct(s)) return t.pos = i, !1;
                  t.lastIntValue = 16 * t.lastIntValue + At(s), t.advance()
                }
                return !0
              };
              var It = function(t) {
                  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new B(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
                },
                Pt = U.prototype;

              function Nt(t) {
                return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
              }

              function Lt(t) {
                return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              }
              Pt.next = function(t) {
                !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new It(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
              }, Pt.getToken = function() {
                return this.next(), new It(this)
              }, "undefined" != typeof Symbol && (Pt[Symbol.iterator] = function() {
                var t = this;
                return {
                  next: function() {
                    var e = t.getToken();
                    return {
                      done: e.type === E.eof,
                      value: e
                    }
                  }
                }
              }), Pt.curContext = function() {
                return this.context[this.context.length - 1]
              }, Pt.nextToken = function() {
                var t = this.curContext();
                return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(E.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
              }, Pt.readToken = function(t) {
                return d(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
              }, Pt.fullCharCodeAtPos = function() {
                var t = this.input.charCodeAt(this.pos);
                return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
              }, Pt.skipBlockComment = function() {
                var t, e = this.options.onComment && this.curPosition(),
                  i = this.pos,
                  r = this.input.indexOf("*/", this.pos += 2);
                if (-1 === r && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations)
                  for (w.lastIndex = i;
                    (t = w.exec(this.input)) && t.index < this.pos;) ++this.curLine, this.lineStart = t.index + t[0].length;
                this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, r), i, this.pos, e, this.curPosition())
              }, Pt.skipLineComment = function(t) {
                for (var e = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !k(r);) r = this.input.charCodeAt(++this.pos);
                this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
              }, Pt.skipSpace = function() {
                t: for (; this.pos < this.input.length;) {
                  var t = this.input.charCodeAt(this.pos);
                  switch (t) {
                    case 32:
                    case 160:
                      ++this.pos;
                      break;
                    case 13:
                      10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                    case 10:
                    case 8232:
                    case 8233:
                      ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                      break;
                    case 47:
                      switch (this.input.charCodeAt(this.pos + 1)) {
                        case 42:
                          this.skipBlockComment();
                          break;
                        case 47:
                          this.skipLineComment(2);
                          break;
                        default:
                          break t
                      }
                      break;
                    default:
                      if (!(t > 8 && t < 14 || t >= 5760 && C.test(String.fromCharCode(t)))) break t;
                      ++this.pos
                  }
                }
              }, Pt.finishToken = function(t, e) {
                this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
                var i = this.type;
                this.type = t, this.value = e, this.updateContext(i)
              }, Pt.readToken_dot = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t >= 48 && t <= 57) return this.readNumber(!0);
                var e = this.input.charCodeAt(this.pos + 2);
                return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(E.ellipsis)) : (++this.pos, this.finishToken(E.dot))
              }, Pt.readToken_slash = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(E.assign, 2) : this.finishOp(E.slash, 1)
              }, Pt.readToken_mult_modulo_exp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                  i = 1,
                  r = 42 === t ? E.star : E.modulo;
                return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, r = E.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(E.assign, i + 1) : this.finishOp(r, i)
              }, Pt.readToken_pipe_amp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(E.assign, 3) : this.finishOp(124 === t ? E.logicalOR : E.logicalAND, 2) : 61 === e ? this.finishOp(E.assign, 2) : this.finishOp(124 === t ? E.bitwiseOR : E.bitwiseAND, 1)
              }, Pt.readToken_caret = function() {
                return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(E.assign, 2) : this.finishOp(E.bitwiseXOR, 1)
              }, Pt.readToken_plus_min = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !S.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(E.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(E.assign, 2) : this.finishOp(E.plusMin, 1)
              }, Pt.readToken_lt_gt = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                  i = 1;
                return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(E.assign, i + 1) : this.finishOp(E.bitShift, i)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(E.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
              }, Pt.readToken_eq_excl = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return 61 === e ? this.finishOp(E.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(E.arrow)) : this.finishOp(61 === t ? E.eq : E.prefix, 1)
              }, Pt.readToken_question = function() {
                var t = this.options.ecmaVersion;
                if (t >= 11) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  if (46 === e) {
                    var i = this.input.charCodeAt(this.pos + 2);
                    if (i < 48 || i > 57) return this.finishOp(E.questionDot, 2)
                  }
                  if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(E.assign, 3) : this.finishOp(E.coalesce, 2)
                }
                return this.finishOp(E.question, 1)
              }, Pt.getTokenFromCode = function(t) {
                switch (t) {
                  case 46:
                    return this.readToken_dot();
                  case 40:
                    return ++this.pos, this.finishToken(E.parenL);
                  case 41:
                    return ++this.pos, this.finishToken(E.parenR);
                  case 59:
                    return ++this.pos, this.finishToken(E.semi);
                  case 44:
                    return ++this.pos, this.finishToken(E.comma);
                  case 91:
                    return ++this.pos, this.finishToken(E.bracketL);
                  case 93:
                    return ++this.pos, this.finishToken(E.bracketR);
                  case 123:
                    return ++this.pos, this.finishToken(E.braceL);
                  case 125:
                    return ++this.pos, this.finishToken(E.braceR);
                  case 58:
                    return ++this.pos, this.finishToken(E.colon);
                  case 96:
                    if (this.options.ecmaVersion < 6) break;
                    return ++this.pos, this.finishToken(E.backQuote);
                  case 48:
                    var e = this.input.charCodeAt(this.pos + 1);
                    if (120 === e || 88 === e) return this.readRadixNumber(16);
                    if (this.options.ecmaVersion >= 6) {
                      if (111 === e || 79 === e) return this.readRadixNumber(8);
                      if (98 === e || 66 === e) return this.readRadixNumber(2)
                    }
                  case 49:
                  case 50:
                  case 51:
                  case 52:
                  case 53:
                  case 54:
                  case 55:
                  case 56:
                  case 57:
                    return this.readNumber(!1);
                  case 34:
                  case 39:
                    return this.readString(t);
                  case 47:
                    return this.readToken_slash();
                  case 37:
                  case 42:
                    return this.readToken_mult_modulo_exp(t);
                  case 124:
                  case 38:
                    return this.readToken_pipe_amp(t);
                  case 94:
                    return this.readToken_caret();
                  case 43:
                  case 45:
                    return this.readToken_plus_min(t);
                  case 60:
                  case 62:
                    return this.readToken_lt_gt(t);
                  case 61:
                  case 33:
                    return this.readToken_eq_excl(t);
                  case 63:
                    return this.readToken_question();
                  case 126:
                    return this.finishOp(E.prefix, 1)
                }
                this.raise(this.pos, "Unexpected character '" + Lt(t) + "'")
              }, Pt.finishOp = function(t, e) {
                var i = this.input.slice(this.pos, this.pos + e);
                return this.pos += e, this.finishToken(t, i)
              }, Pt.readRegexp = function() {
                for (var t, e, i = this.pos;;) {
                  this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                  var r = this.input.charAt(this.pos);
                  if (S.test(r) && this.raise(i, "Unterminated regular expression"), t) t = !1;
                  else {
                    if ("[" === r) e = !0;
                    else if ("]" === r && e) e = !1;
                    else if ("/" === r && !e) break;
                    t = "\\" === r
                  }++this.pos
                }
                var s = this.input.slice(i, this.pos);
                ++this.pos;
                var n = this.pos,
                  a = this.readWord1();
                this.containsEsc && this.unexpected(n);
                var o = this.regexpState || (this.regexpState = new xt(this));
                o.reset(i, s, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                var h = null;
                try {
                  h = new RegExp(s, a)
                } catch (t) {}
                return this.finishToken(E.regexp, {
                  pattern: s,
                  flags: a,
                  value: h
                })
              }, Pt.readInt = function(t, e, i) {
                for (var r = this.options.ecmaVersion >= 12 && void 0 === e, s = i && 48 === this.input.charCodeAt(this.pos), n = this.pos, a = 0, o = 0, h = 0, c = null == e ? 1 / 0 : e; h < c; ++h, ++this.pos) {
                  var p = this.input.charCodeAt(this.pos),
                    l = void 0;
                  if (r && 95 === p) s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = p;
                  else {
                    if ((l = p >= 97 ? p - 97 + 10 : p >= 65 ? p - 65 + 10 : p >= 48 && p <= 57 ? p - 48 : 1 / 0) >= t) break;
                    o = p, a = a * t + l
                  }
                }
                return r && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || null != e && this.pos - n !== e ? null : a
              }, Pt.readRadixNumber = function(t) {
                var e = this.pos;
                this.pos += 2;
                var i = this.readInt(t);
                return null == i && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = Nt(this.input.slice(e, this.pos)), ++this.pos) : d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(E.num, i)
              }, Pt.readNumber = function(t) {
                var e = this.pos;
                t || null !== this.readInt(10, void 0, !0) || this.raise(e, "Invalid number");
                var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
                i && this.strict && this.raise(e, "Invalid number");
                var r = this.input.charCodeAt(this.pos);
                if (!i && !t && this.options.ecmaVersion >= 11 && 110 === r) {
                  var s = Nt(this.input.slice(e, this.pos));
                  return ++this.pos, d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(E.num, s)
                }
                i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), 46 !== r || i || (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), 69 !== r && 101 !== r || i || (43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                var n, a = (n = this.input.slice(e, this.pos), i ? parseInt(n, 8) : parseFloat(n.replace(/_/g, "")));
                return this.finishToken(E.num, a)
              }, Pt.readCodePoint = function() {
                var t;
                if (123 === this.input.charCodeAt(this.pos)) {
                  this.options.ecmaVersion < 6 && this.unexpected();
                  var e = ++this.pos;
                  t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
                } else t = this.readHexChar(4);
                return t
              }, Pt.readString = function(t) {
                for (var e = "", i = ++this.pos;;) {
                  this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                  var r = this.input.charCodeAt(this.pos);
                  if (r === t) break;
                  92 === r ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : (k(r, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                }
                return e += this.input.slice(i, this.pos++), this.finishToken(E.string, e)
              };
              var Ot = {};
              Pt.tryReadTemplateToken = function() {
                this.inTemplateElement = !0;
                try {
                  this.readTmplToken()
                } catch (t) {
                  if (t !== Ot) throw t;
                  this.readInvalidTemplateToken()
                }
                this.inTemplateElement = !1
              }, Pt.invalidStringToken = function(t, e) {
                if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ot;
                this.raise(t, e)
              }, Pt.readTmplToken = function() {
                for (var t = "", e = this.pos;;) {
                  this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                  var i = this.input.charCodeAt(this.pos);
                  if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== E.template && this.type !== E.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(E.template, t)) : 36 === i ? (this.pos += 2, this.finishToken(E.dollarBraceL)) : (++this.pos, this.finishToken(E.backQuote));
                  if (92 === i) t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
                  else if (k(i)) {
                    switch (t += this.input.slice(e, this.pos), ++this.pos, i) {
                      case 13:
                        10 === this.input.charCodeAt(this.pos) && ++this.pos;
                      case 10:
                        t += "\n";
                        break;
                      default:
                        t += String.fromCharCode(i)
                    }
                    this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos
                  } else ++this.pos
                }
              }, Pt.readInvalidTemplateToken = function() {
                for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                  case "\\":
                    ++this.pos;
                    break;
                  case "$":
                    if ("{" !== this.input[this.pos + 1]) break;
                  case "`":
                    return this.finishToken(E.invalidTemplate, this.input.slice(this.start, this.pos))
                }
                this.raise(this.start, "Unterminated template")
              }, Pt.readEscapedChar = function(t) {
                var e = this.input.charCodeAt(++this.pos);
                switch (++this.pos, e) {
                  case 110:
                    return "\n";
                  case 114:
                    return "\r";
                  case 120:
                    return String.fromCharCode(this.readHexChar(2));
                  case 117:
                    return Lt(this.readCodePoint());
                  case 116:
                    return "\t";
                  case 98:
                    return "\b";
                  case 118:
                    return "\v";
                  case 102:
                    return "\f";
                  case 13:
                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                  case 10:
                    return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                  case 56:
                  case 57:
                    if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), t) {
                      var i = this.pos - 1;
                      return this.invalidStringToken(i, "Invalid escape sequence in template string"), null
                    }
                  default:
                    if (e >= 48 && e <= 55) {
                      var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                        s = parseInt(r, 8);
                      return s > 255 && (r = r.slice(0, -1), s = parseInt(r, 8)), this.pos += r.length - 1, e = this.input.charCodeAt(this.pos), "0" === r && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - r.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(s)
                    }
                    return k(e) ? "" : String.fromCharCode(e)
                }
              }, Pt.readHexChar = function(t) {
                var e = this.pos,
                  i = this.readInt(16, t);
                return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
              }, Pt.readWord1 = function() {
                this.containsEsc = !1;
                for (var t = "", e = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                  var s = this.fullCharCodeAtPos();
                  if (m(s, r)) this.pos += s <= 65535 ? 1 : 2;
                  else {
                    if (92 !== s) break;
                    this.containsEsc = !0, t += this.input.slice(i, this.pos);
                    var n = this.pos;
                    117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                    var a = this.readCodePoint();
                    (e ? d : m)(a, r) || this.invalidStringToken(n, "Invalid Unicode escape"), t += Lt(a), i = this.pos
                  }
                  e = !1
                }
                return t + this.input.slice(i, this.pos)
              }, Pt.readWord = function() {
                var t = this.readWord1(),
                  e = E.name;
                return this.keywords.test(t) && (e = b[t]), this.finishToken(e, t)
              }, U.acorn = {
                Parser: U,
                version: "8.0.5",
                defaultOptions: V,
                Position: R,
                SourceLocation: B,
                getLineInfo: M,
                Node: rt,
                TokenType: g,
                tokTypes: E,
                keywordTypes: b,
                TokContext: at,
                tokContexts: ot,
                isIdentifierChar: m,
                isIdentifierStart: d,
                Token: It,
                isNewLine: k,
                lineBreak: S,
                lineBreakG: w,
                nonASCIIwhitespace: C
              };
              var Rt = i(977),
                Bt = i.n(Rt),
                Mt = i(297),
                Vt = i.n(Mt);
              const Dt = {
                class: "className",
                for: "htmlFor",
                maxlength: "maxLength",
                colspan: "colSpan",
                rowspan: "rowSpan"
              };
              var Ht = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
                Ut = ["table", "tbody", "tfoot", "thead", "tr"];
              var Ft = function() {
                return function() {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                    e = String(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""),
                    i = 0;
                  return e.split("").forEach((function(t) {
                    i = (i << 5) - i + t.charCodeAt(0), i &= i
                  })), Math.abs(i).toString(t)
                }(Math.random().toString())
              };

              function jt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), i.push.apply(i, r)
                }
                return i
              }

              function Gt(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? jt(Object(i), !0).forEach((function(e) {
                    Wt(t, e, i[e])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : jt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                  }))
                }
                return t
              }

              function Wt(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = i, t
              }

              function qt(t) {
                return (qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
                } : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
              }

              function zt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
              }
              var Xt = function t(e, i) {
                  var r = function(t) {
                      return function(t) {
                        if (Array.isArray(t)) return t
                      }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                      }(t) || function(t, e) {
                        if (t) {
                          if ("string" == typeof t) return zt(t, e);
                          var i = Object.prototype.toString.call(t).slice(8, -1);
                          return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? zt(t, e) : void 0
                        }
                      }(t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                      }()
                    }(i),
                    s = r[0],
                    n = r.slice(1);
                  if (null != e && null != s) return 0 === n.length ? e[s] : t(e[s], n)
                },
                Kt = function(t, e) {
                  return Xt(t, function(t) {
                    return null == t || "" === t ? [] : t.split(".")
                  }(e))
                };

              function Qt(t) {
                return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
                } : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
              }

              function Zt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), i.push.apply(i, r)
                }
                return i
              }

              function Yt(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? Zt(Object(i), !0).forEach((function(e) {
                    ne(t, e, i[e])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Zt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                  }))
                }
                return t
              }

              function $t(t) {
                return function(t) {
                  if (Array.isArray(t)) return te(t)
                }(t) || function(t) {
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || Jt(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
              }

              function Jt(t, e) {
                if (t) {
                  if ("string" == typeof t) return te(t, e);
                  var i = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? te(t, e) : void 0
                }
              }

              function te(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
              }

              function ee(t, e) {
                return (ee = Object.setPrototypeOf || function(t, e) {
                  return t.__proto__ = e, t
                })(t, e)
              }

              function ie(t) {
                var e = function() {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                  } catch (t) {
                    return !1
                  }
                }();
                return function() {
                  var i, r = se(t);
                  if (e) {
                    var s = se(this).constructor;
                    i = Reflect.construct(r, arguments, s)
                  } else i = r.apply(this, arguments);
                  return function(t, e) {
                    return !e || "object" !== Qt(e) && "function" != typeof e ? re(t) : e
                  }(this, i)
                }
              }

              function re(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
              }

              function se(t) {
                return (se = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
              }

              function ne(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = i, t
              }

              function ae(t, e) {
                var i = e.get(t);
                if (!i) throw new TypeError("attempted to get private field on non-instance");
                return i.get ? i.get.call(t) : i.value
              }
              var oe = new WeakMap,
                he = new WeakMap,
                ce = new WeakMap,
                pe = new WeakMap,
                le = new WeakMap,
                ue = function(t) {
                  ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                      }
                    }), e && ee(t, e)
                  }(i, t);
                  var e = ie(i);

                  function i() {
                    var t;
                    ! function(t, e) {
                      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    for (var r = arguments.length, s = new Array(r), n = 0; n < r; n++) s[n] = arguments[n];
                    return ne(re(t = e.call.apply(e, [this].concat(s))), "ParsedChildren", null), oe.set(re(t), {
                      writable: !0,
                      value: function(e) {
                        var i = U.extend(Bt()({
                            autoCloseVoidElements: t.props.autoCloseVoidElements
                          })),
                          r = "<root>".concat(e, "</root>"),
                          s = [];
                        try {
                          s = (s = i.parse(r, {
                            ecmaVersion: "latest"
                          })).body[0].expression.children || []
                        } catch (e) {
                          return t.props.showWarnings && console.warn(e), t.props.onError && t.props.onError(e), t.props.renderError ? t.props.renderError({
                            error: String(e)
                          }) : null
                        }
                        return s.map((function(e) {
                          return ae(re(t), he).call(re(t), e)
                        })).filter(Boolean)
                      }
                    }), he.set(re(t), {
                      writable: !0,
                      value: function(e, i) {
                        switch (e.type) {
                          case "JSXAttribute":
                            return null === e.value || ae(re(t), he).call(re(t), e.value, i);
                          case "JSXElement":
                          case "JSXFragment":
                            return ae(re(t), le).call(re(t), e, i);
                          case "JSXExpressionContainer":
                            return ae(re(t), he).call(re(t), e.expression, i);
                          case "JSXText":
                            var r = t.props.disableKeyGeneration ? void 0 : Ft();
                            return t.props.disableFragments ? e.value : Vt().createElement(Mt.Fragment, {
                              key: r
                            }, e.value);
                          case "ArrayExpression":
                            return e.elements.map((function(e) {
                              return ae(re(t), he).call(re(t), e, i)
                            }));
                          case "BinaryExpression":
                            switch (e.operator) {
                              case "-":
                                return ae(re(t), he).call(re(t), e.left) - ae(re(t), he).call(re(t), e.right);
                              case "!=":
                                return ae(re(t), he).call(re(t), e.left) != ae(re(t), he).call(re(t), e.right);
                              case "!==":
                                return ae(re(t), he).call(re(t), e.left) !== ae(re(t), he).call(re(t), e.right);
                              case "*":
                                return ae(re(t), he).call(re(t), e.left) * ae(re(t), he).call(re(t), e.right);
                              case "**":
                                return Math.pow(ae(re(t), he).call(re(t), e.left), ae(re(t), he).call(re(t), e.right));
                              case "/":
                                return ae(re(t), he).call(re(t), e.left) / ae(re(t), he).call(re(t), e.right);
                              case "%":
                                return ae(re(t), he).call(re(t), e.left) % ae(re(t), he).call(re(t), e.right);
                              case "+":
                                return ae(re(t), he).call(re(t), e.left) + ae(re(t), he).call(re(t), e.right);
                              case "<":
                                return ae(re(t), he).call(re(t), e.left) < ae(re(t), he).call(re(t), e.right);
                              case "<=":
                                return ae(re(t), he).call(re(t), e.left) <= ae(re(t), he).call(re(t), e.right);
                              case "==":
                                return ae(re(t), he).call(re(t), e.left) == ae(re(t), he).call(re(t), e.right);
                              case "===":
                                return ae(re(t), he).call(re(t), e.left) === ae(re(t), he).call(re(t), e.right);
                              case ">":
                                return ae(re(t), he).call(re(t), e.left) > ae(re(t), he).call(re(t), e.right);
                              case ">=":
                                return ae(re(t), he).call(re(t), e.left) >= ae(re(t), he).call(re(t), e.right)
                            }
                            return;
                          case "CallExpression":
                            var s = ae(re(t), he).call(re(t), e.callee);
                            return void 0 === s ? void t.props.onError(new Error("The expression '".concat(e.callee, "' could not be resolved, resulting in an undefined return value."))) : s.apply(void 0, $t(e.arguments.map((function(i) {
                              return ae(re(t), he).call(re(t), i, e.callee)
                            }))));
                          case "ConditionalExpression":
                            return ae(re(t), he).call(re(t), e.test) ? ae(re(t), he).call(re(t), e.consequent) : ae(re(t), he).call(re(t), e.alternate);
                          case "ExpressionStatement":
                            return ae(re(t), he).call(re(t), e.expression);
                          case "Identifier":
                            return i && e.name in i ? i[e.name] : (t.props.bindings || {})[e.name];
                          case "Literal":
                            return e.value;
                          case "LogicalExpression":
                            var n = ae(re(t), he).call(re(t), e.left);
                            return "||" === e.operator && n ? n : !!("&&" === e.operator && n || "||" === e.operator && !n) && ae(re(t), he).call(re(t), e.right);
                          case "MemberExpression":
                            return ae(re(t), ce).call(re(t), e, i);
                          case "ObjectExpression":
                            var a = {};
                            return e.properties.forEach((function(e) {
                              a[e.key.name || e.key.value] = ae(re(t), he).call(re(t), e.value)
                            })), a;
                          case "TemplateElement":
                            return e.value.cooked;
                          case "TemplateLiteral":
                            return [].concat($t(e.expressions), $t(e.quasis)).sort((function(t, e) {
                              return t.start < e.start ? -1 : 1
                            })).map((function(e) {
                              return ae(re(t), he).call(re(t), e)
                            })).join("");
                          case "UnaryExpression":
                            switch (e.operator) {
                              case "+":
                                return e.argument.value;
                              case "-":
                                return -e.argument.value;
                              case "!":
                                return !e.argument.value
                            }
                            return;
                          case "ArrowFunctionExpression":
                            var o, h;
                            return (e.async || e.generator) && (null === (o = (h = t.props).onError) || void 0 === o || o.call(h, new Error("Async and generator arrow functions are not supported."))),
                              function() {
                                for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                                var n = {};
                                return e.params.forEach((function(t, e) {
                                  n[t.name] = r[e]
                                })), ae(re(t), he).call(re(t), e.body, n)
                              }
                        }
                      }
                    }), ce.set(re(t), {
                      writable: !0,
                      value: function(e, i) {
                        var r, s, n, a, o = e.object,
                          h = [null !== (r = null === (s = e.property) || void 0 === s ? void 0 : s.name) && void 0 !== r ? r : JSON.parse(null !== (n = null === (a = e.property) || void 0 === a ? void 0 : a.raw) && void 0 !== n ? n : '""')];
                        if ("Literal" !== e.object.type)
                          for (; o && ["MemberExpression", "Literal"].includes(null === (c = o) || void 0 === c ? void 0 : c.type);) {
                            var c, p, l, u = o.property;
                            o.computed ? h.unshift(ae(re(t), he).call(re(t), u, i)) : h.unshift(null !== (p = null == u ? void 0 : u.name) && void 0 !== p ? p : JSON.parse(null !== (l = null == u ? void 0 : u.raw) && void 0 !== l ? l : '""')), o = o.object
                          }
                        var f = ae(re(t), he).call(re(t), o, i);
                        try {
                          var d = f,
                            m = h.reduce((function(t, e) {
                              return d = t, t[e]
                            }), f);
                          return "function" == typeof m ? m.bind(d) : m
                        } catch (e) {
                          var g, y = (null === (g = o) || void 0 === g ? void 0 : g.name) || "unknown";
                          t.props.onError(new Error("Unable to parse ".concat(y, '["').concat(h.join('"]["'), '"]}')))
                        }
                      }
                    }), pe.set(re(t), {
                      writable: !0,
                      value: function(e) {
                        return "JSXIdentifier" === e.type ? e.name : "".concat(ae(re(t), pe).call(re(t), e.object), ".").concat(ae(re(t), pe).call(re(t), e.property))
                      }
                    }), le.set(re(t), {
                      writable: !0,
                      value: function(e, i) {
                        var r = t.props,
                          s = r.allowUnknownElements,
                          n = r.components,
                          a = r.componentsOnly,
                          o = r.onError,
                          h = e.children,
                          c = void 0 === h ? [] : h,
                          p = "JSXElement" === e.type ? e.openingElement : e.openingFragment,
                          l = p.attributes,
                          u = void 0 === l ? [] : l,
                          f = "JSXElement" === e.type ? ae(re(t), pe).call(re(t), p.name) : "",
                          d = (t.props.blacklistedAttrs || []).map((function(t) {
                            return t instanceof RegExp ? t : new RegExp(t, "i")
                          })),
                          m = (t.props.blacklistedTags || []).map((function(t) {
                            return t.trim().toLowerCase()
                          })).filter(Boolean);
                        if (/^(html|head|body)$/i.test(f)) return c.map((function(e) {
                          return ae(re(t), le).call(re(t), e, i)
                        }));
                        var g, y = f.trim().toLowerCase();
                        if (-1 !== m.indexOf(y)) return o(new Error("The tag <".concat(f, "> is blacklisted, and will not be rendered."))), null;
                        if ("" !== f && !Kt(n, f)) {
                          if (a) return o(new Error("The component <".concat(f, "> is unrecognized, and will not be rendered."))), t.props.renderUnrecognized(f);
                          if (!s && document.createElement(f) instanceof HTMLUnknownElement) return o(new Error("The tag <".concat(f, "> is unrecognized in this browser, and will not be rendered."))), t.props.renderUnrecognized(f)
                        }
                        var v = "JSXElement" === e.type ? Kt(n, f) : Mt.Fragment;
                        (v || function(t) {
                          return -1 === Ht.indexOf(t.toLowerCase())
                        }(f)) && (g = c.map((function(e) {
                          return ae(re(t), he).call(re(t), e, i)
                        })), v || function(t) {
                          return -1 !== Ut.indexOf(t.toLowerCase())
                        }(f) || (g = g.filter((function(t) {
                          return "string" != typeof t || !/^\s*$/.test(t)
                        }))), 0 === g.length ? g = void 0 : 1 === g.length ? g = function(t, e) {
                          return function(t) {
                            if (Array.isArray(t)) return t
                          }(t) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                              var i = [],
                                r = !0,
                                s = !1,
                                n = void 0;
                              try {
                                for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); r = !0);
                              } catch (t) {
                                s = !0, n = t
                              } finally {
                                try {
                                  r || null == o.return || o.return()
                                } finally {
                                  if (s) throw n
                                }
                              }
                              return i
                            }
                          }(t, e) || Jt(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                          }()
                        }(g, 1)[0] : g.length > 1 && !t.props.disableKeyGeneration && (g = g.map((function(t, e) {
                          return null == t || !t.type || null != t && t.key ? t : Yt(Yt({}, t), {}, {
                            key: t.key || e
                          })
                        }))));
                        var x = {
                          key: t.props.disableKeyGeneration ? void 0 : Ft()
                        };
                        u.forEach((function(e) {
                          if ("JSXAttribute" === e.type) {
                            var r = e.name.name,
                              s = Dt[r] || r,
                              n = ae(re(t), he).call(re(t), e, i);
                            0 === d.filter((function(t) {
                              return t.test(s)
                            })).length && (x[s] = n)
                          } else if ("JSXSpreadAttribute" === e.type && "Identifier" === e.argument.type || "MemberExpression" === e.argument.type) {
                            var a = ae(re(t), he).call(re(t), e.argument, i);
                            "object" === Qt(a) && Object.keys(a).forEach((function(t) {
                              var e = Dt[t] || t;
                              0 === d.filter((function(t) {
                                return t.test(e)
                              })).length && (x[e] = a[t])
                            }))
                          }
                        })), "string" == typeof x.style && (x.style = function(t) {
                          switch (qt(t)) {
                            case "string":
                              return t.split(";").filter((function(t) {
                                return t
                              })).reduce((function(t, e) {
                                var i = e.slice(0, e.indexOf(":")).trim(),
                                  r = e.slice(e.indexOf(":") + 1).trim();
                                return Gt(Gt({}, t), {}, Wt({}, i.replace(/([A-Z])([A-Z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[^a-zA-Z\u00C0-\u00ff]/g, " ").toLowerCase().split(" ").filter((function(t) {
                                  return t
                                })).map((function(t, e) {
                                  return e > 0 ? t[0].toUpperCase() + t.slice(1) : t
                                })).join(""), r))
                              }), {});
                            case "object":
                              return t;
                            default:
                              return
                          }
                        }(x.style));
                        var b = f.toLowerCase();
                        return "option" === b && (g = g.props.children), Vt().createElement(v || b, x, g)
                      }
                    }), ne(re(t), "render", (function() {
                      var e = (t.props.jsx || "").trim().replace(/<!DOCTYPE([^>]*)>/g, "");
                      t.ParsedChildren = ae(re(t), oe).call(re(t), e);
                      var i = $t(new Set(["jsx-parser"].concat($t(String(t.props.className).split(" "))))).filter(Boolean).join(" ");
                      return t.props.renderInWrapper ? Vt().createElement("div", {
                        className: i
                      }, t.ParsedChildren) : Vt().createElement(Vt().Fragment, null, t.ParsedChildren)
                    })), t
                  }
                  return i
                }(Vt().Component);
              ne(ue, "displayName", "JsxParser"), ne(ue, "defaultProps", {
                allowUnknownElements: !0,
                autoCloseVoidElements: !1,
                bindings: {},
                blacklistedAttrs: [/^on.+/i],
                blacklistedTags: ["script"],
                className: "",
                components: {},
                componentsOnly: !1,
                disableFragments: !1,
                disableKeyGeneration: !1,
                jsx: "",
                onError: function() {},
                showWarnings: !1,
                renderError: void 0,
                renderInWrapper: !0,
                renderUnrecognized: function() {
                  return null
                }
              })
            },
            297: t => {
              "use strict";
              t.exports = r
            }
          },
          e = {};

        function i(r) {
          if (e[r]) return e[r].exports;
          var s = e[r] = {
            exports: {}
          };
          return t[r].call(s.exports, s, s.exports, i), s.exports
        }
        return i.n = t => {
          var e = t && t.__esModule ? () => t.default : () => t;
          return i.d(e, {
            a: e
          }), e
        }, i.d = (t, e) => {
          for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
          })
        }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          })
        }, i(272)
      })())
    }
  }
]);