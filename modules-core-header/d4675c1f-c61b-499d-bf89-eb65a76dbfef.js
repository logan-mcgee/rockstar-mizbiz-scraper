! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d4675c1f-c61b-499d-bf89-eb65a76dbfef", e._sentryDebugIdIdentifier = "sentry-dbid-d4675c1f-c61b-499d-bf89-eb65a76dbfef")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [994], {
    4369: (e, t, r) => {
      "use strict";
      r.d(t, {
        M5: () => f,
        XB: () => v,
        xV: () => y,
        zp: () => d
      });
      var n = r(1403);

      function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(r, !0).forEach((function(t) {
            i(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var s, u, c, l, f = function(e) {
          var t, r = {
              unsupported: s = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: s ? e : navigator.connection.effectiveType
            },
            i = function(e) {
              if (Array.isArray(e)) return e
            }(t = (0, n.useState)(r)) || function(e, t) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var r = [],
                  n = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                } catch (e) {
                  i = !0, o = e
                } finally {
                  try {
                    n || null == s.return || s.return()
                  } finally {
                    if (i) throw o
                  }
                }
                return r
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = i[0],
            u = i[1];
          return (0, n.useEffect)((function() {
            if (!s) {
              var e = navigator.connection,
                t = function() {
                  u({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", t),
                function() {
                  e.removeEventListener("change", t)
                }
            }
          }), []), a({}, o, {
            setNetworkStatus: u
          })
        },
        d = function() {
          return {
            unsupported: u = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: u ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (c = !("undefined" != typeof navigator && "deviceMemory" in navigator)) l = {
        unsupported: c
      };
      else {
        var p = "memory" in performance ? performance.memory : null;
        l = {
          unsupported: c,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: p ? p.totalJSHeapSize : null,
          usedJSHeapSize: p ? p.usedJSHeapSize : null,
          jsHeapSizeLimit: p ? p.jsHeapSizeLimit : null
        }
      }
      var h, v = function(e) {
        return c && e ? a({}, l, {}, e) : a({}, l)
      };
      h = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var y = function() {
        return a({}, h)
      }
    },
    1977: (e, t, r) => {
      "use strict";
      (n = r(1403)) && "object" == typeof n && "default" in n && n.default;
      var n, i = r(5498),
        o = new i,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        u = o.getEngine(),
        c = o.getOS(),
        l = o.getUA();
      var f = "mobile",
        d = "tablet",
        p = "Chrome",
        h = "Firefox",
        v = "Opera",
        y = "Yandex",
        m = "Safari",
        b = "Internet Explorer",
        g = "Edge",
        w = "Chromium",
        _ = "IE",
        E = "Mobile Safari",
        O = "MIUI Browser",
        k = "Samsung Browser",
        S = "iOS",
        x = "Android",
        D = "Windows Phone",
        C = "Windows",
        T = "Mac OS",
        I = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        P = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        V = function(e) {
          var t = P();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        R = function(e) {
          return e.type === f
        },
        j = function(e) {
          return e.type === d
        },
        N = function(e) {
          var t = e.type;
          return t === f || t === d
        },
        A = function(e) {
          return "smarttv" === e.type
        },
        q = function(e) {
          return undefined === e.type
        },
        F = function(e) {
          return "wearable" === e.type
        },
        M = function(e) {
          return "console" === e.type
        },
        Q = function(e) {
          return "embedded" === e.type
        },
        L = function(e) {
          var t = e.vendor;
          return I(t)
        },
        U = function(e) {
          var t = e.model;
          return I(t)
        },
        z = function(e) {
          var t = e.type;
          return I(t, "browser")
        },
        B = function(e) {
          return e.name === x
        },
        W = function(e) {
          return e.name === C
        },
        H = function(e) {
          return e.name === T
        },
        Y = function(e) {
          return e.name === D
        },
        G = function(e) {
          return e.name === S
        },
        J = function(e) {
          var t = e.version;
          return I(t)
        },
        K = function(e) {
          var t = e.name;
          return I(t)
        },
        $ = function(e) {
          return e.name === p
        },
        X = function(e) {
          return e.name === h
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
          return e.name === O
        },
        se = function(e) {
          return e.name === k
        },
        ue = function(e) {
          var t = e.version;
          return I(t)
        },
        ce = function(e) {
          var t = e.major;
          return I(t)
        },
        le = function(e) {
          var t = e.name;
          return I(t)
        },
        fe = function(e) {
          var t = e.name;
          return I(t)
        },
        de = function(e) {
          var t = e.version;
          return I(t)
        },
        pe = function() {
          var e = P(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        he = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        ve = function() {
          var e = P();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        ye = function() {
          return V("iPad")
        },
        me = function() {
          return V("iPhone")
        },
        be = function() {
          return V("iPod")
        },
        ge = function(e) {
          return I(e)
        };
      var we = A(s),
        _e = (M(s), F(s)),
        Ee = (Q(s), ne(a) || ye(), Z(a), N(s) || ye(), R(s), j(s) || ye(), q(s), q(s), B(c), Y(c), G(c) || ye(), $(a), X(a), re(a), ie(a), oe(a)),
        Oe = (J(c), K(c), ue(a), ce(a), le(a)),
        ke = (L(s), U(s), fe(u), de(u), ge(l), ee(a) || he(l), te(a), z(s), ve(), ye(), me(), be(), pe(), he(l), ee(a) && !he(l));
      W(c), H(c), ae(a), se(a);
      t.C0 = Oe, t.lT = Ee, t.n8 = ke, t.UX = we, t.w = _e
    },
    8793: function(e, t) {
      var r = "undefined" != typeof self ? self : this,
        n = function() {
          function e() {
            this.fetch = !1, this.DOMException = r.DOMException
          }
          return e.prototype = r, new e
        }();
      ! function(e) {
        ! function(t) {
          var r = "URLSearchParams" in e,
            n = "Symbol" in e && "iterator" in Symbol,
            i = "FileReader" in e && "Blob" in e && function() {
              try {
                return new Blob, !0
              } catch (e) {
                return !1
              }
            }(),
            o = "FormData" in e,
            a = "ArrayBuffer" in e;
          if (a) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            u = ArrayBuffer.isView || function(e) {
              return e && s.indexOf(Object.prototype.toString.call(e)) > -1
            };

          function c(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
          }

          function l(e) {
            return "string" != typeof e && (e = String(e)), e
          }

          function f(e) {
            var t = {
              next: function() {
                var t = e.shift();
                return {
                  done: void 0 === t,
                  value: t
                }
              }
            };
            return n && (t[Symbol.iterator] = function() {
              return t
            }), t
          }

          function d(e) {
            this.map = {}, e instanceof d ? e.forEach((function(e, t) {
              this.append(t, e)
            }), this) : Array.isArray(e) ? e.forEach((function(e) {
              this.append(e[0], e[1])
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
              this.append(t, e[t])
            }), this)
          }

          function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
          }

          function h(e) {
            return new Promise((function(t, r) {
              e.onload = function() {
                t(e.result)
              }, e.onerror = function() {
                r(e.error)
              }
            }))
          }

          function v(e) {
            var t = new FileReader,
              r = h(t);
            return t.readAsArrayBuffer(e), r
          }

          function y(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
          }

          function m() {
            return this.bodyUsed = !1, this._initBody = function(e) {
              var t;
              this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : i && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : o && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : a && i && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = y(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e)) ? this._bodyArrayBuffer = y(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, i && (this.blob = function() {
              var e = p(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v)
            }), this.text = function() {
              var e, t, r, n = p(this);
              if (n) return n;
              if (this._bodyBlob) return e = this._bodyBlob, r = h(t = new FileReader), t.readAsText(e), r;
              if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                return r.join("")
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText)
            }, o && (this.formData = function() {
              return this.text().then(w)
            }), this.json = function() {
              return this.text().then(JSON.parse)
            }, this
          }
          d.prototype.append = function(e, t) {
            e = c(e), t = l(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
          }, d.prototype.delete = function(e) {
            delete this.map[c(e)]
          }, d.prototype.get = function(e) {
            return e = c(e), this.has(e) ? this.map[e] : null
          }, d.prototype.has = function(e) {
            return this.map.hasOwnProperty(c(e))
          }, d.prototype.set = function(e, t) {
            this.map[c(e)] = l(t)
          }, d.prototype.forEach = function(e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
          }, d.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push(r)
            })), f(e)
          }, d.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
              e.push(t)
            })), f(e)
          }, d.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, r) {
              e.push([r, t])
            })), f(e)
          }, n && (d.prototype[Symbol.iterator] = d.prototype.entries);
          var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

          function g(e, t) {
            var r, n, i = (t = t || {}).body;
            if (e instanceof g) {
              if (e.bodyUsed) throw new TypeError("Already read");
              this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new d(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new d(t.headers)), this.method = (n = (r = t.method || this.method || "GET").toUpperCase(), b.indexOf(n) > -1 ? n : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
          }

          function w(e) {
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

          function _(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new d(t.headers), this.url = t.url || "", this._initBody(e)
          }
          g.prototype.clone = function() {
            return new g(this, {
              body: this._bodyInit
            })
          }, m.call(g.prototype), m.call(_.prototype), _.prototype.clone = function() {
            return new _(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new d(this.headers),
              url: this.url
            })
          }, _.error = function() {
            var e = new _(null, {
              status: 0,
              statusText: ""
            });
            return e.type = "error", e
          };
          var E = [301, 302, 303, 307, 308];
          _.redirect = function(e, t) {
            if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
            return new _(null, {
              status: t,
              headers: {
                location: e
              }
            })
          }, t.DOMException = e.DOMException;
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
            return new Promise((function(n, o) {
              var a = new g(e, r);
              if (a.signal && a.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
              var s = new XMLHttpRequest;

              function u() {
                s.abort()
              }
              s.onload = function() {
                var e, t, r = {
                  status: s.status,
                  statusText: s.statusText,
                  headers: (e = s.getAllResponseHeaders() || "", t = new d, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                    var r = e.split(":"),
                      n = r.shift().trim();
                    if (n) {
                      var i = r.join(":").trim();
                      t.append(n, i)
                    }
                  })), t)
                };
                r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                var i = "response" in s ? s.response : s.responseText;
                n(new _(i, r))
              }, s.onerror = function() {
                o(new TypeError("Network request failed"))
              }, s.ontimeout = function() {
                o(new TypeError("Network request failed"))
              }, s.onabort = function() {
                o(new t.DOMException("Aborted", "AbortError"))
              }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && i && (s.responseType = "blob"), a.headers.forEach((function(e, t) {
                s.setRequestHeader(t, e)
              })), a.signal && (a.signal.addEventListener("abort", u), s.onreadystatechange = function() {
                4 === s.readyState && a.signal.removeEventListener("abort", u)
              }), s.send(void 0 === a._bodyInit ? null : a._bodyInit)
            }))
          }
          O.polyfill = !0, e.fetch || (e.fetch = O, e.Headers = d, e.Request = g, e.Response = _), t.Headers = d, t.Request = g, t.Response = _, t.fetch = O, Object.defineProperty(t, "__esModule", {
            value: !0
          })
        }({})
      }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
      var i = n;
      (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
    },
    7327: e => {
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
    5807: (e, t, r) => {
      "use strict";
      r.d(t, {
        yN: () => R,
        LV: () => A
      });
      var n = function() {
          return Object.create(null)
        },
        i = Array.prototype,
        o = i.forEach,
        a = i.slice,
        s = function() {
          function e(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = n), this.weakness = e, this.makeData = t
          }
          return e.prototype.lookup = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.lookupArray(e)
          }, e.prototype.lookupArray = function(e) {
            var t = this;
            return o.call(e, (function(e) {
              return t = t.getChildTrie(e)
            })), t.data || (t.data = this.makeData(a.call(e)))
          }, e.prototype.getChildTrie = function(t) {
            var r = this.weakness && function(e) {
                switch (typeof e) {
                  case "object":
                    if (null === e) break;
                  case "function":
                    return !0
                }
                return !1
              }(t) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map),
              n = r.get(t);
            return n || r.set(t, n = new e(this.weakness, this.makeData)), n
          }, e
        }(),
        u = r(6666);

      function c() {}
      var l, f = function() {
          function e(e, t) {
            void 0 === e && (e = 1 / 0), void 0 === t && (t = c), this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
          }
          return e.prototype.has = function(e) {
            return this.map.has(e)
          }, e.prototype.get = function(e) {
            var t = this.getNode(e);
            return t && t.value
          }, e.prototype.getNode = function(e) {
            var t = this.map.get(e);
            if (t && t !== this.newest) {
              var r = t.older,
                n = t.newer;
              n && (n.older = r), r && (r.newer = n), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = n)
            }
            return t
          }, e.prototype.set = function(e, t) {
            var r = this.getNode(e);
            return r ? r.value = t : (r = {
              key: e,
              value: t,
              newer: null,
              older: this.newest
            }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value)
          }, e.prototype.clean = function() {
            for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
          }, e.prototype.delete = function(e) {
            var t = this.map.get(e);
            return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
          }, e
        }(),
        d = new u.DX,
        p = Object.prototype.hasOwnProperty,
        h = void 0 === (l = Array.from) ? function(e) {
          var t = [];
          return e.forEach((function(e) {
            return t.push(e)
          })), t
        } : l;

      function v(e) {
        var t = e.unsubscribe;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      var y = [],
        m = 100;

      function b(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function g(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }
      var w = function() {
        function e(t) {
          this.fn = t, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count
        }
        return e.prototype.peek = function() {
          if (1 === this.value.length && !O(this)) return _(this), this.value[0]
        }, e.prototype.recompute = function(e) {
          return b(!this.recomputing, "already recomputing"), _(this), O(this) ? function(e, t) {
            return I(e), d.withValue(e, E, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  v(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, O(e) || S(e)
              }(e), g(e.value)
          }(this, e) : g(this.value)
        }, e.prototype.setDirty = function() {
          this.dirty || (this.dirty = !0, this.value.length = 0, k(this), v(this))
        }, e.prototype.dispose = function() {
          var e = this;
          this.setDirty(), I(this), x(this, (function(t, r) {
            t.setDirty(), P(t, e)
          }))
        }, e.prototype.forget = function() {
          this.dispose()
        }, e.prototype.dependOn = function(e) {
          e.add(this), this.deps || (this.deps = y.pop() || new Set), this.deps.add(e)
        }, e.prototype.forgetDeps = function() {
          var e = this;
          this.deps && (h(this.deps).forEach((function(t) {
            return t.delete(e)
          })), this.deps.clear(), y.push(this.deps), this.deps = null)
        }, e.count = 0, e
      }();

      function _(e) {
        var t = d.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), O(e) ? D(t, e) : C(t, e), t
      }

      function E(e, t) {
        e.recomputing = !0, e.value.length = 0;
        try {
          e.value[0] = e.fn.apply(null, t)
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function O(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function k(e) {
        x(e, D)
      }

      function S(e) {
        x(e, C)
      }

      function x(e, t) {
        var r = e.parents.size;
        if (r)
          for (var n = h(e.parents), i = 0; i < r; ++i) t(n[i], e)
      }

      function D(e, t) {
        b(e.childValues.has(t)), b(O(t));
        var r = !O(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = y.pop() || new Set;
        e.dirtyChildren.add(t), r && k(e)
      }

      function C(e, t) {
        b(e.childValues.has(t)), b(!O(t));
        var r, n, i, o = e.childValues.get(t);
        0 === o.length ? e.childValues.set(t, t.value.slice(0)) : (r = o, n = t.value, (i = r.length) > 0 && i === n.length && r[i - 1] === n[i - 1] || e.setDirty()), T(e, t), O(e) || S(e)
      }

      function T(e, t) {
        var r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (y.length < m && y.push(r), e.dirtyChildren = null))
      }

      function I(e) {
        e.childValues.size > 0 && e.childValues.forEach((function(t, r) {
          P(e, r)
        })), e.forgetDeps(), b(null === e.dirtyChildren)
      }

      function P(e, t) {
        t.parents.delete(e), e.childValues.delete(t), T(e, t)
      }
      var V = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function R(e) {
        var t = new Map,
          r = e && e.subscribe;

        function n(e) {
          var n = d.getValue();
          if (n) {
            var i = t.get(e);
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (v(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          var n = t.get(e);
          if (n) {
            var i = r && p.call(V, r) ? r : "setDirty";
            h(n).forEach((function(e) {
              return e[i]()
            })), t.delete(e), v(n)
          }
        }, n
      }

      function j() {
        var e = new s("function" == typeof WeakMap);
        return function() {
          return e.lookupArray(arguments)
        }
      }
      j();
      var N = new Set;

      function A(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = new f(t.max || Math.pow(2, 16), (function(e) {
            return e.dispose()
          })),
          n = t.keyArgs,
          i = t.makeCacheKey || j(),
          o = function() {
            var o = i.apply(null, n ? n.apply(null, arguments) : arguments);
            if (void 0 === o) return e.apply(null, arguments);
            var a = r.get(o);
            a || (r.set(o, a = new w(e)), a.subscribe = t.subscribe, a.forget = function() {
              return r.delete(o)
            });
            var s = a.recompute(Array.prototype.slice.call(arguments));
            return r.set(o, a), N.add(r), d.hasValue() || (N.forEach((function(e) {
              return e.clean()
            })), N.clear()), s
          };

        function a(e) {
          var t = r.get(e);
          t && t.setDirty()
        }

        function s(e) {
          var t = r.get(e);
          if (t) return t.peek()
        }

        function u(e) {
          return r.delete(e)
        }
        return Object.defineProperty(o, "size", {
          get: function() {
            return r.map.size
          },
          configurable: !1,
          enumerable: !1
        }), o.dirtyKey = a, o.dirty = function() {
          a(i.apply(null, arguments))
        }, o.peekKey = s, o.peek = function() {
          return s(i.apply(null, arguments))
        }, o.forgetKey = u, o.forget = function() {
          return u(i.apply(null, arguments))
        }, o.makeCacheKey = i, o.getKey = n ? function() {
          return i.apply(null, n.apply(null, arguments))
        } : i, Object.freeze(o)
      }
    },
    2522: (e, t, r) => {
      "use strict";
      var n, i = (n = r(3102)) && n.__esModule ? n : {
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
    8295: (e, t, r) => {
      "use strict";
      var n, i = (n = r(2522)) && n.__esModule ? n : {
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
    714: (e, t, r) => {
      "use strict";
      var n, i = (n = r(8295)) && n.__esModule ? n : {
        default: n
      };
      e.exports = i.default
    },
    3102: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    6516: (e, t, r) => {
      "use strict";
      var n = r(1403),
        i = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var n, o = {},
          c = null,
          l = null;
        for (n in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, n) && !u.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: l,
          props: o,
          _owner: s.current
        }
      }
      t.Fragment = o, t.jsx = c, t.jsxs = c
    },
    6632: (e, t, r) => {
      "use strict";
      e.exports = r(6516)
    },
    5498: function(e, t, r) {
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
          p = "type",
          h = "vendor",
          v = "version",
          y = "architecture",
          m = "console",
          b = "mobile",
          g = "tablet",
          w = "smarttv",
          _ = "wearable",
          E = "embedded",
          O = "Amazon",
          k = "Apple",
          S = "ASUS",
          x = "BlackBerry",
          D = "Browser",
          C = "Chrome",
          T = "Firefox",
          I = "Google",
          P = "Huawei",
          V = "LG",
          R = "Microsoft",
          j = "Motorola",
          N = "Opera",
          A = "Samsung",
          q = "Sharp",
          F = "Sony",
          M = "Xiaomi",
          Q = "Zebra",
          L = "Facebook",
          U = "Chromium OS",
          z = "Mac OS",
          B = function(e) {
            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
            return t
          },
          W = function(e, t) {
            return typeof e === c && -1 !== H(t).indexOf(H(e))
          },
          H = function(e) {
            return e.toLowerCase()
          },
          Y = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          G = function(e, t) {
            for (var r, n, i, s, c, l, f = 0; f < t.length && !c;) {
              var d = t[f],
                p = t[f + 1];
              for (r = n = 0; r < d.length && !c && d[r];)
                if (c = d[r++].exec(e))
                  for (i = 0; i < p.length; i++) l = c[++n], typeof(s = p[i]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              f += 2
            }
          },
          J = function(e, t) {
            for (var r in t)
              if (typeof t[r] === u && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (W(t[r][n], e)) return "?" === r ? o : r
              } else if (W(t[r], e)) return "?" === r ? o : r;
            return e
          },
          K = {
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
          $ = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [v, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [v, [d, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [d, v],
              [/opios[\/ ]+([\w\.]+)/i],
              [v, [d, N + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [v, [d, N + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [v, [d, N]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [v, [d, "Baidu"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [d, v],
              [/\bddg\/([\w\.]+)/i],
              [v, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [v, [d, "UC" + D]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [v, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [v, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [v, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [v, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [v, [d, "Smart Lenovo " + D]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1 Secure " + D], v
              ],
              [/\bfocus\/([\w\.]+)/i],
              [v, [d, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [v, [d, N + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [v, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [v, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [v, [d, N + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [v, [d, "MIUI " + D]],
              [/fxios\/([-\w\.]+)/i],
              [v, [d, T]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [
                [d, "360 " + D]
              ],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1 " + D], v
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [v, [d, A + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [
                [d, /_/g, " "], v
              ],
              [/metasr[\/ ]?([\d\.]+)/i],
              [v, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [d, "Sogou Mobile"], v
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
              [d, v],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [d, L], v
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [d, v],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [v, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [v, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [v, [d, C + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [d, C + " WebView"], v
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [v, [d, "Android " + D]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, v],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [v, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [v, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [d, [v, J, {
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
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [v, [d, T + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
              [d, v],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [v, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [y, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [y, H]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [y, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [y, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [y, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [y, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [y, /ower/, "", H]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [y, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [y, H]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [h, A],
                [p, g]
              ],
              [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [h, A],
                [p, b]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [h, k],
                [p, b]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [h, k],
                [p, g]
              ],
              [/(macintosh);/i],
              [f, [h, k]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [h, q],
                [p, b]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [h, P],
                [p, g]
              ],
              [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [h, P],
                [p, b]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [h, M],
                [p, b]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [h, M],
                [p, g]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [h, "OPPO"],
                [p, b]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [f, [h, "OPPO"],
                [p, g]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [h, "Vivo"],
                [p, b]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [h, "Realme"],
                [p, b]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [f, [h, j],
                [p, b]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [h, j],
                [p, g]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [h, V],
                [p, g]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [f, [h, V],
                [p, b]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [f, [h, "Lenovo"],
                [p, g]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [h, "Nokia"],
                [p, b]
              ],
              [/(pixel c)\b/i],
              [f, [h, I],
                [p, g]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [h, I],
                [p, b]
              ],
              [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [h, F],
                [p, b]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [h, F],
                [p, g]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [h, "OnePlus"],
                [p, b]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [h, O],
                [p, g]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [h, O],
                [p, b]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, h, [p, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [h, x],
                [p, b]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [h, S],
                [p, g]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [h, S],
                [p, b]
              ],
              [/(nexus 9)/i],
              [f, [h, "HTC"],
                [p, g]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [h, [f, /_/g, " "],
                [p, b]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [h, "Acer"],
                [p, g]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [h, "Meizu"],
                [p, b]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [h, "Ulefone"],
                [p, b]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [h, f, [p, b]],
              [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [h, f, [p, g]],
              [/(surface duo)/i],
              [f, [h, R],
                [p, g]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [h, "Fairphone"],
                [p, b]
              ],
              [/(u304aa)/i],
              [f, [h, "AT&T"],
                [p, b]
              ],
              [/\bsie-(\w*)/i],
              [f, [h, "Siemens"],
                [p, b]
              ],
              [/\b(rct\w+) b/i],
              [f, [h, "RCA"],
                [p, g]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [h, "Dell"],
                [p, g]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [h, "Verizon"],
                [p, g]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [h, "Barnes & Noble"],
                [p, g]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [f, [h, "NuVision"],
                [p, g]
              ],
              [/\b(k88) b/i],
              [f, [h, "ZTE"],
                [p, g]
              ],
              [/\b(nx\d{3}j) b/i],
              [f, [h, "ZTE"],
                [p, b]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [h, "Swiss"],
                [p, b]
              ],
              [/\b(zur\d{3}) b/i],
              [f, [h, "Swiss"],
                [p, g]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [h, "Zeki"],
                [p, g]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [h, "Dragon Touch"], f, [p, g]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [h, "Insignia"],
                [p, g]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [h, "NextBook"],
                [p, g]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [h, "Voice"], f, [p, b]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [h, "LvTel"], f, [p, b]
              ],
              [/\b(ph-1) /i],
              [f, [h, "Essential"],
                [p, b]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [h, "Envizen"],
                [p, g]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [h, "MachSpeed"],
                [p, g]
              ],
              [/\btu_(1491) b/i],
              [f, [h, "Rotor"],
                [p, g]
              ],
              [/(shield[\w ]+) b/i],
              [f, [h, "Nvidia"],
                [p, g]
              ],
              [/(sprint) (\w+)/i],
              [h, f, [p, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [h, R],
                [p, b]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [h, Q],
                [p, g]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [h, Q],
                [p, b]
              ],
              [/smart-tv.+(samsung)/i],
              [h, [p, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [h, A],
                [p, w]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, V],
                [p, w]
              ],
              [/(apple) ?tv/i],
              [h, [f, k + " TV"],
                [p, w]
              ],
              [/crkey/i],
              [
                [f, C + "cast"],
                [h, I],
                [p, w]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [h, O],
                [p, w]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [h, q],
                [p, w]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [h, F],
                [p, w]
              ],
              [/(mitv-\w{5}) bui/i],
              [f, [h, M],
                [p, w]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, f, [p, w]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [h, Y],
                [f, Y],
                [p, w]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [p, w]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, f, [p, m]],
              [/droid.+; (shield) bui/i],
              [f, [h, "Nvidia"],
                [p, m]
              ],
              [/(playstation [345portablevi]+)/i],
              [f, [h, F],
                [p, m]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [h, R],
                [p, m]
              ],
              [/((pebble))app/i],
              [h, f, [p, _]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [h, k],
                [p, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [h, I],
                [p, _]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [h, Q],
                [p, _]
              ],
              [/(quest( \d| pro)?)/i],
              [f, [h, L],
                [p, _]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [p, E]],
              [/(aeobc)\b/i],
              [f, [h, O],
                [p, E]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [f, [p, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [p, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [p, g]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [p, b]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [h, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [v, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [v, [d, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [d, v],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [v, d]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, v],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [d, [v, J, K]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [v, J, K],
                [d, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [v, /_/g, "."],
                [d, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [d, z],
                [v, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [v, d],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [d, v],
              [/\(bb(10);/i],
              [v, [d, x]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [v, [d, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [v, [d, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [v, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [v, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [v, [d, C + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [d, U], v
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [d, v],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [d, "Solaris"], v
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [d, v]
            ]
          },
          X = function(e, t) {
            if (typeof e === u && (t = e, e = o), !(this instanceof X)) return new X(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              m = r && r.userAgentData ? r.userAgentData : o,
              w = t ? function(e, t) {
                var r = {};
                for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                return r
              }($, t) : $,
              _ = r && r.userAgent == n;
            return this.getBrowser = function() {
              var e, t = {};
              return t[d] = o, t[v] = o, G.call(t, n, w.browser), t[l] = typeof(e = t[v]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && r && r.brave && typeof r.brave.isBrave == a && (t[d] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[y] = o, G.call(e, n, w.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[h] = o, e[f] = o, e[p] = o, G.call(e, n, w.device), _ && !e[p] && m && m.mobile && (e[p] = b), _ && "Macintosh" == e[f] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[f] = "iPad", e[p] = g), e
            }, this.getEngine = function() {
              var e = {};
              return e[d] = o, e[v] = o, G.call(e, n, w.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[d] = o, e[v] = o, G.call(e, n, w.os), _ && !e[d] && m && m.platform && "Unknown" != m.platform && (e[d] = m.platform.replace(/chrome os/i, U).replace(/macos/i, z)), e
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
              return n = typeof e === c && e.length > 500 ? Y(e, 500) : e, this
            }, this.setUA(n), this
          };
        X.VERSION = "1.0.38", X.BROWSER = B([d, v, l]), X.CPU = B([y]), X.DEVICE = B([f, h, p, m, b, w, g, _, E]), X.ENGINE = X.OS = B([d, v]), typeof t !== s ? (e.exports && (t = e.exports = X), t.UAParser = X) : r.amdO ? (n = function() {
          return X
        }.call(t, r, t, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = X);
        var Z = typeof i !== s && (i.jQuery || i.Zepto);
        if (Z && !Z.ua) {
          var ee = new X;
          Z.ua = ee.getResult(), Z.ua.get = function() {
            return ee.getUA()
          }, Z.ua.set = function(e) {
            ee.setUA(e);
            var t = ee.getResult();
            for (var r in t) Z.ua[r] = t[r]
          }
        }
      }("object" == typeof window ? window : this)
    },
    555: (e, t, r) => {
      "use strict";
      r.d(t, {
        D: () => Ee
      });
      var n = r(226),
        i = r(7042),
        o = r(5807),
        a = r(4206),
        s = r(3477),
        u = function() {
          function e() {
            this.getFragmentDoc = (0, o.LV)(s.ct)
          }
          return e.prototype.batch = function(e) {
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
        }(),
        c = function(e) {
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
        l = r(7024),
        f = r(6896),
        d = r(6855),
        p = r(4361),
        h = r(3851),
        v = r(8810),
        y = r(7136),
        m = r(104),
        b = r(9987),
        g = r(9554),
        w = r(4353),
        _ = r(8226),
        E = Object.prototype.hasOwnProperty;

      function O(e) {
        return null == e
      }

      function k(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = O(n) ? O(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), O(n) && !O(i) && (n = i), !O(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var S = {
        dataIdFromObject: k,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function x(e) {
        var t = e.canonizeResults;
        return void 0 === t ? S.canonizeResults : t
      }
      var D = /^[_a-z][_0-9a-z]*/i;

      function C(e) {
        var t = e.match(D);
        return t ? t[0] : e
      }

      function T(e, t, r) {
        return !!(0, g.U)(t) && ((0, _.c)(t) ? t.every((function(t) {
          return T(e, t, r)
        })) : e.selections.every((function(e) {
          if ((0, l.dt)(e) && (0, m.MS)(e, r)) {
            var n = (0, l.ue)(e);
            return E.call(t, n) && (!e.selectionSet || T(e.selectionSet, t[n], r))
          }
          return !0
        })))
      }

      function I(e) {
        return (0, g.U)(e) && !(0, l.A_)(e) && !(0, _.c)(e)
      }

      function P(e, t) {
        var r = (0, s.JG)((0, v.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var V = Object.create(null),
        R = function() {
          return V
        },
        j = Object.create(null),
        N = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, b.G)((0, l.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, l.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, l.WU)(e);
              if ((0, l.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, l.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.Cl)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), E.call(this.data, e)) {
              var r = this.data[e];
              if (r && E.call(r, t)) return r[t]
            }
            return "__typename" === t && E.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof M ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), E.call(this.data, e) ? this.data[e] : this instanceof M ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, l.A_)(e) && (e = e.__ref), (0, l.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              __DEV__ ? (0, i.V1)("string" == typeof r, "store.merge expects a string ID") : (0, i.V1)("string" == typeof r, 1);
              var s = new y.ZI(L).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach((function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = C(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof M || delete s[e]
                  }
                })), !u.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== s.__typename || delete u.__typename, Object.keys(u).forEach((function(e) {
                  return n.group.dirty(r, e)
                }))
              }
            }
          }, e.prototype.modify = function(e, t) {
            var r = this,
              i = this.lookup(e);
            if (i) {
              var o = Object.create(null),
                a = !1,
                s = !0,
                u = {
                  DELETE: V,
                  INVALIDATE: j,
                  isReference: l.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, l.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(i).forEach((function(c) {
                  var l = C(c),
                    f = i[c];
                  if (void 0 !== f) {
                    var d = "function" == typeof t ? t : t[c] || t[l];
                    if (d) {
                      var p = d === R ? V : d((0, b.G)(f), (0, n.Cl)((0, n.Cl)({}, u), {
                        fieldName: l,
                        storeFieldName: c,
                        storage: r.getStorage(e, c)
                      }));
                      p === j ? r.group.dirty(e, c) : (p === V && (p = void 0), p !== f && (o[c] = p, a = !0, f = p))
                    }
                    void 0 !== f && (s = !1)
                  }
                })), a) return this.merge(e, o), s && (this instanceof M ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
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
              return this.modify(e, a ? ((n = {})[a] = R, n) : R)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (E.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof M && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach((function(t) {
              E.call(e.policies.rootTypenamesById, t) || r.push(t)
            })), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach((function(r) {
                e && E.call(e, r) || t.delete(r)
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
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof M ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach((function(n) {
              E.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            }));
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof M;) i = i.parent;
              n.forEach((function(e) {
                return i.delete(e)
              }))
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!E.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach((function(e) {
                (0, l.A_)(e) && (t[e.__ref] = !0), (0, g.U)(e) && Object.keys(e).forEach((function(t) {
                  var r = e[t];
                  (0, g.U)(r) && n.add(r)
                }))
              }))
            }
            return this.refs[e]
          }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
          }, e
        }(),
        A = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new w.b(p.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(q(e, t));
              var r = C(t);
              r !== t && this.d(q(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(q(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function q(e, t) {
        return t + "#" + e
      }

      function F(e, t) {
        U(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new A(i)) || this;
            return a.stump = new Q(a), a.storageTrie = new w.b(p.et), o && a.replace(o), a
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
      }(N || (N = {}));
      var M = function(e) {
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
            return E.call(this.data, t) ? (0, n.Cl)((0, n.Cl)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(N),
        Q = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, (function() {}), new A(t.group.caching, t.group)) || this
          }
          return (0, n.C6)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function() {
            return this.parent.merge.apply(this.parent, arguments)
          }, t
        }(M);

      function L(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, a.L)(n, i) ? n : i
      }

      function U(e) {
        return !!(e instanceof N && e.group.caching)
      }
      var z = r(5288);

      function B(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var W = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(p.et ? WeakMap : Map), this.config = (0, h.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: x(e)
          }), this.canon = e.canon || new z.$, this.executeSelectionSet = (0, o.LV)((function(e) {
            var r, i = e.context.canonizeResults,
              o = B(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.Cl)((0, n.Cl)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (F(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }), {
            max: this.config.resultCacheMaxSize,
            keyArgs: B,
            makeCacheKey: function(e, t, r, n) {
              if (U(r.store)) return r.store.makeCacheKey(e, (0, l.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)((function(e) {
            return F(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }), {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (U(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new z.$
        }, e.prototype.diffQueryAgainstStore = function(e) {
          var t = e.store,
            r = e.query,
            i = e.rootId,
            o = void 0 === i ? "ROOT_QUERY" : i,
            a = e.variables,
            s = e.returnPartialData,
            u = void 0 === s || s,
            f = e.canonizeResults,
            d = void 0 === f ? this.config.canonizeResults : f,
            p = this.config.cache.policies;
          a = (0, n.Cl)((0, n.Cl)({}, (0, v.wY)((0, v.AT)(r))), a);
          var h, y = (0, l.WU)(o),
            m = this.executeSelectionSet({
              selectionSet: (0, v.Vn)(r).selectionSet,
              objectOrReference: y,
              enclosingRef: y,
              context: (0, n.Cl)({
                store: t,
                query: r,
                policies: p,
                variables: a,
                varString: (0, z.M)(a),
                canonizeResults: d
              }, P(r, this.config.fragments))
            });
          if (m.missing && (h = [new c(H(m.missing), m.missing, r, a)], !u)) throw h[0];
          return {
            result: m.result,
            complete: !h,
            missing: h
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (U(n.store) && this.knownResults.get(e) === r) {
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
          if ((0, l.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var u, c = a.variables,
            p = a.policies,
            h = a.store.getFieldValue(n, "__typename"),
            v = [],
            g = new y.ZI;

          function w(e, t) {
            var r;
            return e.missing && (u = g.merge(u, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof h && !p.rootIdsByTypename[h] && v.push({
            __typename: h
          });
          var E = new Set(r.selections);
          E.forEach((function(e) {
            var r, y;
            if ((0, m.MS)(e, c))
              if ((0, l.dt)(e)) {
                var b = p.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  O = (0, l.ue)(e);
                void 0 === b ? f.XY.added(e) || (u = g.merge(u, ((r = {})[O] = "Can't find field '".concat(e.name.value, "' on ").concat((0, l.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, _.c)(b) ? b = w(t.executeSubSelectedArray({
                  field: e,
                  array: b,
                  enclosingRef: o,
                  context: a
                }), O) : e.selectionSet ? null != b && (b = w(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: b,
                  enclosingRef: (0, l.A_)(b) ? b : o,
                  context: a
                }), O)) : a.canonizeResults && (b = t.canon.pass(b)), void 0 !== b && v.push(((y = {})[O] = b, y))
              } else {
                var k = (0, s.HQ)(e, a.lookupFragment);
                if (!k && e.kind === d.b.FRAGMENT_SPREAD) throw __DEV__ ? new i.zU("No fragment named ".concat(e.name.value)) : new i.zU(5);
                k && p.fragmentMatches(k, h) && k.selectionSet.selections.forEach(E.add, E)
              }
          }));
          var O = {
              result: (0, y.IM)(v),
              missing: u
            },
            k = a.canonizeResults ? this.canon.admit(O) : (0, b.G)(O);
          return k.result && this.knownResults.set(k.result, r), k
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            n = e.field,
            o = e.array,
            a = e.enclosingRef,
            s = e.context,
            u = new y.ZI;

          function c(e, r) {
            var n;
            return e.missing && (t = u.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map((function(e, t) {
            return null === e ? null : (0, _.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, l.A_)(e) ? e : a,
              context: s
            }), t) : (__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach((function(r) {
                  (0, g.U)(r) && (__DEV__ ? (0, i.V1)(!(0, l.A_)(r), "Missing selection set for object of type ".concat(function(e, t) {
                    return (0, l.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                  }(e, r), " returned for query field ").concat(t.name.value)) : (0, i.V1)(!(0, l.A_)(r), 6), Object.values(r).forEach(n.add, n))
                }))
              }
            }(s.store, n, e), e)
          })), {
            result: s.canonizeResults ? this.canon.admit(o) : o,
            missing: t
          }
        }, e
      }();

      function H(e) {
        try {
          JSON.stringify(e, (function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          }))
        } catch (e) {
          return e
        }
      }
      var Y = r(8873),
        G = r(8828),
        J = r(1796),
        K = Object.create(null);

      function $(e) {
        var t = JSON.stringify(e);
        return K[t] || (K[t] = Object.create(null))
      }

      function X(e) {
        var t = $(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = ee(e, (function(e) {
              var o = ne(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && E.call(t, e[0]) && (o = ne(t, e, re)), __DEV__ ? (0, i.V1)(void 0 !== o, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : (0, i.V1)(void 0 !== o, 2), o
            }));
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function Z(e) {
        var t = $(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = ee(e, (function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return ne(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && E.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, ne(i, s)
                  }
                }
              else if (n && (0, _.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find((function(e) {
                    return e.name.value === u
                  })),
                  f = c && (0, l.MB)(c, i);
                return f && ne(f, e.slice(1))
              }
            })),
            s = JSON.stringify(a);
          return (t || "{}" !== s) && (o += ":" + s), o
        })
      }

      function ee(e, t) {
        var r = new y.ZI;
        return te(e).reduce((function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }), Object.create(null))
      }

      function te(e) {
        var t = $(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach((function(t, i) {
            (0, _.c)(t) ? (te(t).forEach((function(e) {
              return r.push(n.concat(e))
            })), n.length = 0) : (n.push(t), (0, _.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          }))
        }
        return t.paths
      }

      function re(e, t) {
        return e[t]
      }

      function ne(e, t, r) {
        return r = r || re, ie(t.reduce((function e(t, n) {
          return (0, _.c)(t) ? t.map((function(t) {
            return e(t, n)
          })) : t && r(t, n)
        }), e))
      }

      function ie(e) {
        return (0, g.U)(e) ? (0, _.c)(e) ? e.map(ie) : ee(Object.keys(e).sort(), (function(t) {
          return ne(e, t)
        })) : e
      }

      function oe(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, l.MB)(e.field, e.variables) : null
      }
      l.o5.setStringify(z.M);
      var ae = function() {},
        se = function(e, t) {
          return t.fieldName
        },
        ue = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        ce = function(e, t) {
          return t
        },
        le = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.Cl)({
              dataIdFromObject: k
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
          }
          return e.prototype.identify = function(e, t) {
            var r, i = this,
              o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            for (var a, s = t && t.storeObject || e, u = (0, n.Cl)((0, n.Cl)({}, t), {
                typename: o,
                storeObject: s,
                readField: t && t.readField || function() {
                  var e = de(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }), c = o && this.getTypePolicy(o), l = c && c.keyFn || this.config.dataIdFromObject; l;) {
              var f = l((0, n.Cl)((0, n.Cl)({}, e), s), u);
              if (!(0, _.c)(f)) {
                a = f;
                break
              }
              l = X(f)
            }
            return a = a ? String(a) : void 0, u.keyObject ? [a, u.keyObject] : [a]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach((function(r) {
              var i = e[r],
                o = i.queryType,
                a = i.mutationType,
                s = i.subscriptionType,
                u = (0, n.Tt)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), E.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            }))
          }, e.prototype.updateTypePolicy = function(e, t) {
            var r = this,
              n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? ue : !1 === t ? ce : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? ae : (0, _.c)(i) ? X(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach((function(t) {
              var n = r.getFieldPolicy(e, t, !0),
                i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  u = i.read,
                  c = i.merge;
                n.keyFn = !1 === s ? se : (0, _.c)(s) ? Z(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || se)
            }))
          }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              n = this.rootTypenamesById[r];
            t !== n && (__DEV__ ? (0, i.V1)(!n || n === e, "Cannot change root ".concat(e, " __typename more than once")) : (0, i.V1)(!n || n === e, 3), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
          }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach((function(r) {
              t.getSupertypeSet(r, !0), e[r].forEach((function(e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(D);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              }))
            }))
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!E.call(this.typePolicies, e)) {
              var r = this.typePolicies[e] = Object.create(null);
              r.fields = Object.create(null);
              var i = this.supertypeMap.get(e);
              i && i.size && i.forEach((function(e) {
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
                }, l = !(!r || !this.fuzzySubtypes.size), f = !1, d = 0; d < u.length; ++d) {
                var p = u[d];
                if (p.has(a)) return s.has(a) || (f && __DEV__ && i.V1.warn("Inferring subtype ".concat(t, " of supertype ").concat(a)), s.add(a)), !0;
                p.forEach(c), l && d === u.length - 1 && T(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach((function(e, r) {
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
                }, s = oe(e); o;) {
                var u = o(s, a);
                if (!(0, _.c)(u)) {
                  t = u || n;
                  break
                }
                o = Z(u)
              }
            return void 0 === t && (t = e.field ? (0, l.Ii)(e.field, e.variables) : (0, l.o5)(n, oe(e))), !1 === t ? n : n === C(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = C(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o, !1),
                u = s && s.read;
              if (u) {
                var c = fe(this, r, e, t, t.store.getStorage((0, l.A_)(r) ? r.__ref : r, i));
                return J.bl.withValue(this.cache, u, [a, c])
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
            return s === ue ? pe(n.store)(e, t) : s === ce ? t : (n.overwrite && (e = void 0), s(e, t, fe(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function fe(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = C(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          f = u.canRead;
        return {
          args: oe(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: l.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: f,
          readField: function() {
            return e.readField(de(arguments, t, s), n)
          },
          mergeObjects: pe(n.store)
        }
      }

      function de(e, t, r) {
        var o, a, s, u = e[0],
          c = e[1],
          l = e.length;
        return "string" == typeof u ? o = {
          fieldName: u,
          from: l > 1 ? c : t
        } : (o = (0, n.Cl)({}, u), E.call(o, "from") || (o.from = t)), __DEV__ && void 0 === o.from && __DEV__ && i.V1.warn("Undefined 'from' passed to readField with arguments ".concat((a = Array.from(e), s = (0, G.v)("stringifyForDisplay"), JSON.stringify(a, (function(e, t) {
          return void 0 === t ? s : t
        })).split(JSON.stringify(s)).join("<undefined>")))), void 0 === o.variables && (o.variables = r), o
      }

      function pe(e) {
        return function(t, r) {
          if ((0, _.c)(t) || (0, _.c)(r)) throw __DEV__ ? new i.zU("Cannot automatically merge arrays") : new i.zU(4);
          if ((0, g.U)(t) && (0, g.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, l.A_)(t) && I(r)) return e.merge(t.__ref, r), t;
            if (I(t) && (0, l.A_)(r)) return e.merge(t, r.__ref), r;
            if (I(t) && I(r)) return (0, n.Cl)((0, n.Cl)({}, t), r)
          }
          return r
        }
      }

      function he(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.Cl)((0, n.Cl)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var ve = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              s = t.result,
              u = t.dataId,
              c = t.variables,
              f = t.overwrite,
              d = (0, v.Vu)(o),
              p = new y.ZI;
            c = (0, n.Cl)((0, n.Cl)({}, (0, v.wY)(d)), c);
            var h = (0, n.Cl)((0, n.Cl)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return p.merge(e, t)
                },
                variables: c,
                varString: (0, z.M)(c)
              }, P(o, this.fragments)), {
                overwrite: !!f,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              m = this.processSelectionSet({
                result: s || Object.create(null),
                dataId: u,
                selectionSet: d.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: h
              });
            if (!(0, l.A_)(m)) throw __DEV__ ? new i.zU("Could not identify object ".concat(JSON.stringify(s))) : new i.zU(7);
            return h.incomingById.forEach((function(t, n) {
              var o = t.storeObject,
                s = t.mergeTree,
                u = t.fieldNodeSet,
                c = (0, l.WU)(n);
              if (s && s.map.size) {
                var f = r.applyMerges(s, c, o, h);
                if ((0, l.A_)(f)) return;
                o = f
              }
              if (__DEV__ && !h.overwrite) {
                var d = Object.create(null);
                u.forEach((function(e) {
                  e.selectionSet && (d[e.name.value] = !0)
                })), Object.keys(o).forEach((function(e) {
                  (function(e) {
                    return !0 === d[C(e)]
                  })(e) && ! function(e) {
                    var t = s && s.map.get(e);
                    return Boolean(t && t.info && t.info.merge)
                  }(e) && function(e, t, r, n) {
                    var o = function(e) {
                        var t = n.getFieldValue(e, r);
                        return "object" == typeof t && t
                      },
                      s = o(e);
                    if (s) {
                      var u = o(t);
                      if (u && !(0, l.A_)(s) && !(0, a.L)(s, u) && !Object.keys(s).every((function(e) {
                          return void 0 !== n.getFieldValue(u, e)
                        }))) {
                        var c = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"),
                          f = C(r),
                          d = "".concat(c, ".").concat(f);
                        if (!_e.has(d)) {
                          _e.add(d);
                          var p = [];
                          (0, _.c)(s) || (0, _.c)(u) || [s, u].forEach((function(e) {
                            var t = n.getFieldValue(e, "__typename");
                            "string" != typeof t || p.includes(t) || p.push(t)
                          })), __DEV__ && i.V1.warn("Cache data may be lost when replacing the ".concat(f, " field of a ").concat(c, " object.\n\nThis could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(p.length ? "either ensure all objects of type " + p.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(d, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(s).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(u).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))
                        }
                      }
                    }
                  }(c, o, e, h.store)
                }))
              }
              e.merge(n, o)
            })), e.retain(m.__ref), m
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              a = e.selectionSet,
              s = e.context,
              u = e.mergeTree,
              c = this.cache.policies,
              d = Object.create(null),
              p = r && c.rootTypenamesById[r] || (0, l.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof p && (d.__typename = p);
            var h = function() {
                var e = de(arguments, d, s.variables);
                if ((0, l.A_)(e.from)) {
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
              v = new Set;
            this.flattenFields(a, o, s, p).forEach((function(e, r) {
              var n, a = (0, l.ue)(r),
                s = o[a];
              if (v.add(r), void 0 !== s) {
                var y = c.getStoreFieldName({
                    typename: p,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  m = me(u, y),
                  b = t.processFieldValue(s, r, r.selectionSet ? he(e, !1, !1) : e, m),
                  g = void 0;
                r.selectionSet && ((0, l.A_)(b) || I(b)) && (g = h("__typename", b));
                var w = c.getMergeFunction(p, r.name.value, g);
                w ? m.info = {
                  field: r,
                  typename: p,
                  merge: w
                } : we(u, y), d = e.merge(d, ((n = {})[y] = b, n))
              } else !__DEV__ || e.clientOnly || e.deferred || f.XY.added(r) || c.getReadFunction(p, r.name.value) || __DEV__ && i.V1.error("Missing field '".concat((0, l.ue)(r), "' while writing result ").concat(JSON.stringify(o, null, 2)).substring(0, 1e3))
            }));
            try {
              var y = c.identify(o, {
                  typename: p,
                  selectionSet: a,
                  fragmentMap: s.fragmentMap,
                  storeObject: d,
                  readField: h
                }),
                m = y[0],
                b = y[1];
              r = r || m, b && (d = s.merge(d, b))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var g = (0, l.WU)(r),
                w = s.written[r] || (s.written[r] = []);
              if (w.indexOf(a) >= 0) return g;
              if (w.push(a), this.reader && this.reader.isFresh(o, g, a, s)) return g;
              var _ = s.incomingById.get(r);
              return _ ? (_.storeObject = s.merge(_.storeObject, d), _.mergeTree = be(_.mergeTree, u), v.forEach((function(e) {
                return _.fieldNodeSet.add(e)
              }))) : s.incomingById.set(r, {
                storeObject: d,
                mergeTree: ge(u) ? void 0 : u,
                fieldNodeSet: v
              }), g
            }
            return d
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, _.c)(e) ? e.map((function(e, o) {
              var a = i.processFieldValue(e, t, r, me(n, o));
              return we(n, o), a
            })) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : __DEV__ ? (0, Y.m)(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, l.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              u = new w.b(!1);
            return function e(c, f) {
              var p = u.lookup(c, f.clientOnly, f.deferred);
              p.visited || (p.visited = !0, c.selections.forEach((function(u) {
                if ((0, m.MS)(u, r.variables)) {
                  var c = f.clientOnly,
                    p = f.deferred;
                  if (c && p || !(0, _.E)(u.directives) || u.directives.forEach((function(e) {
                      var t = e.name.value;
                      if ("client" === t && (c = !0), "defer" === t) {
                        var n = (0, l.MB)(e, r.variables);
                        n && !1 === n.if || (p = !0)
                      }
                    })), (0, l.dt)(u)) {
                    var h = o.get(u);
                    h && (c = c && h.clientOnly, p = p && h.deferred), o.set(u, he(r, c, p))
                  } else {
                    var v = (0, s.HQ)(u, r.lookupFragment);
                    if (!v && u.kind === d.b.FRAGMENT_SPREAD) throw __DEV__ ? new i.zU("No fragment named ".concat(u.name.value)) : new i.zU(8);
                    v && a.fragmentMatches(v, n, t, r.variables) && e(v.selectionSet, he(r, c, p))
                  }
                }
              })))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, l.A_)(r)) {
              var c, f = (0, _.c)(r) || !(0, l.A_)(t) && !I(t) ? void 0 : t,
                d = r;
              f && !a && (a = [(0, l.A_)(f) ? f.__ref : f]);
              var p = function(e, t) {
                return (0, _.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach((function(e, t) {
                var r = p(f, t),
                  n = p(d, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              })), c && (r = (0, _.c)(d) ? d.slice(0) : (0, n.Cl)({}, d), c.forEach((function(e, t) {
                r[t] = e
              })))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        ye = [];

      function me(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, ye.pop() || {
          map: new Map
        }), r.get(t)
      }

      function be(e, t) {
        if (e === t || !t || ge(t)) return e;
        if (!e || ge(e)) return t;
        var r = e.info && t.info ? (0, n.Cl)((0, n.Cl)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach((function(e, r) {
            o.map.set(r, be(e, t.map.get(r))), a.delete(r)
          })), a.forEach((function(r) {
            o.map.set(r, be(t.map.get(r), e.map.get(r)))
          }))
        }
        return o
      }

      function ge(e) {
        return !e || !(e.info || e.map.size)
      }

      function we(e, t) {
        var r = e.map,
          n = r.get(t);
        n && ge(n) && (ye.push(n), r.delete(t))
      }
      var _e = new Set,
        Ee = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.typenameDocumentCache = new Map, r.makeVar = J.UT, r.txCount = 0, r.config = function(e) {
              return (0, h.o)(S, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new le({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.C6)(t, e), t.prototype.init = function() {
            var e = this.data = new N.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.storeWriter = new ve(this, this.storeReader = new W({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: x(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, o.LV)((function(e, r) {
              return t.broadcastWatch(e, r)
            }), {
              max: this.config.resultCacheMaxSize,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (U(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, (0, z.M)({
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
              if (e instanceof c) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (E.call(e, "id") && !e.id) return !1;
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
            return this.watches.size || (0, J.MS)(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && (0, J.WR)(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            z.M.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, l.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              __DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (E.call(e, "id")) return !1;
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
            return this.init(), z.M.reset(), e && e.discardWatches ? (this.watches.forEach((function(e) {
              return t.maybeBroadcastWatch.forget(e)
            })), this.watches.clear(), (0, J.WR)(this)) : this.broadcastWatches(), Promise.resolve()
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
            if (this.addTypename) {
              var t = this.typenameDocumentCache.get(e);
              return t || (t = (0, f.XY)(e), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t
            }
            return e
          }, t.prototype.transformForLink = function(e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e
          }, t.prototype.broadcastWatches = function(e) {
            var t = this;
            this.txCount || this.watches.forEach((function(r) {
              return t.maybeBroadcastWatch(r, e)
            }))
          }, t.prototype.broadcastWatch = function(e, t) {
            var r = e.lastDiff,
              n = this.diff(e);
            t && (e.optimistic && "string" == typeof t.optimistic && (n.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, n, r)) || r && (0, a.L)(r.result, n.result) || e.callback(e.lastDiff = n, r)
          }, t
        }(u)
    },
    5288: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => l,
        M: () => f
      });
      var n, i, o = r(226),
        a = (r(7042), r(4353)),
        s = r(9554),
        u = r(4361),
        c = r(8226),
        l = function() {
          function e() {
            this.known = new(u.En ? WeakSet : Set), this.pool = new a.b(u.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
          }
          return e.prototype.isKnown = function(e) {
            return (0, s.U)(e) && this.known.has(e)
          }, e.prototype.pass = function(e) {
            if ((0, s.U)(e)) {
              var t = function(e) {
                return (0, s.U)(e) ? (0, c.c)(e) ? e.slice(0) : (0, o.Cl)({
                  __proto__: Object.getPrototypeOf(e)
                }, e) : e
              }(e);
              return this.passes.set(t, e), t
            }
            return e
          }, e.prototype.admit = function(e) {
            var t = this;
            if ((0, s.U)(e)) {
              var r = this.passes.get(e);
              if (r) return r;
              switch (Object.getPrototypeOf(e)) {
                case Array.prototype:
                  if (this.known.has(e)) return e;
                  var n = e.map(this.admit, this);
                  return (u = this.pool.lookupArray(n)).array || (this.known.add(u.array = n), __DEV__ && Object.freeze(n)), u.array;
                case null:
                case Object.prototype:
                  if (this.known.has(e)) return e;
                  var i = Object.getPrototypeOf(e),
                    o = [i],
                    a = this.sortedKeys(e);
                  o.push(a.json);
                  var u, c = o.length;
                  if (a.sorted.forEach((function(r) {
                      o.push(t.admit(e[r]))
                    })), !(u = this.pool.lookupArray(o)).object) {
                    var l = u.object = Object.create(i);
                    this.known.add(l), a.sorted.forEach((function(e, t) {
                      l[e] = o[c + t]
                    })), __DEV__ && Object.freeze(l)
                  }
                  return u.object
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
        }(),
        f = Object.assign((function(e) {
          if ((0, s.U)(e)) {
            void 0 === n && d();
            var t = n.admit(e),
              r = i.get(t);
            return void 0 === r && i.set(t, r = JSON.stringify(t)), r
          }
          return JSON.stringify(e)
        }), {
          reset: d
        });

      function d() {
        n = new l, i = new(u.et ? WeakMap : Map)
      }
    },
    1796: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => u,
        UT: () => c,
        WR: () => s,
        bl: () => i
      });
      var n = r(5807),
        i = new(r(6666).DX),
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
    2296: (e, t, r) => {
      "use strict";
      r.d(t, {
        R: () => te
      });
      var n = r(226),
        i = r(7042),
        o = r(1622),
        a = o.C.execute,
        s = r(6375),
        u = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, s.$)(t).request) || this;
            return r.options = t, r
          }
          return (0, n.C6)(t, e), t
        }(o.C),
        c = r(4206),
        l = r(6443),
        f = r(5288),
        d = r(4361),
        p = r(4984);

      function h(e, t, r) {
        return new p.c((function(n) {
          var i = n.next,
            o = n.error,
            a = n.complete,
            s = 0,
            u = !1,
            c = {
              then: function(e) {
                return new Promise((function(t) {
                  return t(e())
                }))
              }
            };

          function l(e, t) {
            return e ? function(t) {
              ++s;
              var r = function() {
                return e(t)
              };
              c = c.then(r, r).then((function(e) {
                --s, i && i.call(n, e), u && f.complete()
              }), (function(e) {
                throw --s, e
              })).catch((function(e) {
                o && o.call(n, e)
              }))
            } : function(e) {
              return t && t.call(n, e)
            }
          }
          var f = {
              next: l(t, i),
              error: l(r, o),
              complete: function() {
                u = !0, s || a && a.call(n)
              }
            },
            d = e.subscribe(f);
          return function() {
            return d.unsubscribe()
          }
        }))
      }
      var v = r(8226);

      function y(e) {
        var t = m(e);
        return (0, v.E)(t)
      }

      function m(e) {
        var t = (0, v.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, l.ST)(e) && (0, v.E)(e.incremental) && e.incremental.forEach((function(e) {
          e.errors && t.push.apply(t, e.errors)
        })), t
      }
      var b = r(8810),
        g = r(6896),
        w = r(104),
        _ = r(7024),
        E = r(9554),
        O = r(8828);

      function k(e, t, r) {
        var n = [];
        e.forEach((function(e) {
          return e[t] && n.push(e)
        })), n.forEach((function(e) {
          return e[t](r)
        }))
      }

      function S(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: p.c
          })
        }
        return d.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }

      function x(e) {
        return e && "function" == typeof e.then
      }
      var D = function(e) {
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
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), k(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout((function() {
                return t.unsubscribe()
              })), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), k(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? x(i) ? i.then((function(e) {
                  return r.sub = e.subscribe(r.handlers)
                })) : r.sub = i.subscribe(r.handlers) : (t && setTimeout((function() {
                  return t.unsubscribe()
                })), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), k(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.complete()
          }, r.promise.catch((function(e) {})), "function" == typeof t && (t = [new p.c(t)]), x(t) ? t.then((function(e) {
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
      }(p.c);
      S(D);
      var C = r(6449),
        T = r(2013),
        I = r(8873),
        P = r(3851),
        V = Object.assign,
        R = Object.hasOwnProperty,
        j = function(e) {
          function t(t) {
            var r = t.queryManager,
              i = t.queryInfo,
              o = t.options,
              a = e.call(this, (function(e) {
                try {
                  var t = e._subscription._observer;
                  t && !t.error && (t.error = A)
                } catch (e) {}
                var r = !a.observers.size;
                a.observers.add(e);
                var n = a.last;
                return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(n.result), r && a.reobserve().catch((function() {})),
                  function() {
                    a.observers.delete(e) && !a.observers.size && a.tearDownQuery()
                  }
              })) || this;
            a.observers = new Set, a.subscriptions = new Set, a.queryInfo = i, a.queryManager = r, a.waitForOwnResult = F(o.fetchPolicy), a.isTornDown = !1;
            var s = r.defaultOptions.watchQuery,
              u = (void 0 === s ? {} : s).fetchPolicy,
              c = void 0 === u ? "cache-first" : u,
              l = o.fetchPolicy,
              f = void 0 === l ? c : l,
              d = o.initialFetchPolicy,
              p = void 0 === d ? "standby" === f ? c : f : d;
            a.options = (0, n.Cl)((0, n.Cl)({}, o), {
              initialFetchPolicy: p,
              fetchPolicy: f
            }), a.queryId = i.queryId || r.generateQueryId();
            var h = (0, b.Vu)(a.query);
            return a.queryName = h && h.name && h.name.value, a
          }
          return (0, n.C6)(t, e), Object.defineProperty(t.prototype, "query", {
            get: function() {
              return this.queryManager.transform(this.options.query).document
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
          }, t.prototype.getCurrentResult = function(e) {
            void 0 === e && (e = !0);
            var t = this.getLastResult(!0),
              r = this.queryInfo.networkStatus || t && t.networkStatus || T.p.ready,
              i = (0, n.Cl)((0, n.Cl)({}, t), {
                loading: (0, T.b)(r),
                networkStatus: r
              }),
              o = this.options.fetchPolicy,
              a = void 0 === o ? "cache-first" : o;
            if (F(a) || this.queryManager.transform(this.options.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var s = this.queryInfo.getDiff();
              (s.complete || this.options.returnPartialData) && (i.data = s.result), (0, c.L)(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, !s.complete || i.networkStatus !== T.p.loading || "cache-first" !== a && "cache-only" !== a || (i.networkStatus = T.p.ready, i.loading = !1)) : i.partial = !0, !__DEV__ || s.complete || this.options.partialRefetch || i.loading || i.data || i.error || q(s.missing)
            }
            return e && this.updateLastResult(i), i
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            return !this.last || !(0, c.L)(this.last.result, e) || t && !(0, c.L)(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || (0, c.L)(r.variables, this.variables))) return r[e]
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
            if (r.fetchPolicy = "cache-and-network" === o ? o : "no-cache" === o ? "no-cache" : "network-only", __DEV__ && e && R.call(e, "variables")) {
              var a = (0, b.AT)(this.query),
                s = a.variableDefinitions;
              s && s.some((function(e) {
                return "variables" === e.variable.name.value
              })) || __DEV__ && i.V1.warn("Called refetch(".concat(JSON.stringify(e), ") for query ").concat((null === (t = a.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(a), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))
            }
            return e && !(0, c.L)(this.options.variables, e) && (r.variables = this.options.variables = (0, n.Cl)((0, n.Cl)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, T.p.refetch)
          }, t.prototype.fetchMore = function(e) {
            var t = this,
              r = (0, n.Cl)((0, n.Cl)({}, e.query ? e : (0, n.Cl)((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, this.options), {
                query: this.query
              }), e), {
                variables: (0, n.Cl)((0, n.Cl)({}, this.options.variables), e.variables)
              })), {
                fetchPolicy: "no-cache"
              }),
              i = this.queryManager.generateQueryId(),
              o = this.queryInfo,
              a = o.networkStatus;
            o.networkStatus = T.p.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var s = new Set;
            return this.queryManager.fetchQuery(i, r, T.p.fetchMore).then((function(n) {
              return t.queryManager.removeQuery(i), o.networkStatus === T.p.fetchMore && (o.networkStatus = a), t.queryManager.cache.batch({
                update: function(i) {
                  var o = e.updateQuery;
                  o ? i.updateQuery({
                    query: t.query,
                    variables: t.variables,
                    returnPartialData: !0,
                    optimistic: !1
                  }, (function(e) {
                    return o(e, {
                      fetchMoreResult: n.data,
                      variables: r.variables
                    })
                  })) : i.writeQuery({
                    query: r.query,
                    variables: r.variables,
                    data: n.data
                  })
                },
                onWatchUpdated: function(e) {
                  s.add(e.query)
                }
              }), n
            })).finally((function() {
              s.has(t.query) || N(t)
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
                  e.onError ? e.onError(t) : __DEV__ && i.V1.error("Unhandled GraphQL subscription error", t)
                }
              });
            return this.subscriptions.add(r),
              function() {
                t.subscriptions.delete(r) && r.unsubscribe()
              }
          }, t.prototype.setOptions = function(e) {
            return this.reobserve(e)
          }, t.prototype.setVariables = function(e) {
            return (0, c.L)(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, T.p.setVariables) : Promise.resolve())
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
          }, t.prototype.fetch = function(e, t) {
            return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, e, t)
          }, t.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (r) {
                if (!t || t.interval !== r) {
                  __DEV__ ? (0, i.V1)(r, "Attempted to start a polling query without a polling interval.") : (0, i.V1)(r, 13), (t || (this.pollingInfo = {})).interval = r;
                  var n = function() {
                      e.pollingInfo && ((0, T.b)(e.queryInfo.networkStatus) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, T.p.poll).then(o, o))
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
            return void 0 === t && (t = this.variables), this.last = (0, n.Cl)((0, n.Cl)({}, this.last), {
              result: this.queryManager.assumeImmutableResults ? e : (0, I.m)(e),
              variables: t
            }), (0, v.E)(e.errors) || delete this.last.error, this.last
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === T.p.refetch || t === T.p.fetchMore || t === T.p.poll,
              o = this.options.variables,
              a = this.options.fetchPolicy,
              s = (0, P.o)(this.options, e || {}),
              u = i ? s : V(this.options, s);
            i || (this.updatePolling(), e && e.variables && !(0, c.L)(e.variables, o) && "standby" !== u.fetchPolicy && u.fetchPolicy === a && (this.applyNextFetchPolicy("variables-changed", u), void 0 === t && (t = T.p.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = F(u.fetchPolicy));
            var l = function() {
                r.concast === p && (r.waitForOwnResult = !1)
              },
              f = u.variables && (0, n.Cl)({}, u.variables),
              d = this.fetch(u, t),
              p = d.concast,
              h = d.fromLink,
              v = {
                next: function(e) {
                  l(), r.reportResult(e, f)
                },
                error: function(e) {
                  l(), r.reportError(e, f)
                }
              };
            return !i && h && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = v), p.addObserver(v), p
          }, t.prototype.reobserve = function(e, t) {
            return this.reobserveAsConcast(e, t).promise
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this.getLastError();
            (r || this.isDifferentFromLastResult(e, t)) && ((r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), k(this.observers, "next", e))
          }, t.prototype.reportError = function(e, t) {
            var r = (0, n.Cl)((0, n.Cl)({}, this.getLastResult()), {
              error: e,
              errors: e.graphQLErrors,
              networkStatus: T.p.error,
              loading: !1
            });
            this.updateLastResult(r, t), k(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
          }, t
        }(p.c);

      function N(e) {
        var t = e.options,
          r = t.fetchPolicy,
          n = t.nextFetchPolicy;
        return "cache-and-network" === r || "network-only" === r ? e.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function() {
            return this.nextFetchPolicy = n, "function" == typeof n ? n.apply(this, arguments) : r
          }
        }) : e.reobserve()
      }

      function A(e) {
        __DEV__ && i.V1.error("Unhandled error", e.message, e.stack)
      }

      function q(e) {
        __DEV__ && e && __DEV__ && i.V1.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e)
      }

      function F(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }
      S(j);
      var M = r(3654),
        Q = r(6855);

      function L(e) {
        return e.kind === Q.b.FIELD || e.kind === Q.b.FRAGMENT_SPREAD || e.kind === Q.b.INLINE_FRAGMENT
      }
      var U = r(7136),
        z = r(3477),
        B = r(1796),
        W = function() {
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
              t.resolvers = (0, U.D9)(t.resolvers, e)
            })) : this.resolvers = (0, U.D9)(this.resolvers, e)
          }, e.prototype.setResolvers = function(e) {
            this.resolvers = {}, this.addResolvers(e)
          }, e.prototype.getResolvers = function() {
            return this.resolvers || {}
          }, e.prototype.runResolvers = function(e) {
            var t = e.document,
              r = e.remoteResult,
              i = e.context,
              o = e.variables,
              a = e.onlyRunForcedResolvers,
              s = void 0 !== a && a;
            return (0, n.sH)(this, void 0, void 0, (function() {
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
            return (0, w.d8)(["client"], e) && this.resolvers ? e : null
          }, e.prototype.serverQuery = function(e) {
            return (0, g.er)(e)
          }, e.prototype.prepareContext = function(e) {
            var t = this.cache;
            return (0, n.Cl)((0, n.Cl)({}, e), {
              cache: t,
              getCacheKey: function(e) {
                return t.identify(e)
              }
            })
          }, e.prototype.addExportedVariables = function(e, t, r) {
            return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, n.sH)(this, void 0, void 0, (function() {
              return (0, n.YH)(this, (function(i) {
                return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then((function(e) {
                  return (0, n.Cl)((0, n.Cl)({}, t), e.exportedVariables)
                }))] : [2, (0, n.Cl)({}, t)]
              }))
            }))
          }, e.prototype.shouldForceResolvers = function(e) {
            var t = !1;
            return (0, M.YR)(e, {
              Directive: {
                enter: function(e) {
                  if ("client" === e.name.value && e.arguments && (t = e.arguments.some((function(e) {
                      return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                    })))) return M.sP
                }
              }
            }), t
          }, e.prototype.buildRootValueFromCache = function(e, t) {
            return this.cache.diff({
              query: (0, g.zc)(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1
            }).result
          }, e.prototype.resolveDocument = function(e, t, r, i, o, a) {
            return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
              return !0
            }), void 0 === a && (a = !1), (0, n.sH)(this, void 0, void 0, (function() {
              var s, u, c, l, f, d, p, h, v, y;
              return (0, n.YH)(this, (function(m) {
                return s = (0, b.Vn)(e), u = (0, b.zK)(e), c = (0, z.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", h = (p = this).cache, v = p.client, y = {
                  fragmentMap: c,
                  context: (0, n.Cl)((0, n.Cl)({}, r), {
                    cache: h,
                    client: v
                  }),
                  variables: i,
                  fragmentMatcher: o,
                  defaultOperationType: d,
                  exportedVariables: {},
                  selectionsToResolve: l,
                  onlyRunForcedResolvers: a
                }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, y).then((function(e) {
                  return {
                    result: e,
                    exportedVariables: y.exportedVariables
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
                      return (t || o.selectionsToResolve.has(e)) && (0, w.MS)(e, u) ? (0, _.dt)(e) ? [2, this.resolveField(e, t, r, o).then((function(t) {
                        var r;
                        void 0 !== t && c.push(((r = {})[(0, _.ue)(e)] = t, r))
                      }))] : ((0, _.kd)(e) ? l = e : (l = a[e.name.value], __DEV__ ? (0, i.V1)(l, "No fragment named ".concat(e.name.value)) : (0, i.V1)(l, 11)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then((function(e) {
                        c.push(e)
                      }))] : [2]) : [2]
                    }))
                  }))
                }, [2, Promise.all(e.selections.map(l)).then((function() {
                  return (0, U.IM)(c)
                }))]
              }))
            }))
          }, e.prototype.resolveField = function(e, t, r, i) {
            return (0, n.sH)(this, void 0, void 0, (function() {
              var o, a, s, u, c, l, f, d, p, h = this;
              return (0, n.YH)(this, (function(n) {
                return r ? (o = i.variables, a = e.name.value, s = (0, _.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (d = this.resolvers && this.resolvers[f]) && (p = d[u ? a : s]) && (l = Promise.resolve(B.bl.withValue(this.cache, p, [r, (0, _.MB)(e, o), i.context, {
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
                  return Array.isArray(r) ? h.resolveSubSelectedArray(e, t || a, r, i) : e.selectionSet ? h.resolveSelectionSet(e.selectionSet, t || a, r, i) : void 0
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
                n.set(o, a), (0, M.YR)(o, {
                  Directive: function(e, t, n, i, o) {
                    "client" === e.name.value && o.forEach((function(e) {
                      r(e) && L(e) && a.add(e)
                    }))
                  },
                  FragmentSpread: function(n, o, s, u, c) {
                    var l = t[n.name.value];
                    __DEV__ ? (0, i.V1)(l, "No fragment named ".concat(n.name.value)) : (0, i.V1)(l, 12);
                    var f = e(l);
                    f.size > 0 && (c.forEach((function(e) {
                      r(e) && L(e) && a.add(e)
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
        H = new(d.et ? WeakMap : Map);

      function Y(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return H.set(e, (H.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }

      function G(e) {
        e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0)
      }
      var J = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.listeners = new Set, this.document = null, this.lastRequestId = 1, this.subscriptions = new Set, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          H.has(r) || (H.set(r, 0), Y(r, "evict"), Y(r, "modify"), Y(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || T.p.loading;
          return this.variables && this.networkStatus !== T.p.loading && !(0, c.L)(this.variables, e.variables) && (t = T.p.setVariables), (0, c.L)(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
          }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
        }, e.prototype.reset = function() {
          G(this), this.dirty = !1
        }, e.prototype.getDiff = function(e) {
          void 0 === e && (e = this.variables);
          var t = this.getDiffOptions(e);
          if (this.lastDiff && (0, c.L)(t, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables = e);
          var r = this.observableQuery;
          if (r && "no-cache" === r.options.fetchPolicy) return {
            complete: !1
          };
          var n = this.cache.diff(t);
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
          var t = this,
            r = this.lastDiff && this.lastDiff.diff;
          this.updateLastDiff(e), this.dirty || (0, c.L)(r && r.result, e && e.result) || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout((function() {
            return t.notify()
          }), 0)))
        }, e.prototype.setObservableQuery = function(e) {
          var t = this;
          e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
            t.getDiff().fromOptimisticTransaction ? e.observe() : N(e)
          })) : delete this.oqListener)
        }, e.prototype.notify = function() {
          var e = this;
          G(this), this.shouldNotify() && this.listeners.forEach((function(t) {
            return t(e)
          })), this.dirty = !1
        }, e.prototype.shouldNotify = function() {
          if (!this.dirty || !this.listeners.size) return !1;
          if ((0, T.b)(this.networkStatus) && this.observableQuery) {
            var e = this.observableQuery.options.fetchPolicy;
            if ("cache-only" !== e && "cache-and-network" !== e) return !1
          }
          return !0
        }, e.prototype.stop = function() {
          if (!this.stopped) {
            this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            }));
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
            this.lastWatch && (0, c.L)(i, this.lastWatch) || (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === H.get(this.cache) && (0, c.L)(t, r.variables) && (0, c.L)(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i = this,
            o = new U.ZI,
            a = (0, v.E)(e.errors) ? e.errors.slice(0) : [];
          if (this.reset(), "incremental" in e && (0, v.E)(e.incremental)) {
            var s = (0, l.bd)(this.getDiff().result, e);
            e.data = s
          } else if ("hasNext" in e && e.hasNext) {
            var u = this.getDiff();
            e.data = o.merge(u.result, e.data)
          }
          this.graphQLErrors = a, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (K(e, r.errorPolicy) ? this.cache.performTransaction((function(o) {
            if (i.shouldWrite(e, r.variables)) o.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), i.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: H.get(i.cache)
            };
            else if (i.lastDiff && i.lastDiff.diff.complete) return void(e.data = i.lastDiff.diff.result);
            var a = i.getDiffOptions(r.variables),
              s = o.diff(a);
            i.stopped || i.updateWatch(r.variables), i.updateLastDiff(s, a), s.complete && (e.data = s.result)
          })) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = T.p.ready
        }, e.prototype.markError = function(e) {
          return this.networkStatus = T.p.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function K(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !y(e);
        return !n && r && e.data && (n = !0), n
      }
      var $ = Object.prototype.hasOwnProperty,
        X = function() {
          function e(e) {
            var t = e.cache,
              r = e.link,
              n = e.defaultOptions,
              i = e.queryDeduplication,
              o = void 0 !== i && i,
              a = e.onBroadcast,
              s = e.ssrMode,
              u = void 0 !== s && s,
              c = e.clientAwareness,
              l = void 0 === c ? {} : c,
              f = e.localState,
              p = e.assumeImmutableResults;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new(d.et ? WeakMap : Map), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Map, this.cache = t, this.link = r, this.defaultOptions = n || Object.create(null), this.queryDeduplication = o, this.clientAwareness = l, this.localState = f || new W({
              cache: t
            }), this.ssrMode = u, this.assumeImmutableResults = !!p, (this.onBroadcast = a) && (this.mutationStore = Object.create(null))
          }
          return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach((function(t, r) {
              e.stopQueryNoBroadcast(r)
            })), this.cancelPendingFetches(__DEV__ ? new i.zU("QueryManager stopped while query was in flight") : new i.zU(14))
          }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach((function(t) {
              return t(e)
            })), this.fetchCancelFns.clear()
          }, e.prototype.mutate = function(e) {
            var t, r, o = e.mutation,
              a = e.variables,
              s = e.optimisticResponse,
              u = e.updateQueries,
              c = e.refetchQueries,
              l = void 0 === c ? [] : c,
              f = e.awaitRefetchQueries,
              d = void 0 !== f && f,
              p = e.update,
              v = e.onQueryUpdated,
              b = e.fetchPolicy,
              g = void 0 === b ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || "network-only" : b,
              w = e.errorPolicy,
              _ = void 0 === w ? (null === (r = this.defaultOptions.mutate) || void 0 === r ? void 0 : r.errorPolicy) || "none" : w,
              E = e.keepRootFields,
              O = e.context;
            return (0, n.sH)(this, void 0, void 0, (function() {
              var e, t, r, c, f, b;
              return (0, n.YH)(this, (function(w) {
                switch (w.label) {
                  case 0:
                    return __DEV__ ? (0, i.V1)(o, "mutation option is required. You must specify your GraphQL document in the mutation option.") : (0, i.V1)(o, 15), __DEV__ ? (0, i.V1)("network-only" === g || "no-cache" === g, "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : (0, i.V1)("network-only" === g || "no-cache" === g, 16), e = this.generateMutationId(), t = this.transform(o), r = t.document, c = t.hasClientExports, o = this.cache.transformForLink(r), a = this.getVariables(o, a), c ? [4, this.localState.addExportedVariables(o, a, O)] : [3, 2];
                  case 1:
                    a = w.sent(), w.label = 2;
                  case 2:
                    return f = this.mutationStore && (this.mutationStore[e] = {
                      mutation: o,
                      variables: a,
                      loading: !0,
                      error: null
                    }), s && this.markMutationOptimistic(s, {
                      mutationId: e,
                      document: o,
                      variables: a,
                      fetchPolicy: g,
                      errorPolicy: _,
                      context: O,
                      updateQueries: u,
                      update: p,
                      keepRootFields: E
                    }), this.broadcastQueries(), b = this, [2, new Promise((function(t, r) {
                      return h(b.getObservableFromLink(o, (0, n.Cl)((0, n.Cl)({}, O), {
                        optimisticResponse: s
                      }), a, !1), (function(t) {
                        if (y(t) && "none" === _) throw new C.K4({
                          graphQLErrors: m(t)
                        });
                        f && (f.loading = !1, f.error = null);
                        var r = (0, n.Cl)({}, t);
                        return "function" == typeof l && (l = l(r)), "ignore" === _ && y(r) && delete r.errors, b.markMutationResult({
                          mutationId: e,
                          result: r,
                          document: o,
                          variables: a,
                          fetchPolicy: g,
                          errorPolicy: _,
                          context: O,
                          update: p,
                          updateQueries: u,
                          awaitRefetchQueries: d,
                          refetchQueries: l,
                          removeOptimistic: s ? e : void 0,
                          onQueryUpdated: v,
                          keepRootFields: E
                        })
                      })).subscribe({
                        next: function(e) {
                          b.broadcastQueries(), "hasNext" in e && !1 !== e.hasNext || t(e)
                        },
                        error: function(t) {
                          f && (f.loading = !1, f.error = t), s && b.cache.removeOptimistic(e), b.broadcastQueries(), r(t instanceof C.K4 ? t : new C.K4({
                            networkError: t
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
            if (!a && K(i, e.errorPolicy)) {
              if ((0, l.ST)(i) || o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), (0, l.ST)(i) && (0, v.E)(i.incremental)) {
                var s = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.transform(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  }),
                  u = void 0;
                s.result && (u = (0, l.bd)(s.result, i)), void 0 !== u && (i.data = u, o.push({
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
                if (s && $.call(c, s)) {
                  var u = c[s],
                    l = r.queries.get(n),
                    f = l.document,
                    d = l.variables,
                    p = t.diff({
                      query: f,
                      variables: d,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    h = p.result;
                  if (p.complete && h) {
                    var v = u(h, {
                      mutationResult: i,
                      queryName: f && (0, b.n4)(f) || void 0,
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
              }))
            }
            if (o.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
              var f = [];
              if (this.refetchQueries({
                  updateCache: function(t) {
                    a || o.forEach((function(e) {
                      return t.write(e)
                    }));
                    var s = e.update,
                      u = !(0, l.YX)(i) || (0, l.ST)(i) && !i.hasNext;
                    if (s) {
                      if (!a) {
                        var c = t.diff({
                          id: "ROOT_MUTATION",
                          query: r.transform(e.document).asQuery,
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
                  return f.push(e)
                })), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(f).then((function() {
                return i
              }))
            }
            return Promise.resolve(i)
          }, e.prototype.markMutationOptimistic = function(e, t) {
            var r = this,
              o = "function" == typeof e ? e(t.variables) : e;
            return this.cache.recordOptimisticTransaction((function(e) {
              try {
                r.markMutationResult((0, n.Cl)((0, n.Cl)({}, t), {
                  result: {
                    data: o
                  }
                }), e)
              } catch (e) {
                __DEV__ && i.V1.error(e)
              }
            }), t.mutationId)
          }, e.prototype.fetchQuery = function(e, t, r) {
            return this.fetchQueryObservable(e, t, r).promise
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
            var t = this.transformCache;
            if (!t.has(e)) {
              var r = this.cache.transformDocument(e),
                i = (0, g.hX)(r),
                o = this.localState.clientQuery(r),
                a = i && this.localState.serverQuery(i),
                s = {
                  document: r,
                  hasClientExports: (0, w.f2)(r),
                  hasForcedResolvers: this.localState.shouldForceResolvers(r),
                  clientQuery: o,
                  serverQuery: a,
                  defaultVars: (0, b.wY)((0, b.Vu)(r)),
                  asQuery: (0, n.Cl)((0, n.Cl)({}, r), {
                    definitions: r.definitions.map((function(e) {
                      return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, n.Cl)((0, n.Cl)({}, e), {
                        operation: "query"
                      }) : e
                    }))
                  })
                },
                u = function(e) {
                  e && !t.has(e) && t.set(e, s)
                };
              u(e), u(r), u(o), u(a)
            }
            return t.get(e)
          }, e.prototype.getVariables = function(e, t) {
            return (0, n.Cl)((0, n.Cl)({}, this.transform(e).defaultVars), t)
          }, e.prototype.watchQuery = function(e) {
            void 0 === (e = (0, n.Cl)((0, n.Cl)({}, e), {
              variables: this.getVariables(e.query, e.variables)
            })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
            var t = new J(this),
              r = new j({
                queryManager: this,
                queryInfo: t,
                options: e
              });
            return this.queries.set(r.queryId, t), t.init({
              document: r.query,
              observableQuery: r,
              variables: r.variables
            }), r
          }, e.prototype.query = function(e, t) {
            var r = this;
            return void 0 === t && (t = this.generateQueryId()), __DEV__ ? (0, i.V1)(e.query, "query option is required. You must specify your GraphQL document in the query option.") : (0, i.V1)(e.query, 17), __DEV__ ? (0, i.V1)("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : (0, i.V1)("Document" === e.query.kind, 18), __DEV__ ? (0, i.V1)(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : (0, i.V1)(!e.returnPartialData, 19), __DEV__ ? (0, i.V1)(!e.pollInterval, "pollInterval option only supported on watchQuery.") : (0, i.V1)(!e.pollInterval, 20), this.fetchQuery(t, e).finally((function() {
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
            }), this.cancelPendingFetches(__DEV__ ? new i.zU("Store reset while query was in flight (not completed in link chain)") : new i.zU(21)), this.queries.forEach((function(e) {
              e.observableQuery ? e.networkStatus = T.p.loading : e.stop()
            })), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
          }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map,
              o = new Map,
              a = new Set;
            return Array.isArray(e) && e.forEach((function(e) {
              "string" == typeof e ? o.set(e, !1) : (0, _.Kc)(e) ? o.set(t.transform(e).document, !1) : (0, E.U)(e) && e.query && a.add(e)
            })), this.queries.forEach((function(t, n) {
              var i = t.observableQuery,
                a = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && o.has(s) || a && o.has(a)) && (r.set(n, i), s && o.set(s, !0), a && o.set(a, !0))
              }
            })), a.size && a.forEach((function(e) {
              var o = (0, O.v)("legacyOneTimeQuery"),
                a = t.getQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new j({
                  queryManager: t,
                  queryInfo: a,
                  options: (0, n.Cl)((0, n.Cl)({}, e), {
                    fetchPolicy: "network-only"
                  })
                });
              (0, i.V1)(s.queryId === o), a.setObservableQuery(s), r.set(o, s)
            })), __DEV__ && o.size && o.forEach((function(e, t) {
              e || __DEV__ && i.V1.warn("Unknown query ".concat("string" == typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array"))
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
              n = e.fetchPolicy,
              i = e.errorPolicy,
              o = e.variables,
              a = e.context,
              s = void 0 === a ? {} : a;
            r = this.transform(r).document, o = this.getVariables(r, o);
            var u = function(e) {
              return t.getObservableFromLink(r, s, e).map((function(o) {
                "no-cache" !== n && (K(o, i) && t.cache.write({
                  query: r,
                  result: o.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var a = y(o),
                  s = (0, C.uR)(o);
                if (a || s) {
                  var u = {};
                  throw a && (u.graphQLErrors = o.errors), s && (u.protocolErrors = o.extensions[C.K$]), new C.K4(u)
                }
                return o
              }))
            };
            if (this.transform(r).hasClientExports) {
              var c = this.localState.addExportedVariables(r, o, s).then(u);
              return new p.c((function(e) {
                var t = null;
                return c.then((function(r) {
                    return t = r.subscribe(e)
                  }), e.error),
                  function() {
                    return t && t.unsubscribe()
                  }
              }))
            }
            return u(o)
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
          }, e.prototype.getObservableFromLink = function(e, t, r, i) {
            var o, s, u = this;
            void 0 === i && (i = null !== (o = null == t ? void 0 : t.queryDeduplication) && void 0 !== o ? o : this.queryDeduplication);
            var c = this.transform(e).serverQuery;
            if (c) {
              var l = this.inFlightLinkObservables,
                d = this.link,
                v = {
                  query: c,
                  variables: r,
                  operationName: (0, b.n4)(c) || void 0,
                  context: this.prepareContext((0, n.Cl)((0, n.Cl)({}, t), {
                    forceFetch: !i
                  }))
                };
              if (t = v.context, i) {
                var y = l.get(c) || new Map;
                l.set(c, y);
                var m = (0, f.M)(r);
                if (!(s = y.get(m))) {
                  var g = new D([a(d, v)]);
                  y.set(m, s = g), g.beforeNext((function() {
                    y.delete(m) && y.size < 1 && l.delete(c)
                  }))
                }
              } else s = new D([a(d, v)])
            } else s = new D([p.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            var w = this.transform(e).clientQuery;
            return w && (s = h(s, (function(e) {
              return u.localState.runResolvers({
                document: w,
                remoteResult: e,
                context: t,
                variables: r
              })
            }))), s
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(this.transform(e.document).document);
            return h(this.getObservableFromLink(i, r.context, r.variables), (function(o) {
              var a = m(o),
                s = a.length > 0;
              if (n >= e.lastRequestId) {
                if (s && "none" === r.errorPolicy) throw e.markError(new C.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var u = {
                data: o.data,
                loading: !1,
                networkStatus: T.p.ready
              };
              return s && "ignore" !== r.errorPolicy && (u.errors = a, u.networkStatus = T.p.error), u
            }), (function(t) {
              var r = (0, C.Mn)(t) ? t : new C.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            }))
          }, e.prototype.fetchQueryObservable = function(e, t, r) {
            return this.fetchConcastWithInfo(e, t, r).concast
          }, e.prototype.fetchConcastWithInfo = function(e, t, r) {
            var n = this;
            void 0 === r && (r = T.p.loading);
            var i, o, a = this.transform(t.query).document,
              s = this.getVariables(a, t.variables),
              u = this.getQuery(e),
              c = this.defaultOptions.watchQuery,
              l = t.fetchPolicy,
              f = void 0 === l ? c && c.fetchPolicy || "cache-first" : l,
              d = t.errorPolicy,
              p = void 0 === d ? c && c.errorPolicy || "none" : d,
              h = t.returnPartialData,
              v = void 0 !== h && h,
              y = t.notifyOnNetworkStatusChange,
              m = void 0 !== y && y,
              b = t.context,
              g = void 0 === b ? {} : b,
              w = Object.assign({}, t, {
                query: a,
                variables: s,
                fetchPolicy: f,
                errorPolicy: p,
                returnPartialData: v,
                notifyOnNetworkStatusChange: m,
                context: g
              }),
              _ = function(e) {
                w.variables = e;
                var i = n.fetchQueryByPolicy(u, w, r);
                return "standby" !== w.fetchPolicy && i.sources.length > 0 && u.observableQuery && u.observableQuery.applyNextFetchPolicy("after-fetch", t), i
              },
              E = function() {
                return n.fetchCancelFns.delete(e)
              };
            if (this.fetchCancelFns.set(e, (function(e) {
                E(), setTimeout((function() {
                  return i.cancel(e)
                }))
              })), this.transform(w.query).hasClientExports) i = new D(this.localState.addExportedVariables(w.query, w.variables, w.context).then(_).then((function(e) {
              return e.sources
            }))), o = !0;
            else {
              var O = _(w.variables);
              o = O.fromLink, i = new D(O.sources)
            }
            return i.promise.then(E, E), {
              concast: i,
              fromLink: o
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
                var n = e.watcher instanceof J && e.watcher.observableQuery;
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
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var i = this,
              o = t.query,
              a = t.variables,
              s = t.fetchPolicy,
              u = t.refetchWritePolicy,
              l = t.errorPolicy,
              f = t.returnPartialData,
              d = t.context,
              h = t.notifyOnNetworkStatusChange,
              v = e.networkStatus;
            e.init({
              document: this.transform(o).document,
              variables: a,
              networkStatus: r
            });
            var y = function() {
                return e.getDiff(a)
              },
              m = function(t, r) {
                void 0 === r && (r = e.networkStatus || T.p.loading);
                var s = t.result;
                !__DEV__ || f || (0, c.L)(s, {}) || q(t.missing);
                var u = function(e) {
                  return p.c.of((0, n.Cl)({
                    data: e,
                    loading: (0, T.b)(r),
                    networkStatus: r
                  }, t.complete ? null : {
                    partial: !0
                  }))
                };
                return s && i.transform(o).hasForcedResolvers ? i.localState.runResolvers({
                  document: o,
                  remoteResult: {
                    data: s
                  },
                  context: d,
                  variables: a,
                  onlyRunForcedResolvers: !0
                }).then((function(e) {
                  return u(e.data || void 0)
                })) : "none" === l && r === T.p.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              b = "no-cache" === s ? 0 : r === T.p.refetch && "merge" !== u ? 1 : 2,
              g = function() {
                return i.getResultsFromLink(e, b, {
                  variables: a,
                  context: d,
                  fetchPolicy: s,
                  errorPolicy: l
                })
              },
              w = h && "number" == typeof v && v !== r && (0, T.b)(r);
            switch (s) {
              default:
              case "cache-first":
                return (_ = y()).complete ? {
                  fromLink: !1,
                  sources: [m(_, e.markReady())]
                } : f || w ? {
                  fromLink: !0,
                  sources: [m(_), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "cache-and-network":
                var _;
                return (_ = y()).complete || f || w ? {
                  fromLink: !0,
                  sources: [m(_), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [m(y(), e.markReady())]
                };
              case "network-only":
                return w ? {
                  fromLink: !0,
                  sources: [m(y()), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "no-cache":
                return w ? {
                  fromLink: !0,
                  sources: [m(e.getDiff()), g()]
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
            return e && !this.queries.has(e) && this.queries.set(e, new J(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.Cl)((0, n.Cl)({}, t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        Z = r(5642),
        ee = !1,
        te = function() {
          function e(e) {
            var t = this;
            this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
            var r = e.uri,
              n = e.credentials,
              a = e.headers,
              s = e.cache,
              c = e.ssrMode,
              l = void 0 !== c && c,
              f = e.ssrForceFetchDelay,
              d = void 0 === f ? 0 : f,
              p = e.connectToDevTools,
              h = void 0 === p ? "object" == typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : p,
              v = e.queryDeduplication,
              y = void 0 === v || v,
              m = e.defaultOptions,
              b = e.assumeImmutableResults,
              g = void 0 !== b && b,
              w = e.resolvers,
              _ = e.typeDefs,
              E = e.fragmentMatcher,
              O = e.name,
              k = e.version,
              S = e.link;
            if (S || (S = r ? new u({
                uri: r,
                credentials: n,
                headers: a
              }) : o.C.empty()), !s) throw __DEV__ ? new i.zU("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new i.zU(9);
            if (this.link = S, this.cache = s, this.disableNetworkFetches = l || d > 0, this.queryDeduplication = y, this.defaultOptions = m || Object.create(null), this.typeDefs = _, d && setTimeout((function() {
                return t.disableNetworkFetches = !1
              }), d), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), h && "object" == typeof window && (window.__APOLLO_CLIENT__ = this), !ee && h && __DEV__ && (ee = !0, "undefined" != typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
              var x = window.navigator,
                D = x && x.userAgent,
                C = void 0;
              "string" == typeof D && (D.indexOf("Chrome/") > -1 ? C = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : D.indexOf("Firefox/") > -1 && (C = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), C && __DEV__ && i.V1.log("Download the Apollo DevTools for a better development experience: " + C)
            }
            this.version = "3.7.17", this.localState = new W({
              cache: s,
              client: this,
              resolvers: w,
              fragmentMatcher: E
            }), this.queryManager = new X({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              queryDeduplication: y,
              ssrMode: l,
              clientAwareness: {
                name: O,
                version: k
              },
              localState: this.localState,
              assumeImmutableResults: g,
              onBroadcast: h ? function() {
                t.devToolsHookCb && t.devToolsHookCb({
                  action: {},
                  state: {
                    queries: t.queryManager.getQueryStore(),
                    mutations: t.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: t.cache.extract(!0)
                })
              } : void 0
            })
          }
          return e.prototype.stop = function() {
            this.queryManager.stop()
          }, e.prototype.watchQuery = function(e) {
            return this.defaultOptions.watchQuery && (e = (0, Z.l)(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = (0, Z.l)(this.defaultOptions.query, e)), __DEV__ ? (0, i.V1)("cache-and-network" !== e.fetchPolicy, "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : (0, i.V1)("cache-and-network" !== e.fetchPolicy, 10), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.Cl)((0, n.Cl)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = (0, Z.l)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            return this.queryManager.startGraphQLSubscription(e)
          }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readQuery(e, t)
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
              __DEV__ && i.V1.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))
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
          }, e
        }()
    },
    2013: (e, t, r) => {
      "use strict";
      var n;

      function i(e) {
        return !!e && e < 7
      }
      r.d(t, {
          b: () => i,
          p: () => n
        }),
        function(e) {
          e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
        }(n || (n = {}))
    },
    6449: (e, t, r) => {
      "use strict";
      r.d(t, {
        K$: () => o,
        K4: () => u,
        Mn: () => s,
        uR: () => a
      });
      var n = r(226),
        i = (r(7042), r(9554)),
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
            p = e.call(this, f) || this;
          return p.name = "ApolloError", p.graphQLErrors = s || [], p.protocolErrors = u || [], p.clientErrors = c || [], p.networkError = l || null, p.message = f || (o = p, a = (0, n.fX)((0, n.fX)((0, n.fX)([], o.graphQLErrors, !0), o.clientErrors, !0), o.protocolErrors, !0), o.networkError && a.push(o.networkError), a.map((function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          })).join("\n")), p.extraInfo = d, p.__proto__ = t.prototype, p
        }
        return (0, n.C6)(t, e), t
      }(Error)
    },
    8102: (e, t, r) => {
      "use strict";
      r.d(t, {
        o: () => a
      });
      var n = r(226),
        i = r(1622),
        o = r(4984);

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
    1622: (e, t, r) => {
      "use strict";
      r.d(t, {
        C: () => f
      });
      var n = r(226),
        i = r(7042),
        o = r(4984),
        a = r(8810);

      function s(e, t) {
        return t ? t(e) : o.c.of()
      }

      function u(e) {
        return "function" == typeof e ? new f(e) : e
      }

      function c(e) {
        return e.request.length <= 1
      }
      var l = function(e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return n.link = r, n
          }
          return (0, n.C6)(t, e), t
        }(Error),
        f = function() {
          function e(e) {
            e && (this.request = e)
          }
          return e.empty = function() {
            return new e((function() {
              return o.c.of()
            }))
          }, e.from = function(t) {
            return 0 === t.length ? e.empty() : t.map(u).reduce((function(e, t) {
              return e.concat(t)
            }))
          }, e.split = function(t, r, n) {
            var i = u(r),
              a = u(n || new e(s));
            return c(i) && c(a) ? new e((function(e) {
              return t(e) ? i.request(e) || o.c.of() : a.request(e) || o.c.of()
            })) : new e((function(e, r) {
              return t(e) ? i.request(e, r) || o.c.of() : a.request(e, r) || o.c.of()
            }))
          }, e.execute = function(e, t) {
            return e.request(function(e, t) {
              var r = (0, n.Cl)({}, e);
              return Object.defineProperty(t, "setContext", {
                enumerable: !1,
                value: function(e) {
                  r = "function" == typeof e ? (0, n.Cl)((0, n.Cl)({}, r), e(r)) : (0, n.Cl)((0, n.Cl)({}, r), e)
                }
              }), Object.defineProperty(t, "getContext", {
                enumerable: !1,
                value: function() {
                  return (0, n.Cl)({}, r)
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
              for (var t = ["query", "operationName", "variables", "extensions", "context"], r = 0, n = Object.keys(e); r < n.length; r++) {
                var o = n[r];
                if (t.indexOf(o) < 0) throw __DEV__ ? new i.zU("illegal argument: ".concat(o)) : new i.zU(27)
              }
              return e
            }(t)))) || o.c.of()
          }, e.concat = function(t, r) {
            var n = u(t);
            if (c(n)) return __DEV__ && i.V1.warn(new l("You are calling concat on a terminating link, which will have no effect", n)), n;
            var a = u(r);
            return c(a) ? new e((function(e) {
              return n.request(e, (function(e) {
                return a.request(e) || o.c.of()
              })) || o.c.of()
            })) : new e((function(e, t) {
              return n.request(e, (function(e) {
                return a.request(e, t) || o.c.of()
              })) || o.c.of()
            }))
          }, e.prototype.split = function(t, r, n) {
            return this.concat(e.split(t, r, n || new e(s)))
          }, e.prototype.concat = function(t) {
            return e.concat(this, t)
          }, e.prototype.request = function(e, t) {
            throw __DEV__ ? new i.zU("request is not implemented") : new i.zU(22)
          }, e.prototype.onError = function(e, t) {
            if (t && t.error) return t.error(e), !1;
            throw e
          }, e.prototype.setOnError = function(e) {
            return this.onError = e, this
          }, e
        }()
    },
    6375: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => x
      });
      var n = r(226),
        i = r(7042),
        o = r(3654),
        a = r(1622),
        s = r(104),
        u = r(4984),
        c = function(e, t) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var n = __DEV__ ? new i.zU("Network request failed. ".concat(t, " is not serializable: ").concat(e.message)) : new i.zU(24);
            throw n.parseError = e, n
          }
          return r
        },
        l = r(4361);

      function f(e) {
        var t = {
          next: function() {
            return e.read()
          }
        };
        return l.uJ && (t[Symbol.asyncIterator] = function() {
          return this
        }), t
      }

      function d(e) {
        var t, r, n, i = e;
        if (e.body && (i = e.body), n = i, l.uJ && n[Symbol.asyncIterator]) return r = i[Symbol.asyncIterator](), (t = {
          next: function() {
            return r.next()
          }
        })[Symbol.asyncIterator] = function() {
          return this
        }, t;
        if (function(e) {
            return !!e.getReader
          }(i)) return f(i.getReader());
        if (function(e) {
            return !!e.stream
          }(i)) return f(i.stream().getReader());
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
          return l.uJ && (r[Symbol.asyncIterator] = function() {
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
          var c = {
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
          return l.uJ && (c[Symbol.asyncIterator] = function() {
            return this
          }), c
        }(i);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var p = function(e, t, r) {
          var n = new Error(r);
          throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
        },
        h = r(6449),
        v = r(6443),
        y = Object.prototype.hasOwnProperty;

      function m(e) {
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

      function b(e, t) {
        e.status >= 300 && p(e, function() {
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

      function g(e, t) {
        var r, n;
        "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && (null === (r = t.next) || void 0 === r || r.call(t, e.result)), null === (n = t.error) || void 0 === n || n.call(t, e))
      }
      var w = r(2235),
        _ = {
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
        E = function(e, t) {
          return t(e)
        };

      function O(e) {
        return new u.c((function(t) {
          t.error(e)
        }))
      }
      var k = r(8810),
        S = (0, i.no)((function() {
          return fetch
        })),
        x = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            l = e.fetch,
            f = e.print,
            x = void 0 === f ? E : f,
            D = e.includeExtensions,
            C = e.preserveHeaderCase,
            T = e.useGETForQueries,
            I = e.includeUnusedVariables,
            P = void 0 !== I && I,
            V = (0, n.Tt)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          __DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw __DEV__ ? new i.zU("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new i.zU(23)
          }(l || S);
          var R = {
            http: {
              includeExtensions: D,
              preserveHeaderCase: C
            },
            options: V.fetchOptions,
            credentials: V.credentials,
            headers: V.headers
          };
          return new a.C((function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              a = e.getContext(),
              f = {};
            if (a.clientAwareness) {
              var E = a.clientAwareness,
                D = E.name,
                C = E.version;
              D && (f["apollographql-client-name"] = D), C && (f["apollographql-client-version"] = C)
            }
            var I, V = (0, n.Cl)((0, n.Cl)({}, f), a.headers),
              j = {
                http: a.http,
                options: a.fetchOptions,
                credentials: a.credentials,
                headers: V
              },
              N = function(e, t) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                var o = {},
                  a = {};
                r.forEach((function(e) {
                  o = (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, o), e.options), {
                    headers: (0, n.Cl)((0, n.Cl)({}, o.headers), e.headers)
                  }), e.credentials && (o.credentials = e.credentials), a = (0, n.Cl)((0, n.Cl)({}, a), e.http)
                })), o.headers && (o.headers = function(e, t) {
                  if (!t) {
                    var r = Object.create(null);
                    return Object.keys(Object(e)).forEach((function(t) {
                      r[t.toLowerCase()] = e[t]
                    })), r
                  }
                  var n = Object.create(null);
                  Object.keys(Object(e)).forEach((function(t) {
                    n[t.toLowerCase()] = {
                      originalName: t,
                      value: e[t]
                    }
                  }));
                  var i = Object.create(null);
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
                return a.includeExtensions && (f.extensions = u), a.includeQuery && (f.query = t(l, w.y)), {
                  options: o,
                  body: f
                }
              }(e, x, _, R, j),
              A = N.options,
              q = N.body;
            if (q.variables && !P) {
              var F = new Set(Object.keys(q.variables));
              (0, o.YR)(e.query, {
                Variable: function(e, t, r) {
                  r && "VariableDefinition" !== r.kind && F.delete(e.name.value)
                }
              }), F.size && (q.variables = (0, n.Cl)({}, q.variables), F.forEach((function(e) {
                delete q.variables[e]
              })))
            }
            if (!A.signal) {
              var M = function() {
                  if ("undefined" == typeof AbortController) return {
                    controller: !1,
                    signal: !1
                  };
                  var e = new AbortController;
                  return {
                    controller: e,
                    signal: e.signal
                  }
                }(),
                Q = M.controller,
                L = M.signal;
              (I = Q) && (A.signal = L)
            }
            var U, z = "OperationDefinition" === (U = (0, k.Vn)(e.query)).kind && "subscription" === U.operation,
              B = (0, s.d8)(["defer"], e.query);
            if (T && !e.query.definitions.some((function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              })) && (A.method = "GET"), B || z) {
              A.headers = A.headers || {};
              var W = "multipart/mixed;";
              z && B && __DEV__ && i.V1.warn("Multipart-subscriptions do not support @defer"), z ? W += "boundary=graphql;subscriptionSpec=1.0,application/json" : B && (W += "deferSpec=20220824,application/json"), A.headers.accept = W
            }
            if ("GET" === A.method) {
              var H = function(e, t) {
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
                }(t, q),
                Y = H.newURI,
                G = H.parseError;
              if (G) return O(G);
              t = Y
            } else try {
              A.body = c(q, "Payload")
            } catch (G) {
              return O(G)
            }
            return new u.c((function(r) {
              return (l || (0, i.no)((function() {
                  return fetch
                })) || S)(t, A).then((function(t) {
                  var i;
                  e.setContext({
                    response: t
                  });
                  var o = null === (i = t.headers) || void 0 === i ? void 0 : i.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    var r, i, o, a, s;
                    return (0, n.sH)(this, void 0, void 0, (function() {
                      var u, c, l, f, p, y, w, _, E, O, k, S, x, D, C, T, I, P, V, R, j, N, A;
                      return (0, n.YH)(this, (function(q) {
                        switch (q.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            u = new TextDecoder("utf-8"), c = null === (r = e.headers) || void 0 === r ? void 0 : r.get("content-type"), l = "boundary=", f = (null == c ? void 0 : c.includes(l)) ? null == c ? void 0 : c.substring((null == c ? void 0 : c.indexOf(l)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", p = "\r\n--".concat(f), y = "", w = d(e), _ = !0, q.label = 1;
                          case 1:
                            return _ ? [4, w.next()] : [3, 3];
                          case 2:
                            for (E = q.sent(), O = E.value, k = E.done, S = "string" == typeof O ? O : u.decode(O), x = y.length - p.length + 1, _ = !k, D = (y += S).indexOf(p, x); D > -1;) {
                              if (C = void 0, N = [y.slice(0, D), y.slice(D + p.length)], y = N[1], T = (C = N[0]).indexOf("\r\n\r\n"), I = m(C.slice(0, T)), (P = I["content-type"]) && -1 === P.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (V = C.slice(T)) try {
                                R = b(e, V), Object.keys(R).length > 1 || "data" in R || "incremental" in R || "errors" in R || "payload" in R ? (0, v.Nw)(R) ? (j = {}, "payload" in R && (j = (0, n.Cl)({}, R.payload)), "errors" in R && (j = (0, n.Cl)((0, n.Cl)({}, j), {
                                  extensions: (0, n.Cl)((0, n.Cl)({}, "extensions" in j ? j.extensions : null), (A = {}, A[h.K$] = R.errors, A))
                                })), null === (i = t.next) || void 0 === i || i.call(t, j)) : null === (o = t.next) || void 0 === o || o.call(t, R) : 1 === Object.keys(R).length && "hasNext" in R && !R.hasNext && (null === (a = t.complete) || void 0 === a || a.call(t))
                              } catch (e) {
                                g(e, t)
                              }
                              D = y.indexOf(p)
                            }
                            return [3, 1];
                          case 3:
                            return null === (s = t.complete) || void 0 === s || s.call(t), [2]
                        }
                      }))
                    }))
                  }(t, r) : function(e, t, r) {
                    var n;
                    (n = t, function(e) {
                      return e.text().then((function(t) {
                        return b(e, t)
                      })).then((function(t) {
                        return e.status >= 300 && p(e, t, "Response not successful: Received status code ".concat(e.status)), Array.isArray(t) || y.call(t, "data") || y.call(t, "errors") || p(e, t, "Server response was missing for query '".concat(Array.isArray(n) ? n.map((function(e) {
                          return e.operationName
                        })) : n.operationName, "'.")), t
                      }))
                    })(e).then((function(e) {
                      var t, n;
                      null === (t = r.next) || void 0 === t || t.call(r, e), null === (n = r.complete) || void 0 === n || n.call(r)
                    })).catch((function(e) {
                      return g(e, r)
                    }))
                  }(t, e, r)
                })).catch((function(e) {
                  return g(e, r)
                })),
                function() {
                  I && I.abort()
                }
            }))
          }))
        }
    },
    7249: (e, t, r) => {
      "use strict";
      r.d(t, {
        ez: () => p
      });
      var n, i = r(226),
        o = r(7042),
        a = r(2235),
        s = r(1622),
        u = r(8226),
        c = r(3851),
        l = r(4984);

      function f(e) {
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
      n || (n = {});
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
          var t = new WeakMap;
          __DEV__ ? (0, o.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 'Missing/invalid "sha256" or "generateHash" function. Please configure one using the "createPersistedQueryLink(options)" options parameter.') : (0, o.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 25);
          var r = (0, c.o)(d, e),
            n = r.sha256,
            p = r.generateHash,
            h = void 0 === p ? function(e) {
              return Promise.resolve(n((0, a.y)(e)))
            } : p,
            v = r.disable,
            y = r.retry,
            m = r.useGETForHashedQueries,
            b = !0,
            g = function(e) {
              return new Promise((function(t) {
                return t(h(e))
              }))
            };
          return new s.C((function(e, r) {
            __DEV__ ? (0, o.V1)(r, "PersistedQueryLink cannot be the last link in the chain.") : (0, o.V1)(r, 26);
            var n = e.query;
            return new l.c((function(o) {
              var a, s, c = !1,
                l = !1,
                d = function(t, n) {
                  var i = t.response,
                    o = t.networkError;
                  if (!c && (i && i.errors || o)) {
                    c = !0;
                    var d = [],
                      h = i && i.errors;
                    (0, u.E)(h) && d.push.apply(d, h);
                    var m = void 0;
                    "string" != typeof(null == o ? void 0 : o.result) && (m = o && o.result && o.result.errors), (0, u.E)(m) && d.push.apply(d, m);
                    var g = {
                      response: i,
                      networkError: o,
                      operation: e,
                      graphQLErrors: (0, u.E)(d) ? d : void 0,
                      meta: f(d)
                    };
                    if (b = !v(g), y(g)) return a && a.unsubscribe(), e.setContext({
                      http: {
                        includeQuery: !0,
                        includeExtensions: b
                      },
                      fetchOptions: {
                        method: "POST"
                      }
                    }), l && e.setContext({
                      fetchOptions: s
                    }), void(a = r(e).subscribe(p))
                  }
                  n()
                },
                p = {
                  next: function(e) {
                    d({
                      response: e
                    }, (function() {
                      return o.next(e)
                    }))
                  },
                  error: function(e) {
                    d({
                      networkError: e
                    }, (function() {
                      return o.error(e)
                    }))
                  },
                  complete: o.complete.bind(o)
                };
              return e.setContext({
                  http: {
                    includeQuery: !b,
                    includeExtensions: b
                  }
                }), m && b && ! function(e) {
                  return e.query.definitions.some((function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                  }))
                }(e) && (e.setContext((function(e) {
                  var t = e.fetchOptions,
                    r = void 0 === t ? {} : t;
                  return s = r, {
                    fetchOptions: (0, i.Cl)((0, i.Cl)({}, r), {
                      method: "GET"
                    })
                  }
                })), l = !0), b ? function(e) {
                  if (!e || "object" != typeof e) return g(e);
                  var r = t.get(e);
                  return r || t.set(e, r = g(e)), r
                }(n).then((function(t) {
                  e.extensions.persistedQuery = {
                    version: 1,
                    sha256Hash: t
                  }, a = r(e).subscribe(p)
                })).catch(o.error.bind(o)) : a = r(e).subscribe(p),
                function() {
                  a && a.unsubscribe()
                }
            }))
          }))
        }
    },
    9435: (e, t, r) => {
      "use strict";
      r.d(t, {
        l: () => o
      });
      var n = r(1403),
        i = r(4361).ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function o() {
        var e = n.createContext[i];
        return e || (Object.defineProperty(n.createContext, i, {
          value: e = n.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
    },
    5019: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => a
      });
      var n = r(7042),
        i = r(1403),
        o = r(9435),
        a = function(e) {
          var t = e.client,
            r = e.children,
            a = (0, o.l)();
          return i.createElement(a.Consumer, null, (function(e) {
            return void 0 === e && (e = {}), t && e.client !== t && (e = Object.assign({}, e, {
              client: t
            })), __DEV__ ? (0, n.V1)(e.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : (0, n.V1)(e.client, 29), i.createElement(a.Provider, {
              value: e
            }, r)
          }))
        }
    },
    1425: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => a
      });
      var n = r(7042),
        i = r(1403),
        o = r(9435);

      function a(e) {
        var t = (0, i.useContext)((0, o.l)()),
          r = e || t.client;
        return __DEV__ ? (0, n.V1)(!!r, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0, n.V1)(!!r, 32), r
      }
    },
    9998: (e, t, r) => {
      "use strict";
      r.d(t, {
        n: () => l
      });
      var n = r(226),
        i = r(1403),
        o = r(5642),
        a = r(4206),
        s = r(5365),
        u = r(6449),
        c = r(1425);

      function l(e, t) {
        var r = (0, c.m)(null == t ? void 0 : t.client);
        (0, s.D$)(e, s.KG.Mutation);
        var l = (0, i.useState)({
            called: !1,
            loading: !1,
            client: r
          }),
          f = l[0],
          d = l[1],
          p = (0, i.useRef)({
            result: f,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        Object.assign(p.current, {
          client: r,
          options: t,
          mutation: e
        });
        var h = (0, i.useCallback)((function(e) {
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
              var r, n = t.data,
                i = t.errors,
                o = i && i.length > 0 ? new u.K4({
                  graphQLErrors: i
                }) : void 0;
              if (l === p.current.mutationId && !f.ignoreResults) {
                var s = {
                  called: !0,
                  loading: !1,
                  data: n,
                  error: o,
                  client: c
                };
                p.current.isMounted && !(0, a.L)(p.current.result, s) && d(p.current.result = s)
              }
              var h = e.onCompleted || (null === (r = p.current.options) || void 0 === r ? void 0 : r.onCompleted);
              return null == h || h(t.data, f), t
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
          v = (0, i.useCallback)((function() {
            p.current.isMounted && d({
              called: !1,
              loading: !1,
              client: r
            })
          }), []);
        return (0, i.useEffect)((function() {
          return p.current.isMounted = !0,
            function() {
              p.current.isMounted = !1
            }
        }), []), [h, (0, n.Cl)({
          reset: v
        }, f)]
      }
    },
    7637: (e, t, r) => {
      "use strict";
      r.d(t, {
        I: () => E
      });
      var n = r(226),
        i = r(7042),
        o = r(1403),
        a = r.t(o, 2),
        s = r(4361),
        u = !1,
        c = a.useSyncExternalStore || function(e, t, r) {
          var n = t();
          __DEV__ && !u && n !== t() && (u = !0, __DEV__ && i.V1.error("The result of getSnapshot should be cached to avoid an infinite loop"));
          var a = o.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            c = a[0].inst,
            f = a[1];
          return s.JR ? o.useLayoutEffect((function() {
            Object.assign(c, {
              value: n,
              getSnapshot: t
            }), l(c) && f({
              inst: c
            })
          }), [e, n, t]) : Object.assign(c, {
            value: n,
            getSnapshot: t
          }), o.useEffect((function() {
            return l(c) && f({
              inst: c
            }), e((function() {
              l(c) && f({
                inst: c
              })
            }))
          }), [e]), n
        };

      function l(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }
      var f = r(4206),
        d = r(5642),
        p = r(9435),
        h = r(6449),
        v = r(2013),
        y = r(5365),
        m = r(1425),
        b = r(9987),
        g = r(3851),
        w = r(8226),
        _ = Object.prototype.hasOwnProperty;

      function E(e, t) {
        return void 0 === t && (t = Object.create(null)),
          function(e, t) {
            var r = (0, o.useRef)();
            r.current && e === r.current.client && t === r.current.query || (r.current = new O(e, t, r.current));
            var n = r.current,
              i = (0, o.useState)(0),
              a = (i[0], i[1]);
            return n.forceUpdate = function() {
              a((function(e) {
                return e + 1
              }))
            }, n
          }((0, m.m)(t.client), e).useQuery(t)
      }
      var O = function() {
        function e(e, t, r) {
          this.client = e, this.query = t, this.ssrDisabledResult = (0, b.G)({
            loading: !0,
            data: void 0,
            error: void 0,
            networkStatus: v.p.loading
          }), this.skipStandbyResult = (0, b.G)({
            loading: !1,
            data: void 0,
            error: void 0,
            networkStatus: v.p.ready
          }), this.toQueryResultCache = new(s.et ? WeakMap : Map), (0, y.D$)(t, y.KG.Query);
          var n = r && r.result,
            i = n && n.data;
          i && (this.previousData = i)
        }
        return e.prototype.forceUpdate = function() {
          __DEV__ && i.V1.warn("Calling default no-op implementation of InternalState#forceUpdate")
        }, e.prototype.executeQuery = function(e) {
          var t, r = this;
          e.query && Object.assign(this, {
            query: e.query
          }), this.watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = e);
          var n = this.observable.reobserveAsConcast(this.getObsQueryOptions());
          return this.previousData = (null === (t = this.result) || void 0 === t ? void 0 : t.data) || this.previousData, this.result = void 0, this.forceUpdate(), new Promise((function(e) {
            var t;
            n.subscribe({
              next: function(e) {
                t = e
              },
              error: function() {
                e(r.toQueryResult(r.observable.getCurrentResult()))
              },
              complete: function() {
                e(r.toQueryResult(t))
              }
            })
          }))
        }, e.prototype.useQuery = function(e) {
          var t = this;
          this.renderPromises = (0, o.useContext)((0, p.l)()).renderPromises, this.useOptions(e);
          var r = this.useObservableQuery(),
            n = c((0, o.useCallback)((function() {
              if (t.renderPromises) return function() {};
              var e = function() {
                  var e = t.result,
                    n = r.getCurrentResult();
                  e && e.loading === n.loading && e.networkStatus === n.networkStatus && (0, f.L)(e.data, n.data) || t.setResult(n)
                },
                n = function(o) {
                  var a = r.last;
                  i.unsubscribe();
                  try {
                    r.resetLastResults(), i = r.subscribe(e, n)
                  } finally {
                    r.last = a
                  }
                  if (!_.call(o, "graphQLErrors")) throw o;
                  var s = t.result;
                  (!s || s && s.loading || !(0, f.L)(o, s.error)) && t.setResult({
                    data: s && s.data,
                    error: o,
                    loading: !1,
                    networkStatus: v.p.error
                  })
                },
                i = r.subscribe(e, n);
              return function() {
                return setTimeout((function() {
                  return i.unsubscribe()
                }))
              }
            }), [r, this.renderPromises, this.client.disableNetworkFetches]), (function() {
              return t.getCurrentResult()
            }), (function() {
              return t.getCurrentResult()
            }));
          return this.unsafeHandlePartialRefetch(n), this.toQueryResult(n)
        }, e.prototype.useOptions = function(t) {
          var r, n = this.createWatchQueryOptions(this.queryHookOptions = t),
            i = this.watchQueryOptions;
          (0, f.L)(n, i) || (this.watchQueryOptions = n, i && this.observable && (this.observable.reobserve(this.getObsQueryOptions()), this.previousData = (null === (r = this.result) || void 0 === r ? void 0 : r.data) || this.previousData, this.result = void 0)), this.onCompleted = t.onCompleted || e.prototype.onCompleted, this.onError = t.onError || e.prototype.onError, !this.renderPromises && !this.client.disableNetworkFetches || !1 !== this.queryHookOptions.ssr || this.queryHookOptions.skip ? this.queryHookOptions.skip || "standby" === this.watchQueryOptions.fetchPolicy ? this.result = this.skipStandbyResult : this.result !== this.ssrDisabledResult && this.result !== this.skipStandbyResult || (this.result = void 0) : this.result = this.ssrDisabledResult
        }, e.prototype.getObsQueryOptions = function() {
          var e = [],
            t = this.client.defaultOptions.watchQuery;
          return t && e.push(t), this.queryHookOptions.defaultOptions && e.push(this.queryHookOptions.defaultOptions), e.push((0, g.o)(this.observable && this.observable.options, this.watchQueryOptions)), e.reduce(d.l)
        }, e.prototype.createWatchQueryOptions = function(e) {
          var t;
          void 0 === e && (e = {});
          var r = e.skip,
            i = (e.ssr, e.onCompleted, e.onError, e.defaultOptions, (0, n.Tt)(e, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"])),
            o = Object.assign(i, {
              query: this.query
            });
          if (!this.renderPromises || "network-only" !== o.fetchPolicy && "cache-and-network" !== o.fetchPolicy || (o.fetchPolicy = "cache-first"), o.variables || (o.variables = {}), r) {
            var a = o.fetchPolicy,
              s = void 0 === a ? this.getDefaultFetchPolicy() : a,
              u = o.initialFetchPolicy,
              c = void 0 === u ? s : u;
            Object.assign(o, {
              initialFetchPolicy: c,
              fetchPolicy: "standby"
            })
          } else o.fetchPolicy || (o.fetchPolicy = (null === (t = this.observable) || void 0 === t ? void 0 : t.options.initialFetchPolicy) || this.getDefaultFetchPolicy());
          return o
        }, e.prototype.getDefaultFetchPolicy = function() {
          var e, t;
          return (null === (e = this.queryHookOptions.defaultOptions) || void 0 === e ? void 0 : e.fetchPolicy) || (null === (t = this.client.defaultOptions.watchQuery) || void 0 === t ? void 0 : t.fetchPolicy) || "cache-first"
        }, e.prototype.onCompleted = function(e) {}, e.prototype.onError = function(e) {}, e.prototype.useObservableQuery = function() {
          var e = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || this.client.watchQuery(this.getObsQueryOptions());
          this.obsQueryFields = (0, o.useMemo)((function() {
            return {
              refetch: e.refetch.bind(e),
              reobserve: e.reobserve.bind(e),
              fetchMore: e.fetchMore.bind(e),
              updateQuery: e.updateQuery.bind(e),
              startPolling: e.startPolling.bind(e),
              stopPolling: e.stopPolling.bind(e),
              subscribeToMore: e.subscribeToMore.bind(e)
            }
          }), [e]);
          var t = !(!1 === this.queryHookOptions.ssr || this.queryHookOptions.skip);
          return this.renderPromises && t && (this.renderPromises.registerSSRObservable(e), e.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(e)), e
        }, e.prototype.setResult = function(e) {
          var t = this.result;
          t && t.data && (this.previousData = t.data), this.result = e, this.forceUpdate(), this.handleErrorOrCompleted(e)
        }, e.prototype.handleErrorOrCompleted = function(e) {
          var t = this;
          if (!e.loading) {
            var r = this.toApolloError(e);
            Promise.resolve().then((function() {
              r ? t.onError(r) : e.data && t.onCompleted(e.data)
            })).catch((function(e) {
              __DEV__ && i.V1.warn(e)
            }))
          }
        }, e.prototype.toApolloError = function(e) {
          return (0, w.E)(e.errors) ? new h.K4({
            graphQLErrors: e.errors
          }) : e.error
        }, e.prototype.getCurrentResult = function() {
          return this.result || this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult()), this.result
        }, e.prototype.toQueryResult = function(e) {
          var t = this.toQueryResultCache.get(e);
          if (t) return t;
          var r = e.data,
            i = (e.partial, (0, n.Tt)(e, ["data", "partial"]));
          return this.toQueryResultCache.set(e, t = (0, n.Cl)((0, n.Cl)((0, n.Cl)({
            data: r
          }, i), this.obsQueryFields), {
            client: this.client,
            observable: this.observable,
            variables: this.observable.variables,
            called: !this.queryHookOptions.skip,
            previousData: this.previousData
          })), !t.error && (0, w.E)(e.errors) && (t.error = new h.K4({
            graphQLErrors: e.errors
          })), t
        }, e.prototype.unsafeHandlePartialRefetch = function(e) {
          !e.partial || !this.queryHookOptions.partialRefetch || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === this.observable.options.fetchPolicy || (Object.assign(e, {
            loading: !0,
            networkStatus: v.p.refetch
          }), this.observable.refetch())
        }, e
      }()
    },
    9409: (e, t, r) => {
      "use strict";
      r.d(t, {
        q: () => i
      });
      var n = r(1403);

      function i(e) {
        var t = e(),
          r = (0, n.useState)(t)[1];
        return (0, n.useEffect)((function() {
          var n = e();
          if (t === n) return e.onNextChange(r);
          r(n)
        }), [t]), t
      }
    },
    5365: (e, t, r) => {
      "use strict";
      r.d(t, {
        D$: () => s,
        KG: () => n
      });
      var n, i = r(7042);
      ! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(n || (n = {}));
      var o = new Map;

      function a(e) {
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

      function s(e, t) {
        var r = function(e) {
            var t, r, a = o.get(e);
            if (a) return a;
            __DEV__ ? (0, i.V1)(!!e && !!e.kind, "Argument of ".concat(e, " passed to parser was not a valid GraphQL ") + "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, i.V1)(!!e && !!e.kind, 33);
            for (var s = [], u = [], c = [], l = [], f = 0, d = e.definitions; f < d.length; f++) {
              var p = d[f];
              if ("FragmentDefinition" !== p.kind) {
                if ("OperationDefinition" === p.kind) switch (p.operation) {
                  case "query":
                    u.push(p);
                    break;
                  case "mutation":
                    c.push(p);
                    break;
                  case "subscription":
                    l.push(p)
                }
              } else s.push(p)
            }
            __DEV__ ? (0, i.V1)(!s.length || u.length || c.length || l.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, i.V1)(!s.length || u.length || c.length || l.length, 34), __DEV__ ? (0, i.V1)(u.length + c.length + l.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + "".concat(e, " had ").concat(u.length, " queries, ").concat(l.length, " ") + "subscriptions and ".concat(c.length, " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : (0, i.V1)(u.length + c.length + l.length <= 1, 35), r = u.length ? n.Query : n.Mutation, u.length || c.length || (r = n.Subscription);
            var h = u.length ? u : c.length ? c : l;
            __DEV__ ? (0, i.V1)(1 === h.length, "react-apollo only supports one definition per HOC. ".concat(e, " had ") + "".concat(h.length, " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : (0, i.V1)(1 === h.length, 36);
            var v = h[0];
            t = v.variableDefinitions || [];
            var y = {
              name: v.name && "Name" === v.name.kind ? v.name.value : "data",
              type: r,
              variables: t
            };
            return o.set(e, y), y
          }(e),
          s = a(t),
          u = a(r.type);
        __DEV__ ? (0, i.V1)(r.type === t, "Running a ".concat(s, " requires a graphql ") + "".concat(s, ", but a ").concat(u, " was used instead.")) : (0, i.V1)(r.type === t, 37)
      }
    },
    8226: (e, t, r) => {
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
    4361: (e, t, r) => {
      "use strict";
      r.d(t, {
        En: () => o,
        JR: () => l,
        et: () => i,
        ol: () => a,
        uJ: () => s
      });
      var n = r(7042),
        i = "function" == typeof WeakMap && "ReactNative" !== (0, n.no)((function() {
          return navigator.product
        })),
        o = "function" == typeof WeakSet,
        a = "function" == typeof Symbol && "function" == typeof Symbol.for,
        s = a && Symbol.asyncIterator,
        u = "function" == typeof(0, n.no)((function() {
          return window.document.createElement
        })),
        c = (0, n.no)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        l = u && !c
    },
    8873: (e, t, r) => {
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
    3851: (e, t, r) => {
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
    6443: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nw: () => u,
        ST: () => a,
        YX: () => s,
        bd: () => c
      });
      var n = r(9554),
        i = r(8226),
        o = r(7136);

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
    8828: (e, t, r) => {
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
    9987: (e, t, r) => {
      "use strict";
      r.d(t, {
        G: () => i
      }), r(7042);
      var n = r(9554);

      function i(e) {
        return __DEV__ && (t = e, (r = new Set([t])).forEach((function(e) {
          (0, n.U)(e) && function(e) {
            if (__DEV__ && !Object.isFrozen(e)) try {
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
    7136: (e, t, r) => {
      "use strict";
      r.d(t, {
        D9: () => a,
        IM: () => s,
        ZI: () => c
      });
      var n = r(226),
        i = r(9554),
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
    5642: (e, t, r) => {
      "use strict";
      r.d(t, {
        l: () => o
      });
      var n = r(226),
        i = r(3851);

      function o(e, t) {
        return (0, i.o)(e, t, t.variables && {
          variables: (0, n.Cl)((0, n.Cl)({}, e && e.variables), t.variables)
        })
      }
    },
    9554: (e, t, r) => {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e
      }
      r.d(t, {
        U: () => n
      })
    },
    7042: (e, t, r) => {
      "use strict";
      r.d(t, {
        zU: () => s,
        V1: () => u,
        no: () => d
      });
      var n = r(226),
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
      var c = ["debug", "log", "warn", "error", "silent"],
        l = c.indexOf("log");

      function f(e) {
        return function() {
          if (c.indexOf(e) >= l) return (console[e] || console.log).apply(console, arguments)
        }
      }

      function d(e) {
        try {
          return e()
        } catch (e) {}
      }! function(e) {
        e.debug = f("debug"), e.log = f("log"), e.warn = f("warn"), e.error = f("error")
      }(u || (u = {}));
      const p = d((function() {
        return globalThis
      })) || d((function() {
        return window
      })) || d((function() {
        return self
      })) || d((function() {
        return global
      })) || d((function() {
        return d.constructor("return this")()
      }));
      var h = "__",
        v = [h, h].join("DEV");
      const y = function() {
        try {
          return Boolean(__DEV__)
        } catch (e) {
          return Object.defineProperty(p, v, {
            value: "production" !== d((function() {
              return "production"
            })),
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), p[v]
        }
      }();
      var m = r(98);

      function b(e) {
        try {
          return e()
        } catch (e) {}
      }
      var g = b((function() {
          return globalThis
        })) || b((function() {
          return window
        })) || b((function() {
          return self
        })) || b((function() {
          return global
        })) || b((function() {
          return b.constructor("return this")()
        })),
        w = !1;
      !g || b((function() {
        return "production"
      })) || b((function() {
        return m
      })) || (Object.defineProperty(g, "process", {
        value: {
          env: {
            NODE_ENV: "production"
          }
        },
        configurable: !0,
        enumerable: !1,
        writable: !0
      }), w = !0), r(5617), r(6862), Symbol.toStringTag, w && (delete g.process, w = !1), __DEV__ ? u("boolean" == typeof y, y) : u("boolean" == typeof y, 39)
    },
    104: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => o,
        d8: () => a,
        f2: () => s
      });
      var n = r(7042),
        i = r(3654);

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
              __DEV__ ? (0, n.V1)(r && 1 === r.length, "Incorrect number of arguments for the @".concat(i, " directive.")) : (0, n.V1)(r && 1 === r.length, 41);
              var o = r[0];
              __DEV__ ? (0, n.V1)(o.name && "if" === o.name.value, "Invalid argument for the @".concat(i, " directive.")) : (0, n.V1)(o.name && "if" === o.name.value, 42);
              var a = o.value;
              __DEV__ ? (0, n.V1)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : (0, n.V1)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 43), t.push({
                directive: e,
                ifArgument: o
              })
            }
          })), t
        }(r).every((function(e) {
          var r = e.directive,
            i = e.ifArgument,
            o = !1;
          return "Variable" === i.value.kind ? (o = t && t[i.value.name.value], __DEV__ ? (0, n.V1)(void 0 !== o, "Invalid variable referenced in @".concat(r.name.value, " directive.")) : (0, n.V1)(void 0 !== o, 40)) : o = i.value.value, "skip" === r.name.value ? !o : o
        }))
      }

      function a(e, t, r) {
        var n = new Set(e),
          o = n.size;
        return (0, i.YR)(t, {
          Directive: function(e) {
            if (n.delete(e.name.value) && (!r || !n.size)) return i.sP
          }
        }), r ? !n.size : n.size < o
      }

      function s(e) {
        return e && a(["client", "export"], e, !0)
      }
    },
    3477: (e, t, r) => {
      "use strict";
      r.d(t, {
        HQ: () => s,
        JG: () => a,
        ct: () => o
      });
      var n = r(226),
        i = r(7042);

      function o(e, t) {
        var r = t,
          o = [];
        return e.definitions.forEach((function(e) {
          if ("OperationDefinition" === e.kind) throw __DEV__ ? new i.zU("Found a ".concat(e.operation, " operation").concat(e.name ? " named '".concat(e.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new i.zU(44);
          "FragmentDefinition" === e.kind && o.push(e)
        })), void 0 === r && (__DEV__ ? (0, i.V1)(1 === o.length, "Found ".concat(o.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : (0, i.V1)(1 === o.length, 45), r = o[0].name.value), (0, n.Cl)((0, n.Cl)({}, e), {
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

      function a(e) {
        void 0 === e && (e = []);
        var t = {};
        return e.forEach((function(e) {
          t[e.name.value] = e
        })), t
      }

      function s(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var r = e.name.value;
            if ("function" == typeof t) return t(r);
            var n = t && t[r];
            return __DEV__ ? (0, i.V1)(n, "No fragment named ".concat(r)) : (0, i.V1)(n, 46), n || null;
          default:
            return null
        }
      }
    },
    8810: (e, t, r) => {
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
      var n = r(7042),
        i = r(7024);

      function o(e) {
        __DEV__ ? (0, n.V1)(e && "Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : (0, n.V1)(e && "Document" === e.kind, 47);
        var t = e.definitions.filter((function(e) {
          return "FragmentDefinition" !== e.kind
        })).map((function(e) {
          if ("OperationDefinition" !== e.kind) throw __DEV__ ? new n.zU('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new n.zU(48);
          return e
        }));
        return __DEV__ ? (0, n.V1)(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : (0, n.V1)(t.length <= 1, 49), e
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
        return __DEV__ ? (0, n.V1)(t && "query" === t.operation, "Must contain a query definition.") : (0, n.V1)(t && "query" === t.operation, 50), t
      }

      function l(e) {
        __DEV__ ? (0, n.V1)("Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : (0, n.V1)("Document" === e.kind, 51), __DEV__ ? (0, n.V1)(e.definitions.length <= 1, "Fragment must have exactly one definition.") : (0, n.V1)(e.definitions.length <= 1, 52);
        var t = e.definitions[0];
        return __DEV__ ? (0, n.V1)("FragmentDefinition" === t.kind, "Must be a fragment definition.") : (0, n.V1)("FragmentDefinition" === t.kind, 53), t
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
        throw __DEV__ ? new n.zU("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new n.zU(54)
      }

      function d(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return r && r.length && r.forEach((function(e) {
          e.defaultValue && (0, i.J)(t, e.variable.name, e.defaultValue)
        })), t
      }
    },
    7024: (e, t, r) => {
      "use strict";
      r.d(t, {
        A_: () => s,
        D$: () => m,
        Ii: () => l,
        J: () => c,
        Kc: () => u,
        MB: () => v,
        WU: () => a,
        dt: () => b,
        kd: () => g,
        o5: () => d,
        ue: () => y
      });
      var n = r(7042),
        i = r(9554),
        o = r(3477);

      function a(e) {
        return {
          __ref: String(e)
        }
      }

      function s(e) {
        return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
      }

      function u(e) {
        return (0, i.U)(e) && "Document" === e.kind && Array.isArray(e.definitions)
      }

      function c(e, t, r, i) {
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
            return c(o, e.name, e.value, i)
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
          return c(r, t, e, i), r[t.value]
        }));
        else if (function(e) {
            return "EnumValue" === e.kind
          }(r)) e[t.value] = r.value;
        else {
          if (! function(e) {
              return "NullValue" === e.kind
            }(r)) throw __DEV__ ? new n.zU('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new n.zU(55);
          e[t.value] = null
        }
      }

      function l(e, t) {
        var r = null;
        e.directives && (r = {}, e.directives.forEach((function(e) {
          r[e.name.value] = {}, e.arguments && e.arguments.forEach((function(n) {
            var i = n.name,
              o = n.value;
            return c(r[e.name.value], i, o, t)
          }))
        })));
        var n = null;
        return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach((function(e) {
          var r = e.name,
            i = e.value;
          return c(n, r, i, t)
        }))), d(e.name.value, n, r)
      }
      var f = ["connection", "include", "skip", "client", "rest", "export"],
        d = Object.assign((function(e, t, r) {
          if (t && r && r.connection && r.connection.key) {
            if (r.connection.filter && r.connection.filter.length > 0) {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return n.forEach((function(e) {
                i[e] = t[e]
              })), "".concat(r.connection.key, "(").concat(p(i), ")")
            }
            return r.connection.key
          }
          var o = e;
          if (t) {
            var a = p(t);
            o += "(".concat(a, ")")
          }
          return r && Object.keys(r).forEach((function(e) {
            -1 === f.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(p(r[e]), ")") : o += "@".concat(e))
          })), o
        }), {
          setStringify: function(e) {
            var t = p;
            return p = e, t
          }
        }),
        p = function(e) {
          return JSON.stringify(e, h)
        };

      function h(e, t) {
        return (0, i.U)(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce((function(e, r) {
          return e[r] = t[r], e
        }), {})), t
      }

      function v(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return e.arguments.forEach((function(e) {
            var n = e.name,
              i = e.value;
            return c(r, n, i, t)
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
    6896: (e, t, r) => {
      "use strict";
      r.d(t, {
        XY: () => y,
        er: () => w,
        hX: () => b,
        zc: () => g
      });
      var n = r(226),
        i = r(7042),
        o = r(6855),
        a = r(3654),
        s = r(8810),
        u = r(7024),
        c = r(3477),
        l = r(8226),
        f = {
          kind: o.b.FIELD,
          name: {
            kind: o.b.NAME,
            value: "__typename"
          }
        };

      function d(e, t) {
        return !e || e.selectionSet.selections.every((function(e) {
          return e.kind === o.b.FRAGMENT_SPREAD && d(t[e.name.value], t)
        }))
      }

      function p(e) {
        return d((0, s.Vu)(e) || (0, s.E4)(e), (0, c.JG)((0, s.zK)(e))) ? null : e
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

      function v(e, t) {
        for (var r = h(""), s = h(""), u = function(e) {
            for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
              if (!(0, l.c)(n)) {
                if (n.kind === o.b.OPERATION_DEFINITION) return r(n.name && n.name.value);
                if (n.kind === o.b.FRAGMENT_DEFINITION) return s(n.name.value)
              } return __DEV__ && i.V1.error("Could not find operation or fragment"), null
          }, c = 0, f = t.definitions.length - 1; f >= 0; --f) t.definitions[f].kind === o.b.OPERATION_DEFINITION && ++c;
        var d = function(e) {
            var t = new Set,
              r = [];
            return e.forEach((function(e) {
                e.name ? t.add(e.name) : e.test && r.push(e.test)
              })),
              function(e) {
                return t.has(e.name.value) || r.some((function(t) {
                  return t(e)
                }))
              }
          }(e),
          v = e.some((function(e) {
            return e.remove
          })),
          y = function(e) {
            return v && e && e.some(d)
          },
          m = new Map,
          b = !1,
          g = {
            enter: function(e) {
              if (y(e.directives)) return b = !0, null
            }
          },
          w = (0, a.YR)(t, {
            Field: g,
            InlineFragment: g,
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
                if (y(e.directives)) return b = !0, null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                m.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === m.get(JSON.stringify(n)) ? e : c > 0 && e.selectionSet.selections.every((function(e) {
                  return e.kind === o.b.FIELD && "__typename" === e.name.value
                })) ? (s(e.name.value).removed = !0, b = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (d(e)) return b = !0, null
              }
            }
          });
        if (!b) return t;
        var _ = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach((function(t) {
              _(s(t)).transitiveVars.forEach((function(t) {
                e.transitiveVars.add(t)
              }))
            }))), e
          },
          E = new Set;
        w.definitions.forEach((function(e) {
          e.kind === o.b.OPERATION_DEFINITION ? _(r(e.name && e.name.value)).fragmentSpreads.forEach((function(e) {
            E.add(e)
          })) : e.kind !== o.b.FRAGMENT_DEFINITION || 0 !== c || s(e.name.value).removed || E.add(e.name.value)
        })), E.forEach((function(e) {
          _(s(e)).fragmentSpreads.forEach((function(e) {
            E.add(e)
          }))
        }));
        var O = {
          enter: function(e) {
            if (t = e.name.value, !E.has(t) || s(t).removed) return null;
            var t
          }
        };
        return p((0, a.YR)(w, {
          FragmentSpread: O,
          FragmentDefinition: O,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var t = _(r(e.name && e.name.value)).transitiveVars;
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
      var y = Object.assign((function(e) {
          return (0, a.YR)(e, {
            SelectionSet: {
              enter: function(e, t, r) {
                if (!r || r.kind !== o.b.OPERATION_DEFINITION) {
                  var i = e.selections;
                  if (i && !i.some((function(e) {
                      return (0, u.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                    }))) {
                    var a = r;
                    if (!((0, u.dt)(a) && a.directives && a.directives.some((function(e) {
                        return "export" === e.name.value
                      })))) return (0, n.Cl)((0, n.Cl)({}, e), {
                      selections: (0, n.fX)((0, n.fX)([], i, !0), [f], !1)
                    })
                  }
                }
              }
            }
          })
        }), {
          added: function(e) {
            return e === f
          }
        }),
        m = {
          test: function(e) {
            var t = "connection" === e.name.value;
            return t && (e.arguments && e.arguments.some((function(e) {
              return "key" === e.name.value
            })) || __DEV__ && i.V1.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), t
          }
        };

      function b(e) {
        return v([m], (0, s.sw)(e))
      }

      function g(e) {
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

      function w(e) {
        return (0, s.sw)(e), v([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }
    },
    6666: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => c
      });
      let n = null;
      const i = {};
      let o = 1;

      function a(e) {
        try {
          return e()
        } catch (e) {}
      }
      const s = "@wry/context:Slot",
        u = a((() => globalThis)) || a((() => global)) || Object.create(null),
        c = u[s] || Array[s] || function(e) {
          try {
            Object.defineProperty(u, s, {
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
            this.id = ["slot", o++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = n; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === i) break;
                return e !== n && (n.slots[this.id] = t), !0
              } return n && (n.slots[this.id] = i), !1
          }
          getValue() {
            if (this.hasValue()) return n.slots[this.id]
          }
          withValue(e, t, r, i) {
            const o = {
                __proto__: null,
                [this.id]: e
              },
              a = n;
            n = {
              parent: a,
              slots: o
            };
            try {
              return t.apply(i, r)
            } finally {
              n = a
            }
          }
          static bind(e) {
            const t = n;
            return function() {
              const r = n;
              try {
                return n = t, e.apply(this, arguments)
              } finally {
                n = r
              }
            }
          }
          static noContext(e, t, r) {
            if (!n) return e.apply(r, t); {
              const i = n;
              try {
                return n = null, e.apply(r, t)
              } finally {
                n = i
              }
            }
          }
        }),
        {
          bind: l,
          noContext: f
        } = c
    },
    4206: (e, t, r) => {
      "use strict";
      r.d(t, {
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

      function u(e, t) {
        if (e === t) return !0;
        const r = n.call(e);
        if (r !== n.call(t)) return !1;
        switch (r) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]": {
            if (d(e, t)) return !0;
            const r = c(e),
              n = c(t),
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
            }(r, f)
          }
        }
        return !1
      }

      function c(e) {
        return Object.keys(e).filter(l, e)
      }

      function l(e) {
        return void 0 !== this[e]
      }
      const f = "{ [native code] }";

      function d(e, t) {
        let r = a.get(e);
        if (r) {
          if (r.has(t)) return !0
        } else a.set(e, r = new Set);
        return r.add(t), !1
      }
    },
    4353: (e, t, r) => {
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
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return this.lookupArray(t)
        }
        lookupArray(e) {
          let t = this;
          return i.call(e, (e => t = t.getChildTrie(e))), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
        }
        peek() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return this.peekArray(t)
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            const n = this.weakness && u(e[r]) ? t.weak : t.strong;
            t = n && n.get(e[r])
          }
          return t && t.data
        }
        getChildTrie(e) {
          const t = this.weakness && u(e) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map);
          let r = t.get(e);
          return r || t.set(e, r = new s(this.weakness, this.makeData)), r
        }
      }

      function u(e) {
        switch (typeof e) {
          case "object":
            if (null === e) break;
          case "function":
            return !0
        }
        return !1
      }
    },
    9961: (e, t, r) => {
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
    4984: (e, t, r) => {
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

      function d(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw new TypeError(r + " is not a function");
          return r
        }
      }

      function p(e) {
        var t = e.constructor;
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : O
      }

      function h(e) {
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
            return new(p(this))((function(r) {
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
            return new(p(this))((function(r) {
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
            var r = p(this),
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
            var i = p(this);
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
            var r = p(this);
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
            var i = d(t, l);
            if (i) {
              var o = i.call(t);
              if (Object(o) !== o) throw new TypeError(o + " is not an object");
              return h(o) && o.constructor === r ? o : new r((function(e) {
                return o.subscribe(e)
              }))
            }
            if (s("iterator") && (i = d(t, c))) return new r((function(e) {
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
    },
    5617: (e, t, r) => {
      "use strict";

      function n(e, t) {
        if (!Boolean(e)) throw new Error(t)
      }
      r.d(t, {
        U: () => n
      })
    },
    6862: (e, t, r) => {
      "use strict";
      r.d(t, {
        N: () => o
      });
      const n = 10,
        i = 2;

      function o(e) {
        return a(e, [])
      }

      function a(e, t) {
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
                if (t !== e) return "string" == typeof t ? t : a(t, r)
              } else if (Array.isArray(e)) return function(e, t) {
                if (0 === e.length) return "[]";
                if (t.length > i) return "[Array]";
                const r = Math.min(n, e.length),
                  o = e.length - r,
                  s = [];
                for (let n = 0; n < r; ++n) s.push(a(e[n], t));
                return 1 === o ? s.push("... 1 more item") : o > 1 && s.push(`... ${o} more items`), "[" + s.join(", ") + "]"
              }(e, r);
              return function(e, t) {
                const r = Object.entries(e);
                if (0 === r.length) return "{}";
                if (t.length > i) return "[" + function(e) {
                  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                  if ("Object" === t && "function" == typeof e.constructor) {
                    const t = e.constructor.name;
                    if ("string" == typeof t && "" !== t) return t
                  }
                  return t
                }(e) + "]";
                const n = r.map((([e, r]) => e + ": " + a(r, t)));
                return "{ " + n.join(", ") + " }"
              }(e, r)
            }(e, t);
          default:
            return String(e)
        }
      }
    },
    6855: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
          b: () => n
        }),
        function(e) {
          e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
        }(n || (n = {}))
    },
    2235: (e, t, r) => {
      "use strict";

      function n(e) {
        return 9 === e || 32 === e
      }
      r.d(t, {
        y: () => u
      });
      const i = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

      function o(e) {
        return a[e.charCodeAt(0)]
      }
      const a = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];
      var s = r(3654);

      function u(e) {
        return (0, s.YR)(e, c)
      }
      const c = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => l(e.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(e) {
            const t = d("(", l(e.variableDefinitions, ", "), ")"),
              r = l([e.operation, l([e.name, t]), l(e.directives, " ")], " ");
            return ("query" === r ? "" : r + " ") + e.selectionSet
          }
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: r,
            directives: n
          }) => e + ": " + t + d(" = ", r) + d(" ", l(n, " "))
        },
        SelectionSet: {
          leave: ({
            selections: e
          }) => f(e)
        },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: r,
            directives: n,
            selectionSet: i
          }) {
            const o = d("", e, ": ") + t;
            let a = o + d("(", l(r, ", "), ")");
            return a.length > 80 && (a = o + d("(\n", p(l(r, "\n")), "\n)")), l([a, l(n, " "), i], " ")
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
          }) => "..." + e + d(" ", l(t, " "))
        },
        InlineFragment: {
          leave: ({
            typeCondition: e,
            directives: t,
            selectionSet: r
          }) => l(["...", d("on ", e), l(t, " "), r], " ")
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: r,
            directives: n,
            selectionSet: i
          }) => `fragment ${e}${d("(",l(r,", "),")")} on ${t} ${d("",l(n," ")," ")}` + i
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
          }) => t ? function(e, t) {
            const r = e.replace(/"""/g, '\\"""'),
              i = r.split(/\r\n|[\n\r]/g),
              o = 1 === i.length,
              a = i.length > 1 && i.slice(1).every((e => 0 === e.length || n(e.charCodeAt(0)))),
              s = r.endsWith('\\"""'),
              u = e.endsWith('"') && !s,
              c = e.endsWith("\\"),
              l = u || c,
              f = !o || e.length > 70 || l || a || s;
            let d = "";
            const p = o && n(e.charCodeAt(0));
            return (f && !p || a) && (d += "\n"), d += r, (f || l) && (d += "\n"), '"""' + d + '"""'
          }(e) : `"${e.replace(i,o)}"`
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
          }) => "[" + l(e, ", ") + "]"
        },
        ObjectValue: {
          leave: ({
            fields: e
          }) => "{" + l(e, ", ") + "}"
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
          }) => "@" + e + d("(", l(t, ", "), ")")
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
          }) => d("", e, "\n") + l(["schema", l(t, " "), f(r)], " ")
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
          }) => d("", e, "\n") + l(["scalar", t, l(r, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          }) => d("", e, "\n") + l(["type", t, d("implements ", l(r, " & ")), l(n, " "), f(i)], " ")
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            type: n,
            directives: i
          }) => d("", e, "\n") + t + (h(r) ? d("(\n", p(l(r, "\n")), "\n)") : d("(", l(r, ", "), ")")) + ": " + n + d(" ", l(i, " "))
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: r,
            defaultValue: n,
            directives: i
          }) => d("", e, "\n") + l([t + ": " + r, d("= ", n), l(i, " ")], " ")
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          }) => d("", e, "\n") + l(["interface", t, d("implements ", l(r, " & ")), l(n, " "), f(i)], " ")
        },
        UnionTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            types: n
          }) => d("", e, "\n") + l(["union", t, l(r, " "), d("= ", l(n, " | "))], " ")
        },
        EnumTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            values: n
          }) => d("", e, "\n") + l(["enum", t, l(r, " "), f(n)], " ")
        },
        EnumValueDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r
          }) => d("", e, "\n") + l([t, l(r, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: r,
            fields: n
          }) => d("", e, "\n") + l(["input", t, l(r, " "), f(n)], " ")
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            repeatable: n,
            locations: i
          }) => d("", e, "\n") + "directive @" + t + (h(r) ? d("(\n", p(l(r, "\n")), "\n)") : d("(", l(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + l(i, " | ")
        },
        SchemaExtension: {
          leave: ({
            directives: e,
            operationTypes: t
          }) => l(["extend schema", l(e, " "), f(t)], " ")
        },
        ScalarTypeExtension: {
          leave: ({
            name: e,
            directives: t
          }) => l(["extend scalar", e, l(t, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: r,
            fields: n
          }) => l(["extend type", e, d("implements ", l(t, " & ")), l(r, " "), f(n)], " ")
        },
        InterfaceTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: r,
            fields: n
          }) => l(["extend interface", e, d("implements ", l(t, " & ")), l(r, " "), f(n)], " ")
        },
        UnionTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            types: r
          }) => l(["extend union", e, l(t, " "), d("= ", l(r, " | "))], " ")
        },
        EnumTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            values: r
          }) => l(["extend enum", e, l(t, " "), f(r)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            fields: r
          }) => l(["extend input", e, l(t, " "), f(r)], " ")
        }
      };

      function l(e, t = "") {
        var r;
        return null !== (r = null == e ? void 0 : e.filter((e => e)).join(t)) && void 0 !== r ? r : ""
      }

      function f(e) {
        return d("{\n", p(l(e, "\n")), "\n}")
      }

      function d(e, t, r = "") {
        return null != t && "" !== t ? e + t + r : ""
      }

      function p(e) {
        return d("  ", e.replace(/\n/g, "\n  "))
      }

      function h(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some((e => e.includes("\n")))) && void 0 !== t && t
      }
    },
    3654: (e, t, r) => {
      "use strict";
      r.d(t, {
        sP: () => l,
        YR: () => f
      });
      var n = r(5617),
        i = r(6862);
      Symbol.toStringTag, Symbol.toStringTag;
      const o = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
          VariableDefinition: ["variable", "type", "defaultValue", "directives"],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
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
          InputObjectTypeExtension: ["name", "directives", "fields"]
        },
        a = new Set(Object.keys(o));

      function s(e) {
        const t = null == e ? void 0 : e.kind;
        return "string" == typeof t && a.has(t)
      }
      var u;
      ! function(e) {
        e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
      }(u || (u = {}));
      var c = r(6855);
      const l = Object.freeze({});

      function f(e, t, r = o) {
        const a = new Map;
        for (const e of Object.values(c.b)) a.set(e, d(t, e));
        let u, f, p, h = Array.isArray(e),
          v = [e],
          y = -1,
          m = [],
          b = e;
        const g = [],
          w = [];
        do {
          y++;
          const e = y === v.length,
            o = e && 0 !== m.length;
          if (e) {
            if (f = 0 === w.length ? void 0 : g[g.length - 1], b = p, p = w.pop(), o)
              if (h) {
                b = b.slice();
                let e = 0;
                for (const [t, r] of m) {
                  const n = t - e;
                  null === r ? (b.splice(n, 1), e++) : b[n] = r
                }
              } else {
                b = Object.defineProperties({}, Object.getOwnPropertyDescriptors(b));
                for (const [e, t] of m) b[e] = t
              } y = u.index, v = u.keys, m = u.edits, h = u.inArray, u = u.prev
          } else if (p) {
            if (f = h ? y : v[y], b = p[f], null == b) continue;
            g.push(f)
          }
          let c;
          if (!Array.isArray(b)) {
            var _, E;
            s(b) || (0, n.U)(!1, `Invalid AST Node: ${(0,i.N)(b)}.`);
            const r = e ? null === (_ = a.get(b.kind)) || void 0 === _ ? void 0 : _.leave : null === (E = a.get(b.kind)) || void 0 === E ? void 0 : E.enter;
            if (c = null == r ? void 0 : r.call(t, b, f, p, g, w), c === l) break;
            if (!1 === c) {
              if (!e) {
                g.pop();
                continue
              }
            } else if (void 0 !== c && (m.push([f, c]), !e)) {
              if (!s(c)) {
                g.pop();
                continue
              }
              b = c
            }
          }
          var O;
          void 0 === c && o && m.push([f, b]), e ? g.pop() : (u = {
            inArray: h,
            index: y,
            keys: v,
            edits: m,
            prev: u
          }, h = Array.isArray(b), v = h ? b : null !== (O = r[b.kind]) && void 0 !== O ? O : [], y = -1, m = [], p && w.push(p), p = b)
        } while (void 0 !== u);
        return 0 !== m.length ? m[m.length - 1][1] : e
      }

      function d(e, t) {
        const r = e[t];
        return "object" == typeof r ? r : "function" == typeof r ? {
          enter: r,
          leave: void 0
        } : {
          enter: e.enter,
          leave: e.leave
        }
      }
    }
  }
]);