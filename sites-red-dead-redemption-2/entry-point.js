! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f16d4727-d005-452e-9a94-ac61da435ee8", e._sentryDebugIdIdentifier = "sentry-dbid-f16d4727-d005-452e-9a94-ac61da435ee8")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, d, f, n, o, c = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            44857: (e, a, r) => {
              r(13218)
            },
            67884: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + n
              };
              Number.isInteger
            },
            77600: (e, a, r) => {
              const t = r(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(7722), r.e(3830), r.e(9320), r.e(2229), r.e(6497), r.e(5966), r.e(5426)]).then((() => () => r(55426)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = c, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var n = 2 & r && a;
            "object" == typeof n && !~e.indexOf(n); n = t(n)) Object.getOwnPropertyNames(n).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          5: "9e33490ebef8bada6c93c8b136146e4d",
          131: "9a9bd020e7104249b420ad7e6e2f6dc4",
          278: "3a96f64f9784d6157e16c56b64734a61",
          299: "8609c65308e7b81574aac94aa1957476",
          314: "79ea8ac80d013ed29e833712e7df4ae7",
          621: "21229b01669d08eca4cd5bb3dd2e8c67",
          662: "4acbaa5cc4208b96dfe73b8d8fc36753",
          824: "b2b2ef5657da06c59360ce16d2448974",
          838: "b3d3479d38100957b13b7e7e6f108ce9",
          907: "82972cdbb2cd54163ba526cb6fa4c37e",
          964: "49930d60857c703e879613bac8873c56",
          1054: "63a89cd60e1e27f194bd9e18169cbe07",
          1242: "0954e6d63c4097be28f1fd7a73d15130",
          1822: "81bf09c12cfd41c2e89864e7bd6d1135",
          1868: "c1bebd2e2d58793f68de0a4b5330e8e8",
          2156: "ce85e5fbb2fb9d8b52ece4e49099c2f6",
          2171: "83022795e26880465b2531b692f8fec8",
          2221: "b41c11b3f4b1895c813f7817357b8c7d",
          2243: "79b80b7d474357b1ee20415fb83507a8",
          2347: "5c1354c96e5d3be36cc33a8f284e1f0a",
          2365: "fb33499e814e64ea819f0bc8cfad299c",
          2398: "41cfb43da53b92db33c3aff23016da4e",
          2466: "f2c0e0fc7213eac812e0bff40353ac0a",
          2592: "518a6e3e85c8c77c8b0b730c0f0b51fe",
          2642: "58009fbf8fb0233efecf4ae9f47a5555",
          2678: "70c3ad8617ffd604a954a2c6f953bd4a",
          2864: "ac247364c86ec09f9c81a38c102c49ca",
          3002: "21c76e7552049125e1d73ba4acdf232d",
          3034: "b35fd8a657365faf85960efc9d7d1c07",
          3197: "1b13b82eb5408b0c2921f76fbcfa9b4b",
          3218: "4b61aa8487a1861f656f33fe1c94cea7",
          3343: "b7f3891773529a38e3d11776043281c5",
          3370: "ea4d7c13f2f119350a785ea61646668e",
          3475: "8bedd1a981c90cef13a1566aa390169e",
          3486: "d21633b225ed88daaabbf9a495f4f118",
          3697: "344b27956dc4b16be0722bef655c957d",
          3830: "b2c8e73c86630930231663c3e484394f",
          3885: "d007ecd4755c0dce34f85577f2cc7816",
          3941: "60ce2c54b6c119f633d30c90413ef786",
          4011: "8ca766f111bd0140c7caec98132b04d8",
          4105: "9791695881d6001ece22dd5eabee89a5",
          4480: "ed19f5fdacb91946de14fa914af39952",
          4528: "98372af2c4a525c1d3fd42c2e4e53922",
          4621: "de55002a8340320bb7bc67e436af747b",
          4700: "7e38225bea84cb96c1c4b24adf94f54b",
          4710: "8c8b53ea6a70f6050a2b3d4f770c30f6",
          4731: "0cd9c6b3f05808bb885c0b43feda8b76",
          4799: "aad771ded671d8d95792620f9abcd2e1",
          4851: "330c6889e58b401761e1f77fe300005f",
          4861: "a840df50e8efa40181cc05c704f3e889",
          4913: "05123300195f2255ede94b6332173860",
          4981: "c852b76c3ed4051852177bdb1f175cf8",
          5018: "e0d30cd5912512399a5cdb3324cfd917",
          5233: "e7589d9ba22b4bf3f1022c4404e3cd7a",
          5259: "cc454b11e032b3e29a0e93c34b0c3439",
          5426: "17d8c4f2c60df4759520379856bd908b",
          5530: "f4e8fc22c0f66717e110929dfc4a4128",
          5639: "adc3a8334789ed213811b7174d0fa021",
          5663: "1d774aee95aa3b90a5f30cc5464f56a6",
          5742: "cc1fe905347159801d1b33f98074e90b",
          5830: "742f62c820c4dda27e71328b8912173e",
          5832: "fa6bc22a778bb5b2ab0094614fed8b60",
          6267: "47c6984bb2fafa9f1c3627c542c0f84a",
          6280: "ab6544f8b82d6aeb3e5bc43d6c111459",
          6285: "fb1323d4d7ddf3fe6c9813dde58e2e57",
          6361: "3c15de992bde86013b92835c0e415e2f",
          6497: "fd99b7cb5f2f540e2f661aa6dcb45969",
          6664: "998200943333ea99b61e0e7342a2cfe0",
          6879: "535a8f88ac6b8e3fea29bd26a0556dcf",
          6891: "f770c421e6c95b2ec29778a771605a02",
          6997: "172c024cff6eda3a3cc8580d1cde48c9",
          7010: "bbe983b74071064698e17196e9de72a6",
          7073: "751c091ca597c369dafea298eb23cb8c",
          7353: "05420597129955668efc4873b5ad118a",
          7436: "581f5179201a49595f20163ecd58363b",
          7452: "977f3b23a5c7d77556e7d141d260f199",
          7453: "c7c0603f46c02ff55e1e42a722efdefd",
          7722: "5ece7c3333fdface263de64e7912b158",
          7970: "046420e2d450a84a34dddb0066af840a",
          8272: "f61f0689c6acef413523b571dcb23ea7",
          8391: "b588a42c286a89c42b20f5b5d21223d6",
          8583: "a7326b4d7b8ff2c57f63ac4e24ae2f24",
          8654: "b7bb990516e25551bde8f14e839fddda",
          8755: "217bfdb6491eec5d44ad2780f19a88bc",
          8880: "802ce1f29b35b501f2b6a3cf22c6d119",
          8970: "a8c2e7c0bf1208cdeca893ac1175e141",
          9022: "fc704508cd399d607326505bc7df93fc",
          9028: "27b38c4950c33a4ba0b49a3baf0b1c90",
          9126: "a25204db21bf42e6c96fc4bc7c328480",
          9320: "47b4c1fee5162ed9bd0be89eead15df5",
          9377: "bd4d9ef7ed06823baada6a6e5bc7744d",
          9615: "b3e7e226bd8646eddd8b1bc9aebaacda",
          9936: "3059c309c0c721acd11ad127f6de6fb6",
          9990: "4d9d145a2b737419855fdad50df26f2b"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          964: "862399b32420b2fbc03810a979eab2e5",
          5426: "5b398003b12b7b4b1d769281f6b4a7ab",
          8583: "862399b32420b2fbc03810a979eab2e5"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var n, o;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var s = c[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  n = s;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", f + r), n.src = e), d[e] = [a];
            var l = (a, r) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), o && document.head.appendChild(n)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          5426: [31879]
        }, o = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, n, o, c) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return o(b, n, c);
                    var i = b.then((e => o(e, n)), d);
                    if (!c) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, t[1], r, 0, c, d),
                c = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, n, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                n = "@rockstargames/sites-red-dead-redemption-2",
                o = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : n > o.from)) && (d[a] = {
                    get: r,
                    from: n,
                    eager: !!t
                  })
                },
                c = [];
              return "default" === r && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(5)]).then((() => () => i(35671))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(7722), i.e(3830), i.e(2592), i.e(2229), i.e(6497), i.e(5966), i.e(964)]).then((() => () => i(50964))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7722), i.e(2229), i.e(6497)]).then((() => () => i(35553))))), o("lodash", "4.17.21", (() => i.e(4981).then((() => () => i(4981))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(621)]).then((() => () => i(90621))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229), i.e(3271)]).then((() => () => i(94105))))), o("react", "18.3.1", (() => i.e(8654).then((() => () => i(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return c.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return c.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                n.push(0 === o ? "not(" + c() + ")" : 1 === o ? "(" + c() + " || " + c() + ")" : 2 === o ? n.pop() + " " + n.pop() : a(o))
              }
              return c();

              function c() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (n >= t.length || "o" == (i = (typeof(b = t[n]))[0])) return !c || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    c = !1, o--
                  } else {
                    if (o <= d || i < s != f) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, f) => {
              var n = f ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(n).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var n = r[t],
                    o = (typeof n)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  t++
                }
              })(a, t) ? a : t), 0)) && n[t]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, r, t, d, f) {
              var n = i.I(a);
              return n && n.then && !t ? n.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            })(((e, r, f, n, o, c) => {
              if (!((e, a) => e && i.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, c);
              var b, s = t(r, f, o, n);
              return s ? ((b = s).loaded = 1, b.get()) : c ? c() : void d(((e, r, t, d, f) => {
                var n = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(n).map((e => e + " from " + n[e].from)).join(", ")
              })(r, e, f, o, n))
            })),
            n = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(98654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(4105), i.e(3271)]).then((() => () => i(94105))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(4981).then((() => () => i(4981))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => i(35553))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([i.e(2592), i.e(8583)]).then((() => () => i(50964))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(838)]).then((() => () => i(35671))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3002).then((() => () => i(90621)))))
            },
            c = {
              2229: [62229],
              3271: [23271],
              5426: [47224, 81788],
              5966: [95966],
              6497: [9623, 16188]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(n, e)) return a.push(n[e]);
              if (!b[e]) {
                var r = a => {
                  n[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete n[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(n[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                964: 1,
                5426: 1,
                8583: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (n = r[t]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === a)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var n;
                      if ((d = (n = f[t]).getAttribute("data-href")) === e || d === a) return n
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var n = r && r.type,
                        o = r && r.target && r.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, f.parentNode && f.parentNode.removeChild(f), d(c)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|3271|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                n = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, t[1](n)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                n = r[1],
                o = r[2],
                c = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in n) i.o(n, t) && (i.m[t] = n[t]);
                o && o(i)
              }
              for (a && a(r); c < f.length; c++) d = f[c], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i(44857), i(85819)
      })())
    }
  }
}));