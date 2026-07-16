try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "def6f209-4144-4e50-9832-29fa32307f23", e._sentryDebugIdIdentifier = "sentry-dbid-def6f209-4144-4e50-9832-29fa32307f23")
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
  [3059, 9496], {
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

        function t(e, n) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, n)
        }

        function n(e, r, a) {
          return n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, n, r) {
            var a = [null];
            a.push.apply(a, n);
            var i = new(Function.bind.apply(e, a));
            return r && t(i, r.prototype), i
          }, n.apply(null, arguments)
        }

        function r(e) {
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
          o = Object.setPrototypeOf,
          l = Object.isFrozen,
          s = Object.getPrototypeOf,
          c = Object.getOwnPropertyDescriptor,
          u = Object.freeze,
          d = Object.seal,
          p = Object.create,
          f = "undefined" != typeof Reflect && Reflect,
          m = f.apply,
          g = f.construct;
        m || (m = function(e, t, n) {
          return e.apply(t, n)
        }), u || (u = function(e) {
          return e
        }), d || (d = function(e) {
          return e
        }), g || (g = function(e, t) {
          return n(e, r(t))
        });
        var h, y = k(Array.prototype.forEach),
          b = k(Array.prototype.pop),
          v = k(Array.prototype.push),
          E = k(String.prototype.toLowerCase),
          w = k(String.prototype.toString),
          T = k(String.prototype.match),
          A = k(String.prototype.replace),
          N = k(String.prototype.indexOf),
          S = k(String.prototype.trim),
          x = k(RegExp.prototype.test),
          _ = (h = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g(h, t)
          });

        function k(e) {
          return function(t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            return m(e, t, r)
          }
        }

        function L(e, t, n) {
          var r;
          n = null !== (r = n) && void 0 !== r ? r : E, o && o(e, null);
          for (var a = t.length; a--;) {
            var i = t[a];
            if ("string" == typeof i) {
              var s = n(i);
              s !== i && (l(t) || (t[a] = s), i = s)
            }
            e[i] = !0
          }
          return e
        }

        function M(e) {
          var t, n = p(null);
          for (t in e) !0 === m(i, e, [t]) && (n[t] = e[t]);
          return n
        }

        function D(e, t) {
          for (; null !== e;) {
            var n = c(e, t);
            if (n) {
              if (n.get) return k(n.get);
              if ("function" == typeof n.value) return k(n.value)
            }
            e = s(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var C = u(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          R = u(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          O = u(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          I = u(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          U = u(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          F = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          H = u(["#text"]),
          z = u(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          P = u(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          j = u(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          B = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          W = d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          G = d(/<%[\w\W]*|[\w\W]*%>/gm),
          V = d(/\${[\w\W]*}/gm),
          $ = d(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          q = d(/^aria-[\-\w]+$/),
          K = d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          Y = d(/^(?:\w+script|data):/i),
          X = d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = d(/^html$/i),
          Q = d(/^[a-z][.\w]*(-[.\w]+)+$/i),
          J = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
            a = function(e) {
              return t(e)
            };
          if (a.version = "2.5.9", a.removed = [], !n || !n.document || 9 !== n.document.nodeType) return a.isSupported = !1, a;
          var i = n.document,
            o = n.document,
            l = n.DocumentFragment,
            s = n.HTMLTemplateElement,
            c = n.Node,
            d = n.Element,
            p = n.NodeFilter,
            f = n.NamedNodeMap,
            m = void 0 === f ? n.NamedNodeMap || n.MozNamedAttrMap : f,
            g = n.HTMLFormElement,
            h = n.DOMParser,
            k = n.trustedTypes,
            ee = d.prototype,
            te = D(ee, "cloneNode"),
            ne = D(ee, "nextSibling"),
            re = D(ee, "childNodes"),
            ae = D(ee, "parentNode");
          if ("function" == typeof s) {
            var ie = o.createElement("template");
            ie.content && ie.content.ownerDocument && (o = ie.content.ownerDocument)
          }
          var oe = function(t, n) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var r = null,
                a = "data-tt-policy-suffix";
              n.currentScript && n.currentScript.hasAttribute(a) && (r = n.currentScript.getAttribute(a));
              var i = "dompurify" + (r ? "#" + r : "");
              try {
                return t.createPolicy(i, {
                  createHTML: function(e) {
                    return e
                  },
                  createScriptURL: function(e) {
                    return e
                  }
                })
              } catch (e) {
                return console.warn("TrustedTypes policy " + i + " could not be created."), null
              }
            }(k, i),
            le = oe ? oe.createHTML("") : "",
            se = o,
            ce = se.implementation,
            ue = se.createNodeIterator,
            de = se.createDocumentFragment,
            pe = se.getElementsByTagName,
            fe = i.importNode,
            me = {};
          try {
            me = M(o).documentMode ? o.documentMode : {}
          } catch (e) {}
          var ge = {};
          a.isSupported = "function" == typeof ae && ce && void 0 !== ce.createHTMLDocument && 9 !== me;
          var he, ye, be = W,
            ve = G,
            Ee = V,
            we = $,
            Te = q,
            Ae = Y,
            Ne = X,
            Se = Q,
            xe = K,
            _e = null,
            ke = L({}, [].concat(r(C), r(R), r(O), r(U), r(H))),
            Le = null,
            Me = L({}, [].concat(r(z), r(P), r(j), r(B))),
            De = Object.seal(Object.create(null, {
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
            Ce = null,
            Re = null,
            Oe = !0,
            Ie = !0,
            Ue = !1,
            Fe = !0,
            He = !1,
            ze = !0,
            Pe = !1,
            je = !1,
            Be = !1,
            We = !1,
            Ge = !1,
            Ve = !1,
            $e = !0,
            qe = !1,
            Ke = !0,
            Ye = !1,
            Xe = {},
            Ze = null,
            Qe = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Je = null,
            et = L({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            nt = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            rt = "http://www.w3.org/1998/Math/MathML",
            at = "http://www.w3.org/2000/svg",
            it = "http://www.w3.org/1999/xhtml",
            ot = it,
            lt = !1,
            st = null,
            ct = L({}, [rt, at, it], w),
            ut = ["application/xhtml+xml", "text/html"],
            dt = null,
            pt = o.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            mt = function(t) {
              dt && dt === t || (t && "object" === e(t) || (t = {}), t = M(t), he = he = -1 === ut.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === he ? w : E, _e = "ALLOWED_TAGS" in t ? L({}, t.ALLOWED_TAGS, ye) : ke, Le = "ALLOWED_ATTR" in t ? L({}, t.ALLOWED_ATTR, ye) : Me, st = "ALLOWED_NAMESPACES" in t ? L({}, t.ALLOWED_NAMESPACES, w) : ct, tt = "ADD_URI_SAFE_ATTR" in t ? L(M(nt), t.ADD_URI_SAFE_ATTR, ye) : nt, Je = "ADD_DATA_URI_TAGS" in t ? L(M(et), t.ADD_DATA_URI_TAGS, ye) : et, Ze = "FORBID_CONTENTS" in t ? L({}, t.FORBID_CONTENTS, ye) : Qe, Ce = "FORBID_TAGS" in t ? L({}, t.FORBID_TAGS, ye) : {}, Re = "FORBID_ATTR" in t ? L({}, t.FORBID_ATTR, ye) : {}, Xe = "USE_PROFILES" in t && t.USE_PROFILES, Oe = !1 !== t.ALLOW_ARIA_ATTR, Ie = !1 !== t.ALLOW_DATA_ATTR, Ue = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Fe = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, He = t.SAFE_FOR_TEMPLATES || !1, ze = !1 !== t.SAFE_FOR_XML, Pe = t.WHOLE_DOCUMENT || !1, We = t.RETURN_DOM || !1, Ge = t.RETURN_DOM_FRAGMENT || !1, Ve = t.RETURN_TRUSTED_TYPE || !1, Be = t.FORCE_BODY || !1, $e = !1 !== t.SANITIZE_DOM, qe = t.SANITIZE_NAMED_PROPS || !1, Ke = !1 !== t.KEEP_CONTENT, Ye = t.IN_PLACE || !1, xe = t.ALLOWED_URI_REGEXP || xe, ot = t.NAMESPACE || it, De = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (De.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (De.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (De.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), He && (Ie = !1), Ge && (We = !0), Xe && (_e = L({}, r(H)), Le = [], !0 === Xe.html && (L(_e, C), L(Le, z)), !0 === Xe.svg && (L(_e, R), L(Le, P), L(Le, B)), !0 === Xe.svgFilters && (L(_e, O), L(Le, P), L(Le, B)), !0 === Xe.mathMl && (L(_e, U), L(Le, j), L(Le, B))), t.ADD_TAGS && (_e === ke && (_e = M(_e)), L(_e, t.ADD_TAGS, ye)), t.ADD_ATTR && (Le === Me && (Le = M(Le)), L(Le, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && L(tt, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ze === Qe && (Ze = M(Ze)), L(Ze, t.FORBID_CONTENTS, ye)), Ke && (_e["#text"] = !0), Pe && L(_e, ["html", "head", "body"]), _e.table && (L(_e, ["tbody"]), delete Ce.tbody), u && u(t), dt = t)
            },
            gt = L({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ht = L({}, ["annotation-xml"]),
            yt = L({}, ["title", "style", "font", "a", "script"]),
            bt = L({}, R);
          L(bt, O), L(bt, I);
          var vt = L({}, U);
          L(vt, F);
          var Et = function(e) {
              v(a.removed, {
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
            wt = function(e, t) {
              try {
                v(a.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                v(a.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !Le[e])
                if (We || Ge) try {
                  Et(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Tt = function(e) {
              var t, n;
              if (Be) e = "<remove></remove>" + e;
              else {
                var r = T(e, /^[\r\n\t ]+/);
                n = r && r[0]
              }
              "application/xhtml+xml" === he && ot === it && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var a = oe ? oe.createHTML(e) : e;
              if (ot === it) try {
                t = (new h).parseFromString(a, he)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = ce.createDocument(ot, "template", null);
                try {
                  t.documentElement.innerHTML = lt ? le : a
                } catch (e) {}
              }
              var i = t.body || t.documentElement;
              return e && n && i.insertBefore(o.createTextNode(n), i.childNodes[0] || null), ot === it ? pe.call(t, Pe ? "html" : "body")[0] : Pe ? t.documentElement : i
            },
            At = function(e) {
              return ue.call(e.ownerDocument || e, e, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION, null, !1)
            },
            Nt = function(e) {
              return e instanceof g && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof m) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            St = function(t) {
              return "object" === e(c) ? t instanceof c : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            xt = function(e, t, n) {
              ge[e] && y(ge[e], function(e) {
                e.call(a, t, n, dt)
              })
            },
            _t = function(e) {
              var t;
              if (xt("beforeSanitizeElements", e, null), Nt(e)) return Et(e), !0;
              if (x(/[\u0080-\uFFFF]/, e.nodeName)) return Et(e), !0;
              var n = ye(e.nodeName);
              if (xt("uponSanitizeElement", e, {
                  tagName: n,
                  allowedTags: _e
                }), e.hasChildNodes() && !St(e.firstElementChild) && (!St(e.content) || !St(e.content.firstElementChild)) && x(/<[/\w]/g, e.innerHTML) && x(/<[/\w]/g, e.textContent)) return Et(e), !0;
              if ("select" === n && x(/<template/i, e.innerHTML)) return Et(e), !0;
              if (7 === e.nodeType) return Et(e), !0;
              if (ze && 8 === e.nodeType && x(/<[/\w]/g, e.data)) return Et(e), !0;
              if (!_e[n] || Ce[n]) {
                if (!Ce[n] && Lt(n)) {
                  if (De.tagNameCheck instanceof RegExp && x(De.tagNameCheck, n)) return !1;
                  if (De.tagNameCheck instanceof Function && De.tagNameCheck(n)) return !1
                }
                if (Ke && !Ze[n]) {
                  var r = ae(e) || e.parentNode,
                    i = re(e) || e.childNodes;
                  if (i && r)
                    for (var o = i.length - 1; o >= 0; --o) {
                      var l = te(i[o], !0);
                      l.__removalCount = (e.__removalCount || 0) + 1, r.insertBefore(l, ne(e))
                    }
                }
                return Et(e), !0
              }
              return e instanceof d && ! function(e) {
                var t = ae(e);
                t && t.tagName || (t = {
                  namespaceURI: ot,
                  tagName: "template"
                });
                var n = E(e.tagName),
                  r = E(t.tagName);
                return !!st[e.namespaceURI] && (e.namespaceURI === at ? t.namespaceURI === it ? "svg" === n : t.namespaceURI === rt ? "svg" === n && ("annotation-xml" === r || gt[r]) : Boolean(bt[n]) : e.namespaceURI === rt ? t.namespaceURI === it ? "math" === n : t.namespaceURI === at ? "math" === n && ht[r] : Boolean(vt[n]) : e.namespaceURI === it ? !(t.namespaceURI === at && !ht[r]) && !(t.namespaceURI === rt && !gt[r]) && !vt[n] && (yt[n] || !bt[n]) : !("application/xhtml+xml" !== he || !st[e.namespaceURI]))
              }(e) ? (Et(e), !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !x(/<\/no(script|embed|frames)/i, e.innerHTML) ? (He && 3 === e.nodeType && (t = e.textContent, t = A(t, be, " "), t = A(t, ve, " "), t = A(t, Ee, " "), e.textContent !== t && (v(a.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), xt("afterSanitizeElements", e, null), !1) : (Et(e), !0)
            },
            kt = function(e, t, n) {
              if ($e && ("id" === t || "name" === t) && (n in o || n in pt)) return !1;
              if (Ie && !Re[t] && x(we, t));
              else if (Oe && x(Te, t));
              else if (!Le[t] || Re[t]) {
                if (!(Lt(e) && (De.tagNameCheck instanceof RegExp && x(De.tagNameCheck, e) || De.tagNameCheck instanceof Function && De.tagNameCheck(e)) && (De.attributeNameCheck instanceof RegExp && x(De.attributeNameCheck, t) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(t)) || "is" === t && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && x(De.tagNameCheck, n) || De.tagNameCheck instanceof Function && De.tagNameCheck(n)))) return !1
              } else if (tt[t]);
              else if (x(xe, A(n, Ne, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== N(n, "data:") || !Je[e])
                if (Ue && !x(Ae, A(n, Ne, "")));
                else if (n) return !1;
              return !0
            },
            Lt = function(e) {
              return "annotation-xml" !== e && T(e, Se)
            },
            Mt = function(t) {
              var n, r, i, o;
              xt("beforeSanitizeAttributes", t, null);
              var l = t.attributes;
              if (l && !Nt(t)) {
                var s = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: Le
                };
                for (o = l.length; o--;) {
                  var c = n = l[o],
                    u = c.name,
                    d = c.namespaceURI;
                  if (r = "value" === u ? n.value : S(n.value), i = ye(u), s.attrName = i, s.attrValue = r, s.keepAttr = !0, s.forceKeepAttr = void 0, xt("uponSanitizeAttribute", t, s), r = s.attrValue, !s.forceKeepAttr && (wt(u, t), s.keepAttr))
                    if (Fe || !x(/\/>/i, r)) {
                      He && (r = A(r, be, " "), r = A(r, ve, " "), r = A(r, Ee, " "));
                      var p = ye(t.nodeName);
                      if (kt(p, i, r))
                        if (!qe || "id" !== i && "name" !== i || (wt(u, t), r = "user-content-" + r), ze && x(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, r)) wt(u, t);
                        else {
                          if (oe && "object" === e(k) && "function" == typeof k.getAttributeType)
                            if (d);
                            else switch (k.getAttributeType(p, i)) {
                              case "TrustedHTML":
                                r = oe.createHTML(r);
                                break;
                              case "TrustedScriptURL":
                                r = oe.createScriptURL(r)
                            }
                          try {
                            d ? t.setAttributeNS(d, u, r) : t.setAttribute(u, r), Nt(t) ? Et(t) : b(a.removed)
                          } catch (e) {}
                        }
                    } else wt(u, t)
                }
                xt("afterSanitizeAttributes", t, null)
              }
            },
            Dt = function e(t) {
              var n, r = At(t);
              for (xt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) xt("uponSanitizeShadowNode", n, null), _t(n), Mt(n), n.content instanceof l && e(n.content);
              xt("afterSanitizeShadowDOM", t, null)
            };
          return a.sanitize = function(t) {
            var r, o, s, u, d, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((lt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !St(t)) {
              if ("function" != typeof t.toString) throw _("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw _("dirty is not a string, aborting")
            }
            if (!a.isSupported) {
              if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                if ("string" == typeof t) return n.toStaticHTML(t);
                if (St(t)) return n.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (je || mt(p), a.removed = [], "string" == typeof t && (Ye = !1), Ye) {
              if (t.nodeName) {
                var f = ye(t.nodeName);
                if (!_e[f] || Ce[f]) throw _("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof c) 1 === (o = (r = Tt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? r = o : r.appendChild(o);
            else {
              if (!We && !He && !Pe && -1 === t.indexOf("<")) return oe && Ve ? oe.createHTML(t) : t;
              if (!(r = Tt(t))) return We ? null : Ve ? le : ""
            }
            r && Be && Et(r.firstChild);
            for (var m = At(Ye ? t : r); s = m.nextNode();) 3 === s.nodeType && s === u || (_t(s), Mt(s), s.content instanceof l && Dt(s.content), u = s);
            if (u = null, Ye) return t;
            if (We) {
              if (Ge)
                for (d = de.call(r.ownerDocument); r.firstChild;) d.appendChild(r.firstChild);
              else d = r;
              return (Le.shadowroot || Le.shadowrootmod) && (d = fe.call(i, d, !0)), d
            }
            var g = Pe ? r.outerHTML : r.innerHTML;
            return Pe && _e["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && x(Z, r.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + g), He && (g = A(g, be, " "), g = A(g, ve, " "), g = A(g, Ee, " ")), oe && Ve ? oe.createHTML(g) : g
          }, a.setConfig = function(e) {
            mt(e), je = !0
          }, a.clearConfig = function() {
            dt = null, je = !1
          }, a.isValidAttribute = function(e, t, n) {
            dt || mt({});
            var r = ye(e),
              a = ye(t);
            return kt(r, a, n)
          }, a.addHook = function(e, t) {
            "function" == typeof t && (ge[e] = ge[e] || [], v(ge[e], t))
          }, a.removeHook = function(e) {
            if (ge[e]) return b(ge[e])
          }, a.removeHooks = function(e) {
            ge[e] && (ge[e] = [])
          }, a.removeAllHooks = function() {
            ge = {}
          }, a
        }()
      }()
    },
    39279(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => s
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let a;
      const i = new Uint8Array(16);

      function o() {
        if (!a && (a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !a)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return a(i)
      }
      const l = [];
      for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
      const s = function(e, t, n) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const a = (e = e || {}).random || (e.rng || o)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = a[e];
          return t
        }
        return function(e, t = 0) {
          return l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]
        }(a)
      }
    },
    69088(e, t, n) {
      "use strict";
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => l
      });
      var r = n(17172),
        a = n(39793),
        i = n(93082),
        o = n(84045);
      const l = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? o.s6 : i.Fragment;
        return (0, a.jsx)(n, {
          ...t
        })
      }
    },
    64239(e, t, n) {
      "use strict";
      n.d(t, {
        s: () => i
      });
      var r = n(93082);

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return r.useCallback(function(...e) {
          return t => {
            let n = !1;
            const r = e.map(e => {
              const r = a(e, t);
              return n || "function" != typeof r || (n = !0), r
            });
            if (n) return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                "function" == typeof n ? n() : a(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    13165(e, t, n) {
      "use strict";
      n.d(t, {
        hO: () => s,
        sG: () => l
      });
      var r = n(93082),
        a = n(84017),
        i = n(17172),
        o = n(39793),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, i.TL)(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: a,
                ...i
              } = e, l = a ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(l, {
                ...i,
                ref: r
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {});

      function s(e, t) {
        e && a.flushSync(() => e.dispatchEvent(t))
      }
    },
    17172(e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        DX: () => l,
        Dc: () => c,
        TL: () => o,
        xV: () => u
      });
      var a = n(93082),
        i = n(64239);

      function o(e) {
        const t = a.forwardRef((t, n) => {
          let {
            children: r,
            ...o
          } = t, l = null, c = !1;
          const u = [];
          f(r) && "function" == typeof h && (r = h(r._payload)), a.Children.forEach(r, e => {
            if (t = e, a.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === s) {
              c = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              f(n) && "function" == typeof h && (n = h(n._payload)), l = d(t, n), u.push(l?.props?.children)
            } else u.push(e);
            var t
          }), l ? l = a.cloneElement(l, void 0, u) : !c && 1 === a.Children.count(r) && a.isValidElement(r) && (l = r);
          const p = l ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(l) : void 0,
            y = (0, i.s)(n, p);
          if (!l) {
            if (r || 0 === r) throw new Error(c ? g(e) : m(e));
            return r
          }
          const b = function(e, t) {
            const n = {
              ...t
            };
            for (const r in t) {
              const a = e[r],
                i = t[r];
              /^on[A-Z]/.test(r) ? a && i ? n[r] = (...e) => {
                const t = i(...e);
                return a(...e), t
              } : a && (n[r] = a) : "style" === r ? n[r] = {
                ...a,
                ...i
              } : "className" === r && (n[r] = [a, i].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(o, l.props ?? {});
          return l.type !== a.Fragment && (b.ref = n ? y : p), a.cloneElement(l, b)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var l = o("Slot"),
        s = Symbol.for("radix.slottable");

      function c(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = s, t
      }
      var u = c("Slottable"),
        d = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return a.isValidElement(t) ? a.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return a.isValidElement(t) ? t : null
        },
        p = Symbol.for("react.lazy");

      function f(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var m = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        g = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        h = (r || (r = n.t(a, 2)))[" use ".trim().toString()]
    },
    84045(e, t, n) {
      "use strict";
      n.d(t, {
        Qg: () => o,
        bL: () => s,
        s6: () => l
      });
      var r = n(93082),
        a = n(13165),
        i = n(39793),
        o = Object.freeze({
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
        l = r.forwardRef((e, t) => (0, i.jsx)(a.sG.span, {
          ...e,
          ref: t,
          style: {
            ...o,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var s = l
    },
    73059(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => o
      });
      var r = n(37015),
        a = n(20219),
        i = n(20212);

      function o(e) {
        let {
          swiper: t,
          extendParams: n,
          on: o
        } = e;
        n({
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
        let l, s, c = null,
          u = (new Date).getTime();

        function d(e) {
          const t = c;
          0 !== t.length && (0, i.s)(t, e)
        }

        function p(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function f(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function m(e, t) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function g(e, t) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function h(e, t) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
          })
        }

        function y(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function b(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function v(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const n = t.params.a11y,
            r = e.target;
          if (!t.pagination || !t.pagination.el || r !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches((0, a.c)(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, i.m)(t.navigation.prevEl);
              (0, i.m)(t.navigation.nextEl).includes(r) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(n.lastSlideMessage) : d(n.nextSlideMessage)), e.includes(r) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(n.firstSlideMessage) : d(n.prevSlideMessage))
            }
            t.pagination && r.matches((0, a.c)(t.params.pagination.bulletClass)) && r.click()
          }
        }

        function E() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function w() {
          return E() && t.params.pagination.clickable
        }
        const T = (e, t, n) => {
            p(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", v)), h(e, n),
              function(e, t) {
                (e = (0, i.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          A = e => {
            s && s !== e.target && !s.contains(e.target) && (l = !0), t.a11y.clicked = !0
          },
          N = () => {
            l = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1)
              })
            })
          },
          S = e => {
            u = (new Date).getTime()
          },
          x = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - u < 100) return;
            const n = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!n || !t.slides.includes(n)) return;
            s = n;
            const r = t.slides.indexOf(n) === t.activeIndex,
              a = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
            r || a || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              l || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(n.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(n)), 0), l = !1)
            }))
          },
          _ = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && g(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
            const n = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((r, a) => {
              const i = t.params.loop ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : a;
              h(r, e.slideLabelMessage.replace(/\{\{index\}\}/, i + 1).replace(/\{\{slidesLength\}\}/, n))
            })
          };
        o("beforeInit", () => {
          c = (0, i.c)("span", t.params.a11y.notificationClass), c.setAttribute("aria-live", "assertive"), c.setAttribute("aria-atomic", "true")
        }), o("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(c);
            const n = t.el;
            e.containerRoleDescriptionMessage && g(n, e.containerRoleDescriptionMessage), e.containerMessage && h(n, e.containerMessage), e.containerRole && m(n, e.containerRole);
            const a = t.wrapperEl,
              o = e.id || a.getAttribute("id") || `swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var l;
            const s = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var u, d;
            u = a, d = o, (u = (0, i.m)(u)).forEach(e => {
                e.setAttribute("id", d)
              }),
              function(e, t) {
                (e = (0, i.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(a, s), _();
            let {
              nextEl: p,
              prevEl: f
            } = t.navigation ? t.navigation : {};
            p = (0, i.m)(p), f = (0, i.m)(f), p && p.forEach(t => T(t, o, e.nextSlideMessage)), f && f.forEach(t => T(t, o, e.prevSlideMessage)), w() && (0, i.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", v)
            }), (0, r.g)().addEventListener("visibilitychange", S), t.el.addEventListener("focus", x, !0), t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", A, !0), t.el.addEventListener("pointerup", N, !0)
          })()
        }), o("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && _()
        }), o("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: n
            } = t.navigation;
            n && (t.isBeginning ? (y(n), f(n)) : (b(n), p(n))), e && (t.isEnd ? (y(e), f(e)) : (b(e), p(e)))
          }()
        }), o("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            E() && t.pagination.bullets.forEach(n => {
              t.params.pagination.clickable && (p(n), t.params.pagination.renderBullet || (m(n, "button"), h(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, i.i)(n) + 1)))), n.matches((0, a.c)(t.params.pagination.bulletActiveClass)) ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current")
            })
          }()
        }), o("destroy", () => {
          t.params.a11y.enabled && function() {
            c && c.remove();
            let {
              nextEl: e,
              prevEl: n
            } = t.navigation ? t.navigation : {};
            e = (0, i.m)(e), n = (0, i.m)(n), e && e.forEach(e => e.removeEventListener("keydown", v)), n && n.forEach(e => e.removeEventListener("keydown", v)), w() && (0, i.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", v)
            }), (0, r.g)().removeEventListener("visibilitychange", S), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", A, !0), t.el.removeEventListener("pointerup", N, !0))
          }()
        })
      }
    },
    44128(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => i
      });
      var r = n(37015),
        a = n(20212);

      function i(e) {
        let {
          swiper: t,
          extendParams: n,
          on: i,
          emit: o
        } = e;
        const l = (0, r.g)(),
          s = (0, r.a)();

        function c(e) {
          if (!t.enabled) return;
          const {
            rtlTranslate: n
          } = t;
          let r = e;
          r.originalEvent && (r = r.originalEvent);
          const i = r.keyCode || r.charCode,
            c = t.params.keyboard.pageUpDown,
            u = c && 33 === i,
            d = c && 34 === i,
            p = 37 === i,
            f = 39 === i,
            m = 38 === i,
            g = 40 === i;
          if (!t.allowSlideNext && (t.isHorizontal() && f || t.isVertical() && g || d)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || u)) return !1;
          if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || l.activeElement && (l.activeElement.isContentEditable || l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase())))) {
            if (t.params.keyboard.onlyInViewport && (u || d || p || f || m || g)) {
              let e = !1;
              if ((0, a.b)(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, a.b)(t.el, `.${t.params.slideActiveClass}`).length) return;
              const r = t.el,
                i = r.clientWidth,
                o = r.clientHeight,
                l = s.innerWidth,
                c = s.innerHeight,
                u = (0, a.d)(r);
              n && (u.left -= r.scrollLeft);
              const d = [
                [u.left, u.top],
                [u.left + i, u.top],
                [u.left, u.top + o],
                [u.left + i, u.top + o]
              ];
              for (let t = 0; t < d.length; t += 1) {
                const n = d[t];
                if (n[0] >= 0 && n[0] <= l && n[1] >= 0 && n[1] <= c) {
                  if (0 === n[0] && 0 === n[1]) continue;
                  e = !0
                }
              }
              if (!e) return
            }
            t.isHorizontal() ? ((u || d || p || f) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((d || f) && !n || (u || p) && n) && t.slideNext(), ((u || p) && !n || (d || f) && n) && t.slidePrev()) : ((u || d || m || g) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (d || g) && t.slideNext(), (u || m) && t.slidePrev()), o("keyPress", i)
          }
        }

        function u() {
          t.keyboard.enabled || (l.addEventListener("keydown", c), t.keyboard.enabled = !0)
        }

        function d() {
          t.keyboard.enabled && (l.removeEventListener("keydown", c), t.keyboard.enabled = !1)
        }
        t.keyboard = {
          enabled: !1
        }, n({
          keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
          }
        }), i("init", () => {
          t.params.keyboard.enabled && u()
        }), i("destroy", () => {
          t.keyboard.enabled && d()
        }), Object.assign(t.keyboard, {
          enable: u,
          disable: d
        })
      }
    }
  }
]);