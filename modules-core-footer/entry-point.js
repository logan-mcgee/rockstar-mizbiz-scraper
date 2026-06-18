try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "306e9e41-0220-42e4-9762-702e0f4c7dea", e._sentryDebugIdIdentifier = "sentry-dbid-306e9e41-0220-42e4-9762-702e0f4c7dea")
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
        var e, t, a, o, d, n, c, f, i, l, s, b, u, h, p, m, g, y, v, w, _, P, k, E, S = {
            20154(e, r, t) {
              (0, t(89160).w)(1)
            },
            89160(e, r, t) {
              const a = t(51908).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            35649(e, r, t) {
              t(20154)
            },
            51908(e, r, t) {
              r.y = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, d = a.length; o !== r && d >= 0;) "/" === a[--d] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var n = a.slice(0, d + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            98478(e, r, t) {
              "use strict";
              var a = {
                  "./root": () => Promise.all([t.e(2070), t.e(2145), t.e(31), t.e(7278), t.e(8710), t.e(9940), t.e(4637), t.e(4017), t.e(5688), t.e(9889), t.e(8021), t.e(6797)]).then(() => () => t(66797))
                },
                o = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, r),
                d = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      o = t.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => d
              })
            }
          },
          j = {};

        function O(e) {
          var r = j[e];
          if (void 0 !== r) return r.exports;
          var t = j[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return S[e].call(t.exports, t, t.exports, O), t.loaded = !0, t.exports
        }
        return O.m = S, O.c = j, O.y = r, O.amdO = {}, O.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return O.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, O.t = function(r, a) {
          if (1 & a && (r = this(r)), 8 & a) return r;
          if ("object" == typeof r && r) {
            if (4 & a && r.__esModule) return r;
            if (16 & a && "function" == typeof r.then) return r
          }
          var o = Object.create(null);
          O.r(o);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var n = 2 & a && r;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = t(n)) Object.getOwnPropertyNames(n).forEach(e => d[e] = () => r[e]);
          return d.default = () => r, O.d(o, d), o
        }, O.d = (e, r) => {
          for (var t in r) O.o(r, t) && !O.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, O.f = {}, O.e = e => Promise.all(Object.keys(O.f).reduce((r, t) => (O.f[t](e, r), r), [])), O.u = e => "js/" + {
          31: "b17373f3535863eda6e17a20d06ac4e6",
          162: "0b4b8010a68951ef10ab6e2be4968c42",
          292: "861f4b14262e114806d2e601f76b8798",
          447: "ee5983276a7f5514935d709dc08409f6",
          597: "0c1d0bf2f3242068e18ebe4a7c793dd5",
          622: "55220bca807c324f8cbc81067a6ef367",
          649: "1f1f4e035fb1a9d6881ee9547ea9e023",
          784: "8d610739fb19694587d655ae47b81433",
          799: "e15ae496ef956a9c3c2843a5cb9fac37",
          1378: "b6d037c6117db63073a1c34321b3d049",
          1835: "2be44b70d17c4f7150a41750366101c4",
          1877: "8e0ca8be567b860a3bb94c2a43b4eb02",
          1924: "ebb1d6e71f10e215ace97ee91bf21b70",
          2032: "c2e70dabb10c43456f725fb1e2cbbeb7",
          2070: "759c53815a3e40c99a88df9a23055f81",
          2145: "bc2753eae747c59900ebc732593220ac",
          2316: "737ffeea481dcee1c66cfcdca28a3916",
          2404: "2856cab48265caa1808e321c920fff17",
          2497: "731074a224c56995aac653ef1cae2152",
          2581: "df24728eda7744450d2e845ea3764d1f",
          2760: "a9bd0c1f640e9df33ce066ac8a1f26e1",
          2837: "01f636871634b5e0a8aceff4eb9a3343",
          2913: "c10fccf162fda7f121983f33beb176cb",
          3002: "f72909835313783ff65db84c951a90a5",
          3171: "0865cfcdf94de40b2efe8382c4077a0d",
          3406: "13994655478baf22c3c0a13c8df1bc33",
          4114: "72784160b16cd848aff4d6a441f78a06",
          4144: "51611a0cfac1770d4298dfc171a0fd6f",
          4235: "624c1ae42cdb6c4d810dd6497518d2c4",
          4269: "032d981b387b2714a4dc0bbb52d40b1a",
          4572: "5c63e94b0c1a5106943c6e443ad0f3ee",
          4597: "01692cf805221301f4552886ed3e2417",
          4756: "e7b2a3466d6cc1fab369026b54e9bb09",
          4974: "6cb2b71d2347f36cce6aa2cf92c713fc",
          5038: "bffb4c91031911957a938ed072f4e3ff",
          5217: "1d155022f51a1a426e84dc5d3ce953f8",
          5389: "f59f2cf3f3079d7e1ca50abccd8a615f",
          5997: "cd3f0cb0718b9fed213de71331362d54",
          6045: "e9a456a14b570db46e711f606e14ded3",
          6109: "ac9ec25414164e0efab1dc3265ab73bd",
          6501: "80e8f4fe19fd0e68a691b8e78a157bf9",
          6507: "b890c659e2a56d2c2659f7308fcbcb92",
          6583: "d0f7c4a2586bd2703c94f40a39fa4907",
          6617: "24232fdc2e4f0f4a3f74e7ce3376624a",
          6797: "b1d5d7c095f40c7d192aa0f49e6512b4",
          7278: "260e889bd82d13bf73a358220a75b9a9",
          7367: "9b0619d0de63048483cd67e3a4604331",
          8267: "6c228fe4a2318d01376202adf255c5ae",
          8403: "72165c60757a2e92baed066f7e3da5c7",
          8710: "9c31f288dc42d01a467d74cbebcce9f8",
          8915: "e1e2d7490795c1a4cb5b014693ebf771",
          9062: "76001b46b0df22053496287dfa0ddfd5",
          9298: "6cad9ccd32c364ecb9c7bd4626196ed4",
          9441: "bd01b5db1154f6161f43d1068b6ca1f2",
          9447: "fc956a0cb80fa89efc6fcb9dd9e9729f",
          9869: "51b1f601bd6cc719932c991da0076d2d",
          9889: "610a303b92257dd84d8b71bcd63de5a3",
          9940: "6e9bcbc65844bb2cd2758dddc3f8922a",
          9947: "17350498443d9a235368e937c0d4bc12"
        } [e] + ".js", O.miniCssF = e => "css/" + {
          2913: "d32a093c3f7fa90f4e2e625cce6ffb75",
          4114: "1c4ea6d0d498dcb46f807b54efb5213e",
          5217: "d2745e930c785d241cc9f63c62148327",
          6045: "a87a37ad3b6ff03313dd2e82a885890f",
          6174: "d2745e930c785d241cc9f63c62148327",
          6797: "082266d7e2cb9b4540a6748d09c4ab78",
          7725: "d2745e930c785d241cc9f63c62148327",
          8267: "a912401fa15a6cbfb0f6afc3426f953b",
          9869: "d2745e930c785d241cc9f63c62148327",
          9889: "53cb4bb970ac1ab4c7c81f0e8f54045a",
          9940: "6877edf34255ca4f3c9e899ce71010ce"
        } [e] + ".css", O.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), O.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), a = {}, o = "@rockstargames/modules-core-footer:", O.l = (e, r, t, d) => {
          if (a[e]) a[e].push(r);
          else {
            var n, c;
            if (void 0 !== t)
              for (var f = document.getElementsByTagName("script"), i = 0; i < f.length; i++) {
                var l = f[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + t) {
                  n = l;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", O.nc && n.setAttribute("nonce", O.nc), n.setAttribute("data-webpack", o + t), n.src = e), a[e] = [r];
            var s = (r, t) => {
                n.onerror = n.onload = null, clearTimeout(b);
                var o = a[e];
                if (delete a[e], n.parentNode && n.parentNode.removeChild(n), o && o.forEach(e => e(t)), r) return r(t)
              },
              b = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = s.bind(null, n.onerror), n.onload = s.bind(null, n.onload), c && document.head.appendChild(n)
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
          O.I = (t, a) => {
            a || (a = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[t]) return e[t];
              O.o(O.S, t) || (O.S[t] = {});
              var d = O.S[t],
                n = "@rockstargames/modules-core-footer",
                c = (e, r, t, a) => {
                  var o = d[e] = d[e] || {},
                    c = o[r];
                  (!c || !c.loaded && (!a != !c.eager ? a : n > c.from)) && (o[r] = {
                    get: t,
                    from: n,
                    eager: !!a
                  })
                },
                f = [];
              switch (t) {
                case "default":
                  c("@foundry/icons", "6.1.0", () => Promise.all([O.e(2070), O.e(2760), O.e(4637), O.e(4017), O.e(5217)]).then(() => () => O(32760))), c("@foundry/icons", "6.1.0", () => Promise.all([O.e(2070), O.e(9441), O.e(4637), O.e(4017), O.e(9869)]).then(() => () => O(9441))), c("@rsgweb/locale-tools", "0.0.0", () => Promise.all([O.e(2497), O.e(2145), O.e(31), O.e(4637), O.e(8403)]).then(() => () => O(68403))), c("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([O.e(2070), O.e(2145), O.e(292), O.e(6507), O.e(31), O.e(7278), O.e(3002), O.e(4637), O.e(4017), O.e(5997), O.e(6760), O.e(5688), O.e(3331), O.e(8267), O.e(9889), O.e(1877)]).then(() => () => O(88986))), c("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([O.e(6507), O.e(31), O.e(6583), O.e(4637), O.e(5997), O.e(5688), O.e(3331), O.e(1835)]).then(() => () => O(90799))), c("@rsgweb/utils", "0.0.0-development", () => Promise.all([O.e(2145), O.e(6507), O.e(31), O.e(1378), O.e(4637), O.e(5997), O.e(5688), O.e(597), O.e(4597)]).then(() => () => O(60597))), c("react-dom", "18.3.1", () => Promise.all([O.e(162), O.e(4637)]).then(() => () => O(30162))), c("react-router-dom", "6.30.3", () => Promise.all([O.e(4269), O.e(4637), O.e(4017)]).then(() => () => O(74269))), c("react", "18.3.1", () => O.e(2581).then(() => () => O(22581)));
                  break;
                case "footer":
                  c("@foundry/react", "6.1.0", () => Promise.all([O.e(2497), O.e(2070), O.e(292), O.e(4114), O.e(7278), O.e(8710), O.e(6045), O.e(4637), O.e(4017), O.e(6760)]).then(() => () => O(8587))), c("@foundry/react", "6.1.0", () => Promise.all([O.e(2497), O.e(2070), O.e(292), O.e(4114), O.e(7278), O.e(8710), O.e(2913), O.e(9940), O.e(4637), O.e(4017), O.e(6760), O.e(8021)]).then(() => () => O(82913)))
              }
              return e[t] = f.length ? Promise.all(f).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          O.g.importScripts && (e = O.g.location + "");
          var r = O.g.document;
          if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), O.p = e
        })(), d = e => {
          var r = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = t[1] ? r(t[1]) : [];
          return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
        }, n = (e, r) => {
          e = d(e), r = d(r);
          for (var t = 0;;) {
            if (t >= e.length) return t < r.length && "u" != (typeof r[t])[0];
            var a = e[t],
              o = (typeof a)[0];
            if (t >= r.length) return "u" == o;
            var n = r[t],
              c = (typeof n)[0];
            if (o != c) return "o" == o && "n" == c || "s" == c || "u" == o;
            if ("o" != o && "u" != o && a != n) return a < n;
            t++
          }
        }, c = e => {
          var r = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (r + .5) {
            t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
            for (var a = 1, o = 1; o < e.length; o++) a--, t += "u" == (typeof(n = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, n);
            return t
          }
          var d = [];
          for (o = 1; o < e.length; o++) {
            var n = e[o];
            d.push(0 === n ? "not(" + f() + ")" : 1 === n ? "(" + f() + " || " + f() + ")" : 2 === n ? d.pop() + " " + d.pop() : c(n))
          }
          return f();

          function f() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, f = (e, r) => {
          if (0 in e) {
            r = d(r);
            var t = e[0],
              a = t < 0;
            a && (t = -t - 1);
            for (var o = 0, n = 1, c = !0;; n++, o++) {
              var i, l, s = n < e.length ? (typeof e[n])[0] : "";
              if (o >= r.length || "o" == (l = (typeof(i = r[o]))[0])) return !c || ("u" == s ? n > t && !a : "" == s != a);
              if ("u" == l) {
                if (!c || "u" != s) return !1
              } else if (c)
                if (s == l)
                  if (n <= t) {
                    if (i != e[n]) return !1
                  } else {
                    if (a ? i > e[n] : i < e[n]) return !1;
                    i != e[n] && (c = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (a || n <= t) return !1;
                c = !1, n--
              } else {
                if (n <= t || l < s != a) return !1;
                c = !1
              } else "s" != s && "n" != s && (c = !1, n--)
            }
          }
          var b = [],
            u = b.pop.bind(b);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? f(h, r) : !u())
          }
          return !!u()
        }, i = (e, r) => e && O.o(e, r), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((r, t) => (e[t].eager && (r[t] = e[t]), r), {}), b = (e, r, t) => {
          var a = t ? s(e[r]) : e[r];
          return (r = Object.keys(a).reduce((e, r) => !e || n(e, r) ? r : e, 0)) && a[r]
        }, u = (e, r, t) => {
          var a = t ? s(e[r]) : e[r];
          return Object.keys(a).reduce((e, r) => !e || !a[e].loaded && n(e, r) ? r : e, 0)
        }, h = (e, r, t, a) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + c(a) + ")", p = e => {
          throw new Error(e)
        }, m = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, y = (e, r, t) => t ? t() : ((e, r) => p("Shared module " + r + " doesn't exist in shared scope " + e))(e, r), v = (g = e => function(r, t, a, o, d) {
          var n = O.I(r);
          return n && n.then && !a ? n.then(e.bind(e, r, O.S[r], t, !1, o, d)) : e(r, O.S[r], t, a, o, d)
        })((e, r, t, a, o) => i(r, t) ? l(b(r, t, a)) : y(e, t, o)), w = g((e, r, t, a, o, d) => {
          if (!i(r, t)) return y(e, t, d);
          var n = u(r, t, a);
          return f(o, n) || m(h(r, t, n, o)), l(r[t][n])
        }), _ = {}, P = {
          4637: () => w("default", "react", !1, [1, 18, 2, 0], () => O.e(2581).then(() => () => O(22581))),
          84017: () => w("default", "react-dom", !1, [1, 18, 2, 0], () => O.e(162).then(() => () => O(30162))),
          42909: () => w("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([O.e(2497), O.e(2145), O.e(784)]).then(() => () => O(68403))),
          46252: () => w("default", "react-router-dom", !1, [1, 6, 30, 3], () => Promise.all([O.e(4269), O.e(4017)]).then(() => () => O(74269))),
          82199: () => w("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([O.e(6507), O.e(6583), O.e(5997), O.e(3331), O.e(799)]).then(() => () => O(90799))),
          98021: () => w("default", "@foundry/icons", !1, [0], () => Promise.all([O.e(9441), O.e(6174)]).then(() => () => O(9441))),
          76923: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([O.e(292), O.e(6507), O.e(3002), O.e(5997), O.e(6760), O.e(3331), O.e(8267)]).then(() => () => O(88986))),
          90479: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(2497), O.e(292), O.e(4114), O.e(2913), O.e(6760)]).then(() => () => O(82913))),
          66760: () => w("default", "@foundry/icons", !1, [0], () => Promise.all([O.e(2760), O.e(7725)]).then(() => () => O(32760))),
          13331: () => w("default", "@rsgweb/utils", !1, [0], () => Promise.all([O.e(2145), O.e(1378), O.e(597)]).then(() => () => O(60597))),
          59897: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(2497), O.e(4114), O.e(8710), O.e(6045)]).then(() => () => O(8587)))
        }, k = {
          3331: [13331],
          4017: [84017],
          4637: [4637],
          5688: [42909, 46252],
          6760: [66760],
          6797: [76923, 90479],
          8021: [98021],
          8267: [59897],
          9889: [82199]
        }, E = {}, O.f.consumes = (e, r) => {
          O.o(k, e) && k[e].forEach(e => {
            if (O.o(_, e)) return r.push(_[e]);
            if (!E[e]) {
              var t = r => {
                _[e] = 0, O.m[e] = t => {
                  delete O.c[e], t.exports = r()
                }
              };
              E[e] = !0;
              var a = r => {
                delete _[e], O.m[e] = t => {
                  throw delete O.c[e], r
                }
              };
              try {
                var o = P[e]();
                o.then ? r.push(_[e] = o.then(t).catch(a)) : t(o)
              } catch (e) {
                a(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            O.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                2913: 1,
                4114: 1,
                5217: 1,
                6045: 1,
                6174: 1,
                6797: 1,
                7725: 1,
                8267: 1,
                9869: 1,
                9889: 1,
                9940: 1
              } [r] && t.push(e[r] = (e => new Promise((r, t) => {
                var a = O.miniCssF(e),
                  o = O.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var o = (n = t[a]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (o === e || o === r)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (a = 0; a < d.length; a++) {
                      var n;
                      if ((o = (n = d[a]).getAttribute("data-href")) === e || o === r) return n
                    }
                  })(a, o)) return r();
                ((e, r, t, a, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", O.nc && (d.nonce = O.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) a();
                    else {
                      var n = t && t.type,
                        c = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + c + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = c, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = r, document.head.appendChild(d)
                })(e, o, 0, r, t)
              }))(r).then(() => {
                e[r] = 0
              }, t => {
                throw delete e[r], t
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          O.f.j = (r, t) => {
            var a = O.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(3331|4017|4637|5688|6174|6760|7725|8021)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise((t, o) => a = e[r] = [t, o]);
              t.push(a[2] = o);
              var d = O.p + O.u(r),
                n = new Error;
              O.l(d, t => {
                if (O.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  n.message = "Loading chunk " + r + " failed.\n(" + o + ": " + d + ")", n.name = "ChunkLoadError", n.type = o, n.request = d, a[1](n)
                }
              }, "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, o, [d, n, c] = t,
                f = 0;
              if (d.some(r => 0 !== e[r])) {
                for (a in n) O.o(n, a) && (O.m[a] = n[a]);
                c && c(O)
              }
              for (r && r(t); f < d.length; f++) o = d[f], O.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), O.nc = void 0, O(35649), O(98478)
      })())
    }
  }
});