try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ce124065-ac51-4cc2-8efc-fcebfab2b6fd", e._sentryDebugIdIdentifier = "sentry-dbid-ce124065-ac51-4cc2-8efc-fcebfab2b6fd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [679], {
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
      r(n, "ONETRUST_LOADED_EVENT", () => o), r(n, "WRAPPER_CALLED_EVENT", () => a), r(n, "CONSENT_CHANGED_EVENT", () => s), r(n, "init", () => c);
      const i = window.document.currentScript?.nonce,
        o = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        s = "CONSENT_CHANGED_EVENT";
      let u = !0;

      function c(e) {
        const t = window.document.head,
          r = window.document.createElement("script");
        if (r.setAttribute("id", "onetrust-sdk-stub"), r.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("charset", "UTF-8"), r.setAttribute("data-document-language", "true"), i && (r.nonce = i), !e) throw new Error("You must specify the OneTrust script ID");
        r.setAttribute("data-domain-script", e), t.insertBefore(r, t.firstChild), window.OptanonWrapper = function() {
          u && (u = !1, window.dispatchEvent(new CustomEvent(o, {
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
      r(l, "NoChoiceTransactionType", () => f), r(l, "ConfirmedTransactionType", () => d), r(l, "canStoreCookie", () => h);
      const f = "NO_CHOICE",
        d = "CONFIRMED";

      function h(e, t = null) {
        if (!window.OneTrust) return !1;
        const r = window.OneTrust.GetDomainData(),
          n = r.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!n) {
          const r = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(r), !1
        }
        if ("always active" === n.Status) return !0;
        const i = r.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === n.PurposeId);
        return i?.TransactionType === d
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
            u = "ArrayBuffer" in n;
          if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            l = ArrayBuffer.isView || function(e) {
              return e && c.indexOf(Object.prototype.toString.call(e)) > -1
            };

          function f(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase()
          }

          function d(e) {
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
            e = f(e), t = d(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
          }, p.prototype.delete = function(e) {
            delete this.map[f(e)]
          }, p.prototype.get = function(e) {
            return e = f(e), this.has(e) ? this.map[e] : null
          }, p.prototype.has = function(e) {
            return this.map.hasOwnProperty(f(e))
          }, p.prototype.set = function(e, t) {
            this.map[f(e)] = d(t)
          }, p.prototype.forEach = function(e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
          }, p.prototype.keys = function() {
            var e = [];
            return this.forEach(function(t, r) {
              e.push(r)
            }), h(e)
          }, p.prototype.values = function() {
            var e = [];
            return this.forEach(function(t) {
              e.push(t)
            }), h(e)
          }, p.prototype.entries = function() {
            var e = [];
            return this.forEach(function(t, r) {
              e.push([r, t])
            }), h(e)
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
            return e.trim().split("&").forEach(function(e) {
              if (e) {
                var r = e.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  i = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(i))
              }
            }), t
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
          }, g.call(_.prototype), g.call(T.prototype), T.prototype.clone = function() {
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
          var k = [301, 302, 303, 307, 308];
          T.redirect = function(e, t) {
            if (-1 === k.indexOf(t)) throw new RangeError("Invalid status code");
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
            return new Promise(function(i, o) {
              var s = new _(e, r);
              if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
              var c = new XMLHttpRequest;

              function l() {
                c.abort()
              }
              if (c.onload = function() {
                  var e, t, r = {
                    statusText: c.statusText,
                    headers: (e = c.getAllResponseHeaders() || "", t = new p, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
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
                  0 === s.url.indexOf("file://") && (c.status < 200 || c.status > 599) ? r.status = 200 : r.status = c.status, r.url = "responseURL" in c ? c.responseURL : r.headers.get("X-Request-URL");
                  var n = "response" in c ? c.response : c.responseText;
                  setTimeout(function() {
                    i(new T(n, r))
                  }, 0)
                }, c.onerror = function() {
                  setTimeout(function() {
                    o(new TypeError("Network request failed"))
                  }, 0)
                }, c.ontimeout = function() {
                  setTimeout(function() {
                    o(new TypeError("Network request timed out"))
                  }, 0)
                }, c.onabort = function() {
                  setTimeout(function() {
                    o(new t.DOMException("Aborted", "AbortError"))
                  }, 0)
                }, c.open(s.method, function(e) {
                  try {
                    return "" === e && n.location.href ? n.location.href : e
                  } catch (t) {
                    return e
                  }
                }(s.url), !0), "include" === s.credentials ? c.withCredentials = !0 : "omit" === s.credentials && (c.withCredentials = !1), "responseType" in c && (a ? c.responseType = "blob" : u && (c.responseType = "arraybuffer")), r && "object" == typeof r.headers && !(r.headers instanceof p || n.Headers && r.headers instanceof n.Headers)) {
                var h = [];
                Object.getOwnPropertyNames(r.headers).forEach(function(e) {
                  h.push(f(e)), c.setRequestHeader(e, d(r.headers[e]))
                }), s.headers.forEach(function(e, t) {
                  -1 === h.indexOf(t) && c.setRequestHeader(t, e)
                })
              } else s.headers.forEach(function(e, t) {
                c.setRequestHeader(t, e)
              });
              s.signal && (s.signal.addEventListener("abort", l), c.onreadystatechange = function() {
                4 === c.readyState && s.signal.removeEventListener("abort", l)
              }), c.send(void 0 === s._bodyInit ? null : s._bodyInit)
            })
          }
          O.polyfill = !0, n.fetch || (n.fetch = O, n.Headers = p, n.Request = _, n.Response = T), t.Headers = p, t.Request = _, t.Response = T, t.fetch = O
        }({})
      }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
    },
    6597(e) {
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
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
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
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            i[t] = n(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (a(e, o) && r.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return s;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : s
            }(o, r)(e[o], t[o], r) : i[o] = n(t[o], r))
          }), i
        }(e, r, u) : n(r, u)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return s(e, r, t)
        }, {})
      };
      var u = s;
      e.exports = u
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
        return u(e.source, a(e.source, e.start))
      }

      function u(e, t) {
        const r = e.locationOffset.column - 1,
          n = "".padStart(r) + e.body,
          i = t.line - 1,
          o = e.locationOffset.line - 1,
          a = t.line + o,
          s = 1 === t.line ? r : 0,
          u = t.column + s,
          l = `${e.name}:${a}:${u}\n`,
          f = n.split(/\r\n|[\n\r]/g),
          d = f[i];
        if (d.length > 120) {
          const e = Math.floor(u / 80),
            t = u % 80,
            r = [];
          for (let e = 0; e < d.length; e += 80) r.push(d.slice(e, e + 80));
          return l + c([
            [`${a} |`, r[0]], ...r.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(t)],
            ["|", r[e + 1]]
          ])
        }
        return l + c([
          [a - 1 + " |", f[i - 1]],
          [`${a} |`, d],
          ["|", "^".padStart(u)],
          [`${a+1} |`, f[i + 1]]
        ])
      }

      function c(e) {
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
            positions: u,
            path: c,
            originalError: d,
            extensions: h
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
          super(e), this.name = "GraphQLError", this.path = null != c ? c : void 0, this.originalError = null != d ? d : void 0, this.nodes = f(Array.isArray(o) ? o : o ? [o] : void 0);
          const p = f(null === (r = this.nodes) || void 0 === r ? void 0 : r.map(e => e.loc).filter(e => null != e));
          this.source = null != s ? s : null == p || null === (n = p[0]) || void 0 === n ? void 0 : n.source, this.positions = null != u ? u : null == p ? void 0 : p.map(e => e.start), this.locations = u && s ? u.map(e => a(s, e)) : null == p ? void 0 : p.map(e => a(e.source, e.start));
          const v = "object" == typeof(y = null == d ? void 0 : d.extensions) && null !== y ? null == d ? void 0 : d.extensions : void 0;
          var y;
          this.extensions = null !== (i = null != h ? h : v) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
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
          }), null != d && d.stack ? Object.defineProperty(this, "stack", {
            value: d.stack,
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
            for (const t of this.locations) e += "\n\n" + u(this.source, t);
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

      function d(e, t, r) {
        return new l(`Syntax Error: ${r}`, {
          source: e,
          positions: [t]
        })
      }
      var h, p = r(404);
      ! function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(h || (h = {}));
      var v, y = r(5425),
        m = r(6368),
        b = r(9043);
      ! function(e) {
        e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
      }(v || (v = {}));
      class g {
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
                const t = x(this, e.end);
                e.next = t, t.prev = e, e = t
              }
            } while (e.kind === v.COMMENT);
          return e
        }
      }

      function w(e) {
        return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
      }

      function _(e, t) {
        return E(e.charCodeAt(t)) && T(e.charCodeAt(t + 1))
      }

      function E(e) {
        return e >= 55296 && e <= 56319
      }

      function T(e) {
        return e >= 56320 && e <= 57343
      }

      function k(e, t) {
        const r = e.source.body.codePointAt(t);
        if (void 0 === r) return v.EOF;
        if (r >= 32 && r <= 126) {
          const e = String.fromCodePoint(r);
          return '"' === e ? "'\"'" : `"${e}"`
        }
        return "U+" + r.toString(16).toUpperCase().padStart(4, "0")
      }

      function O(e, t, r, n, i) {
        const o = e.line,
          a = 1 + r - e.lineStart;
        return new p.ou(t, r, n, o, a, i)
      }

      function x(e, t) {
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
              return C(e, i);
            case 33:
              return O(e, v.BANG, i, i + 1);
            case 36:
              return O(e, v.DOLLAR, i, i + 1);
            case 38:
              return O(e, v.AMP, i, i + 1);
            case 40:
              return O(e, v.PAREN_L, i, i + 1);
            case 41:
              return O(e, v.PAREN_R, i, i + 1);
            case 46:
              if (46 === r.charCodeAt(i + 1) && 46 === r.charCodeAt(i + 2)) return O(e, v.SPREAD, i, i + 3);
              break;
            case 58:
              return O(e, v.COLON, i, i + 1);
            case 61:
              return O(e, v.EQUALS, i, i + 1);
            case 64:
              return O(e, v.AT, i, i + 1);
            case 91:
              return O(e, v.BRACKET_L, i, i + 1);
            case 93:
              return O(e, v.BRACKET_R, i, i + 1);
            case 123:
              return O(e, v.BRACE_L, i, i + 1);
            case 124:
              return O(e, v.PIPE, i, i + 1);
            case 125:
              return O(e, v.BRACE_R, i, i + 1);
            case 34:
              return 34 === r.charCodeAt(i + 1) && 34 === r.charCodeAt(i + 2) ? F(e, i) : A(e, i)
          }
          if ((0, b.yp)(t) || 45 === t) return S(e, i, t);
          if ((0, b.un)(t)) return V(e, i);
          throw d(e.source, i, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : w(t) || _(r, i) ? `Unexpected character: ${k(e,i)}.` : `Invalid character: ${k(e,i)}.`)
        }
        return O(e, v.EOF, n, n)
      }

      function C(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1;
        for (; i < n;) {
          const e = r.charCodeAt(i);
          if (10 === e || 13 === e) break;
          if (w(e)) ++i;
          else {
            if (!_(r, i)) break;
            i += 2
          }
        }
        return O(e, v.COMMENT, t, i, r.slice(t + 1, i))
      }

      function S(e, t, r) {
        const n = e.source.body;
        let i = t,
          o = r,
          a = !1;
        if (45 === o && (o = n.charCodeAt(++i)), 48 === o) {
          if (o = n.charCodeAt(++i), (0, b.yp)(o)) throw d(e.source, i, `Invalid number, unexpected digit after 0: ${k(e,i)}.`)
        } else i = D(e, i, o), o = n.charCodeAt(i);
        if (46 === o && (a = !0, o = n.charCodeAt(++i), i = D(e, i, o), o = n.charCodeAt(i)), 69 !== o && 101 !== o || (a = !0, o = n.charCodeAt(++i), 43 !== o && 45 !== o || (o = n.charCodeAt(++i)), i = D(e, i, o), o = n.charCodeAt(i)), 46 === o || (0, b.un)(o)) throw d(e.source, i, `Invalid number, expected digit but got: ${k(e,i)}.`);
        return O(e, a ? v.FLOAT : v.INT, t, i, n.slice(t, i))
      }

      function D(e, t, r) {
        if (!(0, b.yp)(r)) throw d(e.source, t, `Invalid number, expected digit but got: ${k(e,t)}.`);
        const n = e.source.body;
        let i = t + 1;
        for (;
          (0, b.yp)(n.charCodeAt(i));) ++i;
        return i
      }

      function A(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1,
          o = i,
          a = "";
        for (; i < n;) {
          const n = r.charCodeAt(i);
          if (34 === n) return a += r.slice(o, i), O(e, v.STRING, t, i + 1, a);
          if (92 === n) {
            a += r.slice(o, i);
            const t = 117 === r.charCodeAt(i + 1) ? 123 === r.charCodeAt(i + 2) ? N(e, i) : I(e, i) : M(e, i);
            a += t.value, i += t.size, o = i;
            continue
          }
          if (10 === n || 13 === n) break;
          if (w(n)) ++i;
          else {
            if (!_(r, i)) throw d(e.source, i, `Invalid character within String: ${k(e,i)}.`);
            i += 2
          }
        }
        throw d(e.source, i, "Unterminated string.")
      }

      function N(e, t) {
        const r = e.source.body;
        let n = 0,
          i = 3;
        for (; i < 12;) {
          const e = r.charCodeAt(t + i++);
          if (125 === e) {
            if (i < 5 || !w(n)) break;
            return {
              value: String.fromCodePoint(n),
              size: i
            }
          }
          if (n = n << 4 | P(e), n < 0) break
        }
        throw d(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)
      }

      function I(e, t) {
        const r = e.source.body,
          n = R(r, t + 2);
        if (w(n)) return {
          value: String.fromCodePoint(n),
          size: 6
        };
        if (E(n) && 92 === r.charCodeAt(t + 6) && 117 === r.charCodeAt(t + 7)) {
          const e = R(r, t + 8);
          if (T(e)) return {
            value: String.fromCodePoint(n, e),
            size: 12
          }
        }
        throw d(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)
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
        throw d(e.source, t, `Invalid character escape sequence: "${r.slice(t,t+2)}".`)
      }

      function F(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = e.lineStart,
          o = t + 3,
          a = o,
          s = "";
        const u = [];
        for (; o < n;) {
          const n = r.charCodeAt(o);
          if (34 === n && 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2)) {
            s += r.slice(a, o), u.push(s);
            const n = O(e, v.BLOCK_STRING, t, o + 3, (0, m.OC)(u).join("\n"));
            return e.line += u.length - 1, e.lineStart = i, n
          }
          if (92 !== n || 34 !== r.charCodeAt(o + 1) || 34 !== r.charCodeAt(o + 2) || 34 !== r.charCodeAt(o + 3))
            if (10 !== n && 13 !== n)
              if (w(n)) ++o;
              else {
                if (!_(r, o)) throw d(e.source, o, `Invalid character within String: ${k(e,o)}.`);
                o += 2
              }
          else s += r.slice(a, o), u.push(s), 13 === n && 10 === r.charCodeAt(o + 1) ? o += 2 : ++o, s = "", a = o, i = o;
          else s += r.slice(a, o), a = o + 1, o += 4
        }
        throw d(e.source, o, "Unterminated string.")
      }

      function V(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1;
        for (; i < n;) {
          const e = r.charCodeAt(i);
          if (!(0, b.xr)(e)) break;
          ++i
        }
        return O(e, v.NAME, t, i, r.slice(t, i))
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
      class z {
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
            this._lexer = new g(t)
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
          if (e && t.kind === v.BRACE_L) throw d(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
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
            if (e) throw d(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
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
                  throw d(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
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
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw d(this._lexer.source, this._lexer.token.start, `${U(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
          if (Object.prototype.hasOwnProperty.call(h, t.value)) return t;
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
          throw d(this._lexer.source, t.start, `Expected ${B(e)}, found ${U(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== v.NAME || t.value !== e) throw d(this._lexer.source, t.start, `Expected "${e}", found ${U(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === v.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return d(this._lexer.source, t.start, `Unexpected ${U(t)}.`)
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
          if (t.kind !== v.EOF && (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)) throw d(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function U(e) {
        const t = e.value;
        return B(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function B(e) {
        return function(e) {
          return e === v.BANG || e === v.DOLLAR || e === v.AMP || e === v.PAREN_L || e === v.PAREN_R || e === v.DOT || e === v.SPREAD || e === v.COLON || e === v.EQUALS || e === v.AT || e === v.BRACKET_L || e === v.BRACKET_R || e === v.BRACE_L || e === v.PIPE || e === v.BRACE_R
        }(e) ? `"${e}"` : e
      }
      var W = new Map,
        Y = new Map,
        G = !0,
        K = !1;

      function H(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function X(e) {
        var t = H(e);
        if (!W.has(t)) {
          var r = function(e, t) {
            const r = new z(e, t),
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
          W.set(t, function(e) {
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
                  o = Y.get(n);
                o && !o.has(i) ? G && console.warn("Warning: fragment with name " + n + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || Y.set(n, o = new Set), o.add(i), t.has(i) || (t.add(i), r.push(e))
              } else r.push(e);
              var a
            }), (0, n.Cl)((0, n.Cl)({}, e), {
              definitions: r
            })
          }(r)))
        }
        return W.get(t)
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
        W.clear(), Y.clear()
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
        u: () => ur
      });
      var i, o, a, s, u, c, l, f, d, h, p, v, y, m = function() {
          return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        },
        b = 1,
        g = [],
        w = [],
        _ = [],
        E = Date.now,
        T = function(e, t) {
          return t
        },
        k = function(e, t) {
          return ~_.indexOf(e) && _[_.indexOf(e) + 1][t]
        },
        O = function(e) {
          return !!~h.indexOf(e)
        },
        x = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !1 !== n,
            capture: !!i
          })
        },
        C = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        S = "scrollLeft",
        D = "scrollTop",
        A = function() {
          return p && p.isPressed || w.cache++
        },
        N = function(e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              b && (a.history.scrollRestoration = "manual");
              var i = p && p.isPressed;
              n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0), e(n), r.cacheID = w.cache, i && T("ss", n)
            } else(t || w.cache !== r.cacheID || T("ref")) && (r.cacheID = w.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        I = {
          s: S,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: N(function(e) {
            return arguments.length ? a.scrollTo(e, R.sc()) : a.pageXOffset || s[S] || u[S] || c[S] || 0
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
          op: I,
          sc: N(function(e) {
            return arguments.length ? a.scrollTo(I.sc(), e) : a.pageYOffset || s[D] || u[D] || c[D] || 0
          })
        },
        P = function(e, t) {
          return (t && t._ctx && t._ctx.selector || i.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        M = function(e, t) {
          var r = t.s,
            n = t.sc;
          O(e) && (e = s.scrollingElement || u);
          var o = w.indexOf(e),
            a = n === R.sc ? 1 : 2;
          !~o && (o = w.push(e) - 1), w[o + a] || x(e, "scroll", A);
          var c = w[o + a],
            l = c || (w[o + a] = N(k(e, r), !0) || (O(e) ? n : N(function(t) {
              return arguments.length ? e[r] = t : e[r]
            })));
          return l.target = e, c || (l.smooth = "smooth" === i.getProperty(e, "scrollBehavior")), l
        },
        F = function(e, t, r) {
          var n = e,
            i = e,
            o = E(),
            a = o,
            s = t || 50,
            u = Math.max(500, 3 * s),
            c = function(e, t) {
              var u = E();
              t || u - o > s ? (i = n, n = e, a = o, o = u) : r ? n += e : n = i + (e - i) / (u - a) * (o - a)
            };
          return {
            update: c,
            reset: function() {
              i = n = r ? 0 : n, a = o = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = i,
                l = E();
              return (e || 0 === e) && e !== n && c(e), o === a || l - a > u ? 0 : (n + (r ? s : -s)) / ((r ? l : o) - t) * 1e3
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
          (d = i.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, w), n.push.apply(n, _), w = r, _ = n, T = function(e, r) {
            return t[e](r)
          })
        },
        q = function(e) {
          return i = e || m(), !o && i && "undefined" != typeof document && document.body && (a = window, s = document, u = s.documentElement, c = s.body, h = [a, s, u, c], i.utils.clamp, y = i.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", l = Q.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, v = Q.eventTypes = ("ontouchstart" in u ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in u ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return b = 0
          }, 500), j(), o = 1), o
        };
      I.op = R, w.cache = 0;
      var Q = function() {
        function e(e) {
          this.init(e)
        }
        var t, r;
        return e.prototype.init = function(e) {
          o || q(i) || console.warn("Please gsap.registerPlugin(Observer)"), d || j();
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            h = e.target,
            m = e.lineHeight,
            b = e.debounce,
            w = e.preventDefault,
            _ = e.onStop,
            T = e.onStopDelay,
            k = e.ignore,
            S = e.wheelSpeed,
            D = e.event,
            N = e.onDragStart,
            Q = e.onDragEnd,
            z = e.onDrag,
            U = e.onPress,
            B = e.onRelease,
            W = e.onRight,
            Y = e.onLeft,
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
            ue = e.onEnable,
            ce = e.onDisable,
            le = e.onClick,
            fe = e.scrollSpeed,
            de = e.capture,
            he = e.allowClicks,
            pe = e.lockAxis,
            ve = e.onLockAxis;
          this.target = h = P(h) || u, this.vars = e, k && (k = i.utils.toArray(k)), t = t || 1e-9, r = r || 0, S = S || 1, fe = fe || 1, n = n || "wheel,touch,pointer", b = !1 !== b, m || (m = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
          var ye, me, be, ge, we, _e, Ee, Te = this,
            ke = 0,
            Oe = 0,
            xe = e.passive || !w,
            Ce = M(h, I),
            Se = M(h, R),
            De = Ce(),
            Ae = Se(),
            Ne = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === v[0],
            Ie = O(h),
            Re = h.ownerDocument || s,
            Pe = [0, 0, 0],
            Me = [0, 0, 0],
            Fe = 0,
            Ve = function() {
              return Fe = E()
            },
            Le = function(e, t) {
              return (Te.event = e) && k && ~k.indexOf(e.target) || t && Ne && "touch" !== e.pointerType || ne && ne(e, t)
            },
            je = function() {
              var e = Te.deltaX = L(Pe),
                r = Te.deltaY = L(Me),
                n = Math.abs(e) >= t,
                i = Math.abs(r) >= t;
              $ && (n || i) && $(Te, e, r, Pe, Me), n && (W && Te.deltaX > 0 && W(Te), Y && Te.deltaX < 0 && Y(Te), H && H(Te), J && Te.deltaX < 0 != ke < 0 && J(Te), ke = Te.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), i && (K && Te.deltaY > 0 && K(Te), G && Te.deltaY < 0 && G(Te), X && X(Te), Z && Te.deltaY < 0 != Oe < 0 && Z(Te), Oe = Te.deltaY, Me[0] = Me[1] = Me[2] = 0), (ge || be) && (re && re(Te), be && (z(Te), be = !1), ge = !1), _e && !(_e = !1) && ve && ve(Te), we && (se(Te), we = !1), ye = 0
            },
            qe = function(e, t, r) {
              Pe[r] += e, Me[r] += t, Te._vx.update(e), Te._vy.update(t), b ? ye || (ye = requestAnimationFrame(je)) : je()
            },
            Qe = function(e, t) {
              pe && !Ee && (Te.axis = Ee = Math.abs(e) > Math.abs(t) ? "x" : "y", _e = !0), "y" !== Ee && (Pe[2] += e, Te._vx.update(e, !0)), "x" !== Ee && (Me[2] += t, Te._vy.update(t, !0)), b ? ye || (ye = requestAnimationFrame(je)) : je()
            },
            ze = function(e) {
              if (!Le(e, 1)) {
                var t = (e = V(e, w)).clientX,
                  n = e.clientY,
                  i = t - Te.x,
                  o = n - Te.y,
                  a = Te.isDragging;
                Te.x = t, Te.y = n, (a || Math.abs(Te.startX - t) >= r || Math.abs(Te.startY - n) >= r) && (z && (be = !0), a || (Te.isDragging = !0), Qe(i, o), a || N && N(Te))
              }
            },
            Ue = Te.onPress = function(e) {
              Le(e, 1) || e && e.button || (Te.axis = Ee = null, me.pause(), Te.isPressed = !0, e = V(e), ke = Oe = 0, Te.startX = Te.x = e.clientX, Te.startY = Te.y = e.clientY, Te._vx.reset(), Te._vy.reset(), x(ie ? h : Re, v[1], ze, xe, !0), Te.deltaX = Te.deltaY = 0, U && U(Te))
            },
            Be = Te.onRelease = function(e) {
              if (!Le(e, 1)) {
                C(ie ? h : Re, v[1], ze, !0);
                var t = !isNaN(Te.y - Te.startY),
                  r = Te.isDragging,
                  n = r && (Math.abs(Te.x - Te.startX) > 3 || Math.abs(Te.y - Te.startY) > 3),
                  o = V(e);
                !n && t && (Te._vx.reset(), Te._vy.reset(), w && he && i.delayedCall(.08, function() {
                  if (E() - Fe > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Re.createEvent) {
                    var t = Re.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), Te.isDragging = Te.isGesturing = Te.isPressed = !1, _ && r && !ie && me.restart(!0), Q && r && Q(Te), B && B(Te, n)
              }
            },
            We = function(e) {
              return e.touches && e.touches.length > 1 && (Te.isGesturing = !0) && oe(e, Te.isDragging)
            },
            Ye = function() {
              return (Te.isGesturing = !1) || ae(Te)
            },
            Ge = function(e) {
              if (!Le(e)) {
                var t = Ce(),
                  r = Se();
                qe((t - De) * fe, (r - Ae) * fe, 1), De = t, Ae = r, _ && me.restart(!0)
              }
            },
            Ke = function(e) {
              if (!Le(e)) {
                e = V(e, w), se && (we = !0);
                var t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? a.innerHeight : 1) * S;
                qe(e.deltaX * t, e.deltaY * t, 0), _ && !ie && me.restart(!0)
              }
            },
            He = function(e) {
              if (!Le(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - Te.x,
                  i = r - Te.y;
                Te.x = t, Te.y = r, ge = !0, _ && me.restart(!0), (n || i) && Qe(n, i)
              }
            },
            Xe = function(e) {
              Te.event = e, ee(Te)
            },
            $e = function(e) {
              Te.event = e, te(Te)
            },
            Je = function(e) {
              return Le(e) || V(e, w) && le(Te)
            };
          me = Te._dc = i.delayedCall(T || .25, function() {
            Te._vx.reset(), Te._vy.reset(), me.pause(), _ && _(Te)
          }).pause(), Te.deltaX = Te.deltaY = 0, Te._vx = F(0, 50, !0), Te._vy = F(0, 50, !0), Te.scrollX = Ce, Te.scrollY = Se, Te.isDragging = Te.isGesturing = Te.isPressed = !1, y(this), Te.enable = function(e) {
            return Te.isEnabled || (x(Ie ? Re : h, "scroll", A), n.indexOf("scroll") >= 0 && x(Ie ? Re : h, "scroll", Ge, xe, de), n.indexOf("wheel") >= 0 && x(h, "wheel", Ke, xe, de), (n.indexOf("touch") >= 0 && l || n.indexOf("pointer") >= 0) && (x(h, v[0], Ue, xe, de), x(Re, v[2], Be), x(Re, v[3], Be), he && x(h, "click", Ve, !0, !0), le && x(h, "click", Je), oe && x(Re, "gesturestart", We), ae && x(Re, "gestureend", Ye), ee && x(h, f + "enter", Xe), te && x(h, f + "leave", $e), re && x(h, f + "move", He)), Te.isEnabled = !0, e && e.type && Ue(e), ue && ue(Te)), Te
          }, Te.disable = function() {
            Te.isEnabled && (g.filter(function(e) {
              return e !== Te && O(e.target)
            }).length || C(Ie ? Re : h, "scroll", A), Te.isPressed && (Te._vx.reset(), Te._vy.reset(), C(ie ? h : Re, v[1], ze, !0)), C(Ie ? Re : h, "scroll", Ge, de), C(h, "wheel", Ke, de), C(h, v[0], Ue, de), C(Re, v[2], Be), C(Re, v[3], Be), C(h, "click", Ve, !0), C(h, "click", Je), C(Re, "gesturestart", We), C(Re, "gestureend", Ye), C(h, f + "enter", Xe), C(h, f + "leave", $e), C(h, f + "move", He), Te.isEnabled = Te.isPressed = Te.isDragging = !1, ce && ce(Te))
          }, Te.kill = Te.revert = function() {
            Te.disable();
            var e = g.indexOf(Te);
            e >= 0 && g.splice(e, 1), p === Te && (p = 0)
          }, g.push(Te), ie && O(h) && (p = Te), Te.enable(D)
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
        return g.slice()
      }, Q.getById = function(e) {
        return g.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, m() && i.registerPlugin(Q);
      var z, U, B, W, Y, G, K, H, X, $, J, Z, ee, te, re, ne, ie, oe, ae, se, ue, ce, le, fe, de, he, pe, ve, ye, me, be, ge, we, _e, Ee, Te, ke, Oe, xe = 1,
        Ce = Date.now,
        Se = Ce(),
        De = 0,
        Ae = 0,
        Ne = function(e, t, r) {
          var n = We(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Ie = function(e, t) {
          return !t || We(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Re = function e() {
          return Ae && requestAnimationFrame(e)
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
          return z || Le() && (z = window.gsap) && z.registerPlugin && z
        },
        qe = function(e) {
          return !!~K.indexOf(e)
        },
        Qe = function(e) {
          return ("Height" === e ? be : B["inner" + e]) || Y["client" + e] || G["client" + e]
        },
        ze = function(e) {
          return k(e, "getBoundingClientRect") || (qe(e) ? function() {
            return tr.width = B.innerWidth, tr.height = be, tr
          } : function() {
            return pt(e)
          })
        },
        Ue = function(e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(0, (r = "scroll" + n) && (o = k(e, r)) ? o() - ze(e)()[i] : qe(e) ? (Y[r] || G[r]) - Qe(n) : e[r] - e["offset" + n])
        },
        Be = function(e, t) {
          for (var r = 0; r < ae.length; r += 3)(!t || ~t.indexOf(ae[r + 1])) && e(ae[r], ae[r + 1], ae[r + 2])
        },
        We = function(e) {
          return "string" == typeof e
        },
        Ye = function(e) {
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
        ut = "margin",
        ct = "Width",
        lt = "Height",
        ft = "px",
        dt = function(e) {
          return B.getComputedStyle(e)
        },
        ht = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        pt = function(e, t) {
          var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== dt(e)[re] && z.to(e, {
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
          var t = z.utils.snap(e),
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
        bt = function(e, t, r, n) {
          return r.split(",").forEach(function(r) {
            return e(t, r, n)
          })
        },
        gt = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
          })
        },
        wt = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        _t = function(e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        Et = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Tt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        kt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Ot = function(e, t) {
          if (We(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in kt ? kt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        xt = function(e, t, r, n, i, o, a, s) {
          var u = i.startColor,
            c = i.endColor,
            l = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            h = W.createElement("div"),
            p = qe(r) || "fixed" === k(r, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            y = p ? G : r,
            m = -1 !== e.indexOf("start"),
            b = m ? u : c,
            g = "border-color:" + b + ";font-size:" + l + ";color:" + b + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return g += "position:" + ((v || s) && p ? "fixed;" : "absolute;"), (v || s || !p) && (g += (n === R ? Ze : et) + ":" + (o + parseFloat(f)) + "px;"), a && (g += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), h._isStart = m, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = g, h.innerText = t || 0 === t ? e + "-" + t : e, y.children[0] ? y.insertBefore(h, y.children[0]) : y.appendChild(h), h._offset = h["offset" + n.op.d2], Ct(h, 0, n, m), h
        },
        Ct = function(e, t, r, n) {
          var i = {
              display: "block"
            },
            o = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + ct] = 1, i["border" + a + ct] = 0, i[r.p] = t + "px", z.set(e, i)
        },
        St = [],
        Dt = {},
        At = function() {
          return Ce() - De > 34 && (Ee || (Ee = requestAnimationFrame(Kt)))
        },
        Nt = function() {
          (!le || !le.isPressed || le.startX > G.clientWidth) && (w.cache++, le ? Ee || (Ee = requestAnimationFrame(Kt)) : Kt(), De || Vt("scrollStart"), De = Ce())
        },
        It = function() {
          he = B.innerWidth, de = B.innerHeight
        },
        Rt = function() {
          w.cache++, !ee && !ce && !W.fullscreenElement && !W.webkitFullscreenElement && (!fe || he !== B.innerWidth || Math.abs(B.innerHeight - de) > .25 * B.innerHeight) && H.restart(!0)
        },
        Pt = {},
        Mt = [],
        Ft = function e() {
          return wt(ur, "scrollEnd", e) || Wt(!0)
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
          ge = !0, t && jt(t), t || Vt("revert")
        },
        Qt = function(e, t) {
          w.cache++, (t || !Te) && w.forEach(function(e) {
            return Ye(e) && e.cacheID++ && (e.rec = 0)
          }), We(e) && (B.history.scrollRestoration = ye = e)
        },
        zt = 0,
        Ut = function() {
          G.appendChild(me), be = !le && me.offsetHeight || B.innerHeight, G.removeChild(me)
        },
        Bt = function(e) {
          return X(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Wt = function(e, t) {
          if (!De || e || ge) {
            Ut(), Te = ur.isRefreshing = !0, w.forEach(function(e) {
              return Ye(e) && ++e.cacheID && (e.rec = e())
            });
            var r = Vt("refreshInit");
            se && ur.sort(), t || qt(), w.forEach(function(e) {
              Ye(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), St.slice(0).forEach(function(e) {
              return e.refresh()
            }), ge = !1, St.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
              }
            }), we = 1, Bt(!0), St.forEach(function(e) {
              var t = Ue(e.scroller, e._dir),
                r = "max" === e.vars.end || e._endClamp && e.end > t,
                n = e._startClamp && e.start >= t;
              (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
            }), Bt(!1), we = 0, r.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), w.forEach(function(e) {
              Ye(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Qt(ye, 1), H.pause(), zt++, Te = 2, Kt(2), St.forEach(function(e) {
              return Ye(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), Te = ur.isRefreshing = !1, Vt("refresh")
          } else gt(ur, "scrollEnd", Ft)
        },
        Yt = 0,
        Gt = 1,
        Kt = function(e) {
          if (2 === e || !Te && !ge) {
            ur.isUpdating = !0, Oe && Oe.update(0);
            var t = St.length,
              r = Ce(),
              n = r - Se >= 50,
              i = t && St[0].scroll();
            if (Gt = Yt > i ? -1 : 1, Te || (Yt = i), n && (De && !te && r - De > 200 && (De = 0, Vt("scrollEnd")), J = Se, Se = r), Gt < 0) {
              for (ne = t; ne-- > 0;) St[ne] && St[ne].update(0, n);
              Gt = 1
            } else
              for (ne = 0; ne < t; ne++) St[ne] && St[ne].update(0, n);
            ur.isUpdating = !1
          }
          Ee = 0
        },
        Ht = [Je, "top", et, Ze, ut + at, ut + nt, ut + ot, ut + it, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Xt = Ht.concat([tt, rt, "boxSizing", "max" + ct, "max" + lt, "position", ut, st, st + ot, st + nt, st + at, st + it]),
        $t = function(e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, o = Ht.length, a = t.style, s = e.style; o--;) a[i = Ht[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[et] = s[Ze] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = vt(e, I) + ft, a[rt] = vt(e, R) + ft, a[st] = s[ut] = s.top = s[Je] = "0", Zt(n), s[tt] = s["max" + ct] = r[tt], s[rt] = s["max" + lt] = r[rt], s[st] = r[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Jt = /([A-Z])/g,
        Zt = function(e) {
          if (e) {
            var t, r, n = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Jt, "-$1").toLowerCase())
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
        rr = function(e, t, r, n, i, o, a, s, u, c, l, f, d, h) {
          Ye(e) && (e = e(s)), We(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ot("0" + e.substr(3), r) : 0));
          var p, v, y, m = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), Ge(e)) d && (e = z.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && Ct(a, r, n, !0);
          else {
            Ye(t) && (t = t(s));
            var b, g, w, _, E = (e || "0").split(" ");
            y = P(t, s) || G, (b = pt(y) || {}) && (b.left || b.top) || "none" !== dt(y).display || (_ = y.style.display, y.style.display = "block", b = pt(y), _ ? y.style.display = _ : y.style.removeProperty("display")), g = Ot(E[0], b[n.d]), w = Ot(E[1] || "0", r), e = b[n.p] - u[n.p] - c + g + i - w, a && Ct(a, w, n, r - w < 20 || a._isStart && w > 20), r -= r - w
          }
          if (h && (s[h] = e || -.001, e < 0 && (e = 0)), o) {
            var T = e + r,
              k = o._isStart;
            p = "scroll" + n.d2, Ct(o, T, n, k && T > 20 || !k && (l ? Math.max(G[p], Y[p]) : o.parentNode[p]) <= T + 1), l && (u = pt(a), l && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + ft))
          }
          return d && y && (p = pt(y), d.seek(f), v = pt(y), d._caScrollDist = p[n.p] - v[n.p], e = e / d._caScrollDist * f), d && d.seek(m), d ? e : Math.round(e)
        },
        nr = /(webkit|moz|length|cssText|inset)/i,
        ir = function(e, t, r, n) {
          if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === G) {
              for (i in e._stOrig = a.cssText, o = dt(e)) + i || nr.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
              a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            z.core.getCache(e).uncache = 1, t.appendChild(e)
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
          n[t.p] = "+=" + r, z.set(e, n)
        },
        sr = function(e, t) {
          var r = M(e, t),
            n = "_scroll" + t.p2,
            i = function t(i, o, a, s, u) {
              var c = t.tween,
                l = o.onComplete,
                f = {};
              a = a || r();
              var d = or(r, a, function() {
                c.kill(), t.tween = 0
              });
              return u = s && u || 0, s = s || i - a, c && c.kill(), o[n] = i, o.inherit = !1, o.modifiers = f, f[n] = function() {
                return d(a + s * c.ratio + u * c.ratio * c.ratio)
              }, o.onUpdate = function() {
                w.cache++, t.tween && Kt()
              }, o.onComplete = function() {
                t.tween = 0, l && l.call(c)
              }, c = t.tween = z.to(e, o)
            };
          return e[n] = r, r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
          }, gt(e, "wheel", r.wheelHandler), ur.isTouch && gt(e, "touchmove", r.wheelHandler), i
        },
        ur = function() {
          function e(t, r) {
            U || e.register(z) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ve(this), this.init(t, r)
          }
          return e.prototype.init = function(t, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Ae) {
              var n, i, o, a, s, u, c, l, f, d, h, p, v, y, m, b, g, E, T, O, x, C, S, D, A, N, F, V, L, j, q, Q, U, K, H, Z, re, ie, oe, ae, ce, le, fe = t = ht(We(t) || Ge(t) || t.nodeType ? {
                  trigger: t
                } : t, Tt),
                de = fe.onUpdate,
                he = fe.toggleClass,
                pe = fe.id,
                ve = fe.onToggle,
                ye = fe.onRefresh,
                me = fe.scrub,
                be = fe.trigger,
                ge = fe.pin,
                Ee = fe.pinSpacing,
                Se = fe.invalidateOnRefresh,
                Re = fe.anticipatePin,
                Pe = fe.onScrubComplete,
                Me = fe.onSnapComplete,
                Le = fe.once,
                je = fe.snap,
                Be = fe.pinReparent,
                Je = fe.pinSpacer,
                Ze = fe.containerAnimation,
                et = fe.fastScrollEnd,
                bt = fe.preventOverlaps,
                _t = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? I : R,
                kt = !me && 0 !== me,
                Ct = P(t.scroller || B),
                At = z.core.getCache(Ct),
                It = qe(Ct),
                Pt = "fixed" === ("pinType" in t ? t.pinType : k(Ct, "pinType") || It && "fixed"),
                Mt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Vt = kt && t.toggleActions.split(" "),
                Lt = "markers" in t ? t.markers : Tt.markers,
                jt = It ? 0 : parseFloat(dt(Ct)["border" + _t.p2 + ct]) || 0,
                qt = this,
                Qt = t.onRefreshInit && function() {
                  return t.onRefreshInit(qt)
                },
                Ut = function(e, t, r) {
                  var n = r.d,
                    i = r.d2,
                    o = r.a;
                  return (o = k(e, "getBoundingClientRect")) ? function() {
                    return o()[n]
                  } : function() {
                    return (t ? Qe(i) : e["client" + i]) || 0
                  }
                }(Ct, It, _t),
                Bt = function(e, t) {
                  return !t || ~_.indexOf(e) ? ze(e) : function() {
                    return tr
                  }
                }(Ct, It),
                Yt = 0,
                Kt = 0,
                Ht = 0,
                Xt = M(Ct, _t);
              if (qt._startClamp = qt._endClamp = !1, qt._dir = _t, Re *= 45, qt.scroller = Ct, qt.scroll = Ze ? Ze.time.bind(Ze) : Xt, a = Xt(), qt.vars = t, r = r || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (Oe = qt)), At.tweenScroll = At.tweenScroll || {
                  top: sr(Ct, R),
                  left: sr(Ct, I)
                }, qt.tweenTo = n = At.tweenScroll[_t.p], qt.scrubDuration = function(e) {
                  (U = Ge(e) && e) ? Q ? Q.duration(e) : Q = z.to(r, {
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
                }), "scrollBehavior" in G.style && z.set(It ? [G, Y] : Ct, {
                  scrollBehavior: "auto"
                }), w.forEach(function(e) {
                  return Ye(e) && e.target === (It ? W.scrollingElement || Y : Ct) && (e.smooth = !1)
                }), o = Ye(je.snapTo) ? je.snapTo : "labels" === je.snapTo ? function(e) {
                  return function(t) {
                    return z.utils.snap(yt(e), t)
                  }
                }(r) : "labelsDirectional" === je.snapTo ? (ae = r, function(e, t) {
                  return mt(yt(ae))(e, t.direction)
                }) : !1 !== je.directional ? function(e, t) {
                  return mt(je.snapTo)(e, Ce() - Kt < 500 ? 0 : t.direction)
                } : z.utils.snap(je.snapTo), K = je.duration || {
                  min: .1,
                  max: 2
                }, K = Ke(K) ? $(K.min, K.max) : $(K, K), H = z.delayedCall(je.delay || U / 2 || .1, function() {
                  var e = Xt(),
                    t = Ce() - Kt < 500,
                    i = n.tween;
                  if (!(t || Math.abs(qt.getVelocity()) < 10) || i || te || Yt === e) qt.isActive && Yt !== e && H.restart(!0);
                  else {
                    var a, s, l = (e - u) / y,
                      f = r && !kt ? r.totalProgress() : l,
                      d = t ? 0 : (f - q) / (Ce() - J) * 1e3 || 0,
                      h = z.utils.clamp(-l, 1 - l, $e(d / 2) * d / .185),
                      p = l + (!1 === je.inertia ? 0 : h),
                      v = je,
                      m = v.onStart,
                      b = v.onInterrupt,
                      g = v.onComplete;
                    if (a = o(p, qt), Ge(a) || (a = p), s = Math.round(u + a * y), e <= c && e >= u && s !== e) {
                      if (i && !i._initted && i.data <= $e(s - e)) return;
                      !1 === je.inertia && (h = a - l), n(s, {
                        duration: K($e(.185 * Math.max($e(p - f), $e(a - f)) / d / .05 || 0)),
                        ease: je.ease || "power3",
                        data: $e(s - e),
                        onInterrupt: function() {
                          return H.restart(!0) && b && b(qt)
                        },
                        onComplete: function() {
                          qt.update(), Yt = Xt(), r && (Q ? Q.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), j = q = r && !kt ? r.totalProgress() : qt.progress, Me && Me(qt), g && g(qt)
                        }
                      }, e, h * y, s - e - h * y), m && m(qt, n.tween)
                    }
                  }
                }).pause()), pe && (Dt[pe] = qt), (oe = (be = qt.trigger = P(be || !0 !== ge && ge)) && be._gsap && be._gsap.stRevert) && (oe = oe(qt)), ge = !0 === ge ? be : P(ge), We(he) && (he = {
                  targets: be,
                  className: he
                }), ge && (!1 === Ee || Ee === ut || (Ee = !(!Ee && ge.parentNode && ge.parentNode.style && "flex" === dt(ge.parentNode).display) && st), qt.pin = ge, (i = z.core.getCache(ge)).spacer ? m = i.pinState : (Je && ((Je = P(Je)) && !Je.nodeType && (Je = Je.current || Je.nativeElement), i.spacerIsNative = !!Je, Je && (i.spacerState = er(Je))), i.spacer = E = Je || W.createElement("div"), E.classList.add("pin-spacer"), pe && E.classList.add("pin-spacer-" + pe), i.pinState = m = er(ge)), !1 !== t.force3D && z.set(ge, {
                  force3D: !0
                }), qt.spacer = E = i.spacer, L = dt(ge), D = L[Ee + _t.os2], O = z.getProperty(ge), x = z.quickSetter(ge, _t.a, ft), $t(ge, E, L), g = er(ge)), Lt) {
                p = Ke(Lt) ? ht(Lt, Et) : Et, d = xt("scroller-start", pe, Ct, _t, p, 0), h = xt("scroller-end", pe, Ct, _t, p, 0, d), T = d["offset" + _t.op.d2];
                var Jt = P(k(Ct, "content") || Ct);
                l = this.markerStart = xt("start", pe, Jt, _t, p, T, 0, Ze), f = this.markerEnd = xt("end", pe, Jt, _t, p, T, 0, Ze), Ze && (ie = z.quickSetter([l, f], _t.a, ft)), Pt || _.length && !0 === k(Ct, "fixedMarkers") || (le = dt(ce = It ? G : Ct).position, ce.style.position = "absolute" === le || "fixed" === le ? le : "relative", z.set([d, h], {
                  force3D: !0
                }), N = z.quickSetter(d, _t.a, ft), V = z.quickSetter(h, _t.a, ft))
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
                  n !== qt.isReverted && (n && (Z = Math.max(Xt(), qt.scroll.rec || 0), Ht = qt.progress, re = r && r.progress()), l && [l, f, d, h].forEach(function(e) {
                    return e.style.display = n ? "none" : "block"
                  }), n && (ee = qt, qt.update(n)), !ge || Be && qt.isActive || (n ? function(e, t, r) {
                    Zt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Zt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                      var i = t.parentNode;
                      i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(ge, E, m) : $t(ge, E, dt(ge), A)), n || qt.update(n), ee = i, qt.isReverted = n)
                }, qt.refresh = function(i, o, p, w) {
                  if (!ee && qt.enabled || o)
                    if (ge && i && De) gt(e, "scrollEnd", Ft);
                    else {
                      !Te && Qt && Qt(qt), ee = qt, n.tween && !p && (n.tween.kill(), n.tween = 0), Q && Q.pause(), Se && r && r.revert({
                        kill: !1
                      }).invalidate(), qt.isReverted || qt.revert(!0, !0), qt._subPinOffset = !1;
                      var _, T, k, x, D, N, V, L, j, q, U, B, K, X = Ut(),
                        $ = Bt(),
                        J = Ze ? Ze.duration() : Ue(Ct, _t),
                        te = y <= .01,
                        ne = 0,
                        ie = w || 0,
                        oe = Ke(p) ? p.end : t.end,
                        ae = t.endTrigger || be,
                        se = Ke(p) ? p.start : t.start || (0 !== t.start && be ? ge ? "0 0" : "0 100%" : 0),
                        ce = qt.pinnedContainer = t.pinnedContainer && P(t.pinnedContainer, qt),
                        le = be && Math.max(0, St.indexOf(qt)) || 0,
                        fe = le;
                      for (Lt && Ke(p) && (B = z.getProperty(d, _t.p), K = z.getProperty(h, _t.p)); fe--;)(N = St[fe]).end || N.refresh(0, 1) || (ee = qt), !(V = N.pin) || V !== be && V !== ge && V !== ce || N.isReverted || (q || (q = []), q.unshift(N), N.revert(!0, !0)), N !== St[fe] && (le--, fe--);
                      for (Ye(se) && (se = se(qt)), se = Ne(se, "start", qt), u = rr(se, be, X, _t, Xt(), l, d, qt, $, jt, Pt, J, Ze, qt._startClamp && "_startClamp") || (ge ? -.001 : 0), Ye(oe) && (oe = oe(qt)), We(oe) && !oe.indexOf("+=") && (~oe.indexOf(" ") ? oe = (We(se) ? se.split(" ")[0] : "") + oe : (ne = Ot(oe.substr(2), X), oe = We(se) ? se : (Ze ? z.utils.mapRange(0, Ze.duration(), Ze.scrollTrigger.start, Ze.scrollTrigger.end, u) : u) + ne, ae = be)), oe = Ne(oe, "end", qt), c = Math.max(u, rr(oe || (ae ? "100% 0" : J), ae, X, _t, Xt() + ne, f, h, qt, $, jt, Pt, J, Ze, qt._endClamp && "_endClamp")) || -.001, ne = 0, fe = le; fe--;)(V = (N = St[fe]).pin) && N.start - N._pinPush <= u && !Ze && N.end > 0 && (_ = N.end - (qt._startClamp ? Math.max(0, N.start) : N.start), (V === be && N.start - N._pinPush < u || V === ce) && isNaN(se) && (ne += _ * (1 - N.progress)), V === ge && (ie += _));
                      if (u += ne, c += ne, qt._startClamp && (qt._startClamp += ne), qt._endClamp && !Te && (qt._endClamp = c || -.001, c = Math.min(c, Ue(Ct, _t))), y = c - u || (u -= .01) && .001, te && (Ht = z.utils.clamp(0, 1, z.utils.normalize(u, c, Z))), qt._pinPush = ie, l && ne && ((_ = {})[_t.a] = "+=" + ne, ce && (_[_t.p] = "-=" + Xt()), z.set([l, f], _)), !ge || we && qt.end >= Ue(Ct, _t)) {
                        if (be && Xt() && !Ze)
                          for (T = be.parentNode; T && T !== G;) T._pinOffset && (u -= T._pinOffset, c -= T._pinOffset), T = T.parentNode
                      } else _ = dt(ge), x = _t === R, k = Xt(), C = parseFloat(O(_t.a)) + ie, !J && c > 1 && (U = {
                        style: U = (It ? W.scrollingElement || Y : Ct).style,
                        value: U["overflow" + _t.a.toUpperCase()]
                      }, It && "scroll" !== dt(G)["overflow" + _t.a.toUpperCase()] && (U.style["overflow" + _t.a.toUpperCase()] = "scroll")), $t(ge, E, _), g = er(ge), T = pt(ge, !0), L = Pt && M(Ct, x ? I : R)(), Ee ? ((A = [Ee + _t.os2, y + ie + ft]).t = E, (fe = Ee === st ? vt(ge, _t) + y + ie : 0) && (A.push(_t.d, fe + ft), "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft)), Zt(A), ce && St.forEach(function(e) {
                        e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Pt && Xt(Z)) : (fe = vt(ge, _t)) && "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft), Pt && ((D = {
                        top: T.top + (x ? k - u : L) + ft,
                        left: T.left + (x ? L : k - u) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = D["max" + ct] = Math.ceil(T.width) + ft, D[rt] = D["max" + lt] = Math.ceil(T.height) + ft, D[ut] = D[ut + ot] = D[ut + nt] = D[ut + at] = D[ut + it] = "0", D[st] = _[st], D[st + ot] = _[st + ot], D[st + nt] = _[st + nt], D[st + at] = _[st + at], D[st + it] = _[st + it], b = function(e, t, r) {
                        for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                        return i.t = e.t, i
                      }(m, D, Be), Te && Xt(0)), r ? (j = r._initted, ue(1), r.render(r.duration(), !0, !0), S = O(_t.a) - C + y + ie, F = Math.abs(y - S) > 1, Pt && F && b.splice(b.length - 2, 2), r.render(0, !0, !0), j || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ue(0)) : S = y, U && (U.value ? U.style["overflow" + _t.a.toUpperCase()] = U.value : U.style.removeProperty("overflow-" + _t.a));
                      q && q.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), qt.start = u, qt.end = c, a = s = Te ? Z : Xt(), Ze || Te || (a < Z && Xt(Z), qt.scroll.rec = 0), qt.revert(!1, !0), Kt = Ce(), H && (Yt = -1, H.restart(!0)), ee = 0, r && kt && (r._initted || re) && r.progress() !== re && r.progress(re || 0, !0).render(r.time(), !0, !0), (te || Ht !== qt.progress || Ze || Se) && (r && !kt && r.totalProgress(Ze && u < -.001 && !Ht ? z.utils.normalize(u, c, 0) : Ht, !0), qt.progress = te || (a - u) / y === Ht ? 0 : Ht), ge && Ee && (E._pinOffset = Math.round(qt.progress * S)), Q && Q.invalidate(), isNaN(B) || (B -= z.getProperty(d, _t.p), K -= z.getProperty(h, _t.p), ar(d, _t, B), ar(l, _t, B - (w || 0)), ar(h, _t, K), ar(f, _t, K - (w || 0))), te && !Te && qt.update(), !ye || Te || v || (v = !0, ye(qt), v = !1)
                    }
                }, qt.getVelocity = function() {
                  return (Xt() - s) / (Ce() - J) * 1e3 || 0
                }, qt.endAnimation = function() {
                  He(qt.callbackAnimation), r && (Q ? Q.progress(1) : r.paused() ? kt || He(r, qt.direction < 0, 1) : He(r, r.reversed()))
                }, qt.labelToScroll = function(e) {
                  return r && r.labels && (u || qt.refresh() || u) + r.labels[e] / r.duration() * y || 0
                }, qt.getTrailing = function(e) {
                  var t = St.indexOf(qt),
                    r = qt.direction > 0 ? St.slice(0, t).reverse() : St.slice(t + 1);
                  return (We(e) ? r.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : r).filter(function(e) {
                    return qt.direction > 0 ? e.end <= u : e.start >= c
                  })
                }, qt.update = function(e, t, i) {
                  if (!Ze || i || e) {
                    var o, l, f, h, p, v, m, w = !0 === Te ? Z : qt.scroll(),
                      _ = e ? 0 : (w - u) / y,
                      T = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
                      k = qt.progress;
                    if (t && (s = a, a = Ze ? Xt() : w, je && (q = j, j = r && !kt ? r.totalProgress() : T)), Re && ge && !ee && !xe && De && (!T && u < w + (w - s) / (Ce() - J) * Re ? T = 1e-4 : 1 === T && c > w + (w - s) / (Ce() - J) * Re && (T = .9999)), T !== k && qt.enabled) {
                      if (h = (p = (o = qt.isActive = !!T && T < 1) != (!!k && k < 1)) || !!T != !!k, qt.direction = T > k ? 1 : -1, qt.progress = T, h && !ee && (l = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3, kt && (f = !p && "none" !== Vt[l + 1] && Vt[l + 1] || Vt[l], m = r && ("complete" === f || "reset" === f || f in r))), bt && (p || m) && (m || me || !r) && (Ye(bt) ? bt(qt) : qt.getTrailing(bt).forEach(function(e) {
                          return e.endAnimation()
                        })), kt || (!Q || ee || xe ? r && r.totalProgress(T, !(!ee || !Kt && !e)) : (Q._dp._time - Q._start !== Q._time && Q.render(Q._dp._time - Q._start), Q.resetTo ? Q.resetTo("totalProgress", T, r._tTime / r._tDur) : (Q.vars.totalProgress = T, Q.invalidate().restart()))), ge)
                        if (e && Ee && (E.style[Ee + _t.os2] = D), Pt) {
                          if (h) {
                            if (v = !e && T > k && c + 1 > w && w + 1 >= Ue(Ct, _t), Be)
                              if (e || !o && !v) ir(ge, E);
                              else {
                                var O = pt(ge, !0),
                                  A = w - u;
                                ir(ge, G, O.top + (_t === R ? A : 0) + ft, O.left + (_t === R ? 0 : A) + ft)
                              } Zt(o || v ? b : g), F && T < 1 && o || x(C + (1 !== T || v ? 0 : S))
                          }
                        } else x(Ve(C + S * T));
                      je && !n.tween && !ee && !xe && H.restart(!0), he && (p || Le && T && (T < 1 || !_e)) && X(he.targets).forEach(function(e) {
                        return e.classList[o || Le ? "add" : "remove"](he.className)
                      }), de && !kt && !e && de(qt), h && !ee ? (kt && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), de && de(qt)), !p && _e || (ve && p && Xe(qt, ve), Mt[l] && Xe(qt, Mt[l]), Le && (1 === T ? qt.kill(!1, 1) : Mt[l] = 0), p || Mt[l = 1 === T ? 1 : 3] && Xe(qt, Mt[l])), et && !o && Math.abs(qt.getVelocity()) > (Ge(et) ? et : 2500) && (He(qt.callbackAnimation), Q ? Q.progress(1) : He(r, "reverse" === f ? 1 : !T, 1))) : kt && de && !ee && de(qt)
                    }
                    if (V) {
                      var I = Ze ? w / Ze.duration() * (Ze._caScrollDist || 0) : w;
                      N(I + (d._isFlipped ? 1 : 0)), V(I)
                    }
                    ie && ie(-w / Ze.duration() * (Ze._caScrollDist || 0))
                  }
                }, qt.enable = function(t, r) {
                  qt.enabled || (qt.enabled = !0, gt(Ct, "resize", Rt), It || gt(Ct, "scroll", Nt), Qt && gt(e, "refreshInit", Qt), !1 !== t && (qt.progress = Ht = 0, a = s = Yt = Xt()), !1 !== r && qt.refresh())
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
                    start: Ie(e, r && !!qt._startClamp),
                    end: Ie(t, r && !!qt._endClamp)
                  }, n), qt.update()
                }, qt.adjustPinSpacing = function(e) {
                  if (A && e) {
                    var t = A.indexOf(_t.d) + 1;
                    A[t] = parseFloat(A[t]) + e + ft, A[1] = parseFloat(A[1]) + e + ft, Zt(A)
                  }
                }, qt.disable = function(t, r) {
                  if (qt.enabled && (!1 !== t && qt.revert(!0, !0), qt.enabled = qt.isActive = !1, r || Q && Q.pause(), Z = 0, i && (i.uncache = 1), Qt && wt(e, "refreshInit", Qt), H && (H.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !It)) {
                    for (var o = St.length; o--;)
                      if (St[o].scroller === Ct && St[o] !== qt) return;
                    wt(Ct, "resize", Rt), It || wt(Ct, "scroll", Nt)
                  }
                }, qt.kill = function(e, n) {
                  qt.disable(e, n), Q && !n && Q.kill(), pe && delete Dt[pe];
                  var o = St.indexOf(qt);
                  o >= 0 && St.splice(o, 1), o === ne && Gt > 0 && ne--, o = 0, St.forEach(function(e) {
                    return e.scroller === qt.scroller && (o = 1)
                  }), o || Te || (qt.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                    kill: !1
                  }), n || r.kill()), l && [l, f, d, h].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), Oe === qt && (Oe = 0), ge && (i && (i.uncache = 1), o = 0, St.forEach(function(e) {
                    return e.pin === ge && o++
                  }), o || (i.spacer = 0)), t.onKill && t.onKill(qt)
                }, St.push(qt), qt.enable(!1, !1), oe && oe(qt), r && r.add && !y) {
                var ur = qt.update;
                qt.update = function() {
                  qt.update = ur, u || c || qt.refresh()
                }, z.delayedCall(.01, qt.update), y = .01, u = c = 0
              } else qt.refresh();
              ge && function() {
                if (ke !== zt) {
                  var e = ke = zt;
                  requestAnimationFrame(function() {
                    return e === zt && Wt(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Fe
          }, e.register = function(t) {
            return U || (z = t || je(), Le() && window.document && e.enable(), U = Ae), U
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) Tt[t] = e[t];
            return Tt
          }, e.disable = function(e, t) {
            Ae = 0, St.forEach(function(r) {
              return r[t ? "kill" : "disable"](e)
            }), wt(B, "wheel", Nt), wt(W, "scroll", Nt), clearInterval(Z), wt(W, "touchcancel", Fe), wt(G, "touchstart", Fe), bt(wt, W, "pointerdown,touchstart,mousedown", Pe), bt(wt, W, "pointerup,touchend,mouseup", Me), H.kill(), Be(wt);
            for (var r = 0; r < w.length; r += 3) _t(wt, w[r], w[r + 1]), _t(wt, w[r], w[r + 2])
          }, e.enable = function() {
            if (B = window, W = document, Y = W.documentElement, G = W.body, z && (X = z.utils.toArray, $ = z.utils.clamp, ve = z.core.context || Fe, ue = z.core.suppressOverwrites || Fe, ye = B.history.scrollRestoration || "auto", Yt = B.pageYOffset, z.core.globals("ScrollTrigger", e), G)) {
              Ae = 1, (me = document.createElement("div")).style.height = "100vh", me.style.position = "absolute", Ut(), Re(), Q.register(z), e.isTouch = Q.isTouch, pe = Q.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === Q.isTouch, gt(B, "wheel", Nt), K = [B, W, Y, G], z.matchMedia ? (e.matchMedia = function(e) {
                var t, r = z.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
              }, z.addEventListener("matchMediaInit", function() {
                return qt()
              }), z.addEventListener("matchMediaRevert", function() {
                return jt()
              }), z.addEventListener("matchMedia", function() {
                Wt(0, 1), Vt("matchMedia")
              }), z.matchMedia("(orientation: portrait)", function() {
                return It(), It
              })) : console.warn("Requires GSAP 3.11.0 or later"), It(), gt(W, "scroll", Nt);
              var t, r, n = G.style,
                i = n.borderTopStyle,
                o = z.core.Animation.prototype;
              for (o.revert || Object.defineProperty(o, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", t = pt(G), R.m = Math.round(t.top + R.sc()) || 0, I.m = Math.round(t.left + I.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Z = setInterval(At, 250), z.delayedCall(.5, function() {
                  return xe = 0
                }), gt(W, "touchcancel", Fe), gt(G, "touchstart", Fe), bt(gt, W, "pointerdown,touchstart,mousedown", Pe), bt(gt, W, "pointerup,touchend,mouseup", Me), re = z.utils.checkPrefix("transform"), Xt.push(re), U = Ce(), H = z.delayedCall(.2, Wt).pause(), ae = [W, "visibilitychange", function() {
                  var e = B.innerWidth,
                    t = B.innerHeight;
                  W.hidden ? (ie = e, oe = t) : ie === e && oe === t || Rt()
                }, W, "DOMContentLoaded", Wt, B, "load", Wt, B, "resize", Rt], Be(gt), St.forEach(function(e) {
                  return e.enable(0, 1)
                }), r = 0; r < w.length; r += 3) _t(wt, w[r], w[r + 1]), _t(wt, w[r], w[r + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (_e = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(Z) || (Z = r) && setInterval(At, r), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Be(wt) || Be(gt, t.autoRefreshEvents || "none"), ce = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var r = P(e),
              n = w.indexOf(r),
              i = qe(r);
            ~n && w.splice(n, i ? 6 : 2), t && (i ? _.unshift(B, t, G, t, Y, t) : _.unshift(r, t))
          }, e.clearMatchMedia = function(e) {
            St.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, r) {
            var n = (We(e) ? P(e) : e).getBoundingClientRect(),
              i = n[r ? tt : rt] * t || 0;
            return r ? n.right - i > 0 && n.left + i < B.innerWidth : n.bottom - i > 0 && n.top + i < B.innerHeight
          }, e.positionInViewport = function(e, t, r) {
            We(e) && (e = P(e));
            var n = e.getBoundingClientRect(),
              i = n[r ? tt : rt],
              o = null == t ? i / 2 : t in kt ? kt[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / B.innerWidth : (n.top + o) / B.innerHeight
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
      ur.version = "3.12.5", ur.saveStyles = function(e) {
        return e ? X(e).forEach(function(e) {
          if (e && e.style) {
            var t = Lt.indexOf(e);
            t >= 0 && Lt.splice(t, 5), Lt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), z.core.getCache(e), ve())
          }
        }) : Lt
      }, ur.revert = function(e, t) {
        return qt(!e, t)
      }, ur.create = function(e, t) {
        return new ur(e, t)
      }, ur.refresh = function(e) {
        return e ? Rt() : (U || ur.register()) && Wt(!0)
      }, ur.update = function(e) {
        return ++w.cache && Kt(!0 === e ? 2 : 0)
      }, ur.clearScrollMemory = Qt, ur.maxScroll = function(e, t) {
        return Ue(e, t ? I : R)
      }, ur.getScrollFunc = function(e, t) {
        return M(P(e), t ? I : R)
      }, ur.getById = function(e) {
        return Dt[e]
      }, ur.getAll = function() {
        return St.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, ur.isScrolling = function() {
        return !!De
      }, ur.snapDirectional = mt, ur.addEventListener = function(e, t) {
        var r = Pt[e] || (Pt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, ur.removeEventListener = function(e, t) {
        var r = Pt[e],
          n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
      }, ur.batch = function(e, t) {
        var r, n = [],
          i = {},
          o = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var r = [],
              n = [],
              i = z.delayedCall(o, function() {
                t(r, n), r = [], n = []
              }).pause();
            return function(e) {
              r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
          };
        for (r in t) i[r] = "on" === r.substr(0, 2) && Ye(t[r]) && "onRefreshInit" !== r ? s(0, t[r]) : t[r];
        return Ye(a) && (a = a(), gt(ur, "refresh", function() {
          return a = t.batchMax()
        })), X(e).forEach(function(e) {
          var t = {};
          for (r in i) t[r] = i[r];
          t.trigger = e, n.push(ur.create(t))
        }), n
      };
      var cr, lr = function(e, t, r, n) {
          return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
        },
        fr = function e(t, r) {
          !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Q.isTouch ? " pinch-zoom" : "") : "none", t === Y && e(G, r)
        },
        dr = {
          auto: 1,
          scroll: 1
        },
        hr = function(e) {
          var t, r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || z.core.getCache(o),
            s = Ce();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; o && o !== G && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !dr[(t = dt(o)).overflowY] && !dr[t.overflowX]);) o = o.parentNode;
            a._isScroll = o && o !== n && !qe(o) && (dr[(t = dt(o)).overflowY] || dr[t.overflowX]), a._isScrollT = s, !o.hasAttribute("role") || "dialog" !== o.getAttribute("role") || o.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        pr = function(e, t, r, n) {
          return Q.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && hr,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
              return r && gt(W, Q.eventTypes[0], yr, !1, !0)
            },
            onDisable: function() {
              return wt(W, Q.eventTypes[0], yr, !0)
            }
          })
        },
        vr = /(input|label|select|textarea)/i,
        yr = function(e) {
          var t = vr.test(e.target.tagName);
          (t || cr) && (e._gsapAllow = !0, cr = t)
        };
      ur.sort = function(e) {
        return St.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, ur.observe = function(e) {
        return new Q(e)
      }, ur.normalizeScroll = function(e) {
        if (void 0 === e) return le;
        if (!0 === e && le) return le.enable();
        if (!1 === e) return le && le.kill(), void(le = e);
        var t = e instanceof Q ? e : function(e) {
          Ke(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, r, n, i, o, a, s, u, c = e,
            l = c.normalizeScrollX,
            f = c.momentum,
            d = c.allowNestedScroll,
            h = c.onRelease,
            p = P(e.target) || Y,
            v = z.core.globals().ScrollSmoother,
            y = v && v.get(),
            m = pe && (e.content && P(e.content) || y && !1 !== e.content && !y.smooth() && y.content()),
            b = M(p, R),
            g = M(p, I),
            _ = 1,
            E = (Q.isTouch && B.visualViewport ? B.visualViewport.scale * B.visualViewport.width : B.outerWidth) / B.innerWidth,
            T = 0,
            k = Ye(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            O = pr(p, e.type, !0, d),
            x = function() {
              return i = !1
            },
            C = Fe,
            S = Fe,
            D = function() {
              r = Ue(p, R), S = $(pe ? 1 : 0, r), l && (C = $(0, Ue(p, I))), n = zt
            },
            A = function() {
              m._gsap.y = Ve(parseFloat(m._gsap.y) + b.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
            },
            N = function() {
              D(), o.isActive() && o.vars.scrollY > r && (b() > r ? o.progress(1) && b(r) : o.resetTo("scrollY", r))
            };
          return m && z.set(m, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return pe && "touchmove" === e.type && function() {
              if (i) {
                requestAnimationFrame(x);
                var e = Ve(t.deltaY / 2),
                  r = S(b.v - e);
                if (m && r !== b.v + b.offset) {
                  b.offset = r - b.v;
                  var n = Ve((parseFloat(m && m._gsap.y) || 0) - b.offset);
                  m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", b.cacheID = w.cache, Kt()
                }
                return !0
              }
              b.offset && A(), i = !0
            }() || _ > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            i = !1;
            var e = _;
            _ = Ve((B.visualViewport && B.visualViewport.scale || 1) / E), o.pause(), e !== _ && fr(p, _ > 1.01 || !l && "x"), a = g(), s = b(), D(), n = zt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (b.offset && A(), t) {
              w.cache++;
              var n, i, a = k();
              l && (i = (n = g()) + .05 * a * -e.velocityX / .227, a *= lr(g, n, i, Ue(p, I)), o.vars.scrollX = C(i)), i = (n = b()) + .05 * a * -e.velocityY / .227, a *= lr(b, n, i, Ue(p, R)), o.vars.scrollY = S(i), o.invalidate().duration(a).play(.01), (pe && o.vars.scrollY >= r || n >= r - 1) && z.to({}, {
                onUpdate: N,
                duration: a
              })
            } else u.restart(!0);
            h && h(e)
          }, e.onWheel = function() {
            o._ts && o.pause(), Ce() - T > 1e3 && (n = 0, T = Ce())
          }, e.onChange = function(e, t, r, i, o) {
            if (zt !== n && D(), t && l && g(C(i[2] === t ? a + (e.startX - e.x) : g() + t - i[1])), r) {
              b.offset && A();
              var u = o[2] === r,
                c = u ? s + e.startY - e.y : b() + r - o[1],
                f = S(c);
              u && c !== f && (s += f - c), b(f)
            }(r || t) && Kt()
          }, e.onEnable = function() {
            fr(p, !l && "x"), ur.addEventListener("refresh", N), gt(B, "resize", N), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = g.smooth = !1), O.enable()
          }, e.onDisable = function() {
            fr(p, !0), wt(B, "resize", N), ur.removeEventListener("refresh", N), O.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new Q(e)).iOS = pe, pe && !b() && b(1), pe && z.ticker.add(Fe), u = t._dc, o = z.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: or(b, b(), function() {
                return o.pause()
              })
            },
            onUpdate: Kt,
            onComplete: u.vars.onComplete
          }), t
        }(e);
        return le && le.target === t.target && le.kill(), qe(t.target) && (le = t), t
      }, ur.core = {
        _getVelocityProp: F,
        _inputObserver: pr,
        _scrollers: w,
        _proxies: _,
        bridge: {
          ss: function() {
            De || Vt("scrollStart"), De = Ce()
          },
          ref: function() {
            return ee
          }
        }
      }, je() && z.registerPlugin(ur)
    },
    6988(e, t, r) {
      "use strict";
      (n = r(3082)) && "object" == typeof n && "default" in n && n.default;
      var n, i = r(7727),
        o = new i,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        u = o.getEngine(),
        c = o.getOS(),
        l = o.getUA();
      var f = "mobile",
        d = "tablet",
        h = "Chrome",
        p = "Firefox",
        v = "Opera",
        y = "Yandex",
        m = "Safari",
        b = "Internet Explorer",
        g = "Edge",
        w = "Chromium",
        _ = "IE",
        E = "Mobile Safari",
        T = "MIUI Browser",
        k = "Samsung Browser",
        O = "iOS",
        x = "Android",
        C = "Windows Phone",
        S = "Windows",
        D = "Mac OS",
        A = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        N = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        I = function(e) {
          var t = N();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        R = function(e) {
          return e.type === f
        },
        P = function(e) {
          return e.type === d
        },
        M = function(e) {
          var t = e.type;
          return t === f || t === d
        },
        F = function(e) {
          return "smarttv" === e.type
        },
        V = function(e) {
          return void 0 === e.type
        },
        L = function(e) {
          return "wearable" === e.type
        },
        j = function(e) {
          return "console" === e.type
        },
        q = function(e) {
          return "embedded" === e.type
        },
        Q = function(e) {
          var t = e.vendor;
          return A(t)
        },
        z = function(e) {
          var t = e.model;
          return A(t)
        },
        U = function(e) {
          var t = e.type;
          return A(t, "browser")
        },
        B = function(e) {
          return e.name === x
        },
        W = function(e) {
          return e.name === S
        },
        Y = function(e) {
          return e.name === D
        },
        G = function(e) {
          return e.name === C
        },
        K = function(e) {
          return e.name === O
        },
        H = function(e) {
          var t = e.version;
          return A(t)
        },
        X = function(e) {
          var t = e.name;
          return A(t)
        },
        $ = function(e) {
          return e.name === h
        },
        J = function(e) {
          return e.name === p
        },
        Z = function(e) {
          return e.name === w
        },
        ee = function(e) {
          return e.name === g
        },
        te = function(e) {
          return e.name === y
        },
        re = function(e) {
          var t = e.name;
          return t === m || t === E
        },
        ne = function(e) {
          return e.name === E
        },
        ie = function(e) {
          return e.name === v
        },
        oe = function(e) {
          var t = e.name;
          return t === b || t === _
        },
        ae = function(e) {
          return e.name === T
        },
        se = function(e) {
          return e.name === k
        },
        ue = function(e) {
          var t = e.version;
          return A(t)
        },
        ce = function(e) {
          var t = e.major;
          return A(t)
        },
        le = function(e) {
          var t = e.name;
          return A(t)
        },
        fe = function(e) {
          var t = e.name;
          return A(t)
        },
        de = function(e) {
          var t = e.version;
          return A(t)
        },
        he = function() {
          var e = N(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        pe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        ve = function() {
          var e = N();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        ye = function() {
          return I("iPad")
        },
        me = function() {
          return I("iPhone")
        },
        be = function() {
          return I("iPod")
        },
        ge = function(e) {
          return A(e)
        };
      F(s), j(s), L(s), q(s), ne(a) || ye(), Z(a), M(s) || ye(), R(s), P(s) || ye(), V(s), V(s), B(c), G(c), K(c) || ye(), $(a), J(a), re(a), ie(a), oe(a), H(c), X(c), ue(a), ce(a), le(a), Q(s), z(s), fe(u), de(u), ge(l), ee(a) || pe(l), te(a), U(s), ve(), ye(), me(), be(), he(), pe(l), ee(a) && pe(l), W(c), Y(c), ae(a), se(a)
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
    1471(e, t, r) {
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
    8538(e, t, r) {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(3082))
    },
    7727(e, t, r) {
      var n;
      ! function(i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          c = "string",
          l = "major",
          f = "model",
          d = "name",
          h = "type",
          p = "vendor",
          v = "version",
          y = "architecture",
          m = "console",
          b = "mobile",
          g = "tablet",
          w = "smarttv",
          _ = "wearable",
          E = "embedded",
          T = "Amazon",
          k = "Apple",
          O = "ASUS",
          x = "BlackBerry",
          C = "Browser",
          S = "Chrome",
          D = "Firefox",
          A = "Google",
          N = "Honor",
          I = "Huawei",
          R = "LG",
          P = "Microsoft",
          M = "Motorola",
          F = "Nvidia",
          V = "OnePlus",
          L = "Opera",
          j = "OPPO",
          q = "Samsung",
          Q = "Sharp",
          z = "Sony",
          U = "Xiaomi",
          B = "Zebra",
          W = "Facebook",
          Y = "Chromium OS",
          G = "Mac OS",
          K = " Browser",
          H = function(e) {
            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
            return t
          },
          X = function(e, t) {
            return typeof e === c && -1 !== $(t).indexOf($(e))
          },
          $ = function(e) {
            return e.toLowerCase()
          },
          J = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          Z = function(e, t) {
            for (var r, n, i, s, c, l, f = 0; f < t.length && !c;) {
              var d = t[f],
                h = t[f + 1];
              for (r = n = 0; r < d.length && !c && d[r];)
                if (c = d[r++].exec(e))
                  for (i = 0; i < h.length; i++) l = c[++n], typeof(s = h[i]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              f += 2
            }
          },
          ee = function(e, t) {
            for (var r in t)
              if (typeof t[r] === u && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (X(t[r][n], e)) return "?" === r ? o : r
              } else if (X(t[r], e)) return "?" === r ? o : r;
            return t.hasOwnProperty("*") ? t["*"] : e
          },
          te = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          re = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [v, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [v, [d, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [d, v],
              [/opios[\/ ]+([\w\.]+)/i],
              [v, [d, L + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [v, [d, L + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [v, [d, L]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [v, [d, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [v, [d, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [d, v],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [v, [d, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [v, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [v, [d, "UC" + C]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [v, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [v, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [v, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [v, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [v, [d, "Smart Lenovo " + C]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1 Secure " + C], v
              ],
              [/\bfocus\/([\w\.]+)/i],
              [v, [d, D + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [v, [d, L + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [v, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [v, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [v, [d, L + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [v, [d, "MIUI" + K]],
              [/fxios\/([\w\.-]+)/i],
              [v, [d, D]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [v, [d, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1Browser"], v
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1" + K], v
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [v, [d, q + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [v, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [d, "Sogou Mobile"], v
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [d, v],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [d],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [v, d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [d, W], v
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [d, v],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [v, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [v, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [v, [d, S + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [d, S + " WebView"], v
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [v, [d, "Android " + C]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, v],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [v, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [v, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [d, [v, ee, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, v],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [d, "Netscape"], v
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [d, v],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [v, [d, D + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [d, [v, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [v, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [y, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [y, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [y, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [y, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [y, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [y, /ower/, "", $]
              ],
              [/ sun4\w[;\)]/i],
              [
                [y, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [y, $]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [p, q],
                [h, g]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [p, q],
                [h, b]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [p, k],
                [h, b]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [p, k],
                [h, g]
              ],
              [/(macintosh);/i],
              [f, [p, k]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [p, Q],
                [h, b]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [f, [p, N],
                [h, g]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [f, [p, N],
                [h, b]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [f, [p, I],
                [h, g]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [p, I],
                [h, b]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [p, U],
                [h, g]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [f, /_/g, " "],
                [p, U],
                [h, b]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [p, j],
                [h, b]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [f, [p, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": j
                }],
                [h, g]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [p, "Vivo"],
                [h, b]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [p, "Realme"],
                [h, b]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [f, [p, M],
                [h, b]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [p, M],
                [h, g]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [p, R],
                [h, g]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [f, [p, R],
                [h, b]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [f, [p, "Lenovo"],
                [h, g]
              ],
              [/(nokia) (t[12][01])/i],
              [p, f, [h, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [f, /_/g, " "],
                [h, b],
                [p, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [f, [p, A],
                [h, g]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [p, A],
                [h, b]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [p, z],
                [h, b]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [p, z],
                [h, g]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [p, V],
                [h, b]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [p, T],
                [h, g]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [p, T],
                [h, b]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, p, [h, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [p, x],
                [h, b]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [p, O],
                [h, g]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [p, O],
                [h, b]
              ],
              [/(nexus 9)/i],
              [f, [p, "HTC"],
                [h, g]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [f, /_/g, " "],
                [h, b]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [f, [p, "TCL"],
                [h, g]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, $], f, [h, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [p, "Acer"],
                [h, g]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [p, "Meizu"],
                [h, b]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [p, "Ulefone"],
                [h, b]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [f, [p, "Energizer"],
                [h, b]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [f, [p, "Cat"],
                [h, b]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [f, [p, "Smartfren"],
                [h, b]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [p, "Nothing"],
                [h, b]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [f, [p, "Archos"],
                [h, g]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [f, [p, "Archos"],
                [h, b]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [p, f, [h, g]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [p, f, [h, b]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, f, [h, g]],
              [/(surface duo)/i],
              [f, [p, P],
                [h, g]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [p, "Fairphone"],
                [h, b]
              ],
              [/(u304aa)/i],
              [f, [p, "AT&T"],
                [h, b]
              ],
              [/\bsie-(\w*)/i],
              [f, [p, "Siemens"],
                [h, b]
              ],
              [/\b(rct\w+) b/i],
              [f, [p, "RCA"],
                [h, g]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [p, "Dell"],
                [h, g]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [p, "Verizon"],
                [h, g]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [p, "Barnes & Noble"],
                [h, g]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [f, [p, "NuVision"],
                [h, g]
              ],
              [/\b(k88) b/i],
              [f, [p, "ZTE"],
                [h, g]
              ],
              [/\b(nx\d{3}j) b/i],
              [f, [p, "ZTE"],
                [h, b]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [p, "Swiss"],
                [h, b]
              ],
              [/\b(zur\d{3}) b/i],
              [f, [p, "Swiss"],
                [h, g]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [p, "Zeki"],
                [h, g]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], f, [h, g]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [p, "Insignia"],
                [h, g]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [p, "NextBook"],
                [h, g]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], f, [h, b]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], f, [h, b]
              ],
              [/\b(ph-1) /i],
              [f, [p, "Essential"],
                [h, b]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [p, "Envizen"],
                [h, g]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [p, "MachSpeed"],
                [h, g]
              ],
              [/\btu_(1491) b/i],
              [f, [p, "Rotor"],
                [h, g]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [f, [p, F],
                [h, g]
              ],
              [/(sprint) (\w+)/i],
              [p, f, [h, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [p, P],
                [h, b]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [p, B],
                [h, g]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [p, B],
                [h, b]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [h, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [p, q],
                [h, w]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, R],
                [h, w]
              ],
              [/(apple) ?tv/i],
              [p, [f, k + " TV"],
                [h, w]
              ],
              [/crkey/i],
              [
                [f, S + "cast"],
                [p, A],
                [h, w]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [p, T],
                [h, w]
              ],
              [/(shield \w+ tv)/i],
              [f, [p, F],
                [h, w]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [p, Q],
                [h, w]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [p, z],
                [h, w]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [f, [p, U],
                [h, w]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, f, [h, w]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, J],
                [f, J],
                [h, w]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [f, [h, w]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [h, w]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, f, [h, m]],
              [/droid.+; (shield)( bui|\))/i],
              [f, [p, F],
                [h, m]
              ],
              [/(playstation \w+)/i],
              [f, [p, z],
                [h, m]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [p, P],
                [h, m]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [f, [p, q],
                [h, _]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [p, f, [h, _]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [f, [p, j],
                [h, _]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [p, k],
                [h, _]
              ],
              [/(opwwe\d{3})/i],
              [f, [p, V],
                [h, _]
              ],
              [/(moto 360)/i],
              [f, [p, M],
                [h, _]
              ],
              [/(smartwatch 3)/i],
              [f, [p, z],
                [h, _]
              ],
              [/(g watch r)/i],
              [f, [p, R],
                [h, _]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [p, B],
                [h, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [p, A],
                [h, _]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, f, [h, _]],
              [/; (quest( \d| pro)?)/i],
              [f, [p, W],
                [h, _]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [h, E]],
              [/(aeobc)\b/i],
              [f, [p, T],
                [h, E]
              ],
              [/(homepod).+mac os/i],
              [f, [p, k],
                [h, E]
              ],
              [/windows iot/i],
              [
                [h, E]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [f, [h, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [h, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [h, g]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [h, b]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [f, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [v, [d, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [d, v],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [v, [d, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [d, v],
              [/ladybird\//i],
              [
                [d, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [v, d]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, v],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [d, [v, ee, te]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [v, ee, te],
                [d, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [v, /_/g, "."],
                [d, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [d, G],
                [v, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [v, d],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [d, /(.+)/, "$1 Touch"], v
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [d, v],
              [/\(bb(10);/i],
              [v, [d, x]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [v, [d, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [v, [d, D + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [v, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [v, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [v, [d, S + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [d, Y], v
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [d, v],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [d, "Solaris"], v
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [d, v]
            ]
          },
          ne = function(e, t) {
            if (typeof e === u && (t = e, e = o), !(this instanceof ne)) return new ne(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              m = r && r.userAgentData ? r.userAgentData : o,
              w = t ? function(e, t) {
                var r = {};
                for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                return r
              }(re, t) : re,
              _ = r && r.userAgent == n;
            return this.getBrowser = function() {
              var e, t = {};
              return t[d] = o, t[v] = o, Z.call(t, n, w.browser), t[l] = typeof(e = t[v]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && r && r.brave && typeof r.brave.isBrave == a && (t[d] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[y] = o, Z.call(e, n, w.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = o, e[f] = o, e[h] = o, Z.call(e, n, w.device), _ && !e[h] && m && m.mobile && (e[h] = b), _ && "Macintosh" == e[f] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[f] = "iPad", e[h] = g), e
            }, this.getEngine = function() {
              var e = {};
              return e[d] = o, e[v] = o, Z.call(e, n, w.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[d] = o, e[v] = o, Z.call(e, n, w.os), _ && !e[d] && m && m.platform && "Unknown" != m.platform && (e[d] = m.platform.replace(/chrome os/i, Y).replace(/macos/i, G)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return n
            }, this.setUA = function(e) {
              return n = typeof e === c && e.length > 500 ? J(e, 500) : e, this
            }, this.setUA(n), this
          };
        ne.VERSION = "1.0.41", ne.BROWSER = H([d, v, l]), ne.CPU = H([y]), ne.DEVICE = H([f, p, h, m, b, w, g, _, E]), ne.ENGINE = ne.OS = H([d, v]), typeof t !== s ? (e.exports && (t = e.exports = ne), t.UAParser = ne) : r.amdO ? (n = function() {
          return ne
        }.call(t, r, t, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = ne);
        var ie = typeof i !== s && (i.jQuery || i.Zepto);
        if (ie && !ie.ua) {
          var oe = new ne;
          ie.ua = oe.getResult(), ie.ua.get = function() {
            return oe.getUA()
          }, ie.ua.set = function(e) {
            oe.setUA(e);
            var t = oe.getResult();
            for (var r in t) ie.ua[r] = t[r]
          }
        }
      }("object" == typeof window ? window : this)
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
        u = r(8460),
        c = r(6408),
        l = r(7593),
        f = r(9722),
        d = r(85),
        h = r(8603),
        p = r(5384),
        v = r(466),
        y = r(2825),
        m = function() {
          function e() {
            this.assumeImmutableResults = !1, this.getFragmentDoc = (0, o.LV)(s.ct, {
              max: u.v["cache.fragmentQueryDocuments"] || 1e3,
              cache: d.l
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
              u = void 0 === s || s,
              d = (0, n.Tt)(e, ["fragment", "fragmentName", "from", "optimistic"]),
              h = this.getFragmentDoc(r, o),
              y = void 0 === a || "string" == typeof a ? a : this.identify(a),
              m = !!e[Symbol.for("apollo.dataMasking")];
            if (!1 !== globalThis.__DEV__) {
              var b = o || (0, c.E4)(r).name.value;
              y || !1 !== globalThis.__DEV__ && i.V1.warn(1, b)
            }
            var g, w = (0, n.Cl)((0, n.Cl)({}, d), {
              returnPartialData: !0,
              id: y,
              query: h,
              optimistic: u
            });
            return new l.c(function(i) {
              return t.watch((0, n.Cl)((0, n.Cl)({}, w), {
                immediate: !0,
                callback: function(a) {
                  var s = m ? (0, v.z)(a.result, r, t, o) : a.result;
                  if (!g || !(0, p.a)(h, {
                      data: g.result
                    }, {
                      data: s
                    }, e.variables)) {
                    var u = {
                      data: s,
                      complete: !!a.complete
                    };
                    a.missing && (u.missing = (0, f.IM)(a.missing.map(function(e) {
                      return e.missing
                    }))), g = (0, n.Cl)((0, n.Cl)({}, a), {
                      result: s
                    }), i.next(u)
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
      !1 !== globalThis.__DEV__ && (m.prototype.getMemoryInternals = h.tQ);
      var b = function(e) {
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
        g = r(7849),
        w = r(2846),
        _ = r(2573),
        E = r(9537),
        T = r(3946),
        k = r(5425),
        O = r(5355),
        x = r(5593),
        C = r(5154),
        S = r(6605),
        D = r(1384),
        A = r(7582),
        N = r(7540),
        I = Object.prototype.hasOwnProperty;

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
          if ((0, T.dt)(e) && (0, C.MS)(e, r)) {
            var n = (0, T.ue)(e);
            return I.call(t, n) && (!e.selectionSet || j(e.selectionSet, t[n], r))
          }
          return !0
        }))
      }

      function q(e) {
        return (0, D.U)(e) && !(0, T.A_)(e) && !(0, N.c)(e)
      }

      function Q(e, t) {
        var r = (0, s.JG)((0, c.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var z = Object.create(null),
        U = function() {
          return z
        },
        B = Object.create(null),
        W = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, S.G)((0, T.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, T.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, T.WU)(e);
              if ((0, T.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, T.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.Cl)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), I.call(this.data, e)) {
              var r = this.data[e];
              if (r && I.call(r, t)) return r[t]
            }
            return "__typename" === t && I.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof H ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), I.call(this.data, e) ? this.data[e] : this instanceof H ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, T.A_)(e) && (e = e.__ref), (0, T.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new f.ZI($).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach(function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = L(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof H || delete s[e]
                  }
                }), !u.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== s.__typename || delete u.__typename, Object.keys(u).forEach(function(e) {
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
                u = !0,
                c = {
                  DELETE: z,
                  INVALIDATE: B,
                  isReference: T.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, T.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach(function(l) {
                  var f = L(l),
                    d = o[l];
                  if (void 0 !== d) {
                    var h = "function" == typeof t ? t : t[l] || t[f];
                    if (h) {
                      var p = h === U ? z : h((0, S.G)(d), (0, n.Cl)((0, n.Cl)({}, c), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (p === B) r.group.dirty(e, l);
                      else if (p === z && (p = void 0), p !== d && (a[l] = p, s = !0, d = p, !1 !== globalThis.__DEV__)) {
                        var v = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, T.A_)(p)) v(p);
                        else if (Array.isArray(p))
                          for (var y = !1, m = void 0, b = 0, g = p; b < g.length; b++) {
                            var w = g[b];
                            if ((0, T.A_)(w)) {
                              if (y = !0, v(w)) break
                            } else "object" == typeof w && w && r.policies.identify(w)[0] && (m = w);
                            if (y && void 0 !== m) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, m);
                              break
                            }
                          }
                      }
                    }
                    void 0 !== d && (u = !1)
                  }
                }), s) return this.merge(e, a), u && (this instanceof H ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
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
            return e.id && (I.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof H && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach(function(t) {
              I.call(e.policies.rootTypenamesById, t) || r.push(t)
            }), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach(function(r) {
                e && I.call(e, r) || t.delete(r)
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
              I.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
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
            if (!I.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach(function(e) {
                (0, T.A_)(e) && (t[e.__ref] = !0), (0, D.U)(e) && Object.keys(e).forEach(function(t) {
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
        Y = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new A.b(O.et)
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
              a = e.call(this, r, new Y(i)) || this;
            return a.stump = new X(a), a.storageTrie = new A.b(O.et), o && a.replace(o), a
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
      }(W || (W = {}));
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
            return I.call(this.data, t) ? (0, n.Cl)((0, n.Cl)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(W),
        X = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, function() {}, new Y(t.group.caching, t.group)) || this
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
        return !!(e instanceof W && e.group.caching)
      }
      var Z = function() {
        function e() {
          this.known = new(O.En ? WeakSet : Set), this.pool = new A.b(O.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
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
                var s, u = o.length;
                if (a.sorted.forEach(function(r) {
                    o.push(t.admit(e[r]))
                  }), !(s = this.pool.lookupArray(o)).object) {
                  var c = s.object = Object.create(i);
                  this.known.add(c), a.sorted.forEach(function(e, t) {
                    c[e] = o[u + t]
                  }), !1 !== globalThis.__DEV__ && Object.freeze(c)
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
          this.knownResults = new(O.et ? WeakMap : Map), this.config = (0, x.o)(e, {
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
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: ee,
            makeCacheKey: function(e, t, r, n) {
              if (J(r.store)) return r.store.makeCacheKey(e, (0, T.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)(function(e) {
            return K(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }, {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
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
            u = void 0 === s || s,
            l = e.canonizeResults,
            f = void 0 === l ? this.config.canonizeResults : l,
            d = this.config.cache.policies;
          a = (0, n.Cl)((0, n.Cl)({}, (0, c.wY)((0, c.AT)(r))), a);
          var h, p = (0, T.WU)(o),
            v = this.executeSelectionSet({
              selectionSet: (0, c.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.Cl)({
                store: t,
                query: r,
                policies: d,
                variables: a,
                varString: (0, _.M)(a),
                canonizeResults: f
              }, Q(r, this.config.fragments))
            });
          if (v.missing && (h = [new b(re(v.missing), v.missing, r, a)], !u)) throw h[0];
          return {
            result: v.result,
            complete: !h,
            missing: h
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
          if ((0, T.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var u, c = a.variables,
            l = a.policies,
            d = a.store.getFieldValue(n, "__typename"),
            h = [],
            p = new f.ZI;

          function v(e, t) {
            var r;
            return e.missing && (u = p.merge(u, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof d && !l.rootIdsByTypename[d] && h.push({
            __typename: d
          });
          var y = new Set(r.selections);
          y.forEach(function(e) {
            var r, f;
            if ((0, C.MS)(e, c))
              if ((0, T.dt)(e)) {
                var m = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  b = (0, T.ue)(e);
                void 0 === m ? w.XY.added(e) || (u = p.merge(u, ((r = {})[b] = "Can't find field '".concat(e.name.value, "' on ").concat((0, T.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, N.c)(m) ? m.length > 0 && (m = v(t.executeSubSelectedArray({
                  field: e,
                  array: m,
                  enclosingRef: o,
                  context: a
                }), b)) : e.selectionSet ? null != m && (m = v(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: m,
                  enclosingRef: (0, T.A_)(m) ? m : o,
                  context: a
                }), b)) : a.canonizeResults && (m = t.canon.pass(m)), void 0 !== m && h.push(((f = {})[b] = m, f))
              } else {
                var g = (0, s.HQ)(e, a.lookupFragment);
                if (!g && e.kind === k.b.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                g && l.fragmentMatches(g, d) && g.selectionSet.selections.forEach(y.add, y)
              }
          });
          var m = {
              result: (0, f.IM)(h),
              missing: u
            },
            b = a.canonizeResults ? this.canon.admit(m) : (0, S.G)(m);
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
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map(function(e, t) {
            return null === e ? null : (0, N.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, T.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach(function(r) {
                  (0, D.U)(r) && ((0, i.V1)(!(0, T.A_)(r), 11, function(e, t) {
                    return (0, T.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
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

      function ue(e) {
        var t = se(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = le(e, function(e) {
              var o = he(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && I.call(t, e[0]) && (o = he(t, e, de)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
            });
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function ce(e) {
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
                  if (t) return he(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && I.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, he(i, s)
                  }
                }
              else if (n && (0, N.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find(function(e) {
                    return e.name.value === u
                  }),
                  l = c && (0, T.MB)(c, i);
                return l && he(l, e.slice(1))
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

      function de(e, t) {
        return e[t]
      }

      function he(e, t, r) {
        return r = r || de, pe(t.reduce(function e(t, n) {
          return (0, N.c)(t) ? t.map(function(t) {
            return e(t, n)
          }) : t && r(t, n)
        }, e))
      }

      function pe(e) {
        return (0, D.U)(e) ? (0, N.c)(e) ? e.map(pe) : le(Object.keys(e).sort(), function(t) {
          return he(e, t)
        }) : e
      }
      var ve = r(569);

      function ye(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, T.MB)(e.field, e.variables) : null
      }
      var me = function() {},
        be = function(e, t) {
          return t.fieldName
        },
        ge = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        we = function(e, t) {
          return t
        },
        _e = function() {
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
              u = (0, n.Cl)((0, n.Cl)({}, t), {
                typename: o,
                storeObject: s,
                readField: t && t.readField || function() {
                  var e = Te(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }),
              c = o && this.getTypePolicy(o),
              l = c && c.keyFn || this.config.dataIdFromObject;
            return ve.yV.withValue(!0, function() {
              for (; l;) {
                var t = l((0, n.Cl)((0, n.Cl)({}, e), s), u);
                if (!(0, N.c)(t)) {
                  a = t;
                  break
                }
                l = ue(t)
              }
            }), a = a ? String(a) : void 0, u.keyObject ? [a, u.keyObject] : [a]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach(function(r) {
              var i = e[r],
                o = i.queryType,
                a = i.mutationType,
                s = i.subscriptionType,
                u = (0, n.Tt)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), I.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            })
          }, e.prototype.updateTypePolicy = function(e, t, r) {
            var n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? ge : !1 === t ? we : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? me : (0, N.c)(i) ? ue(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach(function(t) {
              var n = r[t];
              n && (null == n ? void 0 : n.typename) === e || (n = r[t] = {
                typename: e
              });
              var i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  u = i.read,
                  c = i.merge;
                n.keyFn = !1 === s ? be : (0, N.c)(s) ? ce(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || be)
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
            if (!I.call(this.typePolicies, e)) {
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
              for (var s = this.getSupertypeSet(t, !0), u = [s], c = function(e) {
                  var t = o.getSupertypeSet(e, !1);
                  t && t.size && u.indexOf(t) < 0 && u.push(t)
                }, l = !(!r || !this.fuzzySubtypes.size), f = !1, d = 0; d < u.length; ++d) {
                var h = u[d];
                if (h.has(a)) return s.has(a) || (f && !1 !== globalThis.__DEV__ && i.V1.warn(7, t, a), s.add(a)), !0;
                h.forEach(c), l && d === u.length - 1 && j(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(e, r) {
                  var n = t.match(e);
                  n && n[0] === t && c(r)
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
                var u = o(s, a);
                if (!(0, N.c)(u)) {
                  t = u || n;
                  break
                }
                o = ce(u)
              }
            return void 0 === t && (t = e.field ? (0, T.Ii)(e.field, e.variables) : (0, T.o5)(n, ye(e))), !1 === t ? n : n === L(t) ? t : n + ":" + t
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
                u = s && s.read;
              if (u) {
                var c = Ee(this, r, e, t, t.store.getStorage((0, T.A_)(r) ? r.__ref : r, i));
                return oe.bl.withValue(this.cache, u, [a, c])
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
            return s === ge ? ke(n.store)(e, t) : s === we ? t : (n.overwrite && (e = void 0), s(e, t, Ee(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function Ee(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = L(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: ye(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: T.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(Te(arguments, t, s), n)
          },
          mergeObjects: ke(n.store)
        }
      }

      function Te(e, t, r) {
        var o, a = e[0],
          s = e[1],
          u = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, n.Cl)({}, a), I.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, ie.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function ke(e) {
        return function(t, r) {
          if ((0, N.c)(t) || (0, N.c)(r)) throw (0, i.vA)(9);
          if ((0, D.U)(t) && (0, D.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, T.A_)(t) && q(r)) return e.merge(t.__ref, r), t;
            if (q(t) && (0, T.A_)(r)) return e.merge(t, r.__ref), r;
            if (q(t) && q(r)) return (0, n.Cl)((0, n.Cl)({}, t), r)
          }
          return r
        }
      }

      function Oe(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.Cl)((0, n.Cl)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var xe = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              s = t.result,
              u = t.dataId,
              l = t.variables,
              d = t.overwrite,
              h = (0, c.Vu)(o),
              p = new f.ZI;
            l = (0, n.Cl)((0, n.Cl)({}, (0, c.wY)(h)), l);
            var v = (0, n.Cl)((0, n.Cl)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return p.merge(e, t)
                },
                variables: l,
                varString: (0, _.M)(l)
              }, Q(o, this.fragments)), {
                overwrite: !!d,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              y = this.processSelectionSet({
                result: s || Object.create(null),
                dataId: u,
                selectionSet: h.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: v
              });
            if (!(0, T.A_)(y)) throw (0, i.vA)(12, s);
            return v.incomingById.forEach(function(t, o) {
              var s = t.storeObject,
                u = t.mergeTree,
                c = t.fieldNodeSet,
                l = (0, T.WU)(o);
              if (u && u.map.size) {
                var f = r.applyMerges(u, l, s, v);
                if ((0, T.A_)(f)) return;
                s = f
              }
              if (!1 !== globalThis.__DEV__ && !v.overwrite) {
                var d = Object.create(null);
                c.forEach(function(e) {
                  e.selectionSet && (d[e.name.value] = !0)
                }), Object.keys(s).forEach(function(e) {
                  (function(e) {
                    return !0 === d[L(e)]
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
                      if (c && !(0, T.A_)(u) && !(0, a.L)(u, c) && !Object.keys(u).every(function(e) {
                          return void 0 !== o.getFieldValue(c, e)
                        })) {
                        var l = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          f = L(r),
                          d = "".concat(l, ".").concat(f);
                        if (!Ie.has(d)) {
                          Ie.add(d);
                          var h = [];
                          (0, N.c)(u) || (0, N.c)(c) || [u, c].forEach(function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || h.includes(t) || h.push(t)
                          }), !1 !== globalThis.__DEV__ && i.V1.warn(15, f, l, h.length ? "either ensure all objects of type " + h.join(" and ") + " have an ID or a custom merge function, or " : "", d, (0, n.Cl)({}, u), (0, n.Cl)({}, c))
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
              u = e.mergeTree,
              c = this.cache.policies,
              l = Object.create(null),
              f = r && c.rootTypenamesById[r] || (0, T.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var d = function() {
                var e = Te(arguments, l, s.variables);
                if ((0, T.A_)(e.from)) {
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
              h = new Set;
            this.flattenFields(a, o, s, f).forEach(function(e, r) {
              var n, a = (0, T.ue)(r),
                s = o[a];
              if (h.add(r), void 0 !== s) {
                var p = c.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  v = Se(u, p),
                  y = t.processFieldValue(s, r, r.selectionSet ? Oe(e, !1, !1) : e, v),
                  m = void 0;
                r.selectionSet && ((0, T.A_)(y) || q(y)) && (m = d("__typename", y));
                var b = c.getMergeFunction(f, r.name.value, m);
                b ? v.info = {
                  field: r,
                  typename: f,
                  merge: b
                } : Ne(u, p), l = e.merge(l, ((n = {})[p] = y, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || w.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, T.ue)(r), o)
            });
            try {
              var p = c.identify(o, {
                  typename: f,
                  selectionSet: a,
                  fragmentMap: s.fragmentMap,
                  storeObject: l,
                  readField: d
                }),
                v = p[0],
                y = p[1];
              r = r || v, y && (l = s.merge(l, y))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var m = (0, T.WU)(r),
                b = s.written[r] || (s.written[r] = []);
              if (b.indexOf(a) >= 0) return m;
              if (b.push(a), this.reader && this.reader.isFresh(o, m, a, s)) return m;
              var g = s.incomingById.get(r);
              return g ? (g.storeObject = s.merge(g.storeObject, l), g.mergeTree = De(g.mergeTree, u), h.forEach(function(e) {
                return g.fieldNodeSet.add(e)
              })) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: Ae(u) ? void 0 : u,
                fieldNodeSet: h
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
            void 0 === n && (n = (0, T.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              u = new A.b(!1);
            return function e(c, l) {
              var f = u.lookup(c, l.clientOnly, l.deferred);
              f.visited || (f.visited = !0, c.selections.forEach(function(u) {
                if ((0, C.MS)(u, r.variables)) {
                  var c = l.clientOnly,
                    f = l.deferred;
                  if (c && f || !(0, N.E)(u.directives) || u.directives.forEach(function(e) {
                      var t = e.name.value;
                      if ("client" === t && (c = !0), "defer" === t) {
                        var n = (0, T.MB)(e, r.variables);
                        n && !1 === n.if || (f = !0)
                      }
                    }), (0, T.dt)(u)) {
                    var d = o.get(u);
                    d && (c = c && d.clientOnly, f = f && d.deferred), o.set(u, Oe(r, c, f))
                  } else {
                    var h = (0, s.HQ)(u, r.lookupFragment);
                    if (!h && u.kind === k.b.FRAGMENT_SPREAD) throw (0, i.vA)(14, u.name.value);
                    h && a.fragmentMatches(h, n, t, r.variables) && e(h.selectionSet, Oe(r, c, f))
                  }
                }
              }))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, T.A_)(r)) {
              var c, l = (0, N.c)(r) || !(0, T.A_)(t) && !q(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, T.A_)(l) ? l.__ref : l]);
              var d = function(e, t) {
                return (0, N.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach(function(e, t) {
                var r = d(l, t),
                  n = d(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              }), c && (r = (0, N.c)(f) ? f.slice(0) : (0, n.Cl)({}, f), c.forEach(function(e, t) {
                r[t] = e
              }))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        Ce = [];

      function Se(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, Ce.pop() || {
          map: new Map
        }), r.get(t)
      }

      function De(e, t) {
        if (e === t || !t || Ae(t)) return e;
        if (!e || Ae(e)) return t;
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

      function Ae(e) {
        return !e || !(e.info || e.map.size)
      }

      function Ne(e, t) {
        var r = e.map,
          n = r.get(t);
        n && Ae(n) && (Ce.push(n), r.delete(t))
      }
      var Ie = new Set,
        Re = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new g.c(w.XY), r.assumeImmutableResults = !0, r.makeVar = oe.UT, r.txCount = 0, !1 !== globalThis.__DEV__ && ((0, y.cc)(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), (0, y.cc)(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), r.config = function(e) {
              return (0, x.o)(M, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new _e({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.C6)(t, e), t.prototype.init = function() {
            var e = this.data = new W.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.addTypenameTransform.resetCache(), null == n || n.resetCaches(), this.storeWriter = new xe(this, this.storeReader = new te({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: F(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, o.LV)(function(e, r) {
              return t.broadcastWatch(e, r)
            }, {
              max: this.config.resultCacheMaxSize || u.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (J(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, (0, _.M)({
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
              if (e instanceof b) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (I.call(e, "id") && !e.id) return !1;
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
            !1 !== globalThis.__DEV__ && (0, y.cc)(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), _.M.reset(), E.y.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, T.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              !1 !== globalThis.__DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (I.call(e, "id")) return !1;
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
            return this.init(), _.M.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
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
      !1 !== globalThis.__DEV__ && (Re.prototype.getMemoryInternals = h.cM)
    },
    9922(e, t, r) {
      "use strict";
      r.d(t, {
        MS: () => u,
        UT: () => c,
        WR: () => s,
        bl: () => i
      });
      var n = r(9131),
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
        a(e).vars.forEach(function(t) {
          return t.forgetCache(e)
        })
      }

      function u(e) {
        a(e).vars.forEach(function(t) {
          return t.attachCache(e)
        })
      }

      function c(e) {
        var t = new Set,
          r = new Set,
          n = function(s) {
            if (arguments.length > 0) {
              if (e !== s) {
                e = s, t.forEach(function(e) {
                  a(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                });
                var u = Array.from(r);
                r.clear(), u.forEach(function(t) {
                  return t(e)
                })
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
        u = r(8548),
        c = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, u.$)(t).request) || this;
            return r.options = t, r
          }
          return (0, n.C6)(t, e), t
        }(o.C),
        l = r(4269),
        f = r(1029),
        d = r(5154),
        h = r(2846),
        p = r(5404),
        v = r(2573),
        y = r(7849),
        m = r(7593);

      function b(e, t, r) {
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
      var g = r(7540);

      function w(e) {
        var t = _(e);
        return (0, g.E)(t)
      }

      function _(e) {
        var t = (0, g.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, f.ST)(e) && (0, g.E)(e.incremental) && e.incremental.forEach(function(e) {
          e.errors && t.push.apply(t, e.errors)
        }), t
      }
      var E = r(6408),
        T = r(3946),
        k = r(1384),
        O = r(9930),
        x = r(7078),
        C = r(9531);

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
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), (0, x.w)(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout(function() {
                return t.unsubscribe()
              }), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), (0, x.w)(r.observers, "error", e))
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
                }), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), (0, x.w)(r.observers, "complete"))
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
      (0, C.r)(D);
      var A = r(5227),
        N = r(2959),
        I = r(839),
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
          var t = e.networkStatus || I.pT.loading;
          return this.variables && this.networkStatus !== I.pT.loading && !(0, l.L)(this.variables, e.variables) && (t = I.pT.setVariables), (0, l.L)(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
            s = (0, g.E)(e.errors) ? e.errors.slice(0) : [];
          if (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(), "incremental" in e && (0, g.E)(e.incremental)) {
            var u = (0, f.bd)(this.getDiff().result, e);
            e.data = u
          } else if ("hasNext" in e && e.hasNext) {
            var c = this.getDiff();
            e.data = a.merge(c.result, e.data)
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
          return this.networkError = null, this.networkStatus = I.pT.ready
        }, e.prototype.markError = function(e) {
          var t;
          return this.networkStatus = I.pT.error, this.lastWrite = void 0, null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function j(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !w(e);
        return !n && r && e.data && (n = !0), n
      }
      var q = r(9537),
        Q = r(7582),
        z = r(5879),
        U = r(8460),
        B = r(8339),
        W = r(569),
        Y = r(466),
        G = Object.prototype.hasOwnProperty,
        K = Object.create(null),
        H = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new z.A(U.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Q.b(!1), this.noCacheWarningsByQueryId = new Set;
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
              var t, r, o, a, s, u, c, l = e.mutation,
                f = e.variables,
                d = e.optimisticResponse,
                h = e.updateQueries,
                p = e.refetchQueries,
                v = void 0 === p ? [] : p,
                y = e.awaitRefetchQueries,
                m = void 0 !== y && y,
                g = e.update,
                E = e.onQueryUpdated,
                T = e.fetchPolicy,
                k = void 0 === T ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : T,
                O = e.errorPolicy,
                x = void 0 === O ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : O,
                C = e.keepRootFields,
                S = e.context;
              return (0, n.YH)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 36), (0, i.V1)("network-only" === k || "no-cache" === k, 37), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, S)] : [3, 2];
                  case 1:
                    f = e.sent(), e.label = 2;
                  case 2:
                    return o = this.mutationStore && (this.mutationStore[t] = {
                      mutation: l,
                      variables: f,
                      loading: !0,
                      error: null
                    }), a = d && this.markMutationOptimistic(d, {
                      mutationId: t,
                      document: l,
                      variables: f,
                      fetchPolicy: k,
                      errorPolicy: x,
                      context: S,
                      updateQueries: h,
                      update: g,
                      keepRootFields: C
                    }), this.broadcastQueries(), s = this, [2, new Promise(function(e, r) {
                      return b(s.getObservableFromLink(l, (0, n.Cl)((0, n.Cl)({}, S), {
                        optimisticResponse: a ? d : void 0
                      }), f, {}, !1), function(e) {
                        if (w(e) && "none" === x) throw new A.K4({
                          graphQLErrors: _(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.Cl)({}, e);
                        return "function" == typeof v && (v = v(r)), "ignore" === x && w(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: k,
                          errorPolicy: x,
                          context: S,
                          update: g,
                          updateQueries: h,
                          awaitRefetchQueries: m,
                          refetchQueries: v,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: E,
                          keepRootFields: C
                        })
                      }).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.Cl)((0, n.Cl)({}, r), {
                            data: s.maskOperation({
                              document: l,
                              data: r.data,
                              fetchPolicy: k,
                              id: t
                            })
                          }))
                        },
                        error: function(e) {
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof A.K4 ? e : new A.K4({
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
              c && this.queries.forEach(function(e, n) {
                var a = e.observableQuery,
                  s = a && a.queryName;
                if (s && G.call(c, s)) {
                  var u = c[s],
                    l = r.queries.get(n),
                    f = l.document,
                    d = l.variables,
                    h = t.diff({
                      query: f,
                      variables: d,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    p = h.result;
                  if (h.complete && p) {
                    var v = u(p, {
                      mutationResult: i,
                      queryName: f && (0, E.n4)(f) || void 0,
                      queryVariables: d
                    });
                    v && o.push({
                      result: v,
                      dataId: "ROOT_QUERY",
                      query: f,
                      variables: d
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
                hasClientExports: (0, d.f2)(e),
                hasForcedResolvers: this.localState.shouldForceResolvers(e),
                hasNonreactiveDirective: (0, d.d8)(["nonreactive"], e),
                nonReactiveQuery: (0, h.x3)(e),
                clientQuery: this.localState.clientQuery(e),
                serverQuery: (0, h.iz)([{
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
              e.observableQuery ? e.networkStatus = I.pT.loading : e.stop()
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
              else if ((0, T.Kc)(e)) {
                var r = (0, q.y)(t.transform(e));
                o.set(r, (0, E.n4)(e)), a.set(r, !1)
              } else(0, k.U)(e) && e.query && s.add(e)
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
              var o = (0, O.v)("legacyOneTimeQuery"),
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
              u = void 0 === s ? {} : s,
              c = e.extensions,
              l = void 0 === c ? {} : c;
            r = this.transform(r), n = this.getVariables(r, n);
            var f = function(e) {
              return t.getObservableFromLink(r, u, e, l).map(function(n) {
                "no-cache" !== i && (j(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = w(n),
                  s = (0, A.uR)(n);
                if (o || s) {
                  var u = {};
                  if (o && (u.graphQLErrors = n.errors), s && (u.protocolErrors = n.extensions[A.K$]), "none" === a || s) throw new A.K4(u)
                }
                return "ignore" === a && delete n.errors, n
              })
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var d = this.localState.addExportedVariables(r, n, u).then(f);
              return new m.c(function(e) {
                var t = null;
                return d.then(function(r) {
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
            var s, u, c = this;
            void 0 === o && (o = null !== (s = null == t ? void 0 : t.queryDeduplication) && void 0 !== s ? s : this.queryDeduplication);
            var l = this.getDocumentInfo(e),
              f = l.serverQuery,
              d = l.clientQuery;
            if (f) {
              var h = this.inFlightLinkObservables,
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
                var g = (0, q.y)(f),
                  w = (0, v.M)(r),
                  _ = h.lookup(g, w);
                if (!(u = _.observable)) {
                  var T = new D([a(p, y)]);
                  u = _.observable = T, T.beforeNext(function e(t, r) {
                    "next" === t && "hasNext" in r && r.hasNext ? T.beforeNext(e) : h.remove(g, w)
                  })
                }
              } else u = new D([a(p, y)])
            } else u = new D([m.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return d && (u = b(u, function(e) {
              return c.localState.runResolvers({
                document: d,
                remoteResult: e,
                context: t,
                variables: r
              })
            })), u
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(r.query);
            return b(this.getObservableFromLink(i, r.context, r.variables), function(o) {
              var a = _(o),
                s = a.length > 0,
                u = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === u) throw e.markError(new A.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: I.pT.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = I.pT.error), c
            }, function(t) {
              var r = (0, A.Mn)(t) ? t : new A.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            })
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = I.pT.loading), void 0 === n && (n = t.query);
            var o, a, s = this.getVariables(n, t.variables),
              u = this.defaultOptions.watchQuery,
              c = t.fetchPolicy,
              l = void 0 === c ? u && u.fetchPolicy || "cache-first" : c,
              f = t.errorPolicy,
              d = void 0 === f ? u && u.errorPolicy || "none" : f,
              h = t.returnPartialData,
              p = void 0 !== h && h,
              v = t.notifyOnNetworkStatusChange,
              y = void 0 !== v && v,
              m = t.context,
              b = void 0 === m ? {} : m,
              g = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: l,
                errorPolicy: d,
                returnPartialData: p,
                notifyOnNetworkStatusChange: y,
                context: b
              }),
              w = function(n) {
                g.variables = n;
                var o = i.fetchQueryByPolicy(e, g, r);
                return "standby" !== g.fetchPolicy && o.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), o
              },
              _ = function() {
                return i.fetchCancelFns.delete(e.queryId)
              };
            if (this.fetchCancelFns.set(e.queryId, function(e) {
                _(), setTimeout(function() {
                  return o.cancel(e)
                })
              }), this.getDocumentInfo(g.query).hasClientExports) o = new D(this.localState.addExportedVariables(g.query, g.variables, g.context).then(w).then(function(e) {
              return e.sources
            })), a = !0;
            else {
              var E = w(g.variables);
              a = E.fromLink, o = new D(E.sources)
            }
            return o.promise.then(_, _), {
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
              s = void 0 === a ? o ? (0, O.v)("refetchQueries") : void 0 : a,
              u = e.onQueryUpdated,
              c = new Map;
            n && this.getObservableQueries(n).forEach(function(e, r) {
              c.set(r, {
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
            }), c.size && c.forEach(function(e, r) {
              var n, i = e.oq,
                o = e.lastDiff,
                a = e.diff;
              u && (a || (a = (0, M.lz)("canonizeResults", function() {
                return t.cache.diff(i.queryInfo.getDiffOptions())
              })), n = u(i, a, o)), u && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            }), s && this.cache.removeOptimistic(s), l
          }, e.prototype.maskOperation = function(e) {
            var t, r, n, o = e.document,
              a = e.data;
            if (!1 !== globalThis.__DEV__) {
              var s = e.fetchPolicy,
                u = e.id,
                c = null === (t = (0, E.Vu)(o)) || void 0 === t ? void 0 : t.operation,
                l = (null !== (r = null == c ? void 0 : c[0]) && void 0 !== r ? r : "o") + u;
              !this.dataMasking || "no-cache" !== s || (0, p.s6)(o) || this.noCacheWarningsByQueryId.has(l) || (this.noCacheWarningsByQueryId.add(l), !1 !== globalThis.__DEV__ && i.V1.warn(45, null !== (n = (0, E.n4)(o)) && void 0 !== n ? n : "Unnamed ".concat(null != c ? c : "operation")))
            }
            return this.dataMasking ? function(e, t, r) {
              var n;
              if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, W.Ki)(), e;
              var o = (0, E.Vu)(t);
              return (0, i.V1)(o, 63), null == e ? e : (0, B.S)(e, o.selectionSet, {
                operationType: o.operation,
                operationName: null === (n = o.name) || void 0 === n ? void 0 : n.value,
                fragmentMap: (0, p.JG)((0, E.zK)(t)),
                cache: r,
                mutableTargets: new W.jq,
                knownChanged: new W.xm
              })
            }(a, o, this.cache) : a
          }, e.prototype.maskFragment = function(e) {
            var t = e.data,
              r = e.fragment,
              n = e.fragmentName;
            return this.dataMasking ? (0, Y.z)(t, r, this.cache, n) : t
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var i = this,
              o = t.query,
              a = t.variables,
              s = t.fetchPolicy,
              u = t.refetchWritePolicy,
              c = t.errorPolicy,
              f = t.returnPartialData,
              d = t.context,
              h = t.notifyOnNetworkStatusChange,
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
                void 0 === r && (r = e.networkStatus || I.pT.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || f || (0, l.L)(s, {}) || (0, N.y)(t.missing);
                var u = function(e) {
                  return m.c.of((0, n.Cl)({
                    data: e,
                    loading: (0, I.bi)(r),
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
                  context: d,
                  variables: a,
                  onlyRunForcedResolvers: !0
                }).then(function(e) {
                  return u(e.data || void 0)
                }) : "none" === c && r === I.pT.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              b = "no-cache" === s ? 0 : r === I.pT.refetch && "merge" !== u ? 1 : 2,
              g = function() {
                return i.getResultsFromLink(e, b, {
                  query: o,
                  variables: a,
                  context: d,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              w = h && "number" == typeof p && p !== r && (0, I.bi)(r);
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
            return (0, d.d8)(["client"], e) && this.resolvers ? e : null
          }, e.prototype.serverQuery = function(e) {
            return (0, h.er)(e)
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
              query: (0, h.zc)(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1
            }).result
          }, e.prototype.resolveDocument = function(e, t) {
            return (0, n.sH)(this, arguments, void 0, function(e, t, r, i, o, a) {
              var s, u, c, l, f, d, h, v, y, m;
              return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
                return !0
              }), void 0 === a && (a = !1), (0, n.YH)(this, function(b) {
                return s = (0, E.Vn)(e), u = (0, E.zK)(e), c = (0, p.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", v = (h = this).cache, y = h.client, m = {
                  fragmentMap: c,
                  context: (0, n.Cl)((0, n.Cl)({}, r), {
                    cache: v,
                    client: y
                  }),
                  variables: i,
                  fragmentMatcher: o,
                  defaultOperationType: d,
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
              var a, s, u, c, l, f = this;
              return (0, n.YH)(this, function(h) {
                return a = o.fragmentMap, s = o.context, u = o.variables, c = [r], l = function(e) {
                  return (0, n.sH)(f, void 0, void 0, function() {
                    var l, f;
                    return (0, n.YH)(this, function(n) {
                      return (t || o.selectionsToResolve.has(e)) && (0, d.MS)(e, u) ? (0, T.dt)(e) ? [2, this.resolveField(e, t, r, o).then(function(t) {
                        var r;
                        void 0 !== t && c.push(((r = {})[(0, T.ue)(e)] = t, r))
                      })] : ((0, T.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 21, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then(function(e) {
                        c.push(e)
                      })] : [2]) : [2]
                    })
                  })
                }, [2, Promise.all(e.selections.map(l)).then(function() {
                  return (0, R.IM)(c)
                })]
              })
            })
          }, e.prototype.resolveField = function(e, t, r, i) {
            return (0, n.sH)(this, void 0, void 0, function() {
              var o, a, s, u, c, l, f, d, h, p = this;
              return (0, n.YH)(this, function(n) {
                return r ? (o = i.variables, a = e.name.value, s = (0, T.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (d = this.resolvers && this.resolvers[f]) && (h = d[u ? a : s]) && (l = Promise.resolve(Z.bl.withValue(this.cache, h, [r, (0, T.MB)(e, o), i.context, {
                  field: e,
                  fragmentMap: i.fragmentMap
                }])))), [2, l.then(function(r) {
                  var n, o;
                  if (void 0 === r && (r = c), e.directives && e.directives.forEach(function(e) {
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
                  FragmentSpread: function(n, o, s, u, c) {
                    var l = t[n.name.value];
                    (0, i.V1)(l, 22, n.name.value);
                    var f = e(l);
                    f.size > 0 && (c.forEach(function(e) {
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
            var t, r, a, u = this;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw (0, i.vA)(16);
            var l = e.uri,
              f = e.credentials,
              d = e.headers,
              h = e.cache,
              p = e.documentTransform,
              v = e.ssrMode,
              y = void 0 !== v && v,
              m = e.ssrForceFetchDelay,
              b = void 0 === m ? 0 : m,
              g = e.connectToDevTools,
              w = e.queryDeduplication,
              _ = void 0 === w || w,
              E = e.defaultOptions,
              T = e.defaultContext,
              k = e.assumeImmutableResults,
              O = void 0 === k ? h.assumeImmutableResults : k,
              x = e.resolvers,
              C = e.typeDefs,
              S = e.fragmentMatcher,
              D = e.clientAwareness,
              A = e.name,
              N = e.version,
              I = e.devtools,
              R = e.dataMasking;
            !1 !== globalThis.__DEV__ && ((0, M.cc)(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), (0, M.cc)(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), (0, M.cc)(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), (0, M.cc)(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), (0, M.cc)(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), (0, M.cc)(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), (0, M.cc)(e, "typeDefs", "ApolloClient"), e.link || !1 !== globalThis.__DEV__ && i.V1.warn(17));
            var P = e.link;
            P || (P = l ? new c({
              uri: l,
              credentials: f,
              headers: d
            }) : o.C.empty()), this.link = P, this.cache = h, this.disableNetworkFetches = y || b > 0, this.queryDeduplication = _, this.defaultOptions = E || Object.create(null), this.typeDefs = C, this.devtoolsConfig = (0, n.Cl)((0, n.Cl)({}, I), {
              enabled: null !== (t = null == I ? void 0 : I.enabled) && void 0 !== t ? t : g
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), b && setTimeout(function() {
              return u.disableNetworkFetches = !1
            }, b), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new ee({
              cache: h,
              client: this,
              resolvers: x,
              fragmentMatcher: S
            }), this.queryManager = new H({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: T,
              documentTransform: p,
              queryDeduplication: _,
              ssrMode: y,
              dataMasking: !!R,
              clientAwareness: {
                name: null !== (r = null == D ? void 0 : D.name) && void 0 !== r ? r : A,
                version: null !== (a = null == D ? void 0 : D.version) && void 0 !== a ? a : N
              },
              localState: this.localState,
              assumeImmutableResults: O,
              onBroadcast: this.devtoolsConfig.enabled ? function() {
                u.devToolsHookCb && u.devToolsHookCb({
                  action: {},
                  state: {
                    queries: u.queryManager.getQueryStore(),
                    mutations: u.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: u.cache.extract(!0)
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
        U: () => g,
        y: () => _
      });
      var n = r(1177),
        i = r(3023),
        o = r(4269),
        a = r(839),
        s = r(6408),
        u = r(5593),
        c = r(8471),
        l = r(7078),
        f = r(7593),
        d = r(9531),
        h = r(5227),
        p = r(5384),
        v = r(9131),
        y = r(2825),
        m = Object.assign,
        b = Object.hasOwnProperty,
        g = function(e) {
          function t(r) {
            var i = r.queryManager,
              o = r.queryInfo,
              a = r.options,
              u = this,
              c = t.inactiveOnCreation.getValue();
            (u = e.call(this, function(e) {
              u._getOrCreateQuery();
              try {
                var t = e._subscription._observer;
                t && !t.error && (t.error = w)
              } catch (e) {}
              var r = !u.observers.size;
              u.observers.add(e);
              var n = u.last;
              return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(u.maskResult(n.result)), r && u.reobserve().catch(function() {}),
                function() {
                  u.observers.delete(e) && !u.observers.size && u.tearDownQuery()
                }
            }) || this).observers = new Set, u.subscriptions = new Set, u.dirty = !1, u._getOrCreateQuery = function() {
              return c && (i.queries.set(u.queryId, o), c = !1), u.queryManager.getOrCreateQuery(u.queryId)
            }, u.queryInfo = o, u.queryManager = i, u.waitForOwnResult = E(a.fetchPolicy), u.isTornDown = !1, u.subscribeToMore = u.subscribeToMore.bind(u), u.maskResult = u.maskResult.bind(u);
            var l = i.defaultOptions.watchQuery,
              f = (void 0 === l ? {} : l).fetchPolicy,
              d = void 0 === f ? "cache-first" : f,
              h = a.fetchPolicy,
              p = void 0 === h ? d : h,
              v = a.initialFetchPolicy,
              y = void 0 === v ? "standby" === p ? d : p : v;
            u.options = (0, n.Cl)((0, n.Cl)({}, a), {
              initialFetchPolicy: y,
              fetchPolicy: p
            }), u.queryId = o.queryId || i.generateQueryId();
            var m = (0, s.Vu)(u.query);
            return u.queryName = m && m.name && m.name.value, u
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
              u = this.options.fetchPolicy,
              c = void 0 === u ? "cache-first" : u;
            if (E(c) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var l = this.queryInfo.getDiff();
              (l.complete || this.options.returnPartialData) && (s.data = l.result), (0, o.L)(s.data, {}) && (s.data = void 0), l.complete ? (delete s.partial, !l.complete || s.networkStatus !== a.pT.loading || "cache-first" !== c && "cache-only" !== c || (s.networkStatus = a.pT.ready, s.loading = !1)) : s.partial = !0, s.networkStatus === a.pT.ready && (s.error || s.errors) && (s.networkStatus = a.pT.error), !1 === globalThis.__DEV__ || l.complete || this.options.partialRefetch || s.loading || s.data || s.error || _(l.missing)
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
              u = this.options.fetchPolicy;
            if (r.fetchPolicy = "no-cache" === u ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && b.call(e, "variables")) {
              var c = (0, s.AT)(this.query),
                l = c.variableDefinitions;
              l && l.some(function(e) {
                return "variables" === e.variable.name.value
              }) || !1 !== globalThis.__DEV__ && i.V1.warn(28, e, (null === (t = c.name) || void 0 === t ? void 0 : t.value) || c)
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
              u = s.networkStatus;
            s.networkStatus = a.pT.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var c = new Set,
              l = null == e ? void 0 : e.updateQuery,
              f = "no-cache" !== this.options.fetchPolicy;
            return f || (0, i.V1)(l, 29), this.queryManager.fetchQuery(o, r, a.pT.fetchMore).then(function(i) {
              if (t.queryManager.removeQuery(o), s.networkStatus === a.pT.fetchMore && (s.networkStatus = u), f) t.queryManager.cache.batch({
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
                  c.add(e.query)
                }
              });
              else {
                var d = t.getLast("result"),
                  h = l(d.data, {
                    fetchMoreResult: i.data,
                    variables: r.variables
                  });
                t.reportResult((0, n.Cl)((0, n.Cl)({}, d), {
                  networkStatus: u,
                  loading: (0, a.bi)(u),
                  data: h
                }), t.variables)
              }
              return t.maskResult(i)
            }).finally(function() {
              f && !c.has(t.query) && t.reobserveCacheFirst()
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
            var t = (0, u.o)(this.options, e || {});
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
              result: this.queryManager.assumeImmutableResults ? e : (0, c.m)(e),
              variables: t
            }, i ? {
              error: i
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === a.pT.refetch || t === a.pT.fetchMore || t === a.pT.poll,
              s = this.options.variables,
              c = this.options.fetchPolicy,
              l = (0, u.o)(this.options, e || {}),
              f = i ? l : m(this.options, l),
              d = this.transformDocument(f.query);
            this.lastQuery = d, i || (this.updatePolling(), !e || !e.variables || (0, o.L)(e.variables, s) || "standby" === f.fetchPolicy || f.fetchPolicy !== c && "function" != typeof f.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", f), void 0 === t && (t = a.pT.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = E(f.fetchPolicy));
            var p = function() {
                r.concast === b && (r.waitForOwnResult = !1)
              },
              v = f.variables && (0, n.Cl)({}, f.variables),
              y = this.fetch(f, t, d),
              b = y.concast,
              g = y.fromLink,
              w = {
                next: function(e) {
                  (0, o.L)(r.variables, v) && (p(), r.reportResult(e, v))
                },
                error: function(e) {
                  (0, o.L)(r.variables, v) && ((0, h.Mn)(e) || (e = new h.K4({
                    networkError: e
                  })), p(), r.reportError(e, v))
                }
              };
            return i || !g && this.concast || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = b, this.observer = w), b.addObserver(w), b
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

      function w(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(33, e.message, e.stack)
      }

      function _(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(34, e)
      }

      function E(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }(0, d.r)(g)
    },
    5384(e, t, r) {
      "use strict";
      r.d(t, {
        a: () => c
      });
      var n = r(1177),
        i = r(4269),
        o = r(5154),
        a = r(5404),
        s = r(6408),
        u = r(3946);

      function c(e, t, r, o) {
        var u = t.data,
          c = (0, n.Tt)(t, ["data"]),
          f = r.data,
          d = (0, n.Tt)(r, ["data"]);
        return (0, i.A)(c, d) && l((0, s.Vn)(e).selectionSet, u, f, {
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
          if ((0, u.dt)(e)) {
            var c = (0, u.ue)(e),
              d = t && t[c],
              h = r && r[c],
              p = e.selectionSet;
            if (!p) return (0, i.A)(d, h);
            var v = Array.isArray(d),
              y = Array.isArray(h);
            if (v !== y) return !1;
            if (v && y) {
              var m = d.length;
              if (h.length !== m) return !1;
              for (var b = 0; b < m; ++b)
                if (!l(p, d[b], h[b], n)) return !1;
              return !0
            }
            return l(p, d, h, n)
          }
          var g = (0, a.HQ)(e, n.fragmentMap);
          return g ? !!f(g) || l(g.selectionSet, t, r, n) : void 0
        })
      }

      function f(e) {
        return !!e.directives && e.directives.some(d)
      }

      function d(e) {
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
        K4: () => u,
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
      var u = function(e) {
        function t(r) {
          var o, a, s = r.graphQLErrors,
            u = r.protocolErrors,
            c = r.clientErrors,
            l = r.networkError,
            f = r.errorMessage,
            d = r.extraInfo,
            h = e.call(this, f) || this;
          return h.name = "ApolloError", h.graphQLErrors = s || [], h.protocolErrors = u || [], h.clientErrors = c || [], h.networkError = l || null, h.message = f || (o = h, a = (0, n.fX)((0, n.fX)((0, n.fX)([], o.graphQLErrors, !0), o.clientErrors, !0), o.protocolErrors, !0), o.networkError && a.push(o.networkError), a.map(function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          }).join("\n")), h.extraInfo = d, h.cause = (0, n.fX)((0, n.fX)((0, n.fX)([l], s || [], !0), u || [], !0), c || [], !0).find(function(e) {
            return !!e
          }) || null, h.__proto__ = t.prototype, h
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

      function u(e, t) {
        return t ? t(e) : i.c.of()
      }

      function c(e) {
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
          return 0 === t.length ? e.empty() : t.map(c).reduce(function(e, t) {
            return e.concat(t)
          })
        }, e.split = function(t, r, n) {
          var o, a = c(r),
            s = c(n || new e(u));
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
          var o = c(t);
          if (l(o)) return !1 !== globalThis.__DEV__ && n.V1.warn(47, o), o;
          var a, s = c(r);
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
          return this.concat(e.split(t, r, n || new e(u)))
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
        $: () => C
      });
      var n = r(1177),
        i = r(3023),
        o = r(6964),
        a = r(5154),
        s = r(7593),
        u = function(e, t) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var n = (0, i.vA)(54, t, e.message);
            throw n.parseError = e, n
          }
          return r
        },
        c = r(5355);

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
            r = e, o.slice().forEach(function(t) {
              t[1](e)
            }), !t || t()
          }

          function u() {
            n = !0, o.slice().forEach(function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            }), !t || t()
          }
          t = function() {
            t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u)
          }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
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
          return c.uJ && (l[Symbol.asyncIterator] = function() {
            return this
          }), l
        }(i);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var d = function(e, t, r) {
          var n = new Error(r);
          throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
        },
        h = r(5227),
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
        e.status >= 300 && d(e, function() {
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
      var b = r(9537),
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
        return new s.c(function(t) {
          t.error(e)
        })
      }
      var T = r(7646),
        k = r(2846),
        O = r(6408),
        x = (0, i.no)(function() {
          return fetch
        }),
        C = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            c = e.fetch,
            l = e.print,
            b = void 0 === l ? w : l,
            C = e.includeExtensions,
            S = e.preserveHeaderCase,
            D = e.useGETForQueries,
            A = e.includeUnusedVariables,
            N = void 0 !== A && A,
            I = (0, n.Tt)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw (0, i.vA)(51)
          }(c || x);
          var R = {
            http: {
              includeExtensions: C,
              preserveHeaderCase: S
            },
            options: I.fetchOptions,
            credentials: I.credentials,
            headers: I.headers
          };
          return new o.C(function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              o = e.getContext(),
              l = {};
            if (o.clientAwareness) {
              var w = o.clientAwareness,
                C = w.name,
                S = w.version;
              C && (l["apollographql-client-name"] = C), S && (l["apollographql-client-version"] = S)
            }
            var A = (0, n.Cl)((0, n.Cl)({}, l), o.headers),
              I = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: A
              };
            if ((0, a.d8)(["client"], e.query)) {
              !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(52);
              var P = (0, k.er)(e.query);
              if (!P) return E(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = P
            }
            var M, F, V, L, j, q = _(e, b, g, R, I),
              Q = q.options,
              z = q.body;
            z.variables && !N && (z.variables = (M = z.variables, F = e.query, V = (0, n.Cl)({}, M), L = new Set(Object.keys(M)), (0, T.YR)(F, {
              Variable: function(e, t, r) {
                r && "VariableDefinition" !== r.kind && L.delete(e.name.value)
              }
            }), L.forEach(function(e) {
              delete V[e]
            }), V)), Q.signal || "undefined" == typeof AbortController || (j = new AbortController, Q.signal = j.signal);
            var U, B = "OperationDefinition" === (U = (0, O.Vn)(e.query)).kind && "subscription" === U.operation,
              W = (0, a.d8)(["defer"], e.query);
            if (D && !e.query.definitions.some(function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              }) && (Q.method = "GET"), W || B) {
              Q.headers = Q.headers || {};
              var Y = "multipart/mixed;";
              B && W && !1 !== globalThis.__DEV__ && i.V1.warn(53), B ? Y += "boundary=graphql;subscriptionSpec=1.0,application/json" : W && (Y += "deferSpec=20220824,application/json"), Q.headers.accept = Y
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
                K = G.newURI,
                H = G.parseError;
              if (H) return E(H);
              t = K
            } else try {
              Q.body = u(z, "Payload")
            } catch (H) {
              return E(H)
            }
            return new s.c(function(r) {
              var o = c || (0, i.no)(function() {
                  return fetch
                }) || x,
                a = r.next.bind(r);
              return o(t, Q).then(function(t) {
                  var r;
                  e.setContext({
                    response: t
                  });
                  var i, o = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    return (0, n.sH)(this, void 0, void 0, function() {
                      var r, i, o, a, s, u, c, l, d, v, b, g, w, _, E, T, k, O, x, C, S, D, A, N;
                      return (0, n.YH)(this, function(I) {
                        switch (I.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            r = new TextDecoder("utf-8"), i = null === (N = e.headers) || void 0 === N ? void 0 : N.get("content-type"), o = "boundary=", a = (null == i ? void 0 : i.includes(o)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(o)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = "\r\n--".concat(a), u = "", c = f(e), l = !0, I.label = 1;
                          case 1:
                            return l ? [4, c.next()] : [3, 3];
                          case 2:
                            for (d = I.sent(), v = d.value, b = d.done, g = "string" == typeof v ? v : r.decode(v), w = u.length - s.length + 1, l = !b, _ = (u += g).indexOf(s, w); _ > -1;) {
                              if (E = void 0, D = [u.slice(0, _), u.slice(_ + s.length)], u = D[1], T = (E = D[0]).indexOf("\r\n\r\n"), k = y(E.slice(0, T)), (O = k["content-type"]) && -1 === O.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (x = E.slice(T))
                                if (C = m(e, x), Object.keys(C).length > 1 || "data" in C || "incremental" in C || "errors" in C || "payload" in C)
                                  if ((0, p.Nw)(C)) {
                                    if (S = {}, "payload" in C) {
                                      if (1 === Object.keys(C).length && null === C.payload) return [2];
                                      S = (0, n.Cl)({}, C.payload)
                                    }
                                    "errors" in C && (S = (0, n.Cl)((0, n.Cl)({}, S), {
                                      extensions: (0, n.Cl)((0, n.Cl)({}, "extensions" in S ? S.extensions : null), (A = {}, A[h.K$] = C.errors, A))
                                    })), t(S)
                                  } else t(C);
                              else if (1 === Object.keys(C).length && "hasNext" in C && !C.hasNext) return [2];
                              _ = u.indexOf(s)
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
                      return Array.isArray(t) || v.call(t, "data") || v.call(t, "errors") || d(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map(function(e) {
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
        u = r(7540),
        c = r(5593),
        l = r(5879),
        f = r(8460);

      function d(e) {
        var t = Object.create(null),
          r = Object.create(null);
        return (0, u.E)(e) && e.forEach(function(e) {
          var n;
          t[e.message] = e, "string" == typeof(null === (n = e.extensions) || void 0 === n ? void 0 : n.code) && (r[e.extensions.code] = e)
        }), {
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
          }(0, i.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 55);
          var p = (0, c.o)(h, e),
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
              return new Promise(function(t) {
                return t(m(e))
              })
            };
          return Object.assign(new a.C(function(e, o) {
            (0, i.V1)(o, 56);
            var a = e.query;
            return new s.c(function(i) {
              var s, c, h = !1,
                p = !1,
                v = function(t, n) {
                  var i = t.response,
                    a = t.networkError;
                  if (!h && (i && i.errors || a)) {
                    h = !0;
                    var l = [],
                      f = i && i.errors;
                    (0, u.E)(f) && l.push.apply(l, f);
                    var v = void 0;
                    "string" != typeof(null == a ? void 0 : a.result) && (v = a && a.result && a.result.errors), (0, u.E)(v) && l.push.apply(l, v);
                    var m = {
                      response: i,
                      networkError: a,
                      operation: e,
                      graphQLErrors: (0, u.E)(l) ? l : void 0,
                      meta: d(l)
                    };
                    if ((_ = !b(m)) || r(), g(m)) return s && s.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: _
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), p && e.setContext({
                      fetchOptions: c
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
                    includeQuery: !_,
                    includeExtensions: _
                  }
                }), w && _ && ! function(e) {
                  return e.query.definitions.some(function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  })
                }(e) && (e.setContext(function(e) {
                  var t = e.fetchOptions,
                    r = void 0 === t ? {} : t;
                  return c = r, {
                    fetchOptions: (0, n.Cl)((0, n.Cl)({}, r), {
                      method: "GET"
                    })
                  }
                }), p = !0), _ ? function(e) {
                  if (!e || "object" != typeof e) return E(e);
                  t || (t = new l.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var r = t.get(e);
                  return r || t.set(e, r = E(e)), r
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
        S: () => c
      });
      var n = r(5425),
        i = r(5154),
        o = r(3946),
        a = r(6605),
        s = r(569),
        u = r(3023);

      function c(e, t, r) {
        return s.yV.withValue(!0, function() {
          var n = l(e, t, r, !1);
          return Object.isFrozen(e) && (0, a.G)(n), n
        })
      }

      function l(e, t, r, a, s) {
        var c, d = r.knownChanged,
          h = function(e, t) {
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
              var g = l(b, t, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", "[").concat(m, "]") : void 0);
              d.has(g) && d.add(h), h[m] = g
            } else h[m] = null
          }
          return d.has(h) ? h : e
        }
        for (var w = 0, _ = t.selections; w < _.length; w++) {
          var E = _[w],
            T = void 0;
          if (a && d.add(h), E.kind === n.b.FIELD) {
            var k = (0, o.ue)(E),
              O = E.selectionSet;
            if (void 0 === (T = h[k] || e[k])) continue;
            O && null !== T && (g = l(e[k], O, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", ".").concat(k) : void 0), d.has(g) && (T = g)), !1 === globalThis.__DEV__ && (h[k] = T), !1 !== globalThis.__DEV__ && (a && "__typename" !== k && !(null === (c = Object.getOwnPropertyDescriptor(h, k)) || void 0 === c ? void 0 : c.value) ? Object.defineProperty(h, k, f(k, T, s || "", r.operationName, r.operationType)) : (delete h[k], h[k] = T))
          }
          if (E.kind !== n.b.INLINE_FRAGMENT || E.typeCondition && !r.cache.fragmentMatches(E, e.__typename) || (T = l(e, E.selectionSet, r, a, s)), E.kind === n.b.FRAGMENT_SPREAD) {
            var x = E.name.value,
              C = r.fragmentMap[x] || (r.fragmentMap[x] = r.cache.lookupFragment(x));
            (0, u.V1)(C, 59, x);
            var S = (0, i.s7)(E);
            "mask" !== S && (T = l(e, C.selectionSet, r, "migrate" === S, s))
          }
          d.has(T) && d.add(h)
        }
        return "__typename" in e && !("__typename" in h) && (h.__typename = e.__typename), Object.keys(h).length !== Object.keys(e).length && d.add(h), d.has(h) ? h : e
      }

      function f(e, t, r, n, i) {
        var o = function() {
          return s.yV.getValue() || (!1 !== globalThis.__DEV__ && u.V1.warn(60, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), o = function() {
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
        u = r(5404),
        c = r(6408);

      function l(e, t, r, l) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, i.Ki)(), e;
        var f = t.definitions.filter(function(e) {
          return e.kind === n.b.FRAGMENT_DEFINITION
        });
        void 0 === l && ((0, o.V1)(1 === f.length, 61, f.length), l = f[0].name.value);
        var d = f.find(function(e) {
          return e.name.value === l
        });
        return (0, o.V1)(!!d, 62, l), null == e || (0, a.A)(e, {}) ? e : (0, s.S)(e, d.selectionSet, {
          operationType: "fragment",
          operationName: d.name.value,
          fragmentMap: (0, u.JG)((0, c.zK)(t)),
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
        yV: () => u
      });
      var n = r(9131),
        i = r(3023),
        o = r(5355),
        a = o.et ? WeakMap : Map,
        s = o.En ? WeakSet : Set,
        u = new n.DX,
        c = !1;

      function l() {
        c || (c = !0, !1 !== globalThis.__DEV__ && i.V1.warn(64))
      }
    },
    7077(e, t, r) {
      "use strict";
      var n;
      r.d(t, {
        l: () => u
      });
      var i = r(8538),
        o = r(5355),
        a = r(3023),
        s = o.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function u() {
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
            u = o.useContext(s),
            c = o.useMemo(function() {
              return (0, n.Cl)((0, n.Cl)({}, u), {
                client: t || u.client
              })
            }, [u, t]);
          return (0, i.V1)(c.client, 71), o.createElement(s.Provider, {
            value: c
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
        u = r(7421),
        c = r(658),
        l = r(8942),
        f = r(2825);

      function d() {}
      var h = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"],
        p = ["initialFetchPolicy", "onCompleted", "onError", "defaultOptions", "partialRefetch", "canonizeResults"],
        v = ["query", "ssr", "client", "fetchPolicy", "nextFetchPolicy", "refetchWritePolicy", "errorPolicy", "pollInterval", "notifyOnNetworkStatusChange", "returnPartialData", "skipPollAttempt"];

      function y(e, t) {
        var r;
        if (!1 !== globalThis.__DEV__) {
          var y = t || {};
          (0, c.h)(y, "canonizeResults", "useLazyQuery"), (0, c.h)(y, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), (0, c.h)(y, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), (0, c.h)(y, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, c.h)(y, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), (0, c.h)(y, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), (0, c.h)(y, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), (0, c.h)(y, "partialRefetch", "useLazyQuery")
        }
        var m = o.useRef(void 0),
          b = o.useRef(void 0),
          g = o.useRef(void 0),
          w = (0, a.l)(t, m.current || {}),
          _ = null !== (r = null == w ? void 0 : w.query) && void 0 !== r ? r : e;
        b.current = t, g.current = _;
        var E = (0, i.Cl)((0, i.Cl)({}, w), {
            skip: !m.current
          }),
          T = (0, s.SX)(_, E),
          k = T.obsQueryFields,
          O = T.result,
          x = T.client,
          C = T.resultData,
          S = T.observable,
          D = T.onQueryExecuted,
          A = S.options.initialFetchPolicy || (0, s.kk)(E.defaultOptions, x.defaultOptions),
          N = o.useReducer(function(e) {
            return e + 1
          }, 0)[1],
          I = o.useMemo(function() {
            for (var e = {}, t = function(t) {
                var r = k[t];
                e[t] = function() {
                  return !1 !== globalThis.__DEV__ && "reobserve" === t && !1 !== globalThis.__DEV__ && l.V1.warn(79), m.current || (m.current = Object.create(null), N()), r.apply(this, arguments)
                }
              }, r = 0, n = h; r < n.length; r++) t(n[r]);
            return e
          }, [N, k]),
          R = !!m.current,
          P = o.useMemo(function() {
            return (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, O), I), {
              called: R
            })
          }, [O, I, R]),
          M = (n || (n = o.createContext(null)), o.useCallback(function() {
            var e = console.error;
            try {
              return console.error = d, o.useContext(n), !0
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
              for (var o = 0, u = v; o < u.length; o++) {
                var c = u[o];
                F.current.has(c) || ((0, f.cc)(e || {}, c, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), F.current.add(c))
              }
            }
            m.current = e ? (0, i.Cl)((0, i.Cl)({}, e), {
              fetchPolicy: e.fetchPolicy || A
            }) : {
              fetchPolicy: A
            };
            var d = (0, a.l)(b.current, (0, i.Cl)({
                query: g.current
              }, m.current)),
              h = function(e, t, r, n, i, o) {
                var a = i.query || n,
                  u = (0, s.Er)(r, a, i, !1)(t),
                  c = t.reobserveAsConcast((0, s.t_)(t, r, i, u));
                return o(u), new Promise(function(n) {
                  var i;
                  c.subscribe({
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
              }(C, S, x, _, (0, i.Cl)((0, i.Cl)({}, d), {
                skip: !1
              }), D).then(function(e) {
                return Object.assign(e, I)
              });
            return h.catch(function() {}), h
          }, [M, x, _, I, A, S, C, D]),
          L = o.useRef(V);
        (0, u.E)(function() {
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
        n: () => d
      });
      var n = r(1177),
        i = r(8538),
        o = r(5568),
        a = r(4269),
        s = r(2707),
        u = r(5227),
        c = r(5919),
        l = r(7421),
        f = r(658);

      function d(e, t) {
        !1 !== globalThis.__DEV__ && (0, f.h)(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
        var r = (0, c.m)(null == t ? void 0 : t.client);
        (0, s.D$)(e, s.KG.Mutation);
        var d = i.useState({
            called: !1,
            loading: !1,
            client: r
          }),
          h = d[0],
          p = d[1],
          v = i.useRef({
            result: h,
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
              c = e.client || v.current.client;
            v.current.result.loading || s.ignoreResults || !v.current.isMounted || p(v.current.result = {
              loading: !0,
              error: void 0,
              data: void 0,
              called: !0,
              client: c
            });
            var l = ++v.current.mutationId,
              f = (0, o.l)(s, e);
            return c.mutate(f).then(function(t) {
              var r, n, i = t.data,
                o = t.errors,
                s = o && o.length > 0 ? new u.K4({
                  graphQLErrors: o
                }) : void 0,
                d = e.onError || (null === (r = v.current.options) || void 0 === r ? void 0 : r.onError);
              if (s && d && d(s, f), l === v.current.mutationId && !f.ignoreResults) {
                var h = {
                  called: !0,
                  loading: !1,
                  data: i,
                  error: s,
                  client: c
                };
                v.current.isMounted && !(0, a.L)(v.current.result, h) && p(v.current.result = h)
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
                  client: c
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
        }, h)]
      }
    },
    7324(e, t, r) {
      "use strict";
      r.d(t, {
        Er: () => C,
        kk: () => N,
        t_: () => S,
        $X: () => I,
        IT: () => k,
        SX: () => x
      });
      var n = r(1177),
        i = r(3023),
        o = r(8538),
        a = r(58),
        s = r(4269),
        u = r(5568),
        c = r(7077),
        l = r(5227),
        f = r(2959),
        d = r(839),
        h = r(2707),
        p = r(5919),
        v = r(5593),
        y = r(7540),
        m = r(6605),
        b = Symbol.for("apollo.hook.wrappers"),
        g = r(658),
        w = r(2825),
        _ = Object.prototype.hasOwnProperty;

      function E() {}
      var T = Symbol();

      function k(e, t) {
        return void 0 === t && (t = Object.create(null)), (r = O, (o = (i = (n = (0, p.m)(t && t.client).queryManager) && n[b]) && i.useQuery) ? o(r) : r)(e, t);
        var r, n, i, o
      }

      function O(e, t) {
        !1 !== globalThis.__DEV__ && ((0, g.h)(t, "canonizeResults", "useQuery"), (0, g.h)(t, "partialRefetch", "useQuery"), (0, g.h)(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), (0, g.h)(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, g.h)(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
        var r = x(e, t),
          i = r.result,
          a = r.obsQueryFields;
        return o.useMemo(function() {
          return (0, n.Cl)((0, n.Cl)({}, i), a)
        }, [i, a])
      }

      function x(e, t) {
        var r = (0, p.m)(t.client),
          u = o.useContext((0, c.l)()).renderPromises,
          l = !!u,
          v = r.disableNetworkFetches,
          y = !1 !== t.ssr && !t.skip,
          m = t.partialRefetch,
          b = C(r, e, t, l),
          g = function(e, t, r, i, a) {
            function s(n) {
              var o;
              return (0, h.D$)(t, h.KG.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(a()) || f.U.inactiveOnCreation.withValue(!i, function() {
                  return (0, w.lz)(["canonizeResults", "partialRefetch"], function() {
                    return e.watchQuery(S(void 0, e, r, a()))
                  })
                }),
                resultData: {
                  previousData: null === (o = null == n ? void 0 : n.resultData.current) || void 0 === o ? void 0 : o.data
                }
              }
            }
            var u = o.useState(s),
              c = u[0],
              l = u[1];

            function d(e) {
              var t, r;
              Object.assign(c.observable, ((t = {})[T] = e, t));
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
              var p = s(c);
              return l(p), [p, d]
            }
            return [c, d]
          }(r, e, t, u, b),
          k = g[0],
          O = k.observable,
          x = k.resultData,
          N = g[1],
          M = b(O);
        ! function(e, t, r, n, i) {
          var o;
          t[T] && !(0, s.L)(t[T], i) && (t.reobserve(S(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[T] = i
        }(x, O, r, t, M);
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
          }(O)
        }, [O]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(O, u, y);
        var V = function(e, t, r, n, i, u, c, l, f) {
          var h = o.useRef(f);
          o.useEffect(function() {
            h.current = f
          });
          var p = !l && !u || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? P : void 0 : R,
            v = e.previousData,
            y = o.useMemo(function() {
              return p && I(p, v, t, r)
            }, [r, t, p, v]);
          return (0, a.r)(o.useCallback(function(n) {
            if (l) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && (0, s.L)(i.data, o.data) || D(o, e, t, r, c, n, h.current)
              },
              o = function(u) {
                if (a.current.unsubscribe(), a.current = t.resubscribeAfterError(i, o), !_.call(u, "graphQLErrors")) throw u;
                var l = e.current;
                (!l || l && l.loading || !(0, s.L)(u, l.error)) && D({
                  data: l && l.data,
                  error: u,
                  loading: !1,
                  networkStatus: d.pT.error
                }, e, t, r, c, n, h.current)
              },
              a = {
                current: t.subscribe(i, o)
              };
            return function() {
              setTimeout(function() {
                return a.current.unsubscribe()
              })
            }
          }, [u, l, t, e, c, r]), function() {
            return y || A(e, t, h.current, c, r)
          }, function() {
            return y || A(e, t, h.current, c, r)
          })
        }(x, O, r, t, M, v, m, l, {
          onCompleted: t.onCompleted || E,
          onError: t.onError || E
        });
        return {
          result: V,
          obsQueryFields: F,
          observable: O,
          resultData: x,
          client: r,
          onQueryExecuted: N
        }
      }

      function C(e, t, r, i) {
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
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, v.o)(e && e.options, n)), i.reduce(u.l)
      }

      function D(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, y.E)(e.errors) && (e.error = new l.K4({
            graphQLErrors: e.errors
          })), t.current = I(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.Cl)((0, n.Cl)({}, e), {
              loading: !0,
              networkStatus: d.pT.refetch
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
                n ? r.onError(n) : e.data && t !== e.networkStatus && e.networkStatus === d.pT.ready && r.onCompleted(e.data)
              }).catch(function(e) {
                !1 !== globalThis.__DEV__ && i.V1.warn(e)
              })
            }
          }(e, null == c ? void 0 : c.networkStatus, u)
      }

      function A(e, t, r, n, i) {
        return e.current || D(t.getCurrentResult(), e, t, i, n, function() {}, r), e.current
      }

      function N(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function I(e, t, r, i) {
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
          networkStatus: d.pT.loading
        }),
        P = (0, m.G)({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: d.pT.ready
        })
    },
    7927(e, t, r) {
      "use strict";
      r.d(t, {
        q: () => o
      });
      var n = r(8538),
        i = r(58);

      function o(e) {
        return (0, i.r)(n.useCallback(function(t) {
          return e.onNextChange(function r() {
            t(), e.onNextChange(r)
          })
        }, [e]), e, e)
      }
    },
    58(e, t, r) {
      "use strict";
      var n;
      r.d(t, {
        r: () => u
      });
      var i = r(3023),
        o = r(8538),
        a = r(5355),
        s = !1,
        u = (n || (n = r.t(o, 2))).useSyncExternalStore || function(e, t, r) {
          var n = t();
          !1 === globalThis.__DEV__ || s || n === t() || (s = !0, !1 !== globalThis.__DEV__ && i.V1.error(91));
          var u = o.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            l = u[0].inst,
            f = u[1];
          return a.JR ? o.useLayoutEffect(function() {
            Object.assign(l, {
              value: n,
              getSnapshot: t
            }), c(l) && f({
              inst: l
            })
          }, [e, n, t]) : Object.assign(l, {
            value: n,
            getSnapshot: t
          }), o.useEffect(function() {
            return c(l) && f({
              inst: l
            }), e(function() {
              c(l) && f({
                inst: l
              })
            })
          }, [e]), n
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
    2707(e, t, r) {
      "use strict";
      r.d(t, {
        D$: () => d,
        KG: () => n
      });
      var n, i, o = r(3023),
        a = r(5879),
        s = r(8460),
        u = r(8603),
        c = r(2825);

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
        (0, c.S2)("parser", function() {
          !1 !== globalThis.__DEV__ && o.V1.warn(93)
        }), i || (i = new a.A(s.v.parser || 1e3));
        var t, r, u = i.get(e);
        if (u) return u;
        (0, o.V1)(!!e && !!e.kind, 94, e);
        for (var l = [], f = [], d = [], h = [], p = 0, v = e.definitions; p < v.length; p++) {
          var y = v[p];
          if ("FragmentDefinition" !== y.kind) {
            if ("OperationDefinition" === y.kind) switch (y.operation) {
              case "query":
                f.push(y);
                break;
              case "mutation":
                d.push(y);
                break;
              case "subscription":
                h.push(y)
            }
          } else l.push(y)
        }(0, o.V1)(!l.length || f.length || d.length || h.length, 95), (0, o.V1)(f.length + d.length + h.length <= 1, 96, e, f.length, h.length, d.length), r = f.length ? n.Query : n.Mutation, f.length || d.length || (r = n.Subscription);
        var m = f.length ? f : d.length ? d : h;
        (0, o.V1)(1 === m.length, 97, e, m.length);
        var b = m[0];
        t = b.variableDefinitions || [];
        var g = {
          name: b.name && "Name" === b.name.kind ? b.name.value : "data",
          type: r,
          variables: t
        };
        return i.set(e, g), g
      }

      function d(e, t) {
        var r = (0, c.lz)("parser", f, [e]),
          n = l(t),
          i = l(r.type);
        (0, o.V1)(r.type === t, 98, n, n, i)
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(n || (n = {})), f.resetCache = function() {
        i = void 0
      }, !1 !== globalThis.__DEV__ && (0, u.D_)("parser", function() {
        return i ? i.size : 0
      })
    },
    5879(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => s,
        V: () => u
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
        u = function(e, t) {
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
        cM: () => u,
        ep: () => s,
        tQ: () => c
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
                documentTransforms: h(this.queryManager.documentTransform)
              }
            }, null === (s = (a = this.cache).getMemoryInternals) || void 0 === s ? void 0 : s.call(a))
          }
        } : void 0,
        u = !1 !== globalThis.__DEV__ ? function() {
          var e = this.config.fragments;
          return (0, n.Cl)((0, n.Cl)({}, l.apply(this)), {
            addTypenameDocumentTransform: h(this.addTypenameTransform),
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

      function d(e) {
        return null != e
      }

      function h(e) {
        return p(e).map(function(e) {
          return {
            cache: e
          }
        })
      }

      function p(e) {
        return e ? (0, n.fX)((0, n.fX)([f(null == e ? void 0 : e.performWork)], p(null == e ? void 0 : e.left), !0), p(null == e ? void 0 : e.right), !0).filter(d) : []
      }

      function v(e) {
        var t;
        return e ? (0, n.fX)((0, n.fX)([null === (t = null == e ? void 0 : e.getMemoryInternals) || void 0 === t ? void 0 : t.call(e)], v(null == e ? void 0 : e.left), !0), v(null == e ? void 0 : e.right), !0).filter(d) : []
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
    5355(e, t, r) {
      "use strict";
      r.d(t, {
        En: () => a,
        JR: () => f,
        Sw: () => c,
        et: () => o,
        ol: () => s,
        uJ: () => u
      });
      var n = r(3023),
        i = "ReactNative" == (0, n.no)(function() {
          return navigator.product
        }),
        o = "function" == typeof WeakMap && !(i && !r.g.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        u = s && Symbol.asyncIterator,
        c = "function" == typeof(0, n.no)(function() {
          return window.document.createElement
        }),
        l = (0, n.no)(function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        }) || !1,
        f = (c || i) && !l
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
          return JSON.stringify(e, u)
        }, {
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
            return a.forEach(function(e) {
              u[e] = t[e]
            }), u
          }
        }
        return t
      }

      function c(e, t, r) {
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
        Nw: () => u,
        ST: () => a,
        YX: () => s,
        bd: () => c
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

      function u(e) {
        return (0, n.U)(e) && "payload" in e
      }

      function c(e, t) {
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
    9930(e, t, r) {
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
        ZI: () => c
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
            return (0, i.U)(t) && (0, i.U)(e) ? (Object.keys(t).forEach(function(i) {
              if (o.call(e, i)) {
                var s = e[i];
                if (t[i] !== s) {
                  var u = r.reconciler.apply(r, (0, n.fX)([e, t, i], a, !1));
                  u !== s && ((e = r.shallowCopyForMerge(e))[i] = u)
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
    1778(e, t, r) {
      "use strict";
      r.d(t, {
        p: () => i
      });
      var n = r(9930);

      function i(e, t) {
        void 0 === t && (t = 0);
        var r = (0, n.v)("stringifyForDisplay");
        return JSON.stringify(e, function(e, t) {
          return void 0 === t ? r : t
        }, t).split(JSON.stringify(r)).join("<undefined>")
      }
    },
    2825(e, t, r) {
      "use strict";
      r.d(t, {
        S2: () => h,
        cc: () => d,
        lz: () => f
      });
      var n, i = r(1177),
        o = r(9131),
        a = r(3023),
        s = Symbol.for("apollo.deprecations"),
        u = Symbol.for("apollo.deprecations.slot"),
        c = a.Sf,
        l = null !== (n = c[u]) && void 0 !== n ? n : c[u] = new o.DX;

      function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return l.withValue.apply(l, (0, i.fX)([Array.isArray(e) ? e : [e]], t, !1))
      }

      function d(e, t, r, n) {
        void 0 === n && (n = "Please remove this option."), h(t, function() {
          t in e && !1 !== globalThis.__DEV__ && a.V1.warn(103, r, t, n)
        })
      }

      function h(e, t) {
        (function(e) {
          return c[s] || (l.getValue() || []).includes(e)
        })(e) || t()
      }
    },
    4128(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var n = r(6327);
      const i = (0, n.n)(function() {
        return globalThis
      }) || (0, n.n)(function() {
        return window
      }) || (0, n.n)(function() {
        return self
      }) || (0, n.n)(function() {
        return r.g
      }) || (0, n.n)(function() {
        return n.n.constructor("return this")()
      })
    },
    3023(e, t, r) {
      "use strict";
      r.d(t, {
        Sf: () => o.A,
        V1: () => n.V1,
        no: () => i.n,
        vA: () => n.vA
      });
      var n = r(8942),
        i = r(6327),
        o = r(4128);
      globalThis.__DEV__
    },
    8942(e, t, r) {
      "use strict";
      r.d(t, {
        V1: () => m,
        vA: () => b
      });
      var n = r(1177),
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

      function d(e) {
        return function() {
          if (l.indexOf(e) >= f) return (console[e] || console.log).apply(console, arguments)
        }
      }(c = u || (u = {})).debug = d("debug"), c.log = d("log"), c.warn = d("warn"), c.error = d("error");
      var h = r(4915),
        p = r(4128),
        v = r(1778);

      function y(e) {
        return function(t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = _(i)) || (t = E(i, r), r = [])
          }
          e.apply(void 0, [t].concat(r))
        }
      }
      var m = Object.assign(function(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        e || u(e, _(t, r) || E(t, r))
      }, {
        debug: y(u.debug),
        log: y(u.log),
        warn: y(u.warn),
        error: y(u.error)
      });

      function b(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return new s(_(e, t) || E(e, t))
      }
      var g = Symbol.for("ApolloErrorMessageHandler_" + h.r);

      function w(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, v.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function _(e, t) {
        if (void 0 === t && (t = []), e) return p.A[g] && p.A[g](e, t.map(w))
      }

      function E(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: h.r,
          message: e,
          args: t.map(w)
        })))
      }
    },
    6327(e, t, r) {
      "use strict";

      function n(e) {
        try {
          return e()
        } catch (e) {}
      }
      r.d(t, {
        n: () => n
      })
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
        u = r(9131),
        c = r(8460);

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
            this.performWork = (0, u.LV)(e.prototype.performWork.bind(this), {
              makeCacheKey: function(e) {
                var n = t.getCacheKey(e);
                if (n) return (0, a.V1)(Array.isArray(n), 104), r.lookupArray(n)
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
        f2: () => u,
        s7: () => c
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

      function u(e) {
        return e && s(["client", "export"], e, !0)
      }

      function c(e) {
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
        HQ: () => u,
        JG: () => s,
        ct: () => a,
        s6: () => c
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

      function u(e, t) {
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

      function c(e) {
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
        AT: () => c,
        E4: () => l,
        Vn: () => f,
        Vu: () => a,
        n4: () => s,
        sw: () => o,
        wY: () => d,
        zK: () => u
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

      function u(e) {
        return e.definitions.filter(function(e) {
          return "FragmentDefinition" === e.kind
        })
      }

      function c(e) {
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

      function d(e) {
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
        y: () => b
      });
      var n = r(6368);
      const i = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

      function o(e) {
        return a[e.charCodeAt(0)]
      }
      const a = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];
      var s = r(7646);
      const u = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => c(e.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(e) {
            const t = h(e.variableDefinitions) ? f("(\n", c(e.variableDefinitions, "\n"), "\n)") : f("(", c(e.variableDefinitions, ", "), ")"),
              r = f("", e.description, "\n") + c([e.operation, c([e.name, t]), c(e.directives, " ")], " ");
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
          }) => f("", i, "\n") + e + ": " + t + f(" = ", r) + f(" ", c(n, " "))
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
            let a = o + f("(", c(r, ", "), ")");
            return a.length > 80 && (a = o + f("(\n", d(c(r, "\n")), "\n)")), c([a, c(n, " "), i], " ")
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
          }) => "..." + e + f(" ", c(t, " "))
        },
        InlineFragment: {
          leave: ({
            typeCondition: e,
            directives: t,
            selectionSet: r
          }) => c(["...", f("on ", e), c(t, " "), r], " ")
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: r,
            directives: n,
            selectionSet: i,
            description: o
          }) => f("", o, "\n") + `fragment ${e}${f("(",c(r,", "),")")} ` + `on ${t} ${f("",c(n," ")," ")}` + i
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
          }) => "[" + c(e, ", ") + "]"
        },
        ObjectValue: {
          leave: ({
            fields: e
          }) => "{" + c(e, ", ") + "}"
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
          }) => "@" + e + f("(", c(t, ", "), ")")
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
          }) => f("", e, "\n") + c(["schema", c(t, " "), l(r)], " ")
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
          }) => f("", e, "\n") + c(["scalar", t, c(r, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          }) => f("", e, "\n") + c(["type", t, f("implements ", c(r, " & ")), c(n, " "), l(i)], " ")
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            type: n,
            directives: i
          }) => f("", e, "\n") + t + (h(r) ? f("(\n", d(c(r, "\n")), "\n)") : f("(", c(r, ", "), ")")) + ": " + n + f(" ", c(i, " "))
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: r,
            defaultValue: n,
            directives: i
          }) => f("", e, "\n") + c([t + ": " + r, f("= ", n), c(i, " ")], " ")
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          }) => f("", e, "\n") + c(["interface", t, f("implements ", c(r, " & ")), c(n, " "), l(i)], " ")
        },
        UnionTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            types: n
          }) => f("", e, "\n") + c(["union", t, c(r, " "), f("= ", c(n, " | "))], " ")
        },
        EnumTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            values: n
          }) => f("", e, "\n") + c(["enum", t, c(r, " "), l(n)], " ")
        },
        EnumValueDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r
          }) => f("", e, "\n") + c([t, c(r, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            fields: n
          }) => f("", e, "\n") + c(["input", t, c(r, " "), l(n)], " ")
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            repeatable: n,
            locations: i
          }) => f("", e, "\n") + "directive @" + t + (h(r) ? f("(\n", d(c(r, "\n")), "\n)") : f("(", c(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + c(i, " | ")
        },
        SchemaExtension: {
          leave: ({
            directives: e,
            operationTypes: t
          }) => c(["extend schema", c(e, " "), l(t)], " ")
        },
        ScalarTypeExtension: {
          leave: ({
            name: e,
            directives: t
          }) => c(["extend scalar", e, c(t, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: r,
            fields: n
          }) => c(["extend type", e, f("implements ", c(t, " & ")), c(r, " "), l(n)], " ")
        },
        InterfaceTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: r,
            fields: n
          }) => c(["extend interface", e, f("implements ", c(t, " & ")), c(r, " "), l(n)], " ")
        },
        UnionTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            types: r
          }) => c(["extend union", e, c(t, " "), f("= ", c(r, " | "))], " ")
        },
        EnumTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            values: r
          }) => c(["extend enum", e, c(t, " "), l(r)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            fields: r
          }) => c(["extend input", e, c(t, " "), l(r)], " ")
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
          }) => c([e, f(".", t)])
        },
        ArgumentCoordinate: {
          leave: ({
            name: e,
            fieldName: t,
            argumentName: r
          }) => c([e, f(".", t), f("(", r, ":)")])
        },
        DirectiveCoordinate: {
          leave: ({
            name: e
          }) => c(["@", e])
        },
        DirectiveArgumentCoordinate: {
          leave: ({
            name: e,
            argumentName: t
          }) => c(["@", e, f("(", t, ":)")])
        }
      };

      function c(e, t = "") {
        var r;
        return null !== (r = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== r ? r : ""
      }

      function l(e) {
        return f("{\n", d(c(e, "\n")), "\n}")
      }

      function f(e, t, r = "") {
        return null != t && "" !== t ? e + t + r : ""
      }

      function d(e) {
        return f("  ", e.replace(/\n/g, "\n  "))
      }

      function h(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
      }
      var p, v = r(5879),
        y = r(8460),
        m = r(8603),
        b = Object.assign(function(e) {
          var t = p.get(e);
          return t || (t = function(e) {
            return (0, s.YR)(e, u)
          }(e), p.set(e, t)), t
        }, {
          reset: function() {
            p = new v.A(y.v.print || 2e3)
          }
        });
      b.reset(), !1 !== globalThis.__DEV__ && (0, m.D_)("print", function() {
        return p ? p.size : 0
      })
    },
    3946(e, t, r) {
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
      var n = r(3023),
        i = r(1384),
        o = r(5404),
        a = r(2573);

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
      var d = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"],
        h = a.M,
        p = Object.assign(function(e, t, r) {
          if (t && r && r.connection && r.connection.key) {
            if (r.connection.filter && r.connection.filter.length > 0) {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return n.forEach(function(e) {
                i[e] = t[e]
              }), "".concat(r.connection.key, "(").concat(h(i), ")")
            }
            return r.connection.key
          }
          var o = e;
          if (t) {
            var a = h(t);
            o += "(".concat(a, ")")
          }
          return r && Object.keys(r).forEach(function(e) {
            -1 === d.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(h(r[e]), ")") : o += "@".concat(e))
          }), o
        }, {
          setStringify: function(e) {
            var t = h;
            return h = e, t
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
    2846(e, t, r) {
      "use strict";
      r.d(t, {
        XY: () => y,
        er: () => b,
        iz: () => v,
        x3: () => g,
        zc: () => m
      });
      var n = r(1177),
        i = r(3023),
        o = r(5425),
        a = r(7646),
        s = r(6408),
        u = r(3946),
        c = r(5404),
        l = r(7540),
        f = {
          kind: o.b.FIELD,
          name: {
            kind: o.b.NAME,
            value: "__typename"
          }
        };

      function d(e, t) {
        return !e || e.selectionSet.selections.every(function(e) {
          return e.kind === o.b.FRAGMENT_SPREAD && d(t[e.name.value], t)
        })
      }

      function h(e) {
        return d((0, s.Vu)(e) || (0, s.E4)(e), (0, c.JG)((0, s.zK)(e))) ? null : e
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
        for (var r = p(""), u = p(""), c = function(e) {
            for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
              if (!(0, l.c)(n)) {
                if (n.kind === o.b.OPERATION_DEFINITION) return r(n.name && n.name.value);
                if (n.kind === o.b.FRAGMENT_DEFINITION) return u(n.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(124), null
          }, f = 0, d = t.definitions.length - 1; d >= 0; --d) t.definitions[d].kind === o.b.OPERATION_DEFINITION && ++f;
        var v, y, m, b = (v = e, y = new Map, m = new Map, v.forEach(function(e) {
            e && (e.name ? y.set(e.name, e) : e.test && m.set(e.test, e))
          }), function(e) {
            var t = y.get(e.name.value);
            return !t && m.size && m.forEach(function(r, n) {
              n(e) && (t = r)
            }), t
          }),
          g = function(e) {
            return (0, l.E)(e) && e.map(b).some(function(e) {
              return e && e.remove
            })
          },
          w = new Map,
          _ = !1,
          E = {
            enter: function(e) {
              if (g(e.directives)) return _ = !0, null
            }
          },
          T = (0, a.YR)(t, {
            Field: E,
            InlineFragment: E,
            VariableDefinition: {
              enter: function() {
                return !1
              }
            },
            Variable: {
              enter: function(e, t, r, n, i) {
                var o = c(i);
                o && o.variables.add(e.name.value)
              }
            },
            FragmentSpread: {
              enter: function(e, t, r, n, i) {
                if (g(e.directives)) return _ = !0, null;
                var o = c(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                w.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === w.get(JSON.stringify(n)) ? e : f > 0 && e.selectionSet.selections.every(function(e) {
                  return e.kind === o.b.FIELD && "__typename" === e.name.value
                }) ? (u(e.name.value).removed = !0, _ = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (b(e)) return _ = !0, null
              }
            }
          });
        if (!_) return t;
        var k = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(t) {
              k(u(t)).transitiveVars.forEach(function(t) {
                e.transitiveVars.add(t)
              })
            })), e
          },
          O = new Set;
        T.definitions.forEach(function(e) {
          e.kind === o.b.OPERATION_DEFINITION ? k(r(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
            O.add(e)
          }) : e.kind !== o.b.FRAGMENT_DEFINITION || 0 !== f || u(e.name.value).removed || O.add(e.name.value)
        }), O.forEach(function(e) {
          k(u(e)).fragmentSpreads.forEach(function(e) {
            O.add(e)
          })
        });
        var x = {
          enter: function(e) {
            if (t = e.name.value, !O.has(t) || u(t).removed) return null;
            var t
          }
        };
        return h((0, a.YR)(T, {
          FragmentSpread: x,
          FragmentDefinition: x,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var t = k(r(e.name && e.name.value)).transitiveVars;
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
                    return (0, u.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  })) {
                  var a = r;
                  if (!((0, u.dt)(a) && a.directives && a.directives.some(function(e) {
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

      function b(e) {
        return (0, s.sw)(e), v([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }

      function g(e) {
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
    4915(e, t, r) {
      "use strict";
      r.d(t, {
        r: () => n
      });
      var n = "3.14.1"
    },
    9190(e, t, r) {
      "use strict";

      function n() {}
      r.d(t, {
        C: () => i
      });
      class i {
        constructor(e = 1 / 0, t = n) {
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
    85(e, t, r) {
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
            if (h(e, t)) return !0;
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
            return +e === +t;
          case "[object RegExp]":
          case "[object String]":
            return e == `${t}`;
          case "[object Map]":
          case "[object Set]": {
            if (e.size !== t.size) return !1;
            if (h(e, t)) return !0;
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
            }(r, d)
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
      const d = "{ [native code] }";

      function h(e, t) {
        let r = a.get(e);
        if (r) {
          if (r.has(t)) return !0
        } else a.set(e, r = new Set);
        return r.add(t), !1
      }
    },
    7582(e, t, r) {
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
        constructor(e = !0, t = n) {
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return i.call(e, e => t = t.getChildTrie(e)), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
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
    5942(e, t, r) {
      "use strict";
      r.d(t, {
        sc: () => i
      });
      const n = e => async (t, {
        outputFormat: r = "hex"
      } = {}) => {
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
        cE: () => u,
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
      var u;
      ! function(e) {
        e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
      }(u || (u = {}))
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
            u = o(s);
          u !== s.length && (n = null !== (a = n) && void 0 !== a ? a : t, i = t, 0 !== t && u < r && (r = u))
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
          u = e.endsWith('"') && !s,
          c = e.endsWith("\\"),
          l = u || c,
          f = !(null != t && t.minimize) && (!o || e.length > 70 || l || a || s);
        let d = "";
        const h = o && (0, n.i0)(e.charCodeAt(0));
        return (f && !h || a) && (d += "\n"), d += r, (f || l) && (d += "\n"), '"""' + d + '"""'
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
        YR: () => u,
        sP: () => s
      });
      var n = r(3227),
        i = r(7196),
        o = r(404),
        a = r(5425);
      const s = Object.freeze({});

      function u(e, t, r = o.aD) {
        const u = new Map;
        for (const e of Object.values(a.b)) u.set(e, c(t, e));
        let l, f, d, h = Array.isArray(e),
          p = [e],
          v = -1,
          y = [],
          m = e;
        const b = [],
          g = [];
        do {
          v++;
          const e = v === p.length,
            a = e && 0 !== y.length;
          if (e) {
            if (f = 0 === g.length ? void 0 : b[b.length - 1], m = d, d = g.pop(), a)
              if (h) {
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
              } v = l.index, p = l.keys, y = l.edits, h = l.inArray, l = l.prev
          } else if (d) {
            if (f = h ? v : p[v], m = d[f], null == m) continue;
            b.push(f)
          }
          let c;
          if (!Array.isArray(m)) {
            var w, _;
            (0, o.Ll)(m) || (0, n.U)(!1, `Invalid AST Node: ${(0,i.N)(m)}.`);
            const r = e ? null === (w = u.get(m.kind)) || void 0 === w ? void 0 : w.leave : null === (_ = u.get(m.kind)) || void 0 === _ ? void 0 : _.enter;
            if (c = null == r ? void 0 : r.call(t, m, f, d, b, g), c === s) break;
            if (!1 === c) {
              if (!e) {
                b.pop();
                continue
              }
            } else if (void 0 !== c && (y.push([f, c]), !e)) {
              if (!(0, o.Ll)(c)) {
                b.pop();
                continue
              }
              m = c
            }
          }
          var E;
          void 0 === c && a && y.push([f, m]), e ? b.pop() : (l = {
            inArray: h,
            index: v,
            keys: p,
            edits: y,
            prev: l
          }, h = Array.isArray(m), p = h ? m : null !== (E = r[m.kind]) && void 0 !== E ? E : [], v = -1, y = [], d && g.push(d), d = m)
        } while (void 0 !== l);
        return 0 !== y.length ? y[y.length - 1][1] : e
      }

      function c(e, t) {
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
    3568(e, t, r) {
      "use strict";

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) e[n] = r[n]
        }
        return e
      }
      r.d(t, {
        A: () => i
      });
      var i = function e(t, r) {
        function i(e, i, o) {
          if ("undefined" != typeof document) {
            "number" == typeof(o = n({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return document.cookie = e + "=" + t.write(i, e) + a
          }
        }
        return Object.create({
          set: i,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < r.length; i++) {
                var o = r[i].split("="),
                  a = o.slice(1).join("=");
                try {
                  var s = decodeURIComponent(o[0]);
                  if (n[s] = t.read(a, s), e === s) break
                } catch (e) {}
              }
              return e ? n[e] : n
            }
          },
          remove: function(e, t) {
            i(e, "", n({}, t, {
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
    4242(e, t, r) {
      "use strict";
      r.d(t, {
        s: () => i
      });
      class n extends Error {}

      function i(e, t) {
        if ("string" != typeof e) throw new n("Invalid token specified: must be a string");
        t || (t = {});
        const r = !0 === t.header ? 0 : 1,
          i = e.split(".")[r];
        if ("string" != typeof i) throw new n(`Invalid token specified: missing part #${r+1}`);
        let o;
        try {
          o = function(e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, t) => {
                  let r = t.charCodeAt(0).toString(16).toUpperCase();
                  return r.length < 2 && (r = "0" + r), "%" + r
                }))
              }(t)
            } catch (e) {
              return atob(t)
            }
          }(i)
        } catch (e) {
          throw new n(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new n(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)
        }
      }
      n.prototype.name = "InvalidTokenError"
    },
    628(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var n = r(8774);
      const i = function(e) {
        return (0, n.A)(e, 4)
      }
    },
    9098(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => m
      });
      var n = r(5862),
        i = r(4336);
      const o = function() {
        return i.A.Date.now()
      };
      var a = /\s/;
      var s = /^\s+/;
      const u = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && a.test(e.charAt(t)););
          return t
        }(e) + 1).replace(s, "") : e
      };
      var c = r(617),
        l = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        h = parseInt;
      const p = function(e) {
        if ("number" == typeof e) return e;
        if ((0, c.A)(e)) return NaN;
        if ((0, n.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, n.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = u(e);
        var r = f.test(e);
        return r || d.test(e) ? h(e.slice(2), r ? 2 : 8) : l.test(e) ? NaN : +e
      };
      var v = Math.max,
        y = Math.min;
      const m = function(e, t, r) {
        var i, a, s, u, c, l, f = 0,
          d = !1,
          h = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var r = i,
            n = a;
          return i = a = void 0, f = t, u = e.apply(n, r)
        }

        function g(e) {
          var r = e - l;
          return void 0 === l || r >= t || r < 0 || h && e - f >= s
        }

        function w() {
          var e = o();
          if (g(e)) return _(e);
          c = setTimeout(w, function(e) {
            var r = t - (e - l);
            return h ? y(r, s - (e - f)) : r
          }(e))
        }

        function _(e) {
          return c = void 0, m && i ? b(e) : (i = a = void 0, u)
        }

        function E() {
          var e = o(),
            r = g(e);
          if (i = arguments, a = this, l = e, r) {
            if (void 0 === c) return function(e) {
              return f = e, c = setTimeout(w, t), d ? b(e) : u
            }(l);
            if (h) return clearTimeout(c), c = setTimeout(w, t), b(l)
          }
          return void 0 === c && (c = setTimeout(w, t)), u
        }
        return t = p(t) || 0, (0, n.A)(r) && (d = !!r.leading, s = (h = "maxWait" in r) ? v(p(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m), E.cancel = function() {
          void 0 !== c && clearTimeout(c), f = 0, i = l = a = c = void 0
        }, E.flush = function() {
          return void 0 === c ? u : _(o())
        }, E
      }
    },
    6065(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var n = r(2174);
      const i = function(e, t, r) {
        var i = null == e ? void 0 : (0, n.A)(e, t);
        return void 0 === i ? r : i
      }
    },
    2088(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var n = r(570),
        i = r(1105),
        o = r(8348),
        a = r(6700),
        s = r(9651),
        u = r(7269),
        c = r(1044),
        l = r(312),
        f = Object.prototype.hasOwnProperty;
      const d = function(e) {
        if (null == e) return !0;
        if ((0, s.A)(e) && ((0, a.A)(e) || "string" == typeof e || "function" == typeof e.splice || (0, u.A)(e) || (0, l.A)(e) || (0, o.A)(e))) return !e.length;
        var t = (0, i.A)(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if ((0, c.A)(e)) return !(0, n.A)(e).length;
        for (var r in e)
          if (f.call(e, r)) return !1;
        return !0
      }
    },
    9131(e, t, r) {
      "use strict";
      r.d(t, {
        DX: () => f,
        yN: () => F,
        LV: () => q
      });
      var n = r(7582),
        i = r(9190);
      let o = null;
      const a = {};
      let s = 1;

      function u(e) {
        try {
          return e()
        } catch (e) {}
      }
      const c = "@wry/context:Slot",
        l = u(() => globalThis) || u(() => r.g) || Object.create(null),
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
          bind: d,
          noContext: h
        } = f,
        p = new f,
        {
          hasOwnProperty: v
        } = Object.prototype,
        y = Array.from || function(e) {
          const t = [];
          return e.forEach(e => t.push(e)), t
        };

      function m(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const b = [];

      function g(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function w(e, t) {
        const r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1]
      }

      function _(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function E(e) {
        return e.slice(0)
      }
      class T {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++T.count
        }
        peek() {
          if (1 === this.value.length && !x(this)) return k(this), this.value[0]
        }
        recompute(e) {
          return g(!this.recomputing, "already recomputing"), k(this), x(this) ? function(e, t) {
            return R(e), p.withValue(e, O, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  m(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, x(e) || S(e)
              }(e), _(e.value)
          }(this, e) : _(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, C(this), m(this))
        }
        dispose() {
          this.setDirty(), R(this), D(this, (e, t) => {
            e.setDirty(), P(e, this)
          })
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = b.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (y(this.deps).forEach(e => e.delete(this)), this.deps.clear(), b.push(this.deps), this.deps = null)
        }
      }

      function k(e) {
        const t = p.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), x(e) ? A(t, e) : N(t, e), t
      }

      function O(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: r
        } = e;
        let n;
        r && 1 === e.value.length && (n = E(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), r && n && !w(n, e.value)) try {
            e.value[0] = r(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function x(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function C(e) {
        D(e, A)
      }

      function S(e) {
        D(e, N)
      }

      function D(e, t) {
        const r = e.parents.size;
        if (r) {
          const n = y(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e)
        }
      }

      function A(e, t) {
        g(e.childValues.has(t)), g(x(t));
        const r = !x(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = b.pop() || new Set;
        e.dirtyChildren.add(t), r && C(e)
      }

      function N(e, t) {
        g(e.childValues.has(t)), g(!x(t));
        const r = e.childValues.get(t);
        0 === r.length ? e.childValues.set(t, E(t.value)) : w(r, t.value) || e.setDirty(), I(e, t), x(e) || S(e)
      }

      function I(e, t) {
        const r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (b.length < 100 && b.push(r), e.dirtyChildren = null))
      }

      function R(e) {
        e.childValues.size > 0 && e.childValues.forEach((t, r) => {
          P(e, r)
        }), e.forgetDeps(), g(null === e.dirtyChildren)
      }

      function P(e, t) {
        t.parents.delete(e), e.childValues.delete(t), I(e, t)
      }
      T.count = 0;
      const M = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function F(e) {
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
            const i = r && v.call(M, r) ? r : "setDirty";
            y(n).forEach(e => e[i]()), t.delete(e), m(n)
          }
        }, n
      }
      let V;

      function L(...e) {
        return (V || (V = new n.b("function" == typeof WeakMap))).lookupArray(e)
      }
      const j = new Set;

      function q(e, {
        max: t = Math.pow(2, 16),
        keyArgs: r,
        makeCacheKey: n = L,
        normalizeResult: o,
        subscribe: a,
        cache: s = i.C
      } = Object.create(null)) {
        const u = "function" == typeof s ? new s(t, e => e.dispose()) : s,
          c = function() {
            const t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let i = u.get(t);
            i || (u.set(t, i = new T(e)), i.normalizeResult = o, i.subscribe = a, i.forget = () => u.delete(t));
            const s = i.recompute(Array.prototype.slice.call(arguments));
            return u.set(t, i), j.add(u), p.hasValue() || (j.forEach(e => e.clean()), j.clear()), s
          };

        function l(e) {
          const t = e && u.get(e);
          t && t.setDirty()
        }

        function f(e) {
          const t = e && u.get(e);
          if (t) return t.peek()
        }

        function d(e) {
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
        }, c.forgetKey = d, c.forget = function() {
          return d(n.apply(null, arguments))
        }, c.makeCacheKey = n, c.getKey = r ? function() {
          return n.apply(null, r.apply(null, arguments))
        } : n, Object.freeze(c)
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
        c: () => T
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

      function d(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw new TypeError(r + " is not a function");
          return r
        }
      }

      function h(e) {
        var t = e.constructor;
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : T
      }

      function p(e) {
        return e instanceof T
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
            var r = d(t, "unsubscribe");
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
          var i = d(n, t);
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
          }], void y(function() {
            return function(e) {
              var t = e._queue;
              if (t) {
                e._queue = void 0, e._state = "ready";
                for (var r = 0; r < t.length && (g(e, t[r].type, t[r].value), "closed" !== e._state); ++r);
              }
            }(e)
          })) : void g(e, t, r);
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
        T = function() {
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
            return new(h(this))(function(r) {
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
            return new(h(this))(function(r) {
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
            var r = h(this),
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
            var i = h(this);
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
            var r = h(this);
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
            var i = d(t, l);
            if (i) {
              var o = i.call(t);
              if (Object(o) !== o) throw new TypeError(o + " is not an object");
              return p(o) && o.constructor === r ? o : new r(function(e) {
                return o.subscribe(e)
              })
            }
            if (s("iterator") && (i = d(t, c))) return new r(function(e) {
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
      a() && Object.defineProperty(T, Symbol("extensions"), {
        value: {
          symbol: l,
          hostReportError: v
        },
        configurable: !0
      })
    }
  }
]);