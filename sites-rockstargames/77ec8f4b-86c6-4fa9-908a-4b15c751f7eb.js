! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "77ec8f4b-86c6-4fa9-908a-4b15c751f7eb", e._sentryDebugIdIdentifier = "sentry-dbid-77ec8f4b-86c6-4fa9-908a-4b15c751f7eb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7182], {
    40049: (e, t, r) => {
      var n = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r.g && r.g,
        i = function() {
          function e() {
            this.fetch = !1, this.DOMException = n.DOMException
          }
          return e.prototype = n, new e
        }();
      ! function(e) {
        ! function(t) {
          var n = void 0 !== e && e || "undefined" != typeof self && self || void 0 !== r.g && r.g || {},
            i = "URLSearchParams" in n,
            o = "Symbol" in n && "iterator" in Symbol,
            a = "FileReader" in n && "Blob" in n && function() {
              try {
                return new Blob, !0
              } catch (e) {
                return !1
              }
            }(),
            s = "FormData" in n,
            u = "ArrayBuffer" in n;
          if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            l = ArrayBuffer.isView || function(e) {
              return e && c.indexOf(Object.prototype.toString.call(e)) > -1
            };

          function f(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase()
          }

          function h(e) {
            return "string" != typeof e && (e = String(e)), e
          }

          function d(e) {
            var t = {
              next: function() {
                var t = e.shift();
                return {
                  done: void 0 === t,
                  value: t
                }
              }
            };
            return o && (t[Symbol.iterator] = function() {
              return t
            }), t
          }

          function p(e) {
            this.map = {}, e instanceof p ? e.forEach((function(e, t) {
              this.append(t, e)
            }), this) : Array.isArray(e) ? e.forEach((function(e) {
              if (2 != e.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e.length);
              this.append(e[0], e[1])
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
              this.append(t, e[t])
            }), this)
          }

          function v(e) {
            if (!e._noBody) return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
          }

          function y(e) {
            return new Promise((function(t, r) {
              e.onload = function() {
                t(e.result)
              }, e.onerror = function() {
                r(e.error)
              }
            }))
          }

          function m(e) {
            var t = new FileReader,
              r = y(t);
            return t.readAsArrayBuffer(e), r
          }

          function b(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function g() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && a && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = b(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = b(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, a && (this.blob = function() {
              var e = v(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]))
            }), this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) return v(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
              if (a) return this.blob().then(m);
              throw new Error("could not read as ArrayBuffer")
            }, this.text = function() {
              var e, t, r, n, i, o = v(this);
              if (o) return o;
              if (this._bodyBlob) return e = this._bodyBlob, r = y(t = new FileReader), i = (n = /charset=([A-Za-z0-9_-]+)/.exec(e.type)) ? n[1] : "utf-8", t.readAsText(e, i), r;
              if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                return r.join("")
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText)
            }, s && (this.formData = function() {
              return this.text().then(E)
            }), this.json = function() {
              return this.text().then(JSON.parse)
            }, this
          }
          p.prototype.append = function(e, t) {
            e = f(e), t = h(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
          }, p.prototype.delete = function(e) {
            delete this.map[f(e)]
          }, p.prototype.get = function(e) {
            return e = f(e), this.has(e) ? this.map[e] : null
          }, p.prototype.has = function(e) {
            return this.map.hasOwnProperty(f(e))
          }, p.prototype.set = function(e, t) {
            this.map[f(e)] = h(t)
          }, p.prototype.forEach = function(e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
          }, p.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push(r)
            })), d(e)
          }, p.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
              e.push(t)
            })), d(e)
          }, p.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push([r, t])
            })), d(e)
          }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var w = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function _(e, t) {
            if (!(this instanceof _)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, i, o = (t = t || {}).body;
            if (e instanceof _) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), w.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in n) return (new AbortController).signal
              }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(o), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
              var a = /([?&])_=[^&]*/;
              a.test(this.url) ? this.url = this.url.replace(a, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
          }

          function E(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
              if (e) {
                var r = e.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  i = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(i))
              }
            })), t
          }

          function O(e, t) {
            if (!(this instanceof O)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
          }
          _.prototype.clone = function() {
            return new _(this, {
              body: this._bodyInit
            })
          }, g.call(_.prototype), g.call(O.prototype), O.prototype.clone = function() {
            return new O(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new p(this.headers),
              url: this.url
            })
          }, O.error = function() {
            var e = new O(null, {
              status: 200,
              statusText: ""
            });
            return e.ok = !1, e.status = 0, e.type = "error", e
          };
          var S = [301, 302, 303, 307, 308];
          O.redirect = function(e, t) {
            if (-1 === S.indexOf(t)) throw new RangeError("Invalid status code");
            return new O(null, {
              status: t,
              headers: {
                location: e
              }
            })
          }, t.DOMException = n.DOMException;
          try {
            new t.DOMException
          } catch (e) {
            t.DOMException = function(e, t) {
              this.message = e, this.name = t;
              var r = Error(e);
              this.stack = r.stack
            }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
          }

          function k(e, r) {
            return new Promise((function(i, o) {
              var s = new _(e, r);
              if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
              var c = new XMLHttpRequest;

              function l() {
                c.abort()
              }
              if (c.onload = function() {
                  var e, t, r = {
                    statusText: c.statusText,
                    headers: (e = c.getAllResponseHeaders() || "", t = new p, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                      return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    })).forEach((function(e) {
                      var r = e.split(":"),
                        n = r.shift().trim();
                      if (n) {
                        var i = r.join(":").trim();
                        try {
                          t.append(n, i)
                        } catch (e) {
                          console.warn("Response " + e.message)
                        }
                      }
                    })), t)
                  };
                  0 === s.url.indexOf("file://") && (c.status < 200 || c.status > 599) ? r.status = 200 : r.status = c.status, r.url = "responseURL" in c ? c.responseURL : r.headers.get("X-Request-URL");
                  var n = "response" in c ? c.response : c.responseText;
                  setTimeout((function() {
                    i(new O(n, r))
                  }), 0)
                }, c.onerror = function() {
                  setTimeout((function() {
                    o(new TypeError("Network request failed"))
                  }), 0)
                }, c.ontimeout = function() {
                  setTimeout((function() {
                    o(new TypeError("Network request timed out"))
                  }), 0)
                }, c.onabort = function() {
                  setTimeout((function() {
                    o(new t.DOMException("Aborted", "AbortError"))
                  }), 0)
                }, c.open(s.method, function(e) {
                  try {
                    return "" === e && n.location.href ? n.location.href : e
                  } catch (t) {
                    return e
                  }
                }(s.url), !0), "include" === s.credentials ? c.withCredentials = !0 : "omit" === s.credentials && (c.withCredentials = !1), "responseType" in c && (a ? c.responseType = "blob" : u && (c.responseType = "arraybuffer")), r && "object" == typeof r.headers && !(r.headers instanceof p || n.Headers && r.headers instanceof n.Headers)) {
                var d = [];
                Object.getOwnPropertyNames(r.headers).forEach((function(e) {
                  d.push(f(e)), c.setRequestHeader(e, h(r.headers[e]))
                })), s.headers.forEach((function(e, t) {
                  -1 === d.indexOf(t) && c.setRequestHeader(t, e)
                }))
              } else s.headers.forEach((function(e, t) {
                c.setRequestHeader(t, e)
              }));
              s.signal && (s.signal.addEventListener("abort", l), c.onreadystatechange = function() {
                4 === c.readyState && s.signal.removeEventListener("abort", l)
              }), c.send(void 0 === s._bodyInit ? null : s._bodyInit)
            }))
          }
          k.polyfill = !0, n.fetch || (n.fetch = k, n.Headers = p, n.Request = _, n.Response = O), t.Headers = p, t.Request = _, t.Response = O, t.fetch = k
        }({})
      }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
    },
    41032: e => {
      "use strict";
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function i(e, t, r) {
        return e.concat(t).map((function(e) {
          return n(e, r)
        }))
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, r, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || i, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? u.arrayMerge(e, r, u) : function(e, t, r) {
          var i = {};
          return r.isMergeableObject(e) && o(e).forEach((function(t) {
            i[t] = n(e[t], r)
          })), o(t).forEach((function(o) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (a(e, o) && r.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return s;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : s
            }(o, r)(e[o], t[o], r) : i[o] = n(t[o], r))
          })), i
        }(e, r, u) : n(r, u)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return s(e, r, t)
        }), {})
      };
      var u = s;
      e.exports = u
    },
    37767: (e, t, r) => {
      "use strict";
      r.d(t, {
        J1: () => f
      });
      var n = r(78322),
        i = r(16565),
        o = new Map,
        a = new Map,
        s = !0,
        u = !1;

      function c(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function l(e) {
        var t, r, l, f = c(e);
        if (!o.has(f)) {
          var h = (0, i.parse)(e, {
            experimentalFragmentVariables: u,
            allowLegacyFragmentVariables: u
          });
          if (!h || "Document" !== h.kind) throw new Error("Not a valid GraphQL document.");
          o.set(f, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach((function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              }))
            }));
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }((t = h, r = new Set, l = [], t.definitions.forEach((function(e) {
            if ("FragmentDefinition" === e.kind) {
              var t = e.name.value,
                n = c((o = e.loc).source.body.substring(o.start, o.end)),
                i = a.get(t);
              i && !i.has(n) ? s && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : i || a.set(t, i = new Set), i.add(n), r.has(n) || (r.add(n), l.push(e))
            } else l.push(e);
            var o
          })), (0, n.Cl)((0, n.Cl)({}, t), {
            definitions: l
          }))))
        }
        return o.get(f)
      }

      function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach((function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        })), l(n)
      }
      var h, d = f;
      (h = f || (f = {})).gql = d, h.resetCaches = function() {
        o.clear(), a.clear()
      }, h.disableFragmentWarnings = function() {
        s = !1
      }, h.enableExperimentalFragmentVariables = function() {
        u = !0
      }, h.disableExperimentalFragmentVariables = function() {
        u = !1
      }, f.default = f
    },
    86901: (e, t, r) => {
      "use strict";
      var n, i = (n = r(80905)) && n.__esModule ? n : {
          default: n
        },
        o = {
          tags: function(e) {
            var t = e.id,
              r = e.events,
              n = e.dataLayer,
              o = e.dataLayerName,
              a = e.preview,
              s = "&gtm_auth=" + e.auth,
              u = "&gtm_preview=" + a;
            return t || (0, i.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + s + u + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(r).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + s + u + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + o + "','" + t + "');",
              dataLayerVar: this.dataLayer(n, o)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = o
    },
    9476: (e, t, r) => {
      "use strict";
      var n, i = (n = r(86901)) && n.__esModule ? n : {
          default: n
        },
        o = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = i.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = t.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = t.script, e
              },
              dataScript: this.dataScript(t.dataLayerVar)
            }
          },
          initialize: function(e) {
            var t = e.gtmId,
              r = e.events,
              n = void 0 === r ? {} : r,
              i = e.dataLayer,
              o = e.dataLayerName,
              a = void 0 === o ? "dataLayer" : o,
              s = e.auth,
              u = void 0 === s ? "" : s,
              c = e.preview,
              l = void 0 === c ? "" : c,
              f = this.gtm({
                id: t,
                events: n,
                dataLayer: i || void 0,
                dataLayerName: a,
                auth: u,
                preview: l
              });
            i && document.head.appendChild(f.dataScript), document.head.insertBefore(f.script(), document.head.childNodes[0]), document.body.insertBefore(f.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              r = e.dataLayerName,
              n = void 0 === r ? "dataLayer" : r;
            if (window[n]) return window[n].push(t);
            var o = i.default.dataLayer(t, n),
              a = this.dataScript(o);
            document.head.insertBefore(a, document.head.childNodes[0])
          }
        };
      e.exports = o
    },
    84875: (e, t, r) => {
      "use strict";
      var n, i = (n = r(9476)) && n.__esModule ? n : {
        default: n
      };
      e.exports = i.default
    },
    80905: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    11803: (e, t, r) => {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(62229))
    },
    25164: (e, t, r) => {
      "use strict";
      r.d(t, {
        D: () => Ae
      });
      var n = r(78322),
        i = r(61575),
        o = r(79767),
        a = r(47677),
        s = r(57831),
        u = r(56884),
        c = r(5008),
        l = r(94929),
        f = r(98098),
        h = r(48632),
        d = r(51859),
        p = r(27792),
        v = r(54122),
        y = function() {
          function e() {
            this.assumeImmutableResults = !1, this.getFragmentDoc = (0, o.LV)(s.ct, {
              max: u.v["cache.fragmentQueryDocuments"] || 1e3,
              cache: h.l
            })
          }
          return e.prototype.lookupFragment = function(e) {
            return null
          }, e.prototype.batch = function(e) {
            var t, r = this,
              n = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
            return this.performTransaction((function() {
              return t = e.update(r)
            }), n), t
          }, e.prototype.recordOptimisticTransaction = function(e, t) {
            this.performTransaction(e, t)
          }, e.prototype.transformDocument = function(e) {
            return e
          }, e.prototype.transformForLink = function(e) {
            return e
          }, e.prototype.identify = function(e) {}, e.prototype.gc = function() {
            return []
          }, e.prototype.modify = function(e) {
            return !1
          }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !!e.optimistic), this.read((0, n.Cl)((0, n.Cl)({}, e), {
              rootId: e.id || "ROOT_QUERY",
              optimistic: t
            }))
          }, e.prototype.watchFragment = function(e) {
            var t = this,
              r = e.fragment,
              o = e.fragmentName,
              a = e.from,
              s = e.optimistic,
              u = void 0 === s || s,
              h = (0, n.Tt)(e, ["fragment", "fragmentName", "from", "optimistic"]),
              d = this.getFragmentDoc(r, o),
              y = void 0 === a || "string" == typeof a ? a : this.identify(a),
              m = !!e[Symbol.for("apollo.dataMasking")];
            if (!1 !== globalThis.__DEV__) {
              var b = o || (0, c.E4)(r).name.value;
              y || !1 !== globalThis.__DEV__ && i.V1.warn(1, b)
            }
            var g, w = (0, n.Cl)((0, n.Cl)({}, h), {
              returnPartialData: !0,
              id: y,
              query: d,
              optimistic: u
            });
            return new l.c((function(e) {
              return t.watch((0, n.Cl)((0, n.Cl)({}, w), {
                immediate: !0,
                callback: function(i) {
                  var a = m ? (0, v.z)(i.result, r, t, o) : i.result;
                  if (!g || !(0, p.a)(d, {
                      data: null == g ? void 0 : g.result
                    }, {
                      data: a
                    })) {
                    var s = {
                      data: a,
                      complete: !!i.complete
                    };
                    i.missing && (s.missing = (0, f.IM)(i.missing.map((function(e) {
                      return e.missing
                    })))), g = (0, n.Cl)((0, n.Cl)({}, i), {
                      result: a
                    }), e.next(s)
                  }
                }
              }))
            }))
          }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !!e.optimistic), this.read((0, n.Cl)((0, n.Cl)({}, e), {
              query: this.getFragmentDoc(e.fragment, e.fragmentName),
              rootId: e.id,
              optimistic: t
            }))
          }, e.prototype.writeQuery = function(e) {
            var t = e.id,
              r = e.data,
              i = (0, n.Tt)(e, ["id", "data"]);
            return this.write(Object.assign(i, {
              dataId: t || "ROOT_QUERY",
              result: r
            }))
          }, e.prototype.writeFragment = function(e) {
            var t = e.id,
              r = e.data,
              i = e.fragment,
              o = e.fragmentName,
              a = (0, n.Tt)(e, ["id", "data", "fragment", "fragmentName"]);
            return this.write(Object.assign(a, {
              query: this.getFragmentDoc(i, o),
              dataId: t,
              result: r
            }))
          }, e.prototype.updateQuery = function(e, t) {
            return this.batch({
              update: function(r) {
                var i = r.readQuery(e),
                  o = t(i);
                return null == o ? i : (r.writeQuery((0, n.Cl)((0, n.Cl)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e.prototype.updateFragment = function(e, t) {
            return this.batch({
              update: function(r) {
                var i = r.readFragment(e),
                  o = t(i);
                return null == o ? i : (r.writeFragment((0, n.Cl)((0, n.Cl)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e
        }();
      !1 !== globalThis.__DEV__ && (y.prototype.getMemoryInternals = d.tQ);
      var m = function(e) {
          function t(r, n, i, o) {
            var a, s = e.call(this, r) || this;
            if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
              s.missing = s.message;
              for (var u = s.path.length - 1; u >= 0; --u) s.missing = ((a = {})[s.path[u]] = s.missing, a)
            } else s.missing = s.path;
            return s.__proto__ = t.prototype, s
          }
          return (0, n.C6)(t, e), t
        }(Error),
        b = r(65009),
        g = r(15734),
        w = r(46389),
        _ = r(61229),
        E = r(76290),
        O = r(16565),
        S = r(26979),
        k = r(71281),
        C = r(13002),
        T = r(1397),
        D = r(41136),
        x = r(9325),
        R = r(49164),
        M = Object.prototype.hasOwnProperty;

      function A(e) {
        return null == e
      }

      function j(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = A(n) ? A(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), A(n) && !A(i) && (n = i), !A(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var P = {
        dataIdFromObject: j,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function F(e) {
        var t = e.canonizeResults;
        return void 0 === t ? P.canonizeResults : t
      }
      var I = /^[_a-z][_0-9a-z]*/i;

      function q(e) {
        var t = e.match(I);
        return t ? t[0] : e
      }

      function V(e, t, r) {
        return !!(0, D.U)(t) && ((0, R.c)(t) ? t.every((function(t) {
          return V(e, t, r)
        })) : e.selections.every((function(e) {
          if ((0, E.dt)(e) && (0, C.MS)(e, r)) {
            var n = (0, E.ue)(e);
            return M.call(t, n) && (!e.selectionSet || V(e.selectionSet, t[n], r))
          }
          return !0
        })))
      }

      function Q(e) {
        return (0, D.U)(e) && !(0, E.A_)(e) && !(0, R.c)(e)
      }

      function N(e, t) {
        var r = (0, s.JG)((0, c.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var L = Object.create(null),
        z = function() {
          return L
        },
        B = Object.create(null),
        U = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, T.G)((0, E.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, E.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, E.WU)(e);
              if ((0, E.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, E.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.Cl)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), M.call(this.data, e)) {
              var r = this.data[e];
              if (r && M.call(r, t)) return r[t]
            }
            return "__typename" === t && M.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof G ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), M.call(this.data, e) ? this.data[e] : this instanceof G ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, E.A_)(e) && (e = e.__ref), (0, E.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new f.ZI(X).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach((function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = q(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof G || delete s[e]
                  }
                })), !u.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== s.__typename || delete u.__typename, Object.keys(u).forEach((function(e) {
                  return n.group.dirty(r, e)
                }))
              }
            }
          }, e.prototype.modify = function(e, t) {
            var r = this,
              o = this.lookup(e);
            if (o) {
              var a = Object.create(null),
                s = !1,
                u = !0,
                c = {
                  DELETE: L,
                  INVALIDATE: B,
                  isReference: E.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, E.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach((function(l) {
                  var f = q(l),
                    h = o[l];
                  if (void 0 !== h) {
                    var d = "function" == typeof t ? t : t[l] || t[f];
                    if (d) {
                      var p = d === z ? L : d((0, T.G)(h), (0, n.Cl)((0, n.Cl)({}, c), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (p === B) r.group.dirty(e, l);
                      else if (p === L && (p = void 0), p !== h && (a[l] = p, s = !0, h = p, !1 !== globalThis.__DEV__)) {
                        var v = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, E.A_)(p)) v(p);
                        else if (Array.isArray(p))
                          for (var y = !1, m = void 0, b = 0, g = p; b < g.length; b++) {
                            var w = g[b];
                            if ((0, E.A_)(w)) {
                              if (y = !0, v(w)) break
                            } else "object" == typeof w && w && r.policies.identify(w)[0] && (m = w);
                            if (y && void 0 !== m) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, m);
                              break
                            }
                          }
                      }
                    }
                    void 0 !== h && (u = !1)
                  }
                })), s) return this.merge(e, a), u && (this instanceof G ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
            }
            return !1
          }, e.prototype.delete = function(e, t, r) {
            var n, i = this.lookup(e);
            if (i) {
              var o = this.getFieldValue(i, "__typename"),
                a = t && r ? this.policies.getStoreFieldName({
                  typename: o,
                  fieldName: t,
                  args: r
                }) : t;
              return this.modify(e, a ? ((n = {})[a] = z, n) : z)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (M.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof G && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach((function(t) {
              M.call(e.policies.rootTypenamesById, t) || r.push(t)
            })), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach((function(r) {
                e && M.call(e, r) || t.delete(r)
              })), e) {
              var r = e.__META,
                i = (0, n.Tt)(e, ["__META"]);
              Object.keys(i).forEach((function(e) {
                t.merge(e, i[e])
              })), r && r.extraRootIds.forEach(this.retain, this)
            }
          }, e.prototype.retain = function(e) {
            return this.rootIds[e] = (this.rootIds[e] || 0) + 1
          }, e.prototype.release = function(e) {
            if (this.rootIds[e] > 0) {
              var t = --this.rootIds[e];
              return t || delete this.rootIds[e], t
            }
            return 0
          }, e.prototype.getRootIdSet = function(e) {
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof G ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach((function(n) {
              M.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            }));
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof G;) i = i.parent;
              n.forEach((function(e) {
                return i.delete(e)
              }))
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!M.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach((function(e) {
                (0, E.A_)(e) && (t[e.__ref] = !0), (0, D.U)(e) && Object.keys(e).forEach((function(t) {
                  var r = e[t];
                  (0, D.U)(r) && n.add(r)
                }))
              }))
            }
            return this.refs[e]
          }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
          }, e
        }(),
        W = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new x.b(S.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(K(e, t));
              var r = q(t);
              r !== t && this.d(K(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(K(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function K(e, t) {
        return t + "#" + e
      }

      function H(e, t) {
        Y(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new W(i)) || this;
            return a.stump = new J(a), a.storageTrie = new x.b(S.et), o && a.replace(o), a
          }
          return (0, n.C6)(t, e), t.prototype.addLayer = function(e, t) {
            return this.stump.addLayer(e, t)
          }, t.prototype.removeLayer = function() {
            return this
          }, t.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments)
          }, t
        }(e);
        e.Root = t
      }(U || (U = {}));
      var G = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return o.id = t, o.parent = r, o.replay = n, o.group = i, n(o), o
          }
          return (0, n.C6)(t, e), t.prototype.addLayer = function(e, r) {
            return new t(e, this, r, this.group)
          }, t.prototype.removeLayer = function(e) {
            var t = this,
              r = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((function(e) {
              var n = t.data[e],
                i = r.lookup(e);
              i ? n ? n !== i && Object.keys(n).forEach((function(r) {
                (0, a.L)(n[r], i[r]) || t.group.dirty(e, r)
              })) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach((function(r) {
                t.group.dirty(e, r)
              }))) : t.delete(e)
            })), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
          }, t.prototype.toObject = function() {
            return (0, n.Cl)((0, n.Cl)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return M.call(this.data, t) ? (0, n.Cl)((0, n.Cl)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(U),
        J = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, (function() {}), new W(t.group.caching, t.group)) || this
          }
          return (0, n.C6)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(G);

      function X(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, a.L)(n, i) ? n : i
      }

      function Y(e) {
        return !!(e instanceof U && e.group.caching)
      }
      var $ = function() {
        function e() {
          this.known = new(S.En ? WeakSet : Set), this.pool = new x.b(S.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, D.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, D.U)(e)) {
            var t = function(e) {
              return (0, D.U)(e) ? (0, R.c)(e) ? e.slice(0) : (0, n.Cl)({
                __proto__: Object.getPrototypeOf(e)
              }, e) : e
            }(e);
            return this.passes.set(t, e), t
          }
          return e
        }, e.prototype.admit = function(e) {
          var t = this;
          if ((0, D.U)(e)) {
            var r = this.passes.get(e);
            if (r) return r;
            switch (Object.getPrototypeOf(e)) {
              case Array.prototype:
                if (this.known.has(e)) return e;
                var n = e.map(this.admit, this);
                return (s = this.pool.lookupArray(n)).array || (this.known.add(s.array = n), !1 !== globalThis.__DEV__ && Object.freeze(n)), s.array;
              case null:
              case Object.prototype:
                if (this.known.has(e)) return e;
                var i = Object.getPrototypeOf(e),
                  o = [i],
                  a = this.sortedKeys(e);
                o.push(a.json);
                var s, u = o.length;
                if (a.sorted.forEach((function(r) {
                    o.push(t.admit(e[r]))
                  })), !(s = this.pool.lookupArray(o)).object) {
                  var c = s.object = Object.create(i);
                  this.known.add(c), a.sorted.forEach((function(e, t) {
                    c[e] = o[u + t]
                  })), !1 !== globalThis.__DEV__ && Object.freeze(c)
                }
                return s.object
            }
          }
          return e
        }, e.prototype.sortedKeys = function(e) {
          var t = Object.keys(e),
            r = this.pool.lookupArray(t);
          if (!r.keys) {
            t.sort();
            var n = JSON.stringify(t);
            (r.keys = this.keysByJSON.get(n)) || this.keysByJSON.set(n, r.keys = {
              sorted: t,
              json: n
            })
          }
          return r.keys
        }, e
      }();

      function Z(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var ee = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(S.et ? WeakMap : Map), this.config = (0, k.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: F(e)
          }), this.canon = e.canon || new $, this.executeSelectionSet = (0, o.LV)((function(e) {
            var r, i = e.context.canonizeResults,
              o = Z(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.Cl)((0, n.Cl)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (H(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }), {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: Z,
            makeCacheKey: function(e, t, r, n) {
              if (Y(r.store)) return r.store.makeCacheKey(e, (0, E.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)((function(e) {
            return H(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }), {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (Y(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new $
        }, e.prototype.diffQueryAgainstStore = function(e) {
          var t = e.store,
            r = e.query,
            i = e.rootId,
            o = void 0 === i ? "ROOT_QUERY" : i,
            a = e.variables,
            s = e.returnPartialData,
            u = void 0 === s || s,
            l = e.canonizeResults,
            f = void 0 === l ? this.config.canonizeResults : l,
            h = this.config.cache.policies;
          a = (0, n.Cl)((0, n.Cl)({}, (0, c.wY)((0, c.AT)(r))), a);
          var d, p = (0, E.WU)(o),
            v = this.executeSelectionSet({
              selectionSet: (0, c.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.Cl)({
                store: t,
                query: r,
                policies: h,
                variables: a,
                varString: (0, w.M)(a),
                canonizeResults: f
              }, N(r, this.config.fragments))
            });
          if (v.missing && (d = [new m(te(v.missing), v.missing, r, a)], !u)) throw d[0];
          return {
            result: v.result,
            complete: !d,
            missing: d
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (Y(n.store) && this.knownResults.get(e) === r) {
            var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
            if (i && e === i.result) return !0
          }
          return !1
        }, e.prototype.execSelectionSetImpl = function(e) {
          var t = this,
            r = e.selectionSet,
            n = e.objectOrReference,
            o = e.enclosingRef,
            a = e.context;
          if ((0, E.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var u, c = a.variables,
            l = a.policies,
            h = a.store.getFieldValue(n, "__typename"),
            d = [],
            p = new f.ZI;

          function v(e, t) {
            var r;
            return e.missing && (u = p.merge(u, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof h && !l.rootIdsByTypename[h] && d.push({
            __typename: h
          });
          var y = new Set(r.selections);
          y.forEach((function(e) {
            var r, f;
            if ((0, C.MS)(e, c))
              if ((0, E.dt)(e)) {
                var m = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  b = (0, E.ue)(e);
                void 0 === m ? g.XY.added(e) || (u = p.merge(u, ((r = {})[b] = "Can't find field '".concat(e.name.value, "' on ").concat((0, E.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, R.c)(m) ? m.length > 0 && (m = v(t.executeSubSelectedArray({
                  field: e,
                  array: m,
                  enclosingRef: o,
                  context: a
                }), b)) : e.selectionSet ? null != m && (m = v(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: m,
                  enclosingRef: (0, E.A_)(m) ? m : o,
                  context: a
                }), b)) : a.canonizeResults && (m = t.canon.pass(m)), void 0 !== m && d.push(((f = {})[b] = m, f))
              } else {
                var w = (0, s.HQ)(e, a.lookupFragment);
                if (!w && e.kind === O.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                w && l.fragmentMatches(w, h) && w.selectionSet.selections.forEach(y.add, y)
              }
          }));
          var m = {
              result: (0, f.IM)(d),
              missing: u
            },
            b = a.canonizeResults ? this.canon.admit(m) : (0, T.G)(m);
          return b.result && this.knownResults.set(b.result, r), b
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            n = e.field,
            o = e.array,
            a = e.enclosingRef,
            s = e.context,
            u = new f.ZI;

          function c(e, r) {
            var n;
            return e.missing && (t = u.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map((function(e, t) {
            return null === e ? null : (0, R.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, E.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach((function(r) {
                  (0, D.U)(r) && ((0, i.V1)(!(0, E.A_)(r), 11, function(e, t) {
                    return (0, E.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                  }(e, r), t.name.value), Object.values(r).forEach(n.add, n))
                }))
              }
            }(s.store, n, e), e)
          })), {
            result: s.canonizeResults ? this.canon.admit(o) : o,
            missing: t
          }
        }, e
      }();

      function te(e) {
        try {
          JSON.stringify(e, (function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          }))
        } catch (e) {
          return e
        }
      }
      var re = r(15487),
        ne = r(55994),
        ie = r(53562),
        oe = Object.create(null);

      function ae(e) {
        var t = JSON.stringify(e);
        return oe[t] || (oe[t] = Object.create(null))
      }

      function se(e) {
        var t = ae(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = ce(e, (function(e) {
              var o = he(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && M.call(t, e[0]) && (o = he(t, e, fe)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
            }));
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function ue(e) {
        var t = ae(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = ce(e, (function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return he(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && M.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, he(i, s)
                  }
                }
              else if (n && (0, R.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find((function(e) {
                    return e.name.value === u
                  })),
                  l = c && (0, E.MB)(c, i);
                return l && he(l, e.slice(1))
              }
            })),
            s = JSON.stringify(a);
          return (t || "{}" !== s) && (o += ":" + s), o
        })
      }

      function ce(e, t) {
        var r = new f.ZI;
        return le(e).reduce((function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }), Object.create(null))
      }

      function le(e) {
        var t = ae(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach((function(t, i) {
            (0, R.c)(t) ? (le(t).forEach((function(e) {
              return r.push(n.concat(e))
            })), n.length = 0) : (n.push(t), (0, R.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          }))
        }
        return t.paths
      }

      function fe(e, t) {
        return e[t]
      }

      function he(e, t, r) {
        return r = r || fe, de(t.reduce((function e(t, n) {
          return (0, R.c)(t) ? t.map((function(t) {
            return e(t, n)
          })) : t && r(t, n)
        }), e))
      }

      function de(e) {
        return (0, D.U)(e) ? (0, R.c)(e) ? e.map(de) : ce(Object.keys(e).sort(), (function(t) {
          return he(e, t)
        })) : e
      }
      var pe = r(36753);

      function ve(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, E.MB)(e.field, e.variables) : null
      }
      var ye = function() {},
        me = function(e, t) {
          return t.fieldName
        },
        be = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        ge = function(e, t) {
          return t
        },
        we = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.Cl)({
              dataIdFromObject: j
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
          }
          return e.prototype.identify = function(e, t) {
            var r, i = this,
              o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            var a, s = t && t.storeObject || e,
              u = (0, n.Cl)((0, n.Cl)({}, t), {
                typename: o,
                storeObject: s,
                readField: t && t.readField || function() {
                  var e = Ee(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }),
              c = o && this.getTypePolicy(o),
              l = c && c.keyFn || this.config.dataIdFromObject;
            return pe.yV.withValue(!0, (function() {
              for (; l;) {
                var t = l((0, n.Cl)((0, n.Cl)({}, e), s), u);
                if (!(0, R.c)(t)) {
                  a = t;
                  break
                }
                l = se(t)
              }
            })), a = a ? String(a) : void 0, u.keyObject ? [a, u.keyObject] : [a]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach((function(r) {
              var i = e[r],
                o = i.queryType,
                a = i.mutationType,
                s = i.subscriptionType,
                u = (0, n.Tt)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), M.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            }))
          }, e.prototype.updateTypePolicy = function(e, t) {
            var r = this,
              n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? be : !1 === t ? ge : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? ye : (0, R.c)(i) ? se(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach((function(t) {
              var n = r.getFieldPolicy(e, t, !0),
                i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  u = i.read,
                  c = i.merge;
                n.keyFn = !1 === s ? me : (0, R.c)(s) ? ue(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || me)
            }))
          }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              n = this.rootTypenamesById[r];
            t !== n && ((0, i.V1)(!n || n === e, 6, e), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
          }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach((function(r) {
              t.getSupertypeSet(r, !0), e[r].forEach((function(e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(I);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              }))
            }))
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!M.call(this.typePolicies, e)) {
              var r = this.typePolicies[e] = Object.create(null);
              r.fields = Object.create(null);
              var i = this.supertypeMap.get(e);
              !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach((function(r, n) {
                if (r.test(e)) {
                  var o = t.supertypeMap.get(n);
                  o && o.forEach((function(e) {
                    return i.add(e)
                  }))
                }
              }))), i && i.size && i.forEach((function(e) {
                var i = t.getTypePolicy(e),
                  o = i.fields,
                  a = (0, n.Tt)(i, ["fields"]);
                Object.assign(r, a), Object.assign(r.fields, o)
              }))
            }
            var o = this.toBeAdded[e];
            return o && o.length && o.splice(0).forEach((function(r) {
              t.updateTypePolicy(e, r)
            })), this.typePolicies[e]
          }, e.prototype.getFieldPolicy = function(e, t, r) {
            if (e) {
              var n = this.getTypePolicy(e).fields;
              return n[t] || r && (n[t] = Object.create(null))
            }
          }, e.prototype.getSupertypeSet = function(e, t) {
            var r = this.supertypeMap.get(e);
            return !r && t && this.supertypeMap.set(e, r = new Set), r
          }, e.prototype.fragmentMatches = function(e, t, r, n) {
            var o = this;
            if (!e.typeCondition) return !0;
            if (!t) return !1;
            var a = e.typeCondition.name.value;
            if (t === a) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(a))
              for (var s = this.getSupertypeSet(t, !0), u = [s], c = function(e) {
                  var t = o.getSupertypeSet(e, !1);
                  t && t.size && u.indexOf(t) < 0 && u.push(t)
                }, l = !(!r || !this.fuzzySubtypes.size), f = !1, h = 0; h < u.length; ++h) {
                var d = u[h];
                if (d.has(a)) return s.has(a) || (f && !1 !== globalThis.__DEV__ && i.V1.warn(7, t, a), s.add(a)), !0;
                d.forEach(c), l && h === u.length - 1 && V(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach((function(e, r) {
                  var n = t.match(e);
                  n && n[0] === t && c(r)
                })))
              }
            return !1
          }, e.prototype.hasKeyArgs = function(e, t) {
            var r = this.getFieldPolicy(e, t, !1);
            return !(!r || !r.keyFn)
          }, e.prototype.getStoreFieldName = function(e) {
            var t, r = e.typename,
              n = e.fieldName,
              i = this.getFieldPolicy(r, n, !1),
              o = i && i.keyFn;
            if (o && r)
              for (var a = {
                  typename: r,
                  fieldName: n,
                  field: e.field || null,
                  variables: e.variables
                }, s = ve(e); o;) {
                var u = o(s, a);
                if (!(0, R.c)(u)) {
                  t = u || n;
                  break
                }
                o = ue(u)
              }
            return void 0 === t && (t = e.field ? (0, E.Ii)(e.field, e.variables) : (0, E.o5)(n, ve(e))), !1 === t ? n : n === q(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = q(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o, !1),
                u = s && s.read;
              if (u) {
                var c = _e(this, r, e, t, t.store.getStorage((0, E.A_)(r) ? r.__ref : r, i));
                return ie.bl.withValue(this.cache, u, [a, c])
              }
              return a
            }
          }, e.prototype.getReadFunction = function(e, t) {
            var r = this.getFieldPolicy(e, t, !1);
            return r && r.read
          }, e.prototype.getMergeFunction = function(e, t, r) {
            var n = this.getFieldPolicy(e, t, !1),
              i = n && n.merge;
            return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i
          }, e.prototype.runMergeFunction = function(e, t, r, n, i) {
            var o = r.field,
              a = r.typename,
              s = r.merge;
            return s === be ? Oe(n.store)(e, t) : s === ge ? t : (n.overwrite && (e = void 0), s(e, t, _e(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function _e(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = q(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: ve(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: E.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(Ee(arguments, t, s), n)
          },
          mergeObjects: Oe(n.store)
        }
      }

      function Ee(e, t, r) {
        var o, a = e[0],
          s = e[1],
          u = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, n.Cl)({}, a), M.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, ne.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function Oe(e) {
        return function(t, r) {
          if ((0, R.c)(t) || (0, R.c)(r)) throw (0, i.vA)(9);
          if ((0, D.U)(t) && (0, D.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, E.A_)(t) && Q(r)) return e.merge(t.__ref, r), t;
            if (Q(t) && (0, E.A_)(r)) return e.merge(t, r.__ref), r;
            if (Q(t) && Q(r)) return (0, n.Cl)((0, n.Cl)({}, t), r)
          }
          return r
        }
      }

      function Se(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.Cl)((0, n.Cl)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var ke = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              s = t.result,
              u = t.dataId,
              l = t.variables,
              h = t.overwrite,
              d = (0, c.Vu)(o),
              p = new f.ZI;
            l = (0, n.Cl)((0, n.Cl)({}, (0, c.wY)(d)), l);
            var v = (0, n.Cl)((0, n.Cl)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return p.merge(e, t)
                },
                variables: l,
                varString: (0, w.M)(l)
              }, N(o, this.fragments)), {
                overwrite: !!h,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              y = this.processSelectionSet({
                result: s || Object.create(null),
                dataId: u,
                selectionSet: d.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: v
              });
            if (!(0, E.A_)(y)) throw (0, i.vA)(12, s);
            return v.incomingById.forEach((function(t, o) {
              var s = t.storeObject,
                u = t.mergeTree,
                c = t.fieldNodeSet,
                l = (0, E.WU)(o);
              if (u && u.map.size) {
                var f = r.applyMerges(u, l, s, v);
                if ((0, E.A_)(f)) return;
                s = f
              }
              if (!1 !== globalThis.__DEV__ && !v.overwrite) {
                var h = Object.create(null);
                c.forEach((function(e) {
                  e.selectionSet && (h[e.name.value] = !0)
                })), Object.keys(s).forEach((function(e) {
                  (function(e) {
                    return !0 === h[q(e)]
                  })(e) && ! function(e) {
                    var t = u && u.map.get(e);
                    return Boolean(t && t.info && t.info.merge)
                  }(e) && function(e, t, r, o) {
                    var s = function(e) {
                        var t = o.getFieldValue(e, r);
                        return "object" == typeof t && t
                      },
                      u = s(e);
                    if (u) {
                      var c = s(t);
                      if (c && !(0, E.A_)(u) && !(0, a.L)(u, c) && !Object.keys(u).every((function(e) {
                          return void 0 !== o.getFieldValue(c, e)
                        }))) {
                        var l = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          f = q(r),
                          h = "".concat(l, ".").concat(f);
                        if (!Me.has(h)) {
                          Me.add(h);
                          var d = [];
                          (0, R.c)(u) || (0, R.c)(c) || [u, c].forEach((function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || d.includes(t) || d.push(t)
                          })), !1 !== globalThis.__DEV__ && i.V1.warn(15, f, l, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", h, (0, n.Cl)({}, u), (0, n.Cl)({}, c))
                        }
                      }
                    }
                  }(l, s, e, v.store)
                }))
              }
              e.merge(o, s)
            })), e.retain(y.__ref), y
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              a = e.selectionSet,
              s = e.context,
              u = e.mergeTree,
              c = this.cache.policies,
              l = Object.create(null),
              f = r && c.rootTypenamesById[r] || (0, E.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var h = function() {
                var e = Ee(arguments, l, s.variables);
                if ((0, E.A_)(e.from)) {
                  var t = s.incomingById.get(e.from.__ref);
                  if (t) {
                    var r = c.readField((0, n.Cl)((0, n.Cl)({}, e), {
                      from: t.storeObject
                    }), s);
                    if (void 0 !== r) return r
                  }
                }
                return c.readField(e, s)
              },
              d = new Set;
            this.flattenFields(a, o, s, f).forEach((function(e, r) {
              var n, a = (0, E.ue)(r),
                s = o[a];
              if (d.add(r), void 0 !== s) {
                var p = c.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  v = Te(u, p),
                  y = t.processFieldValue(s, r, r.selectionSet ? Se(e, !1, !1) : e, v),
                  m = void 0;
                r.selectionSet && ((0, E.A_)(y) || Q(y)) && (m = h("__typename", y));
                var b = c.getMergeFunction(f, r.name.value, m);
                b ? v.info = {
                  field: r,
                  typename: f,
                  merge: b
                } : Re(u, p), l = e.merge(l, ((n = {})[p] = y, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || g.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, E.ue)(r), o)
            }));
            try {
              var p = c.identify(o, {
                  typename: f,
                  selectionSet: a,
                  fragmentMap: s.fragmentMap,
                  storeObject: l,
                  readField: h
                }),
                v = p[0],
                y = p[1];
              r = r || v, y && (l = s.merge(l, y))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var m = (0, E.WU)(r),
                b = s.written[r] || (s.written[r] = []);
              if (b.indexOf(a) >= 0) return m;
              if (b.push(a), this.reader && this.reader.isFresh(o, m, a, s)) return m;
              var w = s.incomingById.get(r);
              return w ? (w.storeObject = s.merge(w.storeObject, l), w.mergeTree = De(w.mergeTree, u), d.forEach((function(e) {
                return w.fieldNodeSet.add(e)
              }))) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: xe(u) ? void 0 : u,
                fieldNodeSet: d
              }), m
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, R.c)(e) ? e.map((function(e, o) {
              var a = i.processFieldValue(e, t, r, Te(n, o));
              return Re(n, o), a
            })) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : !1 !== globalThis.__DEV__ ? (0, re.m)(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, E.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              u = new x.b(!1);
            return function e(c, l) {
              var f = u.lookup(c, l.clientOnly, l.deferred);
              f.visited || (f.visited = !0, c.selections.forEach((function(u) {
                if ((0, C.MS)(u, r.variables)) {
                  var c = l.clientOnly,
                    f = l.deferred;
                  if (c && f || !(0, R.E)(u.directives) || u.directives.forEach((function(e) {
                      var t = e.name.value;
                      if ("client" === t && (c = !0), "defer" === t) {
                        var n = (0, E.MB)(e, r.variables);
                        n && !1 === n.if || (f = !0)
                      }
                    })), (0, E.dt)(u)) {
                    var h = o.get(u);
                    h && (c = c && h.clientOnly, f = f && h.deferred), o.set(u, Se(r, c, f))
                  } else {
                    var d = (0, s.HQ)(u, r.lookupFragment);
                    if (!d && u.kind === O.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(14, u.name.value);
                    d && a.fragmentMatches(d, n, t, r.variables) && e(d.selectionSet, Se(r, c, f))
                  }
                }
              })))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, E.A_)(r)) {
              var c, l = (0, R.c)(r) || !(0, E.A_)(t) && !Q(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, E.A_)(l) ? l.__ref : l]);
              var h = function(e, t) {
                return (0, R.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach((function(e, t) {
                var r = h(l, t),
                  n = h(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              })), c && (r = (0, R.c)(f) ? f.slice(0) : (0, n.Cl)({}, f), c.forEach((function(e, t) {
                r[t] = e
              })))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        Ce = [];

      function Te(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, Ce.pop() || {
          map: new Map
        }), r.get(t)
      }

      function De(e, t) {
        if (e === t || !t || xe(t)) return e;
        if (!e || xe(e)) return t;
        var r = e.info && t.info ? (0, n.Cl)((0, n.Cl)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach((function(e, r) {
            o.map.set(r, De(e, t.map.get(r))), a.delete(r)
          })), a.forEach((function(r) {
            o.map.set(r, De(t.map.get(r), e.map.get(r)))
          }))
        }
        return o
      }

      function xe(e) {
        return !e || !(e.info || e.map.size)
      }

      function Re(e, t) {
        var r = e.map,
          n = r.get(t);
        n && xe(n) && (Ce.push(n), r.delete(t))
      }
      var Me = new Set,
        Ae = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new b.c(g.XY), r.assumeImmutableResults = !0, r.makeVar = ie.UT, r.txCount = 0, r.config = function(e) {
              return (0, k.o)(P, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new we({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.C6)(t, e), t.prototype.init = function() {
            var e = this.data = new U.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.storeWriter = new ke(this, this.storeReader = new ee({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: F(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, o.LV)((function(e, r) {
              return t.broadcastWatch(e, r)
            }), {
              max: this.config.resultCacheMaxSize || u.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (Y(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, (0, w.M)({
                    optimistic: n,
                    id: i,
                    variables: o
                  }))
                }
              }
            }), new Set([this.data.group, this.optimisticData.group]).forEach((function(e) {
              return e.resetCaching()
            }))
          }, t.prototype.restore = function(e) {
            return this.init(), e && this.data.replace(e), this
          }, t.prototype.extract = function(e) {
            return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract()
          }, t.prototype.read = function(e) {
            var t = e.returnPartialData,
              r = void 0 !== t && t;
            try {
              return this.storeReader.diffQueryAgainstStore((0, n.Cl)((0, n.Cl)({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r
              })).result || null
            } catch (e) {
              if (e instanceof m) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (M.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return this.storeReader.diffQueryAgainstStore((0, n.Cl)((0, n.Cl)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              rootId: e.id || "ROOT_QUERY",
              config: this.config
            }))
          }, t.prototype.watch = function(e) {
            var t = this;
            return this.watches.size || (0, ie.MS)(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && (0, ie.WR)(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            var t;
            w.M.reset(), _.y.reset(), this.addTypenameTransform.resetCache(), null === (t = this.config.fragments) || void 0 === t || t.resetCaches();
            var r = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), r
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, E.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              !1 !== globalThis.__DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (M.call(e, "id")) return !1;
              e = (0, n.Cl)((0, n.Cl)({}, e), {
                id: "ROOT_QUERY"
              })
            }
            try {
              return ++this.txCount, this.optimisticData.evict(e, this.data)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.reset = function(e) {
            var t = this;
            return this.init(), w.M.reset(), e && e.discardWatches ? (this.watches.forEach((function(e) {
              return t.maybeBroadcastWatch.forget(e)
            })), this.watches.clear(), (0, ie.WR)(this)) : this.broadcastWatches(), Promise.resolve()
          }, t.prototype.removeOptimistic = function(e) {
            var t = this.optimisticData.removeLayer(e);
            t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches())
          }, t.prototype.batch = function(e) {
            var t, r = this,
              i = e.update,
              o = e.optimistic,
              a = void 0 === o || o,
              s = e.removeOptimistic,
              u = e.onWatchUpdated,
              c = function(e) {
                var n = r,
                  o = n.data,
                  a = n.optimisticData;
                ++r.txCount, e && (r.data = r.optimisticData = e);
                try {
                  return t = i(r)
                } finally {
                  --r.txCount, r.data = o, r.optimisticData = a
                }
              },
              l = new Set;
            return u && !this.txCount && this.broadcastWatches((0, n.Cl)((0, n.Cl)({}, e), {
              onWatchUpdated: function(e) {
                return l.add(e), !1
              }
            })), "string" == typeof a ? this.optimisticData = this.optimisticData.addLayer(a, c) : !1 === a ? c(this.data) : c(), "string" == typeof s && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches((0, n.Cl)((0, n.Cl)({}, e), {
              onWatchUpdated: function(e, t) {
                var r = u.call(this, e, t);
                return !1 !== r && l.delete(e), r
              }
            })), l.size && l.forEach((function(e) {
              return r.maybeBroadcastWatch.dirty(e)
            }))) : this.broadcastWatches(e), t
          }, t.prototype.performTransaction = function(e, t) {
            return this.batch({
              update: e,
              optimistic: t || null !== t
            })
          }, t.prototype.transformDocument = function(e) {
            return this.addTypenameToDocument(this.addFragmentsToDocument(e))
          }, t.prototype.fragmentMatches = function(e, t) {
            return this.policies.fragmentMatches(e, t)
          }, t.prototype.lookupFragment = function(e) {
            var t;
            return (null === (t = this.config.fragments) || void 0 === t ? void 0 : t.lookup(e)) || null
          }, t.prototype.broadcastWatches = function(e) {
            var t = this;
            this.txCount || this.watches.forEach((function(r) {
              return t.maybeBroadcastWatch(r, e)
            }))
          }, t.prototype.addFragmentsToDocument = function(e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e
          }, t.prototype.addTypenameToDocument = function(e) {
            return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e
          }, t.prototype.broadcastWatch = function(e, t) {
            var r = e.lastDiff,
              n = this.diff(e);
            t && (e.optimistic && "string" == typeof t.optimistic && (n.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, n, r)) || r && (0, a.L)(r.result, n.result) || e.callback(e.lastDiff = n, r)
          }, t
        }(y);
      !1 !== globalThis.__DEV__ && (Ae.prototype.getMemoryInternals = d.cM)
    },
    53562: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => u,
        UT: () => c,
        WR: () => s,
        bl: () => i
      });
      var n = r(79767),
        i = new n.DX,
        o = new WeakMap;

      function a(e) {
        var t = o.get(e);
        return t || o.set(e, t = {
          vars: new Set,
          dep: (0, n.yN)()
        }), t
      }

      function s(e) {
        a(e).vars.forEach((function(t) {
          return t.forgetCache(e)
        }))
      }

      function u(e) {
        a(e).vars.forEach((function(t) {
          return t.attachCache(e)
        }))
      }

      function c(e) {
        var t = new Set,
          r = new Set,
          n = function(s) {
            if (arguments.length > 0) {
              if (e !== s) {
                e = s, t.forEach((function(e) {
                  a(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                }));
                var u = Array.from(r);
                r.clear(), u.forEach((function(t) {
                  return t(e)
                }))
              }
            } else {
              var c = i.getValue();
              c && (o(c), a(c).dep(n))
            }
            return e
          };
        n.onNextChange = function(e) {
          return r.add(e),
            function() {
              r.delete(e)
            }
        };
        var o = n.attachCache = function(e) {
          return t.add(e), a(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
    },
    73645: (e, t, r) => {
      "use strict";
      r.d(t, {
        R: () => fe
      });
      var n = r(78322),
        i = r(61575),
        o = r(48774),
        a = o.C.execute,
        s = r(48507),
        u = r(25879),
        c = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, u.$)(t).request) || this;
            return r.options = t, r
          }
          return (0, n.C6)(t, e), t
        }(o.C),
        l = r(47677),
        f = r(16333),
        h = r(13002),
        d = r(15734),
        p = r(57831),
        v = r(46389),
        y = r(65009),
        m = r(94929);

      function b(e, t, r) {
        return new m.c((function(n) {
          var i = {
            then: function(e) {
              return new Promise((function(t) {
                return t(e())
              }))
            }
          };

          function o(e, t) {
            return function(r) {
              if (e) {
                var o = function() {
                  return n.closed ? 0 : e(r)
                };
                i = i.then(o, o).then((function(e) {
                  return n.next(e)
                }), (function(e) {
                  return n.error(e)
                }))
              } else n[t](r)
            }
          }
          var a = {
              next: o(t, "next"),
              error: o(r, "error"),
              complete: function() {
                i.then((function() {
                  return n.complete()
                }))
              }
            },
            s = e.subscribe(a);
          return function() {
            return s.unsubscribe()
          }
        }))
      }
      var g = r(49164);

      function w(e) {
        var t = _(e);
        return (0, g.E)(t)
      }

      function _(e) {
        var t = (0, g.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, f.ST)(e) && (0, g.E)(e.incremental) && e.incremental.forEach((function(e) {
          e.errors && t.push.apply(t, e.errors)
        })), t
      }
      var E = r(5008),
        O = r(76290),
        S = r(41136),
        k = r(75874);

      function C(e, t, r) {
        var n = [];
        e.forEach((function(e) {
          return e[t] && n.push(e)
        })), n.forEach((function(e) {
          return e[t](r)
        }))
      }
      var T = r(26979);

      function D(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: m.c
          })
        }
        return T.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }

      function x(e) {
        return e && "function" == typeof e.then
      }
      var R = function(e) {
        function t(t) {
          var r = e.call(this, (function(e) {
            return r.addObserver(e),
              function() {
                return r.removeObserver(e)
              }
          })) || this;
          return r.observers = new Set, r.promise = new Promise((function(e, t) {
            r.resolve = e, r.reject = t
          })), r.handlers = {
            next: function(e) {
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), C(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout((function() {
                return t.unsubscribe()
              })), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), C(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? x(i) ? i.then((function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }), r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout((function() {
                  return t.unsubscribe()
                })), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), C(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch((function(e) {})), "function" == typeof t && (t = [new m.c(t)]), x(t) ? t.then((function(e) {
            return r.start(e)
          }), r.handlers.error) : r.start(t), r
        }
        return (0, n.C6)(t, e), t.prototype.start = function(e) {
          void 0 === this.sub && (this.sources = Array.from(e), this.handlers.complete())
        }, t.prototype.deliverLastMessage = function(e) {
          if (this.latest) {
            var t = this.latest[0],
              r = e[t];
            r && r.call(e, this.latest[1]), null === this.sub && "next" === t && e.complete && e.complete()
          }
        }, t.prototype.addObserver = function(e) {
          this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e))
        }, t.prototype.removeObserver = function(e) {
          this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete()
        }, t.prototype.notify = function(e, t) {
          var r = this.nextResultListeners;
          r.size && (this.nextResultListeners = new Set, r.forEach((function(r) {
            return r(e, t)
          })))
        }, t.prototype.beforeNext = function(e) {
          var t = !1;
          this.nextResultListeners.add((function(r, n) {
            t || (t = !0, e(r, n))
          }))
        }, t
      }(m.c);
      D(R);
      var M = r(42179),
        A = r(62847),
        j = r(71281),
        P = r(15487),
        F = r(27792),
        I = Object.assign,
        q = Object.hasOwnProperty,
        V = function(e) {
          function t(t) {
            var r = t.queryManager,
              i = t.queryInfo,
              o = t.options,
              a = e.call(this, (function(e) {
                try {
                  var t = e._subscription._observer;
                  t && !t.error && (t.error = N)
                } catch (e) {}
                var r = !a.observers.size;
                a.observers.add(e);
                var n = a.last;
                return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(a.maskResult(n.result)), r && a.reobserve().catch((function() {})),
                  function() {
                    a.observers.delete(e) && !a.observers.size && a.tearDownQuery()
                  }
              })) || this;
            a.observers = new Set, a.subscriptions = new Set, a.queryInfo = i, a.queryManager = r, a.waitForOwnResult = z(o.fetchPolicy), a.isTornDown = !1, a.subscribeToMore = a.subscribeToMore.bind(a), a.maskResult = a.maskResult.bind(a);
            var s = r.defaultOptions.watchQuery,
              u = (void 0 === s ? {} : s).fetchPolicy,
              c = void 0 === u ? "cache-first" : u,
              l = o.fetchPolicy,
              f = void 0 === l ? c : l,
              h = o.initialFetchPolicy,
              d = void 0 === h ? "standby" === f ? c : f : h;
            a.options = (0, n.Cl)((0, n.Cl)({}, o), {
              initialFetchPolicy: d,
              fetchPolicy: f
            }), a.queryId = i.queryId || r.generateQueryId();
            var p = (0, E.Vu)(a.query);
            return a.queryName = p && p.name && p.name.value, a
          }
          return (0, n.C6)(t, e), Object.defineProperty(t.prototype, "query", {
            get: function() {
              return this.lastQuery || this.options.query
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "variables", {
            get: function() {
              return this.options.variables
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.result = function() {
            var e = this;
            return new Promise((function(t, r) {
              var n = {
                  next: function(r) {
                    t(r), e.observers.delete(n), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout((function() {
                      i.unsubscribe()
                    }), 0)
                  },
                  error: r
                },
                i = e.subscribe(n)
            }))
          }, t.prototype.resetDiff = function() {
            this.queryInfo.resetDiff()
          }, t.prototype.getCurrentFullResult = function(e) {
            void 0 === e && (e = !0);
            var t = this.getLastResult(!0),
              r = this.queryInfo.networkStatus || t && t.networkStatus || A.pT.ready,
              i = (0, n.Cl)((0, n.Cl)({}, t), {
                loading: (0, A.bi)(r),
                networkStatus: r
              }),
              o = this.options.fetchPolicy,
              a = void 0 === o ? "cache-first" : o;
            if (z(a) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var s = this.queryInfo.getDiff();
              (s.complete || this.options.returnPartialData) && (i.data = s.result), (0, l.L)(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, !s.complete || i.networkStatus !== A.pT.loading || "cache-first" !== a && "cache-only" !== a || (i.networkStatus = A.pT.ready, i.loading = !1)) : i.partial = !0, !1 === globalThis.__DEV__ || s.complete || this.options.partialRefetch || i.loading || i.data || i.error || L(s.missing)
            }
            return e && this.updateLastResult(i), i
          }, t.prototype.getCurrentResult = function(e) {
            return void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e))
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            if (!this.last) return !0;
            var r = this.queryManager.getDocumentInfo(this.query),
              n = this.queryManager.dataMasking,
              i = n ? r.nonReactiveQuery : this.query;
            return (n || r.hasNonreactiveDirective ? !(0, F.a)(i, this.last.result, e, this.variables) : !(0, l.L)(this.last.result, e)) || t && !(0, l.L)(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || (0, l.L)(r.variables, this.variables))) return r[e]
          }, t.prototype.getLastResult = function(e) {
            return this.getLast("result", e)
          }, t.prototype.getLastError = function(e) {
            return this.getLast("error", e)
          }, t.prototype.resetLastResults = function() {
            delete this.last, this.isTornDown = !1
          }, t.prototype.resetQueryStoreErrors = function() {
            this.queryManager.resetErrors(this.queryId)
          }, t.prototype.refetch = function(e) {
            var t, r = {
                pollInterval: 0
              },
              o = this.options.fetchPolicy;
            if (r.fetchPolicy = "cache-and-network" === o ? o : "no-cache" === o ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && q.call(e, "variables")) {
              var a = (0, E.AT)(this.query),
                s = a.variableDefinitions;
              s && s.some((function(e) {
                return "variables" === e.variable.name.value
              })) || !1 !== globalThis.__DEV__ && i.V1.warn(21, e, (null === (t = a.name) || void 0 === t ? void 0 : t.value) || a)
            }
            return e && !(0, l.L)(this.options.variables, e) && (r.variables = this.options.variables = (0, n.Cl)((0, n.Cl)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, A.pT.refetch)
          }, t.prototype.fetchMore = function(e) {
            var t = this,
              r = (0, n.Cl)((0, n.Cl)({}, e.query ? e : (0, n.Cl)((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.options), {
                query: this.options.query
              }), e), {
                variables: (0, n.Cl)((0, n.Cl)({}, this.options.variables), e.variables)
              })), {
                fetchPolicy: "no-cache"
              });
            r.query = this.transformDocument(r.query);
            var o = this.queryManager.generateQueryId();
            this.lastQuery = e.query ? this.transformDocument(this.options.query) : r.query;
            var a = this.queryInfo,
              s = a.networkStatus;
            a.networkStatus = A.pT.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var u = new Set,
              c = null == e ? void 0 : e.updateQuery,
              l = "no-cache" !== this.options.fetchPolicy;
            return l || (0, i.V1)(c, 22), this.queryManager.fetchQuery(o, r, A.pT.fetchMore).then((function(i) {
              if (t.queryManager.removeQuery(o), a.networkStatus === A.pT.fetchMore && (a.networkStatus = s), l) t.queryManager.cache.batch({
                update: function(n) {
                  var o = e.updateQuery;
                  o ? n.updateQuery({
                    query: t.query,
                    variables: t.variables,
                    returnPartialData: !0,
                    optimistic: !1
                  }, (function(e) {
                    return o(e, {
                      fetchMoreResult: i.data,
                      variables: r.variables
                    })
                  })) : n.writeQuery({
                    query: r.query,
                    variables: r.variables,
                    data: i.data
                  })
                },
                onWatchUpdated: function(e) {
                  u.add(e.query)
                }
              });
              else {
                var f = t.getLast("result"),
                  h = c(f.data, {
                    fetchMoreResult: i.data,
                    variables: r.variables
                  });
                t.reportResult((0, n.Cl)((0, n.Cl)({}, f), {
                  data: h
                }), t.variables)
              }
              return t.maskResult(i)
            })).finally((function() {
              l && !u.has(t.query) && Q(t)
            }))
          }, t.prototype.subscribeToMore = function(e) {
            var t = this,
              r = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
              }).subscribe({
                next: function(r) {
                  var n = e.updateQuery;
                  n && t.updateQuery((function(e, t) {
                    var i = t.variables;
                    return n(e, {
                      subscriptionData: r,
                      variables: i
                    })
                  }))
                },
                error: function(t) {
                  e.onError ? e.onError(t) : !1 !== globalThis.__DEV__ && i.V1.error(23, t)
                }
              });
            return this.subscriptions.add(r),
              function() {
                t.subscriptions.delete(r) && r.unsubscribe()
              }
          }, t.prototype.setOptions = function(e) {
            return this.reobserve(e)
          }, t.prototype.silentSetOptions = function(e) {
            var t = (0, j.o)(this.options, e || {});
            I(this.options, t)
          }, t.prototype.setVariables = function(e) {
            return (0, l.L)(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, A.pT.setVariables) : Promise.resolve())
          }, t.prototype.updateQuery = function(e) {
            var t = this.queryManager,
              r = e(t.cache.diff({
                query: this.options.query,
                variables: this.variables,
                returnPartialData: !0,
                optimistic: !1
              }).result, {
                variables: this.variables
              });
            r && (t.cache.writeQuery({
              query: this.options.query,
              data: r,
              variables: this.variables
            }), t.broadcastQueries())
          }, t.prototype.startPolling = function(e) {
            this.options.pollInterval = e, this.updatePolling()
          }, t.prototype.stopPolling = function() {
            this.options.pollInterval = 0, this.updatePolling()
          }, t.prototype.applyNextFetchPolicy = function(e, t) {
            if (t.nextFetchPolicy) {
              var r = t.fetchPolicy,
                n = void 0 === r ? "cache-first" : r,
                i = t.initialFetchPolicy,
                o = void 0 === i ? n : i;
              "standby" === n || ("function" == typeof t.nextFetchPolicy ? t.fetchPolicy = t.nextFetchPolicy(n, {
                reason: e,
                options: t,
                observable: this,
                initialFetchPolicy: o
              }) : t.fetchPolicy = "variables-changed" === e ? o : t.nextFetchPolicy)
            }
            return t.fetchPolicy
          }, t.prototype.fetch = function(e, t, r) {
            return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, e, t, r)
          }, t.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (r && this.hasObservers()) {
                if (!t || t.interval !== r) {
                  (0, i.V1)(r, 24), (t || (this.pollingInfo = {})).interval = r;
                  var n = function() {
                      var t, r;
                      e.pollingInfo && ((0, A.bi)(e.queryInfo.networkStatus) || (null === (r = (t = e.options).skipPollAttempt) || void 0 === r ? void 0 : r.call(t)) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, A.pT.poll).then(o, o))
                    },
                    o = function() {
                      var t = e.pollingInfo;
                      t && (clearTimeout(t.timeout), t.timeout = setTimeout(n, t.interval))
                    };
                  o()
                }
              } else t && (clearTimeout(t.timeout), delete this.pollingInfo)
            }
          }, t.prototype.updateLastResult = function(e, t) {
            void 0 === t && (t = this.variables);
            var r = this.getLastError();
            return r && this.last && !(0, l.L)(t, this.last.variables) && (r = void 0), this.last = (0, n.Cl)({
              result: this.queryManager.assumeImmutableResults ? e : (0, P.m)(e),
              variables: t
            }, r ? {
              error: r
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === A.pT.refetch || t === A.pT.fetchMore || t === A.pT.poll,
              o = this.options.variables,
              a = this.options.fetchPolicy,
              s = (0, j.o)(this.options, e || {}),
              u = i ? s : I(this.options, s),
              c = this.transformDocument(u.query);
            this.lastQuery = c, i || (this.updatePolling(), !e || !e.variables || (0, l.L)(e.variables, o) || "standby" === u.fetchPolicy || u.fetchPolicy !== a && "function" != typeof u.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", u), void 0 === t && (t = A.pT.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = z(u.fetchPolicy));
            var f = function() {
                r.concast === p && (r.waitForOwnResult = !1)
              },
              h = u.variables && (0, n.Cl)({}, u.variables),
              d = this.fetch(u, t, c),
              p = d.concast,
              v = d.fromLink,
              y = {
                next: function(e) {
                  (0, l.L)(r.variables, h) && (f(), r.reportResult(e, h))
                },
                error: function(e) {
                  (0, l.L)(r.variables, h) && ((0, M.Mn)(e) || (e = new M.K4({
                    networkError: e
                  })), f(), r.reportError(e, h))
                }
              };
            return i || !v && this.concast || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = y), p.addObserver(y), p
          }, t.prototype.reobserve = function(e, t) {
            return (r = this.reobserveAsConcast(e, t).promise.then(this.maskResult)).catch((function() {})), r;
            var r
          }, t.prototype.resubscribeAfterError = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var r = this.last;
            this.resetLastResults();
            var n = this.subscribe.apply(this, e);
            return this.last = r, n
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentFullResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this.getLastError(),
              n = this.isDifferentFromLastResult(e, t);
            (r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || n) && C(this.observers, "next", this.maskResult(e))
          }, t.prototype.reportError = function(e, t) {
            var r = (0, n.Cl)((0, n.Cl)({}, this.getLastResult()), {
              error: e,
              errors: e.graphQLErrors,
              networkStatus: A.pT.error,
              loading: !1
            });
            this.updateLastResult(r, t), C(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
          }, t.prototype.transformDocument = function(e) {
            return this.queryManager.transform(e)
          }, t.prototype.maskResult = function(e) {
            return e && "data" in e ? (0, n.Cl)((0, n.Cl)({}, e), {
              data: this.queryManager.maskOperation({
                document: this.query,
                data: e.data,
                fetchPolicy: this.options.fetchPolicy,
                id: this.queryId
              })
            }) : e
          }, t
        }(m.c);

      function Q(e) {
        var t = e.options,
          r = t.fetchPolicy,
          n = t.nextFetchPolicy;
        return "cache-and-network" === r || "network-only" === r ? e.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function(e, t) {
            return this.nextFetchPolicy = n, "function" == typeof this.nextFetchPolicy ? this.nextFetchPolicy(e, t) : r
          }
        }) : e.reobserve()
      }

      function N(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(25, e.message, e.stack)
      }

      function L(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(26, e)
      }

      function z(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }
      D(V);
      var B = r(98098),
        U = new(T.et ? WeakMap : Map);

      function W(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return U.set(e, (U.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }

      function K(e) {
        e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0)
      }
      var H = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.listeners = new Set, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          U.has(r) || (U.set(r, 0), W(r, "evict"), W(r, "modify"), W(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || A.pT.loading;
          return this.variables && this.networkStatus !== A.pT.loading && !(0, l.L)(this.variables, e.variables) && (t = A.pT.setVariables), (0, l.L)(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
          }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
        }, e.prototype.reset = function() {
          K(this), this.dirty = !1
        }, e.prototype.resetDiff = function() {
          this.lastDiff = void 0
        }, e.prototype.getDiff = function() {
          var e = this.getDiffOptions();
          if (this.lastDiff && (0, l.L)(e, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables);
          var t = this.observableQuery;
          if (t && "no-cache" === t.options.fetchPolicy) return {
            complete: !1
          };
          var r = this.cache.diff(e);
          return this.updateLastDiff(r, e), r
        }, e.prototype.updateLastDiff = function(e, t) {
          this.lastDiff = e ? {
            diff: e,
            options: t || this.getDiffOptions()
          } : void 0
        }, e.prototype.getDiffOptions = function(e) {
          var t;
          return void 0 === e && (e = this.variables), {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults
          }
        }, e.prototype.setDiff = function(e) {
          var t, r = this,
            n = this.lastDiff && this.lastDiff.diff;
          e && !e.complete && (null === (t = this.observableQuery) || void 0 === t ? void 0 : t.getLastError()) || (this.updateLastDiff(e), this.dirty || (0, l.L)(n && n.result, e && e.result) || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout((function() {
            return r.notify()
          }), 0))))
        }, e.prototype.setObservableQuery = function(e) {
          var t = this;
          e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
            t.getDiff().fromOptimisticTransaction ? e.observe() : Q(e)
          })) : delete this.oqListener)
        }, e.prototype.notify = function() {
          var e = this;
          K(this), this.shouldNotify() && this.listeners.forEach((function(t) {
            return t(e)
          })), this.dirty = !1
        }, e.prototype.shouldNotify = function() {
          if (!this.dirty || !this.listeners.size) return !1;
          if ((0, A.bi)(this.networkStatus) && this.observableQuery) {
            var e = this.observableQuery.options.fetchPolicy;
            if ("cache-only" !== e && "cache-and-network" !== e) return !1
          }
          return !0
        }, e.prototype.stop = function() {
          if (!this.stopped) {
            this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel;
            var t = this.observableQuery;
            t && t.stopPolling()
          }
        }, e.prototype.cancel = function() {}, e.prototype.updateWatch = function(e) {
          var t = this;
          void 0 === e && (e = this.variables);
          var r = this.observableQuery;
          if (!r || "no-cache" !== r.options.fetchPolicy) {
            var i = (0, n.Cl)((0, n.Cl)({}, this.getDiffOptions(e)), {
              watcher: this,
              callback: function(e) {
                return t.setDiff(e)
              }
            });
            this.lastWatch && (0, l.L)(i, this.lastWatch) || (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === U.get(this.cache) && (0, l.L)(t, r.variables) && (0, l.L)(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i = this,
            o = new B.ZI,
            a = (0, g.E)(e.errors) ? e.errors.slice(0) : [];
          if (this.reset(), "incremental" in e && (0, g.E)(e.incremental)) {
            var s = (0, f.bd)(this.getDiff().result, e);
            e.data = s
          } else if ("hasNext" in e && e.hasNext) {
            var u = this.getDiff();
            e.data = o.merge(u.result, e.data)
          }
          this.graphQLErrors = a, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (G(e, r.errorPolicy) ? this.cache.performTransaction((function(o) {
            if (i.shouldWrite(e, r.variables)) o.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), i.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: U.get(i.cache)
            };
            else if (i.lastDiff && i.lastDiff.diff.complete) return void(e.data = i.lastDiff.diff.result);
            var a = i.getDiffOptions(r.variables),
              s = o.diff(a);
            !i.stopped && (0, l.L)(i.variables, r.variables) && i.updateWatch(r.variables), i.updateLastDiff(s, a), s.complete && (e.data = s.result)
          })) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = A.pT.ready
        }, e.prototype.markError = function(e) {
          return this.networkStatus = A.pT.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function G(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !w(e);
        return !n && r && e.data && (n = !0), n
      }
      var J = r(61229),
        X = r(9325),
        Y = r(33583),
        $ = r(56884),
        Z = r(25659),
        ee = r(36753),
        te = r(54122),
        re = Object.prototype.hasOwnProperty,
        ne = Object.create(null),
        ie = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new Y.A($.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new X.b(!1), this.noCacheWarningsByQueryId = new Set;
            var r = new y.c((function(e) {
              return t.cache.transformDocument(e)
            }), {
              cache: !1
            });
            this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
            var n = e.documentTransform;
            this.documentTransform = n ? r.concat(n).concat(r) : r, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null))
          }
          return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach((function(t, r) {
              e.stopQueryNoBroadcast(r)
            })), this.cancelPendingFetches((0, i.vA)(27))
          }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach((function(t) {
              return t(e)
            })), this.fetchCancelFns.clear()
          }, e.prototype.mutate = function(e) {
            return (0, n.sH)(this, arguments, void 0, (function(e) {
              var t, r, o, a, s, u, c, l = e.mutation,
                f = e.variables,
                h = e.optimisticResponse,
                d = e.updateQueries,
                p = e.refetchQueries,
                v = void 0 === p ? [] : p,
                y = e.awaitRefetchQueries,
                m = void 0 !== y && y,
                g = e.update,
                E = e.onQueryUpdated,
                O = e.fetchPolicy,
                S = void 0 === O ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : O,
                k = e.errorPolicy,
                C = void 0 === k ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : k,
                T = e.keepRootFields,
                D = e.context;
              return (0, n.YH)(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 28), (0, i.V1)("network-only" === S || "no-cache" === S, 29), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, D)] : [3, 2];
                  case 1:
                    f = e.sent(), e.label = 2;
                  case 2:
                    return o = this.mutationStore && (this.mutationStore[t] = {
                      mutation: l,
                      variables: f,
                      loading: !0,
                      error: null
                    }), a = h && this.markMutationOptimistic(h, {
                      mutationId: t,
                      document: l,
                      variables: f,
                      fetchPolicy: S,
                      errorPolicy: C,
                      context: D,
                      updateQueries: d,
                      update: g,
                      keepRootFields: T
                    }), this.broadcastQueries(), s = this, [2, new Promise((function(e, r) {
                      return b(s.getObservableFromLink(l, (0, n.Cl)((0, n.Cl)({}, D), {
                        optimisticResponse: a ? h : void 0
                      }), f, {}, !1), (function(e) {
                        if (w(e) && "none" === C) throw new M.K4({
                          graphQLErrors: _(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.Cl)({}, e);
                        return "function" == typeof v && (v = v(r)), "ignore" === C && w(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: S,
                          errorPolicy: C,
                          context: D,
                          update: g,
                          updateQueries: d,
                          awaitRefetchQueries: m,
                          refetchQueries: v,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: E,
                          keepRootFields: T
                        })
                      })).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.Cl)((0, n.Cl)({}, r), {
                            data: s.maskOperation({
                              document: l,
                              data: r.data,
                              fetchPolicy: S,
                              id: t
                            })
                          }))
                        },
                        error: function(e) {
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof M.K4 ? e : new M.K4({
                            networkError: e
                          }))
                        }
                      })
                    }))]
                }
              }))
            }))
          }, e.prototype.markMutationResult = function(e, t) {
            var r = this;
            void 0 === t && (t = this.cache);
            var i = e.result,
              o = [],
              a = "no-cache" === e.fetchPolicy;
            if (!a && G(i, e.errorPolicy)) {
              if ((0, f.ST)(i) || o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), (0, f.ST)(i) && (0, g.E)(i.incremental)) {
                var s = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.getDocumentInfo(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  }),
                  u = void 0;
                s.result && (u = (0, f.bd)(s.result, i)), void 0 !== u && (i.data = u, o.push({
                  result: u,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }))
              }
              var c = e.updateQueries;
              c && this.queries.forEach((function(e, n) {
                var a = e.observableQuery,
                  s = a && a.queryName;
                if (s && re.call(c, s)) {
                  var u = c[s],
                    l = r.queries.get(n),
                    f = l.document,
                    h = l.variables,
                    d = t.diff({
                      query: f,
                      variables: h,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    p = d.result;
                  if (d.complete && p) {
                    var v = u(p, {
                      mutationResult: i,
                      queryName: f && (0, E.n4)(f) || void 0,
                      queryVariables: h
                    });
                    v && o.push({
                      result: v,
                      dataId: "ROOT_QUERY",
                      query: f,
                      variables: h
                    })
                  }
                }
              }))
            }
            if (o.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
              var l = [];
              if (this.refetchQueries({
                  updateCache: function(t) {
                    a || o.forEach((function(e) {
                      return t.write(e)
                    }));
                    var s = e.update,
                      u = !(0, f.YX)(i) || (0, f.ST)(i) && !i.hasNext;
                    if (s) {
                      if (!a) {
                        var c = t.diff({
                          id: "ROOT_MUTATION",
                          query: r.getDocumentInfo(e.document).asQuery,
                          variables: e.variables,
                          optimistic: !1,
                          returnPartialData: !0
                        });
                        c.complete && ("incremental" in (i = (0, n.Cl)((0, n.Cl)({}, i), {
                          data: c.result
                        })) && delete i.incremental, "hasNext" in i && delete i.hasNext)
                      }
                      u && s(t, i, {
                        context: e.context,
                        variables: e.variables
                      })
                    }
                    a || e.keepRootFields || !u || t.modify({
                      id: "ROOT_MUTATION",
                      fields: function(e, t) {
                        var r = t.fieldName,
                          n = t.DELETE;
                        return "__typename" === r ? e : n
                      }
                    })
                  },
                  include: e.refetchQueries,
                  optimistic: !1,
                  removeOptimistic: e.removeOptimistic,
                  onQueryUpdated: e.onQueryUpdated || null
                }).forEach((function(e) {
                  return l.push(e)
                })), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(l).then((function() {
                return i
              }))
            }
            return Promise.resolve(i)
          }, e.prototype.markMutationOptimistic = function(e, t) {
            var r = this,
              o = "function" == typeof e ? e(t.variables, {
                IGNORE: ne
              }) : e;
            return o !== ne && (this.cache.recordOptimisticTransaction((function(e) {
              try {
                r.markMutationResult((0, n.Cl)((0, n.Cl)({}, t), {
                  result: {
                    data: o
                  }
                }), e)
              } catch (e) {
                !1 !== globalThis.__DEV__ && i.V1.error(e)
              }
            }), t.mutationId), !0)
          }, e.prototype.fetchQuery = function(e, t, r) {
            return this.fetchConcastWithInfo(e, t, r).concast.promise
          }, e.prototype.getQueryStore = function() {
            var e = Object.create(null);
            return this.queries.forEach((function(t, r) {
              e[r] = {
                variables: t.variables,
                networkStatus: t.networkStatus,
                networkError: t.networkError,
                graphQLErrors: t.graphQLErrors
              }
            })), e
          }, e.prototype.resetErrors = function(e) {
            var t = this.queries.get(e);
            t && (t.networkError = void 0, t.graphQLErrors = [])
          }, e.prototype.transform = function(e) {
            return this.documentTransform.transformDocument(e)
          }, e.prototype.getDocumentInfo = function(e) {
            var t = this.transformCache;
            if (!t.has(e)) {
              var r = {
                hasClientExports: (0, h.f2)(e),
                hasForcedResolvers: this.localState.shouldForceResolvers(e),
                hasNonreactiveDirective: (0, h.d8)(["nonreactive"], e),
                nonReactiveQuery: (0, d.x3)(e),
                clientQuery: this.localState.clientQuery(e),
                serverQuery: (0, d.iz)([{
                  name: "client",
                  remove: !0
                }, {
                  name: "connection"
                }, {
                  name: "nonreactive"
                }, {
                  name: "unmask"
                }], e),
                defaultVars: (0, E.wY)((0, E.Vu)(e)),
                asQuery: (0, n.Cl)((0, n.Cl)({}, e), {
                  definitions: e.definitions.map((function(e) {
                    return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, n.Cl)((0, n.Cl)({}, e), {
                      operation: "query"
                    }) : e
                  }))
                })
              };
              t.set(e, r)
            }
            return t.get(e)
          }, e.prototype.getVariables = function(e, t) {
            return (0, n.Cl)((0, n.Cl)({}, this.getDocumentInfo(e).defaultVars), t)
          }, e.prototype.watchQuery = function(e) {
            var t = this.transform(e.query);
            void 0 === (e = (0, n.Cl)((0, n.Cl)({}, e), {
              variables: this.getVariables(t, e.variables)
            })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
            var r = new H(this),
              i = new V({
                queryManager: this,
                queryInfo: r,
                options: e
              });
            return i.lastQuery = t, this.queries.set(i.queryId, r), r.init({
              document: t,
              observableQuery: i,
              variables: i.variables
            }), i
          }, e.prototype.query = function(e, t) {
            var r = this;
            void 0 === t && (t = this.generateQueryId()), (0, i.V1)(e.query, 30), (0, i.V1)("Document" === e.query.kind, 31), (0, i.V1)(!e.returnPartialData, 32), (0, i.V1)(!e.pollInterval, 33);
            var o = this.transform(e.query);
            return this.fetchQuery(t, (0, n.Cl)((0, n.Cl)({}, e), {
              query: o
            })).then((function(i) {
              return i && (0, n.Cl)((0, n.Cl)({}, i), {
                data: r.maskOperation({
                  document: o,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: t
                })
              })
            })).finally((function() {
              return r.stopQuery(t)
            }))
          }, e.prototype.generateQueryId = function() {
            return String(this.queryIdCounter++)
          }, e.prototype.generateRequestId = function() {
            return this.requestIdCounter++
          }, e.prototype.generateMutationId = function() {
            return String(this.mutationIdCounter++)
          }, e.prototype.stopQueryInStore = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries()
          }, e.prototype.stopQueryInStoreNoBroadcast = function(e) {
            var t = this.queries.get(e);
            t && t.stop()
          }, e.prototype.clearStore = function(e) {
            return void 0 === e && (e = {
              discardWatches: !0
            }), this.cancelPendingFetches((0, i.vA)(34)), this.queries.forEach((function(e) {
              e.observableQuery ? e.networkStatus = A.pT.loading : e.stop()
            })), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
          }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map,
              o = new Map,
              a = new Map,
              s = new Set;
            return Array.isArray(e) && e.forEach((function(e) {
              if ("string" == typeof e) o.set(e, e), a.set(e, !1);
              else if ((0, O.Kc)(e)) {
                var r = (0, J.y)(t.transform(e));
                o.set(r, (0, E.n4)(e)), a.set(r, !1)
              } else(0, S.U)(e) && e.query && s.add(e)
            })), this.queries.forEach((function(t, n) {
              var i = t.observableQuery,
                o = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && a.has(s) || o && a.has((0, J.y)(o))) && (r.set(n, i), s && a.set(s, !0), o && a.set((0, J.y)(o), !0))
              }
            })), s.size && s.forEach((function(e) {
              var o = (0, k.v)("legacyOneTimeQuery"),
                a = t.getQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new V({
                  queryManager: t,
                  queryInfo: a,
                  options: (0, n.Cl)((0, n.Cl)({}, e), {
                    fetchPolicy: "network-only"
                  })
                });
              (0, i.V1)(s.queryId === o), a.setObservableQuery(s), r.set(o, s)
            })), !1 !== globalThis.__DEV__ && a.size && a.forEach((function(e, t) {
              if (!e) {
                var r = o.get(t);
                r ? !1 !== globalThis.__DEV__ && i.V1.warn(35, r) : !1 !== globalThis.__DEV__ && i.V1.warn(36)
              }
            })), r
          }, e.prototype.reFetchObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1);
            var r = [];
            return this.getObservableQueries(e ? "all" : "active").forEach((function(n, i) {
              var o = n.options.fetchPolicy;
              n.resetLastResults(), (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()), t.getQuery(i).setDiff(null)
            })), this.broadcastQueries(), Promise.all(r)
          }, e.prototype.setObservableQuery = function(e) {
            this.getQuery(e.queryId).setObservableQuery(e)
          }, e.prototype.startGraphQLSubscription = function(e) {
            var t = this,
              r = e.query,
              n = e.variables,
              i = e.fetchPolicy,
              o = e.errorPolicy,
              a = void 0 === o ? "none" : o,
              s = e.context,
              u = void 0 === s ? {} : s,
              c = e.extensions,
              l = void 0 === c ? {} : c;
            r = this.transform(r), n = this.getVariables(r, n);
            var f = function(e) {
              return t.getObservableFromLink(r, u, e, l).map((function(n) {
                "no-cache" !== i && (G(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = w(n),
                  s = (0, M.uR)(n);
                if (o || s) {
                  var u = {};
                  if (o && (u.graphQLErrors = n.errors), s && (u.protocolErrors = n.extensions[M.K$]), "none" === a || s) throw new M.K4(u)
                }
                return "ignore" === a && delete n.errors, n
              }))
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var h = this.localState.addExportedVariables(r, n, u).then(f);
              return new m.c((function(e) {
                var t = null;
                return h.then((function(r) {
                    return t = r.subscribe(e)
                  }), e.error),
                  function() {
                    return t && t.unsubscribe()
                  }
              }))
            }
            return f(n)
          }, e.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries()
          }, e.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
          }, e.prototype.removeQuery = function(e) {
            this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e))
          }, e.prototype.broadcastQueries = function() {
            this.onBroadcast && this.onBroadcast(), this.queries.forEach((function(e) {
              return e.notify()
            }))
          }, e.prototype.getLocalState = function() {
            return this.localState
          }, e.prototype.getObservableFromLink = function(e, t, r, i, o) {
            var s, u, c = this;
            void 0 === o && (o = null !== (s = null == t ? void 0 : t.queryDeduplication) && void 0 !== s ? s : this.queryDeduplication);
            var l = this.getDocumentInfo(e),
              f = l.serverQuery,
              h = l.clientQuery;
            if (f) {
              var d = this.inFlightLinkObservables,
                p = this.link,
                y = {
                  query: f,
                  variables: r,
                  operationName: (0, E.n4)(f) || void 0,
                  context: this.prepareContext((0, n.Cl)((0, n.Cl)({}, t), {
                    forceFetch: !o
                  })),
                  extensions: i
                };
              if (t = y.context, o) {
                var g = (0, J.y)(f),
                  w = (0, v.M)(r),
                  _ = d.lookup(g, w);
                if (!(u = _.observable)) {
                  var O = new R([a(p, y)]);
                  u = _.observable = O, O.beforeNext((function() {
                    d.remove(g, w)
                  }))
                }
              } else u = new R([a(p, y)])
            } else u = new R([m.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return h && (u = b(u, (function(e) {
              return c.localState.runResolvers({
                document: h,
                remoteResult: e,
                context: t,
                variables: r
              })
            }))), u
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(r.query);
            return b(this.getObservableFromLink(i, r.context, r.variables), (function(o) {
              var a = _(o),
                s = a.length > 0,
                u = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === u) throw e.markError(new M.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: A.pT.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = A.pT.error), c
            }), (function(t) {
              var r = (0, M.Mn)(t) ? t : new M.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            }))
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = A.pT.loading), void 0 === n && (n = t.query);
            var o, a, s = this.getVariables(n, t.variables),
              u = this.getQuery(e),
              c = this.defaultOptions.watchQuery,
              l = t.fetchPolicy,
              f = void 0 === l ? c && c.fetchPolicy || "cache-first" : l,
              h = t.errorPolicy,
              d = void 0 === h ? c && c.errorPolicy || "none" : h,
              p = t.returnPartialData,
              v = void 0 !== p && p,
              y = t.notifyOnNetworkStatusChange,
              m = void 0 !== y && y,
              b = t.context,
              g = void 0 === b ? {} : b,
              w = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: f,
                errorPolicy: d,
                returnPartialData: v,
                notifyOnNetworkStatusChange: m,
                context: g
              }),
              _ = function(e) {
                w.variables = e;
                var n = i.fetchQueryByPolicy(u, w, r);
                return "standby" !== w.fetchPolicy && n.sources.length > 0 && u.observableQuery && u.observableQuery.applyNextFetchPolicy("after-fetch", t), n
              },
              E = function() {
                return i.fetchCancelFns.delete(e)
              };
            if (this.fetchCancelFns.set(e, (function(e) {
                E(), setTimeout((function() {
                  return o.cancel(e)
                }))
              })), this.getDocumentInfo(w.query).hasClientExports) o = new R(this.localState.addExportedVariables(w.query, w.variables, w.context).then(_).then((function(e) {
              return e.sources
            }))), a = !0;
            else {
              var O = _(w.variables);
              a = O.fromLink, o = new R(O.sources)
            }
            return o.promise.then(E, E), {
              concast: o,
              fromLink: a
            }
          }, e.prototype.refetchQueries = function(e) {
            var t = this,
              r = e.updateCache,
              n = e.include,
              i = e.optimistic,
              o = void 0 !== i && i,
              a = e.removeOptimistic,
              s = void 0 === a ? o ? (0, k.v)("refetchQueries") : void 0 : a,
              u = e.onQueryUpdated,
              c = new Map;
            n && this.getObservableQueries(n).forEach((function(e, r) {
              c.set(r, {
                oq: e,
                lastDiff: t.getQuery(r).getDiff()
              })
            }));
            var l = new Map;
            return r && this.cache.batch({
              update: r,
              optimistic: o && s || !1,
              removeOptimistic: s,
              onWatchUpdated: function(e, t, r) {
                var n = e.watcher instanceof H && e.watcher.observableQuery;
                if (n) {
                  if (u) {
                    c.delete(n.queryId);
                    var i = u(n, t, r);
                    return !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), i
                  }
                  null !== u && c.set(n.queryId, {
                    oq: n,
                    lastDiff: r,
                    diff: t
                  })
                }
              }
            }), c.size && c.forEach((function(e, r) {
              var n, i = e.oq,
                o = e.lastDiff,
                a = e.diff;
              if (u) {
                if (!a) {
                  var s = i.queryInfo;
                  s.reset(), a = s.getDiff()
                }
                n = u(i, a, o)
              }
              u && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            })), s && this.cache.removeOptimistic(s), l
          }, e.prototype.maskOperation = function(e) {
            var t, r, n, o = e.document,
              a = e.data;
            if (!1 !== globalThis.__DEV__) {
              var s = e.fetchPolicy,
                u = e.id,
                c = null === (t = (0, E.Vu)(o)) || void 0 === t ? void 0 : t.operation,
                l = (null !== (r = null == c ? void 0 : c[0]) && void 0 !== r ? r : "o") + u;
              !this.dataMasking || "no-cache" !== s || (0, p.s6)(o) || this.noCacheWarningsByQueryId.has(l) || (this.noCacheWarningsByQueryId.add(l), !1 !== globalThis.__DEV__ && i.V1.warn(37, null !== (n = (0, E.n4)(o)) && void 0 !== n ? n : "Unnamed ".concat(null != c ? c : "operation")))
            }
            return this.dataMasking ? function(e, t, r) {
              var n;
              if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, ee.Ki)(), e;
              var o = (0, E.Vu)(t);
              return (0, i.V1)(o, 51), null == e ? e : (0, Z.S)(e, o.selectionSet, {
                operationType: o.operation,
                operationName: null === (n = o.name) || void 0 === n ? void 0 : n.value,
                fragmentMap: (0, p.JG)((0, E.zK)(t)),
                cache: r,
                mutableTargets: new ee.jq,
                knownChanged: new ee.xm
              })
            }(a, o, this.cache) : a
          }, e.prototype.maskFragment = function(e) {
            var t = e.data,
              r = e.fragment,
              n = e.fragmentName;
            return this.dataMasking ? (0, te.z)(t, r, this.cache, n) : t
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var i = this,
              o = t.query,
              a = t.variables,
              s = t.fetchPolicy,
              u = t.refetchWritePolicy,
              c = t.errorPolicy,
              f = t.returnPartialData,
              h = t.context,
              d = t.notifyOnNetworkStatusChange,
              p = e.networkStatus;
            e.init({
              document: o,
              variables: a,
              networkStatus: r
            });
            var v = function() {
                return e.getDiff()
              },
              y = function(t, r) {
                void 0 === r && (r = e.networkStatus || A.pT.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || f || (0, l.L)(s, {}) || L(t.missing);
                var u = function(e) {
                  return m.c.of((0, n.Cl)({
                    data: e,
                    loading: (0, A.bi)(r),
                    networkStatus: r
                  }, t.complete ? null : {
                    partial: !0
                  }))
                };
                return s && i.getDocumentInfo(o).hasForcedResolvers ? i.localState.runResolvers({
                  document: o,
                  remoteResult: {
                    data: s
                  },
                  context: h,
                  variables: a,
                  onlyRunForcedResolvers: !0
                }).then((function(e) {
                  return u(e.data || void 0)
                })) : "none" === c && r === A.pT.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              b = "no-cache" === s ? 0 : r === A.pT.refetch && "merge" !== u ? 1 : 2,
              g = function() {
                return i.getResultsFromLink(e, b, {
                  query: o,
                  variables: a,
                  context: h,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              w = d && "number" == typeof p && p !== r && (0, A.bi)(r);
            switch (s) {
              default:
              case "cache-first":
                return (_ = v()).complete ? {
                  fromLink: !1,
                  sources: [y(_, e.markReady())]
                } : f || w ? {
                  fromLink: !0,
                  sources: [y(_), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "cache-and-network":
                var _;
                return (_ = v()).complete || f || w ? {
                  fromLink: !0,
                  sources: [y(_), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [y(v(), e.markReady())]
                };
              case "network-only":
                return w ? {
                  fromLink: !0,
                  sources: [y(v()), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "no-cache":
                return w ? {
                  fromLink: !0,
                  sources: [y(e.getDiff()), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "standby":
                return {
                  fromLink: !1, sources: []
                }
            }
          }, e.prototype.getQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new H(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        oe = r(16565),
        ae = r(53562),
        se = function() {
          function e(e) {
            var t = e.cache,
              r = e.client,
              n = e.resolvers,
              i = e.fragmentMatcher;
            this.selectionsToResolveCache = new WeakMap, this.cache = t, r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i)
          }
          return e.prototype.addResolvers = function(e) {
            var t = this;
            this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach((function(e) {
              t.resolvers = (0, B.D9)(t.resolvers, e)
            })) : this.resolvers = (0, B.D9)(this.resolvers, e)
          }, e.prototype.setResolvers = function(e) {
            this.resolvers = {}, this.addResolvers(e)
          }, e.prototype.getResolvers = function() {
            return this.resolvers || {}
          }, e.prototype.runResolvers = function(e) {
            return (0, n.sH)(this, arguments, void 0, (function(e) {
              var t = e.document,
                r = e.remoteResult,
                i = e.context,
                o = e.variables,
                a = e.onlyRunForcedResolvers,
                s = void 0 !== a && a;
              return (0, n.YH)(this, (function(e) {
                return t ? [2, this.resolveDocument(t, r.data, i, o, this.fragmentMatcher, s).then((function(e) {
                  return (0, n.Cl)((0, n.Cl)({}, r), {
                    data: e.result
                  })
                }))] : [2, r]
              }))
            }))
          }, e.prototype.setFragmentMatcher = function(e) {
            this.fragmentMatcher = e
          }, e.prototype.getFragmentMatcher = function() {
            return this.fragmentMatcher
          }, e.prototype.clientQuery = function(e) {
            return (0, h.d8)(["client"], e) && this.resolvers ? e : null
          }, e.prototype.serverQuery = function(e) {
            return (0, d.er)(e)
          }, e.prototype.prepareContext = function(e) {
            var t = this.cache;
            return (0, n.Cl)((0, n.Cl)({}, e), {
              cache: t,
              getCacheKey: function(e) {
                return t.identify(e)
              }
            })
          }, e.prototype.addExportedVariables = function(e) {
            return (0, n.sH)(this, arguments, void 0, (function(e, t, r) {
              return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, n.YH)(this, (function(i) {
                return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then((function(e) {
                  return (0, n.Cl)((0, n.Cl)({}, t), e.exportedVariables)
                }))] : [2, (0, n.Cl)({}, t)]
              }))
            }))
          }, e.prototype.shouldForceResolvers = function(e) {
            var t = !1;
            return (0, oe.visit)(e, {
              Directive: {
                enter: function(e) {
                  if ("client" === e.name.value && e.arguments && (t = e.arguments.some((function(e) {
                      return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                    })))) return oe.BREAK
                }
              }
            }), t
          }, e.prototype.buildRootValueFromCache = function(e, t) {
            return this.cache.diff({
              query: (0, d.zc)(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1
            }).result
          }, e.prototype.resolveDocument = function(e, t) {
            return (0, n.sH)(this, arguments, void 0, (function(e, t, r, i, o, a) {
              var s, u, c, l, f, h, d, v, y, m;
              return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
                return !0
              }), void 0 === a && (a = !1), (0, n.YH)(this, (function(b) {
                return s = (0, E.Vn)(e), u = (0, E.zK)(e), c = (0, p.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", v = (d = this).cache, y = d.client, m = {
                  fragmentMap: c,
                  context: (0, n.Cl)((0, n.Cl)({}, r), {
                    cache: v,
                    client: y
                  }),
                  variables: i,
                  fragmentMatcher: o,
                  defaultOperationType: h,
                  exportedVariables: {},
                  selectionsToResolve: l,
                  onlyRunForcedResolvers: a
                }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, m).then((function(e) {
                  return {
                    result: e,
                    exportedVariables: m.exportedVariables
                  }
                }))]
              }))
            }))
          }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
            return (0, n.sH)(this, void 0, void 0, (function() {
              var a, s, u, c, l, f = this;
              return (0, n.YH)(this, (function(d) {
                return a = o.fragmentMap, s = o.context, u = o.variables, c = [r], l = function(e) {
                  return (0, n.sH)(f, void 0, void 0, (function() {
                    var l, f;
                    return (0, n.YH)(this, (function(n) {
                      return (t || o.selectionsToResolve.has(e)) && (0, h.MS)(e, u) ? (0, O.dt)(e) ? [2, this.resolveField(e, t, r, o).then((function(t) {
                        var r;
                        void 0 !== t && c.push(((r = {})[(0, O.ue)(e)] = t, r))
                      }))] : ((0, O.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 19, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then((function(e) {
                        c.push(e)
                      }))] : [2]) : [2]
                    }))
                  }))
                }, [2, Promise.all(e.selections.map(l)).then((function() {
                  return (0, B.IM)(c)
                }))]
              }))
            }))
          }, e.prototype.resolveField = function(e, t, r, i) {
            return (0, n.sH)(this, void 0, void 0, (function() {
              var o, a, s, u, c, l, f, h, d, p = this;
              return (0, n.YH)(this, (function(n) {
                return r ? (o = i.variables, a = e.name.value, s = (0, O.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (h = this.resolvers && this.resolvers[f]) && (d = h[u ? a : s]) && (l = Promise.resolve(ae.bl.withValue(this.cache, d, [r, (0, O.MB)(e, o), i.context, {
                  field: e,
                  fragmentMap: i.fragmentMap
                }])))), [2, l.then((function(r) {
                  var n, o;
                  if (void 0 === r && (r = c), e.directives && e.directives.forEach((function(e) {
                      "export" === e.name.value && e.arguments && e.arguments.forEach((function(e) {
                        "as" === e.name.value && "StringValue" === e.value.kind && (i.exportedVariables[e.value.value] = r)
                      }))
                    })), !e.selectionSet) return r;
                  if (null == r) return r;
                  var a = null !== (o = null === (n = e.directives) || void 0 === n ? void 0 : n.some((function(e) {
                    return "client" === e.name.value
                  }))) && void 0 !== o && o;
                  return Array.isArray(r) ? p.resolveSubSelectedArray(e, t || a, r, i) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t || a, r, i) : void 0
                }))]) : [2, null]
              }))
            }))
          }, e.prototype.resolveSubSelectedArray = function(e, t, r, n) {
            var i = this;
            return Promise.all(r.map((function(r) {
              return null === r ? null : Array.isArray(r) ? i.resolveSubSelectedArray(e, t, r, n) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, r, n) : void 0
            })))
          }, e.prototype.collectSelectionsToResolve = function(e, t) {
            var r = function(e) {
                return !Array.isArray(e)
              },
              n = this.selectionsToResolveCache;
            return function e(o) {
              if (!n.has(o)) {
                var a = new Set;
                n.set(o, a), (0, oe.visit)(o, {
                  Directive: function(e, t, n, i, o) {
                    "client" === e.name.value && o.forEach((function(e) {
                      r(e) && (0, oe.isSelectionNode)(e) && a.add(e)
                    }))
                  },
                  FragmentSpread: function(n, o, s, u, c) {
                    var l = t[n.name.value];
                    (0, i.V1)(l, 20, n.name.value);
                    var f = e(l);
                    f.size > 0 && (c.forEach((function(e) {
                      r(e) && (0, oe.isSelectionNode)(e) && a.add(e)
                    })), a.add(n), f.forEach((function(e) {
                      a.add(e)
                    })))
                  }
                })
              }
              return n.get(o)
            }(e)
          }, e
        }(),
        ue = r(81176),
        ce = r(51859),
        le = !1,
        fe = function() {
          function e(e) {
            var t, r = this;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw (0, i.vA)(16);
            var a = e.uri,
              u = e.credentials,
              l = e.headers,
              f = e.cache,
              h = e.documentTransform,
              d = e.ssrMode,
              p = void 0 !== d && d,
              v = e.ssrForceFetchDelay,
              y = void 0 === v ? 0 : v,
              m = e.connectToDevTools,
              b = e.queryDeduplication,
              g = void 0 === b || b,
              w = e.defaultOptions,
              _ = e.defaultContext,
              E = e.assumeImmutableResults,
              O = void 0 === E ? f.assumeImmutableResults : E,
              S = e.resolvers,
              k = e.typeDefs,
              C = e.fragmentMatcher,
              T = e.name,
              D = e.version,
              x = e.devtools,
              R = e.dataMasking,
              M = e.link;
            M || (M = a ? new c({
              uri: a,
              credentials: u,
              headers: l
            }) : o.C.empty()), this.link = M, this.cache = f, this.disableNetworkFetches = p || y > 0, this.queryDeduplication = g, this.defaultOptions = w || Object.create(null), this.typeDefs = k, this.devtoolsConfig = (0, n.Cl)((0, n.Cl)({}, x), {
              enabled: null !== (t = null == x ? void 0 : x.enabled) && void 0 !== t ? t : m
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), y && setTimeout((function() {
              return r.disableNetworkFetches = !1
            }), y), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new se({
              cache: f,
              client: this,
              resolvers: S,
              fragmentMatcher: C
            }), this.queryManager = new ie({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: _,
              documentTransform: h,
              queryDeduplication: g,
              ssrMode: p,
              dataMasking: !!R,
              clientAwareness: {
                name: T,
                version: D
              },
              localState: this.localState,
              assumeImmutableResults: O,
              onBroadcast: this.devtoolsConfig.enabled ? function() {
                r.devToolsHookCb && r.devToolsHookCb({
                  action: {},
                  state: {
                    queries: r.queryManager.getQueryStore(),
                    mutations: r.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: r.cache.extract(!0)
                })
              } : void 0
            }), this.devtoolsConfig.enabled && this.connectToDevTools()
          }
          return e.prototype.connectToDevTools = function() {
            if ("undefined" != typeof window) {
              var e = window,
                t = Symbol.for("apollo.devtools");
              (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, le || !1 === globalThis.__DEV__ || (le = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout((function() {
                if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                  var e = window.navigator,
                    t = e && e.userAgent,
                    r = void 0;
                  "string" == typeof t && (t.indexOf("Chrome/") > -1 ? r = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (r = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), r && !1 !== globalThis.__DEV__ && i.V1.log("Download the Apollo DevTools for a better development experience: %s", r)
                }
              }), 1e4))
            }
          }, Object.defineProperty(e.prototype, "documentTransform", {
            get: function() {
              return this.queryManager.documentTransform
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.stop = function() {
            this.queryManager.stop()
          }, e.prototype.watchQuery = function(e) {
            return this.defaultOptions.watchQuery && (e = (0, ue.l)(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = (0, ue.l)(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 17), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = (0, ue.l)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            var t = this,
              r = this.queryManager.generateQueryId();
            return this.queryManager.startGraphQLSubscription(e).map((function(i) {
              return (0, n.Cl)((0, n.Cl)({}, i), {
                data: t.queryManager.maskOperation({
                  document: e.query,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: r
                })
              })
            }))
          }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readQuery(e, t)
          }, e.prototype.watchFragment = function(e) {
            var t;
            return this.cache.watchFragment((0, n.Cl)((0, n.Cl)({}, e), ((t = {})[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)))
          }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readFragment(e, t)
          }, e.prototype.writeQuery = function(e) {
            var t = this.cache.writeQuery(e);
            return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
          }, e.prototype.writeFragment = function(e) {
            var t = this.cache.writeFragment(e);
            return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
          }, e.prototype.__actionHookForDevTools = function(e) {
            this.devToolsHookCb = e
          }, e.prototype.__requestRaw = function(e) {
            return a(this.link, e)
          }, e.prototype.resetStore = function() {
            var e = this;
            return Promise.resolve().then((function() {
              return e.queryManager.clearStore({
                discardWatches: !1
              })
            })).then((function() {
              return Promise.all(e.resetStoreCallbacks.map((function(e) {
                return e()
              })))
            })).then((function() {
              return e.reFetchObservableQueries()
            }))
          }, e.prototype.clearStore = function() {
            var e = this;
            return Promise.resolve().then((function() {
              return e.queryManager.clearStore({
                discardWatches: !0
              })
            })).then((function() {
              return Promise.all(e.clearStoreCallbacks.map((function(e) {
                return e()
              })))
            }))
          }, e.prototype.onResetStore = function(e) {
            var t = this;
            return this.resetStoreCallbacks.push(e),
              function() {
                t.resetStoreCallbacks = t.resetStoreCallbacks.filter((function(t) {
                  return t !== e
                }))
              }
          }, e.prototype.onClearStore = function(e) {
            var t = this;
            return this.clearStoreCallbacks.push(e),
              function() {
                t.clearStoreCallbacks = t.clearStoreCallbacks.filter((function(t) {
                  return t !== e
                }))
              }
          }, e.prototype.reFetchObservableQueries = function(e) {
            return this.queryManager.reFetchObservableQueries(e)
          }, e.prototype.refetchQueries = function(e) {
            var t = this.queryManager.refetchQueries(e),
              r = [],
              n = [];
            t.forEach((function(e, t) {
              r.push(t), n.push(e)
            }));
            var o = Promise.all(n);
            return o.queries = r, o.results = n, o.catch((function(e) {
              !1 !== globalThis.__DEV__ && i.V1.debug(18, e)
            })), o
          }, e.prototype.getObservableQueries = function(e) {
            return void 0 === e && (e = "active"), this.queryManager.getObservableQueries(e)
          }, e.prototype.extract = function(e) {
            return this.cache.extract(e)
          }, e.prototype.restore = function(e) {
            return this.cache.restore(e)
          }, e.prototype.addResolvers = function(e) {
            this.localState.addResolvers(e)
          }, e.prototype.setResolvers = function(e) {
            this.localState.setResolvers(e)
          }, e.prototype.getResolvers = function() {
            return this.localState.getResolvers()
          }, e.prototype.setLocalStateFragmentMatcher = function(e) {
            this.localState.setFragmentMatcher(e)
          }, e.prototype.setLink = function(e) {
            this.link = this.queryManager.link = e
          }, Object.defineProperty(e.prototype, "defaultContext", {
            get: function() {
              return this.queryManager.defaultContext
            },
            enumerable: !1,
            configurable: !0
          }), e
        }();
      !1 !== globalThis.__DEV__ && (fe.prototype.getMemoryInternals = ce.ep)
    },
    27792: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => c
      });
      var n = r(78322),
        i = r(47677),
        o = r(5008),
        a = r(57831),
        s = r(13002),
        u = r(76290);

      function c(e, t, r, s) {
        var u = t.data,
          c = (0, n.Tt)(t, ["data"]),
          f = r.data,
          h = (0, n.Tt)(r, ["data"]);
        return (0, i.A)(c, h) && l((0, o.Vn)(e).selectionSet, u, f, {
          fragmentMap: (0, a.JG)((0, o.zK)(e)),
          variables: s
        })
      }

      function l(e, t, r, n) {
        if (t === r) return !0;
        var o = new Set;
        return e.selections.every((function(e) {
          if (o.has(e)) return !0;
          if (o.add(e), !(0, s.MS)(e, n.variables)) return !0;
          if (f(e)) return !0;
          if ((0, u.dt)(e)) {
            var c = (0, u.ue)(e),
              h = t && t[c],
              d = r && r[c],
              p = e.selectionSet;
            if (!p) return (0, i.A)(h, d);
            var v = Array.isArray(h),
              y = Array.isArray(d);
            if (v !== y) return !1;
            if (v && y) {
              var m = h.length;
              if (d.length !== m) return !1;
              for (var b = 0; b < m; ++b)
                if (!l(p, h[b], d[b], n)) return !1;
              return !0
            }
            return l(p, h, d, n)
          }
          var g = (0, a.HQ)(e, n.fragmentMap);
          return g ? !!f(g) || l(g.selectionSet, t, r, n) : void 0
        }))
      }

      function f(e) {
        return !!e.directives && e.directives.some(h)
      }

      function h(e) {
        return "nonreactive" === e.name.value
      }
    },
    62847: (e, t, r) => {
      "use strict";
      var n;

      function i(e) {
        return !!e && e < 7
      }
      r.d(t, {
          bi: () => i,
          pT: () => n
        }),
        function(e) {
          e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
        }(n || (n = {}))
    },
    42179: (e, t, r) => {
      "use strict";
      r.d(t, {
        K$: () => o,
        K4: () => u,
        Mn: () => s,
        uR: () => a
      });
      var n = r(78322),
        i = (r(61575), r(41136)),
        o = Symbol();

      function a(e) {
        return !!e.extensions && Array.isArray(e.extensions[o])
      }

      function s(e) {
        return e.hasOwnProperty("graphQLErrors")
      }
      var u = function(e) {
        function t(r) {
          var o, a, s = r.graphQLErrors,
            u = r.protocolErrors,
            c = r.clientErrors,
            l = r.networkError,
            f = r.errorMessage,
            h = r.extraInfo,
            d = e.call(this, f) || this;
          return d.name = "ApolloError", d.graphQLErrors = s || [], d.protocolErrors = u || [], d.clientErrors = c || [], d.networkError = l || null, d.message = f || (o = d, a = (0, n.fX)((0, n.fX)((0, n.fX)([], o.graphQLErrors, !0), o.clientErrors, !0), o.protocolErrors, !0), o.networkError && a.push(o.networkError), a.map((function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          })).join("\n")), d.extraInfo = h, d.cause = (0, n.fX)((0, n.fX)((0, n.fX)([l], s || [], !0), u || [], !0), c || [], !0).find((function(e) {
            return !!e
          })) || null, d.__proto__ = t.prototype, d
        }
        return (0, n.C6)(t, e), t
      }(Error)
    },
    96532: (e, t, r) => {
      "use strict";
      r.d(t, {
        o: () => a
      });
      var n = r(78322),
        i = r(48774),
        o = r(94929);

      function a(e) {
        return new i.C((function(t, r) {
          var i = (0, n.Tt)(t, []);
          return new o.c((function(n) {
            var o, a = !1;
            return Promise.resolve(i).then((function(r) {
                return e(r, t.getContext())
              })).then(t.setContext).then((function() {
                a || (o = r(t).subscribe({
                  next: n.next.bind(n),
                  error: n.error.bind(n),
                  complete: n.complete.bind(n)
                }))
              })).catch(n.error.bind(n)),
              function() {
                a = !0, o && o.unsubscribe()
              }
          }))
        }))
      }
    },
    48774: (e, t, r) => {
      "use strict";
      r.d(t, {
        C: () => l
      });
      var n = r(61575),
        i = r(94929),
        o = r(78322),
        a = r(5008);

      function s(e, t) {
        return t ? t(e) : i.c.of()
      }

      function u(e) {
        return "function" == typeof e ? new l(e) : e
      }

      function c(e) {
        return e.request.length <= 1
      }
      var l = function() {
        function e(e) {
          e && (this.request = e)
        }
        return e.empty = function() {
          return new e((function() {
            return i.c.of()
          }))
        }, e.from = function(t) {
          return 0 === t.length ? e.empty() : t.map(u).reduce((function(e, t) {
            return e.concat(t)
          }))
        }, e.split = function(t, r, n) {
          var o, a = u(r),
            l = u(n || new e(s));
          return o = c(a) && c(l) ? new e((function(e) {
            return t(e) ? a.request(e) || i.c.of() : l.request(e) || i.c.of()
          })) : new e((function(e, r) {
            return t(e) ? a.request(e, r) || i.c.of() : l.request(e, r) || i.c.of()
          })), Object.assign(o, {
            left: a,
            right: l
          })
        }, e.execute = function(e, t) {
          return e.request(function(e, t) {
            var r = (0, o.Cl)({}, e);
            return Object.defineProperty(t, "setContext", {
              enumerable: !1,
              value: function(e) {
                r = "function" == typeof e ? (0, o.Cl)((0, o.Cl)({}, r), e(r)) : (0, o.Cl)((0, o.Cl)({}, r), e)
              }
            }), Object.defineProperty(t, "getContext", {
              enumerable: !1,
              value: function() {
                return (0, o.Cl)({}, r)
              }
            }), t
          }(t.context, function(e) {
            var t = {
              variables: e.variables || {},
              extensions: e.extensions || {},
              operationName: e.operationName,
              query: e.query
            };
            return t.operationName || (t.operationName = "string" != typeof t.query ? (0, a.n4)(t.query) || void 0 : ""), t
          }(function(e) {
            for (var t = ["query", "operationName", "variables", "extensions", "context"], r = 0, i = Object.keys(e); r < i.length; r++) {
              var o = i[r];
              if (t.indexOf(o) < 0) throw (0, n.vA)(46, o)
            }
            return e
          }(t)))) || i.c.of()
        }, e.concat = function(t, r) {
          var o = u(t);
          if (c(o)) return !1 !== globalThis.__DEV__ && n.V1.warn(38, o), o;
          var a, s = u(r);
          return a = c(s) ? new e((function(e) {
            return o.request(e, (function(e) {
              return s.request(e) || i.c.of()
            })) || i.c.of()
          })) : new e((function(e, t) {
            return o.request(e, (function(e) {
              return s.request(e, t) || i.c.of()
            })) || i.c.of()
          })), Object.assign(a, {
            left: o,
            right: s
          })
        }, e.prototype.split = function(t, r, n) {
          return this.concat(e.split(t, r, n || new e(s)))
        }, e.prototype.concat = function(t) {
          return e.concat(this, t)
        }, e.prototype.request = function(e, t) {
          throw (0, n.vA)(39)
        }, e.prototype.onError = function(e, t) {
          if (t && t.error) return t.error(e), !1;
          throw e
        }, e.prototype.setOnError = function(e) {
          return this.onError = e, this
        }, e
      }()
    },
    25879: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => T
      });
      var n = r(78322),
        i = r(61575),
        o = r(48774),
        a = r(13002),
        s = r(94929),
        u = function(e, t) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var n = (0, i.vA)(42, t, e.message);
            throw n.parseError = e, n
          }
          return r
        },
        c = r(26979);

      function l(e) {
        var t = {
          next: function() {
            return e.read()
          }
        };
        return c.uJ && (t[Symbol.asyncIterator] = function() {
          return this
        }), t
      }

      function f(e) {
        var t, r, n, i = e;
        if (e.body && (i = e.body), n = i, c.uJ && n[Symbol.asyncIterator]) return r = i[Symbol.asyncIterator](), (t = {
          next: function() {
            return r.next()
          }
        })[Symbol.asyncIterator] = function() {
          return this
        }, t;
        if (function(e) {
            return !!e.getReader
          }(i)) return l(i.getReader());
        if (function(e) {
            return !!e.stream
          }(i)) return l(i.stream().getReader());
        if (function(e) {
            return !!e.arrayBuffer
          }(i)) return function(e) {
          var t = !1,
            r = {
              next: function() {
                return t ? Promise.resolve({
                  value: void 0,
                  done: !0
                }) : (t = !0, new Promise((function(t, r) {
                  e.then((function(e) {
                    t({
                      value: e,
                      done: !1
                    })
                  })).catch(r)
                })))
              }
            };
          return c.uJ && (r[Symbol.asyncIterator] = function() {
            return this
          }), r
        }(i.arrayBuffer());
        if (function(e) {
            return !!e.pipe
          }(i)) return function(e) {
          var t = null,
            r = null,
            n = !1,
            i = [],
            o = [];

          function a(e) {
            if (!r) {
              if (o.length) {
                var t = o.shift();
                if (Array.isArray(t) && t[0]) return t[0]({
                  value: e,
                  done: !1
                })
              }
              i.push(e)
            }
          }

          function s(e) {
            r = e, o.slice().forEach((function(t) {
              t[1](e)
            })), !t || t()
          }

          function u() {
            n = !0, o.slice().forEach((function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            })), !t || t()
          }
          t = function() {
            t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u)
          }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
          var l = {
            next: function() {
              return new Promise((function(e, t) {
                return r ? t(r) : i.length ? e({
                  value: i.shift(),
                  done: !1
                }) : n ? e({
                  value: void 0,
                  done: !0
                }) : void o.push([e, t])
              }))
            }
          };
          return c.uJ && (l[Symbol.asyncIterator] = function() {
            return this
          }), l
        }(i);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var h = function(e, t, r) {
          var n = new Error(r);
          throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
        },
        d = r(42179),
        p = r(16333),
        v = Object.prototype.hasOwnProperty;

      function y(e) {
        var t = {};
        return e.split("\n").forEach((function(e) {
          var r = e.indexOf(":");
          if (r > -1) {
            var n = e.slice(0, r).trim().toLowerCase(),
              i = e.slice(r + 1).trim();
            t[n] = i
          }
        })), t
      }

      function m(e, t) {
        e.status >= 300 && h(e, function() {
          try {
            return JSON.parse(t)
          } catch (e) {
            return t
          }
        }(), "Response not successful: Received status code ".concat(e.status));
        try {
          return JSON.parse(t)
        } catch (n) {
          var r = n;
          throw r.name = "ServerParseError", r.response = e, r.statusCode = e.status, r.bodyText = t, r
        }
      }
      var b = r(61229),
        g = {
          http: {
            includeQuery: !0,
            includeExtensions: !1,
            preserveHeaderCase: !1
          },
          headers: {
            accept: "*/*",
            "content-type": "application/json"
          },
          options: {
            method: "POST"
          }
        },
        w = function(e, t) {
          return t(e)
        };

      function _(e, t) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        var o = {},
          a = {};
        r.forEach((function(e) {
          o = (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, o), e.options), {
            headers: (0, n.Cl)((0, n.Cl)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), a = (0, n.Cl)((0, n.Cl)({}, a), e.http)
        })), o.headers && (o.headers = function(e, t) {
          if (!t) {
            var r = {};
            return Object.keys(Object(e)).forEach((function(t) {
              r[t.toLowerCase()] = e[t]
            })), r
          }
          var n = {};
          Object.keys(Object(e)).forEach((function(t) {
            n[t.toLowerCase()] = {
              originalName: t,
              value: e[t]
            }
          }));
          var i = {};
          return Object.keys(n).forEach((function(e) {
            i[n[e].originalName] = n[e].value
          })), i
        }(o.headers, a.preserveHeaderCase));
        var s = e.operationName,
          u = e.extensions,
          c = e.variables,
          l = e.query,
          f = {
            operationName: s,
            variables: c
          };
        return a.includeExtensions && (f.extensions = u), a.includeQuery && (f.query = t(l, b.y)), {
          options: o,
          body: f
        }
      }

      function E(e) {
        return new s.c((function(t) {
          t.error(e)
        }))
      }
      var O = r(16565),
        S = r(15734),
        k = r(5008),
        C = (0, i.no)((function() {
          return fetch
        })),
        T = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            c = e.fetch,
            l = e.print,
            b = void 0 === l ? w : l,
            T = e.includeExtensions,
            D = e.preserveHeaderCase,
            x = e.useGETForQueries,
            R = e.includeUnusedVariables,
            M = void 0 !== R && R,
            A = (0, n.Tt)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw (0, i.vA)(40)
          }(c || C);
          var j = {
            http: {
              includeExtensions: T,
              preserveHeaderCase: D
            },
            options: A.fetchOptions,
            credentials: A.credentials,
            headers: A.headers
          };
          return new o.C((function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              o = e.getContext(),
              l = {};
            if (o.clientAwareness) {
              var w = o.clientAwareness,
                T = w.name,
                D = w.version;
              T && (l["apollographql-client-name"] = T), D && (l["apollographql-client-version"] = D)
            }
            var R = (0, n.Cl)((0, n.Cl)({}, l), o.headers),
              A = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: R
              };
            if ((0, a.d8)(["client"], e.query)) {
              var P = (0, S.er)(e.query);
              if (!P) return E(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = P
            }
            var F, I, q, V, Q, N = _(e, b, g, j, A),
              L = N.options,
              z = N.body;
            z.variables && !M && (z.variables = (F = z.variables, I = e.query, q = (0, n.Cl)({}, F), V = new Set(Object.keys(F)), (0, O.visit)(I, {
              Variable: function(e, t, r) {
                r && "VariableDefinition" !== r.kind && V.delete(e.name.value)
              }
            }), V.forEach((function(e) {
              delete q[e]
            })), q)), L.signal || "undefined" == typeof AbortController || (Q = new AbortController, L.signal = Q.signal);
            var B, U = "OperationDefinition" === (B = (0, k.Vn)(e.query)).kind && "subscription" === B.operation,
              W = (0, a.d8)(["defer"], e.query);
            if (x && !e.query.definitions.some((function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              })) && (L.method = "GET"), W || U) {
              L.headers = L.headers || {};
              var K = "multipart/mixed;";
              U && W && !1 !== globalThis.__DEV__ && i.V1.warn(41), U ? K += "boundary=graphql;subscriptionSpec=1.0,application/json" : W && (K += "deferSpec=20220824,application/json"), L.headers.accept = K
            }
            if ("GET" === L.method) {
              var H = function(e, t) {
                  var r = [],
                    n = function(e, t) {
                      r.push("".concat(e, "=").concat(encodeURIComponent(t)))
                    };
                  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
                    var i = void 0;
                    try {
                      i = u(t.variables, "Variables map")
                    } catch (e) {
                      return {
                        parseError: e
                      }
                    }
                    n("variables", i)
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = u(t.extensions, "Extensions map")
                    } catch (e) {
                      return {
                        parseError: e
                      }
                    }
                    n("extensions", o)
                  }
                  var a = "",
                    s = e,
                    c = e.indexOf("#"); - 1 !== c && (a = e.substr(c), s = e.substr(0, c));
                  var l = -1 === s.indexOf("?") ? "?" : "&";
                  return {
                    newURI: s + l + r.join("&") + a
                  }
                }(t, z),
                G = H.newURI,
                J = H.parseError;
              if (J) return E(J);
              t = G
            } else try {
              L.body = u(z, "Payload")
            } catch (J) {
              return E(J)
            }
            return new s.c((function(r) {
              var o = c || (0, i.no)((function() {
                  return fetch
                })) || C,
                a = r.next.bind(r);
              return o(t, L).then((function(t) {
                  var r;
                  e.setContext({
                    response: t
                  });
                  var i, o = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    return (0, n.sH)(this, void 0, void 0, (function() {
                      var r, i, o, a, s, u, c, l, h, v, b, g, w, _, E, O, S, k, C, T, D, x, R, M;
                      return (0, n.YH)(this, (function(A) {
                        switch (A.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            r = new TextDecoder("utf-8"), i = null === (M = e.headers) || void 0 === M ? void 0 : M.get("content-type"), o = "boundary=", a = (null == i ? void 0 : i.includes(o)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(o)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = "\r\n--".concat(a), u = "", c = f(e), l = !0, A.label = 1;
                          case 1:
                            return l ? [4, c.next()] : [3, 3];
                          case 2:
                            for (h = A.sent(), v = h.value, b = h.done, g = "string" == typeof v ? v : r.decode(v), w = u.length - s.length + 1, l = !b, _ = (u += g).indexOf(s, w); _ > -1;) {
                              if (E = void 0, x = [u.slice(0, _), u.slice(_ + s.length)], u = x[1], O = (E = x[0]).indexOf("\r\n\r\n"), S = y(E.slice(0, O)), (k = S["content-type"]) && -1 === k.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (C = E.slice(O))
                                if (T = m(e, C), Object.keys(T).length > 1 || "data" in T || "incremental" in T || "errors" in T || "payload" in T)
                                  if ((0, p.Nw)(T)) {
                                    if (D = {}, "payload" in T) {
                                      if (1 === Object.keys(T).length && null === T.payload) return [2];
                                      D = (0, n.Cl)({}, T.payload)
                                    }
                                    "errors" in T && (D = (0, n.Cl)((0, n.Cl)({}, D), {
                                      extensions: (0, n.Cl)((0, n.Cl)({}, "extensions" in D ? D.extensions : null), (R = {}, R[d.K$] = T.errors, R))
                                    })), t(D)
                                  } else t(T);
                              else if (1 === Object.keys(T).length && "hasNext" in T && !T.hasNext) return [2];
                              _ = u.indexOf(s)
                            }
                            return [3, 1];
                          case 3:
                            return [2]
                        }
                      }))
                    }))
                  }(t, a) : (i = e, function(e) {
                    return e.text().then((function(t) {
                      return m(e, t)
                    })).then((function(t) {
                      return Array.isArray(t) || v.call(t, "data") || v.call(t, "errors") || h(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map((function(e) {
                        return e.operationName
                      })) : i.operationName, "'.")), t
                    }))
                  })(t).then(a)
                })).then((function() {
                  Q = void 0, r.complete()
                })).catch((function(e) {
                  Q = void 0,
                    function(e, t) {
                      e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e)
                    }(e, r)
                })),
                function() {
                  Q && Q.abort()
                }
            }))
          }))
        }
    },
    81863: (e, t, r) => {
      "use strict";
      r.d(t, {
        e: () => p
      });
      var n = r(78322),
        i = r(61575),
        o = r(61229),
        a = r(48774),
        s = r(49164),
        u = r(71281),
        c = r(94929),
        l = r(33583),
        f = r(56884);

      function h(e) {
        var t = Object.create(null),
          r = Object.create(null);
        return (0, s.E)(e) && e.forEach((function(e) {
          var n;
          t[e.message] = e, "string" == typeof(null === (n = e.extensions) || void 0 === n ? void 0 : n.code) && (r[e.extensions.code] = e)
        })), {
          persistedQueryNotSupported: !(!t.PersistedQueryNotSupported && !r.PERSISTED_QUERY_NOT_SUPPORTED),
          persistedQueryNotFound: !(!t.PersistedQueryNotFound && !r.PERSISTED_QUERY_NOT_FOUND)
        }
      }
      var d = {
          disable: function(e) {
            return e.meta.persistedQueryNotSupported
          },
          retry: function(e) {
            var t = e.meta;
            return t.persistedQueryNotSupported || t.persistedQueryNotFound
          },
          useGETForHashedQueries: !1
        },
        p = function(e) {
          var t;

          function r() {
            t = void 0
          }(0, i.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 43);
          var p = (0, u.o)(d, e),
            v = p.sha256,
            y = p.generateHash,
            m = void 0 === y ? function(e) {
              return Promise.resolve(v((0, o.y)(e)))
            } : y,
            b = p.disable,
            g = p.retry,
            w = p.useGETForHashedQueries,
            _ = !0,
            E = function(e) {
              return new Promise((function(t) {
                return t(m(e))
              }))
            };
          return Object.assign(new a.C((function(e, o) {
            (0, i.V1)(o, 44);
            var a = e.query;
            return new c.c((function(i) {
              var u, c, d = !1,
                p = !1,
                v = function(t, n) {
                  var i = t.response,
                    a = t.networkError;
                  if (!d && (i && i.errors || a)) {
                    d = !0;
                    var l = [],
                      f = i && i.errors;
                    (0, s.E)(f) && l.push.apply(l, f);
                    var v = void 0;
                    "string" != typeof(null == a ? void 0 : a.result) && (v = a && a.result && a.result.errors), (0, s.E)(v) && l.push.apply(l, v);
                    var m = {
                      response: i,
                      networkError: a,
                      operation: e,
                      graphQLErrors: (0, s.E)(l) ? l : void 0,
                      meta: h(l)
                    };
                    if ((_ = !b(m)) || r(), g(m)) return u && u.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: _
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), p && e.setContext({
                      fetchOptions: c
                    }), void(u = o(e).subscribe(y))
                  }
                  n()
                },
                y = {
                  next: function(e) {
                    v({
                      response: e
                    }, (function() {
                      return i.next(e)
                    }))
                  },
                  error: function(e) {
                    v({
                      networkError: e
                    }, (function() {
                      return i.error(e)
                    }))
                  },
                  complete: i.complete.bind(i)
                };
              return e.setContext({
                  http: {
                    includeQuery: !_,
                    includeExtensions: _
                  }
                }), w && _ && ! function(e) {
                  return e.query.definitions.some((function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  }))
                }(e) && (e.setContext((function(e) {
                  var t = e.fetchOptions,
                    r = void 0 === t ? {} : t;
                  return c = r, {
                    fetchOptions: (0, n.Cl)((0, n.Cl)({}, r), {
                      method: "GET"
                    })
                  }
                })), p = !0), _ ? function(e) {
                  if (!e || "object" != typeof e) return E(e);
                  t || (t = new l.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var r = t.get(e);
                  return r || t.set(e, r = E(e)), r
                }(a).then((function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, u = o(e).subscribe(y)
                })).catch(i.error.bind(i)) : u = o(e).subscribe(y),
                function() {
                  u && u.unsubscribe()
                }
            }))
          })), {
            resetHashCache: r
          }, !1 !== globalThis.__DEV__ ? {
            getMemoryInternals: function() {
              var e;
              return {
                PersistedQueryLink: {
                  persistedQueryHashes: null !== (e = null == t ? void 0 : t.size) && void 0 !== e ? e : 0
                }
              }
            }
          } : {})
        }
    },
    25659: (e, t, r) => {
      "use strict";
      r.d(t, {
        S: () => c
      });
      var n = r(16565),
        i = r(1397),
        o = r(76290),
        a = r(13002),
        s = r(36753),
        u = r(61575);

      function c(e, t, r) {
        return s.yV.withValue(!0, (function() {
          var n = l(e, t, r, !1);
          return Object.isFrozen(e) && (0, i.G)(n), n
        }))
      }

      function l(e, t, r, i, s) {
        var c, h = r.knownChanged,
          d = function(e, t) {
            if (t.has(e)) return t.get(e);
            var r = Array.isArray(e) ? [] : Object.create(null);
            return t.set(e, r), r
          }(e, r.mutableTargets);
        if (Array.isArray(e)) {
          for (var p = 0, v = Array.from(e.entries()); p < v.length; p++) {
            var y = v[p],
              m = y[0],
              b = y[1];
            if (null !== b) {
              var g = l(b, t, r, i, !1 !== globalThis.__DEV__ ? "".concat(s || "", "[").concat(m, "]") : void 0);
              h.has(g) && h.add(d), d[m] = g
            } else d[m] = null
          }
          return h.has(d) ? d : e
        }
        for (var w = 0, _ = t.selections; w < _.length; w++) {
          var E = _[w],
            O = void 0;
          if (i && h.add(d), E.kind === n.Kind.FIELD) {
            var S = (0, o.ue)(E),
              k = E.selectionSet;
            if (void 0 === (O = d[S] || e[S])) continue;
            k && null !== O && (g = l(e[S], k, r, i, !1 !== globalThis.__DEV__ ? "".concat(s || "", ".").concat(S) : void 0), h.has(g) && (O = g)), !1 === globalThis.__DEV__ && (d[S] = O), !1 !== globalThis.__DEV__ && (i && "__typename" !== S && !(null === (c = Object.getOwnPropertyDescriptor(d, S)) || void 0 === c ? void 0 : c.value) ? Object.defineProperty(d, S, f(S, O, s || "", r.operationName, r.operationType)) : (delete d[S], d[S] = O))
          }
          if (E.kind !== n.Kind.INLINE_FRAGMENT || E.typeCondition && !r.cache.fragmentMatches(E, e.__typename) || (O = l(e, E.selectionSet, r, i, s)), E.kind === n.Kind.FRAGMENT_SPREAD) {
            var C = E.name.value,
              T = r.fragmentMap[C] || (r.fragmentMap[C] = r.cache.lookupFragment(C));
            (0, u.V1)(T, 47, C);
            var D = (0, a.s7)(E);
            "mask" !== D && (O = l(e, T.selectionSet, r, "migrate" === D, s))
          }
          h.has(O) && h.add(d)
        }
        return "__typename" in e && !("__typename" in d) && (d.__typename = e.__typename), Object.keys(d).length !== Object.keys(e).length && h.add(d), h.has(d) ? d : e
      }

      function f(e, t, r, n, i) {
        var o = function() {
          return s.yV.getValue() || (!1 !== globalThis.__DEV__ && u.V1.warn(48, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), o = function() {
            return t
          }), t
        };
        return {
          get: function() {
            return o()
          },
          set: function(e) {
            o = function() {
              return e
            }
          },
          enumerable: !0,
          configurable: !0
        }
      }
    },
    54122: (e, t, r) => {
      "use strict";
      r.d(t, {
        z: () => l
      });
      var n = r(16565),
        i = r(36753),
        o = r(61575),
        a = r(47677),
        s = r(25659),
        u = r(57831),
        c = r(5008);

      function l(e, t, r, l) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, i.Ki)(), e;
        var f = t.definitions.filter((function(e) {
          return e.kind === n.Kind.FRAGMENT_DEFINITION
        }));
        void 0 === l && ((0, o.V1)(1 === f.length, 49, f.length), l = f[0].name.value);
        var h = f.find((function(e) {
          return e.name.value === l
        }));
        return (0, o.V1)(!!h, 50, l), null == e || (0, a.A)(e, {}) ? e : (0, s.S)(e, h.selectionSet, {
          operationType: "fragment",
          operationName: h.name.value,
          fragmentMap: (0, u.JG)((0, c.zK)(t)),
          cache: r,
          mutableTargets: new i.jq,
          knownChanged: new i.xm
        })
      }
    },
    36753: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ki: () => l,
        jq: () => a,
        xm: () => s,
        yV: () => u
      });
      var n = r(79767),
        i = r(61575),
        o = r(26979),
        a = o.et ? WeakMap : Map,
        s = o.En ? WeakSet : Set,
        u = new n.DX,
        c = !1;

      function l() {
        c || (c = !0, !1 !== globalThis.__DEV__ && i.V1.warn(52))
      }
    },
    15325: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        l: () => u
      });
      var i = r(11803),
        o = r(26979),
        a = r(61575),
        s = o.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function u() {
        (0, a.V1)("createContext" in (n || (n = r.t(i, 2))), 54);
        var e = i.createContext[s];
        return e || (Object.defineProperty(i.createContext, s, {
          value: e = i.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
    },
    41477: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => s
      });
      var n = r(78322),
        i = r(61575),
        o = r(11803),
        a = r(15325),
        s = function(e) {
          var t = e.client,
            r = e.children,
            s = (0, a.l)(),
            u = o.useContext(s),
            c = o.useMemo((function() {
              return (0, n.Cl)((0, n.Cl)({}, u), {
                client: t || u.client
              })
            }), [u, t]);
          return (0, i.V1)(c.client, 55), o.createElement(s.Provider, {
            value: c
          }, r)
        }
    },
    31477: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => i
      });
      var n = r(11803),
        i = r(26979).Sw ? n.useLayoutEffect : n.useEffect
    },
    64887: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => a
      });
      var n = r(61575),
        i = r(11803),
        o = r(15325);

      function a(e) {
        var t = i.useContext((0, o.l)()),
          r = e || t.client;
        return (0, n.V1)(!!r, 58), r
      }
    },
    70121: (e, t, r) => {
      "use strict";
      r.d(t, {
        _: () => c
      });
      var n = r(78322),
        i = r(11803),
        o = r(81176),
        a = r(4474),
        s = r(31477),
        u = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"];

      function c(e, t) {
        var r, c = i.useRef(void 0),
          l = i.useRef(void 0),
          f = i.useRef(void 0),
          h = (0, o.l)(t, c.current || {}),
          d = null !== (r = null == h ? void 0 : h.query) && void 0 !== r ? r : e;
        l.current = t, f.current = d;
        var p = (0, n.Cl)((0, n.Cl)({}, h), {
            skip: !c.current
          }),
          v = (0, a.SX)(d, p),
          y = v.obsQueryFields,
          m = v.result,
          b = v.client,
          g = v.resultData,
          w = v.observable,
          _ = v.onQueryExecuted,
          E = w.options.initialFetchPolicy || (0, a.kk)(p.defaultOptions, b.defaultOptions),
          O = i.useReducer((function(e) {
            return e + 1
          }), 0)[1],
          S = i.useMemo((function() {
            for (var e = {}, t = function(t) {
                var r = y[t];
                e[t] = function() {
                  return c.current || (c.current = Object.create(null), O()), r.apply(this, arguments)
                }
              }, r = 0, n = u; r < n.length; r++) t(n[r]);
            return e
          }), [O, y]),
          k = !!c.current,
          C = i.useMemo((function() {
            return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, m), S), {
              called: k
            })
          }), [m, S, k]),
          T = i.useCallback((function(e) {
            c.current = e ? (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: e.fetchPolicy || E
            }) : {
              fetchPolicy: E
            };
            var t = (0, o.l)(l.current, (0, n.Cl)({
                query: f.current
              }, c.current)),
              r = function(e, t, r, n, i, o) {
                var s = i.query || n,
                  u = (0, a.Er)(r, s, i, !1)(t),
                  c = t.reobserveAsConcast((0, a.t_)(t, r, i, u));
                return o(u), new Promise((function(n) {
                  var i;
                  c.subscribe({
                    next: function(e) {
                      i = e
                    },
                    error: function() {
                      n((0, a.$X)(t.getCurrentResult(), e.previousData, t, r))
                    },
                    complete: function() {
                      n((0, a.$X)(t.maskResult(i), e.previousData, t, r))
                    }
                  })
                }))
              }(g, w, b, d, (0, n.Cl)((0, n.Cl)({}, t), {
                skip: !1
              }), _).then((function(e) {
                return Object.assign(e, S)
              }));
            return r.catch((function() {})), r
          }), [b, d, S, E, w, g, _]),
          D = i.useRef(T);
        (0, s.E)((function() {
          D.current = T
        }));
        var x = i.useCallback((function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return D.current.apply(D, e)
        }), []);
        return [x, C]
      }
    },
    96164: (e, t, r) => {
      "use strict";
      r.d(t, {
        n: () => f
      });
      var n = r(78322),
        i = r(11803),
        o = r(81176),
        a = r(47677),
        s = r(78075),
        u = r(42179),
        c = r(64887),
        l = r(31477);

      function f(e, t) {
        var r = (0, c.m)(null == t ? void 0 : t.client);
        (0, s.D$)(e, s.KG.Mutation);
        var f = i.useState({
            called: !1,
            loading: !1,
            client: r
          }),
          h = f[0],
          d = f[1],
          p = i.useRef({
            result: h,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        (0, l.E)((function() {
          Object.assign(p.current, {
            client: r,
            options: t,
            mutation: e
          })
        }));
        var v = i.useCallback((function(e) {
            void 0 === e && (e = {});
            var t = p.current,
              r = t.options,
              i = t.mutation,
              s = (0, n.Cl)((0, n.Cl)({}, r), {
                mutation: i
              }),
              c = e.client || p.current.client;
            p.current.result.loading || s.ignoreResults || !p.current.isMounted || d(p.current.result = {
              loading: !0,
              error: void 0,
              data: void 0,
              called: !0,
              client: c
            });
            var l = ++p.current.mutationId,
              f = (0, o.l)(s, e);
            return c.mutate(f).then((function(t) {
              var r, n, i = t.data,
                o = t.errors,
                s = o && o.length > 0 ? new u.K4({
                  graphQLErrors: o
                }) : void 0,
                h = e.onError || (null === (r = p.current.options) || void 0 === r ? void 0 : r.onError);
              if (s && h && h(s, f), l === p.current.mutationId && !f.ignoreResults) {
                var v = {
                  called: !0,
                  loading: !1,
                  data: i,
                  error: s,
                  client: c
                };
                p.current.isMounted && !(0, a.L)(p.current.result, v) && d(p.current.result = v)
              }
              var y = e.onCompleted || (null === (n = p.current.options) || void 0 === n ? void 0 : n.onCompleted);
              return s || null == y || y(t.data, f), t
            })).catch((function(t) {
              var r;
              if (l === p.current.mutationId && p.current.isMounted) {
                var n = {
                  loading: !1,
                  error: t,
                  data: void 0,
                  called: !0,
                  client: c
                };
                (0, a.L)(p.current.result, n) || d(p.current.result = n)
              }
              var i = e.onError || (null === (r = p.current.options) || void 0 === r ? void 0 : r.onError);
              if (i) return i(t, f), {
                data: void 0,
                errors: t
              };
              throw t
            }))
          }), []),
          y = i.useCallback((function() {
            if (p.current.isMounted) {
              var e = {
                called: !1,
                loading: !1,
                client: p.current.client
              };
              Object.assign(p.current, {
                mutationId: 0,
                result: e
              }), d(e)
            }
          }), []);
        return i.useEffect((function() {
          var e = p.current;
          return e.isMounted = !0,
            function() {
              e.isMounted = !1
            }
        }), []), [v, (0, n.Cl)({
          reset: y
        }, h)]
      }
    },
    4474: (e, t, r) => {
      "use strict";
      r.d(t, {
        Er: () => S,
        kk: () => D,
        t_: () => k,
        $X: () => x,
        IT: () => _,
        SX: () => O
      });
      var n = r(78322),
        i = r(61575),
        o = r(11803),
        a = r(58418),
        s = r(47677),
        u = r(81176),
        c = r(15325),
        l = r(42179),
        f = r(62847),
        h = r(78075),
        d = r(64887),
        p = r(71281),
        v = r(49164),
        y = r(1397),
        m = Symbol.for("apollo.hook.wrappers"),
        b = Object.prototype.hasOwnProperty;

      function g() {}
      var w = Symbol();

      function _(e, t) {
        return void 0 === t && (t = Object.create(null)), ("useQuery", r = E, (o = (i = (n = (0, d.m)(t && t.client).queryManager) && n[m]) && i.useQuery) ? o(r) : r)(e, t);
        var r, n, i, o
      }

      function E(e, t) {
        var r = O(e, t),
          i = r.result,
          a = r.obsQueryFields;
        return o.useMemo((function() {
          return (0, n.Cl)((0, n.Cl)({}, i), a)
        }), [i, a])
      }

      function O(e, t) {
        var r = (0, d.m)(t.client),
          i = o.useContext((0, c.l)()).renderPromises,
          u = !!i,
          l = r.disableNetworkFetches,
          p = !1 !== t.ssr && !t.skip,
          v = t.partialRefetch,
          y = S(r, e, t, u),
          m = function(e, t, r, i, a) {
            function s(n) {
              var o;
              return (0, h.D$)(t, h.KG.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(a()) || e.watchQuery(k(void 0, e, r, a())),
                resultData: {
                  previousData: null === (o = null == n ? void 0 : n.resultData.current) || void 0 === o ? void 0 : o.data
                }
              }
            }
            var u = o.useState(s),
              c = u[0],
              l = u[1];

            function f(e) {
              var t, r;
              Object.assign(c.observable, ((t = {})[w] = e, t));
              var i = c.resultData;
              l((0, n.Cl)((0, n.Cl)({}, c), {
                query: e.query,
                resultData: Object.assign(i, {
                  previousData: (null === (r = i.current) || void 0 === r ? void 0 : r.data) || i.previousData,
                  current: void 0
                })
              }))
            }
            if (e !== c.client || t !== c.query) {
              var d = s(c);
              return l(d), [d, f]
            }
            return [c, f]
          }(r, e, t, i, y),
          _ = m[0],
          E = _.observable,
          O = _.resultData,
          D = m[1],
          A = y(E);
        ! function(e, t, r, n, i) {
          var o;
          t[w] && !(0, s.L)(t[w], i) && (t.reobserve(k(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[w] = i
        }(O, E, r, t, A);
        var j = o.useMemo((function() {
          return function(e) {
            return {
              refetch: e.refetch.bind(e),
              reobserve: e.reobserve.bind(e),
              fetchMore: e.fetchMore.bind(e),
              updateQuery: e.updateQuery.bind(e),
              startPolling: e.startPolling.bind(e),
              stopPolling: e.stopPolling.bind(e),
              subscribeToMore: e.subscribeToMore.bind(e)
            }
          }(E)
        }), [E]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(E, i, p);
        var P = function(e, t, r, n, i, u, c, l, h) {
          var d = o.useRef(h);
          o.useEffect((function() {
            d.current = h
          }));
          var p = !l && !u || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? M : void 0 : R,
            v = e.previousData,
            y = o.useMemo((function() {
              return p && x(p, v, t, r)
            }), [r, t, p, v]);
          return (0, a.r)(o.useCallback((function(n) {
            if (l) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && (0, s.L)(i.data, o.data) || C(o, e, t, r, c, n, d.current)
              },
              o = function(u) {
                if (a.current.unsubscribe(), a.current = t.resubscribeAfterError(i, o), !b.call(u, "graphQLErrors")) throw u;
                var l = e.current;
                (!l || l && l.loading || !(0, s.L)(u, l.error)) && C({
                  data: l && l.data,
                  error: u,
                  loading: !1,
                  networkStatus: f.pT.error
                }, e, t, r, c, n, d.current)
              },
              a = {
                current: t.subscribe(i, o)
              };
            return function() {
              setTimeout((function() {
                return a.current.unsubscribe()
              }))
            }
          }), [u, l, t, e, c, r]), (function() {
            return y || T(e, t, d.current, c, r)
          }), (function() {
            return y || T(e, t, d.current, c, r)
          }))
        }(O, E, r, t, A, l, v, u, {
          onCompleted: t.onCompleted || g,
          onError: t.onError || g
        });
        return {
          result: P,
          obsQueryFields: j,
          observable: E,
          resultData: O,
          client: r,
          onQueryExecuted: D
        }
      }

      function S(e, t, r, i) {
        void 0 === r && (r = {});
        var o = r.skip,
          a = (r.ssr, r.onCompleted, r.onError, r.defaultOptions),
          s = (0, n.Tt)(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        return function(r) {
          var n = Object.assign(s, {
            query: t
          });
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || D(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || D(a, e.defaultOptions)), n
        }
      }

      function k(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, p.o)(e && e.options, n)), i.reduce(u.l)
      }

      function C(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, v.E)(e.errors) && (e.error = new l.K4({
            graphQLErrors: e.errors
          })), t.current = x(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.Cl)((0, n.Cl)({}, e), {
              loading: !0,
              networkStatus: f.pT.refetch
            }))
          }(e, r, a), t.previousData, r, o), s(),
          function(e, t, r) {
            if (!e.loading) {
              var n = function(e) {
                return (0, v.E)(e.errors) ? new l.K4({
                  graphQLErrors: e.errors
                }) : e.error
              }(e);
              Promise.resolve().then((function() {
                n ? r.onError(n) : e.data && t !== e.networkStatus && e.networkStatus === f.pT.ready && r.onCompleted(e.data)
              })).catch((function(e) {
                !1 !== globalThis.__DEV__ && i.V1.warn(e)
              }))
            }
          }(e, null == c ? void 0 : c.networkStatus, u)
      }

      function T(e, t, r, n, i) {
        return e.current || C(t.getCurrentResult(), e, t, i, n, (function() {}), r), e.current
      }

      function D(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function x(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.Tt)(e, ["data", "partial"]));
        return (0, n.Cl)((0, n.Cl)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== R && e !== M,
          previousData: t
        })
      }
      var R = (0, y.G)({
          loading: !0,
          data: void 0,
          error: void 0,
          networkStatus: f.pT.loading
        }),
        M = (0, y.G)({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: f.pT.ready
        })
    },
    60175: (e, t, r) => {
      "use strict";
      r.d(t, {
        q: () => o
      });
      var n = r(11803),
        i = r(58418);

      function o(e) {
        return (0, i.r)(n.useCallback((function(t) {
          return e.onNextChange((function r() {
            t(), e.onNextChange(r)
          }))
        }), [e]), e, e)
      }
    },
    58418: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        r: () => u
      });
      var i = r(61575),
        o = r(11803),
        a = r(26979),
        s = !1,
        u = (n || (n = r.t(o, 2))).useSyncExternalStore || function(e, t, r) {
          var n = t();
          !1 === globalThis.__DEV__ || s || n === t() || (s = !0, !1 !== globalThis.__DEV__ && i.V1.error(68));
          var u = o.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            l = u[0].inst,
            f = u[1];
          return a.JR ? o.useLayoutEffect((function() {
            Object.assign(l, {
              value: n,
              getSnapshot: t
            }), c(l) && f({
              inst: l
            })
          }), [e, n, t]) : Object.assign(l, {
            value: n,
            getSnapshot: t
          }), o.useEffect((function() {
            return c(l) && f({
              inst: l
            }), e((function() {
              c(l) && f({
                inst: l
              })
            }))
          }), [e]), n
        };

      function c(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }
    },
    78075: (e, t, r) => {
      "use strict";
      r.d(t, {
        D$: () => f,
        KG: () => n
      });
      var n, i, o = r(61575),
        a = r(33583),
        s = r(56884),
        u = r(51859);

      function c(e) {
        var t;
        switch (e) {
          case n.Query:
            t = "Query";
            break;
          case n.Mutation:
            t = "Mutation";
            break;
          case n.Subscription:
            t = "Subscription"
        }
        return t
      }

      function l(e) {
        i || (i = new a.A(s.v.parser || 1e3));
        var t, r, u = i.get(e);
        if (u) return u;
        (0, o.V1)(!!e && !!e.kind, 70, e);
        for (var c = [], l = [], f = [], h = [], d = 0, p = e.definitions; d < p.length; d++) {
          var v = p[d];
          if ("FragmentDefinition" !== v.kind) {
            if ("OperationDefinition" === v.kind) switch (v.operation) {
              case "query":
                l.push(v);
                break;
              case "mutation":
                f.push(v);
                break;
              case "subscription":
                h.push(v)
            }
          } else c.push(v)
        }(0, o.V1)(!c.length || l.length || f.length || h.length, 71), (0, o.V1)(l.length + f.length + h.length <= 1, 72, e, l.length, h.length, f.length), r = l.length ? n.Query : n.Mutation, l.length || f.length || (r = n.Subscription);
        var y = l.length ? l : f.length ? f : h;
        (0, o.V1)(1 === y.length, 73, e, y.length);
        var m = y[0];
        t = m.variableDefinitions || [];
        var b = {
          name: m.name && "Name" === m.name.kind ? m.name.value : "data",
          type: r,
          variables: t
        };
        return i.set(e, b), b
      }

      function f(e, t) {
        var r = l(e),
          n = c(t),
          i = c(r.type);
        (0, o.V1)(r.type === t, 74, n, n, i)
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(n || (n = {})), l.resetCache = function() {
        i = void 0
      }, !1 !== globalThis.__DEV__ && (0, u.D_)("parser", (function() {
        return i ? i.size : 0
      }))
    },
    33583: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s,
        V: () => u
      });
      var n = r(48632),
        i = r(74175),
        o = new WeakSet;

      function a(e) {
        e.size <= (e.max || -1) || o.has(e) || (o.add(e), setTimeout((function() {
          e.clean(), o.delete(e)
        }), 100))
      }
      var s = function(e, t) {
          var r = new n.l(e, t);
          return r.set = function(e, t) {
            var r = n.l.prototype.set.call(this, e, t);
            return a(this), r
          }, r
        },
        u = function(e, t) {
          var r = new i.C(e, t);
          return r.set = function(e, t) {
            var r = i.C.prototype.set.call(this, e, t);
            return a(this), r
          }, r
        }
    },
    51859: (e, t, r) => {
      "use strict";
      r.d(t, {
        D_: () => a,
        cM: () => u,
        ep: () => s,
        tQ: () => c
      });
      var n = r(78322),
        i = r(56884),
        o = {};

      function a(e, t) {
        o[e] = t
      }
      var s = !1 !== globalThis.__DEV__ ? function() {
          var e, t, r, a, s;
          if (!1 === globalThis.__DEV__) throw new Error("only supported in development mode");
          return {
            limits: Object.fromEntries(Object.entries({
              parser: 1e3,
              canonicalStringify: 1e3,
              print: 2e3,
              "documentTransform.cache": 2e3,
              "queryManager.getDocumentInfo": 2e3,
              "PersistedQueryLink.persistedQueryHashes": 2e3,
              "fragmentRegistry.transform": 2e3,
              "fragmentRegistry.lookup": 1e3,
              "fragmentRegistry.findFragmentSpreads": 4e3,
              "cache.fragmentQueryDocuments": 1e3,
              "removeTypenameFromVariables.getVariableDefinitions": 2e3,
              "inMemoryCache.maybeBroadcastWatch": 5e3,
              "inMemoryCache.executeSelectionSet": 5e4,
              "inMemoryCache.executeSubSelectedArray": 1e4
            }).map((function(e) {
              var t = e[0],
                r = e[1];
              return [t, i.v[t] || r]
            }))),
            sizes: (0, n.Cl)({
              print: null === (e = o.print) || void 0 === e ? void 0 : e.call(o),
              parser: null === (t = o.parser) || void 0 === t ? void 0 : t.call(o),
              canonicalStringify: null === (r = o.canonicalStringify) || void 0 === r ? void 0 : r.call(o),
              links: v(this.link),
              queryManager: {
                getDocumentInfo: this.queryManager.transformCache.size,
                documentTransforms: d(this.queryManager.documentTransform)
              }
            }, null === (s = (a = this.cache).getMemoryInternals) || void 0 === s ? void 0 : s.call(a))
          }
        } : void 0,
        u = !1 !== globalThis.__DEV__ ? function() {
          var e = this.config.fragments;
          return (0, n.Cl)((0, n.Cl)({}, l.apply(this)), {
            addTypenameDocumentTransform: d(this.addTypenameTransform),
            inMemoryCache: {
              executeSelectionSet: f(this.storeReader.executeSelectionSet),
              executeSubSelectedArray: f(this.storeReader.executeSubSelectedArray),
              maybeBroadcastWatch: f(this.maybeBroadcastWatch)
            },
            fragmentRegistry: {
              findFragmentSpreads: f(null == e ? void 0 : e.findFragmentSpreads),
              lookup: f(null == e ? void 0 : e.lookup),
              transform: f(null == e ? void 0 : e.transform)
            }
          })
        } : void 0,
        c = !1 !== globalThis.__DEV__ ? l : void 0;

      function l() {
        return {
          cache: {
            fragmentQueryDocuments: f(this.getFragmentDoc)
          }
        }
      }

      function f(e) {
        return function(e) {
          return !!e && "dirtyKey" in e
        }(e) ? e.size : void 0
      }

      function h(e) {
        return null != e
      }

      function d(e) {
        return p(e).map((function(e) {
          return {
            cache: e
          }
        }))
      }

      function p(e) {
        return e ? (0, n.fX)((0, n.fX)([f(null == e ? void 0 : e.performWork)], p(null == e ? void 0 : e.left), !0), p(null == e ? void 0 : e.right), !0).filter(h) : []
      }

      function v(e) {
        var t;
        return e ? (0, n.fX)((0, n.fX)([null === (t = null == e ? void 0 : e.getMemoryInternals) || void 0 === t ? void 0 : t.call(e)], v(null == e ? void 0 : e.left), !0), v(null == e ? void 0 : e.right), !0).filter(h) : []
      }
    },
    56884: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => a
      });
      var n = r(78322),
        i = r(61575),
        o = Symbol.for("apollo.cacheSize"),
        a = (0, n.Cl)({}, i.Sf[o])
    },
    49164: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => i,
        c: () => n
      });
      var n = Array.isArray;

      function i(e) {
        return Array.isArray(e) && e.length > 0
      }
    },
    26979: (e, t, r) => {
      "use strict";
      r.d(t, {
        En: () => a,
        JR: () => f,
        Sw: () => c,
        et: () => o,
        ol: () => s,
        uJ: () => u
      });
      var n = r(61575),
        i = "ReactNative" == (0, n.no)((function() {
          return navigator.product
        })),
        o = "function" == typeof WeakMap && !(i && !global.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        u = s && Symbol.asyncIterator,
        c = "function" == typeof(0, n.no)((function() {
          return window.document.createElement
        })),
        l = (0, n.no)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        f = (c || i) && !l
    },
    46389: (e, t, r) => {
      "use strict";
      r.d(t, {
        M: () => s
      });
      var n, i = r(33583),
        o = r(56884),
        a = r(51859),
        s = Object.assign((function(e) {
          return JSON.stringify(e, u)
        }), {
          reset: function() {
            n = new i.V(o.v.canonicalStringify || 1e3)
          }
        });

      function u(e, t) {
        if (t && "object" == typeof t) {
          var r = Object.getPrototypeOf(t);
          if (r === Object.prototype || null === r) {
            var i = Object.keys(t);
            if (i.every(c)) return t;
            var o = JSON.stringify(i),
              a = n.get(o);
            if (!a) {
              i.sort();
              var s = JSON.stringify(i);
              a = n.get(s) || i, n.set(o, a), n.set(s, a)
            }
            var u = Object.create(r);
            return a.forEach((function(e) {
              u[e] = t[e]
            })), u
          }
        }
        return t
      }

      function c(e, t, r) {
        return 0 === t || r[t - 1] <= e
      }!1 !== globalThis.__DEV__ && (0, a.D_)("canonicalStringify", (function() {
        return n.size
      })), s.reset()
    },
    15487: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => i
      });
      var n = Object.prototype.toString;

      function i(e) {
        return o(e)
      }

      function o(e, t) {
        switch (n.call(e)) {
          case "[object Array]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var r = e.slice(0);
            return t.set(e, r), r.forEach((function(e, n) {
              r[n] = o(e, t)
            })), r;
          case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var i = Object.create(Object.getPrototypeOf(e));
            return t.set(e, i), Object.keys(e).forEach((function(r) {
              i[r] = o(e[r], t)
            })), i;
          default:
            return e
        }
      }
    },
    71281: (e, t, r) => {
      "use strict";

      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = Object.create(null);
        return e.forEach((function(e) {
          e && Object.keys(e).forEach((function(t) {
            var n = e[t];
            void 0 !== n && (r[t] = n)
          }))
        })), r
      }
      r.d(t, {
        o: () => n
      })
    },
    16333: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nw: () => u,
        ST: () => a,
        YX: () => s,
        bd: () => c
      });
      var n = r(41136),
        i = r(49164),
        o = r(98098);

      function a(e) {
        return "incremental" in e
      }

      function s(e) {
        return a(e) || function(e) {
          return "hasNext" in e && "data" in e
        }(e)
      }

      function u(e) {
        return (0, n.U)(e) && "payload" in e
      }

      function c(e, t) {
        var r = e,
          n = new o.ZI;
        return a(t) && (0, i.E)(t.incremental) && t.incremental.forEach((function(e) {
          for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
            var a = i[o],
              s = isNaN(+a) ? {} : [];
            s[a] = t, t = s
          }
          r = n.merge(r, t)
        })), r
      }
    },
    75874: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => i
      });
      var n = new Map;

      function i(e) {
        var t = n.get(e) || 1;
        return n.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
      }
    },
    1397: (e, t, r) => {
      "use strict";
      r.d(t, {
        G: () => i
      });
      var n = r(41136);

      function i(e) {
        return !1 !== globalThis.__DEV__ && (t = e, (r = new Set([t])).forEach((function(e) {
          (0, n.U)(e) && function(e) {
            if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e)) try {
              Object.freeze(e)
            } catch (e) {
              if (e instanceof TypeError) return null;
              throw e
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach((function(t) {
            (0, n.U)(e[t]) && r.add(e[t])
          }))
        }))), e;
        var t, r
      }
    },
    98098: (e, t, r) => {
      "use strict";
      r.d(t, {
        D9: () => a,
        IM: () => s,
        ZI: () => c
      });
      var n = r(78322),
        i = r(41136),
        o = Object.prototype.hasOwnProperty;

      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s(e)
      }

      function s(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var n = new c, i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t
      }
      var u = function(e, t, r) {
          return this.merge(e[r], t[r])
        },
        c = function() {
          function e(e) {
            void 0 === e && (e = u), this.reconciler = e, this.isObject = i.U, this.pastCopies = new Set
          }
          return e.prototype.merge = function(e, t) {
            for (var r = this, a = [], s = 2; s < arguments.length; s++) a[s - 2] = arguments[s];
            return (0, i.U)(t) && (0, i.U)(e) ? (Object.keys(t).forEach((function(i) {
              if (o.call(e, i)) {
                var s = e[i];
                if (t[i] !== s) {
                  var u = r.reconciler.apply(r, (0, n.fX)([e, t, i], a, !1));
                  u !== s && ((e = r.shallowCopyForMerge(e))[i] = u)
                }
              } else(e = r.shallowCopyForMerge(e))[i] = t[i]
            })), e) : t
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, i.U)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, n.Cl)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }()
    },
    81176: (e, t, r) => {
      "use strict";
      r.d(t, {
        l: () => o
      });
      var n = r(78322),
        i = r(71281);

      function o(e, t) {
        return (0, i.o)(e, t, t.variables && {
          variables: (0, i.o)((0, n.Cl)((0, n.Cl)({}, e && e.variables), t.variables))
        })
      }
    },
    41136: (e, t, r) => {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e
      }
      r.d(t, {
        U: () => n
      })
    },
    55994: (e, t, r) => {
      "use strict";
      r.d(t, {
        p: () => i
      });
      var n = r(75874);

      function i(e, t) {
        void 0 === t && (t = 0);
        var r = (0, n.v)("stringifyForDisplay");
        return JSON.stringify(e, (function(e, t) {
          return void 0 === t ? r : t
        }), t).split(JSON.stringify(r)).join("<undefined>")
      }
    },
    61575: (e, t, r) => {
      "use strict";
      r.d(t, {
        Sf: () => v,
        V1: () => b,
        no: () => p,
        vA: () => g
      });
      var n = r(78322),
        i = "Invariant Violation",
        o = Object.setPrototypeOf,
        a = void 0 === o ? function(e, t) {
          return e.__proto__ = t, e
        } : o,
        s = function(e) {
          function t(r) {
            void 0 === r && (r = i);
            var n = e.call(this, "number" == typeof r ? i + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
            return n.framesToPop = 1, n.name = i, a(n, t.prototype), n
          }
          return (0, n.C6)(t, e), t
        }(Error);

      function u(e, t) {
        if (!e) throw new s(t)
      }
      var c, l = ["debug", "log", "warn", "error", "silent"],
        f = l.indexOf("log");

      function h(e) {
        return function() {
          if (l.indexOf(e) >= f) return (console[e] || console.log).apply(console, arguments)
        }
      }(c = u || (u = {})).debug = h("debug"), c.log = h("log"), c.warn = h("warn"), c.error = h("error");
      var d = r(48507);

      function p(e) {
        try {
          return e()
        } catch (e) {}
      }
      const v = p((function() {
        return globalThis
      })) || p((function() {
        return window
      })) || p((function() {
        return self
      })) || p((function() {
        return global
      })) || p((function() {
        return p.constructor("return this")()
      }));
      var y = r(55994);

      function m(e) {
        return function(t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = E(i)) || (t = O(i, r), r = [])
          }
          e.apply(void 0, [t].concat(r))
        }
      }
      var b = Object.assign((function(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        e || u(e, E(t, r) || O(t, r))
      }), {
        debug: m(u.debug),
        log: m(u.log),
        warn: m(u.warn),
        error: m(u.error)
      });

      function g(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return new s(E(e, t) || O(e, t))
      }
      var w = Symbol.for("ApolloErrorMessageHandler_" + d.r);

      function _(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, y.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function E(e, t) {
        if (void 0 === t && (t = []), e) return v[w] && v[w](e, t.map(_))
      }

      function O(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: d.r,
          message: e,
          args: t.map(_)
        })))
      }
      globalThis.__DEV__
    },
    65009: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => f
      });
      var n = r(9325),
        i = r(26979),
        o = r(5008),
        a = r(61575),
        s = r(48632),
        u = r(79767),
        c = r(56884);

      function l(e) {
        return e
      }
      var f = function() {
        function e(e, t) {
          void 0 === t && (t = Object.create(null)), this.resultCache = i.En ? new WeakSet : new Set, this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = !1 !== t.cache, this.resetCache()
        }
        return e.prototype.getCacheKey = function(e) {
          return [e]
        }, e.identity = function() {
          return new e(l, {
            cache: !1
          })
        }, e.split = function(t, r, n) {
          return void 0 === n && (n = e.identity()), Object.assign(new e((function(e) {
            return (t(e) ? r : n).transformDocument(e)
          }), {
            cache: !1
          }), {
            left: r,
            right: n
          })
        }, e.prototype.resetCache = function() {
          var t = this;
          if (this.cached) {
            var r = new n.b(i.et);
            this.performWork = (0, u.LV)(e.prototype.performWork.bind(this), {
              makeCacheKey: function(e) {
                var n = t.getCacheKey(e);
                if (n) return (0, a.V1)(Array.isArray(n), 77), r.lookupArray(n)
              },
              max: c.v["documentTransform.cache"],
              cache: s.l
            })
          }
        }, e.prototype.performWork = function(e) {
          return (0, o.sw)(e), this.transform(e)
        }, e.prototype.transformDocument = function(e) {
          if (this.resultCache.has(e)) return e;
          var t = this.performWork(e);
          return this.resultCache.add(t), t
        }, e.prototype.concat = function(t) {
          var r = this;
          return Object.assign(new e((function(e) {
            return t.transformDocument(r.transformDocument(e))
          }), {
            cache: !1
          }), {
            left: this,
            right: t
          })
        }, e
      }()
    },
    13002: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => o,
        d8: () => a,
        f2: () => s,
        s7: () => u
      });
      var n = r(61575),
        i = r(16565);

      function o(e, t) {
        var r = e.directives;
        return !r || !r.length || function(e) {
          var t = [];
          return e && e.length && e.forEach((function(e) {
            if (function(e) {
                var t = e.name.value;
                return "skip" === t || "include" === t
              }(e)) {
              var r = e.arguments,
                i = e.name.value;
              (0, n.V1)(r && 1 === r.length, 79, i);
              var o = r[0];
              (0, n.V1)(o.name && "if" === o.name.value, 80, i);
              var a = o.value;
              (0, n.V1)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 81, i), t.push({
                directive: e,
                ifArgument: o
              })
            }
          })), t
        }(r).every((function(e) {
          var r = e.directive,
            i = e.ifArgument,
            o = !1;
          return "Variable" === i.value.kind ? (o = t && t[i.value.name.value], (0, n.V1)(void 0 !== o, 78, r.name.value)) : o = i.value.value, "skip" === r.name.value ? !o : o
        }))
      }

      function a(e, t, r) {
        var n = new Set(e),
          o = n.size;
        return (0, i.visit)(t, {
          Directive: function(e) {
            if (n.delete(e.name.value) && (!r || !n.size)) return i.BREAK
          }
        }), r ? !n.size : n.size < o
      }

      function s(e) {
        return e && a(["client", "export"], e, !0)
      }

      function u(e) {
        var t, r, o = null === (t = e.directives) || void 0 === t ? void 0 : t.find((function(e) {
          return "unmask" === e.name.value
        }));
        if (!o) return "mask";
        var a = null === (r = o.arguments) || void 0 === r ? void 0 : r.find((function(e) {
          return "mode" === e.name.value
        }));
        return !1 !== globalThis.__DEV__ && a && (a.value.kind === i.Kind.VARIABLE ? !1 !== globalThis.__DEV__ && n.V1.warn(82) : a.value.kind !== i.Kind.STRING ? !1 !== globalThis.__DEV__ && n.V1.warn(83) : "migrate" !== a.value.value && !1 !== globalThis.__DEV__ && n.V1.warn(84, a.value.value)), a && "value" in a.value && "migrate" === a.value.value ? "migrate" : "unmask"
      }
    },
    57831: (e, t, r) => {
      "use strict";
      r.d(t, {
        HQ: () => u,
        JG: () => s,
        ct: () => a,
        s6: () => c
      });
      var n = r(78322),
        i = r(61575),
        o = r(16565);

      function a(e, t) {
        var r = t,
          o = [];
        return e.definitions.forEach((function(e) {
          if ("OperationDefinition" === e.kind) throw (0, i.vA)(85, e.operation, e.name ? " named '".concat(e.name.value, "'") : "");
          "FragmentDefinition" === e.kind && o.push(e)
        })), void 0 === r && ((0, i.V1)(1 === o.length, 86, o.length), r = o[0].name.value), (0, n.Cl)((0, n.Cl)({}, e), {
          definitions: (0, n.fX)([{
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "FragmentSpread",
                name: {
                  kind: "Name",
                  value: r
                }
              }]
            }
          }], e.definitions, !0)
        })
      }

      function s(e) {
        void 0 === e && (e = []);
        var t = {};
        return e.forEach((function(e) {
          t[e.name.value] = e
        })), t
      }

      function u(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var r = e.name.value;
            if ("function" == typeof t) return t(r);
            var n = t && t[r];
            return (0, i.V1)(n, 87, r), n || null;
          default:
            return null
        }
      }

      function c(e) {
        var t = !0;
        return (0, o.visit)(e, {
          FragmentSpread: function(e) {
            if (!(t = !!e.directives && e.directives.some((function(e) {
                return "unmask" === e.name.value
              })))) return o.BREAK
          }
        }), t
      }
    },
    5008: (e, t, r) => {
      "use strict";
      r.d(t, {
        AT: () => c,
        E4: () => l,
        Vn: () => f,
        Vu: () => a,
        n4: () => s,
        sw: () => o,
        wY: () => h,
        zK: () => u
      });
      var n = r(61575),
        i = r(76290);

      function o(e) {
        (0, n.V1)(e && "Document" === e.kind, 88);
        var t = e.definitions.filter((function(e) {
          return "FragmentDefinition" !== e.kind
        })).map((function(e) {
          if ("OperationDefinition" !== e.kind) throw (0, n.vA)(89, e.kind);
          return e
        }));
        return (0, n.V1)(t.length <= 1, 90, t.length), e
      }

      function a(e) {
        return o(e), e.definitions.filter((function(e) {
          return "OperationDefinition" === e.kind
        }))[0]
      }

      function s(e) {
        return e.definitions.filter((function(e) {
          return "OperationDefinition" === e.kind && !!e.name
        })).map((function(e) {
          return e.name.value
        }))[0] || null
      }

      function u(e) {
        return e.definitions.filter((function(e) {
          return "FragmentDefinition" === e.kind
        }))
      }

      function c(e) {
        var t = a(e);
        return (0, n.V1)(t && "query" === t.operation, 91), t
      }

      function l(e) {
        (0, n.V1)("Document" === e.kind, 92), (0, n.V1)(e.definitions.length <= 1, 93);
        var t = e.definitions[0];
        return (0, n.V1)("FragmentDefinition" === t.kind, 94), t
      }

      function f(e) {
        var t;
        o(e);
        for (var r = 0, i = e.definitions; r < i.length; r++) {
          var a = i[r];
          if ("OperationDefinition" === a.kind) {
            var s = a.operation;
            if ("query" === s || "mutation" === s || "subscription" === s) return a
          }
          "FragmentDefinition" !== a.kind || t || (t = a)
        }
        if (t) return t;
        throw (0, n.vA)(95)
      }

      function h(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return r && r.length && r.forEach((function(e) {
          e.defaultValue && (0, i.J)(t, e.variable.name, e.defaultValue)
        })), t
      }
    },
    61229: (e, t, r) => {
      "use strict";
      r.d(t, {
        y: () => u
      });
      var n, i = r(16565),
        o = r(33583),
        a = r(56884),
        s = r(51859),
        u = Object.assign((function(e) {
          var t = n.get(e);
          return t || (t = (0, i.print)(e), n.set(e, t)), t
        }), {
          reset: function() {
            n = new o.A(a.v.print || 2e3)
          }
        });
      u.reset(), !1 !== globalThis.__DEV__ && (0, s.D_)("print", (function() {
        return n ? n.size : 0
      }))
    },
    76290: (e, t, r) => {
      "use strict";
      r.d(t, {
        A_: () => u,
        D$: () => m,
        Ii: () => f,
        J: () => l,
        Kc: () => c,
        MB: () => v,
        WU: () => s,
        dt: () => b,
        kd: () => g,
        o5: () => p,
        ue: () => y
      });
      var n = r(61575),
        i = r(41136),
        o = r(57831),
        a = r(46389);

      function s(e) {
        return {
          __ref: String(e)
        }
      }

      function u(e) {
        return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
      }

      function c(e) {
        return (0, i.U)(e) && "Document" === e.kind && Array.isArray(e.definitions)
      }

      function l(e, t, r, i) {
        if (function(e) {
            return "IntValue" === e.kind
          }(r) || function(e) {
            return "FloatValue" === e.kind
          }(r)) e[t.value] = Number(r.value);
        else if (function(e) {
            return "BooleanValue" === e.kind
          }(r) || function(e) {
            return "StringValue" === e.kind
          }(r)) e[t.value] = r.value;
        else if (function(e) {
            return "ObjectValue" === e.kind
          }(r)) {
          var o = {};
          r.fields.map((function(e) {
            return l(o, e.name, e.value, i)
          })), e[t.value] = o
        } else if (function(e) {
            return "Variable" === e.kind
          }(r)) {
          var a = (i || {})[r.name.value];
          e[t.value] = a
        } else if (function(e) {
            return "ListValue" === e.kind
          }(r)) e[t.value] = r.values.map((function(e) {
          var r = {};
          return l(r, t, e, i), r[t.value]
        }));
        else if (function(e) {
            return "EnumValue" === e.kind
          }(r)) e[t.value] = r.value;
        else {
          if (! function(e) {
              return "NullValue" === e.kind
            }(r)) throw (0, n.vA)(96, t.value, r.kind);
          e[t.value] = null
        }
      }

      function f(e, t) {
        var r = null;
        e.directives && (r = {}, e.directives.forEach((function(e) {
          r[e.name.value] = {}, e.arguments && e.arguments.forEach((function(n) {
            var i = n.name,
              o = n.value;
            return l(r[e.name.value], i, o, t)
          }))
        })));
        var n = null;
        return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach((function(e) {
          var r = e.name,
            i = e.value;
          return l(n, r, i, t)
        }))), p(e.name.value, n, r)
      }
      var h = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"],
        d = a.M,
        p = Object.assign((function(e, t, r) {
          if (t && r && r.connection && r.connection.key) {
            if (r.connection.filter && r.connection.filter.length > 0) {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return n.forEach((function(e) {
                i[e] = t[e]
              })), "".concat(r.connection.key, "(").concat(d(i), ")")
            }
            return r.connection.key
          }
          var o = e;
          if (t) {
            var a = d(t);
            o += "(".concat(a, ")")
          }
          return r && Object.keys(r).forEach((function(e) {
            -1 === h.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(d(r[e]), ")") : o += "@".concat(e))
          })), o
        }), {
          setStringify: function(e) {
            var t = d;
            return d = e, t
          }
        });

      function v(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return e.arguments.forEach((function(e) {
            var n = e.name,
              i = e.value;
            return l(r, n, i, t)
          })), r
        }
        return null
      }

      function y(e) {
        return e.alias ? e.alias.value : e.name.value
      }

      function m(e, t, r) {
        for (var n, i = 0, a = t.selections; i < a.length; i++)
          if (b(c = a[i])) {
            if ("__typename" === c.name.value) return e[y(c)]
          } else n ? n.push(c) : n = [c];
        if ("string" == typeof e.__typename) return e.__typename;
        if (n)
          for (var s = 0, u = n; s < u.length; s++) {
            var c = u[s],
              l = m(e, (0, o.HQ)(c, r).selectionSet, r);
            if ("string" == typeof l) return l
          }
      }

      function b(e) {
        return "Field" === e.kind
      }

      function g(e) {
        return "InlineFragment" === e.kind
      }
    },
    15734: (e, t, r) => {
      "use strict";
      r.d(t, {
        XY: () => v,
        er: () => m,
        iz: () => p,
        x3: () => b,
        zc: () => y
      });
      var n = r(78322),
        i = r(61575),
        o = r(16565),
        a = r(5008),
        s = r(76290),
        u = r(57831),
        c = r(49164),
        l = {
          kind: o.Kind.FIELD,
          name: {
            kind: o.Kind.NAME,
            value: "__typename"
          }
        };

      function f(e, t) {
        return !e || e.selectionSet.selections.every((function(e) {
          return e.kind === o.Kind.FRAGMENT_SPREAD && f(t[e.name.value], t)
        }))
      }

      function h(e) {
        return f((0, a.Vu)(e) || (0, a.E4)(e), (0, u.JG)((0, a.zK)(e))) ? null : e
      }

      function d(e) {
        var t = new Map;
        return function(r) {
          void 0 === r && (r = e);
          var n = t.get(r);
          return n || t.set(r, n = {
            variables: new Set,
            fragmentSpreads: new Set
          }), n
        }
      }

      function p(e, t) {
        (0, a.sw)(t);
        for (var r = d(""), s = d(""), u = function(e) {
            for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
              if (!(0, c.c)(n)) {
                if (n.kind === o.Kind.OPERATION_DEFINITION) return r(n.name && n.name.value);
                if (n.kind === o.Kind.FRAGMENT_DEFINITION) return s(n.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(97), null
          }, l = 0, f = t.definitions.length - 1; f >= 0; --f) t.definitions[f].kind === o.Kind.OPERATION_DEFINITION && ++l;
        var p, v, y, m = (p = e, v = new Map, y = new Map, p.forEach((function(e) {
            e && (e.name ? v.set(e.name, e) : e.test && y.set(e.test, e))
          })), function(e) {
            var t = v.get(e.name.value);
            return !t && y.size && y.forEach((function(r, n) {
              n(e) && (t = r)
            })), t
          }),
          b = function(e) {
            return (0, c.E)(e) && e.map(m).some((function(e) {
              return e && e.remove
            }))
          },
          g = new Map,
          w = !1,
          _ = {
            enter: function(e) {
              if (b(e.directives)) return w = !0, null
            }
          },
          E = (0, o.visit)(t, {
            Field: _,
            InlineFragment: _,
            VariableDefinition: {
              enter: function() {
                return !1
              }
            },
            Variable: {
              enter: function(e, t, r, n, i) {
                var o = u(i);
                o && o.variables.add(e.name.value)
              }
            },
            FragmentSpread: {
              enter: function(e, t, r, n, i) {
                if (b(e.directives)) return w = !0, null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                g.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === g.get(JSON.stringify(n)) ? e : l > 0 && e.selectionSet.selections.every((function(e) {
                  return e.kind === o.Kind.FIELD && "__typename" === e.name.value
                })) ? (s(e.name.value).removed = !0, w = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (m(e)) return w = !0, null
              }
            }
          });
        if (!w) return t;
        var O = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach((function(t) {
              O(s(t)).transitiveVars.forEach((function(t) {
                e.transitiveVars.add(t)
              }))
            }))), e
          },
          S = new Set;
        E.definitions.forEach((function(e) {
          e.kind === o.Kind.OPERATION_DEFINITION ? O(r(e.name && e.name.value)).fragmentSpreads.forEach((function(e) {
            S.add(e)
          })) : e.kind !== o.Kind.FRAGMENT_DEFINITION || 0 !== l || s(e.name.value).removed || S.add(e.name.value)
        })), S.forEach((function(e) {
          O(s(e)).fragmentSpreads.forEach((function(e) {
            S.add(e)
          }))
        }));
        var k = {
          enter: function(e) {
            if (t = e.name.value, !S.has(t) || s(t).removed) return null;
            var t
          }
        };
        return h((0, o.visit)(E, {
          FragmentSpread: k,
          FragmentDefinition: k,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var t = O(r(e.name && e.name.value)).transitiveVars;
                if (t.size < e.variableDefinitions.length) return (0, n.Cl)((0, n.Cl)({}, e), {
                  variableDefinitions: e.variableDefinitions.filter((function(e) {
                    return t.has(e.variable.name.value)
                  }))
                })
              }
            }
          }
        }))
      }
      var v = Object.assign((function(e) {
        return (0, o.visit)(e, {
          SelectionSet: {
            enter: function(e, t, r) {
              if (!r || r.kind !== o.Kind.OPERATION_DEFINITION) {
                var i = e.selections;
                if (i && !i.some((function(e) {
                    return (0, s.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  }))) {
                  var a = r;
                  if (!((0, s.dt)(a) && a.directives && a.directives.some((function(e) {
                      return "export" === e.name.value
                    })))) return (0, n.Cl)((0, n.Cl)({}, e), {
                    selections: (0, n.fX)((0, n.fX)([], i, !0), [l], !1)
                  })
                }
              }
            }
          }
        })
      }), {
        added: function(e) {
          return e === l
        }
      });

      function y(e) {
        return "query" === (0, a.Vn)(e).operation ? e : (0, o.visit)(e, {
          OperationDefinition: {
            enter: function(e) {
              return (0, n.Cl)((0, n.Cl)({}, e), {
                operation: "query"
              })
            }
          }
        })
      }

      function m(e) {
        return (0, a.sw)(e), p([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }

      function b(e) {
        return (0, a.sw)(e), (0, o.visit)(e, {
          FragmentSpread: function(e) {
            var t;
            if (!(null === (t = e.directives) || void 0 === t ? void 0 : t.some((function(e) {
                return "unmask" === e.name.value
              })))) return (0, n.Cl)((0, n.Cl)({}, e), {
              directives: (0, n.fX)((0, n.fX)([], e.directives || [], !0), [{
                kind: o.Kind.DIRECTIVE,
                name: {
                  kind: o.Kind.NAME,
                  value: "nonreactive"
                }
              }], !1)
            })
          }
        })
      }
    },
    48507: (e, t, r) => {
      "use strict";
      r.d(t, {
        r: () => n
      });
      var n = "3.12.4"
    },
    74175: (e, t, r) => {
      "use strict";

      function n() {}
      r.d(t, {
        C: () => i
      });
      class i {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
          this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        get size() {
          return this.map.size
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: r
            } = t;
            r && (r.older = e), e && (e.newer = r), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = r)
          }
          return t
        }
        set(e, t) {
          let r = this.getNode(e);
          return r ? r.value = t : (r = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value)
        }
        clean() {
          for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
        }
      }
    },
    48632: (e, t, r) => {
      "use strict";

      function n() {}
      r.d(t, {
        l: () => u
      });
      const i = n,
        o = "undefined" != typeof WeakRef ? WeakRef : function(e) {
          return {
            deref: () => e
          }
        },
        a = "undefined" != typeof WeakMap ? WeakMap : Map,
        s = "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : function() {
          return {
            register: n,
            unregister: n
          }
        };
      class u {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
          this.max = e, this.dispose = t, this.map = new a, this.newest = null, this.oldest = null, this.unfinalizedNodes = new Set, this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
            const e = this.unfinalizedNodes.values();
            for (let t = 0; t < 10024; t++) {
              const t = e.next().value;
              if (!t) break;
              this.unfinalizedNodes.delete(t);
              const r = t.key;
              delete t.key, t.keyRef = new o(r), this.registry.register(r, t, t)
            }
            this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1
          }, this.registry = new s(this.deleteNode.bind(this))
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: r
            } = t;
            r && (r.older = e), e && (e.newer = r), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = r)
          }
          return t
        }
        set(e, t) {
          let r = this.getNode(e);
          return r ? r.value = t : (r = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.scheduleFinalization(r), this.map.set(e, r), this.size++, r.value)
        }
        clean() {
          for (; this.oldest && this.size > this.max;) this.deleteNode(this.oldest)
        }
        deleteNode(e) {
          e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
          const t = e.key || e.keyRef && e.keyRef.deref();
          this.dispose(e.value, t), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), t && this.map.delete(t)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (this.deleteNode(t), !0)
        }
        scheduleFinalization(e) {
          this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize))
        }
      }
    },
    47677: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u,
        L: () => s
      });
      const {
        toString: n,
        hasOwnProperty: i
      } = Object.prototype, o = Function.prototype.toString, a = new Map;

      function s(e, t) {
        try {
          return c(e, t)
        } finally {
          a.clear()
        }
      }
      const u = s;

      function c(e, t) {
        if (e === t) return !0;
        const r = n.call(e);
        if (r !== n.call(t)) return !1;
        switch (r) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]": {
            if (d(e, t)) return !0;
            const r = l(e),
              n = l(t),
              o = r.length;
            if (o !== n.length) return !1;
            for (let e = 0; e < o; ++e)
              if (!i.call(t, r[e])) return !1;
            for (let n = 0; n < o; ++n) {
              const i = r[n];
              if (!c(e[i], t[i])) return !1
            }
            return !0
          }
          case "[object Error]":
            return e.name === t.name && e.message === t.message;
          case "[object Number]":
            if (e != e) return t != t;
          case "[object Boolean]":
          case "[object Date]":
            return +e == +t;
          case "[object RegExp]":
          case "[object String]":
            return e == `${t}`;
          case "[object Map]":
          case "[object Set]": {
            if (e.size !== t.size) return !1;
            if (d(e, t)) return !0;
            const n = e.entries(),
              i = "[object Map]" === r;
            for (;;) {
              const e = n.next();
              if (e.done) break;
              const [r, o] = e.value;
              if (!t.has(r)) return !1;
              if (i && !c(o, t.get(r))) return !1
            }
            return !0
          }
          case "[object Uint16Array]":
          case "[object Uint8Array]":
          case "[object Uint32Array]":
          case "[object Int32Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object ArrayBuffer]":
            e = new Uint8Array(e), t = new Uint8Array(t);
          case "[object DataView]": {
            let r = e.byteLength;
            if (r === t.byteLength)
              for (; r-- && e[r] === t[r];);
            return -1 === r
          }
          case "[object AsyncFunction]":
          case "[object GeneratorFunction]":
          case "[object AsyncGeneratorFunction]":
          case "[object Function]": {
            const r = o.call(e);
            return r === o.call(t) && ! function(e, t) {
              const r = e.length - t.length;
              return r >= 0 && e.indexOf(t, r) === r
            }(r, h)
          }
        }
        return !1
      }

      function l(e) {
        return Object.keys(e).filter(f, e)
      }

      function f(e) {
        return void 0 !== this[e]
      }
      const h = "{ [native code] }";

      function d(e, t) {
        let r = a.get(e);
        if (r) {
          if (r.has(t)) return !0
        } else a.set(e, r = new Set);
        return r.add(t), !1
      }
    },
    9325: (e, t, r) => {
      "use strict";
      r.d(t, {
        b: () => s
      });
      const n = () => Object.create(null),
        {
          forEach: i,
          slice: o
        } = Array.prototype,
        {
          hasOwnProperty: a
        } = Object.prototype;
      class s {
        constructor() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return i.call(e, (e => t = t.getChildTrie(e))), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
        }
        peek() {
          return this.peekArray(arguments)
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            const n = t.mapFor(e[r], !1);
            t = n && n.get(e[r])
          }
          return t && t.data
        }
        remove() {
          return this.removeArray(arguments)
        }
        removeArray(e) {
          let t;
          if (e.length) {
            const r = e[0],
              n = this.mapFor(r, !1),
              i = n && n.get(r);
            i && (t = i.removeArray(o.call(e, 1)), i.data || i.weak || i.strong && i.strong.size || n.delete(r))
          } else t = this.data, delete this.data;
          return t
        }
        getChildTrie(e) {
          const t = this.mapFor(e, !0);
          let r = t.get(e);
          return r || t.set(e, r = new s(this.weakness, this.makeData)), r
        }
        mapFor(e, t) {
          return this.weakness && function(e) {
            switch (typeof e) {
              case "object":
                if (null === e) break;
              case "function":
                return !0
            }
            return !1
          }(e) ? this.weak || (t ? this.weak = new WeakMap : void 0) : this.strong || (t ? this.strong = new Map : void 0)
        }
      }
    },
    61328: (e, t, r) => {
      "use strict";
      r.d(t, {
        sc: () => i
      });
      const n = e => async function(t) {
        let {
          outputFormat: r = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const n = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === r ? (e => {
          const t = new DataView(e);
          let r = "";
          for (let e = 0; e < t.byteLength; e += 4) r += t.getUint32(e).toString(16).padStart(8, "0");
          return r
        })(n) : n
      }, i = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512")
    },
    79767: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => f,
        yN: () => q,
        LV: () => L
      });
      var n = r(9325),
        i = r(74175);
      let o = null;
      const a = {};
      let s = 1;

      function u(e) {
        try {
          return e()
        } catch (e) {}
      }
      const c = "@wry/context:Slot",
        l = u((() => globalThis)) || u((() => global)) || Object.create(null),
        f = l[c] || Array[c] || function(e) {
          try {
            Object.defineProperty(l, c, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return e
          }
        }(class {
          constructor() {
            this.id = ["slot", s++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = o; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === a) break;
                return e !== o && (o.slots[this.id] = t), !0
              } return o && (o.slots[this.id] = a), !1
          }
          getValue() {
            if (this.hasValue()) return o.slots[this.id]
          }
          withValue(e, t, r, n) {
            const i = {
                __proto__: null,
                [this.id]: e
              },
              a = o;
            o = {
              parent: a,
              slots: i
            };
            try {
              return t.apply(n, r)
            } finally {
              o = a
            }
          }
          static bind(e) {
            const t = o;
            return function() {
              const r = o;
              try {
                return o = t, e.apply(this, arguments)
              } finally {
                o = r
              }
            }
          }
          static noContext(e, t, r) {
            if (!o) return e.apply(r, t); {
              const n = o;
              try {
                return o = null, e.apply(r, t)
              } finally {
                o = n
              }
            }
          }
        }),
        {
          bind: h,
          noContext: d
        } = f,
        p = new f,
        {
          hasOwnProperty: v
        } = Object.prototype,
        y = Array.from || function(e) {
          const t = [];
          return e.forEach((e => t.push(e))), t
        };

      function m(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const b = [],
        g = 100;

      function w(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function _(e, t) {
        const r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1]
      }

      function E(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function O(e) {
        return e.slice(0)
      }
      class S {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++S.count
        }
        peek() {
          if (1 === this.value.length && !T(this)) return k(this), this.value[0]
        }
        recompute(e) {
          return w(!this.recomputing, "already recomputing"), k(this), T(this) ? function(e, t) {
            return P(e), p.withValue(e, C, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  m(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, T(e) || x(e)
              }(e), E(e.value)
          }(this, e) : E(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, D(this), m(this))
        }
        dispose() {
          this.setDirty(), P(this), R(this, ((e, t) => {
            e.setDirty(), F(e, this)
          }))
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = b.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (y(this.deps).forEach((e => e.delete(this))), this.deps.clear(), b.push(this.deps), this.deps = null)
        }
      }

      function k(e) {
        const t = p.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), T(e) ? M(t, e) : A(t, e), t
      }

      function C(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: r
        } = e;
        let n;
        r && 1 === e.value.length && (n = O(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), r && n && !_(n, e.value)) try {
            e.value[0] = r(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function T(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function D(e) {
        R(e, M)
      }

      function x(e) {
        R(e, A)
      }

      function R(e, t) {
        const r = e.parents.size;
        if (r) {
          const n = y(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e)
        }
      }

      function M(e, t) {
        w(e.childValues.has(t)), w(T(t));
        const r = !T(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = b.pop() || new Set;
        e.dirtyChildren.add(t), r && D(e)
      }

      function A(e, t) {
        w(e.childValues.has(t)), w(!T(t));
        const r = e.childValues.get(t);
        0 === r.length ? e.childValues.set(t, O(t.value)) : _(r, t.value) || e.setDirty(), j(e, t), T(e) || x(e)
      }

      function j(e, t) {
        const r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (b.length < g && b.push(r), e.dirtyChildren = null))
      }

      function P(e) {
        e.childValues.size > 0 && e.childValues.forEach(((t, r) => {
          F(e, r)
        })), e.forgetDeps(), w(null === e.dirtyChildren)
      }

      function F(e, t) {
        t.parents.delete(e), e.childValues.delete(t), j(e, t)
      }
      S.count = 0;
      const I = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function q(e) {
        const t = new Map,
          r = e && e.subscribe;

        function n(e) {
          const n = p.getValue();
          if (n) {
            let i = t.get(e);
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (m(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          const n = t.get(e);
          if (n) {
            const i = r && v.call(I, r) ? r : "setDirty";
            y(n).forEach((e => e[i]())), t.delete(e), m(n)
          }
        }, n
      }
      let V;

      function Q() {
        const e = V || (V = new n.b("function" == typeof WeakMap));
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        return e.lookupArray(r)
      }
      const N = new Set;

      function L(e) {
        let {
          max: t = Math.pow(2, 16),
          keyArgs: r,
          makeCacheKey: n = Q,
          normalizeResult: o,
          subscribe: a,
          cache: s = i.C
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.create(null);
        const u = "function" == typeof s ? new s(t, (e => e.dispose())) : s,
          c = function() {
            const t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let i = u.get(t);
            i || (u.set(t, i = new S(e)), i.normalizeResult = o, i.subscribe = a, i.forget = () => u.delete(t));
            const s = i.recompute(Array.prototype.slice.call(arguments));
            return u.set(t, i), N.add(u), p.hasValue() || (N.forEach((e => e.clean())), N.clear()), s
          };

        function l(e) {
          const t = e && u.get(e);
          t && t.setDirty()
        }

        function f(e) {
          const t = e && u.get(e);
          if (t) return t.peek()
        }

        function h(e) {
          return !!e && u.delete(e)
        }
        return Object.defineProperty(c, "size", {
          get: () => u.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(c.options = {
          max: t,
          keyArgs: r,
          makeCacheKey: n,
          normalizeResult: o,
          subscribe: a,
          cache: u
        }), c.dirtyKey = l, c.dirty = function() {
          l(n.apply(null, arguments))
        }, c.peekKey = f, c.peek = function() {
          return f(n.apply(null, arguments))
        }, c.forgetKey = h, c.forget = function() {
          return h(n.apply(null, arguments))
        }, c.makeCacheKey = n, c.getKey = r ? function() {
          return n.apply(null, r.apply(null, arguments))
        } : n, Object.freeze(c)
      }
    },
    94929: (e, t, r) => {
      "use strict";

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function o(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }
      r.d(t, {
        c: () => O
      });
      var a = function() {
          return "function" == typeof Symbol
        },
        s = function(e) {
          return a() && Boolean(Symbol[e])
        },
        u = function(e) {
          return s(e) ? Symbol[e] : "@@" + e
        };
      a() && !s("observable") && (Symbol.observable = Symbol("observable"));
      var c = u("iterator"),
        l = u("observable"),
        f = u("species");

      function h(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw new TypeError(r + " is not a function");
          return r
        }
      }

      function d(e) {
        var t = e.constructor;
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : O
      }

      function p(e) {
        return e instanceof O
      }

      function v(e) {
        v.log ? v.log(e) : setTimeout((function() {
          throw e
        }))
      }

      function y(e) {
        Promise.resolve().then((function() {
          try {
            e()
          } catch (e) {
            v(e)
          }
        }))
      }

      function m(e) {
        var t = e._cleanup;
        if (void 0 !== t && (e._cleanup = void 0, t)) try {
          if ("function" == typeof t) t();
          else {
            var r = h(t, "unsubscribe");
            r && r.call(t)
          }
        } catch (e) {
          v(e)
        }
      }

      function b(e) {
        e._observer = void 0, e._queue = void 0, e._state = "closed"
      }

      function g(e, t, r) {
        e._state = "running";
        var n = e._observer;
        try {
          var i = h(n, t);
          switch (t) {
            case "next":
              i && i.call(n, r);
              break;
            case "error":
              if (b(e), !i) throw r;
              i.call(n, r);
              break;
            case "complete":
              b(e), i && i.call(n)
          }
        } catch (e) {
          v(e)
        }
        "closed" === e._state ? m(e) : "running" === e._state && (e._state = "ready")
      }

      function w(e, t, r) {
        if ("closed" !== e._state) {
          if ("buffering" !== e._state) return "ready" !== e._state ? (e._state = "buffering", e._queue = [{
            type: t,
            value: r
          }], void y((function() {
            return function(e) {
              var t = e._queue;
              if (t) {
                e._queue = void 0, e._state = "ready";
                for (var r = 0; r < t.length && (g(e, t[r].type, t[r].value), "closed" !== e._state); ++r);
              }
            }(e)
          }))) : void g(e, t, r);
          e._queue.push({
            type: t,
            value: r
          })
        }
      }
      var _ = function() {
          function e(e, t) {
            this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
            var r = new E(this);
            try {
              this._cleanup = t.call(void 0, r)
            } catch (e) {
              r.error(e)
            }
            "initializing" === this._state && (this._state = "ready")
          }
          return e.prototype.unsubscribe = function() {
            "closed" !== this._state && (b(this), m(this))
          }, o(e, [{
            key: "closed",
            get: function() {
              return "closed" === this._state
            }
          }]), e
        }(),
        E = function() {
          function e(e) {
            this._subscription = e
          }
          var t = e.prototype;
          return t.next = function(e) {
            w(this._subscription, "next", e)
          }, t.error = function(e) {
            w(this._subscription, "error", e)
          }, t.complete = function() {
            w(this._subscription, "complete")
          }, o(e, [{
            key: "closed",
            get: function() {
              return "closed" === this._subscription._state
            }
          }]), e
        }(),
        O = function() {
          function e(t) {
            if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
            if ("function" != typeof t) throw new TypeError("Observable initializer must be a function");
            this._subscriber = t
          }
          var t = e.prototype;
          return t.subscribe = function(e) {
            return "object" == typeof e && null !== e || (e = {
              next: e,
              error: arguments[1],
              complete: arguments[2]
            }), new _(e, this._subscriber)
          }, t.forEach = function(e) {
            var t = this;
            return new Promise((function(r, n) {
              if ("function" == typeof e) var i = t.subscribe({
                next: function(t) {
                  try {
                    e(t, o)
                  } catch (e) {
                    n(e), i.unsubscribe()
                  }
                },
                error: n,
                complete: r
              });
              else n(new TypeError(e + " is not a function"));

              function o() {
                i.unsubscribe(), r()
              }
            }))
          }, t.map = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(d(this))((function(r) {
              return t.subscribe({
                next: function(t) {
                  try {
                    t = e(t)
                  } catch (e) {
                    return r.error(e)
                  }
                  r.next(t)
                },
                error: function(e) {
                  r.error(e)
                },
                complete: function() {
                  r.complete()
                }
              })
            }))
          }, t.filter = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(d(this))((function(r) {
              return t.subscribe({
                next: function(t) {
                  try {
                    if (!e(t)) return
                  } catch (e) {
                    return r.error(e)
                  }
                  r.next(t)
                },
                error: function(e) {
                  r.error(e)
                },
                complete: function() {
                  r.complete()
                }
              })
            }))
          }, t.reduce = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var r = d(this),
              n = arguments.length > 1,
              i = !1,
              o = arguments[1];
            return new r((function(r) {
              return t.subscribe({
                next: function(t) {
                  var a = !i;
                  if (i = !0, !a || n) try {
                    o = e(o, t)
                  } catch (e) {
                    return r.error(e)
                  } else o = t
                },
                error: function(e) {
                  r.error(e)
                },
                complete: function() {
                  if (!i && !n) return r.error(new TypeError("Cannot reduce an empty sequence"));
                  r.next(o), r.complete()
                }
              })
            }))
          }, t.concat = function() {
            for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            var i = d(this);
            return new i((function(t) {
              var n, o = 0;
              return function e(a) {
                  n = a.subscribe({
                    next: function(e) {
                      t.next(e)
                    },
                    error: function(e) {
                      t.error(e)
                    },
                    complete: function() {
                      o === r.length ? (n = void 0, t.complete()) : e(i.from(r[o++]))
                    }
                  })
                }(e),
                function() {
                  n && (n.unsubscribe(), n = void 0)
                }
            }))
          }, t.flatMap = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var r = d(this);
            return new r((function(n) {
              var i = [],
                o = t.subscribe({
                  next: function(t) {
                    if (e) try {
                      t = e(t)
                    } catch (e) {
                      return n.error(e)
                    }
                    var o = r.from(t).subscribe({
                      next: function(e) {
                        n.next(e)
                      },
                      error: function(e) {
                        n.error(e)
                      },
                      complete: function() {
                        var e = i.indexOf(o);
                        e >= 0 && i.splice(e, 1), a()
                      }
                    });
                    i.push(o)
                  },
                  error: function(e) {
                    n.error(e)
                  },
                  complete: function() {
                    a()
                  }
                });

              function a() {
                o.closed && 0 === i.length && n.complete()
              }
              return function() {
                i.forEach((function(e) {
                  return e.unsubscribe()
                })), o.unsubscribe()
              }
            }))
          }, t[l] = function() {
            return this
          }, e.from = function(t) {
            var r = "function" == typeof this ? this : e;
            if (null == t) throw new TypeError(t + " is not an object");
            var i = h(t, l);
            if (i) {
              var o = i.call(t);
              if (Object(o) !== o) throw new TypeError(o + " is not an object");
              return p(o) && o.constructor === r ? o : new r((function(e) {
                return o.subscribe(e)
              }))
            }
            if (s("iterator") && (i = h(t, c))) return new r((function(e) {
              y((function() {
                if (!e.closed) {
                  for (var r, o = function(e, t) {
                      var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                      if (r) return (r = r.call(e)).next.bind(r);
                      if (Array.isArray(e) || (r = function(e, t) {
                          if (e) {
                            if ("string" == typeof e) return n(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                          }
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var i = 0;
                        return function() {
                          return i >= e.length ? {
                            done: !0
                          } : {
                            done: !1,
                            value: e[i++]
                          }
                        }
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(i.call(t)); !(r = o()).done;) {
                    var a = r.value;
                    if (e.next(a), e.closed) return
                  }
                  e.complete()
                }
              }))
            }));
            if (Array.isArray(t)) return new r((function(e) {
              y((function() {
                if (!e.closed) {
                  for (var r = 0; r < t.length; ++r)
                    if (e.next(t[r]), e.closed) return;
                  e.complete()
                }
              }))
            }));
            throw new TypeError(t + " is not observable")
          }, e.of = function() {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return new("function" == typeof this ? this : e)((function(e) {
              y((function() {
                if (!e.closed) {
                  for (var t = 0; t < r.length; ++t)
                    if (e.next(r[t]), e.closed) return;
                  e.complete()
                }
              }))
            }))
          }, o(e, null, [{
            key: f,
            get: function() {
              return this
            }
          }]), e
        }();
      a() && Object.defineProperty(O, Symbol("extensions"), {
        value: {
          symbol: l,
          hostReportError: v
        },
        configurable: !0
      })
    }
  }
]);