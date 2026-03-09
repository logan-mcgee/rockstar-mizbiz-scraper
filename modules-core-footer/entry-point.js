try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "52fccd77-cabf-4564-a2fb-bb3fa9e39ebf", e._sentryDebugIdIdentifier = "sentry-dbid-52fccd77-cabf-4564-a2fb-bb3fa9e39ebf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, f, t, d, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, S, P, j = {
            17411: (e, a, r) => {
              const f = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = f(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var f = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, d = f.length; t !== a && d >= 0;) "/" === f[--d] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = f.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var f = {
                  "./root": () => Promise.all([r.e(3830), r.e(5602), r.e(1127), r.e(9623), r.e(1788), r.e(5966), r.e(8079), r.e(2841)]).then(() => () => r(32841))
                },
                t = (e, a) => (r.R = a, a = r.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var f = "default",
                      t = r.S[f];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[f] = e, r.I(f, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => d
              })
            }
          },
          O = {};

        function T(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, T), r.loaded = !0, r.exports
        }
        return T.m = j, T.c = O, T.y = a, T.amdO = {}, T.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return T.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          T.r(t);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & f && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, T.d(t, d), t
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce((a, r) => (T.f[r](e, a), a), [])), T.u = e => "js/" + {
          68: "5a6b821db23505f3de169efceefb1e54",
          131: "923ccfb64c7a7470c3ee6e75986c917b",
          173: "164dc8e10b4c657ec4d964eeb06f7206",
          278: "cd8c05963d218ed540db3ffc57c750b8",
          299: "f3aa243aa3a7d6b142dba57ed366ceb1",
          314: "8bdfe27757d9b7a0be70924478fcc10b",
          450: "c7c0ed79c74f10a1cb03cfc6acfcb76f",
          539: "05095203184737375e011db6a229a7c7",
          544: "952f36b96bddcbd19436134f65b25d38",
          662: "4f3b76d12ad5e0ab1a9b85e21f50a8d1",
          824: "f0cda258c48be3a0eae56be1501e8c93",
          907: "2e9b7d20a5287000e1e0d94c91a0d98e",
          1054: "9306c66fa463b6bc3a872a3d52f7af34",
          1098: "43f800d9b1dfbd7838d89c14b5234524",
          1242: "ca0d6c2805d4ddd2541a0fca024aa7a6",
          1758: "07a7938a268173db62175144b4cb98ca",
          1822: "23a09c66b471be7af709b7ee18f0de05",
          1868: "05c1ff940599493f24f4edb0847b7634",
          2156: "a285c98ddbaa8165c9f0eab7a009da0d",
          2169: "c98c9b254908acda5e5d97fcee772653",
          2171: "aa907c3895ebf4af5470056e55c11fdb",
          2221: "dcf5f5737984ccb8f4677e550e7cdca5",
          2234: "5ce9f17fa390ee98d7d546a137e0be44",
          2243: "24f89f24f802492e919df7a70d6e4673",
          2306: "90a80949ede69049d9a1a3396f1b963f",
          2347: "3af16dc39ae89bc4e4c3930509c7e2c7",
          2365: "f163bce6f85400a5951c45818884fbf8",
          2398: "f62ba4c4c087020e67c96b01a9ee8997",
          2466: "d316f125b0539c09e4c38e222ab582d7",
          2642: "6fb9d12bb6f3aa3b06397f4e39630d30",
          2678: "6a487f78c104a118c206e59ae2372690",
          2841: "56ebdff23469a75031262d9e1f009fb2",
          2864: "1551ab93215c45151fe208816cf5de80",
          3034: "d6d170f0aa7fcd4a57c4933d6725513c",
          3197: "c41ae9e3eff8037b96bd3882b4055415",
          3343: "ba67756048bc99ecff6110c96d4e29a5",
          3370: "80e382c494c16a134bb2c1a0141cdd32",
          3475: "a5ac43be030edec369d3ae41a8835360",
          3486: "4f6687357eaf313a0946c4840344d1b1",
          3697: "9a44a4334d56a82938542cf132b88a34",
          3830: "e285a43b4a6e115eb4dd2c9a662a0b04",
          3885: "31e6b2502bf25981232742b170bc4342",
          3892: "5c6b6ef1a4d91f14c0d99d577e7fbbe2",
          3896: "cb30e0eca339d90bca795cae2dadee50",
          3941: "68f407d4a77f2483406abd043ba57399",
          4011: "d7b152f6bc871a2d53faa9f499e727fe",
          4528: "7d4e66ec35a6822618d8e6f57badd5a6",
          4578: "f92f42a474d4bd3b010a47f078e0dee8",
          4621: "74534087875eeb9de68deb861b20c4f4",
          4700: "906524118f5785ee7d487c573e75e519",
          4710: "c6ec8a7a8c9e87449e663808ad51ffbb",
          4731: "2a1b3f3d52678f7437bde5f93060960c",
          4799: "a4228f7cd014f289aeb9dff192f0938a",
          4851: "acef19c0e98fa14129ec6215ac83f681",
          4861: "9f2ff4c91d90faccae116fcdedf17b94",
          4913: "9033db95532d337709398a2685702a1d",
          5018: "52b7eefca6a0c17ad67c20eb1440702a",
          5078: "20f9fa3452bf1034e8aa9184c0a75b58",
          5233: "ee880b3a2880a6a550a478aaad92911f",
          5259: "6fa176c8194306c431a244c162f34397",
          5265: "87f8355014c6500485a7ea45d7a76ca6",
          5389: "9f40f39c58521814f16111b03debc2f7",
          5415: "80d4f47cf8dd6b393c91441dabd2713f",
          5530: "8f02c96f148160e0e22872318d5c55b3",
          5602: "9caac7d0c729a5b06fbedfb9708bf11b",
          5639: "c0498eeac9d183b9e7d5d8cd511a5e65",
          5663: "76132298adf26cf3f871d834c92fad37",
          5742: "e0194b350e58b49b532514f562d8d4c4",
          5830: "3c9de67a375ee732ff0cabe0ebff53ba",
          5832: "f110cc5e28b28492fa98f7068b369e65",
          5859: "73eb0bb0c128728a7bb957920b41db32",
          5941: "157679e93363f33e5af9601491b80d89",
          6088: "07c318b910b6d3d3d407a40881098965",
          6200: "4a6951edb42bf2b938a1b9ca8695c124",
          6267: "24a0d1297b0765d1adb2e125d9ce5d3c",
          6280: "235f7c5349d9d8febe988038696e1896",
          6285: "2a22ed81ac918f0d990907ed0fb3d55a",
          6361: "82ca044e7aa8f728a6238494b0d08dc0",
          6471: "b1706b0845881d044b3d6924c595d77c",
          6664: "7110e6e2e747431e97d0f3bf142844d1",
          6879: "210e35dde97a4631680d541431076028",
          6891: "03afa60f5ce23d9a296c1e5d219d013d",
          6997: "8676b98211c19bd7122f64060151903f",
          7010: "06a6dc7667f3bae2ed819d868c472d40",
          7073: "7913b48918e3fb7c8c6631b7aba96bc8",
          7407: "3dae4492d27d4fba0aef017a9a933b1d",
          7436: "1eb72df5ad81a72609aa47b8507ade4b",
          7452: "dc8c3a44da7c969381692f82c70db3df",
          7453: "9994b55693aa22a6d7b4c3faa08ab2a4",
          7970: "5d11d939364f047b840581d50b9a0729",
          8068: "e8eff6a50daf263d5fe268f624b83c6a",
          8079: "63b35b5b0ff52c9b3ac5ba040825973d",
          8113: "5169636ee367f101fcd7eb493aadf8e8",
          8240: "1909c6a7460f0c2220d0d076eedd5fed",
          8272: "238fa3b9866f1389a42c242dbed3d76d",
          8325: "566a2447c645c80daf5a54d7baacbc50",
          8391: "6dee4fbcd3f33fb763282edb1ce56696",
          8431: "b0132534123484fc4c332e3104c42376",
          8755: "98d4648353acd3d3936370d60d3afe0a",
          8845: "fbab74371e502358c135808d3a9e67fe",
          8880: "5b9c94a57f42ab69425a730f3147071a",
          8938: "a69d7a864cf8285f17eddfcb1ec40b0c",
          8970: "61e24b9ad05b2dbf5917fe1862ea6341",
          9022: "ce451cbfd0c619005ced5e719e30f6d8",
          9028: "fde53e604bda671271fa7d98c92ed83c",
          9126: "3862d0f406f261a06e71b518484396c6",
          9377: "469cc52b8f43a59c47a6e69a9db90c7b",
          9512: "54e387eb6334e360c34b60ea0cd15bf7",
          9587: "cec7c1561f972cee0787f558afbf2887",
          9615: "c10f57d4193289a1637a9417e779f6a8",
          9757: "ab21acc026d715e2b9980269c244283d",
          9760: "e79e982d9f8c52458ea259e305e2a462",
          9936: "d5b2442d5c0e542212c30e1e9a92e974",
          9990: "dcef3b9782d1ac645e5dac03be3835df"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          539: "05a8f207aa5f6bea84115c4eff3ab605",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          5078: "a2232490ff7cdfe62c3c8695019c4ab2",
          5602: "5978c362f8922e50d0d04c8a910fd9ec",
          8079: "f8c1968ff675df159b6c305e0f588a38"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, t = "@rockstargames/modules-core-footer:", T.l = (e, a, r, d) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", t + r), c.src = e), f[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, T.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, T.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          T.S = {};
          var e = {},
            a = {};
          T.I = (r, f) => {
            f || (f = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(f.indexOf(t) >= 0)) {
              if (f.push(t), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var d = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, f) => {
                  var t = d[e] = d[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!f != !o.eager ? f : c > o.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!f
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(6200), T.e(3892), T.e(3830), T.e(544), T.e(1127), T.e(6088), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(539), T.e(8079)]).then(() => () => T(95654))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then(() => () => T(89757))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.17.2", () => Promise.all([T.e(3892), T.e(9512), T.e(3830), T.e(5602), T.e(5078), T.e(1127), T.e(8429)]).then(() => () => T(46782)))
              }
              return e[r] = n.length ? Promise.all(n).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var f = r.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = r[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            f = r[1] ? a(r[1]) : [];
          return r[2] && (f.length++, f.push.apply(f, a(r[2]))), r[3] && (f.push([]), f.push.apply(f, a(r[3]))), f
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var f = e[r],
              t = (typeof f)[0];
            if (r >= a.length) return "u" == t;
            var c = a[r],
              o = (typeof c)[0];
            if (t != o) return "o" == t && "n" == o || "s" == o || "u" == t;
            if ("o" != t && "u" != t && f != c) return f < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var f = 1, t = 1; t < e.length; t++) f--, r += "u" == (typeof(c = e[t]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, c);
            return r
          }
          var d = [];
          for (t = 1; t < e.length; t++) {
            var c = e[t];
            d.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? d.pop() + " " + d.pop() : o(c))
          }
          return n();

          function n() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              f = r < 0;
            f && (r = -r - 1);
            for (var t = 0, c = 1, o = !0;; c++, t++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (t >= a.length || "o" == (i = (typeof(b = a[t]))[0])) return !o || ("u" == s ? c > r && !f : "" == s != f);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (f ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (f || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != f) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (t = 1; t < e.length; t++) {
            var p = e[t];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, f) => {
          var t = f ? s(e[a]) : e[a];
          return (a = Object.keys(t).reduce((e, a) => !n(r, a) || e && !c(e, a) ? e : a, 0)) && t[a]
        }, u = (e, a, r) => {
          var f = r ? s(e[a]) : e[a];
          return Object.keys(f).reduce((e, a) => !e || !f[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, f) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(f) + ")", h = (e, a, r, f, t) => {
          var d = e[r];
          return "No satisfying version (" + o(f) + ")" + (t ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map(e => e + " from " + d[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, f, t, d) {
          var c = T.I(a);
          return c && c.then && !f ? c.then(e.bind(e, a, T.S[a], r, !1, t, d)) : e(a, T.S[a], r, f, t, d)
        })((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = l(a, r, t, f);
          return c ? i(c) : d ? d() : void m(h(a, e, r, t, f))
        }), k = y((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = u(a, r, f);
          return n(t, c) || g(p(a, r, c, t)), i(a[r][c])
        }), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then(() => () => T(12841))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then(() => () => T(89757))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then(() => () => T(32169))),
          44021: () => w("footer", "@foundry/react", !1, [1, 5, 17, 2], () => Promise.all([T.e(3892), T.e(9512), T.e(5602), T.e(5078), T.e(8429)]).then(() => () => T(46782))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(3892), T.e(544), T.e(6088), T.e(8429), T.e(539)]).then(() => () => T(95654))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098)))
        }, S = {
          1127: [71127],
          1788: [81788],
          2841: [20270],
          5966: [95966],
          8079: [2918, 44021],
          8429: [18429],
          9623: [9623]
        }, P = {}, T.f.consumes = (e, a) => {
          T.o(S, e) && S[e].forEach(e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!P[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              P[e] = !0;
              var f = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var t = E[e]();
                t.then ? a.push(_[e] = t.then(r).catch(f)) : r(t)
              } catch (e) {
                f(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                539: 1,
                2841: 1,
                5078: 1,
                5602: 1,
                8079: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var f = T.miniCssF(e),
                  t = T.p + f;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), f = 0; f < r.length; f++) {
                      var t = (c = r[f]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (f = 0; f < d.length; f++) {
                      var c;
                      if ((t = (c = d[f]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(f, t)) return a();
                ((e, a, r, f, t) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", T.nc && (d.nonce = T.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) f();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, d.parentNode && d.parentNode.removeChild(d), t(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, t, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          T.f.j = (a, r) => {
            var f = T.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) r.push(f[2]);
              else if (/^(1127|1788|5966|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((r, t) => f = e[a] = [r, t]);
              r.push(f[2] = t);
              var d = T.p + T.u(a),
                c = new Error;
              T.l(d, r => {
                if (T.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", c.name = "ChunkLoadError", c.type = t, c.request = d, f[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var f, t, [d, c, o] = r,
                n = 0;
              if (d.some(a => 0 !== e[a])) {
                for (f in c) T.o(c, f) && (T.m[f] = c[f]);
                o && o(T)
              }
              for (a && a(r); n < d.length; n++) t = d[n], T.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
});