try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1b1772a4-125b-44d8-af32-e4d48f1e1144", e._sentryDebugIdIdentifier = "sentry-dbid-1b1772a4-125b-44d8-af32-e4d48f1e1144")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7785], {
    27785: function(e) {
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
          f = Object.seal,
          m = Object.create,
          d = "undefined" != typeof Reflect && Reflect,
          p = d.apply,
          h = d.construct;
        p || (p = function(e, t, n) {
          return e.apply(t, n)
        }), u || (u = function(e) {
          return e
        }), f || (f = function(e) {
          return e
        }), h || (h = function(e, t) {
          return n(e, r(t))
        });
        var g, y = x(Array.prototype.forEach),
          b = x(Array.prototype.pop),
          T = x(Array.prototype.push),
          v = x(String.prototype.toLowerCase),
          N = x(String.prototype.toString),
          E = x(String.prototype.match),
          w = x(String.prototype.replace),
          _ = x(String.prototype.indexOf),
          A = x(String.prototype.trim),
          S = x(RegExp.prototype.test),
          k = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return h(g, t)
          });

        function x(e) {
          return function(t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return p(e, t, r)
          }
        }

        function O(e, t, n) {
          var r;
          n = null !== (r = n) && void 0 !== r ? r : v, i && i(e, null);
          for (var o = t.length; o--;) {
            var a = t[o];
            if ("string" == typeof a) {
              var c = n(a);
              c !== a && (l(t) || (t[o] = c), a = c)
            }
            e[a] = !0
          }
          return e
        }

        function M(e) {
          var t, n = m(null);
          for (t in e) !0 === p(a, e, [t]) && (n[t] = e[t]);
          return n
        }

        function C(e, t) {
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
        var L = u(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          D = u(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          R = u(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          I = u(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          F = u(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          U = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          H = u(["#text"]),
          z = u(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          P = u(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          B = u(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          j = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          G = f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = f(/<%[\w\W]*|[\w\W]*%>/gm),
          q = f(/\${[\w\W]*}/gm),
          Y = f(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          $ = f(/^aria-[\-\w]+$/),
          K = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          V = f(/^(?:\w+script|data):/i),
          X = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = f(/^html$/i),
          J = f(/^[a-z][.\w]*(-[.\w]+)+$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            o = function(e) {
              return t(e)
            };
          if (o.version = "2.5.8", o.removed = [], !n || !n.document || 9 !== n.document.nodeType) return o.isSupported = !1, o;
          var a = n.document,
            i = n.document,
            l = n.DocumentFragment,
            c = n.HTMLTemplateElement,
            s = n.Node,
            f = n.Element,
            m = n.NodeFilter,
            d = n.NamedNodeMap,
            p = void 0 === d ? n.NamedNodeMap || n.MozNamedAttrMap : d,
            h = n.HTMLFormElement,
            g = n.DOMParser,
            x = n.trustedTypes,
            ee = f.prototype,
            te = C(ee, "cloneNode"),
            ne = C(ee, "nextSibling"),
            re = C(ee, "childNodes"),
            oe = C(ee, "parentNode");
          if ("function" == typeof c) {
            var ae = i.createElement("template");
            ae.content && ae.content.ownerDocument && (i = ae.content.ownerDocument)
          }
          var ie = function(t, n) {
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
            }(x, a),
            le = ie ? ie.createHTML("") : "",
            ce = i,
            se = ce.implementation,
            ue = ce.createNodeIterator,
            fe = ce.createDocumentFragment,
            me = ce.getElementsByTagName,
            de = a.importNode,
            pe = {};
          try {
            pe = M(i).documentMode ? i.documentMode : {}
          } catch (e) {}
          var he = {};
          o.isSupported = "function" == typeof oe && se && void 0 !== se.createHTMLDocument && 9 !== pe;
          var ge, ye, be = G,
            Te = W,
            ve = q,
            Ne = Y,
            Ee = $,
            we = V,
            _e = X,
            Ae = J,
            Se = K,
            ke = null,
            xe = O({}, [].concat(r(L), r(D), r(R), r(F), r(H))),
            Oe = null,
            Me = O({}, [].concat(r(z), r(P), r(B), r(j))),
            Ce = Object.seal(Object.create(null, {
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
            De = null,
            Re = !0,
            Ie = !0,
            Fe = !1,
            Ue = !0,
            He = !1,
            ze = !0,
            Pe = !1,
            Be = !1,
            je = !1,
            Ge = !1,
            We = !1,
            qe = !1,
            Ye = !0,
            $e = !1,
            Ke = !0,
            Ve = !1,
            Xe = {},
            Ze = null,
            Je = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = O({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            nt = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            rt = "http://www.w3.org/1998/Math/MathML",
            ot = "http://www.w3.org/2000/svg",
            at = "http://www.w3.org/1999/xhtml",
            it = at,
            lt = !1,
            ct = null,
            st = O({}, [rt, ot, at], N),
            ut = ["application/xhtml+xml", "text/html"],
            ft = null,
            mt = i.createElement("form"),
            dt = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            pt = function(t) {
              ft && ft === t || (t && "object" === e(t) || (t = {}), t = M(t), ge = ge = -1 === ut.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === ge ? N : v, ke = "ALLOWED_TAGS" in t ? O({}, t.ALLOWED_TAGS, ye) : xe, Oe = "ALLOWED_ATTR" in t ? O({}, t.ALLOWED_ATTR, ye) : Me, ct = "ALLOWED_NAMESPACES" in t ? O({}, t.ALLOWED_NAMESPACES, N) : st, tt = "ADD_URI_SAFE_ATTR" in t ? O(M(nt), t.ADD_URI_SAFE_ATTR, ye) : nt, Qe = "ADD_DATA_URI_TAGS" in t ? O(M(et), t.ADD_DATA_URI_TAGS, ye) : et, Ze = "FORBID_CONTENTS" in t ? O({}, t.FORBID_CONTENTS, ye) : Je, Le = "FORBID_TAGS" in t ? O({}, t.FORBID_TAGS, ye) : {}, De = "FORBID_ATTR" in t ? O({}, t.FORBID_ATTR, ye) : {}, Xe = "USE_PROFILES" in t && t.USE_PROFILES, Re = !1 !== t.ALLOW_ARIA_ATTR, Ie = !1 !== t.ALLOW_DATA_ATTR, Fe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Ue = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, He = t.SAFE_FOR_TEMPLATES || !1, ze = !1 !== t.SAFE_FOR_XML, Pe = t.WHOLE_DOCUMENT || !1, Ge = t.RETURN_DOM || !1, We = t.RETURN_DOM_FRAGMENT || !1, qe = t.RETURN_TRUSTED_TYPE || !1, je = t.FORCE_BODY || !1, Ye = !1 !== t.SANITIZE_DOM, $e = t.SANITIZE_NAMED_PROPS || !1, Ke = !1 !== t.KEEP_CONTENT, Ve = t.IN_PLACE || !1, Se = t.ALLOWED_URI_REGEXP || Se, it = t.NAMESPACE || at, Ce = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && dt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ce.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && dt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ce.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ce.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), He && (Ie = !1), We && (Ge = !0), Xe && (ke = O({}, r(H)), Oe = [], !0 === Xe.html && (O(ke, L), O(Oe, z)), !0 === Xe.svg && (O(ke, D), O(Oe, P), O(Oe, j)), !0 === Xe.svgFilters && (O(ke, R), O(Oe, P), O(Oe, j)), !0 === Xe.mathMl && (O(ke, F), O(Oe, B), O(Oe, j))), t.ADD_TAGS && (ke === xe && (ke = M(ke)), O(ke, t.ADD_TAGS, ye)), t.ADD_ATTR && (Oe === Me && (Oe = M(Oe)), O(Oe, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && O(tt, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ze === Je && (Ze = M(Ze)), O(Ze, t.FORBID_CONTENTS, ye)), Ke && (ke["#text"] = !0), Pe && O(ke, ["html", "head", "body"]), ke.table && (O(ke, ["tbody"]), delete Le.tbody), u && u(t), ft = t)
            },
            ht = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
            gt = O({}, ["annotation-xml"]),
            yt = O({}, ["title", "style", "font", "a", "script"]),
            bt = O({}, D);
          O(bt, R), O(bt, I);
          var Tt = O({}, F);
          O(Tt, U);
          var vt = function(e) {
              T(o.removed, {
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
                T(o.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                T(o.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !Oe[e])
                if (Ge || We) try {
                  vt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Et = function(e) {
              var t, n;
              if (je) e = "<remove></remove>" + e;
              else {
                var r = E(e, /^[\r\n\t ]+/);
                n = r && r[0]
              }
              "application/xhtml+xml" === ge && it === at && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var o = ie ? ie.createHTML(e) : e;
              if (it === at) try {
                t = (new g).parseFromString(o, ge)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = se.createDocument(it, "template", null);
                try {
                  t.documentElement.innerHTML = lt ? le : o
                } catch (e) {}
              }
              var a = t.body || t.documentElement;
              return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), it === at ? me.call(t, Pe ? "html" : "body")[0] : Pe ? t.documentElement : a
            },
            wt = function(e) {
              return ue.call(e.ownerDocument || e, e, m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION, null, !1)
            },
            _t = function(e) {
              return e instanceof h && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof p) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            At = function(t) {
              return "object" === e(s) ? t instanceof s : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            St = function(e, t, n) {
              he[e] && y(he[e], (function(e) {
                e.call(o, t, n, ft)
              }))
            },
            kt = function(e) {
              var t;
              if (St("beforeSanitizeElements", e, null), _t(e)) return vt(e), !0;
              if (S(/[\u0080-\uFFFF]/, e.nodeName)) return vt(e), !0;
              var n = ye(e.nodeName);
              if (St("uponSanitizeElement", e, {
                  tagName: n,
                  allowedTags: ke
                }), e.hasChildNodes() && !At(e.firstElementChild) && (!At(e.content) || !At(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent)) return vt(e), !0;
              if ("select" === n && S(/<template/i, e.innerHTML)) return vt(e), !0;
              if (7 === e.nodeType) return vt(e), !0;
              if (ze && 8 === e.nodeType && S(/<[/\w]/g, e.data)) return vt(e), !0;
              if (!ke[n] || Le[n]) {
                if (!Le[n] && Ot(n)) {
                  if (Ce.tagNameCheck instanceof RegExp && S(Ce.tagNameCheck, n)) return !1;
                  if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)) return !1
                }
                if (Ke && !Ze[n]) {
                  var r = oe(e) || e.parentNode,
                    a = re(e) || e.childNodes;
                  if (a && r)
                    for (var i = a.length - 1; i >= 0; --i) {
                      var l = te(a[i], !0);
                      l.__removalCount = (e.__removalCount || 0) + 1, r.insertBefore(l, ne(e))
                    }
                }
                return vt(e), !0
              }
              return e instanceof f && ! function(e) {
                var t = oe(e);
                t && t.tagName || (t = {
                  namespaceURI: it,
                  tagName: "template"
                });
                var n = v(e.tagName),
                  r = v(t.tagName);
                return !!ct[e.namespaceURI] && (e.namespaceURI === ot ? t.namespaceURI === at ? "svg" === n : t.namespaceURI === rt ? "svg" === n && ("annotation-xml" === r || ht[r]) : Boolean(bt[n]) : e.namespaceURI === rt ? t.namespaceURI === at ? "math" === n : t.namespaceURI === ot ? "math" === n && gt[r] : Boolean(Tt[n]) : e.namespaceURI === at ? !(t.namespaceURI === ot && !gt[r]) && !(t.namespaceURI === rt && !ht[r]) && !Tt[n] && (yt[n] || !bt[n]) : !("application/xhtml+xml" !== ge || !ct[e.namespaceURI]))
              }(e) ? (vt(e), !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (He && 3 === e.nodeType && (t = e.textContent, t = w(t, be, " "), t = w(t, Te, " "), t = w(t, ve, " "), e.textContent !== t && (T(o.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), St("afterSanitizeElements", e, null), !1) : (vt(e), !0)
            },
            xt = function(e, t, n) {
              if (Ye && ("id" === t || "name" === t) && (n in i || n in mt)) return !1;
              if (Ie && !De[t] && S(Ne, t));
              else if (Re && S(Ee, t));
              else if (!Oe[t] || De[t]) {
                if (!(Ot(e) && (Ce.tagNameCheck instanceof RegExp && S(Ce.tagNameCheck, e) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(e)) && (Ce.attributeNameCheck instanceof RegExp && S(Ce.attributeNameCheck, t) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(t)) || "is" === t && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && S(Ce.tagNameCheck, n) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)))) return !1
              } else if (tt[t]);
              else if (S(Se, w(n, _e, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== _(n, "data:") || !Qe[e])
                if (Fe && !S(we, w(n, _e, "")));
                else if (n) return !1;
              return !0
            },
            Ot = function(e) {
              return "annotation-xml" !== e && E(e, Ae)
            },
            Mt = function(t) {
              var n, r, a, i;
              St("beforeSanitizeAttributes", t, null);
              var l = t.attributes;
              if (l && !_t(t)) {
                var c = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: Oe
                };
                for (i = l.length; i--;) {
                  var s = n = l[i],
                    u = s.name,
                    f = s.namespaceURI;
                  if (r = "value" === u ? n.value : A(n.value), a = ye(u), c.attrName = a, c.attrValue = r, c.keepAttr = !0, c.forceKeepAttr = void 0, St("uponSanitizeAttribute", t, c), r = c.attrValue, !c.forceKeepAttr && (Nt(u, t), c.keepAttr))
                    if (Ue || !S(/\/>/i, r)) {
                      He && (r = w(r, be, " "), r = w(r, Te, " "), r = w(r, ve, " "));
                      var m = ye(t.nodeName);
                      if (xt(m, a, r))
                        if (!$e || "id" !== a && "name" !== a || (Nt(u, t), r = "user-content-" + r), ze && S(/((--!?|])>)|<\/(style|title)/i, r)) Nt(u, t);
                        else {
                          if (ie && "object" === e(x) && "function" == typeof x.getAttributeType)
                            if (f);
                            else switch (x.getAttributeType(m, a)) {
                              case "TrustedHTML":
                                r = ie.createHTML(r);
                                break;
                              case "TrustedScriptURL":
                                r = ie.createScriptURL(r)
                            }
                          try {
                            f ? t.setAttributeNS(f, u, r) : t.setAttribute(u, r), _t(t) ? vt(t) : b(o.removed)
                          } catch (e) {}
                        }
                    } else Nt(u, t)
                }
                St("afterSanitizeAttributes", t, null)
              }
            },
            Ct = function e(t) {
              var n, r = wt(t);
              for (St("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) St("uponSanitizeShadowNode", n, null), kt(n), Mt(n), n.content instanceof l && e(n.content);
              St("afterSanitizeShadowDOM", t, null)
            };
          return o.sanitize = function(t) {
            var r, i, c, u, f, m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((lt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !At(t)) {
              if ("function" != typeof t.toString) throw k("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw k("dirty is not a string, aborting")
            }
            if (!o.isSupported) {
              if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                if ("string" == typeof t) return n.toStaticHTML(t);
                if (At(t)) return n.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (Be || pt(m), o.removed = [], "string" == typeof t && (Ve = !1), Ve) {
              if (t.nodeName) {
                var d = ye(t.nodeName);
                if (!ke[d] || Le[d]) throw k("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof s) 1 === (i = (r = Et("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? r = i : r.appendChild(i);
            else {
              if (!Ge && !He && !Pe && -1 === t.indexOf("<")) return ie && qe ? ie.createHTML(t) : t;
              if (!(r = Et(t))) return Ge ? null : qe ? le : ""
            }
            r && je && vt(r.firstChild);
            for (var p = wt(Ve ? t : r); c = p.nextNode();) 3 === c.nodeType && c === u || (kt(c), Mt(c), c.content instanceof l && Ct(c.content), u = c);
            if (u = null, Ve) return t;
            if (Ge) {
              if (We)
                for (f = fe.call(r.ownerDocument); r.firstChild;) f.appendChild(r.firstChild);
              else f = r;
              return (Oe.shadowroot || Oe.shadowrootmod) && (f = de.call(a, f, !0)), f
            }
            var h = Pe ? r.outerHTML : r.innerHTML;
            return Pe && ke["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && S(Z, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h), He && (h = w(h, be, " "), h = w(h, Te, " "), h = w(h, ve, " ")), ie && qe ? ie.createHTML(h) : h
          }, o.setConfig = function(e) {
            pt(e), Be = !0
          }, o.clearConfig = function() {
            ft = null, Be = !1
          }, o.isValidAttribute = function(e, t, n) {
            ft || pt({});
            var r = ye(e),
              o = ye(t);
            return xt(r, o, n)
          }, o.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], T(he[e], t))
          }, o.removeHook = function(e) {
            if (he[e]) return b(he[e])
          }, o.removeHooks = function(e) {
            he[e] && (he[e] = [])
          }, o.removeAllHooks = function() {
            he = {}
          }, o
        }()
      }()
    }
  }
]);