try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4cdd5754-ee64-4cad-b501-c5e0104148c3", e._sentryDebugIdIdentifier = "sentry-dbid-4cdd5754-ee64-4cad-b501-c5e0104148c3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [6289], {
    3154: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          n = 0,
          s = !0;

        function o(e) {
          function n() {
            t && t(e, r)
          }
          s ? i.default.nextTick(n) : n()
        }
        e.length > 0 ? e[0]((function t(i, s) {
          r.push(s), ++n >= e.length || i ? o(i) : e[n](t)
        })) : o(null), s = !1
      };
      var n, i = (n = r(87144)) && n.__esModule ? n : {
        default: n
      }
    },
    17048: function(e) {
      e.exports = function() {
        "use strict";

        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e(t)
        }

        function t(e, r) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, r)
        }

        function r(e, n, i) {
          return r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, r, n) {
            var i = [null];
            i.push.apply(i, r);
            var s = new(Function.bind.apply(e, i));
            return n && t(s, n.prototype), s
          }, r.apply(null, arguments)
        }

        function n(e) {
          return function(e) {
            if (Array.isArray(e)) return i(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return i(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n
        }
        var s = Object.hasOwnProperty,
          o = Object.setPrototypeOf,
          a = Object.isFrozen,
          l = Object.getPrototypeOf,
          d = Object.getOwnPropertyDescriptor,
          c = Object.freeze,
          u = Object.seal,
          p = Object.create,
          f = "undefined" != typeof Reflect && Reflect,
          m = f.apply,
          h = f.construct;
        m || (m = function(e, t, r) {
          return e.apply(t, r)
        }), c || (c = function(e) {
          return e
        }), u || (u = function(e) {
          return e
        }), h || (h = function(e, t) {
          return r(e, n(t))
        });
        var g, v = O(Array.prototype.forEach),
          w = O(Array.prototype.pop),
          y = O(Array.prototype.push),
          b = O(String.prototype.toLowerCase),
          S = O(String.prototype.toString),
          T = O(String.prototype.match),
          E = O(String.prototype.replace),
          x = O(String.prototype.indexOf),
          M = O(String.prototype.trim),
          C = O(RegExp.prototype.test),
          _ = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return h(g, t)
          });

        function O(e) {
          return function(t) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            return m(e, t, n)
          }
        }

        function k(e, t, r) {
          var n;
          r = null !== (n = r) && void 0 !== n ? n : b, o && o(e, null);
          for (var i = t.length; i--;) {
            var s = t[i];
            if ("string" == typeof s) {
              var l = r(s);
              l !== s && (a(t) || (t[i] = l), s = l)
            }
            e[s] = !0
          }
          return e
        }

        function P(e) {
          var t, r = p(null);
          for (t in e) !0 === m(s, e, [t]) && (r[t] = e[t]);
          return r
        }

        function A(e, t) {
          for (; null !== e;) {
            var r = d(e, t);
            if (r) {
              if (r.get) return O(r.get);
              if ("function" == typeof r.value) return O(r.value)
            }
            e = l(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var L = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          I = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          N = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          z = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          D = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          R = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          G = c(["#text"]),
          F = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          j = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          B = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          H = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          V = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = u(/<%[\w\W]*|[\w\W]*%>/gm),
          $ = u(/\${[\w\W]*}/gm),
          U = u(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          q = u(/^aria-[\-\w]+$/),
          Y = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          X = u(/^(?:\w+script|data):/i),
          K = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = u(/^html$/i),
          J = u(/^[a-z][.\w]*(-[.\w]+)+$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            i = function(e) {
              return t(e)
            };
          if (i.version = "2.5.8", i.removed = [], !r || !r.document || 9 !== r.document.nodeType) return i.isSupported = !1, i;
          var s = r.document,
            o = r.document,
            a = r.DocumentFragment,
            l = r.HTMLTemplateElement,
            d = r.Node,
            u = r.Element,
            p = r.NodeFilter,
            f = r.NamedNodeMap,
            m = void 0 === f ? r.NamedNodeMap || r.MozNamedAttrMap : f,
            h = r.HTMLFormElement,
            g = r.DOMParser,
            O = r.trustedTypes,
            ee = u.prototype,
            te = A(ee, "cloneNode"),
            re = A(ee, "nextSibling"),
            ne = A(ee, "childNodes"),
            ie = A(ee, "parentNode");
          if ("function" == typeof l) {
            var se = o.createElement("template");
            se.content && se.content.ownerDocument && (o = se.content.ownerDocument)
          }
          var oe = function(t, r) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var n = null,
                i = "data-tt-policy-suffix";
              r.currentScript && r.currentScript.hasAttribute(i) && (n = r.currentScript.getAttribute(i));
              var s = "dompurify" + (n ? "#" + n : "");
              try {
                return t.createPolicy(s, {
                  createHTML: function(e) {
                    return e
                  },
                  createScriptURL: function(e) {
                    return e
                  }
                })
              } catch (e) {
                return console.warn("TrustedTypes policy " + s + " could not be created."), null
              }
            }(O, s),
            ae = oe ? oe.createHTML("") : "",
            le = o,
            de = le.implementation,
            ce = le.createNodeIterator,
            ue = le.createDocumentFragment,
            pe = le.getElementsByTagName,
            fe = s.importNode,
            me = {};
          try {
            me = P(o).documentMode ? o.documentMode : {}
          } catch (e) {}
          var he = {};
          i.isSupported = "function" == typeof ie && de && void 0 !== de.createHTMLDocument && 9 !== me;
          var ge, ve, we = V,
            ye = W,
            be = $,
            Se = U,
            Te = q,
            Ee = X,
            xe = K,
            Me = J,
            Ce = Y,
            _e = null,
            Oe = k({}, [].concat(n(L), n(I), n(N), n(D), n(G))),
            ke = null,
            Pe = k({}, [].concat(n(F), n(j), n(B), n(H))),
            Ae = Object.seal(Object.create(null, {
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
            Le = null,
            Ie = null,
            Ne = !0,
            ze = !0,
            De = !1,
            Re = !0,
            Ge = !1,
            Fe = !0,
            je = !1,
            Be = !1,
            He = !1,
            Ve = !1,
            We = !1,
            $e = !1,
            Ue = !0,
            qe = !1,
            Ye = !0,
            Xe = !1,
            Ke = {},
            Ze = null,
            Je = k({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = k({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            rt = k({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            nt = "http://www.w3.org/1998/Math/MathML",
            it = "http://www.w3.org/2000/svg",
            st = "http://www.w3.org/1999/xhtml",
            ot = st,
            at = !1,
            lt = null,
            dt = k({}, [nt, it, st], S),
            ct = ["application/xhtml+xml", "text/html"],
            ut = null,
            pt = o.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            mt = function(t) {
              ut && ut === t || (t && "object" === e(t) || (t = {}), t = P(t), ge = ge = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ve = "application/xhtml+xml" === ge ? S : b, _e = "ALLOWED_TAGS" in t ? k({}, t.ALLOWED_TAGS, ve) : Oe, ke = "ALLOWED_ATTR" in t ? k({}, t.ALLOWED_ATTR, ve) : Pe, lt = "ALLOWED_NAMESPACES" in t ? k({}, t.ALLOWED_NAMESPACES, S) : dt, tt = "ADD_URI_SAFE_ATTR" in t ? k(P(rt), t.ADD_URI_SAFE_ATTR, ve) : rt, Qe = "ADD_DATA_URI_TAGS" in t ? k(P(et), t.ADD_DATA_URI_TAGS, ve) : et, Ze = "FORBID_CONTENTS" in t ? k({}, t.FORBID_CONTENTS, ve) : Je, Le = "FORBID_TAGS" in t ? k({}, t.FORBID_TAGS, ve) : {}, Ie = "FORBID_ATTR" in t ? k({}, t.FORBID_ATTR, ve) : {}, Ke = "USE_PROFILES" in t && t.USE_PROFILES, Ne = !1 !== t.ALLOW_ARIA_ATTR, ze = !1 !== t.ALLOW_DATA_ATTR, De = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Ge = t.SAFE_FOR_TEMPLATES || !1, Fe = !1 !== t.SAFE_FOR_XML, je = t.WHOLE_DOCUMENT || !1, Ve = t.RETURN_DOM || !1, We = t.RETURN_DOM_FRAGMENT || !1, $e = t.RETURN_TRUSTED_TYPE || !1, He = t.FORCE_BODY || !1, Ue = !1 !== t.SANITIZE_DOM, qe = t.SANITIZE_NAMED_PROPS || !1, Ye = !1 !== t.KEEP_CONTENT, Xe = t.IN_PLACE || !1, Ce = t.ALLOWED_URI_REGEXP || Ce, ot = t.NAMESPACE || st, Ae = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ae.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ge && (ze = !1), We && (Ve = !0), Ke && (_e = k({}, n(G)), ke = [], !0 === Ke.html && (k(_e, L), k(ke, F)), !0 === Ke.svg && (k(_e, I), k(ke, j), k(ke, H)), !0 === Ke.svgFilters && (k(_e, N), k(ke, j), k(ke, H)), !0 === Ke.mathMl && (k(_e, D), k(ke, B), k(ke, H))), t.ADD_TAGS && (_e === Oe && (_e = P(_e)), k(_e, t.ADD_TAGS, ve)), t.ADD_ATTR && (ke === Pe && (ke = P(ke)), k(ke, t.ADD_ATTR, ve)), t.ADD_URI_SAFE_ATTR && k(tt, t.ADD_URI_SAFE_ATTR, ve), t.FORBID_CONTENTS && (Ze === Je && (Ze = P(Ze)), k(Ze, t.FORBID_CONTENTS, ve)), Ye && (_e["#text"] = !0), je && k(_e, ["html", "head", "body"]), _e.table && (k(_e, ["tbody"]), delete Le.tbody), c && c(t), ut = t)
            },
            ht = k({}, ["mi", "mo", "mn", "ms", "mtext"]),
            gt = k({}, ["annotation-xml"]),
            vt = k({}, ["title", "style", "font", "a", "script"]),
            wt = k({}, I);
          k(wt, N), k(wt, z);
          var yt = k({}, D);
          k(yt, R);
          var bt = function(e) {
              y(i.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                try {
                  e.outerHTML = ae
                } catch (t) {
                  e.remove()
                }
              }
            },
            St = function(e, t) {
              try {
                y(i.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                y(i.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !ke[e])
                if (Ve || We) try {
                  bt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Tt = function(e) {
              var t, r;
              if (He) e = "<remove></remove>" + e;
              else {
                var n = T(e, /^[\r\n\t ]+/);
                r = n && n[0]
              }
              "application/xhtml+xml" === ge && ot === st && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var i = oe ? oe.createHTML(e) : e;
              if (ot === st) try {
                t = (new g).parseFromString(i, ge)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = de.createDocument(ot, "template", null);
                try {
                  t.documentElement.innerHTML = at ? ae : i
                } catch (e) {}
              }
              var s = t.body || t.documentElement;
              return e && r && s.insertBefore(o.createTextNode(r), s.childNodes[0] || null), ot === st ? pe.call(t, je ? "html" : "body")[0] : je ? t.documentElement : s
            },
            Et = function(e) {
              return ce.call(e.ownerDocument || e, e, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION, null, !1)
            },
            xt = function(e) {
              return e instanceof h && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof m) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            Mt = function(t) {
              return "object" === e(d) ? t instanceof d : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            Ct = function(e, t, r) {
              he[e] && v(he[e], (function(e) {
                e.call(i, t, r, ut)
              }))
            },
            _t = function(e) {
              var t;
              if (Ct("beforeSanitizeElements", e, null), xt(e)) return bt(e), !0;
              if (C(/[\u0080-\uFFFF]/, e.nodeName)) return bt(e), !0;
              var r = ve(e.nodeName);
              if (Ct("uponSanitizeElement", e, {
                  tagName: r,
                  allowedTags: _e
                }), e.hasChildNodes() && !Mt(e.firstElementChild) && (!Mt(e.content) || !Mt(e.content.firstElementChild)) && C(/<[/\w]/g, e.innerHTML) && C(/<[/\w]/g, e.textContent)) return bt(e), !0;
              if ("select" === r && C(/<template/i, e.innerHTML)) return bt(e), !0;
              if (7 === e.nodeType) return bt(e), !0;
              if (Fe && 8 === e.nodeType && C(/<[/\w]/g, e.data)) return bt(e), !0;
              if (!_e[r] || Le[r]) {
                if (!Le[r] && kt(r)) {
                  if (Ae.tagNameCheck instanceof RegExp && C(Ae.tagNameCheck, r)) return !1;
                  if (Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(r)) return !1
                }
                if (Ye && !Ze[r]) {
                  var n = ie(e) || e.parentNode,
                    s = ne(e) || e.childNodes;
                  if (s && n)
                    for (var o = s.length - 1; o >= 0; --o) {
                      var a = te(s[o], !0);
                      a.__removalCount = (e.__removalCount || 0) + 1, n.insertBefore(a, re(e))
                    }
                }
                return bt(e), !0
              }
              return e instanceof u && ! function(e) {
                var t = ie(e);
                t && t.tagName || (t = {
                  namespaceURI: ot,
                  tagName: "template"
                });
                var r = b(e.tagName),
                  n = b(t.tagName);
                return !!lt[e.namespaceURI] && (e.namespaceURI === it ? t.namespaceURI === st ? "svg" === r : t.namespaceURI === nt ? "svg" === r && ("annotation-xml" === n || ht[n]) : Boolean(wt[r]) : e.namespaceURI === nt ? t.namespaceURI === st ? "math" === r : t.namespaceURI === it ? "math" === r && gt[n] : Boolean(yt[r]) : e.namespaceURI === st ? !(t.namespaceURI === it && !gt[n]) && !(t.namespaceURI === nt && !ht[n]) && !yt[r] && (vt[r] || !wt[r]) : !("application/xhtml+xml" !== ge || !lt[e.namespaceURI]))
              }(e) ? (bt(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !C(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ge && 3 === e.nodeType && (t = e.textContent, t = E(t, we, " "), t = E(t, ye, " "), t = E(t, be, " "), e.textContent !== t && (y(i.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), Ct("afterSanitizeElements", e, null), !1) : (bt(e), !0)
            },
            Ot = function(e, t, r) {
              if (Ue && ("id" === t || "name" === t) && (r in o || r in pt)) return !1;
              if (ze && !Ie[t] && C(Se, t));
              else if (Ne && C(Te, t));
              else if (!ke[t] || Ie[t]) {
                if (!(kt(e) && (Ae.tagNameCheck instanceof RegExp && C(Ae.tagNameCheck, e) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(e)) && (Ae.attributeNameCheck instanceof RegExp && C(Ae.attributeNameCheck, t) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(t)) || "is" === t && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && C(Ae.tagNameCheck, r) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(r)))) return !1
              } else if (tt[t]);
              else if (C(Ce, E(r, xe, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== x(r, "data:") || !Qe[e])
                if (De && !C(Ee, E(r, xe, "")));
                else if (r) return !1;
              return !0
            },
            kt = function(e) {
              return "annotation-xml" !== e && T(e, Me)
            },
            Pt = function(t) {
              var r, n, s, o;
              Ct("beforeSanitizeAttributes", t, null);
              var a = t.attributes;
              if (a && !xt(t)) {
                var l = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: ke
                };
                for (o = a.length; o--;) {
                  var d = r = a[o],
                    c = d.name,
                    u = d.namespaceURI;
                  if (n = "value" === c ? r.value : M(r.value), s = ve(c), l.attrName = s, l.attrValue = n, l.keepAttr = !0, l.forceKeepAttr = void 0, Ct("uponSanitizeAttribute", t, l), n = l.attrValue, !l.forceKeepAttr && (St(c, t), l.keepAttr))
                    if (Re || !C(/\/>/i, n)) {
                      Ge && (n = E(n, we, " "), n = E(n, ye, " "), n = E(n, be, " "));
                      var p = ve(t.nodeName);
                      if (Ot(p, s, n))
                        if (!qe || "id" !== s && "name" !== s || (St(c, t), n = "user-content-" + n), Fe && C(/((--!?|])>)|<\/(style|title)/i, n)) St(c, t);
                        else {
                          if (oe && "object" === e(O) && "function" == typeof O.getAttributeType)
                            if (u);
                            else switch (O.getAttributeType(p, s)) {
                              case "TrustedHTML":
                                n = oe.createHTML(n);
                                break;
                              case "TrustedScriptURL":
                                n = oe.createScriptURL(n)
                            }
                          try {
                            u ? t.setAttributeNS(u, c, n) : t.setAttribute(c, n), xt(t) ? bt(t) : w(i.removed)
                          } catch (e) {}
                        }
                    } else St(c, t)
                }
                Ct("afterSanitizeAttributes", t, null)
              }
            },
            At = function e(t) {
              var r, n = Et(t);
              for (Ct("beforeSanitizeShadowDOM", t, null); r = n.nextNode();) Ct("uponSanitizeShadowNode", r, null), _t(r), Pt(r), r.content instanceof a && e(r.content);
              Ct("afterSanitizeShadowDOM", t, null)
            };
          return i.sanitize = function(t) {
            var n, o, l, c, u, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((at = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !Mt(t)) {
              if ("function" != typeof t.toString) throw _("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw _("dirty is not a string, aborting")
            }
            if (!i.isSupported) {
              if ("object" === e(r.toStaticHTML) || "function" == typeof r.toStaticHTML) {
                if ("string" == typeof t) return r.toStaticHTML(t);
                if (Mt(t)) return r.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (Be || mt(p), i.removed = [], "string" == typeof t && (Xe = !1), Xe) {
              if (t.nodeName) {
                var f = ve(t.nodeName);
                if (!_e[f] || Le[f]) throw _("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof d) 1 === (o = (n = Tt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? n = o : n.appendChild(o);
            else {
              if (!Ve && !Ge && !je && -1 === t.indexOf("<")) return oe && $e ? oe.createHTML(t) : t;
              if (!(n = Tt(t))) return Ve ? null : $e ? ae : ""
            }
            n && He && bt(n.firstChild);
            for (var m = Et(Xe ? t : n); l = m.nextNode();) 3 === l.nodeType && l === c || (_t(l), Pt(l), l.content instanceof a && At(l.content), c = l);
            if (c = null, Xe) return t;
            if (Ve) {
              if (We)
                for (u = ue.call(n.ownerDocument); n.firstChild;) u.appendChild(n.firstChild);
              else u = n;
              return (ke.shadowroot || ke.shadowrootmod) && (u = fe.call(s, u, !0)), u
            }
            var h = je ? n.outerHTML : n.innerHTML;
            return je && _e["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && C(Z, n.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + h), Ge && (h = E(h, we, " "), h = E(h, ye, " "), h = E(h, be, " ")), oe && $e ? oe.createHTML(h) : h
          }, i.setConfig = function(e) {
            mt(e), Be = !0
          }, i.clearConfig = function() {
            ut = null, Be = !1
          }, i.isValidAttribute = function(e, t, r) {
            ut || mt({});
            var n = ve(e),
              i = ve(t);
            return Ot(n, i, r)
          }, i.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], y(he[e], t))
          }, i.removeHook = function(e) {
            if (he[e]) return w(he[e])
          }, i.removeHooks = function(e) {
            he[e] && (he[e] = [])
          }, i.removeAllHooks = function() {
            he = {}
          }, i
        }()
      }()
    },
    39311: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const s = new Uint8Array(16);

      function o() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(s)
      }
      const a = [];
      for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
      const l = function(e, t, r) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        const i = (e = e || {}).random || (e.rng || o)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = i[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]
        }(i)
      }
    },
    40191: (e, t, r) => {
      "use strict";
      r.d(t, {
        Wx: () => d
      });
      var n = r(62229),
        i = (Object.defineProperty, new Map),
        s = new WeakMap,
        o = 0,
        a = void 0;

      function l(e, t, r = {}, n = a) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const i = e.getBoundingClientRect();
          return t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: l,
          observer: d,
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(r=e.root,r?(s.has(r)||(o+=1,s.set(r,o.toString())),s.get(r)):"0"):e[t]}`;
              var r
            })).toString()
          }(e);
          let r = i.get(t);
          if (!r) {
            const n = new Map;
            let s;
            const o = new IntersectionObserver((t => {
              t.forEach((t => {
                var r;
                const i = t.isIntersecting && s.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (r = n.get(t.target)) || r.forEach((e => {
                  e(i, t)
                }))
              }))
            }), e);
            s = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: o,
              elements: n
            }, i.set(t, r)
          }
          return r
        }(r), u = c.get(e) || [];
        return c.has(e) || c.set(e, u), u.push(t), d.observe(e),
          function() {
            u.splice(u.indexOf(t), 1), 0 === u.length && (c.delete(e), d.unobserve(e)), 0 === c.size && (d.disconnect(), i.delete(l))
          }
      }

      function d({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: i,
        root: s,
        triggerOnce: o,
        skip: a,
        initialInView: d,
        fallbackInView: c,
        onChange: u
      } = {}) {
        var p;
        const [f, m] = n.useState(null), h = n.useRef(u), [g, v] = n.useState({
          inView: !!d,
          entry: void 0
        });
        h.current = u, n.useEffect((() => {
          if (a || !f) return;
          let n;
          return n = l(f, ((e, t) => {
            v({
              inView: e,
              entry: t
            }), h.current && h.current(e, t), t.isIntersecting && o && n && (n(), n = void 0)
          }), {
            root: s,
            rootMargin: i,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            n && n()
          }
        }), [Array.isArray(e) ? e.toString() : e, f, s, i, o, a, r, c, t]);
        const w = null == (p = g.entry) ? void 0 : p.target,
          y = n.useRef(void 0);
        f || !w || o || a || y.current === w || (y.current = w, v({
          inView: !!d,
          entry: void 0
        }));
        const b = [m, g.inView, g.entry];
        return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
      }
      n.Component
    },
    45675: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        },
        i = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        }(),
        s = f(r(62229)),
        o = f(r(57145)),
        a = f(r(95847)),
        l = f(r(3154)),
        d = f(r(66010)),
        c = f(r(79967)),
        u = f(r(88433)),
        p = r(73614);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function h(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var g = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, c.default)(r.handleWindowResize, e.throttle), r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), i(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, a.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, u.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              n = t.max,
              i = t.mode,
              s = t.forceSingleModeWidth,
              o = t.onReady,
              a = this._parent,
              c = this._child,
              f = (0, p.innerWidth)(a),
              g = (0, p.innerHeight)(a);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var v = (0, u.default)();
              this.pid = v;
              var w = function() {
                  return v !== e.pid
                },
                y = "multi" === i ? function() {
                  return h(c, g)
                } : function() {
                  return m(c, f)
                },
                b = "multi" === i ? function() {
                  return m(c, f)
                } : function() {
                  return h(c, g)
                },
                S = void 0,
                T = r,
                E = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, d.default)((function() {
                  return T <= E
                }), (function(t) {
                  if (w()) return t(!0);
                  S = parseInt((T + E) / 2, 10), e.setState({
                    fontSize: S
                  }, (function() {
                    return w() ? t(!0) : (y() ? T = S + 1 : E = S - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === i && s || b() ? t() : (T = r, E = S, (0, d.default)((function() {
                  return T < E
                }), (function(t) {
                  if (w()) return t(!0);
                  S = parseInt((T + E) / 2, 10), e.setState({
                    fontSize: S
                  }, (function() {
                    return v !== e.pid ? t(!0) : (b() ? T = S + 1 : E = S - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (S = Math.min(T, E), S = Math.max(S, r), S = Math.min(S, n), S = Math.max(S, 0), w()) return t(!0);
                e.setState({
                  fontSize: S
                }, t)
              }], (function(t) {
                t || w() || e.setState({
                  ready: !0
                }, (function() {
                  return o(S)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              i = t.text,
              o = t.style,
              a = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              d = this.state,
              c = d.fontSize,
              u = d.ready,
              p = n({}, o, {
                fontSize: c
              }),
              f = {
                display: u ? "block" : "inline-block"
              };
            return "single" === a && (f.whiteSpace = "nowrap"), s.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: p
            }, l), s.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: f
            }, i && "function" == typeof r ? u ? r(i) : i : r))
          }
        }]), t
      }(s.default.Component);
      g.propTypes = {
        children: o.default.node,
        text: o.default.string,
        min: o.default.number,
        max: o.default.number,
        mode: o.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: o.default.bool,
        throttle: o.default.number,
        onReady: o.default.func
      }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = g
    },
    66010: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(i) {
          for (var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) o[a - 1] = arguments[a];
          i ? n(i) : e.apply(this, o) ? t(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    73614: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    },
    79112: (e, t, r) => {
      "use strict";
      r.d(t, {
        RC: () => he,
        qr: () => ge
      });
      var n = r(61913);

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function s(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && s(e[r], t[r])
        }))
      }
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
        return s(e, o), e
      }
      const l = {
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

      function d() {
        const e = "undefined" != typeof window ? window : {};
        return s(e, l), e
      }

      function c(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function u() {
        return Date.now()
      }

      function p(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function f() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                s = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== s && s.enumerable && (p(e[n]) && p(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : f(e[n], i[n]) : !p(e[n]) && p(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : f(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        var r;
        return e
      }

      function m(e, t, r) {
        e.style.setProperty(t, r)
      }

      function h(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: n
        } = e;
        const i = d(),
          s = -t.translate;
        let o, a = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          p = () => {
            o = (new Date).getTime(), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              d = .5 - Math.cos(e * Math.PI) / 2;
            let c = s + d * (r - s);
            if (u(c, r) && (c = r), t.wrapperEl.scrollTo({
                [n]: c
              }), u(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [n]: c
              })
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(p)
          };
        p()
      }

      function g(e, t) {
        void 0 === t && (t = "");
        const r = d(),
          n = [...e.children];
        return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter((e => e.matches(t))) : n
      }

      function v(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function w(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function y(e, t) {
        return d().getComputedStyle(e, null).getPropertyValue(t)
      }

      function b(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function S(e, t, r) {
        const n = d();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }
      let T, E, x;

      function M() {
        return T || (T = function() {
          const e = d(),
            t = a();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), T
      }

      function C(e) {
        return void 0 === e && (e = {}), E || (E = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = M(),
            n = d(),
            i = n.navigator.platform,
            s = t || n.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            a = n.screen.width,
            l = n.screen.height,
            c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = s.match(/(iPad).*OS\s([\d_]+)/);
          const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === i;
          let h = "MacIntel" === i;
          return !u && h && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), h = !1), c && !m && (o.os = "android", o.android = !0), (u || f || p) && (o.os = "ios", o.ios = !0), o
        }(e)), E
      }

      function _() {
        return x || (x = function() {
          const e = d(),
            t = C();
          let r = !1;

          function n() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (n()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, n] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
              r = e < 16 || 16 === e && n < 2
            }
          }
          const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            s = n();
          return {
            isSafari: r || s,
            needPerspectiveFix: r,
            need3dFix: s || i && t.ios,
            isWebView: i
          }
        }()), x
      }
      var O = {
        on(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;
          const i = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
          })), n
        },
        once(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;

          function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
            t.apply(n, s)
          }
          return i.__emitterProxy = t, n.on(e, i, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const n = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, i) => {
              (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, n;
          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
          return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], r = s.slice(1, s.length), n = e) : (t = s[0].events, r = s[0].data, n = s[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(n, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(n, r)
            }))
          })), e
        }
      };
      const k = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        P = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        A = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        L = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        I = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = i,
              s = [r - t];
            return s.push(...Array.from({
              length: t
            }).map(((e, t) => r + n + t))), void e.slides.forEach(((t, r) => {
              s.includes(t.column) && L(e, r)
            }))
          }
          const s = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= s + t; n += 1) {
              const t = (n % r + r) % r;
              (t < i || t > s) && L(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(s + t, r - 1); n += 1) n !== i && (n > s || n < i) && L(e, n)
        };
      var N = {
        updateSize: function() {
          const e = this;
          let t, r;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(y(n, "padding-left") || 0, 10) - parseInt(y(n, "padding-right") || 0, 10), r = r - parseInt(y(n, "padding-top") || 0, 10) - parseInt(y(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: n,
              slidesEl: i,
              size: s,
              rtlTranslate: o,
              wrongRTL: a
            } = e,
            l = e.virtual && r.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = g(i, `.${e.params.slideClass}, swiper-slide`),
            u = l ? e.virtual.slides.length : c.length;
          let p = [];
          const f = [],
            h = [];
          let v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
          let w = r.slidesOffsetAfter;
          "function" == typeof w && (w = r.slidesOffsetAfter.call(e));
          const b = e.snapGrid.length,
            T = e.slidesGrid.length;
          let E = r.spaceBetween,
            x = -v,
            M = 0,
            C = 0;
          if (void 0 === s) return;
          "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * s : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, c.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && (m(n, "--swiper-centered-offset-before", ""), m(n, "--swiper-centered-offset-after", ""));
          const _ = r.grid && r.grid.rows > 1 && e.grid;
          let O;
          _ ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const k = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let n = 0; n < u; n += 1) {
            let i;
            if (O = 0, c[n] && (i = c[n]), _ && e.grid.updateSlide(n, i, c), !c[n] || "none" !== y(i, "display")) {
              if ("auto" === r.slidesPerView) {
                k && (c[n].style[e.getDirectionLabel("width")] = "");
                const s = getComputedStyle(i),
                  o = i.style.transform,
                  a = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), a && (i.style.webkitTransform = "none"), r.roundLengths) O = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
                else {
                  const e = t(s, "width"),
                    r = t(s, "padding-left"),
                    n = t(s, "padding-right"),
                    o = t(s, "margin-left"),
                    a = t(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) O = e + o + a;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: s
                    } = i;
                    O = e + r + n + o + a + (s - t)
                  }
                }
                o && (i.style.transform = o), a && (i.style.webkitTransform = a), r.roundLengths && (O = Math.floor(O))
              } else O = (s - (r.slidesPerView - 1) * E) / r.slidesPerView, r.roundLengths && (O = Math.floor(O)), c[n] && (c[n].style[e.getDirectionLabel("width")] = `${O}px`);
              c[n] && (c[n].swiperSlideSize = O), h.push(O), r.centeredSlides ? (x = x + O / 2 + M / 2 + E, 0 === M && 0 !== n && (x = x - s / 2 - E), 0 === n && (x = x - s / 2 - E), Math.abs(x) < .001 && (x = 0), r.roundLengths && (x = Math.floor(x)), C % r.slidesPerGroup == 0 && p.push(x), f.push(x)) : (r.roundLengths && (x = Math.floor(x)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && p.push(x), f.push(x), x = x + O + E), e.virtualSize += O + E, M = O, C += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, s) + w, o && a && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${e.virtualSize+E}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize+E}px`), _ && e.grid.updateWrapperSize(O, p), !r.centeredSlides) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let i = p[n];
              r.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - s && t.push(i)
            }
            p = t, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
          }
          if (l && r.loop) {
            const t = h[0] + E;
            if (r.slidesPerGroup > 1) {
              const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                i = t * r.slidesPerGroup;
              for (let e = 0; e < n; e += 1) p.push(p[p.length - 1] + i)
            }
            for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && p.push(p[p.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === p.length && (p = [0]), 0 !== E) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            c.filter(((e, t) => !(r.cssMode && !r.loop) || t !== c.length - 1)).forEach((e => {
              e.style[t] = `${E}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = e > s ? e - s : 0;
            p = p.map((e => e <= 0 ? -v : e > t ? t + w : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            h.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
            if (e + t < s) {
              const r = (s - e - t) / 2;
              p.forEach(((e, t) => {
                p[t] = e - r
              })), f.forEach(((e, t) => {
                f[t] = e + r
              }))
            }
          }
          if (Object.assign(e, {
              slides: c,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            m(n, "--swiper-centered-offset-before", -p[0] + "px"), m(n, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (u !== d && e.emit("slidesLengthChange"), p.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== T && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.el.classList.contains(t);
            u <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            n = t.virtual && t.params.virtual.enabled;
          let i, s = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const o = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                r.push(o(e))
              } else r.push(o(t.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const e = r[i].offsetHeight;
              s = e > s ? e : s
            }(s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: s
            } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          i && (o = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let a = r.spaceBetween;
          "string" == typeof a && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : "string" == typeof a && (a = parseFloat(a));
          for (let e = 0; e < n.length; e += 1) {
            const l = n[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= n[0].swiperSlideOffset);
            const c = (o + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + a),
              u = (o - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + a),
              p = -(o - d),
              f = p + t.slidesSizesGrid[e],
              m = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
              h = p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size;
            h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), k(l, h, r.slideVisibleClass), k(l, m, r.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -u : u
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: s,
            isEnd: o,
            progressLoop: a
          } = t;
          const l = s,
            d = o;
          if (0 === n) i = 0, s = !0, o = !0;
          else {
            i = (e - t.minTranslate()) / n;
            const r = Math.abs(e - t.minTranslate()) < 1,
              a = Math.abs(e - t.maxTranslate()) < 1;
            s = r || i <= 0, o = a || i >= 1, r && (i = 0), a && (i = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              n = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[r],
              s = t.slidesGrid[n],
              o = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            a = l >= i ? (l - i) / o : (l + o - s) / o, a > 1 && (a -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: a,
            isBeginning: s,
            isEnd: o
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !s || d && !o) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: n,
              activeIndex: i
            } = e,
            s = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            a = e => g(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let l, d, c;
          if (s)
            if (r.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = a(`[data-swiper-slide-index="${t}"]`)
            } else l = a(`[data-swiper-slide-index="${i}"]`);
          else o ? (l = t.find((e => e.column === i)), c = t.find((e => e.column === i + 1)), d = t.find((e => e.column === i - 1))) : l = t[i];
          l && (o || (c = function(e, t) {
            const r = [];
            for (; e.nextElementSibling;) {
              const n = e.nextElementSibling;
              t ? n.matches(t) && r.push(n) : r.push(n), e = n
            }
            return r
          }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && !c && (c = t[0]), d = function(e, t) {
            const r = [];
            for (; e.previousElementSibling;) {
              const n = e.previousElementSibling;
              t ? n.matches(t) && r.push(n) : r.push(n), e = n
            }
            return r
          }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
            P(e, e === l, r.slideActiveClass), P(e, e === c, r.slideNextClass), P(e, e === d, r.slidePrevClass)
          })), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: s,
              realIndex: o,
              snapIndex: a
            } = t;
          let l, d = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : n >= t[e] && n < t[e + 1] && (i = e + 1) : n >= t[e] && (i = e);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), d === s && !t.params.loop) return void(l !== a && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const u = t.grid && i.grid && i.grid.rows > 1;
          let p;
          if (t.virtual && i.virtual.enabled && i.loop) p = c(d);
          else if (u) {
            const e = t.slides.find((e => e.column === d));
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : d
          } else p = d;
          Object.assign(t, {
            previousSnapIndex: a,
            snapIndex: l,
            previousRealIndex: o,
            realIndex: p,
            previousIndex: s,
            activeIndex: d
          }), t.initialized && I(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (o !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            n = r.params;
          let i = e.closest(`.${n.slideClass}, swiper-slide`);
          !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (i = e)
          }));
          let s, o = !1;
          if (i)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === i) {
                o = !0, s = e;
                break
              } if (!i || !o) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function z(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: n,
          step: i
        } = e;
        const {
          activeIndex: s,
          previousIndex: o
        } = t;
        let a = n;
        if (a || (a = s > o ? "next" : s < o ? "prev" : "reset"), t.emit(`transition${i}`), r && s !== o) {
          if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === a ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var D = {
          slideTo: function(e, t, r, n, i) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const s = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: f,
              enabled: m
            } = s;
            if (!m && !n && !i || s.destroyed || s.animating && a.preventInteractionOnTransition) return !1;
            void 0 === t && (t = s.params.speed);
            const g = Math.min(s.params.slidesPerGroupSkip, o);
            let v = g + Math.floor((o - g) / s.params.slidesPerGroup);
            v >= l.length && (v = l.length - 1);
            const w = -l[v];
            if (a.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w),
                  r = Math.floor(100 * d[e]),
                  n = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= r && t < n - (n - r) / 2 ? o = e : t >= r && t < n && (o = e + 1) : t >= r && (o = e)
              }
            if (s.initialized && o !== u) {
              if (!s.allowSlideNext && (p ? w > s.translate && w > s.minTranslate() : w < s.translate && w < s.minTranslate())) return !1;
              if (!s.allowSlidePrev && w > s.translate && w > s.maxTranslate() && (u || 0) !== o) return !1
            }
            let y;
            o !== (c || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(w), y = o > u ? "next" : o < u ? "prev" : "reset";
            const b = s.virtual && s.params.virtual.enabled;
            if ((!b || !i) && (p && -w === s.translate || !p && w === s.translate)) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(w), "reset" !== y && (s.transitionStart(r, y), s.transitionEnd(r, y)), !1;
            if (a.cssMode) {
              const e = s.isHorizontal(),
                r = p ? w : -w;
              if (0 === t) b && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), b && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                f[e ? "scrollLeft" : "scrollTop"] = r
              }))) : f[e ? "scrollLeft" : "scrollTop"] = r, b && requestAnimationFrame((() => {
                s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
              }));
              else {
                if (!s.support.smoothScroll) return h({
                  swiper: s,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const S = _().isSafari;
            return b && !i && S && s.isElement && s.virtual.update(!1, !1, o), s.setTransition(t), s.setTranslate(w), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(r, y), 0 === t ? s.transitionEnd(r, y) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
              s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, y))
            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, n) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const s = i.grid && i.params.grid && i.params.grid.rows > 1;
            let o = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) o += i.virtual.slidesBefore;
              else {
                let e;
                if (s) {
                  const t = o * i.params.grid.rows;
                  e = i.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                } else e = i.getSlideIndexByData(o);
                const t = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let a = i.params.slidesPerView;
                "auto" === a ? a = i.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && a % 2 == 0 && (a += 1));
                let l = t - e < a;
                if (r && (l = l || e < Math.ceil(a / 2)), n && r && "auto" !== i.params.slidesPerView && !s && (l = !1), l) {
                  const n = r ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: n,
                    slideTo: !0,
                    activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === n ? i.realIndex : void 0
                  })
                }
                if (s) {
                  const e = o * i.params.grid.rows;
                  o = i.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                } else o = i.getSlideIndexByData(o)
              } return requestAnimationFrame((() => {
              i.slideTo(o, t, r, n)
            })), i
          },
          slideNext: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this,
              {
                enabled: i,
                params: s,
                animating: o
              } = n;
            if (!i || n.destroyed) return n;
            void 0 === e && (e = n.params.speed);
            let a = s.slidesPerGroup;
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < s.slidesPerGroupSkip ? 1 : a,
              d = n.virtual && s.virtual.enabled;
            if (s.loop) {
              if (o && !d && s.loopPreventsSliding) return !1;
              if (n.loopFix({
                  direction: "next"
                }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode) return requestAnimationFrame((() => {
                n.slideTo(n.activeIndex + l, e, t, r)
              })), !0
            }
            return s.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this,
              {
                params: i,
                snapGrid: s,
                slidesGrid: o,
                rtlTranslate: a,
                enabled: l,
                animating: d
              } = n;
            if (!l || n.destroyed) return n;
            void 0 === e && (e = n.params.speed);
            const c = n.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              n.loopFix({
                direction: "prev"
              }), n._clientLeft = n.wrapperEl.clientLeft
            }

            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = u(a ? n.translate : -n.translate),
              f = s.map((e => u(e))),
              m = i.freeMode && i.freeMode.enabled;
            let h = s[f.indexOf(p) - 1];
            if (void 0 === h && (i.cssMode || m)) {
              let e;
              s.forEach(((t, r) => {
                p >= t && (e = r)
              })), void 0 !== e && (h = m ? s[e] : s[e > 0 ? e - 1 : e])
            }
            let g = 0;
            if (void 0 !== h && (g = o.indexOf(h), g < 0 && (g = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && n.isBeginning) {
              const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
              return n.slideTo(i, e, t, r)
            }
            return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              n.slideTo(g, e, t, r)
            })), !0) : n.slideTo(g, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this;
            if (!n.destroyed) return void 0 === e && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, n) {
            void 0 === t && (t = !0), void 0 === n && (n = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let s = i.activeIndex;
            const o = Math.min(i.params.slidesPerGroupSkip, s),
              a = o + Math.floor((s - o) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[a]) {
              const e = i.snapGrid[a];
              l - e > (i.snapGrid[a + 1] - e) * n && (s += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[a - 1];
              l - e <= (i.snapGrid[a] - e) * n && (s -= i.params.slidesPerGroup)
            }
            return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, s = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - n / 2 || s > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), s = e.getSlideIndex(g(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), c((() => {
                e.slideTo(s)
              }))) : e.slideTo(s) : s > e.slides.length - n ? (e.loopFix(), s = e.getSlideIndex(g(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), c((() => {
                e.slideTo(s)
              }))) : e.slideTo(s)
            } else e.slideTo(s)
          }
        },
        R = {
          loopCreate: function(e, t) {
            const r = this,
              {
                params: n,
                slidesEl: i
              } = r;
            if (!n.loop || r.virtual && r.params.virtual.enabled) return;
            const s = () => {
                g(i, `.${n.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              o = r.grid && n.grid && n.grid.rows > 1,
              a = n.slidesPerGroup * (o ? n.grid.rows : 1),
              l = r.slides.length % a != 0,
              d = o && r.slides.length % n.grid.rows != 0,
              c = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = r.isElement ? w("swiper-slide", [n.slideBlankClass]) : w("div", [n.slideClass, n.slideBlankClass]);
                  r.slidesEl.append(e)
                }
              };
            l ? (n.loopAddBlankSlides ? (c(a - r.slides.length % a), r.recalcSlides(), r.updateSlides()) : v("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), s()) : d ? (n.loopAddBlankSlides ? (c(n.grid.rows - r.slides.length % n.grid.rows), r.recalcSlides(), r.updateSlides()) : v("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), s()) : s(), r.loopFix({
              slideRealIndex: e,
              direction: n.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: n,
              setTranslate: i,
              activeSlideIndex: s,
              initial: o,
              byController: a,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: u,
              allowSlideNext: p,
              slidesEl: f,
              params: m
            } = d, {
              centeredSlides: h,
              initialSlide: g
            } = m;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) return r && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = u, d.allowSlideNext = p, void d.emit("loopFix");
            let w = m.slidesPerView;
            "auto" === w ? w = d.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)), h && w % 2 == 0 && (w += 1));
            const y = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
            let b = y;
            b % y != 0 && (b += y - b % y), b += m.loopAdditionalSlides, d.loopedSlides = b;
            const S = d.grid && m.grid && m.grid.rows > 1;
            c.length < w + b || "cards" === d.params.effect && c.length < w + 2 * b ? v("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === m.grid.fill && v("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const T = [],
              E = [],
              x = S ? Math.ceil(c.length / m.grid.rows) : c.length,
              M = o && x - g < w && !h;
            let C = M ? g : d.activeIndex;
            void 0 === s ? s = d.getSlideIndex(c.find((e => e.classList.contains(m.slideActiveClass)))) : C = s;
            const _ = "next" === n || !n,
              O = "prev" === n || !n;
            let k = 0,
              P = 0;
            const A = (S ? c[s].column : s) + (h && void 0 === i ? -w / 2 + .5 : 0);
            if (A < b) {
              k = Math.max(b - A, y);
              for (let e = 0; e < b - A; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (S) {
                  const e = x - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && T.push(t)
                } else T.push(x - t - 1)
              }
            } else if (A + w > x - b) {
              P = Math.max(A - (x - 2 * b), y), M && (P = Math.max(P, w - x + g + 1));
              for (let e = 0; e < P; e += 1) {
                const t = e - Math.floor(e / x) * x;
                S ? c.forEach(((e, r) => {
                  e.column === t && E.push(r)
                })) : E.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                d.__preventObserver__ = !1
              })), "cards" === d.params.effect && c.length < w + 2 * b && (E.includes(s) && E.splice(E.indexOf(s), 1), T.includes(s) && T.splice(T.indexOf(s), 1)), O && T.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), _ && E.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), d.recalcSlides(), "auto" === m.slidesPerView ? d.updateSlides() : S && (T.length > 0 && O || E.length > 0 && _) && d.slides.forEach(((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              })), m.watchSlidesProgress && d.updateSlidesOffset(), r)
              if (T.length > 0 && O) {
                if (void 0 === t) {
                  const e = d.slidesGrid[C],
                    t = d.slidesGrid[C + k] - e;
                  l ? d.setTranslate(d.translate - t) : (d.slideTo(C + Math.ceil(k), 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = S ? T.length / m.grid.rows : T.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (E.length > 0 && _)
              if (void 0 === t) {
                const e = d.slidesGrid[C],
                  t = d.slidesGrid[C - P] - e;
                l ? d.setTranslate(d.translate - t) : (d.slideTo(C - P, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = S ? E.length / m.grid.rows : E.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = u, d.allowSlideNext = p, d.controller && d.controller.control && !a) {
              const e = {
                slideRealIndex: t,
                direction: n,
                setTranslate: i,
                activeSlideIndex: s,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === m.slidesPerView && r
                })
              })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === m.slidesPerView && r
              })
            }
            d.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || !r || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const n = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              n[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), n.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function G(e, t, r) {
        const n = d(),
          {
            params: i
          } = e,
          s = i.edgeSwipeDetection,
          o = i.edgeSwipeThreshold;
        return !s || !(r <= o || r >= n.innerWidth - o) || "prevent" === s && (t.preventDefault(), !0)
      }

      function F(e) {
        const t = this,
          r = a();
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const i = t.touchEventsData;
        if ("pointerdown" === n.type) {
          if (null !== i.pointerId && i.pointerId !== n.pointerId) return;
          i.pointerId = n.pointerId
        } else "touchstart" === n.type && 1 === n.targetTouches.length && (i.touchId = n.targetTouches[0].identifier);
        if ("touchstart" === n.type) return void G(t, n, n.targetTouches[0].pageX);
        const {
          params: s,
          touches: o,
          enabled: l
        } = t;
        if (!l) return;
        if (!s.simulateTouch && "mouse" === n.pointerType) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let c = n.target;
        if ("wrapper" === s.touchEventsTarget && ! function(e, t) {
            const r = d();
            let n = t.contains(e);
            return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = function(e, t) {
              const r = [t];
              for (; r.length > 0;) {
                const t = r.shift();
                if (e === t) return !0;
                r.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
              }
            }(e, t))), n
          }(c, t.wrapperEl)) return;
        if ("which" in n && 3 === n.which) return;
        if ("button" in n && n.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const p = !!s.noSwipingClass && "" !== s.noSwipingClass,
          f = n.composedPath ? n.composedPath() : n.path;
        p && n.target && n.target.shadowRoot && f && (c = f[0]);
        const m = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
          h = !(!n.target || !n.target.shadowRoot);
        if (s.noSwiping && (h ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === a() || r === d()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const n = r.closest(e);
                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
              }(t)
          }(m, c) : c.closest(m))) return void(t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)) return;
        o.currentX = n.pageX, o.currentY = n.pageY;
        const g = o.currentX,
          v = o.currentY;
        if (!G(t, n, g)) return;
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = g, o.startY = v, i.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1);
        let w = !0;
        c.matches(i.focusableElements) && (w = !1, "SELECT" === c.nodeName && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== c && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !c.matches(i.focusableElements)) && r.activeElement.blur();
        const y = w && t.allowTouchMove && s.touchStartPreventDefault;
        !s.touchStartForcePreventDefault && !y || c.isContentEditable || n.preventDefault(), s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
      }

      function j(e) {
        const t = a(),
          r = this,
          n = r.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: o,
            enabled: l
          } = r;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let d, c = e;
        if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
          if (null !== n.touchId) return;
          if (c.pointerId !== n.pointerId) return
        }
        if ("touchmove" === c.type) {
          if (d = [...c.changedTouches].find((e => e.identifier === n.touchId)), !d || d.identifier !== n.touchId) return
        } else d = c;
        if (!n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c));
        const p = d.pageX,
          f = d.pageY;
        if (c.preventedByNestedSwiper) return s.startX = p, void(s.startY = f);
        if (!r.allowTouchMove) return c.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(s, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f
        }), n.touchStartTime = u()));
        if (i.touchReleaseOnEdges && !i.loop)
          if (r.isVertical()) {
            if (f < s.startY && r.translate <= r.maxTranslate() || f > s.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else {
            if (o && (p > s.startX && -r.translate <= r.maxTranslate() || p < s.startX && -r.translate >= r.minTranslate())) return;
            if (!o && (p < s.startX && r.translate <= r.maxTranslate() || p > s.startX && r.translate >= r.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== c.target && "mouse" !== c.pointerType && t.activeElement.blur(), t.activeElement && c.target === t.activeElement && c.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        n.allowTouchCallbacks && r.emit("touchMove", c), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = p, s.currentY = f;
        const m = s.currentX - s.startX,
          h = s.currentY - s.startY;
        if (r.params.threshold && Math.sqrt(m ** 2 + h ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          r.isHorizontal() && s.currentY === s.startY || r.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", c), void 0 === n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling || "touchmove" === c.type && n.preventTouchMoveFromPointerMove) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
        let g = r.isHorizontal() ? m : h,
          v = r.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
        i.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), s.diff = g, g *= i.touchRatio, o && (g = -g, v = -v);
        const w = r.touchesDirection;
        r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
        const y = r.params.loop && !i.cssMode,
          b = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!n.isMoved) {
          if (y && b && r.loopFix({
              direction: r.swipeDirection
            }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            r.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !i.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", c)
        }
        if ((new Date).getTime(), !1 !== i._loopSwapReset && n.isMoved && n.allowThresholdMove && w !== r.touchesDirection && y && b && Math.abs(g) >= 1) return Object.assign(s, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f,
          startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
        r.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
        let S = !0,
          T = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (T = 0), g > 0 ? (y && b && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - ("auto" !== i.slidesPerView && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > r.minTranslate() && (S = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** T))) : g < 0 && (y && b && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + ("auto" !== i.slidesPerView && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === i.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
          }), n.currentTranslate < r.maxTranslate() && (S = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** T))), S && (c.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
          if (!(Math.abs(g) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = r.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function B(e) {
        const t = this,
          r = t.touchEventsData;
        let n, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (n = [...i.changedTouches].find((e => e.identifier === r.touchId)), !n || n.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          n = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: s,
          touches: o,
          rtlTranslate: a,
          slidesGrid: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!s.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = u(),
          f = p - r.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), f < 300 && p - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = u(), c((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let m;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, m = s.followFinger ? a ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
        if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: m
        });
        const h = m >= -t.maxTranslate() && !t.params.loop;
        let g = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== l[e + t] ? (h || m >= l[e] && m < l[e + t]) && (g = e, v = l[e + t] - l[e]) : (h || m >= l[e]) && (g = e, v = l[l.length - 1] - l[l.length - 2])
        }
        let w = null,
          y = null;
        s.rewind && (t.isBeginning ? y = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const b = (m - l[g]) / v,
          S = g < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (f > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? w : g + S) : t.slideTo(g)), "prev" === t.swipeDirection && (b > 1 - s.longSwipesRatio ? t.slideTo(g + S) : null !== y && b < 0 && Math.abs(b) > s.longSwipesRatio ? t.slideTo(y) : t.slideTo(g))
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + S), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : g)) : i.target === t.navigation.nextEl ? t.slideTo(g + S) : t.slideTo(g)
        }
      }

      function H() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: s
        } = e, o = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const a = o && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || a ? e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
      }

      function V(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function W() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: n
          } = e;
        if (!n) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function $(e) {
        const t = this;
        A(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function U() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const q = (e, t) => {
          const r = a(),
            {
              params: n,
              el: i,
              wrapperEl: s,
              device: o
            } = e,
            l = !!n.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          i && "string" != typeof i && (r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), i[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), i[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && i[d]("click", e.onClick, !0), n.cssMode && s[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e[c]("observerUpdate", H, !0), i[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var X = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
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
        threshold: 5,
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
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
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
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function K(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), f(t, r)) : f(t, r)) : f(t, r)
        }
      }
      const Z = {
          eventsEmitter: O,
          update: N,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: n,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return r ? -n : n;
              if (t.cssMode) return n;
              let s = function(e, t) {
                void 0 === t && (t = "x");
                const r = d();
                let n, i, s;
                const o = function(e) {
                  const t = d();
                  let r;
                  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
                }(e);
                return r.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
              }(i, e);
              return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: s,
                  progress: o
                } = r;
              let a, l = 0,
                d = 0;
              r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              a = 0 === c ? 0 : (e - r.minTranslate()) / c, a !== o && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
              const s = this,
                {
                  params: o,
                  wrapperEl: a
                } = s;
              if (s.animating && o.preventInteractionOnTransition) return !1;
              const l = s.minTranslate(),
                d = s.maxTranslate();
              let c;
              if (c = n && e > l ? l : n && e < d ? d : e, s.updateProgress(c), o.cssMode) {
                const e = s.isHorizontal();
                if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!s.support.smoothScroll) return h({
                    swiper: s,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  a.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (s.setTransition(0), s.setTranslate(c), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(c), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, r && s.emit("transitionEnd"))
              }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), z({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), z({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: D,
          loop: R,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = F.bind(e), e.onTouchMove = j.bind(e), e.onTouchEnd = B.bind(e), e.onDocumentTouchStart = U.bind(e), t.cssMode && (e.onScroll = W.bind(e)), e.onClick = V.bind(e), e.onLoad = $.bind(e), q(e, "on")
            },
            detachEvents: function() {
              q(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: n,
                  el: i
                } = e,
                s = n.breakpoints;
              if (!s || s && 0 === Object.keys(s).length) return;
              const o = a(),
                l = "window" !== n.breakpointsBase && n.breakpointsBase ? "container" : n.breakpointsBase,
                d = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : o.querySelector(n.breakpointsBase),
                c = e.getBreakpoint(s, l, d);
              if (!c || e.currentBreakpoint === c) return;
              const u = (c in s ? s[c] : void 0) || e.originalParams,
                p = Y(e, n),
                m = Y(e, u),
                h = e.params.grabCursor,
                g = u.grabCursor,
                v = n.enabled;
              p && !m ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && m && (i.classList.add(`${n.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !g ? e.unsetGrabCursor() : !h && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === u[t]) return;
                const r = n[t] && n[t].enabled,
                  i = u[t] && u[t].enabled;
                r && !i && e[t].disable(), !r && i && e[t].enable()
              }));
              const w = u.direction && u.direction !== n.direction,
                y = n.loop && (u.slidesPerView !== n.slidesPerView || w),
                b = n.loop;
              w && r && e.changeDirection(), f(e.params, u);
              const S = e.params.enabled,
                T = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), v && !S ? e.disable() : !v && S && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", u), r && (y ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && T ? (e.loopCreate(t), e.updateSlides()) : b && !T && e.loopDestroy()), e.emit("breakpoint", u)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let n = !1;
              const i = d(),
                s = "window" === t ? i.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: s * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: s,
                  value: a
                } = o[e];
                "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = s) : a <= r.clientWidth && (n = s)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: n,
                  el: i,
                  device: s
                } = e,
                o = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((n => {
                      e[n] && r.push(t + n)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: n
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: s.android
                }, {
                  ios: s.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...o), i.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
          }
        },
        J = {};
      class Q {
        constructor() {
          let e, t;
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = f({}, t), e && !t.el && (t.el = e);
          const s = a();
          if (t.el && "string" == typeof t.el && s.querySelectorAll(t.el).length > 1) {
            const e = [];
            return s.querySelectorAll(t.el).forEach((r => {
              const n = f({}, t, {
                el: r
              });
              e.push(new Q(n))
            })), e
          }
          const o = this;
          o.__swiper__ = !0, o.support = M(), o.device = C({
            userAgent: t.userAgent
          }), o.browser = _(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
          const l = {};
          o.modules.forEach((e => {
            e({
              params: t,
              swiper: o,
              extendParams: K(t, l),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o)
            })
          }));
          const d = f({}, X, l);
          return o.params = f({}, d, J, t), o.originalParams = f({}, o.params), o.passedParams = f({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
            o.on(e, o.params.on[e])
          })), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
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
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
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
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
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
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: r
          } = this, n = b(g(t, `.${r.slideClass}, swiper-slide`)[0]);
          return b(e) - n
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = g(e, `.${t.slideClass}, swiper-slide`)
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
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * e + n;
          r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
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
          e.slides.forEach((r => {
            const n = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: n
            }), e.emit("_slideClass", r, n)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = n[a] ? Math.ceil(n[a].swiperSlideSize) : 0;
            for (let r = a + 1; r < n.length; r += 1) n[r] && !e && (t += Math.ceil(n[r].swiperSlideSize), l += 1, t > o && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > o && (e = !0))
          } else if ("current" === e)
            for (let e = a + 1; e < n.length; e += 1)(t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          else
            for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && A(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || n()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            n = r.params.direction;
          return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : g(r, n())[0];
          return !i && t.params.createElements && (i = w("div", t.params.wrapperClass), r.append(i), g(r, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: i,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === y(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === y(r, "direction")),
            wrongRTL: "-webkit-box" === y(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? A(t, e) : e.addEventListener("load", (e => {
              A(t, e.target)
            }))
          })), I(t), t.initialized = !0, I(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: n,
              el: i,
              wrapperEl: s,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), s && s.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null), function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          f(J, e)
        }
        static get extendedDefaults() {
          return J
        }
        static get defaults() {
          return X
        }
        static installModule(e) {
          Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
          const t = Q.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => Q.installModule(e))), Q) : (Q.installModule(e), Q)
        }
      }
      Object.keys(Z).forEach((e => {
        Object.keys(Z[e]).forEach((t => {
          Q.prototype[t] = Z[e][t]
        }))
      })), Q.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: n
        } = e;
        const i = d();
        let s = null,
          o = null;
        const a = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          l = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver((e => {
            o = i.requestAnimationFrame((() => {
              const {
                width: r,
                height: n
              } = t;
              let i = r,
                s = n;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: o
                } = e;
                o && o !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, s = n ? n.height : (r[0] || r).blockSize)
              })), i === r && s === n || a()
            }))
          })), s.observe(t.el)) : (i.addEventListener("resize", a), i.addEventListener("orientationchange", l))
        })), r("destroy", (() => {
          o && i.cancelAnimationFrame(o), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", l)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: n,
          emit: i
        } = e;
        const s = [],
          o = d(),
          a = function(e, r) {
            void 0 === r && (r = {});
            const n = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const r = function() {
                i("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(r) : o.setTimeout(r, 0)
            }));
            n.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: t.isElement || (void 0 === r.childList || r).childList,
              characterData: void 0 === r.characterData || r.characterData
            }), s.push(n)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = function(e) {
                const t = [];
                let r = e.parentElement;
                for (; r;) t.push(r), r = r.parentElement;
                return t
              }(t.hostEl);
              for (let t = 0; t < e.length; t += 1) a(e[t])
            }
            a(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), a(t.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          s.forEach((e => {
            e.disconnect()
          })), s.splice(0, s.length)
        }))
      }]);
      const ee = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function te(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function re(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : te(t[r]) && te(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : re(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function ne(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function ie(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function se(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function oe(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function ae(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function le() {
        return le = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, le.apply(this, arguments)
      }

      function de(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function ce(e) {
        const t = [];
        return n.Children.toArray(e).forEach((e => {
          de(e) ? t.push(e) : e.props && e.props.children && ce(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function ue(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach((e => {
          if (de(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = ce(e.props.children);
            n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function pe(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const fe = (0, n.createContext)(null),
        me = (0, n.createContext)(null),
        he = (0, n.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: s = "div",
            children: o,
            onSwiper: a,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, u] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [m, h] = (0, n.useState)(!1), g = (0, n.useRef)(!1), v = (0, n.useRef)(null), w = (0, n.useRef)(null), y = (0, n.useRef)(null), b = (0, n.useRef)(null), S = (0, n.useRef)(null), T = (0, n.useRef)(null), E = (0, n.useRef)(null), x = (0, n.useRef)(null), {
            params: M,
            passedParams: C,
            rest: _,
            events: O
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              n = {},
              i = {};
            re(r, X), r._emitClasses = !0, r.init = !1;
            const s = {},
              o = ee.map((e => e.replace(/_/, ""))),
              a = Object.assign({}, e);
            return Object.keys(a).forEach((a => {
              void 0 !== e[a] && (o.indexOf(a) >= 0 ? te(e[a]) ? (r[a] = {}, i[a] = {}, re(r[a], e[a]), re(i[a], e[a])) : (r[a] = e[a], i[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? n[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s[a] = e[a])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: i,
              rest: s,
              events: n
            }
          }(l), {
            slides: k,
            slots: P
          } = ue(o), A = () => {
            h(!m)
          };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const L = () => {
            Object.assign(M.on, O), d = !0;
            const e = {
              ...M
            };
            if (delete e.wrapperClass, w.current = new Q(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              re(w.current.params.virtual, e), re(w.current.originalParams.virtual, e)
            }
          };
          return v.current || L(), w.current && w.current.on("_beforeBreakpoint", A), (0, n.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", A)
          })), (0, n.useEffect)((() => {
            !g.current && w.current && (w.current.emitSlidesClasses(), g.current = !0)
          })), pe((() => {
            if (t && (t.current = v.current), v.current) return w.current.destroyed && L(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: s,
                  scrollbarEl: o,
                  swiper: a
                } = e;
                ne(t) && n && i && (a.params.navigation.nextEl = n, a.originalParams.navigation.nextEl = n, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), ie(t) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), se(t) && o && (a.params.scrollbar.el = o, a.originalParams.scrollbar.el = o), a.init(r)
              }({
                el: v.current,
                nextEl: S.current,
                prevEl: T.current,
                paginationEl: E.current,
                scrollbarEl: x.current,
                swiper: w.current
              }, M), a && !w.current.destroyed && a(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), pe((() => {
            !d && O && w.current && Object.keys(O).forEach((e => {
              w.current.on(e, O[e])
            }));
            const e = function(e, t, r, n, i) {
              const s = [];
              if (!t) return s;
              const o = e => {
                s.indexOf(e) < 0 && s.push(e)
              };
              if (r && n) {
                const e = n.map(i),
                  t = r.map(i);
                e.join("") !== t.join("") && o("children"), n.length !== r.length && o("children")
              }
              return ee.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (te(e[r]) && te(t[r])) {
                    const n = Object.keys(e[r]),
                      i = Object.keys(t[r]);
                    n.length !== i.length ? o(r) : (n.forEach((n => {
                      e[r][n] !== t[r][n] && o(r)
                    })), i.forEach((n => {
                      e[r][n] !== t[r][n] && o(r)
                    })))
                  } else e[r] !== t[r] && o(r)
              })), s
            }(C, y.current, k, b.current, (e => e.key));
            return y.current = C, b.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: n,
                changedParams: i,
                nextEl: s,
                prevEl: o,
                scrollbarEl: a,
                paginationEl: l
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: u,
                  navigation: p,
                  scrollbar: f,
                  virtual: m,
                  thumbs: h
                } = t;
              let g, v, w, y, b, S, T, E;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && !n.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (g = !0), i.includes("controller") && n.controller && n.controller.control && c.controller && !c.controller.control && (v = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (c.pagination || !1 === c.pagination) && u && !u.el && (w = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || a) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (y = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || s) && (c.navigation || !1 === c.navigation) && p && !p.prevEl && !p.nextEl && (b = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !n.loop ? S = !0 : !c.loop && n.loop ? T = !0 : E = !0), d.forEach((e => {
                if (te(c[e]) && te(n[e])) Object.assign(c[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || x(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = n[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !v && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && r && m && c.virtual.enabled ? (m.slides = r, m.update(!0)) : i.includes("virtual") && m && c.virtual.enabled && (r && (m.slides = r), m.update(!0)), i.includes("children") && r && c.loop && (E = !0), g && h.init() && h.update(!0), v && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), u.init(), u.render(), u.update()), y && (!t.isElement || a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), t.el.appendChild(a)), a && (c.scrollbar.el = a), f.init(), f.updateSize(), f.setTranslate()), b && (t.isElement && (s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-next"), s.innerHTML = t.hostEl.constructor.nextButtonSvg, s.part.add("button-next"), t.el.appendChild(s)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = t.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), t.el.appendChild(o))), s && (c.navigation.nextEl = s), o && (c.navigation.prevEl = o), p.init(), p.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (S || E) && t.loopDestroy(), (T || E) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: k,
              passedParams: C,
              changedParams: e,
              nextEl: S.current,
              prevEl: T.current,
              scrollbarEl: x.current,
              paginationEl: E.current
            }), () => {
              O && w.current && Object.keys(O).forEach((e => {
                w.current.off(e, O[e])
              }))
            }
          })), pe((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), n.createElement(i, le({
            ref: v,
            className: oe(`${c}${r?` ${r}`:""}`)
          }, _), n.createElement(me.Provider, {
            value: w.current
          }, P["container-start"], n.createElement(s, {
            className: ae(M.wrapperClass)
          }, P["wrapper-start"], M.virtual ? function(e, t, r) {
            if (!r) return null;
            const i = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              s = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: o,
                to: a
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= o && e <= a && c.push(t[i(e)]);
            return c.map(((t, r) => n.cloneElement(t, {
              swiper: e,
              style: s,
              key: t.props.virtualIndex || t.key || `slide-${r}`
            })))
          }(w.current, k, p) : k.map(((e, t) => n.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), P["wrapper-end"]), ne(M) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: T,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: S,
            className: "swiper-button-next"
          })), se(M) && n.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), ie(M) && n.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), P["container-end"]))
        }));
      he.displayName = "Swiper";
      const ge = (0, n.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: i,
          className: s = "",
          swiper: o,
          zoom: a,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...u
        } = void 0 === e ? {} : e;
        const p = (0, n.useRef)(null),
          [f, m] = (0, n.useState)("swiper-slide"),
          [h, g] = (0, n.useState)(!1);

        function v(e, t, r) {
          t === p.current && m(r)
        }
        pe((() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && o) {
            if (!o.destroyed) return o.on("_slideClass", v), () => {
              o && o.off("_slideClass", v)
            };
            "swiper-slide" !== f && m("swiper-slide")
          }
        })), pe((() => {
          o && p.current && !o.destroyed && m(o.getSlideClasses(p.current))
        }), [o]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          y = () => "function" == typeof i ? i(w) : i;
        return n.createElement(r, le({
          ref: p,
          className: oe(`${f}${s?` ${s}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            g(!0)
          }
        }, u), a && n.createElement(fe.Provider, {
          value: w
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof a ? a : void 0
        }, y(), l && !h && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !a && n.createElement(fe.Provider, {
          value: w
        }, y(), l && !h && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      ge.displayName = "SwiperSlide"
    },
    79967: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          n = void 0,
          i = void 0,
          s = void 0,
          o = 0;

        function a() {
          s = 0, o = +new Date, i = e.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var e = new Date - o;
          return s || (e >= t ? a() : s = setTimeout(a, t - e)), i
        }
      }
    },
    87144: e => {
      var t, r, n = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
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
          r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
          r = s
        }
      }();
      var a, l = [],
        d = !1,
        c = -1;

      function u() {
        d && a && (d = !1, a.length ? l = a.concat(l) : c = -1, l.length && p())
      }

      function p() {
        if (!d) {
          var e = o(u);
          d = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++c < t;) a && a[c].run();
            c = -1, t = l.length
          }
          a = null, d = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function m() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || d || o(p)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    88433: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    90069: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var n, i = (n = r(45675)) && n.__esModule ? n : {
        default: n
      };
      t.zb = i.default, i.default
    },
    95847: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, s = 0; s < r.length; s++)
          if (!i.call(t, r[s]) || e[r[s]] !== t[r[s]]) return !1;
        return !0
      }
    }
  }
]);