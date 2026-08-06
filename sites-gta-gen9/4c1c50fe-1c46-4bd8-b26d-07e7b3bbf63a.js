try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4c1c50fe-1c46-4bd8-b26d-07e7b3bbf63a", e._sentryDebugIdIdentifier = "sentry-dbid-4c1c50fe-1c46-4bd8-b26d-07e7b3bbf63a")
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
  [1075, 3059], {
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

        function n(e, a, r) {
          return n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, n, a) {
            var r = [null];
            r.push.apply(r, n);
            var i = new(Function.bind.apply(e, r));
            return a && t(i, a.prototype), i
          }, n.apply(null, arguments)
        }

        function a(e) {
          return function(e) {
            if (Array.isArray(e)) return r(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
          return a
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
          return n(e, a(t))
        });
        var h, y = _(Array.prototype.forEach),
          b = _(Array.prototype.pop),
          v = _(Array.prototype.push),
          E = _(String.prototype.toLowerCase),
          T = _(String.prototype.toString),
          w = _(String.prototype.match),
          A = _(String.prototype.replace),
          N = _(String.prototype.indexOf),
          k = _(String.prototype.trim),
          S = _(RegExp.prototype.test),
          x = (h = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g(h, t)
          });

        function _(e) {
          return function(t) {
            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
            return m(e, t, a)
          }
        }

        function L(e, t, n) {
          var a;
          n = null !== (a = n) && void 0 !== a ? a : E, o && o(e, null);
          for (var r = t.length; r--;) {
            var i = t[r];
            if ("string" == typeof i) {
              var s = n(i);
              s !== i && (l(t) || (t[r] = s), i = s)
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

        function C(e, t) {
          for (; null !== e;) {
            var n = c(e, t);
            if (n) {
              if (n.get) return _(n.get);
              if ("function" == typeof n.value) return _(n.value)
            }
            e = s(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var D = u(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          R = u(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          O = u(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          I = u(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          U = u(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          F = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          H = u(["#text"]),
          z = u(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          P = u(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          B = u(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          j = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          G = d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = d(/<%[\w\W]*|[\w\W]*%>/gm),
          V = d(/\${[\w\W]*}/gm),
          q = d(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          $ = d(/^aria-[\-\w]+$/),
          K = d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          Y = d(/^(?:\w+script|data):/i),
          X = d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = d(/^html$/i),
          J = d(/^[a-z][.\w]*(-[.\w]+)+$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            r = function(e) {
              return t(e)
            };
          if (r.version = "2.5.9", r.removed = [], !n || !n.document || 9 !== n.document.nodeType) return r.isSupported = !1, r;
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
            _ = n.trustedTypes,
            ee = d.prototype,
            te = C(ee, "cloneNode"),
            ne = C(ee, "nextSibling"),
            ae = C(ee, "childNodes"),
            re = C(ee, "parentNode");
          if ("function" == typeof s) {
            var ie = o.createElement("template");
            ie.content && ie.content.ownerDocument && (o = ie.content.ownerDocument)
          }
          var oe = function(t, n) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var a = null,
                r = "data-tt-policy-suffix";
              n.currentScript && n.currentScript.hasAttribute(r) && (a = n.currentScript.getAttribute(r));
              var i = "dompurify" + (a ? "#" + a : "");
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
            }(_, i),
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
          r.isSupported = "function" == typeof re && ce && void 0 !== ce.createHTMLDocument && 9 !== me;
          var he, ye, be = G,
            ve = W,
            Ee = V,
            Te = q,
            we = $,
            Ae = Y,
            Ne = X,
            ke = J,
            Se = K,
            xe = null,
            _e = L({}, [].concat(a(D), a(R), a(O), a(U), a(H))),
            Le = null,
            Me = L({}, [].concat(a(z), a(P), a(B), a(j))),
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
            De = null,
            Re = null,
            Oe = !0,
            Ie = !0,
            Ue = !1,
            Fe = !0,
            He = !1,
            ze = !0,
            Pe = !1,
            Be = !1,
            je = !1,
            Ge = !1,
            We = !1,
            Ve = !1,
            qe = !0,
            $e = !1,
            Ke = !0,
            Ye = !1,
            Xe = {},
            Ze = null,
            Je = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = L({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            nt = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            at = "http://www.w3.org/1998/Math/MathML",
            rt = "http://www.w3.org/2000/svg",
            it = "http://www.w3.org/1999/xhtml",
            ot = it,
            lt = !1,
            st = null,
            ct = L({}, [at, rt, it], T),
            ut = ["application/xhtml+xml", "text/html"],
            dt = null,
            pt = o.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            mt = function(t) {
              dt && dt === t || (t && "object" === e(t) || (t = {}), t = M(t), he = he = -1 === ut.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === he ? T : E, xe = "ALLOWED_TAGS" in t ? L({}, t.ALLOWED_TAGS, ye) : _e, Le = "ALLOWED_ATTR" in t ? L({}, t.ALLOWED_ATTR, ye) : Me, st = "ALLOWED_NAMESPACES" in t ? L({}, t.ALLOWED_NAMESPACES, T) : ct, tt = "ADD_URI_SAFE_ATTR" in t ? L(M(nt), t.ADD_URI_SAFE_ATTR, ye) : nt, Qe = "ADD_DATA_URI_TAGS" in t ? L(M(et), t.ADD_DATA_URI_TAGS, ye) : et, Ze = "FORBID_CONTENTS" in t ? L({}, t.FORBID_CONTENTS, ye) : Je, De = "FORBID_TAGS" in t ? L({}, t.FORBID_TAGS, ye) : {}, Re = "FORBID_ATTR" in t ? L({}, t.FORBID_ATTR, ye) : {}, Xe = "USE_PROFILES" in t && t.USE_PROFILES, Oe = !1 !== t.ALLOW_ARIA_ATTR, Ie = !1 !== t.ALLOW_DATA_ATTR, Ue = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Fe = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, He = t.SAFE_FOR_TEMPLATES || !1, ze = !1 !== t.SAFE_FOR_XML, Pe = t.WHOLE_DOCUMENT || !1, Ge = t.RETURN_DOM || !1, We = t.RETURN_DOM_FRAGMENT || !1, Ve = t.RETURN_TRUSTED_TYPE || !1, je = t.FORCE_BODY || !1, qe = !1 !== t.SANITIZE_DOM, $e = t.SANITIZE_NAMED_PROPS || !1, Ke = !1 !== t.KEEP_CONTENT, Ye = t.IN_PLACE || !1, Se = t.ALLOWED_URI_REGEXP || Se, ot = t.NAMESPACE || it, Ce = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ce.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ce.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ce.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), He && (Ie = !1), We && (Ge = !0), Xe && (xe = L({}, a(H)), Le = [], !0 === Xe.html && (L(xe, D), L(Le, z)), !0 === Xe.svg && (L(xe, R), L(Le, P), L(Le, j)), !0 === Xe.svgFilters && (L(xe, O), L(Le, P), L(Le, j)), !0 === Xe.mathMl && (L(xe, U), L(Le, B), L(Le, j))), t.ADD_TAGS && (xe === _e && (xe = M(xe)), L(xe, t.ADD_TAGS, ye)), t.ADD_ATTR && (Le === Me && (Le = M(Le)), L(Le, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && L(tt, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ze === Je && (Ze = M(Ze)), L(Ze, t.FORBID_CONTENTS, ye)), Ke && (xe["#text"] = !0), Pe && L(xe, ["html", "head", "body"]), xe.table && (L(xe, ["tbody"]), delete De.tbody), u && u(t), dt = t)
            },
            gt = L({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ht = L({}, ["annotation-xml"]),
            yt = L({}, ["title", "style", "font", "a", "script"]),
            bt = L({}, R);
          L(bt, O), L(bt, I);
          var vt = L({}, U);
          L(vt, F);
          var Et = function(e) {
              v(r.removed, {
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
            Tt = function(e, t) {
              try {
                v(r.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                v(r.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !Le[e])
                if (Ge || We) try {
                  Et(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            wt = function(e) {
              var t, n;
              if (je) e = "<remove></remove>" + e;
              else {
                var a = w(e, /^[\r\n\t ]+/);
                n = a && a[0]
              }
              "application/xhtml+xml" === he && ot === it && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var r = oe ? oe.createHTML(e) : e;
              if (ot === it) try {
                t = (new h).parseFromString(r, he)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = ce.createDocument(ot, "template", null);
                try {
                  t.documentElement.innerHTML = lt ? le : r
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
            kt = function(t) {
              return "object" === e(c) ? t instanceof c : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            St = function(e, t, n) {
              ge[e] && y(ge[e], function(e) {
                e.call(r, t, n, dt)
              })
            },
            xt = function(e) {
              var t;
              if (St("beforeSanitizeElements", e, null), Nt(e)) return Et(e), !0;
              if (S(/[\u0080-\uFFFF]/, e.nodeName)) return Et(e), !0;
              var n = ye(e.nodeName);
              if (St("uponSanitizeElement", e, {
                  tagName: n,
                  allowedTags: xe
                }), e.hasChildNodes() && !kt(e.firstElementChild) && (!kt(e.content) || !kt(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent)) return Et(e), !0;
              if ("select" === n && S(/<template/i, e.innerHTML)) return Et(e), !0;
              if (7 === e.nodeType) return Et(e), !0;
              if (ze && 8 === e.nodeType && S(/<[/\w]/g, e.data)) return Et(e), !0;
              if (!xe[n] || De[n]) {
                if (!De[n] && Lt(n)) {
                  if (Ce.tagNameCheck instanceof RegExp && S(Ce.tagNameCheck, n)) return !1;
                  if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)) return !1
                }
                if (Ke && !Ze[n]) {
                  var a = re(e) || e.parentNode,
                    i = ae(e) || e.childNodes;
                  if (i && a)
                    for (var o = i.length - 1; o >= 0; --o) {
                      var l = te(i[o], !0);
                      l.__removalCount = (e.__removalCount || 0) + 1, a.insertBefore(l, ne(e))
                    }
                }
                return Et(e), !0
              }
              return e instanceof d && ! function(e) {
                var t = re(e);
                t && t.tagName || (t = {
                  namespaceURI: ot,
                  tagName: "template"
                });
                var n = E(e.tagName),
                  a = E(t.tagName);
                return !!st[e.namespaceURI] && (e.namespaceURI === rt ? t.namespaceURI === it ? "svg" === n : t.namespaceURI === at ? "svg" === n && ("annotation-xml" === a || gt[a]) : Boolean(bt[n]) : e.namespaceURI === at ? t.namespaceURI === it ? "math" === n : t.namespaceURI === rt ? "math" === n && ht[a] : Boolean(vt[n]) : e.namespaceURI === it ? !(t.namespaceURI === rt && !ht[a]) && !(t.namespaceURI === at && !gt[a]) && !vt[n] && (yt[n] || !bt[n]) : !("application/xhtml+xml" !== he || !st[e.namespaceURI]))
              }(e) ? (Et(e), !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (He && 3 === e.nodeType && (t = e.textContent, t = A(t, be, " "), t = A(t, ve, " "), t = A(t, Ee, " "), e.textContent !== t && (v(r.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), St("afterSanitizeElements", e, null), !1) : (Et(e), !0)
            },
            _t = function(e, t, n) {
              if (qe && ("id" === t || "name" === t) && (n in o || n in pt)) return !1;
              if (Ie && !Re[t] && S(Te, t));
              else if (Oe && S(we, t));
              else if (!Le[t] || Re[t]) {
                if (!(Lt(e) && (Ce.tagNameCheck instanceof RegExp && S(Ce.tagNameCheck, e) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(e)) && (Ce.attributeNameCheck instanceof RegExp && S(Ce.attributeNameCheck, t) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(t)) || "is" === t && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && S(Ce.tagNameCheck, n) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)))) return !1
              } else if (tt[t]);
              else if (S(Se, A(n, Ne, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== N(n, "data:") || !Qe[e])
                if (Ue && !S(Ae, A(n, Ne, "")));
                else if (n) return !1;
              return !0
            },
            Lt = function(e) {
              return "annotation-xml" !== e && w(e, ke)
            },
            Mt = function(t) {
              var n, a, i, o;
              St("beforeSanitizeAttributes", t, null);
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
                  if (a = "value" === u ? n.value : k(n.value), i = ye(u), s.attrName = i, s.attrValue = a, s.keepAttr = !0, s.forceKeepAttr = void 0, St("uponSanitizeAttribute", t, s), a = s.attrValue, !s.forceKeepAttr && (Tt(u, t), s.keepAttr))
                    if (Fe || !S(/\/>/i, a)) {
                      He && (a = A(a, be, " "), a = A(a, ve, " "), a = A(a, Ee, " "));
                      var p = ye(t.nodeName);
                      if (_t(p, i, a))
                        if (!$e || "id" !== i && "name" !== i || (Tt(u, t), a = "user-content-" + a), ze && S(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, a)) Tt(u, t);
                        else {
                          if (oe && "object" === e(_) && "function" == typeof _.getAttributeType)
                            if (d);
                            else switch (_.getAttributeType(p, i)) {
                              case "TrustedHTML":
                                a = oe.createHTML(a);
                                break;
                              case "TrustedScriptURL":
                                a = oe.createScriptURL(a)
                            }
                          try {
                            d ? t.setAttributeNS(d, u, a) : t.setAttribute(u, a), Nt(t) ? Et(t) : b(r.removed)
                          } catch (e) {}
                        }
                    } else Tt(u, t)
                }
                St("afterSanitizeAttributes", t, null)
              }
            },
            Ct = function e(t) {
              var n, a = At(t);
              for (St("beforeSanitizeShadowDOM", t, null); n = a.nextNode();) St("uponSanitizeShadowNode", n, null), xt(n), Mt(n), n.content instanceof l && e(n.content);
              St("afterSanitizeShadowDOM", t, null)
            };
          return r.sanitize = function(t) {
            var a, o, s, u, d, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((lt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !kt(t)) {
              if ("function" != typeof t.toString) throw x("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw x("dirty is not a string, aborting")
            }
            if (!r.isSupported) {
              if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                if ("string" == typeof t) return n.toStaticHTML(t);
                if (kt(t)) return n.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (Be || mt(p), r.removed = [], "string" == typeof t && (Ye = !1), Ye) {
              if (t.nodeName) {
                var f = ye(t.nodeName);
                if (!xe[f] || De[f]) throw x("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof c) 1 === (o = (a = wt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? a = o : a.appendChild(o);
            else {
              if (!Ge && !He && !Pe && -1 === t.indexOf("<")) return oe && Ve ? oe.createHTML(t) : t;
              if (!(a = wt(t))) return Ge ? null : Ve ? le : ""
            }
            a && je && Et(a.firstChild);
            for (var m = At(Ye ? t : a); s = m.nextNode();) 3 === s.nodeType && s === u || (xt(s), Mt(s), s.content instanceof l && Ct(s.content), u = s);
            if (u = null, Ye) return t;
            if (Ge) {
              if (We)
                for (d = de.call(a.ownerDocument); a.firstChild;) d.appendChild(a.firstChild);
              else d = a;
              return (Le.shadowroot || Le.shadowrootmod) && (d = fe.call(i, d, !0)), d
            }
            var g = Pe ? a.outerHTML : a.innerHTML;
            return Pe && xe["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && S(Z, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g), He && (g = A(g, be, " "), g = A(g, ve, " "), g = A(g, Ee, " ")), oe && Ve ? oe.createHTML(g) : g
          }, r.setConfig = function(e) {
            mt(e), Be = !0
          }, r.clearConfig = function() {
            dt = null, Be = !1
          }, r.isValidAttribute = function(e, t, n) {
            dt || mt({});
            var a = ye(e),
              r = ye(t);
            return _t(a, r, n)
          }, r.addHook = function(e, t) {
            "function" == typeof t && (ge[e] = ge[e] || [], v(ge[e], t))
          }, r.removeHook = function(e) {
            if (ge[e]) return b(ge[e])
          }, r.removeHooks = function(e) {
            ge[e] && (ge[e] = [])
          }, r.removeAllHooks = function() {
            ge = {}
          }, r
        }()
      }()
    },
    39279(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => s
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const i = new Uint8Array(16);

      function o() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(i)
      }
      const l = [];
      for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
      const s = function(e, t, n) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const r = (e = e || {}).random || (e.rng || o)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t
        }
        return function(e, t = 0) {
          return l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]
        }(r)
      }
    },
    73059(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => o
      });
      var a = n(37015),
        r = n(20219),
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
            a = e.target;
          if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches((0, r.c)(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, i.m)(t.navigation.prevEl);
              (0, i.m)(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(n.lastSlideMessage) : d(n.nextSlideMessage)), e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(n.firstSlideMessage) : d(n.prevSlideMessage))
            }
            t.pagination && a.matches((0, r.c)(t.params.pagination.bulletClass)) && a.click()
          }
        }

        function E() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function T() {
          return E() && t.params.pagination.clickable
        }
        const w = (e, t, n) => {
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
          k = e => {
            u = (new Date).getTime()
          },
          S = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - u < 100) return;
            const n = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!n || !t.slides.includes(n)) return;
            s = n;
            const a = t.slides.indexOf(n) === t.activeIndex,
              r = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
            a || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              l || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(n.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(n)), 0), l = !1)
            }))
          },
          x = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && g(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
            const n = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((a, r) => {
              const i = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : r;
              h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, i + 1).replace(/\{\{slidesLength\}\}/, n))
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
            const r = t.wrapperEl,
              o = e.id || r.getAttribute("id") || `swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var l;
            const s = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var u, d;
            u = r, d = o, (u = (0, i.m)(u)).forEach(e => {
                e.setAttribute("id", d)
              }),
              function(e, t) {
                (e = (0, i.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(r, s), x();
            let {
              nextEl: p,
              prevEl: f
            } = t.navigation ? t.navigation : {};
            p = (0, i.m)(p), f = (0, i.m)(f), p && p.forEach(t => w(t, o, e.nextSlideMessage)), f && f.forEach(t => w(t, o, e.prevSlideMessage)), T() && (0, i.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", v)
            }), (0, a.g)().addEventListener("visibilitychange", k), t.el.addEventListener("focus", S, !0), t.el.addEventListener("focus", S, !0), t.el.addEventListener("pointerdown", A, !0), t.el.addEventListener("pointerup", N, !0)
          })()
        }), o("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && x()
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
              t.params.pagination.clickable && (p(n), t.params.pagination.renderBullet || (m(n, "button"), h(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, i.i)(n) + 1)))), n.matches((0, r.c)(t.params.pagination.bulletActiveClass)) ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current")
            })
          }()
        }), o("destroy", () => {
          t.params.a11y.enabled && function() {
            c && c.remove();
            let {
              nextEl: e,
              prevEl: n
            } = t.navigation ? t.navigation : {};
            e = (0, i.m)(e), n = (0, i.m)(n), e && e.forEach(e => e.removeEventListener("keydown", v)), n && n.forEach(e => e.removeEventListener("keydown", v)), T() && (0, i.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", v)
            }), (0, a.g)().removeEventListener("visibilitychange", k), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", S, !0), t.el.removeEventListener("pointerdown", A, !0), t.el.removeEventListener("pointerup", N, !0))
          }()
        })
      }
    },
    44128(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => i
      });
      var a = n(37015),
        r = n(20212);

      function i(e) {
        let {
          swiper: t,
          extendParams: n,
          on: i,
          emit: o
        } = e;
        const l = (0, a.g)(),
          s = (0, a.a)();

        function c(e) {
          if (!t.enabled) return;
          const {
            rtlTranslate: n
          } = t;
          let a = e;
          a.originalEvent && (a = a.originalEvent);
          const i = a.keyCode || a.charCode,
            c = t.params.keyboard.pageUpDown,
            u = c && 33 === i,
            d = c && 34 === i,
            p = 37 === i,
            f = 39 === i,
            m = 38 === i,
            g = 40 === i;
          if (!t.allowSlideNext && (t.isHorizontal() && f || t.isVertical() && g || d)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || u)) return !1;
          if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && (l.activeElement.isContentEditable || l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase())))) {
            if (t.params.keyboard.onlyInViewport && (u || d || p || f || m || g)) {
              let e = !1;
              if ((0, r.b)(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, r.b)(t.el, `.${t.params.slideActiveClass}`).length) return;
              const a = t.el,
                i = a.clientWidth,
                o = a.clientHeight,
                l = s.innerWidth,
                c = s.innerHeight,
                u = (0, r.d)(a);
              n && (u.left -= a.scrollLeft);
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
            t.isHorizontal() ? ((u || d || p || f) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((d || f) && !n || (u || p) && n) && t.slideNext(), ((u || p) && !n || (d || f) && n) && t.slidePrev()) : ((u || d || m || g) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (d || g) && t.slideNext(), (u || m) && t.slidePrev()), o("keyPress", i)
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