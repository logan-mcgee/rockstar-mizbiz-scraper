! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "7c8907f6-cba1-4078-8137-8abb24b6c4ce", t._sentryDebugIdIdentifier = "sentry-dbid-7c8907f6-cba1-4078-8137-8abb24b6c4ce")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [344], {
    1344: function(t, e) {
      var r = "undefined" != typeof self ? self : this,
        o = function() {
          function t() {
            this.fetch = !1, this.DOMException = r.DOMException
          }
          return t.prototype = r, new t
        }();
      ! function(t) {
        ! function(e) {
          var r = "URLSearchParams" in t,
            o = "Symbol" in t && "iterator" in Symbol,
            n = "FileReader" in t && "Blob" in t && function() {
              try {
                return new Blob, !0
              } catch (t) {
                return !1
              }
            }(),
            i = "FormData" in t,
            s = "ArrayBuffer" in t;
          if (s) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            d = ArrayBuffer.isView || function(t) {
              return t && a.indexOf(Object.prototype.toString.call(t)) > -1
            };

          function f(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
          }

          function h(t) {
            return "string" != typeof t && (t = String(t)), t
          }

          function u(t) {
            var e = {
              next: function() {
                var e = t.shift();
                return {
                  done: void 0 === e,
                  value: e
                }
              }
            };
            return o && (e[Symbol.iterator] = function() {
              return e
            }), e
          }

          function c(t) {
            this.map = {}, t instanceof c ? t.forEach((function(t, e) {
              this.append(e, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
              this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
              this.append(e, t[e])
            }), this)
          }

          function l(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
          }

          function p(t) {
            return new Promise((function(e, r) {
              t.onload = function() {
                e(t.result)
              }, t.onerror = function() {
                r(t.error)
              }
            }))
          }

          function y(t) {
            var e = new FileReader,
              r = p(e);
            return e.readAsArrayBuffer(t), r
          }

          function b(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
          }

          function w() {
            return this.bodyUsed = !1, this._initBody = function(t) {
              var e;
              this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : n && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && n && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = b(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || d(t)) ? this._bodyArrayBuffer = b(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, n && (this.blob = function() {
              var t = l(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y)
            }), this.text = function() {
              var t, e, r, o = l(this);
              if (o) return o;
              if (this._bodyBlob) return t = this._bodyBlob, r = p(e = new FileReader), e.readAsText(t), r;
              if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
                return r.join("")
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText)
            }, i && (this.formData = function() {
              return this.text().then(_)
            }), this.json = function() {
              return this.text().then(JSON.parse)
            }, this
          }
          c.prototype.append = function(t, e) {
            t = f(t), e = h(e);
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e
          }, c.prototype.delete = function(t) {
            delete this.map[f(t)]
          }, c.prototype.get = function(t) {
            return t = f(t), this.has(t) ? this.map[t] : null
          }, c.prototype.has = function(t) {
            return this.map.hasOwnProperty(f(t))
          }, c.prototype.set = function(t, e) {
            this.map[f(t)] = h(e)
          }, c.prototype.forEach = function(t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
          }, c.prototype.keys = function() {
            var t = [];
            return this.forEach((function(e, r) {
              t.push(r)
            })), u(t)
          }, c.prototype.values = function() {
            var t = [];
            return this.forEach((function(e) {
              t.push(e)
            })), u(t)
          }, c.prototype.entries = function() {
            var t = [];
            return this.forEach((function(e, r) {
              t.push([r, e])
            })), u(t)
          }, o && (c.prototype[Symbol.iterator] = c.prototype.entries);
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

          function g(t, e) {
            var r, o, n = (e = e || {}).body;
            if (t instanceof g) {
              if (t.bodyUsed) throw new TypeError("Already read");
              this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new c(e.headers)), this.method = (o = (r = e.method || this.method || "GET").toUpperCase(), m.indexOf(o) > -1 ? o : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
          }

          function _(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
              if (t) {
                var r = t.split("="),
                  o = r.shift().replace(/\+/g, " "),
                  n = r.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(o), decodeURIComponent(n))
              }
            })), e
          }

          function E(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new c(e.headers), this.url = e.url || "", this._initBody(t)
          }
          g.prototype.clone = function() {
            return new g(this, {
              body: this._bodyInit
            })
          }, w.call(g.prototype), w.call(E.prototype), E.prototype.clone = function() {
            return new E(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new c(this.headers),
              url: this.url
            })
          }, E.error = function() {
            var t = new E(null, {
              status: 0,
              statusText: ""
            });
            return t.type = "error", t
          };
          var v = [301, 302, 303, 307, 308];
          E.redirect = function(t, e) {
            if (-1 === v.indexOf(e)) throw new RangeError("Invalid status code");
            return new E(null, {
              status: e,
              headers: {
                location: t
              }
            })
          }, e.DOMException = t.DOMException;
          try {
            new e.DOMException
          } catch (t) {
            e.DOMException = function(t, e) {
              this.message = t, this.name = e;
              var r = Error(t);
              this.stack = r.stack
            }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
          }

          function A(t, r) {
            return new Promise((function(o, i) {
              var s = new g(t, r);
              if (s.signal && s.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest;

              function d() {
                a.abort()
              }
              a.onload = function() {
                var t, e, r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: (t = a.getAllResponseHeaders() || "", e = new c, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                    var r = t.split(":"),
                      o = r.shift().trim();
                    if (o) {
                      var n = r.join(":").trim();
                      e.append(o, n)
                    }
                  })), e)
                };
                r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                var n = "response" in a ? a.response : a.responseText;
                o(new E(n, r))
              }, a.onerror = function() {
                i(new TypeError("Network request failed"))
              }, a.ontimeout = function() {
                i(new TypeError("Network request failed"))
              }, a.onabort = function() {
                i(new e.DOMException("Aborted", "AbortError"))
              }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && n && (a.responseType = "blob"), s.headers.forEach((function(t, e) {
                a.setRequestHeader(e, t)
              })), s.signal && (s.signal.addEventListener("abort", d), a.onreadystatechange = function() {
                4 === a.readyState && s.signal.removeEventListener("abort", d)
              }), a.send(void 0 === s._bodyInit ? null : s._bodyInit)
            }))
          }
          A.polyfill = !0, t.fetch || (t.fetch = A, t.Headers = c, t.Request = g, t.Response = E), e.Headers = c, e.Request = g, e.Response = E, e.fetch = A, Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }({})
      }(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
      var n = o;
      (e = n.fetch).default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, t.exports = e
    }
  }
]);