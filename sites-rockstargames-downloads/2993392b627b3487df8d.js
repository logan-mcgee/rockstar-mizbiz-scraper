/*! For license information please see 2993392b627b3487df8d.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstargames_downloads = self.webpackChunk_rockstargames_sites_rockstargames_downloads || []).push([
  [313], {
    21: function(e) {
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

        function n() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }

        function r(e, o, a) {
          return r = n() ? Reflect.construct : function(e, n, r) {
            var o = [null];
            o.push.apply(o, n);
            var a = new(Function.bind.apply(e, o));
            return r && t(a, r.prototype), a
          }, r.apply(null, arguments)
        }

        function o(e) {
          return function(e) {
            if (Array.isArray(e)) return a(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r
        }
        var i = Object.hasOwnProperty,
          l = Object.setPrototypeOf,
          c = Object.isFrozen,
          s = Object.getPrototypeOf,
          u = Object.getOwnPropertyDescriptor,
          m = Object.freeze,
          f = Object.seal,
          p = Object.create,
          d = "undefined" != typeof Reflect && Reflect,
          h = d.apply,
          g = d.construct;
        h || (h = function(e, t, n) {
          return e.apply(t, n)
        }), m || (m = function(e) {
          return e
        }), f || (f = function(e) {
          return e
        }), g || (g = function(e, t) {
          return r(e, o(t))
        });
        var y, b = O(Array.prototype.forEach),
          v = O(Array.prototype.pop),
          T = O(Array.prototype.push),
          N = O(String.prototype.toLowerCase),
          E = O(String.prototype.toString),
          A = O(String.prototype.match),
          _ = O(String.prototype.replace),
          w = O(String.prototype.indexOf),
          S = O(String.prototype.trim),
          k = O(RegExp.prototype.test),
          x = (y = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g(y, t)
          });

        function O(e) {
          return function(t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return h(e, t, r)
          }
        }

        function R(e, t, n) {
          n = n || N, l && l(e, null);
          for (var r = t.length; r--;) {
            var o = t[r];
            if ("string" == typeof o) {
              var a = n(o);
              a !== o && (c(t) || (t[r] = a), o = a)
            }
            e[o] = !0
          }
          return e
        }

        function D(e) {
          var t, n = p(null);
          for (t in e) h(i, e, [t]) && (n[t] = e[t]);
          return n
        }

        function L(e, t) {
          for (; null !== e;) {
            var n = u(e, t);
            if (n) {
              if (n.get) return O(n.get);
              if ("function" == typeof n.value) return O(n.value)
            }
            e = s(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var C = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          M = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          I = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          F = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          U = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          H = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          z = m(["#text"]),
          P = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          j = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          B = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          G = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          W = f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          q = f(/<%[\w\W]*|[\w\W]*%>/gm),
          Y = f(/\${[\w\W]*}/gm),
          $ = f(/^data-[\-\w.\u00B7-\uFFFF]/),
          K = f(/^aria-[\-\w]+$/),
          V = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          X = f(/^(?:\w+script|data):/i),
          Z = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          J = f(/^html$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          },
          ee = function(t, n) {
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
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            r = function(e) {
              return t(e)
            };
          if (r.version = "2.4.1", r.removed = [], !n || !n.document || 9 !== n.document.nodeType) return r.isSupported = !1, r;
          var a = n.document,
            i = n.document,
            l = n.DocumentFragment,
            c = n.HTMLTemplateElement,
            s = n.Node,
            u = n.Element,
            f = n.NodeFilter,
            p = n.NamedNodeMap,
            d = void 0 === p ? n.NamedNodeMap || n.MozNamedAttrMap : p,
            h = n.HTMLFormElement,
            g = n.DOMParser,
            y = n.trustedTypes,
            O = u.prototype,
            te = L(O, "cloneNode"),
            ne = L(O, "nextSibling"),
            re = L(O, "childNodes"),
            oe = L(O, "parentNode");
          if ("function" == typeof c) {
            var ae = i.createElement("template");
            ae.content && ae.content.ownerDocument && (i = ae.content.ownerDocument)
          }
          var ie = ee(y, a),
            le = ie ? ie.createHTML("") : "",
            ce = i,
            se = ce.implementation,
            ue = ce.createNodeIterator,
            me = ce.createDocumentFragment,
            fe = ce.getElementsByTagName,
            pe = a.importNode,
            de = {};
          try {
            de = D(i).documentMode ? i.documentMode : {}
          } catch (e) {}
          var he = {};
          r.isSupported = "function" == typeof oe && se && void 0 !== se.createHTMLDocument && 9 !== de;
          var ge, ye, be = W,
            ve = q,
            Te = Y,
            Ne = $,
            Ee = K,
            Ae = X,
            _e = Z,
            we = V,
            Se = null,
            ke = R({}, [].concat(o(C), o(M), o(I), o(U), o(z))),
            xe = null,
            Oe = R({}, [].concat(o(P), o(j), o(B), o(G))),
            Re = Object.seal(Object.create(null, {
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
            De = null,
            Le = null,
            Ce = !0,
            Me = !0,
            Ie = !1,
            Fe = !1,
            Ue = !1,
            He = !1,
            ze = !1,
            Pe = !1,
            je = !1,
            Be = !1,
            Ge = !0,
            We = !1,
            qe = "user-content-",
            Ye = !0,
            $e = !1,
            Ke = {},
            Ve = null,
            Xe = R({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Ze = null,
            Je = R({}, ["audio", "video", "img", "source", "image", "track"]),
            Qe = null,
            et = R({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            tt = "http://www.w3.org/1998/Math/MathML",
            nt = "http://www.w3.org/2000/svg",
            rt = "http://www.w3.org/1999/xhtml",
            ot = rt,
            at = !1,
            it = null,
            lt = R({}, [tt, nt, rt], E),
            ct = ["application/xhtml+xml", "text/html"],
            st = "text/html",
            ut = null,
            mt = i.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            pt = function(t) {
              ut && ut === t || (t && "object" === e(t) || (t = {}), t = D(t), ge = ge = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? st : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === ge ? E : N, Se = "ALLOWED_TAGS" in t ? R({}, t.ALLOWED_TAGS, ye) : ke, xe = "ALLOWED_ATTR" in t ? R({}, t.ALLOWED_ATTR, ye) : Oe, it = "ALLOWED_NAMESPACES" in t ? R({}, t.ALLOWED_NAMESPACES, E) : lt, Qe = "ADD_URI_SAFE_ATTR" in t ? R(D(et), t.ADD_URI_SAFE_ATTR, ye) : et, Ze = "ADD_DATA_URI_TAGS" in t ? R(D(Je), t.ADD_DATA_URI_TAGS, ye) : Je, Ve = "FORBID_CONTENTS" in t ? R({}, t.FORBID_CONTENTS, ye) : Xe, De = "FORBID_TAGS" in t ? R({}, t.FORBID_TAGS, ye) : {}, Le = "FORBID_ATTR" in t ? R({}, t.FORBID_ATTR, ye) : {}, Ke = "USE_PROFILES" in t && t.USE_PROFILES, Ce = !1 !== t.ALLOW_ARIA_ATTR, Me = !1 !== t.ALLOW_DATA_ATTR, Ie = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Fe = t.SAFE_FOR_TEMPLATES || !1, Ue = t.WHOLE_DOCUMENT || !1, Pe = t.RETURN_DOM || !1, je = t.RETURN_DOM_FRAGMENT || !1, Be = t.RETURN_TRUSTED_TYPE || !1, ze = t.FORCE_BODY || !1, Ge = !1 !== t.SANITIZE_DOM, We = t.SANITIZE_NAMED_PROPS || !1, Ye = !1 !== t.KEEP_CONTENT, $e = t.IN_PLACE || !1, we = t.ALLOWED_URI_REGEXP || we, ot = t.NAMESPACE || rt, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Re.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Re.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Re.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Fe && (Me = !1), je && (Pe = !0), Ke && (Se = R({}, o(z)), xe = [], !0 === Ke.html && (R(Se, C), R(xe, P)), !0 === Ke.svg && (R(Se, M), R(xe, j), R(xe, G)), !0 === Ke.svgFilters && (R(Se, I), R(xe, j), R(xe, G)), !0 === Ke.mathMl && (R(Se, U), R(xe, B), R(xe, G))), t.ADD_TAGS && (Se === ke && (Se = D(Se)), R(Se, t.ADD_TAGS, ye)), t.ADD_ATTR && (xe === Oe && (xe = D(xe)), R(xe, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && R(Qe, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ve === Xe && (Ve = D(Ve)), R(Ve, t.FORBID_CONTENTS, ye)), Ye && (Se["#text"] = !0), Ue && R(Se, ["html", "head", "body"]), Se.table && (R(Se, ["tbody"]), delete De.tbody), m && m(t), ut = t)
            },
            dt = R({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ht = R({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            gt = R({}, ["title", "style", "font", "a", "script"]),
            yt = R({}, M);
          R(yt, I), R(yt, F);
          var bt = R({}, U);
          R(bt, H);
          var vt = function(e) {
              var t = oe(e);
              t && t.tagName || (t = {
                namespaceURI: ot,
                tagName: "template"
              });
              var n = N(e.tagName),
                r = N(t.tagName);
              return !!it[e.namespaceURI] && (e.namespaceURI === nt ? t.namespaceURI === rt ? "svg" === n : t.namespaceURI === tt ? "svg" === n && ("annotation-xml" === r || dt[r]) : Boolean(yt[n]) : e.namespaceURI === tt ? t.namespaceURI === rt ? "math" === n : t.namespaceURI === nt ? "math" === n && ht[r] : Boolean(bt[n]) : e.namespaceURI === rt ? !(t.namespaceURI === nt && !ht[r]) && !(t.namespaceURI === tt && !dt[r]) && !bt[n] && (gt[n] || !yt[n]) : !("application/xhtml+xml" !== ge || !it[e.namespaceURI]))
            },
            Tt = function(e) {
              T(r.removed, {
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
            Nt = function(e, t) {
              try {
                T(r.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                T(r.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !xe[e])
                if (Pe || je) try {
                  Tt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Et = function(e) {
              var t, n;
              if (ze) e = "<remove></remove>" + e;
              else {
                var r = A(e, /^[\r\n\t ]+/);
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
                  t.documentElement.innerHTML = at ? "" : o
                } catch (e) {}
              }
              var a = t.body || t.documentElement;
              return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), ot === rt ? fe.call(t, Ue ? "html" : "body")[0] : Ue ? t.documentElement : a
            },
            At = function(e) {
              return ue.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT, null, !1)
            },
            _t = function(e) {
              return e instanceof h && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof d) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            wt = function(t) {
              return "object" === e(s) ? t instanceof s : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            St = function(e, t, n) {
              he[e] && b(he[e], (function(e) {
                e.call(r, t, n, ut)
              }))
            },
            kt = function(e) {
              var t;
              if (St("beforeSanitizeElements", e, null), _t(e)) return Tt(e), !0;
              if (k(/[\u0080-\uFFFF]/, e.nodeName)) return Tt(e), !0;
              var n = ye(e.nodeName);
              if (St("uponSanitizeElement", e, {
                  tagName: n,
                  allowedTags: Se
                }), e.hasChildNodes() && !wt(e.firstElementChild) && (!wt(e.content) || !wt(e.content.firstElementChild)) && k(/<[/\w]/g, e.innerHTML) && k(/<[/\w]/g, e.textContent)) return Tt(e), !0;
              if ("select" === n && k(/<template/i, e.innerHTML)) return Tt(e), !0;
              if (!Se[n] || De[n]) {
                if (!De[n] && Ot(n)) {
                  if (Re.tagNameCheck instanceof RegExp && k(Re.tagNameCheck, n)) return !1;
                  if (Re.tagNameCheck instanceof Function && Re.tagNameCheck(n)) return !1
                }
                if (Ye && !Ve[n]) {
                  var o = oe(e) || e.parentNode,
                    a = re(e) || e.childNodes;
                  if (a && o)
                    for (var i = a.length - 1; i >= 0; --i) o.insertBefore(te(a[i], !0), ne(e))
                }
                return Tt(e), !0
              }
              return e instanceof u && !vt(e) ? (Tt(e), !0) : "noscript" !== n && "noembed" !== n || !k(/<\/no(script|embed)/i, e.innerHTML) ? (Fe && 3 === e.nodeType && (t = e.textContent, t = _(t, be, " "), t = _(t, ve, " "), t = _(t, Te, " "), e.textContent !== t && (T(r.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), St("afterSanitizeElements", e, null), !1) : (Tt(e), !0)
            },
            xt = function(e, t, n) {
              if (Ge && ("id" === t || "name" === t) && (n in i || n in mt)) return !1;
              if (Me && !Le[t] && k(Ne, t));
              else if (Ce && k(Ee, t));
              else if (!xe[t] || Le[t]) {
                if (!(Ot(e) && (Re.tagNameCheck instanceof RegExp && k(Re.tagNameCheck, e) || Re.tagNameCheck instanceof Function && Re.tagNameCheck(e)) && (Re.attributeNameCheck instanceof RegExp && k(Re.attributeNameCheck, t) || Re.attributeNameCheck instanceof Function && Re.attributeNameCheck(t)) || "is" === t && Re.allowCustomizedBuiltInElements && (Re.tagNameCheck instanceof RegExp && k(Re.tagNameCheck, n) || Re.tagNameCheck instanceof Function && Re.tagNameCheck(n)))) return !1
              } else if (Qe[t]);
              else if (k(we, _(n, _e, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== w(n, "data:") || !Ze[e])
                if (Ie && !k(Ae, _(n, _e, "")));
                else if (n) return !1;
              return !0
            },
            Ot = function(e) {
              return e.indexOf("-") > 0
            },
            Rt = function(t) {
              var n, o, a, i;
              St("beforeSanitizeAttributes", t, null);
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
                  if (o = "value" === u ? n.value : S(n.value), a = ye(u), c.attrName = a, c.attrValue = o, c.keepAttr = !0, c.forceKeepAttr = void 0, St("uponSanitizeAttribute", t, c), o = c.attrValue, !c.forceKeepAttr && (Nt(u, t), c.keepAttr))
                    if (k(/\/>/i, o)) Nt(u, t);
                    else {
                      Fe && (o = _(o, be, " "), o = _(o, ve, " "), o = _(o, Te, " "));
                      var f = ye(t.nodeName);
                      if (xt(f, a, o)) {
                        if (!We || "id" !== a && "name" !== a || (Nt(u, t), o = qe + o), ie && "object" === e(y) && "function" == typeof y.getAttributeType)
                          if (m);
                          else switch (y.getAttributeType(f, a)) {
                            case "TrustedHTML":
                              o = ie.createHTML(o);
                              break;
                            case "TrustedScriptURL":
                              o = ie.createScriptURL(o)
                          }
                        try {
                          m ? t.setAttributeNS(m, u, o) : t.setAttribute(u, o), v(r.removed)
                        } catch (e) {}
                      }
                    }
                }
                St("afterSanitizeAttributes", t, null)
              }
            },
            Dt = function e(t) {
              var n, r = At(t);
              for (St("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) St("uponSanitizeShadowNode", n, null), kt(n) || (n.content instanceof l && e(n.content), Rt(n));
              St("afterSanitizeShadowDOM", t, null)
            };
          return r.sanitize = function(t) {
            var o, i, c, u, m, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((at = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !wt(t)) {
              if ("function" != typeof t.toString) throw x("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw x("dirty is not a string, aborting")
            }
            if (!r.isSupported) {
              if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                if ("string" == typeof t) return n.toStaticHTML(t);
                if (wt(t)) return n.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (He || pt(f), r.removed = [], "string" == typeof t && ($e = !1), $e) {
              if (t.nodeName) {
                var p = ye(t.nodeName);
                if (!Se[p] || De[p]) throw x("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof s) 1 === (i = (o = Et("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? o = i : o.appendChild(i);
            else {
              if (!Pe && !Fe && !Ue && -1 === t.indexOf("<")) return ie && Be ? ie.createHTML(t) : t;
              if (!(o = Et(t))) return Pe ? null : Be ? le : ""
            }
            o && ze && Tt(o.firstChild);
            for (var d = At($e ? t : o); c = d.nextNode();) 3 === c.nodeType && c === u || kt(c) || (c.content instanceof l && Dt(c.content), Rt(c), u = c);
            if (u = null, $e) return t;
            if (Pe) {
              if (je)
                for (m = me.call(o.ownerDocument); o.firstChild;) m.appendChild(o.firstChild);
              else m = o;
              return xe.shadowroot && (m = pe.call(a, m, !0)), m
            }
            var h = Ue ? o.outerHTML : o.innerHTML;
            return Ue && Se["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && k(J, o.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + h), Fe && (h = _(h, be, " "), h = _(h, ve, " "), h = _(h, Te, " ")), ie && Be ? ie.createHTML(h) : h
          }, r.setConfig = function(e) {
            pt(e), He = !0
          }, r.clearConfig = function() {
            ut = null, He = !1
          }, r.isValidAttribute = function(e, t, n) {
            ut || pt({});
            var r = ye(e),
              o = ye(t);
            return xt(r, o, n)
          }, r.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], T(he[e], t))
          }, r.removeHook = function(e) {
            if (he[e]) return v(he[e])
          }, r.removeHooks = function(e) {
            he[e] && (he[e] = [])
          }, r.removeAllHooks = function() {
            he = {}
          }, r
        }()
      }()
    },
    98: (e, t, n) => {
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
    563: (e, t, n) => {
      "use strict";
      e.exports = n(98)
    }
  }
]);