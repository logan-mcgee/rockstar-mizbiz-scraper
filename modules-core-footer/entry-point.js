try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b02e9e9c-e6c0-4ab3-a5cc-77c08352432f", e._sentryDebugIdIdentifier = "sentry-dbid-b02e9e9c-e6c0-4ab3-a5cc-77c08352432f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, a, t, o, d, c, n, f, i, l, s, b, u, h, p, m, g, y, v, w, _, P, k, E, S = {
            20154(e, r, a) {
              (0, a(89160).w)(1)
            },
            89160(e, r, a) {
              const t = a(51908).y;
              r.w = function(e) {
                if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                a.p = t(a.y.meta.url, e)
              }
            },
            35649(e, r, a) {
              a(20154)
            },
            51908(e, r, a) {
              r.y = function(e, r) {
                var a = document.createElement("a");
                a.href = e;
                for (var t = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, d = t.length; o !== r && d >= 0;) "/" === t[--d] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return a.protocol + "//" + a.host + c
              };
              Number.isInteger
            },
            98478(e, r, a) {
              "use strict";
              var t = {
                  "./root": () => Promise.all([a.e(2070), a.e(2145), a.e(31), a.e(7278), a.e(8710), a.e(3094), a.e(4637), a.e(4017), a.e(5688), a.e(9889), a.e(8830), a.e(2711)]).then(() => () => a(32711))
                },
                o = (e, r) => (a.R = r, r = a.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), a.R = void 0, r),
                d = (e, r) => {
                  if (a.S) {
                    var t = "default",
                      o = a.S[t];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[t] = e, a.I(t, r)
                  }
                };
              a.d(r, {
                get: () => o,
                init: () => d
              })
            }
          },
          j = {};

        function O(e) {
          var r = j[e];
          if (void 0 !== r) return r.exports;
          var a = j[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return S[e].call(a.exports, a, a.exports, O), a.loaded = !0, a.exports
        }
        return O.m = S, O.c = j, O.y = r, O.amdO = {}, O.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return O.d(r, {
            a: r
          }), r
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, O.t = function(r, t) {
          if (1 & t && (r = this(r)), 8 & t) return r;
          if ("object" == typeof r && r) {
            if (4 & t && r.__esModule) return r;
            if (16 & t && "function" == typeof r.then) return r
          }
          var o = Object.create(null);
          O.r(o);
          var d = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var c = 2 & t && r;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = a(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => r[e]);
          return d.default = () => r, O.d(o, d), o
        }, O.d = (e, r) => {
          for (var a in r) O.o(r, a) && !O.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: r[a]
          })
        }, O.f = {}, O.e = e => Promise.all(Object.keys(O.f).reduce((r, a) => (O.f[a](e, r), r), [])), O.u = e => "js/" + {
          31: "e30065bc2f49bfbe2ccfb636cd0a78cf",
          162: "8dd67e6d53c709d8007dc1645c0b78e6",
          609: "04764798db679025dd1b6f62b45a6591",
          685: "92e97637402efcebc1940fcfa1390566",
          727: "aed7ede8af379a0281861b8184d05fb7",
          784: "07b48017e51d9397e522c3f54a23df95",
          799: "6b35d5faccd85647cb2d335d586f4bd8",
          846: "549e491289155ac0399c86c7b1650366",
          1003: "f2e48e1d60227004f76856d592277bb2",
          1061: "5129a134f175833ae205c1d407d825cd",
          1374: "85f10c44ec285cd414c37b404280dab1",
          1378: "4bf8beb589ef0e701e065640e8f87378",
          1835: "96b1e5a461a28ee05cb02726e0913818",
          2070: "8e7453bfc6577e3b465a76ecb37d42d5",
          2145: "0adadc64f716eb0bb87abf97fd97f131",
          2204: "d19d59c4f5e5d430116bba3be596a34b",
          2497: "07170829fa3996315d961854789e5a02",
          2581: "8e222fe1dc9131dd70e6572c5de57e02",
          2592: "0a948936735953086fc918807fe53bcf",
          2711: "ad5c4f58c598e44f4073b1e9fb138831",
          2730: "d2f215d75750b68c10ea2baeaa85b461",
          2836: "fc66da7fc2b9b042ecc8d0ca579a9485",
          2993: "f0ff03f6718722f76d4ccd189fc7d328",
          3031: "fbf3c69fa52f00377e6c7d9f3c5314df",
          3094: "e7af077e297d0f11f1e6bc899ecc0f07",
          3170: "fdceeede57312f980ea0c4b86010d3cf",
          3922: "4fd855d3a628de0ac337aae4296363a3",
          3982: "5127422d2b141876465204acbc978172",
          4269: "0c7a496642f61450f529fc5a272c32e6",
          4292: "484c2573ef4c674cb5630e28c80d32b1",
          4388: "35ec6da46f85d3d936d7be2b2707d730",
          4498: "b77085f254a8819fafe9a0132a7bd075",
          4566: "f82dbfbf48373e210d5c0b7697e22216",
          4597: "77b20986df9e29e10016a8297d7a438c",
          4656: "bb58c490bfe35681e67d854c35f43f7f",
          4756: "d7c1ea100264c02e541b1c43a1e9626b",
          4976: "6b10b645152aa42d93e5eac7e126f83c",
          5122: "a9143ce7bbdea8b2ad8182c5abe02a8d",
          5612: "222d64a02864b48ed3f04edad7c9091d",
          5848: "943b9f4faadaa3a76af93a1556145497",
          5963: "45bfa26f9736363fb182eef8ccdd9dd1",
          5997: "2ca7bcae1fdf566c41069a950aaef0db",
          6035: "9f91681838b5d7454befa0e92030e19c",
          6087: "f7715f1cb4b0a67ef4b73d4dcf282115",
          6279: "828489648a9eb02a2624209100040038",
          6507: "2354c929aacc182908e4f98cdc06c0ba",
          6583: "36193d6e77dc227a8b0209bd37f5b94e",
          7165: "3c6105659d81332f4f34f36bf963473b",
          7278: "4aefdcbbc957ecfe9916b4bb6b1f2458",
          7568: "6a5c90fb2a9f8d547cac8d9bbd220731",
          7902: "8ff808d56c56e17eba853f9ddbe94119",
          8267: "8b2ddf6eeba2763fd7bbef86c33d2d48",
          8403: "e69c6a3cf76421acdc2d58dececce8ec",
          8710: "eac0572477041c66c4dacff93abe91c4",
          8805: "6335ce890b8dc041d4f5cf2a581e8a50",
          8853: "ba3d31bb77049b664fa4ca04fde1d56e",
          8940: "47b3ea19b043970b3b1c76b73a928477",
          9183: "87ae13dba41b81925cf0d9154fae0ffe",
          9889: "7acae08f365ab1b081bf685ea511f97b"
        } [e] + ".js", O.miniCssF = e => "css/" + {
          727: "94ca34ab971f4ad5c492254565924da4",
          2204: "d2745e930c785d241cc9f63c62148327",
          2711: "082266d7e2cb9b4540a6748d09c4ab78",
          2836: "d32a093c3f7fa90f4e2e625cce6ffb75",
          3094: "4d4c8e70d63a124371425196b94f9781",
          3170: "d2745e930c785d241cc9f63c62148327",
          5122: "a87a37ad3b6ff03313dd2e82a885890f",
          7001: "d2745e930c785d241cc9f63c62148327",
          8267: "a912401fa15a6cbfb0f6afc3426f953b",
          9071: "d2745e930c785d241cc9f63c62148327",
          9889: "53cb4bb970ac1ab4c7c81f0e8f54045a"
        } [e] + ".css", O.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), O.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, o = "@rockstargames/modules-core-footer:", O.l = (e, r, a, d) => {
          if (t[e]) t[e].push(r);
          else {
            var c, n;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), i = 0; i < f.length; i++) {
                var l = f[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + a) {
                  c = l;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", O.nc && c.setAttribute("nonce", O.nc), c.setAttribute("data-webpack", o + a), c.src = e), t[e] = [r];
            var s = (r, a) => {
                c.onerror = c.onload = null, clearTimeout(b);
                var o = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), o && o.forEach(e => e(a)), r) return r(a)
              },
              b = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, O.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, O.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          O.S = {};
          var e = {},
            r = {};
          O.I = (a, t) => {
            t || (t = []);
            var o = r[a];
            if (o || (o = r[a] = {}), !(t.indexOf(o) >= 0)) {
              if (t.push(o), e[a]) return e[a];
              O.o(O.S, a) || (O.S[a] = {});
              var d = O.S[a],
                c = "@rockstargames/modules-core-footer",
                n = (e, r, a, t) => {
                  var o = d[e] = d[e] || {},
                    n = o[r];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (o[r] = {
                    get: a,
                    from: c,
                    eager: !!t
                  })
                },
                f = [];
              switch (a) {
                case "default":
                  n("@foundry/icons", "6.2.0", () => Promise.all([O.e(2070), O.e(4976), O.e(4637), O.e(4017), O.e(2204)]).then(() => () => O(64976))), n("@foundry/icons", "6.2.0", () => Promise.all([O.e(2070), O.e(4566), O.e(4637), O.e(4017), O.e(3170)]).then(() => () => O(74566))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([O.e(2497), O.e(2145), O.e(31), O.e(4637), O.e(8403)]).then(() => () => O(68403))), n("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([O.e(2070), O.e(2145), O.e(5848), O.e(6507), O.e(31), O.e(7278), O.e(7568), O.e(4637), O.e(4017), O.e(5997), O.e(2920), O.e(5688), O.e(3331), O.e(8267), O.e(9889), O.e(7165)]).then(() => () => O(88986))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([O.e(6507), O.e(31), O.e(6583), O.e(4637), O.e(5997), O.e(5688), O.e(3331), O.e(1835)]).then(() => () => O(90799))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([O.e(2145), O.e(6507), O.e(31), O.e(1378), O.e(4637), O.e(5997), O.e(5688), O.e(8940), O.e(4597)]).then(() => () => O(18940))), n("react-dom", "18.3.1", () => Promise.all([O.e(162), O.e(4637)]).then(() => () => O(30162))), n("react-router-dom", "6.30.3", () => Promise.all([O.e(4269), O.e(4637), O.e(4017)]).then(() => () => O(74269))), n("react", "18.3.1", () => O.e(2581).then(() => () => O(22581)));
                  break;
                case "footer":
                  n("@foundry/react", "6.2.0", () => Promise.all([O.e(2497), O.e(2070), O.e(5848), O.e(727), O.e(7278), O.e(8710), O.e(5122), O.e(4637), O.e(4017), O.e(2920)]).then(() => () => O(33740))), n("@foundry/react", "6.2.0", () => Promise.all([O.e(2497), O.e(2070), O.e(5848), O.e(727), O.e(7278), O.e(8710), O.e(2836), O.e(3094), O.e(4637), O.e(4017), O.e(2920), O.e(8830)]).then(() => () => O(52836)))
              }
              return e[a] = f.length ? Promise.all(f).then(() => e[a] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          O.g.importScripts && (e = O.g.location + "");
          var r = O.g.document;
          if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
            var a = r.getElementsByTagName("script");
            if (a.length)
              for (var t = a.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), O.p = e
        })(), d = e => {
          var r = e => e.split(".").map(e => +e == e ? +e : e),
            a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = a[1] ? r(a[1]) : [];
          return a[2] && (t.length++, t.push.apply(t, r(a[2]))), a[3] && (t.push([]), t.push.apply(t, r(a[3]))), t
        }, c = (e, r) => {
          e = d(e), r = d(r);
          for (var a = 0;;) {
            if (a >= e.length) return a < r.length && "u" != (typeof r[a])[0];
            var t = e[a],
              o = (typeof t)[0];
            if (a >= r.length) return "u" == o;
            var c = r[a],
              n = (typeof c)[0];
            if (o != n) return "o" == o && "n" == n || "s" == n || "u" == o;
            if ("o" != o && "u" != o && t != c) return t < c;
            a++
          }
        }, n = e => {
          var r = e[0],
            a = "";
          if (1 === e.length) return "*";
          if (r + .5) {
            a += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
            for (var t = 1, o = 1; o < e.length; o++) t--, a += "u" == (typeof(c = e[o]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return a
          }
          var d = [];
          for (o = 1; o < e.length; o++) {
            var c = e[o];
            d.push(0 === c ? "not(" + f() + ")" : 1 === c ? "(" + f() + " || " + f() + ")" : 2 === c ? d.pop() + " " + d.pop() : n(c))
          }
          return f();

          function f() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, f = (e, r) => {
          if (0 in e) {
            r = d(r);
            var a = e[0],
              t = a < 0;
            t && (a = -a - 1);
            for (var o = 0, c = 1, n = !0;; c++, o++) {
              var i, l, s = c < e.length ? (typeof e[c])[0] : "";
              if (o >= r.length || "o" == (l = (typeof(i = r[o]))[0])) return !n || ("u" == s ? c > a && !t : "" == s != t);
              if ("u" == l) {
                if (!n || "u" != s) return !1
              } else if (n)
                if (s == l)
                  if (c <= a) {
                    if (i != e[c]) return !1
                  } else {
                    if (t ? i > e[c] : i < e[c]) return !1;
                    i != e[c] && (n = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= a) return !1;
                n = !1, c--
              } else {
                if (c <= a || l < s != t) return !1;
                n = !1
              } else "s" != s && "n" != s && (n = !1, c--)
            }
          }
          var b = [],
            u = b.pop.bind(b);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? f(h, r) : !u())
          }
          return !!u()
        }, i = (e, r) => e && O.o(e, r), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((r, a) => (e[a].eager && (r[a] = e[a]), r), {}), b = (e, r, a) => {
          var t = a ? s(e[r]) : e[r];
          return (r = Object.keys(t).reduce((e, r) => !e || c(e, r) ? r : e, 0)) && t[r]
        }, u = (e, r, a) => {
          var t = a ? s(e[r]) : e[r];
          return Object.keys(t).reduce((e, r) => !e || !t[e].loaded && c(e, r) ? r : e, 0)
        }, h = (e, r, a, t) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + n(t) + ")", p = e => {
          throw new Error(e)
        }, m = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, y = (e, r, a) => a ? a() : ((e, r) => p("Shared module " + r + " doesn't exist in shared scope " + e))(e, r), v = (g = e => function(r, a, t, o, d) {
          var c = O.I(r);
          return c && c.then && !t ? c.then(e.bind(e, r, O.S[r], a, !1, o, d)) : e(r, O.S[r], a, t, o, d)
        })((e, r, a, t, o) => i(r, a) ? l(b(r, a, t)) : y(e, a, o)), w = g((e, r, a, t, o, d) => {
          if (!i(r, a)) return y(e, a, d);
          var c = u(r, a, t);
          return f(o, c) || m(h(r, a, c, o)), l(r[a][c])
        }), _ = {}, P = {
          4637: () => w("default", "react", !1, [1, 18, 2, 0], () => O.e(2581).then(() => () => O(22581))),
          84017: () => w("default", "react-dom", !1, [1, 18, 2, 0], () => O.e(162).then(() => () => O(30162))),
          42909: () => w("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([O.e(2497), O.e(2145), O.e(784)]).then(() => () => O(68403))),
          46252: () => w("default", "react-router-dom", !1, [1, 6, 30, 3], () => Promise.all([O.e(4269), O.e(4017)]).then(() => () => O(74269))),
          82199: () => w("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([O.e(6507), O.e(6583), O.e(5997), O.e(3331), O.e(799)]).then(() => () => O(90799))),
          8830: () => w("default", "@foundry/icons", !1, [0], () => Promise.all([O.e(4566), O.e(9071)]).then(() => () => O(74566))),
          39559: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(2497), O.e(5848), O.e(727), O.e(2836), O.e(2920)]).then(() => () => O(52836))),
          76923: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([O.e(5848), O.e(6507), O.e(7568), O.e(5997), O.e(2920), O.e(3331), O.e(8267)]).then(() => () => O(88986))),
          52920: () => w("default", "@foundry/icons", !1, [0], () => Promise.all([O.e(4976), O.e(7001)]).then(() => () => O(64976))),
          13331: () => w("default", "@rsgweb/utils", !1, [0], () => Promise.all([O.e(2145), O.e(1378), O.e(8940)]).then(() => () => O(18940))),
          44007: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(2497), O.e(727), O.e(8710), O.e(5122)]).then(() => () => O(33740)))
        }, k = {
          2711: [39559, 76923],
          2920: [52920],
          3331: [13331],
          4017: [84017],
          4637: [4637],
          5688: [42909, 46252],
          8267: [44007],
          8830: [8830],
          9889: [82199]
        }, E = {}, O.f.consumes = (e, r) => {
          O.o(k, e) && k[e].forEach(e => {
            if (O.o(_, e)) return r.push(_[e]);
            if (!E[e]) {
              var a = r => {
                _[e] = 0, O.m[e] = a => {
                  delete O.c[e], a.exports = r()
                }
              };
              E[e] = !0;
              var t = r => {
                delete _[e], O.m[e] = a => {
                  throw delete O.c[e], r
                }
              };
              try {
                var o = P[e]();
                o.then ? r.push(_[e] = o.then(a).catch(t)) : a(o)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            O.f.miniCss = (r, a) => {
              e[r] ? a.push(e[r]) : 0 !== e[r] && {
                727: 1,
                2204: 1,
                2711: 1,
                2836: 1,
                3094: 1,
                3170: 1,
                5122: 1,
                7001: 1,
                8267: 1,
                9071: 1,
                9889: 1
              } [r] && a.push(e[r] = (e => new Promise((r, a) => {
                var t = O.miniCssF(e),
                  o = O.p + t;
                if (((e, r) => {
                    for (var a = document.getElementsByTagName("link"), t = 0; t < a.length; t++) {
                      var o = (c = a[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === r)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((o = (c = d[t]).getAttribute("data-href")) === e || o === r) return c
                    }
                  })(t, o)) return r();
                ((e, r, a, t, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", O.nc && (d.nonce = O.nc), d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) t();
                    else {
                      var c = a && a.type,
                        n = a && a.target && a.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = n, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = r, document.head.appendChild(d)
                })(e, o, 0, r, a)
              }))(r).then(() => {
                e[r] = 0
              }, a => {
                throw delete e[r], a
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          O.f.j = (r, a) => {
            var t = O.o(e, r) ? e[r] : void 0;
            if (0 !== t)
              if (t) a.push(t[2]);
              else if (/^((333|700|907)1|2920|4017|4637|5688|8830)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise((a, o) => t = e[r] = [a, o]);
              a.push(t[2] = o);
              var d = O.p + O.u(r),
                c = new Error;
              O.l(d, a => {
                if (O.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  c.message = "Loading chunk " + r + " failed.\n(" + o + ": " + d + ")", c.name = "ChunkLoadError", c.type = o, c.request = d, t[1](c)
                }
              }, "chunk-" + r, r)
            }
          };
          var r = (r, a) => {
              var t, o, [d, c, n] = a,
                f = 0;
              if (d.some(r => 0 !== e[r])) {
                for (t in c) O.o(c, t) && (O.m[t] = c[t]);
                n && n(O)
              }
              for (r && r(a); f < d.length; f++) o = d[f], O.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          a.forEach(r.bind(null, 0)), a.push = r.bind(null, a.push.bind(a))
        })(), O.nc = void 0, O(35649), O(98478)
      })())
    }
  }
});