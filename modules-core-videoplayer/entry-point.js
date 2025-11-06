try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5c7f8085-c6f3-4581-a2f3-ec1b8b184ec3", e._sentryDebugIdIdentifier = "sentry-dbid-5c7f8085-c6f3-4581-a2f3-ec1b8b184ec3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, f, c, o, b, n, l, s, i, u, p, h, m, g, y, v, w, k = {
            3032: (e, a, t) => {
              t(8419)
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8271).then((() => () => t(8271))),
                  "./index": () => Promise.all([t.e(1648), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(3581), t.e(2918), t.e(4994), t.e(1030)]).then((() => () => t(1030))),
                  "./tina": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then((() => () => t(7684))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then((() => () => t(7684)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var t = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, P), t.loaded = !0, t.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, P.d(d, f), d
        }, P.d = (e, a) => {
          for (var t in a) P.o(a, t) && !P.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, t) => (P.f[t](e, a), a)), [])), P.u = e => "js/" + {
          131: "326180b7e4430e00056d3ebf9307a7ab",
          278: "f0d354fc5303bc0f6d15ec54642bc8ac",
          299: "fdb6f464607fa33cfe43d64e41a621f0",
          314: "2059ec662793033d9d66b28cd5f81b97",
          439: "7d8ada2345e8e5cb4cfb320962bbf8a3",
          601: "75a00d4b41ef90510e1275bfc36e2168",
          662: "c42aa14abf899f6bbe8944342ff88580",
          824: "d7773fb841810a08d79210981ee3ef83",
          907: "680667ed6db951f4a8701118ff802511",
          1030: "7d91a916ef3e18a6e418eebde38d3d5d",
          1054: "fb9220fc39e2953841bb6c281ec805f3",
          1098: "ccafb37582b1fa0bed1ed850cb89d122",
          1242: "c88c8bbc5ca45b4498fb2a863f06a023",
          1254: "0a3b3014a4c3682fc5346f251323890f",
          1648: "9c4835f2961cf3524879d010bfb91ead",
          1703: "030acc4d1cf59e63ee6b53acced9339e",
          1773: "c290a371d96df2f60eb1e3c522b1cb3c",
          1822: "074db6549db6cb52176fa151d5eee55f",
          1868: "4b5fdce3fa44fd463fb5e16d58ae2171",
          2156: "0eb725f92bebb769e6ea1ae02b9f56c3",
          2169: "748afb6311cafed7dcd98ca67eada541",
          2171: "2ba1fae91d6e51e502d4c0f6a534e456",
          2217: "f5abe9634d5f710e1a5dbd5ed4d76d1d",
          2221: "9657f5829dbd6091a49026cf1107940b",
          2243: "cc293a00d58ce4039324833e728cb02d",
          2293: "c2f326aa0fb193800948f701c9901682",
          2306: "682091f5f0a1c16f572547ce52941320",
          2347: "150caae8160d204936ff1d7ad94ac5a8",
          2365: "e7411e9170ee433b97dca4a96ee202de",
          2398: "117b4fe20f25d98fe401866ec805aafc",
          2466: "960c16cbfe11506cc8b829840b241017",
          2635: "cd3213bf56279cbd88524fe04af77829",
          2642: "0d1164f7db622e32e10169c5bd9b3e8d",
          2657: "5ce8ab9a897298fdc2273ae2023f2cce",
          2678: "c5ab73238e66e7148172171d5311583b",
          2864: "e95fd2e564312ff82aa14bd6701a6c4d",
          3034: "ae37c669cef536b4458c54c2d02d2d84",
          3197: "43d47e5df88cc010978c43c558579218",
          3343: "5e25382a74685f29f35600de4f390199",
          3370: "eca135ac4d988ed1ade6be95c8cee141",
          3475: "c5aeee3e8a664b821920d0952354371d",
          3486: "a186175116274a5a33d32270c3fa4ac7",
          3697: "496219fdeb21894c7c02c3a736cd258d",
          3885: "bd3f04b727a058d43dd1ab568f7750a8",
          3941: "18bf323ff04ed53f9d3138c9160e7041",
          4011: "659f77c0dca99d469a9378df7212883a",
          4154: "3fe4cf7b1ca82c5c0b8725bde449f886",
          4271: "aebf4ff1706f01d21e8bab634d1a3adc",
          4528: "9b6e66a378db47b6e04ab7e16b2b72ce",
          4550: "d0fcffc7dee158902dbb51ebe16cfb32",
          4578: "06e80531d8ab3fa8de6839b687231e5b",
          4598: "93a0008926c5ee0c34c73a654edcf038",
          4621: "838c0fb5cbe2b7e23f9d8605010436bf",
          4700: "a7992eede16f333296dd5966bacd4e65",
          4710: "f5e836a55a61713772104aec2b96ff2b",
          4731: "92df879380d279f96bb482bfdf390b59",
          4799: "6aaf620284e34c3b09fc2d32a8d7e184",
          4851: "a45b172aa1e39a64dfb9e032046e000a",
          4861: "13c09bc9a651f2e5c3b27513dcd32f61",
          4913: "ccb5fc215ee64409094ac244b75aac00",
          4994: "f6e7e8127a161b8e39d3c8be2988d8d6",
          5016: "97ef10cbe65ff9c6ce03b2647f251a49",
          5018: "b4d6a3964cc91005edd31263498ca5ff",
          5055: "c48af545660eb05c98186946c59e2709",
          5076: "2b918f96b098a2030a6ab306afee0010",
          5233: "909ace4734bc88e55bf6ec2f86e08d7d",
          5259: "7d41a4b4c4024de1eb84ee1721eb5ad5",
          5389: "8b8aaf3aa8cf83bb550c6c79ea9c4b55",
          5530: "93800ff8869c3c7ed52155903cc6fa60",
          5639: "fd2d549475dacdf11edcafbca616086e",
          5663: "44efb8fc53412c176135bff07b0b0b7a",
          5742: "dd42d2ca23da8194131bcccd0e1e74c4",
          5830: "3c1a746d34754e3b4469154c943e398d",
          5832: "a18485d9c2acd27f471d9fe4a7ce44ec",
          5859: "56897dabba7c5318b9924dd220be0391",
          6088: "977c19b8c97137ffea22ca5f9468efe5",
          6267: "24eabb2d56dc3d307219d9779ab30d2c",
          6280: "478b98135b3f95c4a38a98857fde537e",
          6285: "6e873312ccad20454d7361041eb50199",
          6361: "8ab736e7b5930d63c3ebd9d98c91bf47",
          6664: "72f2ba63748812bb1d1ab11487736053",
          6879: "2a65f8c209443b3e44129c70905f5743",
          6891: "2d26995b701b7a665d91130e419b4b33",
          6929: "bd876d53d6ce59f3cbfaa2099db6e65e",
          6997: "51ba7c213e66ad6fdba3c7d0ce290fc8",
          7010: "a226ab06322532b9c3673f9b85b2737f",
          7073: "8168c4493da39834eddcb4209c60a16d",
          7436: "9429f48c78eab379a2ae4b7b018707d4",
          7452: "e763f1b7a66e34320c909a4590fc7001",
          7453: "e9dd1a2a5a88910f20ecb112cda59dca",
          7684: "34d8cededec479b4c45496f5ad849118",
          7731: "b25b05657a7309532327aef2efc9fa11",
          7970: "26b2bff6f6df219856982158da294830",
          8240: "5beaf8a5c841c14a081afb44484d42c8",
          8271: "48f142db53e6f423e510600926c4cedd",
          8272: "6379ae5e049dc4acaeee3321aaa99ecc",
          8284: "635fc8240716c940cd7d5d07875e4bcd",
          8391: "43a718e5f577407aa333abb8cbc5ea6e",
          8431: "b58b2893566ff692898f210cf8542c74",
          8755: "933749377fd88f1648d0baf5e2262f4e",
          8880: "d5b99ba5e0326bfaf604bd13894d0dee",
          8970: "49f1aa044786235b53fc8dcb7ed5f301",
          9022: "56520f12329d2982925eeea366062489",
          9028: "1593fcd60f5170793aa5b834dc00de70",
          9126: "d682cca7bce74d81b4ecdf629eeb17bf",
          9377: "da59d8e95ffc74fb8574b284d0b96d42",
          9587: "f294f7f8b7d2d6286a8dbe8f3b64b993",
          9615: "3ad8d7c717ea629392f38ad12f7a07a8",
          9757: "6eacf5e59d561e5b64dfcd8bc882abc4",
          9813: "c8cf317f4ad251cfad361ee34e4a89a3",
          9936: "d67dd8fdd39dd732cb690baf8412284f",
          9990: "f243629f7e8d262b2e8703ab06212726"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "3b0ee430328dccdbbcb668dae284f925",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          4994: "93a17588eeae0e4cdbefd7245c1cef4e",
          5055: "a126229ede95b503bfddbd53efcedae3",
          7684: "e1ecfbd5d60b0822f094e505eee8adf4"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", P.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, P.nc && c.setAttribute("nonce", P.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var s = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(i);
                var d = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(t))), a) return a(t)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              P.o(P.S, t) || (P.S[t] = {});
              var f = P.S[t],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                b = [];
              return "default" === t && (o("@gsap/react", "2.1.2", (() => Promise.all([P.e(2229), P.e(3581), P.e(4154)]).then((() => () => P(4154))))), o("@popperjs/core", "2.11.8", (() => P.e(9813).then((() => () => P(9813))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then((() => () => P(2841))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then((() => () => P(2217))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(6088), P.e(4550)]).then((() => () => P(2169))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6565), P.e(9757)]).then((() => () => P(9757))))), o("clsx", "2.1.1", (() => P.e(439).then((() => () => P(439))))), o("graphql", "16.11.0", (() => P.e(601).then((() => () => P(601))))), o("gsap", "0.0.0", (() => P.e(4271).then((() => () => P(4271))))), o("hammerjs", "2.0.8", (() => P.e(7731).then((() => () => P(7731))))), o("lodash", "4.17.21", (() => P.e(5076).then((() => () => P(5076))))), o("react-dom", "18.3.1", (() => Promise.all([P.e(1098), P.e(2229)]).then((() => () => P(1098))))), o("react-popper", "2.3.0", (() => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then((() => () => P(2635))))), o("react-router-dom", "6.30.0", (() => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then((() => () => P(5389))))), o("react", "18.3.1", (() => P.e(8431).then((() => () => P(8431))))), o("uuid", "9.0.1", (() => P.e(2657).then((() => () => P(2657)))))), e[t] = b.length ? Promise.all(b).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), f = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var c = a[t],
              o = (typeof c)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && r != c) return r < c;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(c = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, c);
            return t
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
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, c = 1, o = !0;; c++, d++) {
              var n, l, s = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !o || ("u" == s ? c > t && !r : "" == s != r);
              if ("u" == l) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == l)
                  if (c <= t) {
                    if (n != e[c]) return !1
                  } else {
                    if (r ? n > e[c] : n < e[c]) return !1;
                    n != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (r || c <= t) return !1;
                o = !1, c--
              } else {
                if (c <= t || l < s != r) return !1;
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
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}), i = (e, a, t, r) => {
          var d = r ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce(((e, a) => !b(t, a) || e && !c(e, a) ? e : a), 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var f = e[t];
          return "No satisfying version (" + o(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, t, r, d, f) {
          var c = P.I(a);
          return c && c.then && !r ? c.then(e.bind(e, a, P.S[a], t, !1, d, f)) : e(a, P.S[a], t, r, d, f)
        })(((e, a, t, r, d, f) => {
          if (!n(a, t)) return h(e, t, f);
          var c = i(a, t, d, r);
          return c ? l(c) : f ? f() : void p(u(a, e, t, d, r))
        })), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], (() => P.e(8431).then((() => () => P(8431))))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([P.e(5389), P.e(4853)]).then((() => () => P(5389))))),
          6188: () => m("default", "lodash", !1, [1, 4, 17, 21], (() => P.e(5076).then((() => () => P(5076))))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(8284), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6929)]).then((() => () => P(9757))))),
          1788: () => m("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([P.e(9587), P.e(5859)]).then((() => () => P(2841))))),
          1569: () => m("default", "uuid", !1, [1, 9, 0, 0], (() => P.e(2657).then((() => () => P(2657))))),
          3581: () => m("default", "gsap", !1, [1, "workspace:^"], (() => P.e(4271).then((() => () => P(4271))))),
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(6088), P.e(2169)]).then((() => () => P(2169))))),
          4572: () => m("default", "clsx", !1, [1, 2, 1, 1], (() => P.e(439).then((() => () => P(439))))),
          4848: () => m("default", "hammerjs", !1, [1, 2, 0, 8], (() => P.e(7731).then((() => () => P(7731))))),
          5971: () => m("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([P.e(4853), P.e(9005), P.e(5016)]).then((() => () => P(2635))))),
          7224: () => m("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([P.e(1703), P.e(4598)]).then((() => () => P(2217))))),
          7654: () => m("default", "@gsap/react", !1, [1, 2, 1, 0], (() => P.e(1773).then((() => () => P(4154))))),
          4853: () => m("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(1098).then((() => () => P(1098))))),
          6565: () => m("default", "graphql", !1, [1, 16, 9, 0], (() => P.e(601).then((() => () => P(601))))),
          9005: () => m("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => P.e(9813).then((() => () => P(9813)))))
        }, v = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2918: [2918],
          3581: [3581],
          4853: [4853],
          4994: [4572, 4848, 5971, 7224, 7654],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          9005: [9005],
          9623: [9623]
        }, w = {}, P.f.consumes = (e, a) => {
          P.o(v, e) && v[e].forEach((e => {
            if (P.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var t = a => {
                g[e] = 0, P.m[e] = t => {
                  delete P.c[e], t.exports = a()
                }
              };
              w[e] = !0;
              var r = a => {
                delete g[e], P.m[e] = t => {
                  throw delete P.c[e], a
                }
              };
              try {
                var d = y[e]();
                d.then ? a.push(g[e] = d.then(t).catch(r)) : t(d)
              } catch (e) {
                r(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            P.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                4994: 1,
                5055: 1,
                7684: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = P.miniCssF(e),
                  d = P.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", P.nc && (f.nonce = P.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), d(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          P.f.j = (a, t) => {
            var r = P.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^((178|291|618)8|1569|2229|3581|4853|5966|6565|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = P.p + P.u(a),
                c = new Error;
              P.l(f, (t => {
                if (P.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, o] = t,
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) P.o(c, r) && (P.m[r] = c[r]);
                o && o(P)
              }
              for (a && a(t); b < f.length; b++) d = f[b], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
}));