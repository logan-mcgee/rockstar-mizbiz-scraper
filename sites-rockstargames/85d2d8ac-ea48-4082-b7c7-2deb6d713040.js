try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "85d2d8ac-ea48-4082-b7c7-2deb6d713040", e._sentryDebugIdIdentifier = "sentry-dbid-85d2d8ac-ea48-4082-b7c7-2deb6d713040")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1876, 6597], {
    23058(e) {
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
      r(n, "ONETRUST_LOADED_EVENT", () => i), r(n, "WRAPPER_CALLED_EVENT", () => s), r(n, "CONSENT_CHANGED_EVENT", () => a), r(n, "init", () => c);
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        s = "WRAPPER_CALLED_EVENT",
        a = "CONSENT_CHANGED_EVENT";
      let u = !0;

      function c(e) {
        const t = window.document.head,
          r = window.document.createElement("script");
        if (r.setAttribute("id", "onetrust-sdk-stub"), r.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("charset", "UTF-8"), r.setAttribute("data-document-language", "true"), o && (r.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        r.setAttribute("data-domain-script", e), t.insertBefore(r, t.firstChild), window.OptanonWrapper = function() {
          u && (u = !1, window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(s, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(a, {
              bubbles: !0
            }))
          })
        }
      }
      var d = {};
      r(d, "NoChoiceTransactionType", () => f), r(d, "ConfirmedTransactionType", () => l), r(d, "canStoreCookie", () => h);
      const f = "NO_CHOICE",
        l = "CONFIRMED";

      function h(e, t = null) {
        if (!window.OneTrust) return !1;
        const r = window.OneTrust.GetDomainData(),
          n = r.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!n) {
          const r = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(r), !1
        }
        if ("always active" === n.Status) return !0;
        const o = r.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === n.PurposeId);
        return o?.TransactionType === l
      }
      t(e.exports, n), t(e.exports, d)
    },
    39647(e, t, r) {
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
          if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            d = ArrayBuffer.isView || function(e) {
              return e && c.indexOf(Object.prototype.toString.call(e)) > -1
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
            this.map = {}, e instanceof p ? e.forEach(function(e, t) {
              this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
              if (2 != e.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e.length);
              this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
              this.append(t, e[t])
            }, this)
          }

          function y(e) {
            if (!e._noBody) return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
          }

          function b(e) {
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
              r = b(t);
            return t.readAsArrayBuffer(e), r
          }

          function w(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function g() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && s && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = w(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || d(e)) ? this._bodyArrayBuffer = w(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
              return this.text().then(_)
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
          }, i && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var v = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function E(e, t) {
            if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, o, i = (t = t || {}).body;
            if (e instanceof E) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (o = (r = t.method || this.method || "GET").toUpperCase(), v.indexOf(o) > -1 ? o : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in n) return (new AbortController).signal
              }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
              var s = /([?&])_=[^&]*/;
              s.test(this.url) ? this.url = this.url.replace(s, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
          }

          function _(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
              if (e) {
                var r = e.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  o = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(o))
              }
            }), t
          }

          function T(e, t) {
            if (!(this instanceof T)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
          }
          E.prototype.clone = function() {
            return new E(this, {
              body: this._bodyInit
            })
          }, g.call(E.prototype), g.call(T.prototype), T.prototype.clone = function() {
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
          var O = [301, 302, 303, 307, 308];
          T.redirect = function(e, t) {
            if (-1 === O.indexOf(t)) throw new RangeError("Invalid status code");
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

          function A(e, r) {
            return new Promise(function(o, i) {
              var a = new E(e, r);
              if (a.signal && a.signal.aborted) return i(new t.DOMException("Aborted", "AbortError"));
              var c = new XMLHttpRequest;

              function d() {
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
                        var o = r.join(":").trim();
                        try {
                          t.append(n, o)
                        } catch (e) {
                          console.warn("Response " + e.message)
                        }
                      }
                    }), t)
                  };
                  0 === a.url.indexOf("file://") && (c.status < 200 || c.status > 599) ? r.status = 200 : r.status = c.status, r.url = "responseURL" in c ? c.responseURL : r.headers.get("X-Request-URL");
                  var n = "response" in c ? c.response : c.responseText;
                  setTimeout(function() {
                    o(new T(n, r))
                  }, 0)
                }, c.onerror = function() {
                  setTimeout(function() {
                    i(new TypeError("Network request failed"))
                  }, 0)
                }, c.ontimeout = function() {
                  setTimeout(function() {
                    i(new TypeError("Network request timed out"))
                  }, 0)
                }, c.onabort = function() {
                  setTimeout(function() {
                    i(new t.DOMException("Aborted", "AbortError"))
                  }, 0)
                }, c.open(a.method, function(e) {
                  try {
                    return "" === e && n.location.href ? n.location.href : e
                  } catch (t) {
                    return e
                  }
                }(a.url), !0), "include" === a.credentials ? c.withCredentials = !0 : "omit" === a.credentials && (c.withCredentials = !1), "responseType" in c && (s ? c.responseType = "blob" : u && (c.responseType = "arraybuffer")), r && "object" == typeof r.headers && !(r.headers instanceof p || n.Headers && r.headers instanceof n.Headers)) {
                var h = [];
                Object.getOwnPropertyNames(r.headers).forEach(function(e) {
                  h.push(f(e)), c.setRequestHeader(e, l(r.headers[e]))
                }), a.headers.forEach(function(e, t) {
                  -1 === h.indexOf(t) && c.setRequestHeader(t, e)
                })
              } else a.headers.forEach(function(e, t) {
                c.setRequestHeader(t, e)
              });
              a.signal && (a.signal.addEventListener("abort", d), c.onreadystatechange = function() {
                4 === c.readyState && a.signal.removeEventListener("abort", d)
              }), c.send(void 0 === a._bodyInit ? null : a._bodyInit)
            })
          }
          A.polyfill = !0, n.fetch || (n.fetch = A, n.Headers = p, n.Request = E, n.Response = T), t.Headers = p, t.Request = E, t.Response = T, t.fetch = A
        }({})
      }(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
      var i = n.fetch ? n : o;
      (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
    },
    76597(e) {
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
        return !1 !== t.clone && t.isMergeableObject(e) ? a((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function o(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function i(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function a(e, r, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || o, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? u.arrayMerge(e, r, u) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && i(e).forEach(function(t) {
            o[t] = n(e[t], r)
          }), i(t).forEach(function(i) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, i) || (s(e, i) && r.isMergeableObject(t[i]) ? o[i] = function(e, t) {
              if (!t.customMerge) return a;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : a
            }(i, r)(e[i], t[i], r) : o[i] = n(t[i], r))
          }), o
        }(e, r, u) : n(r, u)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return a(e, r, t)
        }, {})
      };
      var u = a;
      e.exports = u
    },
    24353(e, t, r) {
      "use strict";
      var n, o = (n = r(46157)) && n.__esModule ? n : {
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
    48664(e, t, r) {
      "use strict";
      var n, o = (n = r(24353)) && n.__esModule ? n : {
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
              c = e.preview,
              d = void 0 === c ? "" : c,
              f = this.gtm({
                id: t,
                events: n,
                dataLayer: o || void 0,
                dataLayerName: s,
                auth: u,
                preview: d
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
    81471(e, t, r) {
      "use strict";
      var n, o = (n = r(48664)) && n.__esModule ? n : {
        default: n
      };
      e.exports = o.default
    },
    46157(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    99164(e, t, r) {
      "use strict";
      r.d(t, {
        o: () => s
      });
      var n = r(51177),
        o = r(6964),
        i = r(47593);

      function s(e) {
        return new o.C(function(t, r) {
          var o = (0, n.Tt)(t, []);
          return new i.c(function(n) {
            var i, s = !1;
            return Promise.resolve(o).then(function(r) {
                return e(r, t.getContext())
              }).then(t.setContext).then(function() {
                s || (i = r(t).subscribe({
                  next: n.next.bind(n),
                  error: n.error.bind(n),
                  complete: n.complete.bind(n)
                }))
              }).catch(n.error.bind(n)),
              function() {
                s = !0, i && i.unsubscribe()
              }
          })
        })
      }
    },
    70945(e, t, r) {
      "use strict";
      r.d(t, {
        S: () => a
      });
      var n = r(51177),
        o = r(75227),
        i = r(47593),
        s = r(6964);

      function a(e) {
        return new s.C(function(t, r) {
          return new i.c(function(n) {
            var i, s, a;
            try {
              i = r(t).subscribe({
                next: function(i) {
                  i.errors ? a = e({
                    graphQLErrors: i.errors,
                    response: i,
                    operation: t,
                    forward: r
                  }) : (0, o.uR)(i) && (a = e({
                    protocolErrors: i.extensions[o.K$],
                    response: i,
                    operation: t,
                    forward: r
                  })), a ? s = a.subscribe({
                    next: n.next.bind(n),
                    error: n.error.bind(n),
                    complete: n.complete.bind(n)
                  }) : n.next(i)
                },
                error: function(o) {
                  (a = e({
                    operation: t,
                    networkError: o,
                    graphQLErrors: o && o.result && o.result.errors || void 0,
                    forward: r
                  })) ? s = a.subscribe({
                    next: n.next.bind(n),
                    error: n.error.bind(n),
                    complete: n.complete.bind(n)
                  }): n.error(o)
                },
                complete: function() {
                  a || n.complete.bind(n)()
                }
              })
            } catch (o) {
              e({
                networkError: o,
                operation: t,
                forward: r
              }), n.error(o)
            }
            return function() {
              i && i.unsubscribe(), s && i.unsubscribe()
            }
          })
        })
      }! function(e) {
        function t(t) {
          var r = e.call(this) || this;
          return r.link = a(t), r
        }(0, n.C6)(t, e), t.prototype.request = function(e, t) {
          return this.link.request(e, t)
        }
      }(s.C)
    },
    70735(e, t, r) {
      "use strict";
      r.d(t, {
        e: () => p
      });
      var n = r(51177),
        o = r(23023),
        i = r(58629),
        s = r(6964),
        a = r(47593),
        u = r(37540),
        c = r(95593),
        d = r(25879),
        f = r(58460);

      function l(e) {
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
          }(0, o.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 55);
          var p = (0, c.o)(h, e),
            y = p.sha256,
            b = p.generateHash,
            m = void 0 === b ? function(e) {
              return Promise.resolve(y((0, i.y)(e)))
            } : b,
            w = p.disable,
            g = p.retry,
            v = p.useGETForHashedQueries,
            E = !0,
            _ = function(e) {
              return new Promise(function(t) {
                return t(m(e))
              })
            };
          return Object.assign(new s.C(function(e, i) {
            (0, o.V1)(i, 56);
            var s = e.query;
            return new a.c(function(o) {
              var a, c, h = !1,
                p = !1,
                y = function(t, n) {
                  var o = t.response,
                    s = t.networkError;
                  if (!h && (o && o.errors || s)) {
                    h = !0;
                    var d = [],
                      f = o && o.errors;
                    (0, u.E)(f) && d.push.apply(d, f);
                    var y = void 0;
                    "string" != typeof(null == s ? void 0 : s.result) && (y = s && s.result && s.result.errors), (0, u.E)(y) && d.push.apply(d, y);
                    var m = {
                      response: o,
                      networkError: s,
                      operation: e,
                      graphQLErrors: (0, u.E)(d) ? d : void 0,
                      meta: l(d)
                    };
                    if ((E = !w(m)) || r(), g(m)) return a && a.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: E
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), p && e.setContext({
                      fetchOptions: c
                    }), void(a = i(e).subscribe(b))
                  }
                  n()
                },
                b = {
                  next: function(e) {
                    y({
                      response: e
                    }, function() {
                      return o.next(e)
                    })
                  },
                  error: function(e) {
                    y({
                      networkError: e
                    }, function() {
                      return o.error(e)
                    })
                  },
                  complete: o.complete.bind(o)
                };
              return e.setContext({
                  http: {
                    includeQuery: !E,
                    includeExtensions: E
                  }
                }), v && E && ! function(e) {
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
                }), p = !0), E ? function(e) {
                  if (!e || "object" != typeof e) return _(e);
                  t || (t = new d.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var r = t.get(e);
                  return r || t.set(e, r = _(e)), r
                }(s).then(function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, a = i(e).subscribe(b)
                }).catch(o.error.bind(o)) : a = i(e).subscribe(b),
                function() {
                  a && a.unsubscribe()
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
    50628(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var n = r(70278);
      const o = function(e) {
        return (0, n.A)(e, 4)
      }
    },
    26065(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var n = r(99793);
      const o = function(e, t, r) {
        var o = null == e ? void 0 : (0, n.A)(e, t);
        return void 0 === o ? r : o
      }
    }
  }
]);