! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0d5f2197-322e-46a8-8e7a-6dbadc7bd131", e._sentryDebugIdIdentifier = "sentry-dbid-0d5f2197-322e-46a8-8e7a-6dbadc7bd131")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [285, 322], {
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

      function n(e, t, n, r) {
        Object.defineProperty(e, t, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0
        })
      }
      var r = {};
      n(r, "ONETRUST_LOADED_EVENT", (() => a)), n(r, "WRAPPER_CALLED_EVENT", (() => s)), n(r, "CONSENT_CHANGED_EVENT", (() => i)), n(r, "init", (() => u));
      const o = window.document.currentScript?.nonce,
        a = "ONETRUST_LOADED_EVENT",
        s = "WRAPPER_CALLED_EVENT",
        i = "CONSENT_CHANGED_EVENT";
      let c = !0;

      function u(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), o && (n.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          c && (c = !1, window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(s, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(i, {
              bubbles: !0
            }))
          }))
        }
      }
      var l = {};
      n(l, "NoChoiceTransactionType", (() => f)), n(l, "ConfirmedTransactionType", (() => d)), n(l, "canStoreCookie", (() => y));
      const f = "NO_CHOICE",
        d = "CONFIRMED",
        p = {
          AlwaysActive: "always active"
        };

      function y(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          r = n.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!r) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if (r.Status === p.AlwaysActive) return !0;
        const o = n.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === r.PurposeId));
        return o?.TransactionType === d
      }
      t(e.exports, r), t(e.exports, l)
    },
    5356: (e, t, n) => {
      "use strict";
      var r = n(2229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, a = {},
          u = null,
          l = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !c.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: l,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    8096: (e, t, n) => {
      "use strict";
      e.exports = n(5356)
    },
    8322: (e, t, n) => {
      "use strict";
      n.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => s,
        YH: () => c,
        fX: () => u,
        sH: () => i
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function s(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function i(e, t, n, r) {
        return new(n || (n = Promise))((function(o, a) {
          function s(e) {
            try {
              c(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(s, i)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      }

      function c(e, t) {
        var n, r, o, a, s = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
          return function(c) {
            return function(i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, i[0] && (s = 0)), s;) try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    s.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      s.label = i[1];
                      break
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      s.label = o[1], o = i;
                      break
                    }
                    if (o && s.label < o[2]) {
                      s.label = o[2], s.ops.push(i);
                      break
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue
                }
                i = t.call(e, s)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, c])
          }
        }
      }

      function u(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);