/*! For license information please see c144e161a93f8c3d142c.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstargames_downloads = self.webpackChunk_rockstargames_sites_rockstargames_downloads || []).push([
  [856], {
    299: function(e) {
      e.exports = function() {
        "use strict";

        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e(t)
        }

        function t(e, n) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, n)
        }

        function n(e, r, o) {
          return n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, n, r) {
            var o = [null];
            o.push.apply(o, n);
            var a = new(Function.bind.apply(e, o));
            return r && t(a, r.prototype), a
          }, n.apply(null, arguments)
        }

        function r(e) {
          return function(e) {
            if (Array.isArray(e)) return o(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return o(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
        }
        var a = Object.hasOwnProperty,
          i = Object.setPrototypeOf,
          l = Object.isFrozen,
          c = Object.getPrototypeOf,
          s = Object.getOwnPropertyDescriptor,
          u = Object.freeze,
          m = Object.seal,
          f = Object.create,
          p = "undefined" != typeof Reflect && Reflect,
          d = p.apply,
          h = p.construct;
        d || (d = function(e, t, n) {
          return e.apply(t, n)
        }), u || (u = function(e) {
          return e
        }), m || (m = function(e) {
          return e
        }), h || (h = function(e, t) {
          return n(e, r(t))
        });
        var g, y = x(Array.prototype.forEach),
          b = x(Array.prototype.pop),
          v = x(Array.prototype.push),
          T = x(String.prototype.toLowerCase),
          N = x(String.prototype.toString),
          E = x(String.prototype.match),
          A = x(String.prototype.replace),
          _ = x(String.prototype.indexOf),
          w = x(String.prototype.trim),
          S = x(RegExp.prototype.test),
          k = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return h(g, t)
          });

        function x(e) {
          return function(t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return d(e, t, r)
          }
        }

        function O(e, t, n) {
          n = n || T, i && i(e, null);
          for (var r = t.length; r--;) {
            var o = t[r];
            if ("string" == typeof o) {
              var a = n(o);
              a !== o && (l(t) || (t[r] = a), o = a)
            }
            e[o] = !0
          }
          return e
        }

        function L(e) {
          var t, n = f(null);
          for (t in e) !0 === d(a, e, [t]) && (n[t] = e[t]);
          return n
        }

        function R(e, t) {
          for (; null !== e;) {
            var n = s(e, t);
            if (n) {
              if (n.get) return x(n.get);
              if ("function" == typeof n.value) return x(n.value)
            }
            e = c(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var C = u(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          D = u(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          M = u(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          I = u(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          F = u(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          U = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          H = u(["#text"]),
          z = u(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          P = u(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          j = u(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          B = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          G = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = m(/<%[\w\W]*|[\w\W]*%>/gm),
          q = m(/\${[\w\W]*}/gm),
          Y = m(/^data-[\-\w.\u00B7-\uFFFF]/),
          $ = m(/^aria-[\-\w]+$/),
          K = m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          V = m(/^(?:\w+script|data):/i),
          X = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = m(/^html$/i),
          J = function() {
            return "undefined" == typeof window ? null : window
          },
          Q = function(t, n) {
            if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
            var r = null,
              o = "data-tt-policy-suffix";
            n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
            var a = "dompurify" + (r ? "#" + r : "");
            try {
              return t.createPolicy(a, {
                createHTML: function(e) {
                  return e
                },
                createScriptURL: function(e) {
                  return e
                }
              })
            } catch (e) {
              return console.warn("TrustedTypes policy " + a + " could not be created."), null
            }
          };
        return function t() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
            o = function(e) {
              return t(e)
            };
          if (o.version = "2.4.5", o.removed = [], !n || !n.document || 9 !== n.document.nodeType) return o.isSupported = !1, o;
          var a = n.document,
            i = n.document,
            l = n.DocumentFragment,
            c = n.HTMLTemplateElement,
            s = n.Node,
            m = n.Element,
            f = n.NodeFilter,
            p = n.NamedNodeMap,
            d = void 0 === p ? n.NamedNodeMap || n.MozNamedAttrMap : p,
            h = n.HTMLFormElement,
            g = n.DOMParser,
            x = n.trustedTypes,
            ee = m.prototype,
            te = R(ee, "cloneNode"),
            ne = R(ee, "nextSibling"),
            re = R(ee, "childNodes"),
            oe = R(ee, "parentNode");
          if ("function" == typeof c) {
            var ae = i.createElement("template");
            ae.content && ae.content.ownerDocument && (i = ae.content.ownerDocument)
          }
          var ie = Q(x, a),
            le = ie ? ie.createHTML("") : "",
            ce = i,
            se = ce.implementation,
            ue = ce.createNodeIterator,
            me = ce.createDocumentFragment,
            fe = ce.getElementsByTagName,
            pe = a.importNode,
            de = {};
          try {
            de = L(i).documentMode ? i.documentMode : {}
          } catch (e) {}
          var he = {};
          o.isSupported = "function" == typeof oe && se && void 0 !== se.createHTMLDocument && 9 !== de;
          var ge, ye, be = G,
            ve = W,
            Te = q,
            Ne = Y,
            Ee = $,
            Ae = V,
            _e = X,
            we = K,
            Se = null,
            ke = O({}, [].concat(r(C), r(D), r(M), r(F), r(H))),
            xe = null,
            Oe = O({}, [].concat(r(z), r(P), r(j), r(B))),
            Le = Object.seal(Object.create(null, {
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
            Re = null,
            Ce = null,
            De = !0,
            Me = !0,
            Ie = !1,
            Fe = !0,
            Ue = !1,
            He = !1,
            ze = !1,
            Pe = !1,
            je = !1,
            Be = !1,
            Ge = !1,
            We = !0,
            qe = !1,
            Ye = !0,
            $e = !1,
            Ke = {},
            Ve = null,
            Xe = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Ze = null,
            Je = O({}, ["audio", "video", "img", "source", "image", "track"]),
            Qe = null,
            et = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            tt = "http://www.w3.org/1998/Math/MathML",
            nt = "http://www.w3.org/2000/svg",
            rt = "http://www.w3.org/1999/xhtml",
            ot = rt,
            at = !1,
            it = null,
            lt = O({}, [tt, nt, rt], N),
            ct = ["application/xhtml+xml", "text/html"],
            st = null,
            ut = i.createElement("form"),
            mt = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            ft = function(t) {
              st && st === t || (t && "object" === e(t) || (t = {}), t = L(t), ge = ge = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === ge ? N : T, Se = "ALLOWED_TAGS" in t ? O({}, t.ALLOWED_TAGS, ye) : ke, xe = "ALLOWED_ATTR" in t ? O({}, t.ALLOWED_ATTR, ye) : Oe, it = "ALLOWED_NAMESPACES" in t ? O({}, t.ALLOWED_NAMESPACES, N) : lt, Qe = "ADD_URI_SAFE_ATTR" in t ? O(L(et), t.ADD_URI_SAFE_ATTR, ye) : et, Ze = "ADD_DATA_URI_TAGS" in t ? O(L(Je), t.ADD_DATA_URI_TAGS, ye) : Je, Ve = "FORBID_CONTENTS" in t ? O({}, t.FORBID_CONTENTS, ye) : Xe, Re = "FORBID_TAGS" in t ? O({}, t.FORBID_TAGS, ye) : {}, Ce = "FORBID_ATTR" in t ? O({}, t.FORBID_ATTR, ye) : {}, Ke = "USE_PROFILES" in t && t.USE_PROFILES, De = !1 !== t.ALLOW_ARIA_ATTR, Me = !1 !== t.ALLOW_DATA_ATTR, Ie = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Fe = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Ue = t.SAFE_FOR_TEMPLATES || !1, He = t.WHOLE_DOCUMENT || !1, je = t.RETURN_DOM || !1, Be = t.RETURN_DOM_FRAGMENT || !1, Ge = t.RETURN_TRUSTED_TYPE || !1, Pe = t.FORCE_BODY || !1, We = !1 !== t.SANITIZE_DOM, qe = t.SANITIZE_NAMED_PROPS || !1, Ye = !1 !== t.KEEP_CONTENT, $e = t.IN_PLACE || !1, we = t.ALLOWED_URI_REGEXP || we, ot = t.NAMESPACE || rt, Le = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Le.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Le.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Le.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ue && (Me = !1), Be && (je = !0), Ke && (Se = O({}, r(H)), xe = [], !0 === Ke.html && (O(Se, C), O(xe, z)), !0 === Ke.svg && (O(Se, D), O(xe, P), O(xe, B)), !0 === Ke.svgFilters && (O(Se, M), O(xe, P), O(xe, B)), !0 === Ke.mathMl && (O(Se, F), O(xe, j), O(xe, B))), t.ADD_TAGS && (Se === ke && (Se = L(Se)), O(Se, t.ADD_TAGS, ye)), t.ADD_ATTR && (xe === Oe && (xe = L(xe)), O(xe, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && O(Qe, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ve === Xe && (Ve = L(Ve)), O(Ve, t.FORBID_CONTENTS, ye)), Ye && (Se["#text"] = !0), He && O(Se, ["html", "head", "body"]), Se.table && (O(Se, ["tbody"]), delete Re.tbody), u && u(t), st = t)
            },
            pt = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
            dt = O({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            ht = O({}, ["title", "style", "font", "a", "script"]),
            gt = O({}, D);
          O(gt, M), O(gt, I);
          var yt = O({}, F);
          O(yt, U);
          var bt = function(e) {
              v(o.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                try {
                  e.outerHTML = le
                } catch (t) {
                  e.remove()
                }
              }
            },
            vt = function(e, t) {
              try {
                v(o.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                v(o.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !xe[e])
                if (je || Be) try {
                  bt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Tt = function(e) {
              var t, n;
              if (Pe) e = "<remove></remove>" + e;
              else {
                var r = E(e, /^[\r\n\t ]+/);
                n = r && r[0]
              }
              "application/xhtml+xml" === ge && ot === rt && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var o = ie ? ie.createHTML(e) : e;
              if (ot === rt) try {
                t = (new g).parseFromString(o, ge)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = se.createDocument(ot, "template", null);
                try {
                  t.documentElement.innerHTML = at ? le : o
                } catch (e) {}
              }
              var a = t.body || t.documentElement;
              return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), ot === rt ? fe.call(t, He ? "html" : "body")[0] : He ? t.documentElement : a
            },
            Nt = function(e) {
              return ue.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT, null, !1)
            },
            Et = function(t) {
              return "object" === e(s) ? t instanceof s : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            At = function(e, t, n) {
              he[e] && y(he[e], (function(e) {
                e.call(o, t, n, st)
              }))
            },
            _t = function(e) {
              var t, n;
              if (At("beforeSanitizeElements", e, null), (n = e) instanceof h && ("string" != typeof n.nodeName || "string" != typeof n.textContent || "function" != typeof n.removeChild || !(n.attributes instanceof d) || "function" != typeof n.removeAttribute || "function" != typeof n.setAttribute || "string" != typeof n.namespaceURI || "function" != typeof n.insertBefore || "function" != typeof n.hasChildNodes)) return bt(e), !0;
              if (S(/[\u0080-\uFFFF]/, e.nodeName)) return bt(e), !0;
              var r = ye(e.nodeName);
              if (At("uponSanitizeElement", e, {
                  tagName: r,
                  allowedTags: Se
                }), e.hasChildNodes() && !Et(e.firstElementChild) && (!Et(e.content) || !Et(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent)) return bt(e), !0;
              if ("select" === r && S(/<template/i, e.innerHTML)) return bt(e), !0;
              if (!Se[r] || Re[r]) {
                if (!Re[r] && St(r)) {
                  if (Le.tagNameCheck instanceof RegExp && S(Le.tagNameCheck, r)) return !1;
                  if (Le.tagNameCheck instanceof Function && Le.tagNameCheck(r)) return !1
                }
                if (Ye && !Ve[r]) {
                  var a = oe(e) || e.parentNode,
                    i = re(e) || e.childNodes;
                  if (i && a)
                    for (var l = i.length - 1; l >= 0; --l) a.insertBefore(te(i[l], !0), ne(e))
                }
                return bt(e), !0
              }
              return e instanceof m && ! function(e) {
                var t = oe(e);
                t && t.tagName || (t = {
                  namespaceURI: ot,
                  tagName: "template"
                });
                var n = T(e.tagName),
                  r = T(t.tagName);
                return !!it[e.namespaceURI] && (e.namespaceURI === nt ? t.namespaceURI === rt ? "svg" === n : t.namespaceURI === tt ? "svg" === n && ("annotation-xml" === r || pt[r]) : Boolean(gt[n]) : e.namespaceURI === tt ? t.namespaceURI === rt ? "math" === n : t.namespaceURI === nt ? "math" === n && dt[r] : Boolean(yt[n]) : e.namespaceURI === rt ? !(t.namespaceURI === nt && !dt[r]) && !(t.namespaceURI === tt && !pt[r]) && !yt[n] && (ht[n] || !gt[n]) : !("application/xhtml+xml" !== ge || !it[e.namespaceURI]))
              }(e) ? (bt(e), !0) : "noscript" !== r && "noembed" !== r || !S(/<\/no(script|embed)/i, e.innerHTML) ? (Ue && 3 === e.nodeType && (t = e.textContent, t = A(t, be, " "), t = A(t, ve, " "), t = A(t, Te, " "), e.textContent !== t && (v(o.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), At("afterSanitizeElements", e, null), !1) : (bt(e), !0)
            },
            wt = function(e, t, n) {
              if (We && ("id" === t || "name" === t) && (n in i || n in ut)) return !1;
              if (Me && !Ce[t] && S(Ne, t));
              else if (De && S(Ee, t));
              else if (!xe[t] || Ce[t]) {
                if (!(St(e) && (Le.tagNameCheck instanceof RegExp && S(Le.tagNameCheck, e) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(e)) && (Le.attributeNameCheck instanceof RegExp && S(Le.attributeNameCheck, t) || Le.attributeNameCheck instanceof Function && Le.attributeNameCheck(t)) || "is" === t && Le.allowCustomizedBuiltInElements && (Le.tagNameCheck instanceof RegExp && S(Le.tagNameCheck, n) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(n)))) return !1
              } else if (Qe[t]);
              else if (S(we, A(n, _e, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== _(n, "data:") || !Ze[e])
                if (Ie && !S(Ae, A(n, _e, "")));
                else if (n) return !1;
              return !0
            },
            St = function(e) {
              return e.indexOf("-") > 0
            },
            kt = function(t) {
              var n, r, a, i;
              At("beforeSanitizeAttributes", t, null);
              var l = t.attributes;
              if (l) {
                var c = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: xe
                };
                for (i = l.length; i--;) {
                  var s = n = l[i],
                    u = s.name,
                    m = s.namespaceURI;
                  if (r = "value" === u ? n.value : w(n.value), a = ye(u), c.attrName = a, c.attrValue = r, c.keepAttr = !0, c.forceKeepAttr = void 0, At("uponSanitizeAttribute", t, c), r = c.attrValue, !c.forceKeepAttr && (vt(u, t), c.keepAttr))
                    if (Fe || !S(/\/>/i, r)) {
                      Ue && (r = A(r, be, " "), r = A(r, ve, " "), r = A(r, Te, " "));
                      var f = ye(t.nodeName);
                      if (wt(f, a, r)) {
                        if (!qe || "id" !== a && "name" !== a || (vt(u, t), r = "user-content-" + r), ie && "object" === e(x) && "function" == typeof x.getAttributeType)
                          if (m);
                          else switch (x.getAttributeType(f, a)) {
                            case "TrustedHTML":
                              r = ie.createHTML(r);
                              break;
                            case "TrustedScriptURL":
                              r = ie.createScriptURL(r)
                          }
                        try {
                          m ? t.setAttributeNS(m, u, r) : t.setAttribute(u, r), b(o.removed)
                        } catch (e) {}
                      }
                    } else vt(u, t)
                }
                At("afterSanitizeAttributes", t, null)
              }
            },
            xt = function e(t) {
              var n, r = Nt(t);
              for (At("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) At("uponSanitizeShadowNode", n, null), _t(n) || (n.content instanceof l && e(n.content), kt(n));
              At("afterSanitizeShadowDOM", t, null)
            };
          return o.sanitize = function(t) {
            var r, i, c, u, m, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((at = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !Et(t)) {
              if ("function" != typeof t.toString) throw k("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw k("dirty is not a string, aborting")
            }
            if (!o.isSupported) {
              if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                if ("string" == typeof t) return n.toStaticHTML(t);
                if (Et(t)) return n.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (ze || ft(f), o.removed = [], "string" == typeof t && ($e = !1), $e) {
              if (t.nodeName) {
                var p = ye(t.nodeName);
                if (!Se[p] || Re[p]) throw k("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof s) 1 === (i = (r = Tt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? r = i : r.appendChild(i);
            else {
              if (!je && !Ue && !He && -1 === t.indexOf("<")) return ie && Ge ? ie.createHTML(t) : t;
              if (!(r = Tt(t))) return je ? null : Ge ? le : ""
            }
            r && Pe && bt(r.firstChild);
            for (var d = Nt($e ? t : r); c = d.nextNode();) 3 === c.nodeType && c === u || _t(c) || (c.content instanceof l && xt(c.content), kt(c), u = c);
            if (u = null, $e) return t;
            if (je) {
              if (Be)
                for (m = me.call(r.ownerDocument); r.firstChild;) m.appendChild(r.firstChild);
              else m = r;
              return (xe.shadowroot || xe.shadowrootmod) && (m = pe.call(a, m, !0)), m
            }
            var h = He ? r.outerHTML : r.innerHTML;
            return He && Se["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && S(Z, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h), Ue && (h = A(h, be, " "), h = A(h, ve, " "), h = A(h, Te, " ")), ie && Ge ? ie.createHTML(h) : h
          }, o.setConfig = function(e) {
            ft(e), ze = !0
          }, o.clearConfig = function() {
            st = null, ze = !1
          }, o.isValidAttribute = function(e, t, n) {
            st || ft({});
            var r = ye(e),
              o = ye(t);
            return wt(r, o, n)
          }, o.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], v(he[e], t))
          }, o.removeHook = function(e) {
            if (he[e]) return b(he[e])
          }, o.removeHooks = function(e) {
            he[e] && (he[e] = [])
          }, o.removeAllHooks = function() {
            he = {}
          }, o
        }()
      }()
    },
    652: (e, t, n) => {
      "use strict";
      var r = n(822),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, n) {
        var r, a = {},
          s = null,
          u = null;
        for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !c.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: u,
          props: a,
          _owner: l.current
        }
      }
      t.Fragment = a, t.jsx = s, t.jsxs = s
    },
    322: (e, t, n) => {
      "use strict";
      e.exports = n(652)
    }
  }
]);