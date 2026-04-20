try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "304825da-bbde-42ef-9c76-bbdc74d9bfb6", e._sentryDebugIdIdentifier = "sentry-dbid-304825da-bbde-42ef-9c76-bbdc74d9bfb6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4060, 6531], {
    6306: e => {
      function t(e, t) {
        return Object.keys(t).forEach(function(n) {
          "default" === n || "__esModule" === n || Object.prototype.hasOwnProperty.call(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        }), e
      }

      function n(e, t, n, r) {
        Object.defineProperty(e, t, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0
        })
      }
      var r = {};
      n(r, "ONETRUST_LOADED_EVENT", () => i), n(r, "WRAPPER_CALLED_EVENT", () => u), n(r, "CONSENT_CHANGED_EVENT", () => a), n(r, "init", () => c);
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        u = "WRAPPER_CALLED_EVENT",
        a = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function c(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), o && (n.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(u, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(a, {
              bubbles: !0
            }))
          })
        }
      }
      var f = {};
      n(f, "NoChoiceTransactionType", () => l), n(f, "ConfirmedTransactionType", () => d), n(f, "canStoreCookie", () => v);
      const l = "NO_CHOICE",
        d = "CONFIRMED",
        p = {
          AlwaysActive: "always active"
        };

      function v(e, t = null) {
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          r = n.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!r) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if (r.Status === p.AlwaysActive) return !0;
        const o = n.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === r.PurposeId);
        return o?.TransactionType === d
      }
      t(e.exports, r), t(e.exports, f)
    },
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        u = Math.max,
        a = Math.min;
      e.exports = function(e, t, n) {
        var s, c, f, l, d, p, v = 0,
          b = !1,
          y = !1,
          w = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var n = s,
            r = c;
          return s = c = void 0, v = t, l = e.apply(r, n)
        }

        function m(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || y && e - v >= f
        }

        function T() {
          var e = o();
          if (m(e)) return E(e);
          d = setTimeout(T, function(e) {
            var n = t - (e - p);
            return y ? a(n, f - (e - v)) : n
          }(e))
        }

        function E(e) {
          return d = void 0, w && s ? h(e) : (s = c = void 0, l)
        }

        function _() {
          var e = o(),
            n = m(e);
          if (s = arguments, c = this, p = e, n) {
            if (void 0 === d) return function(e) {
              return v = e, d = setTimeout(T, t), b ? h(e) : l
            }(p);
            if (y) return clearTimeout(d), d = setTimeout(T, t), h(p)
          }
          return void 0 === d && (d = setTimeout(T, t)), l
        }
        return t = i(t) || 0, r(n) && (b = !!n.leading, f = (y = "maxWait" in n) ? u(i(n.maxWait) || 0, t) : f, w = "trailing" in n ? !!n.trailing : w), _.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, s = p = c = d = void 0
        }, _.flush = function() {
          return void 0 === d ? l : E(o())
        }, _
      }
    },
    10533: (e, t, n) => {
      var r = n(86601);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    10613: (e, t, n) => {
      var r = n(23117);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    22909: (e, t, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        u = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = a.test(e);
        return n || s.test(e) ? c(e.slice(2), n ? 2 : 8) : u.test(e) ? NaN : +e
      }
    },
    28593: (e, t, n) => {
      var r = n(15036);
      e.exports = function() {
        return r.Date.now()
      }
    },
    31454: (e, t, n) => {
      var r = n(49192);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    42295: (e, t, n) => {
      "use strict";
      e.exports = n(69245)
    },
    42649: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function u(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          n = i
        }
      }();
      var a, s = [],
        c = !1,
        f = -1;

      function l() {
        c && a && (c = !1, a.length ? s = a.concat(s) : f = -1, s.length && d())
      }

      function d() {
        if (!c) {
          var e = u(l);
          c = !0;
          for (var t = s.length; t;) {
            for (a = s, s = []; ++f < t;) a && a[f].run();
            f = -1, t = s.length
          }
          a = null, c = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function v() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new p(e, t)), 1 !== s.length || c || u(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    69245: (e, t, n) => {
      "use strict";
      var r = n(71127),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, n) {
        var r, i = {},
          c = null,
          f = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (f = t.ref), t) u.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: f,
          props: i,
          _owner: a.current
        }
      }
      t.Fragment = i, t.jsx = c, t.jsxs = c
    },
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var u = -1, a = n(t((r - e) / (o || 1)), 0), s = Array(a); a--;) s[i ? a : ++u] = e, e += o;
        return s
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    86601: (e, t, n) => {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        u = n(56130),
        a = n(81966);
      e.exports = function(e, t, n, s) {
        if (!u(e)) return e;
        for (var c = -1, f = (t = o(t, e)).length, l = f - 1, d = e; null != d && ++c < f;) {
          var p = a(t[c]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (c != l) {
            var b = d[p];
            void 0 === (v = s ? s(b, p, d) : void 0) && (v = u(b) ? b : i(t[c + 1]) ? [] : {})
          }
          r(d, p, v), d = d[p]
        }
        return e
      }
    },
    87625: (e, t, n) => {
      var r = n(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    95187: (e, t, n) => {
      var r = n(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, n) => {
      "use strict";
      n.d(t, {
        s: () => u,
        t: () => i
      });
      var r = n(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function u(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    98312: (e, t, n) => {
      var r = n(99335)();
      e.exports = r
    },
    99335: (e, t, n) => {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      e.exports = function(e) {
        return function(t, n, u) {
          return u && "number" != typeof u && o(t, n, u) && (n = u = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), u = void 0 === u ? t < n ? 1 : -1 : i(u), r(t, n, u, e)
        }
      }
    }
  }
]);