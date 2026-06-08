try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "441bb60a-1e73-4582-8219-8274aa72ff9c", e._sentryDebugIdIdentifier = "sentry-dbid-441bb60a-1e73-4582-8219-8274aa72ff9c")
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
  [156], {
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

        function t(e, r) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, r)
        }

        function r(e, i, n) {
          return r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, r, i) {
            var n = [null];
            n.push.apply(n, r);
            var s = new(Function.bind.apply(e, n));
            return i && t(s, i.prototype), s
          }, r.apply(null, arguments)
        }

        function i(e) {
          return function(e) {
            if (Array.isArray(e)) return n(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
          return i
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
        m || (m = function(e, t, r) {
          return e.apply(t, r)
        }), c || (c = function(e) {
          return e
        }), p || (p = function(e) {
          return e
        }), h || (h = function(e, t) {
          return r(e, i(t))
        });
        var g, v = k(Array.prototype.forEach),
          b = k(Array.prototype.pop),
          w = k(Array.prototype.push),
          y = k(String.prototype.toLowerCase),
          E = k(String.prototype.toString),
          S = k(String.prototype.match),
          T = k(String.prototype.replace),
          x = k(String.prototype.indexOf),
          C = k(String.prototype.trim),
          M = k(RegExp.prototype.test),
          A = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return h(g, t)
          });

        function k(e) {
          return function(t) {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
            return m(e, t, i)
          }
        }

        function L(e, t, r) {
          var i;
          r = null !== (i = r) && void 0 !== i ? i : y, a && a(e, null);
          for (var n = t.length; n--;) {
            var s = t[n];
            if ("string" == typeof s) {
              var l = r(s);
              l !== s && (o(t) || (t[n] = l), s = l)
            }
            e[s] = !0
          }
          return e
        }

        function _(e) {
          var t, r = u(null);
          for (t in e) !0 === m(s, e, [t]) && (r[t] = e[t]);
          return r
        }

        function P(e, t) {
          for (; null !== e;) {
            var r = d(e, t);
            if (r) {
              if (r.get) return k(r.get);
              if ("function" == typeof r.value) return k(r.value)
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
          j = p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          V = p(/<%[\w\W]*|[\w\W]*%>/gm),
          W = p(/\${[\w\W]*}/gm),
          U = p(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          q = p(/^aria-[\-\w]+$/),
          X = p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          Y = p(/^(?:\w+script|data):/i),
          K = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = p(/^html$/i),
          J = p(/^[a-z][.\w]*(-[.\w]+)+$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            n = function(e) {
              return t(e)
            };
          if (n.version = "2.5.9", n.removed = [], !r || !r.document || 9 !== r.document.nodeType) return n.isSupported = !1, n;
          var s = r.document,
            a = r.document,
            o = r.DocumentFragment,
            l = r.HTMLTemplateElement,
            d = r.Node,
            p = r.Element,
            u = r.NodeFilter,
            f = r.NamedNodeMap,
            m = void 0 === f ? r.NamedNodeMap || r.MozNamedAttrMap : f,
            h = r.HTMLFormElement,
            g = r.DOMParser,
            k = r.trustedTypes,
            ee = p.prototype,
            te = P(ee, "cloneNode"),
            re = P(ee, "nextSibling"),
            ie = P(ee, "childNodes"),
            ne = P(ee, "parentNode");
          if ("function" == typeof l) {
            var se = a.createElement("template");
            se.content && se.content.ownerDocument && (a = se.content.ownerDocument)
          }
          var ae = function(t, r) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var i = null,
                n = "data-tt-policy-suffix";
              r.currentScript && r.currentScript.hasAttribute(n) && (i = r.currentScript.getAttribute(n));
              var s = "dompurify" + (i ? "#" + i : "");
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
            }(k, s),
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
          var ge, ve, be = j,
            we = V,
            ye = W,
            Ee = U,
            Se = q,
            Te = Y,
            xe = K,
            Ce = J,
            Me = X,
            Ae = null,
            ke = L({}, [].concat(i(O), i(I), i(N), i(z), i(G))),
            Le = null,
            _e = L({}, [].concat(i(B), i(F), i($), i(H))),
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
            je = !1,
            Ve = !1,
            We = !1,
            Ue = !0,
            qe = !1,
            Xe = !0,
            Ye = !1,
            Ke = {},
            Ze = null,
            Je = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = L({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            rt = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            it = "http://www.w3.org/1998/Math/MathML",
            nt = "http://www.w3.org/2000/svg",
            st = "http://www.w3.org/1999/xhtml",
            at = st,
            ot = !1,
            lt = null,
            dt = L({}, [it, nt, st], E),
            ct = ["application/xhtml+xml", "text/html"],
            pt = null,
            ut = a.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            mt = function(t) {
              pt && pt === t || (t && "object" === e(t) || (t = {}), t = _(t), ge = ge = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ve = "application/xhtml+xml" === ge ? E : y, Ae = "ALLOWED_TAGS" in t ? L({}, t.ALLOWED_TAGS, ve) : ke, Le = "ALLOWED_ATTR" in t ? L({}, t.ALLOWED_ATTR, ve) : _e, lt = "ALLOWED_NAMESPACES" in t ? L({}, t.ALLOWED_NAMESPACES, E) : dt, tt = "ADD_URI_SAFE_ATTR" in t ? L(_(rt), t.ADD_URI_SAFE_ATTR, ve) : rt, Qe = "ADD_DATA_URI_TAGS" in t ? L(_(et), t.ADD_DATA_URI_TAGS, ve) : et, Ze = "FORBID_CONTENTS" in t ? L({}, t.FORBID_CONTENTS, ve) : Je, Oe = "FORBID_TAGS" in t ? L({}, t.FORBID_TAGS, ve) : {}, Ie = "FORBID_ATTR" in t ? L({}, t.FORBID_ATTR, ve) : {}, Ke = "USE_PROFILES" in t && t.USE_PROFILES, Ne = !1 !== t.ALLOW_ARIA_ATTR, De = !1 !== t.ALLOW_DATA_ATTR, ze = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Ge = t.SAFE_FOR_TEMPLATES || !1, Be = !1 !== t.SAFE_FOR_XML, Fe = t.WHOLE_DOCUMENT || !1, je = t.RETURN_DOM || !1, Ve = t.RETURN_DOM_FRAGMENT || !1, We = t.RETURN_TRUSTED_TYPE || !1, He = t.FORCE_BODY || !1, Ue = !1 !== t.SANITIZE_DOM, qe = t.SANITIZE_NAMED_PROPS || !1, Xe = !1 !== t.KEEP_CONTENT, Ye = t.IN_PLACE || !1, Me = t.ALLOWED_URI_REGEXP || Me, at = t.NAMESPACE || st, Pe = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Pe.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Pe.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Pe.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ge && (De = !1), Ve && (je = !0), Ke && (Ae = L({}, i(G)), Le = [], !0 === Ke.html && (L(Ae, O), L(Le, B)), !0 === Ke.svg && (L(Ae, I), L(Le, F), L(Le, H)), !0 === Ke.svgFilters && (L(Ae, N), L(Le, F), L(Le, H)), !0 === Ke.mathMl && (L(Ae, z), L(Le, $), L(Le, H))), t.ADD_TAGS && (Ae === ke && (Ae = _(Ae)), L(Ae, t.ADD_TAGS, ve)), t.ADD_ATTR && (Le === _e && (Le = _(Le)), L(Le, t.ADD_ATTR, ve)), t.ADD_URI_SAFE_ATTR && L(tt, t.ADD_URI_SAFE_ATTR, ve), t.FORBID_CONTENTS && (Ze === Je && (Ze = _(Ze)), L(Ze, t.FORBID_CONTENTS, ve)), Xe && (Ae["#text"] = !0), Fe && L(Ae, ["html", "head", "body"]), Ae.table && (L(Ae, ["tbody"]), delete Oe.tbody), c && c(t), pt = t)
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
            Et = function(e, t) {
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
                if (je || Ve) try {
                  yt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            St = function(e) {
              var t, r;
              if (He) e = "<remove></remove>" + e;
              else {
                var i = S(e, /^[\r\n\t ]+/);
                r = i && i[0]
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
              return e && r && s.insertBefore(a.createTextNode(r), s.childNodes[0] || null), at === st ? ue.call(t, Fe ? "html" : "body")[0] : Fe ? t.documentElement : s
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
            Mt = function(e, t, r) {
              he[e] && v(he[e], function(e) {
                e.call(n, t, r, pt)
              })
            },
            At = function(e) {
              var t;
              if (Mt("beforeSanitizeElements", e, null), xt(e)) return yt(e), !0;
              if (M(/[\u0080-\uFFFF]/, e.nodeName)) return yt(e), !0;
              var r = ve(e.nodeName);
              if (Mt("uponSanitizeElement", e, {
                  tagName: r,
                  allowedTags: Ae
                }), e.hasChildNodes() && !Ct(e.firstElementChild) && (!Ct(e.content) || !Ct(e.content.firstElementChild)) && M(/<[/\w]/g, e.innerHTML) && M(/<[/\w]/g, e.textContent)) return yt(e), !0;
              if ("select" === r && M(/<template/i, e.innerHTML)) return yt(e), !0;
              if (7 === e.nodeType) return yt(e), !0;
              if (Be && 8 === e.nodeType && M(/<[/\w]/g, e.data)) return yt(e), !0;
              if (!Ae[r] || Oe[r]) {
                if (!Oe[r] && Lt(r)) {
                  if (Pe.tagNameCheck instanceof RegExp && M(Pe.tagNameCheck, r)) return !1;
                  if (Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(r)) return !1
                }
                if (Xe && !Ze[r]) {
                  var i = ne(e) || e.parentNode,
                    s = ie(e) || e.childNodes;
                  if (s && i)
                    for (var a = s.length - 1; a >= 0; --a) {
                      var o = te(s[a], !0);
                      o.__removalCount = (e.__removalCount || 0) + 1, i.insertBefore(o, re(e))
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
                var r = y(e.tagName),
                  i = y(t.tagName);
                return !!lt[e.namespaceURI] && (e.namespaceURI === nt ? t.namespaceURI === st ? "svg" === r : t.namespaceURI === it ? "svg" === r && ("annotation-xml" === i || ht[i]) : Boolean(bt[r]) : e.namespaceURI === it ? t.namespaceURI === st ? "math" === r : t.namespaceURI === nt ? "math" === r && gt[i] : Boolean(wt[r]) : e.namespaceURI === st ? !(t.namespaceURI === nt && !gt[i]) && !(t.namespaceURI === it && !ht[i]) && !wt[r] && (vt[r] || !bt[r]) : !("application/xhtml+xml" !== ge || !lt[e.namespaceURI]))
              }(e) ? (yt(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !M(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ge && 3 === e.nodeType && (t = e.textContent, t = T(t, be, " "), t = T(t, we, " "), t = T(t, ye, " "), e.textContent !== t && (w(n.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), Mt("afterSanitizeElements", e, null), !1) : (yt(e), !0)
            },
            kt = function(e, t, r) {
              if (Ue && ("id" === t || "name" === t) && (r in a || r in ut)) return !1;
              if (De && !Ie[t] && M(Ee, t));
              else if (Ne && M(Se, t));
              else if (!Le[t] || Ie[t]) {
                if (!(Lt(e) && (Pe.tagNameCheck instanceof RegExp && M(Pe.tagNameCheck, e) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(e)) && (Pe.attributeNameCheck instanceof RegExp && M(Pe.attributeNameCheck, t) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(t)) || "is" === t && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && M(Pe.tagNameCheck, r) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(r)))) return !1
              } else if (tt[t]);
              else if (M(Me, T(r, xe, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== x(r, "data:") || !Qe[e])
                if (ze && !M(Te, T(r, xe, "")));
                else if (r) return !1;
              return !0
            },
            Lt = function(e) {
              return "annotation-xml" !== e && S(e, Ce)
            },
            _t = function(t) {
              var r, i, s, a;
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
                  var d = r = o[a],
                    c = d.name,
                    p = d.namespaceURI;
                  if (i = "value" === c ? r.value : C(r.value), s = ve(c), l.attrName = s, l.attrValue = i, l.keepAttr = !0, l.forceKeepAttr = void 0, Mt("uponSanitizeAttribute", t, l), i = l.attrValue, !l.forceKeepAttr && (Et(c, t), l.keepAttr))
                    if (Re || !M(/\/>/i, i)) {
                      Ge && (i = T(i, be, " "), i = T(i, we, " "), i = T(i, ye, " "));
                      var u = ve(t.nodeName);
                      if (kt(u, s, i))
                        if (!qe || "id" !== s && "name" !== s || (Et(c, t), i = "user-content-" + i), Be && M(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, i)) Et(c, t);
                        else {
                          if (ae && "object" === e(k) && "function" == typeof k.getAttributeType)
                            if (p);
                            else switch (k.getAttributeType(u, s)) {
                              case "TrustedHTML":
                                i = ae.createHTML(i);
                                break;
                              case "TrustedScriptURL":
                                i = ae.createScriptURL(i)
                            }
                          try {
                            p ? t.setAttributeNS(p, c, i) : t.setAttribute(c, i), xt(t) ? yt(t) : b(n.removed)
                          } catch (e) {}
                        }
                    } else Et(c, t)
                }
                Mt("afterSanitizeAttributes", t, null)
              }
            },
            Pt = function e(t) {
              var r, i = Tt(t);
              for (Mt("beforeSanitizeShadowDOM", t, null); r = i.nextNode();) Mt("uponSanitizeShadowNode", r, null), At(r), _t(r), r.content instanceof o && e(r.content);
              Mt("afterSanitizeShadowDOM", t, null)
            };
          return n.sanitize = function(t) {
            var i, a, l, c, p, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((ot = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !Ct(t)) {
              if ("function" != typeof t.toString) throw A("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw A("dirty is not a string, aborting")
            }
            if (!n.isSupported) {
              if ("object" === e(r.toStaticHTML) || "function" == typeof r.toStaticHTML) {
                if ("string" == typeof t) return r.toStaticHTML(t);
                if (Ct(t)) return r.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if ($e || mt(u), n.removed = [], "string" == typeof t && (Ye = !1), Ye) {
              if (t.nodeName) {
                var f = ve(t.nodeName);
                if (!Ae[f] || Oe[f]) throw A("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof d) 1 === (a = (i = St("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? i = a : i.appendChild(a);
            else {
              if (!je && !Ge && !Fe && -1 === t.indexOf("<")) return ae && We ? ae.createHTML(t) : t;
              if (!(i = St(t))) return je ? null : We ? oe : ""
            }
            i && He && yt(i.firstChild);
            for (var m = Tt(Ye ? t : i); l = m.nextNode();) 3 === l.nodeType && l === c || (At(l), _t(l), l.content instanceof o && Pt(l.content), c = l);
            if (c = null, Ye) return t;
            if (je) {
              if (Ve)
                for (p = pe.call(i.ownerDocument); i.firstChild;) p.appendChild(i.firstChild);
              else p = i;
              return (Le.shadowroot || Le.shadowrootmod) && (p = fe.call(s, p, !0)), p
            }
            var h = Fe ? i.outerHTML : i.innerHTML;
            return Fe && Ae["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && M(Z, i.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + h), Ge && (h = T(h, be, " "), h = T(h, we, " "), h = T(h, ye, " ")), ae && We ? ae.createHTML(h) : h
          }, n.setConfig = function(e) {
            mt(e), $e = !0
          }, n.clearConfig = function() {
            pt = null, $e = !1
          }, n.isValidAttribute = function(e, t, r) {
            pt || mt({});
            var i = ve(e),
              n = ve(t);
            return kt(i, n, r)
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
    43599(e) {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, i, n, s) {
        for (var a = -1, o = r(t((i - e) / (n || 1)), 0), l = Array(o); o--;) l[s ? o : ++a] = e, e += n;
        return l
      }
    },
    62314(e, t, r) {
      var i = r(87147),
        n = r(71025),
        s = r(15313),
        a = r(36373),
        o = r(30285);
      e.exports = function(e, t, r, l) {
        if (!a(e)) return e;
        for (var d = -1, c = (t = n(t, e)).length, p = c - 1, u = e; null != u && ++d < c;) {
          var f = o(t[d]),
            m = r;
          if ("__proto__" === f || "constructor" === f || "prototype" === f) return e;
          if (d != p) {
            var h = u[f];
            void 0 === (m = l ? l(h, f, u) : void 0) && (m = a(h) ? h : s(t[d + 1]) ? [] : {})
          }
          i(u, f, m), u = u[f]
        }
        return e
      }
    },
    56792(e, t, r) {
      var i = r(41856),
        n = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, i(e) + 1).replace(n, "") : e
      }
    },
    55276(e, t, r) {
      var i = r(43599),
        n = r(34856),
        s = r(27872);
      e.exports = function(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && n(t, r, a) && (r = a = void 0), t = s(t), void 0 === r ? (r = t, t = 0) : r = s(r), a = void 0 === a ? t < r ? 1 : -1 : s(a), i(t, r, a, e)
        }
      }
    },
    41856(e) {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    74143(e, t, r) {
      var i = r(5559);
      e.exports = function(e) {
        return i(e, 5)
      }
    },
    54389(e, t, r) {
      var i = r(36373),
        n = r(42308),
        s = r(73894),
        a = Math.max,
        o = Math.min;
      e.exports = function(e, t, r) {
        var l, d, c, p, u, f, m = 0,
          h = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var r = l,
            i = d;
          return l = d = void 0, m = t, p = e.apply(i, r)
        }

        function w(e) {
          var r = e - f;
          return void 0 === f || r >= t || r < 0 || g && e - m >= c
        }

        function y() {
          var e = n();
          if (w(e)) return E(e);
          u = setTimeout(y, function(e) {
            var r = t - (e - f);
            return g ? o(r, c - (e - m)) : r
          }(e))
        }

        function E(e) {
          return u = void 0, v && l ? b(e) : (l = d = void 0, p)
        }

        function S() {
          var e = n(),
            r = w(e);
          if (l = arguments, d = this, f = e, r) {
            if (void 0 === u) return function(e) {
              return m = e, u = setTimeout(y, t), h ? b(e) : p
            }(f);
            if (g) return clearTimeout(u), u = setTimeout(y, t), b(f)
          }
          return void 0 === u && (u = setTimeout(y, t)), p
        }
        return t = s(t) || 0, i(r) && (h = !!r.leading, c = (g = "maxWait" in r) ? a(s(r.maxWait) || 0, t) : c, v = "trailing" in r ? !!r.trailing : v), S.cancel = function() {
          void 0 !== u && clearTimeout(u), m = 0, l = f = d = u = void 0
        }, S.flush = function() {
          return void 0 === u ? p : E(n())
        }, S
      }
    },
    73892(e, t, r) {
      var i = r(69526);
      e.exports = function(e, t, r) {
        var n = null == e ? void 0 : i(e, t);
        return void 0 === n ? r : n
      }
    },
    42308(e, t, r) {
      var i = r(84373);
      e.exports = function() {
        return i.Date.now()
      }
    },
    68309(e, t, r) {
      var i = r(55276)();
      e.exports = i
    },
    88584(e, t, r) {
      var i = r(62314);
      e.exports = function(e, t, r, n) {
        return n = "function" == typeof n ? n : void 0, null == e ? e : i(e, t, r, n)
      }
    },
    27872(e, t, r) {
      var i = r(73894),
        n = 1 / 0;
      e.exports = function(e) {
        return e ? (e = i(e)) === n || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    73894(e, t, r) {
      var i = r(56792),
        n = r(36373),
        s = r(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (s(e)) return NaN;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = o.test(e);
        return r || l.test(e) ? d(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    39279(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l
      });
      const i = {
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
      const l = function(e, t, r) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        const n = (e = e || {}).random || (e.rng || a)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t
        }
        return function(e, t = 0) {
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(n)
      }
    },
    45457(e, t, r) {
      "use strict";
      r.d(t, {
        X: () => i
      });
      const i = "undefined" == typeof window
    },
    92181(e, t, r) {
      "use strict";
      r.d(t, {
        UP: () => a,
        Ub: () => s
      });
      var i = r(45457),
        n = r(93082);

      function s(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const s = e => i.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, o] = (0, n.useState)(() => r ? s(e) : t);

        function l() {
          o(s(e))
        }
        return (0, n.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), a
      }

      function a(...e) {
        const t = (0, n.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      r(51423)
    },
    55594(e, t, r) {
      "use strict";
      r.d(t, {
        fi: () => n,
        v6: () => a.v
      }), r(45457);
      const i = e => e - .02,
        n = {
          mobile: `(min-width: 0px) and (max-width: ${i(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${i(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${i(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${i(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var s, a = r(51423);
      r(68309), r(15963), r(54028), r(74143), r(88584), r(73892), r(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag
    },
    8608(e, t, r) {
      "use strict";
      r.d(t, {
        DX: () => p
      });
      var i = r(93082),
        n = r.t(i, 2);

      function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }
      var a = r(39793),
        o = Symbol.for("react.lazy"),
        l = n[" use ".trim().toString()];

      function d(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === o && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function c(e) {
        const t = u(e),
          r = i.forwardRef((e, r) => {
            let {
              children: n,
              ...s
            } = e;
            d(n) && "function" == typeof l && (n = l(n._payload));
            const o = i.Children.toArray(n),
              c = o.find(m);
            if (c) {
              const e = c.props.children,
                n = o.map(t => t === c ? i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...s,
                ref: r,
                children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
              })
            }
            return (0, a.jsx)(t, {
              ...s,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var p = c("Slot");

      function u(e) {
        const t = i.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (d(r) && "function" == typeof l && (r = l(r._payload)), i.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              a = function(e, t) {
                const r = {
                  ...t
                };
                for (const i in t) {
                  const n = e[i],
                    s = t[i];
                  /^on[A-Z]/.test(i) ? n && s ? r[i] = (...e) => {
                    const t = s(...e);
                    return n(...e), t
                  } : n && (r[i] = n) : "style" === i ? r[i] = {
                    ...n,
                    ...s
                  } : "className" === i && (r[i] = [n, s].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== i.Fragment && (a.ref = t ? function(...e) {
              return t => {
                let r = !1;
                const i = e.map(e => {
                  const i = s(e, t);
                  return r || "function" != typeof i || (r = !0), i
                });
                if (r) return () => {
                  for (let t = 0; t < i.length; t++) {
                    const r = i[t];
                    "function" == typeof r ? r() : s(e[t], null)
                  }
                }
              }
            }(t, e) : e), i.cloneElement(r, a)
          }
          return i.Children.count(r) > 1 ? i.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var f = Symbol("radix.slottable");

      function m(e) {
        return i.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
      }
    },
    51423(e, t, r) {
      "use strict";
      r.d(t, {
        v: () => o
      });
      var i = r(81270);
      const n = new Map;

      function s(e, t) {
        if (e === t) return e;
        const r = n.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const i = n.get(t);
        return i ? (i.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function o(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const n = e[r];
          for (const e in n) {
            const r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = s(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, i.clsx)(r, o)
          }
        }
        return t
      }
    },
    26320(e, t, r) {
      "use strict";
      r.d(t, {
        Wx: () => l
      });
      var i = r(93082),
        n = (Object.defineProperty, new Map),
        s = new WeakMap,
        a = 0;

      function o(e, t, r = {}, i = void 0) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const n = e.getBoundingClientRect();
          return t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
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
              return `${t}_${"root"===t?(r=e.root,r?(s.has(r)||(a+=1,s.set(r,a.toString())),s.get(r)):"0"):e[t]}`;
              var r
            }).toString()
          }(e);
          let r = n.get(t);
          if (!r) {
            const i = new Map;
            let s;
            const a = new IntersectionObserver(t => {
              t.forEach(t => {
                var r;
                const n = t.isIntersecting && s.some(e => t.intersectionRatio >= e);
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = n), null == (r = i.get(t.target)) || r.forEach(e => {
                  e(n, t)
                })
              })
            }, e);
            s = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: a,
              elements: i
            }, n.set(t, r)
          }
          return r
        }(r), c = d.get(e) || [];
        return d.has(e) || d.set(e, c), c.push(t), l.observe(e),
          function() {
            c.splice(c.indexOf(t), 1), 0 === c.length && (d.delete(e), l.unobserve(e)), 0 === d.size && (l.disconnect(), n.delete(o))
          }
      }

      function l({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: n,
        root: s,
        triggerOnce: a,
        skip: l,
        initialInView: d,
        fallbackInView: c,
        onChange: p
      } = {}) {
        var u;
        const [f, m] = i.useState(null), h = i.useRef(p), [g, v] = i.useState({
          inView: !!d,
          entry: void 0
        });
        h.current = p, i.useEffect(() => {
          if (l || !f) return;
          let i;
          return i = o(f, (e, t) => {
            v({
              inView: e,
              entry: t
            }), h.current && h.current(e, t), t.isIntersecting && a && i && (i(), i = void 0)
          }, {
            root: s,
            rootMargin: n,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            i && i()
          }
        }, [Array.isArray(e) ? e.toString() : e, f, s, n, a, l, r, c, t]);
        const b = null == (u = g.entry) ? void 0 : u.target,
          w = i.useRef(void 0);
        f || !b || a || l || w.current === b || (w.current = b, v({
          inView: !!d,
          entry: void 0
        }));
        const y = [m, g.inView, g.entry];
        return y.ref = y[0], y.inView = y[1], y.entry = y[2], y
      }
      i.Component
    },
    50662(e, t, r) {
      "use strict";
      r.d(t, {
        Jq: () => o,
        dK: () => a
      });
      var i = r(37015),
        n = r(20212);

      function s(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }

      function a(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: a
        } = e;
        const o = "swiper-pagination";
        let l;
        r({
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

        function p(e, r) {
          const {
            bulletActiveClass: i
          } = t.params.pagination;
          e && (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${r}`), (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${r}-${r}`))
        }

        function u(e) {
          const r = e.target.closest(s(t.params.pagination.bulletClass));
          if (!r) return;
          e.preventDefault();
          const i = (0, n.i)(r) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === i) return;
            const e = (a = t.realIndex, o = i, (o %= l = t.slides.length) === 1 + (a %= l) ? "next" : o === a - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(i)
          } else t.slideTo(i);
          var a, o, l
        }

        function f() {
          const e = t.rtl,
            r = t.params.pagination;
          if (c()) return;
          let i, o, u = t.pagination.el;
          u = (0, n.m)(u);
          const f = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            m = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (o = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, o = t.previousSnapIndex) : (o = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const s = t.pagination.bullets;
            let a, c, f;
            if (r.dynamicBullets && (l = (0, n.h)(s[0], t.isHorizontal() ? "width" : "height", !0), u.forEach(e => {
                e.style[t.isHorizontal() ? "width" : "height"] = l * (r.dynamicMainBullets + 4) + "px"
              }), r.dynamicMainBullets > 1 && void 0 !== o && (d += i - (o || 0), d > r.dynamicMainBullets - 1 ? d = r.dynamicMainBullets - 1 : d < 0 && (d = 0)), a = Math.max(i - d, 0), c = a + (Math.min(s.length, r.dynamicMainBullets) - 1), f = (c + a) / 2), s.forEach(e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${r.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...t)
              }), u.length > 1) s.forEach(e => {
              const s = (0, n.i)(e);
              s === i ? e.classList.add(...r.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), r.dynamicBullets && (s >= a && s <= c && e.classList.add(...`${r.bulletActiveClass}-main`.split(" ")), s === a && p(e, "prev"), s === c && p(e, "next"))
            });
            else {
              const e = s[i];
              if (e && e.classList.add(...r.bulletActiveClass.split(" ")), t.isElement && s.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                }), r.dynamicBullets) {
                const e = s[a],
                  t = s[c];
                for (let e = a; e <= c; e += 1) s[e] && s[e].classList.add(...`${r.bulletActiveClass}-main`.split(" "));
                p(e, "prev"), p(t, "next")
              }
            }
            if (r.dynamicBullets) {
              const i = Math.min(s.length, r.dynamicMainBullets + 4),
                n = (l * i - l) / 2 - f * l,
                a = e ? "right" : "left";
              s.forEach(e => {
                e.style[t.isHorizontal() ? a : "top"] = `${n}px`
              })
            }
          }
          u.forEach((e, o) => {
            if ("fraction" === r.type && (e.querySelectorAll(s(r.currentClass)).forEach(e => {
                e.textContent = r.formatFractionCurrent(i + 1)
              }), e.querySelectorAll(s(r.totalClass)).forEach(e => {
                e.textContent = r.formatFractionTotal(m)
              })), "progressbar" === r.type) {
              let n;
              n = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const a = (i + 1) / m;
              let o = 1,
                l = 1;
              "horizontal" === n ? o = a : l = a, e.querySelectorAll(s(r.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
              })
            }
            "custom" === r.type && r.renderCustom ? ((0, n.s)(e, r.renderCustom(t, i + 1, m)), 0 === o && a("paginationRender", e)) : (0 === o && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass)
          })
        }

        function m() {
          const e = t.params.pagination;
          if (c()) return;
          const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let i = t.pagination.el;
          i = (0, n.m)(i);
          let o = "";
          if ("bullets" === e.type) {
            let i = t.params.loop ? Math.ceil(r / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && i > r && (i = r);
            for (let r = 0; r < i; r += 1) e.renderBullet ? o += e.renderBullet.call(t, r, e.bulletClass) : o += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach(r => {
            "custom" !== e.type && (0, n.s)(r, o || ""), "bullets" === e.type && t.pagination.bullets.push(...r.querySelectorAll(s(e.bulletClass)))
          }), "custom" !== e.type && a("paginationRender", i[0])
        }

        function h() {
          t.params.pagination = function(e, t, r, i) {
            return e.params.createElements && Object.keys(i).forEach(s => {
              if (!r[s] && !0 === r.auto) {
                let a = (0, n.e)(e.el, `.${i[s]}`)[0];
                a || (a = (0, n.c)("div", i[s]), a.className = i[s], e.el.append(a)), r[s] = a, t[s] = a
              }
            }), r
          }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let r;
          "string" == typeof e.el && t.isElement && (r = t.el.querySelector(e.el)), r || "string" != typeof e.el || (r = [...document.querySelectorAll(e.el)]), r || (r = e.el), r && 0 !== r.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(r) && r.length > 1 && (r = [...t.el.querySelectorAll(e.el)], r.length > 1 && (r = r.find(e => (0, n.b)(e, ".swiper")[0] === t.el))), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(t.pagination, {
            el: r
          }), r = (0, n.m)(r), r.forEach(r => {
            "bullets" === e.type && e.clickable && r.classList.add(...(e.clickableClass || "").split(" ")), r.classList.add(e.modifierClass + e.type), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (r.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && r.classList.add(e.progressbarOppositeClass), e.clickable && r.addEventListener("click", u), t.enabled || r.classList.add(e.lockClass)
          }))
        }

        function g() {
          const e = t.params.pagination;
          if (c()) return;
          let r = t.pagination.el;
          r && (r = (0, n.m)(r), r.forEach(r => {
            r.classList.remove(e.hiddenClass), r.classList.remove(e.modifierClass + e.type), r.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (r.classList.remove(...(e.clickableClass || "").split(" ")), r.removeEventListener("click", u))
          })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        i("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: r
          } = t.pagination;
          r = (0, n.m)(r), r.forEach(r => {
            r.classList.remove(e.horizontalClass, e.verticalClass), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), i("init", () => {
          !1 === t.params.pagination.enabled ? v() : (h(), m(), f())
        }), i("activeIndexChange", () => {
          void 0 === t.snapIndex && f()
        }), i("snapIndexChange", () => {
          f()
        }), i("snapGridLengthChange", () => {
          m(), f()
        }), i("destroy", () => {
          g()
        }), i("enable disable", () => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }), i("lock unlock", () => {
          f()
        }), i("click", (e, r) => {
          const i = r.target,
            s = (0, n.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && s && s.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
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
          extendParams: r,
          on: a
        } = e;
        r({
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
          const r = t.params.a11y,
            i = e.target;
          if (!t.pagination || !t.pagination.el || i !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(s(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, n.m)(t.navigation.prevEl);
              (0, n.m)(t.navigation.nextEl).includes(i) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? p(r.lastSlideMessage) : p(r.nextSlideMessage)), e.includes(i) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? p(r.firstSlideMessage) : p(r.prevSlideMessage))
            }
            t.pagination && i.matches(s(t.params.pagination.bulletClass)) && i.click()
          }
        }

        function y() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function E() {
          return y() && t.params.pagination.clickable
        }
        const S = (e, t, r) => {
            u(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", w)), g(e, r),
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
            const r = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!r || !t.slides.includes(r)) return;
            l = r;
            const i = t.slides.indexOf(r) === t.activeIndex,
              n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(r);
            i || n || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              o || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(r.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(r)), 0), o = !1)
            }))
          },
          A = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && h(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
            const r = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((i, n) => {
              const s = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n;
              g(i, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, r))
            })
          };
        a("beforeInit", () => {
          d = (0, n.c)("span", t.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), a("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(d);
            const r = t.el;
            e.containerRoleDescriptionMessage && h(r, e.containerRoleDescriptionMessage), e.containerMessage && g(r, e.containerMessage), e.containerRole && m(r, e.containerRole);
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
              }(s, l), A();
            let {
              nextEl: u,
              prevEl: f
            } = t.navigation ? t.navigation : {};
            u = (0, n.m)(u), f = (0, n.m)(f), u && u.forEach(t => S(t, a, e.nextSlideMessage)), f && f.forEach(t => S(t, a, e.prevSlideMessage)), E() && (0, n.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", w)
            }), (0, i.g)().addEventListener("visibilitychange", C), t.el.addEventListener("focus", M, !0), t.el.addEventListener("focus", M, !0), t.el.addEventListener("pointerdown", T, !0), t.el.addEventListener("pointerup", x, !0)
          })()
        }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && A()
        }), a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: r
            } = t.navigation;
            r && (t.isBeginning ? (v(r), f(r)) : (b(r), u(r))), e && (t.isEnd ? (v(e), f(e)) : (b(e), u(e)))
          }()
        }), a("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            y() && t.pagination.bullets.forEach(r => {
              t.params.pagination.clickable && (u(r), t.params.pagination.renderBullet || (m(r, "button"), g(r, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, n.i)(r) + 1)))), r.matches(s(t.params.pagination.bulletActiveClass)) ? r.setAttribute("aria-current", "true") : r.removeAttribute("aria-current")
            })
          }()
        }), a("destroy", () => {
          t.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: r
            } = t.navigation ? t.navigation : {};
            e = (0, n.m)(e), r = (0, n.m)(r), e && e.forEach(e => e.removeEventListener("keydown", w)), r && r.forEach(e => e.removeEventListener("keydown", w)), E() && (0, n.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", w)
            }), (0, i.g)().removeEventListener("visibilitychange", C), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", M, !0), t.el.removeEventListener("pointerdown", T, !0), t.el.removeEventListener("pointerup", x, !0))
          }()
        })
      }
    },
    37015(e, t, r) {
      "use strict";

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => r.indexOf(e) < 0).forEach(r => {
          void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && n(e[r], t[r])
        })
      }
      r.d(t, {
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
    20212(e, t, r) {
      "use strict";
      r.d(t, {
        a: () => p,
        b: () => E,
        c: () => g,
        e: () => f,
        f: () => a,
        h: () => S,
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
      var i = r(37015);

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
        const r = (0, i.a)();
        let n, s, a;
        const o = function(e) {
          const t = (0, i.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
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
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && !d(i)) {
            const r = Object.keys(Object(i)).filter(e => t.indexOf(e) < 0);
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                s = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== s && s.enumerable && (l(e[n]) && l(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : c(e[n], i[n]) : !l(e[n]) && l(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : c(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        return e
      }

      function p(e, t, r) {
        e.style.setProperty(t, r)
      }

      function u(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: n
        } = e;
        const s = (0, i.a)(),
          a = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > a ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              i = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + i * (r - a);
            if (p(c, r) && (c = r), t.wrapperEl.scrollTo({
                [n]: c
              }), p(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
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
        const r = (0, i.a)(),
          n = [...e.children];
        return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter(e => e.matches(t)) : n
      }

      function m(e, t) {
        const r = (0, i.a)();
        let n = t.contains(e);
        return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = function(e, t) {
          const r = [t];
          for (; r.length > 0;) {
            const t = r.shift();
            if (e === t) return !0;
            r.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
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
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter(e => !!e.trim())
        }(t)), r
      }

      function v(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), e = i
        }
        return r
      }

      function b(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), e = i
        }
        return r
      }

      function w(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function y(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function E(e, t) {
        const r = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && r.push(i) : r.push(i), i = i.parentElement;
        return r
      }

      function S(e, t, r) {
        const n = (0, i.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
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
    14653(e, t, r) {
      "use strict";
      r.d(t, {
        RC: () => Q,
        qr: () => ee
      });
      var i = r(93082),
        n = r(37015),
        s = r(20212);
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
          const r = d(),
            i = (0, n.a)(),
            s = i.navigator.platform,
            a = t || i.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = i.screen.width,
            c = i.screen.height,
            p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === s;
          let g = "MacIntel" === s;
          return !u && g && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), g = !1), p && !h && (o.os = "android", o.android = !0), (u || m || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }

      function p() {
        return l || (l = function() {
          const e = (0, n.a)(),
            t = c();
          let r = !1;

          function i() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (i()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
              r = e < 16 || 16 === e && i < 2
            }
          }
          const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            a = i();
          return {
            isSafari: r || a,
            needPerspectiveFix: r,
            need3dFix: a || s && t.ios,
            isWebView: s
          }
        }()), l
      }
      var u = {
        on(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = r ? "unshift" : "push";
          return e.split(" ").forEach(e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
          }), i
        },
        once(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
            t.apply(i, s)
          }
          return n.__emitterProxy = t, i.on(e, n, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const i = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
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
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach(e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach((i, n) => {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[e].splice(n, 1)
            })
          }), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, i;
          for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
          return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], r = s.slice(1, s.length), i = e) : (t = s[0].events, r = s[0].data, i = s[0].context || e), r.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
              e.apply(i, [t, ...r])
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
              e.apply(i, r)
            })
          }), e
        }
      };
      const f = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        m = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            })), t && t.remove()
          }
        },
        g = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        v = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            n = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = n,
              s = [r - t];
            return s.push(...Array.from({
              length: t
            }).map((e, t) => r + i + t)), void e.slides.forEach((t, r) => {
              s.includes(t.column) && g(e, r)
            })
          }
          const s = n + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = n - t; i <= s + t; i += 1) {
              const t = (i % r + r) % r;
              (t < n || t > s) && g(e, t)
            } else
              for (let i = Math.max(n - t, 0); i <= Math.min(s + t, r - 1); i += 1) i !== n && (i > s || i < n) && g(e, i)
        };
      var b = {
        updateSize: function() {
          const e = this;
          let t, r;
          const i = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, s.q)(i, "padding-left") || 0, 10) - parseInt((0, s.q)(i, "padding-right") || 0, 10), r = r - parseInt((0, s.q)(i, "padding-top") || 0, 10) - parseInt((0, s.q)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
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
              wrapperEl: i,
              slidesEl: n,
              size: a,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && r.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, s.e)(n, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const m = [],
            h = [];
          let g = r.slidesOffsetBefore;
          "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
          let v = r.slidesOffsetAfter;
          "function" == typeof v && (v = r.slidesOffsetAfter.call(e));
          const b = e.snapGrid.length,
            w = e.slidesGrid.length;
          let y = r.spaceBetween,
            E = -g,
            S = 0,
            T = 0;
          if (void 0 === a) return;
          "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * a : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, p.forEach(e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          }), r.centeredSlides && r.cssMode && ((0, s.a)(i, "--swiper-centered-offset-before", ""), (0, s.a)(i, "--swiper-centered-offset-after", ""));
          const x = r.grid && r.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
          for (let i = 0; i < u; i += 1) {
            let n;
            if (C = 0, p[i] && (n = p[i]), x && e.grid.updateSlide(i, n, p), !p[i] || "none" !== (0, s.q)(n, "display")) {
              if ("auto" === r.slidesPerView) {
                M && (p[i].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(n),
                  o = n.style.transform,
                  l = n.style.webkitTransform;
                if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? (0, s.h)(n, "width", !0) : (0, s.h)(n, "height", !0);
                else {
                  const e = t(a, "width"),
                    r = t(a, "padding-left"),
                    i = t(a, "padding-right"),
                    s = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + s + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = n;
                    C = e + r + i + s + o + (a - t)
                  }
                }
                o && (n.style.transform = o), l && (n.style.webkitTransform = l), r.roundLengths && (C = Math.floor(C))
              } else C = (a - (r.slidesPerView - 1) * y) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), p[i] && (p[i].style[e.getDirectionLabel("width")] = `${C}px`);
              p[i] && (p[i].swiperSlideSize = C), h.push(C), r.centeredSlides ? (E = E + C / 2 + S / 2 + y, 0 === S && 0 !== i && (E = E - a / 2 - y), 0 === i && (E = E - a / 2 - y), Math.abs(E) < .001 && (E = 0), r.roundLengths && (E = Math.floor(E)), T % r.slidesPerGroup === 0 && f.push(E), m.push(E)) : (r.roundLengths && (E = Math.floor(E)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && f.push(E), m.push(E), E = E + C + y), e.virtualSize += C + y, S = C, T += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + v, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${e.virtualSize+y}px`), r.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), x && e.grid.updateWrapperSize(C, f), !r.centeredSlides) {
            const t = [];
            for (let i = 0; i < f.length; i += 1) {
              let n = f[i];
              r.roundLengths && (n = Math.floor(n)), f[i] <= e.virtualSize - a && t.push(n)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && r.loop) {
            const t = h[0] + y;
            if (r.slidesPerGroup > 1) {
              const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                n = t * r.slidesPerGroup;
              for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + n)
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== y) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter((e, t) => !(r.cssMode && !r.loop) || t !== p.length - 1).forEach(e => {
              e.style[t] = `${y}px`
            })
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach(t => {
              e += t + (y || 0)
            }), e -= y;
            const t = e > a ? e - a : 0;
            f = f.map(e => e <= 0 ? -g : e > t ? t + v : e)
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            h.forEach(t => {
              e += t + (y || 0)
            }), e -= y;
            const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
            if (e + t < a) {
              const r = (a - e - t) / 2;
              f.forEach((e, t) => {
                f[t] = e - r
              }), m.forEach((e, t) => {
                m[t] = e + r
              })
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: h
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, s.a)(i, "--swiper-centered-offset-before", -f[0] + "px"), (0, s.a)(i, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + r)
          }
          if (u !== c && e.emit("slidesLengthChange"), f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            u <= r.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            i = t.virtual && t.params.virtual.enabled;
          let n, s = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach(e => {
              r.push(e)
            });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                r.push(a(e))
              } else r.push(a(t.activeIndex));
          for (n = 0; n < r.length; n += 1)
            if (void 0 !== r[n]) {
              const e = r[n].offsetHeight;
              s = e > s ? e : s
            }(s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: i,
              rtlTranslate: n,
              snapGrid: s
            } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          n && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c = (a + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = -(a - d),
              m = u + t.slidesSizesGrid[e],
              h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
              g = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
            g && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), f(l, g, r.slideVisibleClass), f(l, h, r.slideFullyVisibleClass), l.progress = n ? -c : c, l.originalProgress = n ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let {
            progress: n,
            isBeginning: s,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = s,
            d = a;
          if (0 === i) n = 0, s = !0, a = !0;
          else {
            n = (e - t.minTranslate()) / i;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            s = r || n <= 0, a = o || n >= 1, r && (n = 0), o && (n = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              n = t.slidesGrid[r],
              s = t.slidesGrid[i],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= n ? (l - n) / a : (l + a - s) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: n,
            progressLoop: o,
            isBeginning: s,
            isEnd: a
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: i,
              activeIndex: n
            } = e,
            a = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, s.e)(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, p;
          if (a)
            if (r.loop) {
              let t = n - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${n}"]`);
          else o ? (d = t.find(e => e.column === n), p = t.find(e => e.column === n + 1), c = t.find(e => e.column === n - 1)) : d = t[n];
          d && (o || (p = (0, s.r)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && !p && (p = t[0]), c = (0, s.t)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach(e => {
            m(e, e === d, r.slideActiveClass), m(e, e === p, r.slideNextClass), m(e, e === c, r.slidePrevClass)
          }), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: n,
              activeIndex: s,
              realIndex: a,
              snapIndex: o
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
              } = e, i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? n = e : i >= t[e] && i < t[e + 1] && (n = e + 1) : i >= t[e] && (n = e);
              return r.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            }(t)), i.indexOf(r) >= 0) l = i.indexOf(r);
          else {
            const e = Math.min(n.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / n.slidesPerGroup)
          }
          if (l >= i.length && (l = i.length - 1), d === s && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && n.grid && n.grid.rows > 1;
          let u;
          if (t.virtual && n.virtual.enabled && n.loop) u = c(d);
          else if (p) {
            const e = t.slides.find(e => e.column === d);
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(r / n.grid.rows)
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
          const r = this,
            i = r.params;
          let n = e.closest(`.${i.slideClass}, swiper-slide`);
          !n && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
            !n && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (n = e)
          });
          let s, a = !1;
          if (n)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === n) {
                a = !0, s = e;
                break
              } if (!n || !a) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = n, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, i.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function w(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: i,
          step: n
        } = e;
        const {
          activeIndex: s,
          previousIndex: a
        } = t;
        let o = i;
        o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${n}`), r && "reset" === o ? t.emit(`slideResetTransition${n}`) : r && s !== a && (t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`))
      }
      var y = {
          slideTo: function(e, t, r, i, n) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
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
            if (!g && !i && !n || a.destroyed || a.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = a.params.speed);
            const v = Math.min(a.params.slidesPerGroupSkip, o);
            let b = v + Math.floor((o - v) / a.params.slidesPerGroup);
            b >= d.length && (b = d.length - 1);
            const w = -d[b];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  r = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < i - (i - r) / 2 ? o = e : t >= r && t < i && (o = e + 1) : t >= r && (o = e)
              }
            if (a.initialized && o !== f) {
              if (!a.allowSlideNext && (m ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (f || 0) !== o) return !1
            }
            let y;
            o !== (u || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(w), y = o > f ? "next" : o < f ? "prev" : "reset";
            const E = a.virtual && a.params.virtual.enabled;
            if ((!E || !n) && (m && -w === a.translate || !m && w === a.translate)) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(w), "reset" !== y && (a.transitionStart(r, y), a.transitionEnd(r, y)), !1;
            if (l.cssMode) {
              const e = a.isHorizontal(),
                r = m ? w : -w;
              if (0 === t) E && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), E && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                h[e ? "scrollLeft" : "scrollTop"] = r
              })) : h[e ? "scrollLeft" : "scrollTop"] = r, E && requestAnimationFrame(() => {
                a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
              });
              else {
                if (!a.support.smoothScroll) return (0, s.u)({
                  swiper: a,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                h.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const S = p().isSafari;
            return E && !n && S && a.isElement && a.virtual.update(!1, !1, o), a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(r, y), 0 === t ? a.transitionEnd(r, y) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, y))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, i) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
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
                    centeredSlides: r
                  } = n.params;
                let o = n.params.slidesPerView;
                "auto" === o ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(n.params.slidesPerView, 10)), r && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (r && (l = l || e < Math.ceil(o / 2)), i && r && "auto" !== n.params.slidesPerView && !s && (l = !1), l) {
                  const i = r ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                  n.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? n.realIndex : void 0
                  })
                }
                if (s) {
                  const e = a * n.params.grid.rows;
                  a = n.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                } else a = n.getSlideIndexByData(a)
              } return requestAnimationFrame(() => {
              n.slideTo(a, t, r, i)
            }), n
          },
          slideNext: function(e, t, r) {
            void 0 === t && (t = !0);
            const i = this,
              {
                enabled: n,
                params: s,
                animating: a
              } = i;
            if (!n || i.destroyed) return i;
            void 0 === e && (e = i.params.speed);
            let o = s.slidesPerGroup;
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
              d = i.virtual && s.virtual.enabled;
            if (s.loop) {
              if (a && !d && s.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && s.cssMode) return requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + l, e, t, r)
              }), !0
            }
            return s.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === t && (t = !0);
            const i = this,
              {
                params: n,
                snapGrid: s,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = i;
            if (!l || i.destroyed) return i;
            void 0 === e && (e = i.params.speed);
            const c = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (d && !c && n.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(o ? i.translate : -i.translate),
              f = s.map(e => p(e)),
              m = n.freeMode && n.freeMode.enabled;
            let h = s[f.indexOf(u) - 1];
            if (void 0 === h && (n.cssMode || m)) {
              let e;
              s.forEach((t, r) => {
                u >= t && (e = r)
              }), void 0 !== e && (h = m ? s[e] : s[e > 0 ? e - 1 : e])
            }
            let g = 0;
            if (void 0 !== h && (g = a.indexOf(h), g < 0 && (g = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (g = g - i.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), n.rewind && i.isBeginning) {
              const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(n, e, t, r)
            }
            return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame(() => {
              i.slideTo(g, e, t, r)
            }), !0) : i.slideTo(g, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === t && (t = !0);
            const i = this;
            if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, i) {
            void 0 === t && (t = !0), void 0 === i && (i = .5);
            const n = this;
            if (n.destroyed) return;
            void 0 === e && (e = n.params.speed);
            let s = n.activeIndex;
            const a = Math.min(n.params.slidesPerGroupSkip, s),
              o = a + Math.floor((s - a) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[o]) {
              const e = n.snapGrid[o];
              l - e > (n.snapGrid[o + 1] - e) * i && (s += n.params.slidesPerGroup)
            } else {
              const e = n.snapGrid[o - 1];
              l - e <= (n.snapGrid[o] - e) * i && (s -= n.params.slidesPerGroup)
            }
            return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, a = e.getSlideIndexWhenGrid(e.clickedIndex);
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
              l = e.grid && e.params.grid && e.params.grid.rows > 1;
            if (t.loop) {
              if (e.animating) return;
              n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(n) : a > (l ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), a = e.getSlideIndex((0, s.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, s.n)(() => {
                e.slideTo(a)
              })) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        E = {
          loopCreate: function(e, t) {
            const r = this,
              {
                params: i,
                slidesEl: n
              } = r;
            if (!i.loop || r.virtual && r.params.virtual.enabled) return;
            const a = () => {
                (0, s.e)(n, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                })
              },
              o = r.grid && i.grid && i.grid.rows > 1;
            i.loopAddBlankSlides && (i.slidesPerGroup > 1 || o) && (() => {
              const e = (0, s.e)(n, `.${i.slideBlankClass}`);
              e.forEach(e => {
                e.remove()
              }), e.length > 0 && (r.recalcSlides(), r.updateSlides())
            })();
            const l = i.slidesPerGroup * (o ? i.grid.rows : 1),
              d = r.slides.length % l !== 0,
              c = o && r.slides.length % i.grid.rows !== 0,
              p = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = r.isElement ? (0, s.c)("swiper-slide", [i.slideBlankClass]) : (0, s.c)("div", [i.slideClass, i.slideBlankClass]);
                  r.slidesEl.append(e)
                }
              };
            d ? (i.loopAddBlankSlides ? (p(l - r.slides.length % l), r.recalcSlides(), r.updateSlides()) : (0, s.v)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : c ? (i.loopAddBlankSlides ? (p(i.grid.rows - r.slides.length % i.grid.rows), r.recalcSlides(), r.updateSlides()) : (0, s.v)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : a(), r.loopFix({
              slideRealIndex: e,
              direction: i.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: i,
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
            if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && h.virtual.enabled) return r && (h.centeredSlides || 0 !== c.snapIndex ? h.centeredSlides && c.snapIndex < h.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = u, c.allowSlideNext = f, void c.emit("loopFix");
            let b = h.slidesPerView;
            "auto" === b ? b = c.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(h.slidesPerView, 10)), g && b % 2 == 0 && (b += 1));
            const w = h.slidesPerGroupAuto ? b : h.slidesPerGroup;
            let y = g ? Math.max(w, Math.ceil(b / 2)) : w;
            y % w !== 0 && (y += w - y % w), y += h.loopAdditionalSlides, c.loopedSlides = y;
            const E = c.grid && h.grid && h.grid.rows > 1;
            p.length < b + y || "cards" === c.params.effect && p.length < b + 2 * y ? (0, s.v)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && "row" === h.grid.fill && (0, s.v)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              T = [],
              x = E ? Math.ceil(p.length / h.grid.rows) : p.length,
              C = o && x - v < b && !g;
            let M = C ? v : c.activeIndex;
            void 0 === a ? a = c.getSlideIndex(p.find(e => e.classList.contains(h.slideActiveClass))) : M = a;
            const A = "next" === i || !i,
              k = "prev" === i || !i;
            let L = 0,
              _ = 0;
            const P = (E ? p[a].column : a) + (g && void 0 === n ? -b / 2 + .5 : 0);
            if (P < y) {
              L = Math.max(y - P, w);
              for (let e = 0; e < y - P; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (E) {
                  const e = x - t - 1;
                  for (let t = p.length - 1; t >= 0; t -= 1) p[t].column === e && S.push(t)
                } else S.push(x - t - 1)
              }
            } else if (P + b > x - y) {
              _ = Math.max(P - (x - 2 * y), w), C && (_ = Math.max(_, b - x + v + 1));
              for (let e = 0; e < _; e += 1) {
                const t = e - Math.floor(e / x) * x;
                E ? p.forEach((e, r) => {
                  e.column === t && T.push(r)
                }) : T.push(t)
              }
            }
            if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
                c.__preventObserver__ = !1
              }), "cards" === c.params.effect && p.length < b + 2 * y && (T.includes(a) && T.splice(T.indexOf(a), 1), S.includes(a) && S.splice(S.indexOf(a), 1)), k && S.forEach(e => {
                p[e].swiperLoopMoveDOM = !0, m.prepend(p[e]), p[e].swiperLoopMoveDOM = !1
              }), A && T.forEach(e => {
                p[e].swiperLoopMoveDOM = !0, m.append(p[e]), p[e].swiperLoopMoveDOM = !1
              }), c.recalcSlides(), "auto" === h.slidesPerView ? c.updateSlides() : E && (S.length > 0 && k || T.length > 0 && A) && c.slides.forEach((e, t) => {
                c.grid.updateSlide(t, e, c.slides)
              }), h.watchSlidesProgress && c.updateSlidesOffset(), r)
              if (S.length > 0 && k) {
                if (void 0 === t) {
                  const e = c.slidesGrid[M],
                    t = c.slidesGrid[M + L] - e;
                  d ? c.setTranslate(c.translate - t) : (c.slideTo(M + Math.ceil(L), 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                } else if (n) {
                  const e = E ? S.length / h.grid.rows : S.length;
                  c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                }
              } else if (T.length > 0 && A)
              if (void 0 === t) {
                const e = c.slidesGrid[M],
                  t = c.slidesGrid[M - _] - e;
                d ? c.setTranslate(c.translate - t) : (c.slideTo(M - _, 0, !1, !0), n && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
              } else {
                const e = E ? T.length / h.grid.rows : T.length;
                c.slideTo(c.activeIndex - e, 0, !1, !0)
              } if (c.allowSlidePrev = u, c.allowSlideNext = f, c.controller && c.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: n,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(c.controller.control) ? c.controller.control.forEach(t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && r
                })
              }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                ...e,
                slideTo: c.controller.control.params.slidesPerView === h.slidesPerView && r
              })
            }
            c.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || !r || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach(e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              i[t] = e
            }), e.slides.forEach(e => {
              e.removeAttribute("data-swiper-slide-index")
            }), i.forEach(e => {
              r.append(e)
            }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function S(e, t, r) {
        const i = (0, n.a)(),
          {
            params: s
          } = e,
          a = s.edgeSwipeDetection,
          o = s.edgeSwipeThreshold;
        return !a || !(r <= o || r >= i.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function T(e) {
        const t = this,
          r = (0, n.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
          a.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void S(t, i, i.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === o.touchEventsTarget && !(0, s.w)(c, t.wrapperEl)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!o.noSwipingClass && "" !== o.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        p && i.target && i.target.shadowRoot && u && (c = u[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          m = !(!i.target || !i.target.shadowRoot);
        if (o.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, n.g)() || r === (0, n.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const i = r.closest(e);
                return i || r.getRootNode ? i || t(r.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = i.pageX, l.currentY = i.pageY;
        const h = l.currentX,
          g = l.currentY;
        if (!S(t, i, h)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = h, l.startY = g, a.touchStartTime = (0, s.f)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
        let v = !0;
        c.matches(a.focusableElements) && (v = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), r.activeElement && r.activeElement.matches(a.focusableElements) && r.activeElement !== c && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !c.matches(a.focusableElements)) && r.activeElement.blur();
        const b = v && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !b || c.isContentEditable || i.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
      }

      function x(e) {
        const t = (0, n.g)(),
          r = this,
          i = r.touchEventsData,
          {
            params: a,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = r;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== i.touchId) return;
          if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].find(e => e.identifier === i.touchId), !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", p));
        const u = c.pageX,
          f = c.pageY;
        if (p.preventedByNestedSwiper) return o.startX = u, void(o.startY = f);
        if (!r.allowTouchMove) return p.target.matches(i.focusableElements) || (r.allowClick = !1), void(i.isTouched && (Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), i.touchStartTime = (0, s.f)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (r.isVertical()) {
            if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else {
            if (l && (u > o.startX && -r.translate <= r.maxTranslate() || u < o.startX && -r.translate >= r.minTranslate())) return;
            if (!l && (u < o.startX && r.translate <= r.maxTranslate() || u > o.startX && r.translate >= r.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(r.allowClick = !1);
        i.allowTouchCallbacks && r.emit("touchMove", p), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = f;
        const m = o.currentX - o.startX,
          h = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(m ** 2 + h ** 2) < r.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, i.isScrolling = r.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (i.isScrolling && r.emit("touchMoveOpposite", p), void 0 === i.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        r.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let g = r.isHorizontal() ? m : h,
          v = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), o.diff = g, g *= a.touchRatio, l && (g = -g, v = -v);
        const b = r.touchesDirection;
        r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
        const w = r.params.loop && !a.cssMode,
          y = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!i.isMoved) {
          if (w && y && r.loopFix({
              direction: r.swipeDirection
            }), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            r.wrapperEl.dispatchEvent(e)
          }
          i.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), !1 !== a._loopSwapReset && i.isMoved && i.allowThresholdMove && b !== r.touchesDirection && w && y && Math.abs(g) >= 1) return Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        r.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
        let E = !0,
          S = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (S = 0), g > 0 ? (w && y && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - ("auto" !== a.slidesPerView && r.slides.length - a.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > r.minTranslate() && (E = !1, a.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + g) ** S))) : g < 0 && (w && y && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + ("auto" !== a.slidesPerView && r.slides.length - a.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === a.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), i.currentTranslate < r.maxTranslate() && (E = !1, a.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - g) ** S))), E && (p.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
          if (!(Math.abs(g) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
      }

      function C(e) {
        const t = this,
          r = t.touchEventsData;
        let i, n = e;
        if (n.originalEvent && (n = n.originalEvent), "touchend" === n.type || "touchcancel" === n.type) {
          if (i = [...n.changedTouches].find(e => e.identifier === r.touchId), !i || i.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (n.pointerId !== r.pointerId) return;
          i = n
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && (!["pointercancel", "contextmenu"].includes(n.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === n.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        a.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, s.f)(),
          u = p - r.touchStartTime;
        if (t.allowClick) {
          const e = n.path || n.composedPath && n.composedPath();
          t.updateClickedSlide(e && e[0] || n.target, e), t.emit("tap click", n), u < 300 && p - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
        }
        if (r.lastClickTime = (0, s.f)(), (0, s.n)(() => {
            t.destroyed || (t.allowClick = !0)
          }), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let f;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = a.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, a.cssMode) return;
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
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: n,
          snapGrid: s
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }, 500)), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
      }

      function A(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function k() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: i
          } = e;
        if (!i) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, n !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
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
          const r = (0, n.g)(),
            {
              params: i,
              el: s,
              wrapperEl: a,
              device: o
            } = e,
            l = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          s && "string" != typeof s && (r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), s[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), s[d]("pointerdown", e.onTouchStart, {
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
          }), (i.preventClicks || i.preventClicksPropagation) && s[d]("click", e.onClick, !0), i.cssMode && a[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", M, !0) : e[c]("observerUpdate", M, !0), s[d]("load", e.onLoad, {
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
        return function(r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            n = r[i];
          "object" == typeof n && null !== n ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in n ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), (0, s.x)(t, r)) : (0, s.x)(t, r)) : (0, s.x)(t, r)
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
                rtlTranslate: r,
                translate: i,
                wrapperEl: n
              } = this;
              if (t.virtualTranslate) return r ? -i : i;
              if (t.cssMode) return i;
              let a = (0, s.k)(n, e);
              return a += this.cssOverflowAdjustment(), r && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: i,
                  params: n,
                  wrapperEl: s,
                  progress: a
                } = r;
              let o, l = 0,
                d = 0;
              r.isHorizontal() ? l = i ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, n.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : n.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, i, n) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: l
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let p;
              if (p = i && e > d ? d : i && e < c ? c : e, a.updateProgress(p), o.cssMode) {
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
              return 0 === t ? (a.setTransition(0), a.setTranslate(p), r && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), r && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, r && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
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
                  params: i
                } = r;
              i.cssMode || (i.autoHeight && r.updateAutoHeight(), w({
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
                  params: i
                } = r;
              r.animating = !1, i.cssMode || (r.setTransition(0), w({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: y,
          loop: E,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
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
              e.onTouchStart = T.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = C.bind(e), e.onDocumentTouchStart = _.bind(e), t.cssMode && (e.onScroll = k.bind(e)), e.onClick = A.bind(e), e.onLoad = L.bind(e), P(e, "on")
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
                  initialized: r,
                  params: i,
                  el: a
                } = e,
                o = i.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const l = (0, n.g)(),
                d = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase,
                c = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : l.querySelector(i.breakpointsBase),
                p = e.getBreakpoint(o, d, c);
              if (!p || e.currentBreakpoint === p) return;
              const u = (p in o ? o[p] : void 0) || e.originalParams,
                f = O(e, i),
                m = O(e, u),
                h = e.params.grabCursor,
                g = u.grabCursor,
                v = i.enabled;
              f && !m ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !f && m && (a.classList.add(`${i.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === i.grid.fill) && a.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !g ? e.unsetGrabCursor() : !h && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                if (void 0 === u[t]) return;
                const r = i[t] && i[t].enabled,
                  n = u[t] && u[t].enabled;
                r && !n && e[t].disable(), !r && n && e[t].enable()
              });
              const b = u.direction && u.direction !== i.direction,
                w = i.loop && (u.slidesPerView !== i.slidesPerView || b),
                y = i.loop;
              b && r && e.changeDirection(), (0, s.x)(e.params, u);
              const E = e.params.enabled,
                S = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), v && !E ? e.disable() : !v && E && e.enable(), e.currentBreakpoint = p, e.emit("_beforeBreakpoint", u), r && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && S ? (e.loopCreate(t), e.updateSlides()) : y && !S && e.loopDestroy()), e.emit("breakpoint", u)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let i = !1;
              const s = (0, n.a)(),
                a = "window" === t ? s.innerHeight : r.clientHeight,
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
                "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = n) : a <= r.clientWidth && (i = n)
              }
              return i || "max"
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
                  slidesOffsetBefore: i
                } = r;
              if (i) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
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
                  rtl: i,
                  el: n,
                  device: s
                } = e,
                a = function(e, t) {
                  const r = [];
                  return e.forEach(e => {
                    "object" == typeof e ? Object.keys(e).forEach(i => {
                      e[i] && r.push(t + i)
                    }) : "string" == typeof e && r.push(t + e)
                  }), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: i
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
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, s.x)({}, t), e && !t.el && (t.el = e);
          const o = (0, n.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach(r => {
              const i = (0, s.x)({}, t, {
                el: r
              });
              e.push(new R(i))
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
            params: r
          } = this, i = (0, s.e)(t, `.${r.slideClass}, swiper-slide`), n = (0, s.i)(i[0]);
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
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = r.minTranslate(),
            n = (r.maxTranslate() - i) * e + i;
          r.translateTo(n, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
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
          e.slides.forEach(r => {
            const i = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: i
            }), e.emit("_slideClass", r, i)
          }), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: s,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < i.length; r += 1) i[r] && !e && (t += Math.ceil(i[r].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1)(t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let n;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
              t.complete && h(e, t)
            }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              n = e.slideTo(t.length - 1, 0, !1, !0)
            } else n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || i()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            i = r.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach(t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          }), r.emit("changeDirection"), t && r.update()), r
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
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let n = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : (0, s.e)(r, i())[0];
          return !n && t.params.createElements && (n = (0, s.c)("div", t.params.wrapperClass), r.append(n), (0, s.e)(r, `.${t.params.slideClass}`).forEach(e => {
            n.append(e)
          })), Object.assign(t, {
            el: r,
            wrapperEl: n,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, s.q)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, s.q)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, s.q)(n, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach(e => {
            e.complete ? h(t, e) : e.addEventListener("load", e => {
              h(t, e.target)
            })
          }), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: i,
              el: n,
              wrapperEl: a,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), n && "string" != typeof n && n.removeAttribute("style"), a && a.removeAttribute("style"), o && o.length && o.forEach(e => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(e => {
            r.off(e)
          }), !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null), (0, s.y)(r)), r.destroyed = !0), null
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
          on: r,
          emit: i
        } = e;
        const s = (0, n.a)();
        let a = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        r("init", () => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
            o = s.requestAnimationFrame(() => {
              const {
                width: r,
                height: i
              } = t;
              let n = r,
                s = i;
              e.forEach(e => {
                let {
                  contentBoxSize: r,
                  contentRect: i,
                  target: a
                } = e;
                a && a !== t.el || (n = i ? i.width : (r[0] || r).inlineSize, s = i ? i.height : (r[0] || r).blockSize)
              }), n === r && s === i || l()
            })
          }), a.observe(t.el)) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", d))
        }), r("destroy", () => {
          o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
        })
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: a
        } = e;
        const o = [],
          l = (0, n.a)(),
          d = function(e, r) {
            void 0 === r && (r = {});
            const i = new(l.MutationObserver || l.WebkitMutationObserver)(e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const r = function() {
                a("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            });
            i.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: t.isElement || (void 0 === r.childList || r).childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(i)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", () => {
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
        }), i("destroy", () => {
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
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => r.indexOf(e) < 0).forEach(r => {
          void 0 === e[r] ? e[r] = t[r] : B(t[r]) && B(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : F(e[r], t[r]) : e[r] = t[r]
        })
      }

      function $(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function H(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function j(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function V(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map(e => e.trim()).filter(e => !!e),
          r = [];
        return t.forEach(e => {
          r.indexOf(e) < 0 && r.push(e)
        }), r.join(" ")
      }

      function W(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function U() {
        return U = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, U.apply(this, arguments)
      }

      function q(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function X(e) {
        const t = [];
        return i.Children.toArray(e).forEach(e => {
          q(e) ? t.push(e) : e.props && e.props.children && X(e.props.children).forEach(e => t.push(e))
        }), t
      }

      function Y(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach(e => {
          if (q(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = X(e.props.children);
            i.length > 0 ? i.forEach(e => t.push(e)) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        }), {
          slides: t,
          slots: r
        }
      }

      function K(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const Z = (0, i.createContext)(null),
        J = (0, i.createContext)(null),
        Q = (0, i.forwardRef)(function(e, t) {
          let {
            className: r,
            tag: n = "div",
            wrapperTag: a = "div",
            children: o,
            onSwiper: l,
            ...d
          } = void 0 === e ? {} : e, c = !1;
          const [p, u] = (0, i.useState)("swiper"), [f, m] = (0, i.useState)(null), [h, g] = (0, i.useState)(!1), v = (0, i.useRef)(!1), b = (0, i.useRef)(null), w = (0, i.useRef)(null), y = (0, i.useRef)(null), E = (0, i.useRef)(null), S = (0, i.useRef)(null), T = (0, i.useRef)(null), x = (0, i.useRef)(null), C = (0, i.useRef)(null), {
            params: M,
            passedParams: A,
            rest: k,
            events: L
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              i = {},
              n = {};
            F(r, I), r._emitClasses = !0, r.init = !1;
            const s = {},
              a = G.map(e => e.replace(/_/, "")),
              o = Object.assign({}, e);
            return Object.keys(o).forEach(o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? B(e[o]) ? (r[o] = {}, n[o] = {}, F(r[o], e[o]), F(n[o], e[o])) : (r[o] = e[o], n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s[o] = e[o])
            }), ["navigation", "pagination", "scrollbar"].forEach(e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            }), {
              params: r,
              passedParams: n,
              rest: s,
              events: i
            }
          }(d), {
            slides: _,
            slots: P
          } = Y(o), O = () => {
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
          return b.current || N(), w.current && w.current.on("_beforeBreakpoint", O), (0, i.useEffect)(() => () => {
            w.current && w.current.off("_beforeBreakpoint", O)
          }), (0, i.useEffect)(() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          }), K(() => {
            if (t && (t.current = b.current), b.current) return w.current.destroyed && N(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: i,
                  prevEl: n,
                  paginationEl: s,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                $(t) && i && n && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), H(t) && s && (o.params.pagination.el = s, o.originalParams.pagination.el = s), j(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(r)
              }({
                el: b.current,
                nextEl: S.current,
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
            const e = function(e, t, r, i, n) {
              const s = [];
              if (!t) return s;
              const a = e => {
                s.indexOf(e) < 0 && s.push(e)
              };
              if (r && i) {
                const e = i.map(n),
                  t = r.map(n);
                e.join("") !== t.join("") && a("children"), i.length !== r.length && a("children")
              }
              return G.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(r => {
                if (r in e && r in t)
                  if (B(e[r]) && B(t[r])) {
                    const i = Object.keys(e[r]),
                      n = Object.keys(t[r]);
                    i.length !== n.length ? a(r) : (i.forEach(i => {
                      e[r][i] !== t[r][i] && a(r)
                    }), n.forEach(i => {
                      e[r][i] !== t[r][i] && a(r)
                    }))
                  } else e[r] !== t[r] && a(r)
              }), s
            }(A, y.current, _, E.current, e => e.key);
            return y.current = A, E.current = _, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: i,
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
              let v, b, w, y, E, S, T, x;
              n.includes("thumbs") && i.thumbs && i.thumbs.swiper && !i.thumbs.swiper.destroyed && p.thumbs && (!p.thumbs.swiper || p.thumbs.swiper.destroyed) && (v = !0), n.includes("controller") && i.controller && i.controller.control && p.controller && !p.controller.control && (b = !0), n.includes("pagination") && i.pagination && (i.pagination.el || d) && (p.pagination || !1 === p.pagination) && u && !u.el && (w = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (y = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || o) && (i.navigation.nextEl || a) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (E = !0);
              const C = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), p[e].prevEl = void 0, p[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), p[e].el = void 0, t[e].el = void 0))
              };
              n.includes("loop") && t.isElement && (p.loop && !i.loop ? S = !0 : !p.loop && i.loop ? T = !0 : x = !0), c.forEach(e => {
                if (B(p[e]) && B(i[e])) Object.assign(p[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || C(e);
                else {
                  const t = i[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = i[e] : !1 === t && C(e)
                }
              }), c.includes("controller") && !b && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), n.includes("children") && r && h && p.virtual.enabled ? (h.slides = r, h.update(!0)) : n.includes("virtual") && h && p.virtual.enabled && (r && (h.slides = r), h.update(!0)), n.includes("children") && r && p.loop && (x = !0), v && g.init() && g.update(!0), b && (t.controller.control = p.controller.control), w && (!t.isElement || d && "string" != typeof d || (d = document.createElement("div"), d.classList.add("swiper-pagination"), d.part.add("pagination"), t.el.appendChild(d)), d && (p.pagination.el = d), u.init(), u.render(), u.update()), y && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (p.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), E && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), (0, s.s)(a, t.hostEl.constructor.nextButtonSvg), a.part.add("button-next"), t.el.appendChild(a)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), (0, s.s)(o, t.hostEl.constructor.prevButtonSvg), o.part.add("button-prev"), t.el.appendChild(o))), a && (p.navigation.nextEl = a), o && (p.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && t.changeDirection(i.direction, !1), (S || x) && t.loopDestroy(), (T || x) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: _,
              passedParams: A,
              changedParams: e,
              nextEl: S.current,
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
          }, [f]), i.createElement(n, U({
            ref: b,
            className: V(`${p}${r?` ${r}`:""}`)
          }, k), i.createElement(J.Provider, {
            value: w.current
          }, P["container-start"], i.createElement(a, {
            className: W(M.wrapperClass)
          }, P["wrapper-start"], M.virtual ? function(e, t, r) {
            if (!r) return null;
            const n = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              s = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: a,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[n(e)]);
            return c.map((t, r) => i.cloneElement(t, {
              swiper: e,
              style: s,
              key: t.props.virtualIndex || t.key || `slide-${r}`
            }))
          }(w.current, _, f) : _.map((e, t) => i.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          })), P["wrapper-end"]), $(M) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: T,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: S,
            className: "swiper-button-next"
          })), j(M) && i.createElement("div", {
            ref: C,
            className: "swiper-scrollbar"
          }), H(M) && i.createElement("div", {
            ref: x,
            className: "swiper-pagination"
          }), P["container-end"]))
        });
      Q.displayName = "Swiper";
      const ee = (0, i.forwardRef)(function(e, t) {
        let {
          tag: r = "div",
          children: n,
          className: s = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [f, m] = (0, i.useState)("swiper-slide"),
          [h, g] = (0, i.useState)(!1);

        function v(e, t, r) {
          t === u.current && m(r)
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
        return i.createElement(r, U({
          ref: u,
          className: V(`${f}${s?` ${s}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            g(!0)
          }
        }, p), o && i.createElement(Z.Provider, {
          value: b
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, w(), l && !h && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && i.createElement(Z.Provider, {
          value: b
        }, w(), l && !h && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      });
      ee.displayName = "SwiperSlide"
    }
  }
]);