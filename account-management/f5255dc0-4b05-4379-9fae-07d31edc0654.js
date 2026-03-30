try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f5255dc0-4b05-4379-9fae-07d31edc0654", e._sentryDebugIdIdentifier = "sentry-dbid-f5255dc0-4b05-4379-9fae-07d31edc0654")
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
  [5994], {
    16024: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 23))
      }
      a.keys = () => Object.keys(r), a.id = 16024, e.exports = a
    },
    20704: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 23))
      }
      a.keys = () => Object.keys(r), a.id = 20704, e.exports = a
    },
    33044: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 23))
      }
      a.keys = () => Object.keys(r), a.id = 33044, e.exports = a
    },
    33366: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 23))
      }
      a.keys = () => Object.keys(r), a.id = 33366, e.exports = a
    },
    34940: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 23))
      }
      a.keys = () => Object.keys(r), a.id = 34940, e.exports = a
    },
    48482: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        default: () => Yo
      });
      var r = n(74848),
        a = n(44914),
        i = n(76716),
        o = n(56858),
        s = n(2821),
        c = n.n(s),
        l = n(17805);

      function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var u, f, _ = function(e) {
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
          WWW_BASE_URL: "https://www.rockstargames.com"
        };
      const m = (u = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            d(e, t, n[t])
          })
        }
        return e
      }({}, p), f = null != (f = {
        getAovUrl: function(e) {
          var t = e.lang,
            n = new URL("".concat(p.SCAUTH_BASE_URL, "/aov?cid=").concat(p.CLIENT_ID));
          return n.searchParams.append("lang", t), n.searchParams.append("redirectUrl", "".concat(p.WWW_BASE_URL, "/account?lang=").concat(t)), n.toString()
        },
        getAuthorizeUrl: function(e) {
          var t = new URL("".concat(p.SCAUTH_BASE_URL, "/connect/authorize/").concat(p.CLIENT_ID));
          return t.searchParams.set("returnUrl", _(e)), t.toString()
        },
        getLinkUrl: function(e) {
          var t = e.accessToken,
            n = e.lang,
            r = e.onlineService,
            a = new URL("".concat(p.SCAUTH_BASE_URL, "/tpa/").concat(r, "/link"));
          return a.searchParams.set("cid", p.CLIENT_ID), a.searchParams.set("accessToken", t), a.searchParams.set("returnUrl", _(n)), a.searchParams.set("lang", n), a.toString()
        },
        getDeleteAccountLogoutUrl: function(e) {
          var t = e.lang,
            n = new URL("".concat(p.WWW_BASE_URL, "/auth/sc-auth-logout"));
          return n.searchParams.set("lang", t), n.searchParams.set("returnUrl", "/account/delete/complete?lang=".concat(t)), n.toString()
        },
        getPingBearerUrl: function() {
          return "".concat(p.WWW_BASE_URL, "/auth/ping-bearer.json")
        },
        getUnlinkUrl: function(e) {
          var t = e.accessToken,
            n = e.lang,
            r = e.onlineService,
            a = new URL("".concat(p.SCAUTH_BASE_URL, "/tpa/").concat(r, "/unlink"));
          return a.searchParams.set("cid", p.CLIENT_ID), a.searchParams.set("accessToken", t), a.searchParams.set("returnUrl", _(n)), a.searchParams.set("lang", n), a.toString()
        }
      }) ? f : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : function(e) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t.push.apply(t, n)
        }
        return t
      }(Object(f)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(f, e))
      }), u);
      var h = n(76455);

      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
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
      }, {
        id: "stage-cert",
        sites: {
          www: "stage-cert",
          socialClub: "stage-cert.sc",
          store: "store",
          support: "stagecert.support"
        },
        cookieIdentifier: "stage-cert"
      }, {
        id: "cert",
        sites: {
          www: "cert",
          socialClub: "cert.sc",
          store: "store",
          support: "cert.support"
        },
        cookieIdentifier: "cert"
      }, {
        id: "preprod",
        sites: {
          www: "preprod",
          socialClub: "preprod.sc",
          store: "store",
          support: "preprod.support"
        },
        cookieIdentifier: "preprod"
      }, {
        id: "stage-prod",
        sites: {
          www: "stage-prod",
          socialClub: "stage-prod.sc",
          store: "store",
          support: "stageprod.support"
        },
        cookieIdentifier: "stageprod"
      }, {
        id: "stage-dev",
        sites: {
          www: "stage-dev",
          socialClub: "stage-dev.sc",
          store: "store",
          support: "stagedev.support"
        },
        cookieIdentifier: "stagedev"
      }, {
        id: "devlive",
        sites: {
          www: "devlive",
          socialClub: "devlive.sc",
          store: "store",
          support: "devlive.support"
        },
        cookieIdentifier: "devlive"
      }, {
        id: "dev",
        sites: {
          www: "dev",
          socialClub: "dev.sc",
          store: "store",
          support: "dev.support"
        },
        cookieIdentifier: "dev"
      }, {
        id: "local",
        sites: {
          www: "local",
          socialClub: "local.socialclub",
          store: "store",
          support: "local.support"
        },
        cookieIdentifier: "local"
      }];
      const v = function() {
        var e = void 0,
          t = window.location,
          n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")),
          r = y.findIndex(function(t) {
            return Object.entries(t.sites).findIndex(function(t) {
              var r, a, i = (a = 2, function(e) {
                  if (Array.isArray(e)) return e
                }(r = t) || function(e, t) {
                  var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                  if (null != n) {
                    var r, a, i = [],
                      o = !0,
                      s = !1;
                    try {
                      for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                    } catch (e) {
                      s = !0, a = e
                    } finally {
                      try {
                        o || null == n.return || n.return()
                      } finally {
                        if (s) throw a
                      }
                    }
                    return i
                  }
                }(r, a) || function(e, t) {
                  if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                  }
                }(r, a) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                o = i[0],
                s = i[1];
              return s === n && (e = {
                site: o,
                subDomain: s
              }, !0)
            }) >= 0
          }),
          a = y[r >= 0 ? r : 0];
        return e || (e = {
            site: "www",
            subDomain: "local"
          }),
          function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t.push.apply(t, n)
              }
              return t
            }(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                b(e, t, n[t])
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
          var e, t, n, r, a = window.location,
            i = v(),
            o = function(e) {
              var t = x.map(function(e) {
                  return e.subdomaincom
                }),
                n = e.pathname.substring(1).split("/");
              return -1 !== t.indexOf(n[0]) ? n[0] : null
            }(a),
            s = (e = "rockstarweb_lang.".concat(i.cookieIdentifier), t = document.cookie.split("; "), n = "".concat(e, "="), null == (r = t.find(function(e) {
              return e.startsWith(n)
            })) ? void 0 : r.substring(n.length, r.length));
          return x.find(function(e) {
            return e.subdomaincom === o
          }) || x.find(function(e) {
            return e.iso === s
          }) || j
        };
      var k = n(13871);

      function O(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function S(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              O(i, r, a, o, s, "next", e)
            }

            function s(e) {
              O(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function I(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
                return [4, n(92637)("./".concat(e, ".json"))];
              case 1:
                return [2, t.sent()]
            }
          })
        })()
      };

      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function D(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            T(e, t, n[t])
          })
        }
        return e
      }
      var L = n(6442),
        E = n(23342),
        R = n(92396),
        G = n(66708),
        U = "_125nfjqb",
        V = (0, G.c)({
          defaultClassName: "_125nfjqg foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdq",
          variantClassNames: {
            overflowEllipsis: {
              true: "_125nfjqh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        q = (0, G.c)({
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
        F = (0, G.c)({
          defaultClassName: "_125nfjqi foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
          variantClassNames: {
            overflowEllipsis: {
              true: "_125nfjqj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        z = n(34164);

      function B(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function H() {
        return H = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, H.apply(this, arguments)
      }

      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            B(e, t, n[t])
          })
        }
        return e
      }

      function X(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Z(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var W = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq0", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        K = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq4", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        $ = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq5", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        J = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq2 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8", n)
            }, o);
          return (0, r.jsx)("h5", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        Q = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq3", n)
            }, o);
          return (0, r.jsx)("p", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ee = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjq6", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        te = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.isDisabled,
            o = e.isInteractable,
            s = e.label,
            c = e.shouldStackMobile,
            l = e.testId,
            d = Z(e, ["className", "children", "isDisabled", "isInteractable", "label", "shouldStackMobile", "testId"]),
            u = (0, R.v6)(Y(X(Y({}, s && {
              "aria-label": s
            }), {
              className: (0, z.A)(q({
                disabled: i,
                interactable: o,
                stackMobile: c
              }), n),
              "data-testid": l
            }), o && {
              tabIndex: -1
            }), d);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, u), {
            children: a
          }))
        }),
        ne = (0, a.forwardRef)(function(e, t) {
          var n = H({}, function(e) {
            if (null == e) throw new TypeError("Cannot destructure " + e);
            return e
          }(e));
          return (0, r.jsx)(E.Divider, Y({
            className: "_125nfjqc",
            ref: t
          }, n))
        }),
        re = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqd", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ae = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqe", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ie = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqf", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        oe = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.shouldEllipsis,
            o = e.testId,
            s = Z(e, ["className", "children", "shouldEllipsis", "testId"]),
            c = (0, R.v6)({
              "data-testid": o,
              className: (0, z.A)(V({
                overflowEllipsis: i
              }), n)
            }, s);
          return (0, r.jsx)("p", X(Y({
            ref: t
          }, c), {
            children: a
          }))
        }),
        se = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.shouldEllipsis,
            o = e.testId,
            s = Z(e, ["className", "children", "shouldEllipsis", "testId"]),
            c = (0, R.v6)({
              "data-testid": o,
              className: (0, z.A)(F({
                overflowEllipsis: i
              }), n)
            }, s);
          return (0, r.jsx)("p", X(Y({
            ref: t
          }, c), {
            children: a
          }))
        }),
        ce = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqk", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        le = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjql foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi", n)
            }, o);
          return (0, r.jsx)(E.Button, X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        de = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Z(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("_125nfjqm", n)
            }, o);
          return (0, r.jsx)("div", X(Y({
            ref: t
          }, s), {
            children: a
          }))
        }),
        ue = (0, a.forwardRef)(function(e, t) {
          var n = e.label,
            a = e.className,
            i = e.testId;
          return (0, r.jsx)("div", {
            "data-testid": i,
            children: (0, r.jsxs)("svg", {
              className: a,
              width: "67",
              height: "62",
              viewBox: "0 0 67 62",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-label": n,
              role: "img",
              children: [(0, r.jsx)("path", {
                d: "M54.695 0.835938H12.1214C5.71373 0.835938 0.5 5.89471 0.5 12.1094V49.9274C0.5 56.229 5.55652 61.1653 12.016 61.1653H54.5877C61.0471 61.1653 66.1064 56.229 66.1064 49.9274V12.1094C66.1064 5.78852 61.0954 0.835938 54.695 0.835938Z",
                fill: "black"
              }), (0, r.jsx)("path", {
                d: "M54.6943 2.12891H12.1206C6.32998 2.12891 1.79132 6.5105 1.79132 12.1076L1.79102 49.926C1.79102 55.5038 6.28369 59.872 12.0153 59.872H54.5869C60.3217 59.872 64.8127 55.5038 64.8127 49.926V12.1076C64.8127 6.5105 60.3677 2.12891 54.6943 2.12891Z",
                fill: "#FCAF17"
              }), (0, r.jsx)("path", {
                d: "M56.8403 36.7387H48.6208L47.3172 28.5441L42.5005 36.6812H41.5996C41.0533 35.7394 40.8365 34.3602 40.8365 33.5163C40.8365 32.1166 40.9373 30.751 40.9373 28.9748C40.9373 26.6185 40.245 25.354 38.3965 24.9097V24.8397C42.3275 24.2933 44.1096 21.6926 44.1096 18.0312C44.1096 12.8295 40.649 11.7012 36.1143 11.7012H23.9122L18.7559 36.1203H25.2399L27.1165 27.2352H31.4269C33.7257 27.2352 34.6663 28.3608 34.6663 30.5134C34.6663 32.151 34.4957 33.4478 34.4957 34.7096C34.4957 35.1758 34.6013 36.2603 34.9166 36.6812C34.9128 36.6812 39.6034 41.6272 39.6034 41.6272L35.5707 50.2981L44.1956 45.1738L50.6224 50.1113L49.4228 41.9304L56.8403 36.7387V36.7387ZM33.3644 22.6635H28.2105L29.445 16.7769H34.2403C35.9477 16.7769 37.7232 17.2209 37.7232 19.3102C37.7232 21.9436 35.7012 22.6635 33.3644 22.6635V22.6635Z",
                fill: "black"
              }), (0, r.jsx)("path", {
                d: "M53.0576 37.931H47.6029L46.6608 31.998L43.1833 37.8731H37.6855L41.0293 41.3945L38.2794 47.2992L44.2867 43.7327L49.0186 47.3713L48.1397 41.372L53.0576 37.931Z",
                fill: "white"
              }), (0, r.jsx)("path", {
                d: "M64.6961 58.7637C65.0955 58.7637 65.2955 58.9313 65.2955 59.2666C65.2955 59.5455 65.1411 59.705 64.8328 59.7452L65.3358 60.5216H65.042L64.5632 59.7654H64.2736V60.5216H64V58.7637H64.6961V58.7637ZM64.5874 59.5441C64.7537 59.5441 64.8677 59.522 64.9294 59.4777C64.991 59.4335 65.0218 59.359 65.0218 59.2545C65.0218 59.0748 64.8986 58.985 64.6518 58.985H64.2736V59.544H64.5873L64.5874 59.5441Z",
                fill: "black"
              }), (0, r.jsx)("path", {
                d: "M64.587 61.1604C63.7496 61.1604 63.0684 60.4791 63.0684 59.6417C63.0684 58.8043 63.7496 58.123 64.587 58.123C65.4245 58.123 66.1057 58.8043 66.1057 59.6417C66.1057 60.4791 65.4245 61.1604 64.587 61.1604ZM64.587 58.3605C63.8806 58.3605 63.3057 58.9353 63.3057 59.6417C63.3057 60.3482 63.8806 60.9229 64.587 60.9229C65.2934 60.9229 65.8684 60.3482 65.8684 59.6417C65.8684 58.9353 65.2934 58.3605 64.587 58.3605Z",
                fill: "black"
              }), (0, r.jsx)("path", {
                d: "M64.6961 58.7637C65.0955 58.7637 65.2955 58.9313 65.2955 59.2666C65.2955 59.5455 65.1411 59.705 64.8328 59.7452L65.3358 60.5216H65.042L64.5632 59.7654H64.2736V60.5216H64V58.7637H64.6961V58.7637ZM64.5874 59.5441C64.7537 59.5441 64.8677 59.522 64.9294 59.4777C64.991 59.4335 65.0218 59.359 65.0218 59.2545C65.0218 59.0748 64.8986 58.985 64.6518 58.985H64.2736V59.544H64.5873L64.5874 59.5441Z",
                fill: "black"
              }), (0, r.jsx)("path", {
                d: "M64.587 61.1604C63.7496 61.1604 63.0684 60.4791 63.0684 59.6417C63.0684 58.8043 63.7496 58.123 64.587 58.123C65.4245 58.123 66.1057 58.8043 66.1057 59.6417C66.1057 60.4791 65.4245 61.1604 64.587 61.1604ZM64.587 58.3605C63.8806 58.3605 63.3057 58.9353 63.3057 59.6417C63.3057 60.3482 63.8806 60.9229 64.587 60.9229C65.2934 60.9229 65.8684 60.3482 65.8684 59.6417C65.8684 58.9353 65.2934 58.3605 64.587 58.3605Z",
                fill: "black"
              })]
            })
          })
        });
      const fe = ue;
      var _e = n(72267);
      const pe = (0, _e.YK)({
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
          return (0, r.jsx)("div", {
            className: "b32tmb0",
            children: (0, r.jsxs)("div", {
              className: "b32tmb1",
              children: [(0, r.jsx)(fe, {
                className: "b32tmb3",
                label: "Rockstar Games",
                testId: "rockstarLogo"
              }), (0, r.jsx)($, {
                children: (0, r.jsx)(J, {
                  testId: "thanksHeader",
                  children: e.formatMessage(pe.profile_delete_thanks_title)
                })
              }), (0, r.jsxs)("div", {
                className: "b32tmb2",
                children: [(0, r.jsx)(E.Body, {
                  size: "LG",
                  appearance: "bold",
                  children: e.formatMessage(pe.profile_delete_thanks_alert_title)
                }), (0, r.jsx)(E.Body, {
                  size: "SM",
                  children: e.formatMessage(pe.profile_delete_thanks_alert_description)
                })]
              })]
            })
          })
        },
        he = n(34843),
        ge = (0, a.createContext)(null),
        be = function() {
          var e = (0, a.useContext)(ge);
          if (!e) throw new Error("Not used in AuthContext");
          return e
        };

      function ye(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function ve(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              ye(i, r, a, o, s, "next", e)
            }

            function s(e) {
              ye(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function we(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
                return we(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return t = 1e3 * (e.tokenExpiresTime || 0), !e.accessToken || e.accessToken && t <= Date.now() ? [4, Me(e)] : [3, 2];
                    case 1:
                      n.sent(), n.label = 2;
                    case 2:
                      return [2, e.accessToken]
                  }
                })
              })()
            }
          }
        },
        Oe = (0, _e.YK)({
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
          }
        }),
        Se = {
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      const Ie = function(e) {
        var t, n, i, o = e.error,
          s = e.id,
          c = (n = (0, a.useState)(!0), i = 2, function(e) {
            if (Array.isArray(e)) return e
          }(n) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(n, i) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ae(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ae(e, t) : void 0
            }
          }(n, i) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          l = c[0],
          d = c[1],
          u = Ee(),
          f = (0, L.A)(),
          _ = f.formatMessage(null !== (t = Se[o.code]) && void 0 !== t ? t : Oe.generic_error);
        return (0, r.jsxs)(E.Toast.Root, {
          appearance: "danger",
          className: "_1tpz0j30",
          open: l,
          onOpenChange: function(e) {
            d(e), e || u.removeToast(s)
          },
          type: "foreground",
          duration: 1 / 0,
          children: [(0, r.jsx)(E.Toast.Icon, {
            className: "_1tpz0j33"
          }), (0, r.jsxs)(E.Toast.Description, {
            className: "_1tpz0j31",
            children: [(0, r.jsx)("div", {
              "data-testid": "errorMessage",
              children: _
            }), (0, r.jsxs)("div", {
              className: "_1tpz0j32",
              children: [(0, r.jsx)("div", {
                "data-testid": "errorLogId",
                children: o.logId
              }), (0, r.jsxs)("div", {
                "data-testid": "errorCode",
                children: ["#", o.code]
              })]
            })]
          }), (0, r.jsx)(E.Toast.CloseButton, {
            label: f.formatMessage(Oe.toast_close_label),
            testId: "errorClose"
          })]
        })
      };
      var Pe = (0, G.c)({
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      const De = function(e) {
        var t, n, i = e.appearance,
          o = e.message,
          s = e.title,
          c = e.id,
          l = (0, L.A)(),
          d = (t = (0, a.useState)(!0), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ce(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ce(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          f = d[1],
          _ = Ee();
        return (0, r.jsxs)(E.Toast.Root, {
          appearance: i,
          className: "jb6xbj2",
          open: u,
          onOpenChange: function(e) {
            f(e), e || _.removeToast(c)
          },
          testId: "globalToast",
          children: [(0, r.jsx)(E.Toast.Icon, {}), (0, r.jsxs)(E.Toast.Description, {
            className: s ? "jb6xbj0" : "",
            testId: "toastMessage",
            children: [s && (0, r.jsx)(E.Heading, {
              className: "jb6xbj1",
              level: 6,
              testId: "toastTitle",
              children: s
            }), o]
          }), (0, r.jsx)(E.Toast.CloseButton, {
            label: l.formatMessage(Oe.toast_close_label),
            testId: "toastClose"
          })]
        })
      };

      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Ne(e, t) {
        if (e) {
          if ("string" == typeof e) return Te(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Te(e, t) : void 0
        }
      }
      var Le = (0, a.createContext)(null),
        Ee = function() {
          var e = (0, a.useContext)(Le);
          if (!e) throw new Error("Not used in GlobalToastContext");
          return e
        },
        Re = function() {
          return Ee().toasts.map(function(e) {
            return (0, r.jsx)(a.Fragment, {
              children: e
            }, e.props.id)
          })
        },
        Ge = function() {
          var e = Ee();
          return (0, r.jsx)(E.Toast.Viewport, {
            className: Pe({
              hidden: e.toasts.length <= 0
            }),
            position: "bottomRight",
            testId: "globalToastViewport"
          })
        },
        Ue = function(e) {
          var t, n, i, o, s, c = e.children,
            l = (0, L.A)(),
            d = (o = (0, a.useState)([]), s = 2, t = function(e) {
              if (Array.isArray(e)) return e
            }(o) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(o, s) || Ne(o, s) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }(), n = t[0], {
              displayNewError: function(e) {
                i(function(t) {
                  var n = t.filter(function(e) {
                      return e.type !== Ie
                    }),
                    a = t.filter(function(e) {
                      return e.type === Ie
                    });
                  return a.length >= 3 && a.shift(), a.push((0, r.jsx)(Ie, {
                    error: e,
                    id: crypto.randomUUID()
                  })), a.concat(n)
                })
              },
              displayNewToast: function(e) {
                var t = e.appearance,
                  n = e.title,
                  a = e.message;
                i(function(e) {
                  var i = function(e) {
                    return function(e) {
                      if (Array.isArray(e)) return Te(e)
                    }(e) || function(e) {
                      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || Ne(e) || function() {
                      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                  }(e);
                  return i.push((0, r.jsx)(De, {
                    appearance: t,
                    message: a,
                    title: n,
                    id: crypto.randomUUID()
                  })), i
                })
              },
              removeToast: function(e) {
                i(n.filter(function(t) {
                  return t.props.id !== e
                }))
              },
              setToasts: i = t[1],
              toasts: n
            });
          return (0, r.jsx)(Le.Provider, {
            value: d,
            children: (0, r.jsxs)(E.Toast.Provider, {
              duration: 1e4,
              label: l.formatMessage(Oe.toast_provider_label),
              children: [c, (0, r.jsx)(Re, {}), (0, r.jsx)(Ge, {})]
            })
          })
        },
        Ve = n(52035);

      function qe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var Fe, ze, Be = function(e) {
          return e.ProfileOverview = "account/settings", e.UpdateLanguage = "account/language/update", e.PasswordRequirements = "account/password/requirements", e.GetCountries = "profile/getCountries", e.RequestUpdateEmail = "account/email/request", e.UpdateEmail = "account/email/update", e.UpdatePassword = "account/password", e.UpdateNickname = "account/nickname", e.UpdateCountry = "account/country", e.VerifyEmail = "account/email/verify", e.GetAvatars = "account/avatars", e.UpdateAvatars = "account/avatars/update", e.GetMfaDevices = "account/mfaDevices", e.GetMfaRememberedMachines = "account/mfaRememberedMachines", e.ForgetMfaRememberedMachine = "account/mfaRememberedMachines/delete", e.RequestRegisterMfa = "account/requestRegisterMfa", e.VerifyMfaRegistration = "account/verifyMfaRegistration", e.RequestDeregisterMfa = "account/requestDeregisterMfa", e.VerifyMfaDeregistration = "account/verifyMfaDeregistration", e.GetPrivacySettings = "settings/privacy", e.GetPlayerAccountVisibility = "settings/playerAccountVisibility", e.UpdateEmailNotificationSettings = "settings/updateEmailNotificationSettings", e.UpdatePrivacySettings = "settings/updatePrivacySettings", e.UpdatePlayerAccountVisibility = "settings/updatePlayerAccountVisibility", e.GetSubscriptionStatus = "marketing/status", e.Subscribe = "marketing/update?subscribe=true", e.Unsubscribe = "marketing/update?subscribe=false", e.GetLinkedAccounts = "account/linkedaccounts", e.DeleteAccount = "account/delete", e.CancelAccountDeletion = "account/delete/cancel", e.DeleteCheck = "account/delete/check", e.GetBlockedUsers = "friends/blocked", e.UnblockUser = "friends/unblockPlayer", e.GetGoogleTagManagerSetupData = "account/googleTagManagerSetupData", e
        }({}),
        He = (qe(Fe = {}, "account/settings", {
          method: "get"
        }), qe(Fe, "account/language/update", {
          method: "post"
        }), qe(Fe, "account/password/requirements", {
          method: "get"
        }), qe(Fe, "profile/getCountries", {
          method: "get"
        }), qe(Fe, "account/avatars", {
          method: "get"
        }), qe(Fe, "account/avatars/update", {
          method: "post"
        }), qe(Fe, "account/mfaDevices", {
          method: "get"
        }), qe(Fe, "account/mfaRememberedMachines", {
          method: "get"
        }), qe(Fe, "account/mfaRememberedMachines/delete", {
          method: "delete"
        }), qe(Fe, "account/requestRegisterMfa", {
          method: "post"
        }), qe(Fe, "account/verifyMfaRegistration", {
          method: "post"
        }), qe(Fe, "account/requestDeregisterMfa", {
          method: "post"
        }), qe(Fe, "account/verifyMfaDeregistration", {
          method: "post"
        }), qe(Fe, "settings/privacy", {
          method: "get"
        }), qe(Fe, "settings/playerAccountVisibility", {
          method: "get"
        }), qe(Fe, "settings/updatePrivacySettings", {
          method: "post"
        }), qe(Fe, "settings/updatePlayerAccountVisibility", {
          method: "post"
        }), qe(Fe, "settings/updateEmailNotificationSettings", {
          method: "post"
        }), qe(Fe, "marketing/status", {
          method: "get"
        }), qe(Fe, "marketing/update?subscribe=true", {
          method: "post"
        }), qe(Fe, "marketing/update?subscribe=false", {
          method: "post"
        }), qe(Fe, "account/linkedaccounts", {
          method: "get"
        }), qe(Fe, "account/delete", {
          method: "post"
        }), qe(Fe, "account/delete/cancel", {
          method: "get",
          isUnauthenticated: !0
        }), qe(Fe, "account/delete/check", {
          method: "get"
        }), qe(Fe, "friends/blocked", {
          method: "get"
        }), qe(Fe, "friends/unblockPlayer", {
          method: "post"
        }), qe(Fe, "account/googleTagManagerSetupData", {
          method: "get"
        }), qe(Fe, "account/email/request", {
          method: "post"
        }), qe(Fe, "account/email/update", {
          method: "post"
        }), qe(Fe, "account/password", {
          method: "post"
        }), qe(Fe, "account/nickname", {
          method: "post"
        }), qe(Fe, "account/country", {
          method: "post"
        }), qe(Fe, "account/email/verify", {
          method: "post",
          isUnauthenticated: !0
        }), Fe);

      function Ye(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      const Xe = (0, Ve.eU)((Ye(ze = {}, Be.ProfileOverview, (0, Ve.eU)()), Ye(ze, Be.GetCountries, (0, Ve.eU)()), Ye(ze, Be.GetAvatars, (0, Ve.eU)()), Ye(ze, Be.UpdateAvatars, (0, Ve.eU)()), Ye(ze, Be.ForgetMfaRememberedMachine, (0, Ve.eU)()), Ye(ze, Be.GetMfaDevices, (0, Ve.eU)()), Ye(ze, Be.GetMfaRememberedMachines, (0, Ve.eU)()), Ye(ze, Be.RequestRegisterMfa, (0, Ve.eU)()), Ye(ze, Be.VerifyMfaRegistration, (0, Ve.eU)()), Ye(ze, Be.RequestDeregisterMfa, (0, Ve.eU)()), Ye(ze, Be.VerifyMfaDeregistration, (0, Ve.eU)()), Ye(ze, Be.GetPrivacySettings, (0, Ve.eU)()), Ye(ze, Be.GetPlayerAccountVisibility, (0, Ve.eU)()), Ye(ze, Be.UpdatePrivacySettings, (0, Ve.eU)()), Ye(ze, Be.UpdatePlayerAccountVisibility, (0, Ve.eU)()), Ye(ze, Be.UpdateEmailNotificationSettings, (0, Ve.eU)()), Ye(ze, Be.GetSubscriptionStatus, (0, Ve.eU)()), Ye(ze, Be.Subscribe, (0, Ve.eU)()), Ye(ze, Be.Unsubscribe, (0, Ve.eU)()), Ye(ze, Be.GetLinkedAccounts, (0, Ve.eU)()), Ye(ze, Be.DeleteAccount, (0, Ve.eU)()), Ye(ze, Be.CancelAccountDeletion, (0, Ve.eU)()), Ye(ze, Be.DeleteCheck, (0, Ve.eU)()), Ye(ze, Be.GetBlockedUsers, (0, Ve.eU)()), Ye(ze, Be.UnblockUser, (0, Ve.eU)()), Ye(ze, Be.RequestUpdateEmail, (0, Ve.eU)()), Ye(ze, Be.UpdateEmail, (0, Ve.eU)()), Ye(ze, Be.UpdateLanguage, (0, Ve.eU)()), Ye(ze, Be.GetGoogleTagManagerSetupData, (0, Ve.eU)()), Ye(ze, Be.PasswordRequirements, (0, Ve.eU)()), Ye(ze, Be.UpdatePassword, (0, Ve.eU)()), Ye(ze, Be.UpdateNickname, (0, Ve.eU)()), Ye(ze, Be.UpdateCountry, (0, Ve.eU)()), Ye(ze, Be.VerifyEmail, (0, Ve.eU)()), ze)),
        Ze = (0, _e.YK)({
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
      var We = n(8620);
      const Ke = {
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
      var $e = n(49785),
        Je = n(52542),
        Qe = n(92791),
        et = n(47177),
        tt = (0, G.c)({
          defaultClassName: "se5i7a0",
          variantClassNames: {
            disabled: {
              true: "se5i7a1"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const nt = (0, _e.YK)({
        form_confirmation_error_icon_label: {
          defaultMessage: "Error Icon",
          description: "Label to describe the icon image for form error",
          id: "form_confirmation_error_icon_label"
        }
      });

      function rt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            rt(e, t, n[t])
          })
        }
        return e
      }

      function it(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function ot(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var st = (0, a.createContext)(null);

      function ct() {
        var e = (0, a.useContext)(st);
        if (!e) throw Error("useConfirmationContext can only be used in a Form ConfirmationRoot");
        return e
      }
      var lt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.name,
            o = e.asChild,
            s = e.children,
            c = ot(e, ["className", "testId", "name", "asChild", "children"]),
            l = o ? Qe.DX : "div",
            d = Jt().isDisabled,
            u = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("e3xv9j0", n)
            }, c);
          return (0, r.jsx)(st.Provider, {
            value: {
              name: i,
              isDisabled: d
            },
            children: (0, r.jsx)(l, it(at({
              ref: t
            }, u), {
              children: s
            }))
          })
        }),
        dt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = ot(e, ["className", "testId", "asChild", "children"]),
            c = ct().name,
            l = (0, $e.xW)().formState.errors,
            d = i ? Qe.DX : "div",
            u = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("b5ba6t0", {
                invalid: Boolean(l[c])
              }, n)
            }, s);
          return (0, r.jsx)(d, it(at({
            ref: t
          }, u), {
            children: o
          }))
        }),
        ut = (0, a.forwardRef)(function(e, t) {
          var n = e.testId,
            a = ot(e, ["testId"]),
            i = (0, $e.xW)().control,
            o = ct().name,
            s = ct().isDisabled;
          return (0, r.jsx)($e.xI, {
            control: i,
            name: o,
            render: function(e) {
              var i = e.field,
                c = i.onChange,
                l = i.value;
              return (0, r.jsxs)(E.Checkbox.Root, {
                isDisabled: s,
                ref: t,
                size: "LG",
                children: [(0, r.jsx)(E.Checkbox.Input, {
                  name: o,
                  className: "e3xv9j4",
                  isChecked: l,
                  onCheckedChange: c,
                  testId: n
                }), (0, r.jsx)(E.Checkbox.Label, {
                  className: tt({
                    disabled: s
                  }),
                  hideVisually: a.hideLabel,
                  children: a.label
                })]
              })
            }
          })
        }),
        ft = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            i = e.testId,
            o = ot(e, ["className", "testId"]),
            s = (0, $e.xW)().formState.errors,
            c = ct().name,
            l = (0, L.A)(),
            d = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("e3xv9j3", n)
            }, o),
            u = (0, a.useMemo)(function() {
              var e;
              return "string" == typeof(null === (e = s[c]) || void 0 === e ? void 0 : e.message) ? s[c].message : ""
            }, [s[c]]);
          return u && (0, r.jsxs)(E.Body, it(at({
            size: "SM",
            appearance: "bold",
            ref: t
          }, d), {
            children: [(0, r.jsx)(et.X, {
              size: "MD",
              label: l.formatMessage(nt.form_confirmation_error_icon_label),
              className: "e3xv9j2"
            }), u]
          }))
        });
      const _t = (0, _e.YK)({
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

      function pt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            pt(e, t, n[t])
          })
        }
        return e
      }

      function ht(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function gt(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var bt = (0, a.createContext)(null),
        yt = (0, a.forwardRef)(function(e, t) {
          var n, a, i = e.children,
            o = e.overrideErrorMessage,
            s = e.valibotErrorTypesToOverride,
            c = e.name,
            l = e.isDisabled,
            d = void 0 !== l && l,
            u = e.testId,
            f = gt(e, ["children", "overrideErrorMessage", "valibotErrorTypesToOverride", "name", "isDisabled", "testId"]),
            _ = (0, $e.xW)().formState.errors,
            p = Jt().isDisabled,
            m = (0, R.v6)({
              "data-testid": u
            }, f),
            h = p || d,
            g = Boolean(_[c]),
            b = (null == s ? void 0 : s.includes(null === (n = _[c]) || void 0 === n ? void 0 : n.type)) && o;
          return (0, r.jsx)(bt.Provider, {
            value: {
              name: c,
              isDisabled: h
            },
            children: (0, r.jsx)(E.TextField.Root, ht(mt({
              isDisabled: h,
              ref: t
            }, m), {
              status: g ? "invalid" : void 0,
              children: (0, r.jsxs)(r.Fragment, {
                children: [i, g && (0, r.jsxs)(E.TextField.StatusRoot, {
                  testId: "".concat(c, "-error"),
                  children: [(0, r.jsx)(E.TextField.StatusIcon, {}), (0, r.jsx)(E.TextField.StatusText, {
                    children: b ? o : null === (a = _[c]) || void 0 === a ? void 0 : a.message
                  })]
                })]
              })
            }))
          })
        }),
        vt = function(e) {
          var t = e.testId,
            n = e.type,
            i = e.linkedValidationFields,
            o = gt(e, ["testId", "type", "linkedValidationFields"]),
            s = (0, L.A)(),
            c = (0, $e.xW)(),
            l = c.register,
            d = c.watch,
            u = c.trigger,
            f = c.formState.submitCount,
            _ = Jt().validationMode,
            p = function() {
              var e = (0, a.useContext)(bt);
              if (!e) throw Error("useFieldRootContext can only be used in a Form FieldRoot");
              return e
            }().name,
            m = l(p),
            h = m.ref,
            g = gt(m, ["ref"]),
            b = (0, R.v6)(ht(mt({}, g), {
              "data-testid": t,
              type: n
            }), o),
            y = d(p);
          return (0, a.useEffect)(function() {
            var e;
            null !== (e = null == i ? void 0 : i.length) && void 0 !== e && e && y && "onSubmit" === _ && f > 0 && u(i)
          }, [y]), (0, r.jsxs)(E.TextField.Control, {
            children: [(0, r.jsx)(E.TextField.Input, mt({
              ref: h
            }, b)), "password" === n && (0, r.jsx)(E.TextField.PasswordButton, {
              hidePasswordLabel: s.formatMessage(_t.hide_password_label),
              showPasswordLabel: s.formatMessage(_t.show_password_label),
              type: "button"
            })]
          })
        },
        wt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.children,
            o = gt(e, ["className", "testId", "children"]),
            s = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_1mutbcz0 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdm", n)
            }, o);
          return (0, r.jsx)(E.TextField.Label, ht(mt({
            ref: t
          }, s), {
            children: i
          }))
        }),
        jt = n(46855),
        xt = n(98876),
        Mt = (0, G.c)({
          defaultClassName: "_3bsh524 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
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
      const kt = (0, _e.YK)({
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
      var Ot = n(59593),
        St = n(98249),
        At = n(58671),
        It = n(88082);

      function Pt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var Ct = {
        translations: At.A,
        graphs: St.K,
        dictionary: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              Pt(e, t, n[t])
            })
          }
          return e
        }({}, St.z, It.z)
      };
      Ot.u2.setOptions(Ct);
      var Dt = function(e) {
        var t = [];
        return e.message && t.push(e.message), e.pipe && e.pipe.length > 0 && (t = t.concat(e.pipe.map(function(e) {
          return Dt(e)
        }).flat())), t
      };

      function Tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Nt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Nt(e, t, n[t])
          })
        }
        return e
      }

      function Et(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Rt(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var Gt = (0, a.createContext)(null);

      function Ut() {
        var e = (0, a.useContext)(Gt);
        if (!e) throw Error("usePasswordSummaryContext can only be used in a Form PasswordSummaryRoot");
        return e
      }
      var Vt = (0, a.forwardRef)(function(e, t) {
          var n, i, o, s, c, l = e.className,
            d = e.testId,
            u = e.passwordFieldName,
            f = e.userInputs,
            _ = e.asChild,
            p = e.children,
            m = Rt(e, ["className", "testId", "passwordFieldName", "userInputs", "asChild", "children"]),
            h = (0, $e.xW)(),
            g = h.trigger,
            b = h.formState,
            y = b.errors,
            v = b.dirtyFields,
            w = b.isSubmitted,
            j = Jt(),
            x = j.schema,
            M = j.isDisabled,
            k = (0, $e.xW)().control,
            O = (0, $e.FH)({
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
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(s, c) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Tt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tt(e, t) : void 0
              }
            }(s, c) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = A[0],
            P = A[1],
            C = new Set(Object.values(null !== (o = null === (n = y[u]) || void 0 === n ? void 0 : n.types) && void 0 !== o ? o : {}).flat()),
            D = (0, a.useCallback)((0, jt.A)(function(e, t) {
              var n, r = !e || 0 === e.length,
                a = t.size > 0;
              n = r ? 0 : a ? 1 : function(e, t) {
                return (0, Ot.K1)(e, t).score
              }(e, f);
              var i = S.formatMessage(kt["password_summary_grade_".concat(n)]);
              P({
                grade: i,
                value: n
              })
            }), []);
          (0, a.useEffect)(function() {
            O && g(u), D(O, C)
          }, [O, null === (i = y[u]) || void 0 === i ? void 0 : i.type]);
          var T = (0, a.useMemo)(function() {
              if (!x.entries[u]) throw Error("passwordFieldName must be a valid form field in the current Form context");
              return new Set(Dt(x.entries[u]))
            }, [x.entries[u]]),
            N = _ ? Qe.DX : "div",
            E = (0, R.v6)({
              "data-testid": d,
              className: (0, z.A)("_3bsh520 b5ba6t0", l)
            }, m),
            G = {
              passwordFieldName: u,
              passwordState: C,
              passwordRequirements: T,
              fieldIsDirty: v[u],
              isSubmitted: w,
              passwordStrengthScore: I,
              isDisabled: M
            };
          return (0, r.jsx)(Gt.Provider, {
            value: G,
            children: (0, r.jsx)(N, Et(Lt({
              ref: t
            }, E), {
              children: p
            }))
          })
        }),
        qt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Rt(e, ["className", "testId", "asChild", "children"]),
            c = i ? Qe.DX : "div",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh521", n)
            }, s);
          return (0, r.jsx)(c, Et(Lt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        Ft = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Rt(e, ["className", "testId", "asChild", "children"]),
            c = i ? Qe.DX : "div",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh522", n)
            }, s);
          return (0, r.jsx)(c, Et(Lt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        zt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Rt(e, ["className", "testId", "asChild", "children"]),
            c = i ? Qe.DX : "p",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh523 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdq", n)
            }, s);
          return (0, r.jsx)(c, Et(Lt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        Bt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = Rt(e, ["className", "testId"]),
            o = Ut().passwordStrengthScore,
            s = o.grade,
            c = o.value,
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)(Mt({
                value: c
              }), n)
            }, i);
          return (0, r.jsx)("p", Et(Lt({
            ref: t
          }, l), {
            children: s
          }))
        }),
        Ht = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = Rt(e, ["className", "testId"]),
            o = Ut().passwordStrengthScore.value,
            s = (0, R.v6)({
              "data-testid": a,
              value: o,
              max: 4,
              className: (0, z.A)("_3bsh52a", n)
            }, i);
          return (0, r.jsx)("progress", Lt({
            ref: t
          }, s))
        }),
        Yt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = Rt(e, ["className", "testId"]),
            o = Ut(),
            s = o.passwordState,
            c = o.passwordRequirements,
            l = o.fieldIsDirty,
            d = (0, L.A)(),
            u = (0, R.v6)({
              "data-testid": a,
              className: (0, z.A)("_3bsh52b", n)
            }, i),
            f = function(e) {
              return l ? s.has(e) ? (0, r.jsx)(et.Info, {
                color: xt.LU.alias.color.icon.danger,
                label: d.formatMessage(kt.password_requirement_fail),
                size: "MD"
              }) : (0, r.jsx)(et.CircleCheck, {
                color: xt.LU.alias.color.icon.success,
                label: d.formatMessage(kt.password_requirement_success),
                size: "MD"
              }) : (0, r.jsx)(et.Circle, {
                color: xt.LU.alias.color.icon.disabled,
                label: d.formatMessage(kt.password_requirement_untested),
                size: "MD",
                testId: e
              })
            };
          return (0, r.jsx)("div", Et(Lt({
            ref: t
          }, u), {
            children: Array.from(c).map(function(e) {
              return (0, r.jsxs)("div", {
                className: "_3bsh52c",
                children: [f(e), (0, r.jsx)("p", {
                  className: "_3bsh52d foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
                  children: e
                })]
              }, e)
            })
          }))
        });

      function Xt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Xt(e, t, n[t])
          })
        }
        return e
      }

      function Wt(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Kt(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var $t = (0, a.createContext)(null);

      function Jt() {
        var e = (0, a.useContext)($t);
        if (!e) throw Error("useFormContext can only be used in a Form Root");
        return e
      }
      var Qt = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            i = e.testId,
            o = e.asChild,
            s = e.children,
            c = e.schema,
            l = e.defaultValues,
            d = e.passwordField,
            u = e.validationMode,
            f = void 0 === u ? "onSubmit" : u,
            _ = e.isDisabled,
            p = e.onSubmit,
            m = e.onFormInvalid,
            h = Kt(e, ["className", "testId", "asChild", "children", "schema", "defaultValues", "passwordField", "validationMode", "isDisabled", "onSubmit", "onFormInvalid"]),
            g = (0, $e.mN)({
              resolver: (0, Je.c)(c),
              mode: f,
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
            k = o ? Qe.DX : "form";
          (0, a.useEffect)(function() {
            !_ && !j && w && Object.keys(v).length > 0 && (null == m || m(v))
          }, [x]);
          var O = (0, R.v6)({
            "data-testid": i,
            className: (0, z.$)("b5ba6t1", n),
            noValidate: !0
          }, h);
          return (0, r.jsx)($t.Provider, {
            value: {
              schema: c,
              isDisabled: null != _ && _,
              passwordField: d,
              fieldNames: Object.keys(c.entries),
              validationMode: f
            },
            children: (0, r.jsx)($e.Op, Wt(Zt({}, g), {
              children: (0, r.jsx)(k, Wt(Zt({
                ref: t
              }, O), {
                onSubmit: function(e) {
                  e.preventDefault(), _ || b(function(e) {
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
        en = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Kt(e, ["className", "testId", "asChild", "children"]),
            c = i ? Qe.DX : "div",
            l = (0, R.v6)({
              "data-testid": a,
              className: (0, z.$)("b5ba6t2", n)
            }, s);
          return (0, r.jsx)(c, Wt(Zt({
            ref: t
          }, l), {
            children: o
          }))
        }),
        tn = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.testId,
            i = e.asChild,
            o = e.children,
            s = Kt(e, ["className", "testId", "asChild", "children"]),
            c = Jt().isDisabled,
            l = (0, $e.xW)().formState,
            d = l.isSubmitting,
            u = l.errors,
            f = i ? Qe.DX : E.Button,
            _ = (0, R.v6)({
              isDisabled: c || d || Object.keys(u).length > 0,
              "data-testid": a,
              className: (0, z.$)("b5ba6t3", n)
            }, s);
          return (0, r.jsx)(f, Wt(Zt({
            ref: t
          }, _), {
            type: "submit",
            children: o
          }))
        });

      function nn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function rn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            nn(e, t, n[t])
          })
        }
        return e
      }

      function an(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function on(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var sn = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = e.testId,
            i = on(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_17my3do0"
            }, i);
          return (0, r.jsx)("div", an(rn({
            ref: t
          }, o), {
            children: n
          }))
        }),
        cn = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = e.testId,
            i = e.asChild,
            o = on(e, ["children", "testId", "asChild"]),
            s = i ? Qe.DX : "a",
            c = (0, R.v6)({
              "data-testid": a,
              className: "_17my3do1"
            }, o);
          return (0, r.jsx)(s, an(rn({
            ref: t
          }, c), {
            children: n
          }))
        }),
        ln = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = e.testId,
            i = on(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_17my3do2"
            }, i);
          return (0, r.jsx)("div", an(rn({
            ref: t
          }, o), {
            children: n
          }))
        }),
        dn = n(45357);
      const un = function(e) {
          var t = e.isLoading,
            n = e.children;
          return t ? (0, r.jsx)(W, {
            className: "_125nfjq1 _125nfjq0",
            "data-testid": "loader-wrapper",
            children: (0, r.jsx)(dn.a, {})
          }) : n
        },
        fn = (0, _e.YK)({
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
            defaultMessage: "Navigate to the set up MFA page",
            description: "Aria label text for the MFA navigation button on the landing page for no auth",
            id: "security_no_auth_navigation_icon_aria_label"
          },
          security_header_nav_aria_label: {
            defaultMessage: "Navigate back to the no auth page",
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
        _n = (0, _e.YK)({
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
            defaultMessage: "Navigate to change email",
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
            defaultMessage: "Navigate to change password",
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
            defaultMessage: "Navigate to edit nickname",
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
            defaultMessage: "Navigate to delete account",
            description: "The button text to delete an account.",
            id: "overview_delete_account_button_aria_label"
          },
          overview_profile_back_button_label: {
            defaultMessage: "Back to Profile",
            description: "Link to go back to the profile settings page.",
            id: "overview_profile_back_button_label"
          }
        }),
        pn = (0, _e.YK)({
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

      function mn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function hn(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function gn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var bn = "confirm",
        yn = "email",
        vn = "mfaCode",
        wn = "password",
        jn = (0, Ve.eU)(!1);
      const xn = function() {
        var e, t, n, o = (0, L.A)(),
          s = (0, i.useNavigate)(),
          c = Ee(),
          l = (t = (0, he.fp)(jn), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return mn(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mn(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          d = l[0],
          u = l[1],
          f = rr({
            fetchOnInitial: !1,
            route: Be.RequestUpdateEmail
          }),
          _ = f.fetch,
          p = f.loading,
          m = rr({
            route: Be.GetMfaDevices
          }),
          h = m.data,
          g = m.loading,
          b = rr({
            fetchOnInitial: !1,
            route: Be.PasswordRequirements
          }),
          y = b.data,
          v = b.loading,
          w = rr({
            fetchOnInitial: !1,
            route: Be.ProfileOverview
          }).data,
          j = Number(null == h ? void 0 : h.length) > 0,
          x = (0, a.useMemo)(function() {
            var e;
            return We.pipe(We.object(function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n)
                }
                return t
              }(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  gn(e, t, n[t])
                })
              }
              return e
            }((gn(e = {}, yn, We.pipe(We.string(), We.nonEmpty(o.formatMessage(Ze.email_change_error_email)), We.email(o.formatMessage(Ze.email_change_error_email)), We.toLowerCase(), We.notValue(null == w ? void 0 : w.email.toLowerCase(), o.formatMessage(Ze.email_change_must_not_match_error_email)))), gn(e, wn, We.pipe(We.string(), We.nonEmpty(o.formatMessage(pn.password_change_error_password_required)))), e), j ? gn({}, vn, We.pipe(We.string(), We.minLength(6, o.formatMessage(fn.security_setup_verification_code_field_error_text)))) : null), gn({}, bn, We.pipe(We.boolean(), We.check(function(e) {
              return !0 === e
            }, o.formatMessage(Ze.email_change_confirm_checkbox_error)))))))
          }, [y, j, w]),
          M = g || v;
        return (0, r.jsx)(un, {
          isLoading: M,
          children: (0, r.jsxs)("div", {
            className: "pb0kad0",
            "data-testid": "emailPage",
            children: [(0, r.jsxs)(sn, {
              children: [(0, r.jsx)(cn, {
                asChild: !0,
                children: (0, r.jsx)(E.IconButton, {
                  icon: "ChevronLeft",
                  appearance: "tertiary",
                  size: "LG",
                  label: o.formatMessage(_n.overview_profile_back_button_label),
                  testId: "emailPageBackButton",
                  "data-ga": Ke.action.close_edit_email,
                  onClick: function() {
                    s("/account")
                  }
                })
              }), (0, r.jsx)(ln, {
                children: (0, r.jsx)(E.Heading, {
                  level: 6,
                  children: o.formatMessage(Ze.email_change_page_title)
                })
              })]
            }), d && (0, r.jsxs)(E.Alert.Root, {
              status: "information",
              background: "two-tone",
              testId: "changeEmailSubmitted",
              children: [(0, r.jsxs)(E.Alert.Header, {
                children: [(0, r.jsx)(E.Alert.Icon, {
                  size: "XL"
                }), (0, r.jsx)(E.Alert.Title, {
                  children: o.formatMessage(Ze.email_change_alert_title)
                }), (0, r.jsx)(E.Alert.CloseButton, {
                  label: "close",
                  onPress: function() {
                    return u(!1)
                  },
                  testId: "alertCloseButton"
                })]
              }), (0, r.jsx)(E.Alert.Body, {
                children: (0, r.jsx)(E.Alert.Description, {
                  children: o.formatMessage(Ze.email_change_alert_description)
                })
              })]
            }), (0, r.jsxs)(Qt, {
              schema: x,
              defaultValues: {
                email: "",
                password: "",
                mfaCode: "",
                confirm: !1
              },
              onSubmit: function(e) {
                var t, n = e.formData,
                  r = e.setError;
                return (t = function() {
                  var e, t, a, i;
                  return function(e, t) {
                    var n, r, a, i = {
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
                          if (n) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                            switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                i.label++, r = s[1], s = [0];
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
                            s = [6, e], r = 0
                          } finally {
                            n = a = 0
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
                          email: n[yn],
                          password: n[wn]
                        }, j && (e.mfaCode = n[vn]), [4, _({
                          body: e
                        })];
                      case 1:
                        return t = l.sent(), (a = t.error) ? (u(!1), (i = Zn[a.code]) && r(i.field, {
                          message: o.formatMessage(i.message)
                        })) : (u(!0), c.displayNewToast({
                          appearance: "information",
                          message: o.formatMessage(Ze.email_change_alert_description),
                          title: o.formatMessage(Ze.email_change_alert_title)
                        }), s("/account")), [2]
                    }
                  })
                }, function() {
                  var e = this,
                    n = arguments;
                  return new Promise(function(r, a) {
                    var i = t.apply(e, n);

                    function o(e) {
                      hn(i, r, a, o, s, "next", e)
                    }

                    function s(e) {
                      hn(i, r, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })()
              },
              children: [(0, r.jsxs)(en, {
                children: [(0, r.jsxs)(yt, {
                  name: yn,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: o.formatMessage(Ze.email_change_new_email_label)
                  }), (0, r.jsx)(vt, {
                    type: "email",
                    maxLength: 254,
                    placeholder: o.formatMessage(Ze.email_change_new_email_placeholder),
                    testId: "changeEmailNewEmail"
                  })]
                }), (0, r.jsxs)(yt, {
                  name: wn,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: o.formatMessage(Ze.email_change_password_label)
                  }), (0, r.jsx)(vt, {
                    type: "password",
                    placeholder: o.formatMessage(Ze.email_change_password_placeholder),
                    testId: "changeEmailPassword",
                    maxLength: null !== (e = null == y ? void 0 : y.maximumLoginLength) && void 0 !== e ? e : 128
                  })]
                }), j && (0, r.jsxs)(yt, {
                  name: vn,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: o.formatMessage(fn.security_setup_authenticator_code_field_label)
                  }), (0, r.jsx)(vt, {
                    placeholder: o.formatMessage(fn.security_setup_verification_code_field_placeholder),
                    testId: "changeEmailMfaCode"
                  })]
                })]
              }), (0, r.jsxs)(lt, {
                name: bn,
                children: [(0, r.jsx)(dt, {
                  children: (0, r.jsx)(ut, {
                    label: o.formatMessage(Ze.email_change_terms_body),
                    testId: "changeEmailConfirmation"
                  })
                }), (0, r.jsx)(ft, {
                  testId: "confirm-error"
                })]
              }), (0, r.jsx)(tn, {
                appearance: "primary",
                "data-ga": Ke.action.save_email,
                isDisabled: p,
                isLoading: p,
                size: "LG",
                testId: "changeEmailSubmitButton",
                children: o.formatMessage(Ze.email_change_submit_button)
              })]
            })]
          })
        })
      };

      function Mn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var kn = "password",
        On = "verificationCode",
        Sn = function(e) {
          var t, n = e.isLoading,
            i = e.onFormInvalid,
            o = e.onSubmit,
            s = (0, L.A)(),
            c = rr({
              route: Be.PasswordRequirements,
              fetchOnInitial: !1
            }).data,
            l = (0, a.useMemo)(function() {
              var e;
              return We.pipe(We.object((Mn(e = {}, On, We.pipe(We.string(), We.nonEmpty(s.formatMessage(fn.security_setup_verification_code_field_error_text)), We.minLength(6, s.formatMessage(fn.security_setup_verification_code_field_error_text)))), Mn(e, kn, We.pipe(We.string(), We.nonEmpty(s.formatMessage(pn.password_change_error_password_required)))), e)))
            }, [c]);
          return (0, r.jsxs)(Qt, {
            onFormInvalid: i,
            onSubmit: o,
            schema: l,
            testId: "password-mfa-code-form",
            children: [(0, r.jsxs)(en, {
              children: [(0, r.jsxs)(yt, {
                isRequired: !0,
                name: On,
                children: [(0, r.jsx)(wt, {
                  children: s.formatMessage(fn.security_setup_authenticator_code_field_label)
                }), (0, r.jsx)(vt, {
                  placeholder: s.formatMessage(fn.security_setup_verification_code_field_placeholder),
                  testId: "mfa-code-verification-input"
                })]
              }), (0, r.jsxs)(yt, {
                name: kn,
                isRequired: !0,
                children: [(0, r.jsx)(wt, {
                  children: s.formatMessage(fn.security_setup_password_field_label)
                }), (0, r.jsx)(vt, {
                  placeholder: s.formatMessage(fn.security_setup_password_field_placeholder),
                  testId: "mfa-password-verification-input",
                  type: "password",
                  maxLength: null !== (t = null == c ? void 0 : c.maximumLoginLength) && void 0 !== t ? t : 128
                })]
              })]
            }), (0, r.jsx)(tn, {
              appearance: "primary",
              isLoading: n,
              size: "LG",
              testId: "mfa-verification-submit",
              children: s.formatMessage(fn.security_setup_verify_button_text)
            })]
          })
        };
      const An = (0, _e.YK)({
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
      var In = function(e) {
          var t = e.dateString,
            n = e.locale;
          return (0, new Intl.DateTimeFormat(n, {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format)(Date.parse(t))
        },
        Pn = function(e) {
          var t = e.dateString,
            n = e.locale;
          return (0, new Intl.DateTimeFormat(n, {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format)(Date.parse(t))
        };

      function Cn(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function Dn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var Tn = "nickname",
        Nn = "password",
        Ln = "mfaCode",
        En = "confirm";
      const Rn = function() {
        var e, t = (0, L.A)(),
          n = (0, i.useNavigate)(),
          o = Ee(),
          s = rr({
            route: Be.GetMfaDevices
          }),
          c = s.loading,
          l = s.data,
          d = rr({
            route: Be.UpdateNickname,
            fetchOnInitial: !1
          }),
          u = d.fetch,
          f = d.loading,
          _ = rr({
            route: Be.ProfileOverview,
            fetchOnInitial: !1
          }),
          p = _.fetch,
          m = _.loading,
          h = _.data,
          g = _.loading,
          b = rr({
            route: Be.PasswordRequirements,
            fetchOnInitial: !1
          }),
          y = b.data,
          v = b.loading,
          w = Number(null == l ? void 0 : l.length) > 0,
          j = (0, a.useMemo)(function() {
            var e;
            return We.pipe(We.object(function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n)
                }
                return t
              }(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  Dn(e, t, n[t])
                })
              }
              return e
            }((Dn(e = {}, Tn, We.pipe(We.string(), We.nonEmpty(t.formatMessage(An.nickname_change_error_nickname_required)), We.minLength(6, t.formatMessage(An.nickname_change_error_min_length, {
              number: 6
            })), We.maxLength(16, t.formatMessage(An.nickname_change_error_max_length, {
              number: 16
            })), We.regex(/^([a-zA-Z0-9_-]*)$/, t.formatMessage(An.nickname_change_error_invalid_characters)))), Dn(e, Nn, We.pipe(We.string(), We.nonEmpty(t.formatMessage(pn.password_change_error_password_required)))), e), w ? Dn({}, Ln, We.pipe(We.string(), We.minLength(6, t.formatMessage(fn.security_setup_verification_code_field_error_text)))) : null), Dn({}, En, We.pipe(We.boolean(), We.check(function(e) {
              return !0 === e
            }, t.formatMessage(An.nickname_change_confirm_checkbox_error)))))))
          }, [w, v]),
          x = c || g || v,
          M = Boolean(!(null == h ? void 0 : h.nicknameCanBeUpdated) && (null == h ? void 0 : h.nicknameLastUpdatedDate) && (null == h ? void 0 : h.nicknameUpdateLastCooldownDate));
        return (0, r.jsx)(un, {
          isLoading: x,
          children: h && (0, r.jsxs)("div", {
            className: "_1jp5d9t0",
            "data-testid": "nicknamePage",
            children: [(0, r.jsxs)(sn, {
              children: [(0, r.jsx)(cn, {
                asChild: !0,
                children: (0, r.jsx)(E.IconButton, {
                  icon: "ChevronLeft",
                  appearance: "tertiary",
                  size: "LG",
                  label: t.formatMessage(_n.overview_profile_back_button_label),
                  testId: "nicknamePageBackButton",
                  "data-ga": Ke.action.close_edit_nickname,
                  onClick: function() {
                    n("/account")
                  }
                })
              }), (0, r.jsx)(ln, {
                children: (0, r.jsx)(E.Heading, {
                  level: 6,
                  children: t.formatMessage(An.nickname_change_title)
                })
              })]
            }), M && (0, r.jsxs)(E.Alert.Root, {
              status: "warning",
              background: "two-tone",
              "data-testid": "recentlyUpdatedAlert",
              children: [(0, r.jsxs)(E.Alert.Header, {
                children: [(0, r.jsx)(E.Alert.Icon, {
                  size: "XL"
                }), (0, r.jsx)(E.Alert.Title, {
                  children: t.formatMessage(An.nickname_change_alert_title)
                })]
              }), (0, r.jsx)(E.Alert.Body, {
                children: (0, r.jsx)(E.Alert.Description, {
                  children: t.formatMessage(An.nickname_change_alert_description, {
                    lastChangedDate: In({
                      dateString: h.nicknameLastUpdatedDate,
                      locale: t.locale
                    }),
                    unlockedDate: In({
                      dateString: h.nicknameUpdateLastCooldownDate,
                      locale: t.locale
                    })
                  })
                })
              })]
            }), (0, r.jsxs)(Qt, {
              defaultValues: {
                email: "",
                password: "",
                mfaCode: "",
                confirm: !1
              },
              isDisabled: M,
              onSubmit: function(e) {
                var r, a = e.formData,
                  i = e.setError;
                return (r = function() {
                  var e, r, s, c;
                  return function(e, t) {
                    var n, r, a, i = {
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
                          if (n) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                            switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                i.label++, r = s[1], s = [0];
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
                            s = [6, e], r = 0
                          } finally {
                            n = a = 0
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
                          password: a[Nn],
                          nickname: a[Tn]
                        }, w && (e.mfaCode = a[Ln]), [4, u({
                          body: e
                        })];
                      case 1:
                        return r = l.sent(), (s = r.error) ? ((c = Zn[s.code]) && i(c.field, {
                          message: t.formatMessage(c.message)
                        }), [3, 4]) : [3, 2];
                      case 2:
                        return o.displayNewToast({
                          appearance: "success",
                          message: t.formatMessage(An.nickname_change_success)
                        }), [4, p({})];
                      case 3:
                        l.sent(), n("/account"), l.label = 4;
                      case 4:
                        return [2]
                    }
                  })
                }, function() {
                  var e = this,
                    t = arguments;
                  return new Promise(function(n, a) {
                    var i = r.apply(e, t);

                    function o(e) {
                      Cn(i, n, a, o, s, "next", e)
                    }

                    function s(e) {
                      Cn(i, n, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })()
              },
              schema: j,
              children: [(0, r.jsxs)(en, {
                children: [(0, r.jsxs)(yt, {
                  name: Tn,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: t.formatMessage(An.nickname_change_nickname_label)
                  }), (0, r.jsx)(vt, {
                    placeholder: t.formatMessage(An.nickname_change_nickname_placeholder),
                    testId: "newNicknameInput"
                  })]
                }), (0, r.jsxs)(yt, {
                  name: Nn,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: t.formatMessage(An.nickname_change_current_password_label)
                  }), (0, r.jsx)(vt, {
                    type: "password",
                    placeholder: t.formatMessage(An.nickname_change_current_password_placeholder),
                    testId: "updateNicknamePasswordInput",
                    maxLength: null !== (e = null == y ? void 0 : y.maximumLoginLength) && void 0 !== e ? e : 128
                  })]
                }), w && (0, r.jsxs)(yt, {
                  name: Ln,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: t.formatMessage(fn.security_setup_authenticator_code_field_label)
                  }), (0, r.jsx)(vt, {
                    placeholder: t.formatMessage(fn.security_setup_verification_code_field_placeholder),
                    testId: "updateNicknameMfaCodeInput"
                  })]
                }), (0, r.jsxs)(lt, {
                  name: En,
                  children: [(0, r.jsx)(dt, {
                    children: (0, r.jsx)(ut, {
                      testId: "termsConfirmation",
                      label: t.formatMessage(An.nickname_change_confirm_terms)
                    })
                  }), (0, r.jsx)(ft, {
                    testId: "confirm-error"
                  })]
                })]
              }), (0, r.jsx)(tn, {
                testId: "submitNicknameButton",
                size: "LG",
                appearance: "primary",
                isDisabled: !h.nicknameCanBeUpdated || f || m,
                isLoading: f || m,
                "data-ga": Ke.action.save_nickname,
                children: t.formatMessage(An.nickname_change_save_changes)
              })]
            })]
          })
        })
      };

      function Gn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Un(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function Vn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Vn(e, t, n[t])
          })
        }
        return e
      }

      function Fn(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }
      var zn = "currentPassword",
        Bn = "mfaCode",
        Hn = "newPassword",
        Yn = "confirmPassword";
      const Xn = function() {
          var e, t, n = (0, L.A)(),
            o = (0, i.useNavigate)(),
            s = Ee(),
            c = rr({
              fetchOnInitial: !1,
              route: Be.PasswordRequirements
            }),
            l = c.data,
            d = c.loading,
            u = rr({
              route: Be.GetMfaDevices
            }),
            f = u.data,
            _ = u.loading,
            p = rr({
              fetchOnInitial: !1,
              route: Be.UpdatePassword
            }),
            m = p.fetch,
            h = p.loading,
            g = Number(null == f ? void 0 : f.length) > 0,
            b = (0, a.useMemo)(function() {
              var e, t, r = [];
              return l && (r.push(We.minLength(l.minimumLength, n.formatMessage(pn.password_change_error_min_length, {
                number: l.minimumLength
              }))), r.push(We.maxLength(l.maximumLength, n.formatMessage(pn.password_change_error_max_length, {
                number: l.maximumLength
              }))), l.enforceLower && r.push(We.regex(/[a-z]/, n.formatMessage(pn.password_change_error_lowercase_letters))), l.enforceUpper && r.push(We.regex(/[A-Z]/, n.formatMessage(pn.password_change_error_capital_letters))), l.enforceNumber && r.push(We.regex(/[0-9]/, n.formatMessage(pn.password_change_error_numerical))), l.enforceSymbol && r.push(We.regex(new RegExp("[".concat(l.validSymbols, "]")), n.formatMessage(pn.password_change_error_symbol, {
                symbols: l.validSymbols
              })))), (e = We).pipe.apply(e, [We.string()].concat(function(e) {
                if (Array.isArray(e)) return Gn(e)
              }(t = r) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(t) || function(e, t) {
                if (e) {
                  if ("string" == typeof e) return Gn(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gn(e, t) : void 0
                }
              }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()))
            }, [l]),
            y = d || _;
          return (0, r.jsx)(un, {
            isLoading: y,
            children: (0, r.jsxs)("div", {
              className: "_9ww4010",
              "data-testid": "passwordPage",
              children: [(0, r.jsxs)(sn, {
                children: [(0, r.jsx)(cn, {
                  asChild: !0,
                  children: (0, r.jsx)(E.IconButton, {
                    icon: "ChevronLeft",
                    appearance: "tertiary",
                    size: "LG",
                    label: n.formatMessage(_n.overview_profile_back_button_label),
                    testId: "passwordPageBackButton",
                    "data-ga": Ke.action.close_edit_password,
                    onClick: function() {
                      o("/account")
                    }
                  })
                }), (0, r.jsx)(ln, {
                  children: (0, r.jsx)(E.Heading, {
                    level: 6,
                    children: n.formatMessage(pn.password_change_title)
                  })
                })]
              }), (0, r.jsxs)(Qt, {
                schema: We.pipe(We.object(Fn(qn(Vn({}, zn, We.pipe(We.string(), We.nonEmpty(n.formatMessage(pn.password_change_error_password_required)))), g ? Vn({}, Bn, We.pipe(We.string(), We.minLength(6, n.formatMessage(fn.security_setup_verification_code_field_error_text)))) : null), (t = {}, Vn(t, Hn, b), Vn(t, Yn, We.pipe(We.string(), We.nonEmpty(n.formatMessage(pn.password_change_error_password_required)))), t))), We.forward(We.partialCheck([
                  [Hn],
                  [Yn]
                ], function(e) {
                  return e.newPassword === e.confirmPassword
                }, n.formatMessage(pn.password_change_error_must_match)), [Yn])),
                defaultValues: {
                  currentPassword: "",
                  mfaCode: "",
                  newPassword: "",
                  confirmPassword: ""
                },
                onSubmit: function(e) {
                  var t, r = e.formData,
                    a = e.setError;
                  return (t = function() {
                    var e, t, i, c;
                    return function(e, t) {
                      var n, r, a, i = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                              if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                              switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                  i.label++, r = s[1], s = [0];
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
                              s = [6, e], r = 0
                            } finally {
                              n = a = 0
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
                            password: r[zn],
                            newPassword: r[Hn],
                            confirmNewPassword: r[Yn]
                          }, g && (e.mfaCode = r[Bn]), [4, m({
                            body: e
                          })];
                        case 1:
                          return t = l.sent(), (i = t.error) ? (c = Zn[i.code]) && a(c.field, {
                            message: n.formatMessage(c.message)
                          }) : (o("/account"), s.displayNewToast({
                            appearance: "success",
                            message: n.formatMessage(pn.password_change_success)
                          })), [2]
                      }
                    })
                  }, function() {
                    var e = this,
                      n = arguments;
                    return new Promise(function(r, a) {
                      var i = t.apply(e, n);

                      function o(e) {
                        Un(i, r, a, o, s, "next", e)
                      }

                      function s(e) {
                        Un(i, r, a, o, s, "throw", e)
                      }
                      o(void 0)
                    })
                  })()
                },
                validationMode: "onSubmit",
                children: [(0, r.jsxs)(en, {
                  children: [(0, r.jsxs)(yt, {
                    name: zn,
                    isRequired: !0,
                    children: [(0, r.jsx)(wt, {
                      children: n.formatMessage(pn.password_change_current_password_label)
                    }), (0, r.jsx)(vt, {
                      testId: "currentPasswordInput",
                      type: "password",
                      placeholder: n.formatMessage(pn.password_change_current_password_label)
                    })]
                  }), g && (0, r.jsxs)(yt, {
                    name: Bn,
                    isRequired: !0,
                    children: [(0, r.jsx)(wt, {
                      children: n.formatMessage(fn.security_setup_authenticator_code_field_label)
                    }), (0, r.jsx)(vt, {
                      placeholder: n.formatMessage(fn.security_setup_verification_code_field_placeholder),
                      testId: "updatePasswordMfaCodeInput"
                    })]
                  }), (0, r.jsxs)(yt, {
                    overrideErrorMessage: n.formatMessage(pn.password_change_requirements_not_met),
                    valibotErrorTypesToOverride: ["min_length", "max_length", "regex"],
                    isRequired: !0,
                    name: Hn,
                    children: [(0, r.jsx)(wt, {
                      children: n.formatMessage(pn.password_change_new_password_label)
                    }), (0, r.jsx)(vt, {
                      linkedValidationFields: [Yn],
                      maxLength: null !== (e = null == l ? void 0 : l.maximumLength) && void 0 !== e ? e : 30,
                      testId: "newPasswordInput",
                      type: "password",
                      placeholder: n.formatMessage(pn.password_change_new_password_label)
                    })]
                  })]
                }), (0, r.jsxs)(Vt, {
                  passwordFieldName: Hn,
                  testId: "passwordStrengthSummary",
                  children: [(0, r.jsxs)(qt, {
                    children: [(0, r.jsxs)(Ft, {
                      children: [(0, r.jsx)(zt, {
                        children: n.formatMessage(pn.password_change_password_strength_label)
                      }), (0, r.jsx)(Bt, {
                        testId: "newPasswordStrengthResult"
                      })]
                    }), (0, r.jsx)(Ht, {
                      testId: "newPasswordProgressBar"
                    })]
                  }), (0, r.jsx)(Yt, {})]
                }), (0, r.jsxs)(yt, {
                  name: Yn,
                  isRequired: !0,
                  children: [(0, r.jsx)(wt, {
                    children: n.formatMessage(pn.password_change_confirm_password_label)
                  }), (0, r.jsx)(vt, {
                    testId: "confirmPasswordInput",
                    type: "password",
                    placeholder: n.formatMessage(pn.password_change_confirm_password_label)
                  })]
                }), (0, r.jsx)(tn, {
                  appearance: "primary",
                  "data-ga": Ke.action.save_password,
                  isDisabled: h,
                  isLoading: h,
                  size: "LG",
                  testId: "submitNewPassword",
                  children: n.formatMessage(pn.password_change_save_changes_label)
                })]
              })]
            })
          })
        },
        Zn = {
          "0.2900.5": {
            field: zn,
            message: pn.password_change_current_password_error_text
          },
          "0.2900.6": {
            field: Bn,
            message: pn.password_change_error_mfa
          },
          "0.2900.11": {
            field: zn,
            message: pn.password_change_current_password_error_text
          },
          "0.2900.12": {
            field: zn,
            message: pn.password_change_current_password_error_text
          },
          "0.2900.13": {
            field: Hn,
            message: pn.password_change_error_cannot_be_the_same
          },
          "0.3000.5": {
            field: wn,
            message: fn.security_setup_password_field_error_text
          },
          "0.3000.7": {
            field: vn,
            message: fn.security_setup_verification_code_field_error_text
          },
          "0.3000.8": {
            field: vn,
            message: fn.security_setup_verification_code_field_error_text
          },
          "0.3000.10": {
            field: yn,
            message: Ze.email_change_new_email_invalid
          },
          "0.3100.5": {
            field: Nn,
            message: fn.security_setup_password_field_error_text
          },
          "0.3100.7": {
            field: Ln,
            message: fn.security_setup_verification_code_field_error_text
          },
          "0.3100.11": {
            field: Tn,
            message: An.nickname_change_new_nickname_invalid
          },
          "0.3100.12": {
            field: Tn,
            message: An.nickname_change_error_valid_nickname
          },
          "0.3100.13": {
            field: Tn,
            message: An.nickname_change_error_already_used
          },
          "0.3400.15": {
            field: kn,
            message: fn.security_setup_password_field_error_text
          },
          "0.3400.17": {
            field: On,
            message: fn.security_setup_verification_code_field_error_text
          },
          "0.3600.15": {
            field: kn,
            message: fn.security_setup_password_field_error_text
          },
          "0.3600.17": {
            field: On,
            message: fn.security_setup_verification_code_field_error_text
          },
          "8.400.2": {
            field: zn,
            message: pn.password_change_current_password_error_text
          },
          "8.600.2": {
            field: wn,
            message: pn.password_change_current_password_error_text
          },
          "8.700.1": {
            field: Tn,
            message: An.nickname_change_new_nickname_same
          },
          "8.700.7": {
            field: Nn,
            message: pn.password_change_current_password_error_text
          },
          "8.1000.1": {
            field: kn,
            message: pn.password_change_current_password_error_text
          },
          "8.1200.1": {
            field: kn,
            message: pn.password_change_current_password_error_text
          }
        };

      function Wn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Kn(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function $n(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              Kn(i, r, a, o, s, "next", e)
            }

            function s(e) {
              Kn(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Jn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Jn(e, t, n[t])
          })
        }
        return e
      }

      function er(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function tr(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, a, i = [],
              o = !0,
              s = !1;
            try {
              for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == n.return || n.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Wn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wn(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function nr(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
      var rr = function(e) {
          var t = e.fetchOnInitial,
            n = void 0 === t || t,
            r = e.queryOrRoute,
            i = void 0 === r ? "" : r,
            o = e.route,
            s = Ee(),
            c = tr((0, a.useState)(n), 2),
            l = c[0],
            d = c[1],
            u = tr((0, a.useState)(), 2),
            f = u[0],
            _ = u[1],
            p = ke().getAccessToken,
            m = tr((0, he.fp)(Xe), 1)[0],
            h = tr((0, he.fp)(m[o]), 2),
            g = h[0],
            b = h[1],
            y = tr((0, a.useState)(!1), 2),
            v = y[0],
            w = y[1],
            j = function(e) {
              var t = e.body,
                n = e.queryOrRoute,
                r = void 0 === n ? i : n;
              return $n(function() {
                var e, n, a, i;
                return nr(this, function(c) {
                  switch (c.label) {
                    case 0:
                      return d(!0), w(!1), He[o].isUnauthenticated ? [3, 2] : [4, p()];
                    case 1:
                      e = c.sent(), c.label = 2;
                    case 2:
                      return n = {}, [4, ar(o, He[o].method, t, e, r)];
                    case 3:
                      return (a = c.sent()).status ? (a.result ? i = a.result : a.list && (i = a.list), b(i), n.data = i) : (_(a.error), n.error = a.error, Zn[a.error.code] || s.displayNewError(a.error)), d(!1), w(!0), [2, n]
                  }
                })
              })()
            };
          return (0, a.useEffect)(function() {
            n && j({})
          }, []), {
            loading: l,
            fetch: j,
            data: g,
            error: f,
            setData: b,
            isRequestComplete: v
          }
        },
        ar = function(e, t, n, r, a) {
          return $n(function() {
            var i, o;
            return nr(this, function(s) {
              switch (s.label) {
                case 0:
                  return [4, c().createCastleRequestToken()];
                case 1:
                  return i = s.sent(), o = M(), [4, fetch("".concat(m.SCAPI_BASE_URL, "/").concat(e).concat(a), {
                    method: t,
                    body: JSON.stringify(n),
                    headers: er(Qn({}, r && {
                      Authorization: "Bearer ".concat(r)
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
        ir = n(39583),
        or = n(49284),
        sr = n.n(or);

      function cr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var lr = function(e, t) {
          sr().trackEvent("Settings", e, t)
        },
        dr = function(e, t) {
          return function() {
            var n;
            sr().updateCustomDimensionsOrMetrics(function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n)
                }
                return t
              }(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  cr(e, t, n[t])
                })
              }
              return e
            }({}, e), (cr(n = {}, Ke.dimensionsMetricsMap.environment, m.ENVIRONMENT), cr(n, Ke.dimensionsMetricsMap.loginState, !0), cr(n, Ke.dimensionsMetricsMap.validationStatus, "verified"), cr(n, Ke.dimensionsMetricsMap.linkedAccounts, t.map(function(e) {
              return e.onlineServiceName
            }).join("|")), n))), document.addEventListener("click", function(e) {
              var t = e.target.closest("[data-ga]");
              t && lr(t.getAttribute("data-ga"))
            })
          }
        };

      function ur(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var fr = function(e) {
        var t, n, r = (0, i.useLocation)(),
          o = (t = (0, a.useState)(""), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return ur(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ur(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          s = o[0],
          c = o[1],
          l = rr({
            route: Be.GetGoogleTagManagerSetupData,
            fetchOnInitial: !1
          }),
          d = l.data,
          u = l.fetch;
        (0, a.useEffect)(function() {
          ! function() {
            var e = !1,
              t = function() {
                (0, ir.canStoreCookie)("_ga") && (u({}), e = !0)
              };
            if (t(), !e) var n = setInterval(function() {
              window.OneTrust && (window.OneTrust.OnConsentChanged(function() {
                t()
              }), clearInterval(n))
            }, 100)
          }()
        }, []), (0, a.useEffect)(function() {
          var t;
          d && e && function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dr,
              r = {
                isEnabled: !0,
                isEnabledEc: !0,
                isUserIdEnabled: !0,
                userIdKey: "memberId",
                isEnabledCd: !0,
                cdDataKey: "cdData",
                lifeTimeCookie: "ga4cdlftm",
                clearDataCookie: "ga4cdcln",
                customDimensionsMetricsMap: Ke.dimensionsMetricsMap,
                gaTimeout: 30,
                promiseCallback: null
              };
            sr().initialize("GTM-WX5T79", r, Ke.tmTriggers, Ke.tmVariables, n(e, t))
          }(d, e), r.pathname !== s && (c(r.pathname), t = (t = r.pathname).replace(/\/$/, ""), sr().trackPage(t))
        }, [d, r.pathname, e, s])
      };

      function _r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            _r(e, t, n[t])
          })
        }
        return e
      }

      function mr(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function hr(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var gr = function(e) {
          var t = e.children,
            n = e.testId,
            i = hr(e, ["children", "testId"]),
            o = (0, a.useRef)(null),
            s = (0, R.v6)({
              "data-testid": n,
              className: "_2wzo2k0"
            }, i);
          return (0, a.useEffect)(function() {
            if (null == o ? void 0 : o.current) {
              var e, t, n = o.current,
                r = !1;
              n.addEventListener("mousedown", function(a) {
                r = !0, e = a.pageX, t = n.scrollLeft
              }), n.addEventListener("mouseleave", function() {
                r = !1
              }), n.addEventListener("mouseup", function() {
                r = !1
              }), n.addEventListener("mousemove", function(a) {
                if (r) {
                  a.preventDefault();
                  var i = a.pageX - e;
                  n.scrollLeft = t - i
                }
              })
            }
          }, []), (0, r.jsx)("div", mr(pr({
            ref: o
          }, s), {
            children: t
          }))
        },
        br = function(e) {
          var t = e.active,
            n = e.children,
            i = e.testId,
            o = hr(e, ["active", "children", "testId"]),
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
          }, [t]), (0, r.jsx)("div", mr(pr({
            ref: s
          }, c), {
            children: n
          }))
        };

      function yr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var vr = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = e.testId,
            i = function(e, t) {
              if (null == e) return {};
              var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
              }
              return a
            }(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_96dllt0"
            }, i);
          return (0, r.jsx)("div", function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t.push.apply(t, n)
              }
              return t
            }(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                yr(e, t, n[t])
              })
            }
            return e
          }({
            ref: t
          }, o), {
            children: n
          }))
        }),
        wr = "_1bwmedc4",
        jr = "_1bwmedch",
        xr = (0, G.c)({
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
        Mr = (0, G.c)({
          defaultClassName: "_1bwmedc7",
          variantClassNames: {
            interactable: {
              true: "_1bwmedc8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kr = "_1bwmedc5";

      function Or(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Sr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Or(e, t, n[t])
          })
        }
        return e
      }

      function Ar(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Ir(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var Pr = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Ir(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)(Mr({
                interactable: !0
              }), n)
            }, o);
          return (0, r.jsx)(E.Button, Ar(Sr({
            ref: t
          }, s), {
            children: a
          }))
        }),
        Cr = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Ir(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)(jr, n)
            }, o);
          return (0, r.jsx)("button", Ar(Sr({
            ref: t
          }, s), {
            children: a
          }))
        });

      function Dr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var Tr = (0, a.createContext)(null),
        Nr = function() {
          var e = (0, a.useContext)(Tr);
          if (!e) throw new Error("Not used in WizardContext");
          return e
        },
        Lr = function(e) {
          var t, n, i = e.children,
            o = e.onCancel,
            s = e.onFinish,
            c = (t = (0, a.useState)(0), n = 2, function(e) {
              if (Array.isArray(e)) return e
            }(t) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(t, n) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Dr(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Dr(e, t) : void 0
              }
            }(t, n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            l = c[0],
            d = c[1];
          return (0, r.jsx)(Tr.Provider, {
            value: {
              onCancel: o,
              onFinish: s,
              nextStep: function() {
                return d(l + 1)
              },
              previousStep: function() {
                return d(l - 1)
              },
              finalStep: function() {
                return d(i.length - 1)
              }
            },
            children: i[l]
          })
        },
        Er = "_1ivls7k0",
        Rr = (0, a.createContext)(null);
      const Gr = function() {
          return (0, a.useContext)(Rr)
        },
        Ur = (0, _e.YK)({
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
          avatar_spinner_label: {
            defaultMessage: "Avatar loading spinner",
            description: "Label describing the avatar loading spinner",
            id: "avatar_spinner_label"
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
      var Vr = function(e, t, n, r, a) {
          r(t), a(n), e()
        },
        qr = function(e) {
          var t, n = e.avatarGroup,
            a = e.testId,
            i = (0, L.A)(),
            o = Nr(),
            s = i.formatMessage(Ur.avatar_groups_button_label),
            c = Gr(),
            l = c.setSelectedAvatarGroup,
            d = c.setSelectedAvatar;
          return (0, r.jsxs)("div", {
            "data-testid": a,
            children: [(0, r.jsxs)(E.Button, {
              className: "_1bwmedcd",
              appearance: "ghost",
              size: "MD",
              testId: "".concat(null == n ? void 0 : n.name, "-avatar-group-row-next-page"),
              onClick: function() {
                l(n), o.nextStep()
              },
              children: [(0, r.jsx)(E.Body, {
                testId: "avatar-group-row-heading",
                size: "MD",
                appearance: "bold",
                className: "_1bwmedcc",
                children: n.name
              }), (0, r.jsx)(et.ChevronRight, {
                size: "MD",
                label: s
              })]
            }), (0, r.jsx)("div", {
              className: "_1bwmedce",
              children: null == n || null === (t = n.avatars) || void 0 === t ? void 0 : t.slice(0, 6).map(function(e) {
                return (0, r.jsx)(Pr, {
                  size: "LG",
                  appearance: "ghost",
                  testId: "select-avatar-clickable-icon",
                  onClick: function() {
                    return Vr(o.finalStep, e, n, d, l)
                  },
                  children: (0, r.jsx)("img", {
                    src: e.url,
                    alt: e.name,
                    className: kr
                  })
                }, e.id)
              })
            })]
          })
        };
      const Fr = (0, _e.YK)({
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

      function zr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var Br = ["GTAV", "GTAO", "RDR2", "RDR", "RDO", "UndeadNightmare", "LAN", "Bully"],
        Hr = function(e) {
          var t = e.avatarGroups,
            n = (0, L.A)(),
            i = Nr(),
            o = n.formatMessage(Ur.avatar_group_heading),
            s = function(e, t) {
              var n = Br.indexOf(e.game),
                r = Br.indexOf(t.game);
              return n > -1 && r > -1 ? n - r : -1 === n && -1 === r ? 0 : r > -1 ? 1 : -1
            },
            c = (0, a.useMemo)(function() {
              return t ? (e = t, function(e) {
                if (Array.isArray(e)) return zr(e)
              }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(e) || function(e, t) {
                if (e) {
                  if ("string" == typeof e) return zr(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zr(e, t) : void 0
                }
              }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()).sort(s) : [];
              var e
            }, [t]);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(E.Dialog.Header, {
              children: [(0, r.jsx)(E.Dialog.CloseButton, {
                label: n.formatMessage(Fr.modal_close_modal_button_label),
                onPress: function() {
                  return i.onCancel && i.onCancel()
                },
                testId: "select-avatar-close-modal-button"
              }), (0, r.jsx)(E.Dialog.HeaderTitle, {
                testId: "avatar-groups-header-title",
                className: wr,
                children: o
              })]
            }), (0, r.jsx)(E.Dialog.ScrollArea, {
              children: (0, r.jsx)(E.Dialog.Layout, {
                children: c.map(function(e) {
                  return (0, r.jsx)(qr, {
                    avatarGroup: e,
                    testId: "avatar-group-row"
                  }, e.id)
                })
              })
            })]
          })
        },
        Yr = function() {
          var e = Gr(),
            t = e.selectedAvatarGroup,
            n = e.setSelectedAvatar,
            a = e.setSelectedAvatarGroup,
            i = Nr(),
            o = (0, L.A)();
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(E.Dialog.Header, {
              children: [(0, r.jsx)(E.Dialog.HeaderButton, {
                icon: "ArrowLeft",
                testId: "select-avatar-previous-page",
                label: o.formatMessage(Fr.modal_previous_page_button_label),
                onPress: function() {
                  return i.previousStep && i.previousStep()
                }
              }), (0, r.jsx)(E.Dialog.HeaderTitle, {
                testId: "avatar-fullpage-title",
                className: wr,
                children: null == t ? void 0 : t.name
              }), (0, r.jsx)(E.Dialog.CloseButton, {
                label: o.formatMessage(Fr.modal_close_modal_button_label),
                onPress: function() {
                  return i.onCancel && i.onCancel()
                },
                testId: "select-avatar-close-modal-button"
              })]
            }), (0, r.jsx)(E.Dialog.ScrollArea, {
              testId: "avatar-modal-test-body",
              children: (0, r.jsx)(E.Dialog.Layout, {
                children: (0, r.jsx)("div", {
                  className: "_1bwmedcg",
                  children: null == t ? void 0 : t.avatars.map(function(e) {
                    return (0, r.jsx)(Pr, {
                      size: "LG",
                      appearance: "ghost",
                      testId: "select-avatar-full-group-icon",
                      onClick: function() {
                        return Vr(i.finalStep, e, t, n, a)
                      },
                      children: (0, r.jsx)("img", {
                        src: e.url,
                        alt: e.name,
                        className: kr
                      })
                    }, e.id)
                  })
                })
              })
            })]
          })
        };

      function Xr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var Zr = (0, a.forwardRef)(function(e, t) {
          var n = e.testId,
            a = e.userImageSrc,
            i = e.label,
            o = function(e, t) {
              if (null == e) return {};
              var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
              }
              return a
            }(e, ["testId", "userImageSrc", "label"]),
            s = (0, R.v6)({
              "data-testid": n,
              className: "_1bwmedca",
              alt: i,
              src: a
            }, o);
          return (0, r.jsx)("img", function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                Xr(e, t, n[t])
              })
            }
            return e
          }({
            ref: t
          }, s))
        }),
        Wr = function() {
          var e = (0, L.A)(),
            t = Nr(),
            n = e.formatMessage(Ur.update_avatar_header_label),
            a = e.formatMessage(Ur.update_avatar_button_label),
            i = Gr(),
            o = i.selectedAvatar,
            s = i.selectedAvatarGroup,
            c = i.setSelectedAvatarGroup,
            l = i.updateAvatarIcon;
          return o && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(E.Dialog.Header, {
              children: [(0, r.jsx)(E.Dialog.HeaderButton, {
                label: e.formatMessage(Fr.modal_previous_page_button_label),
                icon: "ArrowLeft",
                onPress: function() {
                  c(s), t.previousStep()
                },
                testId: "select-avatar-previous-page"
              }), (0, r.jsx)(E.Dialog.HeaderTitle, {
                testId: "select-avatar-update-header",
                children: n
              }), (0, r.jsx)(E.Dialog.CloseButton, {
                label: e.formatMessage(Fr.modal_close_modal_button_label),
                onPress: function() {
                  return t.onCancel && t.onCancel()
                },
                testId: "select-avatar-close-modal-button"
              })]
            }), (0, r.jsx)(E.Dialog.Layout, {
              className: (0, z.A)(xr({
                alignments: "center"
              })),
              children: (0, r.jsxs)(E.Dialog.ActionArea, {
                testId: "update-avatar-modal-body",
                className: "_1bwmedc3",
                children: [(0, r.jsx)(Zr, {
                  userImageSrc: o.url,
                  label: o.name,
                  testId: "select-avatar-update-avatar-icon"
                }), (0, r.jsx)(E.Dialog.Button, {
                  size: "MD",
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

      function Kr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function $r(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function Jr(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              $r(i, r, a, o, s, "next", e)
            }

            function s(e) {
              $r(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Qr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function ea(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, a, i = [],
              o = !0,
              s = !1;
            try {
              for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == n.return || n.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Kr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kr(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function ta(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
      const na = function(e) {
        var t = e.initialAvatarUrl,
          n = e.nickName,
          i = (0, L.A)(),
          o = Ee(),
          s = ea((0, a.useState)(t), 2),
          c = s[0],
          l = s[1],
          d = ea((0, a.useState)(void 0), 2),
          u = d[0],
          f = d[1],
          _ = ea((0, a.useState)(void 0), 2),
          p = _[0],
          m = _[1],
          h = ea((0, a.useState)(void 0), 2),
          g = h[0],
          b = h[1],
          y = rr({
            route: Be.GetAvatars,
            fetchOnInitial: !1
          }),
          v = y.fetch,
          w = y.loading,
          j = rr({
            route: Be.UpdateAvatars,
            fetchOnInitial: !1
          }).fetch,
          x = (0, a.useCallback)(function() {
            M()
          }, [u]),
          M = function() {
            return Jr(function() {
              var e, t, n;
              return ta(this, function(r) {
                switch (r.label) {
                  case 0:
                    return u ? [2] : [4, v({})];
                  case 1:
                    return t = r.sent(), n = [], null == t || null === (e = t.data) || void 0 === e || e.forEach(function(e) {
                      var t = e.avatars.filter(function(e) {
                        return e.url
                      });
                      if (e.game && !(t.length <= 0)) {
                        var r = n.findIndex(function(t) {
                          return t.game === e.game
                        });
                        if (-1 === r) {
                          var a = "avatar_Category_".concat(e.game),
                            o = Ur[a] ? i.formatMessage(Ur[a]) : e.name;
                          n.push(function(e, t) {
                            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t.push.apply(t, n)
                              }
                              return t
                            }(Object(t)).forEach(function(n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                            }), e
                          }(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                              }))), r.forEach(function(t) {
                                Qr(e, t, n[t])
                              })
                            }
                            return e
                          }({}, e), {
                            name: o,
                            avatars: t
                          }))
                        } else {
                          var s = n[r];
                          t.forEach(function(e) {
                            s.avatars.some(function(t) {
                              return t.id === e.id
                            }) || s.avatars.push(e)
                          })
                        }
                      }
                    }), f(n), [2]
                }
              })
            })()
          };
        return (0, r.jsx)(Rr.Provider, {
          value: {
            selectedAvatar: p,
            selectedAvatarGroup: g,
            setSelectedAvatar: m,
            setSelectedAvatarGroup: b,
            updateAvatarIcon: function(e, t) {
              return Jr(function() {
                var n;
                return ta(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return e ? [4, j({
                        body: {
                          avatarId: e
                        }
                      })] : [3, 2];
                    case 1:
                      (null == (n = r.sent()) ? void 0 : n.error) || (l(t), o.displayNewToast({
                        appearance: "success",
                        message: i.formatMessage(Ur.update_avatar_toast_message)
                      })), r.label = 2;
                    case 2:
                      return [2]
                  }
                })
              })()
            }
          },
          children: (0, r.jsxs)(E.Dialog.Root, {
            children: [(0, r.jsx)(E.Dialog.Trigger, {
              asChild: !0,
              children: (0, r.jsxs)(Cr, {
                testId: "hero-avatar",
                onClick: x,
                className: jr,
                "aria-label": i.formatMessage(Ur.avatar_edit_button_label),
                children: [(0, r.jsx)("img", {
                  src: c,
                  alt: n,
                  tabIndex: -1,
                  className: "_1bwmedc6"
                }), (0, r.jsx)("div", {
                  className: "_1bwmedci",
                  "data-testid": "edit-avatar-btn",
                  tabIndex: -1,
                  children: (0, r.jsx)(et.Pencil, {
                    label: i.formatMessage(Ur.avatar_edit_button_icon_label),
                    size: "SM",
                    className: "_1bwmedcj"
                  })
                })]
              })
            }), (0, r.jsxs)(E.Dialog.Overlay, {
              testId: "selectAvatarModalOverlay",
              className: Er,
              children: [(0, r.jsx)(E.Dialog.HeaderTitle, {}), (0, r.jsx)(E.Dialog.Content, {
                testId: "selectAvatarModal",
                "aria-describedby": void 0,
                children: w ? (0, r.jsx)(E.Dialog.ScrollArea, {
                  children: (0, r.jsx)(E.Dialog.Layout, {
                    className: xr({
                      alignments: "center"
                    }),
                    children: (0, r.jsx)(E.Spinner, {
                      size: "inlineLG",
                      label: i.formatMessage(Ur.avatar_spinner_label),
                      testId: "avatar-loading-spinner"
                    })
                  })
                }) : (0, r.jsxs)(Lr, {
                  children: [(0, r.jsx)(Hr, {
                    avatarGroups: u
                  }), (0, r.jsx)(Yr, {}), (0, r.jsx)(Wr, {})]
                })
              })]
            })]
          })
        })
      };
      var ra = "_1g6tovv3";
      const aa = n.p + "3c8ce9c65cc1acff9a84ff94583ab4c6.jpg";

      function ia(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function oa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            ia(e, t, n[t])
          })
        }
        return e
      }

      function sa(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function ca(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var la = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = e.testId,
            i = ca(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_1g6tovv1",
              style: (0, xt.DI)(ia({}, "var(--_1g6tovv0)", "url(".concat(aa, ")")))
            }, i);
          return (0, r.jsx)("header", sa(oa({
            ref: t
          }, o), {
            children: n
          }))
        }),
        da = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = e.testId,
            i = ca(e, ["children", "testId"]),
            o = (0, R.v6)({
              "data-testid": a,
              className: "_1g6tovv2"
            }, i);
          return (0, r.jsx)("div", sa(oa({
            ref: t
          }, o), {
            children: n
          }))
        }),
        ua = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = ca(e, ["children"]),
            i = (0, R.v6)({
              className: ra
            }, a);
          return (0, r.jsx)(E.Heading, sa(oa({
            ref: t,
            level: 5
          }, i), {
            children: n
          }))
        }),
        fa = (0, a.forwardRef)(function(e, t) {
          var n = e.children,
            a = ca(e, ["children"]),
            i = (0, R.v6)({
              className: ra
            }, a);
          return (0, r.jsx)(E.Body, sa(oa({
            ref: t,
            size: "SM"
          }, i), {
            children: n
          }))
        });
      const _a = function(e) {
          var t = e.account,
            n = (0, L.A)();
          return t && (0, r.jsx)(W, {
            children: (0, r.jsx)(K, {
              children: (0, r.jsxs)(la, {
                children: [t.avatarUrl && (0, r.jsx)(na, {
                  nickName: t.nickName,
                  initialAvatarUrl: t.avatarUrl
                }), (0, r.jsxs)(da, {
                  "data-testid": "hero-avatar-nickname",
                  children: [(0, r.jsx)(ua, {
                    children: t.nickName
                  }), (0, r.jsx)(fa, {
                    children: "".concat(n.formatMessage(_n.overview_created_prefix), " ").concat(In({
                      dateString: t.createdDate,
                      locale: n.locale
                    }))
                  })]
                })]
              })
            })
          })
        },
        pa = (0, _e.YK)({
          info_tooltip_label: {
            defaultMessage: "Information icon displaying additional text",
            description: "The data usage tooltip icon description",
            id: "info_tooltip_label"
          }
        });

      function ma(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var ha = function(e) {
        var t, n, i = e.testIdPrefix,
          o = e.message,
          s = e.side,
          c = (0, L.A)(),
          l = (t = (0, a.useState)(!1), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return ma(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ma(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          d = l[0],
          u = l[1];
        return (0, r.jsxs)(E.Tooltip.Root, {
          defaultOpen: !1,
          isOpen: d,
          onOpenChange: u,
          testId: "".concat(i, "-tooltip"),
          children: [(0, r.jsx)(E.Tooltip.Trigger, {
            className: "jr99910",
            onClickCapture: function(e) {
              return e.stopPropagation()
            },
            onPointerDown: function(e) {
              e.preventDefault(), "mouse" !== e.pointerType && u(!d)
            },
            testId: "".concat(i, "-tooltip-trigger"),
            children: (0, r.jsx)(E.IconButton, {
              appearance: "ghost",
              icon: "CircleHelp",
              size: "MD",
              label: c.formatMessage(pa.info_tooltip_label)
            })
          }), (0, r.jsx)(E.Tooltip.Portal, {
            children: (0, r.jsx)(E.Tooltip.Content, {
              side: s,
              testId: "".concat(i, "-tooltip-content"),
              children: o
            })
          })]
        })
      };

      function ga(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function ba(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            ga(e, t, n[t])
          })
        }
        return e
      }
      var ya = function(e) {
        var t = e.to,
          n = e.subLabel,
          a = e.label,
          o = e.ariaLabel,
          s = e.buttonLabel,
          c = e.gaAction,
          l = e.testId,
          d = (0, i.useNavigate)(),
          u = function() {
            d(t)
          },
          f = s + a;
        return (0, r.jsx)(te, {
          "aria-labelledby": "".concat(n, "-row ").concat(a),
          "data-ga": c,
          id: "".concat(n, "-row"),
          isInteractable: !0,
          label: o,
          onClick: u,
          testId: l,
          children: (0, r.jsxs)(re, {
            children: [(0, r.jsxs)(ie, {
              className: "whld275",
              children: [(0, r.jsx)(se, {
                shouldEllipsis: !0,
                children: n
              }), (0, r.jsx)(oe, {
                shouldEllipsis: !0,
                testId: "".concat(l, "-label"),
                id: a,
                children: a
              })]
            }), (0, r.jsx)(E.IconButton, {
              appearance: "ghost",
              icon: "ChevronRight",
              label: f,
              onClick: u,
              size: "LG",
              testId: "".concat(l, "-button")
            })]
          })
        })
      };
      const va = function(e) {
        var t = e.nickname,
          n = e.email,
          i = e.dob,
          o = (0, L.A)(),
          s = [{
            to: "details/email",
            subLabel: o.formatMessage(_n.overview_email_sub_label),
            label: n,
            ariaLabel: o.formatMessage(_n.overview_profile_details_change_email_link_description),
            buttonLabel: o.formatMessage(_n.overview_email_button_label),
            gaAction: Ke.action.edit_email,
            testId: "changeEmailRow"
          }, {
            to: "details/password",
            subLabel: o.formatMessage(_n.overview_password_sub_label),
            label: "**********",
            ariaLabel: o.formatMessage(_n.overview_profile_details_change_password_link_description),
            buttonLabel: o.formatMessage(_n.overview_password_button_label),
            gaAction: Ke.action.edit_password,
            testId: "changePasswordRow"
          }, {
            to: "details/nickname",
            subLabel: o.formatMessage(_n.overview_nickname_sub_label),
            label: t,
            ariaLabel: o.formatMessage(_n.overview_profile_details_change_nickname_link_description),
            buttonLabel: o.formatMessage(_n.overview_nickname_button_label),
            gaAction: Ke.action.edit_nickname,
            testId: "changeNicknameRow"
          }];
        return (0, r.jsxs)(K, {
          children: [(0, r.jsx)($, {
            testId: "profile-details-section",
            children: (0, r.jsxs)(J, {
              testId: "profile-details-header",
              children: [o.formatMessage(_n.overview_heading_profile_details), (0, r.jsx)(ha, {
                testIdPrefix: "profile-details",
                message: o.formatMessage(_n.overview_data_usage)
              })]
            })
          }), (0, r.jsxs)(ee, {
            children: [s.map(function(e) {
              return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)(ya, ba({}, e)), (0, r.jsx)(ne, {
                  thickness: "thin"
                })]
              }, e.to)
            }), (0, r.jsx)(te, {
              children: (0, r.jsx)(ae, {
                children: (0, r.jsxs)(ie, {
                  children: [(0, r.jsx)(se, {
                    children: o.formatMessage(_n.overview_dateofbirth_sub_label)
                  }), i && (0, r.jsx)(oe, {
                    testId: "profile-details-dob",
                    children: In({
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
      var wa = n(1665),
        ja = "_1md0fdx6",
        xa = "_1md0fdx8",
        Ma = "_1md0fdx7";

      function ka(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Oa(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function Sa(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              Oa(i, r, a, o, s, "next", e)
            }

            function s(e) {
              Oa(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function Aa(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Ia(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Aa(e, t, n[t])
          })
        }
        return e
      }

      function Pa(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Ca(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, a, i = [],
              o = !0,
              s = !1;
            try {
              for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == n.return || n.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return ka(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ka(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Da(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
      const Ta = function() {
        var e, t, n, i, o = (0, L.A)(),
          s = M(),
          c = Ca((0, a.useState)(!1), 2),
          l = c[0],
          d = c[1],
          u = Ca((0, a.useState)(!1), 2),
          f = u[0],
          _ = u[1],
          p = rr({
            route: Be.ProfileOverview,
            fetchOnInitial: !1
          }),
          m = p.setData,
          h = p.data,
          g = null !== (t = null === (n = null == h ? void 0 : h.language, e = w.find(function(e) {
            return e.subdomain === n || e.subdomaincom === n
          })) || void 0 === e ? void 0 : e.subdomain) && void 0 !== t ? t : s.subdomain,
          b = null !== (i = null == h ? void 0 : h.country) && void 0 !== i ? i : s.country,
          y = rr({
            route: Be.GetCountries
          }),
          v = y.data,
          j = y.loading,
          k = rr({
            route: Be.UpdateCountry,
            fetchOnInitial: !1
          }),
          O = k.fetch,
          S = k.loading,
          A = rr({
            route: Be.UpdateLanguage,
            fetchOnInitial: !1
          }),
          I = A.fetch,
          P = A.loading,
          C = function(e) {
            return e.stopPropagation()
          };
        return (0, r.jsxs)(K, {
          children: [(0, r.jsx)($, {
            testId: "regional-details-section",
            children: (0, r.jsx)(J, {
              children: o.formatMessage(_n.overview_heading_regional_details)
            })
          }), (0, r.jsxs)(ee, {
            children: [(0, r.jsxs)(te, {
              isDisabled: j || S,
              isInteractable: !0,
              onClick: function() {
                return d(!0)
              },
              testId: "countryRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: o.formatMessage(_n.overview_country_sub_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: j ? (0, r.jsx)(wa.y, {
                  size: "inlineLG",
                  label: o.formatMessage(_n.overview_country_spinner_label),
                  testId: "countryLoader"
                }) : (0, r.jsxs)(E.Dropdown.Root, {
                  className: ja,
                  isOpen: l,
                  onClick: C,
                  onOpenChange: function() {
                    var e = !l,
                      t = e ? Ke.action.edit_country : Ke.action.close_edit_country;
                    lr(t), d(e)
                  },
                  onValueChange: function(e) {
                    return Sa(function() {
                      return Da(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return lr(Ke.action.select_country), [4, O({
                              queryOrRoute: "?country=".concat(e)
                            })];
                          case 1:
                            return t.sent().error || (m(Pa(Ia({}, h), {
                              country: e
                            })), lr(Ke.action.save_country)), [2]
                        }
                      })
                    })()
                  },
                  value: b,
                  children: [(0, r.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(_n.overview_country_sub_label)
                  }), (0, r.jsxs)(E.Dropdown.Trigger, {
                    testId: "countryDropdown",
                    className: Ma,
                    children: [(0, r.jsx)(E.Dropdown.TriggerText, {
                      placeholder: b
                    }), (0, r.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, r.jsx)(E.Dropdown.Portal, {
                    children: (0, r.jsx)(E.Dropdown.Content, {
                      className: xa,
                      children: (0, r.jsx)(E.Dropdown.ScrollArea, {
                        children: null == v ? void 0 : v.map(function(e) {
                          return (0, r.jsx)(E.Dropdown.Option, {
                            value: e.code,
                            testId: e.code,
                            children: (0, r.jsx)(E.Dropdown.OptionText, {
                              children: e.name
                            })
                          }, "country-select-".concat(e.code))
                        })
                      })
                    })
                  })]
                })
              })]
            }), (0, r.jsx)(ne, {
              thickness: "thin"
            }), (0, r.jsxs)(te, {
              isDisabled: P,
              isInteractable: !0,
              onClick: function() {
                return _(!0)
              },
              testId: "languageRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: o.formatMessage(_n.overview_language_sub_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Dropdown.Root, {
                  className: ja,
                  isOpen: f,
                  onClick: C,
                  onOpenChange: function() {
                    var e = !f,
                      t = e ? Ke.action.edit_language : Ke.action.close_edit_language;
                    lr(t), _(e)
                  },
                  onValueChange: function(e) {
                    return Sa(function() {
                      return Da(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return lr(Ke.action["select_language_".concat(e)]), [4, I({
                              queryOrRoute: "?language=".concat(e)
                            })];
                          case 1:
                            return t.sent().error || (m(Pa(Ia({}, h), {
                              language: e
                            })), lr(Ke.action.save_language)), [2]
                        }
                      })
                    })()
                  },
                  value: g,
                  children: [(0, r.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(_n.overview_language_dropdown_label)
                  }), (0, r.jsxs)(E.Dropdown.Trigger, {
                    testId: "languageDropdown",
                    className: Ma,
                    children: [(0, r.jsx)(E.Dropdown.TriggerText, {
                      placeholder: ""
                    }), (0, r.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, r.jsx)(E.Dropdown.Portal, {
                    children: (0, r.jsx)(E.Dropdown.Content, {
                      className: xa,
                      children: (0, r.jsx)(E.Dropdown.ScrollArea, {
                        children: x.map(function(e) {
                          var t = e.label,
                            n = e.subdomain;
                          return (0, r.jsx)(E.Dropdown.Option, {
                            value: n,
                            testId: n,
                            children: (0, r.jsx)(E.Dropdown.OptionText, {
                              children: t
                            })
                          }, "language-select-".concat(n))
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
      var Na = "_1arzw2p0";
      const La = (0, _e.YK)({
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
            defaultMessage: "To learn more about our privacy practices, review our privacy policy.",
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
        Ea = function(e) {
          var t = e.deleteReason,
            n = e.setDeleteReason,
            a = (0, L.A)(),
            i = Nr(),
            o = [{
              label: a.formatMessage(La.profile_delete_radio_option_one),
              value: "product_game_dissatisfaction"
            }, {
              label: a.formatMessage(La.profile_delete_radio_option_two),
              value: "harassment_bad_actor"
            }, {
              label: a.formatMessage(La.profile_delete_radio_option_three),
              value: "compromised_hacked_account"
            }, {
              label: a.formatMessage(La.profile_delete_radio_option_four),
              value: "account_service_ban"
            }, {
              label: a.formatMessage(La.profile_delete_radio_option_five),
              value: "technical_issue"
            }, {
              label: a.formatMessage(La.profile_delete_radio_option_six),
              value: "privacy_information"
            }, {
              label: a.formatMessage(La.profile_delete_radio_option_seven),
              value: "something_else"
            }];
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(E.Dialog.CloseButton, {
              label: a.formatMessage(La.profile_delete_close_button_label),
              onPress: function() {
                var e;
                lr(Ke.action.close_delete_account_modal, Ke.labels.close_delete_account_modal), null === (e = i.onCancel) || void 0 === e || e.call(i)
              },
              testId: "closeDeleteAccountModal"
            }), (0, r.jsx)(E.Dialog.ScrollArea, {
              children: (0, r.jsxs)(E.Dialog.Layout, {
                className: Na,
                children: [(0, r.jsx)(E.Dialog.Title, {
                  testId: "feedbackHeader",
                  children: a.formatMessage(La.profile_delete_page_two_heading)
                }), (0, r.jsxs)(E.RadioGroup.Root, {
                  appearance: "primary",
                  isRequired: !0,
                  onChange: function(e) {
                    return n(e)
                  },
                  size: "LG",
                  children: [(0, r.jsx)(E.RadioGroup.Label, {
                    hideRequiredAsterisk: !0,
                    hideVisually: !0,
                    children: a.formatMessage(La.profile_delete_radio_group_label)
                  }), (0, r.jsx)(E.RadioGroup.Options, {
                    children: o.map(function(e) {
                      var t = e.value,
                        n = e.label;
                      return (0, r.jsxs)(E.RadioGroup.Option, {
                        testId: t,
                        children: [(0, r.jsx)(E.RadioGroup.Input, {
                          value: t
                        }), (0, r.jsx)(E.RadioGroup.OptionLabel, {
                          children: n
                        })]
                      }, "".concat(t, "-key"))
                    })
                  })]
                }), (0, r.jsx)(E.Button, {
                  appearance: "primary",
                  isDisabled: !t,
                  onClick: function() {
                    lr(Ke.action.confirm_account_deletion, Ke.labels.account_deletion_reason + t), i.nextStep()
                  },
                  size: "LG",
                  testId: "continueButton",
                  children: a.formatMessage(La.profile_delete_continue_button_label)
                })]
              })
            })]
          })
        };

      function Ra(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Ga(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }
      const Ua = function(e) {
        var t, n, i = e.deleteReason,
          o = e.token,
          s = Nr(),
          c = (t = (0, a.useState)(!1), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ra(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ra(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          l = c[0],
          d = c[1],
          u = (0, L.A)(),
          f = rr({
            route: Be.DeleteAccount,
            fetchOnInitial: !1
          }),
          _ = f.fetch,
          p = f.loading;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(E.Dialog.CloseButton, {
            label: u.formatMessage(La.profile_delete_close_button_label),
            onPress: function() {
              var e;
              lr(Ke.action.close_delete_account_modal, Ke.labels.close_delete_account_modal), null === (e = s.onCancel) || void 0 === e || e.call(s)
            },
            testId: "closeDeleteAccountModal"
          }), (0, r.jsx)(E.Dialog.ScrollArea, {
            className: "_1arzw2p3",
            children: (0, r.jsxs)(E.Dialog.Layout, {
              className: Na,
              tabIndex: 0,
              children: [(0, r.jsx)(E.Dialog.Title, {
                testId: "noticeHeader",
                children: u.formatMessage(La.profile_delete_page_three_heading)
              }), (0, r.jsx)(E.Body, {
                size: "MD",
                children: u.formatMessage(La.profile_delete_notice_copy_one)
              }), (0, r.jsx)(E.Alert.Root, {
                className: "_1arzw2p1",
                status: "information",
                background: "two-tone",
                children: (0, r.jsxs)(E.Alert.Header, {
                  children: [(0, r.jsx)(E.Alert.Icon, {
                    size: "LG"
                  }), (0, r.jsx)(E.Alert.Description, {
                    children: u.formatMessage(La.profile_delete_notice_alert_description)
                  })]
                })
              }), (0, r.jsx)(E.Body, {
                asChild: !0,
                size: "MD",
                children: (0, r.jsxs)("ul", {
                  className: "_1arzw2p2",
                  children: [(0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_one)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_two)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_three)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_four)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_five)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_six)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_seven)
                  }), (0, r.jsx)("li", {
                    children: u.formatMessage(La.profile_delete_notice_bullet_eight)
                  })]
                })
              }), (0, r.jsx)(E.Body, {
                size: "MD",
                children: u.formatMessage(La.profile_delete_notice_copy_two)
              }), (0, r.jsx)(E.Body, {
                size: "MD",
                children: u.formatMessage(La.profile_delete_notice_copy_three)
              })]
            })
          }), (0, r.jsxs)(E.Dialog.Footer, {
            className: "_1arzw2p4",
            children: [(0, r.jsxs)(E.Checkbox.Root, {
              className: "_1arzw2p5",
              size: "XL",
              testId: "confirm_checkbox",
              children: [(0, r.jsx)(E.Checkbox.Input, {
                isChecked: l,
                className: "_1arzw2p6",
                onCheckedChange: function(e) {
                  return d(e)
                },
                testId: "noticeCheckbox"
              }), (0, r.jsx)(E.Checkbox.Label, {
                className: tt(),
                children: u.formatMessage(La.profile_delete_notice_checkbox_label)
              })]
            }), (0, r.jsx)(E.Button, {
              appearance: "primary",
              isDisabled: !l || p,
              isLoading: p,
              onClick: function() {
                return (e = function() {
                  var e;
                  return function(e, t) {
                    var n, r, a, i = {
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
                          if (n) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                            switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                i.label++, r = s[1], s = [0];
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
                            s = [6, e], r = 0
                          } finally {
                            n = a = 0
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
                        return lr(Ke.action.agree_to_account_deletion_notices, Ke.labels.account_deletion_notice_agree), [4, _({
                          body: o
                        })];
                      case 1:
                        return (null == (e = t.sent()) ? void 0 : e.error) ? lr(Ke.action.delete_account_error) : (lr(Ke.action.delete_account_success, Ke.labels.account_deletion_success + i), window.location.replace(m.getDeleteAccountLogoutUrl({
                          lang: u.locale
                        }))), [2]
                    }
                  })
                }, function() {
                  var t = this,
                    n = arguments;
                  return new Promise(function(r, a) {
                    var i = e.apply(t, n);

                    function o(e) {
                      Ga(i, r, a, o, s, "next", e)
                    }

                    function s(e) {
                      Ga(i, r, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })();
                var e
              },
              size: "LG",
              testId: "confirmDeleteAccount",
              children: u.formatMessage(La.profile_delete_notice_agree_button_label)
            })]
          })]
        })
      };

      function Va(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function qa(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, a, i = [],
              o = !0,
              s = !1;
            try {
              for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == n.return || n.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Va(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Va(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      const Fa = function() {
        var e = qa((0, a.useState)(""), 2),
          t = e[0],
          n = e[1],
          o = qa((0, a.useState)(!1), 2),
          s = o[0],
          c = o[1],
          l = qa((0, a.useState)(""), 2),
          d = l[0],
          u = l[1],
          f = (0, i.useLocation)();
        return (0, a.useEffect)(function() {
          var e = new URLSearchParams(f.hash.substring(1)).get("token");
          e && (n(e), c(!0), window.location.hash = "")
        }, []), (0, r.jsx)(E.Dialog.Root, {
          isOpen: s,
          onOpenChange: c,
          children: (0, r.jsx)(E.Dialog.Overlay, {
            className: Er,
            testId: "deleteAccountModalOverlay",
            children: (0, r.jsx)(E.Dialog.Content, {
              "aria-describedby": void 0,
              onEscapeKeyDown: function(e) {
                return e.preventDefault()
              },
              onInteractOutside: function(e) {
                return e.preventDefault()
              },
              testId: "deleteAccountModal",
              children: (0, r.jsxs)(Lr, {
                onCancel: function() {
                  return c(!1)
                },
                children: [(0, r.jsx)(Ea, {
                  deleteReason: d,
                  setDeleteReason: u
                }), (0, r.jsx)(Ua, {
                  deleteReason: d,
                  token: t
                })]
              })
            })
          })
        })
      };

      function za(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }
      var Ba = function() {
        var e = (0, L.A)(),
          t = rr({
            route: Be.DeleteCheck,
            fetchOnInitial: !1
          }),
          n = t.fetch,
          a = t.loading;
        return (0, r.jsxs)(K, {
          children: [(0, r.jsx)($, {
            testId: "delete-account-section",
            children: (0, r.jsx)(J, {
              children: e.formatMessage(_n.overview_heading_delete_account)
            })
          }), (0, r.jsxs)(ee, {
            className: "_1s8x9ff0",
            testId: "deleteAccountRow",
            children: [(0, r.jsx)(ie, {
              children: (0, r.jsx)(se, {
                className: "whld273",
                children: e.formatMessage(_n.overview_delete_account_description)
              })
            }), (0, r.jsx)(E.Button, {
              appearance: "danger",
              "aria-label": e.formatMessage(_n.overview_delete_account_button_aria_label),
              className: "_1s8x9ff1",
              isDisabled: a,
              isLoading: a,
              onClick: function() {
                return (t = function() {
                  var t;
                  return function(e, t) {
                    var n, r, a, i = {
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
                          if (n) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                            switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                i.label++, r = s[1], s = [0];
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
                            s = [6, e], r = 0
                          } finally {
                            n = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return [4, n({})];
                      case 1:
                        return (null == (t = r.sent()) ? void 0 : t.error) || (lr(Ke.action.start_account_deletion, Ke.labels.start_account_deletion), window.location.href = m.getAovUrl({
                          lang: e.locale
                        })), [2]
                    }
                  })
                }, function() {
                  var e = this,
                    n = arguments;
                  return new Promise(function(r, a) {
                    var i = t.apply(e, n);

                    function o(e) {
                      za(i, r, a, o, s, "next", e)
                    }

                    function s(e) {
                      za(i, r, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })();
                var t
              },
              size: "MD",
              testId: "startAccountDeletion",
              children: e.formatMessage(_n.overview_delete_account_button_label)
            })]
          }), (0, r.jsx)(Fa, {})]
        })
      };
      const Ha = function(e) {
        var t = e.account;
        return t && (0, r.jsx)("div", {
          className: "whld270",
          children: (0, r.jsxs)(W, {
            children: [(0, r.jsx)(_a, {
              account: t
            }), (0, r.jsx)(va, {
              nickname: t.nickName,
              email: t.email,
              dob: t.dob
            }), (0, r.jsx)(Ta, {}), (0, r.jsx)(Ba, {})]
          })
        })
      };
      var Ya = function(e) {
          return e.None = "none", e.Friends = "friends", e.FriendsAndCrews = "friendsAndCrews", e.Everyone = "everyone", e
        }({}),
        Xa = function(e) {
          return e.ProfileVisibility = "profileVisibility", e.ProfileFriends = "profileFriends", e.ProfileLocation = "profileLocation", e.GameplayVisibility = "gameplayVisibility", e.GameplayComparison = "gameplayComparison", e
        }({}),
        Za = function(e) {
          return e.CrewInviteEmails = "crewInviteEmails", e.DirectMessageEmails = "directMessageEmails", e.FriendRequestEmails = "friendRequestEmails", e
        }({});
      const Wa = (0, _e.YK)({
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
          defaultMessage: "You can request a copy of the personal data we've collected about you at any time. Simply click the \"Request My Data button\", and we'll prepare your information and send it to your account email.",
          description: "The description for what requesting data will do",
          id: "privacy_request_data_description"
        }
      });

      function Ka(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var $a = function(e) {
        var t, n, i = e.gameplayVisibility,
          o = e.gameplayComparison,
          s = e.updatePrivacySettings,
          c = e.visibilityOptions,
          l = (0, L.A)(),
          d = (t = (0, a.useState)(!1), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ka(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ka(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          f = d[1],
          _ = function(e) {
            var t = e ? Ke.labels.profile_privacy_yes : Ke.labels.profile_privacy_no;
            lr(Ke.action.profile_privacy_gameplay_comparison, t), s(Xa.GameplayComparison, e ? Ya.Everyone : Ya.None)
          },
          p = o === Ya.Everyone;
        return (0, r.jsxs)(K, {
          children: [(0, r.jsxs)($, {
            children: [(0, r.jsx)(J, {
              children: l.formatMessage(Wa.privacy_game_stats_title)
            }), (0, r.jsx)(Q, {
              children: l.formatMessage(Wa.privacy_game_stats_description)
            })]
          }), (0, r.jsxs)(ee, {
            children: [(0, r.jsxs)(te, {
              isInteractable: !0,
              onClick: function() {
                return f(!0)
              },
              testId: "gameStatsVisibilityRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: l.formatMessage(Wa.privacy_game_stats_stats_visibility_sublabel)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Dropdown.Root, {
                  className: ja,
                  isOpen: u,
                  onClick: function(e) {
                    return e.stopPropagation()
                  },
                  onOpenChange: f,
                  onValueChange: function(e) {
                    var t, n = null === (t = c.find(function(t) {
                      return t.value === e
                    })) || void 0 === t ? void 0 : t.gaLabel;
                    lr(Ke.action.profile_privacy_gameplay_visibility, n), s(Xa.GameplayVisibility, e)
                  },
                  value: i,
                  children: [(0, r.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: l.formatMessage(Wa.privacy_game_stats_stats_visibility_dropdown_label)
                  }), (0, r.jsxs)(E.Dropdown.Trigger, {
                    testId: "gameplayVisibilityDropdown",
                    className: Ma,
                    children: [(0, r.jsx)(E.Dropdown.TriggerText, {
                      placeholder: l.formatMessage(Wa.privacy_game_stats_stats_visibility_dropdown_placeholder)
                    }), (0, r.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, r.jsx)(E.Dropdown.Portal, {
                    children: (0, r.jsx)(E.Dropdown.Content, {
                      className: xa,
                      children: (0, r.jsx)(E.Dropdown.ScrollArea, {
                        children: c.filter(function(e) {
                          return !e.hide
                        }).map(function(e) {
                          return (0, r.jsx)(E.Dropdown.Option, {
                            value: e.value,
                            testId: "".concat(e.value, "Option"),
                            children: (0, r.jsx)(E.Dropdown.OptionText, {
                              children: e.text
                            })
                          }, "visibility-option-".concat(e.value))
                        })
                      })
                    })
                  })]
                })
              })]
            }), (0, r.jsx)(ne, {
              thickness: "thin"
            }), (0, r.jsxs)(te, {
              isInteractable: !0,
              label: l.formatMessage(Wa.privacy_game_stats_allow_platform_comparison_switch_label),
              onClick: function() {
                return _(!p)
              },
              testId: "gameStatsFriendComparisonRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: l.formatMessage(Wa.privacy_game_stats_allow_platform_comparison_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Switch.Root, {
                  children: [(0, r.jsx)(E.Switch.Input, {
                    className: U,
                    onSelectedChange: _,
                    isSelected: p,
                    testId: "gameplayComparison"
                  }), (0, r.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: l.formatMessage(Wa.privacy_game_stats_allow_platform_comparison_switch_label)
                  })]
                })
              })]
            })]
          })]
        })
      };

      function Ja(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var Qa = function(e) {
        var t, n, i = e.profileVisibility,
          o = e.profileFriends,
          s = e.profileLocation,
          c = e.visibilityOptions,
          l = e.updatePrivacySettings,
          d = (0, L.A)(),
          u = (t = (0, a.useState)(!1), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Ja(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ja(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          f = u[0],
          _ = u[1],
          p = function(e) {
            var t = e ? Ke.labels.profile_privacy_yes : Ke.labels.profile_privacy_no;
            lr(Ke.action.profile_privacy_friends_visibility, t), l(Xa.ProfileFriends, e ? Ya.Everyone : Ya.None)
          },
          m = function(e) {
            var t = e ? Ke.labels.profile_privacy_yes : Ke.labels.profile_privacy_no;
            lr(Ke.action.profile_privacy_country_visibility, t), l(Xa.ProfileLocation, e ? Ya.Everyone : Ya.None)
          },
          h = o === Ya.Everyone,
          g = s === Ya.Everyone;
        return (0, r.jsxs)(K, {
          children: [(0, r.jsxs)($, {
            children: [(0, r.jsxs)(J, {
              children: [d.formatMessage(Wa.privacy_settings_title), (0, r.jsx)(ha, {
                side: "bottom",
                testIdPrefix: "privacy-settings",
                message: d.formatMessage(Wa.privacy_settings_tooltip_disclaimer)
              })]
            }), (0, r.jsx)(Q, {
              children: d.formatMessage(Wa.privacy_settings_description)
            })]
          }), (0, r.jsxs)(ee, {
            children: [(0, r.jsxs)(te, {
              isInteractable: !0,
              onClick: function() {
                return _(!0)
              },
              testId: "profileVisibilityRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: d.formatMessage(Wa.privacy_settings_visibility_sublabel)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Dropdown.Root, {
                  className: ja,
                  isOpen: f,
                  onClick: function(e) {
                    return e.stopPropagation()
                  },
                  onOpenChange: _,
                  onValueChange: function(e) {
                    var t, n = null === (t = c.find(function(t) {
                      return t.value === e
                    })) || void 0 === t ? void 0 : t.gaLabel;
                    lr(Ke.action.profile_privacy_visibility, n), l(Xa.ProfileVisibility, e)
                  },
                  value: i,
                  children: [(0, r.jsx)(E.Dropdown.Label, {
                    hideVisually: !0,
                    children: d.formatMessage(Wa.privacy_settings_visibility_dropdown_label)
                  }), (0, r.jsxs)(E.Dropdown.Trigger, {
                    testId: "profileVisibilityDropdown",
                    className: Ma,
                    children: [(0, r.jsx)(E.Dropdown.TriggerText, {
                      placeholder: d.formatMessage(Wa.privacy_settings_visibility_dropdown_placeholder)
                    }), (0, r.jsx)(E.Dropdown.TriggerIcon, {})]
                  }), (0, r.jsx)(E.Dropdown.Portal, {
                    children: (0, r.jsx)(E.Dropdown.Content, {
                      className: xa,
                      children: (0, r.jsx)(E.Dropdown.ScrollArea, {
                        children: c.filter(function(e) {
                          return !e.hide
                        }).map(function(e) {
                          return (0, r.jsx)(E.Dropdown.Option, {
                            value: e.value,
                            testId: "".concat(e.value, "Option"),
                            children: (0, r.jsx)(E.Dropdown.OptionText, {
                              children: e.text
                            })
                          }, "visibility-option-".concat(e.value))
                        })
                      })
                    })
                  })]
                })
              })]
            }), (0, r.jsx)(ne, {
              thickness: "thin"
            }), (0, r.jsxs)(te, {
              isInteractable: !0,
              label: d.formatMessage(Wa.privacy_settings_showfriends_switch_label),
              onClick: function() {
                return p(!h)
              },
              testId: "showFriendsRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: d.formatMessage(Wa.privacy_settings_showfriends_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Switch.Root, {
                  children: [(0, r.jsx)(E.Switch.Input, {
                    className: U,
                    onSelectedChange: p,
                    isSelected: h,
                    testId: "profileFriends",
                    onPress: function(e) {
                      return e.stopPropagation()
                    }
                  }), (0, r.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: d.formatMessage(Wa.privacy_settings_showfriends_switch_label)
                  })]
                })
              })]
            }), (0, r.jsx)(ne, {
              thickness: "thin"
            }), (0, r.jsxs)(te, {
              isInteractable: !0,
              label: d.formatMessage(Wa.privacy_settings_showcountry_switch_label),
              onClick: function() {
                return m(!g)
              },
              testId: "showLocationRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: d.formatMessage(Wa.privacy_settings_showcountry_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Switch.Root, {
                  children: [(0, r.jsx)(E.Switch.Input, {
                    className: U,
                    onSelectedChange: m,
                    isSelected: g,
                    testId: "profileLocation",
                    onPress: function(e) {
                      return e.stopPropagation()
                    }
                  }), (0, r.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: d.formatMessage(Wa.privacy_settings_showcountry_switch_label)
                  })]
                })
              })]
            })]
          })]
        })
      };

      function ei(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function ti(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var ni = function(e) {
        var t = e.isMinor,
          n = (0, L.A)(),
          i = [{
            text: n.formatMessage(Wa.privacy_settings_visibility_me_only_option),
            value: Ya.None,
            hide: !1,
            gaLabel: Ke.labels.profile_privacy_visibility_me_only
          }, {
            text: n.formatMessage(Wa.privacy_settings_visibility_friends_option),
            value: Ya.Friends,
            hide: !1,
            gaLabel: Ke.labels.profile_privacy_visibility_friends
          }, {
            text: n.formatMessage(Wa.privacy_settings_visibility_friends_and_crews_option),
            value: Ya.FriendsAndCrews,
            hide: t,
            gaLabel: Ke.labels.profile_privacy_visibility_friends_and_crews
          }, {
            text: n.formatMessage(Wa.privacy_settings_visibility_everyone_option),
            value: Ya.Everyone,
            hide: t,
            gaLabel: Ke.labels.profile_privacy_visibility_everyone
          }],
          o = rr({
            route: Be.GetPrivacySettings
          }),
          s = o.data,
          c = o.setData,
          l = o.loading,
          d = rr({
            route: Be.UpdatePrivacySettings,
            fetchOnInitial: !1
          }).fetch,
          u = (0, a.useCallback)((0, jt.A)(function(e, t) {
            return (n = function() {
              var n;
              return function(e, t) {
                var n, r, a, i = {
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
                      if (n) throw new TypeError("Generator is already executing.");
                      for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                        if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                        switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                            i.label++, r = s[1], s = [0];
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
                        s = [6, e], r = 0
                      } finally {
                        n = a = 0
                      }
                      if (5 & s[0]) throw s[1];
                      return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                      }
                    }([s, c])
                  }
                }
              }(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, d({
                      body: e
                    })];
                  case 1:
                    return (null == (n = r.sent()) ? void 0 : n.error) && c(t), [2]
                }
              })
            }, function() {
              var e = this,
                t = arguments;
              return new Promise(function(r, a) {
                var i = n.apply(e, t);

                function o(e) {
                  ei(i, r, a, o, s, "next", e)
                }

                function s(e) {
                  ei(i, r, a, o, s, "throw", e)
                }
                o(void 0)
              })
            })();
            var n
          }, 1e3), []),
          f = function(e, t) {
            var n = function(e, t) {
              return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n)
                }
                return t
              }(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e
            }(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  ti(e, t, n[t])
                })
              }
              return e
            }({}, s), ti({}, e, t));
            u(n, s), c(n)
          };
        return (0, r.jsx)(un, {
          isLoading: l,
          children: s && (0, r.jsxs)(W, {
            testId: "privacySettings",
            children: [(0, r.jsx)(Qa, {
              profileVisibility: s.profileVisibility,
              profileFriends: s.profileFriends,
              profileLocation: s.profileLocation,
              visibilityOptions: i,
              updatePrivacySettings: f
            }), (0, r.jsx)($a, {
              gameplayVisibility: s.gameplayVisibility,
              gameplayComparison: s.gameplayComparison,
              visibilityOptions: i,
              updatePrivacySettings: f
            })]
          })
        })
      };
      const ri = function(e) {
        var t = e.isLoading,
          n = (0, L.A)();
        return (0, r.jsx)(E.Dialog.Root, {
          isOpen: t,
          children: (0, r.jsx)(E.Dialog.Overlay, {
            testId: "verifyEmailChangedOverlay",
            children: (0, r.jsx)(E.Dialog.Content, {
              "aria-describedby": void 0,
              className: "pb0kad1",
              onEscapeKeyDown: function(e) {
                return e.preventDefault()
              },
              onInteractOutside: function(e) {
                return e.preventDefault()
              },
              testId: "verifyEmailChangedLoading",
              children: (0, r.jsx)(E.Dialog.ScrollArea, {
                children: (0, r.jsxs)(E.Dialog.Layout, {
                  children: [(0, r.jsx)(E.Loader, {
                    className: "pb0kad2",
                    size: "LG",
                    testId: "loader"
                  }), (0, r.jsx)(E.Dialog.Title, {
                    children: n.formatMessage(Ze.email_change_verifying_new_email)
                  })]
                })
              })
            })
          })
        })
      };

      function ai(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      const ii = function() {
          var e, t, n = (0, L.A)(),
            o = Ee(),
            s = (e = (0, i.useSearchParams)(), t = 1, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return ai(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ai(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            c = (0, i.useNavigate)(),
            l = s.get("emailCookie"),
            d = rr({
              fetchOnInitial: !1,
              route: Be.UpdateEmail
            }),
            u = d.fetch,
            f = d.loading,
            _ = rr({
              fetchOnInitial: !1,
              route: Be.ProfileOverview
            }),
            p = _.fetch,
            m = _.loading;
          (0, a.useEffect)(function() {
            l && u({
              body: {
                emailCookie: l
              }
            }).then(function(e) {
              e.error || p({}).then(function(e) {
                e.error || o.displayNewToast({
                  appearance: "success",
                  message: n.formatMessage(Ze.email_change_success)
                })
              }), c("/account")
            })
          }, []);
          var h = Boolean(l) && (f || m);
          return (0, r.jsx)(ri, {
            isLoading: h
          })
        },
        oi = (0, _e.YK)({
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
            defaultMessage: "Navigate to the details page for {connection}",
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
            defaultMessage: "Dropdown to select the account visibility setting for the current account connection",
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
            defaultMessage: "Navigate to unlink {connection}",
            description: "Text for the unlink button aria label on the connection details page",
            id: "connections_unlink_button_aria_label"
          },
          connections_unlinkable_footer_text: {
            defaultMessage: "{connection} accounts are permanently linked to Rockstar Games accounts. If you are having issues with your account, please contact <steamSupportAnchor>customer support</steamSupportAnchor>",
            description: "Footer text that appears specifically in the details page for a Steam account",
            id: "connections_unlinkable_footer_text"
          }
        });
      var si = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          viewBox: "0 0 40 40",
          "aria-label": n,
          role: "img",
          children: [(0, r.jsxs)("g", {
            children: [(0, r.jsx)("path", {
              fill: "#f90",
              fillRule: "evenodd",
              d: "M24.8147,23.3995c-2.3239,1.715-5.6928,2.6269-8.5941,2.6269-4.0659,0-7.7273-1.5029-10.498-4.0047-.2176-.1965-.0235-.4647.238-.3126,2.9893,1.7395,6.6861,2.7871,10.5042,2.7871,2.5756,0,5.4068-.5345,8.0121-1.6396.3929-.1666.7222.2588.3378.5429h0Z"
            }), (0, r.jsx)("path", {
              fill: "#f90",
              fillRule: "evenodd",
              d: "M25.7817,22.2955c-.2972-.3805-1.9646-.1803-2.7139-.0905-.2269.0272-.2621-.1711-.0576-.3147,1.3303-.9343,3.5099-.6646,3.7633-.3517.2551.3155-.0671,2.5008-1.3136,3.5437-.1919.1603-.3743.0748-.2891-.137.2805-.7005.9084-2.2689.6109-2.6497h0Z"
            })]
          }), (0, r.jsxs)("g", {
            children: [(0, r.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M23.1206,15.29v-.9079c.0009-.1383.1048-.2302.2302-.2298l4.0691-.0004c.1301,0,.2346.0947.2346.229v.7786c-.0013.1307-.1113.301-.3064.5715l-2.1078,3.0093c.7824-.0183,1.61.099,2.3209.4985.1603.09.2033.2233.2158.3542v.9688c0,.1333-.1461.2879-.2997.2074-1.2523-.656-2.9143-.7276-4.2991.0082-.1416.0753-.2895-.077-.2895-.2107v-.9207c0-.1475.0028-.3994.1514-.6239l2.4419-3.5033-2.1262-.0002c-.1299,0-.2343-.0926-.2352-.2286h0Z"
            }), (0, r.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M31.1686,15.332c-.9129,0-.9705,1.243-.9705,2.0186s-.0115,2.4331.9593,2.4331c.9591,0,1.0052-1.3369,1.0052-2.1522,0-.5347-.0231-1.1766-.1852-1.6847-.1385-.4413-.416-.6149-.8088-.6149h0ZM31.1574,14.0349c1.8372,0,2.8307,1.5778,2.8307,3.5831,0,1.9383-1.0973,3.4762-2.8307,3.4762-1.8027,0-2.7851-1.578-2.7851-3.543,0-1.9788.9937-3.5162,2.7851-3.5162h0Z"
            }), (0, r.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M21.1255,20.9444c-.0818.0736-.2314.076-.2924.0288-.423-.3272-.7096-.8249-.7096-.8249-.6796.6921-1.1609.8999-2.0409.8999-1.0421,0-1.8528-.6433-1.8528-1.9294,0-1.0049.5442-1.6882,1.3202-2.0232.6715-.2949,1.6097-.3484,2.3274-.429,0,0,.06-.7757-.1503-1.0584-.1629-.2192-.4402-.3217-.6947-.3217-.4593-.0019-.9029.2479-.991.7283-.0251.1373-.1266.2527-.2334.2412l-1.1854-.1284c-.0908-.0105-.2141-.1041-.1849-.2589.2757-1.4555,1.5901-1.8952,2.7682-1.8952.6022,0,1.3896.1605,1.8645.6163.602.5627.5443,1.3132.5443,2.1307v1.9282c0,.5804.2408.8347.467,1.1471.0789.1129.0969.2466-.0038.3291-.253.212-.9523.8194-.9523.8194h0ZM19.8773,17.9262c0,.4826.0118.8842-.2314,1.3132-.1968.3481-.5096.5627-.857.5627-.4747,0-.7527-.3619-.7527-.8979,0-1.0543.9459-1.2459,1.8411-1.2459v.2679h0Z"
            }), (0, r.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M4.8974,20.9444c-.0818.0736-.2314.076-.2924.0288-.423-.3272-.7096-.8249-.7096-.8249-.6797.6921-1.1608.8999-2.0409.8999C.8123,21.0482.0017,20.4049.0017,19.1188c0-1.0049.5441-1.6882,1.3201-2.0232.6715-.2949,1.6097-.3484,2.3274-.429,0,0,.0599-.7757-.1503-1.0584-.163-.2192-.4403-.3217-.6948-.3217-.4592-.0019-.9029.2479-.9909.7283-.0252.1373-.1266.2527-.2334.2412l-1.1855-.1284c-.0909-.0105-.2141-.1041-.1849-.2589.2757-1.4555,1.5901-1.8952,2.7683-1.8952.6022,0,1.3896.1605,1.8645.6163.602.5627.5443,1.3132.5443,2.1307v1.9282c0,.5804.2409.8347.467,1.1471.0789.1129.097.2466-.0039.3291-.2529.212-.9523.8194-.9523.8194h0ZM3.6493,17.9262c0,.4826.0116.8842-.2315,1.3132-.1967.3481-.5095.5627-.8569.5627-.4746,0-.7527-.3619-.7527-.8979,0-1.0543.9459-1.2459,1.8412-1.2459v.2679h0Z"
            }), (0, r.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M8.5175,17.3638c0-.7353-.0348-1.7511.8551-1.7511.878,0,.7625,1.0426.7625,1.7511l.0012,3.3683c0,.1219.0979.2202.2223.2281h1.2365c.1319,0,.2386-.1019.2386-.2286v-3.3678c0-.3611-.0115-.8956.1155-1.2167.1272-.3208.4393-.5214.7398-.5214.358,0,.6354.1205.7278.5484.0579.254.0348.9226.0348,1.1896l.0004,3.3683c0,.1219.0977.2202.222.2281h1.2364c.1321,0,.2388-.1019.2388-.2286l.0012-4.0094c0-.682.0807-1.4572-.3122-1.9921-.3466-.4814-.9128-.6953-1.4328-.6953-.7279,0-1.4097.3744-1.7103,1.1766-.3466-.8022-.8321-1.1766-1.6062-1.1766-.7625,0-1.3288.3744-1.6291,1.1766h-.0233v-.8113c0-.1277-.1035-.2313-.2313-.2313h-1.1551c-.1277,0-.2312.1035-.2312.2313v6.3288c0,.1277.1035.2312.2312.2312h1.2361c.1277,0,.2313-.1035.2313-.2312v-3.3651h0Z"
            }), (0, r.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M36.6126,20.729c0,.1277-.1035.2312-.2312.2312h-1.2362c-.1276,0-.2312-.1035-.2312-.2312v-6.3288c0-.1277.1036-.2313.2312-.2313h1.143c.1339,0,.2312.1077.2312.1806v.9688h.0238c.3468-.8692.8318-1.2835,1.6869-1.2835.5548,0,1.0979.2004,1.4446.7488.3235.5079.3235,1.3635.3235,1.9786v3.998c-.0138.1125-.115.1999-.2374.1999h-1.2408c-.1147-.0073-.2071-.0916-.2203-.1999l.002-3.839c0-1.2844-.4921-1.3221-.7761-1.3221-.3304,0-.5961.2579-.7123.4987-.1732.3879-.2009.7847-.2009,1.2129v3.4183h.0001Z"
            })]
          })]
        })
      });
      si.displayName = "amazon";
      var ci = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsx)("svg", {
          id: "Discord-Logo",
          viewBox: "0 0 58.05 44",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": n,
          role: "img",
          children: (0, r.jsx)("path", {
            fill: "#5865f2",
            id: "Discord-Symbol-Blurple",
            d: "M37.19,0c-.57,1.01-1.08,2.05-1.54,3.11-4.4-.66-8.88-.66-13.29,0-.45-1.06-.97-2.11-1.54-3.11-4.13.71-8.16,1.94-11.98,3.69C1.27,14.91-.78,25.84.24,36.61c4.43,3.28,9.4,5.78,14.69,7.37,1.19-1.6,2.25-3.3,3.15-5.07-1.71-.64-3.37-1.44-4.95-2.36.42-.3.82-.61,1.22-.91,9.3,4.38,20.06,4.38,29.37,0,.39.32.8.64,1.22.91-1.59.94-3.24,1.72-4.97,2.37.9,1.77,1.96,3.47,3.15,5.07,5.29-1.6,10.26-4.09,14.69-7.36,1.2-12.5-2.06-23.34-8.62-32.93-3.81-1.75-7.84-2.99-11.97-3.68v-.02ZM19.38,29.98c-2.86,0-5.23-2.59-5.23-5.8s2.28-5.81,5.22-5.81,5.28,2.62,5.23,5.81c-.05,3.19-2.3,5.8-5.22,5.8ZM38.66,29.98c-2.87,0-5.22-2.59-5.22-5.8s2.28-5.81,5.22-5.81,5.27,2.62,5.22,5.81c-.05,3.19-2.3,5.8-5.22,5.8Z"
          })
        })
      });
      ci.displayName = "discord";
      var li = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsx)("svg", {
          version: "1.1",
          id: "EGS-Logotype-2023-Vertical-Black",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 376.35 430",
          width: "100%",
          xmlSpace: "preserve",
          "aria-label": n,
          role: "img",
          children: (0, r.jsxs)("g", {
            children: [(0, r.jsx)("path", {
              d: "M170.46,128.53v-41.9c0-6.67-3.13-9.76-9.62-9.76h-10.58v61.42h10.58C167.34,138.29,170.46,135.2,170.46,128.53z",
              fill: "#FFFFFF"
            }), (0, r.jsx)("polygon", {
              points: "136.1,277.2 130.34,291.56 141.8,291.56 ",
              fill: "#FFFFFF"
            }), (0, r.jsx)("path", {
              d: "M341.93,0H34.42C9.2,0,0,9.17,0,34.02v302.9c0,3.9,0.7,10.91,1.97,13.91c1.27,3,2.45,5.46,4.8,7.65 c2.43,2.26,6.63,4.61,8.65,5.53l163.01,68.59c3,1.27,6.29,1.97,9.74,1.97c3.46,0,6.75-0.7,9.74-1.97L360.93,364 c2.02-0.92,6.22-3.27,8.65-5.53c2.35-2.19,3.53-4.65,4.8-7.65c1.27-3,1.97-10.01,1.97-13.91V34.02C376.35,9.17,367.15,0,341.93,0z M207.81,54.5h25.74v166.63h-25.74V54.5z M209.14,260.97h14.96v50.5h-14.09v-29.01l-13.07,19.77h-0.29l-13-19.62v28.86h-13.87 v-50.5h14.96l12.19,19.55L209.14,260.97z M124.52,54.5h40.41c20.93,0,31.27,10.23,31.27,30.95v44.28 c0,20.71-10.34,30.94-31.27,30.94h-14.67v60.46h-25.74V54.5z M54.36,54.5h57.25v23.09H80.1v47.14h30.3v23.09H80.1v50.23h31.99 v23.09H54.36V54.5z M103.13,304.74c-2.73,2.21-5.94,4.07-9.64,5.56c-3.7,1.49-7.88,2.24-12.56,2.24c-3.99,0-7.68-0.65-11.06-1.95 c-3.39-1.3-6.31-3.1-8.8-5.41c-2.48-2.31-4.43-5.06-5.84-8.26c-1.41-3.19-2.11-6.7-2.11-10.49v-0.15c0-3.7,0.69-7.15,2.08-10.32 c1.39-3.17,3.3-5.95,5.73-8.33c2.44-2.38,5.34-4.24,8.72-5.59c3.38-1.34,7.04-2.02,10.98-2.02c4.53,0,8.43,0.65,11.72,1.95 c3.28,1.3,6.29,3.1,9.02,5.41l-8.32,9.88c-1.85-1.54-3.74-2.72-5.66-3.53c-1.92-0.82-4.15-1.23-6.68-1.23 c-1.85,0-3.56,0.36-5.15,1.08c-1.58,0.72-2.95,1.71-4.12,2.96c-1.17,1.25-2.09,2.72-2.77,4.4c-0.68,1.68-1.02,3.49-1.02,5.41v0.15 c0,2.02,0.34,3.9,1.02,5.62c0.68,1.73,1.65,3.21,2.88,4.44c1.24,1.23,2.7,2.19,4.38,2.89c1.68,0.69,3.54,1.05,5.59,1.05 c3.31,0,6.03-0.69,8.18-2.09v-6.13H79.63V282h23.5V304.74z M107.63,311.47l21.77-50.87h13.65l21.76,50.87h-15.18l-3.73-9.02h-19.71 l-3.65,9.02H107.63z M250.3,367.36c-0.07,0.16-0.17,0.3-0.29,0.42c-0.12,0.12-0.26,0.22-0.42,0.28l-59.48,25.03 c-0.64,0.27-1.34,0.42-2.07,0.42c-0.73,0-1.43-0.15-2.07-0.42l-59.02-25.03c-0.16-0.07-0.3-0.17-0.42-0.28 c-0.12-0.12-0.22-0.26-0.29-0.42c-0.07-0.16-0.1-0.33-0.1-0.52s0.04-0.36,0.1-0.52c0.07-0.16,0.17-0.3,0.29-0.42 c0.12-0.12,0.26-0.22,0.42-0.29c0.16-0.07,0.33-0.1,0.52-0.1h121.6c0.18,0,0.36,0.04,0.52,0.1c0.16,0.07,0.3,0.16,0.42,0.29 c0.12,0.12,0.22,0.26,0.29,0.42c0.07,0.16,0.1,0.33,0.1,0.52S250.36,367.2,250.3,367.36z M275.04,311.47h-41.47v-50.5h41.1v11.91 h-27.09v7.65h24.53v11.04h-24.53v8.01h27.45V311.47z M247.15,191.61V84.01c0-20.71,10.35-30.95,31.27-30.95h12.51 c20.93,0,31.03,10,31.03,30.71v34.04h-25.25V85.2c0-6.67-3.13-9.76-9.62-9.76h-4.33c-6.74,0-9.86,3.09-9.86,9.76v105.22 c0,6.67,3.13,9.76,9.86,9.76h4.81c6.49,0,9.62-3.09,9.62-9.76v-37.61h25.26v38.8c0,20.71-10.34,30.95-31.27,30.95h-12.75 C257.5,222.56,247.15,212.33,247.15,191.61z M323.42,295.93c0,2.6-0.5,4.91-1.5,6.93s-2.4,3.74-4.2,5.16 c-1.8,1.42-3.96,2.5-6.5,3.25c-2.53,0.75-5.35,1.12-8.47,1.12c-4.58,0-8.92-0.69-13.03-2.09c-4.11-1.4-7.75-3.49-10.91-6.28 l7.88-9.31c5.11,4.04,10.63,6.06,16.57,6.06c1.9,0,3.35-0.3,4.34-0.9c1-0.6,1.5-1.45,1.5-2.56v-0.15c0-0.53-0.13-1-0.37-1.4 c-0.24-0.41-0.69-0.8-1.35-1.19s-1.54-0.76-2.62-1.12c-1.1-0.36-2.51-0.73-4.27-1.12c-2.73-0.63-5.26-1.31-7.59-2.05 c-2.33-0.75-4.37-1.71-6.1-2.89c-1.73-1.18-3.09-2.65-4.09-4.4s-1.5-3.94-1.5-6.53v-0.15c0-2.35,0.45-4.52,1.35-6.5 c0.9-1.98,2.22-3.68,3.94-5.12c1.72-1.44,3.81-2.56,6.24-3.36c2.44-0.79,5.19-1.19,8.25-1.19c4.38,0,8.29,0.56,11.72,1.7 s6.53,2.8,9.31,5.02l-7.08,9.88c-2.33-1.64-4.73-2.87-7.19-3.72c-2.46-0.84-4.83-1.27-7.11-1.27c-1.7,0-2.99,0.32-3.83,0.94 c-0.85,0.62-1.28,1.4-1.28,2.31v0.15c0,0.58,0.13,1.08,0.4,1.51c0.27,0.43,0.73,0.83,1.39,1.19c0.66,0.36,1.56,0.73,2.7,1.08 c1.14,0.36,2.59,0.73,4.34,1.12c2.92,0.62,5.56,1.36,7.92,2.2c2.36,0.84,4.36,1.87,6.03,3.06c1.65,1.2,2.92,2.65,3.79,4.37 c0.88,1.71,1.32,3.74,1.32,6.1V295.93z",
              fill: "#FFFFFF"
            })]
          })
        })
      });
      li.displayName = "epic games";
      var di = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0",
          y: "0",
          viewBox: "0 0 43.12 44",
          width: "100%",
          "aria-label": n,
          role: "img",
          children: [(0, r.jsx)("path", {
            fill: "#4285f4",
            d: "M43.12,22.5c0-1.56-.14-3.06-.4-4.5h-20.72v8.51h11.84c-.51,2.75-2.06,5.08-4.39,6.64v5.52h7.11c4.16-3.83,6.56-9.47,6.56-16.17Z"
          }), (0, r.jsx)("path", {
            fill: "#34a853",
            d: "M22,44c5.94,0,10.92-1.97,14.56-5.33l-7.11-5.52c-1.97,1.32-4.49,2.1-7.45,2.1-5.73,0-10.58-3.87-12.31-9.07H2.34v5.7c3.62,7.19,11.06,12.12,19.66,12.12Z"
          }), (0, r.jsx)("path", {
            fill: "#fbbc04",
            d: "M9.69,26.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H2.34c-1.49,2.97-2.34,6.33-2.34,9.88s.85,6.91,2.34,9.88l7.35-5.7Z"
          }), (0, r.jsx)("path", {
            fill: "#e94235",
            d: "M22,8.75c3.23,0,6.13,1.11,8.41,3.29l6.31-6.31c-3.81-3.55-8.79-5.73-14.72-5.73C13.4,0,5.96,4.93,2.34,12.12l7.35,5.7c1.73-5.2,6.58-9.07,12.31-9.07Z"
          })]
        })
      });
      di.displayName = "google";
      var ui = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 283.5 283.5",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": n,
          role: "img",
          children: [(0, r.jsx)("path", {
            d: "m0 0h283.5v283.5h-283.5z",
            fill: "#e60012"
          }), (0, r.jsx)("path", {
            d: "m128.4 241.6h6.7v-30h-6.7zm-34.8-48.8 7.9 10.6h3.1v-15.9h-3.2v10.5l-7.8-10.4h-3.2v15.9h3.2zm35.8-5.3h-13.5v3.4h5.1v12.5h3.4v-12.5h5zm-20.7 45.8-6.4-21.8h-5.3l-6.3 21.7-5.8-21.7h-6.5l8.5 30h7.2l5.6-19.8 5.6 19.8h7.2l8.5-30h-6.5zm45.1-65.2h19.6c18 0 32.6-14.6 32.6-32.6v-62c0-18-14.6-32.6-32.6-32.6h-19.7c-.5 0-.8.4-.8.8v125.5c0 .5.4.9.9.9zm24.2-70.1c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9c.1-7.1 5.8-12.9 12.9-12.9zm-99.6 89.5h-3.5v15.9h3.5zm-26.6 5.3 7.9 10.6h3.1v-15.9h-3.2v10.5l-7.8-10.4h-3.2v15.9h3.2zm9.4 30.6h-.2c-3.7-.6-6.8-1.2-7.1-3.3 0-.3 0-1 .5-1.7 1-1.2 3.3-1.7 6.7-1.7 3.9 0 7.8 1.5 9.2 2.1l2.1-5.2c-1.5-.6-6.3-2.3-11.6-2.3-6.5 0-13.4 3.2-13.4 9 0 4.7 3.3 7.2 11.9 8.7 6.1 1 9.4 1.6 9.3 4.2-.1 1.4-1.2 3.8-8 3.8-5.5 0-9.4-2-10.7-2.8l-2.8 5.1c1.5.8 6.6 3.2 13.1 3.2 9.5 0 14.6-3.3 14.6-9.6.1-4.5-2.1-7.5-13.6-9.5zm37.4-144.3c0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12c-6.7 0-12 5.3-12 12zm54.8 121.4h-9.1v-3.7h8.4v-2.9h-8.4v-3.4h9.1v-2.9h-12.4v15.9h12.4zm74.4-13.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5c-.1-4.7-3.9-8.5-8.5-8.5zm0 13.4c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9zm1 23h-14v-11.8h-6.2v30h6.2v-12h14v12h6.2v-30h-6.2zm8.7 15.1h1.3v3.1h.7v-3.1h1.2v-.7h-3.2zm6.9-.8-1 2.8-1-2.8h-1.1v3.8h.7v-2.9l1 2.9h.7l1-2.9v2.9h.7v-3.8zm-55.7-20.4c3.4 0 6.5 1.8 8.2 4.7l4.9-4.2c-3-4.4-7.9-7.1-13.3-7.1-8.8 0-16 7.2-16 16s7.2 16 16 16c5.4 0 10.3-2.6 13.3-7.1l-4.9-4.2c-1.7 2.8-4.8 4.7-8.2 4.7-5.2 0-9.5-4.2-9.5-9.3s4.2-9.5 9.5-9.5zm-46.3.6h9.6v23.6h6.5v-23.6h9.4v-6.4h-25.4v6.4zm38.4-14.5v-15.9h-3.2v10.5l-7.8-10.4h-3.2v15.9h3.2v-10.6l7.9 10.6h3.1zm-41.6-162.5h-27.8c-18 0-32.6 14.6-32.6 32.6v62c0 18 14.6 32.6 32.6 32.6h27.8c.5 0 .9-.4.9-.9v-125.4c0-.5-.4-.9-.9-.9zm-9.3 117h-18.5c-6 0-11.6-2.3-15.8-6.6-4.2-4.2-6.6-9.8-6.6-15.8v-62c0-6 2.3-11.6 6.6-15.8 4.2-4.2 9.8-6.6 15.8-6.6h18.5zm70.9 29.6h-6.6v15.9h6.6c4.5 0 8.2-3.6 8.2-7.9 0-4.4-3.7-8-8.2-8zm .2 12.6h-3.5v-9.2h3.5c2.5 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6z",
            fill: "#fff"
          })]
        })
      });
      ui.displayName = "nintendo switch";
      var fi = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100%",
          viewBox: "0 0 44 44",
          "aria-label": n,
          role: "img",
          children: [(0, r.jsx)("circle", {
            fill: "#274598",
            cx: "22",
            cy: "22",
            r: "22"
          }), (0, r.jsx)("path", {
            id: "PSF_MARK_BLUE",
            fill: "#fff",
            d: "M17.79,9.41c1.99.37,4.88,1.24,6.44,1.76,3.95,1.36,5.29,3.05,5.29,6.85s-2.29,5.12-5.2,3.72v-6.91c0-.81-.15-1.56-.91-1.77-.58-.19-.95.36-.95,1.17v17.31l-4.67-1.48V9.41M23.36,31.21l10.2-3.66s1.37-.51,1.94-1.21c.56-.71.31-1.73-1.89-2.43-1.96-.74-4.45-.99-6.48-.77-2.03.22-3.48.73-3.48.73l-.29.09v2.81l5-1.76c.86-.31,2.1-.37,2.8-.14.69.22.56.65-.29.97l-7.51,2.67v2.7ZM16.42,28.8c.15-.03.32-.05.47-.08v-2.42l-2.31.83c-.85.31-2.09.38-2.79.14-.69-.22-.56-.65.29-.96l4.81-1.73v-2.72l-6.7,2.39s-1.62.53-2.57,1.23c-1.03.77-.65,2.1,1.61,2.73,2.43.8,4.89.96,7.19.58ZM32.8,30.42c0,.62.45,1.11,1.11,1.11s1.1-.48,1.1-1.11-.44-1.11-1.1-1.11-1.11.49-1.11,1.11ZM32.97,30.42c0-.52.37-.94.93-.94s.93.42.93.94-.37.94-.93.94-.93-.42-.93-.94ZM33.47,31.06h.23v-.54h.15c.19,0,.23.05.27.19.03.09.07.25.1.35h.23c-.04-.12-.08-.26-.13-.4-.04-.15-.1-.21-.18-.23h0c.16-.05.23-.16.23-.32,0-.26-.17-.33-.41-.33h-.51v1.28ZM33.7,29.94h.22c.13,0,.25.03.25.2,0,.15-.1.21-.26.21h-.2v-.41Z"
          })]
        })
      });
      fi.displayName = "playstation";
      var _i = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsxs)("svg", {
          fill: "#fff",
          viewBox: "0 0 44 44",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": n,
          role: "img",
          children: [(0, r.jsx)("use", {
            xlinkHref: "#B",
            x: ".5",
            y: ".5"
          }), (0, r.jsx)("defs", {
            children: (0, r.jsxs)("linearGradient", {
              id: "A",
              x1: "-900.43",
              y1: "486.04",
              x2: "-900.39",
              y2: "486.04",
              gradientTransform: "translate(-527386.11 900788) rotate(91.99) scale(1020.12 -1020.12)",
              gradientUnits: "userSpaceOnUse",
              children: [(0, r.jsx)("stop", {
                offset: "0",
                stopColor: "#050e17"
              }), (0, r.jsx)("stop", {
                offset: "1",
                stopColor: "#007fac"
              })]
            })
          }), (0, r.jsx)("symbol", {
            id: "B",
            children: (0, r.jsxs)("g", {
              children: [(0, r.jsx)("circle", {
                fill: "url(#A)",
                cx: "22",
                cy: "22",
                r: "22"
              }), (0, r.jsxs)("g", {
                children: [(0, r.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M.12,19.69l16.47,6.96c1.94.82,2.85,3.06,2.03,4.99-.82,1.94-3.06,2.85-4.99,2.03L.92,28.3c-.6-2-.92-4.11-.92-6.3,0-.78.04-1.55.12-2.31Z"
                }), (0, r.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M29.15,6.92c4.96,0,8.99,4.03,8.99,8.99s-4.03,8.99-8.99,8.99-8.99-4.03-8.99-8.99,4.03-8.99,8.99-8.99ZM29.37,10.22c-3.03,0-5.5,2.5-5.5,5.57s2.47,5.57,5.5,5.57,5.5-2.5,5.5-5.57-2.47-5.57-5.5-5.57ZM29.37,11.47c2.35,0,4.25,1.94,4.25,4.33s-1.9,4.33-4.25,4.33-4.25-1.94-4.25-4.33,1.9-4.33,4.25-4.33Z"
                }), (0, r.jsx)("path", {
                  fill: "#fff",
                  fillRule: "evenodd",
                  d: "M15.65,23.57l5.26-7.52,8.14,8.52-7.54,5.14c0,.09,0,.18,0,.27,0,3.56-2.89,6.45-6.45,6.45s-6.45-2.89-6.45-6.45,2.89-6.45,6.45-6.45c.19,0,.39,0,.58.03ZM15.27,25.38c2.6,0,4.7,2.11,4.7,4.7s-2.11,4.7-4.7,4.7-4.7-2.11-4.7-4.7,2.11-4.7,4.7-4.7Z"
                })]
              })]
            })
          })]
        })
      });
      _i.displayName = "steam";
      var pi = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 37.71 44",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          "aria-label": n,
          role: "img",
          children: [(0, r.jsx)("style", {
            type: "text/css",
            children: ".cls-1{fill:#fff;}.cls-2{fill:#9146ff;}"
          }), (0, r.jsxs)("g", {
            children: [(0, r.jsx)("polygon", {
              className: "cls-1",
              points: "34.57 20.43 28.29 26.71 22 26.71 16.5 32.21 16.5 26.71 9.43 26.71 9.43 3.14 34.57 3.14 34.57 20.43"
            }), (0, r.jsx)("g", {
              children: (0, r.jsxs)("g", {
                id: "Layer_1-2",
                children: [(0, r.jsx)("path", {
                  className: "cls-2",
                  d: "M7.86,0L0,7.86v28.29h9.43v7.86l7.86-7.86h6.29l14.14-14.14V0H7.86ZM34.57,20.43l-6.29,6.29h-6.29l-5.5,5.5v-5.5h-7.07V3.14h25.14v17.29Z"
                }), (0, r.jsx)("rect", {
                  className: "cls-2",
                  x: "26.71",
                  y: "8.64",
                  width: "3.14",
                  height: "9.43"
                }), (0, r.jsx)("rect", {
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
      pi.displayName = "twitch";
      var mi = (0, a.forwardRef)(function(e, t) {
        var n = e.label;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100%",
          viewBox: "0 0 44 44",
          "aria-label": n,
          role: "img",
          children: (0, r.jsx)("path", {
            fill: "#107c10",
            d: "M22,17.64s.06.02.07.04c6.58,5,17.85,17.38,14.41,20.88-3.87,3.39-8.94,5.44-14.48,5.44-5.55,0-10.61-2.05-14.48-5.44-3.44-3.5,7.83-15.88,14.41-20.88.02-.01.05-.04.07-.04ZM33.46,3.22c-3.37-2-7.02-3.22-11.46-3.22s-8.09,1.22-11.46,3.22c-.04.02-.06.07-.04.11.02.04.06.05.11.04,4.26-.92,10.73,2.76,11.34,3.13.01,0,.03.02.05.02s.03,0,.05-.02c.61-.37,7.08-4.05,11.34-3.13.04.01.09,0,.11-.04.02-.04,0-.09-.04-.11ZM6.6,6.31s-.07.05-.1.07C2.49,10.37,0,15.89,0,22c0,5.01,1.68,9.63,4.5,13.33.03.04.08.06.12.04.04-.02.04-.07.03-.11-1.68-5.18,6.9-17.76,11.33-23.03.02-.02.03-.04.03-.06,0-.03-.02-.05-.04-.07C9.25,5.41,6.97,6.12,6.6,6.31ZM28.04,12.09s-.04.04-.04.07c0,.02.01.05.03.06,4.43,5.27,13,17.84,11.33,23.03-.01.04-.01.09.03.11.04.02.09,0,.12-.04,2.82-3.7,4.5-8.32,4.5-13.33,0-6.11-2.49-11.63-6.5-15.61-.03-.03-.06-.06-.1-.07-.37-.19-2.65-.9-9.36,5.78Z"
          })
        })
      });
      mi.displayName = "xbox";
      var hi = {
        amazon: si,
        discord: ci,
        epic: li,
        google: di,
        nintendoswitch: ui,
        np: fi,
        steam: _i,
        twitch: pi,
        xbl: mi,
        xblpc: mi
      };
      const gi = n.p + "9860050e61fdc8409fe27a5988edaff1.png";

      function bi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function yi(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function vi(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              yi(i, r, a, o, s, "next", e)
            }

            function s(e) {
              yi(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function wi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function ji(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            wi(e, t, n[t])
          })
        }
        return e
      }

      function xi(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Mi(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
      var ki = function(e) {
        var t, n, i = e.currentConnection,
          o = e.clearSelectedService,
          s = e.setSelectedService,
          c = (0, L.A)(),
          l = ke().getAccessToken,
          d = (t = (0, a.useState)(!1), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return bi(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bi(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          f = d[1],
          _ = rr({
            route: Be.UpdatePlayerAccountVisibility,
            fetchOnInitial: !1
          }),
          p = _.fetch,
          h = _.loading,
          g = rr({
            fetchOnInitial: !1,
            route: Be.GetLinkedAccounts
          }),
          b = g.data,
          y = g.setData,
          v = function() {
            return vi(function() {
              var e, t;
              return Mi(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, l()];
                  case 1:
                    return e = n.sent(), t = m.getUnlinkUrl({
                      accessToken: e,
                      lang: c.locale,
                      onlineService: i.onlineServiceName
                    }), window.location.href = t, [2]
                }
              })
            })()
          },
          w = [{
            level: Ya.None,
            message: oi.connections_visibility_me_only
          }, {
            level: Ya.Friends,
            message: oi.connections_visibility_friends
          }, {
            level: Ya.FriendsAndCrews,
            message: oi.connections_visibility_friends_and_crews
          }, {
            level: Ya.Everyone,
            message: oi.connections_visibility_everyone
          }],
          j = function(e) {
            var t = w.find(function(t) {
              return t.level === e
            });
            return c.formatMessage(t.message)
          },
          x = c.formatMessage(oi.connections_unlink_button_text),
          M = i.gamerTag ? i.gamerTag : c.formatMessage(oi.connections_account_name_unavailable),
          k = c.formatMessage(oi.connections_linked_date, {
            date: In({
              dateString: i.linkedDate,
              locale: c.locale
            })
          }),
          O = x + M + k;
        return (0, r.jsx)("div", {
          className: "_1si1s9p0",
          children: (0, r.jsx)(W, {
            testId: "connections-details-root",
            children: (0, r.jsxs)(K, {
              children: [(0, r.jsx)($, {
                children: (0, r.jsxs)(sn, {
                  children: [(0, r.jsx)(cn, {
                    children: (0, r.jsx)(E.IconButton, {
                      icon: "ChevronLeft",
                      appearance: "tertiary",
                      size: "LG",
                      testId: "backButton",
                      label: c.formatMessage(oi.connections_header_nav_aria_label),
                      onClick: function() {
                        return o()
                      }
                    })
                  }), (0, r.jsx)(ln, {
                    children: (0, r.jsx)(E.Heading, {
                      level: 6,
                      testId: "serviceName",
                      children: i.serviceDisplayName
                    })
                  })]
                })
              }), (0, r.jsxs)(ee, {
                children: [(0, r.jsxs)(te, xi(ji({}, i.isUnlinkable && {
                  isInteractable: !0,
                  label: O,
                  onClick: v
                }), {
                  testId: "linkInfoRow",
                  children: [(0, r.jsxs)(ae, {
                    children: [(0, r.jsx)(ce, {
                      children: (0, r.jsx)("img", {
                        className: "_1si1s9p1",
                        "data-testid": "linked-account-avatar",
                        src: i.avatarUrl,
                        alt: c.formatMessage(oi.connections_linked_avatar_icon_aria_label, {
                          connection: i.serviceDisplayName
                        }),
                        onError: function(e) {
                          e.target.src = gi
                        }
                      })
                    }), (0, r.jsxs)(ie, {
                      children: [(0, r.jsx)(oe, {
                        shouldEllipsis: !0,
                        testId: "gamertag",
                        children: M
                      }), (0, r.jsx)(se, {
                        shouldEllipsis: !0,
                        testId: "linkDate",
                        children: k
                      })]
                    })]
                  }), i.isUnlinkable && (0, r.jsx)(de, {
                    children: (0, r.jsx)(E.Button, {
                      "aria-label": c.formatMessage(oi.connections_unlink_button_aria_label, {
                        connection: i.serviceDisplayName
                      }),
                      fullWidth: !0,
                      size: "MD",
                      testId: "unlink",
                      appearance: "tertiary",
                      onClick: v,
                      children: x
                    })
                  })]
                })), (0, r.jsx)(ne, {
                  thickness: "thin"
                }), (0, r.jsxs)(te, {
                  isDisabled: h,
                  isInteractable: !0,
                  onClick: function() {
                    return f(!0)
                  },
                  testId: "connectionVisibilityRow",
                  children: [(0, r.jsx)(ae, {
                    children: (0, r.jsx)(ie, {
                      children: (0, r.jsx)(oe, {
                        children: c.formatMessage(oi.connections_visibility_label)
                      })
                    })
                  }), (0, r.jsx)(de, {
                    children: (0, r.jsxs)(E.Dropdown.Root, {
                      className: ja,
                      isOpen: u,
                      onClick: function(e) {
                        return e.stopPropagation()
                      },
                      onOpenChange: f,
                      onValueChange: function(e) {
                        return vi(function() {
                          var t, n;
                          return Mi(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return lr(Ke.action["linked_accounts_visibility_".concat(e, "_").concat(i.onlineServiceName)]), t = {
                                  onlineService: null == i ? void 0 : i.onlineServiceName,
                                  visibilityLevel: e
                                }, [4, p({
                                  body: t
                                })];
                              case 1:
                                return r.sent().error || ((n = null == b ? void 0 : b.linkedAccounts.find(function(e) {
                                  return e.onlineServiceName === i.onlineServiceName
                                })) && (n.privacy = e, y(b)), s(xi(ji({}, i), {
                                  privacy: e
                                }))), [2]
                            }
                          })
                        })()
                      },
                      value: i.isPrivacyReadOnly ? "none" : i.privacy,
                      children: [(0, r.jsx)(E.Dropdown.Label, {
                        hideVisually: !0,
                        children: c.formatMessage(oi.connections_visibility_aria_label)
                      }), (0, r.jsxs)(E.Dropdown.Trigger, {
                        testId: "connectionVisibilityDropdown",
                        className: Ma,
                        children: [(0, r.jsx)(E.Dropdown.TriggerText, {
                          placeholder: ""
                        }), (0, r.jsx)(E.Dropdown.TriggerIcon, {})]
                      }), (0, r.jsx)(E.Dropdown.Portal, {
                        children: (0, r.jsx)(E.Dropdown.Content, {
                          className: xa,
                          children: (0, r.jsxs)(E.Dropdown.ScrollArea, {
                            children: [(0, r.jsx)(E.Dropdown.Option, {
                              testId: "meOnlyOption",
                              value: "none",
                              children: (0, r.jsx)(E.Dropdown.OptionText, {
                                children: j(Ya.None)
                              })
                            }), !i.isPrivacyReadOnly && (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(E.Dropdown.Option, {
                                testId: "friendsOption",
                                value: "friends",
                                children: (0, r.jsx)(E.Dropdown.OptionText, {
                                  children: j(Ya.Friends)
                                })
                              }), (0, r.jsx)(E.Dropdown.Option, {
                                testId: "friendsAndCrewsOption",
                                value: "friendsAndCrews",
                                children: (0, r.jsx)(E.Dropdown.OptionText, {
                                  children: j(Ya.FriendsAndCrews)
                                })
                              }), (0, r.jsx)(E.Dropdown.Option, {
                                testId: "everyoneOption",
                                value: "everyone",
                                children: (0, r.jsx)(E.Dropdown.OptionText, {
                                  children: j(Ya.Everyone)
                                })
                              })]
                            })]
                          })
                        })
                      })]
                    })
                  })]
                })]
              }), !i.isUnlinkable && (0, r.jsx)(E.Body, {
                size: "SM",
                className: "_1si1s9p2",
                testId: "supportFooter",
                children: c.formatMessage(oi.connections_unlinkable_footer_text, {
                  connection: i.serviceDisplayName,
                  steamSupportAnchor: function(e) {
                    return (0, r.jsx)("a", {
                      className: "_1si1s9p3",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://support.rockstargames.com/request/account/account-settings/linking-unlinking-accounts",
                      children: e
                    })
                  }
                })
              })]
            })
          })
        })
      };

      function Oi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Si(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function Ai(e) {
        return function(e) {
          if (Array.isArray(e)) return Oi(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Ii(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Ii(e, t) {
        if (e) {
          if ("string" == typeof e) return Oi(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oi(e, t) : void 0
        }
      }
      var Pi = ["np", "xbl", "xblpc", "nintendoswitch", "steam", "epic", "google", "amazon", "twitch", "discord"],
        Ci = function(e) {
          var t, n, o = e.data,
            s = e.loading,
            c = (0, L.A)(),
            l = (0, i.useLocation)(),
            d = (t = (0, a.useState)(), n = 2, function(e) {
              if (Array.isArray(e)) return e
            }(t) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(t, n) || Ii(t, n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            u = d[0],
            f = d[1];
          (0, a.useEffect)(function() {
            u && _(void 0)
          }, [l.key]);
          var _ = function(e) {
              f(e), window.scrollTo(0, 0)
            },
            p = function(e) {
              e.forEach(function(e) {
                e.serviceDisplayName = c.formatMessage(oi["connections_".concat(e.onlineServiceName)])
              })
            },
            m = function(e, t) {
              return Pi.indexOf(e.onlineServiceName) - Pi.indexOf(t.onlineServiceName)
            },
            h = (0, a.useMemo)(function() {
              if (!(null == o ? void 0 : o.linkedAccounts)) return [];
              var e = Ai(o.linkedAccounts).sort(m);
              return p(e), e
            }, [null == o ? void 0 : o.linkedAccounts]),
            g = (0, a.useMemo)(function() {
              if (!(null == o ? void 0 : o.unlinkedAccounts)) return [];
              var e = Ai(o.unlinkedAccounts).sort(m);
              return p(e), e
            }, [null == o ? void 0 : o.unlinkedAccounts]);
          return u && !s ? (0, r.jsx)(ki, {
            currentConnection: u,
            clearSelectedService: function() {
              return _(void 0)
            },
            setSelectedService: f
          }) : (0, r.jsx)(un, {
            isLoading: s,
            children: (0, r.jsx)(W, {
              children: (0, r.jsxs)(K, {
                testId: "connectionsSections",
                children: [(0, r.jsxs)($, {
                  children: [(0, r.jsx)(J, {
                    children: c.formatMessage(oi.connections_title)
                  }), (0, r.jsx)(Q, {
                    children: c.formatMessage(oi.connections_subtitle)
                  })]
                }), o && (0, r.jsxs)(ee, {
                  children: [h.map(function(e) {
                    return (0, r.jsxs)(a.Fragment, {
                      children: [(0, r.jsx)(Di, {
                        onlineService: e,
                        navigateSelectedService: _
                      }), (0, r.jsx)(ne, {
                        thickness: "thin"
                      })]
                    }, e.onlineServiceName)
                  }), g.map(function(e, t) {
                    return (0, r.jsxs)(a.Fragment, {
                      children: [(0, r.jsx)(Ti, {
                        onlineService: e
                      }), t !== Object.values(o.unlinkedAccounts).length - 1 && (0, r.jsx)(ne, {
                        thickness: "thin"
                      })]
                    }, e.onlineServiceName)
                  })]
                })]
              })
            })
          })
        },
        Di = function(e) {
          var t = e.onlineService,
            n = e.navigateSelectedService,
            i = (0, L.A)(),
            o = (0, a.useMemo)(function() {
              return hi[t.onlineServiceName]
            }, [t.onlineServiceName]),
            s = function() {
              n(t)
            },
            c = i.formatMessage(oi.connections_linked_navigation_aria_label, {
              connection: t.serviceDisplayName
            }),
            l = i.formatMessage(oi.connections_linked_date, {
              date: In({
                dateString: t.linkedDate,
                locale: i.locale
              })
            }),
            d = c + l;
          return (0, r.jsx)(te, {
            isInteractable: !0,
            label: d,
            onClick: s,
            testId: "details-".concat(t.onlineServiceName),
            children: (0, r.jsxs)(re, {
              children: [(0, r.jsxs)("div", {
                className: "_71w2ba0",
                children: [(0, r.jsx)(ce, {
                  children: (0, r.jsx)(o, {
                    label: i.formatMessage(oi["connections_".concat(t.onlineServiceName)])
                  })
                }), (0, r.jsxs)(ie, {
                  children: [(0, r.jsx)(oe, {
                    shouldEllipsis: !0,
                    children: t.serviceDisplayName
                  }), (0, r.jsx)(se, {
                    shouldEllipsis: !0,
                    testId: "linkDate-".concat(t.onlineServiceName),
                    children: l
                  })]
                })]
              }), (0, r.jsx)(E.IconButton, {
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
        Ti = function(e) {
          var t = e.onlineService,
            n = (0, L.A)(),
            i = (0, a.useMemo)(function() {
              return hi[t.onlineServiceName]
            }, [null == t ? void 0 : t.onlineServiceName]),
            o = ke().getAccessToken,
            s = function() {
              return (e = function() {
                var e, r;
                return function(e, t) {
                  var n, r, a, i = {
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
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                          if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                          switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                              i.label++, r = s[1], s = [0];
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
                          s = [6, e], r = 0
                        } finally {
                          n = a = 0
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
                      return lr(Ke.action["linked_accounts_link_".concat(t.onlineServiceName)]), [4, o()];
                    case 1:
                      return e = a.sent(), r = m.getLinkUrl({
                        accessToken: e,
                        lang: n.locale,
                        onlineService: t.onlineServiceName
                      }), window.location.href = r, [2]
                  }
                })
              }, function() {
                var t = this,
                  n = arguments;
                return new Promise(function(r, a) {
                  var i = e.apply(t, n);

                  function o(e) {
                    Si(i, r, a, o, s, "next", e)
                  }

                  function s(e) {
                    Si(i, r, a, o, s, "throw", e)
                  }
                  o(void 0)
                })
              })();
              var e
            },
            c = n.formatMessage(oi.connections_link_button_aria_label, {
              connection: t.serviceDisplayName
            });
          return (0, r.jsxs)(te, {
            isInteractable: !0,
            label: c,
            onClick: s,
            testId: "link-".concat(null == t ? void 0 : t.onlineServiceName, "-row"),
            children: [(0, r.jsxs)(ae, {
              children: [(0, r.jsx)(ce, {
                children: (0, r.jsx)(i, {
                  label: n.formatMessage(oi["connections_".concat(t.onlineServiceName)])
                })
              }), (0, r.jsx)(ie, {
                children: (0, r.jsx)(oe, {
                  shouldEllipsis: !0,
                  children: t.serviceDisplayName
                })
              })]
            }), (0, r.jsx)(de, {
              children: (0, r.jsx)(E.Button, {
                appearance: "tertiary",
                "aria-label": c,
                className: "_71w2ba1",
                iconRight: "ExternalLink",
                onPress: s,
                size: "MD",
                testId: "link-".concat(t.onlineServiceName),
                children: n.formatMessage(oi.connections_link_button_text)
              })
            })]
          })
        };
      const Ni = (0, _e.YK)({
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
        }
      });
      var Li = function(e) {
          var t = e.crewInviteEmails,
            n = e.directMessageEmails,
            a = e.friendRequestEmails,
            i = e.updateEmailNotificationSetting,
            o = (0, L.A)(),
            s = function(e) {
              lr(Ke.action["friend_request_emails_".concat(e)]), i(Za.FriendRequestEmails, e ? Ya.Everyone : Ya.None)
            },
            c = function(e) {
              lr(Ke.action["crew_invite_emails_".concat(e)]), i(Za.CrewInviteEmails, e ? Ya.Everyone : Ya.None)
            },
            l = function(e) {
              lr(Ke.action["direct_message_emails_".concat(e)]), i(Za.DirectMessageEmails, e ? Ya.Everyone : Ya.None)
            },
            d = function(e) {
              return e.stopPropagation()
            },
            u = a === Ya.Everyone,
            f = t === Ya.Everyone,
            _ = n === Ya.Everyone;
          return (0, r.jsxs)(ee, {
            children: [(0, r.jsxs)(te, {
              isInteractable: !0,
              label: o.formatMessage(Ni.communications_friend_request_email_toggle_aria_label),
              onClick: function() {
                return s(!u)
              },
              testId: "friendRequestRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: o.formatMessage(Ni.communications_friend_request_email_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Switch.Root, {
                  children: [(0, r.jsx)(E.Switch.Input, {
                    className: U,
                    onPress: d,
                    onSelectedChange: s,
                    isSelected: u,
                    testId: "friendRequestEmails"
                  }), (0, r.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(Ni.communications_friend_request_email_toggle_aria_label)
                  })]
                })
              })]
            }), (0, r.jsx)(ne, {
              thickness: "thin"
            }), (0, r.jsxs)(te, {
              isInteractable: !0,
              label: o.formatMessage(Ni.communications_crew_invite_email_toggle_aria_label),
              onClick: function() {
                return c(!f)
              },
              testId: "crewInviteRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: o.formatMessage(Ni.communications_crew_invite_email_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Switch.Root, {
                  children: [(0, r.jsx)(E.Switch.Input, {
                    className: U,
                    onPress: d,
                    onSelectedChange: c,
                    isSelected: f,
                    testId: "crewInviteEmails"
                  }), (0, r.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(Ni.communications_crew_invite_email_toggle_aria_label)
                  })]
                })
              })]
            }), (0, r.jsx)(ne, {
              thickness: "thin"
            }), (0, r.jsxs)(te, {
              isInteractable: !0,
              label: o.formatMessage(Ni.communications_direct_message_email_toggle_aria_label),
              onClick: function() {
                return l(!_)
              },
              testId: "directMessageRow",
              children: [(0, r.jsx)(ae, {
                children: (0, r.jsx)(ie, {
                  children: (0, r.jsx)(oe, {
                    children: o.formatMessage(Ni.communications_direct_message_email_label)
                  })
                })
              }), (0, r.jsx)(de, {
                children: (0, r.jsxs)(E.Switch.Root, {
                  children: [(0, r.jsx)(E.Switch.Input, {
                    className: U,
                    onPress: d,
                    onSelectedChange: l,
                    isSelected: _,
                    testId: "directMessageEmails"
                  }), (0, r.jsx)(E.Switch.Label, {
                    hideVisually: !0,
                    children: o.formatMessage(Ni.communications_direct_message_email_toggle_aria_label)
                  })]
                })
              })]
            })]
          })
        },
        Ei = "_1ehoiwp0",
        Ri = function(e) {
          var t = e.isLoadingSubscription,
            n = e.subscribeCallback,
            a = (0, L.A)(),
            i = a.formatMessage(Ni.communications_subscribe_button_text),
            o = a.formatMessage(Ni.communications_subscribe_label),
            s = a.formatMessage(Ni.communications_subscribe_sub_label);
          return (0, r.jsxs)(ee, {
            className: Ei,
            testId: "subscribeRowContainer",
            children: [(0, r.jsxs)(ie, {
              children: [(0, r.jsx)(oe, {
                children: o
              }), (0, r.jsx)(se, {
                children: s
              })]
            }), (0, r.jsx)(E.Button, {
              appearance: "primary",
              "aria-label": a.formatMessage(Ni.communications_subscribe_button_aria_label),
              isDisabled: t,
              isLoading: t,
              onClick: n,
              size: "MD",
              testId: "subscribeButton",
              children: i
            })]
          })
        },
        Gi = function(e) {
          var t = e.isLoadingSubscription,
            n = e.unsubscribeCallback,
            a = (0, L.A)(),
            i = a.formatMessage(Ni.communications_unsubscribe_button_text),
            o = a.formatMessage(Ni.communications_unsubscribe_label),
            s = a.formatMessage(Ni.communications_unsubscribe_sub_label);
          return (0, r.jsxs)(ee, {
            className: Ei,
            testId: "unsubscribeRowContainer",
            children: [(0, r.jsxs)("div", {
              className: "_1ehoiwp1",
              children: [(0, r.jsx)(ce, {
                children: (0, r.jsx)(et.CircleCheckFilled, {
                  color: xt.LU.alias.color.icon.success,
                  size: "LG",
                  label: a.formatMessage(Ni.communications_you_are_subscribed_label)
                })
              }), (0, r.jsxs)(ie, {
                children: [(0, r.jsx)(oe, {
                  children: o
                }), (0, r.jsx)(se, {
                  children: s
                })]
              })]
            }), (0, r.jsx)(E.Button, {
              appearance: "tertiary",
              "aria-label": a.formatMessage(Ni.communications_unsubscribe_button_aria_label),
              isDisabled: t,
              isLoading: t,
              onClick: n,
              size: "MD",
              testId: "unsubscribeButton",
              children: i
            })]
          })
        };

      function Ui(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function Vi(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              Ui(i, r, a, o, s, "next", e)
            }

            function s(e) {
              Ui(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function qi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Fi(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
      var zi = function() {
        var e = (0, L.A)(),
          t = Ee(),
          n = rr({
            route: Be.GetPrivacySettings
          }),
          i = n.data,
          o = n.setData,
          s = n.loading,
          c = rr({
            route: Be.GetSubscriptionStatus
          }),
          l = c.data,
          d = c.setData,
          u = c.loading,
          f = rr({
            route: Be.Subscribe,
            fetchOnInitial: !1
          }),
          _ = f.fetch,
          p = f.loading,
          m = rr({
            route: Be.Unsubscribe,
            fetchOnInitial: !1
          }),
          h = m.fetch,
          g = m.loading,
          b = rr({
            route: Be.UpdateEmailNotificationSettings,
            fetchOnInitial: !1
          }).fetch,
          y = (0, a.useCallback)((0, jt.A)(function(e, t) {
            return Vi(function() {
              var n;
              return Fi(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, b({
                      body: e
                    })];
                  case 1:
                    return (null == (n = r.sent()) ? void 0 : n.error) && o(t), [2]
                }
              })
            })()
          }, 1e3), []),
          v = p || g;
        return (0, r.jsx)(un, {
          isLoading: s || u,
          children: i && l && (0, r.jsxs)(W, {
            testId: "communications",
            children: [(0, r.jsxs)(K, {
              testId: "subscription",
              children: [(0, r.jsx)($, {
                children: (0, r.jsx)(J, {
                  children: e.formatMessage(Ni.communications_mailing_list_title)
                })
              }), 1 === l.status ? (0, r.jsx)(Gi, {
                isLoadingSubscription: v,
                unsubscribeCallback: function() {
                  return Vi(function() {
                    var n, r, a;
                    return Fi(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return lr(Ke.action.toggle_subscribe_to_mailing_list, Ke.labels.unsubscribed_from_mailing_list), [4, h({})];
                        case 1:
                          return n = i.sent(), r = n.data, a = n.error, r && !a && (d(r), t.displayNewToast({
                            appearance: "success",
                            message: e.formatMessage(Ni.communications_toast_unsubscribed_text)
                          })), [2]
                      }
                    })
                  })()
                }
              }) : (0, r.jsx)(Ri, {
                isLoadingSubscription: v,
                subscribeCallback: function() {
                  return Vi(function() {
                    var n, r, a;
                    return Fi(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return lr(Ke.action.toggle_subscribe_to_mailing_list, Ke.labels.subscribed_to_mailing_list), [4, _({})];
                        case 1:
                          return n = i.sent(), r = n.data, a = n.error, r && !a && (d(r), t.displayNewToast({
                            appearance: "success",
                            message: e.formatMessage(Ni.communications_toast_subscribed_text)
                          })), [2]
                      }
                    })
                  })()
                }
              })]
            }), (0, r.jsxs)(K, {
              children: [(0, r.jsx)($, {
                children: (0, r.jsx)(J, {
                  children: e.formatMessage(Ni.communications_notifications_title)
                })
              }), (0, r.jsx)(Li, {
                crewInviteEmails: i.crewInviteEmails,
                directMessageEmails: i.directMessageEmails,
                friendRequestEmails: i.friendRequestEmails,
                updateEmailNotificationSetting: function(e, t) {
                  return Vi(function() {
                    var n, r;
                    return Fi(this, function(a) {
                      return n = function(e, t) {
                        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t.push.apply(t, n)
                          }
                          return t
                        }(Object(t)).forEach(function(n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }), e
                      }(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                          }))), r.forEach(function(t) {
                            qi(e, t, n[t])
                          })
                        }
                        return e
                      }({}, i), qi({}, e, t)), r = {
                        crewInviteEmails: n.crewInviteEmails,
                        directMessageEmails: n.directMessageEmails,
                        friendRequestEmails: n.friendRequestEmails
                      }, y(r, i), o(n), [2]
                    })
                  })()
                }
              })]
            })]
          })
        })
      };

      function Bi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Hi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            Bi(e, t, n[t])
          })
        }
        return e
      }

      function Yi(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }

      function Xi(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }
      var Zi = (0, a.forwardRef)(function(e, t) {
          var n = e.className,
            a = e.children,
            i = e.testId,
            o = Xi(e, ["className", "children", "testId"]),
            s = (0, R.v6)({
              "data-testid": i,
              className: (0, z.A)("lofjyg0", n)
            }, o);
          return (0, r.jsx)("div", Yi(Hi({
            ref: t
          }, s), {
            children: a
          }))
        }),
        Wi = (0, a.forwardRef)(function(e, t) {
          var n = e.testId,
            i = e.qrCodeString,
            o = Xi(e, ["testId", "qrCodeString"]),
            s = (0, R.v6)({
              "data-testid": n,
              className: "lofjyg1"
            }, o),
            c = (0, a.useMemo)(function() {
              return i.split("\r\n").map(function(e, t) {
                for (var n = [], a = 0; a < e.length; a++) "0" === e[a] && n.push((0, r.jsx)("rect", {
                  height: "1",
                  width: "1",
                  y: t,
                  x: a
                }, "qr-code-".concat(t, "-").concat(a)));
                return n
              })
            }, [i]);
          return (0, r.jsxs)("svg", Yi(Hi({
            viewBox: "0 0 ".concat(c.length, " ").concat(c.length),
            ref: t
          }, s), {
            children: [(0, r.jsx)("rect", {
              height: c.length,
              width: c.length,
              x: "0",
              y: "0",
              fill: "#000000"
            }), (0, r.jsx)("g", {
              "data-testid": "".concat(n, "::matrix-group"),
              fill: "#FFFFFF",
              shapeRendering: "crispEdges",
              children: c
            })]
          }))
        });

      function Ki() {
        var e, t = (e = navigator.userAgent.toLowerCase()).indexOf("firefox") >= 0 ? "Firefox" : e.indexOf("ucbrowser") >= 0 ? "UC Browser" : e.indexOf("maxthon") >= 0 ? "Maxthon" : e.indexOf("opera") >= 0 || e.indexOf("opr") >= 0 ? "Opera" : e.indexOf("edge") >= 0 || e.indexOf("edg") >= 0 ? "Microsoft Edge" : e.indexOf("chrome") >= 0 || e.indexOf("crios") >= 0 ? "Chrome" : e.indexOf("playstation") >= 0 ? "PlayStation" : e.indexOf("safari") >= 0 ? "Safari" : e.indexOf("trident") >= 0 ? "Internet Explorer" : e.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser",
          n = function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("windows phone") >= 0 ? "Windows Phone" : e.indexOf("steam") >= 0 ? "Steam" : e.indexOf("xbox series x") >= 0 || e.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : e.indexOf("xbox one") >= 0 || e.indexOf("xbox_one") >= 0 ? "Xbox One" : e.indexOf("xbox") >= 0 ? "Xbox 360" : e.indexOf("playstation 5") >= 0 ? "PlayStation 5" : e.indexOf("playstation 4") >= 0 ? "PlayStation 4" : e.indexOf("playstation 3") >= 0 ? "PlayStation 3" : e.indexOf("win") >= 0 ? "Windows" : e.indexOf("android") >= 0 ? "Android" : e.indexOf("linux") >= 0 ? "Linux" : e.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 ? "iOS" : e.indexOf("mac") >= 0 ? "Mac" : "Unknown OS"
          }();
        switch (t) {
          case "PlayStation":
          case "Nintendo":
            return n;
          default:
            return t + " on " + n
        }
      }
      var $i = "_15h4nzg7";

      function Ji(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }
      var Qi = function(e) {
          var t = e.backNav,
            n = e.setMfaDevice,
            i = (0, L.A)(),
            o = rr({
              route: Be.RequestRegisterMfa,
              fetchOnInitial: !1
            }),
            s = o.data,
            c = o.fetch,
            l = rr({
              route: Be.VerifyMfaRegistration,
              fetchOnInitial: !1
            }),
            d = l.fetch,
            u = l.loading,
            f = rr({
              route: Be.GetMfaDevices,
              fetchOnInitial: !1
            }).fetch;
          return (0, a.useEffect)(function() {
            lr(Ke.action.mfa_request_device_registration_request, Ke.labels.device_type_google), c({}).then(function(e) {
              e.error && lr(Ke.action.mfa_request_device_registration_error, Ke.labels.device_type_google)
            })
          }, []), (0, r.jsxs)("div", {
            className: "_15h4nzg0",
            "data-testid": "auth-setup",
            children: [(0, r.jsxs)(sn, {
              children: [(0, r.jsx)(cn, {
                asChild: !0,
                children: (0, r.jsx)(E.IconButton, {
                  icon: "ChevronLeft",
                  size: "LG",
                  appearance: "tertiary",
                  onClick: t,
                  label: i.formatMessage(fn.security_header_nav_aria_label),
                  testId: "auth-setup-back"
                })
              }), (0, r.jsx)(ln, {
                children: (0, r.jsx)(E.Heading, {
                  level: 6,
                  children: i.formatMessage(fn.security_title)
                })
              })]
            }), (0, r.jsxs)(un, {
              isLoading: !s,
              children: [(0, r.jsxs)(E.Dialog.Root, {
                children: [(0, r.jsx)(W, {
                  testId: "auth-setup-body",
                  children: (0, r.jsx)(K, {
                    children: (0, r.jsx)(ee, {
                      children: (0, r.jsxs)(te, {
                        shouldStackMobile: !0,
                        children: [(0, r.jsx)(ae, {
                          className: "_15h4nzg2",
                          children: (0, r.jsxs)(ie, {
                            className: "_15h4nzg3 _125nfjqf",
                            children: [(0, r.jsx)(oe, {
                              children: i.formatMessage(fn.security_setup_qrcode_label)
                            }), (0, r.jsx)(se, {
                              children: i.formatMessage(fn.security_setup_qrcode_sublabel)
                            }), (0, r.jsx)(E.Dialog.Trigger, {
                              asChild: !0,
                              testId: "secret-key-modal-trigger",
                              children: (0, r.jsx)(le, {
                                size: "LG",
                                appearance: "link",
                                className: "_15h4nzg9",
                                children: i.formatMessage(fn.security_setup_qrcode_link)
                              })
                            })]
                          })
                        }), (0, r.jsx)(de, {
                          children: (null == s ? void 0 : s.qrCode) && (0, r.jsx)(Zi, {
                            className: "_15h4nzg1",
                            children: (0, r.jsx)(Wi, {
                              qrCodeString: s.qrCode,
                              testId: "qrcode-matrix"
                            })
                          })
                        })]
                      })
                    })
                  })
                }), (null == s ? void 0 : s.secretKey) && (0, r.jsx)(eo, {
                  secretKey: s.secretKey
                })]
              }), (0, r.jsx)(Sn, {
                isLoading: u,
                onFormInvalid: function(e) {
                  var t;
                  "non_empty" === (null == e || null === (t = e[kn]) || void 0 === t ? void 0 : t.type) && lr(Ke.action.mfa_enroll_verify_error_password_missing), (null == e ? void 0 : e[On]) && lr(Ke.action.mfa_enroll_verify_error_invalid_verification_code)
                },
                onSubmit: function(e) {
                  var t, r = e.formData,
                    a = e.setError;
                  return (t = function() {
                    var e, t, o, c;
                    return function(e, t) {
                      var n, r, a, i = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                              if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                              switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                  i.label++, r = s[1], s = [0];
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
                              s = [6, e], r = 0
                            } finally {
                              n = a = 0
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
                          return lr(Ke.action.mfa_enroll_verify_request, Ke.labels.device_type_google), [4, d({
                            body: {
                              code: r[On],
                              machineName: Ki(),
                              mfaDeviceRegistrationCookie: s.mfaDeviceRegistrationCookie,
                              password: r[kn]
                            }
                          })];
                        case 1:
                          return (null == (e = l.sent()) ? void 0 : e.error) ? (lr(Ke.action.mfa_enroll_verify_error), t = e.error.code, (o = Zn[t]) && a(o.field, {
                            message: i.formatMessage(o.message)
                          }), [3, 4]) : [3, 2];
                        case 2:
                          return lr(Ke.action.mfa_enroll_success, Ke.labels.device_type), [4, f({})];
                        case 3:
                          (null == (c = l.sent()) ? void 0 : c.data) && n(c.data[0]), l.label = 4;
                        case 4:
                          return [2]
                      }
                    })
                  }, function() {
                    var e = this,
                      n = arguments;
                    return new Promise(function(r, a) {
                      var i = t.apply(e, n);

                      function o(e) {
                        Ji(i, r, a, o, s, "next", e)
                      }

                      function s(e) {
                        Ji(i, r, a, o, s, "throw", e)
                      }
                      o(void 0)
                    })
                  })()
                }
              })]
            })]
          })
        },
        eo = function(e) {
          var t = e.secretKey,
            n = Ee(),
            i = (0, L.A)(),
            o = (0, a.useMemo)(function() {
              return t.replace(/(.{4})/g, "$1 - ")
            }, [t]);
          return (0, r.jsx)(E.Dialog.Overlay, {
            className: Er,
            children: (0, r.jsxs)(E.Dialog.Content, {
              "aria-describedby": void 0,
              testId: "secret-key-modal",
              children: [(0, r.jsx)(E.Dialog.CloseButton, {
                label: i.formatMessage(Fr.modal_close_modal_button_label),
                testId: "secret-key-modal-close"
              }), (0, r.jsx)(E.Dialog.ScrollArea, {
                children: (0, r.jsxs)(E.Dialog.Layout, {
                  className: "_15h4nzg4",
                  children: [(0, r.jsx)(E.Dialog.Title, {
                    children: i.formatMessage(fn.security_setup_modal_title)
                  }), (0, r.jsx)(E.Dialog.Description, {
                    asChild: !0,
                    children: (0, r.jsx)(E.Body, {
                      size: "MD",
                      className: "_15h4nzg5",
                      children: i.formatMessage(fn.security_setup_modal_description)
                    })
                  }), (0, r.jsx)(E.Heading, {
                    level: 5,
                    testId: "secret-key",
                    children: o
                  }), (0, r.jsx)(E.Dialog.ActionArea, {
                    children: (0, r.jsx)(E.Button, {
                      appearance: "secondary",
                      className: "_15h4nzg6",
                      fullWidth: !0,
                      iconRight: "Copy",
                      onClick: function() {
                        navigator.clipboard.writeText(t), n.displayNewToast({
                          appearance: "success",
                          message: i.formatMessage(fn.security_setup_modal_copy_toast_text)
                        })
                      },
                      size: "LG",
                      testId: "secret-key-copy",
                      children: i.formatMessage(fn.security_setup_modal_copy_button_text)
                    })
                  })]
                })
              })]
            })
          })
        };

      function to(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function no(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function ro(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, a) {
            var i = e.apply(t, n);

            function o(e) {
              no(i, r, a, o, s, "next", e)
            }

            function s(e) {
              no(i, r, a, o, s, "throw", e)
            }
            o(void 0)
          })
        }
      }

      function ao(e, t) {
        var n, r, a, i = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                    i.label++, r = s[1], s = [0];
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
                s = [6, e], r = 0
              } finally {
                n = a = 0
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
      var io = function(e) {
          var t, n, i = e.device,
            o = e.removeMfaDevice,
            s = (t = (0, a.useState)(!1), n = 2, function(e) {
              if (Array.isArray(e)) return e
            }(t) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(t, n) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return to(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? to(e, t) : void 0
              }
            }(t, n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = s[0],
            l = s[1],
            d = (0, L.A)(),
            u = Ke.labels.device_type_fill + i.deviceType,
            f = rr({
              route: Be.RequestDeregisterMfa,
              fetchOnInitial: !1
            }),
            _ = f.data,
            p = f.fetch,
            m = f.loading,
            h = rr({
              route: Be.VerifyMfaDeregistration,
              fetchOnInitial: !1
            }),
            g = h.fetch,
            b = h.loading,
            y = function() {
              return ro(function() {
                var e;
                return ao(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return lr(Ke.action.mfa_remove_device_request, u), [4, p({
                        body: {
                          deviceId: i.id
                        }
                      })];
                    case 1:
                      return (null == (e = t.sent()) ? void 0 : e.error) ? lr(Ke.action.mfa_remove_device_request_error, u) : l(!0), [2]
                  }
                })
              })()
            },
            v = d.formatMessage(fn.security_status_unlink_button_text),
            w = d.formatMessage(fn.security_status_sublabel_text),
            j = v + i.deviceAddress + w;
          return (0, r.jsxs)(K, {
            testId: "mfa-device-section",
            children: [(0, r.jsxs)($, {
              children: [(0, r.jsx)(J, {
                children: d.formatMessage(fn.security_mfa_device_title)
              }), (0, r.jsx)(Q, {
                children: d.formatMessage(fn.security_mfa_device_title_aside)
              })]
            }), (0, r.jsx)(ee, {
              children: (0, r.jsxs)(te, {
                isDisabled: m,
                isInteractable: !0,
                label: j,
                onClick: y,
                testId: "deregisterRow",
                children: [(0, r.jsx)(ae, {
                  children: (0, r.jsxs)(ie, {
                    className: $i,
                    children: [(0, r.jsx)(oe, {
                      className: "_15h4nzg8",
                      testId: "mfa-device-address",
                      children: i.deviceAddress
                    }), (0, r.jsx)(se, {
                      testId: "mfa-device-type",
                      children: w
                    })]
                  })
                }), (0, r.jsx)(de, {
                  children: (0, r.jsx)(E.Button, {
                    appearance: "secondary",
                    "aria-label": j,
                    fullWidth: !0,
                    isDisabled: m,
                    isLoading: m,
                    onClick: y,
                    size: "MD",
                    testId: "mfa-unlink",
                    children: v
                  })
                })]
              })
            }), c && (0, r.jsx)(Sn, {
              isLoading: b,
              onFormInvalid: function(e) {
                var t;
                "non_empty" === (null == e || null === (t = e[kn]) || void 0 === t ? void 0 : t.type) && lr(Ke.action.mfa_remove_device_verify_error_password_missing), (null == e ? void 0 : e[On]) && lr(Ke.action.mfa_remove_device_verify_error_invalid_verification_code)
              },
              onSubmit: function(e) {
                var t = e.formData,
                  n = e.setError;
                return ro(function() {
                  var e, r, a;
                  return ao(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return lr(Ke.action.mfa_remove_device_verify_request, u), [4, g({
                          body: {
                            code: t[On],
                            mfaDeviceDeregistrationCookie: _.mfaDeviceDeregistrationCookie,
                            password: t[kn]
                          }
                        })];
                      case 1:
                        return (null == (e = i.sent()) ? void 0 : e.error) ? (lr(Ke.action.mfa_remove_device_verify_error, u), r = e.error.code, (a = Zn[r]) && n(a.field, {
                          message: d.formatMessage(a.message)
                        })) : (lr(Ke.action.mfa_remove_device_success, u), o()), [2]
                    }
                  })
                })()
              }
            })]
          })
        },
        oo = function() {
          var e = (0, L.A)();
          return (0, r.jsx)(ee, {
            testId: "noRememberedDevices",
            children: (0, r.jsx)(te, {
              label: e.formatMessage(fn.security_status_no_remembered_devices_title),
              testId: "noRememberedDevicesRow",
              children: (0, r.jsxs)(ie, {
                children: [(0, r.jsx)(E.Body, {
                  size: "MD",
                  appearance: "bold",
                  className: "_15h4nzga",
                  children: e.formatMessage(fn.security_status_no_remembered_devices_title)
                }), (0, r.jsx)(E.Body, {
                  size: "SM",
                  testId: "no-remembered-devices",
                  children: e.formatMessage(fn.security_status_no_remembered_devices_title_aside)
                })]
              })
            })
          })
        };

      function so(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function co(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }
      var lo = function() {
          var e, t, n = (0, L.A)(),
            i = Ee(),
            o = (e = (0, a.useState)(new Set), t = 2, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return so(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? so(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            s = o[0],
            c = o[1],
            l = rr({
              route: Be.ForgetMfaRememberedMachine,
              fetchOnInitial: !1
            }).fetch,
            d = rr({
              route: Be.GetMfaRememberedMachines
            }),
            u = d.data,
            f = d.fetch,
            _ = d.loading;
          return (0, r.jsxs)(K, {
            testId: "mfa-remembered-machines-section",
            children: [(0, r.jsxs)($, {
              testId: "mfa-remembered-machines-header",
              children: [(0, r.jsx)(J, {
                children: n.formatMessage(fn.security_remembered_machines_title)
              }), (0, r.jsx)(Q, {
                testId: "mfa-remembered-machines-sub-header",
                children: n.formatMessage(fn.security_remembered_machines_aside)
              })]
            }), _ && !u && (0, r.jsx)(E.Spinner, {
              size: "inlineLG",
              label: n.formatMessage(fn.security_status_remembered_devices_spinner_label),
              testId: "remembered-machines-loading-spinner"
            }), !_ && u && u.length > 0 ? (0, r.jsx)(uo, {
              rememberedMachines: u,
              rowsForgetting: s,
              forgetMachine: function(e) {
                return (t = function() {
                  var t;
                  return function(e, t) {
                    var n, r, a, i = {
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
                          if (n) throw new TypeError("Generator is already executing.");
                          for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                            if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                            switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                                i.label++, r = s[1], s = [0];
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
                            s = [6, e], r = 0
                          } finally {
                            n = a = 0
                          }
                          if (5 & s[0]) throw s[1];
                          return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                          }
                        }([s, c])
                      }
                    }
                  }(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return c(function(t) {
                          return t.add(e)
                        }), lr(Ke.action.mfa_forget_remembered_machine), [4, l({
                          body: {
                            machineId: e
                          }
                        })];
                      case 1:
                        return (null == (t = r.sent()) ? void 0 : t.error) ? [3, 3] : (i.displayNewToast({
                          appearance: "success",
                          message: n.formatMessage(fn.security_status_forgot_device_toast_confirmation_text)
                        }), [4, f({})]);
                      case 2:
                        r.sent(), r.label = 3;
                      case 3:
                        return c(function(t) {
                          var n = new Set(t);
                          return n.delete(e), n
                        }), [2]
                    }
                  })
                }, function() {
                  var e = this,
                    n = arguments;
                  return new Promise(function(r, a) {
                    var i = t.apply(e, n);

                    function o(e) {
                      co(i, r, a, o, s, "next", e)
                    }

                    function s(e) {
                      co(i, r, a, o, s, "throw", e)
                    }
                    o(void 0)
                  })
                })();
                var t
              }
            }) : (0, r.jsx)(oo, {})]
          })
        },
        uo = function(e) {
          var t = e.rememberedMachines,
            n = e.rowsForgetting,
            i = e.forgetMachine;
          return (0, r.jsx)(ee, {
            testId: "mfa-remembered-machines-row-container",
            children: null == t ? void 0 : t.map(function(e, o) {
              return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)(fo, {
                  forgetMachine: i,
                  rememberedMachine: e,
                  rowsForgetting: n
                }), o < t.length - 1 && (0, r.jsx)(ne, {
                  thickness: "thin",
                  testId: "remembered-machine-divider"
                })]
              }, e.id)
            })
          })
        },
        fo = function(e) {
          var t = e.forgetMachine,
            n = e.rememberedMachine,
            a = e.rowsForgetting,
            i = (0, L.A)(),
            o = i.formatMessage(fn.security_status_forget_machine_button_text),
            s = i.formatMessage(fn.security_status_remembered_machine_last_seen, {
              lastSeen: Pn({
                dateString: n.lastSeenDate,
                locale: i.locale
              })
            }),
            c = i.formatMessage(fn.security_status_remembered_machine_last_ip, {
              ip: n.lastSeenIp
            }),
            l = o + n.name + s + c;
          return (0, r.jsxs)(te, {
            isDisabled: a.has(n.id),
            isInteractable: !0,
            label: l,
            onClick: function() {
              return t(n.id)
            },
            testId: "row-".concat(n.id),
            children: [(0, r.jsx)(ae, {
              testId: "rememberedMachine",
              children: (0, r.jsxs)(ie, {
                className: $i,
                children: [(0, r.jsx)(oe, {
                  testId: "mfa-remembered-machine-name",
                  children: n.name
                }), (0, r.jsx)(se, {
                  testId: "mfa-remembered-machine-last-seen-date",
                  children: s
                }), (0, r.jsx)(se, {
                  testId: "mfa-remembered-machine-last-ip",
                  children: c
                })]
              })
            }), (0, r.jsx)(de, {
              children: (0, r.jsx)(E.Button, {
                appearance: "secondary",
                "aria-label": l,
                fullWidth: !0,
                isDisabled: a.has(n.id),
                isLoading: a.has(n.id),
                onClick: function() {
                  return t(n.id)
                },
                size: "MD",
                testId: "mfa-remembered-machine-forget-machine",
                children: o
              })
            })]
          })
        },
        _o = function(e) {
          var t = e.device,
            n = e.removeMfaDevice;
          return (0, r.jsxs)(W, {
            testId: "auth-status",
            children: [(0, r.jsx)(io, {
              device: t,
              removeMfaDevice: n
            }), (0, r.jsx)(lo, {})]
          })
        };
      const po = (0, _e.YK)({
        layout_chevron_right_icon_label: {
          defaultMessage: "Right-facing chevron",
          description: "Label to describe a right-facing chevron",
          id: "layout_chevron_right_icon_label"
        }
      });
      var mo = function(e) {
        var t = e.toggleSetup,
          n = (0, L.A)();
        return (0, r.jsx)(W, {
          testId: "no-auth",
          children: (0, r.jsxs)(K, {
            children: [(0, r.jsxs)($, {
              children: [(0, r.jsx)(J, {
                children: n.formatMessage(fn.security_title)
              }), (0, r.jsx)(Q, {
                children: n.formatMessage(fn.security_title_aside)
              })]
            }), (0, r.jsx)(te, {
              isInteractable: !0,
              label: n.formatMessage(fn.security_no_auth_navigation_aria_label),
              onClick: t,
              testId: "start-mfa-setup",
              children: (0, r.jsxs)(re, {
                children: [(0, r.jsx)(oe, {
                  children: n.formatMessage(fn.security_no_auth_label)
                }), (0, r.jsx)(E.IconButton, {
                  appearance: "ghost",
                  icon: "ChevronRight",
                  label: n.formatMessage(po.layout_chevron_right_icon_label),
                  onClick: t,
                  size: "LG",
                  testId: "startMfaSetupButton"
                })]
              })
            })]
          })
        })
      };

      function ho(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function go(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, a, i = [],
              o = !0,
              s = !1;
            try {
              for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == n.return || n.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return ho(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ho(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var bo = function() {
        var e = (0, i.useLocation)(),
          t = go((0, a.useState)(!1), 2),
          n = t[0],
          o = t[1],
          s = go((0, a.useState)(void 0), 2),
          c = s[0],
          l = s[1],
          d = rr({
            route: Be.GetMfaDevices
          }),
          u = d.data,
          f = d.loading;
        (0, a.useEffect)(function() {
          l(null == u ? void 0 : u[0])
        }, [u]), (0, a.useEffect)(function() {
          p()
        }, [e.key]);
        var _ = function() {
            o(!0), window.scrollTo(0, 0), lr(Ke.action.mfa_enroll_start, Ke.labels.device_priority), lr(Ke.action.mfa_enroll_select_device_type, Ke.labels.device_type_google)
          },
          p = function() {
            o(!1), window.scrollTo(0, 0), lr(Ke.action.mfa_enroll_cancel, Ke.labels.device_type)
          },
          m = function() {
            o(!1), l(void 0), window.scrollTo(0, 0)
          },
          h = (0, a.useMemo)(function() {
            return c ? (0, r.jsx)(_o, {
              device: c,
              removeMfaDevice: m
            }) : n ? (0, r.jsx)(Qi, {
              backNav: p,
              setMfaDevice: l
            }) : (0, r.jsx)(mo, {
              toggleSetup: _
            })
          }, [n, c]);
        return (0, r.jsx)(un, {
          isLoading: f,
          children: h
        })
      };
      const yo = (0, _e.YK)({
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
      var vo = function() {
        var e = (0, L.A)();
        return (0, r.jsxs)("div", {
          className: "_1kvmuad2",
          "data-testid": "noBlockedUsers",
          children: [(0, r.jsx)(E.Heading, {
            level: 6,
            children: e.formatMessage(yo.social_page_no_blocked_title)
          }), (0, r.jsx)(E.Body, {
            size: "MD",
            className: "_1kvmuad3",
            children: e.formatMessage(yo.social_page_no_blocked_description)
          })]
        })
      };

      function wo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function jo(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a)
      }

      function xo(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, a, i = [],
              o = !0,
              s = !1;
            try {
              for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (e) {
              s = !0, a = e
            } finally {
              try {
                o || null == n.return || n.return()
              } finally {
                if (s) throw a
              }
            }
            return i
          }
        }(e, t) || Mo(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Mo(e, t) {
        if (e) {
          if ("string" == typeof e) return wo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wo(e, t) : void 0
        }
      }
      var ko = {
          code: "0.0.1",
          logId: ""
        },
        Oo = function() {
          var e = (0, L.A)(),
            t = xo((0, a.useState)(0), 2),
            n = t[0],
            i = t[1],
            o = xo((0, a.useState)(!1), 2),
            s = o[0],
            c = o[1],
            l = xo((0, a.useState)([]), 2),
            d = l[0],
            u = l[1],
            f = (0, a.useRef)(null),
            _ = Ee(),
            p = (0, a.useMemo)(function() {
              return new IntersectionObserver(function(e) {
                var t = xo(e, 1)[0];
                c(t.isIntersecting)
              })
            }, [f]);
          (0, a.useEffect)(function() {
            return f.current && p.observe(f.current),
              function() {
                return p.disconnect()
              }
          }, [f.current]);
          var m = rr({
              queryOrRoute: "?index=".concat(n, "&pageSize=").concat(30),
              route: Be.GetBlockedUsers
            }),
            h = m.data,
            g = m.fetch,
            b = m.loading,
            y = rr({
              fetchOnInitial: !1,
              route: Be.UnblockUser
            }).fetch;
          (0, a.useEffect)(function() {
            if (h && h.users.length > 0) {
              var e = function(e) {
                if (Array.isArray(e)) return wo(e)
              }(t = d) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(t) || Mo(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }();
              e[n] = {
                index: n,
                users: h.users
              }, u(e)
            }
            var t
          }, [h]), (0, a.useEffect)(function() {
            var e = h && h.users.length < 30;
            if (s && !e && !b) {
              var t = n + 1;
              i(t), g({
                queryOrRoute: "?index=".concat(t, "&pageSize=").concat(30)
              })
            }
          }, [d, h, n, b, s]);
          var v = function(t, n) {
              return (r = function() {
                var r, a, i;
                return function(e, t) {
                  var n, r, a, i = {
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
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                          if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                          switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                              i.label++, r = s[1], s = [0];
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
                          s = [6, e], r = 0
                        } finally {
                          n = a = 0
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
                        queryOrRoute: "?rockstarId=".concat(n.rockstarId)
                      })];
                    case 1:
                      return o.sent(), [4, g({
                        queryOrRoute: "?index=".concat(t, "&pageSize=").concat(30)
                      })];
                    case 2:
                      return r = o.sent(), !(null == (a = r.data) ? void 0 : a.users.find(function(e) {
                        return e.rockstarId === n.rockstarId
                      })) && n ? (i = d[t], d[t] = {
                        index: t,
                        users: i.users.filter(function(e) {
                          return e.rockstarId !== n.rockstarId
                        })
                      }, _.displayNewToast({
                        appearance: "success",
                        message: e.formatMessage(yo.social_page_toast_confirmation_text, {
                          nickname: n.displayName
                        })
                      })) : _.displayNewError(ko), [2]
                  }
                })
              }, function() {
                var e = this,
                  t = arguments;
                return new Promise(function(n, a) {
                  var i = r.apply(e, t);

                  function o(e) {
                    jo(i, n, a, o, s, "next", e)
                  }

                  function s(e) {
                    jo(i, n, a, o, s, "throw", e)
                  }
                  o(void 0)
                })
              })();
              var r
            },
            w = d.some(function(e) {
              return e.users.length > 0
            });
          return (0, r.jsxs)(un, {
            isLoading: !w && b,
            children: [w ? (0, r.jsx)(W, {
              testId: "blockedUsers",
              children: (0, r.jsxs)(K, {
                children: [(0, r.jsxs)($, {
                  children: [(0, r.jsx)(J, {
                    children: e.formatMessage(yo.social_page_title)
                  }), (0, r.jsx)(Q, {
                    children: e.formatMessage(yo.social_page_description)
                  })]
                }), (0, r.jsxs)(ee, {
                  children: [d.map(function(e) {
                    return (0, r.jsxs)(a.Fragment, {
                      children: [e.users.map(function(t, n) {
                        return (0, r.jsxs)(a.Fragment, {
                          children: [(0, r.jsx)(So, {
                            pageIndex: e.index,
                            unblockUser: v,
                            userToUnblock: t
                          }), n < e.users.length - 1 && (0, r.jsx)(ne, {
                            thickness: "thin"
                          })]
                        }, t.displayName)
                      }), e.index < d.length - 1 && (0, r.jsx)(ne, {
                        thickness: "thin"
                      })]
                    }, "blocked-users-page-".concat(e.index))
                  }), b && s && (0, r.jsx)(E.Spinner, {
                    className: "_1kvmuad4",
                    label: e.formatMessage(yo.social_page_infinte_scroll_spinner_label),
                    testId: "infiniteScrollSpinner"
                  })]
                })]
              })
            }) : (0, r.jsx)(vo, {}), (0, r.jsx)("div", {
              "data-testid": "loadMore",
              ref: f
            })]
          })
        },
        So = function(e) {
          var t = e.pageIndex,
            n = e.unblockUser,
            i = e.userToUnblock,
            o = (0, L.A)(),
            s = xo((0, a.useState)(!1), 2),
            c = s[0],
            l = s[1],
            d = xo((0, a.useState)(!1), 2),
            u = d[0],
            f = d[1],
            _ = function() {
              return f(!0)
            },
            p = function() {
              return f(!1)
            },
            m = o.formatMessage(yo.social_page_date_prefix, {
              date: In({
                dateString: i.lastUpdatedDateUtc,
                locale: o.locale
              })
            }),
            h = o.formatMessage(yo.social_page_unblock_button_label),
            g = h + i.displayName + m;
          return (0, r.jsxs)(te, {
            "aria-haspopup": "dialog",
            isDisabled: c,
            isInteractable: !0,
            label: g,
            onClick: _,
            testId: "row-".concat(i.displayName),
            children: [(0, r.jsxs)(ae, {
              testId: "blockedUser",
              children: [(0, r.jsx)(ce, {
                children: (0, r.jsx)("img", {
                  alt: i.displayName,
                  className: "_1kvmuad0",
                  "data-testid": "avatar",
                  src: i.avatarUrl
                })
              }), (0, r.jsxs)(ie, {
                children: [(0, r.jsx)(oe, {
                  shouldEllipsis: !0,
                  testId: "nickname",
                  children: i.displayName
                }), (0, r.jsx)(se, {
                  shouldEllipsis: !0,
                  testId: "blockDate",
                  children: m
                })]
              })]
            }), (0, r.jsx)(de, {
              children: (0, r.jsxs)(E.Dialog.Root, {
                isOpen: u,
                onOpenChange: f,
                children: [(0, r.jsx)(E.Dialog.Trigger, {
                  asChild: !0,
                  children: (0, r.jsx)(E.Button, {
                    appearance: "tertiary",
                    fullWidth: !0,
                    isDisabled: c,
                    isLoading: c,
                    onPress: _,
                    size: "MD",
                    testId: "modalButton-".concat(i.displayName),
                    children: h
                  })
                }), (0, r.jsx)(E.Dialog.Overlay, {
                  className: Er,
                  onClick: function(e) {
                    e.stopPropagation(), p()
                  },
                  testId: "unblockOverlay",
                  children: (0, r.jsxs)(E.Dialog.Content, {
                    "aria-describedby": void 0,
                    onClick: function(e) {
                      e.stopPropagation()
                    },
                    testId: "unblockModal",
                    children: [(0, r.jsx)(E.Dialog.CloseButton, {
                      label: o.formatMessage(Fr.modal_close_modal_button_label),
                      onPress: p
                    }), (0, r.jsx)(E.Dialog.ScrollArea, {
                      children: (0, r.jsxs)(E.Dialog.Layout, {
                        className: "_1kvmuad5",
                        children: [(0, r.jsx)(E.Dialog.Title, {
                          testId: "unblockModalNickname",
                          children: o.formatMessage(yo.social_page_unblock_modal_title, {
                            nickName: i.displayName
                          })
                        }), (0, r.jsx)("img", {
                          alt: i.displayName,
                          className: "_1kvmuad6",
                          "data-testid": "unblockModalAvatar",
                          src: i.avatarUrl
                        }), (0, r.jsxs)(E.Dialog.ActionArea, {
                          className: "_1kvmuad7",
                          children: [(0, r.jsx)(E.Dialog.Button, {
                            appearance: "primary",
                            isDisabled: c,
                            isLoading: c,
                            onPress: function() {
                              n(t, i), l(!0)
                            },
                            size: "LG",
                            testId: "modalUnblock",
                            children: o.formatMessage(yo.social_page_unblock_button_label)
                          }), (0, r.jsx)(E.Dialog.Button, {
                            appearance: "ghost",
                            isDisabled: c,
                            isLoading: c,
                            onPress: p,
                            size: "MD",
                            testId: "modalCancel",
                            children: o.formatMessage(yo.social_page_unblock_modal_cancel_button_text)
                          })]
                        })]
                      })
                    })]
                  })
                })]
              })
            })]
          })
        };
      const Ao = (0, _e.YK)({
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
      var Io = [{
        path: "",
        Icon: et.Person,
        label: Ao.account_layout_profile_menu_item,
        nestedPath: "/account/details/",
        ga: Ke.action.menu_profile,
        testId: "menuProfile"
      }, {
        path: "privacy",
        Icon: et.LockKeyhole,
        label: Ao.account_layout_privacy_menu_item,
        ga: Ke.action.menu_privacy,
        testId: "menuPrivacy"
      }, {
        path: "connections",
        Icon: et.CircleCheck,
        label: Ao.account_layout_connections_menu_item,
        ga: Ke.action.menu_linked_accounts,
        testId: "menuConnections"
      }, {
        path: "communications",
        Icon: et.Envelope,
        label: Ao.account_layout_communications_menu_item,
        ga: Ke.action.menu_communications,
        testId: "menuCommunications"
      }, {
        path: "security",
        Icon: et.ShieldCheck,
        label: Ao.account_layout_security_menu_item,
        ga: Ke.action.menu_security,
        testId: "menuSecurity"
      }, {
        path: "social",
        Icon: et.TwoPeople,
        label: Ao.account_layout_social_menu_item,
        ga: Ke.action.menu_social,
        testId: "menuSocial"
      }];
      const Po = (0, _e.YK)({
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
          }
        }),
        Co = {
          catchAll: {
            route: "*",
            title: Po.document_title_profile
          },
          profile: {
            route: "/",
            title: Po.document_title_profile
          },
          email: {
            route: "/details/email",
            title: Po.document_title_email
          },
          password: {
            route: "/details/password",
            title: Po.document_title_password
          },
          nickname: {
            route: "/details/nickname",
            title: Po.document_title_nickname
          },
          privacy: {
            route: "/privacy",
            title: Po.document_title_privacy
          },
          connections: {
            route: "/connections",
            title: Po.document_title_connections
          },
          communications: {
            route: "/communications",
            title: Po.document_title_communications
          },
          security: {
            route: "/security",
            title: Po.document_title_security
          },
          social: {
            route: "/social",
            title: Po.document_title_social
          },
          deleteCancel: {
            route: "/delete/cancel",
            title: Po.document_title_delete_cancel
          },
          deleteComplete: {
            route: "/delete/complete",
            title: Po.document_title_delete_complete
          },
          emailVerify: {
            route: "/verify",
            title: Po.document_title_email_verify
          }
        };
      var Do = function() {
        var e, t = (0, L.A)(),
          n = (0, i.useLocation)(),
          a = rr({
            route: Be.ProfileOverview
          }),
          o = a.data,
          s = a.loading,
          c = rr({
            route: Be.GetLinkedAccounts
          }),
          l = c.data,
          d = c.loading;
        return fr(null == l ? void 0 : l.linkedAccounts), rr({
          route: Be.PasswordRequirements
        }), (0, r.jsxs)("div", {
          className: "_1md0fdx0 dhzzuw5 dhzzuw4",
          children: [(0, r.jsx)(gr, {
            children: Io.map(function(e) {
              var a = e.path,
                o = e.Icon,
                s = e.label,
                c = e.nestedPath,
                l = e.ga,
                d = e.testId,
                u = void 0 !== c && n.pathname.includes(c);
              return (0, r.jsx)(i.NavLink, {
                className: "_1md0fdx3",
                "data-ga": l,
                "data-testid": d,
                to: a,
                role: "navigation",
                "aria-labelledby": d,
                end: "" === a,
                draggable: !1,
                children: function(e) {
                  var n = e.isActive;
                  return (0, r.jsxs)(br, {
                    active: n || u,
                    children: [(0, r.jsx)(o, {
                      className: "_1md0fdx4",
                      size: "LG",
                      label: "",
                      "aria-hidden": !0
                    }), (0, r.jsx)(E.Body, {
                      className: n || u ? "_1md0fdx5" : "",
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
          }), (0, r.jsx)(vr, {
            className: "_1md0fdx1",
            children: (0, r.jsxs)(i.Routes, {
              children: [(0, r.jsx)(i.Route, {
                index: !0,
                element: (0, r.jsx)(un, {
                  isLoading: s,
                  children: (0, r.jsx)(Ha, {
                    account: o
                  })
                })
              }), (0, r.jsx)(i.Route, {
                path: Co.email.route,
                element: (0, r.jsx)(xn, {})
              }), (0, r.jsx)(i.Route, {
                path: Co.password.route,
                element: (0, r.jsx)(Xn, {})
              }), (0, r.jsx)(i.Route, {
                path: Co.nickname.route,
                element: (0, r.jsx)(Rn, {})
              }), (0, r.jsx)(i.Route, {
                path: Co.privacy.route,
                element: (0, r.jsx)(ni, {
                  isMinor: null !== (e = null == o ? void 0 : o.isMinor) && void 0 !== e && e
                })
              }), (0, r.jsx)(i.Route, {
                path: Co.connections.route,
                element: (0, r.jsx)(Ci, {
                  data: l,
                  loading: d
                })
              }), (0, r.jsx)(i.Route, {
                path: Co.communications.route,
                element: (0, r.jsx)(zi, {})
              }), (0, r.jsx)(i.Route, {
                path: Co.security.route,
                element: (0, r.jsx)(bo, {})
              }), (0, r.jsx)(i.Route, {
                path: Co.social.route,
                element: (0, r.jsx)(Oo, {})
              }), (0, r.jsx)(i.Route, {
                path: Co.catchAll.route,
                element: (0, r.jsx)(i.Navigate, {
                  to: Co.profile.route
                })
              })]
            })
          }), (0, r.jsx)(ii, {})]
        })
      };
      const To = (0, _e.YK)({
        cancel_account_deletion_request_received_title: {
          defaultMessage: "Account Deletion Cancellation Request Received",
          description: "The title for the account deletion cancellation request received alert.",
          id: "cancel_account_deletion_request_received_title"
        },
        cancel_account_deletion_request_received_description: {
          defaultMessage: "Your account deletion request has been canceled. A confirmation email will be sent to the email address associated with your account. Once you receive that email, you will be able to sign in to your Rockstar Games account.",
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

      function No(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var Lo = function() {
        var e, t, n = (0, L.A)(),
          o = (0, i.useNavigate)(),
          s = (e = (0, i.useSearchParams)(), t = 1, function(e) {
            if (Array.isArray(e)) return e
          }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(e, t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return No(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? No(e, t) : void 0
            }
          }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }())[0].get("token"),
          c = rr({
            route: Be.CancelAccountDeletion,
            fetchOnInitial: !1,
            queryOrRoute: "/".concat(s)
          }),
          l = c.data,
          d = c.error,
          u = c.fetch,
          f = c.isRequestComplete;
        return (0, a.useEffect)(function() {
          s ? u({
            queryOrRoute: "/".concat(s)
          }) : o("/account")
        }, [s]), s && (0, r.jsx)(un, {
          isLoading: !f,
          children: (0, r.jsx)("div", {
            className: "_16mxz470",
            children: (0, r.jsxs)("div", {
              className: "_16mxz471",
              children: [(0, r.jsx)(fe, {
                className: "_16mxz473",
                label: "Rockstar Games",
                testId: "rockstarLogo"
              }), (0, r.jsx)($, {
                children: (0, r.jsx)(J, {
                  testId: "cancelTitle",
                  children: d ? n.formatMessage(To.cancel_account_deletion_error_title) : (null == l ? void 0 : l.hasConflicts) ? n.formatMessage(To.cancel_account_deletion_request_already_received_title) : n.formatMessage(To.cancel_account_deletion_request_received_title)
                })
              }), (0, r.jsx)("div", {
                className: "_16mxz472",
                "data-testid": "cancelDescription",
                children: d ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(E.Body, {
                    size: "SM",
                    children: n.formatMessage(To.cancel_account_deletion_error_description)
                  }), (0, r.jsx)(E.Body, {
                    size: "SM",
                    children: n.formatMessage(To.cancel_account_deletion_support_text)
                  })]
                }) : (null == l ? void 0 : l.hasConflicts) ? (0, r.jsx)(E.Body, {
                  size: "SM",
                  children: n.formatMessage(To.cancel_account_deletion_request_already_received_description)
                }) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(E.Body, {
                    size: "SM",
                    children: n.formatMessage(To.cancel_account_deletion_request_received_description)
                  }), (0, r.jsx)(E.Body, {
                    size: "SM",
                    children: n.formatMessage(To.cancel_account_deletion_thank_you_text)
                  })]
                })
              })]
            })
          })
        })
      };

      function Eo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      const Ro = function() {
          var e, t, n = (0, i.useLocation)(),
            r = (e = (0, i.useSearchParams)(), t = 2, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Eo(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Eo(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = r[0],
            s = r[1],
            c = n.hash;
          (0, a.useEffect)(function() {
            o.get("lang") && (o.delete("lang"), s(o), c && (window.location.hash = c))
          }, [o])
        },
        Go = (0, _e.YK)({
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

      function Uo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }
      var Vo = function() {
          var e, t, n = (0, L.A)(),
            o = (e = (0, i.useSearchParams)(), t = 1, function(e) {
              if (Array.isArray(e)) return e
            }(e) || function(e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null != n) {
                var r, a, i = [],
                  o = !0,
                  s = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                } catch (e) {
                  s = !0, a = e
                } finally {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                return i
              }
            }(e, t) || function(e, t) {
              if (e) {
                if ("string" == typeof e) return Uo(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uo(e, t) : void 0
              }
            }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            s = (0, i.useNavigate)(),
            c = o.get("ID"),
            l = o.get("code"),
            d = rr({
              fetchOnInitial: !1,
              route: Be.VerifyEmail
            }),
            u = d.error,
            f = d.isRequestComplete,
            _ = d.fetch;
          return (0, a.useEffect)(function() {
            c && l ? _({
              body: {
                rockstarId: Number(c),
                validationCode: l
              }
            }) : s("/account")
          }, []), c && l && (0, r.jsx)(un, {
            isLoading: !f,
            children: (0, r.jsx)("div", {
              className: "t0s62b0",
              children: (0, r.jsxs)("div", {
                className: "t0s62b1",
                children: [(0, r.jsx)(fe, {
                  className: "t0s62b3",
                  label: "Rockstar Games",
                  testId: "rockstarLogo"
                }), (0, r.jsx)($, {
                  children: (0, r.jsx)(J, {
                    children: n.formatMessage(Go.verify_email_title)
                  })
                }), (0, r.jsxs)("div", {
                  className: "t0s62b2",
                  children: [(0, r.jsx)(E.Body, {
                    size: "LG",
                    appearance: "bold",
                    testId: "alertTitle",
                    children: u ? n.formatMessage(Go.verify_email_alert_failure_title) : n.formatMessage(Go.verify_email_alert_success_title)
                  }), (0, r.jsx)(E.Body, {
                    size: "SM",
                    testId: "alertDescription",
                    children: u ? n.formatMessage(Go.verify_email_alert_failure_description) : n.formatMessage(Go.verify_email_alert_success_description)
                  })]
                })]
              })
            })
          })
        },
        qo = function(e) {
          var t = e.children,
            n = ke().getAccessToken,
            i = (0, L.A)(),
            o = be();
          return (0, a.useEffect)(function() {
            n()
          }, []), (0, a.useEffect)(function() {
            !1 === o.isAuthenticated && !1 === o.isAuthPending && window.location.replace(m.getAuthorizeUrl(i.locale))
          }, [o.isAuthenticated, o.isAuthPending]), (0, r.jsx)(un, {
            isLoading: !o.isAuthenticated,
            children: t
          })
        };

      function Fo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function zo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Bo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            zo(e, t, n[t])
          })
        }
        return e
      }

      function Ho(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        }(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }
      const Yo = (Xo = function() {
        var e, t;
        Ro(), e = (0, L.A)(), t = (0, i.useLocation)(), (0, a.useEffect)(function() {
          var n, r = null !== (n = Object.values(Co).find(function(e) {
            return "/account".concat(e.route) === t.pathname
          })) && void 0 !== n ? n : Co.catchAll;
          window.postMessage({
            title: e.formatMessage(r.title),
            type: "graph.titleUpdate"
          })
        }, [t.pathname]), (0, a.useEffect)(function() {
          (0, s.isCastleInitialized)() || (0, s.initializeCastle)({
            pk: m.CASTLE_PUBLISHABLE_KEY
          }, l.captureException)
        }, []);
        var n, c, d = (n = (0, a.useState)({
            isAuthenticated: !1,
            isAuthPending: !0,
            accessToken: void 0,
            tokenExpiresTime: void 0
          }), c = 2, function(e) {
            if (Array.isArray(e)) return e
          }(n) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(n, c) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return Fo(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fo(e, t) : void 0
            }
          }(n, c) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          u = d[0],
          f = d[1],
          _ = (0, a.useMemo)(function() {
            return Ho(Bo({}, u), {
              setAccessToken: function(e, t) {
                return f(Ho(Bo({}, u), {
                  isAuthPending: !1,
                  isAuthenticated: !!e,
                  accessToken: e,
                  tokenExpiresTime: t
                }))
              }
            })
          }, [u.isAuthPending, u.isAuthenticated]);
        return (0, r.jsx)(ge.Provider, {
          value: _,
          children: (0, r.jsx)(o.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            children: (0, r.jsx)(Ue, {
              children: (0, r.jsxs)(i.Routes, {
                children: [(0, r.jsx)(i.Route, {
                  path: Co.deleteCancel.route,
                  element: (0, r.jsx)(Lo, {})
                }), (0, r.jsx)(i.Route, {
                  path: Co.deleteComplete.route,
                  element: (0, r.jsx)(me, {})
                }), (0, r.jsx)(i.Route, {
                  path: Co.emailVerify.route,
                  element: (0, r.jsx)(Vo, {})
                }), (0, r.jsx)(i.Route, {
                  path: Co.catchAll.route,
                  element: (0, r.jsx)(qo, {
                    children: (0, r.jsx)(Do, {})
                  })
                })]
              })
            })
          })
        })
      }, function(e) {
        var t, n, i = (t = (0, a.useState)(), n = 2, function(e) {
            if (Array.isArray(e)) return e
          }(t) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, i = [],
                o = !0,
                s = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (e) {
                s = !0, a = e
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          }(t, n) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return C(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0
            }
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          o = i[0],
          s = i[1];
        return (0, a.useEffect)(function() {
          var e;
          (e = function() {
            var e;
            return function(e, t) {
              var n, r, a, i = {
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                      if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                      switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
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
                          i.label++, r = s[1], s = [0];
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
                      s = [6, e], r = 0
                    } finally {
                      n = a = 0
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
                            var e, t, n, r, a;
                            return I(this, function(i) {
                              switch (i.label) {
                                case 0:
                                  return e = M().iso, r = [(o = e, (0, k.A)(o.split("-")[0], ["relativetimeformat", "pluralrules", "listformat"]))], [4, P(e)];
                                case 1:
                                  return t = r.concat([i.sent()]), n = t[1], a = function(e) {
                                    var t = function(e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                          A(e, t, n[t])
                                        })
                                      }
                                      return e
                                    }({}, e);
                                    return t
                                  }(n), [2, {
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
              n = arguments;
            return new Promise(function(r, a) {
              var i = e.apply(t, n);

              function o(e) {
                D(i, r, a, o, s, "next", e)
              }

              function s(e) {
                D(i, r, a, o, s, "throw", e)
              }
              o(void 0)
            })
          })()
        }, []), (0, r.jsx)(h.A, {
          locale: (null == o ? void 0 : o.locale) || "en-US",
          messages: N({}, null == o ? void 0 : o.messages),
          children: o && (0, r.jsx)(Xo, N({}, e))
        }, "intl-provider")
      });
      var Xo
    },
    83222: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 23))
      }
      a.keys = () => Object.keys(r), a.id = 83222, e.exports = a
    },
    92637: (e, t, n) => {
      var r = {
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
        if (!n.o(r, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = r[e],
          a = t[0];
        return n.e(t[1]).then(() => n.t(a, 19))
      }
      a.keys = () => Object.keys(r), a.id = 92637, e.exports = a
    }
  }
]);