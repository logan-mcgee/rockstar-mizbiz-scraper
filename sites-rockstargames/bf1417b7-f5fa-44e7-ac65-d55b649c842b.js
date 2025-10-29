try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bf1417b7-f5fa-44e7-ac65-d55b649c842b", e._sentryDebugIdIdentifier = "sentry-dbid-bf1417b7-f5fa-44e7-ac65-d55b649c842b")
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
  [8602], {
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
    6306: e => {
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
      r(n, "ONETRUST_LOADED_EVENT", (() => i)), r(n, "WRAPPER_CALLED_EVENT", (() => s)), r(n, "CONSENT_CHANGED_EVENT", (() => a)), r(n, "init", (() => d));
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        s = "WRAPPER_CALLED_EVENT",
        a = "CONSENT_CHANGED_EVENT";
      let u = !0;

      function d(e) {
        const t = window.document.head,
          r = window.document.createElement("script");
        if (r.setAttribute("id", "onetrust-sdk-stub"), r.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("charset", "UTF-8"), r.setAttribute("data-document-language", "true"), o && (r.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        r.setAttribute("data-domain-script", e), t.insertBefore(r, t.firstChild), window.OptanonWrapper = function() {
          u && (u = !1, window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(s, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(a, {
              bubbles: !0
            }))
          }))
        }
      }
      var c = {};
      r(c, "NoChoiceTransactionType", (() => f)), r(c, "ConfirmedTransactionType", (() => h)), r(c, "canStoreCookie", (() => p));
      const f = "NO_CHOICE",
        h = "CONFIRMED",
        l = {
          AlwaysActive: "always active"
        };

      function p(e, t = null) {
        if (!window.OneTrust) return !1;
        const r = window.OneTrust.GetDomainData(),
          n = r.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!n) {
          const r = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(r), !1
        }
        if (n.Status === l.AlwaysActive) return !0;
        const o = r.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === n.PurposeId));
        return o?.TransactionType === h
      }
      t(e.exports, n), t(e.exports, c)
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

          function h(e) {
            return "string" != typeof e && (e = String(e)), e
          }

          function l(e) {
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

          function w(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function v() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && s && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = w(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = w(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
            })), l(e)
          }, p.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
              e.push(t)
            })), l(e)
          }, p.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push([r, t])
            })), l(e)
          }, i && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var g = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

          function E(e, t) {
            if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, o, i = (t = t || {}).body;
            if (e instanceof E) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (o = (r = t.method || this.method || "GET").toUpperCase(), g.indexOf(o) > -1 ? o : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in n) return (new AbortController).signal
              }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
              var s = /([?&])_=[^&]*/;
              s.test(this.url) ? this.url = this.url.replace(s, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
          }

          function _(e) {
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
          E.prototype.clone = function() {
            return new E(this, {
              body: this._bodyInit
            })
          }, v.call(E.prototype), v.call(T.prototype), T.prototype.clone = function() {
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
            return new Promise((function(o, i) {
              var a = new E(e, r);
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
                var l = [];
                Object.getOwnPropertyNames(r.headers).forEach((function(e) {
                  l.push(f(e)), d.setRequestHeader(e, h(r.headers[e]))
                })), a.headers.forEach((function(e, t) {
                  -1 === l.indexOf(t) && d.setRequestHeader(t, e)
                }))
              } else a.headers.forEach((function(e, t) {
                d.setRequestHeader(t, e)
              }));
              a.signal && (a.signal.addEventListener("abort", c), d.onreadystatechange = function() {
                4 === d.readyState && a.signal.removeEventListener("abort", c)
              }), d.send(void 0 === a._bodyInit ? null : a._bodyInit)
            }))
          }
          A.polyfill = !0, n.fetch || (n.fetch = A, n.Headers = p, n.Request = E, n.Response = T), t.Headers = p, t.Request = E, t.Response = T, t.fetch = A
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
        o = r(82966),
        i = r(35588),
        s = r(21429),
        a = r(57308),
        u = r(7569),
        d = r(86570),
        c = r(15492),
        f = r(74197);

      function h(e) {
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
      var l = {
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
          var p = (0, d.o)(l, e),
            y = p.sha256,
            b = p.generateHash,
            m = void 0 === b ? function(e) {
              return Promise.resolve(y((0, i.y)(e)))
            } : b,
            w = p.disable,
            v = p.retry,
            g = p.useGETForHashedQueries,
            E = !0,
            _ = function(e) {
              return new Promise((function(t) {
                return t(m(e))
              }))
            };
          return Object.assign(new s.C((function(e, i) {
            (0, o.V1)(i, 44);
            var s = e.query;
            return new a.c((function(o) {
              var a, d, l = !1,
                p = !1,
                y = function(t, n) {
                  var o = t.response,
                    s = t.networkError;
                  if (!l && (o && o.errors || s)) {
                    l = !0;
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
                      meta: h(c)
                    };
                    if ((E = !w(m)) || r(), v(m)) return a && a.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: E
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
                    includeQuery: !E,
                    includeExtensions: E
                  }
                }), g && E && ! function(e) {
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
                })), p = !0), E ? function(e) {
                  if (!e || "object" != typeof e) return _(e);
                  t || (t = new c.A(f.v["PersistedQueryLink.persistedQueryHashes"] || 2e3));
                  var r = t.get(e);
                  return r || t.set(e, r = _(e)), r
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
    89864: (e, t, r) => {
      "use strict";
      var n, o = (n = r(2333)) && n.__esModule ? n : {
        default: n
      };
      e.exports = o.default
    }
  }
]);