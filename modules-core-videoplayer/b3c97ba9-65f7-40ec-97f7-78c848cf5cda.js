! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3c97ba9-65f7-40ec-97f7-78c848cf5cda", e._sentryDebugIdIdentifier = "sentry-dbid-b3c97ba9-65f7-40ec-97f7-78c848cf5cda")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [688], {
    4511: e => {
      function t(e, t) {
        return Object.keys(t).forEach((function(n) {
          "default" === n || "__esModule" === n || e.hasOwnProperty(n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        })), e
      }

      function n(e, t, n, o) {
        Object.defineProperty(e, t, {
          get: n,
          set: o,
          enumerable: !0,
          configurable: !0
        })
      }
      var o = {};
      n(o, "ONETRUST_LOADED_EVENT", (() => a)), n(o, "WRAPPER_CALLED_EVENT", (() => c)), n(o, "CONSENT_CHANGED_EVENT", (() => i)), n(o, "init", (() => u));
      const r = window.document.currentScript?.nonce,
        a = "ONETRUST_LOADED_EVENT",
        c = "WRAPPER_CALLED_EVENT",
        i = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function u(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), r && (n.nonce = r), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(c, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(i, {
              bubbles: !0
            }))
          }))
        }
      }
      var l = {};
      n(l, "NoChoiceTransactionType", (() => f)), n(l, "ConfirmedTransactionType", (() => d)), n(l, "canStoreCookie", (() => b));
      const f = "NO_CHOICE",
        d = "CONFIRMED",
        p = {
          AlwaysActive: "always active"
        };

      function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          o = n.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!o) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if (o.Status === p.AlwaysActive) return !0;
        const r = n.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === o.PurposeId));
        return r?.TransactionType === d
      }
      t(e.exports, o), t(e.exports, l)
    },
    8322: (e, t, n) => {
      "use strict";
      n.d(t, {
        C6: () => r,
        Cl: () => a,
        Tt: () => c,
        YH: () => s,
        fX: () => u,
        sH: () => i
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, o(e, t)
      };

      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, a.apply(this, arguments)
      };

      function c(e, t) {
        var n = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
        }
        return n
      }

      function i(e, t, n, o) {
        return new(n || (n = Promise))((function(r, a) {
          function c(e) {
            try {
              s(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              s(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(c, i)
          }
          s((o = o.apply(e, t || [])).next())
        }))
      }

      function s(e, t) {
        var n, o, r, a, c = {
          label: 0,
          sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function i(i) {
          return function(s) {
            return function(i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, i[0] && (c = 0)), c;) try {
                if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return c.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    c.label++, o = i[1], i = [0];
                    continue;
                  case 7:
                    i = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = c.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                      c.label = i[1];
                      break
                    }
                    if (6 === i[0] && c.label < r[1]) {
                      c.label = r[1], r = i;
                      break
                    }
                    if (r && c.label < r[2]) {
                      c.label = r[2], c.ops.push(i);
                      break
                    }
                    r[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                i = t.call(e, c)
              } catch (e) {
                i = [6, e], o = 0
              } finally {
                n = r = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, s])
          }
        }
      }

      function u(e, t, n) {
        if (n || 2 === arguments.length)
          for (var o, r = 0, a = t.length; r < a; r++) !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
        return e.concat(o || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);