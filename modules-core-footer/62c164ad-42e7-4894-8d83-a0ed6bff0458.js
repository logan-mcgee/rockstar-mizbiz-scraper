try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "62c164ad-42e7-4894-8d83-a0ed6bff0458", e._sentryDebugIdIdentifier = "sentry-dbid-62c164ad-42e7-4894-8d83-a0ed6bff0458")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [9988], {
    3058(e) {
      function t(e, t) {
        return Object.keys(t).forEach(function(r) {
          "default" === r || "__esModule" === r || Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
              return t[r]
            }
          })
        }), e
      }

      function r(e, t, r, n) {
        Object.defineProperty(e, t, {
          get: r,
          set: n,
          enumerable: !0,
          configurable: !0
        })
      }
      var n = {};
      r(n, "ONETRUST_LOADED_EVENT", () => o), r(n, "WRAPPER_CALLED_EVENT", () => a), r(n, "CONSENT_CHANGED_EVENT", () => s), r(n, "init", () => u);
      const i = window.document.currentScript?.nonce,
        o = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        s = "CONSENT_CHANGED_EVENT";
      let c = !0;

      function u(e) {
        const t = window.document.head,
          r = window.document.createElement("script");
        if (r.setAttribute("id", "onetrust-sdk-stub"), r.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("charset", "UTF-8"), r.setAttribute("data-document-language", "true"), i && (r.nonce = i), !e) throw new Error("You must specify the OneTrust script ID");
        r.setAttribute("data-domain-script", e), t.insertBefore(r, t.firstChild), window.OptanonWrapper = function() {
          c && (c = !1, window.dispatchEvent(new CustomEvent(o, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(s, {
              bubbles: !0
            }))
          })
        }
      }
      var l = {};
      r(l, "NoChoiceTransactionType", () => f), r(l, "ConfirmedTransactionType", () => h), r(l, "canStoreCookie", () => d);
      const f = "NO_CHOICE",
        h = "CONFIRMED";

      function d(e, t = null) {
        if (!window.OneTrust) return !1;
        const r = window.OneTrust.GetDomainData(),
          n = r.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!n) {
          const r = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(r), !1
        }
        if ("always active" === n.Status) return !0;
        const i = r.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === n.PurposeId);
        return i?.TransactionType === h
      }
      t(e.exports, n), t(e.exports, l)
    },
    9647(e, t, r) {
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
            c = "ArrayBuffer" in n;
          if (c) var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            l = ArrayBuffer.isView || function(e) {
              return e && u.indexOf(Object.prototype.toString.call(e)) > -1
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
            this.map = {}, e instanceof p ? e.forEach(function(e, t) {
              this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
              if (2 != e.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e.length);
              this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
              this.append(t, e[t])
            }, this)
          }

          function v(e) {
            if (!e._noBody) return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
          }

          function y(e) {
            return new Promise(function(t, r) {
              e.onload = function() {
                t(e.result)
              }, e.onerror = function() {
                r(e.error)
              }
            })
          }

          function m(e) {
            var t = new FileReader,
              r = y(t);
            return t.readAsArrayBuffer(e), r
          }

          function g(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function b() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c && a && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
              return this.text().then(T)
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
            return this.forEach(function(t, r) {
              e.push(r)
            }), d(e)
          }, p.prototype.values = function() {
            var e = [];
            return this.forEach(function(t) {
              e.push(t)
            }), d(e)
          }, p.prototype.entries = function() {
            var e = [];
            return this.forEach(function(t, r) {
              e.push([r, t])
            }), d(e)
          }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var _ = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function E(e, t) {
            if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, i, o = (t = t || {}).body;
            if (e instanceof E) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), _.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in n) return (new AbortController).signal
              }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(o), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
              var a = /([?&])_=[^&]*/;
              a.test(this.url) ? this.url = this.url.replace(a, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
          }

          function T(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
              if (e) {
                var r = e.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  i = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(i))
              }
            }), t
          }

          function w(e, t) {
            if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
          }
          E.prototype.clone = function() {
            return new E(this, {
              body: this._bodyInit
            })
          }, b.call(E.prototype), b.call(w.prototype), w.prototype.clone = function() {
            return new w(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new p(this.headers),
              url: this.url
            })
          }, w.error = function() {
            var e = new w(null, {
              status: 200,
              statusText: ""
            });
            return e.ok = !1, e.status = 0, e.type = "error", e
          };
          var O = [301, 302, 303, 307, 308];
          w.redirect = function(e, t) {
            if (-1 === O.indexOf(t)) throw new RangeError("Invalid status code");
            return new w(null, {
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
            return new Promise(function(i, o) {
              var s = new E(e, r);
              if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
              var u = new XMLHttpRequest;

              function l() {
                u.abort()
              }
              if (u.onload = function() {
                  var e, t, r = {
                    statusText: u.statusText,
                    headers: (e = u.getAllResponseHeaders() || "", t = new p, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                      return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    }).forEach(function(e) {
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
                    }), t)
                  };
                  0 === s.url.indexOf("file://") && (u.status < 200 || u.status > 599) ? r.status = 200 : r.status = u.status, r.url = "responseURL" in u ? u.responseURL : r.headers.get("X-Request-URL");
                  var n = "response" in u ? u.response : u.responseText;
                  setTimeout(function() {
                    i(new w(n, r))
                  }, 0)
                }, u.onerror = function() {
                  setTimeout(function() {
                    o(new TypeError("Network request failed"))
                  }, 0)
                }, u.ontimeout = function() {
                  setTimeout(function() {
                    o(new TypeError("Network request timed out"))
                  }, 0)
                }, u.onabort = function() {
                  setTimeout(function() {
                    o(new t.DOMException("Aborted", "AbortError"))
                  }, 0)
                }, u.open(s.method, function(e) {
                  try {
                    return "" === e && n.location.href ? n.location.href : e
                  } catch (t) {
                    return e
                  }
                }(s.url), !0), "include" === s.credentials ? u.withCredentials = !0 : "omit" === s.credentials && (u.withCredentials = !1), "responseType" in u && (a ? u.responseType = "blob" : c && (u.responseType = "arraybuffer")), r && "object" == typeof r.headers && !(r.headers instanceof p || n.Headers && r.headers instanceof n.Headers)) {
                var d = [];
                Object.getOwnPropertyNames(r.headers).forEach(function(e) {
                  d.push(f(e)), u.setRequestHeader(e, h(r.headers[e]))
                }), s.headers.forEach(function(e, t) {
                  -1 === d.indexOf(t) && u.setRequestHeader(t, e)
                })
              } else s.headers.forEach(function(e, t) {
                u.setRequestHeader(t, e)
              });
              s.signal && (s.signal.addEventListener("abort", l), u.onreadystatechange = function() {
                4 === u.readyState && s.signal.removeEventListener("abort", l)
              }), u.send(void 0 === s._bodyInit ? null : s._bodyInit)
            })
          }
          k.polyfill = !0, n.fetch || (n.fetch = k, n.Headers = p, n.Request = E, n.Response = w), t.Headers = p, t.Request = E, t.Response = w, t.fetch = k
        }({})
      }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
    },
    3066(e, t, r) {
      "use strict";
      r.d(t, {
        J1: () => $
      });
      var n = r(1177);

      function i(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
      }
      const o = /\r\n|[\n\r]/g;

      function a(e, t) {
        let r = 0,
          n = 1;
        for (const a of e.body.matchAll(o)) {
          if ("number" == typeof a.index || i(!1), a.index >= t) break;
          r = a.index + a[0].length, n += 1
        }
        return {
          line: n,
          column: t + 1 - r
        }
      }

      function s(e) {
        return c(e.source, a(e.source, e.start))
      }

      function c(e, t) {
        const r = e.locationOffset.column - 1,
          n = "".padStart(r) + e.body,
          i = t.line - 1,
          o = e.locationOffset.line - 1,
          a = t.line + o,
          s = 1 === t.line ? r : 0,
          c = t.column + s,
          l = `${e.name}:${a}:${c}\n`,
          f = n.split(/\r\n|[\n\r]/g),
          h = f[i];
        if (h.length > 120) {
          const e = Math.floor(c / 80),
            t = c % 80,
            r = [];
          for (let e = 0; e < h.length; e += 80) r.push(h.slice(e, e + 80));
          return l + u([
            [`${a} |`, r[0]], ...r.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(t)],
            ["|", r[e + 1]]
          ])
        }
        return l + u([
          [a - 1 + " |", f[i - 1]],
          [`${a} |`, h],
          ["|", "^".padStart(c)],
          [`${a+1} |`, f[i + 1]]
        ])
      }

      function u(e) {
        const t = e.filter(([e, t]) => void 0 !== t),
          r = Math.max(...t.map(([e]) => e.length));
        return t.map(([e, t]) => e.padStart(r) + (t ? " " + t : "")).join("\n")
      }
      class l extends Error {
        constructor(e, ...t) {
          var r, n, i;
          const {
            nodes: o,
            source: s,
            positions: c,
            path: u,
            originalError: h,
            extensions: d
          } = function(e) {
            const t = e[0];
            return null == t || "kind" in t || "length" in t ? {
              nodes: t,
              source: e[1],
              positions: e[2],
              path: e[3],
              originalError: e[4],
              extensions: e[5]
            } : t
          }(t);
          super(e), this.name = "GraphQLError", this.path = null != u ? u : void 0, this.originalError = null != h ? h : void 0, this.nodes = f(Array.isArray(o) ? o : o ? [o] : void 0);
          const p = f(null === (r = this.nodes) || void 0 === r ? void 0 : r.map(e => e.loc).filter(e => null != e));
          this.source = null != s ? s : null == p || null === (n = p[0]) || void 0 === n ? void 0 : n.source, this.positions = null != c ? c : null == p ? void 0 : p.map(e => e.start), this.locations = c && s ? c.map(e => a(s, e)) : null == p ? void 0 : p.map(e => a(e.source, e.start));
          const v = "object" == typeof(y = null == h ? void 0 : h.extensions) && null !== y ? null == h ? void 0 : h.extensions : void 0;
          var y;
          this.extensions = null !== (i = null != d ? d : v) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
            message: {
              writable: !0,
              enumerable: !0
            },
            name: {
              enumerable: !1
            },
            nodes: {
              enumerable: !1
            },
            source: {
              enumerable: !1
            },
            positions: {
              enumerable: !1
            },
            originalError: {
              enumerable: !1
            }
          }), null != h && h.stack ? Object.defineProperty(this, "stack", {
            value: h.stack,
            writable: !0,
            configurable: !0
          }) : Error.captureStackTrace ? Error.captureStackTrace(this, l) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
          })
        }
        get[Symbol.toStringTag]() {
          return "GraphQLError"
        }
        toString() {
          let e = this.message;
          if (this.nodes)
            for (const t of this.nodes) t.loc && (e += "\n\n" + s(t.loc));
          else if (this.source && this.locations)
            for (const t of this.locations) e += "\n\n" + c(this.source, t);
          return e
        }
        toJSON() {
          const e = {
            message: this.message
          };
          return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
        }
      }

      function f(e) {
        return void 0 === e || 0 === e.length ? void 0 : e
      }

      function h(e, t, r) {
        return new l(`Syntax Error: ${r}`, {
          source: e,
          positions: [t]
        })
      }
      var d, p = r(404);
      ! function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(d || (d = {}));
      var v, y = r(5425),
        m = r(6368),
        g = r(9043);
      ! function(e) {
        e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
      }(v || (v = {}));
      class b {
        constructor(e) {
          const t = new p.ou(v.SOF, 0, 0, 0, 0);
          this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
        }
        get[Symbol.toStringTag]() {
          return "Lexer"
        }
        advance() {
          return this.lastToken = this.token, this.token = this.lookahead()
        }
        lookahead() {
          let e = this.token;
          if (e.kind !== v.EOF)
            do {
              if (e.next) e = e.next;
              else {
                const t = C(this, e.end);
                e.next = t, t.prev = e, e = t
              }
            } while (e.kind === v.COMMENT);
          return e
        }
      }

      function _(e) {
        return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
      }

      function E(e, t) {
        return T(e.charCodeAt(t)) && w(e.charCodeAt(t + 1))
      }

      function T(e) {
        return e >= 55296 && e <= 56319
      }

      function w(e) {
        return e >= 56320 && e <= 57343
      }

      function O(e, t) {
        const r = e.source.body.codePointAt(t);
        if (void 0 === r) return v.EOF;
        if (r >= 32 && r <= 126) {
          const e = String.fromCodePoint(r);
          return '"' === e ? "'\"'" : `"${e}"`
        }
        return "U+" + r.toString(16).toUpperCase().padStart(4, "0")
      }

      function k(e, t, r, n, i) {
        const o = e.line,
          a = 1 + r - e.lineStart;
        return new p.ou(t, r, n, o, a, i)
      }

      function C(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t;
        for (; i < n;) {
          const t = r.charCodeAt(i);
          switch (t) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++i;
              continue;
            case 10:
              ++i, ++e.line, e.lineStart = i;
              continue;
            case 13:
              10 === r.charCodeAt(i + 1) ? i += 2 : ++i, ++e.line, e.lineStart = i;
              continue;
            case 35:
              return x(e, i);
            case 33:
              return k(e, v.BANG, i, i + 1);
            case 36:
              return k(e, v.DOLLAR, i, i + 1);
            case 38:
              return k(e, v.AMP, i, i + 1);
            case 40:
              return k(e, v.PAREN_L, i, i + 1);
            case 41:
              return k(e, v.PAREN_R, i, i + 1);
            case 46:
              if (46 === r.charCodeAt(i + 1) && 46 === r.charCodeAt(i + 2)) return k(e, v.SPREAD, i, i + 3);
              break;
            case 58:
              return k(e, v.COLON, i, i + 1);
            case 61:
              return k(e, v.EQUALS, i, i + 1);
            case 64:
              return k(e, v.AT, i, i + 1);
            case 91:
              return k(e, v.BRACKET_L, i, i + 1);
            case 93:
              return k(e, v.BRACKET_R, i, i + 1);
            case 123:
              return k(e, v.BRACE_L, i, i + 1);
            case 124:
              return k(e, v.PIPE, i, i + 1);
            case 125:
              return k(e, v.BRACE_R, i, i + 1);
            case 34:
              return 34 === r.charCodeAt(i + 1) && 34 === r.charCodeAt(i + 2) ? F(e, i) : I(e, i)
          }
          if ((0, g.yp)(t) || 45 === t) return S(e, i, t);
          if ((0, g.un)(t)) return V(e, i);
          throw h(e.source, i, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : _(t) || E(r, i) ? `Unexpected character: ${O(e,i)}.` : `Invalid character: ${O(e,i)}.`)
        }
        return k(e, v.EOF, n, n)
      }

      function x(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1;
        for (; i < n;) {
          const e = r.charCodeAt(i);
          if (10 === e || 13 === e) break;
          if (_(e)) ++i;
          else {
            if (!E(r, i)) break;
            i += 2
          }
        }
        return k(e, v.COMMENT, t, i, r.slice(t + 1, i))
      }

      function S(e, t, r) {
        const n = e.source.body;
        let i = t,
          o = r,
          a = !1;
        if (45 === o && (o = n.charCodeAt(++i)), 48 === o) {
          if (o = n.charCodeAt(++i), (0, g.yp)(o)) throw h(e.source, i, `Invalid number, unexpected digit after 0: ${O(e,i)}.`)
        } else i = D(e, i, o), o = n.charCodeAt(i);
        if (46 === o && (a = !0, o = n.charCodeAt(++i), i = D(e, i, o), o = n.charCodeAt(i)), 69 !== o && 101 !== o || (a = !0, o = n.charCodeAt(++i), 43 !== o && 45 !== o || (o = n.charCodeAt(++i)), i = D(e, i, o), o = n.charCodeAt(i)), 46 === o || (0, g.un)(o)) throw h(e.source, i, `Invalid number, expected digit but got: ${O(e,i)}.`);
        return k(e, a ? v.FLOAT : v.INT, t, i, n.slice(t, i))
      }

      function D(e, t, r) {
        if (!(0, g.yp)(r)) throw h(e.source, t, `Invalid number, expected digit but got: ${O(e,t)}.`);
        const n = e.source.body;
        let i = t + 1;
        for (;
          (0, g.yp)(n.charCodeAt(i));) ++i;
        return i
      }

      function I(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1,
          o = i,
          a = "";
        for (; i < n;) {
          const n = r.charCodeAt(i);
          if (34 === n) return a += r.slice(o, i), k(e, v.STRING, t, i + 1, a);
          if (92 === n) {
            a += r.slice(o, i);
            const t = 117 === r.charCodeAt(i + 1) ? 123 === r.charCodeAt(i + 2) ? N(e, i) : A(e, i) : M(e, i);
            a += t.value, i += t.size, o = i;
            continue
          }
          if (10 === n || 13 === n) break;
          if (_(n)) ++i;
          else {
            if (!E(r, i)) throw h(e.source, i, `Invalid character within String: ${O(e,i)}.`);
            i += 2
          }
        }
        throw h(e.source, i, "Unterminated string.")
      }

      function N(e, t) {
        const r = e.source.body;
        let n = 0,
          i = 3;
        for (; i < 12;) {
          const e = r.charCodeAt(t + i++);
          if (125 === e) {
            if (i < 5 || !_(n)) break;
            return {
              value: String.fromCodePoint(n),
              size: i
            }
          }
          if (n = n << 4 | P(e), n < 0) break
        }
        throw h(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)
      }

      function A(e, t) {
        const r = e.source.body,
          n = R(r, t + 2);
        if (_(n)) return {
          value: String.fromCodePoint(n),
          size: 6
        };
        if (T(n) && 92 === r.charCodeAt(t + 6) && 117 === r.charCodeAt(t + 7)) {
          const e = R(r, t + 8);
          if (w(e)) return {
            value: String.fromCodePoint(n, e),
            size: 12
          }
        }
        throw h(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)
      }

      function R(e, t) {
        return P(e.charCodeAt(t)) << 12 | P(e.charCodeAt(t + 1)) << 8 | P(e.charCodeAt(t + 2)) << 4 | P(e.charCodeAt(t + 3))
      }

      function P(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
      }

      function M(e, t) {
        const r = e.source.body;
        switch (r.charCodeAt(t + 1)) {
          case 34:
            return {
              value: '"', size: 2
            };
          case 92:
            return {
              value: "\\", size: 2
            };
          case 47:
            return {
              value: "/", size: 2
            };
          case 98:
            return {
              value: "\b", size: 2
            };
          case 102:
            return {
              value: "\f", size: 2
            };
          case 110:
            return {
              value: "\n", size: 2
            };
          case 114:
            return {
              value: "\r", size: 2
            };
          case 116:
            return {
              value: "\t", size: 2
            }
        }
        throw h(e.source, t, `Invalid character escape sequence: "${r.slice(t,t+2)}".`)
      }

      function F(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = e.lineStart,
          o = t + 3,
          a = o,
          s = "";
        const c = [];
        for (; o < n;) {
          const n = r.charCodeAt(o);
          if (34 === n && 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2)) {
            s += r.slice(a, o), c.push(s);
            const n = k(e, v.BLOCK_STRING, t, o + 3, (0, m.OC)(c).join("\n"));
            return e.line += c.length - 1, e.lineStart = i, n
          }
          if (92 !== n || 34 !== r.charCodeAt(o + 1) || 34 !== r.charCodeAt(o + 2) || 34 !== r.charCodeAt(o + 3))
            if (10 !== n && 13 !== n)
              if (_(n)) ++o;
              else {
                if (!E(r, o)) throw h(e.source, o, `Invalid character within String: ${O(e,o)}.`);
                o += 2
              }
          else s += r.slice(a, o), c.push(s), 13 === n && 10 === r.charCodeAt(o + 1) ? o += 2 : ++o, s = "", a = o, i = o;
          else s += r.slice(a, o), a = o + 1, o += 4
        }
        throw h(e.source, o, "Unterminated string.")
      }

      function V(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1;
        for (; i < n;) {
          const e = r.charCodeAt(i);
          if (!(0, g.xr)(e)) break;
          ++i
        }
        return k(e, v.NAME, t, i, r.slice(t, i))
      }
      var L = r(3227),
        j = r(7196);
      const q = globalThis.process ? function(e, t) {
        return e instanceof t
      } : function(e, t) {
        if (e instanceof t) return !0;
        if ("object" == typeof e && null !== e) {
          var r;
          const n = t.prototype[Symbol.toStringTag];
          if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : null === (r = e.constructor) || void 0 === r ? void 0 : r.name)) {
            const t = (0, j.N)(e);
            throw new Error(`Cannot use ${n} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)
          }
        }
        return !1
      };
      class Q {
        constructor(e, t = "GraphQL request", r = {
          line: 1,
          column: 1
        }) {
          "string" == typeof e || (0, L.U)(!1, `Body must be a string. Received: ${(0,j.N)(e)}.`), this.body = e, this.name = t, this.locationOffset = r, this.locationOffset.line > 0 || (0, L.U)(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || (0, L.U)(!1, "column in locationOffset is 1-indexed and must be positive.")
        }
        get[Symbol.toStringTag]() {
          return "Source"
        }
      }
      class B {
        constructor(e, t = {}) {
          const {
            lexer: r,
            ...n
          } = t;
          if (r) this._lexer = r;
          else {
            const t = function(e) {
              return q(e, Q)
            }(e) ? e : new Q(e);
            this._lexer = new b(t)
          }
          this._options = n, this._tokenCounter = 0
        }
        get tokenCount() {
          return this._tokenCounter
        }
        parseName() {
          const e = this.expectToken(v.NAME);
          return this.node(e, {
            kind: y.b.NAME,
            value: e.value
          })
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: y.b.DOCUMENT,
            definitions: this.many(v.SOF, this.parseDefinition, v.EOF)
          })
        }
        parseDefinition() {
          if (this.peek(v.BRACE_L)) return this.parseOperationDefinition();
          const e = this.peekDescription(),
            t = e ? this._lexer.lookahead() : this._lexer.token;
          if (e && t.kind === v.BRACE_L) throw h(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
          if (t.kind === v.NAME) {
            switch (t.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition()
            }
            switch (t.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition()
            }
            if (e) throw h(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
            if ("extend" === t.value) return this.parseTypeSystemExtension()
          }
          throw this.unexpected(t)
        }
        parseOperationDefinition() {
          const e = this._lexer.token;
          if (this.peek(v.BRACE_L)) return this.node(e, {
            kind: y.b.OPERATION_DEFINITION,
            operation: p.cE.QUERY,
            description: void 0,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
          const t = this.parseDescription(),
            r = this.parseOperationType();
          let n;
          return this.peek(v.NAME) && (n = this.parseName()), this.node(e, {
            kind: y.b.OPERATION_DEFINITION,
            operation: r,
            description: t,
            name: n,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseOperationType() {
          const e = this.expectToken(v.NAME);
          switch (e.value) {
            case "query":
              return p.cE.QUERY;
            case "mutation":
              return p.cE.MUTATION;
            case "subscription":
              return p.cE.SUBSCRIPTION
          }
          throw this.unexpected(e)
        }
        parseVariableDefinitions() {
          return this.optionalMany(v.PAREN_L, this.parseVariableDefinition, v.PAREN_R)
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: y.b.VARIABLE_DEFINITION,
            description: this.parseDescription(),
            variable: this.parseVariable(),
            type: (this.expectToken(v.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(v.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          })
        }
        parseVariable() {
          const e = this._lexer.token;
          return this.expectToken(v.DOLLAR), this.node(e, {
            kind: y.b.VARIABLE,
            name: this.parseName()
          })
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: y.b.SELECTION_SET,
            selections: this.many(v.BRACE_L, this.parseSelection, v.BRACE_R)
          })
        }
        parseSelection() {
          return this.peek(v.SPREAD) ? this.parseFragment() : this.parseField()
        }
        parseField() {
          const e = this._lexer.token,
            t = this.parseName();
          let r, n;
          return this.expectOptionalToken(v.COLON) ? (r = t, n = this.parseName()) : n = t, this.node(e, {
            kind: y.b.FIELD,
            alias: r,
            name: n,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(v.BRACE_L) ? this.parseSelectionSet() : void 0
          })
        }
        parseArguments(e) {
          const t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(v.PAREN_L, t, v.PAREN_R)
        }
        parseArgument(e = !1) {
          const t = this._lexer.token,
            r = this.parseName();
          return this.expectToken(v.COLON), this.node(t, {
            kind: y.b.ARGUMENT,
            name: r,
            value: this.parseValueLiteral(e)
          })
        }
        parseConstArgument() {
          return this.parseArgument(!0)
        }
        parseFragment() {
          const e = this._lexer.token;
          this.expectToken(v.SPREAD);
          const t = this.expectOptionalKeyword("on");
          return !t && this.peek(v.NAME) ? this.node(e, {
            kind: y.b.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          }) : this.node(e, {
            kind: y.b.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          return this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables ? this.node(e, {
            kind: y.b.FRAGMENT_DEFINITION,
            description: t,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(e, {
            kind: y.b.FRAGMENT_DEFINITION,
            description: t,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentName() {
          if ("on" === this._lexer.token.value) throw this.unexpected();
          return this.parseName()
        }
        parseValueLiteral(e) {
          const t = this._lexer.token;
          switch (t.kind) {
            case v.BRACKET_L:
              return this.parseList(e);
            case v.BRACE_L:
              return this.parseObject(e);
            case v.INT:
              return this.advanceLexer(), this.node(t, {
                kind: y.b.INT,
                value: t.value
              });
            case v.FLOAT:
              return this.advanceLexer(), this.node(t, {
                kind: y.b.FLOAT,
                value: t.value
              });
            case v.STRING:
            case v.BLOCK_STRING:
              return this.parseStringLiteral();
            case v.NAME:
              switch (this.advanceLexer(), t.value) {
                case "true":
                  return this.node(t, {
                    kind: y.b.BOOLEAN,
                    value: !0
                  });
                case "false":
                  return this.node(t, {
                    kind: y.b.BOOLEAN,
                    value: !1
                  });
                case "null":
                  return this.node(t, {
                    kind: y.b.NULL
                  });
                default:
                  return this.node(t, {
                    kind: y.b.ENUM,
                    value: t.value
                  })
              }
            case v.DOLLAR:
              if (e) {
                if (this.expectToken(v.DOLLAR), this._lexer.token.kind === v.NAME) {
                  const e = this._lexer.token.value;
                  throw h(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
                }
                throw this.unexpected(t)
              }
              return this.parseVariable();
            default:
              throw this.unexpected()
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(!0)
        }
        parseStringLiteral() {
          const e = this._lexer.token;
          return this.advanceLexer(), this.node(e, {
            kind: y.b.STRING,
            value: e.value,
            block: e.kind === v.BLOCK_STRING
          })
        }
        parseList(e) {
          return this.node(this._lexer.token, {
            kind: y.b.LIST,
            values: this.any(v.BRACKET_L, () => this.parseValueLiteral(e), v.BRACKET_R)
          })
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: y.b.OBJECT,
            fields: this.any(v.BRACE_L, () => this.parseObjectField(e), v.BRACE_R)
          })
        }
        parseObjectField(e) {
          const t = this._lexer.token,
            r = this.parseName();
          return this.expectToken(v.COLON), this.node(t, {
            kind: y.b.OBJECT_FIELD,
            name: r,
            value: this.parseValueLiteral(e)
          })
        }
        parseDirectives(e) {
          const t = [];
          for (; this.peek(v.AT);) t.push(this.parseDirective(e));
          return t
        }
        parseConstDirectives() {
          return this.parseDirectives(!0)
        }
        parseDirective(e) {
          const t = this._lexer.token;
          return this.expectToken(v.AT), this.node(t, {
            kind: y.b.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(e)
          })
        }
        parseTypeReference() {
          const e = this._lexer.token;
          let t;
          if (this.expectOptionalToken(v.BRACKET_L)) {
            const r = this.parseTypeReference();
            this.expectToken(v.BRACKET_R), t = this.node(e, {
              kind: y.b.LIST_TYPE,
              type: r
            })
          } else t = this.parseNamedType();
          return this.expectOptionalToken(v.BANG) ? this.node(e, {
            kind: y.b.NON_NULL_TYPE,
            type: t
          }) : t
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: y.b.NAMED_TYPE,
            name: this.parseName()
          })
        }
        peekDescription() {
          return this.peek(v.STRING) || this.peek(v.BLOCK_STRING)
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral()
        }
        parseSchemaDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("schema");
          const r = this.parseConstDirectives(),
            n = this.many(v.BRACE_L, this.parseOperationTypeDefinition, v.BRACE_R);
          return this.node(e, {
            kind: y.b.SCHEMA_DEFINITION,
            description: t,
            directives: r,
            operationTypes: n
          })
        }
        parseOperationTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(v.COLON);
          const r = this.parseNamedType();
          return this.node(e, {
            kind: y.b.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: r
          })
        }
        parseScalarTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("scalar");
          const r = this.parseName(),
            n = this.parseConstDirectives();
          return this.node(e, {
            kind: y.b.SCALAR_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n
          })
        }
        parseObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("type");
          const r = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
          return this.node(e, {
            kind: y.b.OBJECT_TYPE_DEFINITION,
            description: t,
            name: r,
            interfaces: n,
            directives: i,
            fields: o
          })
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany(v.AMP, this.parseNamedType) : []
        }
        parseFieldsDefinition() {
          return this.optionalMany(v.BRACE_L, this.parseFieldDefinition, v.BRACE_R)
        }
        parseFieldDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            r = this.parseName(),
            n = this.parseArgumentDefs();
          this.expectToken(v.COLON);
          const i = this.parseTypeReference(),
            o = this.parseConstDirectives();
          return this.node(e, {
            kind: y.b.FIELD_DEFINITION,
            description: t,
            name: r,
            arguments: n,
            type: i,
            directives: o
          })
        }
        parseArgumentDefs() {
          return this.optionalMany(v.PAREN_L, this.parseInputValueDef, v.PAREN_R)
        }
        parseInputValueDef() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            r = this.parseName();
          this.expectToken(v.COLON);
          const n = this.parseTypeReference();
          let i;
          this.expectOptionalToken(v.EQUALS) && (i = this.parseConstValueLiteral());
          const o = this.parseConstDirectives();
          return this.node(e, {
            kind: y.b.INPUT_VALUE_DEFINITION,
            description: t,
            name: r,
            type: n,
            defaultValue: i,
            directives: o
          })
        }
        parseInterfaceTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("interface");
          const r = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
          return this.node(e, {
            kind: y.b.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: r,
            interfaces: n,
            directives: i,
            fields: o
          })
        }
        parseUnionTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("union");
          const r = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseUnionMemberTypes();
          return this.node(e, {
            kind: y.b.UNION_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n,
            types: i
          })
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(v.EQUALS) ? this.delimitedMany(v.PIPE, this.parseNamedType) : []
        }
        parseEnumTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("enum");
          const r = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseEnumValuesDefinition();
          return this.node(e, {
            kind: y.b.ENUM_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n,
            values: i
          })
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(v.BRACE_L, this.parseEnumValueDefinition, v.BRACE_R)
        }
        parseEnumValueDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            r = this.parseEnumValueName(),
            n = this.parseConstDirectives();
          return this.node(e, {
            kind: y.b.ENUM_VALUE_DEFINITION,
            description: t,
            name: r,
            directives: n
          })
        }
        parseEnumValueName() {
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw h(this._lexer.source, this._lexer.token.start, `${U(this._lexer.token)} is reserved and cannot be used for an enum value.`);
          return this.parseName()
        }
        parseInputObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("input");
          const r = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseInputFieldsDefinition();
          return this.node(e, {
            kind: y.b.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n,
            fields: i
          })
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(v.BRACE_L, this.parseInputValueDef, v.BRACE_R)
        }
        parseTypeSystemExtension() {
          const e = this._lexer.lookahead();
          if (e.kind === v.NAME) switch (e.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension()
          }
          throw this.unexpected(e)
        }
        parseSchemaExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("schema");
          const t = this.parseConstDirectives(),
            r = this.optionalMany(v.BRACE_L, this.parseOperationTypeDefinition, v.BRACE_R);
          if (0 === t.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: r
          })
        }
        parseScalarTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("scalar");
          const t = this.parseName(),
            r = this.parseConstDirectives();
          if (0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: r
          })
        }
        parseObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("type");
          const t = this.parseName(),
            r = this.parseImplementsInterfaces(),
            n = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === r.length && 0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          })
        }
        parseInterfaceTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          const t = this.parseName(),
            r = this.parseImplementsInterfaces(),
            n = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === r.length && 0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          })
        }
        parseUnionTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("union");
          const t = this.parseName(),
            r = this.parseConstDirectives(),
            n = this.parseUnionMemberTypes();
          if (0 === r.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.UNION_TYPE_EXTENSION,
            name: t,
            directives: r,
            types: n
          })
        }
        parseEnumTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("enum");
          const t = this.parseName(),
            r = this.parseConstDirectives(),
            n = this.parseEnumValuesDefinition();
          if (0 === r.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.ENUM_TYPE_EXTENSION,
            name: t,
            directives: r,
            values: n
          })
        }
        parseInputObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("input");
          const t = this.parseName(),
            r = this.parseConstDirectives(),
            n = this.parseInputFieldsDefinition();
          if (0 === r.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: y.b.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: r,
            fields: n
          })
        }
        parseDirectiveDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken(v.AT);
          const r = this.parseName(),
            n = this.parseArgumentDefs(),
            i = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          const o = this.parseDirectiveLocations();
          return this.node(e, {
            kind: y.b.DIRECTIVE_DEFINITION,
            description: t,
            name: r,
            arguments: n,
            repeatable: i,
            locations: o
          })
        }
        parseDirectiveLocations() {
          return this.delimitedMany(v.PIPE, this.parseDirectiveLocation)
        }
        parseDirectiveLocation() {
          const e = this._lexer.token,
            t = this.parseName();
          if (Object.prototype.hasOwnProperty.call(d, t.value)) return t;
          throw this.unexpected(e)
        }
        parseSchemaCoordinate() {
          const e = this._lexer.token,
            t = this.expectOptionalToken(v.AT),
            r = this.parseName();
          let n, i;
          return !t && this.expectOptionalToken(v.DOT) && (n = this.parseName()), (t || n) && this.expectOptionalToken(v.PAREN_L) && (i = this.parseName(), this.expectToken(v.COLON), this.expectToken(v.PAREN_R)), t ? i ? this.node(e, {
            kind: y.b.DIRECTIVE_ARGUMENT_COORDINATE,
            name: r,
            argumentName: i
          }) : this.node(e, {
            kind: y.b.DIRECTIVE_COORDINATE,
            name: r
          }) : n ? i ? this.node(e, {
            kind: y.b.ARGUMENT_COORDINATE,
            name: r,
            fieldName: n,
            argumentName: i
          }) : this.node(e, {
            kind: y.b.MEMBER_COORDINATE,
            name: r,
            memberName: n
          }) : this.node(e, {
            kind: y.b.TYPE_COORDINATE,
            name: r
          })
        }
        node(e, t) {
          return !0 !== this._options.noLocation && (t.loc = new p.aZ(e, this._lexer.lastToken, this._lexer.source)), t
        }
        peek(e) {
          return this._lexer.token.kind === e
        }
        expectToken(e) {
          const t = this._lexer.token;
          if (t.kind === e) return this.advanceLexer(), t;
          throw h(this._lexer.source, t.start, `Expected ${z(e)}, found ${U(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== v.NAME || t.value !== e) throw h(this._lexer.source, t.start, `Expected "${e}", found ${U(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === v.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return h(this._lexer.source, t.start, `Unexpected ${U(t)}.`)
        }
        any(e, t, r) {
          this.expectToken(e);
          const n = [];
          for (; !this.expectOptionalToken(r);) n.push(t.call(this));
          return n
        }
        optionalMany(e, t, r) {
          if (this.expectOptionalToken(e)) {
            const e = [];
            do {
              e.push(t.call(this))
            } while (!this.expectOptionalToken(r));
            return e
          }
          return []
        }
        many(e, t, r) {
          this.expectToken(e);
          const n = [];
          do {
            n.push(t.call(this))
          } while (!this.expectOptionalToken(r));
          return n
        }
        delimitedMany(e, t) {
          this.expectOptionalToken(e);
          const r = [];
          do {
            r.push(t.call(this))
          } while (this.expectOptionalToken(e));
          return r
        }
        advanceLexer() {
          const {
            maxTokens: e
          } = this._options, t = this._lexer.advance();
          if (t.kind !== v.EOF && (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)) throw h(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function U(e) {
        const t = e.value;
        return z(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function z(e) {
        return function(e) {
          return e === v.BANG || e === v.DOLLAR || e === v.AMP || e === v.PAREN_L || e === v.PAREN_R || e === v.DOT || e === v.SPREAD || e === v.COLON || e === v.EQUALS || e === v.AT || e === v.BRACKET_L || e === v.BRACKET_R || e === v.BRACE_L || e === v.PIPE || e === v.BRACE_R
        }(e) ? `"${e}"` : e
      }
      var Y = new Map,
        W = new Map,
        G = !0,
        K = !1;

      function H(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function X(e) {
        var t = H(e);
        if (!Y.has(t)) {
          var r = function(e, t) {
            const r = new B(e, t),
              n = r.parseDocument();
            return Object.defineProperty(n, "tokenCount", {
              enumerable: !1,
              value: r.tokenCount
            }), n
          }(e, {
            experimentalFragmentVariables: K,
            allowLegacyFragmentVariables: K
          });
          if (!r || "Document" !== r.kind) throw new Error("Not a valid GraphQL document.");
          Y.set(t, function(e) {
            var t = new Set(e.definitions);
            t.forEach(function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach(function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              })
            });
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }(function(e) {
            var t = new Set,
              r = [];
            return e.definitions.forEach(function(e) {
              if ("FragmentDefinition" === e.kind) {
                var n = e.name.value,
                  i = H((a = e.loc).source.body.substring(a.start, a.end)),
                  o = W.get(n);
                o && !o.has(i) ? G && console.warn("Warning: fragment with name " + n + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || W.set(n, o = new Set), o.add(i), t.has(i) || (t.add(i), r.push(e))
              } else r.push(e);
              var a
            }), (0, n.Cl)((0, n.Cl)({}, e), {
              definitions: r
            })
          }(r)))
        }
        return Y.get(t)
      }

      function $(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach(function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        }), X(n)
      }
      var J, Z = $;
      (J = $ || ($ = {})).gql = Z, J.resetCaches = function() {
        Y.clear(), W.clear()
      }, J.disableFragmentWarnings = function() {
        G = !1
      }, J.enableExperimentalFragmentVariables = function() {
        K = !0
      }, J.disableExperimentalFragmentVariables = function() {
        K = !1
      }, $.default = $
    },
    7978(e, t, r) {
      "use strict";

      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      r.d(t, {
        u: () => cr
      });
      var i, o, a, s, c, u, l, f, h, d, p, v, y, m = function() {
          return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        },
        g = 1,
        b = [],
        _ = [],
        E = [],
        T = Date.now,
        w = function(e, t) {
          return t
        },
        O = function(e, t) {
          return ~E.indexOf(e) && E[E.indexOf(e) + 1][t]
        },
        k = function(e) {
          return !!~d.indexOf(e)
        },
        C = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !1 !== n,
            capture: !!i
          })
        },
        x = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        S = "scrollLeft",
        D = "scrollTop",
        I = function() {
          return p && p.isPressed || _.cache++
        },
        N = function(e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              g && (a.history.scrollRestoration = "manual");
              var i = p && p.isPressed;
              n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0), e(n), r.cacheID = _.cache, i && w("ss", n)
            } else(t || _.cache !== r.cacheID || w("ref")) && (r.cacheID = _.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        A = {
          s: S,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: N(function(e) {
            return arguments.length ? a.scrollTo(e, R.sc()) : a.pageXOffset || s[S] || c[S] || u[S] || 0
          })
        },
        R = {
          s: D,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: A,
          sc: N(function(e) {
            return arguments.length ? a.scrollTo(A.sc(), e) : a.pageYOffset || s[D] || c[D] || u[D] || 0
          })
        },
        P = function(e, t) {
          return (t && t._ctx && t._ctx.selector || i.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        M = function(e, t) {
          var r = t.s,
            n = t.sc;
          k(e) && (e = s.scrollingElement || c);
          var o = _.indexOf(e),
            a = n === R.sc ? 1 : 2;
          !~o && (o = _.push(e) - 1), _[o + a] || C(e, "scroll", I);
          var u = _[o + a],
            l = u || (_[o + a] = N(O(e, r), !0) || (k(e) ? n : N(function(t) {
              return arguments.length ? e[r] = t : e[r]
            })));
          return l.target = e, u || (l.smooth = "smooth" === i.getProperty(e, "scrollBehavior")), l
        },
        F = function(e, t, r) {
          var n = e,
            i = e,
            o = T(),
            a = o,
            s = t || 50,
            c = Math.max(500, 3 * s),
            u = function(e, t) {
              var c = T();
              t || c - o > s ? (i = n, n = e, a = o, o = c) : r ? n += e : n = i + (e - i) / (c - a) * (o - a)
            };
          return {
            update: u,
            reset: function() {
              i = n = r ? 0 : n, a = o = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = i,
                l = T();
              return (e || 0 === e) && e !== n && u(e), o === a || l - a > c ? 0 : (n + (r ? s : -s)) / ((r ? l : o) - t) * 1e3
            }
          }
        },
        V = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        L = function(e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        j = function() {
          var e, t, r, n;
          (h = i.core.globals().ScrollTrigger) && h.core && (e = h.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, _), n.push.apply(n, E), _ = r, E = n, w = function(e, r) {
            return t[e](r)
          })
        },
        q = function(e) {
          return i = e || m(), !o && i && "undefined" != typeof document && document.body && (a = window, s = document, c = s.documentElement, u = s.body, d = [a, s, c, u], i.utils.clamp, y = i.core.context || function() {}, f = "onpointerenter" in u ? "pointer" : "mouse", l = Q.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, v = Q.eventTypes = ("ontouchstart" in c ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in c ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return g = 0
          }, 500), j(), o = 1), o
        };
      A.op = R, _.cache = 0;
      var Q = function() {
        function e(e) {
          this.init(e)
        }
        var t, r;
        return e.prototype.init = function(e) {
          o || q(i) || console.warn("Please gsap.registerPlugin(Observer)"), h || j();
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            d = e.target,
            m = e.lineHeight,
            g = e.debounce,
            _ = e.preventDefault,
            E = e.onStop,
            w = e.onStopDelay,
            O = e.ignore,
            S = e.wheelSpeed,
            D = e.event,
            N = e.onDragStart,
            Q = e.onDragEnd,
            B = e.onDrag,
            U = e.onPress,
            z = e.onRelease,
            Y = e.onRight,
            W = e.onLeft,
            G = e.onUp,
            K = e.onDown,
            H = e.onChangeX,
            X = e.onChangeY,
            $ = e.onChange,
            J = e.onToggleX,
            Z = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            re = e.onMove,
            ne = e.ignoreCheck,
            ie = e.isNormalizer,
            oe = e.onGestureStart,
            ae = e.onGestureEnd,
            se = e.onWheel,
            ce = e.onEnable,
            ue = e.onDisable,
            le = e.onClick,
            fe = e.scrollSpeed,
            he = e.capture,
            de = e.allowClicks,
            pe = e.lockAxis,
            ve = e.onLockAxis;
          this.target = d = P(d) || c, this.vars = e, O && (O = i.utils.toArray(O)), t = t || 1e-9, r = r || 0, S = S || 1, fe = fe || 1, n = n || "wheel,touch,pointer", g = !1 !== g, m || (m = parseFloat(a.getComputedStyle(u).lineHeight) || 22);
          var ye, me, ge, be, _e, Ee, Te, we = this,
            Oe = 0,
            ke = 0,
            Ce = e.passive || !_,
            xe = M(d, A),
            Se = M(d, R),
            De = xe(),
            Ie = Se(),
            Ne = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === v[0],
            Ae = k(d),
            Re = d.ownerDocument || s,
            Pe = [0, 0, 0],
            Me = [0, 0, 0],
            Fe = 0,
            Ve = function() {
              return Fe = T()
            },
            Le = function(e, t) {
              return (we.event = e) && O && ~O.indexOf(e.target) || t && Ne && "touch" !== e.pointerType || ne && ne(e, t)
            },
            je = function() {
              var e = we.deltaX = L(Pe),
                r = we.deltaY = L(Me),
                n = Math.abs(e) >= t,
                i = Math.abs(r) >= t;
              $ && (n || i) && $(we, e, r, Pe, Me), n && (Y && we.deltaX > 0 && Y(we), W && we.deltaX < 0 && W(we), H && H(we), J && we.deltaX < 0 != Oe < 0 && J(we), Oe = we.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), i && (K && we.deltaY > 0 && K(we), G && we.deltaY < 0 && G(we), X && X(we), Z && we.deltaY < 0 != ke < 0 && Z(we), ke = we.deltaY, Me[0] = Me[1] = Me[2] = 0), (be || ge) && (re && re(we), ge && (B(we), ge = !1), be = !1), Ee && !(Ee = !1) && ve && ve(we), _e && (se(we), _e = !1), ye = 0
            },
            qe = function(e, t, r) {
              Pe[r] += e, Me[r] += t, we._vx.update(e), we._vy.update(t), g ? ye || (ye = requestAnimationFrame(je)) : je()
            },
            Qe = function(e, t) {
              pe && !Te && (we.axis = Te = Math.abs(e) > Math.abs(t) ? "x" : "y", Ee = !0), "y" !== Te && (Pe[2] += e, we._vx.update(e, !0)), "x" !== Te && (Me[2] += t, we._vy.update(t, !0)), g ? ye || (ye = requestAnimationFrame(je)) : je()
            },
            Be = function(e) {
              if (!Le(e, 1)) {
                var t = (e = V(e, _)).clientX,
                  n = e.clientY,
                  i = t - we.x,
                  o = n - we.y,
                  a = we.isDragging;
                we.x = t, we.y = n, (a || Math.abs(we.startX - t) >= r || Math.abs(we.startY - n) >= r) && (B && (ge = !0), a || (we.isDragging = !0), Qe(i, o), a || N && N(we))
              }
            },
            Ue = we.onPress = function(e) {
              Le(e, 1) || e && e.button || (we.axis = Te = null, me.pause(), we.isPressed = !0, e = V(e), Oe = ke = 0, we.startX = we.x = e.clientX, we.startY = we.y = e.clientY, we._vx.reset(), we._vy.reset(), C(ie ? d : Re, v[1], Be, Ce, !0), we.deltaX = we.deltaY = 0, U && U(we))
            },
            ze = we.onRelease = function(e) {
              if (!Le(e, 1)) {
                x(ie ? d : Re, v[1], Be, !0);
                var t = !isNaN(we.y - we.startY),
                  r = we.isDragging,
                  n = r && (Math.abs(we.x - we.startX) > 3 || Math.abs(we.y - we.startY) > 3),
                  o = V(e);
                !n && t && (we._vx.reset(), we._vy.reset(), _ && de && i.delayedCall(.08, function() {
                  if (T() - Fe > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Re.createEvent) {
                    var t = Re.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), we.isDragging = we.isGesturing = we.isPressed = !1, E && r && !ie && me.restart(!0), Q && r && Q(we), z && z(we, n)
              }
            },
            Ye = function(e) {
              return e.touches && e.touches.length > 1 && (we.isGesturing = !0) && oe(e, we.isDragging)
            },
            We = function() {
              return (we.isGesturing = !1) || ae(we)
            },
            Ge = function(e) {
              if (!Le(e)) {
                var t = xe(),
                  r = Se();
                qe((t - De) * fe, (r - Ie) * fe, 1), De = t, Ie = r, E && me.restart(!0)
              }
            },
            Ke = function(e) {
              if (!Le(e)) {
                e = V(e, _), se && (_e = !0);
                var t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? a.innerHeight : 1) * S;
                qe(e.deltaX * t, e.deltaY * t, 0), E && !ie && me.restart(!0)
              }
            },
            He = function(e) {
              if (!Le(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - we.x,
                  i = r - we.y;
                we.x = t, we.y = r, be = !0, E && me.restart(!0), (n || i) && Qe(n, i)
              }
            },
            Xe = function(e) {
              we.event = e, ee(we)
            },
            $e = function(e) {
              we.event = e, te(we)
            },
            Je = function(e) {
              return Le(e) || V(e, _) && le(we)
            };
          me = we._dc = i.delayedCall(w || .25, function() {
            we._vx.reset(), we._vy.reset(), me.pause(), E && E(we)
          }).pause(), we.deltaX = we.deltaY = 0, we._vx = F(0, 50, !0), we._vy = F(0, 50, !0), we.scrollX = xe, we.scrollY = Se, we.isDragging = we.isGesturing = we.isPressed = !1, y(this), we.enable = function(e) {
            return we.isEnabled || (C(Ae ? Re : d, "scroll", I), n.indexOf("scroll") >= 0 && C(Ae ? Re : d, "scroll", Ge, Ce, he), n.indexOf("wheel") >= 0 && C(d, "wheel", Ke, Ce, he), (n.indexOf("touch") >= 0 && l || n.indexOf("pointer") >= 0) && (C(d, v[0], Ue, Ce, he), C(Re, v[2], ze), C(Re, v[3], ze), de && C(d, "click", Ve, !0, !0), le && C(d, "click", Je), oe && C(Re, "gesturestart", Ye), ae && C(Re, "gestureend", We), ee && C(d, f + "enter", Xe), te && C(d, f + "leave", $e), re && C(d, f + "move", He)), we.isEnabled = !0, e && e.type && Ue(e), ce && ce(we)), we
          }, we.disable = function() {
            we.isEnabled && (b.filter(function(e) {
              return e !== we && k(e.target)
            }).length || x(Ae ? Re : d, "scroll", I), we.isPressed && (we._vx.reset(), we._vy.reset(), x(ie ? d : Re, v[1], Be, !0)), x(Ae ? Re : d, "scroll", Ge, he), x(d, "wheel", Ke, he), x(d, v[0], Ue, he), x(Re, v[2], ze), x(Re, v[3], ze), x(d, "click", Ve, !0), x(d, "click", Je), x(Re, "gesturestart", Ye), x(Re, "gestureend", We), x(d, f + "enter", Xe), x(d, f + "leave", $e), x(d, f + "move", He), we.isEnabled = we.isPressed = we.isDragging = !1, ue && ue(we))
          }, we.kill = we.revert = function() {
            we.disable();
            var e = b.indexOf(we);
            e >= 0 && b.splice(e, 1), p === we && (p = 0)
          }, b.push(we), ie && k(d) && (p = we), we.enable(D)
        }, t = e, (r = [{
          key: "velocityX",
          get: function() {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function() {
            return this._vy.getVelocity()
          }
        }]) && n(t.prototype, r), e
      }();
      Q.version = "3.12.5", Q.create = function(e) {
        return new Q(e)
      }, Q.register = q, Q.getAll = function() {
        return b.slice()
      }, Q.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, m() && i.registerPlugin(Q);
      var B, U, z, Y, W, G, K, H, X, $, J, Z, ee, te, re, ne, ie, oe, ae, se, ce, ue, le, fe, he, de, pe, ve, ye, me, ge, be, _e, Ee, Te, we, Oe, ke, Ce = 1,
        xe = Date.now,
        Se = xe(),
        De = 0,
        Ie = 0,
        Ne = function(e, t, r) {
          var n = Ye(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Ae = function(e, t) {
          return !t || Ye(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Re = function e() {
          return Ie && requestAnimationFrame(e)
        },
        Pe = function() {
          return te = 1
        },
        Me = function() {
          return te = 0
        },
        Fe = function(e) {
          return e
        },
        Ve = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Le = function() {
          return "undefined" != typeof window
        },
        je = function() {
          return B || Le() && (B = window.gsap) && B.registerPlugin && B
        },
        qe = function(e) {
          return !!~K.indexOf(e)
        },
        Qe = function(e) {
          return ("Height" === e ? ge : z["inner" + e]) || W["client" + e] || G["client" + e]
        },
        Be = function(e) {
          return O(e, "getBoundingClientRect") || (qe(e) ? function() {
            return tr.width = z.innerWidth, tr.height = ge, tr
          } : function() {
            return pt(e)
          })
        },
        Ue = function(e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(0, (r = "scroll" + n) && (o = O(e, r)) ? o() - Be(e)()[i] : qe(e) ? (W[r] || G[r]) - Qe(n) : e[r] - e["offset" + n])
        },
        ze = function(e, t) {
          for (var r = 0; r < ae.length; r += 3)(!t || ~t.indexOf(ae[r + 1])) && e(ae[r], ae[r + 1], ae[r + 2])
        },
        Ye = function(e) {
          return "string" == typeof e
        },
        We = function(e) {
          return "function" == typeof e
        },
        Ge = function(e) {
          return "number" == typeof e
        },
        Ke = function(e) {
          return "object" == typeof e
        },
        He = function(e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause()
        },
        Xe = function(e, t) {
          if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        $e = Math.abs,
        Je = "left",
        Ze = "right",
        et = "bottom",
        tt = "width",
        rt = "height",
        nt = "Right",
        it = "Left",
        ot = "Top",
        at = "Bottom",
        st = "padding",
        ct = "margin",
        ut = "Width",
        lt = "Height",
        ft = "px",
        ht = function(e) {
          return z.getComputedStyle(e)
        },
        dt = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        pt = function(e, t) {
          var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ht(e)[re] && B.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            n = e.getBoundingClientRect();
          return r && r.progress(0).kill(), n
        },
        vt = function(e, t) {
          var r = t.d2;
          return e["offset" + r] || e["client" + r] || 0
        },
        yt = function(e) {
          var t, r = [],
            n = e.labels,
            i = e.duration();
          for (t in n) r.push(n[t] / i);
          return r
        },
        mt = function(e) {
          var t = B.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(function(e, t) {
              return e - t
            });
          return r ? function(e, n, i) {
            var o;
            if (void 0 === i && (i = .001), !n) return t(e);
            if (n > 0) {
              for (e -= i, o = 0; o < r.length; o++)
                if (r[o] >= e) return r[o];
              return r[o - 1]
            }
            for (o = r.length, e += i; o--;)
              if (r[o] <= e) return r[o];
            return r[0]
          } : function(r, n, i) {
            void 0 === i && (i = .001);
            var o = t(r);
            return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : t(n < 0 ? r - e : r + e)
          }
        },
        gt = function(e, t, r, n) {
          return r.split(",").forEach(function(r) {
            return e(t, r, n)
          })
        },
        bt = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
          })
        },
        _t = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        Et = function(e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        Tt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        wt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Ot = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        kt = function(e, t) {
          if (Ye(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in Ot ? Ot[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Ct = function(e, t, r, n, i, o, a, s) {
          var c = i.startColor,
            u = i.endColor,
            l = i.fontSize,
            f = i.indent,
            h = i.fontWeight,
            d = Y.createElement("div"),
            p = qe(r) || "fixed" === O(r, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            y = p ? G : r,
            m = -1 !== e.indexOf("start"),
            g = m ? c : u,
            b = "border-color:" + g + ";font-size:" + l + ";color:" + g + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || s) && p ? "fixed;" : "absolute;"), (v || s || !p) && (b += (n === R ? Ze : et) + ":" + (o + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = m, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), d.style.cssText = b, d.innerText = t || 0 === t ? e + "-" + t : e, y.children[0] ? y.insertBefore(d, y.children[0]) : y.appendChild(d), d._offset = d["offset" + n.op.d2], xt(d, 0, n, m), d
        },
        xt = function(e, t, r, n) {
          var i = {
              display: "block"
            },
            o = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + ut] = 1, i["border" + a + ut] = 0, i[r.p] = t + "px", B.set(e, i)
        },
        St = [],
        Dt = {},
        It = function() {
          return xe() - De > 34 && (Te || (Te = requestAnimationFrame(Kt)))
        },
        Nt = function() {
          (!le || !le.isPressed || le.startX > G.clientWidth) && (_.cache++, le ? Te || (Te = requestAnimationFrame(Kt)) : Kt(), De || Vt("scrollStart"), De = xe())
        },
        At = function() {
          de = z.innerWidth, he = z.innerHeight
        },
        Rt = function() {
          _.cache++, !ee && !ue && !Y.fullscreenElement && !Y.webkitFullscreenElement && (!fe || de !== z.innerWidth || Math.abs(z.innerHeight - he) > .25 * z.innerHeight) && H.restart(!0)
        },
        Pt = {},
        Mt = [],
        Ft = function e() {
          return _t(cr, "scrollEnd", e) || Yt(!0)
        },
        Vt = function(e) {
          return Pt[e] && Pt[e].map(function(e) {
            return e()
          }) || Mt
        },
        Lt = [],
        jt = function(e) {
          for (var t = 0; t < Lt.length; t += 5)(!e || Lt[t + 4] && Lt[t + 4].query === e) && (Lt[t].style.cssText = Lt[t + 1], Lt[t].getBBox && Lt[t].setAttribute("transform", Lt[t + 2] || ""), Lt[t + 3].uncache = 1)
        },
        qt = function(e, t) {
          var r;
          for (ne = 0; ne < St.length; ne++) !(r = St[ne]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          be = !0, t && jt(t), t || Vt("revert")
        },
        Qt = function(e, t) {
          _.cache++, (t || !we) && _.forEach(function(e) {
            return We(e) && e.cacheID++ && (e.rec = 0)
          }), Ye(e) && (z.history.scrollRestoration = ye = e)
        },
        Bt = 0,
        Ut = function() {
          G.appendChild(me), ge = !le && me.offsetHeight || z.innerHeight, G.removeChild(me)
        },
        zt = function(e) {
          return X(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Yt = function(e, t) {
          if (!De || e || be) {
            Ut(), we = cr.isRefreshing = !0, _.forEach(function(e) {
              return We(e) && ++e.cacheID && (e.rec = e())
            });
            var r = Vt("refreshInit");
            se && cr.sort(), t || qt(), _.forEach(function(e) {
              We(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), St.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, St.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
              }
            }), _e = 1, zt(!0), St.forEach(function(e) {
              var t = Ue(e.scroller, e._dir),
                r = "max" === e.vars.end || e._endClamp && e.end > t,
                n = e._startClamp && e.start >= t;
              (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
            }), zt(!1), _e = 0, r.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), _.forEach(function(e) {
              We(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Qt(ye, 1), H.pause(), Bt++, we = 2, Kt(2), St.forEach(function(e) {
              return We(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), we = cr.isRefreshing = !1, Vt("refresh")
          } else bt(cr, "scrollEnd", Ft)
        },
        Wt = 0,
        Gt = 1,
        Kt = function(e) {
          if (2 === e || !we && !be) {
            cr.isUpdating = !0, ke && ke.update(0);
            var t = St.length,
              r = xe(),
              n = r - Se >= 50,
              i = t && St[0].scroll();
            if (Gt = Wt > i ? -1 : 1, we || (Wt = i), n && (De && !te && r - De > 200 && (De = 0, Vt("scrollEnd")), J = Se, Se = r), Gt < 0) {
              for (ne = t; ne-- > 0;) St[ne] && St[ne].update(0, n);
              Gt = 1
            } else
              for (ne = 0; ne < t; ne++) St[ne] && St[ne].update(0, n);
            cr.isUpdating = !1
          }
          Te = 0
        },
        Ht = [Je, "top", et, Ze, ct + at, ct + nt, ct + ot, ct + it, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Xt = Ht.concat([tt, rt, "boxSizing", "max" + ut, "max" + lt, "position", ct, st, st + ot, st + nt, st + at, st + it]),
        $t = function(e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, o = Ht.length, a = t.style, s = e.style; o--;) a[i = Ht[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[et] = s[Ze] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = vt(e, A) + ft, a[rt] = vt(e, R) + ft, a[st] = s[ct] = s.top = s[Je] = "0", Zt(n), s[tt] = s["max" + ut] = r[tt], s[rt] = s["max" + lt] = r[rt], s[st] = r[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Jt = /([A-Z])/g,
        Zt = function(e) {
          if (e) {
            var t, r, n = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Jt, "-$1").toLowerCase())
          }
        },
        er = function(e) {
          for (var t = Xt.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Xt[i], r[Xt[i]]);
          return n.t = e, n
        },
        tr = {
          left: 0,
          top: 0
        },
        rr = function(e, t, r, n, i, o, a, s, c, u, l, f, h, d) {
          We(e) && (e = e(s)), Ye(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? kt("0" + e.substr(3), r) : 0));
          var p, v, y, m = h ? h.time() : 0;
          if (h && h.seek(0), isNaN(e) || (e = +e), Ge(e)) h && (e = B.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, e)), a && xt(a, r, n, !0);
          else {
            We(t) && (t = t(s));
            var g, b, _, E, T = (e || "0").split(" ");
            y = P(t, s) || G, (g = pt(y) || {}) && (g.left || g.top) || "none" !== ht(y).display || (E = y.style.display, y.style.display = "block", g = pt(y), E ? y.style.display = E : y.style.removeProperty("display")), b = kt(T[0], g[n.d]), _ = kt(T[1] || "0", r), e = g[n.p] - c[n.p] - u + b + i - _, a && xt(a, _, n, r - _ < 20 || a._isStart && _ > 20), r -= r - _
          }
          if (d && (s[d] = e || -.001, e < 0 && (e = 0)), o) {
            var w = e + r,
              O = o._isStart;
            p = "scroll" + n.d2, xt(o, w, n, O && w > 20 || !O && (l ? Math.max(G[p], W[p]) : o.parentNode[p]) <= w + 1), l && (c = pt(a), l && (o.style[n.op.p] = c[n.op.p] - n.op.m - o._offset + ft))
          }
          return h && y && (p = pt(y), h.seek(f), v = pt(y), h._caScrollDist = p[n.p] - v[n.p], e = e / h._caScrollDist * f), h && h.seek(m), h ? e : Math.round(e)
        },
        nr = /(webkit|moz|length|cssText|inset)/i,
        ir = function(e, t, r, n) {
          if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === G) {
              for (i in e._stOrig = a.cssText, o = ht(e)) + i || nr.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
              a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            B.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        or = function(e, t, r) {
          var n = t,
            i = n;
          return function(t) {
            var o = Math.round(e());
            return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (t = o, r && r()), i = n, n = t, t
          }
        },
        ar = function(e, t, r) {
          var n = {};
          n[t.p] = "+=" + r, B.set(e, n)
        },
        sr = function(e, t) {
          var r = M(e, t),
            n = "_scroll" + t.p2,
            i = function t(i, o, a, s, c) {
              var u = t.tween,
                l = o.onComplete,
                f = {};
              a = a || r();
              var h = or(r, a, function() {
                u.kill(), t.tween = 0
              });
              return c = s && c || 0, s = s || i - a, u && u.kill(), o[n] = i, o.inherit = !1, o.modifiers = f, f[n] = function() {
                return h(a + s * u.ratio + c * u.ratio * u.ratio)
              }, o.onUpdate = function() {
                _.cache++, t.tween && Kt()
              }, o.onComplete = function() {
                t.tween = 0, l && l.call(u)
              }, u = t.tween = B.to(e, o)
            };
          return e[n] = r, r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
          }, bt(e, "wheel", r.wheelHandler), cr.isTouch && bt(e, "touchmove", r.wheelHandler), i
        },
        cr = function() {
          function e(t, r) {
            U || e.register(B) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ve(this), this.init(t, r)
          }
          return e.prototype.init = function(t, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Ie) {
              var n, i, o, a, s, c, u, l, f, h, d, p, v, y, m, g, b, T, w, k, C, x, S, D, I, N, F, V, L, j, q, Q, U, K, H, Z, re, ie, oe, ae, ue, le, fe = t = dt(Ye(t) || Ge(t) || t.nodeType ? {
                  trigger: t
                } : t, wt),
                he = fe.onUpdate,
                de = fe.toggleClass,
                pe = fe.id,
                ve = fe.onToggle,
                ye = fe.onRefresh,
                me = fe.scrub,
                ge = fe.trigger,
                be = fe.pin,
                Te = fe.pinSpacing,
                Se = fe.invalidateOnRefresh,
                Re = fe.anticipatePin,
                Pe = fe.onScrubComplete,
                Me = fe.onSnapComplete,
                Le = fe.once,
                je = fe.snap,
                ze = fe.pinReparent,
                Je = fe.pinSpacer,
                Ze = fe.containerAnimation,
                et = fe.fastScrollEnd,
                gt = fe.preventOverlaps,
                Et = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? A : R,
                Ot = !me && 0 !== me,
                xt = P(t.scroller || z),
                It = B.core.getCache(xt),
                At = qe(xt),
                Pt = "fixed" === ("pinType" in t ? t.pinType : O(xt, "pinType") || At && "fixed"),
                Mt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Vt = Ot && t.toggleActions.split(" "),
                Lt = "markers" in t ? t.markers : wt.markers,
                jt = At ? 0 : parseFloat(ht(xt)["border" + Et.p2 + ut]) || 0,
                qt = this,
                Qt = t.onRefreshInit && function() {
                  return t.onRefreshInit(qt)
                },
                Ut = function(e, t, r) {
                  var n = r.d,
                    i = r.d2,
                    o = r.a;
                  return (o = O(e, "getBoundingClientRect")) ? function() {
                    return o()[n]
                  } : function() {
                    return (t ? Qe(i) : e["client" + i]) || 0
                  }
                }(xt, At, Et),
                zt = function(e, t) {
                  return !t || ~E.indexOf(e) ? Be(e) : function() {
                    return tr
                  }
                }(xt, At),
                Wt = 0,
                Kt = 0,
                Ht = 0,
                Xt = M(xt, Et);
              if (qt._startClamp = qt._endClamp = !1, qt._dir = Et, Re *= 45, qt.scroller = xt, qt.scroll = Ze ? Ze.time.bind(Ze) : Xt, a = Xt(), qt.vars = t, r = r || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (ke = qt)), It.tweenScroll = It.tweenScroll || {
                  top: sr(xt, R),
                  left: sr(xt, A)
                }, qt.tweenTo = n = It.tweenScroll[Et.p], qt.scrubDuration = function(e) {
                  (U = Ge(e) && e) ? Q ? Q.duration(e) : Q = B.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: U,
                    paused: !0,
                    onComplete: function() {
                      return Pe && Pe(qt)
                    }
                  }): (Q && Q.progress(1).kill(), Q = 0)
                }, r && (r.vars.lazy = !1, r._initted && !qt.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), qt.animation = r.pause(), r.scrollTrigger = qt, qt.scrubDuration(me), j = 0, pe || (pe = r.vars.id)), je && (Ke(je) && !je.push || (je = {
                  snapTo: je
                }), "scrollBehavior" in G.style && B.set(At ? [G, W] : xt, {
                  scrollBehavior: "auto"
                }), _.forEach(function(e) {
                  return We(e) && e.target === (At ? Y.scrollingElement || W : xt) && (e.smooth = !1)
                }), o = We(je.snapTo) ? je.snapTo : "labels" === je.snapTo ? function(e) {
                  return function(t) {
                    return B.utils.snap(yt(e), t)
                  }
                }(r) : "labelsDirectional" === je.snapTo ? (ae = r, function(e, t) {
                  return mt(yt(ae))(e, t.direction)
                }) : !1 !== je.directional ? function(e, t) {
                  return mt(je.snapTo)(e, xe() - Kt < 500 ? 0 : t.direction)
                } : B.utils.snap(je.snapTo), K = je.duration || {
                  min: .1,
                  max: 2
                }, K = Ke(K) ? $(K.min, K.max) : $(K, K), H = B.delayedCall(je.delay || U / 2 || .1, function() {
                  var e = Xt(),
                    t = xe() - Kt < 500,
                    i = n.tween;
                  if (!(t || Math.abs(qt.getVelocity()) < 10) || i || te || Wt === e) qt.isActive && Wt !== e && H.restart(!0);
                  else {
                    var a, s, l = (e - c) / y,
                      f = r && !Ot ? r.totalProgress() : l,
                      h = t ? 0 : (f - q) / (xe() - J) * 1e3 || 0,
                      d = B.utils.clamp(-l, 1 - l, $e(h / 2) * h / .185),
                      p = l + (!1 === je.inertia ? 0 : d),
                      v = je,
                      m = v.onStart,
                      g = v.onInterrupt,
                      b = v.onComplete;
                    if (a = o(p, qt), Ge(a) || (a = p), s = Math.round(c + a * y), e <= u && e >= c && s !== e) {
                      if (i && !i._initted && i.data <= $e(s - e)) return;
                      !1 === je.inertia && (d = a - l), n(s, {
                        duration: K($e(.185 * Math.max($e(p - f), $e(a - f)) / h / .05 || 0)),
                        ease: je.ease || "power3",
                        data: $e(s - e),
                        onInterrupt: function() {
                          return H.restart(!0) && g && g(qt)
                        },
                        onComplete: function() {
                          qt.update(), Wt = Xt(), r && (Q ? Q.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), j = q = r && !Ot ? r.totalProgress() : qt.progress, Me && Me(qt), b && b(qt)
                        }
                      }, e, d * y, s - e - d * y), m && m(qt, n.tween)
                    }
                  }
                }).pause()), pe && (Dt[pe] = qt), (oe = (ge = qt.trigger = P(ge || !0 !== be && be)) && ge._gsap && ge._gsap.stRevert) && (oe = oe(qt)), be = !0 === be ? ge : P(be), Ye(de) && (de = {
                  targets: ge,
                  className: de
                }), be && (!1 === Te || Te === ct || (Te = !(!Te && be.parentNode && be.parentNode.style && "flex" === ht(be.parentNode).display) && st), qt.pin = be, (i = B.core.getCache(be)).spacer ? m = i.pinState : (Je && ((Je = P(Je)) && !Je.nodeType && (Je = Je.current || Je.nativeElement), i.spacerIsNative = !!Je, Je && (i.spacerState = er(Je))), i.spacer = T = Je || Y.createElement("div"), T.classList.add("pin-spacer"), pe && T.classList.add("pin-spacer-" + pe), i.pinState = m = er(be)), !1 !== t.force3D && B.set(be, {
                  force3D: !0
                }), qt.spacer = T = i.spacer, L = ht(be), D = L[Te + Et.os2], k = B.getProperty(be), C = B.quickSetter(be, Et.a, ft), $t(be, T, L), b = er(be)), Lt) {
                p = Ke(Lt) ? dt(Lt, Tt) : Tt, h = Ct("scroller-start", pe, xt, Et, p, 0), d = Ct("scroller-end", pe, xt, Et, p, 0, h), w = h["offset" + Et.op.d2];
                var Jt = P(O(xt, "content") || xt);
                l = this.markerStart = Ct("start", pe, Jt, Et, p, w, 0, Ze), f = this.markerEnd = Ct("end", pe, Jt, Et, p, w, 0, Ze), Ze && (ie = B.quickSetter([l, f], Et.a, ft)), Pt || E.length && !0 === O(xt, "fixedMarkers") || (le = ht(ue = At ? G : xt).position, ue.style.position = "absolute" === le || "fixed" === le ? le : "relative", B.set([h, d], {
                  force3D: !0
                }), N = B.quickSetter(h, Et.a, ft), V = B.quickSetter(d, Et.a, ft))
              }
              if (Ze) {
                var nr = Ze.vars.onUpdate,
                  or = Ze.vars.onUpdateParams;
                Ze.eventCallback("onUpdate", function() {
                  qt.update(0, 0, 1), nr && nr.apply(Ze, or || [])
                })
              }
              if (qt.previous = function() {
                  return St[St.indexOf(qt) - 1]
                }, qt.next = function() {
                  return St[St.indexOf(qt) + 1]
                }, qt.revert = function(e, t) {
                  if (!t) return qt.kill(!0);
                  var n = !1 !== e || !qt.enabled,
                    i = ee;
                  n !== qt.isReverted && (n && (Z = Math.max(Xt(), qt.scroll.rec || 0), Ht = qt.progress, re = r && r.progress()), l && [l, f, h, d].forEach(function(e) {
                    return e.style.display = n ? "none" : "block"
                  }), n && (ee = qt, qt.update(n)), !be || ze && qt.isActive || (n ? function(e, t, r) {
                    Zt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Zt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                      var i = t.parentNode;
                      i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, T, m) : $t(be, T, ht(be), I)), n || qt.update(n), ee = i, qt.isReverted = n)
                }, qt.refresh = function(i, o, p, _) {
                  if (!ee && qt.enabled || o)
                    if (be && i && De) bt(e, "scrollEnd", Ft);
                    else {
                      !we && Qt && Qt(qt), ee = qt, n.tween && !p && (n.tween.kill(), n.tween = 0), Q && Q.pause(), Se && r && r.revert({
                        kill: !1
                      }).invalidate(), qt.isReverted || qt.revert(!0, !0), qt._subPinOffset = !1;
                      var E, w, O, C, D, N, V, L, j, q, U, z, K, X = Ut(),
                        $ = zt(),
                        J = Ze ? Ze.duration() : Ue(xt, Et),
                        te = y <= .01,
                        ne = 0,
                        ie = _ || 0,
                        oe = Ke(p) ? p.end : t.end,
                        ae = t.endTrigger || ge,
                        se = Ke(p) ? p.start : t.start || (0 !== t.start && ge ? be ? "0 0" : "0 100%" : 0),
                        ue = qt.pinnedContainer = t.pinnedContainer && P(t.pinnedContainer, qt),
                        le = ge && Math.max(0, St.indexOf(qt)) || 0,
                        fe = le;
                      for (Lt && Ke(p) && (z = B.getProperty(h, Et.p), K = B.getProperty(d, Et.p)); fe--;)(N = St[fe]).end || N.refresh(0, 1) || (ee = qt), !(V = N.pin) || V !== ge && V !== be && V !== ue || N.isReverted || (q || (q = []), q.unshift(N), N.revert(!0, !0)), N !== St[fe] && (le--, fe--);
                      for (We(se) && (se = se(qt)), se = Ne(se, "start", qt), c = rr(se, ge, X, Et, Xt(), l, h, qt, $, jt, Pt, J, Ze, qt._startClamp && "_startClamp") || (be ? -.001 : 0), We(oe) && (oe = oe(qt)), Ye(oe) && !oe.indexOf("+=") && (~oe.indexOf(" ") ? oe = (Ye(se) ? se.split(" ")[0] : "") + oe : (ne = kt(oe.substr(2), X), oe = Ye(se) ? se : (Ze ? B.utils.mapRange(0, Ze.duration(), Ze.scrollTrigger.start, Ze.scrollTrigger.end, c) : c) + ne, ae = ge)), oe = Ne(oe, "end", qt), u = Math.max(c, rr(oe || (ae ? "100% 0" : J), ae, X, Et, Xt() + ne, f, d, qt, $, jt, Pt, J, Ze, qt._endClamp && "_endClamp")) || -.001, ne = 0, fe = le; fe--;)(V = (N = St[fe]).pin) && N.start - N._pinPush <= c && !Ze && N.end > 0 && (E = N.end - (qt._startClamp ? Math.max(0, N.start) : N.start), (V === ge && N.start - N._pinPush < c || V === ue) && isNaN(se) && (ne += E * (1 - N.progress)), V === be && (ie += E));
                      if (c += ne, u += ne, qt._startClamp && (qt._startClamp += ne), qt._endClamp && !we && (qt._endClamp = u || -.001, u = Math.min(u, Ue(xt, Et))), y = u - c || (c -= .01) && .001, te && (Ht = B.utils.clamp(0, 1, B.utils.normalize(c, u, Z))), qt._pinPush = ie, l && ne && ((E = {})[Et.a] = "+=" + ne, ue && (E[Et.p] = "-=" + Xt()), B.set([l, f], E)), !be || _e && qt.end >= Ue(xt, Et)) {
                        if (ge && Xt() && !Ze)
                          for (w = ge.parentNode; w && w !== G;) w._pinOffset && (c -= w._pinOffset, u -= w._pinOffset), w = w.parentNode
                      } else E = ht(be), C = Et === R, O = Xt(), x = parseFloat(k(Et.a)) + ie, !J && u > 1 && (U = {
                        style: U = (At ? Y.scrollingElement || W : xt).style,
                        value: U["overflow" + Et.a.toUpperCase()]
                      }, At && "scroll" !== ht(G)["overflow" + Et.a.toUpperCase()] && (U.style["overflow" + Et.a.toUpperCase()] = "scroll")), $t(be, T, E), b = er(be), w = pt(be, !0), L = Pt && M(xt, C ? A : R)(), Te ? ((I = [Te + Et.os2, y + ie + ft]).t = T, (fe = Te === st ? vt(be, Et) + y + ie : 0) && (I.push(Et.d, fe + ft), "auto" !== T.style.flexBasis && (T.style.flexBasis = fe + ft)), Zt(I), ue && St.forEach(function(e) {
                        e.pin === ue && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Pt && Xt(Z)) : (fe = vt(be, Et)) && "auto" !== T.style.flexBasis && (T.style.flexBasis = fe + ft), Pt && ((D = {
                        top: w.top + (C ? O - c : L) + ft,
                        left: w.left + (C ? L : O - c) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = D["max" + ut] = Math.ceil(w.width) + ft, D[rt] = D["max" + lt] = Math.ceil(w.height) + ft, D[ct] = D[ct + ot] = D[ct + nt] = D[ct + at] = D[ct + it] = "0", D[st] = E[st], D[st + ot] = E[st + ot], D[st + nt] = E[st + nt], D[st + at] = E[st + at], D[st + it] = E[st + it], g = function(e, t, r) {
                        for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                        return i.t = e.t, i
                      }(m, D, ze), we && Xt(0)), r ? (j = r._initted, ce(1), r.render(r.duration(), !0, !0), S = k(Et.a) - x + y + ie, F = Math.abs(y - S) > 1, Pt && F && g.splice(g.length - 2, 2), r.render(0, !0, !0), j || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ce(0)) : S = y, U && (U.value ? U.style["overflow" + Et.a.toUpperCase()] = U.value : U.style.removeProperty("overflow-" + Et.a));
                      q && q.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), qt.start = c, qt.end = u, a = s = we ? Z : Xt(), Ze || we || (a < Z && Xt(Z), qt.scroll.rec = 0), qt.revert(!1, !0), Kt = xe(), H && (Wt = -1, H.restart(!0)), ee = 0, r && Ot && (r._initted || re) && r.progress() !== re && r.progress(re || 0, !0).render(r.time(), !0, !0), (te || Ht !== qt.progress || Ze || Se) && (r && !Ot && r.totalProgress(Ze && c < -.001 && !Ht ? B.utils.normalize(c, u, 0) : Ht, !0), qt.progress = te || (a - c) / y === Ht ? 0 : Ht), be && Te && (T._pinOffset = Math.round(qt.progress * S)), Q && Q.invalidate(), isNaN(z) || (z -= B.getProperty(h, Et.p), K -= B.getProperty(d, Et.p), ar(h, Et, z), ar(l, Et, z - (_ || 0)), ar(d, Et, K), ar(f, Et, K - (_ || 0))), te && !we && qt.update(), !ye || we || v || (v = !0, ye(qt), v = !1)
                    }
                }, qt.getVelocity = function() {
                  return (Xt() - s) / (xe() - J) * 1e3 || 0
                }, qt.endAnimation = function() {
                  He(qt.callbackAnimation), r && (Q ? Q.progress(1) : r.paused() ? Ot || He(r, qt.direction < 0, 1) : He(r, r.reversed()))
                }, qt.labelToScroll = function(e) {
                  return r && r.labels && (c || qt.refresh() || c) + r.labels[e] / r.duration() * y || 0
                }, qt.getTrailing = function(e) {
                  var t = St.indexOf(qt),
                    r = qt.direction > 0 ? St.slice(0, t).reverse() : St.slice(t + 1);
                  return (Ye(e) ? r.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : r).filter(function(e) {
                    return qt.direction > 0 ? e.end <= c : e.start >= u
                  })
                }, qt.update = function(e, t, i) {
                  if (!Ze || i || e) {
                    var o, l, f, d, p, v, m, _ = !0 === we ? Z : qt.scroll(),
                      E = e ? 0 : (_ - c) / y,
                      w = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                      O = qt.progress;
                    if (t && (s = a, a = Ze ? Xt() : _, je && (q = j, j = r && !Ot ? r.totalProgress() : w)), Re && be && !ee && !Ce && De && (!w && c < _ + (_ - s) / (xe() - J) * Re ? w = 1e-4 : 1 === w && u > _ + (_ - s) / (xe() - J) * Re && (w = .9999)), w !== O && qt.enabled) {
                      if (d = (p = (o = qt.isActive = !!w && w < 1) != (!!O && O < 1)) || !!w != !!O, qt.direction = w > O ? 1 : -1, qt.progress = w, d && !ee && (l = w && !O ? 0 : 1 === w ? 1 : 1 === O ? 2 : 3, Ot && (f = !p && "none" !== Vt[l + 1] && Vt[l + 1] || Vt[l], m = r && ("complete" === f || "reset" === f || f in r))), gt && (p || m) && (m || me || !r) && (We(gt) ? gt(qt) : qt.getTrailing(gt).forEach(function(e) {
                          return e.endAnimation()
                        })), Ot || (!Q || ee || Ce ? r && r.totalProgress(w, !(!ee || !Kt && !e)) : (Q._dp._time - Q._start !== Q._time && Q.render(Q._dp._time - Q._start), Q.resetTo ? Q.resetTo("totalProgress", w, r._tTime / r._tDur) : (Q.vars.totalProgress = w, Q.invalidate().restart()))), be)
                        if (e && Te && (T.style[Te + Et.os2] = D), Pt) {
                          if (d) {
                            if (v = !e && w > O && u + 1 > _ && _ + 1 >= Ue(xt, Et), ze)
                              if (e || !o && !v) ir(be, T);
                              else {
                                var k = pt(be, !0),
                                  I = _ - c;
                                ir(be, G, k.top + (Et === R ? I : 0) + ft, k.left + (Et === R ? 0 : I) + ft)
                              } Zt(o || v ? g : b), F && w < 1 && o || C(x + (1 !== w || v ? 0 : S))
                          }
                        } else C(Ve(x + S * w));
                      je && !n.tween && !ee && !Ce && H.restart(!0), de && (p || Le && w && (w < 1 || !Ee)) && X(de.targets).forEach(function(e) {
                        return e.classList[o || Le ? "add" : "remove"](de.className)
                      }), he && !Ot && !e && he(qt), d && !ee ? (Ot && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), he && he(qt)), !p && Ee || (ve && p && Xe(qt, ve), Mt[l] && Xe(qt, Mt[l]), Le && (1 === w ? qt.kill(!1, 1) : Mt[l] = 0), p || Mt[l = 1 === w ? 1 : 3] && Xe(qt, Mt[l])), et && !o && Math.abs(qt.getVelocity()) > (Ge(et) ? et : 2500) && (He(qt.callbackAnimation), Q ? Q.progress(1) : He(r, "reverse" === f ? 1 : !w, 1))) : Ot && he && !ee && he(qt)
                    }
                    if (V) {
                      var A = Ze ? _ / Ze.duration() * (Ze._caScrollDist || 0) : _;
                      N(A + (h._isFlipped ? 1 : 0)), V(A)
                    }
                    ie && ie(-_ / Ze.duration() * (Ze._caScrollDist || 0))
                  }
                }, qt.enable = function(t, r) {
                  qt.enabled || (qt.enabled = !0, bt(xt, "resize", Rt), At || bt(xt, "scroll", Nt), Qt && bt(e, "refreshInit", Qt), !1 !== t && (qt.progress = Ht = 0, a = s = Wt = Xt()), !1 !== r && qt.refresh())
                }, qt.getTween = function(e) {
                  return e && n ? n.tween : Q
                }, qt.setPositions = function(e, t, r, n) {
                  if (Ze) {
                    var i = Ze.scrollTrigger,
                      o = Ze.duration(),
                      a = i.end - i.start;
                    e = i.start + a * e / o, t = i.start + a * t / o
                  }
                  qt.refresh(!1, !1, {
                    start: Ae(e, r && !!qt._startClamp),
                    end: Ae(t, r && !!qt._endClamp)
                  }, n), qt.update()
                }, qt.adjustPinSpacing = function(e) {
                  if (I && e) {
                    var t = I.indexOf(Et.d) + 1;
                    I[t] = parseFloat(I[t]) + e + ft, I[1] = parseFloat(I[1]) + e + ft, Zt(I)
                  }
                }, qt.disable = function(t, r) {
                  if (qt.enabled && (!1 !== t && qt.revert(!0, !0), qt.enabled = qt.isActive = !1, r || Q && Q.pause(), Z = 0, i && (i.uncache = 1), Qt && _t(e, "refreshInit", Qt), H && (H.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !At)) {
                    for (var o = St.length; o--;)
                      if (St[o].scroller === xt && St[o] !== qt) return;
                    _t(xt, "resize", Rt), At || _t(xt, "scroll", Nt)
                  }
                }, qt.kill = function(e, n) {
                  qt.disable(e, n), Q && !n && Q.kill(), pe && delete Dt[pe];
                  var o = St.indexOf(qt);
                  o >= 0 && St.splice(o, 1), o === ne && Gt > 0 && ne--, o = 0, St.forEach(function(e) {
                    return e.scroller === qt.scroller && (o = 1)
                  }), o || we || (qt.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                    kill: !1
                  }), n || r.kill()), l && [l, f, h, d].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), ke === qt && (ke = 0), be && (i && (i.uncache = 1), o = 0, St.forEach(function(e) {
                    return e.pin === be && o++
                  }), o || (i.spacer = 0)), t.onKill && t.onKill(qt)
                }, St.push(qt), qt.enable(!1, !1), oe && oe(qt), r && r.add && !y) {
                var cr = qt.update;
                qt.update = function() {
                  qt.update = cr, c || u || qt.refresh()
                }, B.delayedCall(.01, qt.update), y = .01, c = u = 0
              } else qt.refresh();
              be && function() {
                if (Oe !== Bt) {
                  var e = Oe = Bt;
                  requestAnimationFrame(function() {
                    return e === Bt && Yt(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Fe
          }, e.register = function(t) {
            return U || (B = t || je(), Le() && window.document && e.enable(), U = Ie), U
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) wt[t] = e[t];
            return wt
          }, e.disable = function(e, t) {
            Ie = 0, St.forEach(function(r) {
              return r[t ? "kill" : "disable"](e)
            }), _t(z, "wheel", Nt), _t(Y, "scroll", Nt), clearInterval(Z), _t(Y, "touchcancel", Fe), _t(G, "touchstart", Fe), gt(_t, Y, "pointerdown,touchstart,mousedown", Pe), gt(_t, Y, "pointerup,touchend,mouseup", Me), H.kill(), ze(_t);
            for (var r = 0; r < _.length; r += 3) Et(_t, _[r], _[r + 1]), Et(_t, _[r], _[r + 2])
          }, e.enable = function() {
            if (z = window, Y = document, W = Y.documentElement, G = Y.body, B && (X = B.utils.toArray, $ = B.utils.clamp, ve = B.core.context || Fe, ce = B.core.suppressOverwrites || Fe, ye = z.history.scrollRestoration || "auto", Wt = z.pageYOffset, B.core.globals("ScrollTrigger", e), G)) {
              Ie = 1, (me = document.createElement("div")).style.height = "100vh", me.style.position = "absolute", Ut(), Re(), Q.register(B), e.isTouch = Q.isTouch, pe = Q.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === Q.isTouch, bt(z, "wheel", Nt), K = [z, Y, W, G], B.matchMedia ? (e.matchMedia = function(e) {
                var t, r = B.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
              }, B.addEventListener("matchMediaInit", function() {
                return qt()
              }), B.addEventListener("matchMediaRevert", function() {
                return jt()
              }), B.addEventListener("matchMedia", function() {
                Yt(0, 1), Vt("matchMedia")
              }), B.matchMedia("(orientation: portrait)", function() {
                return At(), At
              })) : console.warn("Requires GSAP 3.11.0 or later"), At(), bt(Y, "scroll", Nt);
              var t, r, n = G.style,
                i = n.borderTopStyle,
                o = B.core.Animation.prototype;
              for (o.revert || Object.defineProperty(o, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", t = pt(G), R.m = Math.round(t.top + R.sc()) || 0, A.m = Math.round(t.left + A.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Z = setInterval(It, 250), B.delayedCall(.5, function() {
                  return Ce = 0
                }), bt(Y, "touchcancel", Fe), bt(G, "touchstart", Fe), gt(bt, Y, "pointerdown,touchstart,mousedown", Pe), gt(bt, Y, "pointerup,touchend,mouseup", Me), re = B.utils.checkPrefix("transform"), Xt.push(re), U = xe(), H = B.delayedCall(.2, Yt).pause(), ae = [Y, "visibilitychange", function() {
                  var e = z.innerWidth,
                    t = z.innerHeight;
                  Y.hidden ? (ie = e, oe = t) : ie === e && oe === t || Rt()
                }, Y, "DOMContentLoaded", Yt, z, "load", Yt, z, "resize", Rt], ze(bt), St.forEach(function(e) {
                  return e.enable(0, 1)
                }), r = 0; r < _.length; r += 3) Et(_t, _[r], _[r + 1]), Et(_t, _[r], _[r + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (Ee = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(Z) || (Z = r) && setInterval(It, r), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (ze(_t) || ze(bt, t.autoRefreshEvents || "none"), ue = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var r = P(e),
              n = _.indexOf(r),
              i = qe(r);
            ~n && _.splice(n, i ? 6 : 2), t && (i ? E.unshift(z, t, G, t, W, t) : E.unshift(r, t))
          }, e.clearMatchMedia = function(e) {
            St.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, r) {
            var n = (Ye(e) ? P(e) : e).getBoundingClientRect(),
              i = n[r ? tt : rt] * t || 0;
            return r ? n.right - i > 0 && n.left + i < z.innerWidth : n.bottom - i > 0 && n.top + i < z.innerHeight
          }, e.positionInViewport = function(e, t, r) {
            Ye(e) && (e = P(e));
            var n = e.getBoundingClientRect(),
              i = n[r ? tt : rt],
              o = null == t ? i / 2 : t in Ot ? Ot[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / z.innerWidth : (n.top + o) / z.innerHeight
          }, e.killAll = function(e) {
            if (St.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              }), !0 !== e) {
              var t = Pt.killAll || [];
              Pt = {}, t.forEach(function(e) {
                return e()
              })
            }
          }, e
        }();
      cr.version = "3.12.5", cr.saveStyles = function(e) {
        return e ? X(e).forEach(function(e) {
          if (e && e.style) {
            var t = Lt.indexOf(e);
            t >= 0 && Lt.splice(t, 5), Lt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), B.core.getCache(e), ve())
          }
        }) : Lt
      }, cr.revert = function(e, t) {
        return qt(!e, t)
      }, cr.create = function(e, t) {
        return new cr(e, t)
      }, cr.refresh = function(e) {
        return e ? Rt() : (U || cr.register()) && Yt(!0)
      }, cr.update = function(e) {
        return ++_.cache && Kt(!0 === e ? 2 : 0)
      }, cr.clearScrollMemory = Qt, cr.maxScroll = function(e, t) {
        return Ue(e, t ? A : R)
      }, cr.getScrollFunc = function(e, t) {
        return M(P(e), t ? A : R)
      }, cr.getById = function(e) {
        return Dt[e]
      }, cr.getAll = function() {
        return St.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, cr.isScrolling = function() {
        return !!De
      }, cr.snapDirectional = mt, cr.addEventListener = function(e, t) {
        var r = Pt[e] || (Pt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, cr.removeEventListener = function(e, t) {
        var r = Pt[e],
          n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
      }, cr.batch = function(e, t) {
        var r, n = [],
          i = {},
          o = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var r = [],
              n = [],
              i = B.delayedCall(o, function() {
                t(r, n), r = [], n = []
              }).pause();
            return function(e) {
              r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
          };
        for (r in t) i[r] = "on" === r.substr(0, 2) && We(t[r]) && "onRefreshInit" !== r ? s(0, t[r]) : t[r];
        return We(a) && (a = a(), bt(cr, "refresh", function() {
          return a = t.batchMax()
        })), X(e).forEach(function(e) {
          var t = {};
          for (r in i) t[r] = i[r];
          t.trigger = e, n.push(cr.create(t))
        }), n
      };
      var ur, lr = function(e, t, r, n) {
          return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
        },
        fr = function e(t, r) {
          !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Q.isTouch ? " pinch-zoom" : "") : "none", t === W && e(G, r)
        },
        hr = {
          auto: 1,
          scroll: 1
        },
        dr = function(e) {
          var t, r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || B.core.getCache(o),
            s = xe();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; o && o !== G && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !hr[(t = ht(o)).overflowY] && !hr[t.overflowX]);) o = o.parentNode;
            a._isScroll = o && o !== n && !qe(o) && (hr[(t = ht(o)).overflowY] || hr[t.overflowX]), a._isScrollT = s, !o.hasAttribute("role") || "dialog" !== o.getAttribute("role") || o.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        pr = function(e, t, r, n) {
          return Q.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && dr,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
              return r && bt(Y, Q.eventTypes[0], yr, !1, !0)
            },
            onDisable: function() {
              return _t(Y, Q.eventTypes[0], yr, !0)
            }
          })
        },
        vr = /(input|label|select|textarea)/i,
        yr = function(e) {
          var t = vr.test(e.target.tagName);
          (t || ur) && (e._gsapAllow = !0, ur = t)
        };
      cr.sort = function(e) {
        return St.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, cr.observe = function(e) {
        return new Q(e)
      }, cr.normalizeScroll = function(e) {
        if (void 0 === e) return le;
        if (!0 === e && le) return le.enable();
        if (!1 === e) return le && le.kill(), void(le = e);
        var t = e instanceof Q ? e : function(e) {
          Ke(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, r, n, i, o, a, s, c, u = e,
            l = u.normalizeScrollX,
            f = u.momentum,
            h = u.allowNestedScroll,
            d = u.onRelease,
            p = P(e.target) || W,
            v = B.core.globals().ScrollSmoother,
            y = v && v.get(),
            m = pe && (e.content && P(e.content) || y && !1 !== e.content && !y.smooth() && y.content()),
            g = M(p, R),
            b = M(p, A),
            E = 1,
            T = (Q.isTouch && z.visualViewport ? z.visualViewport.scale * z.visualViewport.width : z.outerWidth) / z.innerWidth,
            w = 0,
            O = We(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            k = pr(p, e.type, !0, h),
            C = function() {
              return i = !1
            },
            x = Fe,
            S = Fe,
            D = function() {
              r = Ue(p, R), S = $(pe ? 1 : 0, r), l && (x = $(0, Ue(p, A))), n = Bt
            },
            I = function() {
              m._gsap.y = Ve(parseFloat(m._gsap.y) + g.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", g.offset = g.cacheID = 0
            },
            N = function() {
              D(), o.isActive() && o.vars.scrollY > r && (g() > r ? o.progress(1) && g(r) : o.resetTo("scrollY", r))
            };
          return m && B.set(m, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return pe && "touchmove" === e.type && function() {
              if (i) {
                requestAnimationFrame(C);
                var e = Ve(t.deltaY / 2),
                  r = S(g.v - e);
                if (m && r !== g.v + g.offset) {
                  g.offset = r - g.v;
                  var n = Ve((parseFloat(m && m._gsap.y) || 0) - g.offset);
                  m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", g.cacheID = _.cache, Kt()
                }
                return !0
              }
              g.offset && I(), i = !0
            }() || E > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            i = !1;
            var e = E;
            E = Ve((z.visualViewport && z.visualViewport.scale || 1) / T), o.pause(), e !== E && fr(p, E > 1.01 || !l && "x"), a = b(), s = g(), D(), n = Bt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (g.offset && I(), t) {
              _.cache++;
              var n, i, a = O();
              l && (i = (n = b()) + .05 * a * -e.velocityX / .227, a *= lr(b, n, i, Ue(p, A)), o.vars.scrollX = x(i)), i = (n = g()) + .05 * a * -e.velocityY / .227, a *= lr(g, n, i, Ue(p, R)), o.vars.scrollY = S(i), o.invalidate().duration(a).play(.01), (pe && o.vars.scrollY >= r || n >= r - 1) && B.to({}, {
                onUpdate: N,
                duration: a
              })
            } else c.restart(!0);
            d && d(e)
          }, e.onWheel = function() {
            o._ts && o.pause(), xe() - w > 1e3 && (n = 0, w = xe())
          }, e.onChange = function(e, t, r, i, o) {
            if (Bt !== n && D(), t && l && b(x(i[2] === t ? a + (e.startX - e.x) : b() + t - i[1])), r) {
              g.offset && I();
              var c = o[2] === r,
                u = c ? s + e.startY - e.y : g() + r - o[1],
                f = S(u);
              c && u !== f && (s += f - u), g(f)
            }(r || t) && Kt()
          }, e.onEnable = function() {
            fr(p, !l && "x"), cr.addEventListener("refresh", N), bt(z, "resize", N), g.smooth && (g.target.style.scrollBehavior = "auto", g.smooth = b.smooth = !1), k.enable()
          }, e.onDisable = function() {
            fr(p, !0), _t(z, "resize", N), cr.removeEventListener("refresh", N), k.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new Q(e)).iOS = pe, pe && !g() && g(1), pe && B.ticker.add(Fe), c = t._dc, o = B.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: or(g, g(), function() {
                return o.pause()
              })
            },
            onUpdate: Kt,
            onComplete: c.vars.onComplete
          }), t
        }(e);
        return le && le.target === t.target && le.kill(), qe(t.target) && (le = t), t
      }, cr.core = {
        _getVelocityProp: F,
        _inputObserver: pr,
        _scrollers: _,
        _proxies: E,
        bridge: {
          ss: function() {
            De || Vt("scrollStart"), De = xe()
          },
          ref: function() {
            return ee
          }
        }
      }, je() && B.registerPlugin(cr)
    },
    4353(e, t, r) {
      "use strict";
      var n, i = (n = r(6157)) && n.__esModule ? n : {
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
              c = "&gtm_preview=" + a;
            return t || (0, i.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + s + c + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(r).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + s + c + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + o + "','" + t + "');",
              dataLayerVar: this.dataLayer(n, o)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = o
    },
    8664(e, t, r) {
      "use strict";
      var n, i = (n = r(4353)) && n.__esModule ? n : {
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
              c = void 0 === s ? "" : s,
              u = e.preview,
              l = void 0 === u ? "" : u,
              f = this.gtm({
                id: t,
                events: n,
                dataLayer: i || void 0,
                dataLayerName: a,
                auth: c,
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
    3852(e, t, r) {
      "use strict";
      var n, i = (n = r(8664)) && n.__esModule ? n : {
        default: n
      };
      e.exports = i.default
    },
    6157(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    3996(e, t, r) {
      "use strict";
      r.d(t, {
        D: () => Re
      });
      var n = r(1177),
        i = r(3023),
        o = r(9131),
        a = r(4269),
        s = r(5404),
        c = r(8460),
        u = r(6408),
        l = r(7593),
        f = r(9722),
        h = r(85),
        d = r(8603),
        p = r(5384),
        v = r(466),
        y = r(2825),
        m = function() {
          function e() {
            this.assumeImmutableResults = !1, this.getFragmentDoc = (0, o.LV)(s.ct, {
              max: c.v["cache.fragmentQueryDocuments"] || 1e3,
              cache: h.l
            })
          }
          return e.prototype.lookupFragment = function(e) {
            return null
          }, e.prototype.batch = function(e) {
            var t, r = this,
              n = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
            return this.performTransaction(function() {
              return t = e.update(r)
            }, n), t
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
            var r = this;
            return void 0 === t && (t = !!e.optimistic), !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.readQuery"), (0, y.lz)("canonizeResults", function() {
              return r.read((0, n.Cl)((0, n.Cl)({}, e), {
                rootId: e.id || "ROOT_QUERY",
                optimistic: t
              }))
            })
          }, e.prototype.watchFragment = function(e) {
            var t = this,
              r = e.fragment,
              o = e.fragmentName,
              a = e.from,
              s = e.optimistic,
              c = void 0 === s || s,
              h = (0, n.Tt)(e, ["fragment", "fragmentName", "from", "optimistic"]),
              d = this.getFragmentDoc(r, o),
              y = void 0 === a || "string" == typeof a ? a : this.identify(a),
              m = !!e[Symbol.for("apollo.dataMasking")];
            if (!1 !== globalThis.__DEV__) {
              var g = o || (0, u.E4)(r).name.value;
              y || !1 !== globalThis.__DEV__ && i.V1.warn(1, g)
            }
            var b, _ = (0, n.Cl)((0, n.Cl)({}, h), {
              returnPartialData: !0,
              id: y,
              query: d,
              optimistic: c
            });
            return new l.c(function(i) {
              return t.watch((0, n.Cl)((0, n.Cl)({}, _), {
                immediate: !0,
                callback: function(a) {
                  var s = m ? (0, v.z)(a.result, r, t, o) : a.result;
                  if (!b || !(0, p.a)(d, {
                      data: b.result
                    }, {
                      data: s
                    }, e.variables)) {
                    var c = {
                      data: s,
                      complete: !!a.complete
                    };
                    a.missing && (c.missing = (0, f.IM)(a.missing.map(function(e) {
                      return e.missing
                    }))), b = (0, n.Cl)((0, n.Cl)({}, a), {
                      result: s
                    }), i.next(c)
                  }
                }
              }))
            })
          }, e.prototype.readFragment = function(e, t) {
            var r = this;
            return void 0 === t && (t = !!e.optimistic), !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.readFragment"), (0, y.lz)("canonizeResults", function() {
              return r.read((0, n.Cl)((0, n.Cl)({}, e), {
                query: r.getFragmentDoc(e.fragment, e.fragmentName),
                rootId: e.id,
                optimistic: t
              }))
            })
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
            return !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.updateQuery"), this.batch({
              update: function(r) {
                var i = (0, y.lz)("canonizeResults", function() {
                    return r.readQuery(e)
                  }),
                  o = t(i);
                return null == o ? i : (r.writeQuery((0, n.Cl)((0, n.Cl)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e.prototype.updateFragment = function(e, t) {
            return !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.updateFragment"), this.batch({
              update: function(r) {
                var i = (0, y.lz)("canonizeResults", function() {
                    return r.readFragment(e)
                  }),
                  o = t(i);
                return null == o ? i : (r.writeFragment((0, n.Cl)((0, n.Cl)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e
        }();
      !1 !== globalThis.__DEV__ && (m.prototype.getMemoryInternals = d.tQ);
      var g = function(e) {
          function t(r, n, i, o) {
            var a, s = e.call(this, r) || this;
            if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
              s.missing = s.message;
              for (var c = s.path.length - 1; c >= 0; --c) s.missing = ((a = {})[s.path[c]] = s.missing, a)
            } else s.missing = s.path;
            return s.__proto__ = t.prototype, s
          }
          return (0, n.C6)(t, e), t
        }(Error),
        b = r(7849),
        _ = r(2846),
        E = r(2573),
        T = r(9537),
        w = r(3946),
        O = r(5425),
        k = r(5355),
        C = r(5593),
        x = r(5154),
        S = r(6605),
        D = r(1384),
        I = r(7582),
        N = r(7540),
        A = Object.prototype.hasOwnProperty;

      function R(e) {
        return null == e
      }

      function P(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = R(n) ? R(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), R(n) && !R(i) && (n = i), !R(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var M = {
        dataIdFromObject: P,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function F(e) {
        var t = e.canonizeResults;
        return void 0 === t ? M.canonizeResults : t
      }
      var V = /^[_a-z][_0-9a-z]*/i;

      function L(e) {
        var t = e.match(V);
        return t ? t[0] : e
      }

      function j(e, t, r) {
        return !!(0, D.U)(t) && ((0, N.c)(t) ? t.every(function(t) {
          return j(e, t, r)
        }) : e.selections.every(function(e) {
          if ((0, w.dt)(e) && (0, x.MS)(e, r)) {
            var n = (0, w.ue)(e);
            return A.call(t, n) && (!e.selectionSet || j(e.selectionSet, t[n], r))
          }
          return !0
        }))
      }

      function q(e) {
        return (0, D.U)(e) && !(0, w.A_)(e) && !(0, N.c)(e)
      }

      function Q(e, t) {
        var r = (0, s.JG)((0, u.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var B = Object.create(null),
        U = function() {
          return B
        },
        z = Object.create(null),
        Y = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, S.G)((0, w.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, w.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, w.WU)(e);
              if ((0, w.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, w.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.Cl)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), A.call(this.data, e)) {
              var r = this.data[e];
              if (r && A.call(r, t)) return r[t]
            }
            return "__typename" === t && A.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof H ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), A.call(this.data, e) ? this.data[e] : this instanceof H ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, w.A_)(e) && (e = e.__ref), (0, w.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new f.ZI($).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var c = Object.create(null);
                o || (c.__exists = 1), Object.keys(a).forEach(function(e) {
                  if (!o || o[e] !== s[e]) {
                    c[e] = 1;
                    var t = L(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (c[t] = 1), void 0 !== s[e] || n instanceof H || delete s[e]
                  }
                }), !c.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== s.__typename || delete c.__typename, Object.keys(c).forEach(function(e) {
                  return n.group.dirty(r, e)
                })
              }
            }
          }, e.prototype.modify = function(e, t) {
            var r = this,
              o = this.lookup(e);
            if (o) {
              var a = Object.create(null),
                s = !1,
                c = !0,
                u = {
                  DELETE: B,
                  INVALIDATE: z,
                  isReference: w.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, w.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach(function(l) {
                  var f = L(l),
                    h = o[l];
                  if (void 0 !== h) {
                    var d = "function" == typeof t ? t : t[l] || t[f];
                    if (d) {
                      var p = d === U ? B : d((0, S.G)(h), (0, n.Cl)((0, n.Cl)({}, u), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (p === z) r.group.dirty(e, l);
                      else if (p === B && (p = void 0), p !== h && (a[l] = p, s = !0, h = p, !1 !== globalThis.__DEV__)) {
                        var v = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, w.A_)(p)) v(p);
                        else if (Array.isArray(p))
                          for (var y = !1, m = void 0, g = 0, b = p; g < b.length; g++) {
                            var _ = b[g];
                            if ((0, w.A_)(_)) {
                              if (y = !0, v(_)) break
                            } else "object" == typeof _ && _ && r.policies.identify(_)[0] && (m = _);
                            if (y && void 0 !== m) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, m);
                              break
                            }
                          }
                      }
                    }
                    void 0 !== h && (c = !1)
                  }
                }), s) return this.merge(e, a), c && (this instanceof H ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
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
              return this.modify(e, a ? ((n = {})[a] = U, n) : U)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (A.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof H && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach(function(t) {
              A.call(e.policies.rootTypenamesById, t) || r.push(t)
            }), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach(function(r) {
                e && A.call(e, r) || t.delete(r)
              }), e) {
              var r = e.__META,
                i = (0, n.Tt)(e, ["__META"]);
              Object.keys(i).forEach(function(e) {
                t.merge(e, i[e])
              }), r && r.extraRootIds.forEach(this.retain, this)
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
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof H ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach(function(n) {
              A.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            });
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof H;) i = i.parent;
              n.forEach(function(e) {
                return i.delete(e)
              })
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!A.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach(function(e) {
                (0, w.A_)(e) && (t[e.__ref] = !0), (0, D.U)(e) && Object.keys(e).forEach(function(t) {
                  var r = e[t];
                  (0, D.U)(r) && n.add(r)
                })
              })
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
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new I.b(k.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(G(e, t));
              var r = L(t);
              r !== t && this.d(G(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(G(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function G(e, t) {
        return t + "#" + e
      }

      function K(e, t) {
        J(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new W(i)) || this;
            return a.stump = new X(a), a.storageTrie = new I.b(k.et), o && a.replace(o), a
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
      }(Y || (Y = {}));
      var H = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return o.id = t, o.parent = r, o.replay = n, o.group = i, n(o), o
          }
          return (0, n.C6)(t, e), t.prototype.addLayer = function(e, r) {
            return new t(e, this, r, this.group)
          }, t.prototype.removeLayer = function(e) {
            var t = this,
              r = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(e) {
              var n = t.data[e],
                i = r.lookup(e);
              i ? n ? n !== i && Object.keys(n).forEach(function(r) {
                (0, a.L)(n[r], i[r]) || t.group.dirty(e, r)
              }) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(r) {
                t.group.dirty(e, r)
              })) : t.delete(e)
            }), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
          }, t.prototype.toObject = function() {
            return (0, n.Cl)((0, n.Cl)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return A.call(this.data, t) ? (0, n.Cl)((0, n.Cl)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(Y),
        X = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, function() {}, new W(t.group.caching, t.group)) || this
          }
          return (0, n.C6)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(H);

      function $(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, a.L)(n, i) ? n : i
      }

      function J(e) {
        return !!(e instanceof Y && e.group.caching)
      }
      var Z = function() {
        function e() {
          this.known = new(k.En ? WeakSet : Set), this.pool = new I.b(k.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, D.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, D.U)(e)) {
            var t = function(e) {
              return (0, D.U)(e) ? (0, N.c)(e) ? e.slice(0) : (0, n.Cl)({
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
                var s, c = o.length;
                if (a.sorted.forEach(function(r) {
                    o.push(t.admit(e[r]))
                  }), !(s = this.pool.lookupArray(o)).object) {
                  var u = s.object = Object.create(i);
                  this.known.add(u), a.sorted.forEach(function(e, t) {
                    u[e] = o[c + t]
                  }), !1 !== globalThis.__DEV__ && Object.freeze(u)
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

      function ee(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var te = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(k.et ? WeakMap : Map), this.config = (0, C.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: F(e)
          }), this.canon = e.canon || new Z, this.executeSelectionSet = (0, o.LV)(function(e) {
            var r, i = e.context.canonizeResults,
              o = ee(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.Cl)((0, n.Cl)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (K(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }, {
            max: this.config.resultCacheMaxSize || c.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: ee,
            makeCacheKey: function(e, t, r, n) {
              if (J(r.store)) return r.store.makeCacheKey(e, (0, w.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)(function(e) {
            return K(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }, {
            max: this.config.resultCacheMaxSize || c.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (J(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new Z
        }, e.prototype.diffQueryAgainstStore = function(e) {
          var t = e.store,
            r = e.query,
            i = e.rootId,
            o = void 0 === i ? "ROOT_QUERY" : i,
            a = e.variables,
            s = e.returnPartialData,
            c = void 0 === s || s,
            l = e.canonizeResults,
            f = void 0 === l ? this.config.canonizeResults : l,
            h = this.config.cache.policies;
          a = (0, n.Cl)((0, n.Cl)({}, (0, u.wY)((0, u.AT)(r))), a);
          var d, p = (0, w.WU)(o),
            v = this.executeSelectionSet({
              selectionSet: (0, u.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.Cl)({
                store: t,
                query: r,
                policies: h,
                variables: a,
                varString: (0, E.M)(a),
                canonizeResults: f
              }, Q(r, this.config.fragments))
            });
          if (v.missing && (d = [new g(re(v.missing), v.missing, r, a)], !c)) throw d[0];
          return {
            result: v.result,
            complete: !d,
            missing: d
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (J(n.store) && this.knownResults.get(e) === r) {
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
          if ((0, w.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var c, u = a.variables,
            l = a.policies,
            h = a.store.getFieldValue(n, "__typename"),
            d = [],
            p = new f.ZI;

          function v(e, t) {
            var r;
            return e.missing && (c = p.merge(c, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof h && !l.rootIdsByTypename[h] && d.push({
            __typename: h
          });
          var y = new Set(r.selections);
          y.forEach(function(e) {
            var r, f;
            if ((0, x.MS)(e, u))
              if ((0, w.dt)(e)) {
                var m = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  g = (0, w.ue)(e);
                void 0 === m ? _.XY.added(e) || (c = p.merge(c, ((r = {})[g] = "Can't find field '".concat(e.name.value, "' on ").concat((0, w.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, N.c)(m) ? m.length > 0 && (m = v(t.executeSubSelectedArray({
                  field: e,
                  array: m,
                  enclosingRef: o,
                  context: a
                }), g)) : e.selectionSet ? null != m && (m = v(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: m,
                  enclosingRef: (0, w.A_)(m) ? m : o,
                  context: a
                }), g)) : a.canonizeResults && (m = t.canon.pass(m)), void 0 !== m && d.push(((f = {})[g] = m, f))
              } else {
                var b = (0, s.HQ)(e, a.lookupFragment);
                if (!b && e.kind === O.b.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                b && l.fragmentMatches(b, h) && b.selectionSet.selections.forEach(y.add, y)
              }
          });
          var m = {
              result: (0, f.IM)(d),
              missing: c
            },
            g = a.canonizeResults ? this.canon.admit(m) : (0, S.G)(m);
          return g.result && this.knownResults.set(g.result, r), g
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            n = e.field,
            o = e.array,
            a = e.enclosingRef,
            s = e.context,
            c = new f.ZI;

          function u(e, r) {
            var n;
            return e.missing && (t = c.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map(function(e, t) {
            return null === e ? null : (0, N.c)(e) ? u(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? u(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, w.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach(function(r) {
                  (0, D.U)(r) && ((0, i.V1)(!(0, w.A_)(r), 11, function(e, t) {
                    return (0, w.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                  }(e, r), t.name.value), Object.values(r).forEach(n.add, n))
                })
              }
            }(s.store, n, e), e)
          }), {
            result: s.canonizeResults ? this.canon.admit(o) : o,
            missing: t
          }
        }, e
      }();

      function re(e) {
        try {
          JSON.stringify(e, function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          })
        } catch (e) {
          return e
        }
      }
      var ne = r(8471),
        ie = r(1778),
        oe = r(9922),
        ae = Object.create(null);

      function se(e) {
        var t = JSON.stringify(e);
        return ae[t] || (ae[t] = Object.create(null))
      }

      function ce(e) {
        var t = se(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = le(e, function(e) {
              var o = de(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && A.call(t, e[0]) && (o = de(t, e, he)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
            });
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function ue(e) {
        var t = se(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = le(e, function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return de(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && A.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, de(i, s)
                  }
                }
              else if (n && (0, N.E)(n.directives)) {
                var c = r.slice(1),
                  u = n.directives.find(function(e) {
                    return e.name.value === c
                  }),
                  l = u && (0, w.MB)(u, i);
                return l && de(l, e.slice(1))
              }
            }),
            s = JSON.stringify(a);
          return (t || "{}" !== s) && (o += ":" + s), o
        })
      }

      function le(e, t) {
        var r = new f.ZI;
        return fe(e).reduce(function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }, Object.create(null))
      }

      function fe(e) {
        var t = se(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach(function(t, i) {
            (0, N.c)(t) ? (fe(t).forEach(function(e) {
              return r.push(n.concat(e))
            }), n.length = 0) : (n.push(t), (0, N.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          })
        }
        return t.paths
      }

      function he(e, t) {
        return e[t]
      }

      function de(e, t, r) {
        return r = r || he, pe(t.reduce(function e(t, n) {
          return (0, N.c)(t) ? t.map(function(t) {
            return e(t, n)
          }) : t && r(t, n)
        }, e))
      }

      function pe(e) {
        return (0, D.U)(e) ? (0, N.c)(e) ? e.map(pe) : le(Object.keys(e).sort(), function(t) {
          return de(e, t)
        }) : e
      }
      var ve = r(569);

      function ye(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, w.MB)(e.field, e.variables) : null
      }
      var me = function() {},
        ge = function(e, t) {
          return t.fieldName
        },
        be = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        _e = function(e, t) {
          return t
        },
        Ee = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.Cl)({
              dataIdFromObject: P
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
          }
          return e.prototype.identify = function(e, t) {
            var r, i = this,
              o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            var a, s = t && t.storeObject || e,
              c = (0, n.Cl)((0, n.Cl)({}, t), {
                typename: o,
                storeObject: s,
                readField: t && t.readField || function() {
                  var e = we(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }),
              u = o && this.getTypePolicy(o),
              l = u && u.keyFn || this.config.dataIdFromObject;
            return ve.yV.withValue(!0, function() {
              for (; l;) {
                var t = l((0, n.Cl)((0, n.Cl)({}, e), s), c);
                if (!(0, N.c)(t)) {
                  a = t;
                  break
                }
                l = ce(t)
              }
            }), a = a ? String(a) : void 0, c.keyObject ? [a, c.keyObject] : [a]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach(function(r) {
              var i = e[r],
                o = i.queryType,
                a = i.mutationType,
                s = i.subscriptionType,
                c = (0, n.Tt)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), A.call(t.toBeAdded, r) ? t.toBeAdded[r].push(c) : t.toBeAdded[r] = [c]
            })
          }, e.prototype.updateTypePolicy = function(e, t, r) {
            var n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? be : !1 === t ? _e : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? me : (0, N.c)(i) ? ce(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach(function(t) {
              var n = r[t];
              n && (null == n ? void 0 : n.typename) === e || (n = r[t] = {
                typename: e
              });
              var i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  c = i.read,
                  u = i.merge;
                n.keyFn = !1 === s ? ge : (0, N.c)(s) ? ue(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof c && (n.read = c), a(n, u)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || ge)
            })
          }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              n = this.rootTypenamesById[r];
            t !== n && ((0, i.V1)(!n || n === e, 6, e), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
          }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach(function(r) {
              t.getSupertypeSet(r, !0), e[r].forEach(function(e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(V);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              })
            })
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!A.call(this.typePolicies, e)) {
              var r = this.typePolicies[e] = Object.create(null);
              r.fields = Object.create(null);
              var i = this.supertypeMap.get(e);
              !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(r, n) {
                if (r.test(e)) {
                  var o = t.supertypeMap.get(n);
                  o && o.forEach(function(e) {
                    return i.add(e)
                  })
                }
              })), i && i.size && i.forEach(function(e) {
                var i = t.getTypePolicy(e),
                  o = i.fields,
                  a = (0, n.Tt)(i, ["fields"]);
                Object.assign(r, a), Object.assign(r.fields, o)
              })
            }
            var o = this.toBeAdded[e];
            return o && o.length && o.splice(0).forEach(function(r) {
              t.updateTypePolicy(e, r, t.typePolicies[e].fields)
            }), this.typePolicies[e]
          }, e.prototype.getFieldPolicy = function(e, t) {
            if (e) return this.getTypePolicy(e).fields[t]
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
              for (var s = this.getSupertypeSet(t, !0), c = [s], u = function(e) {
                  var t = o.getSupertypeSet(e, !1);
                  t && t.size && c.indexOf(t) < 0 && c.push(t)
                }, l = !(!r || !this.fuzzySubtypes.size), f = !1, h = 0; h < c.length; ++h) {
                var d = c[h];
                if (d.has(a)) return s.has(a) || (f && !1 !== globalThis.__DEV__ && i.V1.warn(7, t, a), s.add(a)), !0;
                d.forEach(u), l && h === c.length - 1 && j(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(e, r) {
                  var n = t.match(e);
                  n && n[0] === t && u(r)
                }))
              }
            return !1
          }, e.prototype.hasKeyArgs = function(e, t) {
            var r = this.getFieldPolicy(e, t);
            return !(!r || !r.keyFn)
          }, e.prototype.getStoreFieldName = function(e) {
            var t, r = e.typename,
              n = e.fieldName,
              i = this.getFieldPolicy(r, n),
              o = i && i.keyFn;
            if (o && r)
              for (var a = {
                  typename: r,
                  fieldName: n,
                  field: e.field || null,
                  variables: e.variables
                }, s = ye(e); o;) {
                var c = o(s, a);
                if (!(0, N.c)(c)) {
                  t = c || n;
                  break
                }
                o = ue(c)
              }
            return void 0 === t && (t = e.field ? (0, w.Ii)(e.field, e.variables) : (0, w.o5)(n, ye(e))), !1 === t ? n : n === L(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = L(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o),
                c = s && s.read;
              if (c) {
                var u = Te(this, r, e, t, t.store.getStorage((0, w.A_)(r) ? r.__ref : r, i));
                return oe.bl.withValue(this.cache, c, [a, u])
              }
              return a
            }
          }, e.prototype.getReadFunction = function(e, t) {
            var r = this.getFieldPolicy(e, t);
            return r && r.read
          }, e.prototype.getMergeFunction = function(e, t, r) {
            var n = this.getFieldPolicy(e, t),
              i = n && n.merge;
            return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i
          }, e.prototype.runMergeFunction = function(e, t, r, n, i) {
            var o = r.field,
              a = r.typename,
              s = r.merge;
            return s === be ? Oe(n.store)(e, t) : s === _e ? t : (n.overwrite && (e = void 0), s(e, t, Te(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function Te(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = L(o),
          s = r.variables || n.variables,
          c = n.store,
          u = c.toReference,
          l = c.canRead;
        return {
          args: ye(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: w.A_,
          toReference: u,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(we(arguments, t, s), n)
          },
          mergeObjects: Oe(n.store)
        }
      }

      function we(e, t, r) {
        var o, a = e[0],
          s = e[1],
          c = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: c > 1 ? s : t
        } : (o = (0, n.Cl)({}, a), A.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, ie.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function Oe(e) {
        return function(t, r) {
          if ((0, N.c)(t) || (0, N.c)(r)) throw (0, i.vA)(9);
          if ((0, D.U)(t) && (0, D.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, w.A_)(t) && q(r)) return e.merge(t.__ref, r), t;
            if (q(t) && (0, w.A_)(r)) return e.merge(t, r.__ref), r;
            if (q(t) && q(r)) return (0, n.Cl)((0, n.Cl)({}, t), r)
          }
          return r
        }
      }

      function ke(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.Cl)((0, n.Cl)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var Ce = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              s = t.result,
              c = t.dataId,
              l = t.variables,
              h = t.overwrite,
              d = (0, u.Vu)(o),
              p = new f.ZI;
            l = (0, n.Cl)((0, n.Cl)({}, (0, u.wY)(d)), l);
            var v = (0, n.Cl)((0, n.Cl)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return p.merge(e, t)
                },
                variables: l,
                varString: (0, E.M)(l)
              }, Q(o, this.fragments)), {
                overwrite: !!h,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              y = this.processSelectionSet({
                result: s || Object.create(null),
                dataId: c,
                selectionSet: d.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: v
              });
            if (!(0, w.A_)(y)) throw (0, i.vA)(12, s);
            return v.incomingById.forEach(function(t, o) {
              var s = t.storeObject,
                c = t.mergeTree,
                u = t.fieldNodeSet,
                l = (0, w.WU)(o);
              if (c && c.map.size) {
                var f = r.applyMerges(c, l, s, v);
                if ((0, w.A_)(f)) return;
                s = f
              }
              if (!1 !== globalThis.__DEV__ && !v.overwrite) {
                var h = Object.create(null);
                u.forEach(function(e) {
                  e.selectionSet && (h[e.name.value] = !0)
                }), Object.keys(s).forEach(function(e) {
                  (function(e) {
                    return !0 === h[L(e)]
                  })(e) && ! function(e) {
                    var t = c && c.map.get(e);
                    return Boolean(t && t.info && t.info.merge)
                  }(e) && function(e, t, r, o) {
                    var s = function(e) {
                        var t = o.getFieldValue(e, r);
                        return "object" == typeof t && t
                      },
                      c = s(e);
                    if (c) {
                      var u = s(t);
                      if (u && !(0, w.A_)(c) && !(0, a.L)(c, u) && !Object.keys(c).every(function(e) {
                          return void 0 !== o.getFieldValue(u, e)
                        })) {
                        var l = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          f = L(r),
                          h = "".concat(l, ".").concat(f);
                        if (!Ae.has(h)) {
                          Ae.add(h);
                          var d = [];
                          (0, N.c)(c) || (0, N.c)(u) || [c, u].forEach(function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || d.includes(t) || d.push(t)
                          }), !1 !== globalThis.__DEV__ && i.V1.warn(15, f, l, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", h, (0, n.Cl)({}, c), (0, n.Cl)({}, u))
                        }
                      }
                    }
                  }(l, s, e, v.store)
                })
              }
              e.merge(o, s)
            }), e.retain(y.__ref), y
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              a = e.selectionSet,
              s = e.context,
              c = e.mergeTree,
              u = this.cache.policies,
              l = Object.create(null),
              f = r && u.rootTypenamesById[r] || (0, w.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var h = function() {
                var e = we(arguments, l, s.variables);
                if ((0, w.A_)(e.from)) {
                  var t = s.incomingById.get(e.from.__ref);
                  if (t) {
                    var r = u.readField((0, n.Cl)((0, n.Cl)({}, e), {
                      from: t.storeObject
                    }), s);
                    if (void 0 !== r) return r
                  }
                }
                return u.readField(e, s)
              },
              d = new Set;
            this.flattenFields(a, o, s, f).forEach(function(e, r) {
              var n, a = (0, w.ue)(r),
                s = o[a];
              if (d.add(r), void 0 !== s) {
                var p = u.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  v = Se(c, p),
                  y = t.processFieldValue(s, r, r.selectionSet ? ke(e, !1, !1) : e, v),
                  m = void 0;
                r.selectionSet && ((0, w.A_)(y) || q(y)) && (m = h("__typename", y));
                var g = u.getMergeFunction(f, r.name.value, m);
                g ? v.info = {
                  field: r,
                  typename: f,
                  merge: g
                } : Ne(c, p), l = e.merge(l, ((n = {})[p] = y, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || _.XY.added(r) || u.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, w.ue)(r), o)
            });
            try {
              var p = u.identify(o, {
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
              var m = (0, w.WU)(r),
                g = s.written[r] || (s.written[r] = []);
              if (g.indexOf(a) >= 0) return m;
              if (g.push(a), this.reader && this.reader.isFresh(o, m, a, s)) return m;
              var b = s.incomingById.get(r);
              return b ? (b.storeObject = s.merge(b.storeObject, l), b.mergeTree = De(b.mergeTree, c), d.forEach(function(e) {
                return b.fieldNodeSet.add(e)
              })) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: Ie(c) ? void 0 : c,
                fieldNodeSet: d
              }), m
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, N.c)(e) ? e.map(function(e, o) {
              var a = i.processFieldValue(e, t, r, Se(n, o));
              return Ne(n, o), a
            }) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : !1 !== globalThis.__DEV__ ? (0, ne.m)(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, w.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              c = new I.b(!1);
            return function e(u, l) {
              var f = c.lookup(u, l.clientOnly, l.deferred);
              f.visited || (f.visited = !0, u.selections.forEach(function(c) {
                if ((0, x.MS)(c, r.variables)) {
                  var u = l.clientOnly,
                    f = l.deferred;
                  if (u && f || !(0, N.E)(c.directives) || c.directives.forEach(function(e) {
                      var t = e.name.value;
                      if ("client" === t && (u = !0), "defer" === t) {
                        var n = (0, w.MB)(e, r.variables);
                        n && !1 === n.if || (f = !0)
                      }
                    }), (0, w.dt)(c)) {
                    var h = o.get(c);
                    h && (u = u && h.clientOnly, f = f && h.deferred), o.set(c, ke(r, u, f))
                  } else {
                    var d = (0, s.HQ)(c, r.lookupFragment);
                    if (!d && c.kind === O.b.FRAGMENT_SPREAD) throw (0, i.vA)(14, c.name.value);
                    d && a.fragmentMatches(d, n, t, r.variables) && e(d.selectionSet, ke(r, u, f))
                  }
                }
              }))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, c = this;
            if (e.map.size && !(0, w.A_)(r)) {
              var u, l = (0, N.c)(r) || !(0, w.A_)(t) && !q(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, w.A_)(l) ? l.__ref : l]);
              var h = function(e, t) {
                return (0, N.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach(function(e, t) {
                var r = h(l, t),
                  n = h(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = c.applyMerges(e, r, n, o, a);
                  s !== n && (u = u || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              }), u && (r = (0, N.c)(f) ? f.slice(0) : (0, n.Cl)({}, f), u.forEach(function(e, t) {
                r[t] = e
              }))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        xe = [];

      function Se(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, xe.pop() || {
          map: new Map
        }), r.get(t)
      }

      function De(e, t) {
        if (e === t || !t || Ie(t)) return e;
        if (!e || Ie(e)) return t;
        var r = e.info && t.info ? (0, n.Cl)((0, n.Cl)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach(function(e, r) {
            o.map.set(r, De(e, t.map.get(r))), a.delete(r)
          }), a.forEach(function(r) {
            o.map.set(r, De(t.map.get(r), e.map.get(r)))
          })
        }
        return o
      }

      function Ie(e) {
        return !e || !(e.info || e.map.size)
      }

      function Ne(e, t) {
        var r = e.map,
          n = r.get(t);
        n && Ie(n) && (xe.push(n), r.delete(t))
      }
      var Ae = new Set,
        Re = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new b.c(_.XY), r.assumeImmutableResults = !0, r.makeVar = oe.UT, r.txCount = 0, !1 !== globalThis.__DEV__ && ((0, y.cc)(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), (0, y.cc)(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), r.config = function(e) {
              return (0, C.o)(M, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new Ee({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.C6)(t, e), t.prototype.init = function() {
            var e = this.data = new Y.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.addTypenameTransform.resetCache(), null == n || n.resetCaches(), this.storeWriter = new Ce(this, this.storeReader = new te({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: F(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, o.LV)(function(e, r) {
              return t.broadcastWatch(e, r)
            }, {
              max: this.config.resultCacheMaxSize || c.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (J(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, (0, E.M)({
                    optimistic: n,
                    id: i,
                    variables: o
                  }))
                }
              }
            }), new Set([this.data.group, this.optimisticData.group]).forEach(function(e) {
              return e.resetCaching()
            })
          }, t.prototype.restore = function(e) {
            return this.init(), e && this.data.replace(e), this
          }, t.prototype.extract = function(e) {
            return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract()
          }, t.prototype.read = function(e) {
            !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.read");
            var t = e.returnPartialData,
              r = void 0 !== t && t;
            try {
              return this.storeReader.diffQueryAgainstStore((0, n.Cl)((0, n.Cl)({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r
              })).result || null
            } catch (e) {
              if (e instanceof g) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (A.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore((0, n.Cl)((0, n.Cl)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              rootId: e.id || "ROOT_QUERY",
              config: this.config
            }))
          }, t.prototype.watch = function(e) {
            var t = this;
            return this.watches.size || (0, oe.MS)(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && (0, oe.WR)(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            !1 !== globalThis.__DEV__ && (0, y.cc)(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), E.M.reset(), T.y.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, w.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              !1 !== globalThis.__DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (A.call(e, "id")) return !1;
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
            return this.init(), E.M.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
              return t.maybeBroadcastWatch.forget(e)
            }), this.watches.clear(), (0, oe.WR)(this)) : this.broadcastWatches(), Promise.resolve()
          }, t.prototype.removeOptimistic = function(e) {
            var t = this.optimisticData.removeLayer(e);
            t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches())
          }, t.prototype.batch = function(e) {
            var t, r = this,
              i = e.update,
              o = e.optimistic,
              a = void 0 === o || o,
              s = e.removeOptimistic,
              c = e.onWatchUpdated,
              u = function(e) {
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
            return c && !this.txCount && this.broadcastWatches((0, n.Cl)((0, n.Cl)({}, e), {
              onWatchUpdated: function(e) {
                return l.add(e), !1
              }
            })), "string" == typeof a ? this.optimisticData = this.optimisticData.addLayer(a, u) : !1 === a ? u(this.data) : u(), "string" == typeof s && (this.optimisticData = this.optimisticData.removeLayer(s)), c && l.size ? (this.broadcastWatches((0, n.Cl)((0, n.Cl)({}, e), {
              onWatchUpdated: function(e, t) {
                var r = c.call(this, e, t);
                return !1 !== r && l.delete(e), r
              }
            })), l.size && l.forEach(function(e) {
              return r.maybeBroadcastWatch.dirty(e)
            })) : this.broadcastWatches(e), t
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
            this.txCount || this.watches.forEach(function(r) {
              return t.maybeBroadcastWatch(r, e)
            })
          }, t.prototype.addFragmentsToDocument = function(e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e
          }, t.prototype.addTypenameToDocument = function(e) {
            return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e
          }, t.prototype.broadcastWatch = function(e, t) {
            var r = this,
              n = e.lastDiff,
              i = (0, y.lz)("canonizeResults", function() {
                return r.diff(e)
              });
            t && (e.optimistic && "string" == typeof t.optimistic && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, i, n)) || n && (0, a.L)(n.result, i.result) || e.callback(e.lastDiff = i, n)
          }, t
        }(m);
      !1 !== globalThis.__DEV__ && (Re.prototype.getMemoryInternals = d.cM)
    },
    4395(e, t, r) {
      "use strict";
      r.d(t, {
        R: () => ie
      });
      var n = r(1177),
        i = r(3023),
        o = r(6964),
        a = o.C.execute,
        s = r(4915),
        c = r(8548),
        u = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, c.$)(t).request) || this;
            return r.options = t, r
          }
          return (0, n.C6)(t, e), t
        }(o.C),
        l = r(4269),
        f = r(1029),
        h = r(5154),
        d = r(2846),
        p = r(5404),
        v = r(2573),
        y = r(7849),
        m = r(7593);

      function g(e, t, r) {
        return new m.c(function(n) {
          var i = {
            then: function(e) {
              return new Promise(function(t) {
                return t(e())
              })
            }
          };

          function o(e, t) {
            return function(r) {
              if (e) {
                var o = function() {
                  return n.closed ? 0 : e(r)
                };
                i = i.then(o, o).then(function(e) {
                  return n.next(e)
                }, function(e) {
                  return n.error(e)
                })
              } else n[t](r)
            }
          }
          var a = {
              next: o(t, "next"),
              error: o(r, "error"),
              complete: function() {
                i.then(function() {
                  return n.complete()
                })
              }
            },
            s = e.subscribe(a);
          return function() {
            return s.unsubscribe()
          }
        })
      }
      var b = r(7540);

      function _(e) {
        var t = E(e);
        return (0, b.E)(t)
      }

      function E(e) {
        var t = (0, b.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, f.ST)(e) && (0, b.E)(e.incremental) && e.incremental.forEach(function(e) {
          e.errors && t.push.apply(t, e.errors)
        }), t
      }
      var T = r(6408),
        w = r(3946),
        O = r(1384),
        k = r(9930),
        C = r(7078),
        x = r(9531);

      function S(e) {
        return e && "function" == typeof e.then
      }
      var D = function(e) {
        function t(t) {
          var r = e.call(this, function(e) {
            return r.addObserver(e),
              function() {
                return r.removeObserver(e)
              }
          }) || this;
          return r.observers = new Set, r.promise = new Promise(function(e, t) {
            r.resolve = e, r.reject = t
          }), r.handlers = {
            next: function(e) {
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), (0, C.w)(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout(function() {
                return t.unsubscribe()
              }), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), (0, C.w)(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? S(i) ? i.then(function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }, r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout(function() {
                  return t.unsubscribe()
                }), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), (0, C.w)(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch(function(e) {}), "function" == typeof t && (t = [new m.c(t)]), S(t) ? t.then(function(e) {
            return r.start(e)
          }, r.handlers.error) : r.start(t), r
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
          r.size && (this.nextResultListeners = new Set, r.forEach(function(r) {
            return r(e, t)
          }))
        }, t.prototype.beforeNext = function(e) {
          var t = !1;
          this.nextResultListeners.add(function(r, n) {
            t || (t = !0, e(r, n))
          })
        }, t
      }(m.c);
      (0, x.r)(D);
      var I = r(5227),
        N = r(2959),
        A = r(839),
        R = r(9722),
        P = r(5355),
        M = r(2825),
        F = new(P.et ? WeakMap : Map);

      function V(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return F.set(e, (F.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }
      var L = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          F.has(r) || (F.set(r, 0), V(r, "evict"), V(r, "modify"), V(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || A.pT.loading;
          return this.variables && this.networkStatus !== A.pT.loading && !(0, l.L)(this.variables, e.variables) && (t = A.pT.setVariables), (0, l.L)(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
          }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
        }, e.prototype.resetDiff = function() {
          this.lastDiff = void 0
        }, e.prototype.getDiff = function() {
          var e = this,
            t = this.getDiffOptions();
          if (this.lastDiff && (0, l.L)(t, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables);
          var r = this.observableQuery;
          if (r && "no-cache" === r.options.fetchPolicy) return {
            complete: !1
          };
          var n = (0, M.lz)("canonizeResults", function() {
            return e.cache.diff(t)
          });
          return this.updateLastDiff(n, t), n
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
          e && !e.complete && (0, M.lz)("getLastError", function() {
            var e;
            return null === (e = r.observableQuery) || void 0 === e ? void 0 : e.getLastError()
          }) || (this.updateLastDiff(e), (0, l.L)(n && n.result, e && e.result) || null === (t = this.observableQuery) || void 0 === t || t.scheduleNotify())
        }, e.prototype.setObservableQuery = function(e) {
          e !== this.observableQuery && (this.observableQuery = e, e && (e.queryInfo = this))
        }, e.prototype.stop = function() {
          var e;
          if (!this.stopped) {
            this.stopped = !0, null === (e = this.observableQuery) || void 0 === e || e.resetNotifications(), this.cancel();
            var t = this.observableQuery;
            t && t.stopPolling()
          }
        }, e.prototype.cancel = function() {
          var e;
          null === (e = this.cancelWatch) || void 0 === e || e.call(this), this.cancelWatch = void 0
        }, e.prototype.updateWatch = function(e) {
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
            this.lastWatch && (0, l.L)(i, this.lastWatch) || (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === F.get(this.cache) && (0, l.L)(t, r.variables) && (0, l.L)(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i, o = this,
            a = new R.ZI,
            s = (0, b.E)(e.errors) ? e.errors.slice(0) : [];
          if (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(), "incremental" in e && (0, b.E)(e.incremental)) {
            var c = (0, f.bd)(this.getDiff().result, e);
            e.data = c
          } else if ("hasNext" in e && e.hasNext) {
            var u = this.getDiff();
            e.data = a.merge(u.result, e.data)
          }
          this.graphQLErrors = s, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (j(e, r.errorPolicy) ? this.cache.performTransaction(function(i) {
            if (o.shouldWrite(e, r.variables)) i.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), o.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: F.get(o.cache)
            };
            else if (o.lastDiff && o.lastDiff.diff.complete) return void(e.data = o.lastDiff.diff.result);
            var a = o.getDiffOptions(r.variables),
              s = (0, M.lz)("canonizeResults", function() {
                return i.diff(a)
              });
            !o.stopped && (0, l.L)(o.variables, r.variables) && o.updateWatch(r.variables), o.updateLastDiff(s, a), s.complete && (e.data = s.result)
          }) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = A.pT.ready
        }, e.prototype.markError = function(e) {
          var t;
          return this.networkStatus = A.pT.error, this.lastWrite = void 0, null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function j(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !_(e);
        return !n && r && e.data && (n = !0), n
      }
      var q = r(9537),
        Q = r(7582),
        B = r(5879),
        U = r(8460),
        z = r(8339),
        Y = r(569),
        W = r(466),
        G = Object.prototype.hasOwnProperty,
        K = Object.create(null),
        H = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new B.A(U.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Q.b(!1), this.noCacheWarningsByQueryId = new Set;
            var r = new y.c(function(e) {
              return t.cache.transformDocument(e)
            }, {
              cache: !1
            });
            this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
            var n = e.documentTransform;
            this.documentTransform = n ? r.concat(n).concat(r) : r, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null))
          }
          return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach(function(t, r) {
              e.stopQueryNoBroadcast(r)
            }), this.cancelPendingFetches((0, i.vA)(35))
          }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach(function(t) {
              return t(e)
            }), this.fetchCancelFns.clear()
          }, e.prototype.mutate = function(e) {
            return (0, n.sH)(this, arguments, void 0, function(e) {
              var t, r, o, a, s, c, u, l = e.mutation,
                f = e.variables,
                h = e.optimisticResponse,
                d = e.updateQueries,
                p = e.refetchQueries,
                v = void 0 === p ? [] : p,
                y = e.awaitRefetchQueries,
                m = void 0 !== y && y,
                b = e.update,
                T = e.onQueryUpdated,
                w = e.fetchPolicy,
                O = void 0 === w ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.fetchPolicy) || "network-only" : w,
                k = e.errorPolicy,
                C = void 0 === k ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.errorPolicy) || "none" : k,
                x = e.keepRootFields,
                S = e.context;
              return (0, n.YH)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 36), (0, i.V1)("network-only" === O || "no-cache" === O, 37), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, S)] : [3, 2];
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
                      fetchPolicy: O,
                      errorPolicy: C,
                      context: S,
                      updateQueries: d,
                      update: b,
                      keepRootFields: x
                    }), this.broadcastQueries(), s = this, [2, new Promise(function(e, r) {
                      return g(s.getObservableFromLink(l, (0, n.Cl)((0, n.Cl)({}, S), {
                        optimisticResponse: a ? h : void 0
                      }), f, {}, !1), function(e) {
                        if (_(e) && "none" === C) throw new I.K4({
                          graphQLErrors: E(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.Cl)({}, e);
                        return "function" == typeof v && (v = v(r)), "ignore" === C && _(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: O,
                          errorPolicy: C,
                          context: S,
                          update: b,
                          updateQueries: d,
                          awaitRefetchQueries: m,
                          refetchQueries: v,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: T,
                          keepRootFields: x
                        })
                      }).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.Cl)((0, n.Cl)({}, r), {
                            data: s.maskOperation({
                              document: l,
                              data: r.data,
                              fetchPolicy: O,
                              id: t
                            })
                          }))
                        },
                        error: function(e) {
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof I.K4 ? e : new I.K4({
                            networkError: e
                          }))
                        }
                      })
                    })]
                }
              })
            })
          }, e.prototype.markMutationResult = function(e, t) {
            var r = this;
            void 0 === t && (t = this.cache);
            var i = e.result,
              o = [],
              a = "no-cache" === e.fetchPolicy;
            if (!a && j(i, e.errorPolicy)) {
              if ((0, f.ST)(i) || o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), (0, f.ST)(i) && (0, b.E)(i.incremental)) {
                var s = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.getDocumentInfo(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  }),
                  c = void 0;
                s.result && (c = (0, f.bd)(s.result, i)), void 0 !== c && (i.data = c, o.push({
                  result: c,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }))
              }
              var u = e.updateQueries;
              u && this.queries.forEach(function(e, n) {
                var a = e.observableQuery,
                  s = a && a.queryName;
                if (s && G.call(u, s)) {
                  var c = u[s],
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
                    var v = c(p, {
                      mutationResult: i,
                      queryName: f && (0, T.n4)(f) || void 0,
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
              })
            }
            if (o.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
              var l = [];
              if (this.refetchQueries({
                  updateCache: function(t) {
                    a || o.forEach(function(e) {
                      return t.write(e)
                    });
                    var s = e.update,
                      c = !(0, f.YX)(i) || (0, f.ST)(i) && !i.hasNext;
                    if (s) {
                      if (!a) {
                        var u = t.diff({
                          id: "ROOT_MUTATION",
                          query: r.getDocumentInfo(e.document).asQuery,
                          variables: e.variables,
                          optimistic: !1,
                          returnPartialData: !0
                        });
                        u.complete && ("incremental" in (i = (0, n.Cl)((0, n.Cl)({}, i), {
                          data: u.result
                        })) && delete i.incremental, "hasNext" in i && delete i.hasNext)
                      }
                      c && s(t, i, {
                        context: e.context,
                        variables: e.variables
                      })
                    }
                    a || e.keepRootFields || !c || t.modify({
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
                }).forEach(function(e) {
                  return l.push(e)
                }), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(l).then(function() {
                return i
              })
            }
            return Promise.resolve(i)
          }, e.prototype.markMutationOptimistic = function(e, t) {
            var r = this,
              o = "function" == typeof e ? e(t.variables, {
                IGNORE: K
              }) : e;
            return o !== K && (this.cache.recordOptimisticTransaction(function(e) {
              try {
                r.markMutationResult((0, n.Cl)((0, n.Cl)({}, t), {
                  result: {
                    data: o
                  }
                }), e)
              } catch (e) {
                !1 !== globalThis.__DEV__ && i.V1.error(e)
              }
            }, t.mutationId), !0)
          }, e.prototype.fetchQuery = function(e, t, r) {
            return this.fetchConcastWithInfo(this.getOrCreateQuery(e), t, r).concast.promise
          }, e.prototype.getQueryStore = function() {
            var e = Object.create(null);
            return this.queries.forEach(function(t, r) {
              e[r] = {
                variables: t.variables,
                networkStatus: t.networkStatus,
                networkError: t.networkError,
                graphQLErrors: t.graphQLErrors
              }
            }), e
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
                defaultVars: (0, T.wY)((0, T.Vu)(e)),
                asQuery: (0, n.Cl)((0, n.Cl)({}, e), {
                  definitions: e.definitions.map(function(e) {
                    return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, n.Cl)((0, n.Cl)({}, e), {
                      operation: "query"
                    }) : e
                  })
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
            var r = new L(this),
              i = new N.U({
                queryManager: this,
                queryInfo: r,
                options: e
              });
            return i.lastQuery = t, N.U.inactiveOnCreation.getValue() || this.queries.set(i.queryId, r), r.init({
              document: t,
              observableQuery: i,
              variables: i.variables
            }), i
          }, e.prototype.query = function(e, t) {
            var r = this;
            void 0 === t && (t = this.generateQueryId()), (0, i.V1)(e.query, 38), (0, i.V1)("Document" === e.query.kind, 39), (0, i.V1)(!e.returnPartialData, 40), (0, i.V1)(!e.pollInterval, 41);
            var o = this.transform(e.query);
            return this.fetchQuery(t, (0, n.Cl)((0, n.Cl)({}, e), {
              query: o
            })).then(function(i) {
              return i && (0, n.Cl)((0, n.Cl)({}, i), {
                data: r.maskOperation({
                  document: o,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: t
                })
              })
            }).finally(function() {
              return r.stopQuery(t)
            })
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
            }), this.cancelPendingFetches((0, i.vA)(42)), this.queries.forEach(function(e) {
              e.observableQuery ? e.networkStatus = A.pT.loading : e.stop()
            }), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
          }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map,
              o = new Map,
              a = new Map,
              s = new Set;
            return Array.isArray(e) && e.forEach(function(e) {
              if ("string" == typeof e) o.set(e, e), a.set(e, !1);
              else if ((0, w.Kc)(e)) {
                var r = (0, q.y)(t.transform(e));
                o.set(r, (0, T.n4)(e)), a.set(r, !1)
              } else(0, O.U)(e) && e.query && s.add(e)
            }), this.queries.forEach(function(t, n) {
              var i = t.observableQuery,
                o = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && a.has(s) || o && a.has((0, q.y)(o))) && (r.set(n, i), s && a.set(s, !0), o && a.set((0, q.y)(o), !0))
              }
            }), s.size && s.forEach(function(e) {
              var o = (0, k.v)("legacyOneTimeQuery"),
                a = t.getOrCreateQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new N.U({
                  queryManager: t,
                  queryInfo: a,
                  options: (0, n.Cl)((0, n.Cl)({}, e), {
                    fetchPolicy: "network-only"
                  })
                });
              (0, i.V1)(s.queryId === o), a.setObservableQuery(s), r.set(o, s)
            }), !1 !== globalThis.__DEV__ && a.size && a.forEach(function(e, t) {
              if (!e) {
                var r = o.get(t);
                r ? !1 !== globalThis.__DEV__ && i.V1.warn(43, r) : !1 !== globalThis.__DEV__ && i.V1.warn(44)
              }
            }), r
          }, e.prototype.reFetchObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1);
            var r = [];
            return this.getObservableQueries(e ? "all" : "active").forEach(function(n, i) {
              var o = n.options.fetchPolicy;
              (0, M.lz)("resetLastResults", function() {
                return n.resetLastResults()
              }), (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()), (t.queries.get(i) || n.queryInfo).setDiff(null)
            }), this.broadcastQueries(), Promise.all(r)
          }, e.prototype.startGraphQLSubscription = function(e) {
            var t = this,
              r = e.query,
              n = e.variables,
              i = e.fetchPolicy,
              o = e.errorPolicy,
              a = void 0 === o ? "none" : o,
              s = e.context,
              c = void 0 === s ? {} : s,
              u = e.extensions,
              l = void 0 === u ? {} : u;
            r = this.transform(r), n = this.getVariables(r, n);
            var f = function(e) {
              return t.getObservableFromLink(r, c, e, l).map(function(n) {
                "no-cache" !== i && (j(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = _(n),
                  s = (0, I.uR)(n);
                if (o || s) {
                  var c = {};
                  if (o && (c.graphQLErrors = n.errors), s && (c.protocolErrors = n.extensions[I.K$]), "none" === a || s) throw new I.K4(c)
                }
                return "ignore" === a && delete n.errors, n
              })
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var h = this.localState.addExportedVariables(r, n, c).then(f);
              return new m.c(function(e) {
                var t = null;
                return h.then(function(r) {
                    return t = r.subscribe(e)
                  }, e.error),
                  function() {
                    return t && t.unsubscribe()
                  }
              })
            }
            return f(n)
          }, e.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries()
          }, e.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
          }, e.prototype.removeQuery = function(e) {
            var t;
            this.fetchCancelFns.delete(e), this.queries.has(e) && (null === (t = this.queries.get(e)) || void 0 === t || t.stop(), this.queries.delete(e))
          }, e.prototype.broadcastQueries = function() {
            this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
              var t;
              return null === (t = e.observableQuery) || void 0 === t ? void 0 : t.notify()
            })
          }, e.prototype.getLocalState = function() {
            return this.localState
          }, e.prototype.getObservableFromLink = function(e, t, r, i, o) {
            var s, c, u = this;
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
                  operationName: (0, T.n4)(f) || void 0,
                  context: this.prepareContext((0, n.Cl)((0, n.Cl)({}, t), {
                    forceFetch: !o
                  })),
                  extensions: i
                };
              if (t = y.context, o) {
                var b = (0, q.y)(f),
                  _ = (0, v.M)(r),
                  E = d.lookup(b, _);
                if (!(c = E.observable)) {
                  var w = new D([a(p, y)]);
                  c = E.observable = w, w.beforeNext(function e(t, r) {
                    "next" === t && "hasNext" in r && r.hasNext ? w.beforeNext(e) : d.remove(b, _)
                  })
                }
              } else c = new D([a(p, y)])
            } else c = new D([m.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return h && (c = g(c, function(e) {
              return u.localState.runResolvers({
                document: h,
                remoteResult: e,
                context: t,
                variables: r
              })
            })), c
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(r.query);
            return g(this.getObservableFromLink(i, r.context, r.variables), function(o) {
              var a = E(o),
                s = a.length > 0,
                c = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === c) throw e.markError(new I.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var u = {
                data: o.data,
                loading: !1,
                networkStatus: A.pT.ready
              };
              return s && "none" === c && (u.data = void 0), s && "ignore" !== c && (u.errors = a, u.networkStatus = A.pT.error), u
            }, function(t) {
              var r = (0, I.Mn)(t) ? t : new I.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            })
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = A.pT.loading), void 0 === n && (n = t.query);
            var o, a, s = this.getVariables(n, t.variables),
              c = this.defaultOptions.watchQuery,
              u = t.fetchPolicy,
              l = void 0 === u ? c && c.fetchPolicy || "cache-first" : u,
              f = t.errorPolicy,
              h = void 0 === f ? c && c.errorPolicy || "none" : f,
              d = t.returnPartialData,
              p = void 0 !== d && d,
              v = t.notifyOnNetworkStatusChange,
              y = void 0 !== v && v,
              m = t.context,
              g = void 0 === m ? {} : m,
              b = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: l,
                errorPolicy: h,
                returnPartialData: p,
                notifyOnNetworkStatusChange: y,
                context: g
              }),
              _ = function(n) {
                b.variables = n;
                var o = i.fetchQueryByPolicy(e, b, r);
                return "standby" !== b.fetchPolicy && o.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), o
              },
              E = function() {
                return i.fetchCancelFns.delete(e.queryId)
              };
            if (this.fetchCancelFns.set(e.queryId, function(e) {
                E(), setTimeout(function() {
                  return o.cancel(e)
                })
              }), this.getDocumentInfo(b.query).hasClientExports) o = new D(this.localState.addExportedVariables(b.query, b.variables, b.context).then(_).then(function(e) {
              return e.sources
            })), a = !0;
            else {
              var T = _(b.variables);
              a = T.fromLink, o = new D(T.sources)
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
              c = e.onQueryUpdated,
              u = new Map;
            n && this.getObservableQueries(n).forEach(function(e, r) {
              u.set(r, {
                oq: e,
                lastDiff: (t.queries.get(r) || e.queryInfo).getDiff()
              })
            });
            var l = new Map;
            return r && this.cache.batch({
              update: r,
              optimistic: o && s || !1,
              removeOptimistic: s,
              onWatchUpdated: function(e, t, r) {
                var n = e.watcher instanceof L && e.watcher.observableQuery;
                if (n) {
                  if (c) {
                    u.delete(n.queryId);
                    var i = c(n, t, r);
                    return !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), i
                  }
                  null !== c && u.set(n.queryId, {
                    oq: n,
                    lastDiff: r,
                    diff: t
                  })
                }
              }
            }), u.size && u.forEach(function(e, r) {
              var n, i = e.oq,
                o = e.lastDiff,
                a = e.diff;
              c && (a || (a = (0, M.lz)("canonizeResults", function() {
                return t.cache.diff(i.queryInfo.getDiffOptions())
              })), n = c(i, a, o)), c && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            }), s && this.cache.removeOptimistic(s), l
          }, e.prototype.maskOperation = function(e) {
            var t, r, n, o = e.document,
              a = e.data;
            if (!1 !== globalThis.__DEV__) {
              var s = e.fetchPolicy,
                c = e.id,
                u = null === (t = (0, T.Vu)(o)) || void 0 === t ? void 0 : t.operation,
                l = (null !== (r = null == u ? void 0 : u[0]) && void 0 !== r ? r : "o") + c;
              !this.dataMasking || "no-cache" !== s || (0, p.s6)(o) || this.noCacheWarningsByQueryId.has(l) || (this.noCacheWarningsByQueryId.add(l), !1 !== globalThis.__DEV__ && i.V1.warn(45, null !== (n = (0, T.n4)(o)) && void 0 !== n ? n : "Unnamed ".concat(null != u ? u : "operation")))
            }
            return this.dataMasking ? function(e, t, r) {
              var n;
              if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, Y.Ki)(), e;
              var o = (0, T.Vu)(t);
              return (0, i.V1)(o, 63), null == e ? e : (0, z.S)(e, o.selectionSet, {
                operationType: o.operation,
                operationName: null === (n = o.name) || void 0 === n ? void 0 : n.value,
                fragmentMap: (0, p.JG)((0, T.zK)(t)),
                cache: r,
                mutableTargets: new Y.jq,
                knownChanged: new Y.xm
              })
            }(a, o, this.cache) : a
          }, e.prototype.maskFragment = function(e) {
            var t = e.data,
              r = e.fragment,
              n = e.fragmentName;
            return this.dataMasking ? (0, W.z)(t, r, this.cache, n) : t
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var i = this,
              o = t.query,
              a = t.variables,
              s = t.fetchPolicy,
              c = t.refetchWritePolicy,
              u = t.errorPolicy,
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
                !1 === globalThis.__DEV__ || f || (0, l.L)(s, {}) || (0, N.y)(t.missing);
                var c = function(e) {
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
                }).then(function(e) {
                  return c(e.data || void 0)
                }) : "none" === u && r === A.pT.refetch && Array.isArray(t.missing) ? c(void 0) : c(s)
              },
              g = "no-cache" === s ? 0 : r === A.pT.refetch && "merge" !== c ? 1 : 2,
              b = function() {
                return i.getResultsFromLink(e, g, {
                  query: o,
                  variables: a,
                  context: h,
                  fetchPolicy: s,
                  errorPolicy: u
                })
              },
              _ = d && "number" == typeof p && p !== r && (0, A.bi)(r);
            switch (s) {
              default:
              case "cache-first":
                return (E = v()).complete ? {
                  fromLink: !1,
                  sources: [y(E, e.markReady())]
                } : f || _ ? {
                  fromLink: !0,
                  sources: [y(E), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "cache-and-network":
                var E;
                return (E = v()).complete || f || _ ? {
                  fromLink: !0,
                  sources: [y(E), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [y(v(), e.markReady())]
                };
              case "network-only":
                return _ ? {
                  fromLink: !0,
                  sources: [y(v()), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "no-cache":
                return _ ? {
                  fromLink: !0,
                  sources: [y(e.getDiff()), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "standby":
                return {
                  fromLink: !1, sources: []
                }
            }
          }, e.prototype.getOrCreateQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new L(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        X = r(7646),
        $ = r(5425);

      function J(e) {
        return e.kind === $.b.FIELD || e.kind === $.b.FRAGMENT_SPREAD || e.kind === $.b.INLINE_FRAGMENT
      }
      var Z = r(9922),
        ee = function() {
          function e(e) {
            var t = e.cache,
              r = e.client,
              n = e.resolvers,
              i = e.fragmentMatcher;
            this.selectionsToResolveCache = new WeakMap, this.cache = t, r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i)
          }
          return e.prototype.addResolvers = function(e) {
            var t = this;
            this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
              t.resolvers = (0, R.D9)(t.resolvers, e)
            }) : this.resolvers = (0, R.D9)(this.resolvers, e)
          }, e.prototype.setResolvers = function(e) {
            this.resolvers = {}, this.addResolvers(e)
          }, e.prototype.getResolvers = function() {
            return this.resolvers || {}
          }, e.prototype.runResolvers = function(e) {
            return (0, n.sH)(this, arguments, void 0, function(e) {
              var t = e.document,
                r = e.remoteResult,
                i = e.context,
                o = e.variables,
                a = e.onlyRunForcedResolvers,
                s = void 0 !== a && a;
              return (0, n.YH)(this, function(e) {
                return t ? [2, this.resolveDocument(t, r.data, i, o, this.fragmentMatcher, s).then(function(e) {
                  return (0, n.Cl)((0, n.Cl)({}, r), {
                    data: e.result
                  })
                })] : [2, r]
              })
            })
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
            return (0, n.sH)(this, arguments, void 0, function(e, t, r) {
              return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, n.YH)(this, function(i) {
                return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(function(e) {
                  return (0, n.Cl)((0, n.Cl)({}, t), e.exportedVariables)
                })] : [2, (0, n.Cl)({}, t)]
              })
            })
          }, e.prototype.shouldForceResolvers = function(e) {
            var t = !1;
            return (0, X.YR)(e, {
              Directive: {
                enter: function(e) {
                  if ("client" === e.name.value && e.arguments && (t = e.arguments.some(function(e) {
                      return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                    }))) return X.sP
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
            return (0, n.sH)(this, arguments, void 0, function(e, t, r, i, o, a) {
              var s, c, u, l, f, h, d, v, y, m;
              return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
                return !0
              }), void 0 === a && (a = !1), (0, n.YH)(this, function(g) {
                return s = (0, T.Vn)(e), c = (0, T.zK)(e), u = (0, p.JG)(c), l = this.collectSelectionsToResolve(s, u), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", v = (d = this).cache, y = d.client, m = {
                  fragmentMap: u,
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
                }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, m).then(function(e) {
                  return {
                    result: e,
                    exportedVariables: m.exportedVariables
                  }
                })]
              })
            })
          }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
            return (0, n.sH)(this, void 0, void 0, function() {
              var a, s, c, u, l, f = this;
              return (0, n.YH)(this, function(d) {
                return a = o.fragmentMap, s = o.context, c = o.variables, u = [r], l = function(e) {
                  return (0, n.sH)(f, void 0, void 0, function() {
                    var l, f;
                    return (0, n.YH)(this, function(n) {
                      return (t || o.selectionsToResolve.has(e)) && (0, h.MS)(e, c) ? (0, w.dt)(e) ? [2, this.resolveField(e, t, r, o).then(function(t) {
                        var r;
                        void 0 !== t && u.push(((r = {})[(0, w.ue)(e)] = t, r))
                      })] : ((0, w.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 21, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then(function(e) {
                        u.push(e)
                      })] : [2]) : [2]
                    })
                  })
                }, [2, Promise.all(e.selections.map(l)).then(function() {
                  return (0, R.IM)(u)
                })]
              })
            })
          }, e.prototype.resolveField = function(e, t, r, i) {
            return (0, n.sH)(this, void 0, void 0, function() {
              var o, a, s, c, u, l, f, h, d, p = this;
              return (0, n.YH)(this, function(n) {
                return r ? (o = i.variables, a = e.name.value, s = (0, w.ue)(e), c = a !== s, u = r[s] || r[a], l = Promise.resolve(u), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (h = this.resolvers && this.resolvers[f]) && (d = h[c ? a : s]) && (l = Promise.resolve(Z.bl.withValue(this.cache, d, [r, (0, w.MB)(e, o), i.context, {
                  field: e,
                  fragmentMap: i.fragmentMap
                }])))), [2, l.then(function(r) {
                  var n, o;
                  if (void 0 === r && (r = u), e.directives && e.directives.forEach(function(e) {
                      "export" === e.name.value && e.arguments && e.arguments.forEach(function(e) {
                        "as" === e.name.value && "StringValue" === e.value.kind && (i.exportedVariables[e.value.value] = r)
                      })
                    }), !e.selectionSet) return r;
                  if (null == r) return r;
                  var a = null !== (o = null === (n = e.directives) || void 0 === n ? void 0 : n.some(function(e) {
                    return "client" === e.name.value
                  })) && void 0 !== o && o;
                  return Array.isArray(r) ? p.resolveSubSelectedArray(e, t || a, r, i) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t || a, r, i) : void 0
                })]) : [2, null]
              })
            })
          }, e.prototype.resolveSubSelectedArray = function(e, t, r, n) {
            var i = this;
            return Promise.all(r.map(function(r) {
              return null === r ? null : Array.isArray(r) ? i.resolveSubSelectedArray(e, t, r, n) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, r, n) : void 0
            }))
          }, e.prototype.collectSelectionsToResolve = function(e, t) {
            var r = function(e) {
                return !Array.isArray(e)
              },
              n = this.selectionsToResolveCache;
            return function e(o) {
              if (!n.has(o)) {
                var a = new Set;
                n.set(o, a), (0, X.YR)(o, {
                  Directive: function(e, t, n, i, o) {
                    "client" === e.name.value && o.forEach(function(e) {
                      r(e) && J(e) && a.add(e)
                    })
                  },
                  FragmentSpread: function(n, o, s, c, u) {
                    var l = t[n.name.value];
                    (0, i.V1)(l, 22, n.name.value);
                    var f = e(l);
                    f.size > 0 && (u.forEach(function(e) {
                      r(e) && J(e) && a.add(e)
                    }), a.add(n), f.forEach(function(e) {
                      a.add(e)
                    }))
                  }
                })
              }
              return n.get(o)
            }(e)
          }, e
        }(),
        te = r(5568),
        re = r(8603),
        ne = !1,
        ie = function() {
          function e(e) {
            var t, r, a, c = this;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw (0, i.vA)(16);
            var l = e.uri,
              f = e.credentials,
              h = e.headers,
              d = e.cache,
              p = e.documentTransform,
              v = e.ssrMode,
              y = void 0 !== v && v,
              m = e.ssrForceFetchDelay,
              g = void 0 === m ? 0 : m,
              b = e.connectToDevTools,
              _ = e.queryDeduplication,
              E = void 0 === _ || _,
              T = e.defaultOptions,
              w = e.defaultContext,
              O = e.assumeImmutableResults,
              k = void 0 === O ? d.assumeImmutableResults : O,
              C = e.resolvers,
              x = e.typeDefs,
              S = e.fragmentMatcher,
              D = e.clientAwareness,
              I = e.name,
              N = e.version,
              A = e.devtools,
              R = e.dataMasking;
            !1 !== globalThis.__DEV__ && ((0, M.cc)(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), (0, M.cc)(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), (0, M.cc)(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), (0, M.cc)(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), (0, M.cc)(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), (0, M.cc)(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), (0, M.cc)(e, "typeDefs", "ApolloClient"), e.link || !1 !== globalThis.__DEV__ && i.V1.warn(17));
            var P = e.link;
            P || (P = l ? new u({
              uri: l,
              credentials: f,
              headers: h
            }) : o.C.empty()), this.link = P, this.cache = d, this.disableNetworkFetches = y || g > 0, this.queryDeduplication = E, this.defaultOptions = T || Object.create(null), this.typeDefs = x, this.devtoolsConfig = (0, n.Cl)((0, n.Cl)({}, A), {
              enabled: null !== (t = null == A ? void 0 : A.enabled) && void 0 !== t ? t : b
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), g && setTimeout(function() {
              return c.disableNetworkFetches = !1
            }, g), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new ee({
              cache: d,
              client: this,
              resolvers: C,
              fragmentMatcher: S
            }), this.queryManager = new H({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: w,
              documentTransform: p,
              queryDeduplication: E,
              ssrMode: y,
              dataMasking: !!R,
              clientAwareness: {
                name: null !== (r = null == D ? void 0 : D.name) && void 0 !== r ? r : I,
                version: null !== (a = null == D ? void 0 : D.version) && void 0 !== a ? a : N
              },
              localState: this.localState,
              assumeImmutableResults: k,
              onBroadcast: this.devtoolsConfig.enabled ? function() {
                c.devToolsHookCb && c.devToolsHookCb({
                  action: {},
                  state: {
                    queries: c.queryManager.getQueryStore(),
                    mutations: c.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: c.cache.extract(!0)
                })
              } : void 0
            }), this.devtoolsConfig.enabled && this.connectToDevTools()
          }
          return Object.defineProperty(e.prototype, "prioritizeCacheValues", {
            get: function() {
              return this.disableNetworkFetches
            },
            set: function(e) {
              this.disableNetworkFetches = e
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.connectToDevTools = function() {
            if ("undefined" != typeof window) {
              var e = window,
                t = Symbol.for("apollo.devtools");
              (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, ne || !1 === globalThis.__DEV__ || (ne = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
                if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                  var e = window.navigator,
                    t = e && e.userAgent,
                    r = void 0;
                  "string" == typeof t && (t.indexOf("Chrome/") > -1 ? r = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (r = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), r && !1 !== globalThis.__DEV__ && i.V1.log("Download the Apollo DevTools for a better development experience: %s", r)
                }
              }, 1e4))
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
            return this.defaultOptions.watchQuery && (e = (0, te.l)(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, M.cc)(e, "canonizeResults", "client.watchQuery"), (0, M.cc)(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = (0, te.l)(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 18), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, M.cc)(e, "canonizeResults", "client.query"), (0, M.cc)(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), "standby" === e.fetchPolicy && !1 !== globalThis.__DEV__ && i.V1.warn(19)), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = (0, te.l)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            var t = this,
              r = this.queryManager.generateQueryId();
            return this.queryManager.startGraphQLSubscription(e).map(function(i) {
              return (0, n.Cl)((0, n.Cl)({}, i), {
                data: t.queryManager.maskOperation({
                  document: e.query,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: r
                })
              })
            })
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
            return Promise.resolve().then(function() {
              return e.queryManager.clearStore({
                discardWatches: !1
              })
            }).then(function() {
              return Promise.all(e.resetStoreCallbacks.map(function(e) {
                return e()
              }))
            }).then(function() {
              return e.reFetchObservableQueries()
            })
          }, e.prototype.clearStore = function() {
            var e = this;
            return Promise.resolve().then(function() {
              return e.queryManager.clearStore({
                discardWatches: !0
              })
            }).then(function() {
              return Promise.all(e.clearStoreCallbacks.map(function(e) {
                return e()
              }))
            })
          }, e.prototype.onResetStore = function(e) {
            var t = this;
            return this.resetStoreCallbacks.push(e),
              function() {
                t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
                  return t !== e
                })
              }
          }, e.prototype.onClearStore = function(e) {
            var t = this;
            return this.clearStoreCallbacks.push(e),
              function() {
                t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
                  return t !== e
                })
              }
          }, e.prototype.reFetchObservableQueries = function(e) {
            return this.queryManager.reFetchObservableQueries(e)
          }, e.prototype.refetchQueries = function(e) {
            var t = this.queryManager.refetchQueries(e),
              r = [],
              n = [];
            t.forEach(function(e, t) {
              r.push(t), n.push(e)
            });
            var o = Promise.all(n);
            return o.queries = r, o.results = n, o.catch(function(e) {
              !1 !== globalThis.__DEV__ && i.V1.debug(20, e)
            }), o
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
      !1 !== globalThis.__DEV__ && (ie.prototype.getMemoryInternals = re.ep)
    },
    2959(e, t, r) {
      "use strict";
      r.d(t, {
        U: () => b,
        y: () => E
      });
      var n = r(1177),
        i = r(3023),
        o = r(4269),
        a = r(839),
        s = r(6408),
        c = r(5593),
        u = r(8471),
        l = r(7078),
        f = r(7593),
        h = r(9531),
        d = r(5227),
        p = r(5384),
        v = r(9131),
        y = r(2825),
        m = Object.assign,
        g = Object.hasOwnProperty,
        b = function(e) {
          function t(r) {
            var i = r.queryManager,
              o = r.queryInfo,
              a = r.options,
              c = this,
              u = t.inactiveOnCreation.getValue();
            (c = e.call(this, function(e) {
              c._getOrCreateQuery();
              try {
                var t = e._subscription._observer;
                t && !t.error && (t.error = _)
              } catch (e) {}
              var r = !c.observers.size;
              c.observers.add(e);
              var n = c.last;
              return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(c.maskResult(n.result)), r && c.reobserve().catch(function() {}),
                function() {
                  c.observers.delete(e) && !c.observers.size && c.tearDownQuery()
                }
            }) || this).observers = new Set, c.subscriptions = new Set, c.dirty = !1, c._getOrCreateQuery = function() {
              return u && (i.queries.set(c.queryId, o), u = !1), c.queryManager.getOrCreateQuery(c.queryId)
            }, c.queryInfo = o, c.queryManager = i, c.waitForOwnResult = T(a.fetchPolicy), c.isTornDown = !1, c.subscribeToMore = c.subscribeToMore.bind(c), c.maskResult = c.maskResult.bind(c);
            var l = i.defaultOptions.watchQuery,
              f = (void 0 === l ? {} : l).fetchPolicy,
              h = void 0 === f ? "cache-first" : f,
              d = a.fetchPolicy,
              p = void 0 === d ? h : d,
              v = a.initialFetchPolicy,
              y = void 0 === v ? "standby" === p ? h : p : v;
            c.options = (0, n.Cl)((0, n.Cl)({}, a), {
              initialFetchPolicy: y,
              fetchPolicy: p
            }), c.queryId = o.queryId || i.generateQueryId();
            var m = (0, s.Vu)(c.query);
            return c.queryName = m && m.name && m.name.value, c
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
            return !1 !== globalThis.__DEV__ && (0, y.S2)("observableQuery.result", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(23)
            }), new Promise(function(t, r) {
              var n = {
                  next: function(r) {
                    t(r), e.observers.delete(n), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout(function() {
                      i.unsubscribe()
                    }, 0)
                  },
                  error: r
                },
                i = e.subscribe(n)
            })
          }, t.prototype.resetDiff = function() {
            this.queryInfo.resetDiff()
          }, t.prototype.getCurrentFullResult = function(e) {
            var t = this;
            void 0 === e && (e = !0);
            var r = (0, y.lz)("getLastResult", function() {
                return t.getLastResult(!0)
              }),
              i = this.queryInfo.networkStatus || r && r.networkStatus || a.pT.ready,
              s = (0, n.Cl)((0, n.Cl)({}, r), {
                loading: (0, a.bi)(i),
                networkStatus: i
              }),
              c = this.options.fetchPolicy,
              u = void 0 === c ? "cache-first" : c;
            if (T(u) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var l = this.queryInfo.getDiff();
              (l.complete || this.options.returnPartialData) && (s.data = l.result), (0, o.L)(s.data, {}) && (s.data = void 0), l.complete ? (delete s.partial, !l.complete || s.networkStatus !== a.pT.loading || "cache-first" !== u && "cache-only" !== u || (s.networkStatus = a.pT.ready, s.loading = !1)) : s.partial = !0, s.networkStatus === a.pT.ready && (s.error || s.errors) && (s.networkStatus = a.pT.error), !1 === globalThis.__DEV__ || l.complete || this.options.partialRefetch || s.loading || s.data || s.error || E(l.missing)
            }
            return e && this.updateLastResult(s), s
          }, t.prototype.getCurrentResult = function(e) {
            return void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e))
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            if (!this.last) return !0;
            var r = this.queryManager.getDocumentInfo(this.query),
              n = this.queryManager.dataMasking,
              i = n ? r.nonReactiveQuery : this.query;
            return (n || r.hasNonreactiveDirective ? !(0, p.a)(i, this.last.result, e, this.variables) : !(0, o.L)(this.last.result, e)) || t && !(0, o.L)(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || (0, o.L)(r.variables, this.variables))) return r[e]
          }, t.prototype.getLastResult = function(e) {
            return !1 !== globalThis.__DEV__ && (0, y.S2)("getLastResult", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(24)
            }), this.getLast("result", e)
          }, t.prototype.getLastError = function(e) {
            return !1 !== globalThis.__DEV__ && (0, y.S2)("getLastError", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(25)
            }), this.getLast("error", e)
          }, t.prototype.resetLastResults = function() {
            !1 !== globalThis.__DEV__ && (0, y.S2)("resetLastResults", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(26)
            }), delete this.last, this.isTornDown = !1
          }, t.prototype.resetQueryStoreErrors = function() {
            !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(27), this.queryManager.resetErrors(this.queryId)
          }, t.prototype.refetch = function(e) {
            var t, r = {
                pollInterval: 0
              },
              c = this.options.fetchPolicy;
            if (r.fetchPolicy = "no-cache" === c ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && g.call(e, "variables")) {
              var u = (0, s.AT)(this.query),
                l = u.variableDefinitions;
              l && l.some(function(e) {
                return "variables" === e.variable.name.value
              }) || !1 !== globalThis.__DEV__ && i.V1.warn(28, e, (null === (t = u.name) || void 0 === t ? void 0 : t.value) || u)
            }
            return e && !(0, o.L)(this.options.variables, e) && (r.variables = this.options.variables = (0, n.Cl)((0, n.Cl)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, a.pT.refetch)
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
            var s = this.queryInfo,
              c = s.networkStatus;
            s.networkStatus = a.pT.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var u = new Set,
              l = null == e ? void 0 : e.updateQuery,
              f = "no-cache" !== this.options.fetchPolicy;
            return f || (0, i.V1)(l, 29), this.queryManager.fetchQuery(o, r, a.pT.fetchMore).then(function(i) {
              if (t.queryManager.removeQuery(o), s.networkStatus === a.pT.fetchMore && (s.networkStatus = c), f) t.queryManager.cache.batch({
                update: function(n) {
                  var o = e.updateQuery;
                  o ? n.updateQuery({
                    query: t.query,
                    variables: t.variables,
                    returnPartialData: !0,
                    optimistic: !1
                  }, function(e) {
                    return o(e, {
                      fetchMoreResult: i.data,
                      variables: r.variables
                    })
                  }) : n.writeQuery({
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
                var h = t.getLast("result"),
                  d = l(h.data, {
                    fetchMoreResult: i.data,
                    variables: r.variables
                  });
                t.reportResult((0, n.Cl)((0, n.Cl)({}, h), {
                  networkStatus: c,
                  loading: (0, a.bi)(c),
                  data: d
                }), t.variables)
              }
              return t.maskResult(i)
            }).finally(function() {
              f && !u.has(t.query) && t.reobserveCacheFirst()
            })
          }, t.prototype.subscribeToMore = function(e) {
            var t = this,
              r = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
              }).subscribe({
                next: function(r) {
                  var i = e.updateQuery;
                  i && t.updateQuery(function(e, t) {
                    return i(e, (0, n.Cl)({
                      subscriptionData: r
                    }, t))
                  })
                },
                error: function(t) {
                  e.onError ? e.onError(t) : !1 !== globalThis.__DEV__ && i.V1.error(30, t)
                }
              });
            return this.subscriptions.add(r),
              function() {
                t.subscriptions.delete(r) && r.unsubscribe()
              }
          }, t.prototype.setOptions = function(e) {
            return !1 !== globalThis.__DEV__ && ((0, y.cc)(e, "canonizeResults", "setOptions"), (0, y.S2)("setOptions", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(31)
            })), this.reobserve(e)
          }, t.prototype.silentSetOptions = function(e) {
            var t = (0, c.o)(this.options, e || {});
            m(this.options, t)
          }, t.prototype.setVariables = function(e) {
            var t = this;
            return (0, o.L)(this.variables, e) ? this.observers.size ? (0, y.lz)("observableQuery.result", function() {
              return t.result()
            }) : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, a.pT.setVariables) : Promise.resolve())
          }, t.prototype.updateQuery = function(e) {
            var t = this.queryManager,
              r = t.cache.diff({
                query: this.options.query,
                variables: this.variables,
                returnPartialData: !0,
                optimistic: !1
              }),
              n = r.result,
              i = r.complete,
              o = e(n, {
                variables: this.variables,
                complete: !!i,
                previousData: n
              });
            o && (t.cache.writeQuery({
              query: this.options.query,
              data: o,
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
            var n = this._getOrCreateQuery();
            return n.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(n, e, t, r)
          }, t.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (r && this.hasObservers()) {
                if (!t || t.interval !== r) {
                  (0, i.V1)(r, 32), (t || (this.pollingInfo = {})).interval = r;
                  var n = function() {
                      var t, r;
                      e.pollingInfo && ((0, a.bi)(e.queryInfo.networkStatus) || (null === (r = (t = e.options).skipPollAttempt) || void 0 === r ? void 0 : r.call(t)) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, a.pT.poll).then(o, o))
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
            var r = this;
            void 0 === t && (t = this.variables);
            var i = (0, y.lz)("getLastError", function() {
              return r.getLastError()
            });
            return i && this.last && !(0, o.L)(t, this.last.variables) && (i = void 0), this.last = (0, n.Cl)({
              result: this.queryManager.assumeImmutableResults ? e : (0, u.m)(e),
              variables: t
            }, i ? {
              error: i
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === a.pT.refetch || t === a.pT.fetchMore || t === a.pT.poll,
              s = this.options.variables,
              u = this.options.fetchPolicy,
              l = (0, c.o)(this.options, e || {}),
              f = i ? l : m(this.options, l),
              h = this.transformDocument(f.query);
            this.lastQuery = h, i || (this.updatePolling(), !e || !e.variables || (0, o.L)(e.variables, s) || "standby" === f.fetchPolicy || f.fetchPolicy !== u && "function" != typeof f.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", f), void 0 === t && (t = a.pT.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = T(f.fetchPolicy));
            var p = function() {
                r.concast === g && (r.waitForOwnResult = !1)
              },
              v = f.variables && (0, n.Cl)({}, f.variables),
              y = this.fetch(f, t, h),
              g = y.concast,
              b = y.fromLink,
              _ = {
                next: function(e) {
                  (0, o.L)(r.variables, v) && (p(), r.reportResult(e, v))
                },
                error: function(e) {
                  (0, o.L)(r.variables, v) && ((0, d.Mn)(e) || (e = new d.K4({
                    networkError: e
                  })), p(), r.reportError(e, v))
                }
              };
            return i || !b && this.concast || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = g, this.observer = _), g.addObserver(_), g
          }, t.prototype.reobserve = function(e, t) {
            return (r = this.reobserveAsConcast(e, t).promise.then(this.maskResult)).catch(function() {}), r;
            var r
          }, t.prototype.resubscribeAfterError = function() {
            for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var n = this.last;
            (0, y.lz)("resetLastResults", function() {
              return e.resetLastResults()
            });
            var i = this.subscribe.apply(this, t);
            return this.last = n, i
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentFullResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this,
              n = (0, y.lz)("getLastError", function() {
                return r.getLastError()
              }),
              i = this.isDifferentFromLastResult(e, t);
            (n || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (n || i) && (0, l.w)(this.observers, "next", this.maskResult(e))
          }, t.prototype.reportError = function(e, t) {
            var r = this,
              i = (0, n.Cl)((0, n.Cl)({}, (0, y.lz)("getLastResult", function() {
                return r.getLastResult()
              })), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: a.pT.error,
                loading: !1
              });
            this.updateLastResult(i, t), (0, l.w)(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(e) {
              return e.unsubscribe()
            }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
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
          }, t.prototype.resetNotifications = function() {
            this.cancelNotifyTimeout(), this.dirty = !1
          }, t.prototype.cancelNotifyTimeout = function() {
            this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0)
          }, t.prototype.scheduleNotify = function() {
            var e = this;
            this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
              return e.notify()
            }, 0)))
          }, t.prototype.notify = function() {
            this.cancelNotifyTimeout(), this.dirty && ("cache-only" != this.options.fetchPolicy && "cache-and-network" != this.options.fetchPolicy && (0, a.bi)(this.queryInfo.networkStatus) || (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst())), this.dirty = !1
          }, t.prototype.reobserveCacheFirst = function() {
            var e = this.options,
              t = e.fetchPolicy,
              r = e.nextFetchPolicy;
            return "cache-and-network" === t || "network-only" === t ? this.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function(e, n) {
                return this.nextFetchPolicy = r, "function" == typeof this.nextFetchPolicy ? this.nextFetchPolicy(e, n) : t
              }
            }) : this.reobserve()
          }, t.inactiveOnCreation = new v.DX, t
        }(f.c);

      function _(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(33, e.message, e.stack)
      }

      function E(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(34, e)
      }

      function T(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }(0, h.r)(b)
    },
    5384(e, t, r) {
      "use strict";
      r.d(t, {
        a: () => u
      });
      var n = r(1177),
        i = r(4269),
        o = r(5154),
        a = r(5404),
        s = r(6408),
        c = r(3946);

      function u(e, t, r, o) {
        var c = t.data,
          u = (0, n.Tt)(t, ["data"]),
          f = r.data,
          h = (0, n.Tt)(r, ["data"]);
        return (0, i.A)(u, h) && l((0, s.Vn)(e).selectionSet, c, f, {
          fragmentMap: (0, a.JG)((0, s.zK)(e)),
          variables: o
        })
      }

      function l(e, t, r, n) {
        if (t === r) return !0;
        var s = new Set;
        return e.selections.every(function(e) {
          if (s.has(e)) return !0;
          if (s.add(e), !(0, o.MS)(e, n.variables)) return !0;
          if (f(e)) return !0;
          if ((0, c.dt)(e)) {
            var u = (0, c.ue)(e),
              h = t && t[u],
              d = r && r[u],
              p = e.selectionSet;
            if (!p) return (0, i.A)(h, d);
            var v = Array.isArray(h),
              y = Array.isArray(d);
            if (v !== y) return !1;
            if (v && y) {
              var m = h.length;
              if (d.length !== m) return !1;
              for (var g = 0; g < m; ++g)
                if (!l(p, h[g], d[g], n)) return !1;
              return !0
            }
            return l(p, h, d, n)
          }
          var b = (0, a.HQ)(e, n.fragmentMap);
          return b ? !!f(b) || l(b.selectionSet, t, r, n) : void 0
        })
      }

      function f(e) {
        return !!e.directives && e.directives.some(h)
      }

      function h(e) {
        return "nonreactive" === e.name.value
      }
    },
    839(e, t, r) {
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
    5227(e, t, r) {
      "use strict";
      r.d(t, {
        K$: () => o,
        K4: () => c,
        Mn: () => s,
        uR: () => a
      });
      var n = r(1177),
        i = (r(3023), r(1384)),
        o = Symbol();

      function a(e) {
        return !!e.extensions && Array.isArray(e.extensions[o])
      }

      function s(e) {
        return e.hasOwnProperty("graphQLErrors")
      }
      var c = function(e) {
        function t(r) {
          var o, a, s = r.graphQLErrors,
            c = r.protocolErrors,
            u = r.clientErrors,
            l = r.networkError,
            f = r.errorMessage,
            h = r.extraInfo,
            d = e.call(this, f) || this;
          return d.name = "ApolloError", d.graphQLErrors = s || [], d.protocolErrors = c || [], d.clientErrors = u || [], d.networkError = l || null, d.message = f || (o = d, a = (0, n.fX)((0, n.fX)((0, n.fX)([], o.graphQLErrors, !0), o.clientErrors, !0), o.protocolErrors, !0), o.networkError && a.push(o.networkError), a.map(function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          }).join("\n")), d.extraInfo = h, d.cause = (0, n.fX)((0, n.fX)((0, n.fX)([l], s || [], !0), c || [], !0), u || [], !0).find(function(e) {
            return !!e
          }) || null, d.__proto__ = t.prototype, d
        }
        return (0, n.C6)(t, e), t
      }(Error)
    },
    9164(e, t, r) {
      "use strict";
      r.d(t, {
        o: () => a
      });
      var n = r(1177),
        i = r(6964),
        o = r(7593);

      function a(e) {
        return new i.C(function(t, r) {
          var i = (0, n.Tt)(t, []);
          return new o.c(function(n) {
            var o, a = !1;
            return Promise.resolve(i).then(function(r) {
                return e(r, t.getContext())
              }).then(t.setContext).then(function() {
                a || (o = r(t).subscribe({
                  next: n.next.bind(n),
                  error: n.error.bind(n),
                  complete: n.complete.bind(n)
                }))
              }).catch(n.error.bind(n)),
              function() {
                a = !0, o && o.unsubscribe()
              }
          })
        })
      }
    },
    6964(e, t, r) {
      "use strict";
      r.d(t, {
        C: () => f
      });
      var n = r(3023),
        i = r(7593),
        o = r(1177),
        a = r(6408),
        s = r(2825);

      function c(e, t) {
        return t ? t(e) : i.c.of()
      }

      function u(e) {
        return "function" == typeof e ? new f(e) : e
      }

      function l(e) {
        return e.request.length <= 1
      }
      var f = function() {
        function e(e) {
          e && (this.request = e)
        }
        return e.empty = function() {
          return new e(function() {
            return i.c.of()
          })
        }, e.from = function(t) {
          return 0 === t.length ? e.empty() : t.map(u).reduce(function(e, t) {
            return e.concat(t)
          })
        }, e.split = function(t, r, n) {
          var o, a = u(r),
            s = u(n || new e(c));
          return o = l(a) && l(s) ? new e(function(e) {
            return t(e) ? a.request(e) || i.c.of() : s.request(e) || i.c.of()
          }) : new e(function(e, r) {
            return t(e) ? a.request(e, r) || i.c.of() : s.request(e, r) || i.c.of()
          }), Object.assign(o, {
            left: a,
            right: s
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
              if (t.indexOf(o) < 0) throw (0, n.vA)(58, o)
            }
            return e
          }(t)))) || i.c.of()
        }, e.concat = function(t, r) {
          var o = u(t);
          if (l(o)) return !1 !== globalThis.__DEV__ && n.V1.warn(47, o), o;
          var a, s = u(r);
          return a = l(s) ? new e(function(e) {
            return o.request(e, function(e) {
              return s.request(e) || i.c.of()
            }) || i.c.of()
          }) : new e(function(e, t) {
            return o.request(e, function(e) {
              return s.request(e, t) || i.c.of()
            }) || i.c.of()
          }), Object.assign(a, {
            left: o,
            right: s
          })
        }, e.prototype.split = function(t, r, n) {
          return this.concat(e.split(t, r, n || new e(c)))
        }, e.prototype.concat = function(t) {
          return e.concat(this, t)
        }, e.prototype.request = function(e, t) {
          throw (0, n.vA)(48)
        }, e.prototype.onError = function(e, t) {
          if (!1 !== globalThis.__DEV__ && (0, s.S2)("onError", function() {
              !1 !== globalThis.__DEV__ && n.V1.warn(49)
            }), t && t.error) return t.error(e), !1;
          throw e
        }, e.prototype.setOnError = function(e) {
          return !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && n.V1.warn(50), this.onError = e, this
        }, e
      }()
    },
    945(e, t, r) {
      "use strict";
      r.d(t, {
        S: () => s
      });
      var n = r(1177),
        i = r(5227),
        o = r(7593),
        a = r(6964);

      function s(e) {
        return new a.C(function(t, r) {
          return new o.c(function(n) {
            var o, a, s;
            try {
              o = r(t).subscribe({
                next: function(o) {
                  o.errors ? s = e({
                    graphQLErrors: o.errors,
                    response: o,
                    operation: t,
                    forward: r
                  }) : (0, i.uR)(o) && (s = e({
                    protocolErrors: o.extensions[i.K$],
                    response: o,
                    operation: t,
                    forward: r
                  })), s ? a = s.subscribe({
                    next: n.next.bind(n),
                    error: n.error.bind(n),
                    complete: n.complete.bind(n)
                  }) : n.next(o)
                },
                error: function(i) {
                  (s = e({
                    operation: t,
                    networkError: i,
                    graphQLErrors: i && i.result && i.result.errors || void 0,
                    forward: r
                  })) ? a = s.subscribe({
                    next: n.next.bind(n),
                    error: n.error.bind(n),
                    complete: n.complete.bind(n)
                  }): n.error(i)
                },
                complete: function() {
                  s || n.complete.bind(n)()
                }
              })
            } catch (i) {
              e({
                networkError: i,
                operation: t,
                forward: r
              }), n.error(i)
            }
            return function() {
              o && o.unsubscribe(), a && o.unsubscribe()
            }
          })
        })
      }! function(e) {
        function t(t) {
          var r = e.call(this) || this;
          return r.link = s(t), r
        }(0, n.C6)(t, e), t.prototype.request = function(e, t) {
          return this.link.request(e, t)
        }
      }(a.C)
    },
    8548(e, t, r) {
      "use strict";
      r.d(t, {
        $: () => x
      });
      var n = r(1177),
        i = r(3023),
        o = r(6964),
        a = r(5154),
        s = r(7593),
        c = function(e, t) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var n = (0, i.vA)(54, t, e.message);
            throw n.parseError = e, n
          }
          return r
        },
        u = r(5355);

      function l(e) {
        var t = {
          next: function() {
            return e.read()
          }
        };
        return u.uJ && (t[Symbol.asyncIterator] = function() {
          return this
        }), t
      }

      function f(e) {
        var t, r, n, i = e;
        if (e.body && (i = e.body), n = i, u.uJ && n[Symbol.asyncIterator]) return r = i[Symbol.asyncIterator](), (t = {
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
                }) : (t = !0, new Promise(function(t, r) {
                  e.then(function(e) {
                    t({
                      value: e,
                      done: !1
                    })
                  }).catch(r)
                }))
              }
            };
          return u.uJ && (r[Symbol.asyncIterator] = function() {
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
            r = e, o.slice().forEach(function(t) {
              t[1](e)
            }), !t || t()
          }

          function c() {
            n = !0, o.slice().forEach(function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            }), !t || t()
          }
          t = function() {
            t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c)
          }, e.on("data", a), e.on("error", s), e.on("end", c), e.on("finish", c), e.on("close", c);
          var l = {
            next: function() {
              return new Promise(function(e, t) {
                return r ? t(r) : i.length ? e({
                  value: i.shift(),
                  done: !1
                }) : n ? e({
                  value: void 0,
                  done: !0
                }) : void o.push([e, t])
              })
            }
          };
          return u.uJ && (l[Symbol.asyncIterator] = function() {
            return this
          }), l
        }(i);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var h = function(e, t, r) {
          var n = new Error(r);
          throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
        },
        d = r(5227),
        p = r(1029),
        v = Object.prototype.hasOwnProperty;

      function y(e) {
        var t = {};
        return e.split("\n").forEach(function(e) {
          var r = e.indexOf(":");
          if (r > -1) {
            var n = e.slice(0, r).trim().toLowerCase(),
              i = e.slice(r + 1).trim();
            t[n] = i
          }
        }), t
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
      var g = r(9537),
        b = {
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
        _ = function(e, t) {
          return t(e)
        };

      function E(e, t) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        var o = {},
          a = {};
        r.forEach(function(e) {
          o = (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, o), e.options), {
            headers: (0, n.Cl)((0, n.Cl)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), a = (0, n.Cl)((0, n.Cl)({}, a), e.http)
        }), o.headers && (o.headers = function(e, t) {
          if (!t) {
            var r = {};
            return Object.keys(Object(e)).forEach(function(t) {
              r[t.toLowerCase()] = e[t]
            }), r
          }
          var n = {};
          Object.keys(Object(e)).forEach(function(t) {
            n[t.toLowerCase()] = {
              originalName: t,
              value: e[t]
            }
          });
          var i = {};
          return Object.keys(n).forEach(function(e) {
            i[n[e].originalName] = n[e].value
          }), i
        }(o.headers, a.preserveHeaderCase));
        var s = e.operationName,
          c = e.extensions,
          u = e.variables,
          l = e.query,
          f = {
            operationName: s,
            variables: u
          };
        return a.includeExtensions && (f.extensions = c), a.includeQuery && (f.query = t(l, g.y)), {
          options: o,
          body: f
        }
      }

      function T(e) {
        return new s.c(function(t) {
          t.error(e)
        })
      }
      var w = r(7646),
        O = r(2846),
        k = r(6408),
        C = (0, i.no)(function() {
          return fetch
        }),
        x = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            u = e.fetch,
            l = e.print,
            g = void 0 === l ? _ : l,
            x = e.includeExtensions,
            S = e.preserveHeaderCase,
            D = e.useGETForQueries,
            I = e.includeUnusedVariables,
            N = void 0 !== I && I,
            A = (0, n.Tt)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw (0, i.vA)(51)
          }(u || C);
          var R = {
            http: {
              includeExtensions: x,
              preserveHeaderCase: S
            },
            options: A.fetchOptions,
            credentials: A.credentials,
            headers: A.headers
          };
          return new o.C(function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              o = e.getContext(),
              l = {};
            if (o.clientAwareness) {
              var _ = o.clientAwareness,
                x = _.name,
                S = _.version;
              x && (l["apollographql-client-name"] = x), S && (l["apollographql-client-version"] = S)
            }
            var I = (0, n.Cl)((0, n.Cl)({}, l), o.headers),
              A = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: I
              };
            if ((0, a.d8)(["client"], e.query)) {
              !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(52);
              var P = (0, O.er)(e.query);
              if (!P) return T(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = P
            }
            var M, F, V, L, j, q = E(e, g, b, R, A),
              Q = q.options,
              B = q.body;
            B.variables && !N && (B.variables = (M = B.variables, F = e.query, V = (0, n.Cl)({}, M), L = new Set(Object.keys(M)), (0, w.YR)(F, {
              Variable: function(e, t, r) {
                r && "VariableDefinition" !== r.kind && L.delete(e.name.value)
              }
            }), L.forEach(function(e) {
              delete V[e]
            }), V)), Q.signal || "undefined" == typeof AbortController || (j = new AbortController, Q.signal = j.signal);
            var U, z = "OperationDefinition" === (U = (0, k.Vn)(e.query)).kind && "subscription" === U.operation,
              Y = (0, a.d8)(["defer"], e.query);
            if (D && !e.query.definitions.some(function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              }) && (Q.method = "GET"), Y || z) {
              Q.headers = Q.headers || {};
              var W = "multipart/mixed;";
              z && Y && !1 !== globalThis.__DEV__ && i.V1.warn(53), z ? W += "boundary=graphql;subscriptionSpec=1.0,application/json" : Y && (W += "deferSpec=20220824,application/json"), Q.headers.accept = W
            }
            if ("GET" === Q.method) {
              var G = function(e, t) {
                  var r = [],
                    n = function(e, t) {
                      r.push("".concat(e, "=").concat(encodeURIComponent(t)))
                    };
                  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
                    var i = void 0;
                    try {
                      i = c(t.variables, "Variables map")
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
                      o = c(t.extensions, "Extensions map")
                    } catch (e) {
                      return {
                        parseError: e
                      }
                    }
                    n("extensions", o)
                  }
                  var a = "",
                    s = e,
                    u = e.indexOf("#"); - 1 !== u && (a = e.substr(u), s = e.substr(0, u));
                  var l = -1 === s.indexOf("?") ? "?" : "&";
                  return {
                    newURI: s + l + r.join("&") + a
                  }
                }(t, B),
                K = G.newURI,
                H = G.parseError;
              if (H) return T(H);
              t = K
            } else try {
              Q.body = c(B, "Payload")
            } catch (H) {
              return T(H)
            }
            return new s.c(function(r) {
              var o = u || (0, i.no)(function() {
                  return fetch
                }) || C,
                a = r.next.bind(r);
              return o(t, Q).then(function(t) {
                  var r;
                  e.setContext({
                    response: t
                  });
                  var i, o = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    return (0, n.sH)(this, void 0, void 0, function() {
                      var r, i, o, a, s, c, u, l, h, v, g, b, _, E, T, w, O, k, C, x, S, D, I, N;
                      return (0, n.YH)(this, function(A) {
                        switch (A.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            r = new TextDecoder("utf-8"), i = null === (N = e.headers) || void 0 === N ? void 0 : N.get("content-type"), o = "boundary=", a = (null == i ? void 0 : i.includes(o)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(o)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = "\r\n--".concat(a), c = "", u = f(e), l = !0, A.label = 1;
                          case 1:
                            return l ? [4, u.next()] : [3, 3];
                          case 2:
                            for (h = A.sent(), v = h.value, g = h.done, b = "string" == typeof v ? v : r.decode(v), _ = c.length - s.length + 1, l = !g, E = (c += b).indexOf(s, _); E > -1;) {
                              if (T = void 0, D = [c.slice(0, E), c.slice(E + s.length)], c = D[1], w = (T = D[0]).indexOf("\r\n\r\n"), O = y(T.slice(0, w)), (k = O["content-type"]) && -1 === k.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (C = T.slice(w))
                                if (x = m(e, C), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x)
                                  if ((0, p.Nw)(x)) {
                                    if (S = {}, "payload" in x) {
                                      if (1 === Object.keys(x).length && null === x.payload) return [2];
                                      S = (0, n.Cl)({}, x.payload)
                                    }
                                    "errors" in x && (S = (0, n.Cl)((0, n.Cl)({}, S), {
                                      extensions: (0, n.Cl)((0, n.Cl)({}, "extensions" in S ? S.extensions : null), (I = {}, I[d.K$] = x.errors, I))
                                    })), t(S)
                                  } else t(x);
                              else if (1 === Object.keys(x).length && "hasNext" in x && !x.hasNext) return [2];
                              E = c.indexOf(s)
                            }
                            return [3, 1];
                          case 3:
                            return [2]
                        }
                      })
                    })
                  }(t, a) : (i = e, function(e) {
                    return e.text().then(function(t) {
                      return m(e, t)
                    }).then(function(t) {
                      return Array.isArray(t) || v.call(t, "data") || v.call(t, "errors") || h(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map(function(e) {
                        return e.operationName
                      }) : i.operationName, "'.")), t
                    })
                  })(t).then(a)
                }).then(function() {
                  j = void 0, r.complete()
                }).catch(function(e) {
                  j = void 0,
                    function(e, t) {
                      e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e)
                    }(e, r)
                }),
                function() {
                  j && j.abort()
                }
            })
          })
        }
    },
    735(e, t, r) {
      "use strict";
      r.d(t, {
        e: () => p
      });
      var n = r(1177),
        i = r(3023),
        o = r(9537),
        a = r(6964),
        s = r(7593),
        c = r(7540),
        u = r(5593),
        l = r(5879),
        f = r(8460);

      function h(e) {
        var t = Object.create(null),
          r = Object.create(null);
        return (0, c.E)(e) && e.forEach(function(e) {
          var n;
          t[e.message] = e, "string" == typeof(null === (n = e.extensions) || void 0 === n ? void 0 : n.code) && (r[e.extensions.code] = e)
        }), {
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
          }(0, i.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 55);
          var p = (0, u.o)(d, e),
            v = p.sha256,
            y = p.generateHash,
            m = void 0 === y ? function(e) {
              return Promise.resolve(v((0, o.y)(e)))
            } : y,
            g = p.disable,
            b = p.retry,
            _ = p.useGETForHashedQueries,
            E = !0,
            T = function(e) {
              return new Promise(function(t) {
                return t(m(e))
              })
            };
          return Object.assign(new a.C(function(e, o) {
            (0, i.V1)(o, 56);
            var a = e.query;
            return new s.c(function(i) {
              var s, u, d = !1,
                p = !1,
                v = function(t, n) {
                  var i = t.response,
                    a = t.networkError;
                  if (!d && (i && i.errors || a)) {
                    d = !0;
                    var l = [],
                      f = i && i.errors;
                    (0, c.E)(f) && l.push.apply(l, f);
                    var v = void 0;
                    "string" != typeof(null == a ? void 0 : a.result) && (v = a && a.result && a.result.errors), (0, c.E)(v) && l.push.apply(l, v);
                    var m = {
                      response: i,
                      networkError: a,
                      operation: e,
                      graphQLErrors: (0, c.E)(l) ? l : void 0,
                      meta: h(l)
                    };
                    if ((E = !g(m)) || r(), b(m)) return s && s.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: E
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), p && e.setContext({
                      fetchOptions: u
                    }), void(s = o(e).subscribe(y))
                  }
                  n()
                },
                y = {
                  next: function(e) {
                    v({
                      response: e
                    }, function() {
                      return i.next(e)
                    })
                  },
                  error: function(e) {
                    v({
                      networkError: e
                    }, function() {
                      return i.error(e)
                    })
                  },
                  complete: i.complete.bind(i)
                };
              return e.setContext({
                  http: {
                    includeQuery: !E,
                    includeExtensions: E
                  }
                }), _ && E && ! function(e) {
                  return e.query.definitions.some(function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  })
                }(e) && (e.setContext(function(e) {
                  var t = e.fetchOptions,
                    r = void 0 === t ? {} : t;
                  return u = r, {
                    fetchOptions: (0, n.Cl)((0, n.Cl)({}, r), {
                      method: "GET"
                    })
                  }
                }), p = !0), E ? function(e) {
                  if (!e || "object" != typeof e) return T(e);
                  t || (t = new l.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var r = t.get(e);
                  return r || t.set(e, r = T(e)), r
                }(a).then(function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, s = o(e).subscribe(y)
                }).catch(i.error.bind(i)) : s = o(e).subscribe(y),
                function() {
                  s && s.unsubscribe()
                }
            })
          }), {
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
    8339(e, t, r) {
      "use strict";
      r.d(t, {
        S: () => u
      });
      var n = r(5425),
        i = r(5154),
        o = r(3946),
        a = r(6605),
        s = r(569),
        c = r(3023);

      function u(e, t, r) {
        return s.yV.withValue(!0, function() {
          var n = l(e, t, r, !1);
          return Object.isFrozen(e) && (0, a.G)(n), n
        })
      }

      function l(e, t, r, a, s) {
        var u, h = r.knownChanged,
          d = function(e, t) {
            if (t.has(e)) return t.get(e);
            var r = Array.isArray(e) ? [] : Object.create(null);
            return t.set(e, r), r
          }(e, r.mutableTargets);
        if (Array.isArray(e)) {
          for (var p = 0, v = Array.from(e.entries()); p < v.length; p++) {
            var y = v[p],
              m = y[0],
              g = y[1];
            if (null !== g) {
              var b = l(g, t, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", "[").concat(m, "]") : void 0);
              h.has(b) && h.add(d), d[m] = b
            } else d[m] = null
          }
          return h.has(d) ? d : e
        }
        for (var _ = 0, E = t.selections; _ < E.length; _++) {
          var T = E[_],
            w = void 0;
          if (a && h.add(d), T.kind === n.b.FIELD) {
            var O = (0, o.ue)(T),
              k = T.selectionSet;
            if (void 0 === (w = d[O] || e[O])) continue;
            k && null !== w && (b = l(e[O], k, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", ".").concat(O) : void 0), h.has(b) && (w = b)), !1 === globalThis.__DEV__ && (d[O] = w), !1 !== globalThis.__DEV__ && (a && "__typename" !== O && !(null === (u = Object.getOwnPropertyDescriptor(d, O)) || void 0 === u ? void 0 : u.value) ? Object.defineProperty(d, O, f(O, w, s || "", r.operationName, r.operationType)) : (delete d[O], d[O] = w))
          }
          if (T.kind !== n.b.INLINE_FRAGMENT || T.typeCondition && !r.cache.fragmentMatches(T, e.__typename) || (w = l(e, T.selectionSet, r, a, s)), T.kind === n.b.FRAGMENT_SPREAD) {
            var C = T.name.value,
              x = r.fragmentMap[C] || (r.fragmentMap[C] = r.cache.lookupFragment(C));
            (0, c.V1)(x, 59, C);
            var S = (0, i.s7)(T);
            "mask" !== S && (w = l(e, x.selectionSet, r, "migrate" === S, s))
          }
          h.has(w) && h.add(d)
        }
        return "__typename" in e && !("__typename" in d) && (d.__typename = e.__typename), Object.keys(d).length !== Object.keys(e).length && h.add(d), h.has(d) ? d : e
      }

      function f(e, t, r, n, i) {
        var o = function() {
          return s.yV.getValue() || (!1 !== globalThis.__DEV__ && c.V1.warn(60, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), o = function() {
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
    466(e, t, r) {
      "use strict";
      r.d(t, {
        z: () => l
      });
      var n = r(5425),
        i = r(569),
        o = r(3023),
        a = r(4269),
        s = r(8339),
        c = r(5404),
        u = r(6408);

      function l(e, t, r, l) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, i.Ki)(), e;
        var f = t.definitions.filter(function(e) {
          return e.kind === n.b.FRAGMENT_DEFINITION
        });
        void 0 === l && ((0, o.V1)(1 === f.length, 61, f.length), l = f[0].name.value);
        var h = f.find(function(e) {
          return e.name.value === l
        });
        return (0, o.V1)(!!h, 62, l), null == e || (0, a.A)(e, {}) ? e : (0, s.S)(e, h.selectionSet, {
          operationType: "fragment",
          operationName: h.name.value,
          fragmentMap: (0, c.JG)((0, u.zK)(t)),
          cache: r,
          mutableTargets: new i.jq,
          knownChanged: new i.xm
        })
      }
    },
    569(e, t, r) {
      "use strict";
      r.d(t, {
        Ki: () => l,
        jq: () => a,
        xm: () => s,
        yV: () => c
      });
      var n = r(9131),
        i = r(3023),
        o = r(5355),
        a = o.et ? WeakMap : Map,
        s = o.En ? WeakSet : Set,
        c = new n.DX,
        u = !1;

      function l() {
        u || (u = !0, !1 !== globalThis.__DEV__ && i.V1.warn(64))
      }
    },
    7077(e, t, r) {
      "use strict";
      var n;
      r.d(t, {
        l: () => c
      });
      var i = r(8538),
        o = r(5355),
        a = r(3023),
        s = o.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function c() {
        (0, a.V1)("createContext" in (n || (n = r.t(i, 2))), 69);
        var e = i.createContext[s];
        return e || (Object.defineProperty(i.createContext, s, {
          value: e = i.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
    },
    8989(e, t, r) {
      "use strict";
      r.d(t, {
        X: () => s
      });
      var n = r(1177),
        i = r(3023),
        o = r(8538),
        a = r(7077),
        s = function(e) {
          var t = e.client,
            r = e.children,
            s = (0, a.l)(),
            c = o.useContext(s),
            u = o.useMemo(function() {
              return (0, n.Cl)((0, n.Cl)({}, c), {
                client: t || c.client
              })
            }, [c, t]);
          return (0, i.V1)(u.client, 71), o.createElement(s.Provider, {
            value: u
          }, r)
        }
    },
    7421(e, t, r) {
      "use strict";
      r.d(t, {
        E: () => i
      });
      var n = r(8538),
        i = r(5355).Sw ? n.useLayoutEffect : n.useEffect
    },
    658(e, t, r) {
      "use strict";
      r.d(t, {
        h: () => o
      });
      var n = r(8538),
        i = r(2825);

      function o(e, t, r, o) {
        void 0 === o && (o = "Please remove this option.");
        var a = n.useRef(!1);
        !1 !== globalThis.__DEV__ && t in e && !a.current && ((0, i.cc)(e, t, r, o), a.current = !0)
      }
    },
    5919(e, t, r) {
      "use strict";
      r.d(t, {
        m: () => a
      });
      var n = r(3023),
        i = r(8538),
        o = r(7077);

      function a(e) {
        var t = i.useContext((0, o.l)()),
          r = e || t.client;
        return (0, n.V1)(!!r, 78), r
      }
    },
    2746(e, t, r) {
      "use strict";
      r.d(t, {
        _: () => y
      });
      var n, i = r(1177),
        o = r(8538),
        a = r(5568),
        s = r(7324),
        c = r(7421),
        u = r(658),
        l = r(8942),
        f = r(2825);

      function h() {}
      var d = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"],
        p = ["initialFetchPolicy", "onCompleted", "onError", "defaultOptions", "partialRefetch", "canonizeResults"],
        v = ["query", "ssr", "client", "fetchPolicy", "nextFetchPolicy", "refetchWritePolicy", "errorPolicy", "pollInterval", "notifyOnNetworkStatusChange", "returnPartialData", "skipPollAttempt"];

      function y(e, t) {
        var r;
        if (!1 !== globalThis.__DEV__) {
          var y = t || {};
          (0, u.h)(y, "canonizeResults", "useLazyQuery"), (0, u.h)(y, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), (0, u.h)(y, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), (0, u.h)(y, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, u.h)(y, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), (0, u.h)(y, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), (0, u.h)(y, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), (0, u.h)(y, "partialRefetch", "useLazyQuery")
        }
        var m = o.useRef(void 0),
          g = o.useRef(void 0),
          b = o.useRef(void 0),
          _ = (0, a.l)(t, m.current || {}),
          E = null !== (r = null == _ ? void 0 : _.query) && void 0 !== r ? r : e;
        g.current = t, b.current = E;
        var T = (0, i.Cl)((0, i.Cl)({}, _), {
            skip: !m.current
          }),
          w = (0, s.SX)(E, T),
          O = w.obsQueryFields,
          k = w.result,
          C = w.client,
          x = w.resultData,
          S = w.observable,
          D = w.onQueryExecuted,
          I = S.options.initialFetchPolicy || (0, s.kk)(T.defaultOptions, C.defaultOptions),
          N = o.useReducer(function(e) {
            return e + 1
          }, 0)[1],
          A = o.useMemo(function() {
            for (var e = {}, t = function(t) {
                var r = O[t];
                e[t] = function() {
                  return !1 !== globalThis.__DEV__ && "reobserve" === t && !1 !== globalThis.__DEV__ && l.V1.warn(79), m.current || (m.current = Object.create(null), N()), r.apply(this, arguments)
                }
              }, r = 0, n = d; r < n.length; r++) t(n[r]);
            return e
          }, [N, O]),
          R = !!m.current,
          P = o.useMemo(function() {
            return (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, k), A), {
              called: R
            })
          }, [k, A, R]),
          M = (n || (n = o.createContext(null)), o.useCallback(function() {
            var e = console.error;
            try {
              return console.error = h, o.useContext(n), !0
            } catch (e) {
              return !1
            } finally {
              console.error = e
            }
          }, [])),
          F = o.useRef(new Set),
          V = o.useCallback(function(e) {
            if (!1 !== globalThis.__DEV__) {
              M() && !1 !== globalThis.__DEV__ && l.V1.warn(80);
              for (var t = 0, r = p; t < r.length; t++) {
                var n = r[t];
                F.current.has(n) || ((0, f.cc)(e || {}, n, "useLazyQuery.execute"), F.current.add(n))
              }
              for (var o = 0, c = v; o < c.length; o++) {
                var u = c[o];
                F.current.has(u) || ((0, f.cc)(e || {}, u, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), F.current.add(u))
              }
            }
            m.current = e ? (0, i.Cl)((0, i.Cl)({}, e), {
              fetchPolicy: e.fetchPolicy || I
            }) : {
              fetchPolicy: I
            };
            var h = (0, a.l)(g.current, (0, i.Cl)({
                query: b.current
              }, m.current)),
              d = function(e, t, r, n, i, o) {
                var a = i.query || n,
                  c = (0, s.Er)(r, a, i, !1)(t),
                  u = t.reobserveAsConcast((0, s.t_)(t, r, i, c));
                return o(c), new Promise(function(n) {
                  var i;
                  u.subscribe({
                    next: function(e) {
                      i = e
                    },
                    error: function() {
                      n((0, s.$X)(t.getCurrentResult(), e.previousData, t, r))
                    },
                    complete: function() {
                      n((0, s.$X)(t.maskResult(i), e.previousData, t, r))
                    }
                  })
                })
              }(x, S, C, E, (0, i.Cl)((0, i.Cl)({}, h), {
                skip: !1
              }), D).then(function(e) {
                return Object.assign(e, A)
              });
            return d.catch(function() {}), d
          }, [M, C, E, A, I, S, x, D]),
          L = o.useRef(V);
        (0, c.E)(function() {
          L.current = V
        });
        var j = o.useCallback(function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return L.current.apply(L, e)
        }, []);
        return [j, P]
      }
    },
    4812(e, t, r) {
      "use strict";
      r.d(t, {
        n: () => h
      });
      var n = r(1177),
        i = r(8538),
        o = r(5568),
        a = r(4269),
        s = r(2707),
        c = r(5227),
        u = r(5919),
        l = r(7421),
        f = r(658);

      function h(e, t) {
        !1 !== globalThis.__DEV__ && (0, f.h)(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
        var r = (0, u.m)(null == t ? void 0 : t.client);
        (0, s.D$)(e, s.KG.Mutation);
        var h = i.useState({
            called: !1,
            loading: !1,
            client: r
          }),
          d = h[0],
          p = h[1],
          v = i.useRef({
            result: d,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        (0, l.E)(function() {
          Object.assign(v.current, {
            client: r,
            options: t,
            mutation: e
          })
        });
        var y = i.useCallback(function(e) {
            void 0 === e && (e = {});
            var t = v.current,
              r = t.options,
              i = t.mutation,
              s = (0, n.Cl)((0, n.Cl)({}, r), {
                mutation: i
              }),
              u = e.client || v.current.client;
            v.current.result.loading || s.ignoreResults || !v.current.isMounted || p(v.current.result = {
              loading: !0,
              error: void 0,
              data: void 0,
              called: !0,
              client: u
            });
            var l = ++v.current.mutationId,
              f = (0, o.l)(s, e);
            return u.mutate(f).then(function(t) {
              var r, n, i = t.data,
                o = t.errors,
                s = o && o.length > 0 ? new c.K4({
                  graphQLErrors: o
                }) : void 0,
                h = e.onError || (null === (r = v.current.options) || void 0 === r ? void 0 : r.onError);
              if (s && h && h(s, f), l === v.current.mutationId && !f.ignoreResults) {
                var d = {
                  called: !0,
                  loading: !1,
                  data: i,
                  error: s,
                  client: u
                };
                v.current.isMounted && !(0, a.L)(v.current.result, d) && p(v.current.result = d)
              }
              var y = e.onCompleted || (null === (n = v.current.options) || void 0 === n ? void 0 : n.onCompleted);
              return s || null == y || y(t.data, f), t
            }, function(t) {
              var r;
              if (l === v.current.mutationId && v.current.isMounted) {
                var n = {
                  loading: !1,
                  error: t,
                  data: void 0,
                  called: !0,
                  client: u
                };
                (0, a.L)(v.current.result, n) || p(v.current.result = n)
              }
              var i = e.onError || (null === (r = v.current.options) || void 0 === r ? void 0 : r.onError);
              if (i) return i(t, f), {
                data: void 0,
                errors: t
              };
              throw t
            })
          }, []),
          m = i.useCallback(function() {
            if (v.current.isMounted) {
              var e = {
                called: !1,
                loading: !1,
                client: v.current.client
              };
              Object.assign(v.current, {
                mutationId: 0,
                result: e
              }), p(e)
            }
          }, []);
        return i.useEffect(function() {
          var e = v.current;
          return e.isMounted = !0,
            function() {
              e.isMounted = !1
            }
        }, []), [y, (0, n.Cl)({
          reset: m
        }, d)]
      }
    },
    7324(e, t, r) {
      "use strict";
      r.d(t, {
        Er: () => x,
        kk: () => N,
        t_: () => S,
        $X: () => A,
        IT: () => O,
        SX: () => C
      });
      var n = r(1177),
        i = r(3023),
        o = r(8538),
        a = r(58),
        s = r(4269),
        c = r(5568),
        u = r(7077),
        l = r(5227),
        f = r(2959),
        h = r(839),
        d = r(2707),
        p = r(5919),
        v = r(5593),
        y = r(7540),
        m = r(6605),
        g = Symbol.for("apollo.hook.wrappers"),
        b = r(658),
        _ = r(2825),
        E = Object.prototype.hasOwnProperty;

      function T() {}
      var w = Symbol();

      function O(e, t) {
        return void 0 === t && (t = Object.create(null)), (r = k, (o = (i = (n = (0, p.m)(t && t.client).queryManager) && n[g]) && i.useQuery) ? o(r) : r)(e, t);
        var r, n, i, o
      }

      function k(e, t) {
        !1 !== globalThis.__DEV__ && ((0, b.h)(t, "canonizeResults", "useQuery"), (0, b.h)(t, "partialRefetch", "useQuery"), (0, b.h)(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), (0, b.h)(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, b.h)(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
        var r = C(e, t),
          i = r.result,
          a = r.obsQueryFields;
        return o.useMemo(function() {
          return (0, n.Cl)((0, n.Cl)({}, i), a)
        }, [i, a])
      }

      function C(e, t) {
        var r = (0, p.m)(t.client),
          c = o.useContext((0, u.l)()).renderPromises,
          l = !!c,
          v = r.disableNetworkFetches,
          y = !1 !== t.ssr && !t.skip,
          m = t.partialRefetch,
          g = x(r, e, t, l),
          b = function(e, t, r, i, a) {
            function s(n) {
              var o;
              return (0, d.D$)(t, d.KG.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(a()) || f.U.inactiveOnCreation.withValue(!i, function() {
                  return (0, _.lz)(["canonizeResults", "partialRefetch"], function() {
                    return e.watchQuery(S(void 0, e, r, a()))
                  })
                }),
                resultData: {
                  previousData: null === (o = null == n ? void 0 : n.resultData.current) || void 0 === o ? void 0 : o.data
                }
              }
            }
            var c = o.useState(s),
              u = c[0],
              l = c[1];

            function h(e) {
              var t, r;
              Object.assign(u.observable, ((t = {})[w] = e, t));
              var i = u.resultData;
              l((0, n.Cl)((0, n.Cl)({}, u), {
                query: e.query,
                resultData: Object.assign(i, {
                  previousData: (null === (r = i.current) || void 0 === r ? void 0 : r.data) || i.previousData,
                  current: void 0
                })
              }))
            }
            if (e !== u.client || t !== u.query) {
              var p = s(u);
              return l(p), [p, h]
            }
            return [u, h]
          }(r, e, t, c, g),
          O = b[0],
          k = O.observable,
          C = O.resultData,
          N = b[1],
          M = g(k);
        ! function(e, t, r, n, i) {
          var o;
          t[w] && !(0, s.L)(t[w], i) && (t.reobserve(S(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[w] = i
        }(C, k, r, t, M);
        var F = o.useMemo(function() {
          return function(e) {
            return {
              refetch: e.refetch.bind(e),
              reobserve: function() {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(83), e.reobserve.apply(e, t)
              },
              fetchMore: e.fetchMore.bind(e),
              updateQuery: e.updateQuery.bind(e),
              startPolling: e.startPolling.bind(e),
              stopPolling: e.stopPolling.bind(e),
              subscribeToMore: e.subscribeToMore.bind(e)
            }
          }(k)
        }, [k]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(k, c, y);
        var V = function(e, t, r, n, i, c, u, l, f) {
          var d = o.useRef(f);
          o.useEffect(function() {
            d.current = f
          });
          var p = !l && !c || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? P : void 0 : R,
            v = e.previousData,
            y = o.useMemo(function() {
              return p && A(p, v, t, r)
            }, [r, t, p, v]);
          return (0, a.r)(o.useCallback(function(n) {
            if (l) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && (0, s.L)(i.data, o.data) || D(o, e, t, r, u, n, d.current)
              },
              o = function(c) {
                if (a.current.unsubscribe(), a.current = t.resubscribeAfterError(i, o), !E.call(c, "graphQLErrors")) throw c;
                var l = e.current;
                (!l || l && l.loading || !(0, s.L)(c, l.error)) && D({
                  data: l && l.data,
                  error: c,
                  loading: !1,
                  networkStatus: h.pT.error
                }, e, t, r, u, n, d.current)
              },
              a = {
                current: t.subscribe(i, o)
              };
            return function() {
              setTimeout(function() {
                return a.current.unsubscribe()
              })
            }
          }, [c, l, t, e, u, r]), function() {
            return y || I(e, t, d.current, u, r)
          }, function() {
            return y || I(e, t, d.current, u, r)
          })
        }(C, k, r, t, M, v, m, l, {
          onCompleted: t.onCompleted || T,
          onError: t.onError || T
        });
        return {
          result: V,
          obsQueryFields: F,
          observable: k,
          resultData: C,
          client: r,
          onQueryExecuted: N
        }
      }

      function x(e, t, r, i) {
        void 0 === r && (r = {});
        var o = r.skip,
          a = (r.ssr, r.onCompleted, r.onError, r.defaultOptions),
          s = (0, n.Tt)(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        return function(r) {
          var n = Object.assign(s, {
            query: t
          });
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || N(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || N(a, e.defaultOptions)), n
        }
      }

      function S(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, v.o)(e && e.options, n)), i.reduce(c.l)
      }

      function D(e, t, r, o, a, s, c) {
        var u = t.current;
        u && u.data && (t.previousData = u.data), !e.error && (0, y.E)(e.errors) && (e.error = new l.K4({
            graphQLErrors: e.errors
          })), t.current = A(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.Cl)((0, n.Cl)({}, e), {
              loading: !0,
              networkStatus: h.pT.refetch
            }))
          }(e, r, a), t.previousData, r, o), s(),
          function(e, t, r) {
            if (!e.loading) {
              var n = function(e) {
                return (0, y.E)(e.errors) ? new l.K4({
                  graphQLErrors: e.errors
                }) : e.error
              }(e);
              Promise.resolve().then(function() {
                n ? r.onError(n) : e.data && t !== e.networkStatus && e.networkStatus === h.pT.ready && r.onCompleted(e.data)
              }).catch(function(e) {
                !1 !== globalThis.__DEV__ && i.V1.warn(e)
              })
            }
          }(e, null == u ? void 0 : u.networkStatus, c)
      }

      function I(e, t, r, n, i) {
        return e.current || D(t.getCurrentResult(), e, t, i, n, function() {}, r), e.current
      }

      function N(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function A(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.Tt)(e, ["data", "partial"]));
        return (0, n.Cl)((0, n.Cl)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== R && e !== P,
          previousData: t
        })
      }
      var R = (0, m.G)({
          loading: !0,
          data: void 0,
          error: void 0,
          networkStatus: h.pT.loading
        }),
        P = (0, m.G)({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: h.pT.ready
        })
    },
    2707(e, t, r) {
      "use strict";
      r.d(t, {
        D$: () => h,
        KG: () => n
      });
      var n, i, o = r(3023),
        a = r(5879),
        s = r(8460),
        c = r(8603),
        u = r(2825);

      function l(e) {
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

      function f(e) {
        (0, u.S2)("parser", function() {
          !1 !== globalThis.__DEV__ && o.V1.warn(93)
        }), i || (i = new a.A(s.v.parser || 1e3));
        var t, r, c = i.get(e);
        if (c) return c;
        (0, o.V1)(!!e && !!e.kind, 94, e);
        for (var l = [], f = [], h = [], d = [], p = 0, v = e.definitions; p < v.length; p++) {
          var y = v[p];
          if ("FragmentDefinition" !== y.kind) {
            if ("OperationDefinition" === y.kind) switch (y.operation) {
              case "query":
                f.push(y);
                break;
              case "mutation":
                h.push(y);
                break;
              case "subscription":
                d.push(y)
            }
          } else l.push(y)
        }(0, o.V1)(!l.length || f.length || h.length || d.length, 95), (0, o.V1)(f.length + h.length + d.length <= 1, 96, e, f.length, d.length, h.length), r = f.length ? n.Query : n.Mutation, f.length || h.length || (r = n.Subscription);
        var m = f.length ? f : h.length ? h : d;
        (0, o.V1)(1 === m.length, 97, e, m.length);
        var g = m[0];
        t = g.variableDefinitions || [];
        var b = {
          name: g.name && "Name" === g.name.kind ? g.name.value : "data",
          type: r,
          variables: t
        };
        return i.set(e, b), b
      }

      function h(e, t) {
        var r = (0, u.lz)("parser", f, [e]),
          n = l(t),
          i = l(r.type);
        (0, o.V1)(r.type === t, 98, n, n, i)
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(n || (n = {})), f.resetCache = function() {
        i = void 0
      }, !1 !== globalThis.__DEV__ && (0, c.D_)("parser", function() {
        return i ? i.size : 0
      })
    },
    5879(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => s,
        V: () => c
      });
      var n = r(9190),
        i = r(85),
        o = new WeakSet;

      function a(e) {
        e.size <= (e.max || -1) || o.has(e) || (o.add(e), setTimeout(function() {
          e.clean(), o.delete(e)
        }, 100))
      }
      var s = function(e, t) {
          var r = new i.l(e, t);
          return r.set = function(e, t) {
            var r = i.l.prototype.set.call(this, e, t);
            return a(this), r
          }, r
        },
        c = function(e, t) {
          var r = new n.C(e, t);
          return r.set = function(e, t) {
            var r = n.C.prototype.set.call(this, e, t);
            return a(this), r
          }, r
        }
    },
    8603(e, t, r) {
      "use strict";
      r.d(t, {
        D_: () => a,
        cM: () => c,
        ep: () => s,
        tQ: () => u
      });
      var n = r(1177),
        i = r(8460),
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
            }).map(function(e) {
              var t = e[0],
                r = e[1];
              return [t, i.v[t] || r]
            })),
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
        c = !1 !== globalThis.__DEV__ ? function() {
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
        u = !1 !== globalThis.__DEV__ ? l : void 0;

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
        return p(e).map(function(e) {
          return {
            cache: e
          }
        })
      }

      function p(e) {
        return e ? (0, n.fX)((0, n.fX)([f(null == e ? void 0 : e.performWork)], p(null == e ? void 0 : e.left), !0), p(null == e ? void 0 : e.right), !0).filter(h) : []
      }

      function v(e) {
        var t;
        return e ? (0, n.fX)((0, n.fX)([null === (t = null == e ? void 0 : e.getMemoryInternals) || void 0 === t ? void 0 : t.call(e)], v(null == e ? void 0 : e.left), !0), v(null == e ? void 0 : e.right), !0).filter(h) : []
      }
    },
    8460(e, t, r) {
      "use strict";
      r.d(t, {
        v: () => a
      });
      var n = r(1177),
        i = r(3023),
        o = Symbol.for("apollo.cacheSize"),
        a = (0, n.Cl)({}, i.Sf[o])
    },
    7540(e, t, r) {
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
    2573(e, t, r) {
      "use strict";
      r.d(t, {
        M: () => s
      });
      var n, i = r(5879),
        o = r(8460),
        a = r(8603),
        s = Object.assign(function(e) {
          return JSON.stringify(e, c)
        }, {
          reset: function() {
            n = new i.V(o.v.canonicalStringify || 1e3)
          }
        });

      function c(e, t) {
        if (t && "object" == typeof t) {
          var r = Object.getPrototypeOf(t);
          if (r === Object.prototype || null === r) {
            var i = Object.keys(t);
            if (i.every(u)) return t;
            var o = JSON.stringify(i),
              a = n.get(o);
            if (!a) {
              i.sort();
              var s = JSON.stringify(i);
              a = n.get(s) || i, n.set(o, a), n.set(s, a)
            }
            var c = Object.create(r);
            return a.forEach(function(e) {
              c[e] = t[e]
            }), c
          }
        }
        return t
      }

      function u(e, t, r) {
        return 0 === t || r[t - 1] <= e
      }!1 !== globalThis.__DEV__ && (0, a.D_)("canonicalStringify", function() {
        return n.size
      }), s.reset()
    },
    8471(e, t, r) {
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
            return t.set(e, r), r.forEach(function(e, n) {
              r[n] = o(e, t)
            }), r;
          case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var i = Object.create(Object.getPrototypeOf(e));
            return t.set(e, i), Object.keys(e).forEach(function(r) {
              i[r] = o(e[r], t)
            }), i;
          default:
            return e
        }
      }
    },
    5593(e, t, r) {
      "use strict";

      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = Object.create(null);
        return e.forEach(function(e) {
          e && Object.keys(e).forEach(function(t) {
            var n = e[t];
            void 0 !== n && (r[t] = n)
          })
        }), r
      }
      r.d(t, {
        o: () => n
      })
    },
    1029(e, t, r) {
      "use strict";
      r.d(t, {
        Nw: () => c,
        ST: () => a,
        YX: () => s,
        bd: () => u
      });
      var n = r(1384),
        i = r(7540),
        o = r(9722);

      function a(e) {
        return "incremental" in e
      }

      function s(e) {
        return a(e) || function(e) {
          return "hasNext" in e && "data" in e
        }(e)
      }

      function c(e) {
        return (0, n.U)(e) && "payload" in e
      }

      function u(e, t) {
        var r = e,
          n = new o.ZI;
        return a(t) && (0, i.E)(t.incremental) && t.incremental.forEach(function(e) {
          for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
            var a = i[o],
              s = isNaN(+a) ? {} : [];
            s[a] = t, t = s
          }
          r = n.merge(r, t)
        }), r
      }
    },
    6605(e, t, r) {
      "use strict";
      r.d(t, {
        G: () => i
      });
      var n = r(1384);

      function i(e) {
        return !1 !== globalThis.__DEV__ && (t = e, (r = new Set([t])).forEach(function(e) {
          (0, n.U)(e) && function(e) {
            if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e)) try {
              Object.freeze(e)
            } catch (e) {
              if (e instanceof TypeError) return null;
              throw e
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach(function(t) {
            (0, n.U)(e[t]) && r.add(e[t])
          })
        })), e;
        var t, r
      }
    },
    9722(e, t, r) {
      "use strict";
      r.d(t, {
        D9: () => a,
        IM: () => s,
        ZI: () => u
      });
      var n = r(1177),
        i = r(1384),
        o = Object.prototype.hasOwnProperty;

      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s(e)
      }

      function s(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var n = new u, i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t
      }
      var c = function(e, t, r) {
          return this.merge(e[r], t[r])
        },
        u = function() {
          function e(e) {
            void 0 === e && (e = c), this.reconciler = e, this.isObject = i.U, this.pastCopies = new Set
          }
          return e.prototype.merge = function(e, t) {
            for (var r = this, a = [], s = 2; s < arguments.length; s++) a[s - 2] = arguments[s];
            return (0, i.U)(t) && (0, i.U)(e) ? (Object.keys(t).forEach(function(i) {
              if (o.call(e, i)) {
                var s = e[i];
                if (t[i] !== s) {
                  var c = r.reconciler.apply(r, (0, n.fX)([e, t, i], a, !1));
                  c !== s && ((e = r.shallowCopyForMerge(e))[i] = c)
                }
              } else(e = r.shallowCopyForMerge(e))[i] = t[i]
            }), e) : t
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, i.U)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, n.Cl)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }()
    },
    5568(e, t, r) {
      "use strict";
      r.d(t, {
        l: () => o
      });
      var n = r(1177),
        i = r(5593);

      function o(e, t) {
        return (0, i.o)(e, t, t.variables && {
          variables: (0, i.o)((0, n.Cl)((0, n.Cl)({}, e && e.variables), t.variables))
        })
      }
    },
    1384(e, t, r) {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e
      }
      r.d(t, {
        U: () => n
      })
    },
    2825(e, t, r) {
      "use strict";
      r.d(t, {
        S2: () => d,
        cc: () => h,
        lz: () => f
      });
      var n, i = r(1177),
        o = r(9131),
        a = r(3023),
        s = Symbol.for("apollo.deprecations"),
        c = Symbol.for("apollo.deprecations.slot"),
        u = a.Sf,
        l = null !== (n = u[c]) && void 0 !== n ? n : u[c] = new o.DX;

      function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return l.withValue.apply(l, (0, i.fX)([Array.isArray(e) ? e : [e]], t, !1))
      }

      function h(e, t, r, n) {
        void 0 === n && (n = "Please remove this option."), d(t, function() {
          t in e && !1 !== globalThis.__DEV__ && a.V1.warn(103, r, t, n)
        })
      }

      function d(e, t) {
        (function(e) {
          return u[s] || (l.getValue() || []).includes(e)
        })(e) || t()
      }
    },
    7849(e, t, r) {
      "use strict";
      r.d(t, {
        c: () => f
      });
      var n = r(7582),
        i = r(5355),
        o = r(6408),
        a = r(3023),
        s = r(85),
        c = r(9131),
        u = r(8460);

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
          return void 0 === n && (n = e.identity()), Object.assign(new e(function(e) {
            return (t(e) ? r : n).transformDocument(e)
          }, {
            cache: !1
          }), {
            left: r,
            right: n
          })
        }, e.prototype.resetCache = function() {
          var t = this;
          if (this.cached) {
            var r = new n.b(i.et);
            this.performWork = (0, c.LV)(e.prototype.performWork.bind(this), {
              makeCacheKey: function(e) {
                var n = t.getCacheKey(e);
                if (n) return (0, a.V1)(Array.isArray(n), 104), r.lookupArray(n)
              },
              max: u.v["documentTransform.cache"],
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
          return Object.assign(new e(function(e) {
            return t.transformDocument(r.transformDocument(e))
          }, {
            cache: !1
          }), {
            left: this,
            right: t
          })
        }, e
      }()
    },
    5154(e, t, r) {
      "use strict";
      r.d(t, {
        MS: () => a,
        d8: () => s,
        f2: () => c,
        s7: () => u
      });
      var n = r(3023),
        i = r(5425),
        o = r(7646);

      function a(e, t) {
        var r = e.directives;
        return !r || !r.length || function(e) {
          var t = [];
          return e && e.length && e.forEach(function(e) {
            if (function(e) {
                var t = e.name.value;
                return "skip" === t || "include" === t
              }(e)) {
              var r = e.arguments,
                i = e.name.value;
              (0, n.V1)(r && 1 === r.length, 106, i);
              var o = r[0];
              (0, n.V1)(o.name && "if" === o.name.value, 107, i);
              var a = o.value;
              (0, n.V1)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 108, i), t.push({
                directive: e,
                ifArgument: o
              })
            }
          }), t
        }(r).every(function(e) {
          var r = e.directive,
            i = e.ifArgument,
            o = !1;
          return "Variable" === i.value.kind ? (o = t && t[i.value.name.value], (0, n.V1)(void 0 !== o, 105, r.name.value)) : o = i.value.value, "skip" === r.name.value ? !o : o
        })
      }

      function s(e, t, r) {
        var n = new Set(e),
          i = n.size;
        return (0, o.YR)(t, {
          Directive: function(e) {
            if (n.delete(e.name.value) && (!r || !n.size)) return o.sP
          }
        }), r ? !n.size : n.size < i
      }

      function c(e) {
        return e && s(["client", "export"], e, !0)
      }

      function u(e) {
        var t, r, o = null === (t = e.directives) || void 0 === t ? void 0 : t.find(function(e) {
          return "unmask" === e.name.value
        });
        if (!o) return "mask";
        var a = null === (r = o.arguments) || void 0 === r ? void 0 : r.find(function(e) {
          return "mode" === e.name.value
        });
        return !1 !== globalThis.__DEV__ && a && (a.value.kind === i.b.VARIABLE ? !1 !== globalThis.__DEV__ && n.V1.warn(109) : a.value.kind !== i.b.STRING ? !1 !== globalThis.__DEV__ && n.V1.warn(110) : "migrate" !== a.value.value && !1 !== globalThis.__DEV__ && n.V1.warn(111, a.value.value)), a && "value" in a.value && "migrate" === a.value.value ? "migrate" : "unmask"
      }
    },
    5404(e, t, r) {
      "use strict";
      r.d(t, {
        HQ: () => c,
        JG: () => s,
        ct: () => a,
        s6: () => u
      });
      var n = r(1177),
        i = r(3023),
        o = r(7646);

      function a(e, t) {
        var r = t,
          o = [];
        return e.definitions.forEach(function(e) {
          if ("OperationDefinition" === e.kind) throw (0, i.vA)(112, e.operation, e.name ? " named '".concat(e.name.value, "'") : "");
          "FragmentDefinition" === e.kind && o.push(e)
        }), void 0 === r && ((0, i.V1)(1 === o.length, 113, o.length), r = o[0].name.value), (0, n.Cl)((0, n.Cl)({}, e), {
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
        return e.forEach(function(e) {
          t[e.name.value] = e
        }), t
      }

      function c(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var r = e.name.value;
            if ("function" == typeof t) return t(r);
            var n = t && t[r];
            return (0, i.V1)(n, 114, r), n || null;
          default:
            return null
        }
      }

      function u(e) {
        var t = !0;
        return (0, o.YR)(e, {
          FragmentSpread: function(e) {
            if (!(t = !!e.directives && e.directives.some(function(e) {
                return "unmask" === e.name.value
              }))) return o.sP
          }
        }), t
      }
    },
    6408(e, t, r) {
      "use strict";
      r.d(t, {
        AT: () => u,
        E4: () => l,
        Vn: () => f,
        Vu: () => a,
        n4: () => s,
        sw: () => o,
        wY: () => h,
        zK: () => c
      });
      var n = r(3023),
        i = r(3946);

      function o(e) {
        (0, n.V1)(e && "Document" === e.kind, 115);
        var t = e.definitions.filter(function(e) {
          return "FragmentDefinition" !== e.kind
        }).map(function(e) {
          if ("OperationDefinition" !== e.kind) throw (0, n.vA)(116, e.kind);
          return e
        });
        return (0, n.V1)(t.length <= 1, 117, t.length), e
      }

      function a(e) {
        return o(e), e.definitions.filter(function(e) {
          return "OperationDefinition" === e.kind
        })[0]
      }

      function s(e) {
        return e.definitions.filter(function(e) {
          return "OperationDefinition" === e.kind && !!e.name
        }).map(function(e) {
          return e.name.value
        })[0] || null
      }

      function c(e) {
        return e.definitions.filter(function(e) {
          return "FragmentDefinition" === e.kind
        })
      }

      function u(e) {
        var t = a(e);
        return (0, n.V1)(t && "query" === t.operation, 118), t
      }

      function l(e) {
        (0, n.V1)("Document" === e.kind, 119), (0, n.V1)(e.definitions.length <= 1, 120);
        var t = e.definitions[0];
        return (0, n.V1)("FragmentDefinition" === t.kind, 121), t
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
        throw (0, n.vA)(122)
      }

      function h(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return r && r.length && r.forEach(function(e) {
          e.defaultValue && (0, i.J)(t, e.variable.name, e.defaultValue)
        }), t
      }
    },
    9537(e, t, r) {
      "use strict";
      r.d(t, {
        y: () => g
      });
      var n = r(6368);
      const i = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

      function o(e) {
        return a[e.charCodeAt(0)]
      }
      const a = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];
      var s = r(7646);
      const c = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => u(e.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(e) {
            const t = d(e.variableDefinitions) ? f("(\n", u(e.variableDefinitions, "\n"), "\n)") : f("(", u(e.variableDefinitions, ", "), ")"),
              r = f("", e.description, "\n") + u([e.operation, u([e.name, t]), u(e.directives, " ")], " ");
            return ("query" === r ? "" : r + " ") + e.selectionSet
          }
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: r,
            directives: n,
            description: i
          }) => f("", i, "\n") + e + ": " + t + f(" = ", r) + f(" ", u(n, " "))
        },
        SelectionSet: {
          leave: ({
            selections: e
          }) => l(e)
        },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: r,
            directives: n,
            selectionSet: i
          }) {
            const o = f("", e, ": ") + t;
            let a = o + f("(", u(r, ", "), ")");
            return a.length > 80 && (a = o + f("(\n", h(u(r, "\n")), "\n)")), u([a, u(n, " "), i], " ")
          }
        },
        Argument: {
          leave: ({
            name: e,
            value: t
          }) => e + ": " + t
        },
        FragmentSpread: {
          leave: ({
            name: e,
            directives: t
          }) => "..." + e + f(" ", u(t, " "))
        },
        InlineFragment: {
          leave: ({
            typeCondition: e,
            directives: t,
            selectionSet: r
          }) => u(["...", f("on ", e), u(t, " "), r], " ")
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: r,
            directives: n,
            selectionSet: i,
            description: o
          }) => f("", o, "\n") + `fragment ${e}${f("(",u(r,", "),")")} ` + `on ${t} ${f("",u(n," ")," ")}` + i
        },
        IntValue: {
          leave: ({
            value: e
          }) => e
        },
        FloatValue: {
          leave: ({
            value: e
          }) => e
        },
        StringValue: {
          leave: ({
            value: e,
            block: t
          }) => t ? (0, n.yo)(e) : `"${e.replace(i,o)}"`
        },
        BooleanValue: {
          leave: ({
            value: e
          }) => e ? "true" : "false"
        },
        NullValue: {
          leave: () => "null"
        },
        EnumValue: {
          leave: ({
            value: e
          }) => e
        },
        ListValue: {
          leave: ({
            values: e
          }) => "[" + u(e, ", ") + "]"
        },
        ObjectValue: {
          leave: ({
            fields: e
          }) => "{" + u(e, ", ") + "}"
        },
        ObjectField: {
          leave: ({
            name: e,
            value: t
          }) => e + ": " + t
        },
        Directive: {
          leave: ({
            name: e,
            arguments: t
          }) => "@" + e + f("(", u(t, ", "), ")")
        },
        NamedType: {
          leave: ({
            name: e
          }) => e
        },
        ListType: {
          leave: ({
            type: e
          }) => "[" + e + "]"
        },
        NonNullType: {
          leave: ({
            type: e
          }) => e + "!"
        },
        SchemaDefinition: {
          leave: ({
            description: e,
            directives: t,
            operationTypes: r
          }) => f("", e, "\n") + u(["schema", u(t, " "), l(r)], " ")
        },
        OperationTypeDefinition: {
          leave: ({
            operation: e,
            type: t
          }) => e + ": " + t
        },
        ScalarTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r
          }) => f("", e, "\n") + u(["scalar", t, u(r, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          }) => f("", e, "\n") + u(["type", t, f("implements ", u(r, " & ")), u(n, " "), l(i)], " ")
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            type: n,
            directives: i
          }) => f("", e, "\n") + t + (d(r) ? f("(\n", h(u(r, "\n")), "\n)") : f("(", u(r, ", "), ")")) + ": " + n + f(" ", u(i, " "))
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: r,
            defaultValue: n,
            directives: i
          }) => f("", e, "\n") + u([t + ": " + r, f("= ", n), u(i, " ")], " ")
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          }) => f("", e, "\n") + u(["interface", t, f("implements ", u(r, " & ")), u(n, " "), l(i)], " ")
        },
        UnionTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            types: n
          }) => f("", e, "\n") + u(["union", t, u(r, " "), f("= ", u(n, " | "))], " ")
        },
        EnumTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            values: n
          }) => f("", e, "\n") + u(["enum", t, u(r, " "), l(n)], " ")
        },
        EnumValueDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r
          }) => f("", e, "\n") + u([t, u(r, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            fields: n
          }) => f("", e, "\n") + u(["input", t, u(r, " "), l(n)], " ")
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            repeatable: n,
            locations: i
          }) => f("", e, "\n") + "directive @" + t + (d(r) ? f("(\n", h(u(r, "\n")), "\n)") : f("(", u(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + u(i, " | ")
        },
        SchemaExtension: {
          leave: ({
            directives: e,
            operationTypes: t
          }) => u(["extend schema", u(e, " "), l(t)], " ")
        },
        ScalarTypeExtension: {
          leave: ({
            name: e,
            directives: t
          }) => u(["extend scalar", e, u(t, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: r,
            fields: n
          }) => u(["extend type", e, f("implements ", u(t, " & ")), u(r, " "), l(n)], " ")
        },
        InterfaceTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: r,
            fields: n
          }) => u(["extend interface", e, f("implements ", u(t, " & ")), u(r, " "), l(n)], " ")
        },
        UnionTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            types: r
          }) => u(["extend union", e, u(t, " "), f("= ", u(r, " | "))], " ")
        },
        EnumTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            values: r
          }) => u(["extend enum", e, u(t, " "), l(r)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            fields: r
          }) => u(["extend input", e, u(t, " "), l(r)], " ")
        },
        TypeCoordinate: {
          leave: ({
            name: e
          }) => e
        },
        MemberCoordinate: {
          leave: ({
            name: e,
            memberName: t
          }) => u([e, f(".", t)])
        },
        ArgumentCoordinate: {
          leave: ({
            name: e,
            fieldName: t,
            argumentName: r
          }) => u([e, f(".", t), f("(", r, ":)")])
        },
        DirectiveCoordinate: {
          leave: ({
            name: e
          }) => u(["@", e])
        },
        DirectiveArgumentCoordinate: {
          leave: ({
            name: e,
            argumentName: t
          }) => u(["@", e, f("(", t, ":)")])
        }
      };

      function u(e, t = "") {
        var r;
        return null !== (r = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== r ? r : ""
      }

      function l(e) {
        return f("{\n", h(u(e, "\n")), "\n}")
      }

      function f(e, t, r = "") {
        return null != t && "" !== t ? e + t + r : ""
      }

      function h(e) {
        return f("  ", e.replace(/\n/g, "\n  "))
      }

      function d(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
      }
      var p, v = r(5879),
        y = r(8460),
        m = r(8603),
        g = Object.assign(function(e) {
          var t = p.get(e);
          return t || (t = function(e) {
            return (0, s.YR)(e, c)
          }(e), p.set(e, t)), t
        }, {
          reset: function() {
            p = new v.A(y.v.print || 2e3)
          }
        });
      g.reset(), !1 !== globalThis.__DEV__ && (0, m.D_)("print", function() {
        return p ? p.size : 0
      })
    },
    3946(e, t, r) {
      "use strict";
      r.d(t, {
        A_: () => c,
        D$: () => m,
        Ii: () => f,
        J: () => l,
        Kc: () => u,
        MB: () => v,
        WU: () => s,
        dt: () => g,
        kd: () => b,
        o5: () => p,
        ue: () => y
      });
      var n = r(3023),
        i = r(1384),
        o = r(5404),
        a = r(2573);

      function s(e) {
        return {
          __ref: String(e)
        }
      }

      function c(e) {
        return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
      }

      function u(e) {
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
          r.fields.map(function(e) {
            return l(o, e.name, e.value, i)
          }), e[t.value] = o
        } else if (function(e) {
            return "Variable" === e.kind
          }(r)) {
          var a = (i || {})[r.name.value];
          e[t.value] = a
        } else if (function(e) {
            return "ListValue" === e.kind
          }(r)) e[t.value] = r.values.map(function(e) {
          var r = {};
          return l(r, t, e, i), r[t.value]
        });
        else if (function(e) {
            return "EnumValue" === e.kind
          }(r)) e[t.value] = r.value;
        else {
          if (! function(e) {
              return "NullValue" === e.kind
            }(r)) throw (0, n.vA)(123, t.value, r.kind);
          e[t.value] = null
        }
      }

      function f(e, t) {
        var r = null;
        e.directives && (r = {}, e.directives.forEach(function(e) {
          r[e.name.value] = {}, e.arguments && e.arguments.forEach(function(n) {
            var i = n.name,
              o = n.value;
            return l(r[e.name.value], i, o, t)
          })
        }));
        var n = null;
        return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(e) {
          var r = e.name,
            i = e.value;
          return l(n, r, i, t)
        })), p(e.name.value, n, r)
      }
      var h = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"],
        d = a.M,
        p = Object.assign(function(e, t, r) {
          if (t && r && r.connection && r.connection.key) {
            if (r.connection.filter && r.connection.filter.length > 0) {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return n.forEach(function(e) {
                i[e] = t[e]
              }), "".concat(r.connection.key, "(").concat(d(i), ")")
            }
            return r.connection.key
          }
          var o = e;
          if (t) {
            var a = d(t);
            o += "(".concat(a, ")")
          }
          return r && Object.keys(r).forEach(function(e) {
            -1 === h.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(d(r[e]), ")") : o += "@".concat(e))
          }), o
        }, {
          setStringify: function(e) {
            var t = d;
            return d = e, t
          }
        });

      function v(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return e.arguments.forEach(function(e) {
            var n = e.name,
              i = e.value;
            return l(r, n, i, t)
          }), r
        }
        return null
      }

      function y(e) {
        return e.alias ? e.alias.value : e.name.value
      }

      function m(e, t, r) {
        for (var n, i = 0, a = t.selections; i < a.length; i++)
          if (g(u = a[i])) {
            if ("__typename" === u.name.value) return e[y(u)]
          } else n ? n.push(u) : n = [u];
        if ("string" == typeof e.__typename) return e.__typename;
        if (n)
          for (var s = 0, c = n; s < c.length; s++) {
            var u = c[s],
              l = m(e, (0, o.HQ)(u, r).selectionSet, r);
            if ("string" == typeof l) return l
          }
      }

      function g(e) {
        return "Field" === e.kind
      }

      function b(e) {
        return "InlineFragment" === e.kind
      }
    },
    2846(e, t, r) {
      "use strict";
      r.d(t, {
        XY: () => y,
        er: () => g,
        iz: () => v,
        x3: () => b,
        zc: () => m
      });
      var n = r(1177),
        i = r(3023),
        o = r(5425),
        a = r(7646),
        s = r(6408),
        c = r(3946),
        u = r(5404),
        l = r(7540),
        f = {
          kind: o.b.FIELD,
          name: {
            kind: o.b.NAME,
            value: "__typename"
          }
        };

      function h(e, t) {
        return !e || e.selectionSet.selections.every(function(e) {
          return e.kind === o.b.FRAGMENT_SPREAD && h(t[e.name.value], t)
        })
      }

      function d(e) {
        return h((0, s.Vu)(e) || (0, s.E4)(e), (0, u.JG)((0, s.zK)(e))) ? null : e
      }

      function p(e) {
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

      function v(e, t) {
        (0, s.sw)(t);
        for (var r = p(""), c = p(""), u = function(e) {
            for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
              if (!(0, l.c)(n)) {
                if (n.kind === o.b.OPERATION_DEFINITION) return r(n.name && n.name.value);
                if (n.kind === o.b.FRAGMENT_DEFINITION) return c(n.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(124), null
          }, f = 0, h = t.definitions.length - 1; h >= 0; --h) t.definitions[h].kind === o.b.OPERATION_DEFINITION && ++f;
        var v, y, m, g = (v = e, y = new Map, m = new Map, v.forEach(function(e) {
            e && (e.name ? y.set(e.name, e) : e.test && m.set(e.test, e))
          }), function(e) {
            var t = y.get(e.name.value);
            return !t && m.size && m.forEach(function(r, n) {
              n(e) && (t = r)
            }), t
          }),
          b = function(e) {
            return (0, l.E)(e) && e.map(g).some(function(e) {
              return e && e.remove
            })
          },
          _ = new Map,
          E = !1,
          T = {
            enter: function(e) {
              if (b(e.directives)) return E = !0, null
            }
          },
          w = (0, a.YR)(t, {
            Field: T,
            InlineFragment: T,
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
                if (b(e.directives)) return E = !0, null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                _.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === _.get(JSON.stringify(n)) ? e : f > 0 && e.selectionSet.selections.every(function(e) {
                  return e.kind === o.b.FIELD && "__typename" === e.name.value
                }) ? (c(e.name.value).removed = !0, E = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (g(e)) return E = !0, null
              }
            }
          });
        if (!E) return t;
        var O = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(t) {
              O(c(t)).transitiveVars.forEach(function(t) {
                e.transitiveVars.add(t)
              })
            })), e
          },
          k = new Set;
        w.definitions.forEach(function(e) {
          e.kind === o.b.OPERATION_DEFINITION ? O(r(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
            k.add(e)
          }) : e.kind !== o.b.FRAGMENT_DEFINITION || 0 !== f || c(e.name.value).removed || k.add(e.name.value)
        }), k.forEach(function(e) {
          O(c(e)).fragmentSpreads.forEach(function(e) {
            k.add(e)
          })
        });
        var C = {
          enter: function(e) {
            if (t = e.name.value, !k.has(t) || c(t).removed) return null;
            var t
          }
        };
        return d((0, a.YR)(w, {
          FragmentSpread: C,
          FragmentDefinition: C,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var t = O(r(e.name && e.name.value)).transitiveVars;
                if (t.size < e.variableDefinitions.length) return (0, n.Cl)((0, n.Cl)({}, e), {
                  variableDefinitions: e.variableDefinitions.filter(function(e) {
                    return t.has(e.variable.name.value)
                  })
                })
              }
            }
          }
        }))
      }
      var y = Object.assign(function(e) {
        return (0, a.YR)(e, {
          SelectionSet: {
            enter: function(e, t, r) {
              if (!r || r.kind !== o.b.OPERATION_DEFINITION) {
                var i = e.selections;
                if (i && !i.some(function(e) {
                    return (0, c.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  })) {
                  var a = r;
                  if (!((0, c.dt)(a) && a.directives && a.directives.some(function(e) {
                      return "export" === e.name.value
                    }))) return (0, n.Cl)((0, n.Cl)({}, e), {
                    selections: (0, n.fX)((0, n.fX)([], i, !0), [f], !1)
                  })
                }
              }
            }
          }
        })
      }, {
        added: function(e) {
          return e === f
        }
      });

      function m(e) {
        return "query" === (0, s.Vn)(e).operation ? e : (0, a.YR)(e, {
          OperationDefinition: {
            enter: function(e) {
              return (0, n.Cl)((0, n.Cl)({}, e), {
                operation: "query"
              })
            }
          }
        })
      }

      function g(e) {
        return (0, s.sw)(e), v([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }

      function b(e) {
        return (0, s.sw)(e), (0, a.YR)(e, {
          FragmentSpread: function(e) {
            var t;
            if (!(null === (t = e.directives) || void 0 === t ? void 0 : t.some(function(e) {
                return "unmask" === e.name.value
              }))) return (0, n.Cl)((0, n.Cl)({}, e), {
              directives: (0, n.fX)((0, n.fX)([], e.directives || [], !0), [{
                kind: o.b.DIRECTIVE,
                name: {
                  kind: o.b.NAME,
                  value: "nonreactive"
                }
              }], !1)
            })
          }
        })
      }
    },
    7078(e, t, r) {
      "use strict";

      function n(e, t, r) {
        var n = [];
        e.forEach(function(e) {
          return e[t] && n.push(e)
        }), n.forEach(function(e) {
          return e[t](r)
        })
      }
      r.d(t, {
        w: () => n
      })
    },
    9531(e, t, r) {
      "use strict";
      r.d(t, {
        r: () => o
      });
      var n = r(7593),
        i = r(5355);

      function o(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: n.c
          })
        }
        return i.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }
    },
    85(e, t, r) {
      "use strict";

      function n() {}
      r.d(t, {
        l: () => c
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
      class c {
        constructor(e = 1 / 0, t = i) {
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
    4269(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => c,
        L: () => s
      });
      const {
        toString: n,
        hasOwnProperty: i
      } = Object.prototype, o = Function.prototype.toString, a = new Map;

      function s(e, t) {
        try {
          return u(e, t)
        } finally {
          a.clear()
        }
      }
      const c = s;

      function u(e, t) {
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
              if (!u(e[i], t[i])) return !1
            }
            return !0
          }
          case "[object Error]":
            return e.name === t.name && e.message === t.message;
          case "[object Number]":
            if (e != e) return t != t;
          case "[object Boolean]":
          case "[object Date]":
            return +e === +t;
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
              if (i && !u(o, t.get(r))) return !1
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
    3227(e, t, r) {
      "use strict";

      function n(e, t) {
        if (!Boolean(e)) throw new Error(t)
      }
      r.d(t, {
        U: () => n
      })
    },
    7196(e, t, r) {
      "use strict";

      function n(e) {
        return i(e, [])
      }

      function i(e, t) {
        switch (typeof e) {
          case "string":
            return JSON.stringify(e);
          case "function":
            return e.name ? `[function ${e.name}]` : "[function]";
          case "object":
            return function(e, t) {
              if (null === e) return "null";
              if (t.includes(e)) return "[Circular]";
              const r = [...t, e];
              if (function(e) {
                  return "function" == typeof e.toJSON
                }(e)) {
                const t = e.toJSON();
                if (t !== e) return "string" == typeof t ? t : i(t, r)
              } else if (Array.isArray(e)) return function(e, t) {
                if (0 === e.length) return "[]";
                if (t.length > 2) return "[Array]";
                const r = Math.min(10, e.length),
                  n = e.length - r,
                  o = [];
                for (let n = 0; n < r; ++n) o.push(i(e[n], t));
                return 1 === n ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]"
              }(e, r);
              return function(e, t) {
                const r = Object.entries(e);
                if (0 === r.length) return "{}";
                if (t.length > 2) return "[" + function(e) {
                  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                  if ("Object" === t && "function" == typeof e.constructor) {
                    const t = e.constructor.name;
                    if ("string" == typeof t && "" !== t) return t
                  }
                  return t
                }(e) + "]";
                const n = r.map(([e, r]) => e + ": " + i(r, t));
                return "{ " + n.join(", ") + " }"
              }(e, r)
            }(e, t);
          default:
            return String(e)
        }
      }
      r.d(t, {
        N: () => n
      })
    },
    404(e, t, r) {
      "use strict";
      r.d(t, {
        Ll: () => s,
        aD: () => o,
        aZ: () => n,
        cE: () => c,
        ou: () => i
      });
      class n {
        constructor(e, t, r) {
          this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = r
        }
        get[Symbol.toStringTag]() {
          return "Location"
        }
        toJSON() {
          return {
            start: this.start,
            end: this.end
          }
        }
      }
      class i {
        constructor(e, t, r, n, i, o) {
          this.kind = e, this.start = t, this.end = r, this.line = n, this.column = i, this.value = o, this.prev = null, this.next = null
        }
        get[Symbol.toStringTag]() {
          return "Token"
        }
        toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
          }
        }
      }
      const o = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: ["description", "name", "variableDefinitions", "directives", "selectionSet"],
          VariableDefinition: ["description", "variable", "type", "defaultValue", "directives"],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: ["description", "name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
          FieldDefinition: ["description", "name", "arguments", "type", "directives"],
          InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
          InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
          DirectiveDefinition: ["description", "name", "arguments", "locations"],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
          TypeCoordinate: ["name"],
          MemberCoordinate: ["name", "memberName"],
          ArgumentCoordinate: ["name", "fieldName", "argumentName"],
          DirectiveCoordinate: ["name"],
          DirectiveArgumentCoordinate: ["name", "argumentName"]
        },
        a = new Set(Object.keys(o));

      function s(e) {
        const t = null == e ? void 0 : e.kind;
        return "string" == typeof t && a.has(t)
      }
      var c;
      ! function(e) {
        e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
      }(c || (c = {}))
    },
    6368(e, t, r) {
      "use strict";
      r.d(t, {
        OC: () => i,
        yo: () => a
      });
      var n = r(9043);

      function i(e) {
        var t;
        let r = Number.MAX_SAFE_INTEGER,
          n = null,
          i = -1;
        for (let t = 0; t < e.length; ++t) {
          var a;
          const s = e[t],
            c = o(s);
          c !== s.length && (n = null !== (a = n) && void 0 !== a ? a : t, i = t, 0 !== t && c < r && (r = c))
        }
        return e.map((e, t) => 0 === t ? e : e.slice(r)).slice(null !== (t = n) && void 0 !== t ? t : 0, i + 1)
      }

      function o(e) {
        let t = 0;
        for (; t < e.length && (0, n.i0)(e.charCodeAt(t));) ++t;
        return t
      }

      function a(e, t) {
        const r = e.replace(/"""/g, '\\"""'),
          i = r.split(/\r\n|[\n\r]/g),
          o = 1 === i.length,
          a = i.length > 1 && i.slice(1).every(e => 0 === e.length || (0, n.i0)(e.charCodeAt(0))),
          s = r.endsWith('\\"""'),
          c = e.endsWith('"') && !s,
          u = e.endsWith("\\"),
          l = c || u,
          f = !(null != t && t.minimize) && (!o || e.length > 70 || l || a || s);
        let h = "";
        const d = o && (0, n.i0)(e.charCodeAt(0));
        return (f && !d || a) && (h += "\n"), h += r, (f || l) && (h += "\n"), '"""' + h + '"""'
      }
    },
    9043(e, t, r) {
      "use strict";

      function n(e) {
        return 9 === e || 32 === e
      }

      function i(e) {
        return e >= 48 && e <= 57
      }

      function o(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function a(e) {
        return o(e) || 95 === e
      }

      function s(e) {
        return o(e) || i(e) || 95 === e
      }
      r.d(t, {
        i0: () => n,
        un: () => a,
        xr: () => s,
        yp: () => i
      })
    },
    5425(e, t, r) {
      "use strict";
      var n;
      r.d(t, {
          b: () => n
        }),
        function(e) {
          e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate"
        }(n || (n = {}))
    },
    7646(e, t, r) {
      "use strict";
      r.d(t, {
        YR: () => c,
        sP: () => s
      });
      var n = r(3227),
        i = r(7196),
        o = r(404),
        a = r(5425);
      const s = Object.freeze({});

      function c(e, t, r = o.aD) {
        const c = new Map;
        for (const e of Object.values(a.b)) c.set(e, u(t, e));
        let l, f, h, d = Array.isArray(e),
          p = [e],
          v = -1,
          y = [],
          m = e;
        const g = [],
          b = [];
        do {
          v++;
          const e = v === p.length,
            a = e && 0 !== y.length;
          if (e) {
            if (f = 0 === b.length ? void 0 : g[g.length - 1], m = h, h = b.pop(), a)
              if (d) {
                m = m.slice();
                let e = 0;
                for (const [t, r] of y) {
                  const n = t - e;
                  null === r ? (m.splice(n, 1), e++) : m[n] = r
                }
              } else {
                m = {
                  ...m
                };
                for (const [e, t] of y) m[e] = t
              } v = l.index, p = l.keys, y = l.edits, d = l.inArray, l = l.prev
          } else if (h) {
            if (f = d ? v : p[v], m = h[f], null == m) continue;
            g.push(f)
          }
          let u;
          if (!Array.isArray(m)) {
            var _, E;
            (0, o.Ll)(m) || (0, n.U)(!1, `Invalid AST Node: ${(0,i.N)(m)}.`);
            const r = e ? null === (_ = c.get(m.kind)) || void 0 === _ ? void 0 : _.leave : null === (E = c.get(m.kind)) || void 0 === E ? void 0 : E.enter;
            if (u = null == r ? void 0 : r.call(t, m, f, h, g, b), u === s) break;
            if (!1 === u) {
              if (!e) {
                g.pop();
                continue
              }
            } else if (void 0 !== u && (y.push([f, u]), !e)) {
              if (!(0, o.Ll)(u)) {
                g.pop();
                continue
              }
              m = u
            }
          }
          var T;
          void 0 === u && a && y.push([f, m]), e ? g.pop() : (l = {
            inArray: d,
            index: v,
            keys: p,
            edits: y,
            prev: l
          }, d = Array.isArray(m), p = d ? m : null !== (T = r[m.kind]) && void 0 !== T ? T : [], v = -1, y = [], h && b.push(h), h = m)
        } while (void 0 !== l);
        return 0 !== y.length ? y[y.length - 1][1] : e
      }

      function u(e, t) {
        const r = e[t];
        return "object" == typeof r ? r : "function" == typeof r ? {
          enter: r,
          leave: void 0
        } : {
          enter: e.enter,
          leave: e.leave
        }
      }
    },
    7593(e, t, r) {
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
        c: () => w
      });
      var a = function() {
          return "function" == typeof Symbol
        },
        s = function(e) {
          return a() && Boolean(Symbol[e])
        },
        c = function(e) {
          return s(e) ? Symbol[e] : "@@" + e
        };
      a() && !s("observable") && (Symbol.observable = Symbol("observable"));
      var u = c("iterator"),
        l = c("observable"),
        f = c("species");

      function h(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw new TypeError(r + " is not a function");
          return r
        }
      }

      function d(e) {
        var t = e.constructor;
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : w
      }

      function p(e) {
        return e instanceof w
      }

      function v(e) {
        v.log ? v.log(e) : setTimeout(function() {
          throw e
        })
      }

      function y(e) {
        Promise.resolve().then(function() {
          try {
            e()
          } catch (e) {
            v(e)
          }
        })
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

      function g(e) {
        e._observer = void 0, e._queue = void 0, e._state = "closed"
      }

      function b(e, t, r) {
        e._state = "running";
        var n = e._observer;
        try {
          var i = h(n, t);
          switch (t) {
            case "next":
              i && i.call(n, r);
              break;
            case "error":
              if (g(e), !i) throw r;
              i.call(n, r);
              break;
            case "complete":
              g(e), i && i.call(n)
          }
        } catch (e) {
          v(e)
        }
        "closed" === e._state ? m(e) : "running" === e._state && (e._state = "ready")
      }

      function _(e, t, r) {
        if ("closed" !== e._state) {
          if ("buffering" !== e._state) return "ready" !== e._state ? (e._state = "buffering", e._queue = [{
            type: t,
            value: r
          }], void y(function() {
            return function(e) {
              var t = e._queue;
              if (t) {
                e._queue = void 0, e._state = "ready";
                for (var r = 0; r < t.length && (b(e, t[r].type, t[r].value), "closed" !== e._state); ++r);
              }
            }(e)
          })) : void b(e, t, r);
          e._queue.push({
            type: t,
            value: r
          })
        }
      }
      var E = function() {
          function e(e, t) {
            this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
            var r = new T(this);
            try {
              this._cleanup = t.call(void 0, r)
            } catch (e) {
              r.error(e)
            }
            "initializing" === this._state && (this._state = "ready")
          }
          return e.prototype.unsubscribe = function() {
            "closed" !== this._state && (g(this), m(this))
          }, o(e, [{
            key: "closed",
            get: function() {
              return "closed" === this._state
            }
          }]), e
        }(),
        T = function() {
          function e(e) {
            this._subscription = e
          }
          var t = e.prototype;
          return t.next = function(e) {
            _(this._subscription, "next", e)
          }, t.error = function(e) {
            _(this._subscription, "error", e)
          }, t.complete = function() {
            _(this._subscription, "complete")
          }, o(e, [{
            key: "closed",
            get: function() {
              return "closed" === this._subscription._state
            }
          }]), e
        }(),
        w = function() {
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
            }), new E(e, this._subscriber)
          }, t.forEach = function(e) {
            var t = this;
            return new Promise(function(r, n) {
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
            })
          }, t.map = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(d(this))(function(r) {
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
            })
          }, t.filter = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(d(this))(function(r) {
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
            })
          }, t.reduce = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var r = d(this),
              n = arguments.length > 1,
              i = !1,
              o = arguments[1];
            return new r(function(r) {
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
            })
          }, t.concat = function() {
            for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            var i = d(this);
            return new i(function(t) {
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
            })
          }, t.flatMap = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var r = d(this);
            return new r(function(n) {
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
                i.forEach(function(e) {
                  return e.unsubscribe()
                }), o.unsubscribe()
              }
            })
          }, t[l] = function() {
            return this
          }, e.from = function(t) {
            var r = "function" == typeof this ? this : e;
            if (null == t) throw new TypeError(t + " is not an object");
            var i = h(t, l);
            if (i) {
              var o = i.call(t);
              if (Object(o) !== o) throw new TypeError(o + " is not an object");
              return p(o) && o.constructor === r ? o : new r(function(e) {
                return o.subscribe(e)
              })
            }
            if (s("iterator") && (i = h(t, u))) return new r(function(e) {
              y(function() {
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
              })
            });
            if (Array.isArray(t)) return new r(function(e) {
              y(function() {
                if (!e.closed) {
                  for (var r = 0; r < t.length; ++r)
                    if (e.next(t[r]), e.closed) return;
                  e.complete()
                }
              })
            });
            throw new TypeError(t + " is not observable")
          }, e.of = function() {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return new("function" == typeof this ? this : e)(function(e) {
              y(function() {
                if (!e.closed) {
                  for (var t = 0; t < r.length; ++t)
                    if (e.next(r[t]), e.closed) return;
                  e.complete()
                }
              })
            })
          }, o(e, null, [{
            key: f,
            get: function() {
              return this
            }
          }]), e
        }();
      a() && Object.defineProperty(w, Symbol("extensions"), {
        value: {
          symbol: l,
          hostReportError: v
        },
        configurable: !0
      })
    }
  }
]);