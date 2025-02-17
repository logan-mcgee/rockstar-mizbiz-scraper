! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "609c6927-f56b-4bb4-aef5-cdc1d400ddae", e._sentryDebugIdIdentifier = "sentry-dbid-609c6927-f56b-4bb4-aef5-cdc1d400ddae")
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
  [8496], {
    29040: e => {
      function t(e, t) {
        return Object.keys(t).forEach((function(r) {
          "default" === r || "__esModule" === r || e.hasOwnProperty(r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
              return t[r]
            }
          })
        })), e
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
      r(n, "ONETRUST_LOADED_EVENT", (() => o)), r(n, "WRAPPER_CALLED_EVENT", (() => a)), r(n, "CONSENT_CHANGED_EVENT", (() => s)), r(n, "init", (() => c));
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
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(s, {
              bubbles: !0
            }))
          }))
        }
      }
      var l = {};
      r(l, "NoChoiceTransactionType", (() => f)), r(l, "ConfirmedTransactionType", (() => h)), r(l, "canStoreCookie", (() => p));
      const f = "NO_CHOICE",
        h = "CONFIRMED",
        d = {
          AlwaysActive: "always active"
        };

      function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!window.OneTrust) return !1;
        const r = window.OneTrust.GetDomainData(),
          n = r.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!n) {
          const r = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(r), !1
        }
        if (n.Status === d.AlwaysActive) return !0;
        const i = r.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === n.PurposeId));
        return i?.TransactionType === h
      }
      t(e.exports, n), t(e.exports, l)
    },
    62600: (e, t, r) => {
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

          function g(e) {
            var t = new FileReader,
              r = y(t);
            return t.readAsArrayBuffer(e), r
          }

          function m(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function b() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && a && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = m(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, a && (this.blob = function() {
              var e = v(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]))
            }), this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) return v(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
              if (a) return this.blob().then(g);
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
          var _ = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function w(e, t) {
            if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, i, o = (t = t || {}).body;
            if (e instanceof w) {
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
          w.prototype.clone = function() {
            return new w(this, {
              body: this._bodyInit
            })
          }, b.call(w.prototype), b.call(O.prototype), O.prototype.clone = function() {
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
              var s = new w(e, r);
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
          k.polyfill = !0, n.fetch || (n.fetch = k, n.Headers = p, n.Request = w, n.Response = O), t.Headers = p, t.Request = w, t.Response = O, t.fetch = k
        }({})
      }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
    },
    75322: (e, t, r) => {
      "use strict";
      r.d(t, {
        J1: () => f
      });
      var n = r(63461),
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
          })), (0, n.__assign)((0, n.__assign)({}, t), {
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
    67690: (e, t, r) => {
      "use strict";
      var n, i = (n = r(87070)) && n.__esModule ? n : {
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
    85863: (e, t, r) => {
      "use strict";
      var n, i = (n = r(67690)) && n.__esModule ? n : {
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
    84842: (e, t, r) => {
      "use strict";
      var n, i = (n = r(85863)) && n.__esModule ? n : {
        default: n
      };
      e.exports = i.default
    },
    87070: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    93186: (e, t, r) => {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(62229))
    },
    92217: (e, t, r) => {
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
    7711: (e, t, r) => {
      "use strict";
      r.d(t, {
        D: () => Ce
      });
      var n = r(63461),
        i = r(64600),
        o = r(3076),
        a = r(67848),
        s = r(60496),
        u = r(98867),
        c = r(28265),
        l = r(46686),
        f = r(31447),
        h = r(36107),
        d = r(51018),
        p = r(52011),
        v = r(30503),
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
            return void 0 === t && (t = !!e.optimistic), this.read((0, n.__assign)((0, n.__assign)({}, e), {
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
              h = (0, n.__rest)(e, ["fragment", "fragmentName", "from", "optimistic"]),
              d = this.getFragmentDoc(r, o),
              y = void 0 === a || "string" == typeof a ? a : this.identify(a),
              g = !!e[Symbol.for("apollo.dataMasking")];
            if (!1 !== globalThis.__DEV__) {
              var m = o || (0, c.E4)(r).name.value;
              y || !1 !== globalThis.__DEV__ && i.V1.warn(1, m)
            }
            var b, _ = (0, n.__assign)((0, n.__assign)({}, h), {
              returnPartialData: !0,
              id: y,
              query: d,
              optimistic: u
            });
            return new l.c((function(e) {
              return t.watch((0, n.__assign)((0, n.__assign)({}, _), {
                immediate: !0,
                callback: function(i) {
                  var a = g ? (0, v.z)(i.result, r, t, o) : i.result;
                  if (!b || !(0, p.a)(d, {
                      data: null == b ? void 0 : b.result
                    }, {
                      data: a
                    })) {
                    var s = {
                      data: a,
                      complete: !!i.complete
                    };
                    i.missing && (s.missing = (0, f.IM)(i.missing.map((function(e) {
                      return e.missing
                    })))), b = (0, n.__assign)((0, n.__assign)({}, i), {
                      result: a
                    }), e.next(s)
                  }
                }
              }))
            }))
          }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !!e.optimistic), this.read((0, n.__assign)((0, n.__assign)({}, e), {
              query: this.getFragmentDoc(e.fragment, e.fragmentName),
              rootId: e.id,
              optimistic: t
            }))
          }, e.prototype.writeQuery = function(e) {
            var t = e.id,
              r = e.data,
              i = (0, n.__rest)(e, ["id", "data"]);
            return this.write(Object.assign(i, {
              dataId: t || "ROOT_QUERY",
              result: r
            }))
          }, e.prototype.writeFragment = function(e) {
            var t = e.id,
              r = e.data,
              i = e.fragment,
              o = e.fragmentName,
              a = (0, n.__rest)(e, ["id", "data", "fragment", "fragmentName"]);
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
                return null == o ? i : (r.writeQuery((0, n.__assign)((0, n.__assign)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e.prototype.updateFragment = function(e, t) {
            return this.batch({
              update: function(r) {
                var i = r.readFragment(e),
                  o = t(i);
                return null == o ? i : (r.writeFragment((0, n.__assign)((0, n.__assign)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e
        }();
      !1 !== globalThis.__DEV__ && (y.prototype.getMemoryInternals = d.tQ);
      var g = function(e) {
          function t(r, n, i, o) {
            var a, s = e.call(this, r) || this;
            if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
              s.missing = s.message;
              for (var u = s.path.length - 1; u >= 0; --u) s.missing = ((a = {})[s.path[u]] = s.missing, a)
            } else s.missing = s.path;
            return s.__proto__ = t.prototype, s
          }
          return (0, n.__extends)(t, e), t
        }(Error),
        m = r(90306),
        b = r(75437),
        _ = r(24046),
        w = r(99086),
        E = r(84835),
        O = r(16565),
        S = r(74712),
        k = r(91444),
        T = r(80523),
        D = r(6076),
        x = r(94505),
        R = r(15784),
        A = r(91359),
        M = Object.prototype.hasOwnProperty;

      function C(e) {
        return null == e
      }

      function P(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = C(n) ? C(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), C(n) && !C(i) && (n = i), !C(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var j = {
        dataIdFromObject: P,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function I(e) {
        var t = e.canonizeResults;
        return void 0 === t ? j.canonizeResults : t
      }
      var F = /^[_a-z][_0-9a-z]*/i;

      function q(e) {
        var t = e.match(F);
        return t ? t[0] : e
      }

      function V(e, t, r) {
        return !!(0, x.U)(t) && ((0, A.c)(t) ? t.every((function(t) {
          return V(e, t, r)
        })) : e.selections.every((function(e) {
          if ((0, E.dt)(e) && (0, T.MS)(e, r)) {
            var n = (0, E.ue)(e);
            return M.call(t, n) && (!e.selectionSet || V(e.selectionSet, t[n], r))
          }
          return !0
        })))
      }

      function N(e) {
        return (0, x.U)(e) && !(0, E.A_)(e) && !(0, A.c)(e)
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
      var L = Object.create(null),
        z = function() {
          return L
        },
        B = Object.create(null),
        U = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, D.G)((0, E.A_)(e) ? r.get(e.__ref, t) : e && e[t])
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
            return (0, n.__assign)({}, this.data)
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
              var s = new f.ZI(Y).merge(o, a);
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
                      var p = d === z ? L : d((0, D.G)(h), (0, n.__assign)((0, n.__assign)({}, c), {
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
                          for (var y = !1, g = void 0, m = 0, b = p; m < b.length; m++) {
                            var _ = b[m];
                            if ((0, E.A_)(_)) {
                              if (y = !0, v(_)) break
                            } else "object" == typeof _ && _ && r.policies.identify(_)[0] && (g = _);
                            if (y && void 0 !== g) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, g);
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
                i = (0, n.__rest)(e, ["__META"]);
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
                (0, E.A_)(e) && (t[e.__ref] = !0), (0, x.U)(e) && Object.keys(e).forEach((function(t) {
                  var r = e[t];
                  (0, x.U)(r) && n.add(r)
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
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new R.b(S.et)
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
        $(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new W(i)) || this;
            return a.stump = new J(a), a.storageTrie = new R.b(S.et), o && a.replace(o), a
          }
          return (0, n.__extends)(t, e), t.prototype.addLayer = function(e, t) {
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
          return (0, n.__extends)(t, e), t.prototype.addLayer = function(e, r) {
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
            return (0, n.__assign)((0, n.__assign)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return M.call(this.data, t) ? (0, n.__assign)((0, n.__assign)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(U),
        J = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, (function() {}), new W(t.group.caching, t.group)) || this
          }
          return (0, n.__extends)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(G);

      function Y(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, a.L)(n, i) ? n : i
      }

      function $(e) {
        return !!(e instanceof U && e.group.caching)
      }
      var X = function() {
        function e() {
          this.known = new(S.En ? WeakSet : Set), this.pool = new R.b(S.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, x.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, x.U)(e)) {
            var t = function(e) {
              return (0, x.U)(e) ? (0, A.c)(e) ? e.slice(0) : (0, n.__assign)({
                __proto__: Object.getPrototypeOf(e)
              }, e) : e
            }(e);
            return this.passes.set(t, e), t
          }
          return e
        }, e.prototype.admit = function(e) {
          var t = this;
          if ((0, x.U)(e)) {
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
            canonizeResults: I(e)
          }), this.canon = e.canon || new X, this.executeSelectionSet = (0, o.LV)((function(e) {
            var r, i = e.context.canonizeResults,
              o = Z(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.__assign)((0, n.__assign)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (H(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }), {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: Z,
            makeCacheKey: function(e, t, r, n) {
              if ($(r.store)) return r.store.makeCacheKey(e, (0, E.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)((function(e) {
            return H(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }), {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if ($(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new X
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
          a = (0, n.__assign)((0, n.__assign)({}, (0, c.wY)((0, c.AT)(r))), a);
          var d, p = (0, E.WU)(o),
            v = this.executeSelectionSet({
              selectionSet: (0, c.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.__assign)({
                store: t,
                query: r,
                policies: h,
                variables: a,
                varString: (0, _.M)(a),
                canonizeResults: f
              }, Q(r, this.config.fragments))
            });
          if (v.missing && (d = [new g(te(v.missing), v.missing, r, a)], !u)) throw d[0];
          return {
            result: v.result,
            complete: !d,
            missing: d
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if ($(n.store) && this.knownResults.get(e) === r) {
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
            if ((0, T.MS)(e, c))
              if ((0, E.dt)(e)) {
                var g = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  m = (0, E.ue)(e);
                void 0 === g ? b.XY.added(e) || (u = p.merge(u, ((r = {})[m] = "Can't find field '".concat(e.name.value, "' on ").concat((0, E.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, A.c)(g) ? g.length > 0 && (g = v(t.executeSubSelectedArray({
                  field: e,
                  array: g,
                  enclosingRef: o,
                  context: a
                }), m)) : e.selectionSet ? null != g && (g = v(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: g,
                  enclosingRef: (0, E.A_)(g) ? g : o,
                  context: a
                }), m)) : a.canonizeResults && (g = t.canon.pass(g)), void 0 !== g && d.push(((f = {})[m] = g, f))
              } else {
                var _ = (0, s.HQ)(e, a.lookupFragment);
                if (!_ && e.kind === O.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                _ && l.fragmentMatches(_, h) && _.selectionSet.selections.forEach(y.add, y)
              }
          }));
          var g = {
              result: (0, f.IM)(d),
              missing: u
            },
            m = a.canonizeResults ? this.canon.admit(g) : (0, D.G)(g);
          return m.result && this.knownResults.set(m.result, r), m
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
            return null === e ? null : (0, A.c)(e) ? c(r.executeSubSelectedArray({
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
                  (0, x.U)(r) && ((0, i.V1)(!(0, E.A_)(r), 11, function(e, t) {
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
      var re = r(14610),
        ne = r(41339),
        ie = r(82753),
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
              else if (n && (0, A.E)(n.directives)) {
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
            (0, A.c)(t) ? (le(t).forEach((function(e) {
              return r.push(n.concat(e))
            })), n.length = 0) : (n.push(t), (0, A.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          }))
        }
        return t.paths
      }

      function fe(e, t) {
        return e[t]
      }

      function he(e, t, r) {
        return r = r || fe, de(t.reduce((function e(t, n) {
          return (0, A.c)(t) ? t.map((function(t) {
            return e(t, n)
          })) : t && r(t, n)
        }), e))
      }

      function de(e) {
        return (0, x.U)(e) ? (0, A.c)(e) ? e.map(de) : ce(Object.keys(e).sort(), (function(t) {
          return he(e, t)
        })) : e
      }
      var pe = r(28182);

      function ve(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, E.MB)(e.field, e.variables) : null
      }
      var ye = function() {},
        ge = function(e, t) {
          return t.fieldName
        },
        me = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        be = function(e, t) {
          return t
        },
        _e = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.__assign)({
              dataIdFromObject: P
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
          }
          return e.prototype.identify = function(e, t) {
            var r, i = this,
              o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            var a, s = t && t.storeObject || e,
              u = (0, n.__assign)((0, n.__assign)({}, t), {
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
                var t = l((0, n.__assign)((0, n.__assign)({}, e), s), u);
                if (!(0, A.c)(t)) {
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
                u = (0, n.__rest)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), M.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            }))
          }, e.prototype.updateTypePolicy = function(e, t) {
            var r = this,
              n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? me : !1 === t ? be : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? ye : (0, A.c)(i) ? se(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach((function(t) {
              var n = r.getFieldPolicy(e, t, !0),
                i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  u = i.read,
                  c = i.merge;
                n.keyFn = !1 === s ? ge : (0, A.c)(s) ? ue(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || ge)
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
                var n = e.match(F);
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
                  a = (0, n.__rest)(i, ["fields"]);
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
                if (!(0, A.c)(u)) {
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
                var c = we(this, r, e, t, t.store.getStorage((0, E.A_)(r) ? r.__ref : r, i));
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
            return s === me ? Oe(n.store)(e, t) : s === be ? t : (n.overwrite && (e = void 0), s(e, t, we(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function we(e, t, r, n, i) {
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
        } : (o = (0, n.__assign)({}, a), M.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, ne.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function Oe(e) {
        return function(t, r) {
          if ((0, A.c)(t) || (0, A.c)(r)) throw (0, i.vA)(9);
          if ((0, x.U)(t) && (0, x.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, E.A_)(t) && N(r)) return e.merge(t.__ref, r), t;
            if (N(t) && (0, E.A_)(r)) return e.merge(t, r.__ref), r;
            if (N(t) && N(r)) return (0, n.__assign)((0, n.__assign)({}, t), r)
          }
          return r
        }
      }

      function Se(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.__assign)((0, n.__assign)({}, e), {
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
            l = (0, n.__assign)((0, n.__assign)({}, (0, c.wY)(d)), l);
            var v = (0, n.__assign)((0, n.__assign)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return p.merge(e, t)
                },
                variables: l,
                varString: (0, _.M)(l)
              }, Q(o, this.fragments)), {
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
                          (0, A.c)(u) || (0, A.c)(c) || [u, c].forEach((function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || d.includes(t) || d.push(t)
                          })), !1 !== globalThis.__DEV__ && i.V1.warn(15, f, l, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", h, (0, n.__assign)({}, u), (0, n.__assign)({}, c))
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
                    var r = c.readField((0, n.__assign)((0, n.__assign)({}, e), {
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
                  v = De(u, p),
                  y = t.processFieldValue(s, r, r.selectionSet ? Se(e, !1, !1) : e, v),
                  g = void 0;
                r.selectionSet && ((0, E.A_)(y) || N(y)) && (g = h("__typename", y));
                var m = c.getMergeFunction(f, r.name.value, g);
                m ? v.info = {
                  field: r,
                  typename: f,
                  merge: m
                } : Ae(u, p), l = e.merge(l, ((n = {})[p] = y, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || b.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, E.ue)(r), o)
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
              var g = (0, E.WU)(r),
                m = s.written[r] || (s.written[r] = []);
              if (m.indexOf(a) >= 0) return g;
              if (m.push(a), this.reader && this.reader.isFresh(o, g, a, s)) return g;
              var _ = s.incomingById.get(r);
              return _ ? (_.storeObject = s.merge(_.storeObject, l), _.mergeTree = xe(_.mergeTree, u), d.forEach((function(e) {
                return _.fieldNodeSet.add(e)
              }))) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: Re(u) ? void 0 : u,
                fieldNodeSet: d
              }), g
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, A.c)(e) ? e.map((function(e, o) {
              var a = i.processFieldValue(e, t, r, De(n, o));
              return Ae(n, o), a
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
              u = new R.b(!1);
            return function e(c, l) {
              var f = u.lookup(c, l.clientOnly, l.deferred);
              f.visited || (f.visited = !0, c.selections.forEach((function(u) {
                if ((0, T.MS)(u, r.variables)) {
                  var c = l.clientOnly,
                    f = l.deferred;
                  if (c && f || !(0, A.E)(u.directives) || u.directives.forEach((function(e) {
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
              var c, l = (0, A.c)(r) || !(0, E.A_)(t) && !N(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, E.A_)(l) ? l.__ref : l]);
              var h = function(e, t) {
                return (0, A.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach((function(e, t) {
                var r = h(l, t),
                  n = h(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              })), c && (r = (0, A.c)(f) ? f.slice(0) : (0, n.__assign)({}, f), c.forEach((function(e, t) {
                r[t] = e
              })))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        Te = [];

      function De(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, Te.pop() || {
          map: new Map
        }), r.get(t)
      }

      function xe(e, t) {
        if (e === t || !t || Re(t)) return e;
        if (!e || Re(e)) return t;
        var r = e.info && t.info ? (0, n.__assign)((0, n.__assign)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach((function(e, r) {
            o.map.set(r, xe(e, t.map.get(r))), a.delete(r)
          })), a.forEach((function(r) {
            o.map.set(r, xe(t.map.get(r), e.map.get(r)))
          }))
        }
        return o
      }

      function Re(e) {
        return !e || !(e.info || e.map.size)
      }

      function Ae(e, t) {
        var r = e.map,
          n = r.get(t);
        n && Re(n) && (Te.push(n), r.delete(t))
      }
      var Me = new Set,
        Ce = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new m.c(b.XY), r.assumeImmutableResults = !0, r.makeVar = ie.UT, r.txCount = 0, r.config = function(e) {
              return (0, k.o)(j, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new _e({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.__extends)(t, e), t.prototype.init = function() {
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
              canonizeResults: I(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, o.LV)((function(e, r) {
              return t.broadcastWatch(e, r)
            }), {
              max: this.config.resultCacheMaxSize || u.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if ($(r)) {
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
              return this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
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
            if (M.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
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
            _.M.reset(), w.y.reset(), this.addTypenameTransform.resetCache(), null === (t = this.config.fragments) || void 0 === t || t.resetCaches();
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
              e = (0, n.__assign)((0, n.__assign)({}, e), {
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
            return this.init(), _.M.reset(), e && e.discardWatches ? (this.watches.forEach((function(e) {
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
            return u && !this.txCount && this.broadcastWatches((0, n.__assign)((0, n.__assign)({}, e), {
              onWatchUpdated: function(e) {
                return l.add(e), !1
              }
            })), "string" == typeof a ? this.optimisticData = this.optimisticData.addLayer(a, c) : !1 === a ? c(this.data) : c(), "string" == typeof s && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches((0, n.__assign)((0, n.__assign)({}, e), {
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
      !1 !== globalThis.__DEV__ && (Ce.prototype.getMemoryInternals = d.cM)
    },
    82753: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => u,
        UT: () => c,
        WR: () => s,
        bl: () => i
      });
      var n = r(3076),
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
    8720: (e, t, r) => {
      "use strict";
      r.d(t, {
        R: () => fe
      });
      var n = r(63461),
        i = r(64600),
        o = r(9231),
        a = o.C.execute,
        s = r(43036),
        u = r(13556),
        c = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, u.$)(t).request) || this;
            return r.options = t, r
          }
          return (0, n.__extends)(t, e), t
        }(o.C),
        l = r(67848),
        f = r(79468),
        h = r(80523),
        d = r(75437),
        p = r(60496),
        v = r(24046),
        y = r(90306),
        g = r(46686);

      function m(e, t, r) {
        return new g.c((function(n) {
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
      var b = r(91359);

      function _(e) {
        var t = w(e);
        return (0, b.E)(t)
      }

      function w(e) {
        var t = (0, b.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, f.ST)(e) && (0, b.E)(e.incremental) && e.incremental.forEach((function(e) {
          e.errors && t.push.apply(t, e.errors)
        })), t
      }
      var E = r(28265),
        O = r(84835),
        S = r(94505),
        k = r(95085);

      function T(e, t, r) {
        var n = [];
        e.forEach((function(e) {
          return e[t] && n.push(e)
        })), n.forEach((function(e) {
          return e[t](r)
        }))
      }
      var D = r(74712);

      function x(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: g.c
          })
        }
        return D.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }

      function R(e) {
        return e && "function" == typeof e.then
      }
      var A = function(e) {
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
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), T(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout((function() {
                return t.unsubscribe()
              })), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), T(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? R(i) ? i.then((function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }), r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout((function() {
                  return t.unsubscribe()
                })), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), T(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch((function(e) {})), "function" == typeof t && (t = [new g.c(t)]), R(t) ? t.then((function(e) {
            return r.start(e)
          }), r.handlers.error) : r.start(t), r
        }
        return (0, n.__extends)(t, e), t.prototype.start = function(e) {
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
      }(g.c);
      x(A);
      var M = r(32954),
        C = r(78054),
        P = r(91444),
        j = r(14610),
        I = r(52011),
        F = Object.assign,
        q = Object.hasOwnProperty,
        V = function(e) {
          function t(t) {
            var r = t.queryManager,
              i = t.queryInfo,
              o = t.options,
              a = e.call(this, (function(e) {
                try {
                  var t = e._subscription._observer;
                  t && !t.error && (t.error = Q)
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
            a.options = (0, n.__assign)((0, n.__assign)({}, o), {
              initialFetchPolicy: d,
              fetchPolicy: f
            }), a.queryId = i.queryId || r.generateQueryId();
            var p = (0, E.Vu)(a.query);
            return a.queryName = p && p.name && p.name.value, a
          }
          return (0, n.__extends)(t, e), Object.defineProperty(t.prototype, "query", {
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
              r = this.queryInfo.networkStatus || t && t.networkStatus || C.pT.ready,
              i = (0, n.__assign)((0, n.__assign)({}, t), {
                loading: (0, C.bi)(r),
                networkStatus: r
              }),
              o = this.options.fetchPolicy,
              a = void 0 === o ? "cache-first" : o;
            if (z(a) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var s = this.queryInfo.getDiff();
              (s.complete || this.options.returnPartialData) && (i.data = s.result), (0, l.L)(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, !s.complete || i.networkStatus !== C.pT.loading || "cache-first" !== a && "cache-only" !== a || (i.networkStatus = C.pT.ready, i.loading = !1)) : i.partial = !0, !1 === globalThis.__DEV__ || s.complete || this.options.partialRefetch || i.loading || i.data || i.error || L(s.missing)
            }
            return e && this.updateLastResult(i), i
          }, t.prototype.getCurrentResult = function(e) {
            return void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e))
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            if (!this.last) return !0;
            var r = this.queryManager.getDocumentInfo(this.query),
              n = this.queryManager.dataMasking,
              i = n ? r.nonReactiveQuery : this.query;
            return (n || r.hasNonreactiveDirective ? !(0, I.a)(i, this.last.result, e, this.variables) : !(0, l.L)(this.last.result, e)) || t && !(0, l.L)(this.last.variables, t)
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
            return e && !(0, l.L)(this.options.variables, e) && (r.variables = this.options.variables = (0, n.__assign)((0, n.__assign)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, C.pT.refetch)
          }, t.prototype.fetchMore = function(e) {
            var t = this,
              r = (0, n.__assign)((0, n.__assign)({}, e.query ? e : (0, n.__assign)((0, n.__assign)((0, n.__assign)((0, n.__assign)({}, this.options), {
                query: this.options.query
              }), e), {
                variables: (0, n.__assign)((0, n.__assign)({}, this.options.variables), e.variables)
              })), {
                fetchPolicy: "no-cache"
              });
            r.query = this.transformDocument(r.query);
            var o = this.queryManager.generateQueryId();
            this.lastQuery = e.query ? this.transformDocument(this.options.query) : r.query;
            var a = this.queryInfo,
              s = a.networkStatus;
            a.networkStatus = C.pT.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var u = new Set,
              c = null == e ? void 0 : e.updateQuery,
              l = "no-cache" !== this.options.fetchPolicy;
            return l || (0, i.V1)(c, 22), this.queryManager.fetchQuery(o, r, C.pT.fetchMore).then((function(i) {
              if (t.queryManager.removeQuery(o), a.networkStatus === C.pT.fetchMore && (a.networkStatus = s), l) t.queryManager.cache.batch({
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
                t.reportResult((0, n.__assign)((0, n.__assign)({}, f), {
                  data: h
                }), t.variables)
              }
              return t.maskResult(i)
            })).finally((function() {
              l && !u.has(t.query) && N(t)
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
            var t = (0, P.o)(this.options, e || {});
            F(this.options, t)
          }, t.prototype.setVariables = function(e) {
            return (0, l.L)(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, C.pT.setVariables) : Promise.resolve())
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
                      e.pollingInfo && ((0, C.bi)(e.queryInfo.networkStatus) || (null === (r = (t = e.options).skipPollAttempt) || void 0 === r ? void 0 : r.call(t)) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, C.pT.poll).then(o, o))
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
            return r && this.last && !(0, l.L)(t, this.last.variables) && (r = void 0), this.last = (0, n.__assign)({
              result: this.queryManager.assumeImmutableResults ? e : (0, j.m)(e),
              variables: t
            }, r ? {
              error: r
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === C.pT.refetch || t === C.pT.fetchMore || t === C.pT.poll,
              o = this.options.variables,
              a = this.options.fetchPolicy,
              s = (0, P.o)(this.options, e || {}),
              u = i ? s : F(this.options, s),
              c = this.transformDocument(u.query);
            this.lastQuery = c, i || (this.updatePolling(), !e || !e.variables || (0, l.L)(e.variables, o) || "standby" === u.fetchPolicy || u.fetchPolicy !== a && "function" != typeof u.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", u), void 0 === t && (t = C.pT.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = z(u.fetchPolicy));
            var f = function() {
                r.concast === p && (r.waitForOwnResult = !1)
              },
              h = u.variables && (0, n.__assign)({}, u.variables),
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
            (r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || n) && T(this.observers, "next", this.maskResult(e))
          }, t.prototype.reportError = function(e, t) {
            var r = (0, n.__assign)((0, n.__assign)({}, this.getLastResult()), {
              error: e,
              errors: e.graphQLErrors,
              networkStatus: C.pT.error,
              loading: !1
            });
            this.updateLastResult(r, t), T(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
          }, t.prototype.transformDocument = function(e) {
            return this.queryManager.transform(e)
          }, t.prototype.maskResult = function(e) {
            return e && "data" in e ? (0, n.__assign)((0, n.__assign)({}, e), {
              data: this.queryManager.maskOperation({
                document: this.query,
                data: e.data,
                fetchPolicy: this.options.fetchPolicy,
                id: this.queryId
              })
            }) : e
          }, t
        }(g.c);

      function N(e) {
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

      function Q(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(25, e.message, e.stack)
      }

      function L(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(26, e)
      }

      function z(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }
      x(V);
      var B = r(31447),
        U = new(D.et ? WeakMap : Map);

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
          var t = e.networkStatus || C.pT.loading;
          return this.variables && this.networkStatus !== C.pT.loading && !(0, l.L)(this.variables, e.variables) && (t = C.pT.setVariables), (0, l.L)(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
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
            t.getDiff().fromOptimisticTransaction ? e.observe() : N(e)
          })) : delete this.oqListener)
        }, e.prototype.notify = function() {
          var e = this;
          K(this), this.shouldNotify() && this.listeners.forEach((function(t) {
            return t(e)
          })), this.dirty = !1
        }, e.prototype.shouldNotify = function() {
          if (!this.dirty || !this.listeners.size) return !1;
          if ((0, C.bi)(this.networkStatus) && this.observableQuery) {
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
            var i = (0, n.__assign)((0, n.__assign)({}, this.getDiffOptions(e)), {
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
            a = (0, b.E)(e.errors) ? e.errors.slice(0) : [];
          if (this.reset(), "incremental" in e && (0, b.E)(e.incremental)) {
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
          return this.networkError = null, this.networkStatus = C.pT.ready
        }, e.prototype.markError = function(e) {
          return this.networkStatus = C.pT.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function G(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !_(e);
        return !n && r && e.data && (n = !0), n
      }
      var J = r(99086),
        Y = r(15784),
        $ = r(19102),
        X = r(98867),
        Z = r(46970),
        ee = r(28182),
        te = r(30503),
        re = Object.prototype.hasOwnProperty,
        ne = Object.create(null),
        ie = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new $.A(X.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Y.b(!1), this.noCacheWarningsByQueryId = new Set;
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
            return (0, n.__awaiter)(this, arguments, void 0, (function(e) {
              var t, r, o, a, s, u, c, l = e.mutation,
                f = e.variables,
                h = e.optimisticResponse,
                d = e.updateQueries,
                p = e.refetchQueries,
                v = void 0 === p ? [] : p,
                y = e.awaitRefetchQueries,
                g = void 0 !== y && y,
                b = e.update,
                E = e.onQueryUpdated,
                O = e.fetchPolicy,
                S = void 0 === O ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : O,
                k = e.errorPolicy,
                T = void 0 === k ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : k,
                D = e.keepRootFields,
                x = e.context;
              return (0, n.__generator)(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 28), (0, i.V1)("network-only" === S || "no-cache" === S, 29), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, x)] : [3, 2];
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
                      errorPolicy: T,
                      context: x,
                      updateQueries: d,
                      update: b,
                      keepRootFields: D
                    }), this.broadcastQueries(), s = this, [2, new Promise((function(e, r) {
                      return m(s.getObservableFromLink(l, (0, n.__assign)((0, n.__assign)({}, x), {
                        optimisticResponse: a ? h : void 0
                      }), f, {}, !1), (function(e) {
                        if (_(e) && "none" === T) throw new M.K4({
                          graphQLErrors: w(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.__assign)({}, e);
                        return "function" == typeof v && (v = v(r)), "ignore" === T && _(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: S,
                          errorPolicy: T,
                          context: x,
                          update: b,
                          updateQueries: d,
                          awaitRefetchQueries: g,
                          refetchQueries: v,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: E,
                          keepRootFields: D
                        })
                      })).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.__assign)((0, n.__assign)({}, r), {
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
                }), (0, f.ST)(i) && (0, b.E)(i.incremental)) {
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
                        c.complete && ("incremental" in (i = (0, n.__assign)((0, n.__assign)({}, i), {
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
                r.markMutationResult((0, n.__assign)((0, n.__assign)({}, t), {
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
                asQuery: (0, n.__assign)((0, n.__assign)({}, e), {
                  definitions: e.definitions.map((function(e) {
                    return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, n.__assign)((0, n.__assign)({}, e), {
                      operation: "query"
                    }) : e
                  }))
                })
              };
              t.set(e, r)
            }
            return t.get(e)
          }, e.prototype.getVariables = function(e, t) {
            return (0, n.__assign)((0, n.__assign)({}, this.getDocumentInfo(e).defaultVars), t)
          }, e.prototype.watchQuery = function(e) {
            var t = this.transform(e.query);
            void 0 === (e = (0, n.__assign)((0, n.__assign)({}, e), {
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
            return this.fetchQuery(t, (0, n.__assign)((0, n.__assign)({}, e), {
              query: o
            })).then((function(i) {
              return i && (0, n.__assign)((0, n.__assign)({}, i), {
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
              e.observableQuery ? e.networkStatus = C.pT.loading : e.stop()
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
                  options: (0, n.__assign)((0, n.__assign)({}, e), {
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
                var o = _(n),
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
              return new g.c((function(e) {
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
                  context: this.prepareContext((0, n.__assign)((0, n.__assign)({}, t), {
                    forceFetch: !o
                  })),
                  extensions: i
                };
              if (t = y.context, o) {
                var b = (0, J.y)(f),
                  _ = (0, v.M)(r),
                  w = d.lookup(b, _);
                if (!(u = w.observable)) {
                  var O = new A([a(p, y)]);
                  u = w.observable = O, O.beforeNext((function() {
                    d.remove(b, _)
                  }))
                }
              } else u = new A([a(p, y)])
            } else u = new A([g.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return h && (u = m(u, (function(e) {
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
            return m(this.getObservableFromLink(i, r.context, r.variables), (function(o) {
              var a = w(o),
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
                networkStatus: C.pT.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = C.pT.error), c
            }), (function(t) {
              var r = (0, M.Mn)(t) ? t : new M.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            }))
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = C.pT.loading), void 0 === n && (n = t.query);
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
              g = void 0 !== y && y,
              m = t.context,
              b = void 0 === m ? {} : m,
              _ = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: f,
                errorPolicy: d,
                returnPartialData: v,
                notifyOnNetworkStatusChange: g,
                context: b
              }),
              w = function(e) {
                _.variables = e;
                var n = i.fetchQueryByPolicy(u, _, r);
                return "standby" !== _.fetchPolicy && n.sources.length > 0 && u.observableQuery && u.observableQuery.applyNextFetchPolicy("after-fetch", t), n
              },
              E = function() {
                return i.fetchCancelFns.delete(e)
              };
            if (this.fetchCancelFns.set(e, (function(e) {
                E(), setTimeout((function() {
                  return o.cancel(e)
                }))
              })), this.getDocumentInfo(_.query).hasClientExports) o = new A(this.localState.addExportedVariables(_.query, _.variables, _.context).then(w).then((function(e) {
              return e.sources
            }))), a = !0;
            else {
              var O = w(_.variables);
              a = O.fromLink, o = new A(O.sources)
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
                void 0 === r && (r = e.networkStatus || C.pT.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || f || (0, l.L)(s, {}) || L(t.missing);
                var u = function(e) {
                  return g.c.of((0, n.__assign)({
                    data: e,
                    loading: (0, C.bi)(r),
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
                })) : "none" === c && r === C.pT.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              m = "no-cache" === s ? 0 : r === C.pT.refetch && "merge" !== u ? 1 : 2,
              b = function() {
                return i.getResultsFromLink(e, m, {
                  query: o,
                  variables: a,
                  context: h,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              _ = d && "number" == typeof p && p !== r && (0, C.bi)(r);
            switch (s) {
              default:
              case "cache-first":
                return (w = v()).complete ? {
                  fromLink: !1,
                  sources: [y(w, e.markReady())]
                } : f || _ ? {
                  fromLink: !0,
                  sources: [y(w), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "cache-and-network":
                var w;
                return (w = v()).complete || f || _ ? {
                  fromLink: !0,
                  sources: [y(w), b()]
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
          }, e.prototype.getQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new H(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        oe = r(16565),
        ae = r(82753),
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
            return (0, n.__awaiter)(this, arguments, void 0, (function(e) {
              var t = e.document,
                r = e.remoteResult,
                i = e.context,
                o = e.variables,
                a = e.onlyRunForcedResolvers,
                s = void 0 !== a && a;
              return (0, n.__generator)(this, (function(e) {
                return t ? [2, this.resolveDocument(t, r.data, i, o, this.fragmentMatcher, s).then((function(e) {
                  return (0, n.__assign)((0, n.__assign)({}, r), {
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
            return (0, n.__assign)((0, n.__assign)({}, e), {
              cache: t,
              getCacheKey: function(e) {
                return t.identify(e)
              }
            })
          }, e.prototype.addExportedVariables = function(e) {
            return (0, n.__awaiter)(this, arguments, void 0, (function(e, t, r) {
              return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, n.__generator)(this, (function(i) {
                return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then((function(e) {
                  return (0, n.__assign)((0, n.__assign)({}, t), e.exportedVariables)
                }))] : [2, (0, n.__assign)({}, t)]
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
            return (0, n.__awaiter)(this, arguments, void 0, (function(e, t, r, i, o, a) {
              var s, u, c, l, f, h, d, v, y, g;
              return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
                return !0
              }), void 0 === a && (a = !1), (0, n.__generator)(this, (function(m) {
                return s = (0, E.Vn)(e), u = (0, E.zK)(e), c = (0, p.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", v = (d = this).cache, y = d.client, g = {
                  fragmentMap: c,
                  context: (0, n.__assign)((0, n.__assign)({}, r), {
                    cache: v,
                    client: y
                  }),
                  variables: i,
                  fragmentMatcher: o,
                  defaultOperationType: h,
                  exportedVariables: {},
                  selectionsToResolve: l,
                  onlyRunForcedResolvers: a
                }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, g).then((function(e) {
                  return {
                    result: e,
                    exportedVariables: g.exportedVariables
                  }
                }))]
              }))
            }))
          }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
            return (0, n.__awaiter)(this, void 0, void 0, (function() {
              var a, s, u, c, l, f = this;
              return (0, n.__generator)(this, (function(d) {
                return a = o.fragmentMap, s = o.context, u = o.variables, c = [r], l = function(e) {
                  return (0, n.__awaiter)(f, void 0, void 0, (function() {
                    var l, f;
                    return (0, n.__generator)(this, (function(n) {
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
            return (0, n.__awaiter)(this, void 0, void 0, (function() {
              var o, a, s, u, c, l, f, h, d, p = this;
              return (0, n.__generator)(this, (function(n) {
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
        ue = r(79275),
        ce = r(51018),
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
              g = e.connectToDevTools,
              m = e.queryDeduplication,
              b = void 0 === m || m,
              _ = e.defaultOptions,
              w = e.defaultContext,
              E = e.assumeImmutableResults,
              O = void 0 === E ? f.assumeImmutableResults : E,
              S = e.resolvers,
              k = e.typeDefs,
              T = e.fragmentMatcher,
              D = e.name,
              x = e.version,
              R = e.devtools,
              A = e.dataMasking,
              M = e.link;
            M || (M = a ? new c({
              uri: a,
              credentials: u,
              headers: l
            }) : o.C.empty()), this.link = M, this.cache = f, this.disableNetworkFetches = p || y > 0, this.queryDeduplication = b, this.defaultOptions = _ || Object.create(null), this.typeDefs = k, this.devtoolsConfig = (0, n.__assign)((0, n.__assign)({}, R), {
              enabled: null !== (t = null == R ? void 0 : R.enabled) && void 0 !== t ? t : g
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), y && setTimeout((function() {
              return r.disableNetworkFetches = !1
            }), y), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new se({
              cache: f,
              client: this,
              resolvers: S,
              fragmentMatcher: T
            }), this.queryManager = new ie({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: w,
              documentTransform: h,
              queryDeduplication: b,
              ssrMode: p,
              dataMasking: !!A,
              clientAwareness: {
                name: D,
                version: x
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
            return this.defaultOptions.watchQuery && (e = (0, ue.l)(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = (0, ue.l)(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 17), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = (0, ue.l)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            var t = this,
              r = this.queryManager.generateQueryId();
            return this.queryManager.startGraphQLSubscription(e).map((function(i) {
              return (0, n.__assign)((0, n.__assign)({}, i), {
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
            return this.cache.watchFragment((0, n.__assign)((0, n.__assign)({}, e), ((t = {})[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)))
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
    52011: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => c
      });
      var n = r(63461),
        i = r(67848),
        o = r(28265),
        a = r(60496),
        s = r(80523),
        u = r(84835);

      function c(e, t, r, s) {
        var u = t.data,
          c = (0, n.__rest)(t, ["data"]),
          f = r.data,
          h = (0, n.__rest)(r, ["data"]);
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
              var g = h.length;
              if (d.length !== g) return !1;
              for (var m = 0; m < g; ++m)
                if (!l(p, h[m], d[m], n)) return !1;
              return !0
            }
            return l(p, h, d, n)
          }
          var b = (0, a.HQ)(e, n.fragmentMap);
          return b ? !!f(b) || l(b.selectionSet, t, r, n) : void 0
        }))
      }

      function f(e) {
        return !!e.directives && e.directives.some(h)
      }

      function h(e) {
        return "nonreactive" === e.name.value
      }
    },
    78054: (e, t, r) => {
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
    32954: (e, t, r) => {
      "use strict";
      r.d(t, {
        K$: () => o,
        K4: () => u,
        Mn: () => s,
        uR: () => a
      });
      var n = r(63461),
        i = (r(64600), r(94505)),
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
          return d.name = "ApolloError", d.graphQLErrors = s || [], d.protocolErrors = u || [], d.clientErrors = c || [], d.networkError = l || null, d.message = f || (o = d, a = (0, n.__spreadArray)((0, n.__spreadArray)((0, n.__spreadArray)([], o.graphQLErrors, !0), o.clientErrors, !0), o.protocolErrors, !0), o.networkError && a.push(o.networkError), a.map((function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          })).join("\n")), d.extraInfo = h, d.cause = (0, n.__spreadArray)((0, n.__spreadArray)((0, n.__spreadArray)([l], s || [], !0), u || [], !0), c || [], !0).find((function(e) {
            return !!e
          })) || null, d.__proto__ = t.prototype, d
        }
        return (0, n.__extends)(t, e), t
      }(Error)
    },
    55197: (e, t, r) => {
      "use strict";
      r.d(t, {
        o: () => a
      });
      var n = r(63461),
        i = r(9231),
        o = r(46686);

      function a(e) {
        return new i.C((function(t, r) {
          var i = (0, n.__rest)(t, []);
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
    9231: (e, t, r) => {
      "use strict";
      r.d(t, {
        C: () => l
      });
      var n = r(64600),
        i = r(46686),
        o = r(63461),
        a = r(28265);

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
            var r = (0, o.__assign)({}, e);
            return Object.defineProperty(t, "setContext", {
              enumerable: !1,
              value: function(e) {
                r = "function" == typeof e ? (0, o.__assign)((0, o.__assign)({}, r), e(r)) : (0, o.__assign)((0, o.__assign)({}, r), e)
              }
            }), Object.defineProperty(t, "getContext", {
              enumerable: !1,
              value: function() {
                return (0, o.__assign)({}, r)
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
    13556: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => D
      });
      var n = r(63461),
        i = r(64600),
        o = r(9231),
        a = r(80523),
        s = r(46686),
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
        c = r(74712);

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
        d = r(32954),
        p = r(79468),
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

      function g(e, t) {
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
      var m = r(99086),
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

      function w(e, t) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        var o = {},
          a = {};
        r.forEach((function(e) {
          o = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, o), e.options), {
            headers: (0, n.__assign)((0, n.__assign)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), a = (0, n.__assign)((0, n.__assign)({}, a), e.http)
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
        return a.includeExtensions && (f.extensions = u), a.includeQuery && (f.query = t(l, m.y)), {
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
        S = r(75437),
        k = r(28265),
        T = (0, i.no)((function() {
          return fetch
        })),
        D = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            c = e.fetch,
            l = e.print,
            m = void 0 === l ? _ : l,
            D = e.includeExtensions,
            x = e.preserveHeaderCase,
            R = e.useGETForQueries,
            A = e.includeUnusedVariables,
            M = void 0 !== A && A,
            C = (0, n.__rest)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw (0, i.vA)(40)
          }(c || T);
          var P = {
            http: {
              includeExtensions: D,
              preserveHeaderCase: x
            },
            options: C.fetchOptions,
            credentials: C.credentials,
            headers: C.headers
          };
          return new o.C((function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              o = e.getContext(),
              l = {};
            if (o.clientAwareness) {
              var _ = o.clientAwareness,
                D = _.name,
                x = _.version;
              D && (l["apollographql-client-name"] = D), x && (l["apollographql-client-version"] = x)
            }
            var A = (0, n.__assign)((0, n.__assign)({}, l), o.headers),
              C = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: A
              };
            if ((0, a.d8)(["client"], e.query)) {
              var j = (0, S.er)(e.query);
              if (!j) return E(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = j
            }
            var I, F, q, V, N, Q = w(e, m, b, P, C),
              L = Q.options,
              z = Q.body;
            z.variables && !M && (z.variables = (I = z.variables, F = e.query, q = (0, n.__assign)({}, I), V = new Set(Object.keys(I)), (0, O.visit)(F, {
              Variable: function(e, t, r) {
                r && "VariableDefinition" !== r.kind && V.delete(e.name.value)
              }
            }), V.forEach((function(e) {
              delete q[e]
            })), q)), L.signal || "undefined" == typeof AbortController || (N = new AbortController, L.signal = N.signal);
            var B, U = "OperationDefinition" === (B = (0, k.Vn)(e.query)).kind && "subscription" === B.operation,
              W = (0, a.d8)(["defer"], e.query);
            if (R && !e.query.definitions.some((function(e) {
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
                })) || T,
                a = r.next.bind(r);
              return o(t, L).then((function(t) {
                  var r;
                  e.setContext({
                    response: t
                  });
                  var i, o = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    return (0, n.__awaiter)(this, void 0, void 0, (function() {
                      var r, i, o, a, s, u, c, l, h, v, m, b, _, w, E, O, S, k, T, D, x, R, A, M;
                      return (0, n.__generator)(this, (function(C) {
                        switch (C.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            r = new TextDecoder("utf-8"), i = null === (M = e.headers) || void 0 === M ? void 0 : M.get("content-type"), o = "boundary=", a = (null == i ? void 0 : i.includes(o)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(o)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = "\r\n--".concat(a), u = "", c = f(e), l = !0, C.label = 1;
                          case 1:
                            return l ? [4, c.next()] : [3, 3];
                          case 2:
                            for (h = C.sent(), v = h.value, m = h.done, b = "string" == typeof v ? v : r.decode(v), _ = u.length - s.length + 1, l = !m, w = (u += b).indexOf(s, _); w > -1;) {
                              if (E = void 0, R = [u.slice(0, w), u.slice(w + s.length)], u = R[1], O = (E = R[0]).indexOf("\r\n\r\n"), S = y(E.slice(0, O)), (k = S["content-type"]) && -1 === k.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (T = E.slice(O))
                                if (D = g(e, T), Object.keys(D).length > 1 || "data" in D || "incremental" in D || "errors" in D || "payload" in D)
                                  if ((0, p.Nw)(D)) {
                                    if (x = {}, "payload" in D) {
                                      if (1 === Object.keys(D).length && null === D.payload) return [2];
                                      x = (0, n.__assign)({}, D.payload)
                                    }
                                    "errors" in D && (x = (0, n.__assign)((0, n.__assign)({}, x), {
                                      extensions: (0, n.__assign)((0, n.__assign)({}, "extensions" in x ? x.extensions : null), (A = {}, A[d.K$] = D.errors, A))
                                    })), t(x)
                                  } else t(D);
                              else if (1 === Object.keys(D).length && "hasNext" in D && !D.hasNext) return [2];
                              w = u.indexOf(s)
                            }
                            return [3, 1];
                          case 3:
                            return [2]
                        }
                      }))
                    }))
                  }(t, a) : (i = e, function(e) {
                    return e.text().then((function(t) {
                      return g(e, t)
                    })).then((function(t) {
                      return Array.isArray(t) || v.call(t, "data") || v.call(t, "errors") || h(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map((function(e) {
                        return e.operationName
                      })) : i.operationName, "'.")), t
                    }))
                  })(t).then(a)
                })).then((function() {
                  N = void 0, r.complete()
                })).catch((function(e) {
                  N = void 0,
                    function(e, t) {
                      e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e)
                    }(e, r)
                })),
                function() {
                  N && N.abort()
                }
            }))
          }))
        }
    },
    6162: (e, t, r) => {
      "use strict";
      r.d(t, {
        e: () => p
      });
      var n = r(63461),
        i = r(64600),
        o = r(99086),
        a = r(9231),
        s = r(91359),
        u = r(91444),
        c = r(46686),
        l = r(19102),
        f = r(98867);

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
            g = void 0 === y ? function(e) {
              return Promise.resolve(v((0, o.y)(e)))
            } : y,
            m = p.disable,
            b = p.retry,
            _ = p.useGETForHashedQueries,
            w = !0,
            E = function(e) {
              return new Promise((function(t) {
                return t(g(e))
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
                    var g = {
                      response: i,
                      networkError: a,
                      operation: e,
                      graphQLErrors: (0, s.E)(l) ? l : void 0,
                      meta: h(l)
                    };
                    if ((w = !m(g)) || r(), b(g)) return u && u.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: w
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
                    includeQuery: !w,
                    includeExtensions: w
                  }
                }), _ && w && ! function(e) {
                  return e.query.definitions.some((function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  }))
                }(e) && (e.setContext((function(e) {
                  var t = e.fetchOptions,
                    r = void 0 === t ? {} : t;
                  return c = r, {
                    fetchOptions: (0, n.__assign)((0, n.__assign)({}, r), {
                      method: "GET"
                    })
                  }
                })), p = !0), w ? function(e) {
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
    46970: (e, t, r) => {
      "use strict";
      r.d(t, {
        S: () => c
      });
      var n = r(16565),
        i = r(6076),
        o = r(84835),
        a = r(80523),
        s = r(28182),
        u = r(64600);

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
              g = y[0],
              m = y[1];
            if (null !== m) {
              var b = l(m, t, r, i, !1 !== globalThis.__DEV__ ? "".concat(s || "", "[").concat(g, "]") : void 0);
              h.has(b) && h.add(d), d[g] = b
            } else d[g] = null
          }
          return h.has(d) ? d : e
        }
        for (var _ = 0, w = t.selections; _ < w.length; _++) {
          var E = w[_],
            O = void 0;
          if (i && h.add(d), E.kind === n.Kind.FIELD) {
            var S = (0, o.ue)(E),
              k = E.selectionSet;
            if (void 0 === (O = d[S] || e[S])) continue;
            k && null !== O && (b = l(e[S], k, r, i, !1 !== globalThis.__DEV__ ? "".concat(s || "", ".").concat(S) : void 0), h.has(b) && (O = b)), !1 === globalThis.__DEV__ && (d[S] = O), !1 !== globalThis.__DEV__ && (i && "__typename" !== S && !(null === (c = Object.getOwnPropertyDescriptor(d, S)) || void 0 === c ? void 0 : c.value) ? Object.defineProperty(d, S, f(S, O, s || "", r.operationName, r.operationType)) : (delete d[S], d[S] = O))
          }
          if (E.kind !== n.Kind.INLINE_FRAGMENT || E.typeCondition && !r.cache.fragmentMatches(E, e.__typename) || (O = l(e, E.selectionSet, r, i, s)), E.kind === n.Kind.FRAGMENT_SPREAD) {
            var T = E.name.value,
              D = r.fragmentMap[T] || (r.fragmentMap[T] = r.cache.lookupFragment(T));
            (0, u.V1)(D, 47, T);
            var x = (0, a.s7)(E);
            "mask" !== x && (O = l(e, D.selectionSet, r, "migrate" === x, s))
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
    30503: (e, t, r) => {
      "use strict";
      r.d(t, {
        z: () => l
      });
      var n = r(16565),
        i = r(28182),
        o = r(64600),
        a = r(67848),
        s = r(46970),
        u = r(60496),
        c = r(28265);

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
    28182: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ki: () => l,
        jq: () => a,
        xm: () => s,
        yV: () => u
      });
      var n = r(3076),
        i = r(64600),
        o = r(74712),
        a = o.et ? WeakMap : Map,
        s = o.En ? WeakSet : Set,
        u = new n.DX,
        c = !1;

      function l() {
        c || (c = !0, !1 !== globalThis.__DEV__ && i.V1.warn(52))
      }
    },
    21926: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        l: () => u
      });
      var i = r(93186),
        o = r(74712),
        a = r(64600),
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
    1140: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => s
      });
      var n = r(63461),
        i = r(64600),
        o = r(93186),
        a = r(21926),
        s = function(e) {
          var t = e.client,
            r = e.children,
            s = (0, a.l)(),
            u = o.useContext(s),
            c = o.useMemo((function() {
              return (0, n.__assign)((0, n.__assign)({}, u), {
                client: t || u.client
              })
            }), [u, t]);
          return (0, i.V1)(c.client, 55), o.createElement(s.Provider, {
            value: c
          }, r)
        }
    },
    26672: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => i
      });
      var n = r(93186),
        i = r(74712).Sw ? n.useLayoutEffect : n.useEffect
    },
    41492: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => a
      });
      var n = r(64600),
        i = r(93186),
        o = r(21926);

      function a(e) {
        var t = i.useContext((0, o.l)()),
          r = e || t.client;
        return (0, n.V1)(!!r, 58), r
      }
    },
    32044: (e, t, r) => {
      "use strict";
      r.d(t, {
        _: () => c
      });
      var n = r(63461),
        i = r(93186),
        o = r(79275),
        a = r(19030),
        s = r(26672),
        u = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"];

      function c(e, t) {
        var r, c = i.useRef(void 0),
          l = i.useRef(void 0),
          f = i.useRef(void 0),
          h = (0, o.l)(t, c.current || {}),
          d = null !== (r = null == h ? void 0 : h.query) && void 0 !== r ? r : e;
        l.current = t, f.current = d;
        var p = (0, n.__assign)((0, n.__assign)({}, h), {
            skip: !c.current
          }),
          v = (0, a.SX)(d, p),
          y = v.obsQueryFields,
          g = v.result,
          m = v.client,
          b = v.resultData,
          _ = v.observable,
          w = v.onQueryExecuted,
          E = _.options.initialFetchPolicy || (0, a.kk)(p.defaultOptions, m.defaultOptions),
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
          T = i.useMemo((function() {
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, g), S), {
              called: k
            })
          }), [g, S, k]),
          D = i.useCallback((function(e) {
            c.current = e ? (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: e.fetchPolicy || E
            }) : {
              fetchPolicy: E
            };
            var t = (0, o.l)(l.current, (0, n.__assign)({
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
              }(b, _, m, d, (0, n.__assign)((0, n.__assign)({}, t), {
                skip: !1
              }), w).then((function(e) {
                return Object.assign(e, S)
              }));
            return r.catch((function() {})), r
          }), [m, d, S, E, _, b, w]),
          x = i.useRef(D);
        (0, s.E)((function() {
          x.current = D
        }));
        var R = i.useCallback((function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return x.current.apply(x, e)
        }), []);
        return [R, T]
      }
    },
    71951: (e, t, r) => {
      "use strict";
      r.d(t, {
        n: () => f
      });
      var n = r(63461),
        i = r(93186),
        o = r(79275),
        a = r(67848),
        s = r(1034),
        u = r(32954),
        c = r(41492),
        l = r(26672);

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
              s = (0, n.__assign)((0, n.__assign)({}, r), {
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
        }), []), [v, (0, n.__assign)({
          reset: y
        }, h)]
      }
    },
    19030: (e, t, r) => {
      "use strict";
      r.d(t, {
        Er: () => S,
        kk: () => x,
        t_: () => k,
        $X: () => R,
        IT: () => w,
        SX: () => O
      });
      var n = r(63461),
        i = r(64600),
        o = r(93186),
        a = r(64195),
        s = r(67848),
        u = r(79275),
        c = r(21926),
        l = r(32954),
        f = r(78054),
        h = r(1034),
        d = r(41492),
        p = r(91444),
        v = r(91359),
        y = r(6076),
        g = Symbol.for("apollo.hook.wrappers"),
        m = Object.prototype.hasOwnProperty;

      function b() {}
      var _ = Symbol();

      function w(e, t) {
        return void 0 === t && (t = Object.create(null)), ("useQuery", r = E, (o = (i = (n = (0, d.m)(t && t.client).queryManager) && n[g]) && i.useQuery) ? o(r) : r)(e, t);
        var r, n, i, o
      }

      function E(e, t) {
        var r = O(e, t),
          i = r.result,
          a = r.obsQueryFields;
        return o.useMemo((function() {
          return (0, n.__assign)((0, n.__assign)({}, i), a)
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
          g = function(e, t, r, i, a) {
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
              Object.assign(c.observable, ((t = {})[_] = e, t));
              var i = c.resultData;
              l((0, n.__assign)((0, n.__assign)({}, c), {
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
          w = g[0],
          E = w.observable,
          O = w.resultData,
          x = g[1],
          C = y(E);
        ! function(e, t, r, n, i) {
          var o;
          t[_] && !(0, s.L)(t[_], i) && (t.reobserve(k(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[_] = i
        }(O, E, r, t, C);
        var P = o.useMemo((function() {
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
        var j = function(e, t, r, n, i, u, c, l, h) {
          var d = o.useRef(h);
          o.useEffect((function() {
            d.current = h
          }));
          var p = !l && !u || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? M : void 0 : A,
            v = e.previousData,
            y = o.useMemo((function() {
              return p && R(p, v, t, r)
            }), [r, t, p, v]);
          return (0, a.r)(o.useCallback((function(n) {
            if (l) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && (0, s.L)(i.data, o.data) || T(o, e, t, r, c, n, d.current)
              },
              o = function(u) {
                if (a.current.unsubscribe(), a.current = t.resubscribeAfterError(i, o), !m.call(u, "graphQLErrors")) throw u;
                var l = e.current;
                (!l || l && l.loading || !(0, s.L)(u, l.error)) && T({
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
            return y || D(e, t, d.current, c, r)
          }), (function() {
            return y || D(e, t, d.current, c, r)
          }))
        }(O, E, r, t, C, l, v, u, {
          onCompleted: t.onCompleted || b,
          onError: t.onError || b
        });
        return {
          result: j,
          obsQueryFields: P,
          observable: E,
          resultData: O,
          client: r,
          onQueryExecuted: x
        }
      }

      function S(e, t, r, i) {
        void 0 === r && (r = {});
        var o = r.skip,
          a = (r.ssr, r.onCompleted, r.onError, r.defaultOptions),
          s = (0, n.__rest)(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        return function(r) {
          var n = Object.assign(s, {
            query: t
          });
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || x(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || x(a, e.defaultOptions)), n
        }
      }

      function k(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, p.o)(e && e.options, n)), i.reduce(u.l)
      }

      function T(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, v.E)(e.errors) && (e.error = new l.K4({
            graphQLErrors: e.errors
          })), t.current = R(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.__assign)((0, n.__assign)({}, e), {
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

      function D(e, t, r, n, i) {
        return e.current || T(t.getCurrentResult(), e, t, i, n, (function() {}), r), e.current
      }

      function x(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function R(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.__rest)(e, ["data", "partial"]));
        return (0, n.__assign)((0, n.__assign)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== A && e !== M,
          previousData: t
        })
      }
      var A = (0, y.G)({
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
    59094: (e, t, r) => {
      "use strict";
      r.d(t, {
        q: () => o
      });
      var n = r(93186),
        i = r(64195);

      function o(e) {
        return (0, i.r)(n.useCallback((function(t) {
          return e.onNextChange((function r() {
            t(), e.onNextChange(r)
          }))
        }), [e]), e, e)
      }
    },
    64195: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        r: () => u
      });
      var i = r(64600),
        o = r(93186),
        a = r(74712),
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
    1034: (e, t, r) => {
      "use strict";
      r.d(t, {
        D$: () => f,
        KG: () => n
      });
      var n, i, o = r(64600),
        a = r(19102),
        s = r(98867),
        u = r(51018);

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
        var g = y[0];
        t = g.variableDefinitions || [];
        var m = {
          name: g.name && "Name" === g.name.kind ? g.name.value : "data",
          type: r,
          variables: t
        };
        return i.set(e, m), m
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
    19102: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s,
        V: () => u
      });
      var n = r(36107),
        i = r(5160),
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
    51018: (e, t, r) => {
      "use strict";
      r.d(t, {
        D_: () => a,
        cM: () => u,
        ep: () => s,
        tQ: () => c
      });
      var n = r(63461),
        i = r(98867),
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
            sizes: (0, n.__assign)({
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
          return (0, n.__assign)((0, n.__assign)({}, l.apply(this)), {
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
        return e ? (0, n.__spreadArray)((0, n.__spreadArray)([f(null == e ? void 0 : e.performWork)], p(null == e ? void 0 : e.left), !0), p(null == e ? void 0 : e.right), !0).filter(h) : []
      }

      function v(e) {
        var t;
        return e ? (0, n.__spreadArray)((0, n.__spreadArray)([null === (t = null == e ? void 0 : e.getMemoryInternals) || void 0 === t ? void 0 : t.call(e)], v(null == e ? void 0 : e.left), !0), v(null == e ? void 0 : e.right), !0).filter(h) : []
      }
    },
    98867: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => a
      });
      var n = r(63461),
        i = r(64600),
        o = Symbol.for("apollo.cacheSize"),
        a = (0, n.__assign)({}, i.Sf[o])
    },
    91359: (e, t, r) => {
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
    74712: (e, t, r) => {
      "use strict";
      r.d(t, {
        En: () => a,
        JR: () => f,
        Sw: () => c,
        et: () => o,
        ol: () => s,
        uJ: () => u
      });
      var n = r(64600),
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
    24046: (e, t, r) => {
      "use strict";
      r.d(t, {
        M: () => s
      });
      var n, i = r(19102),
        o = r(98867),
        a = r(51018),
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
    14610: (e, t, r) => {
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
    91444: (e, t, r) => {
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
    79468: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nw: () => u,
        ST: () => a,
        YX: () => s,
        bd: () => c
      });
      var n = r(94505),
        i = r(91359),
        o = r(31447);

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
    95085: (e, t, r) => {
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
    6076: (e, t, r) => {
      "use strict";
      r.d(t, {
        G: () => i
      });
      var n = r(94505);

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
    31447: (e, t, r) => {
      "use strict";
      r.d(t, {
        D9: () => a,
        IM: () => s,
        ZI: () => c
      });
      var n = r(63461),
        i = r(94505),
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
                  var u = r.reconciler.apply(r, (0, n.__spreadArray)([e, t, i], a, !1));
                  u !== s && ((e = r.shallowCopyForMerge(e))[i] = u)
                }
              } else(e = r.shallowCopyForMerge(e))[i] = t[i]
            })), e) : t
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, i.U)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, n.__assign)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }()
    },
    79275: (e, t, r) => {
      "use strict";
      r.d(t, {
        l: () => o
      });
      var n = r(63461),
        i = r(91444);

      function o(e, t) {
        return (0, i.o)(e, t, t.variables && {
          variables: (0, i.o)((0, n.__assign)((0, n.__assign)({}, e && e.variables), t.variables))
        })
      }
    },
    94505: (e, t, r) => {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e
      }
      r.d(t, {
        U: () => n
      })
    },
    41339: (e, t, r) => {
      "use strict";
      r.d(t, {
        p: () => i
      });
      var n = r(95085);

      function i(e, t) {
        void 0 === t && (t = 0);
        var r = (0, n.v)("stringifyForDisplay");
        return JSON.stringify(e, (function(e, t) {
          return void 0 === t ? r : t
        }), t).split(JSON.stringify(r)).join("<undefined>")
      }
    },
    64600: (e, t, r) => {
      "use strict";
      r.d(t, {
        Sf: () => v,
        V1: () => m,
        no: () => p,
        vA: () => b
      });
      var n = r(63461),
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
          return (0, n.__extends)(t, e), t
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
      var d = r(43036);

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
      var y = r(41339);

      function g(e) {
        return function(t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = E(i)) || (t = O(i, r), r = [])
          }
          e.apply(void 0, [t].concat(r))
        }
      }
      var m = Object.assign((function(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        e || u(e, E(t, r) || O(t, r))
      }), {
        debug: g(u.debug),
        log: g(u.log),
        warn: g(u.warn),
        error: g(u.error)
      });

      function b(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return new s(E(e, t) || O(e, t))
      }
      var _ = Symbol.for("ApolloErrorMessageHandler_" + d.r);

      function w(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, y.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function E(e, t) {
        if (void 0 === t && (t = []), e) return v[_] && v[_](e, t.map(w))
      }

      function O(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: d.r,
          message: e,
          args: t.map(w)
        })))
      }
      globalThis.__DEV__
    },
    90306: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => f
      });
      var n = r(15784),
        i = r(74712),
        o = r(28265),
        a = r(64600),
        s = r(36107),
        u = r(3076),
        c = r(98867);

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
    80523: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => o,
        d8: () => a,
        f2: () => s,
        s7: () => u
      });
      var n = r(64600),
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
    60496: (e, t, r) => {
      "use strict";
      r.d(t, {
        HQ: () => u,
        JG: () => s,
        ct: () => a,
        s6: () => c
      });
      var n = r(63461),
        i = r(64600),
        o = r(16565);

      function a(e, t) {
        var r = t,
          o = [];
        return e.definitions.forEach((function(e) {
          if ("OperationDefinition" === e.kind) throw (0, i.vA)(85, e.operation, e.name ? " named '".concat(e.name.value, "'") : "");
          "FragmentDefinition" === e.kind && o.push(e)
        })), void 0 === r && ((0, i.V1)(1 === o.length, 86, o.length), r = o[0].name.value), (0, n.__assign)((0, n.__assign)({}, e), {
          definitions: (0, n.__spreadArray)([{
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
    28265: (e, t, r) => {
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
      var n = r(64600),
        i = r(84835);

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
    99086: (e, t, r) => {
      "use strict";
      r.d(t, {
        y: () => u
      });
      var n, i = r(16565),
        o = r(19102),
        a = r(98867),
        s = r(51018),
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
    84835: (e, t, r) => {
      "use strict";
      r.d(t, {
        A_: () => u,
        D$: () => g,
        Ii: () => f,
        J: () => l,
        Kc: () => c,
        MB: () => v,
        WU: () => s,
        dt: () => m,
        kd: () => b,
        o5: () => p,
        ue: () => y
      });
      var n = r(64600),
        i = r(94505),
        o = r(60496),
        a = r(24046);

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

      function g(e, t, r) {
        for (var n, i = 0, a = t.selections; i < a.length; i++)
          if (m(c = a[i])) {
            if ("__typename" === c.name.value) return e[y(c)]
          } else n ? n.push(c) : n = [c];
        if ("string" == typeof e.__typename) return e.__typename;
        if (n)
          for (var s = 0, u = n; s < u.length; s++) {
            var c = u[s],
              l = g(e, (0, o.HQ)(c, r).selectionSet, r);
            if ("string" == typeof l) return l
          }
      }

      function m(e) {
        return "Field" === e.kind
      }

      function b(e) {
        return "InlineFragment" === e.kind
      }
    },
    75437: (e, t, r) => {
      "use strict";
      r.d(t, {
        XY: () => v,
        er: () => g,
        iz: () => p,
        x3: () => m,
        zc: () => y
      });
      var n = r(63461),
        i = r(64600),
        o = r(16565),
        a = r(28265),
        s = r(84835),
        u = r(60496),
        c = r(91359),
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
        var p, v, y, g = (p = e, v = new Map, y = new Map, p.forEach((function(e) {
            e && (e.name ? v.set(e.name, e) : e.test && y.set(e.test, e))
          })), function(e) {
            var t = v.get(e.name.value);
            return !t && y.size && y.forEach((function(r, n) {
              n(e) && (t = r)
            })), t
          }),
          m = function(e) {
            return (0, c.E)(e) && e.map(g).some((function(e) {
              return e && e.remove
            }))
          },
          b = new Map,
          _ = !1,
          w = {
            enter: function(e) {
              if (m(e.directives)) return _ = !0, null
            }
          },
          E = (0, o.visit)(t, {
            Field: w,
            InlineFragment: w,
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
                if (m(e.directives)) return _ = !0, null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                b.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === b.get(JSON.stringify(n)) ? e : l > 0 && e.selectionSet.selections.every((function(e) {
                  return e.kind === o.Kind.FIELD && "__typename" === e.name.value
                })) ? (s(e.name.value).removed = !0, _ = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (g(e)) return _ = !0, null
              }
            }
          });
        if (!_) return t;
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
                if (t.size < e.variableDefinitions.length) return (0, n.__assign)((0, n.__assign)({}, e), {
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
                    })))) return (0, n.__assign)((0, n.__assign)({}, e), {
                    selections: (0, n.__spreadArray)((0, n.__spreadArray)([], i, !0), [l], !1)
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
              return (0, n.__assign)((0, n.__assign)({}, e), {
                operation: "query"
              })
            }
          }
        })
      }

      function g(e) {
        return (0, a.sw)(e), p([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }

      function m(e) {
        return (0, a.sw)(e), (0, o.visit)(e, {
          FragmentSpread: function(e) {
            var t;
            if (!(null === (t = e.directives) || void 0 === t ? void 0 : t.some((function(e) {
                return "unmask" === e.name.value
              })))) return (0, n.__assign)((0, n.__assign)({}, e), {
              directives: (0, n.__spreadArray)((0, n.__spreadArray)([], e.directives || [], !0), [{
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
    43036: (e, t, r) => {
      "use strict";
      r.d(t, {
        r: () => n
      });
      var n = "3.12.4"
    },
    5160: (e, t, r) => {
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
    36107: (e, t, r) => {
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
    67848: (e, t, r) => {
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
    15784: (e, t, r) => {
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
    6621: (e, t, r) => {
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
    3076: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => f,
        yN: () => q,
        LV: () => L
      });
      var n = r(15784),
        i = r(5160);
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

      function g(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const m = [],
        b = 100;

      function _(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function w(e, t) {
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
          if (1 === this.value.length && !D(this)) return k(this), this.value[0]
        }
        recompute(e) {
          return _(!this.recomputing, "already recomputing"), k(this), D(this) ? function(e, t) {
            return j(e), p.withValue(e, T, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  g(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, D(e) || R(e)
              }(e), E(e.value)
          }(this, e) : E(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, x(this), g(this))
        }
        dispose() {
          this.setDirty(), j(this), A(this, ((e, t) => {
            e.setDirty(), I(e, this)
          }))
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = m.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (y(this.deps).forEach((e => e.delete(this))), this.deps.clear(), m.push(this.deps), this.deps = null)
        }
      }

      function k(e) {
        const t = p.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), D(e) ? M(t, e) : C(t, e), t
      }

      function T(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: r
        } = e;
        let n;
        r && 1 === e.value.length && (n = O(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), r && n && !w(n, e.value)) try {
            e.value[0] = r(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function D(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function x(e) {
        A(e, M)
      }

      function R(e) {
        A(e, C)
      }

      function A(e, t) {
        const r = e.parents.size;
        if (r) {
          const n = y(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e)
        }
      }

      function M(e, t) {
        _(e.childValues.has(t)), _(D(t));
        const r = !D(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = m.pop() || new Set;
        e.dirtyChildren.add(t), r && x(e)
      }

      function C(e, t) {
        _(e.childValues.has(t)), _(!D(t));
        const r = e.childValues.get(t);
        0 === r.length ? e.childValues.set(t, O(t.value)) : w(r, t.value) || e.setDirty(), P(e, t), D(e) || R(e)
      }

      function P(e, t) {
        const r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (m.length < b && m.push(r), e.dirtyChildren = null))
      }

      function j(e) {
        e.childValues.size > 0 && e.childValues.forEach(((t, r) => {
          I(e, r)
        })), e.forgetDeps(), _(null === e.dirtyChildren)
      }

      function I(e, t) {
        t.parents.delete(e), e.childValues.delete(t), P(e, t)
      }
      S.count = 0;
      const F = {
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
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (g(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          const n = t.get(e);
          if (n) {
            const i = r && v.call(F, r) ? r : "setDirty";
            y(n).forEach((e => e[i]())), t.delete(e), g(n)
          }
        }, n
      }
      let V;

      function N() {
        const e = V || (V = new n.b("function" == typeof WeakMap));
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        return e.lookupArray(r)
      }
      const Q = new Set;

      function L(e) {
        let {
          max: t = Math.pow(2, 16),
          keyArgs: r,
          makeCacheKey: n = N,
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
            return u.set(t, i), Q.add(u), p.hasValue() || (Q.forEach((e => e.clean())), Q.clear()), s
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
    46686: (e, t, r) => {
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

      function g(e) {
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

      function m(e) {
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
              if (m(e), !i) throw r;
              i.call(n, r);
              break;
            case "complete":
              m(e), i && i.call(n)
          }
        } catch (e) {
          v(e)
        }
        "closed" === e._state ? g(e) : "running" === e._state && (e._state = "ready")
      }

      function _(e, t, r) {
        if ("closed" !== e._state) {
          if ("buffering" !== e._state) return "ready" !== e._state ? (e._state = "buffering", e._queue = [{
            type: t,
            value: r
          }], void y((function() {
            return function(e) {
              var t = e._queue;
              if (t) {
                e._queue = void 0, e._state = "ready";
                for (var r = 0; r < t.length && (b(e, t[r].type, t[r].value), "closed" !== e._state); ++r);
              }
            }(e)
          }))) : void b(e, t, r);
          e._queue.push({
            type: t,
            value: r
          })
        }
      }
      var w = function() {
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
            "closed" !== this._state && (m(this), g(this))
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
            }), new w(e, this._subscriber)
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