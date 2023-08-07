/*! For license information please see 501a4a1822567beea56b.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [916], {
    7593: (e, t, n) => {
      var r = n(289),
        i = n(3240);

      function a(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      var o = new Set,
        s = {};

      function l(e, t) {
        u(e, t), u(e + "Capture", t)
      }

      function u(e, t) {
        for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e])
      }
      var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        d = Object.prototype.hasOwnProperty,
        f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        h = {},
        p = {};

      function m(e, t, n, r, i, a, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
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
          return !!d.call(p, e) || !d.call(h, e) && (f.test(e) ? p[e] = !0 : (h[e] = !0, !1))
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
        k = Symbol.for("react.element"),
        x = Symbol.for("react.portal"),
        S = Symbol.for("react.fragment"),
        E = Symbol.for("react.strict_mode"),
        P = Symbol.for("react.profiler"),
        C = Symbol.for("react.provider"),
        T = Symbol.for("react.context"),
        L = Symbol.for("react.forward_ref"),
        M = Symbol.for("react.suspense"),
        D = Symbol.for("react.suspense_list"),
        R = Symbol.for("react.memo"),
        A = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      var V = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
      var N = Symbol.iterator;

      function _(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = N && e[N] || e["@@iterator"]) ? e : null
      }
      var z, F = Object.assign;

      function O(e) {
        if (void 0 === z) try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          z = t && t[1] || ""
        }
        return "\n" + z + e
      }
      var I = !1;

      function B(e, t) {
        if (!e || I) return "";
        I = !0;
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
            for (var i = t.stack.split("\n"), a = r.stack.split("\n"), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
            for (; 1 <= o && 0 <= s; o--, s--)
              if (i[o] !== a[s]) {
                if (1 !== o || 1 !== s)
                  do {
                    if (o--, 0 > --s || i[o] !== a[s]) {
                      var l = "\n" + i[o].replace(" at new ", " at ");
                      return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                    }
                  } while (1 <= o && 0 <= s);
                break
              }
          }
        } finally {
          I = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? O(e) : ""
      }

      function j(e) {
        switch (e.tag) {
          case 5:
            return O(e.type);
          case 16:
            return O("Lazy");
          case 13:
            return O("Suspense");
          case 19:
            return O("SuspenseList");
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

      function U(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case S:
            return "Fragment";
          case x:
            return "Portal";
          case P:
            return "Profiler";
          case E:
            return "StrictMode";
          case M:
            return "Suspense";
          case D:
            return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
          case T:
            return (e.displayName || "Context") + ".Consumer";
          case C:
            return (e._context.displayName || "Context") + ".Provider";
          case L:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
            return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
          case A:
            t = e._payload, e = e._init;
            try {
              return U(e(t))
            } catch (e) {}
        }
        return null
      }

      function W(e) {
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
            return U(t);
          case 8:
            return t === E ? "StrictMode" : "Mode";
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

      function $(e) {
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

      function H(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
      }

      function Q(e) {
        e._valueTracker || (e._valueTracker = function(e) {
          var t = H(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var i = n.get,
              a = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0,
              get: function() {
                return i.call(this)
              },
              set: function(e) {
                r = "" + e, a.call(this, e)
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
        return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
      }

      function q(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body
        } catch (t) {
          return e.body
        }
      }

      function X(e, t) {
        var n = t.checked;
        return F({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        })
      }

      function K(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        n = $(null != t.value ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
      }

      function Z(e, t) {
        null != (t = t.checked) && b(e, "checked", t, !1)
      }

      function G(e, t) {
        Z(e, t);
        var n = $(t.value),
          r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, $(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
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
        "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
      }
      var te = Array.isArray;

      function ne(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
          for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
          for (n = "" + $(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
            null !== t || e[i].disabled || (t = e[i])
          }
          null !== t && (t.selected = !0)
        }
      }

      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
        return F({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        })
      }

      function ie(e, t) {
        var n = t.value;
        if (null == n) {
          if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(a(92));
            if (te(n)) {
              if (1 < n.length) throw Error(a(93));
              n = n[0]
            }
            t = n
          }
          null == t && (t = ""), n = t
        }
        e._wrapperState = {
          initialValue: $(n)
        }
      }

      function ae(e, t) {
        var n = $(t.value),
          r = $(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
      }

      function oe(e) {
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
      var he = {
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
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || he.hasOwnProperty(e) && he[e] ? ("" + t).trim() : t + "px"
      }

      function ge(e, t) {
        for (var n in e = e.style, t)
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              i = me(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
          }
      }
      Object.keys(he).forEach((function(e) {
        pe.forEach((function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), he[t] = he[e]
        }))
      }));
      var ve = F({
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
          if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(a(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
          }
          if (null != t.style && "object" != typeof t.style) throw Error(a(62))
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

      function ke(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
      }
      var xe = null,
        Se = null,
        Ee = null;

      function Pe(e) {
        if (e = bi(e)) {
          if ("function" != typeof xe) throw Error(a(280));
          var t = e.stateNode;
          t && (t = ki(t), xe(e.stateNode, e.type, t))
        }
      }

      function Ce(e) {
        Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
      }

      function Te() {
        if (Se) {
          var e = Se,
            t = Ee;
          if (Ee = Se = null, Pe(e), t)
            for (e = 0; e < t.length; e++) Pe(t[e])
        }
      }

      function Le(e, t) {
        return e(t)
      }

      function Me() {}
      var De = !1;

      function Re(e, t, n) {
        if (De) return e(t, n);
        De = !0;
        try {
          return Le(e, t, n)
        } finally {
          De = !1, (null !== Se || null !== Ee) && (Me(), Te())
        }
      }

      function Ae(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = ki(n);
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
        if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
        return n
      }
      var Ve = !1;
      if (c) try {
        var Ne = {};
        Object.defineProperty(Ne, "passive", {
          get: function() {
            Ve = !0
          }
        }), window.addEventListener("test", Ne, Ne), window.removeEventListener("test", Ne, Ne)
      } catch (ce) {
        Ve = !1
      }

      function _e(e, t, n, r, i, a, o, s, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u)
        } catch (e) {
          this.onError(e)
        }
      }
      var ze = !1,
        Fe = null,
        Oe = !1,
        Ie = null,
        Be = {
          onError: function(e) {
            ze = !0, Fe = e
          }
        };

      function je(e, t, n, r, i, a, o, s, l) {
        ze = !1, Fe = null, _e.apply(Be, arguments)
      }

      function Ue(e) {
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

      function We(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
        }
        return null
      }

      function $e(e) {
        if (Ue(e) !== e) throw Error(a(188))
      }

      function He(e) {
        return null !== (e = function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = Ue(e))) throw Error(a(188));
            return t !== e ? null : e
          }
          for (var n = e, r = t;;) {
            var i = n.return;
            if (null === i) break;
            var o = i.alternate;
            if (null === o) {
              if (null !== (r = i.return)) {
                n = r;
                continue
              }
              break
            }
            if (i.child === o.child) {
              for (o = i.child; o;) {
                if (o === n) return $e(i), e;
                if (o === r) return $e(i), t;
                o = o.sibling
              }
              throw Error(a(188))
            }
            if (n.return !== r.return) n = i, r = o;
            else {
              for (var s = !1, l = i.child; l;) {
                if (l === n) {
                  s = !0, n = i, r = o;
                  break
                }
                if (l === r) {
                  s = !0, r = i, n = o;
                  break
                }
                l = l.sibling
              }
              if (!s) {
                for (l = o.child; l;) {
                  if (l === n) {
                    s = !0, n = o, r = i;
                    break
                  }
                  if (l === r) {
                    s = !0, r = o, n = i;
                    break
                  }
                  l = l.sibling
                }
                if (!s) throw Error(a(189))
              }
            }
            if (n.alternate !== r) throw Error(a(190))
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t
        }(e)) ? Qe(e) : null
      }

      function Qe(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e;) {
          var t = Qe(e);
          if (null !== t) return t;
          e = e.sibling
        }
        return null
      }
      var Ye = i.unstable_scheduleCallback,
        qe = i.unstable_cancelCallback,
        Xe = i.unstable_shouldYield,
        Ke = i.unstable_requestPaint,
        Ze = i.unstable_now,
        Ge = i.unstable_getCurrentPriorityLevel,
        Je = i.unstable_ImmediatePriority,
        et = i.unstable_UserBlockingPriority,
        tt = i.unstable_NormalPriority,
        nt = i.unstable_LowPriority,
        rt = i.unstable_IdlePriority,
        it = null,
        at = null,
        ot = Math.clz32 ? Math.clz32 : function(e) {
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
          a = e.pingedLanes,
          o = 268435455 & n;
        if (0 !== o) {
          var s = o & ~i;
          0 !== s ? r = dt(s) : 0 != (a &= o) && (r = dt(a))
        } else 0 != (o = n & ~i) ? r = dt(o) : 0 !== a && (r = dt(a));
        if (0 === r) return 0;
        if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (a = t & -t) || 16 === i && 0 != (4194240 & a))) return t;
        if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~i;
        return r
      }

      function ht(e, t) {
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
        e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
      }

      function yt(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
          var r = 31 - ot(n),
            i = 1 << r;
          i & t | e[r] & t && (e[r] |= t), n &= ~i
        }
      }
      var bt = 0;

      function wt(e) {
        return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
      }
      var kt, xt, St, Et, Pt, Ct = !1,
        Tt = [],
        Lt = null,
        Mt = null,
        Dt = null,
        Rt = new Map,
        At = new Map,
        Vt = [],
        Nt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

      function _t(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Lt = null;
            break;
          case "dragenter":
          case "dragleave":
            Mt = null;
            break;
          case "mouseover":
          case "mouseout":
            Dt = null;
            break;
          case "pointerover":
          case "pointerout":
            Rt.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            At.delete(t.pointerId)
        }
      }

      function zt(e, t, n, r, i, a) {
        return null === e || e.nativeEvent !== a ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [i]
        }, null !== t && null !== (t = bi(t)) && xt(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
      }

      function Ft(e) {
        var t = yi(e.target);
        if (null !== t) {
          var n = Ue(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = We(n))) return e.blockedOn = t, void Pt(e.priority, (function() {
                St(n)
              }))
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
      }

      function Ot(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = bi(n)) && xt(t), e.blockedOn = n, !1;
          var r = new(n = e.nativeEvent).constructor(n.type, n);
          we = r, n.target.dispatchEvent(r), we = null, t.shift()
        }
        return !0
      }

      function It(e, t, n) {
        Ot(e) && n.delete(t)
      }

      function Bt() {
        Ct = !1, null !== Lt && Ot(Lt) && (Lt = null), null !== Mt && Ot(Mt) && (Mt = null), null !== Dt && Ot(Dt) && (Dt = null), Rt.forEach(It), At.forEach(It)
      }

      function jt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Bt)))
      }

      function Ut(e) {
        function t(t) {
          return jt(t, e)
        }
        if (0 < Tt.length) {
          jt(Tt[0], e);
          for (var n = 1; n < Tt.length; n++) {
            var r = Tt[n];
            r.blockedOn === e && (r.blockedOn = null)
          }
        }
        for (null !== Lt && jt(Lt, e), null !== Mt && jt(Mt, e), null !== Dt && jt(Dt, e), Rt.forEach(t), At.forEach(t), n = 0; n < Vt.length; n++)(r = Vt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Vt.length && null === (n = Vt[0]).blockedOn;) Ft(n), null === n.blockedOn && Vt.shift()
      }
      var Wt = w.ReactCurrentBatchConfig,
        $t = !0;

      function Ht(e, t, n, r) {
        var i = bt,
          a = Wt.transition;
        Wt.transition = null;
        try {
          bt = 1, Yt(e, t, n, r)
        } finally {
          bt = i, Wt.transition = a
        }
      }

      function Qt(e, t, n, r) {
        var i = bt,
          a = Wt.transition;
        Wt.transition = null;
        try {
          bt = 4, Yt(e, t, n, r)
        } finally {
          bt = i, Wt.transition = a
        }
      }

      function Yt(e, t, n, r) {
        if ($t) {
          var i = Xt(e, t, n, r);
          if (null === i) $r(e, t, r, qt, n), _t(e, r);
          else if (function(e, t, n, r, i) {
              switch (t) {
                case "focusin":
                  return Lt = zt(Lt, e, t, n, r, i), !0;
                case "dragenter":
                  return Mt = zt(Mt, e, t, n, r, i), !0;
                case "mouseover":
                  return Dt = zt(Dt, e, t, n, r, i), !0;
                case "pointerover":
                  var a = i.pointerId;
                  return Rt.set(a, zt(Rt.get(a) || null, e, t, n, r, i)), !0;
                case "gotpointercapture":
                  return a = i.pointerId, At.set(a, zt(At.get(a) || null, e, t, n, r, i)), !0
              }
              return !1
            }(i, e, t, n, r)) r.stopPropagation();
          else if (_t(e, r), 4 & t && -1 < Nt.indexOf(e)) {
            for (; null !== i;) {
              var a = bi(i);
              if (null !== a && kt(a), null === (a = Xt(e, t, n, r)) && $r(e, t, r, qt, n), a === i) break;
              i = a
            }
            null !== i && r.stopPropagation()
          } else $r(e, t, r, null, n)
        }
      }
      var qt = null;

      function Xt(e, t, n, r) {
        if (qt = null, null !== (e = yi(e = ke(r))))
          if (null === (t = Ue(e))) e = null;
          else if (13 === (n = t.tag)) {
          if (null !== (e = We(t))) return e;
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null);
        return qt = e, null
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
            switch (Ge()) {
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
      var Zt = null,
        Gt = null,
        Jt = null;

      function en() {
        if (Jt) return Jt;
        var e, t, n = Gt,
          r = n.length,
          i = "value" in Zt ? Zt.value : Zt.textContent,
          a = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
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

      function an(e) {
        function t(t, n, r, i, a) {
          for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
          return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
        }
        return F(t.prototype, {
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
      var on, sn, ln, un = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        cn = an(un),
        dn = F({}, un, {
          view: 0,
          detail: 0
        }),
        fn = an(dn),
        hn = F({}, dn, {
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
            return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (on = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = on = 0, ln = e), on)
          },
          movementY: function(e) {
            return "movementY" in e ? e.movementY : sn
          }
        }),
        pn = an(hn),
        mn = an(F({}, hn, {
          dataTransfer: 0
        })),
        gn = an(F({}, dn, {
          relatedTarget: 0
        })),
        vn = an(F({}, un, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        })),
        yn = F({}, un, {
          clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
          }
        }),
        bn = an(yn),
        wn = an(F({}, un, {
          data: 0
        })),
        kn = {
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
        Sn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };

      function En(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
      }

      function Pn() {
        return En
      }
      var Cn = F({}, dn, {
          key: function(e) {
            if (e.key) {
              var t = kn[e.key] || e.key;
              if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? xn[e.keyCode] || "Unidentified" : ""
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
        Tn = an(Cn),
        Ln = an(F({}, hn, {
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
        Mn = an(F({}, dn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Pn
        })),
        Dn = an(F({}, un, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        })),
        Rn = F({}, hn, {
          deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
          },
          deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
          },
          deltaZ: 0,
          deltaMode: 0
        }),
        An = an(Rn),
        Vn = [9, 13, 27, 32],
        Nn = c && "CompositionEvent" in window,
        _n = null;
      c && "documentMode" in document && (_n = document.documentMode);
      var zn = c && "TextEvent" in window && !_n,
        Fn = c && (!Nn || _n && 8 < _n && 11 >= _n),
        On = String.fromCharCode(32),
        In = !1;

      function Bn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Vn.indexOf(t.keyCode);
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

      function jn(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
      }
      var Un = !1,
        Wn = {
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

      function $n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Wn[e.type] : "textarea" === t
      }

      function Hn(e, t, n, r) {
        Ce(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }))
      }
      var Qn = null,
        Yn = null;

      function qn(e) {
        Or(e, 0)
      }

      function Xn(e) {
        if (Y(wi(e))) return e
      }

      function Kn(e, t) {
        if ("change" === e) return t
      }
      var Zn = !1;
      if (c) {
        var Gn;
        if (c) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
          }
          Gn = Jn
        } else Gn = !1;
        Zn = Gn && (!document.documentMode || 9 < document.documentMode)
      }

      function tr() {
        Qn && (Qn.detachEvent("onpropertychange", nr), Yn = Qn = null)
      }

      function nr(e) {
        if ("value" === e.propertyName && Xn(Yn)) {
          var t = [];
          Hn(t, Yn, e, ke(e)), Re(qn, t)
        }
      }

      function rr(e, t, n) {
        "focusin" === e ? (tr(), Yn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
      }

      function ir(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Yn)
      }

      function ar(e, t) {
        if ("click" === e) return Xn(t)
      }

      function or(e, t) {
        if ("input" === e || "change" === e) return Xn(t)
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
          if (!d.call(t, i) || !sr(e[i], t[i])) return !1
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

      function dr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
      }

      function fr() {
        for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = "string" == typeof t.contentWindow.location.href
          } catch (e) {
            n = !1
          }
          if (!n) break;
          t = q((e = t.contentWindow).document)
        }
        return t
      }

      function hr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
      }

      function pr(e) {
        var t = fr(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
          if (null !== r && hr(n))
            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var i = n.textContent.length,
              a = Math.min(r.start, i);
            r = void 0 === r.end ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = cr(n, a);
            var o = cr(n, r);
            i && o && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
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

      function wr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br || null == gr || gr !== q(r) || (r = "selectionStart" in (r = gr) && hr(r) ? {
          start: r.selectionStart,
          end: r.selectionEnd
        } : {
          anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }, yr && lr(yr, r) || (yr = r, 0 < (r = Qr(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = gr)))
      }

      function kr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
      }
      var xr = {
          animationend: kr("Animation", "AnimationEnd"),
          animationiteration: kr("Animation", "AnimationIteration"),
          animationstart: kr("Animation", "AnimationStart"),
          transitionend: kr("Transition", "TransitionEnd")
        },
        Sr = {},
        Er = {};

      function Pr(e) {
        if (Sr[e]) return Sr[e];
        if (!xr[e]) return e;
        var t, n = xr[e];
        for (t in n)
          if (n.hasOwnProperty(t) && t in Er) return Sr[e] = n[t];
        return e
      }
      c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
      var Cr = Pr("animationend"),
        Tr = Pr("animationiteration"),
        Lr = Pr("animationstart"),
        Mr = Pr("transitionend"),
        Dr = new Map,
        Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

      function Ar(e, t) {
        Dr.set(e, t), l(t, [e])
      }
      for (var Vr = 0; Vr < Rr.length; Vr++) {
        var Nr = Rr[Vr];
        Ar(Nr.toLowerCase(), "on" + (Nr[0].toUpperCase() + Nr.slice(1)))
      }
      Ar(Cr, "onAnimationEnd"), Ar(Tr, "onAnimationIteration"), Ar(Lr, "onAnimationStart"), Ar("dblclick", "onDoubleClick"), Ar("focusin", "onFocus"), Ar("focusout", "onBlur"), Ar(Mr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        zr = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));

      function Fr(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
          function(e, t, n, r, i, o, s, l, u) {
            if (je.apply(this, arguments), ze) {
              if (!ze) throw Error(a(198));
              var c = Fe;
              ze = !1, Fe = null, Oe || (Oe = !0, Ie = c)
            }
          }(r, t, void 0, e), e.currentTarget = null
      }

      function Or(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = r.event;
          r = r.listeners;
          e: {
            var a = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var s = r[o],
                  l = s.instance,
                  u = s.currentTarget;
                if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
                Fr(i, s, u), a = l
              } else
                for (o = 0; o < r.length; o++) {
                  if (l = (s = r[o]).instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
                  Fr(i, s, u), a = l
                }
          }
        }
        if (Oe) throw e = Ie, Oe = !1, Ie = null, e
      }

      function Ir(e, t) {
        var n = t[mi];
        void 0 === n && (n = t[mi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Wr(t, e, 2, !1), n.add(r))
      }

      function Br(e, t, n) {
        var r = 0;
        t && (r |= 4), Wr(n, e, r, t)
      }
      var jr = "_reactListening" + Math.random().toString(36).slice(2);

      function Ur(e) {
        if (!e[jr]) {
          e[jr] = !0, o.forEach((function(t) {
            "selectionchange" !== t && (zr.has(t) || Br(t, !1, e), Br(t, !0, e))
          }));
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[jr] || (t[jr] = !0, Br("selectionchange", !1, t))
        }
      }

      function Wr(e, t, n, r) {
        switch (Kt(t)) {
          case 1:
            var i = Ht;
            break;
          case 4:
            i = Qt;
            break;
          default:
            i = Yt
        }
        n = i.bind(null, t, n, e), i = void 0, !Ve || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, {
          capture: !0,
          passive: i
        }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
          passive: i
        }) : e.addEventListener(t, n, !1)
      }

      function $r(e, t, n, r, i) {
        var a = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var s = r.stateNode.containerInfo;
            if (s === i || 8 === s.nodeType && s.parentNode === i) break;
            if (4 === o)
              for (o = r.return; null !== o;) {
                var l = o.tag;
                if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
                o = o.return
              }
            for (; null !== s;) {
              if (null === (o = yi(s))) return;
              if (5 === (l = o.tag) || 6 === l) {
                r = a = o;
                continue e
              }
              s = s.parentNode
            }
          }
          r = r.return
        }
        Re((function() {
          var r = a,
            i = ke(n),
            o = [];
          e: {
            var s = Dr.get(e);
            if (void 0 !== s) {
              var l = cn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === tn(n)) break e;
                case "keydown":
                case "keyup":
                  l = Tn;
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
                  l = Mn;
                  break;
                case Cr:
                case Tr:
                case Lr:
                  l = vn;
                  break;
                case Mr:
                  l = Dn;
                  break;
                case "scroll":
                  l = fn;
                  break;
                case "wheel":
                  l = An;
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
                d = !c && "scroll" === e,
                f = c ? null !== s ? s + "Capture" : null : s;
              c = [];
              for (var h, p = r; null !== p;) {
                var m = (h = p).stateNode;
                if (5 === h.tag && null !== m && (h = m, null !== f && null != (m = Ae(p, f)) && c.push(Hr(p, m, h))), d) break;
                p = p.return
              }
              0 < c.length && (s = new l(s, u, null, n, i), o.push({
                event: s,
                listeners: c
              }))
            }
          }
          if (0 == (7 & t)) {
            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !yi(u) && !u[pi]) && (l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? yi(u) : null) && (u !== (d = Ue(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
              if (c = pn, m = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Ln, m = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == l ? s : wi(l), h = null == u ? s : wi(u), (s = new c(m, p + "leave", l, n, i)).target = d, s.relatedTarget = h, m = null, yi(i) === r && ((c = new c(f, p + "enter", u, n, i)).target = h, c.relatedTarget = d, m = c), d = m, l && u) e: {
                for (f = u, p = 0, h = c = l; h; h = Yr(h)) p++;
                for (h = 0, m = f; m; m = Yr(m)) h++;
                for (; 0 < p - h;) c = Yr(c),
                p--;
                for (; 0 < h - p;) f = Yr(f),
                h--;
                for (; p--;) {
                  if (c === f || null !== f && c === f.alternate) break e;
                  c = Yr(c), f = Yr(f)
                }
                c = null
              }
              else c = null;
              null !== l && qr(o, s, l, c, !1), null !== u && null !== d && qr(o, d, u, c, !0)
            }
            if ("select" === (l = (s = r ? wi(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = Kn;
            else if ($n(s))
              if (Zn) g = or;
              else {
                g = ir;
                var v = rr
              }
            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = ar);
            switch (g && (g = g(e, r)) ? Hn(o, g, n, i) : (v && v(e, s, r), "focusout" === e && (v = s._wrapperState) && v.controlled && "number" === s.type && ee(s, "number", s.value)), v = r ? wi(r) : window, e) {
              case "focusin":
                ($n(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
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
                br = !1, wr(o, n, i);
                break;
              case "selectionchange":
                if (mr) break;
              case "keydown":
              case "keyup":
                wr(o, n, i)
            }
            var y;
            if (Nn) e: {
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
            else Un ? Bn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Fn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = en()) : (Gt = "value" in (Zt = i) ? Zt.value : Zt.textContent, Un = !0)), 0 < (v = Qr(r, b)).length && (b = new wn(b, e, null, n, i), o.push({
              event: b,
              listeners: v
            }), (y || null !== (y = jn(n))) && (b.data = y))), (y = zn ? function(e, t) {
              switch (e) {
                case "compositionend":
                  return jn(t);
                case "keypress":
                  return 32 !== t.which ? null : (In = !0, On);
                case "textInput":
                  return (e = t.data) === On && In ? null : e;
                default:
                  return null
              }
            }(e, n) : function(e, t) {
              if (Un) return "compositionend" === e || !Nn && Bn(e, t) ? (e = en(), Jt = Gt = Zt = null, Un = !1, e) : null;
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
                  return Fn && "ko" !== t.locale ? null : t.data
              }
            }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (i = new wn("onBeforeInput", "beforeinput", null, n, i), o.push({
              event: i,
              listeners: r
            }), i.data = y)
          }
          Or(o, t)
        }))
      }

      function Hr(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        }
      }

      function Qr(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
          var i = e,
            a = i.stateNode;
          5 === i.tag && null !== a && (i = a, null != (a = Ae(e, n)) && r.unshift(Hr(e, a, i)), null != (a = Ae(e, t)) && r.push(Hr(e, a, i))), e = e.return
        }
        return r
      }

      function Yr(e) {
        if (null === e) return null;
        do {
          e = e.return
        } while (e && 5 !== e.tag);
        return e || null
      }

      function qr(e, t, n, r, i) {
        for (var a = t._reactName, o = []; null !== n && n !== r;) {
          var s = n,
            l = s.alternate,
            u = s.stateNode;
          if (null !== l && l === r) break;
          5 === s.tag && null !== u && (s = u, i ? null != (l = Ae(n, a)) && o.unshift(Hr(n, l, s)) : i || null != (l = Ae(n, a)) && o.push(Hr(n, l, s))), n = n.return
        }
        0 !== o.length && e.push({
          event: t,
          listeners: o
        })
      }
      var Xr = /\r\n?/g,
        Kr = /\u0000|\uFFFD/g;

      function Zr(e) {
        return ("string" == typeof e ? e : "" + e).replace(Xr, "\n").replace(Kr, "")
      }

      function Gr(e, t, n) {
        if (t = Zr(t), Zr(e) !== t && n) throw Error(a(425))
      }

      function Jr() {}
      var ei = null,
        ti = null;

      function ni(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
      }
      var ri = "function" == typeof setTimeout ? setTimeout : void 0,
        ii = "function" == typeof clearTimeout ? clearTimeout : void 0,
        ai = "function" == typeof Promise ? Promise : void 0,
        oi = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ai ? function(e) {
          return ai.resolve(null).then(e).catch(si)
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
              if (0 === r) return e.removeChild(i), void Ut(t);
              r--
            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
          n = i
        } while (n);
        Ut(t)
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
      var di = Math.random().toString(36).slice(2),
        fi = "__reactFiber$" + di,
        hi = "__reactProps$" + di,
        pi = "__reactContainer$" + di,
        mi = "__reactEvents$" + di,
        gi = "__reactListeners$" + di,
        vi = "__reactHandles$" + di;

      function yi(e) {
        var t = e[fi];
        if (t) return t;
        for (var n = e.parentNode; n;) {
          if (t = n[pi] || n[fi]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
              for (e = ci(e); null !== e;) {
                if (n = e[fi]) return n;
                e = ci(e)
              }
            return t
          }
          n = (e = n).parentNode
        }
        return null
      }

      function bi(e) {
        return !(e = e[fi] || e[pi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
      }

      function wi(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(a(33))
      }

      function ki(e) {
        return e[hi] || null
      }
      var xi = [],
        Si = -1;

      function Ei(e) {
        return {
          current: e
        }
      }

      function Pi(e) {
        0 > Si || (e.current = xi[Si], xi[Si] = null, Si--)
      }

      function Ci(e, t) {
        Si++, xi[Si] = e.current, e.current = t
      }
      var Ti = {},
        Li = Ei(Ti),
        Mi = Ei(!1),
        Di = Ti;

      function Ri(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ti;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i, a = {};
        for (i in n) a[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
      }

      function Ai(e) {
        return null != e.childContextTypes
      }

      function Vi() {
        Pi(Mi), Pi(Li)
      }

      function Ni(e, t, n) {
        if (Li.current !== Ti) throw Error(a(168));
        Ci(Li, t), Ci(Mi, n)
      }

      function _i(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var i in r = r.getChildContext())
          if (!(i in t)) throw Error(a(108, W(e) || "Unknown", i));
        return F({}, n, r)
      }

      function zi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ti, Di = Li.current, Ci(Li, e), Ci(Mi, Mi.current), !0
      }

      function Fi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n ? (e = _i(e, t, Di), r.__reactInternalMemoizedMergedChildContext = e, Pi(Mi), Pi(Li), Ci(Li, e)) : Pi(Mi), Ci(Mi, n)
      }
      var Oi = null,
        Ii = !1,
        Bi = !1;

      function ji(e) {
        null === Oi ? Oi = [e] : Oi.push(e)
      }

      function Ui() {
        if (!Bi && null !== Oi) {
          Bi = !0;
          var e = 0,
            t = bt;
          try {
            var n = Oi;
            for (bt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0)
              } while (null !== r)
            }
            Oi = null, Ii = !1
          } catch (t) {
            throw null !== Oi && (Oi = Oi.slice(e + 1)), Ye(Je, Ui), t
          } finally {
            bt = t, Bi = !1
          }
        }
        return null
      }
      var Wi = [],
        $i = 0,
        Hi = null,
        Qi = 0,
        Yi = [],
        qi = 0,
        Xi = null,
        Ki = 1,
        Zi = "";

      function Gi(e, t) {
        Wi[$i++] = Qi, Wi[$i++] = Hi, Hi = e, Qi = t
      }

      function Ji(e, t, n) {
        Yi[qi++] = Ki, Yi[qi++] = Zi, Yi[qi++] = Xi, Xi = e;
        var r = Ki;
        e = Zi;
        var i = 32 - ot(r) - 1;
        r &= ~(1 << i), n += 1;
        var a = 32 - ot(t) + i;
        if (30 < a) {
          var o = i - i % 5;
          a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Ki = 1 << 32 - ot(t) + i | n << i | r, Zi = a + e
        } else Ki = 1 << a | n << i | r, Zi = e
      }

      function ea(e) {
        null !== e.return && (Gi(e, 1), Ji(e, 1, 0))
      }

      function ta(e) {
        for (; e === Hi;) Hi = Wi[--$i], Wi[$i] = null, Qi = Wi[--$i], Wi[$i] = null;
        for (; e === Xi;) Xi = Yi[--qi], Yi[qi] = null, Zi = Yi[--qi], Yi[qi] = null, Ki = Yi[--qi], Yi[qi] = null
      }
      var na = null,
        ra = null,
        ia = !1,
        aa = null;

      function oa(e, t) {
        var n = Au(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
      }

      function sa(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, na = e, ra = ui(t.firstChild), !0);
          case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, na = e, ra = null, !0);
          case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xi ? {
              id: Ki,
              overflow: Zi
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, (n = Au(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, na = e, ra = null, !0);
          default:
            return !1
        }
      }

      function la(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags)
      }

      function ua(e) {
        if (ia) {
          var t = ra;
          if (t) {
            var n = t;
            if (!sa(e, t)) {
              if (la(e)) throw Error(a(418));
              t = ui(n.nextSibling);
              var r = na;
              t && sa(e, t) ? oa(r, n) : (e.flags = -4097 & e.flags | 2, ia = !1, na = e)
            }
          } else {
            if (la(e)) throw Error(a(418));
            e.flags = -4097 & e.flags | 2, ia = !1, na = e
          }
        }
      }

      function ca(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        na = e
      }

      function da(e) {
        if (e !== na) return !1;
        if (!ia) return ca(e), ia = !0, !1;
        var t;
        if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ni(e.type, e.memoizedProps)), t && (t = ra)) {
          if (la(e)) throw fa(), Error(a(418));
          for (; t;) oa(e, t), t = ui(t.nextSibling)
        }
        if (ca(e), 13 === e.tag) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
          e: {
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    ra = ui(e.nextSibling);
                    break e
                  }
                  t--
                } else "$" !== n && "$!" !== n && "$?" !== n || t++
              }
              e = e.nextSibling
            }
            ra = null
          }
        } else ra = na ? ui(e.stateNode.nextSibling) : null;
        return !0
      }

      function fa() {
        for (var e = ra; e;) e = ui(e.nextSibling)
      }

      function ha() {
        ra = na = null, ia = !1
      }

      function pa(e) {
        null === aa ? aa = [e] : aa.push(e)
      }
      var ma = w.ReactCurrentBatchConfig;

      function ga(e, t) {
        if (e && e.defaultProps) {
          for (var n in t = F({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
          return t
        }
        return t
      }
      var va = Ei(null),
        ya = null,
        ba = null,
        wa = null;

      function ka() {
        wa = ba = ya = null
      }

      function xa(e) {
        var t = va.current;
        Pi(va), e._currentValue = t
      }

      function Sa(e, t, n) {
        for (; null !== e;) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return
        }
      }

      function Ea(e, t) {
        ya = e, wa = ba = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (ws = !0), e.firstContext = null)
      }

      function Pa(e) {
        var t = e._currentValue;
        if (wa !== e)
          if (e = {
              context: e,
              memoizedValue: t,
              next: null
            }, null === ba) {
            if (null === ya) throw Error(a(308));
            ba = e, ya.dependencies = {
              lanes: 0,
              firstContext: e
            }
          } else ba = ba.next = e;
        return t
      }
      var Ca = null;

      function Ta(e) {
        null === Ca ? Ca = [e] : Ca.push(e)
      }

      function La(e, t, n, r) {
        var i = t.interleaved;
        return null === i ? (n.next = n, Ta(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ma(e, r)
      }

      function Ma(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
        return 3 === n.tag ? n.stateNode : null
      }
      var Da = !1;

      function Ra(e) {
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

      function Aa(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        })
      }

      function Va(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        }
      }

      function Na(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 0 != (2 & Ml)) {
          var i = r.pending;
          return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Ma(e, n)
        }
        return null === (i = r.interleaved) ? (t.next = t, Ta(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Ma(e, n)
      }

      function _a(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
        }
      }

      function za(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var i = null,
            a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              null === a ? i = a = o : a = a.next = o, n = n.next
            } while (null !== n);
            null === a ? i = a = t : a = a.next = t
          } else i = a = t;
          return n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
          }, void(e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
      }

      function Fa(e, t, n, r) {
        var i = e.updateQueue;
        Da = !1;
        var a = i.firstBaseUpdate,
          o = i.lastBaseUpdate,
          s = i.shared.pending;
        if (null !== s) {
          i.shared.pending = null;
          var l = s,
            u = l.next;
          l.next = null, null === o ? a = u : o.next = u, o = l;
          var c = e.alternate;
          null !== c && (s = (c = c.updateQueue).lastBaseUpdate) !== o && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l)
        }
        if (null !== a) {
          var d = i.baseState;
          for (o = 0, c = u = l = null, s = a;;) {
            var f = s.lane,
              h = s.eventTime;
            if ((r & f) === f) {
              null !== c && (c = c.next = {
                eventTime: h,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
              });
              e: {
                var p = e,
                  m = s;
                switch (f = t, h = n, m.tag) {
                  case 1:
                    if ("function" == typeof(p = m.payload)) {
                      d = p.call(h, d, f);
                      break e
                    }
                    d = p;
                    break e;
                  case 3:
                    p.flags = -65537 & p.flags | 128;
                  case 0:
                    if (null == (f = "function" == typeof(p = m.payload) ? p.call(h, d, f) : p)) break e;
                    d = F({}, d, f);
                    break e;
                  case 2:
                    Da = !0
                }
              }
              null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (f = i.effects) ? i.effects = [s] : f.push(s))
            } else h = {
              eventTime: h,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            }, null === c ? (u = c = h, l = d) : c = c.next = h, o |= f;
            if (null === (s = s.next)) {
              if (null === (s = i.shared.pending)) break;
              s = (f = s).next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
          }
          if (null === c && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null !== (t = i.shared.interleaved)) {
            i = t;
            do {
              o |= i.lane, i = i.next
            } while (i !== t)
          } else null === a && (i.shared.lanes = 0);
          Fl |= o, e.lanes = o, e.memoizedState = d
        }
      }

      function Oa(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e)
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              i = r.callback;
            if (null !== i) {
              if (r.callback = null, r = n, "function" != typeof i) throw Error(a(191, i));
              i.call(r)
            }
          }
      }
      var Ia = (new r.Component).refs;

      function Ba(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
      }
      var ja = {
        isMounted: function(e) {
          return !!(e = e._reactInternals) && Ue(e) === e
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = tu(),
            i = nu(e),
            a = Va(r, i);
          a.payload = t, null != n && (a.callback = n), null !== (t = Na(e, a, i)) && (ru(t, e, i, r), _a(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = tu(),
            i = nu(e),
            a = Va(r, i);
          a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Na(e, a, i)) && (ru(t, e, i, r), _a(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = tu(),
            r = nu(e),
            i = Va(n, r);
          i.tag = 2, null != t && (i.callback = t), null !== (t = Na(e, i, r)) && (ru(t, e, r, n), _a(t, e, r))
        }
      };

      function Ua(e, t, n, r, i, a, o) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !(t.prototype && t.prototype.isPureReactComponent && lr(n, r) && lr(i, a))
      }

      function Wa(e, t, n) {
        var r = !1,
          i = Ti,
          a = t.contextType;
        return "object" == typeof a && null !== a ? a = Pa(a) : (i = Ai(t) ? Di : Li.current, a = (r = null != (r = t.contextTypes)) ? Ri(e, i) : Ti), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ja, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
      }

      function $a(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ja.enqueueReplaceState(t, t.state, null)
      }

      function Ha(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = Ia, Ra(e);
        var a = t.contextType;
        "object" == typeof a && null !== a ? i.context = Pa(a) : (a = Ai(t) ? Di : Li.current, i.context = Ri(e, a)), i.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (Ba(e, t, a, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ja.enqueueReplaceState(i, i.state, null), Fa(e, n, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.flags |= 4194308)
      }

      function Qa(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
          if (n._owner) {
            if (n = n._owner) {
              if (1 !== n.tag) throw Error(a(309));
              var r = n.stateNode
            }
            if (!r) throw Error(a(147, e));
            var i = r,
              o = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
              var t = i.refs;
              t === Ia && (t = i.refs = {}), null === e ? delete t[o] : t[o] = e
            }, t._stringRef = o, t)
          }
          if ("string" != typeof e) throw Error(a(284));
          if (!n._owner) throw Error(a(290, e))
        }
        return e
      }

      function Ya(e, t) {
        throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
      }

      function qa(e) {
        return (0, e._init)(e._payload)
      }

      function Xa(e) {
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
          return (e = Nu(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
          return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
        }

        function s(t) {
          return e && null === t.alternate && (t.flags |= 2), t
        }

        function l(e, t, n, r) {
          return null === t || 6 !== t.tag ? ((t = Ou(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
          var a = n.type;
          return a === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === A && qa(a) === t.type) ? ((r = i(t, n.props)).ref = Qa(e, t, n), r.return = e, r) : ((r = _u(n.type, n.key, n.props, null, e.mode, r)).ref = Qa(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Iu(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function d(e, t, n, r, a) {
          return null === t || 7 !== t.tag ? ((t = zu(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function f(e, t, n) {
          if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Ou("" + t, e.mode, n)).return = e, t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case k:
                return (n = _u(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(e, null, t), n.return = e, n;
              case x:
                return (t = Iu(t, e.mode, n)).return = e, t;
              case A:
                return f(e, (0, t._init)(t._payload), n)
            }
            if (te(t) || _(t)) return (t = zu(t, e.mode, n, null)).return = e, t;
            Ya(e, t)
          }
          return null
        }

        function h(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case k:
                return n.key === i ? u(e, t, n, r) : null;
              case x:
                return n.key === i ? c(e, t, n, r) : null;
              case A:
                return h(e, t, (i = n._init)(n._payload), r)
            }
            if (te(n) || _(n)) return null !== i ? null : d(e, t, n, r, null);
            Ya(e, n)
          }
          return null
        }

        function p(e, t, n, r, i) {
          if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case k:
                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
              case x:
                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
              case A:
                return p(e, t, n, (0, r._init)(r._payload), i)
            }
            if (te(r) || _(r)) return d(t, e = e.get(n) || null, r, i, null);
            Ya(t, r)
          }
          return null
        }

        function m(i, a, s, l) {
          for (var u = null, c = null, d = a, m = a = 0, g = null; null !== d && m < s.length; m++) {
            d.index > m ? (g = d, d = null) : g = d.sibling;
            var v = h(i, d, s[m], l);
            if (null === v) {
              null === d && (d = g);
              break
            }
            e && d && null === v.alternate && t(i, d), a = o(v, a, m), null === c ? u = v : c.sibling = v, c = v, d = g
          }
          if (m === s.length) return n(i, d), ia && Gi(i, m), u;
          if (null === d) {
            for (; m < s.length; m++) null !== (d = f(i, s[m], l)) && (a = o(d, a, m), null === c ? u = d : c.sibling = d, c = d);
            return ia && Gi(i, m), u
          }
          for (d = r(i, d); m < s.length; m++) null !== (g = p(d, i, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), a = o(g, a, m), null === c ? u = g : c.sibling = g, c = g);
          return e && d.forEach((function(e) {
            return t(i, e)
          })), ia && Gi(i, m), u
        }

        function g(i, s, l, u) {
          var c = _(l);
          if ("function" != typeof c) throw Error(a(150));
          if (null == (l = c.call(l))) throw Error(a(151));
          for (var d = c = null, m = s, g = s = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
            m.index > g ? (v = m, m = null) : v = m.sibling;
            var b = h(i, m, y.value, u);
            if (null === b) {
              null === m && (m = v);
              break
            }
            e && m && null === b.alternate && t(i, m), s = o(b, s, g), null === d ? c = b : d.sibling = b, d = b, m = v
          }
          if (y.done) return n(i, m), ia && Gi(i, g), c;
          if (null === m) {
            for (; !y.done; g++, y = l.next()) null !== (y = f(i, y.value, u)) && (s = o(y, s, g), null === d ? c = y : d.sibling = y, d = y);
            return ia && Gi(i, g), c
          }
          for (m = r(i, m); !y.done; g++, y = l.next()) null !== (y = p(m, i, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = o(y, s, g), null === d ? c = y : d.sibling = y, d = y);
          return e && m.forEach((function(e) {
            return t(i, e)
          })), ia && Gi(i, g), c
        }
        return function e(r, a, o, l) {
          if ("object" == typeof o && null !== o && o.type === S && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
            switch (o.$$typeof) {
              case k:
                e: {
                  for (var u = o.key, c = a; null !== c;) {
                    if (c.key === u) {
                      if ((u = o.type) === S) {
                        if (7 === c.tag) {
                          n(r, c.sibling), (a = i(c, o.props.children)).return = r, r = a;
                          break e
                        }
                      } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === A && qa(u) === c.type) {
                        n(r, c.sibling), (a = i(c, o.props)).ref = Qa(r, c, o), a.return = r, r = a;
                        break e
                      }
                      n(r, c);
                      break
                    }
                    t(r, c), c = c.sibling
                  }
                  o.type === S ? ((a = zu(o.props.children, r.mode, l, o.key)).return = r, r = a) : ((l = _u(o.type, o.key, o.props, null, r.mode, l)).ref = Qa(r, a, o), l.return = r, r = l)
                }
                return s(r);
              case x:
                e: {
                  for (c = o.key; null !== a;) {
                    if (a.key === c) {
                      if (4 === a.tag && a.stateNode.containerInfo === o.containerInfo && a.stateNode.implementation === o.implementation) {
                        n(r, a.sibling), (a = i(a, o.children || [])).return = r, r = a;
                        break e
                      }
                      n(r, a);
                      break
                    }
                    t(r, a), a = a.sibling
                  }(a = Iu(o, r.mode, l)).return = r,
                  r = a
                }
                return s(r);
              case A:
                return e(r, a, (c = o._init)(o._payload), l)
            }
            if (te(o)) return m(r, a, o, l);
            if (_(o)) return g(r, a, o, l);
            Ya(r, o)
          }
          return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = i(a, o)).return = r, r = a) : (n(r, a), (a = Ou(o, r.mode, l)).return = r, r = a), s(r)) : n(r, a)
        }
      }
      var Ka = Xa(!0),
        Za = Xa(!1),
        Ga = {},
        Ja = Ei(Ga),
        eo = Ei(Ga),
        to = Ei(Ga);

      function no(e) {
        if (e === Ga) throw Error(a(174));
        return e
      }

      function ro(e, t) {
        switch (Ci(to, t), Ci(eo, e), Ci(Ja, Ga), e = t.nodeType) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
            break;
          default:
            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        Pi(Ja), Ci(Ja, t)
      }

      function io() {
        Pi(Ja), Pi(eo), Pi(to)
      }

      function ao(e) {
        no(to.current);
        var t = no(Ja.current),
          n = le(t, e.type);
        t !== n && (Ci(eo, e), Ci(Ja, n))
      }

      function oo(e) {
        eo.current === e && (Pi(Ja), Pi(eo))
      }
      var so = Ei(0);

      function lo(e) {
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
      var uo = [];

      function co() {
        for (var e = 0; e < uo.length; e++) uo[e]._workInProgressVersionPrimary = null;
        uo.length = 0
      }
      var fo = w.ReactCurrentDispatcher,
        ho = w.ReactCurrentBatchConfig,
        po = 0,
        mo = null,
        go = null,
        vo = null,
        yo = !1,
        bo = !1,
        wo = 0,
        ko = 0;

      function xo() {
        throw Error(a(321))
      }

      function So(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!sr(e[n], t[n])) return !1;
        return !0
      }

      function Eo(e, t, n, r, i, o) {
        if (po = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ss : ls, e = n(r, i), bo) {
          o = 0;
          do {
            if (bo = !1, wo = 0, 25 <= o) throw Error(a(301));
            o += 1, vo = go = null, t.updateQueue = null, fo.current = us, e = n(r, i)
          } while (bo)
        }
        if (fo.current = os, t = null !== go && null !== go.next, po = 0, vo = go = mo = null, yo = !1, t) throw Error(a(300));
        return e
      }

      function Po() {
        var e = 0 !== wo;
        return wo = 0, e
      }

      function Co() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return null === vo ? mo.memoizedState = vo = e : vo = vo.next = e, vo
      }

      function To() {
        if (null === go) {
          var e = mo.alternate;
          e = null !== e ? e.memoizedState : null
        } else e = go.next;
        var t = null === vo ? mo.memoizedState : vo.next;
        if (null !== t) vo = t, go = e;
        else {
          if (null === e) throw Error(a(310));
          e = {
            memoizedState: (go = e).memoizedState,
            baseState: go.baseState,
            baseQueue: go.baseQueue,
            queue: go.queue,
            next: null
          }, null === vo ? mo.memoizedState = vo = e : vo = vo.next = e
        }
        return vo
      }

      function Lo(e, t) {
        return "function" == typeof t ? t(e) : t
      }

      function Mo(e) {
        var t = To(),
          n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = go,
          i = r.baseQueue,
          o = n.pending;
        if (null !== o) {
          if (null !== i) {
            var s = i.next;
            i.next = o.next, o.next = s
          }
          r.baseQueue = i = o, n.pending = null
        }
        if (null !== i) {
          o = i.next, r = r.baseState;
          var l = s = null,
            u = null,
            c = o;
          do {
            var d = c.lane;
            if ((po & d) === d) null !== u && (u = u.next = {
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
              null === u ? (l = u = f, s = r) : u = u.next = f, mo.lanes |= d, Fl |= d
            }
            c = c.next
          } while (null !== c && c !== o);
          null === u ? s = r : u.next = l, sr(r, t.memoizedState) || (ws = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
        }
        if (null !== (e = n.interleaved)) {
          i = e;
          do {
            o = i.lane, mo.lanes |= o, Fl |= o, i = i.next
          } while (i !== e)
        } else null === i && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
      }

      function Do(e) {
        var t = To(),
          n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          i = n.pending,
          o = t.memoizedState;
        if (null !== i) {
          n.pending = null;
          var s = i = i.next;
          do {
            o = e(o, s.action), s = s.next
          } while (s !== i);
          sr(o, t.memoizedState) || (ws = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, r]
      }

      function Ro() {}

      function Ao(e, t) {
        var n = mo,
          r = To(),
          i = t(),
          o = !sr(r.memoizedState, i);
        if (o && (r.memoizedState = i, ws = !0), r = r.queue, $o(_o.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== vo && 1 & vo.memoizedState.tag) {
          if (n.flags |= 2048, Io(9, No.bind(null, n, r, i, t), void 0, null), null === Dl) throw Error(a(349));
          0 != (30 & po) || Vo(n, t, i)
        }
        return i
      }

      function Vo(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, null === (t = mo.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
      }

      function No(e, t, n, r) {
        t.value = n, t.getSnapshot = r, zo(t) && Fo(e)
      }

      function _o(e, t, n) {
        return n((function() {
          zo(t) && Fo(e)
        }))
      }

      function zo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !sr(e, n)
        } catch (e) {
          return !0
        }
      }

      function Fo(e) {
        var t = Ma(e, 1);
        null !== t && ru(t, e, 1, -1)
      }

      function Oo(e) {
        var t = Co();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Lo,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ns.bind(null, mo, e), [t.memoizedState, e]
      }

      function Io(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, null === (t = mo.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
      }

      function Bo() {
        return To().memoizedState
      }

      function jo(e, t, n, r) {
        var i = Co();
        mo.flags |= e, i.memoizedState = Io(1 | t, n, void 0, void 0 === r ? null : r)
      }

      function Uo(e, t, n, r) {
        var i = To();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== go) {
          var o = go.memoizedState;
          if (a = o.destroy, null !== r && So(r, o.deps)) return void(i.memoizedState = Io(t, n, a, r))
        }
        mo.flags |= e, i.memoizedState = Io(1 | t, n, a, r)
      }

      function Wo(e, t) {
        return jo(8390656, 8, e, t)
      }

      function $o(e, t) {
        return Uo(2048, 8, e, t)
      }

      function Ho(e, t) {
        return Uo(4, 2, e, t)
      }

      function Qo(e, t) {
        return Uo(4, 4, e, t)
      }

      function Yo(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
          t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
          t.current = null
        }) : void 0
      }

      function qo(e, t, n) {
        return n = null != n ? n.concat([e]) : null, Uo(4, 4, Yo.bind(null, t, e), n)
      }

      function Xo() {}

      function Ko(e, t) {
        var n = To();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && So(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
      }

      function Zo(e, t) {
        var n = To();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && So(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      }

      function Go(e, t, n) {
        return 0 == (21 & po) ? (e.baseState && (e.baseState = !1, ws = !0), e.memoizedState = n) : (sr(n, t) || (n = mt(), mo.lanes |= n, Fl |= n, e.baseState = !0), t)
      }

      function Jo(e, t) {
        var n = bt;
        bt = 0 !== n && 4 > n ? n : 4, e(!0);
        var r = ho.transition;
        ho.transition = {};
        try {
          e(!1), t()
        } finally {
          bt = n, ho.transition = r
        }
      }

      function es() {
        return To().memoizedState
      }

      function ts(e, t, n) {
        var r = nu(e);
        n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, rs(e) ? is(t, n) : null !== (n = La(e, t, n, r)) && (ru(n, e, r, tu()), as(n, t, r))
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
          var a = e.alternate;
          if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (i.hasEagerState = !0, i.eagerState = s, sr(s, o)) {
              var l = t.interleaved;
              return null === l ? (i.next = i, Ta(t)) : (i.next = l.next, l.next = i), void(t.interleaved = i)
            }
          } catch (e) {}
          null !== (n = La(e, t, i, r)) && (ru(n, e, r, i = tu()), as(n, t, r))
        }
      }

      function rs(e) {
        var t = e.alternate;
        return e === mo || null !== t && t === mo
      }

      function is(e, t) {
        bo = yo = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
      }

      function as(e, t, n) {
        if (0 != (4194240 & n)) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
        }
      }
      var os = {
          readContext: Pa,
          useCallback: xo,
          useContext: xo,
          useEffect: xo,
          useImperativeHandle: xo,
          useInsertionEffect: xo,
          useLayoutEffect: xo,
          useMemo: xo,
          useReducer: xo,
          useRef: xo,
          useState: xo,
          useDebugValue: xo,
          useDeferredValue: xo,
          useTransition: xo,
          useMutableSource: xo,
          useSyncExternalStore: xo,
          useId: xo,
          unstable_isNewReconciler: !1
        },
        ss = {
          readContext: Pa,
          useCallback: function(e, t) {
            return Co().memoizedState = [e, void 0 === t ? null : t], e
          },
          useContext: Pa,
          useEffect: Wo,
          useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null, jo(4194308, 4, Yo.bind(null, t, e), n)
          },
          useLayoutEffect: function(e, t) {
            return jo(4194308, 4, e, t)
          },
          useInsertionEffect: function(e, t) {
            return jo(4, 2, e, t)
          },
          useMemo: function(e, t) {
            var n = Co();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
          },
          useReducer: function(e, t, n) {
            var r = Co();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }, r.queue = e, e = e.dispatch = ts.bind(null, mo, e), [r.memoizedState, e]
          },
          useRef: function(e) {
            return e = {
              current: e
            }, Co().memoizedState = e
          },
          useState: Oo,
          useDebugValue: Xo,
          useDeferredValue: function(e) {
            return Co().memoizedState = e
          },
          useTransition: function() {
            var e = Oo(!1),
              t = e[0];
            return e = Jo.bind(null, e[1]), Co().memoizedState = e, [t, e]
          },
          useMutableSource: function() {},
          useSyncExternalStore: function(e, t, n) {
            var r = mo,
              i = Co();
            if (ia) {
              if (void 0 === n) throw Error(a(407));
              n = n()
            } else {
              if (n = t(), null === Dl) throw Error(a(349));
              0 != (30 & po) || Vo(r, t, n)
            }
            i.memoizedState = n;
            var o = {
              value: n,
              getSnapshot: t
            };
            return i.queue = o, Wo(_o.bind(null, r, o, e), [e]), r.flags |= 2048, Io(9, No.bind(null, r, o, n, t), void 0, null), n
          },
          useId: function() {
            var e = Co(),
              t = Dl.identifierPrefix;
            if (ia) {
              var n = Zi;
              t = ":" + t + "R" + (n = (Ki & ~(1 << 32 - ot(Ki) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":"
            } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
            return e.memoizedState = t
          },
          unstable_isNewReconciler: !1
        },
        ls = {
          readContext: Pa,
          useCallback: Ko,
          useContext: Pa,
          useEffect: $o,
          useImperativeHandle: qo,
          useInsertionEffect: Ho,
          useLayoutEffect: Qo,
          useMemo: Zo,
          useReducer: Mo,
          useRef: Bo,
          useState: function() {
            return Mo(Lo)
          },
          useDebugValue: Xo,
          useDeferredValue: function(e) {
            return Go(To(), go.memoizedState, e)
          },
          useTransition: function() {
            return [Mo(Lo)[0], To().memoizedState]
          },
          useMutableSource: Ro,
          useSyncExternalStore: Ao,
          useId: es,
          unstable_isNewReconciler: !1
        },
        us = {
          readContext: Pa,
          useCallback: Ko,
          useContext: Pa,
          useEffect: $o,
          useImperativeHandle: qo,
          useInsertionEffect: Ho,
          useLayoutEffect: Qo,
          useMemo: Zo,
          useReducer: Do,
          useRef: Bo,
          useState: function() {
            return Do(Lo)
          },
          useDebugValue: Xo,
          useDeferredValue: function(e) {
            var t = To();
            return null === go ? t.memoizedState = e : Go(t, go.memoizedState, e)
          },
          useTransition: function() {
            return [Do(Lo)[0], To().memoizedState]
          },
          useMutableSource: Ro,
          useSyncExternalStore: Ao,
          useId: es,
          unstable_isNewReconciler: !1
        };

      function cs(e, t) {
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

      function ds(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null
        }
      }

      function fs(e, t) {
        try {
          console.error(t.value)
        } catch (e) {
          setTimeout((function() {
            throw e
          }))
        }
      }
      var hs = "function" == typeof WeakMap ? WeakMap : Map;

      function ps(e, t, n) {
        (n = Va(-1, n)).tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          Hl || (Hl = !0, Ql = r), fs(0, t)
        }, n
      }

      function ms(e, t, n) {
        (n = Va(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var i = t.value;
          n.payload = function() {
            return r(i)
          }, n.callback = function() {
            fs(0, t)
          }
        }
        var a = e.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
          fs(0, t), "function" != typeof r && (null === Yl ? Yl = new Set([this]) : Yl.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : ""
          })
        }), n
      }

      function gs(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new hs;
          var i = new Set;
          r.set(t, i)
        } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
        i.has(n) || (i.add(n), e = Cu.bind(null, e, t, n), t.then(e, e))
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
        return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Va(-1, 1)).tag = 2, Na(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
      }
      var bs = w.ReactCurrentOwner,
        ws = !1;

      function ks(e, t, n, r) {
        t.child = null === e ? Za(t, null, n, r) : Ka(t, e.child, n, r)
      }

      function xs(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        return Ea(t, i), r = Eo(e, t, n, r, a, i), n = Po(), null === e || ws ? (ia && n && ea(t), t.flags |= 1, ks(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Hs(e, t, i))
      }

      function Ss(e, t, n, r, i) {
        if (null === e) {
          var a = n.type;
          return "function" != typeof a || Vu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = _u(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Es(e, t, a, r, i))
        }
        if (a = e.child, 0 == (e.lanes & i)) {
          var o = a.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : lr)(o, r) && e.ref === t.ref) return Hs(e, t, i)
        }
        return t.flags |= 1, (e = Nu(a, r)).ref = t.ref, e.return = t, t.child = e
      }

      function Es(e, t, n, r, i) {
        if (null !== e) {
          var a = e.memoizedProps;
          if (lr(a, r) && e.ref === t.ref) {
            if (ws = !1, t.pendingProps = r = a, 0 == (e.lanes & i)) return t.lanes = e.lanes, Hs(e, t, i);
            0 != (131072 & e.flags) && (ws = !0)
          }
        }
        return Ts(e, t, n, r, i)
      }

      function Ps(e, t, n) {
        var r = t.pendingProps,
          i = r.children,
          a = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode)
          if (0 == (1 & t.mode)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, Ci(Nl, Vl), Vl |= n;
          else {
            if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null
            }, t.updateQueue = null, Ci(Nl, Vl), Vl |= e, null;
            t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            }, r = null !== a ? a.baseLanes : n, Ci(Nl, Vl), Vl |= r
          }
        else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ci(Nl, Vl), Vl |= r;
        return ks(e, t, i, n), t.child
      }

      function Cs(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
      }

      function Ts(e, t, n, r, i) {
        var a = Ai(n) ? Di : Li.current;
        return a = Ri(t, a), Ea(t, i), n = Eo(e, t, n, r, a, i), r = Po(), null === e || ws ? (ia && r && ea(t), t.flags |= 1, ks(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Hs(e, t, i))
      }

      function Ls(e, t, n, r, i) {
        if (Ai(n)) {
          var a = !0;
          zi(t)
        } else a = !1;
        if (Ea(t, i), null === t.stateNode) $s(e, t), Wa(t, n, r), Ha(t, n, r, i), r = !0;
        else if (null === e) {
          var o = t.stateNode,
            s = t.memoizedProps;
          o.props = s;
          var l = o.context,
            u = n.contextType;
          u = "object" == typeof u && null !== u ? Pa(u) : Ri(t, u = Ai(n) ? Di : Li.current);
          var c = n.getDerivedStateFromProps,
            d = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
          d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== r || l !== u) && $a(t, o, r, u), Da = !1;
          var f = t.memoizedState;
          o.state = f, Fa(t, r, o, i), l = t.memoizedState, s !== r || f !== l || Mi.current || Da ? ("function" == typeof c && (Ba(t, n, c, r), l = t.memoizedState), (s = Da || Ua(t, n, s, r, f, l, u)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
          o = t.stateNode, Aa(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ga(t.type, s), o.props = u, d = t.pendingProps, f = o.context, l = "object" == typeof(l = n.contextType) && null !== l ? Pa(l) : Ri(t, l = Ai(n) ? Di : Li.current);
          var h = n.getDerivedStateFromProps;
          (c = "function" == typeof h || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== d || f !== l) && $a(t, o, r, l), Da = !1, f = t.memoizedState, o.state = f, Fa(t, r, o, i);
          var p = t.memoizedState;
          s !== d || f !== p || Mi.current || Da ? ("function" == typeof h && (Ba(t, n, h, r), p = t.memoizedState), (u = Da || Ua(t, n, u, r, f, p, l) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, l), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, l)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = l, r = u) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return Ms(e, t, n, r, a, i)
      }

      function Ms(e, t, n, r, i, a) {
        Cs(e, t);
        var o = 0 != (128 & t.flags);
        if (!r && !o) return i && Fi(t, n, !1), Hs(e, t, a);
        r = t.stateNode, bs.current = t;
        var s = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1, null !== e && o ? (t.child = Ka(t, e.child, null, a), t.child = Ka(t, null, s, a)) : ks(e, t, s, a), t.memoizedState = r.state, i && Fi(t, n, !0), t.child
      }

      function Ds(e) {
        var t = e.stateNode;
        t.pendingContext ? Ni(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ni(0, t.context, !1), ro(e, t.containerInfo)
      }

      function Rs(e, t, n, r, i) {
        return ha(), pa(i), t.flags |= 256, ks(e, t, n, r), t.child
      }
      var As, Vs, Ns, _s, zs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };

      function Fs(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }
      }

      function Os(e, t, n) {
        var r, i = t.pendingProps,
          o = so.current,
          s = !1,
          l = 0 != (128 & t.flags);
        if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Ci(so, 1 & o), null === e) return ua(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, l = {
          mode: "hidden",
          children: l
        }, 0 == (1 & i) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Fu(l, i, 0, null), e = zu(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Fs(n), t.memoizedState = zs, e) : Is(t, l));
        if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function(e, t, n, r, i, o, s) {
          if (n) return 256 & t.flags ? (t.flags &= -257, Bs(e, t, s, r = ds(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Fu({
            mode: "visible",
            children: r.children
          }, i, 0, null), (o = zu(o, i, s, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 != (1 & t.mode) && Ka(t, e.child, null, s), t.child.memoizedState = Fs(s), t.memoizedState = zs, o);
          if (0 == (1 & t.mode)) return Bs(e, t, s, null);
          if ("$!" === i.data) {
            if (r = i.nextSibling && i.nextSibling.dataset) var l = r.dgst;
            return r = l, Bs(e, t, s, r = ds(o = Error(a(419)), r, void 0))
          }
          if (l = 0 != (s & e.childLanes), ws || l) {
            if (null !== (r = Dl)) {
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
              0 !== (i = 0 != (i & (r.suspendedLanes | s)) ? 0 : i) && i !== o.retryLane && (o.retryLane = i, Ma(e, i), ru(r, e, i, -1))
            }
            return gu(), Bs(e, t, s, r = ds(Error(a(421))))
          }
          return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = Lu.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, ra = ui(i.nextSibling), na = t, ia = !0, aa = null, null !== e && (Yi[qi++] = Ki, Yi[qi++] = Zi, Yi[qi++] = Xi, Ki = e.id, Zi = e.overflow, Xi = t), (t = Is(t, r.children)).flags |= 4096, t)
        }(e, t, l, i, r, o, n);
        if (s) {
          s = i.fallback, l = t.mode, r = (o = e.child).sibling;
          var u = {
            mode: "hidden",
            children: i.children
          };
          return 0 == (1 & l) && t.child !== o ? ((i = t.child).childLanes = 0, i.pendingProps = u, t.deletions = null) : (i = Nu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? s = Nu(r, s) : (s = zu(s, l, n, null)).flags |= 2, s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, l = null === (l = e.child.memoizedState) ? Fs(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
          }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = zs, i
        }
        return e = (s = e.child).sibling, i = Nu(s, {
          mode: "visible",
          children: i.children
        }), 0 == (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
      }

      function Is(e, t) {
        return (t = Fu({
          mode: "visible",
          children: t
        }, e.mode, 0, null)).return = e, e.child = t
      }

      function Bs(e, t, n, r) {
        return null !== r && pa(r), Ka(t, e.child, null, n), (e = Is(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
      }

      function js(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), Sa(e.return, t, n)
      }

      function Us(e, t, n, r, i) {
        var a = e.memoizedState;
        null === a ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i
        } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i)
      }

      function Ws(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          a = r.tail;
        if (ks(e, t, r.children, n), 0 != (2 & (r = so.current))) r = 1 & r | 2, t.flags |= 128;
        else {
          if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && js(e, n, t);
            else if (19 === e.tag) js(e, n, t);
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
        if (Ci(so, r), 0 == (1 & t.mode)) t.memoizedState = null;
        else switch (i) {
          case "forwards":
            for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === lo(e) && (i = n), n = n.sibling;
            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Us(t, !1, i, n, a);
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i;) {
              if (null !== (e = i.alternate) && null === lo(e)) {
                t.child = i;
                break
              }
              e = i.sibling, i.sibling = n, n = i, i = e
            }
            Us(t, !0, n, null, a);
            break;
          case "together":
            Us(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null
        }
        return t.child
      }

      function $s(e, t) {
        0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
      }

      function Hs(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Fl |= t.lanes, 0 == (n & t.childLanes)) return null;
        if (null !== e && t.child !== e.child) throw Error(a(153));
        if (null !== t.child) {
          for (n = Nu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Nu(e, e.pendingProps)).return = t;
          n.sibling = null
        }
        return t.child
      }

      function Qs(e, t) {
        if (!ia) switch (e.tailMode) {
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

      function Ys(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
        else
          for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
      }

      function qs(e, t, n) {
        var r = t.pendingProps;
        switch (ta(t), t.tag) {
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
            return Ys(t), null;
          case 1:
          case 17:
            return Ai(t.type) && Vi(), Ys(t), null;
          case 3:
            return r = t.stateNode, io(), Pi(Mi), Pi(Li), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (da(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== aa && (su(aa), aa = null))), Vs(e, t), Ys(t), null;
          case 5:
            oo(t);
            var i = no(to.current);
            if (n = t.type, null !== e && null != t.stateNode) Ns(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(a(166));
                return Ys(t), null
              }
              if (e = no(Ja.current), da(t)) {
                r = t.stateNode, n = t.type;
                var o = t.memoizedProps;
                switch (r[fi] = t, r[hi] = o, e = 0 != (1 & t.mode), n) {
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
                    for (i = 0; i < _r.length; i++) Ir(_r[i], r);
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
                    K(r, o), Ir("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!o.multiple
                    }, Ir("invalid", r);
                    break;
                  case "textarea":
                    ie(r, o), Ir("invalid", r)
                }
                for (var l in ye(n, o), i = null, o)
                  if (o.hasOwnProperty(l)) {
                    var u = o[l];
                    "children" === l ? "string" == typeof u ? r.textContent !== u && (!0 !== o.suppressHydrationWarning && Gr(r.textContent, u, e), i = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== o.suppressHydrationWarning && Gr(r.textContent, u, e), i = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Ir("scroll", r)
                  } switch (n) {
                  case "input":
                    Q(r), J(r, o, !0);
                    break;
                  case "textarea":
                    Q(r), oe(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof o.onClick && (r.onclick = Jr)
                }
                r = i, t.updateQueue = r, null !== r && (t.flags |= 4)
              } else {
                l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(n, {
                  is: r.is
                }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[fi] = t, e[hi] = r, As(e, t, !1, !1), t.stateNode = e;
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
                      for (i = 0; i < _r.length; i++) Ir(_r[i], e);
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
                      K(e, r), i = X(e, r), Ir("invalid", e);
                      break;
                    case "option":
                    default:
                      i = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, i = F({}, r, {
                        value: void 0
                      }), Ir("invalid", e);
                      break;
                    case "textarea":
                      ie(e, r), i = re(e, r), Ir("invalid", e)
                  }
                  for (o in ye(n, i), u = i)
                    if (u.hasOwnProperty(o)) {
                      var c = u[o];
                      "style" === o ? ge(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (s.hasOwnProperty(o) ? null != c && "onScroll" === o && Ir("scroll", e) : null != c && b(e, o, c, l))
                    } switch (n) {
                    case "input":
                      Q(e), J(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), oe(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + $(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
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
            return Ys(t), null;
          case 6:
            if (e && null != t.stateNode) _s(e, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
              if (n = no(to.current), no(Ja.current), da(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[fi] = t, (o = r.nodeValue !== n) && null !== (e = na)) switch (e.tag) {
                  case 3:
                    Gr(r.nodeValue, n, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 != (1 & e.mode))
                }
                o && (t.flags |= 4)
              } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fi] = t, t.stateNode = r
            }
            return Ys(t), null;
          case 13:
            if (Pi(so), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
              if (ia && null !== ra && 0 != (1 & t.mode) && 0 == (128 & t.flags)) fa(), ha(), t.flags |= 98560, o = !1;
              else if (o = da(t), null !== r && null !== r.dehydrated) {
                if (null === e) {
                  if (!o) throw Error(a(318));
                  if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(a(317));
                  o[fi] = t
                } else ha(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                Ys(t), o = !1
              } else null !== aa && (su(aa), aa = null), o = !0;
              if (!o) return 65536 & t.flags ? t : null
            }
            return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & so.current) ? 0 === _l && (_l = 3) : gu())), null !== t.updateQueue && (t.flags |= 4), Ys(t), null);
          case 4:
            return io(), Vs(e, t), null === e && Ur(t.stateNode.containerInfo), Ys(t), null;
          case 10:
            return xa(t.type._context), Ys(t), null;
          case 19:
            if (Pi(so), null === (o = t.memoizedState)) return Ys(t), null;
            if (r = 0 != (128 & t.flags), null === (l = o.rendering))
              if (r) Qs(o, !1);
              else {
                if (0 !== _l || null !== e && 0 != (128 & e.flags))
                  for (e = t.child; null !== e;) {
                    if (null !== (l = lo(e))) {
                      for (t.flags |= 128, Qs(o, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (l = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = null === e ? null : {
                        lanes: e.lanes,
                        firstContext: e.firstContext
                      }), n = n.sibling;
                      return Ci(so, 1 & so.current | 2), t.child
                    }
                    e = e.sibling
                  }
                null !== o.tail && Ze() > Wl && (t.flags |= 128, r = !0, Qs(o, !1), t.lanes = 4194304)
              }
            else {
              if (!r)
                if (null !== (e = lo(l))) {
                  if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qs(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate && !ia) return Ys(t), null
                } else 2 * Ze() - o.renderingStartTime > Wl && 1073741824 !== n && (t.flags |= 128, r = !0, Qs(o, !1), t.lanes = 4194304);
              o.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = o.last) ? n.sibling = l : t.child = l, o.last = l)
            }
            return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ze(), t.sibling = null, n = so.current, Ci(so, r ? 1 & n | 2 : 1 & n), t) : (Ys(t), null);
          case 22:
          case 23:
            return fu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Vl) && (Ys(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ys(t), null;
          case 24:
          case 25:
            return null
        }
        throw Error(a(156, t.tag))
      }

      function Xs(e, t) {
        switch (ta(t), t.tag) {
          case 1:
            return Ai(t.type) && Vi(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 3:
            return io(), Pi(Mi), Pi(Li), co(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
          case 5:
            return oo(t), null;
          case 13:
            if (Pi(so), null !== (e = t.memoizedState) && null !== e.dehydrated) {
              if (null === t.alternate) throw Error(a(340));
              ha()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 19:
            return Pi(so), null;
          case 4:
            return io(), null;
          case 10:
            return xa(t.type._context), null;
          case 22:
          case 23:
            return fu(), null;
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
      }, Vs = function() {}, Ns = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          e = t.stateNode, no(Ja.current);
          var a, o = null;
          switch (n) {
            case "input":
              i = X(e, i), r = X(e, r), o = [];
              break;
            case "select":
              i = F({}, i, {
                value: void 0
              }), r = F({}, r, {
                value: void 0
              }), o = [];
              break;
            case "textarea":
              i = re(e, i), r = re(e, r), o = [];
              break;
            default:
              "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
          }
          for (c in ye(n, r), n = null, i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
              if ("style" === c) {
                var l = i[c];
                for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
              } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
          for (c in r) {
            var u = r[c];
            if (l = null != i ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
              if ("style" === c)
                if (l) {
                  for (a in l) !l.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                  for (a in u) u.hasOwnProperty(a) && l[a] !== u[a] && (n || (n = {}), n[a] = u[a])
                } else n || (o || (o = []), o.push(c, n)), n = u;
            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (o = o || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (o = o || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Ir("scroll", e), o || l === u || (o = [])) : (o = o || []).push(c, u))
          }
          n && (o = o || []).push("style", n);
          var c = o;
          (t.updateQueue = c) && (t.flags |= 4)
        }
      }, _s = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
      };
      var Ks = !1,
        Zs = !1,
        Gs = "function" == typeof WeakSet ? WeakSet : Set,
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
              var a = i.destroy;
              i.destroy = void 0, void 0 !== a && tl(t, n, a)
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

      function al(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
        }
      }

      function ol(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, ol(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fi], delete t[hi], delete t[mi], delete t[gi], delete t[vi]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
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
      var dl = null,
        fl = !1;

      function hl(e, t, n) {
        for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling
      }

      function pl(e, t, n) {
        if (at && "function" == typeof at.onCommitFiberUnmount) try {
          at.onCommitFiberUnmount(it, n)
        } catch (e) {}
        switch (n.tag) {
          case 5:
            Zs || el(n, t);
          case 6:
            var r = dl,
              i = fl;
            dl = null, hl(e, t, n), fl = i, null !== (dl = r) && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : dl.removeChild(n.stateNode));
            break;
          case 18:
            null !== dl && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? li(e.parentNode, n) : 1 === e.nodeType && li(e, n), Ut(e)) : li(dl, n.stateNode));
            break;
          case 4:
            r = dl, i = fl, dl = n.stateNode.containerInfo, fl = !0, hl(e, t, n), dl = r, fl = i;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Zs && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              i = r = r.next;
              do {
                var a = i,
                  o = a.destroy;
                a = a.tag, void 0 !== o && (0 != (2 & a) || 0 != (4 & a)) && tl(n, t, o), i = i.next
              } while (i !== r)
            }
            hl(e, t, n);
            break;
          case 1:
            if (!Zs && (el(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (e) {
              Pu(n, t, e)
            }
            hl(e, t, n);
            break;
          case 21:
            hl(e, t, n);
            break;
          case 22:
            1 & n.mode ? (Zs = (r = Zs) || null !== n.memoizedState, hl(e, t, n), Zs = r) : hl(e, t, n);
            break;
          default:
            hl(e, t, n)
        }
      }

      function ml(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Gs), t.forEach((function(t) {
            var r = Mu.bind(null, e, t);
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
              var o = e,
                s = t,
                l = s;
              e: for (; null !== l;) {
                switch (l.tag) {
                  case 5:
                    dl = l.stateNode, fl = !1;
                    break e;
                  case 3:
                  case 4:
                    dl = l.stateNode.containerInfo, fl = !0;
                    break e
                }
                l = l.return
              }
              if (null === dl) throw Error(a(160));
              pl(o, s, i), dl = null, fl = !1;
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
                fe(i, "")
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            if (4 & r && null != (i = e.stateNode)) {
              var o = e.memoizedProps,
                s = null !== n ? n.memoizedProps : o,
                l = e.type,
                u = e.updateQueue;
              if (e.updateQueue = null, null !== u) try {
                "input" === l && "radio" === o.type && null != o.name && Z(i, o), be(l, s);
                var c = be(l, o);
                for (s = 0; s < u.length; s += 2) {
                  var d = u[s],
                    f = u[s + 1];
                  "style" === d ? ge(i, f) : "dangerouslySetInnerHTML" === d ? de(i, f) : "children" === d ? fe(i, f) : b(i, d, f, c)
                }
                switch (l) {
                  case "input":
                    G(i, o);
                    break;
                  case "textarea":
                    ae(i, o);
                    break;
                  case "select":
                    var h = i._wrapperState.wasMultiple;
                    i._wrapperState.wasMultiple = !!o.multiple;
                    var p = o.value;
                    null != p ? ne(i, !!o.multiple, p, !1) : h !== !!o.multiple && (null != o.defaultValue ? ne(i, !!o.multiple, o.defaultValue, !0) : ne(i, !!o.multiple, o.multiple ? [] : "", !1))
                }
                i[hi] = o
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            break;
          case 6:
            if (gl(t, e), yl(e), 4 & r) {
              if (null === e.stateNode) throw Error(a(162));
              i = e.stateNode, o = e.memoizedProps;
              try {
                i.nodeValue = o
              } catch (t) {
                Pu(e, e.return, t)
              }
            }
            break;
          case 3:
            if (gl(t, e), yl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
              Ut(t.containerInfo)
            } catch (t) {
              Pu(e, e.return, t)
            }
            break;
          case 4:
          default:
            gl(t, e), yl(e);
            break;
          case 13:
            gl(t, e), yl(e), 8192 & (i = e.child).flags && (o = null !== i.memoizedState, i.stateNode.isHidden = o, !o || null !== i.alternate && null !== i.alternate.memoizedState || (Ul = Ze())), 4 & r && ml(e);
            break;
          case 22:
            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Zs = (c = Zs) || d, gl(t, e), Zs = c) : gl(t, e), yl(e), 8192 & r) {
              if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                for (Js = e, d = e.child; null !== d;) {
                  for (f = Js = d; null !== Js;) {
                    switch (p = (h = Js).child, h.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        rl(4, h, h.return);
                        break;
                      case 1:
                        el(h, h.return);
                        var m = h.stateNode;
                        if ("function" == typeof m.componentWillUnmount) {
                          r = h, n = h.return;
                          try {
                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                          } catch (e) {
                            Pu(r, n, e)
                          }
                        }
                        break;
                      case 5:
                        el(h, h.return);
                        break;
                      case 22:
                        if (null !== h.memoizedState) {
                          xl(f);
                          continue
                        }
                    }
                    null !== p ? (p.return = h, Js = p) : xl(f)
                  }
                  d = d.sibling
                }
              e: for (d = null, f = e;;) {
                if (5 === f.tag) {
                  if (null === d) {
                    d = f;
                    try {
                      i = f.stateNode, c ? "function" == typeof(o = i.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (l = f.stateNode, s = null != (u = f.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
                    } catch (t) {
                      Pu(e, e.return, t)
                    }
                  }
                } else if (6 === f.tag) {
                  if (null === d) try {
                    f.stateNode.nodeValue = c ? "" : f.memoizedProps
                  } catch (t) {
                    Pu(e, e.return, t)
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
              throw Error(a(160))
            }
            switch (r.tag) {
              case 5:
                var i = r.stateNode;
                32 & r.flags && (fe(i, ""), r.flags &= -33), cl(e, ll(e), i);
                break;
              case 3:
              case 4:
                var o = r.stateNode.containerInfo;
                ul(e, ll(e), o);
                break;
              default:
                throw Error(a(161))
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
        Js = e, wl(e, t, n)
      }

      function wl(e, t, n) {
        for (var r = 0 != (1 & e.mode); null !== Js;) {
          var i = Js,
            a = i.child;
          if (22 === i.tag && r) {
            var o = null !== i.memoizedState || Ks;
            if (!o) {
              var s = i.alternate,
                l = null !== s && null !== s.memoizedState || Zs;
              s = Ks;
              var u = Zs;
              if (Ks = o, (Zs = l) && !u)
                for (Js = i; null !== Js;) l = (o = Js).child, 22 === o.tag && null !== o.memoizedState ? Sl(i) : null !== l ? (l.return = o, Js = l) : Sl(i);
              for (; null !== a;) Js = a, wl(a, t, n), a = a.sibling;
              Js = i, Ks = s, Zs = u
            }
            kl(e)
          } else 0 != (8772 & i.subtreeFlags) && null !== a ? (a.return = i, Js = a) : kl(e)
        }
      }

      function kl(e) {
        for (; null !== Js;) {
          var t = Js;
          if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 != (8772 & t.flags)) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Zs || il(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !Zs)
                    if (null === n) r.componentDidMount();
                    else {
                      var i = t.elementType === t.type ? n.memoizedProps : ga(t.type, n.memoizedProps);
                      r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                    } var o = t.updateQueue;
                  null !== o && Oa(t, o, r);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (null !== s) {
                    if (n = null, null !== t.child) switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode
                    }
                    Oa(t, s, n)
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
                        null !== f && Ut(f)
                      }
                    }
                  }
                  break;
                default:
                  throw Error(a(163))
              }
              Zs || 512 & t.flags && al(t)
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

      function xl(e) {
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

      function Sl(e) {
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
                var a = t.return;
                try {
                  al(t)
                } catch (e) {
                  Pu(t, a, e)
                }
                break;
              case 5:
                var o = t.return;
                try {
                  al(t)
                } catch (e) {
                  Pu(t, o, e)
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
      var El, Pl = Math.ceil,
        Cl = w.ReactCurrentDispatcher,
        Tl = w.ReactCurrentOwner,
        Ll = w.ReactCurrentBatchConfig,
        Ml = 0,
        Dl = null,
        Rl = null,
        Al = 0,
        Vl = 0,
        Nl = Ei(0),
        _l = 0,
        zl = null,
        Fl = 0,
        Ol = 0,
        Il = 0,
        Bl = null,
        jl = null,
        Ul = 0,
        Wl = 1 / 0,
        $l = null,
        Hl = !1,
        Ql = null,
        Yl = null,
        ql = !1,
        Xl = null,
        Kl = 0,
        Zl = 0,
        Gl = null,
        Jl = -1,
        eu = 0;

      function tu() {
        return 0 != (6 & Ml) ? Ze() : -1 !== Jl ? Jl : Jl = Ze()
      }

      function nu(e) {
        return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ml) && 0 !== Al ? Al & -Al : null !== ma.transition ? (0 === eu && (eu = mt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Kt(e.type)
      }

      function ru(e, t, n, r) {
        if (50 < Zl) throw Zl = 0, Gl = null, Error(a(185));
        vt(e, n, r), 0 != (2 & Ml) && e === Dl || (e === Dl && (0 == (2 & Ml) && (Ol |= n), 4 === _l && lu(e, Al)), iu(e, r), 1 === n && 0 === Ml && 0 == (1 & t.mode) && (Wl = Ze() + 500, Ii && Ui()))
      }

      function iu(e, t) {
        var n = e.callbackNode;
        ! function(e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
            var o = 31 - ot(a),
              s = 1 << o,
              l = i[o]; - 1 === l ? 0 != (s & n) && 0 == (s & r) || (i[o] = ht(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s
          }
        }(e, t);
        var r = ft(e, e === Dl ? Al : 0);
        if (0 === r) null !== n && qe(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (null != n && qe(n), 1 === t) 0 === e.tag ? function(e) {
            Ii = !0, ji(e)
          }(uu.bind(null, e)) : ji(uu.bind(null, e)), oi((function() {
            0 == (6 & Ml) && Ui()
          })), n = null;
          else {
            switch (wt(r)) {
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
            n = Du(n, au.bind(null, e))
          }
          e.callbackPriority = t, e.callbackNode = n
        }
      }

      function au(e, t) {
        if (Jl = -1, eu = 0, 0 != (6 & Ml)) throw Error(a(327));
        var n = e.callbackNode;
        if (Su() && e.callbackNode !== n) return null;
        var r = ft(e, e === Dl ? Al : 0);
        if (0 === r) return null;
        if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vu(e, r);
        else {
          t = r;
          var i = Ml;
          Ml |= 2;
          var o = mu();
          for (Dl === e && Al === t || ($l = null, Wl = Ze() + 500, hu(e, t));;) try {
            bu();
            break
          } catch (t) {
            pu(e, t)
          }
          ka(), Cl.current = o, Ml = i, null !== Rl ? t = 0 : (Dl = null, Al = 0, t = _l)
        }
        if (0 !== t) {
          if (2 === t && 0 !== (i = pt(e)) && (r = i, t = ou(e, i)), 1 === t) throw n = zl, hu(e, 0), lu(e, r), iu(e, Ze()), n;
          if (6 === t) lu(e, r);
          else {
            if (i = e.current.alternate, 0 == (30 & r) && ! function(e) {
                for (var t = e;;) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r],
                          a = i.getSnapshot;
                        i = i.value;
                        try {
                          if (!sr(a(), i)) return !1
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
              }(i) && (2 === (t = vu(e, r)) && 0 !== (o = pt(e)) && (r = o, t = ou(e, o)), 1 === t)) throw n = zl, hu(e, 0), lu(e, r), iu(e, Ze()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                xu(e, jl, $l);
                break;
              case 3:
                if (lu(e, r), (130023424 & r) === r && 10 < (t = Ul + 500 - Ze())) {
                  if (0 !== ft(e, 0)) break;
                  if (((i = e.suspendedLanes) & r) !== r) {
                    tu(), e.pingedLanes |= e.suspendedLanes & i;
                    break
                  }
                  e.timeoutHandle = ri(xu.bind(null, e, jl, $l), t);
                  break
                }
                xu(e, jl, $l);
                break;
              case 4:
                if (lu(e, r), (4194240 & r) === r) break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                  var s = 31 - ot(r);
                  o = 1 << s, (s = t[s]) > i && (i = s), r &= ~o
                }
                if (r = i, 10 < (r = (120 > (r = Ze() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pl(r / 1960)) - r)) {
                  e.timeoutHandle = ri(xu.bind(null, e, jl, $l), r);
                  break
                }
                xu(e, jl, $l);
                break;
              default:
                throw Error(a(329))
            }
          }
        }
        return iu(e, Ze()), e.callbackNode === n ? au.bind(null, e) : null
      }

      function ou(e, t) {
        var n = Bl;
        return e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256), 2 !== (e = vu(e, t)) && (t = jl, jl = n, null !== t && su(t)), e
      }

      function su(e) {
        null === jl ? jl = e : jl.push.apply(jl, e)
      }

      function lu(e, t) {
        for (t &= ~Il, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
          var n = 31 - ot(t),
            r = 1 << n;
          e[n] = -1, t &= ~r
        }
      }

      function uu(e) {
        if (0 != (6 & Ml)) throw Error(a(327));
        Su();
        var t = ft(e, 0);
        if (0 == (1 & t)) return iu(e, Ze()), null;
        var n = vu(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = pt(e);
          0 !== r && (t = r, n = ou(e, r))
        }
        if (1 === n) throw n = zl, hu(e, 0), lu(e, t), iu(e, Ze()), n;
        if (6 === n) throw Error(a(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, xu(e, jl, $l), iu(e, Ze()), null
      }

      function cu(e, t) {
        var n = Ml;
        Ml |= 1;
        try {
          return e(t)
        } finally {
          0 === (Ml = n) && (Wl = Ze() + 500, Ii && Ui())
        }
      }

      function du(e) {
        null !== Xl && 0 === Xl.tag && 0 == (6 & Ml) && Su();
        var t = Ml;
        Ml |= 1;
        var n = Ll.transition,
          r = bt;
        try {
          if (Ll.transition = null, bt = 1, e) return e()
        } finally {
          bt = r, Ll.transition = n, 0 == (6 & (Ml = t)) && Ui()
        }
      }

      function fu() {
        Vl = Nl.current, Pi(Nl)
      }

      function hu(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, ii(n)), null !== Rl)
          for (n = Rl.return; null !== n;) {
            var r = n;
            switch (ta(r), r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && Vi();
                break;
              case 3:
                io(), Pi(Mi), Pi(Li), co();
                break;
              case 5:
                oo(r);
                break;
              case 4:
                io();
                break;
              case 13:
              case 19:
                Pi(so);
                break;
              case 10:
                xa(r.type._context);
                break;
              case 22:
              case 23:
                fu()
            }
            n = n.return
          }
        if (Dl = e, Rl = e = Nu(e.current, null), Al = Vl = t, _l = 0, zl = null, Il = Ol = Fl = 0, jl = Bl = null, null !== Ca) {
          for (t = 0; t < Ca.length; t++)
            if (null !== (r = (n = Ca[t]).interleaved)) {
              n.interleaved = null;
              var i = r.next,
                a = n.pending;
              if (null !== a) {
                var o = a.next;
                a.next = i, r.next = o
              }
              n.pending = r
            } Ca = null
        }
        return e
      }

      function pu(e, t) {
        for (;;) {
          var n = Rl;
          try {
            if (ka(), fo.current = os, yo) {
              for (var r = mo.memoizedState; null !== r;) {
                var i = r.queue;
                null !== i && (i.pending = null), r = r.next
              }
              yo = !1
            }
            if (po = 0, vo = go = mo = null, bo = !1, wo = 0, Tl.current = null, null === n || null === n.return) {
              _l = 1, zl = t, Rl = null;
              break
            }
            e: {
              var o = e,
                s = n.return,
                l = n,
                u = t;
              if (t = Al, l.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                var c = u,
                  d = l,
                  f = d.tag;
                if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                  var h = d.alternate;
                  h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                }
                var p = vs(s);
                if (null !== p) {
                  p.flags &= -257, ys(p, s, l, 0, t), 1 & p.mode && gs(o, c, t), u = c;
                  var m = (t = p).updateQueue;
                  if (null === m) {
                    var g = new Set;
                    g.add(u), t.updateQueue = g
                  } else m.add(u);
                  break e
                }
                if (0 == (1 & t)) {
                  gs(o, c, t), gu();
                  break e
                }
                u = Error(a(426))
              } else if (ia && 1 & l.mode) {
                var v = vs(s);
                if (null !== v) {
                  0 == (65536 & v.flags) && (v.flags |= 256), ys(v, s, l, 0, t), pa(cs(u, l));
                  break e
                }
              }
              o = u = cs(u, l),
              4 !== _l && (_l = 2),
              null === Bl ? Bl = [o] : Bl.push(o),
              o = s;do {
                switch (o.tag) {
                  case 3:
                    o.flags |= 65536, t &= -t, o.lanes |= t, za(o, ps(0, u, t));
                    break e;
                  case 1:
                    l = u;
                    var y = o.type,
                      b = o.stateNode;
                    if (0 == (128 & o.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === Yl || !Yl.has(b)))) {
                      o.flags |= 65536, t &= -t, o.lanes |= t, za(o, ms(o, l, t));
                      break e
                    }
                }
                o = o.return
              } while (null !== o)
            }
            ku(n)
          } catch (e) {
            t = e, Rl === n && null !== n && (Rl = n = n.return);
            continue
          }
          break
        }
      }

      function mu() {
        var e = Cl.current;
        return Cl.current = os, null === e ? os : e
      }

      function gu() {
        0 !== _l && 3 !== _l && 2 !== _l || (_l = 4), null === Dl || 0 == (268435455 & Fl) && 0 == (268435455 & Ol) || lu(Dl, Al)
      }

      function vu(e, t) {
        var n = Ml;
        Ml |= 2;
        var r = mu();
        for (Dl === e && Al === t || ($l = null, hu(e, t));;) try {
          yu();
          break
        } catch (t) {
          pu(e, t)
        }
        if (ka(), Ml = n, Cl.current = r, null !== Rl) throw Error(a(261));
        return Dl = null, Al = 0, _l
      }

      function yu() {
        for (; null !== Rl;) wu(Rl)
      }

      function bu() {
        for (; null !== Rl && !Xe();) wu(Rl)
      }

      function wu(e) {
        var t = El(e.alternate, e, Vl);
        e.memoizedProps = e.pendingProps, null === t ? ku(e) : Rl = t, Tl.current = null
      }

      function ku(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, 0 == (32768 & t.flags)) {
            if (null !== (n = qs(n, t, Vl))) return void(Rl = n)
          } else {
            if (null !== (n = Xs(n, t))) return n.flags &= 32767, void(Rl = n);
            if (null === e) return _l = 6, void(Rl = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
          }
          if (null !== (t = t.sibling)) return void(Rl = t);
          Rl = t = e
        } while (null !== t);
        0 === _l && (_l = 5)
      }

      function xu(e, t, n) {
        var r = bt,
          i = Ll.transition;
        try {
          Ll.transition = null, bt = 1,
            function(e, t, n, r) {
              do {
                Su()
              } while (null !== Xl);
              if (0 != (6 & Ml)) throw Error(a(327));
              n = e.finishedWork;
              var i = e.finishedLanes;
              if (null === n) return null;
              if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
              e.callbackNode = null, e.callbackPriority = 0;
              var o = n.lanes | n.childLanes;
              if (function(e, t) {
                  var n = e.pendingLanes & ~t;
                  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n;) {
                    var i = 31 - ot(n),
                      a = 1 << i;
                    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a
                  }
                }(e, o), e === Dl && (Rl = Dl = null, Al = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || ql || (ql = !0, Du(tt, (function() {
                  return Su(), null
                }))), o = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || o) {
                o = Ll.transition, Ll.transition = null;
                var s = bt;
                bt = 1;
                var l = Ml;
                Ml |= 4, Tl.current = null,
                  function(e, t) {
                    if (ei = $t, hr(e = fr())) {
                      if ("selectionStart" in e) var n = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                      };
                      else e: {
                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var i = r.anchorOffset,
                            o = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, o.nodeType
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
                            h = null;
                          t: for (;;) {
                            for (var p; f !== n || 0 !== i && 3 !== f.nodeType || (l = s + i), f !== o || 0 !== r && 3 !== f.nodeType || (u = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (p = f.firstChild);) h = f, f = p;
                            for (;;) {
                              if (f === e) break t;
                              if (h === n && ++c === i && (l = s), h === o && ++d === r && (u = s), null !== (p = f.nextSibling)) break;
                              h = (f = h).parentNode
                            }
                            f = p
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
                      }, $t = !1, Js = t; null !== Js;)
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
                                    b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ga(t.type, g), v);
                                  y.__reactInternalSnapshotBeforeUpdate = b
                                }
                                break;
                              case 3:
                                var w = t.stateNode.containerInfo;
                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                break;
                              default:
                                throw Error(a(163))
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
                  }(e, n), vl(n, e), pr(ti), $t = !!ei, ti = ei = null, e.current = n, bl(n, e, i), Ke(), Ml = l, bt = s, Ll.transition = o
              } else e.current = n;
              if (ql && (ql = !1, Xl = e, Kl = i), 0 === (o = e.pendingLanes) && (Yl = null), function(e) {
                  if (at && "function" == typeof at.onCommitFiberRoot) try {
                    at.onCommitFiberRoot(it, e, void 0, 128 == (128 & e.current.flags))
                  } catch (e) {}
                }(n.stateNode), iu(e, Ze()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((i = t[n]).value, {
                  componentStack: i.stack,
                  digest: i.digest
                });
              if (Hl) throw Hl = !1, e = Ql, Ql = null, e;
              0 != (1 & Kl) && 0 !== e.tag && Su(), 0 != (1 & (o = e.pendingLanes)) ? e === Gl ? Zl++ : (Zl = 0, Gl = e) : Zl = 0, Ui()
            }(e, t, n, r)
        } finally {
          Ll.transition = i, bt = r
        }
        return null
      }

      function Su() {
        if (null !== Xl) {
          var e = wt(Kl),
            t = Ll.transition,
            n = bt;
          try {
            if (Ll.transition = null, bt = 16 > e ? 16 : e, null === Xl) var r = !1;
            else {
              if (e = Xl, Xl = null, Kl = 0, 0 != (6 & Ml)) throw Error(a(331));
              var i = Ml;
              for (Ml |= 4, Js = e.current; null !== Js;) {
                var o = Js,
                  s = o.child;
                if (0 != (16 & Js.flags)) {
                  var l = o.deletions;
                  if (null !== l) {
                    for (var u = 0; u < l.length; u++) {
                      var c = l[u];
                      for (Js = c; null !== Js;) {
                        var d = Js;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(8, d, o)
                        }
                        var f = d.child;
                        if (null !== f) f.return = d, Js = f;
                        else
                          for (; null !== Js;) {
                            var h = (d = Js).sibling,
                              p = d.return;
                            if (ol(d), d === c) {
                              Js = null;
                              break
                            }
                            if (null !== h) {
                              h.return = p, Js = h;
                              break
                            }
                            Js = p
                          }
                      }
                    }
                    var m = o.alternate;
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
                    Js = o
                  }
                }
                if (0 != (2064 & o.subtreeFlags) && null !== s) s.return = o, Js = s;
                else e: for (; null !== Js;) {
                  if (0 != (2048 & (o = Js).flags)) switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rl(9, o, o.return)
                  }
                  var y = o.sibling;
                  if (null !== y) {
                    y.return = o.return, Js = y;
                    break e
                  }
                  Js = o.return
                }
              }
              var b = e.current;
              for (Js = b; null !== Js;) {
                var w = (s = Js).child;
                if (0 != (2064 & s.subtreeFlags) && null !== w) w.return = s, Js = w;
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
                  var k = l.sibling;
                  if (null !== k) {
                    k.return = l.return, Js = k;
                    break e
                  }
                  Js = l.return
                }
              }
              if (Ml = i, Ui(), at && "function" == typeof at.onPostCommitFiberRoot) try {
                at.onPostCommitFiberRoot(it, e)
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

      function Eu(e, t, n) {
        e = Na(e, t = ps(0, t = cs(n, t), 1), 1), t = tu(), null !== e && (vt(e, 1, t), iu(e, t))
      }

      function Pu(e, t, n) {
        if (3 === e.tag) Eu(e, e, n);
        else
          for (; null !== t;) {
            if (3 === t.tag) {
              Eu(t, e, n);
              break
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Yl || !Yl.has(r))) {
                t = Na(t, e = ms(t, e = cs(n, e), 1), 1), e = tu(), null !== t && (vt(t, 1, e), iu(t, e));
                break
              }
            }
            t = t.return
          }
      }

      function Cu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Dl === e && (Al & n) === n && (4 === _l || 3 === _l && (130023424 & Al) === Al && 500 > Ze() - Ul ? hu(e, 0) : Il |= n), iu(e, t)
      }

      function Tu(e, t) {
        0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
        var n = tu();
        null !== (e = Ma(e, t)) && (vt(e, t, n), iu(e, n))
      }

      function Lu(e) {
        var t = e.memoizedState,
          n = 0;
        null !== t && (n = t.retryLane), Tu(e, n)
      }

      function Mu(e, t) {
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
            throw Error(a(314))
        }
        null !== r && r.delete(t), Tu(e, n)
      }

      function Du(e, t) {
        return Ye(e, t)
      }

      function Ru(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
      }

      function Au(e, t, n, r) {
        return new Ru(e, t, n, r)
      }

      function Vu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
      }

      function Nu(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Au(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
      }

      function _u(e, t, n, r, i, o) {
        var s = 2;
        if (r = e, "function" == typeof e) Vu(e) && (s = 1);
        else if ("string" == typeof e) s = 5;
        else e: switch (e) {
          case S:
            return zu(n.children, i, o, t);
          case E:
            s = 8, i |= 8;
            break;
          case P:
            return (e = Au(12, n, t, 2 | i)).elementType = P, e.lanes = o, e;
          case M:
            return (e = Au(13, n, t, i)).elementType = M, e.lanes = o, e;
          case D:
            return (e = Au(19, n, t, i)).elementType = D, e.lanes = o, e;
          case V:
            return Fu(n, i, o, t);
          default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
              case C:
                s = 10;
                break e;
              case T:
                s = 9;
                break e;
              case L:
                s = 11;
                break e;
              case R:
                s = 14;
                break e;
              case A:
                s = 16, r = null;
                break e
            }
            throw Error(a(130, null == e ? e : typeof e, ""))
        }
        return (t = Au(s, n, t, i)).elementType = e, t.type = r, t.lanes = o, t
      }

      function zu(e, t, n, r) {
        return (e = Au(7, e, r, t)).lanes = n, e
      }

      function Fu(e, t, n, r) {
        return (e = Au(22, e, r, t)).elementType = V, e.lanes = n, e.stateNode = {
          isHidden: !1
        }, e
      }

      function Ou(e, t, n) {
        return (e = Au(6, e, null, t)).lanes = n, e
      }

      function Iu(e, t, n) {
        return (t = Au(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t
      }

      function Bu(e, t, n, r, i) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
      }

      function ju(e, t, n, r, i, a, o, s, l) {
        return e = new Bu(e, t, n, s, l), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Au(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, Ra(a), e
      }

      function Uu(e) {
        if (!e) return Ti;
        e: {
          if (Ue(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
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
          throw Error(a(171))
        }
        if (1 === e.tag) {
          var n = e.type;
          if (Ai(n)) return _i(e, n, t)
        }
        return t
      }

      function Wu(e, t, n, r, i, a, o, s, l) {
        return (e = ju(n, r, !0, e, 0, a, 0, s, l)).context = Uu(null), n = e.current, (a = Va(r = tu(), i = nu(n))).callback = null != t ? t : null, Na(n, a, i), e.current.lanes = i, vt(e, i, r), iu(e, r), e
      }

      function $u(e, t, n, r) {
        var i = t.current,
          a = tu(),
          o = nu(i);
        return n = Uu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Va(a, o)).payload = {
          element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Na(i, t, o)) && (ru(e, i, o, a), _a(e, i, o)), o
      }

      function Hu(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
      }

      function Qu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t
        }
      }

      function Yu(e, t) {
        Qu(e, t), (e = e.alternate) && Qu(e, t)
      }
      El = function(e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || Mi.current) ws = !0;
          else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return ws = !1,
              function(e, t, n) {
                switch (t.tag) {
                  case 3:
                    Ds(t), ha();
                    break;
                  case 5:
                    ao(t);
                    break;
                  case 1:
                    Ai(t.type) && zi(t);
                    break;
                  case 4:
                    ro(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      i = t.memoizedProps.value;
                    Ci(va, r._currentValue), r._currentValue = i;
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ci(so, 1 & so.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Os(e, t, n) : (Ci(so, 1 & so.current), null !== (e = Hs(e, t, n)) ? e.sibling : null);
                    Ci(so, 1 & so.current);
                    break;
                  case 19:
                    if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                      if (r) return Ws(e, t, n);
                      t.flags |= 128
                    }
                    if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), Ci(so, so.current), r) break;
                    return null;
                  case 22:
                  case 23:
                    return t.lanes = 0, Ps(e, t, n)
                }
                return Hs(e, t, n)
              }(e, t, n);
            ws = 0 != (131072 & e.flags)
          }
        else ws = !1, ia && 0 != (1048576 & t.flags) && Ji(t, Qi, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            $s(e, t), e = t.pendingProps;
            var i = Ri(t, Li.current);
            Ea(t, n), i = Eo(null, t, r, e, i, n);
            var o = Po();
            return t.flags |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ai(r) ? (o = !0, zi(t)) : o = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, Ra(t), i.updater = ja, t.stateNode = i, i._reactInternals = t, Ha(t, r, e, n), t = Ms(null, t, r, !0, o, n)) : (t.tag = 0, ia && o && ea(t), ks(null, t, i, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch ($s(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) {
                  if ("function" == typeof e) return Vu(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === L) return 11;
                    if (e === R) return 14
                  }
                  return 2
                }(r), e = ga(r, e), i) {
                case 0:
                  t = Ts(null, t, r, e, n);
                  break e;
                case 1:
                  t = Ls(null, t, r, e, n);
                  break e;
                case 11:
                  t = xs(null, t, r, e, n);
                  break e;
                case 14:
                  t = Ss(null, t, r, ga(r.type, e), n);
                  break e
              }
              throw Error(a(306, r, ""))
            }
            return t;
          case 0:
            return r = t.type, i = t.pendingProps, Ts(e, t, r, i = t.elementType === r ? i : ga(r, i), n);
          case 1:
            return r = t.type, i = t.pendingProps, Ls(e, t, r, i = t.elementType === r ? i : ga(r, i), n);
          case 3:
            e: {
              if (Ds(t), null === e) throw Error(a(387));r = t.pendingProps,
              i = (o = t.memoizedState).element,
              Aa(e, t),
              Fa(t, r, null, n);
              var s = t.memoizedState;
              if (r = s.element, o.isDehydrated) {
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                  }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                  t = Rs(e, t, r, n, i = cs(Error(a(423)), t));
                  break e
                }
                if (r !== i) {
                  t = Rs(e, t, r, n, i = cs(Error(a(424)), t));
                  break e
                }
                for (ra = ui(t.stateNode.containerInfo.firstChild), na = t, ia = !0, aa = null, n = Za(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
              } else {
                if (ha(), r === i) {
                  t = Hs(e, t, n);
                  break e
                }
                ks(e, t, r, n)
              }
              t = t.child
            }
            return t;
          case 5:
            return ao(t), null === e && ua(t), r = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, s = i.children, ni(r, i) ? s = null : null !== o && ni(r, o) && (t.flags |= 32), Cs(e, t), ks(e, t, s, n), t.child;
          case 6:
            return null === e && ua(t), null;
          case 13:
            return Os(e, t, n);
          case 4:
            return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ka(t, null, r, n) : ks(e, t, r, n), t.child;
          case 11:
            return r = t.type, i = t.pendingProps, xs(e, t, r, i = t.elementType === r ? i : ga(r, i), n);
          case 7:
            return ks(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return ks(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Ci(va, r._currentValue), r._currentValue = s, null !== o)
                if (sr(o.value, s)) {
                  if (o.children === i.children && !Mi.current) {
                    t = Hs(e, t, n);
                    break e
                  }
                } else
                  for (null !== (o = t.child) && (o.return = t); null !== o;) {
                    var l = o.dependencies;
                    if (null !== l) {
                      s = o.child;
                      for (var u = l.firstContext; null !== u;) {
                        if (u.context === r) {
                          if (1 === o.tag) {
                            (u = Va(-1, n & -n)).tag = 2;
                            var c = o.updateQueue;
                            if (null !== c) {
                              var d = (c = c.shared).pending;
                              null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                            }
                          }
                          o.lanes |= n, null !== (u = o.alternate) && (u.lanes |= n), Sa(o.return, n, t), l.lanes |= n;
                          break
                        }
                        u = u.next
                      }
                    } else if (10 === o.tag) s = o.type === t.type ? null : o.child;
                    else if (18 === o.tag) {
                      if (null === (s = o.return)) throw Error(a(341));
                      s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), Sa(s, n, t), s = o.sibling
                    } else s = o.child;
                    if (null !== s) s.return = o;
                    else
                      for (s = o; null !== s;) {
                        if (s === t) {
                          s = null;
                          break
                        }
                        if (null !== (o = s.sibling)) {
                          o.return = s.return, s = o;
                          break
                        }
                        s = s.return
                      }
                    o = s
                  }
              ks(e, t, i.children, n),
              t = t.child
            }
            return t;
          case 9:
            return i = t.type, r = t.pendingProps.children, Ea(t, n), r = r(i = Pa(i)), t.flags |= 1, ks(e, t, r, n), t.child;
          case 14:
            return i = ga(r = t.type, t.pendingProps), Ss(e, t, r, i = ga(r.type, i), n);
          case 15:
            return Es(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ga(r, i), $s(e, t), t.tag = 1, Ai(r) ? (e = !0, zi(t)) : e = !1, Ea(t, n), Wa(t, r, i), Ha(t, r, i, n), Ms(null, t, r, !0, e, n);
          case 19:
            return Ws(e, t, n);
          case 22:
            return Ps(e, t, n)
        }
        throw Error(a(156, t.tag))
      };
      var qu = "function" == typeof reportError ? reportError : function(e) {
        console.error(e)
      };

      function Xu(e) {
        this._internalRoot = e
      }

      function Ku(e) {
        this._internalRoot = e
      }

      function Zu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      }

      function Gu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      }

      function Ju() {}

      function ec(e, t, n, r, i) {
        var a = n._reactRootContainer;
        if (a) {
          var o = a;
          if ("function" == typeof i) {
            var s = i;
            i = function() {
              var e = Hu(o);
              s.call(e)
            }
          }
          $u(t, o, e, i)
        } else o = function(e, t, n, r, i) {
          if (i) {
            if ("function" == typeof r) {
              var a = r;
              r = function() {
                var e = Hu(o);
                a.call(e)
              }
            }
            var o = Wu(t, r, e, 0, null, !1, 0, "", Ju);
            return e._reactRootContainer = o, e[pi] = o.current, Ur(8 === e.nodeType ? e.parentNode : e), du(), o
          }
          for (; i = e.lastChild;) e.removeChild(i);
          if ("function" == typeof r) {
            var s = r;
            r = function() {
              var e = Hu(l);
              s.call(e)
            }
          }
          var l = ju(e, 0, !1, null, 0, !1, 0, "", Ju);
          return e._reactRootContainer = l, e[pi] = l.current, Ur(8 === e.nodeType ? e.parentNode : e), du((function() {
            $u(t, l, n, r)
          })), l
        }(n, t, e, i, r);
        return Hu(o)
      }
      Ku.prototype.render = Xu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(a(409));
        $u(e, t, null, null)
      }, Ku.prototype.unmount = Xu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          du((function() {
            $u(null, e, null, null)
          })), t[pi] = null
        }
      }, Ku.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = Et();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < Vt.length && 0 !== t && t < Vt[n].priority; n++);
          Vt.splice(n, 0, e), 0 === n && Ft(e)
        }
      }, kt = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = dt(t.pendingLanes);
              0 !== n && (yt(t, 1 | n), iu(t, Ze()), 0 == (6 & Ml) && (Wl = Ze() + 500, Ui()))
            }
            break;
          case 13:
            du((function() {
              var t = Ma(e, 1);
              if (null !== t) {
                var n = tu();
                ru(t, e, 1, n)
              }
            })), Yu(e, 1)
        }
      }, xt = function(e) {
        if (13 === e.tag) {
          var t = Ma(e, 134217728);
          null !== t && ru(t, e, 134217728, tu()), Yu(e, 134217728)
        }
      }, St = function(e) {
        if (13 === e.tag) {
          var t = nu(e),
            n = Ma(e, t);
          null !== n && ru(n, e, t, tu()), Yu(e, t)
        }
      }, Et = function() {
        return bt
      }, Pt = function(e, t) {
        var n = bt;
        try {
          return bt = e, t()
        } finally {
          bt = n
        }
      }, xe = function(e, t, n) {
        switch (t) {
          case "input":
            if (G(e, n), t = n.name, "radio" === n.type && null != t) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = ki(r);
                  if (!i) throw Error(a(90));
                  Y(r), G(r, i)
                }
              }
            }
            break;
          case "textarea":
            ae(e, n);
            break;
          case "select":
            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
        }
      }, Le = cu, Me = du;
      var tc = {
          usingClientEntryPoint: !1,
          Events: [bi, wi, ki, Ce, Te, cu]
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
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = He(e)) ? null : e.stateNode
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
          it = ic.inject(rc), at = ic
        } catch (ce) {}
      }
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Zu(t)) throw Error(a(200));
        return function(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          }
        }(e, t, null, n)
      }, t.createRoot = function(e, t) {
        if (!Zu(e)) throw Error(a(299));
        var n = !1,
          r = "",
          i = qu;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = ju(e, 1, !1, null, 0, n, 0, r, i), e[pi] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new Xu(t)
      }, t.findDOMNode = function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(a(188));
          throw e = Object.keys(e).join(","), Error(a(268, e))
        }
        return null === (e = He(t)) ? null : e.stateNode
      }, t.flushSync = function(e) {
        return du(e)
      }, t.hydrate = function(e, t, n) {
        if (!Gu(t)) throw Error(a(200));
        return ec(null, e, t, !0, n)
      }, t.hydrateRoot = function(e, t, n) {
        if (!Zu(e)) throw Error(a(405));
        var r = null != n && n.hydratedSources || null,
          i = !1,
          o = "",
          s = qu;
        if (null != n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Wu(t, null, e, 1, null != n ? n : null, i, 0, o, s), e[pi] = t.current, Ur(e), r)
          for (e = 0; e < r.length; e++) i = (i = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
        return new Ku(t)
      }, t.render = function(e, t, n) {
        if (!Gu(t)) throw Error(a(200));
        return ec(null, e, t, !1, n)
      }, t.unmountComponentAtNode = function(e) {
        if (!Gu(e)) throw Error(a(40));
        return !!e._reactRootContainer && (du((function() {
          ec(null, null, e, !1, (function() {
            e._reactRootContainer = null, e[pi] = null
          }))
        })), !0)
      }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Gu(n)) throw Error(a(200));
        if (null == e || void 0 === e._reactInternals) throw Error(a(38));
        return ec(e, t, n, !1, r)
      }, t.version = "18.2.0-next-9e3b772b8-20220608"
    },
    2280: (e, t, n) => {
      ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = n(7593)
    },
    3970: (e, t, n) => {
      var r = n(289),
        i = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, a = {},
          u = null,
          c = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: i,
          type: e,
          key: u,
          ref: c,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    6160: (e, t, n) => {
      e.exports = n(3970)
    },
    7689: (e, t) => {
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n;) {
          var r = n - 1 >>> 1,
            i = e[r];
          if (!(0 < a(i, t))) break e;
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
          e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
            var s = 2 * (r + 1) - 1,
              l = e[s],
              u = s + 1,
              c = e[u];
            if (0 > a(l, n)) u < i && 0 > a(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
            else {
              if (!(u < i && 0 > a(c, n))) break e;
              e[r] = c, e[u] = n, r = u
            }
          }
        }
        return t
      }

      function a(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
      }
      if ("object" == typeof performance && "function" == typeof performance.now) {
        var o = performance;
        t.unstable_now = function() {
          return o.now()
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
        h = 3,
        p = !1,
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

      function k(e) {
        if (g = !1, w(e), !m)
          if (null !== r(u)) m = !0, V(x);
          else {
            var t = r(c);
            null !== t && N(k, t.startTime - e)
          }
      }

      function x(e, n) {
        m = !1, g && (g = !1, y(C), C = -1), p = !0;
        var a = h;
        try {
          for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !M());) {
            var o = f.callback;
            if ("function" == typeof o) {
              f.callback = null, h = f.priorityLevel;
              var s = o(f.expirationTime <= n);
              n = t.unstable_now(), "function" == typeof s ? f.callback = s : f === r(u) && i(u), w(n)
            } else i(u);
            f = r(u)
          }
          if (null !== f) var l = !0;
          else {
            var d = r(c);
            null !== d && N(k, d.startTime - n), l = !1
          }
          return l
        } finally {
          f = null, h = a, p = !1
        }
      }
      "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var S, E = !1,
        P = null,
        C = -1,
        T = 5,
        L = -1;

      function M() {
        return !(t.unstable_now() - L < T)
      }

      function D() {
        if (null !== P) {
          var e = t.unstable_now();
          L = e;
          var n = !0;
          try {
            n = P(!0, e)
          } finally {
            n ? S() : (E = !1, P = null)
          }
        } else E = !1
      }
      if ("function" == typeof b) S = function() {
        b(D)
      };
      else if ("undefined" != typeof MessageChannel) {
        var R = new MessageChannel,
          A = R.port2;
        R.port1.onmessage = D, S = function() {
          A.postMessage(null)
        }
      } else S = function() {
        v(D, 0)
      };

      function V(e) {
        P = e, E || (E = !0, S())
      }

      function N(e, n) {
        C = v((function() {
          e(t.unstable_now())
        }), n)
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
        e.callback = null
      }, t.unstable_continueExecution = function() {
        m || p || (m = !0, V(x))
      }, t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
      }, t.unstable_getCurrentPriorityLevel = function() {
        return h
      }, t.unstable_getFirstCallbackNode = function() {
        return r(u)
      }, t.unstable_next = function(e) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = h
        }
        var n = h;
        h = t;
        try {
          return e()
        } finally {
          h = n
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
        var n = h;
        h = e;
        try {
          return t()
        } finally {
          h = n
        }
      }, t.unstable_scheduleCallback = function(e, i, a) {
        var o = t.unstable_now();
        switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
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
          startTime: a,
          expirationTime: s = a + s,
          sortIndex: -1
        }, a > o ? (e.sortIndex = a, n(c, e), null === r(u) && e === r(c) && (g ? (y(C), C = -1) : g = !0, N(k, a - o))) : (e.sortIndex = s, n(u, e), m || p || (m = !0, V(x))), e
      }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) {
        var t = h;
        return function() {
          var n = h;
          h = t;
          try {
            return e.apply(this, arguments)
          } finally {
            h = n
          }
        }
      }
    },
    3240: (e, t, n) => {
      e.exports = n(7689)
    },
    7817: (e, t, n) => {
      n.d(t, {
        M: () => g
      });
      var r = n(289),
        i = n(8353),
        a = n(1016);

      function o() {
        const e = (0, r.useRef)(!1);
        return (0, a.L)((() => (e.current = !0, () => {
          e.current = !1
        })), []), e
      }
      var s = n(6197),
        l = n(3513);
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
          a = (0, r.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          });
        return (0, r.useInsertionEffect)((() => {
          const {
            width: e,
            height: r,
            top: o,
            left: s
          } = a.current;
          if (t || !i.current || !e || !r) return;
          i.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${o}px !important;\n            left: ${s}px !important;\n          }\n        `), () => {
            document.head.removeChild(l)
          }
        }), [t]), r.createElement(u, {
          isPresent: t,
          childRef: i,
          sizeRef: a
        }, r.cloneElement(e, {
          ref: i
        }))
      }
      const d = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: a,
        presenceAffectsLayout: o,
        mode: u
      }) => {
        const d = (0, l.h)(f),
          h = (0, r.useId)(),
          p = (0, r.useMemo)((() => ({
            id: h,
            initial: t,
            isPresent: n,
            custom: a,
            onExitComplete: e => {
              d.set(e, !0);
              for (const e of d.values())
                if (!e) return;
              i && i()
            },
            register: e => (d.set(e, !1), () => d.delete(e))
          })), o ? void 0 : [n]);
        return (0, r.useMemo)((() => {
          d.forEach(((e, t) => d.set(t, !1)))
        }), [n]), r.useEffect((() => {
          !n && !d.size && i && i()
        }), [n]), "popLayout" === u && (e = r.createElement(c, {
          isPresent: n
        }, e)), r.createElement(s.O.Provider, {
          value: p
        }, e)
      };

      function f() {
        return new Map
      }
      var h = n(9682),
        p = n(4890);
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
          const f = (0, r.useContext)(h.p).forceRender || function() {
              const e = o(),
                [t, n] = (0, r.useState)(0),
                a = (0, r.useCallback)((() => {
                  e.current && n(t + 1)
                }), [t]);
              return [(0, r.useCallback)((() => i.Wi.postRender(a)), [a]), t]
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
            w = (0, r.useRef)(y),
            k = (0, r.useRef)(new Map).current,
            x = (0, r.useRef)(!0);
          var S;
          if ((0, a.L)((() => {
              x.current = !1,
                function(e, t) {
                  e.forEach((e => {
                    const n = m(e);
                    t.set(n, e)
                  }))
                }(v, k), w.current = y
            })), S = () => {
              x.current = !0, k.clear(), b.clear()
            }, (0, r.useEffect)((() => () => S()), []), x.current) return r.createElement(r.Fragment, null, y.map((e => r.createElement(d, {
            key: m(e),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: u,
            mode: c
          }, e))));
          y = [...y];
          const E = w.current.map(m),
            P = v.map(m),
            C = E.length;
          for (let e = 0; e < C; e++) {
            const t = E[e]; - 1 !== P.indexOf(t) || b.has(t) || b.set(t, void 0)
          }
          return "wait" === c && b.size && (y = []), b.forEach(((e, n) => {
            if (-1 !== P.indexOf(n)) return;
            const i = k.get(n);
            if (!i) return;
            const a = E.indexOf(n);
            let o = e;
            if (!o) {
              const e = () => {
                k.delete(n), b.delete(n);
                const e = w.current.findIndex((e => e.key === n));
                if (w.current.splice(e, 1), !b.size) {
                  if (w.current = v, !1 === g.current) return;
                  f(), s && s()
                }
              };
              o = r.createElement(d, {
                key: m(i),
                isPresent: !1,
                onExitComplete: e,
                custom: t,
                presenceAffectsLayout: u,
                mode: c
              }, i), b.set(n, o)
            }
            y.splice(a, 0, o)
          })), y = y.map((e => {
            const t = e.key;
            return b.has(t) ? e : r.createElement(d, {
              key: m(e),
              isPresent: !0,
              presenceAffectsLayout: u,
              mode: c
            }, e)
          })), r.createElement(r.Fragment, null, b.size ? y : y.map((e => (0, r.cloneElement)(e))))
        }
    },
    9682: (e, t, n) => {
      n.d(t, {
        p: () => r
      });
      const r = (0, n(289).createContext)({})
    },
    6197: (e, t, n) => {
      n.d(t, {
        O: () => r
      });
      const r = (0, n(289).createContext)(null)
    },
    1340: (e, t, n) => {
      n.d(t, {
        frameData: () => r
      });
      const r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
      }
    },
    8353: (e, t, n) => {
      n.d(t, {
        Pn: () => d,
        Wi: () => c,
        S6: () => s
      });
      var r = n(1340);
      let i = !0,
        a = !1;
      const o = ["read", "update", "preRender", "render", "postRender"],
        s = o.reduce(((e, t) => (e[t] = function(e) {
          let t = [],
            n = [],
            r = 0,
            i = !1,
            a = !1;
          const o = new WeakSet,
            s = {
              schedule: (e, a = !1, s = !1) => {
                const l = s && i,
                  u = l ? t : n;
                return a && o.add(e), -1 === u.indexOf(e) && (u.push(e), l && i && (r = t.length)), e
              },
              cancel: e => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1), o.delete(e)
              },
              process: l => {
                if (i) a = !0;
                else {
                  if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let n = 0; n < r; n++) {
                      const r = t[n];
                      r(l), o.has(r) && (s.schedule(r), e())
                    }
                  i = !1, a && (a = !1, s.process(l))
                }
              }
            };
          return s
        }((() => a = !0)), e)), {}),
        l = e => s[e].process(r.frameData),
        u = e => {
          a = !1, r.frameData.delta = i ? 1e3 / 60 : Math.max(Math.min(e - r.frameData.timestamp, 40), 1), r.frameData.timestamp = e, r.frameData.isProcessing = !0, o.forEach(l), r.frameData.isProcessing = !1, a && (i = !1, requestAnimationFrame(u))
        },
        c = o.reduce(((e, t) => {
          const n = s[t];
          return e[t] = (e, t = !1, o = !1) => (a || (a = !0, i = !0, r.frameData.isProcessing || requestAnimationFrame(u)), n.schedule(e, t, o)), e
        }), {});

      function d(e) {
        o.forEach((t => s[t].cancel(e)))
      }
    },
    1244: (e, t, n) => {
      n.d(t, {
        E: () => za
      });
      var r = n(289);
      const i = (0, r.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        a = (0, r.createContext)({});
      var o = n(6197),
        s = n(1016);
      const l = (0, r.createContext)({
        strict: !1
      });

      function u(e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function c(e) {
        return "string" == typeof e || Array.isArray(e)
      }

      function d(e) {
        return "object" == typeof e && "function" == typeof e.start
      }
      const f = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        h = ["initial", ...f];

      function p(e) {
        return d(e.animate) || h.some((t => c(e[t])))
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
      var b = n(7010),
        w = n(9682);
      const k = (0, r.createContext)({}),
        x = Symbol.for("motionComponentSymbol");

      function S({
        preloadedFeatures: e,
        createVisualElement: t,
        useRender: n,
        useVisualState: d,
        Component: f
      }) {
        e && function(e) {
          for (const t in e) y[t] = {
            ...y[t],
            ...e[t]
          }
        }(e);
        const h = (0, r.forwardRef)((function(h, m) {
          let v;
          const y = {
              ...(0, r.useContext)(i),
              ...h,
              layoutId: E(h)
            },
            {
              isStatic: w
            } = y,
            x = function(e) {
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
              }(e, (0, r.useContext)(a));
              return (0, r.useMemo)((() => ({
                initial: t,
                animate: n
              })), [g(t), g(n)])
            }(h),
            S = d(h, w);
          if (!w && b.j) {
            x.visualElement = function(e, t, n, u) {
              const {
                visualElement: c
              } = (0, r.useContext)(a), d = (0, r.useContext)(l), f = (0, r.useContext)(o.O), h = (0, r.useContext)(i).reducedMotion, p = (0, r.useRef)();
              u = u || d.renderer, !p.current && u && (p.current = u(e, {
                visualState: t,
                parent: c,
                props: n,
                presenceContext: f,
                blockInitialAnimation: !!f && !1 === f.initial,
                reducedMotionConfig: h
              }));
              const m = p.current;
              return (0, r.useInsertionEffect)((() => {
                m && m.update(n, f)
              })), (0, s.L)((() => {
                m && m.render()
              })), (0, r.useEffect)((() => {
                m && m.updateFeatures()
              })), (window.HandoffAppearAnimations ? s.L : r.useEffect)((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), m
            }(f, S, y, t);
            const n = (0, r.useContext)(k),
              u = (0, r.useContext)(l).strict;
            x.visualElement && (v = x.visualElement.loadFeatures(y, u, e, n))
          }
          return r.createElement(a.Provider, {
            value: x
          }, v && x.visualElement ? r.createElement(v, {
            visualElement: x.visualElement,
            ...y
          }) : null, n(f, h, function(e, t, n) {
            return (0, r.useCallback)((r => {
              r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" == typeof n ? n(r) : u(n) && (n.current = r))
            }), [t])
          }(S, x.visualElement, m), S, w, x.visualElement))
        }));
        return h[x] = f, h
      }

      function E({
        layoutId: e
      }) {
        const t = (0, r.useContext)(w.p).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function P(e) {
        function t(t, n = {}) {
          return S(e(t, n))
        }
        if ("undefined" == typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, {
          get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
        })
      }
      const C = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function T(e) {
        return "string" == typeof e && !e.includes("-") && !!(C.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      const L = {},
        M = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        D = new Set(M);

      function R(e, {
        layout: t,
        layoutId: n
      }) {
        return D.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!L[e] || "opacity" === e)
      }
      const A = e => Boolean(e && e.getVelocity),
        V = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        N = M.length,
        _ = e => t => "string" == typeof t && t.startsWith(e),
        z = _("--"),
        F = _("var(--"),
        O = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
        I = (e, t, n) => Math.min(Math.max(n, e), t),
        B = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        j = {
          ...B,
          transform: e => I(0, 1, e)
        },
        U = {
          ...B,
          default: 1
        },
        W = e => Math.round(1e5 * e) / 1e5,
        $ = /(-)?([\d]*\.?[\d])+/g,
        H = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Q = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function Y(e) {
        return "string" == typeof e
      }
      const q = e => ({
          test: t => Y(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        X = q("deg"),
        K = q("%"),
        Z = q("px"),
        G = q("vh"),
        J = q("vw"),
        ee = {
          ...K,
          parse: e => K.parse(e) / 100,
          transform: e => K.transform(100 * e)
        },
        te = {
          ...B,
          transform: Math.round
        },
        ne = {
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
          rotate: X,
          rotateX: X,
          rotateY: X,
          rotateZ: X,
          scale: U,
          scaleX: U,
          scaleY: U,
          scaleZ: U,
          skew: X,
          skewX: X,
          skewY: X,
          distance: Z,
          translateX: Z,
          translateY: Z,
          translateZ: Z,
          x: Z,
          y: Z,
          z: Z,
          perspective: Z,
          transformPerspective: Z,
          opacity: j,
          originX: ee,
          originY: ee,
          originZ: Z,
          zIndex: te,
          fillOpacity: j,
          strokeOpacity: j,
          numOctaves: te
        };

      function re(e, t, n, r) {
        const {
          style: i,
          vars: a,
          transform: o,
          transformOrigin: s
        } = e;
        let l = !1,
          u = !1,
          c = !0;
        for (const e in t) {
          const n = t[e];
          if (z(e)) {
            a[e] = n;
            continue
          }
          const r = ne[e],
            d = O(n, r);
          if (D.has(e)) {
            if (l = !0, o[e] = d, !c) continue;
            n !== (r.default || 0) && (c = !1)
          } else e.startsWith("origin") ? (u = !0, s[e] = d) : i[e] = d
        }
        if (t.transform || (l || r ? i.transform = function(e, {
            enableHardwareAcceleration: t = !0,
            allowTransformNone: n = !0
          }, r, i) {
            let a = "";
            for (let t = 0; t < N; t++) {
              const n = M[t];
              void 0 !== e[n] && (a += `${V[n]||n}(${e[n]}) `)
            }
            return t && !e.z && (a += "translateZ(0)"), a = a.trim(), i ? a = i(e, r ? "" : a) : n && r && (a = "none"), a
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

      function ae(e, t, n) {
        for (const r in t) A(t[r]) || R(r, n) || (e[r] = t[r])
      }

      function oe(e, t, n) {
        const i = {},
          a = function(e, t, n) {
            const i = {};
            return ae(i, e.style || {}, e), Object.assign(i, function({
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
        return e.drag && !1 !== e.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = a, i
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

      function de(e, t, n) {
        return "string" == typeof e ? e : Z.transform(t + n * e)
      }
      const fe = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        he = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function pe(e, {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: i,
        originY: a,
        pathLength: o,
        pathSpacing: s = 1,
        pathOffset: l = 0,
        ...u
      }, c, d, f) {
        if (re(e, u, c, f), d) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: h,
          style: p,
          dimensions: m
        } = e;
        h.transform && (m && (p.transform = h.transform), delete h.transform), m && (void 0 !== i || void 0 !== a || p.transform) && (p.transformOrigin = function(e, t, n) {
          return `${de(t,e.x,e.width)} ${de(n,e.y,e.height)}`
        }(m, void 0 !== i ? i : .5, void 0 !== a ? a : .5)), void 0 !== t && (h.x = t), void 0 !== n && (h.y = n), void 0 !== r && (h.scale = r), void 0 !== o && function(e, t, n = 1, r = 0, i = !0) {
          e.pathLength = 1;
          const a = i ? fe : he;
          e[a.offset] = Z.transform(-r);
          const o = Z.transform(t),
            s = Z.transform(n);
          e[a.array] = `${o} ${s}`
        }(h, o, s, l, !1)
      }
      const me = () => ({
          ...ie(),
          attrs: {}
        }),
        ge = e => "string" == typeof e && "svg" === e.toLowerCase();

      function ve(e, t, n, i) {
        const a = (0, r.useMemo)((() => {
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
          ae(t, e.style, e), a.style = {
            ...t,
            ...a.style
          }
        }
        return a
      }

      function ye(e = !1) {
        return (t, n, i, {
          latestValues: a
        }, o) => {
          const s = (T(t) ? ve : oe)(n, a, o, t),
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
            d = (0, r.useMemo)((() => A(c) ? c.get() : c), [c]);
          return (0, r.createElement)(t, {
            ...u,
            children: d
          })
        }
      }
      const be = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function we(e, {
        style: t,
        vars: n
      }, r, i) {
        Object.assign(e.style, t, i && i.getProjectionStyles(r));
        for (const t in n) e.style.setProperty(t, n[t])
      }
      const ke = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function xe(e, t, n, r) {
        we(e, t, void 0, r);
        for (const n in t.attrs) e.setAttribute(ke.has(n) ? n : be(n), t.attrs[n])
      }

      function Se(e, t) {
        const {
          style: n
        } = e, r = {};
        for (const i in n)(A(n[i]) || t.style && A(t.style[i]) || R(i, e)) && (r[i] = n[i]);
        return r
      }

      function Ee(e, t) {
        const n = Se(e, t);
        for (const r in e)(A(e[r]) || A(t[r])) && (n[-1 !== M.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
        return n
      }

      function Pe(e, t, n, r = {}, i = {}) {
        return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
      }
      var Ce = n(3513);
      const Te = e => Array.isArray(e),
        Le = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        Me = e => Te(e) ? e[e.length - 1] || 0 : e;

      function De(e) {
        const t = A(e) ? e.get() : e;
        return Le(t) ? t.toValue() : t
      }
      const Re = e => (t, n) => {
        const i = (0, r.useContext)(a),
          s = (0, r.useContext)(o.O),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: n
          }, r, i, a) {
            const o = {
              latestValues: Ae(r, i, a, e),
              renderState: t()
            };
            return n && (o.mount = e => n(r, e, o)), o
          }(e, t, i, s);
        return n ? l() : (0, Ce.h)(l)
      };

      function Ae(e, t, n, r) {
        const i = {},
          a = r(e, {});
        for (const e in a) i[e] = De(a[e]);
        let {
          initial: o,
          animate: s
        } = e;
        const l = p(e),
          u = m(e);
        t && u && !l && !1 !== e.inherit && (void 0 === o && (o = t.initial), void 0 === s && (s = t.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === o;
        const f = c ? s : o;
        return f && "boolean" != typeof f && !d(f) && (Array.isArray(f) ? f : [f]).forEach((t => {
          const n = Pe(e, t);
          if (!n) return;
          const {
            transitionEnd: r,
            transition: a,
            ...o
          } = n;
          for (const e in o) {
            let t = o[e];
            Array.isArray(t) && (t = t[c ? t.length - 1 : 0]), null !== t && (i[e] = t)
          }
          for (const e in r) i[e] = r[e]
        })), i
      }
      const Ve = {
          useVisualState: Re({
            scrapeMotionValuesFromProps: Ee,
            createRenderState: me,
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
              pe(n, r, {
                enableHardwareAcceleration: !1
              }, ge(t.tagName), e.transformTemplate), xe(t, n)
            }
          })
        },
        Ne = {
          useVisualState: Re({
            scrapeMotionValuesFromProps: Se,
            createRenderState: ie
          })
        };

      function _e(e, t, n, r = {
        passive: !0
      }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
      }
      const ze = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

      function Fe(e, t = "page") {
        return {
          point: {
            x: e[t + "X"],
            y: e[t + "Y"]
          }
        }
      }
      const Oe = e => t => ze(t) && e(t, Fe(t));

      function Ie(e, t, n, r) {
        return _e(e, t, Oe(n), r)
      }
      const Be = (e, t) => n => t(e(n)),
        je = (...e) => e.reduce(Be);

      function Ue(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const We = Ue("dragHorizontal"),
        $e = Ue("dragVertical");

      function He(e) {
        let t = !1;
        if ("y" === e) t = $e();
        else if ("x" === e) t = We();
        else {
          const e = We(),
            n = $e();
          e && n ? t = () => {
            e(), n()
          } : (e && e(), n && n())
        }
        return t
      }

      function Qe() {
        const e = He(!0);
        return !e || (e(), !1)
      }
      class Ye {
        constructor(e) {
          this.isMounted = !1, this.node = e
        }
        update() {}
      }
      var qe = n(8353);

      function Xe(e, t) {
        const n = "pointer" + (t ? "enter" : "leave"),
          r = "onHover" + (t ? "Start" : "End");
        return Ie(e.current, n, ((n, i) => {
          if ("touch" === n.type || Qe()) return;
          const a = e.getProps();
          e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && qe.Wi.update((() => a[r](n, i)))
        }), {
          passive: !e.getProps()[r]
        })
      }
      const Ke = (e, t) => !!t && (e === t || Ke(e, t.parentElement));
      var Ze = n(588);

      function Ge(e, t) {
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
            Feature: class extends Ye {
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
                } = e, a = {
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
                }(this.node.current, a, (e => {
                  const {
                    isIntersecting: t
                  } = e;
                  if (this.isInView === t) return;
                  if (this.isInView = t, i && !t && this.hasEnteredView) return;
                  t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                  const {
                    onViewportEnter: n,
                    onViewportLeave: r
                  } = this.node.getProps(), a = t ? n : r;
                  a && a(e)
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
            Feature: class extends Ye {
              constructor() {
                super(...arguments), this.removeStartListeners = Ze.Z, this.removeEndListeners = Ze.Z, this.removeAccessibleListeners = Ze.Z, this.startPointerPress = (e, t) => {
                  if (this.removeEndListeners(), this.isPressing) return;
                  const n = this.node.getProps(),
                    r = Ie(window, "pointerup", ((e, t) => {
                      if (!this.checkPressEnd()) return;
                      const {
                        onTap: n,
                        onTapCancel: r
                      } = this.node.getProps();
                      qe.Wi.update((() => {
                        Ke(this.node.current, e.target) ? n && n(e, t) : r && r(e, t)
                      }))
                    }), {
                      passive: !(n.onTap || n.onPointerUp)
                    }),
                    i = Ie(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), {
                      passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                  this.removeEndListeners = je(r, i), this.startPress(e, t)
                }, this.startAccessiblePress = () => {
                  const e = _e(this.node.current, "keydown", (e => {
                      "Enter" !== e.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = _e(this.node.current, "keyup", (e => {
                        "Enter" === e.key && this.checkPressEnd() && Ge("up", ((e, t) => {
                          const {
                            onTap: n
                          } = this.node.getProps();
                          n && qe.Wi.update((() => n(e, t)))
                        }))
                      })), Ge("down", ((e, t) => {
                        this.startPress(e, t)
                      })))
                    })),
                    t = _e(this.node.current, "blur", (() => {
                      this.isPressing && Ge("cancel", ((e, t) => this.cancelPress(e, t)))
                    }));
                  this.removeAccessibleListeners = je(e, t)
                }
              }
              startPress(e, t) {
                this.isPressing = !0;
                const {
                  onTapStart: n,
                  whileTap: r
                } = this.node.getProps();
                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && qe.Wi.update((() => n(e, t)))
              }
              checkPressEnd() {
                return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Qe()
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                const {
                  onTapCancel: n
                } = this.node.getProps();
                n && qe.Wi.update((() => n(e, t)))
              }
              mount() {
                const e = this.node.getProps(),
                  t = Ie(this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(e.onTapStart || e.onPointerStart)
                  }),
                  n = _e(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = je(t, n)
              }
              unmount() {
                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
              }
            }
          },
          focus: {
            Feature: class extends Ye {
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
                this.unmount = je(_e(this.node.current, "focus", (() => this.onFocus())), _e(this.node.current, "blur", (() => this.onBlur())))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends Ye {
              mount() {
                this.unmount = je(Xe(this.node, !0), Xe(this.node, !1))
              }
              unmount() {}
            }
          }
        };

      function at(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++)
          if (t[r] !== e[r]) return !1;
        return !0
      }

      function ot(e, t, n) {
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
      var lt = n(4890);
      const ut = e => 1e3 * e,
        ct = e => e / 1e3,
        dt = e => Array.isArray(e) && "number" == typeof e[0];

      function ft(e) {
        return Boolean(!e || "string" == typeof e && pt[e] || dt(e) || Array.isArray(e) && e.every(ft))
      }
      const ht = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        pt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ht([0, .65, .55, 1]),
          circOut: ht([.55, 0, 1, .45]),
          backIn: ht([.31, .01, .66, -.59]),
          backOut: ht([.33, 1.53, .69, .99])
        };

      function mt(e) {
        if (e) return dt(e) ? ht(e) : Array.isArray(e) ? e.map(mt) : pt[e]
      }
      const gt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        vt = {},
        yt = {};
      for (const e in gt) yt[e] = () => (void 0 === vt[e] && (vt[e] = gt[e]()), vt[e]);
      const bt = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function wt(e, t, n, r) {
        if (e === t && n === r) return Ze.Z;
        return i => 0 === i || 1 === i ? i : bt(function(e, t, n, r, i) {
          let a, o, s = 0;
          do {
            o = t + (n - t) / 2, a = bt(o, r, i) - e, a > 0 ? n = o : t = o
          } while (Math.abs(a) > 1e-7 && ++s < 12);
          return o
        }(i, 0, 1, e, n), t, r)
      }
      const kt = wt(.42, 0, 1, 1),
        xt = wt(0, 0, .58, 1),
        St = wt(.42, 0, .58, 1),
        Et = e => Array.isArray(e) && "number" != typeof e[0],
        Pt = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Ct = e => t => 1 - e(1 - t),
        Tt = e => 1 - Math.sin(Math.acos(e)),
        Lt = Ct(Tt),
        Mt = Pt(Lt),
        Dt = wt(.33, 1.53, .69, .99),
        Rt = Ct(Dt),
        At = Pt(Rt),
        Vt = {
          linear: Ze.Z,
          easeIn: kt,
          easeInOut: St,
          easeOut: xt,
          circIn: Tt,
          circInOut: Mt,
          circOut: Lt,
          backIn: Rt,
          backInOut: At,
          backOut: Dt,
          anticipate: e => (e *= 2) < 1 ? .5 * Rt(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        Nt = e => {
          if (Array.isArray(e)) {
            (0, lt.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, n, r, i] = e;
            return wt(t, n, r, i)
          }
          return "string" == typeof e ? ((0, lt.k)(void 0 !== Vt[e], `Invalid easing type '${e}'`), Vt[e]) : e
        },
        _t = (e, t) => n => Boolean(Y(n) && Q.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
        zt = (e, t, n) => r => {
          if (!Y(r)) return r;
          const [i, a, o, s] = r.match($);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        Ft = {
          ...B,
          transform: e => Math.round((e => I(0, 255, e))(e))
        },
        Ot = {
          test: _t("rgb", "red"),
          parse: zt("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + Ft.transform(e) + ", " + Ft.transform(t) + ", " + Ft.transform(n) + ", " + W(j.transform(r)) + ")"
        },
        It = {
          test: _t("#"),
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
          transform: Ot.transform
        },
        Bt = {
          test: _t("hsl", "hue"),
          parse: zt("hue", "saturation", "lightness"),
          transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
          }) => "hsla(" + Math.round(e) + ", " + K.transform(W(t)) + ", " + K.transform(W(n)) + ", " + W(j.transform(r)) + ")"
        },
        jt = {
          test: e => Ot.test(e) || It.test(e) || Bt.test(e),
          parse: e => Ot.test(e) ? Ot.parse(e) : Bt.test(e) ? Bt.parse(e) : It.parse(e),
          transform: e => Y(e) ? e : e.hasOwnProperty("red") ? Ot.transform(e) : Bt.transform(e)
        },
        Ut = (e, t, n) => -n * e + n * t + e;

      function Wt(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      const $t = (e, t, n) => {
          const r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r))
        },
        Ht = [It, Ot, Bt];

      function Qt(e) {
        const t = (n = e, Ht.find((e => e.test(n))));
        var n;
        (0, lt.k)(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let r = t.parse(e);
        return t === Bt && (r = function({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: r
        }) {
          e /= 360, n /= 100;
          let i = 0,
            a = 0,
            o = 0;
          if (t /= 100) {
            const r = n < .5 ? n * (1 + t) : n + t - n * t,
              s = 2 * n - r;
            i = Wt(s, r, e + 1 / 3), a = Wt(s, r, e), o = Wt(s, r, e - 1 / 3)
          } else i = a = o = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * a),
            blue: Math.round(255 * o),
            alpha: r
          }
        }(r)), r
      }
      const Yt = (e, t) => {
          const n = Qt(e),
            r = Qt(t),
            i = {
              ...n
            };
          return e => (i.red = $t(n.red, r.red, e), i.green = $t(n.green, r.green, e), i.blue = $t(n.blue, r.blue, e), i.alpha = Ut(n.alpha, r.alpha, e), Ot.transform(i))
        },
        qt = {
          regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: Ze.Z
        },
        Xt = {
          regex: H,
          countKey: "Colors",
          token: "${c}",
          parse: jt.parse
        },
        Kt = {
          regex: $,
          countKey: "Numbers",
          token: "${n}",
          parse: B.parse
        };

      function Zt(e, {
        regex: t,
        countKey: n,
        token: r,
        parse: i
      }) {
        const a = e.tokenised.match(t);
        a && (e["num" + n] = a.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...a.map(i)))
      }

      function Gt(e) {
        const t = e.toString(),
          n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
          };
        return n.value.includes("var(--") && Zt(n, qt), Zt(n, Xt), Zt(n, Kt), n
      }

      function Jt(e) {
        return Gt(e).values
      }

      function en(e) {
        const {
          values: t,
          numColors: n,
          numVars: r,
          tokenised: i
        } = Gt(e), a = t.length;
        return e => {
          let t = i;
          for (let i = 0; i < a; i++) t = i < r ? t.replace(qt.token, e[i]) : i < r + n ? t.replace(Xt.token, jt.transform(e[i])) : t.replace(Kt.token, W(e[i]));
          return t
        }
      }
      const tn = e => "number" == typeof e ? 0 : e,
        nn = {
          test: function(e) {
            var t, n;
            return isNaN(e) && Y(e) && ((null === (t = e.match($)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(H)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: Jt,
          createTransformer: en,
          getAnimatableNone: function(e) {
            const t = Jt(e);
            return en(e)(t.map(tn))
          }
        },
        rn = (e, t) => n => `${n>0?t:e}`;

      function an(e, t) {
        return "number" == typeof e ? n => Ut(e, t, n) : jt.test(e) ? Yt(e, t) : e.startsWith("var(") ? rn(e, t) : ln(e, t)
      }
      const on = (e, t) => {
          const n = [...e],
            r = n.length,
            i = e.map(((e, n) => an(e, t[n])));
          return e => {
            for (let t = 0; t < r; t++) n[t] = i[t](e);
            return n
          }
        },
        sn = (e, t) => {
          const n = {
              ...e,
              ...t
            },
            r = {};
          for (const i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = an(e[i], t[i]));
          return e => {
            for (const t in r) n[t] = r[t](e);
            return n
          }
        },
        ln = (e, t) => {
          const n = nn.createTransformer(t),
            r = Gt(e),
            i = Gt(t);
          return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? je(on(r.values, i.values), n) : ((0, lt.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), rn(e, t))
        },
        un = (e, t, n) => {
          const r = t - e;
          return 0 === r ? 1 : (n - e) / r
        },
        cn = (e, t) => n => Ut(e, t, n);

      function dn(e, t, {
        clamp: n = !0,
        ease: r,
        mixer: i
      } = {}) {
        const a = e.length;
        if ((0, lt.k)(a === t.length, "Both input and output ranges must be the same length"), 1 === a) return () => t[0];
        e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const o = function(e, t, n) {
            const r = [],
              i = n || ("number" == typeof(a = e[0]) ? cn : "string" == typeof a ? jt.test(a) ? Yt : ln : Array.isArray(a) ? on : "object" == typeof a ? sn : cn);
            var a;
            const o = e.length - 1;
            for (let n = 0; n < o; n++) {
              let a = i(e[n], e[n + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[n] || Ze.Z : t;
                a = je(e, a)
              }
              r.push(a)
            }
            return r
          }(t, r, i),
          s = o.length,
          l = t => {
            let n = 0;
            if (s > 1)
              for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            const r = un(e[n], e[n + 1], t);
            return o[n](r)
          };
        return n ? t => l(I(e[0], e[a - 1], t)) : l
      }

      function fn({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = "easeInOut"
      }) {
        const i = Et(r) ? r.map(Nt) : Nt(r),
          a = {
            done: !1,
            value: t[0]
          },
          o = function(e, t) {
            return e.map((e => e * t))
          }(n && n.length === t.length ? n : function(e) {
            const t = [0];
            return function(e, t) {
              const n = e[e.length - 1];
              for (let r = 1; r <= t; r++) {
                const i = un(0, t, r);
                e.push(Ut(n, 1, i))
              }
            }(t, e.length - 1), t
          }(t), e),
          s = dn(o, t, {
            ease: Array.isArray(i) ? i : (l = t, u = i, l.map((() => u || St)).splice(0, l.length - 1))
          });
        var l, u;
        return {
          calculatedDuration: e,
          next: t => (a.value = s(t), a.done = t >= e, a)
        }
      }

      function hn(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      const pn = 5;

      function mn(e, t, n) {
        const r = Math.max(t - pn, 0);
        return hn(n - e(r), t - r)
      }
      const gn = .001,
        vn = .01,
        yn = 10,
        bn = .05,
        wn = 1;
      const kn = 12;

      function xn(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      const Sn = ["duration", "bounce"],
        En = ["stiffness", "damping", "mass"];

      function Pn(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function Cn({
        keyframes: e,
        restDelta: t,
        restSpeed: n,
        ...r
      }) {
        const i = e[0],
          a = e[e.length - 1],
          o = {
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
            if (!Pn(e, En) && Pn(e, Sn)) {
              const n = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: n = 0,
                mass: r = 1
              }) {
                let i, a;
                (0, lt.K)(e <= ut(yn), "Spring duration must be 10 seconds or less");
                let o = 1 - t;
                o = I(bn, wn, o), e = I(vn, yn, ct(e)), o < 1 ? (i = t => {
                  const r = t * o,
                    i = r * e,
                    a = r - n,
                    s = xn(t, o),
                    l = Math.exp(-i);
                  return gn - a / s * l
                }, a = t => {
                  const r = t * o * e,
                    a = r * n + n,
                    s = Math.pow(o, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-r),
                    u = xn(Math.pow(t, 2), o);
                  return (-i(t) + gn > 0 ? -1 : 1) * ((a - s) * l) / u
                }) : (i = t => Math.exp(-t * e) * ((t - n) * e + 1) - gn, a = t => Math.exp(-t * e) * (e * e * (n - t)));
                const s = function(e, t, n) {
                  let r = n;
                  for (let n = 1; n < kn; n++) r -= e(r) / t(r);
                  return r
                }(i, a, 5 / e);
                if (e = ut(e), isNaN(s)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: e
                }; {
                  const t = Math.pow(s, 2) * r;
                  return {
                    stiffness: t,
                    damping: 2 * o * Math.sqrt(r * t),
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
          h = c ? -ct(c) : 0,
          p = l / (2 * Math.sqrt(s * u)),
          m = a - i,
          g = ct(Math.sqrt(s / u)),
          v = Math.abs(m) < 5;
        let y;
        if (n || (n = v ? .01 : 2), t || (t = v ? .005 : .5), p < 1) {
          const e = xn(g, p);
          y = t => {
            const n = Math.exp(-p * g * t);
            return a - n * ((h + p * g * m) / e * Math.sin(e * t) + m * Math.cos(e * t))
          }
        } else if (1 === p) y = e => a - Math.exp(-g * e) * (m + (h + g * m) * e);
        else {
          const e = g * Math.sqrt(p * p - 1);
          y = t => {
            const n = Math.exp(-p * g * t),
              r = Math.min(e * t, 300);
            return a - n * ((h + p * g * m) * Math.sinh(r) + e * m * Math.cosh(r)) / e
          }
        }
        return {
          calculatedDuration: f && d || null,
          next: e => {
            const r = y(e);
            if (f) o.done = e >= d;
            else {
              let i = h;
              0 !== e && (i = p < 1 ? mn(y, e, r) : 0);
              const s = Math.abs(i) <= n,
                l = Math.abs(a - r) <= t;
              o.done = s && l
            }
            return o.value = o.done ? a : r, o
          }
        }
      }

      function Tn({
        keyframes: e,
        velocity: t = 0,
        power: n = .8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: a = 500,
        modifyTarget: o,
        min: s,
        max: l,
        restDelta: u = .5,
        restSpeed: c
      }) {
        const d = e[0],
          f = {
            done: !1,
            value: d
          },
          h = e => void 0 === s ? l : void 0 === l || Math.abs(s - e) < Math.abs(l - e) ? s : l;
        let p = n * t;
        const m = d + p,
          g = void 0 === o ? m : o(m);
        g !== m && (p = g - d);
        const v = e => -p * Math.exp(-e / r),
          y = e => g + v(e),
          b = e => {
            const t = v(e),
              n = y(e);
            f.done = Math.abs(t) <= u, f.value = f.done ? g : n
          };
        let w, k;
        const x = e => {
          var t;
          t = f.value, (void 0 !== s && t < s || void 0 !== l && t > l) && (w = e, k = Cn({
            keyframes: [f.value, h(f.value)],
            velocity: mn(y, e, f.value),
            damping: i,
            stiffness: a,
            restDelta: u,
            restSpeed: c
          }))
        };
        return x(0), {
          calculatedDuration: null,
          next: e => {
            let t = !1;
            return k || void 0 !== w || (t = !0, b(e), x(e)), void 0 !== w && e > w ? k.next(e - w) : (!t && b(e), f)
          }
        }
      }
      var Ln = n(1340);
      const Mn = e => {
          const t = ({
            timestamp: t
          }) => e(t);
          return {
            start: () => qe.Wi.update(t, !0),
            stop: () => (0, qe.Pn)(t),
            now: () => Ln.frameData.isProcessing ? Ln.frameData.timestamp : performance.now()
          }
        },
        Dn = 2e4;

      function Rn(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < Dn;) t += 50, n = e.next(t);
        return t >= Dn ? 1 / 0 : t
      }
      const An = {
        decay: Tn,
        inertia: Tn,
        tween: fn,
        keyframes: fn,
        spring: Cn
      };

      function Vn({
        autoplay: e = !0,
        delay: t = 0,
        driver: n = Mn,
        keyframes: r,
        type: i = "keyframes",
        repeat: a = 0,
        repeatDelay: o = 0,
        repeatType: s = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: d,
        ...f
      }) {
        let h, p, m = 1,
          g = !1;
        const v = () => {
          h && h(), p = new Promise((e => {
            h = e
          }))
        };
        let y;
        v();
        const b = An[i] || fn;
        let w;
        b !== fn && "number" != typeof r[0] && (w = dn([0, 100], r, {
          clamp: !1
        }), r = [0, 100]);
        const k = b({
          ...f,
          keyframes: r
        });
        let x;
        "mirror" === s && (x = b({
          ...f,
          keyframes: [...r].reverse(),
          velocity: -(f.velocity || 0)
        }));
        let S = "idle",
          E = null,
          P = null,
          C = null;
        null === k.calculatedDuration && a && (k.calculatedDuration = Rn(k));
        const {
          calculatedDuration: T
        } = k;
        let L = 1 / 0,
          M = 1 / 0;
        null !== T && (L = T + o, M = L * (a + 1) - o);
        let D = 0;
        const R = e => {
            if (null === P) return;
            m > 0 && (P = Math.min(P, e)), m < 0 && (P = Math.min(e - M / m, P)), D = null !== E ? E : Math.round(e - P) * m;
            const n = D - t * (m >= 0 ? 1 : -1),
              i = m >= 0 ? n < 0 : n > M;
            D = Math.max(n, 0), "finished" === S && null === E && (D = M);
            let l = D,
              u = k;
            if (a) {
              const e = D / L;
              let t = Math.floor(e),
                n = e % 1;
              !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, a + 1);
              const r = Boolean(t % 2);
              r && ("reverse" === s ? (n = 1 - n, o && (n -= o / L)) : "mirror" === s && (u = x));
              let i = I(0, 1, n);
              D > M && (i = "reverse" === s && r ? 1 : 0), l = i * L
            }
            const c = i ? {
              done: !1,
              value: r[0]
            } : u.next(l);
            w && (c.value = w(c.value));
            let {
              done: f
            } = c;
            i || null === T || (f = m >= 0 ? D >= M : D <= 0);
            const h = null === E && ("finished" === S || "running" === S && f);
            return d && d(c.value), h && N(), c
          },
          A = () => {
            y && y.stop(), y = void 0
          },
          V = () => {
            S = "idle", A(), v(), P = C = null
          },
          N = () => {
            S = "finished", c && c(), A(), v()
          },
          _ = () => {
            if (g) return;
            y || (y = n(R));
            const e = y.now();
            l && l(), null !== E ? P = e - E : P && "finished" !== S || (P = e), C = P, E = null, S = "running", y.start()
          };
        e && _();
        const z = {
          then: (e, t) => p.then(e, t),
          get time() {
            return ct(D)
          },
          set time(e) {
            e = ut(e), D = e, null === E && y && 0 !== m ? P = y.now() - e / m : E = e
          },
          get duration() {
            const e = null === k.calculatedDuration ? Rn(k) : k.calculatedDuration;
            return ct(e)
          },
          get speed() {
            return m
          },
          set speed(e) {
            e !== m && y && (m = e, z.time = ct(D))
          },
          get state() {
            return S
          },
          play: _,
          pause: () => {
            S = "paused", E = D
          },
          stop: () => {
            g = !0, "idle" !== S && (S = "idle", u && u(), V())
          },
          cancel: () => {
            null !== C && R(C), V()
          },
          complete: () => {
            S = "finished"
          },
          sample: e => (P = 0, R(e))
        };
        return z
      }
      const Nn = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
      const _n = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        zn = {
          type: "keyframes",
          duration: .8
        },
        Fn = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        On = (e, {
          keyframes: t
        }) => t.length > 2 ? zn : D.has(e) ? e.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : _n : Fn,
        In = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !nn.test(t) && "0" !== t || t.startsWith("url("))),
        Bn = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function jn(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [r] = n.match($) || [];
        if (!r) return e;
        const i = n.replace(r, "");
        let a = Bn.has(t) ? 1 : 0;
        return r !== n && (a *= 100), t + "(" + a + i + ")"
      }
      const Un = /([a-z-]*)\(.*?\)/g,
        Wn = {
          ...nn,
          getAnimatableNone: e => {
            const t = e.match(Un);
            return t ? t.map(jn).join(" ") : e
          }
        },
        $n = {
          ...ne,
          color: jt,
          backgroundColor: jt,
          outlineColor: jt,
          fill: jt,
          stroke: jt,
          borderColor: jt,
          borderTopColor: jt,
          borderRightColor: jt,
          borderBottomColor: jt,
          borderLeftColor: jt,
          filter: Wn,
          WebkitFilter: Wn
        },
        Hn = e => $n[e];

      function Qn(e, t) {
        let n = Hn(e);
        return n !== Wn && (n = nn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      }
      const Yn = e => /^0[^.\s]+$/.test(e);

      function qn(e) {
        return "number" == typeof e ? 0 === e : null !== e ? "none" === e || "0" === e || Yn(e) : void 0
      }

      function Xn(e, t) {
        return e[t] || e.default || e
      }
      const Kn = (e, t, n, r = {}) => i => {
        const a = Xn(r, e) || {},
          o = a.delay || r.delay || 0;
        let {
          elapsed: s = 0
        } = r;
        s -= ut(o);
        const l = function(e, t, n, r) {
            const i = In(t, n);
            let a;
            a = Array.isArray(n) ? [...n] : [null, n];
            const o = void 0 !== r.from ? r.from : e.get();
            let s;
            const l = [];
            for (let e = 0; e < a.length; e++) null === a[e] && (a[e] = 0 === e ? o : a[e - 1]), qn(a[e]) && l.push(e), "string" == typeof a[e] && "none" !== a[e] && "0" !== a[e] && (s = a[e]);
            if (i && l.length && s)
              for (let e = 0; e < l.length; e++) a[l[e]] = Qn(t, s);
            return a
          }(t, e, n, a),
          u = l[0],
          c = l[l.length - 1],
          d = In(e, u),
          f = In(e, c);
        (0, lt.K)(d === f, `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
        let h = {
          keyframes: l,
          velocity: t.getVelocity(),
          ease: "easeOut",
          ...a,
          delay: -s,
          onUpdate: e => {
            t.set(e), a.onUpdate && a.onUpdate(e)
          },
          onComplete: () => {
            i(), a.onComplete && a.onComplete()
          }
        };
        if (function({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: r,
            staggerDirection: i,
            repeat: a,
            repeatType: o,
            repeatDelay: s,
            from: l,
            elapsed: u,
            ...c
          }) {
            return !!Object.keys(c).length
          }(a) || (h = {
            ...h,
            ...On(e, h)
          }), h.duration && (h.duration = ut(h.duration)), h.repeatDelay && (h.repeatDelay = ut(h.repeatDelay)), !d || !f || !1 === a.type) return function({
          keyframes: e,
          delay: t,
          onUpdate: n,
          onComplete: r
        }) {
          const i = () => (n && n(e[e.length - 1]), r && r(), {
            time: 0,
            speed: 1,
            duration: 0,
            play: Ze.Z,
            pause: Ze.Z,
            stop: Ze.Z,
            then: e => (e(), Promise.resolve()),
            cancel: Ze.Z,
            complete: Ze.Z
          });
          return t ? Vn({
            keyframes: [0, 1],
            duration: 0,
            delay: t,
            onComplete: i
          }) : i()
        }(h);
        if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
          const n = function(e, t, {
            onUpdate: n,
            onComplete: r,
            ...i
          }) {
            if (!yt.waapi() || !Nn.has(t) || i.repeatDelay || "mirror" === i.repeatType || 0 === i.damping || "inertia" === i.type) return !1;
            let a, o, s = !1;
            const l = () => {
              o = new Promise((e => {
                a = e
              }))
            };
            l();
            let {
              keyframes: u,
              duration: c = 300,
              ease: d,
              times: f
            } = i;
            if (((e, t) => "spring" === t.type || "backgroundColor" === e || !ft(t.ease))(t, i)) {
              const e = Vn({
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
              f = void 0, u = n, c = r - 10, d = "linear"
            }
            const h = function(e, t, n, {
                delay: r = 0,
                duration: i,
                repeat: a = 0,
                repeatType: o = "loop",
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
                  iterations: a + 1,
                  direction: "reverse" === o ? "alternate" : "normal"
                })
              }(e.owner.current, t, u, {
                ...i,
                duration: c,
                ease: d,
                times: f
              }),
              p = () => h.cancel(),
              m = () => {
                qe.Wi.update(p), a(), l()
              };
            return h.onfinish = () => {
              e.set(function(e, {
                repeat: t,
                repeatType: n = "loop"
              }) {
                return e[t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1]
              }(u, i)), r && r(), m()
            }, {
              then: (e, t) => o.then(e, t),
              get time() {
                return ct(h.currentTime || 0)
              },
              set time(e) {
                h.currentTime = ut(e)
              },
              get speed() {
                return h.playbackRate
              },
              set speed(e) {
                h.playbackRate = e
              },
              get duration() {
                return ct(c)
              },
              play: () => {
                s || (h.play(), (0, qe.Pn)(p))
              },
              pause: () => h.pause(),
              stop: () => {
                if (s = !0, "idle" === h.playState) return;
                const {
                  currentTime: t
                } = h;
                if (t) {
                  const n = Vn({
                    ...i,
                    autoplay: !1
                  });
                  e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
                }
                m()
              },
              complete: () => h.finish(),
              cancel: m
            }
          }(t, e, h);
          if (n) return n
        }
        return Vn(h)
      };

      function Zn(e) {
        return Boolean(A(e) && e.add)
      }

      function Gn(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function Jn(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      class er {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return Gn(this.subscriptions, e), () => Jn(this.subscriptions, e)
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
      class tr {
        constructor(e, t = {}) {
          var n;
          this.version = "10.12.18", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: n,
              timestamp: r
            } = Ln.frameData;
            this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, qe.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => qe.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: e
          }) => {
            e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = t.owner
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new er);
          const n = this.events[e].add(t);
          return "change" === e ? () => {
            n(), qe.Wi.read((() => {
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
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? hn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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

      function nr(e, t) {
        return new tr(e, t)
      }
      const rr = e => t => t.test(e),
        ir = [B, Z, K, X, J, G, {
          test: e => "auto" === e,
          parse: e => e
        }],
        ar = e => ir.find(rr(e)),
        or = [...ir, jt, nn];

      function sr(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nr(n))
      }

      function lr(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function ur({
        protectedKeys: e,
        needsAnimating: t
      }, n) {
        const r = e.hasOwnProperty(n) && !0 !== t[n];
        return t[n] = !1, r
      }

      function cr(e, t, {
        delay: n = 0,
        transitionOverride: r,
        type: i
      } = {}) {
        let {
          transition: a = e.getDefaultTransition(),
          transitionEnd: o,
          ...s
        } = e.makeTargetAnimatable(t);
        const l = e.getValue("willChange");
        r && (a = r);
        const u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (const t in s) {
          const r = e.getValue(t),
            i = s[t];
          if (!r || void 0 === i || c && ur(c, t)) continue;
          const o = {
            delay: n,
            elapsed: 0,
            ...a
          };
          if (window.HandoffAppearAnimations && !r.hasAnimated) {
            const n = e.getProps()[st];
            n && (o.elapsed = window.HandoffAppearAnimations(n, t, r, qe.Wi))
          }
          r.start(Kn(t, r, i, e.shouldReduceMotion && D.has(t) ? {
            type: !1
          } : o));
          const d = r.animation;
          Zn(l) && (l.add(t), d.then((() => l.remove(t)))), u.push(d)
        }
        return o && Promise.all(u).then((() => {
          o && function(e, t) {
            const n = ot(e, t);
            let {
              transitionEnd: r = {},
              transition: i = {},
              ...a
            } = n ? e.makeTargetAnimatable(n, !1) : {};
            a = {
              ...a,
              ...r
            };
            for (const t in a) sr(e, t, Me(a[t]))
          }(e, o)
        })), u
      }

      function dr(e, t, n = {}) {
        const r = ot(e, t, n.custom);
        let {
          transition: i = e.getDefaultTransition() || {}
        } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        const a = r ? () => Promise.all(cr(e, r, n)) : () => Promise.resolve(),
          o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
            const {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s
            } = i;
            return function(e, t, n = 0, r = 0, i = 1, a) {
              const o = [],
                s = (e.variantChildren.size - 1) * r,
                l = 1 === i ? (e = 0) => e * r : (e = 0) => s - e * r;
              return Array.from(e.variantChildren).sort(fr).forEach(((e, r) => {
                e.notify("AnimationStart", t), o.push(dr(e, t, {
                  ...a,
                  delay: n + l(r)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(o)
            }(e, t, a + r, o, s, n)
          } : () => Promise.resolve(),
          {
            when: s
          } = i;
        if (s) {
          const [e, t] = "beforeChildren" === s ? [a, o] : [o, a];
          return e().then((() => t()))
        }
        return Promise.all([a(), o(n.delay)])
      }

      function fr(e, t) {
        return e.sortNodePosition(t)
      }
      const hr = [...f].reverse(),
        pr = f.length;

      function mr(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: n
          }) => function(e, t, n = {}) {
            let r;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const i = t.map((t => dr(e, t, n)));
              r = Promise.all(i)
            } else if ("string" == typeof t) r = dr(e, t, n);
            else {
              const i = "function" == typeof t ? ot(e, t, n.custom) : t;
              r = Promise.all(cr(e, i, n))
            }
            return r.then((() => e.notify("AnimationComplete", t)))
          }(e, t, n))))
        }(e);
        const n = {
          animate: gr(!0),
          whileInView: gr(),
          whileHover: gr(),
          whileTap: gr(),
          whileDrag: gr(),
          whileFocus: gr(),
          exit: gr()
        };
        let r = !0;
        const i = (t, n) => {
          const r = ot(e, n);
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

        function a(a, o) {
          const s = e.getProps(),
            l = e.getVariantContext(!0) || {},
            u = [],
            f = new Set;
          let h = {},
            p = 1 / 0;
          for (let t = 0; t < pr; t++) {
            const v = hr[t],
              y = n[v],
              b = void 0 !== s[v] ? s[v] : l[v],
              w = c(b),
              k = v === o ? y.isActive : null;
            !1 === k && (p = t);
            let x = b === l[v] && b !== s[v] && w;
            if (x && r && e.manuallyAnimateOnMount && (x = !1), y.protectedKeys = {
                ...h
              }, !y.isActive && null === k || !b && !y.prevProp || d(b) || "boolean" == typeof b) continue;
            const S = (m = y.prevProp, "string" == typeof(g = b) ? g !== m : !!Array.isArray(g) && !at(g, m));
            let E = S || v === o && y.isActive && !x && w || t > p && w;
            const P = Array.isArray(b) ? b : [b];
            let C = P.reduce(i, {});
            !1 === k && (C = {});
            const {
              prevResolvedValues: T = {}
            } = y, L = {
              ...T,
              ...C
            }, M = e => {
              E = !0, f.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in L) {
              const t = C[e],
                n = T[e];
              h.hasOwnProperty(e) || (t !== n ? Te(t) && Te(n) ? !at(t, n) || S ? M(e) : y.protectedKeys[e] = !0 : void 0 !== t ? M(e) : f.add(e) : void 0 !== t && f.has(e) ? M(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = b, y.prevResolvedValues = C, y.isActive && (h = {
              ...h,
              ...C
            }), r && e.blockInitialAnimation && (E = !1), E && !x && u.push(...P.map((e => ({
              animation: e,
              options: {
                type: v,
                ...a
              }
            }))))
          }
          var m, g;
          if (f.size) {
            const t = {};
            f.forEach((n => {
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
          animateChanges: a,
          setActive: function(t, r, i) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) || void 0 === o || o.forEach((e => {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
            })), n[t].isActive = r;
            const s = a(i, t);
            for (const e in n) n[e].protectedKeys = {};
            return s
          },
          setAnimateFunction: function(n) {
            t = n(e)
          },
          getState: () => n
        }
      }

      function gr(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      let vr = 0;
      const yr = {
          animation: {
            Feature: class extends Ye {
              constructor(e) {
                super(e), e.animationState || (e.animationState = mr(e))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: e
                } = this.node.getProps();
                this.unmount(), d(e) && (this.unmount = e.subscribe(this.node))
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
            Feature: class extends Ye {
              constructor() {
                super(...arguments), this.id = vr++
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
        br = (e, t) => Math.abs(e - t);
      class wr {
        constructor(e, t, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Sr(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n = function(e, t) {
                  const n = br(e.x, t.x),
                    r = br(e.y, t.y);
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
              } = Ln.frameData;
              this.history.push({
                ...r,
                timestamp: i
              });
              const {
                onStart: a,
                onMove: o
              } = this.handlers;
              t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = kr(t, this.transformPagePoint), qe.Wi.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const {
                onEnd: n,
                onSessionEnd: r
              } = this.handlers, i = Sr("pointercancel" === e.type ? this.lastMoveEventInfo : kr(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, i), r && r(e, i)
            }, !ze(e)) return;
          this.handlers = t, this.transformPagePoint = n;
          const r = kr(Fe(e), this.transformPagePoint),
            {
              point: i
            } = r,
            {
              timestamp: a
            } = Ln.frameData;
          this.history = [{
            ...i,
            timestamp: a
          }];
          const {
            onSessionStart: o
          } = t;
          o && o(e, Sr(r, this.history)), this.removeListeners = je(Ie(window, "pointermove", this.handlePointerMove), Ie(window, "pointerup", this.handlePointerUp), Ie(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, qe.Pn)(this.updatePoint)
        }
      }

      function kr(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function xr(e, t) {
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
          delta: xr(e, Pr(t)),
          offset: xr(e, Er(t)),
          velocity: Cr(t, .1)
        }
      }

      function Er(e) {
        return e[0]
      }

      function Pr(e) {
        return e[e.length - 1]
      }

      function Cr(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let n = e.length - 1,
          r = null;
        const i = Pr(e);
        for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > ut(t)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        const a = ct(i.timestamp - r.timestamp);
        if (0 === a) return {
          x: 0,
          y: 0
        };
        const o = {
          x: (i.x - r.x) / a,
          y: (i.y - r.y) / a
        };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
      }

      function Tr(e) {
        return e.max - e.min
      }

      function Lr(e, t = 0, n = .01) {
        return Math.abs(e - t) <= n
      }

      function Mr(e, t, n, r = .5) {
        e.origin = r, e.originPoint = Ut(t.min, t.max, e.origin), e.scale = Tr(n) / Tr(t), (Lr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ut(n.min, n.max, e.origin) - e.originPoint, (Lr(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function Dr(e, t, n, r) {
        Mr(e.x, t.x, n.x, r ? r.originX : void 0), Mr(e.y, t.y, n.y, r ? r.originY : void 0)
      }

      function Rr(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + Tr(t)
      }

      function Ar(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + Tr(t)
      }

      function Vr(e, t, n) {
        Ar(e.x, t.x, n.x), Ar(e.y, t.y, n.y)
      }

      function Nr(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function _r(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
          min: n,
          max: r
        }
      }
      const zr = .35;

      function Fr(e, t, n) {
        return {
          min: Or(e, t),
          max: Or(e, n)
        }
      }

      function Or(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      const Ir = () => ({
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
        Br = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function jr(e) {
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

      function Wr(e) {
        return void 0 === e || 1 === e
      }

      function $r({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !Wr(e) || !Wr(t) || !Wr(n)
      }

      function Hr(e) {
        return $r(e) || Qr(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function Qr(e) {
        return Yr(e.x) || Yr(e.y)
      }

      function Yr(e) {
        return e && "0%" !== e
      }

      function qr(e, t, n) {
        return n + t * (e - n)
      }

      function Xr(e, t, n, r, i) {
        return void 0 !== i && (e = qr(e, i, r)), qr(e, n, r) + t
      }

      function Kr(e, t = 0, n = 1, r, i) {
        e.min = Xr(e.min, t, n, r, i), e.max = Xr(e.max, t, n, r, i)
      }

      function Zr(e, {
        x: t,
        y: n
      }) {
        Kr(e.x, t.translate, t.scale, t.originPoint), Kr(e.y, n.translate, n.scale, n.originPoint)
      }

      function Gr(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function Jr(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function ei(e, t, [n, r, i]) {
        const a = void 0 !== t[i] ? t[i] : .5,
          o = Ut(e.min, e.max, a);
        Kr(e, t[n], t[r], o, t.scale)
      }
      const ti = ["x", "scaleX", "originX"],
        ni = ["y", "scaleY", "originY"];

      function ri(e, t) {
        ei(e.x, t, ti), ei(e.y, t, ni)
      }

      function ii(e, t) {
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
      const ai = new WeakMap;
      class oi {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Br(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          const {
            presenceContext: n
          } = this.visualElement;
          n && !1 === n.isPresent || (this.panSession = new wr(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(Fe(e, "page").point)
            },
            onStart: (e, t) => {
              const {
                drag: n,
                dragPropagation: r,
                onDragStart: i
              } = this.getProps();
              if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = He(n), !this.openGlobalLock)) return;
              this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), jr((e => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (K.test(t)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const r = n.layout.layoutBox[e];
                    r && (t = Tr(r) * (parseFloat(t) / 100))
                  }
                }
                this.originPoint[e] = t
              })), i && qe.Wi.update((() => i(e, t)), !1, !0);
              const {
                animationState: a
              } = this.visualElement;
              a && a.setActive("whileDrag", !0)
            },
            onMove: (e, t) => {
              const {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: o
              } = t;
              if (r && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
                let n = null;
                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
              }(o), void(null !== this.currentDirection && i && i(this.currentDirection));
              this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && a(e, t)
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
          i && qe.Wi.update((() => i(e, t)))
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
          if (!n || !si(e, r, this.currentDirection)) return;
          const i = this.getAxisMotionValue(e);
          let a = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (a = function(e, {
            min: t,
            max: n
          }, r) {
            return void 0 !== t && e < t ? e = r ? Ut(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? Ut(n, e, r.max) : Math.min(e, n)), e
          }(a, this.constraints[e], this.elastic[e])), i.set(a)
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
              x: Nr(e.x, n, i),
              y: Nr(e.y, t, r)
            }
          }(n.layoutBox, e), this.elastic = function(e = zr) {
            return !1 === e ? e = 0 : !0 === e && (e = zr), {
              x: Fr(e, "left", "right"),
              y: Fr(e, "top", "bottom")
            }
          }(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && jr((e => {
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
            const r = ii(e, n),
              {
                scroll: i
              } = t;
            return i && (Jr(r.x, i.offset.x), Jr(r.y, i.offset.y)), r
          }(n, r.root, this.visualElement.getTransformPagePoint());
          let a = function(e, t) {
            return {
              x: _r(e.x, t.x),
              y: _r(e.y, t.y)
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
            }(a));
            this.hasMutatedConstraints = !!e, e && (a = Ur(e))
          }
          return a
        }
        startAnimation(e) {
          const {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: a,
            onDragTransitionEnd: o
          } = this.getProps(), s = this.constraints || {}, l = jr((o => {
            if (!si(o, t, this.currentDirection)) return;
            let l = s && s[o] || {};
            a && (l = {
              min: 0,
              max: 0
            });
            const u = r ? 200 : 1e6,
              c = r ? 40 : 1e7,
              d = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(o, d)
          }));
          return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return n.start(Kn(e, n, 0, t))
        }
        stopAnimation() {
          jr((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          const t = "_drag" + e.toUpperCase(),
            n = this.visualElement.getProps();
          return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
          jr((t => {
            const {
              drag: n
            } = this.getProps();
            if (!si(t, n, this.currentDirection)) return;
            const {
              projection: r
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              const {
                min: n,
                max: a
              } = r.layout.layoutBox[t];
              i.set(e[t] - Ut(n, a, .5))
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
          jr((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const n = t.get();
              r[e] = function(e, t) {
                let n = .5;
                const r = Tr(e),
                  i = Tr(t);
                return i > r ? n = un(t.min, t.max - r, e.min) : r > i && (n = un(e.min, e.max - i, t.min)), I(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: i
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), jr((t => {
            if (!si(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: i,
                max: a
              } = this.constraints[t];
            n.set(Ut(i, a, r[t]))
          }))
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ai.set(this.visualElement, this);
          const e = Ie(this.visualElement.current, "pointerdown", (e => {
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
          const i = _e(window, "resize", (() => this.scalePositionWithinConstraints())),
            a = n.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (jr((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            i(), e(), r(), a && a()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = zr,
              dragMomentum: o = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: o
          }
        }
      }

      function si(e, t, n) {
        return !(!0 !== t && t !== e || null !== n && n !== e)
      }
      const li = e => (t, n) => {
          e && qe.Wi.update((() => e(t, n)))
        },
        ui = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };

      function ci(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const di = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!Z.test(e)) return e;
              e = parseFloat(e)
            }
            return `${ci(e,t.target.x)}% ${ci(e,t.target.y)}%`
          }
        },
        fi = {
          correct: (e, {
            treeScale: t,
            projectionDelta: n
          }) => {
            const r = e,
              i = nn.parse(e);
            if (i.length > 5) return r;
            const a = nn.createTransformer(e),
              o = "number" != typeof i[0] ? 1 : 0,
              s = n.x.scale * t.x,
              l = n.y.scale * t.y;
            i[0 + o] /= s, i[1 + o] /= l;
            const u = Ut(s, l, .5);
            return "number" == typeof i[2 + o] && (i[2 + o] /= u), "number" == typeof i[3 + o] && (i[3 + o] /= u), a(i)
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
          var a;
          a = mi, Object.assign(L, a), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), ui.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: n,
            drag: r,
            isPresent: i
          } = this.props, a = n.projection;
          return a ? (a.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || qe.Wi.postRender((() => {
            const e = a.getStack();
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

      function pi(e) {
        const [t, n] = function() {
          const e = (0, r.useContext)(o.O);
          if (null === e) return [!0, null];
          const {
            isPresent: t,
            onExitComplete: n,
            register: i
          } = e, a = (0, r.useId)();
          return (0, r.useEffect)((() => i(a)), []), !t && n ? [!1, () => n && n(a)] : [!0]
        }(), i = (0, r.useContext)(w.p);
        return r.createElement(hi, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, r.useContext)(k),
          isPresent: t,
          safeToRemove: n
        })
      }
      const mi = {
          borderRadius: {
            ...di,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: di,
          borderTopRightRadius: di,
          borderBottomLeftRadius: di,
          borderBottomRightRadius: di,
          boxShadow: fi
        },
        gi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        vi = gi.length,
        yi = e => "string" == typeof e ? parseFloat(e) : e,
        bi = e => "number" == typeof e || Z.test(e);

      function wi(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const ki = Si(0, .5, Lt),
        xi = Si(.5, .95, Ze.Z);

      function Si(e, t, n) {
        return r => r < e ? 0 : r > t ? 1 : n(un(e, t, r))
      }

      function Ei(e, t) {
        e.min = t.min, e.max = t.max
      }

      function Pi(e, t) {
        Ei(e.x, t.x), Ei(e.y, t.y)
      }

      function Ci(e, t, n, r, i) {
        return e = qr(e -= t, 1 / n, r), void 0 !== i && (e = qr(e, 1 / i, r)), e
      }

      function Ti(e, t, [n, r, i], a, o) {
        ! function(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
          if (K.test(t) && (t = parseFloat(t), t = Ut(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
          let s = Ut(a.min, a.max, r);
          e === a && (s -= t), e.min = Ci(e.min, t, n, s, i), e.max = Ci(e.max, t, n, s, i)
        }(e, t[n], t[r], t[i], t.scale, a, o)
      }
      const Li = ["x", "scaleX", "originX"],
        Mi = ["y", "scaleY", "originY"];

      function Di(e, t, n, r) {
        Ti(e.x, t, Li, n ? n.x : void 0, r ? r.x : void 0), Ti(e.y, t, Mi, n ? n.y : void 0, r ? r.y : void 0)
      }

      function Ri(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function Ai(e) {
        return Ri(e.x) && Ri(e.y)
      }

      function Vi(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }

      function Ni(e) {
        return Tr(e.x) / Tr(e.y)
      }
      class _i {
        constructor() {
          this.members = []
        }
        add(e) {
          Gn(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if (Jn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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

      function zi(e, t, n) {
        let r = "";
        const i = e.x.translate / t.x,
          a = e.y.translate / t.y;
        if ((i || a) && (r = `translate3d(${i}px, ${a}px, 0) `), 1 === t.x && 1 === t.y || (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
          const {
            rotate: e,
            rotateX: t,
            rotateY: i
          } = n;
          e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), i && (r += `rotateY(${i}deg) `)
        }
        const o = e.x.scale * t.x,
          s = e.y.scale * t.y;
        return 1 === o && 1 === s || (r += `scale(${o}, ${s})`), r || "none"
      }
      const Fi = (e, t) => e.depth - t.depth;
      class Oi {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          Gn(this.children, e), this.isDirty = !0
        }
        remove(e) {
          Jn(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Fi), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const Ii = ["", "X", "Y", "Z"];
      let Bi = 0;
      const ji = {
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
            this.id = Bi++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              ji.totalNodes = ji.resolvedTargetDeltas = ji.recalculatedProjection = 0, this.nodes.forEach(Hi), this.nodes.forEach(Gi), this.nodes.forEach(Ji), this.nodes.forEach(Qi),
                function(e) {
                  window.MotionDebug && window.MotionDebug.record(e)
                }(ji)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Oi)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new er), this.eventHandlers.get(e).add(t)
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
              layout: a,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (a || i) && (this.isLayoutDirty = !0), e) {
              let n;
              const r = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) {
                  const n = performance.now(),
                    r = ({
                      timestamp: t
                    }) => {
                      const i = t - n;
                      i >= 250 && ((0, qe.Pn)(r), e(i - 250))
                    };
                  return qe.Wi.read(r, !0), () => (0, qe.Pn)(r)
                }(r), ui.hasAnimatedSinceResize && (ui.hasAnimatedSinceResize = !1, this.nodes.forEach(Zi))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || a) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const i = this.options.transition || o.getDefaultTransition() || aa,
                {
                  onLayoutAnimationStart: a,
                  onLayoutAnimationComplete: s
                } = o.getProps(),
                l = !this.targetLayout || !Vi(this.targetLayout, r) || n,
                u = !t && n;
              if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || t && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, u);
                const t = {
                  ...Xn(i, "layout"),
                  onPlay: a,
                  onComplete: s
                };
                (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || Zi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = r
            }))
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, qe.Pn)(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ea), this.animationId++)
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
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(qi);
            this.isUpdating || this.nodes.forEach(Xi), this.isUpdating = !1, this.nodes.forEach(Ki), this.nodes.forEach(Wi), this.nodes.forEach($i), this.clearAllSnapshots();
            const e = performance.now();
            Ln.frameData.delta = I(0, 1e3 / 60, e - Ln.frameData.timestamp), Ln.frameData.timestamp = e, Ln.frameData.isProcessing = !0, qe.S6.update.process(Ln.frameData), qe.S6.preRender.process(Ln.frameData), qe.S6.render.process(Ln.frameData), Ln.frameData.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
          }
          clearAllSnapshots() {
            this.nodes.forEach(Yi), this.sharedNodes.forEach(ta)
          }
          scheduleUpdateProjection() {
            qe.Wi.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            qe.Wi.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = Br(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
              t = this.projectionDelta && !Ai(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              a = r !== this.prevTransformTemplateValue;
            e && (t || Hr(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var r;
            return e && (n = this.removeTransform(n)), oa((r = n).x), oa(r.y), {
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
            if (!e) return Br();
            const t = e.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Jr(t.x, n.offset.x), Jr(t.y, n.offset.y)), t
          }
          removeElementScroll(e) {
            const t = Br();
            Pi(t, e);
            for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n],
                {
                  scroll: i,
                  options: a
                } = r;
              if (r !== this.root && i && a.layoutScroll) {
                if (i.isRoot) {
                  Pi(t, e);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Jr(t.x, -n.offset.x), Jr(t.y, -n.offset.y))
                }
                Jr(t.x, i.offset.x), Jr(t.y, i.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const n = Br();
            Pi(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const r = this.path[e];
              !t && r.options.layoutScroll && r.scroll && r !== r.root && ri(n, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), Hr(r.latestValues) && ri(n, r.latestValues)
            }
            return Hr(this.latestValues) && ri(n, this.latestValues), n
          }
          removeTransform(e) {
            const t = Br();
            Pi(t, e);
            for (let e = 0; e < this.path.length; e++) {
              const n = this.path[e];
              if (!n.instance) continue;
              if (!Hr(n.latestValues)) continue;
              $r(n.latestValues) && n.updateSnapshot();
              const r = Br();
              Pi(r, n.measurePageBox()), Di(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
            }
            return Hr(this.latestValues) && Di(t, this.latestValues), t
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ln.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(e = !1) {
            var t;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const r = Boolean(this.resumingFrom) || this !== n;
            if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
            const {
              layout: i,
              layoutId: a
            } = this.options;
            if (this.layout && (i || a)) {
              if (this.resolvedRelativeTargetAt = Ln.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Br(), this.relativeTargetOrigin = Br(), Vr(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Pi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                var o, s, l;
                if (this.target || (this.target = Br(), this.targetWithTransforms = Br()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), o = this.target, s = this.relativeTarget, l = this.relativeParent.target, Rr(o.x, s.x, l.x), Rr(o.y, s.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Pi(this.target, this.layout.layoutBox), Zr(this.target, this.targetDelta)) : Pi(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  const e = this.getClosestProjectingParent();
                  e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Br(), this.relativeTargetOrigin = Br(), Vr(this.relativeTargetOrigin, this.target, e.target), Pi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                ji.resolvedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !$r(this.parent.latestValues) && !Qr(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            var e;
            const t = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== t;
            let r = !0;
            if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === Ln.frameData.timestamp && (r = !1), r) return;
            const {
              layout: i,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !a) return;
            Pi(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x,
              s = this.treeScale.y;
            ! function(e, t, n, r = !1) {
              const i = n.length;
              if (!i) return;
              let a, o;
              t.x = t.y = 1;
              for (let s = 0; s < i; s++) {
                a = n[s], o = a.projectionDelta;
                const i = a.instance;
                i && i.style && "contents" === i.style.display || (r && a.options.layoutScroll && a.scroll && a !== a.root && ri(e, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Zr(e, o)), r && Hr(a.latestValues) && ri(e, a.latestValues))
              }
              t.x = Gr(t.x), t.y = Gr(t.y)
            }(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox);
            const {
              target: l
            } = t;
            if (!l) return void(this.projectionTransform && (this.projectionDelta = Ir(), this.projectionTransform = "none", this.scheduleRender()));
            this.projectionDelta || (this.projectionDelta = Ir(), this.projectionDeltaWithTransform = Ir());
            const u = this.projectionTransform;
            Dr(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = zi(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === o && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), ji.recalculatedProjection++
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
              a = Ir();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
            const o = Br(),
              s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              u = !l || l.members.length <= 1,
              c = Boolean(s && !u && !0 === this.options.crossfade && !this.path.some(ia));
            let d;
            this.animationProgress = 0, this.mixTargetDelta = t => {
              const n = t / 1e3;
              var l, f, h, p;
              na(a.x, e.x, n), na(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vr(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), l = this.relativeTarget, f = this.relativeTargetOrigin, h = o, p = n, ra(l.x, f.x, h.x, p), ra(l.y, f.y, h.y, p), d && Vi(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = Br()), Pi(d, this.relativeTarget)), s && (this.animationValues = i, function(e, t, n, r, i, a) {
                i ? (e.opacity = Ut(0, void 0 !== n.opacity ? n.opacity : 1, ki(r)), e.opacityExit = Ut(void 0 !== t.opacity ? t.opacity : 1, 0, xi(r))) : a && (e.opacity = Ut(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                for (let i = 0; i < vi; i++) {
                  const a = `border${gi[i]}Radius`;
                  let o = wi(t, a),
                    s = wi(n, a);
                  void 0 === o && void 0 === s || (o || (o = 0), s || (s = 0), 0 === o || 0 === s || bi(o) === bi(s) ? (e[a] = Math.max(Ut(yi(o), yi(s), r), 0), (K.test(s) || K.test(o)) && (e[a] += "%")) : e[a] = s)
                }(t.rotate || n.rotate) && (e.rotate = Ut(t.rotate || 0, n.rotate || 0, r))
              }(i, r, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, qe.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = qe.Wi.update((() => {
              ui.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n) {
                const r = A(0) ? 0 : nr(0);
                return r.start(Kn("", r, 1e3, n)), r.animation
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
              if (this !== e && this.layout && r && sa(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                n = this.target || Br();
                const t = Tr(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                const r = Tr(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + r
              }
              Pi(t, n), ri(t, i), Dr(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new _i), this.sharedNodes.get(e).add(t);
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
            for (let t = 0; t < Ii.length; t++) {
              const i = "rotate" + Ii[t];
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
            if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = De(e.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r;
            const a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = De(e.pointerEvents) || ""), this.hasProjected && !Hr(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t
            }
            const o = a.animationValues || a.latestValues;
            this.applyTransformsToTarget(), r.transform = zi(this.projectionDeltaWithTransform, this.treeScale, o), i && (r.transform = i(o, r.transform));
            const {
              x: s,
              y: l
            } = this.projectionDelta;
            r.transformOrigin = `${100*s.origin}% ${100*l.origin}% 0`, a.animationValues ? r.opacity = a === this ? null !== (n = null !== (t = o.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = a === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const e in L) {
              if (void 0 === o[e]) continue;
              const {
                correct: t,
                applyTo: n
              } = L[e], i = "none" === r.transform ? o[e] : t(o[e], a);
              if (n) {
                const e = n.length;
                for (let t = 0; t < e; t++) r[n[t]] = i
              } else r[e] = i
            }
            return this.options.layoutId && (r.pointerEvents = a === this ? De(e.pointerEvents) || "" : "none"), r
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(qi), this.root.sharedNodes.clear()
          }
        }
      }

      function Wi(e) {
        e.updateLayout()
      }

      function $i(e) {
        var t;
        const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: r
          } = e.layout, {
            animationType: i
          } = e.options, a = n.source !== e.layout.source;
          "size" === i ? jr((e => {
            const r = a ? n.measuredBox[e] : n.layoutBox[e],
              i = Tr(r);
            r.min = t[e].min, r.max = r.min + i
          })) : sa(i, n.layoutBox, t) && jr((r => {
            const i = a ? n.measuredBox[r] : n.layoutBox[r],
              o = Tr(t[r]);
            i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o)
          }));
          const o = Ir();
          Dr(o, t, n.layoutBox);
          const s = Ir();
          a ? Dr(s, e.applyTransform(r, !0), n.measuredBox) : Dr(s, t, n.layoutBox);
          const l = !Ai(o);
          let u = !1;
          if (!e.resumeFrom) {
            const r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              const {
                snapshot: i,
                layout: a
              } = r;
              if (i && a) {
                const o = Br();
                Vr(o, n.layoutBox, i.layoutBox);
                const s = Br();
                Vr(s, t, a.layoutBox), Vi(o, s) || (u = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: s,
            layoutDelta: o,
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

      function Hi(e) {
        ji.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
      }

      function Qi(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
      }

      function Yi(e) {
        e.clearSnapshot()
      }

      function qi(e) {
        e.clearMeasurements()
      }

      function Xi(e) {
        e.isLayoutDirty = !1
      }

      function Ki(e) {
        const {
          visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function Zi(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
      }

      function Gi(e) {
        e.resolveTargetDelta()
      }

      function Ji(e) {
        e.calcProjection()
      }

      function ea(e) {
        e.resetRotation()
      }

      function ta(e) {
        e.removeLeadSnapshot()
      }

      function na(e, t, n) {
        e.translate = Ut(t.translate, 0, n), e.scale = Ut(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function ra(e, t, n, r) {
        e.min = Ut(t.min, n.min, r), e.max = Ut(t.max, n.max, r)
      }

      function ia(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const aa = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function oa(e) {
        e.min = Math.round(e.min), e.max = Math.round(e.max)
      }

      function sa(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !Lr(Ni(t), Ni(n), .2)
      }
      const la = Ui({
          attachResizeListener: (e, t) => _e(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        ua = {
          current: void 0
        },
        ca = Ui({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!ua.current) {
              const e = new la({});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), ua.current = e
            }
            return ua.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        da = {
          pan: {
            Feature: class extends Ye {
              constructor() {
                super(...arguments), this.removePointerDownListener = Ze.Z
              }
              onPointerDown(e) {
                this.session = new wr(e, this.createPanHandlers(), {
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
                  onSessionStart: li(e),
                  onStart: li(t),
                  onMove: n,
                  onEnd: (e, t) => {
                    delete this.session, r && qe.Wi.update((() => r(e, t)))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Ie(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
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
            Feature: class extends Ye {
              constructor(e) {
                super(e), this.removeGroupControls = Ze.Z, this.removeListeners = Ze.Z, this.controls = new oi(e)
              }
              mount() {
                const {
                  dragControls: e
                } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ze.Z
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners()
              }
            },
            ProjectionNode: ca,
            MeasureLayout: pi
          }
        },
        fa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function ha(e, t, n = 1) {
        (0, lt.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [r, i] = function(e) {
          const t = fa.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        }(e);
        if (!r) return;
        const a = window.getComputedStyle(t).getPropertyValue(r);
        return a ? a.trim() : F(i) ? ha(i, t, n + 1) : i
      }
      const pa = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        ma = e => pa.has(e),
        ga = e => e === B || e === Z,
        va = (e, t) => parseFloat(e.split(", ")[t]),
        ya = (e, t) => (n, {
          transform: r
        }) => {
          if ("none" === r || !r) return 0;
          const i = r.match(/^matrix3d\((.+)\)$/);
          if (i) return va(i[1], t); {
            const t = r.match(/^matrix\((.+)\)$/);
            return t ? va(t[1], e) : 0
          }
        },
        ba = new Set(["x", "y", "z"]),
        wa = M.filter((e => !ba.has(e))),
        ka = {
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
          x: ya(4, 13),
          y: ya(5, 14)
        };

      function xa(e, t, n, r) {
        return (e => Object.keys(e).some(ma))(t) ? ((e, t, n = {}, r = {}) => {
          t = {
            ...t
          }, r = {
            ...r
          };
          const i = Object.keys(t).filter(ma);
          let a = [],
            o = !1;
          const s = [];
          if (i.forEach((i => {
              const l = e.getValue(i);
              if (!e.hasValue(i)) return;
              let u = n[i],
                c = ar(u);
              const d = t[i];
              let f;
              if (Te(d)) {
                const e = d.length,
                  t = null === d[0] ? 1 : 0;
                u = d[t], c = ar(u);
                for (let n = t; n < e && null !== d[n]; n++) f ? (0, lt.k)(ar(d[n]) === f, "All keyframes must be of the same type") : (f = ar(d[n]), (0, lt.k)(f === c || ga(c) && ga(f), "Keyframes must be of the same dimension as the current value"))
              } else f = ar(d);
              if (c !== f)
                if (ga(c) && ga(f)) {
                  const e = l.get();
                  "string" == typeof e && l.set(parseFloat(e)), "string" == typeof d ? t[i] = parseFloat(d) : Array.isArray(d) && f === Z && (t[i] = d.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == f ? void 0 : f.transform) && (0 === u || 0 === d) ? 0 === u ? l.set(f.transform(u)) : t[i] = c.transform(d) : (o || (a = function(e) {
                  const t = [];
                  return wa.forEach((n => {
                    const r = e.getValue(n);
                    void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), o = !0), s.push(i), r[i] = void 0 !== r[i] ? r[i] : t[i], l.jump(d))
            })), s.length) {
            const n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((e, t, n) => {
                const r = t.measureViewportBox(),
                  i = t.current,
                  a = getComputedStyle(i),
                  {
                    display: o
                  } = a,
                  s = {};
                "none" === o && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
                  s[e] = ka[e](r, a)
                })), t.render();
                const l = t.measureViewportBox();
                return n.forEach((n => {
                  const r = t.getValue(n);
                  r && r.jump(s[n]), e[n] = ka[n](l, a)
                })), e
              })(t, e, s);
            return a.length && a.forEach((([t, n]) => {
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
      const Sa = {
          current: null
        },
        Ea = {
          current: !1
        },
        Pa = new WeakMap,
        Ca = Object.keys(y),
        Ta = Ca.length,
        La = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        Ma = h.length;
      class Da {
        constructor({
          parent: e,
          props: t,
          presenceContext: n,
          reducedMotionConfig: r,
          visualState: i
        }, a = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => qe.Wi.render(this.render, !1, !0);
          const {
            latestValues: o,
            renderState: s
          } = i;
          this.latestValues = o, this.baseTarget = {
            ...o
          }, this.initialValues = t.initial ? {
            ...o
          } : {}, this.renderState = s, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = a, this.isControllingVariants = p(t), this.isVariantNode = m(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: l,
            ...u
          } = this.scrapeMotionValuesFromProps(t, {});
          for (const e in u) {
            const t = u[e];
            void 0 !== o[e] && A(t) && (t.set(o[e], !1), Zn(l) && l.add(e))
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {}
        }
        mount(e) {
          this.current = e, Pa.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), Ea.current || function() {
            if (Ea.current = !0, b.j)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => Sa.current = e.matches;
                e.addListener(t), t()
              } else Sa.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Sa.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          Pa.delete(this.current), this.projection && this.projection.unmount(), (0, qe.Pn)(this.notifyUpdate), (0, qe.Pn)(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          for (const e in this.features) this.features[e].unmount();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const n = D.has(e),
            r = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && qe.Wi.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
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
          let a, o;
          for (let e = 0; e < Ta; e++) {
            const n = Ca[e],
              {
                isEnabled: r,
                Feature: i,
                ProjectionNode: s,
                MeasureLayout: l
              } = y[n];
            s && (a = s), r(t) && (!this.features[n] && i && (this.features[n] = new i(this)), l && (o = l))
          }
          if (!this.projection && a) {
            this.projection = new a(this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: n,
              drag: r,
              dragConstraints: o,
              layoutScroll: s,
              layoutRoot: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(r) || o && u(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: i,
              layoutScroll: s,
              layoutRoot: l
            })
          }
          return o
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Br()
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
          for (let t = 0; t < La.length; t++) {
            const n = La[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r))
          }
          this.prevMotionValues = function(e, t, n) {
            const {
              willChange: r
            } = t;
            for (const i in t) {
              const a = t[i],
                o = n[i];
              if (A(a)) e.addValue(i, a), Zn(r) && r.add(i);
              else if (A(o)) e.addValue(i, nr(a, {
                owner: e
              })), Zn(r) && r.remove(i);
              else if (o !== a)
                if (e.hasValue(i)) {
                  const t = e.getValue(i);
                  !t.hasAnimated && t.set(a)
                } else {
                  const t = e.getStaticValue(i);
                  e.addValue(i, nr(void 0 !== t ? t : a, {
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
          for (let e = 0; e < Ma; e++) {
            const n = h[e],
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
          return void 0 === n && void 0 !== t && (n = nr(t, {
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
          } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = Pe(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
          if (n && void 0 !== r) return r;
          const i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || A(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new er), this.events[e].add(t)
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t)
        }
      }
      class Ra extends Da {
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
          let a = function(e, t, n) {
            const r = {};
            for (const i in e) {
              const e = lr(i, t);
              if (void 0 !== e) r[i] = e;
              else {
                const e = n.getValue(i);
                e && (r[i] = e.get())
              }
            }
            return r
          }(n, e || {}, this);
          if (r && (t && (t = r(t)), n && (n = r(n)), a && (a = r(a))), i) {
            ! function(e, t, n) {
              var r, i;
              const a = Object.keys(t).filter((t => !e.hasValue(t))),
                o = a.length;
              if (o)
                for (let l = 0; l < o; l++) {
                  const o = a[l],
                    u = t[o];
                  let c = null;
                  Array.isArray(u) && (c = u[0]), null === c && (c = null !== (i = null !== (r = n[o]) && void 0 !== r ? r : e.readValue(o)) && void 0 !== i ? i : t[o]), null != c && ("string" == typeof c && (/^\-?\d*\.?\d+$/.test(c) || Yn(c)) ? c = parseFloat(c) : (s = c, !or.find(rr(s)) && nn.test(u) && (c = Qn(o, u))), e.addValue(o, nr(c, {
                    owner: e
                  })), void 0 === n[o] && (n[o] = c), null !== c && e.setBaseTarget(o, c))
                }
              var s
            }(this, n, a);
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
                  if (!F(t)) return;
                  const n = ha(t, r);
                  n && e.set(n)
                }));
                for (const e in t) {
                  const i = t[e];
                  if (!F(i)) continue;
                  const a = ha(i, r);
                  a && (t[e] = a, n || (n = {}), void 0 === n[e] && (n[e] = i))
                }
                return {
                  target: t,
                  transitionEnd: n
                }
              }(e, t, r);
              return xa(e, t = i.target, n, r = i.transitionEnd)
            })(this, n, a, t);
            t = e.transitionEnd, n = e.target
          }
          return {
            transition: e,
            transitionEnd: t,
            ...n
          }
        }
      }
      class Aa extends Ra {
        readValueFromInstance(e, t) {
          if (D.has(t)) {
            const e = Hn(t);
            return e && e.default || 0
          } {
            const r = (n = e, window.getComputedStyle(n)),
              i = (z(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var n
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return ii(e, t)
        }
        build(e, t, n, r) {
          re(e, t, n, r.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t) {
          return Se(e, t)
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: e
          } = this.props;
          A(e) && (this.childSubscription = e.on("change", (e => {
            this.current && (this.current.textContent = `${e}`)
          })))
        }
        renderInstance(e, t, n, r) {
          we(e, t, n, r)
        }
      }
      class Va extends Ra {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          if (D.has(t)) {
            const e = Hn(t);
            return e && e.default || 0
          }
          return t = ke.has(t) ? t : be(t), e.getAttribute(t)
        }
        measureInstanceViewportBox() {
          return Br()
        }
        scrapeMotionValuesFromProps(e, t) {
          return Ee(e, t)
        }
        build(e, t, n, r) {
          pe(e, t, n, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(e, t, n, r) {
          xe(e, t, 0, r)
        }
        mount(e) {
          this.isSVGTag = ge(e.tagName), super.mount(e)
        }
      }
      const Na = (e, t) => T(e) ? new Va(t, {
          enableHardwareAcceleration: !1
        }) : new Aa(t, {
          enableHardwareAcceleration: !0
        }),
        _a = {
          ...yr,
          ...it,
          ...da,
          layout: {
            ProjectionNode: ca,
            MeasureLayout: pi
          }
        },
        za = P(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, n, r) {
          return {
            ...T(e) ? Ve : Ne,
            preloadedFeatures: n,
            useRender: ye(t),
            createVisualElement: r,
            Component: e
          }
        }(e, t, _a, Na)))
    },
    4890: (e, t, n) => {
      n.d(t, {
        K: () => i,
        k: () => a
      });
      var r = n(588);
      let i = r.Z,
        a = r.Z
    },
    7010: (e, t, n) => {
      n.d(t, {
        j: () => r
      });
      const r = "undefined" != typeof document
    },
    588: (e, t, n) => {
      n.d(t, {
        Z: () => r
      });
      const r = e => e
    },
    3513: (e, t, n) => {
      n.d(t, {
        h: () => i
      });
      var r = n(289);

      function i(e) {
        const t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
    },
    1016: (e, t, n) => {
      n.d(t, {
        L: () => i
      });
      var r = n(289);
      const i = n(7010).j ? r.useLayoutEffect : r.useEffect
    },
    4933: (e, t, n) => {
      n.d(t, {
        YD: () => u
      });
      var r = n(289),
        i = (Object.defineProperty, new Map),
        a = new WeakMap,
        o = 0,
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
                return `${t}_${"root"===t?(n=e.root,n?(a.has(n)||(o+=1,a.set(n,o.toString())),a.get(n)):"0"):e[t]}`;
                var n
              })).toString()
            }(e),
            n = i.get(t);
          if (!n) {
            const r = new Map;
            let a;
            const o = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const i = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (n = r.get(t.target)) || n.forEach((e => {
                  e(i, t)
                }))
              }))
            }), e);
            a = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
              id: t,
              observer: o,
              elements: r
            }, i.set(t, n)
          }
          return n
        }(n);
        let d = c.get(e) || [];
        return c.has(e) || c.set(e, d), d.push(t), u.observe(e),
          function() {
            d.splice(d.indexOf(t), 1), 0 === d.length && (c.delete(e), u.unobserve(e)), 0 === c.size && (u.disconnect(), i.delete(l))
          }
      }

      function u({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: i,
        root: a,
        triggerOnce: o,
        skip: s,
        initialInView: u,
        fallbackInView: c,
        onChange: d
      } = {}) {
        var f;
        const [h, p] = r.useState(null), m = r.useRef(), [g, v] = r.useState({
          inView: !!u,
          entry: void 0
        });
        m.current = d, r.useEffect((() => {
          if (s || !h) return;
          let r;
          return r = l(h, ((e, t) => {
            v({
              inView: e,
              entry: t
            }), m.current && m.current(e, t), t.isIntersecting && o && r && (r(), r = void 0)
          }), {
            root: a,
            rootMargin: i,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, c), () => {
            r && r()
          }
        }), [Array.isArray(e) ? e.toString() : e, h, a, i, o, s, n, c, t]);
        const y = null == (f = g.entry) ? void 0 : f.target,
          b = r.useRef();
        h || !y || o || s || b.current === y || (b.current = y, v({
          inView: !!u,
          entry: void 0
        }));
        const w = [p, g.inView, g.entry];
        return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
      }
      r.Component
    }
  }
]);