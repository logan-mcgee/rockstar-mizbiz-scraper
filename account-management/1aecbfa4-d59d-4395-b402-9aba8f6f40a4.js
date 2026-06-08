try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1aecbfa4-d59d-4395-b402-9aba8f6f40a4", e._sentryDebugIdIdentifier = "sentry-dbid-1aecbfa4-d59d-4395-b402-9aba8f6f40a4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [5367], {
    16024: (e, t, r) => {
      var n = {
        "./de": [57003, 5639],
        "./en": [88503, 6267],
        "./es": [88132, 5742],
        "./fr": [10352, 2678],
        "./it": [5573, 6997],
        "./ja": [29349, 6361],
        "./ko": [93746, 7452],
        "./pl": [33208, 2642],
        "./pt": [60128, 3034],
        "./ru": [56321, 3941],
        "./zh": [50974, 5832]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 23))
      }
      a.keys = () => Object.keys(n), a.id = 16024, e.exports = a
    },
    20704: (e, t, r) => {
      var n = {
        "./de": [8411, 299],
        "./en": [41735, 5663],
        "./es": [67220, 5530],
        "./fr": [16768, 2466],
        "./it": [46677, 7073],
        "./ja": [77077, 4621],
        "./ko": [3906, 824],
        "./pl": [29512, 2398],
        "./pt": [5424, 9126],
        "./ru": [97681, 3697],
        "./zh": [54958, 1868]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 23))
      }
      a.keys = () => Object.keys(n), a.id = 20704, e.exports = a
    },
    33044: (e, t, r) => {
      var n = {
        "./de": [97131, 5259],
        "./en": [37687, 4799],
        "./es": [21860, 3370],
        "./fr": [58480, 7010],
        "./it": [88389, 4913],
        "./ja": [83365, 6285],
        "./ko": [99858, 6664],
        "./pl": [72824, 1054],
        "./pt": [83904, 662],
        "./ru": [76161, 5233],
        "./zh": [19390, 4700]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 23))
      }
      a.keys = () => Object.keys(n), a.id = 33044, e.exports = a
    },
    33366: (e, t, r) => {
      var n = {
        "./de": [75700, 4710],
        "./en": [89436, 3486],
        "./es": [72415, 4011],
        "./fr": [15235, 4851],
        "./it": [37106, 9936],
        "./ja": [14002, 2156],
        "./ko": [24241, 3885],
        "./pl": [29343, 6891],
        "./pt": [34983, 3475],
        "./ru": [72518, 4528],
        "./zh": [60905, 4861]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 23))
      }
      a.keys = () => Object.keys(n), a.id = 33366, e.exports = a
    },
    34940: (e, t, r) => {
      var n = {
        "./de": [87015, 6879],
        "./en": [64147, 2243],
        "./es": [28920, 278],
        "./fr": [33940, 9022],
        "./it": [56681, 2365],
        "./ja": [17649, 9377],
        "./ko": [49814, 9028],
        "./pl": [90300, 1242],
        "./pt": [88692, 7970],
        "./ru": [76165, 7453],
        "./zh": [39530, 8880]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 23))
      }
      a.keys = () => Object.keys(n), a.id = 34940, e.exports = a
    },
    40207: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => cs
      });
      var n = r(74848),
        a = r(44914),
        i = r(76716),
        o = r(56858),
        s = r(2821),
        c = r.n(s),
        l = r(17805);

      function d(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var u, _, f = function(e) {
          var t = new URLSearchParams(window.location.search);
          return t.set("lang", e), "".concat(window.location.pathname, "?").concat(t.toString())
        },
        p = {
          CASTLE_PUBLISHABLE_KEY: "pk_1Tt6Yzr1WFzxrJCh7WzMZzY1rHpaPudN",
          CLIENT_ID: "rsg",
          ENVIRONMENT: "prod",
          ONETRUST_SCRIPT_ID: "cc81fc10-5468-4b73-b37f-93a4686af46f",
          SCAPI_BASE_URL: "https://scapi.rockstargames.com",
          SCAUTH_BASE_URL: "https://signin.rockstargames.com",
          SUPPORT_BASE_URL: "https://support.rockstargames.com",
          WWW_BASE_URL: "https://www.rockstargames.com"
        };
      const m = (u = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            d(e, t, r[t])
          })
        }
        return e
      }({}, p), _ = null != (_ = {
        getAccountSettingsSupportPage: function(e) {
          return "".concat(p.SUPPORT_BASE_URL, "/request/account/account-settings/").concat(e)
        },
        getAovUrl: function(e) {
          var t = e.lang,
            r = new URL("".concat(p.SCAUTH_BASE_URL, "/aov?cid=").concat(p.CLIENT_ID));
          return r.searchParams.append("lang", t), r.searchParams.append("redirectUrl", "".concat(p.WWW_BASE_URL, "/account?lang=").concat(t)), r.toString()
        },
        getAuthorizeUrl: function(e) {
          var t = new URL("".concat(p.SCAUTH_BASE_URL, "/connect/authorize/").concat(p.CLIENT_ID));
          return t.searchParams.set("returnUrl", f(e)), t.toString()
        },
        getDataAccessAovUrl: function(e) {
          var t = e.lang,
            r = new URL("".concat(p.SCAUTH_BASE_URL, "/aov?cid=").concat(p.CLIENT_ID));
          return r.searchParams.append("lang", t), r.searchParams.append("redirectUrl", "".concat(p.WWW_BASE_URL, "/account/privacy?lang=").concat(t)), r.toString()
        },
        getLinkUrl: function(e) {
          var t = e.accessToken,
            r = e.lang,
            n = e.onlineService,
            a = new URL("".concat(p.SCAUTH_BASE_URL, "/tpa/").concat(n, "/link"));
          return a.searchParams.set("cid", p.CLIENT_ID), a.searchParams.set("accessToken", t), a.searchParams.set("returnUrl", f(r)), a.searchParams.set("lang", r), a.toString()
        },
        getDeleteAccountLogoutUrl: function(e) {
          var t = e.lang,
            r = new URL("".concat(p.WWW_BASE_URL, "/auth/sc-auth-logout"));
          return r.searchParams.set("lang", t), r.searchParams.set("returnUrl", "/account/delete/complete?lang=".concat(t)), r.toString()
        },
        getPingBearerUrl: function() {
          return "".concat(p.WWW_BASE_URL, "/auth/ping-bearer.json")
        },
        getUnlinkUrl: function(e) {
          var t = e.accessToken,
            r = e.lang,
            n = e.onlineService,
            a = new URL("".concat(p.SCAUTH_BASE_URL, "/tpa/").concat(n, "/unlink"));
          return a.searchParams.set("cid", p.CLIENT_ID), a.searchParams.set("accessToken", t), a.searchParams.set("returnUrl", f(r)), a.searchParams.set("lang", r), a.toString()
        },
        getPrivacyPolicyUrl: function(e) {
          var t = e.lang;
          return "".concat(p.WWW_BASE_URL, "/privacy?lang=").concat(t)
        }
      }) ? _ : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(_)) : function(e) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      }(Object(_)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(_, e))
      }), u);
      var h = r(76455);

      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function b(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var y = [{
        id: "prod",
        sites: {
          www: "www",
          socialClub: "socialclub",
          store: "store",
          support: "support"
        },
        cookieIdentifier: "prod"
      }];
      const v = function() {
        var e = void 0,
          t = window.location,
          r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")),
          n = y.findIndex(function(t) {
            return Object.entries(t.sites).findIndex(function(t) {
              var n, a, i = (a = 2, function(e) {
                  if (Array.isArray(e)) return e
                }(n = t) || function(e, t) {
                  var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                  if (null != r) {
                    var n, a, i = [],
                      o = !0,
                      s = !1;
                    try {
                      for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                    } catch (e) {
                      s = !0, a = e
                    } finally {
                      try {
                        o || null == r.return || r.return()
                      } finally {
                        if (s) throw a
                      }
                    }
                    return i
                  }
                }(n, a) || function(e, t) {
                  if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0
                  }
                }(n, a) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                o = i[0],
                s = i[1];
              return s === r && (e = {
                site: o,
                subDomain: s
              }, !0)
            }) >= 0
          }),
          a = y[n >= 0 ? n : 0];
        return e || (e = {
            site: "www",
            subDomain: "local"
          }),
          function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r)
              }
              return t
            }(Object(t)).forEach(function(r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }), e
          }(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                b(e, t, r[t])
              })
            }
            return e
          }({}, a), {
            currentSite: e
          })
      };
      var w = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          country: "US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          country: "DE"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          country: "ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          country: "MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          country: "FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          country: "IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          country: "JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          country: "KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          country: "PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          country: "BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          country: "RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          country: "TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          country: "CN"
        }],
        j = (w.reduce(function(e, t) {
          return e[t.subdomain] = t, e
        }, {}), w[0]);
      const x = w,
        M = function() {
          var e, t, r, n, a = window.location,
            i = v(),
            o = function(e) {
              var t = x.map(function(e) {
                  return e.subdomaincom
                }),
                r = e.pathname.substring(1).split("/");
              return -1 !== t.indexOf(r[0]) ? r[0] : null
            }(a),
            s = (e = "rockstarweb_lang.".concat(i.cookieIdentifier), t = document.cookie.split("; "), r = "".concat(e, "="), null == (n = t.find(function(e) {
              return e.startsWith(r)
            })) ? void 0 : n.substring(r.length, n.length));
          return x.find(function(e) {
            return e.subdomaincom === o
          }) || x.find(function(e) {
            return e.iso === s
          }) || j
        };
      var k = r(13871);

      function O(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function S(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              O(i, n, a, o, s, "next", e)
            }

            function s(e) {
              O(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function A(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function I(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var P = function(e) {
        return S(function() {
          return I(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, r(92637)("./".concat(e, ".json"))];
              case 1:
                return [2, t.sent()]
            }
          })
        })()
      };

      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function T(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function D(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            D(e, t, r[t])
          })
        }
        return e
      }
      var L = r(6442),
        E = r(3554),
        R = r(92396),
        q = r(66708),
        G = "_125nfjqb",
        U = (0, q.c)({
          defaultClassName: "_125nfjqg foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo foundry_tdsdcdt",
          variantClassNames: {
            overflowEllipsis: {
              true: "_125nfjqh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        V = (0, q.c)({
          defaultClassName: "_125nfjq7",
          variantClassNames: {
            disabled: {
              true: "_125nfjq8"
            },
            interactable: {
              true: "_125nfjq9"
            },
            stackMobile: {
              true: "_125nfjqa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        F = (0, q.c)({
          defaultClassName: "_125nfjqi foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp",
          variantClassNames: {
            overflowEllipsis: {
              true: "_125nfjqj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        z = r(34164);

      function B(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function H() {
        return H = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, H.apply(this, arguments)
      }

      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            B(e, t, r[t])
          })
        }
        return e
      }

      function W(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function X(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var Z = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq0", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        K = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq4", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        $ = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq5", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        J = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq2 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8", r)
            }, o);
          return (0, n.jsx)("h5", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        Q = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq3", r)
            }, o);
          return (0, n.jsx)("p", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ee = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq6", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        te = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.isDisabled,
            o = e.isInteractable,
            s = e.label,
            c = e.shouldStackMobile,
            l = e.testId,
            d = X(e, ["className", "children", "isDisabled", "isInteractable", "label", "shouldStackMobile", "testId"]),
            u = (0, R.v6)(Y(W(Y({}, s && {
              "aria-label": s
            }), {
              className: (0, z.A)(V({
                disabled: i,
                interactable: o,
                stackMobile: c
              }), r),
              "data-testid": l
            }), o && {
              tabIndex: -1
            }), d);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, u), {
            children: a
          }))
        }),
        re = (0, a.forwardRef)(function(e, t) {
          var r = H({}, function(e) {
            if (null == e) throw new TypeError("Cannot destructure " + e);
            return e
          }(e));
          return (0, n.jsx)(E.Divider, Y({
            className: "_125nfjqc",
            ref: t
          }, r))
        }),
        ne = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqd", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ae = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqe", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ie = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqf", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        oe = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.shouldEllipsis,
            o = e.testId,
            s = X(e, ["className", "children", "shouldEllipsis", "testId"]),
            c = (0, R.v6)({
              "data-testid": o,
              className: (0, z.A)(U({
                overflowEllipsis: i
              }), r)
            }, s);
          return (0, n.jsx)("p", W(Y({
            ref: t
          }, c), {
            children: a
          }))
        }),
        se = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.shouldEllipsis,
            o = e.testId,
            s = X(e, ["className", "children", "shouldEllipsis", "testId"]),
            c = (0, R.v6)({
              "data-testid": o,
              className: (0, z.A)(F({
                overflowEllipsis: i
              }), r)
            }, s);
          return (0, n.jsx)("p", W(Y({
            ref: t
          }, c), {
            children: a
          }))
        }),
        ce = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqk", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        le = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjql foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk", r)
            }, o);
          return (0, n.jsx)(E.Button, W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        de = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = X(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqm", r)
            }, o);
          return (0, n.jsx)("div", W(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ue = (0, a.forwardRef)(function(e, t) {
          var r = e.label,
            a = e.className,
            i = e.testId;
          return (0, n.jsx)("div", {
            "data-testid": i,
            children: (0, n.jsxs)("svg", {
              className: a,
              width: "67",
              height: "62",
              viewBox: "0 0 67 62",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-label": r,
              role: "img",
              children: [(0, n.jsx)("path", {
                d: "M54.695 0.835938H12.1214C5.71373 0.835938 0.5 5.89471 0.5 12.1094V49.9274C0.5 56.229 5.55652 61.1653 12.016 61.1653H54.5877C61.0471 61.1653 66.1064 56.229 66.1064 49.9274V12.1094C66.1064 5.78852 61.0954 0.835938 54.695 0.835938Z",
                fill: "black"
              }), (0, n.jsx)("path", {
                d: "M54.6943 2.12891H12.1206C6.32998 2.12891 1.79132 6.5105 1.79132 12.1076L1.79102 49.926C1.79102 55.5038 6.28369 59.872 12.0153 59.872H54.5869C60.3217 59.872 64.8127 55.5038 64.8127 49.926V12.1076C64.8127 6.5105 60.3677 2.12891 54.6943 2.12891Z",
                fill: "#FCAF17"
              }), (0, n.jsx)("path", {
                d: "M56.8403 36.7387H48.6208L47.3172 28.5441L42.5005 36.6812H41.5996C41.0533 35.7394 40.8365 34.3602 40.8365 33.5163C40.8365 32.1166 40.9373 30.751 40.9373 28.9748C40.9373 26.6185 40.245 25.354 38.3965 24.9097V24.8397C42.3275 24.2933 44.1096 21.6926 44.1096 18.0312C44.1096 12.8295 40.649 11.7012 36.1143 11.7012H23.9122L18.7559 36.1203H25.2399L27.1165 27.2352H31.4269C33.7257 27.2352 34.6663 28.3608 34.6663 30.5134C34.6663 32.151 34.4957 33.4478 34.4957 34.7096C34.4957 35.1758 34.6013 36.2603 34.9166 36.6812C34.9128 36.6812 39.6034 41.6272 39.6034 41.6272L35.5707 50.2981L44.1956 45.1738L50.6224 50.1113L49.4228 41.9304L56.8403 36.7387V36.7387ZM33.3644 22.6635H28.2105L29.445 16.7769H34.2403C35.9477 16.7769 37.7232 17.2209 37.7232 19.3102C37.7232 21.9436 35.7012 22.6635 33.3644 22.6635V22.6635Z",
                fill: "black"
              }), (0, n.jsx)("path", {
                d: "M53.0576 37.931H47.6029L46.6608 31.998L43.1833 37.8731H37.6855L41.0293 41.3945L38.2794 47.2992L44.2867 43.7327L49.0186 47.3713L48.1397 41.372L53.0576 37.931Z",
                fill: "white"
              }), (0, n.jsx)("path", {
                d: "M64.6961 58.7637C65.0955 58.7637 65.2955 58.9313 65.2955 59.2666C65.2955 59.5455 65.1411 59.705 64.8328 59.7452L65.3358 60.5216H65.042L64.5632 59.7654H64.2736V60.5216H64V58.7637H64.6961V58.7637ZM64.5874 59.5441C64.7537 59.5441 64.8677 59.522 64.9294 59.4777C64.991 59.4335 65.0218 59.359 65.0218 59.2545C65.0218 59.0748 64.8986 58.985 64.6518 58.985H64.2736V59.544H64.5873L64.5874 59.5441Z",
                fill: "black"
              }), (0, n.jsx)("path", {
                d: "M64.587 61.1604C63.7496 61.1604 63.0684 60.4791 63.0684 59.6417C63.0684 58.8043 63.7496 58.123 64.587 58.123C65.4245 58.123 66.1057 58.8043 66.1057 59.6417C66.1057 60.4791 65.4245 61.1604 64.587 61.1604ZM64.587 58.3605C63.8806 58.3605 63.3057 58.9353 63.3057 59.6417C63.3057 60.3482 63.8806 60.9229 64.587 60.9229C65.2934 60.9229 65.8684 60.3482 65.8684 59.6417C65.8684 58.9353 65.2934 58.3605 64.587 58.3605Z",
                fill: "black"
              }), (0, n.jsx)("path", {
                d: "M64.6961 58.7637C65.0955 58.7637 65.2955 58.9313 65.2955 59.2666C65.2955 59.5455 65.1411 59.705 64.8328 59.7452L65.3358 60.5216H65.042L64.5632 59.7654H64.2736V60.5216H64V58.7637H64.6961V58.7637ZM64.5874 59.5441C64.7537 59.5441 64.8677 59.522 64.9294 59.4777C64.991 59.4335 65.0218 59.359 65.0218 59.2545C65.0218 59.0748 64.8986 58.985 64.6518 58.985H64.2736V59.544H64.5873L64.5874 59.5441Z",
                fill: "black"
              }), (0, n.jsx)("path", {
                d: "M64.587 61.1604C63.7496 61.1604 63.0684 60.4791 63.0684 59.6417C63.0684 58.8043 63.7496 58.123 64.587 58.123C65.4245 58.123 66.1057 58.8043 66.1057 59.6417C66.1057 60.4791 65.4245 61.1604 64.587 61.1604ZM64.587 58.3605C63.8806 58.3605 63.3057 58.9353 63.3057 59.6417C63.3057 60.3482 63.8806 60.9229 64.587 60.9229C65.2934 60.9229 65.8684 60.3482 65.8684 59.6417C65.8684 58.9353 65.2934 58.3605 64.587 58.3605Z",
                fill: "black"
              })]
            })
          })
        });
      const _e = ue;
      var fe = r(72267);
      const pe = (0, fe.YK)({
        profile_delete_thanks_title: {
          defaultMessage: "Thank you for using Rockstar Games",
          description: "The heading for the final page.",
          id: "profile_delete_thanks_title"
        },
        profile_delete_thanks_alert_title: {
          defaultMessage: "Change your mind?",
          description: "The heading inside the inline alert.",
          id: "profile_delete_thanks_alert_title"
        },
        profile_delete_thanks_alert_description: {
          defaultMessage: "At anytime during this period, check the link in the email we've sent you to cancel your deletion request.",
          description: "The description inside the inline alert.",
          id: "profile_delete_thanks_alert_description"
        }
      });
      var me = function() {
          var e = (0, L.A)();
          return (0, n.jsx)("div", {
            className: "b32tmb0",
            children: (0, n.jsxs)("div", {
              className: "b32tmb1",
              children: [(0, n.jsx)(_e, {
                className: "b32tmb3",
                label: "Rockstar Games",
                testId: "rockstarLogo"
              }), (0, n.jsx)($, {
                children: (0, n.jsx)(J, {
                  testId: "thanksHeader",
                  children: e.formatMessage(pe.profile_delete_thanks_title)
                })
              }), (0, n.jsxs)("div", {
                className: "b32tmb2",
                children: [(0, n.jsx)(E.Body, {
                  size: "LG",
                  appearance: "bold",
                  children: e.formatMessage(pe.profile_delete_thanks_alert_title)
                }), (0, n.jsx)(E.Body, {
                  size: "SM",
                  children: e.formatMessage(pe.profile_delete_thanks_alert_description)
                })]
              })]
            })
          })
        },
        he = r(34843),
        ge = (0, a.createContext)(null),
        be = function() {
          var e = (0, a.useContext)(ge);
          if (!e) throw new Error("Not used in AuthContext");
          return e
        };

      function ye(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function ve(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              ye(i, n, a, o, s, "next", e)
            }

            function s(e) {
              ye(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function we(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var je, xe = !1,
        Me = function(e) {
          return ve(function() {
            return we(this, function(t) {
              return xe || (xe = !0, je = fetch(m.getPingBearerUrl(), {
                method: "POST"
              }).then(function(e) {
                return e.json()
              }).then(function(t) {
                return e.setAccessToken(t.bearerToken, t.tokenExpiresTime), e.accessToken = t.bearerToken, e.tokenExpiresTime = t.tokenExpiresTime, e
              }).finally(function() {
                xe = !1
              })), [2, je]
            })
          })()
        };
      const ke = function() {
          var e = be();
          return {
            getAccessToken: function() {
              return ve(function() {
                var t;
                return we(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return t = 1e3 * (e.tokenExpiresTime || 0), !e.accessToken || e.accessToken && t <= Date.now() ? [4, Me(e)] : [3, 2];
                    case 1:
                      r.sent(), r.label = 2;
                    case 2:
                      return [2, e.accessToken]
                  }
                })
              })()
            }
          }
        },
        Oe = (0, fe.YK)({
          toast_provider_label: {
            defaultMessage: "Alert",
            description: "Label for the error toast provider.",
            id: "toast_provider_label"
          },
          toast_close_alt: {
            defaultMessage: "Close toast",
            description: "Alt text for closing the toast",
            id: "toast_close_alt"
          },
          toast_close_label: {
            defaultMessage: "Close",
            description: "Label for closing the toast",
            id: "toast_close_label"
          },
          generic_error: {
            defaultMessage: "Something went wrong. Please try again.",
            description: "The error message for generic errors.",
            id: "generic_error"
          },
          castle_or_rate_limit_error: {
            defaultMessage: "Sorry, we are unable to handle your request at this time.",
            description: "The error message for castle errors.",
            id: "castle_or_rate_limit_error"
          },
          invalid_date_of_birth: {
            defaultMessage: "Unable to update your profile due to being classed as underage for the selected country / region",
            description: "The error message for trying to change to a country with an underage account.",
            id: "invalid_date_of_birth"
          },
          verify_email_changed_incorrect_logged_in_user: {
            defaultMessage: "You are logged in to the wrong account. Please login to the correct account and try again.",
            description: "Error message for when the user is attempting to verify their new email address while being logged into the wrong account",
            id: "verify_email_changed_incorrect_logged_in_user"
          },
          verify_email_changed_email_cookie_expired: {
            defaultMessage: "Your verification link has expired, please try again.",
            description: "Error message for when the user's email cookie has expired",
            id: "verify_email_changed_email_cookie_expired"
          },
          security_already_enrolled_in_mfa: {
            defaultMessage: "Your account is already enrolled in two-factor authentication.",
            description: "Error message for when the user is already enrolled in two-factor authentication",
            id: "security_already_enrolled_in_mfa"
          }
        }),
        Se = {
          "0.3300.7": Oe.security_already_enrolled_in_mfa,
          "0.3800.7": Oe.verify_email_changed_incorrect_logged_in_user,
          "0.3800.8": Oe.verify_email_changed_email_cookie_expired,
          "8.400.1": Oe.castle_or_rate_limit_error,
          "8.600.1": Oe.castle_or_rate_limit_error,
          "141.100.3": Oe.castle_or_rate_limit_error,
          "3.000.1": Oe.castle_or_rate_limit_error,
          "3.000.2": Oe.castle_or_rate_limit_error,
          "3.000.3": Oe.castle_or_rate_limit_error,
          "3.100.1": Oe.castle_or_rate_limit_error,
          "3.100.2": Oe.castle_or_rate_limit_error,
          "3.100.3": Oe.castle_or_rate_limit_error,
          "3.200.1": Oe.castle_or_rate_limit_error,
          "3.200.2": Oe.castle_or_rate_limit_error,
          "3.200.3": Oe.castle_or_rate_limit_error,
          "0.1300.3": Oe.invalid_date_of_birth
        };

      function Ae(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      const Ie = function(e) {
        var t, r, i, o = e.error,
          s = e.id,
          c = e.errorMessage,
          l = (r = (0, a.useState)(!0), i = 2, function(e) {
            if (Array.isArray(e)) return e
          }(r) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(r, i) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ae(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ae(e, t) : void 0
            }
          }(r, i) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          d = l[0],
          u = l[1],
          _ = qe(),
          f = (0, L.A)(),
          p = o ? f.formatMessage(null !== (t = Se[o.code]) && void 0 !== t ? t : Oe.generic_error) : c;
        return (0, n.jsxs)(E.Toast.Root, {
          appearance: "danger",
          className: "_1tpz0j30",
          open: d,
          onOpenChange: function(e) {
            u(e), e || _.removeToast(s)
          },
          type: "foreground",
          duration: 1 / 0,
          children: [(0, n.jsx)(E.Toast.Icon, {
            className: "_1tpz0j33"
          }), (0, n.jsxs)(E.Toast.Description, {
            className: "_1tpz0j31",
            children: [(0, n.jsx)("div", {
              "data-testid": "errorMessage",
              children: p
            }), o && (0, n.jsxs)("div", {
              className: "_1tpz0j32",
              children: [(0, n.jsx)("div", {
                "data-testid": "errorLogId",
                children: o.logId
              }), (0, n.jsxs)("div", {
                "data-testid": "errorCode",
                children: ["#", o.code]
              })]
            })]
          }), (0, n.jsx)(E.Toast.CloseButton, {
            label: f.formatMessage(Oe.toast_close_label),
            testId: "errorClose"
          })]
        })
      };
      var Pe = (0, q.c)({
        defaultClassName: "_1momhrh0",
        variantClassNames: {
          hidden: {
            true: "_1momhrh1"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });

      function Ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      const Te = function(e) {
        var t, r, i = e.appearance,
          o = e.message,
          s = e.title,
          c = e.id,
          l = (0, L.A)(),
          d = (t = (0, a.useState)(!0), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ce(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ce(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          _ = d[1],
          f = qe();
        return (0, n.jsxs)(E.Toast.Root, {
          appearance: i,
          className: "jb6xbj2",
          open: u,
          onOpenChange: function(e) {
            _(e), e || f.removeToast(c)
          },
          testId: "globalToast",
          children: [(0, n.jsx)(E.Toast.Icon, {}), (0, n.jsxs)(E.Toast.Description, {
            className: s ? "jb6xbj0" : "",
            testId: "toastMessage",
            children: [s && (0, n.jsx)(E.Heading, {
              className: "jb6xbj1",
              level: 6,
              testId: "toastTitle",
              children: s
            }), o]
          }), (0, n.jsx)(E.Toast.CloseButton, {
            label: l.formatMessage(Oe.toast_close_label),
            testId: "toastClose"
          })]
        })
      };

      function De(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Ne(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Ne(e, t, r[t])
          })
        }
        return e
      }

      function Ee(e, t) {
        if (e) {
          if ("string" == typeof e) return De(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? De(e, t) : void 0
        }
      }
      var Re = (0, a.createContext)(null),
        qe = function() {
          var e = (0, a.useContext)(Re);
          if (!e) throw new Error("Not used in GlobalToastContext");
          return e
        },
        Ge = function() {
          return qe().toasts.map(function(e) {
            return (0, n.jsx)(a.Fragment, {
              children: e
            }, e.props.id)
          })
        },
        Ue = function() {
          var e = qe();
          return (0, n.jsx)(E.Toast.Viewport, {
            className: Pe({
              hidden: e.toasts.length <= 0
            }),
            position: "bottomRight",
            testId: "globalToastViewport"
          })
        },
        Ve = function(e) {
          var t, r, i, o, s, c = e.children,
            l = (0, L.A)(),
            d = (o = (0, a.useState)([]), s = 2, t = function(e) {
              if (Array.isArray(e)) return e
            }(o) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(o, s) || Ee(o, s) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }(), r = t[0], {
              displayNewError: function(e) {
                i(function(t) {
                  var r = t.filter(function(e) {
                      return e.type !== Ie
                    }),
                    a = t.filter(function(e) {
                      return e.type === Ie
                    });
                  a.length >= 3 && a.shift();
                  var i = Le({
                    id: crypto.randomUUID()
                  }, "string" == typeof e ? {
                    errorMessage: e
                  } : {
                    error: e
                  });
                  return a.push((0, n.jsx)(Ie, Le({}, i))), a.concat(r)
                })
              },
              displayNewToast: function(e) {
                var t = e.appearance,
                  r = e.title,
                  a = e.message;
                i(function(e) {
                  var i = function(e) {
                    return function(e) {
                      if (Array.isArray(e)) return De(e)
                    }(e) || function(e) {
                      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || Ee(e) || function() {
                      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                  }(e);
                  return i.push((0, n.jsx)(Te, {
                    appearance: t,
                    message: a,
                    title: r,
                    id: crypto.randomUUID()
                  })), i
                })
              },
              removeToast: function(e) {
                i(r.filter(function(t) {
                  return t.props.id !== e
                }))
              },
              setToasts: i = t[1],
              toasts: r
            });
          return (0, n.jsx)(Re.Provider, {
            value: d,
            children: (0, n.jsxs)(E.Toast.Provider, {
              duration: 1e4,
              label: l.formatMessage(Oe.toast_provider_label),
              children: [c, (0, n.jsx)(Ge, {}), (0, n.jsx)(Ue, {})]
            })
          })
        },
        Fe = r(52035);

      function ze(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var Be, He, Ye = function(e) {
          return e.ProfileOverview = "account/settings", e.UpdateLanguage = "account/language/update", e.PasswordRequirements = "account/password/requirements", e.GetCountries = "profile/getCountries", e.RequestUpdateEmail = "account/email/request", e.UpdateEmail = "account/email/update", e.UpdatePassword = "account/password", e.UpdateNickname = "account/nickname", e.UpdateCountry = "account/country", e.VerifyEmail = "account/email/verify", e.GetAvatars = "account/avatars", e.UpdateAvatars = "account/avatars/update", e.GetMfaDevices = "account/mfaDevices", e.GetMfaRememberedMachines = "account/mfaRememberedMachines", e.ForgetMfaRememberedMachine = "account/mfaRememberedMachines/delete", e.RequestRegisterMfa = "account/requestRegisterMfa", e.VerifyMfaRegistration = "account/verifyMfaRegistration", e.RequestDeregisterMfa = "account/requestDeregisterMfa", e.VerifyMfaDeregistration = "account/verifyMfaDeregistration", e.VerifyResetMfaByEmail = "account/verifyMfaResetFromEmail", e.GetPrivacySettings = "settings/privacy", e.GetPlayerAccountVisibility = "settings/playerAccountVisibility", e.UpdateEmailNotificationSettings = "settings/updateEmailNotificationSettings", e.UpdatePrivacySettings = "settings/updatePrivacySettings", e.UpdatePlayerAccountVisibility = "settings/updatePlayerAccountVisibility", e.GetSubscriptionStatus = "marketing/status", e.Subscribe = "marketing/update?subscribe=true", e.Unsubscribe = "marketing/update?subscribe=false", e.GetLinkedAccounts = "account/linkedaccounts", e.DeleteAccount = "account/delete", e.CancelAccountDeletion = "account/delete/cancel", e.DeleteCheck = "account/delete/check", e.GetBlockedUsers = "friends/blocked", e.UnblockUser = "friends/unblockPlayer", e.GetGoogleTagManagerSetupData = "account/googleTagManagerSetupData", e.GetDataSubjectAccessRequestStatus = "data-subject-access-request/status", e.CancelDataSubjectAccessRequest = "data-subject-access-request/cancel", e.SubmitDataSubjectAccessRequest = "data-subject-access-request/initiate", e.DownloadDataSubjectAccessRequest = "data-subject-access-request/download", e
        }({}),
        We = (ze(Be = {}, "account/settings", {
          method: "get"
        }), ze(Be, "account/language/update", {
          method: "post"
        }), ze(Be, "account/password/requirements", {
          method: "get"
        }), ze(Be, "profile/getCountries", {
          method: "get"
        }), ze(Be, "account/avatars", {
          method: "get"
        }), ze(Be, "account/avatars/update", {
          method: "post"
        }), ze(Be, "account/mfaDevices", {
          method: "get"
        }), ze(Be, "account/mfaRememberedMachines", {
          method: "get"
        }), ze(Be, "account/mfaRememberedMachines/delete", {
          method: "delete"
        }), ze(Be, "account/requestRegisterMfa", {
          method: "post"
        }), ze(Be, "account/verifyMfaRegistration", {
          method: "post"
        }), ze(Be, "account/requestDeregisterMfa", {
          method: "post"
        }), ze(Be, "account/verifyMfaDeregistration", {
          method: "post"
        }), ze(Be, "account/verifyMfaResetFromEmail", {
          method: "post"
        }), ze(Be, "settings/privacy", {
          method: "get"
        }), ze(Be, "settings/playerAccountVisibility", {
          method: "get"
        }), ze(Be, "settings/updatePrivacySettings", {
          method: "post"
        }), ze(Be, "settings/updatePlayerAccountVisibility", {
          method: "post"
        }), ze(Be, "settings/updateEmailNotificationSettings", {
          method: "post"
        }), ze(Be, "marketing/status", {
          method: "get"
        }), ze(Be, "marketing/update?subscribe=true", {
          method: "post"
        }), ze(Be, "marketing/update?subscribe=false", {
          method: "post"
        }), ze(Be, "account/linkedaccounts", {
          method: "get"
        }), ze(Be, "account/delete", {
          method: "post"
        }), ze(Be, "account/delete/cancel", {
          method: "get",
          isUnauthenticated: !0
        }), ze(Be, "account/delete/check", {
          method: "get"
        }), ze(Be, "friends/blocked", {
          method: "get"
        }), ze(Be, "friends/unblockPlayer", {
          method: "post"
        }), ze(Be, "account/googleTagManagerSetupData", {
          method: "get"
        }), ze(Be, "account/email/request", {
          method: "post"
        }), ze(Be, "account/email/update", {
          method: "post"
        }), ze(Be, "account/password", {
          method: "post"
        }), ze(Be, "account/nickname", {
          method: "post"
        }), ze(Be, "account/country", {
          method: "post"
        }), ze(Be, "data-subject-access-request/status", {
          method: "get"
        }), ze(Be, "data-subject-access-request/cancel", {
          method: "post"
        }), ze(Be, "account/email/verify", {
          method: "post",
          isUnauthenticated: !0
        }), ze(Be, "data-subject-access-request/initiate", {
          method: "post"
        }), ze(Be, "data-subject-access-request/download", {
          method: "get"
        }), Be);

      function Xe(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const Ze = (0, Fe.eU)((Xe(He = {}, Ye.ProfileOverview, (0, Fe.eU)()), Xe(He, Ye.GetCountries, (0, Fe.eU)()), Xe(He, Ye.GetAvatars, (0, Fe.eU)()), Xe(He, Ye.UpdateAvatars, (0, Fe.eU)()), Xe(He, Ye.ForgetMfaRememberedMachine, (0, Fe.eU)()), Xe(He, Ye.VerifyResetMfaByEmail, (0, Fe.eU)()), Xe(He, Ye.GetMfaDevices, (0, Fe.eU)()), Xe(He, Ye.GetMfaRememberedMachines, (0, Fe.eU)()), Xe(He, Ye.RequestRegisterMfa, (0, Fe.eU)()), Xe(He, Ye.VerifyMfaRegistration, (0, Fe.eU)()), Xe(He, Ye.RequestDeregisterMfa, (0, Fe.eU)()), Xe(He, Ye.VerifyMfaDeregistration, (0, Fe.eU)()), Xe(He, Ye.GetPrivacySettings, (0, Fe.eU)()), Xe(He, Ye.GetPlayerAccountVisibility, (0, Fe.eU)()), Xe(He, Ye.UpdatePrivacySettings, (0, Fe.eU)()), Xe(He, Ye.UpdatePlayerAccountVisibility, (0, Fe.eU)()), Xe(He, Ye.UpdateEmailNotificationSettings, (0, Fe.eU)()), Xe(He, Ye.GetSubscriptionStatus, (0, Fe.eU)()), Xe(He, Ye.Subscribe, (0, Fe.eU)()), Xe(He, Ye.Unsubscribe, (0, Fe.eU)()), Xe(He, Ye.GetLinkedAccounts, (0, Fe.eU)()), Xe(He, Ye.DeleteAccount, (0, Fe.eU)()), Xe(He, Ye.CancelAccountDeletion, (0, Fe.eU)()), Xe(He, Ye.DeleteCheck, (0, Fe.eU)()), Xe(He, Ye.GetBlockedUsers, (0, Fe.eU)()), Xe(He, Ye.UnblockUser, (0, Fe.eU)()), Xe(He, Ye.RequestUpdateEmail, (0, Fe.eU)()), Xe(He, Ye.UpdateEmail, (0, Fe.eU)()), Xe(He, Ye.UpdateLanguage, (0, Fe.eU)()), Xe(He, Ye.GetGoogleTagManagerSetupData, (0, Fe.eU)()), Xe(He, Ye.PasswordRequirements, (0, Fe.eU)()), Xe(He, Ye.UpdatePassword, (0, Fe.eU)()), Xe(He, Ye.UpdateNickname, (0, Fe.eU)()), Xe(He, Ye.UpdateCountry, (0, Fe.eU)()), Xe(He, Ye.GetDataSubjectAccessRequestStatus, (0, Fe.eU)()), Xe(He, Ye.CancelDataSubjectAccessRequest, (0, Fe.eU)()), Xe(He, Ye.VerifyEmail, (0, Fe.eU)()), Xe(He, Ye.SubmitDataSubjectAccessRequest, (0, Fe.eU)()), Xe(He, Ye.DownloadDataSubjectAccessRequest, (0, Fe.eU)()), He)),
        Ke = (0, fe.YK)({
          email_change_new_email_label: {
            defaultMessage: "New Email Address",
            description: "The label for new email field.",
            id: "email_change_new_email_label"
          },
          email_change_new_email_placeholder: {
            defaultMessage: "Enter new email address",
            description: "The placeholder text for new email field.",
            id: "email_change_new_email_placeholder"
          },
          email_change_new_email_invalid: {
            defaultMessage: "Invalid email address",
            description: "The error text for new email field.",
            id: "email_change_new_email_invalid"
          },
          email_change_password_label: {
            defaultMessage: "Current Password",
            description: "The label for password field.",
            id: "email_change_password_label"
          },
          email_change_password_placeholder: {
            defaultMessage: "Enter password",
            description: "The placeholder text for password field.",
            id: "email_change_password_placeholder"
          },
          email_change_terms_body: {
            defaultMessage: "Check to confirm email update. We’ll send a verification link to your new email to finalize your changes after saving.",
            description: "The terms and agreement body copy.",
            id: "email_change_terms_body"
          },
          email_change_submit_button: {
            defaultMessage: "Save Changes",
            description: "The submit form text.",
            id: "email_change_submit_button"
          },
          email_change_error_email: {
            defaultMessage: "Please enter a valid email address",
            description: "Error text when e-mail validation fails.",
            id: "email_change_error_email"
          },
          email_change_must_not_match_error_email: {
            defaultMessage: "New email address cannot be the same as current",
            description: "Error text when user tries to reset to the current e-mail address",
            id: "email_change_must_not_match_error_email"
          },
          email_change_back_button_icon: {
            defaultMessage: "Back icon",
            description: "Icon inside the back button.",
            id: "email_change_back_button_icon"
          },
          email_change_page_title: {
            defaultMessage: "Email",
            description: "The page title.",
            id: "email_change_page_title"
          },
          email_change_confirm_checkbox_error: {
            defaultMessage: "Confirm these changes before proceeding.",
            description: "The error message when the user does not accept the terms.",
            id: "email_change_confirm_checkbox_error"
          },
          email_change_alert_title: {
            defaultMessage: "Check your email",
            description: "The title of the alert that appears when the change email form is submitted",
            id: "email_change_alert_title"
          },
          email_change_alert_description: {
            defaultMessage: "Check your requested email account for an Update Email Request message. Your email address will not be updated until you verify your email using the verification link provided.",
            description: "The description of the alert that appears when the change email form is submitted",
            id: "email_change_alert_description"
          },
          email_change_success: {
            defaultMessage: "Your email has been changed successfully.",
            description: "The description of the email change success toast",
            id: "email_change_success"
          },
          email_change_success_toast_close_button_label: {
            defaultMessage: "Close toast",
            description: "Aria label for toast notification.",
            id: "email_change_success_toast_close_button_label"
          },
          email_change_success_toast_close_icon: {
            defaultMessage: "X",
            description: "Aria label for toast close icon.",
            id: "email_change_success_toast_close_icon"
          },
          email_change_verifying_new_email: {
            defaultMessage: "Verifying new email...",
            description: "Loading text displayed while verifying new email.",
            id: "email_change_verifying_new_email"
          }
        });
      var $e = r(8620);
      const Je = {
        action: {
          menu_profile: "Settings_Menu_Profile",
          menu_privacy: "Settings_Menu_Privacy",
          menu_linked_accounts: "Settings_Menu_LinkedAccounts",
          menu_communications: "Settings_Menu_Communications",
          menu_security: "Settings_Menu_Security",
          menu_social: "Settings_Menu_Social",
          edit_email: "Setttings_Profile_MyAccount_EditEmail",
          close_edit_email: "Setttings_Profile_MyAccount_CloseEditEmail",
          save_email: "Setttings_Profile_MyAccount_SaveEmail",
          send_email_verification: "Settings_Profile_MyAccount_SendEmailVerification",
          edit_password: "Setttings_Profile_MyAccount_EditPassword",
          close_edit_password: "Setttings_Profile_MyAccount_CloseEditPassword",
          save_password: "Setttings_Profile_MyAccount_SavePassword",
          edit_nickname: "Setttings_Profile_MyAccount_EditNickname",
          close_edit_nickname: "Setttings_Profile_MyAccount_CloseEditNickname",
          save_nickname: "Setttings_Profile_MyAccount_SaveNickname",
          edit_country: "Setttings_Profile_MyAccount_EditCountry",
          close_edit_country: "Setttings_Profile_MyAccount_CloseEditCountry",
          select_country: "Setttings_Profile_MyAccount_SelectCountry",
          save_country: "Setttings_Profile_MyAccount_SaveCountry",
          edit_language: "Setttings_Profile_MyAccount_EditLanguage",
          close_edit_language: "Setttings_Profile_MyAccount_CloseEditLanguage",
          select_language: "Setttings_Profile_MyAccount_SelectLanguage",
          select_language_de: "Setttings_Profile_MyAccount_SelectLanguage_German",
          select_language_en: "Setttings_Profile_MyAccount_SelectLanguage_English",
          select_language_es: "Setttings_Profile_MyAccount_SelectLanguage_Spanish",
          select_language_fr: "Setttings_Profile_MyAccount_SelectLanguage_French",
          select_language_it: "Setttings_Profile_MyAccount_SelectLanguage_Italian",
          select_language_ja: "Setttings_Profile_MyAccount_SelectLanguage_Japanese",
          select_language_ko: "Setttings_Profile_MyAccount_SelectLanguage_Korean",
          select_language_pl: "Setttings_Profile_MyAccount_SelectLanguage_Polish",
          select_language_pt: "Setttings_Profile_MyAccount_SelectLanguage_Portuguese",
          select_language_ru: "Setttings_Profile_MyAccount_SelectLanguage_Russian",
          select_language_zh: "Setttings_Profile_MyAccount_SelectLanguage_Chinese",
          save_language: "Setttings_Profile_MyAccount_SaveLanguage",
          profile_privacy_visibility: "Settings_Privacy_ProfileAndPageInfo_ProfileVisibility",
          profile_privacy_friends_visibility: "Settings_Privacy_ProfileAndPageInfo_ShowMyFriends",
          profile_privacy_country_visibility: "Settings_Privacy_ProfileAndPageInfo_ShowMyCountry",
          profile_privacy_gameplay_visibility: "Settings_Privacy_SinglePlayerAndProfileGameStats_GameStatsVisibility",
          profile_privacy_gameplay_comparison: "Settings_Privacy_SinglePlayerAndProfileGameStats_AllowPlatformFriendComparison",
          linked_accounts_link_xbl: "Settings_LinkedAccounts_LinkAccounts_LinkXBL",
          linked_accounts_visibility_none_xbl: "Settings_LinkedAccounts_MyLinkedAccounts_XBLVisibility_MeOnly",
          linked_accounts_visibility_friends_xbl: "Settings_LinkedAccounts_MyLinkedAccounts_XBLVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_xbl: "LinkedAccounts_MyLinkedAccounts_XBLVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_xbl: "LinkedAccounts_MyLinkedAccounts_XBLVisibility_Everyone",
          linked_accounts_link_np: "Settings_LinkedAccounts_LinkAccounts_LinkPSN",
          linked_accounts_visibility_none_np: "Settings_LinkedAccounts_MyLinkedAccounts_PSNVisibility_MeOnly",
          linked_accounts_visibility_friends_np: "Settings_LinkedAccounts_MyLinkedAccounts_PSNVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_np: "Settings_LinkedAccounts_MyLinkedAccounts_PSNVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_np: "Settings_LinkedAccounts_MyLinkedAccounts_PSNVisibility_Everyone",
          linked_accounts_link_twitch: "Settings_LinkedAccounts_LinkAccounts_LinkTwitch",
          linked_accounts_visibility_none_twitch: "Settings_LinkedAccounts_MyLinkedAccounts_TwitchVisibility_MeOnly",
          linked_accounts_visibility_friends_twitch: "Settings_LinkedAccounts_MyLinkedAccounts_TwitchVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_twitch: "Settings_LinkedAccounts_MyLinkedAccounts_TwitchVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_twitch: "Settings_LinkedAccounts_MyLinkedAccounts_TwitchVisibility_Everyone",
          linked_accounts_link_google: "Settings_LinkedAccounts_LinkAccounts_LinkGoogle",
          linked_accounts_visibility_none_google: "Settings_LinkedAccounts_MyLinkedAccounts_GoogleVisibility_MeOnly",
          linked_accounts_visibility_friends_google: "Settings_LinkedAccounts_MyLinkedAccounts_GoogleVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_google: "Settings_LinkedAccounts_MyLinkedAccounts_GoogleVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_google: "Settings_LinkedAccounts_MyLinkedAccounts_GoogleVisibility_Everyone",
          linked_accounts_link_amazon: "Settings_LinkedAccounts_LinkAccounts_LinkAmazon",
          linked_accounts_visibility_none_amazon: "Settings_LinkedAccounts_MyLinkedAccounts_AmazonVisibility_MeOnly",
          linked_accounts_visibility_friends_amazon: "Settings_LinkedAccounts_MyLinkedAccounts_AmazonVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_amazon: "Settings_LinkedAccounts_MyLinkedAccounts_AmazonVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_amazon: "Settings_LinkedAccounts_MyLinkedAccounts_AmazonVisibility_Everyone",
          linked_accounts_link_steam: "Settings_LinkedAccounts_LinkAccounts_LinkSteam",
          linked_accounts_visibility_none_steam: "Settings_LinkedAccounts_MyLinkedAccounts_SteamVisibility_MeOnly",
          linked_accounts_visibility_friends_steam: "Settings_LinkedAccounts_MyLinkedAccounts_SteamVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_steam: "Settings_LinkedAccounts_MyLinkedAccounts_SteamVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_steam: "Settings_LinkedAccounts_MyLinkedAccounts_SteamVisibility_Everyone",
          linked_accounts_link_epic: "Settings_LinkedAccounts_LinkAccounts_LinkEpic",
          linked_accounts_visibility_none_epic: "Settings_LinkedAccounts_MyLinkedAccounts_EpicVisibility_MeOnly",
          linked_accounts_visibility_friends_epic: "Settings_LinkedAccounts_MyLinkedAccounts_EpicVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_epic: "Settings_LinkedAccounts_MyLinkedAccounts_EpicVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_epic: "Settings_LinkedAccounts_MyLinkedAccounts_EpicVisibility_Everyone",
          linked_accounts_link_xblpc: "Settings_LinkedAccounts_LinkAccounts_LinkXblPc",
          linked_accounts_visibility_none_xblpc: "Settings_LinkedAccounts_MyLinkedAccounts_XblPcVisibility_MeOnly",
          linked_accounts_visibility_friends_xblpc: "Settings_LinkedAccounts_MyLinkedAccounts_XblPcVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_xblpc: "Settings_LinkedAccounts_MyLinkedAccounts_XblPcVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_xblpc: "Settings_LinkedAccounts_MyLinkedAccounts_XblPcVisibility_Everyone",
          linked_accounts_link_discord: "Settings_LinkedAccounts_LinkAccounts_LinkDiscord",
          linked_accounts_visibility_none_discord: "Settings_LinkedAccounts_MyLinkedAccounts_DiscordVisibility_MeOnly",
          linked_accounts_visibility_friends_discord: "Settings_LinkedAccounts_MyLinkedAccounts_DiscordVisibility_Friends",
          linked_accounts_visibility_friendsAndCrews_discord: "Settings_LinkedAccounts_MyLinkedAccounts_DiscordVisibility_FriendsAndCrews",
          linked_accounts_visibility_everyone_discord: "Settings_LinkedAccounts_MyLinkedAccounts_DiscordVisibility_Everyone",
          toggle_subscribe_to_mailing_list: "Settings_MailingListEmails",
          friend_request_emails_true: "Settings_Notifications_FriendRequestEmails_Yes",
          friend_request_emails_false: "Settings_Notifications_FriendRequestEmails_No",
          crew_invite_emails_true: "Settings_Notifications_CrewInviteEmails_Yes",
          crew_invite_emails_false: "Settings_Notifications_CrewInviteEmails_No",
          direct_message_emails_true: "Settings_Notifications_DirectMessageEmails_Yes",
          direct_message_emails_false: "Settings_Notifications_DirectMessageEmails_No",
          mfa_enroll_start: "MFA_Enroll_Start",
          mfa_enroll_select_device_type: "MFA_Enroll_Select_Device_Type",
          mfa_request_device_registration_request: "MFA_Request_Device_Registration_Request",
          mfa_request_device_registration_error: "MFA_Request_Device_Registration_Error",
          mfa_enroll_verify_error_password_missing: "MFA_Enroll_Verify_Error_Password_Missing",
          mfa_enroll_verify_error_invalid_verification_code: "MFA_Enroll_Verify_Error_Invalid_Verification_Code",
          mfa_enroll_verify_request: "MFA_Enroll_Verify_Request",
          mfa_enroll_verify_error: "MFA_Enroll_Verify_Error",
          mfa_enroll_success: "MFA_Enroll_Success",
          mfa_enroll_cancel: "MFA_Enroll_Cancel",
          mfa_remove_device_request: "MFA_Remove_Device_Request",
          mfa_remove_device_request_error: "MFA_Remove_Device_Request_Error",
          mfa_forget_remembered_machine: "MFA_Forget_Remembered_Machine",
          mfa_remove_device_verify_error_password_missing: "MFA_Remove_Device_Verify_Error_Password_Missing",
          mfa_remove_device_verify_error_invalid_verification_code: "MFA_Remove_Device_Verify_Error_Invalid_Verification_Code",
          mfa_remove_device_verify_request: "MFA_Remove_Device_Verify_Request",
          mfa_remove_device_verify_error: "MFA_Remove_Device_Verify_Error",
          mfa_remove_device_success: "MFA_Remove_Device_Success",
          mfa_remove_device_cancel: "MFA_Remove_Device_Cancel",
          start_account_deletion: "cta_account_delete",
          close_delete_account_modal: "modal_close",
          confirm_account_deletion: "cta_submit",
          agree_to_account_deletion_notices: "cta_agree",
          delete_account_success: "account_delete_success",
          delete_account_error: "alert_error"
        },
        labels: {
          profile_privacy_visibility_me_only: "Visibility Setting: Me Only",
          profile_privacy_visibility_friends: "Visibility Setting: Friends",
          profile_privacy_visibility_friends_and_crews: "Visibility Setting: Friends & Crews",
          profile_privacy_visibility_everyone: "Visibility Setting: Everyone",
          profile_privacy_no: "Visbility Setting: No",
          profile_privacy_yes: "Visbility Setting: Yes",
          subscribed_to_mailing_list: "Subscribed to Mailing List",
          unsubscribed_from_mailing_list: "Unsubscribed from Mailing List",
          device_priority: "Device Priority: Primary",
          device_type: "Device Type: Authenticator App",
          device_type_google: "Device Type: GoogleAuthenticator",
          device_type_fill: "Device Type: ",
          start_account_deletion: "delete account",
          close_delete_account_modal: "self_service_account_deletion_rockstarweb_modal",
          account_deletion_reason: "reason_",
          account_deletion_notice_agree: "i agree",
          account_deletion_success: "account_delete_success_reason_"
        },
        tmTriggers: {
          trackEvent: "ga4TrackEvent",
          trackCustomEvent: "ga4TrackCustomEvent",
          loadConfiguration: "ga4ConfigurationEvent"
        },
        tmVariables: {
          eventName: "gaEventName",
          category: "gaCategory",
          action: "gaAction",
          label: "gaLabel",
          value: "gaValue",
          optNonInteraction: "gaOptNonInteraction",
          virtualPage: "gaVirtualPage",
          variable: "gaVariable",
          time: "gaTime",
          pageLocation: "location",
          pageTitle: "title",
          pageReferrer: "referrer"
        },
        dimensionsMetricsMap: {
          environment: "environment",
          loginState: "loginState",
          memberId: "memberId",
          validationStatus: "validationStatus",
          creationDate: "creationDate",
          creationPath: "creationPath",
          platformsOwned: "platformsOwned",
          gamesOwned: "gamesOwned",
          linkedAccounts: "linkedAccounts",
          currentlyPlaying: "currentlyPlaying",
          isCrewCount: "isCrewCount",
          isFriendCount: "isFriendCount",
          crewCount: "crewCount",
          friendCount: "friendCount",
          memberSince: "memberSince"
        }
      };
      var Qe = r(49785),
        et = r(52542),
        tt = r(92791),
        rt = r(50484),
        nt = (0, q.c)({
          defaultClassName: "se5i7a0",
          variantClassNames: {
            disabled: {
              true: "se5i7a1"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const at = (0, fe.YK)({
        form_confirmation_error_icon_label: {
          defaultMessage: "Error Icon",
          description: "Label to describe the icon image for form error",
          id: "form_confirmation_error_icon_label"
        }
      });

      function it(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            it(e, t, r[t])
          })
        }
        return e
      }

      function st(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function ct(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var lt = (0, a.createContext)(null);

      function dt() {
        var e = (0, a.useContext)(lt);
        if (!e) throw Error("useConfirmationContext can only be used in a Form ConfirmationRoot");
        return e
      }
      var ut = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.name,
            o = e.asChild,
            s = e.children,
            c = ct(e, ["className", "testId", "name", "asChild", "children"]),
            l = o ? tt.DX : "div",
            d = er().isDisabled,
            u = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("e3xv9j0", r)
            }, c);
          return (0, n.jsx)(lt.Provider, {
            value: {
              name: i,
              isDisabled: d
            },
            children: (0, n.jsx)(l, st(ot({
              ref: t
            }, u), {
              children: s
            }))
          })
        }),
        _t = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = ct(e, ["className", "testId", "asChild", "children"]),
            c = dt().name,
            l = (0, Qe.xW)().formState.errors,
            d = i ? tt.DX : "div",
            u = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("b5ba6t0", {
                invalid: Boolean(l[c])
              }, r)
            }, s);
          return (0, n.jsx)(d, st(ot({
            ref: t
          }, u), {
            children: o
          }))
        }),
        ft = (0, a.forwardRef)(function(e, t) {
          var r = e.testId,
            a = ct(e, ["testId"]),
            i = (0, Qe.xW)().control,
            o = dt().name,
            s = dt().isDisabled;
          return (0, n.jsx)(Qe.xI, {
            control: i,
            name: o,
            render: function(e) {
              var i = e.field,
                c = i.onChange,
                l = i.value;
              return (0, n.jsxs)(E.Checkbox.Root, {
                isDisabled: s,
                ref: t,
                size: "LG",
                children: [(0, n.jsx)(E.Checkbox.Input, {
                  name: o,
                  className: "e3xv9j4",
                  isChecked: l,
                  onCheckedChange: c,
                  testId: r
                }), (0, n.jsx)(E.Checkbox.Label, {
                  className: nt({
                    disabled: s
                  }),
                  hideVisually: a.hideLabel,
                  children: a.label
                })]
              })
            }
          })
        }),
        pt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            i = e.testId,
            o = ct(e, ["className", "testId"]),
            s = (0, Qe.xW)().formState.errors,
            c = dt().name,
            l = (0, L.A)(),
            d = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("e3xv9j3", r)
            }, o),
            u = (0, a.useMemo)(function() {
              var e;
              return "string" == typeof(null === (e = s[c]) || void 0 === e ? void 0 : e.message) ? s[c].message : ""
            }, [s[c]]);
          return u && (0, n.jsxs)(E.Body, st(ot({
            size: "SM",
            appearance: "bold",
            ref: t
          }, d), {
            children: [(0, n.jsx)(rt.X, {
              size: "MD",
              label: l.formatMessage(at.form_confirmation_error_icon_label),
              className: "e3xv9j2"
            }), u]
          }))
        });
      const mt = (0, fe.YK)({
        hide_password_label: {
          defaultMessage: "Hide password",
          description: "The label for the hide password icon.",
          id: "hide_password_label"
        },
        show_password_label: {
          defaultMessage: "Show password",
          description: "The label for the show password icon.",
          id: "show_password_label"
        }
      });

      function ht(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            ht(e, t, r[t])
          })
        }
        return e
      }

      function bt(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function yt(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var vt = (0, a.createContext)(null),
        wt = (0, a.forwardRef)(function(e, t) {
          var r, a, i = e.children,
            o = e.overrideErrorMessage,
            s = e.valibotErrorTypesToOverride,
            c = e.name,
            l = e.isDisabled,
            d = void 0 !== l && l,
            u = e.testId,
            _ = yt(e, ["children", "overrideErrorMessage", "valibotErrorTypesToOverride", "name", "isDisabled", "testId"]),
            f = (0, Qe.xW)().formState.errors,
            p = er().isDisabled,
            m = (0, R.v6)({
              "data-testid": u
            }, _),
            h = p || d,
            g = Boolean(f[c]),
            b = (null == s ? void 0 : s.includes(null === (r = f[c]) || void 0 === r ? void 0 : r.type)) && o;
          return (0, n.jsx)(vt.Provider, {
            value: {
              name: c,
              isDisabled: h
            },
            children: (0, n.jsx)(E.TextField.Root, bt(gt({
              isDisabled: h,
              ref: t
            }, m), {
              status: g ? "invalid" : void 0,
              children: (0, n.jsxs)(n.Fragment, {
                children: [i, g && (0, n.jsxs)(E.TextField.StatusRoot, {
                  testId: "".concat(c, "-error"),
                  children: [(0, n.jsx)(E.TextField.StatusIcon, {}), (0, n.jsx)(E.TextField.StatusText, {
                    children: b ? o : null === (a = f[c]) || void 0 === a ? void 0 : a.message
                  })]
                })]
              })
            }))
          })
        }),
        jt = function(e) {
          var t = e.testId,
            r = e.type,
            i = e.linkedValidationFields,
            o = yt(e, ["testId", "type", "linkedValidationFields"]),
            s = (0, L.A)(),
            c = (0, Qe.xW)(),
            l = c.register,
            d = c.watch,
            u = c.trigger,
            _ = c.formState.submitCount,
            f = er().validationMode,
            p = function() {
              var e = (0, a.useContext)(vt);
              if (!e) throw Error("useFieldRootContext can only be used in a Form FieldRoot");
              return e
            }().name,
            m = l(p),
            h = m.ref,
            g = yt(m, ["ref"]),
            b = (0, R.v6)(bt(gt({}, g), {
              "data-testid": t,
              type: r
            }), o),
            y = d(p);
          return (0, a.useEffect)(function() {
            var e;
            null !== (e = null == i ? void 0 : i.length) && void 0 !== e && e && y && "onSubmit" === f && _ > 0 && u(i)
          }, [y]), (0, n.jsxs)(E.TextField.Control, {
            children: [(0, n.jsx)(E.TextField.Input, gt({
              ref: h
            }, b)), "password" === r && (0, n.jsx)(E.TextField.PasswordButton, {
              hidePasswordLabel: s.formatMessage(mt.hide_password_label),
              showPasswordLabel: s.formatMessage(mt.show_password_label),
              type: "button"
            })]
          })
        },
        xt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.children,
            o = yt(e, ["className", "testId", "children"]),
            s = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_1mutbcz0 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdo", r)
            }, o);
          return (0, n.jsx)(E.TextField.Label, bt(gt({
            ref: t
          }, s), {
            children: i
          }))
        }),
        Mt = r(46855),
        kt = r(98876),
        Ot = (0, q.c)({
          defaultClassName: "_3bsh524 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp",
          variantClassNames: {
            value: {
              0: "_3bsh525",
              1: "_3bsh526",
              2: "_3bsh527",
              3: "_3bsh528",
              4: "_3bsh529"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const St = (0, fe.YK)({
        password_summary_grade_0: {
          defaultMessage: "Very Weak",
          description: "The label for the password summary score = 0.",
          id: "password_summary_grade_0"
        },
        password_summary_grade_1: {
          defaultMessage: "Weak",
          description: "The label for the password summary score = 1.",
          id: "password_summary_grade_1"
        },
        password_summary_grade_2: {
          defaultMessage: "Ok",
          description: "The label for the password summary score = 2.",
          id: "password_summary_grade_2"
        },
        password_summary_grade_3: {
          defaultMessage: "Strong",
          description: "The label for the password summary score = 3.",
          id: "password_summary_grade_3"
        },
        password_summary_grade_4: {
          defaultMessage: "Very Strong",
          description: "The label for the password summary score = 4.",
          id: "password_summary_grade_4"
        },
        password_requirement_untested: {
          defaultMessage: "Requirement untested",
          description: "The label for the untested password requirement icon.",
          id: "password_requirement_untested"
        },
        password_requirement_fail: {
          defaultMessage: "Requirement not met",
          description: "The label for the failed password requirement icon.",
          id: "password_requirement_fail"
        },
        password_requirement_success: {
          defaultMessage: "Requirement met",
          description: "The label for the succeeded password requirement icon.",
          id: "password_requirement_met"
        }
      });
      var At = r(59593),
        It = r(98249),
        Pt = r(58671),
        Ct = r(88082);

      function Tt(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var Dt = {
        translations: Pt.A,
        graphs: It.K,
        dictionary: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              Tt(e, t, r[t])
            })
          }
          return e
        }({}, It.z, Ct.z)
      };
      At.u2.setOptions(Dt);
      var Nt = function(e) {
        var t = [];
        return e.message && t.push(e.message), e.pipe && e.pipe.length > 0 && (t = t.concat(e.pipe.map(function(e) {
          return Nt(e)
        }).flat())), t
      };

      function Lt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Et(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Et(e, t, r[t])
          })
        }
        return e
      }

      function qt(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function Gt(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var Ut = (0, a.createContext)(null);

      function Vt() {
        var e = (0, a.useContext)(Ut);
        if (!e) throw Error("usePasswordSummaryContext can only be used in a Form PasswordSummaryRoot");
        return e
      }
      var Ft = (0, a.forwardRef)(function(e, t) {
          var r, i, o, s, c, l = e.className,
            d = e.testId,
            u = e.passwordFieldName,
            _ = e.userInputs,
            f = e.asChild,
            p = e.children,
            m = Gt(e, ["className", "testId", "passwordFieldName", "userInputs", "asChild", "children"]),
            h = (0, Qe.xW)(),
            g = h.trigger,
            b = h.formState,
            y = b.errors,
            v = b.dirtyFields,
            w = b.isSubmitted,
            j = er(),
            x = j.schema,
            M = j.isDisabled,
            k = (0, Qe.xW)().control,
            O = (0, Qe.FH)({
              control: k,
              name: u
            }),
            S = (0, L.A)(),
            A = (s = (0, a.useState)({
              value: 0,
              grade: ""
            }), c = 2, function(e) {
              if (Array.isArray(e)) return e
            }(s) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(s, c) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Lt(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Lt(e, t) : void 0
              }
            }(s, c) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = A[0],
            P = A[1],
            C = new Set(Object.values(null !== (o = null === (r = y[u]) || void 0 === r ? void 0 : r.types) && void 0 !== o ? o : {}).flat()),
            T = (0, a.useCallback)((0, Mt.A)(function(e, t) {
              var r, n = !e || 0 === e.length,
                a = t.size > 0;
              r = n ? 0 : a ? 1 : function(e, t) {
                return (0, At.K1)(e, t).score
              }(e, _);
              var i = S.formatMessage(St["password_summary_grade_".concat(r)]);
              P({
                grade: i,
                value: r
              })
            }), []);
          (0, a.useEffect)(function() {
            O && g(u), T(O, C)
          }, [O, null === (i = y[u]) || void 0 === i ? void 0 : i.type]);
          var D = (0, a.useMemo)(function() {
              if (!x.entries[u]) throw Error("passwordFieldName must be a valid form field in the current Form context");
              return new Set(Nt(x.entries[u]))
            }, [x.entries[u]]),
            N = f ? tt.DX : "div",
            E = (0, R.v6)({
              "data-testid": d,
              className: (0, z.A)("_3bsh520 b5ba6t0", l)
            }, m),
            q = {
              passwordFieldName: u,
              passwordState: C,
              passwordRequirements: D,
              fieldIsDirty: v[u],
              isSubmitted: w,
              passwordStrengthScore: I,
              isDisabled: M
            };
          return (0, n.jsx)(Ut.Provider, {
            value: q,
            children: (0, n.jsx)(N, qt(Rt({
              ref: t
            }, E), {
              children: p
            }))
          })
        }),
        zt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Gt(e, ["className", "testId", "asChild", "children"]),
            c = i ? tt.DX : "div",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh521", r)
            }, s);
          return (0, n.jsx)(c, qt(Rt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        Bt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Gt(e, ["className", "testId", "asChild", "children"]),
            c = i ? tt.DX : "div",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh522", r)
            }, s);
          return (0, n.jsx)(c, qt(Rt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        Ht = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Gt(e, ["className", "testId", "asChild", "children"]),
            c = i ? tt.DX : "p",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh523 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo foundry_tdsdcdt", r)
            }, s);
          return (0, n.jsx)(c, qt(Rt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        Yt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = Gt(e, ["className", "testId"]),
            o = Vt().passwordStrengthScore,
            s = o.grade,
            c = o.value,
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)(Ot({
                value: c
              }), r)
            }, i);
          return (0, n.jsx)("p", qt(Rt({
            ref: t
          }, l), {
            children: s
          }))
        }),
        Wt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = Gt(e, ["className", "testId"]),
            o = Vt().passwordStrengthScore.value,
            s = (0, R.v6)({
              "data-testid": a,
              value: o,
              max: 4,
              className: (0, z.A)("_3bsh52a", r)
            }, i);
          return (0, n.jsx)("progress", Rt({
            ref: t
          }, s))
        }),
        Xt = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = Gt(e, ["className", "testId"]),
            o = Vt(),
            s = o.passwordState,
            c = o.passwordRequirements,
            l = o.fieldIsDirty,
            d = (0, L.A)(),
            u = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh52b", r)
            }, i),
            _ = function(e) {
              return l ? s.has(e) ? (0, n.jsx)(rt.Info, {
                color: kt.LU.alias.color.icon.danger,
                label: d.formatMessage(St.password_requirement_fail),
                size: "MD"
              }) : (0, n.jsx)(rt.CircleCheck, {
                color: kt.LU.alias.color.icon.success,
                label: d.formatMessage(St.password_requirement_success),
                size: "MD"
              }) : (0, n.jsx)(rt.Circle, {
                color: kt.LU.alias.color.icon.disabled,
                label: d.formatMessage(St.password_requirement_untested),
                size: "MD",
                testId: e
              })
            };
          return (0, n.jsx)("div", qt(Rt({
            ref: t
          }, u), {
            children: Array.from(c).map(function(e) {
              return (0, n.jsxs)("div", {
                className: "_3bsh52c",
                children: [_(e), (0, n.jsx)("p", {
                  className: "_3bsh52d foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp",
                  children: e
                })]
              }, e)
            })
          }))
        });

      function Zt(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Zt(e, t, r[t])
          })
        }
        return e
      }

      function $t(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function Jt(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var Qt = (0, a.createContext)(null);

      function er() {
        var e = (0, a.useContext)(Qt);
        if (!e) throw Error("useFormContext can only be used in a Form Root");
        return e
      }
      var tr = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            i = e.testId,
            o = e.asChild,
            s = e.children,
            c = e.schema,
            l = e.defaultValues,
            d = e.passwordField,
            u = e.validationMode,
            _ = void 0 === u ? "onSubmit" : u,
            f = e.isDisabled,
            p = e.onSubmit,
            m = e.onFormInvalid,
            h = Jt(e, ["className", "testId", "asChild", "children", "schema", "defaultValues", "passwordField", "validationMode", "isDisabled", "onSubmit", "onFormInvalid"]),
            g = (0, Qe.mN)({
              resolver: (0, et.c)(c),
              mode: _,
              defaultValues: l,
              criteriaMode: "all"
            }),
            b = g.handleSubmit,
            y = g.formState,
            v = y.errors,
            w = y.isSubmitted,
            j = y.isValid,
            x = y.submitCount,
            M = g.setError,
            k = o ? tt.DX : "form";
          (0, a.useEffect)(function() {
            !f && !j && w && Object.keys(v).length > 0 && (null == m || m(v))
          }, [x]);
          var O = (0, R.v6)({
            "data-testid": i,
            className: (0, z.$)("b5ba6t1", r),
            noValidate: !0
          }, h);
          return (0, n.jsx)(Qt.Provider, {
            value: {
              schema: c,
              isDisabled: null != f && f,
              passwordField: d,
              fieldNames: Object.keys(c.entries),
              validationMode: _
            },
            children: (0, n.jsx)(Qe.Op, $t(Kt({}, g), {
              children: (0, n.jsx)(k, $t(Kt({
                ref: t
              }, O), {
                onSubmit: function(e) {
                  e.preventDefault(), f || b(function(e) {
                    return p({
                      formData: e,
                      setError: M
                    })
                  })(e)
                },
                children: s
              }))
            }))
          })
        }),
        rr = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Jt(e, ["className", "testId", "asChild", "children"]),
            c = i ? tt.DX : "div",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.$)("b5ba6t2", r)
            }, s);
          return (0, n.jsx)(c, $t(Kt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        nr = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Jt(e, ["className", "testId", "asChild", "children"]),
            c = er().isDisabled,
            l = (0, Qe.xW)().formState,
            d = l.isSubmitting,
            u = l.errors,
            _ = i ? tt.DX : E.Button,
            f = (0, R.v6)({
              isDisabled: c || d || Object.keys(u).length > 0,
              "data-testid": a,
              className: (0, z.$)("b5ba6t3", r)
            }, s);
          return (0, n.jsx)(_, $t(Kt({
            ref: t
          }, f), {
            type: "submit",
            children: o
          }))
        });

      function ar(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function ir(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            ar(e, t, r[t])
          })
        }
        return e
      }

      function or(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function sr(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var cr = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = e.testId,
            i = sr(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_17my3do0"
            }, i);
          return (0, n.jsx)("div", or(ir({
            ref: t
          }, o), {
            children: r
          }))
        }),
        lr = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = e.testId,
            i = e.asChild,
            o = sr(e, ["children", "testId", "asChild"]),
            s = i ? tt.DX : "a",
            c = (0, R.v6)({
              "data-testid": a,
              className: "_17my3do1"
            }, o);
          return (0, n.jsx)(s, or(ir({
            ref: t
          }, c), {
            children: r
          }))
        }),
        dr = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = e.testId,
            i = sr(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_17my3do2"
            }, i);
          return (0, n.jsx)("div", or(ir({
            ref: t
          }, o), {
            children: r
          }))
        }),
        ur = r(45357);
      const _r = function(e) {
          var t = e.isLoading,
            r = e.children;
          return t ? (0, n.jsx)(Z, {
            className: "_125nfjq1 _125nfjq0",
            "data-testid": "loader-wrapper",
            children: (0, n.jsx)(ur.a, {})
          }) : r
        },
        fr = (0, fe.YK)({
          security_title: {
            defaultMessage: "2-Step Verification",
            description: "The title for the account settings security page",
            id: "security_title"
          },
          security_mfa_device_title: {
            defaultMessage: "2-Step Verification Device",
            description: "The title for the MFA device section of the security page",
            id: "security_mfa_device_title"
          },
          security_remembered_machines_title: {
            defaultMessage: "My Remembered Devices",
            description: "The title for the mfa remembered machines section of the security page",
            id: "security_remembered_machines_title"
          },
          security_title_aside: {
            defaultMessage: "Add an additional layer of security to help protect your account from unwanted access.",
            description: "The title aside for the account settings security page",
            id: "security_title_aside"
          },
          security_mfa_device_title_aside: {
            defaultMessage: "This is the device you will use to retrieve your Verification Code.",
            description: "The title aside for the MFA device section of the security page",
            id: "security_mfa_device_title_aside"
          },
          security_remembered_machines_aside: {
            defaultMessage: "You can sign in on these devices without using 2-Step Verification.",
            description: "The title aside for the mfa remembered machines",
            id: "security_remembered_machines_aside"
          },
          security_no_auth_label: {
            defaultMessage: "Set up Authenticator",
            description: "The label for the navigation row for setting up an authenticator",
            id: "security_no_auth_label"
          },
          security_no_auth_navigation_aria_label: {
            defaultMessage: "Set up 2-step verification",
            description: "Aria label text for the MFA navigation button on the landing page for no auth",
            id: "security_no_auth_navigation_icon_aria_label"
          },
          security_header_nav_aria_label: {
            defaultMessage: "Back to the security landing page",
            description: "Aria label text for the MFA back navigation button on the header for auth setup",
            id: "security_header_nav_aria_label"
          },
          security_setup_qrcode_label: {
            defaultMessage: "Setup with QR Code",
            description: "The label for the QR code box",
            id: "security_setup_qrcode_label"
          },
          security_setup_qrcode_sublabel: {
            defaultMessage: "Using your Authenticator App, scan this QR code and enter the generated Verification Code below.",
            description: "The sublabel for the QR code box",
            id: "security_setup_qrcode_sublabel"
          },
          security_setup_qrcode_link: {
            defaultMessage: "Scan Not Working?",
            description: "The helper link for the QR code box",
            id: "security_setup_qrcode_link"
          },
          security_setup_authenticator_code_field_label: {
            defaultMessage: "Enter Authenticator Code",
            description: "The label for the authenticator code form input",
            id: "security_setup_authenticator_code_field_label"
          },
          security_setup_verification_code_field_placeholder: {
            defaultMessage: "XXXXXX",
            description: "The placeholder for the verification code form input",
            id: "security_setup_verification_code_field_placeholder"
          },
          security_setup_verification_code_field_error_text: {
            defaultMessage: "Verification code is invalid",
            description: "The error text for the verification code form input",
            id: "security_setup_verification_code_field_error_text"
          },
          security_setup_password_field_label: {
            defaultMessage: "Current Password",
            description: "The label for the password form input",
            id: "security_setup_password_field_label"
          },
          security_setup_password_field_placeholder: {
            defaultMessage: "Enter current password",
            description: "The placeholder for the password form input",
            id: "security_setup_password_field_placeholder"
          },
          security_setup_password_field_error_text: {
            defaultMessage: "Incorrect password",
            description: "The error text for the password form input",
            id: "security_setup_password_field_error_text"
          },
          security_setup_verify_button_text: {
            defaultMessage: "Verify",
            description: "The text for the verify form submit button",
            id: "security_setup_verify_button_text"
          },
          security_setup_modal_title: {
            defaultMessage: "Scan Not Working?",
            description: "The text for the Scan not working modal title",
            id: "security_setup_modal_title"
          },
          security_setup_modal_description: {
            defaultMessage: "Enter the Secret Key in your Authenticator App to generate a Verification Code.",
            description: "The text for the Scan not working modal description",
            id: "security_setup_modal_description"
          },
          security_setup_modal_copy_button_text: {
            defaultMessage: "Copy Code",
            description: "The text for the Scan not working modal copy code button",
            id: "security_setup_modal_copy_button_text"
          },
          security_setup_modal_copy_toast_text: {
            defaultMessage: "Code successfully copied",
            description: "The text for the Scan not working modal toast that appears when clicking copy code button",
            id: "security_setup_modal_copy_toast_text"
          },
          security_status_sublabel_text: {
            defaultMessage: "Authenticated via Authenticator App",
            description: "The text for the linked MFA provider sublabel",
            id: "security_status_sublabel_text"
          },
          security_status_unlink_button_text: {
            defaultMessage: "Unlink",
            description: "The text for the unlink MFA provider button",
            id: "security_status_sunlink_button_text"
          },
          security_status_forget_machine_button_text: {
            defaultMessage: "Forget Device",
            description: "The text for the button that forgets a remembered MFA machine",
            id: "security_status_forget_machine_button_text"
          },
          security_status_remembered_machine_last_ip: {
            defaultMessage: "Last IP: {ip}",
            description: "text showing the user what IP the remembered machine was last used from",
            id: "security_status_remembered_machine_last_ip"
          },
          security_status_remembered_machine_last_seen: {
            defaultMessage: "Last used: {lastSeen}",
            description: "text showing the user when the remembered machine was last seen used",
            id: "security_status_remembered_machine_last_seen"
          },
          security_status_forgot_device_toast_confirmation_text: {
            defaultMessage: "Device forgotten",
            description: "message when the user's remembered mfa device has been successfully forgotten",
            id: "security_status_forgot_device_toast_confirmation_text"
          },
          security_status_no_remembered_devices_title: {
            defaultMessage: "No remembered devices",
            description: "title when the user does not have any MFA remembered devices",
            id: "security_status_no_remembered_devices_title"
          },
          security_status_no_remembered_devices_title_aside: {
            defaultMessage: "You haven't signed in and remembered this account on any devices yet.",
            description: "message when the user does not have any MFA remembered devices",
            id: "security_status_no_remembered_devices_title_aside"
          },
          security_status_remembered_devices_spinner_label: {
            defaultMessage: "Remembered Devices loading spinner",
            description: "Label describing the remembered devices loading spinner",
            id: "security_status_remembered_devices_spinner_label"
          }
        }),
        pr = (0, fe.YK)({
          overview_created_prefix: {
            defaultMessage: "Created on",
            description: "The prefix before showing the account created date label.",
            id: "overview_created_prefix"
          },
          overview_heading_delete_account: {
            defaultMessage: "Delete Account",
            description: "The headline for the Delete Account section.",
            id: "overview_heading_delete_account"
          },
          overview_delete_account_description: {
            defaultMessage: "Deleting your Rockstar Games account is permanent. You will be required to verify your account and confirm that you will no longer be able to access specific Rockstar Games titles and services.",
            description: "The text that explains how delete your account works.",
            id: "overview_delete_account_description"
          },
          overview_heading_profile_details: {
            defaultMessage: "Profile Details",
            description: "The headline for the Profile Details section.",
            id: "overview_heading_profile_details"
          },
          overview_data_usage: {
            defaultMessage: "Rockstar Games uses the information on this page to provide you with access to our services, process requests, and respond to technical issues. Incorrect information may limit your ability to participate in some activities.",
            description: "The legal information about how Rockstar Games uses account data.",
            id: "overview_data_usage_overview"
          },
          overview_email_sub_label: {
            defaultMessage: "Email",
            description: "The heading label for the e-mail section.",
            id: "overview_email_sub_label"
          },
          overview_profile_details_change_email_link_description: {
            defaultMessage: "change email",
            description: "The label stating the change email link destination",
            id: "overview_profile_details_change_email_link_description"
          },
          overview_email_button_label: {
            defaultMessage: "Change email",
            description: "The aria-label for the e-mail button link.",
            id: "overview_email_button_label"
          },
          overview_password_sub_label: {
            defaultMessage: "Password",
            description: "The heading label for the password section.",
            id: "overview_password_sub_label"
          },
          overview_profile_details_change_password_link_description: {
            defaultMessage: "change password",
            description: "The label stating the change password link destination",
            id: "overview_profile_details_change_password_link_description"
          },
          overview_password_button_label: {
            defaultMessage: "Change password",
            description: "The aria-label for the password button link.",
            id: "overview_password_button_label"
          },
          overview_nickname_sub_label: {
            defaultMessage: "Nickname",
            description: "The heading label for the nickname section.",
            id: "overview_nickname_sub_label"
          },
          overview_profile_details_change_nickname_link_description: {
            defaultMessage: "change nickname",
            description: "The label stating the change nickname link destination",
            id: "overview_profile_details_change_nickname_link_description"
          },
          overview_nickname_button_label: {
            defaultMessage: "Edit nickname",
            description: "The aria-label for the nickname button link.",
            id: "overview_nickname_button_label"
          },
          overview_dateofbirth_sub_label: {
            defaultMessage: "Date of Birth",
            description: "The heading label for the date of birth section.",
            id: "overview_dateofbirth_sub_label"
          },
          overview_heading_regional_details: {
            defaultMessage: "Regional Details",
            description: "The headline for the Regional Details section.",
            id: "overview_heading_regional_details"
          },
          overview_country_sub_label: {
            defaultMessage: "Country / Region",
            description: "The heading label for the country select section.",
            id: "overview_country_sub_label"
          },
          overview_language_sub_label: {
            defaultMessage: "Language",
            description: "The heading label for the language select section.",
            id: "overview_language_sub_label"
          },
          overview_language_dropdown_label: {
            defaultMessage: "Select language",
            description: "Label to the language dropdown.",
            id: "overview_language_dropdown_label"
          },
          overview_country_dropdown_label: {
            defaultMessage: "Select country",
            description: "Label to the country dropdown.",
            id: "overview_country_dropdown_label"
          },
          overview_country_spinner_label: {
            defaultMessage: "Countries spinner",
            description: "Label describing the countries spinner",
            id: "overview_country_spinner_label"
          },
          overview_delete_account_ineligible: {
            defaultMessage: "Your account is not eligible for deletion. Contact our support team to delete your account.",
            description: "The text that explains that the account is ineligible for deletion.",
            id: "overview_delete_account_ineligible"
          },
          overview_delete_account_pending: {
            defaultMessage: "Account Deletion request received. In order to proceed with this request you must first verify your account.",
            description: "The text that explains that the delete account request is pending.",
            id: "overview_delete_account_pending"
          },
          overview_delete_account_button_label: {
            defaultMessage: "Delete Account",
            description: "The button text to delete an account.",
            id: "overview_delete_account_button_label"
          },
          overview_delete_account_button_aria_label: {
            defaultMessage: "Delete account",
            description: "The button text to delete an account.",
            id: "overview_delete_account_button_aria_label"
          },
          overview_profile_back_button_label: {
            defaultMessage: "Back to Profile",
            description: "Link to go back to the profile settings page.",
            id: "overview_profile_back_button_label"
          }
        }),
        mr = (0, fe.YK)({
          password_change_title: {
            defaultMessage: "Password",
            description: "The label for new email field.",
            id: "password_change_title"
          },
          password_change_error_password_required: {
            defaultMessage: "Password is required",
            description: "Error shown when not entering password.",
            id: "password_change_error_password_required"
          },
          password_change_current_password_error_text: {
            defaultMessage: "Incorrect password",
            description: "Error shown when current password is incorrect",
            id: "password_change_current_password_error_text"
          },
          password_change_error_min_length: {
            defaultMessage: "Password must be at least {number} characters long",
            description: "Error shown when password is not long enough",
            id: "password_change_error_min_length"
          },
          password_change_error_max_length: {
            defaultMessage: "Password must not exceed {number} characters",
            description: "Error shown when password is not long enough",
            id: "password_change_error_max_length"
          },
          password_change_error_capital_letters: {
            defaultMessage: "Password must contain at least one capital letter",
            description: "Error shown when there is no capital letter.",
            id: "password_change_error_capital_letters"
          },
          password_change_error_lowercase_letters: {
            defaultMessage: "Password must contain at least one lowercase letter",
            description: "Error shown when there is no lowercase letter.",
            id: "password_change_error_lowercase_letters"
          },
          password_change_error_numerical: {
            defaultMessage: "Password must contain at least one number",
            description: "Error shown when there are no numbers.",
            id: "password_change_error_numerical"
          },
          password_change_error_must_match: {
            defaultMessage: "Passwords must match",
            description: "Error shown when passwords do not match.",
            id: "password_change_error_must_match"
          },
          password_change_error_cannot_be_the_same: {
            defaultMessage: "New password must be different than the current password",
            description: "Error shown when the new password is the same as the old password",
            id: "password_change_error_cannot_be_the_same"
          },
          password_change_error_symbol: {
            defaultMessage: "Password must include one of the following symbols: ({symbols})",
            description: "Error shown when passwords do not match.",
            id: "password_change_error_symbol"
          },
          password_change_error_mfa: {
            defaultMessage: "Verification code is invalid",
            description: "The error text for the mfa code form input",
            id: "password_change_error_mfa"
          },
          password_change_current_password_label: {
            defaultMessage: "Current Password",
            description: "The label for the current password field.",
            id: "password_change_current_password_label"
          },
          password_change_new_password_label: {
            defaultMessage: "New Password",
            description: "Label for the new password field.",
            id: "password_change_new_password_label"
          },
          password_change_password_strength_label: {
            defaultMessage: "Password Strength",
            description: "The label for the password strength component.",
            id: "password_change_password_strength_label"
          },
          password_change_confirm_password_label: {
            defaultMessage: "Confirm New Password",
            description: "The label for the confirm password field.",
            id: "password_change_confirm_password_label"
          },
          password_change_save_changes_label: {
            defaultMessage: "Save Changes",
            description: "The label for the submit form button.",
            id: "password_change_save_changes_label"
          },
          password_change_success: {
            defaultMessage: "Password successfully updated.",
            description: "The label for the success toast.",
            id: "password_change_success"
          },
          password_change_requirements_not_met: {
            defaultMessage: "Password does not meet requirements",
            description: "Error message for when the new password does not meet requirements",
            id: "password_change_requirements_not_met"
          }
        });

      function hr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function gr(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function br(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var yr = "confirm",
        vr = "email",
        wr = "mfaCode",
        jr = "password",
        xr = (0, Fe.eU)(!1);
      const Mr = function() {
        var e, t, r, o = (0, L.A)(),
          s = (0, i.useNavigate)(),
          c = qe(),
          l = (t = (0, he.fp)(xr), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return hr(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? hr(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          d = l[0],
          u = l[1],
          _ = an({
            fetchOnInitial: !1,
            route: Ye.RequestUpdateEmail
          }),
          f = _.fetch,
          p = _.loading,
          m = an({
            route: Ye.GetMfaDevices
          }),
          h = m.data,
          g = m.loading,
          b = an({
            fetchOnInitial: !1,
            route: Ye.PasswordRequirements
          }),
          y = b.data,
          v = b.loading,
          w = an({
            fetchOnInitial: !1,
            route: Ye.ProfileOverview
          }).data,
          j = Number(null == h ? void 0 : h.length) > 0,
          x = (0, a.useMemo)(function() {
            var e;
            return $e.pipe($e.object(function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              }(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                  br(e, t, r[t])
                })
              }
              return e
            }((br(e = {}, vr, $e.pipe($e.string(), $e.nonEmpty(o.formatMessage(Ke.email_change_error_email)), $e.email(o.formatMessage(Ke.email_change_error_email)), $e.regex(/^[^\\+]*$/, o.formatMessage(Ke.email_change_error_email)), $e.toLowerCase(), $e.notValue(null == w ? void 0 : w.email.toLowerCase(), o.formatMessage(Ke.email_change_must_not_match_error_email)))), br(e, jr, $e.pipe($e.string(), $e.nonEmpty(o.formatMessage(mr.password_change_error_password_required)))), e), j ? br({}, wr, $e.pipe($e.string(), $e.minLength(6, o.formatMessage(fr.security_setup_verification_code_field_error_text)))) : null), br({}, yr, $e.pipe($e.boolean(), $e.check(function(e) {
              return !0 === e
            }, o.formatMessage(Ke.email_change_confirm_checkbox_error)))))))
          }, [y, j, w]),
          M = g || v;
        return (0, n.jsx)(_r, {
          isLoading: M,
          children: (0, n.jsxs)("div", {
            className: "pb0kad0",
            "data-testid": "emailPage",
            children: [(0, n.jsxs)(cr, {
              children: [(0, n.jsx)(lr, {
                asChild: !0,
                children: (0, n.jsx)(E.IconButton, {
                  icon: "ChevronLeft",
                  appearance: "tertiary",
                  size: "LG",
                  label: o.formatMessage(pr.overview_profile_back_button_label),
                  testId: "emailPageBackButton",
                  "data-ga": Je.action.close_edit_email,
                  onClick: function() {
                    s("/account")
                  }
                })
              }), (0, n.jsx)(dr, {
                children: (0, n.jsx)(E.Heading, {
                  level: 6,
                  children: o.formatMessage(Ke.email_change_page_title)
                })
              })]
            }), d && (0, n.jsxs)(E.Alert.Root, {
              status: "information",
              background: "two-tone",
              testId: "changeEmailSubmitted",
              children: [(0, n.jsxs)(E.Alert.Header, {
                children: [(0, n.jsx)(E.Alert.Icon, {
                  size: "XL"
                }), (0, n.jsx)(E.Alert.Title, {
                  children: o.formatMessage(Ke.email_change_alert_title)
                }), (0, n.jsx)(E.Alert.CloseButton, {
                  label: "close",
                  onPress: function() {
                    return u(!1)
                  },
                  testId: "alertCloseButton"
                })]
              }), (0, n.jsx)(E.Alert.Body, {
                children: (0, n.jsx)(E.Alert.Description, {
                  children: o.formatMessage(Ke.email_change_alert_description)
                })
              })]
            }), (0, n.jsxs)(tr, {
              schema: x,
              defaultValues: {
                email: "",
                password: "",
                mfaCode: "",
                confirm: !1
              },
              onSubmit: function(e) {
                var t, r = e.formData,
                  n = e.setError;
                return (t = function() {
                  var e, t, a, i;
                  return function(e, t) {
                    var r, n, a, i = {
                        label: 0,
                        sent: function() {
                          if (1 & a[0]) throw a[1];
                          return a[1]
                        },
                        trys: [],
                        ops: []
                      },
                      o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                      return this
                    }), o;

                    function s(s) {
                      return function(c) {
                        return function(s) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                            switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                              case 0:
                              case 1:
                                a = s;
                                break;
                              case 4:
                                return i.label++, {
                                  value: s[1],
                                  done: !1
                                };
                              case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                              case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                              default:
                                if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                  i = 0;
                                  continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                  i.label = s[1];
                                  break
                                }
                                if (6 === s[0] && i.label < a[1]) {
                                  i.label = a[1], a = s;
                                  break
                                }
                                if (a && i.label < a[2]) {
                                  i.label = a[2], i.ops.push(s);
                                  break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                            }
                            s = t.call(e, i)
                          } catch (e) {
                            s = [6, e], n = 0
                          } finally {
                            r = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(l) {
                    switch (l.label) {
                      case 0:
                        return e = {
                          email: r[vr],
                          password: r[jr]
                        }, j && (e.mfaCode = r[wr]), [4, f({
                          body: e
                        })];
                      case 1:
                        return t = l.sent(), (a = t.error) ? (u(!1), (i = Zr[a.code]) && n(i.field, {
                          message: o.formatMessage(i.message)
                        })) : (u(!0), c.displayNewToast({
                          appearance: "information",
                          message: o.formatMessage(Ke.email_change_alert_description),
                          title: o.formatMessage(Ke.email_change_alert_title)
                        }), s("/account")), [2]
                    }
                  })
                }, function() {
                  var e = this,
                    r = arguments;
                  return new Promise(function(n, a) {
                    var i = t.apply(e, r);

                    function o(e) {
                      gr(i, n, a, o, s, "next", e)
                    }

                    function s(e) {
                      gr(i, n, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })()
              },
              children: [(0, n.jsxs)(rr, {
                children: [(0, n.jsxs)(wt, {
                  name: vr,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: o.formatMessage(Ke.email_change_new_email_label)
                  }), (0, n.jsx)(jt, {
                    type: "email",
                    maxLength: 254,
                    placeholder: o.formatMessage(Ke.email_change_new_email_placeholder),
                    testId: "changeEmailNewEmail"
                  })]
                }), (0, n.jsxs)(wt, {
                  name: jr,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: o.formatMessage(Ke.email_change_password_label)
                  }), (0, n.jsx)(jt, {
                    type: "password",
                    placeholder: o.formatMessage(Ke.email_change_password_placeholder),
                    testId: "changeEmailPassword",
                    maxLength: null !== (e = null == y ? void 0 : y.maximumLoginLength) && void 0 !== e ? e : 128
                  })]
                }), j && (0, n.jsxs)(wt, {
                  name: wr,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: o.formatMessage(fr.security_setup_authenticator_code_field_label)
                  }), (0, n.jsx)(jt, {
                    placeholder: o.formatMessage(fr.security_setup_verification_code_field_placeholder),
                    testId: "changeEmailMfaCode"
                  })]
                })]
              }), (0, n.jsxs)(ut, {
                name: yr,
                children: [(0, n.jsx)(_t, {
                  children: (0, n.jsx)(ft, {
                    label: o.formatMessage(Ke.email_change_terms_body),
                    testId: "changeEmailConfirmation"
                  })
                }), (0, n.jsx)(pt, {
                  testId: "confirm-error"
                })]
              }), (0, n.jsx)(nr, {
                appearance: "primary",
                "data-ga": Je.action.save_email,
                isDisabled: p,
                isLoading: p,
                size: "LG",
                testId: "changeEmailSubmitButton",
                children: o.formatMessage(Ke.email_change_submit_button)
              })]
            })]
          })
        })
      };

      function kr(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var Or = "password",
        Sr = "verificationCode",
        Ar = function(e) {
          var t, r = e.isLoading,
            i = e.onFormInvalid,
            o = e.onSubmit,
            s = (0, L.A)(),
            c = an({
              route: Ye.PasswordRequirements,
              fetchOnInitial: !1
            }).data,
            l = (0, a.useMemo)(function() {
              var e;
              return $e.pipe($e.object((kr(e = {}, Sr, $e.pipe($e.string(), $e.nonEmpty(s.formatMessage(fr.security_setup_verification_code_field_error_text)), $e.minLength(6, s.formatMessage(fr.security_setup_verification_code_field_error_text)))), kr(e, Or, $e.pipe($e.string(), $e.nonEmpty(s.formatMessage(mr.password_change_error_password_required)))), e)))
            }, [c]);
          return (0, n.jsxs)(tr, {
            onFormInvalid: i,
            onSubmit: o,
            schema: l,
            testId: "password-mfa-code-form",
            children: [(0, n.jsxs)(rr, {
              children: [(0, n.jsxs)(wt, {
                isRequired: !0,
                name: Sr,
                children: [(0, n.jsx)(xt, {
                  children: s.formatMessage(fr.security_setup_authenticator_code_field_label)
                }), (0, n.jsx)(jt, {
                  placeholder: s.formatMessage(fr.security_setup_verification_code_field_placeholder),
                  testId: "mfa-code-verification-input"
                })]
              }), (0, n.jsxs)(wt, {
                name: Or,
                isRequired: !0,
                children: [(0, n.jsx)(xt, {
                  children: s.formatMessage(fr.security_setup_password_field_label)
                }), (0, n.jsx)(jt, {
                  placeholder: s.formatMessage(fr.security_setup_password_field_placeholder),
                  testId: "mfa-password-verification-input",
                  type: "password",
                  maxLength: null !== (t = null == c ? void 0 : c.maximumLoginLength) && void 0 !== t ? t : 128
                })]
              })]
            }), (0, n.jsx)(nr, {
              appearance: "primary",
              isLoading: r,
              size: "LG",
              testId: "mfa-verification-submit",
              children: s.formatMessage(fr.security_setup_verify_button_text)
            })]
          })
        };
      const Ir = (0, fe.YK)({
        nickname_change_title: {
          defaultMessage: "Nickname",
          description: "Title of the page.",
          id: "nickname_change_title"
        },
        nickname_change_back_link_icon: {
          defaultMessage: "Back",
          description: "The label for the back link icon.",
          id: "nickname_change_back_link_icon"
        },
        nickname_change_error_valid_nickname: {
          defaultMessage: "This Nickname violates our guidelines.",
          description: "Error shown when an invalid or inappropriate nickname was entered.",
          id: "nickname_change_error_valid_nickname"
        },
        nickname_change_nickname_label: {
          defaultMessage: "New Nickname",
          description: "Label for the new nick name field.",
          id: "nickname_change_nickname_label"
        },
        nickname_change_nickname_placeholder: {
          defaultMessage: "Enter new nickname",
          description: "Placeholder text for the new nick name field.",
          id: "nickname_change_nickname_placeholder"
        },
        nickname_change_current_password_label: {
          defaultMessage: "Current Password",
          description: "Label for the current password field.",
          id: "nickname_change_current_password_label"
        },
        nickname_change_current_password_placeholder: {
          defaultMessage: "Enter password",
          description: "Placeholder text for current password field.",
          id: "nickname_change_current_password_placeholder"
        },
        nickname_change_confirm_terms: {
          defaultMessage: "Rockstar Games account Nicknames may only be changed once every 365 days. Confirm any changes by checking the box and selecting Save Changes.",
          description: "The warning terms and conditions box.",
          id: "nickname_change_confirm_terms"
        },
        nickname_change_confirm_checkbox_error: {
          defaultMessage: "Confirm these changes before proceeding.",
          description: "The error message when the user does not accept the terms.",
          id: "nickname_change_confirm_checkbox_error"
        },
        nickname_change_save_changes: {
          defaultMessage: "Save Changes",
          description: "Label for the save button.",
          id: "nickname_change_save_changes"
        },
        nickname_change_alert_title: {
          defaultMessage: "Can't Change Nickname",
          description: "Title for the alert message.",
          id: "nickname_change_alert_title"
        },
        nickname_change_alert_description: {
          defaultMessage: "Your Rockstar Games account Nickname was changed {lastChangedDate}. You may change your Nickname again after {unlockedDate}.",
          description: "The alert to notify the user that their name can't be changed.",
          id: "nickname_change_alert_description"
        },
        nickname_change_new_nickname_invalid: {
          defaultMessage: "Invalid nickname",
          description: "The error text for new nickname field.",
          id: "nickname_change_new_nickname_invalid"
        },
        nickname_change_new_nickname_same: {
          defaultMessage: "New nickname must not match the existing nickname",
          description: "The error text for entering the same nickname as existing nickname.",
          id: "nickname_change_new_nickname_same"
        },
        nickname_change_error_nickname_required: {
          defaultMessage: "Nickname is required",
          description: "Error shown when not entering nickname.",
          id: "nickname_change_error_nickname_required"
        },
        nickname_change_error_invalid_characters: {
          defaultMessage: "Nickname can only contain letters, numbers, hyphens and underscores",
          description: "Error shown when entering nickname with invalid characters.",
          id: "nickname_change_error_invalid_characters"
        },
        nickname_change_error_min_length: {
          defaultMessage: "Nickname must be at least {number} characters long",
          description: "Error shown when nickname is not long enough.",
          id: "nickname_change_error_min_length"
        },
        nickname_change_error_max_length: {
          defaultMessage: "Nickname must be shorter than {number} characters",
          description: "Error shown when nickname is too long.",
          id: "nickname_change_error_max_length"
        },
        nickname_change_error_already_used: {
          defaultMessage: "This nickname has already been taken",
          description: "Error shown when nickname has already been taken.",
          id: "nickname_change_error_already_used"
        },
        nickname_change_success: {
          defaultMessage: "Nickname successfully updated.",
          description: "The label for the success toast.",
          id: "nickname_change_success"
        }
      });
      var Pr = function(e) {
          var t = e.dateString,
            r = e.locale;
          return (0, new Intl.DateTimeFormat(r, {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format)(Date.parse(t))
        },
        Cr = function(e) {
          var t = e.dateString,
            r = e.locale;
          return (0, new Intl.DateTimeFormat(r, {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format)(Date.parse(t))
        };

      function Tr(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function Dr(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var Nr = "nickname",
        Lr = "password",
        Er = "mfaCode",
        Rr = "confirm";
      const qr = function() {
        var e, t = (0, L.A)(),
          r = (0, i.useNavigate)(),
          o = qe(),
          s = an({
            route: Ye.GetMfaDevices
          }),
          c = s.loading,
          l = s.data,
          d = an({
            route: Ye.UpdateNickname,
            fetchOnInitial: !1
          }),
          u = d.fetch,
          _ = d.loading,
          f = an({
            route: Ye.ProfileOverview,
            fetchOnInitial: !1
          }),
          p = f.fetch,
          m = f.loading,
          h = f.data,
          g = f.loading,
          b = an({
            route: Ye.PasswordRequirements,
            fetchOnInitial: !1
          }),
          y = b.data,
          v = b.loading,
          w = Number(null == l ? void 0 : l.length) > 0,
          j = (0, a.useMemo)(function() {
            var e;
            return $e.pipe($e.object(function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              }(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                  Dr(e, t, r[t])
                })
              }
              return e
            }((Dr(e = {}, Nr, $e.pipe($e.string(), $e.nonEmpty(t.formatMessage(Ir.nickname_change_error_nickname_required)), $e.minLength(6, t.formatMessage(Ir.nickname_change_error_min_length, {
              number: 6
            })), $e.maxLength(16, t.formatMessage(Ir.nickname_change_error_max_length, {
              number: 16
            })), $e.regex(/^([a-zA-Z0-9_-]*)$/, t.formatMessage(Ir.nickname_change_error_invalid_characters)))), Dr(e, Lr, $e.pipe($e.string(), $e.nonEmpty(t.formatMessage(mr.password_change_error_password_required)))), e), w ? Dr({}, Er, $e.pipe($e.string(), $e.minLength(6, t.formatMessage(fr.security_setup_verification_code_field_error_text)))) : null), Dr({}, Rr, $e.pipe($e.boolean(), $e.check(function(e) {
              return !0 === e
            }, t.formatMessage(Ir.nickname_change_confirm_checkbox_error)))))))
          }, [w, v]),
          x = c || g || v,
          M = Boolean(!(null == h ? void 0 : h.nicknameCanBeUpdated) && (null == h ? void 0 : h.nicknameLastUpdatedDate) && (null == h ? void 0 : h.nicknameUpdateLastCooldownDate));
        return (0, n.jsx)(_r, {
          isLoading: x,
          children: h && (0, n.jsxs)("div", {
            className: "_1jp5d9t0",
            "data-testid": "nicknamePage",
            children: [(0, n.jsxs)(cr, {
              children: [(0, n.jsx)(lr, {
                asChild: !0,
                children: (0, n.jsx)(E.IconButton, {
                  icon: "ChevronLeft",
                  appearance: "tertiary",
                  size: "LG",
                  label: t.formatMessage(pr.overview_profile_back_button_label),
                  testId: "nicknamePageBackButton",
                  "data-ga": Je.action.close_edit_nickname,
                  onClick: function() {
                    r("/account")
                  }
                })
              }), (0, n.jsx)(dr, {
                children: (0, n.jsx)(E.Heading, {
                  level: 6,
                  children: t.formatMessage(Ir.nickname_change_title)
                })
              })]
            }), M && (0, n.jsxs)(E.Alert.Root, {
              status: "warning",
              background: "two-tone",
              "data-testid": "recentlyUpdatedAlert",
              children: [(0, n.jsxs)(E.Alert.Header, {
                children: [(0, n.jsx)(E.Alert.Icon, {
                  size: "XL"
                }), (0, n.jsx)(E.Alert.Title, {
                  children: t.formatMessage(Ir.nickname_change_alert_title)
                })]
              }), (0, n.jsx)(E.Alert.Body, {
                children: (0, n.jsx)(E.Alert.Description, {
                  children: t.formatMessage(Ir.nickname_change_alert_description, {
                    lastChangedDate: Pr({
                      dateString: h.nicknameLastUpdatedDate,
                      locale: t.locale
                    }),
                    unlockedDate: Pr({
                      dateString: h.nicknameUpdateLastCooldownDate,
                      locale: t.locale
                    })
                  })
                })
              })]
            }), (0, n.jsxs)(tr, {
              defaultValues: {
                email: "",
                password: "",
                mfaCode: "",
                confirm: !1
              },
              isDisabled: M,
              onSubmit: function(e) {
                var n, a = e.formData,
                  i = e.setError;
                return (n = function() {
                  var e, n, s, c;
                  return function(e, t) {
                    var r, n, a, i = {
                        label: 0,
                        sent: function() {
                          if (1 & a[0]) throw a[1];
                          return a[1]
                        },
                        trys: [],
                        ops: []
                      },
                      o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                      return this
                    }), o;

                    function s(s) {
                      return function(c) {
                        return function(s) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                            switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                              case 0:
                              case 1:
                                a = s;
                                break;
                              case 4:
                                return i.label++, {
                                  value: s[1],
                                  done: !1
                                };
                              case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                              case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                              default:
                                if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                  i = 0;
                                  continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                  i.label = s[1];
                                  break
                                }
                                if (6 === s[0] && i.label < a[1]) {
                                  i.label = a[1], a = s;
                                  break
                                }
                                if (a && i.label < a[2]) {
                                  i.label = a[2], i.ops.push(s);
                                  break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                            }
                            s = t.call(e, i)
                          } catch (e) {
                            s = [6, e], n = 0
                          } finally {
                            r = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(l) {
                    switch (l.label) {
                      case 0:
                        return e = {
                          password: a[Lr],
                          nickname: a[Nr]
                        }, w && (e.mfaCode = a[Er]), [4, u({
                          body: e
                        })];
                      case 1:
                        return n = l.sent(), (s = n.error) ? ((c = Zr[s.code]) && i(c.field, {
                          message: t.formatMessage(c.message)
                        }), [3, 4]) : [3, 2];
                      case 2:
                        return o.displayNewToast({
                          appearance: "success",
                          message: t.formatMessage(Ir.nickname_change_success)
                        }), [4, p({})];
                      case 3:
                        l.sent(), r("/account"), l.label = 4;
                      case 4:
                        return [2]
                    }
                  })
                }, function() {
                  var e = this,
                    t = arguments;
                  return new Promise(function(r, a) {
                    var i = n.apply(e, t);

                    function o(e) {
                      Tr(i, r, a, o, s, "next", e)
                    }

                    function s(e) {
                      Tr(i, r, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })()
              },
              schema: j,
              children: [(0, n.jsxs)(rr, {
                children: [(0, n.jsxs)(wt, {
                  name: Nr,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: t.formatMessage(Ir.nickname_change_nickname_label)
                  }), (0, n.jsx)(jt, {
                    placeholder: t.formatMessage(Ir.nickname_change_nickname_placeholder),
                    testId: "newNicknameInput"
                  })]
                }), (0, n.jsxs)(wt, {
                  name: Lr,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: t.formatMessage(Ir.nickname_change_current_password_label)
                  }), (0, n.jsx)(jt, {
                    type: "password",
                    placeholder: t.formatMessage(Ir.nickname_change_current_password_placeholder),
                    testId: "updateNicknamePasswordInput",
                    maxLength: null !== (e = null == y ? void 0 : y.maximumLoginLength) && void 0 !== e ? e : 128
                  })]
                }), w && (0, n.jsxs)(wt, {
                  name: Er,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: t.formatMessage(fr.security_setup_authenticator_code_field_label)
                  }), (0, n.jsx)(jt, {
                    placeholder: t.formatMessage(fr.security_setup_verification_code_field_placeholder),
                    testId: "updateNicknameMfaCodeInput"
                  })]
                }), (0, n.jsxs)(ut, {
                  name: Rr,
                  children: [(0, n.jsx)(_t, {
                    children: (0, n.jsx)(ft, {
                      testId: "termsConfirmation",
                      label: t.formatMessage(Ir.nickname_change_confirm_terms)
                    })
                  }), (0, n.jsx)(pt, {
                    testId: "confirm-error"
                  })]
                })]
              }), (0, n.jsx)(nr, {
                testId: "submitNicknameButton",
                size: "LG",
                appearance: "primary",
                isDisabled: !h.nicknameCanBeUpdated || _ || m,
                isLoading: _ || m,
                "data-ga": Je.action.save_nickname,
                children: t.formatMessage(Ir.nickname_change_save_changes)
              })]
            })]
          })
        })
      };

      function Gr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Ur(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function Vr(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Vr(e, t, r[t])
          })
        }
        return e
      }

      function zr(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }
      var Br = "currentPassword",
        Hr = "mfaCode",
        Yr = "newPassword",
        Wr = "confirmPassword";
      const Xr = function() {
          var e, t, r = (0, L.A)(),
            o = (0, i.useNavigate)(),
            s = qe(),
            c = an({
              fetchOnInitial: !1,
              route: Ye.PasswordRequirements
            }),
            l = c.data,
            d = c.loading,
            u = an({
              route: Ye.GetMfaDevices
            }),
            _ = u.data,
            f = u.loading,
            p = an({
              fetchOnInitial: !1,
              route: Ye.UpdatePassword
            }),
            m = p.fetch,
            h = p.loading,
            g = Number(null == _ ? void 0 : _.length) > 0,
            b = (0, a.useMemo)(function() {
              var e, t, n = [];
              return l && (n.push($e.minLength(l.minimumLength, r.formatMessage(mr.password_change_error_min_length, {
                number: l.minimumLength
              }))), n.push($e.maxLength(l.maximumLength, r.formatMessage(mr.password_change_error_max_length, {
                number: l.maximumLength
              }))), l.enforceLower && n.push($e.regex(/[a-z]/, r.formatMessage(mr.password_change_error_lowercase_letters))), l.enforceUpper && n.push($e.regex(/[A-Z]/, r.formatMessage(mr.password_change_error_capital_letters))), l.enforceNumber && n.push($e.regex(/[0-9]/, r.formatMessage(mr.password_change_error_numerical))), l.enforceSymbol && n.push($e.regex(new RegExp("[".concat(l.validSymbols, "]")), r.formatMessage(mr.password_change_error_symbol, {
                symbols: l.validSymbols
              })))), (e = $e).pipe.apply(e, [$e.string()].concat(function(e) {
                if (Array.isArray(e)) return Gr(e)
              }(t = n) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(t) || function(e, t) {
                if (e) {
                  if ("string" == typeof e) return Gr(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Gr(e, t) : void 0
                }
              }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()))
            }, [l]),
            y = d || f;
          return (0, n.jsx)(_r, {
            isLoading: y,
            children: (0, n.jsxs)("div", {
              className: "_9ww4010",
              "data-testid": "passwordPage",
              children: [(0, n.jsxs)(cr, {
                children: [(0, n.jsx)(lr, {
                  asChild: !0,
                  children: (0, n.jsx)(E.IconButton, {
                    icon: "ChevronLeft",
                    appearance: "tertiary",
                    size: "LG",
                    label: r.formatMessage(pr.overview_profile_back_button_label),
                    testId: "passwordPageBackButton",
                    "data-ga": Je.action.close_edit_password,
                    onClick: function() {
                      o("/account")
                    }
                  })
                }), (0, n.jsx)(dr, {
                  children: (0, n.jsx)(E.Heading, {
                    level: 6,
                    children: r.formatMessage(mr.password_change_title)
                  })
                })]
              }), (0, n.jsxs)(tr, {
                schema: $e.pipe($e.object(zr(Fr(Vr({}, Br, $e.pipe($e.string(), $e.nonEmpty(r.formatMessage(mr.password_change_error_password_required)))), g ? Vr({}, Hr, $e.pipe($e.string(), $e.minLength(6, r.formatMessage(fr.security_setup_verification_code_field_error_text)))) : null), (t = {}, Vr(t, Yr, b), Vr(t, Wr, $e.pipe($e.string(), $e.nonEmpty(r.formatMessage(mr.password_change_error_password_required)))), t))), $e.forward($e.partialCheck([
                  [Yr],
                  [Wr]
                ], function(e) {
                  return e.newPassword === e.confirmPassword
                }, r.formatMessage(mr.password_change_error_must_match)), [Wr])),
                defaultValues: {
                  currentPassword: "",
                  mfaCode: "",
                  newPassword: "",
                  confirmPassword: ""
                },
                onSubmit: function(e) {
                  var t, n = e.formData,
                    a = e.setError;
                  return (t = function() {
                    var e, t, i, c;
                    return function(e, t) {
                      var r, n, a, i = {
                          label: 0,
                          sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                          },
                          trys: [],
                          ops: []
                        },
                        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                      return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                      }), o;

                      function s(s) {
                        return function(c) {
                          return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                              if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                              switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                case 0:
                                case 1:
                                  a = s;
                                  break;
                                case 4:
                                  return i.label++, {
                                    value: s[1],
                                    done: !1
                                  };
                                case 5:
                                  i.label++, n = s[1], s = [0];
                                  continue;
                                case 7:
                                  s = i.ops.pop(), i.trys.pop();
                                  continue;
                                default:
                                  if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    i = 0;
                                    continue
                                  }
                                  if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                    i.label = s[1];
                                    break
                                  }
                                  if (6 === s[0] && i.label < a[1]) {
                                    i.label = a[1], a = s;
                                    break
                                  }
                                  if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(s);
                                    break
                                  }
                                  a[2] && i.ops.pop(), i.trys.pop();
                                  continue
                              }
                              s = t.call(e, i)
                            } catch (e) {
                              s = [6, e], n = 0
                            } finally {
                              r = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                              value: s[0] ? s[1] : void 0,
                              done: !0
                            }
                          }([s, c])
                        }
                      }
                    }(this, function(l) {
                      switch (l.label) {
                        case 0:
                          return e = {
                            password: n[Br],
                            newPassword: n[Yr],
                            confirmNewPassword: n[Wr]
                          }, g && (e.mfaCode = n[Hr]), [4, m({
                            body: e
                          })];
                        case 1:
                          return t = l.sent(), (i = t.error) ? (c = Zr[i.code]) && a(c.field, {
                            message: r.formatMessage(c.message)
                          }) : (o("/account"), s.displayNewToast({
                            appearance: "success",
                            message: r.formatMessage(mr.password_change_success)
                          })), [2]
                      }
                    })
                  }, function() {
                    var e = this,
                      r = arguments;
                    return new Promise(function(n, a) {
                      var i = t.apply(e, r);

                      function o(e) {
                        Ur(i, n, a, o, s, "next", e)
                      }

                      function s(e) {
                        Ur(i, n, a, o, s, "throw", e)
                      }
                      o(void 0)
                    })
                  })()
                },
                validationMode: "onSubmit",
                children: [(0, n.jsxs)(rr, {
                  children: [(0, n.jsxs)(wt, {
                    name: Br,
                    isRequired: !0,
                    children: [(0, n.jsx)(xt, {
                      children: r.formatMessage(mr.password_change_current_password_label)
                    }), (0, n.jsx)(jt, {
                      testId: "currentPasswordInput",
                      type: "password",
                      placeholder: r.formatMessage(mr.password_change_current_password_label)
                    })]
                  }), g && (0, n.jsxs)(wt, {
                    name: Hr,
                    isRequired: !0,
                    children: [(0, n.jsx)(xt, {
                      children: r.formatMessage(fr.security_setup_authenticator_code_field_label)
                    }), (0, n.jsx)(jt, {
                      placeholder: r.formatMessage(fr.security_setup_verification_code_field_placeholder),
                      testId: "updatePasswordMfaCodeInput"
                    })]
                  }), (0, n.jsxs)(wt, {
                    overrideErrorMessage: r.formatMessage(mr.password_change_requirements_not_met),
                    valibotErrorTypesToOverride: ["min_length", "max_length", "regex"],
                    isRequired: !0,
                    name: Yr,
                    children: [(0, n.jsx)(xt, {
                      children: r.formatMessage(mr.password_change_new_password_label)
                    }), (0, n.jsx)(jt, {
                      linkedValidationFields: [Wr],
                      maxLength: null !== (e = null == l ? void 0 : l.maximumLength) && void 0 !== e ? e : 30,
                      testId: "newPasswordInput",
                      type: "password",
                      placeholder: r.formatMessage(mr.password_change_new_password_label)
                    })]
                  })]
                }), (0, n.jsxs)(Ft, {
                  passwordFieldName: Yr,
                  testId: "passwordStrengthSummary",
                  children: [(0, n.jsxs)(zt, {
                    children: [(0, n.jsxs)(Bt, {
                      children: [(0, n.jsx)(Ht, {
                        children: r.formatMessage(mr.password_change_password_strength_label)
                      }), (0, n.jsx)(Yt, {
                        testId: "newPasswordStrengthResult"
                      })]
                    }), (0, n.jsx)(Wt, {
                      testId: "newPasswordProgressBar"
                    })]
                  }), (0, n.jsx)(Xt, {})]
                }), (0, n.jsxs)(wt, {
                  name: Wr,
                  isRequired: !0,
                  children: [(0, n.jsx)(xt, {
                    children: r.formatMessage(mr.password_change_confirm_password_label)
                  }), (0, n.jsx)(jt, {
                    testId: "confirmPasswordInput",
                    type: "password",
                    placeholder: r.formatMessage(mr.password_change_confirm_password_label)
                  })]
                }), (0, n.jsx)(nr, {
                  appearance: "primary",
                  "data-ga": Je.action.save_password,
                  isDisabled: h,
                  isLoading: h,
                  size: "LG",
                  testId: "submitNewPassword",
                  children: r.formatMessage(mr.password_change_save_changes_label)
                })]
              })]
            })
          })
        },
        Zr = {
          "0.2900.5": {
            field: Br,
            message: mr.password_change_current_password_error_text
          },
          "0.2900.6": {
            field: Hr,
            message: mr.password_change_error_mfa
          },
          "0.2900.11": {
            field: Br,
            message: mr.password_change_current_password_error_text
          },
          "0.2900.12": {
            field: Br,
            message: mr.password_change_current_password_error_text
          },
          "0.2900.13": {
            field: Yr,
            message: mr.password_change_error_cannot_be_the_same
          },
          "0.3000.5": {
            field: jr,
            message: fr.security_setup_password_field_error_text
          },
          "0.3000.7": {
            field: wr,
            message: fr.security_setup_verification_code_field_error_text
          },
          "0.3000.8": {
            field: wr,
            message: fr.security_setup_verification_code_field_error_text
          },
          "0.3000.10": {
            field: vr,
            message: Ke.email_change_new_email_invalid
          },
          "0.3100.5": {
            field: Lr,
            message: fr.security_setup_password_field_error_text
          },
          "0.3100.7": {
            field: Er,
            message: fr.security_setup_verification_code_field_error_text
          },
          "0.3100.11": {
            field: Nr,
            message: Ir.nickname_change_new_nickname_invalid
          },
          "0.3100.12": {
            field: Nr,
            message: Ir.nickname_change_error_valid_nickname
          },
          "0.3100.13": {
            field: Nr,
            message: Ir.nickname_change_error_already_used
          },
          "0.3400.15": {
            field: Or,
            message: fr.security_setup_password_field_error_text
          },
          "0.3400.17": {
            field: Sr,
            message: fr.security_setup_verification_code_field_error_text
          },
          "0.3600.15": {
            field: Or,
            message: fr.security_setup_password_field_error_text
          },
          "0.3600.17": {
            field: Sr,
            message: fr.security_setup_verification_code_field_error_text
          },
          "8.400.2": {
            field: Br,
            message: mr.password_change_current_password_error_text
          },
          "8.600.2": {
            field: jr,
            message: mr.password_change_current_password_error_text
          },
          "8.700.1": {
            field: Nr,
            message: Ir.nickname_change_new_nickname_same
          },
          "8.700.7": {
            field: Lr,
            message: mr.password_change_current_password_error_text
          },
          "8.1000.1": {
            field: Or,
            message: mr.password_change_current_password_error_text
          },
          "8.1200.1": {
            field: Or,
            message: mr.password_change_current_password_error_text
          }
        };

      function Kr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function $r(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function Jr(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              $r(i, n, a, o, s, "next", e)
            }

            function s(e) {
              $r(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Qr(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Qr(e, t, r[t])
          })
        }
        return e
      }

      function tn(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function rn(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, a, i = [],
              o = !0,
              s = !1;
            try {
              for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Kr(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Kr(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function nn(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var an = function(e) {
          var t = e.fetchOnInitial,
            r = void 0 === t || t,
            n = e.queryOrRoute,
            i = void 0 === n ? "" : n,
            o = e.route,
            s = qe(),
            c = rn((0, a.useState)(r), 2),
            l = c[0],
            d = c[1],
            u = rn((0, a.useState)(), 2),
            _ = u[0],
            f = u[1],
            p = ke().getAccessToken,
            m = rn((0, he.fp)(Ze), 1)[0],
            h = rn((0, he.fp)(m[o]), 2),
            g = h[0],
            b = h[1],
            y = rn((0, a.useState)(!1), 2),
            v = y[0],
            w = y[1],
            j = function(e) {
              var t = e.body,
                r = e.queryOrRoute,
                n = void 0 === r ? i : r;
              return Jr(function() {
                var e, r, a, i;
                return nn(this, function(c) {
                  switch (c.label) {
                    case 0:
                      return d(!0), w(!1), We[o].isUnauthenticated ? [3, 2] : [4, p()];
                    case 1:
                      e = c.sent(), c.label = 2;
                    case 2:
                      return r = {}, [4, on(o, We[o].method, t, e, n)];
                    case 3:
                      return (a = c.sent()).status ? (a.result ? i = a.result : a.list && (i = a.list), b(i), r.data = i) : (f(a.error), r.error = a.error, Zr[a.error.code] || s.displayNewError(a.error)), d(!1), w(!0), [2, r]
                  }
                })
              })()
            };
          return (0, a.useEffect)(function() {
            r && j({})
          }, []), {
            loading: l,
            fetch: j,
            data: g,
            error: _,
            setData: b,
            isRequestComplete: v
          }
        },
        on = function(e, t, r, n, a) {
          return Jr(function() {
            var i, o;
            return nn(this, function(s) {
              switch (s.label) {
                case 0:
                  return [4, c().createCastleRequestToken()];
                case 1:
                  return i = s.sent(), o = M(), [4, fetch("".concat(m.SCAPI_BASE_URL, "/").concat(e).concat(a), {
                    method: t,
                    body: JSON.stringify(r),
                    headers: tn(en({}, n && {
                      Authorization: "Bearer ".concat(n)
                    }), {
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                      "X-Castle-Request-Token": i,
                      "X-Lang": o.subdomain
                    })
                  })];
                case 2:
                  return [2, s.sent().json()]
              }
            })
          })()
        },
        sn = r(39583),
        cn = r(49284),
        ln = r.n(cn);

      function dn(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var un = function(e, t) {
          ln().trackEvent("Settings", e, t)
        },
        _n = function(e, t) {
          return function() {
            var r;
            ln().updateCustomDimensionsOrMetrics(function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              }(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                  dn(e, t, r[t])
                })
              }
              return e
            }({}, e), (dn(r = {}, Je.dimensionsMetricsMap.environment, m.ENVIRONMENT), dn(r, Je.dimensionsMetricsMap.loginState, !0), dn(r, Je.dimensionsMetricsMap.validationStatus, "verified"), dn(r, Je.dimensionsMetricsMap.linkedAccounts, t.map(function(e) {
              return e.onlineServiceName
            }).join("|")), r))), document.addEventListener("click", function(e) {
              var t = e.target.closest("[data-ga]");
              t && un(t.getAttribute("data-ga"))
            })
          }
        },
        fn = function(e) {
          var t = an({
              route: Ye.GetGoogleTagManagerSetupData,
              fetchOnInitial: !1
            }),
            r = t.data,
            n = t.fetch;
          (0, a.useEffect)(function() {
            ! function() {
              var e = !1,
                t = function() {
                  (0, sn.canStoreCookie)("_ga") && (n({}), e = !0)
                };
              if (t(), !e) var r = setInterval(function() {
                window.OneTrust && (window.OneTrust.OnConsentChanged(function() {
                  t()
                }), clearInterval(r))
              }, 100)
            }()
          }, []), (0, a.useEffect)(function() {
            r && e && function(e, t) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _n,
                n = {
                  isEnabled: !0,
                  isEnabledEc: !0,
                  isUserIdEnabled: !0,
                  userIdKey: "memberId",
                  isEnabledCd: !0,
                  cdDataKey: "cdData",
                  lifeTimeCookie: "ga4cdlftm",
                  clearDataCookie: "ga4cdcln",
                  customDimensionsMetricsMap: Je.dimensionsMetricsMap,
                  gaTimeout: 30,
                  promiseCallback: null
                };
              ln().initialize("GTM-WX5T79", n, Je.tmTriggers, Je.tmVariables, r(e, t))
            }(r, e)
          }, [r, e])
        };

      function pn(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            pn(e, t, r[t])
          })
        }
        return e
      }

      function hn(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function gn(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var bn = function(e) {
          var t = e.children,
            r = e.testId,
            i = gn(e, ["children", "testId"]),
            o = (0, a.useRef)(null),
            s = (0, R.v6)({
              "data-testid": r,
              className: "_2wzo2k0"
            }, i);
          return (0, a.useEffect)(function() {
            if (null == o ? void 0 : o.current) {
              var e, t, r = o.current,
                n = !1;
              r.addEventListener("mousedown", function(a) {
                n = !0, e = a.pageX, t = r.scrollLeft
              }), r.addEventListener("mouseleave", function() {
                n = !1
              }), r.addEventListener("mouseup", function() {
                n = !1
              }), r.addEventListener("mousemove", function(a) {
                if (n) {
                  a.preventDefault();
                  var i = a.pageX - e;
                  r.scrollLeft = t - i
                }
              })
            }
          }, []), (0, n.jsx)("div", hn(mn({
            ref: o
          }, s), {
            children: t
          }))
        },
        yn = function(e) {
          var t = e.active,
            r = e.children,
            i = e.testId,
            o = gn(e, ["active", "children", "testId"]),
            s = (0, a.useRef)(null),
            c = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_2wzo2k2", t && "_2wzo2k3")
            }, o);
          return (0, a.useEffect)(function() {
            t && (null == s ? void 0 : s.current) && s.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start"
            })
          }, [t]), (0, n.jsx)("div", hn(mn({
            ref: s
          }, c), {
            children: r
          }))
        };

      function vn(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var wn = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = e.testId,
            i = function(e, t) {
              if (null == e) return {};
              var r, n, a = function(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
              }
              return a
            }(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_96dllt0"
            }, i);
          return (0, n.jsx)("div", function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r)
              }
              return t
            }(Object(t)).forEach(function(r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }), e
          }(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                vn(e, t, r[t])
              })
            }
            return e
          }({
            ref: t
          }, o), {
            children: r
          }))
        }),
        jn = "_1bwmedc4",
        xn = "_1bwmedci",
        Mn = (0, q.c)({
          defaultClassName: "_1bwmedc0",
          variantClassNames: {
            alignments: {
              left: "_1bwmedc1",
              center: "_1bwmedc2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kn = (0, q.c)({
          defaultClassName: "_1bwmedc7",
          variantClassNames: {
            interactable: {
              true: "_1bwmedc8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        On = "_1bwmedc5";

      function Sn(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function An(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Sn(e, t, r[t])
          })
        }
        return e
      }

      function In(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function Pn(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var Cn = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = Pn(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)(kn({
                interactable: !0
              }), r)
            }, o);
          return (0, n.jsx)(E.Button, In(An({
            ref: t
          }, s), {
            children: a
          }))
        }),
        Tn = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = Pn(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)(xn, r)
            }, o);
          return (0, n.jsx)("button", In(An({
            ref: t
          }, s), {
            children: a
          }))
        }),
        Dn = (0, q.c)({
          defaultClassName: "_1p8rtf81",
          variantClassNames: {
            loading: {
              true: "_1p8rtf82"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Nn = (0, fe.YK)({
        loading_spinner_label: {
          defaultMessage: "Loading spinner",
          description: "Label describing the avatar loading spinner",
          id: "avatar_spinner_label"
        }
      });

      function Ln(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var En = (0, a.createContext)(null),
        Rn = function() {
          var e = (0, a.useContext)(En);
          if (!e) throw new Error("Not used in WizardContext");
          return e
        },
        qn = function(e) {
          var t, r, i = e.children,
            o = e.onCancel,
            s = e.onFinish,
            c = e.loading,
            l = e.testId,
            d = (t = (0, a.useState)(0), r = 2, function(e) {
              if (Array.isArray(e)) return e
            }(t) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(t, r) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Ln(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ln(e, t) : void 0
              }
            }(t, r) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            u = d[0],
            _ = d[1],
            f = (0, a.useRef)(null),
            p = (0, L.A)();
          return (0, a.useEffect)(function() {
            (null == f ? void 0 : f.current) && !c && (0 !== u || (f.current.style.height = "".concat(f.current.offsetHeight.toString(), "px")))
          }, [u, c]), (0, n.jsx)(En.Provider, {
            value: {
              onCancel: o,
              onFinish: s,
              nextStep: function() {
                return _(u + 1)
              },
              previousStep: function() {
                return _(u - 1)
              },
              finalStep: function() {
                return _(i.length - 1)
              }
            },
            children: (0, n.jsx)(E.Dialog.Content, {
              testId: l,
              ref: f,
              "aria-describedby": void 0,
              className: Dn({
                loading: c
              }),
              children: c ? (0, n.jsx)(E.Dialog.Layout, {
                className: "_1p8rtf80",
                children: (0, n.jsx)(E.Spinner, {
                  size: "inlineLG",
                  label: p.formatMessage(Nn.loading_spinner_label),
                  testId: "avatar-loading-spinner"
                })
              }) : (0, n.jsx)(n.Fragment, {
                children: i[u]
              })
            })
          })
        },
        Gn = "_1ivls7k0",
        Un = (0, a.createContext)(null);
      const Vn = function() {
        return (0, a.useContext)(Un)
      };
      var Fn = r(74163);
      const zn = (0, fe.YK)({
        avatar_groups_button_label: {
          defaultMessage: "View all",
          description: "The button text to view all avatars in a group",
          id: "profile_view_all_avatar_group_button_label"
        },
        avatar_modal_close_button_label: {
          defaultMessage: "Close Modal",
          description: "Button text for the button label.",
          id: "profile_view_all_avatar_group_close_button_label"
        },
        avatar_group_heading: {
          defaultMessage: "Select an avatar",
          description: "The heading for the select avatar modal.",
          id: "profile_view_all_avatar_group_heading"
        },
        update_avatar_header_label: {
          defaultMessage: "Update avatar?",
          description: "The title for the update avatar modal page",
          id: "profile_view_all_update_avatar_header_label"
        },
        update_avatar_button_label: {
          defaultMessage: "Save Avatar",
          description: "The label for the button to update the avatar",
          id: "profile_view_all_update_avatar_button_label"
        },
        update_avatar_toast_message: {
          defaultMessage: "Your Avatar update is being processed. It may take several minutes for the changes to appear on your account profile.",
          description: "The text indicating the user that the avatar update may take several minutes to process.",
          id: "profile_view_all_update_avatar_toast_message"
        },
        avatar_edit_button_label: {
          defaultMessage: "Edit Avatar",
          description: "Label describing the edit avatar button",
          id: "avatar_edit_button_label"
        },
        avatar_edit_button_icon_label: {
          defaultMessage: "Edit Avatar pencil icon",
          description: "Label describing the edit avatar button icon",
          id: "avatar_edit_button_icon_label"
        },
        avatar_Category_Beaterator: {
          defaultMessage: "Beaterator",
          description: "Game name of Beaterator",
          id: "avatar_Category_Beaterator"
        },
        avatar_Category_Bully: {
          defaultMessage: "Bully",
          description: "Game name of Bully",
          id: "avatar_Category_Bully"
        },
        avatar_Category_CW: {
          defaultMessage: "Grand Theft Auto: Chinatown Wars",
          description: "Game name of Grand Theft Auto: Chinatown Wars",
          id: "avatar_Category_CW"
        },
        avatar_Category_GTAEX: {
          defaultMessage: "Rockstar Icons",
          description: "Game name of Rockstar Icons",
          id: "avatar_Category_GTAEX"
        },
        avatar_Category_GTAIII: {
          defaultMessage: "Grand Theft Auto III",
          description: "Game name of Grand Theft Auto III",
          id: "avatar_Category_GTAIII"
        },
        avatar_Category_GTAIIIAnniversary: {
          defaultMessage: "Grand Theft Auto III 10th Anniversary",
          description: "Game name of Grand Theft Auto III 10th Anniversary",
          id: "avatar_Category_GTAIIIAnniversary"
        },
        avatar_Category_GTAIV: {
          defaultMessage: "Grand Theft Auto IV",
          description: "Game name of Grand Theft Auto IV",
          id: "avatar_Category_GTAIV"
        },
        avatar_Category_GTAIV_BOGT: {
          defaultMessage: "Grand Theft Auto: The Ballad of Gay Tony",
          description: "Game name of Grand Theft Auto: The Ballad of Gay Tony",
          id: "avatar_Category_GTAIV_BOGT"
        },
        avatar_Category_GTAIV_TLAD: {
          defaultMessage: "Grand Theft Auto: The Lost and Damned",
          description: "Game name of Grand Theft Auto: The Lost and Damned",
          id: "avatar_Category_GTAIV_TLAD"
        },
        avatar_Category_GTALCS: {
          defaultMessage: "Grand Theft Auto: Liberty City Stories",
          description: "Game name of Grand Theft Auto: Liberty City Stories",
          id: "avatar_Category_GTALCS"
        },
        avatar_Category_GTALondon: {
          defaultMessage: "Grand Theft Auto: London",
          description: "Game name of Grand Theft Auto: London",
          id: "avatar_Category_GTALondon"
        },
        avatar_Category_GTAO: {
          defaultMessage: "Grand Theft Auto Online",
          description: "Game name of Grand Theft Auto Online",
          id: "avatar_Category_GTAO"
        },
        avatar_Category_GTASA: {
          defaultMessage: "Grand Theft Auto: San Andreas",
          description: "Game name of Grand Theft Auto: San Andreas",
          id: "avatar_Category_GTASA"
        },
        avatar_Category_GTAV: {
          defaultMessage: "Grand Theft Auto V",
          description: "Game name of Grand Theft Auto V",
          id: "avatar_Category_GTAV"
        },
        avatar_Category_GTAVC: {
          defaultMessage: "Grand Theft Auto: Vice City",
          description: "Game name of Grand Theft Auto: Vice City",
          id: "avatar_Category_GTAVC"
        },
        avatar_Category_GTAVCAnniversary: {
          defaultMessage: "Grand Theft Auto: Vice City 10th Anniversary",
          description: "Game name of Grand Theft Auto: Vice City 10th Anniversary",
          id: "avatar_Category_GTAVCAnniversary"
        },
        avatar_Category_GTAVCS: {
          defaultMessage: "Grand Theft Auto: Vice City Stories",
          description: "Game name of Grand Theft Auto: Vice City Stories",
          id: "avatar_Category_GTAVCS"
        },
        avatar_Category_LAN: {
          defaultMessage: "L.A. Noire",
          description: "Game name of L.A. Noire",
          id: "avatar_Category_LAN"
        },
        avatar_Category_Manhunt: {
          defaultMessage: "Manhunt",
          description: "Game name of Manhunt",
          id: "avatar_Category_Manhunt"
        },
        avatar_Category_Manhunt2: {
          defaultMessage: "Manhunt 2",
          description: "Game name of Manhunt 2",
          id: "avatar_Category_Manhunt2"
        },
        avatar_Category_MaxPayne: {
          defaultMessage: "Max Payne",
          description: "Game name of Max Payne",
          id: "avatar_Category_MaxPayne"
        },
        avatar_Category_MaxPayne2: {
          defaultMessage: "Max Payne 2",
          description: "Game name of Max Payne 2",
          id: "avatar_Category_MaxPayne2"
        },
        avatar_Category_MC2: {
          defaultMessage: "Midnight Club II",
          description: "Game name of Midnight Club II",
          id: "avatar_Category_MC2"
        },
        avatar_Category_MC3: {
          defaultMessage: "Midnight Club 3: DUB Edition",
          description: "Game name of Midnight Club 3: DUB Edition",
          id: "avatar_Category_MC3"
        },
        avatar_Category_MCLA: {
          defaultMessage: "Midnight Club: Los Angeles",
          description: "Game name of Midnight Club: Los Angeles",
          id: "avatar_Category_MCLA"
        },
        avatar_Category_MP3: {
          defaultMessage: "Max Payne 3",
          description: "Game name of Max Payne 3",
          id: "avatar_Category_MP3"
        },
        avatar_Category_Oni: {
          defaultMessage: "Oni",
          description: "Game name of Oni",
          id: "avatar_Category_Oni"
        },
        avatar_Category_RDR: {
          defaultMessage: "Red Dead Redemption",
          description: "Game name of Red Dead Redemption",
          id: "avatar_Category_RDR"
        },
        avatar_Category_RDR2: {
          defaultMessage: "Red Dead Redemption 2",
          description: "Game name of Red Dead Redemption 2",
          id: "avatar_Category_RDR2"
        },
        avatar_Category_RedDeadRevolver: {
          defaultMessage: "Red Dead Revolver",
          description: "Game name of Red Dead Revolver",
          id: "avatar_Category_RedDeadRevolver"
        },
        avatar_Category_SmugglersRun: {
          defaultMessage: "Smuggler's Run",
          description: "Game name of Smuggler's Run",
          id: "avatar_Category_SmugglersRun"
        },
        avatar_Category_StateofEmergency: {
          defaultMessage: "State of Emergency",
          description: "Game name of State of Emergency",
          id: "avatar_Category_StateofEmergency"
        },
        avatar_Category_TableTennis: {
          defaultMessage: "Rockstar Games - Table Tennis",
          description: "Game name of The Rockstar Games - Table Tennis",
          id: "avatar_Category_TableTennis"
        },
        avatar_Category_TheWarriors: {
          defaultMessage: "The Warriors",
          description: "Game name of The Warriors",
          id: "avatar_Category_TheWarriors"
        },
        avatar_Category_UndeadNightmare: {
          defaultMessage: "Red Dead Redemption: Undead Nightmare",
          description: "Game name of Red Dead Redemption: Undead Nightmare",
          id: "avatar_Category_UndeadNightmare"
        },
        avatar_Category_RDO: {
          defaultMessage: "Red Dead Online",
          description: "Game name of Red Dead Online",
          id: "avatar_Category_RDO"
        }
      });
      var Bn = function(e, t, r, n, a) {
          n(t), a(r), e()
        },
        Hn = function(e) {
          var t, r = e.avatarGroup,
            a = e.testId,
            i = (0, L.A)(),
            o = Rn(),
            s = i.formatMessage(zn.avatar_groups_button_label),
            c = Vn(),
            l = c.setSelectedAvatarGroup,
            d = c.setSelectedAvatar;
          return (0, n.jsxs)("div", {
            "data-testid": a,
            children: [(0, n.jsxs)(E.Button, {
              className: "_1bwmedce",
              appearance: "ghost",
              size: "LG",
              testId: "".concat(null == r ? void 0 : r.name, "-avatar-group-row-next-page"),
              onClick: function() {
                l(r), o.nextStep()
              },
              children: [(0, n.jsx)(E.Body, {
                testId: "avatar-group-row-heading",
                size: "MD",
                appearance: "bold",
                className: "_1bwmedcc",
                children: r.name
              }), (0, n.jsx)(rt.ChevronRight, {
                size: "MD",
                label: s
              })]
            }), (0, n.jsx)("div", {
              className: "_1bwmedcf",
              children: null == r || null === (t = r.avatars) || void 0 === t ? void 0 : t.slice(0, 6).map(function(e) {
                return (0, n.jsx)(Cn, {
                  size: "LG",
                  appearance: "ghost",
                  testId: "select-avatar-clickable-icon",
                  onClick: function() {
                    return Bn(o.finalStep, e, r, d, l)
                  },
                  children: (0, n.jsx)("img", {
                    src: e.url,
                    alt: e.name,
                    className: On
                  })
                }, e.id)
              })
            })]
          })
        };
      const Yn = (0, fe.YK)({
        modal_close_modal_button_label: {
          defaultMessage: "Close modal",
          description: "Label to describe the close modal button",
          id: "modal_close_modal_button_label"
        },
        modal_previous_page_button_label: {
          defaultMessage: "Previous page",
          description: "Label to describe the previous page button",
          id: "modal_previous_page_button_label"
        }
      });

      function Wn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var Xn = ["GTAV", "GTAO", "RDR2", "RDR", "RDO", "UndeadNightmare", "LAN", "Bully"],
        Zn = function(e) {
          var t = e.avatarGroups,
            r = (0, L.A)(),
            i = Rn(),
            o = r.formatMessage(zn.avatar_group_heading),
            s = function(e, t) {
              var r = Xn.indexOf(e.game),
                n = Xn.indexOf(t.game);
              return r > -1 && n > -1 ? r - n : -1 === r && -1 === n ? 0 : n > -1 ? 1 : -1
            },
            c = (0, a.useMemo)(function() {
              return t ? (e = t, function(e) {
                if (Array.isArray(e)) return Wn(e)
              }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(e) || function(e, t) {
                if (e) {
                  if ("string" == typeof e) return Wn(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Wn(e, t) : void 0
                }
              }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()).sort(s) : [];
              var e
            }, [t]);
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(E.Dialog.Header, {
              align: "left",
              children: [(0, n.jsx)(E.Dialog.HeaderTitle, {
                testId: "avatar-groups-header-title",
                appearance: "uppercase",
                children: o
              }), (0, n.jsx)(E.Dialog.CloseButton, {
                label: r.formatMessage(Yn.modal_close_modal_button_label),
                onPress: function() {
                  return i.onCancel && i.onCancel()
                },
                testId: "select-avatar-close-modal-button"
              })]
            }), (0, n.jsxs)(Fn.Root, {
              className: jn,
              type: "auto",
              children: [(0, n.jsx)(Fn.Viewport, {
                children: (0, n.jsx)(E.Dialog.Layout, {
                  className: "_1bwmedcd",
                  children: c.map(function(e) {
                    return (0, n.jsx)(Hn, {
                      avatarGroup: e,
                      testId: "avatar-group-row"
                    }, e.id)
                  })
                })
              }), (0, n.jsx)(Fn.Scrollbar, {
                orientation: "vertical",
                children: (0, n.jsx)(Fn.Thumb, {})
              })]
            })]
          })
        },
        Kn = function() {
          var e = Vn(),
            t = e.selectedAvatarGroup,
            r = e.setSelectedAvatar,
            a = e.setSelectedAvatarGroup,
            i = Rn(),
            o = (0, L.A)();
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(E.Dialog.Header, {
              align: "center",
              children: [(0, n.jsx)(E.Dialog.HeaderButton, {
                icon: "ArrowLeft",
                testId: "select-avatar-previous-page",
                label: o.formatMessage(Yn.modal_previous_page_button_label),
                onPress: function() {
                  return i.previousStep && i.previousStep()
                }
              }), (0, n.jsx)(E.Dialog.HeaderTitle, {
                testId: "avatar-fullpage-title",
                appearance: "uppercase",
                children: null == t ? void 0 : t.name
              }), (0, n.jsx)(E.Dialog.CloseButton, {
                label: o.formatMessage(Yn.modal_close_modal_button_label),
                onPress: function() {
                  return i.onCancel && i.onCancel()
                },
                testId: "select-avatar-close-modal-button"
              })]
            }), (0, n.jsxs)(Fn.Root, {
              className: jn,
              testId: "avatar-modal-test-body",
              type: "auto",
              children: [(0, n.jsx)(Fn.Viewport, {
                children: (0, n.jsx)(E.Dialog.Layout, {
                  children: (0, n.jsx)("div", {
                    className: "_1bwmedch",
                    children: null == t ? void 0 : t.avatars.map(function(e) {
                      return (0, n.jsx)(Cn, {
                        size: "LG",
                        appearance: "ghost",
                        testId: "select-avatar-full-group-icon",
                        onClick: function() {
                          return Bn(i.finalStep, e, t, r, a)
                        },
                        children: (0, n.jsx)("img", {
                          src: e.url,
                          alt: e.name,
                          className: On
                        })
                      }, e.id)
                    })
                  })
                })
              }), (0, n.jsx)(Fn.Scrollbar, {
                orientation: "vertical",
                children: (0, n.jsx)(Fn.Thumb, {})
              })]
            })]
          })
        };

      function $n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var Jn = (0, a.forwardRef)(function(e, t) {
          var r = e.testId,
            a = e.userImageSrc,
            i = e.label,
            o = function(e, t) {
              if (null == e) return {};
              var r, n, a = function(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
              }
              return a
            }(e, ["testId", "userImageSrc", "label"]),
            s = (0, R.v6)({
              "data-testid": r,
              className: "_1bwmedca",
              alt: i,
              src: a
            }, o);
          return (0, n.jsx)("img", function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                $n(e, t, r[t])
              })
            }
            return e
          }({
            ref: t
          }, s))
        }),
        Qn = function() {
          var e = (0, L.A)(),
            t = Rn(),
            r = e.formatMessage(zn.update_avatar_header_label),
            a = e.formatMessage(zn.update_avatar_button_label),
            i = Vn(),
            o = i.selectedAvatar,
            s = i.selectedAvatarGroup,
            c = i.setSelectedAvatarGroup,
            l = i.updateAvatarIcon;
          return o && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(E.Dialog.Header, {
              align: "center",
              children: [(0, n.jsx)(E.Dialog.HeaderButton, {
                label: e.formatMessage(Yn.modal_previous_page_button_label),
                icon: "ArrowLeft",
                onPress: function() {
                  c(s), t.previousStep()
                },
                testId: "select-avatar-previous-page"
              }), (0, n.jsx)(E.Dialog.HeaderTitle, {
                testId: "select-avatar-update-header",
                appearance: "uppercase",
                children: r
              }), (0, n.jsx)(E.Dialog.CloseButton, {
                label: e.formatMessage(Yn.modal_close_modal_button_label),
                onPress: function() {
                  return t.onCancel && t.onCancel()
                },
                testId: "select-avatar-close-modal-button"
              })]
            }), (0, n.jsx)(E.Dialog.Layout, {
              className: (0, z.A)(Mn({
                alignments: "center"
              })),
              children: (0, n.jsxs)(E.Dialog.ActionArea, {
                testId: "update-avatar-modal-body",
                className: "_1bwmedc3",
                children: [(0, n.jsx)(Jn, {
                  userImageSrc: o.url,
                  label: o.name,
                  testId: "select-avatar-update-avatar-icon"
                }), (0, n.jsx)(E.Button, {
                  size: "LG",
                  appearance: "primary",
                  testId: "select-avatar-save-avatar-button",
                  onPress: function() {
                    var e;
                    l(o.id, o.url), null === (e = t.onCancel) || void 0 === e || e.call(t)
                  },
                  children: a
                })]
              })
            })]
          })
        };

      function ea(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function ta(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function ra(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              ta(i, n, a, o, s, "next", e)
            }

            function s(e) {
              ta(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function na(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function aa(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, a, i = [],
              o = !0,
              s = !1;
            try {
              for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return ea(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ea(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function ia(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      const oa = function(e) {
        var t = e.initialAvatarUrl,
          r = e.nickName,
          i = (0, L.A)(),
          o = qe(),
          s = aa((0, a.useState)(!1), 2),
          c = s[0],
          l = s[1],
          d = aa((0, a.useState)(t), 2),
          u = d[0],
          _ = d[1],
          f = aa((0, a.useState)(void 0), 2),
          p = f[0],
          m = f[1],
          h = aa((0, a.useState)(void 0), 2),
          g = h[0],
          b = h[1],
          y = aa((0, a.useState)(void 0), 2),
          v = y[0],
          w = y[1],
          j = an({
            route: Ye.GetAvatars,
            fetchOnInitial: !1
          }),
          x = j.fetch,
          M = j.loading,
          k = an({
            route: Ye.UpdateAvatars,
            fetchOnInitial: !1
          }).fetch,
          O = (0, a.useCallback)(function() {
            S()
          }, [p]),
          S = function() {
            return ra(function() {
              var e, t, r;
              return ia(this, function(n) {
                switch (n.label) {
                  case 0:
                    return p ? [2] : [4, x({})];
                  case 1:
                    return t = n.sent(), r = [], null == t || null === (e = t.data) || void 0 === e || e.forEach(function(e) {
                      var t = e.avatars.filter(function(e) {
                        return e.url
                      });
                      if (e.game && !(t.length <= 0)) {
                        var n = r.findIndex(function(t) {
                          return t.game === e.game
                        });
                        if (-1 === n) {
                          var a = "avatar_Category_".concat(e.game),
                            o = zn[a] ? i.formatMessage(zn[a]) : e.name;
                          r.push(function(e, t) {
                            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, r)
                              }
                              return t
                            }(Object(t)).forEach(function(r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                            }), e
                          }(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                              }))), n.forEach(function(t) {
                                na(e, t, r[t])
                              })
                            }
                            return e
                          }({}, e), {
                            name: o,
                            avatars: t
                          }))
                        } else {
                          var s = r[n];
                          t.forEach(function(e) {
                            s.avatars.some(function(t) {
                              return t.id === e.id
                            }) || s.avatars.push(e)
                          })
                        }
                      }
                    }), m(r), [2]
                }
              })
            })()
          };
        return (0, n.jsx)(Un.Provider, {
          value: {
            selectedAvatar: g,
            selectedAvatarGroup: v,
            setSelectedAvatar: b,
            setSelectedAvatarGroup: w,
            updateAvatarIcon: function(e, t) {
              return ra(function() {
                var r;
                return ia(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return e ? [4, k({
                        body: {
                          avatarId: e
                        }
                      })] : [3, 2];
                    case 1:
                      (null == (r = n.sent()) ? void 0 : r.error) || (_(t), o.displayNewToast({
                        appearance: "success",
                        message: i.formatMessage(zn.update_avatar_toast_message)
                      })), n.label = 2;
                    case 2:
                      return [2]
                  }
                })
              })()
            }
          },
          children: (0, n.jsxs)(E.Dialog.Root, {
            isOpen: c,
            onOpenChange: l,
            children: [(0, n.jsx)(E.Dialog.Trigger, {
              onClick: function() {
                return l(!0)
              },
              asChild: !0,
              children: (0, n.jsxs)(Tn, {
                testId: "hero-avatar",
                onClick: O,
                className: xn,
                "aria-label": i.formatMessage(zn.avatar_edit_button_label),
                children: [(0, n.jsx)("img", {
                  src: u,
                  alt: r,
                  tabIndex: -1,
                  className: "_1bwmedc6"
                }), (0, n.jsx)("div", {
                  className: "_1bwmedcj",
                  "data-testid": "edit-avatar-btn",
                  tabIndex: -1,
                  children: (0, n.jsx)(rt.Pencil, {
                    label: i.formatMessage(zn.avatar_edit_button_icon_label),
                    size: "SM",
                    className: "_1bwmedck"
                  })
                })]
              })
            }), (0, n.jsxs)(E.Dialog.Overlay, {
              testId: "selectAvatarModalOverlay",
              className: Gn,
              children: [(0, n.jsx)(E.Dialog.HeaderTitle, {}), (0, n.jsxs)(qn, {
                onCancel: function() {
                  return l(!1)
                },
                loading: M,
                testId: "selectAvatarModal",
                children: [(0, n.jsx)(Zn, {
                  avatarGroups: p
                }), (0, n.jsx)(Kn, {}), (0, n.jsx)(Qn, {})]
              })]
            })]
          })
        })
      };
      var sa = "_1g6tovv3";
      const ca = r.p + "3c8ce9c65cc1acff9a84ff94583ab4c6.jpg";

      function la(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            la(e, t, r[t])
          })
        }
        return e
      }

      function ua(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function _a(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var fa = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = e.testId,
            i = _a(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_1g6tovv1",
              style: (0, kt.DI)(la({}, "var(--_1g6tovv0)", "url(".concat(ca, ")")))
            }, i);
          return (0, n.jsx)("header", ua(da({
            ref: t
          }, o), {
            children: r
          }))
        }),
        pa = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = e.testId,
            i = _a(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_1g6tovv2"
            }, i);
          return (0, n.jsx)("div", ua(da({
            ref: t
          }, o), {
            children: r
          }))
        }),
        ma = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = _a(e, ["children"]),
            i = (0, R.v6)({
              className: sa
            }, a);
          return (0, n.jsx)(E.Heading, ua(da({
            ref: t,
            level: 5
          }, i), {
            children: r
          }))
        }),
        ha = (0, a.forwardRef)(function(e, t) {
          var r = e.children,
            a = _a(e, ["children"]),
            i = (0, R.v6)({
              className: sa
            }, a);
          return (0, n.jsx)(E.Body, ua(da({
            ref: t,
            size: "SM"
          }, i), {
            children: r
          }))
        });
      const ga = function(e) {
          var t = e.account,
            r = (0, L.A)();
          return t && (0, n.jsx)(Z, {
            children: (0, n.jsx)(K, {
              children: (0, n.jsxs)(fa, {
                children: [t.avatarUrl && (0, n.jsx)(oa, {
                  nickName: t.nickName,
                  initialAvatarUrl: t.avatarUrl
                }), (0, n.jsxs)(pa, {
                  "data-testid": "hero-avatar-nickname",
                  children: [(0, n.jsx)(ma, {
                    children: t.nickName
                  }), (0, n.jsx)(ha, {
                    children: "".concat(r.formatMessage(pr.overview_created_prefix), " ").concat(Pr({
                      dateString: t.createdDate,
                      locale: r.locale
                    }))
                  })]
                })]
              })
            })
          })
        },
        ba = (0, fe.YK)({
          info_tooltip_label: {
            defaultMessage: "Information icon displaying additional text",
            description: "The data usage tooltip icon description",
            id: "info_tooltip_label"
          }
        });

      function ya(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var va = function(e) {
        var t, r, i = e.testIdPrefix,
          o = e.message,
          s = e.side,
          c = (0, L.A)(),
          l = (t = (0, a.useState)(!1), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return ya(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ya(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          d = l[0],
          u = l[1];
        return (0, n.jsxs)(E.Tooltip.Root, {
          defaultOpen: !1,
          isOpen: d,
          onOpenChange: u,
          testId: "".concat(i, "-tooltip"),
          children: [(0, n.jsx)(E.Tooltip.Trigger, {
            className: "jr99910",
            onClickCapture: function(e) {
              return e.stopPropagation()
            },
            onPointerDown: function(e) {
              e.preventDefault(), "mouse" !== e.pointerType && u(!d)
            },
            testId: "".concat(i, "-tooltip-trigger"),
            children: (0, n.jsx)(E.IconButton, {
              appearance: "ghost",
              icon: "CircleHelp",
              size: "MD",
              label: c.formatMessage(ba.info_tooltip_label)
            })
          }), (0, n.jsx)(E.Tooltip.Portal, {
            children: (0, n.jsx)(E.Tooltip.Content, {
              side: s,
              testId: "".concat(i, "-tooltip-content"),
              children: o
            })
          })]
        })
      };

      function wa(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function ja(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            wa(e, t, r[t])
          })
        }
        return e
      }
      var xa = function(e) {
        var t = e.to,
          r = e.subLabel,
          a = e.label,
          o = e.ariaLabel,
          s = e.buttonLabel,
          c = e.gaAction,
          l = e.testId,
          d = (0, i.useNavigate)(),
          u = function() {
            d(t)
          },
          _ = s + a;
        return (0, n.jsx)(te, {
          "aria-labelledby": "".concat(r, "-row ").concat(a),
          "data-ga": c,
          id: "".concat(r, "-row"),
          isInteractable: !0,
          label: o,
          onClick: u,
          testId: l,
          children: (0, n.jsxs)(ne, {
            children: [(0, n.jsxs)(ie, {
              className: "whld275",
              children: [(0, n.jsx)(se, {
                shouldEllipsis: !0,
                children: r
              }), (0, n.jsx)(oe, {
                shouldEllipsis: !0,
                testId: "".concat(l, "-label"),
                id: a,
                children: a
              })]
            }), (0, n.jsx)(E.IconButton, {
              appearance: "ghost",
              icon: "ChevronRight",
              label: _,
              onClick: u,
              size: "LG",
              testId: "".concat(l, "-button")
            })]
          })
        })
      };
      const Ma = function(e) {
        var t = e.nickname,
          r = e.email,
          i = e.dob,
          o = (0, L.A)(),
          s = [{
            to: "details/email",
            subLabel: o.formatMessage(pr.overview_email_sub_label),
            label: r,
            ariaLabel: o.formatMessage(pr.overview_profile_details_change_email_link_description),
            buttonLabel: o.formatMessage(pr.overview_email_button_label),
            gaAction: Je.action.edit_email,
            testId: "changeEmailRow"
          }, {
            to: "details/password",
            subLabel: o.formatMessage(pr.overview_password_sub_label),
            label: "**********",
            ariaLabel: o.formatMessage(pr.overview_profile_details_change_password_link_description),
            buttonLabel: o.formatMessage(pr.overview_password_button_label),
            gaAction: Je.action.edit_password,
            testId: "changePasswordRow"
          }, {
            to: "details/nickname",
            subLabel: o.formatMessage(pr.overview_nickname_sub_label),
            label: t,
            ariaLabel: o.formatMessage(pr.overview_profile_details_change_nickname_link_description),
            buttonLabel: o.formatMessage(pr.overview_nickname_button_label),
            gaAction: Je.action.edit_nickname,
            testId: "changeNicknameRow"
          }];
        return (0, n.jsxs)(K, {
          children: [(0, n.jsx)($, {
            testId: "profile-details-section",
            children: (0, n.jsxs)(J, {
              testId: "profile-details-header",
              children: [o.formatMessage(pr.overview_heading_profile_details), (0, n.jsx)(va, {
                testIdPrefix: "profile-details",
                message: o.formatMessage(pr.overview_data_usage)
              })]
            })
          }), (0, n.jsxs)(ee, {
            children: [s.map(function(e) {
              return (0, n.jsxs)(a.Fragment, {
                children: [(0, n.jsx)(xa, ja({}, e)), (0, n.jsx)(re, {
                  thickness: "thin"
                })]
              }, e.to)
            }), (0, n.jsx)(te, {
              children: (0, n.jsx)(ae, {
                children: (0, n.jsxs)(ie, {
                  children: [(0, n.jsx)(se, {
                    children: o.formatMessage(pr.overview_dateofbirth_sub_label)
                  }), i && (0, n.jsx)(oe, {
                    testId: "profile-details-dob",
                    children: Pr({
                      dateString: i,
                      locale: o.locale
                    })
                  })]
                })
              })
            })]
          })]
        })
      };
      var ka = r(1665),
        Oa = "_1md0fdx6",
        Sa = "_1md0fdx8",
        Aa = "_1md0fdx7",
        Ia = "_1md0fdxa";

      function Pa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Ca(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function Ta(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              Ca(i, n, a, o, s, "next", e)
            }

            function s(e) {
              Ca(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Da(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Na(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Da(e, t, r[t])
          })
        }
        return e
      }

      function La(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function Ea(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, a, i = [],
              o = !0,
              s = !1;
            try {
              for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Pa(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pa(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Ra(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      const qa = function() {
        var e, t, r, i, o = (0, L.A)(),
          s = M(),
          c = Ea((0, a.useState)(!1), 2),
          l = c[0],
          d = c[1],
          u = Ea((0, a.useState)(!1), 2),
          _ = u[0],
          f = u[1],
          p = an({
            route: Ye.ProfileOverview,
            fetchOnInitial: !1
          }),
          m = p.setData,
          h = p.data,
          g = null !== (t = null === (r = null == h ? void 0 : h.language, e = w.find(function(e) {
            return e.subdomain === r || e.subdomaincom === r
          })) || void 0 === e ? void 0 : e.subdomain) && void 0 !== t ? t : s.subdomain,
          b = null !== (i = null == h ? void 0 : h.country) && void 0 !== i ? i : s.country,
          y = an({
            route: Ye.GetCountries
          }),
          v = y.data,
          j = y.loading,
          k = an({
            route: Ye.UpdateCountry,
            fetchOnInitial: !1
          }),
          O = k.fetch,
          S = k.loading,
          A = an({
            route: Ye.UpdateLanguage,
            fetchOnInitial: !1
          }),
          I = A.fetch,
          P = A.loading,
          C = function(e) {
            return e.stopPropagation()
          };
        return (0, n.jsxs)(K, {
          children: [(0, n.jsx)($, {
            testId: "regional-details-section",
            children: (0, n.jsx)(J, {
              children: o.formatMessage(pr.overview_heading_regional_details)
            })
          }), (0, n.jsxs)(ee, {
            children: [(0, n.jsxs)(te, {
              isDisabled: j || S,
              isInteractable: !0,
              onClick: function() {
                return d(!0)
              },
              testId: "countryRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: o.formatMessage(pr.overview_country_sub_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: j ? (0, n.jsx)(ka.y, {
                  size: "inlineLG",
                  label: o.formatMessage(pr.overview_country_spinner_label),
                  testId: "countryLoader"
                }) : (0, n.jsxs)(E.Dropdown.Root, {
                  className: Oa,
                  isOpen: l,
                  onClick: C,
                  onOpenChange: function() {
                    var e = !l,
                      t = e ? Je.action.edit_country : Je.action.close_edit_country;
                    un(t), d(e)
                  },
                  onValueChange: function(e) {
                    return Ta(function() {
                      return Ra(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return un(Je.action.select_country), [4, O({
                              queryOrRoute: "?country=".concat(e)
                            })];
                          case 1:
                            return t.sent().error || (m(La(Na({}, h), {
                              country: e
                            })), un(Je.action.save_country)), [2]
                        }
                      })
                    })()
                  },
                  value: b,
                  children: [(0, n.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(pr.overview_country_sub_label)
                  }), (0, n.jsxs)(E.Dropdown.Trigger, {
                    testId: "countryDropdown",
                    className: Aa,
                    children: [(0, n.jsx)(E.Dropdown.TriggerText, {
                      placeholder: b
                    }), (0, n.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, n.jsx)(E.Dropdown.Portal, {
                    children: (0, n.jsx)(E.Dropdown.Content, {
                      className: Sa,
                      children: (0, n.jsx)(E.Dropdown.ScrollArea, {
                        children: null == v ? void 0 : v.map(function(e) {
                          return (0, n.jsx)(E.Dropdown.Option, {
                            value: e.code,
                            testId: e.code,
                            children: (0, n.jsx)(E.Dropdown.OptionText, {
                              children: e.name
                            })
                          }, "country-select-".concat(e.code))
                        })
                      })
                    })
                  })]
                })
              })]
            }), (0, n.jsx)(re, {
              thickness: "thin"
            }), (0, n.jsxs)(te, {
              isDisabled: P,
              isInteractable: !0,
              onClick: function() {
                return f(!0)
              },
              testId: "languageRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: o.formatMessage(pr.overview_language_sub_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Dropdown.Root, {
                  className: Oa,
                  isOpen: _,
                  onClick: C,
                  onOpenChange: function() {
                    var e = !_,
                      t = e ? Je.action.edit_language : Je.action.close_edit_language;
                    un(t), f(e)
                  },
                  onValueChange: function(e) {
                    return Ta(function() {
                      return Ra(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return un(Je.action["select_language_".concat(e)]), [4, I({
                              queryOrRoute: "?language=".concat(e)
                            })];
                          case 1:
                            return t.sent().error || (m(La(Na({}, h), {
                              language: e
                            })), un(Je.action.save_language)), [2]
                        }
                      })
                    })()
                  },
                  value: g,
                  children: [(0, n.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(pr.overview_language_dropdown_label)
                  }), (0, n.jsxs)(E.Dropdown.Trigger, {
                    testId: "languageDropdown",
                    className: Aa,
                    children: [(0, n.jsx)(E.Dropdown.TriggerText, {
                      placeholder: ""
                    }), (0, n.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, n.jsx)(E.Dropdown.Portal, {
                    children: (0, n.jsx)(E.Dropdown.Content, {
                      className: Sa,
                      children: (0, n.jsx)(E.Dropdown.ScrollArea, {
                        children: x.map(function(e) {
                          var t = e.label,
                            r = e.subdomain;
                          return (0, n.jsx)(E.Dropdown.Option, {
                            value: r,
                            testId: r,
                            children: (0, n.jsx)(E.Dropdown.OptionText, {
                              children: t
                            })
                          }, "language-select-".concat(r))
                        })
                      })
                    })
                  })]
                })
              })]
            })]
          })]
        })
      };
      var Ga = "_1arzw2p0";
      const Ua = (0, fe.YK)({
          profile_delete_account_button_label: {
            defaultMessage: "Delete Account",
            description: "The button text to delete an account.",
            id: "profile_delete_account_button_label"
          },
          profile_delete_continue_button_label: {
            defaultMessage: "Continue",
            description: "Button text for the continue form button.",
            id: "profile_delete_continue_button_label"
          },
          profile_delete_close_button_label: {
            defaultMessage: "Close Modal",
            description: "Button text for the button label.",
            id: "profile_delete_close_button_label"
          },
          profile_delete_help_text: {
            defaultMessage: "This code will expire in XX minutes.",
            description: "Help text describing how long the user has to verify their e-mail.",
            id: "profile_delete_help_text"
          },
          profile_delete_support_text: {
            defaultMessage: "If you are having difficulty verifying your email, please visit our",
            description: "Text telling users where to go if they are having issues.",
            id: "profile_delete_support_text"
          },
          profile_delete_page_two_heading: {
            defaultMessage: "Tell us why you're leaving",
            description: "Heading for the second page of the account deletion flow.",
            id: "profile_delete_page_two_heading"
          },
          profile_delete_radio_group_label: {
            defaultMessage: "Why are you leaving?",
            description: "The radio group on page two.",
            id: "profile_delete_radio_group_label"
          },
          profile_delete_radio_option_one: {
            defaultMessage: "Product / Game Dissatisfaction",
            description: "First option in group.",
            id: "profile_delete_radio_option_one"
          },
          profile_delete_radio_option_two: {
            defaultMessage: "Harassment / Bad Actor",
            description: "Second option in group.",
            id: "profile_delete_radio_option_two"
          },
          profile_delete_radio_option_three: {
            defaultMessage: "Compromised / Hacked Account",
            description: "Third option in group.",
            id: "profile_delete_radio_option_three"
          },
          profile_delete_radio_option_four: {
            defaultMessage: "Account / Service Ban",
            description: "Four option in group.",
            id: "profile_delete_radio_option_four"
          },
          profile_delete_radio_option_five: {
            defaultMessage: "Technical Issue",
            description: "Five option in group.",
            id: "profile_delete_radio_option_five"
          },
          profile_delete_radio_option_six: {
            defaultMessage: "Privacy / Information",
            description: "Sixth option in group.",
            id: "profile_delete_radio_option_six"
          },
          profile_delete_radio_option_seven: {
            defaultMessage: "Something Else",
            description: "Seventh option in group.",
            id: "profile_delete_radio_option_seven"
          },
          profile_delete_page_three_heading: {
            defaultMessage: "Notice",
            description: "Heading for page three.",
            id: "profile_delete_page_three_heading"
          },
          profile_delete_notice_copy_one: {
            defaultMessage: "Use the request below to delete your Rockstar Games account and information.",
            description: "First paragraph in the notice.",
            id: "profile_delete_notice_copy_one"
          },
          profile_delete_notice_alert_description: {
            defaultMessage: "By submitting this request, you are confirming you understand and agree to all of the following:",
            description: "An alert that confirms the user knows what they are doing.",
            id: "profile_delete_notice_alert_description"
          },
          profile_delete_notice_bullet_one: {
            defaultMessage: "Deleting the account will result in the irreversible loss of activation entitlements for Rockstar Games PC titles, along with any purchased DLC. However, note that you may still have access to some games on certain platforms.",
            description: "First bullet point in notice.",
            id: "profile_delete_notice_bullet_one"
          },
          profile_delete_notice_bullet_two: {
            defaultMessage: "Activation keys and DLC codes will remain linked to the deleted account and will not be usable on any other Rockstar Games account.",
            description: "Second bullet point in notice.",
            id: "profile_delete_notice_bullet_two"
          },
          profile_delete_notice_bullet_three: {
            defaultMessage: "You will lose access to both Story Mode and Online Mode play for all Rockstar Games PC titles associated with your Rockstar Games account.",
            description: "Third bullet point in notice.",
            id: "profile_delete_notice_bullet_three"
          },
          profile_delete_notice_bullet_four: {
            defaultMessage: "Your level and stats for all Rockstar Games PC titles will be deleted.",
            description: "Fourth bullet point in notice.",
            id: "profile_delete_notice_bullet_four"
          },
          profile_delete_notice_bullet_five: {
            defaultMessage: "You will lose access to your Rockstar Games Friends list and Crew memberships.",
            description: "Fifth bullet point in notice.",
            id: "profile_delete_notice_bullet_five"
          },
          profile_delete_notice_bullet_six: {
            defaultMessage: "The deletion of your Rockstar Games account will be final and irreversible.",
            description: "Sixth bullet point in notice.",
            id: "profile_delete_notice_bullet_six"
          },
          profile_delete_notice_bullet_seven: {
            defaultMessage: "All open support tickets will be closed.",
            description: "Seventh bullet point in notice.",
            id: "profile_delete_notice_bullet_seven"
          },
          profile_delete_notice_bullet_eight: {
            defaultMessage: "Your linked accounts will remain active until the final deletion of your Rockstar Games account is complete.",
            description: "Eighth bullet point in notice.",
            id: "profile_delete_notice_bullet_eight"
          },
          profile_delete_notice_copy_two: {
            defaultMessage: "Information from the Rockstar Store as well as any third-party or console game account will not be included in response to this request.",
            description: "Second paragraph in the notice.",
            id: "profile_delete_notice_copy_two"
          },
          profile_delete_notice_copy_three: {
            defaultMessage: "To learn more about our privacy practices, review our <privacyPolicyAnchor>privacy policy</privacyPolicyAnchor>.",
            description: "Third paragraph in notice.",
            id: "profile_delete_notice_copy_three"
          },
          profile_delete_notice_checkbox_label: {
            defaultMessage: "Check this box to confirm that you understand the above notice",
            description: "The agreement checkbox..",
            id: "profile_delete_notice_checkbox_label"
          },
          profile_delete_notice_agree_button_label: {
            defaultMessage: "I Agree",
            description: "The button text for the I Agree button.",
            id: "profile_delete_notice_agree_button_label"
          }
        }),
        Va = function(e) {
          var t = e.deleteReason,
            r = e.setDeleteReason,
            a = (0, L.A)(),
            i = Rn(),
            o = [{
              label: a.formatMessage(Ua.profile_delete_radio_option_one),
              value: "product_game_dissatisfaction"
            }, {
              label: a.formatMessage(Ua.profile_delete_radio_option_two),
              value: "harassment_bad_actor"
            }, {
              label: a.formatMessage(Ua.profile_delete_radio_option_three),
              value: "compromised_hacked_account"
            }, {
              label: a.formatMessage(Ua.profile_delete_radio_option_four),
              value: "account_service_ban"
            }, {
              label: a.formatMessage(Ua.profile_delete_radio_option_five),
              value: "technical_issue"
            }, {
              label: a.formatMessage(Ua.profile_delete_radio_option_six),
              value: "privacy_information"
            }, {
              label: a.formatMessage(Ua.profile_delete_radio_option_seven),
              value: "something_else"
            }];
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(E.Dialog.CloseButton, {
              label: a.formatMessage(Ua.profile_delete_close_button_label),
              onPress: function() {
                var e;
                un(Je.action.close_delete_account_modal, Je.labels.close_delete_account_modal), null === (e = i.onCancel) || void 0 === e || e.call(i)
              },
              testId: "closeDeleteAccountModal"
            }), (0, n.jsxs)(Fn.Root, {
              children: [(0, n.jsx)(Fn.Viewport, {
                children: (0, n.jsxs)(E.Dialog.Layout, {
                  className: Ga,
                  children: [(0, n.jsx)(E.Dialog.Title, {
                    testId: "feedbackHeader",
                    children: a.formatMessage(Ua.profile_delete_page_two_heading)
                  }), (0, n.jsxs)(E.RadioGroup.Root, {
                    appearance: "primary",
                    isRequired: !0,
                    onChange: function(e) {
                      return r(e)
                    },
                    size: "LG",
                    children: [(0, n.jsx)(E.RadioGroup.Label, {
                      hideRequiredAsterisk: !0,
                      hideVisually: !0,
                      children: a.formatMessage(Ua.profile_delete_radio_group_label)
                    }), (0, n.jsx)(E.RadioGroup.Options, {
                      children: o.map(function(e) {
                        var t = e.value,
                          r = e.label;
                        return (0, n.jsxs)(E.RadioGroup.Option, {
                          testId: t,
                          children: [(0, n.jsx)(E.RadioGroup.Input, {
                            value: t
                          }), (0, n.jsx)(E.RadioGroup.OptionLabel, {
                            children: r
                          })]
                        }, "".concat(t, "-key"))
                      })
                    })]
                  }), (0, n.jsx)(E.Button, {
                    appearance: "primary",
                    isDisabled: !t,
                    onClick: function() {
                      un(Je.action.confirm_account_deletion, Je.labels.account_deletion_reason + t), i.nextStep()
                    },
                    size: "XL",
                    testId: "continueButton",
                    children: a.formatMessage(Ua.profile_delete_continue_button_label)
                  })]
                })
              }), (0, n.jsx)(Fn.Scrollbar, {
                orientation: "vertical",
                children: (0, n.jsx)(Fn.Thumb, {})
              })]
            })]
          })
        };

      function Fa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function za(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }
      const Ba = function(e) {
        var t, r, i = e.deleteReason,
          o = e.token,
          s = Rn(),
          c = (t = (0, a.useState)(!1), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Fa(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Fa(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          l = c[0],
          d = c[1],
          u = (0, L.A)(),
          _ = an({
            route: Ye.DeleteAccount,
            fetchOnInitial: !1
          }),
          f = _.fetch,
          p = _.loading;
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(E.Dialog.CloseButton, {
            label: u.formatMessage(Ua.profile_delete_close_button_label),
            onPress: function() {
              var e;
              un(Je.action.close_delete_account_modal, Je.labels.close_delete_account_modal), null === (e = s.onCancel) || void 0 === e || e.call(s)
            },
            testId: "closeDeleteAccountModal"
          }), (0, n.jsxs)(Fn.Root, {
            className: "_1arzw2p3",
            type: "auto",
            children: [(0, n.jsx)(Fn.Viewport, {
              children: (0, n.jsxs)(E.Dialog.Layout, {
                className: Ga,
                children: [(0, n.jsx)(E.Dialog.Title, {
                  testId: "noticeHeader",
                  children: u.formatMessage(Ua.profile_delete_page_three_heading)
                }), (0, n.jsx)(E.Body, {
                  size: "MD",
                  children: u.formatMessage(Ua.profile_delete_notice_copy_one)
                }), (0, n.jsx)(E.Alert.Root, {
                  className: "_1arzw2p1",
                  status: "information",
                  background: "two-tone",
                  children: (0, n.jsxs)(E.Alert.Header, {
                    children: [(0, n.jsx)(E.Alert.Icon, {
                      size: "LG"
                    }), (0, n.jsx)(E.Alert.Description, {
                      children: u.formatMessage(Ua.profile_delete_notice_alert_description)
                    })]
                  })
                }), (0, n.jsx)(E.Body, {
                  asChild: !0,
                  size: "MD",
                  children: (0, n.jsxs)("ul", {
                    className: "_1arzw2p2",
                    children: [(0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_one)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_two)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_three)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_four)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_five)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_six)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_seven)
                    }), (0, n.jsx)("li", {
                      children: u.formatMessage(Ua.profile_delete_notice_bullet_eight)
                    })]
                  })
                }), (0, n.jsx)(E.Body, {
                  size: "MD",
                  children: u.formatMessage(Ua.profile_delete_notice_copy_two)
                }), (0, n.jsx)(E.Body, {
                  size: "MD",
                  children: u.formatMessage(Ua.profile_delete_notice_copy_three, {
                    privacyPolicyAnchor: function(e) {
                      return (0, n.jsx)("a", {
                        className: Ia,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: m.getPrivacyPolicyUrl({
                          lang: u.locale
                        }),
                        "data-testid": "privacyPolicyLink",
                        children: e
                      })
                    }
                  })
                })]
              })
            }), (0, n.jsx)(Fn.Scrollbar, {
              orientation: "vertical",
              children: (0, n.jsx)(Fn.Thumb, {})
            })]
          }), (0, n.jsxs)(E.Dialog.Footer, {
            className: "_1arzw2p4",
            children: [(0, n.jsxs)(E.Checkbox.Root, {
              className: "_1arzw2p5",
              size: "XL",
              testId: "confirm_checkbox",
              children: [(0, n.jsx)(E.Checkbox.Input, {
                isChecked: l,
                className: "_1arzw2p6",
                onCheckedChange: function(e) {
                  return d(e)
                },
                testId: "noticeCheckbox"
              }), (0, n.jsx)(E.Checkbox.Label, {
                className: nt(),
                children: u.formatMessage(Ua.profile_delete_notice_checkbox_label)
              })]
            }), (0, n.jsx)(E.Button, {
              appearance: "primary",
              isDisabled: !l || p,
              isLoading: p,
              onClick: function() {
                return (e = function() {
                  var e;
                  return function(e, t) {
                    var r, n, a, i = {
                        label: 0,
                        sent: function() {
                          if (1 & a[0]) throw a[1];
                          return a[1]
                        },
                        trys: [],
                        ops: []
                      },
                      o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                      return this
                    }), o;

                    function s(s) {
                      return function(c) {
                        return function(s) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                            switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                              case 0:
                              case 1:
                                a = s;
                                break;
                              case 4:
                                return i.label++, {
                                  value: s[1],
                                  done: !1
                                };
                              case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                              case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                              default:
                                if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                  i = 0;
                                  continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                  i.label = s[1];
                                  break
                                }
                                if (6 === s[0] && i.label < a[1]) {
                                  i.label = a[1], a = s;
                                  break
                                }
                                if (a && i.label < a[2]) {
                                  i.label = a[2], i.ops.push(s);
                                  break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                            }
                            s = t.call(e, i)
                          } catch (e) {
                            s = [6, e], n = 0
                          } finally {
                            r = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return un(Je.action.agree_to_account_deletion_notices, Je.labels.account_deletion_notice_agree), [4, f({
                          body: o
                        })];
                      case 1:
                        return (null == (e = t.sent()) ? void 0 : e.error) ? un(Je.action.delete_account_error) : (un(Je.action.delete_account_success, Je.labels.account_deletion_success + i), window.location.replace(m.getDeleteAccountLogoutUrl({
                          lang: u.locale
                        }))), [2]
                    }
                  })
                }, function() {
                  var t = this,
                    r = arguments;
                  return new Promise(function(n, a) {
                    var i = e.apply(t, r);

                    function o(e) {
                      za(i, n, a, o, s, "next", e)
                    }

                    function s(e) {
                      za(i, n, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })();
                var e
              },
              size: "XL",
              testId: "confirmDeleteAccount",
              children: u.formatMessage(Ua.profile_delete_notice_agree_button_label)
            })]
          })]
        })
      };

      function Ha(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Ya(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, a, i = [],
              o = !0,
              s = !1;
            try {
              for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Ha(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ha(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      const Wa = function() {
        var e = Ya((0, a.useState)(""), 2),
          t = e[0],
          r = e[1],
          o = Ya((0, a.useState)(!1), 2),
          s = o[0],
          c = o[1],
          l = Ya((0, a.useState)(""), 2),
          d = l[0],
          u = l[1],
          _ = (0, i.useLocation)();
        return (0, a.useEffect)(function() {
          var e = new URLSearchParams(_.hash.substring(1)).get("token");
          e && (r(e), c(!0), window.location.hash = "")
        }, []), (0, n.jsx)(E.Dialog.Root, {
          isOpen: s,
          onOpenChange: c,
          children: (0, n.jsx)(E.Dialog.Overlay, {
            className: Gn,
            testId: "deleteAccountModalOverlay",
            children: (0, n.jsxs)(qn, {
              onCancel: function() {
                return c(!1)
              },
              testId: "deleteAccountModal",
              children: [(0, n.jsx)(Va, {
                deleteReason: d,
                setDeleteReason: u
              }), (0, n.jsx)(Ba, {
                deleteReason: d,
                token: t
              })]
            })
          })
        })
      };

      function Xa(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }
      var Za = function() {
        var e = (0, L.A)(),
          t = an({
            route: Ye.DeleteCheck,
            fetchOnInitial: !1
          }),
          r = t.fetch,
          a = t.loading;
        return (0, n.jsxs)(K, {
          children: [(0, n.jsx)($, {
            testId: "delete-account-section",
            children: (0, n.jsx)(J, {
              children: e.formatMessage(pr.overview_heading_delete_account)
            })
          }), (0, n.jsxs)(ee, {
            className: "_1s8x9ff0",
            testId: "deleteAccountRow",
            children: [(0, n.jsx)(ie, {
              children: (0, n.jsx)(se, {
                className: "whld273",
                children: e.formatMessage(pr.overview_delete_account_description)
              })
            }), (0, n.jsx)(E.Button, {
              appearance: "danger",
              "aria-label": e.formatMessage(pr.overview_delete_account_button_aria_label),
              className: "_1s8x9ff1",
              isDisabled: a,
              isLoading: a,
              onClick: function() {
                return (t = function() {
                  var t;
                  return function(e, t) {
                    var r, n, a, i = {
                        label: 0,
                        sent: function() {
                          if (1 & a[0]) throw a[1];
                          return a[1]
                        },
                        trys: [],
                        ops: []
                      },
                      o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                      return this
                    }), o;

                    function s(s) {
                      return function(c) {
                        return function(s) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                            switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                              case 0:
                              case 1:
                                a = s;
                                break;
                              case 4:
                                return i.label++, {
                                  value: s[1],
                                  done: !1
                                };
                              case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                              case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                              default:
                                if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                  i = 0;
                                  continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                  i.label = s[1];
                                  break
                                }
                                if (6 === s[0] && i.label < a[1]) {
                                  i.label = a[1], a = s;
                                  break
                                }
                                if (a && i.label < a[2]) {
                                  i.label = a[2], i.ops.push(s);
                                  break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                            }
                            s = t.call(e, i)
                          } catch (e) {
                            s = [6, e], n = 0
                          } finally {
                            r = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return [4, r({})];
                      case 1:
                        return (null == (t = n.sent()) ? void 0 : t.error) || (un(Je.action.start_account_deletion, Je.labels.start_account_deletion), window.location.href = m.getAovUrl({
                          lang: e.locale
                        })), [2]
                    }
                  })
                }, function() {
                  var e = this,
                    r = arguments;
                  return new Promise(function(n, a) {
                    var i = t.apply(e, r);

                    function o(e) {
                      Xa(i, n, a, o, s, "next", e)
                    }

                    function s(e) {
                      Xa(i, n, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })();
                var t
              },
              size: "LG",
              testId: "startAccountDeletion",
              children: e.formatMessage(pr.overview_delete_account_button_label)
            })]
          }), (0, n.jsx)(Wa, {})]
        })
      };
      const Ka = function(e) {
        var t = e.account;
        return t && (0, n.jsx)("div", {
          className: "whld270",
          children: (0, n.jsxs)(Z, {
            children: [(0, n.jsx)(ga, {
              account: t
            }), (0, n.jsx)(Ma, {
              nickname: t.nickName,
              email: t.email,
              dob: t.dob
            }), (0, n.jsx)(qa, {}), (0, n.jsx)(Za, {})]
          })
        })
      };
      var $a = function(e) {
          return e.None = "none", e.Friends = "friends", e.FriendsAndCrews = "friendsAndCrews", e.Everyone = "everyone", e
        }({}),
        Ja = function(e) {
          return e.ProfileVisibility = "profileVisibility", e.ProfileFriends = "profileFriends", e.ProfileLocation = "profileLocation", e.GameplayVisibility = "gameplayVisibility", e.GameplayComparison = "gameplayComparison", e
        }({}),
        Qa = function(e) {
          return e.CrewInviteEmails = "crewInviteEmails", e.DirectMessageEmails = "directMessageEmails", e.FriendRequestEmails = "friendRequestEmails", e
        }({});
      const ei = (0, fe.YK)({
        privacy_settings_title: {
          defaultMessage: "Profile Page and Info",
          description: "The headline for the Privacy Info section.",
          id: "privacy_settings_title"
        },
        privacy_settings_description: {
          defaultMessage: "Manage how info on your Rockstar Games profile page appears in other areas of our site.",
          description: "The description for the Privacy Info section.",
          id: "privacy_settings_description"
        },
        privacy_settings_tooltip_disclaimer: {
          defaultMessage: "Use the settings on this page to manage certain profile information. Certain information will always be visible such as Crew membership and multiplayer data.",
          description: "The text notifying the user of privacy defaults and purpose",
          id: "privacy_settings_tooltip_disclaimer"
        },
        privacy_settings_visibility_sublabel: {
          defaultMessage: "Profile Visibility",
          description: "The sub-label for the visibility section.",
          id: "privacy_settings_visibility_sublabel"
        },
        privacy_settings_visibility_dropdown_label: {
          defaultMessage: "Select Visibility Setting",
          description: "The dropdown label for screen readers.",
          id: "privacy_settings_visibility_dropdown_label"
        },
        privacy_settings_visibility_dropdown_placeholder: {
          defaultMessage: "Select Visibility Setting",
          description: "The dropdown label for screen readers.",
          id: "privacy_settings_visibility_dropdown_placeholder"
        },
        privacy_settings_visibility_me_only_option: {
          defaultMessage: "Me Only",
          description: "The Me Only option in visibility settings.",
          id: "privacy_settings_visibility_me_only_option"
        },
        privacy_settings_visibility_everyone_option: {
          defaultMessage: "Everyone",
          description: "The Everyone option in visibility settings.",
          id: "privacy_settings_visibility_everyone_option"
        },
        privacy_settings_visibility_friends_option: {
          defaultMessage: "Friends",
          description: "The Friends option in visibility settings.",
          id: "privacy_settings_visibility_friends_option"
        },
        privacy_settings_visibility_friends_and_crews_option: {
          defaultMessage: "Friends & Crews",
          description: "The Friends & crews option in visibility settings.",
          id: "privacy_settings_visibility_friends_and_crews_option"
        },
        privacy_settings_showfriends_label: {
          defaultMessage: "Show my Friends",
          description: "The label for show my friends field.",
          id: "privacy_settings_showfriends_label"
        },
        privacy_settings_showfriends_switch_label: {
          defaultMessage: "Toggle show my friends",
          description: "The switch label for screen readers.",
          id: "privacy_settings_showfriends_switch_label"
        },
        privacy_settings_showcountry_label: {
          defaultMessage: "Show my Country / Region",
          description: "The label for the show my country label.",
          id: "privacy_settings_showcountry_label"
        },
        privacy_settings_showcountry_switch_label: {
          defaultMessage: "Toggle show my country / region",
          description: "The switch label for the show my country / region.",
          id: "privacy_settings_showcountry_switch_label"
        },
        privacy_game_stats_title: {
          defaultMessage: "Game Stats",
          description: "The title for the Game Stats section.",
          id: "privacy_game_stats_title"
        },
        privacy_game_stats_description: {
          defaultMessage: "Control who can view your profile and player stats via Rockstar features and services.",
          description: "The description for the Game Stats section.",
          id: "privacy_game_stats_description"
        },
        privacy_game_stats_stats_visibility_sublabel: {
          defaultMessage: "Game Stats Visibility",
          description: "The heading for the game stats visibility row.",
          id: "privacy_game_stats_stats_visibility_sublabel"
        },
        privacy_game_stats_stats_visibility_dropdown_label: {
          defaultMessage: "Select Visibility Settings",
          description: "The label for game stats visibility dropdown.",
          id: "privacy_game_stats_stats_visibility_dropdown_label"
        },
        privacy_game_stats_stats_visibility_dropdown_placeholder: {
          defaultMessage: "Me Only",
          description: "The placeholder text for game stats visibility dropdown.",
          id: "privacy_game_stats_stats_visibility_dropdown_placeholder"
        },
        privacy_game_stats_allow_platform_comparison_label: {
          defaultMessage: "Allow Platform Friend Comparison",
          description: "The label for the allow platform friend comparison toggle.",
          id: "privacy_game_stats_allow_platform_comparison_label"
        },
        privacy_game_stats_allow_platform_comparison_switch_label: {
          defaultMessage: "Toggle platform friend comparison",
          description: "The accessible label for the allow platform friend comparison toggle.",
          id: "privacy_game_stats_allow_platform_comparison_switch_label"
        },
        privacy_request_data_label: {
          defaultMessage: "Request My Data",
          description: "The label for the Request Data section.",
          id: "privacy_request_data_label"
        },
        privacy_request_data_description: {
          defaultMessage: "You can request a copy of the personal data we've collected about you at any time. Simply select the Request My Data button, and we'll prepare your information and send it to your account email.",
          description: "The description for what requesting data will do",
          id: "privacy_request_data_description"
        },
        privacy_request_data_being_processed: {
          defaultMessage: "Your data is currently being prepared. Please check back soon.",
          description: "The description for when requesting data is processing.",
          id: "privacy_request_data_being_processed"
        },
        privacy_request_data_delivered: {
          defaultMessage: "Check your email {email} for instructions on how to download it. You will be able to request your data again in {numberOfDays} days.",
          description: "The description for when requesting data is delivered.",
          id: "privacy_request_data_delivered"
        },
        privacy_request_data_delivered_header: {
          defaultMessage: "Your data request is ready",
          description: "The header for when requesting data is delivered.",
          id: "privacy_request_data_delivered_header"
        },
        privacy_request_data_cancel: {
          defaultMessage: "Cancel Request",
          description: "The description for cancelling a DSAR.",
          id: "privacy_request_data_cancel"
        },
        privacy_request_data_status_failed: {
          defaultMessage: "There was an unexpected error retrieving the status of your data request. Please contact Rockstar Games Support.",
          description: "The description when getting a dsar status fails (unexpected).",
          id: "privacy_request_data_status_failed"
        },
        privacy_request_data_confirm_cancellation_description: {
          defaultMessage: "Selecting Confirm Cancellation will cancel your current Data Request. We limit the number of cancellations you can submit per data request. As a result, you will hit a cancellation limit preventing you from requesting your data again for one month should you repeatedly cancel and re-request your data.",
          description: "The description when confirming a dsar cancellation.",
          id: "privacy_request_data_confirm_cancellation_description"
        },
        privacy_request_data_confirm_cancellation_button: {
          defaultMessage: "Confirm Cancellation",
          description: "The button label when confirming a dsar cancellation.",
          id: "privacy_request_data_confirm_cancellation_button"
        },
        privacy_request_data_canceled: {
          defaultMessage: "Data request successfully canceled.",
          description: "The toast message after a successful cancellation",
          id: "privacy_request_data_canceled"
        },
        privacy_request_data_cancellation_failed: {
          defaultMessage: "There was an unexpected error cancelling your data request. Please contact Rockstar Games Support.",
          description: "The description when getting a dsar cancellation fails (unexpected).",
          id: "privacy_request_data_cancellation_failed"
        },
        privacy_request_data_initiated: {
          defaultMessage: "You will receive a notification at your account email once your data is ready. Please note that it may take up to 24 hours for the notification to arrive, and you will not be able to submit another request for one month.",
          description: "The description when a dsar initialization is successful.",
          id: "privacy_request_data_initiated"
        },
        privacy_request_data_download_limit_reached_title: {
          defaultMessage: "Download Limit Reached",
          description: "Download limit reached modal title text.",
          id: "privacy_request_data_download_limit_reached_title"
        },
        privacy_request_data_download_limit_reached_description: {
          defaultMessage: "You have reached the download limit for this Data Request. You can make a new Data Request next month.",
          description: "Download limit reached modal description text.",
          id: "privacy_request_data_download_limit_reached_description"
        },
        privacy_request_data_download_reaching_limit_confirm: {
          defaultMessage: "Confirm Download",
          description: "Confirm Download button text",
          id: "privacy_request_data_download_reaching_limit_confirm"
        },
        privacy_request_data_download_reaching_limit_title: {
          defaultMessage: "Reaching Download Limit",
          description: "Download reaching limit modal title text.",
          id: "privacy_request_data_download_reaching_limit_title"
        },
        privacy_request_data_download_reaching_limit_description: {
          defaultMessage: "You are about to reach the download limit for this Data Request. Selecting Confirm Download will provide a final copy of the data we've collected. Downloading this request means you will not be able to make another request for a month.",
          description: "Download reaching limit modal description text.",
          id: "privacy_request_data_download_reaching_limit_description"
        }
      });

      function ti(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var ri = function(e) {
        var t, r, i = e.gameplayVisibility,
          o = e.gameplayComparison,
          s = e.updatePrivacySettings,
          c = e.visibilityOptions,
          l = (0, L.A)(),
          d = (t = (0, a.useState)(!1), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return ti(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ti(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          _ = d[1],
          f = function(e) {
            var t = e ? Je.labels.profile_privacy_yes : Je.labels.profile_privacy_no;
            un(Je.action.profile_privacy_gameplay_comparison, t), s(Ja.GameplayComparison, e ? $a.Everyone : $a.None)
          },
          p = o === $a.Everyone;
        return (0, n.jsxs)(K, {
          children: [(0, n.jsxs)($, {
            children: [(0, n.jsx)(J, {
              children: l.formatMessage(ei.privacy_game_stats_title)
            }), (0, n.jsx)(Q, {
              children: l.formatMessage(ei.privacy_game_stats_description)
            })]
          }), (0, n.jsxs)(ee, {
            children: [(0, n.jsxs)(te, {
              isInteractable: !0,
              onClick: function() {
                return _(!0)
              },
              testId: "gameStatsVisibilityRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: l.formatMessage(ei.privacy_game_stats_stats_visibility_sublabel)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Dropdown.Root, {
                  className: Oa,
                  isOpen: u,
                  onClick: function(e) {
                    return e.stopPropagation()
                  },
                  onOpenChange: _,
                  onValueChange: function(e) {
                    var t, r = null === (t = c.find(function(t) {
                      return t.value === e
                    })) || void 0 === t ? void 0 : t.gaLabel;
                    un(Je.action.profile_privacy_gameplay_visibility, r), s(Ja.GameplayVisibility, e)
                  },
                  value: i,
                  children: [(0, n.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: l.formatMessage(ei.privacy_game_stats_stats_visibility_dropdown_label)
                  }), (0, n.jsxs)(E.Dropdown.Trigger, {
                    testId: "gameplayVisibilityDropdown",
                    className: Aa,
                    children: [(0, n.jsx)(E.Dropdown.TriggerText, {
                      placeholder: l.formatMessage(ei.privacy_game_stats_stats_visibility_dropdown_placeholder)
                    }), (0, n.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, n.jsx)(E.Dropdown.Portal, {
                    children: (0, n.jsx)(E.Dropdown.Content, {
                      className: Sa,
                      children: (0, n.jsx)(E.Dropdown.ScrollArea, {
                        children: c.filter(function(e) {
                          return !e.hide
                        }).map(function(e) {
                          return (0, n.jsx)(E.Dropdown.Option, {
                            value: e.value,
                            testId: "".concat(e.value, "Option"),
                            children: (0, n.jsx)(E.Dropdown.OptionText, {
                              children: e.text
                            })
                          }, "visibility-option-".concat(e.value))
                        })
                      })
                    })
                  })]
                })
              })]
            }), (0, n.jsx)(re, {
              thickness: "thin"
            }), (0, n.jsxs)(te, {
              isInteractable: !0,
              label: l.formatMessage(ei.privacy_game_stats_allow_platform_comparison_switch_label),
              onClick: function() {
                return f(!p)
              },
              testId: "gameStatsFriendComparisonRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: l.formatMessage(ei.privacy_game_stats_allow_platform_comparison_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Switch.Root, {
                  children: [(0, n.jsx)(E.Switch.Input, {
                    className: G,
                    onSelectedChange: f,
                    isSelected: p,
                    testId: "gameplayComparison"
                  }), (0, n.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: l.formatMessage(ei.privacy_game_stats_allow_platform_comparison_switch_label)
                  })]
                })
              })]
            })]
          })]
        })
      };

      function ni(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var ai = function(e) {
        var t, r, i = e.profileVisibility,
          o = e.profileFriends,
          s = e.profileLocation,
          c = e.visibilityOptions,
          l = e.updatePrivacySettings,
          d = (0, L.A)(),
          u = (t = (0, a.useState)(!1), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return ni(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ni(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          _ = u[0],
          f = u[1],
          p = function(e) {
            var t = e ? Je.labels.profile_privacy_yes : Je.labels.profile_privacy_no;
            un(Je.action.profile_privacy_friends_visibility, t), l(Ja.ProfileFriends, e ? $a.Everyone : $a.None)
          },
          m = function(e) {
            var t = e ? Je.labels.profile_privacy_yes : Je.labels.profile_privacy_no;
            un(Je.action.profile_privacy_country_visibility, t), l(Ja.ProfileLocation, e ? $a.Everyone : $a.None)
          },
          h = o === $a.Everyone,
          g = s === $a.Everyone;
        return (0, n.jsxs)(K, {
          children: [(0, n.jsxs)($, {
            children: [(0, n.jsxs)(J, {
              children: [d.formatMessage(ei.privacy_settings_title), (0, n.jsx)(va, {
                side: "bottom",
                testIdPrefix: "privacy-settings",
                message: d.formatMessage(ei.privacy_settings_tooltip_disclaimer)
              })]
            }), (0, n.jsx)(Q, {
              children: d.formatMessage(ei.privacy_settings_description)
            })]
          }), (0, n.jsxs)(ee, {
            children: [(0, n.jsxs)(te, {
              isInteractable: !0,
              onClick: function() {
                return f(!0)
              },
              testId: "profileVisibilityRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: d.formatMessage(ei.privacy_settings_visibility_sublabel)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Dropdown.Root, {
                  className: Oa,
                  isOpen: _,
                  onClick: function(e) {
                    return e.stopPropagation()
                  },
                  onOpenChange: f,
                  onValueChange: function(e) {
                    var t, r = null === (t = c.find(function(t) {
                      return t.value === e
                    })) || void 0 === t ? void 0 : t.gaLabel;
                    un(Je.action.profile_privacy_visibility, r), l(Ja.ProfileVisibility, e)
                  },
                  value: i,
                  children: [(0, n.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: d.formatMessage(ei.privacy_settings_visibility_dropdown_label)
                  }), (0, n.jsxs)(E.Dropdown.Trigger, {
                    testId: "profileVisibilityDropdown",
                    className: Aa,
                    children: [(0, n.jsx)(E.Dropdown.TriggerText, {
                      placeholder: d.formatMessage(ei.privacy_settings_visibility_dropdown_placeholder)
                    }), (0, n.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, n.jsx)(E.Dropdown.Portal, {
                    children: (0, n.jsx)(E.Dropdown.Content, {
                      className: Sa,
                      children: (0, n.jsx)(E.Dropdown.ScrollArea, {
                        children: c.filter(function(e) {
                          return !e.hide
                        }).map(function(e) {
                          return (0, n.jsx)(E.Dropdown.Option, {
                            value: e.value,
                            testId: "".concat(e.value, "Option"),
                            children: (0, n.jsx)(E.Dropdown.OptionText, {
                              children: e.text
                            })
                          }, "visibility-option-".concat(e.value))
                        })
                      })
                    })
                  })]
                })
              })]
            }), (0, n.jsx)(re, {
              thickness: "thin"
            }), (0, n.jsxs)(te, {
              isInteractable: !0,
              label: d.formatMessage(ei.privacy_settings_showfriends_switch_label),
              onClick: function() {
                return p(!h)
              },
              testId: "showFriendsRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: d.formatMessage(ei.privacy_settings_showfriends_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Switch.Root, {
                  children: [(0, n.jsx)(E.Switch.Input, {
                    className: G,
                    onSelectedChange: p,
                    isSelected: h,
                    testId: "profileFriends",
                    onPress: function(e) {
                      return e.stopPropagation()
                    }
                  }), (0, n.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: d.formatMessage(ei.privacy_settings_showfriends_switch_label)
                  })]
                })
              })]
            }), (0, n.jsx)(re, {
              thickness: "thin"
            }), (0, n.jsxs)(te, {
              isInteractable: !0,
              label: d.formatMessage(ei.privacy_settings_showcountry_switch_label),
              onClick: function() {
                return m(!g)
              },
              testId: "showLocationRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: d.formatMessage(ei.privacy_settings_showcountry_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Switch.Root, {
                  children: [(0, n.jsx)(E.Switch.Input, {
                    className: G,
                    onSelectedChange: m,
                    isSelected: g,
                    testId: "profileLocation",
                    onPress: function(e) {
                      return e.stopPropagation()
                    }
                  }), (0, n.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: d.formatMessage(ei.privacy_settings_showcountry_switch_label)
                  })]
                })
              })]
            })]
          })]
        })
      };

      function ii(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function oi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var si = function(e) {
        var t = e.isMinor,
          r = (0, L.A)(),
          i = [{
            text: r.formatMessage(ei.privacy_settings_visibility_me_only_option),
            value: $a.None,
            hide: !1,
            gaLabel: Je.labels.profile_privacy_visibility_me_only
          }, {
            text: r.formatMessage(ei.privacy_settings_visibility_friends_option),
            value: $a.Friends,
            hide: !1,
            gaLabel: Je.labels.profile_privacy_visibility_friends
          }, {
            text: r.formatMessage(ei.privacy_settings_visibility_friends_and_crews_option),
            value: $a.FriendsAndCrews,
            hide: t,
            gaLabel: Je.labels.profile_privacy_visibility_friends_and_crews
          }, {
            text: r.formatMessage(ei.privacy_settings_visibility_everyone_option),
            value: $a.Everyone,
            hide: t,
            gaLabel: Je.labels.profile_privacy_visibility_everyone
          }],
          o = an({
            route: Ye.GetPrivacySettings
          }),
          s = o.data,
          c = o.setData,
          l = o.loading,
          d = an({
            route: Ye.UpdatePrivacySettings,
            fetchOnInitial: !1
          }).fetch,
          u = (0, a.useCallback)((0, Mt.A)(function(e, t) {
            return (r = function() {
              var r;
              return function(e, t) {
                var r, n, a, i = {
                    label: 0,
                    sent: function() {
                      if (1 & a[0]) throw a[1];
                      return a[1]
                    },
                    trys: [],
                    ops: []
                  },
                  o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                  return this
                }), o;

                function s(s) {
                  return function(c) {
                    return function(s) {
                      if (r) throw new TypeError("Generator is already executing.");
                      for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                        if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                        switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                          case 0:
                          case 1:
                            a = s;
                            break;
                          case 4:
                            return i.label++, {
                              value: s[1],
                              done: !1
                            };
                          case 5:
                            i.label++, n = s[1], s = [0];
                            continue;
                          case 7:
                            s = i.ops.pop(), i.trys.pop();
                            continue;
                          default:
                            if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                              i = 0;
                              continue
                            }
                            if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                              i.label = s[1];
                              break
                            }
                            if (6 === s[0] && i.label < a[1]) {
                              i.label = a[1], a = s;
                              break
                            }
                            if (a && i.label < a[2]) {
                              i.label = a[2], i.ops.push(s);
                              break
                            }
                            a[2] && i.ops.pop(), i.trys.pop();
                            continue
                        }
                        s = t.call(e, i)
                      } catch (e) {
                        s = [6, e], n = 0
                      } finally {
                        r = a = 0
                      }
                      if (5 & s[0]) throw s[1];
                      return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                      }
                    }([s, c])
                  }
                }
              }(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, d({
                      body: e
                    })];
                  case 1:
                    return (null == (r = n.sent()) ? void 0 : r.error) && c(t), [2]
                }
              })
            }, function() {
              var e = this,
                t = arguments;
              return new Promise(function(n, a) {
                var i = r.apply(e, t);

                function o(e) {
                  ii(i, n, a, o, s, "next", e)
                }

                function s(e) {
                  ii(i, n, a, o, s, "throw", e)
                }
                o(void 0)
              })
            })();
            var r
          }, 1e3), []),
          _ = function(e, t) {
            var r = function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              }(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                  oi(e, t, r[t])
                })
              }
              return e
            }({}, s), oi({}, e, t));
            u(r, s), c(r)
          };
        return (0, n.jsx)(_r, {
          isLoading: l,
          children: s && (0, n.jsxs)(Z, {
            testId: "privacySettings",
            children: [(0, n.jsx)(ai, {
              profileVisibility: s.profileVisibility,
              profileFriends: s.profileFriends,
              profileLocation: s.profileLocation,
              visibilityOptions: i,
              updatePrivacySettings: _
            }), (0, n.jsx)(ri, {
              gameplayVisibility: s.gameplayVisibility,
              gameplayComparison: s.gameplayComparison,
              visibilityOptions: i,
              updatePrivacySettings: _
            })]
          })
        })
      };
      const ci = function(e) {
        var t = e.isLoading,
          r = (0, L.A)();
        return (0, n.jsx)(E.Dialog.Root, {
          isOpen: t,
          children: (0, n.jsx)(E.Dialog.Overlay, {
            testId: "verifyEmailChangedOverlay",
            children: (0, n.jsx)(E.Dialog.Content, {
              "aria-describedby": void 0,
              className: "pb0kad1",
              onEscapeKeyDown: function(e) {
                return e.preventDefault()
              },
              onInteractOutside: function(e) {
                return e.preventDefault()
              },
              testId: "verifyEmailChangedLoading",
              children: (0, n.jsxs)(Fn.Root, {
                children: [(0, n.jsx)(Fn.Viewport, {
                  children: (0, n.jsxs)(E.Dialog.Layout, {
                    children: [(0, n.jsx)(E.Loader, {
                      className: "pb0kad2",
                      size: "LG",
                      testId: "loader"
                    }), (0, n.jsx)(E.Dialog.Title, {
                      children: r.formatMessage(Ke.email_change_verifying_new_email)
                    })]
                  })
                }), (0, n.jsx)(Fn.Scrollbar, {
                  orientation: "vertical",
                  children: (0, n.jsx)(Fn.Thumb, {})
                })]
              })
            })
          })
        })
      };

      function li(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      const di = function() {
          var e, t, r = (0, L.A)(),
            o = qe(),
            s = (e = (0, i.useSearchParams)(), t = 1, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return li(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? li(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            c = (0, i.useNavigate)(),
            l = s.get("emailCookie"),
            d = an({
              fetchOnInitial: !1,
              route: Ye.UpdateEmail
            }),
            u = d.fetch,
            _ = d.loading,
            f = an({
              fetchOnInitial: !1,
              route: Ye.ProfileOverview
            }),
            p = f.fetch,
            m = f.loading;
          (0, a.useEffect)(function() {
            l && u({
              body: {
                emailCookie: l
              }
            }).then(function(e) {
              e.error || p({}).then(function(e) {
                e.error || o.displayNewToast({
                  appearance: "success",
                  message: r.formatMessage(Ke.email_change_success)
                })
              }), c("/account")
            })
          }, []);
          var h = Boolean(l) && (_ || m);
          return (0, n.jsx)(ci, {
            isLoading: h
          })
        },
        ui = (0, fe.YK)({
          connections_title: {
            defaultMessage: "Connections",
            description: "Title for the connections page",
            id: "connections_title"
          },
          connections_subtitle: {
            defaultMessage: "Manage networks connected to your Rockstar Games account.",
            description: "Sub-title for the connections page",
            id: "connections_subtitle"
          },
          connections_google: {
            defaultMessage: "Google",
            description: "Brand name for Google",
            id: "connections_google"
          },
          connections_steam: {
            defaultMessage: "Steam",
            description: "Brand name for Steam",
            id: "connections_steam"
          },
          connections_xbl: {
            defaultMessage: "Xbox network",
            description: "Brand name for Xbox",
            id: "connections_xbl"
          },
          connections_xblpc: {
            defaultMessage: "Xbox PC app",
            description: "Brand name for PC Gamepass",
            id: "connections_xblpc"
          },
          connections_np: {
            defaultMessage: "PlayStation™Network",
            description: "Brand name for PlayStation",
            id: "connections_np"
          },
          connections_twitch: {
            defaultMessage: "Twitch",
            description: "Brand name for Twitch",
            id: "connections_twitch"
          },
          connections_amazon: {
            defaultMessage: "Amazon",
            description: "Brand name for Amazon",
            id: "connections_amazon"
          },
          connections_discord: {
            defaultMessage: "Discord",
            description: "Brand name for Discord",
            id: "connections_discord"
          },
          connections_epic: {
            defaultMessage: "Epic",
            description: "Brand name for Epic",
            id: "connections_epic"
          },
          connections_nintendoswitch: {
            defaultMessage: "Nintendo Switch",
            description: "Brand name for Nintendo Switch",
            id: "connections_nintendoswitch"
          },
          connections_link_button_text: {
            defaultMessage: "Link",
            description: "Button text for the link button on the connections listing page",
            id: "connections_link_button_text"
          },
          connections_link_button_aria_label: {
            defaultMessage: "Link your {connection} account",
            description: "Button aria label for the link button on the connections listing page",
            id: "connections_link_button_aria_label"
          },
          connections_linked_navigation_aria_label: {
            defaultMessage: "{connection} details",
            description: "Aria label text for the linked account navigation button on each connection row",
            id: "connections_linked_navigation_aria_label"
          },
          connections_linked_avatar_icon_aria_label: {
            defaultMessage: "The avatar for {connection}",
            description: "Aria label text for the the user's avatar image associated with the linked online service",
            id: "connections_linked_avatar_icon_aria_label"
          },
          connections_linked_date: {
            defaultMessage: "Linked on {date}",
            description: "Date text for when a specific connection was linked to the current account",
            id: "connections_linked_date"
          },
          connections_header_nav_aria_label: {
            defaultMessage: "Return to main profile connections page",
            description: "Aria label text for the return nav button in the sub page header",
            id: "connections_header_nav_aria_label"
          },
          connections_account_name_unavailable: {
            defaultMessage: "Name not available",
            description: "The text displayed in place of a gamer tag when a name is not provided for the connected account",
            id: "connections_account_name_unavailable"
          },
          connections_visibility_label: {
            defaultMessage: "Visibility",
            description: "Visibility label text on the details page for a specific connection",
            id: "connections_visibility_label"
          },
          connections_visibility_aria_label: {
            defaultMessage: "Account visibility",
            description: "Visibility aria label on the details page for a specific connection",
            id: "connections_visibility_aria_label"
          },
          connections_visibility_me_only: {
            defaultMessage: "Me Only",
            description: "The visibility option text for the Me Only privacy setting",
            id: "connections_visibility_me_only"
          },
          connections_visibility_friends: {
            defaultMessage: "Friends",
            description: "The visibility option text for the Friends privacy setting",
            id: "connections_visibility_friends"
          },
          connections_visibility_friends_and_crews: {
            defaultMessage: "Friends & Crews",
            description: "The visibility option text for the Friends & Crews privacy setting",
            id: "connections_visibility_friends_and_crews"
          },
          connections_visibility_everyone: {
            defaultMessage: "Everyone",
            description: "The visibility option text for the Everyone privacy setting",
            id: "connections_visibility_everyone"
          },
          connections_unlink_button_text: {
            defaultMessage: "Unlink",
            description: "Text for the unlink button on the connection details page",
            id: "connections_unlink_button_text"
          },
          connections_unlink_button_aria_label: {
            defaultMessage: "Unlink {connection}",
            description: "Text for the unlink button aria label on the connection details page",
            id: "connections_unlink_button_aria_label"
          },
          connections_unlinkable_footer_text: {
            defaultMessage: "{connection} accounts are permanently linked to Rockstar Games accounts. If you are having issues with your account, please contact <steamSupportAnchor>customer support</steamSupportAnchor>",
            description: "Footer text that appears specifically in the details page for a Steam account",
            id: "connections_unlinkable_footer_text"
          }
        });
      var _i = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          viewBox: "0 0 40 40",
          "aria-label": r,
          role: "img",
          children: [(0, n.jsxs)("g", {
            children: [(0, n.jsx)("path", {
              fill: "#f90",
              fillRule: "evenodd",
              d: "M24.8147,23.3995c-2.3239,1.715-5.6928,2.6269-8.5941,2.6269-4.0659,0-7.7273-1.5029-10.498-4.0047-.2176-.1965-.0235-.4647.238-.3126,2.9893,1.7395,6.6861,2.7871,10.5042,2.7871,2.5756,0,5.4068-.5345,8.0121-1.6396.3929-.1666.7222.2588.3378.5429h0Z"
            }), (0, n.jsx)("path", {
              fill: "#f90",
              fillRule: "evenodd",
              d: "M25.7817,22.2955c-.2972-.3805-1.9646-.1803-2.7139-.0905-.2269.0272-.2621-.1711-.0576-.3147,1.3303-.9343,3.5099-.6646,3.7633-.3517.2551.3155-.0671,2.5008-1.3136,3.5437-.1919.1603-.3743.0748-.2891-.137.2805-.7005.9084-2.2689.6109-2.6497h0Z"
            })]
          }), (0, n.jsxs)("g", {
            children: [(0, n.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M23.1206,15.29v-.9079c.0009-.1383.1048-.2302.2302-.2298l4.0691-.0004c.1301,0,.2346.0947.2346.229v.7786c-.0013.1307-.1113.301-.3064.5715l-2.1078,3.0093c.7824-.0183,1.61.099,2.3209.4985.1603.09.2033.2233.2158.3542v.9688c0,.1333-.1461.2879-.2997.2074-1.2523-.656-2.9143-.7276-4.2991.0082-.1416.0753-.2895-.077-.2895-.2107v-.9207c0-.1475.0028-.3994.1514-.6239l2.4419-3.5033-2.1262-.0002c-.1299,0-.2343-.0926-.2352-.2286h0Z"
            }), (0, n.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M31.1686,15.332c-.9129,0-.9705,1.243-.9705,2.0186s-.0115,2.4331.9593,2.4331c.9591,0,1.0052-1.3369,1.0052-2.1522,0-.5347-.0231-1.1766-.1852-1.6847-.1385-.4413-.416-.6149-.8088-.6149h0ZM31.1574,14.0349c1.8372,0,2.8307,1.5778,2.8307,3.5831,0,1.9383-1.0973,3.4762-2.8307,3.4762-1.8027,0-2.7851-1.578-2.7851-3.543,0-1.9788.9937-3.5162,2.7851-3.5162h0Z"
            }), (0, n.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M21.1255,20.9444c-.0818.0736-.2314.076-.2924.0288-.423-.3272-.7096-.8249-.7096-.8249-.6796.6921-1.1609.8999-2.0409.8999-1.0421,0-1.8528-.6433-1.8528-1.9294,0-1.0049.5442-1.6882,1.3202-2.0232.6715-.2949,1.6097-.3484,2.3274-.429,0,0,.06-.7757-.1503-1.0584-.1629-.2192-.4402-.3217-.6947-.3217-.4593-.0019-.9029.2479-.991.7283-.0251.1373-.1266.2527-.2334.2412l-1.1854-.1284c-.0908-.0105-.2141-.1041-.1849-.2589.2757-1.4555,1.5901-1.8952,2.7682-1.8952.6022,0,1.3896.1605,1.8645.6163.602.5627.5443,1.3132.5443,2.1307v1.9282c0,.5804.2408.8347.467,1.1471.0789.1129.0969.2466-.0038.3291-.253.212-.9523.8194-.9523.8194h0ZM19.8773,17.9262c0,.4826.0118.8842-.2314,1.3132-.1968.3481-.5096.5627-.857.5627-.4747,0-.7527-.3619-.7527-.8979,0-1.0543.9459-1.2459,1.8411-1.2459v.2679h0Z"
            }), (0, n.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M4.8974,20.9444c-.0818.0736-.2314.076-.2924.0288-.423-.3272-.7096-.8249-.7096-.8249-.6797.6921-1.1608.8999-2.0409.8999C.8123,21.0482.0017,20.4049.0017,19.1188c0-1.0049.5441-1.6882,1.3201-2.0232.6715-.2949,1.6097-.3484,2.3274-.429,0,0,.0599-.7757-.1503-1.0584-.163-.2192-.4403-.3217-.6948-.3217-.4592-.0019-.9029.2479-.9909.7283-.0252.1373-.1266.2527-.2334.2412l-1.1855-.1284c-.0909-.0105-.2141-.1041-.1849-.2589.2757-1.4555,1.5901-1.8952,2.7683-1.8952.6022,0,1.3896.1605,1.8645.6163.602.5627.5443,1.3132.5443,2.1307v1.9282c0,.5804.2409.8347.467,1.1471.0789.1129.097.2466-.0039.3291-.2529.212-.9523.8194-.9523.8194h0ZM3.6493,17.9262c0,.4826.0116.8842-.2315,1.3132-.1967.3481-.5095.5627-.8569.5627-.4746,0-.7527-.3619-.7527-.8979,0-1.0543.9459-1.2459,1.8412-1.2459v.2679h0Z"
            }), (0, n.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M8.5175,17.3638c0-.7353-.0348-1.7511.8551-1.7511.878,0,.7625,1.0426.7625,1.7511l.0012,3.3683c0,.1219.0979.2202.2223.2281h1.2365c.1319,0,.2386-.1019.2386-.2286v-3.3678c0-.3611-.0115-.8956.1155-1.2167.1272-.3208.4393-.5214.7398-.5214.358,0,.6354.1205.7278.5484.0579.254.0348.9226.0348,1.1896l.0004,3.3683c0,.1219.0977.2202.222.2281h1.2364c.1321,0,.2388-.1019.2388-.2286l.0012-4.0094c0-.682.0807-1.4572-.3122-1.9921-.3466-.4814-.9128-.6953-1.4328-.6953-.7279,0-1.4097.3744-1.7103,1.1766-.3466-.8022-.8321-1.1766-1.6062-1.1766-.7625,0-1.3288.3744-1.6291,1.1766h-.0233v-.8113c0-.1277-.1035-.2313-.2313-.2313h-1.1551c-.1277,0-.2312.1035-.2312.2313v6.3288c0,.1277.1035.2312.2312.2312h1.2361c.1277,0,.2313-.1035.2313-.2312v-3.3651h0Z"
            }), (0, n.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M36.6126,20.729c0,.1277-.1035.2312-.2312.2312h-1.2362c-.1276,0-.2312-.1035-.2312-.2312v-6.3288c0-.1277.1036-.2313.2312-.2313h1.143c.1339,0,.2312.1077.2312.1806v.9688h.0238c.3468-.8692.8318-1.2835,1.6869-1.2835.5548,0,1.0979.2004,1.4446.7488.3235.5079.3235,1.3635.3235,1.9786v3.998c-.0138.1125-.115.1999-.2374.1999h-1.2408c-.1147-.0073-.2071-.0916-.2203-.1999l.002-3.839c0-1.2844-.4921-1.3221-.7761-1.3221-.3304,0-.5961.2579-.7123.4987-.1732.3879-.2009.7847-.2009,1.2129v3.4183h.0001Z"
            })]
          })]
        })
      });
      _i.displayName = "amazon";
      var fi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsx)("svg", {
          id: "Discord-Logo",
          viewBox: "0 0 58.05 44",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": r,
          role: "img",
          children: (0, n.jsx)("path", {
            fill: "#5865f2",
            id: "Discord-Symbol-Blurple",
            d: "M37.19,0c-.57,1.01-1.08,2.05-1.54,3.11-4.4-.66-8.88-.66-13.29,0-.45-1.06-.97-2.11-1.54-3.11-4.13.71-8.16,1.94-11.98,3.69C1.27,14.91-.78,25.84.24,36.61c4.43,3.28,9.4,5.78,14.69,7.37,1.19-1.6,2.25-3.3,3.15-5.07-1.71-.64-3.37-1.44-4.95-2.36.42-.3.82-.61,1.22-.91,9.3,4.38,20.06,4.38,29.37,0,.39.32.8.64,1.22.91-1.59.94-3.24,1.72-4.97,2.37.9,1.77,1.96,3.47,3.15,5.07,5.29-1.6,10.26-4.09,14.69-7.36,1.2-12.5-2.06-23.34-8.62-32.93-3.81-1.75-7.84-2.99-11.97-3.68v-.02ZM19.38,29.98c-2.86,0-5.23-2.59-5.23-5.8s2.28-5.81,5.22-5.81,5.28,2.62,5.23,5.81c-.05,3.19-2.3,5.8-5.22,5.8ZM38.66,29.98c-2.87,0-5.22-2.59-5.22-5.8s2.28-5.81,5.22-5.81,5.27,2.62,5.22,5.81c-.05,3.19-2.3,5.8-5.22,5.8Z"
          })
        })
      });
      fi.displayName = "discord";
      var pi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsx)("svg", {
          version: "1.1",
          id: "EGS-Logotype-2023-Vertical-Black",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 376.35 430",
          width: "100%",
          xmlSpace: "preserve",
          "aria-label": r,
          role: "img",
          children: (0, n.jsxs)("g", {
            children: [(0, n.jsx)("path", {
              d: "M170.46,128.53v-41.9c0-6.67-3.13-9.76-9.62-9.76h-10.58v61.42h10.58C167.34,138.29,170.46,135.2,170.46,128.53z",
              fill: "#FFFFFF"
            }), (0, n.jsx)("polygon", {
              points: "136.1,277.2 130.34,291.56 141.8,291.56 ",
              fill: "#FFFFFF"
            }), (0, n.jsx)("path", {
              d: "M341.93,0H34.42C9.2,0,0,9.17,0,34.02v302.9c0,3.9,0.7,10.91,1.97,13.91c1.27,3,2.45,5.46,4.8,7.65 c2.43,2.26,6.63,4.61,8.65,5.53l163.01,68.59c3,1.27,6.29,1.97,9.74,1.97c3.46,0,6.75-0.7,9.74-1.97L360.93,364 c2.02-0.92,6.22-3.27,8.65-5.53c2.35-2.19,3.53-4.65,4.8-7.65c1.27-3,1.97-10.01,1.97-13.91V34.02C376.35,9.17,367.15,0,341.93,0z M207.81,54.5h25.74v166.63h-25.74V54.5z M209.14,260.97h14.96v50.5h-14.09v-29.01l-13.07,19.77h-0.29l-13-19.62v28.86h-13.87 v-50.5h14.96l12.19,19.55L209.14,260.97z M124.52,54.5h40.41c20.93,0,31.27,10.23,31.27,30.95v44.28 c0,20.71-10.34,30.94-31.27,30.94h-14.67v60.46h-25.74V54.5z M54.36,54.5h57.25v23.09H80.1v47.14h30.3v23.09H80.1v50.23h31.99 v23.09H54.36V54.5z M103.13,304.74c-2.73,2.21-5.94,4.07-9.64,5.56c-3.7,1.49-7.88,2.24-12.56,2.24c-3.99,0-7.68-0.65-11.06-1.95 c-3.39-1.3-6.31-3.1-8.8-5.41c-2.48-2.31-4.43-5.06-5.84-8.26c-1.41-3.19-2.11-6.7-2.11-10.49v-0.15c0-3.7,0.69-7.15,2.08-10.32 c1.39-3.17,3.3-5.95,5.73-8.33c2.44-2.38,5.34-4.24,8.72-5.59c3.38-1.34,7.04-2.02,10.98-2.02c4.53,0,8.43,0.65,11.72,1.95 c3.28,1.3,6.29,3.1,9.02,5.41l-8.32,9.88c-1.85-1.54-3.74-2.72-5.66-3.53c-1.92-0.82-4.15-1.23-6.68-1.23 c-1.85,0-3.56,0.36-5.15,1.08c-1.58,0.72-2.95,1.71-4.12,2.96c-1.17,1.25-2.09,2.72-2.77,4.4c-0.68,1.68-1.02,3.49-1.02,5.41v0.15 c0,2.02,0.34,3.9,1.02,5.62c0.68,1.73,1.65,3.21,2.88,4.44c1.24,1.23,2.7,2.19,4.38,2.89c1.68,0.69,3.54,1.05,5.59,1.05 c3.31,0,6.03-0.69,8.18-2.09v-6.13H79.63V282h23.5V304.74z M107.63,311.47l21.77-50.87h13.65l21.76,50.87h-15.18l-3.73-9.02h-19.71 l-3.65,9.02H107.63z M250.3,367.36c-0.07,0.16-0.17,0.3-0.29,0.42c-0.12,0.12-0.26,0.22-0.42,0.28l-59.48,25.03 c-0.64,0.27-1.34,0.42-2.07,0.42c-0.73,0-1.43-0.15-2.07-0.42l-59.02-25.03c-0.16-0.07-0.3-0.17-0.42-0.28 c-0.12-0.12-0.22-0.26-0.29-0.42c-0.07-0.16-0.1-0.33-0.1-0.52s0.04-0.36,0.1-0.52c0.07-0.16,0.17-0.3,0.29-0.42 c0.12-0.12,0.26-0.22,0.42-0.29c0.16-0.07,0.33-0.1,0.52-0.1h121.6c0.18,0,0.36,0.04,0.52,0.1c0.16,0.07,0.3,0.16,0.42,0.29 c0.12,0.12,0.22,0.26,0.29,0.42c0.07,0.16,0.1,0.33,0.1,0.52S250.36,367.2,250.3,367.36z M275.04,311.47h-41.47v-50.5h41.1v11.91 h-27.09v7.65h24.53v11.04h-24.53v8.01h27.45V311.47z M247.15,191.61V84.01c0-20.71,10.35-30.95,31.27-30.95h12.51 c20.93,0,31.03,10,31.03,30.71v34.04h-25.25V85.2c0-6.67-3.13-9.76-9.62-9.76h-4.33c-6.74,0-9.86,3.09-9.86,9.76v105.22 c0,6.67,3.13,9.76,9.86,9.76h4.81c6.49,0,9.62-3.09,9.62-9.76v-37.61h25.26v38.8c0,20.71-10.34,30.95-31.27,30.95h-12.75 C257.5,222.56,247.15,212.33,247.15,191.61z M323.42,295.93c0,2.6-0.5,4.91-1.5,6.93s-2.4,3.74-4.2,5.16 c-1.8,1.42-3.96,2.5-6.5,3.25c-2.53,0.75-5.35,1.12-8.47,1.12c-4.58,0-8.92-0.69-13.03-2.09c-4.11-1.4-7.75-3.49-10.91-6.28 l7.88-9.31c5.11,4.04,10.63,6.06,16.57,6.06c1.9,0,3.35-0.3,4.34-0.9c1-0.6,1.5-1.45,1.5-2.56v-0.15c0-0.53-0.13-1-0.37-1.4 c-0.24-0.41-0.69-0.8-1.35-1.19s-1.54-0.76-2.62-1.12c-1.1-0.36-2.51-0.73-4.27-1.12c-2.73-0.63-5.26-1.31-7.59-2.05 c-2.33-0.75-4.37-1.71-6.1-2.89c-1.73-1.18-3.09-2.65-4.09-4.4s-1.5-3.94-1.5-6.53v-0.15c0-2.35,0.45-4.52,1.35-6.5 c0.9-1.98,2.22-3.68,3.94-5.12c1.72-1.44,3.81-2.56,6.24-3.36c2.44-0.79,5.19-1.19,8.25-1.19c4.38,0,8.29,0.56,11.72,1.7 s6.53,2.8,9.31,5.02l-7.08,9.88c-2.33-1.64-4.73-2.87-7.19-3.72c-2.46-0.84-4.83-1.27-7.11-1.27c-1.7,0-2.99,0.32-3.83,0.94 c-0.85,0.62-1.28,1.4-1.28,2.31v0.15c0,0.58,0.13,1.08,0.4,1.51c0.27,0.43,0.73,0.83,1.39,1.19c0.66,0.36,1.56,0.73,2.7,1.08 c1.14,0.36,2.59,0.73,4.34,1.12c2.92,0.62,5.56,1.36,7.92,2.2c2.36,0.84,4.36,1.87,6.03,3.06c1.65,1.2,2.92,2.65,3.79,4.37 c0.88,1.71,1.32,3.74,1.32,6.1V295.93z",
              fill: "#FFFFFF"
            })]
          })
        })
      });
      pi.displayName = "epic games";
      var mi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0",
          y: "0",
          viewBox: "0 0 43.12 44",
          width: "100%",
          "aria-label": r,
          role: "img",
          children: [(0, n.jsx)("path", {
            fill: "#4285f4",
            d: "M43.12,22.5c0-1.56-.14-3.06-.4-4.5h-20.72v8.51h11.84c-.51,2.75-2.06,5.08-4.39,6.64v5.52h7.11c4.16-3.83,6.56-9.47,6.56-16.17Z"
          }), (0, n.jsx)("path", {
            fill: "#34a853",
            d: "M22,44c5.94,0,10.92-1.97,14.56-5.33l-7.11-5.52c-1.97,1.32-4.49,2.1-7.45,2.1-5.73,0-10.58-3.87-12.31-9.07H2.34v5.7c3.62,7.19,11.06,12.12,19.66,12.12Z"
          }), (0, n.jsx)("path", {
            fill: "#fbbc04",
            d: "M9.69,26.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H2.34c-1.49,2.97-2.34,6.33-2.34,9.88s.85,6.91,2.34,9.88l7.35-5.7Z"
          }), (0, n.jsx)("path", {
            fill: "#e94235",
            d: "M22,8.75c3.23,0,6.13,1.11,8.41,3.29l6.31-6.31c-3.81-3.55-8.79-5.73-14.72-5.73C13.4,0,5.96,4.93,2.34,12.12l7.35,5.7c1.73-5.2,6.58-9.07,12.31-9.07Z"
          })]
        })
      });
      mi.displayName = "google";
      var hi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 283.5 283.5",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": r,
          role: "img",
          children: [(0, n.jsx)("path", {
            d: "m0 0h283.5v283.5h-283.5z",
            fill: "#e60012"
          }), (0, n.jsx)("path", {
            d: "m128.4 241.6h6.7v-30h-6.7zm-34.8-48.8 7.9 10.6h3.1v-15.9h-3.2v10.5l-7.8-10.4h-3.2v15.9h3.2zm35.8-5.3h-13.5v3.4h5.1v12.5h3.4v-12.5h5zm-20.7 45.8-6.4-21.8h-5.3l-6.3 21.7-5.8-21.7h-6.5l8.5 30h7.2l5.6-19.8 5.6 19.8h7.2l8.5-30h-6.5zm45.1-65.2h19.6c18 0 32.6-14.6 32.6-32.6v-62c0-18-14.6-32.6-32.6-32.6h-19.7c-.5 0-.8.4-.8.8v125.5c0 .5.4.9.9.9zm24.2-70.1c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9c.1-7.1 5.8-12.9 12.9-12.9zm-99.6 89.5h-3.5v15.9h3.5zm-26.6 5.3 7.9 10.6h3.1v-15.9h-3.2v10.5l-7.8-10.4h-3.2v15.9h3.2zm9.4 30.6h-.2c-3.7-.6-6.8-1.2-7.1-3.3 0-.3 0-1 .5-1.7 1-1.2 3.3-1.7 6.7-1.7 3.9 0 7.8 1.5 9.2 2.1l2.1-5.2c-1.5-.6-6.3-2.3-11.6-2.3-6.5 0-13.4 3.2-13.4 9 0 4.7 3.3 7.2 11.9 8.7 6.1 1 9.4 1.6 9.3 4.2-.1 1.4-1.2 3.8-8 3.8-5.5 0-9.4-2-10.7-2.8l-2.8 5.1c1.5.8 6.6 3.2 13.1 3.2 9.5 0 14.6-3.3 14.6-9.6.1-4.5-2.1-7.5-13.6-9.5zm37.4-144.3c0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12c-6.7 0-12 5.3-12 12zm54.8 121.4h-9.1v-3.7h8.4v-2.9h-8.4v-3.4h9.1v-2.9h-12.4v15.9h12.4zm74.4-13.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5c-.1-4.7-3.9-8.5-8.5-8.5zm0 13.4c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9zm1 23h-14v-11.8h-6.2v30h6.2v-12h14v12h6.2v-30h-6.2zm8.7 15.1h1.3v3.1h.7v-3.1h1.2v-.7h-3.2zm6.9-.8-1 2.8-1-2.8h-1.1v3.8h.7v-2.9l1 2.9h.7l1-2.9v2.9h.7v-3.8zm-55.7-20.4c3.4 0 6.5 1.8 8.2 4.7l4.9-4.2c-3-4.4-7.9-7.1-13.3-7.1-8.8 0-16 7.2-16 16s7.2 16 16 16c5.4 0 10.3-2.6 13.3-7.1l-4.9-4.2c-1.7 2.8-4.8 4.7-8.2 4.7-5.2 0-9.5-4.2-9.5-9.3s4.2-9.5 9.5-9.5zm-46.3.6h9.6v23.6h6.5v-23.6h9.4v-6.4h-25.4v6.4zm38.4-14.5v-15.9h-3.2v10.5l-7.8-10.4h-3.2v15.9h3.2v-10.6l7.9 10.6h3.1zm-41.6-162.5h-27.8c-18 0-32.6 14.6-32.6 32.6v62c0 18 14.6 32.6 32.6 32.6h27.8c.5 0 .9-.4.9-.9v-125.4c0-.5-.4-.9-.9-.9zm-9.3 117h-18.5c-6 0-11.6-2.3-15.8-6.6-4.2-4.2-6.6-9.8-6.6-15.8v-62c0-6 2.3-11.6 6.6-15.8 4.2-4.2 9.8-6.6 15.8-6.6h18.5zm70.9 29.6h-6.6v15.9h6.6c4.5 0 8.2-3.6 8.2-7.9 0-4.4-3.7-8-8.2-8zm .2 12.6h-3.5v-9.2h3.5c2.5 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6z",
            fill: "#fff"
          })]
        })
      });
      hi.displayName = "nintendo switch";
      var gi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100%",
          viewBox: "0 0 44 44",
          "aria-label": r,
          role: "img",
          children: [(0, n.jsx)("circle", {
            fill: "#274598",
            cx: "22",
            cy: "22",
            r: "22"
          }), (0, n.jsx)("path", {
            id: "PSF_MARK_BLUE",
            fill: "#fff",
            d: "M17.79,9.41c1.99.37,4.88,1.24,6.44,1.76,3.95,1.36,5.29,3.05,5.29,6.85s-2.29,5.12-5.2,3.72v-6.91c0-.81-.15-1.56-.91-1.77-.58-.19-.95.36-.95,1.17v17.31l-4.67-1.48V9.41M23.36,31.21l10.2-3.66s1.37-.51,1.94-1.21c.56-.71.31-1.73-1.89-2.43-1.96-.74-4.45-.99-6.48-.77-2.03.22-3.48.73-3.48.73l-.29.09v2.81l5-1.76c.86-.31,2.1-.37,2.8-.14.69.22.56.65-.29.97l-7.51,2.67v2.7ZM16.42,28.8c.15-.03.32-.05.47-.08v-2.42l-2.31.83c-.85.31-2.09.38-2.79.14-.69-.22-.56-.65.29-.96l4.81-1.73v-2.72l-6.7,2.39s-1.62.53-2.57,1.23c-1.03.77-.65,2.1,1.61,2.73,2.43.8,4.89.96,7.19.58ZM32.8,30.42c0,.62.45,1.11,1.11,1.11s1.1-.48,1.1-1.11-.44-1.11-1.1-1.11-1.11.49-1.11,1.11ZM32.97,30.42c0-.52.37-.94.93-.94s.93.42.93.94-.37.94-.93.94-.93-.42-.93-.94ZM33.47,31.06h.23v-.54h.15c.19,0,.23.05.27.19.03.09.07.25.1.35h.23c-.04-.12-.08-.26-.13-.4-.04-.15-.1-.21-.18-.23h0c.16-.05.23-.16.23-.32,0-.26-.17-.33-.41-.33h-.51v1.28ZM33.7,29.94h.22c.13,0,.25.03.25.2,0,.15-.1.21-.26.21h-.2v-.41Z"
          })]
        })
      });
      gi.displayName = "playstation";
      var bi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsxs)("svg", {
          fill: "#fff",
          viewBox: "0 0 44 44",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": r,
          role: "img",
          children: [(0, n.jsx)("use", {
            xlinkHref: "#B",
            x: ".5",
            y: ".5"
          }), (0, n.jsx)("defs", {
            children: (0, n.jsxs)("linearGradient", {
              id: "A",
              x1: "-900.43",
              y1: "486.04",
              x2: "-900.39",
              y2: "486.04",
              gradientTransform: "translate(-527386.11 900788) rotate(91.99) scale(1020.12 -1020.12)",
              gradientUnits: "userSpaceOnUse",
              children: [(0, n.jsx)("stop", {
                offset: "0",
                stopColor: "#050e17"
              }), (0, n.jsx)("stop", {
                offset: "1",
                stopColor: "#007fac"
              })]
            })
          }), (0, n.jsx)("symbol", {
            id: "B",
            children: (0, n.jsxs)("g", {
              children: [(0, n.jsx)("circle", {
                fill: "url(#A)",
                cx: "22",
                cy: "22",
                r: "22"
              }), (0, n.jsxs)("g", {
                children: [(0, n.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M.12,19.69l16.47,6.96c1.94.82,2.85,3.06,2.03,4.99-.82,1.94-3.06,2.85-4.99,2.03L.92,28.3c-.6-2-.92-4.11-.92-6.3,0-.78.04-1.55.12-2.31Z"
                }), (0, n.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M29.15,6.92c4.96,0,8.99,4.03,8.99,8.99s-4.03,8.99-8.99,8.99-8.99-4.03-8.99-8.99,4.03-8.99,8.99-8.99ZM29.37,10.22c-3.03,0-5.5,2.5-5.5,5.57s2.47,5.57,5.5,5.57,5.5-2.5,5.5-5.57-2.47-5.57-5.5-5.57ZM29.37,11.47c2.35,0,4.25,1.94,4.25,4.33s-1.9,4.33-4.25,4.33-4.25-1.94-4.25-4.33,1.9-4.33,4.25-4.33Z"
                }), (0, n.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M15.65,23.57l5.26-7.52,8.14,8.52-7.54,5.14c0,.09,0,.18,0,.27,0,3.56-2.89,6.45-6.45,6.45s-6.45-2.89-6.45-6.45,2.89-6.45,6.45-6.45c.19,0,.39,0,.58.03ZM15.27,25.38c2.6,0,4.7,2.11,4.7,4.7s-2.11,4.7-4.7,4.7-4.7-2.11-4.7-4.7,2.11-4.7,4.7-4.7Z"
                })]
              })]
            })
          })]
        })
      });
      bi.displayName = "steam";
      var yi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsxs)("svg", {
          viewBox: "0 0 37.71 44",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          "aria-label": r,
          role: "img",
          children: [(0, n.jsx)("style", {
            type: "text/css",
            children: ".cls-1{fill:#fff;}.cls-2{fill:#9146ff;}"
          }), (0, n.jsxs)("g", {
            children: [(0, n.jsx)("polygon", {
              className: "cls-1",
              points: "34.57 20.43 28.29 26.71 22 26.71 16.5 32.21 16.5 26.71 9.43 26.71 9.43 3.14 34.57 3.14 34.57 20.43"
            }), (0, n.jsx)("g", {
              children: (0, n.jsxs)("g", {
                id: "Layer_1-2",
                children: [(0, n.jsx)("path", {
                  className: "cls-2",
                  d: "M7.86,0L0,7.86v28.29h9.43v7.86l7.86-7.86h6.29l14.14-14.14V0H7.86ZM34.57,20.43l-6.29,6.29h-6.29l-5.5,5.5v-5.5h-7.07V3.14h25.14v17.29Z"
                }), (0, n.jsx)("rect", {
                  className: "cls-2",
                  x: "26.71",
                  y: "8.64",
                  width: "3.14",
                  height: "9.43"
                }), (0, n.jsx)("rect", {
                  className: "cls-2",
                  x: "18.07",
                  y: "8.64",
                  width: "3.14",
                  height: "9.43"
                })]
              })
            })]
          })]
        })
      });
      yi.displayName = "twitch";
      var vi = (0, a.forwardRef)(function(e, t) {
        var r = e.label;
        return (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100%",
          viewBox: "0 0 44 44",
          "aria-label": r,
          role: "img",
          children: (0, n.jsx)("path", {
            fill: "#107c10",
            d: "M22,17.64s.06.02.07.04c6.58,5,17.85,17.38,14.41,20.88-3.87,3.39-8.94,5.44-14.48,5.44-5.55,0-10.61-2.05-14.48-5.44-3.44-3.5,7.83-15.88,14.41-20.88.02-.01.05-.04.07-.04ZM33.46,3.22c-3.37-2-7.02-3.22-11.46-3.22s-8.09,1.22-11.46,3.22c-.04.02-.06.07-.04.11.02.04.06.05.11.04,4.26-.92,10.73,2.76,11.34,3.13.01,0,.03.02.05.02s.03,0,.05-.02c.61-.37,7.08-4.05,11.34-3.13.04.01.09,0,.11-.04.02-.04,0-.09-.04-.11ZM6.6,6.31s-.07.05-.1.07C2.49,10.37,0,15.89,0,22c0,5.01,1.68,9.63,4.5,13.33.03.04.08.06.12.04.04-.02.04-.07.03-.11-1.68-5.18,6.9-17.76,11.33-23.03.02-.02.03-.04.03-.06,0-.03-.02-.05-.04-.07C9.25,5.41,6.97,6.12,6.6,6.31ZM28.04,12.09s-.04.04-.04.07c0,.02.01.05.03.06,4.43,5.27,13,17.84,11.33,23.03-.01.04-.01.09.03.11.04.02.09,0,.12-.04,2.82-3.7,4.5-8.32,4.5-13.33,0-6.11-2.49-11.63-6.5-15.61-.03-.03-.06-.06-.1-.07-.37-.19-2.65-.9-9.36,5.78Z"
          })
        })
      });
      vi.displayName = "xbox";
      var wi = {
        amazon: _i,
        discord: fi,
        epic: pi,
        google: mi,
        nintendoswitch: hi,
        np: gi,
        steam: bi,
        twitch: yi,
        xbl: vi,
        xblpc: vi
      };
      const ji = r.p + "9860050e61fdc8409fe27a5988edaff1.png";

      function xi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Mi(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function ki(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              Mi(i, n, a, o, s, "next", e)
            }

            function s(e) {
              Mi(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Oi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Si(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Oi(e, t, r[t])
          })
        }
        return e
      }

      function Ai(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function Ii(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var Pi = function(e) {
        var t, r, i = e.currentConnection,
          o = e.clearSelectedService,
          s = e.setSelectedService,
          c = (0, L.A)(),
          l = ke().getAccessToken,
          d = (t = (0, a.useState)(!1), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return xi(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xi(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          _ = d[1],
          f = an({
            route: Ye.UpdatePlayerAccountVisibility,
            fetchOnInitial: !1
          }),
          p = f.fetch,
          h = f.loading,
          g = an({
            fetchOnInitial: !1,
            route: Ye.GetLinkedAccounts
          }),
          b = g.data,
          y = g.setData,
          v = function() {
            return ki(function() {
              var e, t;
              return Ii(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, l()];
                  case 1:
                    return e = r.sent(), t = m.getUnlinkUrl({
                      accessToken: e,
                      lang: c.locale,
                      onlineService: i.onlineServiceName
                    }), window.location.href = t, [2]
                }
              })
            })()
          },
          w = [{
            level: $a.None,
            message: ui.connections_visibility_me_only
          }, {
            level: $a.Friends,
            message: ui.connections_visibility_friends
          }, {
            level: $a.FriendsAndCrews,
            message: ui.connections_visibility_friends_and_crews
          }, {
            level: $a.Everyone,
            message: ui.connections_visibility_everyone
          }],
          j = function(e) {
            var t = w.find(function(t) {
              return t.level === e
            });
            return c.formatMessage(t.message)
          },
          x = c.formatMessage(ui.connections_unlink_button_text),
          M = i.gamerTag ? i.gamerTag : c.formatMessage(ui.connections_account_name_unavailable),
          k = c.formatMessage(ui.connections_linked_date, {
            date: Pr({
              dateString: i.linkedDate,
              locale: c.locale
            })
          }),
          O = x + M + k;
        return (0, n.jsx)("div", {
          className: "_1si1s9p0",
          children: (0, n.jsx)(Z, {
            testId: "connections-details-root",
            children: (0, n.jsxs)(K, {
              children: [(0, n.jsx)($, {
                children: (0, n.jsxs)(cr, {
                  children: [(0, n.jsx)(lr, {
                    children: (0, n.jsx)(E.IconButton, {
                      icon: "ChevronLeft",
                      appearance: "tertiary",
                      size: "LG",
                      testId: "backButton",
                      label: c.formatMessage(ui.connections_header_nav_aria_label),
                      onClick: function() {
                        return o()
                      }
                    })
                  }), (0, n.jsx)(dr, {
                    children: (0, n.jsx)(E.Heading, {
                      level: 6,
                      testId: "serviceName",
                      children: i.serviceDisplayName
                    })
                  })]
                })
              }), (0, n.jsxs)(ee, {
                children: [(0, n.jsxs)(te, Ai(Si({}, i.isUnlinkable && {
                  isInteractable: !0,
                  label: O,
                  onClick: v
                }), {
                  testId: "linkInfoRow",
                  children: [(0, n.jsxs)(ae, {
                    children: [(0, n.jsx)(ce, {
                      children: (0, n.jsx)("img", {
                        className: "_1si1s9p1",
                        "data-testid": "linked-account-avatar",
                        src: i.avatarUrl,
                        alt: c.formatMessage(ui.connections_linked_avatar_icon_aria_label, {
                          connection: i.serviceDisplayName
                        }),
                        onError: function(e) {
                          e.target.src = ji
                        }
                      })
                    }), (0, n.jsxs)(ie, {
                      children: [(0, n.jsx)(oe, {
                        shouldEllipsis: !0,
                        testId: "gamertag",
                        children: M
                      }), (0, n.jsx)(se, {
                        shouldEllipsis: !0,
                        testId: "linkDate",
                        children: k
                      })]
                    })]
                  }), i.isUnlinkable && (0, n.jsx)(de, {
                    children: (0, n.jsx)(E.Button, {
                      "aria-label": c.formatMessage(ui.connections_unlink_button_aria_label, {
                        connection: i.serviceDisplayName
                      }),
                      fullWidth: !0,
                      size: "LG",
                      testId: "unlink",
                      appearance: "tertiary",
                      onClick: v,
                      children: x
                    })
                  })]
                })), (0, n.jsx)(re, {
                  thickness: "thin"
                }), (0, n.jsxs)(te, {
                  isDisabled: h,
                  isInteractable: !0,
                  onClick: function() {
                    return _(!0)
                  },
                  testId: "connectionVisibilityRow",
                  children: [(0, n.jsx)(ae, {
                    children: (0, n.jsx)(ie, {
                      children: (0, n.jsx)(oe, {
                        children: c.formatMessage(ui.connections_visibility_label)
                      })
                    })
                  }), (0, n.jsx)(de, {
                    children: (0, n.jsxs)(E.Dropdown.Root, {
                      className: Oa,
                      isOpen: u,
                      onClick: function(e) {
                        return e.stopPropagation()
                      },
                      onOpenChange: _,
                      onValueChange: function(e) {
                        return ki(function() {
                          var t, r;
                          return Ii(this, function(n) {
                            switch (n.label) {
                              case 0:
                                return un(Je.action["linked_accounts_visibility_".concat(e, "_").concat(i.onlineServiceName)]), t = {
                                  onlineService: null == i ? void 0 : i.onlineServiceName,
                                  visibilityLevel: e
                                }, [4, p({
                                  body: t
                                })];
                              case 1:
                                return n.sent().error || ((r = null == b ? void 0 : b.linkedAccounts.find(function(e) {
                                  return e.onlineServiceName === i.onlineServiceName
                                })) && (r.privacy = e, y(b)), s(Ai(Si({}, i), {
                                  privacy: e
                                }))), [2]
                            }
                          })
                        })()
                      },
                      value: i.isPrivacyReadOnly ? "none" : i.privacy,
                      children: [(0, n.jsx)(E.Dropdown.Label, {
                        hideVisually: !0,
                        children: c.formatMessage(ui.connections_visibility_aria_label)
                      }), (0, n.jsxs)(E.Dropdown.Trigger, {
                        testId: "connectionVisibilityDropdown",
                        className: Aa,
                        children: [(0, n.jsx)(E.Dropdown.TriggerText, {
                          placeholder: ""
                        }), (0, n.jsx)(E.Dropdown.TriggerIcon, {})]
                      }), (0, n.jsx)(E.Dropdown.Portal, {
                        children: (0, n.jsx)(E.Dropdown.Content, {
                          className: Sa,
                          children: (0, n.jsxs)(E.Dropdown.ScrollArea, {
                            children: [(0, n.jsx)(E.Dropdown.Option, {
                              testId: "meOnlyOption",
                              value: "none",
                              children: (0, n.jsx)(E.Dropdown.OptionText, {
                                children: j($a.None)
                              })
                            }), !i.isPrivacyReadOnly && (0, n.jsxs)(n.Fragment, {
                              children: [(0, n.jsx)(E.Dropdown.Option, {
                                testId: "friendsOption",
                                value: "friends",
                                children: (0, n.jsx)(E.Dropdown.OptionText, {
                                  children: j($a.Friends)
                                })
                              }), (0, n.jsx)(E.Dropdown.Option, {
                                testId: "friendsAndCrewsOption",
                                value: "friendsAndCrews",
                                children: (0, n.jsx)(E.Dropdown.OptionText, {
                                  children: j($a.FriendsAndCrews)
                                })
                              }), (0, n.jsx)(E.Dropdown.Option, {
                                testId: "everyoneOption",
                                value: "everyone",
                                children: (0, n.jsx)(E.Dropdown.OptionText, {
                                  children: j($a.Everyone)
                                })
                              })]
                            })]
                          })
                        })
                      })]
                    })
                  })]
                })]
              }), !i.isUnlinkable && (0, n.jsx)(E.Body, {
                size: "SM",
                className: "_1si1s9p2",
                testId: "supportFooter",
                children: c.formatMessage(ui.connections_unlinkable_footer_text, {
                  connection: i.serviceDisplayName,
                  steamSupportAnchor: function(e) {
                    return (0, n.jsx)("a", {
                      className: Ia,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: m.getAccountSettingsSupportPage("linking-unlinking-accounts"),
                      "data-testid": "accountLinkingSupportUrl",
                      children: e
                    })
                  }
                })
              })]
            })
          })
        })
      };

      function Ci(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Ti(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function Di(e) {
        return function(e) {
          if (Array.isArray(e)) return Ci(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Ni(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Ni(e, t) {
        if (e) {
          if ("string" == typeof e) return Ci(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ci(e, t) : void 0
        }
      }
      var Li = ["np", "xbl", "xblpc", "nintendoswitch", "steam", "epic", "google", "amazon", "twitch", "discord"],
        Ei = function(e) {
          var t, r, o = e.data,
            s = e.loading,
            c = (0, L.A)(),
            l = (0, i.useLocation)(),
            d = (t = (0, a.useState)(), r = 2, function(e) {
              if (Array.isArray(e)) return e
            }(t) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(t, r) || Ni(t, r) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            u = d[0],
            _ = d[1];
          (0, a.useEffect)(function() {
            u && f(void 0)
          }, [l.key]);
          var f = function(e) {
              _(e), window.scrollTo(0, 0)
            },
            p = function(e) {
              e.forEach(function(e) {
                e.serviceDisplayName = c.formatMessage(ui["connections_".concat(e.onlineServiceName)])
              })
            },
            m = function(e, t) {
              return Li.indexOf(e.onlineServiceName) - Li.indexOf(t.onlineServiceName)
            },
            h = (0, a.useMemo)(function() {
              if (!(null == o ? void 0 : o.linkedAccounts)) return [];
              var e = Di(o.linkedAccounts).sort(m);
              return p(e), e
            }, [null == o ? void 0 : o.linkedAccounts]),
            g = (0, a.useMemo)(function() {
              if (!(null == o ? void 0 : o.unlinkedAccounts)) return [];
              var e = Di(o.unlinkedAccounts).sort(m);
              return p(e), e
            }, [null == o ? void 0 : o.unlinkedAccounts]);
          return u && !s ? (0, n.jsx)(Pi, {
            currentConnection: u,
            clearSelectedService: function() {
              return f(void 0)
            },
            setSelectedService: _
          }) : (0, n.jsx)(_r, {
            isLoading: s,
            children: (0, n.jsx)(Z, {
              children: (0, n.jsxs)(K, {
                testId: "connectionsSections",
                children: [(0, n.jsxs)($, {
                  children: [(0, n.jsx)(J, {
                    children: c.formatMessage(ui.connections_title)
                  }), (0, n.jsx)(Q, {
                    children: c.formatMessage(ui.connections_subtitle)
                  })]
                }), o && (0, n.jsxs)(ee, {
                  children: [h.map(function(e) {
                    return (0, n.jsxs)(a.Fragment, {
                      children: [(0, n.jsx)(Ri, {
                        onlineService: e,
                        navigateSelectedService: f
                      }), (0, n.jsx)(re, {
                        thickness: "thin"
                      })]
                    }, e.onlineServiceName)
                  }), g.map(function(e, t) {
                    return (0, n.jsxs)(a.Fragment, {
                      children: [(0, n.jsx)(qi, {
                        onlineService: e
                      }), t !== Object.values(o.unlinkedAccounts).length - 1 && (0, n.jsx)(re, {
                        thickness: "thin"
                      })]
                    }, e.onlineServiceName)
                  })]
                })]
              })
            })
          })
        },
        Ri = function(e) {
          var t = e.onlineService,
            r = e.navigateSelectedService,
            i = (0, L.A)(),
            o = (0, a.useMemo)(function() {
              return wi[t.onlineServiceName]
            }, [t.onlineServiceName]),
            s = function() {
              r(t)
            },
            c = i.formatMessage(ui.connections_linked_navigation_aria_label, {
              connection: t.serviceDisplayName
            }),
            l = i.formatMessage(ui.connections_linked_date, {
              date: Pr({
                dateString: t.linkedDate,
                locale: i.locale
              })
            }),
            d = c + l;
          return (0, n.jsx)(te, {
            isInteractable: !0,
            label: d,
            onClick: s,
            testId: "details-".concat(t.onlineServiceName),
            children: (0, n.jsxs)(ne, {
              children: [(0, n.jsxs)("div", {
                className: "_71w2ba0",
                children: [(0, n.jsx)(ce, {
                  children: (0, n.jsx)(o, {
                    label: i.formatMessage(ui["connections_".concat(t.onlineServiceName)])
                  })
                }), (0, n.jsxs)(ie, {
                  children: [(0, n.jsx)(oe, {
                    shouldEllipsis: !0,
                    children: t.serviceDisplayName
                  }), (0, n.jsx)(se, {
                    shouldEllipsis: !0,
                    testId: "linkDate-".concat(t.onlineServiceName),
                    children: l
                  })]
                })]
              }), (0, n.jsx)(E.IconButton, {
                appearance: "ghost",
                icon: "ChevronRight",
                label: d,
                onClick: s,
                size: "LG",
                testId: "iconButton-details-".concat(t.onlineServiceName)
              })]
            })
          })
        },
        qi = function(e) {
          var t = e.onlineService,
            r = (0, L.A)(),
            i = (0, a.useMemo)(function() {
              return wi[t.onlineServiceName]
            }, [null == t ? void 0 : t.onlineServiceName]),
            o = ke().getAccessToken,
            s = function() {
              return (e = function() {
                var e, n;
                return function(e, t) {
                  var r, n, a, i = {
                      label: 0,
                      sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                      },
                      trys: [],
                      ops: []
                    },
                    o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                  return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                  }), o;

                  function s(s) {
                    return function(c) {
                      return function(s) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                          if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                          switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                            case 0:
                            case 1:
                              a = s;
                              break;
                            case 4:
                              return i.label++, {
                                value: s[1],
                                done: !1
                              };
                            case 5:
                              i.label++, n = s[1], s = [0];
                              continue;
                            case 7:
                              s = i.ops.pop(), i.trys.pop();
                              continue;
                            default:
                              if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                i = 0;
                                continue
                              }
                              if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                i.label = s[1];
                                break
                              }
                              if (6 === s[0] && i.label < a[1]) {
                                i.label = a[1], a = s;
                                break
                              }
                              if (a && i.label < a[2]) {
                                i.label = a[2], i.ops.push(s);
                                break
                              }
                              a[2] && i.ops.pop(), i.trys.pop();
                              continue
                          }
                          s = t.call(e, i)
                        } catch (e) {
                          s = [6, e], n = 0
                        } finally {
                          r = a = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                          value: s[0] ? s[1] : void 0,
                          done: !0
                        }
                      }([s, c])
                    }
                  }
                }(this, function(a) {
                  switch (a.label) {
                    case 0:
                      return un(Je.action["linked_accounts_link_".concat(t.onlineServiceName)]), [4, o()];
                    case 1:
                      return e = a.sent(), n = m.getLinkUrl({
                        accessToken: e,
                        lang: r.locale,
                        onlineService: t.onlineServiceName
                      }), window.location.href = n, [2]
                  }
                })
              }, function() {
                var t = this,
                  r = arguments;
                return new Promise(function(n, a) {
                  var i = e.apply(t, r);

                  function o(e) {
                    Ti(i, n, a, o, s, "next", e)
                  }

                  function s(e) {
                    Ti(i, n, a, o, s, "throw", e)
                  }
                  o(void 0)
                })
              })();
              var e
            },
            c = r.formatMessage(ui.connections_link_button_aria_label, {
              connection: t.serviceDisplayName
            });
          return (0, n.jsxs)(te, {
            isInteractable: !0,
            label: c,
            onClick: s,
            testId: "link-".concat(null == t ? void 0 : t.onlineServiceName, "-row"),
            children: [(0, n.jsxs)(ae, {
              children: [(0, n.jsx)(ce, {
                children: (0, n.jsx)(i, {
                  label: r.formatMessage(ui["connections_".concat(t.onlineServiceName)])
                })
              }), (0, n.jsx)(ie, {
                children: (0, n.jsx)(oe, {
                  shouldEllipsis: !0,
                  children: t.serviceDisplayName
                })
              })]
            }), (0, n.jsx)(de, {
              children: (0, n.jsx)(E.Button, {
                appearance: "tertiary",
                "aria-label": c,
                className: "_71w2ba1",
                iconRight: "ExternalLink",
                onPress: s,
                size: "LG",
                testId: "link-".concat(t.onlineServiceName),
                children: r.formatMessage(ui.connections_link_button_text)
              })
            })]
          })
        };
      const Gi = (0, fe.YK)({
        communications_mailing_list_title: {
          defaultMessage: "Mailing list",
          description: "Title for the communications page mailing list section",
          id: "communications_mailing_list_title"
        },
        communications_notifications_title: {
          defaultMessage: "Notifications",
          description: "Title for the communications page notifications section",
          id: "communications_notifications_title"
        },
        communications_subscribe_label: {
          defaultMessage: "Subscribe to our Mailing List",
          description: "Label for the communications page mail list subscription section when unsubscribed",
          id: "communications_subscribe_label"
        },
        communications_subscribe_sub_label: {
          defaultMessage: "Get email updates on game announcements, special events, and other offers.",
          description: "Sub-label for the communications page mail list subscription section when unsubscribed",
          id: "communications_subscribe_sub_label"
        },
        communications_subscribe_button_text: {
          defaultMessage: "Subscribe",
          description: "Button text for the communications page mail list subscribe button when unsubscribed",
          id: "communications_subscribe_button_text"
        },
        communications_subscribe_button_aria_label: {
          defaultMessage: "Subscribe to mailing list",
          description: "Button aria label for the communications page mail list subscribe button when unsubscribed",
          id: "communications_subscribe_button_aria_label"
        },
        communications_unsubscribe_label: {
          defaultMessage: "Subscribed",
          description: "Label for the communications page mail list subscription section when subscribed",
          id: "communications_unsubscribe_label"
        },
        communications_unsubscribe_sub_label: {
          defaultMessage: "You are subscribed to get updates on game announcements, details on special events, and more from Rockstar Games and our affiliates.",
          description: "Sub-label for the communications page mail list subscription section when subscribed",
          id: "communications_unsubscribe_sub_label"
        },
        communications_unsubscribe_button_text: {
          defaultMessage: "Unsubscribe",
          description: "Button text for the communications page mail list subscribe button when subscribed",
          id: "communications_unsubscribe_button_text"
        },
        communications_unsubscribe_button_aria_label: {
          defaultMessage: "Unsubscribe from mailing list",
          description: "Button text for the communications page mail list subscribe button when subscribed",
          id: "communications_unsubscribe_button_aria_label"
        },
        communications_friend_request_email_label: {
          defaultMessage: "Receive friend request via Email",
          description: "Label for the communications page notification section for friend request email switch",
          id: "communications_friend_request_email_label"
        },
        communications_friend_request_email_toggle_aria_label: {
          defaultMessage: "Toggle whether to receive friend request emails",
          description: "The aria a11y label for the friend request email toggle",
          id: "communications_friend_request_email_toggle_aria_label"
        },
        communications_crew_invite_email_label: {
          defaultMessage: "Receive crew invite via Email",
          description: "Label for the communications page notification section for crew invite email switch",
          id: "communications_crew_invite_email_label"
        },
        communications_crew_invite_email_toggle_aria_label: {
          defaultMessage: "Toggle whether to receive crew invite emails",
          description: "The aria a11y label for the crew invite email toggle",
          id: "communications_crew_invite_email_toggle_aria_label"
        },
        communications_direct_message_email_label: {
          defaultMessage: "Receive direct message via Email",
          description: "Label for the communications page notification section for direct message email switch",
          id: "communications_direct_message_email_label"
        },
        communications_direct_message_email_toggle_aria_label: {
          defaultMessage: "Toggle whether to receive direct message emails",
          description: "The aria a11y label for the direct message email toggle",
          id: "communications_direct_message_email_toggle_aria_label"
        },
        communications_toast_subscribed_text: {
          defaultMessage: "You are subscribed to get updates on game announcements, details on special events, and more from Rockstar Games and our affiliates.",
          description: "Label for the communications page toast that appears when a user subscribes to the mailing list",
          id: "communications_toast_subscribed_text"
        },
        communications_toast_unsubscribed_text: {
          defaultMessage: "You have successfully unsubscribed from our mailing list.",
          description: "Label for the communications page toast that appears when a user unsubscribes from the mailing list",
          id: "communications_toast_unsubscribed_text"
        },
        communications_you_are_subscribed_label: {
          defaultMessage: "You are subscribed to the Mailing List",
          description: "Subscribed icon circle check element description label",
          id: "communications_you_are_subscribed_label"
        },
        communications_subscribe_mailing_list_not_possible: {
          defaultMessage: "We cannot sign up this email address to our newsletter at this time.",
          description: "Message for when mailing list subscription is not possible, such as when a user is underage.",
          id: "communications_subscribe_mailing_list_not_possible"
        },
        communications_subscribe_mailing_list_confirm: {
          defaultMessage: "Thank you. Please check your email to finish updating your subscription preferences.",
          description: "Message for when mailing list subscription requires email confirmation",
          id: "communications_subscribe_mailing_list_confirm"
        }
      });
      var Ui = function(e) {
          var t = e.crewInviteEmails,
            r = e.directMessageEmails,
            a = e.friendRequestEmails,
            i = e.updateEmailNotificationSetting,
            o = (0, L.A)(),
            s = function(e) {
              un(Je.action["friend_request_emails_".concat(e)]), i(Qa.FriendRequestEmails, e ? $a.Everyone : $a.None)
            },
            c = function(e) {
              un(Je.action["crew_invite_emails_".concat(e)]), i(Qa.CrewInviteEmails, e ? $a.Everyone : $a.None)
            },
            l = function(e) {
              un(Je.action["direct_message_emails_".concat(e)]), i(Qa.DirectMessageEmails, e ? $a.Everyone : $a.None)
            },
            d = function(e) {
              return e.stopPropagation()
            },
            u = a === $a.Everyone,
            _ = t === $a.Everyone,
            f = r === $a.Everyone;
          return (0, n.jsxs)(ee, {
            children: [(0, n.jsxs)(te, {
              isInteractable: !0,
              label: o.formatMessage(Gi.communications_friend_request_email_toggle_aria_label),
              onClick: function() {
                return s(!u)
              },
              testId: "friendRequestRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: o.formatMessage(Gi.communications_friend_request_email_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Switch.Root, {
                  children: [(0, n.jsx)(E.Switch.Input, {
                    className: G,
                    onPress: d,
                    onSelectedChange: s,
                    isSelected: u,
                    testId: "friendRequestEmails"
                  }), (0, n.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(Gi.communications_friend_request_email_toggle_aria_label)
                  })]
                })
              })]
            }), (0, n.jsx)(re, {
              thickness: "thin"
            }), (0, n.jsxs)(te, {
              isInteractable: !0,
              label: o.formatMessage(Gi.communications_crew_invite_email_toggle_aria_label),
              onClick: function() {
                return c(!_)
              },
              testId: "crewInviteRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: o.formatMessage(Gi.communications_crew_invite_email_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Switch.Root, {
                  children: [(0, n.jsx)(E.Switch.Input, {
                    className: G,
                    onPress: d,
                    onSelectedChange: c,
                    isSelected: _,
                    testId: "crewInviteEmails"
                  }), (0, n.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(Gi.communications_crew_invite_email_toggle_aria_label)
                  })]
                })
              })]
            }), (0, n.jsx)(re, {
              thickness: "thin"
            }), (0, n.jsxs)(te, {
              isInteractable: !0,
              label: o.formatMessage(Gi.communications_direct_message_email_toggle_aria_label),
              onClick: function() {
                return l(!f)
              },
              testId: "directMessageRow",
              children: [(0, n.jsx)(ae, {
                children: (0, n.jsx)(ie, {
                  children: (0, n.jsx)(oe, {
                    children: o.formatMessage(Gi.communications_direct_message_email_label)
                  })
                })
              }), (0, n.jsx)(de, {
                children: (0, n.jsxs)(E.Switch.Root, {
                  children: [(0, n.jsx)(E.Switch.Input, {
                    className: G,
                    onPress: d,
                    onSelectedChange: l,
                    isSelected: f,
                    testId: "directMessageEmails"
                  }), (0, n.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(Gi.communications_direct_message_email_toggle_aria_label)
                  })]
                })
              })]
            })]
          })
        },
        Vi = "_1ehoiwp0",
        Fi = function(e) {
          var t = e.isLoadingSubscription,
            r = e.subscribeCallback,
            a = (0, L.A)(),
            i = a.formatMessage(Gi.communications_subscribe_button_text),
            o = a.formatMessage(Gi.communications_subscribe_label),
            s = a.formatMessage(Gi.communications_subscribe_sub_label);
          return (0, n.jsxs)(ee, {
            className: Vi,
            testId: "subscribeRowContainer",
            children: [(0, n.jsxs)(ie, {
              children: [(0, n.jsx)(oe, {
                children: o
              }), (0, n.jsx)(se, {
                children: s
              })]
            }), (0, n.jsx)(E.Button, {
              appearance: "primary",
              "aria-label": a.formatMessage(Gi.communications_subscribe_button_aria_label),
              isDisabled: t,
              isLoading: t,
              onClick: r,
              size: "LG",
              testId: "subscribeButton",
              children: i
            })]
          })
        },
        zi = function(e) {
          var t = e.isLoadingSubscription,
            r = e.unsubscribeCallback,
            a = (0, L.A)(),
            i = a.formatMessage(Gi.communications_unsubscribe_button_text),
            o = a.formatMessage(Gi.communications_unsubscribe_label),
            s = a.formatMessage(Gi.communications_unsubscribe_sub_label);
          return (0, n.jsxs)(ee, {
            className: Vi,
            testId: "unsubscribeRowContainer",
            children: [(0, n.jsxs)("div", {
              className: "_1ehoiwp1",
              children: [(0, n.jsx)(ce, {
                children: (0, n.jsx)(rt.CircleCheckFilled, {
                  color: kt.LU.alias.color.icon.success,
                  size: "LG",
                  label: a.formatMessage(Gi.communications_you_are_subscribed_label)
                })
              }), (0, n.jsxs)(ie, {
                children: [(0, n.jsx)(oe, {
                  children: o
                }), (0, n.jsx)(se, {
                  children: s
                })]
              })]
            }), (0, n.jsx)(E.Button, {
              appearance: "tertiary",
              "aria-label": a.formatMessage(Gi.communications_unsubscribe_button_aria_label),
              isDisabled: t,
              isLoading: t,
              onClick: r,
              size: "LG",
              testId: "unsubscribeButton",
              children: i
            })]
          })
        };

      function Bi(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function Hi(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              Bi(i, n, a, o, s, "next", e)
            }

            function s(e) {
              Bi(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Yi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Wi(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var Xi = function() {
        var e = (0, L.A)(),
          t = qe(),
          r = an({
            route: Ye.GetPrivacySettings
          }),
          i = r.data,
          o = r.setData,
          s = r.loading,
          c = an({
            route: Ye.GetSubscriptionStatus
          }),
          l = c.data,
          d = c.setData,
          u = c.loading,
          _ = an({
            route: Ye.Subscribe,
            fetchOnInitial: !1
          }),
          f = _.fetch,
          p = _.loading,
          m = an({
            route: Ye.Unsubscribe,
            fetchOnInitial: !1
          }),
          h = m.fetch,
          g = m.loading,
          b = an({
            route: Ye.UpdateEmailNotificationSettings,
            fetchOnInitial: !1
          }).fetch,
          y = (0, a.useCallback)((0, Mt.A)(function(e, t) {
            return Hi(function() {
              var r;
              return Wi(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, b({
                      body: e
                    })];
                  case 1:
                    return (null == (r = n.sent()) ? void 0 : r.error) && o(t), [2]
                }
              })
            })()
          }, 1e3), []),
          v = p || g;
        return (0, n.jsx)(_r, {
          isLoading: s || u,
          children: i && l && (0, n.jsxs)(Z, {
            testId: "communications",
            children: [(0, n.jsxs)(K, {
              testId: "subscription",
              children: [(0, n.jsx)($, {
                children: (0, n.jsx)(J, {
                  children: e.formatMessage(Gi.communications_mailing_list_title)
                })
              }), 1 === l.status ? (0, n.jsx)(zi, {
                isLoadingSubscription: v,
                unsubscribeCallback: function() {
                  return Hi(function() {
                    var r, n, a;
                    return Wi(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return un(Je.action.toggle_subscribe_to_mailing_list, Je.labels.unsubscribed_from_mailing_list), [4, h({})];
                        case 1:
                          return r = i.sent(), n = r.data, a = r.error, n && !a && (d(n), t.displayNewToast({
                            appearance: "success",
                            message: e.formatMessage(Gi.communications_toast_unsubscribed_text)
                          })), [2]
                      }
                    })
                  })()
                }
              }) : (0, n.jsx)(Fi, {
                isLoadingSubscription: v,
                subscribeCallback: function() {
                  return Hi(function() {
                    var r, n, a;
                    return Wi(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return un(Je.action.toggle_subscribe_to_mailing_list, Je.labels.subscribed_to_mailing_list), [4, f({})];
                        case 1:
                          if (r = i.sent(), n = r.data, a = r.error, n && !a) switch (n.status) {
                            case 1:
                              return d(n), t.displayNewToast({
                                appearance: "success",
                                message: e.formatMessage(Gi.communications_toast_subscribed_text)
                              }), [2];
                            case 2:
                              return t.displayNewToast({
                                appearance: "information",
                                message: e.formatMessage(Gi.communications_subscribe_mailing_list_confirm)
                              }), [2];
                            case 4:
                              return t.displayNewError(e.formatMessage(Gi.communications_subscribe_mailing_list_not_possible)), [2];
                            default:
                              t.displayNewError(e.formatMessage(Oe.generic_error))
                          }
                          return [2]
                      }
                    })
                  })()
                }
              })]
            }), (0, n.jsxs)(K, {
              children: [(0, n.jsx)($, {
                children: (0, n.jsx)(J, {
                  children: e.formatMessage(Gi.communications_notifications_title)
                })
              }), (0, n.jsx)(Ui, {
                crewInviteEmails: i.crewInviteEmails,
                directMessageEmails: i.directMessageEmails,
                friendRequestEmails: i.friendRequestEmails,
                updateEmailNotificationSetting: function(e, t) {
                  return Hi(function() {
                    var r, n;
                    return Wi(this, function(a) {
                      return r = function(e, t) {
                        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t.push.apply(t, r)
                          }
                          return t
                        }(Object(t)).forEach(function(r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                        }), e
                      }(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                          }))), n.forEach(function(t) {
                            Yi(e, t, r[t])
                          })
                        }
                        return e
                      }({}, i), Yi({}, e, t)), n = {
                        crewInviteEmails: r.crewInviteEmails,
                        directMessageEmails: r.directMessageEmails,
                        friendRequestEmails: r.friendRequestEmails
                      }, y(n, i), o(r), [2]
                    })
                  })()
                }
              })]
            })]
          })
        })
      };

      function Zi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Ki(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            Zi(e, t, r[t])
          })
        }
        return e
      }

      function $i(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }

      function Ji(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var Qi = (0, a.forwardRef)(function(e, t) {
          var r = e.className,
            a = e.children,
            i = e.testId,
            o = Ji(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("lofjyg0", r)
            }, o);
          return (0, n.jsx)("div", $i(Ki({
            ref: t
          }, s), {
            children: a
          }))
        }),
        eo = (0, a.forwardRef)(function(e, t) {
          var r = e.testId,
            i = e.qrCodeString,
            o = Ji(e, ["testId", "qrCodeString"]),
            s = (0, R.v6)({
              "data-testid": r,
              className: "lofjyg1"
            }, o),
            c = (0, a.useMemo)(function() {
              return i.split("\r\n").map(function(e, t) {
                for (var r = [], a = 0; a < e.length; a++) "0" === e[a] && r.push((0, n.jsx)("rect", {
                  height: "1",
                  width: "1",
                  y: t,
                  x: a
                }, "qr-code-".concat(t, "-").concat(a)));
                return r
              })
            }, [i]);
          return (0, n.jsxs)("svg", $i(Ki({
            viewBox: "0 0 ".concat(c.length, " ").concat(c.length),
            ref: t
          }, s), {
            children: [(0, n.jsx)("rect", {
              height: c.length,
              width: c.length,
              x: "0",
              y: "0",
              fill: "#000000"
            }), (0, n.jsx)("g", {
              "data-testid": "".concat(r, "::matrix-group"),
              fill: "#FFFFFF",
              shapeRendering: "crispEdges",
              children: c
            })]
          }))
        });

      function to() {
        var e, t = (e = navigator.userAgent.toLowerCase()).indexOf("firefox") >= 0 ? "Firefox" : e.indexOf("ucbrowser") >= 0 ? "UC Browser" : e.indexOf("maxthon") >= 0 ? "Maxthon" : e.indexOf("opera") >= 0 || e.indexOf("opr") >= 0 ? "Opera" : e.indexOf("edge") >= 0 || e.indexOf("edg") >= 0 ? "Microsoft Edge" : e.indexOf("chrome") >= 0 || e.indexOf("crios") >= 0 ? "Chrome" : e.indexOf("playstation") >= 0 ? "PlayStation" : e.indexOf("safari") >= 0 ? "Safari" : e.indexOf("trident") >= 0 ? "Internet Explorer" : e.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser",
          r = function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("windows phone") >= 0 ? "Windows Phone" : e.indexOf("steam") >= 0 ? "Steam" : e.indexOf("xbox series x") >= 0 || e.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : e.indexOf("xbox one") >= 0 || e.indexOf("xbox_one") >= 0 ? "Xbox One" : e.indexOf("xbox") >= 0 ? "Xbox 360" : e.indexOf("playstation 5") >= 0 ? "PlayStation 5" : e.indexOf("playstation 4") >= 0 ? "PlayStation 4" : e.indexOf("playstation 3") >= 0 ? "PlayStation 3" : e.indexOf("win") >= 0 ? "Windows" : e.indexOf("android") >= 0 ? "Android" : e.indexOf("linux") >= 0 ? "Linux" : e.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 ? "iOS" : e.indexOf("mac") >= 0 ? "Mac" : "Unknown OS"
          }();
        switch (t) {
          case "PlayStation":
          case "Nintendo":
            return r;
          default:
            return t + " on " + r
        }
      }
      var ro = "_15h4nzg7";

      function no(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }
      var ao = function(e) {
          var t = e.backNav,
            r = e.setMfaDevice,
            i = (0, L.A)(),
            o = an({
              route: Ye.RequestRegisterMfa,
              fetchOnInitial: !1
            }),
            s = o.data,
            c = o.fetch,
            l = an({
              route: Ye.VerifyMfaRegistration,
              fetchOnInitial: !1
            }),
            d = l.fetch,
            u = l.loading,
            _ = an({
              route: Ye.GetMfaDevices,
              fetchOnInitial: !1
            }).fetch;
          return (0, a.useEffect)(function() {
            un(Je.action.mfa_request_device_registration_request, Je.labels.device_type_google), c({}).then(function(e) {
              e.error && un(Je.action.mfa_request_device_registration_error, Je.labels.device_type_google)
            })
          }, []), (0, n.jsxs)("div", {
            className: "_15h4nzg0",
            "data-testid": "auth-setup",
            children: [(0, n.jsxs)(cr, {
              children: [(0, n.jsx)(lr, {
                asChild: !0,
                children: (0, n.jsx)(E.IconButton, {
                  icon: "ChevronLeft",
                  size: "LG",
                  appearance: "tertiary",
                  onClick: t,
                  label: i.formatMessage(fr.security_header_nav_aria_label),
                  testId: "auth-setup-back"
                })
              }), (0, n.jsx)(dr, {
                children: (0, n.jsx)(E.Heading, {
                  level: 6,
                  children: i.formatMessage(fr.security_title)
                })
              })]
            }), (0, n.jsxs)(_r, {
              isLoading: !s,
              children: [(0, n.jsxs)(E.Dialog.Root, {
                children: [(0, n.jsx)(Z, {
                  testId: "auth-setup-body",
                  children: (0, n.jsx)(K, {
                    children: (0, n.jsx)(ee, {
                      children: (0, n.jsxs)(te, {
                        shouldStackMobile: !0,
                        children: [(0, n.jsx)(ae, {
                          className: "_15h4nzg2",
                          children: (0, n.jsxs)(ie, {
                            className: "_15h4nzg3 _125nfjqf",
                            children: [(0, n.jsx)(oe, {
                              children: i.formatMessage(fr.security_setup_qrcode_label)
                            }), (0, n.jsx)(se, {
                              children: i.formatMessage(fr.security_setup_qrcode_sublabel)
                            }), (0, n.jsx)(E.Dialog.Trigger, {
                              asChild: !0,
                              testId: "secret-key-modal-trigger",
                              children: (0, n.jsx)(le, {
                                size: "LG",
                                appearance: "link",
                                className: "_15h4nzg9",
                                children: i.formatMessage(fr.security_setup_qrcode_link)
                              })
                            })]
                          })
                        }), (0, n.jsx)(de, {
                          children: (null == s ? void 0 : s.qrCode) && (0, n.jsx)(Qi, {
                            className: "_15h4nzg1",
                            children: (0, n.jsx)(eo, {
                              qrCodeString: s.qrCode,
                              testId: "qrcode-matrix"
                            })
                          })
                        })]
                      })
                    })
                  })
                }), (null == s ? void 0 : s.secretKey) && (0, n.jsx)(io, {
                  secretKey: s.secretKey
                })]
              }), (0, n.jsx)(Ar, {
                isLoading: u,
                onFormInvalid: function(e) {
                  var t;
                  "non_empty" === (null == e || null === (t = e[Or]) || void 0 === t ? void 0 : t.type) && un(Je.action.mfa_enroll_verify_error_password_missing), (null == e ? void 0 : e[Sr]) && un(Je.action.mfa_enroll_verify_error_invalid_verification_code)
                },
                onSubmit: function(e) {
                  var t, n = e.formData,
                    a = e.setError;
                  return (t = function() {
                    var e, t, o, c;
                    return function(e, t) {
                      var r, n, a, i = {
                          label: 0,
                          sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                          },
                          trys: [],
                          ops: []
                        },
                        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                      return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                      }), o;

                      function s(s) {
                        return function(c) {
                          return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                              if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                              switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                case 0:
                                case 1:
                                  a = s;
                                  break;
                                case 4:
                                  return i.label++, {
                                    value: s[1],
                                    done: !1
                                  };
                                case 5:
                                  i.label++, n = s[1], s = [0];
                                  continue;
                                case 7:
                                  s = i.ops.pop(), i.trys.pop();
                                  continue;
                                default:
                                  if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    i = 0;
                                    continue
                                  }
                                  if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                    i.label = s[1];
                                    break
                                  }
                                  if (6 === s[0] && i.label < a[1]) {
                                    i.label = a[1], a = s;
                                    break
                                  }
                                  if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(s);
                                    break
                                  }
                                  a[2] && i.ops.pop(), i.trys.pop();
                                  continue
                              }
                              s = t.call(e, i)
                            } catch (e) {
                              s = [6, e], n = 0
                            } finally {
                              r = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                              value: s[0] ? s[1] : void 0,
                              done: !0
                            }
                          }([s, c])
                        }
                      }
                    }(this, function(l) {
                      switch (l.label) {
                        case 0:
                          return un(Je.action.mfa_enroll_verify_request, Je.labels.device_type_google), [4, d({
                            body: {
                              code: n[Sr],
                              machineName: to(),
                              mfaDeviceRegistrationCookie: s.mfaDeviceRegistrationCookie,
                              password: n[Or]
                            }
                          })];
                        case 1:
                          return (null == (e = l.sent()) ? void 0 : e.error) ? (un(Je.action.mfa_enroll_verify_error), t = e.error.code, (o = Zr[t]) && a(o.field, {
                            message: i.formatMessage(o.message)
                          }), [3, 4]) : [3, 2];
                        case 2:
                          return un(Je.action.mfa_enroll_success, Je.labels.device_type), [4, _({})];
                        case 3:
                          (null == (c = l.sent()) ? void 0 : c.data) && r(c.data[0]), l.label = 4;
                        case 4:
                          return [2]
                      }
                    })
                  }, function() {
                    var e = this,
                      r = arguments;
                    return new Promise(function(n, a) {
                      var i = t.apply(e, r);

                      function o(e) {
                        no(i, n, a, o, s, "next", e)
                      }

                      function s(e) {
                        no(i, n, a, o, s, "throw", e)
                      }
                      o(void 0)
                    })
                  })()
                }
              })]
            })]
          })
        },
        io = function(e) {
          var t = e.secretKey,
            r = qe(),
            i = (0, L.A)(),
            o = (0, a.useMemo)(function() {
              return t.replace(/(.{4})/g, "$1 - ")
            }, [t]);
          return (0, n.jsx)(E.Dialog.Overlay, {
            className: Gn,
            children: (0, n.jsxs)(E.Dialog.Content, {
              "aria-describedby": void 0,
              testId: "secret-key-modal",
              children: [(0, n.jsx)(E.Dialog.CloseButton, {
                label: i.formatMessage(Yn.modal_close_modal_button_label),
                testId: "secret-key-modal-close"
              }), (0, n.jsxs)(Fn.Root, {
                children: [(0, n.jsx)(Fn.Viewport, {
                  children: (0, n.jsxs)(E.Dialog.Layout, {
                    className: "_15h4nzg4",
                    children: [(0, n.jsx)(E.Dialog.Title, {
                      children: i.formatMessage(fr.security_setup_modal_title)
                    }), (0, n.jsx)(E.Dialog.Description, {
                      asChild: !0,
                      children: (0, n.jsx)(E.Body, {
                        size: "MD",
                        className: "_15h4nzg5",
                        children: i.formatMessage(fr.security_setup_modal_description)
                      })
                    }), (0, n.jsx)(E.Heading, {
                      level: 5,
                      testId: "secret-key",
                      children: o
                    }), (0, n.jsx)(E.Dialog.ActionArea, {
                      children: (0, n.jsx)(E.Button, {
                        appearance: "secondary",
                        className: "_15h4nzg6",
                        fullWidth: !0,
                        iconRight: "Copy",
                        onClick: function() {
                          navigator.clipboard.writeText(t), r.displayNewToast({
                            appearance: "success",
                            message: i.formatMessage(fr.security_setup_modal_copy_toast_text)
                          })
                        },
                        size: "XL",
                        testId: "secret-key-copy",
                        children: i.formatMessage(fr.security_setup_modal_copy_button_text)
                      })
                    })]
                  })
                }), (0, n.jsx)(Fn.Scrollbar, {
                  orientation: "vertical",
                  children: (0, n.jsx)(Fn.Thumb, {})
                })]
              })]
            })
          })
        };

      function oo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function so(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function co(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            var i = e.apply(t, r);

            function o(e) {
              so(i, n, a, o, s, "next", e)
            }

            function s(e) {
              so(i, n, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function lo(e, t) {
        var r, n, a, i = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < a[1]) {
                      i.label = a[1], a = s;
                      break
                    }
                    if (a && i.label < a[2]) {
                      i.label = a[2], i.ops.push(s);
                      break
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var uo = function(e) {
          var t, r, i = e.device,
            o = e.removeMfaDevice,
            s = (t = (0, a.useState)(!1), r = 2, function(e) {
              if (Array.isArray(e)) return e
            }(t) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(t, r) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return oo(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? oo(e, t) : void 0
              }
            }(t, r) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = s[0],
            l = s[1],
            d = (0, L.A)(),
            u = Je.labels.device_type_fill + i.deviceType,
            _ = an({
              route: Ye.RequestDeregisterMfa,
              fetchOnInitial: !1
            }),
            f = _.data,
            p = _.fetch,
            m = _.loading,
            h = an({
              route: Ye.VerifyMfaDeregistration,
              fetchOnInitial: !1
            }),
            g = h.fetch,
            b = h.loading,
            y = function() {
              return co(function() {
                var e;
                return lo(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return un(Je.action.mfa_remove_device_request, u), [4, p({
                        body: {
                          deviceId: i.id
                        }
                      })];
                    case 1:
                      return (null == (e = t.sent()) ? void 0 : e.error) ? un(Je.action.mfa_remove_device_request_error, u) : l(!0), [2]
                  }
                })
              })()
            },
            v = d.formatMessage(fr.security_status_unlink_button_text),
            w = d.formatMessage(fr.security_status_sublabel_text),
            j = v + i.deviceAddress + w;
          return (0, n.jsxs)(K, {
            testId: "mfa-device-section",
            children: [(0, n.jsxs)($, {
              children: [(0, n.jsx)(J, {
                children: d.formatMessage(fr.security_mfa_device_title)
              }), (0, n.jsx)(Q, {
                children: d.formatMessage(fr.security_mfa_device_title_aside)
              })]
            }), (0, n.jsx)(ee, {
              children: (0, n.jsxs)(te, {
                isDisabled: m,
                isInteractable: !0,
                label: j,
                onClick: y,
                testId: "deregisterRow",
                children: [(0, n.jsx)(ae, {
                  children: (0, n.jsxs)(ie, {
                    className: ro,
                    children: [(0, n.jsx)(oe, {
                      className: "_15h4nzg8",
                      testId: "mfa-device-address",
                      children: i.deviceAddress
                    }), (0, n.jsx)(se, {
                      testId: "mfa-device-type",
                      children: w
                    })]
                  })
                }), (0, n.jsx)(de, {
                  children: (0, n.jsx)(E.Button, {
                    appearance: "secondary",
                    "aria-label": j,
                    fullWidth: !0,
                    isDisabled: m,
                    isLoading: m,
                    onClick: y,
                    size: "LG",
                    testId: "mfa-unlink",
                    children: v
                  })
                })]
              })
            }), c && (0, n.jsx)(Ar, {
              isLoading: b,
              onFormInvalid: function(e) {
                var t;
                "non_empty" === (null == e || null === (t = e[Or]) || void 0 === t ? void 0 : t.type) && un(Je.action.mfa_remove_device_verify_error_password_missing), (null == e ? void 0 : e[Sr]) && un(Je.action.mfa_remove_device_verify_error_invalid_verification_code)
              },
              onSubmit: function(e) {
                var t = e.formData,
                  r = e.setError;
                return co(function() {
                  var e, n, a;
                  return lo(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return un(Je.action.mfa_remove_device_verify_request, u), [4, g({
                          body: {
                            code: t[Sr],
                            mfaDeviceDeregistrationCookie: f.mfaDeviceDeregistrationCookie,
                            password: t[Or]
                          }
                        })];
                      case 1:
                        return (null == (e = i.sent()) ? void 0 : e.error) ? (un(Je.action.mfa_remove_device_verify_error, u), n = e.error.code, (a = Zr[n]) && r(a.field, {
                          message: d.formatMessage(a.message)
                        })) : (un(Je.action.mfa_remove_device_success, u), o()), [2]
                    }
                  })
                })()
              }
            })]
          })
        },
        _o = function() {
          var e = (0, L.A)();
          return (0, n.jsx)(ee, {
            testId: "noRememberedDevices",
            children: (0, n.jsx)(te, {
              label: e.formatMessage(fr.security_status_no_remembered_devices_title),
              testId: "noRememberedDevicesRow",
              children: (0, n.jsxs)(ie, {
                children: [(0, n.jsx)(E.Body, {
                  size: "MD",
                  appearance: "bold",
                  className: "_15h4nzga",
                  children: e.formatMessage(fr.security_status_no_remembered_devices_title)
                }), (0, n.jsx)(E.Body, {
                  size: "SM",
                  testId: "no-remembered-devices",
                  children: e.formatMessage(fr.security_status_no_remembered_devices_title_aside)
                })]
              })
            })
          })
        };

      function fo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function po(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }
      var mo = function() {
          var e, t, r = (0, L.A)(),
            i = qe(),
            o = (e = (0, a.useState)(new Set), t = 2, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return fo(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? fo(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            s = o[0],
            c = o[1],
            l = an({
              route: Ye.ForgetMfaRememberedMachine,
              fetchOnInitial: !1
            }).fetch,
            d = an({
              route: Ye.GetMfaRememberedMachines
            }),
            u = d.data,
            _ = d.fetch,
            f = d.loading;
          return (0, n.jsxs)(K, {
            testId: "mfa-remembered-machines-section",
            children: [(0, n.jsxs)($, {
              testId: "mfa-remembered-machines-header",
              children: [(0, n.jsx)(J, {
                children: r.formatMessage(fr.security_remembered_machines_title)
              }), (0, n.jsx)(Q, {
                testId: "mfa-remembered-machines-sub-header",
                children: r.formatMessage(fr.security_remembered_machines_aside)
              })]
            }), f && !u && (0, n.jsx)(E.Spinner, {
              size: "inlineLG",
              label: r.formatMessage(fr.security_status_remembered_devices_spinner_label),
              testId: "remembered-machines-loading-spinner"
            }), !f && u && u.length > 0 ? (0, n.jsx)(ho, {
              rememberedMachines: u,
              rowsForgetting: s,
              forgetMachine: function(e) {
                return (t = function() {
                  var t;
                  return function(e, t) {
                    var r, n, a, i = {
                        label: 0,
                        sent: function() {
                          if (1 & a[0]) throw a[1];
                          return a[1]
                        },
                        trys: [],
                        ops: []
                      },
                      o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                      return this
                    }), o;

                    function s(s) {
                      return function(c) {
                        return function(s) {
                          if (r) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                            switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                              case 0:
                              case 1:
                                a = s;
                                break;
                              case 4:
                                return i.label++, {
                                  value: s[1],
                                  done: !1
                                };
                              case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                              case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                              default:
                                if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                  i = 0;
                                  continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                  i.label = s[1];
                                  break
                                }
                                if (6 === s[0] && i.label < a[1]) {
                                  i.label = a[1], a = s;
                                  break
                                }
                                if (a && i.label < a[2]) {
                                  i.label = a[2], i.ops.push(s);
                                  break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                            }
                            s = t.call(e, i)
                          } catch (e) {
                            s = [6, e], n = 0
                          } finally {
                            r = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return c(function(t) {
                          return t.add(e)
                        }), un(Je.action.mfa_forget_remembered_machine), [4, l({
                          body: {
                            machineId: e
                          }
                        })];
                      case 1:
                        return (null == (t = n.sent()) ? void 0 : t.error) ? [3, 3] : (i.displayNewToast({
                          appearance: "success",
                          message: r.formatMessage(fr.security_status_forgot_device_toast_confirmation_text)
                        }), [4, _({})]);
                      case 2:
                        n.sent(), n.label = 3;
                      case 3:
                        return c(function(t) {
                          var r = new Set(t);
                          return r.delete(e), r
                        }), [2]
                    }
                  })
                }, function() {
                  var e = this,
                    r = arguments;
                  return new Promise(function(n, a) {
                    var i = t.apply(e, r);

                    function o(e) {
                      po(i, n, a, o, s, "next", e)
                    }

                    function s(e) {
                      po(i, n, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })();
                var t
              }
            }) : (0, n.jsx)(_o, {})]
          })
        },
        ho = function(e) {
          var t = e.rememberedMachines,
            r = e.rowsForgetting,
            i = e.forgetMachine;
          return (0, n.jsx)(ee, {
            testId: "mfa-remembered-machines-row-container",
            children: null == t ? void 0 : t.sort(function(e, t) {
              return t.lastSeenDate.localeCompare(e.lastSeenDate)
            }).map(function(e, o) {
              return (0, n.jsxs)(a.Fragment, {
                children: [(0, n.jsx)(go, {
                  forgetMachine: i,
                  rememberedMachine: e,
                  rowsForgetting: r
                }), o < t.length - 1 && (0, n.jsx)(re, {
                  thickness: "thin",
                  testId: "remembered-machine-divider"
                })]
              }, e.id)
            })
          })
        },
        go = function(e) {
          var t = e.forgetMachine,
            r = e.rememberedMachine,
            a = e.rowsForgetting,
            i = (0, L.A)(),
            o = i.formatMessage(fr.security_status_forget_machine_button_text),
            s = i.formatMessage(fr.security_status_remembered_machine_last_seen, {
              lastSeen: Cr({
                dateString: r.lastSeenDate,
                locale: i.locale
              })
            }),
            c = i.formatMessage(fr.security_status_remembered_machine_last_ip, {
              ip: r.lastSeenIp
            }),
            l = o + r.name + s + c;
          return (0, n.jsxs)(te, {
            isDisabled: a.has(r.id),
            isInteractable: !0,
            label: l,
            onClick: function() {
              return t(r.id)
            },
            testId: "row-".concat(r.id),
            children: [(0, n.jsx)(ae, {
              testId: "rememberedMachine",
              children: (0, n.jsxs)(ie, {
                className: ro,
                children: [(0, n.jsx)(oe, {
                  testId: "mfa-remembered-machine-name",
                  children: r.name
                }), (0, n.jsx)(se, {
                  testId: "mfa-remembered-machine-last-seen-date",
                  children: s
                }), (0, n.jsx)(se, {
                  testId: "mfa-remembered-machine-last-ip",
                  children: c
                })]
              })
            }), (0, n.jsx)(de, {
              children: (0, n.jsx)(E.Button, {
                appearance: "secondary",
                "aria-label": l,
                fullWidth: !0,
                isDisabled: a.has(r.id),
                isLoading: a.has(r.id),
                onClick: function() {
                  return t(r.id)
                },
                size: "LG",
                testId: "mfa-remembered-machine-forget-machine",
                children: o
              })
            })]
          })
        },
        bo = function(e) {
          var t = e.device,
            r = e.removeMfaDevice;
          return (0, n.jsxs)(Z, {
            testId: "auth-status",
            children: [(0, n.jsx)(uo, {
              device: t,
              removeMfaDevice: r
            }), (0, n.jsx)(mo, {})]
          })
        },
        yo = function(e) {
          var t = e.toggleSetup,
            r = (0, L.A)();
          return (0, n.jsx)(Z, {
            testId: "no-auth",
            children: (0, n.jsxs)(K, {
              children: [(0, n.jsxs)($, {
                children: [(0, n.jsx)(J, {
                  children: r.formatMessage(fr.security_title)
                }), (0, n.jsx)(Q, {
                  children: r.formatMessage(fr.security_title_aside)
                })]
              }), (0, n.jsx)(te, {
                isInteractable: !0,
                label: r.formatMessage(fr.security_no_auth_navigation_aria_label),
                onClick: t,
                testId: "start-mfa-setup",
                children: (0, n.jsxs)(ne, {
                  children: [(0, n.jsx)(oe, {
                    children: r.formatMessage(fr.security_no_auth_label)
                  }), (0, n.jsx)(E.IconButton, {
                    appearance: "ghost",
                    icon: "ChevronRight",
                    label: r.formatMessage(fr.security_no_auth_navigation_aria_label),
                    onClick: t,
                    size: "LG",
                    testId: "startMfaSetupButton"
                  })]
                })
              })]
            })
          })
        };

      function vo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function wo(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, a, i = [],
              o = !0,
              s = !1;
            try {
              for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return vo(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vo(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var jo = function() {
        var e = (0, i.useLocation)(),
          t = wo((0, a.useState)(!1), 2),
          r = t[0],
          o = t[1],
          s = wo((0, a.useState)(void 0), 2),
          c = s[0],
          l = s[1],
          d = an({
            route: Ye.GetMfaDevices
          }),
          u = d.data,
          _ = d.loading;
        (0, a.useEffect)(function() {
          l(null == u ? void 0 : u[0])
        }, [u]), (0, a.useEffect)(function() {
          p()
        }, [e.key]);
        var f = function() {
            o(!0), window.scrollTo(0, 0), un(Je.action.mfa_enroll_start, Je.labels.device_priority), un(Je.action.mfa_enroll_select_device_type, Je.labels.device_type_google)
          },
          p = function() {
            o(!1), window.scrollTo(0, 0), un(Je.action.mfa_enroll_cancel, Je.labels.device_type)
          },
          m = function() {
            o(!1), l(void 0), window.scrollTo(0, 0)
          },
          h = (0, a.useMemo)(function() {
            return c ? (0, n.jsx)(bo, {
              device: c,
              removeMfaDevice: m
            }) : r ? (0, n.jsx)(ao, {
              backNav: p,
              setMfaDevice: l
            }) : (0, n.jsx)(yo, {
              toggleSetup: f
            })
          }, [r, c]);
        return (0, n.jsx)(_r, {
          isLoading: _,
          children: h
        })
      };
      const xo = (0, fe.YK)({
        social_page_title: {
          defaultMessage: "Blocked List",
          description: "Title of the social page.",
          id: "social_page_title"
        },
        social_page_description: {
          defaultMessage: "Blocked players can't view your profile, send you messages, or interact with you in-game.",
          description: "The description to the social page.",
          id: "social_page_description"
        },
        social_page_gametag_label: {
          defaultMessage: "Gamertag",
          description: "Label for the gamertag row.",
          id: "social_page_gametag_label"
        },
        social_page_date_prefix: {
          defaultMessage: "Blocked on {date}",
          description: "Prefix for the blocked on date label.",
          id: "social_page_date_prefix"
        },
        social_page_unblock_button_label: {
          defaultMessage: "Unblock",
          description: "Button text to un-block a user.",
          id: "social_page_unblock_button_label"
        },
        social_page_unblock_modal_title: {
          defaultMessage: "Unblock {nickName}",
          description: "Title for the unblock modal",
          id: "social_page_unblock_modal_title"
        },
        social_page_unblock_modal_cancel_button_text: {
          defaultMessage: "Cancel",
          description: "Text for the button that cancels unblocking a user",
          id: "social_page_unblock_modal_cancel_button_text"
        },
        social_page_toast_confirmation_text: {
          defaultMessage: "{nickname} has been successfully unblocked.",
          description: "The description of a successful un-block.",
          id: "social_page_toast_confirmation_text"
        },
        social_page_toast_close_button_label: {
          defaultMessage: "Close toast",
          description: "Aria label for toast notification.",
          id: "social_page_toast_close_button_label"
        },
        social_page_toast_close_icon: {
          defaultMessage: "X",
          description: "Aria label for toast close icon.",
          id: "social_page_toast_close_icon"
        },
        social_page_no_blocked_title: {
          defaultMessage: "No Blocked Users",
          description: "Text for the title shown when no players have been blocked",
          id: "social_page_no_blocked_title"
        },
        social_page_no_blocked_description: {
          defaultMessage: "Blocked players can't view your profile, send you messages, or interact with you in-game.",
          description: "Text for the description shown when no players have been blocked",
          id: "social_page_no_blocked_description"
        },
        social_page_infinte_scroll_spinner_label: {
          defaultMessage: "Loading more blocked users.",
          description: "Label for the infinite scroll spinner",
          id: "social_page_infinite_scroll_spinner_label"
        }
      });
      var Mo = function() {
        var e = (0, L.A)();
        return (0, n.jsxs)("div", {
          className: "_1kvmuad2",
          "data-testid": "noBlockedUsers",
          children: [(0, n.jsx)(E.Heading, {
            level: 6,
            children: e.formatMessage(xo.social_page_no_blocked_title)
          }), (0, n.jsx)(E.Body, {
            size: "MD",
            className: "_1kvmuad3",
            children: e.formatMessage(xo.social_page_no_blocked_description)
          })]
        })
      };

      function ko(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Oo(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }

      function So(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, a, i = [],
              o = !0,
              s = !1;
            try {
              for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || Ao(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Ao(e, t) {
        if (e) {
          if ("string" == typeof e) return ko(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ko(e, t) : void 0
        }
      }
      var Io = {
          code: "0.0.1",
          logId: ""
        },
        Po = function() {
          var e = (0, L.A)(),
            t = So((0, a.useState)(0), 2),
            r = t[0],
            i = t[1],
            o = So((0, a.useState)(!1), 2),
            s = o[0],
            c = o[1],
            l = So((0, a.useState)([]), 2),
            d = l[0],
            u = l[1],
            _ = (0, a.useRef)(null),
            f = (0, a.useRef)(),
            p = qe(),
            m = an({
              queryOrRoute: "?index=".concat(r, "&pageSize=").concat(30),
              route: Ye.GetBlockedUsers
            }),
            h = m.data,
            g = m.fetch,
            b = m.loading,
            y = an({
              fetchOnInitial: !1,
              route: Ye.UnblockUser
            }).fetch,
            v = (0, a.useCallback)(function(e) {
              var t, r = null !== (t = null == h ? void 0 : h.users.length) && void 0 !== t ? t : 0;
              c(e.isIntersecting && r >= 30)
            }, [h]),
            w = (0, a.useMemo)(function() {
              return new IntersectionObserver(function(e) {
                var t, r = So(e, 1)[0];
                null === (t = f.current) || void 0 === t || t.call(f, r)
              })
            }, []);
          (0, a.useEffect)(function() {
            f.current = v
          }, [v]), (0, a.useEffect)(function() {
            return _.current && w.observe(_.current),
              function() {
                return w.disconnect()
              }
          }, [_.current]), (0, a.useEffect)(function() {
            if (h && h.users.length > 0) {
              var e = function(e) {
                if (Array.isArray(e)) return ko(e)
              }(t = d) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(t) || Ao(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }();
              e[r] = {
                index: r,
                users: h.users
              }, u(e)
            }
            var t
          }, [h]), (0, a.useEffect)(function() {
            var e = h && h.users.length < 30;
            if (s && !e && !b) {
              var t = r + 1;
              i(t), g({
                queryOrRoute: "?index=".concat(t, "&pageSize=").concat(30)
              })
            }
          }, [d, h, r, b, s]);
          var j = function(t, r) {
              return (n = function() {
                var n, a, i;
                return function(e, t) {
                  var r, n, a, i = {
                      label: 0,
                      sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                      },
                      trys: [],
                      ops: []
                    },
                    o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                  return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                  }), o;

                  function s(s) {
                    return function(c) {
                      return function(s) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                          if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                          switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                            case 0:
                            case 1:
                              a = s;
                              break;
                            case 4:
                              return i.label++, {
                                value: s[1],
                                done: !1
                              };
                            case 5:
                              i.label++, n = s[1], s = [0];
                              continue;
                            case 7:
                              s = i.ops.pop(), i.trys.pop();
                              continue;
                            default:
                              if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                i = 0;
                                continue
                              }
                              if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                i.label = s[1];
                                break
                              }
                              if (6 === s[0] && i.label < a[1]) {
                                i.label = a[1], a = s;
                                break
                              }
                              if (a && i.label < a[2]) {
                                i.label = a[2], i.ops.push(s);
                                break
                              }
                              a[2] && i.ops.pop(), i.trys.pop();
                              continue
                          }
                          s = t.call(e, i)
                        } catch (e) {
                          s = [6, e], n = 0
                        } finally {
                          r = a = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                          value: s[0] ? s[1] : void 0,
                          done: !0
                        }
                      }([s, c])
                    }
                  }
                }(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return [4, y({
                        queryOrRoute: "?rockstarId=".concat(r.rockstarId)
                      })];
                    case 1:
                      return o.sent(), [4, g({
                        queryOrRoute: "?index=".concat(t, "&pageSize=").concat(30)
                      })];
                    case 2:
                      return n = o.sent(), !(null == (a = n.data) ? void 0 : a.users.find(function(e) {
                        return e.rockstarId === r.rockstarId
                      })) && r ? (i = d[t], d[t] = {
                        index: t,
                        users: i.users.filter(function(e) {
                          return e.rockstarId !== r.rockstarId
                        })
                      }, p.displayNewToast({
                        appearance: "success",
                        message: e.formatMessage(xo.social_page_toast_confirmation_text, {
                          nickname: r.displayName
                        })
                      })) : p.displayNewError(Io), [2]
                  }
                })
              }, function() {
                var e = this,
                  t = arguments;
                return new Promise(function(r, a) {
                  var i = n.apply(e, t);

                  function o(e) {
                    Oo(i, r, a, o, s, "next", e)
                  }

                  function s(e) {
                    Oo(i, r, a, o, s, "throw", e)
                  }
                  o(void 0)
                })
              })();
              var n
            },
            x = d.some(function(e) {
              return e.users.length > 0
            });
          return (0, n.jsxs)(_r, {
            isLoading: !x && b,
            children: [x ? (0, n.jsx)(Z, {
              testId: "blockedUsers",
              children: (0, n.jsxs)(K, {
                children: [(0, n.jsxs)($, {
                  children: [(0, n.jsx)(J, {
                    children: e.formatMessage(xo.social_page_title)
                  }), (0, n.jsx)(Q, {
                    children: e.formatMessage(xo.social_page_description)
                  })]
                }), (0, n.jsxs)(ee, {
                  children: [d.map(function(e) {
                    return (0, n.jsxs)(a.Fragment, {
                      children: [e.users.map(function(t, r) {
                        return (0, n.jsxs)(a.Fragment, {
                          children: [(0, n.jsx)(Co, {
                            pageIndex: e.index,
                            unblockUser: j,
                            userToUnblock: t
                          }), r < e.users.length - 1 && (0, n.jsx)(re, {
                            thickness: "thin"
                          })]
                        }, t.displayName)
                      }), e.index < d.length - 1 && (0, n.jsx)(re, {
                        thickness: "thin"
                      })]
                    }, "blocked-users-page-".concat(e.index))
                  }), b && s && (0, n.jsx)(E.Spinner, {
                    className: "_1kvmuad4",
                    label: e.formatMessage(xo.social_page_infinte_scroll_spinner_label),
                    testId: "infiniteScrollSpinner"
                  })]
                })]
              })
            }) : (0, n.jsx)(Mo, {}), (0, n.jsx)("div", {
              "data-testid": "loadMore",
              ref: _
            })]
          })
        },
        Co = function(e) {
          var t = e.pageIndex,
            r = e.unblockUser,
            i = e.userToUnblock,
            o = (0, L.A)(),
            s = So((0, a.useState)(!1), 2),
            c = s[0],
            l = s[1],
            d = So((0, a.useState)(!1), 2),
            u = d[0],
            _ = d[1],
            f = function() {
              return _(!0)
            },
            p = function() {
              return _(!1)
            },
            m = o.formatMessage(xo.social_page_date_prefix, {
              date: Pr({
                dateString: i.lastUpdatedDateUtc,
                locale: o.locale
              })
            }),
            h = o.formatMessage(xo.social_page_unblock_button_label),
            g = h + i.displayName + m;
          return (0, n.jsxs)(te, {
            "aria-haspopup": "dialog",
            isDisabled: c,
            isInteractable: !0,
            label: g,
            onClick: f,
            testId: "row-".concat(i.displayName),
            children: [(0, n.jsxs)(ae, {
              testId: "blockedUser",
              children: [(0, n.jsx)(ce, {
                children: (0, n.jsx)("img", {
                  alt: i.displayName,
                  className: "_1kvmuad0",
                  "data-testid": "avatar",
                  src: i.avatarUrl
                })
              }), (0, n.jsxs)(ie, {
                children: [(0, n.jsx)(oe, {
                  shouldEllipsis: !0,
                  testId: "nickname",
                  children: i.displayName
                }), (0, n.jsx)(se, {
                  shouldEllipsis: !0,
                  testId: "blockDate",
                  children: m
                })]
              })]
            }), (0, n.jsx)(de, {
              children: (0, n.jsxs)(E.Dialog.Root, {
                isOpen: u,
                onOpenChange: _,
                children: [(0, n.jsx)(E.Dialog.Trigger, {
                  asChild: !0,
                  children: (0, n.jsx)(E.Button, {
                    appearance: "tertiary",
                    fullWidth: !0,
                    isDisabled: c,
                    isLoading: c,
                    onPress: f,
                    size: "LG",
                    testId: "modalButton-".concat(i.displayName),
                    children: h
                  })
                }), (0, n.jsx)(E.Dialog.Overlay, {
                  className: Gn,
                  onClick: function(e) {
                    e.stopPropagation(), p()
                  },
                  testId: "unblockOverlay",
                  children: (0, n.jsxs)(E.Dialog.Content, {
                    "aria-describedby": void 0,
                    onClick: function(e) {
                      e.stopPropagation()
                    },
                    testId: "unblockModal",
                    children: [(0, n.jsx)(E.Dialog.CloseButton, {
                      label: o.formatMessage(Yn.modal_close_modal_button_label),
                      onPress: p
                    }), (0, n.jsxs)(Fn.Root, {
                      children: [(0, n.jsx)(Fn.Viewport, {
                        children: (0, n.jsxs)(E.Dialog.Layout, {
                          className: "_1kvmuad5",
                          children: [(0, n.jsx)(E.Dialog.Title, {
                            testId: "unblockModalNickname",
                            children: o.formatMessage(xo.social_page_unblock_modal_title, {
                              nickName: i.displayName
                            })
                          }), (0, n.jsx)("img", {
                            alt: i.displayName,
                            className: "_1kvmuad6",
                            "data-testid": "unblockModalAvatar",
                            src: i.avatarUrl
                          }), (0, n.jsxs)(E.Dialog.ActionArea, {
                            className: "_1kvmuad7",
                            children: [(0, n.jsx)(E.Button, {
                              appearance: "primary",
                              isDisabled: c,
                              isLoading: c,
                              onPress: function() {
                                r(t, i), l(!0)
                              },
                              size: "XL",
                              testId: "modalUnblock",
                              children: o.formatMessage(xo.social_page_unblock_button_label)
                            }), (0, n.jsx)(E.Button, {
                              appearance: "ghost",
                              isDisabled: c,
                              isLoading: c,
                              onPress: p,
                              size: "LG",
                              testId: "modalCancel",
                              children: o.formatMessage(xo.social_page_unblock_modal_cancel_button_text)
                            })]
                          })]
                        })
                      }), (0, n.jsx)(Fn.Scrollbar, {
                        orientation: "vertical",
                        children: (0, n.jsx)(Fn.Thumb, {})
                      })]
                    })]
                  })
                })]
              })
            })]
          })
        };
      const To = (0, fe.YK)({
        account_layout_privacy_menu_item: {
          defaultMessage: "Privacy",
          description: "privacy_menu_item",
          id: "account_layout_privacy_menu_item"
        },
        account_layout_connections_menu_item: {
          defaultMessage: "Connections",
          description: "connections_menu_item",
          id: "account_layout_connections_menu_item"
        },
        account_layout_communications_menu_item: {
          defaultMessage: "Communications",
          description: "communications_menu_item",
          id: "account_layout_communications_menu_item"
        },
        account_layout_security_menu_item: {
          defaultMessage: "Security",
          description: "security_menu_item",
          id: "account_layout_security_menu_item"
        },
        account_layout_social_menu_item: {
          defaultMessage: "Social",
          description: "social_menu_item",
          id: "account_layout_social_menu_item"
        },
        account_layout_profile_menu_item: {
          defaultMessage: "Profile",
          description: "profile_menu_item",
          id: "account_layout_profile_menu_item"
        }
      });
      var Do = [{
        path: "",
        Icon: rt.Person,
        label: To.account_layout_profile_menu_item,
        nestedPath: "/account/details/",
        ga: Je.action.menu_profile,
        testId: "menuProfile"
      }, {
        path: "privacy",
        Icon: rt.LockKeyhole,
        label: To.account_layout_privacy_menu_item,
        ga: Je.action.menu_privacy,
        testId: "menuPrivacy"
      }, {
        path: "connections",
        Icon: rt.CircleCheck,
        label: To.account_layout_connections_menu_item,
        ga: Je.action.menu_linked_accounts,
        testId: "menuConnections"
      }, {
        path: "communications",
        Icon: rt.Envelope,
        label: To.account_layout_communications_menu_item,
        ga: Je.action.menu_communications,
        testId: "menuCommunications"
      }, {
        path: "security",
        Icon: rt.ShieldCheck,
        label: To.account_layout_security_menu_item,
        ga: Je.action.menu_security,
        testId: "menuSecurity"
      }, {
        path: "social",
        Icon: rt.TwoPeople,
        label: To.account_layout_social_menu_item,
        ga: Je.action.menu_social,
        testId: "menuSocial"
      }];
      const No = (0, fe.YK)({
          document_title_profile: {
            defaultMessage: "Account Settings",
            description: "HTML document title for /account",
            id: "document_title_profile"
          },
          document_title_email: {
            defaultMessage: "Account Settings - Profile - Email",
            description: "HTML document title for /account/details/email",
            id: "document_title_email"
          },
          document_title_password: {
            defaultMessage: "Account Settings - Profile - Password",
            description: "HTML document title for /account/details/password",
            id: "document_title_password"
          },
          document_title_nickname: {
            defaultMessage: "Account Settings - Profile - Nickname",
            description: "HTML document title for /account/details/nickname",
            id: "document_title_nickname"
          },
          document_title_privacy: {
            defaultMessage: "Account Settings - Privacy",
            description: "HTML document title for /account/privacy",
            id: "document_title_privacy"
          },
          document_title_connections: {
            defaultMessage: "Account Settings - Connections",
            description: "HTML document title for /account/connections",
            id: "document_title_connections"
          },
          document_title_communications: {
            defaultMessage: "Account Settings - Communications",
            description: "HTML document title for /account/communications",
            id: "document_title_communications"
          },
          document_title_security: {
            defaultMessage: "Account Settings - Security",
            description: "HTML document title for /account/security",
            id: "document_title_security"
          },
          document_title_social: {
            defaultMessage: "Account Settings - Social",
            description: "HTML document title for /account/social",
            id: "document_title_social"
          },
          document_title_delete_cancel: {
            defaultMessage: "Account Settings - Cancel Delete Account",
            description: "HTML document title for /account/delete/cancel",
            id: "document_title_delete_cancel"
          },
          document_title_delete_complete: {
            defaultMessage: "Account Settings - Thank You",
            description: "HTML document title for /account/delete/complete",
            id: "document_title_delete_complete"
          },
          document_title_email_verify: {
            defaultMessage: "Account Settings - Email Verify",
            description: "HTML document title for /account/verify",
            id: "document_title_email_verify"
          },
          document_title_reset_mfa_by_email: {
            defaultMessage: "Account Settings - Reset 2-Step Verification",
            description: "HTML document title for /account/security/recoveraccountmfa",
            id: "document_title_reset_mfa_by_email"
          }
        }),
        Lo = {
          catchAll: {
            route: "*",
            title: No.document_title_profile
          },
          profile: {
            route: "/",
            title: No.document_title_profile
          },
          email: {
            route: "/details/email",
            title: No.document_title_email
          },
          password: {
            route: "/details/password",
            title: No.document_title_password
          },
          nickname: {
            route: "/details/nickname",
            title: No.document_title_nickname
          },
          privacy: {
            route: "/privacy",
            title: No.document_title_privacy
          },
          connections: {
            route: "/connections",
            title: No.document_title_connections
          },
          communications: {
            route: "/communications",
            title: No.document_title_communications
          },
          security: {
            route: "/security",
            title: No.document_title_security
          },
          social: {
            route: "/social",
            title: No.document_title_social
          },
          deleteCancel: {
            route: "/delete/cancel",
            title: No.document_title_delete_cancel
          },
          deleteComplete: {
            route: "/delete/complete",
            title: No.document_title_delete_complete
          },
          emailVerify: {
            route: "/verify",
            title: No.document_title_email_verify
          },
          resetMfaByEmail: {
            route: "/security/recoveraccountmfa",
            title: No.document_title_reset_mfa_by_email
          }
        };
      var Eo = function() {
        var e, t = (0, L.A)(),
          r = (0, i.useLocation)(),
          a = an({
            route: Ye.ProfileOverview
          }),
          o = a.data,
          s = a.loading,
          c = an({
            route: Ye.GetLinkedAccounts
          }),
          l = c.data,
          d = c.loading;
        return fn(null == l ? void 0 : l.linkedAccounts), an({
          route: Ye.PasswordRequirements
        }), (0, n.jsxs)("div", {
          className: "_1md0fdx0 dhzzuw5 dhzzuw4",
          children: [(0, n.jsx)(bn, {
            children: Do.map(function(e) {
              var a = e.path,
                o = e.Icon,
                s = e.label,
                c = e.nestedPath,
                l = e.ga,
                d = e.testId,
                u = void 0 !== c && r.pathname.includes(c);
              return (0, n.jsx)(i.NavLink, {
                className: "_1md0fdx3",
                "data-ga": l,
                "data-testid": d,
                to: a,
                role: "navigation",
                "aria-labelledby": d,
                end: "" === a,
                draggable: !1,
                children: function(e) {
                  var r = e.isActive;
                  return (0, n.jsxs)(yn, {
                    active: r || u,
                    children: [(0, n.jsx)(o, {
                      className: "_1md0fdx4",
                      size: "LG",
                      label: "",
                      "aria-hidden": !0
                    }), (0, n.jsx)(E.Body, {
                      className: r || u ? "_1md0fdx5" : "",
                      size: "MD",
                      id: d,
                      "aria-hidden": !0,
                      appearance: "bold",
                      children: t.formatMessage(s)
                    })]
                  })
                }
              }, a)
            })
          }), (0, n.jsx)(wn, {
            className: "_1md0fdx1",
            children: (0, n.jsxs)(i.Routes, {
              children: [(0, n.jsx)(i.Route, {
                index: !0,
                element: (0, n.jsx)(_r, {
                  isLoading: s,
                  children: (0, n.jsx)(Ka, {
                    account: o
                  })
                })
              }), (0, n.jsx)(i.Route, {
                path: Lo.email.route,
                element: (0, n.jsx)(Mr, {})
              }), (0, n.jsx)(i.Route, {
                path: Lo.password.route,
                element: (0, n.jsx)(Xr, {})
              }), (0, n.jsx)(i.Route, {
                path: Lo.nickname.route,
                element: (0, n.jsx)(qr, {})
              }), (0, n.jsx)(i.Route, {
                path: Lo.privacy.route,
                element: (0, n.jsx)(si, {
                  isMinor: null !== (e = null == o ? void 0 : o.isMinor) && void 0 !== e && e
                })
              }), (0, n.jsx)(i.Route, {
                path: Lo.connections.route,
                element: (0, n.jsx)(Ei, {
                  data: l,
                  loading: d
                })
              }), (0, n.jsx)(i.Route, {
                path: Lo.communications.route,
                element: (0, n.jsx)(Xi, {})
              }), (0, n.jsx)(i.Route, {
                path: Lo.security.route,
                element: (0, n.jsx)(jo, {})
              }), (0, n.jsx)(i.Route, {
                path: Lo.social.route,
                element: (0, n.jsx)(Po, {})
              }), (0, n.jsx)(i.Route, {
                path: Lo.catchAll.route,
                element: (0, n.jsx)(i.Navigate, {
                  to: Lo.profile.route
                })
              })]
            })
          }), (0, n.jsx)(di, {})]
        })
      };
      const Ro = (0, fe.YK)({
        cancel_account_deletion_request_received_title: {
          defaultMessage: "Account Deletion Cancellation Request Received",
          description: "The title for the account deletion cancellation request received alert.",
          id: "cancel_account_deletion_request_received_title"
        },
        cancel_account_deletion_request_received_description: {
          defaultMessage: "Your account deletion request has been cancelled. A confirmation email will be sent to the email address associated with your account. Once you receive that email, you will be able to sign in to your Rockstar Games account.",
          description: "Request received description for the account deletion cancellation alert.",
          id: "cancel_account_deletion_request_received_description"
        },
        cancel_account_deletion_thank_you_text: {
          defaultMessage: "Thank you for being a part of our community.",
          description: "Thank you text for the account deletion cancellation alert.",
          id: "cancel_account_deletion_thank_you_text"
        },
        cancel_account_deletion_error_title: {
          defaultMessage: "Invalid Link",
          description: "The title for the account deletion cancellation error alert.",
          id: "cancel_account_deletion_error_title"
        },
        cancel_account_deletion_error_description: {
          defaultMessage: "An error occurred with the provided information.",
          description: "Error description for the account deletion cancellation alert.",
          id: "cancel_account_deletion_error_description"
        },
        cancel_account_deletion_support_text: {
          defaultMessage: "Please contact Rockstar Games Support for any assistance.",
          description: "Support text for the account deletion cancellation alert.",
          id: "cancel_account_deletion_support_text"
        },
        cancel_account_deletion_request_already_received_title: {
          defaultMessage: "Rockstar Games Account Deletion Request Canceled",
          description: "The title for the account deletion cancellation request already received alert.",
          id: "cancel_account_deletion_request_already_received_title"
        },
        cancel_account_deletion_request_already_received_description: {
          defaultMessage: "Your account access is being restored, please wait 10 to 15 minutes before attempting to sign in to your account.",
          description: "Request already received description for the account deletion cancellation alert.",
          id: "cancel_account_deletion_request_already_received_description"
        }
      });

      function qo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var Go = function() {
        var e, t, r = (0, L.A)(),
          o = (0, i.useNavigate)(),
          s = (e = (0, i.useSearchParams)(), t = 1, function(e) {
            if (Array.isArray(e)) return e
          }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(e, t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return qo(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? qo(e, t) : void 0
            }
          }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }())[0].get("token"),
          c = an({
            route: Ye.CancelAccountDeletion,
            fetchOnInitial: !1,
            queryOrRoute: "/".concat(s)
          }),
          l = c.data,
          d = c.error,
          u = c.fetch,
          _ = c.isRequestComplete;
        return (0, a.useEffect)(function() {
          s ? u({
            queryOrRoute: "/".concat(s)
          }) : o("/account")
        }, [s]), s && (0, n.jsx)(_r, {
          isLoading: !_,
          children: (0, n.jsx)("div", {
            className: "_16mxz470",
            children: (0, n.jsxs)("div", {
              className: "_16mxz471",
              children: [(0, n.jsx)(_e, {
                className: "_16mxz473",
                label: "Rockstar Games",
                testId: "rockstarLogo"
              }), (0, n.jsx)($, {
                children: (0, n.jsx)(J, {
                  testId: "cancelTitle",
                  children: d ? r.formatMessage(Ro.cancel_account_deletion_error_title) : (null == l ? void 0 : l.hasConflicts) ? r.formatMessage(Ro.cancel_account_deletion_request_already_received_title) : r.formatMessage(Ro.cancel_account_deletion_request_received_title)
                })
              }), (0, n.jsx)("div", {
                className: "_16mxz472",
                "data-testid": "cancelDescription",
                children: d ? (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(E.Body, {
                    size: "SM",
                    children: r.formatMessage(Ro.cancel_account_deletion_error_description)
                  }), (0, n.jsx)(E.Body, {
                    size: "SM",
                    children: r.formatMessage(Ro.cancel_account_deletion_support_text)
                  })]
                }) : (null == l ? void 0 : l.hasConflicts) ? (0, n.jsx)(E.Body, {
                  size: "SM",
                  children: r.formatMessage(Ro.cancel_account_deletion_request_already_received_description)
                }) : (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(E.Body, {
                    size: "SM",
                    children: r.formatMessage(Ro.cancel_account_deletion_request_received_description)
                  }), (0, n.jsx)(E.Body, {
                    size: "SM",
                    children: r.formatMessage(Ro.cancel_account_deletion_thank_you_text)
                  })]
                })
              })]
            })
          })
        })
      };

      function Uo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      const Vo = function() {
          var e, t, r = (0, i.useLocation)(),
            n = (e = (0, i.useSearchParams)(), t = 2, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Uo(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Uo(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = n[0],
            s = n[1],
            c = r.hash;
          (0, a.useEffect)(function() {
            o.get("lang") && (o.delete("lang"), s(o), c && (window.location.hash = c))
          }, [o])
        },
        Fo = (0, fe.YK)({
          verify_email_title: {
            defaultMessage: "Email Verification",
            description: "The heading for the verify email page.",
            id: "verify_email_title"
          },
          verify_email_alert_success_title: {
            defaultMessage: "Success",
            description: "The success heading inside the inline alert.",
            id: "verify_email_alert_success_title"
          },
          verify_email_alert_success_description: {
            defaultMessage: "Thank you, your email has been successfully verified.",
            description: "The success description inside the inline alert.",
            id: "verify_email_alert_success_description"
          },
          verify_email_alert_failure_title: {
            defaultMessage: "Unable to verify email address",
            description: "The failure heading inside the inline alert.",
            id: "verify_email_alert_failure_title"
          },
          verify_email_alert_failure_description: {
            defaultMessage: "Your email address could not be verified at this time, your account may have already been verified or the link you followed may be malformed.",
            description: "The failure description inside the inline alert.",
            id: "verify_email_alert_failure_description"
          }
        });

      function zo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var Bo = function() {
          var e, t, r = (0, L.A)(),
            o = (e = (0, i.useSearchParams)(), t = 1, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != r) {
                var n, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return zo(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zo(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            s = (0, i.useNavigate)(),
            c = o.get("ID"),
            l = o.get("code"),
            d = an({
              fetchOnInitial: !1,
              route: Ye.VerifyEmail
            }),
            u = d.error,
            _ = d.isRequestComplete,
            f = d.fetch;
          return (0, a.useEffect)(function() {
            c && l ? f({
              body: {
                rockstarId: Number(c),
                validationCode: l
              }
            }) : s("/account")
          }, []), c && l && (0, n.jsx)(_r, {
            isLoading: !_,
            children: (0, n.jsx)("div", {
              className: "t0s62b0",
              children: (0, n.jsxs)("div", {
                className: "t0s62b1",
                children: [(0, n.jsx)(_e, {
                  className: "t0s62b3",
                  label: "Rockstar Games",
                  testId: "rockstarLogo"
                }), (0, n.jsx)($, {
                  children: (0, n.jsx)(J, {
                    children: r.formatMessage(Fo.verify_email_title)
                  })
                }), (0, n.jsxs)("div", {
                  className: "t0s62b2",
                  children: [(0, n.jsx)(E.Body, {
                    size: "LG",
                    appearance: "bold",
                    testId: "alertTitle",
                    children: u ? r.formatMessage(Fo.verify_email_alert_failure_title) : r.formatMessage(Fo.verify_email_alert_success_title)
                  }), (0, n.jsx)(E.Body, {
                    size: "SM",
                    testId: "alertDescription",
                    children: u ? r.formatMessage(Fo.verify_email_alert_failure_description) : r.formatMessage(Fo.verify_email_alert_success_description)
                  })]
                })]
              })
            })
          })
        },
        Ho = function(e) {
          var t = e.children,
            r = ke().getAccessToken,
            i = (0, L.A)(),
            o = be();
          return (0, a.useEffect)(function() {
            r()
          }, []), (0, a.useEffect)(function() {
            !1 === o.isAuthenticated && !1 === o.isAuthPending && window.location.replace(m.getAuthorizeUrl(i.locale))
          }, [o.isAuthenticated, o.isAuthPending]), (0, n.jsx)(_r, {
            isLoading: !o.isAuthenticated,
            children: t
          })
        },
        Yo = "rqd48d",
        Wo = (0, q.c)({
          defaultClassName: "rqd480",
          variantClassNames: {
            isForm: {
              true: "rqd481",
              false: "rqd482"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xo = "rqd485",
        Zo = "rqd486",
        Ko = (0, q.c)({
          defaultClassName: "rqd487",
          variantClassNames: {
            isForm: {
              true: "rqd488",
              false: "rqd489"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const $o = (0, fe.YK)({
        mfa_reset_by_email_title: {
          defaultMessage: "2-Step Verification Account Recovery",
          description: "Title for the mfa account recovery initiated by email.",
          id: "mfa_reset_by_email_title"
        },
        mfa_reset_by_email_subtitle: {
          defaultMessage: "To proceed, please enter your Rockstar Games password to remove 2-Step Verification from your account:",
          description: "Text informing the user about how to use the form.",
          id: "mfa_reset_by_email_subtitle"
        },
        mfa_reset_by_email_password_form_title: {
          defaultMessage: "Password",
          description: "Title of the password form submission box.",
          id: "mfa_reset_by_email_password_form_title"
        },
        mfa_reset_by_email_password_required: {
          defaultMessage: "Please enter your Rockstar Games password",
          description: "Text letting the user know a password is required",
          id: "mfa_reset_by_email_password_required"
        },
        mfa_reset_by_email_password_form_default_text: {
          defaultMessage: "Enter Password",
          description: "Placeholder text in the form box for password.",
          id: "mfa_reset_by_email_password_form_default_text"
        },
        mfa_reset_by_email_submit_button_text: {
          defaultMessage: "Remove 2-Step",
          description: "Text for form submission button which will remove mfa device",
          id: "mfa_reset_by_email_submit_button_text"
        },
        mfa_reset_by_email_advisement_paragraph: {
          defaultMessage: "The account recovery process will remove your 2-Step Verification device. We strongly advise that you protect your account with 2-Step Verification.",
          description: "Text advising the user about the importance of mfa.",
          id: "mfa_reset_by_email_advisement_paragraph"
        },
        mfa_reset_by_email_more_information_paragraph: {
          defaultMessage: "For more information about how to secure your Rockstar Games account using 2-Step Verification, visit our <mfaSupportAnchor>Support site</mfaSupportAnchor>.",
          description: "Text informing and the user about, and linking to, support site resources.",
          id: "mfa_reset_by_email_more_information_paragraph"
        },
        mfa_reset_success_title: {
          defaultMessage: "Success",
          description: "Title for the successful reset section",
          id: "mfa_reset_success_title"
        },
        mfa_reset_success_subtitle: {
          defaultMessage: "2-Step Verification has been successfully removed from your account. For more information about how to secure your Rockstar Games account using 2-Step Verification, visit our Support site.",
          description: "Text describing possible next steps for user after 2fa removal",
          id: "mfa_reset_success_subtitle"
        },
        mfa_reset_manage_account_button: {
          defaultMessage: "Manage Account",
          description: "Text for the button to take the user back to account management",
          id: "mfa_reset_manage_account_button"
        },
        mfa_reset_post_removal_notification: {
          defaultMessage: "The account recovery process has removed your 2-Step Verification device. We strongly advise that you protect your account with 2-Step Verification via Account Settings",
          description: "Text notifying the user about the importance of 2fa after device removal",
          id: "mfa_reset_post_removal_notification"
        }
      });

      function Jo(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a)
      }
      var Qo = "password",
        es = function(e) {
          var t, r, a, i = e.setMfaHasBeenReset,
            o = e.code,
            s = e.rockstarId,
            c = e.mfaResetCookie,
            l = (0, L.A)(),
            d = an({
              fetchOnInitial: !1,
              route: Ye.VerifyResetMfaByEmail
            }),
            u = d.fetch,
            _ = !d.loading && o && s && c;
          return (0, n.jsxs)("div", {
            className: Wo({
              isForm: !0
            }),
            children: [(0, n.jsxs)("div", {
              className: Xo,
              children: [(0, n.jsxs)("div", {
                className: Ko({
                  isForm: !0
                }),
                children: [(0, n.jsx)(E.Heading, {
                  level: 5,
                  testId: "reset-mfa-form-title",
                  children: l.formatMessage($o.mfa_reset_by_email_title)
                }), (0, n.jsx)(E.Body, {
                  size: "MD",
                  className: Yo,
                  testId: "reset-mfa-form-subTitle",
                  children: l.formatMessage($o.mfa_reset_by_email_subtitle)
                })]
              }), (0, n.jsx)("div", {
                className: Xo,
                children: (0, n.jsxs)(tr, {
                  schema: $e.pipe($e.object((t = {}, r = Qo, a = $e.pipe($e.string(), $e.nonEmpty(l.formatMessage($o.mfa_reset_by_email_password_required))), r in t ? Object.defineProperty(t, r, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : t[r] = a, t))),
                  defaultValues: {
                    password: ""
                  },
                  onSubmit: function(e) {
                    var t, r = e.formData;
                    return (t = function() {
                      var e, t;
                      return function(e, t) {
                        var r, n, a, i = {
                            label: 0,
                            sent: function() {
                              if (1 & a[0]) throw a[1];
                              return a[1]
                            },
                            trys: [],
                            ops: []
                          },
                          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                          return this
                        }), o;

                        function s(s) {
                          return function(c) {
                            return function(s) {
                              if (r) throw new TypeError("Generator is already executing.");
                              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                  case 0:
                                  case 1:
                                    a = s;
                                    break;
                                  case 4:
                                    return i.label++, {
                                      value: s[1],
                                      done: !1
                                    };
                                  case 5:
                                    i.label++, n = s[1], s = [0];
                                    continue;
                                  case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                  default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                      i = 0;
                                      continue
                                    }
                                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                      i.label = s[1];
                                      break
                                    }
                                    if (6 === s[0] && i.label < a[1]) {
                                      i.label = a[1], a = s;
                                      break
                                    }
                                    if (a && i.label < a[2]) {
                                      i.label = a[2], i.ops.push(s);
                                      break
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                s = t.call(e, i)
                              } catch (e) {
                                s = [6, e], n = 0
                              } finally {
                                r = a = 0
                              }
                              if (5 & s[0]) throw s[1];
                              return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                              }
                            }([s, c])
                          }
                        }
                      }(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return e = {
                              password: r[Qo],
                              code: o,
                              mfaResetCookie: c,
                              rockstarId: s
                            }, [4, u({
                              body: e
                            })];
                          case 1:
                            return (null == (t = n.sent()) ? void 0 : t.error) || i(!0), [2]
                        }
                      })
                    }, function() {
                      var e = this,
                        r = arguments;
                      return new Promise(function(n, a) {
                        var i = t.apply(e, r);

                        function o(e) {
                          Jo(i, n, a, o, s, "next", e)
                        }

                        function s(e) {
                          Jo(i, n, a, o, s, "throw", e)
                        }
                        o(void 0)
                      })
                    })()
                  },
                  children: [(0, n.jsx)(rr, {
                    children: (0, n.jsxs)(wt, {
                      name: Qo,
                      isRequired: !0,
                      className: "rqd48a",
                      children: [(0, n.jsx)(xt, {
                        children: l.formatMessage($o.mfa_reset_by_email_password_form_title)
                      }), (0, n.jsx)(jt, {
                        testId: "reset-mfa-form-password",
                        type: "password",
                        placeholder: l.formatMessage($o.mfa_reset_by_email_password_form_default_text)
                      })]
                    })
                  }), (0, n.jsx)(nr, {
                    appearance: "primary",
                    isDisabled: !_,
                    isLoading: !_,
                    size: "LG",
                    testId: "reset-mfa-form-submit-button",
                    className: Zo,
                    children: l.formatMessage($o.mfa_reset_by_email_submit_button_text)
                  })]
                })
              })]
            }), (0, n.jsxs)("div", {
              className: "rqd48b",
              children: [(0, n.jsx)(E.Body, {
                size: "SM",
                className: Yo,
                testId: "reset-mfa-form-advisement",
                children: l.formatMessage($o.mfa_reset_by_email_advisement_paragraph)
              }), (0, n.jsx)("div", {
                className: "rqd48c"
              }), (0, n.jsx)(E.Body, {
                size: "SM",
                className: Yo,
                testId: "reset-mfa-form-support-information",
                children: l.formatMessage($o.mfa_reset_by_email_more_information_paragraph, {
                  mfaSupportAnchor: function(e) {
                    return (0, n.jsx)("a", {
                      className: "_1md0fdx9",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: m.getAccountSettingsSupportPage("setting-up-2-step-verification"),
                      "data-testid": "reset-mfa-form-supportUrl",
                      children: e
                    })
                  }
                })
              })]
            })]
          })
        },
        ts = function() {
          var e = (0, L.A)(),
            t = (0, i.useNavigate)();
          return (0, n.jsxs)("div", {
            className: Wo({
              isForm: !1
            }),
            children: [(0, n.jsxs)("div", {
              className: Xo,
              children: [(0, n.jsx)(ce, {
                testId: "mfa-reset-success-checkmark",
                children: (0, n.jsx)(rt.CircleCheckFilled, {
                  color: kt.LU.alias.color.icon.success,
                  size: "LG",
                  label: e.formatMessage($o.mfa_reset_success_title)
                })
              }), (0, n.jsxs)("div", {
                className: Ko({
                  isForm: !1
                }),
                children: [(0, n.jsxs)("div", {
                  className: "rqd483",
                  children: [(0, n.jsx)(E.Heading, {
                    level: 5,
                    testId: "mfa-reset-success-title",
                    children: e.formatMessage($o.mfa_reset_success_title)
                  }), (0, n.jsx)(E.Body, {
                    size: "MD",
                    className: Yo,
                    testId: "mfa-reset-success-subTitle",
                    children: e.formatMessage($o.mfa_reset_success_subtitle)
                  })]
                }), (0, n.jsx)(E.Button, {
                  size: "XL",
                  appearance: "primary",
                  className: Zo,
                  onPress: function() {
                    return t("/account")
                  },
                  testId: "mfa-reset-success-manage-account-button",
                  children: e.formatMessage($o.mfa_reset_manage_account_button)
                })]
              })]
            }), (0, n.jsx)("div", {
              children: (0, n.jsx)(E.Body, {
                className: Yo,
                size: "SM",
                testId: "mfa-reset-success-advisement",
                children: e.formatMessage($o.mfa_reset_post_removal_notification)
              })
            })]
          })
        };

      function rs(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var ns = function() {
        var e, t, r = (e = (0, a.useState)(!1), t = 2, function(e) {
            if (Array.isArray(e)) return e
          }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(e, t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return rs(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? rs(e, t) : void 0
            }
          }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          o = r[0],
          s = r[1],
          c = (0, i.useLocation)(),
          l = new URLSearchParams(c.search),
          d = Object.fromEntries(l.entries());
        return (0, n.jsx)("div", {
          className: "rqd484",
          children: o ? (0, n.jsx)(ts, {}) : (0, n.jsx)(es, {
            setMfaHasBeenReset: s,
            code: d.validationCode,
            mfaResetCookie: d.cookie,
            rockstarId: Number(d.id)
          })
        })
      };

      function as(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function is(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function os(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            is(e, t, r[t])
          })
        }
        return e
      }

      function ss(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        }(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }
      const cs = (ls = function() {
        var e, t;
        Vo(), e = (0, L.A)(), t = (0, i.useLocation)(), (0, a.useEffect)(function() {
          var r, n = null !== (r = Object.values(Lo).find(function(e) {
            return "/account".concat(e.route) === t.pathname
          })) && void 0 !== r ? r : Lo.catchAll;
          window.postMessage({
            title: e.formatMessage(n.title),
            type: "graph.titleUpdate"
          })
        }, [t.pathname]), (0, a.useEffect)(function() {
          (0, s.isCastleInitialized)() || (0, s.initializeCastle)({
            pk: m.CASTLE_PUBLISHABLE_KEY
          }, l.captureException)
        }, []);
        var r, c, d = (r = (0, a.useState)({
            isAuthenticated: !1,
            isAuthPending: !0,
            accessToken: void 0,
            tokenExpiresTime: void 0
          }), c = 2, function(e) {
            if (Array.isArray(e)) return e
          }(r) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(r, c) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return as(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? as(e, t) : void 0
            }
          }(r, c) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          _ = d[1],
          f = (0, a.useMemo)(function() {
            return ss(os({}, u), {
              setAccessToken: function(e, t) {
                return _(ss(os({}, u), {
                  isAuthPending: !1,
                  isAuthenticated: !!e,
                  accessToken: e,
                  tokenExpiresTime: t
                }))
              }
            })
          }, [u.isAuthPending, u.isAuthenticated]);
        return (0, n.jsx)(ge.Provider, {
          value: f,
          children: (0, n.jsx)(o.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            children: (0, n.jsx)(Ve, {
              children: (0, n.jsxs)(i.Routes, {
                children: [(0, n.jsx)(i.Route, {
                  path: Lo.deleteCancel.route,
                  element: (0, n.jsx)(Go, {})
                }), (0, n.jsx)(i.Route, {
                  path: Lo.deleteComplete.route,
                  element: (0, n.jsx)(me, {})
                }), (0, n.jsx)(i.Route, {
                  path: Lo.emailVerify.route,
                  element: (0, n.jsx)(Bo, {})
                }), (0, n.jsx)(i.Route, {
                  path: Lo.resetMfaByEmail.route,
                  element: (0, n.jsx)(ns, {})
                }), (0, n.jsx)(i.Route, {
                  path: Lo.catchAll.route,
                  element: (0, n.jsx)(Ho, {
                    children: (0, n.jsx)(Eo, {})
                  })
                })]
              })
            })
          })
        })
      }, function(e) {
        var t, r, i = (t = (0, a.useState)(), r = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
              var n, a, i = [],
                o = !0,
                s = !1;
              try {
                for (r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, r) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return C(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? C(e, t) : void 0
            }
          }(t, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          o = i[0],
          s = i[1];
        return (0, a.useEffect)(function() {
          var e;
          (e = function() {
            var e;
            return function(e, t) {
              var r, n, a, i = {
                  label: 0,
                  sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                  },
                  trys: [],
                  ops: []
                },
                o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
              return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
              }), o;

              function s(s) {
                return function(c) {
                  return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                      if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                      switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                        case 0:
                        case 1:
                          a = s;
                          break;
                        case 4:
                          return i.label++, {
                            value: s[1],
                            done: !1
                          };
                        case 5:
                          i.label++, n = s[1], s = [0];
                          continue;
                        case 7:
                          s = i.ops.pop(), i.trys.pop();
                          continue;
                        default:
                          if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                            i = 0;
                            continue
                          }
                          if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                            i.label = s[1];
                            break
                          }
                          if (6 === s[0] && i.label < a[1]) {
                            i.label = a[1], a = s;
                            break
                          }
                          if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(s);
                            break
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue
                      }
                      s = t.call(e, i)
                    } catch (e) {
                      s = [6, e], n = 0
                    } finally {
                      r = a = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                      value: s[0] ? s[1] : void 0,
                      done: !0
                    }
                  }([s, c])
                }
              }
            }(this, function(t) {
              switch (t.label) {
                case 0:
                  return [4, S(function() {
                    return I(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return [4, S(function() {
                            var e, t, r, n, a;
                            return I(this, function(i) {
                              switch (i.label) {
                                case 0:
                                  return e = M().iso, n = [(o = e, (0, k.A)(o.split("-")[0], ["relativetimeformat", "pluralrules", "listformat"]))], [4, P(e)];
                                case 1:
                                  return t = n.concat([i.sent()]), r = t[1], a = function(e) {
                                    var t = function(e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))), n.forEach(function(t) {
                                          A(e, t, r[t])
                                        })
                                      }
                                      return e
                                    }({}, e);
                                    return t
                                  }(r), [2, {
                                    rsLocale: e,
                                    locale: e,
                                    messages: a
                                  }]
                              }
                              var o
                            })
                          })()];
                        case 1:
                          return [2, e.sent()]
                      }
                    })
                  })()];
                case 1:
                  return e = t.sent(), s(e), [2]
              }
            })
          }, function() {
            var t = this,
              r = arguments;
            return new Promise(function(n, a) {
              var i = e.apply(t, r);

              function o(e) {
                T(i, n, a, o, s, "next", e)
              }

              function s(e) {
                T(i, n, a, o, s, "throw", e)
              }
              o(void 0)
            })
          })()
        }, []), (0, n.jsx)(h.A, {
          locale: (null == o ? void 0 : o.locale) || "en-US",
          messages: N({}, null == o ? void 0 : o.messages),
          children: o && (0, n.jsx)(ls, N({}, e))
        }, "intl-provider")
      });
      var ls
    },
    83222: (e, t, r) => {
      var n = {
        "./de": [24482, 9990],
        "./en": [21942, 1822],
        "./es": [20177, 2347],
        "./fr": [28041, 131],
        "./it": [73096, 8272],
        "./ja": [75836, 7436],
        "./ko": [86623, 2221],
        "./pl": [92165, 2171],
        "./pt": [56317, 8755],
        "./ru": [39176, 2864],
        "./zh": [26331, 3197]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 23))
      }
      a.keys = () => Object.keys(n), a.id = 83222, e.exports = a
    },
    92637: (e, t, r) => {
      var n = {
        "./de-DE.json": [41160, 1160],
        "./en-US.json": [21799, 1799],
        "./es-ES.json": [68970, 6589],
        "./es-MX.json": [65739, 5739],
        "./fr-FR.json": [78166, 8166],
        "./it-IT.json": [18432, 8432],
        "./ja-JP.json": [16855, 6855],
        "./ko-KR.json": [57553, 7553],
        "./pl-PL.json": [50602, 602],
        "./pt-BR.json": [3682, 3682],
        "./ru-RU.json": [66564, 6564],
        "./zh-CN.json": [75593, 5593],
        "./zh-TW.json": [91637, 1637]
      };

      function a(e) {
        if (!r.o(n, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(() => r.t(a, 19))
      }
      a.keys = () => Object.keys(n), a.id = 92637, e.exports = a
    }
  }
]);