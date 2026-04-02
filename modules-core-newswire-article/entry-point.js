try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b454bfb-b8fa-47e3-aece-7e868724c700", e._sentryDebugIdIdentifier = "sentry-dbid-7b454bfb-b8fa-47e3-aece-7e868724c700")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {},
    f = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        f[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, d, c, n, o, b = {
            17411: (e, a, r) => {
              const f = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = f(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = f
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = r
            },
            55974: (e, a, r) => {
              "use strict";
              var f = {
                  "./index": () => Promise.all([r.e(3004), r.e(7522), r.e(9403), r.e(5117), r.e(5744), r.e(4740), r.e(5087), r.e(4728), r.e(701), r.e(3834), r.e(1127), r.e(8429), r.e(8136), r.e(336), r.e(6990), r.e(181), r.e(1556), r.e(1874), r.e(6130), r.e(6069), r.e(2030), r.e(3226), r.e(1352), r.e(2358), r.e(5055), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(4740), r.e(1127), r.e(8429), r.e(8136), r.e(336), r.e(6990), r.e(1556), r.e(6130), r.e(6069), r.e(3226), r.e(2358), r.e(1409)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(3004), r.e(7522), r.e(9403), r.e(5117), r.e(5744), r.e(4740), r.e(5087), r.e(4728), r.e(701), r.e(3834), r.e(1127), r.e(8429), r.e(8136), r.e(336), r.e(6990), r.e(181), r.e(1556), r.e(1874), r.e(6130), r.e(6069), r.e(2030), r.e(3226), r.e(1352), r.e(2358), r.e(5055), r.e(76), r.e(1125)]).then(() => () => r(76808))
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
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
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
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          68: "e534e50e1edb38a525db578b41dead22",
          131: "40e44a08a51aaba0a58fa1b5879facea",
          173: "4989c096428adbe1f8f2e29440f0145b",
          278: "9615da6979200d24918823504160c1e6",
          299: "7c8eca7639d2f6be18a13a61672c61cf",
          314: "61f62aa5260d0552ef9245312d698a68",
          439: "7dd720107398b1d1c73726daf4e27271",
          602: "73fd5064ccd3fce3b10310b99d8331b3",
          662: "7c26f40ccdf8fd8cad059ac319446957",
          701: "7e8997b8ffa51e9cfd7ee3fc0eae1f14",
          824: "b86ad222a063cc589b7b7587e9788d7f",
          884: "424d0247903e7461510ca949beb920a8",
          907: "3b7fb928f117858e64ce0bf2b7f2b4d1",
          961: "901419bc6f78fb91f5ffbb51400fb27f",
          1054: "40903d31394b83b10304abdd0101b6c9",
          1057: "0ef494a3bc42896e4778300cc3542339",
          1078: "3ed638355008eb5e5fcf35e78e2f6cae",
          1098: "2f94816eae3dc560d314891d451ff939",
          1125: "74eb9138343f385f4d45806ce21a6b9c",
          1242: "ff80a839319caff4ef81c7b0d43e7725",
          1409: "70afe29d2745808b61f6ee053ff078a7",
          1758: "0e04a0447741168ca88906fc354b36a9",
          1822: "69a782a6ae63d09a740dedb837014b67",
          1858: "5c5473e5711f992db37ac398ec7d7e66",
          1868: "3f011513ff440d3b5f0e8df833053065",
          2065: "fcbe43bee69fec6d53f009ca82e9bd11",
          2156: "b7c254052f7e1a4419910aea9ab24921",
          2169: "34c02a09df3bba664d7eeec71e7d0220",
          2171: "4403e7594e73b0f105f31d08e754d8cd",
          2221: "c47060e43b8b65024fa89811c261b039",
          2234: "065d96ffa1cdbb007abf74a7a129c330",
          2243: "8c0be85217dfb7fe266b0bfe64cd5fd5",
          2306: "9158dd0e8682146bed7dec5f8e876a42",
          2347: "72e116068730808458b2ba35ec9b2feb",
          2358: "33a913724b61af570a77975e90cf79ea",
          2365: "1ee517dd62b888a9096368f2be58d879",
          2368: "3a6ad23dca9269c51d44a834355c0da3",
          2398: "2b2ba5b8ab92ca1df1c4c3e41898638c",
          2424: "eaf41f5439a93e89fbf9ca3099182f3e",
          2466: "d8fd76451309381bada31dacdec9f8c3",
          2642: "3da6c2b5249b1e6bcbfd785658d21ae7",
          2678: "ced77ae5e38f1e004aab033d48297a77",
          2787: "4741c580f85f7ce758dda8f5fbd9f765",
          2864: "01f2cf55468f3a9b231b7f14f75128a6",
          3004: "8a347530fde8c355a184cf0c491de62b",
          3034: "769dd0a6271c8b4b9f7b731a21b4c813",
          3197: "e638bca36ea839a029d98ae5a027a827",
          3342: "81b1722c8d5f3dd21f266e47c6385e12",
          3343: "cf1a16b1cb610694457e77da39621244",
          3370: "4ff03ce074e76d390aaef3a67f140e3f",
          3387: "881f13afec7da5ffa296bfbafef0ef02",
          3438: "ac1d3670bc0b694976752890ac0e7e7b",
          3475: "1b3a74ac2649d7958b6a23dae715d0d9",
          3486: "ae667b85265e13cdae6fed984a634af9",
          3697: "77bc032f9c8006ffeb48265df44316f1",
          3834: "030ba4870e526f77aeb1f8bbbef7a3e9",
          3885: "4385f302794883f76da0f18d2d2d7ec7",
          3896: "ae2ad7ad96c77919850f2a5adc3f7efe",
          3941: "7346e8e21dd08c852e77d4c01af2c7d5",
          4011: "ab6a49490559caa12bb6e226bc1da5e1",
          4057: "d8b949fc282e7ac98b5253cb2a9f9472",
          4232: "a2c3add43c1da2045d8e7a173311b28c",
          4528: "d43014f7c5d955a4aa1e65482fbd74a8",
          4550: "6b169a0c8b836dd8827094b75dd65b11",
          4578: "3a6b1c7af89558afd40176c006138cfc",
          4621: "6c24076ce8c077514fd25cf6dec18ee0",
          4700: "fc5341f802ca38adb2ae24b44150221b",
          4710: "3f12d6246f64a485c9f0760c7331831f",
          4728: "f1aa34337156ff0450ef644788af63b6",
          4731: "263b7fba21dce953bc0cd0421263a7df",
          4740: "44f2319e151bccf124695b67727067b3",
          4799: "6736136822d1bca7430409e21e46ed60",
          4851: "47f30e09940ea715ae706e4c7a65f9ea",
          4861: "c7d875be9849dad9b02129ad86e9ca72",
          4913: "26cbd1ca42296bb23cb221be3a861d14",
          5018: "21f1e2e99d5adffd988cd0150f61d53c",
          5055: "92646a511b51a2df2ae625455ae3e0df",
          5076: "7370f255c42a21629b9c299f9d29b9dc",
          5087: "cdaf22a31f5268c1c0ae121062c2c95f",
          5117: "30f4fa469ae1b5d32c3bd8339eb39805",
          5168: "392b85d30ca1c4e39e9cf23bc6613045",
          5233: "28b518cb7db2213e1ab36a87ddfc3c4c",
          5259: "be808c84d0bb7e535ddd7903295ff645",
          5265: "5a526bf82dc1a20c8fba768173812eff",
          5389: "b66465959a53c77520b6a82ce256d206",
          5400: "c93325a3927c9c55e2dace9f36f72037",
          5415: "36347e2b8178fba3603f8d6526337b16",
          5493: "f84cd1d82ea18c38ef1a1d3ee0f721ee",
          5530: "6e9d6e4a532bbe6f2860ffe1badfe79e",
          5639: "fa85b177e82fcf72e51c328379d60278",
          5663: "fc4106f92c413306c474ff06a17149ff",
          5742: "9a28fdc8694fd48e6793bd2e73dcb51a",
          5744: "cb7ffae07ce2cfa5a6db896e5695706d",
          5830: "b43f1a3678f0ca73ed855224996cd67c",
          5832: "50886efa092ae33dc5b4ec0ac5b6072e",
          5859: "545b5ed686abc44c26a4d8d515f8efd0",
          6088: "e92f21cd1f12848e32e8cd41f4ce1fff",
          6130: "48cb659c9f499e881a44131efe6fae27",
          6267: "b1e0fd1f1c5d95766dfbacb504fd3452",
          6280: "5911feded262e71cc04819835a5390c7",
          6285: "972f74316945f669e57fc2e6f61d50cf",
          6327: "0c9627087719dc8476dde38573b2b7d1",
          6361: "bd203253b6e2419d8cc33d3b501b94a3",
          6471: "599a464f7c9870852d84ca59af1421b7",
          6664: "311736e0156bb1c0297dd8728eb5488a",
          6879: "bec06c93749f7861f42a82f45b42165d",
          6891: "be084b26932836f5d35a07c40ecc3357",
          6997: "45bef117c1e0463adfdcfac3e482cb99",
          7010: "009345c7a6ba89e98db328b9e4d2443f",
          7041: "982f3fbbc83876f4efa3751240458923",
          7073: "46c3197f957785db1a8d11d201dd3954",
          7407: "a88e99b6a4643157d2c07648d10262a7",
          7436: "cb2d028fa85276a9252bd43028d37303",
          7452: "87b6356af03ad42f565a76a3c49b7be9",
          7453: "b2e36bc2bad28c38792a54888b85ba4d",
          7522: "ea098c724cb1f13f11db830e52bae51d",
          7785: "708c89d23411b873185c9cb328689df9",
          7970: "f166828f9c62acc769f7841fd81543c7",
          8068: "1bc666b5784df623a32a9bca4659fc1a",
          8240: "87c812d8fd104c2f3affa73f9702e5af",
          8272: "f1dd2f167aac1d8a354331ad27e3ca24",
          8325: "7ca2c1489d0e0be6746068f919426236",
          8391: "5a533d22ada59aa978f1e456f8e72f67",
          8431: "7c719898935afd414f4dce8fd85164c3",
          8708: "031a2b99c3958853f508456a2dba6901",
          8755: "d5cba2f2736510ae7db3ee4443759162",
          8845: "e3d0e422ca5c9e89f82550fe071d6e87",
          8880: "1ddd83e57db4401d61342291f26fb774",
          8938: "79c8f434733e222ee8016ec5c348e49f",
          8970: "03684e89aa8c09f9205c6baa410e0b02",
          9022: "81d661f8dcab3f2fd4e5b76e48958e4e",
          9028: "b8c3027d24777bb97deac17aad82c4bc",
          9126: "30d9a5dea3d7c382dafbb8f47f116e94",
          9377: "ad3097e7630c5561ec4d330e99f51747",
          9403: "4114b44c65e535507f537ec2581c4e2d",
          9477: "051260385bf3f1c666ccf18bfff16a60",
          9615: "f597b727777e3d533ad1af296ca6acc2",
          9760: "7573fb1ec60cbe133dc132693884a2cc",
          9923: "93e63d261fe20c0cad638425abbc87d5",
          9936: "94b9201d661c1300f81f650caeaea75e",
          9987: "8a9080765a2582b3a081767eb3d2cd9c",
          9990: "342d44f4b91dc89301d3e474da21bb50"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "34cab69c02779739127f3b0ad51e5f64",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1078: "214e2f94528af5f726d2150d0a4f2215",
          1125: "d52d2ae8afd2665cf90fd98ed36f3c81",
          2358: "165fa99f963184aba806d81f713ae37c",
          3226: "3a4070d4c77506d8955255a1ccc7b2a6",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          3834: "ed78d69898cf7c75ad9f3c7f513105b2",
          4297: "15e4405e61879889fa95b861d8f64a87",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          5055: "bee7e71bb03044211d6b687fb92a9805",
          6069: "ff5d40a08af069c8bbed595ff7e87c9b",
          7041: "4aeb7ba6061f915cc88d91e3c08ad280",
          8683: "ec396ec8a36762ae49c6722682ad4e04",
          9923: "64d7f9e177dae263f83a61669b860024"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, f) => {
          if (d[e]) d[e].push(a);
          else {
            var t, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", c + r), t.src = e), d[e] = [a];
            var l = (a, r) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var f = d[e];
                if (delete d[e], t.parentNode && t.parentNode.removeChild(t), f && f.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), n && document.head.appendChild(t)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          1409: [11438, 17523, 44019, 83166],
          2358: [64064],
          3226: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var f = o[e];
            if (!(r.indexOf(f) >= 0)) {
              if (r.push(f), f.p) return a.push(f.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), i.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var s = b.then(e => n(e, c), t);
                    if (!o) return s;
                    a.push(f.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => d(a.get, f[1], r, 0, n, t),
                n = a => {
                  f.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, f[2], 0, 0, (e, a, r) => e ? d(i.I, f[0], 0, e, c, r) : t(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, f) => {
            f || (f = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(f.indexOf(t) >= 0)) {
              if (f.push(t), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, f) => {
                  var t = d[e] = d[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!f != !n.eager ? f : c > n.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!f
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = i(e);
                    if (!t) return;
                    var d = e => e && e.init && e.init(i.S[r], f);
                    if (t.then) return b.push(t.then(d, a));
                    var c = d(t);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (n("@foundry/react", "5.17.3", () => Promise.all([i.e(3004), i.e(4232), i.e(602), i.e(2787), i.e(9403), i.e(5744), i.e(4728), i.e(7041), i.e(1127), i.e(8429), i.e(1556), i.e(5168)]).then(() => () => i(26313))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(2787), i.e(5493), i.e(1127), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(3004), i.e(4232), i.e(7522), i.e(5744), i.e(4740), i.e(1127), i.e(8429), i.e(8136), i.e(1556), i.e(6069), i.e(8683), i.e(9477)]).then(() => () => i(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(3004), i.e(4232), i.e(7522), i.e(5744), i.e(5087), i.e(701), i.e(1127), i.e(8429), i.e(8136), i.e(6990), i.e(181), i.e(1556), i.e(1874), i.e(2030), i.e(1352), i.e(2424), i.e(5055), i.e(9923)]).then(() => () => i(89600))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([i.e(7522), i.e(9403), i.e(4740), i.e(1127), i.e(8429), i.e(8136), i.e(1556), i.e(6069), i.e(2030), i.e(3226), i.e(76), i.e(1078)]).then(() => () => i(90884))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(7522), i.e(5087), i.e(1127), i.e(6990), i.e(1874), i.e(2030), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(2065), i.e(8068), i.e(1127), i.e(8136), i.e(336), i.e(181), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(1127), i.e(8429), i.e(8136), i.e(336), i.e(6990), i.e(1874), i.e(6130), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(602), i.e(2065), i.e(4057), i.e(1127), i.e(336), i.e(6990), i.e(181), i.e(6088), i.e(3342)]).then(() => () => i(43342))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(1127)]).then(() => () => i(43387))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var f = r.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = r[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = r[1] ? a(r[1]) : [];
              return r[2] && (f.length++, f.push.apply(f, a(r[2]))), r[3] && (f.push([]), f.push.apply(f, a(r[3]))), f
            },
            a = e => {
              var r = e[0],
                f = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                f += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var t = 1, d = 1; d < e.length; d++) t--, f += "u" == (typeof(n = e[d]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
                return f
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var n = e[d];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, f) => {
              if (0 in a) {
                f = e(f);
                var t = a[0],
                  d = t < 0;
                d && (t = -t - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= f.length || "o" == (s = (typeof(b = f[c]))[0])) return !o || ("u" == i ? n > t && !d : "" == i != d);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || s < i != d) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, f) : !u())
              }
              return !!u()
            },
            f = (a, r, f) => {
              var t = f ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[r]) : a[r];
              return Object.keys(t).reduce((a, r) => !a || !t[a].loaded && ((a, r) => {
                a = e(a), r = e(r);
                for (var f = 0;;) {
                  if (f >= a.length) return f < r.length && "u" != (typeof r[f])[0];
                  var t = a[f],
                    d = (typeof t)[0];
                  if (f >= r.length) return "u" == d;
                  var c = r[f],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && t != c) return t < c;
                  f++
                }
              })(a, r) ? r : a, 0)
            },
            t = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, r, f, t, d) {
              var c = i.I(a);
              return c && c.then && !f ? c.then(e.bind(e, a, i.S[a], r, !1, t, d)) : e(a, i.S[a], r, f, t, d)
            })((e, d, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return t(e, c, b);
              var s, l, u = f(d, c, n);
              return r(o, u) || (l = ((e, r, f, t) => "Unsatisfied version " + f + " from " + (f && e[r][f].from) + " of shared singleton module " + r + " (required " + a(t) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              58136: () => d("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(602), i.e(2065), i.e(4057), i.e(336), i.e(6990), i.e(181), i.e(6088), i.e(961)]).then(() => () => i(43342))),
              10336: () => d("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              56990: () => d("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(2787), i.e(5493), i.e(5859)]).then(() => () => i(12841))),
              10181: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              1556: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61874: () => d("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([i.e(602), i.e(2065), i.e(8068), i.e(8136), i.e(336), i.e(181), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              22030: () => d("default", "@rsgweb/tina", !1, [4, 0, 0, 0], () => Promise.all([i.e(5117), i.e(8429), i.e(8136), i.e(336), i.e(6990), i.e(1874), i.e(6130), i.e(3438)]).then(() => () => i(99747))),
              48863: () => d("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              21352: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              93231: () => d("default", "@foundry/react", !1, [2, 5, 17], () => Promise.all([i.e(4232), i.e(602), i.e(2787), i.e(9403), i.e(4728), i.e(7041)]).then(() => () => i(26313))),
              6900: () => d("default", "@rsgweb/modules-core-engagement", !1, [4, 0, 0, 0], () => Promise.all([i.e(4232), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              9596: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [4, 0, 0, 0], () => i.e(884).then(() => () => i(90884))),
              36444: () => d("default", "@rsgweb/modules-core-highlights", !1, [4, 0, 0, 0], () => Promise.all([i.e(4297), i.e(9987)]).then(() => () => i(32368))),
              39540: () => d("default", "@rsgweb/modules-core-carousel", !1, [4, 0, 0, 0], () => Promise.all([i.e(4232), i.e(8683), i.e(1858)]).then(() => () => i(89477))),
              79518: () => d("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              87608: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400)))
            },
            o = {
              181: [10181],
              336: [10336],
              1125: [6900, 9596, 36444, 39540, 79518, 87608],
              1127: [71127],
              1352: [21352],
              1556: [1556],
              1874: [61874],
              2030: [22030],
              3226: [48863],
              5055: [93231],
              6990: [56990],
              8136: [58136],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(c[e] = t.then(r).catch(f)) : r(t)
                } catch (e) {
                  f(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                76: 1,
                884: 1,
                1057: 1,
                1078: 1,
                1125: 1,
                2358: 1,
                3226: 1,
                3438: 1,
                3834: 1,
                4297: 1,
                5040: 1,
                5055: 1,
                6069: 1,
                7041: 1,
                8683: 1,
                9923: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var f = i.miniCssF(e),
                  t = i.p + f;
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
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) f();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), t(o)
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
            6947: 0
          };
          i.f.j = (a, r) => {
            var f = i.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) r.push(f[2]);
              else if (/^(1(127|352|556|81|874)|8(136|429|683)|(203|504|699)0|(322|33|7)6|4297|6069)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((r, t) => f = e[a] = [r, t]);
              r.push(f[2] = t);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, r => {
                if (i.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", c.name = "ChunkLoadError", c.type = t, c.request = d, f[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var f, t, [d, c, n] = r,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (f in c) i.o(c, f) && (i.m[f] = c[f]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) t = d[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});