try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a7140f41-eec8-47d0-b0b6-0caee6032f3e", t._sentryDebugIdIdentifier = "sentry-dbid-a7140f41-eec8-47d0-b0b6-0caee6032f3e")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5073], {
    23058(t) {
      function e(t, e) {
        return Object.keys(e).forEach(function(n) {
          "default" === n || "__esModule" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
              return e[n]
            }
          })
        }), t
      }

      function n(t, e, n, r) {
        Object.defineProperty(t, e, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0
        })
      }
      var r = {};
      n(r, "ONETRUST_LOADED_EVENT", () => i), n(r, "WRAPPER_CALLED_EVENT", () => a), n(r, "CONSENT_CHANGED_EVENT", () => u), n(r, "init", () => s);
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        u = "CONSENT_CHANGED_EVENT";
      let c = !0;

      function s(t) {
        const e = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), o && (n.nonce = o), !t) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", t), e.insertBefore(n, e.firstChild), window.OptanonWrapper = function() {
          c && (c = !1, window.dispatchEvent(new CustomEvent(i, {
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
      var f = {};
      n(f, "NoChoiceTransactionType", () => d), n(f, "ConfirmedTransactionType", () => l), n(f, "canStoreCookie", () => v);
      const d = "NO_CHOICE",
        l = "CONFIRMED";

      function v(t, e = null) {
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          r = n.Groups.find(e => e.Cookies.some(e => e.Name === t));
        if (!r) {
          const n = `Unable to find ${t} in any OneTrust category. Therefore, we won't store the cookie`;
          return e && e.log(n), !1
        }
        if ("always active" === r.Status) return !0;
        const o = n.ConsentIntegrationData?.consentPayload?.purposes?.find(t => t.Id === r.PurposeId);
        return o?.TransactionType === l
      }
      e(t.exports, r), e(t.exports, f)
    },
    7352(t, e, n) {
      "use strict";
      n.d(e, {
        A: () => o
      });
      var r = Math.max;
      const o = function(t, e, n) {
        return e = r(void 0 === e ? t.length - 1 : e, 0),
          function() {
            for (var o = arguments, i = -1, a = r(o.length - e, 0), u = Array(a); ++i < a;) u[i] = o[e + i];
            i = -1;
            for (var c = Array(e + 1); ++i < e;) c[i] = o[i];
            return c[e] = n(u),
              function(t, e, n) {
                switch (n.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, n[0]);
                  case 2:
                    return t.call(e, n[0], n[1]);
                  case 3:
                    return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
              }(t, this, c)
          }
      }
    },
    91847(t, e, n) {
      "use strict";
      n.d(e, {
        A: () => u
      });
      var r = n(63406),
        o = n(23159);
      const i = r.A ? function(t, e) {
        return (0, r.A)(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: (n = e, function() {
            return n
          }),
          writable: !0
        });
        var n
      } : o.A;
      var a = Date.now;
      const u = (c = i, s = 0, f = 0, function() {
        var t = a(),
          e = 16 - (t - f);
        if (f = t, e > 0) {
          if (++s >= 800) return arguments[0]
        } else s = 0;
        return c.apply(void 0, arguments)
      });
      var c, s, f
    },
    79098(t, e, n) {
      "use strict";
      n.d(e, {
        A: () => y
      });
      var r = n(45862),
        o = n(34336);
      const i = function() {
        return o.A.Date.now()
      };
      var a = /\s/;
      var u = /^\s+/;
      const c = function(t) {
        return t ? t.slice(0, function(t) {
          for (var e = t.length; e-- && a.test(t.charAt(e)););
          return e
        }(t) + 1).replace(u, "") : t
      };
      var s = n(80617),
        f = /^[-+]0x[0-9a-f]+$/i,
        d = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        v = parseInt;
      const p = function(t) {
        if ("number" == typeof t) return t;
        if ((0, s.A)(t)) return NaN;
        if ((0, r.A)(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = (0, r.A)(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = c(t);
        var n = d.test(t);
        return n || l.test(t) ? v(t.slice(2), n ? 2 : 8) : f.test(t) ? NaN : +t
      };
      var b = Math.max,
        A = Math.min;
      const y = function(t, e, n) {
        var o, a, u, c, s, f, d = 0,
          l = !1,
          v = !1,
          y = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function w(e) {
          var n = o,
            r = a;
          return o = a = void 0, d = e, c = t.apply(r, n)
        }

        function g(t) {
          var n = t - f;
          return void 0 === f || n >= e || n < 0 || v && t - d >= u
        }

        function E() {
          var t = i();
          if (g(t)) return h(t);
          s = setTimeout(E, function(t) {
            var n = e - (t - f);
            return v ? A(n, u - (t - d)) : n
          }(t))
        }

        function h(t) {
          return s = void 0, y && o ? w(t) : (o = a = void 0, c)
        }

        function T() {
          var t = i(),
            n = g(t);
          if (o = arguments, a = this, f = t, n) {
            if (void 0 === s) return function(t) {
              return d = t, s = setTimeout(E, e), l ? w(t) : c
            }(f);
            if (v) return clearTimeout(s), s = setTimeout(E, e), w(f)
          }
          return void 0 === s && (s = setTimeout(E, e)), c
        }
        return e = p(e) || 0, (0, r.A)(n) && (l = !!n.leading, u = (v = "maxWait" in n) ? b(p(n.maxWait) || 0, e) : u, y = "trailing" in n ? !!n.trailing : y), T.cancel = function() {
          void 0 !== s && clearTimeout(s), d = 0, o = f = a = s = void 0
        }, T.flush = function() {
          return void 0 === s ? c : h(i())
        }, T
      }
    },
    58634(t, e, n) {
      "use strict";
      var r = n(86204),
        o = n(26670),
        i = n(96097),
        a = Function.prototype,
        u = Object.prototype,
        c = a.toString,
        s = u.hasOwnProperty,
        f = c.call(Object);
      n.d(e, ["A", 0, function(t) {
        if (!(0, i.A)(t) || "[object Object]" != (0, r.A)(t)) return !1;
        var e = (0, o.A)(t);
        if (null === e) return !0;
        var n = s.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == f
      }])
    },
    40415(t, e, n) {
      "use strict";
      n.d(e, {
        A: () => M
      });
      var r = n(6461),
        o = n(17367),
        i = n(47507);
      const a = function(t, e, n) {
        (void 0 !== n && !(0, i.A)(t[e], n) || void 0 === n && !(e in t)) && (0, o.A)(t, e, n)
      };
      var u = n(55481),
        c = n(15545),
        s = n(93870),
        f = n(24900),
        d = n(54746),
        l = n(48348),
        v = n(6700),
        p = n(99651),
        b = n(96097);
      var A = n(7269),
        y = n(78709),
        w = n(45862),
        g = n(58634),
        E = n(10312);
      const h = function(t, e) {
        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
      };
      var T = n(57502),
        m = n(62538);
      const _ = function(t, e, n, r, o, i, u) {
          var _, O = h(t, n),
            N = h(e, n),
            C = u.get(N);
          if (C) a(t, n, C);
          else {
            var D = i ? i(O, N, n + "", t, e, u) : void 0,
              k = void 0 === D;
            if (k) {
              var M = (0, v.A)(N),
                S = !M && (0, A.A)(N),
                j = !M && !S && (0, E.A)(N);
              D = N, M || S || j ? (0, v.A)(O) ? D = O : (_ = O, (0, b.A)(_) && (0, p.A)(_) ? D = (0, f.A)(O) : S ? (k = !1, D = (0, c.A)(N, !0)) : j ? (k = !1, D = (0, s.A)(N, !0)) : D = []) : (0, g.A)(N) || (0, l.A)(N) ? (D = O, (0, l.A)(O) ? D = function(t) {
                return (0, T.A)(t, (0, m.A)(t))
              }(O) : (0, w.A)(O) && !(0, y.A)(O) || (D = (0, d.A)(N))) : k = !1
            }
            k && (u.set(N, D), o(D, N, r, i, u), u.delete(N)), a(t, n, D)
          }
        },
        O = function t(e, n, o, i, c) {
          e !== n && (0, u.A)(n, function(u, s) {
            if (c || (c = new r.A), (0, w.A)(u)) _(e, n, s, o, t, i, c);
            else {
              var f = i ? i(h(e, s), u, s + "", e, n, c) : void 0;
              void 0 === f && (f = u), a(e, s, f)
            }
          }, m.A)
        };
      var N = n(23159),
        C = n(7352),
        D = n(91847);
      var k = n(17266);
      const M = (S = function(t, e, n) {
        O(t, e, n)
      }, j = function(t, e) {
        var n = -1,
          r = e.length,
          o = r > 1 ? e[r - 1] : void 0,
          a = r > 2 ? e[2] : void 0;
        for (o = S.length > 3 && "function" == typeof o ? (r--, o) : void 0, a && function(t, e, n) {
            if (!(0, w.A)(n)) return !1;
            var r = typeof e;
            return !!("number" == r ? (0, p.A)(n) && (0, k.A)(e, n.length) : "string" == r && e in n) && (0, i.A)(n[e], t)
          }(e[0], e[1], a) && (o = r < 3 ? void 0 : o, r = 1), t = Object(t); ++n < r;) {
          var u = e[n];
          u && S(t, u, n)
        }
        return t
      }, (0, D.A)((0, C.A)(j, I, N.A), j + ""));
      var S, j, I
    }
  }
]);