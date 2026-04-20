try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "864f1a8d-46e4-4efe-aab3-61cc81118359", e._sentryDebugIdIdentifier = "sentry-dbid-864f1a8d-46e4-4efe-aab3-61cc81118359")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1364, 2295, 4399], {
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
      n(r, "ONETRUST_LOADED_EVENT", () => i), n(r, "WRAPPER_CALLED_EVENT", () => a), n(r, "CONSENT_CHANGED_EVENT", () => u), n(r, "init", () => f);
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        u = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function f(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), o && (n.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(u, {
              bubbles: !0
            }))
          })
        }
      }
      var c = {};
      n(c, "NoChoiceTransactionType", () => d), n(c, "ConfirmedTransactionType", () => l), n(c, "canStoreCookie", () => v);
      const d = "NO_CHOICE",
        l = "CONFIRMED",
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
        return o?.TransactionType === l
      }
      t(e.exports, r), t(e.exports, c)
    },
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        u = Math.min;
      e.exports = function(e, t, n) {
        var s, f, c, d, l, p, v = 0,
          y = !1,
          b = !1,
          w = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function _(t) {
          var n = s,
            r = f;
          return s = f = void 0, v = t, d = e.apply(r, n)
        }

        function E(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || b && e - v >= c
        }

        function g() {
          var e = o();
          if (E(e)) return T(e);
          l = setTimeout(g, function(e) {
            var n = t - (e - p);
            return b ? u(n, c - (e - v)) : n
          }(e))
        }

        function T(e) {
          return l = void 0, w && s ? _(e) : (s = f = void 0, d)
        }

        function m() {
          var e = o(),
            n = E(e);
          if (s = arguments, f = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return v = e, l = setTimeout(g, t), y ? _(e) : d
            }(p);
            if (b) return clearTimeout(l), l = setTimeout(g, t), _(p)
          }
          return void 0 === l && (l = setTimeout(g, t)), d
        }
        return t = i(t) || 0, r(n) && (y = !!n.leading, c = (b = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : c, w = "trailing" in n ? !!n.trailing : w), m.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, s = p = f = l = void 0
        }, m.flush = function() {
          return void 0 === l ? d : T(o())
        }, m
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
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = u.test(e);
        return n || s.test(e) ? f(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
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
    69245: (e, t, n) => {
      "use strict";
      var r = n(71127),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, n) {
        var r, i = {},
          f = null,
          c = null;
        for (r in void 0 !== n && (f = "" + n), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: c,
          props: i,
          _owner: u.current
        }
      }
      t.Fragment = i, t.jsx = f, t.jsxs = f
    },
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, u = n(t((r - e) / (o || 1)), 0), s = Array(u); u--;) s[i ? u : ++a] = e, e += o;
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
        a = n(56130),
        u = n(81966);
      e.exports = function(e, t, n, s) {
        if (!a(e)) return e;
        for (var f = -1, c = (t = o(t, e)).length, d = c - 1, l = e; null != l && ++f < c;) {
          var p = u(t[f]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (f != d) {
            var y = l[p];
            void 0 === (v = s ? s(y, p, l) : void 0) && (v = a(y) ? y : i(t[f + 1]) ? [] : {})
          }
          r(l, p, v), l = l[p]
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
        s: () => a,
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

      function a(...e) {
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
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    }
  }
]);