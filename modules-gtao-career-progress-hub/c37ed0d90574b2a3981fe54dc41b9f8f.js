/*! For license information please see c37ed0d90574b2a3981fe54dc41b9f8f.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [674], {
    4215: (e, t, n) => {
      "use strict";
      var r = n(927),
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
        d = Object.prototype.hasOwnProperty,
        f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = {},
        h = {};

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
          return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1))
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
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        x = Symbol.for("react.element"),
        _ = Symbol.for("react.portal"),
        S = Symbol.for("react.fragment"),
        k = Symbol.for("react.strict_mode"),
        T = Symbol.for("react.profiler"),
        E = Symbol.for("react.provider"),
        C = Symbol.for("react.context"),
        P = Symbol.for("react.forward_ref"),
        M = Symbol.for("react.suspense"),
        O = Symbol.for("react.suspense_list"),
        A = Symbol.for("react.memo"),
        L = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      var D = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
      var z = Symbol.iterator;

      function N(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = z && e[z] || e["@@iterator"]) ? e : null
      }
      var R, V = Object.assign;

      function I(e) {
        if (void 0 === R) try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          R = t && t[1] || ""
        }
        return "\n" + R + e
      }
      var F = !1;

      function B(e, t) {
        if (!e || F) return "";
        F = !0;
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
          F = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? I(e) : ""
      }

      function j(e) {
        switch (e.tag) {
          case 5:
            return I(e.type);
          case 16:
            return I("Lazy");
          case 13:
            return I("Suspense");
          case 19:
            return I("SuspenseList");
          case 0:
          case 2:
          case 15:
            return B(e.type, !1);
          case 11:
            return B(e.type.render, !1);
          case 1:
            return B(e.type, !0);
          default:
            return ""
        }
      }

      function $(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case S:
            return "Fragment";
          case _:
            return "Portal";
          case T:
            return "Profiler";
          case k:
            return "StrictMode";
          case M:
            return "Suspense";
          case O:
            return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
          case C:
            return (e.displayName || "Context") + ".Consumer";
          case E:
            return (e._context.displayName || "Context") + ".Provider";
          case P:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case A:
            return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
          case L:
            t = e._payload, e = e._init;
            try {
              return $(e(t))
            } catch (e) {}
        }
        return null
      }

      function U(e) {
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
            return $(t);
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

      function H(e) {
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

      function G(e) {
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

      function Y(e) {
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

      function q(e, t) {
        var n = t.checked;
        return V({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        })
      }

      function Q(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        n = H(null != t.value ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
      }

      function K(e, t) {
        null != (t = t.checked) && b(e, "checked", t, !1)
      }

      function Z(e, t) {
        K(e, t);
        var n = H(t.value),
          r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
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
          for (n = "" + H(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
            null !== t || e[i].disabled || (t = e[i])
          }
          null !== t && (t.selected = !0)
        }
      }

      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return V({}, t, {
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
          initialValue: H(n)
        }
      }

      function oe(e, t) {
        var n = H(t.value),
          r = H(t.defaultValue);
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
      var ue, ce, de = (ce = function(e, t) {
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

      function fe(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
      }
      var pe = {
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
        he = ["Webkit", "ms", "Moz", "O"];

      function me(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
      }

      function ge(e, t) {
        for (var n in e = e.style, t)
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              i = me(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
          }
      }
      Object.keys(pe).forEach((function(e) {
        he.forEach((function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
        }))
      }));
      var ve = V({
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
      var we = null;

      function xe(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
      }
      var _e = null,
        Se = null,
        ke = null;

      function Te(e) {
        if (e = yi(e)) {
          if ("function" != typeof _e) throw Error(o(280));
          var t = e.stateNode;
          t && (t = wi(t), _e(e.stateNode, e.type, t))
        }
      }

      function Ee(e) {
        Se ? ke ? ke.push(e) : ke = [e] : Se = e
      }

      function Ce() {
        if (Se) {
          var e = Se,
            t = ke;
          if (ke = Se = null, Te(e), t)
            for (e = 0; e < t.length; e++) Te(t[e])
        }
      }

      function Pe(e, t) {
        return e(t)
      }

      function Me() {}
      var Oe = !1;

      function Ae(e, t, n) {
        if (Oe) return e(t, n);
        Oe = !0;
        try {
          return Pe(e, t, n)
        } finally {
          Oe = !1, (null !== Se || null !== ke) && (Me(), Ce())
        }
      }

      function Le(e, t) {
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
      var De = !1;
      if (c) try {
        var ze = {};
        Object.defineProperty(ze, "passive", {
          get: function() {
            De = !0
          }
        }), window.addEventListener("test", ze, ze), window.removeEventListener("test", ze, ze)
      } catch (ce) {
        De = !1
      }

      function Ne(e, t, n, r, i, o, a, s, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u)
        } catch (e) {
          this.onError(e)
        }
      }
      var Re = !1,
        Ve = null,
        Ie = !1,
        Fe = null,
        Be = {
          onError: function(e) {
            Re = !0, Ve = e
          }
        };

      function je(e, t, n, r, i, o, a, s, l) {
        Re = !1, Ve = null, Ne.apply(Be, arguments)
      }

      function $e(e) {
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

      function Ue(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
        }
        return null
      }

      function He(e) {
        if ($e(e) !== e) throw Error(o(188))
      }

      function We(e) {
        return null !== (e = function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = $e(e))) throw Error(o(188));
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
                if (a === n) return He(i), e;
                if (a === r) return He(i), t;
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
        }(e)) ? Ge(e) : null
      }

      function Ge(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e;) {
          var t = Ge(e);
          if (null !== t) return t;
          e = e.sibling
        }
        return null
      }
      var Ye = i.unstable_scheduleCallback,
        Xe = i.unstable_cancelCallback,
        qe = i.unstable_shouldYield,
        Qe = i.unstable_requestPaint,
        Ke = i.unstable_now,
        Ze = i.unstable_getCurrentPriorityLevel,
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

      function dt(e) {
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

      function ft(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
          i = e.suspendedLanes,
          o = e.pingedLanes,
          a = 268435455 & n;
        if (0 !== a) {
          var s = a & ~i;
          0 !== s ? r = dt(s) : 0 != (o &= a) && (r = dt(o))
        } else 0 != (a = n & ~i) ? r = dt(a) : 0 !== o && (r = dt(o));
        if (0 === r) return 0;
        if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || 16 === i && 0 != (4194240 & o))) return t;
        if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - at(t)), r |= e[n], t &= ~i;
        return r
      }

      function pt(e, t) {
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

      function ht(e) {
        return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
      }

      function mt() {
        var e = ut;
        return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e
      }

      function gt(e, t, n) {
        e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n
      }

      function vt(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
          var r = 31 - at(n),
            i = 1 << r;
          i & t | e[r] & t && (e[r] |= t), n &= ~i
        }
      }
      var yt = 0;

      function bt(e) {
        return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
      }
      var wt, xt, _t, St, kt, Tt = !1,
        Et = [],
        Ct = null,
        Pt = null,
        Mt = null,
        Ot = new Map,
        At = new Map,
        Lt = [],
        Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

      function zt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Ct = null;
            break;
          case "dragenter":
          case "dragleave":
            Pt = null;
            break;
          case "mouseover":
          case "mouseout":
            Mt = null;
            break;
          case "pointerover":
          case "pointerout":
            Ot.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            At.delete(t.pointerId)
        }
      }

      function Nt(e, t, n, r, i, o) {
        return null === e || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i]
        }, null !== t && null !== (t = yi(t)) && xt(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
      }

      function Rt(e) {
        var t = vi(e.target);
        if (null !== t) {
          var n = $e(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ue(n))) return e.blockedOn = t, void kt(e.priority, (function() {
                _t(n)
              }))
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
      }

      function Vt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = yi(n)) && xt(t), e.blockedOn = n, !1;
          var r = new(n = e.nativeEvent).constructor(n.type, n);
          we = r, n.target.dispatchEvent(r), we = null, t.shift()
        }
        return !0
      }

      function It(e, t, n) {
        Vt(e) && n.delete(t)
      }

      function Ft() {
        Tt = !1, null !== Ct && Vt(Ct) && (Ct = null), null !== Pt && Vt(Pt) && (Pt = null), null !== Mt && Vt(Mt) && (Mt = null), Ot.forEach(It), At.forEach(It)
      }

      function Bt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Tt || (Tt = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Ft)))
      }

      function jt(e) {
        function t(t) {
          return Bt(t, e)
        }
        if (0 < Et.length) {
          Bt(Et[0], e);
          for (var n = 1; n < Et.length; n++) {
            var r = Et[n];
            r.blockedOn === e && (r.blockedOn = null)
          }
        }
        for (null !== Ct && Bt(Ct, e), null !== Pt && Bt(Pt, e), null !== Mt && Bt(Mt, e), Ot.forEach(t), At.forEach(t), n = 0; n < Lt.length; n++)(r = Lt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn;) Rt(n), null === n.blockedOn && Lt.shift()
      }
      var $t = w.ReactCurrentBatchConfig,
        Ut = !0;

      function Ht(e, t, n, r) {
        var i = yt,
          o = $t.transition;
        $t.transition = null;
        try {
          yt = 1, Gt(e, t, n, r)
        } finally {
          yt = i, $t.transition = o
        }
      }

      function Wt(e, t, n, r) {
        var i = yt,
          o = $t.transition;
        $t.transition = null;
        try {
          yt = 4, Gt(e, t, n, r)
        } finally {
          yt = i, $t.transition = o
        }
      }

      function Gt(e, t, n, r) {
        if (Ut) {
          var i = Xt(e, t, n, r);
          if (null === i) Ur(e, t, r, Yt, n), zt(e, r);
          else if (function(e, t, n, r, i) {
              switch (t) {
                case "focusin":
                  return Ct = Nt(Ct, e, t, n, r, i), !0;
                case "dragenter":
                  return Pt = Nt(Pt, e, t, n, r, i), !0;
                case "mouseover":
                  return Mt = Nt(Mt, e, t, n, r, i), !0;
                case "pointerover":
                  var o = i.pointerId;
                  return Ot.set(o, Nt(Ot.get(o) || null, e, t, n, r, i)), !0;
                case "gotpointercapture":
                  return o = i.pointerId, At.set(o, Nt(At.get(o) || null, e, t, n, r, i)), !0
              }
              return !1
            }(i, e, t, n, r)) r.stopPropagation();
          else if (zt(e, r), 4 & t && -1 < Dt.indexOf(e)) {
            for (; null !== i;) {
              var o = yi(i);
              if (null !== o && wt(o), null === (o = Xt(e, t, n, r)) && Ur(e, t, r, Yt, n), o === i) break;
              i = o
            }
            null !== i && r.stopPropagation()
          } else Ur(e, t, r, null, n)
        }
      }
      var Yt = null;

      function Xt(e, t, n, r) {
        if (Yt = null, null !== (e = vi(e = xe(r))))
          if (null === (t = $e(e))) e = null;
          else if (13 === (n = t.tag)) {
          if (null !== (e = Ue(t))) return e;
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null);
        return Yt = e, null
      }

      function qt(e) {
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
            switch (Ze()) {
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
      var Qt = null,
        Kt = null,
        Zt = null;

      function Jt() {
        if (Zt) return Zt;
        var e, t, n = Kt,
          r = n.length,
          i = "value" in Qt ? Qt.value : Qt.textContent,
          o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
        return Zt = i.slice(e, 1 < t ? 1 - t : void 0)
      }

      function en(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }

      function tn() {
        return !0
      }

      function nn() {
        return !1
      }

      function rn(e) {
        function t(t, n, r, i, o) {
          for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(i) : i[a]);
          return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? tn : nn, this.isPropagationStopped = nn, this
        }
        return V(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = tn)
          },
          stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = tn)
          },
          persist: function() {},
          isPersistent: tn
        }), t
      }
      var on, an, sn, ln = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        un = rn(ln),
        cn = V({}, ln, {
          view: 0,
          detail: 0
        }),
        dn = rn(cn),
        fn = V({}, cn, {
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
          getModifierState: kn,
          button: 0,
          buttons: 0,
          relatedTarget: function(e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
          },
          movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (on = e.screenX - sn.screenX, an = e.screenY - sn.screenY) : an = on = 0, sn = e), on)
          },
          movementY: function(e) {
            return "movementY" in e ? e.movementY : an
          }
        }),
        pn = rn(fn),
        hn = rn(V({}, fn, {
          dataTransfer: 0
        })),
        mn = rn(V({}, cn, {
          relatedTarget: 0
        })),
        gn = rn(V({}, ln, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        })),
        vn = V({}, ln, {
          clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
          }
        }),
        yn = rn(vn),
        bn = rn(V({}, ln, {
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
        xn = {
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
        _n = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };

      function Sn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e]
      }

      function kn() {
        return Sn
      }
      var Tn = V({}, cn, {
          key: function(e) {
            if (e.key) {
              var t = wn[e.key] || e.key;
              if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = en(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? xn[e.keyCode] || "Unidentified" : ""
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: kn,
          charCode: function(e) {
            return "keypress" === e.type ? en(e) : 0
          },
          keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
          },
          which: function(e) {
            return "keypress" === e.type ? en(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
          }
        }),
        En = rn(Tn),
        Cn = rn(V({}, fn, {
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
        Pn = rn(V({}, cn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: kn
        })),
        Mn = rn(V({}, ln, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        })),
        On = V({}, fn, {
          deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
          },
          deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
          },
          deltaZ: 0,
          deltaMode: 0
        }),
        An = rn(On),
        Ln = [9, 13, 27, 32],
        Dn = c && "CompositionEvent" in window,
        zn = null;
      c && "documentMode" in document && (zn = document.documentMode);
      var Nn = c && "TextEvent" in window && !zn,
        Rn = c && (!Dn || zn && 8 < zn && 11 >= zn),
        Vn = String.fromCharCode(32),
        In = !1;

      function Fn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Ln.indexOf(t.keyCode);
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

      function Bn(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
      }
      var jn = !1,
        $n = {
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

      function Un(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!$n[e.type] : "textarea" === t
      }

      function Hn(e, t, n, r) {
        Ee(r), 0 < (t = Wr(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }))
      }
      var Wn = null,
        Gn = null;

      function Yn(e) {
        Vr(e, 0)
      }

      function Xn(e) {
        if (Y(bi(e))) return e
      }

      function qn(e, t) {
        if ("change" === e) return t
      }
      var Qn = !1;
      if (c) {
        var Kn;
        if (c) {
          var Zn = "oninput" in document;
          if (!Zn) {
            var Jn = document.createElement("div");
            Jn.setAttribute("oninput", "return;"), Zn = "function" == typeof Jn.oninput
          }
          Kn = Zn
        } else Kn = !1;
        Qn = Kn && (!document.documentMode || 9 < document.documentMode)
      }

      function er() {
        Wn && (Wn.detachEvent("onpropertychange", tr), Gn = Wn = null)
      }

      function tr(e) {
        if ("value" === e.propertyName && Xn(Gn)) {
          var t = [];
          Hn(t, Gn, e, xe(e)), Ae(Yn, t)
        }
      }

      function nr(e, t, n) {
        "focusin" === e ? (er(), Gn = n, (Wn = t).attachEvent("onpropertychange", tr)) : "focusout" === e && er()
      }

      function rr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Gn)
      }

      function ir(e, t) {
        if ("click" === e) return Xn(t)
      }

      function or(e, t) {
        if ("input" === e || "change" === e) return Xn(t)
      }
      var ar = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
      };

      function sr(e, t) {
        if (ar(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var i = n[r];
          if (!d.call(t, i) || !ar(e[i], t[i])) return !1
        }
        return !0
      }

      function lr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
      }

      function ur(e, t) {
        var n, r = lr(e);
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
          r = lr(r)
        }
      }

      function cr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? cr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
      }

      function dr() {
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

      function fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
      }

      function pr(e) {
        var t = dr(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && cr(n.ownerDocument.documentElement, n)) {
          if (null !== r && fr(n))
            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var i = n.textContent.length,
              o = Math.min(r.start, i);
            r = void 0 === r.end ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ur(n, o);
            var a = ur(n, r);
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
      var hr = c && "documentMode" in document && 11 >= document.documentMode,
        mr = null,
        gr = null,
        vr = null,
        yr = !1;

      function br(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        yr || null == mr || mr !== X(r) || (r = "selectionStart" in (r = mr) && fr(r) ? {
          start: r.selectionStart,
          end: r.selectionEnd
        } : {
          anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }, vr && sr(vr, r) || (vr = r, 0 < (r = Wr(gr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = mr)))
      }

      function wr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
      }
      var xr = {
          animationend: wr("Animation", "AnimationEnd"),
          animationiteration: wr("Animation", "AnimationIteration"),
          animationstart: wr("Animation", "AnimationStart"),
          transitionend: wr("Transition", "TransitionEnd")
        },
        _r = {},
        Sr = {};

      function kr(e) {
        if (_r[e]) return _r[e];
        if (!xr[e]) return e;
        var t, n = xr[e];
        for (t in n)
          if (n.hasOwnProperty(t) && t in Sr) return _r[e] = n[t];
        return e
      }
      c && (Sr = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
      var Tr = kr("animationend"),
        Er = kr("animationiteration"),
        Cr = kr("animationstart"),
        Pr = kr("transitionend"),
        Mr = new Map,
        Or = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

      function Ar(e, t) {
        Mr.set(e, t), l(t, [e])
      }
      for (var Lr = 0; Lr < Or.length; Lr++) {
        var Dr = Or[Lr];
        Ar(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)))
      }
      Ar(Tr, "onAnimationEnd"), Ar(Er, "onAnimationIteration"), Ar(Cr, "onAnimationStart"), Ar("dblclick", "onDoubleClick"), Ar("focusin", "onFocus"), Ar("focusout", "onBlur"), Ar(Pr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Nr = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));

      function Rr(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
          function(e, t, n, r, i, a, s, l, u) {
            if (je.apply(this, arguments), Re) {
              if (!Re) throw Error(o(198));
              var c = Ve;
              Re = !1, Ve = null, Ie || (Ie = !0, Fe = c)
            }
          }(r, t, void 0, e), e.currentTarget = null
      }

      function Vr(e, t) {
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
                Rr(i, s, u), o = l
              } else
                for (a = 0; a < r.length; a++) {
                  if (l = (s = r[a]).instance, u = s.currentTarget, s = s.listener, l !== o && i.isPropagationStopped()) break e;
                  Rr(i, s, u), o = l
                }
          }
        }
        if (Ie) throw e = Fe, Ie = !1, Fe = null, e
      }

      function Ir(e, t) {
        var n = t[hi];
        void 0 === n && (n = t[hi] = new Set);
        var r = e + "__bubble";
        n.has(r) || ($r(t, e, 2, !1), n.add(r))
      }

      function Fr(e, t, n) {
        var r = 0;
        t && (r |= 4), $r(n, e, r, t)
      }
      var Br = "_reactListening" + Math.random().toString(36).slice(2);

      function jr(e) {
        if (!e[Br]) {
          e[Br] = !0, a.forEach((function(t) {
            "selectionchange" !== t && (Nr.has(t) || Fr(t, !1, e), Fr(t, !0, e))
          }));
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Br] || (t[Br] = !0, Fr("selectionchange", !1, t))
        }
      }

      function $r(e, t, n, r) {
        switch (qt(t)) {
          case 1:
            var i = Ht;
            break;
          case 4:
            i = Wt;
            break;
          default:
            i = Gt
        }
        n = i.bind(null, t, n, e), i = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, {
          capture: !0,
          passive: i
        }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
          passive: i
        }) : e.addEventListener(t, n, !1)
      }

      function Ur(e, t, n, r, i) {
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
              if (null === (a = vi(s))) return;
              if (5 === (l = a.tag) || 6 === l) {
                r = o = a;
                continue e
              }
              s = s.parentNode
            }
          }
          r = r.return
        }
        Ae((function() {
          var r = o,
            i = xe(n),
            a = [];
          e: {
            var s = Mr.get(e);
            if (void 0 !== s) {
              var l = un,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === en(n)) break e;
                case "keydown":
                case "keyup":
                  l = En;
                  break;
                case "focusin":
                  u = "focus", l = mn;
                  break;
                case "focusout":
                  u = "blur", l = mn;
                  break;
                case "beforeblur":
                case "afterblur":
                  l = mn;
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
                  l = hn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  l = Pn;
                  break;
                case Tr:
                case Er:
                case Cr:
                  l = gn;
                  break;
                case Pr:
                  l = Mn;
                  break;
                case "scroll":
                  l = dn;
                  break;
                case "wheel":
                  l = An;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  l = yn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  l = Cn
              }
              var c = 0 != (4 & t),
                d = !c && "scroll" === e,
                f = c ? null !== s ? s + "Capture" : null : s;
              c = [];
              for (var p, h = r; null !== h;) {
                var m = (p = h).stateNode;
                if (5 === p.tag && null !== m && (p = m, null !== f && null != (m = Le(h, f)) && c.push(Hr(h, m, p))), d) break;
                h = h.return
              }
              0 < c.length && (s = new l(s, u, null, n, i), a.push({
                event: s,
                listeners: c
              }))
            }
          }
          if (0 == (7 & t)) {
            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !vi(u) && !u[pi]) && (l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? vi(u) : null) && (u !== (d = $e(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
              if (c = pn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Cn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == l ? s : bi(l), p = null == u ? s : bi(u), (s = new c(m, h + "leave", l, n, i)).target = d, s.relatedTarget = p, m = null, vi(i) === r && ((c = new c(f, h + "enter", u, n, i)).target = p, c.relatedTarget = d, m = c), d = m, l && u) e: {
                for (f = u, h = 0, p = c = l; p; p = Gr(p)) h++;
                for (p = 0, m = f; m; m = Gr(m)) p++;
                for (; 0 < h - p;) c = Gr(c),
                h--;
                for (; 0 < p - h;) f = Gr(f),
                p--;
                for (; h--;) {
                  if (c === f || null !== f && c === f.alternate) break e;
                  c = Gr(c), f = Gr(f)
                }
                c = null
              }
              else c = null;
              null !== l && Yr(a, s, l, c, !1), null !== u && null !== d && Yr(a, d, u, c, !0)
            }
            if ("select" === (l = (s = r ? bi(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = qn;
            else if (Un(s))
              if (Qn) g = or;
              else {
                g = rr;
                var v = nr
              }
            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = ir);
            switch (g && (g = g(e, r)) ? Hn(a, g, n, i) : (v && v(e, s, r), "focusout" === e && (v = s._wrapperState) && v.controlled && "number" === s.type && ee(s, "number", s.value)), v = r ? bi(r) : window, e) {
              case "focusin":
                (Un(v) || "true" === v.contentEditable) && (mr = v, gr = r, vr = null);
                break;
              case "focusout":
                vr = gr = mr = null;
                break;
              case "mousedown":
                yr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                yr = !1, br(a, n, i);
                break;
              case "selectionchange":
                if (hr) break;
              case "keydown":
              case "keyup":
                br(a, n, i)
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
            else jn ? Fn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Rn && "ko" !== n.locale && (jn || "onCompositionStart" !== b ? "onCompositionEnd" === b && jn && (y = Jt()) : (Kt = "value" in (Qt = i) ? Qt.value : Qt.textContent, jn = !0)), 0 < (v = Wr(r, b)).length && (b = new bn(b, e, null, n, i), a.push({
              event: b,
              listeners: v
            }), (y || null !== (y = Bn(n))) && (b.data = y))), (y = Nn ? function(e, t) {
              switch (e) {
                case "compositionend":
                  return Bn(t);
                case "keypress":
                  return 32 !== t.which ? null : (In = !0, Vn);
                case "textInput":
                  return (e = t.data) === Vn && In ? null : e;
                default:
                  return null
              }
            }(e, n) : function(e, t) {
              if (jn) return "compositionend" === e || !Dn && Fn(e, t) ? (e = Jt(), Zt = Kt = Qt = null, jn = !1, e) : null;
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
                  return Rn && "ko" !== t.locale ? null : t.data
              }
            }(e, n)) && 0 < (r = Wr(r, "onBeforeInput")).length && (i = new bn("onBeforeInput", "beforeinput", null, n, i), a.push({
              event: i,
              listeners: r
            }), i.data = y)
          }
          Vr(a, t)
        }))
      }

      function Hr(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        }
      }

      function Wr(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
          var i = e,
            o = i.stateNode;
          5 === i.tag && null !== o && (i = o, null != (o = Le(e, n)) && r.unshift(Hr(e, o, i)), null != (o = Le(e, t)) && r.push(Hr(e, o, i))), e = e.return
        }
        return r
      }

      function Gr(e) {
        if (null === e) return null;
        do {
          e = e.return
        } while (e && 5 !== e.tag);
        return e || null
      }

      function Yr(e, t, n, r, i) {
        for (var o = t._reactName, a = []; null !== n && n !== r;) {
          var s = n,
            l = s.alternate,
            u = s.stateNode;
          if (null !== l && l === r) break;
          5 === s.tag && null !== u && (s = u, i ? null != (l = Le(n, o)) && a.unshift(Hr(n, l, s)) : i || null != (l = Le(n, o)) && a.push(Hr(n, l, s))), n = n.return
        }
        0 !== a.length && e.push({
          event: t,
          listeners: a
        })
      }
      var Xr = /\r\n?/g,
        qr = /\u0000|\uFFFD/g;

      function Qr(e) {
        return ("string" == typeof e ? e : "" + e).replace(Xr, "\n").replace(qr, "")
      }

      function Kr(e, t, n) {
        if (t = Qr(t), Qr(e) !== t && n) throw Error(o(425))
      }

      function Zr() {}
      var Jr = null,
        ei = null;

      function ti(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
      }
      var ni = "function" == typeof setTimeout ? setTimeout : void 0,
        ri = "function" == typeof clearTimeout ? clearTimeout : void 0,
        ii = "function" == typeof Promise ? Promise : void 0,
        oi = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ii ? function(e) {
          return ii.resolve(null).then(e).catch(ai)
        } : ni;

      function ai(e) {
        setTimeout((function() {
          throw e
        }))
      }

      function si(e, t) {
        var n = t,
          r = 0;
        do {
          var i = n.nextSibling;
          if (e.removeChild(n), i && 8 === i.nodeType)
            if ("/$" === (n = i.data)) {
              if (0 === r) return e.removeChild(i), void jt(t);
              r--
            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
          n = i
        } while (n);
        jt(t)
      }

      function li(e) {
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

      function ui(e) {
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
      var ci = Math.random().toString(36).slice(2),
        di = "__reactFiber$" + ci,
        fi = "__reactProps$" + ci,
        pi = "__reactContainer$" + ci,
        hi = "__reactEvents$" + ci,
        mi = "__reactListeners$" + ci,
        gi = "__reactHandles$" + ci;

      function vi(e) {
        var t = e[di];
        if (t) return t;
        for (var n = e.parentNode; n;) {
          if (t = n[pi] || n[di]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
              for (e = ui(e); null !== e;) {
                if (n = e[di]) return n;
                e = ui(e)
              }
            return t
          }
          n = (e = n).parentNode
        }
        return null
      }

      function yi(e) {
        return !(e = e[di] || e[pi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
      }

      function bi(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33))
      }

      function wi(e) {
        return e[fi] || null
      }
      var xi = [],
        _i = -1;

      function Si(e) {
        return {
          current: e
        }
      }

      function ki(e) {
        0 > _i || (e.current = xi[_i], xi[_i] = null, _i--)
      }

      function Ti(e, t) {
        _i++, xi[_i] = e.current, e.current = t
      }
      var Ei = {},
        Ci = Si(Ei),
        Pi = Si(!1),
        Mi = Ei;

      function Oi(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ei;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n) o[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
      }

      function Ai(e) {
        return null != e.childContextTypes
      }

      function Li() {
        ki(Pi), ki(Ci)
      }

      function Di(e, t, n) {
        if (Ci.current !== Ei) throw Error(o(168));
        Ti(Ci, t), Ti(Pi, n)
      }

      function zi(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var i in r = r.getChildContext())
          if (!(i in t)) throw Error(o(108, U(e) || "Unknown", i));
        return V({}, n, r)
      }

      function Ni(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ei, Mi = Ci.current, Ti(Ci, e), Ti(Pi, Pi.current), !0
      }

      function Ri(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? (e = zi(e, t, Mi), r.__reactInternalMemoizedMergedChildContext = e, ki(Pi), ki(Ci), Ti(Ci, e)) : ki(Pi), Ti(Pi, n)
      }
      var Vi = null,
        Ii = !1,
        Fi = !1;

      function Bi(e) {
        null === Vi ? Vi = [e] : Vi.push(e)
      }

      function ji() {
        if (!Fi && null !== Vi) {
          Fi = !0;
          var e = 0,
            t = yt;
          try {
            var n = Vi;
            for (yt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0)
              } while (null !== r)
            }
            Vi = null, Ii = !1
          } catch (t) {
            throw null !== Vi && (Vi = Vi.slice(e + 1)), Ye(Je, ji), t
          } finally {
            yt = t, Fi = !1
          }
        }
        return null
      }
      var $i = [],
        Ui = 0,
        Hi = null,
        Wi = 0,
        Gi = [],
        Yi = 0,
        Xi = null,
        qi = 1,
        Qi = "";

      function Ki(e, t) {
        $i[Ui++] = Wi, $i[Ui++] = Hi, Hi = e, Wi = t
      }

      function Zi(e, t, n) {
        Gi[Yi++] = qi, Gi[Yi++] = Qi, Gi[Yi++] = Xi, Xi = e;
        var r = qi;
        e = Qi;
        var i = 32 - at(r) - 1;
        r &= ~(1 << i), n += 1;
        var o = 32 - at(t) + i;
        if (30 < o) {
          var a = i - i % 5;
          o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, qi = 1 << 32 - at(t) + i | n << i | r, Qi = o + e
        } else qi = 1 << o | n << i | r, Qi = e
      }

      function Ji(e) {
        null !== e.return && (Ki(e, 1), Zi(e, 1, 0))
      }

      function eo(e) {
        for (; e === Hi;) Hi = $i[--Ui], $i[Ui] = null, Wi = $i[--Ui], $i[Ui] = null;
        for (; e === Xi;) Xi = Gi[--Yi], Gi[Yi] = null, Qi = Gi[--Yi], Gi[Yi] = null, qi = Gi[--Yi], Gi[Yi] = null
      }
      var to = null,
        no = null,
        ro = !1,
        io = null;

      function oo(e, t) {
        var n = Au(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
      }

      function ao(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, to = e, no = li(t.firstChild), !0);
          case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, to = e, no = null, !0);
          case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xi ? {
              id: qi,
              overflow: Qi
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, (n = Au(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, to = e, no = null, !0);
          default:
            return !1
        }
      }

      function so(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags)
      }

      function lo(e) {
        if (ro) {
          var t = no;
          if (t) {
            var n = t;
            if (!ao(e, t)) {
              if (so(e)) throw Error(o(418));
              t = li(n.nextSibling);
              var r = to;
              t && ao(e, t) ? oo(r, n) : (e.flags = -4097 & e.flags | 2, ro = !1, to = e)
            }
          } else {
            if (so(e)) throw Error(o(418));
            e.flags = -4097 & e.flags | 2, ro = !1, to = e
          }
        }
      }

      function uo(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        to = e
      }

      function co(e) {
        if (e !== to) return !1;
        if (!ro) return uo(e), ro = !0, !1;
        var t;
        if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ti(e.type, e.memoizedProps)), t && (t = no)) {
          if (so(e)) throw fo(), Error(o(418));
          for (; t;) oo(e, t), t = li(t.nextSibling)
        }
        if (uo(e), 13 === e.tag) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    no = li(e.nextSibling);
                    break e
                  }
                  t--
                } else "$" !== n && "$!" !== n && "$?" !== n || t++
              }
              e = e.nextSibling
            }
            no = null
          }
        } else no = to ? li(e.stateNode.nextSibling) : null;
        return !0
      }

      function fo() {
        for (var e = no; e;) e = li(e.nextSibling)
      }

      function po() {
        no = to = null, ro = !1
      }

      function ho(e) {
        null === io ? io = [e] : io.push(e)
      }
      var mo = w.ReactCurrentBatchConfig;

      function go(e, t) {
        if (e && e.defaultProps) {
          for (var n in t = V({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
          return t
        }
        return t
      }
      var vo = Si(null),
        yo = null,
        bo = null,
        wo = null;

      function xo() {
        wo = bo = yo = null
      }

      function _o(e) {
        var t = vo.current;
        ki(vo), e._currentValue = t
      }

      function So(e, t, n) {
        for (; null !== e;) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return
        }
      }

      function ko(e, t) {
        yo = e, wo = bo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (bs = !0), e.firstContext = null)
      }

      function To(e) {
        var t = e._currentValue;
        if (wo !== e)
          if (e = {
              context: e,
              memoizedValue: t,
              next: null
            }, null === bo) {
            if (null === yo) throw Error(o(308));
            bo = e, yo.dependencies = {
              lanes: 0,
              firstContext: e
            }
          } else bo = bo.next = e;
        return t
      }
      var Eo = null;

      function Co(e) {
        null === Eo ? Eo = [e] : Eo.push(e)
      }

      function Po(e, t, n, r) {
        var i = t.interleaved;
        return null === i ? (n.next = n, Co(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Mo(e, r)
      }

      function Mo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
        return 3 === n.tag ? n.stateNode : null
      }
      var Oo = !1;

      function Ao(e) {
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

      function Lo(e, t) {
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

      function zo(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 0 != (2 & Pl)) {
          var i = r.pending;
          return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Mo(e, n)
        }
        return null === (i = r.interleaved) ? (t.next = t, Co(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Mo(e, n)
      }

      function No(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
        }
      }

      function Ro(e, t) {
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

      function Vo(e, t, n, r) {
        var i = e.updateQueue;
        Oo = !1;
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
          var d = i.baseState;
          for (a = 0, c = u = l = null, s = o;;) {
            var f = s.lane,
              p = s.eventTime;
            if ((r & f) === f) {
              null !== c && (c = c.next = {
                eventTime: p,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
              });
              e: {
                var h = e,
                  m = s;
                switch (f = t, p = n, m.tag) {
                  case 1:
                    if ("function" == typeof(h = m.payload)) {
                      d = h.call(p, d, f);
                      break e
                    }
                    d = h;
                    break e;
                  case 3:
                    h.flags = -65537 & h.flags | 128;
                  case 0:
                    if (null == (f = "function" == typeof(h = m.payload) ? h.call(p, d, f) : h)) break e;
                    d = V({}, d, f);
                    break e;
                  case 2:
                    Oo = !0
                }
              }
              null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (f = i.effects) ? i.effects = [s] : f.push(s))
            } else p = {
              eventTime: p,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            }, null === c ? (u = c = p, l = d) : c = c.next = p, a |= f;
            if (null === (s = s.next)) {
              if (null === (s = i.shared.pending)) break;
              s = (f = s).next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
          }
          if (null === c && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null !== (t = i.shared.interleaved)) {
            i = t;
            do {
              a |= i.lane, i = i.next
            } while (i !== t)
          } else null === o && (i.shared.lanes = 0);
          Rl |= a, e.lanes = a, e.memoizedState = d
        }
      }

      function Io(e, t, n) {
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
      var Fo = (new r.Component).refs;

      function Bo(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : V({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
      }
      var jo = {
        isMounted: function(e) {
          return !!(e = e._reactInternals) && $e(e) === e
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = eu(),
            i = tu(e),
            o = Do(r, i);
          o.payload = t, null != n && (o.callback = n), null !== (t = zo(e, o, i)) && (nu(t, e, i, r), No(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = eu(),
            i = tu(e),
            o = Do(r, i);
          o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = zo(e, o, i)) && (nu(t, e, i, r), No(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = eu(),
            r = tu(e),
            i = Do(n, r);
          i.tag = 2, null != t && (i.callback = t), null !== (t = zo(e, i, r)) && (nu(t, e, r, n), No(t, e, r))
        }
      };

      function $o(e, t, n, r, i, o, a) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !(t.prototype && t.prototype.isPureReactComponent && sr(n, r) && sr(i, o))
      }

      function Uo(e, t, n) {
        var r = !1,
          i = Ei,
          o = t.contextType;
        return "object" == typeof o && null !== o ? o = To(o) : (i = Ai(t) ? Mi : Ci.current, o = (r = null != (r = t.contextTypes)) ? Oi(e, i) : Ei), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = jo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
      }

      function Ho(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jo.enqueueReplaceState(t, t.state, null)
      }

      function Wo(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = Fo, Ao(e);
        var o = t.contextType;
        "object" == typeof o && null !== o ? i.context = To(o) : (o = Ai(t) ? Mi : Ci.current, i.context = Oi(e, o)), i.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (Bo(e, t, o, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && jo.enqueueReplaceState(i, i.state, null), Vo(e, n, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.flags |= 4194308)
      }

      function Go(e, t, n) {
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
              t === Fo && (t = i.refs = {}), null === e ? delete t[a] : t[a] = e
            }, t._stringRef = a, t)
          }
          if ("string" != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e))
        }
        return e
      }

      function Yo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
      }

      function Xo(e) {
        return (0, e._init)(e._payload)
      }

      function qo(e) {
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
          return null === t || 6 !== t.tag ? ((t = Vu(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
          var o = n.type;
          return o === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === L && Xo(o) === t.type) ? ((r = i(t, n.props)).ref = Go(e, t, n), r.return = e, r) : ((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Go(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Iu(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function d(e, t, n, r, o) {
          return null === t || 7 !== t.tag ? ((t = Nu(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function f(e, t, n) {
          if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Vu("" + t, e.mode, n)).return = e, t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case x:
                return (n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Go(e, null, t), n.return = e, n;
              case _:
                return (t = Iu(t, e.mode, n)).return = e, t;
              case L:
                return f(e, (0, t._init)(t._payload), n)
            }
            if (te(t) || N(t)) return (t = Nu(t, e.mode, n, null)).return = e, t;
            Yo(e, t)
          }
          return null
        }

        function p(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case x:
                return n.key === i ? u(e, t, n, r) : null;
              case _:
                return n.key === i ? c(e, t, n, r) : null;
              case L:
                return p(e, t, (i = n._init)(n._payload), r)
            }
            if (te(n) || N(n)) return null !== i ? null : d(e, t, n, r, null);
            Yo(e, n)
          }
          return null
        }

        function h(e, t, n, r, i) {
          if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case x:
                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
              case _:
                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
              case L:
                return h(e, t, n, (0, r._init)(r._payload), i)
            }
            if (te(r) || N(r)) return d(t, e = e.get(n) || null, r, i, null);
            Yo(t, r)
          }
          return null
        }

        function m(i, o, s, l) {
          for (var u = null, c = null, d = o, m = o = 0, g = null; null !== d && m < s.length; m++) {
            d.index > m ? (g = d, d = null) : g = d.sibling;
            var v = p(i, d, s[m], l);
            if (null === v) {
              null === d && (d = g);
              break
            }
            e && d && null === v.alternate && t(i, d), o = a(v, o, m), null === c ? u = v : c.sibling = v, c = v, d = g
          }
          if (m === s.length) return n(i, d), ro && Ki(i, m), u;
          if (null === d) {
            for (; m < s.length; m++) null !== (d = f(i, s[m], l)) && (o = a(d, o, m), null === c ? u = d : c.sibling = d, c = d);
            return ro && Ki(i, m), u
          }
          for (d = r(i, d); m < s.length; m++) null !== (g = h(d, i, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), o = a(g, o, m), null === c ? u = g : c.sibling = g, c = g);
          return e && d.forEach((function(e) {
            return t(i, e)
          })), ro && Ki(i, m), u
        }

        function g(i, s, l, u) {
          var c = N(l);
          if ("function" != typeof c) throw Error(o(150));
          if (null == (l = c.call(l))) throw Error(o(151));
          for (var d = c = null, m = s, g = s = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
            m.index > g ? (v = m, m = null) : v = m.sibling;
            var b = p(i, m, y.value, u);
            if (null === b) {
              null === m && (m = v);
              break
            }
            e && m && null === b.alternate && t(i, m), s = a(b, s, g), null === d ? c = b : d.sibling = b, d = b, m = v
          }
          if (y.done) return n(i, m), ro && Ki(i, g), c;
          if (null === m) {
            for (; !y.done; g++, y = l.next()) null !== (y = f(i, y.value, u)) && (s = a(y, s, g), null === d ? c = y : d.sibling = y, d = y);
            return ro && Ki(i, g), c
          }
          for (m = r(i, m); !y.done; g++, y = l.next()) null !== (y = h(m, i, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = a(y, s, g), null === d ? c = y : d.sibling = y, d = y);
          return e && m.forEach((function(e) {
            return t(i, e)
          })), ro && Ki(i, g), c
        }
        return function e(r, o, a, l) {
          if ("object" == typeof a && null !== a && a.type === S && null === a.key && (a = a.props.children), "object" == typeof a && null !== a) {
            switch (a.$$typeof) {
              case x:
                e: {
                  for (var u = a.key, c = o; null !== c;) {
                    if (c.key === u) {
                      if ((u = a.type) === S) {
                        if (7 === c.tag) {
                          n(r, c.sibling), (o = i(c, a.props.children)).return = r, r = o;
                          break e
                        }
                      } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === L && Xo(u) === c.type) {
                        n(r, c.sibling), (o = i(c, a.props)).ref = Go(r, c, a), o.return = r, r = o;
                        break e
                      }
                      n(r, c);
                      break
                    }
                    t(r, c), c = c.sibling
                  }
                  a.type === S ? ((o = Nu(a.props.children, r.mode, l, a.key)).return = r, r = o) : ((l = zu(a.type, a.key, a.props, null, r.mode, l)).ref = Go(r, o, a), l.return = r, r = l)
                }
                return s(r);
              case _:
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
                  }(o = Iu(a, r.mode, l)).return = r,
                  r = o
                }
                return s(r);
              case L:
                return e(r, o, (c = a._init)(a._payload), l)
            }
            if (te(a)) return m(r, o, a, l);
            if (N(a)) return g(r, o, a, l);
            Yo(r, a)
          }
          return "string" == typeof a && "" !== a || "number" == typeof a ? (a = "" + a, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = i(o, a)).return = r, r = o) : (n(r, o), (o = Vu(a, r.mode, l)).return = r, r = o), s(r)) : n(r, o)
        }
      }
      var Qo = qo(!0),
        Ko = qo(!1),
        Zo = {},
        Jo = Si(Zo),
        ea = Si(Zo),
        ta = Si(Zo);

      function na(e) {
        if (e === Zo) throw Error(o(174));
        return e
      }

      function ra(e, t) {
        switch (Ti(ta, t), Ti(ea, e), Ti(Jo, Zo), e = t.nodeType) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
            break;
          default:
            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        ki(Jo), Ti(Jo, t)
      }

      function ia() {
        ki(Jo), ki(ea), ki(ta)
      }

      function oa(e) {
        na(ta.current);
        var t = na(Jo.current),
          n = le(t, e.type);
        t !== n && (Ti(ea, e), Ti(Jo, n))
      }

      function aa(e) {
        ea.current === e && (ki(Jo), ki(ea))
      }
      var sa = Si(0);

      function la(e) {
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
      var ua = [];

      function ca() {
        for (var e = 0; e < ua.length; e++) ua[e]._workInProgressVersionPrimary = null;
        ua.length = 0
      }
      var da = w.ReactCurrentDispatcher,
        fa = w.ReactCurrentBatchConfig,
        pa = 0,
        ha = null,
        ma = null,
        ga = null,
        va = !1,
        ya = !1,
        ba = 0,
        wa = 0;

      function xa() {
        throw Error(o(321))
      }

      function _a(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!ar(e[n], t[n])) return !1;
        return !0
      }

      function Sa(e, t, n, r, i, a) {
        if (pa = a, ha = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, da.current = null === e || null === e.memoizedState ? as : ss, e = n(r, i), ya) {
          a = 0;
          do {
            if (ya = !1, ba = 0, 25 <= a) throw Error(o(301));
            a += 1, ga = ma = null, t.updateQueue = null, da.current = ls, e = n(r, i)
          } while (ya)
        }
        if (da.current = os, t = null !== ma && null !== ma.next, pa = 0, ga = ma = ha = null, va = !1, t) throw Error(o(300));
        return e
      }

      function ka() {
        var e = 0 !== ba;
        return ba = 0, e
      }

      function Ta() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return null === ga ? ha.memoizedState = ga = e : ga = ga.next = e, ga
      }

      function Ea() {
        if (null === ma) {
          var e = ha.alternate;
          e = null !== e ? e.memoizedState : null
        } else e = ma.next;
        var t = null === ga ? ha.memoizedState : ga.next;
        if (null !== t) ga = t, ma = e;
        else {
          if (null === e) throw Error(o(310));
          e = {
            memoizedState: (ma = e).memoizedState,
            baseState: ma.baseState,
            baseQueue: ma.baseQueue,
            queue: ma.queue,
            next: null
          }, null === ga ? ha.memoizedState = ga = e : ga = ga.next = e
        }
        return ga
      }

      function Ca(e, t) {
        return "function" == typeof t ? t(e) : t
      }

      function Pa(e) {
        var t = Ea(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = ma,
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
            var d = c.lane;
            if ((pa & d) === d) null !== u && (u = u.next = {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
              var f = {
                lane: d,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
              };
              null === u ? (l = u = f, s = r) : u = u.next = f, ha.lanes |= d, Rl |= d
            }
            c = c.next
          } while (null !== c && c !== a);
          null === u ? s = r : u.next = l, ar(r, t.memoizedState) || (bs = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
        }
        if (null !== (e = n.interleaved)) {
          i = e;
          do {
            a = i.lane, ha.lanes |= a, Rl |= a, i = i.next
          } while (i !== e)
        } else null === i && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
      }

      function Ma(e) {
        var t = Ea(),
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
          ar(a, t.memoizedState) || (bs = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
        }
        return [a, r]
      }

      function Oa() {}

      function Aa(e, t) {
        var n = ha,
          r = Ea(),
          i = t(),
          a = !ar(r.memoizedState, i);
        if (a && (r.memoizedState = i, bs = !0), r = r.queue, Ua(za.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== ga && 1 & ga.memoizedState.tag) {
          if (n.flags |= 2048, Ia(9, Da.bind(null, n, r, i, t), void 0, null), null === Ml) throw Error(o(349));
          0 != (30 & pa) || La(n, t, i)
        }
        return i
      }

      function La(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, null === (t = ha.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, ha.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
      }

      function Da(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Na(t) && Ra(e)
      }

      function za(e, t, n) {
        return n((function() {
          Na(t) && Ra(e)
        }))
      }

      function Na(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !ar(e, n)
        } catch (e) {
          return !0
        }
      }

      function Ra(e) {
        var t = Mo(e, 1);
        null !== t && nu(t, e, 1, -1)
      }

      function Va(e) {
        var t = Ta();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ca,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ts.bind(null, ha, e), [t.memoizedState, e]
      }

      function Ia(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, null === (t = ha.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, ha.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
      }

      function Fa() {
        return Ea().memoizedState
      }

      function Ba(e, t, n, r) {
        var i = Ta();
        ha.flags |= e, i.memoizedState = Ia(1 | t, n, void 0, void 0 === r ? null : r)
      }

      function ja(e, t, n, r) {
        var i = Ea();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ma) {
          var a = ma.memoizedState;
          if (o = a.destroy, null !== r && _a(r, a.deps)) return void(i.memoizedState = Ia(t, n, o, r))
        }
        ha.flags |= e, i.memoizedState = Ia(1 | t, n, o, r)
      }

      function $a(e, t) {
        return Ba(8390656, 8, e, t)
      }

      function Ua(e, t) {
        return ja(2048, 8, e, t)
      }

      function Ha(e, t) {
        return ja(4, 2, e, t)
      }

      function Wa(e, t) {
        return ja(4, 4, e, t)
      }

      function Ga(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
          t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
          t.current = null
        }) : void 0
      }

      function Ya(e, t, n) {
        return n = null != n ? n.concat([e]) : null, ja(4, 4, Ga.bind(null, t, e), n)
      }

      function Xa() {}

      function qa(e, t) {
        var n = Ea();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && _a(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
      }

      function Qa(e, t) {
        var n = Ea();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && _a(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      }

      function Ka(e, t, n) {
        return 0 == (21 & pa) ? (e.baseState && (e.baseState = !1, bs = !0), e.memoizedState = n) : (ar(n, t) || (n = mt(), ha.lanes |= n, Rl |= n, e.baseState = !0), t)
      }

      function Za(e, t) {
        var n = yt;
        yt = 0 !== n && 4 > n ? n : 4, e(!0);
        var r = fa.transition;
        fa.transition = {};
        try {
          e(!1), t()
        } finally {
          yt = n, fa.transition = r
        }
      }

      function Ja() {
        return Ea().memoizedState
      }

      function es(e, t, n) {
        var r = tu(e);
        n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ns(e) ? rs(t, n) : null !== (n = Po(e, t, n, r)) && (nu(n, e, r, eu()), is(n, t, r))
      }

      function ts(e, t, n) {
        var r = tu(e),
          i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
          };
        if (ns(e)) rs(t, i);
        else {
          var o = e.alternate;
          if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
            var a = t.lastRenderedState,
              s = o(a, n);
            if (i.hasEagerState = !0, i.eagerState = s, ar(s, a)) {
              var l = t.interleaved;
              return null === l ? (i.next = i, Co(t)) : (i.next = l.next, l.next = i), void(t.interleaved = i)
            }
          } catch (e) {}
          null !== (n = Po(e, t, i, r)) && (nu(n, e, r, i = eu()), is(n, t, r))
        }
      }

      function ns(e) {
        var t = e.alternate;
        return e === ha || null !== t && t === ha
      }

      function rs(e, t) {
        ya = va = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
      }

      function is(e, t, n) {
        if (0 != (4194240 & n)) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
        }
      }
      var os = {
          readContext: To,
          useCallback: xa,
          useContext: xa,
          useEffect: xa,
          useImperativeHandle: xa,
          useInsertionEffect: xa,
          useLayoutEffect: xa,
          useMemo: xa,
          useReducer: xa,
          useRef: xa,
          useState: xa,
          useDebugValue: xa,
          useDeferredValue: xa,
          useTransition: xa,
          useMutableSource: xa,
          useSyncExternalStore: xa,
          useId: xa,
          unstable_isNewReconciler: !1
        },
        as = {
          readContext: To,
          useCallback: function(e, t) {
            return Ta().memoizedState = [e, void 0 === t ? null : t], e
          },
          useContext: To,
          useEffect: $a,
          useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null, Ba(4194308, 4, Ga.bind(null, t, e), n)
          },
          useLayoutEffect: function(e, t) {
            return Ba(4194308, 4, e, t)
          },
          useInsertionEffect: function(e, t) {
            return Ba(4, 2, e, t)
          },
          useMemo: function(e, t) {
            var n = Ta();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
          },
          useReducer: function(e, t, n) {
            var r = Ta();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }, r.queue = e, e = e.dispatch = es.bind(null, ha, e), [r.memoizedState, e]
          },
          useRef: function(e) {
            return e = {
              current: e
            }, Ta().memoizedState = e
          },
          useState: Va,
          useDebugValue: Xa,
          useDeferredValue: function(e) {
            return Ta().memoizedState = e
          },
          useTransition: function() {
            var e = Va(!1),
              t = e[0];
            return e = Za.bind(null, e[1]), Ta().memoizedState = e, [t, e]
          },
          useMutableSource: function() {},
          useSyncExternalStore: function(e, t, n) {
            var r = ha,
              i = Ta();
            if (ro) {
              if (void 0 === n) throw Error(o(407));
              n = n()
            } else {
              if (n = t(), null === Ml) throw Error(o(349));
              0 != (30 & pa) || La(r, t, n)
            }
            i.memoizedState = n;
            var a = {
              value: n,
              getSnapshot: t
            };
            return i.queue = a, $a(za.bind(null, r, a, e), [e]), r.flags |= 2048, Ia(9, Da.bind(null, r, a, n, t), void 0, null), n
          },
          useId: function() {
            var e = Ta(),
              t = Ml.identifierPrefix;
            if (ro) {
              var n = Qi;
              t = ":" + t + "R" + (n = (qi & ~(1 << 32 - at(qi) - 1)).toString(32) + n), 0 < (n = ba++) && (t += "H" + n.toString(32)), t += ":"
            } else t = ":" + t + "r" + (n = wa++).toString(32) + ":";
            return e.memoizedState = t
          },
          unstable_isNewReconciler: !1
        },
        ss = {
          readContext: To,
          useCallback: qa,
          useContext: To,
          useEffect: Ua,
          useImperativeHandle: Ya,
          useInsertionEffect: Ha,
          useLayoutEffect: Wa,
          useMemo: Qa,
          useReducer: Pa,
          useRef: Fa,
          useState: function() {
            return Pa(Ca)
          },
          useDebugValue: Xa,
          useDeferredValue: function(e) {
            return Ka(Ea(), ma.memoizedState, e)
          },
          useTransition: function() {
            return [Pa(Ca)[0], Ea().memoizedState]
          },
          useMutableSource: Oa,
          useSyncExternalStore: Aa,
          useId: Ja,
          unstable_isNewReconciler: !1
        },
        ls = {
          readContext: To,
          useCallback: qa,
          useContext: To,
          useEffect: Ua,
          useImperativeHandle: Ya,
          useInsertionEffect: Ha,
          useLayoutEffect: Wa,
          useMemo: Qa,
          useReducer: Ma,
          useRef: Fa,
          useState: function() {
            return Ma(Ca)
          },
          useDebugValue: Xa,
          useDeferredValue: function(e) {
            var t = Ea();
            return null === ma ? t.memoizedState = e : Ka(t, ma.memoizedState, e)
          },
          useTransition: function() {
            return [Ma(Ca)[0], Ea().memoizedState]
          },
          useMutableSource: Oa,
          useSyncExternalStore: Aa,
          useId: Ja,
          unstable_isNewReconciler: !1
        };

      function us(e, t) {
        try {
          var n = "",
            r = t;
          do {
            n += j(r), r = r.return
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

      function cs(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null
        }
      }

      function ds(e, t) {
        try {
          console.error(t.value)
        } catch (e) {
          setTimeout((function() {
            throw e
          }))
        }
      }
      var fs = "function" == typeof WeakMap ? WeakMap : Map;

      function ps(e, t, n) {
        (n = Do(-1, n)).tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          Hl || (Hl = !0, Wl = r), ds(0, t)
        }, n
      }

      function hs(e, t, n) {
        (n = Do(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var i = t.value;
          n.payload = function() {
            return r(i)
          }, n.callback = function() {
            ds(0, t)
          }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
          ds(0, t), "function" != typeof r && (null === Gl ? Gl = new Set([this]) : Gl.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : ""
          })
        }), n
      }

      function ms(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new fs;
          var i = new Set;
          r.set(t, i)
        } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
        i.has(n) || (i.add(n), e = Tu.bind(null, e, t, n), t.then(e, e))
      }

      function gs(e) {
        do {
          var t;
          if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
          e = e.return
        } while (null !== e);
        return null
      }

      function vs(e, t, n, r, i) {
        return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Do(-1, 1)).tag = 2, zo(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
      }
      var ys = w.ReactCurrentOwner,
        bs = !1;

      function ws(e, t, n, r) {
        t.child = null === e ? Ko(t, null, n, r) : Qo(t, e.child, n, r)
      }

      function xs(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return ko(t, i), r = Sa(e, t, n, r, o, i), n = ka(), null === e || bs ? (ro && n && Ji(t), t.flags |= 1, ws(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Hs(e, t, i))
      }

      function _s(e, t, n, r, i) {
        if (null === e) {
          var o = n.type;
          return "function" != typeof o || Lu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = zu(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Ss(e, t, o, r, i))
        }
        if (o = e.child, 0 == (e.lanes & i)) {
          var a = o.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : sr)(a, r) && e.ref === t.ref) return Hs(e, t, i)
        }
        return t.flags |= 1, (e = Du(o, r)).ref = t.ref, e.return = t, t.child = e
      }

      function Ss(e, t, n, r, i) {
        if (null !== e) {
          var o = e.memoizedProps;
          if (sr(o, r) && e.ref === t.ref) {
            if (bs = !1, t.pendingProps = r = o, 0 == (e.lanes & i)) return t.lanes = e.lanes, Hs(e, t, i);
            0 != (131072 & e.flags) && (bs = !0)
          }
        }
        return Es(e, t, n, r, i)
      }

      function ks(e, t, n) {
        var r = t.pendingProps,
          i = r.children,
          o = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode)
          if (0 == (1 & t.mode)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, Ti(Dl, Ll), Ll |= n;
          else {
            if (0 == (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null
            }, t.updateQueue = null, Ti(Dl, Ll), Ll |= e, null;
            t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            }, r = null !== o ? o.baseLanes : n, Ti(Dl, Ll), Ll |= r
          }
        else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ti(Dl, Ll), Ll |= r;
        return ws(e, t, i, n), t.child
      }

      function Ts(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
      }

      function Es(e, t, n, r, i) {
        var o = Ai(n) ? Mi : Ci.current;
        return o = Oi(t, o), ko(t, i), n = Sa(e, t, n, r, o, i), r = ka(), null === e || bs ? (ro && r && Ji(t), t.flags |= 1, ws(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Hs(e, t, i))
      }

      function Cs(e, t, n, r, i) {
        if (Ai(n)) {
          var o = !0;
          Ni(t)
        } else o = !1;
        if (ko(t, i), null === t.stateNode) Us(e, t), Uo(t, n, r), Wo(t, n, r, i), r = !0;
        else if (null === e) {
          var a = t.stateNode,
            s = t.memoizedProps;
          a.props = s;
          var l = a.context,
            u = n.contextType;
          u = "object" == typeof u && null !== u ? To(u) : Oi(t, u = Ai(n) ? Mi : Ci.current);
          var c = n.getDerivedStateFromProps,
            d = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
          d || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== u) && Ho(t, a, r, u), Oo = !1;
          var f = t.memoizedState;
          a.state = f, Vo(t, r, a, i), l = t.memoizedState, s !== r || f !== l || Pi.current || Oo ? ("function" == typeof c && (Bo(t, n, c, r), l = t.memoizedState), (s = Oo || $o(t, n, s, r, f, l, u)) ? (d || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
          a = t.stateNode, Lo(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : go(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = "object" == typeof(l = n.contextType) && null !== l ? To(l) : Oi(t, l = Ai(n) ? Mi : Ci.current);
          var p = n.getDerivedStateFromProps;
          (c = "function" == typeof p || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== d || f !== l) && Ho(t, a, r, l), Oo = !1, f = t.memoizedState, a.state = f, Vo(t, r, a, i);
          var h = t.memoizedState;
          s !== d || f !== h || Pi.current || Oo ? ("function" == typeof p && (Bo(t, n, p, r), h = t.memoizedState), (u = Oo || $o(t, n, u, r, f, h, l) || !1) ? (c || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, h, l), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, l)), "function" == typeof a.componentDidUpdate && (t.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = l, r = u) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return Ps(e, t, n, r, o, i)
      }

      function Ps(e, t, n, r, i, o) {
        Ts(e, t);
        var a = 0 != (128 & t.flags);
        if (!r && !a) return i && Ri(t, n, !1), Hs(e, t, o);
        r = t.stateNode, ys.current = t;
        var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1, null !== e && a ? (t.child = Qo(t, e.child, null, o), t.child = Qo(t, null, s, o)) : ws(e, t, s, o), t.memoizedState = r.state, i && Ri(t, n, !0), t.child
      }

      function Ms(e) {
        var t = e.stateNode;
        t.pendingContext ? Di(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Di(0, t.context, !1), ra(e, t.containerInfo)
      }

      function Os(e, t, n, r, i) {
        return po(), ho(i), t.flags |= 256, ws(e, t, n, r), t.child
      }
      var As, Ls, Ds, zs, Ns = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };

      function Rs(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }
      }

      function Vs(e, t, n) {
        var r, i = t.pendingProps,
          a = sa.current,
          s = !1,
          l = 0 != (128 & t.flags);
        if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), Ti(sa, 1 & a), null === e) return lo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, l = {
          mode: "hidden",
          children: l
        }, 0 == (1 & i) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Ru(l, i, 0, null), e = Nu(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Rs(n), t.memoizedState = Ns, e) : Is(t, l));
        if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, i, a, s) {
          if (n) return 256 & t.flags ? (t.flags &= -257, Fs(e, t, s, r = cs(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Ru({
            mode: "visible",
            children: r.children
          }, i, 0, null), (a = Nu(a, i, s, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 0 != (1 & t.mode) && Qo(t, e.child, null, s), t.child.memoizedState = Rs(s), t.memoizedState = Ns, a);
          if (0 == (1 & t.mode)) return Fs(e, t, s, null);
          if ("$!" === i.data) {
            if (r = i.nextSibling && i.nextSibling.dataset) var l = r.dgst;
            return r = l, Fs(e, t, s, r = cs(a = Error(o(419)), r, void 0))
          }
          if (l = 0 != (s & e.childLanes), bs || l) {
            if (null !== (r = Ml)) {
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
              0 !== (i = 0 != (i & (r.suspendedLanes | s)) ? 0 : i) && i !== a.retryLane && (a.retryLane = i, Mo(e, i), nu(r, e, i, -1))
            }
            return mu(), Fs(e, t, s, r = cs(Error(o(421))))
          }
          return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = Cu.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, no = li(i.nextSibling), to = t, ro = !0, io = null, null !== e && (Gi[Yi++] = qi, Gi[Yi++] = Qi, Gi[Yi++] = Xi, qi = e.id, Qi = e.overflow, Xi = t), (t = Is(t, r.children)).flags |= 4096, t)
        }(e, t, l, i, r, a, n);
        if (s) {
          s = i.fallback, l = t.mode, r = (a = e.child).sibling;
          var u = {
            mode: "hidden",
            children: i.children
          };
          return 0 == (1 & l) && t.child !== a ? ((i = t.child).childLanes = 0, i.pendingProps = u, t.deletions = null) : (i = Du(a, u)).subtreeFlags = 14680064 & a.subtreeFlags, null !== r ? s = Du(r, s) : (s = Nu(s, l, n, null)).flags |= 2, s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, l = null === (l = e.child.memoizedState) ? Rs(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
          }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ns, i
        }
        return e = (s = e.child).sibling, i = Du(s, {
          mode: "visible",
          children: i.children
        }), 0 == (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
      }

      function Is(e, t) {
        return (t = Ru({
          mode: "visible",
          children: t
        }, e.mode, 0, null)).return = e, e.child = t
      }

      function Fs(e, t, n, r) {
        return null !== r && ho(r), Qo(t, e.child, null, n), (e = Is(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
      }

      function Bs(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), So(e.return, t, n)
      }

      function js(e, t, n, r, i) {
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

      function $s(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          o = r.tail;
        if (ws(e, t, r.children, n), 0 != (2 & (r = sa.current))) r = 1 & r | 2, t.flags |= 128;
        else {
          if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
            else if (19 === e.tag) Bs(e, n, t);
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
        if (Ti(sa, r), 0 == (1 & t.mode)) t.memoizedState = null;
        else switch (i) {
          case "forwards":
            for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === la(e) && (i = n), n = n.sibling;
            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), js(t, !1, i, n, o);
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i;) {
              if (null !== (e = i.alternate) && null === la(e)) {
                t.child = i;
                break
              }
              e = i.sibling, i.sibling = n, n = i, i = e
            }
            js(t, !0, n, null, o);
            break;
          case "together":
            js(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null
        }
        return t.child
      }

      function Us(e, t) {
        0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
      }

      function Hs(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Rl |= t.lanes, 0 == (n & t.childLanes)) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
          for (n = Du(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Du(e, e.pendingProps)).return = t;
          n.sibling = null
        }
        return t.child
      }

      function Ws(e, t) {
        if (!ro) switch (e.tailMode) {
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

      function Gs(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
        else
          for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
      }

      function Ys(e, t, n) {
        var r = t.pendingProps;
        switch (eo(t), t.tag) {
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
            return Gs(t), null;
          case 1:
          case 17:
            return Ai(t.type) && Li(), Gs(t), null;
          case 3:
            return r = t.stateNode, ia(), ki(Pi), ki(Ci), ca(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (co(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== io && (au(io), io = null))), Ls(e, t), Gs(t), null;
          case 5:
            aa(t);
            var i = na(ta.current);
            if (n = t.type, null !== e && null != t.stateNode) Ds(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return Gs(t), null
              }
              if (e = na(Jo.current), co(t)) {
                r = t.stateNode, n = t.type;
                var a = t.memoizedProps;
                switch (r[di] = t, r[fi] = a, e = 0 != (1 & t.mode), n) {
                  case "dialog":
                    Ir("cancel", r), Ir("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ir("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < zr.length; i++) Ir(zr[i], r);
                    break;
                  case "source":
                    Ir("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ir("error", r), Ir("load", r);
                    break;
                  case "details":
                    Ir("toggle", r);
                    break;
                  case "input":
                    Q(r, a), Ir("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!a.multiple
                    }, Ir("invalid", r);
                    break;
                  case "textarea":
                    ie(r, a), Ir("invalid", r)
                }
                for (var l in ye(n, a), i = null, a)
                  if (a.hasOwnProperty(l)) {
                    var u = a[l];
                    "children" === l ? "string" == typeof u ? r.textContent !== u && (!0 !== a.suppressHydrationWarning && Kr(r.textContent, u, e), i = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== a.suppressHydrationWarning && Kr(r.textContent, u, e), i = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Ir("scroll", r)
                  } switch (n) {
                  case "input":
                    G(r), J(r, a, !0);
                    break;
                  case "textarea":
                    G(r), ae(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof a.onClick && (r.onclick = Zr)
                }
                r = i, t.updateQueue = r, null !== r && (t.flags |= 4)
              } else {
                l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(n, {
                  is: r.is
                }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[di] = t, e[fi] = r, As(e, t, !1, !1), t.stateNode = e;
                e: {
                  switch (l = be(n, r), n) {
                    case "dialog":
                      Ir("cancel", e), Ir("close", e), i = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", e), i = r;
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < zr.length; i++) Ir(zr[i], e);
                      i = r;
                      break;
                    case "source":
                      Ir("error", e), i = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", e), Ir("load", e), i = r;
                      break;
                    case "details":
                      Ir("toggle", e), i = r;
                      break;
                    case "input":
                      Q(e, r), i = q(e, r), Ir("invalid", e);
                      break;
                    case "option":
                    default:
                      i = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, i = V({}, r, {
                        value: void 0
                      }), Ir("invalid", e);
                      break;
                    case "textarea":
                      ie(e, r), i = re(e, r), Ir("invalid", e)
                  }
                  for (a in ye(n, i), u = i)
                    if (u.hasOwnProperty(a)) {
                      var c = u[a];
                      "style" === a ? ge(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === a ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (s.hasOwnProperty(a) ? null != c && "onScroll" === a && Ir("scroll", e) : null != c && b(e, a, c, l))
                    } switch (n) {
                    case "input":
                      G(e), J(e, r, !1);
                      break;
                    case "textarea":
                      G(e), ae(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + H(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, null != (a = r.value) ? ne(e, !!r.multiple, a, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof i.onClick && (e.onclick = Zr)
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
            return Gs(t), null;
          case 6:
            if (e && null != t.stateNode) zs(e, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
              if (n = na(ta.current), na(Jo.current), co(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[di] = t, (a = r.nodeValue !== n) && null !== (e = to)) switch (e.tag) {
                  case 3:
                    Kr(r.nodeValue, n, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning && Kr(r.nodeValue, n, 0 != (1 & e.mode))
                }
                a && (t.flags |= 4)
              } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[di] = t, t.stateNode = r
            }
            return Gs(t), null;
          case 13:
            if (ki(sa), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
              if (ro && null !== no && 0 != (1 & t.mode) && 0 == (128 & t.flags)) fo(), po(), t.flags |= 98560, a = !1;
              else if (a = co(t), null !== r && null !== r.dehydrated) {
                if (null === e) {
                  if (!a) throw Error(o(318));
                  if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                  a[di] = t
                } else po(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                Gs(t), a = !1
              } else null !== io && (au(io), io = null), a = !0;
              if (!a) return 65536 & t.flags ? t : null
            }
            return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & sa.current) ? 0 === zl && (zl = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), Gs(t), null);
          case 4:
            return ia(), Ls(e, t), null === e && jr(t.stateNode.containerInfo), Gs(t), null;
          case 10:
            return _o(t.type._context), Gs(t), null;
          case 19:
            if (ki(sa), null === (a = t.memoizedState)) return Gs(t), null;
            if (r = 0 != (128 & t.flags), null === (l = a.rendering))
              if (r) Ws(a, !1);
              else {
                if (0 !== zl || null !== e && 0 != (128 & e.flags))
                  for (e = t.child; null !== e;) {
                    if (null !== (l = la(e))) {
                      for (t.flags |= 128, Ws(a, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (l = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = null === e ? null : {
                        lanes: e.lanes,
                        firstContext: e.firstContext
                      }), n = n.sibling;
                      return Ti(sa, 1 & sa.current | 2), t.child
                    }
                    e = e.sibling
                  }
                null !== a.tail && Ke() > $l && (t.flags |= 128, r = !0, Ws(a, !1), t.lanes = 4194304)
              }
            else {
              if (!r)
                if (null !== (e = la(l))) {
                  if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ws(a, !0), null === a.tail && "hidden" === a.tailMode && !l.alternate && !ro) return Gs(t), null
                } else 2 * Ke() - a.renderingStartTime > $l && 1073741824 !== n && (t.flags |= 128, r = !0, Ws(a, !1), t.lanes = 4194304);
              a.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = a.last) ? n.sibling = l : t.child = l, a.last = l)
            }
            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ke(), t.sibling = null, n = sa.current, Ti(sa, r ? 1 & n | 2 : 1 & n), t) : (Gs(t), null);
          case 22:
          case 23:
            return du(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Ll) && (Gs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Gs(t), null;
          case 24:
          case 25:
            return null
        }
        throw Error(o(156, t.tag))
      }

      function Xs(e, t) {
        switch (eo(t), t.tag) {
          case 1:
            return Ai(t.type) && Li(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 3:
            return ia(), ki(Pi), ki(Ci), ca(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
          case 5:
            return aa(t), null;
          case 13:
            if (ki(sa), null !== (e = t.memoizedState) && null !== e.dehydrated) {
              if (null === t.alternate) throw Error(o(340));
              po()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 19:
            return ki(sa), null;
          case 4:
            return ia(), null;
          case 10:
            return _o(t.type._context), null;
          case 22:
          case 23:
            return du(), null;
          default:
            return null
        }
      }
      As = function(e, t) {
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
      }, Ls = function() {}, Ds = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          e = t.stateNode, na(Jo.current);
          var o, a = null;
          switch (n) {
            case "input":
              i = q(e, i), r = q(e, r), a = [];
              break;
            case "select":
              i = V({}, i, {
                value: void 0
              }), r = V({}, r, {
                value: void 0
              }), a = [];
              break;
            case "textarea":
              i = re(e, i), r = re(e, r), a = [];
              break;
            default:
              "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Zr)
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
            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (a = a || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (a = a || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Ir("scroll", e), a || l === u || (a = [])) : (a = a || []).push(c, u))
          }
          n && (a = a || []).push("style", n);
          var c = a;
          (t.updateQueue = c) && (t.flags |= 4)
        }
      }, zs = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
      };
      var qs = !1,
        Qs = !1,
        Ks = "function" == typeof WeakSet ? WeakSet : Set,
        Zs = null;

      function Js(e, t) {
        var n = e.ref;
        if (null !== n)
          if ("function" == typeof n) try {
            n(null)
          } catch (n) {
            ku(e, t, n)
          } else n.current = null
      }

      function el(e, t, n) {
        try {
          n()
        } catch (n) {
          ku(e, t, n)
        }
      }
      var tl = !1;

      function nl(e, t, n) {
        var r = t.updateQueue;
        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var i = r = r.next;
          do {
            if ((i.tag & e) === e) {
              var o = i.destroy;
              i.destroy = void 0, void 0 !== o && el(t, n, o)
            }
            i = i.next
          } while (i !== r)
        }
      }

      function rl(e, t) {
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

      function il(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
        }
      }

      function ol(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, ol(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[di], delete t[fi], delete t[hi], delete t[mi], delete t[gi]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
      }

      function al(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
      }

      function sl(e) {
        e: for (;;) {
          for (; null === e.sibling;) {
            if (null === e.return || al(e.return)) return null;
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

      function ll(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
          for (ll(e, t, n), e = e.sibling; null !== e;) ll(e, t, n), e = e.sibling
      }

      function ul(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
      }
      var cl = null,
        dl = !1;

      function fl(e, t, n) {
        for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling
      }

      function pl(e, t, n) {
        if (ot && "function" == typeof ot.onCommitFiberUnmount) try {
          ot.onCommitFiberUnmount(it, n)
        } catch (e) {}
        switch (n.tag) {
          case 5:
            Qs || Js(n, t);
          case 6:
            var r = cl,
              i = dl;
            cl = null, fl(e, t, n), dl = i, null !== (cl = r) && (dl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cl.removeChild(n.stateNode));
            break;
          case 18:
            null !== cl && (dl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? si(e.parentNode, n) : 1 === e.nodeType && si(e, n), jt(e)) : si(cl, n.stateNode));
            break;
          case 4:
            r = cl, i = dl, cl = n.stateNode.containerInfo, dl = !0, fl(e, t, n), cl = r, dl = i;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Qs && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              i = r = r.next;
              do {
                var o = i,
                  a = o.destroy;
                o = o.tag, void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && el(n, t, a), i = i.next
              } while (i !== r)
            }
            fl(e, t, n);
            break;
          case 1:
            if (!Qs && (Js(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (e) {
              ku(n, t, e)
            }
            fl(e, t, n);
            break;
          case 21:
            fl(e, t, n);
            break;
          case 22:
            1 & n.mode ? (Qs = (r = Qs) || null !== n.memoizedState, fl(e, t, n), Qs = r) : fl(e, t, n);
            break;
          default:
            fl(e, t, n)
        }
      }

      function hl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Ks), t.forEach((function(t) {
            var r = Pu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
          }))
        }
      }

      function ml(e, t) {
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
                    cl = l.stateNode, dl = !1;
                    break e;
                  case 3:
                  case 4:
                    cl = l.stateNode.containerInfo, dl = !0;
                    break e
                }
                l = l.return
              }
              if (null === cl) throw Error(o(160));
              pl(a, s, i), cl = null, dl = !1;
              var u = i.alternate;
              null !== u && (u.return = null), i.return = null
            } catch (e) {
              ku(i, t, e)
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; null !== t;) gl(t, e), t = t.sibling
      }

      function gl(e, t) {
        var n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (ml(t, e), vl(e), 4 & r) {
              try {
                nl(3, e, e.return), rl(3, e)
              } catch (t) {
                ku(e, e.return, t)
              }
              try {
                nl(5, e, e.return)
              } catch (t) {
                ku(e, e.return, t)
              }
            }
            break;
          case 1:
            ml(t, e), vl(e), 512 & r && null !== n && Js(n, n.return);
            break;
          case 5:
            if (ml(t, e), vl(e), 512 & r && null !== n && Js(n, n.return), 32 & e.flags) {
              var i = e.stateNode;
              try {
                fe(i, "")
              } catch (t) {
                ku(e, e.return, t)
              }
            }
            if (4 & r && null != (i = e.stateNode)) {
              var a = e.memoizedProps,
                s = null !== n ? n.memoizedProps : a,
                l = e.type,
                u = e.updateQueue;
              if (e.updateQueue = null, null !== u) try {
                "input" === l && "radio" === a.type && null != a.name && K(i, a), be(l, s);
                var c = be(l, a);
                for (s = 0; s < u.length; s += 2) {
                  var d = u[s],
                    f = u[s + 1];
                  "style" === d ? ge(i, f) : "dangerouslySetInnerHTML" === d ? de(i, f) : "children" === d ? fe(i, f) : b(i, d, f, c)
                }
                switch (l) {
                  case "input":
                    Z(i, a);
                    break;
                  case "textarea":
                    oe(i, a);
                    break;
                  case "select":
                    var p = i._wrapperState.wasMultiple;
                    i._wrapperState.wasMultiple = !!a.multiple;
                    var h = a.value;
                    null != h ? ne(i, !!a.multiple, h, !1) : p !== !!a.multiple && (null != a.defaultValue ? ne(i, !!a.multiple, a.defaultValue, !0) : ne(i, !!a.multiple, a.multiple ? [] : "", !1))
                }
                i[fi] = a
              } catch (t) {
                ku(e, e.return, t)
              }
            }
            break;
          case 6:
            if (ml(t, e), vl(e), 4 & r) {
              if (null === e.stateNode) throw Error(o(162));
              i = e.stateNode, a = e.memoizedProps;
              try {
                i.nodeValue = a
              } catch (t) {
                ku(e, e.return, t)
              }
            }
            break;
          case 3:
            if (ml(t, e), vl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
              jt(t.containerInfo)
            } catch (t) {
              ku(e, e.return, t)
            }
            break;
          case 4:
          default:
            ml(t, e), vl(e);
            break;
          case 13:
            ml(t, e), vl(e), 8192 & (i = e.child).flags && (a = null !== i.memoizedState, i.stateNode.isHidden = a, !a || null !== i.alternate && null !== i.alternate.memoizedState || (jl = Ke())), 4 & r && hl(e);
            break;
          case 22:
            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Qs = (c = Qs) || d, ml(t, e), Qs = c) : ml(t, e), vl(e), 8192 & r) {
              if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                for (Zs = e, d = e.child; null !== d;) {
                  for (f = Zs = d; null !== Zs;) {
                    switch (h = (p = Zs).child, p.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        nl(4, p, p.return);
                        break;
                      case 1:
                        Js(p, p.return);
                        var m = p.stateNode;
                        if ("function" == typeof m.componentWillUnmount) {
                          r = p, n = p.return;
                          try {
                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                          } catch (e) {
                            ku(r, n, e)
                          }
                        }
                        break;
                      case 5:
                        Js(p, p.return);
                        break;
                      case 22:
                        if (null !== p.memoizedState) {
                          xl(f);
                          continue
                        }
                    }
                    null !== h ? (h.return = p, Zs = h) : xl(f)
                  }
                  d = d.sibling
                }
              e: for (d = null, f = e;;) {
                if (5 === f.tag) {
                  if (null === d) {
                    d = f;
                    try {
                      i = f.stateNode, c ? "function" == typeof(a = i.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (l = f.stateNode, s = null != (u = f.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
                    } catch (t) {
                      ku(e, e.return, t)
                    }
                  }
                } else if (6 === f.tag) {
                  if (null === d) try {
                    f.stateNode.nodeValue = c ? "" : f.memoizedProps
                  } catch (t) {
                    ku(e, e.return, t)
                  }
                } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                  f.child.return = f, f = f.child;
                  continue
                }
                if (f === e) break e;
                for (; null === f.sibling;) {
                  if (null === f.return || f.return === e) break e;
                  d === f && (d = null), f = f.return
                }
                d === f && (d = null), f.sibling.return = f.return, f = f.sibling
              }
            }
            break;
          case 19:
            ml(t, e), vl(e), 4 & r && hl(e);
          case 21:
        }
      }

      function vl(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var n = e.return; null !== n;) {
                if (al(n)) {
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
                32 & r.flags && (fe(i, ""), r.flags &= -33), ul(e, sl(e), i);
                break;
              case 3:
              case 4:
                var a = r.stateNode.containerInfo;
                ll(e, sl(e), a);
                break;
              default:
                throw Error(o(161))
            }
          }
          catch (t) {
            ku(e, e.return, t)
          }
          e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
      }

      function yl(e, t, n) {
        Zs = e, bl(e, t, n)
      }

      function bl(e, t, n) {
        for (var r = 0 != (1 & e.mode); null !== Zs;) {
          var i = Zs,
            o = i.child;
          if (22 === i.tag && r) {
            var a = null !== i.memoizedState || qs;
            if (!a) {
              var s = i.alternate,
                l = null !== s && null !== s.memoizedState || Qs;
              s = qs;
              var u = Qs;
              if (qs = a, (Qs = l) && !u)
                for (Zs = i; null !== Zs;) l = (a = Zs).child, 22 === a.tag && null !== a.memoizedState ? _l(i) : null !== l ? (l.return = a, Zs = l) : _l(i);
              for (; null !== o;) Zs = o, bl(o, t, n), o = o.sibling;
              Zs = i, qs = s, Qs = u
            }
            wl(e)
          } else 0 != (8772 & i.subtreeFlags) && null !== o ? (o.return = i, Zs = o) : wl(e)
        }
      }

      function wl(e) {
        for (; null !== Zs;) {
          var t = Zs;
          if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 != (8772 & t.flags)) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Qs || rl(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !Qs)
                    if (null === n) r.componentDidMount();
                    else {
                      var i = t.elementType === t.type ? n.memoizedProps : go(t.type, n.memoizedProps);
                      r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                    } var a = t.updateQueue;
                  null !== a && Io(t, a, r);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (null !== s) {
                    if (n = null, null !== t.child) switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode
                    }
                    Io(t, s, n)
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
                      var d = c.memoizedState;
                      if (null !== d) {
                        var f = d.dehydrated;
                        null !== f && jt(f)
                      }
                    }
                  }
                  break;
                default:
                  throw Error(o(163))
              }
              Qs || 512 & t.flags && il(t)
            } catch (e) {
              ku(t, t.return, e)
            }
          }
          if (t === e) {
            Zs = null;
            break
          }
          if (null !== (n = t.sibling)) {
            n.return = t.return, Zs = n;
            break
          }
          Zs = t.return
        }
      }

      function xl(e) {
        for (; null !== Zs;) {
          var t = Zs;
          if (t === e) {
            Zs = null;
            break
          }
          var n = t.sibling;
          if (null !== n) {
            n.return = t.return, Zs = n;
            break
          }
          Zs = t.return
        }
      }

      function _l(e) {
        for (; null !== Zs;) {
          var t = Zs;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  rl(4, t)
                } catch (e) {
                  ku(t, n, e)
                }
                break;
              case 1:
                var r = t.stateNode;
                if ("function" == typeof r.componentDidMount) {
                  var i = t.return;
                  try {
                    r.componentDidMount()
                  } catch (e) {
                    ku(t, i, e)
                  }
                }
                var o = t.return;
                try {
                  il(t)
                } catch (e) {
                  ku(t, o, e)
                }
                break;
              case 5:
                var a = t.return;
                try {
                  il(t)
                } catch (e) {
                  ku(t, a, e)
                }
            }
          } catch (e) {
            ku(t, t.return, e)
          }
          if (t === e) {
            Zs = null;
            break
          }
          var s = t.sibling;
          if (null !== s) {
            s.return = t.return, Zs = s;
            break
          }
          Zs = t.return
        }
      }
      var Sl, kl = Math.ceil,
        Tl = w.ReactCurrentDispatcher,
        El = w.ReactCurrentOwner,
        Cl = w.ReactCurrentBatchConfig,
        Pl = 0,
        Ml = null,
        Ol = null,
        Al = 0,
        Ll = 0,
        Dl = Si(0),
        zl = 0,
        Nl = null,
        Rl = 0,
        Vl = 0,
        Il = 0,
        Fl = null,
        Bl = null,
        jl = 0,
        $l = 1 / 0,
        Ul = null,
        Hl = !1,
        Wl = null,
        Gl = null,
        Yl = !1,
        Xl = null,
        ql = 0,
        Ql = 0,
        Kl = null,
        Zl = -1,
        Jl = 0;

      function eu() {
        return 0 != (6 & Pl) ? Ke() : -1 !== Zl ? Zl : Zl = Ke()
      }

      function tu(e) {
        return 0 == (1 & e.mode) ? 1 : 0 != (2 & Pl) && 0 !== Al ? Al & -Al : null !== mo.transition ? (0 === Jl && (Jl = mt()), Jl) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : qt(e.type)
      }

      function nu(e, t, n, r) {
        if (50 < Ql) throw Ql = 0, Kl = null, Error(o(185));
        gt(e, n, r), 0 != (2 & Pl) && e === Ml || (e === Ml && (0 == (2 & Pl) && (Vl |= n), 4 === zl && su(e, Al)), ru(e, r), 1 === n && 0 === Pl && 0 == (1 & t.mode) && ($l = Ke() + 500, Ii && ji()))
      }

      function ru(e, t) {
        var n = e.callbackNode;
        ! function(e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var a = 31 - at(o),
              s = 1 << a,
              l = i[a]; - 1 === l ? 0 != (s & n) && 0 == (s & r) || (i[a] = pt(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s
          }
        }(e, t);
        var r = ft(e, e === Ml ? Al : 0);
        if (0 === r) null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (null != n && Xe(n), 1 === t) 0 === e.tag ? function(e) {
            Ii = !0, Bi(e)
          }(lu.bind(null, e)) : Bi(lu.bind(null, e)), oi((function() {
            0 == (6 & Pl) && ji()
          })), n = null;
          else {
            switch (bt(r)) {
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
            n = Mu(n, iu.bind(null, e))
          }
          e.callbackPriority = t, e.callbackNode = n
        }
      }

      function iu(e, t) {
        if (Zl = -1, Jl = 0, 0 != (6 & Pl)) throw Error(o(327));
        var n = e.callbackNode;
        if (_u() && e.callbackNode !== n) return null;
        var r = ft(e, e === Ml ? Al : 0);
        if (0 === r) return null;
        if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gu(e, r);
        else {
          t = r;
          var i = Pl;
          Pl |= 2;
          var a = hu();
          for (Ml === e && Al === t || (Ul = null, $l = Ke() + 500, fu(e, t));;) try {
            yu();
            break
          } catch (t) {
            pu(e, t)
          }
          xo(), Tl.current = a, Pl = i, null !== Ol ? t = 0 : (Ml = null, Al = 0, t = zl)
        }
        if (0 !== t) {
          if (2 === t && 0 !== (i = ht(e)) && (r = i, t = ou(e, i)), 1 === t) throw n = Nl, fu(e, 0), su(e, r), ru(e, Ke()), n;
          if (6 === t) su(e, r);
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
                          if (!ar(o(), i)) return !1
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
              }(i) && (2 === (t = gu(e, r)) && 0 !== (a = ht(e)) && (r = a, t = ou(e, a)), 1 === t)) throw n = Nl, fu(e, 0), su(e, r), ru(e, Ke()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                xu(e, Bl, Ul);
                break;
              case 3:
                if (su(e, r), (130023424 & r) === r && 10 < (t = jl + 500 - Ke())) {
                  if (0 !== ft(e, 0)) break;
                  if (((i = e.suspendedLanes) & r) !== r) {
                    eu(), e.pingedLanes |= e.suspendedLanes & i;
                    break
                  }
                  e.timeoutHandle = ni(xu.bind(null, e, Bl, Ul), t);
                  break
                }
                xu(e, Bl, Ul);
                break;
              case 4:
                if (su(e, r), (4194240 & r) === r) break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                  var s = 31 - at(r);
                  a = 1 << s, (s = t[s]) > i && (i = s), r &= ~a
                }
                if (r = i, 10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kl(r / 1960)) - r)) {
                  e.timeoutHandle = ni(xu.bind(null, e, Bl, Ul), r);
                  break
                }
                xu(e, Bl, Ul);
                break;
              default:
                throw Error(o(329))
            }
          }
        }
        return ru(e, Ke()), e.callbackNode === n ? iu.bind(null, e) : null
      }

      function ou(e, t) {
        var n = Fl;
        return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && (t = Bl, Bl = n, null !== t && au(t)), e
      }

      function au(e) {
        null === Bl ? Bl = e : Bl.push.apply(Bl, e)
      }

      function su(e, t) {
        for (t &= ~Il, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
          var n = 31 - at(t),
            r = 1 << n;
          e[n] = -1, t &= ~r
        }
      }

      function lu(e) {
        if (0 != (6 & Pl)) throw Error(o(327));
        _u();
        var t = ft(e, 0);
        if (0 == (1 & t)) return ru(e, Ke()), null;
        var n = gu(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = ht(e);
          0 !== r && (t = r, n = ou(e, r))
        }
        if (1 === n) throw n = Nl, fu(e, 0), su(e, t), ru(e, Ke()), n;
        if (6 === n) throw Error(o(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, xu(e, Bl, Ul), ru(e, Ke()), null
      }

      function uu(e, t) {
        var n = Pl;
        Pl |= 1;
        try {
          return e(t)
        } finally {
          0 === (Pl = n) && ($l = Ke() + 500, Ii && ji())
        }
      }

      function cu(e) {
        null !== Xl && 0 === Xl.tag && 0 == (6 & Pl) && _u();
        var t = Pl;
        Pl |= 1;
        var n = Cl.transition,
          r = yt;
        try {
          if (Cl.transition = null, yt = 1, e) return e()
        } finally {
          yt = r, Cl.transition = n, 0 == (6 & (Pl = t)) && ji()
        }
      }

      function du() {
        Ll = Dl.current, ki(Dl)
      }

      function fu(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, ri(n)), null !== Ol)
          for (n = Ol.return; null !== n;) {
            var r = n;
            switch (eo(r), r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && Li();
                break;
              case 3:
                ia(), ki(Pi), ki(Ci), ca();
                break;
              case 5:
                aa(r);
                break;
              case 4:
                ia();
                break;
              case 13:
              case 19:
                ki(sa);
                break;
              case 10:
                _o(r.type._context);
                break;
              case 22:
              case 23:
                du()
            }
            n = n.return
          }
        if (Ml = e, Ol = e = Du(e.current, null), Al = Ll = t, zl = 0, Nl = null, Il = Vl = Rl = 0, Bl = Fl = null, null !== Eo) {
          for (t = 0; t < Eo.length; t++)
            if (null !== (r = (n = Eo[t]).interleaved)) {
              n.interleaved = null;
              var i = r.next,
                o = n.pending;
              if (null !== o) {
                var a = o.next;
                o.next = i, r.next = a
              }
              n.pending = r
            } Eo = null
        }
        return e
      }

      function pu(e, t) {
        for (;;) {
          var n = Ol;
          try {
            if (xo(), da.current = os, va) {
              for (var r = ha.memoizedState; null !== r;) {
                var i = r.queue;
                null !== i && (i.pending = null), r = r.next
              }
              va = !1
            }
            if (pa = 0, ga = ma = ha = null, ya = !1, ba = 0, El.current = null, null === n || null === n.return) {
              zl = 1, Nl = t, Ol = null;
              break
            }
            e: {
              var a = e,
                s = n.return,
                l = n,
                u = t;
              if (t = Al, l.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                var c = u,
                  d = l,
                  f = d.tag;
                if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                  var p = d.alternate;
                  p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                }
                var h = gs(s);
                if (null !== h) {
                  h.flags &= -257, vs(h, s, l, 0, t), 1 & h.mode && ms(a, c, t), u = c;
                  var m = (t = h).updateQueue;
                  if (null === m) {
                    var g = new Set;
                    g.add(u), t.updateQueue = g
                  } else m.add(u);
                  break e
                }
                if (0 == (1 & t)) {
                  ms(a, c, t), mu();
                  break e
                }
                u = Error(o(426))
              } else if (ro && 1 & l.mode) {
                var v = gs(s);
                if (null !== v) {
                  0 == (65536 & v.flags) && (v.flags |= 256), vs(v, s, l, 0, t), ho(us(u, l));
                  break e
                }
              }
              a = u = us(u, l),
              4 !== zl && (zl = 2),
              null === Fl ? Fl = [a] : Fl.push(a),
              a = s;do {
                switch (a.tag) {
                  case 3:
                    a.flags |= 65536, t &= -t, a.lanes |= t, Ro(a, ps(0, u, t));
                    break e;
                  case 1:
                    l = u;
                    var y = a.type,
                      b = a.stateNode;
                    if (0 == (128 & a.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === Gl || !Gl.has(b)))) {
                      a.flags |= 65536, t &= -t, a.lanes |= t, Ro(a, hs(a, l, t));
                      break e
                    }
                }
                a = a.return
              } while (null !== a)
            }
            wu(n)
          } catch (e) {
            t = e, Ol === n && null !== n && (Ol = n = n.return);
            continue
          }
          break
        }
      }

      function hu() {
        var e = Tl.current;
        return Tl.current = os, null === e ? os : e
      }

      function mu() {
        0 !== zl && 3 !== zl && 2 !== zl || (zl = 4), null === Ml || 0 == (268435455 & Rl) && 0 == (268435455 & Vl) || su(Ml, Al)
      }

      function gu(e, t) {
        var n = Pl;
        Pl |= 2;
        var r = hu();
        for (Ml === e && Al === t || (Ul = null, fu(e, t));;) try {
          vu();
          break
        } catch (t) {
          pu(e, t)
        }
        if (xo(), Pl = n, Tl.current = r, null !== Ol) throw Error(o(261));
        return Ml = null, Al = 0, zl
      }

      function vu() {
        for (; null !== Ol;) bu(Ol)
      }

      function yu() {
        for (; null !== Ol && !qe();) bu(Ol)
      }

      function bu(e) {
        var t = Sl(e.alternate, e, Ll);
        e.memoizedProps = e.pendingProps, null === t ? wu(e) : Ol = t, El.current = null
      }

      function wu(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, 0 == (32768 & t.flags)) {
            if (null !== (n = Ys(n, t, Ll))) return void(Ol = n)
          } else {
            if (null !== (n = Xs(n, t))) return n.flags &= 32767, void(Ol = n);
            if (null === e) return zl = 6, void(Ol = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
          }
          if (null !== (t = t.sibling)) return void(Ol = t);
          Ol = t = e
        } while (null !== t);
        0 === zl && (zl = 5)
      }

      function xu(e, t, n) {
        var r = yt,
          i = Cl.transition;
        try {
          Cl.transition = null, yt = 1,
            function(e, t, n, r) {
              do {
                _u()
              } while (null !== Xl);
              if (0 != (6 & Pl)) throw Error(o(327));
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
                }(e, a), e === Ml && (Ol = Ml = null, Al = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Yl || (Yl = !0, Mu(tt, (function() {
                  return _u(), null
                }))), a = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || a) {
                a = Cl.transition, Cl.transition = null;
                var s = yt;
                yt = 1;
                var l = Pl;
                Pl |= 4, El.current = null,
                  function(e, t) {
                    if (Jr = Ut, fr(e = dr())) {
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
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (var h; f !== n || 0 !== i && 3 !== f.nodeType || (l = s + i), f !== a || 0 !== r && 3 !== f.nodeType || (u = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                            for (;;) {
                              if (f === e) break t;
                              if (p === n && ++c === i && (l = s), p === a && ++d === r && (u = s), null !== (h = f.nextSibling)) break;
                              p = (f = p).parentNode
                            }
                            f = h
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
                    for (ei = {
                        focusedElem: e,
                        selectionRange: n
                      }, Ut = !1, Zs = t; null !== Zs;)
                      if (e = (t = Zs).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Zs = e;
                      else
                        for (; null !== Zs;) {
                          t = Zs;
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
                                    b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : go(t.type, g), v);
                                  y.__reactInternalSnapshotBeforeUpdate = b
                                }
                                break;
                              case 3:
                                var w = t.stateNode.containerInfo;
                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                break;
                              default:
                                throw Error(o(163))
                            }
                          } catch (e) {
                            ku(t, t.return, e)
                          }
                          if (null !== (e = t.sibling)) {
                            e.return = t.return, Zs = e;
                            break
                          }
                          Zs = t.return
                        }
                    m = tl, tl = !1
                  }(e, n), gl(n, e), pr(ei), Ut = !!Jr, ei = Jr = null, e.current = n, yl(n, e, i), Qe(), Pl = l, yt = s, Cl.transition = a
              } else e.current = n;
              if (Yl && (Yl = !1, Xl = e, ql = i), 0 === (a = e.pendingLanes) && (Gl = null), function(e) {
                  if (ot && "function" == typeof ot.onCommitFiberRoot) try {
                    ot.onCommitFiberRoot(it, e, void 0, 128 == (128 & e.current.flags))
                  } catch (e) {}
                }(n.stateNode), ru(e, Ke()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((i = t[n]).value, {
                  componentStack: i.stack,
                  digest: i.digest
                });
              if (Hl) throw Hl = !1, e = Wl, Wl = null, e;
              0 != (1 & ql) && 0 !== e.tag && _u(), 0 != (1 & (a = e.pendingLanes)) ? e === Kl ? Ql++ : (Ql = 0, Kl = e) : Ql = 0, ji()
            }(e, t, n, r)
        } finally {
          Cl.transition = i, yt = r
        }
        return null
      }

      function _u() {
        if (null !== Xl) {
          var e = bt(ql),
            t = Cl.transition,
            n = yt;
          try {
            if (Cl.transition = null, yt = 16 > e ? 16 : e, null === Xl) var r = !1;
            else {
              if (e = Xl, Xl = null, ql = 0, 0 != (6 & Pl)) throw Error(o(331));
              var i = Pl;
              for (Pl |= 4, Zs = e.current; null !== Zs;) {
                var a = Zs,
                  s = a.child;
                if (0 != (16 & Zs.flags)) {
                  var l = a.deletions;
                  if (null !== l) {
                    for (var u = 0; u < l.length; u++) {
                      var c = l[u];
                      for (Zs = c; null !== Zs;) {
                        var d = Zs;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(8, d, a)
                        }
                        var f = d.child;
                        if (null !== f) f.return = d, Zs = f;
                        else
                          for (; null !== Zs;) {
                            var p = (d = Zs).sibling,
                              h = d.return;
                            if (ol(d), d === c) {
                              Zs = null;
                              break
                            }
                            if (null !== p) {
                              p.return = h, Zs = p;
                              break
                            }
                            Zs = h
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
                    Zs = a
                  }
                }
                if (0 != (2064 & a.subtreeFlags) && null !== s) s.return = a, Zs = s;
                else e: for (; null !== Zs;) {
                  if (0 != (2048 & (a = Zs).flags)) switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nl(9, a, a.return)
                  }
                  var y = a.sibling;
                  if (null !== y) {
                    y.return = a.return, Zs = y;
                    break e
                  }
                  Zs = a.return
                }
              }
              var b = e.current;
              for (Zs = b; null !== Zs;) {
                var w = (s = Zs).child;
                if (0 != (2064 & s.subtreeFlags) && null !== w) w.return = s, Zs = w;
                else e: for (s = b; null !== Zs;) {
                  if (0 != (2048 & (l = Zs).flags)) try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rl(9, l)
                    }
                  } catch (e) {
                    ku(l, l.return, e)
                  }
                  if (l === s) {
                    Zs = null;
                    break e
                  }
                  var x = l.sibling;
                  if (null !== x) {
                    x.return = l.return, Zs = x;
                    break e
                  }
                  Zs = l.return
                }
              }
              if (Pl = i, ji(), ot && "function" == typeof ot.onPostCommitFiberRoot) try {
                ot.onPostCommitFiberRoot(it, e)
              } catch (e) {}
              r = !0
            }
            return r
          } finally {
            yt = n, Cl.transition = t
          }
        }
        return !1
      }

      function Su(e, t, n) {
        e = zo(e, t = ps(0, t = us(n, t), 1), 1), t = eu(), null !== e && (gt(e, 1, t), ru(e, t))
      }

      function ku(e, t, n) {
        if (3 === e.tag) Su(e, e, n);
        else
          for (; null !== t;) {
            if (3 === t.tag) {
              Su(t, e, n);
              break
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Gl || !Gl.has(r))) {
                t = zo(t, e = hs(t, e = us(n, e), 1), 1), e = eu(), null !== t && (gt(t, 1, e), ru(t, e));
                break
              }
            }
            t = t.return
          }
      }

      function Tu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), t = eu(), e.pingedLanes |= e.suspendedLanes & n, Ml === e && (Al & n) === n && (4 === zl || 3 === zl && (130023424 & Al) === Al && 500 > Ke() - jl ? fu(e, 0) : Il |= n), ru(e, t)
      }

      function Eu(e, t) {
        0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
        var n = eu();
        null !== (e = Mo(e, t)) && (gt(e, t, n), ru(e, n))
      }

      function Cu(e) {
        var t = e.memoizedState,
          n = 0;
        null !== t && (n = t.retryLane), Eu(e, n)
      }

      function Pu(e, t) {
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
        null !== r && r.delete(t), Eu(e, n)
      }

      function Mu(e, t) {
        return Ye(e, t)
      }

      function Ou(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
      }

      function Au(e, t, n, r) {
        return new Ou(e, t, n, r)
      }

      function Lu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
      }

      function Du(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Au(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
      }

      function zu(e, t, n, r, i, a) {
        var s = 2;
        if (r = e, "function" == typeof e) Lu(e) && (s = 1);
        else if ("string" == typeof e) s = 5;
        else e: switch (e) {
          case S:
            return Nu(n.children, i, a, t);
          case k:
            s = 8, i |= 8;
            break;
          case T:
            return (e = Au(12, n, t, 2 | i)).elementType = T, e.lanes = a, e;
          case M:
            return (e = Au(13, n, t, i)).elementType = M, e.lanes = a, e;
          case O:
            return (e = Au(19, n, t, i)).elementType = O, e.lanes = a, e;
          case D:
            return Ru(n, i, a, t);
          default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
              case E:
                s = 10;
                break e;
              case C:
                s = 9;
                break e;
              case P:
                s = 11;
                break e;
              case A:
                s = 14;
                break e;
              case L:
                s = 16, r = null;
                break e
            }
            throw Error(o(130, null == e ? e : typeof e, ""))
        }
        return (t = Au(s, n, t, i)).elementType = e, t.type = r, t.lanes = a, t
      }

      function Nu(e, t, n, r) {
        return (e = Au(7, e, r, t)).lanes = n, e
      }

      function Ru(e, t, n, r) {
        return (e = Au(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = {
          isHidden: !1
        }, e
      }

      function Vu(e, t, n) {
        return (e = Au(6, e, null, t)).lanes = n, e
      }

      function Iu(e, t, n) {
        return (t = Au(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t
      }

      function Fu(e) {
        if (!e) return Ei;
        e: {
          if ($e(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
          var t = e;do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (Ai(t.type)) {
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
          if (Ai(n)) return zi(e, n, t)
        }
        return t
      }

      function Bu(e, t, n, r) {
        var i = t.current,
          o = eu(),
          a = tu(i);
        return n = Fu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Do(o, a)).payload = {
          element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = zo(i, t, a)) && (nu(e, i, a, o), No(e, i, a)), a
      }

      function ju(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t
        }
      }

      function $u(e, t) {
        ju(e, t), (e = e.alternate) && ju(e, t)
      }
      Sl = function(e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || Pi.current) bs = !0;
          else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return bs = !1,
              function(e, t, n) {
                switch (t.tag) {
                  case 3:
                    Ms(t), po();
                    break;
                  case 5:
                    oa(t);
                    break;
                  case 1:
                    Ai(t.type) && Ni(t);
                    break;
                  case 4:
                    ra(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      i = t.memoizedProps.value;
                    Ti(vo, r._currentValue), r._currentValue = i;
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ti(sa, 1 & sa.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Vs(e, t, n) : (Ti(sa, 1 & sa.current), null !== (e = Hs(e, t, n)) ? e.sibling : null);
                    Ti(sa, 1 & sa.current);
                    break;
                  case 19:
                    if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                      if (r) return $s(e, t, n);
                      t.flags |= 128
                    }
                    if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), Ti(sa, sa.current), r) break;
                    return null;
                  case 22:
                  case 23:
                    return t.lanes = 0, ks(e, t, n)
                }
                return Hs(e, t, n)
              }(e, t, n);
            bs = 0 != (131072 & e.flags)
          }
        else bs = !1, ro && 0 != (1048576 & t.flags) && Zi(t, Wi, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            Us(e, t), e = t.pendingProps;
            var i = Oi(t, Ci.current);
            ko(t, n), i = Sa(null, t, r, e, i, n);
            var a = ka();
            return t.flags |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ai(r) ? (a = !0, Ni(t)) : a = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, Ao(t), i.updater = jo, t.stateNode = i, i._reactInternals = t, Wo(t, r, e, n), t = Ps(null, t, r, !0, a, n)) : (t.tag = 0, ro && a && Ji(t), ws(null, t, i, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch (Us(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) {
                  if ("function" == typeof e) return Lu(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === P) return 11;
                    if (e === A) return 14
                  }
                  return 2
                }(r), e = go(r, e), i) {
                case 0:
                  t = Es(null, t, r, e, n);
                  break e;
                case 1:
                  t = Cs(null, t, r, e, n);
                  break e;
                case 11:
                  t = xs(null, t, r, e, n);
                  break e;
                case 14:
                  t = _s(null, t, r, go(r.type, e), n);
                  break e
              }
              throw Error(o(306, r, ""))
            }
            return t;
          case 0:
            return r = t.type, i = t.pendingProps, Es(e, t, r, i = t.elementType === r ? i : go(r, i), n);
          case 1:
            return r = t.type, i = t.pendingProps, Cs(e, t, r, i = t.elementType === r ? i : go(r, i), n);
          case 3:
            e: {
              if (Ms(t), null === e) throw Error(o(387));r = t.pendingProps,
              i = (a = t.memoizedState).element,
              Lo(e, t),
              Vo(t, r, null, n);
              var s = t.memoizedState;
              if (r = s.element, a.isDehydrated) {
                if (a = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                  }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                  t = Os(e, t, r, n, i = us(Error(o(423)), t));
                  break e
                }
                if (r !== i) {
                  t = Os(e, t, r, n, i = us(Error(o(424)), t));
                  break e
                }
                for (no = li(t.stateNode.containerInfo.firstChild), to = t, ro = !0, io = null, n = Ko(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
              } else {
                if (po(), r === i) {
                  t = Hs(e, t, n);
                  break e
                }
                ws(e, t, r, n)
              }
              t = t.child
            }
            return t;
          case 5:
            return oa(t), null === e && lo(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = i.children, ti(r, i) ? s = null : null !== a && ti(r, a) && (t.flags |= 32), Ts(e, t), ws(e, t, s, n), t.child;
          case 6:
            return null === e && lo(t), null;
          case 13:
            return Vs(e, t, n);
          case 4:
            return ra(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Qo(t, null, r, n) : ws(e, t, r, n), t.child;
          case 11:
            return r = t.type, i = t.pendingProps, xs(e, t, r, i = t.elementType === r ? i : go(r, i), n);
          case 7:
            return ws(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return ws(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, s = i.value, Ti(vo, r._currentValue), r._currentValue = s, null !== a)
                if (ar(a.value, s)) {
                  if (a.children === i.children && !Pi.current) {
                    t = Hs(e, t, n);
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
                              var d = (c = c.shared).pending;
                              null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                            }
                          }
                          a.lanes |= n, null !== (u = a.alternate) && (u.lanes |= n), So(a.return, n, t), l.lanes |= n;
                          break
                        }
                        u = u.next
                      }
                    } else if (10 === a.tag) s = a.type === t.type ? null : a.child;
                    else if (18 === a.tag) {
                      if (null === (s = a.return)) throw Error(o(341));
                      s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), So(s, n, t), s = a.sibling
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
            return i = t.type, r = t.pendingProps.children, ko(t, n), r = r(i = To(i)), t.flags |= 1, ws(e, t, r, n), t.child;
          case 14:
            return i = go(r = t.type, t.pendingProps), _s(e, t, r, i = go(r.type, i), n);
          case 15:
            return Ss(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : go(r, i), Us(e, t), t.tag = 1, Ai(r) ? (e = !0, Ni(t)) : e = !1, ko(t, n), Uo(t, r, i), Wo(t, r, i, n), Ps(null, t, r, !0, e, n);
          case 19:
            return $s(e, t, n);
          case 22:
            return ks(e, t, n)
        }
        throw Error(o(156, t.tag))
      };
      "function" == typeof reportError && reportError;

      function Uu(e) {
        this._internalRoot = e
      }

      function Hu(e) {
        this._internalRoot = e
      }
      Hu.prototype.render = Uu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(o(409));
        Bu(e, t, null, null)
      }, Hu.prototype.unmount = Uu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cu((function() {
            Bu(null, e, null, null)
          })), t[pi] = null
        }
      }, Hu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = St();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < Lt.length && 0 !== t && t < Lt[n].priority; n++);
          Lt.splice(n, 0, e), 0 === n && Rt(e)
        }
      }, wt = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = dt(t.pendingLanes);
              0 !== n && (vt(t, 1 | n), ru(t, Ke()), 0 == (6 & Pl) && ($l = Ke() + 500, ji()))
            }
            break;
          case 13:
            cu((function() {
              var t = Mo(e, 1);
              if (null !== t) {
                var n = eu();
                nu(t, e, 1, n)
              }
            })), $u(e, 1)
        }
      }, xt = function(e) {
        if (13 === e.tag) {
          var t = Mo(e, 134217728);
          null !== t && nu(t, e, 134217728, eu()), $u(e, 134217728)
        }
      }, _t = function(e) {
        if (13 === e.tag) {
          var t = tu(e),
            n = Mo(e, t);
          null !== n && nu(n, e, t, eu()), $u(e, t)
        }
      }, St = function() {
        return yt
      }, kt = function(e, t) {
        var n = yt;
        try {
          return yt = e, t()
        } finally {
          yt = n
        }
      }, _e = function(e, t, n) {
        switch (t) {
          case "input":
            if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = wi(r);
                  if (!i) throw Error(o(90));
                  Y(r), Z(r, i)
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
      }, Pe = uu, Me = cu;
      var Wu = {
          findFiberByHostInstance: vi,
          bundleType: 0,
          version: "18.2.0",
          rendererPackageName: "react-dom"
        },
        Gu = {
          bundleType: Wu.bundleType,
          version: Wu.version,
          rendererPackageName: Wu.rendererPackageName,
          rendererConfig: Wu.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = We(e)) ? null : e.stateNode
          },
          findFiberByHostInstance: Wu.findFiberByHostInstance || function() {
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
        var Yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Yu.isDisabled && Yu.supportsFiber) try {
          it = Yu.inject(Gu), ot = Yu
        } catch (ce) {}
      }
      t.flushSync = function(e) {
        return cu(e)
      }
    },
    6763: (e, t, n) => {
      "use strict";
      ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = n(4215)
    },
    4751: (e, t, n) => {
      "use strict";
      n.d(t, {
        YD: () => h
      });
      var r = n(927);

      function i() {
        return i = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, i.apply(this, arguments)
      }

      function o(e, t) {
        return o = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, o(e, t)
      }
      var a = new Map,
        s = new WeakMap,
        l = 0,
        u = void 0;

      function c(e, t, n, r) {
        if (void 0 === n && (n = {}), void 0 === r && (r = u), void 0 === window.IntersectionObserver && void 0 !== r) {
          var i = e.getBoundingClientRect();
          return t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i
            }),
            function() {}
        }
        var o = function(e) {
            var t = function(e) {
                return Object.keys(e).sort().filter((function(t) {
                  return void 0 !== e[t]
                })).map((function(t) {
                  return t + "_" + ("root" === t ? (n = e.root) ? (s.has(n) || (l += 1, s.set(n, l.toString())), s.get(n)) : "0" : e[t]);
                  var n
                })).toString()
              }(e),
              n = a.get(t);
            if (!n) {
              var r, i = new Map,
                o = new IntersectionObserver((function(t) {
                  t.forEach((function(t) {
                    var n, o = t.isIntersecting && r.some((function(e) {
                      return t.intersectionRatio >= e
                    }));
                    e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((function(e) {
                      e(o, t)
                    }))
                  }))
                }), e);
              r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                id: t,
                observer: o,
                elements: i
              }, a.set(t, n)
            }
            return n
          }(n),
          c = o.id,
          d = o.observer,
          f = o.elements,
          p = f.get(e) || [];
        return f.has(e) || f.set(e, p), p.push(t), d.observe(e),
          function() {
            p.splice(p.indexOf(t), 1), 0 === p.length && (f.delete(e), d.unobserve(e)), 0 === f.size && (d.disconnect(), a.delete(c))
          }
      }
      var d = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

      function f(e) {
        return "function" != typeof e.children
      }
      var p = function(e) {
        var t, n;

        function a(t) {
          var n;
          return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
            n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
              inView: !!n.props.initialInView,
              entry: void 0
            })), n.node = e || null, n.observeNode()
          }, n.handleChange = function(e, t) {
            e && n.props.triggerOnce && n.unobserve(), f(n.props) || n.setState({
              inView: e,
              entry: t
            }), n.props.onChange && n.props.onChange(e, t)
          }, n.state = {
            inView: !!t.initialInView,
            entry: void 0
          }, n
        }
        n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
        var s = a.prototype;
        return s.componentDidUpdate = function(e) {
          e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }, s.componentWillUnmount = function() {
          this.unobserve(), this.node = null
        }, s.observeNode = function() {
          if (this.node && !this.props.skip) {
            var e = this.props,
              t = e.threshold,
              n = e.root,
              r = e.rootMargin,
              i = e.trackVisibility,
              o = e.delay,
              a = e.fallbackInView;
            this._unobserveCb = c(this.node, this.handleChange, {
              threshold: t,
              root: n,
              rootMargin: r,
              trackVisibility: i,
              delay: o
            }, a)
          }
        }, s.unobserve = function() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }, s.render = function() {
          if (!f(this.props)) {
            var e = this.state,
              t = e.inView,
              n = e.entry;
            return this.props.children({
              inView: t,
              entry: n,
              ref: this.handleNode
            })
          }
          var o = this.props,
            a = o.children,
            s = o.as,
            l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(o, d);
          return r.createElement(s || "div", i({
            ref: this.handleNode
          }, l), a)
        }, a
      }(r.Component);

      function h(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          i = t.delay,
          o = t.trackVisibility,
          a = t.rootMargin,
          s = t.root,
          l = t.triggerOnce,
          u = t.skip,
          d = t.initialInView,
          f = t.fallbackInView,
          p = r.useRef(),
          h = r.useState({
            inView: !!d
          }),
          m = h[0],
          g = h[1],
          v = r.useCallback((function(e) {
            void 0 !== p.current && (p.current(), p.current = void 0), u || e && (p.current = c(e, (function(e, t) {
              g({
                inView: e,
                entry: t
              }), t.isIntersecting && l && p.current && (p.current(), p.current = void 0)
            }), {
              root: s,
              rootMargin: a,
              threshold: n,
              trackVisibility: o,
              delay: i
            }, f))
          }), [Array.isArray(n) ? n.toString() : n, s, a, l, u, o, f, i]);
        (0, r.useEffect)((function() {
          p.current || !m.entry || l || u || g({
            inView: !!d
          })
        }));
        var y = [v, m.inView, m.entry];
        return y.ref = y[0], y.inView = y[1], y.entry = y[2], y
      }
      p.displayName = "InView", p.defaultProps = {
        threshold: 0,
        triggerOnce: !1,
        initialInView: !1
      }
    },
    9089: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => c
      });
      var r = n(8254),
        i = n(927),
        o = n(2204),
        a = n(1348);

      function s(e, t) {
        var n = e.values,
          i = (0, r._T)(e, ["values"]),
          o = t.values,
          s = (0, r._T)(t, ["values"]);
        return (0, a.wU)(o, n) && (0, a.wU)(i, s)
      }

      function l(e) {
        var t = (0, o.Z)(),
          n = t.formatMessage,
          r = t.textComponent,
          a = void 0 === r ? i.Fragment : r,
          s = e.id,
          l = e.description,
          u = e.defaultMessage,
          c = e.values,
          d = e.children,
          f = e.tagName,
          p = void 0 === f ? a : f,
          h = n({
            id: s,
            description: l,
            defaultMessage: u
          }, c, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(h) ? h : [h]) : p ? i.createElement(p, null, i.Children.toArray(h)) : i.createElement(i.Fragment, null, h)
      }
      l.displayName = "FormattedMessage";
      var u = i.memo(l, s);
      u.displayName = "MemoizedFormattedMessage";
      const c = u
    },
    2204: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => s
      });
      var r = n(927);
      n(2571);
      var i = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? r.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = r.createContext(null)),
        o = (i.Consumer, i.Provider, i),
        a = n(1348);

      function s() {
        var e = r.useContext(o);
        return (0, a.lq)(e), e
      }
    },
    1348: (e, t, n) => {
      "use strict";
      n.d(t, {
        lq: () => a,
        wU: () => s
      });
      var r = n(8254),
        i = n(927);

      function o() {
        this.cache = Object.create(null)
      }
      o.prototype.get = function(e) {
        return this.cache[e]
      }, o.prototype.set = function(e, t) {
        this.cache[e] = t
      };

      function a(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }

      function s(e, t) {
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
      }(0, r.pi)((0, r.pi)({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      }), {
        textComponent: i.Fragment
      })
    },
    9113: (e, t, n) => {
      "use strict";
      n.d(t, {
        D: () => ye
      });
      var r = n(927),
        i = n(6763);

      function o(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return t && t.defaultView || window
        }
        return e
      }

      function a(e) {
        return e instanceof o(e).Element || e instanceof Element
      }

      function s(e) {
        return e instanceof o(e).HTMLElement || e instanceof HTMLElement
      }

      function l(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
      }
      var u = Math.max,
        c = Math.min,
        d = Math.round;

      function f() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
          return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
      }

      function p() {
        return !/^((?!chrome|android).)*safari/i.test(f())
      }

      function h(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          i = 1,
          l = 1;
        t && s(e) && (i = e.offsetWidth > 0 && d(r.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && d(r.height) / e.offsetHeight || 1);
        var u = (a(e) ? o(e) : window).visualViewport,
          c = !p() && n,
          f = (r.left + (c && u ? u.offsetLeft : 0)) / i,
          h = (r.top + (c && u ? u.offsetTop : 0)) / l,
          m = r.width / i,
          g = r.height / l;
        return {
          width: m,
          height: g,
          top: h,
          right: f + m,
          bottom: h + g,
          left: f,
          x: f,
          y: h
        }
      }

      function m(e) {
        var t = o(e);
        return {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function g(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
      }

      function v(e) {
        return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement
      }

      function y(e) {
        return h(v(e)).left + m(e).scrollLeft
      }

      function b(e) {
        return o(e).getComputedStyle(e)
      }

      function w(e) {
        var t = b(e),
          n = t.overflow,
          r = t.overflowX,
          i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r)
      }

      function x(e, t, n) {
        void 0 === n && (n = !1);
        var r, i, a = s(t),
          l = s(t) && function(e) {
            var t = e.getBoundingClientRect(),
              n = d(t.width) / e.offsetWidth || 1,
              r = d(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          }(t),
          u = v(t),
          c = h(e, l, n),
          f = {
            scrollLeft: 0,
            scrollTop: 0
          },
          p = {
            x: 0,
            y: 0
          };
        return (a || !a && !n) && (("body" !== g(t) || w(u)) && (f = (r = t) !== o(r) && s(r) ? {
          scrollLeft: (i = r).scrollLeft,
          scrollTop: i.scrollTop
        } : m(r)), s(t) ? ((p = h(t, !0)).x += t.clientLeft, p.y += t.clientTop) : u && (p.x = y(u))), {
          x: c.left + f.scrollLeft - p.x,
          y: c.top + f.scrollTop - p.y,
          width: c.width,
          height: c.height
        }
      }

      function _(e) {
        var t = h(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: n,
          height: r
        }
      }

      function S(e) {
        return "html" === g(e) ? e : e.assignedSlot || e.parentNode || (l(e) ? e.host : null) || v(e)
      }

      function k(e) {
        return ["html", "body", "#document"].indexOf(g(e)) >= 0 ? e.ownerDocument.body : s(e) && w(e) ? e : k(S(e))
      }

      function T(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = k(e),
          i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = o(r),
          s = i ? [a].concat(a.visualViewport || [], w(r) ? r : []) : r,
          l = t.concat(s);
        return i ? l : l.concat(T(S(s)))
      }

      function E(e) {
        return ["table", "td", "th"].indexOf(g(e)) >= 0
      }

      function C(e) {
        return s(e) && "fixed" !== b(e).position ? e.offsetParent : null
      }

      function P(e) {
        for (var t = o(e), n = C(e); n && E(n) && "static" === b(n).position;) n = C(n);
        return n && ("html" === g(n) || "body" === g(n) && "static" === b(n).position) ? t : n || function(e) {
          var t = /firefox/i.test(f());
          if (/Trident/i.test(f()) && s(e) && "fixed" === b(e).position) return null;
          var n = S(e);
          for (l(n) && (n = n.host); s(n) && ["html", "body"].indexOf(g(n)) < 0;) {
            var r = b(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode
          }
          return null
        }(e) || t
      }
      var M = "top",
        O = "bottom",
        A = "right",
        L = "left",
        D = "auto",
        z = [M, O, A, L],
        N = "start",
        R = "end",
        V = "viewport",
        I = "popper",
        F = z.reduce((function(e, t) {
          return e.concat([t + "-" + N, t + "-" + R])
        }), []),
        B = [].concat(z, [D]).reduce((function(e, t) {
          return e.concat([t, t + "-" + N, t + "-" + R])
        }), []),
        j = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

      function $(e) {
        var t = new Map,
          n = new Set,
          r = [];

        function i(e) {
          n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
            if (!n.has(e)) {
              var r = t.get(e);
              r && i(r)
            }
          })), r.push(e)
        }
        return e.forEach((function(e) {
          t.set(e.name, e)
        })), e.forEach((function(e) {
          n.has(e.name) || i(e)
        })), r
      }
      var U = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };

      function H() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function(e) {
          return !(e && "function" == typeof e.getBoundingClientRect)
        }))
      }

      function W(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          i = t.defaultOptions,
          o = void 0 === i ? U : i;
        return function(e, t, n) {
          void 0 === n && (n = o);
          var i, s, l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, U, o),
              modifiersData: {},
              elements: {
                reference: e,
                popper: t
              },
              attributes: {},
              styles: {}
            },
            u = [],
            c = !1,
            d = {
              state: l,
              setOptions: function(n) {
                var i = "function" == typeof n ? n(l.options) : n;
                f(), l.options = Object.assign({}, o, l.options, i), l.scrollParents = {
                  reference: a(e) ? T(e) : e.contextElement ? T(e.contextElement) : [],
                  popper: T(t)
                };
                var s, c, p = function(e) {
                  var t = $(e);
                  return j.reduce((function(e, n) {
                    return e.concat(t.filter((function(e) {
                      return e.phase === n
                    })))
                  }), [])
                }((s = [].concat(r, l.options.modifiers), c = s.reduce((function(e, t) {
                  var n = e[t.name];
                  return e[t.name] = n ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                  }) : t, e
                }), {}), Object.keys(c).map((function(e) {
                  return c[e]
                }))));
                return l.orderedModifiers = p.filter((function(e) {
                  return e.enabled
                })), l.orderedModifiers.forEach((function(e) {
                  var t = e.name,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    i = e.effect;
                  if ("function" == typeof i) {
                    var o = i({
                      state: l,
                      name: t,
                      instance: d,
                      options: r
                    });
                    u.push(o || function() {})
                  }
                })), d.update()
              },
              forceUpdate: function() {
                if (!c) {
                  var e = l.elements,
                    t = e.reference,
                    n = e.popper;
                  if (H(t, n)) {
                    l.rects = {
                      reference: x(t, P(n), "fixed" === l.options.strategy),
                      popper: _(n)
                    }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
                      return l.modifiersData[e.name] = Object.assign({}, e.data)
                    }));
                    for (var r = 0; r < l.orderedModifiers.length; r++)
                      if (!0 !== l.reset) {
                        var i = l.orderedModifiers[r],
                          o = i.fn,
                          a = i.options,
                          s = void 0 === a ? {} : a,
                          u = i.name;
                        "function" == typeof o && (l = o({
                          state: l,
                          options: s,
                          name: u,
                          instance: d
                        }) || l)
                      } else l.reset = !1, r = -1
                  }
                }
              },
              update: (i = function() {
                return new Promise((function(e) {
                  d.forceUpdate(), e(l)
                }))
              }, function() {
                return s || (s = new Promise((function(e) {
                  Promise.resolve().then((function() {
                    s = void 0, e(i())
                  }))
                }))), s
              }),
              destroy: function() {
                f(), c = !0
              }
            };
          if (!H(e, t)) return d;

          function f() {
            u.forEach((function(e) {
              return e()
            })), u = []
          }
          return d.setOptions(n).then((function(e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e)
          })), d
        }
      }
      var G = {
        passive: !0
      };

      function Y(e) {
        return e.split("-")[0]
      }

      function X(e) {
        return e.split("-")[1]
      }

      function q(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
      }

      function Q(e) {
        var t, n = e.reference,
          r = e.element,
          i = e.placement,
          o = i ? Y(i) : null,
          a = i ? X(i) : null,
          s = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case M:
            t = {
              x: s,
              y: n.y - r.height
            };
            break;
          case O:
            t = {
              x: s,
              y: n.y + n.height
            };
            break;
          case A:
            t = {
              x: n.x + n.width,
              y: l
            };
            break;
          case L:
            t = {
              x: n.x - r.width,
              y: l
            };
            break;
          default:
            t = {
              x: n.x,
              y: n.y
            }
        }
        var u = o ? q(o) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (a) {
            case N:
              t[u] = t[u] - (n[c] / 2 - r[c] / 2);
              break;
            case R:
              t[u] = t[u] + (n[c] / 2 - r[c] / 2)
          }
        }
        return t
      }
      var K = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };

      function Z(e) {
        var t, n = e.popper,
          r = e.popperRect,
          i = e.placement,
          a = e.variation,
          s = e.offsets,
          l = e.position,
          u = e.gpuAcceleration,
          c = e.adaptive,
          f = e.roundOffsets,
          p = e.isFixed,
          h = s.x,
          m = void 0 === h ? 0 : h,
          g = s.y,
          y = void 0 === g ? 0 : g,
          w = "function" == typeof f ? f({
            x: m,
            y
          }) : {
            x: m,
            y
          };
        m = w.x, y = w.y;
        var x = s.hasOwnProperty("x"),
          _ = s.hasOwnProperty("y"),
          S = L,
          k = M,
          T = window;
        if (c) {
          var E = P(n),
            C = "clientHeight",
            D = "clientWidth";
          E === o(n) && "static" !== b(E = v(n)).position && "absolute" === l && (C = "scrollHeight", D = "scrollWidth"), (i === M || (i === L || i === A) && a === R) && (k = O, y -= (p && E === T && T.visualViewport ? T.visualViewport.height : E[C]) - r.height, y *= u ? 1 : -1), i !== L && (i !== M && i !== O || a !== R) || (S = A, m -= (p && E === T && T.visualViewport ? T.visualViewport.width : E[D]) - r.width, m *= u ? 1 : -1)
        }
        var z, N = Object.assign({
            position: l
          }, c && K),
          V = !0 === f ? function(e, t) {
            var n = e.x,
              r = e.y,
              i = t.devicePixelRatio || 1;
            return {
              x: d(n * i) / i || 0,
              y: d(r * i) / i || 0
            }
          }({
            x: m,
            y
          }, o(n)) : {
            x: m,
            y
          };
        return m = V.x, y = V.y, u ? Object.assign({}, N, ((z = {})[k] = _ ? "0" : "", z[S] = x ? "0" : "", z.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", z)) : Object.assign({}, N, ((t = {})[k] = _ ? y + "px" : "", t[S] = x ? m + "px" : "", t.transform = "", t))
      }
      var J = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };

      function ee(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
          return J[e]
        }))
      }
      var te = {
        start: "end",
        end: "start"
      };

      function ne(e) {
        return e.replace(/start|end/g, (function(e) {
          return te[e]
        }))
      }

      function re(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && l(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
          } while (r)
        }
        return !1
      }

      function ie(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height
        })
      }

      function oe(e, t, n) {
        return t === V ? ie(function(e, t) {
          var n = o(e),
            r = v(e),
            i = n.visualViewport,
            a = r.clientWidth,
            s = r.clientHeight,
            l = 0,
            u = 0;
          if (i) {
            a = i.width, s = i.height;
            var c = p();
            (c || !c && "fixed" === t) && (l = i.offsetLeft, u = i.offsetTop)
          }
          return {
            width: a,
            height: s,
            x: l + y(e),
            y: u
          }
        }(e, n)) : a(t) ? function(e, t) {
          var n = h(e, !1, "fixed" === t);
          return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(t, n) : ie(function(e) {
          var t, n = v(e),
            r = m(e),
            i = null == (t = e.ownerDocument) ? void 0 : t.body,
            o = u(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
            a = u(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
            s = -r.scrollLeft + y(e),
            l = -r.scrollTop;
          return "rtl" === b(i || n).direction && (s += u(n.clientWidth, i ? i.clientWidth : 0) - o), {
            width: o,
            height: a,
            x: s,
            y: l
          }
        }(v(e)))
      }

      function ae(e) {
        return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, e)
      }

      function se(e, t) {
        return t.reduce((function(t, n) {
          return t[n] = e, t
        }), {})
      }

      function le(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          i = void 0 === r ? e.placement : r,
          o = n.strategy,
          l = void 0 === o ? e.strategy : o,
          d = n.boundary,
          f = void 0 === d ? "clippingParents" : d,
          p = n.rootBoundary,
          m = void 0 === p ? V : p,
          y = n.elementContext,
          w = void 0 === y ? I : y,
          x = n.altBoundary,
          _ = void 0 !== x && x,
          k = n.padding,
          E = void 0 === k ? 0 : k,
          C = ae("number" != typeof E ? E : se(E, z)),
          L = w === I ? "reference" : I,
          D = e.rects.popper,
          N = e.elements[_ ? L : w],
          R = function(e, t, n, r) {
            var i = "clippingParents" === t ? function(e) {
                var t = T(S(e)),
                  n = ["absolute", "fixed"].indexOf(b(e).position) >= 0 && s(e) ? P(e) : e;
                return a(n) ? t.filter((function(e) {
                  return a(e) && re(e, n) && "body" !== g(e)
                })) : []
              }(e) : [].concat(t),
              o = [].concat(i, [n]),
              l = o[0],
              d = o.reduce((function(t, n) {
                var i = oe(e, n, r);
                return t.top = u(i.top, t.top), t.right = c(i.right, t.right), t.bottom = c(i.bottom, t.bottom), t.left = u(i.left, t.left), t
              }), oe(e, l, r));
            return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d
          }(a(N) ? N : N.contextElement || v(e.elements.popper), f, m, l),
          F = h(e.elements.reference),
          B = Q({
            reference: F,
            element: D,
            strategy: "absolute",
            placement: i
          }),
          j = ie(Object.assign({}, D, B)),
          $ = w === I ? j : F,
          U = {
            top: R.top - $.top + C.top,
            bottom: $.bottom - R.bottom + C.bottom,
            left: R.left - $.left + C.left,
            right: $.right - R.right + C.right
          },
          H = e.modifiersData.offset;
        if (w === I && H) {
          var W = H[i];
          Object.keys(U).forEach((function(e) {
            var t = [A, O].indexOf(e) >= 0 ? 1 : -1,
              n = [M, O].indexOf(e) >= 0 ? "y" : "x";
            U[e] += W[n] * t
          }))
        }
        return U
      }

      function ue(e, t, n) {
        return u(e, c(t, n))
      }

      function ce(e, t, n) {
        return void 0 === n && (n = {
          x: 0,
          y: 0
        }), {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x
        }
      }

      function de(e) {
        return [M, A, O, L].some((function(t) {
          return e[t] >= 0
        }))
      }
      var fe = W({
          defaultModifiers: [{
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
              var t = e.state,
                n = e.instance,
                r = e.options,
                i = r.scroll,
                a = void 0 === i || i,
                s = r.resize,
                l = void 0 === s || s,
                u = o(t.elements.popper),
                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
              return a && c.forEach((function(e) {
                  e.addEventListener("scroll", n.update, G)
                })), l && u.addEventListener("resize", n.update, G),
                function() {
                  a && c.forEach((function(e) {
                    e.removeEventListener("scroll", n.update, G)
                  })), l && u.removeEventListener("resize", n.update, G)
                }
            },
            data: {}
          }, {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = Q({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
              })
            },
            data: {}
          }, {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                i = void 0 === r || r,
                o = n.adaptive,
                a = void 0 === o || o,
                s = n.roundOffsets,
                l = void 0 === s || s,
                u = {
                  placement: Y(t.placement),
                  variation: X(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: i,
                  isFixed: "fixed" === t.options.strategy
                };
              null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Z(Object.assign({}, u, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: l
              })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Z(Object.assign({}, u, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
              })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
              })
            },
            data: {}
          }, {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
              var t = e.state;
              Object.keys(t.elements).forEach((function(e) {
                var n = t.styles[e] || {},
                  r = t.attributes[e] || {},
                  i = t.elements[e];
                s(i) && g(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                  var t = r[e];
                  !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                })))
              }))
            },
            effect: function(e) {
              var t = e.state,
                n = {
                  popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                  },
                  arrow: {
                    position: "absolute"
                  },
                  reference: {}
                };
              return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function() {
                  Object.keys(t.elements).forEach((function(e) {
                    var r = t.elements[e],
                      i = t.attributes[e] || {},
                      o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                        return e[t] = "", e
                      }), {});
                    s(r) && g(r) && (Object.assign(r.style, o), Object.keys(i).forEach((function(e) {
                      r.removeAttribute(e)
                    })))
                  }))
                }
            },
            requires: ["computeStyles"]
          }, {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                i = n.offset,
                o = void 0 === i ? [0, 0] : i,
                a = B.reduce((function(e, n) {
                  return e[n] = function(e, t, n) {
                    var r = Y(e),
                      i = [L, M].indexOf(r) >= 0 ? -1 : 1,
                      o = "function" == typeof n ? n(Object.assign({}, t, {
                        placement: e
                      })) : n,
                      a = o[0],
                      s = o[1];
                    return a = a || 0, s = (s || 0) * i, [L, A].indexOf(r) >= 0 ? {
                      x: s,
                      y: a
                    } : {
                      x: a,
                      y: s
                    }
                  }(n, t.rects, o), e
                }), {}),
                s = a[t.placement],
                l = s.x,
                u = s.y;
              null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a
            }
          }, {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = e.name;
              if (!t.modifiersData[r]._skip) {
                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, m = n.allowedAutoPlacements, g = t.options.placement, v = Y(g), y = l || (v !== g && h ? function(e) {
                    if (Y(e) === D) return [];
                    var t = ee(e);
                    return [ne(e), t, ne(t)]
                  }(g) : [ee(g)]), b = [g].concat(y).reduce((function(e, n) {
                    return e.concat(Y(n) === D ? function(e, t) {
                      void 0 === t && (t = {});
                      var n = t,
                        r = n.placement,
                        i = n.boundary,
                        o = n.rootBoundary,
                        a = n.padding,
                        s = n.flipVariations,
                        l = n.allowedAutoPlacements,
                        u = void 0 === l ? B : l,
                        c = X(r),
                        d = c ? s ? F : F.filter((function(e) {
                          return X(e) === c
                        })) : z,
                        f = d.filter((function(e) {
                          return u.indexOf(e) >= 0
                        }));
                      0 === f.length && (f = d);
                      var p = f.reduce((function(t, n) {
                        return t[n] = le(e, {
                          placement: n,
                          boundary: i,
                          rootBoundary: o,
                          padding: a
                        })[Y(n)], t
                      }), {});
                      return Object.keys(p).sort((function(e, t) {
                        return p[e] - p[t]
                      }))
                    }(t, {
                      placement: n,
                      boundary: c,
                      rootBoundary: d,
                      padding: u,
                      flipVariations: h,
                      allowedAutoPlacements: m
                    }) : n)
                  }), []), w = t.rects.reference, x = t.rects.popper, _ = new Map, S = !0, k = b[0], T = 0; T < b.length; T++) {
                  var E = b[T],
                    C = Y(E),
                    P = X(E) === N,
                    R = [M, O].indexOf(C) >= 0,
                    V = R ? "width" : "height",
                    I = le(t, {
                      placement: E,
                      boundary: c,
                      rootBoundary: d,
                      altBoundary: f,
                      padding: u
                    }),
                    j = R ? P ? A : L : P ? O : M;
                  w[V] > x[V] && (j = ee(j));
                  var $ = ee(j),
                    U = [];
                  if (o && U.push(I[C] <= 0), s && U.push(I[j] <= 0, I[$] <= 0), U.every((function(e) {
                      return e
                    }))) {
                    k = E, S = !1;
                    break
                  }
                  _.set(E, U)
                }
                if (S)
                  for (var H = function(e) {
                      var t = b.find((function(t) {
                        var n = _.get(t);
                        if (n) return n.slice(0, e).every((function(e) {
                          return e
                        }))
                      }));
                      if (t) return k = t, "break"
                    }, W = h ? 3 : 1; W > 0 && "break" !== H(W); W--);
                t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0)
              }
            },
            requiresIfExists: ["offset"],
            data: {
              _skip: !1
            }
          }, {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                i = n.mainAxis,
                o = void 0 === i || i,
                a = n.altAxis,
                s = void 0 !== a && a,
                l = n.boundary,
                d = n.rootBoundary,
                f = n.altBoundary,
                p = n.padding,
                h = n.tether,
                m = void 0 === h || h,
                g = n.tetherOffset,
                v = void 0 === g ? 0 : g,
                y = le(t, {
                  boundary: l,
                  rootBoundary: d,
                  padding: p,
                  altBoundary: f
                }),
                b = Y(t.placement),
                w = X(t.placement),
                x = !w,
                S = q(b),
                k = "x" === S ? "y" : "x",
                T = t.modifiersData.popperOffsets,
                E = t.rects.reference,
                C = t.rects.popper,
                D = "function" == typeof v ? v(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : v,
                z = "number" == typeof D ? {
                  mainAxis: D,
                  altAxis: D
                } : Object.assign({
                  mainAxis: 0,
                  altAxis: 0
                }, D),
                R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                V = {
                  x: 0,
                  y: 0
                };
              if (T) {
                if (o) {
                  var I, F = "y" === S ? M : L,
                    B = "y" === S ? O : A,
                    j = "y" === S ? "height" : "width",
                    $ = T[S],
                    U = $ + y[F],
                    H = $ - y[B],
                    W = m ? -C[j] / 2 : 0,
                    G = w === N ? E[j] : C[j],
                    Q = w === N ? -C[j] : -E[j],
                    K = t.elements.arrow,
                    Z = m && K ? _(K) : {
                      width: 0,
                      height: 0
                    },
                    J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    },
                    ee = J[F],
                    te = J[B],
                    ne = ue(0, E[j], Z[j]),
                    re = x ? E[j] / 2 - W - ne - ee - z.mainAxis : G - ne - ee - z.mainAxis,
                    ie = x ? -E[j] / 2 + W + ne + te + z.mainAxis : Q + ne + te + z.mainAxis,
                    oe = t.elements.arrow && P(t.elements.arrow),
                    ae = oe ? "y" === S ? oe.clientTop || 0 : oe.clientLeft || 0 : 0,
                    se = null != (I = null == R ? void 0 : R[S]) ? I : 0,
                    ce = $ + ie - se,
                    de = ue(m ? c(U, $ + re - se - ae) : U, $, m ? u(H, ce) : H);
                  T[S] = de, V[S] = de - $
                }
                if (s) {
                  var fe, pe = "x" === S ? M : L,
                    he = "x" === S ? O : A,
                    me = T[k],
                    ge = "y" === k ? "height" : "width",
                    ve = me + y[pe],
                    ye = me - y[he],
                    be = -1 !== [M, L].indexOf(b),
                    we = null != (fe = null == R ? void 0 : R[k]) ? fe : 0,
                    xe = be ? ve : me - E[ge] - C[ge] - we + z.altAxis,
                    _e = be ? me + E[ge] + C[ge] - we - z.altAxis : ye,
                    Se = m && be ? function(e, t, n) {
                      var r = ue(e, t, n);
                      return r > n ? n : r
                    }(xe, me, _e) : ue(m ? xe : ve, me, m ? _e : ye);
                  T[k] = Se, V[k] = Se - me
                }
                t.modifiersData[r] = V
              }
            },
            requiresIfExists: ["offset"]
          }, {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
              var t, n = e.state,
                r = e.name,
                i = e.options,
                o = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = Y(n.placement),
                l = q(s),
                u = [L, A].indexOf(s) >= 0 ? "height" : "width";
              if (o && a) {
                var c = function(e, t) {
                    return ae("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                      placement: t.placement
                    })) : e) ? e : se(e, z))
                  }(i.padding, n),
                  d = _(o),
                  f = "y" === l ? M : L,
                  p = "y" === l ? O : A,
                  h = n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u],
                  m = a[l] - n.rects.reference[l],
                  g = P(o),
                  v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                  y = h / 2 - m / 2,
                  b = c[f],
                  w = v - d[u] - c[p],
                  x = v / 2 - d[u] / 2 + y,
                  S = ue(b, x, w),
                  k = l;
                n.modifiersData[r] = ((t = {})[k] = S, t.centerOffset = S - x, t)
              }
            },
            effect: function(e) {
              var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
              null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && re(t.elements.popper, r) && (t.elements.arrow = r)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
          }, {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
              var t = e.state,
                n = e.name,
                r = t.rects.reference,
                i = t.rects.popper,
                o = t.modifiersData.preventOverflow,
                a = le(t, {
                  elementContext: "reference"
                }),
                s = le(t, {
                  altBoundary: !0
                }),
                l = ce(a, r),
                u = ce(s, i, o),
                c = de(l),
                d = de(u);
              t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: u,
                isReferenceHidden: c,
                hasPopperEscaped: d
              }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": c,
                "data-popper-escaped": d
              })
            }
          }]
        }),
        pe = n(5861),
        he = n.n(pe),
        me = function(e) {
          return e.reduce((function(e, t) {
            var n = t[0],
              r = t[1];
            return e[n] = r, e
          }), {})
        },
        ge = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
        ve = [],
        ye = function(e, t, n) {
          void 0 === n && (n = {});
          var o = r.useRef(null),
            a = {
              onFirstUpdate: n.onFirstUpdate,
              placement: n.placement || "bottom",
              strategy: n.strategy || "absolute",
              modifiers: n.modifiers || ve
            },
            s = r.useState({
              styles: {
                popper: {
                  position: a.strategy,
                  left: "0",
                  top: "0"
                },
                arrow: {
                  position: "absolute"
                }
              },
              attributes: {}
            }),
            l = s[0],
            u = s[1],
            c = r.useMemo((function() {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                  var t = e.state,
                    n = Object.keys(t.elements);
                  i.flushSync((function() {
                    u({
                      styles: me(n.map((function(e) {
                        return [e, t.styles[e] || {}]
                      }))),
                      attributes: me(n.map((function(e) {
                        return [e, t.attributes[e]]
                      })))
                    })
                  }))
                },
                requires: ["computeStyles"]
              }
            }), []),
            d = r.useMemo((function() {
              var e = {
                onFirstUpdate: a.onFirstUpdate,
                placement: a.placement,
                strategy: a.strategy,
                modifiers: [].concat(a.modifiers, [c, {
                  name: "applyStyles",
                  enabled: !1
                }])
              };
              return he()(o.current, e) ? o.current || e : (o.current = e, e)
            }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]),
            f = r.useRef();
          return ge((function() {
            f.current && f.current.setOptions(d)
          }), [d]), ge((function() {
            if (null != e && null != t) {
              var r = (n.createPopper || fe)(e, t, d);
              return f.current = r,
                function() {
                  r.destroy(), f.current = null
                }
            }
          }), [e, t, n.createPopper]), {
            state: f.current ? f.current.state : null,
            styles: l.styles,
            attributes: l.attributes,
            update: f.current ? f.current.update : null,
            forceUpdate: f.current ? f.current.forceUpdate : null
          }
        }
    },
    749: (e, t, n) => {
      "use strict";

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      n.d(t, {
        i: () => an
      });
      var i, o, a, s, l, u, c, d, f, p, h, m, g, v = function() {
          return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        },
        y = 1,
        b = [],
        w = [],
        x = [],
        _ = Date.now,
        S = function(e, t) {
          return t
        },
        k = function(e, t) {
          return ~x.indexOf(e) && x[x.indexOf(e) + 1][t]
        },
        T = function(e) {
          return !!~p.indexOf(e)
        },
        E = function(e, t, n, r, i) {
          return e.addEventListener(t, n, {
            passive: !r,
            capture: !!i
          })
        },
        C = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        P = "scrollLeft",
        M = "scrollTop",
        O = function() {
          return h && h.isPressed || w.cache++
        },
        A = function(e, t) {
          var n = function n(r) {
            if (r || 0 === r) {
              y && (a.history.scrollRestoration = "manual");
              var i = h && h.isPressed;
              r = n.v = Math.round(r) || (h && h.iOS ? 1 : 0), e(r), n.cacheID = w.cache, i && S("ss", r)
            } else(t || w.cache !== n.cacheID || S("ref")) && (n.cacheID = w.cache, n.v = e());
            return n.v + n.offset
          };
          return n.offset = 0, e && n
        },
        L = {
          s: P,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: A((function(e) {
            return arguments.length ? a.scrollTo(e, D.sc()) : a.pageXOffset || s[P] || l[P] || u[P] || 0
          }))
        },
        D = {
          s: M,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: L,
          sc: A((function(e) {
            return arguments.length ? a.scrollTo(L.sc(), e) : a.pageYOffset || s[M] || l[M] || u[M] || 0
          }))
        },
        z = function(e, t) {
          return (t && t._ctx && t._ctx.selector || i.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        N = function(e, t) {
          var n = t.s,
            r = t.sc;
          T(e) && (e = s.scrollingElement || l);
          var o = w.indexOf(e),
            a = r === D.sc ? 1 : 2;
          !~o && (o = w.push(e) - 1), w[o + a] || E(e, "scroll", O);
          var u = w[o + a],
            c = u || (w[o + a] = A(k(e, n), !0) || (T(e) ? r : A((function(t) {
              return arguments.length ? e[n] = t : e[n]
            }))));
          return c.target = e, u || (c.smooth = "smooth" === i.getProperty(e, "scrollBehavior")), c
        },
        R = function(e, t, n) {
          var r = e,
            i = e,
            o = _(),
            a = o,
            s = t || 50,
            l = Math.max(500, 3 * s),
            u = function(e, t) {
              var l = _();
              t || l - o > s ? (i = r, r = e, a = o, o = l) : n ? r += e : r = i + (e - i) / (l - a) * (o - a)
            };
          return {
            update: u,
            reset: function() {
              i = r = n ? 0 : r, a = o = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = i,
                c = _();
              return (e || 0 === e) && e !== r && u(e), o === a || c - a > l ? 0 : (r + (n ? s : -s)) / ((n ? c : o) - t) * 1e3
            }
          }
        },
        V = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        I = function(e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n
        },
        F = function() {
          var e, t, n, r;
          (f = i.core.globals().ScrollTrigger) && f.core && (e = f.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies, n.push.apply(n, w), r.push.apply(r, x), w = n, x = r, S = function(e, n) {
            return t[e](n)
          })
        },
        B = function(e) {
          return (i = e || v()) && "undefined" != typeof document && document.body && (a = window, s = document, l = s.documentElement, u = s.body, p = [a, s, l, u], i.utils.clamp, g = i.core.context || function() {}, d = "onpointerenter" in u ? "pointer" : "mouse", c = j.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = j.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
            return y = 0
          }), 500), F(), o = 1), o
        };
      L.op = D, w.cache = 0;
      var j = function() {
        function e(e) {
          this.init(e)
        }
        var t, n;
        return e.prototype.init = function(e) {
          o || B(i) || console.warn("Please gsap.registerPlugin(Observer)"), f || F();
          var t = e.tolerance,
            n = e.dragMinimum,
            r = e.type,
            p = e.target,
            v = e.lineHeight,
            y = e.debounce,
            w = e.preventDefault,
            x = e.onStop,
            S = e.onStopDelay,
            k = e.ignore,
            P = e.wheelSpeed,
            M = e.event,
            A = e.onDragStart,
            j = e.onDragEnd,
            $ = e.onDrag,
            U = e.onPress,
            H = e.onRelease,
            W = e.onRight,
            G = e.onLeft,
            Y = e.onUp,
            X = e.onDown,
            q = e.onChangeX,
            Q = e.onChangeY,
            K = e.onChange,
            Z = e.onToggleX,
            J = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            ne = e.onMove,
            re = e.ignoreCheck,
            ie = e.isNormalizer,
            oe = e.onGestureStart,
            ae = e.onGestureEnd,
            se = e.onWheel,
            le = e.onEnable,
            ue = e.onDisable,
            ce = e.onClick,
            de = e.scrollSpeed,
            fe = e.capture,
            pe = e.allowClicks,
            he = e.lockAxis,
            me = e.onLockAxis;
          this.target = p = z(p) || l, this.vars = e, k && (k = i.utils.toArray(k)), t = t || 1e-9, n = n || 0, P = P || 1, de = de || 1, r = r || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(a.getComputedStyle(u).lineHeight) || 22);
          var ge, ve, ye, be, we, xe, _e, Se = this,
            ke = 0,
            Te = 0,
            Ee = N(p, L),
            Ce = N(p, D),
            Pe = Ee(),
            Me = Ce(),
            Oe = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === m[0],
            Ae = T(p),
            Le = p.ownerDocument || s,
            De = [0, 0, 0],
            ze = [0, 0, 0],
            Ne = 0,
            Re = function() {
              return Ne = _()
            },
            Ve = function(e, t) {
              return (Se.event = e) && k && ~k.indexOf(e.target) || t && Oe && "touch" !== e.pointerType || re && re(e, t)
            },
            Ie = function() {
              var e = Se.deltaX = I(De),
                n = Se.deltaY = I(ze),
                r = Math.abs(e) >= t,
                i = Math.abs(n) >= t;
              K && (r || i) && K(Se, e, n, De, ze), r && (W && Se.deltaX > 0 && W(Se), G && Se.deltaX < 0 && G(Se), q && q(Se), Z && Se.deltaX < 0 != ke < 0 && Z(Se), ke = Se.deltaX, De[0] = De[1] = De[2] = 0), i && (X && Se.deltaY > 0 && X(Se), Y && Se.deltaY < 0 && Y(Se), Q && Q(Se), J && Se.deltaY < 0 != Te < 0 && J(Se), Te = Se.deltaY, ze[0] = ze[1] = ze[2] = 0), (be || ye) && (ne && ne(Se), ye && ($(Se), ye = !1), be = !1), xe && !(xe = !1) && me && me(Se), we && (se(Se), we = !1), ge = 0
            },
            Fe = function(e, t, n) {
              De[n] += e, ze[n] += t, Se._vx.update(e), Se._vy.update(t), y ? ge || (ge = requestAnimationFrame(Ie)) : Ie()
            },
            Be = function(e, t) {
              he && !_e && (Se.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), "y" !== _e && (De[2] += e, Se._vx.update(e, !0)), "x" !== _e && (ze[2] += t, Se._vy.update(t, !0)), y ? ge || (ge = requestAnimationFrame(Ie)) : Ie()
            },
            je = function(e) {
              if (!Ve(e, 1)) {
                var t = (e = V(e, w)).clientX,
                  r = e.clientY,
                  i = t - Se.x,
                  o = r - Se.y,
                  a = Se.isDragging;
                Se.x = t, Se.y = r, (a || Math.abs(Se.startX - t) >= n || Math.abs(Se.startY - r) >= n) && ($ && (ye = !0), a || (Se.isDragging = !0), Be(i, o), a || A && A(Se))
              }
            },
            $e = Se.onPress = function(e) {
              Ve(e, 1) || e && e.button || (Se.axis = _e = null, ve.pause(), Se.isPressed = !0, e = V(e), ke = Te = 0, Se.startX = Se.x = e.clientX, Se.startY = Se.y = e.clientY, Se._vx.reset(), Se._vy.reset(), E(ie ? p : Le, m[1], je, w, !0), Se.deltaX = Se.deltaY = 0, U && U(Se))
            },
            Ue = Se.onRelease = function(e) {
              if (!Ve(e, 1)) {
                C(ie ? p : Le, m[1], je, !0);
                var t = !isNaN(Se.y - Se.startY),
                  n = Se.isDragging && (Math.abs(Se.x - Se.startX) > 3 || Math.abs(Se.y - Se.startY) > 3),
                  r = V(e);
                !n && t && (Se._vx.reset(), Se._vy.reset(), w && pe && i.delayedCall(.08, (function() {
                  if (_() - Ne > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Le.createEvent) {
                    var t = Le.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                }))), Se.isDragging = Se.isGesturing = Se.isPressed = !1, x && !ie && ve.restart(!0), j && n && j(Se), H && H(Se, n)
              }
            },
            He = function(e) {
              return e.touches && e.touches.length > 1 && (Se.isGesturing = !0) && oe(e, Se.isDragging)
            },
            We = function() {
              return (Se.isGesturing = !1) || ae(Se)
            },
            Ge = function(e) {
              if (!Ve(e)) {
                var t = Ee(),
                  n = Ce();
                Fe((t - Pe) * de, (n - Me) * de, 1), Pe = t, Me = n, x && ve.restart(!0)
              }
            },
            Ye = function(e) {
              if (!Ve(e)) {
                e = V(e, w), se && (we = !0);
                var t = (1 === e.deltaMode ? v : 2 === e.deltaMode ? a.innerHeight : 1) * P;
                Fe(e.deltaX * t, e.deltaY * t, 0), x && !ie && ve.restart(!0)
              }
            },
            Xe = function(e) {
              if (!Ve(e)) {
                var t = e.clientX,
                  n = e.clientY,
                  r = t - Se.x,
                  i = n - Se.y;
                Se.x = t, Se.y = n, be = !0, (r || i) && Be(r, i)
              }
            },
            qe = function(e) {
              Se.event = e, ee(Se)
            },
            Qe = function(e) {
              Se.event = e, te(Se)
            },
            Ke = function(e) {
              return Ve(e) || V(e, w) && ce(Se)
            };
          ve = Se._dc = i.delayedCall(S || .25, (function() {
            Se._vx.reset(), Se._vy.reset(), ve.pause(), x && x(Se)
          })).pause(), Se.deltaX = Se.deltaY = 0, Se._vx = R(0, 50, !0), Se._vy = R(0, 50, !0), Se.scrollX = Ee, Se.scrollY = Ce, Se.isDragging = Se.isGesturing = Se.isPressed = !1, g(this), Se.enable = function(e) {
            return Se.isEnabled || (E(Ae ? Le : p, "scroll", O), r.indexOf("scroll") >= 0 && E(Ae ? Le : p, "scroll", Ge, w, fe), r.indexOf("wheel") >= 0 && E(p, "wheel", Ye, w, fe), (r.indexOf("touch") >= 0 && c || r.indexOf("pointer") >= 0) && (E(p, m[0], $e, w, fe), E(Le, m[2], Ue), E(Le, m[3], Ue), pe && E(p, "click", Re, !1, !0), ce && E(p, "click", Ke), oe && E(Le, "gesturestart", He), ae && E(Le, "gestureend", We), ee && E(p, d + "enter", qe), te && E(p, d + "leave", Qe), ne && E(p, d + "move", Xe)), Se.isEnabled = !0, e && e.type && $e(e), le && le(Se)), Se
          }, Se.disable = function() {
            Se.isEnabled && (b.filter((function(e) {
              return e !== Se && T(e.target)
            })).length || C(Ae ? Le : p, "scroll", O), Se.isPressed && (Se._vx.reset(), Se._vy.reset(), C(ie ? p : Le, m[1], je, !0)), C(Ae ? Le : p, "scroll", Ge, fe), C(p, "wheel", Ye, fe), C(p, m[0], $e, fe), C(Le, m[2], Ue), C(Le, m[3], Ue), C(p, "click", Re, !0), C(p, "click", Ke), C(Le, "gesturestart", He), C(Le, "gestureend", We), C(p, d + "enter", qe), C(p, d + "leave", Qe), C(p, d + "move", Xe), Se.isEnabled = Se.isPressed = Se.isDragging = !1, ue && ue(Se))
          }, Se.kill = Se.revert = function() {
            Se.disable();
            var e = b.indexOf(Se);
            e >= 0 && b.splice(e, 1), h === Se && (h = 0)
          }, b.push(Se), ie && T(p) && (h = Se), Se.enable(M)
        }, t = e, (n = [{
          key: "velocityX",
          get: function() {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function() {
            return this._vy.getVelocity()
          }
        }]) && r(t.prototype, n), e
      }();
      j.version = "3.12.2", j.create = function(e) {
        return new j(e)
      }, j.register = B, j.getAll = function() {
        return b.slice()
      }, j.getById = function(e) {
        return b.filter((function(t) {
          return t.vars.id === e
        }))[0]
      }, v() && i.registerPlugin(j);
      var $, U, H, W, G, Y, X, q, Q, K, Z, J, ee, te, ne, re, ie, oe, ae, se, le, ue, ce, de, fe, pe, he, me, ge, ve, ye, be, we, xe, _e, Se, ke = 1,
        Te = Date.now,
        Ee = Te(),
        Ce = 0,
        Pe = 0,
        Me = function(e, t, n) {
          var r = Ue(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Oe = function(e, t) {
          return !t || Ue(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Ae = function e() {
          return Pe && requestAnimationFrame(e)
        },
        Le = function() {
          return te = 1
        },
        De = function() {
          return te = 0
        },
        ze = function(e) {
          return e
        },
        Ne = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Re = function() {
          return "undefined" != typeof window
        },
        Ve = function() {
          return $ || Re() && ($ = window.gsap) && $.registerPlugin && $
        },
        Ie = function(e) {
          return !!~X.indexOf(e)
        },
        Fe = function(e) {
          return ("Height" === e ? ye : H["inner" + e]) || G["client" + e] || Y["client" + e]
        },
        Be = function(e) {
          return k(e, "getBoundingClientRect") || (Ie(e) ? function() {
            return Zt.width = H.innerWidth, Zt.height = ye, Zt
          } : function() {
            return ft(e)
          })
        },
        je = function(e, t) {
          var n = t.s,
            r = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(0, (n = "scroll" + r) && (o = k(e, n)) ? o() - Be(e)()[i] : Ie(e) ? (G[n] || Y[n]) - Fe(r) : e[n] - e["offset" + r])
        },
        $e = function(e, t) {
          for (var n = 0; n < ae.length; n += 3)(!t || ~t.indexOf(ae[n + 1])) && e(ae[n], ae[n + 1], ae[n + 2])
        },
        Ue = function(e) {
          return "string" == typeof e
        },
        He = function(e) {
          return "function" == typeof e
        },
        We = function(e) {
          return "number" == typeof e
        },
        Ge = function(e) {
          return "object" == typeof e
        },
        Ye = function(e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause()
        },
        Xe = function(e, t) {
          if (e.enabled) {
            var n = t(e);
            n && n.totalTime && (e.callbackAnimation = n)
          }
        },
        qe = Math.abs,
        Qe = "left",
        Ke = "right",
        Ze = "bottom",
        Je = "width",
        et = "height",
        tt = "Right",
        nt = "Left",
        rt = "Top",
        it = "Bottom",
        ot = "padding",
        at = "margin",
        st = "Width",
        lt = "Height",
        ut = "px",
        ct = function(e) {
          return H.getComputedStyle(e)
        },
        dt = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        ft = function(e, t) {
          var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== ct(e)[ne] && $.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            r = e.getBoundingClientRect();
          return n && n.progress(0).kill(), r
        },
        pt = function(e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0
        },
        ht = function(e) {
          var t, n = [],
            r = e.labels,
            i = e.duration();
          for (t in r) n.push(r[t] / i);
          return n
        },
        mt = function(e) {
          var t = $.utils.snap(e),
            n = Array.isArray(e) && e.slice(0).sort((function(e, t) {
              return e - t
            }));
          return n ? function(e, r, i) {
            var o;
            if (void 0 === i && (i = .001), !r) return t(e);
            if (r > 0) {
              for (e -= i, o = 0; o < n.length; o++)
                if (n[o] >= e) return n[o];
              return n[o - 1]
            }
            for (o = n.length, e += i; o--;)
              if (n[o] <= e) return n[o];
            return n[0]
          } : function(n, r, i) {
            void 0 === i && (i = .001);
            var o = t(n);
            return !r || Math.abs(o - n) < i || o - n < 0 == r < 0 ? o : t(r < 0 ? n - e : n + e)
          }
        },
        gt = function(e, t, n, r) {
          return n.split(",").forEach((function(n) {
            return e(t, n, r)
          }))
        },
        vt = function(e, t, n, r, i) {
          return e.addEventListener(t, n, {
            passive: !r,
            capture: !!i
          })
        },
        yt = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        bt = function(e, t, n) {
          (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n))
        },
        wt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        xt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        _t = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        St = function(e, t) {
          if (Ue(e)) {
            var n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in _t ? _t[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        kt = function(e, t, n, r, i, o, a, s) {
          var l = i.startColor,
            u = i.endColor,
            c = i.fontSize,
            d = i.indent,
            f = i.fontWeight,
            p = W.createElement("div"),
            h = Ie(n) || "fixed" === k(n, "pinType"),
            m = -1 !== e.indexOf("scroller"),
            g = h ? Y : n,
            v = -1 !== e.indexOf("start"),
            y = v ? l : u,
            b = "border-color:" + y + ";font-size:" + c + ";color:" + y + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((m || s) && h ? "fixed;" : "absolute;"), (m || s || !h) && (b += (r === D ? Ke : Ze) + ":" + (o + parseFloat(d)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Tt(p, 0, r, v), p
        },
        Tt = function(e, t, n, r) {
          var i = {
              display: "block"
            },
            o = n[r ? "os2" : "p2"],
            a = n[r ? "p2" : "os2"];
          e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + o + st] = 1, i["border" + a + st] = 0, i[n.p] = t + "px", $.set(e, i)
        },
        Et = [],
        Ct = {},
        Pt = function() {
          return Te() - Ce > 34 && (we || (we = requestAnimationFrame(Wt)))
        },
        Mt = function() {
          (!ce || !ce.isPressed || ce.startX > Y.clientWidth) && (w.cache++, ce ? we || (we = requestAnimationFrame(Wt)) : Wt(), Ce || Nt("scrollStart"), Ce = Te())
        },
        Ot = function() {
          pe = H.innerWidth, fe = H.innerHeight
        },
        At = function() {
          w.cache++, !ee && !ue && !W.fullscreenElement && !W.webkitFullscreenElement && (!de || pe !== H.innerWidth || Math.abs(H.innerHeight - fe) > .25 * H.innerHeight) && q.restart(!0)
        },
        Lt = {},
        Dt = [],
        zt = function e() {
          return yt(an, "scrollEnd", e) || $t(!0)
        },
        Nt = function(e) {
          return Lt[e] && Lt[e].map((function(e) {
            return e()
          })) || Dt
        },
        Rt = [],
        Vt = function(e) {
          for (var t = 0; t < Rt.length; t += 5)(!e || Rt[t + 4] && Rt[t + 4].query === e) && (Rt[t].style.cssText = Rt[t + 1], Rt[t].getBBox && Rt[t].setAttribute("transform", Rt[t + 2] || ""), Rt[t + 3].uncache = 1)
        },
        It = function(e, t) {
          var n;
          for (re = 0; re < Et.length; re++) !(n = Et[re]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
          t && Vt(t), t || Nt("revert")
        },
        Ft = function(e, t) {
          w.cache++, (t || !xe) && w.forEach((function(e) {
            return He(e) && e.cacheID++ && (e.rec = 0)
          })), Ue(e) && (H.history.scrollRestoration = ge = e)
        },
        Bt = 0,
        jt = function() {
          Y.appendChild(ve), ye = ve.offsetHeight || H.innerHeight, Y.removeChild(ve)
        },
        $t = function(e, t) {
          if (!Ce || e) {
            jt(), xe = an.isRefreshing = !0, w.forEach((function(e) {
              return He(e) && ++e.cacheID && (e.rec = e())
            }));
            var n = Nt("refreshInit");
            se && an.sort(), t || It(), w.forEach((function(e) {
              He(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            })), Et.slice(0).forEach((function(e) {
              return e.refresh()
            })), Et.forEach((function(e, t) {
              if (e._subPinOffset && e.pin) {
                var n = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[n];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[n] - r), e.refresh()
              }
            })), Et.forEach((function(e) {
              var t = je(e.scroller, e._dir);
              ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
            })), n.forEach((function(e) {
              return e && e.render && e.render(-1)
            })), w.forEach((function(e) {
              He(e) && (e.smooth && requestAnimationFrame((function() {
                return e.target.style.scrollBehavior = "smooth"
              })), e.rec && e(e.rec))
            })), Ft(ge, 1), q.pause(), Bt++, xe = 2, Wt(2), Et.forEach((function(e) {
              return He(e.vars.onRefresh) && e.vars.onRefresh(e)
            })), xe = an.isRefreshing = !1, Nt("refresh")
          } else vt(an, "scrollEnd", zt)
        },
        Ut = 0,
        Ht = 1,
        Wt = function(e) {
          if (!xe || 2 === e) {
            an.isUpdating = !0, Se && Se.update(0);
            var t = Et.length,
              n = Te(),
              r = n - Ee >= 50,
              i = t && Et[0].scroll();
            if (Ht = Ut > i ? -1 : 1, xe || (Ut = i), r && (Ce && !te && n - Ce > 200 && (Ce = 0, Nt("scrollEnd")), Z = Ee, Ee = n), Ht < 0) {
              for (re = t; re-- > 0;) Et[re] && Et[re].update(0, r);
              Ht = 1
            } else
              for (re = 0; re < t; re++) Et[re] && Et[re].update(0, r);
            an.isUpdating = !1
          }
          we = 0
        },
        Gt = [Qe, "top", Ze, Ke, at + it, at + tt, at + rt, at + nt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Yt = Gt.concat([Je, et, "boxSizing", "max" + st, "max" + lt, "position", at, ot, ot + rt, ot + tt, ot + it, ot + nt]),
        Xt = function(e, t, n, r) {
          if (!e._gsap.swappedIn) {
            for (var i, o = Gt.length, a = t.style, s = e.style; o--;) a[i = Gt[o]] = n[i];
            a.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (a.display = "inline-block"), s[Ze] = s[Ke] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Je] = pt(e, L) + ut, a[et] = pt(e, D) + ut, a[ot] = s[at] = s.top = s[Qe] = "0", Qt(r), s[Je] = s["max" + st] = n[Je], s[et] = s["max" + lt] = n[et], s[ot] = n[ot], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        qt = /([A-Z])/g,
        Qt = function(e) {
          if (e) {
            var t, n, r = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || $.core.getCache(e.t)).uncache = 1; o < i; o += 2) n = e[o + 1], t = e[o], n ? r[t] = n : r[t] && r.removeProperty(t.replace(qt, "-$1").toLowerCase())
          }
        },
        Kt = function(e) {
          for (var t = Yt.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Yt[i], n[Yt[i]]);
          return r.t = e, r
        },
        Zt = {
          left: 0,
          top: 0
        },
        Jt = function(e, t, n, r, i, o, a, s, l, u, c, d, f, p) {
          He(e) && (e = e(s)), Ue(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? St("0" + e.substr(3), n) : 0));
          var h, m, g, v = f ? f.time() : 0;
          if (f && f.seek(0), isNaN(e) || (e = +e), We(e)) f && (e = $.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), a && Tt(a, n, r, !0);
          else {
            He(t) && (t = t(s));
            var y, b, w, x, _ = (e || "0").split(" ");
            g = z(t, s) || Y, (y = ft(g) || {}) && (y.left || y.top) || "none" !== ct(g).display || (x = g.style.display, g.style.display = "block", y = ft(g), x ? g.style.display = x : g.style.removeProperty("display")), b = St(_[0], y[r.d]), w = St(_[1] || "0", n), e = y[r.p] - l[r.p] - u + b + i - w, a && Tt(a, w, r, n - w < 20 || a._isStart && w > 20), n -= n - w
          }
          if (p && (s[p] = e || -.001, e < 0 && (e = 0)), o) {
            var S = e + n,
              k = o._isStart;
            h = "scroll" + r.d2, Tt(o, S, r, k && S > 20 || !k && (c ? Math.max(Y[h], G[h]) : o.parentNode[h]) <= S + 1), c && (l = ft(a), c && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + ut))
          }
          return f && g && (h = ft(g), f.seek(d), m = ft(g), f._caScrollDist = h[r.p] - m[r.p], e = e / f._caScrollDist * d), f && f.seek(v), f ? e : Math.round(e)
        },
        en = /(webkit|moz|length|cssText|inset)/i,
        tn = function(e, t, n, r) {
          if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === Y) {
              for (i in e._stOrig = a.cssText, o = ct(e)) + i || en.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
              a.top = n, a.left = r
            } else a.cssText = e._stOrig;
            $.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        nn = function(e, t, n) {
          var r = t,
            i = r;
          return function(t) {
            var o = Math.round(e());
            return o !== r && o !== i && Math.abs(o - r) > 3 && Math.abs(o - i) > 3 && (t = o, n && n()), i = r, r = t, t
          }
        },
        rn = function(e, t, n) {
          var r = {};
          r[t.p] = "+=" + n, $.set(e, r)
        },
        on = function(e, t) {
          var n = N(e, t),
            r = "_scroll" + t.p2,
            i = function t(i, o, a, s, l) {
              var u = t.tween,
                c = o.onComplete,
                d = {};
              a = a || n();
              var f = nn(n, a, (function() {
                u.kill(), t.tween = 0
              }));
              return l = s && l || 0, s = s || i - a, u && u.kill(), o[r] = i, o.modifiers = d, d[r] = function() {
                return f(a + s * u.ratio + l * u.ratio * u.ratio)
              }, o.onUpdate = function() {
                w.cache++, Wt()
              }, o.onComplete = function() {
                t.tween = 0, c && c.call(u)
              }, u = t.tween = $.to(e, o)
            };
          return e[r] = n, n.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
          }, vt(e, "wheel", n.wheelHandler), an.isTouch && vt(e, "touchmove", n.wheelHandler), i
        },
        an = function() {
          function e(t, n) {
            U || e.register($) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), me(this), this.init(t, n)
          }
          return e.prototype.init = function(t, n) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Pe) {
              var r, i, o, a, s, l, u, c, d, f, p, h, m, g, v, y, b, _, S, T, E, C, P, M, O, A, R, V, I, F, B, j, U, X, q, J, ne, ie, oe, ae, ue, ce, de = t = dt(Ue(t) || We(t) || t.nodeType ? {
                  trigger: t
                } : t, xt),
                fe = de.onUpdate,
                pe = de.toggleClass,
                he = de.id,
                me = de.onToggle,
                ge = de.onRefresh,
                ve = de.scrub,
                ye = de.trigger,
                we = de.pin,
                Ee = de.pinSpacing,
                Ae = de.invalidateOnRefresh,
                Le = de.anticipatePin,
                De = de.onScrubComplete,
                Re = de.onSnapComplete,
                Ve = de.once,
                $e = de.snap,
                Qe = de.pinReparent,
                Ke = de.pinSpacer,
                Ze = de.containerAnimation,
                gt = de.fastScrollEnd,
                bt = de.preventOverlaps,
                _t = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? L : D,
                Tt = !ve && 0 !== ve,
                Pt = z(t.scroller || H),
                Ot = $.core.getCache(Pt),
                Lt = Ie(Pt),
                Dt = "fixed" === ("pinType" in t ? t.pinType : k(Pt, "pinType") || Lt && "fixed"),
                Nt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Rt = Tt && t.toggleActions.split(" "),
                Vt = "markers" in t ? t.markers : xt.markers,
                It = Lt ? 0 : parseFloat(ct(Pt)["border" + _t.p2 + st]) || 0,
                Ft = this,
                jt = t.onRefreshInit && function() {
                  return t.onRefreshInit(Ft)
                },
                Ut = function(e, t, n) {
                  var r = n.d,
                    i = n.d2,
                    o = n.a;
                  return (o = k(e, "getBoundingClientRect")) ? function() {
                    return o()[r]
                  } : function() {
                    return (t ? Fe(i) : e["client" + i]) || 0
                  }
                }(Pt, Lt, _t),
                Wt = function(e, t) {
                  return !t || ~x.indexOf(e) ? Be(e) : function() {
                    return Zt
                  }
                }(Pt, Lt),
                Gt = 0,
                Yt = 0,
                qt = 0,
                en = N(Pt, _t);
              if (Ft._startClamp = Ft._endClamp = !1, Ft._dir = _t, Le *= 45, Ft.scroller = Pt, Ft.scroll = Ze ? Ze.time.bind(Ze) : en, a = en(), Ft.vars = t, n = n || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (Se = Ft)), Ot.tweenScroll = Ot.tweenScroll || {
                  top: on(Pt, D),
                  left: on(Pt, L)
                }, Ft.tweenTo = r = Ot.tweenScroll[_t.p], Ft.scrubDuration = function(e) {
                  (U = We(e) && e) ? j ? j.duration(e) : j = $.to(n, {
                    ease: "expo",
                    totalProgress: "+=0",
                    duration: U,
                    paused: !0,
                    onComplete: function() {
                      return De && De(Ft)
                    }
                  }): (j && j.progress(1).kill(), j = 0)
                }, n && (n.vars.lazy = !1, n._initted && !Ft.isReverted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.duration() && n.render(0, !0, !0), Ft.animation = n.pause(), n.scrollTrigger = Ft, Ft.scrubDuration(ve), F = 0, he || (he = n.vars.id)), $e && (Ge($e) && !$e.push || ($e = {
                  snapTo: $e
                }), "scrollBehavior" in Y.style && $.set(Lt ? [Y, G] : Pt, {
                  scrollBehavior: "auto"
                }), w.forEach((function(e) {
                  return He(e) && e.target === (Lt ? W.scrollingElement || G : Pt) && (e.smooth = !1)
                })), o = He($e.snapTo) ? $e.snapTo : "labels" === $e.snapTo ? function(e) {
                  return function(t) {
                    return $.utils.snap(ht(e), t)
                  }
                }(n) : "labelsDirectional" === $e.snapTo ? (ae = n, function(e, t) {
                  return mt(ht(ae))(e, t.direction)
                }) : !1 !== $e.directional ? function(e, t) {
                  return mt($e.snapTo)(e, Te() - Yt < 500 ? 0 : t.direction)
                } : $.utils.snap($e.snapTo), X = $e.duration || {
                  min: .1,
                  max: 2
                }, X = Ge(X) ? K(X.min, X.max) : K(X, X), q = $.delayedCall($e.delay || U / 2 || .1, (function() {
                  var e = en(),
                    t = Te() - Yt < 500,
                    i = r.tween;
                  if (!(t || Math.abs(Ft.getVelocity()) < 10) || i || te || Gt === e) Ft.isActive && Gt !== e && q.restart(!0);
                  else {
                    var a = (e - l) / g,
                      s = n && !Tt ? n.totalProgress() : a,
                      c = t ? 0 : (s - B) / (Te() - Z) * 1e3 || 0,
                      d = $.utils.clamp(-a, 1 - a, qe(c / 2) * c / .185),
                      f = a + (!1 === $e.inertia ? 0 : d),
                      p = K(0, 1, o(f, Ft)),
                      h = Math.round(l + p * g),
                      m = $e,
                      v = m.onStart,
                      y = m.onInterrupt,
                      b = m.onComplete;
                    if (e <= u && e >= l && h !== e) {
                      if (i && !i._initted && i.data <= qe(h - e)) return;
                      !1 === $e.inertia && (d = p - a), r(h, {
                        duration: X(qe(.185 * Math.max(qe(f - s), qe(p - s)) / c / .05 || 0)),
                        ease: $e.ease || "power3",
                        data: qe(h - e),
                        onInterrupt: function() {
                          return q.restart(!0) && y && y(Ft)
                        },
                        onComplete: function() {
                          Ft.update(), Gt = en(), F = B = n && !Tt ? n.totalProgress() : Ft.progress, Re && Re(Ft), b && b(Ft)
                        }
                      }, e, d * g, h - e - d * g), v && v(Ft, r.tween)
                    }
                  }
                })).pause()), he && (Ct[he] = Ft), (oe = (ye = Ft.trigger = z(ye || !0 !== we && we)) && ye._gsap && ye._gsap.stRevert) && (oe = oe(Ft)), we = !0 === we ? ye : z(we), Ue(pe) && (pe = {
                  targets: ye,
                  className: pe
                }), we && (!1 === Ee || Ee === at || (Ee = !(!Ee && we.parentNode && we.parentNode.style && "flex" === ct(we.parentNode).display) && ot), Ft.pin = we, (i = $.core.getCache(we)).spacer ? v = i.pinState : (Ke && ((Ke = z(Ke)) && !Ke.nodeType && (Ke = Ke.current || Ke.nativeElement), i.spacerIsNative = !!Ke, Ke && (i.spacerState = Kt(Ke))), i.spacer = _ = Ke || W.createElement("div"), _.classList.add("pin-spacer"), he && _.classList.add("pin-spacer-" + he), i.pinState = v = Kt(we)), !1 !== t.force3D && $.set(we, {
                  force3D: !0
                }), Ft.spacer = _ = i.spacer, I = ct(we), M = I[Ee + _t.os2], T = $.getProperty(we), E = $.quickSetter(we, _t.a, ut), Xt(we, _, I), b = Kt(we)), Vt) {
                h = Ge(Vt) ? dt(Vt, wt) : wt, f = kt("scroller-start", he, Pt, _t, h, 0), p = kt("scroller-end", he, Pt, _t, h, 0, f), S = f["offset" + _t.op.d2];
                var nn = z(k(Pt, "content") || Pt);
                c = this.markerStart = kt("start", he, nn, _t, h, S, 0, Ze), d = this.markerEnd = kt("end", he, nn, _t, h, S, 0, Ze), Ze && (ie = $.quickSetter([c, d], _t.a, ut)), Dt || x.length && !0 === k(Pt, "fixedMarkers") || (ce = ct(ue = Lt ? Y : Pt).position, ue.style.position = "absolute" === ce || "fixed" === ce ? ce : "relative", $.set([f, p], {
                  force3D: !0
                }), A = $.quickSetter(f, _t.a, ut), V = $.quickSetter(p, _t.a, ut))
              }
              if (Ze) {
                var an = Ze.vars.onUpdate,
                  sn = Ze.vars.onUpdateParams;
                Ze.eventCallback("onUpdate", (function() {
                  Ft.update(0, 0, 1), an && an.apply(Ze, sn || [])
                }))
              }
              if (Ft.previous = function() {
                  return Et[Et.indexOf(Ft) - 1]
                }, Ft.next = function() {
                  return Et[Et.indexOf(Ft) + 1]
                }, Ft.revert = function(e, t) {
                  if (!t) return Ft.kill(!0);
                  var r = !1 !== e || !Ft.enabled,
                    i = ee;
                  r !== Ft.isReverted && (r && (J = Math.max(en(), Ft.scroll.rec || 0), qt = Ft.progress, ne = n && n.progress()), c && [c, d, f, p].forEach((function(e) {
                    return e.style.display = r ? "none" : "block"
                  })), r && (ee = Ft, Ft.update(r)), !we || Qe && Ft.isActive || (r ? function(e, t, n) {
                    Qt(n);
                    var r = e._gsap;
                    if (r.spacerIsNative) Qt(r.spacerState);
                    else if (e._gsap.swappedIn) {
                      var i = t.parentNode;
                      i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(we, _, v) : Xt(we, _, ct(we), O)), r || Ft.update(r), ee = i, Ft.isReverted = r)
                }, Ft.refresh = function(i, o, h, w) {
                  if (!ee && Ft.enabled || o)
                    if (we && i && Ce) vt(e, "scrollEnd", zt);
                    else {
                      !xe && jt && jt(Ft), ee = Ft, r.tween && !h && (r.tween.kill(), r.tween = 0), j && j.pause(), Ae && n && n.revert({
                        kill: !1
                      }).invalidate(), Ft.isReverted || Ft.revert(!0, !0), Ft._subPinOffset = !1;
                      var x, S, k, E, M, A, V, I, F, B, U, H, X, Q = Ut(),
                        K = Wt(),
                        Z = Ze ? Ze.duration() : je(Pt, _t),
                        te = g <= .01,
                        re = 0,
                        ie = w || 0,
                        oe = Ge(h) ? h.end : t.end,
                        ae = t.endTrigger || ye,
                        se = Ge(h) ? h.start : t.start || (0 !== t.start && ye ? we ? "0 0" : "0 100%" : 0),
                        ue = Ft.pinnedContainer = t.pinnedContainer && z(t.pinnedContainer, Ft),
                        ce = ye && Math.max(0, Et.indexOf(Ft)) || 0,
                        de = ce;
                      for (Vt && Ge(h) && (H = $.getProperty(f, _t.p), X = $.getProperty(p, _t.p)); de--;)(A = Et[de]).end || A.refresh(0, 1) || (ee = Ft), !(V = A.pin) || V !== ye && V !== we && V !== ue || A.isReverted || (B || (B = []), B.unshift(A), A.revert(!0, !0)), A !== Et[de] && (ce--, de--);
                      for (He(se) && (se = se(Ft)), se = Me(se, "start", Ft), l = Jt(se, ye, Q, _t, en(), c, f, Ft, K, It, Dt, Z, Ze, Ft._startClamp && "_startClamp") || (we ? -.001 : 0), He(oe) && (oe = oe(Ft)), Ue(oe) && !oe.indexOf("+=") && (~oe.indexOf(" ") ? oe = (Ue(se) ? se.split(" ")[0] : "") + oe : (re = St(oe.substr(2), Q), oe = Ue(se) ? se : (Ze ? $.utils.mapRange(0, Ze.duration(), Ze.scrollTrigger.start, Ze.scrollTrigger.end, l) : l) + re, ae = ye)), oe = Me(oe, "end", Ft), u = Math.max(l, Jt(oe || (ae ? "100% 0" : Z), ae, Q, _t, en() + re, d, p, Ft, K, It, Dt, Z, Ze, Ft._endClamp && "_endClamp")) || -.001, re = 0, de = ce; de--;)(V = (A = Et[de]).pin) && A.start - A._pinPush <= l && !Ze && A.end > 0 && (x = A.end - (Ft._startClamp ? Math.max(0, A.start) : A.start), (V === ye && A.start - A._pinPush < l || V === ue) && isNaN(se) && (re += x * (1 - A.progress)), V === we && (ie += x));
                      if (l += re, u += re, Ft._startClamp && (Ft._startClamp += re), Ft._endClamp && !xe && (Ft._endClamp = u || -.001, u = Math.min(u, je(Pt, _t))), g = u - l || (l -= .01) && .001, te && (qt = $.utils.clamp(0, 1, $.utils.normalize(l, u, J))), Ft._pinPush = ie, c && re && ((x = {})[_t.a] = "+=" + re, ue && (x[_t.p] = "-=" + en()), $.set([c, d], x)), we) x = ct(we), E = _t === D, k = en(), C = parseFloat(T(_t.a)) + ie, !Z && u > 1 && (U = {
                        style: U = (Lt ? W.scrollingElement || G : Pt).style,
                        value: U["overflow" + _t.a.toUpperCase()]
                      }, Lt && "scroll" !== ct(Y)["overflow" + _t.a.toUpperCase()] && (U.style["overflow" + _t.a.toUpperCase()] = "scroll")), Xt(we, _, x), b = Kt(we), S = ft(we, !0), I = Dt && N(Pt, E ? L : D)(), Ee && ((O = [Ee + _t.os2, g + ie + ut]).t = _, (de = Ee === ot ? pt(we, _t) + g + ie : 0) && O.push(_t.d, de + ut), Qt(O), ue && Et.forEach((function(e) {
                        e.pin === ue && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      })), Dt && en(J)), Dt && ((M = {
                        top: S.top + (E ? k - l : I) + ut,
                        left: S.left + (E ? I : k - l) + ut,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[Je] = M["max" + st] = Math.ceil(S.width) + ut, M[et] = M["max" + lt] = Math.ceil(S.height) + ut, M[at] = M[at + rt] = M[at + tt] = M[at + it] = M[at + nt] = "0", M[ot] = x[ot], M[ot + rt] = x[ot + rt], M[ot + tt] = x[ot + tt], M[ot + it] = x[ot + it], M[ot + nt] = x[ot + nt], y = function(e, t, n) {
                        for (var r, i = [], o = e.length, a = n ? 8 : 0; a < o; a += 2) r = e[a], i.push(r, r in t ? t[r] : e[a + 1]);
                        return i.t = e.t, i
                      }(v, M, Qe), xe && en(0)), n ? (F = n._initted, le(1), n.render(n.duration(), !0, !0), P = T(_t.a) - C + g + ie, R = Math.abs(g - P) > 1, Dt && R && y.splice(y.length - 2, 2), n.render(0, !0, !0), F || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), le(0)) : P = g, U && (U.value ? U.style["overflow" + _t.a.toUpperCase()] = U.value : U.style.removeProperty("overflow-" + _t.a));
                      else if (ye && en() && !Ze)
                        for (S = ye.parentNode; S && S !== Y;) S._pinOffset && (l -= S._pinOffset, u -= S._pinOffset), S = S.parentNode;
                      B && B.forEach((function(e) {
                        return e.revert(!1, !0)
                      })), Ft.start = l, Ft.end = u, a = s = xe ? J : en(), Ze || xe || (a < J && en(J), Ft.scroll.rec = 0), Ft.revert(!1, !0), Yt = Te(), q && (Gt = -1, q.restart(!0)), ee = 0, n && Tt && (n._initted || ne) && n.progress() !== ne && n.progress(ne || 0, !0).render(n.time(), !0, !0), (te || qt !== Ft.progress || Ze) && (n && !Tt && n.totalProgress(Ze && l < -.001 && !qt ? $.utils.normalize(l, u, 0) : qt, !0), Ft.progress = te || (a - l) / g === qt ? 0 : qt), we && Ee && (_._pinOffset = Math.round(Ft.progress * P)), j && j.invalidate(), isNaN(H) || (H -= $.getProperty(f, _t.p), X -= $.getProperty(p, _t.p), rn(f, _t, H), rn(c, _t, H - (w || 0)), rn(p, _t, X), rn(d, _t, X - (w || 0))), te && !xe && Ft.update(), !ge || xe || m || (m = !0, ge(Ft), m = !1)
                    }
                }, Ft.getVelocity = function() {
                  return (en() - s) / (Te() - Z) * 1e3 || 0
                }, Ft.endAnimation = function() {
                  Ye(Ft.callbackAnimation), n && (j ? j.progress(1) : n.paused() ? Tt || Ye(n, Ft.direction < 0, 1) : Ye(n, n.reversed()))
                }, Ft.labelToScroll = function(e) {
                  return n && n.labels && (l || Ft.refresh() || l) + n.labels[e] / n.duration() * g || 0
                }, Ft.getTrailing = function(e) {
                  var t = Et.indexOf(Ft),
                    n = Ft.direction > 0 ? Et.slice(0, t).reverse() : Et.slice(t + 1);
                  return (Ue(e) ? n.filter((function(t) {
                    return t.vars.preventOverlaps === e
                  })) : n).filter((function(e) {
                    return Ft.direction > 0 ? e.end <= l : e.start >= u
                  }))
                }, Ft.update = function(e, t, i) {
                  if (!Ze || i || e) {
                    var o, c, d, p, h, m, v, w = !0 === xe ? J : Ft.scroll(),
                      x = e ? 0 : (w - l) / g,
                      S = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      k = Ft.progress;
                    if (t && (s = a, a = Ze ? en() : w, $e && (B = F, F = n && !Tt ? n.totalProgress() : S)), Le && !S && we && !ee && !ke && Ce && l < w + (w - s) / (Te() - Z) * Le && (S = 1e-4), S !== k && Ft.enabled) {
                      if (p = (h = (o = Ft.isActive = !!S && S < 1) != (!!k && k < 1)) || !!S != !!k, Ft.direction = S > k ? 1 : -1, Ft.progress = S, p && !ee && (c = S && !k ? 0 : 1 === S ? 1 : 1 === k ? 2 : 3, Tt && (d = !h && "none" !== Rt[c + 1] && Rt[c + 1] || Rt[c], v = n && ("complete" === d || "reset" === d || d in n))), bt && (h || v) && (v || ve || !n) && (He(bt) ? bt(Ft) : Ft.getTrailing(bt).forEach((function(e) {
                          return e.endAnimation()
                        }))), Tt || (!j || ee || ke ? n && n.totalProgress(S, !(!ee || !Yt && !e)) : (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", S, n._tTime / n._tDur) : (j.vars.totalProgress = S, j.invalidate().restart()))), we)
                        if (e && Ee && (_.style[Ee + _t.os2] = M), Dt) {
                          if (p) {
                            if (m = !e && S > k && u + 1 > w && w + 1 >= je(Pt, _t), Qe)
                              if (e || !o && !m) tn(we, _);
                              else {
                                var T = ft(we, !0),
                                  O = w - l;
                                tn(we, Y, T.top + (_t === D ? O : 0) + ut, T.left + (_t === D ? 0 : O) + ut)
                              } Qt(o || m ? y : b), R && S < 1 && o || E(C + (1 !== S || m ? 0 : P))
                          }
                        } else E(Ne(C + P * S));
                      $e && !r.tween && !ee && !ke && q.restart(!0), pe && (h || Ve && S && (S < 1 || !be)) && Q(pe.targets).forEach((function(e) {
                        return e.classList[o || Ve ? "add" : "remove"](pe.className)
                      })), fe && !Tt && !e && fe(Ft), p && !ee ? (Tt && (v && ("complete" === d ? n.pause().totalProgress(1) : "reset" === d ? n.restart(!0).pause() : "restart" === d ? n.restart(!0) : n[d]()), fe && fe(Ft)), !h && be || (me && h && Xe(Ft, me), Nt[c] && Xe(Ft, Nt[c]), Ve && (1 === S ? Ft.kill(!1, 1) : Nt[c] = 0), h || Nt[c = 1 === S ? 1 : 3] && Xe(Ft, Nt[c])), gt && !o && Math.abs(Ft.getVelocity()) > (We(gt) ? gt : 2500) && (Ye(Ft.callbackAnimation), j ? j.progress(1) : Ye(n, "reverse" === d ? 1 : !S, 1))) : Tt && fe && !ee && fe(Ft)
                    }
                    if (V) {
                      var L = Ze ? w / Ze.duration() * (Ze._caScrollDist || 0) : w;
                      A(L + (f._isFlipped ? 1 : 0)), V(L)
                    }
                    ie && ie(-w / Ze.duration() * (Ze._caScrollDist || 0))
                  }
                }, Ft.enable = function(t, n) {
                  Ft.enabled || (Ft.enabled = !0, vt(Pt, "resize", At), Lt || vt(Pt, "scroll", Mt), jt && vt(e, "refreshInit", jt), !1 !== t && (Ft.progress = qt = 0, a = s = Gt = en()), !1 !== n && Ft.refresh())
                }, Ft.getTween = function(e) {
                  return e && r ? r.tween : j
                }, Ft.setPositions = function(e, t, n, r) {
                  if (Ze) {
                    var i = Ze.scrollTrigger,
                      o = Ze.duration(),
                      a = i.end - i.start;
                    e = i.start + a * e / o, t = i.start + a * t / o
                  }
                  Ft.refresh(!1, !1, {
                    start: Oe(e, n && !!Ft._startClamp),
                    end: Oe(t, n && !!Ft._endClamp)
                  }, r), Ft.update()
                }, Ft.adjustPinSpacing = function(e) {
                  if (O && e) {
                    var t = O.indexOf(_t.d) + 1;
                    O[t] = parseFloat(O[t]) + e + ut, O[1] = parseFloat(O[1]) + e + ut, Qt(O)
                  }
                }, Ft.disable = function(t, n) {
                  if (Ft.enabled && (!1 !== t && Ft.revert(!0, !0), Ft.enabled = Ft.isActive = !1, n || j && j.pause(), J = 0, i && (i.uncache = 1), jt && yt(e, "refreshInit", jt), q && (q.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !Lt)) {
                    for (var o = Et.length; o--;)
                      if (Et[o].scroller === Pt && Et[o] !== Ft) return;
                    yt(Pt, "resize", At), Lt || yt(Pt, "scroll", Mt)
                  }
                }, Ft.kill = function(e, r) {
                  Ft.disable(e, r), j && !r && j.kill(), he && delete Ct[he];
                  var o = Et.indexOf(Ft);
                  o >= 0 && Et.splice(o, 1), o === re && Ht > 0 && re--, o = 0, Et.forEach((function(e) {
                    return e.scroller === Ft.scroller && (o = 1)
                  })), o || xe || (Ft.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({
                    kill: !1
                  }), r || n.kill()), c && [c, d, f, p].forEach((function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  })), Se === Ft && (Se = 0), we && (i && (i.uncache = 1), o = 0, Et.forEach((function(e) {
                    return e.pin === we && o++
                  })), o || (i.spacer = 0)), t.onKill && t.onKill(Ft)
                }, Et.push(Ft), Ft.enable(!1, !1), oe && oe(Ft), n && n.add && !g) {
                var ln = Ft.update;
                Ft.update = function() {
                  Ft.update = ln, l || u || Ft.refresh()
                }, $.delayedCall(.01, Ft.update), g = .01, l = u = 0
              } else Ft.refresh();
              we && function() {
                if (_e !== Bt) {
                  var e = _e = Bt;
                  requestAnimationFrame((function() {
                    return e === Bt && $t(!0)
                  }))
                }
              }()
            } else this.update = this.refresh = this.kill = ze
          }, e.register = function(t) {
            return U || ($ = t || Ve(), Re() && window.document && e.enable(), U = Pe), U
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) xt[t] = e[t];
            return xt
          }, e.disable = function(e, t) {
            Pe = 0, Et.forEach((function(n) {
              return n[t ? "kill" : "disable"](e)
            })), yt(H, "wheel", Mt), yt(W, "scroll", Mt), clearInterval(J), yt(W, "touchcancel", ze), yt(Y, "touchstart", ze), gt(yt, W, "pointerdown,touchstart,mousedown", Le), gt(yt, W, "pointerup,touchend,mouseup", De), q.kill(), $e(yt);
            for (var n = 0; n < w.length; n += 3) bt(yt, w[n], w[n + 1]), bt(yt, w[n], w[n + 2])
          }, e.enable = function() {
            if (H = window, W = document, G = W.documentElement, Y = W.body, $ && (Q = $.utils.toArray, K = $.utils.clamp, me = $.core.context || ze, le = $.core.suppressOverwrites || ze, ge = H.history.scrollRestoration || "auto", Ut = H.pageYOffset, $.core.globals("ScrollTrigger", e), Y)) {
              Pe = 1, (ve = document.createElement("div")).style.height = "100vh", ve.style.position = "absolute", jt(), Ae(), j.register($), e.isTouch = j.isTouch, he = j.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vt(H, "wheel", Mt), X = [H, W, G, Y], $.matchMedia ? (e.matchMedia = function(e) {
                var t, n = $.matchMedia();
                for (t in e) n.add(t, e[t]);
                return n
              }, $.addEventListener("matchMediaInit", (function() {
                return It()
              })), $.addEventListener("matchMediaRevert", (function() {
                return Vt()
              })), $.addEventListener("matchMedia", (function() {
                $t(0, 1), Nt("matchMedia")
              })), $.matchMedia("(orientation: portrait)", (function() {
                return Ot(), Ot
              }))) : console.warn("Requires GSAP 3.11.0 or later"), Ot(), vt(W, "scroll", Mt);
              var t, n, r = Y.style,
                i = r.borderTopStyle,
                o = $.core.Animation.prototype;
              for (o.revert || Object.defineProperty(o, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), r.borderTopStyle = "solid", t = ft(Y), D.m = Math.round(t.top + D.sc()) || 0, L.m = Math.round(t.left + L.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), J = setInterval(Pt, 250), $.delayedCall(.5, (function() {
                  return ke = 0
                })), vt(W, "touchcancel", ze), vt(Y, "touchstart", ze), gt(vt, W, "pointerdown,touchstart,mousedown", Le), gt(vt, W, "pointerup,touchend,mouseup", De), ne = $.utils.checkPrefix("transform"), Yt.push(ne), U = Te(), q = $.delayedCall(.2, $t).pause(), ae = [W, "visibilitychange", function() {
                  var e = H.innerWidth,
                    t = H.innerHeight;
                  W.hidden ? (ie = e, oe = t) : ie === e && oe === t || At()
                }, W, "DOMContentLoaded", $t, H, "load", $t, H, "resize", At], $e(vt), Et.forEach((function(e) {
                  return e.enable(0, 1)
                })), n = 0; n < w.length; n += 3) bt(yt, w[n], w[n + 1]), bt(yt, w[n], w[n + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (be = !!t.limitCallbacks);
            var n = t.syncInterval;
            n && clearInterval(J) || (J = n) && setInterval(Pt, n), "ignoreMobileResize" in t && (de = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && ($e(yt) || $e(vt, t.autoRefreshEvents || "none"), ue = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var n = z(e),
              r = w.indexOf(n),
              i = Ie(n);
            ~r && w.splice(r, i ? 6 : 2), t && (i ? x.unshift(H, t, Y, t, G, t) : x.unshift(n, t))
          }, e.clearMatchMedia = function(e) {
            Et.forEach((function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            }))
          }, e.isInViewport = function(e, t, n) {
            var r = (Ue(e) ? z(e) : e).getBoundingClientRect(),
              i = r[n ? Je : et] * t || 0;
            return n ? r.right - i > 0 && r.left + i < H.innerWidth : r.bottom - i > 0 && r.top + i < H.innerHeight
          }, e.positionInViewport = function(e, t, n) {
            Ue(e) && (e = z(e));
            var r = e.getBoundingClientRect(),
              i = r[n ? Je : et],
              o = null == t ? i / 2 : t in _t ? _t[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return n ? (r.left + o) / H.innerWidth : (r.top + o) / H.innerHeight
          }, e.killAll = function(e) {
            if (Et.slice(0).forEach((function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              })), !0 !== e) {
              var t = Lt.killAll || [];
              Lt = {}, t.forEach((function(e) {
                return e()
              }))
            }
          }, e
        }();
      an.version = "3.12.2", an.saveStyles = function(e) {
        return e ? Q(e).forEach((function(e) {
          if (e && e.style) {
            var t = Rt.indexOf(e);
            t >= 0 && Rt.splice(t, 5), Rt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), $.core.getCache(e), me())
          }
        })) : Rt
      }, an.revert = function(e, t) {
        return It(!e, t)
      }, an.create = function(e, t) {
        return new an(e, t)
      }, an.refresh = function(e) {
        return e ? At() : (U || an.register()) && $t(!0)
      }, an.update = function(e) {
        return ++w.cache && Wt(!0 === e ? 2 : 0)
      }, an.clearScrollMemory = Ft, an.maxScroll = function(e, t) {
        return je(e, t ? L : D)
      }, an.getScrollFunc = function(e, t) {
        return N(z(e), t ? L : D)
      }, an.getById = function(e) {
        return Ct[e]
      }, an.getAll = function() {
        return Et.filter((function(e) {
          return "ScrollSmoother" !== e.vars.id
        }))
      }, an.isScrolling = function() {
        return !!Ce
      }, an.snapDirectional = mt, an.addEventListener = function(e, t) {
        var n = Lt[e] || (Lt[e] = []);
        ~n.indexOf(t) || n.push(t)
      }, an.removeEventListener = function(e, t) {
        var n = Lt[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
      }, an.batch = function(e, t) {
        var n, r = [],
          i = {},
          o = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var n = [],
              r = [],
              i = $.delayedCall(o, (function() {
                t(n, r), n = [], r = []
              })).pause();
            return function(e) {
              n.length || i.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && i.progress(1)
            }
          };
        for (n in t) i[n] = "on" === n.substr(0, 2) && He(t[n]) && "onRefreshInit" !== n ? s(0, t[n]) : t[n];
        return He(a) && (a = a(), vt(an, "refresh", (function() {
          return a = t.batchMax()
        }))), Q(e).forEach((function(e) {
          var t = {};
          for (n in i) t[n] = i[n];
          t.trigger = e, r.push(an.create(t))
        })), r
      };
      var sn, ln = function(e, t, n, r) {
          return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        },
        un = function e(t, n) {
          !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (j.isTouch ? " pinch-zoom" : "") : "none", t === G && e(Y, n)
        },
        cn = {
          auto: 1,
          scroll: 1
        },
        dn = function(e) {
          var t, n = e.event,
            r = e.target,
            i = e.axis,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = o._gsap || $.core.getCache(o),
            s = Te();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; o && o !== Y && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !cn[(t = ct(o)).overflowY] && !cn[t.overflowX]);) o = o.parentNode;
            a._isScroll = o && o !== r && !Ie(o) && (cn[(t = ct(o)).overflowY] || cn[t.overflowX]), a._isScrollT = s
          }(a._isScroll || "x" === i) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        fn = function(e, t, n, r) {
          return j.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: r = r && dn,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
              return n && vt(W, j.eventTypes[0], hn, !1, !0)
            },
            onDisable: function() {
              return yt(W, j.eventTypes[0], hn, !0)
            }
          })
        },
        pn = /(input|label|select|textarea)/i,
        hn = function(e) {
          var t = pn.test(e.target.tagName);
          (t || sn) && (e._gsapAllow = !0, sn = t)
        };
      an.sort = function(e) {
        return Et.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, an.observe = function(e) {
        return new j(e)
      }, an.normalizeScroll = function(e) {
        if (void 0 === e) return ce;
        if (!0 === e && ce) return ce.enable();
        if (!1 === e) return ce && ce.kill();
        var t = e instanceof j ? e : function(e) {
          Ge(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, n, r, i, o, a, s, l, u = e,
            c = u.normalizeScrollX,
            d = u.momentum,
            f = u.allowNestedScroll,
            p = u.onRelease,
            h = z(e.target) || G,
            m = $.core.globals().ScrollSmoother,
            g = m && m.get(),
            v = he && (e.content && z(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
            y = N(h, D),
            b = N(h, L),
            x = 1,
            _ = (j.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth,
            S = 0,
            k = He(d) ? function() {
              return d(t)
            } : function() {
              return d || 2.8
            },
            T = fn(h, e.type, !0, f),
            E = function() {
              return i = !1
            },
            C = ze,
            P = ze,
            M = function() {
              n = je(h, D), P = K(he ? 1 : 0, n), c && (C = K(0, je(h, L))), r = Bt
            },
            O = function() {
              v._gsap.y = Ne(parseFloat(v._gsap.y) + y.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            A = function() {
              M(), o.isActive() && o.vars.scrollY > n && (y() > n ? o.progress(1) && y(n) : o.resetTo("scrollY", n))
            };
          return v && $.set(v, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return he && "touchmove" === e.type && function() {
              if (i) {
                requestAnimationFrame(E);
                var e = Ne(t.deltaY / 2),
                  n = P(y.v - e);
                if (v && n !== y.v + y.offset) {
                  y.offset = n - y.v;
                  var r = Ne((parseFloat(v && v._gsap.y) || 0) - y.offset);
                  v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", y.cacheID = w.cache, Wt()
                }
                return !0
              }
              y.offset && O(), i = !0
            }() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            i = !1;
            var e = x;
            x = Ne((H.visualViewport && H.visualViewport.scale || 1) / _), o.pause(), e !== x && un(h, x > 1.01 || !c && "x"), a = b(), s = y(), M(), r = Bt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (y.offset && O(), t) {
              w.cache++;
              var r, i, a = k();
              c && (i = (r = b()) + .05 * a * -e.velocityX / .227, a *= ln(b, r, i, je(h, L)), o.vars.scrollX = C(i)), i = (r = y()) + .05 * a * -e.velocityY / .227, a *= ln(y, r, i, je(h, D)), o.vars.scrollY = P(i), o.invalidate().duration(a).play(.01), (he && o.vars.scrollY >= n || r >= n - 1) && $.to({}, {
                onUpdate: A,
                duration: a
              })
            } else l.restart(!0);
            p && p(e)
          }, e.onWheel = function() {
            o._ts && o.pause(), Te() - S > 1e3 && (r = 0, S = Te())
          }, e.onChange = function(e, t, n, i, o) {
            if (Bt !== r && M(), t && c && b(C(i[2] === t ? a + (e.startX - e.x) : b() + t - i[1])), n) {
              y.offset && O();
              var l = o[2] === n,
                u = l ? s + e.startY - e.y : y() + n - o[1],
                d = P(u);
              l && u !== d && (s += d - u), y(d)
            }(n || t) && Wt()
          }, e.onEnable = function() {
            un(h, !c && "x"), an.addEventListener("refresh", A), vt(H, "resize", A), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), T.enable()
          }, e.onDisable = function() {
            un(h, !0), yt(H, "resize", A), an.removeEventListener("refresh", A), T.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new j(e)).iOS = he, he && !y() && y(1), he && $.ticker.add(ze), l = t._dc, o = $.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: nn(y, y(), (function() {
                return o.pause()
              }))
            },
            onUpdate: Wt,
            onComplete: l.vars.onComplete
          }), t
        }(e);
        return ce && ce.target === t.target && ce.kill(), Ie(t.target) && (ce = t), t
      }, an.core = {
        _getVelocityProp: R,
        _inputObserver: fn,
        _scrollers: w,
        _proxies: x,
        bridge: {
          ss: function() {
            Ce || Nt("scrollStart"), Ce = Te()
          },
          ref: function() {
            return ee
          }
        }
      }, Ve() && $.registerPlugin(an)
    },
    6527: (e, t, n) => {
      "use strict";

      function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function i(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      n.d(t, {
        p8: () => Gr
      });
      var o, a, s, l, u, c, d, f, p, h, m, g, v, y, b, w = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        x = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        _ = 1e8,
        S = 1e-8,
        k = 2 * Math.PI,
        T = k / 4,
        E = 0,
        C = Math.sqrt,
        P = Math.cos,
        M = Math.sin,
        O = function(e) {
          return "string" == typeof e
        },
        A = function(e) {
          return "function" == typeof e
        },
        L = function(e) {
          return "number" == typeof e
        },
        D = function(e) {
          return void 0 === e
        },
        z = function(e) {
          return "object" == typeof e
        },
        N = function(e) {
          return !1 !== e
        },
        R = function() {
          return "undefined" != typeof window
        },
        V = function(e) {
          return A(e) || O(e)
        },
        I = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        F = Array.isArray,
        B = /(?:-?\.?\d|\.)+/gi,
        j = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        $ = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        U = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        H = /[+-]=-?[.\d]+/,
        W = /[^,'"\[\]\s]+/gi,
        G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Y = {},
        X = {},
        q = function(e) {
          return (X = ke(e, Y)) && Tn
        },
        Q = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        K = function(e, t) {
          return !t && console.warn(e)
        },
        Z = function(e, t) {
          return e && (Y[e] = t) && X && (X[e] = t) || Y
        },
        J = function() {
          return 0
        },
        ee = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        te = {
          suppressEvents: !0,
          kill: !1
        },
        ne = {
          suppressEvents: !0
        },
        re = {},
        ie = [],
        oe = {},
        ae = {},
        se = {},
        le = 30,
        ue = [],
        ce = "",
        de = function(e) {
          var t, n, r = e[0];
          if (z(r) || A(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (n = ue.length; n-- && !ue[n].targetTest(r););
            t = ue[n]
          }
          for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new It(e[n], t))) || e.splice(n, 1);
          return e
        },
        fe = function(e) {
          return e._gsap || de(tt(e))[0]._gsap
        },
        pe = function(e, t, n) {
          return (n = e[t]) && A(n) ? e[t]() : D(n) && e.getAttribute && e.getAttribute(t) || n
        },
        he = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        me = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        ge = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        ve = function(e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
        },
        ye = function(e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
          return r < n
        },
        be = function() {
          var e, t, n = ie.length,
            r = ie.slice(0);
          for (oe = {}, ie.length = 0, e = 0; e < n; e++)(t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        we = function(e, t, n, r) {
          ie.length && !a && be(), e.render(t, n, r || a && t < 0 && (e._initted || e._startAt)), ie.length && !a && be()
        },
        xe = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(W).length < 2 ? t : O(e) ? e.trim() : e
        },
        _e = function(e) {
          return e
        },
        Se = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        ke = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        Te = function e(t, n) {
          for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = z(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t
        },
        Ee = function(e, t) {
          var n, r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r
        },
        Ce = function(e) {
          var t, n = e.parent || l,
            r = e.keyframes ? (t = F(e.keyframes), function(e, n) {
              for (var r in n) r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
            }) : Se;
          if (N(e.inherit))
            for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
          return e
        },
        Pe = function(e, t, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o, a = e[r];
          if (i)
            for (o = t[i]; a && a[i] > o;) a = a._prev;
          return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t
        },
        Me = function(e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = t._prev,
            o = t._next;
          i ? i._next = o : e[n] === t && (e[n] = o), o ? o._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null
        },
        Oe = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Ae = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
          return e
        },
        Le = function(e, t, n, r) {
          return e._startAt && (a ? e._startAt.revert(te) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
        },
        De = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        ze = function(e) {
          return e._repeat ? Ne(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        Ne = function(e, t) {
          var n = Math.floor(e /= t);
          return e && n === e ? n - 1 : n
        },
        Re = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        Ve = function(e) {
          return e._end = ge(e._start + (e._tDur / Math.abs(e._ts || e._rts || S) || 0))
        },
        Ie = function(e, t) {
          var n = e._dp;
          return n && n.smoothChildTiming && e._ts && (e._start = ge(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ve(e), n._dirty || Ae(n, e)), e
        },
        Fe = function(e, t) {
          var n;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Re(e.rawTime(), t), (!t._dur || Ke(0, t.totalDuration(), n) - t._tTime > S) && t.render(n, !0)), Ae(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -1e-8
          }
        },
        Be = function(e, t, n, r) {
          return t.parent && Oe(t), t._start = ge((L(n) ? n : n || e !== l ? Xe(e, n, t) : e._time) + t._delay), t._end = ge(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Pe(e, t, "_first", "_last", e._sort ? "_start" : 0), He(t) || (e._recent = t), r || Fe(e, t), e._ts < 0 && Ie(e, e._tTime), e
        },
        je = function(e, t) {
          return (Y.ScrollTrigger || Q("scrollTrigger", t)) && Y.ScrollTrigger.create(t, e)
        },
        $e = function(e, t, n, r, i) {
          return Gt(e, t, i), e._initted ? !n && e._pt && !a && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && p !== Tt.frame ? (ie.push(e), e._lazy = [i, r], 1) : void 0 : 1
        },
        Ue = function e(t) {
          var n = t.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        },
        He = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        We = function(e, t, n, r) {
          var i = e._repeat,
            o = ge(t) || 0,
            a = e._tTime / e._tDur;
          return a && !r && (e._time *= o / e._dur), e._dur = o, e._tDur = i ? i < 0 ? 1e10 : ge(o * (i + 1) + e._rDelay * i) : o, a > 0 && !r && Ie(e, e._tTime = e._tDur * a), e.parent && Ve(e), n || Ae(e.parent, e), e
        },
        Ge = function(e) {
          return e instanceof Bt ? Ae(e) : We(e, e._dur)
        },
        Ye = {
          _start: 0,
          endTime: J,
          totalDuration: J
        },
        Xe = function e(t, n, r) {
          var i, o, a, s = t.labels,
            l = t._recent || Ye,
            u = t.duration() >= _ ? l.endTime(!1) : t._dur;
          return O(n) && (isNaN(n) || n in s) ? (o = n.charAt(0), a = "%" === n.substr(-1), i = n.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (i < 0 ? l : r).totalDuration() / 100 : 1)) : i < 0 ? (n in s || (s[n] = u), s[n]) : (o = parseFloat(n.charAt(i - 1) + n.substr(i + 1)), a && r && (o = o / 100 * (F(r) ? r[0] : r).totalDuration()), i > 1 ? e(t, n.substr(0, i - 1), r) + o : u + o)) : null == n ? u : +n
        },
        qe = function(e, t, n) {
          var r, i, o = L(t[1]),
            a = (o ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[a];
          if (o && (s.duration = t[1]), s.parent = n, e) {
            for (r = s, i = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = N(i.vars.inherit) && i.parent;
            s.immediateRender = N(r.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[a - 1]
          }
          return new Kt(t[0], s, t[a + 1])
        },
        Qe = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        Ke = function(e, t, n) {
          return n < e ? e : n > t ? t : n
        },
        Ze = function(e, t) {
          return O(e) && (t = G.exec(e)) ? t[1] : ""
        },
        Je = [].slice,
        et = function(e, t) {
          return e && z(e) && "length" in e && (!t && !e.length || e.length - 1 in e && z(e[0])) && !e.nodeType && e !== u
        },
        tt = function(e, t, n) {
          return s && !t && s.selector ? s.selector(e) : !O(e) || n || !c && Et() ? F(e) ? function(e, t, n) {
            return void 0 === n && (n = []), e.forEach((function(e) {
              var r;
              return O(e) && !t || et(e, 1) ? (r = n).push.apply(r, tt(e)) : n.push(e)
            })) || n
          }(e, n) : et(e) ? Je.call(e, 0) : e ? [e] : [] : Je.call((t || d).querySelectorAll(e), 0)
        },
        nt = function(e) {
          return e = tt(e)[0] || K("Invalid scope") || {},
            function(t) {
              var n = e.current || e.nativeElement || e;
              return tt(t, n.querySelectorAll ? n : n === e ? K("Invalid scope") || d.createElement("div") : e)
            }
        },
        rt = function(e) {
          return e.sort((function() {
            return .5 - Math.random()
          }))
        },
        it = function(e) {
          if (A(e)) return e;
          var t = z(e) ? e : {
              each: e
            },
            n = Dt(t.ease),
            r = t.from || 0,
            i = parseFloat(t.base) || 0,
            o = {},
            a = r > 0 && r < 1,
            s = isNaN(r) || a,
            l = t.axis,
            u = r,
            c = r;
          return O(r) ? u = c = {
              center: .5,
              edges: .5,
              end: 1
            } [r] || 0 : !a && s && (u = r[0], c = r[1]),
            function(e, a, d) {
              var f, p, h, m, g, v, y, b, w, x = (d || t).length,
                S = o[x];
              if (!S) {
                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, _])[1])) {
                  for (y = -_; y < (y = d[w++].getBoundingClientRect().left) && w < x;);
                  w--
                }
                for (S = o[x] = [], f = s ? Math.min(w, x) * u - .5 : r % w, p = w === _ ? 0 : s ? x * c / w - .5 : r / w | 0, y = 0, b = _, v = 0; v < x; v++) h = v % w - f, m = p - (v / w | 0), S[v] = g = l ? Math.abs("y" === l ? m : h) : C(h * h + m * m), g > y && (y = g), g < b && (b = g);
                "random" === r && rt(S), S.max = y - b, S.min = b, S.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (w > x ? x - 1 : l ? "y" === l ? x / w : w : Math.max(w, x / w)) || 0) * ("edges" === r ? -1 : 1), S.b = x < 0 ? i - x : i, S.u = Ze(t.amount || t.each) || 0, n = n && x < 0 ? At(n) : n
              }
              return x = (S[e] - S.min) / S.max || 0, ge(S.b + (n ? n(x) : x) * S.v) + S.u
            }
        },
        ot = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(n) {
            var r = ge(Math.round(parseFloat(n) / e) * e * t);
            return (r - r % 1) / t + (L(n) ? 0 : Ze(n))
          }
        },
        at = function(e, t) {
          var n, r, i = F(e);
          return !i && z(e) && (n = i = e.radius || _, e.values ? (e = tt(e.values), (r = !L(e[0])) && (n *= n)) : e = ot(e.increment)), Qe(t, i ? A(e) ? function(t) {
            return r = e(t), Math.abs(r - t) <= n ? r : t
          } : function(t) {
            for (var i, o, a = parseFloat(r ? t.x : t), s = parseFloat(r ? t.y : 0), l = _, u = 0, c = e.length; c--;)(i = r ? (i = e[c].x - a) * i + (o = e[c].y - s) * o : Math.abs(e[c] - a)) < l && (l = i, u = c);
            return u = !n || l <= n ? e[u] : t, r || u === t || L(t) ? u : u + Ze(t)
          } : ot(e))
        },
        st = function(e, t, n, r) {
          return Qe(F(e) ? !t : !0 === n ? !!(n = 0) : !r, (function() {
            return F(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
          }))
        },
        lt = function(e, t, n) {
          return Qe(n, (function(n) {
            return e[~~t(n)]
          }))
        },
        ut = function(e) {
          for (var t, n, r, i, o = 0, a = ""; ~(t = e.indexOf("random(", o));) r = e.indexOf(")", t), i = "[" === e.charAt(t + 7), n = e.substr(t + 7, r - t - 7).match(i ? W : B), a += e.substr(o, t - o) + st(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), o = r + 1;
          return a + e.substr(o, e.length - o)
        },
        ct = function(e, t, n, r, i) {
          var o = t - e,
            a = r - n;
          return Qe(i, (function(t) {
            return n + ((t - e) / o * a || 0)
          }))
        },
        dt = function(e, t, n) {
          var r, i, o, a = e.labels,
            s = _;
          for (r in a)(i = a[r] - t) < 0 == !!n && i && s > (i = Math.abs(i)) && (o = r, s = i);
          return o
        },
        ft = function(e, t, n) {
          var r, i, o, a = e.vars,
            l = a[t],
            u = s,
            c = e._ctx;
          if (l) return r = a[t + "Params"], i = a.callbackScope || e, n && ie.length && be(), c && (s = c), o = r ? l.apply(i, r) : l.call(i), s = u, o
        },
        pt = function(e) {
          return Oe(e), e.scrollTrigger && e.scrollTrigger.kill(!!a), e.progress() < 1 && ft(e, "onInterrupt"), e
        },
        ht = [],
        mt = function(e) {
          if (R() && e) {
            var t = (e = !e.name && e.default || e).name,
              n = A(e),
              r = t && !n && e.init ? function() {
                this._props = []
              } : e,
              i = {
                init: J,
                render: sn,
                add: Ht,
                kill: un,
                modifier: ln,
                rawVars: 0
              },
              o = {
                targetTest: 0,
                get: 0,
                getSetter: nn,
                aliases: {},
                register: 0
              };
            if (Et(), e !== r) {
              if (ae[t]) return;
              Se(r, Se(Ee(e, i), o)), ke(r.prototype, ke(i, Ee(e, o))), ae[r.prop = t] = r, e.targetTest && (ue.push(r), re[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            Z(t, r), e.register && e.register(Tn, r, fn)
          } else e && ht.push(e)
        },
        gt = 255,
        vt = {
          aqua: [0, gt, gt],
          lime: [0, gt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, gt],
          navy: [0, 0, 128],
          white: [gt, gt, gt],
          olive: [128, 128, 0],
          yellow: [gt, gt, 0],
          orange: [gt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [gt, 0, 0],
          pink: [gt, 192, 203],
          cyan: [0, gt, gt],
          transparent: [gt, gt, gt, 0]
        },
        yt = function(e, t, n) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * gt + .5 | 0
        },
        bt = function(e, t, n) {
          var r, i, o, a, s, l, u, c, d, f, p = e ? L(e) ? [e >> 16, e >> 8 & gt, e & gt] : 0 : vt.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), vt[e]) p = vt[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (r = e.charAt(1), i = e.charAt(2), o = e.charAt(3), e = "#" + r + r + i + i + o + o + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & gt, p & gt, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & gt, e & gt]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(B), t) {
                if (~e.indexOf("=")) return p = e.match(j), n && p.length < 4 && (p[3] = 1), p
              } else a = +p[0] % 360 / 360, s = +p[1] / 100, r = 2 * (l = +p[2] / 100) - (i = l <= .5 ? l * (s + 1) : l + s - l * s), p.length > 3 && (p[3] *= 1), p[0] = yt(a + 1 / 3, r, i), p[1] = yt(a, r, i), p[2] = yt(a - 1 / 3, r, i);
            else p = e.match(B) || vt.transparent;
            p = p.map(Number)
          }
          return t && !f && (r = p[0] / gt, i = p[1] / gt, o = p[2] / gt, l = ((u = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2, u === c ? a = s = 0 : (d = u - c, s = l > .5 ? d / (2 - u - c) : d / (u + c), a = u === r ? (i - o) / d + (i < o ? 6 : 0) : u === i ? (o - r) / d + 2 : (r - i) / d + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * s + .5), p[2] = ~~(100 * l + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        wt = function(e) {
          var t = [],
            n = [],
            r = -1;
          return e.split(_t).forEach((function(e) {
            var i = e.match($) || [];
            t.push.apply(t, i), n.push(r += i.length + 1)
          })), t.c = n, t
        },
        xt = function(e, t, n) {
          var r, i, o, a, s = "",
            l = (e + s).match(_t),
            u = t ? "hsla(" : "rgba(",
            c = 0;
          if (!l) return e;
          if (l = l.map((function(e) {
              return (e = bt(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            })), n && (o = wt(e), (r = n.c).join(s) !== o.c.join(s)))
            for (a = (i = e.replace(_t, "1").split($)).length - 1; c < a; c++) s += i[c] + (~r.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
          if (!i)
            for (a = (i = e.split(_t)).length - 1; c < a; c++) s += i[c] + l[c];
          return s + i[a]
        },
        _t = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in vt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        St = /hsl[a]?\(/,
        kt = function(e) {
          var t, n = e.join(" ");
          if (_t.lastIndex = 0, _t.test(n)) return t = St.test(n), e[1] = xt(e[1], t), e[0] = xt(e[0], t, wt(e[1])), !0
        },
        Tt = function() {
          var e, t, n, r, i, o, a = Date.now,
            s = 500,
            l = 33,
            p = a(),
            h = p,
            g = 1e3 / 240,
            v = g,
            y = [],
            b = function n(u) {
              var c, d, f, m, b = a() - h,
                w = !0 === u;
              if (b > s && (p += b - l), ((c = (f = (h += b) - p) - v) > 0 || w) && (m = ++r.frame, i = f - 1e3 * r.time, r.time = f /= 1e3, v += c + (c >= g ? 4 : g - c), d = 1), w || (e = t(n)), d)
                for (o = 0; o < y.length; o++) y[o](f, i, m, u)
            };
          return r = {
            time: 0,
            frame: 0,
            tick: function() {
              b(!0)
            },
            deltaRatio: function(e) {
              return i / (1e3 / (e || 60))
            },
            wake: function() {
              f && (!c && R() && (u = c = window, d = u.document || {}, Y.gsap = Tn, (u.gsapVersions || (u.gsapVersions = [])).push(Tn.version), q(X || u.GreenSockGlobals || !u.gsap && u || {}), n = u.requestAnimationFrame, ht.forEach(mt)), e && r.sleep(), t = n || function(e) {
                return setTimeout(e, v - 1e3 * r.time + 1 | 0)
              }, m = 1, b(2))
            },
            sleep: function() {
              (n ? u.cancelAnimationFrame : clearTimeout)(e), m = 0, t = J
            },
            lagSmoothing: function(e, t) {
              s = e || 1 / 0, l = Math.min(t || 33, s)
            },
            fps: function(e) {
              g = 1e3 / (e || 240), v = 1e3 * r.time + g
            },
            add: function(e, t, n) {
              var i = t ? function(t, n, o, a) {
                e(t, n, o, a), r.remove(i)
              } : e;
              return r.remove(e), y[n ? "unshift" : "push"](i), Et(), i
            },
            remove: function(e, t) {
              ~(t = y.indexOf(e)) && y.splice(t, 1) && o >= t && o--
            },
            _listeners: y
          }
        }(),
        Et = function() {
          return !m && Tt.wake()
        },
        Ct = {},
        Pt = /^[\d.\-M][\d.\-,\s]/,
        Mt = /["']/g,
        Ot = function(e) {
          for (var t, n, r, i = {}, o = e.substr(1, e.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++) n = o[s], t = s !== l - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, t), i[a] = isNaN(r) ? r.replace(Mt, "").trim() : +r, a = n.substr(t + 1).trim();
          return i
        },
        At = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        Lt = function e(t, n) {
          for (var r, i = t._first; i;) i instanceof Bt ? e(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? e(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
        },
        Dt = function(e, t) {
          return e && (A(e) ? e : Ct[e] || function(e) {
            var t, n, r, i, o = (e + "").split("("),
              a = Ct[o[0]];
            return a && o.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Ot(o[1])] : (t = e, n = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", n), t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)).split(",").map(xe)) : Ct._CE && Pt.test(e) ? Ct._CE("", e) : a
          }(e)) || t
        },
        zt = function(e, t, n, r) {
          void 0 === n && (n = function(e) {
            return 1 - t(1 - e)
          }), void 0 === r && (r = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
          });
          var i, o = {
            easeIn: t,
            easeOut: n,
            easeInOut: r
          };
          return he(e, (function(e) {
            for (var t in Ct[e] = Y[e] = o, Ct[i = e.toLowerCase()] = n, o) Ct[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Ct[e + "." + t] = o[t]
          })), o
        },
        Nt = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        Rt = function e(t, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
            a = o / k * (Math.asin(1 / i) || 0),
            s = function(e) {
              return 1 === e ? 1 : i * Math.pow(2, -10 * e) * M((e - a) * o) + 1
            },
            l = "out" === t ? s : "in" === t ? function(e) {
              return 1 - s(1 - e)
            } : Nt(s);
          return o = k / o, l.config = function(n, r) {
            return e(t, n, r)
          }, l
        },
        Vt = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function(e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0
            },
            i = "out" === t ? r : "in" === t ? function(e) {
              return 1 - r(1 - e)
            } : Nt(r);
          return i.config = function(n) {
            return e(t, n)
          }, i
        };
      he("Linear,Quad,Cubic,Quart,Quint,Strong", (function(e, t) {
        var n = t < 5 ? t + 1 : t;
        zt(e + ",Power" + (n - 1), t ? function(e) {
          return Math.pow(e, n)
        } : function(e) {
          return e
        }, (function(e) {
          return 1 - Math.pow(1 - e, n)
        }), (function(e) {
          return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        }))
      })), Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn, zt("Elastic", Rt("in"), Rt("out"), Rt()), g = 7.5625, y = 1 / (v = 2.75), zt("Bounce", (function(e) {
        return 1 - b(1 - e)
      }), b = function(e) {
        return e < y ? g * e * e : e < .7272727272727273 ? g * Math.pow(e - 1.5 / v, 2) + .75 : e < .9090909090909092 ? g * (e -= 2.25 / v) * e + .9375 : g * Math.pow(e - 2.625 / v, 2) + .984375
      }), zt("Expo", (function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
      })), zt("Circ", (function(e) {
        return -(C(1 - e * e) - 1)
      })), zt("Sine", (function(e) {
        return 1 === e ? 1 : 1 - P(e * T)
      })), zt("Back", Vt("in"), Vt("out"), Vt()), Ct.SteppedEase = Ct.steps = Y.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var n = 1 / e,
            r = e + (t ? 0 : 1),
            i = t ? 1 : 0;
          return function(e) {
            return ((r * Ke(0, .99999999, e) | 0) + i) * n
          }
        }
      }, x.ease = Ct["quad.out"], he("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(e) {
        return ce += e + "," + e + "Params,"
      }));
      var It = function(e, t) {
          this.id = E++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : pe, this.set = t ? t.getSetter : nn
        },
        Ft = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, We(this, +e.duration, 1, 1), this.data = e.data, s && (this._ctx = s, s.data.push(this)), m || Tt.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, We(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (Et(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Ie(this, e), !n._dp || n.parent || Fe(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Be(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === S || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), we(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + ze(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + ze(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
          }, t.iteration = function(e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Ne(this._tTime, n) + 1 : 1
          }, t.timeScale = function(e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var t = this.parent && this._ts ? Re(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Ke(-Math.abs(this._delay), this._tDur, t), !0), Ve(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Et(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== S && (this._tTime -= S)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && Be(t, this, e - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (N(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Re(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = ne);
            var t = a;
            return a = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), a = t, this
          }, t.globalTime = function(e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (t._ts || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : n
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ge(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, Ge(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(Xe(this, e), N(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, N(t))
          }, t.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
          }, t.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
          }, t.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
          }, t.resume = function() {
            return this.paused(!1)
          }, t.reversed = function(e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
          }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, t.isActive = function() {
            var e, t = this.parent || this._dp,
              n = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - S))
          }, t.eventCallback = function(e, t, n) {
            var r = this.vars;
            return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
          }, t.then = function(e) {
            var t = this;
            return new Promise((function(n) {
              var r = A(e) ? e : _e,
                i = function() {
                  var e = t.then;
                  t.then = null, A(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), n(r), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
            }))
          }, t.kill = function() {
            pt(this)
          }, e
        }();
      Se(Ft.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      var Bt = function(e) {
        function t(t, n) {
          var i;
          return void 0 === t && (t = {}), (i = e.call(this, t) || this).labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = N(t.sortChildren), l && Be(t.parent || l, r(i), n), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && je(r(i), t.scrollTrigger), i
        }
        i(t, e);
        var n = t.prototype;
        return n.to = function(e, t, n) {
          return qe(0, arguments, this), this
        }, n.from = function(e, t, n) {
          return qe(1, arguments, this), this
        }, n.fromTo = function(e, t, n, r) {
          return qe(2, arguments, this), this
        }, n.set = function(e, t, n) {
          return t.duration = 0, t.parent = this, Ce(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Kt(e, t, Xe(this, n), 1), this
        }, n.call = function(e, t, n) {
          return Be(this, Kt.delayedCall(0, e, t), n)
        }, n.staggerTo = function(e, t, n, r, i, o, a) {
          return n.duration = t, n.stagger = n.stagger || r, n.onComplete = o, n.onCompleteParams = a, n.parent = this, new Kt(e, n, Xe(this, i)), this
        }, n.staggerFrom = function(e, t, n, r, i, o, a) {
          return n.runBackwards = 1, Ce(n).immediateRender = N(n.immediateRender), this.staggerTo(e, t, n, r, i, o, a)
        }, n.staggerFromTo = function(e, t, n, r, i, o, a, s) {
          return r.startAt = n, Ce(r).immediateRender = N(r.immediateRender), this.staggerTo(e, t, r, i, o, a, s)
        }, n.render = function(e, t, n) {
          var r, i, o, s, u, c, d, f, p, h, m, g, v = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            b = this._dur,
            w = e <= 0 ? 0 : ge(e),
            x = this._zTime < 0 != e < 0 && (this._initted || !b);
          if (this !== l && w > y && e >= 0 && (w = y), w !== this._tTime || n || x) {
            if (v !== this._time && b && (w += this._time - v, e += this._time - v), r = w, p = this._start, c = !(f = this._ts), x && (b || (v = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (m = this._yoyo, u = b + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * u + e, t, n);
              if (r = ge(w % u), w === y ? (s = this._repeat, r = b) : ((s = ~~(w / u)) && s === w / u && (r = b, s--), r > b && (r = b)), h = Ne(this._tTime, u), !v && this._tTime && h !== s && this._tTime - h * u - this._dur <= 0 && (h = s), m && 1 & s && (r = b - r, g = 1), s !== h && !this._lock) {
                var _ = m && 1 & h,
                  k = _ === (m && 1 & s);
                if (s < h && (_ = !_), v = _ ? 0 : w % b ? b : w, this._lock = 1, this.render(v || (g ? 0 : ge(s * u)), t, !b)._lock = 0, this._tTime = w, !t && this.parent && ft(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (b = this._dur, y = this._tDur, k && (this._lock = 2, v = _ ? b : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                Lt(this, g)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (d = function(e, t, n) {
                var r;
                if (n > t)
                  for (r = e._first; r && r._start <= n;) {
                    if ("isPause" === r.data && r._start > t) return r;
                    r = r._next
                  } else
                    for (r = e._last; r && r._start >= n;) {
                      if ("isPause" === r.data && r._start < t) return r;
                      r = r._prev
                    }
              }(this, ge(v), ge(r)), d && (w -= r - (r = d._start))), this._tTime = w, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && r && !t && !s && (ft(this, "onStart"), this._tTime !== w)) return this;
            if (r >= v && e >= 0)
              for (i = this._first; i;) {
                if (o = i._next, (i._act || r >= i._start) && i._ts && d !== i) {
                  if (i.parent !== this) return this.render(e, t, n);
                  if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, t, n), r !== this._time || !this._ts && !c) {
                    d = 0, o && (w += this._zTime = -1e-8);
                    break
                  }
                }
                i = o
              } else {
                i = this._last;
                for (var T = e < 0 ? e : r; i;) {
                  if (o = i._prev, (i._act || T <= i._end) && i._ts && d !== i) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, t, n || a && (i._initted || i._startAt)), r !== this._time || !this._ts && !c) {
                      d = 0, o && (w += this._zTime = T ? -1e-8 : S);
                      break
                    }
                  }
                  i = o
                }
              }
            if (d && !t && (this.pause(), d.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1, this._ts)) return this._start = p, Ve(this), this.render(e, t, n);
            this._onUpdate && !t && ft(this, "onUpdate", !0), (w === y && this._tTime >= this.totalDuration() || !w && v) && (p !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((e || !b) && (w === y && this._ts > 0 || !w && this._ts < 0) && Oe(this, 1), t || e < 0 && !v || !w && !v && y || (ft(this, w === y && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < y && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, n.add = function(e, t) {
          var n = this;
          if (L(t) || (t = Xe(this, t, e)), !(e instanceof Ft)) {
            if (F(e)) return e.forEach((function(e) {
              return n.add(e, t)
            })), this;
            if (O(e)) return this.addLabel(e, t);
            if (!A(e)) return this;
            e = Kt.delayedCall(0, e)
          }
          return this !== e ? Be(this, e, t) : this
        }, n.getChildren = function(e, t, n, r) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -_);
          for (var i = [], o = this._first; o;) o._start >= r && (o instanceof Kt ? t && i.push(o) : (n && i.push(o), e && i.push.apply(i, o.getChildren(!0, t, n)))), o = o._next;
          return i
        }, n.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
            if (t[n].vars.id === e) return t[n]
        }, n.remove = function(e) {
          return O(e) ? this.removeLabel(e) : A(e) ? this.killTweensOf(e) : (Me(this, e), e === this._recent && (this._recent = this._last), Ae(this))
        }, n.totalTime = function(t, n) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ge(Tt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(e, t) {
          return this.labels[e] = Xe(this, t), this
        }, n.removeLabel = function(e) {
          return delete this.labels[e], this
        }, n.addPause = function(e, t, n) {
          var r = Kt.delayedCall(0, t || J, n);
          return r.data = "isPause", this._hasPause = 1, Be(this, r, Xe(this, e))
        }, n.removePause = function(e) {
          var t = this._first;
          for (e = Xe(this, e); t;) t._start === e && "isPause" === t.data && Oe(t), t = t._next
        }, n.killTweensOf = function(e, t, n) {
          for (var r = this.getTweensOf(e, n), i = r.length; i--;) jt !== r[i] && r[i].kill(e, t);
          return this
        }, n.getTweensOf = function(e, t) {
          for (var n, r = [], i = tt(e), o = this._first, a = L(t); o;) o instanceof Kt ? ye(o._targets, i) && (a ? (!jt || o._initted && o._ts) && o.globalTime(0) <= t && o.globalTime(o.totalDuration()) > t : !t || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, t)).length && r.push.apply(r, n), o = o._next;
          return r
        }, n.tweenTo = function(e, t) {
          t = t || {};
          var n, r = this,
            i = Xe(r, e),
            o = t,
            a = o.startAt,
            s = o.onStart,
            l = o.onStartParams,
            u = o.immediateRender,
            c = Kt.to(r, Se({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: i,
              overwrite: "auto",
              duration: t.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || S,
              onStart: function() {
                if (r.pause(), !n) {
                  var e = t.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                  c._dur !== e && We(c, e, 0, 1).render(c._time, !0, !0), n = 1
                }
                s && s.apply(c, l || [])
              }
            }, t));
          return u ? c.render(0) : c
        }, n.tweenFromTo = function(e, t, n) {
          return this.tweenTo(t, Se({
            startAt: {
              time: Xe(this, e)
            }
          }, n))
        }, n.recent = function() {
          return this._recent
        }, n.nextLabel = function(e) {
          return void 0 === e && (e = this._time), dt(this, Xe(this, e))
        }, n.previousLabel = function(e) {
          return void 0 === e && (e = this._time), dt(this, Xe(this, e), 1)
        }, n.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + S)
        }, n.shiftChildren = function(e, t, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, o = this.labels; i;) i._start >= n && (i._start += e, i._end += e), i = i._next;
          if (t)
            for (r in o) o[r] >= n && (o[r] += e);
          return Ae(this)
        }, n.invalidate = function(t) {
          var n = this._first;
          for (this._lock = 0; n;) n.invalidate(t), n = n._next;
          return e.prototype.invalidate.call(this, t)
        }, n.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Ae(this)
        }, n.totalDuration = function(e) {
          var t, n, r, i = 0,
            o = this,
            a = o._last,
            s = _;
          if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -e : e));
          if (o._dirty) {
            for (r = o.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (n = a._start) > s && o._sort && a._ts && !o._lock ? (o._lock = 1, Be(o, a, n - a._delay, 1)._lock = 0) : s = n, n < 0 && a._ts && (i -= n, (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -Infinity), s = 0), a._end > i && a._ts && (i = a._end), a = t;
            We(o, o === l && o._time > i ? o._time : i, 1, 1), o._dirty = 0
          }
          return o._tDur
        }, t.updateRoot = function(e) {
          if (l._ts && (we(l, Re(e, l)), p = Tt.frame), Tt.frame >= le) {
            le += w.autoSleep || 120;
            var t = l._first;
            if ((!t || !t._ts) && w.autoSleep && Tt._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || Tt.sleep()
            }
          }
        }, t
      }(Ft);
      Se(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var jt, $t, Ut = function(e, t, n, r, i, o, a) {
          var s, l, u, c, d, f, p, h, m = new fn(this._pt, e, t, 0, 1, an, null, i),
            g = 0,
            v = 0;
          for (m.b = n, m.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = ut(r)), o && (o(h = [n, r], e, t), n = h[0], r = h[1]), l = n.match(U) || []; s = U.exec(r);) c = s[0], d = r.substring(g, s.index), u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1), c !== l[v++] && (f = parseFloat(l[v - 1]) || 0, m._pt = {
            _next: m._pt,
            p: d || 1 === v ? d : ",",
            s: f,
            c: "=" === c.charAt(1) ? ve(f, c) - f : parseFloat(c) - f,
            m: u && u < 4 ? Math.round : 0
          }, g = U.lastIndex);
          return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = a, (H.test(r) || p) && (m.e = 0), this._pt = m, m
        },
        Ht = function(e, t, n, r, i, o, a, s, l, u) {
          A(r) && (r = r(i || 0, e, o));
          var c, d = e[t],
            f = "get" !== n ? n : A(d) ? l ? e[t.indexOf("set") || !A(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
            p = A(d) ? l ? en : Jt : Zt;
          if (O(r) && (~r.indexOf("random(") && (r = ut(r)), "=" === r.charAt(1) && ((c = ve(f, r) + (Ze(f) || 0)) || 0 === c) && (r = c)), !u || f !== r || $t) return isNaN(f * r) || "" === r ? (!d && !(t in e) && Q(t, r), Ut.call(this, e, t, f, r, p, s || w.stringFilter, l)) : (c = new fn(this._pt, e, t, +f || 0, r - (f || 0), "boolean" == typeof d ? on : rn, 0, p), l && (c.fp = l), a && c.modifier(a, this, e), this._pt = c)
        },
        Wt = function(e, t, n, r, i, o) {
          var a, s, l, u;
          if (ae[e] && !1 !== (a = new ae[e]).init(i, a.rawVars ? t[e] : function(e, t, n, r, i) {
              if (A(e) && (e = Xt(e, i, t, n, r)), !z(e) || e.style && e.nodeType || F(e) || I(e)) return O(e) ? Xt(e, i, t, n, r) : e;
              var o, a = {};
              for (o in e) a[o] = Xt(e[o], i, t, n, r);
              return a
            }(t[e], r, i, o, n), n, r, o) && (n._pt = s = new fn(n._pt, i, e, 0, 1, a.render, a, 0, a.priority), n !== h))
            for (l = n._ptLookup[n._targets.indexOf(i)], u = a._props.length; u--;) l[a._props[u]] = s;
          return a
        },
        Gt = function e(t, n, r) {
          var i, s, u, c, d, f, p, h, m, g, v, y, b, w = t.vars,
            k = w.ease,
            T = w.startAt,
            E = w.immediateRender,
            C = w.lazy,
            P = w.onUpdate,
            M = w.onUpdateParams,
            O = w.callbackScope,
            A = w.runBackwards,
            L = w.yoyoEase,
            D = w.keyframes,
            z = w.autoRevert,
            R = t._dur,
            V = t._startAt,
            I = t._targets,
            F = t.parent,
            B = F && "nested" === F.data ? F.vars.targets : I,
            j = "auto" === t._overwrite && !o,
            $ = t.timeline;
          if ($ && (!D || !k) && (k = "none"), t._ease = Dt(k, x.ease), t._yEase = L ? At(Dt(!0 === L ? k : L, x.ease)) : 0, L && t._yoyo && !t._repeat && (L = t._yEase, t._yEase = t._ease, t._ease = L), t._from = !$ && !!w.runBackwards, !$ || D && !w.stagger) {
            if (y = (h = I[0] ? fe(I[0]).harness : 0) && w[h.prop], i = Ee(w, re), V && (V._zTime < 0 && V.progress(1), n < 0 && A && E && !z ? V.render(-1, !0) : V.revert(A && R ? te : ee), V._lazy = 0), T) {
              if (Oe(t._startAt = Kt.set(I, Se({
                  data: "isStart",
                  overwrite: !1,
                  parent: F,
                  immediateRender: !0,
                  lazy: !V && N(C),
                  startAt: null,
                  delay: 0,
                  onUpdate: P,
                  onUpdateParams: M,
                  callbackScope: O,
                  stagger: 0
                }, T))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (a || !E && !z) && t._startAt.revert(te), E && R && n <= 0 && r <= 0) return void(n && (t._zTime = n))
            } else if (A && R && !V)
              if (n && (E = !1), u = Se({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: E && !V && N(C),
                  immediateRender: E,
                  stagger: 0,
                  parent: F
                }, i), y && (u[h.prop] = y), Oe(t._startAt = Kt.set(I, u)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (a ? t._startAt.revert(te) : t._startAt.render(-1, !0)), t._zTime = n, E) {
                if (!n) return
              } else e(t._startAt, S, S);
            for (t._pt = t._ptCache = 0, C = R && N(C) || C && !R, s = 0; s < I.length; s++) {
              if (p = (d = I[s])._gsap || de(I)[s]._gsap, t._ptLookup[s] = g = {}, oe[p.id] && ie.length && be(), v = B === I ? s : B.indexOf(d), h && !1 !== (m = new h).init(d, y || i, t, v, B) && (t._pt = c = new fn(t._pt, d, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function(e) {
                  g[e] = c
                })), m.priority && (f = 1)), !h || y)
                for (u in i) ae[u] && (m = Wt(u, i, t, v, d, B)) ? m.priority && (f = 1) : g[u] = c = Ht.call(t, d, u, "get", i[u], v, B, 0, w.stringFilter);
              t._op && t._op[s] && t.kill(d, t._op[s]), j && t._pt && (jt = t, l.killTweensOf(d, g, t.globalTime(n)), b = !t.parent, jt = 0), t._pt && C && (oe[p.id] = 1)
            }
            f && dn(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = P, t._initted = (!t._op || t._pt) && !b, D && n <= 0 && $.render(_, !0, !0)
        },
        Yt = function(e, t, n, r) {
          var i, o, a = t.ease || r || "power1.inOut";
          if (F(t)) o = n[e] || (n[e] = []), t.forEach((function(e, n) {
            return o.push({
              t: n / (t.length - 1) * 100,
              v: e,
              e: a
            })
          }));
          else
            for (i in t) o = n[i] || (n[i] = []), "ease" === i || o.push({
              t: parseFloat(e),
              v: t[i],
              e: a
            })
        },
        Xt = function(e, t, n, r, i) {
          return A(e) ? e.call(t, n, r, i) : O(e) && ~e.indexOf("random(") ? ut(e) : e
        },
        qt = ce + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Qt = {};
      he(qt + ",id,stagger,delay,duration,paused,scrollTrigger", (function(e) {
        return Qt[e] = 1
      }));
      var Kt = function(e) {
        function t(t, n, i, a) {
          var s;
          "number" == typeof n && (i.duration = n, n = i, i = null);
          var u, c, d, f, p, h, m, g, v = (s = e.call(this, a ? n : Ce(n)) || this).vars,
            y = v.duration,
            b = v.delay,
            x = v.immediateRender,
            _ = v.stagger,
            S = v.overwrite,
            k = v.keyframes,
            T = v.defaults,
            E = v.scrollTrigger,
            C = v.yoyoEase,
            P = n.parent || l,
            M = (F(t) || I(t) ? L(t[0]) : "length" in n) ? [t] : tt(t);
          if (s._targets = M.length ? de(M) : K("GSAP target " + t + " not found. https://greensock.com", !w.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = S, k || _ || V(y) || V(b)) {
            if (n = s.vars, (u = s.timeline = new Bt({
                data: "nested",
                defaults: T || {},
                targets: P && "nested" === P.data ? P.vars.targets : M
              })).kill(), u.parent = u._dp = r(s), u._start = 0, _ || V(y) || V(b)) {
              if (f = M.length, m = _ && it(_), z(_))
                for (p in _) ~qt.indexOf(p) && (g || (g = {}), g[p] = _[p]);
              for (c = 0; c < f; c++)(d = Ee(n, Qt)).stagger = 0, C && (d.yoyoEase = C), g && ke(d, g), h = M[c], d.duration = +Xt(y, r(s), c, h, M), d.delay = (+Xt(b, r(s), c, h, M) || 0) - s._delay, !_ && 1 === f && d.delay && (s._delay = b = d.delay, s._start += b, d.delay = 0), u.to(h, d, m ? m(c, h, M) : 0), u._ease = Ct.none;
              u.duration() ? y = b = 0 : s.timeline = 0
            } else if (k) {
              Ce(Se(u.vars.defaults, {
                ease: "none"
              })), u._ease = Dt(k.ease || n.ease || "none");
              var O, A, D, R = 0;
              if (F(k)) k.forEach((function(e) {
                return u.to(M, e, ">")
              })), u.duration();
              else {
                for (p in d = {}, k) "ease" === p || "easeEach" === p || Yt(p, k[p], d, k.easeEach);
                for (p in d)
                  for (O = d[p].sort((function(e, t) {
                      return e.t - t.t
                    })), R = 0, c = 0; c < O.length; c++)(D = {
                    ease: (A = O[c]).e,
                    duration: (A.t - (c ? O[c - 1].t : 0)) / 100 * y
                  })[p] = A.v, u.to(M, D, R), R += D.duration;
                u.duration() < y && u.to({}, {
                  duration: y - u.duration()
                })
              }
            }
            y || s.duration(y = u.duration())
          } else s.timeline = 0;
          return !0 !== S || o || (jt = r(s), l.killTweensOf(M), jt = 0), Be(P, r(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), (x || !y && !k && s._start === ge(P._time) && N(x) && De(r(s)) && "nested" !== P.data) && (s._tTime = -1e-8, s.render(Math.max(0, -b) || 0)), E && je(r(s), E), s
        }
        i(t, e);
        var n = t.prototype;
        return n.render = function(e, t, n) {
          var r, i, o, s, l, u, c, d, f, p = this._time,
            h = this._tDur,
            m = this._dur,
            g = e < 0,
            v = e > h - S && !g ? h : e < S ? 0 : e;
          if (m) {
            if (v !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
              if (r = v, d = this.timeline, this._repeat) {
                if (s = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * s + e, t, n);
                if (r = ge(v % s), v === h ? (o = this._repeat, r = m) : ((o = ~~(v / s)) && o === v / s && (r = m, o--), r > m && (r = m)), (u = this._yoyo && 1 & o) && (f = this._yEase, r = m - r), l = Ne(this._tTime, s), r === p && !n && this._initted) return this._tTime = v, this;
                o !== l && (d && this._yEase && Lt(d, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1, this.render(ge(s * o), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if ($e(this, g ? e : r, n, t, v)) return this._tTime = 0, this;
                if (p !== this._time) return this;
                if (m !== this._dur) return this.render(e, t, n)
              }
              if (this._tTime = v, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (f || this._ease)(r / m), this._from && (this.ratio = c = 1 - c), r && !p && !t && !o && (ft(this, "onStart"), this._tTime !== v)) return this;
              for (i = this._pt; i;) i.r(c, i.d), i = i._next;
              d && d.render(e < 0 ? e : !r && u ? -1e-8 : d._dur * d._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (g && Le(this, e, 0, n), ft(this, "onUpdate")), this._repeat && o !== l && this.vars.onRepeat && !t && this.parent && ft(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && Le(this, e, 0, !0), (e || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Oe(this, 1), t || g && !p || !(v || p || u) || (ft(this, v === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < h && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, n, r) {
            var i, o, s, l = e.ratio,
              u = t < 0 || !t && (!e._start && Ue(e) && (e._initted || !He(e)) || (e._ts < 0 || e._dp._ts < 0) && !He(e)) ? 0 : 1,
              c = e._rDelay,
              d = 0;
            if (c && e._repeat && (d = Ke(0, e._tDur, t), o = Ne(d, c), e._yoyo && 1 & o && (u = 1 - u), o !== Ne(e._tTime, c) && (l = 1 - u, e.vars.repeatRefresh && e._initted && e.invalidate())), u !== l || a || r || e._zTime === S || !t && e._zTime) {
              if (!e._initted && $e(e, t, r, n, d)) return;
              for (s = e._zTime, e._zTime = t || (n ? S : 0), n || (n = t && !s), e.ratio = u, e._from && (u = 1 - u), e._time = 0, e._tTime = d, i = e._pt; i;) i.r(u, i.d), i = i._next;
              t < 0 && Le(e, t, 0, !0), e._onUpdate && !n && ft(e, "onUpdate"), d && e._repeat && !n && e.parent && ft(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === u && (u && Oe(e, 1), n || a || (ft(e, u ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, n);
          return this
        }, n.targets = function() {
          return this._targets
        }, n.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, n.resetTo = function(e, t, n, r) {
          m || Tt.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Gt(this, i),
            function(e, t, n, r, i, o, a) {
              var s, l, u, c, d = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!d)
                for (d = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--;) {
                  if ((s = u[c][t]) && s.d && s.d._pt)
                    for (s = s.d._pt; s && s.p !== t && s.fp !== t;) s = s._next;
                  if (!s) return $t = 1, e.vars[t] = "+=0", Gt(e, a), $t = 0, 1;
                  d.push(s)
                }
              for (c = d.length; c--;)(s = (l = d[c])._pt || l).s = !r && 0 !== r || i ? s.s + (r || 0) + o * s.c : r, s.c = n - s.s, l.e && (l.e = me(n) + Ze(l.e)), l.b && (l.b = s.s + Ze(l.b))
            }(this, e, t, n, r, this._ease(i / this._dur), i) ? this.resetTo(e, t, n, r) : (Ie(this, 0), this.parent || Pe(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? pt(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, jt && !0 !== jt.vars.overwrite)._first || pt(this), this.parent && n !== this.timeline.totalDuration() && We(this, this._dur * this.timeline._tDur / n, 0, 1), this
          }
          var r, i, o, a, s, l, u, c = this._targets,
            d = e ? tt(e) : c,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
              return n < 0
            }(c, d)) return "all" === t && (this._pt = 0), pt(this);
          for (r = this._op = this._op || [], "all" !== t && (O(t) && (s = {}, he(t, (function(e) {
              return s[e] = 1
            })), t = s), t = function(e, t) {
              var n, r, i, o, a = e[0] ? fe(e[0]).harness : 0,
                s = a && a.aliases;
              if (!s) return t;
              for (r in n = ke({}, t), s)
                if (r in n)
                  for (i = (o = s[r].split(",")).length; i--;) n[o[i]] = n[r];
              return n
            }(c, t)), u = c.length; u--;)
            if (~d.indexOf(c[u]))
              for (s in i = f[u], "all" === t ? (r[u] = t, a = i, o = {}) : (o = r[u] = r[u] || {}, a = t), a)(l = i && i[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || Me(this, l, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
          return this._initted && !this._pt && p && pt(this), this
        }, t.to = function(e, n) {
          return new t(e, n, arguments[2])
        }, t.from = function(e, t) {
          return qe(1, arguments)
        }, t.delayedCall = function(e, n, r, i) {
          return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i
          })
        }, t.fromTo = function(e, t, n) {
          return qe(2, arguments)
        }, t.set = function(e, n) {
          return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
        }, t.killTweensOf = function(e, t, n) {
          return l.killTweensOf(e, t, n)
        }, t
      }(Ft);
      Se(Kt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), he("staggerTo,staggerFrom,staggerFromTo", (function(e) {
        Kt[e] = function() {
          var t = new Bt,
            n = Je.call(arguments, 0);
          return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
        }
      }));
      var Zt = function(e, t, n) {
          return e[t] = n
        },
        Jt = function(e, t, n) {
          return e[t](n)
        },
        en = function(e, t, n, r) {
          return e[t](r.fp, n)
        },
        tn = function(e, t, n) {
          return e.setAttribute(t, n)
        },
        nn = function(e, t) {
          return A(e[t]) ? Jt : D(e[t]) && e.setAttribute ? tn : Zt
        },
        rn = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        on = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        an = function(e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r, n = n._next;
            r += t.c
          }
          t.set(t.t, t.p, r, t)
        },
        sn = function(e, t) {
          for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        },
        ln = function(e, t, n, r) {
          for (var i, o = this._pt; o;) i = o._next, o.p === r && o.modifier(e, t, n), o = i
        },
        un = function(e) {
          for (var t, n, r = this._pt; r;) n = r._next, r.p === e && !r.op || r.op === e ? Me(this, r, "_pt") : r.dep || (t = 1), r = n;
          return !t
        },
        cn = function(e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
        },
        dn = function(e) {
          for (var t, n, r, i, o = e._pt; o;) {
            for (t = o._next, n = r; n && n.pr > o.pr;) n = n._next;
            (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : i = o, o = t
          }
          e._pt = r
        },
        fn = function() {
          function e(e, t, n, r, i, o, a, s, l) {
            this.t = t, this.s = r, this.c = i, this.p = n, this.r = o || rn, this.d = a || this, this.set = s || Zt, this.pr = l || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, n) {
            this.mSet = this.mSet || this.set, this.set = cn, this.m = e, this.mt = n, this.tween = t
          }, e
        }();
      he(ce + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(e) {
        return re[e] = 1
      })), Y.TweenMax = Y.TweenLite = Kt, Y.TimelineLite = Y.TimelineMax = Bt, l = new Bt({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), w.stringFilter = kt;
      var pn = [],
        hn = {},
        mn = [],
        gn = 0,
        vn = 0,
        yn = function(e) {
          return (hn[e] || mn).map((function(e) {
            return e()
          }))
        },
        bn = function() {
          var e = Date.now(),
            t = [];
          e - gn > 2 && (yn("matchMediaInit"), pn.forEach((function(e) {
            var n, r, i, o, a = e.queries,
              s = e.conditions;
            for (r in a)(n = u.matchMedia(a[r]).matches) && (i = 1), n !== s[r] && (s[r] = n, o = 1);
            o && (e.revert(), i && t.push(e))
          })), yn("matchMediaRevert"), t.forEach((function(e) {
            return e.onMatch(e)
          })), gn = e, yn("matchMedia"))
        },
        wn = function() {
          function e(e, t) {
            this.selector = t && nt(t), this.data = [], this._r = [], this.isReverted = !1, this.id = vn++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            A(e) && (n = t, t = e, e = A);
            var r = this,
              i = function() {
                var e, i = s,
                  o = r.selector;
                return i && i !== r && i.data.push(r), n && (r.selector = nt(n)), s = r, e = t.apply(r, arguments), A(e) && r._r.push(e), s = i, r.selector = o, r.isReverted = !1, e
              };
            return r.last = i, e === A ? i(r) : e ? r[e] = i : i
          }, t.ignore = function(e) {
            var t = s;
            s = null, e(this), s = t
          }, t.getTweens = function() {
            var t = [];
            return this.data.forEach((function(n) {
              return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof Kt && !(n.parent && "nested" === n.parent.data) && t.push(n)
            })), t
          }, t.clear = function() {
            this._r.length = this.data.length = 0
          }, t.kill = function(e, t) {
            var n = this;
            if (e) {
              var r = this.getTweens();
              this.data.forEach((function(e) {
                "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function(e) {
                  return r.splice(r.indexOf(e), 1)
                })))
              })), r.map((function(e) {
                return {
                  g: e.globalTime(0),
                  t: e
                }
              })).sort((function(e, t) {
                return t.g - e.g || -1 / 0
              })).forEach((function(t) {
                return t.t.revert(e)
              })), this.data.forEach((function(t) {
                return !(t instanceof Kt) && t.revert && t.revert(e)
              })), this._r.forEach((function(t) {
                return t(e, n)
              })), this.isReverted = !0
            } else this.data.forEach((function(e) {
              return e.kill && e.kill()
            }));
            if (this.clear(), t)
              for (var i = pn.length; i--;) pn[i].id === this.id && pn.splice(i, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        xn = function() {
          function e(e) {
            this.contexts = [], this.scope = e
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            z(e) || (e = {
              matches: e
            });
            var r, i, o, a = new wn(0, n || this.scope),
              l = a.conditions = {};
            for (i in s && !a.selector && (a.selector = s.selector), this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === i ? o = 1 : (r = u.matchMedia(e[i])) && (pn.indexOf(a) < 0 && pn.push(a), (l[i] = r.matches) && (o = 1), r.addListener ? r.addListener(bn) : r.addEventListener("change", bn));
            return o && t(a), this
          }, t.revert = function(e) {
            this.kill(e || {})
          }, t.kill = function(e) {
            this.contexts.forEach((function(t) {
              return t.kill(e, !0)
            }))
          }, e
        }(),
        _n = {
          registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach((function(e) {
              return mt(e)
            }))
          },
          timeline: function(e) {
            return new Bt(e)
          },
          getTweensOf: function(e, t) {
            return l.getTweensOf(e, t)
          },
          getProperty: function(e, t, n, r) {
            O(e) && (e = tt(e)[0]);
            var i = fe(e || {}).get,
              o = n ? _e : xe;
            return "native" === n && (n = ""), e ? t ? o((ae[t] && ae[t].get || i)(e, t, n, r)) : function(t, n, r) {
              return o((ae[t] && ae[t].get || i)(e, t, n, r))
            } : e
          },
          quickSetter: function(e, t, n) {
            if ((e = tt(e)).length > 1) {
              var r = e.map((function(e) {
                  return Tn.quickSetter(e, t, n)
                })),
                i = r.length;
              return function(e) {
                for (var t = i; t--;) r[t](e)
              }
            }
            e = e[0] || {};
            var o = ae[t],
              a = fe(e),
              s = a.harness && (a.harness.aliases || {})[t] || t,
              l = o ? function(t) {
                var r = new o;
                h._pt = 0, r.init(e, n ? t + n : t, h, 0, [e]), r.render(1, r), h._pt && sn(1, h)
              } : a.set(e, s);
            return o ? l : function(t) {
              return l(e, s, n ? t + n : t, a, 1)
            }
          },
          quickTo: function(e, t, n) {
            var r, i = Tn.to(e, ke(((r = {})[t] = "+=0.1", r.paused = !0, r), n || {})),
              o = function(e, n, r) {
                return i.resetTo(t, e, n, r)
              };
            return o.tween = i, o
          },
          isTweening: function(e) {
            return l.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = Dt(e.ease, x.ease)), Te(x, e || {})
          },
          config: function(e) {
            return Te(w, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              n = e.effect,
              r = e.plugins,
              i = e.defaults,
              o = e.extendTimeline;
            (r || "").split(",").forEach((function(e) {
              return e && !ae[e] && !Y[e] && K(t + " effect requires " + e + " plugin.")
            })), se[t] = function(e, t, r) {
              return n(tt(e), Se(t || {}, i), r)
            }, o && (Bt.prototype[t] = function(e, n, r) {
              return this.add(se[t](e, z(n) ? n : (r = n) && {}, this), r)
            })
          },
          registerEase: function(e, t) {
            Ct[e] = Dt(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? Dt(e, t) : Ct
          },
          getById: function(e) {
            return l.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var n, r, i = new Bt(e);
            for (i.smoothChildTiming = N(e.smoothChildTiming), l.remove(i), i._dp = 0, i._time = i._tTime = l._time, n = l._first; n;) r = n._next, !t && !n._dur && n instanceof Kt && n.vars.onComplete === n._targets[0] || Be(i, n, n._start - n._delay), n = r;
            return Be(l, i, 0), i
          },
          context: function(e, t) {
            return e ? new wn(e, t) : s
          },
          matchMedia: function(e) {
            return new xn(e)
          },
          matchMediaRefresh: function() {
            return pn.forEach((function(e) {
              var t, n, r = e.conditions;
              for (n in r) r[n] && (r[n] = !1, t = 1);
              t && e.revert()
            })) || bn()
          },
          addEventListener: function(e, t) {
            var n = hn[e] || (hn[e] = []);
            ~n.indexOf(t) || n.push(t)
          },
          removeEventListener: function(e, t) {
            var n = hn[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1)
          },
          utils: {
            wrap: function e(t, n, r) {
              var i = n - t;
              return F(t) ? lt(t, e(0, t.length), n) : Qe(r, (function(e) {
                return (i + (e - t) % i) % i + t
              }))
            },
            wrapYoyo: function e(t, n, r) {
              var i = n - t,
                o = 2 * i;
              return F(t) ? lt(t, e(0, t.length - 1), n) : Qe(r, (function(e) {
                return t + ((e = (o + (e - t) % o) % o || 0) > i ? o - e : e)
              }))
            },
            distribute: it,
            random: st,
            snap: at,
            normalize: function(e, t, n) {
              return ct(e, t, 0, 1, n)
            },
            getUnit: Ze,
            clamp: function(e, t, n) {
              return Qe(n, (function(n) {
                return Ke(e, t, n)
              }))
            },
            splitColor: bt,
            toArray: tt,
            selector: nt,
            mapRange: ct,
            pipe: function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return function(e) {
                return t.reduce((function(e, t) {
                  return t(e)
                }), e)
              }
            },
            unitize: function(e, t) {
              return function(n) {
                return e(parseFloat(n)) + (t || Ze(n))
              }
            },
            interpolate: function e(t, n, r, i) {
              var o = isNaN(t + n) ? 0 : function(e) {
                return (1 - e) * t + e * n
              };
              if (!o) {
                var a, s, l, u, c, d = O(t),
                  f = {};
                if (!0 === r && (i = 1) && (r = null), d) t = {
                  p: t
                }, n = {
                  p: n
                };
                else if (F(t) && !F(n)) {
                  for (l = [], u = t.length, c = u - 2, s = 1; s < u; s++) l.push(e(t[s - 1], t[s]));
                  u--, o = function(e) {
                    e *= u;
                    var t = Math.min(c, ~~e);
                    return l[t](e - t)
                  }, r = n
                } else i || (t = ke(F(t) ? [] : {}, t));
                if (!l) {
                  for (a in n) Ht.call(f, t, a, "get", n[a]);
                  o = function(e) {
                    return sn(e, f) || (d ? t.p : t)
                  }
                }
              }
              return Qe(r, o)
            },
            shuffle: rt
          },
          install: q,
          effects: se,
          ticker: Tt,
          updateRoot: Bt.updateRoot,
          plugins: ae,
          globalTimeline: l,
          core: {
            PropTween: fn,
            globals: Z,
            Tween: Kt,
            Timeline: Bt,
            Animation: Ft,
            getCache: fe,
            _removeLinkedListItem: Me,
            reverting: function() {
              return a
            },
            context: function(e) {
              return e && s && (s.data.push(e), e._ctx = s), s
            },
            suppressOverwrites: function(e) {
              return o = e
            }
          }
        };
      he("to,from,fromTo,delayedCall,set,killTweensOf", (function(e) {
        return _n[e] = Kt[e]
      })), Tt.add(Bt.updateRoot), h = _n.to({}, {
        duration: 0
      });
      var Sn = function(e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
          return n
        },
        kn = function(e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function(e, n, r) {
              r._onInit = function(e) {
                var r, i;
                if (O(n) && (r = {}, he(n, (function(e) {
                    return r[e] = 1
                  })), n = r), t) {
                  for (i in r = {}, n) r[i] = t(n[i]);
                  n = r
                }! function(e, t) {
                  var n, r, i, o = e._targets;
                  for (n in t)
                    for (r = o.length; r--;)(i = e._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Sn(i, n)), i && i.modifier && i.modifier(t[n], e, o[r], n))
                }(e, n)
              }
            }
          }
        },
        Tn = _n.registerPlugin({
          name: "attr",
          init: function(e, t, n, r, i) {
            var o, a, s;
            for (o in this.tween = n, t) s = e.getAttribute(o) || "", (a = this.add(e, "setAttribute", (s || 0) + "", t[o], r, i, 0, 0, o)).op = o, a.b = s, this._props.push(o)
          },
          render: function(e, t) {
            for (var n = t._pt; n;) a ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
          }
        }, {
          name: "endArray",
          init: function(e, t) {
            for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
          }
        }, kn("roundProps", ot), kn("modifiers"), kn("snap", at)) || _n;
      Kt.version = Bt.version = Tn.version = "3.12.2", f = 1, R() && Et(), Ct.Power0, Ct.Power1, Ct.Power2, Ct.Power3, Ct.Power4, Ct.Linear, Ct.Quad, Ct.Cubic, Ct.Quart, Ct.Quint, Ct.Strong, Ct.Elastic, Ct.Back, Ct.SteppedEase, Ct.Bounce, Ct.Sine, Ct.Expo, Ct.Circ;
      var En, Cn, Pn, Mn, On, An, Ln, Dn, zn = {},
        Nn = 180 / Math.PI,
        Rn = Math.PI / 180,
        Vn = Math.atan2,
        In = /([A-Z])/g,
        Fn = /(left|right|width|margin|padding|x)/i,
        Bn = /[\s,\(]\S/,
        jn = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        $n = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        Un = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        Hn = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        Wn = function(e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
        },
        Gn = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        Yn = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        Xn = function(e, t, n) {
          return e.style[t] = n
        },
        qn = function(e, t, n) {
          return e.style.setProperty(t, n)
        },
        Qn = function(e, t, n) {
          return e._gsap[t] = n
        },
        Kn = function(e, t, n) {
          return e._gsap.scaleX = e._gsap.scaleY = n
        },
        Zn = function(e, t, n, r, i) {
          var o = e._gsap;
          o.scaleX = o.scaleY = n, o.renderTransform(i, o)
        },
        Jn = function(e, t, n, r, i) {
          var o = e._gsap;
          o[t] = n, o.renderTransform(i, o)
        },
        er = "transform",
        tr = er + "Origin",
        nr = function e(t, n) {
          var r = this,
            i = this.target,
            o = i.style;
          if (t in zn && o) {
            if (this.tfm = this.tfm || {}, "transform" === t) return jn.transform.split(",").forEach((function(t) {
              return e.call(r, t, n)
            }));
            if (~(t = jn[t] || t).indexOf(",") ? t.split(",").forEach((function(e) {
                return r.tfm[e] = wr(i, e)
              })) : this.tfm[t] = i._gsap.x ? i._gsap[t] : wr(i, t), this.props.indexOf(er) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(tr, n, "")), t = er
          }(o || n) && this.props.push(t, n, o[t])
        },
        rr = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        ir = function() {
          var e, t, n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap;
          for (e = 0; e < n.length; e += 3) n[e + 1] ? r[n[e]] = n[e + 2] : n[e + 2] ? i[n[e]] = n[e + 2] : i.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(In, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) o[t] = this.tfm[t];
            o.svg && (o.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = Ln()) && e.isStart || i[er] || (rr(i), o.uncache = 1)
          }
        },
        or = function(e, t) {
          var n = {
            target: e,
            props: [],
            revert: ir,
            save: nr
          };
          return e._gsap || Tn.core.getCache(e), t && t.split(",").forEach((function(e) {
            return n.save(e)
          })), n
        },
        ar = function(e, t) {
          var n = Cn.createElementNS ? Cn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Cn.createElement(e);
          return n.style ? n : Cn.createElement(e)
        },
        sr = function e(t, n, r) {
          var i = getComputedStyle(t);
          return i[n] || i.getPropertyValue(n.replace(In, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, ur(n) || n, 1) || ""
        },
        lr = "O,Moz,ms,Ms,Webkit".split(","),
        ur = function(e, t, n) {
          var r = (t || On).style,
            i = 5;
          if (e in r && !n) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(lr[i] + e in r););
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? lr[i] : "") + e
        },
        cr = function() {
          "undefined" != typeof window && window.document && (En = window, Cn = En.document, Pn = Cn.documentElement, On = ar("div") || {
            style: {}
          }, ar("div"), er = ur(er), tr = er + "Origin", On.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Dn = !!ur("perspective"), Ln = Tn.core.reverting, Mn = 1)
        },
        dr = function e(t) {
          var n, r = ar("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (Pn.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
          } catch (e) {} else this._gsapBBox && (n = this._gsapBBox());
          return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Pn.removeChild(r), this.style.cssText = a, n
        },
        fr = function(e, t) {
          for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
        },
        pr = function(e) {
          var t;
          try {
            t = e.getBBox()
          } catch (n) {
            t = dr.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === dr || (t = dr.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +fr(e, ["x", "cx", "x1"]) || 0,
            y: +fr(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        hr = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !pr(e))
        },
        mr = function(e, t) {
          if (t) {
            var n = e.style;
            t in zn && t !== tr && (t = er), n.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), n.removeProperty(t.replace(In, "-$1").toLowerCase())) : n.removeAttribute(t)
          }
        },
        gr = function(e, t, n, r, i, o) {
          var a = new fn(e._pt, t, n, 0, 1, o ? Yn : Gn);
          return e._pt = a, a.b = r, a.e = i, e._props.push(n), a
        },
        vr = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        yr = {
          grid: 1,
          flex: 1
        },
        br = function e(t, n, r, i) {
          var o, a, s, l, u = parseFloat(r) || 0,
            c = (r + "").trim().substr((u + "").length) || "px",
            d = On.style,
            f = Fn.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            g = "px" === i,
            v = "%" === i;
          return i === c || !u || vr[i] || vr[c] ? u : ("px" !== c && !g && (u = e(t, n, r, "px")), l = t.getCTM && hr(t), !v && "%" !== c || !zn[n] && !~n.indexOf("adius") ? (d[f ? "width" : "height"] = m + (g ? c : i), a = ~n.indexOf("adius") || "em" === i && t.appendChild && !p ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Cn && a.appendChild || (a = Cn.body), (s = a._gsap) && v && s.width && f && s.time === Tt.time && !s.uncache ? me(u / s.width * m) : ((v || "%" === c) && !yr[sr(a, "display")] && (d.position = sr(t, "position")), a === t && (d.position = "static"), a.appendChild(On), o = On[h], a.removeChild(On), d.position = "absolute", f && v && ((s = fe(a)).time = Tt.time, s.width = a[h]), me(g ? o * u / m : o && u ? m / o * u : 0))) : (o = l ? t.getBBox()[f ? "width" : "height"] : t[h], me(v ? u / o * m : u / 100 * o)))
        },
        wr = function(e, t, n, r) {
          var i;
          return Mn || cr(), t in jn && "transform" !== t && ~(t = jn[t]).indexOf(",") && (t = t.split(",")[0]), zn[t] && "transform" !== t ? (i = Ar(e, r), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : Lr(sr(e, tr)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = kr[t] && kr[t](e, t, n) || sr(e, t) || pe(e, t) || ("opacity" === t ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? br(e, t, i, n) + n : i
        },
        xr = function(e, t, n, r) {
          if (!n || "none" === n) {
            var i = ur(t, e, 1),
              o = i && sr(e, i, 1);
            o && o !== n ? (t = i, n = o) : "borderColor" === t && (n = sr(e, "borderTopColor"))
          }
          var a, s, l, u, c, d, f, p, h, m, g, v = new fn(this._pt, e.style, t, 0, 1, an),
            y = 0,
            b = 0;
          if (v.b = n, v.e = r, n += "", "auto" == (r += "") && (e.style[t] = r, r = sr(e, t) || r, e.style[t] = n), kt(a = [n, r]), r = a[1], l = (n = a[0]).match($) || [], (r.match($) || []).length) {
            for (; s = $.exec(r);) f = s[0], h = r.substring(y, s.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), f !== (d = l[b++] || "") && (u = parseFloat(d) || 0, g = d.substr((u + "").length), "=" === f.charAt(1) && (f = ve(u, f) + g), p = parseFloat(f), m = f.substr((p + "").length), y = $.lastIndex - m.length, m || (m = m || w.units[t] || g, y === r.length && (r += m, v.e += m)), g !== m && (u = br(e, t, d, m) || 0), v._pt = {
              _next: v._pt,
              p: h || 1 === b ? h : ",",
              s: u,
              c: p - u,
              m: c && c < 4 || "zIndex" === t ? Math.round : 0
            });
            v.c = y < r.length ? r.substring(y, r.length) : ""
          } else v.r = "display" === t && "none" === r ? Yn : Gn;
          return H.test(r) && (v.e = 0), this._pt = v, v
        },
        _r = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Sr = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n, r, i, o = t.t,
              a = o.style,
              s = t.u,
              l = o._gsap;
            if ("all" === s || !0 === s) a.cssText = "", r = 1;
            else
              for (i = (s = s.split(",")).length; --i > -1;) n = s[i], zn[n] && (r = 1, n = "transformOrigin" === n ? tr : er), mr(o, n);
            r && (mr(o, er), l && (l.svg && o.removeAttribute("transform"), Ar(o, 1), l.uncache = 1, rr(a)))
          }
        },
        kr = {
          clearProps: function(e, t, n, r, i) {
            if ("isFromStart" !== i.data) {
              var o = e._pt = new fn(e._pt, t, n, 0, 0, Sr);
              return o.u = r, o.pr = -10, o.tween = i, e._props.push(n), 1
            }
          }
        },
        Tr = [1, 0, 0, 1, 0, 0],
        Er = {},
        Cr = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        Pr = function(e) {
          var t = sr(e, er);
          return Cr(t) ? Tr : t.substr(7).match(j).map(me)
        },
        Mr = function(e, t) {
          var n, r, i, o, a = e._gsap || fe(e),
            s = e.style,
            l = Pr(e);
          return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Tr : l : (l !== Tr || e.offsetParent || e === Pn || a.svg || (i = s.display, s.display = "block", (n = e.parentNode) && e.offsetParent || (o = 1, r = e.nextElementSibling, Pn.appendChild(e)), l = Pr(e), i ? s.display = i : mr(e, "display"), o && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Pn.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Or = function(e, t, n, r, i, o) {
          var a, s, l, u = e._gsap,
            c = i || Mr(e, !0),
            d = u.xOrigin || 0,
            f = u.yOrigin || 0,
            p = u.xOffset || 0,
            h = u.yOffset || 0,
            m = c[0],
            g = c[1],
            v = c[2],
            y = c[3],
            b = c[4],
            w = c[5],
            x = t.split(" "),
            _ = parseFloat(x[0]) || 0,
            S = parseFloat(x[1]) || 0;
          n ? c !== Tr && (s = m * y - g * v) && (l = _ * (-g / s) + S * (m / s) - (m * w - g * b) / s, _ = _ * (y / s) + S * (-v / s) + (v * w - y * b) / s, S = l) : (_ = (a = pr(e)).x + (~x[0].indexOf("%") ? _ / 100 * a.width : _), S = a.y + (~(x[1] || x[0]).indexOf("%") ? S / 100 * a.height : S)), r || !1 !== r && u.smooth ? (b = _ - d, w = S - f, u.xOffset = p + (b * m + w * v) - b, u.yOffset = h + (b * g + w * y) - w) : u.xOffset = u.yOffset = 0, u.xOrigin = _, u.yOrigin = S, u.smooth = !!r, u.origin = t, u.originIsAbsolute = !!n, e.style[tr] = "0px 0px", o && (gr(o, u, "xOrigin", d, _), gr(o, u, "yOrigin", f, S), gr(o, u, "xOffset", p, u.xOffset), gr(o, u, "yOffset", h, u.yOffset)), e.setAttribute("data-svg-origin", _ + " " + S)
        },
        Ar = function(e, t) {
          var n = e._gsap || new It(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r, i, o, a, s, l, u, c, d, f, p, h, m, g, v, y, b, x, _, S, k, T, E, C, P, M, O, A, L, D, z, N, R = e.style,
            V = n.scaleX < 0,
            I = "px",
            F = "deg",
            B = getComputedStyle(e),
            j = sr(e, tr) || "0";
          return r = i = o = l = u = c = d = f = p = 0, a = s = 1, n.svg = !(!e.getCTM || !hr(e)), B.translate && ("none" === B.translate && "none" === B.scale && "none" === B.rotate || (R[er] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[er] ? B[er] : "")), R.scale = R.rotate = R.translate = "none"), g = Mr(e, n.svg), n.svg && (n.uncache ? (P = e.getBBox(), j = n.xOrigin - P.x + "px " + (n.yOrigin - P.y) + "px", C = "") : C = !t && e.getAttribute("data-svg-origin"), Or(e, C || j, !!C || n.originIsAbsolute, !1 !== n.smooth, g)), h = n.xOrigin || 0, m = n.yOrigin || 0, g !== Tr && (x = g[0], _ = g[1], S = g[2], k = g[3], r = T = g[4], i = E = g[5], 6 === g.length ? (a = Math.sqrt(x * x + _ * _), s = Math.sqrt(k * k + S * S), l = x || _ ? Vn(_, x) * Nn : 0, (d = S || k ? Vn(S, k) * Nn + l : 0) && (s *= Math.abs(Math.cos(d * Rn))), n.svg && (r -= h - (h * x + m * S), i -= m - (h * _ + m * k))) : (N = g[6], D = g[7], O = g[8], A = g[9], L = g[10], z = g[11], r = g[12], i = g[13], o = g[14], u = (v = Vn(N, L)) * Nn, v && (C = T * (y = Math.cos(-v)) + O * (b = Math.sin(-v)), P = E * y + A * b, M = N * y + L * b, O = T * -b + O * y, A = E * -b + A * y, L = N * -b + L * y, z = D * -b + z * y, T = C, E = P, N = M), c = (v = Vn(-S, L)) * Nn, v && (y = Math.cos(-v), z = k * (b = Math.sin(-v)) + z * y, x = C = x * y - O * b, _ = P = _ * y - A * b, S = M = S * y - L * b), l = (v = Vn(_, x)) * Nn, v && (C = x * (y = Math.cos(v)) + _ * (b = Math.sin(v)), P = T * y + E * b, _ = _ * y - x * b, E = E * y - T * b, x = C, T = P), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), a = me(Math.sqrt(x * x + _ * _ + S * S)), s = me(Math.sqrt(E * E + N * N)), v = Vn(T, E), d = Math.abs(v) > 2e-4 ? v * Nn : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), n.svg && (C = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Cr(sr(e, er)), C && e.setAttribute("transform", C))), Math.abs(d) > 90 && Math.abs(d) < 270 && (V ? (a *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (s *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + I, n.y = i - ((n.yPercent = i && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + I, n.z = o + I, n.scaleX = me(a), n.scaleY = me(s), n.rotation = me(l) + F, n.rotationX = me(u) + F, n.rotationY = me(c) + F, n.skewX = d + F, n.skewY = f + F, n.transformPerspective = p + I, (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (R[tr] = Lr(j)), n.xOffset = n.yOffset = 0, n.force3D = w.force3D, n.renderTransform = n.svg ? Fr : Dn ? Ir : zr, n.uncache = 0, n
        },
        Lr = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        Dr = function(e, t, n) {
          var r = Ze(t);
          return me(parseFloat(t) + parseFloat(br(e, "x", n + "px", r))) + r
        },
        zr = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ir(e, t)
        },
        Nr = "0deg",
        Rr = "0px",
        Vr = ") ",
        Ir = function(e, t) {
          var n = t || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            a = n.y,
            s = n.z,
            l = n.rotation,
            u = n.rotationY,
            c = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            v = n.target,
            y = n.zOrigin,
            b = "",
            w = "auto" === g && e && 1 !== e || !0 === g;
          if (y && (c !== Nr || u !== Nr)) {
            var x, _ = parseFloat(u) * Rn,
              S = Math.sin(_),
              k = Math.cos(_);
            _ = parseFloat(c) * Rn, x = Math.cos(_), o = Dr(v, o, S * x * -y), a = Dr(v, a, -Math.sin(_) * -y), s = Dr(v, s, k * x * -y + y)
          }
          m !== Rr && (b += "perspective(" + m + Vr), (r || i) && (b += "translate(" + r + "%, " + i + "%) "), (w || o !== Rr || a !== Rr || s !== Rr) && (b += s !== Rr || w ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + Vr), l !== Nr && (b += "rotate(" + l + Vr), u !== Nr && (b += "rotateY(" + u + Vr), c !== Nr && (b += "rotateX(" + c + Vr), d === Nr && f === Nr || (b += "skew(" + d + ", " + f + Vr), 1 === p && 1 === h || (b += "scale(" + p + ", " + h + Vr), v.style[er] = b || "translate(0, 0)"
        },
        Fr = function(e, t) {
          var n, r, i, o, a, s = t || this,
            l = s.xPercent,
            u = s.yPercent,
            c = s.x,
            d = s.y,
            f = s.rotation,
            p = s.skewX,
            h = s.skewY,
            m = s.scaleX,
            g = s.scaleY,
            v = s.target,
            y = s.xOrigin,
            b = s.yOrigin,
            w = s.xOffset,
            x = s.yOffset,
            _ = s.forceCSS,
            S = parseFloat(c),
            k = parseFloat(d);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= Rn, p *= Rn, n = Math.cos(f) * m, r = Math.sin(f) * m, i = Math.sin(f - p) * -g, o = Math.cos(f - p) * g, p && (h *= Rn, a = Math.tan(p - h), i *= a = Math.sqrt(1 + a * a), o *= a, h && (a = Math.tan(h), n *= a = Math.sqrt(1 + a * a), r *= a)), n = me(n), r = me(r), i = me(i), o = me(o)) : (n = m, o = g, r = i = 0), (S && !~(c + "").indexOf("px") || k && !~(d + "").indexOf("px")) && (S = br(v, "x", c, "px"), k = br(v, "y", d, "px")), (y || b || w || x) && (S = me(S + y - (y * n + b * i) + w), k = me(k + b - (y * r + b * o) + x)), (l || u) && (a = v.getBBox(), S = me(S + l / 100 * a.width), k = me(k + u / 100 * a.height)), a = "matrix(" + n + "," + r + "," + i + "," + o + "," + S + "," + k + ")", v.setAttribute("transform", a), _ && (v.style[er] = a)
        },
        Br = function(e, t, n, r, i) {
          var o, a, s = 360,
            l = O(i),
            u = parseFloat(i) * (l && ~i.indexOf("rad") ? Nn : 1) - r,
            c = r + u + "deg";
          return l && ("short" === (o = i.split("_")[1]) && (u %= s) != u % 180 && (u += u < 0 ? s : -360), "cw" === o && u < 0 ? u = (u + 36e9) % s - ~~(u / s) * s : "ccw" === o && u > 0 && (u = (u - 36e9) % s - ~~(u / s) * s)), e._pt = a = new fn(e._pt, t, n, r, u, Un), a.e = c, a.u = "deg", e._props.push(n), a
        },
        jr = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        $r = function(e, t, n) {
          var r, i, o, a, s, l, u, c = jr({}, n._gsap),
            d = n.style;
          for (i in c.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), d[er] = t, r = Ar(n, 1), mr(n, er), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[er], d[er] = t, r = Ar(n, 1), d[er] = o), zn)(o = c[i]) !== (a = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (s = Ze(o) !== (u = Ze(a)) ? br(n, i, o, u) : parseFloat(o), l = parseFloat(a), e._pt = new fn(e._pt, r, i, s, l - s, $n), e._pt.u = u || 0, e._props.push(i));
          jr(r, c)
        };
      he("padding,margin,Width,Radius", (function(e, t) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          o = "Left",
          a = (t < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map((function(n) {
            return t < 2 ? e + n : "border" + n + e
          }));
        kr[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
          var o, s;
          if (arguments.length < 4) return o = a.map((function(t) {
            return wr(e, t, n)
          })), 5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
          o = (r + "").split(" "), s = {}, a.forEach((function(e, t) {
            return s[e] = o[t] = o[t] || o[(t - 1) / 2 | 0]
          })), e.init(t, s, i)
        }
      }));
      var Ur, Hr, Wr = {
        name: "css",
        register: cr,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, n, r, i) {
          var o, a, s, l, u, c, d, f, p, h, m, g, v, y, b, x, _, S, k, T, E = this._props,
            C = e.style,
            P = n.vars.startAt;
          for (d in Mn || cr(), this.styles = this.styles || or(e), x = this.styles.props, this.tween = n, t)
            if ("autoRound" !== d && (a = t[d], !ae[d] || !Wt(d, t, n, r, e, i)))
              if (u = typeof a, c = kr[d], "function" === u && (u = typeof(a = a.call(n, r, e, i))), "string" === u && ~a.indexOf("random(") && (a = ut(a)), c) c(this, e, d, a, n) && (b = 1);
              else if ("--" === d.substr(0, 2)) o = (getComputedStyle(e).getPropertyValue(d) + "").trim(), a += "", _t.lastIndex = 0, _t.test(o) || (f = Ze(o), p = Ze(a)), p ? f !== p && (o = br(e, d, o, p) + p) : f && (a += f), this.add(C, "setProperty", o, a, r, i, 0, 0, d), E.push(d), x.push(d, 0, C[d]);
          else if ("undefined" !== u) {
            if (P && d in P ? (o = "function" == typeof P[d] ? P[d].call(n, r, e, i) : P[d], O(o) && ~o.indexOf("random(") && (o = ut(o)), Ze(o + "") || (o += w.units[d] || Ze(wr(e, d)) || ""), "=" === (o + "").charAt(1) && (o = wr(e, d))) : o = wr(e, d), l = parseFloat(o), (h = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), s = parseFloat(a), d in jn && ("autoAlpha" === d && (1 === l && "hidden" === wr(e, "visibility") && s && (l = 0), x.push("visibility", 0, C.visibility), gr(this, C, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== d && "transform" !== d && ~(d = jn[d]).indexOf(",") && (d = d.split(",")[0])), m = d in zn)
              if (this.styles.save(d), g || ((v = e._gsap).renderTransform && !t.parseTransform || Ar(e, t.parseTransform), y = !1 !== t.smoothOrigin && v.smooth, (g = this._pt = new fn(this._pt, C, er, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new fn(this._pt, v, "scaleY", v.scaleY, (h ? ve(v.scaleY, h + s) : s) - v.scaleY || 0, $n), this._pt.u = 0, E.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  x.push(tr, 0, C[tr]), S = void 0, k = void 0, T = void 0, k = (S = (_ = a).split(" "))[0], T = S[1] || "50%", "top" !== k && "bottom" !== k && "left" !== T && "right" !== T || (_ = k, k = T, T = _), S[0] = _r[k] || k, S[1] = _r[T] || T, a = S.join(" "), v.svg ? Or(e, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && gr(this, v, "zOrigin", v.zOrigin, p), gr(this, C, d, Lr(o), Lr(a)));
                  continue
                }
                if ("svgOrigin" === d) {
                  Or(e, a, 1, y, 0, this);
                  continue
                }
                if (d in Er) {
                  Br(this, v, d, l, h ? ve(l, h + a) : a);
                  continue
                }
                if ("smoothOrigin" === d) {
                  gr(this, v, "smooth", v.smooth, a);
                  continue
                }
                if ("force3D" === d) {
                  v[d] = a;
                  continue
                }
                if ("transform" === d) {
                  $r(this, a, e);
                  continue
                }
              }
            else d in C || (d = ur(d) || d);
            if (m || (s || 0 === s) && (l || 0 === l) && !Bn.test(a) && d in C) s || (s = 0), (f = (o + "").substr((l + "").length)) !== (p = Ze(a) || (d in w.units ? w.units[d] : f)) && (l = br(e, d, o, p)), this._pt = new fn(this._pt, m ? v : C, d, l, (h ? ve(l, h + s) : s) - l, m || "px" !== p && "zIndex" !== d || !1 === t.autoRound ? $n : Wn), this._pt.u = p || 0, f !== p && "%" !== p && (this._pt.b = o, this._pt.r = Hn);
            else if (d in C) xr.call(this, e, d, o, h ? h + a : a);
            else if (d in e) this.add(e, d, o || e[d], h ? h + a : a, r, i);
            else if ("parseTransform" !== d) {
              Q(d, a);
              continue
            }
            m || (d in C ? x.push(d, 0, C[d]) : x.push(d, 1, o || e[d])), E.push(d)
          }
          b && dn(this)
        },
        render: function(e, t) {
          if (t.tween._time || !Ln())
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
          else t.styles.revert()
        },
        get: wr,
        aliases: jn,
        getSetter: function(e, t, n) {
          var r = jn[t];
          return r && r.indexOf(",") < 0 && (t = r), t in zn && t !== tr && (e._gsap.x || wr(e, "x")) ? n && An === n ? "scale" === t ? Kn : Qn : (An = n || {}) && ("scale" === t ? Zn : Jn) : e.style && !D(e.style[t]) ? Xn : ~t.indexOf("-") ? qn : nn(e, t)
        },
        core: {
          _removeProperty: mr,
          _getMatrix: Mr
        }
      };
      Tn.utils.checkPrefix = ur, Tn.core.getStyleSaver = or, Hr = he("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ur = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(e) {
        zn[e] = 1
      })), he(Ur, (function(e) {
        w.units[e] = "deg", Er[e] = 1
      })), jn[Hr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ur, he("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(e) {
        var t = e.split(":");
        jn[t[1]] = Hr[t[0]]
      })), he("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(e) {
        w.units[e] = "px"
      })), Tn.registerPlugin(Wr);
      var Gr = Tn.registerPlugin(Wr) || Tn;
      Gr.core.Tween
    },
    2571: (e, t, n) => {
      "use strict";
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
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (h) {
            var i = p(n);
            i && i !== h && e(t, i, r)
          }
          var a = c(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), m = l(n), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!(o[v] || r && r[v] || m && m[v] || s && s[v])) {
              var y = f(n, v);
              try {
                u(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    768: e => {
      var t, n, r = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          n = o
        }
      }();
      var s, l = [],
        u = !1,
        c = -1;

      function d() {
        u && s && (u = !1, s.length ? l = s.concat(l) : c = -1, l.length && f())
      }

      function f() {
        if (!u) {
          var e = a(d);
          u = !0;
          for (var t = l.length; t;) {
            for (s = l, l = []; ++c < t;) s && s[c].run();
            c = -1, t = l.length
          }
          s = null, u = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function h() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new p(e, t)), 1 !== l.length || u || a(f)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    5861: e => {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function o(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var s, l, u, c;
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1;
            for (l = s; 0 != l--;)
              if (!o(e[l], a[l])) return !1;
            return !0
          }
          if (n && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(l = c.next()).done;)
              if (!a.has(l.value[0])) return !1;
            for (c = e.entries(); !(l = c.next()).done;)
              if (!o(l.value[1], a.get(l.value[0]))) return !1;
            return !0
          }
          if (r && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(l = c.next()).done;)
              if (!a.has(l.value[0])) return !1;
            return !0
          }
          if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((s = e.length) != a.length) return !1;
            for (l = s; 0 != l--;)
              if (e[l] !== a[l]) return !1;
            return !0
          }
          if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
          if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf) return e.valueOf() === a.valueOf();
          if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString) return e.toString() === a.toString();
          if ((s = (u = Object.keys(e)).length) !== Object.keys(a).length) return !1;
          for (l = s; 0 != l--;)
            if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
          if (t && e instanceof Element) return !1;
          for (l = s; 0 != l--;)
            if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !e.$$typeof) && !o(e[u[l]], a[u[l]])) return !1;
          return !0
        }
        return e != e && a != a
      }
      e.exports = function(e, t) {
        try {
          return o(e, t)
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw e
        }
      }
    },
    7478: (e, t) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;

      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case c:
                case d:
                case o:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case f:
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

      function _(e) {
        return x(e) === d
      }
      t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = o, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = s, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
        return _(e) || x(e) === c
      }, t.isConcurrentMode = _, t.isContextConsumer = function(e) {
        return x(e) === u
      }, t.isContextProvider = function(e) {
        return x(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return x(e) === f
      }, t.isFragment = function(e) {
        return x(e) === o
      }, t.isLazy = function(e) {
        return x(e) === g
      }, t.isMemo = function(e) {
        return x(e) === m
      }, t.isPortal = function(e) {
        return x(e) === i
      }, t.isProfiler = function(e) {
        return x(e) === s
      }, t.isStrictMode = function(e) {
        return x(e) === a
      }, t.isSuspense = function(e) {
        return x(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === d || e === s || e === a || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === v)
      }, t.typeOf = x
    },
    4607: (e, t, n) => {
      "use strict";
      e.exports = n(7478)
    },
    3032: (e, t, n) => {
      "use strict";
      var r = n(927),
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
      "use strict";
      e.exports = n(3032)
    },
    2088: (e, t) => {
      "use strict";

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
        d = 1,
        f = null,
        p = 3,
        h = !1,
        m = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        b = "undefined" != typeof setImmediate ? setImmediate : null;

      function w(e) {
        for (var t = r(c); null !== t;) {
          if (null === t.callback) i(c);
          else {
            if (!(t.startTime <= e)) break;
            i(c), t.sortIndex = t.expirationTime, n(u, t)
          }
          t = r(c)
        }
      }

      function x(e) {
        if (g = !1, w(e), !m)
          if (null !== r(u)) m = !0, D(_);
          else {
            var t = r(c);
            null !== t && z(x, t.startTime - e)
          }
      }

      function _(e, n) {
        m = !1, g && (g = !1, y(E), E = -1), h = !0;
        var o = p;
        try {
          for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !M());) {
            var a = f.callback;
            if ("function" == typeof a) {
              f.callback = null, p = f.priorityLevel;
              var s = a(f.expirationTime <= n);
              n = t.unstable_now(), "function" == typeof s ? f.callback = s : f === r(u) && i(u), w(n)
            } else i(u);
            f = r(u)
          }
          if (null !== f) var l = !0;
          else {
            var d = r(c);
            null !== d && z(x, d.startTime - n), l = !1
          }
          return l
        } finally {
          f = null, p = o, h = !1
        }
      }
      "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var S, k = !1,
        T = null,
        E = -1,
        C = 5,
        P = -1;

      function M() {
        return !(t.unstable_now() - P < C)
      }

      function O() {
        if (null !== T) {
          var e = t.unstable_now();
          P = e;
          var n = !0;
          try {
            n = T(!0, e)
          } finally {
            n ? S() : (k = !1, T = null)
          }
        } else k = !1
      }
      if ("function" == typeof b) S = function() {
        b(O)
      };
      else if ("undefined" != typeof MessageChannel) {
        var A = new MessageChannel,
          L = A.port2;
        A.port1.onmessage = O, S = function() {
          L.postMessage(null)
        }
      } else S = function() {
        v(O, 0)
      };

      function D(e) {
        T = e, k || (k = !0, S())
      }

      function z(e, n) {
        E = v((function() {
          e(t.unstable_now())
        }), n)
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
        e.callback = null
      }, t.unstable_continueExecution = function() {
        m || h || (m = !0, D(_))
      }, t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
      }, t.unstable_getCurrentPriorityLevel = function() {
        return p
      }, t.unstable_getFirstCallbackNode = function() {
        return r(u)
      }, t.unstable_next = function(e) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = p
        }
        var n = p;
        p = t;
        try {
          return e()
        } finally {
          p = n
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
        var n = p;
        p = e;
        try {
          return t()
        } finally {
          p = n
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
          id: d++,
          callback: i,
          priorityLevel: e,
          startTime: o,
          expirationTime: s = o + s,
          sortIndex: -1
        }, o > a ? (e.sortIndex = o, n(c, e), null === r(u) && e === r(c) && (g ? (y(E), E = -1) : g = !0, z(x, o - a))) : (e.sortIndex = s, n(u, e), m || h || (m = !0, D(_))), e
      }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) {
        var t = p;
        return function() {
          var n = p;
          p = t;
          try {
            return e.apply(this, arguments)
          } finally {
            p = n
          }
        }
      }
    },
    2219: (e, t, n) => {
      "use strict";
      e.exports = n(2088)
    },
    2965: (e, t, n) => {
      "use strict";
      n.d(t, {
        tq: () => w,
        o5: () => _
      });
      var r = n(927),
        i = n(3118);

      function o(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function a(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : o(t[n]) && o(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : a(e[n], t[n]) : e[n] = t[n]
        }))
      }

      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && void 0 === e.pagination.el
      }

      function u() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar && void 0 === e.scrollbar.el
      }

      function c() {
        const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ").map((e => e.trim())).filter((e => !!e)),
          t = [];
        return e.forEach((e => {
          t.indexOf(e) < 0 && t.push(e)
        })), t.join(" ")
      }
      const d = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
        f = (e, t) => {
          let n = t.slidesPerView;
          if (t.breakpoints) {
            const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
              r = e in t.breakpoints ? t.breakpoints[e] : void 0;
            r && r.slidesPerView && (n = r.slidesPerView)
          }
          let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
          return r += t.loopAdditionalSlides, r > e.length && t.loopedSlidesLimit && (r = e.length), r
        };

      function p(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function h(e) {
        const t = [];
        return r.Children.toArray(e).forEach((e => {
          p(e) ? t.push(e) : e.props && e.props.children && h(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function m(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return r.Children.toArray(e).forEach((e => {
          if (p(e)) t.push(e);
          else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const r = h(e.props.children);
            r.length > 0 ? r.forEach((e => t.push(e))) : n["container-end"].push(e)
          } else n["container-end"].push(e)
        })), {
          slides: t,
          slots: n
        }
      }

      function g(e, t) {
        return "undefined" == typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
      }
      const v = (0, r.createContext)(null),
        y = (0, r.createContext)(null);

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, b.apply(this, arguments)
      }
      const w = (0, r.forwardRef)((function(e, t) {
        let {
          className: n,
          tag: p = "div",
          wrapperTag: h = "div",
          children: v,
          onSwiper: w,
          ...x
        } = void 0 === e ? {} : e, _ = !1;
        const [S, k] = (0, r.useState)("swiper"), [T, E] = (0, r.useState)(null), [C, P] = (0, r.useState)(!1), M = (0, r.useRef)(!1), O = (0, r.useRef)(null), A = (0, r.useRef)(null), L = (0, r.useRef)(null), D = (0, r.useRef)(null), z = (0, r.useRef)(null), N = (0, r.useRef)(null), R = (0, r.useRef)(null), V = (0, r.useRef)(null), {
          params: I,
          passedParams: F,
          rest: B,
          events: j
        } = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = {
              on: {}
            },
            r = {},
            s = {};
          a(n, i.ZP.defaults), a(n, i.ZP.extendedDefaults), n._emitClasses = !0, n.init = !1;
          const l = {},
            u = d.map((e => e.replace(/_/, ""))),
            c = Object.assign({}, e);
          return Object.keys(c).forEach((i => {
            void 0 !== e[i] && (u.indexOf(i) >= 0 ? o(e[i]) ? (n[i] = {}, s[i] = {}, a(n[i], e[i]), a(s[i], e[i])) : (n[i] = e[i], s[i] = e[i]) : 0 === i.search(/on[A-Z]/) && "function" == typeof e[i] ? t ? r[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : n.on[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : l[i] = e[i])
          })), ["navigation", "pagination", "scrollbar"].forEach((e => {
            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
          })), {
            params: n,
            passedParams: s,
            rest: l,
            events: r
          }
        }(x), {
          slides: $,
          slots: U
        } = m(v), H = () => {
          P(!C)
        };
        Object.assign(I.on, {
          _containerClasses(e, t) {
            k(t)
          }
        });
        const W = () => {
          if (Object.assign(I.on, j), _ = !0, A.current = new i.ZP(I), A.current.loopCreate = () => {}, A.current.loopDestroy = () => {}, I.loop && (A.current.loopedSlides = f($, I)), A.current.virtual && A.current.params.virtual.enabled) {
            A.current.virtual.slides = $;
            const e = {
              cache: !1,
              slides: $,
              renderExternal: E,
              renderExternalUpdate: !1
            };
            a(A.current.params.virtual, e), a(A.current.originalParams.virtual, e)
          }
        };
        return O.current || W(), A.current && A.current.on("_beforeBreakpoint", H), (0, r.useEffect)((() => () => {
          A.current && A.current.off("_beforeBreakpoint", H)
        })), (0, r.useEffect)((() => {
          !M.current && A.current && (A.current.emitSlidesClasses(), M.current = !0)
        })), g((() => {
          if (t && (t.current = O.current), O.current) return A.current.destroyed && W(),
            function(e, t) {
              let {
                el: n,
                nextEl: r,
                prevEl: i,
                paginationEl: o,
                scrollbarEl: a,
                swiper: c
              } = e;
              s(t) && r && i && (c.params.navigation.nextEl = r, c.originalParams.navigation.nextEl = r, c.params.navigation.prevEl = i, c.originalParams.navigation.prevEl = i), l(t) && o && (c.params.pagination.el = o, c.originalParams.pagination.el = o), u(t) && a && (c.params.scrollbar.el = a, c.originalParams.scrollbar.el = a), c.init(n)
            }({
              el: O.current,
              nextEl: z.current,
              prevEl: N.current,
              paginationEl: R.current,
              scrollbarEl: V.current,
              swiper: A.current
            }, I), w && w(A.current), () => {
              A.current && !A.current.destroyed && A.current.destroy(!0, !1)
            }
        }), []), g((() => {
          !_ && j && A.current && Object.keys(j).forEach((e => {
            A.current.on(e, j[e])
          }));
          const e = function(e, t, n, r, i) {
            const a = [];
            if (!t) return a;
            const s = e => {
              a.indexOf(e) < 0 && a.push(e)
            };
            if (n && r) {
              const e = r.map(i),
                t = n.map(i);
              e.join("") !== t.join("") && s("children"), r.length !== n.length && s("children")
            }
            return d.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
              if (n in e && n in t)
                if (o(e[n]) && o(t[n])) {
                  const r = Object.keys(e[n]),
                    i = Object.keys(t[n]);
                  r.length !== i.length ? s(n) : (r.forEach((r => {
                    e[n][r] !== t[n][r] && s(n)
                  })), i.forEach((r => {
                    e[n][r] !== t[n][r] && s(n)
                  })))
                } else e[n] !== t[n] && s(n)
            })), a
          }(F, L.current, $, D.current, (e => e.key));
          return L.current = F, D.current = $, e.length && A.current && !A.current.destroyed && function(e) {
            let {
              swiper: t,
              slides: n,
              passedParams: r,
              changedParams: i,
              nextEl: s,
              prevEl: l,
              scrollbarEl: u,
              paginationEl: c
            } = e;
            const d = i.filter((e => "children" !== e && "direction" !== e)),
              {
                params: f,
                pagination: p,
                navigation: h,
                scrollbar: m,
                virtual: g,
                thumbs: v
              } = t;
            let y, b, w, x, _;
            i.includes("thumbs") && r.thumbs && r.thumbs.swiper && f.thumbs && !f.thumbs.swiper && (y = !0), i.includes("controller") && r.controller && r.controller.control && f.controller && !f.controller.control && (b = !0), i.includes("pagination") && r.pagination && (r.pagination.el || c) && (f.pagination || !1 === f.pagination) && p && !p.el && (w = !0), i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || u) && (f.scrollbar || !1 === f.scrollbar) && m && !m.el && (x = !0), i.includes("navigation") && r.navigation && (r.navigation.prevEl || l) && (r.navigation.nextEl || s) && (f.navigation || !1 === f.navigation) && h && !h.prevEl && !h.nextEl && (_ = !0), d.forEach((e => {
              if (o(f[e]) && o(r[e])) a(f[e], r[e]);
              else {
                const i = r[e];
                !0 !== i && !1 !== i || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? f[e] = r[e] : !1 === i && t[n = e] && (t[n].destroy(), "navigation" === n ? (f[n].prevEl = void 0, f[n].nextEl = void 0, t[n].prevEl = void 0, t[n].nextEl = void 0) : (f[n].el = void 0, t[n].el = void 0))
              }
              var n
            })), d.includes("controller") && !b && t.controller && t.controller.control && f.controller && f.controller.control && (t.controller.control = f.controller.control), i.includes("children") && n && g && f.virtual.enabled ? (g.slides = n, g.update(!0)) : i.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), y && v.init() && v.update(!0), b && (t.controller.control = f.controller.control), w && (c && (f.pagination.el = c), p.init(), p.render(), p.update()), x && (u && (f.scrollbar.el = u), m.init(), m.updateSize(), m.setTranslate()), _ && (s && (f.navigation.nextEl = s), l && (f.navigation.prevEl = l), h.init(), h.update()), i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), i.includes("direction") && t.changeDirection(r.direction, !1), t.update()
          }({
            swiper: A.current,
            slides: $,
            passedParams: F,
            changedParams: e,
            nextEl: z.current,
            prevEl: N.current,
            scrollbarEl: V.current,
            paginationEl: R.current
          }), () => {
            j && A.current && Object.keys(j).forEach((e => {
              A.current.off(e, j[e])
            }))
          }
        })), g((() => {
          var e;
          !(e = A.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }), [T]), r.createElement(p, b({
          ref: O,
          className: c(`${S}${n?` ${n}`:""}`)
        }, B), r.createElement(y.Provider, {
          value: A.current
        }, U["container-start"], r.createElement(h, {
          className: "swiper-wrapper"
        }, U["wrapper-start"], I.virtual ? function(e, t, n) {
          if (!n) return null;
          const i = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
          } : {
            top: `${n.offset}px`
          };
          return t.filter(((e, t) => t >= n.from && t <= n.to)).map((t => r.cloneElement(t, {
            swiper: e,
            style: i
          })))
        }(A.current, $, T) : !I.loop || A.current && A.current.destroyed ? $.map((e => r.cloneElement(e, {
          swiper: A.current
        }))) : function(e, t, n) {
          const i = t.map(((t, n) => r.cloneElement(t, {
            swiper: e,
            "data-swiper-slide-index": n
          })));

          function o(e, t, i) {
            return r.cloneElement(e, {
              key: `${e.key}-duplicate-${t}-${i}`,
              className: `${e.props.className||""} ${n.slideDuplicateClass}`
            })
          }
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - i.length % n.slidesPerGroup;
            if (e !== n.slidesPerGroup)
              for (let t = 0; t < e; t += 1) {
                const e = r.createElement("div", {
                  className: `${n.slideClass} ${n.slideBlankClass}`
                });
                i.push(e)
              }
          }
          "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length);
          const a = f(i, n),
            s = [],
            l = [];
          for (let e = 0; e < a; e += 1) {
            const t = e - Math.floor(e / i.length) * i.length;
            l.push(o(i[t], e, "append")), s.unshift(o(i[i.length - t - 1], e, "prepend"))
          }
          return e && (e.loopedSlides = a), [...s, ...i, ...l]
        }(A.current, $, I), U["wrapper-end"]), s(I) && r.createElement(r.Fragment, null, r.createElement("div", {
          ref: N,
          className: "swiper-button-prev"
        }), r.createElement("div", {
          ref: z,
          className: "swiper-button-next"
        })), u(I) && r.createElement("div", {
          ref: V,
          className: "swiper-scrollbar"
        }), l(I) && r.createElement("div", {
          ref: R,
          className: "swiper-pagination"
        }), U["container-end"]))
      }));

      function x() {
        return x = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, x.apply(this, arguments)
      }
      w.displayName = "Swiper";
      const _ = (0, r.forwardRef)((function(e, t) {
        let {
          tag: n = "div",
          children: i,
          className: o = "",
          swiper: a,
          zoom: s,
          virtualIndex: l,
          ...u
        } = void 0 === e ? {} : e;
        const d = (0, r.useRef)(null),
          [f, p] = (0, r.useState)("swiper-slide");

        function h(e, t, n) {
          t === d.current && p(n)
        }
        g((() => {
          if (t && (t.current = d.current), d.current && a) {
            if (!a.destroyed) return a.on("_slideClass", h), () => {
              a && a.off("_slideClass", h)
            };
            "swiper-slide" !== f && p("swiper-slide")
          }
        })), g((() => {
          a && d.current && !a.destroyed && p(a.getSlideClasses(d.current))
        }), [a]);
        const m = {
            isActive: f.indexOf("swiper-slide-active") >= 0 || f.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: f.indexOf("swiper-slide-duplicate") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0 || f.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0 || f.indexOf("swiper-slide-duplicate-next") >= 0
          },
          y = () => "function" == typeof i ? i(m) : i;
        return r.createElement(n, x({
          ref: d,
          className: c(`${f}${o?` ${o}`:""}`),
          "data-swiper-slide-index": l
        }, u), r.createElement(v.Provider, {
          value: m
        }, s ? r.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof s ? s : void 0
        }, y()) : y()))
      }));
      _.displayName = "SwiperSlide"
    },
    3118: (e, t, n) => {
      "use strict";

      function r(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && i(e[n], t[n])
        }))
      }
      n.d(t, {
        Qr: () => Q,
        W_: () => q,
        ZP: () => X
      });
      const o = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return i(e, o), e
      }
      const s = {
        document: o,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, s), e
      }
      class u extends Array {
        constructor(e) {
          "number" == typeof e ? super(e) : (super(...e || []), function(e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e
              }
            })
          }(this))
        }
      }

      function c() {
        const e = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t => {
          Array.isArray(t) ? e.push(...c(t)) : e.push(t)
        })), e
      }

      function d(e, t) {
        return Array.prototype.filter.call(e, t)
      }

      function f(e, t) {
        const n = l(),
          r = a();
        let i = [];
        if (!t && e instanceof u) return e;
        if (!e) return new u(i);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
            const t = r.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
          } else i = function(e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              r = t.querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) n.push(r[e]);
            return n
          }(e.trim(), t || r)
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof u) return e;
          i = e
        }
        return new u(function(e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
        }(i))
      }
      f.fn = u.prototype;
      const p = "resize scroll".split(" ");

      function h(e) {
        return function() {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          if (void 0 === n[0]) {
            for (let t = 0; t < this.length; t += 1) p.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
            return this
          }
          return this.on(e, ...n)
        }
      }
      h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
      const m = {
        addClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = c(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.add(...r)
          })), this
        },
        removeClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = c(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.remove(...r)
          })), this
        },
        hasClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = c(t.map((e => e.split(" "))));
          return d(this, (e => r.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = c(t.map((e => e.split(" "))));
          this.forEach((e => {
            r.forEach((t => {
              e.classList.toggle(t)
            }))
          }))
        },
        attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
          return this
        },
        removeAttr: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this
        },
        transform: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this
        },
        transition: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
          return this
        },
        on: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          let [r, i, o, a] = t;

          function s(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if (n.indexOf(e) < 0 && n.unshift(e), f(t).is(i)) o.apply(t, n);
            else {
              const e = f(t).parents();
              for (let t = 0; t < e.length; t += 1) f(e[t]).is(i) && o.apply(e[t], n)
            }
          }

          function l(e) {
            const t = e && e.target && e.target.dom7EventData || [];
            t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t)
          }
          "function" == typeof t[1] && ([r, o, a] = t, i = void 0), a || (a = !1);
          const u = r.split(" ");
          let c;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (c = 0; c < u.length; c += 1) {
                const e = u[c];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                  listener: o,
                  proxyListener: s
                }), t.addEventListener(e, s, a)
              } else
                for (c = 0; c < u.length; c += 1) {
                  const e = u[c];
                  t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                    listener: o,
                    proxyListener: l
                  }), t.addEventListener(e, l, a)
                }
          }
          return this
        },
        off: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          let [r, i, o, a] = t;
          "function" == typeof t[1] && ([r, o, a] = t, i = void 0), a || (a = !1);
          const s = r.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const n = this[e];
              let r;
              if (!i && n.dom7Listeners ? r = n.dom7Listeners[t] : i && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]), r && r.length)
                for (let e = r.length - 1; e >= 0; e -= 1) {
                  const i = r[e];
                  o && i.listener === o || o && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === o ? (n.removeEventListener(t, i.proxyListener, a), r.splice(e, 1)) : o || (n.removeEventListener(t, i.proxyListener, a), r.splice(e, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const e = l();
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          const i = n[0].split(" "),
            o = n[1];
          for (let t = 0; t < i.length; t += 1) {
            const r = i[t];
            for (let t = 0; t < this.length; t += 1) {
              const i = this[t];
              if (e.CustomEvent) {
                const t = new e.CustomEvent(r, {
                  detail: o,
                  bubbles: !0,
                  cancelable: !0
                });
                i.dom7EventData = n.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function n(r) {
            r.target === this && (e.call(this, r), t.off("transitionend", n))
          })), this
        },
        outerWidth: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
          }
          return null
        },
        styles: function() {
          const e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const e = l(),
              t = a(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = t.body,
              o = n.clientTop || i.clientTop || 0,
              s = n.clientLeft || i.clientLeft || 0,
              u = n === e ? e.scrollY : n.scrollTop,
              c = n === e ? e.scrollX : n.scrollLeft;
            return {
              top: r.top + u - o,
              left: r.left + c - s
            }
          }
          return null
        },
        css: function(e, t) {
          const n = l();
          let r;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (r = 0; r < this.length; r += 1)
                for (const t in e) this[r].style[t] = e[t];
              return this
            }
            if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
            return this
          }
          return this
        },
        each: function(e) {
          return e ? (this.forEach(((t, n) => {
            e.apply(t, [t, n])
          })), this) : this
        },
        html: function(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this
        },
        text: function(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this
        },
        is: function(e) {
          const t = l(),
            n = a(),
            r = this[0];
          let i, o;
          if (!r || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (i = f(e), o = 0; o < i.length; o += 1)
              if (i[o] === r) return !0;
            return !1
          }
          if (e === n) return r === n;
          if (e === t) return r === t;
          if (e.nodeType || e instanceof u) {
            for (i = e.nodeType ? [e] : e, o = 0; o < i.length; o += 1)
              if (i[o] === r) return !0;
            return !1
          }
          return !1
        },
        index: function() {
          let e, t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
            return e
          }
        },
        eq: function(e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return f([]);
          if (e < 0) {
            const n = t + e;
            return f(n < 0 ? [] : [this[n]])
          }
          return f([this[e]])
        },
        append: function() {
          let e;
          const t = a();
          for (let n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (let n = 0; n < this.length; n += 1)
              if ("string" == typeof e) {
                const r = t.createElement("div");
                for (r.innerHTML = e; r.firstChild;) this[n].appendChild(r.firstChild)
              } else if (e instanceof u)
              for (let t = 0; t < e.length; t += 1) this[n].appendChild(e[t]);
            else this[n].appendChild(e)
          }
          return this
        },
        prepend: function(e) {
          const t = a();
          let n, r;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const i = t.createElement("div");
              for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
            } else if (e instanceof u)
            for (r = 0; r < e.length; r += 1) this[n].insertBefore(e[r], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
          return this
        },
        next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e) ? f([this[0].nextElementSibling]) : f([]) : this[0].nextElementSibling ? f([this[0].nextElementSibling]) : f([]) : f([])
        },
        nextAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return f([]);
          for (; n.nextElementSibling;) {
            const r = n.nextElementSibling;
            e ? f(r).is(e) && t.push(r) : t.push(r), n = r
          }
          return f(t)
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e ? t.previousElementSibling && f(t.previousElementSibling).is(e) ? f([t.previousElementSibling]) : f([]) : t.previousElementSibling ? f([t.previousElementSibling]) : f([])
          }
          return f([])
        },
        prevAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return f([]);
          for (; n.previousElementSibling;) {
            const r = n.previousElementSibling;
            e ? f(r).is(e) && t.push(r) : t.push(r), n = r
          }
          return f(t)
        },
        parent: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? f(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
          return f(t)
        },
        parents: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let r = this[n].parentNode;
            for (; r;) e ? f(r).is(e) && t.push(r) : t.push(r), r = r.parentNode
          }
          return f(t)
        },
        closest: function(e) {
          let t = this;
          return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) t.push(r[e])
          }
          return f(t)
        },
        children: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].children;
            for (let n = 0; n < r.length; n += 1) e && !f(r[n]).is(e) || t.push(r[n])
          }
          return f(t)
        },
        filter: function(e) {
          return f(d(this, e))
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        }
      };
      Object.keys(m).forEach((e => {
        Object.defineProperty(f.fn, e, {
          value: m[e],
          writable: !0
        })
      }));
      const g = f;

      function v(e) {
        return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }

      function y() {
        return Date.now()
      }

      function b(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function w() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && (n = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
            const n = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                o = Object.getOwnPropertyDescriptor(i, r);
              void 0 !== o && o.enumerable && (b(e[r]) && b(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : w(e[r], i[r]) : !b(e[r]) && b(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : w(e[r], i[r])) : e[r] = i[r])
            }
          }
        }
        var n;
        return e
      }

      function x(e, t, n) {
        e.style.setProperty(t, n)
      }

      function _(e) {
        let {
          swiper: t,
          targetPosition: n,
          side: r
        } = e;
        const i = l(),
          o = -t.translate;
        let a, s = null;
        const u = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = n > o ? "next" : "prev",
          d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          f = () => {
            a = (new Date).getTime(), null === s && (s = a);
            const e = Math.max(Math.min((a - s) / u, 1), 0),
              l = .5 - Math.cos(e * Math.PI) / 2;
            let c = o + l * (n - o);
            if (d(c, n) && (c = n), t.wrapperEl.scrollTo({
                [r]: c
              }), d(c, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: c
              })
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(f)
          };
        f()
      }
      let S, k, T;

      function E() {
        return S || (S = function() {
          const e = l(),
            t = a();
          return {
            smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
            passiveListener: function() {
              let t = !1;
              try {
                const n = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0
                  }
                });
                e.addEventListener("testPassiveListener", null, n)
              } catch (e) {}
              return t
            }(),
            gestures: "ongesturestart" in e
          }
        }()), S
      }
      const C = {
          on(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;
            const i = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
            })), r
          },
          once(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;

            function i() {
              r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
              for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
              t.apply(r, o)
            }
            return i.__emitterProxy = t, r.on(e, i, n)
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const r = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
          },
          off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
              void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, i) => {
                (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
              }))
            })), n) : n
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, r;
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            return "string" == typeof o[0] || Array.isArray(o[0]) ? (t = o[0], n = o.slice(1, o.length), r = e) : (t = o[0].events, n = o[0].data, r = o[0].context || e), n.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                e.apply(r, [t, ...n])
              })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                e.apply(r, n)
              }))
            })), e
          }
        },
        P = {
          updateSize: function() {
            const e = this;
            let t, n;
            const r = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n
            }))
          },
          updateSlides: function() {
            const e = this;

            function t(t) {
              return e.isHorizontal() ? t : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
              } [t]
            }

            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0)
            }
            const r = e.params,
              {
                $wrapperEl: i,
                size: o,
                rtlTranslate: a,
                wrongRTL: s
              } = e,
              l = e.virtual && r.virtual.enabled,
              u = l ? e.virtual.slides.length : e.slides.length,
              c = i.children(`.${e.params.slideClass}`),
              d = l ? e.virtual.slides.length : c.length;
            let f = [];
            const p = [],
              h = [];
            let m = r.slidesOffsetBefore;
            "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
            let g = r.slidesOffsetAfter;
            "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              y = e.slidesGrid.length;
            let b = r.spaceBetween,
              w = -m,
              _ = 0,
              S = 0;
            if (void 0 === o) return;
            "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * o), e.virtualSize = -b, a ? c.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : c.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), r.centeredSlides && r.cssMode && (x(e.wrapperEl, "--swiper-centered-offset-before", ""), x(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const k = r.grid && r.grid.rows > 1 && e.grid;
            let T;
            k && e.grid.initSlides(d);
            const E = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < d; i += 1) {
              T = 0;
              const a = c.eq(i);
              if (k && e.grid.updateSlide(i, a, d, t), "none" !== a.css("display")) {
                if ("auto" === r.slidesPerView) {
                  E && (c[i].style[t("width")] = "");
                  const o = getComputedStyle(a[0]),
                    s = a[0].style.transform,
                    l = a[0].style.webkitTransform;
                  if (s && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), r.roundLengths) T = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                  else {
                    const e = n(o, "width"),
                      t = n(o, "padding-left"),
                      r = n(o, "padding-right"),
                      i = n(o, "margin-left"),
                      s = n(o, "margin-right"),
                      l = o.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) T = e + i + s;
                    else {
                      const {
                        clientWidth: n,
                        offsetWidth: o
                      } = a[0];
                      T = e + t + r + i + s + (o - n)
                    }
                  }
                  s && (a[0].style.transform = s), l && (a[0].style.webkitTransform = l), r.roundLengths && (T = Math.floor(T))
                } else T = (o - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (T = Math.floor(T)), c[i] && (c[i].style[t("width")] = `${T}px`);
                c[i] && (c[i].swiperSlideSize = T), h.push(T), r.centeredSlides ? (w = w + T / 2 + _ / 2 + b, 0 === _ && 0 !== i && (w = w - o / 2 - b), 0 === i && (w = w - o / 2 - b), Math.abs(w) < .001 && (w = 0), r.roundLengths && (w = Math.floor(w)), S % r.slidesPerGroup == 0 && f.push(w), p.push(w)) : (r.roundLengths && (w = Math.floor(w)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup == 0 && f.push(w), p.push(w), w = w + T + b), e.virtualSize += T + b, _ = T, S += 1
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, o) + g, a && s && ("slide" === r.effect || "coverflow" === r.effect) && i.css({
                width: `${e.virtualSize+r.spaceBetween}px`
              }), r.setWrapperSize && i.css({
                [t("width")]: `${e.virtualSize+r.spaceBetween}px`
              }), k && e.grid.updateWrapperSize(T, f, t), !r.centeredSlides) {
              const t = [];
              for (let n = 0; n < f.length; n += 1) {
                let i = f[n];
                r.roundLengths && (i = Math.floor(i)), f[n] <= e.virtualSize - o && t.push(i)
              }
              f = t, Math.floor(e.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - o)
            }
            if (0 === f.length && (f = [0]), 0 !== r.spaceBetween) {
              const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
              c.filter(((e, t) => !r.cssMode || t !== c.length - 1)).css({
                [n]: `${b}px`
              })
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              let e = 0;
              h.forEach((t => {
                e += t + (r.spaceBetween ? r.spaceBetween : 0)
              })), e -= r.spaceBetween;
              const t = e - o;
              f = f.map((e => e < 0 ? -m : e > t ? t + g : e))
            }
            if (r.centerInsufficientSlides) {
              let e = 0;
              if (h.forEach((t => {
                  e += t + (r.spaceBetween ? r.spaceBetween : 0)
                })), e -= r.spaceBetween, e < o) {
                const t = (o - e) / 2;
                f.forEach(((e, n) => {
                  f[n] = e - t
                })), p.forEach(((e, n) => {
                  p[n] = e + t
                }))
              }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: p,
                slidesSizesGrid: h
              }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
              x(e.wrapperEl, "--swiper-centered-offset-before", -f[0] + "px"), x(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
            }
            if (d !== u && e.emit("slidesLengthChange"), f.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), !(l || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
              const t = `${r.containerModifierClass}backface-hidden`,
                n = e.$el.hasClass(t);
              d <= r.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
            }
          },
          updateAutoHeight: function(e) {
            const t = this,
              n = [],
              r = t.virtual && t.params.virtual.enabled;
            let i, o = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const a = e => r ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                n.push(e)
              }));
              else
                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                  const e = t.activeIndex + i;
                  if (e > t.slides.length && !r) break;
                  n.push(a(e))
                } else n.push(a(t.activeIndex));
            for (i = 0; i < n.length; i += 1)
              if (void 0 !== n[i]) {
                const e = n[i].offsetHeight;
                o = e > o ? e : o
              }(o || 0 === o) && t.$wrapperEl.css("height", `${o}px`)
          },
          updateSlidesOffset: function() {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
          },
          updateSlidesProgress: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0;
            const t = this,
              n = t.params,
              {
                slides: r,
                rtlTranslate: i,
                snapGrid: o
              } = t;
            if (0 === r.length) return;
            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            i && (a = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < r.length; e += 1) {
              const s = r[e];
              let l = s.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
              const u = (a + (n.centeredSlides ? t.minTranslate() : 0) - l) / (s.swiperSlideSize + n.spaceBetween),
                c = (a - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (s.swiperSlideSize + n.spaceBetween),
                d = -(a - l),
                f = d + t.slidesSizesGrid[e];
              (d >= 0 && d < t.size - 1 || f > 1 && f <= t.size || d <= 0 && f >= t.size) && (t.visibleSlides.push(s), t.visibleSlidesIndexes.push(e), r.eq(e).addClass(n.slideVisibleClass)), s.progress = i ? -u : u, s.originalProgress = i ? -c : c
            }
            t.visibleSlides = g(t.visibleSlides)
          },
          updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = t && t.translate && t.translate * n || 0
            }
            const n = t.params,
              r = t.maxTranslate() - t.minTranslate();
            let {
              progress: i,
              isBeginning: o,
              isEnd: a
            } = t;
            const s = o,
              l = a;
            0 === r ? (i = 0, o = !0, a = !0) : (i = (e - t.minTranslate()) / r, o = i <= 0, a = i >= 1), Object.assign(t, {
              progress: i,
              isBeginning: o,
              isEnd: a
            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !s && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (s && !o || l && !a) && t.emit("fromEdge"), t.emit("progress", i)
          },
          updateSlidesClasses: function() {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: r,
                activeIndex: i,
                realIndex: o
              } = e,
              a = e.virtual && n.virtual.enabled;
            let s;
            t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), s = a ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), s.addClass(n.slideActiveClass), n.loop && (s.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));
            let l = s.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
            let u = s.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === u.length && (u = t.eq(-1), u.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), u.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
          },
          updateActiveIndex: function(e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: r,
                snapGrid: i,
                params: o,
                activeIndex: a,
                realIndex: s,
                snapIndex: l
              } = t;
            let u, c = e;
            if (void 0 === c) {
              for (let e = 0; e < r.length; e += 1) void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? c = e : n >= r[e] && n < r[e + 1] && (c = e + 1) : n >= r[e] && (c = e);
              o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(n) >= 0) u = i.indexOf(n);
            else {
              const e = Math.min(o.slidesPerGroupSkip, c);
              u = e + Math.floor((c - e) / o.slidesPerGroup)
            }
            if (u >= i.length && (u = i.length - 1), c === a) return void(u !== l && (t.snapIndex = u, t.emit("snapIndexChange")));
            const d = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
              snapIndex: u,
              realIndex: d,
              previousIndex: a,
              activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), s !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
          },
          updateClickedSlide: function(e) {
            const t = this,
              n = t.params,
              r = g(e).closest(`.${n.slideClass}`)[0];
            let i, o = !1;
            if (r)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === r) {
                  o = !0, i = e;
                  break
                } if (!r || !o) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
          }
        };

      function M(e) {
        let {
          swiper: t,
          runCallbacks: n,
          direction: r,
          step: i
        } = e;
        const {
          activeIndex: o,
          previousIndex: a
        } = t;
        let s = r;
        if (s || (s = o > a ? "next" : o < a ? "prev" : "reset"), t.emit(`transition${i}`), n && o !== a) {
          if ("reset" === s) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === s ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      const O = {
        slideTo: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const o = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: s,
            snapGrid: l,
            slidesGrid: u,
            previousIndex: c,
            activeIndex: d,
            rtlTranslate: f,
            wrapperEl: p,
            enabled: h
          } = o;
          if (o.animating && s.preventInteractionOnTransition || !h && !r && !i) return !1;
          const m = Math.min(o.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / o.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (s.normalizeSlideIndex)
            for (let e = 0; e < u.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * u[e]),
                r = Math.floor(100 * u[e + 1]);
              void 0 !== u[e + 1] ? t >= n && t < r - (r - n) / 2 ? a = e : t >= n && t < r && (a = e + 1) : t >= n && (a = e)
            }
          if (o.initialized && a !== d) {
            if (!o.allowSlideNext && v < o.translate && v < o.minTranslate()) return !1;
            if (!o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (d || 0) !== a) return !1
          }
          let y;
          if (a !== (c || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(v), y = a > d ? "next" : a < d ? "prev" : "reset", f && -v === o.translate || !f && v === o.translate) return o.updateActiveIndex(a), s.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== s.effect && o.setTranslate(v), "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)), !1;
          if (s.cssMode) {
            const e = o.isHorizontal(),
              n = f ? v : -v;
            if (0 === t) {
              const t = o.virtual && o.params.virtual.enabled;
              t && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), p[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
              }))
            } else {
              if (!o.support.smoothScroll) return _({
                swiper: o,
                targetPosition: n,
                side: e ? "left" : "top"
              }), !0;
              p.scrollTo({
                [e ? "left" : "top"]: n,
                behavior: "smooth"
              })
            }
            return !0
          }
          return o.setTransition(t), o.setTranslate(v), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, y), 0 === t ? o.transitionEnd(n, y) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
            o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, y))
          }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const i = this;
          let o = e;
          return i.params.loop && (o += i.loopedSlides), i.slideTo(o, t, n, r)
        },
        slideNext: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const r = this,
            {
              animating: i,
              enabled: o,
              params: a
            } = r;
          if (!o) return r;
          let s = a.slidesPerGroup;
          "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < a.slidesPerGroupSkip ? 1 : s;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
          }
          return a.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
        },
        slidePrev: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const r = this,
            {
              params: i,
              animating: o,
              snapGrid: a,
              slidesGrid: s,
              rtlTranslate: l,
              enabled: u
            } = r;
          if (!u) return r;
          if (i.loop) {
            if (o && i.loopPreventsSlide) return !1;
            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
          }

          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const d = c(l ? r.translate : -r.translate),
            f = a.map((e => c(e)));
          let p = a[f.indexOf(d) - 1];
          if (void 0 === p && i.cssMode) {
            let e;
            a.forEach(((t, n) => {
              d >= t && (e = n)
            })), void 0 !== e && (p = a[e > 0 ? e - 1 : e])
          }
          let h = 0;
          if (void 0 !== p && (h = s.indexOf(p), h < 0 && (h = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && r.isBeginning) {
            const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
            return r.slideTo(i, e, t, n)
          }
          return r.slideTo(h, e, t, n)
        },
        slideReset: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          const i = this;
          let o = i.activeIndex;
          const a = Math.min(i.params.slidesPerGroupSkip, o),
            s = a + Math.floor((o - a) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[s]) {
            const e = i.snapGrid[s];
            l - e > (i.snapGrid[s + 1] - e) * r && (o += i.params.slidesPerGroup)
          } else {
            const e = i.snapGrid[s - 1];
            l - e <= (i.snapGrid[s] - e) * r && (o -= i.params.slidesPerGroup)
          }
          return o = Math.max(o, 0), o = Math.min(o, i.slidesGrid.length - 1), i.slideTo(o, e, t, n)
        },
        slideToClickedSlide: function() {
          const e = this,
            {
              params: t,
              $wrapperEl: n
            } = e,
            r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let i, o = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            i = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? o < e.loopedSlides - r / 2 || o > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
              e.slideTo(o)
            }))) : e.slideTo(o) : o > e.slides.length - r ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
              e.slideTo(o)
            }))) : e.slideTo(o)
          } else e.slideTo(o)
        }
      };

      function A(e) {
        const t = this,
          n = a(),
          r = l(),
          i = t.touchEventsData,
          {
            params: o,
            touches: s,
            enabled: u
          } = t;
        if (!u) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let d = g(c.target);
        if ("wrapper" === o.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
        if (i.isTouchEvent = "touchstart" === c.type, !i.isTouchEvent && "which" in c && 3 === c.which) return;
        if (!i.isTouchEvent && "button" in c && c.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const f = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = e.composedPath ? e.composedPath() : e.path;
        f && c.target && c.target.shadowRoot && p && (d = g(p[0]));
        const h = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          m = !(!c.target || !c.target.shadowRoot);
        if (o.noSwiping && (m ? function(e) {
            return function t(n) {
              if (!n || n === a() || n === l()) return null;
              n.assignedSlot && (n = n.assignedSlot);
              const r = n.closest(e);
              return r || n.getRootNode ? r || t(n.getRootNode().host) : null
            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)
          }(h, d[0]) : d.closest(h)[0])) return void(t.allowClick = !0);
        if (o.swipeHandler && !d.closest(o.swipeHandler)[0]) return;
        s.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, s.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
        const v = s.currentX,
          b = s.currentY,
          w = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
          x = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (w && (v <= x || v >= r.innerWidth - x)) {
          if ("prevent" !== w) return;
          e.preventDefault()
        }
        if (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), s.startX = v, s.startY = b, i.touchStartTime = y(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== c.type) {
          let e = !0;
          d.is(i.focusableElements) && (e = !1, "SELECT" === d[0].nodeName && (i.isTouched = !1)), n.activeElement && g(n.activeElement).is(i.focusableElements) && n.activeElement !== d[0] && n.activeElement.blur();
          const r = e && t.allowTouchMove && o.touchStartPreventDefault;
          !o.touchStartForcePreventDefault && !r || d[0].isContentEditable || c.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
      }

      function L(e) {
        const t = a(),
          n = this,
          r = n.touchEventsData,
          {
            params: i,
            touches: o,
            rtlTranslate: s,
            enabled: l
          } = n;
        if (!l) return;
        let u = e;
        if (u.originalEvent && (u = u.originalEvent), !r.isTouched) return void(r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", u));
        if (r.isTouchEvent && "touchmove" !== u.type) return;
        const c = "touchmove" === u.type && u.targetTouches && (u.targetTouches[0] || u.changedTouches[0]),
          d = "touchmove" === u.type ? c.pageX : u.pageX,
          f = "touchmove" === u.type ? c.pageY : u.pageY;
        if (u.preventedByNestedSwiper) return o.startX = d, void(o.startY = f);
        if (!n.allowTouchMove) return g(u.target).is(r.focusableElements) || (n.allowClick = !1), void(r.isTouched && (Object.assign(o, {
          startX: d,
          startY: f,
          currentX: d,
          currentY: f
        }), r.touchStartTime = y()));
        if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (n.isVertical()) {
            if (f < o.startY && n.translate <= n.maxTranslate() || f > o.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
          } else if (d < o.startX && n.translate <= n.maxTranslate() || d > o.startX && n.translate >= n.minTranslate()) return;
        if (r.isTouchEvent && t.activeElement && u.target === t.activeElement && g(u.target).is(r.focusableElements)) return r.isMoved = !0, void(n.allowClick = !1);
        if (r.allowTouchCallbacks && n.emit("touchMove", u), u.targetTouches && u.targetTouches.length > 1) return;
        o.currentX = d, o.currentY = f;
        const p = o.currentX - o.startX,
          h = o.currentY - o.startY;
        if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold) return;
        if (void 0 === r.isScrolling) {
          let e;
          n.isHorizontal() && o.currentY === o.startY || n.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : p * p + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (r.isScrolling && n.emit("touchMoveOpposite", u), void 0 === r.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1);
        if (!r.startMoving) return;
        n.allowClick = !1, !i.cssMode && u.cancelable && u.preventDefault(), i.touchMoveStopPropagation && !i.nested && u.stopPropagation(), r.isMoved || (i.loop && !i.cssMode && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", u)), n.emit("sliderMove", u), r.isMoved = !0;
        let m = n.isHorizontal() ? p : h;
        o.diff = m, m *= i.touchRatio, s && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", r.currentTranslate = m + r.startTranslate;
        let v = !0,
          b = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (b = 0), m > 0 && r.currentTranslate > n.minTranslate() ? (v = !1, i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** b)) : m < 0 && r.currentTranslate < n.maxTranslate() && (v = !1, i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** b)), v && (u.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), i.threshold > 0) {
          if (!(Math.abs(m) > i.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove) return r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, void(o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
      }

      function D(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: r,
            touches: i,
            rtlTranslate: o,
            slidesGrid: a,
            enabled: s
          } = t;
        if (!s) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = y(),
          c = u - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || l.composedPath && l.composedPath();
          t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = y(), v((() => {
            t.destroyed || (t.allowClick = !0)
          })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let d;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = r.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, r.cssMode) return;
        if (t.params.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: d
        });
        let f = 0,
          p = t.slidesSizesGrid[0];
        for (let e = 0; e < a.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
          const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
          void 0 !== a[e + t] ? d >= a[e] && d < a[e + t] && (f = e, p = a[e + t] - a[e]) : d >= a[e] && (f = e, p = a[a.length - 1] - a[a.length - 2])
        }
        let h = null,
          m = null;
        r.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
        const g = (d - a[f]) / p,
          b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (c > r.longSwipesMs) {
          if (!r.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (g >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? h : f + b) : t.slideTo(f)), "prev" === t.swipeDirection && (g > 1 - r.longSwipesRatio ? t.slideTo(f + b) : null !== m && g < 0 && Math.abs(g) > r.longSwipesRatio ? t.slideTo(m) : t.slideTo(f))
        } else {
          if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== h ? h : f + b), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : f)) : l.target === t.navigation.nextEl ? t.slideTo(f + b) : t.slideTo(f)
        }
      }

      function z() {
        const e = this,
          {
            params: t,
            el: n
          } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: r,
          allowSlidePrev: i,
          snapGrid: o
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
      }

      function N(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function R() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: n,
            enabled: r
          } = e;
        if (!r) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const o = e.maxTranslate() - e.minTranslate();
        i = 0 === o ? 0 : (e.translate - e.minTranslate()) / o, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }
      let V = !1;

      function I() {}
      const F = (e, t) => {
          const n = a(),
            {
              params: r,
              touchEvents: i,
              el: o,
              wrapperEl: s,
              device: l,
              support: u
            } = e,
            c = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            f = t;
          if (u.touch) {
            const t = !("touchstart" !== i.start || !u.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            o[d](i.start, e.onTouchStart, t), o[d](i.move, e.onTouchMove, u.passiveListener ? {
              passive: !1,
              capture: c
            } : c), o[d](i.end, e.onTouchEnd, t), i.cancel && o[d](i.cancel, e.onTouchEnd, t)
          } else o[d](i.start, e.onTouchStart, !1), n[d](i.move, e.onTouchMove, c), n[d](i.end, e.onTouchEnd, !1);
          (r.preventClicks || r.preventClicksPropagation) && o[d]("click", e.onClick, !0), r.cssMode && s[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[f](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[f]("observerUpdate", z, !0)
        },
        B = {
          attachEvents: function() {
            const e = this,
              t = a(),
              {
                params: n,
                support: r
              } = e;
            e.onTouchStart = A.bind(e), e.onTouchMove = L.bind(e), e.onTouchEnd = D.bind(e), n.cssMode && (e.onScroll = R.bind(e)), e.onClick = N.bind(e), r.touch && !V && (t.addEventListener("touchstart", I), V = !0), F(e, "on")
          },
          detachEvents: function() {
            F(this, "off")
          }
        },
        j = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        $ = {
          addClasses: function() {
            const e = this,
              {
                classNames: t,
                params: n,
                rtl: r,
                $el: i,
                device: o,
                support: a
              } = e,
              s = function(e, t) {
                const n = [];
                return e.forEach((e => {
                  "object" == typeof e ? Object.keys(e).forEach((r => {
                    e[r] && n.push(t + r)
                  })) : "string" == typeof e && n.push(t + e)
                })), n
              }(["initialized", n.direction, {
                "pointer-events": !a.touch
              }, {
                "free-mode": e.params.freeMode && n.freeMode.enabled
              }, {
                autoheight: n.autoHeight
              }, {
                rtl: r
              }, {
                grid: n.grid && n.grid.rows > 1
              }, {
                "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
              }, {
                android: o.android
              }, {
                ios: o.ios
              }, {
                "css-mode": n.cssMode
              }, {
                centered: n.cssMode && n.centeredSlides
              }, {
                "watch-progress": n.watchSlidesProgress
              }], n.containerModifierClass);
            t.push(...s), i.addClass([...t].join(" ")), e.emitContainerClasses()
          },
          removeClasses: function() {
            const {
              $el: e,
              classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
          }
        },
        U = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: .85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopedSlidesLimit: !0,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
        };

      function H(e, t) {
        return function() {
          let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const r = Object.keys(n)[0],
            i = n[r];
          "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {
            auto: !0
          }), r in e && "enabled" in i ? (!0 === e[r] && (e[r] = {
            enabled: !0
          }), "object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
            enabled: !1
          }), w(t, n)) : w(t, n)) : w(t, n)
        }
      }
      const W = {
          eventsEmitter: C,
          update: P,
          translate: {
            getTranslate: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y";
              const {
                params: t,
                rtlTranslate: n,
                translate: r,
                $wrapperEl: i
              } = this;
              if (t.virtualTranslate) return n ? -r : r;
              if (t.cssMode) return r;
              let o = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
                const n = l();
                let r, i, o;
                const a = function(e) {
                  const t = l();
                  let n;
                  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                }(e);
                return n.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), o = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = o.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? o.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = n.WebKitCSSMatrix ? o.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
              }(i[0], e);
              return n && (o = -o), o || 0
            },
            setTranslate: function(e, t) {
              const n = this,
                {
                  rtlTranslate: r,
                  params: i,
                  $wrapperEl: o,
                  wrapperEl: a,
                  progress: s
                } = n;
              let l, u = 0,
                c = 0;
              n.isHorizontal() ? u = r ? -e : e : c = e, i.roundLengths && (u = Math.floor(u), c = Math.floor(c)), i.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -u : -c : i.virtualTranslate || o.transform(`translate3d(${u}px, ${c}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? u : c;
              const d = n.maxTranslate() - n.minTranslate();
              l = 0 === d ? 0 : (e - n.minTranslate()) / d, l !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                i = arguments.length > 4 ? arguments[4] : void 0;
              const o = this,
                {
                  params: a,
                  wrapperEl: s
                } = o;
              if (o.animating && a.preventInteractionOnTransition) return !1;
              const l = o.minTranslate(),
                u = o.maxTranslate();
              let c;
              if (c = r && e > l ? l : r && e < u ? u : e, o.updateProgress(c), a.cssMode) {
                const e = o.isHorizontal();
                if (0 === t) s[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!o.support.smoothScroll) return _({
                    swiper: o,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  s.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (o.setTransition(0), o.setTranslate(c), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(c), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, n && o.emit("transitionEnd"))
              }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
            },
            transitionStart: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const n = this,
                {
                  params: r
                } = n;
              r.cssMode || (r.autoHeight && n.updateAutoHeight(), M({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const n = this,
                {
                  params: r
                } = n;
              n.animating = !1, r.cssMode || (n.setTransition(0), M({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: O,
          loop: {
            loopCreate: function() {
              const e = this,
                t = a(),
                {
                  params: n,
                  $wrapperEl: r
                } = e,
                i = r.children().length > 0 ? g(r.children()[0].parentNode) : r;
              i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
              let o = i.children(`.${n.slideClass}`);
              if (n.loopFillGroupWithBlank) {
                const e = n.slidesPerGroup - o.length % n.slidesPerGroup;
                if (e !== n.slidesPerGroup) {
                  for (let r = 0; r < e; r += 1) {
                    const e = g(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                    i.append(e)
                  }
                  o = i.children(`.${n.slideClass}`)
                }
              }
              "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = o.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > o.length && e.params.loopedSlidesLimit && (e.loopedSlides = o.length);
              const s = [],
                l = [];
              o.each(((e, t) => {
                g(e).attr("data-swiper-slide-index", t)
              }));
              for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / o.length) * o.length;
                l.push(o.eq(e)[0]), s.unshift(o.eq(o.length - e - 1)[0])
              }
              for (let e = 0; e < l.length; e += 1) i.append(g(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
              for (let e = s.length - 1; e >= 0; e -= 1) i.prepend(g(s[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: n,
                loopedSlides: r,
                allowSlidePrev: i,
                allowSlideNext: o,
                snapGrid: a,
                rtlTranslate: s
              } = e;
              let l;
              e.allowSlidePrev = !0, e.allowSlideNext = !0;
              const u = -a[t] - e.getTranslate();
              t < r ? (l = n.length - 3 * r + t, l += r, e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((s ? -e.translate : e.translate) - u)) : t >= n.length - r && (l = -n.length + t + r, l += r, e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((s ? -e.translate : e.translate) - u)), e.allowSlidePrev = i, e.allowSlideNext = o, e.emit("loopFix")
            },
            loopDestroy: function() {
              const {
                $wrapperEl: e,
                params: t,
                slides: n
              } = this;
              e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
            }
          },
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
              const e = this;
              e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
          },
          events: B,
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: r = 0,
                  params: i,
                  $el: o
                } = e,
                a = i.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const s = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!s || e.currentBreakpoint === s) return;
              const l = (s in a ? a[s] : void 0) || e.originalParams,
                u = j(e, i),
                c = j(e, l),
                d = i.enabled;
              u && !c ? (o.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && c && (o.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && o.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                const n = i[t] && i[t].enabled,
                  r = l[t] && l[t].enabled;
                n && !r && e[t].disable(), !n && r && e[t].enable()
              }));
              const f = l.direction && l.direction !== i.direction,
                p = i.loop && (l.slidesPerView !== i.slidesPerView || f);
              f && n && e.changeDirection(), w(e.params, l);
              const h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), d && !h ? e.disable() : !d && h && e.enable(), e.currentBreakpoint = s, e.emit("_beforeBreakpoint", l), p && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                n = arguments.length > 2 ? arguments[2] : void 0;
              if (!e || "container" === t && !n) return;
              let r = !1;
              const i = l(),
                o = "window" === t ? i.innerHeight : n.clientHeight,
                a = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: o * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < a.length; e += 1) {
                const {
                  point: o,
                  value: s
                } = a[e];
                "window" === t ? i.matchMedia(`(min-width: ${s}px)`).matches && (r = o) : s <= n.clientWidth && (r = o)
              }
              return r || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: n
                } = e,
                {
                  slidesOffsetBefore: r
                } = n;
              if (r) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > n
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: $,
          images: {
            loadImage: function(e, t, n, r, i, o) {
              const a = l();
              let s;

              function u() {
                o && o()
              }
              g(e).parent("picture")[0] || e.complete && i ? u() : t ? (s = new a.Image, s.onload = u, s.onerror = u, r && (s.sizes = r), n && (s.srcset = n), t && (s.src = t)) : u()
            },
            preloadImages: function() {
              const e = this;

              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const r = e.imagesToLoad[n];
                e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
              }
            }
          }
        },
        G = {};
      class Y {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          if (1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = w({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
            const e = [];
            return g(t.el).each((n => {
              const r = w({}, t, {
                el: n
              });
              e.push(new Y(r))
            })), e
          }
          const o = this;
          o.__swiper__ = !0, o.support = E(), o.device = function() {
            return k || (k = function() {
              let {
                userAgent: e
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const t = E(),
                n = l(),
                r = n.navigator.platform,
                i = e || n.navigator.userAgent,
                o = {
                  ios: !1,
                  android: !1
                },
                a = n.screen.width,
                s = n.screen.height,
                u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = i.match(/(iPad).*OS\s([\d_]+)/);
              const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === r;
              let h = "MacIntel" === r;
              return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${s}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), h = !1), u && !p && (o.os = "android", o.android = !0), (c || f || d) && (o.os = "ios", o.ios = !0), o
            }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})), k
          }({
            userAgent: t.userAgent
          }), o.browser = (T || (T = function() {
            const e = l();
            return {
              isSafari: function() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
          }()), T), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
          const a = {};
          o.modules.forEach((e => {
            e({
              swiper: o,
              extendParams: H(t, a),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o)
            })
          }));
          const s = w({}, U, a);
          return o.params = w({}, s, G, t), o.originalParams = w({}, o.params), o.passedParams = w({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
            o.on(e, o.params.on[e])
          })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = g, Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: g(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEvents: function() {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return o.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3]
              }, o.touchEventsDesktop = {
                start: t[0],
                move: t[1],
                end: t[2]
              }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: y(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), o.emit("_swiper"), o.params.init && o.init(), o
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            i = (n.maxTranslate() - r) * e + r;
          n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n => {
            const r = e.getSlideClasses(n);
            t.push({
              slideEl: n,
              classNames: r
            }), e.emit("_slideClass", n, r)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            params: n,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: o,
            size: a,
            activeIndex: s
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e, t = r[s].swiperSlideSize;
            for (let n = s + 1; n < r.length; n += 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > a && (e = !0));
            for (let n = s - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = s + 1; e < r.length; e += 1)(t ? i[e] + o[e] - i[s] < a : i[e] - i[s] < a) && (l += 1);
          else
            for (let e = s - 1; e >= 0; e -= 1) i[s] - i[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: n
          } = e;

          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            r = n.params.direction;
          return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), n.emit("changeDirection"), t && n.update()), n
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = g(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = g(e.shadowRoot.querySelector(r()));
              return t.children = e => n.children(e), t
            }
            return n.children ? n.children(r()) : g(n).children(r())
          })();
          if (0 === i.length && t.params.createElements) {
            const e = a().createElement("div");
            i = g(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
              i.append(e)
            }))
          }
          return Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display")
          }), !0
        }
        init(e) {
          const t = this;
          return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            {
              params: r,
              $el: i,
              $wrapperEl: o,
              slides: a
            } = n;
          return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
            n.off(e)
          })), !1 !== e && (n.$el[0].swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
          w(G, e)
        }
        static get extendedDefaults() {
          return G
        }
        static get defaults() {
          return U
        }
        static installModule(e) {
          Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
          const t = Y.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => Y.installModule(e))), Y) : (Y.installModule(e), Y)
        }
      }
      Object.keys(W).forEach((e => {
        Object.keys(W[e]).forEach((t => {
          Y.prototype[t] = W[e][t]
        }))
      })), Y.use([function(e) {
        let {
          swiper: t,
          on: n,
          emit: r
        } = e;
        const i = l();
        let o = null,
          a = null;
        const s = () => {
            t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
          },
          u = () => {
            t && !t.destroyed && t.initialized && r("orientationchange")
          };
        n("init", (() => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (o = new ResizeObserver((e => {
            a = i.requestAnimationFrame((() => {
              const {
                width: n,
                height: r
              } = t;
              let i = n,
                o = r;
              e.forEach((e => {
                let {
                  contentBoxSize: n,
                  contentRect: r,
                  target: a
                } = e;
                a && a !== t.el || (i = r ? r.width : (n[0] || n).inlineSize, o = r ? r.height : (n[0] || n).blockSize)
              })), i === n && o === r || s()
            }))
          })), o.observe(t.el)) : (i.addEventListener("resize", s), i.addEventListener("orientationchange", u))
        })), n("destroy", (() => {
          a && i.cancelAnimationFrame(a), o && o.unobserve && t.el && (o.unobserve(t.el), o = null), i.removeEventListener("resize", s), i.removeEventListener("orientationchange", u)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: n,
          on: r,
          emit: i
        } = e;
        const o = [],
          a = l(),
          s = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const t = function() {
                i("observerUpdate", e[0])
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
            }));
            n.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }), o.push(n)
          };
        n({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), r("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = t.$el.parents();
              for (let t = 0; t < e.length; t += 1) s(e[t])
            }
            s(t.$el[0], {
              childList: t.params.observeSlideChildren
            }), s(t.$wrapperEl[0], {
              attributes: !1
            })
          }
        })), r("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const X = Y;

      function q(e) {
        let {
          swiper: t,
          extendParams: n,
          on: r,
          emit: i
        } = e;

        function o(e) {
          let n;
          return e && (n = g(e), t.params.uniqueNavElements && "string" == typeof e && n.length > 1 && 1 === t.$el.find(e).length && (n = t.$el.find(e))), n
        }

        function s(e, n) {
          const r = t.params.navigation;
          e && e.length > 0 && (e[n ? "addClass" : "removeClass"](r.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](r.lockClass))
        }

        function l() {
          if (t.params.loop) return;
          const {
            $nextEl: e,
            $prevEl: n
          } = t.navigation;
          s(n, t.isBeginning && !t.params.rewind), s(e, t.isEnd && !t.params.rewind)
        }

        function u(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function d() {
          const e = t.params.navigation;
          if (t.params.navigation = function(e, t, n, r) {
              const i = a();
              return e.params.createElements && Object.keys(r).forEach((o => {
                if (!n[o] && !0 === n.auto) {
                  let a = e.$el.children(`.${r[o]}`)[0];
                  a || (a = i.createElement("div"), a.className = r[o], e.$el.append(a)), n[o] = a, t[o] = a
                }
              })), n
            }(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          const n = o(e.nextEl),
            r = o(e.prevEl);
          n && n.length > 0 && n.on("click", c), r && r.length > 0 && r.on("click", u), Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: r,
            prevEl: r && r[0]
          }), t.enabled || (n && n.addClass(e.lockClass), r && r.addClass(e.lockClass))
        }

        function f() {
          const {
            $nextEl: e,
            $prevEl: n
          } = t.navigation;
          e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), n && n.length && (n.off("click", u), n.removeClass(t.params.navigation.disabledClass))
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null
        }, r("init", (() => {
          !1 === t.params.navigation.enabled ? p() : (d(), l())
        })), r("toEdge fromEdge lock unlock", (() => {
          l()
        })), r("destroy", (() => {
          f()
        })), r("enable disable", (() => {
          const {
            $nextEl: e,
            $prevEl: n
          } = t.navigation;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), n && n[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), r("click", ((e, n) => {
          const {
            $nextEl: r,
            $prevEl: o
          } = t.navigation, a = n.target;
          if (t.params.navigation.hideOnClick && !g(a).is(o) && !g(a).is(r)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
            let e;
            r ? e = r.hasClass(t.params.navigation.hiddenClass) : o && (e = o.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), r && r.toggleClass(t.params.navigation.hiddenClass), o && o.toggleClass(t.params.navigation.hiddenClass)
          }
        }));
        const p = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), f()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass), d(), l()
          },
          disable: p,
          update: l,
          init: d,
          destroy: f
        })
      }

      function Q(e) {
        let {
          swiper: t,
          extendParams: n,
          on: r
        } = e;

        function i(e, t) {
          const n = function() {
            let e, t, n;
            return (r, i) => {
              for (t = -1, e = r.length; e - t > 1;) n = e + t >> 1, r[n] <= i ? t = n : e = n;
              return e
            }
          }();
          let r, i;
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (i = n(this.x, e), r = i - 1, (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0
          }, this
        }

        function o() {
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        n({
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        }), t.controller = {
          control: void 0
        }, r("beforeInit", (() => {
          t.controller.control = t.params.controller.control
        })), r("update", (() => {
          o()
        })), r("resize", (() => {
          o()
        })), r("observerUpdate", (() => {
          o()
        })), r("setTranslate", ((e, n, r) => {
          t.controller.control && t.controller.setTranslate(n, r)
        })), r("setTransition", ((e, n, r) => {
          t.controller.control && t.controller.setTransition(n, r)
        })), Object.assign(t.controller, {
          setTranslate: function(e, n) {
            const r = t.controller.control;
            let o, a;
            const s = t.constructor;

            function l(e) {
              const n = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by && (function(e) {
                t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
              }(e), a = -t.controller.spline.interpolate(-n)), a && "container" !== t.params.controller.by || (o = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), a = (n - t.minTranslate()) * o + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            if (Array.isArray(r))
              for (let e = 0; e < r.length; e += 1) r[e] !== n && r[e] instanceof s && l(r[e]);
            else r instanceof s && n !== r && l(r)
          },
          setTransition: function(e, n) {
            const r = t.constructor,
              i = t.controller.control;
            let o;

            function a(n) {
              n.setTransition(e, t), 0 !== e && (n.transitionStart(), n.params.autoHeight && v((() => {
                n.updateAutoHeight()
              })), n.$wrapperEl.transitionEnd((() => {
                i && (n.params.loop && "slide" === t.params.controller.by && n.loopFix(), n.transitionEnd())
              })))
            }
            if (Array.isArray(i))
              for (o = 0; o < i.length; o += 1) i[o] !== n && i[o] instanceof r && a(i[o]);
            else i instanceof r && n !== i && a(i)
          }
        })
      }
    },
    6864: (e, t, n) => {
      "use strict";
      n.d(t, {
        E: () => pa
      });
      var r = n(927);
      const i = (0, r.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        o = (0, r.createContext)({}),
        a = (0, r.createContext)(null),
        s = "undefined" != typeof document,
        l = s ? r.useLayoutEffect : r.useEffect,
        u = (0, r.createContext)({
          strict: !1
        });

      function c(e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function d(e) {
        return "string" == typeof e || Array.isArray(e)
      }

      function f(e) {
        return "object" == typeof e && "function" == typeof e.start
      }
      const p = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function h(e) {
        return f(e.animate) || p.some((t => d(e[t])))
      }

      function m(e) {
        return Boolean(h(e) || e.variants)
      }

      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      const v = e => ({
          isEnabled: t => e.some((e => !!t[e]))
        }),
        y = {
          measureLayout: v(["layout", "layoutId", "drag"]),
          animation: v(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: v(["exit"]),
          drag: v(["drag", "dragControls"]),
          focus: v(["whileFocus"]),
          hover: v(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: v(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: v(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: v(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function b(e) {
        const t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
      const w = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let x = 1;
      const _ = (0, r.createContext)({});
      class S extends r.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: e,
            props: t
          } = this.props;
          return e && e.setProps(t), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      const k = (0, r.createContext)({}),
        T = Symbol.for("motionComponentSymbol");

      function E({
        preloadedFeatures: e,
        createVisualElement: t,
        projectionNodeConstructor: n,
        useRender: f,
        useVisualState: p,
        Component: m
      }) {
        e && function(e) {
          for (const t in e) "projectionNodeConstructor" === t ? y.projectionNodeConstructor = e[t] : y[t].Component = e[t]
        }(e);
        const v = (0, r.forwardRef)((function(v, _) {
          const T = {
              ...(0, r.useContext)(i),
              ...v,
              layoutId: C(v)
            },
            {
              isStatic: E
            } = T;
          let P = null;
          const M = function(e) {
              const {
                initial: t,
                animate: n
              } = function(e, t) {
                if (h(e)) {
                  const {
                    initial: t,
                    animate: n
                  } = e;
                  return {
                    initial: !1 === t || d(t) ? t : void 0,
                    animate: d(n) ? n : void 0
                  }
                }
                return !1 !== e.inherit ? t : {}
              }(e, (0, r.useContext)(o));
              return (0, r.useMemo)((() => ({
                initial: t,
                animate: n
              })), [g(t), g(n)])
            }(v),
            O = E ? void 0 : b((() => {
              if (w.hasEverUpdated) return x++
            })),
            A = p(v, E);
          if (!E && s) {
            M.visualElement = function(e, t, n, s) {
              const c = (0, r.useContext)(o).visualElement,
                d = (0, r.useContext)(u),
                f = (0, r.useContext)(a),
                p = (0, r.useContext)(i).reducedMotion,
                h = (0, r.useRef)();
              s = s || d.renderer, !h.current && s && (h.current = s(e, {
                visualState: t,
                parent: c,
                props: n,
                presenceId: f ? f.id : void 0,
                blockInitialAnimation: !!f && !1 === f.initial,
                reducedMotionConfig: p
              }));
              const m = h.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(m, A, T, t);
            const s = (0, r.useContext)(u).strict,
              c = (0, r.useContext)(k);
            M.visualElement && (P = M.visualElement.loadFeatures(T, s, e, O, n || y.projectionNodeConstructor, c))
          }
          return r.createElement(S, {
            visualElement: M.visualElement,
            props: T
          }, P, r.createElement(o.Provider, {
            value: M
          }, f(m, v, O, function(e, t, n) {
            return (0, r.useCallback)((r => {
              r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" == typeof n ? n(r) : c(n) && (n.current = r))
            }), [t])
          }(A, M.visualElement, _), A, E, M.visualElement)))
        }));
        return v[T] = m, v
      }

      function C({
        layoutId: e
      }) {
        const t = (0, r.useContext)(_).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function P(e) {
        function t(t, n = {}) {
          return E(e(t, n))
        }
        if ("undefined" == typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, {
          get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
        })
      }
      const M = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function O(e) {
        return "string" == typeof e && !e.includes("-") && !!(M.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      const A = {},
        L = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        D = new Set(L);

      function z(e, {
        layout: t,
        layoutId: n
      }) {
        return D.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!A[e] || "opacity" === e)
      }
      const N = e => !!(null == e ? void 0 : e.getVelocity),
        R = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        V = (e, t) => L.indexOf(e) - L.indexOf(t);

      function I(e) {
        return e.startsWith("--")
      }
      const F = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
        B = (e, t, n) => Math.min(Math.max(n, e), t),
        j = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        $ = {
          ...j,
          transform: e => B(0, 1, e)
        },
        U = {
          ...j,
          default: 1
        },
        H = e => Math.round(1e5 * e) / 1e5,
        W = /(-)?([\d]*\.?[\d])+/g,
        G = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Y = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function X(e) {
        return "string" == typeof e
      }
      const q = e => ({
          test: t => X(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        Q = q("deg"),
        K = q("%"),
        Z = q("px"),
        J = q("vh"),
        ee = q("vw"),
        te = {
          ...K,
          parse: e => K.parse(e) / 100,
          transform: e => K.transform(100 * e)
        },
        ne = {
          ...j,
          transform: Math.round
        },
        re = {
          borderWidth: Z,
          borderTopWidth: Z,
          borderRightWidth: Z,
          borderBottomWidth: Z,
          borderLeftWidth: Z,
          borderRadius: Z,
          radius: Z,
          borderTopLeftRadius: Z,
          borderTopRightRadius: Z,
          borderBottomRightRadius: Z,
          borderBottomLeftRadius: Z,
          width: Z,
          maxWidth: Z,
          height: Z,
          maxHeight: Z,
          size: Z,
          top: Z,
          right: Z,
          bottom: Z,
          left: Z,
          padding: Z,
          paddingTop: Z,
          paddingRight: Z,
          paddingBottom: Z,
          paddingLeft: Z,
          margin: Z,
          marginTop: Z,
          marginRight: Z,
          marginBottom: Z,
          marginLeft: Z,
          rotate: Q,
          rotateX: Q,
          rotateY: Q,
          rotateZ: Q,
          scale: U,
          scaleX: U,
          scaleY: U,
          scaleZ: U,
          skew: Q,
          skewX: Q,
          skewY: Q,
          distance: Z,
          translateX: Z,
          translateY: Z,
          translateZ: Z,
          x: Z,
          y: Z,
          z: Z,
          perspective: Z,
          transformPerspective: Z,
          opacity: $,
          originX: te,
          originY: te,
          originZ: Z,
          zIndex: ne,
          fillOpacity: $,
          strokeOpacity: $,
          numOctaves: ne
        };

      function ie(e, t, n, r) {
        const {
          style: i,
          vars: o,
          transform: a,
          transformKeys: s,
          transformOrigin: l
        } = e;
        s.length = 0;
        let u = !1,
          c = !1,
          d = !0;
        for (const e in t) {
          const n = t[e];
          if (I(e)) {
            o[e] = n;
            continue
          }
          const r = re[e],
            f = F(n, r);
          if (D.has(e)) {
            if (u = !0, a[e] = f, s.push(e), !d) continue;
            n !== (r.default || 0) && (d = !1)
          } else e.startsWith("origin") ? (c = !0, l[e] = f) : i[e] = f
        }
        if (t.transform || (u || r ? i.transform = function({
            transform: e,
            transformKeys: t
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: r = !0
          }, i, o) {
            let a = "";
            t.sort(V);
            for (const n of t) a += `${R[n]||n}(${e[n]}) `;
            return n && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, i ? "" : a) : r && i && (a = "none"), a
          }(e, n, d, r) : i.transform && (i.transform = "none")), c) {
          const {
            originX: e = "50%",
            originY: t = "50%",
            originZ: n = 0
          } = l;
          i.transformOrigin = `${e} ${t} ${n}`
        }
      }
      const oe = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function ae(e, t, n) {
        for (const r in t) N(t[r]) || z(r, n) || (e[r] = t[r])
      }

      function se(e, t, n) {
        const i = {},
          o = function(e, t, n) {
            const i = {};
            return ae(i, e.style || {}, e), Object.assign(i, function({
              transformTemplate: e
            }, t, n) {
              return (0, r.useMemo)((() => {
                const r = oe();
                return ie(r, t, {
                  enableHardwareAcceleration: !n
                }, e), Object.assign({}, r.vars, r.style)
              }), [t])
            }(e, t, n)), e.transformValues ? e.transformValues(i) : i
          }(e, t, n);
        return e.drag && !1 !== e.dragListener && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), i.style = o, i
      }
      const le = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function ue(e) {
        return le.has(e)
      }
      let ce = e => !ue(e);
      try {
        (de = require("@emotion/is-prop-valid").default) && (ce = e => e.startsWith("on") ? !ue(e) : de(e))
      } catch (e) {}
      var de;

      function fe(e, t, n) {
        return "string" == typeof e ? e : Z.transform(t + n * e)
      }
      const pe = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        he = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function me(e, {
        attrX: t,
        attrY: n,
        originX: r,
        originY: i,
        pathLength: o,
        pathSpacing: a = 1,
        pathOffset: s = 0,
        ...l
      }, u, c, d) {
        if (ie(e, l, u, d), c) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: f,
          style: p,
          dimensions: h
        } = e;
        f.transform && (h && (p.transform = f.transform), delete f.transform), h && (void 0 !== r || void 0 !== i || p.transform) && (p.transformOrigin = function(e, t, n) {
          return `${fe(t,e.x,e.width)} ${fe(n,e.y,e.height)}`
        }(h, void 0 !== r ? r : .5, void 0 !== i ? i : .5)), void 0 !== t && (f.x = t), void 0 !== n && (f.y = n), void 0 !== o && function(e, t, n = 1, r = 0, i = !0) {
          e.pathLength = 1;
          const o = i ? pe : he;
          e[o.offset] = Z.transform(-r);
          const a = Z.transform(t),
            s = Z.transform(n);
          e[o.array] = `${a} ${s}`
        }(f, o, a, s, !1)
      }
      const ge = () => ({
          ...oe(),
          attrs: {}
        }),
        ve = e => "string" == typeof e && "svg" === e.toLowerCase();

      function ye(e, t, n, i) {
        const o = (0, r.useMemo)((() => {
          const n = ge();
          return me(n, t, {
            enableHardwareAcceleration: !1
          }, ve(i), e.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [t]);
        if (e.style) {
          const t = {};
          ae(t, e.style, e), o.style = {
            ...t,
            ...o.style
          }
        }
        return o
      }

      function be(e = !1) {
        return (t, n, i, o, {
          latestValues: a
        }, s) => {
          const l = (O(t) ? ye : se)(n, a, s, t),
            u = function(e, t, n) {
              const r = {};
              for (const i in e)(ce(i) || !0 === n && ue(i) || !t && !ue(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
              return r
            }(n, "string" == typeof t, e),
            c = {
              ...u,
              ...l,
              ref: o
            };
          return i && (c["data-projection-id"] = i), (0, r.createElement)(t, c)
        }
      }
      const we = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function xe(e, {
        style: t,
        vars: n
      }, r, i) {
        Object.assign(e.style, t, i && i.getProjectionStyles(r));
        for (const t in n) e.style.setProperty(t, n[t])
      }
      const _e = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Se(e, t, n, r) {
        xe(e, t, void 0, r);
        for (const n in t.attrs) e.setAttribute(_e.has(n) ? n : we(n), t.attrs[n])
      }

      function ke(e) {
        const {
          style: t
        } = e, n = {};
        for (const r in t)(N(t[r]) || z(r, e)) && (n[r] = t[r]);
        return n
      }

      function Te(e) {
        const t = ke(e);
        for (const n in e) N(e[n]) && (t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]);
        return t
      }

      function Ee(e, t, n, r = {}, i = {}) {
        return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
      }
      const Ce = e => Array.isArray(e),
        Pe = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        Me = e => Ce(e) ? e[e.length - 1] || 0 : e;

      function Oe(e) {
        const t = N(e) ? e.get() : e;
        return Pe(t) ? t.toValue() : t
      }
      const Ae = e => (t, n) => {
        const i = (0, r.useContext)(o),
          s = (0, r.useContext)(a),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: n
          }, r, i, o) {
            const a = {
              latestValues: Le(r, i, o, e),
              renderState: t()
            };
            return n && (a.mount = e => n(r, e, a)), a
          }(e, t, i, s);
        return n ? l() : b(l)
      };

      function Le(e, t, n, r) {
        const i = {},
          o = r(e);
        for (const e in o) i[e] = Oe(o[e]);
        let {
          initial: a,
          animate: s
        } = e;
        const l = h(e),
          u = m(e);
        t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === a;
        const d = c ? s : a;
        return d && "boolean" != typeof d && !f(d) && (Array.isArray(d) ? d : [d]).forEach((t => {
          const n = Ee(e, t);
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
      const De = {
          useVisualState: Ae({
            scrapeMotionValuesFromProps: Te,
            createRenderState: ge,
            onMount: (e, t, {
              renderState: n,
              latestValues: r
            }) => {
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
              me(n, r, {
                enableHardwareAcceleration: !1
              }, ve(t.tagName), e.transformTemplate), Se(t, n)
            }
          })
        },
        ze = {
          useVisualState: Ae({
            scrapeMotionValuesFromProps: ke,
            createRenderState: oe
          })
        };
      var Ne;

      function Re(e, t, n, r = {
        passive: !0
      }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
      }

      function Ve(e, t, n, i) {
        (0, r.useEffect)((() => {
          const r = e.current;
          if (n && r) return Re(r, t, n, i)
        }), [e, t, n, i])
      }

      function Ie(e) {
        return "undefined" != typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
      }

      function Fe(e) {
        return !!e.touches
      }! function(e) {
        e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
      }(Ne || (Ne = {}));
      const Be = {
        pageX: 0,
        pageY: 0
      };

      function je(e, t = "page") {
        const n = e.touches[0] || e.changedTouches[0] || Be;
        return {
          x: n[t + "X"],
          y: n[t + "Y"]
        }
      }

      function $e(e, t = "page") {
        return {
          x: e[t + "X"],
          y: e[t + "Y"]
        }
      }

      function Ue(e, t = "page") {
        return {
          point: Fe(e) ? je(e, t) : $e(e, t)
        }
      }
      const He = (e, t = !1) => {
          const n = t => e(t, Ue(t));
          return t ? (r = n, e => {
            const t = e instanceof MouseEvent;
            (!t || t && 0 === e.button) && r(e)
          }) : n;
          var r
        },
        We = () => s && null === window.onpointerdown,
        Ge = () => s && null === window.ontouchstart,
        Ye = () => s && null === window.onmousedown,
        Xe = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        qe = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function Qe(e) {
        return We() ? e : Ge() ? qe[e] : Ye() ? Xe[e] : e
      }

      function Ke(e, t, n, r) {
        return Re(e, Qe(t), He(n, "pointerdown" === t), r)
      }

      function Ze(e, t, n, r) {
        return Ve(e, Qe(t), n && He(n, "pointerdown" === t), r)
      }

      function Je(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const et = Je("dragHorizontal"),
        tt = Je("dragVertical");

      function nt(e) {
        let t = !1;
        if ("y" === e) t = tt();
        else if ("x" === e) t = et();
        else {
          const e = et(),
            n = tt();
          e && n ? t = () => {
            e(), n()
          } : (e && e(), n && n())
        }
        return t
      }

      function rt() {
        const e = nt(!0);
        return !e || (e(), !1)
      }

      function it(e, t, n) {
        return (r, i) => {
          Ie(r) && !rt() && (e.animationState && e.animationState.setActive(Ne.Hover, t), n && n(r, i))
        }
      }
      const ot = (e, t) => !!t && (e === t || ot(e, t.parentElement));

      function at(e) {
        return (0, r.useEffect)((() => () => e()), [])
      }
      const st = (e, t) => n => t(e(n)),
        lt = (...e) => e.reduce(st);
      var ut = n(768);
      const ct = (void 0 === ut || ut.env, "production"),
        dt = new Set,
        ft = new WeakMap,
        pt = new WeakMap,
        ht = e => {
          const t = ft.get(e.target);
          t && t(e)
        },
        mt = e => {
          e.forEach(ht)
        };
      const gt = {
        some: 0,
        all: 1
      };

      function vt(e, t, n, {
        root: i,
        margin: o,
        amount: a = "some",
        once: s
      }) {
        (0, r.useEffect)((() => {
          if (!e || !n.current) return;
          const r = {
            root: null == i ? void 0 : i.current,
            rootMargin: o,
            threshold: "number" == typeof a ? a : gt[a]
          };
          return function(e, t, n) {
            const r = function({
              root: e,
              ...t
            }) {
              const n = e || document;
              pt.has(n) || pt.set(n, {});
              const r = pt.get(n),
                i = JSON.stringify(t);
              return r[i] || (r[i] = new IntersectionObserver(mt, {
                root: e,
                ...t
              })), r[i]
            }(t);
            return ft.set(e, n), r.observe(e), () => {
              ft.delete(e), r.unobserve(e)
            }
          }(n.current, r, (e => {
            const {
              isIntersecting: r
            } = e;
            if (t.isInView === r) return;
            if (t.isInView = r, s && !r && t.hasEnteredView) return;
            r && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(Ne.InView, r);
            const i = n.getProps(),
              o = r ? i.onViewportEnter : i.onViewportLeave;
            o && o(e)
          }))
        }), [e, i, o, a])
      }

      function yt(e, t, n, {
        fallback: i = !0
      }) {
        (0, r.useEffect)((() => {
          var r;
          e && i && ("production" !== ct && (r = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", dt.has(r) || (console.warn(r), dt.add(r))), requestAnimationFrame((() => {
            t.hasEnteredView = !0;
            const {
              onViewportEnter: e
            } = n.getProps();
            e && e(null), n.animationState && n.animationState.setActive(Ne.InView, !0)
          })))
        }), [e])
      }
      const bt = e => t => (e(t), null),
        wt = {
          inView: bt((function({
            visualElement: e,
            whileInView: t,
            onViewportEnter: n,
            onViewportLeave: i,
            viewport: o = {}
          }) {
            const a = (0, r.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let s = Boolean(t || n || i);
            o.once && a.current.hasEnteredView && (s = !1), ("undefined" == typeof IntersectionObserver ? yt : vt)(s, a.current, e, o)
          })),
          tap: bt((function({
            onTap: e,
            onTapStart: t,
            onTapCancel: n,
            whileTap: i,
            visualElement: o
          }) {
            const a = e || t || n || i,
              s = (0, r.useRef)(!1),
              l = (0, r.useRef)(null),
              u = {
                passive: !(t || e || n || h)
              };

            function c() {
              l.current && l.current(), l.current = null
            }

            function d() {
              return c(), s.current = !1, o.animationState && o.animationState.setActive(Ne.Tap, !1), !rt()
            }

            function f(t, r) {
              d() && (ot(o.current, t.target) ? e && e(t, r) : n && n(t, r))
            }

            function p(e, t) {
              d() && n && n(e, t)
            }

            function h(e, n) {
              c(), s.current || (s.current = !0, l.current = lt(Ke(window, "pointerup", f, u), Ke(window, "pointercancel", p, u)), o.animationState && o.animationState.setActive(Ne.Tap, !0), t && t(e, n))
            }
            Ze(o, "pointerdown", a ? h : void 0, u), at(c)
          })),
          focus: bt((function({
            whileFocus: e,
            visualElement: t
          }) {
            const {
              animationState: n
            } = t;
            Ve(t, "focus", e ? () => {
              n && n.setActive(Ne.Focus, !0)
            } : void 0), Ve(t, "blur", e ? () => {
              n && n.setActive(Ne.Focus, !1)
            } : void 0)
          })),
          hover: bt((function({
            onHoverStart: e,
            onHoverEnd: t,
            whileHover: n,
            visualElement: r
          }) {
            Ze(r, "pointerenter", e || n ? it(r, !0, e) : void 0, {
              passive: !e
            }), Ze(r, "pointerleave", t || n ? it(r, !1, t) : void 0, {
              passive: !t
            })
          }))
        };

      function xt() {
        const e = (0, r.useContext)(a);
        if (null === e) return [!0, null];
        const {
          isPresent: t,
          onExitComplete: n,
          register: i
        } = e, o = (0, r.useId)();
        return (0, r.useEffect)((() => i(o)), []), !t && n ? [!1, () => n && n(o)] : [!0]
      }

      function _t(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++)
          if (t[r] !== e[r]) return !1;
        return !0
      }
      const St = {
          delta: 0,
          timestamp: 0
        },
        kt = 1 / 60 * 1e3,
        Tt = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        Et = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout((() => e(Tt())), kt);
      let Ct = !0,
        Pt = !1,
        Mt = !1;
      const Ot = ["read", "update", "preRender", "render", "postRender"],
        At = Ot.reduce(((e, t) => (e[t] = function(e) {
          let t = [],
            n = [],
            r = 0,
            i = !1,
            o = !1;
          const a = new WeakSet,
            s = {
              schedule: (e, o = !1, s = !1) => {
                const l = s && i,
                  u = l ? t : n;
                return o && a.add(e), -1 === u.indexOf(e) && (u.push(e), l && i && (r = t.length)), e
              },
              cancel: e => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1), a.delete(e)
              },
              process: l => {
                if (i) o = !0;
                else {
                  if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let n = 0; n < r; n++) {
                      const r = t[n];
                      r(l), a.has(r) && (s.schedule(r), e())
                    }
                  i = !1, o && (o = !1, s.process(l))
                }
              }
            };
          return s
        }((() => Pt = !0)), e)), {}),
        Lt = Ot.reduce(((e, t) => {
          const n = At[t];
          return e[t] = (e, t = !1, r = !1) => (Pt || Vt(), n.schedule(e, t, r)), e
        }), {}),
        Dt = Ot.reduce(((e, t) => (e[t] = At[t].cancel, e)), {}),
        zt = Ot.reduce(((e, t) => (e[t] = () => At[t].process(St), e)), {}),
        Nt = e => At[e].process(St),
        Rt = e => {
          Pt = !1, St.delta = Ct ? kt : Math.max(Math.min(e - St.timestamp, 40), 1), St.timestamp = e, Mt = !0, Ot.forEach(Nt), Mt = !1, Pt && (Ct = !1, Et(Rt))
        },
        Vt = () => {
          Pt = !0, Ct = !0, Mt || Et(Rt)
        };

      function It(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function Ft(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      class Bt {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return It(this.subscriptions, e), () => Ft(this.subscriptions, e)
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

      function jt(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      class $t {
        constructor(e, t = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: n,
              timestamp: r
            } = St;
            this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, Lt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => Lt.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: e
          }) => {
            e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = t.owner
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new Bt), this.events[e].add(t)
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear()
        }
        attach(e) {
          this.passiveEffect = e
        }
        set(e, t = !0) {
          t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, n) {
          this.set(t), this.prev = e, this.timeDelta = n
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? jt(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(e) {
          return this.stop(), new Promise((t => {
            this.hasAnimated = !0, this.stopAnimation = e(t), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function Ut(e, t) {
        return new $t(e, t)
      }
      const Ht = (e, t) => n => Boolean(X(n) && Y.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
        Wt = (e, t, n) => r => {
          if (!X(r)) return r;
          const [i, o, a, s] = r.match(W);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        Gt = {
          ...j,
          transform: e => Math.round((e => B(0, 255, e))(e))
        },
        Yt = {
          test: Ht("rgb", "red"),
          parse: Wt("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + Gt.transform(e) + ", " + Gt.transform(t) + ", " + Gt.transform(n) + ", " + H($.transform(r)) + ")"
        },
        Xt = {
          test: Ht("#"),
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
          transform: Yt.transform
        },
        qt = {
          test: Ht("hsl", "hue"),
          parse: Wt("hue", "saturation", "lightness"),
          transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(e) + ", " + K.transform(H(t)) + ", " + K.transform(H(n)) + ", " + H($.transform(r)) + ")"
        },
        Qt = {
          test: e => Yt.test(e) || Xt.test(e) || qt.test(e),
          parse: e => Yt.test(e) ? Yt.parse(e) : qt.test(e) ? qt.parse(e) : Xt.parse(e),
          transform: e => X(e) ? e : e.hasOwnProperty("red") ? Yt.transform(e) : qt.transform(e)
        },
        Kt = "${c}",
        Zt = "${n}";

      function Jt(e) {
        "number" == typeof e && (e = `${e}`);
        const t = [];
        let n = 0,
          r = 0;
        const i = e.match(G);
        i && (n = i.length, e = e.replace(G, Kt), t.push(...i.map(Qt.parse)));
        const o = e.match(W);
        return o && (r = o.length, e = e.replace(W, Zt), t.push(...o.map(j.parse))), {
          values: t,
          numColors: n,
          numNumbers: r,
          tokenised: e
        }
      }

      function en(e) {
        return Jt(e).values
      }

      function tn(e) {
        const {
          values: t,
          numColors: n,
          tokenised: r
        } = Jt(e), i = t.length;
        return e => {
          let t = r;
          for (let r = 0; r < i; r++) t = t.replace(r < n ? Kt : Zt, r < n ? Qt.transform(e[r]) : H(e[r]));
          return t
        }
      }
      const nn = e => "number" == typeof e ? 0 : e,
        rn = {
          test: function(e) {
            var t, n;
            return isNaN(e) && X(e) && ((null === (t = e.match(W)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(G)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: en,
          createTransformer: tn,
          getAnimatableNone: function(e) {
            const t = en(e);
            return tn(e)(t.map(nn))
          }
        },
        on = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function an(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [r] = n.match(W) || [];
        if (!r) return e;
        const i = n.replace(r, "");
        let o = on.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + i + ")"
      }
      const sn = /([a-z-]*)\(.*?\)/g,
        ln = {
          ...rn,
          getAnimatableNone: e => {
            const t = e.match(sn);
            return t ? t.map(an).join(" ") : e
          }
        },
        un = {
          ...re,
          color: Qt,
          backgroundColor: Qt,
          outlineColor: Qt,
          fill: Qt,
          stroke: Qt,
          borderColor: Qt,
          borderTopColor: Qt,
          borderRightColor: Qt,
          borderBottomColor: Qt,
          borderLeftColor: Qt,
          filter: ln,
          WebkitFilter: ln
        },
        cn = e => un[e];

      function dn(e, t) {
        var n;
        let r = cn(e);
        return r !== ln && (r = rn), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
      }
      const fn = e => t => t.test(e),
        pn = [j, Z, K, Q, ee, J, {
          test: e => "auto" === e,
          parse: e => e
        }],
        hn = e => pn.find(fn(e)),
        mn = [...pn, Qt, rn],
        gn = e => mn.find(fn(e));

      function vn(e, t, n) {
        const r = e.getProps();
        return Ee(r, t, void 0 !== n ? n : r.custom, function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.get())), t
        }(e), function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t
        }(e))
      }

      function yn(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ut(n))
      }

      function bn(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function wn(e) {
        return Boolean(N(e) && e.add)
      }
      const xn = (e, t) => `${e}: ${t}`;

      function _n(e, t) {
        const {
          MotionAppearAnimations: n
        } = window, r = xn(e, D.has(t) ? "transform" : t), i = n && n.get(r);
        return i ? (Lt.render((() => {
          try {
            i.cancel(), n.delete(r)
          } catch (e) {}
        })), i.currentTime || 0) : 0
      }
      const Sn = "data-" + we("framerAppearId");
      var kn = function() {},
        Tn = function() {};
      const En = e => 1e3 * e,
        Cn = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Pn = e => t => 1 - e(1 - t),
        Mn = e => e * e,
        On = Pn(Mn),
        An = Cn(Mn),
        Ln = (e, t, n) => -n * e + n * t + e;

      function Dn(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      const zn = (e, t, n) => {
          const r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r))
        },
        Nn = [Xt, Yt, qt];

      function Rn(e) {
        const t = (n = e, Nn.find((e => e.test(n))));
        var n;
        Tn(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let r = t.parse(e);
        return t === qt && (r = function({
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
            i = Dn(s, r, e + 1 / 3), o = Dn(s, r, e), a = Dn(s, r, e - 1 / 3)
          } else i = o = a = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * o),
            blue: Math.round(255 * a),
            alpha: r
          }
        }(r)), r
      }
      const Vn = (e, t) => {
        const n = Rn(e),
          r = Rn(t),
          i = {
            ...n
          };
        return e => (i.red = zn(n.red, r.red, e), i.green = zn(n.green, r.green, e), i.blue = zn(n.blue, r.blue, e), i.alpha = Ln(n.alpha, r.alpha, e), Yt.transform(i))
      };

      function In(e, t) {
        return "number" == typeof e ? n => Ln(e, t, n) : Qt.test(e) ? Vn(e, t) : jn(e, t)
      }
      const Fn = (e, t) => {
          const n = [...e],
            r = n.length,
            i = e.map(((e, n) => In(e, t[n])));
          return e => {
            for (let t = 0; t < r; t++) n[t] = i[t](e);
            return n
          }
        },
        Bn = (e, t) => {
          const n = {
              ...e,
              ...t
            },
            r = {};
          for (const i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = In(e[i], t[i]));
          return e => {
            for (const t in r) n[t] = r[t](e);
            return n
          }
        },
        jn = (e, t) => {
          const n = rn.createTransformer(t),
            r = Jt(e),
            i = Jt(t);
          return r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? lt(Fn(r.values, i.values), n) : (kn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
        },
        $n = (e, t, n) => {
          const r = t - e;
          return 0 === r ? 1 : (n - e) / r
        },
        Un = (e, t) => n => Ln(e, t, n);

      function Hn(e, t, {
        clamp: n = !0,
        ease: r,
        mixer: i
      } = {}) {
        const o = e.length;
        Tn(o === t.length, "Both input and output ranges must be the same length"), Tn(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const a = function(e, t, n) {
            const r = [],
              i = n || ("number" == typeof(o = e[0]) ? Un : "string" == typeof o ? Qt.test(o) ? Vn : jn : Array.isArray(o) ? Fn : "object" == typeof o ? Bn : Un);
            var o;
            const a = e.length - 1;
            for (let n = 0; n < a; n++) {
              let o = i(e[n], e[n + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[n] : t;
                o = lt(e, o)
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
            const r = $n(e[n], e[n + 1], t);
            return a[n](r)
          };
        return n ? t => l(B(e[0], e[o - 1], t)) : l
      }
      const Wn = e => e,
        Gn = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function Yn(e, t, n, r) {
        if (e === t && n === r) return Wn;
        return i => 0 === i || 1 === i ? i : Gn(function(e, t, n, r, i) {
          let o, a, s = 0;
          do {
            a = t + (n - t) / 2, o = Gn(a, r, i) - e, o > 0 ? n = a : t = a
          } while (Math.abs(o) > 1e-7 && ++s < 12);
          return a
        }(i, 0, 1, e, n), t, r)
      }
      const Xn = e => 1 - Math.sin(Math.acos(e)),
        qn = Pn(Xn),
        Qn = Cn(qn),
        Kn = Yn(.33, 1.53, .69, .99),
        Zn = Pn(Kn),
        Jn = Cn(Zn),
        er = {
          linear: Wn,
          easeIn: Mn,
          easeInOut: An,
          easeOut: On,
          circIn: Xn,
          circInOut: Qn,
          circOut: qn,
          backIn: Zn,
          backInOut: Jn,
          backOut: Kn,
          anticipate: e => (e *= 2) < 1 ? .5 * Zn(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        tr = e => {
          if (Array.isArray(e)) {
            Tn(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, n, r, i] = e;
            return Yn(t, n, r, i)
          }
          return "string" == typeof e ? (Tn(void 0 !== er[e], `Invalid easing type '${e}'`), er[e]) : e
        };

      function nr({
        keyframes: e,
        ease: t = An,
        times: n,
        duration: r = 300
      }) {
        e = [...e];
        const i = nr[0],
          o = (e => Array.isArray(e) && "number" != typeof e[0])(t) ? t.map(tr) : tr(t),
          a = {
            done: !1,
            value: i
          },
          s = function(e, t) {
            return e.map((e => e * t))
          }(n && n.length === nr.length ? n : function(e) {
            const t = e.length;
            return e.map(((e, n) => 0 !== n ? n / (t - 1) : 0))
          }(e), r);

        function l() {
          return Hn(s, e, {
            ease: Array.isArray(o) ? o : (t = e, n = o, t.map((() => n || An)).splice(0, t.length - 1))
          });
          var t, n
        }
        let u = l();
        return {
          next: e => (a.value = u(e), a.done = e >= r, a),
          flipTarget: () => {
            e.reverse(), u = l()
          }
        }
      }
      const rr = .001,
        ir = .01,
        or = 10,
        ar = .05,
        sr = 1;
      const lr = 12;

      function ur(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      const cr = ["duration", "bounce"],
        dr = ["stiffness", "damping", "mass"];

      function fr(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function pr({
        keyframes: e,
        restSpeed: t = 2,
        restDelta: n = .01,
        ...r
      }) {
        let i = e[0],
          o = e[e.length - 1];
        const a = {
            done: !1,
            value: i
          },
          {
            stiffness: s,
            damping: l,
            mass: u,
            velocity: c,
            duration: d,
            isResolvedFromDuration: f
          } = function(e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!fr(e, dr) && fr(e, cr)) {
              const n = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: n = 0,
                mass: r = 1
              }) {
                let i, o;
                kn(e <= 1e3 * or, "Spring duration must be 10 seconds or less");
                let a = 1 - t;
                a = B(ar, sr, a), e = B(ir, or, e / 1e3), a < 1 ? (i = t => {
                  const r = t * a,
                    i = r * e,
                    o = r - n,
                    s = ur(t, a),
                    l = Math.exp(-i);
                  return rr - o / s * l
                }, o = t => {
                  const r = t * a * e,
                    o = r * n + n,
                    s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-r),
                    u = ur(Math.pow(t, 2), a);
                  return (-i(t) + rr > 0 ? -1 : 1) * ((o - s) * l) / u
                }) : (i = t => Math.exp(-t * e) * ((t - n) * e + 1) - rr, o = t => Math.exp(-t * e) * (e * e * (n - t)));
                const s = function(e, t, n) {
                  let r = n;
                  for (let n = 1; n < lr; n++) r -= e(r) / t(r);
                  return r
                }(i, o, 5 / e);
                if (e *= 1e3, isNaN(s)) return {
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
          }(r);
        let p = hr,
          h = c ? -c / 1e3 : 0;
        const m = l / (2 * Math.sqrt(s * u));

        function g() {
          const e = o - i,
            t = Math.sqrt(s / u) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(o - i) / 100, .4)), m < 1) {
            const n = ur(t, m);
            p = r => {
              const i = Math.exp(-m * t * r);
              return o - i * ((h + m * t * e) / n * Math.sin(n * r) + e * Math.cos(n * r))
            }
          } else if (1 === m) p = n => o - Math.exp(-t * n) * (e + (h + t * e) * n);
          else {
            const n = t * Math.sqrt(m * m - 1);
            p = r => {
              const i = Math.exp(-m * t * r),
                a = Math.min(n * r, 300);
              return o - i * ((h + m * t * e) * Math.sinh(a) + n * e * Math.cosh(a)) / n
            }
          }
        }
        return g(), {
          next: e => {
            const r = p(e);
            if (f) a.done = e >= d;
            else {
              let i = h;
              if (0 !== e)
                if (m < 1) {
                  const t = Math.max(0, e - 5);
                  i = jt(r - p(t), e - t)
                } else i = 0;
              const s = Math.abs(i) <= t,
                l = Math.abs(o - r) <= n;
              a.done = s && l
            }
            return a.value = a.done ? o : r, a
          },
          flipTarget: () => {
            h = -h, [i, o] = [o, i], g()
          }
        }
      }
      pr.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
      const hr = e => 0,
        mr = {
          decay: function({
            keyframes: e = [0],
            velocity: t = 0,
            power: n = .8,
            timeConstant: r = 350,
            restDelta: i = .5,
            modifyTarget: o
          }) {
            const a = e[0],
              s = {
                done: !1,
                value: a
              };
            let l = n * t;
            const u = a + l,
              c = void 0 === o ? u : o(u);
            return c !== u && (l = c - a), {
              next: e => {
                const t = -l * Math.exp(-e / r);
                return s.done = !(t > i || t < -i), s.value = s.done ? c : c + t, s
              },
              flipTarget: () => {}
            }
          },
          keyframes: nr,
          tween: nr,
          spring: pr
        };

      function gr(e, t, n = 0) {
        return e - t - n
      }
      const vr = e => {
        const t = ({
          delta: t
        }) => e(t);
        return {
          start: () => Lt.update(t, !0),
          stop: () => Dt.update(t)
        }
      };

      function yr({
        duration: e,
        driver: t = vr,
        elapsed: n = 0,
        repeat: r = 0,
        repeatType: i = "loop",
        repeatDelay: o = 0,
        keyframes: a,
        autoplay: s = !0,
        onPlay: l,
        onStop: u,
        onComplete: c,
        onRepeat: d,
        onUpdate: f,
        type: p = "keyframes",
        ...h
      }) {
        var m, g;
        let v, y, b, w = 0,
          x = e,
          _ = !1,
          S = !0;
        const k = mr[a.length > 2 ? "keyframes" : p],
          T = a[0],
          E = a[a.length - 1];
        (null === (g = (m = k).needsInterpolation) || void 0 === g ? void 0 : g.call(m, T, E)) && (b = Hn([0, 100], [T, E], {
          clamp: !1
        }), a = [0, 100]);
        const C = k({
          ...h,
          duration: e,
          keyframes: a
        });
        return s && (l && l(), v = t((function(e) {
          if (S || (e = -e), n += e, !_) {
            const e = C.next(Math.max(0, n));
            y = e.value, b && (y = b(y)), _ = S ? e.done : n <= 0
          }
          f && f(y), _ && (0 === w && (x = void 0 !== x ? x : n), w < r ? function(e, t, n, r) {
            return r ? e >= t + n : e <= -n
          }(n, x, o, S) && (w++, "reverse" === i ? (S = w % 2 == 0, n = function(e, t = 0, n = 0, r = !0) {
            return r ? gr(t + -e, t, n) : t - (e - t) + n
          }(n, x, o, S)) : (n = gr(n, x, o), "mirror" === i && C.flipTarget()), _ = !1, d && d()) : (v.stop(), c && c()))
        })), v.start()), {
          stop: () => {
            u && u(), v.stop()
          },
          sample: e => C.next(Math.max(0, e))
        }
      }
      const br = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        wr = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: br([0, .65, .55, 1]),
          circOut: br([.55, 0, 1, .45]),
          backIn: br([.31, .01, .66, -.59]),
          backOut: br([.33, 1.53, .69, .99])
        };

      function xr(e) {
        if (e) return Array.isArray(e) ? br(e) : wr[e]
      }

      function _r(e, t) {
        const n = performance.now(),
          r = ({
            timestamp: i
          }) => {
            const o = i - n;
            o >= t && (Dt.read(r), e(o - t))
          };
        return Lt.read(r, !0), () => Dt.read(r)
      }

      function Sr({
        keyframes: e,
        elapsed: t,
        onUpdate: n,
        onComplete: r
      }) {
        const i = () => (n && n(e[e.length - 1]), r && r(), () => {});
        return t ? _r(i, -t) : i()
      }
      const kr = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Tr = e => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Er = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Cr = {
          type: "keyframes",
          duration: .8
        },
        Pr = {
          x: kr,
          y: kr,
          z: kr,
          rotate: kr,
          rotateX: kr,
          rotateY: kr,
          rotateZ: kr,
          scaleX: Tr,
          scaleY: Tr,
          scale: Tr,
          opacity: Er,
          backgroundColor: Er,
          color: Er,
          default: Tr
        },
        Mr = (e, {
          keyframes: t
        }) => t.length > 2 ? Cr : (Pr[e] || Pr.default)(t[1]),
        Or = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !rn.test(t) || t.startsWith("url(")));

      function Ar(e) {
        return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
      }

      function Lr(e) {
        return "number" == typeof e ? 0 : dn("", e)
      }

      function Dr(e, t) {
        return e[t] || e.default || e
      }
      const zr = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        Nr = {},
        Rr = {};
      for (const e in zr) Rr[e] = () => (void 0 === Nr[e] && (Nr[e] = zr[e]()), Nr[e]);
      const Vr = new Set(["opacity"]),
        Ir = (e, t, n, r = {}) => i => {
          const o = Dr(r, e) || {},
            a = o.delay || r.delay || 0;
          let {
            elapsed: s = 0
          } = r;
          s -= En(a);
          const l = function(e, t, n, r) {
              const i = Or(t, n);
              let o = void 0 !== r.from ? r.from : e.get();
              return "none" === o && i && "string" == typeof n ? o = dn(t, n) : Ar(o) && "string" == typeof n ? o = Lr(n) : !Array.isArray(n) && Ar(n) && "string" == typeof o && (n = Lr(o)), Array.isArray(n) ? (null === n[0] && (n[0] = o), n) : [o, n]
            }(t, e, n, o),
            u = l[0],
            c = l[l.length - 1],
            d = Or(e, u),
            f = Or(e, c);
          kn(d === f, `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
          let p = {
            keyframes: l,
            velocity: t.getVelocity(),
            ...o,
            elapsed: s,
            onUpdate: e => {
              t.set(e), o.onUpdate && o.onUpdate(e)
            },
            onComplete: () => {
              i(), o.onComplete && o.onComplete()
            }
          };
          if (!d || !f || !1 === o.type) return Sr(p);
          if ("inertia" === o.type) {
            const e = function({
              keyframes: e,
              velocity: t = 0,
              min: n,
              max: r,
              power: i = .8,
              timeConstant: o = 750,
              bounceStiffness: a = 500,
              bounceDamping: s = 10,
              restDelta: l = 1,
              modifyTarget: u,
              driver: c,
              onUpdate: d,
              onComplete: f,
              onStop: p
            }) {
              const h = e[0];
              let m;

              function g(e) {
                return void 0 !== n && e < n || void 0 !== r && e > r
              }

              function v(e) {
                return void 0 === n ? r : void 0 === r || Math.abs(n - e) < Math.abs(r - e) ? n : r
              }

              function y(e) {
                null == m || m.stop(), m = yr({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...e,
                  driver: c,
                  onUpdate: t => {
                    var n;
                    null == d || d(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                  },
                  onComplete: f,
                  onStop: p
                })
              }

              function b(e) {
                y({
                  type: "spring",
                  stiffness: a,
                  damping: s,
                  restDelta: l,
                  ...e
                })
              }
              if (g(h)) b({
                velocity: t,
                keyframes: [h, v(h)]
              });
              else {
                let e = i * t + h;
                void 0 !== u && (e = u(e));
                const r = v(e),
                  a = r === n ? -1 : 1;
                let s, c;
                const d = e => {
                  s = c, c = e, t = jt(e - s, St.delta), (1 === a && e > r || -1 === a && e < r) && b({
                    keyframes: [e, r],
                    velocity: t
                  })
                };
                y({
                  type: "decay",
                  keyframes: [h, 0],
                  velocity: t,
                  timeConstant: o,
                  power: i,
                  restDelta: l,
                  modifyTarget: u,
                  onUpdate: g(e) ? d : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(p);
            return () => e.stop()
          }(function({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: r,
            staggerDirection: i,
            repeat: o,
            repeatType: a,
            repeatDelay: s,
            from: l,
            ...u
          }) {
            return !!Object.keys(u).length
          })(o) || (p = {
            ...p,
            ...Mr(e, p)
          }), p.duration && (p.duration = En(p.duration)), p.repeatDelay && (p.repeatDelay = En(p.repeatDelay));
          const h = t.owner,
            m = h && h.current;
          if (Rr.waapi() && Vr.has(e) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping && h && m instanceof HTMLElement && !h.getProps().onUpdate) return function(e, t, {
            onUpdate: n,
            onComplete: r,
            ...i
          }) {
            let {
              keyframes: o,
              duration: a = .3,
              elapsed: s = 0,
              ease: l
            } = i;
            if ("spring" === i.type || !(!(u = i.ease) || Array.isArray(u) || "string" == typeof u && wr[u])) {
              const e = yr(i);
              let t = {
                done: !1,
                value: o[0]
              };
              const n = [];
              let r = 0;
              for (; !t.done;) t = e.sample(r), n.push(t.value), r += 10;
              o = n, a = r - 10, l = "linear"
            }
            var u;
            const c = function(e, t, n, {
              delay: r = 0,
              duration: i,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: s,
              times: l
            } = {}) {
              return e.animate({
                [t]: n,
                offset: l
              }, {
                delay: r,
                duration: i,
                easing: xr(s),
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal"
              })
            }(e.owner.current, t, o, {
              ...i,
              delay: -s,
              duration: a,
              ease: l
            });
            return c.onfinish = () => {
              e.set(o[o.length - 1]), r && r()
            }, () => {
              const {
                currentTime: t
              } = c;
              if (t) {
                const n = yr(i);
                e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
              }
              Lt.update((() => c.cancel()))
            }
          }(t, e, p); {
            const e = yr(p);
            return () => e.stop()
          }
        };

      function Fr(e, t, n = {}) {
        var r;
        const i = vn(e, t, n.custom);
        let {
          transition: o = e.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (o = n.transitionOverride);
        const a = i ? () => Br(e, i, n) : () => Promise.resolve(),
          s = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
            const {
              delayChildren: i = 0,
              staggerChildren: a,
              staggerDirection: s
            } = o;
            return function(e, t, n = 0, r = 0, i = 1, o) {
              const a = [],
                s = (e.variantChildren.size - 1) * r,
                l = 1 === i ? (e = 0) => e * r : (e = 0) => s - e * r;
              return Array.from(e.variantChildren).sort(jr).forEach(((e, r) => {
                a.push(Fr(e, t, {
                  ...o,
                  delay: n + l(r)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(a)
            }(e, t, i + r, a, s, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = o;
        if (l) {
          const [e, t] = "beforeChildren" === l ? [a, s] : [s, a];
          return e().then(t)
        }
        return Promise.all([a(), s(n.delay)])
      }

      function Br(e, t, {
        delay: n = 0,
        transitionOverride: r,
        type: i
      } = {}) {
        var o;
        let {
          transition: a = e.getDefaultTransition(),
          transitionEnd: s,
          ...l
        } = e.makeTargetAnimatable(t);
        const u = e.getValue("willChange");
        r && (a = r);
        const c = [],
          d = i && (null === (o = e.animationState) || void 0 === o ? void 0 : o.getState()[i]);
        for (const t in l) {
          const r = e.getValue(t),
            i = l[t];
          if (!r || void 0 === i || d && $r(d, t)) continue;
          let o = {
            delay: n,
            elapsed: 0,
            ...a
          };
          if (e.shouldReduceMotion && D.has(t) && (o = {
              ...o,
              type: !1,
              delay: 0
            }), !r.hasAnimated) {
            const n = e.getProps()[Sn];
            n && (o.elapsed = _n(n, t))
          }
          let s = r.start(Ir(t, r, i, o));
          wn(u) && (u.add(t), s = s.then((() => u.remove(t)))), c.push(s)
        }
        return Promise.all(c).then((() => {
          s && function(e, t) {
            const n = vn(e, t);
            let {
              transitionEnd: r = {},
              transition: i = {},
              ...o
            } = n ? e.makeTargetAnimatable(n, !1) : {};
            o = {
              ...o,
              ...r
            };
            for (const t in o) yn(e, t, Me(o[t]))
          }(e, s)
        }))
      }

      function jr(e, t) {
        return e.sortNodePosition(t)
      }

      function $r({
        protectedKeys: e,
        needsAnimating: t
      }, n) {
        const r = e.hasOwnProperty(n) && !0 !== t[n];
        return t[n] = !1, r
      }
      const Ur = [Ne.Animate, Ne.InView, Ne.Focus, Ne.Hover, Ne.Tap, Ne.Drag, Ne.Exit],
        Hr = [...Ur].reverse(),
        Wr = Ur.length;

      function Gr(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: n
          }) => function(e, t, n = {}) {
            let r;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const i = t.map((t => Fr(e, t, n)));
              r = Promise.all(i)
            } else if ("string" == typeof t) r = Fr(e, t, n);
            else {
              const i = "function" == typeof t ? vn(e, t, n.custom) : t;
              r = Br(e, i, n)
            }
            return r.then((() => e.notify("AnimationComplete", t)))
          }(e, t, n))))
        }(e);
        const n = {
          [Ne.Animate]: Yr(!0),
          [Ne.InView]: Yr(),
          [Ne.Hover]: Yr(),
          [Ne.Tap]: Yr(),
          [Ne.Drag]: Yr(),
          [Ne.Focus]: Yr(),
          [Ne.Exit]: Yr()
        };
        let r = !0;
        const i = (t, n) => {
          const r = vn(e, n);
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
            c = new Set;
          let p = {},
            h = 1 / 0;
          for (let t = 0; t < Wr; t++) {
            const v = Hr[t],
              y = n[v],
              b = void 0 !== s[v] ? s[v] : l[v],
              w = d(b),
              x = v === a ? y.isActive : null;
            !1 === x && (h = t);
            let _ = b === l[v] && b !== s[v] && w;
            if (_ && r && e.manuallyAnimateOnMount && (_ = !1), y.protectedKeys = {
                ...p
              }, !y.isActive && null === x || !b && !y.prevProp || f(b) || "boolean" == typeof b) continue;
            const S = (m = y.prevProp, "string" == typeof(g = b) ? g !== m : !!Array.isArray(g) && !_t(g, m));
            let k = S || v === a && y.isActive && !_ && w || t > h && w;
            const T = Array.isArray(b) ? b : [b];
            let E = T.reduce(i, {});
            !1 === x && (E = {});
            const {
              prevResolvedValues: C = {}
            } = y, P = {
              ...C,
              ...E
            }, M = e => {
              k = !0, c.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in P) {
              const t = E[e],
                n = C[e];
              p.hasOwnProperty(e) || (t !== n ? Ce(t) && Ce(n) ? !_t(t, n) || S ? M(e) : y.protectedKeys[e] = !0 : void 0 !== t ? M(e) : c.add(e) : void 0 !== t && c.has(e) ? M(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = b, y.prevResolvedValues = E, y.isActive && (p = {
              ...p,
              ...E
            }), r && e.blockInitialAnimation && (k = !1), k && !_ && u.push(...T.map((e => ({
              animation: e,
              options: {
                type: v,
                ...o
              }
            }))))
          }
          var m, g;
          if (c.size) {
            const t = {};
            c.forEach((n => {
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

      function Yr(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const Xr = {
          animation: bt((({
            visualElement: e,
            animate: t
          }) => {
            e.animationState || (e.animationState = Gr(e)), f(t) && (0, r.useEffect)((() => t.subscribe(e)), [t])
          })),
          exit: bt((e => {
            const {
              custom: t,
              visualElement: n
            } = e, [i, o] = xt(), s = (0, r.useContext)(a);
            (0, r.useEffect)((() => {
              n.isPresent = i;
              const e = n.animationState && n.animationState.setActive(Ne.Exit, !i, {
                custom: s && s.custom || t
              });
              e && !i && e.then(o)
            }), [i])
          }))
        },
        qr = (e, t) => Math.abs(e - t);
      class Qr {
        constructor(e, t, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Jr(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n = function(e, t) {
                  const n = qr(e.x, t.x),
                    r = qr(e.y, t.y);
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
              } = St;
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
              this.lastMoveEvent = e, this.lastMoveEventInfo = Kr(t, this.transformPagePoint), Ie(e) && 0 === e.buttons ? this.handlePointerUp(e, t) : Lt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: r
              } = this.handlers, i = Jr(Kr(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, i), r && r(e, i)
            }, Fe(e) && e.touches.length > 1) return;
          this.handlers = t, this.transformPagePoint = n;
          const r = Kr(Ue(e), this.transformPagePoint),
            {
              point: i
            } = r,
            {
              timestamp: o
            } = St;
          this.history = [{
            ...i,
            timestamp: o
          }];
          const {
            onSessionStart: a
          } = t;
          a && a(e, Jr(r, this.history)), this.removeListeners = lt(Ke(window, "pointermove", this.handlePointerMove), Ke(window, "pointerup", this.handlePointerUp), Ke(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), Dt.update(this.updatePoint)
        }
      }

      function Kr(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function Zr(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function Jr({
        point: e
      }, t) {
        return {
          point: e,
          delta: Zr(e, ti(t)),
          offset: Zr(e, ei(t)),
          velocity: ni(t, .1)
        }
      }

      function ei(e) {
        return e[0]
      }

      function ti(e) {
        return e[e.length - 1]
      }

      function ni(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let n = e.length - 1,
          r = null;
        const i = ti(e);
        for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > En(t)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        const o = (i.timestamp - r.timestamp) / 1e3;
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

      function ri(e) {
        return e.max - e.min
      }

      function ii(e, t = 0, n = .01) {
        return Math.abs(e - t) <= n
      }

      function oi(e, t, n, r = .5) {
        e.origin = r, e.originPoint = Ln(t.min, t.max, e.origin), e.scale = ri(n) / ri(t), (ii(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ln(n.min, n.max, e.origin) - e.originPoint, (ii(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function ai(e, t, n, r) {
        oi(e.x, t.x, n.x, null == r ? void 0 : r.originX), oi(e.y, t.y, n.y, null == r ? void 0 : r.originY)
      }

      function si(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + ri(t)
      }

      function li(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + ri(t)
      }

      function ui(e, t, n) {
        li(e.x, t.x, n.x), li(e.y, t.y, n.y)
      }

      function ci(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function di(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
          min: n,
          max: r
        }
      }
      const fi = .35;

      function pi(e, t, n) {
        return {
          min: hi(e, t),
          max: hi(e, n)
        }
      }

      function hi(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      const mi = () => ({
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
        gi = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function vi(e) {
        return [e("x"), e("y")]
      }

      function yi({
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

      function bi(e) {
        return void 0 === e || 1 === e
      }

      function wi({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !bi(e) || !bi(t) || !bi(n)
      }

      function xi(e) {
        return wi(e) || _i(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function _i(e) {
        return Si(e.x) || Si(e.y)
      }

      function Si(e) {
        return e && "0%" !== e
      }

      function ki(e, t, n) {
        return n + t * (e - n)
      }

      function Ti(e, t, n, r, i) {
        return void 0 !== i && (e = ki(e, i, r)), ki(e, n, r) + t
      }

      function Ei(e, t = 0, n = 1, r, i) {
        e.min = Ti(e.min, t, n, r, i), e.max = Ti(e.max, t, n, r, i)
      }

      function Ci(e, {
        x: t,
        y: n
      }) {
        Ei(e.x, t.translate, t.scale, t.originPoint), Ei(e.y, n.translate, n.scale, n.originPoint)
      }

      function Pi(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function Mi(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function Oi(e, t, [n, r, i]) {
        const o = void 0 !== t[i] ? t[i] : .5,
          a = Ln(e.min, e.max, o);
        Ei(e, t[n], t[r], a, t.scale)
      }
      const Ai = ["x", "scaleX", "originX"],
        Li = ["y", "scaleY", "originY"];

      function Di(e, t) {
        Oi(e.x, t, Ai), Oi(e.y, t, Li)
      }

      function zi(e, t) {
        return yi(function(e, t) {
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
      const Ni = new WeakMap;
      class Ri {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = gi(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new Qr(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(Ue(e, "page").point)
            },
            onStart: (e, t) => {
              var n;
              const {
                drag: r,
                dragPropagation: i,
                onDragStart: o
              } = this.getProps();
              (!r || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = nt(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), vi((e => {
                var t, n;
                let r = this.getAxisMotionValue(e).get() || 0;
                if (K.test(r)) {
                  const i = null === (n = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                  i && (r = ri(i) * (parseFloat(r) / 100))
                }
                this.originPoint[e] = r
              })), null == o || o(e, t), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(Ne.Drag, !0))
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
              }(a), void(null !== this.currentDirection && (null == i || i(this.currentDirection)));
              this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), null == o || o(e, t)
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
          null == i || i(e, t)
        }
        cancel() {
          var e, t;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Ne.Drag, !1)
        }
        updateAxis(e, t, n) {
          const {
            drag: r
          } = this.getProps();
          if (!n || !Vi(e, r, this.currentDirection)) return;
          const i = this.getAxisMotionValue(e);
          let o = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (o = function(e, {
            min: t,
            max: n
          }, r) {
            return void 0 !== t && e < t ? e = r ? Ln(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? Ln(n, e, r.max) : Math.min(e, n)), e
          }(o, this.constraints[e], this.elastic[e])), i.set(o)
        }
        resolveConstraints() {
          const {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, r = this.constraints;
          e && c(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !n) && function(e, {
            top: t,
            left: n,
            bottom: r,
            right: i
          }) {
            return {
              x: ci(e.x, n, i),
              y: ci(e.y, t, r)
            }
          }(n.layoutBox, e), this.elastic = function(e = fi) {
            return !1 === e ? e = 0 : !0 === e && (e = fi), {
              x: pi(e, "left", "right"),
              y: pi(e, "top", "bottom")
            }
          }(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && vi((e => {
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
          if (!e || !c(e)) return !1;
          const n = e.current;
          Tn(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: r
          } = this.visualElement;
          if (!r || !r.layout) return !1;
          const i = function(e, t, n) {
            const r = zi(e, n),
              {
                scroll: i
              } = t;
            return i && (Mi(r.x, i.offset.x), Mi(r.y, i.offset.y)), r
          }(n, r.root, this.visualElement.getTransformPagePoint());
          let o = function(e, t) {
            return {
              x: di(e.x, t.x),
              y: di(e.y, t.y)
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
            this.hasMutatedConstraints = !!e, e && (o = yi(e))
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
          } = this.getProps(), s = this.constraints || {}, l = vi((a => {
            if (!Vi(a, t, this.currentDirection)) return;
            let l = (null == s ? void 0 : s[a]) || {};
            o && (l = {
              min: 0,
              max: 0
            });
            const u = r ? 200 : 1e6,
              c = r ? 40 : 1e7,
              d = {
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
            return this.startAxisValueAnimation(a, d)
          }));
          return Promise.all(l).then(a)
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return n.start(Ir(e, n, 0, t))
        }
        stopAnimation() {
          vi((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          var t;
          const n = "_drag" + e.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
        }
        snapToCursor(e) {
          vi((t => {
            const {
              drag: n
            } = this.getProps();
            if (!Vi(t, n, this.currentDirection)) return;
            const {
              projection: r
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              const {
                min: n,
                max: o
              } = r.layout.layoutBox[t];
              i.set(e[t] - Ln(n, o, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var e;
          if (!this.visualElement.current) return;
          const {
            drag: t,
            dragConstraints: n
          } = this.getProps(), {
            projection: r
          } = this.visualElement;
          if (!c(n) || !r || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          vi((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const n = t.get();
              i[e] = function(e, t) {
                let n = .5;
                const r = ri(e),
                  i = ri(t);
                return i > r ? n = $n(t.min, t.max - r, e.min) : r > i && (n = $n(e.min, e.max - i, t.min)), B(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: o
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = o ? o({}, "") : "none", null === (e = r.root) || void 0 === e || e.updateScroll(), r.updateLayout(), this.resolveConstraints(), vi((e => {
            if (!Vi(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: r,
                max: o
              } = this.constraints[e];
            n.set(Ln(r, o, i[e]))
          }))
        }
        addListeners() {
          var e;
          if (!this.visualElement.current) return;
          Ni.set(this.visualElement, this);
          const t = Ke(this.visualElement.current, "pointerdown", (e => {
              const {
                drag: t,
                dragListener: n = !0
              } = this.getProps();
              t && n && this.start(e)
            })),
            n = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              c(e) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: r
            } = this.visualElement,
            i = r.addEventListener("measure", n);
          r && !r.layout && (null === (e = r.root) || void 0 === e || e.updateScroll(), r.updateLayout()), n();
          const o = Re(window, "resize", (() => this.scalePositionWithinConstraints())),
            a = r.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (vi((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            o(), t(), i(), null == a || a()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = fi,
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

      function Vi(e, t, n) {
        return !(!0 !== t && t !== e || null !== n && n !== e)
      }
      const Ii = {
        pan: bt((function({
          onPan: e,
          onPanStart: t,
          onPanEnd: n,
          onPanSessionStart: o,
          visualElement: a
        }) {
          const s = e || t || n || o,
            l = (0, r.useRef)(null),
            {
              transformPagePoint: u
            } = (0, r.useContext)(i),
            c = {
              onSessionStart: o,
              onStart: t,
              onMove: e,
              onEnd: (e, t) => {
                l.current = null, n && n(e, t)
              }
            };
          (0, r.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(c)
          })), Ze(a, "pointerdown", s && function(e) {
            l.current = new Qr(e, c, {
              transformPagePoint: u
            })
          }), at((() => l.current && l.current.end()))
        })),
        drag: bt((function(e) {
          const {
            dragControls: t,
            visualElement: n
          } = e, i = b((() => new Ri(n)));
          (0, r.useEffect)((() => t && t.subscribe(i)), [i, t]), (0, r.useEffect)((() => i.addListeners()), [i])
        }))
      };

      function Fi(e) {
        return "string" == typeof e && e.startsWith("var(--")
      }
      const Bi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function ji(e, t, n = 1) {
        Tn(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [r, i] = function(e) {
          const t = Bi.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        }(e);
        if (!r) return;
        const o = window.getComputedStyle(t).getPropertyValue(r);
        return o ? o.trim() : Fi(i) ? ji(i, t, n + 1) : i
      }
      const $i = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Ui = e => $i.has(e),
        Hi = (e, t) => {
          e.set(t, !1), e.set(t)
        },
        Wi = e => e === j || e === Z;
      var Gi;
      ! function(e) {
        e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
      }(Gi || (Gi = {}));
      const Yi = (e, t) => parseFloat(e.split(", ")[t]),
        Xi = (e, t) => (n, {
          transform: r
        }) => {
          if ("none" === r || !r) return 0;
          const i = r.match(/^matrix3d\((.+)\)$/);
          if (i) return Yi(i[1], t); {
            const t = r.match(/^matrix\((.+)\)$/);
            return t ? Yi(t[1], e) : 0
          }
        },
        qi = new Set(["x", "y", "z"]),
        Qi = L.filter((e => !qi.has(e))),
        Ki = {
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
          x: Xi(4, 13),
          y: Xi(5, 14)
        };

      function Zi(e, t, n, r) {
        return (e => Object.keys(e).some(Ui))(t) ? ((e, t, n = {}, r = {}) => {
          t = {
            ...t
          }, r = {
            ...r
          };
          const i = Object.keys(t).filter(Ui);
          let o = [],
            a = !1;
          const l = [];
          if (i.forEach((i => {
              const s = e.getValue(i);
              if (!e.hasValue(i)) return;
              let u = n[i],
                c = hn(u);
              const d = t[i];
              let f;
              if (Ce(d)) {
                const e = d.length,
                  t = null === d[0] ? 1 : 0;
                u = d[t], c = hn(u);
                for (let n = t; n < e; n++) f ? Tn(hn(d[n]) === f, "All keyframes must be of the same type") : (f = hn(d[n]), Tn(f === c || Wi(c) && Wi(f), "Keyframes must be of the same dimension as the current value"))
              } else f = hn(d);
              if (c !== f)
                if (Wi(c) && Wi(f)) {
                  const e = s.get();
                  "string" == typeof e && s.set(parseFloat(e)), "string" == typeof d ? t[i] = parseFloat(d) : Array.isArray(d) && f === Z && (t[i] = d.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == f ? void 0 : f.transform) && (0 === u || 0 === d) ? 0 === u ? s.set(f.transform(u)) : t[i] = c.transform(d) : (a || (o = function(e) {
                  const t = [];
                  return Qi.forEach((n => {
                    const r = e.getValue(n);
                    void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), a = !0), l.push(i), r[i] = void 0 !== r[i] ? r[i] : t[i], Hi(s, d))
            })), l.length) {
            const n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((e, t, n) => {
                const r = t.measureViewportBox(),
                  i = t.current,
                  o = getComputedStyle(i),
                  {
                    display: a
                  } = o,
                  s = {};
                "none" === a && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
                  s[e] = Ki[e](r, o)
                })), t.render();
                const l = t.measureViewportBox();
                return n.forEach((n => {
                  const r = t.getValue(n);
                  Hi(r, s[n]), e[n] = Ki[n](l, o)
                })), e
              })(t, e, l);
            return o.length && o.forEach((([t, n]) => {
              e.getValue(t).set(n)
            })), e.render(), s && null !== n && window.scrollTo({
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
      const Ji = {
          current: null
        },
        eo = {
          current: !1
        },
        to = Object.keys(y),
        no = to.length,
        ro = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class io {
        constructor({
          parent: e,
          props: t,
          reducedMotionConfig: n,
          visualState: r
        }, i = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Lt.render(this.render, !1, !0);
          const {
            latestValues: o,
            renderState: a
          } = r;
          this.latestValues = o, this.baseTarget = {
            ...o
          }, this.initialValues = t.initial ? {
            ...o
          } : {}, this.renderState = a, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = h(t), this.isVariantNode = m(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: s,
            ...l
          } = this.scrapeMotionValuesFromProps(t);
          for (const e in l) {
            const t = l[e];
            void 0 !== o[e] && N(t) && (t.set(o[e], !1), wn(s) && s.add(e))
          }
        }
        scrapeMotionValuesFromProps(e) {
          return {}
        }
        mount(e) {
          var t;
          this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), eo.current || function() {
            if (eo.current = !0, s)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => Ji.current = e.matches;
                e.addListener(t), t()
              } else Ji.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Ji.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var e, t, n;
          null === (e = this.projection) || void 0 === e || e.unmount(), Dt.update(this.notifyUpdate), Dt.render(this.render), this.valueSubscriptions.forEach((e => e())), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const n = D.has(e),
            r = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && Lt.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, (() => {
            r(), i()
          }))
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        loadFeatures(e, t, n, i, o, a) {
          const s = [];
          "production" !== ct && n && t && Tn(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let t = 0; t < no; t++) {
            const n = to[t],
              {
                isEnabled: i,
                Component: o
              } = y[n];
            i(e) && o && s.push((0, r.createElement)(o, {
              key: n,
              ...e,
              visualElement: this
            }))
          }
          if (!this.projection && o) {
            this.projection = new o(i, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: t,
              layout: n,
              drag: r,
              dragConstraints: s,
              layoutScroll: l
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: Boolean(r) || s && c(s),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: a,
              layoutScroll: l
            })
          }
          return s
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : gi()
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
        setProps(e) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = e;
          for (let t = 0; t < ro.length; t++) {
            const n = ro[t];
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
              if (N(o)) e.addValue(i, o), wn(r) && r.add(i);
              else if (N(a)) e.addValue(i, Ut(o, {
                owner: e
              })), wn(r) && r.remove(i);
              else if (a !== o)
                if (e.hasValue(i)) {
                  const t = e.getValue(i);
                  !t.hasAnimated && t.set(o)
                } else {
                  const t = e.getStaticValue(i);
                  e.addValue(i, Ut(void 0 !== t ? t : o))
                }
            }
            for (const r in n) void 0 === t[r] && e.removeValue(r);
            return t
          }(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          var t;
          return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var e;
          return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
        }
        getVariantContext(e = !1) {
          var t, n;
          if (e) return null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext();
          if (!this.isControllingVariants) {
            const e = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
            return void 0 !== this.props.initial && (e.initial = this.props.initial), e
          }
          const r = {};
          for (let e = 0; e < ao; e++) {
            const t = oo[e],
              n = this.props[t];
            (d(n) || !1 === n) && (r[t] = n)
          }
          return r
        }
        addVariantChild(e) {
          var t;
          const n = this.getClosestVariantNode();
          if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e), () => n.variantChildren.delete(e)
        }
        addValue(e, t) {
          this.hasValue(e) && this.removeValue(e), this.values.set(e, t), this.latestValues[e] = t.get(), this.bindToMotionValue(e, t)
        }
        removeValue(e) {
          var t;
          this.values.delete(e), null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return void 0 === n && void 0 !== t && (n = Ut(t, {
            owner: this
          }), this.addValue(e, n)), n
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t
        }
        getBaseTarget(e) {
          var t;
          const {
            initial: n
          } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = Ee(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
          if (n && void 0 !== r) return r;
          const i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || N(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new Bt), this.events[e].add(t)
        }
        notify(e, ...t) {
          var n;
          null === (n = this.events[e]) || void 0 === n || n.notify(...t)
        }
      }
      const oo = ["initial", ...Ur],
        ao = oo.length;
      class so extends io {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
          var n;
          return null === (n = e.style) || void 0 === n ? void 0 : n[t]
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
            var r;
            const i = {};
            for (const o in e) {
              const e = bn(o, t);
              i[o] = void 0 !== e ? e : null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
            }
            return i
          }(n, e || {}, this);
          if (r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i) {
            ! function(e, t, n) {
              var r, i;
              const o = Object.keys(t).filter((t => !e.hasValue(t))),
                a = o.length;
              if (a)
                for (let s = 0; s < a; s++) {
                  const a = o[s],
                    l = t[a];
                  let u = null;
                  Array.isArray(l) && (u = l[0]), null === u && (u = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : e.readValue(a)) && void 0 !== i ? i : t[a]), null != u && ("string" == typeof u && (/^\-?\d*\.?\d+$/.test(u) || /^0[^.\s]+$/.test(u)) ? u = parseFloat(u) : !gn(u) && rn.test(l) && (u = dn(a, l)), e.addValue(a, Ut(u, {
                    owner: e
                  })), void 0 === n[a] && (n[a] = u), null !== u && e.setBaseTarget(a, u))
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
                  if (!Fi(t)) return;
                  const n = ji(t, r);
                  n && e.set(n)
                }));
                for (const e in t) {
                  const i = t[e];
                  if (!Fi(i)) continue;
                  const o = ji(i, r);
                  o && (t[e] = o, n && void 0 === n[e] && (n[e] = i))
                }
                return {
                  target: t,
                  transitionEnd: n
                }
              }(e, t, r);
              return Zi(e, t = i.target, n, r = i.transitionEnd)
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
      class lo extends so {
        readValueFromInstance(e, t) {
          if (D.has(t)) {
            const e = cn(t);
            return e && e.default || 0
          } {
            const r = (n = e, window.getComputedStyle(n)),
              i = (I(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var n
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return zi(e, t)
        }
        build(e, t, n, r) {
          ie(e, t, n, r.transformTemplate)
        }
        scrapeMotionValuesFromProps(e) {
          return ke(e)
        }
        renderInstance(e, t, n, r) {
          xe(e, t, n, r)
        }
      }
      class uo extends so {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          var n;
          return D.has(t) ? (null === (n = cn(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = _e.has(t) ? t : we(t), e.getAttribute(t))
        }
        measureInstanceViewportBox() {
          return gi()
        }
        scrapeMotionValuesFromProps(e) {
          return Te(e)
        }
        build(e, t, n, r) {
          me(e, t, n, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(e, t, n, r) {
          Se(e, t, 0, r)
        }
        mount(e) {
          this.isSVGTag = ve(e.tagName), super.mount(e)
        }
      }
      const co = (e, t) => O(e) ? new uo(t, {
        enableHardwareAcceleration: !1
      }) : new lo(t, {
        enableHardwareAcceleration: !0
      });

      function fo(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const po = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!Z.test(e)) return e;
              e = parseFloat(e)
            }
            return `${fo(e,t.target.x)}% ${fo(e,t.target.y)}%`
          }
        },
        ho = "_$css",
        mo = {
          correct: (e, {
            treeScale: t,
            projectionDelta: n
          }) => {
            const r = e,
              i = e.includes("var("),
              o = [];
            i && (e = e.replace(Bi, (e => (o.push(e), ho))));
            const a = rn.parse(e);
            if (a.length > 5) return r;
            const s = rn.createTransformer(e),
              l = "number" != typeof a[0] ? 1 : 0,
              u = n.x.scale * t.x,
              c = n.y.scale * t.y;
            a[0 + l] /= u, a[1 + l] /= c;
            const d = Ln(u, c, .5);
            "number" == typeof a[2 + l] && (a[2 + l] /= d), "number" == typeof a[3 + l] && (a[3 + l] /= d);
            let f = s(a);
            if (i) {
              let e = 0;
              f = f.replace(ho, (() => {
                const t = o[e];
                return e++, t
              }))
            }
            return f
          }
        };
      class go extends r.Component {
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
          o = vo, Object.assign(A, o), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: n,
            drag: r,
            isPresent: i
          } = this.props, o = n.projection;
          return o ? (o.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? o.promote() : o.relegate() || Lt.postRender((() => {
            var e;
            (null === (e = o.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: e
          } = this.props.visualElement;
          e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n
          } = this.props, {
            projection: r
          } = e;
          r && (r.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
        }
        safeToRemove() {
          const {
            safeToRemove: e
          } = this.props;
          null == e || e()
        }
        render() {
          return null
        }
      }
      const vo = {
          borderRadius: {
            ...po,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: po,
          borderTopRightRadius: po,
          borderBottomLeftRadius: po,
          borderBottomRightRadius: po,
          boxShadow: mo
        },
        yo = {
          measureLayout: function(e) {
            const [t, n] = xt(), i = (0, r.useContext)(_);
            return r.createElement(go, {
              ...e,
              layoutGroup: i,
              switchLayoutGroup: (0, r.useContext)(k),
              isPresent: t,
              safeToRemove: n
            })
          }
        },
        bo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        wo = bo.length,
        xo = e => "string" == typeof e ? parseFloat(e) : e,
        _o = e => "number" == typeof e || Z.test(e);

      function So(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const ko = Eo(0, .5, qn),
        To = Eo(.5, .95, Wn);

      function Eo(e, t, n) {
        return r => r < e ? 0 : r > t ? 1 : n($n(e, t, r))
      }

      function Co(e, t) {
        e.min = t.min, e.max = t.max
      }

      function Po(e, t) {
        Co(e.x, t.x), Co(e.y, t.y)
      }

      function Mo(e, t, n, r, i) {
        return e = ki(e -= t, 1 / n, r), void 0 !== i && (e = ki(e, 1 / i, r)), e
      }

      function Oo(e, t, [n, r, i], o, a) {
        ! function(e, t = 0, n = 1, r = .5, i, o = e, a = e) {
          if (K.test(t) && (t = parseFloat(t), t = Ln(a.min, a.max, t / 100) - a.min), "number" != typeof t) return;
          let s = Ln(o.min, o.max, r);
          e === o && (s -= t), e.min = Mo(e.min, t, n, s, i), e.max = Mo(e.max, t, n, s, i)
        }(e, t[n], t[r], t[i], t.scale, o, a)
      }
      const Ao = ["x", "scaleX", "originX"],
        Lo = ["y", "scaleY", "originY"];

      function Do(e, t, n, r) {
        Oo(e.x, t, Ao, null == n ? void 0 : n.x, null == r ? void 0 : r.x), Oo(e.y, t, Lo, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
      }

      function zo(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function No(e) {
        return zo(e.x) && zo(e.y)
      }

      function Ro(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }

      function Vo(e) {
        return ri(e.x) / ri(e.y)
      }
      class Io {
        constructor() {
          this.members = []
        }
        add(e) {
          It(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if (Ft(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
          var n;
          const r = this.lead;
          if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
            r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
            const {
              crossfade: i
            } = e.options;
            !1 === i && r.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e => {
            var t, n, r, i, o;
            null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (o = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
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

      function Fo(e, t, n) {
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
      const Bo = (e, t) => e.depth - t.depth;
      class jo {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          It(this.children, e), this.isDirty = !0
        }
        remove(e) {
          Ft(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Bo), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const $o = ["", "X", "Y", "Z"];
      let Uo = 0;

      function Ho({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i
      }) {
        return class {
          constructor(e, n = {}, r = (null == t ? void 0 : t())) {
            this.id = Uo++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(Yo), this.nodes.forEach(Zo), this.nodes.forEach(Jo)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new jo)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Bt), this.eventHandlers.get(e).add(t)
          }
          notifyListeners(e, ...t) {
            const n = this.eventHandlers.get(e);
            null == n || n.notify(...t)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          registerPotentialNode(e, t) {
            this.potentialNodes.set(e, t)
          }
          mount(t, n = !1) {
            var r;
            if (this.instance) return;
            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
            const {
              layoutId: i,
              layout: o,
              visualElement: a
            } = this.options;
            if (a && !a.current && a.mount(t), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (o || i) && (this.isLayoutDirty = !0), e) {
              let n;
              const r = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = _r(r, 250), w.hasAnimatedSinceResize && (w.hasAnimatedSinceResize = !1, this.nodes.forEach(Ko))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && a && (i || o) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r
            }) => {
              var i, o, s, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (o = null !== (i = this.options.transition) && void 0 !== i ? i : a.getDefaultTransition()) && void 0 !== o ? o : oa,
                {
                  onLayoutAnimationStart: d,
                  onLayoutAnimationComplete: f
                } = a.getProps(),
                p = !this.targetLayout || !Ro(this.targetLayout, r) || n,
                h = !t && n;
              if ((null === (s = this.resumeFrom) || void 0 === s ? void 0 : s.instance) || h || t && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, h);
                const t = {
                  ...Dr(c, "layout"),
                  onPlay: d,
                  onComplete: f
                };
                a.shouldReduceMotion && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || 0 !== this.animationProgress || Ko(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = r
            }))
          }
          unmount() {
            var e, t;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, Dt.preRender(this.updateProjection)
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
            var e;
            return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var e;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(ea), this.animationId++)
          }
          willUpdate(e = !0) {
            var t, n, r;
            if (this.root.isUpdateBlocked()) return void(null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              const t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot")
            }
            const {
              layoutId: i,
              layout: o
            } = this.options;
            if (void 0 === i && !o) return;
            const a = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == a ? void 0 : a(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(qo);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(aa), this.potentialNodes.clear()), this.nodes.forEach(Qo), this.nodes.forEach(Wo), this.nodes.forEach(Go), this.clearAllSnapshots(), zt.update(), zt.preRender(), zt.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(Xo), this.sharedNodes.forEach(ta)
          }
          scheduleUpdateProjection() {
            Lt.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Lt.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var e;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = gi(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == t ? void 0 : t.layoutBox)
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
            var e;
            if (!i) return;
            const t = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !No(this.projectionDelta),
              r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
              o = null == r ? void 0 : r(this.latestValues, ""),
              a = o !== this.prevTransformTemplateValue;
            t && (n || xi(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var r;
            return e && (n = this.removeTransform(n)), sa((r = n).x), sa(r.y), {
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
            if (!e) return gi();
            const t = e.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Mi(t.x, n.offset.x), Mi(t.y, n.offset.y)), t
          }
          removeElementScroll(e) {
            const t = gi();
            Po(t, e);
            for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n],
                {
                  scroll: i,
                  options: o
                } = r;
              if (r !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  Po(t, e);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Mi(t.x, -n.offset.x), Mi(t.y, -n.offset.y))
                }
                Mi(t.x, i.offset.x), Mi(t.y, i.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const n = gi();
            Po(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const r = this.path[e];
              !t && r.options.layoutScroll && r.scroll && r !== r.root && Di(n, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), xi(r.latestValues) && Di(n, r.latestValues)
            }
            return xi(this.latestValues) && Di(n, this.latestValues), n
          }
          removeTransform(e) {
            var t;
            const n = gi();
            Po(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const r = this.path[e];
              if (!r.instance) continue;
              if (!xi(r.latestValues)) continue;
              wi(r.latestValues) && r.updateSnapshot();
              const i = gi();
              Po(i, r.measurePageBox()), Do(n, r.latestValues, null === (t = r.snapshot) || void 0 === t ? void 0 : t.layoutBox, i)
            }
            return xi(this.latestValues) && Do(n, this.latestValues), n
          }
          setTargetDelta(e) {
            this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
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
          resolveTargetDelta() {
            var e;
            const t = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: n,
              layoutId: r
            } = this.options;
            if (this.layout && (n || r)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout ? (this.relativeParent = e, this.relativeTarget = gi(), this.relativeTargetOrigin = gi(), ui(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Po(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var i, o, a;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = gi(), this.targetWithTransforms = gi()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (i = this.target, o = this.relativeTarget, a = this.relativeParent.target, si(i.x, o.x, a.x), si(i.y, o.y, a.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Po(this.target, this.layout.layoutBox), Ci(this.target, this.targetDelta)) : Po(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const e = this.getClosestProjectingParent();
                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = gi(), this.relativeTargetOrigin = gi(), ui(this.relativeTargetOrigin, this.target, e.target), Po(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !wi(this.parent.latestValues) && !_i(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var e;
            const {
              isProjectionDirty: t,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const r = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== r;
            let o = !0;
            if (t && (o = !1), i && n && (o = !1), o) return;
            const {
              layout: a,
              layoutId: s
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !a && !s) return;
            Po(this.layoutCorrected, this.layout.layoutBox),
              function(e, t, n, r = !1) {
                var i, o;
                const a = n.length;
                if (!a) return;
                let s, l;
                t.x = t.y = 1;
                for (let u = 0; u < a; u++) s = n[u], l = s.projectionDelta, "contents" !== (null === (o = null === (i = s.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && Di(e, {
                  x: -s.scroll.offset.x,
                  y: -s.scroll.offset.y
                }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Ci(e, l)), r && xi(s.latestValues) && Di(e, s.latestValues));
                t.x = Pi(t.x), t.y = Pi(t.y)
              }(this.layoutCorrected, this.treeScale, this.path, i);
            const {
              target: l
            } = r;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = mi(), this.projectionDeltaWithTransform = mi());
            const u = this.treeScale.x,
              c = this.treeScale.y,
              d = this.projectionTransform;
            ai(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Fo(this.projectionDelta, this.treeScale), this.projectionTransform === d && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            var t, n, r;
            null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, t = !1) {
            var n, r;
            const i = this.snapshot,
              o = (null == i ? void 0 : i.latestValues) || {},
              a = {
                ...this.latestValues
              },
              s = mi();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
            const l = gi(),
              u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0) <= 1,
              d = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(ia));
            this.animationProgress = 0, this.mixTargetDelta = t => {
              var n;
              const r = t / 1e3;
              var i, f, p, h;
              na(s.x, e.x, r), na(s.y, e.y, r), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (ui(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, f = this.relativeTargetOrigin, p = l, h = r, ra(i.x, f.x, p.x, h), ra(i.y, f.y, p.y, h)), u && (this.animationValues = a, function(e, t, n, r, i, o) {
                i ? (e.opacity = Ln(0, void 0 !== n.opacity ? n.opacity : 1, ko(r)), e.opacityExit = Ln(void 0 !== t.opacity ? t.opacity : 1, 0, To(r))) : o && (e.opacity = Ln(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                for (let i = 0; i < wo; i++) {
                  const o = `border${bo[i]}Radius`;
                  let a = So(t, o),
                    s = So(n, o);
                  void 0 === a && void 0 === s || (a || (a = 0), s || (s = 0), 0 === a || 0 === s || _o(a) === _o(s) ? (e[o] = Math.max(Ln(xo(a), xo(s), r), 0), (K.test(s) || K.test(a)) && (e[o] += "%")) : e[o] = s)
                }(t.rotate || n.rotate) && (e.rotate = Ln(t.rotate || 0, n.rotate || 0, r))
              }(a, o, this.latestValues, r, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
            }, this.mixTargetDelta(0)
          }
          startAnimation(e) {
            var t, n;
            this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (Dt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Lt.update((() => {
              w.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n = {}) {
                const r = N(e) ? e : Ut(e);
                return r.start(Ir("", r, t, n)), {
                  stop: () => r.stop(),
                  isAnimating: () => r.isAnimating()
                }
              }(0, 1e3, {
                ...e,
                onUpdate: t => {
                  var n;
                  this.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                },
                onComplete: () => {
                  var t;
                  null === (t = e.onComplete) || void 0 === t || t.call(e), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var e;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var e;
            this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
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
              if (this !== e && this.layout && r && la(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                n = this.target || gi();
                const t = ri(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                const r = ri(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + r
              }
              Po(t, n), Di(t, i), ai(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            var n, r, i;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Io), this.sharedNodes.get(e).add(t), t.promote({
              transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (i = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, t)
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
            for (let t = 0; t < $o.length; t++) {
              const i = "rotate" + $o[t];
              n[i] && (r[i] = n[i], e.setStaticValue(i, 0))
            }
            null == e || e.render();
            for (const t in r) e.setStaticValue(t, r[t]);
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var t, n, r;
            const i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            i.visibility = "";
            const o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = Oe(e.pointerEvents) || "", i.transform = o ? o(this.latestValues, "") : "none", i;
            const a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = Oe(e.pointerEvents) || ""), this.hasProjected && !xi(this.latestValues) && (t.transform = o ? o({}, "") : "none", this.hasProjected = !1), t
            }
            const s = a.animationValues || a.latestValues;
            this.applyTransformsToTarget(), i.transform = Fo(this.projectionDeltaWithTransform, this.treeScale, s), o && (i.transform = o(s, i.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, a.animationValues ? i.opacity = a === this ? null !== (r = null !== (n = s.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : i.opacity = a === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const e in A) {
              if (void 0 === s[e]) continue;
              const {
                correct: t,
                applyTo: n
              } = A[e], r = t(s[e], a);
              if (n) {
                const e = n.length;
                for (let t = 0; t < e; t++) i[n[t]] = r
              } else i[e] = r
            }
            return this.options.layoutId && (i.pointerEvents = a === this ? Oe(e.pointerEvents) || "" : "none"), i
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(qo), this.root.sharedNodes.clear()
          }
        }
      }

      function Wo(e) {
        e.updateLayout()
      }

      function Go(e) {
        var t, n, r;
        const i = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: n
          } = e.layout, {
            animationType: r
          } = e.options, o = i.source !== e.layout.source;
          "size" === r ? vi((e => {
            const n = o ? i.measuredBox[e] : i.layoutBox[e],
              r = ri(n);
            n.min = t[e].min, n.max = n.min + r
          })) : la(r, i.layoutBox, t) && vi((e => {
            const n = o ? i.measuredBox[e] : i.layoutBox[e],
              r = ri(t[e]);
            n.max = n.min + r
          }));
          const a = mi();
          ai(a, t, i.layoutBox);
          const s = mi();
          o ? ai(s, e.applyTransform(n, !0), i.measuredBox) : ai(s, t, i.layoutBox);
          const l = !No(a);
          let u = !1;
          if (!e.resumeFrom) {
            const n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: e,
                layout: r
              } = n;
              if (e && r) {
                const n = gi();
                ui(n, i.layoutBox, e.layoutBox);
                const o = gi();
                ui(o, t, r.layoutBox), Ro(n, o) || (u = !0)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: i,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else e.isLead() && (null === (r = (n = e.options).onExitComplete) || void 0 === r || r.call(n));
        e.options.transition = void 0
      }

      function Yo(e) {
        e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
      }

      function Xo(e) {
        e.clearSnapshot()
      }

      function qo(e) {
        e.clearMeasurements()
      }

      function Qo(e) {
        const {
          visualElement: t
        } = e.options;
        (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function Ko(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
      }

      function Zo(e) {
        e.resolveTargetDelta()
      }

      function Jo(e) {
        e.calcProjection()
      }

      function ea(e) {
        e.resetRotation()
      }

      function ta(e) {
        e.removeLeadSnapshot()
      }

      function na(e, t, n) {
        e.translate = Ln(t.translate, 0, n), e.scale = Ln(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function ra(e, t, n, r) {
        e.min = Ln(t.min, n.min, r), e.max = Ln(t.max, n.max, r)
      }

      function ia(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const oa = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function aa(e, t) {
        let n = e.root;
        for (let t = e.path.length - 1; t >= 0; t--)
          if (Boolean(e.path[t].instance)) {
            n = e.path[t];
            break
          } const r = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
        r && e.mount(r, !0)
      }

      function sa(e) {
        e.min = Math.round(e.min), e.max = Math.round(e.max)
      }

      function la(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !ii(Vo(t), Vo(n), .2)
      }
      const ua = Ho({
          attachResizeListener: (e, t) => Re(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        ca = {
          current: void 0
        },
        da = Ho({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!ca.current) {
              const e = new ua(0, {});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), ca.current = e
            }
            return ca.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        fa = {
          ...Xr,
          ...wt,
          ...Ii,
          ...yo
        },
        pa = P(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, n, r, i) {
          return {
            ...O(e) ? De : ze,
            preloadedFeatures: n,
            useRender: be(t),
            createVisualElement: r,
            projectionNodeConstructor: i,
            Component: e
          }
        }(e, t, fa, co, da)))
    },
    8254: (e, t, n) => {
      "use strict";
      n.d(t, {
        _T: () => i,
        pi: () => r
      });
      var r = function() {
        return r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, r.apply(this, arguments)
      };

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);