try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "60398e7a-9536-4660-9feb-aa30858d3b3f", e._sentryDebugIdIdentifier = "sentry-dbid-60398e7a-9536-4660-9feb-aa30858d3b3f")
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
        var e, r, f, t, d, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, P, S, j = {
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
                  "./root": () => Promise.all([r.e(3736), r.e(489), r.e(1127), r.e(9623), r.e(1788), r.e(5966), r.e(8239), r.e(3569)]).then((() => () => r(32841)))
                },
                t = (e, a) => (r.R = a, a = r.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
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
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, T.d(t, d), t
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce(((a, r) => (T.f[r](e, a), a)), [])), T.u = e => "js/" + {
          68: "d0f70094f5ded70adf3ee091ad62d7de",
          131: "a7a4d0f5dd4b114031acff5646c09a9c",
          173: "8669d093cf71c49249844efef4e13a5a",
          278: "55d24988a37f90dbccc523d528de7b2c",
          299: "ecb4270739034a84d21f67bc963a5863",
          314: "1e96ea350620fe3b975dda35d3ec805a",
          450: "582c121610864707858c342b378270d4",
          489: "ff10fd7e6be72f624c0efb3938bf3adc",
          662: "73983416e5a95f7afd2361676cb3cb98",
          824: "6d839653d6d674945fd50855c2e7c4f6",
          907: "e562f069fbf9b55b8396580300485f8f",
          1054: "9b48d49c0012d75165626aa7e3dabce2",
          1098: "d3ce0eea75188f6687b72e7538134d11",
          1242: "cdf6bfe88e0c4d24f005ecab0154f9c8",
          1758: "773a268bdff560f13e4d513f98a99f3a",
          1822: "25c029c1bd045efe18308a75416366b9",
          1868: "1710df2b628d4d0968f069e78fe0d55a",
          2148: "f6ad8f128d107660d8db307466d74580",
          2156: "8a8626b08db59eeb7ca69df0258b2fd6",
          2169: "5efa4c5c63c82089395e93db36309844",
          2171: "8077c657f3c0cac23dabc460badf30bc",
          2221: "98552cfe2d4881c55ff7ac0871b8088e",
          2234: "10abfbe1e2083e9ae480a23631cd0b3e",
          2243: "23b37168820fc6b39d0bd2d0b437ec4e",
          2306: "9bfd4aac526e92a9712c5d1af649a478",
          2347: "6df401549c9e55f7a189e2aca9782e88",
          2365: "155a7cdac36f88750fc4296f6774deeb",
          2398: "51f23d83754ec80a5ab4271151a3533f",
          2466: "8b726c164bed3bb04b1c5e570e3aa055",
          2642: "103357e9fbcd4db01a1f569fb7b04e14",
          2678: "330eaa41963cd50ebb919c577333c744",
          2864: "63226c3ae7ba2a8f1516e394da0f6a60",
          3034: "11415bcb3d4313905fa5d02f26d3ecb7",
          3102: "d7bbd2c526792813c41cb497fb32c3c2",
          3197: "9ad3228889d20af3dab057fffa5914a4",
          3343: "4c46027944d4e0b3c8a4709fa20fad4e",
          3370: "44bde1420bccd3cc870123d64cf10d5d",
          3421: "5cbf3c37b8f99bab03bd7a08ae071891",
          3475: "ae3e2a5cd3346349fca7b694a5dff343",
          3486: "559b3bc44ce827419b6478acdff5ac42",
          3569: "ff3c303220a793a20c3e0ddbe5732029",
          3697: "a26679c72f5be4c3de91c995c32875c2",
          3736: "2d84297be748c125f65306bb1dca9f17",
          3885: "daa3bb15bd8f5b7f3e7830028782b16b",
          3896: "28f78f29db38d2daa7e669fb9ce18498",
          3941: "53653d2c11b73a6aa6f448b19def2640",
          4011: "963308c012468afa0bba558ea506dadb",
          4528: "2f0979c86c53214e0a868c5c39a5e13b",
          4578: "95400942fd18f36cb879962eede5c271",
          4621: "35b544a033c4d9b906a7436cab2fe6f3",
          4700: "27091d29b927adf69ca1431bf3aebe5d",
          4710: "830fbf03680173ecfeb2465120a52f22",
          4731: "d8ec054e47fed4a1e565666029e57b11",
          4799: "02822bb3d0a8c60b48e48c41c874160e",
          4851: "2b1071592faadc0146857795e7064e4b",
          4861: "dba38aaf4798c8ee4106d735d8667892",
          4913: "ed4483a69ea613dc0b6c6cee37028cb1",
          5018: "ec89bd5074a02b7bbb90d740c60efff3",
          5233: "b725a92d5ac62b89b0db0fec5363a37a",
          5259: "55c2c8ac989246ecec4facb73725efaa",
          5265: "f2b343863523f20570510fd33294da3a",
          5389: "a52dc2e376eed5ae6593bbf7955aa794",
          5415: "76a8fd3149cae544ba83655d64a704e7",
          5530: "4bebf6b688479ffd188601eab39894ba",
          5639: "f02ed3134a72f67044334f9e805d5433",
          5663: "f106909938959d291234d1a382fc7328",
          5742: "69b93dfa9994a985ad68091fa1b48c6f",
          5802: "86292a93702ec597376054563053ac83",
          5830: "cb28bdb52372aecfb8dbb77f7ac15d62",
          5832: "f537d217c9afddfdcbfda2013684d1db",
          5859: "7161bcb5677ecfee67aec5f00ece3dcc",
          5941: "4564477471ea622592d1d1561d149acc",
          6200: "9724c92f3c37160f0513f1ac15db322a",
          6267: "3fd7657d88d71fce3ed228722d767332",
          6280: "0cd33350e08776ec0f8584c78cad3964",
          6285: "93aea86a8892844c6dfbb4e0159a6261",
          6313: "17327603b90175f8e40eaff4e1a41ff3",
          6361: "843fda9a8b6588f1dd8d627de0529a12",
          6471: "8e653f624c70fb5327d4fceea68c8cdf",
          6664: "2615142d284ae6eafe9153d755fa8991",
          6879: "7611eaa54f77df784f3f9189af595cc6",
          6891: "fdcb8624c446a26c03b96933ecf0d893",
          6997: "0b30d1ec2e6bde0c6d562838c1e98b38",
          7010: "8973379249571128f8ea29a9a5937171",
          7073: "90354344c056e696948efe26b4534ce7",
          7407: "ddead1a8226c77895589b290639ddcf7",
          7436: "d1477803b3bfc2e7bf3f3b248516c6c4",
          7452: "33c93aea1b5015f0efa7da54c693b443",
          7453: "30c4a52c30ff3909b22e0d7be8931c22",
          7970: "3fb63587e98d5c74b4506a14be9f84c3",
          8068: "d031948ec999a2380e46e60d12962109",
          8113: "7b5fa7b9f9586624942e1d3d6be65d8d",
          8239: "874c44a4f7b3230cd49dbed6302abc6d",
          8240: "4428d233794a6a8d450c79e55285c433",
          8272: "58dabbbef55b4711daab4332539a5932",
          8325: "cda5ec2a581253711bcb3625f2f537d9",
          8391: "841a7dd5bcd8b69e7d179dff832c836e",
          8431: "75e4927be0736a7e06c0d71d36dceb2e",
          8755: "8696bb56c9d8ebac43591321ce50e406",
          8833: "8c6ecde412b1e0c38923c8ed36f14c6a",
          8845: "ab0d7b35ae763404000f1ffbf9069c92",
          8880: "83154a0bbd7d882113a7ed0c10393bea",
          8938: "9ac6e9f012d13478143a43d231cb3788",
          8970: "a2e94834d7e988bd3a7a9a807b006059",
          9022: "1d2e5160df1860878d8999d335ba28e0",
          9028: "9721bcbbec53a7832dd8789a4c8c6731",
          9126: "09994137bc4a60d612a4ba53f1566456",
          9377: "6393da6ca333aaf670f8ff57e656a20d",
          9512: "c75e75d2ec4e3cd1b2cfcdf6f851d6f1",
          9587: "5069d145e4a13f4b316bfc6c33546b04",
          9615: "386b22adaf835711784dde545dc8d3bb",
          9757: "44675fdfbe67630c9dbfdc641514652e",
          9760: "5a2b75d56894ac86e4aba85278345c6a",
          9936: "86016fd185478646583ddb8aa772cbc6",
          9990: "fe49bbba5f5709b7172275966df10e52"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          3102: "d39fcafcf96ad2c010ff573f3ee30a27",
          3569: "53c51721fbb5aa870ade0838306fa05f",
          3730: "87138dd22abf4b2f40fcda006a816d81",
          3736: "b200ad1566e9a5f083b53c0de36664c8",
          6313: "8c05b91799d18e27afe9cd6f65586f62"
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
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
                  o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then((() => () => T(12841))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([T.e(6200), T.e(8833), T.e(489), T.e(1127), T.e(2148), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(6313), T.e(8239), T.e(3730)]).then((() => () => T(67293))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(2148), T.e(9623), T.e(5966), T.e(8113)]).then((() => () => T(32169))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(2148), T.e(9623), T.e(1788), T.e(5941)]).then((() => () => T(89757))))), o("react-dom", "18.3.1", (() => Promise.all([T.e(1098), T.e(1127)]).then((() => () => T(71098))))), o("react-dom", "19.1.0", (() => Promise.all([T.e(1127), T.e(3421)]).then((() => () => T(83421))))), o("react-router-dom", "6.30.0", (() => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then((() => () => T(15389))))), o("react", "18.3.1", (() => T.e(8431).then((() => () => T(48431)))));
                  break;
                case "footer":
                  o("@foundry/react", "5.4.1", (() => Promise.all([T.e(8833), T.e(9512), T.e(3736), T.e(489), T.e(3102), T.e(1127), T.e(8429), T.e(8628)]).then((() => () => T(76838)))))
              }
              return e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
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
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
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
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}), l = (e, a, r, f) => {
          var t = f ? s(e[a]) : e[a];
          return (a = Object.keys(t).reduce(((e, a) => !n(r, a) || e && !c(e, a) ? e : a), 0)) && t[a]
        }, u = (e, a, r) => {
          var f = r ? s(e[a]) : e[a];
          return Object.keys(f).reduce(((e, a) => !e || !f[e].loaded && c(e, a) ? a : e), 0)
        }, p = (e, a, r, f) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(f) + ")", h = (e, a, r, f, t) => {
          var d = e[r];
          return "No satisfying version (" + o(f) + ")" + (t ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, f, t, d) {
          var c = T.I(a);
          return c && c.then && !f ? c.then(e.bind(e, a, T.S[a], r, !1, t, d)) : e(a, T.S[a], r, f, t, d)
        })(((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = l(a, r, t, f);
          return c ? i(c) : d ? d() : void m(h(a, e, r, t, f))
        })), k = y(((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = u(a, r, f);
          return n(t, c) || g(p(a, r, c, t)), i(a[r][c])
        })), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], (() => T.e(8431).then((() => () => T(48431))))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([T.e(5389), T.e(8429)]).then((() => () => T(15389))))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then((() => () => T(12841))))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(450), T.e(2148), T.e(1788), T.e(9757)]).then((() => () => T(89757))))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(8068), T.e(2148), T.e(2169)]).then((() => () => T(32169))))),
          69556: () => w("footer", "@foundry/react", !1, [1, 5, 4, 1], (() => Promise.all([T.e(8833), T.e(9512), T.e(3736), T.e(3102), T.e(8429), T.e(8628)]).then((() => () => T(76838))))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(8833), T.e(2148), T.e(8429), T.e(6313)]).then((() => () => T(67293))))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(1098).then((() => () => T(71098))))),
          78628: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(5802).then((() => () => T(83421)))))
        }, P = {
          1127: [71127],
          1788: [81788],
          3569: [20270],
          5966: [95966],
          8239: [2918, 69556],
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
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                3102: 1,
                3569: 1,
                3730: 1,
                3736: 1,
                6313: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
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
            var f = T.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) r.push(f[2]);
              else if (/^(1127|1788|3730|5966|8429|8628|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => f = e[a] = [r, t]));
              r.push(f[2] = t);
              var d = T.p + T.u(a),
                c = new Error;
              T.l(d, (r => {
                if (T.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", c.name = "ChunkLoadError", c.type = t, c.request = d, f[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var f, t, [d, c, o] = r,
                n = 0;
              if (d.some((a => 0 !== e[a]))) {
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
}));