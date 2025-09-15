try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "df0fe977-97c0-438c-b0a1-217e20bf0b92", e._sentryDebugIdIdentifier = "sentry-dbid-df0fe977-97c0-438c-b0a1-217e20bf0b92")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5997], {
    2333: (e, t, r) => {
      "use strict";
      var n, o = (n = r(13140)) && n.__esModule ? n : {
          default: n
        },
        i = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = o.default.tags(e);
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
              o = e.dataLayer,
              i = e.dataLayerName,
              s = void 0 === i ? "dataLayer" : i,
              a = e.auth,
              u = void 0 === a ? "" : a,
              d = e.preview,
              c = void 0 === d ? "" : d,
              f = this.gtm({
                id: t,
                events: n,
                dataLayer: o || void 0,
                dataLayerName: s,
                auth: u,
                preview: c
              });
            o && document.head.appendChild(f.dataScript), document.head.insertBefore(f.script(), document.head.childNodes[0]), document.body.insertBefore(f.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              r = e.dataLayerName,
              n = void 0 === r ? "dataLayer" : r;
            if (window[n]) return window[n].push(t);
            var i = o.default.dataLayer(t, n),
              s = this.dataScript(i);
            document.head.insertBefore(s, document.head.childNodes[0])
          }
        };
      e.exports = i
    },
    6347: (e, t, r) => {
      "use strict";
      r.d(t, {
        o: () => s
      });
      var n = r(78322),
        o = r(21429),
        i = r(57308);

      function s(e) {
        return new o.C((function(t, r) {
          var o = (0, n.__rest)(t, []);
          return new i.c((function(n) {
            var i, s = !1;
            return Promise.resolve(o).then((function(r) {
                return e(r, t.getContext())
              })).then(t.setContext).then((function() {
                s || (i = r(t).subscribe({
                  next: n.next.bind(n),
                  error: n.error.bind(n),
                  complete: n.complete.bind(n)
                }))
              })).catch(n.error.bind(n)),
              function() {
                s = !0, i && i.unsubscribe()
              }
          }))
        }))
      }
    },
    13140: (e, t, r) => {
      "use strict";
      var n, o = (n = r(48848)) && n.__esModule ? n : {
          default: n
        },
        i = {
          tags: function(e) {
            var t = e.id,
              r = e.events,
              n = e.dataLayer,
              i = e.dataLayerName,
              s = e.preview,
              a = "&gtm_auth=" + e.auth,
              u = "&gtm_preview=" + s;
            return t || (0, o.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + a + u + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(r).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + a + u + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + i + "','" + t + "');",
              dataLayerVar: this.dataLayer(n, i)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = i
    },
    37980: (e, t, r) => {
      "use strict";

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) e[n] = r[n]
        }
        return e
      }
      r.d(t, {
        A: () => o
      });
      var o = function e(t, r) {
        function o(e, o, i) {
          if ("undefined" != typeof document) {
            "number" == typeof(i = n({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var s = "";
            for (var a in i) i[a] && (s += "; " + a, !0 !== i[a] && (s += "=" + i[a].split(";")[0]));
            return document.cookie = e + "=" + t.write(o, e) + s
          }
        }
        return Object.create({
          set: o,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < r.length; o++) {
                var i = r[o].split("="),
                  s = i.slice(1).join("=");
                try {
                  var a = decodeURIComponent(i[0]);
                  if (n[a] = t.read(s, a), e === a) break
                } catch (e) {}
              }
              return e ? n[e] : n
            }
          },
          remove: function(e, t) {
            o(e, "", n({}, t, {
              expires: -1
            }))
          },
          withAttributes: function(t) {
            return e(this.converter, n({}, this.attributes, t))
          },
          withConverter: function(t) {
            return e(n({}, this.converter, t), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(r)
          },
          converter: {
            value: Object.freeze(t)
          }
        })
      }({
        read: function(e) {
          return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
          return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
      }, {
        path: "/"
      })
    },
    48848: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    61162: (e, t, r) => {
      var n = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r.g && r.g,
        o = function() {
          function e() {
            this.fetch = !1, this.DOMException = n.DOMException
          }
          return e.prototype = n, new e
        }();
      ! function(e) {
        ! function(t) {
          var n = void 0 !== e && e || "undefined" != typeof self && self || void 0 !== r.g && r.g || {},
            o = "URLSearchParams" in n,
            i = "Symbol" in n && "iterator" in Symbol,
            s = "FileReader" in n && "Blob" in n && function() {
              try {
                return new Blob, !0
              } catch (e) {
                return !1
              }
            }(),
            a = "FormData" in n,
            u = "ArrayBuffer" in n;
          if (u) var d = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            c = ArrayBuffer.isView || function(e) {
              return e && d.indexOf(Object.prototype.toString.call(e)) > -1
            };

          function f(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase()
          }

          function l(e) {
            return "string" != typeof e && (e = String(e)), e
          }

          function h(e) {
            var t = {
              next: function() {
                var t = e.shift();
                return {
                  done: void 0 === t,
                  value: t
                }
              }
            };
            return i && (t[Symbol.iterator] = function() {
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

          function y(e) {
            if (!e._noBody) return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
          }

          function b(e) {
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
              r = b(t);
            return t.readAsArrayBuffer(e), r
          }

          function g(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function v() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && s && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, s && (this.blob = function() {
              var e = y(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]))
            }), this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) return y(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
              if (s) return this.blob().then(m);
              throw new Error("could not read as ArrayBuffer")
            }, this.text = function() {
              var e, t, r, n, o, i = y(this);
              if (i) return i;
              if (this._bodyBlob) return e = this._bodyBlob, r = b(t = new FileReader), o = (n = /charset=([A-Za-z0-9_-]+)/.exec(e.type)) ? n[1] : "utf-8", t.readAsText(e, o), r;
              if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                return r.join("")
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText)
            }, a && (this.formData = function() {
              return this.text().then(E)
            }), this.json = function() {
              return this.text().then(JSON.parse)
            }, this
          }
          p.prototype.append = function(e, t) {
            e = f(e), t = l(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
          }, p.prototype.delete = function(e) {
            delete this.map[f(e)]
          }, p.prototype.get = function(e) {
            return e = f(e), this.has(e) ? this.map[e] : null
          }, p.prototype.has = function(e) {
            return this.map.hasOwnProperty(f(e))
          }, p.prototype.set = function(e, t) {
            this.map[f(e)] = l(t)
          }, p.prototype.forEach = function(e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
          }, p.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push(r)
            })), h(e)
          }, p.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
              e.push(t)
            })), h(e)
          }, p.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push([r, t])
            })), h(e)
          }, i && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var w = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function _(e, t) {
            if (!(this instanceof _)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, o, i = (t = t || {}).body;
            if (e instanceof _) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (o = (r = t.method || this.method || "GET").toUpperCase(), w.indexOf(o) > -1 ? o : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in n) return (new AbortController).signal
              }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
              var s = /([?&])_=[^&]*/;
              s.test(this.url) ? this.url = this.url.replace(s, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
          }

          function E(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
              if (e) {
                var r = e.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  o = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(o))
              }
            })), t
          }

          function T(e, t) {
            if (!(this instanceof T)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
          }
          _.prototype.clone = function() {
            return new _(this, {
              body: this._bodyInit
            })
          }, v.call(_.prototype), v.call(T.prototype), T.prototype.clone = function() {
            return new T(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new p(this.headers),
              url: this.url
            })
          }, T.error = function() {
            var e = new T(null, {
              status: 200,
              statusText: ""
            });
            return e.ok = !1, e.status = 0, e.type = "error", e
          };
          var x = [301, 302, 303, 307, 308];
          T.redirect = function(e, t) {
            if (-1 === x.indexOf(t)) throw new RangeError("Invalid status code");
            return new T(null, {
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

          function O(e, r) {
            return new Promise((function(o, i) {
              var a = new _(e, r);
              if (a.signal && a.signal.aborted) return i(new t.DOMException("Aborted", "AbortError"));
              var d = new XMLHttpRequest;

              function c() {
                d.abort()
              }
              if (d.onload = function() {
                  var e, t, r = {
                    statusText: d.statusText,
                    headers: (e = d.getAllResponseHeaders() || "", t = new p, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                      return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    })).forEach((function(e) {
                      var r = e.split(":"),
                        n = r.shift().trim();
                      if (n) {
                        var o = r.join(":").trim();
                        try {
                          t.append(n, o)
                        } catch (e) {
                          console.warn("Response " + e.message)
                        }
                      }
                    })), t)
                  };
                  0 === a.url.indexOf("file://") && (d.status < 200 || d.status > 599) ? r.status = 200 : r.status = d.status, r.url = "responseURL" in d ? d.responseURL : r.headers.get("X-Request-URL");
                  var n = "response" in d ? d.response : d.responseText;
                  setTimeout((function() {
                    o(new T(n, r))
                  }), 0)
                }, d.onerror = function() {
                  setTimeout((function() {
                    i(new TypeError("Network request failed"))
                  }), 0)
                }, d.ontimeout = function() {
                  setTimeout((function() {
                    i(new TypeError("Network request timed out"))
                  }), 0)
                }, d.onabort = function() {
                  setTimeout((function() {
                    i(new t.DOMException("Aborted", "AbortError"))
                  }), 0)
                }, d.open(a.method, function(e) {
                  try {
                    return "" === e && n.location.href ? n.location.href : e
                  } catch (t) {
                    return e
                  }
                }(a.url), !0), "include" === a.credentials ? d.withCredentials = !0 : "omit" === a.credentials && (d.withCredentials = !1), "responseType" in d && (s ? d.responseType = "blob" : u && (d.responseType = "arraybuffer")), r && "object" == typeof r.headers && !(r.headers instanceof p || n.Headers && r.headers instanceof n.Headers)) {
                var h = [];
                Object.getOwnPropertyNames(r.headers).forEach((function(e) {
                  h.push(f(e)), d.setRequestHeader(e, l(r.headers[e]))
                })), a.headers.forEach((function(e, t) {
                  -1 === h.indexOf(t) && d.setRequestHeader(t, e)
                }))
              } else a.headers.forEach((function(e, t) {
                d.setRequestHeader(t, e)
              }));
              a.signal && (a.signal.addEventListener("abort", c), d.onreadystatechange = function() {
                4 === d.readyState && a.signal.removeEventListener("abort", c)
              }), d.send(void 0 === a._bodyInit ? null : a._bodyInit)
            }))
          }
          O.polyfill = !0, n.fetch || (n.fetch = O, n.Headers = p, n.Request = _, n.Response = T), t.Headers = p, t.Request = _, t.Response = T, t.fetch = O
        }({})
      }(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
      var i = n.fetch ? n : o;
      (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
    },
    62944: (e, t, r) => {
      "use strict";
      r.d(t, {
        e: () => p
      });
      var n = r(78322),
        o = r(60276),
        i = r(35588),
        s = r(21429),
        a = r(57308),
        u = r(7569),
        d = r(86570),
        c = r(15492),
        f = r(74197);

      function l(e) {
        var t = Object.create(null),
          r = Object.create(null);
        return (0, u.E)(e) && e.forEach((function(e) {
          var n;
          t[e.message] = e, "string" == typeof(null === (n = e.extensions) || void 0 === n ? void 0 : n.code) && (r[e.extensions.code] = e)
        })), {
          persistedQueryNotSupported: !(!t.PersistedQueryNotSupported && !r.PERSISTED_QUERY_NOT_SUPPORTED),
          persistedQueryNotFound: !(!t.PersistedQueryNotFound && !r.PERSISTED_QUERY_NOT_FOUND)
        }
      }
      var h = {
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
          }(0, o.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 43);
          var p = (0, d.o)(h, e),
            y = p.sha256,
            b = p.generateHash,
            m = void 0 === b ? function(e) {
              return Promise.resolve(y((0, i.y)(e)))
            } : b,
            g = p.disable,
            v = p.retry,
            w = p.useGETForHashedQueries,
            _ = !0,
            E = function(e) {
              return new Promise((function(t) {
                return t(m(e))
              }))
            };
          return Object.assign(new s.C((function(e, i) {
            (0, o.V1)(i, 44);
            var s = e.query;
            return new a.c((function(o) {
              var a, d, h = !1,
                p = !1,
                y = function(t, n) {
                  var o = t.response,
                    s = t.networkError;
                  if (!h && (o && o.errors || s)) {
                    h = !0;
                    var c = [],
                      f = o && o.errors;
                    (0, u.E)(f) && c.push.apply(c, f);
                    var y = void 0;
                    "string" != typeof(null == s ? void 0 : s.result) && (y = s && s.result && s.result.errors), (0, u.E)(y) && c.push.apply(c, y);
                    var m = {
                      response: o,
                      networkError: s,
                      operation: e,
                      graphQLErrors: (0, u.E)(c) ? c : void 0,
                      meta: l(c)
                    };
                    if ((_ = !g(m)) || r(), v(m)) return a && a.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: _
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), p && e.setContext({
                      fetchOptions: d
                    }), void(a = i(e).subscribe(b))
                  }
                  n()
                },
                b = {
                  next: function(e) {
                    y({
                      response: e
                    }, (function() {
                      return o.next(e)
                    }))
                  },
                  error: function(e) {
                    y({
                      networkError: e
                    }, (function() {
                      return o.error(e)
                    }))
                  },
                  complete: o.complete.bind(o)
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
                  return d = r, {
                    fetchOptions: (0, n.__assign)((0, n.__assign)({}, r), {
                      method: "GET"
                    })
                  }
                })), p = !0), _ ? function(e) {
                  if (!e || "object" != typeof e) return E(e);
                  t || (t = new c.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var r = t.get(e);
                  return r || t.set(e, r = E(e)), r
                }(s).then((function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, a = i(e).subscribe(b)
                })).catch(o.error.bind(o)) : a = i(e).subscribe(b),
                function() {
                  a && a.unsubscribe()
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
    69964: (e, t, r) => {
      "use strict";
      r.d(t, {
        J1: () => f
      });
      var n = r(78322),
        o = r(16565),
        i = new Map,
        s = new Map,
        a = !0,
        u = !1;

      function d(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function c(e) {
        var t, r, c, f = d(e);
        if (!i.has(f)) {
          var l = (0, o.parse)(e, {
            experimentalFragmentVariables: u,
            allowLegacyFragmentVariables: u
          });
          if (!l || "Document" !== l.kind) throw new Error("Not a valid GraphQL document.");
          i.set(f, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach((function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              }))
            }));
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }((t = l, r = new Set, c = [], t.definitions.forEach((function(e) {
            if ("FragmentDefinition" === e.kind) {
              var t = e.name.value,
                n = d((i = e.loc).source.body.substring(i.start, i.end)),
                o = s.get(t);
              o && !o.has(n) ? a && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || s.set(t, o = new Set), o.add(n), r.has(n) || (r.add(n), c.push(e))
            } else c.push(e);
            var i
          })), (0, n.__assign)((0, n.__assign)({}, t), {
            definitions: c
          }))))
        }
        return i.get(f)
      }

      function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach((function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        })), c(n)
      }
      var l, h = f;
      (l = f || (f = {})).gql = h, l.resetCaches = function() {
        i.clear(), s.clear()
      }, l.disableFragmentWarnings = function() {
        a = !1
      }, l.enableExperimentalFragmentVariables = function() {
        u = !0
      }, l.disableExperimentalFragmentVariables = function() {
        u = !1
      }, f.default = f
    },
    88718: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => a
      });
      var n = r(78322),
        o = r(60276),
        i = r(82540),
        s = r(488),
        a = function(e) {
          var t = e.client,
            r = e.children,
            a = (0, s.l)(),
            u = i.useContext(a),
            d = i.useMemo((function() {
              return (0, n.__assign)((0, n.__assign)({}, u), {
                client: t || u.client
              })
            }), [u, t]);
          return (0, o.V1)(d.client, 55), i.createElement(a.Provider, {
            value: d
          }, r)
        }
    },
    89864: (e, t, r) => {
      "use strict";
      var n, o = (n = r(2333)) && n.__esModule ? n : {
        default: n
      };
      e.exports = o.default
    }
  }
]);