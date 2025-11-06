try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3c1bccfe-0405-4b2c-807c-35fa33129522", e._sentryDebugIdIdentifier = "sentry-dbid-3c1bccfe-0405-4b2c-807c-35fa33129522")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, o, b, n, i, s, l, u, p, h, m, g, y, v, w, k, _, E, P, S, j = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(9889), r.e(3736), r.e(1127), r.e(9623), r.e(1788), r.e(5966), r.e(7209), r.e(2841)]).then((() => () => r(32841)))
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          T.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, T.d(d, f), d
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce(((a, r) => (T.f[r](e, a), a)), [])), T.u = e => "js/" + {
          68: "882d06c21144f1b6e1279a7538db61dc",
          131: "83ad7e9156e92a94efa3f12dc9314d99",
          173: "8c4b43d809f7445cc669bd02d083fd76",
          278: "50d1a385f8d2327001a56c65872f8ea8",
          299: "2fce4736d978f9385da957b9880bd5e4",
          314: "1ca6e35e4b13ac59bb45c1553af5a234",
          450: "d4d1e69b985484e053b05e6be894a31b",
          662: "a07663b8bf1ee7c9b1da43ba1f49bfa3",
          824: "46c3faf4887a5064b9f512db5e4c9121",
          907: "379ef11339c0dc12d30b367655c404d5",
          1054: "ee02ca6dbeabf82d8728f313af22a693",
          1098: "c79d76c14c64364a9c023489b117aeaf",
          1242: "4c565d4dd769c5f7522f56bee4bbde79",
          1295: "f9aebd4b36e448b75b8851937955dc96",
          1758: "7b744d48b9d9a56bf907c733935f17b5",
          1822: "e58b6d9f4738b8db1e66979fdb10e21f",
          1868: "f9b1ada39e5550d98a951938eb1b80b2",
          2156: "8968d9d783b9f11cafc99fe11b45cf7d",
          2169: "9e1138e045183a8adc002a1ae9ba10cd",
          2171: "00607b4596b2bff07d76972c881727ec",
          2221: "644a684fc9843ccf83798867d54b85a2",
          2234: "96b36493a5d4366a2c08512141f75920",
          2243: "7398409f2a8c0d357adf8b756a468171",
          2306: "b484fc9202ed36ef0e4021d2649c88d6",
          2347: "da1eaf70d1b8d2a0e3416908d2751ccf",
          2365: "277782cefe80abf0feaae2a0ad7e9dc8",
          2398: "a0ecd9f38aed4a8e1ea6d2bd21dca8c6",
          2466: "f4fed04bce8155f2b88e21f4fd38f4e6",
          2492: "2d814cca338729bcad51ad2bc6a4e592",
          2642: "a83439d053d8285ceb60e7a5d3fde16b",
          2678: "de5848aecefdbe13a52df43ca31eeafe",
          2841: "a1b1dd1fa6589afdd688720185cf48a0",
          2864: "4457407bff9cfe5821d0e78d9c5802be",
          3034: "f7685aab40dc79df05212376a86bf230",
          3197: "f70be929c55a782e13945cd48e567a1c",
          3343: "0c95910ebc641880f189ac16b350c72c",
          3370: "d9990549dfc5f5c244a0c72f1491f1f3",
          3421: "d37e7567c2a909e4dd17688500e2c5e0",
          3475: "0163ae943557f1dcc522c528500896f7",
          3486: "aa7bc230d62ec2e7b21edbf1a33896de",
          3697: "038e18bd27eb15dbafd82cf7219098d5",
          3736: "df7c2d66fabfa1aeae32e7cf41c1c33f",
          3885: "64974df4b6593d68a426fcb354ac4e90",
          3896: "3faa77efcce4817ebc50e36b9557f900",
          3941: "1d46d868607318d4a3a9259056081e22",
          4011: "2d27e86462dae593e89e9448c7972638",
          4528: "9555b0ec49f2fa87cc4ffe84da9efc52",
          4578: "b6ecacae8a09660ce35c23265a82e4e5",
          4621: "799099ff64f16a6020c7bbe207326240",
          4700: "0965438bb5e0580c2fbbdd94fde4d96a",
          4710: "dafbf4de959ef233db07e41320c3c90a",
          4731: "7f8aa2ae323b94127b7dbe74161a7418",
          4799: "786ee461d8fc8dd0f2fa599ae9ba5a1f",
          4851: "e4d2dacb019c851832941dc3f72e8149",
          4861: "e42d587d216713fcc3e3c49076ba8729",
          4913: "594579934d2f2cd1f239f7a0ed261b9d",
          5018: "7d2ebb4bf6e2678ad908ce15577c0443",
          5233: "effc3ef667cdfd4cb0facc94de5a049d",
          5259: "bc0b82ae0f710336d11bd396600be969",
          5265: "244f089eeac2c0754073ab6dad24cf30",
          5389: "95e62c9da9699e7e4a7bf192d0bb34e1",
          5415: "5e55ed8a29ceff73a7c829915a34ce45",
          5530: "f0e2401a41da566f67fbb5d32e1e6309",
          5639: "3295add5d8e13dbe072c2edeb6212f5e",
          5663: "b5a7d689ae83ec39bd7f65c3539cd3da",
          5742: "9fe1f2b51c70ca1e66c17e73f3fb2ca8",
          5802: "87616af02e26696cfb41731f863f289f",
          5830: "6fd859b85b868ac9d7a8f24408a3773e",
          5832: "4479a9e2f11ffeea28c076cd8f7f1d9b",
          5859: "b5c5e674f1e91b0d0c8a61bb0846bb85",
          5941: "e93aea8712cf8ae260b356ea22fe2ee3",
          6088: "136c18fc4d089df5ec4f2785ef7c04f0",
          6200: "568b32555ae6727783af06519292e369",
          6267: "075bc14d0f6961c66d698d9ba4ad1173",
          6280: "64c98a235fe6cff70ee4a2f0d589d1fe",
          6285: "4ca919000818c9ebe063a87b0023de4f",
          6361: "22d5fecf70d21e6c8871eb5688304e34",
          6471: "27598ff9015377fa664b84ea0c8d22e0",
          6664: "d9dd5a83b08b7bb803e37b35fc594fe5",
          6879: "bc7e01301e3c01c02ebdccf92d005b68",
          6891: "80bddf4e43b6788c2dc4df4e976e7dc7",
          6997: "6c17b214a79a0c2416936bc59d39205a",
          7010: "a2276b064252a285b90497c0800b4dae",
          7073: "f6731a5d1c4be6c6617f38e41cf7d7b6",
          7209: "e62750e57f1d8ad709e69b678e5ad012",
          7407: "a3c1e59d1690a9915ff9ef5ceac9b4a6",
          7436: "f0c9c53a93600fbe70c0da473e41ae3f",
          7452: "a6e61cb0c0d51dc4a1b25016db2163c8",
          7453: "e2d514cea6b0f46d2bcede528d86e026",
          7970: "4b58555eef9872f6b95c49f9eff3ad88",
          8068: "2334a8f8cf9fde29c9230bd759bfdec3",
          8113: "35606f536ec6be2c43d1a347db372fd3",
          8240: "a1ca4e10e483f79809a5f7f26bff3eb4",
          8272: "7720a5d99c61ae3afebd2243da9c12ea",
          8325: "91e541f33b90495e2fc1eb1d6953c118",
          8364: "0368e6b5d7da5c4465f947a01f5613d3",
          8391: "528baab8dea8fa6b0f2f35f345bf7c15",
          8431: "1b5b12cf1b7b30d5a2c0ca53600c7f75",
          8755: "b904d001994b0e905e96ec09be398f20",
          8845: "f22eb8ac3e8175e1036a23356969bbb3",
          8880: "d7cc3c8b3a685a911de5b9e7ae15aa73",
          8938: "aa3f9a85721dcc4ea1f547454c529519",
          8970: "ba8482b129e4339c9f4d855298247420",
          9022: "5ff546ccc8e161cfca0dca34cde6bd79",
          9028: "79caa63b2d920074feb1ca5cc7e1c4a2",
          9126: "71bc7ddbf2bfe5cf22718d2a21edd952",
          9377: "1d5d3d7d08ddeb3183dcb1751f14fe47",
          9512: "ef3b128fe23ad69e9ddb68a7580f5573",
          9587: "d8e41acacb82c478fde9b8a5edf10170",
          9615: "4426f10eb053f02c60b838a2853f3900",
          9757: "8f3fe9a7f490d9963c25e0f9d03672ad",
          9760: "ec6017c0fe55ebf54ac8d272c6bde170",
          9889: "213829ac5b22512dfed9c4443329e6a7",
          9936: "163f582006c695d64df7990c436fc962",
          9990: "edbbbdafd3d1a81227fa459ddf646f5c"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          1295: "1a88ebe83317c428e6099a990b18b0db",
          2841: "9b88edaa0acd9a0436ef01983f8ed6b0",
          3736: "4075475bb47938c3578a77cb580d147d",
          7209: "f8c1968ff675df159b6c305e0f588a38",
          8364: "195ef67b4251623ac7a868628249cdfc"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-footer:", T.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var i = b[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(r))), a) return a(r)
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
          T.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var f = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                b = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then((() => () => T(12841))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([T.e(6200), T.e(2492), T.e(9889), T.e(1127), T.e(6088), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(1295), T.e(7209)]).then((() => () => T(68786))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then((() => () => T(32169))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then((() => () => T(89757))))), o("react-dom", "18.3.1", (() => Promise.all([T.e(1098), T.e(1127)]).then((() => () => T(71098))))), o("react-dom", "19.1.0", (() => Promise.all([T.e(1127), T.e(3421)]).then((() => () => T(83421))))), o("react-router-dom", "6.30.0", (() => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then((() => () => T(15389))))), o("react", "18.3.1", (() => T.e(8431).then((() => () => T(48431)))));
                  break;
                case "footer":
                  o("@foundry/react", "5.9.0", (() => Promise.all([T.e(2492), T.e(9512), T.e(9889), T.e(3736), T.e(8364), T.e(1127), T.e(8429), T.e(8628)]).then((() => () => T(79588)))))
              }
              return e[r] = b.length ? Promise.all(b).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), f = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              d = (typeof t)[0];
            if (r >= a.length) return "u" == d;
            var c = a[r],
              o = (typeof c)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && t != c) return t < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, d = 1; d < e.length; d++) t--, r += "u" == (typeof(c = e[d]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
          }
          var f = [];
          for (d = 1; d < e.length; d++) {
            var c = e[d];
            f.push(0 === c ? "not(" + b() + ")" : 1 === c ? "(" + b() + " || " + b() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return b();

          function b() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = f(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var d = 0, c = 1, o = !0;; c++, d++) {
              var n, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (i = (typeof(n = a[d]))[0])) return !o || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (n != e[c]) return !1
                  } else {
                    if (t ? n > e[c] : n < e[c]) return !1;
                    n != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != t) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}), l = (e, a, r, t) => {
          var d = t ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce(((e, a) => !b(r, a) || e && !c(e, a) ? e : a), 0)) && d[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce(((e, a) => !e || !t[e].loaded && c(e, a) ? a : e), 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(t) + ")", h = (e, a, r, t, d) => {
          var f = e[r];
          return "No satisfying version (" + o(t) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, t, d, f) {
          var c = T.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, T.S[a], r, !1, d, f)) : e(a, T.S[a], r, t, d, f)
        })(((e, a, r, t, d, f) => {
          if (!n(a, r)) return v(e, r, f);
          var c = l(a, r, d, t);
          return c ? i(c) : f ? f() : void m(h(a, e, r, d, t))
        })), k = y(((e, a, r, t, d, f) => {
          if (!n(a, r)) return v(e, r, f);
          var c = u(a, r, t);
          return b(d, c) || g(p(a, r, c, d)), i(a[r][c])
        })), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], (() => T.e(8431).then((() => () => T(48431))))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([T.e(5389), T.e(8429)]).then((() => () => T(15389))))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then((() => () => T(12841))))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then((() => () => T(89757))))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then((() => () => T(32169))))),
          3505: () => w("footer", "@foundry/react", !1, [4, 5, 9, 0], (() => Promise.all([T.e(2492), T.e(9512), T.e(3736), T.e(8364), T.e(8429), T.e(8628)]).then((() => () => T(79588))))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(2492), T.e(6088), T.e(8429), T.e(1295)]).then((() => () => T(68786))))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(1098).then((() => () => T(71098))))),
          78628: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(5802).then((() => () => T(83421)))))
        }, P = {
          1127: [71127],
          1788: [81788],
          2841: [20270],
          5966: [95966],
          7209: [2918, 3505],
          8429: [18429],
          8628: [78628],
          9623: [9623]
        }, S = {}, T.f.consumes = (e, a) => {
          T.o(P, e) && P[e].forEach((e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              S[e] = !0;
              var t = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var d = E[e]();
                d.then ? a.push(_[e] = d.then(r).catch(t)) : r(d)
              } catch (e) {
                t(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1295: 1,
                2841: 1,
                3736: 1,
                7209: 1,
                8364: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = T.miniCssF(e),
                  d = T.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", T.nc && (f.nonce = T.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), d(b)
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
            417: 0
          };
          T.f.j = (a, r) => {
            var t = T.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1127|1788|5966|8429|8628|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = T.p + T.u(a),
                c = new Error;
              T.l(f, (r => {
                if (T.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, o] = r,
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) T.o(c, t) && (T.m[t] = c[t]);
                o && o(T)
              }
              for (a && a(r); b < f.length; b++) d = f[b], T.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
}));