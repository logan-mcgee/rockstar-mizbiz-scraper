/*! For license information please see e52f7500345f3fe9a21b8ee37ef6565e.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [442], {
    1075: (e, t, n) => {
      n.d(t, {
        $6: () => f,
        OV: () => s,
        Qe: () => u,
        X9: () => c,
        gb: () => l,
        wI: () => a
      });
      var r, i = n(8254);
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(r || (r = {}));
      var o = function(e) {
          function t(n, r, i) {
            var o = this,
              a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
            return (o = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, t), o
          }
          return (0, i.ZT)(t, e), t
        }(Error),
        a = function(e) {
          function t(t, n) {
            return e.call(this, r.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, i.ZT)(t, e), t
        }(o),
        s = function(e) {
          function t(t, n) {
            return e.call(this, r.INVALID_CONFIG, t, n) || this
          }
          return (0, i.ZT)(t, e), t
        }(o),
        l = function(e) {
          function t(t, n) {
            return e.call(this, r.MISSING_DATA, t, n) || this
          }
          return (0, i.ZT)(t, e), t
        }(o),
        u = function(e) {
          function t(t, n, i) {
            var o = e.call(this, r.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), i) || this;
            return o.locale = n, o
          }
          return (0, i.ZT)(t, e), t
        }(o),
        c = function(e) {
          function t(t, n, r, i) {
            var o = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, i) || this;
            return o.descriptor = r, o.locale = n, o
          }
          return (0, i.ZT)(t, e), t
        }(u),
        f = function(e) {
          function t(t, n) {
            var i = e.call(this, r.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return i.descriptor = t, i
          }
          return (0, i.ZT)(t, e), t
        }(o)
    },
    5390: (e, t, n) => {
      n.d(t, {
        L6: () => s,
        Sn: () => u,
        TB: () => h,
        Z0: () => l,
        ax: () => f
      });
      var r = n(8254),
        i = n(6404),
        o = n(2777),
        a = n(1075);

      function s(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var l = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function u() {
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

      function c(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
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
          n = Intl.ListFormat,
          a = Intl.DisplayNames,
          s = (0, o.H)((function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))
          }), {
            cache: c(e.dateTime),
            strategy: o.A.variadic
          }),
          l = (0, o.H)((function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new((e = Intl.NumberFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))
          }), {
            cache: c(e.number),
            strategy: o.A.variadic
          }),
          u = (0, o.H)((function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new((e = Intl.PluralRules).bind.apply(e, (0, r.ev)([void 0], t, !1)))
          }), {
            cache: c(e.pluralRules),
            strategy: o.A.variadic
          });
        return {
          getDateTimeFormat: s,
          getNumberFormat: l,
          getMessageFormat: (0, o.H)((function(e, t, n, o) {
            return new i.C(e, t, n, (0, r.pi)({
              formatters: {
                getNumberFormat: l,
                getDateTimeFormat: s,
                getPluralRules: u
              }
            }, o || {}))
          }), {
            cache: c(e.message),
            strategy: o.A.variadic
          }),
          getRelativeTimeFormat: (0, o.H)((function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return new(t.bind.apply(t, (0, r.ev)([void 0], e, !1)))
          }), {
            cache: c(e.relativeTime),
            strategy: o.A.variadic
          }),
          getPluralRules: u,
          getListFormat: (0, o.H)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(n.bind.apply(n, (0, r.ev)([void 0], e, !1)))
          }), {
            cache: c(e.list),
            strategy: o.A.variadic
          }),
          getDisplayNames: (0, o.H)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(a.bind.apply(a, (0, r.ev)([void 0], e, !1)))
          }), {
            cache: c(e.displayNames),
            strategy: o.A.variadic
          })
        }
      }

      function h(e, t, n, r) {
        var i, o = e && e[t];
        if (o && (i = o[n]), i) return i;
        r(new a.wI("No ".concat(t, " format named: ").concat(n)))
      }
    },
    4215: (e, t, n) => {
      var r = n(279),
        i = n(2219);

      function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      var a = new Set,
        s = {};

      function l(e, t) {
        u(e, t), u(e + "Capture", t)
      }

      function u(e, t) {
        for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e])
      }
      var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        f = Object.prototype.hasOwnProperty,
        h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        d = {},
        p = {};

      function m(e, t, n, r, i, o, a) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a
      }
      var g = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        g[e] = new m(e, 0, !1, e, null, !1, !1)
      })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach((function(e) {
        var t = e[0];
        g[t] = new m(t, 1, !1, e[1], null, !1, !1)
      })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
      })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        g[e] = new m(e, 2, !1, e, null, !1, !1)
      })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
      })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        g[e] = new m(e, 3, !0, e, null, !1, !1)
      })), ["capture", "download"].forEach((function(e) {
        g[e] = new m(e, 4, !1, e, null, !1, !1)
      })), ["cols", "rows", "size", "span"].forEach((function(e) {
        g[e] = new m(e, 6, !1, e, null, !1, !1)
      })), ["rowSpan", "start"].forEach((function(e) {
        g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
      }));
      var v = /[\-:]([a-z])/g;

      function y(e) {
        return e[1].toUpperCase()
      }

      function b(e, t, n, r) {
        var i = g.hasOwnProperty(t) ? g[t] : null;
        (null !== i ? 0 !== i.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
          if (null == t || function(e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                  return !1
              }
            }(e, t, n, r)) return !0;
          if (r) return !1;
          if (null !== n) switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t
          }
          return !1
        }(t, n, i, r) && (n = null), r || null === i ? function(e) {
          return !!f.call(p, e) || !f.call(d, e) && (h.test(e) ? p[e] = !0 : (d[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(v, y);
        g[t] = new m(t, 1, !1, e, null, !1, !1)
      })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(v, y);
        g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
      })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(v, y);
        g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
      })), ["tabIndex", "crossOrigin"].forEach((function(e) {
        g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
      })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
        g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
      }));
      var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        w = Symbol.for("react.element"),
        S = Symbol.for("react.portal"),
        T = Symbol.for("react.fragment"),
        k = Symbol.for("react.strict_mode"),
        P = Symbol.for("react.profiler"),
        x = Symbol.for("react.provider"),
        C = Symbol.for("react.context"),
        L = Symbol.for("react.forward_ref"),
        A = Symbol.for("react.suspense"),
        _ = Symbol.for("react.suspense_list"),
        R = Symbol.for("react.memo"),
        N = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      var M = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
      var D = Symbol.iterator;

      function I(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = D && e[D] || e["@@iterator"]) ? e : null
      }
      var B, O = Object.assign;

      function F(e) {
        if (void 0 === B) try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          B = t && t[1] || ""
        }
        return "\n" + B + e
      }
      var H = !1;

      function V(e, t) {
        if (!e || H) return "";
        H = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (t = function() {
                throw Error()
              }, Object.defineProperty(t.prototype, "props", {
                set: function() {
                  throw Error()
                }
              }), "object" == typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(t, [])
              } catch (e) {
                var r = e
              }
              Reflect.construct(e, [], t)
            } else {
              try {
                t.call()
              } catch (e) {
                r = e
              }
              e.call(t.prototype)
            }
          else {
            try {
              throw Error()
            } catch (e) {
              r = e
            }
            e()
          }
        } catch (t) {
          if (t && r && "string" == typeof t.stack) {
            for (var i = t.stack.split("\n"), o = r.stack.split("\n"), a = i.length - 1, s = o.length - 1; 1 <= a && 0 <= s && i[a] !== o[s];) s--;
            for (; 1 <= a && 0 <= s; a--, s--)
              if (i[a] !== o[s]) {
                if (1 !== a || 1 !== s)
                  do {
                    if (a--, 0 > --s || i[a] !== o[s]) {
                      var l = "\n" + i[a].replace(" at new ", " at ");
                      return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                    }
                  } while (1 <= a && 0 <= s);
                break
              }
          }
        } finally {
          H = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? F(e) : ""
      }

      function U(e) {
        switch (e.tag) {
          case 5:
            return F(e.type);
          case 16:
            return F("Lazy");
          case 13:
            return F("Suspense");
          case 19:
            return F("SuspenseList");
          case 0:
          case 2:
          case 15:
            return V(e.type, !1);
          case 11:
            return V(e.type.render, !1);
          case 1:
            return V(e.type, !0);
          default:
            return ""
        }
      }

      function z(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case T:
            return "Fragment";
          case S:
            return "Portal";
          case P:
            return "Profiler";
          case k:
            return "StrictMode";
          case A:
            return "Suspense";
          case _:
            return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
          case C:
            return (e.displayName || "Context") + ".Consumer";
          case x:
            return (e._context.displayName || "Context") + ".Provider";
          case L:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
            return null !== (t = e.displayName || null) ? t : z(e.type) || "Memo";
          case N:
            t = e._payload, e = e._init;
            try {
              return z(e(t))
            } catch (e) {}
        }
        return null
      }

      function j(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return z(t);
          case 8:
            return t === k ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" == typeof t) return t.displayName || t.name || null;
            if ("string" == typeof t) return t
        }
        return null
      }

      function G(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;
          default:
            return ""
        }
      }

      function W(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
      }

      function $(e) {
        e._valueTracker || (e._valueTracker = function(e) {
          var t = W(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var i = n.get,
              o = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0,
              get: function() {
                return i.call(this)
              },
              set: function(e) {
                r = "" + e, o.call(this, e)
              }
            }), Object.defineProperty(e, t, {
              enumerable: n.enumerable
            }), {
              getValue: function() {
                return r
              },
              setValue: function(e) {
                r = "" + e
              },
              stopTracking: function() {
                e._valueTracker = null, delete e[t]
              }
            }
          }
        }(e))
      }

      function Z(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
      }

      function X(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body
        } catch (t) {
          return e.body
        }
      }

      function Q(e, t) {
        var n = t.checked;
        return O({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        })
      }

      function K(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        n = G(null != t.value ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
      }

      function Y(e, t) {
        null != (t = t.checked) && b(e, "checked", t, !1)
      }

      function q(e, t) {
        Y(e, t);
        var n = G(t.value),
          r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, G(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
      }

      function J(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
      }

      function ee(e, t, n) {
        "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
      }
      var te = Array.isArray;

      function ne(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
          for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
          for (n = "" + G(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
            null !== t || e[i].disabled || (t = e[i])
          }
          null !== t && (t.selected = !0)
        }
      }

      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return O({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        })
      }

      function ie(e, t) {
        var n = t.value;
        if (null == n) {
          if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(o(92));
            if (te(n)) {
              if (1 < n.length) throw Error(o(93));
              n = n[0]
            }
            t = n
          }
          null == t && (t = ""), n = t
        }
        e._wrapperState = {
          initialValue: G(n)
        }
      }

      function oe(e, t) {
        var n = G(t.value),
          r = G(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
      }

      function ae(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
      }

      function se(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml"
        }
      }

      function le(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
      }
      var ue, ce, fe = (ce = function(e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
        else {
          for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild)
        }
      }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function() {
          return ce(e, t)
        }))
      } : ce);

      function he(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
      }
      var de = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        pe = ["Webkit", "ms", "Moz", "O"];

      function me(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || de.hasOwnProperty(e) && de[e] ? ("" + t).trim() : t + "px"
      }

      function ge(e, t) {
        for (var n in e = e.style, t)
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              i = me(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
          }
      }
      Object.keys(de).forEach((function(e) {
        pe.forEach((function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), de[t] = de[e]
        }))
      }));
      var ve = O({
        menuitem: !0
      }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      });

      function ye(e, t) {
        if (t) {
          if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
          }
          if (null != t.style && "object" != typeof t.style) throw Error(o(62))
        }
      }

      function be(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0
        }
      }
      var Ee = null;

      function we(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
      }
      var Se = null,
        Te = null,
        ke = null;

      function Pe(e) {
        if (e = bi(e)) {
          if ("function" != typeof Se) throw Error(o(280));
          var t = e.stateNode;
          t && (t = wi(t), Se(e.stateNode, e.type, t))
        }
      }

      function xe(e) {
        Te ? ke ? ke.push(e) : ke = [e] : Te = e
      }

      function Ce() {
        if (Te) {
          var e = Te,
            t = ke;
          if (ke = Te = null, Pe(e), t)
            for (e = 0; e < t.length; e++) Pe(t[e])
        }
      }

      function Le(e, t) {
        return e(t)
      }

      function Ae() {}
      var _e = !1;

      function Re(e, t, n) {
        if (_e) return e(t, n);
        _e = !0;
        try {
          return Le(e, t, n)
        } finally {
          _e = !1, (null !== Te || null !== ke) && (Ae(), Ce())
        }
      }

      function Ne(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = wi(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
            break e;
          default:
            e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
        return n
      }
      var Me = !1;
      if (c) try {
        var De = {};
        Object.defineProperty(De, "passive", {
          get: function() {
            Me = !0
          }
        }), window.addEventListener("test", De, De), window.removeEventListener("test", De, De)
      } catch (ce) {
        Me = !1
      }

      function Ie(e, t, n, r, i, o, a, s, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u)
        } catch (e) {
          this.onError(e)
        }
      }
      var Be = !1,
        Oe = null,
        Fe = !1,
        He = null,
        Ve = {
          onError: function(e) {
            Be = !0, Oe = e
          }
        };

      function Ue(e, t, n, r, i, o, a, s, l) {
        Be = !1, Oe = null, Ie.apply(Ve, arguments)
      }

      function ze(e) {
        var t = e,
          n = e;
        if (e.alternate)
          for (; t.return;) t = t.return;
        else {
          e = t;
          do {
            0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
          } while (e)
        }
        return 3 === t.tag ? n : null
      }

      function je(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
        }
        return null
      }

      function Ge(e) {
        if (ze(e) !== e) throw Error(o(188))
      }

      function We(e) {
        return null !== (e = function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = ze(e))) throw Error(o(188));
            return t !== e ? null : e
          }
          for (var n = e, r = t;;) {
            var i = n.return;
            if (null === i) break;
            var a = i.alternate;
            if (null === a) {
              if (null !== (r = i.return)) {
                n = r;
                continue
              }
              break
            }
            if (i.child === a.child) {
              for (a = i.child; a;) {
                if (a === n) return Ge(i), e;
                if (a === r) return Ge(i), t;
                a = a.sibling
              }
              throw Error(o(188))
            }
            if (n.return !== r.return) n = i, r = a;
            else {
              for (var s = !1, l = i.child; l;) {
                if (l === n) {
                  s = !0, n = i, r = a;
                  break
                }
                if (l === r) {
                  s = !0, r = i, n = a;
                  break
                }
                l = l.sibling
              }
              if (!s) {
                for (l = a.child; l;) {
                  if (l === n) {
                    s = !0, n = a, r = i;
                    break
                  }
                  if (l === r) {
                    s = !0, r = a, n = i;
                    break
                  }
                  l = l.sibling
                }
                if (!s) throw Error(o(189))
              }
            }
            if (n.alternate !== r) throw Error(o(190))
          }
          if (3 !== n.tag) throw Error(o(188));
          return n.stateNode.current === n ? e : t
        }(e)) ? $e(e) : null
      }

      function $e(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e;) {
          var t = $e(e);
          if (null !== t) return t;
          e = e.sibling
        }
        return null
      }
      var Ze = i.unstable_scheduleCallback,
        Xe = i.unstable_cancelCallback,
        Qe = i.unstable_shouldYield,
        Ke = i.unstable_requestPaint,
        Ye = i.unstable_now,
        qe = i.unstable_getCurrentPriorityLevel,
        Je = i.unstable_ImmediatePriority,
        et = i.unstable_UserBlockingPriority,
        tt = i.unstable_NormalPriority,
        nt = i.unstable_LowPriority,
        rt = i.unstable_IdlePriority,
        it = null,
        ot = null,
        at = Math.clz32 ? Math.clz32 : function(e) {
          return 0 === (e >>>= 0) ? 32 : 31 - (st(e) / lt | 0) | 0
        },
        st = Math.log,
        lt = Math.LN2,
        ut = 64,
        ct = 4194304;

      function ft(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e
        }
      }

      function ht(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
          i = e.suspendedLanes,
          o = e.pingedLanes,
          a = 268435455 & n;
        if (0 !== a) {
          var s = a & ~i;
          0 !== s ? r = ft(s) : 0 != (o &= a) && (r = ft(o))
        } else 0 != (a = n & ~i) ? r = ft(a) : 0 !== o && (r = ft(o));
        if (0 === r) return 0;
        if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || 16 === i && 0 != (4194240 & o))) return t;
        if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - at(t)), r |= e[n], t &= ~i;
        return r
      }

      function dt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1
        }
      }

      function pt(e) {
        return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
      }

      function mt() {
        var e = ut;
        return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e
      }

      function gt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
      }

      function vt(e, t, n) {
        e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n
      }

      function yt(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
          var r = 31 - at(n),
            i = 1 << r;
          i & t | e[r] & t && (e[r] |= t), n &= ~i
        }
      }
      var bt = 0;

      function Et(e) {
        return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
      }
      var wt, St, Tt, kt, Pt, xt = !1,
        Ct = [],
        Lt = null,
        At = null,
        _t = null,
        Rt = new Map,
        Nt = new Map,
        Mt = [],
        Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

      function It(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Lt = null;
            break;
          case "dragenter":
          case "dragleave":
            At = null;
            break;
          case "mouseover":
          case "mouseout":
            _t = null;
            break;
          case "pointerover":
          case "pointerout":
            Rt.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Nt.delete(t.pointerId)
        }
      }

      function Bt(e, t, n, r, i, o) {
        return null === e || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i]
        }, null !== t && null !== (t = bi(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
      }

      function Ot(e) {
        var t = yi(e.target);
        if (null !== t) {
          var n = ze(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = je(n))) return e.blockedOn = t, void Pt(e.priority, (function() {
                Tt(n)
              }))
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
      }

      function Ft(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = bi(n)) && St(t), e.blockedOn = n, !1;
          var r = new(n = e.nativeEvent).constructor(n.type, n);
          Ee = r, n.target.dispatchEvent(r), Ee = null, t.shift()
        }
        return !0
      }

      function Ht(e, t, n) {
        Ft(e) && n.delete(t)
      }

      function Vt() {
        xt = !1, null !== Lt && Ft(Lt) && (Lt = null), null !== At && Ft(At) && (At = null), null !== _t && Ft(_t) && (_t = null), Rt.forEach(Ht), Nt.forEach(Ht)
      }

      function Ut(e, t) {
        e.blockedOn === t && (e.blockedOn = null, xt || (xt = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Vt)))
      }

      function zt(e) {
        function t(t) {
          return Ut(t, e)
        }
        if (0 < Ct.length) {
          Ut(Ct[0], e);
          for (var n = 1; n < Ct.length; n++) {
            var r = Ct[n];
            r.blockedOn === e && (r.blockedOn = null)
          }
        }
        for (null !== Lt && Ut(Lt, e), null !== At && Ut(At, e), null !== _t && Ut(_t, e), Rt.forEach(t), Nt.forEach(t), n = 0; n < Mt.length; n++)(r = Mt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn;) Ot(n), null === n.blockedOn && Mt.shift()
      }
      var jt = E.ReactCurrentBatchConfig,
        Gt = !0;

      function Wt(e, t, n, r) {
        var i = bt,
          o = jt.transition;
        jt.transition = null;
        try {
          bt = 1, Zt(e, t, n, r)
        } finally {
          bt = i, jt.transition = o
        }
      }

      function $t(e, t, n, r) {
        var i = bt,
          o = jt.transition;
        jt.transition = null;
        try {
          bt = 4, Zt(e, t, n, r)
        } finally {
          bt = i, jt.transition = o
        }
      }

      function Zt(e, t, n, r) {
        if (Gt) {
          var i = Qt(e, t, n, r);
          if (null === i) Gr(e, t, r, Xt, n), It(e, r);
          else if (function(e, t, n, r, i) {
              switch (t) {
                case "focusin":
                  return Lt = Bt(Lt, e, t, n, r, i), !0;
                case "dragenter":
                  return At = Bt(At, e, t, n, r, i), !0;
                case "mouseover":
                  return _t = Bt(_t, e, t, n, r, i), !0;
                case "pointerover":
                  var o = i.pointerId;
                  return Rt.set(o, Bt(Rt.get(o) || null, e, t, n, r, i)), !0;
                case "gotpointercapture":
                  return o = i.pointerId, Nt.set(o, Bt(Nt.get(o) || null, e, t, n, r, i)), !0
              }
              return !1
            }(i, e, t, n, r)) r.stopPropagation();
          else if (It(e, r), 4 & t && -1 < Dt.indexOf(e)) {
            for (; null !== i;) {
              var o = bi(i);
              if (null !== o && wt(o), null === (o = Qt(e, t, n, r)) && Gr(e, t, r, Xt, n), o === i) break;
              i = o
            }
            null !== i && r.stopPropagation()
          } else Gr(e, t, r, null, n)
        }
      }
      var Xt = null;

      function Qt(e, t, n, r) {
        if (Xt = null, null !== (e = yi(e = we(r))))
          if (null === (t = ze(e))) e = null;
          else if (13 === (n = t.tag)) {
          if (null !== (e = je(t))) return e;
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null);
        return Xt = e, null
      }

      function Kt(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (qe()) {
              case Je:
                return 1;
              case et:
                return 4;
              case tt:
              case nt:
                return 16;
              case rt:
                return 536870912;
              default:
                return 16
            }
          default:
            return 16
        }
      }
      var Yt = null,
        qt = null,
        Jt = null;

      function en() {
        if (Jt) return Jt;
        var e, t, n = qt,
          r = n.length,
          i = "value" in Yt ? Yt.value : Yt.textContent,
          o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
        return Jt = i.slice(e, 1 < t ? 1 - t : void 0)
      }

      function tn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }

      function nn() {
        return !0
      }

      function rn() {
        return !1
      }

      function on(e) {
        function t(t, n, r, i, o) {
          for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(i) : i[a]);
          return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
        }
        return O(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
          },
          stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
          },
          persist: function() {},
          isPersistent: nn
        }), t
      }
      var an, sn, ln, un = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        cn = on(un),
        fn = O({}, un, {
          view: 0,
          detail: 0
        }),
        hn = on(fn),
        dn = O({}, fn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Pn,
          button: 0,
          buttons: 0,
          relatedTarget: function(e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
          },
          movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (an = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = an = 0, ln = e), an)
          },
          movementY: function(e) {
            return "movementY" in e ? e.movementY : sn
          }
        }),
        pn = on(dn),
        mn = on(O({}, dn, {
          dataTransfer: 0
        })),
        gn = on(O({}, fn, {
          relatedTarget: 0
        })),
        vn = on(O({}, un, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        })),
        yn = O({}, un, {
          clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
          }
        }),
        bn = on(yn),
        En = on(O({}, un, {
          data: 0
        })),
        wn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
        Sn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        },
        Tn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };

      function kn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Tn[e]) && !!t[e]
      }

      function Pn() {
        return kn
      }
      var xn = O({}, fn, {
          key: function(e) {
            if (e.key) {
              var t = wn[e.key] || e.key;
              if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Pn,
          charCode: function(e) {
            return "keypress" === e.type ? tn(e) : 0
          },
          keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
          },
          which: function(e) {
            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
          }
        }),
        Cn = on(xn),
        Ln = on(O({}, dn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        })),
        An = on(O({}, fn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Pn
        })),
        _n = on(O({}, un, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        })),
        Rn = O({}, dn, {
          deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
          },
          deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
          },
          deltaZ: 0,
          deltaMode: 0
        }),
        Nn = on(Rn),
        Mn = [9, 13, 27, 32],
        Dn = c && "CompositionEvent" in window,
        In = null;
      c && "documentMode" in document && (In = document.documentMode);
      var Bn = c && "TextEvent" in window && !In,
        On = c && (!Dn || In && 8 < In && 11 >= In),
        Fn = String.fromCharCode(32),
        Hn = !1;

      function Vn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Mn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1
        }
      }

      function Un(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
      }
      var zn = !1,
        jn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };

      function Gn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!jn[e.type] : "textarea" === t
      }

      function Wn(e, t, n, r) {
        xe(r), 0 < (t = $r(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }))
      }
      var $n = null,
        Zn = null;

      function Xn(e) {
        Fr(e, 0)
      }

      function Qn(e) {
        if (Z(Ei(e))) return e
      }

      function Kn(e, t) {
        if ("change" === e) return t
      }
      var Yn = !1;
      if (c) {
        var qn;
        if (c) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
          }
          qn = Jn
        } else qn = !1;
        Yn = qn && (!document.documentMode || 9 < document.documentMode)
      }

      function tr() {
        $n && ($n.detachEvent("onpropertychange", nr), Zn = $n = null)
      }

      function nr(e) {
        if ("value" === e.propertyName && Qn(Zn)) {
          var t = [];
          Wn(t, Zn, e, we(e)), Re(Xn, t)
        }
      }

      function rr(e, t, n) {
        "focusin" === e ? (tr(), Zn = n, ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
      }

      function ir(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(Zn)
      }

      function or(e, t) {
        if ("click" === e) return Qn(t)
      }

      function ar(e, t) {
        if ("input" === e || "change" === e) return Qn(t)
      }
      var sr = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
      };

      function lr(e, t) {
        if (sr(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var i = n[r];
          if (!f.call(t, i) || !sr(e[i], t[i])) return !1
        }
        return !0
      }

      function ur(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
      }

      function cr(e, t) {
        var n, r = ur(e);
        for (e = 0; r;) {
          if (3 === r.nodeType) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
              node: r,
              offset: t - e
            };
            e = n
          }
          e: {
            for (; r;) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e
              }
              r = r.parentNode
            }
            r = void 0
          }
          r = ur(r)
        }
      }

      function fr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
      }

      function hr() {
        for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = "string" == typeof t.contentWindow.location.href
          } catch (e) {
            n = !1
          }
          if (!n) break;
          t = X((e = t.contentWindow).document)
        }
        return t
      }

      function dr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
      }

      function pr(e) {
        var t = hr(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
          if (null !== r && dr(n))
            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var i = n.textContent.length,
              o = Math.min(r.start, i);
            r = void 0 === r.end ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = cr(n, o);
            var a = cr(n, r);
            i && a && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
          }
          for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
          for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
      }
      var mr = c && "documentMode" in document && 11 >= document.documentMode,
        gr = null,
        vr = null,
        yr = null,
        br = !1;

      function Er(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br || null == gr || gr !== X(r) || (r = "selectionStart" in (r = gr) && dr(r) ? {
          start: r.selectionStart,
          end: r.selectionEnd
        } : {
          anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }, yr && lr(yr, r) || (yr = r, 0 < (r = $r(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = gr)))
      }

      function wr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
      }
      var Sr = {
          animationend: wr("Animation", "AnimationEnd"),
          animationiteration: wr("Animation", "AnimationIteration"),
          animationstart: wr("Animation", "AnimationStart"),
          transitionend: wr("Transition", "TransitionEnd")
        },
        Tr = {},
        kr = {};

      function Pr(e) {
        if (Tr[e]) return Tr[e];
        if (!Sr[e]) return e;
        var t, n = Sr[e];
        for (t in n)
          if (n.hasOwnProperty(t) && t in kr) return Tr[e] = n[t];
        return e
      }
      c && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
      var xr = Pr("animationend"),
        Cr = Pr("animationiteration"),
        Lr = Pr("animationstart"),
        Ar = Pr("transitionend"),
        _r = new Map,
        Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

      function Nr(e, t) {
        _r.set(e, t), l(t, [e])
      }
      for (var Mr = 0; Mr < Rr.length; Mr++) {
        var Dr = Rr[Mr];
        Nr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)))
      }
      Nr(xr, "onAnimationEnd"), Nr(Cr, "onAnimationIteration"), Nr(Lr, "onAnimationStart"), Nr("dblclick", "onDoubleClick"), Nr("focusin", "onFocus"), Nr("focusout", "onBlur"), Nr(Ar, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Br = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

      function Or(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
          function(e, t, n, r, i, a, s, l, u) {
            if (Ue.apply(this, arguments), Be) {
              if (!Be) throw Error(o(198));
              var c = Oe;
              Be = !1, Oe = null, Fe || (Fe = !0, He = c)
            }
          }(r, t, void 0, e), e.currentTarget = null
      }

      function Fr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t)
              for (var a = r.length - 1; 0 <= a; a--) {
                var s = r[a],
                  l = s.instance,
                  u = s.currentTarget;
                if (s = s.listener, l !== o && i.isPropagationStopped()) break e;
                Or(i, s, u), o = l
              } else
                for (a = 0; a < r.length; a++) {
                  if (l = (s = r[a]).instance, u = s.currentTarget, s = s.listener, l !== o && i.isPropagationStopped()) break e;
                  Or(i, s, u), o = l
                }
          }
        }
        if (Fe) throw e = He, Fe = !1, He = null, e
      }

      function Hr(e, t) {
        var n = t[mi];
        void 0 === n && (n = t[mi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (jr(t, e, 2, !1), n.add(r))
      }

      function Vr(e, t, n) {
        var r = 0;
        t && (r |= 4), jr(n, e, r, t)
      }
      var Ur = "_reactListening" + Math.random().toString(36).slice(2);

      function zr(e) {
        if (!e[Ur]) {
          e[Ur] = !0, a.forEach((function(t) {
            "selectionchange" !== t && (Br.has(t) || Vr(t, !1, e), Vr(t, !0, e))
          }));
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Ur] || (t[Ur] = !0, Vr("selectionchange", !1, t))
        }
      }

      function jr(e, t, n, r) {
        switch (Kt(t)) {
          case 1:
            var i = Wt;
            break;
          case 4:
            i = $t;
            break;
          default:
            i = Zt
        }
        n = i.bind(null, t, n, e), i = void 0, !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, {
          capture: !0,
          passive: i
        }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
          passive: i
        }) : e.addEventListener(t, n, !1)
      }

      function Gr(e, t, n, r, i) {
        var o = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
          if (null === r) return;
          var a = r.tag;
          if (3 === a || 4 === a) {
            var s = r.stateNode.containerInfo;
            if (s === i || 8 === s.nodeType && s.parentNode === i) break;
            if (4 === a)
              for (a = r.return; null !== a;) {
                var l = a.tag;
                if ((3 === l || 4 === l) && ((l = a.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
                a = a.return
              }
            for (; null !== s;) {
              if (null === (a = yi(s))) return;
              if (5 === (l = a.tag) || 6 === l) {
                r = o = a;
                continue e
              }
              s = s.parentNode
            }
          }
          r = r.return
        }
        Re((function() {
          var r = o,
            i = we(n),
            a = [];
          e: {
            var s = _r.get(e);
            if (void 0 !== s) {
              var l = cn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === tn(n)) break e;
                case "keydown":
                case "keyup":
                  l = Cn;
                  break;
                case "focusin":
                  u = "focus", l = gn;
                  break;
                case "focusout":
                  u = "blur", l = gn;
                  break;
                case "beforeblur":
                case "afterblur":
                  l = gn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  l = pn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  l = mn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  l = An;
                  break;
                case xr:
                case Cr:
                case Lr:
                  l = vn;
                  break;
                case Ar:
                  l = _n;
                  break;
                case "scroll":
                  l = hn;
                  break;
                case "wheel":
                  l = Nn;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  l = bn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  l = Ln
              }
              var c = 0 != (4 & t),
                f = !c && "scroll" === e,
                h = c ? null !== s ? s + "Capture" : null : s;
              c = [];
              for (var d, p = r; null !== p;) {
                var m = (d = p).stateNode;
                if (5 === d.tag && null !== m && (d = m, null !== h && null != (m = Ne(p, h)) && c.push(Wr(p, m, d))), f) break;
                p = p.return
              }
              0 < c.length && (s = new l(s, u, null, n, i), a.push({
                event: s,
                listeners: c
              }))
            }
          }
          if (0 == (7 & t)) {
            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === Ee || !(u = n.relatedTarget || n.fromElement) || !yi(u) && !u[pi]) && (l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? yi(u) : null) && (u !== (f = ze(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
              if (c = pn, m = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Ln, m = "onPointerLeave", h = "onPointerEnter", p = "pointer"), f = null == l ? s : Ei(l), d = null == u ? s : Ei(u), (s = new c(m, p + "leave", l, n, i)).target = f, s.relatedTarget = d, m = null, yi(i) === r && ((c = new c(h, p + "enter", u, n, i)).target = d, c.relatedTarget = f, m = c), f = m, l && u) e: {
                for (h = u, p = 0, d = c = l; d; d = Zr(d)) p++;
                for (d = 0, m = h; m; m = Zr(m)) d++;
                for (; 0 < p - d;) c = Zr(c),
                p--;
                for (; 0 < d - p;) h = Zr(h),
                d--;
                for (; p--;) {
                  if (c === h || null !== h && c === h.alternate) break e;
                  c = Zr(c), h = Zr(h)
                }
                c = null
              }
              else c = null;
              null !== l && Xr(a, s, l, c, !1), null !== u && null !== f && Xr(a, f, u, c, !0)
            }
            if ("select" === (l = (s = r ? Ei(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = Kn;
            else if (Gn(s))
              if (Yn) g = ar;
              else {
                g = ir;
                var v = rr
              }
            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = or);
            switch (g && (g = g(e, r)) ? Wn(a, g, n, i) : (v && v(e, s, r), "focusout" === e && (v = s._wrapperState) && v.controlled && "number" === s.type && ee(s, "number", s.value)), v = r ? Ei(r) : window, e) {
              case "focusin":
                (Gn(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
                break;
              case "focusout":
                yr = vr = gr = null;
                break;
              case "mousedown":
                br = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                br = !1, Er(a, n, i);
                break;
              case "selectionchange":
                if (mr) break;
              case "keydown":
              case "keyup":
                Er(a, n, i)
            }
            var y;
            if (Dn) e: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break e;
                case "compositionend":
                  b = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break e
              }
              b = void 0
            }
            else zn ? Vn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (On && "ko" !== n.locale && (zn || "onCompositionStart" !== b ? "onCompositionEnd" === b && zn && (y = en()) : (qt = "value" in (Yt = i) ? Yt.value : Yt.textContent, zn = !0)), 0 < (v = $r(r, b)).length && (b = new En(b, e, null, n, i), a.push({
              event: b,
              listeners: v
            }), (y || null !== (y = Un(n))) && (b.data = y))), (y = Bn ? function(e, t) {
              switch (e) {
                case "compositionend":
                  return Un(t);
                case "keypress":
                  return 32 !== t.which ? null : (Hn = !0, Fn);
                case "textInput":
                  return (e = t.data) === Fn && Hn ? null : e;
                default:
                  return null
              }
            }(e, n) : function(e, t) {
              if (zn) return "compositionend" === e || !Dn && Vn(e, t) ? (e = en(), Jt = qt = Yt = null, zn = !1, e) : null;
              switch (e) {
                case "paste":
                default:
                  return null;
                case "keypress":
                  if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                  }
                  return null;
                case "compositionend":
                  return On && "ko" !== t.locale ? null : t.data
              }
            }(e, n)) && 0 < (r = $r(r, "onBeforeInput")).length && (i = new En("onBeforeInput", "beforeinput", null, n, i), a.push({
              event: i,
              listeners: r
            }), i.data = y)
          }
          Fr(a, t)
        }))
      }

      function Wr(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        }
      }

      function $r(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
          var i = e,
            o = i.stateNode;
          5 === i.tag && null !== o && (i = o, null != (o = Ne(e, n)) && r.unshift(Wr(e, o, i)), null != (o = Ne(e, t)) && r.push(Wr(e, o, i))), e = e.return
        }
        return r
      }

      function Zr(e) {
        if (null === e) return null;
        do {
          e = e.return
        } while (e && 5 !== e.tag);
        return e || null
      }

      function Xr(e, t, n, r, i) {
        for (var o = t._reactName, a = []; null !== n && n !== r;) {
          var s = n,
            l = s.alternate,
            u = s.stateNode;
          if (null !== l && l === r) break;
          5 === s.tag && null !== u && (s = u, i ? null != (l = Ne(n, o)) && a.unshift(Wr(n, l, s)) : i || null != (l = Ne(n, o)) && a.push(Wr(n, l, s))), n = n.return
        }
        0 !== a.length && e.push({
          event: t,
          listeners: a
        })
      }
      var Qr = /\r\n?/g,
        Kr = /\u0000|\uFFFD/g;

      function Yr(e) {
        return ("string" == typeof e ? e : "" + e).replace(Qr, "\n").replace(Kr, "")
      }

      function qr(e, t, n) {
        if (t = Yr(t), Yr(e) !== t && n) throw Error(o(425))
      }

      function Jr() {}
      var ei = null,
        ti = null;

      function ni(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
      }
      var ri = "function" == typeof setTimeout ? setTimeout : void 0,
        ii = "function" == typeof clearTimeout ? clearTimeout : void 0,
        oi = "function" == typeof Promise ? Promise : void 0,
        ai = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== oi ? function(e) {
          return oi.resolve(null).then(e).catch(si)
        } : ri;

      function si(e) {
        setTimeout((function() {
          throw e
        }))
      }

      function li(e, t) {
        var n = t,
          r = 0;
        do {
          var i = n.nextSibling;
          if (e.removeChild(n), i && 8 === i.nodeType)
            if ("/$" === (n = i.data)) {
              if (0 === r) return e.removeChild(i), void zt(t);
              r--
            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
          n = i
        } while (n);
        zt(t)
      }

      function ui(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null
          }
        }
        return e
      }

      function ci(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--
            } else "/$" === n && t++
          }
          e = e.previousSibling
        }
        return null
      }
      var fi = Math.random().toString(36).slice(2),
        hi = "__reactFiber$" + fi,
        di = "__reactProps$" + fi,
        pi = "__reactContainer$" + fi,
        mi = "__reactEvents$" + fi,
        gi = "__reactListeners$" + fi,
        vi = "__reactHandles$" + fi;

      function yi(e) {
        var t = e[hi];
        if (t) return t;
        for (var n = e.parentNode; n;) {
          if (t = n[pi] || n[hi]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
              for (e = ci(e); null !== e;) {
                if (n = e[hi]) return n;
                e = ci(e)
              }
            return t
          }
          n = (e = n).parentNode
        }
        return null
      }

      function bi(e) {
        return !(e = e[hi] || e[pi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
      }

      function Ei(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33))
      }

      function wi(e) {
        return e[di] || null
      }
      var Si = [],
        Ti = -1;

      function ki(e) {
        return {
          current: e
        }
      }

      function Pi(e) {
        0 > Ti || (e.current = Si[Ti], Si[Ti] = null, Ti--)
      }

      function xi(e, t) {
        Ti++, Si[Ti] = e.current, e.current = t
      }
      var Ci = {},
        Li = ki(Ci),
        Ai = ki(!1),
        _i = Ci;

      function Ri(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ci;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n) o[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
      }

      function Ni(e) {
        return null != e.childContextTypes
      }

      function Mi() {
        Pi(Ai), Pi(Li)
      }

      function Di(e, t, n) {
        if (Li.current !== Ci) throw Error(o(168));
        xi(Li, t), xi(Ai, n)
      }

      function Ii(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var i in r = r.getChildContext())
          if (!(i in t)) throw Error(o(108, j(e) || "Unknown", i));
        return O({}, n, r)
      }

      function Bi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ci, _i = Li.current, xi(Li, e), xi(Ai, Ai.current), !0
      }

      function Oi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? (e = Ii(e, t, _i), r.__reactInternalMemoizedMergedChildContext = e, Pi(Ai), Pi(Li), xi(Li, e)) : Pi(Ai), xi(Ai, n)
      }
      var Fi = null,
        Hi = !1,
        Vi = !1;

      function Ui(e) {
        null === Fi ? Fi = [e] : Fi.push(e)
      }

      function zi() {
        if (!Vi && null !== Fi) {
          Vi = !0;
          var e = 0,
            t = bt;
          try {
            var n = Fi;
            for (bt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0)
              } while (null !== r)
            }
            Fi = null, Hi = !1
          } catch (t) {
            throw null !== Fi && (Fi = Fi.slice(e + 1)), Ze(Je, zi), t
          } finally {
            bt = t, Vi = !1
          }
        }
        return null
      }
      var ji = [],
        Gi = 0,
        Wi = null,
        $i = 0,
        Zi = [],
        Xi = 0,
        Qi = null,
        Ki = 1,
        Yi = "";

      function qi(e, t) {
        ji[Gi++] = $i, ji[Gi++] = Wi, Wi = e, $i = t
      }

      function Ji(e, t, n) {
        Zi[Xi++] = Ki, Zi[Xi++] = Yi, Zi[Xi++] = Qi, Qi = e;
        var r = Ki;
        e = Yi;
        var i = 32 - at(r) - 1;
        r &= ~(1 << i), n += 1;
        var o = 32 - at(t) + i;
        if (30 < o) {
          var a = i - i % 5;
          o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, Ki = 1 << 32 - at(t) + i | n << i | r, Yi = o + e
        } else Ki = 1 << o | n << i | r, Yi = e
      }

      function eo(e) {
        null !== e.return && (qi(e, 1), Ji(e, 1, 0))
      }

      function to(e) {
        for (; e === Wi;) Wi = ji[--Gi], ji[Gi] = null, $i = ji[--Gi], ji[Gi] = null;
        for (; e === Qi;) Qi = Zi[--Xi], Zi[Xi] = null, Yi = Zi[--Xi], Zi[Xi] = null, Ki = Zi[--Xi], Zi[Xi] = null
      }
      var no = null,
        ro = null,
        io = !1,
        oo = null;

      function ao(e, t) {
        var n = Nu(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
      }

      function so(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = ui(t.firstChild), !0);
          case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
          case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Qi ? {
              id: Ki,
              overflow: Yi
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, (n = Nu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
          default:
            return !1
        }
      }

      function lo(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags)
      }

      function uo(e) {
        if (io) {
          var t = ro;
          if (t) {
            var n = t;
            if (!so(e, t)) {
              if (lo(e)) throw Error(o(418));
              t = ui(n.nextSibling);
              var r = no;
              t && so(e, t) ? ao(r, n) : (e.flags = -4097 & e.flags | 2, io = !1, no = e)
            }
          } else {
            if (lo(e)) throw Error(o(418));
            e.flags = -4097 & e.flags | 2, io = !1, no = e
          }
        }
      }

      function co(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        no = e
      }

      function fo(e) {
        if (e !== no) return !1;
        if (!io) return co(e), io = !0, !1;
        var t;
        if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ni(e.type, e.memoizedProps)), t && (t = ro)) {
          if (lo(e)) throw ho(), Error(o(418));
          for (; t;) ao(e, t), t = ui(t.nextSibling)
        }
        if (co(e), 13 === e.tag) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    ro = ui(e.nextSibling);
                    break e
                  }
                  t--
                } else "$" !== n && "$!" !== n && "$?" !== n || t++
              }
              e = e.nextSibling
            }
            ro = null
          }
        } else ro = no ? ui(e.stateNode.nextSibling) : null;
        return !0
      }

      function ho() {
        for (var e = ro; e;) e = ui(e.nextSibling)
      }

      function po() {
        ro = no = null, io = !1
      }

      function mo(e) {
        null === oo ? oo = [e] : oo.push(e)
      }
      var go = E.ReactCurrentBatchConfig;

      function vo(e, t) {
        if (e && e.defaultProps) {
          for (var n in t = O({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
          return t
        }
        return t
      }
      var yo = ki(null),
        bo = null,
        Eo = null,
        wo = null;

      function So() {
        wo = Eo = bo = null
      }

      function To(e) {
        var t = yo.current;
        Pi(yo), e._currentValue = t
      }

      function ko(e, t, n) {
        for (; null !== e;) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return
        }
      }

      function Po(e, t) {
        bo = e, wo = Eo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Es = !0), e.firstContext = null)
      }

      function xo(e) {
        var t = e._currentValue;
        if (wo !== e)
          if (e = {
              context: e,
              memoizedValue: t,
              next: null
            }, null === Eo) {
            if (null === bo) throw Error(o(308));
            Eo = e, bo.dependencies = {
              lanes: 0,
              firstContext: e
            }
          } else Eo = Eo.next = e;
        return t
      }
      var Co = null;

      function Lo(e) {
        null === Co ? Co = [e] : Co.push(e)
      }

      function Ao(e, t, n, r) {
        var i = t.interleaved;
        return null === i ? (n.next = n, Lo(t)) : (n.next = i.next, i.next = n), t.interleaved = n, _o(e, r)
      }

      function _o(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
        return 3 === n.tag ? n.stateNode : null
      }
      var Ro = !1;

      function No(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        }
      }

      function Mo(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        })
      }

      function Do(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        }
      }

      function Io(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 0 != (2 & Al)) {
          var i = r.pending;
          return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, _o(e, n)
        }
        return null === (i = r.interleaved) ? (t.next = t, Lo(r)) : (t.next = i.next, i.next = t), r.interleaved = t, _o(e, n)
      }

      function Bo(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
        }
      }

      function Oo(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var i = null,
            o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var a = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              null === o ? i = o = a : o = o.next = a, n = n.next
            } while (null !== n);
            null === o ? i = o = t : o = o.next = t
          } else i = o = t;
          return n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
          }, void(e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
      }

      function Fo(e, t, n, r) {
        var i = e.updateQueue;
        Ro = !1;
        var o = i.firstBaseUpdate,
          a = i.lastBaseUpdate,
          s = i.shared.pending;
        if (null !== s) {
          i.shared.pending = null;
          var l = s,
            u = l.next;
          l.next = null, null === a ? o = u : a.next = u, a = l;
          var c = e.alternate;
          null !== c && (s = (c = c.updateQueue).lastBaseUpdate) !== a && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l)
        }
        if (null !== o) {
          var f = i.baseState;
          for (a = 0, c = u = l = null, s = o;;) {
            var h = s.lane,
              d = s.eventTime;
            if ((r & h) === h) {
              null !== c && (c = c.next = {
                eventTime: d,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
              });
              e: {
                var p = e,
                  m = s;
                switch (h = t, d = n, m.tag) {
                  case 1:
                    if ("function" == typeof(p = m.payload)) {
                      f = p.call(d, f, h);
                      break e
                    }
                    f = p;
                    break e;
                  case 3:
                    p.flags = -65537 & p.flags | 128;
                  case 0:
                    if (null == (h = "function" == typeof(p = m.payload) ? p.call(d, f, h) : p)) break e;
                    f = O({}, f, h);
                    break e;
                  case 2:
                    Ro = !0
                }
              }
              null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (h = i.effects) ? i.effects = [s] : h.push(s))
            } else d = {
              eventTime: d,
              lane: h,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            }, null === c ? (u = c = d, l = f) : c = c.next = d, a |= h;
            if (null === (s = s.next)) {
              if (null === (s = i.shared.pending)) break;
              s = (h = s).next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
          }
          if (null === c && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null !== (t = i.shared.interleaved)) {
            i = t;
            do {
              a |= i.lane, i = i.next
            } while (i !== t)
          } else null === o && (i.shared.lanes = 0);
          Ol |= a, e.lanes = a, e.memoizedState = f
        }
      }

      function Ho(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e)
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              i = r.callback;
            if (null !== i) {
              if (r.callback = null, r = n, "function" != typeof i) throw Error(o(191, i));
              i.call(r)
            }
          }
      }
      var Vo = (new r.Component).refs;

      function Uo(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : O({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
      }
      var zo = {
        isMounted: function(e) {
          return !!(e = e._reactInternals) && ze(e) === e
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = tu(),
            i = nu(e),
            o = Do(r, i);
          o.payload = t, null != n && (o.callback = n), null !== (t = Io(e, o, i)) && (ru(t, e, i, r), Bo(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = tu(),
            i = nu(e),
            o = Do(r, i);
          o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = Io(e, o, i)) && (ru(t, e, i, r), Bo(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = tu(),
            r = nu(e),
            i = Do(n, r);
          i.tag = 2, null != t && (i.callback = t), null !== (t = Io(e, i, r)) && (ru(t, e, r, n), Bo(t, e, r))
        }
      };

      function jo(e, t, n, r, i, o, a) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !(t.prototype && t.prototype.isPureReactComponent && lr(n, r) && lr(i, o))
      }

      function Go(e, t, n) {
        var r = !1,
          i = Ci,
          o = t.contextType;
        return "object" == typeof o && null !== o ? o = xo(o) : (i = Ni(t) ? _i : Li.current, o = (r = null != (r = t.contextTypes)) ? Ri(e, i) : Ci), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = zo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
      }

      function Wo(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zo.enqueueReplaceState(t, t.state, null)
      }

      function $o(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = Vo, No(e);
        var o = t.contextType;
        "object" == typeof o && null !== o ? i.context = xo(o) : (o = Ni(t) ? _i : Li.current, i.context = Ri(e, o)), i.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (Uo(e, t, o, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && zo.enqueueReplaceState(i, i.state, null), Fo(e, n, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.flags |= 4194308)
      }

      function Zo(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
          if (n._owner) {
            if (n = n._owner) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode
            }
            if (!r) throw Error(o(147, e));
            var i = r,
              a = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
              var t = i.refs;
              t === Vo && (t = i.refs = {}), null === e ? delete t[a] : t[a] = e
            }, t._stringRef = a, t)
          }
          if ("string" != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e))
        }
        return e
      }

      function Xo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
      }

      function Qo(e) {
        return (0, e._init)(e._payload)
      }

      function Ko(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
          }
        }

        function n(n, r) {
          if (!e) return null;
          for (; null !== r;) t(n, r), r = r.sibling;
          return null
        }

        function r(e, t) {
          for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
          return e
        }

        function i(e, t) {
          return (e = Du(e, t)).index = 0, e.sibling = null, e
        }

        function a(t, n, r) {
          return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
        }

        function s(t) {
          return e && null === t.alternate && (t.flags |= 2), t
        }

        function l(e, t, n, r) {
          return null === t || 6 !== t.tag ? ((t = Fu(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
          var o = n.type;
          return o === T ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === N && Qo(o) === t.type) ? ((r = i(t, n.props)).ref = Zo(e, t, n), r.return = e, r) : ((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = Zo(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Hu(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag ? ((t = Bu(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function h(e, t, n) {
          if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Fu("" + t, e.mode, n)).return = e, t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case w:
                return (n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = Zo(e, null, t), n.return = e, n;
              case S:
                return (t = Hu(t, e.mode, n)).return = e, t;
              case N:
                return h(e, (0, t._init)(t._payload), n)
            }
            if (te(t) || I(t)) return (t = Bu(t, e.mode, n, null)).return = e, t;
            Xo(e, t)
          }
          return null
        }

        function d(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case w:
                return n.key === i ? u(e, t, n, r) : null;
              case S:
                return n.key === i ? c(e, t, n, r) : null;
              case N:
                return d(e, t, (i = n._init)(n._payload), r)
            }
            if (te(n) || I(n)) return null !== i ? null : f(e, t, n, r, null);
            Xo(e, n)
          }
          return null
        }

        function p(e, t, n, r, i) {
          if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case w:
                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
              case S:
                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
              case N:
                return p(e, t, n, (0, r._init)(r._payload), i)
            }
            if (te(r) || I(r)) return f(t, e = e.get(n) || null, r, i, null);
            Xo(t, r)
          }
          return null
        }

        function m(i, o, s, l) {
          for (var u = null, c = null, f = o, m = o = 0, g = null; null !== f && m < s.length; m++) {
            f.index > m ? (g = f, f = null) : g = f.sibling;
            var v = d(i, f, s[m], l);
            if (null === v) {
              null === f && (f = g);
              break
            }
            e && f && null === v.alternate && t(i, f), o = a(v, o, m), null === c ? u = v : c.sibling = v, c = v, f = g
          }
          if (m === s.length) return n(i, f), io && qi(i, m), u;
          if (null === f) {
            for (; m < s.length; m++) null !== (f = h(i, s[m], l)) && (o = a(f, o, m), null === c ? u = f : c.sibling = f, c = f);
            return io && qi(i, m), u
          }
          for (f = r(i, f); m < s.length; m++) null !== (g = p(f, i, m, s[m], l)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), o = a(g, o, m), null === c ? u = g : c.sibling = g, c = g);
          return e && f.forEach((function(e) {
            return t(i, e)
          })), io && qi(i, m), u
        }

        function g(i, s, l, u) {
          var c = I(l);
          if ("function" != typeof c) throw Error(o(150));
          if (null == (l = c.call(l))) throw Error(o(151));
          for (var f = c = null, m = s, g = s = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
            m.index > g ? (v = m, m = null) : v = m.sibling;
            var b = d(i, m, y.value, u);
            if (null === b) {
              null === m && (m = v);
              break
            }
            e && m && null === b.alternate && t(i, m), s = a(b, s, g), null === f ? c = b : f.sibling = b, f = b, m = v
          }
          if (y.done) return n(i, m), io && qi(i, g), c;
          if (null === m) {
            for (; !y.done; g++, y = l.next()) null !== (y = h(i, y.value, u)) && (s = a(y, s, g), null === f ? c = y : f.sibling = y, f = y);
            return io && qi(i, g), c
          }
          for (m = r(i, m); !y.done; g++, y = l.next()) null !== (y = p(m, i, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = a(y, s, g), null === f ? c = y : f.sibling = y, f = y);
          return e && m.forEach((function(e) {
            return t(i, e)
          })), io && qi(i, g), c
        }
        return function e(r, o, a, l) {
          if ("object" == typeof a && null !== a && a.type === T && null === a.key && (a = a.props.children), "object" == typeof a && null !== a) {
            switch (a.$$typeof) {
              case w:
                e: {
                  for (var u = a.key, c = o; null !== c;) {
                    if (c.key === u) {
                      if ((u = a.type) === T) {
                        if (7 === c.tag) {
                          n(r, c.sibling), (o = i(c, a.props.children)).return = r, r = o;
                          break e
                        }
                      } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === N && Qo(u) === c.type) {
                        n(r, c.sibling), (o = i(c, a.props)).ref = Zo(r, c, a), o.return = r, r = o;
                        break e
                      }
                      n(r, c);
                      break
                    }
                    t(r, c), c = c.sibling
                  }
                  a.type === T ? ((o = Bu(a.props.children, r.mode, l, a.key)).return = r, r = o) : ((l = Iu(a.type, a.key, a.props, null, r.mode, l)).ref = Zo(r, o, a), l.return = r, r = l)
                }
                return s(r);
              case S:
                e: {
                  for (c = a.key; null !== o;) {
                    if (o.key === c) {
                      if (4 === o.tag && o.stateNode.containerInfo === a.containerInfo && o.stateNode.implementation === a.implementation) {
                        n(r, o.sibling), (o = i(o, a.children || [])).return = r, r = o;
                        break e
                      }
                      n(r, o);
                      break
                    }
                    t(r, o), o = o.sibling
                  }(o = Hu(a, r.mode, l)).return = r,
                  r = o
                }
                return s(r);
              case N:
                return e(r, o, (c = a._init)(a._payload), l)
            }
            if (te(a)) return m(r, o, a, l);
            if (I(a)) return g(r, o, a, l);
            Xo(r, a)
          }
          return "string" == typeof a && "" !== a || "number" == typeof a ? (a = "" + a, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = i(o, a)).return = r, r = o) : (n(r, o), (o = Fu(a, r.mode, l)).return = r, r = o), s(r)) : n(r, o)
        }
      }
      var Yo = Ko(!0),
        qo = Ko(!1),
        Jo = {},
        ea = ki(Jo),
        ta = ki(Jo),
        na = ki(Jo);

      function ra(e) {
        if (e === Jo) throw Error(o(174));
        return e
      }

      function ia(e, t) {
        switch (xi(na, t), xi(ta, e), xi(ea, Jo), e = t.nodeType) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
            break;
          default:
            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        Pi(ea), xi(ea, t)
      }

      function oa() {
        Pi(ea), Pi(ta), Pi(na)
      }

      function aa(e) {
        ra(na.current);
        var t = ra(ea.current),
          n = le(t, e.type);
        t !== n && (xi(ta, e), xi(ea, n))
      }

      function sa(e) {
        ta.current === e && (Pi(ea), Pi(ta))
      }
      var la = ki(0);

      function ua(e) {
        for (var t = e; null !== t;) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t
          } else if (null !== t.child) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === e) break;
          for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return
          }
          t.sibling.return = t.return, t = t.sibling
        }
        return null
      }
      var ca = [];

      function fa() {
        for (var e = 0; e < ca.length; e++) ca[e]._workInProgressVersionPrimary = null;
        ca.length = 0
      }
      var ha = E.ReactCurrentDispatcher,
        da = E.ReactCurrentBatchConfig,
        pa = 0,
        ma = null,
        ga = null,
        va = null,
        ya = !1,
        ba = !1,
        Ea = 0,
        wa = 0;

      function Sa() {
        throw Error(o(321))
      }

      function Ta(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!sr(e[n], t[n])) return !1;
        return !0
      }

      function ka(e, t, n, r, i, a) {
        if (pa = a, ma = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ha.current = null === e || null === e.memoizedState ? ss : ls, e = n(r, i), ba) {
          a = 0;
          do {
            if (ba = !1, Ea = 0, 25 <= a) throw Error(o(301));
            a += 1, va = ga = null, t.updateQueue = null, ha.current = us, e = n(r, i)
          } while (ba)
        }
        if (ha.current = as, t = null !== ga && null !== ga.next, pa = 0, va = ga = ma = null, ya = !1, t) throw Error(o(300));
        return e
      }

      function Pa() {
        var e = 0 !== Ea;
        return Ea = 0, e
      }

      function xa() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return null === va ? ma.memoizedState = va = e : va = va.next = e, va
      }

      function Ca() {
        if (null === ga) {
          var e = ma.alternate;
          e = null !== e ? e.memoizedState : null
        } else e = ga.next;
        var t = null === va ? ma.memoizedState : va.next;
        if (null !== t) va = t, ga = e;
        else {
          if (null === e) throw Error(o(310));
          e = {
            memoizedState: (ga = e).memoizedState,
            baseState: ga.baseState,
            baseQueue: ga.baseQueue,
            queue: ga.queue,
            next: null
          }, null === va ? ma.memoizedState = va = e : va = va.next = e
        }
        return va
      }

      function La(e, t) {
        return "function" == typeof t ? t(e) : t
      }

      function Aa(e) {
        var t = Ca(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = ga,
          i = r.baseQueue,
          a = n.pending;
        if (null !== a) {
          if (null !== i) {
            var s = i.next;
            i.next = a.next, a.next = s
          }
          r.baseQueue = i = a, n.pending = null
        }
        if (null !== i) {
          a = i.next, r = r.baseState;
          var l = s = null,
            u = null,
            c = a;
          do {
            var f = c.lane;
            if ((pa & f) === f) null !== u && (u = u.next = {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
              var h = {
                lane: f,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
              };
              null === u ? (l = u = h, s = r) : u = u.next = h, ma.lanes |= f, Ol |= f
            }
            c = c.next
          } while (null !== c && c !== a);
          null === u ? s = r : u.next = l, sr(r, t.memoizedState) || (Es = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
        }
        if (null !== (e = n.interleaved)) {
          i = e;
          do {
            a = i.lane, ma.lanes |= a, Ol |= a, i = i.next
          } while (i !== e)
        } else null === i && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
      }

      function _a(e) {
        var t = Ca(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          i = n.pending,
          a = t.memoizedState;
        if (null !== i) {
          n.pending = null;
          var s = i = i.next;
          do {
            a = e(a, s.action), s = s.next
          } while (s !== i);
          sr(a, t.memoizedState) || (Es = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
        }
        return [a, r]
      }

      function Ra() {}

      function Na(e, t) {
        var n = ma,
          r = Ca(),
          i = t(),
          a = !sr(r.memoizedState, i);
        if (a && (r.memoizedState = i, Es = !0), r = r.queue, Ga(Ia.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== va && 1 & va.memoizedState.tag) {
          if (n.flags |= 2048, Ha(9, Da.bind(null, n, r, i, t), void 0, null), null === _l) throw Error(o(349));
          0 != (30 & pa) || Ma(n, t, i)
        }
        return i
      }

      function Ma(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, null === (t = ma.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, ma.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
      }

      function Da(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Ba(t) && Oa(e)
      }

      function Ia(e, t, n) {
        return n((function() {
          Ba(t) && Oa(e)
        }))
      }

      function Ba(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !sr(e, n)
        } catch (e) {
          return !0
        }
      }

      function Oa(e) {
        var t = _o(e, 1);
        null !== t && ru(t, e, 1, -1)
      }

      function Fa(e) {
        var t = xa();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: La,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ns.bind(null, ma, e), [t.memoizedState, e]
      }

      function Ha(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, null === (t = ma.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, ma.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
      }

      function Va() {
        return Ca().memoizedState
      }

      function Ua(e, t, n, r) {
        var i = xa();
        ma.flags |= e, i.memoizedState = Ha(1 | t, n, void 0, void 0 === r ? null : r)
      }

      function za(e, t, n, r) {
        var i = Ca();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ga) {
          var a = ga.memoizedState;
          if (o = a.destroy, null !== r && Ta(r, a.deps)) return void(i.memoizedState = Ha(t, n, o, r))
        }
        ma.flags |= e, i.memoizedState = Ha(1 | t, n, o, r)
      }

      function ja(e, t) {
        return Ua(8390656, 8, e, t)
      }

      function Ga(e, t) {
        return za(2048, 8, e, t)
      }

      function Wa(e, t) {
        return za(4, 2, e, t)
      }

      function $a(e, t) {
        return za(4, 4, e, t)
      }

      function Za(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
          t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
          t.current = null
        }) : void 0
      }

      function Xa(e, t, n) {
        return n = null != n ? n.concat([e]) : null, za(4, 4, Za.bind(null, t, e), n)
      }

      function Qa() {}

      function Ka(e, t) {
        var n = Ca();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
      }

      function Ya(e, t) {
        var n = Ca();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      }

      function qa(e, t, n) {
        return 0 == (21 & pa) ? (e.baseState && (e.baseState = !1, Es = !0), e.memoizedState = n) : (sr(n, t) || (n = mt(), ma.lanes |= n, Ol |= n, e.baseState = !0), t)
      }

      function Ja(e, t) {
        var n = bt;
        bt = 0 !== n && 4 > n ? n : 4, e(!0);
        var r = da.transition;
        da.transition = {};
        try {
          e(!1), t()
        } finally {
          bt = n, da.transition = r
        }
      }

      function es() {
        return Ca().memoizedState
      }

      function ts(e, t, n) {
        var r = nu(e);
        n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, rs(e) ? is(t, n) : null !== (n = Ao(e, t, n, r)) && (ru(n, e, r, tu()), os(n, t, r))
      }

      function ns(e, t, n) {
        var r = nu(e),
          i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
          };
        if (rs(e)) is(t, i);
        else {
          var o = e.alternate;
          if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
            var a = t.lastRenderedState,
              s = o(a, n);
            if (i.hasEagerState = !0, i.eagerState = s, sr(s, a)) {
              var l = t.interleaved;
              return null === l ? (i.next = i, Lo(t)) : (i.next = l.next, l.next = i), void(t.interleaved = i)
            }
          } catch (e) {}
          null !== (n = Ao(e, t, i, r)) && (ru(n, e, r, i = tu()), os(n, t, r))
        }
      }

      function rs(e) {
        var t = e.alternate;
        return e === ma || null !== t && t === ma
      }

      function is(e, t) {
        ba = ya = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
      }

      function os(e, t, n) {
        if (0 != (4194240 & n)) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
        }
      }
      var as = {
          readContext: xo,
          useCallback: Sa,
          useContext: Sa,
          useEffect: Sa,
          useImperativeHandle: Sa,
          useInsertionEffect: Sa,
          useLayoutEffect: Sa,
          useMemo: Sa,
          useReducer: Sa,
          useRef: Sa,
          useState: Sa,
          useDebugValue: Sa,
          useDeferredValue: Sa,
          useTransition: Sa,
          useMutableSource: Sa,
          useSyncExternalStore: Sa,
          useId: Sa,
          unstable_isNewReconciler: !1
        },
        ss = {
          readContext: xo,
          useCallback: function(e, t) {
            return xa().memoizedState = [e, void 0 === t ? null : t], e
          },
          useContext: xo,
          useEffect: ja,
          useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null, Ua(4194308, 4, Za.bind(null, t, e), n)
          },
          useLayoutEffect: function(e, t) {
            return Ua(4194308, 4, e, t)
          },
          useInsertionEffect: function(e, t) {
            return Ua(4, 2, e, t)
          },
          useMemo: function(e, t) {
            var n = xa();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
          },
          useReducer: function(e, t, n) {
            var r = xa();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }, r.queue = e, e = e.dispatch = ts.bind(null, ma, e), [r.memoizedState, e]
          },
          useRef: function(e) {
            return e = {
              current: e
            }, xa().memoizedState = e
          },
          useState: Fa,
          useDebugValue: Qa,
          useDeferredValue: function(e) {
            return xa().memoizedState = e
          },
          useTransition: function() {
            var e = Fa(!1),
              t = e[0];
            return e = Ja.bind(null, e[1]), xa().memoizedState = e, [t, e]
          },
          useMutableSource: function() {},
          useSyncExternalStore: function(e, t, n) {
            var r = ma,
              i = xa();
            if (io) {
              if (void 0 === n) throw Error(o(407));
              n = n()
            } else {
              if (n = t(), null === _l) throw Error(o(349));
              0 != (30 & pa) || Ma(r, t, n)
            }
            i.memoizedState = n;
            var a = {
              value: n,
              getSnapshot: t
            };
            return i.queue = a, ja(Ia.bind(null, r, a, e), [e]), r.flags |= 2048, Ha(9, Da.bind(null, r, a, n, t), void 0, null), n
          },
          useId: function() {
            var e = xa(),
              t = _l.identifierPrefix;
            if (io) {
              var n = Yi;
              t = ":" + t + "R" + (n = (Ki & ~(1 << 32 - at(Ki) - 1)).toString(32) + n), 0 < (n = Ea++) && (t += "H" + n.toString(32)), t += ":"
            } else t = ":" + t + "r" + (n = wa++).toString(32) + ":";
            return e.memoizedState = t
          },
          unstable_isNewReconciler: !1
        },
        ls = {
          readContext: xo,
          useCallback: Ka,
          useContext: xo,
          useEffect: Ga,
          useImperativeHandle: Xa,
          useInsertionEffect: Wa,
          useLayoutEffect: $a,
          useMemo: Ya,
          useReducer: Aa,
          useRef: Va,
          useState: function() {
            return Aa(La)
          },
          useDebugValue: Qa,
          useDeferredValue: function(e) {
            return qa(Ca(), ga.memoizedState, e)
          },
          useTransition: function() {
            return [Aa(La)[0], Ca().memoizedState]
          },
          useMutableSource: Ra,
          useSyncExternalStore: Na,
          useId: es,
          unstable_isNewReconciler: !1
        },
        us = {
          readContext: xo,
          useCallback: Ka,
          useContext: xo,
          useEffect: Ga,
          useImperativeHandle: Xa,
          useInsertionEffect: Wa,
          useLayoutEffect: $a,
          useMemo: Ya,
          useReducer: _a,
          useRef: Va,
          useState: function() {
            return _a(La)
          },
          useDebugValue: Qa,
          useDeferredValue: function(e) {
            var t = Ca();
            return null === ga ? t.memoizedState = e : qa(t, ga.memoizedState, e)
          },
          useTransition: function() {
            return [_a(La)[0], Ca().memoizedState]
          },
          useMutableSource: Ra,
          useSyncExternalStore: Na,
          useId: es,
          unstable_isNewReconciler: !1
        };

      function cs(e, t) {
        try {
          var n = "",
            r = t;
          do {
            n += U(r), r = r.return
          } while (r);
          var i = n
        } catch (e) {
          i = "\nError generating stack: " + e.message + "\n" + e.stack
        }
        return {
          value: e,
          source: t,
          stack: i,
          digest: null
        }
      }

      function fs(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null
        }
      }

      function hs(e, t) {
        try {
          console.error(t.value)
        } catch (e) {
          setTimeout((function() {
            throw e
          }))
        }
      }
      var ds = "function" == typeof WeakMap ? WeakMap : Map;

      function ps(e, t, n) {
        (n = Do(-1, n)).tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          Wl || (Wl = !0, $l = r), hs(0, t)
        }, n
      }

      function ms(e, t, n) {
        (n = Do(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var i = t.value;
          n.payload = function() {
            return r(i)
          }, n.callback = function() {
            hs(0, t)
          }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
          hs(0, t), "function" != typeof r && (null === Zl ? Zl = new Set([this]) : Zl.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : ""
          })
        }), n
      }

      function gs(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new ds;
          var i = new Set;
          r.set(t, i)
        } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
        i.has(n) || (i.add(n), e = xu.bind(null, e, t, n), t.then(e, e))
      }

      function vs(e) {
        do {
          var t;
          if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
          e = e.return
        } while (null !== e);
        return null
      }

      function ys(e, t, n, r, i) {
        return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Do(-1, 1)).tag = 2, Io(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
      }
      var bs = E.ReactCurrentOwner,
        Es = !1;

      function ws(e, t, n, r) {
        t.child = null === e ? qo(t, null, n, r) : Yo(t, e.child, n, r)
      }

      function Ss(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return Po(t, i), r = ka(e, t, n, r, o, i), n = Pa(), null === e || Es ? (io && n && eo(t), t.flags |= 1, ws(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ws(e, t, i))
      }

      function Ts(e, t, n, r, i) {
        if (null === e) {
          var o = n.type;
          return "function" != typeof o || Mu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Iu(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, ks(e, t, o, r, i))
        }
        if (o = e.child, 0 == (e.lanes & i)) {
          var a = o.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : lr)(a, r) && e.ref === t.ref) return Ws(e, t, i)
        }
        return t.flags |= 1, (e = Du(o, r)).ref = t.ref, e.return = t, t.child = e
      }

      function ks(e, t, n, r, i) {
        if (null !== e) {
          var o = e.memoizedProps;
          if (lr(o, r) && e.ref === t.ref) {
            if (Es = !1, t.pendingProps = r = o, 0 == (e.lanes & i)) return t.lanes = e.lanes, Ws(e, t, i);
            0 != (131072 & e.flags) && (Es = !0)
          }
        }
        return Cs(e, t, n, r, i)
      }

      function Ps(e, t, n) {
        var r = t.pendingProps,
          i = r.children,
          o = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode)
          if (0 == (1 & t.mode)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, xi(Dl, Ml), Ml |= n;
          else {
            if (0 == (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null
            }, t.updateQueue = null, xi(Dl, Ml), Ml |= e, null;
            t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            }, r = null !== o ? o.baseLanes : n, xi(Dl, Ml), Ml |= r
          }
        else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, xi(Dl, Ml), Ml |= r;
        return ws(e, t, i, n), t.child
      }

      function xs(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
      }

      function Cs(e, t, n, r, i) {
        var o = Ni(n) ? _i : Li.current;
        return o = Ri(t, o), Po(t, i), n = ka(e, t, n, r, o, i), r = Pa(), null === e || Es ? (io && r && eo(t), t.flags |= 1, ws(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ws(e, t, i))
      }

      function Ls(e, t, n, r, i) {
        if (Ni(n)) {
          var o = !0;
          Bi(t)
        } else o = !1;
        if (Po(t, i), null === t.stateNode) Gs(e, t), Go(t, n, r), $o(t, n, r, i), r = !0;
        else if (null === e) {
          var a = t.stateNode,
            s = t.memoizedProps;
          a.props = s;
          var l = a.context,
            u = n.contextType;
          u = "object" == typeof u && null !== u ? xo(u) : Ri(t, u = Ni(n) ? _i : Li.current);
          var c = n.getDerivedStateFromProps,
            f = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
          f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== u) && Wo(t, a, r, u), Ro = !1;
          var h = t.memoizedState;
          a.state = h, Fo(t, r, a, i), l = t.memoizedState, s !== r || h !== l || Ai.current || Ro ? ("function" == typeof c && (Uo(t, n, c, r), l = t.memoizedState), (s = Ro || jo(t, n, s, r, h, l, u)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
          a = t.stateNode, Mo(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : vo(t.type, s), a.props = u, f = t.pendingProps, h = a.context, l = "object" == typeof(l = n.contextType) && null !== l ? xo(l) : Ri(t, l = Ni(n) ? _i : Li.current);
          var d = n.getDerivedStateFromProps;
          (c = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== f || h !== l) && Wo(t, a, r, l), Ro = !1, h = t.memoizedState, a.state = h, Fo(t, r, a, i);
          var p = t.memoizedState;
          s !== f || h !== p || Ai.current || Ro ? ("function" == typeof d && (Uo(t, n, d, r), p = t.memoizedState), (u = Ro || jo(t, n, u, r, h, p, l) || !1) ? (c || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, l), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, l)), "function" == typeof a.componentDidUpdate && (t.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = l, r = u) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return As(e, t, n, r, o, i)
      }

      function As(e, t, n, r, i, o) {
        xs(e, t);
        var a = 0 != (128 & t.flags);
        if (!r && !a) return i && Oi(t, n, !1), Ws(e, t, o);
        r = t.stateNode, bs.current = t;
        var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1, null !== e && a ? (t.child = Yo(t, e.child, null, o), t.child = Yo(t, null, s, o)) : ws(e, t, s, o), t.memoizedState = r.state, i && Oi(t, n, !0), t.child
      }

      function _s(e) {
        var t = e.stateNode;
        t.pendingContext ? Di(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Di(0, t.context, !1), ia(e, t.containerInfo)
      }

      function Rs(e, t, n, r, i) {
        return po(), mo(i), t.flags |= 256, ws(e, t, n, r), t.child
      }
      var Ns, Ms, Ds, Is, Bs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };

      function Os(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }
      }

      function Fs(e, t, n) {
        var r, i = t.pendingProps,
          a = la.current,
          s = !1,
          l = 0 != (128 & t.flags);
        if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), xi(la, 1 & a), null === e) return uo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, l = {
          mode: "hidden",
          children: l
        }, 0 == (1 & i) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Ou(l, i, 0, null), e = Bu(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Os(n), t.memoizedState = Bs, e) : Hs(t, l));
        if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, i, a, s) {
          if (n) return 256 & t.flags ? (t.flags &= -257, Vs(e, t, s, r = fs(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Ou({
            mode: "visible",
            children: r.children
          }, i, 0, null), (a = Bu(a, i, s, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 0 != (1 & t.mode) && Yo(t, e.child, null, s), t.child.memoizedState = Os(s), t.memoizedState = Bs, a);
          if (0 == (1 & t.mode)) return Vs(e, t, s, null);
          if ("$!" === i.data) {
            if (r = i.nextSibling && i.nextSibling.dataset) var l = r.dgst;
            return r = l, Vs(e, t, s, r = fs(a = Error(o(419)), r, void 0))
          }
          if (l = 0 != (s & e.childLanes), Es || l) {
            if (null !== (r = _l)) {
              switch (s & -s) {
                case 4:
                  i = 2;
                  break;
                case 16:
                  i = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  i = 32;
                  break;
                case 536870912:
                  i = 268435456;
                  break;
                default:
                  i = 0
              }
              0 !== (i = 0 != (i & (r.suspendedLanes | s)) ? 0 : i) && i !== a.retryLane && (a.retryLane = i, _o(e, i), ru(r, e, i, -1))
            }
            return gu(), Vs(e, t, s, r = fs(Error(o(421))))
          }
          return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = Lu.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, ro = ui(i.nextSibling), no = t, io = !0, oo = null, null !== e && (Zi[Xi++] = Ki, Zi[Xi++] = Yi, Zi[Xi++] = Qi, Ki = e.id, Yi = e.overflow, Qi = t), (t = Hs(t, r.children)).flags |= 4096, t)
        }(e, t, l, i, r, a, n);
        if (s) {
          s = i.fallback, l = t.mode, r = (a = e.child).sibling;
          var u = {
            mode: "hidden",
            children: i.children
          };
          return 0 == (1 & l) && t.child !== a ? ((i = t.child).childLanes = 0, i.pendingProps = u, t.deletions = null) : (i = Du(a, u)).subtreeFlags = 14680064 & a.subtreeFlags, null !== r ? s = Du(r, s) : (s = Bu(s, l, n, null)).flags |= 2, s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, l = null === (l = e.child.memoizedState) ? Os(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
          }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Bs, i
        }
        return e = (s = e.child).sibling, i = Du(s, {
          mode: "visible",
          children: i.children
        }), 0 == (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
      }

      function Hs(e, t) {
        return (t = Ou({
          mode: "visible",
          children: t
        }, e.mode, 0, null)).return = e, e.child = t
      }

      function Vs(e, t, n, r) {
        return null !== r && mo(r), Yo(t, e.child, null, n), (e = Hs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
      }

      function Us(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), ko(e.return, t, n)
      }

      function zs(e, t, n, r, i) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
      }

      function js(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          o = r.tail;
        if (ws(e, t, r.children, n), 0 != (2 & (r = la.current))) r = 1 & r | 2, t.flags |= 128;
        else {
          if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
            else if (19 === e.tag) Us(e, n, t);
            else if (null !== e.child) {
              e.child.return = e, e = e.child;
              continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
              if (null === e.return || e.return === t) break e;
              e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
          }
          r &= 1
        }
        if (xi(la, r), 0 == (1 & t.mode)) t.memoizedState = null;
        else switch (i) {
          case "forwards":
            for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === ua(e) && (i = n), n = n.sibling;
            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), zs(t, !1, i, n, o);
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i;) {
              if (null !== (e = i.alternate) && null === ua(e)) {
                t.child = i;
                break
              }
              e = i.sibling, i.sibling = n, n = i, i = e
            }
            zs(t, !0, n, null, o);
            break;
          case "together":
            zs(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null
        }
        return t.child
      }

      function Gs(e, t) {
        0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
      }

      function Ws(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Ol |= t.lanes, 0 == (n & t.childLanes)) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
          for (n = Du(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Du(e, e.pendingProps)).return = t;
          n.sibling = null
        }
        return t.child
      }

      function $s(e, t) {
        if (!io) switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
      }

      function Zs(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
        else
          for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
      }

      function Xs(e, t, n) {
        var r = t.pendingProps;
        switch (to(t), t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Zs(t), null;
          case 1:
          case 17:
            return Ni(t.type) && Mi(), Zs(t), null;
          case 3:
            return r = t.stateNode, oa(), Pi(Ai), Pi(Li), fa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== oo && (su(oo), oo = null))), Ms(e, t), Zs(t), null;
          case 5:
            sa(t);
            var i = ra(na.current);
            if (n = t.type, null !== e && null != t.stateNode) Ds(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return Zs(t), null
              }
              if (e = ra(ea.current), fo(t)) {
                r = t.stateNode, n = t.type;
                var a = t.memoizedProps;
                switch (r[hi] = t, r[di] = a, e = 0 != (1 & t.mode), n) {
                  case "dialog":
                    Hr("cancel", r), Hr("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Hr("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < Ir.length; i++) Hr(Ir[i], r);
                    break;
                  case "source":
                    Hr("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Hr("error", r), Hr("load", r);
                    break;
                  case "details":
                    Hr("toggle", r);
                    break;
                  case "input":
                    K(r, a), Hr("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!a.multiple
                    }, Hr("invalid", r);
                    break;
                  case "textarea":
                    ie(r, a), Hr("invalid", r)
                }
                for (var l in ye(n, a), i = null, a)
                  if (a.hasOwnProperty(l)) {
                    var u = a[l];
                    "children" === l ? "string" == typeof u ? r.textContent !== u && (!0 !== a.suppressHydrationWarning && qr(r.textContent, u, e), i = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== a.suppressHydrationWarning && qr(r.textContent, u, e), i = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Hr("scroll", r)
                  } switch (n) {
                  case "input":
                    $(r), J(r, a, !0);
                    break;
                  case "textarea":
                    $(r), ae(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof a.onClick && (r.onclick = Jr)
                }
                r = i, t.updateQueue = r, null !== r && (t.flags |= 4)
              } else {
                l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(n, {
                  is: r.is
                }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[hi] = t, e[di] = r, Ns(e, t, !1, !1), t.stateNode = e;
                e: {
                  switch (l = be(n, r), n) {
                    case "dialog":
                      Hr("cancel", e), Hr("close", e), i = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Hr("load", e), i = r;
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Ir.length; i++) Hr(Ir[i], e);
                      i = r;
                      break;
                    case "source":
                      Hr("error", e), i = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Hr("error", e), Hr("load", e), i = r;
                      break;
                    case "details":
                      Hr("toggle", e), i = r;
                      break;
                    case "input":
                      K(e, r), i = Q(e, r), Hr("invalid", e);
                      break;
                    case "option":
                    default:
                      i = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, i = O({}, r, {
                        value: void 0
                      }), Hr("invalid", e);
                      break;
                    case "textarea":
                      ie(e, r), i = re(e, r), Hr("invalid", e)
                  }
                  for (a in ye(n, i), u = i)
                    if (u.hasOwnProperty(a)) {
                      var c = u[a];
                      "style" === a ? ge(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === a ? "string" == typeof c ? ("textarea" !== n || "" !== c) && he(e, c) : "number" == typeof c && he(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (s.hasOwnProperty(a) ? null != c && "onScroll" === a && Hr("scroll", e) : null != c && b(e, a, c, l))
                    } switch (n) {
                    case "input":
                      $(e), J(e, r, !1);
                      break;
                    case "textarea":
                      $(e), ae(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + G(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, null != (a = r.value) ? ne(e, !!r.multiple, a, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof i.onClick && (e.onclick = Jr)
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1
                  }
                }
                r && (t.flags |= 4)
              }
              null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
            }
            return Zs(t), null;
          case 6:
            if (e && null != t.stateNode) Is(e, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
              if (n = ra(na.current), ra(ea.current), fo(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[hi] = t, (a = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                  case 3:
                    qr(r.nodeValue, n, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning && qr(r.nodeValue, n, 0 != (1 & e.mode))
                }
                a && (t.flags |= 4)
              } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[hi] = t, t.stateNode = r
            }
            return Zs(t), null;
          case 13:
            if (Pi(la), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
              if (io && null !== ro && 0 != (1 & t.mode) && 0 == (128 & t.flags)) ho(), po(), t.flags |= 98560, a = !1;
              else if (a = fo(t), null !== r && null !== r.dehydrated) {
                if (null === e) {
                  if (!a) throw Error(o(318));
                  if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                  a[hi] = t
                } else po(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                Zs(t), a = !1
              } else null !== oo && (su(oo), oo = null), a = !0;
              if (!a) return 65536 & t.flags ? t : null
            }
            return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & la.current) ? 0 === Il && (Il = 3) : gu())), null !== t.updateQueue && (t.flags |= 4), Zs(t), null);
          case 4:
            return oa(), Ms(e, t), null === e && zr(t.stateNode.containerInfo), Zs(t), null;
          case 10:
            return To(t.type._context), Zs(t), null;
          case 19:
            if (Pi(la), null === (a = t.memoizedState)) return Zs(t), null;
            if (r = 0 != (128 & t.flags), null === (l = a.rendering))
              if (r) $s(a, !1);
              else {
                if (0 !== Il || null !== e && 0 != (128 & e.flags))
                  for (e = t.child; null !== e;) {
                    if (null !== (l = ua(e))) {
                      for (t.flags |= 128, $s(a, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (l = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = null === e ? null : {
                        lanes: e.lanes,
                        firstContext: e.firstContext
                      }), n = n.sibling;
                      return xi(la, 1 & la.current | 2), t.child
                    }
                    e = e.sibling
                  }
                null !== a.tail && Ye() > jl && (t.flags |= 128, r = !0, $s(a, !1), t.lanes = 4194304)
              }
            else {
              if (!r)
                if (null !== (e = ua(l))) {
                  if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $s(a, !0), null === a.tail && "hidden" === a.tailMode && !l.alternate && !io) return Zs(t), null
                } else 2 * Ye() - a.renderingStartTime > jl && 1073741824 !== n && (t.flags |= 128, r = !0, $s(a, !1), t.lanes = 4194304);
              a.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = a.last) ? n.sibling = l : t.child = l, a.last = l)
            }
            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ye(), t.sibling = null, n = la.current, xi(la, r ? 1 & n | 2 : 1 & n), t) : (Zs(t), null);
          case 22:
          case 23:
            return hu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Ml) && (Zs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Zs(t), null;
          case 24:
          case 25:
            return null
        }
        throw Error(o(156, t.tag))
      }

      function Qs(e, t) {
        switch (to(t), t.tag) {
          case 1:
            return Ni(t.type) && Mi(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 3:
            return oa(), Pi(Ai), Pi(Li), fa(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
          case 5:
            return sa(t), null;
          case 13:
            if (Pi(la), null !== (e = t.memoizedState) && null !== e.dehydrated) {
              if (null === t.alternate) throw Error(o(340));
              po()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 19:
            return Pi(la), null;
          case 4:
            return oa(), null;
          case 10:
            return To(t.type._context), null;
          case 22:
          case 23:
            return hu(), null;
          default:
            return null
        }
      }
      Ns = function(e, t) {
        for (var n = t.child; null !== n;) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            n.child.return = n, n = n.child;
            continue
          }
          if (n === t) break;
          for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return
          }
          n.sibling.return = n.return, n = n.sibling
        }
      }, Ms = function() {}, Ds = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          e = t.stateNode, ra(ea.current);
          var o, a = null;
          switch (n) {
            case "input":
              i = Q(e, i), r = Q(e, r), a = [];
              break;
            case "select":
              i = O({}, i, {
                value: void 0
              }), r = O({}, r, {
                value: void 0
              }), a = [];
              break;
            case "textarea":
              i = re(e, i), r = re(e, r), a = [];
              break;
            default:
              "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
          }
          for (c in ye(n, r), n = null, i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
              if ("style" === c) {
                var l = i[c];
                for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
              } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
          for (c in r) {
            var u = r[c];
            if (l = null != i ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
              if ("style" === c)
                if (l) {
                  for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                  for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                } else n || (a || (a = []), a.push(c, n)), n = u;
            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (a = a || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (a = a || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Hr("scroll", e), a || l === u || (a = [])) : (a = a || []).push(c, u))
          }
          n && (a = a || []).push("style", n);
          var c = a;
          (t.updateQueue = c) && (t.flags |= 4)
        }
      }, Is = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
      };
      var Ks = !1,
        Ys = !1,
        qs = "function" == typeof WeakSet ? WeakSet : Set,
        Js = null;

      function el(e, t) {
        var n = e.ref;
        if (null !== n)
          if ("function" == typeof n) try {
            n(null)
          } catch (n) {
            Pu(e, t, n)
          } else n.current = null
      }

      function tl(e, t, n) {
        try {
          n()
        } catch (n) {
          Pu(e, t, n)
        }
      }
      var nl = !1;

      function rl(e, t, n) {
        var r = t.updateQueue;
        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var i = r = r.next;
          do {
            if ((i.tag & e) === e) {
              var o = i.destroy;
              i.destroy = void 0, void 0 !== o && tl(t, n, o)
            }
            i = i.next
          } while (i !== r)
        }
      }

      function il(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = t = t.next;
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
            }
            n = n.next
          } while (n !== t)
        }
      }

      function ol(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
        }
      }

      function al(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, al(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[hi], delete t[di], delete t[mi], delete t[gi], delete t[vi]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
      }

      function sl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
      }

      function ll(e) {
        e: for (;;) {
          for (; null === e.sibling;) {
            if (null === e.return || sl(e.return)) return null;
            e = e.return
          }
          for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child
          }
          if (!(2 & e.flags)) return e.stateNode
        }
      }

      function ul(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr));
        else if (4 !== r && null !== (e = e.child))
          for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
      }

      function cl(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling
      }
      var fl = null,
        hl = !1;

      function dl(e, t, n) {
        for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling
      }

      function pl(e, t, n) {
        if (ot && "function" == typeof ot.onCommitFiberUnmount) try {
          ot.onCommitFiberUnmount(it, n)
        } catch (e) {}
        switch (n.tag) {
          case 5:
            Ys || el(n, t);
          case 6:
            var r = fl,
              i = hl;
            fl = null, dl(e, t, n), hl = i, null !== (fl = r) && (hl ? (e = fl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fl.removeChild(n.stateNode));
            break;
          case 18:
            null !== fl && (hl ? (e = fl, n = n.stateNode, 8 === e.nodeType ? li(e.parentNode, n) : 1 === e.nodeType && li(e, n), zt(e)) : li(fl, n.stateNode));
            break;
          case 4:
            r = fl, i = hl, fl = n.stateNode.containerInfo, hl = !0, dl(e, t, n), fl = r, hl = i;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Ys && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              i = r = r.next;
              do {
                var o = i,
                  a = o.destroy;
                o = o.tag, void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && tl(n, t, a), i = i.next
              } while (i !== r)
            }
            dl(e, t, n);
            break;
          case 1:
            if (!Ys && (el(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (e) {
              Pu(n, t, e)
            }
            dl(e, t, n);
            break;
          case 21:
            dl(e, t, n);
            break;
          case 22:
            1 & n.mode ? (Ys = (r = Ys) || null !== n.memoizedState, dl(e, t, n), Ys = r) : dl(e, t, n);
            break;
          default:
            dl(e, t, n)
        }
      }

      function ml(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new qs), t.forEach((function(t) {
            var r = Au.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
          }))
        }
      }

      function gl(e, t) {
        var n = t.deletions;
        if (null !== n)
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
              var a = e,
                s = t,
                l = s;
              e: for (; null !== l;) {
                switch (l.tag) {
                  case 5:
                    fl = l.stateNode, hl = !1;
                    break e;
                  case 3:
                  case 4:
                    fl = l.stateNode.containerInfo, hl = !0;
                    break e
                }
                l = l.return
              }
              if (null === fl) throw Error(o(160));
              pl(a, s, i), fl = null, hl = !1;
              var u = i.alternate;
              null !== u && (u.return = null), i.return = null
            } catch (e) {
              Pu(i, t, e)
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; null !== t;) vl(t, e), t = t.sibling
      }

      function vl(e, t) {
        var n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (gl(t, e), yl(e), 4 & r) {
              try {
                rl(3, e, e.return), il(3, e)
              } catch (t) {
                Pu(e, e.return, t)
              }
              try {
                rl(5, e, e.return)
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            break;
          case 1:
            gl(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
            break;
          case 5:
            if (gl(t, e), yl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags) {
              var i = e.stateNode;
              try {
                he(i, "")
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            if (4 & r && null != (i = e.stateNode)) {
              var a = e.memoizedProps,
                s = null !== n ? n.memoizedProps : a,
                l = e.type,
                u = e.updateQueue;
              if (e.updateQueue = null, null !== u) try {
                "input" === l && "radio" === a.type && null != a.name && Y(i, a), be(l, s);
                var c = be(l, a);
                for (s = 0; s < u.length; s += 2) {
                  var f = u[s],
                    h = u[s + 1];
                  "style" === f ? ge(i, h) : "dangerouslySetInnerHTML" === f ? fe(i, h) : "children" === f ? he(i, h) : b(i, f, h, c)
                }
                switch (l) {
                  case "input":
                    q(i, a);
                    break;
                  case "textarea":
                    oe(i, a);
                    break;
                  case "select":
                    var d = i._wrapperState.wasMultiple;
                    i._wrapperState.wasMultiple = !!a.multiple;
                    var p = a.value;
                    null != p ? ne(i, !!a.multiple, p, !1) : d !== !!a.multiple && (null != a.defaultValue ? ne(i, !!a.multiple, a.defaultValue, !0) : ne(i, !!a.multiple, a.multiple ? [] : "", !1))
                }
                i[di] = a
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            break;
          case 6:
            if (gl(t, e), yl(e), 4 & r) {
              if (null === e.stateNode) throw Error(o(162));
              i = e.stateNode, a = e.memoizedProps;
              try {
                i.nodeValue = a
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            break;
          case 3:
            if (gl(t, e), yl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
              zt(t.containerInfo)
            } catch (t) {
              Pu(e, e.return, t)
            }
            break;
          case 4:
          default:
            gl(t, e), yl(e);
            break;
          case 13:
            gl(t, e), yl(e), 8192 & (i = e.child).flags && (a = null !== i.memoizedState, i.stateNode.isHidden = a, !a || null !== i.alternate && null !== i.alternate.memoizedState || (zl = Ye())), 4 & r && ml(e);
            break;
          case 22:
            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ys = (c = Ys) || f, gl(t, e), Ys = c) : gl(t, e), yl(e), 8192 & r) {
              if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode))
                for (Js = e, f = e.child; null !== f;) {
                  for (h = Js = f; null !== Js;) {
                    switch (p = (d = Js).child, d.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        rl(4, d, d.return);
                        break;
                      case 1:
                        el(d, d.return);
                        var m = d.stateNode;
                        if ("function" == typeof m.componentWillUnmount) {
                          r = d, n = d.return;
                          try {
                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                          } catch (e) {
                            Pu(r, n, e)
                          }
                        }
                        break;
                      case 5:
                        el(d, d.return);
                        break;
                      case 22:
                        if (null !== d.memoizedState) {
                          Sl(h);
                          continue
                        }
                    }
                    null !== p ? (p.return = d, Js = p) : Sl(h)
                  }
                  f = f.sibling
                }
              e: for (f = null, h = e;;) {
                if (5 === h.tag) {
                  if (null === f) {
                    f = h;
                    try {
                      i = h.stateNode, c ? "function" == typeof(a = i.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (l = h.stateNode, s = null != (u = h.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
                    } catch (t) {
                      Pu(e, e.return, t)
                    }
                  }
                } else if (6 === h.tag) {
                  if (null === f) try {
                    h.stateNode.nodeValue = c ? "" : h.memoizedProps
                  } catch (t) {
                    Pu(e, e.return, t)
                  }
                } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) {
                  h.child.return = h, h = h.child;
                  continue
                }
                if (h === e) break e;
                for (; null === h.sibling;) {
                  if (null === h.return || h.return === e) break e;
                  f === h && (f = null), h = h.return
                }
                f === h && (f = null), h.sibling.return = h.return, h = h.sibling
              }
            }
            break;
          case 19:
            gl(t, e), yl(e), 4 & r && ml(e);
          case 21:
        }
      }

      function yl(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var n = e.return; null !== n;) {
                if (sl(n)) {
                  var r = n;
                  break e
                }
                n = n.return
              }
              throw Error(o(160))
            }
            switch (r.tag) {
              case 5:
                var i = r.stateNode;
                32 & r.flags && (he(i, ""), r.flags &= -33), cl(e, ll(e), i);
                break;
              case 3:
              case 4:
                var a = r.stateNode.containerInfo;
                ul(e, ll(e), a);
                break;
              default:
                throw Error(o(161))
            }
          }
          catch (t) {
            Pu(e, e.return, t)
          }
          e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
      }

      function bl(e, t, n) {
        Js = e, El(e, t, n)
      }

      function El(e, t, n) {
        for (var r = 0 != (1 & e.mode); null !== Js;) {
          var i = Js,
            o = i.child;
          if (22 === i.tag && r) {
            var a = null !== i.memoizedState || Ks;
            if (!a) {
              var s = i.alternate,
                l = null !== s && null !== s.memoizedState || Ys;
              s = Ks;
              var u = Ys;
              if (Ks = a, (Ys = l) && !u)
                for (Js = i; null !== Js;) l = (a = Js).child, 22 === a.tag && null !== a.memoizedState ? Tl(i) : null !== l ? (l.return = a, Js = l) : Tl(i);
              for (; null !== o;) Js = o, El(o, t, n), o = o.sibling;
              Js = i, Ks = s, Ys = u
            }
            wl(e)
          } else 0 != (8772 & i.subtreeFlags) && null !== o ? (o.return = i, Js = o) : wl(e)
        }
      }

      function wl(e) {
        for (; null !== Js;) {
          var t = Js;
          if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 != (8772 & t.flags)) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Ys || il(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !Ys)
                    if (null === n) r.componentDidMount();
                    else {
                      var i = t.elementType === t.type ? n.memoizedProps : vo(t.type, n.memoizedProps);
                      r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                    } var a = t.updateQueue;
                  null !== a && Ho(t, a, r);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (null !== s) {
                    if (n = null, null !== t.child) switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode
                    }
                    Ho(t, s, n)
                  }
                  break;
                case 5:
                  var l = t.stateNode;
                  if (null === n && 4 & t.flags) {
                    n = l;
                    var u = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        u.autoFocus && n.focus();
                        break;
                      case "img":
                        u.src && (n.src = u.src)
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === t.memoizedState) {
                    var c = t.alternate;
                    if (null !== c) {
                      var f = c.memoizedState;
                      if (null !== f) {
                        var h = f.dehydrated;
                        null !== h && zt(h)
                      }
                    }
                  }
                  break;
                default:
                  throw Error(o(163))
              }
              Ys || 512 & t.flags && ol(t)
            } catch (e) {
              Pu(t, t.return, e)
            }
          }
          if (t === e) {
            Js = null;
            break
          }
          if (null !== (n = t.sibling)) {
            n.return = t.return, Js = n;
            break
          }
          Js = t.return
        }
      }

      function Sl(e) {
        for (; null !== Js;) {
          var t = Js;
          if (t === e) {
            Js = null;
            break
          }
          var n = t.sibling;
          if (null !== n) {
            n.return = t.return, Js = n;
            break
          }
          Js = t.return
        }
      }

      function Tl(e) {
        for (; null !== Js;) {
          var t = Js;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  il(4, t)
                } catch (e) {
                  Pu(t, n, e)
                }
                break;
              case 1:
                var r = t.stateNode;
                if ("function" == typeof r.componentDidMount) {
                  var i = t.return;
                  try {
                    r.componentDidMount()
                  } catch (e) {
                    Pu(t, i, e)
                  }
                }
                var o = t.return;
                try {
                  ol(t)
                } catch (e) {
                  Pu(t, o, e)
                }
                break;
              case 5:
                var a = t.return;
                try {
                  ol(t)
                } catch (e) {
                  Pu(t, a, e)
                }
            }
          } catch (e) {
            Pu(t, t.return, e)
          }
          if (t === e) {
            Js = null;
            break
          }
          var s = t.sibling;
          if (null !== s) {
            s.return = t.return, Js = s;
            break
          }
          Js = t.return
        }
      }
      var kl, Pl = Math.ceil,
        xl = E.ReactCurrentDispatcher,
        Cl = E.ReactCurrentOwner,
        Ll = E.ReactCurrentBatchConfig,
        Al = 0,
        _l = null,
        Rl = null,
        Nl = 0,
        Ml = 0,
        Dl = ki(0),
        Il = 0,
        Bl = null,
        Ol = 0,
        Fl = 0,
        Hl = 0,
        Vl = null,
        Ul = null,
        zl = 0,
        jl = 1 / 0,
        Gl = null,
        Wl = !1,
        $l = null,
        Zl = null,
        Xl = !1,
        Ql = null,
        Kl = 0,
        Yl = 0,
        ql = null,
        Jl = -1,
        eu = 0;

      function tu() {
        return 0 != (6 & Al) ? Ye() : -1 !== Jl ? Jl : Jl = Ye()
      }

      function nu(e) {
        return 0 == (1 & e.mode) ? 1 : 0 != (2 & Al) && 0 !== Nl ? Nl & -Nl : null !== go.transition ? (0 === eu && (eu = mt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Kt(e.type)
      }

      function ru(e, t, n, r) {
        if (50 < Yl) throw Yl = 0, ql = null, Error(o(185));
        vt(e, n, r), 0 != (2 & Al) && e === _l || (e === _l && (0 == (2 & Al) && (Fl |= n), 4 === Il && lu(e, Nl)), iu(e, r), 1 === n && 0 === Al && 0 == (1 & t.mode) && (jl = Ye() + 500, Hi && zi()))
      }

      function iu(e, t) {
        var n = e.callbackNode;
        ! function(e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var a = 31 - at(o),
              s = 1 << a,
              l = i[a]; - 1 === l ? 0 != (s & n) && 0 == (s & r) || (i[a] = dt(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s
          }
        }(e, t);
        var r = ht(e, e === _l ? Nl : 0);
        if (0 === r) null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (null != n && Xe(n), 1 === t) 0 === e.tag ? function(e) {
            Hi = !0, Ui(e)
          }(uu.bind(null, e)) : Ui(uu.bind(null, e)), ai((function() {
            0 == (6 & Al) && zi()
          })), n = null;
          else {
            switch (Et(r)) {
              case 1:
                n = Je;
                break;
              case 4:
                n = et;
                break;
              case 16:
              default:
                n = tt;
                break;
              case 536870912:
                n = rt
            }
            n = _u(n, ou.bind(null, e))
          }
          e.callbackPriority = t, e.callbackNode = n
        }
      }

      function ou(e, t) {
        if (Jl = -1, eu = 0, 0 != (6 & Al)) throw Error(o(327));
        var n = e.callbackNode;
        if (Tu() && e.callbackNode !== n) return null;
        var r = ht(e, e === _l ? Nl : 0);
        if (0 === r) return null;
        if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vu(e, r);
        else {
          t = r;
          var i = Al;
          Al |= 2;
          var a = mu();
          for (_l === e && Nl === t || (Gl = null, jl = Ye() + 500, du(e, t));;) try {
            bu();
            break
          } catch (t) {
            pu(e, t)
          }
          So(), xl.current = a, Al = i, null !== Rl ? t = 0 : (_l = null, Nl = 0, t = Il)
        }
        if (0 !== t) {
          if (2 === t && 0 !== (i = pt(e)) && (r = i, t = au(e, i)), 1 === t) throw n = Bl, du(e, 0), lu(e, r), iu(e, Ye()), n;
          if (6 === t) lu(e, r);
          else {
            if (i = e.current.alternate, 0 == (30 & r) && ! function(e) {
                for (var t = e;;) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r],
                          o = i.getSnapshot;
                        i = i.value;
                        try {
                          if (!sr(o(), i)) return !1
                        } catch (e) {
                          return !1
                        }
                      }
                  }
                  if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                  else {
                    if (t === e) break;
                    for (; null === t.sibling;) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                  }
                }
                return !0
              }(i) && (2 === (t = vu(e, r)) && 0 !== (a = pt(e)) && (r = a, t = au(e, a)), 1 === t)) throw n = Bl, du(e, 0), lu(e, r), iu(e, Ye()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Su(e, Ul, Gl);
                break;
              case 3:
                if (lu(e, r), (130023424 & r) === r && 10 < (t = zl + 500 - Ye())) {
                  if (0 !== ht(e, 0)) break;
                  if (((i = e.suspendedLanes) & r) !== r) {
                    tu(), e.pingedLanes |= e.suspendedLanes & i;
                    break
                  }
                  e.timeoutHandle = ri(Su.bind(null, e, Ul, Gl), t);
                  break
                }
                Su(e, Ul, Gl);
                break;
              case 4:
                if (lu(e, r), (4194240 & r) === r) break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                  var s = 31 - at(r);
                  a = 1 << s, (s = t[s]) > i && (i = s), r &= ~a
                }
                if (r = i, 10 < (r = (120 > (r = Ye() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pl(r / 1960)) - r)) {
                  e.timeoutHandle = ri(Su.bind(null, e, Ul, Gl), r);
                  break
                }
                Su(e, Ul, Gl);
                break;
              default:
                throw Error(o(329))
            }
          }
        }
        return iu(e, Ye()), e.callbackNode === n ? ou.bind(null, e) : null
      }

      function au(e, t) {
        var n = Vl;
        return e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256), 2 !== (e = vu(e, t)) && (t = Ul, Ul = n, null !== t && su(t)), e
      }

      function su(e) {
        null === Ul ? Ul = e : Ul.push.apply(Ul, e)
      }

      function lu(e, t) {
        for (t &= ~Hl, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
          var n = 31 - at(t),
            r = 1 << n;
          e[n] = -1, t &= ~r
        }
      }

      function uu(e) {
        if (0 != (6 & Al)) throw Error(o(327));
        Tu();
        var t = ht(e, 0);
        if (0 == (1 & t)) return iu(e, Ye()), null;
        var n = vu(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = pt(e);
          0 !== r && (t = r, n = au(e, r))
        }
        if (1 === n) throw n = Bl, du(e, 0), lu(e, t), iu(e, Ye()), n;
        if (6 === n) throw Error(o(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Su(e, Ul, Gl), iu(e, Ye()), null
      }

      function cu(e, t) {
        var n = Al;
        Al |= 1;
        try {
          return e(t)
        } finally {
          0 === (Al = n) && (jl = Ye() + 500, Hi && zi())
        }
      }

      function fu(e) {
        null !== Ql && 0 === Ql.tag && 0 == (6 & Al) && Tu();
        var t = Al;
        Al |= 1;
        var n = Ll.transition,
          r = bt;
        try {
          if (Ll.transition = null, bt = 1, e) return e()
        } finally {
          bt = r, Ll.transition = n, 0 == (6 & (Al = t)) && zi()
        }
      }

      function hu() {
        Ml = Dl.current, Pi(Dl)
      }

      function du(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, ii(n)), null !== Rl)
          for (n = Rl.return; null !== n;) {
            var r = n;
            switch (to(r), r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && Mi();
                break;
              case 3:
                oa(), Pi(Ai), Pi(Li), fa();
                break;
              case 5:
                sa(r);
                break;
              case 4:
                oa();
                break;
              case 13:
              case 19:
                Pi(la);
                break;
              case 10:
                To(r.type._context);
                break;
              case 22:
              case 23:
                hu()
            }
            n = n.return
          }
        if (_l = e, Rl = e = Du(e.current, null), Nl = Ml = t, Il = 0, Bl = null, Hl = Fl = Ol = 0, Ul = Vl = null, null !== Co) {
          for (t = 0; t < Co.length; t++)
            if (null !== (r = (n = Co[t]).interleaved)) {
              n.interleaved = null;
              var i = r.next,
                o = n.pending;
              if (null !== o) {
                var a = o.next;
                o.next = i, r.next = a
              }
              n.pending = r
            } Co = null
        }
        return e
      }

      function pu(e, t) {
        for (;;) {
          var n = Rl;
          try {
            if (So(), ha.current = as, ya) {
              for (var r = ma.memoizedState; null !== r;) {
                var i = r.queue;
                null !== i && (i.pending = null), r = r.next
              }
              ya = !1
            }
            if (pa = 0, va = ga = ma = null, ba = !1, Ea = 0, Cl.current = null, null === n || null === n.return) {
              Il = 1, Bl = t, Rl = null;
              break
            }
            e: {
              var a = e,
                s = n.return,
                l = n,
                u = t;
              if (t = Nl, l.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                var c = u,
                  f = l,
                  h = f.tag;
                if (0 == (1 & f.mode) && (0 === h || 11 === h || 15 === h)) {
                  var d = f.alternate;
                  d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null)
                }
                var p = vs(s);
                if (null !== p) {
                  p.flags &= -257, ys(p, s, l, 0, t), 1 & p.mode && gs(a, c, t), u = c;
                  var m = (t = p).updateQueue;
                  if (null === m) {
                    var g = new Set;
                    g.add(u), t.updateQueue = g
                  } else m.add(u);
                  break e
                }
                if (0 == (1 & t)) {
                  gs(a, c, t), gu();
                  break e
                }
                u = Error(o(426))
              } else if (io && 1 & l.mode) {
                var v = vs(s);
                if (null !== v) {
                  0 == (65536 & v.flags) && (v.flags |= 256), ys(v, s, l, 0, t), mo(cs(u, l));
                  break e
                }
              }
              a = u = cs(u, l),
              4 !== Il && (Il = 2),
              null === Vl ? Vl = [a] : Vl.push(a),
              a = s;do {
                switch (a.tag) {
                  case 3:
                    a.flags |= 65536, t &= -t, a.lanes |= t, Oo(a, ps(0, u, t));
                    break e;
                  case 1:
                    l = u;
                    var y = a.type,
                      b = a.stateNode;
                    if (0 == (128 & a.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === Zl || !Zl.has(b)))) {
                      a.flags |= 65536, t &= -t, a.lanes |= t, Oo(a, ms(a, l, t));
                      break e
                    }
                }
                a = a.return
              } while (null !== a)
            }
            wu(n)
          } catch (e) {
            t = e, Rl === n && null !== n && (Rl = n = n.return);
            continue
          }
          break
        }
      }

      function mu() {
        var e = xl.current;
        return xl.current = as, null === e ? as : e
      }

      function gu() {
        0 !== Il && 3 !== Il && 2 !== Il || (Il = 4), null === _l || 0 == (268435455 & Ol) && 0 == (268435455 & Fl) || lu(_l, Nl)
      }

      function vu(e, t) {
        var n = Al;
        Al |= 2;
        var r = mu();
        for (_l === e && Nl === t || (Gl = null, du(e, t));;) try {
          yu();
          break
        } catch (t) {
          pu(e, t)
        }
        if (So(), Al = n, xl.current = r, null !== Rl) throw Error(o(261));
        return _l = null, Nl = 0, Il
      }

      function yu() {
        for (; null !== Rl;) Eu(Rl)
      }

      function bu() {
        for (; null !== Rl && !Qe();) Eu(Rl)
      }

      function Eu(e) {
        var t = kl(e.alternate, e, Ml);
        e.memoizedProps = e.pendingProps, null === t ? wu(e) : Rl = t, Cl.current = null
      }

      function wu(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, 0 == (32768 & t.flags)) {
            if (null !== (n = Xs(n, t, Ml))) return void(Rl = n)
          } else {
            if (null !== (n = Qs(n, t))) return n.flags &= 32767, void(Rl = n);
            if (null === e) return Il = 6, void(Rl = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
          }
          if (null !== (t = t.sibling)) return void(Rl = t);
          Rl = t = e
        } while (null !== t);
        0 === Il && (Il = 5)
      }

      function Su(e, t, n) {
        var r = bt,
          i = Ll.transition;
        try {
          Ll.transition = null, bt = 1,
            function(e, t, n, r) {
              do {
                Tu()
              } while (null !== Ql);
              if (0 != (6 & Al)) throw Error(o(327));
              n = e.finishedWork;
              var i = e.finishedLanes;
              if (null === n) return null;
              if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
              e.callbackNode = null, e.callbackPriority = 0;
              var a = n.lanes | n.childLanes;
              if (function(e, t) {
                  var n = e.pendingLanes & ~t;
                  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n;) {
                    var i = 31 - at(n),
                      o = 1 << i;
                    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
                  }
                }(e, a), e === _l && (Rl = _l = null, Nl = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Xl || (Xl = !0, _u(tt, (function() {
                  return Tu(), null
                }))), a = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || a) {
                a = Ll.transition, Ll.transition = null;
                var s = bt;
                bt = 1;
                var l = Al;
                Al |= 4, Cl.current = null,
                  function(e, t) {
                    if (ei = Gt, dr(e = hr())) {
                      if ("selectionStart" in e) var n = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                      };
                      else e: {
                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var i = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, a.nodeType
                          } catch (e) {
                            n = null;
                            break e
                          }
                          var s = 0,
                            l = -1,
                            u = -1,
                            c = 0,
                            f = 0,
                            h = e,
                            d = null;
                          t: for (;;) {
                            for (var p; h !== n || 0 !== i && 3 !== h.nodeType || (l = s + i), h !== a || 0 !== r && 3 !== h.nodeType || (u = s + r), 3 === h.nodeType && (s += h.nodeValue.length), null !== (p = h.firstChild);) d = h, h = p;
                            for (;;) {
                              if (h === e) break t;
                              if (d === n && ++c === i && (l = s), d === a && ++f === r && (u = s), null !== (p = h.nextSibling)) break;
                              d = (h = d).parentNode
                            }
                            h = p
                          }
                          n = -1 === l || -1 === u ? null : {
                            start: l,
                            end: u
                          }
                        } else n = null
                      }
                      n = n || {
                        start: 0,
                        end: 0
                      }
                    } else n = null;
                    for (ti = {
                        focusedElem: e,
                        selectionRange: n
                      }, Gt = !1, Js = t; null !== Js;)
                      if (e = (t = Js).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Js = e;
                      else
                        for (; null !== Js;) {
                          t = Js;
                          try {
                            var m = t.alternate;
                            if (0 != (1024 & t.flags)) switch (t.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break;
                              case 1:
                                if (null !== m) {
                                  var g = m.memoizedProps,
                                    v = m.memoizedState,
                                    y = t.stateNode,
                                    b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : vo(t.type, g), v);
                                  y.__reactInternalSnapshotBeforeUpdate = b
                                }
                                break;
                              case 3:
                                var E = t.stateNode.containerInfo;
                                1 === E.nodeType ? E.textContent = "" : 9 === E.nodeType && E.documentElement && E.removeChild(E.documentElement);
                                break;
                              default:
                                throw Error(o(163))
                            }
                          } catch (e) {
                            Pu(t, t.return, e)
                          }
                          if (null !== (e = t.sibling)) {
                            e.return = t.return, Js = e;
                            break
                          }
                          Js = t.return
                        }
                    m = nl, nl = !1
                  }(e, n), vl(n, e), pr(ti), Gt = !!ei, ti = ei = null, e.current = n, bl(n, e, i), Ke(), Al = l, bt = s, Ll.transition = a
              } else e.current = n;
              if (Xl && (Xl = !1, Ql = e, Kl = i), 0 === (a = e.pendingLanes) && (Zl = null), function(e) {
                  if (ot && "function" == typeof ot.onCommitFiberRoot) try {
                    ot.onCommitFiberRoot(it, e, void 0, 128 == (128 & e.current.flags))
                  } catch (e) {}
                }(n.stateNode), iu(e, Ye()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((i = t[n]).value, {
                  componentStack: i.stack,
                  digest: i.digest
                });
              if (Wl) throw Wl = !1, e = $l, $l = null, e;
              0 != (1 & Kl) && 0 !== e.tag && Tu(), 0 != (1 & (a = e.pendingLanes)) ? e === ql ? Yl++ : (Yl = 0, ql = e) : Yl = 0, zi()
            }(e, t, n, r)
        } finally {
          Ll.transition = i, bt = r
        }
        return null
      }

      function Tu() {
        if (null !== Ql) {
          var e = Et(Kl),
            t = Ll.transition,
            n = bt;
          try {
            if (Ll.transition = null, bt = 16 > e ? 16 : e, null === Ql) var r = !1;
            else {
              if (e = Ql, Ql = null, Kl = 0, 0 != (6 & Al)) throw Error(o(331));
              var i = Al;
              for (Al |= 4, Js = e.current; null !== Js;) {
                var a = Js,
                  s = a.child;
                if (0 != (16 & Js.flags)) {
                  var l = a.deletions;
                  if (null !== l) {
                    for (var u = 0; u < l.length; u++) {
                      var c = l[u];
                      for (Js = c; null !== Js;) {
                        var f = Js;
                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(8, f, a)
                        }
                        var h = f.child;
                        if (null !== h) h.return = f, Js = h;
                        else
                          for (; null !== Js;) {
                            var d = (f = Js).sibling,
                              p = f.return;
                            if (al(f), f === c) {
                              Js = null;
                              break
                            }
                            if (null !== d) {
                              d.return = p, Js = d;
                              break
                            }
                            Js = p
                          }
                      }
                    }
                    var m = a.alternate;
                    if (null !== m) {
                      var g = m.child;
                      if (null !== g) {
                        m.child = null;
                        do {
                          var v = g.sibling;
                          g.sibling = null, g = v
                        } while (null !== g)
                      }
                    }
                    Js = a
                  }
                }
                if (0 != (2064 & a.subtreeFlags) && null !== s) s.return = a, Js = s;
                else e: for (; null !== Js;) {
                  if (0 != (2048 & (a = Js).flags)) switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rl(9, a, a.return)
                  }
                  var y = a.sibling;
                  if (null !== y) {
                    y.return = a.return, Js = y;
                    break e
                  }
                  Js = a.return
                }
              }
              var b = e.current;
              for (Js = b; null !== Js;) {
                var E = (s = Js).child;
                if (0 != (2064 & s.subtreeFlags) && null !== E) E.return = s, Js = E;
                else e: for (s = b; null !== Js;) {
                  if (0 != (2048 & (l = Js).flags)) try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        il(9, l)
                    }
                  } catch (e) {
                    Pu(l, l.return, e)
                  }
                  if (l === s) {
                    Js = null;
                    break e
                  }
                  var w = l.sibling;
                  if (null !== w) {
                    w.return = l.return, Js = w;
                    break e
                  }
                  Js = l.return
                }
              }
              if (Al = i, zi(), ot && "function" == typeof ot.onPostCommitFiberRoot) try {
                ot.onPostCommitFiberRoot(it, e)
              } catch (e) {}
              r = !0
            }
            return r
          } finally {
            bt = n, Ll.transition = t
          }
        }
        return !1
      }

      function ku(e, t, n) {
        e = Io(e, t = ps(0, t = cs(n, t), 1), 1), t = tu(), null !== e && (vt(e, 1, t), iu(e, t))
      }

      function Pu(e, t, n) {
        if (3 === e.tag) ku(e, e, n);
        else
          for (; null !== t;) {
            if (3 === t.tag) {
              ku(t, e, n);
              break
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Zl || !Zl.has(r))) {
                t = Io(t, e = ms(t, e = cs(n, e), 1), 1), e = tu(), null !== t && (vt(t, 1, e), iu(t, e));
                break
              }
            }
            t = t.return
          }
      }

      function xu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, _l === e && (Nl & n) === n && (4 === Il || 3 === Il && (130023424 & Nl) === Nl && 500 > Ye() - zl ? du(e, 0) : Hl |= n), iu(e, t)
      }

      function Cu(e, t) {
        0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
        var n = tu();
        null !== (e = _o(e, t)) && (vt(e, t, n), iu(e, n))
      }

      function Lu(e) {
        var t = e.memoizedState,
          n = 0;
        null !== t && (n = t.retryLane), Cu(e, n)
      }

      function Au(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode,
              i = e.memoizedState;
            null !== i && (n = i.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(o(314))
        }
        null !== r && r.delete(t), Cu(e, n)
      }

      function _u(e, t) {
        return Ze(e, t)
      }

      function Ru(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
      }

      function Nu(e, t, n, r) {
        return new Ru(e, t, n, r)
      }

      function Mu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
      }

      function Du(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Nu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
      }

      function Iu(e, t, n, r, i, a) {
        var s = 2;
        if (r = e, "function" == typeof e) Mu(e) && (s = 1);
        else if ("string" == typeof e) s = 5;
        else e: switch (e) {
          case T:
            return Bu(n.children, i, a, t);
          case k:
            s = 8, i |= 8;
            break;
          case P:
            return (e = Nu(12, n, t, 2 | i)).elementType = P, e.lanes = a, e;
          case A:
            return (e = Nu(13, n, t, i)).elementType = A, e.lanes = a, e;
          case _:
            return (e = Nu(19, n, t, i)).elementType = _, e.lanes = a, e;
          case M:
            return Ou(n, i, a, t);
          default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
              case x:
                s = 10;
                break e;
              case C:
                s = 9;
                break e;
              case L:
                s = 11;
                break e;
              case R:
                s = 14;
                break e;
              case N:
                s = 16, r = null;
                break e
            }
            throw Error(o(130, null == e ? e : typeof e, ""))
        }
        return (t = Nu(s, n, t, i)).elementType = e, t.type = r, t.lanes = a, t
      }

      function Bu(e, t, n, r) {
        return (e = Nu(7, e, r, t)).lanes = n, e
      }

      function Ou(e, t, n, r) {
        return (e = Nu(22, e, r, t)).elementType = M, e.lanes = n, e.stateNode = {
          isHidden: !1
        }, e
      }

      function Fu(e, t, n) {
        return (e = Nu(6, e, null, t)).lanes = n, e
      }

      function Hu(e, t, n) {
        return (t = Nu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t
      }

      function Vu(e, t, n, r, i) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
      }

      function Uu(e, t, n, r, i, o, a, s, l) {
        return e = new Vu(e, t, n, s, l), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Nu(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, No(o), e
      }

      function zu(e) {
        if (!e) return Ci;
        e: {
          if (ze(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
          var t = e;do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (Ni(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
                }
            }
            t = t.return
          } while (null !== t);
          throw Error(o(171))
        }
        if (1 === e.tag) {
          var n = e.type;
          if (Ni(n)) return Ii(e, n, t)
        }
        return t
      }

      function ju(e, t, n, r, i, o, a, s, l) {
        return (e = Uu(n, r, !0, e, 0, o, 0, s, l)).context = zu(null), n = e.current, (o = Do(r = tu(), i = nu(n))).callback = null != t ? t : null, Io(n, o, i), e.current.lanes = i, vt(e, i, r), iu(e, r), e
      }

      function Gu(e, t, n, r) {
        var i = t.current,
          o = tu(),
          a = nu(i);
        return n = zu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Do(o, a)).payload = {
          element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Io(i, t, a)) && (ru(e, i, a, o), Bo(e, i, a)), a
      }

      function Wu(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
      }

      function $u(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t
        }
      }

      function Zu(e, t) {
        $u(e, t), (e = e.alternate) && $u(e, t)
      }
      kl = function(e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || Ai.current) Es = !0;
          else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return Es = !1,
              function(e, t, n) {
                switch (t.tag) {
                  case 3:
                    _s(t), po();
                    break;
                  case 5:
                    aa(t);
                    break;
                  case 1:
                    Ni(t.type) && Bi(t);
                    break;
                  case 4:
                    ia(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      i = t.memoizedProps.value;
                    xi(yo, r._currentValue), r._currentValue = i;
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (xi(la, 1 & la.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Fs(e, t, n) : (xi(la, 1 & la.current), null !== (e = Ws(e, t, n)) ? e.sibling : null);
                    xi(la, 1 & la.current);
                    break;
                  case 19:
                    if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                      if (r) return js(e, t, n);
                      t.flags |= 128
                    }
                    if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), xi(la, la.current), r) break;
                    return null;
                  case 22:
                  case 23:
                    return t.lanes = 0, Ps(e, t, n)
                }
                return Ws(e, t, n)
              }(e, t, n);
            Es = 0 != (131072 & e.flags)
          }
        else Es = !1, io && 0 != (1048576 & t.flags) && Ji(t, $i, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            Gs(e, t), e = t.pendingProps;
            var i = Ri(t, Li.current);
            Po(t, n), i = ka(null, t, r, e, i, n);
            var a = Pa();
            return t.flags |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ni(r) ? (a = !0, Bi(t)) : a = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, No(t), i.updater = zo, t.stateNode = i, i._reactInternals = t, $o(t, r, e, n), t = As(null, t, r, !0, a, n)) : (t.tag = 0, io && a && eo(t), ws(null, t, i, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch (Gs(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) {
                  if ("function" == typeof e) return Mu(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === L) return 11;
                    if (e === R) return 14
                  }
                  return 2
                }(r), e = vo(r, e), i) {
                case 0:
                  t = Cs(null, t, r, e, n);
                  break e;
                case 1:
                  t = Ls(null, t, r, e, n);
                  break e;
                case 11:
                  t = Ss(null, t, r, e, n);
                  break e;
                case 14:
                  t = Ts(null, t, r, vo(r.type, e), n);
                  break e
              }
              throw Error(o(306, r, ""))
            }
            return t;
          case 0:
            return r = t.type, i = t.pendingProps, Cs(e, t, r, i = t.elementType === r ? i : vo(r, i), n);
          case 1:
            return r = t.type, i = t.pendingProps, Ls(e, t, r, i = t.elementType === r ? i : vo(r, i), n);
          case 3:
            e: {
              if (_s(t), null === e) throw Error(o(387));r = t.pendingProps,
              i = (a = t.memoizedState).element,
              Mo(e, t),
              Fo(t, r, null, n);
              var s = t.memoizedState;
              if (r = s.element, a.isDehydrated) {
                if (a = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                  }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                  t = Rs(e, t, r, n, i = cs(Error(o(423)), t));
                  break e
                }
                if (r !== i) {
                  t = Rs(e, t, r, n, i = cs(Error(o(424)), t));
                  break e
                }
                for (ro = ui(t.stateNode.containerInfo.firstChild), no = t, io = !0, oo = null, n = qo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
              } else {
                if (po(), r === i) {
                  t = Ws(e, t, n);
                  break e
                }
                ws(e, t, r, n)
              }
              t = t.child
            }
            return t;
          case 5:
            return aa(t), null === e && uo(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = i.children, ni(r, i) ? s = null : null !== a && ni(r, a) && (t.flags |= 32), xs(e, t), ws(e, t, s, n), t.child;
          case 6:
            return null === e && uo(t), null;
          case 13:
            return Fs(e, t, n);
          case 4:
            return ia(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Yo(t, null, r, n) : ws(e, t, r, n), t.child;
          case 11:
            return r = t.type, i = t.pendingProps, Ss(e, t, r, i = t.elementType === r ? i : vo(r, i), n);
          case 7:
            return ws(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return ws(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, s = i.value, xi(yo, r._currentValue), r._currentValue = s, null !== a)
                if (sr(a.value, s)) {
                  if (a.children === i.children && !Ai.current) {
                    t = Ws(e, t, n);
                    break e
                  }
                } else
                  for (null !== (a = t.child) && (a.return = t); null !== a;) {
                    var l = a.dependencies;
                    if (null !== l) {
                      s = a.child;
                      for (var u = l.firstContext; null !== u;) {
                        if (u.context === r) {
                          if (1 === a.tag) {
                            (u = Do(-1, n & -n)).tag = 2;
                            var c = a.updateQueue;
                            if (null !== c) {
                              var f = (c = c.shared).pending;
                              null === f ? u.next = u : (u.next = f.next, f.next = u), c.pending = u
                            }
                          }
                          a.lanes |= n, null !== (u = a.alternate) && (u.lanes |= n), ko(a.return, n, t), l.lanes |= n;
                          break
                        }
                        u = u.next
                      }
                    } else if (10 === a.tag) s = a.type === t.type ? null : a.child;
                    else if (18 === a.tag) {
                      if (null === (s = a.return)) throw Error(o(341));
                      s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), ko(s, n, t), s = a.sibling
                    } else s = a.child;
                    if (null !== s) s.return = a;
                    else
                      for (s = a; null !== s;) {
                        if (s === t) {
                          s = null;
                          break
                        }
                        if (null !== (a = s.sibling)) {
                          a.return = s.return, s = a;
                          break
                        }
                        s = s.return
                      }
                    a = s
                  }
              ws(e, t, i.children, n),
              t = t.child
            }
            return t;
          case 9:
            return i = t.type, r = t.pendingProps.children, Po(t, n), r = r(i = xo(i)), t.flags |= 1, ws(e, t, r, n), t.child;
          case 14:
            return i = vo(r = t.type, t.pendingProps), Ts(e, t, r, i = vo(r.type, i), n);
          case 15:
            return ks(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vo(r, i), Gs(e, t), t.tag = 1, Ni(r) ? (e = !0, Bi(t)) : e = !1, Po(t, n), Go(t, r, i), $o(t, r, i, n), As(null, t, r, !0, e, n);
          case 19:
            return js(e, t, n);
          case 22:
            return Ps(e, t, n)
        }
        throw Error(o(156, t.tag))
      };
      var Xu = "function" == typeof reportError ? reportError : function(e) {
        console.error(e)
      };

      function Qu(e) {
        this._internalRoot = e
      }

      function Ku(e) {
        this._internalRoot = e
      }

      function Yu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      }

      function qu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      }

      function Ju() {}

      function ec(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
          var a = o;
          if ("function" == typeof i) {
            var s = i;
            i = function() {
              var e = Wu(a);
              s.call(e)
            }
          }
          Gu(t, a, e, i)
        } else a = function(e, t, n, r, i) {
          if (i) {
            if ("function" == typeof r) {
              var o = r;
              r = function() {
                var e = Wu(a);
                o.call(e)
              }
            }
            var a = ju(t, r, e, 0, null, !1, 0, "", Ju);
            return e._reactRootContainer = a, e[pi] = a.current, zr(8 === e.nodeType ? e.parentNode : e), fu(), a
          }
          for (; i = e.lastChild;) e.removeChild(i);
          if ("function" == typeof r) {
            var s = r;
            r = function() {
              var e = Wu(l);
              s.call(e)
            }
          }
          var l = Uu(e, 0, !1, null, 0, !1, 0, "", Ju);
          return e._reactRootContainer = l, e[pi] = l.current, zr(8 === e.nodeType ? e.parentNode : e), fu((function() {
            Gu(t, l, n, r)
          })), l
        }(n, t, e, i, r);
        return Wu(a)
      }
      Ku.prototype.render = Qu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(o(409));
        Gu(e, t, null, null)
      }, Ku.prototype.unmount = Qu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fu((function() {
            Gu(null, e, null, null)
          })), t[pi] = null
        }
      }, Ku.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = kt();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++);
          Mt.splice(n, 0, e), 0 === n && Ot(e)
        }
      }, wt = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = ft(t.pendingLanes);
              0 !== n && (yt(t, 1 | n), iu(t, Ye()), 0 == (6 & Al) && (jl = Ye() + 500, zi()))
            }
            break;
          case 13:
            fu((function() {
              var t = _o(e, 1);
              if (null !== t) {
                var n = tu();
                ru(t, e, 1, n)
              }
            })), Zu(e, 1)
        }
      }, St = function(e) {
        if (13 === e.tag) {
          var t = _o(e, 134217728);
          null !== t && ru(t, e, 134217728, tu()), Zu(e, 134217728)
        }
      }, Tt = function(e) {
        if (13 === e.tag) {
          var t = nu(e),
            n = _o(e, t);
          null !== n && ru(n, e, t, tu()), Zu(e, t)
        }
      }, kt = function() {
        return bt
      }, Pt = function(e, t) {
        var n = bt;
        try {
          return bt = e, t()
        } finally {
          bt = n
        }
      }, Se = function(e, t, n) {
        switch (t) {
          case "input":
            if (q(e, n), t = n.name, "radio" === n.type && null != t) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = wi(r);
                  if (!i) throw Error(o(90));
                  Z(r), q(r, i)
                }
              }
            }
            break;
          case "textarea":
            oe(e, n);
            break;
          case "select":
            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
        }
      }, Le = cu, Ae = fu;
      var tc = {
          usingClientEntryPoint: !1,
          Events: [bi, Ei, wi, xe, Ce, cu]
        },
        nc = {
          findFiberByHostInstance: yi,
          bundleType: 0,
          version: "18.2.0",
          rendererPackageName: "react-dom"
        },
        rc = {
          bundleType: nc.bundleType,
          version: nc.version,
          rendererPackageName: nc.rendererPackageName,
          rendererConfig: nc.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: E.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = We(e)) ? null : e.stateNode
          },
          findFiberByHostInstance: nc.findFiberByHostInstance || function() {
            return null
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ic.isDisabled && ic.supportsFiber) try {
          it = ic.inject(rc), ot = ic
        } catch (ce) {}
      }
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Yu(t)) throw Error(o(200));
        return function(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          }
        }(e, t, null, n)
      }, t.createRoot = function(e, t) {
        if (!Yu(e)) throw Error(o(299));
        var n = !1,
          r = "",
          i = Xu;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = Uu(e, 1, !1, null, 0, n, 0, r, i), e[pi] = t.current, zr(8 === e.nodeType ? e.parentNode : e), new Qu(t)
      }, t.findDOMNode = function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(o(188));
          throw e = Object.keys(e).join(","), Error(o(268, e))
        }
        return null === (e = We(t)) ? null : e.stateNode
      }, t.flushSync = function(e) {
        return fu(e)
      }, t.hydrate = function(e, t, n) {
        if (!qu(t)) throw Error(o(200));
        return ec(null, e, t, !0, n)
      }, t.hydrateRoot = function(e, t, n) {
        if (!Yu(e)) throw Error(o(405));
        var r = null != n && n.hydratedSources || null,
          i = !1,
          a = "",
          s = Xu;
        if (null != n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = ju(t, null, e, 1, null != n ? n : null, i, 0, a, s), e[pi] = t.current, zr(e), r)
          for (e = 0; e < r.length; e++) i = (i = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
        return new Ku(t)
      }, t.render = function(e, t, n) {
        if (!qu(t)) throw Error(o(200));
        return ec(null, e, t, !1, n)
      }, t.unmountComponentAtNode = function(e) {
        if (!qu(e)) throw Error(o(40));
        return !!e._reactRootContainer && (fu((function() {
          ec(null, null, e, !1, (function() {
            e._reactRootContainer = null, e[pi] = null
          }))
        })), !0)
      }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!qu(n)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
        return ec(e, t, n, !1, r)
      }, t.version = "18.2.0-next-9e3b772b8-20220608"
    },
    6763: (e, t, n) => {
      ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = n(4215)
    },
    216: (e, t, n) => {
      n.d(t, {
        _y: () => a,
        zt: () => o
      });
      var r = n(279);
      n(2571);
      var i = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? r.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = r.createContext(null)),
        o = (i.Consumer, i.Provider),
        a = i
    },
    9894: (e, t, n) => {
      n.d(t, {
        Z: () => j
      });
      var r = n(8254),
        i = n(279),
        o = n(216),
        a = n(8753),
        s = n(1803),
        l = n(6404),
        u = n(1075),
        c = n(348);

      function f(e, t) {
        return Object.keys(e).reduce((function(n, i) {
          return n[i] = (0, r.pi)({
            timeZone: t
          }, e[i]), n
        }), {})
      }

      function h(e, t) {
        return Object.keys((0, r.pi)((0, r.pi)({}, e), t)).reduce((function(n, i) {
          return n[i] = (0, r.pi)((0, r.pi)({}, e[i] || {}), t[i] || {}), n
        }), {})
      }

      function d(e, t) {
        if (!t) return e;
        var n = l.C.formats;
        return (0, r.pi)((0, r.pi)((0, r.pi)({}, n), e), {
          date: h(f(n.date, t), f(e.date || {}, t)),
          time: h(f(n.time, t), f(e.time || {}, t))
        })
      }
      var p = function(e, t, n, i, o) {
          var a = e.locale,
            l = e.formats,
            f = e.messages,
            h = e.defaultLocale,
            p = e.defaultFormats,
            m = e.fallbackOnEmptyString,
            g = e.onError,
            v = e.timeZone,
            y = e.defaultRichTextElements;
          void 0 === n && (n = {
            id: ""
          });
          var b = n.id,
            E = n.defaultMessage;
          (0, s.kG)(!!b, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var w = String(b),
            S = f && Object.prototype.hasOwnProperty.call(f, w) && f[w];
          if (Array.isArray(S) && 1 === S.length && S[0].type === c.wD.literal) return S[0].value;
          if (!i && S && "string" == typeof S && !y) return S.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (i = (0, r.pi)((0, r.pi)({}, y), i || {}), l = d(l, v), p = d(p, v), !S) {
            if (!1 === m && "" === S) return S;
            if ((!E || a && a.toLowerCase() !== h.toLowerCase()) && g(new u.$6(n, a)), E) try {
              return t.getMessageFormat(E, h, p, o).format(i)
            } catch (e) {
              return g(new u.X9('Error formatting default message for: "'.concat(w, '", rendering default message verbatim'), a, n, e)), "string" == typeof E ? E : w
            }
            return w
          }
          try {
            return t.getMessageFormat(S, a, l, (0, r.pi)({
              formatters: t
            }, o || {})).format(i)
          } catch (e) {
            g(new u.X9('Error formatting message: "'.concat(w, '", using ').concat(E ? "default message" : "id", " as fallback."), a, n, e))
          }
          if (E) try {
            return t.getMessageFormat(E, h, p, o).format(i)
          } catch (e) {
            g(new u.X9('Error formatting the default message for: "'.concat(w, '", rendering message verbatim'), a, n, e))
          }
          return "string" == typeof S ? S : "string" == typeof E ? E : w
        },
        m = n(5390),
        g = ["style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];

      function v(e, t, n) {
        var r = e.locale,
          i = e.formats,
          o = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && (0, m.TB)(i, "number", a, o) || {};
        return t(r, (0, m.L6)(n, g, s))
      }

      function y(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return v(e, t, r).format(n)
        } catch (t) {
          e.onError(new u.Qe("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function b(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return v(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new u.Qe("Error formatting number.", e.locale, t))
        }
        return []
      }
      var E = n(2238),
        w = ["numeric", "style"];

      function S(e, t, n, r, i) {
        void 0 === i && (i = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new E.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', E.jK.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              i = e.formats,
              o = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && (0, m.TB)(i, "relative", a, o) || {};
            return t(r, (0, m.L6)(n, w, s))
          }(e, t, i).format(n, r)
        } catch (t) {
          e.onError(new u.Qe("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var T = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function k(e, t, n, i) {
        var o = e.locale,
          a = e.formats,
          s = e.onError,
          l = e.timeZone;
        void 0 === i && (i = {});
        var u = i.format,
          c = (0, r.pi)((0, r.pi)({}, l && {
            timeZone: l
          }), u && (0, m.TB)(a, t, u, s)),
          f = (0, m.L6)(i, T, c);
        return "time" !== t || f.hour || f.minute || f.second || f.timeStyle || f.dateStyle || (f = (0, r.pi)((0, r.pi)({}, f), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, f)
      }

      function P(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = n[0],
          o = n[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return k(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new u.Qe("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function x(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = n[0],
          o = n[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return k(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new u.Qe("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function C(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = n[0],
          o = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          f = e.onError,
          h = (0, m.L6)(s, T, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, h).formatRange(i, o)
        } catch (t) {
          f(new u.Qe("Error formatting date time range.", e.locale, t))
        }
        return String(i)
      }

      function L(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = n[0],
          o = n[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return k(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new u.Qe("Error formatting date.", e.locale, t))
        }
        return []
      }

      function A(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = n[0],
          o = n[1],
          a = void 0 === o ? {} : o,
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return k(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new u.Qe("Error formatting time.", e.locale, t))
        }
        return []
      }
      var _ = ["type"];

      function R(e, t, n, r) {
        var i = e.locale,
          o = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || o(new E.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', E.jK.MISSING_INTL_API));
        var a = (0, m.L6)(r, _);
        try {
          return t(i, a).select(n)
        } catch (e) {
          o(new u.Qe("Error formatting plural.", i, e))
        }
        return "other"
      }
      var N = ["type", "style"],
        M = Date.now();

      function D(e, t, n, r) {
        void 0 === r && (r = {});
        var i = I(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i
      }

      function I(e, t, n, i) {
        var o = e.locale,
          a = e.onError;
        void 0 === i && (i = {}), Intl.ListFormat || a(new E.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', E.jK.MISSING_INTL_API));
        var s = (0, m.L6)(i, N);
        try {
          var l = {},
            c = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(M, "_").concat(e, "_").concat(M)
                }(t);
                return l[n] = e, n
              }
              return String(e)
            }));
          return t(o, s).formatToParts(c).map((function(e) {
            return "literal" === e.type ? e : (0, r.pi)((0, r.pi)({}, e), {
              value: l[e.value] || e.value
            })
          }))
        } catch (e) {
          a(new u.Qe("Error formatting list.", o, e))
        }
        return n
      }
      var B = ["style", "type", "fallback", "languageDisplay"];

      function O(e, t, n, r) {
        var i = e.locale,
          o = e.onError;
        Intl.DisplayNames || o(new E.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', E.jK.MISSING_INTL_API));
        var a = (0, m.L6)(r, B);
        try {
          return t(i, a).of(n)
        } catch (e) {
          o(new u.Qe("Error formatting display name.", i, e))
        }
      }
      var F = n(7393);

      function H(e) {
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

      function V(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r = e[n];
          return t[n] = (0, F.Gt)(r) ? (0, a.dt)(r) : r, t
        }), {}) : e
      }
      var U = function(e, t, n, o) {
          for (var a = [], s = 4; s < arguments.length; s++) a[s - 4] = arguments[s];
          var l = V(o),
            u = p.apply(void 0, (0, r.ev)([e, t, n, l], a, !1));
          return Array.isArray(u) ? i.Children.toArray(u) : u
        },
        z = function(e, t) {
          var n = e.defaultRichTextElements,
            i = (0, r._T)(e, ["defaultRichTextElements"]),
            o = V(n),
            s = function(e, t) {
              var n = (0, m.ax)(t),
                i = (0, r.pi)((0, r.pi)({}, m.Z0), e),
                o = i.locale,
                a = i.defaultLocale,
                s = i.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new u.gb('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new u.gb('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new u.OV('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), i.locale = i.defaultLocale || "en"),
                function(e) {
                  var t;
                  e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
                }(i), (0, r.pi)((0, r.pi)({}, i), {
                  formatters: n,
                  formatNumber: y.bind(null, i, n.getNumberFormat),
                  formatNumberToParts: b.bind(null, i, n.getNumberFormat),
                  formatRelativeTime: S.bind(null, i, n.getRelativeTimeFormat),
                  formatDate: P.bind(null, i, n.getDateTimeFormat),
                  formatDateToParts: L.bind(null, i, n.getDateTimeFormat),
                  formatTime: x.bind(null, i, n.getDateTimeFormat),
                  formatDateTimeRange: C.bind(null, i, n.getDateTimeFormat),
                  formatTimeToParts: A.bind(null, i, n.getDateTimeFormat),
                  formatPlural: R.bind(null, i, n.getPluralRules),
                  formatMessage: p.bind(null, i, n),
                  $t: p.bind(null, i, n),
                  formatList: D.bind(null, i, n.getListFormat),
                  formatListToParts: I.bind(null, i, n.getListFormat),
                  formatDisplayName: O.bind(null, i, n.getDisplayNames)
                })
            }((0, r.pi)((0, r.pi)((0, r.pi)({}, a.Z0), i), {
              defaultRichTextElements: o
            }), t),
            l = {
              locale: s.locale,
              timeZone: s.timeZone,
              fallbackOnEmptyString: s.fallbackOnEmptyString,
              formats: s.formats,
              defaultLocale: s.defaultLocale,
              defaultFormats: s.defaultFormats,
              messages: s.messages,
              onError: s.onError,
              defaultRichTextElements: o
            };
          return (0, r.pi)((0, r.pi)({}, s), {
            formatMessage: U.bind(null, l, s.formatters),
            $t: U.bind(null, l, s.formatters)
          })
        };
      const j = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = (0, m.Sn)(), t.state = {
            cache: t.cache,
            intl: z(H(t.props), t.cache),
            prevConfig: H(t.props)
          }, t
        }
        return (0, r.ZT)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            i = H(e);
          return (0, a.wU)(n, i) ? null : {
            intl: z(i, r),
            prevConfig: i
          }
        }, t.prototype.render = function() {
          return (0, a.lq)(this.state.intl), i.createElement(o.zt, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = a.Z0, t
      }(i.PureComponent)
    },
    2596: (e, t, n) => {
      n.d(t, {
        Z: () => a
      });
      var r = n(279),
        i = n(216),
        o = n(8753);

      function a() {
        var e = r.useContext(i._y);
        return (0, o.lq)(e), e
      }
    },
    8753: (e, t, n) => {
      n.d(t, {
        Z0: () => l,
        dt: () => u,
        lq: () => s,
        wU: () => c
      });
      var r = n(8254),
        i = n(279),
        o = n(1803),
        a = n(5390);

      function s(e) {
        (0, o.kG)(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      var l = (0, r.pi)((0, r.pi)({}, a.Z0), {
        textComponent: i.Fragment
      });

      function u(e) {
        return function(t) {
          return e(i.Children.toArray(t))
        }
      }

      function c(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t),
          i = n.length;
        if (r.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var a = n[o];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
        }
        return !0
      }
    },
    1803: (e, t, n) => {
      function r(e, t, n) {
        if (void 0 === n && (n = Error), !e) throw new n(t)
      }
      n.d(t, {
        kG: () => r
      })
    },
    2777: (e, t, n) => {
      function r(e, t) {
        var n = t && t.cache ? t.cache : c,
          r = t && t.serializer ? t.serializer : l;
        return (t && t.strategy ? t.strategy : s)(e, {
          cache: n,
          serializer: r
        })
      }

      function i(e, t, n, r) {
        var i, o = null == (i = r) || "number" == typeof i || "boolean" == typeof i ? r : n(r),
          a = t.get(o);
        return void 0 === a && (a = e.call(this, r), t.set(o, a)), a
      }

      function o(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          i = n(r),
          o = t.get(i);
        return void 0 === o && (o = e.apply(this, r), t.set(i, o)), o
      }

      function a(e, t, n, r, i) {
        return n.bind(t, e, r, i)
      }

      function s(e, t) {
        return a(e, this, 1 === e.length ? i : o, t.cache.create(), t.serializer)
      }
      n.d(t, {
        A: () => f,
        H: () => r
      });
      var l = function() {
        return JSON.stringify(arguments)
      };

      function u() {
        this.cache = Object.create(null)
      }
      u.prototype.get = function(e) {
        return this.cache[e]
      }, u.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var c = {
          create: function() {
            return new u
          }
        },
        f = {
          variadic: function(e, t) {
            return a(e, this, o, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, i, t.cache.create(), t.serializer)
          }
        }
    },
    348: (e, t, n) => {
      n.d(t, {
        wD: () => i,
        VG: () => l,
        rp: () => c,
        Ii: () => v,
        O4: () => s,
        uf: () => u,
        Wh: () => g,
        Jo: () => d,
        yx: () => p,
        Wi: () => h,
        HI: () => m,
        pe: () => f,
        Qc: () => oe
      });
      var r, i, o, a = n(8254);

      function s(e) {
        return e.type === i.literal
      }

      function l(e) {
        return e.type === i.argument
      }

      function u(e) {
        return e.type === i.number
      }

      function c(e) {
        return e.type === i.date
      }

      function f(e) {
        return e.type === i.time
      }

      function h(e) {
        return e.type === i.select
      }

      function d(e) {
        return e.type === i.plural
      }

      function p(e) {
        return e.type === i.pound
      }

      function m(e) {
        return e.type === i.tag
      }

      function g(e) {
        return !(!e || "object" != typeof e || e.type !== o.number)
      }

      function v(e) {
        return !(!e || "object" != typeof e || e.type !== o.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(r || (r = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(i || (i = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(o || (o = {}));
      var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        b = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function E(e) {
        var t = {};
        return e.replace(b, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
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
        })), t
      }
      var w = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        S = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        T = /^(@+)?(\+|#+)?[rs]?$/g,
        k = /(\*)(0+)|(#+)(0+)|(0+)/g,
        P = /^(0+)$/;

      function x(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(T, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function C(e) {
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
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !P.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function A(e) {
        return C(e) || {}
      }

      function _(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var i = r[n];
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
              t.style = "unit", t.unit = i.options[0].replace(/^(.*?)-/, "");
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
              t = (0, a.pi)((0, a.pi)((0, a.pi)({}, t), {
                notation: "scientific"
              }), i.options.reduce((function(e, t) {
                return (0, a.pi)((0, a.pi)({}, e), A(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, a.pi)((0, a.pi)((0, a.pi)({}, t), {
                notation: "engineering"
              }), i.options.reduce((function(e, t) {
                return (0, a.pi)((0, a.pi)({}, e), A(t))
              }), {}));
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
            case "integer-width":
              if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              i.options[0].replace(k, (function(e, n, r, i, o, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (i && o) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (P.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
          else if (S.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(S, (function(e, n, r, i, o, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && a ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var o = i.options[0];
            "w" === o ? t = (0, a.pi)((0, a.pi)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = (0, a.pi)((0, a.pi)({}, t), x(o)))
          } else if (T.test(i.stem)) t = (0, a.pi)((0, a.pi)({}, t), x(i.stem));
          else {
            var s = C(i.stem);
            s && (t = (0, a.pi)((0, a.pi)({}, t), s));
            var l = L(i.stem);
            l && (t = (0, a.pi)((0, a.pi)({}, t), l))
          }
        }
        return t
      }
      var R, N = {
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

      function M(e) {
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (N[n || ""] || N[r || ""] || N["".concat(r, "-001")] || N["001"])[0]
      }
      var D = new RegExp("^".concat(y.source, "*")),
        I = new RegExp("".concat(y.source, "*$"));

      function B(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var O = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        F = !!String.fromCodePoint,
        H = !!Object.fromEntries,
        V = !!String.prototype.codePointAt,
        U = !!String.prototype.trimStart,
        z = !!String.prototype.trimEnd,
        j = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        G = !0;
      try {
        G = "a" === (null === (R = q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === R ? void 0 : R[0])
      } catch (e) {
        G = !1
      }
      var W, $ = O ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Z = F ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", i = e.length, o = 0; i > o;) {
            if ((n = e[o++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        X = H ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var i = r[n],
              o = i[0],
              a = i[1];
            t[o] = a
          }
          return t
        },
        Q = V ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, i = e.charCodeAt(t);
            return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536
          }
        },
        K = U ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(D, "")
        },
        Y = z ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(I, "")
        };

      function q(e, t) {
        return new RegExp(e, t)
      }
      if (G) {
        var J = q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        W = function(e, t) {
          var n;
          return J.lastIndex = t, null !== (n = J.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else W = function(e, t) {
        for (var n = [];;) {
          var r = Q(e, t);
          if (void 0 === r || ne(r) || re(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Z.apply(void 0, n)
      };
      var ee = function() {
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
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var o = []; !this.isEOF();) {
            var a = this.char();
            if (123 === a) {
              if ((s = this.parseArgument(e, n)).err) return s;
              o.push(s.val)
            } else {
              if (125 === a && e > 0) break;
              if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(r.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()))
                }
                if (60 === a && !this.ignoreTag && te(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  o.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  o.push(s.val)
                }
              } else {
                var l = this.clonePosition();
                this.bump(), o.push({
                  type: i.pound,
                  location: B(l, this.clonePosition())
                })
              }
            }
          }
          return {
            val: o,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var o = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: i.literal,
              value: "<".concat(o, "/>"),
              location: B(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var s = a.val,
              l = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !te(this.char())) return this.error(r.INVALID_TAG, B(l, this.clonePosition()));
              var u = this.clonePosition();
              return o !== this.parseTagName() ? this.error(r.UNMATCHED_CLOSING_TAG, B(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: i.tag,
                  value: o,
                  children: s,
                  location: B(n, this.clonePosition())
                },
                err: null
              } : this.error(r.INVALID_TAG, B(l, this.clonePosition())))
            }
            return this.error(r.UNCLOSED_TAG, B(n, this.clonePosition()))
          }
          return this.error(r.INVALID_TAG, B(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) r += a;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                r += s
              }
            }
          }
          var l = B(n, this.clonePosition());
          return {
            val: {
              type: i.literal,
              value: r,
              location: l
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (te(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return Z.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Z(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(r.EMPTY_ARGUMENT, B(n, this.clonePosition()));
          var o = this.parseIdentifierIfPossible().value;
          if (!o) return this.error(r.MALFORMED_ARGUMENT, B(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: i.argument,
                  value: o,
                  location: B(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition())) : this.parseArgumentOptions(e, t, o, n);
            default:
              return this.error(r.MALFORMED_ARGUMENT, B(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = W(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: B(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, s) {
          var l, u = this.clonePosition(),
            c = this.parseIdentifierIfPossible().value,
            f = this.clonePosition();
          switch (c) {
            case "":
              return this.error(r.EXPECT_ARGUMENT_TYPE, B(u, f));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var h = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var d = this.clonePosition();
                if ((S = this.parseSimpleArgStyleIfPossible()).err) return S;
                if (0 === (v = Y(S.val)).length) return this.error(r.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
                h = {
                  style: v,
                  styleLocation: B(d, this.clonePosition())
                }
              }
              if ((T = this.tryParseArgumentClose(s)).err) return T;
              var p = B(s, this.clonePosition());
              if (h && $(null == h ? void 0 : h.style, "::", 0)) {
                var m = K(h.style.slice(2));
                if ("number" === c) return (S = this.parseNumberSkeletonFromString(m, h.styleLocation)).err ? S : {
                  val: {
                    type: i.number,
                    value: n,
                    location: p,
                    style: S.val
                  },
                  err: null
                };
                if (0 === m.length) return this.error(r.EXPECT_DATE_TIME_SKELETON, p);
                var g = m;
                this.locale && (g = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var i = e.charAt(r);
                    if ("j" === i) {
                      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i;) o++, r++;
                      var a = 1 + (1 & o),
                        s = o < 2 ? 1 : 3 + (o >> 1),
                        l = M(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === i ? "H" : i
                  }
                  return n
                }(m, this.locale));
                var v = {
                  type: o.dateTime,
                  pattern: g,
                  location: h.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? E(g) : {}
                };
                return {
                  val: {
                    type: "date" === c ? i.date : i.time,
                    value: n,
                    location: p,
                    style: v
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === c ? i.number : "date" === c ? i.date : i.time,
                  value: n,
                  location: p,
                  style: null !== (l = null == h ? void 0 : h.style) && void 0 !== l ? l : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var y = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(r.EXPECT_SELECT_ARGUMENT_OPTIONS, B(y, (0, a.pi)({}, y)));
              this.bumpSpace();
              var b = this.parseIdentifierIfPossible(),
                w = 0;
              if ("select" !== c && "offset" === b.value) {
                if (!this.bumpIf(":")) return this.error(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
                var S;
                if (this.bumpSpace(), (S = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return S;
                this.bumpSpace(), b = this.parseIdentifierIfPossible(), w = S.val
              }
              var T, k = this.tryParsePluralOrSelectOptions(e, c, t, b);
              if (k.err) return k;
              if ((T = this.tryParseArgumentClose(s)).err) return T;
              var P = B(s, this.clonePosition());
              return "select" === c ? {
                val: {
                  type: i.select,
                  value: n,
                  options: X(k.val),
                  location: P
                },
                err: null
              } : {
                val: {
                  type: i.plural,
                  value: n,
                  options: X(k.val),
                  offset: w,
                  pluralType: "plural" === c ? "cardinal" : "ordinal",
                  location: P
                },
                err: null
              };
            default:
              return this.error(r.INVALID_ARGUMENT_TYPE, B(u, f))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, B(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(n, this.clonePosition()));
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
          var n = [];
          try {
            n = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], n = 0, r = e.split(w).filter((function(e) {
                  return e.length > 0
                })); n < r.length; n++) {
                var i = r[n].split("/");
                if (0 === i.length) throw new Error("Invalid number skeleton");
                for (var o = i[0], a = i.slice(1), s = 0, l = a; s < l.length; s++)
                  if (0 === l[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: o,
                  options: a
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(r.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: o.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? _(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, i) {
          for (var o, a = !1, s = [], l = new Set, u = i.value, c = i.location;;) {
            if (0 === u.length) {
              var f = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var h = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_SELECTOR, r.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (h.err) return h;
              c = B(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset())
            }
            if (l.has(u)) return this.error("select" === t ? r.DUPLICATE_SELECT_ARGUMENT_SELECTOR : r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === u && (a = !0), this.bumpSpace();
            var d = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, t, n);
            if (p.err) return p;
            var m = this.tryParseArgumentClose(d);
            if (m.err) return m;
            s.push([u, {
              value: p.val,
              location: B(d, this.clonePosition())
            }]), l.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR : r.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(r.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var i = !1, o = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            i = !0, o = 10 * o + (a - 48), this.bump()
          }
          var s = B(r, this.clonePosition());
          return i ? j(o *= n) ? {
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
          var t = Q(this.message, e);
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
          if ($(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && ne(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function te(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ne(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function re(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ie(e) {
        e.forEach((function(e) {
          if (delete e.location, h(e) || d(e))
            for (var t in e.options) delete e.options[t].location, ie(e.options[t].value);
          else u(e) && g(e.style) || (c(e) || f(e)) && v(e.style) ? delete e.style.location : m(e) && ie(e.children)
        }))
      }

      function oe(e, t) {
        void 0 === t && (t = {}), t = (0, a.pi)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new ee(e, t).parse();
        if (n.err) {
          var i = SyntaxError(r[n.err.kind]);
          throw i.location = n.err.location, i.originalMessage = n.err.message, i
        }
        return (null == t ? void 0 : t.captureLocation) || ie(n.val), n.val
      }
    },
    2571: (e, t, n) => {
      var r = n(4607),
        i = {
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
        o = {
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
        s = {};

      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || i
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var i = d(n);
            i && i !== p && e(t, i, r)
          }
          var a = c(n);
          f && (a = a.concat(f(n)));
          for (var s = l(t), m = l(n), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!(o[v] || r && r[v] || m && m[v] || s && s[v])) {
              var y = h(n, v);
              try {
                u(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    6404: (e, t, n) => {
      n.d(t, {
        C: () => l
      });
      var r = n(8254),
        i = n(348),
        o = n(2777),
        a = n(7393);

      function s(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }
      var l = function() {
        function e(t, n, i, l) {
          void 0 === n && (n = e.defaultLocale);
          var u, c, f, h = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = h.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce((function(e, t) {
                return e.length && t.type === a.du.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return (0, a.FK)(h.ast, h.locales, h.formatters, h.formats, e, void 0, h.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = h.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(h.locales)[0]
              }
            }, this.getAst = function() {
              return h.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var d = l || {},
              p = (d.formatters, (0, r._T)(d, ["formatters"]));
            this.ast = e.__parse(t, (0, r.pi)((0, r.pi)({}, p), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (c = e.formats, (f = i) ? Object.keys(c).reduce((function(e, t) {
            var n, i;
            return e[t] = (n = c[t], (i = f[t]) ? (0, r.pi)((0, r.pi)((0, r.pi)({}, n || {}), i || {}), Object.keys(n).reduce((function(e, t) {
              return e[t] = (0, r.pi)((0, r.pi)({}, n[t]), i[t] || {}), e
            }), {})) : n), e
          }), (0, r.pi)({}, c)) : c), this.formatters = l && l.formatters || (void 0 === (u = this.formatterCache) && (u = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, o.H)((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))
            }), {
              cache: s(u.number),
              strategy: o.A.variadic
            }),
            getDateTimeFormat: (0, o.H)((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))
            }), {
              cache: s(u.dateTime),
              strategy: o.A.variadic
            }),
            getPluralRules: (0, o.H)((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, r.ev)([void 0], t, !1)))
            }), {
              cache: s(u.pluralRules),
              strategy: o.A.variadic
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
        }, e.__parse = i.Qc, e.formats = {
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
    2238: (e, t, n) => {
      n.d(t, {
        C8: () => a,
        HR: () => l,
        YR: () => s,
        jK: () => r,
        u_: () => o
      });
      var r, i = n(8254);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(r || (r = {}));
      var o = function(e) {
          function t(t, n, r) {
            var i = e.call(this, t) || this;
            return i.code = n, i.originalMessage = r, i
          }
          return (0, i.ZT)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        a = function(e) {
          function t(t, n, i, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), r.INVALID_VALUE, o) || this
          }
          return (0, i.ZT)(t, e), t
        }(o),
        s = function(e) {
          function t(t, n, i) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), r.INVALID_VALUE, i) || this
          }
          return (0, i.ZT)(t, e), t
        }(o),
        l = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), r.MISSING_VALUE, n) || this
          }
          return (0, i.ZT)(t, e), t
        }(o)
    },
    7393: (e, t, n) => {
      n.d(t, {
        FK: () => s,
        Gt: () => a,
        du: () => r
      });
      var r, i = n(348),
        o = n(2238);

      function a(e) {
        return "function" == typeof e
      }

      function s(e, t, n, l, u, c, f) {
        if (1 === e.length && (0, i.O4)(e[0])) return [{
          type: r.literal,
          value: e[0].value
        }];
        for (var h = [], d = 0, p = e; d < p.length; d++) {
          var m = p[d];
          if ((0, i.O4)(m)) h.push({
            type: r.literal,
            value: m.value
          });
          else if ((0, i.yx)(m)) "number" == typeof c && h.push({
            type: r.literal,
            value: n.getNumberFormat(t).format(c)
          });
          else {
            var g = m.value;
            if (!u || !(g in u)) throw new o.HR(g, f);
            var v = u[g];
            if ((0, i.VG)(m)) v && "string" != typeof v && "number" != typeof v || (v = "string" == typeof v || "number" == typeof v ? String(v) : ""), h.push({
              type: "string" == typeof v ? r.literal : r.object,
              value: v
            });
            else if ((0, i.rp)(m)) {
              var y = "string" == typeof m.style ? l.date[m.style] : (0, i.Ii)(m.style) ? m.style.parsedOptions : void 0;
              h.push({
                type: r.literal,
                value: n.getDateTimeFormat(t, y).format(v)
              })
            } else if ((0, i.pe)(m)) y = "string" == typeof m.style ? l.time[m.style] : (0, i.Ii)(m.style) ? m.style.parsedOptions : l.time.medium, h.push({
              type: r.literal,
              value: n.getDateTimeFormat(t, y).format(v)
            });
            else if ((0, i.uf)(m))(y = "string" == typeof m.style ? l.number[m.style] : (0, i.Wh)(m.style) ? m.style.parsedOptions : void 0) && y.scale && (v *= y.scale || 1), h.push({
              type: r.literal,
              value: n.getNumberFormat(t, y).format(v)
            });
            else {
              if ((0, i.HI)(m)) {
                var b = m.children,
                  E = m.value,
                  w = u[E];
                if (!a(w)) throw new o.YR(E, "function", f);
                var S = w(s(b, t, n, l, u, c).map((function(e) {
                  return e.value
                })));
                Array.isArray(S) || (S = [S]), h.push.apply(h, S.map((function(e) {
                  return {
                    type: "string" == typeof e ? r.literal : r.object,
                    value: e
                  }
                })))
              }
              if ((0, i.Wi)(m)) {
                if (!(T = m.options[v] || m.options.other)) throw new o.C8(m.value, v, Object.keys(m.options), f);
                h.push.apply(h, s(T.value, t, n, l, u))
              } else if ((0, i.Jo)(m)) {
                var T;
                if (!(T = m.options["=".concat(v)])) {
                  if (!Intl.PluralRules) throw new o.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.jK.MISSING_INTL_API, f);
                  var k = n.getPluralRules(t, {
                    type: m.pluralType
                  }).select(v - (m.offset || 0));
                  T = m.options[k] || m.options.other
                }
                if (!T) throw new o.C8(m.value, v, Object.keys(m.options), f);
                h.push.apply(h, s(T.value, t, n, l, u, v - (m.offset || 0)))
              }
            }
          }
        }
        return (P = h).length < 2 ? P : P.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === r.literal && t.type === r.literal ? n.value += t.value : e.push(t), e
        }), []);
        var P
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(r || (r = {}))
    },
    7478: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        h = n ? Symbol.for("react.forward_ref") : 60112,
        d = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        E = n ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case c:
                case f:
                case o:
                case s:
                case a:
                case d:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case h:
                    case g:
                    case m:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }

      function S(e) {
        return w(e) === f
      }
      t.AsyncMode = c, t.ConcurrentMode = f, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = h, t.Fragment = o, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = s, t.StrictMode = a, t.Suspense = d, t.isAsyncMode = function(e) {
        return S(e) || w(e) === c
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return w(e) === u
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === h
      }, t.isFragment = function(e) {
        return w(e) === o
      }, t.isLazy = function(e) {
        return w(e) === g
      }, t.isMemo = function(e) {
        return w(e) === m
      }, t.isPortal = function(e) {
        return w(e) === i
      }, t.isProfiler = function(e) {
        return w(e) === s
      }, t.isStrictMode = function(e) {
        return w(e) === a
      }, t.isSuspense = function(e) {
        return w(e) === d
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === f || e === s || e === a || e === d || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === u || e.$$typeof === h || e.$$typeof === y || e.$$typeof === b || e.$$typeof === E || e.$$typeof === v)
      }, t.typeOf = w
    },
    4607: (e, t, n) => {
      e.exports = n(7478)
    },
    3032: (e, t, n) => {
      var r = n(279),
        i = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, o = {},
          u = null,
          c = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: i,
          type: e,
          key: u,
          ref: c,
          props: o,
          _owner: s.current
        }
      }
      t.Fragment = o, t.jsx = u, t.jsxs = u
    },
    3705: (e, t, n) => {
      e.exports = n(3032)
    },
    2088: (e, t) => {
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n;) {
          var r = n - 1 >>> 1,
            i = e[r];
          if (!(0 < o(i, t))) break e;
          e[r] = t, e[n] = i, n = r
        }
      }

      function r(e) {
        return 0 === e.length ? null : e[0]
      }

      function i(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, i = e.length, a = i >>> 1; r < a;) {
            var s = 2 * (r + 1) - 1,
              l = e[s],
              u = s + 1,
              c = e[u];
            if (0 > o(l, n)) u < i && 0 > o(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
            else {
              if (!(u < i && 0 > o(c, n))) break e;
              e[r] = c, e[u] = n, r = u
            }
          }
        }
        return t
      }

      function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
      }
      if ("object" == typeof performance && "function" == typeof performance.now) {
        var a = performance;
        t.unstable_now = function() {
          return a.now()
        }
      } else {
        var s = Date,
          l = s.now();
        t.unstable_now = function() {
          return s.now() - l
        }
      }
      var u = [],
        c = [],
        f = 1,
        h = null,
        d = 3,
        p = !1,
        m = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        b = "undefined" != typeof setImmediate ? setImmediate : null;

      function E(e) {
        for (var t = r(c); null !== t;) {
          if (null === t.callback) i(c);
          else {
            if (!(t.startTime <= e)) break;
            i(c), t.sortIndex = t.expirationTime, n(u, t)
          }
          t = r(c)
        }
      }

      function w(e) {
        if (g = !1, E(e), !m)
          if (null !== r(u)) m = !0, M(S);
          else {
            var t = r(c);
            null !== t && D(w, t.startTime - e)
          }
      }

      function S(e, n) {
        m = !1, g && (g = !1, y(x), x = -1), p = !0;
        var o = d;
        try {
          for (E(n), h = r(u); null !== h && (!(h.expirationTime > n) || e && !A());) {
            var a = h.callback;
            if ("function" == typeof a) {
              h.callback = null, d = h.priorityLevel;
              var s = a(h.expirationTime <= n);
              n = t.unstable_now(), "function" == typeof s ? h.callback = s : h === r(u) && i(u), E(n)
            } else i(u);
            h = r(u)
          }
          if (null !== h) var l = !0;
          else {
            var f = r(c);
            null !== f && D(w, f.startTime - n), l = !1
          }
          return l
        } finally {
          h = null, d = o, p = !1
        }
      }
      "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var T, k = !1,
        P = null,
        x = -1,
        C = 5,
        L = -1;

      function A() {
        return !(t.unstable_now() - L < C)
      }

      function _() {
        if (null !== P) {
          var e = t.unstable_now();
          L = e;
          var n = !0;
          try {
            n = P(!0, e)
          } finally {
            n ? T() : (k = !1, P = null)
          }
        } else k = !1
      }
      if ("function" == typeof b) T = function() {
        b(_)
      };
      else if ("undefined" != typeof MessageChannel) {
        var R = new MessageChannel,
          N = R.port2;
        R.port1.onmessage = _, T = function() {
          N.postMessage(null)
        }
      } else T = function() {
        v(_, 0)
      };

      function M(e) {
        P = e, k || (k = !0, T())
      }

      function D(e, n) {
        x = v((function() {
          e(t.unstable_now())
        }), n)
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
        e.callback = null
      }, t.unstable_continueExecution = function() {
        m || p || (m = !0, M(S))
      }, t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
      }, t.unstable_getCurrentPriorityLevel = function() {
        return d
      }, t.unstable_getFirstCallbackNode = function() {
        return r(u)
      }, t.unstable_next = function(e) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = d
        }
        var n = d;
        d = t;
        try {
          return e()
        } finally {
          d = n
        }
      }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3
        }
        var n = d;
        d = e;
        try {
          return t()
        } finally {
          d = n
        }
      }, t.unstable_scheduleCallback = function(e, i, o) {
        var a = t.unstable_now();
        switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? a + o : a, e) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3
        }
        return e = {
          id: f++,
          callback: i,
          priorityLevel: e,
          startTime: o,
          expirationTime: s = o + s,
          sortIndex: -1
        }, o > a ? (e.sortIndex = o, n(c, e), null === r(u) && e === r(c) && (g ? (y(x), x = -1) : g = !0, D(w, o - a))) : (e.sortIndex = s, n(u, e), m || p || (m = !0, M(S))), e
      }, t.unstable_shouldYield = A, t.unstable_wrapCallback = function(e) {
        var t = d;
        return function() {
          var n = d;
          d = t;
          try {
            return e.apply(this, arguments)
          } finally {
            d = n
          }
        }
      }
    },
    2219: (e, t, n) => {
      e.exports = n(2088)
    },
    840: (e, t, n) => {
      n.d(t, {
        M: () => g
      });
      var r = n(279),
        i = n(1782);

      function o() {
        const e = (0, r.useRef)(!1);
        return (0, i.L)((() => (e.current = !0, () => {
          e.current = !1
        })), []), e
      }
      var a = n(5256),
        s = n(5921),
        l = n(5797);
      class u extends r.Component {
        getSnapshotBeforeUpdate(e) {
          const t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            const e = this.props.sizeRef.current;
            e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }

      function c({
        children: e,
        isPresent: t
      }) {
        const n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          });
        return (0, r.useInsertionEffect)((() => {
          const {
            width: e,
            height: r,
            top: a,
            left: s
          } = o.current;
          if (t || !i.current || !e || !r) return;
          i.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${a}px !important;\n            left: ${s}px !important;\n          }\n        `), () => {
            document.head.removeChild(l)
          }
        }), [t]), r.createElement(u, {
          isPresent: t,
          childRef: i,
          sizeRef: o
        }, r.cloneElement(e, {
          ref: i
        }))
      }
      const f = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: a,
        mode: u
      }) => {
        const f = (0, l.h)(h),
          d = (0, r.useId)(),
          p = (0, r.useMemo)((() => ({
            id: d,
            initial: t,
            isPresent: n,
            custom: o,
            onExitComplete: e => {
              f.set(e, !0);
              for (const e of f.values())
                if (!e) return;
              i && i()
            },
            register: e => (f.set(e, !1), () => f.delete(e))
          })), a ? void 0 : [n]);
        return (0, r.useMemo)((() => {
          f.forEach(((e, t) => f.set(t, !1)))
        }), [n]), r.useEffect((() => {
          !n && !f.size && i && i()
        }), [n]), "popLayout" === u && (e = r.createElement(c, {
          isPresent: n
        }, e)), r.createElement(s.O.Provider, {
          value: p
        }, e)
      };

      function h() {
        return new Map
      }
      var d = n(4529),
        p = n(3086);
      const m = e => e.key || "",
        g = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: s,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync"
        }) => {
          (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          const h = (0, r.useContext)(d.p).forceRender || function() {
              const e = o(),
                [t, n] = (0, r.useState)(0),
                i = (0, r.useCallback)((() => {
                  e.current && n(t + 1)
                }), [t]);
              return [(0, r.useCallback)((() => a.Wi.postRender(i)), [i]), t]
            }()[0],
            g = o(),
            v = function(e) {
              const t = [];
              return r.Children.forEach(e, (e => {
                (0, r.isValidElement)(e) && t.push(e)
              })), t
            }(e);
          let y = v;
          const b = (0, r.useRef)(new Map).current,
            E = (0, r.useRef)(y),
            w = (0, r.useRef)(new Map).current,
            S = (0, r.useRef)(!0);
          var T;
          if ((0, i.L)((() => {
              S.current = !1,
                function(e, t) {
                  e.forEach((e => {
                    const n = m(e);
                    t.set(n, e)
                  }))
                }(v, w), E.current = y
            })), T = () => {
              S.current = !0, w.clear(), b.clear()
            }, (0, r.useEffect)((() => () => T()), []), S.current) return r.createElement(r.Fragment, null, y.map((e => r.createElement(f, {
            key: m(e),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: u,
            mode: c
          }, e))));
          y = [...y];
          const k = E.current.map(m),
            P = v.map(m),
            x = k.length;
          for (let e = 0; e < x; e++) {
            const t = k[e]; - 1 !== P.indexOf(t) || b.has(t) || b.set(t, void 0)
          }
          return "wait" === c && b.size && (y = []), b.forEach(((e, n) => {
            if (-1 !== P.indexOf(n)) return;
            const i = w.get(n);
            if (!i) return;
            const o = k.indexOf(n);
            let a = e;
            if (!a) {
              const e = () => {
                w.delete(n), b.delete(n);
                const e = E.current.findIndex((e => e.key === n));
                if (E.current.splice(e, 1), !b.size) {
                  if (E.current = v, !1 === g.current) return;
                  h(), s && s()
                }
              };
              a = r.createElement(f, {
                key: m(i),
                isPresent: !1,
                onExitComplete: e,
                custom: t,
                presenceAffectsLayout: u,
                mode: c
              }, i), b.set(n, a)
            }
            y.splice(o, 0, a)
          })), y = y.map((e => {
            const t = e.key;
            return b.has(t) ? e : r.createElement(f, {
              key: m(e),
              isPresent: !0,
              presenceAffectsLayout: u,
              mode: c
            }, e)
          })), r.createElement(r.Fragment, null, b.size ? y : y.map((e => (0, r.cloneElement)(e))))
        }
    },
    4529: (e, t, n) => {
      n.d(t, {
        p: () => r
      });
      const r = (0, n(279).createContext)({})
    },
    5921: (e, t, n) => {
      n.d(t, {
        O: () => r
      });
      const r = (0, n(279).createContext)(null)
    },
    5256: (e, t, n) => {
      n.d(t, {
        Pn: () => s,
        Wi: () => a,
        frameData: () => l,
        S6: () => u
      });
      var r = n(3907);
      class i {
        constructor() {
          this.order = [], this.scheduled = new Set
        }
        add(e) {
          if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
        }
        remove(e) {
          const t = this.order.indexOf(e); - 1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e))
        }
        clear() {
          this.order.length = 0, this.scheduled.clear()
        }
      }
      const o = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: a,
          cancel: s,
          state: l,
          steps: u
        } = function(e, t) {
          let n = !1,
            r = !0;
          const a = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            },
            s = o.reduce(((e, t) => (e[t] = function(e) {
              let t = new i,
                n = new i,
                r = 0,
                o = !1,
                a = !1;
              const s = new WeakSet,
                l = {
                  schedule: (e, i = !1, a = !1) => {
                    const l = a && o,
                      u = l ? t : n;
                    return i && s.add(e), u.add(e) && l && o && (r = t.order.length), e
                  },
                  cancel: e => {
                    n.remove(e), s.delete(e)
                  },
                  process: i => {
                    if (o) a = !0;
                    else {
                      if (o = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                        for (let n = 0; n < r; n++) {
                          const r = t.order[n];
                          r(i), s.has(r) && (l.schedule(r), e())
                        }
                      o = !1, a && (a = !1, l.process(i))
                    }
                  }
                };
              return l
            }((() => n = !0)), e)), {}),
            l = e => s[e].process(a),
            u = () => {
              const t = performance.now();
              n = !1, a.delta = r ? 1e3 / 60 : Math.max(Math.min(t - a.timestamp, 40), 1), a.timestamp = t, a.isProcessing = !0, o.forEach(l), a.isProcessing = !1, n && (r = !1, e(u))
            };
          return {
            schedule: o.reduce(((t, i) => {
              const o = s[i];
              return t[i] = (t, i = !1, s = !1) => (n || (n = !0, r = !0, a.isProcessing || e(u)), o.schedule(t, i, s)), t
            }), {}),
            cancel: e => o.forEach((t => s[t].cancel(e))),
            state: a,
            steps: s
          }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z)
    },
    7657: (e, t, n) => {
      n.d(t, {
        E: () => Fo
      });
      var r = n(279);
      const i = (0, r.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        o = (0, r.createContext)({});
      var a = n(5921),
        s = n(1782);
      const l = (0, r.createContext)({
        strict: !1
      });

      function u(e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function c(e) {
        return "string" == typeof e || Array.isArray(e)
      }

      function f(e) {
        return "object" == typeof e && "function" == typeof e.start
      }
      const h = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        d = ["initial", ...h];

      function p(e) {
        return f(e.animate) || d.some((t => c(e[t])))
      }

      function m(e) {
        return Boolean(p(e) || e.variants)
      }

      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      const v = {
          animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"]
        },
        y = {};
      for (const e in v) y[e] = {
        isEnabled: t => v[e].some((e => !!t[e]))
      };
      var b = n(180),
        E = n(4529);
      const w = (0, r.createContext)({}),
        S = Symbol.for("motionComponentSymbol");

      function T({
        preloadedFeatures: e,
        createVisualElement: t,
        useRender: n,
        useVisualState: f,
        Component: h
      }) {
        e && function(e) {
          for (const t in e) y[t] = {
            ...y[t],
            ...e[t]
          }
        }(e);
        const d = (0, r.forwardRef)((function(d, m) {
          let v;
          const y = {
              ...(0, r.useContext)(i),
              ...d,
              layoutId: k(d)
            },
            {
              isStatic: E
            } = y,
            S = function(e) {
              const {
                initial: t,
                animate: n
              } = function(e, t) {
                if (p(e)) {
                  const {
                    initial: t,
                    animate: n
                  } = e;
                  return {
                    initial: !1 === t || c(t) ? t : void 0,
                    animate: c(n) ? n : void 0
                  }
                }
                return !1 !== e.inherit ? t : {}
              }(e, (0, r.useContext)(o));
              return (0, r.useMemo)((() => ({
                initial: t,
                animate: n
              })), [g(t), g(n)])
            }(d),
            T = f(d, E);
          if (!E && b.j) {
            S.visualElement = function(e, t, n, u) {
              const {
                visualElement: c
              } = (0, r.useContext)(o), f = (0, r.useContext)(l), h = (0, r.useContext)(a.O), d = (0, r.useContext)(i).reducedMotion, p = (0, r.useRef)();
              u = u || f.renderer, !p.current && u && (p.current = u(e, {
                visualState: t,
                parent: c,
                props: n,
                presenceContext: h,
                blockInitialAnimation: !!h && !1 === h.initial,
                reducedMotionConfig: d
              }));
              const m = p.current;
              (0, r.useInsertionEffect)((() => {
                m && m.update(n, h)
              }));
              const g = (0, r.useRef)(Boolean(window.HandoffAppearAnimations));
              return (0, s.L)((() => {
                m && (m.render(), g.current && m.animationState && m.animationState.animateChanges())
              })), (0, r.useEffect)((() => {
                m && (m.updateFeatures(), !g.current && m.animationState && m.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, g.current = !1)
              })), m
            }(h, T, y, t);
            const n = (0, r.useContext)(w),
              u = (0, r.useContext)(l).strict;
            S.visualElement && (v = S.visualElement.loadFeatures(y, u, e, n))
          }
          return r.createElement(o.Provider, {
            value: S
          }, v && S.visualElement ? r.createElement(v, {
            visualElement: S.visualElement,
            ...y
          }) : null, n(h, d, function(e, t, n) {
            return (0, r.useCallback)((r => {
              r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" == typeof n ? n(r) : u(n) && (n.current = r))
            }), [t])
          }(T, S.visualElement, m), T, E, S.visualElement))
        }));
        return d[S] = h, d
      }

      function k({
        layoutId: e
      }) {
        const t = (0, r.useContext)(E.p).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function P(e) {
        function t(t, n = {}) {
          return T(e(t, n))
        }
        if ("undefined" == typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, {
          get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
        })
      }
      const x = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function C(e) {
        return "string" == typeof e && !e.includes("-") && !!(x.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      const L = {},
        A = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        _ = new Set(A);

      function R(e, {
        layout: t,
        layoutId: n
      }) {
        return _.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!L[e] || "opacity" === e)
      }
      const N = e => Boolean(e && e.getVelocity),
        M = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        D = A.length,
        I = e => t => "string" == typeof t && t.startsWith(e),
        B = I("--"),
        O = I("var(--"),
        F = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
        H = (e, t, n) => Math.min(Math.max(n, e), t),
        V = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        U = {
          ...V,
          transform: e => H(0, 1, e)
        },
        z = {
          ...V,
          default: 1
        },
        j = e => Math.round(1e5 * e) / 1e5,
        G = /(-)?([\d]*\.?[\d])+/g,
        W = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        $ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function Z(e) {
        return "string" == typeof e
      }
      const X = e => ({
          test: t => Z(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        Q = X("deg"),
        K = X("%"),
        Y = X("px"),
        q = X("vh"),
        J = X("vw"),
        ee = {
          ...K,
          parse: e => K.parse(e) / 100,
          transform: e => K.transform(100 * e)
        },
        te = {
          ...V,
          transform: Math.round
        },
        ne = {
          borderWidth: Y,
          borderTopWidth: Y,
          borderRightWidth: Y,
          borderBottomWidth: Y,
          borderLeftWidth: Y,
          borderRadius: Y,
          radius: Y,
          borderTopLeftRadius: Y,
          borderTopRightRadius: Y,
          borderBottomRightRadius: Y,
          borderBottomLeftRadius: Y,
          width: Y,
          maxWidth: Y,
          height: Y,
          maxHeight: Y,
          size: Y,
          top: Y,
          right: Y,
          bottom: Y,
          left: Y,
          padding: Y,
          paddingTop: Y,
          paddingRight: Y,
          paddingBottom: Y,
          paddingLeft: Y,
          margin: Y,
          marginTop: Y,
          marginRight: Y,
          marginBottom: Y,
          marginLeft: Y,
          rotate: Q,
          rotateX: Q,
          rotateY: Q,
          rotateZ: Q,
          scale: z,
          scaleX: z,
          scaleY: z,
          scaleZ: z,
          skew: Q,
          skewX: Q,
          skewY: Q,
          distance: Y,
          translateX: Y,
          translateY: Y,
          translateZ: Y,
          x: Y,
          y: Y,
          z: Y,
          perspective: Y,
          transformPerspective: Y,
          opacity: U,
          originX: ee,
          originY: ee,
          originZ: Y,
          zIndex: te,
          fillOpacity: U,
          strokeOpacity: U,
          numOctaves: te
        };

      function re(e, t, n, r) {
        const {
          style: i,
          vars: o,
          transform: a,
          transformOrigin: s
        } = e;
        let l = !1,
          u = !1,
          c = !0;
        for (const e in t) {
          const n = t[e];
          if (B(e)) {
            o[e] = n;
            continue
          }
          const r = ne[e],
            f = F(n, r);
          if (_.has(e)) {
            if (l = !0, a[e] = f, !c) continue;
            n !== (r.default || 0) && (c = !1)
          } else e.startsWith("origin") ? (u = !0, s[e] = f) : i[e] = f
        }
        if (t.transform || (l || r ? i.transform = function(e, {
            enableHardwareAcceleration: t = !0,
            allowTransformNone: n = !0
          }, r, i) {
            let o = "";
            for (let t = 0; t < D; t++) {
              const n = A[t];
              void 0 !== e[n] && (o += `${M[n]||n}(${e[n]}) `)
            }
            return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o
          }(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
          const {
            originX: e = "50%",
            originY: t = "50%",
            originZ: n = 0
          } = s;
          i.transformOrigin = `${e} ${t} ${n}`
        }
      }
      const ie = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function oe(e, t, n) {
        for (const r in t) N(t[r]) || R(r, n) || (e[r] = t[r])
      }

      function ae(e, t, n) {
        const i = {},
          o = function(e, t, n) {
            const i = {};
            return oe(i, e.style || {}, e), Object.assign(i, function({
              transformTemplate: e
            }, t, n) {
              return (0, r.useMemo)((() => {
                const r = ie();
                return re(r, t, {
                  enableHardwareAcceleration: !n
                }, e), Object.assign({}, r.vars, r.style)
              }), [t])
            }(e, t, n)), e.transformValues ? e.transformValues(i) : i
          }(e, t, n);
        return e.drag && !1 !== e.dragListener && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = o, i
      }
      const se = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

      function le(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || se.has(e)
      }
      let ue = e => !le(e);
      try {
        (ce = require("@emotion/is-prop-valid").default) && (ue = e => e.startsWith("on") ? !le(e) : ce(e))
      } catch (e) {}
      var ce;

      function fe(e, t, n) {
        return "string" == typeof e ? e : Y.transform(t + n * e)
      }
      const he = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        de = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function pe(e, {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: i,
        originY: o,
        pathLength: a,
        pathSpacing: s = 1,
        pathOffset: l = 0,
        ...u
      }, c, f, h) {
        if (re(e, u, c, h), f) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: d,
          style: p,
          dimensions: m
        } = e;
        d.transform && (m && (p.transform = d.transform), delete d.transform), m && (void 0 !== i || void 0 !== o || p.transform) && (p.transformOrigin = function(e, t, n) {
          return `${fe(t,e.x,e.width)} ${fe(n,e.y,e.height)}`
        }(m, void 0 !== i ? i : .5, void 0 !== o ? o : .5)), void 0 !== t && (d.x = t), void 0 !== n && (d.y = n), void 0 !== r && (d.scale = r), void 0 !== a && function(e, t, n = 1, r = 0, i = !0) {
          e.pathLength = 1;
          const o = i ? he : de;
          e[o.offset] = Y.transform(-r);
          const a = Y.transform(t),
            s = Y.transform(n);
          e[o.array] = `${a} ${s}`
        }(d, a, s, l, !1)
      }
      const me = () => ({
          ...ie(),
          attrs: {}
        }),
        ge = e => "string" == typeof e && "svg" === e.toLowerCase();

      function ve(e, t, n, i) {
        const o = (0, r.useMemo)((() => {
          const n = me();
          return pe(n, t, {
            enableHardwareAcceleration: !1
          }, ge(i), e.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [t]);
        if (e.style) {
          const t = {};
          oe(t, e.style, e), o.style = {
            ...t,
            ...o.style
          }
        }
        return o
      }

      function ye(e = !1) {
        return (t, n, i, {
          latestValues: o
        }, a) => {
          const s = (C(t) ? ve : ae)(n, o, a, t),
            l = function(e, t, n) {
              const r = {};
              for (const i in e) "values" === i && "object" == typeof e.values || (ue(i) || !0 === n && le(i) || !t && !le(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
              return r
            }(n, "string" == typeof t, e),
            u = {
              ...l,
              ...s,
              ref: i
            },
            {
              children: c
            } = n,
            f = (0, r.useMemo)((() => N(c) ? c.get() : c), [c]);
          return (0, r.createElement)(t, {
            ...u,
            children: f
          })
        }
      }
      const be = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function Ee(e, {
        style: t,
        vars: n
      }, r, i) {
        Object.assign(e.style, t, i && i.getProjectionStyles(r));
        for (const t in n) e.style.setProperty(t, n[t])
      }
      const we = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Se(e, t, n, r) {
        Ee(e, t, void 0, r);
        for (const n in t.attrs) e.setAttribute(we.has(n) ? n : be(n), t.attrs[n])
      }

      function Te(e, t) {
        const {
          style: n
        } = e, r = {};
        for (const i in n)(N(n[i]) || t.style && N(t.style[i]) || R(i, e)) && (r[i] = n[i]);
        return r
      }

      function ke(e, t) {
        const n = Te(e, t);
        for (const r in e)(N(e[r]) || N(t[r])) && (n[-1 !== A.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
        return n
      }

      function Pe(e, t, n, r = {}, i = {}) {
        return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
      }
      var xe = n(5797);
      const Ce = e => Array.isArray(e),
        Le = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        Ae = e => Ce(e) ? e[e.length - 1] || 0 : e;

      function _e(e) {
        const t = N(e) ? e.get() : e;
        return Le(t) ? t.toValue() : t
      }
      const Re = e => (t, n) => {
        const i = (0, r.useContext)(o),
          s = (0, r.useContext)(a.O),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: n
          }, r, i, o) {
            const a = {
              latestValues: Ne(r, i, o, e),
              renderState: t()
            };
            return n && (a.mount = e => n(r, e, a)), a
          }(e, t, i, s);
        return n ? l() : (0, xe.h)(l)
      };

      function Ne(e, t, n, r) {
        const i = {},
          o = r(e, {});
        for (const e in o) i[e] = _e(o[e]);
        let {
          initial: a,
          animate: s
        } = e;
        const l = p(e),
          u = m(e);
        t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === a;
        const h = c ? s : a;
        return h && "boolean" != typeof h && !f(h) && (Array.isArray(h) ? h : [h]).forEach((t => {
          const n = Pe(e, t);
          if (!n) return;
          const {
            transitionEnd: r,
            transition: o,
            ...a
          } = n;
          for (const e in a) {
            let t = a[e];
            Array.isArray(t) && (t = t[c ? t.length - 1 : 0]), null !== t && (i[e] = t)
          }
          for (const e in r) i[e] = r[e]
        })), i
      }
      var Me = n(5256);
      const De = {
          useVisualState: Re({
            scrapeMotionValuesFromProps: ke,
            createRenderState: me,
            onMount: (e, t, {
              renderState: n,
              latestValues: r
            }) => {
              Me.Wi.read((() => {
                try {
                  n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                } catch (e) {
                  n.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                  }
                }
              })), Me.Wi.render((() => {
                pe(n, r, {
                  enableHardwareAcceleration: !1
                }, ge(t.tagName), e.transformTemplate), Se(t, n)
              }))
            }
          })
        },
        Ie = {
          useVisualState: Re({
            scrapeMotionValuesFromProps: Te,
            createRenderState: ie
          })
        };

      function Be(e, t, n, r = {
        passive: !0
      }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
      }
      const Oe = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

      function Fe(e, t = "page") {
        return {
          point: {
            x: e[t + "X"],
            y: e[t + "Y"]
          }
        }
      }
      const He = e => t => Oe(t) && e(t, Fe(t));

      function Ve(e, t, n, r) {
        return Be(e, t, He(n), r)
      }
      const Ue = (e, t) => n => t(e(n)),
        ze = (...e) => e.reduce(Ue);

      function je(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const Ge = je("dragHorizontal"),
        We = je("dragVertical");

      function $e(e) {
        let t = !1;
        if ("y" === e) t = We();
        else if ("x" === e) t = Ge();
        else {
          const e = Ge(),
            n = We();
          e && n ? t = () => {
            e(), n()
          } : (e && e(), n && n())
        }
        return t
      }

      function Ze() {
        const e = $e(!0);
        return !e || (e(), !1)
      }
      class Xe {
        constructor(e) {
          this.isMounted = !1, this.node = e
        }
        update() {}
      }

      function Qe(e, t) {
        const n = "pointer" + (t ? "enter" : "leave"),
          r = "onHover" + (t ? "Start" : "End");
        return Ve(e.current, n, ((n, i) => {
          if ("touch" === n.type || Ze()) return;
          const o = e.getProps();
          e.animationState && o.whileHover && e.animationState.setActive("whileHover", t), o[r] && Me.Wi.update((() => o[r](n, i)))
        }), {
          passive: !e.getProps()[r]
        })
      }
      const Ke = (e, t) => !!t && (e === t || Ke(e, t.parentElement));
      var Ye = n(3907);

      function qe(e, t) {
        if (!t) return;
        const n = new PointerEvent("pointer" + e);
        t(n, Fe(n))
      }
      const Je = new WeakMap,
        et = new WeakMap,
        tt = e => {
          const t = Je.get(e.target);
          t && t(e)
        },
        nt = e => {
          e.forEach(tt)
        };
      const rt = {
          some: 0,
          all: 1
        },
        it = {
          inView: {
            Feature: class extends Xe {
              constructor() {
                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
              }
              startObserver() {
                this.unmount();
                const {
                  viewport: e = {}
                } = this.node.getProps(), {
                  root: t,
                  margin: n,
                  amount: r = "some",
                  once: i
                } = e, o = {
                  root: t ? t.current : void 0,
                  rootMargin: n,
                  threshold: "number" == typeof r ? r : rt[r]
                };
                return function(e, t, n) {
                  const r = function({
                    root: e,
                    ...t
                  }) {
                    const n = e || document;
                    et.has(n) || et.set(n, {});
                    const r = et.get(n),
                      i = JSON.stringify(t);
                    return r[i] || (r[i] = new IntersectionObserver(nt, {
                      root: e,
                      ...t
                    })), r[i]
                  }(t);
                  return Je.set(e, n), r.observe(e), () => {
                    Je.delete(e), r.unobserve(e)
                  }
                }(this.node.current, o, (e => {
                  const {
                    isIntersecting: t
                  } = e;
                  if (this.isInView === t) return;
                  if (this.isInView = t, i && !t && this.hasEnteredView) return;
                  t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                  const {
                    onViewportEnter: n,
                    onViewportLeave: r
                  } = this.node.getProps(), o = t ? n : r;
                  o && o(e)
                }))
              }
              mount() {
                this.startObserver()
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                const {
                  props: e,
                  prevProps: t
                } = this.node;
                ["amount", "margin", "root"].some(function({
                  viewport: e = {}
                }, {
                  viewport: t = {}
                } = {}) {
                  return n => e[n] !== t[n]
                }(e, t)) && this.startObserver()
              }
              unmount() {}
            }
          },
          tap: {
            Feature: class extends Xe {
              constructor() {
                super(...arguments), this.removeStartListeners = Ye.Z, this.removeEndListeners = Ye.Z, this.removeAccessibleListeners = Ye.Z, this.startPointerPress = (e, t) => {
                  if (this.removeEndListeners(), this.isPressing) return;
                  const n = this.node.getProps(),
                    r = Ve(window, "pointerup", ((e, t) => {
                      if (!this.checkPressEnd()) return;
                      const {
                        onTap: n,
                        onTapCancel: r
                      } = this.node.getProps();
                      Me.Wi.update((() => {
                        Ke(this.node.current, e.target) ? n && n(e, t) : r && r(e, t)
                      }))
                    }), {
                      passive: !(n.onTap || n.onPointerUp)
                    }),
                    i = Ve(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), {
                      passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                  this.removeEndListeners = ze(r, i), this.startPress(e, t)
                }, this.startAccessiblePress = () => {
                  const e = Be(this.node.current, "keydown", (e => {
                      "Enter" !== e.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = Be(this.node.current, "keyup", (e => {
                        "Enter" === e.key && this.checkPressEnd() && qe("up", ((e, t) => {
                          const {
                            onTap: n
                          } = this.node.getProps();
                          n && Me.Wi.update((() => n(e, t)))
                        }))
                      })), qe("down", ((e, t) => {
                        this.startPress(e, t)
                      })))
                    })),
                    t = Be(this.node.current, "blur", (() => {
                      this.isPressing && qe("cancel", ((e, t) => this.cancelPress(e, t)))
                    }));
                  this.removeAccessibleListeners = ze(e, t)
                }
              }
              startPress(e, t) {
                this.isPressing = !0;
                const {
                  onTapStart: n,
                  whileTap: r
                } = this.node.getProps();
                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Me.Wi.update((() => n(e, t)))
              }
              checkPressEnd() {
                return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ze()
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                const {
                  onTapCancel: n
                } = this.node.getProps();
                n && Me.Wi.update((() => n(e, t)))
              }
              mount() {
                const e = this.node.getProps(),
                  t = Ve(this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(e.onTapStart || e.onPointerStart)
                  }),
                  n = Be(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = ze(t, n)
              }
              unmount() {
                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
              }
            }
          },
          focus: {
            Feature: class extends Xe {
              constructor() {
                super(...arguments), this.isActive = !1
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible")
                } catch (t) {
                  e = !0
                }
                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
              }
              onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
              }
              mount() {
                this.unmount = ze(Be(this.node.current, "focus", (() => this.onFocus())), Be(this.node.current, "blur", (() => this.onBlur())))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends Xe {
              mount() {
                this.unmount = ze(Qe(this.node, !0), Qe(this.node, !1))
              }
              unmount() {}
            }
          }
        };

      function ot(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++)
          if (t[r] !== e[r]) return !1;
        return !0
      }

      function at(e, t, n) {
        const r = e.getProps();
        return Pe(r, t, void 0 !== n ? n : r.custom, function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.get())), t
        }(e), function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t
        }(e))
      }
      const st = "data-" + be("framerAppearId");
      var lt = n(3086);
      const ut = e => 1e3 * e,
        ct = e => e / 1e3,
        ft = e => Array.isArray(e) && "number" == typeof e[0];

      function ht(e) {
        return Boolean(!e || "string" == typeof e && pt[e] || ft(e) || Array.isArray(e) && e.every(ht))
      }
      const dt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        pt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: dt([0, .65, .55, 1]),
          circOut: dt([.55, 0, 1, .45]),
          backIn: dt([.31, .01, .66, -.59]),
          backOut: dt([.33, 1.53, .69, .99])
        };

      function mt(e) {
        if (e) return ft(e) ? dt(e) : Array.isArray(e) ? e.map(mt) : pt[e]
      }
      const gt = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function vt(e, t, n, r) {
        if (e === t && n === r) return Ye.Z;
        return i => 0 === i || 1 === i ? i : gt(function(e, t, n, r, i) {
          let o, a, s = 0;
          do {
            a = t + (n - t) / 2, o = gt(a, r, i) - e, o > 0 ? n = a : t = a
          } while (Math.abs(o) > 1e-7 && ++s < 12);
          return a
        }(i, 0, 1, e, n), t, r)
      }
      const yt = vt(.42, 0, 1, 1),
        bt = vt(0, 0, .58, 1),
        Et = vt(.42, 0, .58, 1),
        wt = e => Array.isArray(e) && "number" != typeof e[0],
        St = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Tt = e => t => 1 - e(1 - t),
        kt = e => 1 - Math.sin(Math.acos(e)),
        Pt = Tt(kt),
        xt = St(Pt),
        Ct = vt(.33, 1.53, .69, .99),
        Lt = Tt(Ct),
        At = St(Lt),
        _t = {
          linear: Ye.Z,
          easeIn: yt,
          easeInOut: Et,
          easeOut: bt,
          circIn: kt,
          circInOut: xt,
          circOut: Pt,
          backIn: Lt,
          backInOut: At,
          backOut: Ct,
          anticipate: e => (e *= 2) < 1 ? .5 * Lt(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        Rt = e => {
          if (Array.isArray(e)) {
            (0, lt.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, n, r, i] = e;
            return vt(t, n, r, i)
          }
          return "string" == typeof e ? ((0, lt.k)(void 0 !== _t[e], `Invalid easing type '${e}'`), _t[e]) : e
        },
        Nt = (e, t) => n => Boolean(Z(n) && $.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
        Mt = (e, t, n) => r => {
          if (!Z(r)) return r;
          const [i, o, a, s] = r.match(G);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        Dt = {
          ...V,
          transform: e => Math.round((e => H(0, 255, e))(e))
        },
        It = {
          test: Nt("rgb", "red"),
          parse: Mt("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + Dt.transform(e) + ", " + Dt.transform(t) + ", " + Dt.transform(n) + ", " + j(U.transform(r)) + ")"
        },
        Bt = {
          test: Nt("#"),
          parse: function(e) {
            let t = "",
              n = "",
              r = "",
              i = "";
            return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1
            }
          },
          transform: It.transform
        },
        Ot = {
          test: Nt("hsl", "hue"),
          parse: Mt("hue", "saturation", "lightness"),
          transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(e) + ", " + K.transform(j(t)) + ", " + K.transform(j(n)) + ", " + j(U.transform(r)) + ")"
        },
        Ft = {
          test: e => It.test(e) || Bt.test(e) || Ot.test(e),
          parse: e => It.test(e) ? It.parse(e) : Ot.test(e) ? Ot.parse(e) : Bt.parse(e),
          transform: e => Z(e) ? e : e.hasOwnProperty("red") ? It.transform(e) : Ot.transform(e)
        },
        Ht = (e, t, n) => -n * e + n * t + e;

      function Vt(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      const Ut = (e, t, n) => {
          const r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r))
        },
        zt = [Bt, It, Ot];

      function jt(e) {
        const t = (n = e, zt.find((e => e.test(n))));
        var n;
        (0, lt.k)(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let r = t.parse(e);
        return t === Ot && (r = function({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: r
        }) {
          e /= 360, n /= 100;
          let i = 0,
            o = 0,
            a = 0;
          if (t /= 100) {
            const r = n < .5 ? n * (1 + t) : n + t - n * t,
              s = 2 * n - r;
            i = Vt(s, r, e + 1 / 3), o = Vt(s, r, e), a = Vt(s, r, e - 1 / 3)
          } else i = o = a = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * o),
            blue: Math.round(255 * a),
            alpha: r
          }
        }(r)), r
      }
      const Gt = (e, t) => {
          const n = jt(e),
            r = jt(t),
            i = {
              ...n
            };
          return e => (i.red = Ut(n.red, r.red, e), i.green = Ut(n.green, r.green, e), i.blue = Ut(n.blue, r.blue, e), i.alpha = Ht(n.alpha, r.alpha, e), It.transform(i))
        },
        Wt = {
          regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: Ye.Z
        },
        $t = {
          regex: W,
          countKey: "Colors",
          token: "${c}",
          parse: Ft.parse
        },
        Zt = {
          regex: G,
          countKey: "Numbers",
          token: "${n}",
          parse: V.parse
        };

      function Xt(e, {
        regex: t,
        countKey: n,
        token: r,
        parse: i
      }) {
        const o = e.tokenised.match(t);
        o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(i)))
      }

      function Qt(e) {
        const t = e.toString(),
          n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
          };
        return n.value.includes("var(--") && Xt(n, Wt), Xt(n, $t), Xt(n, Zt), n
      }

      function Kt(e) {
        return Qt(e).values
      }

      function Yt(e) {
        const {
          values: t,
          numColors: n,
          numVars: r,
          tokenised: i
        } = Qt(e), o = t.length;
        return e => {
          let t = i;
          for (let i = 0; i < o; i++) t = i < r ? t.replace(Wt.token, e[i]) : i < r + n ? t.replace($t.token, Ft.transform(e[i])) : t.replace(Zt.token, j(e[i]));
          return t
        }
      }
      const qt = e => "number" == typeof e ? 0 : e,
        Jt = {
          test: function(e) {
            var t, n;
            return isNaN(e) && Z(e) && ((null === (t = e.match(G)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(W)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: Kt,
          createTransformer: Yt,
          getAnimatableNone: function(e) {
            const t = Kt(e);
            return Yt(e)(t.map(qt))
          }
        },
        en = (e, t) => n => `${n>0?t:e}`;

      function tn(e, t) {
        return "number" == typeof e ? n => Ht(e, t, n) : Ft.test(e) ? Gt(e, t) : e.startsWith("var(") ? en(e, t) : on(e, t)
      }
      const nn = (e, t) => {
          const n = [...e],
            r = n.length,
            i = e.map(((e, n) => tn(e, t[n])));
          return e => {
            for (let t = 0; t < r; t++) n[t] = i[t](e);
            return n
          }
        },
        rn = (e, t) => {
          const n = {
              ...e,
              ...t
            },
            r = {};
          for (const i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = tn(e[i], t[i]));
          return e => {
            for (const t in r) n[t] = r[t](e);
            return n
          }
        },
        on = (e, t) => {
          const n = Jt.createTransformer(t),
            r = Qt(e),
            i = Qt(t);
          return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? ze(nn(r.values, i.values), n) : ((0, lt.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), en(e, t))
        },
        an = (e, t, n) => {
          const r = t - e;
          return 0 === r ? 1 : (n - e) / r
        },
        sn = (e, t) => n => Ht(e, t, n);

      function ln(e, t, {
        clamp: n = !0,
        ease: r,
        mixer: i
      } = {}) {
        const o = e.length;
        if ((0, lt.k)(o === t.length, "Both input and output ranges must be the same length"), 1 === o) return () => t[0];
        e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const a = function(e, t, n) {
            const r = [],
              i = n || ("number" == typeof(o = e[0]) ? sn : "string" == typeof o ? Ft.test(o) ? Gt : on : Array.isArray(o) ? nn : "object" == typeof o ? rn : sn);
            var o;
            const a = e.length - 1;
            for (let n = 0; n < a; n++) {
              let o = i(e[n], e[n + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[n] || Ye.Z : t;
                o = ze(e, o)
              }
              r.push(o)
            }
            return r
          }(t, r, i),
          s = a.length,
          l = t => {
            let n = 0;
            if (s > 1)
              for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            const r = an(e[n], e[n + 1], t);
            return a[n](r)
          };
        return n ? t => l(H(e[0], e[o - 1], t)) : l
      }

      function un({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = "easeInOut"
      }) {
        const i = wt(r) ? r.map(Rt) : Rt(r),
          o = {
            done: !1,
            value: t[0]
          },
          a = function(e, t) {
            return e.map((e => e * t))
          }(n && n.length === t.length ? n : function(e) {
            const t = [0];
            return function(e, t) {
              const n = e[e.length - 1];
              for (let r = 1; r <= t; r++) {
                const i = an(0, t, r);
                e.push(Ht(n, 1, i))
              }
            }(t, e.length - 1), t
          }(t), e),
          s = ln(a, t, {
            ease: Array.isArray(i) ? i : (l = t, u = i, l.map((() => u || Et)).splice(0, l.length - 1))
          });
        var l, u;
        return {
          calculatedDuration: e,
          next: t => (o.value = s(t), o.done = t >= e, o)
        }
      }

      function cn(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      const fn = 5;

      function hn(e, t, n) {
        const r = Math.max(t - fn, 0);
        return cn(n - e(r), t - r)
      }
      const dn = .001,
        pn = .01,
        mn = 10,
        gn = .05,
        vn = 1;
      const yn = 12;

      function bn(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      const En = ["duration", "bounce"],
        wn = ["stiffness", "damping", "mass"];

      function Sn(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function Tn({
        keyframes: e,
        restDelta: t,
        restSpeed: n,
        ...r
      }) {
        const i = e[0],
          o = e[e.length - 1],
          a = {
            done: !1,
            value: i
          },
          {
            stiffness: s,
            damping: l,
            mass: u,
            velocity: c,
            duration: f,
            isResolvedFromDuration: h
          } = function(e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!Sn(e, wn) && Sn(e, En)) {
              const n = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: n = 0,
                mass: r = 1
              }) {
                let i, o;
                (0, lt.K)(e <= ut(mn), "Spring duration must be 10 seconds or less");
                let a = 1 - t;
                a = H(gn, vn, a), e = H(pn, mn, ct(e)), a < 1 ? (i = t => {
                  const r = t * a,
                    i = r * e,
                    o = r - n,
                    s = bn(t, a),
                    l = Math.exp(-i);
                  return dn - o / s * l
                }, o = t => {
                  const r = t * a * e,
                    o = r * n + n,
                    s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-r),
                    u = bn(Math.pow(t, 2), a);
                  return (-i(t) + dn > 0 ? -1 : 1) * ((o - s) * l) / u
                }) : (i = t => Math.exp(-t * e) * ((t - n) * e + 1) - dn, o = t => Math.exp(-t * e) * (e * e * (n - t)));
                const s = function(e, t, n) {
                  let r = n;
                  for (let n = 1; n < yn; n++) r -= e(r) / t(r);
                  return r
                }(i, o, 5 / e);
                if (e = ut(e), isNaN(s)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: e
                }; {
                  const t = Math.pow(s, 2) * r;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(r * t),
                    duration: e
                  }
                }
              }(e);
              t = {
                ...t,
                ...n,
                velocity: 0,
                mass: 1
              }, t.isResolvedFromDuration = !0
            }
            return t
          }(r),
          d = c ? -ct(c) : 0,
          p = l / (2 * Math.sqrt(s * u)),
          m = o - i,
          g = ct(Math.sqrt(s / u)),
          v = Math.abs(m) < 5;
        let y;
        if (n || (n = v ? .01 : 2), t || (t = v ? .005 : .5), p < 1) {
          const e = bn(g, p);
          y = t => {
            const n = Math.exp(-p * g * t);
            return o - n * ((d + p * g * m) / e * Math.sin(e * t) + m * Math.cos(e * t))
          }
        } else if (1 === p) y = e => o - Math.exp(-g * e) * (m + (d + g * m) * e);
        else {
          const e = g * Math.sqrt(p * p - 1);
          y = t => {
            const n = Math.exp(-p * g * t),
              r = Math.min(e * t, 300);
            return o - n * ((d + p * g * m) * Math.sinh(r) + e * m * Math.cosh(r)) / e
          }
        }
        return {
          calculatedDuration: h && f || null,
          next: e => {
            const r = y(e);
            if (h) a.done = e >= f;
            else {
              let i = d;
              0 !== e && (i = p < 1 ? hn(y, e, r) : 0);
              const s = Math.abs(i) <= n,
                l = Math.abs(o - r) <= t;
              a.done = s && l
            }
            return a.value = a.done ? o : r, a
          }
        }
      }

      function kn({
        keyframes: e,
        velocity: t = 0,
        power: n = .8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: a,
        min: s,
        max: l,
        restDelta: u = .5,
        restSpeed: c
      }) {
        const f = e[0],
          h = {
            done: !1,
            value: f
          },
          d = e => void 0 === s ? l : void 0 === l || Math.abs(s - e) < Math.abs(l - e) ? s : l;
        let p = n * t;
        const m = f + p,
          g = void 0 === a ? m : a(m);
        g !== m && (p = g - f);
        const v = e => -p * Math.exp(-e / r),
          y = e => g + v(e),
          b = e => {
            const t = v(e),
              n = y(e);
            h.done = Math.abs(t) <= u, h.value = h.done ? g : n
          };
        let E, w;
        const S = e => {
          var t;
          t = h.value, (void 0 !== s && t < s || void 0 !== l && t > l) && (E = e, w = Tn({
            keyframes: [h.value, d(h.value)],
            velocity: hn(y, e, h.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
          }))
        };
        return S(0), {
          calculatedDuration: null,
          next: e => {
            let t = !1;
            return w || void 0 !== E || (t = !0, b(e), S(e)), void 0 !== E && e > E ? w.next(e - E) : (!t && b(e), h)
          }
        }
      }
      const Pn = e => {
          const t = ({
            timestamp: t
          }) => e(t);
          return {
            start: () => Me.Wi.update(t, !0),
            stop: () => (0, Me.Pn)(t),
            now: () => Me.frameData.isProcessing ? Me.frameData.timestamp : performance.now()
          }
        },
        xn = 2e4;

      function Cn(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < xn;) t += 50, n = e.next(t);
        return t >= xn ? 1 / 0 : t
      }
      const Ln = {
        decay: kn,
        inertia: kn,
        tween: un,
        keyframes: un,
        spring: Tn
      };

      function An({
        autoplay: e = !0,
        delay: t = 0,
        driver: n = Pn,
        keyframes: r,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: a = 0,
        repeatType: s = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: f,
        ...h
      }) {
        let d, p, m = 1,
          g = !1;
        const v = () => {
          p = new Promise((e => {
            d = e
          }))
        };
        let y;
        v();
        const b = Ln[i] || un;
        let E;
        b !== un && "number" != typeof r[0] && (E = ln([0, 100], r, {
          clamp: !1
        }), r = [0, 100]);
        const w = b({
          ...h,
          keyframes: r
        });
        let S;
        "mirror" === s && (S = b({
          ...h,
          keyframes: [...r].reverse(),
          velocity: -(h.velocity || 0)
        }));
        let T = "idle",
          k = null,
          P = null,
          x = null;
        null === w.calculatedDuration && o && (w.calculatedDuration = Cn(w));
        const {
          calculatedDuration: C
        } = w;
        let L = 1 / 0,
          A = 1 / 0;
        null !== C && (L = C + a, A = L * (o + 1) - a);
        let _ = 0;
        const R = e => {
            if (null === P) return;
            m > 0 && (P = Math.min(P, e)), m < 0 && (P = Math.min(e - A / m, P)), _ = null !== k ? k : Math.round(e - P) * m;
            const n = _ - t * (m >= 0 ? 1 : -1),
              i = m >= 0 ? n < 0 : n > A;
            _ = Math.max(n, 0), "finished" === T && null === k && (_ = A);
            let l = _,
              u = w;
            if (o) {
              const e = _ / L;
              let t = Math.floor(e),
                n = e % 1;
              !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, o + 1);
              const r = Boolean(t % 2);
              r && ("reverse" === s ? (n = 1 - n, a && (n -= a / L)) : "mirror" === s && (u = S));
              let i = H(0, 1, n);
              _ > A && (i = "reverse" === s && r ? 1 : 0), l = i * L
            }
            const c = i ? {
              done: !1,
              value: r[0]
            } : u.next(l);
            E && (c.value = E(c.value));
            let {
              done: h
            } = c;
            i || null === C || (h = m >= 0 ? _ >= A : _ <= 0);
            const d = null === k && ("finished" === T || "running" === T && h);
            return f && f(c.value), d && D(), c
          },
          N = () => {
            y && y.stop(), y = void 0
          },
          M = () => {
            T = "idle", N(), d(), v(), P = x = null
          },
          D = () => {
            T = "finished", c && c(), N(), d()
          },
          I = () => {
            if (g) return;
            y || (y = n(R));
            const e = y.now();
            l && l(), null !== k ? P = e - k : P && "finished" !== T || (P = e), "finished" === T && v(), x = P, k = null, T = "running", y.start()
          };
        e && I();
        const B = {
          then: (e, t) => p.then(e, t),
          get time() {
            return ct(_)
          },
          set time(e) {
            e = ut(e), _ = e, null === k && y && 0 !== m ? P = y.now() - e / m : k = e
          },
          get duration() {
            const e = null === w.calculatedDuration ? Cn(w) : w.calculatedDuration;
            return ct(e)
          },
          get speed() {
            return m
          },
          set speed(e) {
            e !== m && y && (m = e, B.time = ct(_))
          },
          get state() {
            return T
          },
          play: I,
          pause: () => {
            T = "paused", k = _
          },
          stop: () => {
            g = !0, "idle" !== T && (T = "idle", u && u(), M())
          },
          cancel: () => {
            null !== x && R(x), M()
          },
          complete: () => {
            T = "finished"
          },
          sample: e => (P = 0, R(e))
        };
        return B
      }
      const _n = function(e) {
          let t;
          return () => (void 0 === t && (t = Object.hasOwnProperty.call(Element.prototype, "animate")), t)
        }(),
        Rn = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
      const Nn = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Mn = {
          type: "keyframes",
          duration: .8
        },
        Dn = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        In = (e, {
          keyframes: t
        }) => t.length > 2 ? Mn : _.has(e) ? e.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Nn : Dn,
        Bn = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Jt.test(t) && "0" !== t || t.startsWith("url("))),
        On = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function Fn(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [r] = n.match(G) || [];
        if (!r) return e;
        const i = n.replace(r, "");
        let o = On.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + i + ")"
      }
      const Hn = /([a-z-]*)\(.*?\)/g,
        Vn = {
          ...Jt,
          getAnimatableNone: e => {
            const t = e.match(Hn);
            return t ? t.map(Fn).join(" ") : e
          }
        },
        Un = {
          ...ne,
          color: Ft,
          backgroundColor: Ft,
          outlineColor: Ft,
          fill: Ft,
          stroke: Ft,
          borderColor: Ft,
          borderTopColor: Ft,
          borderRightColor: Ft,
          borderBottomColor: Ft,
          borderLeftColor: Ft,
          filter: Vn,
          WebkitFilter: Vn
        },
        zn = e => Un[e];

      function jn(e, t) {
        let n = zn(e);
        return n !== Vn && (n = Jt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      }
      const Gn = e => /^0[^.\s]+$/.test(e);

      function Wn(e) {
        return "number" == typeof e ? 0 === e : null !== e ? "none" === e || "0" === e || Gn(e) : void 0
      }

      function $n(e, t) {
        return e[t] || e.default || e
      }
      const Zn = (e, t, n, r = {}) => i => {
        const o = $n(r, e) || {},
          a = o.delay || r.delay || 0;
        let {
          elapsed: s = 0
        } = r;
        s -= ut(a);
        const l = function(e, t, n, r) {
            const i = Bn(t, n);
            let o;
            o = Array.isArray(n) ? [...n] : [null, n];
            const a = void 0 !== r.from ? r.from : e.get();
            let s;
            const l = [];
            for (let e = 0; e < o.length; e++) null === o[e] && (o[e] = 0 === e ? a : o[e - 1]), Wn(o[e]) && l.push(e), "string" == typeof o[e] && "none" !== o[e] && "0" !== o[e] && (s = o[e]);
            if (i && l.length && s)
              for (let e = 0; e < l.length; e++) o[l[e]] = jn(t, s);
            return o
          }(t, e, n, o),
          u = l[0],
          c = l[l.length - 1],
          f = Bn(e, u),
          h = Bn(e, c);
        (0, lt.K)(f === h, `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
        let d = {
          keyframes: l,
          velocity: t.getVelocity(),
          ease: "easeOut",
          ...o,
          delay: -s,
          onUpdate: e => {
            t.set(e), o.onUpdate && o.onUpdate(e)
          },
          onComplete: () => {
            i(), o.onComplete && o.onComplete()
          }
        };
        if (function({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: r,
            staggerDirection: i,
            repeat: o,
            repeatType: a,
            repeatDelay: s,
            from: l,
            elapsed: u,
            ...c
          }) {
            return !!Object.keys(c).length
          }(o) || (d = {
            ...d,
            ...In(e, d)
          }), d.duration && (d.duration = ut(d.duration)), d.repeatDelay && (d.repeatDelay = ut(d.repeatDelay)), !f || !h || !1 === o.type) return function({
          keyframes: e,
          delay: t,
          onUpdate: n,
          onComplete: r
        }) {
          const i = () => (n && n(e[e.length - 1]), r && r(), {
            time: 0,
            speed: 1,
            duration: 0,
            play: Ye.Z,
            pause: Ye.Z,
            stop: Ye.Z,
            then: e => (e(), Promise.resolve()),
            cancel: Ye.Z,
            complete: Ye.Z
          });
          return t ? An({
            keyframes: [0, 1],
            duration: 0,
            delay: t,
            onComplete: i
          }) : i()
        }(d);
        if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
          const n = function(e, t, {
            onUpdate: n,
            onComplete: r,
            ...i
          }) {
            if (!_n() || !Rn.has(t) || i.repeatDelay || "mirror" === i.repeatType || 0 === i.damping || "inertia" === i.type) return !1;
            let o, a, s = !1;
            const l = () => {
              a = new Promise((e => {
                o = e
              }))
            };
            l();
            let {
              keyframes: u,
              duration: c = 300,
              ease: f,
              times: h
            } = i;
            if (((e, t) => "spring" === t.type || "backgroundColor" === e || !ht(t.ease))(t, i)) {
              const e = An({
                ...i,
                repeat: 0,
                delay: 0
              });
              let t = {
                done: !1,
                value: u[0]
              };
              const n = [];
              let r = 0;
              for (; !t.done && r < 2e4;) t = e.sample(r), n.push(t.value), r += 10;
              h = void 0, u = n, c = r - 10, f = "linear"
            }
            const d = function(e, t, n, {
              delay: r = 0,
              duration: i,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: s,
              times: l
            } = {}) {
              const u = {
                [t]: n
              };
              l && (u.offset = l);
              const c = mt(s);
              return Array.isArray(c) && (u.easing = c), e.animate(u, {
                delay: r,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal"
              })
            }(e.owner.current, t, u, {
              ...i,
              duration: c,
              ease: f,
              times: h
            });
            i.syncStart && (d.startTime = Me.frameData.isProcessing ? Me.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
            const p = () => d.cancel(),
              m = () => {
                Me.Wi.update(p), o(), l()
              };
            return d.onfinish = () => {
              e.set(function(e, {
                repeat: t,
                repeatType: n = "loop"
              }) {
                return e[t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1]
              }(u, i)), r && r(), m()
            }, {
              then: (e, t) => a.then(e, t),
              attachTimeline: e => (d.timeline = e, d.onfinish = null, Ye.Z),
              get time() {
                return ct(d.currentTime || 0)
              },
              set time(e) {
                d.currentTime = ut(e)
              },
              get speed() {
                return d.playbackRate
              },
              set speed(e) {
                d.playbackRate = e
              },
              get duration() {
                return ct(c)
              },
              play: () => {
                s || (d.play(), (0, Me.Pn)(p))
              },
              pause: () => d.pause(),
              stop: () => {
                if (s = !0, "idle" === d.playState) return;
                const {
                  currentTime: t
                } = d;
                if (t) {
                  const n = An({
                    ...i,
                    autoplay: !1
                  });
                  e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
                }
                m()
              },
              complete: () => d.finish(),
              cancel: m
            }
          }(t, e, d);
          if (n) return n
        }
        return An(d)
      };

      function Xn(e) {
        return Boolean(N(e) && e.add)
      }
      const Qn = e => /^\-?\d*\.?\d+$/.test(e);

      function Kn(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function Yn(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      class qn {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return Kn(this.subscriptions, e), () => Yn(this.subscriptions, e)
        }
        notify(e, t, n) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                const r = this.subscriptions[i];
                r && r(e, t, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
      const Jn = {
        current: void 0
      };
      class er {
        constructor(e, t = {}) {
          var n;
          this.version = "10.16.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: n,
              timestamp: r
            } = Me.frameData;
            this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, Me.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => Me.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: e
          }) => {
            e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = t.owner
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new qn);
          const n = this.events[e].add(t);
          return "change" === e ? () => {
            n(), Me.Wi.read((() => {
              this.events.change.getSize() || this.stop()
            }))
          } : n
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear()
        }
        attach(e, t) {
          this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e, t = !0) {
          t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, n) {
          this.set(t), this.prev = e, this.timeDelta = n
        }
        jump(e) {
          this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
          return Jn.current && Jn.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? cn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(e) {
          return this.stop(), new Promise((t => {
            this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.animation
        }
        clearAnimation() {
          delete this.animation
        }
        destroy() {
          this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }

      function tr(e, t) {
        return new er(e, t)
      }
      const nr = e => t => t.test(e),
        rr = [V, Y, K, Q, J, q, {
          test: e => "auto" === e,
          parse: e => e
        }],
        ir = e => rr.find(nr(e)),
        or = [...rr, Ft, Jt];

      function ar(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tr(n))
      }

      function sr(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function lr({
        protectedKeys: e,
        needsAnimating: t
      }, n) {
        const r = e.hasOwnProperty(n) && !0 !== t[n];
        return t[n] = !1, r
      }

      function ur(e, t, {
        delay: n = 0,
        transitionOverride: r,
        type: i
      } = {}) {
        let {
          transition: o = e.getDefaultTransition(),
          transitionEnd: a,
          ...s
        } = e.makeTargetAnimatable(t);
        const l = e.getValue("willChange");
        r && (o = r);
        const u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (const t in s) {
          const r = e.getValue(t),
            i = s[t];
          if (!r || void 0 === i || c && lr(c, t)) continue;
          const a = {
            delay: n,
            elapsed: 0,
            ...o
          };
          if (window.HandoffAppearAnimations && !r.hasAnimated) {
            const n = e.getProps()[st];
            n && (a.elapsed = window.HandoffAppearAnimations(n, t, r, Me.Wi), a.syncStart = !0)
          }
          r.start(Zn(t, r, i, e.shouldReduceMotion && _.has(t) ? {
            type: !1
          } : a));
          const f = r.animation;
          Xn(l) && (l.add(t), f.then((() => l.remove(t)))), u.push(f)
        }
        return a && Promise.all(u).then((() => {
          a && function(e, t) {
            const n = at(e, t);
            let {
              transitionEnd: r = {},
              transition: i = {},
              ...o
            } = n ? e.makeTargetAnimatable(n, !1) : {};
            o = {
              ...o,
              ...r
            };
            for (const t in o) ar(e, t, Ae(o[t]))
          }(e, a)
        })), u
      }

      function cr(e, t, n = {}) {
        const r = at(e, t, n.custom);
        let {
          transition: i = e.getDefaultTransition() || {}
        } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        const o = r ? () => Promise.all(ur(e, r, n)) : () => Promise.resolve(),
          a = e.variantChildren && e.variantChildren.size ? (r = 0) => {
            const {
              delayChildren: o = 0,
              staggerChildren: a,
              staggerDirection: s
            } = i;
            return function(e, t, n = 0, r = 0, i = 1, o) {
              const a = [],
                s = (e.variantChildren.size - 1) * r,
                l = 1 === i ? (e = 0) => e * r : (e = 0) => s - e * r;
              return Array.from(e.variantChildren).sort(fr).forEach(((e, r) => {
                e.notify("AnimationStart", t), a.push(cr(e, t, {
                  ...o,
                  delay: n + l(r)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(a)
            }(e, t, o + r, a, s, n)
          } : () => Promise.resolve(),
          {
            when: s
          } = i;
        if (s) {
          const [e, t] = "beforeChildren" === s ? [o, a] : [a, o];
          return e().then((() => t()))
        }
        return Promise.all([o(), a(n.delay)])
      }

      function fr(e, t) {
        return e.sortNodePosition(t)
      }
      const hr = [...h].reverse(),
        dr = h.length;

      function pr(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: n
          }) => function(e, t, n = {}) {
            let r;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const i = t.map((t => cr(e, t, n)));
              r = Promise.all(i)
            } else if ("string" == typeof t) r = cr(e, t, n);
            else {
              const i = "function" == typeof t ? at(e, t, n.custom) : t;
              r = Promise.all(ur(e, i, n))
            }
            return r.then((() => e.notify("AnimationComplete", t)))
          }(e, t, n))))
        }(e);
        const n = {
          animate: mr(!0),
          whileInView: mr(),
          whileHover: mr(),
          whileTap: mr(),
          whileDrag: mr(),
          whileFocus: mr(),
          exit: mr()
        };
        let r = !0;
        const i = (t, n) => {
          const r = at(e, n);
          if (r) {
            const {
              transition: e,
              transitionEnd: n,
              ...i
            } = r;
            t = {
              ...t,
              ...i,
              ...n
            }
          }
          return t
        };

        function o(o, a) {
          const s = e.getProps(),
            l = e.getVariantContext(!0) || {},
            u = [],
            h = new Set;
          let d = {},
            p = 1 / 0;
          for (let t = 0; t < dr; t++) {
            const v = hr[t],
              y = n[v],
              b = void 0 !== s[v] ? s[v] : l[v],
              E = c(b),
              w = v === a ? y.isActive : null;
            !1 === w && (p = t);
            let S = b === l[v] && b !== s[v] && E;
            if (S && r && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                ...d
              }, !y.isActive && null === w || !b && !y.prevProp || f(b) || "boolean" == typeof b) continue;
            const T = (m = y.prevProp, "string" == typeof(g = b) ? g !== m : !!Array.isArray(g) && !ot(g, m));
            let k = T || v === a && y.isActive && !S && E || t > p && E;
            const P = Array.isArray(b) ? b : [b];
            let x = P.reduce(i, {});
            !1 === w && (x = {});
            const {
              prevResolvedValues: C = {}
            } = y, L = {
              ...C,
              ...x
            }, A = e => {
              k = !0, h.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in L) {
              const t = x[e],
                n = C[e];
              d.hasOwnProperty(e) || (t !== n ? Ce(t) && Ce(n) ? !ot(t, n) || T ? A(e) : y.protectedKeys[e] = !0 : void 0 !== t ? A(e) : h.add(e) : void 0 !== t && h.has(e) ? A(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = b, y.prevResolvedValues = x, y.isActive && (d = {
              ...d,
              ...x
            }), r && e.blockInitialAnimation && (k = !1), k && !S && u.push(...P.map((e => ({
              animation: e,
              options: {
                type: v,
                ...o
              }
            }))))
          }
          var m, g;
          if (h.size) {
            const t = {};
            h.forEach((n => {
              const r = e.getBaseTarget(n);
              void 0 !== r && (t[n] = r)
            })), u.push({
              animation: t
            })
          }
          let v = Boolean(u.length);
          return r && !1 === s.initial && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(u) : Promise.resolve()
        }
        return {
          animateChanges: o,
          setActive: function(t, r, i) {
            var a;
            if (n[t].isActive === r) return Promise.resolve();
            null === (a = e.variantChildren) || void 0 === a || a.forEach((e => {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
            })), n[t].isActive = r;
            const s = o(i, t);
            for (const e in n) n[e].protectedKeys = {};
            return s
          },
          setAnimateFunction: function(n) {
            t = n(e)
          },
          getState: () => n
        }
      }

      function mr(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      let gr = 0;
      const vr = {
          animation: {
            Feature: class extends Xe {
              constructor(e) {
                super(e), e.animationState || (e.animationState = pr(e))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: e
                } = this.node.getProps();
                this.unmount(), f(e) && (this.unmount = e.subscribe(this.node))
              }
              mount() {
                this.updateAnimationControlsSubscription()
              }
              update() {
                const {
                  animate: e
                } = this.node.getProps(), {
                  animate: t
                } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription()
              }
              unmount() {}
            }
          },
          exit: {
            Feature: class extends Xe {
              constructor() {
                super(...arguments), this.id = gr++
              }
              update() {
                if (!this.node.presenceContext) return;
                const {
                  isPresent: e,
                  onExitComplete: t,
                  custom: n
                } = this.node.presenceContext, {
                  isPresent: r
                } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === r) return;
                const i = this.node.animationState.setActive("exit", !e, {
                  custom: null != n ? n : this.node.getProps().custom
                });
                t && !e && i.then((() => t(this.id)))
              }
              mount() {
                const {
                  register: e
                } = this.node.presenceContext || {};
                e && (this.unmount = e(this.id))
              }
              unmount() {}
            }
          }
        },
        yr = (e, t) => Math.abs(e - t);
      class br {
        constructor(e, t, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Sr(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n = function(e, t) {
                  const n = yr(e.x, t.x),
                    r = yr(e.y, t.y);
                  return Math.sqrt(n ** 2 + r ** 2)
                }(e.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!t && !n) return;
              const {
                point: r
              } = e, {
                timestamp: i
              } = Me.frameData;
              this.history.push({
                ...r,
                timestamp: i
              });
              const {
                onStart: o,
                onMove: a
              } = this.handlers;
              t || (o && o(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = Er(t, this.transformPagePoint), Me.Wi.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const {
                onEnd: n,
                onSessionEnd: r
              } = this.handlers, i = Sr("pointercancel" === e.type ? this.lastMoveEventInfo : Er(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, i), r && r(e, i)
            }, !Oe(e)) return;
          this.handlers = t, this.transformPagePoint = n;
          const r = Er(Fe(e), this.transformPagePoint),
            {
              point: i
            } = r,
            {
              timestamp: o
            } = Me.frameData;
          this.history = [{
            ...i,
            timestamp: o
          }];
          const {
            onSessionStart: a
          } = t;
          a && a(e, Sr(r, this.history)), this.removeListeners = ze(Ve(window, "pointermove", this.handlePointerMove), Ve(window, "pointerup", this.handlePointerUp), Ve(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, Me.Pn)(this.updatePoint)
        }
      }

      function Er(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function wr(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function Sr({
        point: e
      }, t) {
        return {
          point: e,
          delta: wr(e, kr(t)),
          offset: wr(e, Tr(t)),
          velocity: Pr(t, .1)
        }
      }

      function Tr(e) {
        return e[0]
      }

      function kr(e) {
        return e[e.length - 1]
      }

      function Pr(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let n = e.length - 1,
          r = null;
        const i = kr(e);
        for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > ut(t)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        const o = ct(i.timestamp - r.timestamp);
        if (0 === o) return {
          x: 0,
          y: 0
        };
        const a = {
          x: (i.x - r.x) / o,
          y: (i.y - r.y) / o
        };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }

      function xr(e) {
        return e.max - e.min
      }

      function Cr(e, t = 0, n = .01) {
        return Math.abs(e - t) <= n
      }

      function Lr(e, t, n, r = .5) {
        e.origin = r, e.originPoint = Ht(t.min, t.max, e.origin), e.scale = xr(n) / xr(t), (Cr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ht(n.min, n.max, e.origin) - e.originPoint, (Cr(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function Ar(e, t, n, r) {
        Lr(e.x, t.x, n.x, r ? r.originX : void 0), Lr(e.y, t.y, n.y, r ? r.originY : void 0)
      }

      function _r(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + xr(t)
      }

      function Rr(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + xr(t)
      }

      function Nr(e, t, n) {
        Rr(e.x, t.x, n.x), Rr(e.y, t.y, n.y)
      }

      function Mr(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function Dr(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
          min: n,
          max: r
        }
      }
      const Ir = .35;

      function Br(e, t, n) {
        return {
          min: Or(e, t),
          max: Or(e, n)
        }
      }

      function Or(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      const Fr = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        Hr = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function Vr(e) {
        return [e("x"), e("y")]
      }

      function Ur({
        top: e,
        left: t,
        right: n,
        bottom: r
      }) {
        return {
          x: {
            min: t,
            max: n
          },
          y: {
            min: e,
            max: r
          }
        }
      }

      function zr(e) {
        return void 0 === e || 1 === e
      }

      function jr({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !zr(e) || !zr(t) || !zr(n)
      }

      function Gr(e) {
        return jr(e) || Wr(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function Wr(e) {
        return $r(e.x) || $r(e.y)
      }

      function $r(e) {
        return e && "0%" !== e
      }

      function Zr(e, t, n) {
        return n + t * (e - n)
      }

      function Xr(e, t, n, r, i) {
        return void 0 !== i && (e = Zr(e, i, r)), Zr(e, n, r) + t
      }

      function Qr(e, t = 0, n = 1, r, i) {
        e.min = Xr(e.min, t, n, r, i), e.max = Xr(e.max, t, n, r, i)
      }

      function Kr(e, {
        x: t,
        y: n
      }) {
        Qr(e.x, t.translate, t.scale, t.originPoint), Qr(e.y, n.translate, n.scale, n.originPoint)
      }

      function Yr(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function qr(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function Jr(e, t, [n, r, i]) {
        const o = void 0 !== t[i] ? t[i] : .5,
          a = Ht(e.min, e.max, o);
        Qr(e, t[n], t[r], a, t.scale)
      }
      const ei = ["x", "scaleX", "originX"],
        ti = ["y", "scaleY", "originY"];

      function ni(e, t) {
        Jr(e.x, t, ei), Jr(e.y, t, ti)
      }

      function ri(e, t) {
        return Ur(function(e, t) {
          if (!t) return e;
          const n = t({
              x: e.left,
              y: e.top
            }),
            r = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
          }
        }(e.getBoundingClientRect(), t))
      }
      const ii = new WeakMap;
      class oi {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Hr(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          const {
            presenceContext: n
          } = this.visualElement;
          n && !1 === n.isPresent || (this.panSession = new br(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(Fe(e, "page").point)
            },
            onStart: (e, t) => {
              const {
                drag: n,
                dragPropagation: r,
                onDragStart: i
              } = this.getProps();
              if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = $e(n), !this.openGlobalLock)) return;
              this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Vr((e => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (K.test(t)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const r = n.layout.layoutBox[e];
                    r && (t = xr(r) * (parseFloat(t) / 100))
                  }
                }
                this.originPoint[e] = t
              })), i && Me.Wi.update((() => i(e, t)), !1, !0);
              const {
                animationState: o
              } = this.visualElement;
              o && o.setActive("whileDrag", !0)
            },
            onMove: (e, t) => {
              const {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: o
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: a
              } = t;
              if (r && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
                let n = null;
                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
              }(a), void(null !== this.currentDirection && i && i(this.currentDirection));
              this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), o && o(e, t)
            },
            onSessionEnd: (e, t) => this.stop(e, t)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(e, t) {
          const n = this.isDragging;
          if (this.cancel(), !n) return;
          const {
            velocity: r
          } = t;
          this.startAnimation(r);
          const {
            onDragEnd: i
          } = this.getProps();
          i && Me.Wi.update((() => i(e, t)))
        }
        cancel() {
          this.isDragging = !1;
          const {
            projection: e,
            animationState: t
          } = this.visualElement;
          e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
        }
        updateAxis(e, t, n) {
          const {
            drag: r
          } = this.getProps();
          if (!n || !ai(e, r, this.currentDirection)) return;
          const i = this.getAxisMotionValue(e);
          let o = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (o = function(e, {
            min: t,
            max: n
          }, r) {
            return void 0 !== t && e < t ? e = r ? Ht(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? Ht(n, e, r.max) : Math.min(e, n)), e
          }(o, this.constraints[e], this.elastic[e])), i.set(o)
        }
        resolveConstraints() {
          const {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, r = this.constraints;
          e && u(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !n) && function(e, {
            top: t,
            left: n,
            bottom: r,
            right: i
          }) {
            return {
              x: Mr(e.x, n, i),
              y: Mr(e.y, t, r)
            }
          }(n.layoutBox, e), this.elastic = function(e = Ir) {
            return !1 === e ? e = 0 : !0 === e && (e = Ir), {
              x: Br(e, "left", "right"),
              y: Br(e, "top", "bottom")
            }
          }(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Vr((e => {
            this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
              const n = {};
              return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
            }(n.layoutBox[e], this.constraints[e]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: e,
            onMeasureDragConstraints: t
          } = this.getProps();
          if (!e || !u(e)) return !1;
          const n = e.current;
          (0, lt.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: r
          } = this.visualElement;
          if (!r || !r.layout) return !1;
          const i = function(e, t, n) {
            const r = ri(e, n),
              {
                scroll: i
              } = t;
            return i && (qr(r.x, i.offset.x), qr(r.y, i.offset.y)), r
          }(n, r.root, this.visualElement.getTransformPagePoint());
          let o = function(e, t) {
            return {
              x: Dr(e.x, t.x),
              y: Dr(e.y, t.y)
            }
          }(r.layout.layoutBox, i);
          if (t) {
            const e = t(function({
              x: e,
              y: t
            }) {
              return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
              }
            }(o));
            this.hasMutatedConstraints = !!e, e && (o = Ur(e))
          }
          return o
        }
        startAnimation(e) {
          const {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
          } = this.getProps(), s = this.constraints || {}, l = Vr((a => {
            if (!ai(a, t, this.currentDirection)) return;
            let l = s && s[a] || {};
            o && (l = {
              min: 0,
              max: 0
            });
            const u = r ? 200 : 1e6,
              c = r ? 40 : 1e7,
              f = {
                type: "inertia",
                velocity: n ? e[a] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(a, f)
          }));
          return Promise.all(l).then(a)
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return n.start(Zn(e, n, 0, t))
        }
        stopAnimation() {
          Vr((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          const t = "_drag" + e.toUpperCase(),
            n = this.visualElement.getProps();
          return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
          Vr((t => {
            const {
              drag: n
            } = this.getProps();
            if (!ai(t, n, this.currentDirection)) return;
            const {
              projection: r
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              const {
                min: n,
                max: o
              } = r.layout.layoutBox[t];
              i.set(e[t] - Ht(n, o, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: t
          } = this.getProps(), {
            projection: n
          } = this.visualElement;
          if (!u(t) || !n || !this.constraints) return;
          this.stopAnimation();
          const r = {
            x: 0,
            y: 0
          };
          Vr((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const n = t.get();
              r[e] = function(e, t) {
                let n = .5;
                const r = xr(e),
                  i = xr(t);
                return i > r ? n = an(t.min, t.max - r, e.min) : r > i && (n = an(e.min, e.max - i, t.min)), H(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Vr((t => {
            if (!ai(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: i,
                max: o
              } = this.constraints[t];
            n.set(Ht(i, o, r[t]))
          }))
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ii.set(this.visualElement, this);
          const e = Ve(this.visualElement.current, "pointerdown", (e => {
              const {
                drag: t,
                dragListener: n = !0
              } = this.getProps();
              t && n && this.start(e)
            })),
            t = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              u(e) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: n
            } = this.visualElement,
            r = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), t();
          const i = Be(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = n.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (Vr((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            i(), e(), r(), o && o()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = Ir,
              dragMomentum: a = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a
          }
        }
      }

      function ai(e, t, n) {
        return !(!0 !== t && t !== e || null !== n && n !== e)
      }
      const si = e => (t, n) => {
          e && Me.Wi.update((() => e(t, n)))
        },
        li = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };

      function ui(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const ci = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!Y.test(e)) return e;
              e = parseFloat(e)
            }
            return `${ui(e,t.target.x)}% ${ui(e,t.target.y)}%`
          }
        },
        fi = {
          correct: (e, {
            treeScale: t,
            projectionDelta: n
          }) => {
            const r = e,
              i = Jt.parse(e);
            if (i.length > 5) return r;
            const o = Jt.createTransformer(e),
              a = "number" != typeof i[0] ? 1 : 0,
              s = n.x.scale * t.x,
              l = n.y.scale * t.y;
            i[0 + a] /= s, i[1 + a] /= l;
            const u = Ht(s, l, .5);
            return "number" == typeof i[2 + a] && (i[2 + a] /= u), "number" == typeof i[3 + a] && (i[3 + a] /= u), o(i)
          }
        };
      class hi extends r.Component {
        componentDidMount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: r
          } = this.props, {
            projection: i
          } = e;
          var o;
          o = pi, Object.assign(L, o), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), li.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: n,
            drag: r,
            isPresent: i
          } = this.props, o = n.projection;
          return o ? (o.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? o.promote() : o.relegate() || Me.Wi.postRender((() => {
            const e = o.getStack();
            e && e.members.length || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: e
          } = this.props.visualElement;
          e && (e.root.didUpdate(), queueMicrotask((() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
          })))
        }
        componentWillUnmount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n
          } = this.props, {
            projection: r
          } = e;
          r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
        }
        safeToRemove() {
          const {
            safeToRemove: e
          } = this.props;
          e && e()
        }
        render() {
          return null
        }
      }

      function di(e) {
        const [t, n] = function() {
          const e = (0, r.useContext)(a.O);
          if (null === e) return [!0, null];
          const {
            isPresent: t,
            onExitComplete: n,
            register: i
          } = e, o = (0, r.useId)();
          return (0, r.useEffect)((() => i(o)), []), !t && n ? [!1, () => n && n(o)] : [!0]
        }(), i = (0, r.useContext)(E.p);
        return r.createElement(hi, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, r.useContext)(w),
          isPresent: t,
          safeToRemove: n
        })
      }
      const pi = {
          borderRadius: {
            ...ci,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ci,
          borderTopRightRadius: ci,
          borderBottomLeftRadius: ci,
          borderBottomRightRadius: ci,
          boxShadow: fi
        },
        mi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        gi = mi.length,
        vi = e => "string" == typeof e ? parseFloat(e) : e,
        yi = e => "number" == typeof e || Y.test(e);

      function bi(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const Ei = Si(0, .5, Pt),
        wi = Si(.5, .95, Ye.Z);

      function Si(e, t, n) {
        return r => r < e ? 0 : r > t ? 1 : n(an(e, t, r))
      }

      function Ti(e, t) {
        e.min = t.min, e.max = t.max
      }

      function ki(e, t) {
        Ti(e.x, t.x), Ti(e.y, t.y)
      }

      function Pi(e, t, n, r, i) {
        return e = Zr(e -= t, 1 / n, r), void 0 !== i && (e = Zr(e, 1 / i, r)), e
      }

      function xi(e, t, [n, r, i], o, a) {
        ! function(e, t = 0, n = 1, r = .5, i, o = e, a = e) {
          if (K.test(t) && (t = parseFloat(t), t = Ht(a.min, a.max, t / 100) - a.min), "number" != typeof t) return;
          let s = Ht(o.min, o.max, r);
          e === o && (s -= t), e.min = Pi(e.min, t, n, s, i), e.max = Pi(e.max, t, n, s, i)
        }(e, t[n], t[r], t[i], t.scale, o, a)
      }
      const Ci = ["x", "scaleX", "originX"],
        Li = ["y", "scaleY", "originY"];

      function Ai(e, t, n, r) {
        xi(e.x, t, Ci, n ? n.x : void 0, r ? r.x : void 0), xi(e.y, t, Li, n ? n.y : void 0, r ? r.y : void 0)
      }

      function _i(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function Ri(e) {
        return _i(e.x) && _i(e.y)
      }

      function Ni(e, t) {
        return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
      }

      function Mi(e) {
        return xr(e.x) / xr(e.y)
      }
      class Di {
        constructor() {
          this.members = []
        }
        add(e) {
          Kn(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if (Yn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const e = this.members[this.members.length - 1];
            e && this.promote(e)
          }
        }
        relegate(e) {
          const t = this.members.findIndex((t => e === t));
          if (0 === t) return !1;
          let n;
          for (let e = t; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent) {
              n = t;
              break
            }
          }
          return !!n && (this.promote(n), !0)
        }
        promote(e, t) {
          const n = this.lead;
          if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
            n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
              crossfade: r
            } = e.options;
            !1 === r && n.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e => {
            const {
              options: t,
              resumingFrom: n
            } = e;
            t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
          }))
        }
        scheduleRender() {
          this.members.forEach((e => {
            e.instance && e.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function Ii(e, t, n) {
        let r = "";
        const i = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), 1 === t.x && 1 === t.y || (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
          const {
            rotate: e,
            rotateX: t,
            rotateY: i
          } = n;
          e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), i && (r += `rotateY(${i}deg) `)
        }
        const a = e.x.scale * t.x,
          s = e.y.scale * t.y;
        return 1 === a && 1 === s || (r += `scale(${a}, ${s})`), r || "none"
      }
      const Bi = (e, t) => e.depth - t.depth;
      class Oi {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          Kn(this.children, e), this.isDirty = !0
        }
        remove(e) {
          Yn(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Bi), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const Fi = ["", "X", "Y", "Z"];
      let Hi = 0;
      const Vi = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
      };

      function Ui({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i
      }) {
        return class {
          constructor(e = {}, n = (null == t ? void 0 : t())) {
            this.id = Hi++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              var e;
              Vi.totalNodes = Vi.resolvedTargetDeltas = Vi.recalculatedProjection = 0, this.nodes.forEach(Gi), this.nodes.forEach(Yi), this.nodes.forEach(qi), this.nodes.forEach(Wi), e = Vi, window.MotionDebug && window.MotionDebug.record(e)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Oi)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new qn), this.eventHandlers.get(e).add(t)
          }
          notifyListeners(e, ...t) {
            const n = this.eventHandlers.get(e);
            n && n.notify(...t)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            var r;
            this.isSVG = (r = t) instanceof SVGElement && "svg" !== r.tagName, this.instance = t;
            const {
              layoutId: i,
              layout: o,
              visualElement: a
            } = this.options;
            if (a && !a.current && a.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (o || i) && (this.isLayoutDirty = !0), e) {
              let n;
              const r = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) {
                  const n = performance.now(),
                    r = ({
                      timestamp: t
                    }) => {
                      const i = t - n;
                      i >= 250 && ((0, Me.Pn)(r), e(i - 250))
                    };
                  return Me.Wi.read(r, !0), () => (0, Me.Pn)(r)
                }(r), li.hasAnimatedSinceResize && (li.hasAnimatedSinceResize = !1, this.nodes.forEach(Ki))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && a && (i || o) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const i = this.options.transition || a.getDefaultTransition() || io,
                {
                  onLayoutAnimationStart: o,
                  onLayoutAnimationComplete: s
                } = a.getProps(),
                l = !this.targetLayout || !Ni(this.targetLayout, r) || n,
                u = !t && n;
              if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || t && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, u);
                const t = {
                  ...$n(i, "layout"),
                  onPlay: o,
                  onComplete: s
                };
                (a.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || Ki(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = r
            }))
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, Me.Pn)(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
          }
          startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ji), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: e
            } = this.options;
            return e && e.getProps().transformTemplate
          }
          willUpdate(e = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              const t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
            }
            const {
              layoutId: t,
              layout: n
            } = this.options;
            if (void 0 === t && !n) return;
            const r = this.getTransformTemplate();
            this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Zi);
            this.isUpdating || this.nodes.forEach(Xi), this.isUpdating = !1, this.nodes.forEach(Qi), this.nodes.forEach(zi), this.nodes.forEach(ji), this.clearAllSnapshots();
            const e = performance.now();
            Me.frameData.delta = H(0, 1e3 / 60, e - Me.frameData.timestamp), Me.frameData.timestamp = e, Me.frameData.isProcessing = !0, Me.S6.update.process(Me.frameData), Me.S6.preRender.process(Me.frameData), Me.S6.render.process(Me.frameData), Me.frameData.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
          }
          clearAllSnapshots() {
            this.nodes.forEach($i), this.sharedNodes.forEach(eo)
          }
          scheduleUpdateProjection() {
            Me.Wi.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Me.Wi.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Hr(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
              visualElement: t
            } = this.options;
            t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
          }
          updateScroll(e = "measure") {
            let t = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: r(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            if (!i) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !Ri(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              o = r !== this.prevTransformTemplateValue;
            e && (t || Gr(this.latestValues) || o) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var r;
            return e && (n = this.removeTransform(n)), so((r = n).x), so(r.y), {
              animationId: this.root.animationId,
              measuredBox: t,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return Hr();
            const t = e.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (qr(t.x, n.offset.x), qr(t.y, n.offset.y)), t
          }
          removeElementScroll(e) {
            const t = Hr();
            ki(t, e);
            for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n],
                {
                  scroll: i,
                  options: o
                } = r;
              if (r !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  ki(t, e);
                  const {
                    scroll: n
                  } = this.root;
                  n && (qr(t.x, -n.offset.x), qr(t.y, -n.offset.y))
                }
                qr(t.x, i.offset.x), qr(t.y, i.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const n = Hr();
            ki(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const r = this.path[e];
              !t && r.options.layoutScroll && r.scroll && r !== r.root && ni(n, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), Gr(r.latestValues) && ni(n, r.latestValues)
            }
            return Gr(this.latestValues) && ni(n, this.latestValues), n
          }
          removeTransform(e) {
            const t = Hr();
            ki(t, e);
            for (let e = 0; e < this.path.length; e++) {
              const n = this.path[e];
              if (!n.instance) continue;
              if (!Gr(n.latestValues)) continue;
              jr(n.latestValues) && n.updateSnapshot();
              const r = Hr();
              ki(r, n.measurePageBox()), Ai(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
            }
            return Gr(this.latestValues) && Ai(t, this.latestValues), t
          }
          setTargetDelta(e) {
            this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Me.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(e = !1) {
            var t;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const r = Boolean(this.resumingFrom) || this !== n;
            if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
            const {
              layout: i,
              layoutId: o
            } = this.options;
            if (this.layout && (i || o)) {
              if (this.resolvedRelativeTargetAt = Me.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Hr(), this.relativeTargetOrigin = Hr(), Nr(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), ki(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                var a, s, l;
                if (this.target || (this.target = Hr(), this.targetWithTransforms = Hr()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), a = this.target, s = this.relativeTarget, l = this.relativeParent.target, _r(a.x, s.x, l.x), _r(a.y, s.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : ki(this.target, this.layout.layoutBox), Kr(this.target, this.targetDelta)) : ki(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const e = this.getClosestProjectingParent();
                  e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Hr(), this.relativeTargetOrigin = Hr(), Nr(this.relativeTargetOrigin, this.target, e.target), ki(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                Vi.resolvedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !jr(this.parent.latestValues) && !Wr(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            var e;
            const t = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== t;
            let r = !0;
            if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === Me.frameData.timestamp && (r = !1), r) return;
            const {
              layout: i,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !o) return;
            ki(this.layoutCorrected, this.layout.layoutBox);
            const a = this.treeScale.x,
              s = this.treeScale.y;
            ! function(e, t, n, r = !1) {
              const i = n.length;
              if (!i) return;
              let o, a;
              t.x = t.y = 1;
              for (let s = 0; s < i; s++) {
                o = n[s], a = o.projectionDelta;
                const i = o.instance;
                i && i.style && "contents" === i.style.display || (r && o.options.layoutScroll && o.scroll && o !== o.root && ni(e, {
                  x: -o.scroll.offset.x,
                  y: -o.scroll.offset.y
                }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Kr(e, a)), r && Gr(o.latestValues) && ni(e, o.latestValues))
              }
              t.x = Yr(t.x), t.y = Yr(t.y)
            }(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox);
            const {
              target: l
            } = t;
            if (!l) return void(this.projectionTransform && (this.projectionDelta = Fr(), this.projectionTransform = "none", this.scheduleRender()));
            this.projectionDelta || (this.projectionDelta = Fr(), this.projectionDeltaWithTransform = Fr());
            const u = this.projectionTransform;
            Ar(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Ii(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), Vi.recalculatedProjection++
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), e) {
              const e = this.getStack();
              e && e.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, t = !1) {
            const n = this.snapshot,
              r = n ? n.latestValues : {},
              i = {
                ...this.latestValues
              },
              o = Fr();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
            const a = Hr(),
              s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              u = !l || l.members.length <= 1,
              c = Boolean(s && !u && !0 === this.options.crossfade && !this.path.some(ro));
            let f;
            this.animationProgress = 0, this.mixTargetDelta = t => {
              const n = t / 1e3;
              var l, h, d, p, m, g;
              to(o.x, e.x, n), to(o.y, e.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Nr(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), d = this.relativeTarget, p = this.relativeTargetOrigin, m = a, g = n, no(d.x, p.x, m.x, g), no(d.y, p.y, m.y, g), f && (l = this.relativeTarget, h = f, l.x.min === h.x.min && l.x.max === h.x.max && l.y.min === h.y.min && l.y.max === h.y.max) && (this.isProjectionDirty = !1), f || (f = Hr()), ki(f, this.relativeTarget)), s && (this.animationValues = i, function(e, t, n, r, i, o) {
                i ? (e.opacity = Ht(0, void 0 !== n.opacity ? n.opacity : 1, Ei(r)), e.opacityExit = Ht(void 0 !== t.opacity ? t.opacity : 1, 0, wi(r))) : o && (e.opacity = Ht(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                for (let i = 0; i < gi; i++) {
                  const o = `border${mi[i]}Radius`;
                  let a = bi(t, o),
                    s = bi(n, o);
                  void 0 === a && void 0 === s || (a || (a = 0), s || (s = 0), 0 === a || 0 === s || yi(a) === yi(s) ? (e[o] = Math.max(Ht(vi(a), vi(s), r), 0), (K.test(s) || K.test(a)) && (e[o] += "%")) : e[o] = s)
                }(t.rotate || n.rotate) && (e.rotate = Ht(t.rotate || 0, n.rotate || 0, r))
              }(i, r, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, Me.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Me.Wi.update((() => {
              li.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n) {
                const r = N(0) ? 0 : tr(0);
                return r.start(Zn("", r, 1e3, n)), r.animation
              }(0, 0, {
                ...e,
                onUpdate: t => {
                  this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                },
                onComplete: () => {
                  e.onComplete && e.onComplete(), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const e = this.getStack();
            e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const e = this.getLead();
            let {
              targetWithTransforms: t,
              target: n,
              layout: r,
              latestValues: i
            } = e;
            if (t && n && r) {
              if (this !== e && this.layout && r && lo(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                n = this.target || Hr();
                const t = xr(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                const r = xr(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + r
              }
              ki(t, n), ni(t, i), Ar(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Di), this.sharedNodes.get(e).add(t);
            const n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
            })
          }
          isLead() {
            const e = this.getStack();
            return !e || e.lead === this
          }
          getLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
          }
          getPrevLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n
          } = {}) {
            const r = this.getStack();
            r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
              transition: t
            })
          }
          relegate() {
            const e = this.getStack();
            return !!e && e.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1;
            const {
              latestValues: n
            } = e;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
            const r = {};
            for (let t = 0; t < Fi.length; t++) {
              const i = "rotate" + Fi[t];
              n[i] && (r[i] = n[i], e.setStaticValue(i, 0))
            }
            e.render();
            for (const t in r) e.setStaticValue(t, r[t]);
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var t, n;
            const r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            r.visibility = "";
            const i = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = _e(e.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r;
            const o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = _e(e.pointerEvents) || ""), this.hasProjected && !Gr(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t
            }
            const a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(), r.transform = Ii(this.projectionDeltaWithTransform, this.treeScale, a), i && (r.transform = i(a, r.transform));
            const {
              x: s,
              y: l
            } = this.projectionDelta;
            r.transformOrigin = `${100*s.origin}% ${100*l.origin}% 0`, o.animationValues ? r.opacity = o === this ? null !== (n = null !== (t = a.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const e in L) {
              if (void 0 === a[e]) continue;
              const {
                correct: t,
                applyTo: n
              } = L[e], i = "none" === r.transform ? a[e] : t(a[e], o);
              if (n) {
                const e = n.length;
                for (let t = 0; t < e; t++) r[n[t]] = i
              } else r[e] = i
            }
            return this.options.layoutId && (r.pointerEvents = o === this ? _e(e.pointerEvents) || "" : "none"), r
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(Zi), this.root.sharedNodes.clear()
          }
        }
      }

      function zi(e) {
        e.updateLayout()
      }

      function ji(e) {
        var t;
        const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: r
          } = e.layout, {
            animationType: i
          } = e.options, o = n.source !== e.layout.source;
          "size" === i ? Vr((e => {
            const r = o ? n.measuredBox[e] : n.layoutBox[e],
              i = xr(r);
            r.min = t[e].min, r.max = r.min + i
          })) : lo(i, n.layoutBox, t) && Vr((r => {
            const i = o ? n.measuredBox[r] : n.layoutBox[r],
              a = xr(t[r]);
            i.max = i.min + a, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + a)
          }));
          const a = Fr();
          Ar(a, t, n.layoutBox);
          const s = Fr();
          o ? Ar(s, e.applyTransform(r, !0), n.measuredBox) : Ar(s, t, n.layoutBox);
          const l = !Ri(a);
          let u = !1;
          if (!e.resumeFrom) {
            const r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              const {
                snapshot: i,
                layout: o
              } = r;
              if (i && o) {
                const a = Hr();
                Nr(a, n.layoutBox, i.layoutBox);
                const s = Hr();
                Nr(s, t, o.layoutBox), Ni(a, s) || (u = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = a, e.relativeParent = r)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else if (e.isLead()) {
          const {
            onExitComplete: t
          } = e.options;
          t && t()
        }
        e.options.transition = void 0
      }

      function Gi(e) {
        Vi.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
      }

      function Wi(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
      }

      function $i(e) {
        e.clearSnapshot()
      }

      function Zi(e) {
        e.clearMeasurements()
      }

      function Xi(e) {
        e.isLayoutDirty = !1
      }

      function Qi(e) {
        const {
          visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function Ki(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
      }

      function Yi(e) {
        e.resolveTargetDelta()
      }

      function qi(e) {
        e.calcProjection()
      }

      function Ji(e) {
        e.resetRotation()
      }

      function eo(e) {
        e.removeLeadSnapshot()
      }

      function to(e, t, n) {
        e.translate = Ht(t.translate, 0, n), e.scale = Ht(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function no(e, t, n, r) {
        e.min = Ht(t.min, n.min, r), e.max = Ht(t.max, n.max, r)
      }

      function ro(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const io = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        oo = e => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(e),
        ao = oo("applewebkit/") && !oo("chrome/") ? Math.round : Ye.Z;

      function so(e) {
        e.min = ao(e.min), e.max = ao(e.max)
      }

      function lo(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !Cr(Mi(t), Mi(n), .2)
      }
      const uo = Ui({
          attachResizeListener: (e, t) => Be(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        co = {
          current: void 0
        },
        fo = Ui({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!co.current) {
              const e = new uo({});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), co.current = e
            }
            return co.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        ho = {
          pan: {
            Feature: class extends Xe {
              constructor() {
                super(...arguments), this.removePointerDownListener = Ye.Z
              }
              onPointerDown(e) {
                this.session = new br(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint()
                })
              }
              createPanHandlers() {
                const {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: n,
                  onPanEnd: r
                } = this.node.getProps();
                return {
                  onSessionStart: si(e),
                  onStart: si(t),
                  onMove: n,
                  onEnd: (e, t) => {
                    delete this.session, r && Me.Wi.update((() => r(e, t)))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Ve(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
              }
              update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
              }
              unmount() {
                this.removePointerDownListener(), this.session && this.session.end()
              }
            }
          },
          drag: {
            Feature: class extends Xe {
              constructor(e) {
                super(e), this.removeGroupControls = Ye.Z, this.removeListeners = Ye.Z, this.controls = new oi(e)
              }
              mount() {
                const {
                  dragControls: e
                } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ye.Z
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners()
              }
            },
            ProjectionNode: fo,
            MeasureLayout: di
          }
        },
        po = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function mo(e, t, n = 1) {
        (0, lt.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [r, i] = function(e) {
          const t = po.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        }(e);
        if (!r) return;
        const o = window.getComputedStyle(t).getPropertyValue(r);
        if (o) {
          const e = o.trim();
          return Qn(e) ? parseFloat(e) : e
        }
        return O(i) ? mo(i, t, n + 1) : i
      }
      const go = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        vo = e => go.has(e),
        yo = e => e === V || e === Y,
        bo = (e, t) => parseFloat(e.split(", ")[t]),
        Eo = (e, t) => (n, {
          transform: r
        }) => {
          if ("none" === r || !r) return 0;
          const i = r.match(/^matrix3d\((.+)\)$/);
          if (i) return bo(i[1], t); {
            const t = r.match(/^matrix\((.+)\)$/);
            return t ? bo(t[1], e) : 0
          }
        },
        wo = new Set(["x", "y", "z"]),
        So = A.filter((e => !wo.has(e))),
        To = {
          width: ({
            x: e
          }, {
            paddingLeft: t = "0",
            paddingRight: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({
            y: e
          }, {
            paddingTop: t = "0",
            paddingBottom: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, {
            top: t
          }) => parseFloat(t),
          left: (e, {
            left: t
          }) => parseFloat(t),
          bottom: ({
            y: e
          }, {
            top: t
          }) => parseFloat(t) + (e.max - e.min),
          right: ({
            x: e
          }, {
            left: t
          }) => parseFloat(t) + (e.max - e.min),
          x: Eo(4, 13),
          y: Eo(5, 14)
        };
      To.translateX = To.x, To.translateY = To.y;

      function ko(e, t, n, r) {
        return (e => Object.keys(e).some(vo))(t) ? ((e, t, n = {}, r = {}) => {
          t = {
            ...t
          }, r = {
            ...r
          };
          const i = Object.keys(t).filter(vo);
          let o = [],
            a = !1;
          const s = [];
          if (i.forEach((i => {
              const l = e.getValue(i);
              if (!e.hasValue(i)) return;
              let u = n[i],
                c = ir(u);
              const f = t[i];
              let h;
              if (Ce(f)) {
                const e = f.length,
                  t = null === f[0] ? 1 : 0;
                u = f[t], c = ir(u);
                for (let n = t; n < e && null !== f[n]; n++) h ? (0, lt.k)(ir(f[n]) === h, "All keyframes must be of the same type") : (h = ir(f[n]), (0, lt.k)(h === c || yo(c) && yo(h), "Keyframes must be of the same dimension as the current value"))
              } else h = ir(f);
              if (c !== h)
                if (yo(c) && yo(h)) {
                  const e = l.get();
                  "string" == typeof e && l.set(parseFloat(e)), "string" == typeof f ? t[i] = parseFloat(f) : Array.isArray(f) && h === Y && (t[i] = f.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == h ? void 0 : h.transform) && (0 === u || 0 === f) ? 0 === u ? l.set(h.transform(u)) : t[i] = c.transform(f) : (a || (o = function(e) {
                  const t = [];
                  return So.forEach((n => {
                    const r = e.getValue(n);
                    void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), a = !0), s.push(i), r[i] = void 0 !== r[i] ? r[i] : t[i], l.jump(f))
            })), s.length) {
            const n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((e, t, n) => {
                const r = t.measureViewportBox(),
                  i = t.current,
                  o = getComputedStyle(i),
                  {
                    display: a
                  } = o,
                  s = {};
                "none" === a && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
                  s[e] = To[e](r, o)
                })), t.render();
                const l = t.measureViewportBox();
                return n.forEach((n => {
                  const r = t.getValue(n);
                  r && r.jump(s[n]), e[n] = To[n](l, o)
                })), e
              })(t, e, s);
            return o.length && o.forEach((([t, n]) => {
              e.getValue(t).set(n)
            })), e.render(), b.j && null !== n && window.scrollTo({
              top: n
            }), {
              target: i,
              transitionEnd: r
            }
          }
          return {
            target: t,
            transitionEnd: r
          }
        })(e, t, n, r) : {
          target: t,
          transitionEnd: r
        }
      }
      const Po = {
          current: null
        },
        xo = {
          current: !1
        },
        Co = new WeakMap,
        Lo = Object.keys(y),
        Ao = Lo.length,
        _o = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        Ro = d.length;
      class No {
        constructor({
          parent: e,
          props: t,
          presenceContext: n,
          reducedMotionConfig: r,
          visualState: i
        }, o = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Me.Wi.render(this.render, !1, !0);
          const {
            latestValues: a,
            renderState: s
          } = i;
          this.latestValues = a, this.baseTarget = {
            ...a
          }, this.initialValues = t.initial ? {
            ...a
          } : {}, this.renderState = s, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.isControllingVariants = p(t), this.isVariantNode = m(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: l,
            ...u
          } = this.scrapeMotionValuesFromProps(t, {});
          for (const e in u) {
            const t = u[e];
            void 0 !== a[e] && N(t) && (t.set(a[e], !1), Xn(l) && l.add(e))
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {}
        }
        mount(e) {
          this.current = e, Co.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), xo.current || function() {
            if (xo.current = !0, b.j)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => Po.current = e.matches;
                e.addListener(t), t()
              } else Po.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Po.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          Co.delete(this.current), this.projection && this.projection.unmount(), (0, Me.Pn)(this.notifyUpdate), (0, Me.Pn)(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          for (const e in this.features) this.features[e].unmount();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const n = _.has(e),
            r = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && Me.Wi.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, (() => {
            r(), i()
          }))
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        loadFeatures({
          children: e,
          ...t
        }, n, r, i) {
          let o, a;
          for (let e = 0; e < Ao; e++) {
            const n = Lo[e],
              {
                isEnabled: r,
                Feature: i,
                ProjectionNode: s,
                MeasureLayout: l
              } = y[n];
            s && (o = s), r(t) && (!this.features[n] && i && (this.features[n] = new i(this)), l && (a = l))
          }
          if (!this.projection && o) {
            this.projection = new o(this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: n,
              drag: r,
              dragConstraints: a,
              layoutScroll: s,
              layoutRoot: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(r) || a && u(a),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: i,
              layoutScroll: s,
              layoutRoot: l
            })
          }
          return a
        }
        updateFeatures() {
          for (const e in this.features) {
            const t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Hr()
        }
        getStaticValue(e) {
          return this.latestValues[e]
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t)
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
          for (let t = 0; t < _o.length; t++) {
            const n = _o[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r))
          }
          this.prevMotionValues = function(e, t, n) {
            const {
              willChange: r
            } = t;
            for (const i in t) {
              const o = t[i],
                a = n[i];
              if (N(o)) e.addValue(i, o), Xn(r) && r.add(i);
              else if (N(a)) e.addValue(i, tr(o, {
                owner: e
              })), Xn(r) && r.remove(i);
              else if (a !== o)
                if (e.hasValue(i)) {
                  const t = e.getValue(i);
                  !t.hasAnimated && t.set(o)
                } else {
                  const t = e.getStaticValue(i);
                  e.addValue(i, tr(void 0 !== t ? t : o, {
                    owner: e
                  }))
                }
            }
            for (const r in n) void 0 === t[r] && e.removeValue(r);
            return t
          }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            const e = this.parent && this.parent.getVariantContext() || {};
            return void 0 !== this.props.initial && (e.initial = this.props.initial), e
          }
          const t = {};
          for (let e = 0; e < Ro; e++) {
            const n = d[e],
              r = this.props[n];
            (c(r) || !1 === r) && (t[n] = r)
          }
          return t
        }
        addVariantChild(e) {
          const t = this.getClosestVariantNode();
          if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
          t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
        }
        removeValue(e) {
          this.values.delete(e);
          const t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return void 0 === n && void 0 !== t && (n = tr(t, {
            owner: this
          }), this.addValue(e, n)), n
        }
        readValue(e) {
          var t;
          return void 0 === this.latestValues[e] && this.current ? null !== (t = this.getBaseTargetFromProps(this.props, e)) && void 0 !== t ? t : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t
        }
        getBaseTarget(e) {
          var t;
          const {
            initial: n
          } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = Pe(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
          if (n && void 0 !== r) return r;
          const i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || N(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new qn), this.events[e].add(t)
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t)
        }
      }
      class Mo extends No {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0
        }
        removeValueFromRenderState(e, {
          vars: t,
          style: n
        }) {
          delete t[e], delete n[e]
        }
        makeTargetAnimatableFromInstance({
          transition: e,
          transitionEnd: t,
          ...n
        }, {
          transformValues: r
        }, i) {
          let o = function(e, t, n) {
            const r = {};
            for (const i in e) {
              const e = sr(i, t);
              if (void 0 !== e) r[i] = e;
              else {
                const e = n.getValue(i);
                e && (r[i] = e.get())
              }
            }
            return r
          }(n, e || {}, this);
          if (r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i) {
            ! function(e, t, n) {
              var r, i;
              const o = Object.keys(t).filter((t => !e.hasValue(t))),
                a = o.length;
              var s;
              if (a)
                for (let l = 0; l < a; l++) {
                  const a = o[l],
                    u = t[a];
                  let c = null;
                  Array.isArray(u) && (c = u[0]), null === c && (c = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : e.readValue(a)) && void 0 !== i ? i : t[a]), null != c && ("string" == typeof c && (Qn(c) || Gn(c)) ? c = parseFloat(c) : (s = c, !or.find(nr(s)) && Jt.test(u) && (c = jn(a, u))), e.addValue(a, tr(c, {
                    owner: e
                  })), void 0 === n[a] && (n[a] = c), null !== c && e.setBaseTarget(a, c))
                }
            }(this, n, o);
            const e = ((e, t, n, r) => {
              const i = function(e, {
                ...t
              }, n) {
                const r = e.current;
                if (!(r instanceof Element)) return {
                  target: t,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), e.values.forEach((e => {
                  const t = e.get();
                  if (!O(t)) return;
                  const n = mo(t, r);
                  n && e.set(n)
                }));
                for (const e in t) {
                  const i = t[e];
                  if (!O(i)) continue;
                  const o = mo(i, r);
                  o && (t[e] = o, n || (n = {}), void 0 === n[e] && (n[e] = i))
                }
                return {
                  target: t,
                  transitionEnd: n
                }
              }(e, t, r);
              return ko(e, t = i.target, n, r = i.transitionEnd)
            })(this, n, o, t);
            t = e.transitionEnd, n = e.target
          }
          return {
            transition: e,
            transitionEnd: t,
            ...n
          }
        }
      }
      class Do extends Mo {
        readValueFromInstance(e, t) {
          if (_.has(t)) {
            const e = zn(t);
            return e && e.default || 0
          } {
            const r = (n = e, window.getComputedStyle(n)),
              i = (B(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var n
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return ri(e, t)
        }
        build(e, t, n, r) {
          re(e, t, n, r.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t) {
          return Te(e, t)
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: e
          } = this.props;
          N(e) && (this.childSubscription = e.on("change", (e => {
            this.current && (this.current.textContent = `${e}`)
          })))
        }
        renderInstance(e, t, n, r) {
          Ee(e, t, n, r)
        }
      }
      class Io extends Mo {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          if (_.has(t)) {
            const e = zn(t);
            return e && e.default || 0
          }
          return t = we.has(t) ? t : be(t), e.getAttribute(t)
        }
        measureInstanceViewportBox() {
          return Hr()
        }
        scrapeMotionValuesFromProps(e, t) {
          return ke(e, t)
        }
        build(e, t, n, r) {
          pe(e, t, n, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(e, t, n, r) {
          Se(e, t, 0, r)
        }
        mount(e) {
          this.isSVGTag = ge(e.tagName), super.mount(e)
        }
      }
      const Bo = (e, t) => C(e) ? new Io(t, {
          enableHardwareAcceleration: !1
        }) : new Do(t, {
          enableHardwareAcceleration: !0
        }),
        Oo = {
          ...vr,
          ...it,
          ...ho,
          layout: {
            ProjectionNode: fo,
            MeasureLayout: di
          }
        },
        Fo = P(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, n, r) {
          return {
            ...C(e) ? De : Ie,
            preloadedFeatures: n,
            useRender: ye(t),
            createVisualElement: r,
            Component: e
          }
        }(e, t, Oo, Bo)))
    },
    3086: (e, t, n) => {
      n.d(t, {
        K: () => i,
        k: () => o
      });
      var r = n(3907);
      let i = r.Z,
        o = r.Z
    },
    180: (e, t, n) => {
      n.d(t, {
        j: () => r
      });
      const r = "undefined" != typeof document
    },
    3907: (e, t, n) => {
      n.d(t, {
        Z: () => r
      });
      const r = e => e
    },
    5797: (e, t, n) => {
      n.d(t, {
        h: () => i
      });
      var r = n(279);

      function i(e) {
        const t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
    },
    1782: (e, t, n) => {
      n.d(t, {
        L: () => i
      });
      var r = n(279);
      const i = n(180).j ? r.useLayoutEffect : r.useEffect
    },
    6809: (e, t, n) => {
      n.d(t, {
        YD: () => u
      });
      var r = n(279),
        i = (Object.defineProperty, new Map),
        o = new WeakMap,
        a = 0,
        s = void 0;

      function l(e, t, n = {}, r = s) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          const i = e.getBoundingClientRect();
          return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: l,
          observer: u,
          elements: c
        } = function(e) {
          let t = function(e) {
              return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root"===t?(n=e.root,n?(o.has(n)||(a+=1,o.set(n,a.toString())),o.get(n)):"0"):e[t]}`;
                var n
              })).toString()
            }(e),
            n = i.get(t);
          if (!n) {
            const r = new Map;
            let o;
            const a = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const i = t.isIntersecting && o.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (n = r.get(t.target)) || n.forEach((e => {
                  e(i, t)
                }))
              }))
            }), e);
            o = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
              id: t,
              observer: a,
              elements: r
            }, i.set(t, n)
          }
          return n
        }(n);
        let f = c.get(e) || [];
        return c.has(e) || c.set(e, f), f.push(t), u.observe(e),
          function() {
            f.splice(f.indexOf(t), 1), 0 === f.length && (c.delete(e), u.unobserve(e)), 0 === c.size && (u.disconnect(), i.delete(l))
          }
      }

      function u({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: i,
        root: o,
        triggerOnce: a,
        skip: s,
        initialInView: u,
        fallbackInView: c,
        onChange: f
      } = {}) {
        var h;
        const [d, p] = r.useState(null), m = r.useRef(), [g, v] = r.useState({
          inView: !!u,
          entry: void 0
        });
        m.current = f, r.useEffect((() => {
          if (s || !d) return;
          let r;
          return r = l(d, ((e, t) => {
            v({
              inView: e,
              entry: t
            }), m.current && m.current(e, t), t.isIntersecting && a && r && (r(), r = void 0)
          }), {
            root: o,
            rootMargin: i,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, c), () => {
            r && r()
          }
        }), [Array.isArray(e) ? e.toString() : e, d, o, i, a, s, n, c, t]);
        const y = null == (h = g.entry) ? void 0 : h.target,
          b = r.useRef();
        d || !y || a || s || b.current === y || (b.current = y, v({
          inView: !!u,
          entry: void 0
        }));
        const E = [p, g.inView, g.entry];
        return E.ref = E[0], E.inView = E[1], E.entry = E[2], E
      }
      r.Component
    },
    8254: (e, t, n) => {
      n.d(t, {
        ZT: () => i,
        _T: () => a,
        ev: () => s,
        pi: () => o
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, o.apply(this, arguments)
      };

      function a(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
      }

      function s(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);