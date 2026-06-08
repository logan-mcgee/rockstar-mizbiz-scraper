try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "850da743-103a-427f-b6b3-cb89e881a622", e._sentryDebugIdIdentifier = "sentry-dbid-850da743-103a-427f-b6b3-cb89e881a622")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [565], {
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

          function g(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function b() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && a && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
            return e.trim().split("&").forEach(function(e) {
              if (e) {
                var r = e.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  i = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(i))
              }
            }), t
          }

          function k(e, t) {
            if (!(this instanceof k)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
          }
          w.prototype.clone = function() {
            return new w(this, {
              body: this._bodyInit
            })
          }, b.call(w.prototype), b.call(k.prototype), k.prototype.clone = function() {
            return new k(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new p(this.headers),
              url: this.url
            })
          }, k.error = function() {
            var e = new k(null, {
              status: 200,
              statusText: ""
            });
            return e.ok = !1, e.status = 0, e.type = "error", e
          };
          var T = [301, 302, 303, 307, 308];
          k.redirect = function(e, t) {
            if (-1 === T.indexOf(t)) throw new RangeError("Invalid status code");
            return new k(null, {
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

          function C(e, r) {
            return new Promise(function(i, o) {
              var s = new w(e, r);
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
                    i(new k(n, r))
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
          C.polyfill = !0, n.fetch || (n.fetch = C, n.Headers = p, n.Request = w, n.Response = k), t.Headers = p, t.Request = w, t.Response = k, t.fetch = C
        }({})
      }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
    },
    8670(e, t, r) {
      "use strict";
      r.d(t, {
        J1: () => f
      });
      var n = r(1177),
        i = r(7122),
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
          var d = (0, i.parse)(e, {
            experimentalFragmentVariables: u,
            allowLegacyFragmentVariables: u
          });
          if (!d || "Document" !== d.kind) throw new Error("Not a valid GraphQL document.");
          o.set(f, function(e) {
            var t = new Set(e.definitions);
            t.forEach(function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach(function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              })
            });
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }((t = d, r = new Set, l = [], t.definitions.forEach(function(e) {
            if ("FragmentDefinition" === e.kind) {
              var t = e.name.value,
                n = c((o = e.loc).source.body.substring(o.start, o.end)),
                i = a.get(t);
              i && !i.has(n) ? s && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : i || a.set(t, i = new Set), i.add(n), r.has(n) || (r.add(n), l.push(e))
            } else l.push(e);
            var o
          }), (0, n.Cl)((0, n.Cl)({}, t), {
            definitions: l
          }))))
        }
        return o.get(f)
      }

      function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach(function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        }), l(n)
      }
      var d, h = f;
      (d = f || (f = {})).gql = h, d.resetCaches = function() {
        o.clear(), a.clear()
      }, d.disableFragmentWarnings = function() {
        s = !1
      }, d.enableExperimentalFragmentVariables = function() {
        u = !0
      }, d.disableExperimentalFragmentVariables = function() {
        u = !1
      }, f.default = f
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
        g = 1,
        b = [],
        _ = [],
        w = [],
        E = Date.now,
        k = function(e, t) {
          return t
        },
        T = function(e, t) {
          return ~w.indexOf(e) && w[w.indexOf(e) + 1][t]
        },
        C = function(e) {
          return !!~h.indexOf(e)
        },
        O = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !1 !== n,
            capture: !!i
          })
        },
        S = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        x = "scrollLeft",
        D = "scrollTop",
        R = function() {
          return p && p.isPressed || _.cache++
        },
        P = function(e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              g && (a.history.scrollRestoration = "manual");
              var i = p && p.isPressed;
              n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0), e(n), r.cacheID = _.cache, i && k("ss", n)
            } else(t || _.cache !== r.cacheID || k("ref")) && (r.cacheID = _.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        M = {
          s: x,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: P(function(e) {
            return arguments.length ? a.scrollTo(e, A.sc()) : a.pageXOffset || s[x] || u[x] || c[x] || 0
          })
        },
        A = {
          s: D,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: M,
          sc: P(function(e) {
            return arguments.length ? a.scrollTo(M.sc(), e) : a.pageYOffset || s[D] || u[D] || c[D] || 0
          })
        },
        V = function(e, t) {
          return (t && t._ctx && t._ctx.selector || i.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        I = function(e, t) {
          var r = t.s,
            n = t.sc;
          C(e) && (e = s.scrollingElement || u);
          var o = _.indexOf(e),
            a = n === A.sc ? 1 : 2;
          !~o && (o = _.push(e) - 1), _[o + a] || O(e, "scroll", R);
          var c = _[o + a],
            l = c || (_[o + a] = P(T(e, r), !0) || (C(e) ? n : P(function(t) {
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
        q = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        j = function(e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        Q = function() {
          var e, t, r, n;
          (d = i.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, _), n.push.apply(n, w), _ = r, w = n, k = function(e, r) {
            return t[e](r)
          })
        },
        N = function(e) {
          return i = e || m(), !o && i && "undefined" != typeof document && document.body && (a = window, s = document, u = s.documentElement, c = s.body, h = [a, s, u, c], i.utils.clamp, y = i.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", l = L.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, v = L.eventTypes = ("ontouchstart" in u ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in u ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return g = 0
          }, 500), Q(), o = 1), o
        };
      M.op = A, _.cache = 0;
      var L = function() {
        function e(e) {
          this.init(e)
        }
        var t, r;
        return e.prototype.init = function(e) {
          o || N(i) || console.warn("Please gsap.registerPlugin(Observer)"), d || Q();
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            h = e.target,
            m = e.lineHeight,
            g = e.debounce,
            _ = e.preventDefault,
            w = e.onStop,
            k = e.onStopDelay,
            T = e.ignore,
            x = e.wheelSpeed,
            D = e.event,
            P = e.onDragStart,
            L = e.onDragEnd,
            z = e.onDrag,
            B = e.onPress,
            U = e.onRelease,
            W = e.onRight,
            H = e.onLeft,
            K = e.onUp,
            X = e.onDown,
            Y = e.onChangeX,
            G = e.onChangeY,
            J = e.onChange,
            $ = e.onToggleX,
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
          this.target = h = V(h) || u, this.vars = e, T && (T = i.utils.toArray(T)), t = t || 1e-9, r = r || 0, x = x || 1, fe = fe || 1, n = n || "wheel,touch,pointer", g = !1 !== g, m || (m = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
          var ye, me, ge, be, _e, we, Ee, ke = this,
            Te = 0,
            Ce = 0,
            Oe = e.passive || !_,
            Se = I(h, M),
            xe = I(h, A),
            De = Se(),
            Re = xe(),
            Pe = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === v[0],
            Me = C(h),
            Ae = h.ownerDocument || s,
            Ve = [0, 0, 0],
            Ie = [0, 0, 0],
            Fe = 0,
            qe = function() {
              return Fe = E()
            },
            je = function(e, t) {
              return (ke.event = e) && T && ~T.indexOf(e.target) || t && Pe && "touch" !== e.pointerType || ne && ne(e, t)
            },
            Qe = function() {
              var e = ke.deltaX = j(Ve),
                r = ke.deltaY = j(Ie),
                n = Math.abs(e) >= t,
                i = Math.abs(r) >= t;
              J && (n || i) && J(ke, e, r, Ve, Ie), n && (W && ke.deltaX > 0 && W(ke), H && ke.deltaX < 0 && H(ke), Y && Y(ke), $ && ke.deltaX < 0 != Te < 0 && $(ke), Te = ke.deltaX, Ve[0] = Ve[1] = Ve[2] = 0), i && (X && ke.deltaY > 0 && X(ke), K && ke.deltaY < 0 && K(ke), G && G(ke), Z && ke.deltaY < 0 != Ce < 0 && Z(ke), Ce = ke.deltaY, Ie[0] = Ie[1] = Ie[2] = 0), (be || ge) && (re && re(ke), ge && (z(ke), ge = !1), be = !1), we && !(we = !1) && ve && ve(ke), _e && (se(ke), _e = !1), ye = 0
            },
            Ne = function(e, t, r) {
              Ve[r] += e, Ie[r] += t, ke._vx.update(e), ke._vy.update(t), g ? ye || (ye = requestAnimationFrame(Qe)) : Qe()
            },
            Le = function(e, t) {
              pe && !Ee && (ke.axis = Ee = Math.abs(e) > Math.abs(t) ? "x" : "y", we = !0), "y" !== Ee && (Ve[2] += e, ke._vx.update(e, !0)), "x" !== Ee && (Ie[2] += t, ke._vy.update(t, !0)), g ? ye || (ye = requestAnimationFrame(Qe)) : Qe()
            },
            ze = function(e) {
              if (!je(e, 1)) {
                var t = (e = q(e, _)).clientX,
                  n = e.clientY,
                  i = t - ke.x,
                  o = n - ke.y,
                  a = ke.isDragging;
                ke.x = t, ke.y = n, (a || Math.abs(ke.startX - t) >= r || Math.abs(ke.startY - n) >= r) && (z && (ge = !0), a || (ke.isDragging = !0), Le(i, o), a || P && P(ke))
              }
            },
            Be = ke.onPress = function(e) {
              je(e, 1) || e && e.button || (ke.axis = Ee = null, me.pause(), ke.isPressed = !0, e = q(e), Te = Ce = 0, ke.startX = ke.x = e.clientX, ke.startY = ke.y = e.clientY, ke._vx.reset(), ke._vy.reset(), O(ie ? h : Ae, v[1], ze, Oe, !0), ke.deltaX = ke.deltaY = 0, B && B(ke))
            },
            Ue = ke.onRelease = function(e) {
              if (!je(e, 1)) {
                S(ie ? h : Ae, v[1], ze, !0);
                var t = !isNaN(ke.y - ke.startY),
                  r = ke.isDragging,
                  n = r && (Math.abs(ke.x - ke.startX) > 3 || Math.abs(ke.y - ke.startY) > 3),
                  o = q(e);
                !n && t && (ke._vx.reset(), ke._vy.reset(), _ && he && i.delayedCall(.08, function() {
                  if (E() - Fe > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Ae.createEvent) {
                    var t = Ae.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), ke.isDragging = ke.isGesturing = ke.isPressed = !1, w && r && !ie && me.restart(!0), L && r && L(ke), U && U(ke, n)
              }
            },
            We = function(e) {
              return e.touches && e.touches.length > 1 && (ke.isGesturing = !0) && oe(e, ke.isDragging)
            },
            He = function() {
              return (ke.isGesturing = !1) || ae(ke)
            },
            Ke = function(e) {
              if (!je(e)) {
                var t = Se(),
                  r = xe();
                Ne((t - De) * fe, (r - Re) * fe, 1), De = t, Re = r, w && me.restart(!0)
              }
            },
            Xe = function(e) {
              if (!je(e)) {
                e = q(e, _), se && (_e = !0);
                var t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? a.innerHeight : 1) * x;
                Ne(e.deltaX * t, e.deltaY * t, 0), w && !ie && me.restart(!0)
              }
            },
            Ye = function(e) {
              if (!je(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - ke.x,
                  i = r - ke.y;
                ke.x = t, ke.y = r, be = !0, w && me.restart(!0), (n || i) && Le(n, i)
              }
            },
            Ge = function(e) {
              ke.event = e, ee(ke)
            },
            Je = function(e) {
              ke.event = e, te(ke)
            },
            $e = function(e) {
              return je(e) || q(e, _) && le(ke)
            };
          me = ke._dc = i.delayedCall(k || .25, function() {
            ke._vx.reset(), ke._vy.reset(), me.pause(), w && w(ke)
          }).pause(), ke.deltaX = ke.deltaY = 0, ke._vx = F(0, 50, !0), ke._vy = F(0, 50, !0), ke.scrollX = Se, ke.scrollY = xe, ke.isDragging = ke.isGesturing = ke.isPressed = !1, y(this), ke.enable = function(e) {
            return ke.isEnabled || (O(Me ? Ae : h, "scroll", R), n.indexOf("scroll") >= 0 && O(Me ? Ae : h, "scroll", Ke, Oe, de), n.indexOf("wheel") >= 0 && O(h, "wheel", Xe, Oe, de), (n.indexOf("touch") >= 0 && l || n.indexOf("pointer") >= 0) && (O(h, v[0], Be, Oe, de), O(Ae, v[2], Ue), O(Ae, v[3], Ue), he && O(h, "click", qe, !0, !0), le && O(h, "click", $e), oe && O(Ae, "gesturestart", We), ae && O(Ae, "gestureend", He), ee && O(h, f + "enter", Ge), te && O(h, f + "leave", Je), re && O(h, f + "move", Ye)), ke.isEnabled = !0, e && e.type && Be(e), ue && ue(ke)), ke
          }, ke.disable = function() {
            ke.isEnabled && (b.filter(function(e) {
              return e !== ke && C(e.target)
            }).length || S(Me ? Ae : h, "scroll", R), ke.isPressed && (ke._vx.reset(), ke._vy.reset(), S(ie ? h : Ae, v[1], ze, !0)), S(Me ? Ae : h, "scroll", Ke, de), S(h, "wheel", Xe, de), S(h, v[0], Be, de), S(Ae, v[2], Ue), S(Ae, v[3], Ue), S(h, "click", qe, !0), S(h, "click", $e), S(Ae, "gesturestart", We), S(Ae, "gestureend", He), S(h, f + "enter", Ge), S(h, f + "leave", Je), S(h, f + "move", Ye), ke.isEnabled = ke.isPressed = ke.isDragging = !1, ce && ce(ke))
          }, ke.kill = ke.revert = function() {
            ke.disable();
            var e = b.indexOf(ke);
            e >= 0 && b.splice(e, 1), p === ke && (p = 0)
          }, b.push(ke), ie && C(h) && (p = ke), ke.enable(D)
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
      L.version = "3.12.5", L.create = function(e) {
        return new L(e)
      }, L.register = N, L.getAll = function() {
        return b.slice()
      }, L.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, m() && i.registerPlugin(L);
      var z, B, U, W, H, K, X, Y, G, J, $, Z, ee, te, re, ne, ie, oe, ae, se, ue, ce, le, fe, de, he, pe, ve, ye, me, ge, be, _e, we, Ee, ke, Te, Ce, Oe = 1,
        Se = Date.now,
        xe = Se(),
        De = 0,
        Re = 0,
        Pe = function(e, t, r) {
          var n = We(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Me = function(e, t) {
          return !t || We(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Ae = function e() {
          return Re && requestAnimationFrame(e)
        },
        Ve = function() {
          return te = 1
        },
        Ie = function() {
          return te = 0
        },
        Fe = function(e) {
          return e
        },
        qe = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        je = function() {
          return "undefined" != typeof window
        },
        Qe = function() {
          return z || je() && (z = window.gsap) && z.registerPlugin && z
        },
        Ne = function(e) {
          return !!~X.indexOf(e)
        },
        Le = function(e) {
          return ("Height" === e ? ge : U["inner" + e]) || H["client" + e] || K["client" + e]
        },
        ze = function(e) {
          return T(e, "getBoundingClientRect") || (Ne(e) ? function() {
            return tr.width = U.innerWidth, tr.height = ge, tr
          } : function() {
            return pt(e)
          })
        },
        Be = function(e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(0, (r = "scroll" + n) && (o = T(e, r)) ? o() - ze(e)()[i] : Ne(e) ? (H[r] || K[r]) - Le(n) : e[r] - e["offset" + n])
        },
        Ue = function(e, t) {
          for (var r = 0; r < ae.length; r += 3)(!t || ~t.indexOf(ae[r + 1])) && e(ae[r], ae[r + 1], ae[r + 2])
        },
        We = function(e) {
          return "string" == typeof e
        },
        He = function(e) {
          return "function" == typeof e
        },
        Ke = function(e) {
          return "number" == typeof e
        },
        Xe = function(e) {
          return "object" == typeof e
        },
        Ye = function(e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause()
        },
        Ge = function(e, t) {
          if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        Je = Math.abs,
        $e = "left",
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
          return U.getComputedStyle(e)
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
        wt = function(e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        Et = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        kt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Tt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Ct = function(e, t) {
          if (We(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in Tt ? Tt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Ot = function(e, t, r, n, i, o, a, s) {
          var u = i.startColor,
            c = i.endColor,
            l = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            h = W.createElement("div"),
            p = Ne(r) || "fixed" === T(r, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            y = p ? K : r,
            m = -1 !== e.indexOf("start"),
            g = m ? u : c,
            b = "border-color:" + g + ";font-size:" + l + ";color:" + g + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || s) && p ? "fixed;" : "absolute;"), (v || s || !p) && (b += (n === A ? Ze : et) + ":" + (o + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), h._isStart = m, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = b, h.innerText = t || 0 === t ? e + "-" + t : e, y.children[0] ? y.insertBefore(h, y.children[0]) : y.appendChild(h), h._offset = h["offset" + n.op.d2], St(h, 0, n, m), h
        },
        St = function(e, t, r, n) {
          var i = {
              display: "block"
            },
            o = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + ct] = 1, i["border" + a + ct] = 0, i[r.p] = t + "px", z.set(e, i)
        },
        xt = [],
        Dt = {},
        Rt = function() {
          return Se() - De > 34 && (Ee || (Ee = requestAnimationFrame(Xt)))
        },
        Pt = function() {
          (!le || !le.isPressed || le.startX > K.clientWidth) && (_.cache++, le ? Ee || (Ee = requestAnimationFrame(Xt)) : Xt(), De || qt("scrollStart"), De = Se())
        },
        Mt = function() {
          he = U.innerWidth, de = U.innerHeight
        },
        At = function() {
          _.cache++, !ee && !ce && !W.fullscreenElement && !W.webkitFullscreenElement && (!fe || he !== U.innerWidth || Math.abs(U.innerHeight - de) > .25 * U.innerHeight) && Y.restart(!0)
        },
        Vt = {},
        It = [],
        Ft = function e() {
          return _t(ur, "scrollEnd", e) || Wt(!0)
        },
        qt = function(e) {
          return Vt[e] && Vt[e].map(function(e) {
            return e()
          }) || It
        },
        jt = [],
        Qt = function(e) {
          for (var t = 0; t < jt.length; t += 5)(!e || jt[t + 4] && jt[t + 4].query === e) && (jt[t].style.cssText = jt[t + 1], jt[t].getBBox && jt[t].setAttribute("transform", jt[t + 2] || ""), jt[t + 3].uncache = 1)
        },
        Nt = function(e, t) {
          var r;
          for (ne = 0; ne < xt.length; ne++) !(r = xt[ne]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          be = !0, t && Qt(t), t || qt("revert")
        },
        Lt = function(e, t) {
          _.cache++, (t || !ke) && _.forEach(function(e) {
            return He(e) && e.cacheID++ && (e.rec = 0)
          }), We(e) && (U.history.scrollRestoration = ye = e)
        },
        zt = 0,
        Bt = function() {
          K.appendChild(me), ge = !le && me.offsetHeight || U.innerHeight, K.removeChild(me)
        },
        Ut = function(e) {
          return G(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Wt = function(e, t) {
          if (!De || e || be) {
            Bt(), ke = ur.isRefreshing = !0, _.forEach(function(e) {
              return He(e) && ++e.cacheID && (e.rec = e())
            });
            var r = qt("refreshInit");
            se && ur.sort(), t || Nt(), _.forEach(function(e) {
              He(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), xt.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, xt.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
              }
            }), _e = 1, Ut(!0), xt.forEach(function(e) {
              var t = Be(e.scroller, e._dir),
                r = "max" === e.vars.end || e._endClamp && e.end > t,
                n = e._startClamp && e.start >= t;
              (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
            }), Ut(!1), _e = 0, r.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), _.forEach(function(e) {
              He(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Lt(ye, 1), Y.pause(), zt++, ke = 2, Xt(2), xt.forEach(function(e) {
              return He(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), ke = ur.isRefreshing = !1, qt("refresh")
          } else bt(ur, "scrollEnd", Ft)
        },
        Ht = 0,
        Kt = 1,
        Xt = function(e) {
          if (2 === e || !ke && !be) {
            ur.isUpdating = !0, Ce && Ce.update(0);
            var t = xt.length,
              r = Se(),
              n = r - xe >= 50,
              i = t && xt[0].scroll();
            if (Kt = Ht > i ? -1 : 1, ke || (Ht = i), n && (De && !te && r - De > 200 && (De = 0, qt("scrollEnd")), $ = xe, xe = r), Kt < 0) {
              for (ne = t; ne-- > 0;) xt[ne] && xt[ne].update(0, n);
              Kt = 1
            } else
              for (ne = 0; ne < t; ne++) xt[ne] && xt[ne].update(0, n);
            ur.isUpdating = !1
          }
          Ee = 0
        },
        Yt = [$e, "top", et, Ze, ut + at, ut + nt, ut + ot, ut + it, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Gt = Yt.concat([tt, rt, "boxSizing", "max" + ct, "max" + lt, "position", ut, st, st + ot, st + nt, st + at, st + it]),
        Jt = function(e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, o = Yt.length, a = t.style, s = e.style; o--;) a[i = Yt[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[et] = s[Ze] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = vt(e, M) + ft, a[rt] = vt(e, A) + ft, a[st] = s[ut] = s.top = s[$e] = "0", Zt(n), s[tt] = s["max" + ct] = r[tt], s[rt] = s["max" + lt] = r[rt], s[st] = r[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        $t = /([A-Z])/g,
        Zt = function(e) {
          if (e) {
            var t, r, n = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace($t, "-$1").toLowerCase())
          }
        },
        er = function(e) {
          for (var t = Gt.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Gt[i], r[Gt[i]]);
          return n.t = e, n
        },
        tr = {
          left: 0,
          top: 0
        },
        rr = function(e, t, r, n, i, o, a, s, u, c, l, f, d, h) {
          He(e) && (e = e(s)), We(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ct("0" + e.substr(3), r) : 0));
          var p, v, y, m = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), Ke(e)) d && (e = z.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && St(a, r, n, !0);
          else {
            He(t) && (t = t(s));
            var g, b, _, w, E = (e || "0").split(" ");
            y = V(t, s) || K, (g = pt(y) || {}) && (g.left || g.top) || "none" !== dt(y).display || (w = y.style.display, y.style.display = "block", g = pt(y), w ? y.style.display = w : y.style.removeProperty("display")), b = Ct(E[0], g[n.d]), _ = Ct(E[1] || "0", r), e = g[n.p] - u[n.p] - c + b + i - _, a && St(a, _, n, r - _ < 20 || a._isStart && _ > 20), r -= r - _
          }
          if (h && (s[h] = e || -.001, e < 0 && (e = 0)), o) {
            var k = e + r,
              T = o._isStart;
            p = "scroll" + n.d2, St(o, k, n, T && k > 20 || !T && (l ? Math.max(K[p], H[p]) : o.parentNode[p]) <= k + 1), l && (u = pt(a), l && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + ft))
          }
          return d && y && (p = pt(y), d.seek(f), v = pt(y), d._caScrollDist = p[n.p] - v[n.p], e = e / d._caScrollDist * f), d && d.seek(m), d ? e : Math.round(e)
        },
        nr = /(webkit|moz|length|cssText|inset)/i,
        ir = function(e, t, r, n) {
          if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === K) {
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
          var r = I(e, t),
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
                _.cache++, t.tween && Xt()
              }, o.onComplete = function() {
                t.tween = 0, l && l.call(c)
              }, c = t.tween = z.to(e, o)
            };
          return e[n] = r, r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
          }, bt(e, "wheel", r.wheelHandler), ur.isTouch && bt(e, "touchmove", r.wheelHandler), i
        },
        ur = function() {
          function e(t, r) {
            B || e.register(z) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ve(this), this.init(t, r)
          }
          return e.prototype.init = function(t, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Re) {
              var n, i, o, a, s, u, c, l, f, d, h, p, v, y, m, g, b, E, k, C, O, S, x, D, R, P, F, q, j, Q, N, L, B, X, Y, Z, re, ie, oe, ae, ce, le, fe = t = ht(We(t) || Ke(t) || t.nodeType ? {
                  trigger: t
                } : t, kt),
                de = fe.onUpdate,
                he = fe.toggleClass,
                pe = fe.id,
                ve = fe.onToggle,
                ye = fe.onRefresh,
                me = fe.scrub,
                ge = fe.trigger,
                be = fe.pin,
                Ee = fe.pinSpacing,
                xe = fe.invalidateOnRefresh,
                Ae = fe.anticipatePin,
                Ve = fe.onScrubComplete,
                Ie = fe.onSnapComplete,
                je = fe.once,
                Qe = fe.snap,
                Ue = fe.pinReparent,
                $e = fe.pinSpacer,
                Ze = fe.containerAnimation,
                et = fe.fastScrollEnd,
                gt = fe.preventOverlaps,
                wt = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? M : A,
                Tt = !me && 0 !== me,
                St = V(t.scroller || U),
                Rt = z.core.getCache(St),
                Mt = Ne(St),
                Vt = "fixed" === ("pinType" in t ? t.pinType : T(St, "pinType") || Mt && "fixed"),
                It = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                qt = Tt && t.toggleActions.split(" "),
                jt = "markers" in t ? t.markers : kt.markers,
                Qt = Mt ? 0 : parseFloat(dt(St)["border" + wt.p2 + ct]) || 0,
                Nt = this,
                Lt = t.onRefreshInit && function() {
                  return t.onRefreshInit(Nt)
                },
                Bt = function(e, t, r) {
                  var n = r.d,
                    i = r.d2,
                    o = r.a;
                  return (o = T(e, "getBoundingClientRect")) ? function() {
                    return o()[n]
                  } : function() {
                    return (t ? Le(i) : e["client" + i]) || 0
                  }
                }(St, Mt, wt),
                Ut = function(e, t) {
                  return !t || ~w.indexOf(e) ? ze(e) : function() {
                    return tr
                  }
                }(St, Mt),
                Ht = 0,
                Xt = 0,
                Yt = 0,
                Gt = I(St, wt);
              if (Nt._startClamp = Nt._endClamp = !1, Nt._dir = wt, Ae *= 45, Nt.scroller = St, Nt.scroll = Ze ? Ze.time.bind(Ze) : Gt, a = Gt(), Nt.vars = t, r = r || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (Ce = Nt)), Rt.tweenScroll = Rt.tweenScroll || {
                  top: sr(St, A),
                  left: sr(St, M)
                }, Nt.tweenTo = n = Rt.tweenScroll[wt.p], Nt.scrubDuration = function(e) {
                  (B = Ke(e) && e) ? L ? L.duration(e) : L = z.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: B,
                    paused: !0,
                    onComplete: function() {
                      return Ve && Ve(Nt)
                    }
                  }): (L && L.progress(1).kill(), L = 0)
                }, r && (r.vars.lazy = !1, r._initted && !Nt.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), Nt.animation = r.pause(), r.scrollTrigger = Nt, Nt.scrubDuration(me), Q = 0, pe || (pe = r.vars.id)), Qe && (Xe(Qe) && !Qe.push || (Qe = {
                  snapTo: Qe
                }), "scrollBehavior" in K.style && z.set(Mt ? [K, H] : St, {
                  scrollBehavior: "auto"
                }), _.forEach(function(e) {
                  return He(e) && e.target === (Mt ? W.scrollingElement || H : St) && (e.smooth = !1)
                }), o = He(Qe.snapTo) ? Qe.snapTo : "labels" === Qe.snapTo ? function(e) {
                  return function(t) {
                    return z.utils.snap(yt(e), t)
                  }
                }(r) : "labelsDirectional" === Qe.snapTo ? (ae = r, function(e, t) {
                  return mt(yt(ae))(e, t.direction)
                }) : !1 !== Qe.directional ? function(e, t) {
                  return mt(Qe.snapTo)(e, Se() - Xt < 500 ? 0 : t.direction)
                } : z.utils.snap(Qe.snapTo), X = Qe.duration || {
                  min: .1,
                  max: 2
                }, X = Xe(X) ? J(X.min, X.max) : J(X, X), Y = z.delayedCall(Qe.delay || B / 2 || .1, function() {
                  var e = Gt(),
                    t = Se() - Xt < 500,
                    i = n.tween;
                  if (!(t || Math.abs(Nt.getVelocity()) < 10) || i || te || Ht === e) Nt.isActive && Ht !== e && Y.restart(!0);
                  else {
                    var a, s, l = (e - u) / y,
                      f = r && !Tt ? r.totalProgress() : l,
                      d = t ? 0 : (f - N) / (Se() - $) * 1e3 || 0,
                      h = z.utils.clamp(-l, 1 - l, Je(d / 2) * d / .185),
                      p = l + (!1 === Qe.inertia ? 0 : h),
                      v = Qe,
                      m = v.onStart,
                      g = v.onInterrupt,
                      b = v.onComplete;
                    if (a = o(p, Nt), Ke(a) || (a = p), s = Math.round(u + a * y), e <= c && e >= u && s !== e) {
                      if (i && !i._initted && i.data <= Je(s - e)) return;
                      !1 === Qe.inertia && (h = a - l), n(s, {
                        duration: X(Je(.185 * Math.max(Je(p - f), Je(a - f)) / d / .05 || 0)),
                        ease: Qe.ease || "power3",
                        data: Je(s - e),
                        onInterrupt: function() {
                          return Y.restart(!0) && g && g(Nt)
                        },
                        onComplete: function() {
                          Nt.update(), Ht = Gt(), r && (L ? L.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), Q = N = r && !Tt ? r.totalProgress() : Nt.progress, Ie && Ie(Nt), b && b(Nt)
                        }
                      }, e, h * y, s - e - h * y), m && m(Nt, n.tween)
                    }
                  }
                }).pause()), pe && (Dt[pe] = Nt), (oe = (ge = Nt.trigger = V(ge || !0 !== be && be)) && ge._gsap && ge._gsap.stRevert) && (oe = oe(Nt)), be = !0 === be ? ge : V(be), We(he) && (he = {
                  targets: ge,
                  className: he
                }), be && (!1 === Ee || Ee === ut || (Ee = !(!Ee && be.parentNode && be.parentNode.style && "flex" === dt(be.parentNode).display) && st), Nt.pin = be, (i = z.core.getCache(be)).spacer ? m = i.pinState : ($e && (($e = V($e)) && !$e.nodeType && ($e = $e.current || $e.nativeElement), i.spacerIsNative = !!$e, $e && (i.spacerState = er($e))), i.spacer = E = $e || W.createElement("div"), E.classList.add("pin-spacer"), pe && E.classList.add("pin-spacer-" + pe), i.pinState = m = er(be)), !1 !== t.force3D && z.set(be, {
                  force3D: !0
                }), Nt.spacer = E = i.spacer, j = dt(be), D = j[Ee + wt.os2], C = z.getProperty(be), O = z.quickSetter(be, wt.a, ft), Jt(be, E, j), b = er(be)), jt) {
                p = Xe(jt) ? ht(jt, Et) : Et, d = Ot("scroller-start", pe, St, wt, p, 0), h = Ot("scroller-end", pe, St, wt, p, 0, d), k = d["offset" + wt.op.d2];
                var $t = V(T(St, "content") || St);
                l = this.markerStart = Ot("start", pe, $t, wt, p, k, 0, Ze), f = this.markerEnd = Ot("end", pe, $t, wt, p, k, 0, Ze), Ze && (ie = z.quickSetter([l, f], wt.a, ft)), Vt || w.length && !0 === T(St, "fixedMarkers") || (le = dt(ce = Mt ? K : St).position, ce.style.position = "absolute" === le || "fixed" === le ? le : "relative", z.set([d, h], {
                  force3D: !0
                }), P = z.quickSetter(d, wt.a, ft), q = z.quickSetter(h, wt.a, ft))
              }
              if (Ze) {
                var nr = Ze.vars.onUpdate,
                  or = Ze.vars.onUpdateParams;
                Ze.eventCallback("onUpdate", function() {
                  Nt.update(0, 0, 1), nr && nr.apply(Ze, or || [])
                })
              }
              if (Nt.previous = function() {
                  return xt[xt.indexOf(Nt) - 1]
                }, Nt.next = function() {
                  return xt[xt.indexOf(Nt) + 1]
                }, Nt.revert = function(e, t) {
                  if (!t) return Nt.kill(!0);
                  var n = !1 !== e || !Nt.enabled,
                    i = ee;
                  n !== Nt.isReverted && (n && (Z = Math.max(Gt(), Nt.scroll.rec || 0), Yt = Nt.progress, re = r && r.progress()), l && [l, f, d, h].forEach(function(e) {
                    return e.style.display = n ? "none" : "block"
                  }), n && (ee = Nt, Nt.update(n)), !be || Ue && Nt.isActive || (n ? function(e, t, r) {
                    Zt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Zt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                      var i = t.parentNode;
                      i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, E, m) : Jt(be, E, dt(be), R)), n || Nt.update(n), ee = i, Nt.isReverted = n)
                }, Nt.refresh = function(i, o, p, _) {
                  if (!ee && Nt.enabled || o)
                    if (be && i && De) bt(e, "scrollEnd", Ft);
                    else {
                      !ke && Lt && Lt(Nt), ee = Nt, n.tween && !p && (n.tween.kill(), n.tween = 0), L && L.pause(), xe && r && r.revert({
                        kill: !1
                      }).invalidate(), Nt.isReverted || Nt.revert(!0, !0), Nt._subPinOffset = !1;
                      var w, k, T, O, D, P, q, j, Q, N, B, U, X, G = Bt(),
                        J = Ut(),
                        $ = Ze ? Ze.duration() : Be(St, wt),
                        te = y <= .01,
                        ne = 0,
                        ie = _ || 0,
                        oe = Xe(p) ? p.end : t.end,
                        ae = t.endTrigger || ge,
                        se = Xe(p) ? p.start : t.start || (0 !== t.start && ge ? be ? "0 0" : "0 100%" : 0),
                        ce = Nt.pinnedContainer = t.pinnedContainer && V(t.pinnedContainer, Nt),
                        le = ge && Math.max(0, xt.indexOf(Nt)) || 0,
                        fe = le;
                      for (jt && Xe(p) && (U = z.getProperty(d, wt.p), X = z.getProperty(h, wt.p)); fe--;)(P = xt[fe]).end || P.refresh(0, 1) || (ee = Nt), !(q = P.pin) || q !== ge && q !== be && q !== ce || P.isReverted || (N || (N = []), N.unshift(P), P.revert(!0, !0)), P !== xt[fe] && (le--, fe--);
                      for (He(se) && (se = se(Nt)), se = Pe(se, "start", Nt), u = rr(se, ge, G, wt, Gt(), l, d, Nt, J, Qt, Vt, $, Ze, Nt._startClamp && "_startClamp") || (be ? -.001 : 0), He(oe) && (oe = oe(Nt)), We(oe) && !oe.indexOf("+=") && (~oe.indexOf(" ") ? oe = (We(se) ? se.split(" ")[0] : "") + oe : (ne = Ct(oe.substr(2), G), oe = We(se) ? se : (Ze ? z.utils.mapRange(0, Ze.duration(), Ze.scrollTrigger.start, Ze.scrollTrigger.end, u) : u) + ne, ae = ge)), oe = Pe(oe, "end", Nt), c = Math.max(u, rr(oe || (ae ? "100% 0" : $), ae, G, wt, Gt() + ne, f, h, Nt, J, Qt, Vt, $, Ze, Nt._endClamp && "_endClamp")) || -.001, ne = 0, fe = le; fe--;)(q = (P = xt[fe]).pin) && P.start - P._pinPush <= u && !Ze && P.end > 0 && (w = P.end - (Nt._startClamp ? Math.max(0, P.start) : P.start), (q === ge && P.start - P._pinPush < u || q === ce) && isNaN(se) && (ne += w * (1 - P.progress)), q === be && (ie += w));
                      if (u += ne, c += ne, Nt._startClamp && (Nt._startClamp += ne), Nt._endClamp && !ke && (Nt._endClamp = c || -.001, c = Math.min(c, Be(St, wt))), y = c - u || (u -= .01) && .001, te && (Yt = z.utils.clamp(0, 1, z.utils.normalize(u, c, Z))), Nt._pinPush = ie, l && ne && ((w = {})[wt.a] = "+=" + ne, ce && (w[wt.p] = "-=" + Gt()), z.set([l, f], w)), !be || _e && Nt.end >= Be(St, wt)) {
                        if (ge && Gt() && !Ze)
                          for (k = ge.parentNode; k && k !== K;) k._pinOffset && (u -= k._pinOffset, c -= k._pinOffset), k = k.parentNode
                      } else w = dt(be), O = wt === A, T = Gt(), S = parseFloat(C(wt.a)) + ie, !$ && c > 1 && (B = {
                        style: B = (Mt ? W.scrollingElement || H : St).style,
                        value: B["overflow" + wt.a.toUpperCase()]
                      }, Mt && "scroll" !== dt(K)["overflow" + wt.a.toUpperCase()] && (B.style["overflow" + wt.a.toUpperCase()] = "scroll")), Jt(be, E, w), b = er(be), k = pt(be, !0), j = Vt && I(St, O ? M : A)(), Ee ? ((R = [Ee + wt.os2, y + ie + ft]).t = E, (fe = Ee === st ? vt(be, wt) + y + ie : 0) && (R.push(wt.d, fe + ft), "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft)), Zt(R), ce && xt.forEach(function(e) {
                        e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Vt && Gt(Z)) : (fe = vt(be, wt)) && "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft), Vt && ((D = {
                        top: k.top + (O ? T - u : j) + ft,
                        left: k.left + (O ? j : T - u) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = D["max" + ct] = Math.ceil(k.width) + ft, D[rt] = D["max" + lt] = Math.ceil(k.height) + ft, D[ut] = D[ut + ot] = D[ut + nt] = D[ut + at] = D[ut + it] = "0", D[st] = w[st], D[st + ot] = w[st + ot], D[st + nt] = w[st + nt], D[st + at] = w[st + at], D[st + it] = w[st + it], g = function(e, t, r) {
                        for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                        return i.t = e.t, i
                      }(m, D, Ue), ke && Gt(0)), r ? (Q = r._initted, ue(1), r.render(r.duration(), !0, !0), x = C(wt.a) - S + y + ie, F = Math.abs(y - x) > 1, Vt && F && g.splice(g.length - 2, 2), r.render(0, !0, !0), Q || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ue(0)) : x = y, B && (B.value ? B.style["overflow" + wt.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + wt.a));
                      N && N.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), Nt.start = u, Nt.end = c, a = s = ke ? Z : Gt(), Ze || ke || (a < Z && Gt(Z), Nt.scroll.rec = 0), Nt.revert(!1, !0), Xt = Se(), Y && (Ht = -1, Y.restart(!0)), ee = 0, r && Tt && (r._initted || re) && r.progress() !== re && r.progress(re || 0, !0).render(r.time(), !0, !0), (te || Yt !== Nt.progress || Ze || xe) && (r && !Tt && r.totalProgress(Ze && u < -.001 && !Yt ? z.utils.normalize(u, c, 0) : Yt, !0), Nt.progress = te || (a - u) / y === Yt ? 0 : Yt), be && Ee && (E._pinOffset = Math.round(Nt.progress * x)), L && L.invalidate(), isNaN(U) || (U -= z.getProperty(d, wt.p), X -= z.getProperty(h, wt.p), ar(d, wt, U), ar(l, wt, U - (_ || 0)), ar(h, wt, X), ar(f, wt, X - (_ || 0))), te && !ke && Nt.update(), !ye || ke || v || (v = !0, ye(Nt), v = !1)
                    }
                }, Nt.getVelocity = function() {
                  return (Gt() - s) / (Se() - $) * 1e3 || 0
                }, Nt.endAnimation = function() {
                  Ye(Nt.callbackAnimation), r && (L ? L.progress(1) : r.paused() ? Tt || Ye(r, Nt.direction < 0, 1) : Ye(r, r.reversed()))
                }, Nt.labelToScroll = function(e) {
                  return r && r.labels && (u || Nt.refresh() || u) + r.labels[e] / r.duration() * y || 0
                }, Nt.getTrailing = function(e) {
                  var t = xt.indexOf(Nt),
                    r = Nt.direction > 0 ? xt.slice(0, t).reverse() : xt.slice(t + 1);
                  return (We(e) ? r.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : r).filter(function(e) {
                    return Nt.direction > 0 ? e.end <= u : e.start >= c
                  })
                }, Nt.update = function(e, t, i) {
                  if (!Ze || i || e) {
                    var o, l, f, h, p, v, m, _ = !0 === ke ? Z : Nt.scroll(),
                      w = e ? 0 : (_ - u) / y,
                      k = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                      T = Nt.progress;
                    if (t && (s = a, a = Ze ? Gt() : _, Qe && (N = Q, Q = r && !Tt ? r.totalProgress() : k)), Ae && be && !ee && !Oe && De && (!k && u < _ + (_ - s) / (Se() - $) * Ae ? k = 1e-4 : 1 === k && c > _ + (_ - s) / (Se() - $) * Ae && (k = .9999)), k !== T && Nt.enabled) {
                      if (h = (p = (o = Nt.isActive = !!k && k < 1) != (!!T && T < 1)) || !!k != !!T, Nt.direction = k > T ? 1 : -1, Nt.progress = k, h && !ee && (l = k && !T ? 0 : 1 === k ? 1 : 1 === T ? 2 : 3, Tt && (f = !p && "none" !== qt[l + 1] && qt[l + 1] || qt[l], m = r && ("complete" === f || "reset" === f || f in r))), gt && (p || m) && (m || me || !r) && (He(gt) ? gt(Nt) : Nt.getTrailing(gt).forEach(function(e) {
                          return e.endAnimation()
                        })), Tt || (!L || ee || Oe ? r && r.totalProgress(k, !(!ee || !Xt && !e)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo("totalProgress", k, r._tTime / r._tDur) : (L.vars.totalProgress = k, L.invalidate().restart()))), be)
                        if (e && Ee && (E.style[Ee + wt.os2] = D), Vt) {
                          if (h) {
                            if (v = !e && k > T && c + 1 > _ && _ + 1 >= Be(St, wt), Ue)
                              if (e || !o && !v) ir(be, E);
                              else {
                                var C = pt(be, !0),
                                  R = _ - u;
                                ir(be, K, C.top + (wt === A ? R : 0) + ft, C.left + (wt === A ? 0 : R) + ft)
                              } Zt(o || v ? g : b), F && k < 1 && o || O(S + (1 !== k || v ? 0 : x))
                          }
                        } else O(qe(S + x * k));
                      Qe && !n.tween && !ee && !Oe && Y.restart(!0), he && (p || je && k && (k < 1 || !we)) && G(he.targets).forEach(function(e) {
                        return e.classList[o || je ? "add" : "remove"](he.className)
                      }), de && !Tt && !e && de(Nt), h && !ee ? (Tt && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), de && de(Nt)), !p && we || (ve && p && Ge(Nt, ve), It[l] && Ge(Nt, It[l]), je && (1 === k ? Nt.kill(!1, 1) : It[l] = 0), p || It[l = 1 === k ? 1 : 3] && Ge(Nt, It[l])), et && !o && Math.abs(Nt.getVelocity()) > (Ke(et) ? et : 2500) && (Ye(Nt.callbackAnimation), L ? L.progress(1) : Ye(r, "reverse" === f ? 1 : !k, 1))) : Tt && de && !ee && de(Nt)
                    }
                    if (q) {
                      var M = Ze ? _ / Ze.duration() * (Ze._caScrollDist || 0) : _;
                      P(M + (d._isFlipped ? 1 : 0)), q(M)
                    }
                    ie && ie(-_ / Ze.duration() * (Ze._caScrollDist || 0))
                  }
                }, Nt.enable = function(t, r) {
                  Nt.enabled || (Nt.enabled = !0, bt(St, "resize", At), Mt || bt(St, "scroll", Pt), Lt && bt(e, "refreshInit", Lt), !1 !== t && (Nt.progress = Yt = 0, a = s = Ht = Gt()), !1 !== r && Nt.refresh())
                }, Nt.getTween = function(e) {
                  return e && n ? n.tween : L
                }, Nt.setPositions = function(e, t, r, n) {
                  if (Ze) {
                    var i = Ze.scrollTrigger,
                      o = Ze.duration(),
                      a = i.end - i.start;
                    e = i.start + a * e / o, t = i.start + a * t / o
                  }
                  Nt.refresh(!1, !1, {
                    start: Me(e, r && !!Nt._startClamp),
                    end: Me(t, r && !!Nt._endClamp)
                  }, n), Nt.update()
                }, Nt.adjustPinSpacing = function(e) {
                  if (R && e) {
                    var t = R.indexOf(wt.d) + 1;
                    R[t] = parseFloat(R[t]) + e + ft, R[1] = parseFloat(R[1]) + e + ft, Zt(R)
                  }
                }, Nt.disable = function(t, r) {
                  if (Nt.enabled && (!1 !== t && Nt.revert(!0, !0), Nt.enabled = Nt.isActive = !1, r || L && L.pause(), Z = 0, i && (i.uncache = 1), Lt && _t(e, "refreshInit", Lt), Y && (Y.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Mt)) {
                    for (var o = xt.length; o--;)
                      if (xt[o].scroller === St && xt[o] !== Nt) return;
                    _t(St, "resize", At), Mt || _t(St, "scroll", Pt)
                  }
                }, Nt.kill = function(e, n) {
                  Nt.disable(e, n), L && !n && L.kill(), pe && delete Dt[pe];
                  var o = xt.indexOf(Nt);
                  o >= 0 && xt.splice(o, 1), o === ne && Kt > 0 && ne--, o = 0, xt.forEach(function(e) {
                    return e.scroller === Nt.scroller && (o = 1)
                  }), o || ke || (Nt.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                    kill: !1
                  }), n || r.kill()), l && [l, f, d, h].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), Ce === Nt && (Ce = 0), be && (i && (i.uncache = 1), o = 0, xt.forEach(function(e) {
                    return e.pin === be && o++
                  }), o || (i.spacer = 0)), t.onKill && t.onKill(Nt)
                }, xt.push(Nt), Nt.enable(!1, !1), oe && oe(Nt), r && r.add && !y) {
                var ur = Nt.update;
                Nt.update = function() {
                  Nt.update = ur, u || c || Nt.refresh()
                }, z.delayedCall(.01, Nt.update), y = .01, u = c = 0
              } else Nt.refresh();
              be && function() {
                if (Te !== zt) {
                  var e = Te = zt;
                  requestAnimationFrame(function() {
                    return e === zt && Wt(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Fe
          }, e.register = function(t) {
            return B || (z = t || Qe(), je() && window.document && e.enable(), B = Re), B
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) kt[t] = e[t];
            return kt
          }, e.disable = function(e, t) {
            Re = 0, xt.forEach(function(r) {
              return r[t ? "kill" : "disable"](e)
            }), _t(U, "wheel", Pt), _t(W, "scroll", Pt), clearInterval(Z), _t(W, "touchcancel", Fe), _t(K, "touchstart", Fe), gt(_t, W, "pointerdown,touchstart,mousedown", Ve), gt(_t, W, "pointerup,touchend,mouseup", Ie), Y.kill(), Ue(_t);
            for (var r = 0; r < _.length; r += 3) wt(_t, _[r], _[r + 1]), wt(_t, _[r], _[r + 2])
          }, e.enable = function() {
            if (U = window, W = document, H = W.documentElement, K = W.body, z && (G = z.utils.toArray, J = z.utils.clamp, ve = z.core.context || Fe, ue = z.core.suppressOverwrites || Fe, ye = U.history.scrollRestoration || "auto", Ht = U.pageYOffset, z.core.globals("ScrollTrigger", e), K)) {
              Re = 1, (me = document.createElement("div")).style.height = "100vh", me.style.position = "absolute", Bt(), Ae(), L.register(z), e.isTouch = L.isTouch, pe = L.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === L.isTouch, bt(U, "wheel", Pt), X = [U, W, H, K], z.matchMedia ? (e.matchMedia = function(e) {
                var t, r = z.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
              }, z.addEventListener("matchMediaInit", function() {
                return Nt()
              }), z.addEventListener("matchMediaRevert", function() {
                return Qt()
              }), z.addEventListener("matchMedia", function() {
                Wt(0, 1), qt("matchMedia")
              }), z.matchMedia("(orientation: portrait)", function() {
                return Mt(), Mt
              })) : console.warn("Requires GSAP 3.11.0 or later"), Mt(), bt(W, "scroll", Pt);
              var t, r, n = K.style,
                i = n.borderTopStyle,
                o = z.core.Animation.prototype;
              for (o.revert || Object.defineProperty(o, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", t = pt(K), A.m = Math.round(t.top + A.sc()) || 0, M.m = Math.round(t.left + M.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Z = setInterval(Rt, 250), z.delayedCall(.5, function() {
                  return Oe = 0
                }), bt(W, "touchcancel", Fe), bt(K, "touchstart", Fe), gt(bt, W, "pointerdown,touchstart,mousedown", Ve), gt(bt, W, "pointerup,touchend,mouseup", Ie), re = z.utils.checkPrefix("transform"), Gt.push(re), B = Se(), Y = z.delayedCall(.2, Wt).pause(), ae = [W, "visibilitychange", function() {
                  var e = U.innerWidth,
                    t = U.innerHeight;
                  W.hidden ? (ie = e, oe = t) : ie === e && oe === t || At()
                }, W, "DOMContentLoaded", Wt, U, "load", Wt, U, "resize", At], Ue(bt), xt.forEach(function(e) {
                  return e.enable(0, 1)
                }), r = 0; r < _.length; r += 3) wt(_t, _[r], _[r + 1]), wt(_t, _[r], _[r + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (we = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(Z) || (Z = r) && setInterval(Rt, r), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ue(_t) || Ue(bt, t.autoRefreshEvents || "none"), ce = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var r = V(e),
              n = _.indexOf(r),
              i = Ne(r);
            ~n && _.splice(n, i ? 6 : 2), t && (i ? w.unshift(U, t, K, t, H, t) : w.unshift(r, t))
          }, e.clearMatchMedia = function(e) {
            xt.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, r) {
            var n = (We(e) ? V(e) : e).getBoundingClientRect(),
              i = n[r ? tt : rt] * t || 0;
            return r ? n.right - i > 0 && n.left + i < U.innerWidth : n.bottom - i > 0 && n.top + i < U.innerHeight
          }, e.positionInViewport = function(e, t, r) {
            We(e) && (e = V(e));
            var n = e.getBoundingClientRect(),
              i = n[r ? tt : rt],
              o = null == t ? i / 2 : t in Tt ? Tt[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / U.innerWidth : (n.top + o) / U.innerHeight
          }, e.killAll = function(e) {
            if (xt.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              }), !0 !== e) {
              var t = Vt.killAll || [];
              Vt = {}, t.forEach(function(e) {
                return e()
              })
            }
          }, e
        }();
      ur.version = "3.12.5", ur.saveStyles = function(e) {
        return e ? G(e).forEach(function(e) {
          if (e && e.style) {
            var t = jt.indexOf(e);
            t >= 0 && jt.splice(t, 5), jt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), z.core.getCache(e), ve())
          }
        }) : jt
      }, ur.revert = function(e, t) {
        return Nt(!e, t)
      }, ur.create = function(e, t) {
        return new ur(e, t)
      }, ur.refresh = function(e) {
        return e ? At() : (B || ur.register()) && Wt(!0)
      }, ur.update = function(e) {
        return ++_.cache && Xt(!0 === e ? 2 : 0)
      }, ur.clearScrollMemory = Lt, ur.maxScroll = function(e, t) {
        return Be(e, t ? M : A)
      }, ur.getScrollFunc = function(e, t) {
        return I(V(e), t ? M : A)
      }, ur.getById = function(e) {
        return Dt[e]
      }, ur.getAll = function() {
        return xt.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, ur.isScrolling = function() {
        return !!De
      }, ur.snapDirectional = mt, ur.addEventListener = function(e, t) {
        var r = Vt[e] || (Vt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, ur.removeEventListener = function(e, t) {
        var r = Vt[e],
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
        for (r in t) i[r] = "on" === r.substr(0, 2) && He(t[r]) && "onRefreshInit" !== r ? s(0, t[r]) : t[r];
        return He(a) && (a = a(), bt(ur, "refresh", function() {
          return a = t.batchMax()
        })), G(e).forEach(function(e) {
          var t = {};
          for (r in i) t[r] = i[r];
          t.trigger = e, n.push(ur.create(t))
        }), n
      };
      var cr, lr = function(e, t, r, n) {
          return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
        },
        fr = function e(t, r) {
          !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (L.isTouch ? " pinch-zoom" : "") : "none", t === H && e(K, r)
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
            s = Se();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; o && o !== K && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !dr[(t = dt(o)).overflowY] && !dr[t.overflowX]);) o = o.parentNode;
            a._isScroll = o && o !== n && !Ne(o) && (dr[(t = dt(o)).overflowY] || dr[t.overflowX]), a._isScrollT = s, !o.hasAttribute("role") || "dialog" !== o.getAttribute("role") || o.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        pr = function(e, t, r, n) {
          return L.create({
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
              return r && bt(W, L.eventTypes[0], yr, !1, !0)
            },
            onDisable: function() {
              return _t(W, L.eventTypes[0], yr, !0)
            }
          })
        },
        vr = /(input|label|select|textarea)/i,
        yr = function(e) {
          var t = vr.test(e.target.tagName);
          (t || cr) && (e._gsapAllow = !0, cr = t)
        };
      ur.sort = function(e) {
        return xt.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, ur.observe = function(e) {
        return new L(e)
      }, ur.normalizeScroll = function(e) {
        if (void 0 === e) return le;
        if (!0 === e && le) return le.enable();
        if (!1 === e) return le && le.kill(), void(le = e);
        var t = e instanceof L ? e : function(e) {
          Xe(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, r, n, i, o, a, s, u, c = e,
            l = c.normalizeScrollX,
            f = c.momentum,
            d = c.allowNestedScroll,
            h = c.onRelease,
            p = V(e.target) || H,
            v = z.core.globals().ScrollSmoother,
            y = v && v.get(),
            m = pe && (e.content && V(e.content) || y && !1 !== e.content && !y.smooth() && y.content()),
            g = I(p, A),
            b = I(p, M),
            w = 1,
            E = (L.isTouch && U.visualViewport ? U.visualViewport.scale * U.visualViewport.width : U.outerWidth) / U.innerWidth,
            k = 0,
            T = He(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            C = pr(p, e.type, !0, d),
            O = function() {
              return i = !1
            },
            S = Fe,
            x = Fe,
            D = function() {
              r = Be(p, A), x = J(pe ? 1 : 0, r), l && (S = J(0, Be(p, M))), n = zt
            },
            R = function() {
              m._gsap.y = qe(parseFloat(m._gsap.y) + g.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", g.offset = g.cacheID = 0
            },
            P = function() {
              D(), o.isActive() && o.vars.scrollY > r && (g() > r ? o.progress(1) && g(r) : o.resetTo("scrollY", r))
            };
          return m && z.set(m, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return pe && "touchmove" === e.type && function() {
              if (i) {
                requestAnimationFrame(O);
                var e = qe(t.deltaY / 2),
                  r = x(g.v - e);
                if (m && r !== g.v + g.offset) {
                  g.offset = r - g.v;
                  var n = qe((parseFloat(m && m._gsap.y) || 0) - g.offset);
                  m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", g.cacheID = _.cache, Xt()
                }
                return !0
              }
              g.offset && R(), i = !0
            }() || w > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            i = !1;
            var e = w;
            w = qe((U.visualViewport && U.visualViewport.scale || 1) / E), o.pause(), e !== w && fr(p, w > 1.01 || !l && "x"), a = b(), s = g(), D(), n = zt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (g.offset && R(), t) {
              _.cache++;
              var n, i, a = T();
              l && (i = (n = b()) + .05 * a * -e.velocityX / .227, a *= lr(b, n, i, Be(p, M)), o.vars.scrollX = S(i)), i = (n = g()) + .05 * a * -e.velocityY / .227, a *= lr(g, n, i, Be(p, A)), o.vars.scrollY = x(i), o.invalidate().duration(a).play(.01), (pe && o.vars.scrollY >= r || n >= r - 1) && z.to({}, {
                onUpdate: P,
                duration: a
              })
            } else u.restart(!0);
            h && h(e)
          }, e.onWheel = function() {
            o._ts && o.pause(), Se() - k > 1e3 && (n = 0, k = Se())
          }, e.onChange = function(e, t, r, i, o) {
            if (zt !== n && D(), t && l && b(S(i[2] === t ? a + (e.startX - e.x) : b() + t - i[1])), r) {
              g.offset && R();
              var u = o[2] === r,
                c = u ? s + e.startY - e.y : g() + r - o[1],
                f = x(c);
              u && c !== f && (s += f - c), g(f)
            }(r || t) && Xt()
          }, e.onEnable = function() {
            fr(p, !l && "x"), ur.addEventListener("refresh", P), bt(U, "resize", P), g.smooth && (g.target.style.scrollBehavior = "auto", g.smooth = b.smooth = !1), C.enable()
          }, e.onDisable = function() {
            fr(p, !0), _t(U, "resize", P), ur.removeEventListener("refresh", P), C.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new L(e)).iOS = pe, pe && !g() && g(1), pe && z.ticker.add(Fe), u = t._dc, o = z.to(t, {
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
            onUpdate: Xt,
            onComplete: u.vars.onComplete
          }), t
        }(e);
        return le && le.target === t.target && le.kill(), Ne(t.target) && (le = t), t
      }, ur.core = {
        _getVelocityProp: F,
        _inputObserver: pr,
        _scrollers: _,
        _proxies: w,
        bridge: {
          ss: function() {
            De || qt("scrollStart"), De = Se()
          },
          ref: function() {
            return ee
          }
        }
      }, Qe() && z.registerPlugin(ur)
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
        D: () => Ae
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
              var g = o || (0, c.E4)(r).name.value;
              y || !1 !== globalThis.__DEV__ && i.V1.warn(1, g)
            }
            var b, _ = (0, n.Cl)((0, n.Cl)({}, d), {
              returnPartialData: !0,
              id: y,
              query: h,
              optimistic: u
            });
            return new l.c(function(i) {
              return t.watch((0, n.Cl)((0, n.Cl)({}, _), {
                immediate: !0,
                callback: function(a) {
                  var s = m ? (0, v.z)(a.result, r, t, o) : a.result;
                  if (!b || !(0, p.a)(h, {
                      data: b.result
                    }, {
                      data: s
                    }, e.variables)) {
                    var u = {
                      data: s,
                      complete: !!a.complete
                    };
                    a.missing && (u.missing = (0, f.IM)(a.missing.map(function(e) {
                      return e.missing
                    }))), b = (0, n.Cl)((0, n.Cl)({}, a), {
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
      var g = function(e) {
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
        b = r(7849),
        _ = r(2846),
        w = r(2573),
        E = r(8629),
        k = r(3946),
        T = r(7122),
        C = r(5355),
        O = r(5593),
        S = r(5154),
        x = r(6605),
        D = r(1384),
        R = r(7582),
        P = r(7540),
        M = Object.prototype.hasOwnProperty;

      function A(e) {
        return null == e
      }

      function V(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = A(n) ? A(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), A(n) && !A(i) && (n = i), !A(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var I = {
        dataIdFromObject: V,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function F(e) {
        var t = e.canonizeResults;
        return void 0 === t ? I.canonizeResults : t
      }
      var q = /^[_a-z][_0-9a-z]*/i;

      function j(e) {
        var t = e.match(q);
        return t ? t[0] : e
      }

      function Q(e, t, r) {
        return !!(0, D.U)(t) && ((0, P.c)(t) ? t.every(function(t) {
          return Q(e, t, r)
        }) : e.selections.every(function(e) {
          if ((0, k.dt)(e) && (0, S.MS)(e, r)) {
            var n = (0, k.ue)(e);
            return M.call(t, n) && (!e.selectionSet || Q(e.selectionSet, t[n], r))
          }
          return !0
        }))
      }

      function N(e) {
        return (0, D.U)(e) && !(0, k.A_)(e) && !(0, P.c)(e)
      }

      function L(e, t) {
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
        B = function() {
          return z
        },
        U = Object.create(null),
        W = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, x.G)((0, k.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, k.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, k.WU)(e);
              if ((0, k.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, k.WU)(n);
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
            return "__typename" === t && M.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof Y ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), M.call(this.data, e) ? this.data[e] : this instanceof Y ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, k.A_)(e) && (e = e.__ref), (0, k.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new f.ZI(J).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach(function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = j(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof Y || delete s[e]
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
                  INVALIDATE: U,
                  isReference: k.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, k.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach(function(l) {
                  var f = j(l),
                    d = o[l];
                  if (void 0 !== d) {
                    var h = "function" == typeof t ? t : t[l] || t[f];
                    if (h) {
                      var p = h === B ? z : h((0, x.G)(d), (0, n.Cl)((0, n.Cl)({}, c), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (p === U) r.group.dirty(e, l);
                      else if (p === z && (p = void 0), p !== d && (a[l] = p, s = !0, d = p, !1 !== globalThis.__DEV__)) {
                        var v = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, k.A_)(p)) v(p);
                        else if (Array.isArray(p))
                          for (var y = !1, m = void 0, g = 0, b = p; g < b.length; g++) {
                            var _ = b[g];
                            if ((0, k.A_)(_)) {
                              if (y = !0, v(_)) break
                            } else "object" == typeof _ && _ && r.policies.identify(_)[0] && (m = _);
                            if (y && void 0 !== m) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, m);
                              break
                            }
                          }
                      }
                    }
                    void 0 !== d && (u = !1)
                  }
                }), s) return this.merge(e, a), u && (this instanceof Y ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
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
              return this.modify(e, a ? ((n = {})[a] = B, n) : B)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (M.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof Y && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach(function(t) {
              M.call(e.policies.rootTypenamesById, t) || r.push(t)
            }), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach(function(r) {
                e && M.call(e, r) || t.delete(r)
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
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Y ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach(function(n) {
              M.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            });
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof Y;) i = i.parent;
              n.forEach(function(e) {
                return i.delete(e)
              })
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!M.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach(function(e) {
                (0, k.A_)(e) && (t[e.__ref] = !0), (0, D.U)(e) && Object.keys(e).forEach(function(t) {
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
        H = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new R.b(C.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(K(e, t));
              var r = j(t);
              r !== t && this.d(K(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(K(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function K(e, t) {
        return t + "#" + e
      }

      function X(e, t) {
        $(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new H(i)) || this;
            return a.stump = new G(a), a.storageTrie = new R.b(C.et), o && a.replace(o), a
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
      var Y = function(e) {
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
            return M.call(this.data, t) ? (0, n.Cl)((0, n.Cl)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(W),
        G = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, function() {}, new H(t.group.caching, t.group)) || this
          }
          return (0, n.C6)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(Y);

      function J(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, a.L)(n, i) ? n : i
      }

      function $(e) {
        return !!(e instanceof W && e.group.caching)
      }
      var Z = function() {
        function e() {
          this.known = new(C.En ? WeakSet : Set), this.pool = new R.b(C.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, D.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, D.U)(e)) {
            var t = function(e) {
              return (0, D.U)(e) ? (0, P.c)(e) ? e.slice(0) : (0, n.Cl)({
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
          this.knownResults = new(C.et ? WeakMap : Map), this.config = (0, O.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: F(e)
          }), this.canon = e.canon || new Z, this.executeSelectionSet = (0, o.LV)(function(e) {
            var r, i = e.context.canonizeResults,
              o = ee(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.Cl)((0, n.Cl)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (X(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }, {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: ee,
            makeCacheKey: function(e, t, r, n) {
              if ($(r.store)) return r.store.makeCacheKey(e, (0, k.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)(function(e) {
            return X(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }, {
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
          var h, p = (0, k.WU)(o),
            v = this.executeSelectionSet({
              selectionSet: (0, c.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.Cl)({
                store: t,
                query: r,
                policies: d,
                variables: a,
                varString: (0, w.M)(a),
                canonizeResults: f
              }, L(r, this.config.fragments))
            });
          if (v.missing && (h = [new g(re(v.missing), v.missing, r, a)], !u)) throw h[0];
          return {
            result: v.result,
            complete: !h,
            missing: h
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
          if ((0, k.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
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
            if ((0, S.MS)(e, c))
              if ((0, k.dt)(e)) {
                var m = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  g = (0, k.ue)(e);
                void 0 === m ? _.XY.added(e) || (u = p.merge(u, ((r = {})[g] = "Can't find field '".concat(e.name.value, "' on ").concat((0, k.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, P.c)(m) ? m.length > 0 && (m = v(t.executeSubSelectedArray({
                  field: e,
                  array: m,
                  enclosingRef: o,
                  context: a
                }), g)) : e.selectionSet ? null != m && (m = v(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: m,
                  enclosingRef: (0, k.A_)(m) ? m : o,
                  context: a
                }), g)) : a.canonizeResults && (m = t.canon.pass(m)), void 0 !== m && h.push(((f = {})[g] = m, f))
              } else {
                var b = (0, s.HQ)(e, a.lookupFragment);
                if (!b && e.kind === T.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                b && l.fragmentMatches(b, d) && b.selectionSet.selections.forEach(y.add, y)
              }
          });
          var m = {
              result: (0, f.IM)(h),
              missing: u
            },
            g = a.canonizeResults ? this.canon.admit(m) : (0, x.G)(m);
          return g.result && this.knownResults.set(g.result, r), g
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
            return null === e ? null : (0, P.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, k.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach(function(r) {
                  (0, D.U)(r) && ((0, i.V1)(!(0, k.A_)(r), 11, function(e, t) {
                    return (0, k.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
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
              return void 0 === o && t !== r.storeObject && M.call(t, e[0]) && (o = he(t, e, de)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
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
                  if (i && M.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, he(i, s)
                  }
                }
              else if (n && (0, P.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find(function(e) {
                    return e.name.value === u
                  }),
                  l = c && (0, k.MB)(c, i);
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
            (0, P.c)(t) ? (fe(t).forEach(function(e) {
              return r.push(n.concat(e))
            }), n.length = 0) : (n.push(t), (0, P.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          })
        }
        return t.paths
      }

      function de(e, t) {
        return e[t]
      }

      function he(e, t, r) {
        return r = r || de, pe(t.reduce(function e(t, n) {
          return (0, P.c)(t) ? t.map(function(t) {
            return e(t, n)
          }) : t && r(t, n)
        }, e))
      }

      function pe(e) {
        return (0, D.U)(e) ? (0, P.c)(e) ? e.map(pe) : le(Object.keys(e).sort(), function(t) {
          return he(e, t)
        }) : e
      }
      var ve = r(569);

      function ye(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, k.MB)(e.field, e.variables) : null
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
        we = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.Cl)({
              dataIdFromObject: V
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
                  var e = ke(arguments, s);
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
                if (!(0, P.c)(t)) {
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
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), M.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            })
          }, e.prototype.updateTypePolicy = function(e, t, r) {
            var n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? be : !1 === t ? _e : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? me : (0, P.c)(i) ? ue(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach(function(t) {
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
                n.keyFn = !1 === s ? ge : (0, P.c)(s) ? ce(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
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
                var n = e.match(q);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              })
            })
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!M.call(this.typePolicies, e)) {
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
                h.forEach(c), l && d === u.length - 1 && Q(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(e, r) {
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
                if (!(0, P.c)(u)) {
                  t = u || n;
                  break
                }
                o = ce(u)
              }
            return void 0 === t && (t = e.field ? (0, k.Ii)(e.field, e.variables) : (0, k.o5)(n, ye(e))), !1 === t ? n : n === j(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = j(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o),
                u = s && s.read;
              if (u) {
                var c = Ee(this, r, e, t, t.store.getStorage((0, k.A_)(r) ? r.__ref : r, i));
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
            return s === be ? Te(n.store)(e, t) : s === _e ? t : (n.overwrite && (e = void 0), s(e, t, Ee(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function Ee(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = j(o),
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
          isReference: k.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(ke(arguments, t, s), n)
          },
          mergeObjects: Te(n.store)
        }
      }

      function ke(e, t, r) {
        var o, a = e[0],
          s = e[1],
          u = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, n.Cl)({}, a), M.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, ie.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function Te(e) {
        return function(t, r) {
          if ((0, P.c)(t) || (0, P.c)(r)) throw (0, i.vA)(9);
          if ((0, D.U)(t) && (0, D.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, k.A_)(t) && N(r)) return e.merge(t.__ref, r), t;
            if (N(t) && (0, k.A_)(r)) return e.merge(t, r.__ref), r;
            if (N(t) && N(r)) return (0, n.Cl)((0, n.Cl)({}, t), r)
          }
          return r
        }
      }

      function Ce(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.Cl)((0, n.Cl)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var Oe = function() {
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
                varString: (0, w.M)(l)
              }, L(o, this.fragments)), {
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
            if (!(0, k.A_)(y)) throw (0, i.vA)(12, s);
            return v.incomingById.forEach(function(t, o) {
              var s = t.storeObject,
                u = t.mergeTree,
                c = t.fieldNodeSet,
                l = (0, k.WU)(o);
              if (u && u.map.size) {
                var f = r.applyMerges(u, l, s, v);
                if ((0, k.A_)(f)) return;
                s = f
              }
              if (!1 !== globalThis.__DEV__ && !v.overwrite) {
                var d = Object.create(null);
                c.forEach(function(e) {
                  e.selectionSet && (d[e.name.value] = !0)
                }), Object.keys(s).forEach(function(e) {
                  (function(e) {
                    return !0 === d[j(e)]
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
                      if (c && !(0, k.A_)(u) && !(0, a.L)(u, c) && !Object.keys(u).every(function(e) {
                          return void 0 !== o.getFieldValue(c, e)
                        })) {
                        var l = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          f = j(r),
                          d = "".concat(l, ".").concat(f);
                        if (!Me.has(d)) {
                          Me.add(d);
                          var h = [];
                          (0, P.c)(u) || (0, P.c)(c) || [u, c].forEach(function(e) {
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
              f = r && c.rootTypenamesById[r] || (0, k.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var d = function() {
                var e = ke(arguments, l, s.variables);
                if ((0, k.A_)(e.from)) {
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
              var n, a = (0, k.ue)(r),
                s = o[a];
              if (h.add(r), void 0 !== s) {
                var p = c.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  v = xe(u, p),
                  y = t.processFieldValue(s, r, r.selectionSet ? Ce(e, !1, !1) : e, v),
                  m = void 0;
                r.selectionSet && ((0, k.A_)(y) || N(y)) && (m = d("__typename", y));
                var g = c.getMergeFunction(f, r.name.value, m);
                g ? v.info = {
                  field: r,
                  typename: f,
                  merge: g
                } : Pe(u, p), l = e.merge(l, ((n = {})[p] = y, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || _.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, k.ue)(r), o)
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
              var m = (0, k.WU)(r),
                g = s.written[r] || (s.written[r] = []);
              if (g.indexOf(a) >= 0) return m;
              if (g.push(a), this.reader && this.reader.isFresh(o, m, a, s)) return m;
              var b = s.incomingById.get(r);
              return b ? (b.storeObject = s.merge(b.storeObject, l), b.mergeTree = De(b.mergeTree, u), h.forEach(function(e) {
                return b.fieldNodeSet.add(e)
              })) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: Re(u) ? void 0 : u,
                fieldNodeSet: h
              }), m
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, P.c)(e) ? e.map(function(e, o) {
              var a = i.processFieldValue(e, t, r, xe(n, o));
              return Pe(n, o), a
            }) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : !1 !== globalThis.__DEV__ ? (0, ne.m)(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, k.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              u = new R.b(!1);
            return function e(c, l) {
              var f = u.lookup(c, l.clientOnly, l.deferred);
              f.visited || (f.visited = !0, c.selections.forEach(function(u) {
                if ((0, S.MS)(u, r.variables)) {
                  var c = l.clientOnly,
                    f = l.deferred;
                  if (c && f || !(0, P.E)(u.directives) || u.directives.forEach(function(e) {
                      var t = e.name.value;
                      if ("client" === t && (c = !0), "defer" === t) {
                        var n = (0, k.MB)(e, r.variables);
                        n && !1 === n.if || (f = !0)
                      }
                    }), (0, k.dt)(u)) {
                    var d = o.get(u);
                    d && (c = c && d.clientOnly, f = f && d.deferred), o.set(u, Ce(r, c, f))
                  } else {
                    var h = (0, s.HQ)(u, r.lookupFragment);
                    if (!h && u.kind === T.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(14, u.name.value);
                    h && a.fragmentMatches(h, n, t, r.variables) && e(h.selectionSet, Ce(r, c, f))
                  }
                }
              }))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, k.A_)(r)) {
              var c, l = (0, P.c)(r) || !(0, k.A_)(t) && !N(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, k.A_)(l) ? l.__ref : l]);
              var d = function(e, t) {
                return (0, P.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach(function(e, t) {
                var r = d(l, t),
                  n = d(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              }), c && (r = (0, P.c)(f) ? f.slice(0) : (0, n.Cl)({}, f), c.forEach(function(e, t) {
                r[t] = e
              }))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        Se = [];

      function xe(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, Se.pop() || {
          map: new Map
        }), r.get(t)
      }

      function De(e, t) {
        if (e === t || !t || Re(t)) return e;
        if (!e || Re(e)) return t;
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

      function Re(e) {
        return !e || !(e.info || e.map.size)
      }

      function Pe(e, t) {
        var r = e.map,
          n = r.get(t);
        n && Re(n) && (Se.push(n), r.delete(t))
      }
      var Me = new Set,
        Ae = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new b.c(_.XY), r.assumeImmutableResults = !0, r.makeVar = oe.UT, r.txCount = 0, !1 !== globalThis.__DEV__ && ((0, y.cc)(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), (0, y.cc)(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), r.config = function(e) {
              return (0, O.o)(I, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new we({
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
            this.addTypenameTransform.resetCache(), null == n || n.resetCaches(), this.storeWriter = new Oe(this, this.storeReader = new te({
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
                if ($(r)) {
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
            if (M.call(e, "id") && !e.id) return !1;
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
            !1 !== globalThis.__DEV__ && (0, y.cc)(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), w.M.reset(), E.y.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, k.A_)(e)) return e.__ref;
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
            return this.init(), w.M.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
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
      !1 !== globalThis.__DEV__ && (Ae.prototype.getMemoryInternals = h.cM)
    },
    4920(e, t, r) {
      "use strict";
      r.d(t, {
        R: () => re
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
        var t = w(e);
        return (0, b.E)(t)
      }

      function w(e) {
        var t = (0, b.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, f.ST)(e) && (0, b.E)(e.incremental) && e.incremental.forEach(function(e) {
          e.errors && t.push.apply(t, e.errors)
        }), t
      }
      var E = r(6408),
        k = r(3946),
        T = r(1384),
        C = r(9930),
        O = r(7078),
        S = r(9531);

      function x(e) {
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
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), (0, O.w)(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout(function() {
                return t.unsubscribe()
              }), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), (0, O.w)(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? x(i) ? i.then(function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }, r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout(function() {
                  return t.unsubscribe()
                }), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), (0, O.w)(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch(function(e) {}), "function" == typeof t && (t = [new m.c(t)]), x(t) ? t.then(function(e) {
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
      (0, S.r)(D);
      var R = r(5227),
        P = r(2959),
        M = r(839),
        A = r(9722),
        V = r(5355),
        I = r(2825),
        F = new(V.et ? WeakMap : Map);

      function q(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return F.set(e, (F.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }
      var j = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          F.has(r) || (F.set(r, 0), q(r, "evict"), q(r, "modify"), q(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || M.pT.loading;
          return this.variables && this.networkStatus !== M.pT.loading && !(0, l.L)(this.variables, e.variables) && (t = M.pT.setVariables), (0, l.L)(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
          var n = (0, I.lz)("canonizeResults", function() {
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
          e && !e.complete && (0, I.lz)("getLastError", function() {
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
            a = new A.ZI,
            s = (0, b.E)(e.errors) ? e.errors.slice(0) : [];
          if (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(), "incremental" in e && (0, b.E)(e.incremental)) {
            var u = (0, f.bd)(this.getDiff().result, e);
            e.data = u
          } else if ("hasNext" in e && e.hasNext) {
            var c = this.getDiff();
            e.data = a.merge(c.result, e.data)
          }
          this.graphQLErrors = s, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (Q(e, r.errorPolicy) ? this.cache.performTransaction(function(i) {
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
              s = (0, I.lz)("canonizeResults", function() {
                return i.diff(a)
              });
            !o.stopped && (0, l.L)(o.variables, r.variables) && o.updateWatch(r.variables), o.updateLastDiff(s, a), s.complete && (e.data = s.result)
          }) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = M.pT.ready
        }, e.prototype.markError = function(e) {
          var t;
          return this.networkStatus = M.pT.error, this.lastWrite = void 0, null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function Q(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !_(e);
        return !n && r && e.data && (n = !0), n
      }
      var N = r(8629),
        L = r(7582),
        z = r(5879),
        B = r(8460),
        U = r(8339),
        W = r(569),
        H = r(466),
        K = Object.prototype.hasOwnProperty,
        X = Object.create(null),
        Y = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new z.A(B.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new L.b(!1), this.noCacheWarningsByQueryId = new Set;
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
                b = e.update,
                E = e.onQueryUpdated,
                k = e.fetchPolicy,
                T = void 0 === k ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : k,
                C = e.errorPolicy,
                O = void 0 === C ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : C,
                S = e.keepRootFields,
                x = e.context;
              return (0, n.YH)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 36), (0, i.V1)("network-only" === T || "no-cache" === T, 37), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, x)] : [3, 2];
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
                      fetchPolicy: T,
                      errorPolicy: O,
                      context: x,
                      updateQueries: h,
                      update: b,
                      keepRootFields: S
                    }), this.broadcastQueries(), s = this, [2, new Promise(function(e, r) {
                      return g(s.getObservableFromLink(l, (0, n.Cl)((0, n.Cl)({}, x), {
                        optimisticResponse: a ? d : void 0
                      }), f, {}, !1), function(e) {
                        if (_(e) && "none" === O) throw new R.K4({
                          graphQLErrors: w(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.Cl)({}, e);
                        return "function" == typeof v && (v = v(r)), "ignore" === O && _(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: T,
                          errorPolicy: O,
                          context: x,
                          update: b,
                          updateQueries: h,
                          awaitRefetchQueries: m,
                          refetchQueries: v,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: E,
                          keepRootFields: S
                        })
                      }).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.Cl)((0, n.Cl)({}, r), {
                            data: s.maskOperation({
                              document: l,
                              data: r.data,
                              fetchPolicy: T,
                              id: t
                            })
                          }))
                        },
                        error: function(e) {
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof R.K4 ? e : new R.K4({
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
            if (!a && Q(i, e.errorPolicy)) {
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
              c && this.queries.forEach(function(e, n) {
                var a = e.observableQuery,
                  s = a && a.queryName;
                if (s && K.call(c, s)) {
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
                IGNORE: X
              }) : e;
            return o !== X && (this.cache.recordOptimisticTransaction(function(e) {
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
            var r = new j(this),
              i = new P.U({
                queryManager: this,
                queryInfo: r,
                options: e
              });
            return i.lastQuery = t, P.U.inactiveOnCreation.getValue() || this.queries.set(i.queryId, r), r.init({
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
              e.observableQuery ? e.networkStatus = M.pT.loading : e.stop()
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
              else if ((0, k.Kc)(e)) {
                var r = (0, N.y)(t.transform(e));
                o.set(r, (0, E.n4)(e)), a.set(r, !1)
              } else(0, T.U)(e) && e.query && s.add(e)
            }), this.queries.forEach(function(t, n) {
              var i = t.observableQuery,
                o = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && a.has(s) || o && a.has((0, N.y)(o))) && (r.set(n, i), s && a.set(s, !0), o && a.set((0, N.y)(o), !0))
              }
            }), s.size && s.forEach(function(e) {
              var o = (0, C.v)("legacyOneTimeQuery"),
                a = t.getOrCreateQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new P.U({
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
              (0, I.lz)("resetLastResults", function() {
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
                "no-cache" !== i && (Q(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = _(n),
                  s = (0, R.uR)(n);
                if (o || s) {
                  var u = {};
                  if (o && (u.graphQLErrors = n.errors), s && (u.protocolErrors = n.extensions[R.K$]), "none" === a || s) throw new R.K4(u)
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
                var b = (0, N.y)(f),
                  _ = (0, v.M)(r),
                  w = h.lookup(b, _);
                if (!(u = w.observable)) {
                  var k = new D([a(p, y)]);
                  u = w.observable = k, k.beforeNext(function e(t, r) {
                    "next" === t && "hasNext" in r && r.hasNext ? k.beforeNext(e) : h.remove(b, _)
                  })
                }
              } else u = new D([a(p, y)])
            } else u = new D([m.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return d && (u = g(u, function(e) {
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
            return g(this.getObservableFromLink(i, r.context, r.variables), function(o) {
              var a = w(o),
                s = a.length > 0,
                u = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === u) throw e.markError(new R.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: M.pT.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = M.pT.error), c
            }, function(t) {
              var r = (0, R.Mn)(t) ? t : new R.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            })
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = M.pT.loading), void 0 === n && (n = t.query);
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
              g = void 0 === m ? {} : m,
              b = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: l,
                errorPolicy: d,
                returnPartialData: p,
                notifyOnNetworkStatusChange: y,
                context: g
              }),
              _ = function(n) {
                b.variables = n;
                var o = i.fetchQueryByPolicy(e, b, r);
                return "standby" !== b.fetchPolicy && o.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), o
              },
              w = function() {
                return i.fetchCancelFns.delete(e.queryId)
              };
            if (this.fetchCancelFns.set(e.queryId, function(e) {
                w(), setTimeout(function() {
                  return o.cancel(e)
                })
              }), this.getDocumentInfo(b.query).hasClientExports) o = new D(this.localState.addExportedVariables(b.query, b.variables, b.context).then(_).then(function(e) {
              return e.sources
            })), a = !0;
            else {
              var E = _(b.variables);
              a = E.fromLink, o = new D(E.sources)
            }
            return o.promise.then(w, w), {
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
              s = void 0 === a ? o ? (0, C.v)("refetchQueries") : void 0 : a,
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
                var n = e.watcher instanceof j && e.watcher.observableQuery;
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
              u && (a || (a = (0, I.lz)("canonizeResults", function() {
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
              return (0, i.V1)(o, 63), null == e ? e : (0, U.S)(e, o.selectionSet, {
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
            return this.dataMasking ? (0, H.z)(t, r, this.cache, n) : t
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
                void 0 === r && (r = e.networkStatus || M.pT.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || f || (0, l.L)(s, {}) || (0, P.y)(t.missing);
                var u = function(e) {
                  return m.c.of((0, n.Cl)({
                    data: e,
                    loading: (0, M.bi)(r),
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
                }) : "none" === c && r === M.pT.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              g = "no-cache" === s ? 0 : r === M.pT.refetch && "merge" !== u ? 1 : 2,
              b = function() {
                return i.getResultsFromLink(e, g, {
                  query: o,
                  variables: a,
                  context: d,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              _ = h && "number" == typeof p && p !== r && (0, M.bi)(r);
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
          }, e.prototype.getOrCreateQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new j(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        G = r(7122),
        J = r(9922),
        $ = function() {
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
              t.resolvers = (0, A.D9)(t.resolvers, e)
            }) : this.resolvers = (0, A.D9)(this.resolvers, e)
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
            return (0, G.visit)(e, {
              Directive: {
                enter: function(e) {
                  if ("client" === e.name.value && e.arguments && (t = e.arguments.some(function(e) {
                      return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                    }))) return G.BREAK
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
              }), void 0 === a && (a = !1), (0, n.YH)(this, function(g) {
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
                      return (t || o.selectionsToResolve.has(e)) && (0, d.MS)(e, u) ? (0, k.dt)(e) ? [2, this.resolveField(e, t, r, o).then(function(t) {
                        var r;
                        void 0 !== t && c.push(((r = {})[(0, k.ue)(e)] = t, r))
                      })] : ((0, k.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 21, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then(function(e) {
                        c.push(e)
                      })] : [2]) : [2]
                    })
                  })
                }, [2, Promise.all(e.selections.map(l)).then(function() {
                  return (0, A.IM)(c)
                })]
              })
            })
          }, e.prototype.resolveField = function(e, t, r, i) {
            return (0, n.sH)(this, void 0, void 0, function() {
              var o, a, s, u, c, l, f, d, h, p = this;
              return (0, n.YH)(this, function(n) {
                return r ? (o = i.variables, a = e.name.value, s = (0, k.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (d = this.resolvers && this.resolvers[f]) && (h = d[u ? a : s]) && (l = Promise.resolve(J.bl.withValue(this.cache, h, [r, (0, k.MB)(e, o), i.context, {
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
                n.set(o, a), (0, G.visit)(o, {
                  Directive: function(e, t, n, i, o) {
                    "client" === e.name.value && o.forEach(function(e) {
                      r(e) && (0, G.isSelectionNode)(e) && a.add(e)
                    })
                  },
                  FragmentSpread: function(n, o, s, u, c) {
                    var l = t[n.name.value];
                    (0, i.V1)(l, 22, n.name.value);
                    var f = e(l);
                    f.size > 0 && (c.forEach(function(e) {
                      r(e) && (0, G.isSelectionNode)(e) && a.add(e)
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
        Z = r(5568),
        ee = r(8603),
        te = !1,
        re = function() {
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
              g = void 0 === m ? 0 : m,
              b = e.connectToDevTools,
              _ = e.queryDeduplication,
              w = void 0 === _ || _,
              E = e.defaultOptions,
              k = e.defaultContext,
              T = e.assumeImmutableResults,
              C = void 0 === T ? h.assumeImmutableResults : T,
              O = e.resolvers,
              S = e.typeDefs,
              x = e.fragmentMatcher,
              D = e.clientAwareness,
              R = e.name,
              P = e.version,
              M = e.devtools,
              A = e.dataMasking;
            !1 !== globalThis.__DEV__ && ((0, I.cc)(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), (0, I.cc)(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), (0, I.cc)(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), (0, I.cc)(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), (0, I.cc)(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), (0, I.cc)(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), (0, I.cc)(e, "typeDefs", "ApolloClient"), e.link || !1 !== globalThis.__DEV__ && i.V1.warn(17));
            var V = e.link;
            V || (V = l ? new c({
              uri: l,
              credentials: f,
              headers: d
            }) : o.C.empty()), this.link = V, this.cache = h, this.disableNetworkFetches = y || g > 0, this.queryDeduplication = w, this.defaultOptions = E || Object.create(null), this.typeDefs = S, this.devtoolsConfig = (0, n.Cl)((0, n.Cl)({}, M), {
              enabled: null !== (t = null == M ? void 0 : M.enabled) && void 0 !== t ? t : b
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), g && setTimeout(function() {
              return u.disableNetworkFetches = !1
            }, g), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new $({
              cache: h,
              client: this,
              resolvers: O,
              fragmentMatcher: x
            }), this.queryManager = new Y({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: k,
              documentTransform: p,
              queryDeduplication: w,
              ssrMode: y,
              dataMasking: !!A,
              clientAwareness: {
                name: null !== (r = null == D ? void 0 : D.name) && void 0 !== r ? r : R,
                version: null !== (a = null == D ? void 0 : D.version) && void 0 !== a ? a : P
              },
              localState: this.localState,
              assumeImmutableResults: C,
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
              (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, te || !1 === globalThis.__DEV__ || (te = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
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
            return this.defaultOptions.watchQuery && (e = (0, Z.l)(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, I.cc)(e, "canonizeResults", "client.watchQuery"), (0, I.cc)(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = (0, Z.l)(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 18), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, I.cc)(e, "canonizeResults", "client.query"), (0, I.cc)(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), "standby" === e.fetchPolicy && !1 !== globalThis.__DEV__ && i.V1.warn(19)), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = (0, Z.l)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
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
      !1 !== globalThis.__DEV__ && (re.prototype.getMemoryInternals = ee.ep)
    },
    2959(e, t, r) {
      "use strict";
      r.d(t, {
        U: () => b,
        y: () => w
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
        g = Object.hasOwnProperty,
        b = function(e) {
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
                t && !t.error && (t.error = _)
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
              (l.complete || this.options.returnPartialData) && (s.data = l.result), (0, o.L)(s.data, {}) && (s.data = void 0), l.complete ? (delete s.partial, !l.complete || s.networkStatus !== a.pT.loading || "cache-first" !== c && "cache-only" !== c || (s.networkStatus = a.pT.ready, s.loading = !1)) : s.partial = !0, s.networkStatus === a.pT.ready && (s.error || s.errors) && (s.networkStatus = a.pT.error), !1 === globalThis.__DEV__ || l.complete || this.options.partialRefetch || s.loading || s.data || s.error || w(l.missing)
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
            if (r.fetchPolicy = "no-cache" === u ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && g.call(e, "variables")) {
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
                r.concast === g && (r.waitForOwnResult = !1)
              },
              v = f.variables && (0, n.Cl)({}, f.variables),
              y = this.fetch(f, t, d),
              g = y.concast,
              b = y.fromLink,
              _ = {
                next: function(e) {
                  (0, o.L)(r.variables, v) && (p(), r.reportResult(e, v))
                },
                error: function(e) {
                  (0, o.L)(r.variables, v) && ((0, h.Mn)(e) || (e = new h.K4({
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

      function w(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(34, e)
      }

      function E(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }(0, d.r)(b)
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
              for (var g = 0; g < m; ++g)
                if (!l(p, d[g], h[g], n)) return !1;
              return !0
            }
            return l(p, d, h, n)
          }
          var b = (0, a.HQ)(e, n.fragmentMap);
          return b ? !!f(b) || l(b.selectionSet, t, r, n) : void 0
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
        $: () => S
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
      var g = r(8629),
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
        return a.includeExtensions && (f.extensions = u), a.includeQuery && (f.query = t(l, g.y)), {
          options: o,
          body: f
        }
      }

      function E(e) {
        return new s.c(function(t) {
          t.error(e)
        })
      }
      var k = r(7122),
        T = r(2846),
        C = r(6408),
        O = (0, i.no)(function() {
          return fetch
        }),
        S = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            c = e.fetch,
            l = e.print,
            g = void 0 === l ? _ : l,
            S = e.includeExtensions,
            x = e.preserveHeaderCase,
            D = e.useGETForQueries,
            R = e.includeUnusedVariables,
            P = void 0 !== R && R,
            M = (0, n.Tt)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw (0, i.vA)(51)
          }(c || O);
          var A = {
            http: {
              includeExtensions: S,
              preserveHeaderCase: x
            },
            options: M.fetchOptions,
            credentials: M.credentials,
            headers: M.headers
          };
          return new o.C(function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              o = e.getContext(),
              l = {};
            if (o.clientAwareness) {
              var _ = o.clientAwareness,
                S = _.name,
                x = _.version;
              S && (l["apollographql-client-name"] = S), x && (l["apollographql-client-version"] = x)
            }
            var R = (0, n.Cl)((0, n.Cl)({}, l), o.headers),
              M = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: R
              };
            if ((0, a.d8)(["client"], e.query)) {
              !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(52);
              var V = (0, T.er)(e.query);
              if (!V) return E(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = V
            }
            var I, F, q, j, Q, N = w(e, g, b, A, M),
              L = N.options,
              z = N.body;
            z.variables && !P && (z.variables = (I = z.variables, F = e.query, q = (0, n.Cl)({}, I), j = new Set(Object.keys(I)), (0, k.visit)(F, {
              Variable: function(e, t, r) {
                r && "VariableDefinition" !== r.kind && j.delete(e.name.value)
              }
            }), j.forEach(function(e) {
              delete q[e]
            }), q)), L.signal || "undefined" == typeof AbortController || (Q = new AbortController, L.signal = Q.signal);
            var B, U = "OperationDefinition" === (B = (0, C.Vn)(e.query)).kind && "subscription" === B.operation,
              W = (0, a.d8)(["defer"], e.query);
            if (D && !e.query.definitions.some(function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              }) && (L.method = "GET"), W || U) {
              L.headers = L.headers || {};
              var H = "multipart/mixed;";
              U && W && !1 !== globalThis.__DEV__ && i.V1.warn(53), U ? H += "boundary=graphql;subscriptionSpec=1.0,application/json" : W && (H += "deferSpec=20220824,application/json"), L.headers.accept = H
            }
            if ("GET" === L.method) {
              var K = function(e, t) {
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
                X = K.newURI,
                Y = K.parseError;
              if (Y) return E(Y);
              t = X
            } else try {
              L.body = u(z, "Payload")
            } catch (Y) {
              return E(Y)
            }
            return new s.c(function(r) {
              var o = c || (0, i.no)(function() {
                  return fetch
                }) || O,
                a = r.next.bind(r);
              return o(t, L).then(function(t) {
                  var r;
                  e.setContext({
                    response: t
                  });
                  var i, o = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    return (0, n.sH)(this, void 0, void 0, function() {
                      var r, i, o, a, s, u, c, l, d, v, g, b, _, w, E, k, T, C, O, S, x, D, R, P;
                      return (0, n.YH)(this, function(M) {
                        switch (M.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            r = new TextDecoder("utf-8"), i = null === (P = e.headers) || void 0 === P ? void 0 : P.get("content-type"), o = "boundary=", a = (null == i ? void 0 : i.includes(o)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(o)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = "\r\n--".concat(a), u = "", c = f(e), l = !0, M.label = 1;
                          case 1:
                            return l ? [4, c.next()] : [3, 3];
                          case 2:
                            for (d = M.sent(), v = d.value, g = d.done, b = "string" == typeof v ? v : r.decode(v), _ = u.length - s.length + 1, l = !g, w = (u += b).indexOf(s, _); w > -1;) {
                              if (E = void 0, D = [u.slice(0, w), u.slice(w + s.length)], u = D[1], k = (E = D[0]).indexOf("\r\n\r\n"), T = y(E.slice(0, k)), (C = T["content-type"]) && -1 === C.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (O = E.slice(k))
                                if (S = m(e, O), Object.keys(S).length > 1 || "data" in S || "incremental" in S || "errors" in S || "payload" in S)
                                  if ((0, p.Nw)(S)) {
                                    if (x = {}, "payload" in S) {
                                      if (1 === Object.keys(S).length && null === S.payload) return [2];
                                      x = (0, n.Cl)({}, S.payload)
                                    }
                                    "errors" in S && (x = (0, n.Cl)((0, n.Cl)({}, x), {
                                      extensions: (0, n.Cl)((0, n.Cl)({}, "extensions" in x ? x.extensions : null), (R = {}, R[h.K$] = S.errors, R))
                                    })), t(x)
                                  } else t(S);
                              else if (1 === Object.keys(S).length && "hasNext" in S && !S.hasNext) return [2];
                              w = u.indexOf(s)
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
                  Q = void 0, r.complete()
                }).catch(function(e) {
                  Q = void 0,
                    function(e, t) {
                      e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e)
                    }(e, r)
                }),
                function() {
                  Q && Q.abort()
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
        o = r(8629),
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
            g = p.disable,
            b = p.retry,
            _ = p.useGETForHashedQueries,
            w = !0,
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
                    if ((w = !g(m)) || r(), b(m)) return s && s.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: w
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
                    includeQuery: !w,
                    includeExtensions: w
                  }
                }), _ && w && ! function(e) {
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
                }), p = !0), w ? function(e) {
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
      var n = r(7122),
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
              g = y[1];
            if (null !== g) {
              var b = l(g, t, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", "[").concat(m, "]") : void 0);
              d.has(b) && d.add(h), h[m] = b
            } else h[m] = null
          }
          return d.has(h) ? h : e
        }
        for (var _ = 0, w = t.selections; _ < w.length; _++) {
          var E = w[_],
            k = void 0;
          if (a && d.add(h), E.kind === n.Kind.FIELD) {
            var T = (0, o.ue)(E),
              C = E.selectionSet;
            if (void 0 === (k = h[T] || e[T])) continue;
            C && null !== k && (b = l(e[T], C, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", ".").concat(T) : void 0), d.has(b) && (k = b)), !1 === globalThis.__DEV__ && (h[T] = k), !1 !== globalThis.__DEV__ && (a && "__typename" !== T && !(null === (c = Object.getOwnPropertyDescriptor(h, T)) || void 0 === c ? void 0 : c.value) ? Object.defineProperty(h, T, f(T, k, s || "", r.operationName, r.operationType)) : (delete h[T], h[T] = k))
          }
          if (E.kind !== n.Kind.INLINE_FRAGMENT || E.typeCondition && !r.cache.fragmentMatches(E, e.__typename) || (k = l(e, E.selectionSet, r, a, s)), E.kind === n.Kind.FRAGMENT_SPREAD) {
            var O = E.name.value,
              S = r.fragmentMap[O] || (r.fragmentMap[O] = r.cache.lookupFragment(O));
            (0, u.V1)(S, 59, O);
            var x = (0, i.s7)(E);
            "mask" !== x && (k = l(e, S.selectionSet, r, "migrate" === x, s))
          }
          d.has(k) && d.add(h)
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
      var n = r(7122),
        i = r(569),
        o = r(3023),
        a = r(4269),
        s = r(8339),
        u = r(5404),
        c = r(6408);

      function l(e, t, r, l) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, i.Ki)(), e;
        var f = t.definitions.filter(function(e) {
          return e.kind === n.Kind.FRAGMENT_DEFINITION
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
          g = o.useRef(void 0),
          b = o.useRef(void 0),
          _ = (0, a.l)(t, m.current || {}),
          w = null !== (r = null == _ ? void 0 : _.query) && void 0 !== r ? r : e;
        g.current = t, b.current = w;
        var E = (0, i.Cl)((0, i.Cl)({}, _), {
            skip: !m.current
          }),
          k = (0, s.SX)(w, E),
          T = k.obsQueryFields,
          C = k.result,
          O = k.client,
          S = k.resultData,
          x = k.observable,
          D = k.onQueryExecuted,
          R = x.options.initialFetchPolicy || (0, s.kk)(E.defaultOptions, O.defaultOptions),
          P = o.useReducer(function(e) {
            return e + 1
          }, 0)[1],
          M = o.useMemo(function() {
            for (var e = {}, t = function(t) {
                var r = T[t];
                e[t] = function() {
                  return !1 !== globalThis.__DEV__ && "reobserve" === t && !1 !== globalThis.__DEV__ && l.V1.warn(79), m.current || (m.current = Object.create(null), P()), r.apply(this, arguments)
                }
              }, r = 0, n = h; r < n.length; r++) t(n[r]);
            return e
          }, [P, T]),
          A = !!m.current,
          V = o.useMemo(function() {
            return (0, i.Cl)((0, i.Cl)((0, i.Cl)({}, C), M), {
              called: A
            })
          }, [C, M, A]),
          I = (n || (n = o.createContext(null)), o.useCallback(function() {
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
          q = o.useCallback(function(e) {
            if (!1 !== globalThis.__DEV__) {
              I() && !1 !== globalThis.__DEV__ && l.V1.warn(80);
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
              fetchPolicy: e.fetchPolicy || R
            }) : {
              fetchPolicy: R
            };
            var d = (0, a.l)(g.current, (0, i.Cl)({
                query: b.current
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
              }(S, x, O, w, (0, i.Cl)((0, i.Cl)({}, d), {
                skip: !1
              }), D).then(function(e) {
                return Object.assign(e, M)
              });
            return h.catch(function() {}), h
          }, [I, O, w, M, R, x, S, D]),
          j = o.useRef(q);
        (0, u.E)(function() {
          j.current = q
        });
        var Q = o.useCallback(function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return j.current.apply(j, e)
        }, []);
        return [Q, V]
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
        Er: () => S,
        kk: () => P,
        t_: () => x,
        $X: () => M,
        IT: () => T,
        SX: () => O
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
        g = Symbol.for("apollo.hook.wrappers"),
        b = r(658),
        _ = r(2825),
        w = Object.prototype.hasOwnProperty;

      function E() {}
      var k = Symbol();

      function T(e, t) {
        return void 0 === t && (t = Object.create(null)), (r = C, (o = (i = (n = (0, p.m)(t && t.client).queryManager) && n[g]) && i.useQuery) ? o(r) : r)(e, t);
        var r, n, i, o
      }

      function C(e, t) {
        !1 !== globalThis.__DEV__ && ((0, b.h)(t, "canonizeResults", "useQuery"), (0, b.h)(t, "partialRefetch", "useQuery"), (0, b.h)(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), (0, b.h)(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, b.h)(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
        var r = O(e, t),
          i = r.result,
          a = r.obsQueryFields;
        return o.useMemo(function() {
          return (0, n.Cl)((0, n.Cl)({}, i), a)
        }, [i, a])
      }

      function O(e, t) {
        var r = (0, p.m)(t.client),
          u = o.useContext((0, c.l)()).renderPromises,
          l = !!u,
          v = r.disableNetworkFetches,
          y = !1 !== t.ssr && !t.skip,
          m = t.partialRefetch,
          g = S(r, e, t, l),
          b = function(e, t, r, i, a) {
            function s(n) {
              var o;
              return (0, h.D$)(t, h.KG.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(a()) || f.U.inactiveOnCreation.withValue(!i, function() {
                  return (0, _.lz)(["canonizeResults", "partialRefetch"], function() {
                    return e.watchQuery(x(void 0, e, r, a()))
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
              Object.assign(c.observable, ((t = {})[k] = e, t));
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
          }(r, e, t, u, g),
          T = b[0],
          C = T.observable,
          O = T.resultData,
          P = b[1],
          I = g(C);
        ! function(e, t, r, n, i) {
          var o;
          t[k] && !(0, s.L)(t[k], i) && (t.reobserve(x(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[k] = i
        }(O, C, r, t, I);
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
          }(C)
        }, [C]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(C, u, y);
        var q = function(e, t, r, n, i, u, c, l, f) {
          var h = o.useRef(f);
          o.useEffect(function() {
            h.current = f
          });
          var p = !l && !u || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? V : void 0 : A,
            v = e.previousData,
            y = o.useMemo(function() {
              return p && M(p, v, t, r)
            }, [r, t, p, v]);
          return (0, a.r)(o.useCallback(function(n) {
            if (l) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && (0, s.L)(i.data, o.data) || D(o, e, t, r, c, n, h.current)
              },
              o = function(u) {
                if (a.current.unsubscribe(), a.current = t.resubscribeAfterError(i, o), !w.call(u, "graphQLErrors")) throw u;
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
            return y || R(e, t, h.current, c, r)
          }, function() {
            return y || R(e, t, h.current, c, r)
          })
        }(O, C, r, t, I, v, m, l, {
          onCompleted: t.onCompleted || E,
          onError: t.onError || E
        });
        return {
          result: q,
          obsQueryFields: F,
          observable: C,
          resultData: O,
          client: r,
          onQueryExecuted: P
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
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || P(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || P(a, e.defaultOptions)), n
        }
      }

      function x(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, v.o)(e && e.options, n)), i.reduce(u.l)
      }

      function D(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, y.E)(e.errors) && (e.error = new l.K4({
            graphQLErrors: e.errors
          })), t.current = M(function(e, t, r) {
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

      function R(e, t, r, n, i) {
        return e.current || D(t.getCurrentResult(), e, t, i, n, function() {}, r), e.current
      }

      function P(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function M(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.Tt)(e, ["data", "partial"]));
        return (0, n.Cl)((0, n.Cl)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== A && e !== V,
          previousData: t
        })
      }
      var A = (0, m.G)({
          loading: !0,
          data: void 0,
          error: void 0,
          networkStatus: d.pT.loading
        }),
        V = (0, m.G)({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: d.pT.ready
        })
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
        var g = m[0];
        t = g.variableDefinitions || [];
        var b = {
          name: g.name && "Name" === g.name.kind ? g.name.value : "data",
          type: r,
          variables: t
        };
        return i.set(e, b), b
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
        MS: () => o,
        d8: () => a,
        f2: () => s,
        s7: () => u
      });
      var n = r(3023),
        i = r(7122);

      function o(e, t) {
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
        var t, r, o = null === (t = e.directives) || void 0 === t ? void 0 : t.find(function(e) {
          return "unmask" === e.name.value
        });
        if (!o) return "mask";
        var a = null === (r = o.arguments) || void 0 === r ? void 0 : r.find(function(e) {
          return "mode" === e.name.value
        });
        return !1 !== globalThis.__DEV__ && a && (a.value.kind === i.Kind.VARIABLE ? !1 !== globalThis.__DEV__ && n.V1.warn(109) : a.value.kind !== i.Kind.STRING ? !1 !== globalThis.__DEV__ && n.V1.warn(110) : "migrate" !== a.value.value && !1 !== globalThis.__DEV__ && n.V1.warn(111, a.value.value)), a && "value" in a.value && "migrate" === a.value.value ? "migrate" : "unmask"
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
        o = r(7122);

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
        return (0, o.visit)(e, {
          FragmentSpread: function(e) {
            if (!(t = !!e.directives && e.directives.some(function(e) {
                return "unmask" === e.name.value
              }))) return o.BREAK
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
    8629(e, t, r) {
      "use strict";
      r.d(t, {
        y: () => u
      });
      var n, i = r(7122),
        o = r(5879),
        a = r(8460),
        s = r(8603),
        u = Object.assign(function(e) {
          var t = n.get(e);
          return t || (t = (0, i.print)(e), n.set(e, t)), t
        }, {
          reset: function() {
            n = new o.A(a.v.print || 2e3)
          }
        });
      u.reset(), !1 !== globalThis.__DEV__ && (0, s.D_)("print", function() {
        return n ? n.size : 0
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
          if (g(c = a[i])) {
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
        XY: () => v,
        er: () => m,
        iz: () => p,
        x3: () => g,
        zc: () => y
      });
      var n = r(1177),
        i = r(3023),
        o = r(7122),
        a = r(6408),
        s = r(3946),
        u = r(5404),
        c = r(7540),
        l = {
          kind: o.Kind.FIELD,
          name: {
            kind: o.Kind.NAME,
            value: "__typename"
          }
        };

      function f(e, t) {
        return !e || e.selectionSet.selections.every(function(e) {
          return e.kind === o.Kind.FRAGMENT_SPREAD && f(t[e.name.value], t)
        })
      }

      function d(e) {
        return f((0, a.Vu)(e) || (0, a.E4)(e), (0, u.JG)((0, a.zK)(e))) ? null : e
      }

      function h(e) {
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
        for (var r = h(""), s = h(""), u = function(e) {
            for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
              if (!(0, c.c)(n)) {
                if (n.kind === o.Kind.OPERATION_DEFINITION) return r(n.name && n.name.value);
                if (n.kind === o.Kind.FRAGMENT_DEFINITION) return s(n.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(124), null
          }, l = 0, f = t.definitions.length - 1; f >= 0; --f) t.definitions[f].kind === o.Kind.OPERATION_DEFINITION && ++l;
        var p, v, y, m = (p = e, v = new Map, y = new Map, p.forEach(function(e) {
            e && (e.name ? v.set(e.name, e) : e.test && y.set(e.test, e))
          }), function(e) {
            var t = v.get(e.name.value);
            return !t && y.size && y.forEach(function(r, n) {
              n(e) && (t = r)
            }), t
          }),
          g = function(e) {
            return (0, c.E)(e) && e.map(m).some(function(e) {
              return e && e.remove
            })
          },
          b = new Map,
          _ = !1,
          w = {
            enter: function(e) {
              if (g(e.directives)) return _ = !0, null
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
                if (g(e.directives)) return _ = !0, null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                b.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === b.get(JSON.stringify(n)) ? e : l > 0 && e.selectionSet.selections.every(function(e) {
                  return e.kind === o.Kind.FIELD && "__typename" === e.name.value
                }) ? (s(e.name.value).removed = !0, _ = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (m(e)) return _ = !0, null
              }
            }
          });
        if (!_) return t;
        var k = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(t) {
              k(s(t)).transitiveVars.forEach(function(t) {
                e.transitiveVars.add(t)
              })
            })), e
          },
          T = new Set;
        E.definitions.forEach(function(e) {
          e.kind === o.Kind.OPERATION_DEFINITION ? k(r(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
            T.add(e)
          }) : e.kind !== o.Kind.FRAGMENT_DEFINITION || 0 !== l || s(e.name.value).removed || T.add(e.name.value)
        }), T.forEach(function(e) {
          k(s(e)).fragmentSpreads.forEach(function(e) {
            T.add(e)
          })
        });
        var C = {
          enter: function(e) {
            if (t = e.name.value, !T.has(t) || s(t).removed) return null;
            var t
          }
        };
        return d((0, o.visit)(E, {
          FragmentSpread: C,
          FragmentDefinition: C,
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
      var v = Object.assign(function(e) {
        return (0, o.visit)(e, {
          SelectionSet: {
            enter: function(e, t, r) {
              if (!r || r.kind !== o.Kind.OPERATION_DEFINITION) {
                var i = e.selections;
                if (i && !i.some(function(e) {
                    return (0, s.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  })) {
                  var a = r;
                  if (!((0, s.dt)(a) && a.directives && a.directives.some(function(e) {
                      return "export" === e.name.value
                    }))) return (0, n.Cl)((0, n.Cl)({}, e), {
                    selections: (0, n.fX)((0, n.fX)([], i, !0), [l], !1)
                  })
                }
              }
            }
          }
        })
      }, {
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

      function g(e) {
        return (0, a.sw)(e), (0, o.visit)(e, {
          FragmentSpread: function(e) {
            var t;
            if (!(null === (t = e.directives) || void 0 === t ? void 0 : t.some(function(e) {
                return "unmask" === e.name.value
              }))) return (0, n.Cl)((0, n.Cl)({}, e), {
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
        c: () => k
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
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : k
      }

      function p(e) {
        return e instanceof k
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

      function g(e) {
        e._observer = void 0, e._queue = void 0, e._state = "closed"
      }

      function b(e, t, r) {
        e._state = "running";
        var n = e._observer;
        try {
          var i = d(n, t);
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
            "closed" !== this._state && (g(this), m(this))
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
        k = function() {
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
      a() && Object.defineProperty(k, Symbol("extensions"), {
        value: {
          symbol: l,
          hostReportError: v
        },
        configurable: !0
      })
    }
  }
]);