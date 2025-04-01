! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7cdefe1-a409-4992-9d21-2bb7bbd271e5", e._sentryDebugIdIdentifier = "sentry-dbid-b7cdefe1-a409-4992-9d21-2bb7bbd271e5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2312], {
    69450: (e, t, r) => {
      "use strict";
      r.d(t, {
        jK: () => ye,
        rC: () => ur,
        E5: () => ar,
        fE: () => fe,
        nj: () => dr
      });
      var n = r(90164),
        o = Object.prototype.toString;

      function a(e) {
        return "function" == typeof e || "[object Function]" === o.call(e)
      }
      var i = Math.pow(2, 53) - 1;

      function l(e, t) {
        var r = Array,
          n = Object(e);
        if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        if (void 0 !== t && !a(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
        for (var o, l = function(e) {
            var t = function(e) {
              var t = Number(e);
              return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
            }(e);
            return Math.min(Math.max(t, 0), i)
          }(n.length), u = a(r) ? Object(new r(l)) : new Array(l), s = 0; s < l;) o = n[s], u[s] = t ? t(o, s) : o, s += 1;
        return u.length = l, u
      }

      function u(e) {
        return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, u(e)
      }

      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n)
        }
      }

      function c(e) {
        var t = function(e, t) {
          if ("object" !== u(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" !== u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === u(t) ? t : String(t)
      }
      const d = "undefined" == typeof Set ? Set : function() {
        function e() {
          var t, r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), t = this, n = void 0, (r = c(r = "items")) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[r] = n, this.items = o
        }
        var t, r;
        return t = e, (r = [{
          key: "add",
          value: function(e) {
            return !1 === this.has(e) && this.items.push(e), this
          }
        }, {
          key: "clear",
          value: function() {
            this.items = []
          }
        }, {
          key: "delete",
          value: function(e) {
            var t = this.items.length;
            return this.items = this.items.filter((function(t) {
              return t !== e
            })), t !== this.items.length
          }
        }, {
          key: "forEach",
          value: function(e) {
            var t = this;
            this.items.forEach((function(r) {
              e(r, r, t)
            }))
          }
        }, {
          key: "has",
          value: function(e) {
            return -1 !== this.items.indexOf(e)
          }
        }, {
          key: "size",
          get: function() {
            return this.items.length
          }
        }]) && s(t.prototype, r), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e
      }();

      function p(e) {
        var t;
        return null !== (t = e.localName) && void 0 !== t ? t : e.tagName.toLowerCase()
      }
      var f = {
          article: "article",
          aside: "complementary",
          button: "button",
          datalist: "listbox",
          dd: "definition",
          details: "group",
          dialog: "dialog",
          dt: "term",
          fieldset: "group",
          figure: "figure",
          form: "form",
          footer: "contentinfo",
          h1: "heading",
          h2: "heading",
          h3: "heading",
          h4: "heading",
          h5: "heading",
          h6: "heading",
          header: "banner",
          hr: "separator",
          html: "document",
          legend: "legend",
          li: "listitem",
          math: "math",
          main: "main",
          menu: "list",
          nav: "navigation",
          ol: "list",
          optgroup: "group",
          option: "option",
          output: "status",
          progress: "progressbar",
          section: "region",
          summary: "button",
          table: "table",
          tbody: "rowgroup",
          textarea: "textbox",
          tfoot: "rowgroup",
          td: "cell",
          th: "columnheader",
          thead: "rowgroup",
          tr: "row",
          ul: "list"
        },
        b = {
          caption: new Set(["aria-label", "aria-labelledby"]),
          code: new Set(["aria-label", "aria-labelledby"]),
          deletion: new Set(["aria-label", "aria-labelledby"]),
          emphasis: new Set(["aria-label", "aria-labelledby"]),
          generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
          insertion: new Set(["aria-label", "aria-labelledby"]),
          paragraph: new Set(["aria-label", "aria-labelledby"]),
          presentation: new Set(["aria-label", "aria-labelledby"]),
          strong: new Set(["aria-label", "aria-labelledby"]),
          subscript: new Set(["aria-label", "aria-labelledby"]),
          superscript: new Set(["aria-label", "aria-labelledby"])
        };

      function m(e, t) {
        return function(e, t) {
          return ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-hidden", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"].some((function(r) {
            var n;
            return e.hasAttribute(r) && !(null !== (n = b[t]) && void 0 !== n && n.has(r))
          }))
        }(e, t)
      }

      function y(e) {
        return null !== e && e.nodeType === e.ELEMENT_NODE
      }

      function v(e) {
        return y(e) && "caption" === p(e)
      }

      function h(e) {
        return y(e) && "input" === p(e)
      }

      function g(e) {
        return y(e) && "legend" === p(e)
      }

      function w(e) {
        return function(e) {
          return y(e) && void 0 !== e.ownerSVGElement
        }(e) && "title" === p(e)
      }

      function P(e, t) {
        if (y(e) && e.hasAttribute(t)) {
          var r = e.getAttribute(t).split(" "),
            n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
          return r.map((function(e) {
            return n.getElementById(e)
          })).filter((function(e) {
            return null !== e
          }))
        }
        return []
      }

      function C(e, t) {
        return !!y(e) && -1 !== t.indexOf(function(e) {
          var t = function(e) {
            var t = e.getAttribute("role");
            if (null !== t) {
              var r = t.trim().split(" ")[0];
              if (r.length > 0) return r
            }
            return null
          }(e);
          if (null === t || "presentation" === t) {
            var r = function(e) {
              var t = f[p(e)];
              if (void 0 !== t) return t;
              switch (p(e)) {
                case "a":
                case "area":
                case "link":
                  if (e.hasAttribute("href")) return "link";
                  break;
                case "img":
                  return "" !== e.getAttribute("alt") || m(e, "img") ? "img" : "presentation";
                case "input":
                  var r = e.type;
                  switch (r) {
                    case "button":
                    case "image":
                    case "reset":
                    case "submit":
                      return "button";
                    case "checkbox":
                    case "radio":
                      return r;
                    case "range":
                      return "slider";
                    case "email":
                    case "tel":
                    case "text":
                    case "url":
                      return e.hasAttribute("list") ? "combobox" : "textbox";
                    case "search":
                      return e.hasAttribute("list") ? "combobox" : "searchbox";
                    case "number":
                      return "spinbutton";
                    default:
                      return null
                  }
                case "select":
                  return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox"
              }
              return null
            }(e);
            if ("presentation" !== t || m(e, r || "")) return r
          }
          return t
        }(e))
      }

      function E(e, t) {
        if (!y(e)) return !1;
        if ("range" === t) return C(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
        throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("))
      }

      function q(e, t) {
        var r = l(e.querySelectorAll(t));
        return P(e, "aria-owns").forEach((function(e) {
          r.push.apply(r, l(e.querySelectorAll(t)))
        })), r
      }

      function x(e) {
        var t = e.getPropertyValue("content");
        return /^["'].*["']$/.test(t) ? t.slice(1, -1) : ""
      }

      function O(e) {
        var t = p(e);
        return "button" === t || "input" === t && "hidden" !== e.getAttribute("type") || "meter" === t || "output" === t || "progress" === t || "select" === t || "textarea" === t
      }

      function S(e) {
        if (O(e)) return e;
        var t = null;
        return e.childNodes.forEach((function(e) {
          if (null === t && y(e)) {
            var r = S(e);
            null !== r && (t = r)
          }
        })), t
      }

      function j(e) {
        if (void 0 !== e.control) return e.control;
        var t = e.getAttribute("for");
        return null !== t ? e.ownerDocument.getElementById(t) : S(e)
      }

      function R(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = new d,
          n = function(e) {
            var t = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
            if (null === t) throw new TypeError("no window available");
            return t
          }(e),
          o = t.compute,
          a = void 0 === o ? "name" : o,
          i = t.computedStyleSupportsPseudoElements,
          u = void 0 === i ? void 0 !== t.getComputedStyle : i,
          s = t.getComputedStyle,
          c = void 0 === s ? n.getComputedStyle.bind(n) : s,
          f = t.hidden,
          b = void 0 !== f && f;

        function m(e, t) {
          var r, n, o = "";
          if (y(e) && u) {
            var a = x(c(e, "::before"));
            o = "".concat(a, " ").concat(o)
          }
          if ((function(e) {
              return y(e) && "slot" === p(e)
            }(e) ? 0 === (n = (r = e).assignedNodes()).length ? l(r.childNodes) : n : l(e.childNodes).concat(P(e, "aria-owns"))).forEach((function(e) {
              var r = R(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                }),
                n = "inline" !== (y(e) ? c(e).getPropertyValue("display") : "inline") ? " " : "";
              o += "".concat(n).concat(r).concat(n)
            })), y(e) && u) {
            var i = x(c(e, "::after"));
            o = "".concat(o, " ").concat(i)
          }
          return o.trim()
        }

        function S(e, t) {
          var n = e.getAttributeNode(t);
          return null === n || r.has(n) || "" === n.value.trim() ? null : (r.add(n), n.value)
        }

        function R(e, t) {
          if (r.has(e)) return "";
          if (!b && function(e, t) {
              if (!y(e)) return !1;
              if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
              var r = t(e);
              return "none" === r.getPropertyValue("display") || "hidden" === r.getPropertyValue("visibility")
            }(e, c) && !t.isReferenced) return r.add(e), "";
          var n = y(e) ? e.getAttributeNode("aria-labelledby") : null,
            o = null === n || r.has(n) ? [] : P(e, "aria-labelledby");
          if ("name" === a && !t.isReferenced && o.length > 0) return r.add(n), o.map((function(e) {
            return R(e, {
              isEmbeddedInLabel: t.isEmbeddedInLabel,
              isReferenced: !0,
              recursion: !1
            })
          })).join(" ");
          var i, u = t.recursion && (C(i = e, ["button", "combobox", "listbox", "textbox"]) || E(i, "range")) && "name" === a;
          if (!u) {
            var s = (y(e) && e.getAttribute("aria-label") || "").trim();
            if ("" !== s && "name" === a) return r.add(e), s;
            if (! function(e) {
                return C(e, ["none", "presentation"])
              }(e)) {
              var d = function(e) {
                if (!y(e)) return null;
                if (function(e) {
                    return y(e) && "fieldset" === p(e)
                  }(e)) {
                  r.add(e);
                  for (var t = l(e.childNodes), n = 0; n < t.length; n += 1) {
                    var o = t[n];
                    if (g(o)) return R(o, {
                      isEmbeddedInLabel: !1,
                      isReferenced: !1,
                      recursion: !1
                    })
                  }
                } else if (function(e) {
                    return y(e) && "table" === p(e)
                  }(e)) {
                  r.add(e);
                  for (var a = l(e.childNodes), i = 0; i < a.length; i += 1) {
                    var u = a[i];
                    if (v(u)) return R(u, {
                      isEmbeddedInLabel: !1,
                      isReferenced: !1,
                      recursion: !1
                    })
                  }
                } else {
                  if (function(e) {
                      return y(e) && "svg" === p(e)
                    }(e)) {
                    r.add(e);
                    for (var s = l(e.childNodes), c = 0; c < s.length; c += 1) {
                      var d = s[c];
                      if (w(d)) return d.textContent
                    }
                    return null
                  }
                  if ("img" === p(e) || "area" === p(e)) {
                    var f = S(e, "alt");
                    if (null !== f) return f
                  } else if (function(e) {
                      return y(e) && "optgroup" === p(e)
                    }(e)) {
                    var b = S(e, "label");
                    if (null !== b) return b
                  }
                }
                if (h(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
                  var P = S(e, "value");
                  if (null !== P) return P;
                  if ("submit" === e.type) return "Submit";
                  if ("reset" === e.type) return "Reset"
                }
                var E, q, x = null === (q = (E = e).labels) ? q : void 0 !== q ? l(q) : O(E) ? l(E.ownerDocument.querySelectorAll("label")).filter((function(e) {
                  return j(e) === E
                })) : null;
                if (null !== x && 0 !== x.length) return r.add(e), l(x).map((function(e) {
                  return R(e, {
                    isEmbeddedInLabel: !0,
                    isReferenced: !1,
                    recursion: !0
                  })
                })).filter((function(e) {
                  return e.length > 0
                })).join(" ");
                if (h(e) && "image" === e.type) {
                  var _ = S(e, "alt");
                  if (null !== _) return _;
                  var A = S(e, "title");
                  return null !== A ? A : "Submit Query"
                }
                if (C(e, ["button"])) {
                  var T = m(e, {
                    isEmbeddedInLabel: !1,
                    isReferenced: !1
                  });
                  if ("" !== T) return T
                }
                return null
              }(e);
              if (null !== d) return r.add(e), d
            }
          }
          if (C(e, ["menu"])) return r.add(e), "";
          if (u || t.isEmbeddedInLabel || t.isReferenced) {
            if (C(e, ["combobox", "listbox"])) {
              r.add(e);
              var f = function(e) {
                return y(t = e) && "select" === p(t) ? e.selectedOptions || q(e, "[selected]") : q(e, '[aria-selected="true"]');
                var t
              }(e);
              return 0 === f.length ? h(e) ? e.value : "" : l(f).map((function(e) {
                return R(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                })
              })).join(" ")
            }
            if (E(e, "range")) return r.add(e), e.hasAttribute("aria-valuetext") ? e.getAttribute("aria-valuetext") : e.hasAttribute("aria-valuenow") ? e.getAttribute("aria-valuenow") : e.getAttribute("value") || "";
            if (C(e, ["textbox"])) return r.add(e),
              function(e) {
                return h(e) || y(t = e) && "textarea" === p(t) ? e.value : e.textContent || "";
                var t
              }(e)
          }
          if (function(e) {
              return C(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"])
            }(e) || y(e) && t.isReferenced || function(e) {
              return v(e)
            }(e)) {
            var x = m(e, {
              isEmbeddedInLabel: t.isEmbeddedInLabel,
              isReferenced: !1
            });
            if ("" !== x) return r.add(e), x
          }
          if (e.nodeType === e.TEXT_NODE) return r.add(e), e.textContent || "";
          if (t.recursion) return r.add(e), m(e, {
            isEmbeddedInLabel: t.isEmbeddedInLabel,
            isReferenced: !1
          });
          var _ = function(e) {
            return y(e) ? S(e, "title") : null
          }(e);
          return null !== _ ? (r.add(e), _) : (r.add(e), "")
        }
        return R(e, {
          isEmbeddedInLabel: !1,
          isReferenced: "description" === a,
          recursion: !1
        }).trim().replace(/\s\s+/g, " ")
      }

      function _(e) {
        return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, _(e)
      }

      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? A(Object(r), !0).forEach((function(t) {
            M(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function M(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" !== _(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" !== _(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === _(t) ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function I(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = P(e, "aria-describedby").map((function(e) {
            return R(e, T(T({}, t), {}, {
              compute: "description"
            }))
          })).join(" ");
        if ("" === r) {
          var n = e.getAttribute("title");
          r = null === n ? "" : n
        }
        return r
      }

      function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return C(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]) ? "" : R(e, t)
      }
      var N = r(5661),
        F = r(74581),
        B = r.n(F);
      e = r.hmd(e);
      var L = r(18113);

      function U(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      const D = (e, t, r, n, o, a, i) => {
          const l = n + r.indent,
            u = r.colors;
          return e.map((e => {
            const s = t[e];
            let c = i(s, r, l, o, a);
            return "string" != typeof s && (-1 !== c.indexOf("\n") && (c = r.spacingOuter + l + c + r.spacingOuter + n), c = "{" + c + "}"), r.spacingInner + n + u.prop.open + e + u.prop.close + "=" + u.value.open + c + u.value.close
          })).join("")
        },
        H = (e, t, r, n, o, a) => e.map((e => {
          const i = "string" == typeof e ? $(e, t) : a(e, t, r, n, o);
          return "" === i && "object" == typeof e && null !== e && 3 !== e.nodeType ? "" : t.spacingOuter + r + i
        })).join(""),
        $ = (e, t) => {
          const r = t.colors.content;
          return r.open + U(e) + r.close
        },
        W = (e, t) => {
          const r = t.colors.comment;
          return r.open + "\x3c!--" + U(e) + "--\x3e" + r.close
        },
        z = (e, t, r, n, o) => {
          const a = n.colors.tag;
          return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close
        },
        V = (e, t) => {
          const r = t.colors.tag;
          return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close
        },
        G = 3,
        K = 8,
        X = 11,
        Y = /^((HTML|SVG)\w*)?Element$/,
        J = e => {
          const t = e.constructor.name,
            {
              nodeType: r,
              tagName: n
            } = e,
            o = "string" == typeof n && n.includes("-") || "function" == typeof e.hasAttribute && e.hasAttribute("is");
          return 1 === r && (Y.test(t) || o) || r === G && "Text" === t || r === K && "Comment" === t || r === X && "DocumentFragment" === t
        };

      function Z(e) {
        return e.nodeType === X
      }

      function Q(e) {
        return {
          test: e => {
            var t;
            return (null == e || null == (t = e.constructor) ? void 0 : t.name) && J(e)
          },
          serialize: (t, r, n, o, a, i) => {
            if (function(e) {
                return e.nodeType === G
              }(t)) return $(t.data, r);
            if (function(e) {
                return e.nodeType === K
              }(t)) return W(t.data, r);
            const l = Z(t) ? "DocumentFragment" : t.tagName.toLowerCase();
            return ++o > r.maxDepth ? V(l, r) : z(l, D(Z(t) ? [] : Array.from(t.attributes).map((e => e.name)).sort(), Z(t) ? {} : Array.from(t.attributes).reduce(((e, t) => (e[t.name] = t.value, e)), {}), r, n + r.indent, o, a, i), H(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n)
          }
        }
      }
      let ee = null,
        te = null,
        re = null;
      try {
        const t = e && e.require;
        te = t.call(e, "fs").readFileSync, re = t.call(e, "@babel/code-frame").codeFrameColumns, ee = t.call(e, "chalk")
      } catch {}
      const ne = 3;

      function oe() {
        return "undefined" != typeof jest && null !== jest && (!0 === setTimeout._isMockFunction || Object.prototype.hasOwnProperty.call(setTimeout, "clock"))
      }

      function ae() {
        if ("undefined" == typeof window) throw new Error("Could not find default container");
        return window.document
      }

      function ie(e) {
        if (e.defaultView) return e.defaultView;
        if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
        if (e.window) return e.window;
        throw e.ownerDocument && null === e.ownerDocument.defaultView ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : "function" == typeof e.debug && "function" == typeof e.logTestingPlaygroundURL ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".")
      }

      function le(e) {
        if (!e || "function" != typeof e.querySelector || "function" != typeof e.querySelectorAll) throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + (("object" == typeof(t = e) ? null === t ? "null" : t.constructor.name : typeof t) + "."));
        var t
      }
      const ue = () => {
          let e;
          try {
            var t;
            e = JSON.parse(null == (t = L) || null == (t = t.env) ? void 0 : t.COLORS)
          } catch (e) {}
          return "boolean" == typeof e ? e : void 0 !== L && void 0 !== L.versions && void 0 !== L.versions.node
        },
        {
          DOMCollection: se
        } = n.Nx,
        ce = 1,
        de = 8;

      function pe(e) {
        return e.nodeType !== de && (e.nodeType !== ce || !e.matches(ve().defaultIgnore))
      }

      function fe(e, t, r) {
        if (void 0 === r && (r = {}), e || (e = ae().body), "number" != typeof t && (t = void 0 !== L && L.env.DEBUG_PRINT_LIMIT || 7e3), 0 === t) return "";
        e.documentElement && (e = e.documentElement);
        let o = typeof e;
        if ("object" === o ? o = e.constructor.name : e = {}, !("outerHTML" in e)) throw new TypeError("Expected an element or document but got " + o);
        const {
          filterNode: a = pe,
          ...i
        } = r, l = n.GP(e, {
          plugins: [Q(a), se],
          printFunctionName: !1,
          highlight: ue(),
          ...i
        });
        return void 0 !== t && e.outerHTML.length > t ? l.slice(0, t) + "..." : l
      }
      const be = function() {
        const e = te && re ? function(e) {
          const t = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            n = e.slice(t, r),
            o = n.split(":"),
            [a, i, l] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
          let u = "";
          try {
            u = te(a, "utf-8")
          } catch {
            return ""
          }
          const s = re(u, {
            start: {
              line: i,
              column: l
            }
          }, {
            highlightCode: !0,
            linesBelow: 0
          });
          return ee.dim(n) + "\n" + s + "\n"
        }((new Error).stack.split("\n").slice(1).find((e => !e.includes("node_modules/")))) : "";
        e ? console.log(fe(...arguments) + "\n\n" + e) : console.log(fe(...arguments))
      };
      let me = {
        testIdAttribute: "data-testid",
        asyncUtilTimeout: 1e3,
        asyncWrapper: e => e(),
        unstable_advanceTimersWrapper: e => e(),
        eventWrapper: e => e(),
        defaultHidden: !1,
        defaultIgnore: "script, style",
        showOriginalStackTrace: !1,
        throwSuggestions: !1,
        getElementError(e, t) {
          const r = fe(t),
            n = new Error([e, "Ignored nodes: comments, " + me.defaultIgnore + "\n" + r].filter(Boolean).join("\n\n"));
          return n.name = "TestingLibraryElementError", n
        },
        _disableExpensiveErrorDiagnostics: !1,
        computedStyleSupportsPseudoElements: !1
      };

      function ye(e) {
        "function" == typeof e && (e = e(me)), me = {
          ...me,
          ...e
        }
      }

      function ve() {
        return me
      }
      const he = ["button", "meter", "output", "progress", "select", "textarea", "input"];

      function ge(e) {
        return he.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === ne ? e.textContent : Array.from(e.childNodes).map((e => ge(e))).join("")
      }

      function we(e) {
        let t;
        return t = "label" === e.tagName.toLowerCase() ? ge(e) : e.value || e.textContent, t
      }

      function Pe(e) {
        var t;
        if (void 0 !== e.labels) return null != (t = e.labels) ? t : [];
        if (! function(e) {
            return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || "INPUT" === e.tagName && "hidden" !== e.getAttribute("type")
          }(e)) return [];
        const r = e.ownerDocument.querySelectorAll("label");
        return Array.from(r).filter((t => t.control === e))
      }

      function Ce(e, t, r) {
        let {
          selector: n = "*"
        } = void 0 === r ? {} : r;
        const o = t.getAttribute("aria-labelledby"),
          a = o ? o.split(" ") : [];
        return a.length ? a.map((t => {
          const r = e.querySelector('[id="' + t + '"]');
          return r ? {
            content: we(r),
            formControl: null
          } : {
            content: "",
            formControl: null
          }
        })) : Array.from(Pe(t)).map((e => ({
          content: we(e),
          formControl: Array.from(e.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((e => e.matches(n)))[0]
        })))
      }

      function Ee(e) {
        if (null == e) throw new Error("It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?")
      }

      function qe(e, t, r, n) {
        if ("string" != typeof e) return !1;
        Ee(r);
        const o = n(e);
        return "string" == typeof r || "number" == typeof r ? o.toLowerCase().includes(r.toString().toLowerCase()) : "function" == typeof r ? r(o, t) : je(r, o)
      }

      function xe(e, t, r, n) {
        if ("string" != typeof e) return !1;
        Ee(r);
        const o = n(e);
        return r instanceof Function ? r(o, t) : r instanceof RegExp ? je(r, o) : o === String(r)
      }

      function Oe(e) {
        let {
          trim: t = !0,
          collapseWhitespace: r = !0
        } = void 0 === e ? {} : e;
        return e => {
          let n = e;
          return n = t ? n.trim() : n, n = r ? n.replace(/\s+/g, " ") : n, n
        }
      }

      function Se(e) {
        let {
          trim: t,
          collapseWhitespace: r,
          normalizer: n
        } = e;
        if (!n) return Oe({
          trim: t,
          collapseWhitespace: r
        });
        if (void 0 !== t || void 0 !== r) throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
        return n
      }

      function je(e, t) {
        const r = e.test(t);
        return e.global && 0 !== e.lastIndex && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r
      }

      function Re(e) {
        return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((e => e.nodeType === ne && Boolean(e.textContent))).map((e => e.textContent)).join("")
      }
      const _e = function(e) {
        function t(e) {
          let {
            attributes: t = []
          } = e;
          return t.length
        }

        function r(e) {
          let {
            attributes: t = []
          } = e;
          const r = t.findIndex((e => e.value && "type" === e.name && "text" === e.value));
          r >= 0 && (t = [...t.slice(0, r), ...t.slice(r + 1)]);
          const n = function(e) {
            let {
              name: t,
              attributes: r
            } = e;
            return "" + t + r.map((e => {
              let {
                name: t,
                value: r,
                constraints: n = []
              } = e;
              return -1 !== n.indexOf("undefined") ? ":not([" + t + "])" : r ? "[" + t + '="' + r + '"]' : "[" + t + "]"
            })).join("")
          }({
            ...e,
            attributes: t
          });
          return e => !(r >= 0 && "text" !== e.type) && e.matches(n)
        }
        let n = [];
        for (const [o, a] of e.entries()) n = [...n, {
          match: r(o),
          roles: Array.from(a),
          specificity: t(o)
        }];
        return n.sort((function(e, t) {
          let {
            specificity: r
          } = e, {
            specificity: n
          } = t;
          return n - r
        }))
      }(N._s);

      function Ae(e) {
        return !0 === e.hidden || ("true" === e.getAttribute("aria-hidden") || "none" === e.ownerDocument.defaultView.getComputedStyle(e).display)
      }

      function Te(e, t) {
        void 0 === t && (t = {});
        const {
          isSubtreeInaccessible: r = Ae
        } = t;
        if ("hidden" === e.ownerDocument.defaultView.getComputedStyle(e).visibility) return !0;
        let n = e;
        for (; n;) {
          if (r(n)) return !0;
          n = n.parentElement
        }
        return !1
      }

      function Me(e) {
        for (const {
            match: t,
            roles: r
          }
          of _e)
          if (t(e)) return [...r];
        return []
      }

      function Ie(e, t) {
        const r = e.getAttribute(t);
        return "true" === r || "false" !== r && void 0
      }
      const ke = Oe();

      function Ne(e) {
        return new RegExp(function(e) {
          return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }(e.toLowerCase()), "i")
      }

      function Fe(e, t, r, n) {
        let {
          variant: o,
          name: a
        } = n, i = "";
        const l = {},
          u = [
            ["Role", "TestId"].includes(e) ? r : Ne(r)
          ];
        a && (l.name = Ne(a)), "Role" === e && Te(t) && (l.hidden = !0, i = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    "), Object.keys(l).length > 0 && u.push(l);
        const s = o + "By" + e;
        return {
          queryName: e,
          queryMethod: s,
          queryArgs: u,
          variant: o,
          warning: i,
          toString() {
            i && console.warn(i);
            let [e, t] = u;
            return e = "string" == typeof e ? "'" + e + "'" : e, t = t ? ", { " + Object.entries(t).map((e => {
              let [t, r] = e;
              return t + ": " + r
            })).join(", ") + " }" : "", s + "(" + e + t + ")"
          }
        }
      }

      function Be(e, t, r) {
        return r && (!t || t.toLowerCase() === e.toLowerCase())
      }

      function Le(e, t, r) {
        var n, o;
        if (void 0 === t && (t = "get"), e.matches(ve().defaultIgnore)) return;
        const a = null != (n = e.getAttribute("role")) ? n : null == (o = Me(e)) ? void 0 : o[0];
        if ("generic" !== a && Be("Role", r, a)) return Fe("Role", e, a, {
          variant: t,
          name: k(e, {
            computedStyleSupportsPseudoElements: ve().computedStyleSupportsPseudoElements
          })
        });
        const i = Ce(document, e).map((e => e.content)).join(" ");
        if (Be("LabelText", r, i)) return Fe("LabelText", e, i, {
          variant: t
        });
        const l = e.getAttribute("placeholder");
        if (Be("PlaceholderText", r, l)) return Fe("PlaceholderText", e, l, {
          variant: t
        });
        const u = ke(Re(e));
        if (Be("Text", r, u)) return Fe("Text", e, u, {
          variant: t
        });
        if (Be("DisplayValue", r, e.value)) return Fe("DisplayValue", e, ke(e.value), {
          variant: t
        });
        const s = e.getAttribute("alt");
        if (Be("AltText", r, s)) return Fe("AltText", e, s, {
          variant: t
        });
        const c = e.getAttribute("title");
        if (Be("Title", r, c)) return Fe("Title", e, c, {
          variant: t
        });
        const d = e.getAttribute(ve().testIdAttribute);
        return Be("TestId", r, d) ? Fe("TestId", e, d, {
          variant: t
        }) : void 0
      }

      function Ue(e, t) {
        e.stack = t.stack.replace(t.message, e.message)
      }

      function De(e, t) {
        const r = new Error("STACK_TRACE_MESSAGE");
        return ve().asyncWrapper((() => function(e, t) {
          let {
            container: r = ae(),
            timeout: n = ve().asyncUtilTimeout,
            showOriginalStackTrace: o = ve().showOriginalStackTrace,
            stackTraceError: a,
            interval: i = 50,
            onTimeout: l = (e => (Object.defineProperty(e, "message", {
              value: ve().getElementError(e.message, r).message
            }), e)),
            mutationObserverOptions: u = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              characterData: !0
            }
          } = t;
          if ("function" != typeof e) throw new TypeError("Received `callback` arg must be a function");
          return new Promise((async (t, s) => {
            let c, d, p, f = !1,
              b = "idle";
            const m = setTimeout((function() {
                let e;
                c ? (e = c, o || "TestingLibraryElementError" !== e.name || Ue(e, a)) : (e = new Error("Timed out in waitFor."), o || Ue(e, a)), v(l(e), null)
              }), n),
              y = oe();
            if (y) {
              const {
                unstable_advanceTimersWrapper: e
              } = ve();
              for (g(); !f;) {
                if (!oe()) {
                  const e = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                  return o || Ue(e, a), void s(e)
                }
                if (await e((async () => {
                    jest.advanceTimersByTime(i)
                  })), g(), f) break
              }
            } else {
              try {
                le(r)
              } catch (e) {
                return void s(e)
              }
              d = setInterval(h, i);
              const {
                MutationObserver: e
              } = ie(r);
              p = new e(h), p.observe(r, u), g()
            }

            function v(e, r) {
              f = !0, clearTimeout(m), y || (clearInterval(d), p.disconnect()), e ? s(e) : t(r)
            }

            function h() {
              if (oe()) {
                const e = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                return o || Ue(e, a), s(e)
              }
              return g()
            }

            function g() {
              if ("pending" !== b) try {
                const t = function(e) {
                  try {
                    return me._disableExpensiveErrorDiagnostics = !0, e()
                  } finally {
                    me._disableExpensiveErrorDiagnostics = !1
                  }
                }(e);
                "function" == typeof(null == t ? void 0 : t.then) ? (b = "pending", t.then((e => {
                  b = "resolved", v(null, e)
                }), (e => {
                  b = "rejected", c = e
                }))) : v(null, t)
              } catch (e) {
                c = e
              }
            }
          }))
        }(e, {
          stackTraceError: r,
          ...t
        })))
      }

      function He(e, t) {
        return ve().getElementError(e, t)
      }

      function $e(e, t, r, n) {
        let {
          exact: o = !0,
          collapseWhitespace: a,
          trim: i,
          normalizer: l
        } = void 0 === n ? {} : n;
        const u = o ? xe : qe,
          s = Se({
            collapseWhitespace: a,
            trim: i,
            normalizer: l
          });
        return Array.from(t.querySelectorAll("[" + e + "]")).filter((t => u(t.getAttribute(e), t, r, s)))
      }

      function We(e, t) {
        return function(r) {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
          const i = e(r, ...o);
          if (i.length > 1) {
            const e = i.map((e => He(null, e).message)).join("\n\n");
            throw function(e, t) {
              return He(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t)
            }(t(r, ...o) + "\n\nHere are the matching elements:\n\n" + e, r)
          }
          return i[0] || null
        }
      }

      function ze(e, t) {
        return ve().getElementError("A better query is available, try this:\n" + e.toString() + "\n", t)
      }

      function Ve(e) {
        return (t, r, n, o) => De((() => e(t, r, n)), {
          container: t,
          ...o
        })
      }
      const Ge = (e, t, r) => function(n) {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
          const l = e(n, ...a),
            [{
              suggest: u = ve().throwSuggestions
            } = {}] = a.slice(-1);
          if (l && u) {
            const e = Le(l, r);
            if (e && !t.endsWith(e.queryName)) throw ze(e.toString(), n)
          }
          return l
        },
        Ke = (e, t, r) => function(n) {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
          const l = e(n, ...a),
            [{
              suggest: u = ve().throwSuggestions
            } = {}] = a.slice(-1);
          if (l.length && u) {
            const e = [...new Set(l.map((e => {
              var t;
              return null == (t = Le(e, r)) ? void 0 : t.toString()
            })))];
            if (1 === e.length && !t.endsWith(Le(l[0], r).queryName)) throw ze(e[0], n)
          }
          return l
        };

      function Xe(e, t, r) {
        const n = Ge(We(e, t), e.name, "query"),
          o = function(e, t) {
            return function(r) {
              for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
              const i = e(r, ...o);
              if (!i.length) throw ve().getElementError(t(r, ...o), r);
              return i
            }
          }(e, r),
          a = We(o, t),
          i = Ge(a, e.name, "get");
        return [n, Ke(o, e.name.replace("query", "get"), "getAll"), i, Ve(Ke(o, e.name, "findAll")), Ve(Ge(a, e.name, "find"))]
      }
      const Ye = function(e, t, r) {
          let {
            selector: n = "*",
            exact: o = !0,
            collapseWhitespace: a,
            trim: i,
            normalizer: l
          } = void 0 === r ? {} : r;
          le(e);
          const u = o ? xe : qe,
            s = Se({
              collapseWhitespace: a,
              trim: i,
              normalizer: l
            }),
            c = Array.from(e.querySelectorAll("*")).filter((e => Pe(e).length || e.hasAttribute("aria-labelledby"))).reduce(((r, o) => {
              const a = Ce(e, o, {
                selector: n
              });
              a.filter((e => Boolean(e.formControl))).forEach((e => {
                u(e.content, e.formControl, t, s) && e.formControl && r.push(e.formControl)
              }));
              const i = a.filter((e => Boolean(e.content))).map((e => e.content));
              return u(i.join(" "), o, t, s) && r.push(o), i.length > 1 && i.forEach(((e, n) => {
                u(e, o, t, s) && r.push(o);
                const a = [...i];
                a.splice(n, 1), a.length > 1 && u(a.join(" "), o, t, s) && r.push(o)
              })), r
            }), []).concat($e("aria-label", e, t, {
              exact: o,
              normalizer: s
            }));
          return Array.from(new Set(c)).filter((e => e.matches(n)))
        },
        Je = function(e, t) {
          for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
          const a = Ye(e, t, ...n);
          if (!a.length) {
            const r = function(e, t, r) {
              let {
                exact: n = !0,
                trim: o,
                collapseWhitespace: a,
                normalizer: i
              } = void 0 === r ? {} : r;
              const l = n ? xe : qe,
                u = Se({
                  collapseWhitespace: a,
                  trim: o,
                  normalizer: i
                }),
                s = function(e) {
                  return Array.from(e.querySelectorAll("label,input")).map((e => ({
                    node: e,
                    textToMatch: we(e)
                  }))).filter((e => {
                    let {
                      textToMatch: t
                    } = e;
                    return null !== t
                  }))
                }(e);
              return s.filter((e => {
                let {
                  node: r,
                  textToMatch: n
                } = e;
                return l(n, r, t, u)
              })).map((e => {
                let {
                  node: t
                } = e;
                return t
              }))
            }(e, t, ...n);
            if (r.length) {
              const n = r.map((t => function(e, t) {
                const r = t.getAttribute("for");
                if (!r) return null;
                const n = e.querySelector('[id="' + r + '"]');
                return n ? n.tagName.toLowerCase() : null
              }(e, t))).filter((e => !!e));
              throw n.length ? ve().getElementError(n.map((e => "Found a label with the text of: " + t + ", however the element associated with this label (<" + e + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + e + " />, you can use aria-label or aria-labelledby instead.")).join("\n\n"), e) : ve().getElementError("Found a label with the text of: " + t + ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.', e)
            }
            throw ve().getElementError("Unable to find a label with the text of: " + t, e)
          }
          return a
        },
        Ze = (e, t) => "Found multiple elements with the text of: " + t,
        Qe = Ge(We(Ye, Ze), Ye.name, "query"),
        et = We(Je, Ze),
        tt = Ve(Ke(Je, Je.name, "findAll")),
        rt = Ve(Ge(et, Je.name, "find")),
        nt = Ke(Je, Je.name, "getAll"),
        ot = Ge(et, Je.name, "get"),
        at = Ke(Ye, Ye.name, "queryAll"),
        it = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return le(t[0]), $e("placeholder", ...t)
        },
        lt = Ke(it, it.name, "queryAll"),
        [ut, st, ct, dt, pt] = Xe(it, ((e, t) => "Found multiple elements with the placeholder text of: " + t), ((e, t) => "Unable to find an element with the placeholder text of: " + t)),
        ft = function(e, t, r) {
          let {
            selector: n = "*",
            exact: o = !0,
            collapseWhitespace: a,
            trim: i,
            ignore: l = ve().defaultIgnore,
            normalizer: u
          } = void 0 === r ? {} : r;
          le(e);
          const s = o ? xe : qe,
            c = Se({
              collapseWhitespace: a,
              trim: i,
              normalizer: u
            });
          let d = [];
          return "function" == typeof e.matches && e.matches(n) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(n))].filter((e => !l || !e.matches(l))).filter((e => s(Re(e), e, t, c)))
        },
        bt = Ke(ft, ft.name, "queryAll"),
        [mt, yt, vt, ht, gt] = Xe(ft, ((e, t) => "Found multiple elements with the text: " + t), (function(e, t, r) {
          void 0 === r && (r = {});
          const {
            collapseWhitespace: n,
            trim: o,
            normalizer: a,
            selector: i
          } = r, l = Se({
            collapseWhitespace: n,
            trim: o,
            normalizer: a
          })(t.toString());
          return "Unable to find an element with the text: " + (l !== t.toString() ? l + " (normalized from '" + t + "')" : t) + ("*" !== (null != i ? i : "*") ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
        })),
        wt = function(e, t, r) {
          let {
            exact: n = !0,
            collapseWhitespace: o,
            trim: a,
            normalizer: i
          } = void 0 === r ? {} : r;
          le(e);
          const l = n ? xe : qe,
            u = Se({
              collapseWhitespace: o,
              trim: a,
              normalizer: i
            });
          return Array.from(e.querySelectorAll("input,textarea,select")).filter((e => "SELECT" === e.tagName ? Array.from(e.options).filter((e => e.selected)).some((e => l(Re(e), e, t, u))) : l(e.value, e, t, u)))
        },
        Pt = Ke(wt, wt.name, "queryAll"),
        [Ct, Et, qt, xt, Ot] = Xe(wt, ((e, t) => "Found multiple elements with the display value: " + t + "."), ((e, t) => "Unable to find an element with the display value: " + t + ".")),
        St = /^(img|input|area|.+-.+)$/i,
        jt = function(e, t, r) {
          return void 0 === r && (r = {}), le(e), $e("alt", e, t, r).filter((e => St.test(e.tagName)))
        },
        Rt = Ke(jt, jt.name, "queryAll"),
        [_t, At, Tt, Mt, It] = Xe(jt, ((e, t) => "Found multiple elements with the alt text: " + t), ((e, t) => "Unable to find an element with the alt text: " + t)),
        kt = function(e, t, r) {
          let {
            exact: n = !0,
            collapseWhitespace: o,
            trim: a,
            normalizer: i
          } = void 0 === r ? {} : r;
          le(e);
          const l = n ? xe : qe,
            u = Se({
              collapseWhitespace: o,
              trim: a,
              normalizer: i
            });
          return Array.from(e.querySelectorAll("[title], svg > title")).filter((e => l(e.getAttribute("title"), e, t, u) || (e => {
            var t;
            return "title" === e.tagName.toLowerCase() && "svg" === (null == (t = e.parentElement) ? void 0 : t.tagName.toLowerCase())
          })(e) && l(Re(e), e, t, u)))
        },
        Nt = Ke(kt, kt.name, "queryAll"),
        [Ft, Bt, Lt, Ut, Dt] = Xe(kt, ((e, t) => "Found multiple elements with the title: " + t + "."), ((e, t) => "Unable to find an element with the title: " + t + ".")),
        Ht = function(e, t, r) {
          let {
            hidden: n = ve().defaultHidden,
            name: o,
            description: a,
            queryFallbacks: i = !1,
            selected: l,
            busy: u,
            checked: s,
            pressed: c,
            current: d,
            level: p,
            expanded: f,
            value: {
              now: b,
              min: m,
              max: y,
              text: v
            } = {}
          } = void 0 === r ? {} : r;
          var h, g, w, P, C, E, q, x, O, S;
          if (le(e), void 0 !== l && void 0 === (null == (h = N.Ot.get(t)) ? void 0 : h.props["aria-selected"])) throw new Error('"aria-selected" is not supported on role "' + t + '".');
          if (void 0 !== u && void 0 === (null == (g = N.Ot.get(t)) ? void 0 : g.props["aria-busy"])) throw new Error('"aria-busy" is not supported on role "' + t + '".');
          if (void 0 !== s && void 0 === (null == (w = N.Ot.get(t)) ? void 0 : w.props["aria-checked"])) throw new Error('"aria-checked" is not supported on role "' + t + '".');
          if (void 0 !== c && void 0 === (null == (P = N.Ot.get(t)) ? void 0 : P.props["aria-pressed"])) throw new Error('"aria-pressed" is not supported on role "' + t + '".');
          if (void 0 !== d && void 0 === (null == (C = N.Ot.get(t)) ? void 0 : C.props["aria-current"])) throw new Error('"aria-current" is not supported on role "' + t + '".');
          if (void 0 !== p && "heading" !== t) throw new Error('Role "' + t + '" cannot have "level" property.');
          if (void 0 !== b && void 0 === (null == (E = N.Ot.get(t)) ? void 0 : E.props["aria-valuenow"])) throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
          if (void 0 !== y && void 0 === (null == (q = N.Ot.get(t)) ? void 0 : q.props["aria-valuemax"])) throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
          if (void 0 !== m && void 0 === (null == (x = N.Ot.get(t)) ? void 0 : x.props["aria-valuemin"])) throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
          if (void 0 !== v && void 0 === (null == (O = N.Ot.get(t)) ? void 0 : O.props["aria-valuetext"])) throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
          if (void 0 !== f && void 0 === (null == (S = N.Ot.get(t)) ? void 0 : S.props["aria-expanded"])) throw new Error('"aria-expanded" is not supported on role "' + t + '".');
          const j = new WeakMap;

          function R(e) {
            return j.has(e) || j.set(e, Ae(e)), j.get(e)
          }
          return Array.from(e.querySelectorAll(function(e) {
            var t;
            const r = '*[role~="' + e + '"]',
              n = null != (t = N.wZ.get(e)) ? t : new Set,
              o = new Set(Array.from(n).map((e => {
                let {
                  name: t
                } = e;
                return t
              })));
            return [r].concat(Array.from(o)).join(",")
          }(t))).filter((e => {
            if (e.hasAttribute("role")) {
              const r = e.getAttribute("role");
              if (i) return r.split(" ").filter(Boolean).some((e => e === t));
              const [n] = r.split(" ");
              return n === t
            }
            return Me(e).some((e => e === t))
          })).filter((e => {
            if (void 0 !== l) return l === function(e) {
              return "OPTION" === e.tagName ? e.selected : Ie(e, "aria-selected")
            }(e);
            if (void 0 !== u) return u === function(e) {
              return "true" === e.getAttribute("aria-busy")
            }(e);
            if (void 0 !== s) return s === function(e) {
              if (!("indeterminate" in e) || !e.indeterminate) return "checked" in e ? e.checked : Ie(e, "aria-checked")
            }(e);
            if (void 0 !== c) return c === function(e) {
              return Ie(e, "aria-pressed")
            }(e);
            if (void 0 !== d) return d === function(e) {
              var t, r;
              return null != (t = null != (r = Ie(e, "aria-current")) ? r : e.getAttribute("aria-current")) && t
            }(e);
            if (void 0 !== f) return f === function(e) {
              return Ie(e, "aria-expanded")
            }(e);
            if (void 0 !== p) return p === function(e) {
              return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || {
                H1: 1,
                H2: 2,
                H3: 3,
                H4: 4,
                H5: 5,
                H6: 6
              } [e.tagName]
            }(e);
            if (void 0 !== b || void 0 !== y || void 0 !== m || void 0 !== v) {
              let r = !0;
              var t;
              return void 0 !== b && r && (r = b === function(e) {
                const t = e.getAttribute("aria-valuenow");
                return null === t ? void 0 : +t
              }(e)), void 0 !== y && r && (r = y === function(e) {
                const t = e.getAttribute("aria-valuemax");
                return null === t ? void 0 : +t
              }(e)), void 0 !== m && r && (r = m === function(e) {
                const t = e.getAttribute("aria-valuemin");
                return null === t ? void 0 : +t
              }(e)), void 0 !== v && r && (r = xe(null != (t = function(e) {
                const t = e.getAttribute("aria-valuetext");
                return null === t ? void 0 : t
              }(e)) ? t : null, e, v, (e => e))), r
            }
            return !0
          })).filter((e => void 0 === o || xe(k(e, {
            computedStyleSupportsPseudoElements: ve().computedStyleSupportsPseudoElements
          }), e, o, (e => e)))).filter((e => void 0 === a || xe(I(e, {
            computedStyleSupportsPseudoElements: ve().computedStyleSupportsPseudoElements
          }), e, a, (e => e)))).filter((e => !1 !== n || !1 === Te(e, {
            isSubtreeInaccessible: R
          })))
        },
        $t = e => {
          let t = "";
          return t = void 0 === e ? "" : "string" == typeof e ? ' and name "' + e + '"' : " and name `" + e + "`", t
        },
        Wt = Ke(Ht, Ht.name, "queryAll"),
        [zt, Vt, Gt, Kt, Xt] = Xe(Ht, (function(e, t, r) {
          let {
            name: n
          } = void 0 === r ? {} : r;
          return 'Found multiple elements with the role "' + t + '"' + $t(n)
        }), (function(e, t, r) {
          let {
            hidden: n = ve().defaultHidden,
            name: o,
            description: a
          } = void 0 === r ? {} : r;
          if (ve()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + $t(o);
          let i, l = "";
          Array.from(e.children).forEach((e => {
            l += function(e, t) {
              let {
                hidden: r,
                includeDescription: n
              } = t;
              const o = function(e, t) {
                let {
                  hidden: r = !1
                } = void 0 === t ? {} : t;
                return function e(t) {
                  return [t, ...Array.from(t.children).reduce(((t, r) => [...t, ...e(r)]), [])]
                }(e).filter((e => !1 !== r || !1 === Te(e))).reduce(((e, t) => {
                  let r = [];
                  return r = t.hasAttribute("role") ? t.getAttribute("role").split(" ").slice(0, 1) : Me(t), r.reduce(((e, r) => Array.isArray(e[r]) ? {
                    ...e,
                    [r]: [...e[r], t]
                  } : {
                    ...e,
                    [r]: [t]
                  }), e)
                }), {})
              }(e, {
                hidden: r
              });
              return Object.entries(o).filter((e => {
                let [t] = e;
                return "generic" !== t
              })).map((e => {
                let [t, r] = e;
                const o = "-".repeat(50);
                return t + ":\n\n" + r.map((e => {
                  const t = 'Name "' + k(e, {
                      computedStyleSupportsPseudoElements: ve().computedStyleSupportsPseudoElements
                    }) + '":\n',
                    r = fe(e.cloneNode(!1));
                  return n ? t + 'Description "' + I(e, {
                    computedStyleSupportsPseudoElements: ve().computedStyleSupportsPseudoElements
                  }) + '":\n' + r : "" + t + r
                })).join("\n\n") + "\n\n" + o
              })).join("\n")
            }(e, {
              hidden: n,
              includeDescription: void 0 !== a
            })
          })), i = 0 === l.length ? !1 === n ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : "There are no available roles." : ("\nHere are the " + (!1 === n ? "accessible" : "available") + " roles:\n\n  " + l.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") + "\n").trim();
          let u = "";
          u = void 0 === o ? "" : "string" == typeof o ? ' and name "' + o + '"' : " and name `" + o + "`";
          let s = "";
          return s = void 0 === a ? "" : "string" == typeof a ? ' and description "' + a + '"' : " and description `" + a + "`", ("\nUnable to find an " + (!1 === n ? "accessible " : "") + 'element with the role "' + t + '"' + u + s + "\n\n" + i).trim()
        })),
        Yt = () => ve().testIdAttribute,
        Jt = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return le(t[0]), $e(Yt(), ...t)
        },
        Zt = Ke(Jt, Jt.name, "queryAll"),
        [Qt, er, tr, rr, nr] = Xe(Jt, ((e, t) => "Found multiple elements by: [" + Yt() + '="' + t + '"]'), ((e, t) => "Unable to find an element by: [" + Yt() + '="' + t + '"]'));
      var or = Object.freeze({
        __proto__: null,
        queryAllByLabelText: at,
        queryByLabelText: Qe,
        getAllByLabelText: nt,
        getByLabelText: ot,
        findAllByLabelText: tt,
        findByLabelText: rt,
        queryByPlaceholderText: ut,
        queryAllByPlaceholderText: lt,
        getByPlaceholderText: ct,
        getAllByPlaceholderText: st,
        findAllByPlaceholderText: dt,
        findByPlaceholderText: pt,
        queryByText: mt,
        queryAllByText: bt,
        getByText: vt,
        getAllByText: yt,
        findAllByText: ht,
        findByText: gt,
        queryByDisplayValue: Ct,
        queryAllByDisplayValue: Pt,
        getByDisplayValue: qt,
        getAllByDisplayValue: Et,
        findAllByDisplayValue: xt,
        findByDisplayValue: Ot,
        queryByAltText: _t,
        queryAllByAltText: Rt,
        getByAltText: Tt,
        getAllByAltText: At,
        findAllByAltText: Mt,
        findByAltText: It,
        queryByTitle: Ft,
        queryAllByTitle: Nt,
        getByTitle: Lt,
        getAllByTitle: Bt,
        findAllByTitle: Ut,
        findByTitle: Dt,
        queryByRole: zt,
        queryAllByRole: Wt,
        getAllByRole: Vt,
        getByRole: Gt,
        findAllByRole: Kt,
        findByRole: Xt,
        queryByTestId: Qt,
        queryAllByTestId: Zt,
        getByTestId: tr,
        getAllByTestId: er,
        findAllByTestId: rr,
        findByTestId: nr
      });

      function ar(e, t, r) {
        return void 0 === t && (t = or), void 0 === r && (r = {}), Object.keys(t).reduce(((r, n) => {
          const o = t[n];
          return r[n] = o.bind(null, e), r
        }), r)
      }
      const ir = {
          copy: {
            EventType: "ClipboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          cut: {
            EventType: "ClipboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          paste: {
            EventType: "ClipboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          compositionEnd: {
            EventType: "CompositionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          compositionStart: {
            EventType: "CompositionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          compositionUpdate: {
            EventType: "CompositionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          keyDown: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0
            }
          },
          keyPress: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0
            }
          },
          keyUp: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0
            }
          },
          focus: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          blur: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          focusIn: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          focusOut: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          change: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          input: {
            EventType: "InputEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          invalid: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !0
            }
          },
          submit: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          reset: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          click: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              button: 0,
              composed: !0
            }
          },
          contextMenu: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dblClick: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          drag: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dragEnd: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          dragEnter: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dragExit: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          dragLeave: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          dragOver: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dragStart: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          drop: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseDown: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseEnter: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          mouseLeave: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          mouseMove: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseOut: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseOver: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseUp: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          select: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          touchCancel: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          touchEnd: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          touchMove: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          touchStart: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          resize: {
            EventType: "UIEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          scroll: {
            EventType: "UIEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          wheel: {
            EventType: "WheelEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          abort: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          canPlay: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          canPlayThrough: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          durationChange: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          emptied: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          encrypted: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          ended: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          loadedData: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          loadedMetadata: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          loadStart: {
            EventType: "ProgressEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          pause: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          play: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          playing: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          progress: {
            EventType: "ProgressEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          rateChange: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          seeked: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          seeking: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          stalled: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          suspend: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          timeUpdate: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          volumeChange: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          waiting: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          load: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          error: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          animationStart: {
            EventType: "AnimationEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          animationEnd: {
            EventType: "AnimationEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          animationIteration: {
            EventType: "AnimationEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          transitionCancel: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          transitionEnd: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          transitionRun: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          transitionStart: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          pointerOver: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerEnter: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          pointerDown: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerMove: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerUp: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerCancel: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          pointerOut: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerLeave: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          gotPointerCapture: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          lostPointerCapture: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          popState: {
            EventType: "PopStateEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          offline: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          online: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          }
        },
        lr = {
          doubleClick: "dblClick"
        };

      function ur(e, t) {
        return ve().eventWrapper((() => {
          if (!t) throw new Error("Unable to fire an event - please provide an event object.");
          if (!e) throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
          return e.dispatchEvent(t)
        }))
      }

      function sr(e, t, r, n) {
        let {
          EventType: o = "Event",
          defaultInit: a = {}
        } = void 0 === n ? {} : n;
        if (!t) throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
        const i = {
            ...a,
            ...r
          },
          {
            target: {
              value: l,
              files: u,
              ...s
            } = {}
          } = i;
        void 0 !== l && function(e, t) {
          const {
            set: r
          } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
            set: o
          } = Object.getOwnPropertyDescriptor(n, "value") || {};
          if (o && r !== o) o.call(e, t);
          else {
            if (!r) throw new Error("The given element does not have a value setter");
            r.call(e, t)
          }
        }(t, l), void 0 !== u && Object.defineProperty(t, "files", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: u
        }), Object.assign(t, s);
        const c = ie(t),
          d = c[o] || c.Event;
        let p;
        if ("function" == typeof d) p = new d(e, i);
        else {
          p = c.document.createEvent(o);
          const {
            bubbles: t,
            cancelable: r,
            detail: n,
            ...a
          } = i;
          p.initEvent(e, t, r, n), Object.keys(a).forEach((e => {
            p[e] = a[e]
          }))
        }
        return ["dataTransfer", "clipboardData"].forEach((e => {
          const t = i[e];
          "object" == typeof t && ("function" == typeof c.DataTransfer ? Object.defineProperty(p, e, {
            value: Object.getOwnPropertyNames(t).reduce(((e, r) => (Object.defineProperty(e, r, {
              value: t[r]
            }), e)), new c.DataTransfer)
          }) : Object.defineProperty(p, e, {
            value: t
          }))
        })), p
      }
      Object.keys(ir).forEach((e => {
        const {
          EventType: t,
          defaultInit: r
        } = ir[e], n = e.toLowerCase();
        sr[e] = (e, o) => sr(n, e, o, {
          EventType: t,
          defaultInit: r
        }), ur[e] = (t, r) => ur(t, sr[e](t, r))
      })), Object.keys(lr).forEach((e => {
        const t = lr[e];
        ur[e] = function() {
          return ur[t](...arguments)
        }
      }));
      const cr = {
          debug: (e, t, r) => Array.isArray(e) ? e.forEach((e => be(e, t, r))) : be(e, t, r),
          logTestingPlaygroundURL: function(e) {
            if (void 0 === e && (e = ae().body), !e || !("innerHTML" in e)) return void console.log("The element you're providing isn't a valid DOM element.");
            if (!e.innerHTML) return void console.log("The provided element doesn't have any children.");
            const t = (r = e.innerHTML, "https://testing-playground.com/#markup=" + (n = r, B().compressToEncodedURIComponent(n.replace(/[ \t]*[\n][ \t]*/g, "\n"))));
            var r, n;
            return console.log("Open this URL in your browser\n\n" + t), t
          }
        },
        dr = "undefined" != typeof document && document.body ? ar(document.body, or, cr) : Object.keys(or).reduce(((e, t) => (e[t] = () => {
          throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error")
        }, e)), cr)
    },
    84643: (e, t, r) => {
      "use strict";
      e = r.nmd(e);
      const n = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return t => `[${38+e};5;${t}m`
        },
        o = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return (t, r, n) => `[${38+e};2;${t};${r};${n}m`
        };
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        get: function() {
          const e = new Map,
            t = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                overline: [53, 55],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29]
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39]
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49]
              }
            };
          t.color.gray = t.color.blackBright, t.bgColor.bgGray = t.bgColor.bgBlackBright, t.color.grey = t.color.blackBright, t.bgColor.bgGrey = t.bgColor.bgBlackBright;
          for (const [r, n] of Object.entries(t)) {
            for (const [r, o] of Object.entries(n)) t[r] = {
              open: `[${o[0]}m`,
              close: `[${o[1]}m`
            }, n[r] = t[r], e.set(o[0], o[1]);
            Object.defineProperty(t, r, {
              value: n,
              enumerable: !1
            })
          }
          return Object.defineProperty(t, "codes", {
            value: e,
            enumerable: !1
          }), t.color.close = "[39m", t.bgColor.close = "[49m", t.color.ansi256 = n(), t.color.ansi16m = o(), t.bgColor.ansi256 = n(10), t.bgColor.ansi16m = o(10), Object.defineProperties(t, {
            rgbToAnsi256: {
              value: (e, t, r) => e === t && t === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(r / 255 * 5),
              enumerable: !1
            },
            hexToRgb: {
              value: e => {
                const t = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(e.toString(16));
                if (!t) return [0, 0, 0];
                let {
                  colorString: r
                } = t.groups;
                3 === r.length && (r = r.split("").map((e => e + e)).join(""));
                const n = Number.parseInt(r, 16);
                return [n >> 16 & 255, n >> 8 & 255, 255 & n]
              },
              enumerable: !1
            },
            hexToAnsi256: {
              value: e => t.rgbToAnsi256(...t.hexToRgb(e)),
              enumerable: !1
            }
          }), t
        }
      })
    },
    40200: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = (n = r(18984)) && n.__esModule ? n : {
        default: n
      };

      function a(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || i(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function i(e, t) {
        if (e) {
          if ("string" == typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
        }
      }

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var u = [
          ["aria-activedescendant", {
            type: "id"
          }],
          ["aria-atomic", {
            type: "boolean"
          }],
          ["aria-autocomplete", {
            type: "token",
            values: ["inline", "list", "both", "none"]
          }],
          ["aria-busy", {
            type: "boolean"
          }],
          ["aria-checked", {
            type: "tristate"
          }],
          ["aria-colcount", {
            type: "integer"
          }],
          ["aria-colindex", {
            type: "integer"
          }],
          ["aria-colspan", {
            type: "integer"
          }],
          ["aria-controls", {
            type: "idlist"
          }],
          ["aria-current", {
            type: "token",
            values: ["page", "step", "location", "date", "time", !0, !1]
          }],
          ["aria-describedby", {
            type: "idlist"
          }],
          ["aria-details", {
            type: "id"
          }],
          ["aria-disabled", {
            type: "boolean"
          }],
          ["aria-dropeffect", {
            type: "tokenlist",
            values: ["copy", "execute", "link", "move", "none", "popup"]
          }],
          ["aria-errormessage", {
            type: "id"
          }],
          ["aria-expanded", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-flowto", {
            type: "idlist"
          }],
          ["aria-grabbed", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-haspopup", {
            type: "token",
            values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
          }],
          ["aria-hidden", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-invalid", {
            type: "token",
            values: ["grammar", !1, "spelling", !0]
          }],
          ["aria-keyshortcuts", {
            type: "string"
          }],
          ["aria-label", {
            type: "string"
          }],
          ["aria-labelledby", {
            type: "idlist"
          }],
          ["aria-level", {
            type: "integer"
          }],
          ["aria-live", {
            type: "token",
            values: ["assertive", "off", "polite"]
          }],
          ["aria-modal", {
            type: "boolean"
          }],
          ["aria-multiline", {
            type: "boolean"
          }],
          ["aria-multiselectable", {
            type: "boolean"
          }],
          ["aria-orientation", {
            type: "token",
            values: ["vertical", "undefined", "horizontal"]
          }],
          ["aria-owns", {
            type: "idlist"
          }],
          ["aria-placeholder", {
            type: "string"
          }],
          ["aria-posinset", {
            type: "integer"
          }],
          ["aria-pressed", {
            type: "tristate"
          }],
          ["aria-readonly", {
            type: "boolean"
          }],
          ["aria-relevant", {
            type: "tokenlist",
            values: ["additions", "all", "removals", "text"]
          }],
          ["aria-required", {
            type: "boolean"
          }],
          ["aria-roledescription", {
            type: "string"
          }],
          ["aria-rowcount", {
            type: "integer"
          }],
          ["aria-rowindex", {
            type: "integer"
          }],
          ["aria-rowspan", {
            type: "integer"
          }],
          ["aria-selected", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-setsize", {
            type: "integer"
          }],
          ["aria-sort", {
            type: "token",
            values: ["ascending", "descending", "none", "other"]
          }],
          ["aria-valuemax", {
            type: "number"
          }],
          ["aria-valuemin", {
            type: "number"
          }],
          ["aria-valuenow", {
            type: "number"
          }],
          ["aria-valuetext", {
            type: "string"
          }]
        ],
        s = {
          entries: function() {
            return u
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                  if (Array.isArray(e) || (r = i(e))) {
                    r && (e = r);
                    var n = 0,
                      o = function() {};
                    return {
                      s: o,
                      n: function() {
                        return n >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[n++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: o
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, l = !0,
                  u = !1;
                return {
                  s: function() {
                    r = r.call(e)
                  },
                  n: function() {
                    var e = r.next();
                    return l = e.done, e
                  },
                  e: function(e) {
                    u = !0, a = e
                  },
                  f: function() {
                    try {
                      l || null == r.return || r.return()
                    } finally {
                      if (u) throw a
                    }
                  }
                }
              }(u);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = a(t.value, 2),
                  l = o[0],
                  s = o[1];
                e.call(r, s, l, u)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = u.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!s.get(e)
          },
          keys: function() {
            return u.map((function(e) {
              return a(e, 1)[0]
            }))
          },
          values: function() {
            return u.map((function(e) {
              return a(e, 2)[1]
            }))
          }
        },
        c = (0, o.default)(s, s.entries());
      t.default = c
    },
    51107: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = (n = r(18984)) && n.__esModule ? n : {
        default: n
      };

      function a(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || i(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function i(e, t) {
        if (e) {
          if ("string" == typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
        }
      }

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var u = [
          ["a", {
            reserved: !1
          }],
          ["abbr", {
            reserved: !1
          }],
          ["acronym", {
            reserved: !1
          }],
          ["address", {
            reserved: !1
          }],
          ["applet", {
            reserved: !1
          }],
          ["area", {
            reserved: !1
          }],
          ["article", {
            reserved: !1
          }],
          ["aside", {
            reserved: !1
          }],
          ["audio", {
            reserved: !1
          }],
          ["b", {
            reserved: !1
          }],
          ["base", {
            reserved: !0
          }],
          ["bdi", {
            reserved: !1
          }],
          ["bdo", {
            reserved: !1
          }],
          ["big", {
            reserved: !1
          }],
          ["blink", {
            reserved: !1
          }],
          ["blockquote", {
            reserved: !1
          }],
          ["body", {
            reserved: !1
          }],
          ["br", {
            reserved: !1
          }],
          ["button", {
            reserved: !1
          }],
          ["canvas", {
            reserved: !1
          }],
          ["caption", {
            reserved: !1
          }],
          ["center", {
            reserved: !1
          }],
          ["cite", {
            reserved: !1
          }],
          ["code", {
            reserved: !1
          }],
          ["col", {
            reserved: !0
          }],
          ["colgroup", {
            reserved: !0
          }],
          ["content", {
            reserved: !1
          }],
          ["data", {
            reserved: !1
          }],
          ["datalist", {
            reserved: !1
          }],
          ["dd", {
            reserved: !1
          }],
          ["del", {
            reserved: !1
          }],
          ["details", {
            reserved: !1
          }],
          ["dfn", {
            reserved: !1
          }],
          ["dialog", {
            reserved: !1
          }],
          ["dir", {
            reserved: !1
          }],
          ["div", {
            reserved: !1
          }],
          ["dl", {
            reserved: !1
          }],
          ["dt", {
            reserved: !1
          }],
          ["em", {
            reserved: !1
          }],
          ["embed", {
            reserved: !1
          }],
          ["fieldset", {
            reserved: !1
          }],
          ["figcaption", {
            reserved: !1
          }],
          ["figure", {
            reserved: !1
          }],
          ["font", {
            reserved: !1
          }],
          ["footer", {
            reserved: !1
          }],
          ["form", {
            reserved: !1
          }],
          ["frame", {
            reserved: !1
          }],
          ["frameset", {
            reserved: !1
          }],
          ["h1", {
            reserved: !1
          }],
          ["h2", {
            reserved: !1
          }],
          ["h3", {
            reserved: !1
          }],
          ["h4", {
            reserved: !1
          }],
          ["h5", {
            reserved: !1
          }],
          ["h6", {
            reserved: !1
          }],
          ["head", {
            reserved: !0
          }],
          ["header", {
            reserved: !1
          }],
          ["hgroup", {
            reserved: !1
          }],
          ["hr", {
            reserved: !1
          }],
          ["html", {
            reserved: !0
          }],
          ["i", {
            reserved: !1
          }],
          ["iframe", {
            reserved: !1
          }],
          ["img", {
            reserved: !1
          }],
          ["input", {
            reserved: !1
          }],
          ["ins", {
            reserved: !1
          }],
          ["kbd", {
            reserved: !1
          }],
          ["keygen", {
            reserved: !1
          }],
          ["label", {
            reserved: !1
          }],
          ["legend", {
            reserved: !1
          }],
          ["li", {
            reserved: !1
          }],
          ["link", {
            reserved: !0
          }],
          ["main", {
            reserved: !1
          }],
          ["map", {
            reserved: !1
          }],
          ["mark", {
            reserved: !1
          }],
          ["marquee", {
            reserved: !1
          }],
          ["menu", {
            reserved: !1
          }],
          ["menuitem", {
            reserved: !1
          }],
          ["meta", {
            reserved: !0
          }],
          ["meter", {
            reserved: !1
          }],
          ["nav", {
            reserved: !1
          }],
          ["noembed", {
            reserved: !0
          }],
          ["noscript", {
            reserved: !0
          }],
          ["object", {
            reserved: !1
          }],
          ["ol", {
            reserved: !1
          }],
          ["optgroup", {
            reserved: !1
          }],
          ["option", {
            reserved: !1
          }],
          ["output", {
            reserved: !1
          }],
          ["p", {
            reserved: !1
          }],
          ["param", {
            reserved: !0
          }],
          ["picture", {
            reserved: !0
          }],
          ["pre", {
            reserved: !1
          }],
          ["progress", {
            reserved: !1
          }],
          ["q", {
            reserved: !1
          }],
          ["rp", {
            reserved: !1
          }],
          ["rt", {
            reserved: !1
          }],
          ["rtc", {
            reserved: !1
          }],
          ["ruby", {
            reserved: !1
          }],
          ["s", {
            reserved: !1
          }],
          ["samp", {
            reserved: !1
          }],
          ["script", {
            reserved: !0
          }],
          ["section", {
            reserved: !1
          }],
          ["select", {
            reserved: !1
          }],
          ["small", {
            reserved: !1
          }],
          ["source", {
            reserved: !0
          }],
          ["spacer", {
            reserved: !1
          }],
          ["span", {
            reserved: !1
          }],
          ["strike", {
            reserved: !1
          }],
          ["strong", {
            reserved: !1
          }],
          ["style", {
            reserved: !0
          }],
          ["sub", {
            reserved: !1
          }],
          ["summary", {
            reserved: !1
          }],
          ["sup", {
            reserved: !1
          }],
          ["table", {
            reserved: !1
          }],
          ["tbody", {
            reserved: !1
          }],
          ["td", {
            reserved: !1
          }],
          ["textarea", {
            reserved: !1
          }],
          ["tfoot", {
            reserved: !1
          }],
          ["th", {
            reserved: !1
          }],
          ["thead", {
            reserved: !1
          }],
          ["time", {
            reserved: !1
          }],
          ["title", {
            reserved: !0
          }],
          ["tr", {
            reserved: !1
          }],
          ["track", {
            reserved: !0
          }],
          ["tt", {
            reserved: !1
          }],
          ["u", {
            reserved: !1
          }],
          ["ul", {
            reserved: !1
          }],
          ["var", {
            reserved: !1
          }],
          ["video", {
            reserved: !1
          }],
          ["wbr", {
            reserved: !1
          }],
          ["xmp", {
            reserved: !1
          }]
        ],
        s = {
          entries: function() {
            return u
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                  if (Array.isArray(e) || (r = i(e))) {
                    r && (e = r);
                    var n = 0,
                      o = function() {};
                    return {
                      s: o,
                      n: function() {
                        return n >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[n++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: o
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, l = !0,
                  u = !1;
                return {
                  s: function() {
                    r = r.call(e)
                  },
                  n: function() {
                    var e = r.next();
                    return l = e.done, e
                  },
                  e: function(e) {
                    u = !0, a = e
                  },
                  f: function() {
                    try {
                      l || null == r.return || r.return()
                    } finally {
                      if (u) throw a
                    }
                  }
                }
              }(u);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = a(t.value, 2),
                  l = o[0],
                  s = o[1];
                e.call(r, s, l, u)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = u.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!s.get(e)
          },
          keys: function() {
            return u.map((function(e) {
              return a(e, 1)[0]
            }))
          },
          values: function() {
            return u.map((function(e) {
              return a(e, 2)[1]
            }))
          }
        },
        c = (0, o.default)(s, s.entries());
      t.default = c
    },
    87207: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = i(r(43347)),
        o = i(r(18984)),
        a = i(r(27460));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || u(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function u(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
        }
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      for (var c = [], d = a.default.keys(), p = 0; p < d.length; p++) {
        var f = d[p],
          b = a.default.get(f);
        if (b)
          for (var m = [].concat(b.baseConcepts, b.relatedConcepts), y = 0; y < m.length; y++) {
            var v = m[y];
            if ("HTML" === v.module) {
              var h = v.concept;
              h && function() {
                var e = JSON.stringify(h),
                  t = c.find((function(t) {
                    return JSON.stringify(t[0]) === e
                  })),
                  r = void 0;
                r = t ? t[1] : [];
                for (var n = !0, o = 0; o < r.length; o++)
                  if (r[o] === f) {
                    n = !1;
                    break
                  } n && r.push(f), c.push([h, r])
              }()
            }
          }
      }
      var g = {
          entries: function() {
            return c
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                  if (Array.isArray(e) || (r = u(e))) {
                    r && (e = r);
                    var n = 0,
                      o = function() {};
                    return {
                      s: o,
                      n: function() {
                        return n >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[n++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: o
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                  l = !1;
                return {
                  s: function() {
                    r = r.call(e)
                  },
                  n: function() {
                    var e = r.next();
                    return i = e.done, e
                  },
                  e: function(e) {
                    l = !0, a = e
                  },
                  f: function() {
                    try {
                      i || null == r.return || r.return()
                    } finally {
                      if (l) throw a
                    }
                  }
                }
              }(c);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = l(t.value, 2),
                  a = o[0],
                  i = o[1];
                e.call(r, i, a, c)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = c.find((function(t) {
              return (0, n.default)(e, t[0])
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!g.get(e)
          },
          keys: function() {
            return c.map((function(e) {
              return l(e, 1)[0]
            }))
          },
          values: function() {
            return c.map((function(e) {
              return l(e, 2)[1]
            }))
          }
        },
        w = (0, o.default)(g, g.entries());
      t.default = w
    },
    616: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget"]
        ]
      }
    },
    19610: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget"]
        ]
      }
    },
    95997: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null
        },
        relatedConcepts: [{
          concept: {
            name: "input"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget"]
        ]
      }
    },
    48869: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    73252: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuemax": null,
          "aria-valuemin": null,
          "aria-valuenow": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    66649: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {
          "aria-atomic": null,
          "aria-busy": null,
          "aria-controls": null,
          "aria-current": null,
          "aria-describedby": null,
          "aria-details": null,
          "aria-dropeffect": null,
          "aria-flowto": null,
          "aria-grabbed": null,
          "aria-hidden": null,
          "aria-keyshortcuts": null,
          "aria-label": null,
          "aria-labelledby": null,
          "aria-live": null,
          "aria-owns": null,
          "aria-relevant": null,
          "aria-roledescription": null
        },
        relatedConcepts: [{
          concept: {
            name: "rel"
          },
          module: "HTML"
        }, {
          concept: {
            name: "role"
          },
          module: "XHTML"
        }, {
          concept: {
            name: "type"
          },
          module: "Dublin Core"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: []
      }
    },
    53662: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "frontmatter"
          },
          module: "DTB"
        }, {
          concept: {
            name: "level"
          },
          module: "DTB"
        }, {
          concept: {
            name: "level"
          },
          module: "SMIL"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    71376: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    30081: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "group"]
        ]
      }
    },
    24304: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype"]
        ]
      }
    },
    97477: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype"]
        ]
      }
    },
    65253: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-modal": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype"]
        ]
      }
    },
    89862: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = m(r(616)),
        o = m(r(19610)),
        a = m(r(95997)),
        i = m(r(48869)),
        l = m(r(73252)),
        u = m(r(66649)),
        s = m(r(53662)),
        c = m(r(71376)),
        d = m(r(30081)),
        p = m(r(24304)),
        f = m(r(97477)),
        b = m(r(65253));

      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var y = [
        ["command", n.default],
        ["composite", o.default],
        ["input", a.default],
        ["landmark", i.default],
        ["range", l.default],
        ["roletype", u.default],
        ["section", s.default],
        ["sectionhead", c.default],
        ["select", d.default],
        ["structure", p.default],
        ["widget", f.default],
        ["window", b.default]
      ];
      t.default = y
    },
    43113: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = H(r(72940)),
        o = H(r(278)),
        a = H(r(52070)),
        i = H(r(87935)),
        l = H(r(5877)),
        u = H(r(91925)),
        s = H(r(32662)),
        c = H(r(40012)),
        d = H(r(28069)),
        p = H(r(85500)),
        f = H(r(89449)),
        b = H(r(81575)),
        m = H(r(69731)),
        y = H(r(46026)),
        v = H(r(29808)),
        h = H(r(45729)),
        g = H(r(58880)),
        w = H(r(35006)),
        P = H(r(79890)),
        C = H(r(45951)),
        E = H(r(33214)),
        q = H(r(55638)),
        x = H(r(12780)),
        O = H(r(39906)),
        S = H(r(66753)),
        j = H(r(88308)),
        R = H(r(68654)),
        _ = H(r(68925)),
        A = H(r(38614)),
        T = H(r(50034)),
        M = H(r(23501)),
        I = H(r(81619)),
        k = H(r(34504)),
        N = H(r(97951)),
        F = H(r(91517)),
        B = H(r(28746)),
        L = H(r(28470)),
        U = H(r(2549)),
        D = H(r(18050));

      function H(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var $ = [
        ["doc-abstract", n.default],
        ["doc-acknowledgments", o.default],
        ["doc-afterword", a.default],
        ["doc-appendix", i.default],
        ["doc-backlink", l.default],
        ["doc-biblioentry", u.default],
        ["doc-bibliography", s.default],
        ["doc-biblioref", c.default],
        ["doc-chapter", d.default],
        ["doc-colophon", p.default],
        ["doc-conclusion", f.default],
        ["doc-cover", b.default],
        ["doc-credit", m.default],
        ["doc-credits", y.default],
        ["doc-dedication", v.default],
        ["doc-endnote", h.default],
        ["doc-endnotes", g.default],
        ["doc-epigraph", w.default],
        ["doc-epilogue", P.default],
        ["doc-errata", C.default],
        ["doc-example", E.default],
        ["doc-footnote", q.default],
        ["doc-foreword", x.default],
        ["doc-glossary", O.default],
        ["doc-glossref", S.default],
        ["doc-index", j.default],
        ["doc-introduction", R.default],
        ["doc-noteref", _.default],
        ["doc-notice", A.default],
        ["doc-pagebreak", T.default],
        ["doc-pagelist", M.default],
        ["doc-part", I.default],
        ["doc-preface", k.default],
        ["doc-prologue", N.default],
        ["doc-pullquote", F.default],
        ["doc-qna", B.default],
        ["doc-subtitle", L.default],
        ["doc-tip", U.default],
        ["doc-toc", D.default]
      ];
      t.default = $
    },
    76571: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = i(r(72232)),
        o = i(r(87326)),
        a = i(r(91773));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var l = [
        ["graphics-document", n.default],
        ["graphics-object", o.default],
        ["graphics-symbol", a.default]
      ];
      t.default = l
    },
    99833: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = Ae(r(59296)),
        o = Ae(r(68236)),
        a = Ae(r(56516)),
        i = Ae(r(17948)),
        l = Ae(r(31154)),
        u = Ae(r(81791)),
        s = Ae(r(77116)),
        c = Ae(r(77628)),
        d = Ae(r(69859)),
        p = Ae(r(35261)),
        f = Ae(r(43437)),
        b = Ae(r(28931)),
        m = Ae(r(37251)),
        y = Ae(r(70780)),
        v = Ae(r(61391)),
        h = Ae(r(98721)),
        g = Ae(r(10986)),
        w = Ae(r(99704)),
        P = Ae(r(33429)),
        C = Ae(r(24793)),
        E = Ae(r(94762)),
        q = Ae(r(50840)),
        x = Ae(r(78652)),
        O = Ae(r(33758)),
        S = Ae(r(472)),
        j = Ae(r(26944)),
        R = Ae(r(79644)),
        _ = Ae(r(11269)),
        A = Ae(r(34312)),
        T = Ae(r(45005)),
        M = Ae(r(8291)),
        I = Ae(r(25088)),
        k = Ae(r(90228)),
        N = Ae(r(61379)),
        F = Ae(r(36075)),
        B = Ae(r(78396)),
        L = Ae(r(6925)),
        U = Ae(r(93142)),
        D = Ae(r(83674)),
        H = Ae(r(87483)),
        $ = Ae(r(74846)),
        W = Ae(r(65164)),
        z = Ae(r(73021)),
        V = Ae(r(16057)),
        G = Ae(r(59415)),
        K = Ae(r(24186)),
        X = Ae(r(61370)),
        Y = Ae(r(35100)),
        J = Ae(r(40057)),
        Z = Ae(r(73656)),
        Q = Ae(r(61524)),
        ee = Ae(r(71086)),
        te = Ae(r(75161)),
        re = Ae(r(25398)),
        ne = Ae(r(28644)),
        oe = Ae(r(41414)),
        ae = Ae(r(25487)),
        ie = Ae(r(71203)),
        le = Ae(r(80980)),
        ue = Ae(r(51516)),
        se = Ae(r(21435)),
        ce = Ae(r(79529)),
        de = Ae(r(64629)),
        pe = Ae(r(81032)),
        fe = Ae(r(91298)),
        be = Ae(r(37427)),
        me = Ae(r(52559)),
        ye = Ae(r(30114)),
        ve = Ae(r(3756)),
        he = Ae(r(71509)),
        ge = Ae(r(7018)),
        we = Ae(r(95953)),
        Pe = Ae(r(87615)),
        Ce = Ae(r(62110)),
        Ee = Ae(r(44058)),
        qe = Ae(r(14093)),
        xe = Ae(r(36879)),
        Oe = Ae(r(42901)),
        Se = Ae(r(14205)),
        je = Ae(r(87920)),
        Re = Ae(r(5284)),
        _e = Ae(r(72415));

      function Ae(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var Te = [
        ["alert", n.default],
        ["alertdialog", o.default],
        ["application", a.default],
        ["article", i.default],
        ["banner", l.default],
        ["blockquote", u.default],
        ["button", s.default],
        ["caption", c.default],
        ["cell", d.default],
        ["checkbox", p.default],
        ["code", f.default],
        ["columnheader", b.default],
        ["combobox", m.default],
        ["complementary", y.default],
        ["contentinfo", v.default],
        ["definition", h.default],
        ["deletion", g.default],
        ["dialog", w.default],
        ["directory", P.default],
        ["document", C.default],
        ["emphasis", E.default],
        ["feed", q.default],
        ["figure", x.default],
        ["form", O.default],
        ["generic", S.default],
        ["grid", j.default],
        ["gridcell", R.default],
        ["group", _.default],
        ["heading", A.default],
        ["img", T.default],
        ["insertion", M.default],
        ["link", I.default],
        ["list", k.default],
        ["listbox", N.default],
        ["listitem", F.default],
        ["log", B.default],
        ["main", L.default],
        ["marquee", U.default],
        ["math", D.default],
        ["menu", H.default],
        ["menubar", $.default],
        ["menuitem", W.default],
        ["menuitemcheckbox", z.default],
        ["menuitemradio", V.default],
        ["meter", G.default],
        ["navigation", K.default],
        ["none", X.default],
        ["note", Y.default],
        ["option", J.default],
        ["paragraph", Z.default],
        ["presentation", Q.default],
        ["progressbar", ee.default],
        ["radio", te.default],
        ["radiogroup", re.default],
        ["region", ne.default],
        ["row", oe.default],
        ["rowgroup", ae.default],
        ["rowheader", ie.default],
        ["scrollbar", le.default],
        ["search", ue.default],
        ["searchbox", se.default],
        ["separator", ce.default],
        ["slider", de.default],
        ["spinbutton", pe.default],
        ["status", fe.default],
        ["strong", be.default],
        ["subscript", me.default],
        ["superscript", ye.default],
        ["switch", ve.default],
        ["tab", he.default],
        ["table", ge.default],
        ["tablist", we.default],
        ["tabpanel", Pe.default],
        ["term", Ce.default],
        ["textbox", Ee.default],
        ["time", qe.default],
        ["timer", xe.default],
        ["toolbar", Oe.default],
        ["tooltip", Se.default],
        ["tree", je.default],
        ["treegrid", Re.default],
        ["treeitem", _e.default]
      ];
      t.default = Te
    },
    72940: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "abstract [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    278: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "acknowledgments [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    52070: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "afterword [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    87935: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "appendix [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    5877: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "content"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "referrer [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    91925: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "EPUB biblioentry [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: ["doc-bibliography"],
        requiredContextRole: ["doc-bibliography"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "listitem"]
        ]
      }
    },
    32662: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "bibliography [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["doc-biblioentry"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    40012: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "biblioref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    28069: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "chapter [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    85500: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "colophon [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    89449: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "conclusion [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    81575: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "cover [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "img"]
        ]
      }
    },
    69731: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "credit [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    46026: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "credits [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    29808: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "dedication [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    45729: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "rearnote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: ["doc-endnotes"],
        requiredContextRole: ["doc-endnotes"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "listitem"]
        ]
      }
    },
    58880: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "rearnotes [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["doc-endnote"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    35006: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "epigraph [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    79890: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "epilogue [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    45951: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "errata [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    33214: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    55638: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "footnote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    12780: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "foreword [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    39906: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "glossary [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["definition"],
          ["term"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    66753: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "glossref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    88308: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "index [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"]
        ]
      }
    },
    68654: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "introduction [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    68925: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "noteref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    38614: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "notice [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "note"]
        ]
      }
    },
    50034: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "pagebreak [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "separator"]
        ]
      }
    },
    23501: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "page-list [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"]
        ]
      }
    },
    81619: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "part [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    34504: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "preface [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    97951: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "prologue [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    91517: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "pullquote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["none"]
        ]
      }
    },
    28746: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "qna [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    28470: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "subtitle [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    2549: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "help [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "note"]
        ]
      }
    },
    18050: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "toc [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"]
        ]
      }
    },
    72232: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          module: "GRAPHICS",
          concept: {
            name: "graphics-object"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "img"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "article"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "document"]
        ]
      }
    },
    87326: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          module: "GRAPHICS",
          concept: {
            name: "graphics-document"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "group"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "img"
          }
        }, {
          module: "GRAPHICS",
          concept: {
            name: "graphics-symbol"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"]
        ]
      }
    },
    91773: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "img"]
        ]
      }
    },
    59296: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-atomic": "true",
          "aria-live": "assertive"
        },
        relatedConcepts: [{
          concept: {
            name: "alert"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    68236: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "alert"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "alert"],
          ["roletype", "window", "dialog"]
        ]
      }
    },
    56516: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "Device Independence Delivery Unit"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    17948: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "article"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "document"]
        ]
      }
    },
    31154: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of document"],
            name: "header"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    81791: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    77116: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-pressed": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-pressed"
            }, {
              name: "type",
              value: "checkbox"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "aria-expanded",
              value: "false"
            }],
            name: "summary"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "aria-expanded",
              value: "true"
            }],
            constraints: ["direct descendant of details element with the open attribute defined"],
            name: "summary"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "button"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "image"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "reset"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "submit"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "button"
          },
          module: "HTML"
        }, {
          concept: {
            name: "trigger"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command"]
        ]
      }
    },
    77628: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: ["figure", "grid", "table"],
        requiredContextRole: ["figure", "grid", "table"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    69859: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-colspan": null,
          "aria-rowindex": null,
          "aria-rowspan": null
        },
        relatedConcepts: [{
          concept: {
            constraints: ["descendant of table"],
            name: "td"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    35261: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "checkbox"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "option"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    43437: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    28931: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-sort": null
        },
        relatedConcepts: [{
          attributes: [{
            name: "scope",
            value: "col"
          }],
          concept: {
            name: "th"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    37251: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-expanded": "false",
          "aria-haspopup": "listbox"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "email"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "search"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "tel"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "text"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "multiple"
            }, {
              constraints: ["undefined"],
              name: "size"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "multiple"
            }, {
              name: "size",
              value: 1
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-controls": null,
          "aria-expanded": "false"
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    70780: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "aside"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    61391: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of document"],
            name: "footer"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    98721: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dd"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    10986: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    99704: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dialog"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "window"]
        ]
      }
    },
    33429: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          module: "DAISY Guide"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "list"]
        ]
      }
    },
    24793: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "Device Independence Delivery Unit"
          }
        }, {
          concept: {
            name: "body"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    94762: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    50840: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["article"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "list"]
        ]
      }
    },
    78652: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "figure"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    33758: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            name: "form"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            name: "form"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "name"
            }],
            name: "form"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    472: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "span"
          },
          module: "HTML"
        }, {
          concept: {
            name: "div"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    26944: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-multiselectable": null,
          "aria-readonly": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "role",
              value: "grid"
            }],
            name: "table"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["row"],
          ["row", "rowgroup"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "table"]
        ]
      }
    },
    79644: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-selected": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "role",
              value: "gridcell"
            }],
            name: "td"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "widget"]
        ]
      }
    },
    11269: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null
        },
        relatedConcepts: [{
          concept: {
            name: "details"
          },
          module: "HTML"
        }, {
          concept: {
            name: "fieldset"
          },
          module: "HTML"
        }, {
          concept: {
            name: "optgroup"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    34312: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-level": "2"
        },
        relatedConcepts: [{
          concept: {
            name: "h1"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h2"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h3"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h4"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h5"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h6"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-level": "2"
        },
        superClass: [
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    45005: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "alt"
            }],
            name: "img"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "alt"
            }],
            name: "img"
          },
          module: "HTML"
        }, {
          concept: {
            name: "imggroup"
          },
          module: "DTB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    8291: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    25088: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "a"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "area"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "link"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command"]
        ]
      }
    },
    90228: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menu"
          },
          module: "HTML"
        }, {
          concept: {
            name: "ol"
          },
          module: "HTML"
        }, {
          concept: {
            name: "ul"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["listitem"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    61379: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-orientation": "vertical"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: [">1"],
              name: "size"
            }, {
              name: "multiple"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: [">1"],
              name: "size"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "multiple"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            name: "datalist"
          },
          module: "HTML"
        }, {
          concept: {
            name: "list"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["option", "group"],
          ["option"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    36075: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of ol, ul or menu"],
            name: "li"
          },
          module: "HTML"
        }, {
          concept: {
            name: "item"
          },
          module: "XForms"
        }],
        requireContextRole: ["directory", "list"],
        requiredContextRole: ["directory", "list"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    78396: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-live": "polite"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    6925: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "main"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    93142: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    83674: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "math"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    87483: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "vertical"
        },
        relatedConcepts: [{
          concept: {
            name: "MENU"
          },
          module: "JAPI"
        }, {
          concept: {
            name: "list"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }, {
          concept: {
            name: "sidebar"
          },
          module: "DTB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    74846: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          concept: {
            name: "toolbar"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select", "menu"],
          ["roletype", "structure", "section", "group", "select", "menu"]
        ]
      }
    },
    65164: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "MENU_ITEM"
          },
          module: "JAPI"
        }, {
          concept: {
            name: "listitem"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "menuitem"
          },
          module: "HTML"
        }, {
          concept: {
            name: "option"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command"]
        ]
      }
    },
    73021: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input", "checkbox"],
          ["roletype", "widget", "command", "menuitem"]
        ]
      }
    },
    16057: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
          ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
          ["roletype", "widget", "input", "radio"]
        ]
      }
    },
    59415: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuetext": null,
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-valuenow": null
        },
        superClass: [
          ["roletype", "structure", "range"]
        ]
      }
    },
    24186: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "nav"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    61370: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: []
      }
    },
    35100: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    40057: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false"
        },
        relatedConcepts: [{
          concept: {
            name: "item"
          },
          module: "XForms"
        }, {
          concept: {
            name: "listitem"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "option"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-selected": "false"
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    73656: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    61524: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    71086: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuetext": null
        },
        relatedConcepts: [{
          concept: {
            name: "progress"
          },
          module: "HTML"
        }, {
          concept: {
            name: "status"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"]
        ]
      }
    },
    75161: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "radio"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    25398: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            name: "list"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["radio"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    28644: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            name: "Device Independence Glossart perceivable unit"
          }
        }, {
          concept: {
            name: "frame"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    41414: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-expanded": null,
          "aria-level": null,
          "aria-posinset": null,
          "aria-rowindex": null,
          "aria-selected": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "tr"
          },
          module: "HTML"
        }],
        requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredOwnedElements: [
          ["cell"],
          ["columnheader"],
          ["gridcell"],
          ["rowheader"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"],
          ["roletype", "widget"]
        ]
      }
    },
    25487: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "tbody"
          },
          module: "HTML"
        }, {
          concept: {
            name: "tfoot"
          },
          module: "HTML"
        }, {
          concept: {
            name: "thead"
          },
          module: "HTML"
        }],
        requireContextRole: ["grid", "table", "treegrid"],
        requiredContextRole: ["grid", "table", "treegrid"],
        requiredOwnedElements: [
          ["row"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    71203: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-sort": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "scope",
              value: "row"
            }],
            name: "th"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "scope",
              value: "rowgroup"
            }],
            name: "th"
          },
          module: "HTML"
        }],
        requireContextRole: ["row", "rowgroup"],
        requiredContextRole: ["row", "rowgroup"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    80980: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-valuetext": null,
          "aria-orientation": "vertical",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-controls": null,
          "aria-valuenow": null
        },
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"]
        ]
      }
    },
    51516: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    21435: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "search"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "input", "textbox"]
        ]
      }
    },
    79529: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": null,
          "aria-valuetext": null
        },
        relatedConcepts: [{
          concept: {
            name: "hr"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    64629: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-valuetext": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "range"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-valuenow": null
        },
        superClass: [
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"]
        ]
      }
    },
    81032: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-valuetext": null,
          "aria-valuenow": "0"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "number"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"]
        ]
      }
    },
    91298: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-atomic": "true",
          "aria-live": "polite"
        },
        relatedConcepts: [{
          concept: {
            name: "output"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    37427: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    52559: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    30114: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    3756: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "button"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input", "checkbox"]
        ]
      }
    },
    71509: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false"
        },
        relatedConcepts: [],
        requireContextRole: ["tablist"],
        requiredContextRole: ["tablist"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "sectionhead"],
          ["roletype", "widget"]
        ]
      }
    },
    7018: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-colcount": null,
          "aria-rowcount": null
        },
        relatedConcepts: [{
          concept: {
            name: "table"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["row"],
          ["row", "rowgroup"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    95953: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-multiselectable": null,
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          module: "DAISY",
          concept: {
            name: "guide"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["tab"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"]
        ]
      }
    },
    87615: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    62110: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dfn"
          },
          module: "HTML"
        }, {
          concept: {
            name: "dt"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    44058: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-multiline": null,
          "aria-placeholder": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "type"
            }, {
              constraints: ["undefined"],
              name: "list"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "email"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "tel"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "text"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "input"
          },
          module: "XForms"
        }, {
          concept: {
            name: "textarea"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    14093: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    36879: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "status"]
        ]
      }
    },
    42901: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          concept: {
            name: "menubar"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"]
        ]
      }
    },
    14205: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    87920: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-required": null,
          "aria-orientation": "vertical"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["treeitem", "group"],
          ["treeitem"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    5284: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["row"],
          ["row", "rowgroup"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "grid"],
          ["roletype", "structure", "section", "table", "grid"],
          ["roletype", "widget", "composite", "select", "tree"],
          ["roletype", "structure", "section", "group", "select", "tree"]
        ]
      }
    },
    72415: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-expanded": null,
          "aria-haspopup": null
        },
        relatedConcepts: [],
        requireContextRole: ["group", "tree"],
        requiredContextRole: ["group", "tree"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-selected": null
        },
        superClass: [
          ["roletype", "structure", "section", "listitem"],
          ["roletype", "widget", "input", "option"]
        ]
      }
    },
    5661: (e, t, r) => {
      "use strict";
      t.Ot = t.wZ = t._s = void 0;
      var n = u(r(40200)),
        o = u(r(51107)),
        a = u(r(27460)),
        i = u(r(87207)),
        l = u(r(42151));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      n.default, o.default;
      var s = a.default;
      t.Ot = s;
      var c = i.default;
      t._s = c;
      var d = l.default;
      t.wZ = d
    },
    42151: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = a(r(18984)),
        o = a(r(27460));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || l(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function l(e, t) {
        if (e) {
          if ("string" == typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
        }
      }

      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      for (var s = [], c = o.default.keys(), d = function(e) {
          var t = c[e],
            r = o.default.get(t);
          if (r)
            for (var n = [].concat(r.baseConcepts, r.relatedConcepts), a = 0; a < n.length; a++) {
              var i = n[a];
              if ("HTML" === i.module) {
                var l = i.concept;
                if (l) {
                  var u = s.find((function(e) {
                      return e[0] === t
                    })),
                    d = void 0;
                  (d = u ? u[1] : []).push(l), s.push([t, d])
                }
              }
            }
        }, p = 0; p < c.length; p++) d(p);
      var f = {
          entries: function() {
            return s
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                  if (Array.isArray(e) || (r = l(e))) {
                    r && (e = r);
                    var n = 0,
                      o = function() {};
                    return {
                      s: o,
                      n: function() {
                        return n >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[n++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: o
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                  u = !1;
                return {
                  s: function() {
                    r = r.call(e)
                  },
                  n: function() {
                    var e = r.next();
                    return i = e.done, e
                  },
                  e: function(e) {
                    u = !0, a = e
                  },
                  f: function() {
                    try {
                      i || null == r.return || r.return()
                    } finally {
                      if (u) throw a
                    }
                  }
                }
              }(s);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = i(t.value, 2),
                  a = o[0],
                  u = o[1];
                e.call(r, u, a, s)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = s.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!f.get(e)
          },
          keys: function() {
            return s.map((function(e) {
              return i(e, 1)[0]
            }))
          },
          values: function() {
            return s.map((function(e) {
              return i(e, 2)[1]
            }))
          }
        },
        b = (0, n.default)(f, f.entries());
      t.default = b
    },
    27460: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = u(r(89862)),
        o = u(r(99833)),
        a = u(r(43113)),
        i = u(r(76571)),
        l = u(r(18984));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = d(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          l = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            l = !0, a = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (l) throw a
            }
          }
        }
      }

      function c(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || d(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function d(e, t) {
        if (e) {
          if ("string" == typeof e) return p(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
        }
      }

      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var f = [].concat(n.default, o.default, a.default, i.default);
      f.forEach((function(e) {
        var t, r = c(e, 2)[1],
          n = s(r.superClass);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var o, a = s(t.value);
            try {
              var i = function() {
                var e, t, n, a = o.value,
                  i = f.find((function(e) {
                    return c(e, 1)[0] === a
                  }));
                if (i)
                  for (var l = i[1], u = 0, s = Object.keys(l.props); u < s.length; u++) {
                    var d = s[u];
                    Object.prototype.hasOwnProperty.call(r.props, d) || Object.assign(r.props, (e = {}, t = d, n = l.props[d], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = n, e))
                  }
              };
              for (a.s(); !(o = a.n()).done;) i()
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
      }));
      var b = {
          entries: function() {
            return f
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = s(f);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = c(t.value, 2),
                  a = o[0],
                  i = o[1];
                e.call(r, i, a, f)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = f.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!b.get(e)
          },
          keys: function() {
            return f.map((function(e) {
              return c(e, 1)[0]
            }))
          },
          values: function() {
            return f.map((function(e) {
              return c(e, 2)[1]
            }))
          }
        },
        m = (0, l.default)(b, b.entries());
      t.default = m
    },
    18984: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        return "function" == typeof Symbol && "symbol" === a(Symbol.iterator) && Object.defineProperty(e, Symbol.iterator, {
          value: o.default.bind(t)
        }), e
      };
      var n, o = (n = r(34864)) && n.__esModule ? n : {
        default: n
      };

      function a(e) {
        return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a(e)
      }
    },
    34864: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = this,
          t = 0,
          r = {
            "@@iterator": function() {
              return r
            },
            next: function() {
              if (t < e.length) {
                var r = e[t];
                return t += 1, {
                  done: !1,
                  value: r
                }
              }
              return {
                done: !0
              }
            }
          };
        return r
      }
    },
    40309: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.printIteratorEntries = function(e, t, r, n, o, a) {
        let i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ": ",
          l = "",
          u = e.next();
        if (!u.done) {
          l += t.spacingOuter;
          const s = r + t.indent;
          for (; !u.done;) l += s + a(u.value[0], t, s, n, o) + i + a(u.value[1], t, s, n, o), u = e.next(), u.done ? t.min || (l += ",") : l += "," + t.spacingInner;
          l += t.spacingOuter + r
        }
        return l
      }, t.printIteratorValues = function(e, t, r, n, o, a) {
        let i = "",
          l = e.next();
        if (!l.done) {
          i += t.spacingOuter;
          const u = r + t.indent;
          for (; !l.done;) i += u + a(l.value, t, u, n, o), l = e.next(), l.done ? t.min || (i += ",") : i += "," + t.spacingInner;
          i += t.spacingOuter + r
        }
        return i
      }, t.printListItems = function(e, t, r, n, o, a) {
        let i = "";
        if (e.length) {
          i += t.spacingOuter;
          const l = r + t.indent;
          for (let r = 0; r < e.length; r++) i += l, r in e && (i += a(e[r], t, l, n, o)), r < e.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
          i += t.spacingOuter + r
        }
        return i
      }, t.printObjectProperties = function(e, t, n, o, a, i) {
        let l = "";
        const u = r(e, t.compareKeys);
        if (u.length) {
          l += t.spacingOuter;
          const r = n + t.indent;
          for (let n = 0; n < u.length; n++) {
            const s = u[n];
            l += r + i(s, t, r, o, a) + ": " + i(e[s], t, r, o, a), n < u.length - 1 ? l += "," + t.spacingInner : t.min || (l += ",")
          }
          l += t.spacingOuter + n
        }
        return l
      };
      const r = (e, t) => {
        const r = Object.keys(e).sort(t);
        return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((t => {
          Object.getOwnPropertyDescriptor(e, t).enumerable && r.push(t)
        })), r
      }
    },
    90164: (e, t, r) => {
      "use strict";
      t.GP = function(e, t) {
        if (t && (function(e) {
            if (Object.keys(e).forEach((e => {
                if (!T.hasOwnProperty(e)) throw new Error(`pretty-format: Unknown option "${e}".`)
              })), e.min && void 0 !== e.indent && 0 !== e.indent) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
            if (void 0 !== e.theme) {
              if (null === e.theme) throw new Error('pretty-format: Option "theme" must not be null.');
              if ("object" != typeof e.theme) throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`)
            }
          }(t), t.plugins)) {
          const r = j(t.plugins, e);
          if (null !== r) return S(r, e, F(t), "", 0, [])
        }
        const r = x(e, I(t), k(t), N(t));
        return null !== r ? r : O(e, F(t), "", 0, [])
      }, t.Nx = void 0;
      var n = p(r(84643)),
        o = r(40309),
        a = p(r(94835)),
        i = p(r(98643)),
        l = p(r(8655)),
        u = p(r(61603)),
        s = p(r(26371)),
        c = p(r(84506)),
        d = p(r(87737));

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      const f = Object.prototype.toString,
        b = Date.prototype.toISOString,
        m = Error.prototype.toString,
        y = RegExp.prototype.toString,
        v = e => "function" == typeof e.constructor && e.constructor.name || "Object",
        h = e => "undefined" != typeof window && e === window,
        g = /^Symbol\((.*)\)(.*)$/,
        w = /\n/gi;
      class P extends Error {
        constructor(e, t) {
          super(e), this.stack = t, this.name = this.constructor.name
        }
      }

      function C(e, t) {
        return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]"
      }

      function E(e) {
        return String(e).replace(g, "Symbol($1)")
      }

      function q(e) {
        return "[" + m.call(e) + "]"
      }

      function x(e, t, r, n) {
        if (!0 === e || !1 === e) return "" + e;
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        const o = typeof e;
        if ("number" === o) return function(e) {
          return Object.is(e, -0) ? "-0" : String(e)
        }(e);
        if ("bigint" === o) return function(e) {
          return String(`${e}n`)
        }(e);
        if ("string" === o) return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
        if ("function" === o) return C(e, t);
        if ("symbol" === o) return E(e);
        const a = f.call(e);
        return "[object WeakMap]" === a ? "WeakMap {}" : "[object WeakSet]" === a ? "WeakSet {}" : "[object Function]" === a || "[object GeneratorFunction]" === a ? C(e, t) : "[object Symbol]" === a ? E(e) : "[object Date]" === a ? isNaN(+e) ? "Date { NaN }" : b.call(e) : "[object Error]" === a ? q(e) : "[object RegExp]" === a ? r ? y.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : y.call(e) : e instanceof Error ? q(e) : null
      }

      function O(e, t, r, n, a, i) {
        if (-1 !== a.indexOf(e)) return "[Circular]";
        (a = a.slice()).push(e);
        const l = ++n > t.maxDepth,
          u = t.min;
        if (t.callToJSON && !l && e.toJSON && "function" == typeof e.toJSON && !i) return R(e.toJSON(), t, r, n, a, !0);
        const s = f.call(e);
        return "[object Arguments]" === s ? l ? "[Arguments]" : (u ? "" : "Arguments ") + "[" + (0, o.printListItems)(e, t, r, n, a, R) + "]" : function(e) {
          return "[object Array]" === e || "[object ArrayBuffer]" === e || "[object DataView]" === e || "[object Float32Array]" === e || "[object Float64Array]" === e || "[object Int8Array]" === e || "[object Int16Array]" === e || "[object Int32Array]" === e || "[object Uint8Array]" === e || "[object Uint8ClampedArray]" === e || "[object Uint16Array]" === e || "[object Uint32Array]" === e
        }(s) ? l ? "[" + e.constructor.name + "]" : (u ? "" : t.printBasicPrototype || "Array" !== e.constructor.name ? e.constructor.name + " " : "") + "[" + (0, o.printListItems)(e, t, r, n, a, R) + "]" : "[object Map]" === s ? l ? "[Map]" : "Map {" + (0, o.printIteratorEntries)(e.entries(), t, r, n, a, R, " => ") + "}" : "[object Set]" === s ? l ? "[Set]" : "Set {" + (0, o.printIteratorValues)(e.values(), t, r, n, a, R) + "}" : l || h(e) ? "[" + v(e) + "]" : (u ? "" : t.printBasicPrototype || "Object" !== v(e) ? v(e) + " " : "") + "{" + (0, o.printObjectProperties)(e, t, r, n, a, R) + "}"
      }

      function S(e, t, r, n, o, a) {
        let i;
        try {
          i = function(e) {
            return null != e.serialize
          }(e) ? e.serialize(t, r, n, o, a, R) : e.print(t, (e => R(e, r, n, o, a)), (e => {
            const t = n + r.indent;
            return t + e.replace(w, "\n" + t)
          }), {
            edgeSpacing: r.spacingOuter,
            min: r.min,
            spacing: r.spacingInner
          }, r.colors)
        } catch (e) {
          throw new P(e.message, e.stack)
        }
        if ("string" != typeof i) throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
        return i
      }

      function j(e, t) {
        for (let r = 0; r < e.length; r++) try {
          if (e[r].test(t)) return e[r]
        } catch (e) {
          throw new P(e.message, e.stack)
        }
        return null
      }

      function R(e, t, r, n, o, a) {
        const i = j(t.plugins, e);
        if (null !== i) return S(i, e, t, r, n, o);
        const l = x(e, t.printFunctionName, t.escapeRegex, t.escapeString);
        return null !== l ? l : O(e, t, r, n, o, a)
      }
      const _ = {
          comment: "gray",
          content: "reset",
          prop: "yellow",
          tag: "cyan",
          value: "green"
        },
        A = Object.keys(_),
        T = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: _
        },
        M = e => A.reduce(((t, r) => {
          const o = e.theme && void 0 !== e.theme[r] ? e.theme[r] : _[r],
            a = o && n.default[o];
          if (!a || "string" != typeof a.close || "string" != typeof a.open) throw new Error(`pretty-format: Option "theme" has a key "${r}" whose value "${o}" is undefined in ansi-styles.`);
          return t[r] = a, t
        }), Object.create(null)),
        I = e => e && void 0 !== e.printFunctionName ? e.printFunctionName : T.printFunctionName,
        k = e => e && void 0 !== e.escapeRegex ? e.escapeRegex : T.escapeRegex,
        N = e => e && void 0 !== e.escapeString ? e.escapeString : T.escapeString,
        F = e => {
          var t, r;
          return {
            callToJSON: e && void 0 !== e.callToJSON ? e.callToJSON : T.callToJSON,
            colors: e && e.highlight ? M(e) : A.reduce(((e, t) => (e[t] = {
              close: "",
              open: ""
            }, e)), Object.create(null)),
            compareKeys: e && "function" == typeof e.compareKeys ? e.compareKeys : T.compareKeys,
            escapeRegex: k(e),
            escapeString: N(e),
            indent: e && e.min ? "" : (r = e && void 0 !== e.indent ? e.indent : T.indent, new Array(r + 1).join(" ")),
            maxDepth: e && void 0 !== e.maxDepth ? e.maxDepth : T.maxDepth,
            min: e && void 0 !== e.min ? e.min : T.min,
            plugins: e && void 0 !== e.plugins ? e.plugins : T.plugins,
            printBasicPrototype: null === (t = null == e ? void 0 : e.printBasicPrototype) || void 0 === t || t,
            printFunctionName: I(e),
            spacingInner: e && e.min ? " " : "\n",
            spacingOuter: e && e.min ? "" : "\n"
          }
        };
      const B = {
        AsymmetricMatcher: a.default,
        ConvertAnsi: i.default,
        DOMCollection: l.default,
        DOMElement: u.default,
        Immutable: s.default,
        ReactElement: c.default,
        ReactTestComponent: d.default
      };
      t.Nx = B
    },
    94835: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(40309),
        o = "undefined" != typeof globalThis ? globalThis : void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        a = o["jest-symbol-do-not-touch"] || o.Symbol;
      const i = "function" == typeof a && a.for ? a.for("jest.asymmetricMatcher") : 1267621,
        l = (e, t, r, o, a, i) => {
          const l = e.toString();
          return "ArrayContaining" === l || "ArrayNotContaining" === l ? ++o > t.maxDepth ? "[" + l + "]" : l + " [" + (0, n.printListItems)(e.sample, t, r, o, a, i) + "]" : "ObjectContaining" === l || "ObjectNotContaining" === l ? ++o > t.maxDepth ? "[" + l + "]" : l + " {" + (0, n.printObjectProperties)(e.sample, t, r, o, a, i) + "}" : "StringMatching" === l || "StringNotMatching" === l || "StringContaining" === l || "StringNotContaining" === l ? l + " " + i(e.sample, t, r, o, a) : e.toAsymmetricMatcher()
        };
      t.serialize = l;
      const u = e => e && e.$$typeof === i;
      t.test = u;
      var s = {
        serialize: l,
        test: u
      };
      t.default = s
    },
    98643: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = a(r(97693)),
        o = a(r(84643));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      const i = e => "string" == typeof e && !!e.match((0, n.default)());
      t.test = i;
      const l = (e, t, r, a, i, l) => l(e.replace((0, n.default)(), (e => {
        switch (e) {
          case o.default.red.close:
          case o.default.green.close:
          case o.default.cyan.close:
          case o.default.gray.close:
          case o.default.white.close:
          case o.default.yellow.close:
          case o.default.bgRed.close:
          case o.default.bgGreen.close:
          case o.default.bgYellow.close:
          case o.default.inverse.close:
          case o.default.dim.close:
          case o.default.bold.close:
          case o.default.reset.open:
          case o.default.reset.close:
            return "</>";
          case o.default.red.open:
            return "<red>";
          case o.default.green.open:
            return "<green>";
          case o.default.cyan.open:
            return "<cyan>";
          case o.default.gray.open:
            return "<gray>";
          case o.default.white.open:
            return "<white>";
          case o.default.yellow.open:
            return "<yellow>";
          case o.default.bgRed.open:
            return "<bgRed>";
          case o.default.bgGreen.open:
            return "<bgGreen>";
          case o.default.bgYellow.open:
            return "<bgYellow>";
          case o.default.inverse.open:
            return "<inverse>";
          case o.default.dim.open:
            return "<dim>";
          case o.default.bold.open:
            return "<bold>";
          default:
            return ""
        }
      })), t, r, a, i);
      t.serialize = l;
      var u = {
        serialize: l,
        test: i
      };
      t.default = u
    },
    8655: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(40309);
      const o = ["DOMStringMap", "NamedNodeMap"],
        a = /^(HTML\w*Collection|NodeList)$/,
        i = e => {
          return e && e.constructor && !!e.constructor.name && (t = e.constructor.name, -1 !== o.indexOf(t) || a.test(t));
          var t
        };
      t.test = i;
      const l = (e, t, r, a, i, l) => {
        const u = e.constructor.name;
        return ++a > t.maxDepth ? "[" + u + "]" : (t.min ? "" : u + " ") + (-1 !== o.indexOf(u) ? "{" + (0, n.printObjectProperties)((e => "NamedNodeMap" === e.constructor.name)(e) ? Array.from(e).reduce(((e, t) => (e[t.name] = t.value, e)), {}) : {
          ...e
        }, t, r, a, i, l) + "}" : "[" + (0, n.printListItems)(Array.from(e), t, r, a, i, l) + "]")
      };
      t.serialize = l;
      var u = {
        serialize: l,
        test: i
      };
      t.default = u
    },
    61603: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(64019);
      const o = /^((HTML|SVG)\w*)?Element$/,
        a = e => {
          var t;
          return (null == e || null === (t = e.constructor) || void 0 === t ? void 0 : t.name) && (e => {
            const t = e.constructor.name,
              {
                nodeType: r,
                tagName: n
              } = e,
              a = "string" == typeof n && n.includes("-") || (e => {
                try {
                  return "function" == typeof e.hasAttribute && e.hasAttribute("is")
                } catch {
                  return !1
                }
              })(e);
            return 1 === r && (o.test(t) || a) || 3 === r && "Text" === t || 8 === r && "Comment" === t || 11 === r && "DocumentFragment" === t
          })(e)
        };

      function i(e) {
        return 11 === e.nodeType
      }
      t.test = a;
      const l = (e, t, r, o, a, l) => {
        if (function(e) {
            return 3 === e.nodeType
          }(e)) return (0, n.printText)(e.data, t);
        if (function(e) {
            return 8 === e.nodeType
          }(e)) return (0, n.printComment)(e.data, t);
        const u = i(e) ? "DocumentFragment" : e.tagName.toLowerCase();
        return ++o > t.maxDepth ? (0, n.printElementAsLeaf)(u, t) : (0, n.printElement)(u, (0, n.printProps)(i(e) ? [] : Array.from(e.attributes).map((e => e.name)).sort(), i(e) ? {} : Array.from(e.attributes).reduce(((e, t) => (e[t.name] = t.value, e)), {}), t, r + t.indent, o, a, l), (0, n.printChildren)(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, o, a, l), t, r)
      };
      t.serialize = l;
      var u = {
        serialize: l,
        test: a
      };
      t.default = u
    },
    26371: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(40309);
      const o = "@@__IMMUTABLE_ORDERED__@@",
        a = e => "Immutable." + e,
        i = e => "[" + e + "]",
        l = " ",
        u = (e, t, r, o, u, s, c) => ++o > t.maxDepth ? i(a(c)) : a(c) + l + "[" + (0, n.printIteratorValues)(e.values(), t, r, o, u, s) + "]",
        s = (e, t, r, s, c, d) => e["@@__IMMUTABLE_MAP__@@"] ? ((e, t, r, o, u, s, c) => ++o > t.maxDepth ? i(a(c)) : a(c) + l + "{" + (0, n.printIteratorEntries)(e.entries(), t, r, o, u, s) + "}")(e, t, r, s, c, d, e[o] ? "OrderedMap" : "Map") : e["@@__IMMUTABLE_LIST__@@"] ? u(e, t, r, s, c, d, "List") : e["@@__IMMUTABLE_SET__@@"] ? u(e, t, r, s, c, d, e[o] ? "OrderedSet" : "Set") : e["@@__IMMUTABLE_STACK__@@"] ? u(e, t, r, s, c, d, "Stack") : e["@@__IMMUTABLE_SEQ__@@"] ? ((e, t, r, o, u, s) => {
          const c = a("Seq");
          return ++o > t.maxDepth ? i(c) : e["@@__IMMUTABLE_KEYED__@@"] ? c + l + "{" + (e._iter || e._object ? (0, n.printIteratorEntries)(e.entries(), t, r, o, u, s) : "…") + "}" : c + l + "[" + (e._iter || e._array || e._collection || e._iterable ? (0, n.printIteratorValues)(e.values(), t, r, o, u, s) : "…") + "]"
        })(e, t, r, s, c, d) : ((e, t, r, o, u, s) => {
          const c = a(e._name || "Record");
          return ++o > t.maxDepth ? i(c) : c + l + "{" + (0, n.printIteratorEntries)(function(e) {
            let t = 0;
            return {
              next() {
                if (t < e._keys.length) {
                  const r = e._keys[t++];
                  return {
                    done: !1,
                    value: [r, e.get(r)]
                  }
                }
                return {
                  done: !0,
                  value: void 0
                }
              }
            }
          }(e), t, r, o, u, s) + "}"
        })(e, t, r, s, c, d);
      t.serialize = s;
      const c = e => e && (!0 === e["@@__IMMUTABLE_ITERABLE__@@"] || !0 === e["@@__IMMUTABLE_RECORD__@@"]);
      t.test = c;
      var d = {
        serialize: s,
        test: c
      };
      t.default = d
    },
    84506: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = a(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i]
            } return n.default = e, r && r.set(e, n), n
        }(r(78091)),
        o = r(64019);

      function a(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          r = new WeakMap;
        return (a = function(e) {
          return e ? r : t
        })(e)
      }
      const i = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return Array.isArray(e) ? e.forEach((e => {
            i(e, t)
          })) : null != e && !1 !== e && t.push(e), t
        },
        l = e => {
          const t = e.type;
          if ("string" == typeof t) return t;
          if ("function" == typeof t) return t.displayName || t.name || "Unknown";
          if (n.isFragment(e)) return "React.Fragment";
          if (n.isSuspense(e)) return "React.Suspense";
          if ("object" == typeof t && null !== t) {
            if (n.isContextProvider(e)) return "Context.Provider";
            if (n.isContextConsumer(e)) return "Context.Consumer";
            if (n.isForwardRef(e)) {
              if (t.displayName) return t.displayName;
              const e = t.render.displayName || t.render.name || "";
              return "" !== e ? "ForwardRef(" + e + ")" : "ForwardRef"
            }
            if (n.isMemo(e)) {
              const e = t.displayName || t.type.displayName || t.type.name || "";
              return "" !== e ? "Memo(" + e + ")" : "Memo"
            }
          }
          return "UNDEFINED"
        },
        u = (e, t, r, n, a, u) => ++n > t.maxDepth ? (0, o.printElementAsLeaf)(l(e), t) : (0, o.printElement)(l(e), (0, o.printProps)((e => {
          const {
            props: t
          } = e;
          return Object.keys(t).filter((e => "children" !== e && void 0 !== t[e])).sort()
        })(e), e.props, t, r + t.indent, n, a, u), (0, o.printChildren)(i(e.props.children), t, r + t.indent, n, a, u), t, r);
      t.serialize = u;
      const s = e => null != e && n.isElement(e);
      t.test = s;
      var c = {
        serialize: u,
        test: s
      };
      t.default = c
    },
    87737: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(64019),
        o = "undefined" != typeof globalThis ? globalThis : void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        a = o["jest-symbol-do-not-touch"] || o.Symbol;
      const i = "function" == typeof a && a.for ? a.for("react.test.json") : 245830487,
        l = (e, t, r, o, a, i) => ++o > t.maxDepth ? (0, n.printElementAsLeaf)(e.type, t) : (0, n.printElement)(e.type, e.props ? (0, n.printProps)((e => {
          const {
            props: t
          } = e;
          return t ? Object.keys(t).filter((e => void 0 !== t[e])).sort() : []
        })(e), e.props, t, r + t.indent, o, a, i) : "", e.children ? (0, n.printChildren)(e.children, t, r + t.indent, o, a, i) : "", t, r);
      t.serialize = l;
      const u = e => e && e.$$typeof === i;
      t.test = u;
      var s = {
        serialize: l,
        test: u
      };
      t.default = s
    },
    28633: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
    },
    64019: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.printText = t.printProps = t.printElementAsLeaf = t.printElement = t.printComment = t.printChildren = void 0;
      var n, o = (n = r(28633)) && n.__esModule ? n : {
        default: n
      };
      t.printProps = (e, t, r, n, o, a, i) => {
        const l = n + r.indent,
          u = r.colors;
        return e.map((e => {
          const s = t[e];
          let c = i(s, r, l, o, a);
          return "string" != typeof s && (-1 !== c.indexOf("\n") && (c = r.spacingOuter + l + c + r.spacingOuter + n), c = "{" + c + "}"), r.spacingInner + n + u.prop.open + e + u.prop.close + "=" + u.value.open + c + u.value.close
        })).join("")
      }, t.printChildren = (e, t, r, n, o, i) => e.map((e => t.spacingOuter + r + ("string" == typeof e ? a(e, t) : i(e, t, r, n, o)))).join("");
      const a = (e, t) => {
        const r = t.colors.content;
        return r.open + (0, o.default)(e) + r.close
      };
      t.printText = a, t.printComment = (e, t) => {
        const r = t.colors.comment;
        return r.open + "\x3c!--" + (0, o.default)(e) + "--\x3e" + r.close
      }, t.printElement = (e, t, r, n, o) => {
        const a = n.colors.tag;
        return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close
      }, t.printElementAsLeaf = (e, t) => {
        const r = t.colors.tag;
        return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close
      }
    },
    37455: (e, t) => {
      "use strict";
      var r = 60103,
        n = 60106,
        o = 60107,
        a = 60108,
        i = 60114,
        l = 60109,
        u = 60110,
        s = 60112,
        c = 60113,
        d = 60120,
        p = 60115,
        f = 60116,
        b = 60121,
        m = 60122,
        y = 60117,
        v = 60129,
        h = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var g = Symbol.for;
        r = g("react.element"), n = g("react.portal"), o = g("react.fragment"), a = g("react.strict_mode"), i = g("react.profiler"), l = g("react.provider"), u = g("react.context"), s = g("react.forward_ref"), c = g("react.suspense"), d = g("react.suspense_list"), p = g("react.memo"), f = g("react.lazy"), b = g("react.block"), m = g("react.server.block"), y = g("react.fundamental"), v = g("react.debug_trace_mode"), h = g("react.legacy_hidden")
      }

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case o:
                case i:
                case a:
                case c:
                case d:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case s:
                    case f:
                    case p:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case n:
              return t
          }
        }
      }
      var P = l,
        C = r,
        E = s,
        q = o,
        x = f,
        O = p,
        S = n,
        j = i,
        R = a,
        _ = c;
      t.ContextConsumer = u, t.ContextProvider = P, t.Element = C, t.ForwardRef = E, t.Fragment = q, t.Lazy = x, t.Memo = O, t.Portal = S, t.Profiler = j, t.StrictMode = R, t.Suspense = _, t.isAsyncMode = function() {
        return !1
      }, t.isConcurrentMode = function() {
        return !1
      }, t.isContextConsumer = function(e) {
        return w(e) === u
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === s
      }, t.isFragment = function(e) {
        return w(e) === o
      }, t.isLazy = function(e) {
        return w(e) === f
      }, t.isMemo = function(e) {
        return w(e) === p
      }, t.isPortal = function(e) {
        return w(e) === n
      }, t.isProfiler = function(e) {
        return w(e) === i
      }, t.isStrictMode = function(e) {
        return w(e) === a
      }, t.isSuspense = function(e) {
        return w(e) === c
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === i || e === v || e === a || e === c || e === d || e === h || "object" == typeof e && null !== e && (e.$$typeof === f || e.$$typeof === p || e.$$typeof === l || e.$$typeof === u || e.$$typeof === s || e.$$typeof === y || e.$$typeof === b || e[0] === m)
      }, t.typeOf = w
    },
    78091: (e, t, r) => {
      "use strict";
      e.exports = r(37455)
    },
    62312: (e, t, r) => {
      "use strict";
      r.d(t, {
        XX: () => R,
        nj: () => u.nj,
        rC: () => y
      });
      var n = r(11384),
        o = r(62229),
        a = r(44853),
        i = r.n(a),
        l = r(40347),
        u = r(69450),
        s = r(18113);
      const c = n.act;

      function d() {
        if ("undefined" != typeof globalThis) return globalThis;
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== r.g) return r.g;
        throw new Error("unable to locate global object")
      }

      function p(e) {
        d().IS_REACT_ACT_ENVIRONMENT = e
      }

      function f() {
        return d().IS_REACT_ACT_ENVIRONMENT
      }
      const b = (m = c, e => {
        const t = f();
        p(!0);
        try {
          let r = !1;
          const n = m((() => {
            const t = e();
            return null !== t && "object" == typeof t && "function" == typeof t.then && (r = !0), t
          }));
          if (r) {
            const e = n;
            return {
              then: (r, n) => {
                e.then((e => {
                  p(t), r(e)
                }), (e => {
                  p(t), n(e)
                }))
              }
            }
          }
          return p(t), n
        } catch (e) {
          throw p(t), e
        }
      });
      var m;
      const y = function() {
        return (0, u.rC)(...arguments)
      };
      Object.keys(u.rC).forEach((e => {
        y[e] = function() {
          return u.rC[e](...arguments)
        }
      }));
      const v = y.mouseEnter,
        h = y.mouseLeave;
      y.mouseEnter = function() {
        return v(...arguments), y.mouseOver(...arguments)
      }, y.mouseLeave = function() {
        return h(...arguments), y.mouseOut(...arguments)
      };
      const g = y.pointerEnter,
        w = y.pointerLeave;
      y.pointerEnter = function() {
        return g(...arguments), y.pointerOver(...arguments)
      }, y.pointerLeave = function() {
        return w(...arguments), y.pointerOut(...arguments)
      };
      const P = y.select;
      y.select = (e, t) => {
        P(e, t), e.focus(), y.keyUp(e, t)
      };
      const C = y.blur,
        E = y.focus;
      y.blur = function() {
        return y.focusOut(...arguments), C(...arguments)
      }, y.focus = function() {
        return y.focusIn(...arguments), E(...arguments)
      }, (0, u.jK)({
        unstable_advanceTimersWrapper: e => b(e),
        asyncWrapper: async e => {
          const t = f();
          p(!1);
          try {
            const t = await e();
            return await new Promise((e => {
              setTimeout((() => {
                e()
              }), 0), "undefined" == typeof jest || null === jest || !0 !== setTimeout._isMockFunction && !Object.prototype.hasOwnProperty.call(setTimeout, "clock") || jest.advanceTimersByTime(0)
            })), t
          } finally {
            p(t)
          }
        },
        eventWrapper: e => {
          let t;
          return b((() => {
            t = e()
          })), t
        }
      });
      const q = new Set,
        x = [];

      function O(e, t) {
        let r, {
          hydrate: n,
          ui: a,
          wrapper: i
        } = t;
        return n ? b((() => {
          r = l.c(e, i ? o.createElement(i, null, a) : a)
        })) : r = l.H(e), {
          hydrate() {
            if (!n) throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.")
          },
          render(e) {
            r.render(e)
          },
          unmount() {
            r.unmount()
          }
        }
      }

      function S(e) {
        return {
          hydrate(t) {
            i().hydrate(t, e)
          },
          render(t) {
            i().render(t, e)
          },
          unmount() {
            i().unmountComponentAtNode(e)
          }
        }
      }

      function j(e, t) {
        let {
          baseElement: r,
          container: n,
          hydrate: a,
          queries: i,
          root: l,
          wrapper: s
        } = t;
        const c = e => s ? o.createElement(s, null, e) : e;
        return b((() => {
          a ? l.hydrate(c(e), n) : l.render(c(e), n)
        })), {
          container: n,
          baseElement: r,
          debug: function(e, t, n) {
            return void 0 === e && (e = r), Array.isArray(e) ? e.forEach((e => console.log((0, u.fE)(e, t, n)))) : console.log((0, u.fE)(e, t, n))
          },
          unmount: () => {
            b((() => {
              l.unmount()
            }))
          },
          rerender: e => {
            j(c(e), {
              container: n,
              baseElement: r,
              root: l
            })
          },
          asFragment: () => {
            if ("function" == typeof document.createRange) return document.createRange().createContextualFragment(n.innerHTML); {
              const e = document.createElement("template");
              return e.innerHTML = n.innerHTML, e.content
            }
          },
          ...(0, u.E5)(r, i)
        }
      }

      function R(e, t) {
        let r, {
          container: n,
          baseElement: o = n,
          legacyRoot: a = !1,
          queries: i,
          hydrate: l = !1,
          wrapper: u
        } = void 0 === t ? {} : t;
        return o || (o = document.body), n || (n = o.appendChild(document.createElement("div"))), q.has(n) ? x.forEach((e => {
          e.container === n && (r = e.root)
        })) : (r = (a ? S : O)(n, {
          hydrate: l,
          ui: e,
          wrapper: u
        }), x.push({
          container: n,
          root: r
        }), q.add(n)), j(e, {
          container: n,
          baseElement: o,
          queries: i,
          hydrate: l,
          wrapper: u,
          root: r
        })
      }

      function _() {
        x.forEach((e => {
          let {
            root: t,
            container: r
          } = e;
          b((() => {
            t.unmount()
          })), r.parentNode === document.body && document.body.removeChild(r)
        })), x.length = 0, q.clear()
      }
      if ((void 0 === s || !s.env?.RTL_SKIP_AUTO_CLEANUP) && ("function" == typeof afterEach ? afterEach((() => {
          _()
        })) : "function" == typeof teardown && teardown((() => {
          _()
        })), "function" == typeof beforeAll && "function" == typeof afterAll)) {
        let e = f();
        beforeAll((() => {
          e = f(), p(!0)
        })), afterAll((() => {
          p(e)
        }))
      }
    },
    97693: e => {
      "use strict";
      e.exports = function() {
        let {
          onlyFirst: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g")
      }
    },
    30352: (e, t, r) => {
      "use strict";
      var n = r(13390),
        o = r(84220),
        a = o(n("String.prototype.indexOf"));
      e.exports = function(e, t) {
        var r = n(e, !!t);
        return "function" == typeof r && a(e, ".prototype.") > -1 ? o(r) : r
      }
    },
    84220: (e, t, r) => {
      "use strict";
      var n = r(92868),
        o = r(13390),
        a = r(65582),
        i = o("%TypeError%"),
        l = o("%Function.prototype.apply%"),
        u = o("%Function.prototype.call%"),
        s = o("%Reflect.apply%", !0) || n.call(u, l),
        c = o("%Object.defineProperty%", !0),
        d = o("%Math.max%");
      if (c) try {
        c({}, "a", {
          value: 1
        })
      } catch (e) {
        c = null
      }
      e.exports = function(e) {
        if ("function" != typeof e) throw new i("a function is required");
        var t = s(n, u, arguments);
        return a(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
      };
      var p = function() {
        return s(n, l, arguments)
      };
      c ? c(e.exports, "apply", {
        value: p
      }) : e.exports.apply = p
    },
    93616: (e, t, r) => {
      "use strict";
      var n = r(76421)(),
        o = r(13390),
        a = n && o("%Object.defineProperty%", !0);
      if (a) try {
        a({}, "a", {
          value: 1
        })
      } catch (e) {
        a = !1
      }
      var i = o("%SyntaxError%"),
        l = o("%TypeError%"),
        u = r(43402);
      e.exports = function(e, t, r) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new l("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t) throw new l("`property` must be a string or a symbol`");
        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new l("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new l("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new l("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new l("`loose`, if provided, must be a boolean");
        var n = arguments.length > 3 ? arguments[3] : null,
          o = arguments.length > 4 ? arguments[4] : null,
          s = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          d = !!u && u(e, t);
        if (a) a(e, t, {
          configurable: null === s && d ? d.configurable : !s,
          enumerable: null === n && d ? d.enumerable : !n,
          value: r,
          writable: null === o && d ? d.writable : !o
        });
        else {
          if (!c && (n || o || s)) throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
          e[t] = r
        }
      }
    },
    76421: (e, t, r) => {
      "use strict";
      var n = r(13390)("%Object.defineProperty%", !0),
        o = function() {
          if (n) try {
            return n({}, "a", {
              value: 1
            }), !0
          } catch (e) {
            return !1
          }
          return !1
        };
      o.hasArrayLengthDefineBug = function() {
        if (!o()) return null;
        try {
          return 1 !== n([], "length", {
            value: 1
          }).length
        } catch (e) {
          return !0
        }
      }, e.exports = o
    },
    65582: (e, t, r) => {
      "use strict";
      var n = r(13390),
        o = r(93616),
        a = r(76421)(),
        i = r(43402),
        l = n("%TypeError%"),
        u = n("%Math.floor%");
      e.exports = function(e, t) {
        if ("function" != typeof e) throw new l("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || u(t) !== t) throw new l("`length` must be a positive 32-bit integer");
        var r = arguments.length > 2 && !!arguments[2],
          n = !0,
          s = !0;
        if ("length" in e && i) {
          var c = i(e, "length");
          c && !c.configurable && (n = !1), c && !c.writable && (s = !1)
        }
        return (n || s || !r) && (a ? o(e, "length", t, !0, !0) : o(e, "length", t)), e
      }
    },
    43347: (e, t, r) => {
      "use strict";
      var n = r(32626),
        o = r(30352),
        a = r(85164),
        i = r(13390),
        l = r(41455),
        u = r(59273),
        s = r(43938),
        c = r(29841),
        d = r(5577),
        p = r(27752),
        f = r(16837),
        b = r(54),
        m = r(21147),
        y = r(78850),
        v = r(53660),
        h = r(90644),
        g = r(67352),
        w = r(3757),
        P = o("SharedArrayBuffer.prototype.byteLength", !0),
        C = o("Date.prototype.getTime"),
        E = Object.getPrototypeOf,
        q = o("Object.prototype.toString"),
        x = i("%Set%", !0),
        O = o("Map.prototype.has", !0),
        S = o("Map.prototype.get", !0),
        j = o("Map.prototype.size", !0),
        R = o("Set.prototype.add", !0),
        _ = o("Set.prototype.delete", !0),
        A = o("Set.prototype.has", !0),
        T = o("Set.prototype.size", !0);

      function M(e, t, r, n) {
        for (var o, a = l(e);
          (o = a.next()) && !o.done;)
          if (B(t, o.value, r, n)) return _(e, o.value), !0;
        return !1
      }

      function I(e) {
        return void 0 === e ? null : "object" != typeof e ? "symbol" != typeof e && ("string" != typeof e && "number" != typeof e || +e == +e) : void 0
      }

      function k(e, t, r, o, a, i) {
        var l = I(r);
        if (null != l) return l;
        var u = S(t, l),
          s = n({}, a, {
            strict: !1
          });
        return !(void 0 === u && !O(t, l) || !B(o, u, s, i)) && !O(e, l) && B(o, u, s, i)
      }

      function N(e, t, r) {
        var n = I(r);
        return null != n ? n : A(t, n) && !A(e, n)
      }

      function F(e, t, r, n, o, a) {
        for (var i, u, s = l(e);
          (i = s.next()) && !i.done;)
          if (B(r, u = i.value, o, a) && B(n, S(t, u), o, a)) return _(e, u), !0;
        return !1
      }

      function B(e, t, r, o) {
        var i = r || {};
        if (i.strict ? s(e, t) : e === t) return !0;
        if (v(e) !== v(t)) return !1;
        if (!e || !t || "object" != typeof e && "object" != typeof t) return i.strict ? s(e, t) : e == t;
        var u, _ = o.has(e),
          I = o.has(t);
        if (_ && I) {
          if (o.get(e) === o.get(t)) return !0
        } else u = {};
        return _ || o.set(e, u), I || o.set(t, u),
          function(e, t, r, o) {
            var i, u;
            if (typeof e != typeof t) return !1;
            if (null == e || null == t) return !1;
            if (q(e) !== q(t)) return !1;
            if (c(e) !== c(t)) return !1;
            if (d(e) !== d(t)) return !1;
            var s = e instanceof Error,
              v = t instanceof Error;
            if (s !== v) return !1;
            if ((s || v) && (e.name !== t.name || e.message !== t.message)) return !1;
            var _ = b(e),
              I = b(t);
            if (_ !== I) return !1;
            if ((_ || I) && (e.source !== t.source || a(e) !== a(t))) return !1;
            var U = f(e),
              D = f(t);
            if (U !== D) return !1;
            if ((U || D) && C(e) !== C(t)) return !1;
            if (r.strict && E && E(e) !== E(t)) return !1;
            var H = g(e),
              $ = g(t);
            if (H !== $) return !1;
            if (H || $) {
              if (e.length !== t.length) return !1;
              for (i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
              return !0
            }
            var W = L(e),
              z = L(t);
            if (W !== z) return !1;
            if (W || z) {
              if (e.length !== t.length) return !1;
              for (i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
              return !0
            }
            var V = p(e),
              G = p(t);
            if (V !== G) return !1;
            if (V || G) return w(e) === w(t) && "function" == typeof Uint8Array && B(new Uint8Array(e), new Uint8Array(t), r, o);
            var K = m(e),
              X = m(t);
            if (K !== X) return !1;
            if (K || X) return P(e) === P(t) && "function" == typeof Uint8Array && B(new Uint8Array(e), new Uint8Array(t), r, o);
            if (typeof e != typeof t) return !1;
            var Y = y(e),
              J = y(t);
            if (Y.length !== J.length) return !1;
            for (Y.sort(), J.sort(), i = Y.length - 1; i >= 0; i--)
              if (Y[i] != J[i]) return !1;
            for (i = Y.length - 1; i >= 0; i--)
              if (!B(e[u = Y[i]], t[u], r, o)) return !1;
            var Z = h(e),
              Q = h(t);
            return Z === Q && ("Set" === Z || "Set" === Q ? function(e, t, r, n) {
              if (T(e) !== T(t)) return !1;
              for (var o, a, i, u = l(e), s = l(t);
                (o = u.next()) && !o.done;)
                if (o.value && "object" == typeof o.value) i || (i = new x), R(i, o.value);
                else if (!A(t, o.value)) {
                if (r.strict) return !1;
                if (!N(e, t, o.value)) return !1;
                i || (i = new x), R(i, o.value)
              }
              if (i) {
                for (;
                  (a = s.next()) && !a.done;)
                  if (a.value && "object" == typeof a.value) {
                    if (!M(i, a.value, r.strict, n)) return !1
                  } else if (!r.strict && !A(e, a.value) && !M(i, a.value, r.strict, n)) return !1;
                return 0 === T(i)
              }
              return !0
            }(e, t, r, o) : "Map" !== Z || function(e, t, r, o) {
              if (j(e) !== j(t)) return !1;
              for (var a, i, u, s, c, d, p = l(e), f = l(t);
                (a = p.next()) && !a.done;)
                if (s = a.value[0], c = a.value[1], s && "object" == typeof s) u || (u = new x), R(u, s);
                else if (void 0 === (d = S(t, s)) && !O(t, s) || !B(c, d, r, o)) {
                if (r.strict) return !1;
                if (!k(e, t, s, c, r, o)) return !1;
                u || (u = new x), R(u, s)
              }
              if (u) {
                for (;
                  (i = f.next()) && !i.done;)
                  if (s = i.value[0], d = i.value[1], s && "object" == typeof s) {
                    if (!F(u, e, s, d, r, o)) return !1
                  } else if (!(r.strict || e.has(s) && B(S(e, s), d, r, o) || F(u, e, s, d, n({}, r, {
                    strict: !1
                  }), o))) return !1;
                return 0 === T(u)
              }
              return !0
            }(e, t, r, o))
          }(e, t, i, o)
      }

      function L(e) {
        return !(!e || "object" != typeof e || "number" != typeof e.length || "function" != typeof e.copy || "function" != typeof e.slice || e.length > 0 && "number" != typeof e[0] || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)))
      }
      e.exports = function(e, t, r) {
        return B(e, t, r, u())
      }
    },
    3757: (e, t, r) => {
      "use strict";
      var n = r(30352)("ArrayBuffer.prototype.byteLength", !0),
        o = r(27752);
      e.exports = function(e) {
        return o(e) ? n ? n(e) : e.byteLength : NaN
      }
    },
    27752: (e, t, r) => {
      "use strict";
      var n = r(84220),
        o = r(30352),
        a = r(13390),
        i = r(28934),
        l = a("ArrayBuffer", !0),
        u = a("Float32Array", !0),
        s = o("ArrayBuffer.prototype.byteLength", !0),
        c = l && !s && (new l).slice,
        d = c && n(c);
      e.exports = s || d ? function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          return s ? s(e) : d(e, 0), !0
        } catch (e) {
          return !1
        }
      } : u ? function(e) {
        try {
          return new u(e).buffer === e && !i(e)
        } catch (t) {
          return "object" == typeof e && "RangeError" === t.name
        }
      } : function(e) {
        return !1
      }
    },
    28934: (e, t, r) => {
      "use strict";
      var n = r(67352);
      e.exports = function(e) {
        return !!n(e)
      }
    },
    24352: e => {
      "use strict";
      var t, r = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap : null,
        n = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet : null;
      r || (t = function(e) {
        return !1
      });
      var o = r ? r.prototype.has : null,
        a = n ? n.prototype.has : null;
      t || o || (t = function(e) {
        return !1
      }), e.exports = t || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if (o.call(e, o), a) try {
            a.call(e, a)
          } catch (e) {
            return !0
          }
          return e instanceof r
        } catch (e) {}
        return !1
      }
    },
    62930: (e, t, r) => {
      "use strict";
      var n = r(13390),
        o = r(30352),
        a = n("%WeakSet%", !0),
        i = o("WeakSet.prototype.has", !0);
      if (i) {
        var l = o("WeakMap.prototype.has", !0);
        e.exports = function(e) {
          if (!e || "object" != typeof e) return !1;
          try {
            if (i(e, i), l) try {
              l(e, l)
            } catch (e) {
              return !0
            }
            return e instanceof a
          } catch (e) {}
          return !1
        }
      } else e.exports = function(e) {
        return !1
      }
    },
    16695: (e, t, r) => {
      "use strict";
      var n = r(78850),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        a = Object.prototype.toString,
        i = Array.prototype.concat,
        l = r(84723),
        u = r(774)(),
        s = function(e, t, r, n) {
          if (t in e)
            if (!0 === n) {
              if (e[t] === r) return
            } else if ("function" != typeof(o = n) || "[object Function]" !== a.call(o) || !n()) return;
          var o;
          u ? l(e, t, r, !0) : l(e, t, r)
        },
        c = function(e, t) {
          var r = arguments.length > 2 ? arguments[2] : {},
            a = n(t);
          o && (a = i.call(a, Object.getOwnPropertySymbols(t)));
          for (var l = 0; l < a.length; l += 1) s(e, a[l], t[a[l]], r[a[l]])
        };
      c.supportsDescriptors = !!u, e.exports = c
    },
    84723: (e, t, r) => {
      "use strict";
      var n = r(774)(),
        o = r(13390),
        a = n && o("%Object.defineProperty%", !0);
      if (a) try {
        a({}, "a", {
          value: 1
        })
      } catch (e) {
        a = !1
      }
      var i = o("%SyntaxError%"),
        l = o("%TypeError%"),
        u = r(43402);
      e.exports = function(e, t, r) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new l("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t) throw new l("`property` must be a string or a symbol`");
        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new l("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new l("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new l("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new l("`loose`, if provided, must be a boolean");
        var n = arguments.length > 3 ? arguments[3] : null,
          o = arguments.length > 4 ? arguments[4] : null,
          s = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          d = !!u && u(e, t);
        if (a) a(e, t, {
          configurable: null === s && d ? d.configurable : !s,
          enumerable: null === n && d ? d.enumerable : !n,
          value: r,
          writable: null === o && d ? d.writable : !o
        });
        else {
          if (!c && (n || o || s)) throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
          e[t] = r
        }
      }
    },
    774: (e, t, r) => {
      "use strict";
      var n = r(13390)("%Object.defineProperty%", !0),
        o = function() {
          if (n) try {
            return n({}, "a", {
              value: 1
            }), !0
          } catch (e) {
            return !1
          }
          return !1
        };
      o.hasArrayLengthDefineBug = function() {
        if (!o()) return null;
        try {
          return 1 !== n([], "length", {
            value: 1
          }).length
        } catch (e) {
          return !0
        }
      }, e.exports = o
    },
    57579: (e, t, r) => {
      "use strict";
      var n = r(86011),
        o = Object.prototype.toString,
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r) {
        if (!n(t)) throw new TypeError("iterator must be a function");
        var i;
        arguments.length >= 3 && (i = r), "[object Array]" === o.call(e) ? function(e, t, r) {
          for (var n = 0, o = e.length; n < o; n++) a.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e))
        }(e, t, i) : "string" == typeof e ? function(e, t, r) {
          for (var n = 0, o = e.length; n < o; n++) null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e)
        }(e, t, i) : function(e, t, r) {
          for (var n in e) a.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e))
        }(e, t, i)
      }
    },
    5064: e => {
      "use strict";
      var t = Object.prototype.toString,
        r = Math.max,
        n = function(e, t) {
          for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
          for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
          return r
        };
      e.exports = function(e) {
        var o = this;
        if ("function" != typeof o || "[object Function]" !== t.apply(o)) throw new TypeError("Function.prototype.bind called on incompatible " + o);
        for (var a, i = function(e, t) {
            for (var r = [], n = 1, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
            return r
          }(arguments), l = r(0, o.length - i.length), u = [], s = 0; s < l; s++) u[s] = "$" + s;
        if (a = Function("binder", "return function (" + function(e, t) {
            for (var r = "", n = 0; n < e.length; n += 1) r += e[n], n + 1 < e.length && (r += ",");
            return r
          }(u) + "){ return binder.apply(this,arguments); }")((function() {
            if (this instanceof a) {
              var t = o.apply(this, n(i, arguments));
              return Object(t) === t ? t : this
            }
            return o.apply(e, n(i, arguments))
          })), o.prototype) {
          var c = function() {};
          c.prototype = o.prototype, a.prototype = new c, c.prototype = null
        }
        return a
      }
    },
    92868: (e, t, r) => {
      "use strict";
      var n = r(5064);
      e.exports = Function.prototype.bind || n
    },
    28455: e => {
      "use strict";
      var t = function() {
          return "string" == typeof
          function() {}.name
        },
        r = Object.getOwnPropertyDescriptor;
      if (r) try {
        r([], "length")
      } catch (e) {
        r = null
      }
      t.functionsHaveConfigurableNames = function() {
        if (!t() || !r) return !1;
        var e = r((function() {}), "name");
        return !!e && !!e.configurable
      };
      var n = Function.prototype.bind;
      t.boundFunctionsHaveNames = function() {
        return t() && "function" == typeof n && "" !== function() {}.bind().name
      }, e.exports = t
    },
    13390: (e, t, r) => {
      "use strict";
      var n, o = SyntaxError,
        a = Function,
        i = TypeError,
        l = function(e) {
          try {
            return a('"use strict"; return (' + e + ").constructor;")()
          } catch (e) {}
        },
        u = Object.getOwnPropertyDescriptor;
      if (u) try {
        u({}, "")
      } catch (e) {
        u = null
      }
      var s = function() {
          throw new i
        },
        c = u ? function() {
          try {
            return s
          } catch (e) {
            try {
              return u(arguments, "callee").get
            } catch (e) {
              return s
            }
          }
        }() : s,
        d = r(8832)(),
        p = r(79769)(),
        f = Object.getPrototypeOf || (p ? function(e) {
          return e.__proto__
        } : null),
        b = {},
        m = "undefined" != typeof Uint8Array && f ? f(Uint8Array) : n,
        y = {
          "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
          "%ArrayIteratorPrototype%": d && f ? f([][Symbol.iterator]()) : n,
          "%AsyncFromSyncIteratorPrototype%": n,
          "%AsyncFunction%": b,
          "%AsyncGenerator%": b,
          "%AsyncGeneratorFunction%": b,
          "%AsyncIteratorPrototype%": b,
          "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
          "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
          "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? n : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
          "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
          "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
          "%Function%": a,
          "%GeneratorFunction%": b,
          "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": d && f ? f(f([][Symbol.iterator]())) : n,
          "%JSON%": "object" == typeof JSON ? JSON : n,
          "%Map%": "undefined" == typeof Map ? n : Map,
          "%MapIteratorPrototype%": "undefined" != typeof Map && d && f ? f((new Map)[Symbol.iterator]()) : n,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? n : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? n : Set,
          "%SetIteratorPrototype%": "undefined" != typeof Set && d && f ? f((new Set)[Symbol.iterator]()) : n,
          "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": d && f ? f("" [Symbol.iterator]()) : n,
          "%Symbol%": d ? Symbol : n,
          "%SyntaxError%": o,
          "%ThrowTypeError%": c,
          "%TypedArray%": m,
          "%TypeError%": i,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
          "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
        };
      if (f) try {
        null.error
      } catch (e) {
        var v = f(f(e));
        y["%Error.prototype%"] = v
      }
      var h = function e(t) {
          var r;
          if ("%AsyncFunction%" === t) r = l("async function () {}");
          else if ("%GeneratorFunction%" === t) r = l("function* () {}");
          else if ("%AsyncGeneratorFunction%" === t) r = l("async function* () {}");
          else if ("%AsyncGenerator%" === t) {
            var n = e("%AsyncGeneratorFunction%");
            n && (r = n.prototype)
          } else if ("%AsyncIteratorPrototype%" === t) {
            var o = e("%AsyncGenerator%");
            o && f && (r = f(o.prototype))
          }
          return y[t] = r, r
        },
        g = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        w = r(92868),
        P = r(74814),
        C = w.call(Function.call, Array.prototype.concat),
        E = w.call(Function.apply, Array.prototype.splice),
        q = w.call(Function.call, String.prototype.replace),
        x = w.call(Function.call, String.prototype.slice),
        O = w.call(Function.call, RegExp.prototype.exec),
        S = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        j = /\\(\\)?/g,
        R = function(e, t) {
          var r, n = e;
          if (P(g, n) && (n = "%" + (r = g[n])[0] + "%"), P(y, n)) {
            var a = y[n];
            if (a === b && (a = h(n)), void 0 === a && !t) throw new i("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
              alias: r,
              name: n,
              value: a
            }
          }
          throw new o("intrinsic " + e + " does not exist!")
        };
      e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new i("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new i('"allowMissing" argument must be a boolean');
        if (null === O(/^%?[^%]*%?$/, e)) throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var r = function(e) {
            var t = x(e, 0, 1),
              r = x(e, -1);
            if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
            var n = [];
            return q(e, S, (function(e, t, r, o) {
              n[n.length] = r ? q(o, j, "$1") : t || e
            })), n
          }(e),
          n = r.length > 0 ? r[0] : "",
          a = R("%" + n + "%", t),
          l = a.name,
          s = a.value,
          c = !1,
          d = a.alias;
        d && (n = d[0], E(r, C([0, 1], d)));
        for (var p = 1, f = !0; p < r.length; p += 1) {
          var b = r[p],
            m = x(b, 0, 1),
            v = x(b, -1);
          if (('"' === m || "'" === m || "`" === m || '"' === v || "'" === v || "`" === v) && m !== v) throw new o("property names with quotes must have matching quotes");
          if ("constructor" !== b && f || (c = !0), P(y, l = "%" + (n += "." + b) + "%")) s = y[l];
          else if (null != s) {
            if (!(b in s)) {
              if (!t) throw new i("base intrinsic for " + e + " exists, but the property is not available.");
              return
            }
            if (u && p + 1 >= r.length) {
              var h = u(s, b);
              s = (f = !!h) && "get" in h && !("originalValue" in h.get) ? h.get : s[b]
            } else f = P(s, b), s = s[b];
            f && !c && (y[l] = s)
          }
        }
        return s
      }
    },
    79769: e => {
      "use strict";
      var t = {
          foo: {}
        },
        r = Object;
      e.exports = function() {
        return {
          __proto__: t
        }.foo === t.foo && !({
            __proto__: null
          }
          instanceof r)
      }
    },
    74814: (e, t, r) => {
      "use strict";
      var n = Function.prototype.call,
        o = Object.prototype.hasOwnProperty,
        a = r(92868);
      e.exports = a.call(n, o)
    },
    43402: (e, t, r) => {
      "use strict";
      var n = r(13390)("%Object.getOwnPropertyDescriptor%", !0);
      if (n) try {
        n([], "length")
      } catch (e) {
        n = null
      }
      e.exports = n
    },
    84701: e => {
      "use strict";
      var t = "undefined" != typeof BigInt && BigInt;
      e.exports = function() {
        return "function" == typeof t && "function" == typeof BigInt && "bigint" == typeof t(42) && "bigint" == typeof BigInt(42)
      }
    },
    8832: (e, t, r) => {
      "use strict";
      var n = "undefined" != typeof Symbol && Symbol,
        o = r(39746);
      e.exports = function() {
        return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
      }
    },
    39746: e => {
      "use strict";
      e.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          r = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (t in e[t] = 42, e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
        var n = Object.getOwnPropertySymbols(e);
        if (1 !== n.length || n[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== o.value || !0 !== o.enumerable) return !1
        }
        return !0
      }
    },
    29841: (e, t, r) => {
      "use strict";
      var n = r(53728)(),
        o = r(30352)("Object.prototype.toString"),
        a = function(e) {
          return !(n && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === o(e)
        },
        i = function(e) {
          return !!a(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "[object Function]" === o(e.callee)
        },
        l = function() {
          return a(arguments)
        }();
      a.isLegacyArguments = i, e.exports = l ? a : i
    },
    53728: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    3652: (e, t, r) => {
      "use strict";
      if (r(84701)()) {
        var n = BigInt.prototype.valueOf;
        e.exports = function(e) {
          return null != e && "boolean" != typeof e && "string" != typeof e && "number" != typeof e && "symbol" != typeof e && "function" != typeof e && ("bigint" == typeof e || function(e) {
            try {
              return n.call(e), !0
            } catch (e) {}
            return !1
          }(e))
        }
      } else e.exports = function(e) {
        return !1
      }
    },
    13487: (e, t, r) => {
      "use strict";
      var n = r(30352),
        o = n("Boolean.prototype.toString"),
        a = n("Object.prototype.toString"),
        i = r(37718)();
      e.exports = function(e) {
        return "boolean" == typeof e || null !== e && "object" == typeof e && (i && Symbol.toStringTag in e ? function(e) {
          try {
            return o(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object Boolean]" === a(e))
      }
    },
    37718: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    86011: e => {
      "use strict";
      var t, r, n = Function.prototype.toString,
        o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof o && "function" == typeof Object.defineProperty) try {
        t = Object.defineProperty({}, "length", {
          get: function() {
            throw r
          }
        }), r = {}, o((function() {
          throw 42
        }), null, t)
      } catch (e) {
        e !== r && (o = null)
      } else o = null;
      var a = /^\s*class\b/,
        i = function(e) {
          try {
            var t = n.call(e);
            return a.test(t)
          } catch (e) {
            return !1
          }
        },
        l = function(e) {
          try {
            return !i(e) && (n.call(e), !0)
          } catch (e) {
            return !1
          }
        },
        u = Object.prototype.toString,
        s = "function" == typeof Symbol && !!Symbol.toStringTag,
        c = !(0 in [, ]),
        d = function() {
          return !1
        };
      if ("object" == typeof document) {
        var p = document.all;
        u.call(p) === u.call(document.all) && (d = function(e) {
          if ((c || !e) && (void 0 === e || "object" == typeof e)) try {
            var t = u.call(e);
            return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
          } catch (e) {}
          return !1
        })
      }
      e.exports = o ? function(e) {
        if (d(e)) return !0;
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        try {
          o(e, null, t)
        } catch (e) {
          if (e !== r) return !1
        }
        return !i(e) && l(e)
      } : function(e) {
        if (d(e)) return !0;
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        if (s) return l(e);
        if (i(e)) return !1;
        var t = u.call(e);
        return !("[object Function]" !== t && "[object GeneratorFunction]" !== t && !/^\[object HTML/.test(t)) && l(e)
      }
    },
    16837: (e, t, r) => {
      "use strict";
      var n = Date.prototype.getDay,
        o = Object.prototype.toString,
        a = r(3972)();
      e.exports = function(e) {
        return "object" == typeof e && null !== e && (a ? function(e) {
          try {
            return n.call(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object Date]" === o.call(e))
      }
    },
    3972: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    78871: e => {
      "use strict";
      var t, r = "function" == typeof Map && Map.prototype ? Map : null,
        n = "function" == typeof Set && Set.prototype ? Set : null;
      r || (t = function(e) {
        return !1
      });
      var o = r ? Map.prototype.has : null,
        a = n ? Set.prototype.has : null;
      t || o || (t = function(e) {
        return !1
      }), e.exports = t || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if (o.call(e), a) try {
            a.call(e)
          } catch (e) {
            return !0
          }
          return e instanceof r
        } catch (e) {}
        return !1
      }
    },
    29438: (e, t, r) => {
      "use strict";
      var n = Number.prototype.toString,
        o = Object.prototype.toString,
        a = r(60125)();
      e.exports = function(e) {
        return "number" == typeof e || "object" == typeof e && (a ? function(e) {
          try {
            return n.call(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object Number]" === o.call(e))
      }
    },
    60125: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    54: (e, t, r) => {
      "use strict";
      var n, o, a, i, l = r(30352),
        u = r(93669)();
      if (u) {
        n = l("Object.prototype.hasOwnProperty"), o = l("RegExp.prototype.exec"), a = {};
        var s = function() {
          throw a
        };
        i = {
          toString: s,
          valueOf: s
        }, "symbol" == typeof Symbol.toPrimitive && (i[Symbol.toPrimitive] = s)
      }
      var c = l("Object.prototype.toString"),
        d = Object.getOwnPropertyDescriptor;
      e.exports = u ? function(e) {
        if (!e || "object" != typeof e) return !1;
        var t = d(e, "lastIndex");
        if (!t || !n(t, "value")) return !1;
        try {
          o(e, i)
        } catch (e) {
          return e === a
        }
      } : function(e) {
        return !(!e || "object" != typeof e && "function" != typeof e) && "[object RegExp]" === c(e)
      }
    },
    93669: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    3065: e => {
      "use strict";
      var t, r = "function" == typeof Map && Map.prototype ? Map : null,
        n = "function" == typeof Set && Set.prototype ? Set : null;
      n || (t = function(e) {
        return !1
      });
      var o = r ? Map.prototype.has : null,
        a = n ? Set.prototype.has : null;
      t || a || (t = function(e) {
        return !1
      }), e.exports = t || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if (a.call(e), o) try {
            o.call(e)
          } catch (e) {
            return !0
          }
          return e instanceof n
        } catch (e) {}
        return !1
      }
    },
    21147: (e, t, r) => {
      "use strict";
      var n = r(30352)("SharedArrayBuffer.prototype.byteLength", !0);
      e.exports = n ? function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          return n(e), !0
        } catch (e) {
          return !1
        }
      } : function(e) {
        return !1
      }
    },
    90154: (e, t, r) => {
      "use strict";
      var n = String.prototype.valueOf,
        o = Object.prototype.toString,
        a = r(51785)();
      e.exports = function(e) {
        return "string" == typeof e || "object" == typeof e && (a ? function(e) {
          try {
            return n.call(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object String]" === o.call(e))
      }
    },
    51785: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    73615: (e, t, r) => {
      "use strict";
      var n = Object.prototype.toString;
      if (r(8832)()) {
        var o = Symbol.prototype.toString,
          a = /^Symbol\(.*\)$/;
        e.exports = function(e) {
          if ("symbol" == typeof e) return !0;
          if ("[object Symbol]" !== n.call(e)) return !1;
          try {
            return function(e) {
              return "symbol" == typeof e.valueOf() && a.test(o.call(e))
            }(e)
          } catch (e) {
            return !1
          }
        }
      } else e.exports = function(e) {
        return !1
      }
    },
    5577: e => {
      var t = {}.toString;
      e.exports = Array.isArray || function(e) {
        return "[object Array]" == t.call(e)
      }
    },
    74581: (e, t, r) => {
      var n, o = function() {
        var e = String.fromCharCode,
          t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
          n = {};

        function o(e, t) {
          if (!n[e]) {
            n[e] = {};
            for (var r = 0; r < e.length; r++) n[e][e.charAt(r)] = r
          }
          return n[e][t]
        }
        var a = {
          compressToBase64: function(e) {
            if (null == e) return "";
            var r = a._compress(e, 6, (function(e) {
              return t.charAt(e)
            }));
            switch (r.length % 4) {
              default:
              case 0:
                return r;
              case 1:
                return r + "===";
              case 2:
                return r + "==";
              case 3:
                return r + "="
            }
          },
          decompressFromBase64: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32, (function(r) {
              return o(t, e.charAt(r))
            }))
          },
          compressToUTF16: function(t) {
            return null == t ? "" : a._compress(t, 15, (function(t) {
              return e(t + 32)
            })) + " "
          },
          decompressFromUTF16: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 16384, (function(t) {
              return e.charCodeAt(t) - 32
            }))
          },
          compressToUint8Array: function(e) {
            for (var t = a.compress(e), r = new Uint8Array(2 * t.length), n = 0, o = t.length; n < o; n++) {
              var i = t.charCodeAt(n);
              r[2 * n] = i >>> 8, r[2 * n + 1] = i % 256
            }
            return r
          },
          decompressFromUint8Array: function(t) {
            if (null == t) return a.decompress(t);
            for (var r = new Array(t.length / 2), n = 0, o = r.length; n < o; n++) r[n] = 256 * t[2 * n] + t[2 * n + 1];
            var i = [];
            return r.forEach((function(t) {
              i.push(e(t))
            })), a.decompress(i.join(""))
          },
          compressToEncodedURIComponent: function(e) {
            return null == e ? "" : a._compress(e, 6, (function(e) {
              return r.charAt(e)
            }))
          },
          decompressFromEncodedURIComponent: function(e) {
            return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, (function(t) {
              return o(r, e.charAt(t))
            })))
          },
          compress: function(t) {
            return a._compress(t, 16, (function(t) {
              return e(t)
            }))
          },
          _compress: function(e, t, r) {
            if (null == e) return "";
            var n, o, a, i = {},
              l = {},
              u = "",
              s = "",
              c = "",
              d = 2,
              p = 3,
              f = 2,
              b = [],
              m = 0,
              y = 0;
            for (a = 0; a < e.length; a += 1)
              if (u = e.charAt(a), Object.prototype.hasOwnProperty.call(i, u) || (i[u] = p++, l[u] = !0), s = c + u, Object.prototype.hasOwnProperty.call(i, s)) c = s;
              else {
                if (Object.prototype.hasOwnProperty.call(l, c)) {
                  if (c.charCodeAt(0) < 256) {
                    for (n = 0; n < f; n++) m <<= 1, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++;
                    for (o = c.charCodeAt(0), n = 0; n < 8; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1
                  } else {
                    for (o = 1, n = 0; n < f; n++) m = m << 1 | o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o = 0;
                    for (o = c.charCodeAt(0), n = 0; n < 16; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1
                  }
                  0 == --d && (d = Math.pow(2, f), f++), delete l[c]
                } else
                  for (o = i[c], n = 0; n < f; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1;
                0 == --d && (d = Math.pow(2, f), f++), i[s] = p++, c = String(u)
              } if ("" !== c) {
              if (Object.prototype.hasOwnProperty.call(l, c)) {
                if (c.charCodeAt(0) < 256) {
                  for (n = 0; n < f; n++) m <<= 1, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++;
                  for (o = c.charCodeAt(0), n = 0; n < 8; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1
                } else {
                  for (o = 1, n = 0; n < f; n++) m = m << 1 | o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o = 0;
                  for (o = c.charCodeAt(0), n = 0; n < 16; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1
                }
                0 == --d && (d = Math.pow(2, f), f++), delete l[c]
              } else
                for (o = i[c], n = 0; n < f; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1;
              0 == --d && (d = Math.pow(2, f), f++)
            }
            for (o = 2, n = 0; n < f; n++) m = m << 1 | 1 & o, y == t - 1 ? (y = 0, b.push(r(m)), m = 0) : y++, o >>= 1;
            for (;;) {
              if (m <<= 1, y == t - 1) {
                b.push(r(m));
                break
              }
              y++
            }
            return b.join("")
          },
          decompress: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32768, (function(t) {
              return e.charCodeAt(t)
            }))
          },
          _decompress: function(t, r, n) {
            var o, a, i, l, u, s, c, d = [],
              p = 4,
              f = 4,
              b = 3,
              m = "",
              y = [],
              v = {
                val: n(0),
                position: r,
                index: 1
              };
            for (o = 0; o < 3; o += 1) d[o] = o;
            for (i = 0, u = Math.pow(2, 2), s = 1; s != u;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
            switch (i) {
              case 0:
                for (i = 0, u = Math.pow(2, 8), s = 1; s != u;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                c = e(i);
                break;
              case 1:
                for (i = 0, u = Math.pow(2, 16), s = 1; s != u;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                c = e(i);
                break;
              case 2:
                return ""
            }
            for (d[3] = c, a = c, y.push(c);;) {
              if (v.index > t) return "";
              for (i = 0, u = Math.pow(2, b), s = 1; s != u;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
              switch (c = i) {
                case 0:
                  for (i = 0, u = Math.pow(2, 8), s = 1; s != u;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                  d[f++] = e(i), c = f - 1, p--;
                  break;
                case 1:
                  for (i = 0, u = Math.pow(2, 16), s = 1; s != u;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                  d[f++] = e(i), c = f - 1, p--;
                  break;
                case 2:
                  return y.join("")
              }
              if (0 == p && (p = Math.pow(2, b), b++), d[c]) m = d[c];
              else {
                if (c !== f) return null;
                m = a + a.charAt(0)
              }
              y.push(m), d[f++] = a + m.charAt(0), a = m, 0 == --p && (p = Math.pow(2, b), b++)
            }
          }
        };
        return a
      }();
      void 0 === (n = function() {
        return o
      }.call(t, r, t, e)) || (e.exports = n)
    },
    32210: (e, t, r) => {
      var n = "function" == typeof Map && Map.prototype,
        o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        a = n && o && "function" == typeof o.get ? o.get : null,
        i = n && Map.prototype.forEach,
        l = "function" == typeof Set && Set.prototype,
        u = Object.getOwnPropertyDescriptor && l ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        s = l && u && "function" == typeof u.get ? u.get : null,
        c = l && Set.prototype.forEach,
        d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
        p = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
        f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
        b = Boolean.prototype.valueOf,
        m = Object.prototype.toString,
        y = Function.prototype.toString,
        v = String.prototype.match,
        h = String.prototype.slice,
        g = String.prototype.replace,
        w = String.prototype.toUpperCase,
        P = String.prototype.toLowerCase,
        C = RegExp.prototype.test,
        E = Array.prototype.concat,
        q = Array.prototype.join,
        x = Array.prototype.slice,
        O = Math.floor,
        S = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        j = Object.getOwnPropertySymbols,
        R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
        _ = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        A = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
        T = Object.prototype.propertyIsEnumerable,
        M = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
          return e.__proto__
        } : null);

      function I(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || C.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof e) {
          var n = e < 0 ? -O(-e) : O(e);
          if (n !== e) {
            var o = String(n),
              a = h.call(t, o.length + 1);
            return g.call(o, r, "$&_") + "." + g.call(g.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
          }
        }
        return g.call(t, r, "$&_")
      }
      var k = r(14967),
        N = k.custom,
        F = H(N) ? N : null;

      function B(e, t, r) {
        var n = "double" === (r.quoteStyle || t) ? '"' : "'";
        return n + e + n
      }

      function L(e) {
        return g.call(String(e), /"/g, "&quot;")
      }

      function U(e) {
        return !("[object Array]" !== z(e) || A && "object" == typeof e && A in e)
      }

      function D(e) {
        return !("[object RegExp]" !== z(e) || A && "object" == typeof e && A in e)
      }

      function H(e) {
        if (_) return e && "object" == typeof e && e instanceof Symbol;
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || !R) return !1;
        try {
          return R.call(e), !0
        } catch (e) {}
        return !1
      }
      e.exports = function e(t, n, o, l) {
        var u = n || {};
        if (W(u, "quoteStyle") && "single" !== u.quoteStyle && "double" !== u.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (W(u, "maxStringLength") && ("number" == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = !W(u, "customInspect") || u.customInspect;
        if ("boolean" != typeof m && "symbol" !== m) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (W(u, "indent") && null !== u.indent && "\t" !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (W(u, "numericSeparator") && "boolean" != typeof u.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var w = u.numericSeparator;
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("boolean" == typeof t) return t ? "true" : "false";
        if ("string" == typeof t) return G(t, u);
        if ("number" == typeof t) {
          if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
          var C = String(t);
          return w ? I(t, C) : C
        }
        if ("bigint" == typeof t) {
          var O = String(t) + "n";
          return w ? I(t, O) : O
        }
        var j = void 0 === u.depth ? 5 : u.depth;
        if (void 0 === o && (o = 0), o >= j && j > 0 && "object" == typeof t) return U(t) ? "[Array]" : "[Object]";
        var N, $ = function(e, t) {
          var r;
          if ("\t" === e.indent) r = "\t";
          else {
            if (!("number" == typeof e.indent && e.indent > 0)) return null;
            r = q.call(Array(e.indent + 1), " ")
          }
          return {
            base: r,
            prev: q.call(Array(t + 1), r)
          }
        }(u, o);
        if (void 0 === l) l = [];
        else if (V(l, t) >= 0) return "[Circular]";

        function K(t, r, n) {
          if (r && (l = x.call(l)).push(r), n) {
            var a = {
              depth: u.depth
            };
            return W(u, "quoteStyle") && (a.quoteStyle = u.quoteStyle), e(t, a, o + 1, l)
          }
          return e(t, u, o + 1, l)
        }
        if ("function" == typeof t && !D(t)) {
          var ee = function(e) {
              if (e.name) return e.name;
              var t = v.call(y.call(e), /^function\s*([\w$]+)/);
              return t ? t[1] : null
            }(t),
            te = Q(t, K);
          return "[Function" + (ee ? ": " + ee : " (anonymous)") + "]" + (te.length > 0 ? " { " + q.call(te, ", ") + " }" : "")
        }
        if (H(t)) {
          var re = _ ? g.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : R.call(t);
          return "object" != typeof t || _ ? re : X(re)
        }
        if ((N = t) && "object" == typeof N && ("undefined" != typeof HTMLElement && N instanceof HTMLElement || "string" == typeof N.nodeName && "function" == typeof N.getAttribute)) {
          for (var ne = "<" + P.call(String(t.nodeName)), oe = t.attributes || [], ae = 0; ae < oe.length; ae++) ne += " " + oe[ae].name + "=" + B(L(oe[ae].value), "double", u);
          return ne += ">", t.childNodes && t.childNodes.length && (ne += "..."), ne + "</" + P.call(String(t.nodeName)) + ">"
        }
        if (U(t)) {
          if (0 === t.length) return "[]";
          var ie = Q(t, K);
          return $ && ! function(e) {
            for (var t = 0; t < e.length; t++)
              if (V(e[t], "\n") >= 0) return !1;
            return !0
          }(ie) ? "[" + Z(ie, $) + "]" : "[ " + q.call(ie, ", ") + " ]"
        }
        if (function(e) {
            return !("[object Error]" !== z(e) || A && "object" == typeof e && A in e)
          }(t)) {
          var le = Q(t, K);
          return "cause" in Error.prototype || !("cause" in t) || T.call(t, "cause") ? 0 === le.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + q.call(le, ", ") + " }" : "{ [" + String(t) + "] " + q.call(E.call("[cause]: " + K(t.cause), le), ", ") + " }"
        }
        if ("object" == typeof t && m) {
          if (F && "function" == typeof t[F] && k) return k(t, {
            depth: j - o
          });
          if ("symbol" !== m && "function" == typeof t.inspect) return t.inspect()
        }
        if (function(e) {
            if (!a || !e || "object" != typeof e) return !1;
            try {
              a.call(e);
              try {
                s.call(e)
              } catch (e) {
                return !0
              }
              return e instanceof Map
            } catch (e) {}
            return !1
          }(t)) {
          var ue = [];
          return i && i.call(t, (function(e, r) {
            ue.push(K(r, t, !0) + " => " + K(e, t))
          })), J("Map", a.call(t), ue, $)
        }
        if (function(e) {
            if (!s || !e || "object" != typeof e) return !1;
            try {
              s.call(e);
              try {
                a.call(e)
              } catch (e) {
                return !0
              }
              return e instanceof Set
            } catch (e) {}
            return !1
          }(t)) {
          var se = [];
          return c && c.call(t, (function(e) {
            se.push(K(e, t))
          })), J("Set", s.call(t), se, $)
        }
        if (function(e) {
            if (!d || !e || "object" != typeof e) return !1;
            try {
              d.call(e, d);
              try {
                p.call(e, p)
              } catch (e) {
                return !0
              }
              return e instanceof WeakMap
            } catch (e) {}
            return !1
          }(t)) return Y("WeakMap");
        if (function(e) {
            if (!p || !e || "object" != typeof e) return !1;
            try {
              p.call(e, p);
              try {
                d.call(e, d)
              } catch (e) {
                return !0
              }
              return e instanceof WeakSet
            } catch (e) {}
            return !1
          }(t)) return Y("WeakSet");
        if (function(e) {
            if (!f || !e || "object" != typeof e) return !1;
            try {
              return f.call(e), !0
            } catch (e) {}
            return !1
          }(t)) return Y("WeakRef");
        if (function(e) {
            return !("[object Number]" !== z(e) || A && "object" == typeof e && A in e)
          }(t)) return X(K(Number(t)));
        if (function(e) {
            if (!e || "object" != typeof e || !S) return !1;
            try {
              return S.call(e), !0
            } catch (e) {}
            return !1
          }(t)) return X(K(S.call(t)));
        if (function(e) {
            return !("[object Boolean]" !== z(e) || A && "object" == typeof e && A in e)
          }(t)) return X(b.call(t));
        if (function(e) {
            return !("[object String]" !== z(e) || A && "object" == typeof e && A in e)
          }(t)) return X(K(String(t)));
        if ("undefined" != typeof window && t === window) return "{ [object Window] }";
        if (t === r.g) return "{ [object globalThis] }";
        if (! function(e) {
            return !("[object Date]" !== z(e) || A && "object" == typeof e && A in e)
          }(t) && !D(t)) {
          var ce = Q(t, K),
            de = M ? M(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            pe = t instanceof Object ? "" : "null prototype",
            fe = !de && A && Object(t) === t && A in t ? h.call(z(t), 8, -1) : pe ? "Object" : "",
            be = (de || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (fe || pe ? "[" + q.call(E.call([], fe || [], pe || []), ": ") + "] " : "");
          return 0 === ce.length ? be + "{}" : $ ? be + "{" + Z(ce, $) + "}" : be + "{ " + q.call(ce, ", ") + " }"
        }
        return String(t)
      };
      var $ = Object.prototype.hasOwnProperty || function(e) {
        return e in this
      };

      function W(e, t) {
        return $.call(e, t)
      }

      function z(e) {
        return m.call(e)
      }

      function V(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
          if (e[r] === t) return r;
        return -1
      }

      function G(e, t) {
        if (e.length > t.maxStringLength) {
          var r = e.length - t.maxStringLength,
            n = "... " + r + " more character" + (r > 1 ? "s" : "");
          return G(h.call(e, 0, t.maxStringLength), t) + n
        }
        return B(g.call(g.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, K), "single", t)
      }

      function K(e) {
        var t = e.charCodeAt(0),
          r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
          } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16))
      }

      function X(e) {
        return "Object(" + e + ")"
      }

      function Y(e) {
        return e + " { ? }"
      }

      function J(e, t, r, n) {
        return e + " (" + t + ") {" + (n ? Z(r, n) : q.call(r, ", ")) + "}"
      }

      function Z(e, t) {
        if (0 === e.length) return "";
        var r = "\n" + t.prev + t.base;
        return r + q.call(e, "," + r) + "\n" + t.prev
      }

      function Q(e, t) {
        var r = U(e),
          n = [];
        if (r) {
          n.length = e.length;
          for (var o = 0; o < e.length; o++) n[o] = W(e, o) ? t(e[o], e) : ""
        }
        var a, i = "function" == typeof j ? j(e) : [];
        if (_) {
          a = {};
          for (var l = 0; l < i.length; l++) a["$" + i[l]] = i[l]
        }
        for (var u in e) W(e, u) && (r && String(Number(u)) === u && u < e.length || _ && a["$" + u] instanceof Symbol || (C.call(/[^\w$]/, u) ? n.push(t(u, e) + ": " + t(e[u], e)) : n.push(u + ": " + t(e[u], e))));
        if ("function" == typeof j)
          for (var s = 0; s < i.length; s++) T.call(e, i[s]) && n.push("[" + t(i[s]) + "]: " + t(e[i[s]], e));
        return n
      }
    },
    23994: e => {
      "use strict";
      var t = function(e) {
        return e != e
      };
      e.exports = function(e, r) {
        return 0 === e && 0 === r ? 1 / e == 1 / r : e === r || !(!t(e) || !t(r))
      }
    },
    43938: (e, t, r) => {
      "use strict";
      var n = r(16695),
        o = r(84220),
        a = r(23994),
        i = r(83075),
        l = r(63157),
        u = o(i(), Object);
      n(u, {
        getPolyfill: i,
        implementation: a,
        shim: l
      }), e.exports = u
    },
    83075: (e, t, r) => {
      "use strict";
      var n = r(23994);
      e.exports = function() {
        return "function" == typeof Object.is ? Object.is : n
      }
    },
    63157: (e, t, r) => {
      "use strict";
      var n = r(83075),
        o = r(16695);
      e.exports = function() {
        var e = n();
        return o(Object, {
          is: e
        }, {
          is: function() {
            return Object.is !== e
          }
        }), e
      }
    },
    24090: (e, t, r) => {
      "use strict";
      var n;
      if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty,
          a = Object.prototype.toString,
          i = r(75422),
          l = Object.prototype.propertyIsEnumerable,
          u = !l.call({
            toString: null
          }, "toString"),
          s = l.call((function() {}), "prototype"),
          c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          d = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
          },
          p = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
          },
          f = function() {
            if ("undefined" == typeof window) return !1;
            for (var e in window) try {
              if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                d(window[e])
              } catch (e) {
                return !0
              }
            } catch (e) {
              return !0
            }
            return !1
          }();
        n = function(e) {
          var t = null !== e && "object" == typeof e,
            r = "[object Function]" === a.call(e),
            n = i(e),
            l = t && "[object String]" === a.call(e),
            p = [];
          if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
          var b = s && r;
          if (l && e.length > 0 && !o.call(e, 0))
            for (var m = 0; m < e.length; ++m) p.push(String(m));
          if (n && e.length > 0)
            for (var y = 0; y < e.length; ++y) p.push(String(y));
          else
            for (var v in e) b && "prototype" === v || !o.call(e, v) || p.push(String(v));
          if (u)
            for (var h = function(e) {
                if ("undefined" == typeof window || !f) return d(e);
                try {
                  return d(e)
                } catch (e) {
                  return !1
                }
              }(e), g = 0; g < c.length; ++g) h && "constructor" === c[g] || !o.call(e, c[g]) || p.push(c[g]);
          return p
        }
      }
      e.exports = n
    },
    78850: (e, t, r) => {
      "use strict";
      var n = Array.prototype.slice,
        o = r(75422),
        a = Object.keys,
        i = a ? function(e) {
          return a(e)
        } : r(24090),
        l = Object.keys;
      i.shim = function() {
        if (Object.keys) {
          var e = function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
          }(1, 2);
          e || (Object.keys = function(e) {
            return o(e) ? l(n.call(e)) : l(e)
          })
        } else Object.keys = i;
        return Object.keys || i
      }, e.exports = i
    },
    75422: e => {
      "use strict";
      var t = Object.prototype.toString;
      e.exports = function(e) {
        var r = t.call(e),
          n = "[object Arguments]" === r;
        return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
      }
    },
    25706: (e, t, r) => {
      "use strict";
      var n = r(78850),
        o = r(39746)(),
        a = r(30352),
        i = Object,
        l = a("Array.prototype.push"),
        u = a("Object.prototype.propertyIsEnumerable"),
        s = o ? Object.getOwnPropertySymbols : null;
      e.exports = function(e, t) {
        if (null == e) throw new TypeError("target must be an object");
        var r = i(e);
        if (1 === arguments.length) return r;
        for (var a = 1; a < arguments.length; ++a) {
          var c = i(arguments[a]),
            d = n(c),
            p = o && (Object.getOwnPropertySymbols || s);
          if (p)
            for (var f = p(c), b = 0; b < f.length; ++b) {
              var m = f[b];
              u(c, m) && l(d, m)
            }
          for (var y = 0; y < d.length; ++y) {
            var v = d[y];
            if (u(c, v)) {
              var h = c[v];
              r[v] = h
            }
          }
        }
        return r
      }
    },
    32626: (e, t, r) => {
      "use strict";
      var n = r(16695),
        o = r(84220),
        a = r(25706),
        i = r(60947),
        l = r(55685),
        u = o.apply(i()),
        s = function(e, t) {
          return u(Object, arguments)
        };
      n(s, {
        getPolyfill: i,
        implementation: a,
        shim: l
      }), e.exports = s
    },
    60947: (e, t, r) => {
      "use strict";
      var n = r(25706);
      e.exports = function() {
        return Object.assign ? function() {
          if (!Object.assign) return !1;
          for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n) r[t[n]] = t[n];
          var o = Object.assign({}, r),
            a = "";
          for (var i in o) a += i;
          return e !== a
        }() || function() {
          if (!Object.assign || !Object.preventExtensions) return !1;
          var e = Object.preventExtensions({
            1: 2
          });
          try {
            Object.assign(e, "xy")
          } catch (t) {
            return "y" === e[1]
          }
          return !1
        }() ? n : Object.assign : n
      }
    },
    55685: (e, t, r) => {
      "use strict";
      var n = r(16695),
        o = r(60947);
      e.exports = function() {
        var e = o();
        return n(Object, {
          assign: e
        }, {
          assign: function() {
            return Object.assign !== e
          }
        }), e
      }
    },
    10907: (e, t, r) => {
      "use strict";
      var n = r(62229),
        o = r(44853);
      var a = Object.assign;

      function i(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }

      function l() {
        return !0
      }

      function u() {
        return !1
      }

      function s(e) {
        function t(t, r, n, o, a) {
          for (var i in this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
          return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? l : u, this.isPropagationStopped = u, this
        }
        return a(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = l)
          },
          stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = l)
          },
          persist: function() {},
          isPersistent: l
        }), t
      }
      var c = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        d = s(c),
        p = a({}, c, {
          view: 0,
          detail: 0
        });
      s(p);
      var f, b, m, y = a({}, p, {
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
        getModifierState: P,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== m && (m && "mousemove" === e.type ? (f = e.screenX - m.screenX, b = e.screenY - m.screenY) : b = f = 0, m = e), f)
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : b
        }
      });
      s(y), s(a({}, y, {
        dataTransfer: 0
      })), s(a({}, p, {
        relatedTarget: 0
      })), s(a({}, c, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })), s(a({}, c, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
      })), s(a({}, c, {
        data: 0
      }));
      var v = {
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
        h = {
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
        g = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };

      function w(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = g[e]) && !!t[e]
      }

      function P() {
        return w
      }

      function C(e, t, r, n, o, a, i, l, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(r, s)
        } catch (e) {
          this.onError(e)
        }
      }
      s(a({}, p, {
        key: function(e) {
          if (e.key) {
            var t = v[e.key] || e.key;
            if ("Unidentified" !== t) return t
          }
          return "keypress" === e.type ? 13 === (e = i(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? h[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: P,
        charCode: function(e) {
          return "keypress" === e.type ? i(e) : 0
        },
        keyCode: function(e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
          return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
      })), s(a({}, y, {
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
      })), s(a({}, p, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: P
      })), s(a({}, c, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })), s(a({}, y, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
      }));
      var E = !1,
        q = null,
        x = !1,
        O = null,
        S = {
          onError: function(e) {
            E = !0, q = e
          }
        };

      function j(e, t, r, n, o, a, i, l, u) {
        E = !1, q = null, C.apply(S, arguments)
      }
      var R = Array.isArray,
        _ = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
        A = _[0],
        T = _[1],
        M = _[2],
        I = _[3],
        k = _[4],
        N = n.unstable_act;

      function F() {}

      function B(e) {
        return !(!e || 1 !== e.nodeType || !e.tagName)
      }

      function L(e) {
        return !B(e) && null != e && "function" == typeof e.render && "function" == typeof e.setState
      }

      function U(e, t, r) {
        var n = e.type || "unknown-event";
        e.currentTarget = T(r),
          function(e, t, r, n, o, a, i, l, u) {
            if (j.apply(this, arguments), E) {
              if (!E) throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
              var s = q;
              E = !1, q = null, x || (x = !0, O = s)
            }
          }(n, t, void 0, e), e.currentTarget = null
      }

      function D(e, t) {
        var r = e.stateNode;
        if (!r) return null;
        var n = M(r);
        if (!n) return null;
        r = n[t];
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
            (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
            break e;
          default:
            e = !1
        }
        if (e) return null;
        if (r && "function" != typeof r) throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof r + "` type.");
        return r
      }

      function H(e, t, r) {
        var n = r._reactName;
        "captured" === t && (n += "Capture"), (t = D(e, n)) && (null == r._dispatchListeners && (r._dispatchListeners = []), null == r._dispatchInstances && (r._dispatchInstances = []), r._dispatchListeners.push(t), r._dispatchInstances.push(e))
      }
      var $ = {},
        W = new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
      "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach((function(e) {
        $[e] = function(e) {
          return function(t, r) {
            if (n.isValidElement(t)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
            if (L(t)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
            var i = "on" + e[0].toUpperCase() + e.slice(1),
              l = new F;
            l.target = t, l.type = e.toLowerCase();
            var u = A(t),
              s = new d(i, l.type, u, l, t);
            s.persist(), a(s, r), W.has(e) ? s && s._reactName && function(e, t, r) {
              e && r && r._reactName && (t = D(e, r._reactName)) && (null == r._dispatchListeners && (r._dispatchListeners = []), null == r._dispatchInstances && (r._dispatchInstances = []), r._dispatchListeners.push(t), r._dispatchInstances.push(e))
            }(s._targetInst, null, s) : s && s._reactName && function(e, t, r) {
              for (var n = []; e;) {
                n.push(e);
                do {
                  e = e.return
                } while (e && 5 !== e.tag);
                e = e || null
              }
              for (e = n.length; 0 < e--;) t(n[e], "captured", r);
              for (e = 0; e < n.length; e++) t(n[e], "bubbled", r)
            }(s._targetInst, H, s), o.unstable_batchedUpdates((function() {
              if (I(t), s) {
                var e = s._dispatchListeners,
                  r = s._dispatchInstances;
                if (R(e))
                  for (var n = 0; n < e.length && !s.isPropagationStopped(); n++) U(s, e[n], r[n]);
                else e && U(s, e, r);
                s._dispatchListeners = null, s._dispatchInstances = null, s.isPersistent() || s.constructor.release(s)
              }
              if (x) throw e = O, x = !1, O = null, e
            })), k()
          }
        }(e)
      })), t.act = N
    },
    40347: (e, t, r) => {
      "use strict";
      var n = r(44853);
      t.H = n.createRoot, t.c = n.hydrateRoot
    },
    11384: (e, t, r) => {
      "use strict";
      e.exports = r(10907)
    },
    66e3: (e, t, r) => {
      "use strict";
      var n = r(4149),
        o = Object,
        a = TypeError;
      e.exports = n((function() {
        if (null != this && this !== o(this)) throw new a("RegExp.prototype.flags getter called on non-object");
        var e = "";
        return this.hasIndices && (e += "d"), this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.unicodeSets && (e += "v"), this.sticky && (e += "y"), e
      }), "get flags", !0)
    },
    85164: (e, t, r) => {
      "use strict";
      var n = r(16695),
        o = r(84220),
        a = r(66e3),
        i = r(57397),
        l = r(8643),
        u = o(i());
      n(u, {
        getPolyfill: i,
        implementation: a,
        shim: l
      }), e.exports = u
    },
    91328: (e, t, r) => {
      "use strict";
      var n = r(75573)(),
        o = r(13390),
        a = n && o("%Object.defineProperty%", !0);
      if (a) try {
        a({}, "a", {
          value: 1
        })
      } catch (e) {
        a = !1
      }
      var i = o("%SyntaxError%"),
        l = o("%TypeError%"),
        u = r(43402);
      e.exports = function(e, t, r) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new l("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t) throw new l("`property` must be a string or a symbol`");
        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new l("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new l("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new l("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new l("`loose`, if provided, must be a boolean");
        var n = arguments.length > 3 ? arguments[3] : null,
          o = arguments.length > 4 ? arguments[4] : null,
          s = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          d = !!u && u(e, t);
        if (a) a(e, t, {
          configurable: null === s && d ? d.configurable : !s,
          enumerable: null === n && d ? d.enumerable : !n,
          value: r,
          writable: null === o && d ? d.writable : !o
        });
        else {
          if (!c && (n || o || s)) throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
          e[t] = r
        }
      }
    },
    75573: (e, t, r) => {
      "use strict";
      var n = r(13390)("%Object.defineProperty%", !0),
        o = function() {
          if (n) try {
            return n({}, "a", {
              value: 1
            }), !0
          } catch (e) {
            return !1
          }
          return !1
        };
      o.hasArrayLengthDefineBug = function() {
        if (!o()) return null;
        try {
          return 1 !== n([], "length", {
            value: 1
          }).length
        } catch (e) {
          return !0
        }
      }, e.exports = o
    },
    4149: (e, t, r) => {
      "use strict";
      var n = r(91328),
        o = r(75573)(),
        a = r(28455).functionsHaveConfigurableNames(),
        i = TypeError;
      e.exports = function(e, t) {
        if ("function" != typeof e) throw new i("`fn` is not a function");
        return arguments.length > 2 && !!arguments[2] && !a || (o ? n(e, "name", t, !0, !0) : n(e, "name", t)), e
      }
    },
    57397: (e, t, r) => {
      "use strict";
      var n = r(66e3),
        o = r(16695).supportsDescriptors,
        a = Object.getOwnPropertyDescriptor;
      e.exports = function() {
        if (o && "gim" === /a/gim.flags) {
          var e = a(RegExp.prototype, "flags");
          if (e && "function" == typeof e.get && "boolean" == typeof RegExp.prototype.dotAll && "boolean" == typeof RegExp.prototype.hasIndices) {
            var t = "",
              r = {};
            if (Object.defineProperty(r, "hasIndices", {
                get: function() {
                  t += "d"
                }
              }), Object.defineProperty(r, "sticky", {
                get: function() {
                  t += "y"
                }
              }), "dy" === t) return e.get
          }
        }
        return n
      }
    },
    8643: (e, t, r) => {
      "use strict";
      var n = r(16695).supportsDescriptors,
        o = r(57397),
        a = Object.getOwnPropertyDescriptor,
        i = Object.defineProperty,
        l = TypeError,
        u = Object.getPrototypeOf,
        s = /a/;
      e.exports = function() {
        if (!n || !u) throw new l("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        var e = o(),
          t = u(s),
          r = a(t, "flags");
        return r && r.get === e || i(t, "flags", {
          configurable: !0,
          enumerable: !1,
          get: e
        }), e
      }
    },
    59273: (e, t, r) => {
      "use strict";
      var n = r(13390),
        o = r(30352),
        a = r(32210),
        i = n("%TypeError%"),
        l = n("%WeakMap%", !0),
        u = n("%Map%", !0),
        s = o("WeakMap.prototype.get", !0),
        c = o("WeakMap.prototype.set", !0),
        d = o("WeakMap.prototype.has", !0),
        p = o("Map.prototype.get", !0),
        f = o("Map.prototype.set", !0),
        b = o("Map.prototype.has", !0),
        m = function(e, t) {
          for (var r, n = e; null !== (r = n.next); n = r)
            if (r.key === t) return n.next = r.next, r.next = e.next, e.next = r, r
        };
      e.exports = function() {
        var e, t, r, n = {
          assert: function(e) {
            if (!n.has(e)) throw new i("Side channel does not contain " + a(e))
          },
          get: function(n) {
            if (l && n && ("object" == typeof n || "function" == typeof n)) {
              if (e) return s(e, n)
            } else if (u) {
              if (t) return p(t, n)
            } else if (r) return function(e, t) {
              var r = m(e, t);
              return r && r.value
            }(r, n)
          },
          has: function(n) {
            if (l && n && ("object" == typeof n || "function" == typeof n)) {
              if (e) return d(e, n)
            } else if (u) {
              if (t) return b(t, n)
            } else if (r) return function(e, t) {
              return !!m(e, t)
            }(r, n);
            return !1
          },
          set: function(n, o) {
            l && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new l), c(e, n, o)) : u ? (t || (t = new u), f(t, n, o)) : (r || (r = {
              key: {},
              next: null
            }), function(e, t, r) {
              var n = m(e, t);
              n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
              }
            }(r, n, o))
          }
        };
        return n
      }
    },
    20627: (e, t, r) => {
      "use strict";
      var n = r(67217),
        o = SyntaxError,
        a = "object" == typeof StopIteration ? StopIteration : null;
      e.exports = function(e) {
        if (!a) throw new o("this environment lacks StopIteration");
        n.set(e, "[[Done]]", !1);
        var t = {
          next: function() {
            var e = n.get(this, "[[Iterator]]"),
              t = n.get(e, "[[Done]]");
            try {
              return {
                done: t,
                value: t ? void 0 : e.next()
              }
            } catch (t) {
              if (n.set(e, "[[Done]]", !0), t !== a) throw t;
              return {
                done: !0,
                value: void 0
              }
            }
          }
        };
        return n.set(t, "[[Iterator]]", e), t
      }
    },
    87047: (e, t, r) => {
      "use strict";
      var n = Function.prototype.call,
        o = Object.prototype.hasOwnProperty,
        a = r(92868);
      e.exports = a.call(n, o)
    },
    67217: (e, t, r) => {
      "use strict";
      var n = r(13390),
        o = r(87047),
        a = r(59273)(),
        i = n("%TypeError%"),
        l = {
          assert: function(e, t) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            if (a.assert(e), !l.has(e, t)) throw new i("`" + t + "` is not present on `O`")
          },
          get: function(e, t) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            var r = a.get(e);
            return r && r["$" + t]
          },
          has: function(e, t) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            var r = a.get(e);
            return !!r && o(r, "$" + t)
          },
          set: function(e, t, r) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new i("`O` is not an object");
            if ("string" != typeof t) throw new i("`slot` must be a string");
            var n = a.get(e);
            n || (n = {}, a.set(e, n)), n["$" + t] = r
          }
        };
      Object.freeze && Object.freeze(l), e.exports = l
    },
    53660: (e, t, r) => {
      "use strict";
      var n = r(90154),
        o = r(29438),
        a = r(13487),
        i = r(73615),
        l = r(3652);
      e.exports = function(e) {
        return null == e || "object" != typeof e && "function" != typeof e ? null : n(e) ? "String" : o(e) ? "Number" : a(e) ? "Boolean" : i(e) ? "Symbol" : l(e) ? "BigInt" : void 0
      }
    },
    67352: (e, t, r) => {
      "use strict";
      var n = r(57579),
        o = r(99778),
        a = r(84220),
        i = r(30352),
        l = r(43402),
        u = i("Object.prototype.toString"),
        s = r(4839)(),
        c = "undefined" == typeof globalThis ? r.g : globalThis,
        d = o(),
        p = i("String.prototype.slice"),
        f = Object.getPrototypeOf,
        b = i("Array.prototype.indexOf", !0) || function(e, t) {
          for (var r = 0; r < e.length; r += 1)
            if (e[r] === t) return r;
          return -1
        },
        m = {
          __proto__: null
        };
      n(d, s && l && f ? function(e) {
        var t = new c[e];
        if (Symbol.toStringTag in t) {
          var r = f(t),
            n = l(r, Symbol.toStringTag);
          if (!n) {
            var o = f(r);
            n = l(o, Symbol.toStringTag)
          }
          m["$" + e] = a(n.get)
        }
      } : function(e) {
        var t = new c[e],
          r = t.slice || t.set;
        r && (m["$" + e] = a(r))
      }), e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!s) {
          var t = p(u(e), 8, -1);
          return b(d, t) > -1 ? t : "Object" === t && function(e) {
            var t = !1;
            return n(m, (function(r, n) {
              if (!t) try {
                r(e), t = p(n, 1)
              } catch (e) {}
            })), t
          }(e)
        }
        return l ? function(e) {
          var t = !1;
          return n(m, (function(r, n) {
            if (!t) try {
              "$" + r(e) === n && (t = p(n, 1))
            } catch (e) {}
          })), t
        }(e) : null
      }
    },
    4839: (e, t, r) => {
      "use strict";
      var n = r(39746);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    90644: (e, t, r) => {
      "use strict";
      var n = r(78871),
        o = r(3065),
        a = r(24352),
        i = r(62930);
      e.exports = function(e) {
        if (e && "object" == typeof e) {
          if (n(e)) return "Map";
          if (o(e)) return "Set";
          if (a(e)) return "WeakMap";
          if (i(e)) return "WeakSet"
        }
        return !1
      }
    },
    41455: (e, t, r) => {
      "use strict";
      var n = r(18113),
        o = r(29841),
        a = r(20627);
      if (r(8832)() || r(39746)()) {
        var i = Symbol.iterator;
        e.exports = function(e) {
          return null != e && void 0 !== e[i] ? e[i]() : o(e) ? Array.prototype[i].call(e) : void 0
        }
      } else {
        var l = r(5577),
          u = r(90154),
          s = r(13390),
          c = s("%Map%", !0),
          d = s("%Set%", !0),
          p = r(30352),
          f = p("Array.prototype.push"),
          b = p("String.prototype.charCodeAt"),
          m = p("String.prototype.slice"),
          y = function(e) {
            var t = 0;
            return {
              next: function() {
                var r, n = t >= e.length;
                return n || (r = e[t], t += 1), {
                  done: n,
                  value: r
                }
              }
            }
          },
          v = function(e, t) {
            if (l(e) || o(e)) return y(e);
            if (u(e)) {
              var r = 0;
              return {
                next: function() {
                  var t = function(e, t) {
                      if (t + 1 >= e.length) return t + 1;
                      var r = b(e, t);
                      if (r < 55296 || r > 56319) return t + 1;
                      var n = b(e, t + 1);
                      return n < 56320 || n > 57343 ? t + 1 : t + 2
                    }(e, r),
                    n = m(e, r, t);
                  return r = t, {
                    done: t > e.length,
                    value: n
                  }
                }
              }
            }
            return t && void 0 !== e["_es6-shim iterator_"] ? e["_es6-shim iterator_"]() : void 0
          };
        if (c || d) {
          var h = r(78871),
            g = r(3065),
            w = p("Map.prototype.forEach", !0),
            P = p("Set.prototype.forEach", !0);
          if (void 0 === n || !n.versions || !n.versions.node) var C = p("Map.prototype.iterator", !0),
            E = p("Set.prototype.iterator", !0);
          var q = p("Map.prototype.@@iterator", !0) || p("Map.prototype._es6-shim iterator_", !0),
            x = p("Set.prototype.@@iterator", !0) || p("Set.prototype._es6-shim iterator_", !0);
          e.exports = function(e) {
            return function(e) {
              if (h(e)) {
                if (C) return a(C(e));
                if (q) return q(e);
                if (w) {
                  var t = [];
                  return w(e, (function(e, r) {
                    f(t, [r, e])
                  })), y(t)
                }
              }
              if (g(e)) {
                if (E) return a(E(e));
                if (x) return x(e);
                if (P) {
                  var r = [];
                  return P(e, (function(e) {
                    f(r, e)
                  })), y(r)
                }
              }
            }(e) || v(e)
          }
        } else e.exports = function(e) {
          if (null != e) return v(e, !0)
        }
      }
    },
    99778: (e, t, r) => {
      "use strict";
      var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
        o = "undefined" == typeof globalThis ? r.g : globalThis;
      e.exports = function() {
        for (var e = [], t = 0; t < n.length; t++) "function" == typeof o[n[t]] && (e[e.length] = n[t]);
        return e
      }
    }
  }
]);