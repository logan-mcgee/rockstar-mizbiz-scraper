try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d16da32a-a2df-4f3c-9234-31c3f812419a", e._sentryDebugIdIdentifier = "sentry-dbid-d16da32a-a2df-4f3c-9234-31c3f812419a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [958], {
    50062(e) {
      e.exports = function() {
        "use strict";

        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e(t)
        }

        function t(e, i) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, i)
        }

        function i(e, r, n) {
          return i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, i, r) {
            var n = [null];
            n.push.apply(n, i);
            var s = new(Function.bind.apply(e, n));
            return r && t(s, r.prototype), s
          }, i.apply(null, arguments)
        }

        function r(e) {
          return function(e) {
            if (Array.isArray(e)) return n(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return n(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
          return r
        }
        var s = Object.hasOwnProperty,
          a = Object.setPrototypeOf,
          o = Object.isFrozen,
          l = Object.getPrototypeOf,
          d = Object.getOwnPropertyDescriptor,
          c = Object.freeze,
          p = Object.seal,
          u = Object.create,
          f = "undefined" != typeof Reflect && Reflect,
          m = f.apply,
          h = f.construct;
        m || (m = function(e, t, i) {
          return e.apply(t, i)
        }), c || (c = function(e) {
          return e
        }), p || (p = function(e) {
          return e
        }), h || (h = function(e, t) {
          return i(e, r(t))
        });
        var g, v = A(Array.prototype.forEach),
          b = A(Array.prototype.pop),
          w = A(Array.prototype.push),
          y = A(String.prototype.toLowerCase),
          S = A(String.prototype.toString),
          E = A(String.prototype.match),
          T = A(String.prototype.replace),
          x = A(String.prototype.indexOf),
          C = A(String.prototype.trim),
          M = A(RegExp.prototype.test),
          k = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return h(g, t)
          });

        function A(e) {
          return function(t) {
            for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
            return m(e, t, r)
          }
        }

        function L(e, t, i) {
          var r;
          i = null !== (r = i) && void 0 !== r ? r : y, a && a(e, null);
          for (var n = t.length; n--;) {
            var s = t[n];
            if ("string" == typeof s) {
              var l = i(s);
              l !== s && (o(t) || (t[n] = l), s = l)
            }
            e[s] = !0
          }
          return e
        }

        function _(e) {
          var t, i = u(null);
          for (t in e) !0 === m(s, e, [t]) && (i[t] = e[t]);
          return i
        }

        function P(e, t) {
          for (; null !== e;) {
            var i = d(e, t);
            if (i) {
              if (i.get) return A(i.get);
              if ("function" == typeof i.value) return A(i.value)
            }
            e = l(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var O = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          I = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          N = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          D = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          z = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          R = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          G = c(["#text"]),
          B = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          F = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          $ = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          H = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          V = p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          j = p(/<%[\w\W]*|[\w\W]*%>/gm),
          W = p(/\${[\w\W]*}/gm),
          U = p(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          q = p(/^aria-[\-\w]+$/),
          Y = p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          X = p(/^(?:\w+script|data):/i),
          K = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = p(/^html$/i),
          J = p(/^[a-z][.\w]*(-[.\w]+)+$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            n = function(e) {
              return t(e)
            };
          if (n.version = "2.5.9", n.removed = [], !i || !i.document || 9 !== i.document.nodeType) return n.isSupported = !1, n;
          var s = i.document,
            a = i.document,
            o = i.DocumentFragment,
            l = i.HTMLTemplateElement,
            d = i.Node,
            p = i.Element,
            u = i.NodeFilter,
            f = i.NamedNodeMap,
            m = void 0 === f ? i.NamedNodeMap || i.MozNamedAttrMap : f,
            h = i.HTMLFormElement,
            g = i.DOMParser,
            A = i.trustedTypes,
            ee = p.prototype,
            te = P(ee, "cloneNode"),
            ie = P(ee, "nextSibling"),
            re = P(ee, "childNodes"),
            ne = P(ee, "parentNode");
          if ("function" == typeof l) {
            var se = a.createElement("template");
            se.content && se.content.ownerDocument && (a = se.content.ownerDocument)
          }
          var ae = function(t, i) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var r = null,
                n = "data-tt-policy-suffix";
              i.currentScript && i.currentScript.hasAttribute(n) && (r = i.currentScript.getAttribute(n));
              var s = "dompurify" + (r ? "#" + r : "");
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
            }(A, s),
            oe = ae ? ae.createHTML("") : "",
            le = a,
            de = le.implementation,
            ce = le.createNodeIterator,
            pe = le.createDocumentFragment,
            ue = le.getElementsByTagName,
            fe = s.importNode,
            me = {};
          try {
            me = _(a).documentMode ? a.documentMode : {}
          } catch (e) {}
          var he = {};
          n.isSupported = "function" == typeof ne && de && void 0 !== de.createHTMLDocument && 9 !== me;
          var ge, ve, be = V,
            we = j,
            ye = W,
            Se = U,
            Ee = q,
            Te = X,
            xe = K,
            Ce = J,
            Me = Y,
            ke = null,
            Ae = L({}, [].concat(r(O), r(I), r(N), r(z), r(G))),
            Le = null,
            _e = L({}, [].concat(r(B), r(F), r($), r(H))),
            Pe = Object.seal(Object.create(null, {
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
            Oe = null,
            Ie = null,
            Ne = !0,
            De = !0,
            ze = !1,
            Re = !0,
            Ge = !1,
            Be = !0,
            Fe = !1,
            $e = !1,
            He = !1,
            Ve = !1,
            je = !1,
            We = !1,
            Ue = !0,
            qe = !1,
            Ye = !0,
            Xe = !1,
            Ke = {},
            Ze = null,
            Je = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = L({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            it = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            rt = "http://www.w3.org/1998/Math/MathML",
            nt = "http://www.w3.org/2000/svg",
            st = "http://www.w3.org/1999/xhtml",
            at = st,
            ot = !1,
            lt = null,
            dt = L({}, [rt, nt, st], S),
            ct = ["application/xhtml+xml", "text/html"],
            pt = null,
            ut = a.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            mt = function(t) {
              pt && pt === t || (t && "object" === e(t) || (t = {}), t = _(t), ge = ge = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ve = "application/xhtml+xml" === ge ? S : y, ke = "ALLOWED_TAGS" in t ? L({}, t.ALLOWED_TAGS, ve) : Ae, Le = "ALLOWED_ATTR" in t ? L({}, t.ALLOWED_ATTR, ve) : _e, lt = "ALLOWED_NAMESPACES" in t ? L({}, t.ALLOWED_NAMESPACES, S) : dt, tt = "ADD_URI_SAFE_ATTR" in t ? L(_(it), t.ADD_URI_SAFE_ATTR, ve) : it, Qe = "ADD_DATA_URI_TAGS" in t ? L(_(et), t.ADD_DATA_URI_TAGS, ve) : et, Ze = "FORBID_CONTENTS" in t ? L({}, t.FORBID_CONTENTS, ve) : Je, Oe = "FORBID_TAGS" in t ? L({}, t.FORBID_TAGS, ve) : {}, Ie = "FORBID_ATTR" in t ? L({}, t.FORBID_ATTR, ve) : {}, Ke = "USE_PROFILES" in t && t.USE_PROFILES, Ne = !1 !== t.ALLOW_ARIA_ATTR, De = !1 !== t.ALLOW_DATA_ATTR, ze = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Ge = t.SAFE_FOR_TEMPLATES || !1, Be = !1 !== t.SAFE_FOR_XML, Fe = t.WHOLE_DOCUMENT || !1, Ve = t.RETURN_DOM || !1, je = t.RETURN_DOM_FRAGMENT || !1, We = t.RETURN_TRUSTED_TYPE || !1, He = t.FORCE_BODY || !1, Ue = !1 !== t.SANITIZE_DOM, qe = t.SANITIZE_NAMED_PROPS || !1, Ye = !1 !== t.KEEP_CONTENT, Xe = t.IN_PLACE || !1, Me = t.ALLOWED_URI_REGEXP || Me, at = t.NAMESPACE || st, Pe = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Pe.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Pe.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Pe.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ge && (De = !1), je && (Ve = !0), Ke && (ke = L({}, r(G)), Le = [], !0 === Ke.html && (L(ke, O), L(Le, B)), !0 === Ke.svg && (L(ke, I), L(Le, F), L(Le, H)), !0 === Ke.svgFilters && (L(ke, N), L(Le, F), L(Le, H)), !0 === Ke.mathMl && (L(ke, z), L(Le, $), L(Le, H))), t.ADD_TAGS && (ke === Ae && (ke = _(ke)), L(ke, t.ADD_TAGS, ve)), t.ADD_ATTR && (Le === _e && (Le = _(Le)), L(Le, t.ADD_ATTR, ve)), t.ADD_URI_SAFE_ATTR && L(tt, t.ADD_URI_SAFE_ATTR, ve), t.FORBID_CONTENTS && (Ze === Je && (Ze = _(Ze)), L(Ze, t.FORBID_CONTENTS, ve)), Ye && (ke["#text"] = !0), Fe && L(ke, ["html", "head", "body"]), ke.table && (L(ke, ["tbody"]), delete Oe.tbody), c && c(t), pt = t)
            },
            ht = L({}, ["mi", "mo", "mn", "ms", "mtext"]),
            gt = L({}, ["annotation-xml"]),
            vt = L({}, ["title", "style", "font", "a", "script"]),
            bt = L({}, I);
          L(bt, N), L(bt, D);
          var wt = L({}, z);
          L(wt, R);
          var yt = function(e) {
              w(n.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                try {
                  e.outerHTML = oe
                } catch (t) {
                  e.remove()
                }
              }
            },
            St = function(e, t) {
              try {
                w(n.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                w(n.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !Le[e])
                if (Ve || je) try {
                  yt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Et = function(e) {
              var t, i;
              if (He) e = "<remove></remove>" + e;
              else {
                var r = E(e, /^[\r\n\t ]+/);
                i = r && r[0]
              }
              "application/xhtml+xml" === ge && at === st && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var n = ae ? ae.createHTML(e) : e;
              if (at === st) try {
                t = (new g).parseFromString(n, ge)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = de.createDocument(at, "template", null);
                try {
                  t.documentElement.innerHTML = ot ? oe : n
                } catch (e) {}
              }
              var s = t.body || t.documentElement;
              return e && i && s.insertBefore(a.createTextNode(i), s.childNodes[0] || null), at === st ? ue.call(t, Fe ? "html" : "body")[0] : Fe ? t.documentElement : s
            },
            Tt = function(e) {
              return ce.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION, null, !1)
            },
            xt = function(e) {
              return e instanceof h && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof m) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            Ct = function(t) {
              return "object" === e(d) ? t instanceof d : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            Mt = function(e, t, i) {
              he[e] && v(he[e], function(e) {
                e.call(n, t, i, pt)
              })
            },
            kt = function(e) {
              var t;
              if (Mt("beforeSanitizeElements", e, null), xt(e)) return yt(e), !0;
              if (M(/[\u0080-\uFFFF]/, e.nodeName)) return yt(e), !0;
              var i = ve(e.nodeName);
              if (Mt("uponSanitizeElement", e, {
                  tagName: i,
                  allowedTags: ke
                }), e.hasChildNodes() && !Ct(e.firstElementChild) && (!Ct(e.content) || !Ct(e.content.firstElementChild)) && M(/<[/\w]/g, e.innerHTML) && M(/<[/\w]/g, e.textContent)) return yt(e), !0;
              if ("select" === i && M(/<template/i, e.innerHTML)) return yt(e), !0;
              if (7 === e.nodeType) return yt(e), !0;
              if (Be && 8 === e.nodeType && M(/<[/\w]/g, e.data)) return yt(e), !0;
              if (!ke[i] || Oe[i]) {
                if (!Oe[i] && Lt(i)) {
                  if (Pe.tagNameCheck instanceof RegExp && M(Pe.tagNameCheck, i)) return !1;
                  if (Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(i)) return !1
                }
                if (Ye && !Ze[i]) {
                  var r = ne(e) || e.parentNode,
                    s = re(e) || e.childNodes;
                  if (s && r)
                    for (var a = s.length - 1; a >= 0; --a) {
                      var o = te(s[a], !0);
                      o.__removalCount = (e.__removalCount || 0) + 1, r.insertBefore(o, ie(e))
                    }
                }
                return yt(e), !0
              }
              return e instanceof p && ! function(e) {
                var t = ne(e);
                t && t.tagName || (t = {
                  namespaceURI: at,
                  tagName: "template"
                });
                var i = y(e.tagName),
                  r = y(t.tagName);
                return !!lt[e.namespaceURI] && (e.namespaceURI === nt ? t.namespaceURI === st ? "svg" === i : t.namespaceURI === rt ? "svg" === i && ("annotation-xml" === r || ht[r]) : Boolean(bt[i]) : e.namespaceURI === rt ? t.namespaceURI === st ? "math" === i : t.namespaceURI === nt ? "math" === i && gt[r] : Boolean(wt[i]) : e.namespaceURI === st ? !(t.namespaceURI === nt && !gt[r]) && !(t.namespaceURI === rt && !ht[r]) && !wt[i] && (vt[i] || !bt[i]) : !("application/xhtml+xml" !== ge || !lt[e.namespaceURI]))
              }(e) ? (yt(e), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !M(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ge && 3 === e.nodeType && (t = e.textContent, t = T(t, be, " "), t = T(t, we, " "), t = T(t, ye, " "), e.textContent !== t && (w(n.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), Mt("afterSanitizeElements", e, null), !1) : (yt(e), !0)
            },
            At = function(e, t, i) {
              if (Ue && ("id" === t || "name" === t) && (i in a || i in ut)) return !1;
              if (De && !Ie[t] && M(Se, t));
              else if (Ne && M(Ee, t));
              else if (!Le[t] || Ie[t]) {
                if (!(Lt(e) && (Pe.tagNameCheck instanceof RegExp && M(Pe.tagNameCheck, e) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(e)) && (Pe.attributeNameCheck instanceof RegExp && M(Pe.attributeNameCheck, t) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(t)) || "is" === t && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && M(Pe.tagNameCheck, i) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(i)))) return !1
              } else if (tt[t]);
              else if (M(Me, T(i, xe, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== x(i, "data:") || !Qe[e])
                if (ze && !M(Te, T(i, xe, "")));
                else if (i) return !1;
              return !0
            },
            Lt = function(e) {
              return "annotation-xml" !== e && E(e, Ce)
            },
            _t = function(t) {
              var i, r, s, a;
              Mt("beforeSanitizeAttributes", t, null);
              var o = t.attributes;
              if (o && !xt(t)) {
                var l = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: Le
                };
                for (a = o.length; a--;) {
                  var d = i = o[a],
                    c = d.name,
                    p = d.namespaceURI;
                  if (r = "value" === c ? i.value : C(i.value), s = ve(c), l.attrName = s, l.attrValue = r, l.keepAttr = !0, l.forceKeepAttr = void 0, Mt("uponSanitizeAttribute", t, l), r = l.attrValue, !l.forceKeepAttr && (St(c, t), l.keepAttr))
                    if (Re || !M(/\/>/i, r)) {
                      Ge && (r = T(r, be, " "), r = T(r, we, " "), r = T(r, ye, " "));
                      var u = ve(t.nodeName);
                      if (At(u, s, r))
                        if (!qe || "id" !== s && "name" !== s || (St(c, t), r = "user-content-" + r), Be && M(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, r)) St(c, t);
                        else {
                          if (ae && "object" === e(A) && "function" == typeof A.getAttributeType)
                            if (p);
                            else switch (A.getAttributeType(u, s)) {
                              case "TrustedHTML":
                                r = ae.createHTML(r);
                                break;
                              case "TrustedScriptURL":
                                r = ae.createScriptURL(r)
                            }
                          try {
                            p ? t.setAttributeNS(p, c, r) : t.setAttribute(c, r), xt(t) ? yt(t) : b(n.removed)
                          } catch (e) {}
                        }
                    } else St(c, t)
                }
                Mt("afterSanitizeAttributes", t, null)
              }
            },
            Pt = function e(t) {
              var i, r = Tt(t);
              for (Mt("beforeSanitizeShadowDOM", t, null); i = r.nextNode();) Mt("uponSanitizeShadowNode", i, null), kt(i), _t(i), i.content instanceof o && e(i.content);
              Mt("afterSanitizeShadowDOM", t, null)
            };
          return n.sanitize = function(t) {
            var r, a, l, c, p, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((ot = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !Ct(t)) {
              if ("function" != typeof t.toString) throw k("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw k("dirty is not a string, aborting")
            }
            if (!n.isSupported) {
              if ("object" === e(i.toStaticHTML) || "function" == typeof i.toStaticHTML) {
                if ("string" == typeof t) return i.toStaticHTML(t);
                if (Ct(t)) return i.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if ($e || mt(u), n.removed = [], "string" == typeof t && (Xe = !1), Xe) {
              if (t.nodeName) {
                var f = ve(t.nodeName);
                if (!ke[f] || Oe[f]) throw k("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof d) 1 === (a = (r = Et("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? r = a : r.appendChild(a);
            else {
              if (!Ve && !Ge && !Fe && -1 === t.indexOf("<")) return ae && We ? ae.createHTML(t) : t;
              if (!(r = Et(t))) return Ve ? null : We ? oe : ""
            }
            r && He && yt(r.firstChild);
            for (var m = Tt(Xe ? t : r); l = m.nextNode();) 3 === l.nodeType && l === c || (kt(l), _t(l), l.content instanceof o && Pt(l.content), c = l);
            if (c = null, Xe) return t;
            if (Ve) {
              if (je)
                for (p = pe.call(r.ownerDocument); r.firstChild;) p.appendChild(r.firstChild);
              else p = r;
              return (Le.shadowroot || Le.shadowrootmod) && (p = fe.call(s, p, !0)), p
            }
            var h = Fe ? r.outerHTML : r.innerHTML;
            return Fe && ke["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && M(Z, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h), Ge && (h = T(h, be, " "), h = T(h, we, " "), h = T(h, ye, " ")), ae && We ? ae.createHTML(h) : h
          }, n.setConfig = function(e) {
            mt(e), $e = !0
          }, n.clearConfig = function() {
            pt = null, $e = !1
          }, n.isValidAttribute = function(e, t, i) {
            pt || mt({});
            var r = ve(e),
              n = ve(t);
            return At(r, n, i)
          }, n.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], w(he[e], t))
          }, n.removeHook = function(e) {
            if (he[e]) return b(he[e])
          }, n.removeHooks = function(e) {
            he[e] && (he[e] = [])
          }, n.removeAllHooks = function() {
            he = {}
          }, n
        }()
      }()
    },
    39279(e, t, i) {
      "use strict";
      i.d(t, {
        A: () => l
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let n;
      const s = new Uint8Array(16);

      function a() {
        if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !n)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return n(s)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const l = function(e, t, i) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const n = (e = e || {}).random || (e.rng || a)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          i = i || 0;
          for (let e = 0; e < 16; ++e) t[i + e] = n[e];
          return t
        }
        return function(e, t = 0) {
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(n)
      }
    },
    26320(e, t, i) {
      "use strict";
      i.d(t, {
        Wx: () => l
      });
      var r = i(93082),
        n = (Object.defineProperty, new Map),
        s = new WeakMap,
        a = 0;

      function o(e, t, i = {}, r = void 0) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          const n = e.getBoundingClientRect();
          return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0,
            time: 0,
            boundingClientRect: n,
            intersectionRect: n,
            rootBounds: n
          }), () => {}
        }
        const {
          id: o,
          observer: l,
          elements: d
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
              return `${t}_${"root"===t?(i=e.root,i?(s.has(i)||(a+=1,s.set(i,a.toString())),s.get(i)):"0"):e[t]}`;
              var i
            }).toString()
          }(e);
          let i = n.get(t);
          if (!i) {
            const r = new Map;
            let s;
            const a = new IntersectionObserver(t => {
              t.forEach(t => {
                var i;
                const n = t.isIntersecting && s.some(e => t.intersectionRatio >= e);
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = n), null == (i = r.get(t.target)) || i.forEach(e => {
                  e(n, t)
                })
              })
            }, e);
            s = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
              id: t,
              observer: a,
              elements: r
            }, n.set(t, i)
          }
          return i
        }(i), c = d.get(e) || [];
        return d.has(e) || d.set(e, c), c.push(t), l.observe(e),
          function() {
            c.splice(c.indexOf(t), 1), 0 === c.length && (d.delete(e), l.unobserve(e)), 0 === d.size && (l.disconnect(), n.delete(o))
          }
      }

      function l({
        threshold: e,
        delay: t,
        trackVisibility: i,
        rootMargin: n,
        root: s,
        triggerOnce: a,
        skip: l,
        initialInView: d,
        fallbackInView: c,
        onChange: p
      } = {}) {
        var u;
        const [f, m] = r.useState(null), h = r.useRef(p), [g, v] = r.useState({
          inView: !!d,
          entry: void 0
        });
        h.current = p, r.useEffect(() => {
          if (l || !f) return;
          let r;
          return r = o(f, (e, t) => {
            v({
              inView: e,
              entry: t
            }), h.current && h.current(e, t), t.isIntersecting && a && r && (r(), r = void 0)
          }, {
            root: s,
            rootMargin: n,
            threshold: e,
            trackVisibility: i,
            delay: t
          }, c), () => {
            r && r()
          }
        }, [Array.isArray(e) ? e.toString() : e, f, s, n, a, l, i, c, t]);
        const b = null == (u = g.entry) ? void 0 : u.target,
          w = r.useRef(void 0);
        f || !b || a || l || w.current === b || (w.current = b, v({
          inView: !!d,
          entry: void 0
        }));
        const y = [m, g.inView, g.entry];
        return y.ref = y[0], y.inView = y[1], y.entry = y[2], y
      }
      r.Component
    },
    50662(e, t, i) {
      "use strict";
      i.d(t, {
        Jq: () => o,
        dK: () => a
      });
      var r = i(37015),
        n = i(20212);

      function s(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }

      function a(e) {
        let {
          swiper: t,
          extendParams: i,
          on: r,
          emit: a
        } = e;
        const o = "swiper-pagination";
        let l;
        i({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`
          }
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function c() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function p(e, i) {
          const {
            bulletActiveClass: r
          } = t.params.pagination;
          e && (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${r}-${i}`), (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${r}-${i}-${i}`))
        }

        function u(e) {
          const i = e.target.closest(s(t.params.pagination.bulletClass));
          if (!i) return;
          e.preventDefault();
          const r = (0, n.i)(i) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            const e = (a = t.realIndex, o = r, (o %= l = t.slides.length) === 1 + (a %= l) ? "next" : o === a - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(r)
          } else t.slideTo(r);
          var a, o, l
        }

        function f() {
          const e = t.rtl,
            i = t.params.pagination;
          if (c()) return;
          let r, o, u = t.pagination.el;
          u = (0, n.m)(u);
          const f = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            m = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (o = t.previousRealIndex || 0, r = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (r = t.snapIndex, o = t.previousSnapIndex) : (o = t.previousIndex || 0, r = t.activeIndex || 0), "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const s = t.pagination.bullets;
            let a, c, f;
            if (i.dynamicBullets && (l = (0, n.h)(s[0], t.isHorizontal() ? "width" : "height", !0), u.forEach(e => {
                e.style[t.isHorizontal() ? "width" : "height"] = l * (i.dynamicMainBullets + 4) + "px"
              }), i.dynamicMainBullets > 1 && void 0 !== o && (d += r - (o || 0), d > i.dynamicMainBullets - 1 ? d = i.dynamicMainBullets - 1 : d < 0 && (d = 0)), a = Math.max(r - d, 0), c = a + (Math.min(s.length, i.dynamicMainBullets) - 1), f = (c + a) / 2), s.forEach(e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${i.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...t)
              }), u.length > 1) s.forEach(e => {
              const s = (0, n.i)(e);
              s === r ? e.classList.add(...i.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), i.dynamicBullets && (s >= a && s <= c && e.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), s === a && p(e, "prev"), s === c && p(e, "next"))
            });
            else {
              const e = s[r];
              if (e && e.classList.add(...i.bulletActiveClass.split(" ")), t.isElement && s.forEach((e, t) => {
                  e.setAttribute("part", t === r ? "bullet-active" : "bullet")
                }), i.dynamicBullets) {
                const e = s[a],
                  t = s[c];
                for (let e = a; e <= c; e += 1) s[e] && s[e].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
                p(e, "prev"), p(t, "next")
              }
            }
            if (i.dynamicBullets) {
              const r = Math.min(s.length, i.dynamicMainBullets + 4),
                n = (l * r - l) / 2 - f * l,
                a = e ? "right" : "left";
              s.forEach(e => {
                e.style[t.isHorizontal() ? a : "top"] = `${n}px`
              })
            }
          }
          u.forEach((e, o) => {
            if ("fraction" === i.type && (e.querySelectorAll(s(i.currentClass)).forEach(e => {
                e.textContent = i.formatFractionCurrent(r + 1)
              }), e.querySelectorAll(s(i.totalClass)).forEach(e => {
                e.textContent = i.formatFractionTotal(m)
              })), "progressbar" === i.type) {
              let n;
              n = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const a = (r + 1) / m;
              let o = 1,
                l = 1;
              "horizontal" === n ? o = a : l = a, e.querySelectorAll(s(i.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
              })
            }
            "custom" === i.type && i.renderCustom ? ((0, n.s)(e, i.renderCustom(t, r + 1, m)), 0 === o && a("paginationRender", e)) : (0 === o && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass)
          })
        }

        function m() {
          const e = t.params.pagination;
          if (c()) return;
          const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let r = t.pagination.el;
          r = (0, n.m)(r);
          let o = "";
          if ("bullets" === e.type) {
            let r = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && r > i && (r = i);
            for (let i = 0; i < r; i += 1) e.renderBullet ? o += e.renderBullet.call(t, i, e.bulletClass) : o += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], r.forEach(i => {
            "custom" !== e.type && (0, n.s)(i, o || ""), "bullets" === e.type && t.pagination.bullets.push(...i.querySelectorAll(s(e.bulletClass)))
          }), "custom" !== e.type && a("paginationRender", r[0])
        }

        function h() {
          t.params.pagination = function(e, t, i, r) {
            return e.params.createElements && Object.keys(r).forEach(s => {
              if (!i[s] && !0 === i.auto) {
                let a = (0, n.e)(e.el, `.${r[s]}`)[0];
                a || (a = (0, n.c)("div", r[s]), a.className = r[s], e.el.append(a)), i[s] = a, t[s] = a
              }
            }), i
          }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let i;
          "string" == typeof e.el && t.isElement && (i = t.el.querySelector(e.el)), i || "string" != typeof e.el || (i = [...document.querySelectorAll(e.el)]), i || (i = e.el), i && 0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(i) && i.length > 1 && (i = [...t.el.querySelectorAll(e.el)], i.length > 1 && (i = i.find(e => (0, n.b)(e, ".swiper")[0] === t.el))), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(t.pagination, {
            el: i
          }), i = (0, n.m)(i), i.forEach(i => {
            "bullets" === e.type && e.clickable && i.classList.add(...(e.clickableClass || "").split(" ")), i.classList.add(e.modifierClass + e.type), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.classList.add(e.progressbarOppositeClass), e.clickable && i.addEventListener("click", u), t.enabled || i.classList.add(e.lockClass)
          }))
        }

        function g() {
          const e = t.params.pagination;
          if (c()) return;
          let i = t.pagination.el;
          i && (i = (0, n.m)(i), i.forEach(i => {
            i.classList.remove(e.hiddenClass), i.classList.remove(e.modifierClass + e.type), i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (i.classList.remove(...(e.clickableClass || "").split(" ")), i.removeEventListener("click", u))
          })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        r("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: i
          } = t.pagination;
          i = (0, n.m)(i), i.forEach(i => {
            i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), r("init", () => {
          !1 === t.params.pagination.enabled ? v() : (h(), m(), f())
        }), r("activeIndexChange", () => {
          void 0 === t.snapIndex && f()
        }), r("snapIndexChange", () => {
          f()
        }), r("snapGridLengthChange", () => {
          m(), f()
        }), r("destroy", () => {
          g()
        }), r("enable disable", () => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }), r("lock unlock", () => {
          f()
        }), r("click", (e, i) => {
          const r = i.target,
            s = (0, n.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && s && s.length > 0 && !r.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && r === t.navigation.nextEl || t.navigation.prevEl && r === t.navigation.prevEl)) return;
            const e = s[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"), s.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass))
          }
        });
        const v = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), g()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, n.m)(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), h(), m(), f()
          },
          disable: v,
          render: m,
          update: f,
          init: h,
          destroy: g
        })
      }

      function o(e) {
        let {
          swiper: t,
          extendParams: i,
          on: a
        } = e;
        i({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
          }
        }), t.a11y = {
          clicked: !1
        };
        let o, l, d = null,
          c = (new Date).getTime();

        function p(e) {
          const t = d;
          0 !== t.length && (0, n.s)(t, e)
        }

        function u(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function f(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function m(e, t) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function h(e, t) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function g(e, t) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
          })
        }

        function v(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function b(e) {
          (e = (0, n.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function w(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const i = t.params.a11y,
            r = e.target;
          if (!t.pagination || !t.pagination.el || r !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(s(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, n.m)(t.navigation.prevEl);
              (0, n.m)(t.navigation.nextEl).includes(r) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? p(i.lastSlideMessage) : p(i.nextSlideMessage)), e.includes(r) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? p(i.firstSlideMessage) : p(i.prevSlideMessage))
            }
            t.pagination && r.matches(s(t.params.pagination.bulletClass)) && r.click()
          }
        }

        function y() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function S() {
          return y() && t.params.pagination.clickable
        }
        const E = (e, t, i) => {
            u(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", w)), g(e, i),
              function(e, t) {
                (e = (0, n.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          T = e => {
            l && l !== e.target && !l.contains(e.target) && (o = !0), t.a11y.clicked = !0
          },
          x = () => {
            o = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1)
              })
            })
          },
          C = e => {
            c = (new Date).getTime()
          },
          M = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - c < 100) return;
            const i = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!i || !t.slides.includes(i)) return;
            l = i;
            const r = t.slides.indexOf(i) === t.activeIndex,
              n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
            r || n || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              o || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(i.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(i)), 0), o = !1)
            }))
          },
          k = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && h(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
            const i = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((r, n) => {
              const s = t.params.loop ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : n;
              g(r, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, i))
            })
          };
        a("beforeInit", () => {
          d = (0, n.c)("span", t.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), a("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(d);
            const i = t.el;
            e.containerRoleDescriptionMessage && h(i, e.containerRoleDescriptionMessage), e.containerMessage && g(i, e.containerMessage), e.containerRole && m(i, e.containerRole);
            const s = t.wrapperEl,
              a = e.id || s.getAttribute("id") || `swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var o;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var c, p;
            c = s, p = a, (c = (0, n.m)(c)).forEach(e => {
                e.setAttribute("id", p)
              }),
              function(e, t) {
                (e = (0, n.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(s, l), k();
            let {
              nextEl: u,
              prevEl: f
            } = t.navigation ? t.navigation : {};
            u = (0, n.m)(u), f = (0, n.m)(f), u && u.forEach(t => E(t, a, e.nextSlideMessage)), f && f.forEach(t => E(t, a, e.prevSlideMessage)), S() && (0, n.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", w)
            }), (0, r.g)().addEventListener("visibilitychange", C), t.el.addEventListener("focus", M, !0), t.el.addEventListener("focus", M, !0), t.el.addEventListener("pointerdown", T, !0), t.el.addEventListener("pointerup", x, !0)
          })()
        }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && k()
        }), a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: i
            } = t.navigation;
            i && (t.isBeginning ? (v(i), f(i)) : (b(i), u(i))), e && (t.isEnd ? (v(e), f(e)) : (b(e), u(e)))
          }()
        }), a("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            y() && t.pagination.bullets.forEach(i => {
              t.params.pagination.clickable && (u(i), t.params.pagination.renderBullet || (m(i, "button"), g(i, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, n.i)(i) + 1)))), i.matches(s(t.params.pagination.bulletActiveClass)) ? i.setAttribute("aria-current", "true") : i.removeAttribute("aria-current")
            })
          }()
        }), a("destroy", () => {
          t.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: i
            } = t.navigation ? t.navigation : {};
            e = (0, n.m)(e), i = (0, n.m)(i), e && e.forEach(e => e.removeEventListener("keydown", w)), i && i.forEach(e => e.removeEventListener("keydown", w)), S() && (0, n.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", w)
            }), (0, r.g)().removeEventListener("visibilitychange", C), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", M, !0), t.el.removeEventListener("pointerdown", T, !0), t.el.removeEventListener("pointerup", x, !0))
          }()
        })
      }
    },
    37015(e, t, i) {
      "use strict";

      function r(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const i = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => i.indexOf(e) < 0).forEach(i => {
          void 0 === e[i] ? e[i] = t[i] : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i])
        })
      }
      i.d(t, {
        a: () => l,
        g: () => a
      });
      const s = {
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
        return n(e, s), e
      }
      const o = {
        document: s,
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
        return n(e, o), e
      }
    },
    20212(e, t, i) {
      "use strict";
      i.d(t, {
        a: () => p,
        b: () => S,
        c: () => g,
        e: () => f,
        f: () => a,
        h: () => E,
        i: () => y,
        k: () => o,
        m: () => T,
        n: () => s,
        q: () => w,
        r: () => b,
        s: () => x,
        t: () => v,
        u: () => u,
        v: () => h,
        w: () => m,
        x: () => c,
        y: () => n
      });
      var r = i(37015);

      function n(e) {
        const t = e;
        Object.keys(t).forEach(e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        })
      }

      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function a() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const i = (0, r.a)();
        let n, s, a;
        const o = function(e) {
          const t = (0, r.a)();
          let i;
          return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
        }(e);
        return i.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new i.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (s = i.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (s = i.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
      }

      function c() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != r && !d(r)) {
            const i = Object.keys(Object(r)).filter(e => t.indexOf(e) < 0);
            for (let t = 0, n = i.length; t < n; t += 1) {
              const n = i[t],
                s = Object.getOwnPropertyDescriptor(r, n);
              void 0 !== s && s.enumerable && (l(e[n]) && l(r[n]) ? r[n].__swiper__ ? e[n] = r[n] : c(e[n], r[n]) : !l(e[n]) && l(r[n]) ? (e[n] = {}, r[n].__swiper__ ? e[n] = r[n] : c(e[n], r[n])) : e[n] = r[n])
            }
          }
        }
        return e
      }

      function p(e, t, i) {
        e.style.setProperty(t, i)
      }

      function u(e) {
        let {
          swiper: t,
          targetPosition: i,
          side: n
        } = e;
        const s = (0, r.a)(),
          a = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const c = i > a ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              r = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + r * (i - a);
            if (p(c, i) && (c = i), t.wrapperEl.scrollTo({
                [n]: c
              }), p(c, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [n]: c
              })
            }), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(u)
          };
        u()
      }

      function f(e, t) {
        void 0 === t && (t = "");
        const i = (0, r.a)(),
          n = [...e.children];
        return i.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter(e => e.matches(t)) : n
      }

      function m(e, t) {
        const i = (0, r.a)();
        let n = t.contains(e);
        return !n && i.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = function(e, t) {
          const i = [t];
          for (; i.length > 0;) {
            const t = i.shift();
            if (e === t) return !0;
            i.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
          }
        }(e, t))), n
      }

      function h(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function g(e, t) {
        void 0 === t && (t = []);
        const i = document.createElement(e);
        return i.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter(e => !!e.trim())
        }(t)), i
      }

      function v(e, t) {
        const i = [];
        for (; e.previousElementSibling;) {
          const r = e.previousElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), e = r
        }
        return i
      }

      function b(e, t) {
        const i = [];
        for (; e.nextElementSibling;) {
          const r = e.nextElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), e = r
        }
        return i
      }

      function w(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function y(e) {
        let t, i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
          return t
        }
      }

      function S(e, t) {
        const i = [];
        let r = e.parentElement;
        for (; r;) t ? r.matches(t) && i.push(r) : i.push(r), r = r.parentElement;
        return i
      }

      function E(e, t, i) {
        const n = (0, r.a)();
        return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function T(e) {
        return (Array.isArray(e) ? e : [e]).filter(e => !!e)
      }

      function x(e, t) {
        void 0 === t && (t = ""), "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
          createHTML: e => e
        }).createHTML(t) : e.innerHTML = t
      }
    },
    14653(e, t, i) {
      "use strict";
      i.d(t, {
        RC: () => Q,
        qr: () => ee
      });
      var r = i(93082),
        n = i(37015),
        s = i(20212);
      let a, o, l;

      function d() {
        return a || (a = function() {
          const e = (0, n.a)(),
            t = (0, n.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const i = d(),
            r = (0, n.a)(),
            s = r.navigator.platform,
            a = t || r.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = r.screen.width,
            c = r.screen.height,
            p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === s;
          let g = "MacIntel" === s;
          return !u && g && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), g = !1), p && !h && (o.os = "android", o.android = !0), (u || m || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }

      function p() {
        return l || (l = function() {
          const e = (0, n.a)(),
            t = c();
          let i = !1;

          function r() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (r()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
              i = e < 16 || 16 === e && r < 2
            }
          }
          const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            a = r();
          return {
            isSafari: i || a,
            needPerspectiveFix: i,
            need3dFix: a || s && t.ios,
            isWebView: s
          }
        }()), l
      }
      var u = {
        on(e, t, i) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const n = i ? "unshift" : "push";
          return e.split(" ").forEach(e => {
            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][n](t)
          }), r
        },
        once(e, t, i) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;

          function n() {
            r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
            t.apply(r, s)
          }
          return n.__emitterProxy = t, r.on(e, n, i)
        },
        onAny(e, t) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof e) return i;
          const r = t ? "unshift" : "push";
          return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e), i
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
        },
        off(e, t) {
          const i = this;
          return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach(e => {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((r, n) => {
              (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
            })
          }), i) : i
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, i, r;
          for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
          return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], i = s.slice(1, s.length), r = e) : (t = s[0].events, i = s[0].data, r = s[0].context || e), i.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
              e.apply(r, [t, ...i])
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
              e.apply(r, i)
            })
          }), e
        }
      };
      const f = (e, t, i) => {
          t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        },
        m = (e, t, i) => {
          t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
              i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            })), t && t.remove()
          }
        },
        g = (e, t) => {
          if (!e.slides[t]) return;
          const i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading")
        },
        v = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            n = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const i = n,
              s = [i - t];
            return s.push(...Array.from({
              length: t
            }).map((e, t) => i + r + t)), void e.slides.forEach((t, i) => {
              s.includes(t.column) && g(e, i)
            })
          }
          const s = n + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = n - t; r <= s + t; r += 1) {
              const t = (r % i + i) % i;
              (t < n || t > s) && g(e, t)
            } else
              for (let r = Math.max(n - t, 0); r <= Math.min(s + t, i - 1); r += 1) r !== n && (r > s || r < n) && g(e, r)
        };
      var b = {
        updateSize: function() {
          const e = this;
          let t, i;
          const r = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt((0, s.q)(r, "padding-left") || 0, 10) - parseInt((0, s.q)(r, "padding-right") || 0, 10), i = i - parseInt((0, s.q)(r, "padding-top") || 0, 10) - parseInt((0, s.q)(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, i) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(i)) || 0)
          }
          const i = e.params,
            {
              wrapperEl: r,
              slidesEl: n,
              size: a,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && i.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, s.e)(n, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const m = [],
            h = [];
          let g = i.slidesOffsetBefore;
          "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
          let v = i.slidesOffsetAfter;
          "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
          const b = e.snapGrid.length,
            w = e.slidesGrid.length;
          let y = i.spaceBetween,
            S = -g,
            E = 0,
            T = 0;
          if (void 0 === a) return;
          "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * a : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, p.forEach(e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          }), i.centeredSlides && i.cssMode && ((0, s.a)(r, "--swiper-centered-offset-before", ""), (0, s.a)(r, "--swiper-centered-offset-after", ""));
          const x = i.grid && i.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const M = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
          for (let r = 0; r < u; r += 1) {
            let n;
            if (C = 0, p[r] && (n = p[r]), x && e.grid.updateSlide(r, n, p), !p[r] || "none" !== (0, s.q)(n, "display")) {
              if ("auto" === i.slidesPerView) {
                M && (p[r].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(n),
                  o = n.style.transform,
                  l = n.style.webkitTransform;
                if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? (0, s.h)(n, "width", !0) : (0, s.h)(n, "height", !0);
                else {
                  const e = t(a, "width"),
                    i = t(a, "padding-left"),
                    r = t(a, "padding-right"),
                    s = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + s + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = n;
                    C = e + i + r + s + o + (a - t)
                  }
                }
                o && (n.style.transform = o), l && (n.style.webkitTransform = l), i.roundLengths && (C = Math.floor(C))
              } else C = (a - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[r] && (p[r].style[e.getDirectionLabel("width")] = `${C}px`);
              p[r] && (p[r].swiperSlideSize = C), h.push(C), i.centeredSlides ? (S = S + C / 2 + E / 2 + y, 0 === E && 0 !== r && (S = S - a / 2 - y), 0 === r && (S = S - a / 2 - y), Math.abs(S) < .001 && (S = 0), i.roundLengths && (S = Math.floor(S)), T % i.slidesPerGroup === 0 && f.push(S), m.push(S)) : (i.roundLengths && (S = Math.floor(S)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && f.push(S), m.push(S), S = S + C + y), e.virtualSize += C + y, E = C, T += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + v, o && l && ("slide" === i.effect || "coverflow" === i.effect) && (r.style.width = `${e.virtualSize+y}px`), i.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), x && e.grid.updateWrapperSize(C, f), !i.centeredSlides) {
            const t = [];
            for (let r = 0; r < f.length; r += 1) {
              let n = f[r];
              i.roundLengths && (n = Math.floor(n)), f[r] <= e.virtualSize - a && t.push(n)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && i.loop) {
            const t = h[0] + y;
            if (i.slidesPerGroup > 1) {
              const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
                n = t * i.slidesPerGroup;
              for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + n)
            }
            for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === i.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== y) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter((e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1).forEach(e => {
              e.style[t] = `${y}px`
            })
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            h.forEach(t => {
              e += t + (y || 0)
            }), e -= y;
            const t = e > a ? e - a : 0;
            f = f.map(e => e <= 0 ? -g : e > t ? t + v : e)
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            h.forEach(t => {
              e += t + (y || 0)
            }), e -= y;
            const t = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
            if (e + t < a) {
              const i = (a - e - t) / 2;
              f.forEach((e, t) => {
                f[t] = e - i
              }), m.forEach((e, t) => {
                m[t] = e + i
              })
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: h
            }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
            (0, s.a)(r, "--swiper-centered-offset-before", -f[0] + "px"), (0, s.a)(r, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + i)
          }
          if (u !== c && e.emit("slidesLengthChange"), f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
            const t = `${i.containerModifierClass}backface-hidden`,
              r = e.el.classList.contains(t);
            u <= i.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            i = [],
            r = t.virtual && t.params.virtual.enabled;
          let n, s = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach(e => {
              i.push(e)
            });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !r) break;
                i.push(a(e))
              } else i.push(a(t.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const e = i[n].offsetHeight;
              s = e > s ? e : s
            }(s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - i - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            i = t.params,
            {
              slides: r,
              rtlTranslate: n,
              snapGrid: s
            } = t;
          if (0 === r.length) return;
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          n && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = i.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < r.length; e += 1) {
            const l = r[e];
            let d = l.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (d -= r[0].swiperSlideOffset);
            const c = (a + (i.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = (a - s[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = -(a - d),
              m = u + t.slidesSizesGrid[e],
              h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
              g = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
            g && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), f(l, g, i.slideVisibleClass), f(l, h, i.slideFullyVisibleClass), l.progress = n ? -c : c, l.originalProgress = n ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * i || 0
          }
          const i = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let {
            progress: n,
            isBeginning: s,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = s,
            d = a;
          if (0 === r) n = 0, s = !0, a = !0;
          else {
            n = (e - t.minTranslate()) / r;
            const i = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            s = i || n <= 0, a = o || n >= 1, i && (n = 0), o && (n = 1)
          }
          if (i.loop) {
            const i = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              n = t.slidesGrid[i],
              s = t.slidesGrid[r],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= n ? (l - n) / a : (l + a - s) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: n,
            progressLoop: o,
            isBeginning: s,
            isEnd: a
          }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: i,
              slidesEl: r,
              activeIndex: n
            } = e,
            a = e.virtual && i.virtual.enabled,
            o = e.grid && i.grid && i.grid.rows > 1,
            l = e => (0, s.e)(r, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, p;
          if (a)
            if (i.loop) {
              let t = n - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${n}"]`);
          else o ? (d = t.find(e => e.column === n), p = t.find(e => e.column === n + 1), c = t.find(e => e.column === n - 1)) : d = t[n];
          d && (o || (p = (0, s.r)(d, `.${i.slideClass}, swiper-slide`)[0], i.loop && !p && (p = t[0]), c = (0, s.t)(d, `.${i.slideClass}, swiper-slide`)[0], i.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach(e => {
            m(e, e === d, i.slideActiveClass), m(e, e === p, i.slideNextClass), m(e, e === c, i.slidePrevClass)
          }), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: n,
              activeIndex: s,
              realIndex: a,
              snapIndex: o
            } = t;
          let l, d = e;
          const c = e => {
            let i = e - t.virtual.slidesBefore;
            return i < 0 && (i = t.virtual.slides.length + i), i >= t.virtual.slides.length && (i -= t.virtual.slides.length), i
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: i
              } = e, r = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2 ? n = e : r >= t[e] && r < t[e + 1] && (n = e + 1) : r >= t[e] && (n = e);
              return i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            }(t)), r.indexOf(i) >= 0) l = r.indexOf(i);
          else {
            const e = Math.min(n.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / n.slidesPerGroup)
          }
          if (l >= r.length && (l = r.length - 1), d === s && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && n.grid && n.grid.rows > 1;
          let u;
          if (t.virtual && n.virtual.enabled && n.loop) u = c(d);
          else if (p) {
            const e = t.slides.find(e => e.column === d);
            let i = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(i) && (i = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(i / n.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: s,
            activeIndex: d
          }), t.initialized && v(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const i = this,
            r = i.params;
          let n = e.closest(`.${r.slideClass}, swiper-slide`);
          !n && i.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
            !n && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (n = e)
          });
          let s, a = !1;
          if (n)
            for (let e = 0; e < i.slides.length; e += 1)
              if (i.slides[e] === n) {
                a = !0, s = e;
                break
              } if (!n || !a) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
          i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = s, r.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
        }
      };

      function w(e) {
        let {
          swiper: t,
          runCallbacks: i,
          direction: r,
          step: n
        } = e;
        const {
          activeIndex: s,
          previousIndex: a
        } = t;
        let o = r;
        o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${n}`), i && "reset" === o ? t.emit(`slideResetTransition${n}`) : i && s !== a && (t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`))
      }
      var y = {
          slideTo: function(e, t, i, r, n) {
            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: u,
              activeIndex: f,
              rtlTranslate: m,
              wrapperEl: h,
              enabled: g
            } = a;
            if (!g && !r && !n || a.destroyed || a.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = a.params.speed);
            const v = Math.min(a.params.slidesPerGroupSkip, o);
            let b = v + Math.floor((o - v) / a.params.slidesPerGroup);
            b >= d.length && (b = d.length - 1);
            const w = -d[b];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  i = Math.floor(100 * c[e]),
                  r = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= i && t < r - (r - i) / 2 ? o = e : t >= i && t < r && (o = e + 1) : t >= i && (o = e)
              }
            if (a.initialized && o !== f) {
              if (!a.allowSlideNext && (m ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (f || 0) !== o) return !1
            }
            let y;
            o !== (u || 0) && i && a.emit("beforeSlideChangeStart"), a.updateProgress(w), y = o > f ? "next" : o < f ? "prev" : "reset";
            const S = a.virtual && a.params.virtual.enabled;
            if ((!S || !n) && (m && -w === a.translate || !m && w === a.translate)) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(w), "reset" !== y && (a.transitionStart(i, y), a.transitionEnd(i, y)), !1;
            if (l.cssMode) {
              const e = a.isHorizontal(),
                i = m ? w : -w;
              if (0 === t) S && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), S && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                h[e ? "scrollLeft" : "scrollTop"] = i
              })) : h[e ? "scrollLeft" : "scrollTop"] = i, S && requestAnimationFrame(() => {
                a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
              });
              else {
                if (!a.support.smoothScroll) return (0, s.u)({
                  swiper: a,
                  targetPosition: i,
                  side: e ? "left" : "top"
                }), !0;
                h.scrollTo({
                  [e ? "left" : "top"]: i,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const E = p().isSafari;
            return S && !n && E && a.isElement && a.virtual.update(!1, !1, o), a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, r), a.transitionStart(i, y), 0 === t ? a.transitionEnd(i, y) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, y))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, i, r) {
            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            if (n.destroyed) return;
            void 0 === t && (t = n.params.speed);
            const s = n.grid && n.params.grid && n.params.grid.rows > 1;
            let a = e;
            if (n.params.loop)
              if (n.virtual && n.params.virtual.enabled) a += n.virtual.slidesBefore;
              else {
                let e;
                if (s) {
                  const t = a * n.params.grid.rows;
                  e = n.slides.find(e => 1 * e.getAttribute("data-swiper-slide-index") === t).column
                } else e = n.getSlideIndexByData(a);
                const t = s ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                  {
                    centeredSlides: i
                  } = n.params;
                let o = n.params.slidesPerView;
                "auto" === o ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(n.params.slidesPerView, 10)), i && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (i && (l = l || e < Math.ceil(o / 2)), r && i && "auto" !== n.params.slidesPerView && !s && (l = !1), l) {
                  const r = i ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                  n.loopFix({
                    direction: r,
                    slideTo: !0,
                    activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === r ? n.realIndex : void 0
                  })
                }
                if (s) {
                  const e = a * n.params.grid.rows;
                  a = n.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                } else a = n.getSlideIndexByData(a)
              } return requestAnimationFrame(() => {
              n.slideTo(a, t, i, r)
            }), n
          },
          slideNext: function(e, t, i) {
            void 0 === t && (t = !0);
            const r = this,
              {
                enabled: n,
                params: s,
                animating: a
              } = r;
            if (!n || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            let o = s.slidesPerGroup;
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
            const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
              d = r.virtual && s.virtual.enabled;
            if (s.loop) {
              if (a && !d && s.loopPreventsSliding) return !1;
              if (r.loopFix({
                  direction: "next"
                }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && s.cssMode) return requestAnimationFrame(() => {
                r.slideTo(r.activeIndex + l, e, t, i)
              }), !0
            }
            return s.rewind && r.isEnd ? r.slideTo(0, e, t, i) : r.slideTo(r.activeIndex + l, e, t, i)
          },
          slidePrev: function(e, t, i) {
            void 0 === t && (t = !0);
            const r = this,
              {
                params: n,
                snapGrid: s,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = r;
            if (!l || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            const c = r.virtual && n.virtual.enabled;
            if (n.loop) {
              if (d && !c && n.loopPreventsSliding) return !1;
              r.loopFix({
                direction: "prev"
              }), r._clientLeft = r.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(o ? r.translate : -r.translate),
              f = s.map(e => p(e)),
              m = n.freeMode && n.freeMode.enabled;
            let h = s[f.indexOf(u) - 1];
            if (void 0 === h && (n.cssMode || m)) {
              let e;
              s.forEach((t, i) => {
                u >= t && (e = i)
              }), void 0 !== e && (h = m ? s[e] : s[e > 0 ? e - 1 : e])
            }
            let g = 0;
            if (void 0 !== h && (g = a.indexOf(h), g < 0 && (g = r.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (g = g - r.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), n.rewind && r.isBeginning) {
              const n = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
              return r.slideTo(n, e, t, i)
            }
            return n.loop && 0 === r.activeIndex && n.cssMode ? (requestAnimationFrame(() => {
              r.slideTo(g, e, t, i)
            }), !0) : r.slideTo(g, e, t, i)
          },
          slideReset: function(e, t, i) {
            void 0 === t && (t = !0);
            const r = this;
            if (!r.destroyed) return void 0 === e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, i)
          },
          slideToClosest: function(e, t, i, r) {
            void 0 === t && (t = !0), void 0 === r && (r = .5);
            const n = this;
            if (n.destroyed) return;
            void 0 === e && (e = n.params.speed);
            let s = n.activeIndex;
            const a = Math.min(n.params.slidesPerGroupSkip, s),
              o = a + Math.floor((s - a) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[o]) {
              const e = n.snapGrid[o];
              l - e > (n.snapGrid[o + 1] - e) * r && (s += n.params.slidesPerGroup)
            } else {
              const e = n.snapGrid[o - 1];
              l - e <= (n.snapGrid[o] - e) * r && (s -= n.params.slidesPerGroup)
            }
            return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, e, t, i)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: i
            } = e, r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, a = e.getSlideIndexWhenGrid(e.clickedIndex);
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
              l = e.grid && e.params.grid && e.params.grid.rows > 1;
            if (t.loop) {
              if (e.animating) return;
              n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(n) : a > (l ? (e.slides.length - r) / 2 - (e.params.grid.rows - 1) : e.slides.length - r) ? (e.loopFix(), a = e.getSlideIndex((0, s.e)(i, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, s.n)(() => {
                e.slideTo(a)
              })) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        S = {
          loopCreate: function(e, t) {
            const i = this,
              {
                params: r,
                slidesEl: n
              } = i;
            if (!r.loop || i.virtual && i.params.virtual.enabled) return;
            const a = () => {
                (0, s.e)(n, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                })
              },
              o = i.grid && r.grid && r.grid.rows > 1;
            r.loopAddBlankSlides && (r.slidesPerGroup > 1 || o) && (() => {
              const e = (0, s.e)(n, `.${r.slideBlankClass}`);
              e.forEach(e => {
                e.remove()
              }), e.length > 0 && (i.recalcSlides(), i.updateSlides())
            })();
            const l = r.slidesPerGroup * (o ? r.grid.rows : 1),
              d = i.slides.length % l !== 0,
              c = o && i.slides.length % r.grid.rows !== 0,
              p = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = i.isElement ? (0, s.c)("swiper-slide", [r.slideBlankClass]) : (0, s.c)("div", [r.slideClass, r.slideBlankClass]);
                  i.slidesEl.append(e)
                }
              };
            d ? (r.loopAddBlankSlides ? (p(l - i.slides.length % l), i.recalcSlides(), i.updateSlides()) : (0, s.v)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : c ? (r.loopAddBlankSlides ? (p(r.grid.rows - i.slides.length % r.grid.rows), i.recalcSlides(), i.updateSlides()) : (0, s.v)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : a(), i.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: i = !0,
              direction: r,
              setTranslate: n,
              activeSlideIndex: a,
              initial: o,
              byController: l,
              byMousewheel: d
            } = void 0 === e ? {} : e;
            const c = this;
            if (!c.params.loop) return;
            c.emit("beforeLoopFix");
            const {
              slides: p,
              allowSlidePrev: u,
              allowSlideNext: f,
              slidesEl: m,
              params: h
            } = c, {
              centeredSlides: g,
              initialSlide: v
            } = h;
            if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && h.virtual.enabled) return i && (h.centeredSlides || 0 !== c.snapIndex ? h.centeredSlides && c.snapIndex < h.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = u, c.allowSlideNext = f, void c.emit("loopFix");
            let b = h.slidesPerView;
            "auto" === b ? b = c.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(h.slidesPerView, 10)), g && b % 2 == 0 && (b += 1));
            const w = h.slidesPerGroupAuto ? b : h.slidesPerGroup;
            let y = g ? Math.max(w, Math.ceil(b / 2)) : w;
            y % w !== 0 && (y += w - y % w), y += h.loopAdditionalSlides, c.loopedSlides = y;
            const S = c.grid && h.grid && h.grid.rows > 1;
            p.length < b + y || "cards" === c.params.effect && p.length < b + 2 * y ? (0, s.v)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === h.grid.fill && (0, s.v)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const E = [],
              T = [],
              x = S ? Math.ceil(p.length / h.grid.rows) : p.length,
              C = o && x - v < b && !g;
            let M = C ? v : c.activeIndex;
            void 0 === a ? a = c.getSlideIndex(p.find(e => e.classList.contains(h.slideActiveClass))) : M = a;
            const k = "next" === r || !r,
              A = "prev" === r || !r;
            let L = 0,
              _ = 0;
            const P = (S ? p[a].column : a) + (g && void 0 === n ? -b / 2 + .5 : 0);
            if (P < y) {
              L = Math.max(y - P, w);
              for (let e = 0; e < y - P; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (S) {
                  const e = x - t - 1;
                  for (let t = p.length - 1; t >= 0; t -= 1) p[t].column === e && E.push(t)
                } else E.push(x - t - 1)
              }
            } else if (P + b > x - y) {
              _ = Math.max(P - (x - 2 * y), w), C && (_ = Math.max(_, b - x + v + 1));
              for (let e = 0; e < _; e += 1) {
                const t = e - Math.floor(e / x) * x;
                S ? p.forEach((e, i) => {
                  e.column === t && T.push(i)
                }) : T.push(t)
              }
            }
            if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
                c.__preventObserver__ = !1
              }), "cards" === c.params.effect && p.length < b + 2 * y && (T.includes(a) && T.splice(T.indexOf(a), 1), E.includes(a) && E.splice(E.indexOf(a), 1)), A && E.forEach(e => {
                p[e].swiperLoopMoveDOM = !0, m.prepend(p[e]), p[e].swiperLoopMoveDOM = !1
              }), k && T.forEach(e => {
                p[e].swiperLoopMoveDOM = !0, m.append(p[e]), p[e].swiperLoopMoveDOM = !1
              }), c.recalcSlides(), "auto" === h.slidesPerView ? c.updateSlides() : S && (E.length > 0 && A || T.length > 0 && k) && c.slides.forEach((e, t) => {
                c.grid.updateSlide(t, e, c.slides)
              }), h.watchSlidesProgress && c.updateSlidesOffset(), i)
              if (E.length > 0 && A) {
                if (void 0 === t) {
                  const e = c.slidesGrid[M],
                    t = c.slidesGrid[M + L] - e;
                  d ? c.setTranslate(c.translate - t) : (c.slideTo(M + Math.ceil(L), 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                } else if (n) {
                  const e = S ? E.length / h.grid.rows : E.length;
                  c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                }
              } else if (T.length > 0 && k)
              if (void 0 === t) {
                const e = c.slidesGrid[M],
                  t = c.slidesGrid[M - _] - e;
                d ? c.setTranslate(c.translate - t) : (c.slideTo(M - _, 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
              } else {
                const e = S ? T.length / h.grid.rows : T.length;
                c.slideTo(c.activeIndex - e, 0, !1, !0)
              } if (c.allowSlidePrev = u, c.allowSlideNext = f, c.controller && c.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: r,
                setTranslate: n,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(c.controller.control) ? c.controller.control.forEach(t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && i
                })
              }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                ...e,
                slideTo: c.controller.control.params.slidesPerView === h.slidesPerView && i
              })
            }
            c.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: i
              } = e;
            if (!t.loop || !i || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const r = [];
            e.slides.forEach(e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              r[t] = e
            }), e.slides.forEach(e => {
              e.removeAttribute("data-swiper-slide-index")
            }), r.forEach(e => {
              i.append(e)
            }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function E(e, t, i) {
        const r = (0, n.a)(),
          {
            params: s
          } = e,
          a = s.edgeSwipeDetection,
          o = s.edgeSwipeThreshold;
        return !a || !(i <= o || i >= r.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function T(e) {
        const t = this,
          i = (0, n.g)();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId
        } else "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) return void E(t, r, r.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = r.target;
        if ("wrapper" === o.touchEventsTarget && !(0, s.w)(c, t.wrapperEl)) return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!o.noSwipingClass && "" !== o.noSwipingClass,
          u = r.composedPath ? r.composedPath() : r.path;
        p && r.target && r.target.shadowRoot && u && (c = u[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          m = !(!r.target || !r.target.shadowRoot);
        if (o.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(i) {
                if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const r = i.closest(e);
                return r || i.getRootNode ? r || t(i.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = r.pageX, l.currentY = r.pageY;
        const h = l.currentX,
          g = l.currentY;
        if (!E(t, r, h)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = h, l.startY = g, a.touchStartTime = (0, s.f)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
        let v = !0;
        c.matches(a.focusableElements) && (v = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), i.activeElement && i.activeElement.matches(a.focusableElements) && i.activeElement !== c && ("mouse" === r.pointerType || "mouse" !== r.pointerType && !c.matches(a.focusableElements)) && i.activeElement.blur();
        const b = v && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !b || c.isContentEditable || r.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
      }

      function x(e) {
        const t = (0, n.g)(),
          i = this,
          r = i.touchEventsData,
          {
            params: a,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = i;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== r.touchId) return;
          if (p.pointerId !== r.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].find(e => e.identifier === r.touchId), !c || c.identifier !== r.touchId) return
        } else c = p;
        if (!r.isTouched) return void(r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", p));
        const u = c.pageX,
          f = c.pageY;
        if (p.preventedByNestedSwiper) return o.startX = u, void(o.startY = f);
        if (!i.allowTouchMove) return p.target.matches(r.focusableElements) || (i.allowClick = !1), void(r.isTouched && (Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), r.touchStartTime = (0, s.f)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (i.isVertical()) {
            if (f < o.startY && i.translate <= i.maxTranslate() || f > o.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
          } else {
            if (l && (u > o.startX && -i.translate <= i.maxTranslate() || u < o.startX && -i.translate >= i.minTranslate())) return;
            if (!l && (u < o.startX && i.translate <= i.maxTranslate() || u > o.startX && i.translate >= i.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(r.focusableElements)) return r.isMoved = !0, void(i.allowClick = !1);
        r.allowTouchCallbacks && i.emit("touchMove", p), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = f;
        const m = o.currentX - o.startX,
          h = o.currentY - o.startY;
        if (i.params.threshold && Math.sqrt(m ** 2 + h ** 2) < i.params.threshold) return;
        if (void 0 === r.isScrolling) {
          let e;
          i.isHorizontal() && o.currentY === o.startY || i.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, r.isScrolling = i.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (r.isScrolling && i.emit("touchMoveOpposite", p), void 0 === r.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (r.startMoving = !0)), r.isScrolling || "touchmove" === p.type && r.preventTouchMoveFromPointerMove) return void(r.isTouched = !1);
        if (!r.startMoving) return;
        i.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let g = i.isHorizontal() ? m : h,
          v = i.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), o.diff = g, g *= a.touchRatio, l && (g = -g, v = -v);
        const b = i.touchesDirection;
        i.swipeDirection = g > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
        const w = i.params.loop && !a.cssMode,
          y = "next" === i.touchesDirection && i.allowSlideNext || "prev" === i.touchesDirection && i.allowSlidePrev;
        if (!r.isMoved) {
          if (w && y && i.loopFix({
              direction: i.swipeDirection
            }), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            i.wrapperEl.dispatchEvent(e)
          }
          r.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), !1 !== a._loopSwapReset && r.isMoved && r.allowThresholdMove && b !== i.touchesDirection && w && y && Math.abs(g) >= 1) return Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: r.currentTranslate
        }), r.loopSwapReset = !0, void(r.startTranslate = r.currentTranslate);
        i.emit("sliderMove", p), r.isMoved = !0, r.currentTranslate = g + r.startTranslate;
        let S = !0,
          E = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (E = 0), g > 0 ? (w && y && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - ("auto" !== a.slidesPerView && i.slides.length - a.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), r.currentTranslate > i.minTranslate() && (S = !1, a.resistance && (r.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + r.startTranslate + g) ** E))) : g < 0 && (w && y && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + ("auto" !== a.slidesPerView && i.slides.length - a.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: i.slides.length - ("auto" === a.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), r.currentTranslate < i.maxTranslate() && (S = !1, a.resistance && (r.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - r.startTranslate - g) ** E))), S && (p.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), i.allowSlidePrev || i.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
          if (!(Math.abs(g) > a.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove) return r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, void(o.diff = i.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
      }

      function C(e) {
        const t = this,
          i = t.touchEventsData;
        let r, n = e;
        if (n.originalEvent && (n = n.originalEvent), "touchend" === n.type || "touchcancel" === n.type) {
          if (r = [...n.changedTouches].find(e => e.identifier === i.touchId), !r || r.identifier !== i.touchId) return
        } else {
          if (null !== i.touchId) return;
          if (n.pointerId !== i.pointerId) return;
          r = n
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && (!["pointercancel", "contextmenu"].includes(n.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        i.pointerId = null, i.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === n.pointerType) return;
        if (i.allowTouchCallbacks && t.emit("touchEnd", n), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && a.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        a.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, s.f)(),
          u = p - i.touchStartTime;
        if (t.allowClick) {
          const e = n.path || n.composedPath && n.composedPath();
          t.updateClickedSlide(e && e[0] || n.target, e), t.emit("tap click", n), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
        }
        if (i.lastClickTime = (0, s.f)(), (0, s.n)(() => {
            t.destroyed || (t.allowClick = !0)
          }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === o.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        let f;
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, f = a.followFinger ? l ? t.translate : -t.translate : -i.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const m = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (m || f >= d[e] && f < d[e + t]) && (h = e, g = d[e + t] - d[e]) : (m || f >= d[e]) && (h = e, g = d[d.length - 1] - d[d.length - 2])
        }
        let v = null,
          b = null;
        a.rewind && (t.isBeginning ? b = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
        const w = (f - d[h]) / g,
          y = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (u > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? v : h + y) : t.slideTo(h)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(h + y) : null !== b && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(b) : t.slideTo(h))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || n.target !== t.navigation.nextEl && n.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + y), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : h)) : n.target === t.navigation.nextEl ? t.slideTo(h + y) : t.slideTo(h)
        }
      }

      function M() {
        const e = this,
          {
            params: t,
            el: i
          } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: r,
          allowSlidePrev: n,
          snapGrid: s
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }, 500)), e.allowSlidePrev = n, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
      }

      function k(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function A() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: i,
            enabled: r
          } = e;
        if (!r) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, n !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function L(e) {
        const t = this;
        h(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function _() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const P = (e, t) => {
          const i = (0, n.g)(),
            {
              params: r,
              el: s,
              wrapperEl: a,
              device: o
            } = e,
            l = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          s && "string" != typeof s && (i[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), s[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), s[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), i[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), i[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), i[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), i[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), i[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), i[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), i[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), i[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), i[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (r.preventClicks || r.preventClicksPropagation) && s[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", M, !0) : e[c]("observerUpdate", M, !0), s[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        O = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var I = {
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

      function N(e, t) {
        return function(i) {
          void 0 === i && (i = {});
          const r = Object.keys(i)[0],
            n = i[r];
          "object" == typeof n && null !== n ? (!0 === e[r] && (e[r] = {
            enabled: !0
          }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in n ? ("object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
            enabled: !1
          }), (0, s.x)(t, i)) : (0, s.x)(t, i)) : (0, s.x)(t, i)
        }
      }
      const D = {
          eventsEmitter: u,
          update: b,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: n
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let a = (0, s.k)(n, e);
              return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const i = this,
                {
                  rtlTranslate: r,
                  params: n,
                  wrapperEl: s,
                  progress: a
                } = i;
              let o, l = 0,
                d = 0;
              i.isHorizontal() ? l = r ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d, n.cssMode ? s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : n.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : d -= i.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = i.maxTranslate() - i.minTranslate();
              o = 0 === c ? 0 : (e - i.minTranslate()) / c, o !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, r, n) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === r && (r = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: l
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let p;
              if (p = r && e > d ? d : r && e < c ? c : e, a.updateProgress(p), o.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!a.support.smoothScroll) return (0, s.u)({
                    swiper: a,
                    targetPosition: -p,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(p), i && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), i && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, i && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const i = this;
              i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`, i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), i.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const i = this,
                {
                  params: r
                } = i;
              r.cssMode || (r.autoHeight && i.updateAutoHeight(), w({
                swiper: i,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const i = this,
                {
                  params: r
                } = i;
              i.animating = !1, r.cssMode || (i.setTransition(0), w({
                swiper: i,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: y,
          loop: S,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                t.__preventObserver__ = !1
              })
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                e.__preventObserver__ = !1
              }))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = T.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = C.bind(e), e.onDocumentTouchStart = _.bind(e), t.cssMode && (e.onScroll = A.bind(e)), e.onClick = k.bind(e), e.onLoad = L.bind(e), P(e, "on")
            },
            detachEvents: function() {
              P(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: i,
                  params: r,
                  el: a
                } = e,
                o = r.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const l = (0, n.g)(),
                d = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
                c = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : l.querySelector(r.breakpointsBase),
                p = e.getBreakpoint(o, d, c);
              if (!p || e.currentBreakpoint === p) return;
              const u = (p in o ? o[p] : void 0) || e.originalParams,
                f = O(e, r),
                m = O(e, u),
                h = e.params.grabCursor,
                g = u.grabCursor,
                v = r.enabled;
              f && !m ? (a.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !f && m && (a.classList.add(`${r.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === r.grid.fill) && a.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !g ? e.unsetGrabCursor() : !h && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                if (void 0 === u[t]) return;
                const i = r[t] && r[t].enabled,
                  n = u[t] && u[t].enabled;
                i && !n && e[t].disable(), !i && n && e[t].enable()
              });
              const b = u.direction && u.direction !== r.direction,
                w = r.loop && (u.slidesPerView !== r.slidesPerView || b),
                y = r.loop;
              b && i && e.changeDirection(), (0, s.x)(e.params, u);
              const S = e.params.enabled,
                E = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), v && !S ? e.disable() : !v && S && e.enable(), e.currentBreakpoint = p, e.emit("_beforeBreakpoint", u), i && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && E ? (e.loopCreate(t), e.updateSlides()) : y && !E && e.loopDestroy()), e.emit("breakpoint", u)
            },
            getBreakpoint: function(e, t, i) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
              let r = !1;
              const s = (0, n.a)(),
                a = "window" === t ? s.innerHeight : i.clientHeight,
                o = Object.keys(e).map(e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                });
              o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: n,
                  value: a
                } = o[e];
                "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (r = n) : a <= i.clientWidth && (r = n)
              }
              return r || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: i
                } = e,
                {
                  slidesOffsetBefore: r
                } = i;
              if (r) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > i
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: i,
                  rtl: r,
                  el: n,
                  device: s
                } = e,
                a = function(e, t) {
                  const i = [];
                  return e.forEach(e => {
                    "object" == typeof e ? Object.keys(e).forEach(r => {
                      e[r] && i.push(t + r)
                    }) : "string" == typeof e && i.push(t + e)
                  }), i
                }(["initialized", i.direction, {
                  "free-mode": e.params.freeMode && i.freeMode.enabled
                }, {
                  autoheight: i.autoHeight
                }, {
                  rtl: r
                }, {
                  grid: i.grid && i.grid.rows > 1
                }, {
                  "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                }, {
                  android: s.android
                }, {
                  ios: s.ios
                }, {
                  "css-mode": i.cssMode
                }, {
                  centered: i.cssMode && i.centeredSlides
                }, {
                  "watch-progress": i.watchSlidesProgress
                }], i.containerModifierClass);
              t.push(...a), n.classList.add(...t), e.emitContainerClasses()
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
        z = {};
      class R {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
          1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = (0, s.x)({}, t), e && !t.el && (t.el = e);
          const o = (0, n.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach(i => {
              const r = (0, s.x)({}, t, {
                el: i
              });
              e.push(new R(r))
            }), e
          }
          const l = this;
          l.__swiper__ = !0, l.support = d(), l.device = c({
            userAgent: t.userAgent
          }), l.browser = p(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
          const u = {};
          l.modules.forEach(e => {
            e({
              params: t,
              swiper: l,
              extendParams: N(t, u),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l)
            })
          });
          const f = (0, s.x)({}, I, u);
          return l.params = (0, s.x)({}, f, z, t), l.originalParams = (0, s.x)({}, l.params), l.passedParams = (0, s.x)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
            l.on(e, l.params.on[e])
          }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === l.params.direction,
            isVertical: () => "vertical" === l.params.direction,
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
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: l.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), l.emit("_swiper"), l.params.init && l.init(), l
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
            params: i
          } = this, r = (0, s.e)(t, `.${i.slideClass}, swiper-slide`), n = (0, s.i)(r[0]);
          return (0, s.i)(e) - n
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e))
        }
        getSlideIndexWhenGrid(e) {
          return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, s.e)(e, `.${t.slideClass}, swiper-slide`)
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
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = i.minTranslate(),
            n = (i.maxTranslate() - r) * e + r;
          i.translateTo(n, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach(i => {
            const r = e.getSlideClasses(i);
            t.push({
              slideEl: i,
              classNames: r
            }), e.emit("_slideClass", i, r)
          }), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: i,
            slides: r,
            slidesGrid: n,
            slidesSizesGrid: s,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e, t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let i = o + 1; i < r.length; i += 1) r[i] && !e && (t += Math.ceil(r[i].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let i = o - 1; i >= 0; i -= 1) r[i] && !e && (t += r[i].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < r.length; e += 1)(t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: i
          } = e;

          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let n;
          if (i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
              t.complete && h(e, t)
            }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) r(), i.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === i.slidesPerView || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
              const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
              n = e.slideTo(t.length - 1, 0, !1, !0)
            } else n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
          }
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const i = this,
            r = i.params.direction;
          return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          }), i.emit("changeDirection"), t && i.update()), i
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
          i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let n = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : (0, s.e)(i, r())[0];
          return !n && t.params.createElements && (n = (0, s.c)("div", t.params.wrapperClass), i.append(n), (0, s.e)(i, `.${t.params.slideClass}`).forEach(e => {
            n.append(e)
          })), Object.assign(t, {
            el: i,
            wrapperEl: n,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : n,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, s.q)(i, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, s.q)(i, "direction")),
            wrongRTL: "-webkit-box" === (0, s.q)(n, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(e => {
            e.complete ? h(t, e) : e.addEventListener("load", e => {
              h(t, e.target)
            })
          }), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              el: n,
              wrapperEl: a,
              slides: o
            } = i;
          return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), n && "string" != typeof n && n.removeAttribute("style"), a && a.removeAttribute("style"), o && o.length && o.forEach(e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
            i.off(e)
          }), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), (0, s.y)(i)), i.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, s.x)(z, e)
        }
        static get extendedDefaults() {
          return z
        }
        static get defaults() {
          return I
        }
        static installModule(e) {
          R.prototype.__modules__ || (R.prototype.__modules__ = []);
          const t = R.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach(e => R.installModule(e)), R) : (R.installModule(e), R)
        }
      }
      Object.keys(D).forEach(e => {
        Object.keys(D[e]).forEach(t => {
          R.prototype[t] = D[e][t]
        })
      }), R.use([function(e) {
        let {
          swiper: t,
          on: i,
          emit: r
        } = e;
        const s = (0, n.a)();
        let a = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && r("orientationchange")
          };
        i("init", () => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
            o = s.requestAnimationFrame(() => {
              const {
                width: i,
                height: r
              } = t;
              let n = i,
                s = r;
              e.forEach(e => {
                let {
                  contentBoxSize: i,
                  contentRect: r,
                  target: a
                } = e;
                a && a !== t.el || (n = r ? r.width : (i[0] || i).inlineSize, s = r ? r.height : (i[0] || i).blockSize)
              }), n === i && s === r || l()
            })
          }), a.observe(t.el)) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", d))
        }), i("destroy", () => {
          o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
        })
      }, function(e) {
        let {
          swiper: t,
          extendParams: i,
          on: r,
          emit: a
        } = e;
        const o = [],
          l = (0, n.a)(),
          d = function(e, i) {
            void 0 === i && (i = {});
            const r = new(l.MutationObserver || l.WebkitMutationObserver)(e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const i = function() {
                a("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
            });
            r.observe(e, {
              attributes: void 0 === i.attributes || i.attributes,
              childList: t.isElement || (void 0 === i.childList || i).childList,
              characterData: void 0 === i.characterData || i.characterData
            }), o.push(r)
          };
        i({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), r("init", () => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, s.b)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        }), r("destroy", () => {
          o.forEach(e => {
            e.disconnect()
          }), o.splice(0, o.length)
        })
      }]);
      const G = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function B(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function F(e, t) {
        const i = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => i.indexOf(e) < 0).forEach(i => {
          void 0 === e[i] ? e[i] = t[i] : B(t[i]) && B(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : F(e[i], t[i]) : e[i] = t[i]
        })
      }

      function $(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function H(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function V(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function j(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map(e => e.trim()).filter(e => !!e),
          i = [];
        return t.forEach(e => {
          i.indexOf(e) < 0 && i.push(e)
        }), i.join(" ")
      }

      function W(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function U() {
        return U = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
          }
          return e
        }, U.apply(this, arguments)
      }

      function q(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function Y(e) {
        const t = [];
        return r.Children.toArray(e).forEach(e => {
          q(e) ? t.push(e) : e.props && e.props.children && Y(e.props.children).forEach(e => t.push(e))
        }), t
      }

      function X(e) {
        const t = [],
          i = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return r.Children.toArray(e).forEach(e => {
          if (q(e)) t.push(e);
          else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const r = Y(e.props.children);
            r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
          } else i["container-end"].push(e)
        }), {
          slides: t,
          slots: i
        }
      }

      function K(e, t) {
        return "undefined" == typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
      }
      const Z = (0, r.createContext)(null),
        J = (0, r.createContext)(null),
        Q = (0, r.forwardRef)(function(e, t) {
          let {
            className: i,
            tag: n = "div",
            wrapperTag: a = "div",
            children: o,
            onSwiper: l,
            ...d
          } = void 0 === e ? {} : e, c = !1;
          const [p, u] = (0, r.useState)("swiper"), [f, m] = (0, r.useState)(null), [h, g] = (0, r.useState)(!1), v = (0, r.useRef)(!1), b = (0, r.useRef)(null), w = (0, r.useRef)(null), y = (0, r.useRef)(null), S = (0, r.useRef)(null), E = (0, r.useRef)(null), T = (0, r.useRef)(null), x = (0, r.useRef)(null), C = (0, r.useRef)(null), {
            params: M,
            passedParams: k,
            rest: A,
            events: L
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const i = {
                on: {}
              },
              r = {},
              n = {};
            F(i, I), i._emitClasses = !0, i.init = !1;
            const s = {},
              a = G.map(e => e.replace(/_/, "")),
              o = Object.assign({}, e);
            return Object.keys(o).forEach(o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? B(e[o]) ? (i[o] = {}, n[o] = {}, F(i[o], e[o]), F(n[o], e[o])) : (i[o] = e[o], n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : i.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s[o] = e[o])
            }), ["navigation", "pagination", "scrollbar"].forEach(e => {
              !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
            }), {
              params: i,
              passedParams: n,
              rest: s,
              events: r
            }
          }(d), {
            slides: _,
            slots: P
          } = X(o), O = () => {
            g(!h)
          };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const N = () => {
            Object.assign(M.on, L), c = !0;
            const e = {
              ...M
            };
            if (delete e.wrapperClass, w.current = new R(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = _;
              const e = {
                cache: !1,
                slides: _,
                renderExternal: m,
                renderExternalUpdate: !1
              };
              F(w.current.params.virtual, e), F(w.current.originalParams.virtual, e)
            }
          };
          return b.current || N(), w.current && w.current.on("_beforeBreakpoint", O), (0, r.useEffect)(() => () => {
            w.current && w.current.off("_beforeBreakpoint", O)
          }), (0, r.useEffect)(() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          }), K(() => {
            if (t && (t.current = b.current), b.current) return w.current.destroyed && N(),
              function(e, t) {
                let {
                  el: i,
                  nextEl: r,
                  prevEl: n,
                  paginationEl: s,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                $(t) && r && n && (o.params.navigation.nextEl = r, o.originalParams.navigation.nextEl = r, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), H(t) && s && (o.params.pagination.el = s, o.originalParams.pagination.el = s), V(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(i)
              }({
                el: b.current,
                nextEl: E.current,
                prevEl: T.current,
                paginationEl: x.current,
                scrollbarEl: C.current,
                swiper: w.current
              }, M), l && !w.current.destroyed && l(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }, []), K(() => {
            !c && L && w.current && Object.keys(L).forEach(e => {
              w.current.on(e, L[e])
            });
            const e = function(e, t, i, r, n) {
              const s = [];
              if (!t) return s;
              const a = e => {
                s.indexOf(e) < 0 && s.push(e)
              };
              if (i && r) {
                const e = r.map(n),
                  t = i.map(n);
                e.join("") !== t.join("") && a("children"), r.length !== i.length && a("children")
              }
              return G.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(i => {
                if (i in e && i in t)
                  if (B(e[i]) && B(t[i])) {
                    const r = Object.keys(e[i]),
                      n = Object.keys(t[i]);
                    r.length !== n.length ? a(i) : (r.forEach(r => {
                      e[i][r] !== t[i][r] && a(i)
                    }), n.forEach(r => {
                      e[i][r] !== t[i][r] && a(i)
                    }))
                  } else e[i] !== t[i] && a(i)
              }), s
            }(k, y.current, _, S.current, e => e.key);
            return y.current = k, S.current = _, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: i,
                passedParams: r,
                changedParams: n,
                nextEl: a,
                prevEl: o,
                scrollbarEl: l,
                paginationEl: d
              } = e;
              const c = n.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                {
                  params: p,
                  pagination: u,
                  navigation: f,
                  scrollbar: m,
                  virtual: h,
                  thumbs: g
                } = t;
              let v, b, w, y, S, E, T, x;
              n.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && p.thumbs && (!p.thumbs.swiper || p.thumbs.swiper.destroyed) && (v = !0), n.includes("controller") && r.controller && r.controller.control && p.controller && !p.controller.control && (b = !0), n.includes("pagination") && r.pagination && (r.pagination.el || d) && (p.pagination || !1 === p.pagination) && u && !u.el && (w = !0), n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (y = !0), n.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || a) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (S = !0);
              const C = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), p[e].prevEl = void 0, p[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), p[e].el = void 0, t[e].el = void 0))
              };
              n.includes("loop") && t.isElement && (p.loop && !r.loop ? E = !0 : !p.loop && r.loop ? T = !0 : x = !0), c.forEach(e => {
                if (B(p[e]) && B(r[e])) Object.assign(p[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || C(e);
                else {
                  const t = r[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = r[e] : !1 === t && C(e)
                }
              }), c.includes("controller") && !b && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), n.includes("children") && i && h && p.virtual.enabled ? (h.slides = i, h.update(!0)) : n.includes("virtual") && h && p.virtual.enabled && (i && (h.slides = i), h.update(!0)), n.includes("children") && i && p.loop && (x = !0), v && g.init() && g.update(!0), b && (t.controller.control = p.controller.control), w && (!t.isElement || d && "string" != typeof d || (d = document.createElement("div"), d.classList.add("swiper-pagination"), d.part.add("pagination"), t.el.appendChild(d)), d && (p.pagination.el = d), u.init(), u.render(), u.update()), y && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (p.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), S && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), (0, s.s)(a, t.hostEl.constructor.nextButtonSvg), a.part.add("button-next"), t.el.appendChild(a)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), (0, s.s)(o, t.hostEl.constructor.prevButtonSvg), o.part.add("button-prev"), t.el.appendChild(o))), a && (p.navigation.nextEl = a), o && (p.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), n.includes("direction") && t.changeDirection(r.direction, !1), (E || x) && t.loopDestroy(), (T || x) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: _,
              passedParams: k,
              changedParams: e,
              nextEl: E.current,
              prevEl: T.current,
              scrollbarEl: C.current,
              paginationEl: x.current
            }), () => {
              L && w.current && Object.keys(L).forEach(e => {
                w.current.off(e, L[e])
              })
            }
          }), K(() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }, [f]), r.createElement(n, U({
            ref: b,
            className: j(`${p}${i?` ${i}`:""}`)
          }, A), r.createElement(J.Provider, {
            value: w.current
          }, P["container-start"], r.createElement(a, {
            className: W(M.wrapperClass)
          }, P["wrapper-start"], M.virtual ? function(e, t, i) {
            if (!i) return null;
            const n = e => {
                let i = e;
                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
              },
              s = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
              } : {
                top: `${i.offset}px`
              },
              {
                from: a,
                to: o
              } = i,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[n(e)]);
            return c.map((t, i) => r.cloneElement(t, {
              swiper: e,
              style: s,
              key: t.props.virtualIndex || t.key || `slide-${i}`
            }))
          }(w.current, _, f) : _.map((e, t) => r.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          })), P["wrapper-end"]), $(M) && r.createElement(r.Fragment, null, r.createElement("div", {
            ref: T,
            className: "swiper-button-prev"
          }), r.createElement("div", {
            ref: E,
            className: "swiper-button-next"
          })), V(M) && r.createElement("div", {
            ref: C,
            className: "swiper-scrollbar"
          }), H(M) && r.createElement("div", {
            ref: x,
            className: "swiper-pagination"
          }), P["container-end"]))
        });
      Q.displayName = "Swiper";
      const ee = (0, r.forwardRef)(function(e, t) {
        let {
          tag: i = "div",
          children: n,
          className: s = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, r.useRef)(null),
          [f, m] = (0, r.useState)("swiper-slide"),
          [h, g] = (0, r.useState)(!1);

        function v(e, t, i) {
          t === u.current && m(i)
        }
        K(() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", v), () => {
              a && a.off("_slideClass", v)
            };
            "swiper-slide" !== f && m("swiper-slide")
          }
        }), K(() => {
          a && u.current && !a.destroyed && m(a.getSlideClasses(u.current))
        }, [a]);
        const b = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          w = () => "function" == typeof n ? n(b) : n;
        return r.createElement(i, U({
          ref: u,
          className: j(`${f}${s?` ${s}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            g(!0)
          }
        }, p), o && r.createElement(Z.Provider, {
          value: b
        }, r.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, w(), l && !h && r.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && r.createElement(Z.Provider, {
          value: b
        }, w(), l && !h && r.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      });
      ee.displayName = "SwiperSlide"
    }
  }
]);