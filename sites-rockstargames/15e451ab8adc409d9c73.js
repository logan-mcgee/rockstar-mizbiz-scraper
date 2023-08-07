/*! For license information please see 15e451ab8adc409d9c73.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [871, 160], {
    170: (t, e, i) => {
      "use strict";
      var s = i(2201);
      e.s = s.createRoot, s.hydrateRoot
    },
    3205: function(t) {
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

        function i(t, s, r) {
          return i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }() ? Reflect.construct : function(t, i, s) {
            var r = [null];
            r.push.apply(r, i);
            var n = new(Function.bind.apply(t, r));
            return s && e(n, s.prototype), n
          }, i.apply(null, arguments)
        }

        function s(t) {
          return function(t) {
            if (Array.isArray(t)) return r(t)
          }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(t) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return r(t, e);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(t, e) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
          return s
        }
        var n = Object.hasOwnProperty,
          a = Object.setPrototypeOf,
          o = Object.isFrozen,
          h = Object.getPrototypeOf,
          p = Object.getOwnPropertyDescriptor,
          c = Object.freeze,
          l = Object.seal,
          u = Object.create,
          d = "undefined" != typeof Reflect && Reflect,
          f = d.apply,
          m = d.construct;
        f || (f = function(t, e, i) {
          return t.apply(e, i)
        }), c || (c = function(t) {
          return t
        }), l || (l = function(t) {
          return t
        }), m || (m = function(t, e) {
          return i(t, s(e))
        });
        var g, x = I(Array.prototype.forEach),
          y = I(Array.prototype.pop),
          v = I(Array.prototype.push),
          b = I(String.prototype.toLowerCase),
          _ = I(String.prototype.toString),
          k = I(String.prototype.match),
          S = I(String.prototype.replace),
          w = I(String.prototype.indexOf),
          E = I(String.prototype.trim),
          C = I(RegExp.prototype.test),
          A = (g = TypeError, function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return m(g, e)
          });

        function I(t) {
          return function(e) {
            for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) s[r - 1] = arguments[r];
            return f(t, e, s)
          }
        }

        function T(t, e, i) {
          i = i || b, a && a(t, null);
          for (var s = e.length; s--;) {
            var r = e[s];
            if ("string" == typeof r) {
              var n = i(r);
              n !== r && (o(e) || (e[s] = n), r = n)
            }
            t[r] = !0
          }
          return t
        }

        function P(t) {
          var e, i = u(null);
          for (e in t) !0 === f(n, t, [e]) && (i[e] = t[e]);
          return i
        }

        function N(t, e) {
          for (; null !== t;) {
            var i = p(t, e);
            if (i) {
              if (i.get) return I(i.get);
              if ("function" == typeof i.value) return I(i.value)
            }
            t = h(t)
          }
          return function(t) {
            return console.warn("fallback value for", t), null
          }
        }
        var L = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          V = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          O = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          R = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          M = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          D = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          B = c(["#text"]),
          j = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          U = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          F = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          H = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          q = l(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          G = l(/<%[\w\W]*|[\w\W]*%>/gm),
          W = l(/\${[\w\W]*}/gm),
          z = l(/^data-[\-\w.\u00B7-\uFFFF]/),
          K = l(/^aria-[\-\w]+$/),
          X = l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          Q = l(/^(?:\w+script|data):/i),
          J = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Y = l(/^html$/i),
          Z = function() {
            return "undefined" == typeof window ? null : window
          };
        return function e() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z(),
            r = function(t) {
              return e(t)
            };
          if (r.version = "2.4.5", r.removed = [], !i || !i.document || 9 !== i.document.nodeType) return r.isSupported = !1, r;
          var n = i.document,
            a = i.document,
            o = i.DocumentFragment,
            h = i.HTMLTemplateElement,
            p = i.Node,
            l = i.Element,
            u = i.NodeFilter,
            d = i.NamedNodeMap,
            f = void 0 === d ? i.NamedNodeMap || i.MozNamedAttrMap : d,
            m = i.HTMLFormElement,
            g = i.DOMParser,
            I = i.trustedTypes,
            $ = l.prototype,
            tt = N($, "cloneNode"),
            et = N($, "nextSibling"),
            it = N($, "childNodes"),
            st = N($, "parentNode");
          if ("function" == typeof h) {
            var rt = a.createElement("template");
            rt.content && rt.content.ownerDocument && (a = rt.content.ownerDocument)
          }
          var nt = function(e, i) {
              if ("object" !== t(e) || "function" != typeof e.createPolicy) return null;
              var s = null,
                r = "data-tt-policy-suffix";
              i.currentScript && i.currentScript.hasAttribute(r) && (s = i.currentScript.getAttribute(r));
              var n = "dompurify" + (s ? "#" + s : "");
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
            }(I, n),
            at = nt ? nt.createHTML("") : "",
            ot = a,
            ht = ot.implementation,
            pt = ot.createNodeIterator,
            ct = ot.createDocumentFragment,
            lt = ot.getElementsByTagName,
            ut = n.importNode,
            dt = {};
          try {
            dt = P(a).documentMode ? a.documentMode : {}
          } catch (t) {}
          var ft = {};
          r.isSupported = "function" == typeof st && ht && void 0 !== ht.createHTMLDocument && 9 !== dt;
          var mt, gt, xt = q,
            yt = G,
            vt = W,
            bt = z,
            _t = K,
            kt = Q,
            St = J,
            wt = X,
            Et = null,
            Ct = T({}, [].concat(s(L), s(V), s(O), s(M), s(B))),
            At = null,
            It = T({}, [].concat(s(j), s(U), s(F), s(H))),
            Tt = Object.seal(Object.create(null, {
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
            Vt = !0,
            Ot = !1,
            Rt = !0,
            Mt = !1,
            Dt = !1,
            Bt = !1,
            jt = !1,
            Ut = !1,
            Ft = !1,
            Ht = !1,
            qt = !0,
            Gt = !1,
            Wt = !0,
            zt = !1,
            Kt = {},
            Xt = null,
            Qt = T({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Jt = null,
            Yt = T({}, ["audio", "video", "img", "source", "image", "track"]),
            Zt = null,
            $t = T({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            te = "http://www.w3.org/1998/Math/MathML",
            ee = "http://www.w3.org/2000/svg",
            ie = "http://www.w3.org/1999/xhtml",
            se = ie,
            re = !1,
            ne = null,
            ae = T({}, [te, ee, ie], _),
            oe = ["application/xhtml+xml", "text/html"],
            he = null,
            pe = a.createElement("form"),
            ce = function(t) {
              return t instanceof RegExp || t instanceof Function
            },
            le = function(e) {
              he && he === e || (e && "object" === t(e) || (e = {}), e = P(e), mt = mt = -1 === oe.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, gt = "application/xhtml+xml" === mt ? _ : b, Et = "ALLOWED_TAGS" in e ? T({}, e.ALLOWED_TAGS, gt) : Ct, At = "ALLOWED_ATTR" in e ? T({}, e.ALLOWED_ATTR, gt) : It, ne = "ALLOWED_NAMESPACES" in e ? T({}, e.ALLOWED_NAMESPACES, _) : ae, Zt = "ADD_URI_SAFE_ATTR" in e ? T(P($t), e.ADD_URI_SAFE_ATTR, gt) : $t, Jt = "ADD_DATA_URI_TAGS" in e ? T(P(Yt), e.ADD_DATA_URI_TAGS, gt) : Yt, Xt = "FORBID_CONTENTS" in e ? T({}, e.FORBID_CONTENTS, gt) : Qt, Pt = "FORBID_TAGS" in e ? T({}, e.FORBID_TAGS, gt) : {}, Nt = "FORBID_ATTR" in e ? T({}, e.FORBID_ATTR, gt) : {}, Kt = "USE_PROFILES" in e && e.USE_PROFILES, Lt = !1 !== e.ALLOW_ARIA_ATTR, Vt = !1 !== e.ALLOW_DATA_ATTR, Ot = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Rt = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Mt = e.SAFE_FOR_TEMPLATES || !1, Dt = e.WHOLE_DOCUMENT || !1, Ut = e.RETURN_DOM || !1, Ft = e.RETURN_DOM_FRAGMENT || !1, Ht = e.RETURN_TRUSTED_TYPE || !1, jt = e.FORCE_BODY || !1, qt = !1 !== e.SANITIZE_DOM, Gt = e.SANITIZE_NAMED_PROPS || !1, Wt = !1 !== e.KEEP_CONTENT, zt = e.IN_PLACE || !1, wt = e.ALLOWED_URI_REGEXP || wt, se = e.NAMESPACE || ie, Tt = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ce(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Tt.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ce(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Tt.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Tt.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Mt && (Vt = !1), Ft && (Ut = !0), Kt && (Et = T({}, s(B)), At = [], !0 === Kt.html && (T(Et, L), T(At, j)), !0 === Kt.svg && (T(Et, V), T(At, U), T(At, H)), !0 === Kt.svgFilters && (T(Et, O), T(At, U), T(At, H)), !0 === Kt.mathMl && (T(Et, M), T(At, F), T(At, H))), e.ADD_TAGS && (Et === Ct && (Et = P(Et)), T(Et, e.ADD_TAGS, gt)), e.ADD_ATTR && (At === It && (At = P(At)), T(At, e.ADD_ATTR, gt)), e.ADD_URI_SAFE_ATTR && T(Zt, e.ADD_URI_SAFE_ATTR, gt), e.FORBID_CONTENTS && (Xt === Qt && (Xt = P(Xt)), T(Xt, e.FORBID_CONTENTS, gt)), Wt && (Et["#text"] = !0), Dt && T(Et, ["html", "head", "body"]), Et.table && (T(Et, ["tbody"]), delete Pt.tbody), c && c(e), he = e)
            },
            ue = T({}, ["mi", "mo", "mn", "ms", "mtext"]),
            de = T({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            fe = T({}, ["title", "style", "font", "a", "script"]),
            me = T({}, V);
          T(me, O), T(me, R);
          var ge = T({}, M);
          T(ge, D);
          var xe = function(t) {
              v(r.removed, {
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
            ye = function(t, e) {
              try {
                v(r.removed, {
                  attribute: e.getAttributeNode(t),
                  from: e
                })
              } catch (t) {
                v(r.removed, {
                  attribute: null,
                  from: e
                })
              }
              if (e.removeAttribute(t), "is" === t && !At[t])
                if (Ut || Ft) try {
                  xe(e)
                } catch (t) {} else try {
                  e.setAttribute(t, "")
                } catch (t) {}
            },
            ve = function(t) {
              var e, i;
              if (jt) t = "<remove></remove>" + t;
              else {
                var s = k(t, /^[\r\n\t ]+/);
                i = s && s[0]
              }
              "application/xhtml+xml" === mt && se === ie && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
              var r = nt ? nt.createHTML(t) : t;
              if (se === ie) try {
                e = (new g).parseFromString(r, mt)
              } catch (t) {}
              if (!e || !e.documentElement) {
                e = ht.createDocument(se, "template", null);
                try {
                  e.documentElement.innerHTML = re ? at : r
                } catch (t) {}
              }
              var n = e.body || e.documentElement;
              return t && i && n.insertBefore(a.createTextNode(i), n.childNodes[0] || null), se === ie ? lt.call(e, Dt ? "html" : "body")[0] : Dt ? e.documentElement : n
            },
            be = function(t) {
              return pt.call(t.ownerDocument || t, t, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1)
            },
            _e = function(e) {
              return "object" === t(p) ? e instanceof p : e && "object" === t(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            },
            ke = function(t, e, i) {
              ft[t] && x(ft[t], (function(t) {
                t.call(r, e, i, he)
              }))
            },
            Se = function(t) {
              var e, i;
              if (ke("beforeSanitizeElements", t, null), (i = t) instanceof m && ("string" != typeof i.nodeName || "string" != typeof i.textContent || "function" != typeof i.removeChild || !(i.attributes instanceof f) || "function" != typeof i.removeAttribute || "function" != typeof i.setAttribute || "string" != typeof i.namespaceURI || "function" != typeof i.insertBefore || "function" != typeof i.hasChildNodes)) return xe(t), !0;
              if (C(/[\u0080-\uFFFF]/, t.nodeName)) return xe(t), !0;
              var s = gt(t.nodeName);
              if (ke("uponSanitizeElement", t, {
                  tagName: s,
                  allowedTags: Et
                }), t.hasChildNodes() && !_e(t.firstElementChild) && (!_e(t.content) || !_e(t.content.firstElementChild)) && C(/<[/\w]/g, t.innerHTML) && C(/<[/\w]/g, t.textContent)) return xe(t), !0;
              if ("select" === s && C(/<template/i, t.innerHTML)) return xe(t), !0;
              if (!Et[s] || Pt[s]) {
                if (!Pt[s] && Ee(s)) {
                  if (Tt.tagNameCheck instanceof RegExp && C(Tt.tagNameCheck, s)) return !1;
                  if (Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(s)) return !1
                }
                if (Wt && !Xt[s]) {
                  var n = st(t) || t.parentNode,
                    a = it(t) || t.childNodes;
                  if (a && n)
                    for (var o = a.length - 1; o >= 0; --o) n.insertBefore(tt(a[o], !0), et(t))
                }
                return xe(t), !0
              }
              return t instanceof l && ! function(t) {
                var e = st(t);
                e && e.tagName || (e = {
                  namespaceURI: se,
                  tagName: "template"
                });
                var i = b(t.tagName),
                  s = b(e.tagName);
                return !!ne[t.namespaceURI] && (t.namespaceURI === ee ? e.namespaceURI === ie ? "svg" === i : e.namespaceURI === te ? "svg" === i && ("annotation-xml" === s || ue[s]) : Boolean(me[i]) : t.namespaceURI === te ? e.namespaceURI === ie ? "math" === i : e.namespaceURI === ee ? "math" === i && de[s] : Boolean(ge[i]) : t.namespaceURI === ie ? !(e.namespaceURI === ee && !de[s]) && !(e.namespaceURI === te && !ue[s]) && !ge[i] && (fe[i] || !me[i]) : !("application/xhtml+xml" !== mt || !ne[t.namespaceURI]))
              }(t) ? (xe(t), !0) : "noscript" !== s && "noembed" !== s || !C(/<\/no(script|embed)/i, t.innerHTML) ? (Mt && 3 === t.nodeType && (e = t.textContent, e = S(e, xt, " "), e = S(e, yt, " "), e = S(e, vt, " "), t.textContent !== e && (v(r.removed, {
                element: t.cloneNode()
              }), t.textContent = e)), ke("afterSanitizeElements", t, null), !1) : (xe(t), !0)
            },
            we = function(t, e, i) {
              if (qt && ("id" === e || "name" === e) && (i in a || i in pe)) return !1;
              if (Vt && !Nt[e] && C(bt, e));
              else if (Lt && C(_t, e));
              else if (!At[e] || Nt[e]) {
                if (!(Ee(t) && (Tt.tagNameCheck instanceof RegExp && C(Tt.tagNameCheck, t) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(t)) && (Tt.attributeNameCheck instanceof RegExp && C(Tt.attributeNameCheck, e) || Tt.attributeNameCheck instanceof Function && Tt.attributeNameCheck(e)) || "is" === e && Tt.allowCustomizedBuiltInElements && (Tt.tagNameCheck instanceof RegExp && C(Tt.tagNameCheck, i) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(i)))) return !1
              } else if (Zt[e]);
              else if (C(wt, S(i, St, "")));
              else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== w(i, "data:") || !Jt[t])
                if (Ot && !C(kt, S(i, St, "")));
                else if (i) return !1;
              return !0
            },
            Ee = function(t) {
              return t.indexOf("-") > 0
            },
            Ce = function(e) {
              var i, s, n, a;
              ke("beforeSanitizeAttributes", e, null);
              var o = e.attributes;
              if (o) {
                var h = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: At
                };
                for (a = o.length; a--;) {
                  var p = i = o[a],
                    c = p.name,
                    l = p.namespaceURI;
                  if (s = "value" === c ? i.value : E(i.value), n = gt(c), h.attrName = n, h.attrValue = s, h.keepAttr = !0, h.forceKeepAttr = void 0, ke("uponSanitizeAttribute", e, h), s = h.attrValue, !h.forceKeepAttr && (ye(c, e), h.keepAttr))
                    if (Rt || !C(/\/>/i, s)) {
                      Mt && (s = S(s, xt, " "), s = S(s, yt, " "), s = S(s, vt, " "));
                      var u = gt(e.nodeName);
                      if (we(u, n, s)) {
                        if (!Gt || "id" !== n && "name" !== n || (ye(c, e), s = "user-content-" + s), nt && "object" === t(I) && "function" == typeof I.getAttributeType)
                          if (l);
                          else switch (I.getAttributeType(u, n)) {
                            case "TrustedHTML":
                              s = nt.createHTML(s);
                              break;
                            case "TrustedScriptURL":
                              s = nt.createScriptURL(s)
                          }
                        try {
                          l ? e.setAttributeNS(l, c, s) : e.setAttribute(c, s), y(r.removed)
                        } catch (t) {}
                      }
                    } else ye(c, e)
                }
                ke("afterSanitizeAttributes", e, null)
              }
            },
            Ae = function t(e) {
              var i, s = be(e);
              for (ke("beforeSanitizeShadowDOM", e, null); i = s.nextNode();) ke("uponSanitizeShadowNode", i, null), Se(i) || (i.content instanceof o && t(i.content), Ce(i));
              ke("afterSanitizeShadowDOM", e, null)
            };
          return r.sanitize = function(e) {
            var s, a, h, c, l, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((re = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !_e(e)) {
              if ("function" != typeof e.toString) throw A("toString is not a function");
              if ("string" != typeof(e = e.toString())) throw A("dirty is not a string, aborting")
            }
            if (!r.isSupported) {
              if ("object" === t(i.toStaticHTML) || "function" == typeof i.toStaticHTML) {
                if ("string" == typeof e) return i.toStaticHTML(e);
                if (_e(e)) return i.toStaticHTML(e.outerHTML)
              }
              return e
            }
            if (Bt || le(u), r.removed = [], "string" == typeof e && (zt = !1), zt) {
              if (e.nodeName) {
                var d = gt(e.nodeName);
                if (!Et[d] || Pt[d]) throw A("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (e instanceof p) 1 === (a = (s = ve("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? s = a : s.appendChild(a);
            else {
              if (!Ut && !Mt && !Dt && -1 === e.indexOf("<")) return nt && Ht ? nt.createHTML(e) : e;
              if (!(s = ve(e))) return Ut ? null : Ht ? at : ""
            }
            s && jt && xe(s.firstChild);
            for (var f = be(zt ? e : s); h = f.nextNode();) 3 === h.nodeType && h === c || Se(h) || (h.content instanceof o && Ae(h.content), Ce(h), c = h);
            if (c = null, zt) return e;
            if (Ut) {
              if (Ft)
                for (l = ct.call(s.ownerDocument); s.firstChild;) l.appendChild(s.firstChild);
              else l = s;
              return (At.shadowroot || At.shadowrootmod) && (l = ut.call(n, l, !0)), l
            }
            var m = Dt ? s.outerHTML : s.innerHTML;
            return Dt && Et["!doctype"] && s.ownerDocument && s.ownerDocument.doctype && s.ownerDocument.doctype.name && C(Y, s.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + s.ownerDocument.doctype.name + ">\n" + m), Mt && (m = S(m, xt, " "), m = S(m, yt, " "), m = S(m, vt, " ")), nt && Ht ? nt.createHTML(m) : m
          }, r.setConfig = function(t) {
            le(t), Bt = !0
          }, r.clearConfig = function() {
            he = null, Bt = !1
          }, r.isValidAttribute = function(t, e, i) {
            he || le({});
            var s = gt(t),
              r = gt(e);
            return we(s, r, i)
          }, r.addHook = function(t, e) {
            "function" == typeof e && (ft[t] = ft[t] || [], v(ft[t], e))
          }, r.removeHook = function(t) {
            if (ft[t]) return y(ft[t])
          }, r.removeHooks = function(t) {
            ft[t] && (ft[t] = [])
          }, r.removeAllHooks = function() {
            ft = {}
          }, r
        }()
      }()
    },
    3970: (t, e, i) => {
      "use strict";
      var s = i(6035),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function p(t, e, i) {
        var s, n = {},
          p = null,
          c = null;
        for (s in void 0 !== i && (p = "" + i), void 0 !== e.key && (p = "" + e.key), void 0 !== e.ref && (c = e.ref), e) a.call(e, s) && !h.hasOwnProperty(s) && (n[s] = e[s]);
        if (t && t.defaultProps)
          for (s in e = t.defaultProps) void 0 === n[s] && (n[s] = e[s]);
        return {
          $$typeof: r,
          type: t,
          key: p,
          ref: c,
          props: n,
          _owner: o.current
        }
      }
      e.Fragment = n, e.jsx = p, e.jsxs = p
    },
    6160: (t, e, i) => {
      "use strict";
      t.exports = i(3970)
    },
    7628: function(t, e, i) {
      var s;
      t.exports = (s = i(6035), (() => {
        var t = {
            977: (t, e, i) => {
              "use strict";
              const s = i(325),
                r = /^[\da-fA-F]+$/,
                n = /^\d+$/,
                a = new WeakMap;

              function o(t) {
                t = t.Parser.acorn || t;
                let e = a.get(t);
                if (!e) {
                  const i = t.tokTypes,
                    s = t.TokContext,
                    r = t.TokenType,
                    n = new s("<tag", !1),
                    o = new s("</tag", !1),
                    h = new s("<tag>...</tag>", !0, !0),
                    p = {
                      tc_oTag: n,
                      tc_cTag: o,
                      tc_expr: h
                    },
                    c = {
                      jsxName: new r("jsxName"),
                      jsxText: new r("jsxText", {
                        beforeExpr: !0
                      }),
                      jsxTagStart: new r("jsxTagStart", {
                        startsExpr: !0
                      }),
                      jsxTagEnd: new r("jsxTagEnd")
                    };
                  c.jsxTagStart.updateContext = function() {
                    this.context.push(h), this.context.push(n), this.exprAllowed = !1
                  }, c.jsxTagEnd.updateContext = function(t) {
                    let e = this.context.pop();
                    e === n && t === i.slash || e === o ? (this.context.pop(), this.exprAllowed = this.curContext() === h) : this.exprAllowed = !0
                  }, e = {
                    tokContexts: p,
                    tokTypes: c
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
                        p = o(a),
                        c = a.tokTypes,
                        l = p.tokTypes,
                        u = a.tokContexts,
                        d = p.tokContexts.tc_oTag,
                        f = p.tokContexts.tc_cTag,
                        m = p.tokContexts.tc_expr,
                        g = a.isNewLine,
                        x = a.isIdentifierStart,
                        y = a.isIdentifierChar;
                      return class extends e {
                        static get acornJsx() {
                          return p
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
                            let s = this.input.charCodeAt(this.pos);
                            if (s === t) break;
                            38 === s ? (e += this.input.slice(i, this.pos), e += this.jsx_readEntity(), i = this.pos) : g(s) ? (e += this.input.slice(i, this.pos), e += this.jsx_readNewLine(!1), i = this.pos) : ++this.pos
                          }
                          return e += this.input.slice(i, this.pos++), this.finishToken(c.string, e)
                        }
                        jsx_readEntity() {
                          let t, e = "",
                            i = 0,
                            a = this.input[this.pos];
                          "&" !== a && this.raise(this.pos, "Entity must start with an ampersand");
                          let o = ++this.pos;
                          for (; this.pos < this.input.length && i++ < 10;) {
                            if (a = this.input[this.pos++], ";" === a) {
                              "#" === e[0] ? "x" === e[1] ? (e = e.substr(2), r.test(e) && (t = String.fromCharCode(parseInt(e, 16)))) : (e = e.substr(1), n.test(e) && (t = String.fromCharCode(parseInt(e, 10)))) : t = s[e];
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
                          } while (y(t) || 45 === t);
                          return this.finishToken(l.jsxName, this.input.slice(e, this.pos))
                        }
                        jsx_parseIdentifier() {
                          let t = this.startNode();
                          return this.type === l.jsxName ? t.name = this.value : this.type.keyword ? t.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier")
                        }
                        jsx_parseNamespacedName() {
                          let e = this.start,
                            i = this.startLoc,
                            s = this.jsx_parseIdentifier();
                          if (!t.allowNamespaces || !this.eat(c.colon)) return s;
                          var r = this.startNodeAt(e, i);
                          return r.namespace = s, r.name = this.jsx_parseIdentifier(), this.finishNode(r, "JSXNamespacedName")
                        }
                        jsx_parseElementName() {
                          if (this.type === l.jsxTagEnd) return "";
                          let e = this.start,
                            i = this.startLoc,
                            s = this.jsx_parseNamespacedName();
                          for (this.type !== c.dot || "JSXNamespacedName" !== s.type || t.allowNamespacedObjects || this.unexpected(); this.eat(c.dot);) {
                            let t = this.startNodeAt(e, i);
                            t.object = s, t.property = this.jsx_parseIdentifier(), s = this.finishNode(t, "JSXMemberExpression")
                          }
                          return s
                        }
                        jsx_parseAttributeValue() {
                          switch (this.type) {
                            case c.braceL:
                              let t = this.jsx_parseExpressionContainer();
                              return "JSXEmptyExpression" === t.expression.type && this.raise(t.start, "JSX attributes must only be assigned a non-empty expression"), t;
                            case l.jsxTagStart:
                            case c.string:
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
                          return this.next(), t.expression = this.type === c.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(c.braceR), this.finishNode(t, "JSXExpressionContainer")
                        }
                        jsx_parseAttribute() {
                          let t = this.startNode();
                          return this.eat(c.braceL) ? (this.expect(c.ellipsis), t.argument = this.parseMaybeAssign(), this.expect(c.braceR), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsx_parseNamespacedName(), t.value = this.eat(c.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(t, "JSXAttribute"))
                        }
                        jsx_parseOpeningElementAt(e, i) {
                          let s = this.startNodeAt(e, i);
                          s.attributes = [];
                          let r = this.jsx_parseElementName();
                          for (r && (s.name = r); this.type !== c.slash && this.type !== l.jsxTagEnd;) s.attributes.push(this.jsx_parseAttribute());
                          s.selfClosing = this.eat(c.slash), this.expect(l.jsxTagEnd);
                          return t.autoCloseVoidElements && r && ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"].includes(r.name) && (s.selfClosing = !0), this.finishNode(s, r ? "JSXOpeningElement" : "JSXOpeningFragment")
                        }
                        jsx_parseClosingElementAt(t, e) {
                          let i = this.startNodeAt(t, e),
                            s = this.jsx_parseElementName();
                          return s && (i.name = s), this.expect(l.jsxTagEnd), this.finishNode(i, s ? "JSXClosingElement" : "JSXClosingFragment")
                        }
                        jsx_parseElementAt(t, e) {
                          let i = this.startNodeAt(t, e),
                            s = [],
                            r = this.jsx_parseOpeningElementAt(t, e),
                            n = null;
                          if (!r.selfClosing) {
                            t: for (;;) switch (this.type) {
                              case l.jsxTagStart:
                                if (t = this.start, e = this.startLoc, this.next(), this.eat(c.slash)) {
                                  n = this.jsx_parseClosingElementAt(t, e);
                                  break t
                                }
                                s.push(this.jsx_parseElementAt(t, e));
                                break;
                              case l.jsxText:
                                s.push(this.parseExprAtom());
                                break;
                              case c.braceL:
                                s.push(this.jsx_parseExpressionContainer());
                                break;
                              default:
                                this.unexpected()
                            }
                            h(n.name) !== h(r.name) && this.raise(n.start, "Expected corresponding JSX closing tag for <" + h(r.name) + ">")
                          }
                          let a = r.name ? "Element" : "Fragment";
                          return i["opening" + a] = r, i["closing" + a] = n, i.children = s, this.type === c.relational && "<" === this.value && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(i, "JSX" + a)
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
                          if (e === d || e === f) {
                            if (x(t)) return this.jsx_readWord();
                            if (62 == t) return ++this.pos, this.finishToken(l.jsxTagEnd);
                            if ((34 === t || 39 === t) && e == d) return this.jsx_readString(t)
                          }
                          return 60 === t && this.exprAllowed && 33 !== this.input.charCodeAt(this.pos + 1) ? (++this.pos, this.finishToken(l.jsxTagStart)) : super.readToken(t)
                        }
                        updateContext(t) {
                          if (this.type == c.braceL) {
                            var e = this.curContext();
                            e == d ? this.context.push(u.b_expr) : e == m ? this.context.push(u.b_tmpl) : super.updateContext(t), this.exprAllowed = !0
                          } else {
                            if (this.type !== c.slash || t !== l.jsxTagStart) return super.updateContext(t);
                            this.context.length -= 2, this.context.push(f), this.exprAllowed = !1
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
                  s = {
                    5: i,
                    "5module": i + " export import",
                    6: i + " const class extends export import super"
                  },
                  r = /^in(stanceof)?$/,
                  n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                  a = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                  o = new RegExp("[" + n + "]"),
                  h = new RegExp("[" + n + a + "]");
                n = a = null;
                var p = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                  c = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

                function l(t, e) {
                  for (var i = 65536, s = 0; s < e.length; s += 2) {
                    if ((i += e[s]) > t) return !1;
                    if ((i += e[s + 1]) >= t) return !0
                  }
                }

                function u(t, e) {
                  return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && o.test(String.fromCharCode(t)) : !1 !== e && l(t, p)))
                }

                function d(t, e) {
                  return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && h.test(String.fromCharCode(t)) : !1 !== e && (l(t, p) || l(t, c)))))
                }
                var f = function(t, e) {
                  void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
                };

                function m(t, e) {
                  return new f(t, {
                    beforeExpr: !0,
                    binop: e
                  })
                }
                var g = {
                    beforeExpr: !0
                  },
                  x = {
                    startsExpr: !0
                  },
                  y = {};

                function v(t, e) {
                  return void 0 === e && (e = {}), e.keyword = t, y[t] = new f(t, e)
                }
                var b = {
                    num: new f("num", x),
                    regexp: new f("regexp", x),
                    string: new f("string", x),
                    name: new f("name", x),
                    eof: new f("eof"),
                    bracketL: new f("[", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    bracketR: new f("]"),
                    braceL: new f("{", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    braceR: new f("}"),
                    parenL: new f("(", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    parenR: new f(")"),
                    comma: new f(",", g),
                    semi: new f(";", g),
                    colon: new f(":", g),
                    dot: new f("."),
                    question: new f("?", g),
                    questionDot: new f("?."),
                    arrow: new f("=>", g),
                    template: new f("template"),
                    invalidTemplate: new f("invalidTemplate"),
                    ellipsis: new f("...", g),
                    backQuote: new f("`", x),
                    dollarBraceL: new f("${", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    eq: new f("=", {
                      beforeExpr: !0,
                      isAssign: !0
                    }),
                    assign: new f("_=", {
                      beforeExpr: !0,
                      isAssign: !0
                    }),
                    incDec: new f("++/--", {
                      prefix: !0,
                      postfix: !0,
                      startsExpr: !0
                    }),
                    prefix: new f("!/~", {
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
                    plusMin: new f("+/-", {
                      beforeExpr: !0,
                      binop: 9,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    modulo: m("%", 10),
                    star: m("*", 10),
                    slash: m("/", 10),
                    starstar: new f("**", {
                      beforeExpr: !0
                    }),
                    coalesce: m("??", 1),
                    _break: v("break"),
                    _case: v("case", g),
                    _catch: v("catch"),
                    _continue: v("continue"),
                    _debugger: v("debugger"),
                    _default: v("default", g),
                    _do: v("do", {
                      isLoop: !0,
                      beforeExpr: !0
                    }),
                    _else: v("else", g),
                    _finally: v("finally"),
                    _for: v("for", {
                      isLoop: !0
                    }),
                    _function: v("function", x),
                    _if: v("if"),
                    _return: v("return", g),
                    _switch: v("switch"),
                    _throw: v("throw", g),
                    _try: v("try"),
                    _var: v("var"),
                    _const: v("const"),
                    _while: v("while", {
                      isLoop: !0
                    }),
                    _with: v("with"),
                    _new: v("new", {
                      beforeExpr: !0,
                      startsExpr: !0
                    }),
                    _this: v("this", x),
                    _super: v("super", x),
                    _class: v("class", x),
                    _extends: v("extends", g),
                    _export: v("export"),
                    _import: v("import", x),
                    _null: v("null", x),
                    _true: v("true", x),
                    _false: v("false", x),
                    _in: v("in", {
                      beforeExpr: !0,
                      binop: 7
                    }),
                    _instanceof: v("instanceof", {
                      beforeExpr: !0,
                      binop: 7
                    }),
                    _typeof: v("typeof", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    _void: v("void", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    }),
                    _delete: v("delete", {
                      beforeExpr: !0,
                      prefix: !0,
                      startsExpr: !0
                    })
                  },
                  _ = /\r\n?|\n|\u2028|\u2029/,
                  k = new RegExp(_.source, "g");

                function S(t, e) {
                  return 10 === t || 13 === t || !e && (8232 === t || 8233 === t)
                }
                var w = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                  E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                  C = Object.prototype,
                  A = C.hasOwnProperty,
                  I = C.toString;

                function T(t, e) {
                  return A.call(t, e)
                }
                var P = Array.isArray || function(t) {
                  return "[object Array]" === I.call(t)
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
                var V = function(t, e, i) {
                  this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile)
                };

                function O(t, e) {
                  for (var i = 1, s = 0;;) {
                    k.lastIndex = s;
                    var r = k.exec(t);
                    if (!(r && r.index < e)) return new L(i, e - s);
                    ++i, s = r.index + r[0].length
                  }
                }
                var R = {
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

                function D(t) {
                  var e = {};
                  for (var i in R) e[i] = t && T(t, i) ? t[i] : R[i];
                  if ("latest" === e.ecmaVersion ? e.ecmaVersion = 1e8 : null == e.ecmaVersion ? (!M && "object" == typeof console && console.warn && (M = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), P(e.onToken)) {
                    var s = e.onToken;
                    e.onToken = function(t) {
                      return s.push(t)
                    }
                  }
                  return P(e.onComment) && (e.onComment = function(t, e) {
                    return function(i, s, r, n, a, o) {
                      var h = {
                        type: i ? "Block" : "Line",
                        value: s,
                        start: r,
                        end: n
                      };
                      t.locations && (h.loc = new V(this, a, o)), t.ranges && (h.range = [r, n]), e.push(h)
                    }
                  }(e, e.onComment)), e
                }
                var B = 2,
                  j = 1 | B;

                function U(t, e) {
                  return B | (t ? 4 : 0) | (e ? 8 : 0)
                }
                var F = function(t, i, r) {
                    this.options = t = D(t), this.sourceFile = t.sourceFile, this.keywords = N(s[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                    var n = "";
                    !0 !== t.allowReserved && (n = e[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (n += " await")), this.reservedWords = N(n);
                    var a = (n ? n + " " : "") + e.strict;
                    this.reservedWordsStrict = N(a), this.reservedWordsStrictBind = N(a + " " + e.strictBind), this.input = String(i), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf("\n", r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(_).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = b.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
                  },
                  H = {
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
                F.prototype.parse = function() {
                  var t = this.options.program || this.startNode();
                  return this.nextToken(), this.parseTopLevel(t)
                }, H.inFunction.get = function() {
                  return (this.currentVarScope().flags & B) > 0
                }, H.inGenerator.get = function() {
                  return (8 & this.currentVarScope().flags) > 0
                }, H.inAsync.get = function() {
                  return (4 & this.currentVarScope().flags) > 0
                }, H.allowSuper.get = function() {
                  return (64 & this.currentThisScope().flags) > 0
                }, H.allowDirectSuper.get = function() {
                  return (128 & this.currentThisScope().flags) > 0
                }, H.treatFunctionsAsVar.get = function() {
                  return this.treatFunctionsAsVarInScope(this.currentScope())
                }, H.inNonArrowFunction.get = function() {
                  return (this.currentThisScope().flags & B) > 0
                }, F.extend = function() {
                  for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                  for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
                  return i
                }, F.parse = function(t, e) {
                  return new this(e, t).parse()
                }, F.parseExpressionAt = function(t, e, i) {
                  var s = new this(i, t, e);
                  return s.nextToken(), s.parseExpression()
                }, F.tokenizer = function(t, e) {
                  return new this(e, t)
                }, Object.defineProperties(F.prototype, H);
                var q = F.prototype,
                  G = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

                function W() {
                  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
                }
                q.strictDirective = function(t) {
                  for (;;) {
                    E.lastIndex = t, t += E.exec(this.input)[0].length;
                    var e = G.exec(this.input.slice(t));
                    if (!e) return !1;
                    if ("use strict" === (e[1] || e[2])) {
                      E.lastIndex = t + e[0].length;
                      var i = E.exec(this.input),
                        s = i.index + i[0].length,
                        r = this.input.charAt(s);
                      return ";" === r || "}" === r || _.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || "!" === r && "=" === this.input.charAt(s + 1))
                    }
                    t += e[0].length, E.lastIndex = t, t += E.exec(this.input)[0].length, ";" === this.input[t] && t++
                  }
                }, q.eat = function(t) {
                  return this.type === t && (this.next(), !0)
                }, q.isContextual = function(t) {
                  return this.type === b.name && this.value === t && !this.containsEsc
                }, q.eatContextual = function(t) {
                  return !!this.isContextual(t) && (this.next(), !0)
                }, q.expectContextual = function(t) {
                  this.eatContextual(t) || this.unexpected()
                }, q.canInsertSemicolon = function() {
                  return this.type === b.eof || this.type === b.braceR || _.test(this.input.slice(this.lastTokEnd, this.start))
                }, q.insertSemicolon = function() {
                  if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
                }, q.semicolon = function() {
                  this.eat(b.semi) || this.insertSemicolon() || this.unexpected()
                }, q.afterTrailingComma = function(t, e) {
                  if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
                }, q.expect = function(t) {
                  this.eat(t) || this.unexpected()
                }, q.unexpected = function(t) {
                  this.raise(null != t ? t : this.start, "Unexpected token")
                }, q.checkPatternErrors = function(t, e) {
                  if (t) {
                    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                    i > -1 && this.raiseRecoverable(i, "Parenthesized pattern")
                  }
                }, q.checkExpressionErrors = function(t, e) {
                  if (!t) return !1;
                  var i = t.shorthandAssign,
                    s = t.doubleProto;
                  if (!e) return i >= 0 || s >= 0;
                  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property")
                }, q.checkYieldAwaitInDefaultParams = function() {
                  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
                }, q.isSimpleAssignTarget = function(t) {
                  return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
                };
                var z = F.prototype;
                z.parseTopLevel = function(t) {
                  var e = Object.create(null);
                  for (t.body || (t.body = []); this.type !== b.eof;) {
                    var i = this.parseStatement(null, !0, e);
                    t.body.push(i)
                  }
                  if (this.inModule)
                    for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
                      var n = r[s];
                      this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined")
                    }
                  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
                };
                var K = {
                    kind: "loop"
                  },
                  X = {
                    kind: "switch"
                  };
                z.isLet = function(t) {
                  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                  E.lastIndex = this.pos;
                  var e = E.exec(this.input),
                    i = this.pos + e[0].length,
                    s = this.input.charCodeAt(i);
                  if (91 === s) return !0;
                  if (t) return !1;
                  if (123 === s) return !0;
                  if (u(s, !0)) {
                    for (var n = i + 1; d(this.input.charCodeAt(n), !0);) ++n;
                    var a = this.input.slice(i, n);
                    if (!r.test(a)) return !0
                  }
                  return !1
                }, z.isAsyncFunction = function() {
                  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                  E.lastIndex = this.pos;
                  var t = E.exec(this.input),
                    e = this.pos + t[0].length;
                  return !(_.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 !== this.input.length && d(this.input.charAt(e + 8)))
                }, z.parseStatement = function(t, e, i) {
                  var s, r = this.type,
                    n = this.startNode();
                  switch (this.isLet(t) && (r = b._var, s = "let"), r) {
                    case b._break:
                    case b._continue:
                      return this.parseBreakContinueStatement(n, r.keyword);
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
                      return s = s || this.value, t && "var" !== s && this.unexpected(), this.parseVarStatement(n, s);
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
                      if (this.options.ecmaVersion > 10 && r === b._import) {
                        E.lastIndex = this.pos;
                        var a = E.exec(this.input),
                          o = this.pos + a[0].length,
                          h = this.input.charCodeAt(o);
                        if (40 === h || 46 === h) return this.parseExpressionStatement(n, this.parseExpression())
                      }
                      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === b._import ? this.parseImport(n) : this.parseExport(n, i);
                    default:
                      if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(n, !0, !t);
                      var p = this.value,
                        c = this.parseExpression();
                      return r === b.name && "Identifier" === c.type && this.eat(b.colon) ? this.parseLabeledStatement(n, p, c, t) : this.parseExpressionStatement(n, c)
                  }
                }, z.parseBreakContinueStatement = function(t, e) {
                  var i = "break" === e;
                  this.next(), this.eat(b.semi) || this.insertSemicolon() ? t.label = null : this.type !== b.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
                  for (var s = 0; s < this.labels.length; ++s) {
                    var r = this.labels[s];
                    if (null == t.label || r.name === t.label.name) {
                      if (null != r.kind && (i || "loop" === r.kind)) break;
                      if (t.label && i) break
                    }
                  }
                  return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
                }, z.parseDebuggerStatement = function(t) {
                  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
                }, z.parseDoStatement = function(t) {
                  return this.next(), this.labels.push(K), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(b._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(b.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
                }, z.parseForStatement = function(t) {
                  this.next();
                  var e = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
                  if (this.labels.push(K), this.enterScope(0), this.expect(b.parenL), this.type === b.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                  var i = this.isLet();
                  if (this.type === b._var || this.type === b._const || i) {
                    var s = this.startNode(),
                      r = i ? "let" : this.value;
                    return this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), (this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === s.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === b._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, s)) : (e > -1 && this.unexpected(e), this.parseFor(t, s))
                  }
                  var n = new W,
                    a = this.parseExpression(!0, n);
                  return this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === b._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(a, !1, n), this.checkLValPattern(a), this.parseForIn(t, a)) : (this.checkExpressionErrors(n, !0), e > -1 && this.unexpected(e), this.parseFor(t, a))
                }, z.parseFunctionStatement = function(t, e, i) {
                  return this.next(), this.parseFunction(t, J | (i ? 0 : Y), !1, e)
                }, z.parseIfStatement = function(t) {
                  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(b._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
                }, z.parseReturnStatement = function(t) {
                  return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(b.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
                }, z.parseSwitchStatement = function(t) {
                  var e;
                  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(b.braceL), this.labels.push(X), this.enterScope(0);
                  for (var i = !1; this.type !== b.braceR;)
                    if (this.type === b._case || this.type === b._default) {
                      var s = this.type === b._case;
                      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(b.colon)
                    } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
                }, z.parseThrowStatement = function(t) {
                  return this.next(), _.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
                };
                var Q = [];
                z.parseTryStatement = function(t) {
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
                }, z.parseVarStatement = function(t, e) {
                  return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration")
                }, z.parseWhileStatement = function(t) {
                  return this.next(), t.test = this.parseParenExpression(), this.labels.push(K), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
                }, z.parseWithStatement = function(t) {
                  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
                }, z.parseEmptyStatement = function(t) {
                  return this.next(), this.finishNode(t, "EmptyStatement")
                }, z.parseLabeledStatement = function(t, e, i, s) {
                  for (var r = 0, n = this.labels; r < n.length; r += 1) n[r].name === e && this.raise(i.start, "Label '" + e + "' is already declared");
                  for (var a = this.type.isLoop ? "loop" : this.type === b._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                    var h = this.labels[o];
                    if (h.statementStart !== t.start) break;
                    h.statementStart = this.start, h.kind = a
                  }
                  return this.labels.push({
                    name: e,
                    kind: a,
                    statementStart: this.start
                  }), t.body = this.parseStatement(s ? -1 === s.indexOf("label") ? s + "label" : s : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
                }, z.parseExpressionStatement = function(t, e) {
                  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
                }, z.parseBlock = function(t, e, i) {
                  for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(b.braceL), t && this.enterScope(0); this.type !== b.braceR;) {
                    var s = this.parseStatement(null);
                    e.body.push(s)
                  }
                  return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
                }, z.parseFor = function(t, e) {
                  return t.init = e, this.expect(b.semi), t.test = this.type === b.semi ? null : this.parseExpression(), this.expect(b.semi), t.update = this.type === b.parenR ? null : this.parseExpression(), this.expect(b.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
                }, z.parseForIn = function(t, e) {
                  var i = this.type === b._in;
                  return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(b.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
                }, z.parseVar = function(t, e, i) {
                  for (t.declarations = [], t.kind = i;;) {
                    var s = this.startNode();
                    if (this.parseVarId(s, i), this.eat(b.eq) ? s.init = this.parseMaybeAssign(e) : "const" !== i || this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === s.id.type || e && (this.type === b._in || this.isContextual("of")) ? s.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(b.comma)) break
                  }
                  return t
                }, z.parseVarId = function(t, e) {
                  t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
                };
                var J = 1,
                  Y = 2;
                z.parseFunction = function(t, e, i, s) {
                  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === b.star && e & Y && this.unexpected(), t.generator = this.eat(b.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & J && (t.id = 4 & e && this.type !== b.name ? null : this.parseIdent(), !t.id || e & Y || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                  var r = this.yieldPos,
                    n = this.awaitPos,
                    a = this.awaitIdentPos;
                  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(U(t.async, t.generator)), e & J || (t.id = this.type === b.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(t, e & J ? "FunctionDeclaration" : "FunctionExpression")
                }, z.parseFunctionParams = function(t) {
                  this.expect(b.parenL), t.params = this.parseBindingList(b.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
                }, z.parseClass = function(t, e) {
                  this.next();
                  var i = this.strict;
                  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
                  var s = this.startNode(),
                    r = !1;
                  for (s.body = [], this.expect(b.braceL); this.type !== b.braceR;) {
                    var n = this.parseClassElement(null !== t.superClass);
                    n && (s.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind && (r && this.raise(n.start, "Duplicate constructor in the same class"), r = !0))
                  }
                  return this.strict = i, this.next(), t.body = this.finishNode(s, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
                }, z.parseClassElement = function(t) {
                  var e = this;
                  if (this.eat(b.semi)) return null;
                  var i = this.startNode(),
                    s = function(t, s) {
                      void 0 === s && (s = !1);
                      var r = e.start,
                        n = e.startLoc;
                      return !(!e.eatContextual(t) || (e.type === b.parenL || s && e.canInsertSemicolon()) && (i.key && e.unexpected(), i.computed = !1, i.key = e.startNodeAt(r, n), i.key.name = t, e.finishNode(i.key, "Identifier"), 1))
                    };
                  i.kind = "method", i.static = s("static");
                  var r = this.eat(b.star),
                    n = !1;
                  r || (this.options.ecmaVersion >= 8 && s("async", !0) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(b.star)) : s("get") ? i.kind = "get" : s("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
                  var a = i.key,
                    o = !1;
                  return i.computed || i.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? i.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(a.start, "Constructor can't have get/set modifier"), r && this.raise(a.start, "Constructor can't be a generator"), n && this.raise(a.start, "Constructor can't be an async method"), i.kind = "constructor", o = t), this.parseClassMethod(i, r, n, o), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i
                }, z.parseClassMethod = function(t, e, i, s) {
                  return t.value = this.parseMethod(e, i, s), this.finishNode(t, "MethodDefinition")
                }, z.parseClassId = function(t, e) {
                  this.type === b.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
                }, z.parseClassSuper = function(t) {
                  t.superClass = this.eat(b._extends) ? this.parseExprSubscripts() : null
                }, z.parseExport = function(t, e) {
                  if (this.next(), this.eat(b.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseIdent(!0), this.checkExport(e, t.exported.name, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== b.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
                  if (this.eat(b._default)) {
                    var i;
                    if (this.checkExport(e, "default", this.lastTokStart), this.type === b._function || (i = this.isAsyncFunction())) {
                      var s = this.startNode();
                      this.next(), i && this.next(), t.declaration = this.parseFunction(s, 4 | J, !1, i)
                    } else if (this.type === b._class) {
                      var r = this.startNode();
                      t.declaration = this.parseClass(r, "nullableID")
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
                }, z.checkExport = function(t, e, i) {
                  t && (T(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0)
                }, z.checkPatternExport = function(t, e) {
                  var i = e.type;
                  if ("Identifier" === i) this.checkExport(t, e.name, e.start);
                  else if ("ObjectPattern" === i)
                    for (var s = 0, r = e.properties; s < r.length; s += 1) {
                      var n = r[s];
                      this.checkPatternExport(t, n)
                    } else if ("ArrayPattern" === i)
                      for (var a = 0, o = e.elements; a < o.length; a += 1) {
                        var h = o[a];
                        h && this.checkPatternExport(t, h)
                      } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(t, e.expression)
                }, z.checkVariableExport = function(t, e) {
                  if (t)
                    for (var i = 0, s = e; i < s.length; i += 1) {
                      var r = s[i];
                      this.checkPatternExport(t, r.id)
                    }
                }, z.shouldParseExportStatement = function() {
                  return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
                }, z.parseExportSpecifiers = function(t) {
                  var e = [],
                    i = !0;
                  for (this.expect(b.braceL); !this.eat(b.braceR);) {
                    if (i) i = !1;
                    else if (this.expect(b.comma), this.afterTrailingComma(b.braceR)) break;
                    var s = this.startNode();
                    s.local = this.parseIdent(!0), s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local, this.checkExport(t, s.exported.name, s.exported.start), e.push(this.finishNode(s, "ExportSpecifier"))
                  }
                  return e
                }, z.parseImport = function(t) {
                  return this.next(), this.type === b.string ? (t.specifiers = Q, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === b.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
                }, z.parseImportSpecifiers = function() {
                  var t = [],
                    e = !0;
                  if (this.type === b.name) {
                    var i = this.startNode();
                    if (i.local = this.parseIdent(), this.checkLValSimple(i.local, 2), t.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(b.comma)) return t
                  }
                  if (this.type === b.star) {
                    var s = this.startNode();
                    return this.next(), this.expectContextual("as"), s.local = this.parseIdent(), this.checkLValSimple(s.local, 2), t.push(this.finishNode(s, "ImportNamespaceSpecifier")), t
                  }
                  for (this.expect(b.braceL); !this.eat(b.braceR);) {
                    if (e) e = !1;
                    else if (this.expect(b.comma), this.afterTrailingComma(b.braceR)) break;
                    var r = this.startNode();
                    r.imported = this.parseIdent(!0), this.eatContextual("as") ? r.local = this.parseIdent() : (this.checkUnreserved(r.imported), r.local = r.imported), this.checkLValSimple(r.local, 2), t.push(this.finishNode(r, "ImportSpecifier"))
                  }
                  return t
                }, z.adaptDirectivePrologue = function(t) {
                  for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
                }, z.isDirectiveCandidate = function(t) {
                  return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
                };
                var Z = F.prototype;
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
                      for (var s = 0, r = t.properties; s < r.length; s += 1) {
                        var n = r[s];
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
                  for (var i = t.length, s = 0; s < i; s++) {
                    var r = t[s];
                    r && this.toAssignable(r, e)
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
                  for (var s = [], r = !0; !this.eat(t);)
                    if (r ? r = !1 : this.expect(b.comma), e && this.type === b.comma) s.push(null);
                    else {
                      if (i && this.afterTrailingComma(t)) break;
                      if (this.type === b.ellipsis) {
                        var n = this.parseRestBinding();
                        this.parseBindingListItem(n), s.push(n), this.type === b.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                        break
                      }
                      var a = this.parseMaybeDefault(this.start, this.startLoc);
                      this.parseBindingListItem(a), s.push(a)
                    } return s
                }, Z.parseBindingListItem = function(t) {
                  return t
                }, Z.parseMaybeDefault = function(t, e, i) {
                  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(b.eq)) return i;
                  var s = this.startNodeAt(t, e);
                  return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern")
                }, Z.checkLValSimple = function(t, e, i) {
                  void 0 === e && (e = 0);
                  var s = 0 !== e;
                  switch (t.type) {
                    case "Identifier":
                      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (s ? "Binding " : "Assigning to ") + t.name + " in strict mode"), s && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (T(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
                      break;
                    case "ChainExpression":
                      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                      break;
                    case "MemberExpression":
                      s && this.raiseRecoverable(t.start, "Binding member expression");
                      break;
                    case "ParenthesizedExpression":
                      return s && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
                    default:
                      this.raise(t.start, (s ? "Binding" : "Assigning to") + " rvalue")
                  }
                }, Z.checkLValPattern = function(t, e, i) {
                  switch (void 0 === e && (e = 0), t.type) {
                    case "ObjectPattern":
                      for (var s = 0, r = t.properties; s < r.length; s += 1) {
                        var n = r[s];
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
                var $ = F.prototype;
                $.checkPropClash = function(t, e, i) {
                  if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
                    var s, r = t.key;
                    switch (r.type) {
                      case "Identifier":
                        s = r.name;
                        break;
                      case "Literal":
                        s = String(r.value);
                        break;
                      default:
                        return
                    }
                    var n = t.kind;
                    if (this.options.ecmaVersion >= 6) "__proto__" === s && "init" === n && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);
                    else {
                      var a = e[s = "$" + s];
                      a ? ("init" === n ? this.strict && a.init || a.get || a.set : a.init || a[n]) && this.raiseRecoverable(r.start, "Redefinition of property") : a = e[s] = {
                        init: !1,
                        get: !1,
                        set: !1
                      }, a[n] = !0
                    }
                  }
                }, $.parseExpression = function(t, e) {
                  var i = this.start,
                    s = this.startLoc,
                    r = this.parseMaybeAssign(t, e);
                  if (this.type === b.comma) {
                    var n = this.startNodeAt(i, s);
                    for (n.expressions = [r]; this.eat(b.comma);) n.expressions.push(this.parseMaybeAssign(t, e));
                    return this.finishNode(n, "SequenceExpression")
                  }
                  return r
                }, $.parseMaybeAssign = function(t, e, i) {
                  if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(t);
                    this.exprAllowed = !1
                  }
                  var s = !1,
                    r = -1,
                    n = -1;
                  e ? (r = e.parenthesizedAssign, n = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new W, s = !0);
                  var a = this.start,
                    o = this.startLoc;
                  this.type !== b.parenL && this.type !== b.name || (this.potentialArrowAt = this.start);
                  var h = this.parseMaybeConditional(t, e);
                  if (i && (h = i.call(this, h, a, o)), this.type.isAssign) {
                    var p = this.startNodeAt(a, o);
                    return p.operator = this.value, this.type === b.eq && (h = this.toAssignable(h, !1, e)), s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= h.start && (e.shorthandAssign = -1), this.type === b.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), p.left = h, this.next(), p.right = this.parseMaybeAssign(t), this.finishNode(p, "AssignmentExpression")
                  }
                  return s && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), n > -1 && (e.trailingComma = n), h
                }, $.parseMaybeConditional = function(t, e) {
                  var i = this.start,
                    s = this.startLoc,
                    r = this.parseExprOps(t, e);
                  if (this.checkExpressionErrors(e)) return r;
                  if (this.eat(b.question)) {
                    var n = this.startNodeAt(i, s);
                    return n.test = r, n.consequent = this.parseMaybeAssign(), this.expect(b.colon), n.alternate = this.parseMaybeAssign(t), this.finishNode(n, "ConditionalExpression")
                  }
                  return r
                }, $.parseExprOps = function(t, e) {
                  var i = this.start,
                    s = this.startLoc,
                    r = this.parseMaybeUnary(e, !1);
                  return this.checkExpressionErrors(e) || r.start === i && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, i, s, -1, t)
                }, $.parseExprOp = function(t, e, i, s, r) {
                  var n = this.type.binop;
                  if (null != n && (!r || this.type !== b._in) && n > s) {
                    var a = this.type === b.logicalOR || this.type === b.logicalAND,
                      o = this.type === b.coalesce;
                    o && (n = b.logicalAND.binop);
                    var h = this.value;
                    this.next();
                    var p = this.start,
                      c = this.startLoc,
                      l = this.parseExprOp(this.parseMaybeUnary(null, !1), p, c, n, r),
                      u = this.buildBinary(e, i, t, l, h, a || o);
                    return (a && this.type === b.coalesce || o && (this.type === b.logicalOR || this.type === b.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, i, s, r)
                  }
                  return t
                }, $.buildBinary = function(t, e, i, s, r, n) {
                  var a = this.startNodeAt(t, e);
                  return a.left = i, a.operator = r, a.right = s, this.finishNode(a, n ? "LogicalExpression" : "BinaryExpression")
                }, $.parseMaybeUnary = function(t, e) {
                  var i, s = this.start,
                    r = this.startLoc;
                  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), e = !0;
                  else if (this.type.prefix) {
                    var n = this.startNode(),
                      a = this.type === b.incDec;
                    n.operator = this.value, n.prefix = !0, this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), a ? this.checkLValSimple(n.argument) : this.strict && "delete" === n.operator && "Identifier" === n.argument.type ? this.raiseRecoverable(n.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(n, a ? "UpdateExpression" : "UnaryExpression")
                  } else {
                    if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;
                    for (; this.type.postfix && !this.canInsertSemicolon();) {
                      var o = this.startNodeAt(s, r);
                      o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLValSimple(i), this.next(), i = this.finishNode(o, "UpdateExpression")
                    }
                  }
                  return !e && this.eat(b.starstar) ? this.buildBinary(s, r, i, this.parseMaybeUnary(null, !1), "**", !1) : i
                }, $.parseExprSubscripts = function(t) {
                  var e = this.start,
                    i = this.startLoc,
                    s = this.parseExprAtom(t);
                  if ("ArrowFunctionExpression" === s.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return s;
                  var r = this.parseSubscripts(s, e, i);
                  return t && "MemberExpression" === r.type && (t.parenthesizedAssign >= r.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= r.start && (t.parenthesizedBind = -1)), r
                }, $.parseSubscripts = function(t, e, i, s) {
                  for (var r = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
                    var a = this.parseSubscript(t, e, i, s, r, n);
                    if (a.optional && (n = !0), a === t || "ArrowFunctionExpression" === a.type) {
                      if (n) {
                        var o = this.startNodeAt(e, i);
                        o.expression = a, a = this.finishNode(o, "ChainExpression")
                      }
                      return a
                    }
                    t = a
                  }
                }, $.parseSubscript = function(t, e, i, s, r, n) {
                  var a = this.options.ecmaVersion >= 11,
                    o = a && this.eat(b.questionDot);
                  s && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                  var h = this.eat(b.bracketL);
                  if (h || o && this.type !== b.parenL && this.type !== b.backQuote || this.eat(b.dot)) {
                    var p = this.startNodeAt(e, i);
                    p.object = t, p.property = h ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), p.computed = !!h, h && this.expect(b.bracketR), a && (p.optional = o), t = this.finishNode(p, "MemberExpression")
                  } else if (!s && this.eat(b.parenL)) {
                    var c = new W,
                      l = this.yieldPos,
                      u = this.awaitPos,
                      d = this.awaitIdentPos;
                    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                    var f = this.parseExprList(b.parenR, this.options.ecmaVersion >= 8, !1, c);
                    if (r && !o && !this.canInsertSemicolon() && this.eat(b.arrow)) return this.checkPatternErrors(c, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = l, this.awaitPos = u, this.awaitIdentPos = d, this.parseArrowExpression(this.startNodeAt(e, i), f, !0);
                    this.checkExpressionErrors(c, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = u || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
                    var m = this.startNodeAt(e, i);
                    m.callee = t, m.arguments = f, a && (m.optional = o), t = this.finishNode(m, "CallExpression")
                  } else if (this.type === b.backQuote) {
                    (o || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                    var g = this.startNodeAt(e, i);
                    g.tag = t, g.quasi = this.parseTemplate({
                      isTagged: !0
                    }), t = this.finishNode(g, "TaggedTemplateExpression")
                  }
                  return t
                }, $.parseExprAtom = function(t) {
                  this.type === b.slash && this.readRegexp();
                  var e, i = this.potentialArrowAt === this.start;
                  switch (this.type) {
                    case b._super:
                      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), e = this.startNode(), this.next(), this.type !== b.parenL || this.allowDirectSuper || this.raise(e.start, "super() call outside constructor of a subclass"), this.type !== b.dot && this.type !== b.bracketL && this.type !== b.parenL && this.unexpected(), this.finishNode(e, "Super");
                    case b._this:
                      return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
                    case b.name:
                      var s = this.start,
                        r = this.startLoc,
                        n = this.containsEsc,
                        a = this.parseIdent(!1);
                      if (this.options.ecmaVersion >= 8 && !n && "async" === a.name && !this.canInsertSemicolon() && this.eat(b._function)) return this.parseFunction(this.startNodeAt(s, r), 0, !1, !0);
                      if (i && !this.canInsertSemicolon()) {
                        if (this.eat(b.arrow)) return this.parseArrowExpression(this.startNodeAt(s, r), [a], !1);
                        if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === b.name && !n) return a = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(b.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, r), [a], !0)
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
                        p = this.parseParenAndDistinguishExpression(i);
                      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), p;
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
                }, $.parseExprImport = function() {
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
                }, $.parseDynamicImport = function(t) {
                  if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(b.parenR)) {
                    var e = this.start;
                    this.eat(b.comma) && this.eat(b.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
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
                  this.expect(b.parenL);
                  var t = this.parseExpression();
                  return this.expect(b.parenR), t
                }, $.parseParenAndDistinguishExpression = function(t) {
                  var e, i = this.start,
                    s = this.startLoc,
                    r = this.options.ecmaVersion >= 8;
                  if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var n, a = this.start,
                      o = this.startLoc,
                      h = [],
                      p = !0,
                      c = !1,
                      l = new W,
                      u = this.yieldPos,
                      d = this.awaitPos;
                    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== b.parenR;) {
                      if (p ? p = !1 : this.expect(b.comma), r && this.afterTrailingComma(b.parenR, !0)) {
                        c = !0;
                        break
                      }
                      if (this.type === b.ellipsis) {
                        n = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === b.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                        break
                      }
                      h.push(this.parseMaybeAssign(!1, l, this.parseParenItem))
                    }
                    var f = this.start,
                      m = this.startLoc;
                    if (this.expect(b.parenR), t && !this.canInsertSemicolon() && this.eat(b.arrow)) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = u, this.awaitPos = d, this.parseParenArrowList(i, s, h);
                    h.length && !c || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = d || this.awaitPos, h.length > 1 ? ((e = this.startNodeAt(a, o)).expressions = h, this.finishNodeAt(e, "SequenceExpression", f, m)) : e = h[0]
                  } else e = this.parseParenExpression();
                  if (this.options.preserveParens) {
                    var g = this.startNodeAt(i, s);
                    return g.expression = e, this.finishNode(g, "ParenthesizedExpression")
                  }
                  return e
                }, $.parseParenItem = function(t) {
                  return t
                }, $.parseParenArrowList = function(t, e, i) {
                  return this.parseArrowExpression(this.startNodeAt(t, e), i)
                };
                var tt = [];
                $.parseNew = function() {
                  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                  var t = this.startNode(),
                    e = this.parseIdent(!0);
                  if (this.options.ecmaVersion >= 6 && this.eat(b.dot)) {
                    t.meta = e;
                    var i = this.containsEsc;
                    return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction || this.raiseRecoverable(t.start, "'new.target' can only be used in functions"), this.finishNode(t, "MetaProperty")
                  }
                  var s = this.start,
                    r = this.startLoc,
                    n = this.type === b._import;
                  return t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0), n && "ImportExpression" === t.callee.type && this.raise(s, "Cannot use new with import()"), this.eat(b.parenL) ? t.arguments = this.parseExprList(b.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = tt, this.finishNode(t, "NewExpression")
                }, $.parseTemplateElement = function(t) {
                  var e = t.isTagged,
                    i = this.startNode();
                  return this.type === b.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
                    raw: this.value,
                    cooked: null
                  }) : i.value = {
                    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                    cooked: this.value
                  }, this.next(), i.tail = this.type === b.backQuote, this.finishNode(i, "TemplateElement")
                }, $.parseTemplate = function(t) {
                  void 0 === t && (t = {});
                  var e = t.isTagged;
                  void 0 === e && (e = !1);
                  var i = this.startNode();
                  this.next(), i.expressions = [];
                  var s = this.parseTemplateElement({
                    isTagged: e
                  });
                  for (i.quasis = [s]; !s.tail;) this.type === b.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(b.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(b.braceR), i.quasis.push(s = this.parseTemplateElement({
                    isTagged: e
                  }));
                  return this.next(), this.finishNode(i, "TemplateLiteral")
                }, $.isAsyncProp = function(t) {
                  return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === b.name || this.type === b.num || this.type === b.string || this.type === b.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === b.star) && !_.test(this.input.slice(this.lastTokEnd, this.start))
                }, $.parseObj = function(t, e) {
                  var i = this.startNode(),
                    s = !0,
                    r = {};
                  for (i.properties = [], this.next(); !this.eat(b.braceR);) {
                    if (s) s = !1;
                    else if (this.expect(b.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(b.braceR)) break;
                    var n = this.parseProperty(t, e);
                    t || this.checkPropClash(n, r, e), i.properties.push(n)
                  }
                  return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
                }, $.parseProperty = function(t, e) {
                  var i, s, r, n, a = this.startNode();
                  if (this.options.ecmaVersion >= 9 && this.eat(b.ellipsis)) return t ? (a.argument = this.parseIdent(!1), this.type === b.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === b.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, e), this.type === b.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
                  this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (t || e) && (r = this.start, n = this.startLoc), t || (i = this.eat(b.star)));
                  var o = this.containsEsc;
                  return this.parsePropertyName(a), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(b.star), this.parsePropertyName(a, e)) : s = !1, this.parsePropertyValue(a, t, i, s, r, n, e, o), this.finishNode(a, "Property")
                }, $.parsePropertyValue = function(t, e, i, s, r, n, a, o) {
                  if ((i || s) && this.type === b.colon && this.unexpected(), this.eat(b.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), t.kind = "init";
                  else if (this.options.ecmaVersion >= 6 && this.type === b.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, s);
                  else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === b.comma || this.type === b.braceR || this.type === b.eq) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = r), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, n, this.copyNode(t.key)) : this.type === b.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, n, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected();
                  else {
                    (i || s) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                    var h = "get" === t.kind ? 0 : 1;
                    if (t.value.params.length !== h) {
                      var p = t.value.start;
                      "get" === t.kind ? this.raiseRecoverable(p, "getter should have no params") : this.raiseRecoverable(p, "setter should have exactly one param")
                    } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
                  }
                }, $.parsePropertyName = function(t) {
                  if (this.options.ecmaVersion >= 6) {
                    if (this.eat(b.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(b.bracketR), t.key;
                    t.computed = !1
                  }
                  return t.key = this.type === b.num || this.type === b.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
                }, $.initFunction = function(t) {
                  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
                }, $.parseMethod = function(t, e, i) {
                  var s = this.startNode(),
                    r = this.yieldPos,
                    n = this.awaitPos,
                    a = this.awaitIdentPos;
                  return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | U(e, s.generator) | (i ? 128 : 0)), this.expect(b.parenL), s.params = this.parseBindingList(b.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(s, "FunctionExpression")
                }, $.parseArrowExpression = function(t, e, i) {
                  var s = this.yieldPos,
                    r = this.awaitPos,
                    n = this.awaitIdentPos;
                  return this.enterScope(16 | U(i, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1), this.yieldPos = s, this.awaitPos = r, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
                }, $.parseFunctionBody = function(t, e, i) {
                  var s = e && this.type !== b.braceL,
                    r = this.strict,
                    n = !1;
                  if (s) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);
                  else {
                    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                    r && !a || (n = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                    var o = this.labels;
                    this.labels = [], n && (this.strict = !0), this.checkParams(t, !r && !n && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !r), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = o
                  }
                  this.exitScope()
                }, $.isSimpleParamList = function(t) {
                  for (var e = 0, i = t; e < i.length; e += 1)
                    if ("Identifier" !== i[e].type) return !1;
                  return !0
                }, $.checkParams = function(t, e) {
                  for (var i = Object.create(null), s = 0, r = t.params; s < r.length; s += 1) {
                    var n = r[s];
                    this.checkLValInnerPattern(n, 1, e ? null : i)
                  }
                }, $.parseExprList = function(t, e, i, s) {
                  for (var r = [], n = !0; !this.eat(t);) {
                    if (n) n = !1;
                    else if (this.expect(b.comma), e && this.afterTrailingComma(t)) break;
                    var a = void 0;
                    i && this.type === b.comma ? a = null : this.type === b.ellipsis ? (a = this.parseSpread(s), s && this.type === b.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, s), r.push(a)
                  }
                  return r
                }, $.checkUnreserved = function(t) {
                  var e = t.start,
                    i = t.end,
                    s = t.name;
                  this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, i).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"))
                }, $.parseIdent = function(t, e) {
                  var i = this.startNode();
                  return this.type === b.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(!!t), this.finishNode(i, "Identifier"), t || (this.checkUnreserved(i), "await" !== i.name || this.awaitIdentPos || (this.awaitIdentPos = i.start)), i
                }, $.parseYield = function(t) {
                  this.yieldPos || (this.yieldPos = this.start);
                  var e = this.startNode();
                  return this.next(), this.type === b.semi || this.canInsertSemicolon() || this.type !== b.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(b.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
                }, $.parseAwait = function() {
                  this.awaitPos || (this.awaitPos = this.start);
                  var t = this.startNode();
                  return this.next(), t.argument = this.parseMaybeUnary(null, !0), this.finishNode(t, "AwaitExpression")
                };
                var et = F.prototype;
                et.raise = function(t, e) {
                  var i = O(this.input, t);
                  e += " (" + i.line + ":" + i.column + ")";
                  var s = new SyntaxError(e);
                  throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s
                }, et.raiseRecoverable = et.raise, et.curPosition = function() {
                  if (this.options.locations) return new L(this.curLine, this.pos - this.lineStart)
                };
                var it = F.prototype,
                  st = function(t) {
                    this.flags = t, this.var = [], this.lexical = [], this.functions = []
                  };
                it.enterScope = function(t) {
                  this.scopeStack.push(new st(t))
                }, it.exitScope = function() {
                  this.scopeStack.pop()
                }, it.treatFunctionsAsVarInScope = function(t) {
                  return t.flags & B || !this.inModule && 1 & t.flags
                }, it.declareName = function(t, e, i) {
                  var s = !1;
                  if (2 === e) {
                    var r = this.currentScope();
                    s = r.lexical.indexOf(t) > -1 || r.functions.indexOf(t) > -1 || r.var.indexOf(t) > -1, r.lexical.push(t), this.inModule && 1 & r.flags && delete this.undefinedExports[t]
                  } else if (4 === e) this.currentScope().lexical.push(t);
                  else if (3 === e) {
                    var n = this.currentScope();
                    s = this.treatFunctionsAsVar ? n.lexical.indexOf(t) > -1 : n.lexical.indexOf(t) > -1 || n.var.indexOf(t) > -1, n.functions.push(t)
                  } else
                    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                      var o = this.scopeStack[a];
                      if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
                        s = !0;
                        break
                      }
                      if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], o.flags & j) break
                    }
                  s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
                }, it.checkLocalExport = function(t) {
                  -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
                }, it.currentScope = function() {
                  return this.scopeStack[this.scopeStack.length - 1]
                }, it.currentVarScope = function() {
                  for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (e.flags & j) return e
                  }
                }, it.currentThisScope = function() {
                  for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (e.flags & j && !(16 & e.flags)) return e
                  }
                };
                var rt = function(t, e, i) {
                    this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new V(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
                  },
                  nt = F.prototype;

                function at(t, e, i, s) {
                  return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t
                }
                nt.startNode = function() {
                  return new rt(this, this.start, this.startLoc)
                }, nt.startNodeAt = function(t, e) {
                  return new rt(this, t, e)
                }, nt.finishNode = function(t, e) {
                  return at.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
                }, nt.finishNodeAt = function(t, e, i, s) {
                  return at.call(this, t, e, i, s)
                }, nt.copyNode = function(t) {
                  var e = new rt(this, t.start, this.startLoc);
                  for (var i in t) e[i] = t[i];
                  return e
                };
                var ot = function(t, e, i, s, r) {
                    this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!r
                  },
                  ht = {
                    b_stat: new ot("{", !1),
                    b_expr: new ot("{", !0),
                    b_tmpl: new ot("${", !1),
                    p_stat: new ot("(", !1),
                    p_expr: new ot("(", !0),
                    q_tmpl: new ot("`", !0, !0, (function(t) {
                      return t.tryReadTemplateToken()
                    })),
                    f_stat: new ot("function", !1),
                    f_expr: new ot("function", !0),
                    f_expr_gen: new ot("function", !0, !1, null, !0),
                    f_gen: new ot("function", !1, !1, null, !0)
                  },
                  pt = F.prototype;
                pt.initialContext = function() {
                  return [ht.b_stat]
                }, pt.braceIsBlock = function(t) {
                  var e = this.curContext();
                  return e === ht.f_expr || e === ht.f_stat || (t !== b.colon || e !== ht.b_stat && e !== ht.b_expr ? t === b._return || t === b.name && this.exprAllowed ? _.test(this.input.slice(this.lastTokEnd, this.start)) : t === b._else || t === b.semi || t === b.eof || t === b.parenR || t === b.arrow || (t === b.braceL ? e === ht.b_stat : t !== b._var && t !== b._const && t !== b.name && !this.exprAllowed) : !e.isExpr)
                }, pt.inGeneratorContext = function() {
                  for (var t = this.context.length - 1; t >= 1; t--) {
                    var e = this.context[t];
                    if ("function" === e.token) return e.generator
                  }
                  return !1
                }, pt.updateContext = function(t) {
                  var e, i = this.type;
                  i.keyword && t === b.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
                }, b.parenR.updateContext = b.braceR.updateContext = function() {
                  if (1 !== this.context.length) {
                    var t = this.context.pop();
                    t === ht.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
                  } else this.exprAllowed = !0
                }, b.braceL.updateContext = function(t) {
                  this.context.push(this.braceIsBlock(t) ? ht.b_stat : ht.b_expr), this.exprAllowed = !0
                }, b.dollarBraceL.updateContext = function() {
                  this.context.push(ht.b_tmpl), this.exprAllowed = !0
                }, b.parenL.updateContext = function(t) {
                  var e = t === b._if || t === b._for || t === b._with || t === b._while;
                  this.context.push(e ? ht.p_stat : ht.p_expr), this.exprAllowed = !0
                }, b.incDec.updateContext = function() {}, b._function.updateContext = b._class.updateContext = function(t) {
                  !t.beforeExpr || t === b._else || t === b.semi && this.curContext() !== ht.p_stat || t === b._return && _.test(this.input.slice(this.lastTokEnd, this.start)) || (t === b.colon || t === b.braceL) && this.curContext() === ht.b_stat ? this.context.push(ht.f_stat) : this.context.push(ht.f_expr), this.exprAllowed = !1
                }, b.backQuote.updateContext = function() {
                  this.curContext() === ht.q_tmpl ? this.context.pop() : this.context.push(ht.q_tmpl), this.exprAllowed = !1
                }, b.star.updateContext = function(t) {
                  if (t === b._function) {
                    var e = this.context.length - 1;
                    this.context[e] === ht.f_expr ? this.context[e] = ht.f_expr_gen : this.context[e] = ht.f_gen
                  }
                  this.exprAllowed = !0
                }, b.name.updateContext = function(t) {
                  var e = !1;
                  this.options.ecmaVersion >= 6 && t !== b.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
                };
                var ct = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                  lt = ct + " Extended_Pictographic",
                  ut = {
                    9: ct,
                    10: lt,
                    11: lt,
                    12: lt + " EBase EComp EMod EPres ExtPict"
                  },
                  dt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                  ft = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                  mt = ft + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                  gt = mt + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
                  xt = {
                    9: ft,
                    10: mt,
                    11: gt,
                    12: gt + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi"
                  },
                  yt = {};

                function vt(t) {
                  var e = yt[t] = {
                    binary: N(ut[t] + " " + dt),
                    nonBinary: {
                      General_Category: N(dt),
                      Script: N(xt[t])
                    }
                  };
                  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions
                }
                vt(9), vt(10), vt(11), vt(12);
                var bt = F.prototype,
                  _t = function(t) {
                    this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = yt[t.options.ecmaVersion >= 12 ? 12 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
                  };

                function kt(t) {
                  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                }

                function St(t) {
                  return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
                }

                function wt(t) {
                  return t >= 65 && t <= 90 || t >= 97 && t <= 122
                }

                function Et(t) {
                  return wt(t) || 95 === t
                }

                function Ct(t) {
                  return Et(t) || At(t)
                }

                function At(t) {
                  return t >= 48 && t <= 57
                }

                function It(t) {
                  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
                }

                function Tt(t) {
                  return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
                }

                function Pt(t) {
                  return t >= 48 && t <= 55
                }
                _t.prototype.reset = function(t, e, i) {
                  var s = -1 !== i.indexOf("u");
                  this.start = 0 | t, this.source = e + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9
                }, _t.prototype.raise = function(t) {
                  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
                }, _t.prototype.at = function(t, e) {
                  void 0 === e && (e = !1);
                  var i = this.source,
                    s = i.length;
                  if (t >= s) return -1;
                  var r = i.charCodeAt(t);
                  if (!e && !this.switchU || r <= 55295 || r >= 57344 || t + 1 >= s) return r;
                  var n = i.charCodeAt(t + 1);
                  return n >= 56320 && n <= 57343 ? (r << 10) + n - 56613888 : r
                }, _t.prototype.nextIndex = function(t, e) {
                  void 0 === e && (e = !1);
                  var i = this.source,
                    s = i.length;
                  if (t >= s) return s;
                  var r, n = i.charCodeAt(t);
                  return !e && !this.switchU || n <= 55295 || n >= 57344 || t + 1 >= s || (r = i.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2
                }, _t.prototype.current = function(t) {
                  return void 0 === t && (t = !1), this.at(this.pos, t)
                }, _t.prototype.lookahead = function(t) {
                  return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
                }, _t.prototype.advance = function(t) {
                  void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
                }, _t.prototype.eat = function(t, e) {
                  return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
                }, bt.validateRegExpFlags = function(t) {
                  for (var e = t.validFlags, i = t.flags, s = 0; s < i.length; s++) {
                    var r = i.charAt(s); - 1 === e.indexOf(r) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(r, s + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag")
                  }
                }, bt.validateRegExpPattern = function(t) {
                  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t))
                }, bt.regexp_pattern = function(t) {
                  t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                  for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                    var s = i[e]; - 1 === t.groupNames.indexOf(s) && t.raise("Invalid named capture referenced")
                  }
                }, bt.regexp_disjunction = function(t) {
                  for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
                  this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
                }, bt.regexp_alternative = function(t) {
                  for (; t.pos < t.source.length && this.regexp_eatTerm(t););
                }, bt.regexp_eatTerm = function(t) {
                  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !!(t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
                }, bt.regexp_eatAssertion = function(t) {
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
                }, bt.regexp_eatQuantifier = function(t, e) {
                  return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
                }, bt.regexp_eatQuantifierPrefix = function(t, e) {
                  return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
                }, bt.regexp_eatBracedQuantifier = function(t, e) {
                  var i = t.pos;
                  if (t.eat(123)) {
                    var s = 0,
                      r = -1;
                    if (this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < s && !e && t.raise("numbers out of order in {} quantifier"), !0;
                    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
                  }
                  return !1
                }, bt.regexp_eatAtom = function(t) {
                  return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
                }, bt.regexp_eatReverseSolidusAtomEscape = function(t) {
                  var e = t.pos;
                  if (t.eat(92)) {
                    if (this.regexp_eatAtomEscape(t)) return !0;
                    t.pos = e
                  }
                  return !1
                }, bt.regexp_eatUncapturingGroup = function(t) {
                  var e = t.pos;
                  if (t.eat(40)) {
                    if (t.eat(63) && t.eat(58)) {
                      if (this.regexp_disjunction(t), t.eat(41)) return !0;
                      t.raise("Unterminated group")
                    }
                    t.pos = e
                  }
                  return !1
                }, bt.regexp_eatCapturingGroup = function(t) {
                  if (t.eat(40)) {
                    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                    t.raise("Unterminated group")
                  }
                  return !1
                }, bt.regexp_eatExtendedAtom = function(t) {
                  return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
                }, bt.regexp_eatInvalidBracedQuantifier = function(t) {
                  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
                }, bt.regexp_eatSyntaxCharacter = function(t) {
                  var e = t.current();
                  return !!St(e) && (t.lastIntValue = e, t.advance(), !0)
                }, bt.regexp_eatPatternCharacters = function(t) {
                  for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !St(i);) t.advance();
                  return t.pos !== e
                }, bt.regexp_eatExtendedPatternCharacter = function(t) {
                  var e = t.current();
                  return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e || (t.advance(), 0))
                }, bt.regexp_groupSpecifier = function(t) {
                  if (t.eat(63)) {
                    if (this.regexp_eatGroupName(t)) return -1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"), void t.groupNames.push(t.lastStringValue);
                    t.raise("Invalid group")
                  }
                }, bt.regexp_eatGroupName = function(t) {
                  if (t.lastStringValue = "", t.eat(60)) {
                    if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                    t.raise("Invalid capture group name")
                  }
                  return !1
                }, bt.regexp_eatRegExpIdentifierName = function(t) {
                  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                    for (t.lastStringValue += kt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += kt(t.lastIntValue);
                    return !0
                  }
                  return !1
                }, bt.regexp_eatRegExpIdentifierStart = function(t) {
                  var e = t.pos,
                    i = this.options.ecmaVersion >= 11,
                    s = t.current(i);
                  return t.advance(i), 92 === s && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue),
                    function(t) {
                      return u(t, !0) || 36 === t || 95 === t
                    }(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1)
                }, bt.regexp_eatRegExpIdentifierPart = function(t) {
                  var e = t.pos,
                    i = this.options.ecmaVersion >= 11,
                    s = t.current(i);
                  return t.advance(i), 92 === s && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue),
                    function(t) {
                      return d(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
                    }(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1)
                }, bt.regexp_eatAtomEscape = function(t) {
                  return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
                }, bt.regexp_eatBackReference = function(t) {
                  var e = t.pos;
                  if (this.regexp_eatDecimalEscape(t)) {
                    var i = t.lastIntValue;
                    if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                    if (i <= t.numCapturingParens) return !0;
                    t.pos = e
                  }
                  return !1
                }, bt.regexp_eatKGroupName = function(t) {
                  if (t.eat(107)) {
                    if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                    t.raise("Invalid named reference")
                  }
                  return !1
                }, bt.regexp_eatCharacterEscape = function(t) {
                  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
                }, bt.regexp_eatCControlLetter = function(t) {
                  var e = t.pos;
                  if (t.eat(99)) {
                    if (this.regexp_eatControlLetter(t)) return !0;
                    t.pos = e
                  }
                  return !1
                }, bt.regexp_eatZero = function(t) {
                  return 48 === t.current() && !At(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
                }, bt.regexp_eatControlEscape = function(t) {
                  var e = t.current();
                  return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
                }, bt.regexp_eatControlLetter = function(t) {
                  var e = t.current();
                  return !!wt(e) && (t.lastIntValue = e % 32, t.advance(), !0)
                }, bt.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
                  void 0 === e && (e = !1);
                  var i = t.pos,
                    s = e || t.switchU;
                  if (t.eat(117)) {
                    if (this.regexp_eatFixedHexDigits(t, 4)) {
                      var r = t.lastIntValue;
                      if (s && r >= 55296 && r <= 56319) {
                        var n = t.pos;
                        if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                          var a = t.lastIntValue;
                          if (a >= 56320 && a <= 57343) return t.lastIntValue = 1024 * (r - 55296) + (a - 56320) + 65536, !0
                        }
                        t.pos = n, t.lastIntValue = r
                      }
                      return !0
                    }
                    if (s && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && function(t) {
                        return t >= 0 && t <= 1114111
                      }(t.lastIntValue)) return !0;
                    s && t.raise("Invalid unicode escape"), t.pos = i
                  }
                  return !1
                }, bt.regexp_eatIdentityEscape = function(t) {
                  if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
                  var e = t.current();
                  return !(99 === e || t.switchN && 107 === e || (t.lastIntValue = e, t.advance(), 0))
                }, bt.regexp_eatDecimalEscape = function(t) {
                  t.lastIntValue = 0;
                  var e = t.current();
                  if (e >= 49 && e <= 57) {
                    do {
                      t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
                    } while ((e = t.current()) >= 48 && e <= 57);
                    return !0
                  }
                  return !1
                }, bt.regexp_eatCharacterClassEscape = function(t) {
                  var e = t.current();
                  if (function(t) {
                      return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
                    }(e)) return t.lastIntValue = -1, t.advance(), !0;
                  if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                    if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return !0;
                    t.raise("Invalid property name")
                  }
                  return !1
                }, bt.regexp_eatUnicodePropertyValueExpression = function(t) {
                  var e = t.pos;
                  if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                    var i = t.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(t)) {
                      var s = t.lastStringValue;
                      return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), !0
                    }
                  }
                  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                    var r = t.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0
                  }
                  return !1
                }, bt.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
                  T(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value")
                }, bt.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
                  t.unicodeProperties.binary.test(e) || t.raise("Invalid property name")
                }, bt.regexp_eatUnicodePropertyName = function(t) {
                  var e = 0;
                  for (t.lastStringValue = ""; Et(e = t.current());) t.lastStringValue += kt(e), t.advance();
                  return "" !== t.lastStringValue
                }, bt.regexp_eatUnicodePropertyValue = function(t) {
                  var e = 0;
                  for (t.lastStringValue = ""; Ct(e = t.current());) t.lastStringValue += kt(e), t.advance();
                  return "" !== t.lastStringValue
                }, bt.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
                  return this.regexp_eatUnicodePropertyValue(t)
                }, bt.regexp_eatCharacterClass = function(t) {
                  if (t.eat(91)) {
                    if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return !0;
                    t.raise("Unterminated character class")
                  }
                  return !1
                }, bt.regexp_classRanges = function(t) {
                  for (; this.regexp_eatClassAtom(t);) {
                    var e = t.lastIntValue;
                    if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                      var i = t.lastIntValue;
                      !t.switchU || -1 !== e && -1 !== i || t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class")
                    }
                  }
                }, bt.regexp_eatClassAtom = function(t) {
                  var e = t.pos;
                  if (t.eat(92)) {
                    if (this.regexp_eatClassEscape(t)) return !0;
                    if (t.switchU) {
                      var i = t.current();
                      (99 === i || Pt(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                    }
                    t.pos = e
                  }
                  var s = t.current();
                  return 93 !== s && (t.lastIntValue = s, t.advance(), !0)
                }, bt.regexp_eatClassEscape = function(t) {
                  var e = t.pos;
                  if (t.eat(98)) return t.lastIntValue = 8, !0;
                  if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
                  if (!t.switchU && t.eat(99)) {
                    if (this.regexp_eatClassControlLetter(t)) return !0;
                    t.pos = e
                  }
                  return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
                }, bt.regexp_eatClassControlLetter = function(t) {
                  var e = t.current();
                  return !(!At(e) && 95 !== e || (t.lastIntValue = e % 32, t.advance(), 0))
                }, bt.regexp_eatHexEscapeSequence = function(t) {
                  var e = t.pos;
                  if (t.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                    t.switchU && t.raise("Invalid escape"), t.pos = e
                  }
                  return !1
                }, bt.regexp_eatDecimalDigits = function(t) {
                  var e = t.pos,
                    i = 0;
                  for (t.lastIntValue = 0; At(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
                  return t.pos !== e
                }, bt.regexp_eatHexDigits = function(t) {
                  var e = t.pos,
                    i = 0;
                  for (t.lastIntValue = 0; It(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + Tt(i), t.advance();
                  return t.pos !== e
                }, bt.regexp_eatLegacyOctalEscapeSequence = function(t) {
                  if (this.regexp_eatOctalDigit(t)) {
                    var e = t.lastIntValue;
                    if (this.regexp_eatOctalDigit(t)) {
                      var i = t.lastIntValue;
                      e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                    } else t.lastIntValue = e;
                    return !0
                  }
                  return !1
                }, bt.regexp_eatOctalDigit = function(t) {
                  var e = t.current();
                  return Pt(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
                }, bt.regexp_eatFixedHexDigits = function(t, e) {
                  var i = t.pos;
                  t.lastIntValue = 0;
                  for (var s = 0; s < e; ++s) {
                    var r = t.current();
                    if (!It(r)) return t.pos = i, !1;
                    t.lastIntValue = 16 * t.lastIntValue + Tt(r), t.advance()
                  }
                  return !0
                };
                var Nt = function(t) {
                    this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new V(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
                  },
                  Lt = F.prototype;

                function Vt(t) {
                  return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
                }

                function Ot(t) {
                  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                }
                Lt.next = function(t) {
                  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Nt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
                }, Lt.getToken = function() {
                  return this.next(), new Nt(this)
                }, "undefined" != typeof Symbol && (Lt[Symbol.iterator] = function() {
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
                }), Lt.curContext = function() {
                  return this.context[this.context.length - 1]
                }, Lt.nextToken = function() {
                  var t = this.curContext();
                  return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(b.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
                }, Lt.readToken = function(t) {
                  return u(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
                }, Lt.fullCharCodeAtPos = function() {
                  var t = this.input.charCodeAt(this.pos);
                  return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
                }, Lt.skipBlockComment = function() {
                  var t, e = this.options.onComment && this.curPosition(),
                    i = this.pos,
                    s = this.input.indexOf("*/", this.pos += 2);
                  if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
                    for (k.lastIndex = i;
                      (t = k.exec(this.input)) && t.index < this.pos;) ++this.curLine, this.lineStart = t.index + t[0].length;
                  this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, s), i, this.pos, e, this.curPosition())
                }, Lt.skipLineComment = function(t) {
                  for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !S(s);) s = this.input.charCodeAt(++this.pos);
                  this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
                }, Lt.skipSpace = function() {
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
                }, Lt.finishToken = function(t, e) {
                  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
                  var i = this.type;
                  this.type = t, this.value = e, this.updateContext(i)
                }, Lt.readToken_dot = function() {
                  var t = this.input.charCodeAt(this.pos + 1);
                  if (t >= 48 && t <= 57) return this.readNumber(!0);
                  var e = this.input.charCodeAt(this.pos + 2);
                  return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(b.ellipsis)) : (++this.pos, this.finishToken(b.dot))
                }, Lt.readToken_slash = function() {
                  var t = this.input.charCodeAt(this.pos + 1);
                  return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(b.assign, 2) : this.finishOp(b.slash, 1)
                }, Lt.readToken_mult_modulo_exp = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1),
                    i = 1,
                    s = 42 === t ? b.star : b.modulo;
                  return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, s = b.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(b.assign, i + 1) : this.finishOp(s, i)
                }, Lt.readToken_pipe_amp = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(b.assign, 3) : this.finishOp(124 === t ? b.logicalOR : b.logicalAND, 2) : 61 === e ? this.finishOp(b.assign, 2) : this.finishOp(124 === t ? b.bitwiseOR : b.bitwiseAND, 1)
                }, Lt.readToken_caret = function() {
                  return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(b.assign, 2) : this.finishOp(b.bitwiseXOR, 1)
                }, Lt.readToken_plus_min = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !_.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(b.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(b.assign, 2) : this.finishOp(b.plusMin, 1)
                }, Lt.readToken_lt_gt = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1),
                    i = 1;
                  return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(b.assign, i + 1) : this.finishOp(b.bitShift, i)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(b.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
                }, Lt.readToken_eq_excl = function(t) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  return 61 === e ? this.finishOp(b.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(b.arrow)) : this.finishOp(61 === t ? b.eq : b.prefix, 1)
                }, Lt.readToken_question = function() {
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
                }, Lt.getTokenFromCode = function(t) {
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
                  this.raise(this.pos, "Unexpected character '" + Ot(t) + "'")
                }, Lt.finishOp = function(t, e) {
                  var i = this.input.slice(this.pos, this.pos + e);
                  return this.pos += e, this.finishToken(t, i)
                }, Lt.readRegexp = function() {
                  for (var t, e, i = this.pos;;) {
                    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                    var s = this.input.charAt(this.pos);
                    if (_.test(s) && this.raise(i, "Unterminated regular expression"), t) t = !1;
                    else {
                      if ("[" === s) e = !0;
                      else if ("]" === s && e) e = !1;
                      else if ("/" === s && !e) break;
                      t = "\\" === s
                    }++this.pos
                  }
                  var r = this.input.slice(i, this.pos);
                  ++this.pos;
                  var n = this.pos,
                    a = this.readWord1();
                  this.containsEsc && this.unexpected(n);
                  var o = this.regexpState || (this.regexpState = new _t(this));
                  o.reset(i, r, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                  var h = null;
                  try {
                    h = new RegExp(r, a)
                  } catch (t) {}
                  return this.finishToken(b.regexp, {
                    pattern: r,
                    flags: a,
                    value: h
                  })
                }, Lt.readInt = function(t, e, i) {
                  for (var s = this.options.ecmaVersion >= 12 && void 0 === e, r = i && 48 === this.input.charCodeAt(this.pos), n = this.pos, a = 0, o = 0, h = 0, p = null == e ? 1 / 0 : e; h < p; ++h, ++this.pos) {
                    var c = this.input.charCodeAt(this.pos),
                      l = void 0;
                    if (s && 95 === c) r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
                    else {
                      if ((l = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= t) break;
                      o = c, a = a * t + l
                    }
                  }
                  return s && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || null != e && this.pos - n !== e ? null : a
                }, Lt.readRadixNumber = function(t) {
                  var e = this.pos;
                  this.pos += 2;
                  var i = this.readInt(t);
                  return null == i && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = Vt(this.input.slice(e, this.pos)), ++this.pos) : u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(b.num, i)
                }, Lt.readNumber = function(t) {
                  var e = this.pos;
                  t || null !== this.readInt(10, void 0, !0) || this.raise(e, "Invalid number");
                  var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
                  i && this.strict && this.raise(e, "Invalid number");
                  var s = this.input.charCodeAt(this.pos);
                  if (!i && !t && this.options.ecmaVersion >= 11 && 110 === s) {
                    var r = Vt(this.input.slice(e, this.pos));
                    return ++this.pos, u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(b.num, r)
                  }
                  i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), 46 !== s || i || (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), 69 !== s && 101 !== s || i || (43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), u(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                  var n = function(t, e) {
                    return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""))
                  }(this.input.slice(e, this.pos), i);
                  return this.finishToken(b.num, n)
                }, Lt.readCodePoint = function() {
                  var t;
                  if (123 === this.input.charCodeAt(this.pos)) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var e = ++this.pos;
                    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
                  } else t = this.readHexChar(4);
                  return t
                }, Lt.readString = function(t) {
                  for (var e = "", i = ++this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                    var s = this.input.charCodeAt(this.pos);
                    if (s === t) break;
                    92 === s ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : (S(s, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                  }
                  return e += this.input.slice(i, this.pos++), this.finishToken(b.string, e)
                };
                var Rt = {};
                Lt.tryReadTemplateToken = function() {
                  this.inTemplateElement = !0;
                  try {
                    this.readTmplToken()
                  } catch (t) {
                    if (t !== Rt) throw t;
                    this.readInvalidTemplateToken()
                  }
                  this.inTemplateElement = !1
                }, Lt.invalidStringToken = function(t, e) {
                  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Rt;
                  this.raise(t, e)
                }, Lt.readTmplToken = function() {
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
                }, Lt.readInvalidTemplateToken = function() {
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
                }, Lt.readEscapedChar = function(t) {
                  var e = this.input.charCodeAt(++this.pos);
                  switch (++this.pos, e) {
                    case 110:
                      return "\n";
                    case 114:
                      return "\r";
                    case 120:
                      return String.fromCharCode(this.readHexChar(2));
                    case 117:
                      return Ot(this.readCodePoint());
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
                        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                          r = parseInt(s, 8);
                        return r > 255 && (s = s.slice(0, -1), r = parseInt(s, 8)), this.pos += s.length - 1, e = this.input.charCodeAt(this.pos), "0" === s && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - s.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r)
                      }
                      return S(e) ? "" : String.fromCharCode(e)
                  }
                }, Lt.readHexChar = function(t) {
                  var e = this.pos,
                    i = this.readInt(16, t);
                  return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
                }, Lt.readWord1 = function() {
                  this.containsEsc = !1;
                  for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                    var r = this.fullCharCodeAtPos();
                    if (d(r, s)) this.pos += r <= 65535 ? 1 : 2;
                    else {
                      if (92 !== r) break;
                      this.containsEsc = !0, t += this.input.slice(i, this.pos);
                      var n = this.pos;
                      117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                      var a = this.readCodePoint();
                      (e ? u : d)(a, s) || this.invalidStringToken(n, "Invalid Unicode escape"), t += Ot(a), i = this.pos
                    }
                    e = !1
                  }
                  return t + this.input.slice(i, this.pos)
                }, Lt.readWord = function() {
                  var t = this.readWord1(),
                    e = b.name;
                  return this.keywords.test(t) && (e = y[t]), this.finishToken(e, t)
                };
                var Mt = "8.0.5";
                F.acorn = {
                  Parser: F,
                  version: Mt,
                  defaultOptions: R,
                  Position: L,
                  SourceLocation: V,
                  getLineInfo: O,
                  Node: rt,
                  TokenType: f,
                  tokTypes: b,
                  keywordTypes: y,
                  TokContext: ot,
                  tokContexts: ht,
                  isIdentifierChar: d,
                  isIdentifierStart: u,
                  Token: Nt,
                  isNewLine: S,
                  lineBreak: _,
                  lineBreakG: k,
                  nonASCIIwhitespace: w
                }, t.Node = rt, t.Parser = F, t.Position = L, t.SourceLocation = V, t.TokContext = ot, t.Token = Nt, t.TokenType = f, t.defaultOptions = R, t.getLineInfo = O, t.isIdentifierChar = d, t.isIdentifierStart = u, t.isNewLine = S, t.keywordTypes = y, t.lineBreak = _, t.lineBreakG = k, t.nonASCIIwhitespace = w, t.parse = function(t, e) {
                  return F.parse(t, e)
                }, t.parseExpressionAt = function(t, e, i) {
                  return F.parseExpressionAt(t, e, i)
                }, t.tokContexts = ht, t.tokTypes = b, t.tokenizer = function(t, e) {
                  return F.tokenizer(t, e)
                }, t.version = Mt, Object.defineProperty(t, "__esModule", {
                  value: !0
                })
              }(e)
            },
            272: (t, e, i) => {
              "use strict";
              i.r(e), i.d(e, {
                default: () => ue
              });
              var s = {
                  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                  5: "class enum extends super const export import",
                  6: "enum",
                  strict: "implements interface let package private protected public static yield",
                  strictBind: "eval arguments"
                },
                r = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                n = {
                  5: r,
                  "5module": r + " export import",
                  6: r + " const class extends export import super"
                },
                a = /^in(stanceof)?$/,
                o = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                h = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                p = new RegExp("[" + o + "]"),
                c = new RegExp("[" + o + h + "]");
              o = h = null;
              var l = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                u = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

              function d(t, e) {
                for (var i = 65536, s = 0; s < e.length; s += 2) {
                  if ((i += e[s]) > t) return !1;
                  if ((i += e[s + 1]) >= t) return !0
                }
              }

              function f(t, e) {
                return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && p.test(String.fromCharCode(t)) : !1 !== e && d(t, l)))
              }

              function m(t, e) {
                return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && c.test(String.fromCharCode(t)) : !1 !== e && (d(t, l) || d(t, u)))))
              }
              var g = function(t, e) {
                void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
              };

              function x(t, e) {
                return new g(t, {
                  beforeExpr: !0,
                  binop: e
                })
              }
              var y = {
                  beforeExpr: !0
                },
                v = {
                  startsExpr: !0
                },
                b = {};

              function _(t, e) {
                return void 0 === e && (e = {}), e.keyword = t, b[t] = new g(t, e)
              }
              var k = {
                  num: new g("num", v),
                  regexp: new g("regexp", v),
                  string: new g("string", v),
                  name: new g("name", v),
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
                  comma: new g(",", y),
                  semi: new g(";", y),
                  colon: new g(":", y),
                  dot: new g("."),
                  question: new g("?", y),
                  questionDot: new g("?."),
                  arrow: new g("=>", y),
                  template: new g("template"),
                  invalidTemplate: new g("invalidTemplate"),
                  ellipsis: new g("...", y),
                  backQuote: new g("`", v),
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
                  logicalOR: x("||", 1),
                  logicalAND: x("&&", 2),
                  bitwiseOR: x("|", 3),
                  bitwiseXOR: x("^", 4),
                  bitwiseAND: x("&", 5),
                  equality: x("==/!=/===/!==", 6),
                  relational: x("</>/<=/>=", 7),
                  bitShift: x("<</>>/>>>", 8),
                  plusMin: new g("+/-", {
                    beforeExpr: !0,
                    binop: 9,
                    prefix: !0,
                    startsExpr: !0
                  }),
                  modulo: x("%", 10),
                  star: x("*", 10),
                  slash: x("/", 10),
                  starstar: new g("**", {
                    beforeExpr: !0
                  }),
                  coalesce: x("??", 1),
                  _break: _("break"),
                  _case: _("case", y),
                  _catch: _("catch"),
                  _continue: _("continue"),
                  _debugger: _("debugger"),
                  _default: _("default", y),
                  _do: _("do", {
                    isLoop: !0,
                    beforeExpr: !0
                  }),
                  _else: _("else", y),
                  _finally: _("finally"),
                  _for: _("for", {
                    isLoop: !0
                  }),
                  _function: _("function", v),
                  _if: _("if"),
                  _return: _("return", y),
                  _switch: _("switch"),
                  _throw: _("throw", y),
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
                  _this: _("this", v),
                  _super: _("super", v),
                  _class: _("class", v),
                  _extends: _("extends", y),
                  _export: _("export"),
                  _import: _("import", v),
                  _null: _("null", v),
                  _true: _("true", v),
                  _false: _("false", v),
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

              function E(t, e) {
                return 10 === t || 13 === t || !e && (8232 === t || 8233 === t)
              }
              var C = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                A = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                I = Object.prototype,
                T = I.hasOwnProperty,
                P = I.toString;

              function N(t, e) {
                return T.call(t, e)
              }
              var L = Array.isArray || function(t) {
                return "[object Array]" === P.call(t)
              };

              function V(t) {
                return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$")
              }
              var O = function(t, e) {
                this.line = t, this.column = e
              };
              O.prototype.offset = function(t) {
                return new O(this.line, this.column + t)
              };
              var R = function(t, e, i) {
                this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile)
              };

              function M(t, e) {
                for (var i = 1, s = 0;;) {
                  w.lastIndex = s;
                  var r = w.exec(t);
                  if (!(r && r.index < e)) return new O(i, e - s);
                  ++i, s = r.index + r[0].length
                }
              }
              var D = {
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
                B = !1;

              function j(t, e) {
                return 2 | (t ? 4 : 0) | (e ? 8 : 0)
              }
              var U = function(t, e, i) {
                  this.options = t = function(t) {
                    var e = {};
                    for (var i in D) e[i] = t && N(t, i) ? t[i] : D[i];
                    if ("latest" === e.ecmaVersion ? e.ecmaVersion = 1e8 : null == e.ecmaVersion ? (!B && "object" == typeof console && console.warn && (B = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), L(e.onToken)) {
                      var s = e.onToken;
                      e.onToken = function(t) {
                        return s.push(t)
                      }
                    }
                    return L(e.onComment) && (e.onComment = function(t, e) {
                      return function(i, s, r, n, a, o) {
                        var h = {
                          type: i ? "Block" : "Line",
                          value: s,
                          start: r,
                          end: n
                        };
                        t.locations && (h.loc = new R(this, a, o)), t.ranges && (h.range = [r, n]), e.push(h)
                      }
                    }(e, e.onComment)), e
                  }(t), this.sourceFile = t.sourceFile, this.keywords = V(n[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                  var r = "";
                  !0 !== t.allowReserved && (r = s[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (r += " await")), this.reservedWords = V(r);
                  var a = (r ? r + " " : "") + s.strict;
                  this.reservedWordsStrict = V(a), this.reservedWordsStrictBind = V(a + " " + s.strictBind), this.input = String(e), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(S).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = k.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
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
                for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
                return i
              }, U.parse = function(t, e) {
                return new this(e, t).parse()
              }, U.parseExpressionAt = function(t, e, i) {
                var s = new this(i, t, e);
                return s.nextToken(), s.parseExpression()
              }, U.tokenizer = function(t, e) {
                return new this(e, t)
              }, Object.defineProperties(U.prototype, F);
              var H = U.prototype,
                q = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

              function G() {
                this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
              }
              H.strictDirective = function(t) {
                for (;;) {
                  A.lastIndex = t, t += A.exec(this.input)[0].length;
                  var e = q.exec(this.input.slice(t));
                  if (!e) return !1;
                  if ("use strict" === (e[1] || e[2])) {
                    A.lastIndex = t + e[0].length;
                    var i = A.exec(this.input),
                      s = i.index + i[0].length,
                      r = this.input.charAt(s);
                    return ";" === r || "}" === r || S.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || "!" === r && "=" === this.input.charAt(s + 1))
                  }
                  t += e[0].length, A.lastIndex = t, t += A.exec(this.input)[0].length, ";" === this.input[t] && t++
                }
              }, H.eat = function(t) {
                return this.type === t && (this.next(), !0)
              }, H.isContextual = function(t) {
                return this.type === k.name && this.value === t && !this.containsEsc
              }, H.eatContextual = function(t) {
                return !!this.isContextual(t) && (this.next(), !0)
              }, H.expectContextual = function(t) {
                this.eatContextual(t) || this.unexpected()
              }, H.canInsertSemicolon = function() {
                return this.type === k.eof || this.type === k.braceR || S.test(this.input.slice(this.lastTokEnd, this.start))
              }, H.insertSemicolon = function() {
                if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
              }, H.semicolon = function() {
                this.eat(k.semi) || this.insertSemicolon() || this.unexpected()
              }, H.afterTrailingComma = function(t, e) {
                if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
              }, H.expect = function(t) {
                this.eat(t) || this.unexpected()
              }, H.unexpected = function(t) {
                this.raise(null != t ? t : this.start, "Unexpected token")
              }, H.checkPatternErrors = function(t, e) {
                if (t) {
                  t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                  var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                  i > -1 && this.raiseRecoverable(i, "Parenthesized pattern")
                }
              }, H.checkExpressionErrors = function(t, e) {
                if (!t) return !1;
                var i = t.shorthandAssign,
                  s = t.doubleProto;
                if (!e) return i >= 0 || s >= 0;
                i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property")
              }, H.checkYieldAwaitInDefaultParams = function() {
                this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
              }, H.isSimpleAssignTarget = function(t) {
                return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
              };
              var W = U.prototype;
              W.parseTopLevel = function(t) {
                var e = Object.create(null);
                for (t.body || (t.body = []); this.type !== k.eof;) {
                  var i = this.parseStatement(null, !0, e);
                  t.body.push(i)
                }
                if (this.inModule)
                  for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
                    var n = r[s];
                    this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined")
                  }
                return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
              };
              var z = {
                  kind: "loop"
                },
                K = {
                  kind: "switch"
                };
              W.isLet = function(t) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                A.lastIndex = this.pos;
                var e = A.exec(this.input),
                  i = this.pos + e[0].length,
                  s = this.input.charCodeAt(i);
                if (91 === s) return !0;
                if (t) return !1;
                if (123 === s) return !0;
                if (f(s, !0)) {
                  for (var r = i + 1; m(this.input.charCodeAt(r), !0);) ++r;
                  var n = this.input.slice(i, r);
                  if (!a.test(n)) return !0
                }
                return !1
              }, W.isAsyncFunction = function() {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                A.lastIndex = this.pos;
                var t = A.exec(this.input),
                  e = this.pos + t[0].length;
                return !(S.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 !== this.input.length && m(this.input.charAt(e + 8)))
              }, W.parseStatement = function(t, e, i) {
                var s, r = this.type,
                  n = this.startNode();
                switch (this.isLet(t) && (r = k._var, s = "let"), r) {
                  case k._break:
                  case k._continue:
                    return this.parseBreakContinueStatement(n, r.keyword);
                  case k._debugger:
                    return this.parseDebuggerStatement(n);
                  case k._do:
                    return this.parseDoStatement(n);
                  case k._for:
                    return this.parseForStatement(n);
                  case k._function:
                    return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !t);
                  case k._class:
                    return t && this.unexpected(), this.parseClass(n, !0);
                  case k._if:
                    return this.parseIfStatement(n);
                  case k._return:
                    return this.parseReturnStatement(n);
                  case k._switch:
                    return this.parseSwitchStatement(n);
                  case k._throw:
                    return this.parseThrowStatement(n);
                  case k._try:
                    return this.parseTryStatement(n);
                  case k._const:
                  case k._var:
                    return s = s || this.value, t && "var" !== s && this.unexpected(), this.parseVarStatement(n, s);
                  case k._while:
                    return this.parseWhileStatement(n);
                  case k._with:
                    return this.parseWithStatement(n);
                  case k.braceL:
                    return this.parseBlock(!0, n);
                  case k.semi:
                    return this.parseEmptyStatement(n);
                  case k._export:
                  case k._import:
                    if (this.options.ecmaVersion > 10 && r === k._import) {
                      A.lastIndex = this.pos;
                      var a = A.exec(this.input),
                        o = this.pos + a[0].length,
                        h = this.input.charCodeAt(o);
                      if (40 === h || 46 === h) return this.parseExpressionStatement(n, this.parseExpression())
                    }
                    return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === k._import ? this.parseImport(n) : this.parseExport(n, i);
                  default:
                    if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(n, !0, !t);
                    var p = this.value,
                      c = this.parseExpression();
                    return r === k.name && "Identifier" === c.type && this.eat(k.colon) ? this.parseLabeledStatement(n, p, c, t) : this.parseExpressionStatement(n, c)
                }
              }, W.parseBreakContinueStatement = function(t, e) {
                var i = "break" === e;
                this.next(), this.eat(k.semi) || this.insertSemicolon() ? t.label = null : this.type !== k.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
                for (var s = 0; s < this.labels.length; ++s) {
                  var r = this.labels[s];
                  if (null == t.label || r.name === t.label.name) {
                    if (null != r.kind && (i || "loop" === r.kind)) break;
                    if (t.label && i) break
                  }
                }
                return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
              }, W.parseDebuggerStatement = function(t) {
                return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
              }, W.parseDoStatement = function(t) {
                return this.next(), this.labels.push(z), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(k._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(k.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
              }, W.parseForStatement = function(t) {
                this.next();
                var e = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
                if (this.labels.push(z), this.enterScope(0), this.expect(k.parenL), this.type === k.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                var i = this.isLet();
                if (this.type === k._var || this.type === k._const || i) {
                  var s = this.startNode(),
                    r = i ? "let" : this.value;
                  return this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), (this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === s.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, s)) : (e > -1 && this.unexpected(e), this.parseFor(t, s))
                }
                var n = new G,
                  a = this.parseExpression(!0, n);
                return this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(a, !1, n), this.checkLValPattern(a), this.parseForIn(t, a)) : (this.checkExpressionErrors(n, !0), e > -1 && this.unexpected(e), this.parseFor(t, a))
              }, W.parseFunctionStatement = function(t, e, i) {
                return this.next(), this.parseFunction(t, Q | (i ? 0 : J), !1, e)
              }, W.parseIfStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(k._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
              }, W.parseReturnStatement = function(t) {
                return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(k.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
              }, W.parseSwitchStatement = function(t) {
                var e;
                this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(k.braceL), this.labels.push(K), this.enterScope(0);
                for (var i = !1; this.type !== k.braceR;)
                  if (this.type === k._case || this.type === k._default) {
                    var s = this.type === k._case;
                    e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(k.colon)
                  } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
              }, W.parseThrowStatement = function(t) {
                return this.next(), S.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
              };
              var X = [];
              W.parseTryStatement = function(t) {
                if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === k._catch) {
                  var e = this.startNode();
                  if (this.next(), this.eat(k.parenL)) {
                    e.param = this.parseBindingAtom();
                    var i = "Identifier" === e.param.type;
                    this.enterScope(i ? 32 : 0), this.checkLValPattern(e.param, i ? 4 : 2), this.expect(k.parenR)
                  } else this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0);
                  e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
                }
                return t.finalizer = this.eat(k._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
              }, W.parseVarStatement = function(t, e) {
                return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration")
              }, W.parseWhileStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), this.labels.push(z), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
              }, W.parseWithStatement = function(t) {
                return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
              }, W.parseEmptyStatement = function(t) {
                return this.next(), this.finishNode(t, "EmptyStatement")
              }, W.parseLabeledStatement = function(t, e, i, s) {
                for (var r = 0, n = this.labels; r < n.length; r += 1) n[r].name === e && this.raise(i.start, "Label '" + e + "' is already declared");
                for (var a = this.type.isLoop ? "loop" : this.type === k._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                  var h = this.labels[o];
                  if (h.statementStart !== t.start) break;
                  h.statementStart = this.start, h.kind = a
                }
                return this.labels.push({
                  name: e,
                  kind: a,
                  statementStart: this.start
                }), t.body = this.parseStatement(s ? -1 === s.indexOf("label") ? s + "label" : s : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
              }, W.parseExpressionStatement = function(t, e) {
                return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
              }, W.parseBlock = function(t, e, i) {
                for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(k.braceL), t && this.enterScope(0); this.type !== k.braceR;) {
                  var s = this.parseStatement(null);
                  e.body.push(s)
                }
                return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
              }, W.parseFor = function(t, e) {
                return t.init = e, this.expect(k.semi), t.test = this.type === k.semi ? null : this.parseExpression(), this.expect(k.semi), t.update = this.type === k.parenR ? null : this.parseExpression(), this.expect(k.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
              }, W.parseForIn = function(t, e) {
                var i = this.type === k._in;
                return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(k.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
              }, W.parseVar = function(t, e, i) {
                for (t.declarations = [], t.kind = i;;) {
                  var s = this.startNode();
                  if (this.parseVarId(s, i), this.eat(k.eq) ? s.init = this.parseMaybeAssign(e) : "const" !== i || this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === s.id.type || e && (this.type === k._in || this.isContextual("of")) ? s.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(k.comma)) break
                }
                return t
              }, W.parseVarId = function(t, e) {
                t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
              };
              var Q = 1,
                J = 2;
              W.parseFunction = function(t, e, i, s) {
                this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === k.star && e & J && this.unexpected(), t.generator = this.eat(k.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & Q && (t.id = 4 & e && this.type !== k.name ? null : this.parseIdent(), !t.id || e & J || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                var r = this.yieldPos,
                  n = this.awaitPos,
                  a = this.awaitIdentPos;
                return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(j(t.async, t.generator)), e & Q || (t.id = this.type === k.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(t, e & Q ? "FunctionDeclaration" : "FunctionExpression")
              }, W.parseFunctionParams = function(t) {
                this.expect(k.parenL), t.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
              }, W.parseClass = function(t, e) {
                this.next();
                var i = this.strict;
                this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
                var s = this.startNode(),
                  r = !1;
                for (s.body = [], this.expect(k.braceL); this.type !== k.braceR;) {
                  var n = this.parseClassElement(null !== t.superClass);
                  n && (s.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind && (r && this.raise(n.start, "Duplicate constructor in the same class"), r = !0))
                }
                return this.strict = i, this.next(), t.body = this.finishNode(s, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
              }, W.parseClassElement = function(t) {
                var e = this;
                if (this.eat(k.semi)) return null;
                var i = this.startNode(),
                  s = function(t, s) {
                    void 0 === s && (s = !1);
                    var r = e.start,
                      n = e.startLoc;
                    return !(!e.eatContextual(t) || (e.type === k.parenL || s && e.canInsertSemicolon()) && (i.key && e.unexpected(), i.computed = !1, i.key = e.startNodeAt(r, n), i.key.name = t, e.finishNode(i.key, "Identifier"), 1))
                  };
                i.kind = "method", i.static = s("static");
                var r = this.eat(k.star),
                  n = !1;
                r || (this.options.ecmaVersion >= 8 && s("async", !0) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(k.star)) : s("get") ? i.kind = "get" : s("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
                var a = i.key,
                  o = !1;
                return i.computed || i.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? i.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(a.start, "Constructor can't have get/set modifier"), r && this.raise(a.start, "Constructor can't be a generator"), n && this.raise(a.start, "Constructor can't be an async method"), i.kind = "constructor", o = t), this.parseClassMethod(i, r, n, o), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i
              }, W.parseClassMethod = function(t, e, i, s) {
                return t.value = this.parseMethod(e, i, s), this.finishNode(t, "MethodDefinition")
              }, W.parseClassId = function(t, e) {
                this.type === k.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
              }, W.parseClassSuper = function(t) {
                t.superClass = this.eat(k._extends) ? this.parseExprSubscripts() : null
              }, W.parseExport = function(t, e) {
                if (this.next(), this.eat(k.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseIdent(!0), this.checkExport(e, t.exported.name, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== k.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
                if (this.eat(k._default)) {
                  var i;
                  if (this.checkExport(e, "default", this.lastTokStart), this.type === k._function || (i = this.isAsyncFunction())) {
                    var s = this.startNode();
                    this.next(), i && this.next(), t.declaration = this.parseFunction(s, 4 | Q, !1, i)
                  } else if (this.type === k._class) {
                    var r = this.startNode();
                    t.declaration = this.parseClass(r, "nullableID")
                  } else t.declaration = this.parseMaybeAssign(), this.semicolon();
                  return this.finishNode(t, "ExportDefaultDeclaration")
                }
                if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(null), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start), t.specifiers = [], t.source = null;
                else {
                  if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== k.string && this.unexpected(), t.source = this.parseExprAtom();
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
                t && (N(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0)
              }, W.checkPatternExport = function(t, e) {
                var i = e.type;
                if ("Identifier" === i) this.checkExport(t, e.name, e.start);
                else if ("ObjectPattern" === i)
                  for (var s = 0, r = e.properties; s < r.length; s += 1) {
                    var n = r[s];
                    this.checkPatternExport(t, n)
                  } else if ("ArrayPattern" === i)
                    for (var a = 0, o = e.elements; a < o.length; a += 1) {
                      var h = o[a];
                      h && this.checkPatternExport(t, h)
                    } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(t, e.expression)
              }, W.checkVariableExport = function(t, e) {
                if (t)
                  for (var i = 0, s = e; i < s.length; i += 1) {
                    var r = s[i];
                    this.checkPatternExport(t, r.id)
                  }
              }, W.shouldParseExportStatement = function() {
                return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
              }, W.parseExportSpecifiers = function(t) {
                var e = [],
                  i = !0;
                for (this.expect(k.braceL); !this.eat(k.braceR);) {
                  if (i) i = !1;
                  else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;
                  var s = this.startNode();
                  s.local = this.parseIdent(!0), s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local, this.checkExport(t, s.exported.name, s.exported.start), e.push(this.finishNode(s, "ExportSpecifier"))
                }
                return e
              }, W.parseImport = function(t) {
                return this.next(), this.type === k.string ? (t.specifiers = X, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === k.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
              }, W.parseImportSpecifiers = function() {
                var t = [],
                  e = !0;
                if (this.type === k.name) {
                  var i = this.startNode();
                  if (i.local = this.parseIdent(), this.checkLValSimple(i.local, 2), t.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(k.comma)) return t
                }
                if (this.type === k.star) {
                  var s = this.startNode();
                  return this.next(), this.expectContextual("as"), s.local = this.parseIdent(), this.checkLValSimple(s.local, 2), t.push(this.finishNode(s, "ImportNamespaceSpecifier")), t
                }
                for (this.expect(k.braceL); !this.eat(k.braceR);) {
                  if (e) e = !1;
                  else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;
                  var r = this.startNode();
                  r.imported = this.parseIdent(!0), this.eatContextual("as") ? r.local = this.parseIdent() : (this.checkUnreserved(r.imported), r.local = r.imported), this.checkLValSimple(r.local, 2), t.push(this.finishNode(r, "ImportSpecifier"))
                }
                return t
              }, W.adaptDirectivePrologue = function(t) {
                for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
              }, W.isDirectiveCandidate = function(t) {
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
                    for (var s = 0, r = t.properties; s < r.length; s += 1) {
                      var n = r[s];
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
                for (var i = t.length, s = 0; s < i; s++) {
                  var r = t[s];
                  r && this.toAssignable(r, e)
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
                return this.next(), 6 === this.options.ecmaVersion && this.type !== k.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
              }, Y.parseBindingAtom = function() {
                if (this.options.ecmaVersion >= 6) switch (this.type) {
                  case k.bracketL:
                    var t = this.startNode();
                    return this.next(), t.elements = this.parseBindingList(k.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                  case k.braceL:
                    return this.parseObj(!0)
                }
                return this.parseIdent()
              }, Y.parseBindingList = function(t, e, i) {
                for (var s = [], r = !0; !this.eat(t);)
                  if (r ? r = !1 : this.expect(k.comma), e && this.type === k.comma) s.push(null);
                  else {
                    if (i && this.afterTrailingComma(t)) break;
                    if (this.type === k.ellipsis) {
                      var n = this.parseRestBinding();
                      this.parseBindingListItem(n), s.push(n), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                      break
                    }
                    var a = this.parseMaybeDefault(this.start, this.startLoc);
                    this.parseBindingListItem(a), s.push(a)
                  } return s
              }, Y.parseBindingListItem = function(t) {
                return t
              }, Y.parseMaybeDefault = function(t, e, i) {
                if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(k.eq)) return i;
                var s = this.startNodeAt(t, e);
                return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern")
              }, Y.checkLValSimple = function(t, e, i) {
                void 0 === e && (e = 0);
                var s = 0 !== e;
                switch (t.type) {
                  case "Identifier":
                    this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (s ? "Binding " : "Assigning to ") + t.name + " in strict mode"), s && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (N(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
                    break;
                  case "ChainExpression":
                    this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                    break;
                  case "MemberExpression":
                    s && this.raiseRecoverable(t.start, "Binding member expression");
                    break;
                  case "ParenthesizedExpression":
                    return s && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
                  default:
                    this.raise(t.start, (s ? "Binding" : "Assigning to") + " rvalue")
                }
              }, Y.checkLValPattern = function(t, e, i) {
                switch (void 0 === e && (e = 0), t.type) {
                  case "ObjectPattern":
                    for (var s = 0, r = t.properties; s < r.length; s += 1) {
                      var n = r[s];
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
              var Z = U.prototype;
              Z.checkPropClash = function(t, e, i) {
                if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
                  var s, r = t.key;
                  switch (r.type) {
                    case "Identifier":
                      s = r.name;
                      break;
                    case "Literal":
                      s = String(r.value);
                      break;
                    default:
                      return
                  }
                  var n = t.kind;
                  if (this.options.ecmaVersion >= 6) "__proto__" === s && "init" === n && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);
                  else {
                    var a = e[s = "$" + s];
                    a ? ("init" === n ? this.strict && a.init || a.get || a.set : a.init || a[n]) && this.raiseRecoverable(r.start, "Redefinition of property") : a = e[s] = {
                      init: !1,
                      get: !1,
                      set: !1
                    }, a[n] = !0
                  }
                }
              }, Z.parseExpression = function(t, e) {
                var i = this.start,
                  s = this.startLoc,
                  r = this.parseMaybeAssign(t, e);
                if (this.type === k.comma) {
                  var n = this.startNodeAt(i, s);
                  for (n.expressions = [r]; this.eat(k.comma);) n.expressions.push(this.parseMaybeAssign(t, e));
                  return this.finishNode(n, "SequenceExpression")
                }
                return r
              }, Z.parseMaybeAssign = function(t, e, i) {
                if (this.isContextual("yield")) {
                  if (this.inGenerator) return this.parseYield(t);
                  this.exprAllowed = !1
                }
                var s = !1,
                  r = -1,
                  n = -1;
                e ? (r = e.parenthesizedAssign, n = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new G, s = !0);
                var a = this.start,
                  o = this.startLoc;
                this.type !== k.parenL && this.type !== k.name || (this.potentialArrowAt = this.start);
                var h = this.parseMaybeConditional(t, e);
                if (i && (h = i.call(this, h, a, o)), this.type.isAssign) {
                  var p = this.startNodeAt(a, o);
                  return p.operator = this.value, this.type === k.eq && (h = this.toAssignable(h, !1, e)), s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= h.start && (e.shorthandAssign = -1), this.type === k.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), p.left = h, this.next(), p.right = this.parseMaybeAssign(t), this.finishNode(p, "AssignmentExpression")
                }
                return s && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), n > -1 && (e.trailingComma = n), h
              }, Z.parseMaybeConditional = function(t, e) {
                var i = this.start,
                  s = this.startLoc,
                  r = this.parseExprOps(t, e);
                if (this.checkExpressionErrors(e)) return r;
                if (this.eat(k.question)) {
                  var n = this.startNodeAt(i, s);
                  return n.test = r, n.consequent = this.parseMaybeAssign(), this.expect(k.colon), n.alternate = this.parseMaybeAssign(t), this.finishNode(n, "ConditionalExpression")
                }
                return r
              }, Z.parseExprOps = function(t, e) {
                var i = this.start,
                  s = this.startLoc,
                  r = this.parseMaybeUnary(e, !1);
                return this.checkExpressionErrors(e) || r.start === i && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, i, s, -1, t)
              }, Z.parseExprOp = function(t, e, i, s, r) {
                var n = this.type.binop;
                if (null != n && (!r || this.type !== k._in) && n > s) {
                  var a = this.type === k.logicalOR || this.type === k.logicalAND,
                    o = this.type === k.coalesce;
                  o && (n = k.logicalAND.binop);
                  var h = this.value;
                  this.next();
                  var p = this.start,
                    c = this.startLoc,
                    l = this.parseExprOp(this.parseMaybeUnary(null, !1), p, c, n, r),
                    u = this.buildBinary(e, i, t, l, h, a || o);
                  return (a && this.type === k.coalesce || o && (this.type === k.logicalOR || this.type === k.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, i, s, r)
                }
                return t
              }, Z.buildBinary = function(t, e, i, s, r, n) {
                var a = this.startNodeAt(t, e);
                return a.left = i, a.operator = r, a.right = s, this.finishNode(a, n ? "LogicalExpression" : "BinaryExpression")
              }, Z.parseMaybeUnary = function(t, e) {
                var i, s = this.start,
                  r = this.startLoc;
                if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), e = !0;
                else if (this.type.prefix) {
                  var n = this.startNode(),
                    a = this.type === k.incDec;
                  n.operator = this.value, n.prefix = !0, this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), a ? this.checkLValSimple(n.argument) : this.strict && "delete" === n.operator && "Identifier" === n.argument.type ? this.raiseRecoverable(n.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(n, a ? "UpdateExpression" : "UnaryExpression")
                } else {
                  if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;
                  for (; this.type.postfix && !this.canInsertSemicolon();) {
                    var o = this.startNodeAt(s, r);
                    o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLValSimple(i), this.next(), i = this.finishNode(o, "UpdateExpression")
                  }
                }
                return !e && this.eat(k.starstar) ? this.buildBinary(s, r, i, this.parseMaybeUnary(null, !1), "**", !1) : i
              }, Z.parseExprSubscripts = function(t) {
                var e = this.start,
                  i = this.startLoc,
                  s = this.parseExprAtom(t);
                if ("ArrowFunctionExpression" === s.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return s;
                var r = this.parseSubscripts(s, e, i);
                return t && "MemberExpression" === r.type && (t.parenthesizedAssign >= r.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= r.start && (t.parenthesizedBind = -1)), r
              }, Z.parseSubscripts = function(t, e, i, s) {
                for (var r = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
                  var a = this.parseSubscript(t, e, i, s, r, n);
                  if (a.optional && (n = !0), a === t || "ArrowFunctionExpression" === a.type) {
                    if (n) {
                      var o = this.startNodeAt(e, i);
                      o.expression = a, a = this.finishNode(o, "ChainExpression")
                    }
                    return a
                  }
                  t = a
                }
              }, Z.parseSubscript = function(t, e, i, s, r, n) {
                var a = this.options.ecmaVersion >= 11,
                  o = a && this.eat(k.questionDot);
                s && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                var h = this.eat(k.bracketL);
                if (h || o && this.type !== k.parenL && this.type !== k.backQuote || this.eat(k.dot)) {
                  var p = this.startNodeAt(e, i);
                  p.object = t, p.property = h ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), p.computed = !!h, h && this.expect(k.bracketR), a && (p.optional = o), t = this.finishNode(p, "MemberExpression")
                } else if (!s && this.eat(k.parenL)) {
                  var c = new G,
                    l = this.yieldPos,
                    u = this.awaitPos,
                    d = this.awaitIdentPos;
                  this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                  var f = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1, c);
                  if (r && !o && !this.canInsertSemicolon() && this.eat(k.arrow)) return this.checkPatternErrors(c, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = l, this.awaitPos = u, this.awaitIdentPos = d, this.parseArrowExpression(this.startNodeAt(e, i), f, !0);
                  this.checkExpressionErrors(c, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = u || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
                  var m = this.startNodeAt(e, i);
                  m.callee = t, m.arguments = f, a && (m.optional = o), t = this.finishNode(m, "CallExpression")
                } else if (this.type === k.backQuote) {
                  (o || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                  var g = this.startNodeAt(e, i);
                  g.tag = t, g.quasi = this.parseTemplate({
                    isTagged: !0
                  }), t = this.finishNode(g, "TaggedTemplateExpression")
                }
                return t
              }, Z.parseExprAtom = function(t) {
                this.type === k.slash && this.readRegexp();
                var e, i = this.potentialArrowAt === this.start;
                switch (this.type) {
                  case k._super:
                    return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), e = this.startNode(), this.next(), this.type !== k.parenL || this.allowDirectSuper || this.raise(e.start, "super() call outside constructor of a subclass"), this.type !== k.dot && this.type !== k.bracketL && this.type !== k.parenL && this.unexpected(), this.finishNode(e, "Super");
                  case k._this:
                    return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
                  case k.name:
                    var s = this.start,
                      r = this.startLoc,
                      n = this.containsEsc,
                      a = this.parseIdent(!1);
                    if (this.options.ecmaVersion >= 8 && !n && "async" === a.name && !this.canInsertSemicolon() && this.eat(k._function)) return this.parseFunction(this.startNodeAt(s, r), 0, !1, !0);
                    if (i && !this.canInsertSemicolon()) {
                      if (this.eat(k.arrow)) return this.parseArrowExpression(this.startNodeAt(s, r), [a], !1);
                      if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === k.name && !n) return a = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(k.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, r), [a], !0)
                    }
                    return a;
                  case k.regexp:
                    var o = this.value;
                    return (e = this.parseLiteral(o.value)).regex = {
                      pattern: o.pattern,
                      flags: o.flags
                    }, e;
                  case k.num:
                  case k.string:
                    return this.parseLiteral(this.value);
                  case k._null:
                  case k._true:
                  case k._false:
                    return (e = this.startNode()).value = this.type === k._null ? null : this.type === k._true, e.raw = this.type.keyword, this.next(), this.finishNode(e, "Literal");
                  case k.parenL:
                    var h = this.start,
                      p = this.parseParenAndDistinguishExpression(i);
                    return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), p;
                  case k.bracketL:
                    return e = this.startNode(), this.next(), e.elements = this.parseExprList(k.bracketR, !0, !0, t), this.finishNode(e, "ArrayExpression");
                  case k.braceL:
                    return this.parseObj(!1, t);
                  case k._function:
                    return e = this.startNode(), this.next(), this.parseFunction(e, 0);
                  case k._class:
                    return this.parseClass(this.startNode(), !1);
                  case k._new:
                    return this.parseNew();
                  case k.backQuote:
                    return this.parseTemplate();
                  case k._import:
                    return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
                  default:
                    this.unexpected()
                }
              }, Z.parseExprImport = function() {
                var t = this.startNode();
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
                var e = this.parseIdent(!0);
                switch (this.type) {
                  case k.parenL:
                    return this.parseDynamicImport(t);
                  case k.dot:
                    return t.meta = e, this.parseImportMeta(t);
                  default:
                    this.unexpected()
                }
              }, Z.parseDynamicImport = function(t) {
                if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(k.parenR)) {
                  var e = this.start;
                  this.eat(k.comma) && this.eat(k.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
                }
                return this.finishNode(t, "ImportExpression")
              }, Z.parseImportMeta = function(t) {
                this.next();
                var e = this.containsEsc;
                return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" !== this.options.sourceType && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
              }, Z.parseLiteral = function(t) {
                var e = this.startNode();
                return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
              }, Z.parseParenExpression = function() {
                this.expect(k.parenL);
                var t = this.parseExpression();
                return this.expect(k.parenR), t
              }, Z.parseParenAndDistinguishExpression = function(t) {
                var e, i = this.start,
                  s = this.startLoc,
                  r = this.options.ecmaVersion >= 8;
                if (this.options.ecmaVersion >= 6) {
                  this.next();
                  var n, a = this.start,
                    o = this.startLoc,
                    h = [],
                    p = !0,
                    c = !1,
                    l = new G,
                    u = this.yieldPos,
                    d = this.awaitPos;
                  for (this.yieldPos = 0, this.awaitPos = 0; this.type !== k.parenR;) {
                    if (p ? p = !1 : this.expect(k.comma), r && this.afterTrailingComma(k.parenR, !0)) {
                      c = !0;
                      break
                    }
                    if (this.type === k.ellipsis) {
                      n = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                      break
                    }
                    h.push(this.parseMaybeAssign(!1, l, this.parseParenItem))
                  }
                  var f = this.start,
                    m = this.startLoc;
                  if (this.expect(k.parenR), t && !this.canInsertSemicolon() && this.eat(k.arrow)) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = u, this.awaitPos = d, this.parseParenArrowList(i, s, h);
                  h.length && !c || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = d || this.awaitPos, h.length > 1 ? ((e = this.startNodeAt(a, o)).expressions = h, this.finishNodeAt(e, "SequenceExpression", f, m)) : e = h[0]
                } else e = this.parseParenExpression();
                if (this.options.preserveParens) {
                  var g = this.startNodeAt(i, s);
                  return g.expression = e, this.finishNode(g, "ParenthesizedExpression")
                }
                return e
              }, Z.parseParenItem = function(t) {
                return t
              }, Z.parseParenArrowList = function(t, e, i) {
                return this.parseArrowExpression(this.startNodeAt(t, e), i)
              };
              var $ = [];
              Z.parseNew = function() {
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                var t = this.startNode(),
                  e = this.parseIdent(!0);
                if (this.options.ecmaVersion >= 6 && this.eat(k.dot)) {
                  t.meta = e;
                  var i = this.containsEsc;
                  return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction || this.raiseRecoverable(t.start, "'new.target' can only be used in functions"), this.finishNode(t, "MetaProperty")
                }
                var s = this.start,
                  r = this.startLoc,
                  n = this.type === k._import;
                return t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0), n && "ImportExpression" === t.callee.type && this.raise(s, "Cannot use new with import()"), this.eat(k.parenL) ? t.arguments = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = $, this.finishNode(t, "NewExpression")
              }, Z.parseTemplateElement = function(t) {
                var e = t.isTagged,
                  i = this.startNode();
                return this.type === k.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
                  raw: this.value,
                  cooked: null
                }) : i.value = {
                  raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                  cooked: this.value
                }, this.next(), i.tail = this.type === k.backQuote, this.finishNode(i, "TemplateElement")
              }, Z.parseTemplate = function(t) {
                void 0 === t && (t = {});
                var e = t.isTagged;
                void 0 === e && (e = !1);
                var i = this.startNode();
                this.next(), i.expressions = [];
                var s = this.parseTemplateElement({
                  isTagged: e
                });
                for (i.quasis = [s]; !s.tail;) this.type === k.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(k.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(k.braceR), i.quasis.push(s = this.parseTemplateElement({
                  isTagged: e
                }));
                return this.next(), this.finishNode(i, "TemplateLiteral")
              }, Z.isAsyncProp = function(t) {
                return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === k.name || this.type === k.num || this.type === k.string || this.type === k.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === k.star) && !S.test(this.input.slice(this.lastTokEnd, this.start))
              }, Z.parseObj = function(t, e) {
                var i = this.startNode(),
                  s = !0,
                  r = {};
                for (i.properties = [], this.next(); !this.eat(k.braceR);) {
                  if (s) s = !1;
                  else if (this.expect(k.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(k.braceR)) break;
                  var n = this.parseProperty(t, e);
                  t || this.checkPropClash(n, r, e), i.properties.push(n)
                }
                return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
              }, Z.parseProperty = function(t, e) {
                var i, s, r, n, a = this.startNode();
                if (this.options.ecmaVersion >= 9 && this.eat(k.ellipsis)) return t ? (a.argument = this.parseIdent(!1), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === k.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, e), this.type === k.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
                this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (t || e) && (r = this.start, n = this.startLoc), t || (i = this.eat(k.star)));
                var o = this.containsEsc;
                return this.parsePropertyName(a), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(k.star), this.parsePropertyName(a, e)) : s = !1, this.parsePropertyValue(a, t, i, s, r, n, e, o), this.finishNode(a, "Property")
              }, Z.parsePropertyValue = function(t, e, i, s, r, n, a, o) {
                if ((i || s) && this.type === k.colon && this.unexpected(), this.eat(k.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), t.kind = "init";
                else if (this.options.ecmaVersion >= 6 && this.type === k.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, s);
                else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === k.comma || this.type === k.braceR || this.type === k.eq) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = r), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, n, this.copyNode(t.key)) : this.type === k.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, n, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected();
                else {
                  (i || s) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                  var h = "get" === t.kind ? 0 : 1;
                  if (t.value.params.length !== h) {
                    var p = t.value.start;
                    "get" === t.kind ? this.raiseRecoverable(p, "getter should have no params") : this.raiseRecoverable(p, "setter should have exactly one param")
                  } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
                }
              }, Z.parsePropertyName = function(t) {
                if (this.options.ecmaVersion >= 6) {
                  if (this.eat(k.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(k.bracketR), t.key;
                  t.computed = !1
                }
                return t.key = this.type === k.num || this.type === k.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
              }, Z.initFunction = function(t) {
                t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
              }, Z.parseMethod = function(t, e, i) {
                var s = this.startNode(),
                  r = this.yieldPos,
                  n = this.awaitPos,
                  a = this.awaitIdentPos;
                return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | j(e, s.generator) | (i ? 128 : 0)), this.expect(k.parenL), s.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(s, "FunctionExpression")
              }, Z.parseArrowExpression = function(t, e, i) {
                var s = this.yieldPos,
                  r = this.awaitPos,
                  n = this.awaitIdentPos;
                return this.enterScope(16 | j(i, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1), this.yieldPos = s, this.awaitPos = r, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
              }, Z.parseFunctionBody = function(t, e, i) {
                var s = e && this.type !== k.braceL,
                  r = this.strict,
                  n = !1;
                if (s) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);
                else {
                  var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                  r && !a || (n = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                  var o = this.labels;
                  this.labels = [], n && (this.strict = !0), this.checkParams(t, !r && !n && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !r), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = o
                }
                this.exitScope()
              }, Z.isSimpleParamList = function(t) {
                for (var e = 0, i = t; e < i.length; e += 1)
                  if ("Identifier" !== i[e].type) return !1;
                return !0
              }, Z.checkParams = function(t, e) {
                for (var i = Object.create(null), s = 0, r = t.params; s < r.length; s += 1) {
                  var n = r[s];
                  this.checkLValInnerPattern(n, 1, e ? null : i)
                }
              }, Z.parseExprList = function(t, e, i, s) {
                for (var r = [], n = !0; !this.eat(t);) {
                  if (n) n = !1;
                  else if (this.expect(k.comma), e && this.afterTrailingComma(t)) break;
                  var a = void 0;
                  i && this.type === k.comma ? a = null : this.type === k.ellipsis ? (a = this.parseSpread(s), s && this.type === k.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, s), r.push(a)
                }
                return r
              }, Z.checkUnreserved = function(t) {
                var e = t.start,
                  i = t.end,
                  s = t.name;
                this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, i).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"))
              }, Z.parseIdent = function(t, e) {
                var i = this.startNode();
                return this.type === k.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(!!t), this.finishNode(i, "Identifier"), t || (this.checkUnreserved(i), "await" !== i.name || this.awaitIdentPos || (this.awaitIdentPos = i.start)), i
              }, Z.parseYield = function(t) {
                this.yieldPos || (this.yieldPos = this.start);
                var e = this.startNode();
                return this.next(), this.type === k.semi || this.canInsertSemicolon() || this.type !== k.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(k.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
              }, Z.parseAwait = function() {
                this.awaitPos || (this.awaitPos = this.start);
                var t = this.startNode();
                return this.next(), t.argument = this.parseMaybeUnary(null, !0), this.finishNode(t, "AwaitExpression")
              };
              var tt = U.prototype;
              tt.raise = function(t, e) {
                var i = M(this.input, t);
                e += " (" + i.line + ":" + i.column + ")";
                var s = new SyntaxError(e);
                throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s
              }, tt.raiseRecoverable = tt.raise, tt.curPosition = function() {
                if (this.options.locations) return new O(this.curLine, this.pos - this.lineStart)
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
                var s = !1;
                if (2 === e) {
                  var r = this.currentScope();
                  s = r.lexical.indexOf(t) > -1 || r.functions.indexOf(t) > -1 || r.var.indexOf(t) > -1, r.lexical.push(t), this.inModule && 1 & r.flags && delete this.undefinedExports[t]
                } else if (4 === e) this.currentScope().lexical.push(t);
                else if (3 === e) {
                  var n = this.currentScope();
                  s = this.treatFunctionsAsVar ? n.lexical.indexOf(t) > -1 : n.lexical.indexOf(t) > -1 || n.var.indexOf(t) > -1, n.functions.push(t)
                } else
                  for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                    var o = this.scopeStack[a];
                    if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
                      s = !0;
                      break
                    }
                    if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 3 & o.flags) break
                  }
                s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
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
              var st = function(t, e, i) {
                  this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new R(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
                },
                rt = U.prototype;

              function nt(t, e, i, s) {
                return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t
              }
              rt.startNode = function() {
                return new st(this, this.start, this.startLoc)
              }, rt.startNodeAt = function(t, e) {
                return new st(this, t, e)
              }, rt.finishNode = function(t, e) {
                return nt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
              }, rt.finishNodeAt = function(t, e, i, s) {
                return nt.call(this, t, e, i, s)
              }, rt.copyNode = function(t) {
                var e = new st(this, t.start, this.startLoc);
                for (var i in t) e[i] = t[i];
                return e
              };
              var at = function(t, e, i, s, r) {
                  this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!r
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
                return e === ot.f_expr || e === ot.f_stat || (t !== k.colon || e !== ot.b_stat && e !== ot.b_expr ? t === k._return || t === k.name && this.exprAllowed ? S.test(this.input.slice(this.lastTokEnd, this.start)) : t === k._else || t === k.semi || t === k.eof || t === k.parenR || t === k.arrow || (t === k.braceL ? e === ot.b_stat : t !== k._var && t !== k._const && t !== k.name && !this.exprAllowed) : !e.isExpr)
              }, ht.inGeneratorContext = function() {
                for (var t = this.context.length - 1; t >= 1; t--) {
                  var e = this.context[t];
                  if ("function" === e.token) return e.generator
                }
                return !1
              }, ht.updateContext = function(t) {
                var e, i = this.type;
                i.keyword && t === k.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
              }, k.parenR.updateContext = k.braceR.updateContext = function() {
                if (1 !== this.context.length) {
                  var t = this.context.pop();
                  t === ot.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
                } else this.exprAllowed = !0
              }, k.braceL.updateContext = function(t) {
                this.context.push(this.braceIsBlock(t) ? ot.b_stat : ot.b_expr), this.exprAllowed = !0
              }, k.dollarBraceL.updateContext = function() {
                this.context.push(ot.b_tmpl), this.exprAllowed = !0
              }, k.parenL.updateContext = function(t) {
                var e = t === k._if || t === k._for || t === k._with || t === k._while;
                this.context.push(e ? ot.p_stat : ot.p_expr), this.exprAllowed = !0
              }, k.incDec.updateContext = function() {}, k._function.updateContext = k._class.updateContext = function(t) {
                !t.beforeExpr || t === k._else || t === k.semi && this.curContext() !== ot.p_stat || t === k._return && S.test(this.input.slice(this.lastTokEnd, this.start)) || (t === k.colon || t === k.braceL) && this.curContext() === ot.b_stat ? this.context.push(ot.f_stat) : this.context.push(ot.f_expr), this.exprAllowed = !1
              }, k.backQuote.updateContext = function() {
                this.curContext() === ot.q_tmpl ? this.context.pop() : this.context.push(ot.q_tmpl), this.exprAllowed = !1
              }, k.star.updateContext = function(t) {
                if (t === k._function) {
                  var e = this.context.length - 1;
                  this.context[e] === ot.f_expr ? this.context[e] = ot.f_expr_gen : this.context[e] = ot.f_gen
                }
                this.exprAllowed = !0
              }, k.name.updateContext = function(t) {
                var e = !1;
                this.options.ecmaVersion >= 6 && t !== k.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
              };
              var pt = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                ct = pt + " Extended_Pictographic",
                lt = {
                  9: pt,
                  10: ct,
                  11: ct,
                  12: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict"
                },
                ut = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                dt = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                ft = dt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                mt = {
                  9: dt,
                  10: ft,
                  11: ft + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
                  12: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi"
                },
                gt = {};

              function xt(t) {
                var e = gt[t] = {
                  binary: V(lt[t] + " " + ut),
                  nonBinary: {
                    General_Category: V(ut),
                    Script: V(mt[t])
                  }
                };
                e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions
              }
              xt(9), xt(10), xt(11), xt(12);
              var yt = U.prototype,
                vt = function(t) {
                  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = gt[t.options.ecmaVersion >= 12 ? 12 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
                };

              function bt(t) {
                return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              }

              function _t(t) {
                return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
              }

              function kt(t) {
                return t >= 65 && t <= 90 || t >= 97 && t <= 122
              }

              function St(t) {
                return kt(t) || 95 === t
              }

              function wt(t) {
                return St(t) || Et(t)
              }

              function Et(t) {
                return t >= 48 && t <= 57
              }

              function Ct(t) {
                return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
              }

              function At(t) {
                return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
              }

              function It(t) {
                return t >= 48 && t <= 55
              }
              vt.prototype.reset = function(t, e, i) {
                var s = -1 !== i.indexOf("u");
                this.start = 0 | t, this.source = e + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9
              }, vt.prototype.raise = function(t) {
                this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
              }, vt.prototype.at = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                  s = i.length;
                if (t >= s) return -1;
                var r = i.charCodeAt(t);
                if (!e && !this.switchU || r <= 55295 || r >= 57344 || t + 1 >= s) return r;
                var n = i.charCodeAt(t + 1);
                return n >= 56320 && n <= 57343 ? (r << 10) + n - 56613888 : r
              }, vt.prototype.nextIndex = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                  s = i.length;
                if (t >= s) return s;
                var r, n = i.charCodeAt(t);
                return !e && !this.switchU || n <= 55295 || n >= 57344 || t + 1 >= s || (r = i.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2
              }, vt.prototype.current = function(t) {
                return void 0 === t && (t = !1), this.at(this.pos, t)
              }, vt.prototype.lookahead = function(t) {
                return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
              }, vt.prototype.advance = function(t) {
                void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
              }, vt.prototype.eat = function(t, e) {
                return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
              }, yt.validateRegExpFlags = function(t) {
                for (var e = t.validFlags, i = t.flags, s = 0; s < i.length; s++) {
                  var r = i.charAt(s); - 1 === e.indexOf(r) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(r, s + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag")
                }
              }, yt.validateRegExpPattern = function(t) {
                this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t))
              }, yt.regexp_pattern = function(t) {
                t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                  var s = i[e]; - 1 === t.groupNames.indexOf(s) && t.raise("Invalid named capture referenced")
                }
              }, yt.regexp_disjunction = function(t) {
                for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
                this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
              }, yt.regexp_alternative = function(t) {
                for (; t.pos < t.source.length && this.regexp_eatTerm(t););
              }, yt.regexp_eatTerm = function(t) {
                return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !!(t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
              }, yt.regexp_eatAssertion = function(t) {
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
              }, yt.regexp_eatQuantifier = function(t, e) {
                return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
              }, yt.regexp_eatQuantifierPrefix = function(t, e) {
                return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
              }, yt.regexp_eatBracedQuantifier = function(t, e) {
                var i = t.pos;
                if (t.eat(123)) {
                  var s = 0,
                    r = -1;
                  if (this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < s && !e && t.raise("numbers out of order in {} quantifier"), !0;
                  t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
                }
                return !1
              }, yt.regexp_eatAtom = function(t) {
                return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
              }, yt.regexp_eatReverseSolidusAtomEscape = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                  if (this.regexp_eatAtomEscape(t)) return !0;
                  t.pos = e
                }
                return !1
              }, yt.regexp_eatUncapturingGroup = function(t) {
                var e = t.pos;
                if (t.eat(40)) {
                  if (t.eat(63) && t.eat(58)) {
                    if (this.regexp_disjunction(t), t.eat(41)) return !0;
                    t.raise("Unterminated group")
                  }
                  t.pos = e
                }
                return !1
              }, yt.regexp_eatCapturingGroup = function(t) {
                if (t.eat(40)) {
                  if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                  t.raise("Unterminated group")
                }
                return !1
              }, yt.regexp_eatExtendedAtom = function(t) {
                return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
              }, yt.regexp_eatInvalidBracedQuantifier = function(t) {
                return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
              }, yt.regexp_eatSyntaxCharacter = function(t) {
                var e = t.current();
                return !!_t(e) && (t.lastIntValue = e, t.advance(), !0)
              }, yt.regexp_eatPatternCharacters = function(t) {
                for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !_t(i);) t.advance();
                return t.pos !== e
              }, yt.regexp_eatExtendedPatternCharacter = function(t) {
                var e = t.current();
                return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e || (t.advance(), 0))
              }, yt.regexp_groupSpecifier = function(t) {
                if (t.eat(63)) {
                  if (this.regexp_eatGroupName(t)) return -1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"), void t.groupNames.push(t.lastStringValue);
                  t.raise("Invalid group")
                }
              }, yt.regexp_eatGroupName = function(t) {
                if (t.lastStringValue = "", t.eat(60)) {
                  if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                  t.raise("Invalid capture group name")
                }
                return !1
              }, yt.regexp_eatRegExpIdentifierName = function(t) {
                if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                  for (t.lastStringValue += bt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += bt(t.lastIntValue);
                  return !0
                }
                return !1
              }, yt.regexp_eatRegExpIdentifierStart = function(t) {
                var e = t.pos,
                  i = this.options.ecmaVersion >= 11,
                  s = t.current(i);
                return t.advance(i), 92 === s && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue),
                  function(t) {
                    return f(t, !0) || 36 === t || 95 === t
                  }(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1)
              }, yt.regexp_eatRegExpIdentifierPart = function(t) {
                var e = t.pos,
                  i = this.options.ecmaVersion >= 11,
                  s = t.current(i);
                return t.advance(i), 92 === s && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue),
                  function(t) {
                    return m(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
                  }(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1)
              }, yt.regexp_eatAtomEscape = function(t) {
                return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
              }, yt.regexp_eatBackReference = function(t) {
                var e = t.pos;
                if (this.regexp_eatDecimalEscape(t)) {
                  var i = t.lastIntValue;
                  if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                  if (i <= t.numCapturingParens) return !0;
                  t.pos = e
                }
                return !1
              }, yt.regexp_eatKGroupName = function(t) {
                if (t.eat(107)) {
                  if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                  t.raise("Invalid named reference")
                }
                return !1
              }, yt.regexp_eatCharacterEscape = function(t) {
                return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
              }, yt.regexp_eatCControlLetter = function(t) {
                var e = t.pos;
                if (t.eat(99)) {
                  if (this.regexp_eatControlLetter(t)) return !0;
                  t.pos = e
                }
                return !1
              }, yt.regexp_eatZero = function(t) {
                return 48 === t.current() && !Et(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
              }, yt.regexp_eatControlEscape = function(t) {
                var e = t.current();
                return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
              }, yt.regexp_eatControlLetter = function(t) {
                var e = t.current();
                return !!kt(e) && (t.lastIntValue = e % 32, t.advance(), !0)
              }, yt.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
                void 0 === e && (e = !1);
                var i, s = t.pos,
                  r = e || t.switchU;
                if (t.eat(117)) {
                  if (this.regexp_eatFixedHexDigits(t, 4)) {
                    var n = t.lastIntValue;
                    if (r && n >= 55296 && n <= 56319) {
                      var a = t.pos;
                      if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                        var o = t.lastIntValue;
                        if (o >= 56320 && o <= 57343) return t.lastIntValue = 1024 * (n - 55296) + (o - 56320) + 65536, !0
                      }
                      t.pos = a, t.lastIntValue = n
                    }
                    return !0
                  }
                  if (r && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && (i = t.lastIntValue) >= 0 && i <= 1114111) return !0;
                  r && t.raise("Invalid unicode escape"), t.pos = s
                }
                return !1
              }, yt.regexp_eatIdentityEscape = function(t) {
                if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
                var e = t.current();
                return !(99 === e || t.switchN && 107 === e || (t.lastIntValue = e, t.advance(), 0))
              }, yt.regexp_eatDecimalEscape = function(t) {
                t.lastIntValue = 0;
                var e = t.current();
                if (e >= 49 && e <= 57) {
                  do {
                    t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
                  } while ((e = t.current()) >= 48 && e <= 57);
                  return !0
                }
                return !1
              }, yt.regexp_eatCharacterClassEscape = function(t) {
                var e = t.current();
                if (function(t) {
                    return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
                  }(e)) return t.lastIntValue = -1, t.advance(), !0;
                if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                  if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return !0;
                  t.raise("Invalid property name")
                }
                return !1
              }, yt.regexp_eatUnicodePropertyValueExpression = function(t) {
                var e = t.pos;
                if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                  var i = t.lastStringValue;
                  if (this.regexp_eatUnicodePropertyValue(t)) {
                    var s = t.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), !0
                  }
                }
                if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                  var r = t.lastStringValue;
                  return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0
                }
                return !1
              }, yt.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
                N(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value")
              }, yt.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
                t.unicodeProperties.binary.test(e) || t.raise("Invalid property name")
              }, yt.regexp_eatUnicodePropertyName = function(t) {
                var e = 0;
                for (t.lastStringValue = ""; St(e = t.current());) t.lastStringValue += bt(e), t.advance();
                return "" !== t.lastStringValue
              }, yt.regexp_eatUnicodePropertyValue = function(t) {
                var e = 0;
                for (t.lastStringValue = ""; wt(e = t.current());) t.lastStringValue += bt(e), t.advance();
                return "" !== t.lastStringValue
              }, yt.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
                return this.regexp_eatUnicodePropertyValue(t)
              }, yt.regexp_eatCharacterClass = function(t) {
                if (t.eat(91)) {
                  if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return !0;
                  t.raise("Unterminated character class")
                }
                return !1
              }, yt.regexp_classRanges = function(t) {
                for (; this.regexp_eatClassAtom(t);) {
                  var e = t.lastIntValue;
                  if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                    var i = t.lastIntValue;
                    !t.switchU || -1 !== e && -1 !== i || t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class")
                  }
                }
              }, yt.regexp_eatClassAtom = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                  if (this.regexp_eatClassEscape(t)) return !0;
                  if (t.switchU) {
                    var i = t.current();
                    (99 === i || It(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                  }
                  t.pos = e
                }
                var s = t.current();
                return 93 !== s && (t.lastIntValue = s, t.advance(), !0)
              }, yt.regexp_eatClassEscape = function(t) {
                var e = t.pos;
                if (t.eat(98)) return t.lastIntValue = 8, !0;
                if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
                if (!t.switchU && t.eat(99)) {
                  if (this.regexp_eatClassControlLetter(t)) return !0;
                  t.pos = e
                }
                return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
              }, yt.regexp_eatClassControlLetter = function(t) {
                var e = t.current();
                return !(!Et(e) && 95 !== e || (t.lastIntValue = e % 32, t.advance(), 0))
              }, yt.regexp_eatHexEscapeSequence = function(t) {
                var e = t.pos;
                if (t.eat(120)) {
                  if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                  t.switchU && t.raise("Invalid escape"), t.pos = e
                }
                return !1
              }, yt.regexp_eatDecimalDigits = function(t) {
                var e = t.pos,
                  i = 0;
                for (t.lastIntValue = 0; Et(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
                return t.pos !== e
              }, yt.regexp_eatHexDigits = function(t) {
                var e = t.pos,
                  i = 0;
                for (t.lastIntValue = 0; Ct(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + At(i), t.advance();
                return t.pos !== e
              }, yt.regexp_eatLegacyOctalEscapeSequence = function(t) {
                if (this.regexp_eatOctalDigit(t)) {
                  var e = t.lastIntValue;
                  if (this.regexp_eatOctalDigit(t)) {
                    var i = t.lastIntValue;
                    e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                  } else t.lastIntValue = e;
                  return !0
                }
                return !1
              }, yt.regexp_eatOctalDigit = function(t) {
                var e = t.current();
                return It(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
              }, yt.regexp_eatFixedHexDigits = function(t, e) {
                var i = t.pos;
                t.lastIntValue = 0;
                for (var s = 0; s < e; ++s) {
                  var r = t.current();
                  if (!Ct(r)) return t.pos = i, !1;
                  t.lastIntValue = 16 * t.lastIntValue + At(r), t.advance()
                }
                return !0
              };
              var Tt = function(t) {
                  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new R(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
                },
                Pt = U.prototype;

              function Nt(t) {
                return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
              }

              function Lt(t) {
                return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              }
              Pt.next = function(t) {
                !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Tt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
              }, Pt.getToken = function() {
                return this.next(), new Tt(this)
              }, "undefined" != typeof Symbol && (Pt[Symbol.iterator] = function() {
                var t = this;
                return {
                  next: function() {
                    var e = t.getToken();
                    return {
                      done: e.type === k.eof,
                      value: e
                    }
                  }
                }
              }), Pt.curContext = function() {
                return this.context[this.context.length - 1]
              }, Pt.nextToken = function() {
                var t = this.curContext();
                return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(k.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
              }, Pt.readToken = function(t) {
                return f(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
              }, Pt.fullCharCodeAtPos = function() {
                var t = this.input.charCodeAt(this.pos);
                return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
              }, Pt.skipBlockComment = function() {
                var t, e = this.options.onComment && this.curPosition(),
                  i = this.pos,
                  s = this.input.indexOf("*/", this.pos += 2);
                if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
                  for (w.lastIndex = i;
                    (t = w.exec(this.input)) && t.index < this.pos;) ++this.curLine, this.lineStart = t.index + t[0].length;
                this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, s), i, this.pos, e, this.curPosition())
              }, Pt.skipLineComment = function(t) {
                for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !E(s);) s = this.input.charCodeAt(++this.pos);
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
                return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(k.ellipsis)) : (++this.pos, this.finishToken(k.dot))
              }, Pt.readToken_slash = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(k.assign, 2) : this.finishOp(k.slash, 1)
              }, Pt.readToken_mult_modulo_exp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                  i = 1,
                  s = 42 === t ? k.star : k.modulo;
                return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, s = k.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(k.assign, i + 1) : this.finishOp(s, i)
              }, Pt.readToken_pipe_amp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(k.assign, 3) : this.finishOp(124 === t ? k.logicalOR : k.logicalAND, 2) : 61 === e ? this.finishOp(k.assign, 2) : this.finishOp(124 === t ? k.bitwiseOR : k.bitwiseAND, 1)
              }, Pt.readToken_caret = function() {
                return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(k.assign, 2) : this.finishOp(k.bitwiseXOR, 1)
              }, Pt.readToken_plus_min = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !S.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(k.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(k.assign, 2) : this.finishOp(k.plusMin, 1)
              }, Pt.readToken_lt_gt = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                  i = 1;
                return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(k.assign, i + 1) : this.finishOp(k.bitShift, i)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(k.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
              }, Pt.readToken_eq_excl = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return 61 === e ? this.finishOp(k.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(k.arrow)) : this.finishOp(61 === t ? k.eq : k.prefix, 1)
              }, Pt.readToken_question = function() {
                var t = this.options.ecmaVersion;
                if (t >= 11) {
                  var e = this.input.charCodeAt(this.pos + 1);
                  if (46 === e) {
                    var i = this.input.charCodeAt(this.pos + 2);
                    if (i < 48 || i > 57) return this.finishOp(k.questionDot, 2)
                  }
                  if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(k.assign, 3) : this.finishOp(k.coalesce, 2)
                }
                return this.finishOp(k.question, 1)
              }, Pt.getTokenFromCode = function(t) {
                switch (t) {
                  case 46:
                    return this.readToken_dot();
                  case 40:
                    return ++this.pos, this.finishToken(k.parenL);
                  case 41:
                    return ++this.pos, this.finishToken(k.parenR);
                  case 59:
                    return ++this.pos, this.finishToken(k.semi);
                  case 44:
                    return ++this.pos, this.finishToken(k.comma);
                  case 91:
                    return ++this.pos, this.finishToken(k.bracketL);
                  case 93:
                    return ++this.pos, this.finishToken(k.bracketR);
                  case 123:
                    return ++this.pos, this.finishToken(k.braceL);
                  case 125:
                    return ++this.pos, this.finishToken(k.braceR);
                  case 58:
                    return ++this.pos, this.finishToken(k.colon);
                  case 96:
                    if (this.options.ecmaVersion < 6) break;
                    return ++this.pos, this.finishToken(k.backQuote);
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
                    return this.finishOp(k.prefix, 1)
                }
                this.raise(this.pos, "Unexpected character '" + Lt(t) + "'")
              }, Pt.finishOp = function(t, e) {
                var i = this.input.slice(this.pos, this.pos + e);
                return this.pos += e, this.finishToken(t, i)
              }, Pt.readRegexp = function() {
                for (var t, e, i = this.pos;;) {
                  this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                  var s = this.input.charAt(this.pos);
                  if (S.test(s) && this.raise(i, "Unterminated regular expression"), t) t = !1;
                  else {
                    if ("[" === s) e = !0;
                    else if ("]" === s && e) e = !1;
                    else if ("/" === s && !e) break;
                    t = "\\" === s
                  }++this.pos
                }
                var r = this.input.slice(i, this.pos);
                ++this.pos;
                var n = this.pos,
                  a = this.readWord1();
                this.containsEsc && this.unexpected(n);
                var o = this.regexpState || (this.regexpState = new vt(this));
                o.reset(i, r, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                var h = null;
                try {
                  h = new RegExp(r, a)
                } catch (t) {}
                return this.finishToken(k.regexp, {
                  pattern: r,
                  flags: a,
                  value: h
                })
              }, Pt.readInt = function(t, e, i) {
                for (var s = this.options.ecmaVersion >= 12 && void 0 === e, r = i && 48 === this.input.charCodeAt(this.pos), n = this.pos, a = 0, o = 0, h = 0, p = null == e ? 1 / 0 : e; h < p; ++h, ++this.pos) {
                  var c = this.input.charCodeAt(this.pos),
                    l = void 0;
                  if (s && 95 === c) r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
                  else {
                    if ((l = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= t) break;
                    o = c, a = a * t + l
                  }
                }
                return s && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || null != e && this.pos - n !== e ? null : a
              }, Pt.readRadixNumber = function(t) {
                var e = this.pos;
                this.pos += 2;
                var i = this.readInt(t);
                return null == i && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = Nt(this.input.slice(e, this.pos)), ++this.pos) : f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, i)
              }, Pt.readNumber = function(t) {
                var e = this.pos;
                t || null !== this.readInt(10, void 0, !0) || this.raise(e, "Invalid number");
                var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
                i && this.strict && this.raise(e, "Invalid number");
                var s = this.input.charCodeAt(this.pos);
                if (!i && !t && this.options.ecmaVersion >= 11 && 110 === s) {
                  var r = Nt(this.input.slice(e, this.pos));
                  return ++this.pos, f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, r)
                }
                i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), 46 !== s || i || (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), 69 !== s && 101 !== s || i || (43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                var n, a = (n = this.input.slice(e, this.pos), i ? parseInt(n, 8) : parseFloat(n.replace(/_/g, "")));
                return this.finishToken(k.num, a)
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
                  var s = this.input.charCodeAt(this.pos);
                  if (s === t) break;
                  92 === s ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : (E(s, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                }
                return e += this.input.slice(i, this.pos++), this.finishToken(k.string, e)
              };
              var Vt = {};
              Pt.tryReadTemplateToken = function() {
                this.inTemplateElement = !0;
                try {
                  this.readTmplToken()
                } catch (t) {
                  if (t !== Vt) throw t;
                  this.readInvalidTemplateToken()
                }
                this.inTemplateElement = !1
              }, Pt.invalidStringToken = function(t, e) {
                if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Vt;
                this.raise(t, e)
              }, Pt.readTmplToken = function() {
                for (var t = "", e = this.pos;;) {
                  this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                  var i = this.input.charCodeAt(this.pos);
                  if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== k.template && this.type !== k.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(k.template, t)) : 36 === i ? (this.pos += 2, this.finishToken(k.dollarBraceL)) : (++this.pos, this.finishToken(k.backQuote));
                  if (92 === i) t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
                  else if (E(i)) {
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
                    return this.finishToken(k.invalidTemplate, this.input.slice(this.start, this.pos))
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
                      var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                        r = parseInt(s, 8);
                      return r > 255 && (s = s.slice(0, -1), r = parseInt(s, 8)), this.pos += s.length - 1, e = this.input.charCodeAt(this.pos), "0" === s && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - s.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r)
                    }
                    return E(e) ? "" : String.fromCharCode(e)
                }
              }, Pt.readHexChar = function(t) {
                var e = this.pos,
                  i = this.readInt(16, t);
                return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
              }, Pt.readWord1 = function() {
                this.containsEsc = !1;
                for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                  var r = this.fullCharCodeAtPos();
                  if (m(r, s)) this.pos += r <= 65535 ? 1 : 2;
                  else {
                    if (92 !== r) break;
                    this.containsEsc = !0, t += this.input.slice(i, this.pos);
                    var n = this.pos;
                    117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                    var a = this.readCodePoint();
                    (e ? f : m)(a, s) || this.invalidStringToken(n, "Invalid Unicode escape"), t += Lt(a), i = this.pos
                  }
                  e = !1
                }
                return t + this.input.slice(i, this.pos)
              }, Pt.readWord = function() {
                var t = this.readWord1(),
                  e = k.name;
                return this.keywords.test(t) && (e = b[t]), this.finishToken(e, t)
              }, U.acorn = {
                Parser: U,
                version: "8.0.5",
                defaultOptions: D,
                Position: O,
                SourceLocation: R,
                getLineInfo: M,
                Node: st,
                TokenType: g,
                tokTypes: k,
                keywordTypes: b,
                TokContext: at,
                tokContexts: ot,
                isIdentifierChar: m,
                isIdentifierStart: f,
                Token: Tt,
                isNewLine: E,
                lineBreak: S,
                lineBreakG: w,
                nonASCIIwhitespace: C
              };
              var Ot = i(977),
                Rt = i.n(Ot),
                Mt = i(297),
                Dt = i.n(Mt);
              const Bt = {
                class: "className",
                for: "htmlFor",
                maxlength: "maxLength",
                colspan: "colSpan",
                rowspan: "rowSpan"
              };
              var jt = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
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

              function Ht(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(t);
                  e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), i.push.apply(i, s)
                }
                return i
              }

              function qt(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? Ht(Object(i), !0).forEach((function(e) {
                    Gt(t, e, i[e])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ht(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                  }))
                }
                return t
              }

              function Gt(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = i, t
              }

              function Wt(t) {
                return (Wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
                } : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
              }

              function zt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
                return s
              }
              var Kt = function t(e, i) {
                  var s = function(t) {
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
                    r = s[0],
                    n = s.slice(1);
                  if (null != e && null != r) return 0 === n.length ? e[r] : t(e[r], n)
                },
                Xt = function(t, e) {
                  return Kt(t, function(t) {
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

              function Jt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(t);
                  e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), i.push.apply(i, s)
                }
                return i
              }

              function Yt(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? Jt(Object(i), !0).forEach((function(e) {
                    ne(t, e, i[e])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Jt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                  }))
                }
                return t
              }

              function Zt(t) {
                return function(t) {
                  if (Array.isArray(t)) return te(t)
                }(t) || function(t) {
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || $t(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
              }

              function $t(t, e) {
                if (t) {
                  if ("string" == typeof t) return te(t, e);
                  var i = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? te(t, e) : void 0
                }
              }

              function te(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
                return s
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
                  var i, s = re(t);
                  if (e) {
                    var r = re(this).constructor;
                    i = Reflect.construct(s, arguments, r)
                  } else i = s.apply(this, arguments);
                  return function(t, e) {
                    return !e || "object" !== Qt(e) && "function" != typeof e ? se(t) : e
                  }(this, i)
                }
              }

              function se(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
              }

              function re(t) {
                return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
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
                pe = new WeakMap,
                ce = new WeakMap,
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
                    for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                    return ne(se(t = e.call.apply(e, [this].concat(r))), "ParsedChildren", null), oe.set(se(t), {
                      writable: !0,
                      value: function(e) {
                        var i = U.extend(Rt()({
                            autoCloseVoidElements: t.props.autoCloseVoidElements
                          })),
                          s = "<root>".concat(e, "</root>"),
                          r = [];
                        try {
                          r = (r = i.parse(s, {
                            ecmaVersion: "latest"
                          })).body[0].expression.children || []
                        } catch (e) {
                          return t.props.showWarnings && console.warn(e), t.props.onError && t.props.onError(e), t.props.renderError ? t.props.renderError({
                            error: String(e)
                          }) : null
                        }
                        return r.map((function(e) {
                          return ae(se(t), he).call(se(t), e)
                        })).filter(Boolean)
                      }
                    }), he.set(se(t), {
                      writable: !0,
                      value: function(e, i) {
                        switch (e.type) {
                          case "JSXAttribute":
                            return null === e.value || ae(se(t), he).call(se(t), e.value, i);
                          case "JSXElement":
                          case "JSXFragment":
                            return ae(se(t), le).call(se(t), e, i);
                          case "JSXExpressionContainer":
                            return ae(se(t), he).call(se(t), e.expression, i);
                          case "JSXText":
                            var s = t.props.disableKeyGeneration ? void 0 : Ft();
                            return t.props.disableFragments ? e.value : Dt().createElement(Mt.Fragment, {
                              key: s
                            }, e.value);
                          case "ArrayExpression":
                            return e.elements.map((function(e) {
                              return ae(se(t), he).call(se(t), e, i)
                            }));
                          case "BinaryExpression":
                            switch (e.operator) {
                              case "-":
                                return ae(se(t), he).call(se(t), e.left) - ae(se(t), he).call(se(t), e.right);
                              case "!=":
                                return ae(se(t), he).call(se(t), e.left) != ae(se(t), he).call(se(t), e.right);
                              case "!==":
                                return ae(se(t), he).call(se(t), e.left) !== ae(se(t), he).call(se(t), e.right);
                              case "*":
                                return ae(se(t), he).call(se(t), e.left) * ae(se(t), he).call(se(t), e.right);
                              case "**":
                                return Math.pow(ae(se(t), he).call(se(t), e.left), ae(se(t), he).call(se(t), e.right));
                              case "/":
                                return ae(se(t), he).call(se(t), e.left) / ae(se(t), he).call(se(t), e.right);
                              case "%":
                                return ae(se(t), he).call(se(t), e.left) % ae(se(t), he).call(se(t), e.right);
                              case "+":
                                return ae(se(t), he).call(se(t), e.left) + ae(se(t), he).call(se(t), e.right);
                              case "<":
                                return ae(se(t), he).call(se(t), e.left) < ae(se(t), he).call(se(t), e.right);
                              case "<=":
                                return ae(se(t), he).call(se(t), e.left) <= ae(se(t), he).call(se(t), e.right);
                              case "==":
                                return ae(se(t), he).call(se(t), e.left) == ae(se(t), he).call(se(t), e.right);
                              case "===":
                                return ae(se(t), he).call(se(t), e.left) === ae(se(t), he).call(se(t), e.right);
                              case ">":
                                return ae(se(t), he).call(se(t), e.left) > ae(se(t), he).call(se(t), e.right);
                              case ">=":
                                return ae(se(t), he).call(se(t), e.left) >= ae(se(t), he).call(se(t), e.right)
                            }
                            return;
                          case "CallExpression":
                            var r = ae(se(t), he).call(se(t), e.callee);
                            return void 0 === r ? void t.props.onError(new Error("The expression '".concat(e.callee, "' could not be resolved, resulting in an undefined return value."))) : r.apply(void 0, Zt(e.arguments.map((function(i) {
                              return ae(se(t), he).call(se(t), i, e.callee)
                            }))));
                          case "ConditionalExpression":
                            return ae(se(t), he).call(se(t), e.test) ? ae(se(t), he).call(se(t), e.consequent) : ae(se(t), he).call(se(t), e.alternate);
                          case "ExpressionStatement":
                            return ae(se(t), he).call(se(t), e.expression);
                          case "Identifier":
                            return i && e.name in i ? i[e.name] : (t.props.bindings || {})[e.name];
                          case "Literal":
                            return e.value;
                          case "LogicalExpression":
                            var n = ae(se(t), he).call(se(t), e.left);
                            return "||" === e.operator && n ? n : !!("&&" === e.operator && n || "||" === e.operator && !n) && ae(se(t), he).call(se(t), e.right);
                          case "MemberExpression":
                            return ae(se(t), pe).call(se(t), e, i);
                          case "ObjectExpression":
                            var a = {};
                            return e.properties.forEach((function(e) {
                              a[e.key.name || e.key.value] = ae(se(t), he).call(se(t), e.value)
                            })), a;
                          case "TemplateElement":
                            return e.value.cooked;
                          case "TemplateLiteral":
                            return [].concat(Zt(e.expressions), Zt(e.quasis)).sort((function(t, e) {
                              return t.start < e.start ? -1 : 1
                            })).map((function(e) {
                              return ae(se(t), he).call(se(t), e)
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
                                for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                                var n = {};
                                return e.params.forEach((function(t, e) {
                                  n[t.name] = s[e]
                                })), ae(se(t), he).call(se(t), e.body, n)
                              }
                        }
                      }
                    }), pe.set(se(t), {
                      writable: !0,
                      value: function(e, i) {
                        var s, r, n, a, o = e.object,
                          h = [null !== (s = null === (r = e.property) || void 0 === r ? void 0 : r.name) && void 0 !== s ? s : JSON.parse(null !== (n = null === (a = e.property) || void 0 === a ? void 0 : a.raw) && void 0 !== n ? n : '""')];
                        if ("Literal" !== e.object.type)
                          for (; o && ["MemberExpression", "Literal"].includes(null === (p = o) || void 0 === p ? void 0 : p.type);) {
                            var p, c, l, u = o.property;
                            o.computed ? h.unshift(ae(se(t), he).call(se(t), u, i)) : h.unshift(null !== (c = null == u ? void 0 : u.name) && void 0 !== c ? c : JSON.parse(null !== (l = null == u ? void 0 : u.raw) && void 0 !== l ? l : '""')), o = o.object
                          }
                        var d = ae(se(t), he).call(se(t), o, i);
                        try {
                          var f = d,
                            m = h.reduce((function(t, e) {
                              return f = t, t[e]
                            }), d);
                          return "function" == typeof m ? m.bind(f) : m
                        } catch (e) {
                          var g, x = (null === (g = o) || void 0 === g ? void 0 : g.name) || "unknown";
                          t.props.onError(new Error("Unable to parse ".concat(x, '["').concat(h.join('"]["'), '"]}')))
                        }
                      }
                    }), ce.set(se(t), {
                      writable: !0,
                      value: function(e) {
                        return "JSXIdentifier" === e.type ? e.name : "".concat(ae(se(t), ce).call(se(t), e.object), ".").concat(ae(se(t), ce).call(se(t), e.property))
                      }
                    }), le.set(se(t), {
                      writable: !0,
                      value: function(e, i) {
                        var s = t.props,
                          r = s.allowUnknownElements,
                          n = s.components,
                          a = s.componentsOnly,
                          o = s.onError,
                          h = e.children,
                          p = void 0 === h ? [] : h,
                          c = "JSXElement" === e.type ? e.openingElement : e.openingFragment,
                          l = c.attributes,
                          u = void 0 === l ? [] : l,
                          d = "JSXElement" === e.type ? ae(se(t), ce).call(se(t), c.name) : "",
                          f = (t.props.blacklistedAttrs || []).map((function(t) {
                            return t instanceof RegExp ? t : new RegExp(t, "i")
                          })),
                          m = (t.props.blacklistedTags || []).map((function(t) {
                            return t.trim().toLowerCase()
                          })).filter(Boolean);
                        if (/^(html|head|body)$/i.test(d)) return p.map((function(e) {
                          return ae(se(t), le).call(se(t), e, i)
                        }));
                        var g, x = d.trim().toLowerCase();
                        if (-1 !== m.indexOf(x)) return o(new Error("The tag <".concat(d, "> is blacklisted, and will not be rendered."))), null;
                        if ("" !== d && !Xt(n, d)) {
                          if (a) return o(new Error("The component <".concat(d, "> is unrecognized, and will not be rendered."))), t.props.renderUnrecognized(d);
                          if (!r && document.createElement(d) instanceof HTMLUnknownElement) return o(new Error("The tag <".concat(d, "> is unrecognized in this browser, and will not be rendered."))), t.props.renderUnrecognized(d)
                        }
                        var y = "JSXElement" === e.type ? Xt(n, d) : Mt.Fragment;
                        (y || function(t) {
                          return -1 === jt.indexOf(t.toLowerCase())
                        }(d)) && (g = p.map((function(e) {
                          return ae(se(t), he).call(se(t), e, i)
                        })), y || function(t) {
                          return -1 !== Ut.indexOf(t.toLowerCase())
                        }(d) || (g = g.filter((function(t) {
                          return "string" != typeof t || !/^\s*$/.test(t)
                        }))), 0 === g.length ? g = void 0 : 1 === g.length ? g = function(t, e) {
                          return function(t) {
                            if (Array.isArray(t)) return t
                          }(t) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                              var i = [],
                                s = !0,
                                r = !1,
                                n = void 0;
                              try {
                                for (var a, o = t[Symbol.iterator](); !(s = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); s = !0);
                              } catch (t) {
                                r = !0, n = t
                              } finally {
                                try {
                                  s || null == o.return || o.return()
                                } finally {
                                  if (r) throw n
                                }
                              }
                              return i
                            }
                          }(t, e) || $t(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                          }()
                        }(g, 1)[0] : g.length > 1 && !t.props.disableKeyGeneration && (g = g.map((function(t, e) {
                          return null == t || !t.type || null != t && t.key ? t : Yt(Yt({}, t), {}, {
                            key: t.key || e
                          })
                        }))));
                        var v = {
                          key: t.props.disableKeyGeneration ? void 0 : Ft()
                        };
                        u.forEach((function(e) {
                          if ("JSXAttribute" === e.type) {
                            var s = e.name.name,
                              r = Bt[s] || s,
                              n = ae(se(t), he).call(se(t), e, i);
                            0 === f.filter((function(t) {
                              return t.test(r)
                            })).length && (v[r] = n)
                          } else if ("JSXSpreadAttribute" === e.type && "Identifier" === e.argument.type || "MemberExpression" === e.argument.type) {
                            var a = ae(se(t), he).call(se(t), e.argument, i);
                            "object" === Qt(a) && Object.keys(a).forEach((function(t) {
                              var e = Bt[t] || t;
                              0 === f.filter((function(t) {
                                return t.test(e)
                              })).length && (v[e] = a[t])
                            }))
                          }
                        })), "string" == typeof v.style && (v.style = function(t) {
                          switch (Wt(t)) {
                            case "string":
                              return t.split(";").filter((function(t) {
                                return t
                              })).reduce((function(t, e) {
                                var i = e.slice(0, e.indexOf(":")).trim(),
                                  s = e.slice(e.indexOf(":") + 1).trim();
                                return qt(qt({}, t), {}, Gt({}, i.replace(/([A-Z])([A-Z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[^a-zA-Z\u00C0-\u00ff]/g, " ").toLowerCase().split(" ").filter((function(t) {
                                  return t
                                })).map((function(t, e) {
                                  return e > 0 ? t[0].toUpperCase() + t.slice(1) : t
                                })).join(""), s))
                              }), {});
                            case "object":
                              return t;
                            default:
                              return
                          }
                        }(v.style));
                        var b = d.toLowerCase();
                        return "option" === b && (g = g.props.children), Dt().createElement(y || b, v, g)
                      }
                    }), ne(se(t), "render", (function() {
                      var e = (t.props.jsx || "").trim().replace(/<!DOCTYPE([^>]*)>/g, "");
                      t.ParsedChildren = ae(se(t), oe).call(se(t), e);
                      var i = Zt(new Set(["jsx-parser"].concat(Zt(String(t.props.className).split(" "))))).filter(Boolean).join(" ");
                      return t.props.renderInWrapper ? Dt().createElement("div", {
                        className: i
                      }, t.ParsedChildren) : Dt().createElement(Dt().Fragment, null, t.ParsedChildren)
                    })), t
                  }
                  return i
                }(Dt().Component);
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
              t.exports = s
            }
          },
          e = {};

        function i(s) {
          if (e[s]) return e[s].exports;
          var r = e[s] = {
            exports: {}
          };
          return t[s].call(r.exports, r, r.exports, i), r.exports
        }
        return i.n = t => {
          var e = t && t.__esModule ? () => t.default : () => t;
          return i.d(e, {
            a: e
          }), e
        }, i.d = (t, e) => {
          for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
            enumerable: !0,
            get: e[s]
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