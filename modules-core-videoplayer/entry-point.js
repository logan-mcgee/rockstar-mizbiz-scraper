try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e1d2694a-a017-4390-8fd8-538b1030ad9e", e._sentryDebugIdIdentifier = "sentry-dbid-e1d2694a-a017-4390-8fd8-538b1030ad9e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, o, b, n, l, s, i, u, p, h, m, g, y, v, w, k, _, P, E, S, j = {
            3032: (e, a, r) => {
              r(8419)
            },
            7027: (e, a, r) => {
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
            7411: (e, a, r) => {
              const t = r(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            8157: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => r.e(8271).then(() => () => r(8271)),
                  "./index": () => Promise.all([r.e(5473), r.e(2229), r.e(9623), r.e(6188), r.e(5966), r.e(1788), r.e(1569), r.e(2828), r.e(2918), r.e(8517), r.e(1030)]).then(() => () => r(1030)),
                  "./tina": () => Promise.all([r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(1569), r.e(7684)]).then(() => () => r(7684)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(1569), r.e(7684)]).then(() => () => r(7684))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
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
            },
            8419: (e, a, r) => {
              (0, r(7411).w)(1)
            }
          },
          O = {};

        function x(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, x), r.loaded = !0, r.exports
        }
        return x.m = j, x.c = O, x.y = a, x.amdO = {}, x.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return x.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, x.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          x.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, x.d(d, f), d
        }, x.d = (e, a) => {
          for (var r in a) x.o(a, r) && !x.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, x.f = {}, x.e = e => Promise.all(Object.keys(x.f).reduce((a, r) => (x.f[r](e, a), a), [])), x.u = e => "js/" + {
          131: "52caa119a037cead489a12bd95610d5f",
          278: "5c3fe6304a14048d2b3fe69433c9f021",
          299: "a2277e27a2bbcaab2d090871593cdab6",
          314: "cabd728922c48b3ac7a3fde0c6713f49",
          439: "e4911b6fba60fde6dd585eb2428957a4",
          601: "7e612ac28b58248b722d0064e8b22b97",
          662: "c5303462121126d28bcab4cd03a24693",
          824: "520f480b07a43919dafe46742839f4da",
          907: "f9ca12a879db7007b8aa767fc4814f1e",
          1030: "1c93ca6f133d2c8fec88b6bbacc67611",
          1054: "0216b1b541f6304278b16e0d95404975",
          1098: "6dd30a16e1802f6b2940ef70241b88fc",
          1242: "066763b9c8c9ec2b3835a4d4377e1176",
          1254: "836d50cd521333ac49d58c5bc9bdab8f",
          1703: "76e2705804e6d4a9caf999032a6616e1",
          1773: "b02052ac95177e25e9d29b494ffc5cb0",
          1822: "bfbfb35cc72499bd7f07aa38cb3b5596",
          1868: "15ffa4f8a5741e5c797d43c9a6e748e2",
          2156: "c5b734f3c57ebfd77ca992bacd9dbdb7",
          2169: "5b9058e13e5fd907381e63e63e18d260",
          2171: "617c96c0dd092640402d9919414bd657",
          2217: "02cfa1842ad4b3a2d1696932b6d26144",
          2221: "f9619c3191360bb71f7426e4ed01580f",
          2243: "9c434cb32fea838ff8f56f9e17f06469",
          2293: "183c89250619d0faa101527a6b9170cd",
          2306: "de79537394608b0b52085d031b9500e2",
          2347: "bd2e591a22af726c8cfee49fdf945298",
          2365: "a8dd129acd64c84f24ae146a2d567f9c",
          2398: "c07457bc4294ad36641d33b44c9b7e79",
          2466: "e3ca4b589bb404aa7a6b3d777a97b3a4",
          2635: "e7cbadf13dc444bfc3331fd1ca74da6e",
          2642: "355a13fe6fe8111bdb5a93cb67adddc7",
          2657: "ec3e07b4d92e78aea4e62ab4615294fe",
          2678: "48b22db2c42e84fbf6a49e8035e3e72a",
          2864: "43f5fe8b492e8c962887615f9e68b037",
          3034: "5eabe50982200b5c10d2cac2cb8094d6",
          3197: "88312eac3047f2322847fe13ddfe7e51",
          3343: "78b4d95ca6400ed8c59d901aace0a5ab",
          3370: "c73781a86807779099fd480c7578e2a9",
          3475: "46833c2ae8c7dfa8ea52ef8d4c962275",
          3486: "5ea933606d5a9aa00f2f8767ed29d445",
          3697: "99de2e6f7ebb618645e979d7228b154f",
          3885: "5e1431fd74d3c2fea3e3b93ba619ea27",
          3941: "05fb1c97a5ddb27f6bba523fe8729e6c",
          4011: "5e13c3ed145b62a049b1e53f91a13d40",
          4154: "ede996f909cbed05c9920cd64faa58ee",
          4528: "0d334591fb14c0fe808b768083f7ed26",
          4550: "b5af4a80d0907a8f88775f3cf2310c32",
          4578: "5317dd429ec47bcf40f34ebf3eeee76b",
          4598: "5336d3791d2b87887e1eaf31e97aee46",
          4621: "93c5cc3c3907beed86107b4919e9bb32",
          4700: "69340b3537883c54447c6132a31f89ae",
          4710: "e00e3747c370fe6d9d3e0ea3304bc3d6",
          4731: "93456e8fb06cc46ffe15e521c9fe755d",
          4799: "96a3a28240c322e6a03210409907d68a",
          4851: "9d2d08406c5bed45e85efc3a2dd036b2",
          4861: "6c0a043d55bf343bca7395d497306c34",
          4913: "726b85c16b3f258351586f30dae1d631",
          5016: "2fa930ccc28743419f2bd83b9079041c",
          5018: "7ae6fcd04327eb020dcdd6e3e632acf7",
          5055: "9e7f756fb2950eccfb0c4008a01705f7",
          5076: "f18afde99e2a47f909058c082c093111",
          5233: "927385be16c1d0a2decbd80f59c86ec4",
          5259: "55fdf4c5ce4335ddba2c5283b65b6f5d",
          5389: "9a75e7d7ae9514f9256bce185eba798e",
          5473: "4b16d5efb0a1025834bbb4523b6bf9c4",
          5530: "39130ff64921ad981684ec169fa1530f",
          5639: "7603d9b6099128833f7167b55057551e",
          5663: "f41f856f2e80760aa1143da3ea33e1a7",
          5742: "e1775be5bcf480b315c238ad555e5602",
          5830: "dcdb97316927cb45d5ef586ee5800290",
          5832: "2e17504d88a8fd3d96e754214a6a5768",
          5859: "e25771ed749f898a3c52e530b623f0ed",
          6088: "53655ac96bb18e01d408d79b5fb3c271",
          6267: "c94f9105efbbe9a621e802114cc67698",
          6280: "3b8e7ce901e22644ed0d5c3dc2462aa6",
          6285: "3999083b55bf29fb4ec429eeb1206546",
          6361: "ccda6b6409eaae6f79673a1567089c50",
          6664: "0a1b8d068d6329f2c53d155e8d8b85b3",
          6879: "abd5a64d36f3e3dd520677a44e37cbff",
          6891: "166c6ab52a56b19654da6104de334438",
          6929: "19ba8015a03b9879f0aa96a1de0a2a99",
          6997: "7c6fb4257f3474d573195a79f743b431",
          7010: "28400762654dd5e22527ed9c4315c3b5",
          7073: "5d1631a1bd2ba11ddf135e706943315e",
          7436: "1390c56a3a1dc11b21f5150e3689a6c5",
          7452: "e6e627a35e331be420068acef8135fd7",
          7453: "04f9165021ba1478fe52a51cc7189312",
          7684: "2c8405778f39a855cfeeaacac9460360",
          7731: "471c9b97ffcea4dab11dd30697442b28",
          7970: "b439db9a8f6dc192177e2e4eb5b3b5f7",
          8240: "edf6a4f9c5203a0f97d8cf8ebfd7e747",
          8271: "f3a363d950008595185b7a5d2bc12750",
          8272: "9e2be6457d60bbc8e5264bedcb1d6360",
          8284: "19dbabdde2dc11d7a09bea41f382f29b",
          8391: "2dca4948ac3fe0cd1901f97744552412",
          8431: "b434d6255c2207084fcd02678cb55fb6",
          8517: "ac03cb723d79071bf6bebd78887b1a30",
          8755: "1998e69189ff25a78103260c24807f56",
          8880: "1ee029d2fcfc42ea170da1ed3ea3bc1e",
          8970: "8527fcf432ecad75f59000a505730998",
          9022: "25d622730057b85755a4733c42e9966a",
          9028: "995a0b56a68d447201d2a3861ccb771b",
          9126: "11e664134efc284ea8388191762cf1ec",
          9377: "8aea706886d30ed51a2d4b692f56e063",
          9587: "9fc3f4ae4aaa414b5e4a1229afa6e4e8",
          9615: "9dc5bde17cb3fdd500b066f9a08084bb",
          9719: "fc173d7c4e37ac6ca6be7170d2d57ad3",
          9757: "8c398228f8759a21918c63357d5f7810",
          9813: "0bd3d1ec1e82f2cc5487f90a89d49b4e",
          9936: "b9dda6a16f102a2e8803f768de69ee60",
          9990: "19f32aca35a78cfee7ed73d19b39ceb7"
        } [e] + ".js", x.miniCssF = e => "css/" + {
          1030: "a36e0cbe058ff11dfb786ef49eb77a52",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "ac1d1d330280e6d552ffe4242a9c8fb8"
        } [e] + ".css", x.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), x.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-videoplayer:", x.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + r) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, x.nc && c.setAttribute("nonce", x.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(i);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach(e => e(r)), a) return a(r)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, x.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, x.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          x.S = {};
          var e = {},
            a = {};
          x.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              x.o(x.S, r) || (x.S[r] = {});
              var f = x.S[r],
                c = "@rockstargames/modules-core-videoplayer",
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
              return "default" === r && (o("@gsap/react", "2.1.2", () => Promise.all([x.e(2229), x.e(2828), x.e(4154)]).then(() => () => x(4154))), o("@popperjs/core", "2.11.8", () => x.e(9813).then(() => () => x(9813))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([x.e(9587), x.e(2229), x.e(8240)]).then(() => () => x(2841))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([x.e(1703), x.e(2229), x.e(5966), x.e(2918), x.e(2217)]).then(() => () => x(2217))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([x.e(2293), x.e(1254), x.e(2229), x.e(9623), x.e(6188), x.e(5966), x.e(6088), x.e(4550)]).then(() => () => x(2169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([x.e(2293), x.e(8284), x.e(2229), x.e(9623), x.e(6188), x.e(1788), x.e(6088), x.e(6565), x.e(9757)]).then(() => () => x(9757))), o("clsx", "2.1.1", () => x.e(439).then(() => () => x(439))), o("graphql", "16.11.0", () => x.e(601).then(() => () => x(601))), o("gsap", "3.12.5", () => x.e(9719).then(() => () => x(9719))), o("hammerjs", "2.0.8", () => x.e(7731).then(() => () => x(7731))), o("lodash", "4.17.21", () => x.e(5076).then(() => () => x(5076))), o("react-dom", "18.3.1", () => Promise.all([x.e(1098), x.e(2229)]).then(() => () => x(1098))), o("react-popper", "2.3.0", () => Promise.all([x.e(2229), x.e(8429), x.e(9005), x.e(2635)]).then(() => () => x(2635))), o("react-router-dom", "6.30.1", () => Promise.all([x.e(5389), x.e(2229), x.e(8429)]).then(() => () => x(5389))), o("react", "18.3.1", () => x.e(8431).then(() => () => x(8431))), o("uuid", "9.0.1", () => x.e(2657).then(() => () => x(2657)))), e[r] = b.length ? Promise.all(b).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          x.g.importScripts && (e = x.g.location + "");
          var a = x.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), x.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
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
              var n, l, s = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !o || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == l) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == l)
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
                if (c <= r || l < s != t) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var i = [],
            u = i.pop.bind(i);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && x.o(e, a), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), i = (e, a, r, t) => {
          var d = t ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !b(r, a) || e && !c(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(t) + ")", h = (e, a, r, t, d) => {
          var f = e[r];
          return "No satisfying version (" + o(t) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, t, d, f) {
          var c = x.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, x.S[a], r, !1, d, f)) : e(a, x.S[a], r, t, d, f)
        })((e, a, r, t, d, f) => {
          if (!n(a, r)) return v(e, r, f);
          var c = i(a, r, d, t);
          return c ? l(c) : f ? f() : void m(h(a, e, r, d, t))
        }), k = y((e, a, r, t, d, f) => {
          if (!n(a, r)) return v(e, r, f);
          var c = u(a, r, t);
          return b(d, c) || g(p(a, r, c, d)), l(a[r][c])
        }), _ = {}, P = {
          2229: () => w("default", "react", !1, [1, 18, 2, 0], () => x.e(8431).then(() => () => x(8431))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([x.e(5389), x.e(8429)]).then(() => () => x(5389))),
          6188: () => w("default", "lodash", !1, [1, 4, 17, 21], () => x.e(5076).then(() => () => x(5076))),
          5966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([x.e(2293), x.e(8284), x.e(9623), x.e(6188), x.e(1788), x.e(6088), x.e(6929)]).then(() => () => x(9757))),
          1788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([x.e(9587), x.e(5859)]).then(() => () => x(2841))),
          1569: () => w("default", "uuid", !1, [1, 9, 0, 0], () => x.e(2657).then(() => () => x(2657))),
          2828: () => w("default", "gsap", !1, [4, 3, 12, 5], () => x.e(9719).then(() => () => x(9719))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([x.e(2293), x.e(1254), x.e(9623), x.e(6188), x.e(6088), x.e(2169)]).then(() => () => x(2169))),
          4572: () => w("default", "clsx", !1, [1, 2, 1, 1], () => x.e(439).then(() => () => x(439))),
          4848: () => w("default", "hammerjs", !1, [1, 2, 0, 8], () => x.e(7731).then(() => () => x(7731))),
          5971: () => w("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([x.e(8429), x.e(9005), x.e(5016)]).then(() => () => x(2635))),
          7224: () => w("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], () => Promise.all([x.e(1703), x.e(4598)]).then(() => () => x(2217))),
          7654: () => w("default", "@gsap/react", !1, [1, 2, 1, 0], () => x.e(1773).then(() => () => x(4154))),
          8429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => x.e(1098).then(() => () => x(1098))),
          6565: () => w("default", "graphql", !1, [1, 16, 9, 0], () => x.e(601).then(() => () => x(601))),
          9005: () => w("default", "@popperjs/core", !1, [1, 2, 11, 7], () => x.e(9813).then(() => () => x(9813)))
        }, E = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2828: [2828],
          2918: [2918],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          8429: [8429],
          8517: [4572, 4848, 5971, 7224, 7654],
          9005: [9005],
          9623: [9623]
        }, S = {}, x.f.consumes = (e, a) => {
          x.o(E, e) && E[e].forEach(e => {
            if (x.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var r = a => {
                _[e] = 0, x.m[e] = r => {
                  delete x.c[e], r.exports = a()
                }
              };
              S[e] = !0;
              var t = a => {
                delete _[e], x.m[e] = r => {
                  throw delete x.c[e], a
                }
              };
              try {
                var d = P[e]();
                d.then ? a.push(_[e] = d.then(r).catch(t)) : r(d)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            x.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                5055: 1,
                7684: 1,
                8517: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = x.miniCssF(e),
                  d = x.p + t;
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
                  f.rel = "stylesheet", f.type = "text/css", x.nc && (f.nonce = x.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), d(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          x.f.j = (a, r) => {
            var t = x.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|828|918)|(17|61)88|1569|5966|6565|8429|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var f = x.p + x.u(a),
                c = new Error;
              x.l(f, r => {
                if (x.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, o] = r,
                b = 0;
              if (f.some(a => 0 !== e[a])) {
                for (t in c) x.o(c, t) && (x.m[t] = c[t]);
                o && o(x)
              }
              for (a && a(r); b < f.length; b++) d = f[b], x.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), x(3032), x(8157)
      })())
    }
  }
});