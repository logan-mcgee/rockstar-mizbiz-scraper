try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1c18326e-c462-4158-9cfc-f6ed840e12d1", e._sentryDebugIdIdentifier = "sentry-dbid-1c18326e-c462-4158-9cfc-f6ed840e12d1")
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
  [1508], {
    22890(e, t, r) {
      "use strict";
      r.d(t, {
        jK: () => ie,
        rC: () => Zt,
        zj: () => le,
        E5: () => Yt,
        fE: () => ne,
        nj: () => tr
      });
      var n = r(89714),
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
          }(n.length), s = a(r) ? Object(new r(l)) : new Array(l), u = 0; u < l;) o = n[u], s[u] = t ? t(o, u) : o, u += 1;
        return s.length = l, s
      }

      function s(e) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s(e)
      }

      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, d(n.key), n)
        }
      }

      function d(e) {
        var t = function(e) {
          if ("object" !== s(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === s(t) ? t : String(t)
      }
      var c = function() {
        function e() {
          var t, r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), t = this, n = void 0, (r = d(r = "items")) in t ? Object.defineProperty(t, r, {
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
            return this.items = this.items.filter(function(t) {
              return t !== e
            }), t !== this.items.length
          }
        }, {
          key: "forEach",
          value: function(e) {
            var t = this;
            this.items.forEach(function(r) {
              e(r, r, t)
            })
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
        }]) && u(t.prototype, r), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e
      }();
      const p = "undefined" == typeof Set ? Set : c;

      function m(e) {
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

      function y(e, t) {
        return function(e, t) {
          return ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-hidden", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"].some(function(r) {
            var n;
            return e.hasAttribute(r) && !(null !== (n = b[t]) && void 0 !== n && n.has(r))
          })
        }(e, t)
      }

      function v(e) {
        return null !== e && e.nodeType === e.ELEMENT_NODE
      }

      function h(e) {
        return v(e) && "caption" === m(e)
      }

      function g(e) {
        return v(e) && "input" === m(e)
      }

      function C(e) {
        return v(e) && "legend" === m(e)
      }

      function P(e) {
        return function(e) {
          return v(e) && void 0 !== e.ownerSVGElement
        }(e) && "title" === m(e)
      }

      function q(e, t) {
        if (v(e) && e.hasAttribute(t)) {
          var r = e.getAttribute(t).split(" "),
            n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
          return r.map(function(e) {
            return n.getElementById(e)
          }).filter(function(e) {
            return null !== e
          })
        }
        return []
      }

      function w(e, t) {
        return !!v(e) && -1 !== t.indexOf(function(e) {
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
              var t = f[m(e)];
              if (void 0 !== t) return t;
              switch (m(e)) {
                case "a":
                case "area":
                case "link":
                  if (e.hasAttribute("href")) return "link";
                  break;
                case "img":
                  return "" !== e.getAttribute("alt") || y(e, "img") ? "img" : "presentation";
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
            if ("presentation" !== t || y(e, r || "")) return r
          }
          return t
        }(e))
      }

      function E(e, t) {
        if (!v(e)) return !1;
        if ("range" === t) return w(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
        throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("))
      }

      function x(e, t) {
        var r = l(e.querySelectorAll(t));
        return q(e, "aria-owns").forEach(function(e) {
          r.push.apply(r, l(e.querySelectorAll(t)))
        }), r
      }

      function R(e) {
        var t = e.getPropertyValue("content");
        return /^["'].*["']$/.test(t) ? t.slice(1, -1) : ""
      }

      function O(e) {
        var t = m(e);
        return "button" === t || "input" === t && "hidden" !== e.getAttribute("type") || "meter" === t || "output" === t || "progress" === t || "select" === t || "textarea" === t
      }

      function _(e) {
        if (O(e)) return e;
        var t = null;
        return e.childNodes.forEach(function(e) {
          if (null === t && v(e)) {
            var r = _(e);
            null !== r && (t = r)
          }
        }), t
      }

      function T(e) {
        if (void 0 !== e.control) return e.control;
        var t = e.getAttribute("for");
        return null !== t ? e.ownerDocument.getElementById(t) : _(e)
      }

      function M(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = new p,
          n = function(e) {
            var t = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
            if (null === t) throw new TypeError("no window available");
            return t
          }(e),
          o = t.compute,
          a = void 0 === o ? "name" : o,
          i = t.computedStyleSupportsPseudoElements,
          s = void 0 === i ? void 0 !== t.getComputedStyle : i,
          u = t.getComputedStyle,
          d = void 0 === u ? n.getComputedStyle.bind(n) : u,
          c = t.hidden,
          f = void 0 !== c && c;

        function b(e, t) {
          var r, n, o = "";
          if (v(e) && s) {
            var a = R(d(e, "::before"));
            o = "".concat(a, " ").concat(o)
          }
          if ((function(e) {
              return v(e) && "slot" === m(e)
            }(e) ? 0 === (n = (r = e).assignedNodes()).length ? l(r.childNodes) : n : l(e.childNodes).concat(q(e, "aria-owns"))).forEach(function(e) {
              var r = _(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                }),
                n = "inline" !== (v(e) ? d(e).getPropertyValue("display") : "inline") ? " " : "";
              o += "".concat(n).concat(r).concat(n)
            }), v(e) && s) {
            var i = R(d(e, "::after"));
            o = "".concat(o, " ").concat(i)
          }
          return o.trim()
        }

        function y(e, t) {
          var n = e.getAttributeNode(t);
          return null === n || r.has(n) || "" === n.value.trim() ? null : (r.add(n), n.value)
        }

        function _(e, t) {
          if (r.has(e)) return "";
          if (!f && function(e, t) {
              if (!v(e)) return !1;
              if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
              var r = t(e);
              return "none" === r.getPropertyValue("display") || "hidden" === r.getPropertyValue("visibility")
            }(e, d) && !t.isReferenced) return r.add(e), "";
          var n = v(e) ? e.getAttributeNode("aria-labelledby") : null,
            o = null === n || r.has(n) ? [] : q(e, "aria-labelledby");
          if ("name" === a && !t.isReferenced && o.length > 0) return r.add(n), o.map(function(e) {
            return _(e, {
              isEmbeddedInLabel: t.isEmbeddedInLabel,
              isReferenced: !0,
              recursion: !1
            })
          }).join(" ");
          var i, s = t.recursion && (w(i = e, ["button", "combobox", "listbox", "textbox"]) || E(i, "range")) && "name" === a;
          if (!s) {
            var u = (v(e) && e.getAttribute("aria-label") || "").trim();
            if ("" !== u && "name" === a) return r.add(e), u;
            if (! function(e) {
                return w(e, ["none", "presentation"])
              }(e)) {
              var c = function(e) {
                if (!v(e)) return null;
                if (function(e) {
                    return v(e) && "fieldset" === m(e)
                  }(e)) {
                  r.add(e);
                  for (var t = l(e.childNodes), n = 0; n < t.length; n += 1) {
                    var o = t[n];
                    if (C(o)) return _(o, {
                      isEmbeddedInLabel: !1,
                      isReferenced: !1,
                      recursion: !1
                    })
                  }
                } else if (function(e) {
                    return v(e) && "table" === m(e)
                  }(e)) {
                  r.add(e);
                  for (var a = l(e.childNodes), i = 0; i < a.length; i += 1) {
                    var s = a[i];
                    if (h(s)) return _(s, {
                      isEmbeddedInLabel: !1,
                      isReferenced: !1,
                      recursion: !1
                    })
                  }
                } else {
                  if (function(e) {
                      return v(e) && "svg" === m(e)
                    }(e)) {
                    r.add(e);
                    for (var u = l(e.childNodes), d = 0; d < u.length; d += 1) {
                      var c = u[d];
                      if (P(c)) return c.textContent
                    }
                    return null
                  }
                  if ("img" === m(e) || "area" === m(e)) {
                    var p = y(e, "alt");
                    if (null !== p) return p
                  } else if (function(e) {
                      return v(e) && "optgroup" === m(e)
                    }(e)) {
                    var f = y(e, "label");
                    if (null !== f) return f
                  }
                }
                if (g(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
                  var q = y(e, "value");
                  if (null !== q) return q;
                  if ("submit" === e.type) return "Submit";
                  if ("reset" === e.type) return "Reset"
                }
                var E, x, R = null === (x = (E = e).labels) ? x : void 0 !== x ? l(x) : O(E) ? l(E.ownerDocument.querySelectorAll("label")).filter(function(e) {
                  return T(e) === E
                }) : null;
                if (null !== R && 0 !== R.length) return r.add(e), l(R).map(function(e) {
                  return _(e, {
                    isEmbeddedInLabel: !0,
                    isReferenced: !1,
                    recursion: !0
                  })
                }).filter(function(e) {
                  return e.length > 0
                }).join(" ");
                if (g(e) && "image" === e.type) {
                  var M = y(e, "alt");
                  if (null !== M) return M;
                  var S = y(e, "title");
                  return null !== S ? S : "Submit Query"
                }
                if (w(e, ["button"])) {
                  var j = b(e, {
                    isEmbeddedInLabel: !1,
                    isReferenced: !1
                  });
                  if ("" !== j) return j
                }
                return null
              }(e);
              if (null !== c) return r.add(e), c
            }
          }
          if (w(e, ["menu"])) return r.add(e), "";
          if (s || t.isEmbeddedInLabel || t.isReferenced) {
            if (w(e, ["combobox", "listbox"])) {
              r.add(e);
              var p = function(e) {
                return v(t = e) && "select" === m(t) ? e.selectedOptions || x(e, "[selected]") : x(e, '[aria-selected="true"]');
                var t
              }(e);
              return 0 === p.length ? g(e) ? e.value : "" : l(p).map(function(e) {
                return _(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                })
              }).join(" ")
            }
            if (E(e, "range")) return r.add(e), e.hasAttribute("aria-valuetext") ? e.getAttribute("aria-valuetext") : e.hasAttribute("aria-valuenow") ? e.getAttribute("aria-valuenow") : e.getAttribute("value") || "";
            if (w(e, ["textbox"])) return r.add(e),
              function(e) {
                return g(e) || v(t = e) && "textarea" === m(t) ? e.value : e.textContent || "";
                var t
              }(e)
          }
          if (function(e) {
              return w(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"])
            }(e) || v(e) && t.isReferenced || function(e) {
              return h(e)
            }(e)) {
            var R = b(e, {
              isEmbeddedInLabel: t.isEmbeddedInLabel,
              isReferenced: !1
            });
            if ("" !== R) return r.add(e), R
          }
          if (e.nodeType === e.TEXT_NODE) return r.add(e), e.textContent || "";
          if (t.recursion) return r.add(e), b(e, {
            isEmbeddedInLabel: t.isEmbeddedInLabel,
            isReferenced: !1
          });
          var M = function(e) {
            return v(e) ? y(e, "title") : null
          }(e);
          return null !== M ? (r.add(e), M) : (r.add(e), "")
        }
        return _(e, {
          isEmbeddedInLabel: !1,
          isReferenced: "description" === a,
          recursion: !1
        }).trim().replace(/\s\s+/g, " ")
      }

      function S(e) {
        return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, S(e)
      }

      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? j(Object(r), !0).forEach(function(t) {
            I(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function I(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" !== S(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== S(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === S(t) ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = q(e, "aria-describedby").map(function(e) {
            return M(e, A(A({}, t), {}, {
              compute: "description"
            }))
          }).join(" ");
        if ("" === r) {
          var n = e.getAttribute("title");
          r = null === n ? "" : n
        }
        return r
      }

      function N(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return w(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]) ? "" : M(e, t)
      }
      var L = r(59410),
        F = r(70033),
        B = r.n(F);
      e = r.hmd(e);
      var U = r(43431);

      function D(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      const H = (e, t) => {
          const r = t.colors.content;
          return r.open + D(e) + r.close
        },
        V = /^((HTML|SVG)\w*)?Element$/,
        z = e => {
          const {
            tagName: t
          } = e;
          return Boolean("string" == typeof t && t.includes("-") || "function" == typeof e.hasAttribute && e.hasAttribute("is"))
        };

      function $(e) {
        return 11 === e.nodeType
      }

      function W(e) {
        return {
          test: e => {
            var t;
            return ((null == e || null == (t = e.constructor) ? void 0 : t.name) || z(e)) && (e => {
              const t = e.constructor.name,
                {
                  nodeType: r
                } = e;
              return 1 === r && (V.test(t) || z(e)) || 3 === r && "Text" === t || 8 === r && "Comment" === t || 11 === r && "DocumentFragment" === t
            })(e)
          },
          serialize: (t, r, n, o, a, i) => {
            if (function(e) {
                return 3 === e.nodeType
              }(t)) return H(t.data, r);
            if (function(e) {
                return 8 === e.nodeType
              }(t)) return ((e, t) => {
              const r = t.colors.comment;
              return r.open + "\x3c!--" + D(e) + "--\x3e" + r.close
            })(t.data, r);
            const l = $(t) ? "DocumentFragment" : t.tagName.toLowerCase();
            return ++o > r.maxDepth ? ((e, t) => {
              const r = t.colors.tag;
              return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close
            })(l, r) : ((e, t, r, n, o) => {
              const a = n.colors.tag;
              return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close
            })(l, ((e, t, r, n, o, a, i) => {
              const l = n + r.indent,
                s = r.colors;
              return e.map(e => {
                const u = t[e];
                let d = i(u, r, l, o, a);
                return "string" != typeof u && (-1 !== d.indexOf("\n") && (d = r.spacingOuter + l + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + s.prop.open + e + s.prop.close + "=" + s.value.open + d + s.value.close
              }).join("")
            })($(t) ? [] : Array.from(t.attributes).map(e => e.name).sort(), $(t) ? {} : Array.from(t.attributes).reduce((e, t) => (e[t.name] = t.value, e), {}), r, n + r.indent, o, a, i), ((e, t, r, n, o, a) => e.map(e => {
              const i = "string" == typeof e ? H(e, t) : a(e, t, r, n, o);
              return "" === i && "object" == typeof e && null !== e && 3 !== e.nodeType ? "" : t.spacingOuter + r + i
            }).join(""))(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n)
          }
        }
      }
      let K = null,
        X = null,
        Y = null;
      try {
        const t = e && e.require;
        X = t.call(e, "fs").readFileSync, Y = t.call(e, "@babel/code-frame").codeFrameColumns, K = t.call(e, "picocolors")
      } catch {}

      function G() {
        return "undefined" != typeof jest && null !== jest && (!0 === setTimeout._isMockFunction || Object.prototype.hasOwnProperty.call(setTimeout, "clock"))
      }

      function J() {
        if ("undefined" == typeof window) throw new Error("Could not find default container");
        return window.document
      }

      function Z(e) {
        if (e.defaultView) return e.defaultView;
        if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
        if (e.window) return e.window;
        throw e.ownerDocument && null === e.ownerDocument.defaultView ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : "function" == typeof e.debug && "function" == typeof e.logTestingPlaygroundURL ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".")
      }

      function Q(e) {
        if (!e || "function" != typeof e.querySelector || "function" != typeof e.querySelectorAll) throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + (("object" == typeof(t = e) ? null === t ? "null" : t.constructor.name : typeof t) + "."));
        var t
      }
      const ee = () => {
          if (void 0 === U) return !1;
          let e;
          try {
            var t;
            const r = null == (t = U.env) ? void 0 : t.COLORS;
            r && (e = JSON.parse(r))
          } catch {}
          return "boolean" == typeof e ? e : void 0 !== U.versions && void 0 !== U.versions.node
        },
        {
          DOMCollection: te
        } = n.Nx;

      function re(e) {
        return 8 !== e.nodeType && (1 !== e.nodeType || !e.matches(le().defaultIgnore))
      }

      function ne(e, t, r) {
        if (void 0 === r && (r = {}), e || (e = J().body), "number" != typeof t && (t = void 0 !== U && void 0 !== U.env && U.env.DEBUG_PRINT_LIMIT || 7e3), 0 === t) return "";
        e.documentElement && (e = e.documentElement);
        let o = typeof e;
        if ("object" === o ? o = e.constructor.name : e = {}, !("outerHTML" in e)) throw new TypeError("Expected an element or document but got " + o);
        const {
          filterNode: a = re,
          ...i
        } = r, l = n.GP(e, {
          plugins: [W(a), te],
          printFunctionName: !1,
          highlight: ee(),
          ...i
        });
        return void 0 !== t && e.outerHTML.length > t ? l.slice(0, t) + "..." : l
      }
      const oe = function() {
        const e = X && Y ? function(e) {
          const t = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            n = e.slice(t, r),
            o = n.split(":"),
            [a, i, l] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
          let s = "";
          try {
            s = X(a, "utf-8")
          } catch {
            return ""
          }
          const u = Y(s, {
            start: {
              line: i,
              column: l
            }
          }, {
            highlightCode: !0,
            linesBelow: 0
          });
          return K.dim(n) + "\n" + u + "\n"
        }((new Error).stack.split("\n").slice(1).find(e => !e.includes("node_modules/"))) : "";
        e ? console.log(ne(...arguments) + "\n\n" + e) : console.log(ne(...arguments))
      };
      let ae = {
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
          const r = ne(t),
            n = new Error([e, "Ignored nodes: comments, " + ae.defaultIgnore + "\n" + r].filter(Boolean).join("\n\n"));
          return n.name = "TestingLibraryElementError", n
        },
        _disableExpensiveErrorDiagnostics: !1,
        computedStyleSupportsPseudoElements: !1
      };

      function ie(e) {
        "function" == typeof e && (e = e(ae)), ae = {
          ...ae,
          ...e
        }
      }

      function le() {
        return ae
      }
      const se = ["button", "meter", "output", "progress", "select", "textarea", "input"];

      function ue(e) {
        return se.includes(e.nodeName.toLowerCase()) ? "" : 3 === e.nodeType ? e.textContent : Array.from(e.childNodes).map(e => ue(e)).join("")
      }

      function de(e) {
        let t;
        return t = "label" === e.tagName.toLowerCase() ? ue(e) : e.value || e.textContent, t
      }

      function ce(e) {
        var t;
        if (void 0 !== e.labels) return null != (t = e.labels) ? t : [];
        if (! function(e) {
            return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || "INPUT" === e.tagName && "hidden" !== e.getAttribute("type")
          }(e)) return [];
        const r = e.ownerDocument.querySelectorAll("label");
        return Array.from(r).filter(t => t.control === e)
      }

      function pe(e, t, r) {
        let {
          selector: n = "*"
        } = void 0 === r ? {} : r;
        const o = t.getAttribute("aria-labelledby"),
          a = o ? o.split(" ") : [];
        return a.length ? a.map(t => {
          const r = e.querySelector('[id="' + t + '"]');
          return r ? {
            content: de(r),
            formControl: null
          } : {
            content: "",
            formControl: null
          }
        }) : Array.from(ce(t)).map(e => ({
          content: de(e),
          formControl: Array.from(e.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter(e => e.matches(n))[0]
        }))
      }

      function me(e) {
        if (null == e) throw new Error("It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?")
      }

      function fe(e, t, r, n) {
        if ("string" != typeof e) return !1;
        me(r);
        const o = n(e);
        return "string" == typeof r || "number" == typeof r ? o.toLowerCase().includes(r.toString().toLowerCase()) : "function" == typeof r ? r(o, t) : he(r, o)
      }

      function be(e, t, r, n) {
        if ("string" != typeof e) return !1;
        me(r);
        const o = n(e);
        return r instanceof Function ? r(o, t) : r instanceof RegExp ? he(r, o) : o === String(r)
      }

      function ye(e) {
        let {
          trim: t = !0,
          collapseWhitespace: r = !0
        } = void 0 === e ? {} : e;
        return e => {
          let n = e;
          return n = t ? n.trim() : n, n = r ? n.replace(/\s+/g, " ") : n, n
        }
      }

      function ve(e) {
        let {
          trim: t,
          collapseWhitespace: r,
          normalizer: n
        } = e;
        if (!n) return ye({
          trim: t,
          collapseWhitespace: r
        });
        if (void 0 !== t || void 0 !== r) throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
        return n
      }

      function he(e, t) {
        const r = e.test(t);
        return e.global && 0 !== e.lastIndex && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r
      }

      function ge(e) {
        return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter(e => 3 === e.nodeType && Boolean(e.textContent)).map(e => e.textContent).join("")
      }
      const Ce = function(e) {
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
          const r = t.findIndex(e => e.value && "type" === e.name && "text" === e.value);
          r >= 0 && (t = [...t.slice(0, r), ...t.slice(r + 1)]);
          const n = function(e) {
            let {
              name: t,
              attributes: r
            } = e;
            return "" + t + r.map(e => {
              let {
                name: t,
                value: r,
                constraints: n = []
              } = e;
              const o = -1 !== n.indexOf("undefined"),
                a = -1 !== n.indexOf("set");
              return void 0 !== r ? "[" + t + '="' + r + '"]' : o ? ":not([" + t + "])" : a ? "[" + t + "]:not([" + t + '=""])' : "[" + t + "]"
            }).join("")
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
        return n.sort(function(e, t) {
          let {
            specificity: r
          } = e, {
            specificity: n
          } = t;
          return n - r
        })
      }(L._s);

      function Pe(e) {
        return !0 === e.hidden || ("true" === e.getAttribute("aria-hidden") || "none" === e.ownerDocument.defaultView.getComputedStyle(e).display)
      }

      function qe(e, t) {
        void 0 === t && (t = {});
        const {
          isSubtreeInaccessible: r = Pe
        } = t;
        if ("hidden" === e.ownerDocument.defaultView.getComputedStyle(e).visibility) return !0;
        let n = e;
        for (; n;) {
          if (r(n)) return !0;
          n = n.parentElement
        }
        return !1
      }

      function we(e) {
        for (const {
            match: t,
            roles: r
          }
          of Ce)
          if (t(e)) return [...r];
        return []
      }

      function Ee(e, t) {
        const r = e.getAttribute(t);
        return "true" === r || "false" !== r && void 0
      }
      const xe = ye();

      function Re(e) {
        return new RegExp(function(e) {
          return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }(e.toLowerCase()), "i")
      }

      function Oe(e, t, r, n) {
        let {
          variant: o,
          name: a
        } = n, i = "";
        const l = {},
          s = [
            ["Role", "TestId"].includes(e) ? r : Re(r)
          ];
        a && (l.name = Re(a)), "Role" === e && qe(t) && (l.hidden = !0, i = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    "), Object.keys(l).length > 0 && s.push(l);
        const u = o + "By" + e;
        return {
          queryName: e,
          queryMethod: u,
          queryArgs: s,
          variant: o,
          warning: i,
          toString() {
            i && console.warn(i);
            let [e, t] = s;
            return e = "string" == typeof e ? "'" + e + "'" : e, t = t ? ", { " + Object.entries(t).map(e => {
              let [t, r] = e;
              return t + ": " + r
            }).join(", ") + " }" : "", u + "(" + e + t + ")"
          }
        }
      }

      function _e(e, t, r) {
        return r && (!t || t.toLowerCase() === e.toLowerCase())
      }

      function Te(e, t, r) {
        var n, o;
        if (void 0 === t && (t = "get"), e.matches(le().defaultIgnore)) return;
        const a = null != (n = e.getAttribute("role")) ? n : null == (o = we(e)) ? void 0 : o[0];
        if ("generic" !== a && _e("Role", r, a)) return Oe("Role", e, a, {
          variant: t,
          name: N(e, {
            computedStyleSupportsPseudoElements: le().computedStyleSupportsPseudoElements
          })
        });
        const i = pe(document, e).map(e => e.content).join(" ");
        if (_e("LabelText", r, i)) return Oe("LabelText", e, i, {
          variant: t
        });
        const l = e.getAttribute("placeholder");
        if (_e("PlaceholderText", r, l)) return Oe("PlaceholderText", e, l, {
          variant: t
        });
        const s = xe(ge(e));
        if (_e("Text", r, s)) return Oe("Text", e, s, {
          variant: t
        });
        if (_e("DisplayValue", r, e.value)) return Oe("DisplayValue", e, xe(e.value), {
          variant: t
        });
        const u = e.getAttribute("alt");
        if (_e("AltText", r, u)) return Oe("AltText", e, u, {
          variant: t
        });
        const d = e.getAttribute("title");
        if (_e("Title", r, d)) return Oe("Title", e, d, {
          variant: t
        });
        const c = e.getAttribute(le().testIdAttribute);
        return _e("TestId", r, c) ? Oe("TestId", e, c, {
          variant: t
        }) : void 0
      }

      function Me(e, t) {
        e.stack = t.stack.replace(t.message, e.message)
      }

      function Se(e, t) {
        const r = new Error("STACK_TRACE_MESSAGE");
        return le().asyncWrapper(() => function(e, t) {
          let {
            container: r = J(),
            timeout: n = le().asyncUtilTimeout,
            showOriginalStackTrace: o = le().showOriginalStackTrace,
            stackTraceError: a,
            interval: i = 50,
            onTimeout: l = e => (Object.defineProperty(e, "message", {
              value: le().getElementError(e.message, r).message
            }), e),
            mutationObserverOptions: s = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              characterData: !0
            }
          } = t;
          if ("function" != typeof e) throw new TypeError("Received `callback` arg must be a function");
          return new Promise(async (t, u) => {
            let d, c, p, m = !1,
              f = "idle";
            const b = setTimeout(function() {
                let e;
                d ? (e = d, o || "TestingLibraryElementError" !== e.name || Me(e, a)) : (e = new Error("Timed out in waitFor."), o || Me(e, a)), v(l(e), null)
              }, n),
              y = G();
            if (y) {
              const {
                unstable_advanceTimersWrapper: e
              } = le();
              for (g(); !m;) {
                if (!G()) {
                  const e = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                  return o || Me(e, a), void u(e)
                }
                if (await e(async () => {
                    jest.advanceTimersByTime(i)
                  }), m) break;
                g()
              }
            } else {
              try {
                Q(r)
              } catch (e) {
                return void u(e)
              }
              c = setInterval(h, i);
              const {
                MutationObserver: e
              } = Z(r);
              p = new e(h), p.observe(r, s), g()
            }

            function v(e, r) {
              m = !0, clearTimeout(b), y || (clearInterval(c), p.disconnect()), e ? u(e) : t(r)
            }

            function h() {
              if (G()) {
                const e = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                return o || Me(e, a), u(e)
              }
              return g()
            }

            function g() {
              if ("pending" !== f) try {
                const t = function(e) {
                  try {
                    return ae._disableExpensiveErrorDiagnostics = !0, e()
                  } finally {
                    ae._disableExpensiveErrorDiagnostics = !1
                  }
                }(e);
                "function" == typeof(null == t ? void 0 : t.then) ? (f = "pending", t.then(e => {
                  f = "resolved", v(null, e)
                }, e => {
                  f = "rejected", d = e
                })) : v(null, t)
              } catch (e) {
                d = e
              }
            }
          })
        }(e, {
          stackTraceError: r,
          ...t
        }))
      }

      function je(e, t) {
        return le().getElementError(e, t)
      }

      function Ae(e, t, r, n) {
        let {
          exact: o = !0,
          collapseWhitespace: a,
          trim: i,
          normalizer: l
        } = void 0 === n ? {} : n;
        const s = o ? be : fe,
          u = ve({
            collapseWhitespace: a,
            trim: i,
            normalizer: l
          });
        return Array.from(t.querySelectorAll("[" + e + "]")).filter(t => s(t.getAttribute(e), t, r, u))
      }

      function Ie(e, t) {
        return function(r) {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
          const i = e(r, ...o);
          if (i.length > 1) {
            const e = i.map(e => je(null, e).message).join("\n\n");
            throw function(e, t) {
              return je(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t)
            }(t(r, ...o) + "\n\nHere are the matching elements:\n\n" + e, r)
          }
          return i[0] || null
        }
      }

      function ke(e, t) {
        return le().getElementError("A better query is available, try this:\n" + e.toString() + "\n", t)
      }

      function Ne(e) {
        return (t, r, n, o) => Se(() => e(t, r, n), {
          container: t,
          ...o
        })
      }
      const Le = (e, t, r) => function(n) {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
          const l = e(n, ...a),
            [{
              suggest: s = le().throwSuggestions
            } = {}] = a.slice(-1);
          if (l && s) {
            const e = Te(l, r);
            if (e && !t.endsWith(e.queryName)) throw ke(e.toString(), n)
          }
          return l
        },
        Fe = (e, t, r) => function(n) {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
          const l = e(n, ...a),
            [{
              suggest: s = le().throwSuggestions
            } = {}] = a.slice(-1);
          if (l.length && s) {
            const e = [...new Set(l.map(e => {
              var t;
              return null == (t = Te(e, r)) ? void 0 : t.toString()
            }))];
            if (1 === e.length && !t.endsWith(Te(l[0], r).queryName)) throw ke(e[0], n)
          }
          return l
        };

      function Be(e, t, r) {
        const n = Le(Ie(e, t), e.name, "query"),
          o = function(e, t) {
            return function(r) {
              for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
              const i = e(r, ...o);
              if (!i.length) throw le().getElementError(t(r, ...o), r);
              return i
            }
          }(e, r),
          a = Ie(o, t),
          i = Le(a, e.name, "get");
        return [n, Fe(o, e.name.replace("query", "get"), "getAll"), i, Ne(Fe(o, e.name, "findAll")), Ne(Le(a, e.name, "find"))]
      }
      const Ue = function(e, t, r) {
          let {
            selector: n = "*",
            exact: o = !0,
            collapseWhitespace: a,
            trim: i,
            normalizer: l
          } = void 0 === r ? {} : r;
          Q(e);
          const s = o ? be : fe,
            u = ve({
              collapseWhitespace: a,
              trim: i,
              normalizer: l
            }),
            d = Array.from(e.querySelectorAll("*")).filter(e => ce(e).length || e.hasAttribute("aria-labelledby")).reduce((r, o) => {
              const a = pe(e, o, {
                selector: n
              });
              a.filter(e => Boolean(e.formControl)).forEach(e => {
                s(e.content, e.formControl, t, u) && e.formControl && r.push(e.formControl)
              });
              const i = a.filter(e => Boolean(e.content)).map(e => e.content);
              return s(i.join(" "), o, t, u) && r.push(o), i.length > 1 && i.forEach((e, n) => {
                s(e, o, t, u) && r.push(o);
                const a = [...i];
                a.splice(n, 1), a.length > 1 && s(a.join(" "), o, t, u) && r.push(o)
              }), r
            }, []).concat(Ae("aria-label", e, t, {
              exact: o,
              normalizer: u
            }));
          return Array.from(new Set(d)).filter(e => e.matches(n))
        },
        De = function(e, t) {
          for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
          const a = Ue(e, t, ...n);
          if (!a.length) {
            const r = function(e, t, r) {
              let {
                exact: n = !0,
                trim: o,
                collapseWhitespace: a,
                normalizer: i
              } = void 0 === r ? {} : r;
              const l = n ? be : fe,
                s = ve({
                  collapseWhitespace: a,
                  trim: o,
                  normalizer: i
                }),
                u = function(e) {
                  return Array.from(e.querySelectorAll("label,input")).map(e => ({
                    node: e,
                    textToMatch: de(e)
                  })).filter(e => {
                    let {
                      textToMatch: t
                    } = e;
                    return null !== t
                  })
                }(e);
              return u.filter(e => {
                let {
                  node: r,
                  textToMatch: n
                } = e;
                return l(n, r, t, s)
              }).map(e => {
                let {
                  node: t
                } = e;
                return t
              })
            }(e, t, ...n);
            if (r.length) {
              const n = r.map(t => function(e, t) {
                const r = t.getAttribute("for");
                if (!r) return null;
                const n = e.querySelector('[id="' + r + '"]');
                return n ? n.tagName.toLowerCase() : null
              }(e, t)).filter(e => !!e);
              throw n.length ? le().getElementError(n.map(e => "Found a label with the text of: " + t + ", however the element associated with this label (<" + e + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + e + " />, you can use aria-label or aria-labelledby instead.").join("\n\n"), e) : le().getElementError("Found a label with the text of: " + t + ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.', e)
            }
            throw le().getElementError("Unable to find a label with the text of: " + t, e)
          }
          return a
        },
        He = (e, t) => "Found multiple elements with the text of: " + t,
        Ve = Le(Ie(Ue, He), Ue.name, "query"),
        ze = Ie(De, He),
        $e = Ne(Fe(De, De.name, "findAll")),
        We = Ne(Le(ze, De.name, "find")),
        Ke = Fe(De, De.name, "getAll"),
        Xe = Le(ze, De.name, "get"),
        Ye = Fe(Ue, Ue.name, "queryAll"),
        Ge = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return Q(t[0]), Ae("placeholder", ...t)
        },
        Je = Fe(Ge, Ge.name, "queryAll"),
        [Ze, Qe, et, tt, rt] = Be(Ge, (e, t) => "Found multiple elements with the placeholder text of: " + t, (e, t) => "Unable to find an element with the placeholder text of: " + t),
        nt = function(e, t, r) {
          let {
            selector: n = "*",
            exact: o = !0,
            collapseWhitespace: a,
            trim: i,
            ignore: l = le().defaultIgnore,
            normalizer: s
          } = void 0 === r ? {} : r;
          Q(e);
          const u = o ? be : fe,
            d = ve({
              collapseWhitespace: a,
              trim: i,
              normalizer: s
            });
          let c = [];
          return "function" == typeof e.matches && e.matches(n) && (c = [e]), [...c, ...Array.from(e.querySelectorAll(n))].filter(e => !l || !e.matches(l)).filter(e => u(ge(e), e, t, d))
        },
        ot = Fe(nt, nt.name, "queryAll"),
        [at, it, lt, st, ut] = Be(nt, (e, t) => "Found multiple elements with the text: " + t, function(e, t, r) {
          void 0 === r && (r = {});
          const {
            collapseWhitespace: n,
            trim: o,
            normalizer: a,
            selector: i
          } = r, l = ve({
            collapseWhitespace: n,
            trim: o,
            normalizer: a
          })(t.toString());
          return "Unable to find an element with the text: " + (l !== t.toString() ? l + " (normalized from '" + t + "')" : t) + ("*" !== (null != i ? i : "*") ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
        }),
        dt = function(e, t, r) {
          let {
            exact: n = !0,
            collapseWhitespace: o,
            trim: a,
            normalizer: i
          } = void 0 === r ? {} : r;
          Q(e);
          const l = n ? be : fe,
            s = ve({
              collapseWhitespace: o,
              trim: a,
              normalizer: i
            });
          return Array.from(e.querySelectorAll("input,textarea,select")).filter(e => "SELECT" === e.tagName ? Array.from(e.options).filter(e => e.selected).some(e => l(ge(e), e, t, s)) : l(e.value, e, t, s))
        },
        ct = Fe(dt, dt.name, "queryAll"),
        [pt, mt, ft, bt, yt] = Be(dt, (e, t) => "Found multiple elements with the display value: " + t + ".", (e, t) => "Unable to find an element with the display value: " + t + "."),
        vt = /^(img|input|area|.+-.+)$/i,
        ht = function(e, t, r) {
          return void 0 === r && (r = {}), Q(e), Ae("alt", e, t, r).filter(e => vt.test(e.tagName))
        },
        gt = Fe(ht, ht.name, "queryAll"),
        [Ct, Pt, qt, wt, Et] = Be(ht, (e, t) => "Found multiple elements with the alt text: " + t, (e, t) => "Unable to find an element with the alt text: " + t),
        xt = function(e, t, r) {
          let {
            exact: n = !0,
            collapseWhitespace: o,
            trim: a,
            normalizer: i
          } = void 0 === r ? {} : r;
          Q(e);
          const l = n ? be : fe,
            s = ve({
              collapseWhitespace: o,
              trim: a,
              normalizer: i
            });
          return Array.from(e.querySelectorAll("[title], svg > title")).filter(e => l(e.getAttribute("title"), e, t, s) || (e => {
            var t;
            return "title" === e.tagName.toLowerCase() && "svg" === (null == (t = e.parentElement) ? void 0 : t.tagName.toLowerCase())
          })(e) && l(ge(e), e, t, s))
        },
        Rt = Fe(xt, xt.name, "queryAll"),
        [Ot, _t, Tt, Mt, St] = Be(xt, (e, t) => "Found multiple elements with the title: " + t + ".", (e, t) => "Unable to find an element with the title: " + t + "."),
        jt = function(e, t, r) {
          let {
            hidden: n = le().defaultHidden,
            name: o,
            description: a,
            queryFallbacks: i = !1,
            selected: l,
            busy: s,
            checked: u,
            pressed: d,
            current: c,
            level: p,
            expanded: m,
            value: {
              now: f,
              min: b,
              max: y,
              text: v
            } = {}
          } = void 0 === r ? {} : r;
          var h, g, C, P, q, w, E, x, R, O;
          if (Q(e), void 0 !== l && void 0 === (null == (h = L.Ot.get(t)) ? void 0 : h.props["aria-selected"])) throw new Error('"aria-selected" is not supported on role "' + t + '".');
          if (void 0 !== s && void 0 === (null == (g = L.Ot.get(t)) ? void 0 : g.props["aria-busy"])) throw new Error('"aria-busy" is not supported on role "' + t + '".');
          if (void 0 !== u && void 0 === (null == (C = L.Ot.get(t)) ? void 0 : C.props["aria-checked"])) throw new Error('"aria-checked" is not supported on role "' + t + '".');
          if (void 0 !== d && void 0 === (null == (P = L.Ot.get(t)) ? void 0 : P.props["aria-pressed"])) throw new Error('"aria-pressed" is not supported on role "' + t + '".');
          if (void 0 !== c && void 0 === (null == (q = L.Ot.get(t)) ? void 0 : q.props["aria-current"])) throw new Error('"aria-current" is not supported on role "' + t + '".');
          if (void 0 !== p && "heading" !== t) throw new Error('Role "' + t + '" cannot have "level" property.');
          if (void 0 !== f && void 0 === (null == (w = L.Ot.get(t)) ? void 0 : w.props["aria-valuenow"])) throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
          if (void 0 !== y && void 0 === (null == (E = L.Ot.get(t)) ? void 0 : E.props["aria-valuemax"])) throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
          if (void 0 !== b && void 0 === (null == (x = L.Ot.get(t)) ? void 0 : x.props["aria-valuemin"])) throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
          if (void 0 !== v && void 0 === (null == (R = L.Ot.get(t)) ? void 0 : R.props["aria-valuetext"])) throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
          if (void 0 !== m && void 0 === (null == (O = L.Ot.get(t)) ? void 0 : O.props["aria-expanded"])) throw new Error('"aria-expanded" is not supported on role "' + t + '".');
          const _ = new WeakMap;

          function T(e) {
            return _.has(e) || _.set(e, Pe(e)), _.get(e)
          }
          return Array.from(e.querySelectorAll(function(e) {
            var t;
            const r = '*[role~="' + e + '"]',
              n = null != (t = L.wZ.get(e)) ? t : new Set,
              o = new Set(Array.from(n).map(e => {
                let {
                  name: t
                } = e;
                return t
              }));
            return [r].concat(Array.from(o)).join(",")
          }(t))).filter(e => {
            if (e.hasAttribute("role")) {
              const r = e.getAttribute("role");
              if (i) return r.split(" ").filter(Boolean).some(e => e === t);
              const [n] = r.split(" ");
              return n === t
            }
            return we(e).some(e => e === t)
          }).filter(e => {
            if (void 0 !== l) return l === function(e) {
              return "OPTION" === e.tagName ? e.selected : Ee(e, "aria-selected")
            }(e);
            if (void 0 !== s) return s === function(e) {
              return "true" === e.getAttribute("aria-busy")
            }(e);
            if (void 0 !== u) return u === function(e) {
              if (!("indeterminate" in e) || !e.indeterminate) return "checked" in e ? e.checked : Ee(e, "aria-checked")
            }(e);
            if (void 0 !== d) return d === function(e) {
              return Ee(e, "aria-pressed")
            }(e);
            if (void 0 !== c) return c === function(e) {
              var t, r;
              return null != (t = null != (r = Ee(e, "aria-current")) ? r : e.getAttribute("aria-current")) && t
            }(e);
            if (void 0 !== m) return m === function(e) {
              return Ee(e, "aria-expanded")
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
            if (void 0 !== f || void 0 !== y || void 0 !== b || void 0 !== v) {
              let r = !0;
              var t;
              return void 0 !== f && r && (r = f === function(e) {
                const t = e.getAttribute("aria-valuenow");
                return null === t ? void 0 : +t
              }(e)), void 0 !== y && r && (r = y === function(e) {
                const t = e.getAttribute("aria-valuemax");
                return null === t ? void 0 : +t
              }(e)), void 0 !== b && r && (r = b === function(e) {
                const t = e.getAttribute("aria-valuemin");
                return null === t ? void 0 : +t
              }(e)), void 0 !== v && r && (r = be(null != (t = function(e) {
                const t = e.getAttribute("aria-valuetext");
                return null === t ? void 0 : t
              }(e)) ? t : null, e, v, e => e)), r
            }
            return !0
          }).filter(e => void 0 === o || be(N(e, {
            computedStyleSupportsPseudoElements: le().computedStyleSupportsPseudoElements
          }), e, o, e => e)).filter(e => void 0 === a || be(k(e, {
            computedStyleSupportsPseudoElements: le().computedStyleSupportsPseudoElements
          }), e, a, e => e)).filter(e => !1 !== n || !1 === qe(e, {
            isSubtreeInaccessible: T
          }))
        },
        At = e => {
          let t = "";
          return t = void 0 === e ? "" : "string" == typeof e ? ' and name "' + e + '"' : " and name `" + e + "`", t
        },
        It = Fe(jt, jt.name, "queryAll"),
        [kt, Nt, Lt, Ft, Bt] = Be(jt, function(e, t, r) {
          let {
            name: n
          } = void 0 === r ? {} : r;
          return 'Found multiple elements with the role "' + t + '"' + At(n)
        }, function(e, t, r) {
          let {
            hidden: n = le().defaultHidden,
            name: o,
            description: a
          } = void 0 === r ? {} : r;
          if (le()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + At(o);
          let i, l = "";
          Array.from(e.children).forEach(e => {
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
                  return [t, ...Array.from(t.children).reduce((t, r) => [...t, ...e(r)], [])]
                }(e).filter(e => !1 !== r || !1 === qe(e)).reduce((e, t) => {
                  let r = [];
                  return r = t.hasAttribute("role") ? t.getAttribute("role").split(" ").slice(0, 1) : we(t), r.reduce((e, r) => Array.isArray(e[r]) ? {
                    ...e,
                    [r]: [...e[r], t]
                  } : {
                    ...e,
                    [r]: [t]
                  }, e)
                }, {})
              }(e, {
                hidden: r
              });
              return Object.entries(o).filter(e => {
                let [t] = e;
                return "generic" !== t
              }).map(e => {
                let [t, r] = e;
                const o = "-".repeat(50);
                return t + ":\n\n" + r.map(e => {
                  const t = 'Name "' + N(e, {
                      computedStyleSupportsPseudoElements: le().computedStyleSupportsPseudoElements
                    }) + '":\n',
                    r = ne(e.cloneNode(!1));
                  return n ? t + 'Description "' + k(e, {
                    computedStyleSupportsPseudoElements: le().computedStyleSupportsPseudoElements
                  }) + '":\n' + r : "" + t + r
                }).join("\n\n") + "\n\n" + o
              }).join("\n")
            }(e, {
              hidden: n,
              includeDescription: void 0 !== a
            })
          }), i = 0 === l.length ? !1 === n ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : "There are no available roles." : ("\nHere are the " + (!1 === n ? "accessible" : "available") + " roles:\n\n  " + l.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") + "\n").trim();
          let s = "";
          s = void 0 === o ? "" : "string" == typeof o ? ' and name "' + o + '"' : " and name `" + o + "`";
          let u = "";
          return u = void 0 === a ? "" : "string" == typeof a ? ' and description "' + a + '"' : " and description `" + a + "`", ("\nUnable to find an " + (!1 === n ? "accessible " : "") + 'element with the role "' + t + '"' + s + u + "\n\n" + i).trim()
        }),
        Ut = () => le().testIdAttribute,
        Dt = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return Q(t[0]), Ae(Ut(), ...t)
        },
        Ht = Fe(Dt, Dt.name, "queryAll"),
        [Vt, zt, $t, Wt, Kt] = Be(Dt, (e, t) => "Found multiple elements by: [" + Ut() + '="' + t + '"]', (e, t) => "Unable to find an element by: [" + Ut() + '="' + t + '"]');
      var Xt = Object.freeze({
        __proto__: null,
        queryAllByLabelText: Ye,
        queryByLabelText: Ve,
        getAllByLabelText: Ke,
        getByLabelText: Xe,
        findAllByLabelText: $e,
        findByLabelText: We,
        queryByPlaceholderText: Ze,
        queryAllByPlaceholderText: Je,
        getByPlaceholderText: et,
        getAllByPlaceholderText: Qe,
        findAllByPlaceholderText: tt,
        findByPlaceholderText: rt,
        queryByText: at,
        queryAllByText: ot,
        getByText: lt,
        getAllByText: it,
        findAllByText: st,
        findByText: ut,
        queryByDisplayValue: pt,
        queryAllByDisplayValue: ct,
        getByDisplayValue: ft,
        getAllByDisplayValue: mt,
        findAllByDisplayValue: bt,
        findByDisplayValue: yt,
        queryByAltText: Ct,
        queryAllByAltText: gt,
        getByAltText: qt,
        getAllByAltText: Pt,
        findAllByAltText: wt,
        findByAltText: Et,
        queryByTitle: Ot,
        queryAllByTitle: Rt,
        getByTitle: Tt,
        getAllByTitle: _t,
        findAllByTitle: Mt,
        findByTitle: St,
        queryByRole: kt,
        queryAllByRole: It,
        getAllByRole: Nt,
        getByRole: Lt,
        findAllByRole: Ft,
        findByRole: Bt,
        queryByTestId: Vt,
        queryAllByTestId: Ht,
        getByTestId: $t,
        getAllByTestId: zt,
        findAllByTestId: Wt,
        findByTestId: Kt
      });

      function Yt(e, t, r) {
        return void 0 === t && (t = Xt), void 0 === r && (r = {}), Object.keys(t).reduce((r, n) => {
          const o = t[n];
          return r[n] = o.bind(null, e), r
        }, r)
      }
      const Gt = {
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
          },
          pageHide: {
            EventType: "PageTransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          pageShow: {
            EventType: "PageTransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          }
        },
        Jt = {
          doubleClick: "dblClick"
        };

      function Zt(e, t) {
        return le().eventWrapper(() => {
          if (!t) throw new Error("Unable to fire an event - please provide an event object.");
          if (!e) throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
          return e.dispatchEvent(t)
        })
      }

      function Qt(e, t, r, n) {
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
              files: s,
              ...u
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
        }(t, l), void 0 !== s && Object.defineProperty(t, "files", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: s
        }), Object.assign(t, u);
        const d = Z(t),
          c = d[o] || d.Event;
        let p;
        if ("function" == typeof c) p = new c(e, i);
        else {
          p = d.document.createEvent(o);
          const {
            bubbles: t,
            cancelable: r,
            detail: n,
            ...a
          } = i;
          p.initEvent(e, t, r, n), Object.keys(a).forEach(e => {
            p[e] = a[e]
          })
        }
        return ["dataTransfer", "clipboardData"].forEach(e => {
          const t = i[e];
          "object" == typeof t && ("function" == typeof d.DataTransfer ? Object.defineProperty(p, e, {
            value: Object.getOwnPropertyNames(t).reduce((e, r) => (Object.defineProperty(e, r, {
              value: t[r]
            }), e), new d.DataTransfer)
          }) : Object.defineProperty(p, e, {
            value: t
          }))
        }), p
      }
      Object.keys(Gt).forEach(e => {
        const {
          EventType: t,
          defaultInit: r
        } = Gt[e], n = e.toLowerCase();
        Qt[e] = (e, o) => Qt(n, e, o, {
          EventType: t,
          defaultInit: r
        }), Zt[e] = (t, r) => Zt(t, Qt[e](t, r))
      }), Object.keys(Jt).forEach(e => {
        const t = Jt[e];
        Zt[e] = function() {
          return Zt[t](...arguments)
        }
      });
      const er = {
          debug: (e, t, r) => Array.isArray(e) ? e.forEach(e => oe(e, t, r)) : oe(e, t, r),
          logTestingPlaygroundURL: function(e) {
            if (void 0 === e && (e = J().body), !e || !("innerHTML" in e)) return void console.log("The element you're providing isn't a valid DOM element.");
            if (!e.innerHTML) return void console.log("The provided element doesn't have any children.");
            const t = (r = e.innerHTML, "https://testing-playground.com/#markup=" + (n = r, B().compressToEncodedURIComponent(n.replace(/[ \t]*[\n][ \t]*/g, "\n"))));
            var r, n;
            return console.log("Open this URL in your browser\n\n" + t), t
          }
        },
        tr = "undefined" != typeof document && document.body ? Yt(document.body, Xt, er) : Object.keys(Xt).reduce((e, t) => (e[t] = () => {
          throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error")
        }, e), er)
    },
    79812(e, t, r) {
      "use strict";
      r.d(t, {
        XX: () => S,
        nj: () => l.nj,
        rC: () => b
      });
      var n = r(93082),
        o = r(16552),
        a = r(84017),
        i = r(5643),
        l = r(22890),
        s = r(43431);
      const u = "function" == typeof n.act ? n.act : o.act;

      function d() {
        if ("undefined" != typeof globalThis) return globalThis;
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== r.g) return r.g;
        throw new Error("unable to locate global object")
      }

      function c(e) {
        d().IS_REACT_ACT_ENVIRONMENT = e
      }

      function p() {
        return d().IS_REACT_ACT_ENVIRONMENT
      }
      const m = (f = u, e => {
        const t = p();
        c(!0);
        try {
          let r = !1;
          const n = f(() => {
            const t = e();
            return null !== t && "object" == typeof t && "function" == typeof t.then && (r = !0), t
          });
          if (r) {
            const e = n;
            return {
              then: (r, n) => {
                e.then(e => {
                  c(t), r(e)
                }, e => {
                  c(t), n(e)
                })
              }
            }
          }
          return c(t), n
        } catch (e) {
          throw c(t), e
        }
      });
      var f;
      const b = (...e) => (0, l.rC)(...e);
      Object.keys(l.rC).forEach(e => {
        b[e] = (...t) => l.rC[e](...t)
      });
      const y = b.mouseEnter,
        v = b.mouseLeave;
      b.mouseEnter = (...e) => (y(...e), b.mouseOver(...e)), b.mouseLeave = (...e) => (v(...e), b.mouseOut(...e));
      const h = b.pointerEnter,
        g = b.pointerLeave;
      b.pointerEnter = (...e) => (h(...e), b.pointerOver(...e)), b.pointerLeave = (...e) => (g(...e), b.pointerOut(...e));
      const C = b.select;
      b.select = (e, t) => {
        C(e, t), e.focus(), b.keyUp(e, t)
      };
      const P = b.blur,
        q = b.focus;
      b.blur = (...e) => (b.focusOut(...e), P(...e)), b.focus = (...e) => (b.focusIn(...e), q(...e));
      let w = {
        reactStrictMode: !1
      };
      (0, l.jK)({
        unstable_advanceTimersWrapper: e => m(e),
        asyncWrapper: async e => {
          const t = p();
          c(!1);
          try {
            const t = await e();
            return await new Promise(e => {
              setTimeout(() => {
                e()
              }, 0), "undefined" == typeof jest || null === jest || !0 !== setTimeout._isMockFunction && !Object.prototype.hasOwnProperty.call(setTimeout, "clock") || jest.advanceTimersByTime(0)
            }), t
          } finally {
            c(t)
          }
        },
        eventWrapper: e => {
          let t;
          return m(() => {
            t = e()
          }), t
        }
      });
      const E = new Set,
        x = [];

      function R(e, t) {
        return t ?? {
          ...(0, l.zj)(),
          ...w
        }.reactStrictMode ? n.createElement(n.StrictMode, null, e) : e
      }

      function O(e, t) {
        return t ? n.createElement(t, null, e) : e
      }

      function _(e, {
        hydrate: t,
        onCaughtError: r,
        onRecoverableError: n,
        ui: o,
        wrapper: a,
        reactStrictMode: l
      }) {
        let s;
        return t ? m(() => {
          s = i.c(e, R(O(o, a), l), {
            onCaughtError: r,
            onRecoverableError: n
          })
        }) : s = i.H(e, {
          onCaughtError: r,
          onRecoverableError: n
        }), {
          hydrate() {
            if (!t) throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.")
          },
          render(e) {
            s.render(e)
          },
          unmount() {
            s.unmount()
          }
        }
      }

      function T(e) {
        return {
          hydrate(t) {
            a.hydrate(t, e)
          },
          render(t) {
            a.render(t, e)
          },
          unmount() {
            a.unmountComponentAtNode(e)
          }
        }
      }

      function M(e, {
        baseElement: t,
        container: r,
        hydrate: n,
        queries: o,
        root: a,
        wrapper: i,
        reactStrictMode: s
      }) {
        return m(() => {
          n ? a.hydrate(R(O(e, i), s), r) : a.render(R(O(e, i), s), r)
        }), {
          container: r,
          baseElement: t,
          debug: (e = t, r, n) => Array.isArray(e) ? e.forEach(e => console.log((0, l.fE)(e, r, n))) : console.log((0, l.fE)(e, r, n)),
          unmount: () => {
            m(() => {
              a.unmount()
            })
          },
          rerender: e => {
            M(e, {
              container: r,
              baseElement: t,
              root: a,
              wrapper: i,
              reactStrictMode: s
            })
          },
          asFragment: () => {
            if ("function" == typeof document.createRange) return document.createRange().createContextualFragment(r.innerHTML); {
              const e = document.createElement("template");
              return e.innerHTML = r.innerHTML, e.content
            }
          },
          ...(0, l.E5)(t, o)
        }
      }

      function S(e, {
        container: t,
        baseElement: r = t,
        legacyRoot: n = !1,
        onCaughtError: o,
        onUncaughtError: i,
        onRecoverableError: l,
        queries: s,
        hydrate: u = !1,
        wrapper: d,
        reactStrictMode: c
      } = {}) {
        if (void 0 !== i) throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
        if (n && "function" != typeof a.render) {
          const e = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
          throw Error.captureStackTrace(e, S), e
        }
        let p;
        return r || (r = document.body), t || (t = r.appendChild(document.createElement("div"))), E.has(t) ? x.forEach(e => {
          e.container === t && (p = e.root)
        }) : (p = (n ? T : _)(t, {
          hydrate: u,
          onCaughtError: o,
          onRecoverableError: l,
          ui: e,
          wrapper: d,
          reactStrictMode: c
        }), x.push({
          container: t,
          root: p
        }), E.add(t)), M(e, {
          container: t,
          baseElement: r,
          queries: s,
          hydrate: u,
          wrapper: d,
          root: p,
          reactStrictMode: c
        })
      }

      function j() {
        x.forEach(({
          root: e,
          container: t
        }) => {
          m(() => {
            e.unmount()
          }), t.parentNode === document.body && document.body.removeChild(t)
        }), x.length = 0, E.clear()
      }
      if ((void 0 === s || !s.env?.RTL_SKIP_AUTO_CLEANUP) && ("function" == typeof afterEach ? afterEach(() => {
          j()
        }) : "function" == typeof teardown && teardown(() => {
          j()
        }), "function" == typeof beforeAll && "function" == typeof afterAll)) {
        let e = p();
        beforeAll(() => {
          e = p(), c(!0)
        }), afterAll(() => {
          c(e)
        })
      }
    },
    3932(e) {
      "use strict";
      e.exports = ({
        onlyFirst: e = !1
      } = {}) => {
        const t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g")
      }
    },
    5095(e, t, r) {
      "use strict";
      e = r.nmd(e);
      const n = (e = 0) => t => `[${38+e};5;${t}m`,
        o = (e = 0) => (t, r, n) => `[${38+e};2;${t};${r};${n}m`;
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
                3 === r.length && (r = r.split("").map(e => e + e).join(""));
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
    80241(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = (n = r(73855)) && n.__esModule ? n : {
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
      var s = [
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
          ["aria-braillelabel", {
            type: "string"
          }],
          ["aria-brailleroledescription", {
            type: "string"
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
          ["aria-description", {
            type: "string"
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
        u = {
          entries: function() {
            return s
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = i(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  l = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    l = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (l) throw o
                    }
                  }
                }
              }(s);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = a(t.value, 2),
                  l = o[0],
                  u = o[1];
                e.call(r, u, l, s)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = s.find(function(t) {
              return t[0] === e
            });
            return t && t[1]
          },
          has: function(e) {
            return !!u.get(e)
          },
          keys: function() {
            return s.map(function(e) {
              return a(e, 1)[0]
            })
          },
          values: function() {
            return s.map(function(e) {
              return a(e, 2)[1]
            })
          }
        },
        d = (0, o.default)(u, u.entries());
      t.default = d
    },
    42614(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = (n = r(73855)) && n.__esModule ? n : {
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
      var s = [
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
        u = {
          entries: function() {
            return s
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = i(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  l = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    l = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (l) throw o
                    }
                  }
                }
              }(s);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = a(t.value, 2),
                  l = o[0],
                  u = o[1];
                e.call(r, u, l, s)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = s.find(function(t) {
              return t[0] === e
            });
            return t && t[1]
          },
          has: function(e) {
            return !!u.get(e)
          },
          keys: function() {
            return s.map(function(e) {
              return a(e, 1)[0]
            })
          },
          values: function() {
            return s.map(function(e) {
              return a(e, 2)[1]
            })
          }
        },
        d = (0, o.default)(u, u.entries());
      t.default = d
    },
    87166(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = r(29320),
        o = i(r(73855)),
        a = i(r(31829));

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
        }(e, t) || s(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function s(e, t) {
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
      for (var d = [], c = a.default.keys(), p = 0; p < c.length; p++) {
        var m = c[p],
          f = a.default.get(m);
        if (f)
          for (var b = [].concat(f.baseConcepts, f.relatedConcepts), y = 0; y < b.length; y++) {
            var v = b[y];
            "HTML" === v.module && function() {
              var e = v.concept;
              if (e) {
                var t, r = d.find(function(t) {
                  return (0, n.dequal)(t, e)
                });
                t = r ? r[1] : [];
                for (var o = !0, a = 0; a < t.length; a++)
                  if (t[a] === m) {
                    o = !1;
                    break
                  } o && t.push(m), d.push([e, t])
              }
            }()
          }
      }
      var h = {
          entries: function() {
            return d
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = s(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  i = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    i = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (i) throw o
                    }
                  }
                }
              }(d);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = l(t.value, 2),
                  a = o[0],
                  i = o[1];
                e.call(r, i, a, d)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = d.find(function(t) {
              return e.name === t[0].name && (0, n.dequal)(e.attributes, t[0].attributes)
            });
            return t && t[1]
          },
          has: function(e) {
            return !!h.get(e)
          },
          keys: function() {
            return d.map(function(e) {
              return l(e, 1)[0]
            })
          },
          values: function() {
            return d.map(function(e) {
              return l(e, 2)[1]
            })
          }
        },
        g = (0, o.default)(h, h.entries());
      t.default = g
    },
    39337(e, t) {
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
          ["roletype", "widget"]
        ]
      }
    },
    74999(e, t) {
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
    77840(e, t) {
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
    10822(e, t) {
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
    7257(e, t) {
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
    882(e, t) {
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
    35551(e, t) {
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
    70869(e, t) {
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
    83438(e, t) {
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
    72397(e, t) {
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
    83718(e, t) {
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
    33086(e, t) {
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
    86705(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = b(r(39337)),
        o = b(r(74999)),
        a = b(r(77840)),
        i = b(r(10822)),
        l = b(r(7257)),
        s = b(r(882)),
        u = b(r(35551)),
        d = b(r(70869)),
        c = b(r(83438)),
        p = b(r(72397)),
        m = b(r(83718)),
        f = b(r(33086));

      function b(e) {
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
        ["roletype", s.default],
        ["section", u.default],
        ["sectionhead", d.default],
        ["select", c.default],
        ["structure", p.default],
        ["widget", m.default],
        ["window", f.default]
      ];
      t.default = y
    },
    63594(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = H(r(18209)),
        o = H(r(21409)),
        a = H(r(38001)),
        i = H(r(95390)),
        l = H(r(11704)),
        s = H(r(47746)),
        u = H(r(67991)),
        d = H(r(65211)),
        c = H(r(67714)),
        p = H(r(48237)),
        m = H(r(10392)),
        f = H(r(64116)),
        b = H(r(54082)),
        y = H(r(69773)),
        v = H(r(15985)),
        h = H(r(71010)),
        g = H(r(80461)),
        C = H(r(36391)),
        P = H(r(72019)),
        q = H(r(54998)),
        w = H(r(67809)),
        E = H(r(38711)),
        x = H(r(24245)),
        R = H(r(37327)),
        O = H(r(79652)),
        _ = H(r(57507)),
        T = H(r(18611)),
        M = H(r(87022)),
        S = H(r(19331)),
        j = H(r(5337)),
        A = H(r(46764)),
        I = H(r(3890)),
        k = H(r(42071)),
        N = H(r(73330)),
        L = H(r(85758)),
        F = H(r(87885)),
        B = H(r(65651)),
        U = H(r(84354)),
        D = H(r(40529));

      function H(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var V = [
        ["doc-abstract", n.default],
        ["doc-acknowledgments", o.default],
        ["doc-afterword", a.default],
        ["doc-appendix", i.default],
        ["doc-backlink", l.default],
        ["doc-biblioentry", s.default],
        ["doc-bibliography", u.default],
        ["doc-biblioref", d.default],
        ["doc-chapter", c.default],
        ["doc-colophon", p.default],
        ["doc-conclusion", m.default],
        ["doc-cover", f.default],
        ["doc-credit", b.default],
        ["doc-credits", y.default],
        ["doc-dedication", v.default],
        ["doc-endnote", h.default],
        ["doc-endnotes", g.default],
        ["doc-epigraph", C.default],
        ["doc-epilogue", P.default],
        ["doc-errata", q.default],
        ["doc-example", w.default],
        ["doc-footnote", E.default],
        ["doc-foreword", x.default],
        ["doc-glossary", R.default],
        ["doc-glossref", O.default],
        ["doc-index", _.default],
        ["doc-introduction", T.default],
        ["doc-noteref", M.default],
        ["doc-notice", S.default],
        ["doc-pagebreak", j.default],
        ["doc-pagelist", A.default],
        ["doc-part", I.default],
        ["doc-preface", k.default],
        ["doc-prologue", N.default],
        ["doc-pullquote", L.default],
        ["doc-qna", F.default],
        ["doc-subtitle", B.default],
        ["doc-tip", U.default],
        ["doc-toc", D.default]
      ];
      t.default = V
    },
    80672(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = i(r(73527)),
        o = i(r(17889)),
        a = i(r(59906));

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
    54116(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = je(r(15579)),
        o = je(r(93835)),
        a = je(r(5083)),
        i = je(r(66275)),
        l = je(r(27987)),
        s = je(r(45130)),
        u = je(r(85113)),
        d = je(r(14727)),
        c = je(r(61217)),
        p = je(r(62860)),
        m = je(r(19644)),
        f = je(r(2782)),
        b = je(r(52654)),
        y = je(r(94975)),
        v = je(r(51596)),
        h = je(r(29760)),
        g = je(r(78879)),
        C = je(r(80817)),
        P = je(r(18618)),
        q = je(r(24876)),
        w = je(r(45731)),
        E = je(r(98489)),
        x = je(r(64477)),
        R = je(r(85039)),
        O = je(r(61384)),
        _ = je(r(58025)),
        T = je(r(40153)),
        M = je(r(31278)),
        S = je(r(65895)),
        j = je(r(3618)),
        A = je(r(20412)),
        I = je(r(60265)),
        k = je(r(93853)),
        N = je(r(27400)),
        L = je(r(38518)),
        F = je(r(30515)),
        B = je(r(16760)),
        U = je(r(17288)),
        D = je(r(14161)),
        H = je(r(59043)),
        V = je(r(76254)),
        z = je(r(22729)),
        $ = je(r(74149)),
        W = je(r(74208)),
        K = je(r(34950)),
        X = je(r(76656)),
        Y = je(r(41459)),
        G = je(r(75843)),
        J = je(r(49613)),
        Z = je(r(27748)),
        Q = je(r(15211)),
        ee = je(r(18981)),
        te = je(r(753)),
        re = je(r(73962)),
        ne = je(r(15155)),
        oe = je(r(63901)),
        ae = je(r(29069)),
        ie = je(r(97082)),
        le = je(r(19212)),
        se = je(r(95919)),
        ue = je(r(21913)),
        de = je(r(58532)),
        ce = je(r(41982)),
        pe = je(r(84556)),
        me = je(r(66337)),
        fe = je(r(91815)),
        be = je(r(43310)),
        ye = je(r(25264)),
        ve = je(r(92237)),
        he = je(r(40441)),
        ge = je(r(30682)),
        Ce = je(r(88021)),
        Pe = je(r(25638)),
        qe = je(r(90314)),
        we = je(r(14707)),
        Ee = je(r(64197)),
        xe = je(r(79120)),
        Re = je(r(46512)),
        Oe = je(r(35058)),
        _e = je(r(50610)),
        Te = je(r(49213)),
        Me = je(r(95077)),
        Se = je(r(30838));

      function je(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var Ae = [
        ["alert", n.default],
        ["alertdialog", o.default],
        ["application", a.default],
        ["article", i.default],
        ["banner", l.default],
        ["blockquote", s.default],
        ["button", u.default],
        ["caption", d.default],
        ["cell", c.default],
        ["checkbox", p.default],
        ["code", m.default],
        ["columnheader", f.default],
        ["combobox", b.default],
        ["complementary", y.default],
        ["contentinfo", v.default],
        ["definition", h.default],
        ["deletion", g.default],
        ["dialog", C.default],
        ["directory", P.default],
        ["document", q.default],
        ["emphasis", w.default],
        ["feed", E.default],
        ["figure", x.default],
        ["form", R.default],
        ["generic", O.default],
        ["grid", _.default],
        ["gridcell", T.default],
        ["group", M.default],
        ["heading", S.default],
        ["img", j.default],
        ["insertion", A.default],
        ["link", I.default],
        ["list", k.default],
        ["listbox", N.default],
        ["listitem", L.default],
        ["log", F.default],
        ["main", B.default],
        ["mark", U.default],
        ["marquee", D.default],
        ["math", H.default],
        ["menu", V.default],
        ["menubar", z.default],
        ["menuitem", $.default],
        ["menuitemcheckbox", W.default],
        ["menuitemradio", K.default],
        ["meter", X.default],
        ["navigation", Y.default],
        ["none", G.default],
        ["note", J.default],
        ["option", Z.default],
        ["paragraph", Q.default],
        ["presentation", ee.default],
        ["progressbar", te.default],
        ["radio", re.default],
        ["radiogroup", ne.default],
        ["region", oe.default],
        ["row", ae.default],
        ["rowgroup", ie.default],
        ["rowheader", le.default],
        ["scrollbar", se.default],
        ["search", ue.default],
        ["searchbox", de.default],
        ["separator", ce.default],
        ["slider", pe.default],
        ["spinbutton", me.default],
        ["status", fe.default],
        ["strong", be.default],
        ["subscript", ye.default],
        ["superscript", ve.default],
        ["switch", he.default],
        ["tab", ge.default],
        ["table", Ce.default],
        ["tablist", Pe.default],
        ["tabpanel", qe.default],
        ["term", we.default],
        ["textbox", Ee.default],
        ["time", xe.default],
        ["timer", Re.default],
        ["toolbar", Oe.default],
        ["tooltip", _e.default],
        ["tree", Te.default],
        ["treegrid", Me.default],
        ["treeitem", Se.default]
      ];
      t.default = Ae
    },
    18209(e, t) {
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
    21409(e, t) {
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
    38001(e, t) {
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
    95390(e, t) {
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
    11704(e, t) {
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
    47746(e, t) {
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
    67991(e, t) {
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
    65211(e, t) {
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
    67714(e, t) {
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
    48237(e, t) {
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
    10392(e, t) {
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
    64116(e, t) {
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
    54082(e, t) {
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
    69773(e, t) {
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
    15985(e, t) {
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
    71010(e, t) {
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
    80461(e, t) {
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
    36391(e, t) {
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
    72019(e, t) {
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
    54998(e, t) {
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
    67809(e, t) {
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
    38711(e, t) {
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
    24245(e, t) {
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
    37327(e, t) {
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
    79652(e, t) {
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
    57507(e, t) {
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
    18611(e, t) {
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
    87022(e, t) {
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
    19331(e, t) {
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
    5337(e, t) {
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
    46764(e, t) {
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
    3890(e, t) {
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
    42071(e, t) {
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
    73330(e, t) {
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
    85758(e, t) {
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
    87885(e, t) {
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
    65651(e, t) {
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
    84354(e, t) {
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
    40529(e, t) {
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
    73527(e, t) {
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
    17889(e, t) {
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
    59906(e, t) {
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
    15579(e, t) {
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
    93835(e, t) {
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
    5083(e, t) {
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
    66275(e, t) {
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
    27987(e, t) {
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
            constraints: ["scoped to the body element"],
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
    45130(e, t) {
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
            name: "blockquote"
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
    85113(e, t) {
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
    14727(e, t) {
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
            name: "caption"
          },
          module: "HTML"
        }],
        requireContextRole: ["figure", "grid", "table"],
        requiredContextRole: ["figure", "grid", "table"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    61217(e, t) {
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
            constraints: ["ancestor table element has table role"],
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
    62860(e, t) {
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
    19644(e, t) {
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
            name: "code"
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
    2782(e, t) {
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
            name: "th"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "scope",
              value: "col"
            }],
            name: "th"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "scope",
              value: "colgroup"
            }],
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
    52654(e, t) {
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
            constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
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
    94975(e, t) {
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
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
            name: "aside"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
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
    51596(e, t) {
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
            constraints: ["scoped to the body element"],
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
    29760(e, t) {
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
    78879(e, t) {
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
            name: "del"
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
    80817(e, t) {
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
    18618(e, t) {
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
    24876(e, t) {
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
            name: "html"
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
    45731(e, t) {
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
            name: "em"
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
    98489(e, t) {
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
    64477(e, t) {
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
    85039(e, t) {
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
    61384(e, t) {
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
            name: "a"
          },
          module: "HTML"
        }, {
          concept: {
            name: "area"
          },
          module: "HTML"
        }, {
          concept: {
            name: "aside"
          },
          module: "HTML"
        }, {
          concept: {
            name: "b"
          },
          module: "HTML"
        }, {
          concept: {
            name: "bdo"
          },
          module: "HTML"
        }, {
          concept: {
            name: "body"
          },
          module: "HTML"
        }, {
          concept: {
            name: "data"
          },
          module: "HTML"
        }, {
          concept: {
            name: "div"
          },
          module: "HTML"
        }, {
          concept: {
            constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
            name: "footer"
          },
          module: "HTML"
        }, {
          concept: {
            constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
            name: "header"
          },
          module: "HTML"
        }, {
          concept: {
            name: "hgroup"
          },
          module: "HTML"
        }, {
          concept: {
            name: "i"
          },
          module: "HTML"
        }, {
          concept: {
            name: "pre"
          },
          module: "HTML"
        }, {
          concept: {
            name: "q"
          },
          module: "HTML"
        }, {
          concept: {
            name: "samp"
          },
          module: "HTML"
        }, {
          concept: {
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            name: "small"
          },
          module: "HTML"
        }, {
          concept: {
            name: "span"
          },
          module: "HTML"
        }, {
          concept: {
            name: "u"
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
    58025(e, t) {
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
        relatedConcepts: [],
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
    40153(e, t) {
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
            constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
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
    31278(e, t) {
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
        }, {
          concept: {
            name: "address"
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
    65895(e, t) {
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
    3618(e, t) {
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
    20412(e, t) {
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
            name: "ins"
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
    60265(e, t) {
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
              constraints: ["set"],
              name: "href"
            }],
            name: "a"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "href"
            }],
            name: "area"
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
    93853(e, t) {
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
    27400(e, t) {
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
            }],
            constraints: ["the size attribute value is greater than 1"],
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
    38518(e, t) {
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
            constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
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
    30515(e, t) {
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
    16760(e, t) {
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
    17288(e, t) {
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
        prohibitedProps: [],
        props: {
          "aria-braillelabel": null,
          "aria-brailleroledescription": null,
          "aria-description": null
        },
        relatedConcepts: [{
          concept: {
            name: "mark"
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
    14161(e, t) {
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
    59043(e, t) {
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
    76254(e, t) {
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
    22729(e, t) {
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
    74149(e, t) {
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
    74208(e, t) {
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
    34950(e, t) {
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
    76656(e, t) {
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
        relatedConcepts: [{
          concept: {
            name: "meter"
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
          ["roletype", "structure", "range"]
        ]
      }
    },
    41459(e, t) {
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
    75843(e, t) {
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
    49613(e, t) {
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
    27748(e, t) {
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
    15211(e, t) {
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
            name: "p"
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
    18981(e, t) {
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
            attributes: [{
              name: "alt",
              value: ""
            }],
            name: "img"
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
    753(e, t) {
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
    73962(e, t) {
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
    15155(e, t) {
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
    63901(e, t) {
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
    29069(e, t) {
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
    97082(e, t) {
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
    19212(e, t) {
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
    95919(e, t) {
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
    21913(e, t) {
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
    58532(e, t) {
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
            constraints: ["the list attribute is not set"],
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
    41982(e, t) {
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
    84556(e, t) {
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
    66337(e, t) {
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
    91815(e, t) {
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
    43310(e, t) {
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
            name: "strong"
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
    25264(e, t) {
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
            name: "sub"
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
    92237(e, t) {
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
            name: "sup"
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
    40441(e, t) {
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
    30682(e, t) {
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
    88021(e, t) {
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
    25638(e, t) {
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
    90314(e, t) {
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
    14707(e, t) {
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
    64197(e, t) {
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
            constraints: ["the list attribute is not set"],
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
            constraints: ["the list attribute is not set"],
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
            constraints: ["the list attribute is not set"],
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
            constraints: ["the list attribute is not set"],
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
            constraints: ["the list attribute is not set"],
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
    79120(e, t) {
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
            name: "time"
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
    46512(e, t) {
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
    35058(e, t) {
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
    50610(e, t) {
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
    49213(e, t) {
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
    95077(e, t) {
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
    30838(e, t) {
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
    59410(e, t, r) {
      "use strict";
      t.Ot = t.wZ = t._s = void 0;
      var n = s(r(80241)),
        o = s(r(42614)),
        a = s(r(31829)),
        i = s(r(87166)),
        l = s(r(45390));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      n.default, o.default;
      var u = a.default;
      t.Ot = u;
      var d = i.default;
      t._s = d;
      var c = l.default;
      t.wZ = c
    },
    45390(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = a(r(73855)),
        o = a(r(31829));

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
      for (var u = [], d = o.default.keys(), c = 0; c < d.length; c++) {
        var p = d[c],
          m = o.default.get(p),
          f = [];
        if (m) {
          for (var b = [].concat(m.baseConcepts, m.relatedConcepts), y = 0; y < b.length; y++) {
            var v = b[y];
            if ("HTML" === v.module) {
              var h = v.concept;
              null != h && f.push(h)
            }
          }
          f.length > 0 && u.push([p, f])
        }
      }
      var g = {
          entries: function() {
            return u
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = l(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  i = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    i = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (i) throw o
                    }
                  }
                }
              }(u);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = i(t.value, 2),
                  a = o[0],
                  s = o[1];
                e.call(r, s, a, u)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = u.find(function(t) {
              return t[0] === e
            });
            return t && t[1]
          },
          has: function(e) {
            return !!g.get(e)
          },
          keys: function() {
            return u.map(function(e) {
              return i(e, 1)[0]
            })
          },
          values: function() {
            return u.map(function(e) {
              return i(e, 2)[1]
            })
          }
        },
        C = (0, n.default)(g, g.entries());
      t.default = C
    },
    31829(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = s(r(86705)),
        o = s(r(54116)),
        a = s(r(63594)),
        i = s(r(80672)),
        l = s(r(73855));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function d(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = p(e)) || t && e && "number" == typeof e.length) {
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
        }(e, t) || p(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function p(e, t) {
        if (e) {
          if ("string" == typeof e) return m(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(e, t) : void 0
        }
      }

      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var f = [].concat(n.default, o.default, a.default, i.default);
      f.forEach(function(e) {
        var t, r = c(e, 2)[1],
          n = d(r.superClass);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var o, a = d(t.value);
            try {
              var i = function() {
                var e = o.value,
                  t = f.find(function(t) {
                    return c(t, 1)[0] === e
                  });
                if (t)
                  for (var n = t[1], a = 0, i = Object.keys(n.props); a < i.length; a++) {
                    var l = i[a];
                    Object.prototype.hasOwnProperty.call(r.props, l) || Object.assign(r.props, u({}, l, n.props[l]))
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
      });
      var b = {
          entries: function() {
            return f
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = d(f);
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
            var t = f.find(function(t) {
              return t[0] === e
            });
            return t && t[1]
          },
          has: function(e) {
            return !!b.get(e)
          },
          keys: function() {
            return f.map(function(e) {
              return c(e, 1)[0]
            })
          },
          values: function() {
            return f.map(function(e) {
              return c(e, 2)[1]
            })
          }
        },
        y = (0, l.default)(b, b.entries());
      t.default = y
    },
    73855(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        return "function" == typeof Symbol && "symbol" === a(Symbol.iterator) && Object.defineProperty(e, Symbol.iterator, {
          value: o.default.bind(t)
        }), e
      };
      var n, o = (n = r(2337)) && n.__esModule ? n : {
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
    2337(e, t) {
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
    29320(e, t) {
      var r = Object.prototype.hasOwnProperty;
      t.dequal = function e(t, n) {
        var o, a;
        if (t === n) return !0;
        if (t && n && (o = t.constructor) === n.constructor) {
          if (o === Date) return t.getTime() === n.getTime();
          if (o === RegExp) return t.toString() === n.toString();
          if (o === Array) {
            if ((a = t.length) === n.length)
              for (; a-- && e(t[a], n[a]););
            return -1 === a
          }
          if (!o || "object" == typeof t) {
            for (o in a = 0, t) {
              if (r.call(t, o) && ++a && !r.call(n, o)) return !1;
              if (!(o in n) || !e(t[o], n[o])) return !1
            }
            return Object.keys(n).length === a
          }
        }
        return t != t && n != n
      }
    },
    70033(e, t, r) {
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
            var r = a._compress(e, 6, function(e) {
              return t.charAt(e)
            });
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
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32, function(r) {
              return o(t, e.charAt(r))
            })
          },
          compressToUTF16: function(t) {
            return null == t ? "" : a._compress(t, 15, function(t) {
              return e(t + 32)
            }) + " "
          },
          decompressFromUTF16: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 16384, function(t) {
              return e.charCodeAt(t) - 32
            })
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
            return r.forEach(function(t) {
              i.push(e(t))
            }), a.decompress(i.join(""))
          },
          compressToEncodedURIComponent: function(e) {
            return null == e ? "" : a._compress(e, 6, function(e) {
              return r.charAt(e)
            })
          },
          decompressFromEncodedURIComponent: function(e) {
            return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, function(t) {
              return o(r, e.charAt(t))
            }))
          },
          compress: function(t) {
            return a._compress(t, 16, function(t) {
              return e(t)
            })
          },
          _compress: function(e, t, r) {
            if (null == e) return "";
            var n, o, a, i = {},
              l = {},
              s = "",
              u = "",
              d = "",
              c = 2,
              p = 3,
              m = 2,
              f = [],
              b = 0,
              y = 0;
            for (a = 0; a < e.length; a += 1)
              if (s = e.charAt(a), Object.prototype.hasOwnProperty.call(i, s) || (i[s] = p++, l[s] = !0), u = d + s, Object.prototype.hasOwnProperty.call(i, u)) d = u;
              else {
                if (Object.prototype.hasOwnProperty.call(l, d)) {
                  if (d.charCodeAt(0) < 256) {
                    for (n = 0; n < m; n++) b <<= 1, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++;
                    for (o = d.charCodeAt(0), n = 0; n < 8; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1
                  } else {
                    for (o = 1, n = 0; n < m; n++) b = b << 1 | o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o = 0;
                    for (o = d.charCodeAt(0), n = 0; n < 16; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1
                  }
                  0 == --c && (c = Math.pow(2, m), m++), delete l[d]
                } else
                  for (o = i[d], n = 0; n < m; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1;
                0 == --c && (c = Math.pow(2, m), m++), i[u] = p++, d = String(s)
              } if ("" !== d) {
              if (Object.prototype.hasOwnProperty.call(l, d)) {
                if (d.charCodeAt(0) < 256) {
                  for (n = 0; n < m; n++) b <<= 1, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++;
                  for (o = d.charCodeAt(0), n = 0; n < 8; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1
                } else {
                  for (o = 1, n = 0; n < m; n++) b = b << 1 | o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o = 0;
                  for (o = d.charCodeAt(0), n = 0; n < 16; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1
                }
                0 == --c && (c = Math.pow(2, m), m++), delete l[d]
              } else
                for (o = i[d], n = 0; n < m; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1;
              0 == --c && (c = Math.pow(2, m), m++)
            }
            for (o = 2, n = 0; n < m; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, f.push(r(b)), b = 0) : y++, o >>= 1;
            for (;;) {
              if (b <<= 1, y == t - 1) {
                f.push(r(b));
                break
              }
              y++
            }
            return f.join("")
          },
          decompress: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32768, function(t) {
              return e.charCodeAt(t)
            })
          },
          _decompress: function(t, r, n) {
            var o, a, i, l, s, u, d, c = [],
              p = 4,
              m = 4,
              f = 3,
              b = "",
              y = [],
              v = {
                val: n(0),
                position: r,
                index: 1
              };
            for (o = 0; o < 3; o += 1) c[o] = o;
            for (i = 0, s = Math.pow(2, 2), u = 1; u != s;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * u, u <<= 1;
            switch (i) {
              case 0:
                for (i = 0, s = Math.pow(2, 8), u = 1; u != s;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * u, u <<= 1;
                d = e(i);
                break;
              case 1:
                for (i = 0, s = Math.pow(2, 16), u = 1; u != s;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * u, u <<= 1;
                d = e(i);
                break;
              case 2:
                return ""
            }
            for (c[3] = d, a = d, y.push(d);;) {
              if (v.index > t) return "";
              for (i = 0, s = Math.pow(2, f), u = 1; u != s;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * u, u <<= 1;
              switch (d = i) {
                case 0:
                  for (i = 0, s = Math.pow(2, 8), u = 1; u != s;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * u, u <<= 1;
                  c[m++] = e(i), d = m - 1, p--;
                  break;
                case 1:
                  for (i = 0, s = Math.pow(2, 16), u = 1; u != s;) l = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), i |= (l > 0 ? 1 : 0) * u, u <<= 1;
                  c[m++] = e(i), d = m - 1, p--;
                  break;
                case 2:
                  return y.join("")
              }
              if (0 == p && (p = Math.pow(2, f), f++), c[d]) b = c[d];
              else {
                if (d !== m) return null;
                b = a + a.charAt(0)
              }
              y.push(b), c[m++] = a + b.charAt(0), a = b, 0 == --p && (p = Math.pow(2, f), f++)
            }
          }
        };
        return a
      }();
      void 0 === (n = function() {
        return o
      }.call(t, r, t, e)) || (e.exports = n)
    },
    80023(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.printIteratorEntries = function(e, t, r, n, o, a, i = ": ") {
        let l = "",
          s = e.next();
        if (!s.done) {
          l += t.spacingOuter;
          const u = r + t.indent;
          for (; !s.done;) l += u + a(s.value[0], t, u, n, o) + i + a(s.value[1], t, u, n, o), s = e.next(), s.done ? t.min || (l += ",") : l += "," + t.spacingInner;
          l += t.spacingOuter + r
        }
        return l
      }, t.printIteratorValues = function(e, t, r, n, o, a) {
        let i = "",
          l = e.next();
        if (!l.done) {
          i += t.spacingOuter;
          const s = r + t.indent;
          for (; !l.done;) i += s + a(l.value, t, s, n, o), l = e.next(), l.done ? t.min || (i += ",") : i += "," + t.spacingInner;
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
      }, t.printObjectProperties = function(e, t, r, n, o, a) {
        let i = "";
        const l = ((e, t) => {
          const r = Object.keys(e).sort(t);
          return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(t => {
            Object.getOwnPropertyDescriptor(e, t).enumerable && r.push(t)
          }), r
        })(e, t.compareKeys);
        if (l.length) {
          i += t.spacingOuter;
          const s = r + t.indent;
          for (let r = 0; r < l.length; r++) {
            const u = l[r];
            i += s + a(u, t, s, n, o) + ": " + a(e[u], t, s, n, o), r < l.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",")
          }
          i += t.spacingOuter + r
        }
        return i
      }
    },
    89714(e, t, r) {
      "use strict";
      t.GP = function(e, t) {
        if (t && (function(e) {
            if (Object.keys(e).forEach(e => {
                if (!S.hasOwnProperty(e)) throw new Error(`pretty-format: Unknown option "${e}".`)
              }), e.min && void 0 !== e.indent && 0 !== e.indent) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
            if (void 0 !== e.theme) {
              if (null === e.theme) throw new Error('pretty-format: Option "theme" must not be null.');
              if ("object" != typeof e.theme) throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`)
            }
          }(t), t.plugins)) {
          const r = O(t.plugins, e);
          if (null !== r) return R(r, e, N(t), "", 0, [])
        }
        const r = E(e, A(t), I(t), k(t));
        return null !== r ? r : x(e, N(t), "", 0, [])
      }, t.Nx = void 0;
      var n = p(r(5095)),
        o = r(80023),
        a = p(r(94401)),
        i = p(r(19897)),
        l = p(r(20169)),
        s = p(r(36881)),
        u = p(r(71569)),
        d = p(r(12148)),
        c = p(r(40087));

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      const m = Object.prototype.toString,
        f = Date.prototype.toISOString,
        b = Error.prototype.toString,
        y = RegExp.prototype.toString,
        v = e => "function" == typeof e.constructor && e.constructor.name || "Object",
        h = /^Symbol\((.*)\)(.*)$/,
        g = /\n/gi;
      class C extends Error {
        constructor(e, t) {
          super(e), this.stack = t, this.name = this.constructor.name
        }
      }

      function P(e, t) {
        return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]"
      }

      function q(e) {
        return String(e).replace(h, "Symbol($1)")
      }

      function w(e) {
        return "[" + b.call(e) + "]"
      }

      function E(e, t, r, n) {
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
        if ("function" === o) return P(e, t);
        if ("symbol" === o) return q(e);
        const a = m.call(e);
        return "[object WeakMap]" === a ? "WeakMap {}" : "[object WeakSet]" === a ? "WeakSet {}" : "[object Function]" === a || "[object GeneratorFunction]" === a ? P(e, t) : "[object Symbol]" === a ? q(e) : "[object Date]" === a ? isNaN(+e) ? "Date { NaN }" : f.call(e) : "[object Error]" === a ? w(e) : "[object RegExp]" === a ? r ? y.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : y.call(e) : e instanceof Error ? w(e) : null
      }

      function x(e, t, r, n, a, i) {
        if (-1 !== a.indexOf(e)) return "[Circular]";
        (a = a.slice()).push(e);
        const l = ++n > t.maxDepth,
          s = t.min;
        if (t.callToJSON && !l && e.toJSON && "function" == typeof e.toJSON && !i) return _(e.toJSON(), t, r, n, a, !0);
        const u = m.call(e);
        return "[object Arguments]" === u ? l ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, o.printListItems)(e, t, r, n, a, _) + "]" : function(e) {
          return "[object Array]" === e || "[object ArrayBuffer]" === e || "[object DataView]" === e || "[object Float32Array]" === e || "[object Float64Array]" === e || "[object Int8Array]" === e || "[object Int16Array]" === e || "[object Int32Array]" === e || "[object Uint8Array]" === e || "[object Uint8ClampedArray]" === e || "[object Uint16Array]" === e || "[object Uint32Array]" === e
        }(u) ? l ? "[" + e.constructor.name + "]" : (s ? "" : t.printBasicPrototype || "Array" !== e.constructor.name ? e.constructor.name + " " : "") + "[" + (0, o.printListItems)(e, t, r, n, a, _) + "]" : "[object Map]" === u ? l ? "[Map]" : "Map {" + (0, o.printIteratorEntries)(e.entries(), t, r, n, a, _, " => ") + "}" : "[object Set]" === u ? l ? "[Set]" : "Set {" + (0, o.printIteratorValues)(e.values(), t, r, n, a, _) + "}" : l || (e => "undefined" != typeof window && e === window)(e) ? "[" + v(e) + "]" : (s ? "" : t.printBasicPrototype || "Object" !== v(e) ? v(e) + " " : "") + "{" + (0, o.printObjectProperties)(e, t, r, n, a, _) + "}"
      }

      function R(e, t, r, n, o, a) {
        let i;
        try {
          i = function(e) {
            return null != e.serialize
          }(e) ? e.serialize(t, r, n, o, a, _) : e.print(t, e => _(e, r, n, o, a), e => {
            const t = n + r.indent;
            return t + e.replace(g, "\n" + t)
          }, {
            edgeSpacing: r.spacingOuter,
            min: r.min,
            spacing: r.spacingInner
          }, r.colors)
        } catch (e) {
          throw new C(e.message, e.stack)
        }
        if ("string" != typeof i) throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
        return i
      }

      function O(e, t) {
        for (let r = 0; r < e.length; r++) try {
          if (e[r].test(t)) return e[r]
        } catch (e) {
          throw new C(e.message, e.stack)
        }
        return null
      }

      function _(e, t, r, n, o, a) {
        const i = O(t.plugins, e);
        if (null !== i) return R(i, e, t, r, n, o);
        const l = E(e, t.printFunctionName, t.escapeRegex, t.escapeString);
        return null !== l ? l : x(e, t, r, n, o, a)
      }
      const T = {
          comment: "gray",
          content: "reset",
          prop: "yellow",
          tag: "cyan",
          value: "green"
        },
        M = Object.keys(T),
        S = {
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
          theme: T
        },
        j = e => M.reduce((t, r) => {
          const o = e.theme && void 0 !== e.theme[r] ? e.theme[r] : T[r],
            a = o && n.default[o];
          if (!a || "string" != typeof a.close || "string" != typeof a.open) throw new Error(`pretty-format: Option "theme" has a key "${r}" whose value "${o}" is undefined in ansi-styles.`);
          return t[r] = a, t
        }, Object.create(null)),
        A = e => e && void 0 !== e.printFunctionName ? e.printFunctionName : S.printFunctionName,
        I = e => e && void 0 !== e.escapeRegex ? e.escapeRegex : S.escapeRegex,
        k = e => e && void 0 !== e.escapeString ? e.escapeString : S.escapeString,
        N = e => {
          var t, r;
          return {
            callToJSON: e && void 0 !== e.callToJSON ? e.callToJSON : S.callToJSON,
            colors: e && e.highlight ? j(e) : M.reduce((e, t) => (e[t] = {
              close: "",
              open: ""
            }, e), Object.create(null)),
            compareKeys: e && "function" == typeof e.compareKeys ? e.compareKeys : S.compareKeys,
            escapeRegex: I(e),
            escapeString: k(e),
            indent: e && e.min ? "" : (r = e && void 0 !== e.indent ? e.indent : S.indent, new Array(r + 1).join(" ")),
            maxDepth: e && void 0 !== e.maxDepth ? e.maxDepth : S.maxDepth,
            min: e && void 0 !== e.min ? e.min : S.min,
            plugins: e && void 0 !== e.plugins ? e.plugins : S.plugins,
            printBasicPrototype: null === (t = null == e ? void 0 : e.printBasicPrototype) || void 0 === t || t,
            printFunctionName: A(e),
            spacingInner: e && e.min ? " " : "\n",
            spacingOuter: e && e.min ? "" : "\n"
          }
        };
      const L = {
        AsymmetricMatcher: a.default,
        ConvertAnsi: i.default,
        DOMCollection: l.default,
        DOMElement: s.default,
        Immutable: u.default,
        ReactElement: d.default,
        ReactTestComponent: c.default
      };
      t.Nx = L
    },
    94401(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(80023),
        o = "undefined" != typeof globalThis ? globalThis : void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        a = o["jest-symbol-do-not-touch"] || o.Symbol;
      const i = "function" == typeof a && a.for ? a.for("jest.asymmetricMatcher") : 1267621,
        l = (e, t, r, o, a, i) => {
          const l = e.toString();
          return "ArrayContaining" === l || "ArrayNotContaining" === l ? ++o > t.maxDepth ? "[" + l + "]" : l + " [" + (0, n.printListItems)(e.sample, t, r, o, a, i) + "]" : "ObjectContaining" === l || "ObjectNotContaining" === l ? ++o > t.maxDepth ? "[" + l + "]" : l + " {" + (0, n.printObjectProperties)(e.sample, t, r, o, a, i) + "}" : "StringMatching" === l || "StringNotMatching" === l || "StringContaining" === l || "StringNotContaining" === l ? l + " " + i(e.sample, t, r, o, a) : e.toAsymmetricMatcher()
        };
      t.serialize = l;
      const s = e => e && e.$$typeof === i;
      t.test = s;
      var u = {
        serialize: l,
        test: s
      };
      t.default = u
    },
    19897(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = a(r(3932)),
        o = a(r(5095));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      const i = e => "string" == typeof e && !!e.match((0, n.default)());
      t.test = i;
      const l = (e, t, r, a, i, l) => l(e.replace((0, n.default)(), e => {
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
      }), t, r, a, i);
      t.serialize = l;
      var s = {
        serialize: l,
        test: i
      };
      t.default = s
    },
    20169(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(80023);
      const o = ["DOMStringMap", "NamedNodeMap"],
        a = /^(HTML\w*Collection|NodeList)$/,
        i = e => {
          return e && e.constructor && !!e.constructor.name && (t = e.constructor.name, -1 !== o.indexOf(t) || a.test(t));
          var t
        };
      t.test = i;
      const l = (e, t, r, a, i, l) => {
        const s = e.constructor.name;
        return ++a > t.maxDepth ? "[" + s + "]" : (t.min ? "" : s + " ") + (-1 !== o.indexOf(s) ? "{" + (0, n.printObjectProperties)((e => "NamedNodeMap" === e.constructor.name)(e) ? Array.from(e).reduce((e, t) => (e[t.name] = t.value, e), {}) : {
          ...e
        }, t, r, a, i, l) + "}" : "[" + (0, n.printListItems)(Array.from(e), t, r, a, i, l) + "]")
      };
      t.serialize = l;
      var s = {
        serialize: l,
        test: i
      };
      t.default = s
    },
    36881(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(54353);
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
        const s = i(e) ? "DocumentFragment" : e.tagName.toLowerCase();
        return ++o > t.maxDepth ? (0, n.printElementAsLeaf)(s, t) : (0, n.printElement)(s, (0, n.printProps)(i(e) ? [] : Array.from(e.attributes).map(e => e.name).sort(), i(e) ? {} : Array.from(e.attributes).reduce((e, t) => (e[t.name] = t.value, e), {}), t, r + t.indent, o, a, l), (0, n.printChildren)(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, o, a, l), t, r)
      };
      t.serialize = l;
      var s = {
        serialize: l,
        test: a
      };
      t.default = s
    },
    71569(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(80023);
      const o = "@@__IMMUTABLE_ORDERED__@@",
        a = e => "Immutable." + e,
        i = e => "[" + e + "]",
        l = " ",
        s = (e, t, r, o, s, u, d) => ++o > t.maxDepth ? i(a(d)) : a(d) + l + "[" + (0, n.printIteratorValues)(e.values(), t, r, o, s, u) + "]",
        u = (e, t, r, u, d, c) => e["@@__IMMUTABLE_MAP__@@"] ? ((e, t, r, o, s, u, d) => ++o > t.maxDepth ? i(a(d)) : a(d) + l + "{" + (0, n.printIteratorEntries)(e.entries(), t, r, o, s, u) + "}")(e, t, r, u, d, c, e[o] ? "OrderedMap" : "Map") : e["@@__IMMUTABLE_LIST__@@"] ? s(e, t, r, u, d, c, "List") : e["@@__IMMUTABLE_SET__@@"] ? s(e, t, r, u, d, c, e[o] ? "OrderedSet" : "Set") : e["@@__IMMUTABLE_STACK__@@"] ? s(e, t, r, u, d, c, "Stack") : e["@@__IMMUTABLE_SEQ__@@"] ? ((e, t, r, o, s, u) => {
          const d = a("Seq");
          return ++o > t.maxDepth ? i(d) : e["@@__IMMUTABLE_KEYED__@@"] ? d + l + "{" + (e._iter || e._object ? (0, n.printIteratorEntries)(e.entries(), t, r, o, s, u) : "…") + "}" : d + l + "[" + (e._iter || e._array || e._collection || e._iterable ? (0, n.printIteratorValues)(e.values(), t, r, o, s, u) : "…") + "]"
        })(e, t, r, u, d, c) : ((e, t, r, o, s, u) => {
          const d = a(e._name || "Record");
          return ++o > t.maxDepth ? i(d) : d + l + "{" + (0, n.printIteratorEntries)(function(e) {
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
          }(e), t, r, o, s, u) + "}"
        })(e, t, r, u, d, c);
      t.serialize = u;
      const d = e => e && (!0 === e["@@__IMMUTABLE_ITERABLE__@@"] || !0 === e["@@__IMMUTABLE_RECORD__@@"]);
      t.test = d;
      var c = {
        serialize: u,
        test: d
      };
      t.default = c
    },
    12148(e, t, r) {
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
        }(r(32094)),
        o = r(54353);

      function a(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          r = new WeakMap;
        return (a = function(e) {
          return e ? r : t
        })(e)
      }
      const i = (e, t = []) => (Array.isArray(e) ? e.forEach(e => {
          i(e, t)
        }) : null != e && !1 !== e && t.push(e), t),
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
        s = (e, t, r, n, a, s) => ++n > t.maxDepth ? (0, o.printElementAsLeaf)(l(e), t) : (0, o.printElement)(l(e), (0, o.printProps)((e => {
          const {
            props: t
          } = e;
          return Object.keys(t).filter(e => "children" !== e && void 0 !== t[e]).sort()
        })(e), e.props, t, r + t.indent, n, a, s), (0, o.printChildren)(i(e.props.children), t, r + t.indent, n, a, s), t, r);
      t.serialize = s;
      const u = e => null != e && n.isElement(e);
      t.test = u;
      var d = {
        serialize: s,
        test: u
      };
      t.default = d
    },
    40087(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(54353),
        o = "undefined" != typeof globalThis ? globalThis : void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        a = o["jest-symbol-do-not-touch"] || o.Symbol;
      const i = "function" == typeof a && a.for ? a.for("react.test.json") : 245830487,
        l = (e, t, r, o, a, i) => ++o > t.maxDepth ? (0, n.printElementAsLeaf)(e.type, t) : (0, n.printElement)(e.type, e.props ? (0, n.printProps)((e => {
          const {
            props: t
          } = e;
          return t ? Object.keys(t).filter(e => void 0 !== t[e]).sort() : []
        })(e), e.props, t, r + t.indent, o, a, i) : "", e.children ? (0, n.printChildren)(e.children, t, r + t.indent, o, a, i) : "", t, r);
      t.serialize = l;
      const s = e => e && e.$$typeof === i;
      t.test = s;
      var u = {
        serialize: l,
        test: s
      };
      t.default = u
    },
    36319(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
    },
    54353(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.printText = t.printProps = t.printElementAsLeaf = t.printElement = t.printComment = t.printChildren = void 0;
      var n, o = (n = r(36319)) && n.__esModule ? n : {
        default: n
      };
      t.printProps = (e, t, r, n, o, a, i) => {
        const l = n + r.indent,
          s = r.colors;
        return e.map(e => {
          const u = t[e];
          let d = i(u, r, l, o, a);
          return "string" != typeof u && (-1 !== d.indexOf("\n") && (d = r.spacingOuter + l + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + s.prop.open + e + s.prop.close + "=" + s.value.open + d + s.value.close
        }).join("")
      }, t.printChildren = (e, t, r, n, o, i) => e.map(e => t.spacingOuter + r + ("string" == typeof e ? a(e, t) : i(e, t, r, n, o))).join("");
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
    11979(e, t, r) {
      "use strict";
      var n = r(93082),
        o = r(84017);
      var a = Object.assign;

      function i(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }

      function l() {
        return !0
      }

      function s() {
        return !1
      }

      function u(e) {
        function t(t, r, n, o, a) {
          for (var i in this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
          return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? l : s, this.isPropagationStopped = s, this
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
      var d = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        c = u(d),
        p = a({}, d, {
          view: 0,
          detail: 0
        });
      u(p);
      var m, f, b, y = a({}, p, {
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
          return "movementX" in e ? e.movementX : (e !== b && (b && "mousemove" === e.type ? (m = e.screenX - b.screenX, f = e.screenY - b.screenY) : f = m = 0, b = e), m)
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : f
        }
      });
      u(y), u(a({}, y, {
        dataTransfer: 0
      })), u(a({}, p, {
        relatedTarget: 0
      })), u(a({}, d, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })), u(a({}, d, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
      })), u(a({}, d, {
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

      function C(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = g[e]) && !!t[e]
      }

      function P() {
        return C
      }

      function q(e, t, r, n, o, a, i, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(r, u)
        } catch (e) {
          this.onError(e)
        }
      }
      u(a({}, p, {
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
      })), u(a({}, y, {
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
      })), u(a({}, p, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: P
      })), u(a({}, d, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })), u(a({}, y, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
      }));
      var w = !1,
        E = null,
        x = !1,
        R = null,
        O = {
          onError: function(e) {
            w = !0, E = e
          }
        };

      function _(e, t, r, n, o, a, i, l, s) {
        w = !1, E = null, q.apply(O, arguments)
      }
      var T = Array.isArray,
        M = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
        S = M[0],
        j = M[1],
        A = M[2],
        I = M[3],
        k = M[4],
        N = n.unstable_act;

      function L() {}

      function F(e) {
        return !(!e || 1 !== e.nodeType || !e.tagName)
      }

      function B(e) {
        return !F(e) && null != e && "function" == typeof e.render && "function" == typeof e.setState
      }

      function U(e, t, r) {
        var n = e.type || "unknown-event";
        e.currentTarget = j(r),
          function(e, t, r, n, o, a, i, l, s) {
            if (_.apply(this, arguments), w) {
              if (!w) throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
              var u = E;
              w = !1, E = null, x || (x = !0, R = u)
            }
          }(n, t, void 0, e), e.currentTarget = null
      }

      function D(e, t) {
        var r = e.stateNode;
        if (!r) return null;
        var n = A(r);
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
      var V = {},
        z = new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
      "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(e) {
        V[e] = function(e) {
          return function(t, r) {
            if (n.isValidElement(t)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
            if (B(t)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
            var i = "on" + e[0].toUpperCase() + e.slice(1),
              l = new L;
            l.target = t, l.type = e.toLowerCase();
            var s = S(t),
              u = new c(i, l.type, s, l, t);
            u.persist(), a(u, r), z.has(e) ? u && u._reactName && function(e, t, r) {
              e && r && r._reactName && (t = D(e, r._reactName)) && (null == r._dispatchListeners && (r._dispatchListeners = []), null == r._dispatchInstances && (r._dispatchInstances = []), r._dispatchListeners.push(t), r._dispatchInstances.push(e))
            }(u._targetInst, null, u) : u && u._reactName && function(e, t, r) {
              for (var n = []; e;) {
                n.push(e);
                do {
                  e = e.return
                } while (e && 5 !== e.tag);
                e = e || null
              }
              for (e = n.length; 0 < e--;) t(n[e], "captured", r);
              for (e = 0; e < n.length; e++) t(n[e], "bubbled", r)
            }(u._targetInst, H, u), o.unstable_batchedUpdates(function() {
              if (I(t), u) {
                var e = u._dispatchListeners,
                  r = u._dispatchInstances;
                if (T(e))
                  for (var n = 0; n < e.length && !u.isPropagationStopped(); n++) U(u, e[n], r[n]);
                else e && U(u, e, r);
                u._dispatchListeners = null, u._dispatchInstances = null, u.isPersistent() || u.constructor.release(u)
              }
              if (x) throw e = R, x = !1, R = null, e
            }), k()
          }
        }(e)
      }), t.act = N
    },
    5643(e, t, r) {
      "use strict";
      var n = r(84017);
      t.H = n.createRoot, t.c = n.hydrateRoot
    },
    16552(e, t, r) {
      "use strict";
      e.exports = r(11979)
    },
    77762(e, t) {
      "use strict";
      var r = 60103,
        n = 60106,
        o = 60107,
        a = 60108,
        i = 60114,
        l = 60109,
        s = 60110,
        u = 60112,
        d = 60113,
        c = 60120,
        p = 60115,
        m = 60116,
        f = 60121,
        b = 60122,
        y = 60117,
        v = 60129,
        h = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var g = Symbol.for;
        r = g("react.element"), n = g("react.portal"), o = g("react.fragment"), a = g("react.strict_mode"), i = g("react.profiler"), l = g("react.provider"), s = g("react.context"), u = g("react.forward_ref"), d = g("react.suspense"), c = g("react.suspense_list"), p = g("react.memo"), m = g("react.lazy"), f = g("react.block"), b = g("react.server.block"), y = g("react.fundamental"), v = g("react.debug_trace_mode"), h = g("react.legacy_hidden")
      }

      function C(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case o:
                case i:
                case a:
                case d:
                case c:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case s:
                    case u:
                    case m:
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
        q = r,
        w = u,
        E = o,
        x = m,
        R = p,
        O = n,
        _ = i,
        T = a,
        M = d;
      t.ContextConsumer = s, t.ContextProvider = P, t.Element = q, t.ForwardRef = w, t.Fragment = E, t.Lazy = x, t.Memo = R, t.Portal = O, t.Profiler = _, t.StrictMode = T, t.Suspense = M, t.isAsyncMode = function() {
        return !1
      }, t.isConcurrentMode = function() {
        return !1
      }, t.isContextConsumer = function(e) {
        return C(e) === s
      }, t.isContextProvider = function(e) {
        return C(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return C(e) === u
      }, t.isFragment = function(e) {
        return C(e) === o
      }, t.isLazy = function(e) {
        return C(e) === m
      }, t.isMemo = function(e) {
        return C(e) === p
      }, t.isPortal = function(e) {
        return C(e) === n
      }, t.isProfiler = function(e) {
        return C(e) === i
      }, t.isStrictMode = function(e) {
        return C(e) === a
      }, t.isSuspense = function(e) {
        return C(e) === d
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === i || e === v || e === a || e === d || e === c || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === l || e.$$typeof === s || e.$$typeof === u || e.$$typeof === y || e.$$typeof === f || e[0] === b)
      }, t.typeOf = C
    },
    32094(e, t, r) {
      "use strict";
      e.exports = r(77762)
    },
    23743(e, t, r) {
      "use strict";
      r.d(t, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => l
      });
      var n = r(38957),
        o = r(39793),
        a = r(93082),
        i = r(3541);
      const l = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? i.s6 : a.Fragment;
        return (0, o.jsx)(r, {
          ...t
        })
      }
    },
    50446(e, t, r) {
      "use strict";
      r.d(t, {
        s: () => i,
        t: () => a
      });
      var n = r(93082);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let r = !1;
          const n = e.map(e => {
            const n = o(e, t);
            return r || "function" != typeof n || (r = !0), n
          });
          if (r) return () => {
            for (let t = 0; t < n.length; t++) {
              const r = n[t];
              "function" == typeof r ? r() : o(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return n.useCallback(a(...e), e)
      }
    },
    20972(e, t, r) {
      "use strict";
      r.d(t, {
        sG: () => i
      });
      var n = r(93082),
        o = (r(84017), r(38957)),
        a = r(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, o.TL)(`Primitive.${t}`),
            i = n.forwardRef((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, l = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(l, {
                ...i,
                ref: n
              })
            });
          return i.displayName = `Primitive.${t}`, {
            ...e,
            [t]: i
          }
        }, {})
    },
    38957(e, t, r) {
      "use strict";
      var n;
      r.d(t, {
        DX: () => c,
        TL: () => d,
        xV: () => b
      });
      var o = r(93082),
        a = r(50446),
        i = r(39793),
        l = Symbol.for("react.lazy"),
        s = (n || (n = r.t(o, 2)))[" use ".trim().toString()];

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === l && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = p(e),
          r = o.forwardRef((e, r) => {
            let {
              children: n,
              ...a
            } = e;
            u(n) && "function" == typeof s && (n = s(n._payload));
            const l = o.Children.toArray(n),
              d = l.find(y);
            if (d) {
              const e = d.props.children,
                n = l.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, i.jsx)(t, {
                ...a,
                ref: r,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
              })
            }
            return (0, i.jsx)(t, {
              ...a,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var c = d("Slot");

      function p(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (u(r) && "function" == typeof s && (r = s(r._payload)), o.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              i = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const o = e[n],
                    a = t[n];
                  /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => {
                    const t = a(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...a
                  } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== o.Fragment && (i.ref = t ? (0, a.t)(t, e) : e), o.cloneElement(r, i)
          }
          return o.Children.count(r) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var m = Symbol("radix.slottable");

      function f(e) {
        const t = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = m, t
      }
      var b = f("Slottable");

      function y(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === m
      }
    },
    3541(e, t, r) {
      "use strict";
      r.d(t, {
        bL: () => s,
        s6: () => l
      });
      var n = r(93082),
        o = r(20972),
        a = r(39793),
        i = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        l = n.forwardRef((e, t) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...i,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var s = l
    }
  }
]);