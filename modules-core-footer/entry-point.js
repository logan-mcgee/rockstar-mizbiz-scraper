try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ea001b7d-67f7-40d0-a5c4-de8afda42ac2", e._sentryDebugIdIdentifier = "sentry-dbid-ea001b7d-67f7-40d0-a5c4-de8afda42ac2")
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
                  "./root": () => Promise.all([r.e(78), r.e(1479), r.e(1127), r.e(8429), r.e(9623), r.e(1788), r.e(1062), r.e(5966), r.e(1281), r.e(2841)]).then(() => () => r(32841))
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
          68: "94bd045607cc5bcccb60a496574729f0",
          78: "026d4df24dd53aa436b730649ab5d384",
          131: "f36056b1af075503e45a7774566ef41b",
          173: "1eb2fa7603934f7b73f958c094bcf8f4",
          278: "47eb090ff88d4b2894af004646f2483e",
          299: "9b490407f4a5d8c6178f722e2e4c6f75",
          314: "d04683c946036b5059587f8086bcd833",
          450: "58c86445f0cfb5627fad403d0f5abb18",
          662: "8ec48da13dd11cb85bc7f3a24876b5b9",
          824: "ca56883a3e1b16eda27a1ae5d19d2927",
          907: "6e25b87f623e4e22c0dfc157fcc60a17",
          1054: "dcccb74fb9c6e11c18582658ab4d05d8",
          1098: "a048cb0077b87d982f93e4eda30961d3",
          1242: "19a42c2f8764ec4db7885b8a69fa28a0",
          1281: "ee9c0908190b3f8bef7c673bcfbf402c",
          1479: "5256901041247b555ecc569ea3bab353",
          1665: "610eecf7cca1152d122fdb71314d800e",
          1758: "3bf4ea8eabc37bab0b9ff578745aa470",
          1822: "3e7efa1072cff030e32392d9e7151fbc",
          1868: "189c48d50246259d0924cb25b01c6a79",
          2156: "a568657d1575dbe1c37842b85d72bdeb",
          2169: "814f13ab1e5f266a25c374e1b276928a",
          2171: "1a2688f724948e15b7d53e5cc1283be0",
          2221: "88cdaaeb1654b7842c0a918420a899ef",
          2234: "61aaa256e465af6e510d55488c04aec4",
          2243: "91cc02282eaf1aa4afc1c6b88b7e32a2",
          2306: "8591c5817e5d9380866cf15d4ec49bff",
          2347: "3b9d584ef038bfd9f8f3e6d95da7ec00",
          2365: "a3e6b00506d68214305edeb841ee2261",
          2398: "3ea3ffa6478b9a5db4d03fad153d5008",
          2466: "a0f7d72d6b1da55b9c502baf01af78f8",
          2583: "dcfb726d05d2b29206d02dbfbd634c1b",
          2642: "f5278f0da113219209f4e6ae49203863",
          2678: "37b1f88b2d655859752d3d7065408cc7",
          2841: "31e27678205b3d884618b2c75b5be038",
          2864: "2faf713067c7a9322e051a75bb7df494",
          3034: "90d40b7c952293a033d58b470d5b9e6e",
          3197: "55bbfbba3752afec01611e7eb7c2d421",
          3343: "6b28d69d056af6af75d2367bd906c202",
          3370: "68ce5105784217cd053ed16e70bb074d",
          3475: "0f3a7977a7b8cd94df997aa0fb8b384a",
          3486: "14111d18473a56a06438cde4f8063389",
          3697: "4213f47e07c4628f36ebc054c0db8a63",
          3885: "7717a9fe7e318604ac86b9d5608ab780",
          3896: "22c4d9b7555e3397e75fae4e3671e356",
          3941: "811301b0a868b66033c23fecfd2cd5d1",
          4011: "e804ef195b55499a6907e3a111d1d9b1",
          4528: "e9ff0d75596e9f645e77d83ddac057d4",
          4578: "4879643fbbb80132f1089be0b61d334f",
          4621: "c0cd4c3fdd53d82fc89106a4eb9c5151",
          4700: "0c390e013d2aa83db617f040e06808d7",
          4710: "64c4867803f10eef303283f253aa2481",
          4731: "557dcd1326133146f382a7c93388679e",
          4799: "ddef8a00e593ec656eb3282be0665abd",
          4851: "e51b42ab1d10aaa6e59a7807cd65f9d1",
          4861: "64ef1128579cafc52ec94db34b644231",
          4913: "1bf5846b320849fdd52ccd9c07a57159",
          4964: "30a7d23cf75aaf76376132dde176235d",
          5018: "a848c867969e5193f51608c77f5c6e27",
          5233: "dee834c5292309cd26a19b8c65590499",
          5259: "7cb25604a85db0c12768a8b6af1ea4d3",
          5265: "f1286555a89e80dbd2d14047dcf41e98",
          5389: "a350cc392acb3650d66096de82b7e963",
          5415: "e3f5c619f95d184a95f813d97fe71328",
          5530: "05ee5faacd4fd4a206ee3b20e66ca858",
          5639: "85ac32ad30fa5452f1b459cfb1b298c6",
          5663: "e190165b04caf65bcacc0b78d81bcdc1",
          5742: "84e620c01b7623a2f8976f6beeb659b3",
          5830: "d70ba44b927eba410ed8a3148e77bfe8",
          5832: "a9bea188d691d5216826c5630af09ff0",
          5859: "a483854d20897b90ba1582f42892aece",
          5941: "f2acdca4cb5a5605fa2302642ce39a45",
          6088: "bc3a9f28a7088f6181b275830e3c728c",
          6200: "063679ed939c8a8237079baa5512f803",
          6267: "9370f412edf0945a342ddb36cb2c859c",
          6280: "b80d9d81f6a488268b6369a98ae6a800",
          6285: "472050bd4608be7e03454075374a1a46",
          6361: "fcb5dc7971b7f747d9a26c4f4ee485b9",
          6471: "f4b9b65512bc45a7ccba02117d4760d9",
          6664: "0fd972994706f1dda5a6653e40bf3532",
          6879: "fcdf282c73ce5c22293fe5e3ef125ed0",
          6891: "c311a81cde113dadc8d94c29e3928635",
          6997: "da4b0a3093e89f68af0120fcba0f9c41",
          7010: "6d4f52535b35583d400d6d2a01bdf5fd",
          7073: "904e07bc003ddf7c9ac3cb93615463ca",
          7407: "58136555facba75ca67e0a43d0830a2b",
          7436: "a548ee8d921d79672aed7d75ab51ddc5",
          7452: "418dfc3a0f3eaf0b58fb3842300ffef1",
          7453: "ea2315911c398a5c4674940e455f75f5",
          7893: "5fa9b7bd3a0e1a1d708dfd96c794c996",
          7970: "bab16e46cefd6b0878122add99a473a2",
          8068: "3405d817596e08e0a8cf8feaea6578eb",
          8113: "b8e951ed23119fd485d7d3e3fe9dd9d7",
          8240: "1ec6c7842c5aaa762ab0efad4df40890",
          8272: "0b8ce72b9f668d5b21279a2a87140dd4",
          8325: "6b64b6d7cfe07b03d57dca2501c5024d",
          8391: "c18d38cb8ebb73698acba645d95ffe7d",
          8431: "a3c8b86abc18a0c00ed75099224643c2",
          8755: "5fe76b726d75b72a527026f1f2c21ab1",
          8845: "7f8bbeea36cd5394594573f818bee2ac",
          8880: "c1817b3813d822ef69fdba76c774a19a",
          8887: "eee7828e4f8dd7f4483db7ba1b64a527",
          8938: "7e4eb2f5ff654ea2c4f299c3aa7efc54",
          8970: "f0786d83e66a2e12eaed547e3d9cd90a",
          9022: "f519d5645593964e31a237d853482d0d",
          9028: "fec58b962f6e285d2530645ba055f3d9",
          9126: "34c58f36ba4f4d8d0d578ee3d3c29adf",
          9377: "488e85e26d26ce874feb8d252e43dd39",
          9512: "a19884d27373551efeed1bcc1ab55f91",
          9587: "873e16f2f0aba08a722b030aa3482f96",
          9615: "a6e9b809a8a79f231d1577728de7d00c",
          9757: "fc0692dc9254e0c4495bbc71bc93dbbc",
          9760: "02151dabf0628f9b2bc922f41af56166",
          9936: "3c0824e599d2a006bcc535ae4d1f3db2",
          9990: "9fef2fee6247ff33e375db2e3eab3cd1"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          78: "f23692dc02c7d751cd6d5f1cfbe6dfee",
          1281: "f8c1968ff675df159b6c305e0f588a38",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          7893: "0f4679a343da3d64bb49d864a222852a",
          8887: "18d74dd699fe65cda6f8b0ac9377f70e"
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
                  o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(6200), T.e(1665), T.e(1479), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(1062), T.e(5966), T.e(8887), T.e(1281)]).then(() => () => T(37290))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then(() => () => T(89757))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-dom", "19.2.0", () => Promise.all([T.e(1127), T.e(2583)]).then(() => () => T(62583))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.12.1", () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(1479), T.e(7893), T.e(1127), T.e(8429), T.e(1062)]).then(() => () => T(40013)))
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
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then(() => () => T(12841))),
          31062: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(4964).then(() => () => T(62583))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then(() => () => T(89757))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then(() => () => T(32169))),
          50623: () => w("footer", "@foundry/react", !1, [1, 5, 12, 1], () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(7893), T.e(8429)]).then(() => () => T(40013))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(1665), T.e(6088), T.e(8887)]).then(() => () => T(37290)))
        }, P = {
          1062: [31062],
          1127: [71127],
          1281: [2918, 50623],
          1788: [81788],
          2841: [20270],
          5966: [95966],
          8429: [18429],
          9623: [9623]
        }, S = {}, T.f.consumes = (e, a) => {
          T.o(P, e) && P[e].forEach(e => {
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
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                78: 1,
                1281: 1,
                2841: 1,
                7893: 1,
                8887: 1
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
              else if (/^(1(062|127|788)|5966|8429|9623)$/.test(a)) e[a] = 0;
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