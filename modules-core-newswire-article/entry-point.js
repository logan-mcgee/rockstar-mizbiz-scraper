! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0859124e-ab3f-4f6b-9cf8-0bd5f04cc536", e._sentryDebugIdIdentifier = "sentry-dbid-0859124e-ab3f-4f6b-9cf8-0bd5f04cc536")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var c = {},
    f = {};
  return Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, t, r, b, o, n = {
            49293: (e, a, c) => {
              (0, c(31789).w)(1)
            },
            31789: (e, a, c) => {
              const f = c(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = f(c.y.meta.url, e)
              }
            },
            23358: (e, a, c) => {
              c(49293)
            },
            90569: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var f = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, d = 0, t = f.length; d !== a && t >= 0;) "/" === f[--t] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var r = f.slice(0, t + 1);
                return c.protocol + "//" + c.host + r
              };
              Number.isInteger
            },
            55974: (e, a, c) => {
              "use strict";
              var f = {
                  "./index": () => Promise.all([c.e(1271), c.e(8743), c.e(3190), c.e(9419), c.e(7512), c.e(216), c.e(3877), c.e(2711), c.e(6467), c.e(2229), c.e(6188), c.e(3254), c.e(5966), c.e(1788), c.e(4853), c.e(7024), c.e(4298), c.e(8750), c.e(1947), c.e(2440), c.e(4943), c.e(6801), c.e(2507), c.e(730)]).then((() => () => c(14743))),
                  "./tinaBlockTemplates": () => Promise.all([c.e(7512), c.e(1535), c.e(2229), c.e(6188), c.e(5966), c.e(1788), c.e(4853), c.e(7024), c.e(4298), c.e(1947), c.e(4943), c.e(1283)]).then((() => () => c(61283))),
                  "./types": () => Promise.all([c.e(1271), c.e(8743), c.e(3190), c.e(9419), c.e(7512), c.e(216), c.e(3877), c.e(2711), c.e(6467), c.e(2229), c.e(6188), c.e(3254), c.e(5966), c.e(1788), c.e(4853), c.e(7024), c.e(4298), c.e(8750), c.e(1947), c.e(2440), c.e(4943), c.e(6801), c.e(2507), c.e(730)]).then((() => () => c(43193)))
                },
                d = (e, a) => (c.R = a, a = c.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                t = (e, a) => {
                  if (c.S) {
                    var f = "default",
                      d = c.S[f];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[f] = e, c.I(f, a)
                  }
                };
              c.d(a, {
                get: () => d,
                init: () => t
              })
            },
            29441: e => {
              "use strict";
              e.exports = c
            },
            25136: e => {
              "use strict";
              e.exports = f
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var c = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(c.exports, c, c.exports, i), c.loaded = !0, c.exports
        }
        return i.m = n, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var t = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var r = 2 & c && a;
            "object" == typeof r && !~e.indexOf(r); r = d(r)) Object.getOwnPropertyNames(r).forEach((e => t[e] = () => a[e]));
          return t.default = () => a, i.d(f, t), f
        }, i.d = (e, a) => {
          for (var c in a) i.o(a, c) && !i.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, c) => (i.f[c](e, a), a)), [])), i.u = e => "js/" + {
          131: "370331df98aca57aea1d571ebc923a42",
          216: "23e347efb0c0ec7a557e2700c6d15c22",
          278: "68645e48ef60ec24cd4128dcb6c25c2c",
          299: "689b0a48b52790e6cc54c4c89bbc5295",
          314: "70e646a29a9ae54044d9ab844a4b76f8",
          662: "6a6024babac61f37f75bb3f41cdc09fa",
          672: "b90722aca995d3a6f5a00c1432272f96",
          730: "68b915c29a5d6d8e6622fc9c1de087b1",
          790: "7dcc4746ef8b96e74f19530e5de6f140",
          824: "eecd605b34b1828a194d302b090e5476",
          907: "d38fbc0b442131787bdf60ef8afa850a",
          1029: "8462fc8ed87c7523564b34413ce68db9",
          1054: "fedc3663895734c76bfb84db9751ef74",
          1121: "a30f9228495080ded3cdbbc409efb082",
          1242: "65699a4d7165efec3eaf6f40c3982f26",
          1271: "fdcecc9f395827cd31e16270f0226e02",
          1283: "1d899a6dfadafc99647d5effde64c0d5",
          1515: "86bf297ae9b2ecf4ff856df2c7b5d181",
          1535: "82626dcc9728a86b8a13e45097fc6b6e",
          1604: "72a69885595bed3b8ba18e1e98684ad1",
          1613: "cb81699d0005ec985f703f9ca7e63463",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "2a7d9cea938fff78c5bf39e1db139240",
          1868: "dc67fd6c9eb8aa5f51daed3ce4ee9166",
          1947: "0c1a85bd90cadc730bf8dc38e47d3f5e",
          2156: "6af186feb0f968537b0709fcf67d5c34",
          2171: "1fd6ab01e898912c9baada91268471e1",
          2221: "94bb06b78894fe34cd8c5431142d9f9a",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "c76f7f15d833bc9675908c7ab5fbaf4f",
          2342: "1cefea7f2fa9abbbf63c3b7fa23886de",
          2347: "2e5cfc2cfa8c2033dcec3bf7e4d799eb",
          2365: "c5c44df1c025a933d76aedf3ac2f0181",
          2398: "63c55acbccd48d9a799d094f901344ce",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "e16e55a73a9d28a6868297084e08865a",
          2498: "de827d8d3835466ce4801629293a219d",
          2507: "04ca5b800d4fc295e86b6ba8a649c791",
          2570: "c2894f7743b27d229f3eafdbf054e6f3",
          2642: "df4327ad37ba18719b4071c4ef4c8e2f",
          2678: "ffe2ffe2785ab2bc4e339039d37f5903",
          2711: "52273fed02eff0b9a44fd233ca65721e",
          2864: "53977f32e0d4d5fa01bc0d9eb19e5da0",
          3034: "a3298e3b54105a216b8ca31f4b1dc6f8",
          3190: "f73200d96c0a4aa294206807e0bea719",
          3197: "9923727da85f7cc6a2ecfdabe705cc56",
          3217: "a326b96256709b5b7b2c64129b48e304",
          3254: "db39e92e1372f37dc9bb21e43212e2f0",
          3343: "38a3b4762d7a7e8be4d5b01639b03c9c",
          3370: "eeddf3856a1470898278da7ac1672d4c",
          3410: "bed5e3e53d347153192d04fe88fe23fe",
          3475: "26c035b58e1b1c63d3b3efa2b31c58a4",
          3486: "45c0f44c13ce7c89acef03a80836663c",
          3502: "95ebbfd5f0669e3a6548677cb2ce4c8b",
          3533: "528cae5d9dcfef1bade4418dbae0afb8",
          3697: "07016231cae4604080066424d7bbab3f",
          3877: "ecbe8d6a952af414d9ec2e74cfd1577a",
          3885: "df1a66804334b36326c5ce4ddc821ada",
          3941: "c24d5a750e569726fb8ac561f3bc1cb0",
          4011: "3bc844c8c5d33221d43a2fcc40408df8",
          4022: "6d18d1e9c0cba070da084ad724e8ab99",
          4275: "93a13cd16daab6ef83a7909820427214",
          4282: "1b0a20873bb2dc92a62cc6d1fcc41175",
          4298: "ad8553c2f69145d8ac5b26ae29140289",
          4528: "fc9246716023b926b6c094cf5500a36d",
          4621: "4ff0e793a0579e97dd89a5f8658d4fec",
          4700: "adbbd81b91b9e90803156a46defa09c2",
          4710: "6201e621422674fde3ca0edb5cb64856",
          4731: "c199e644ea545d9eb15e98d97011c17d",
          4799: "4b39dffa0205aea44bac038f9d53998f",
          4851: "d27b871a957a4c13c54dd4f83538b926",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "c95125fc930d0569ba57deca0e5de5d7",
          4913: "2c3a0c4ae33731562e973af298a9811a",
          4943: "27db5518ec5eaad7a68162e33c7e8757",
          5018: "6d9ab7f3ccb625c4ad1a5b41ae6dfc1c",
          5071: "9698dae592682494970e553102826ab1",
          5219: "885085b32a514b624ff05c95cedab80e",
          5233: "671979a3a6774b5e7e6e40a2be2695bf",
          5259: "a4912e446eabd5c0c41db4bd8b81c240",
          5483: "d6a221a93f7aeb9809178f2df471a0f6",
          5530: "1e51f7a677f2e71c76e1120e1036979a",
          5639: "ceb62ac42294f1a7efd8fcde9e09c239",
          5663: "1958aa0e90db42fc21935449544037b6",
          5742: "5b7f83e7170ca7ca2f5f1402c9b94370",
          5830: "6c87ac4e460049bcc09f61337c85ec0f",
          5832: "8204233ff6921aad50785ed451a4cb73",
          5834: "ff8bec4e70d8b8cee05c9fe6463e0fcd",
          5909: "d976717c341f22758ad73aff536db66b",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6175: "29a7df7749b50441d63d3e690fa8f9d2",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "f65bc6d3527604f5e16a2475e4376da9",
          6280: "ab5e586f9cf3c18cf6dba27127d48ea3",
          6285: "31a97c5354a3de6e1f9e00090430fa47",
          6361: "e043363428f939ad3986fa09437090d4",
          6467: "b71bce54084c4b4b6d126a1f363d51c8",
          6480: "c65aec89c8f4f0f3293d16f93b59c5ad",
          6629: "b4247b93bc3105b995edaf5163d89760",
          6664: "f27d51bc805bec21294eb1b9cf447e13",
          6801: "2364e5e4ff2719e3bab8e6bd7fb11665",
          6832: "3337bc352d1d09de04394fbe121aeded",
          6879: "eb7925579c780aa98f0e75c57014ee86",
          6891: "ecec0bef8bf87da377ba8061cc7f3892",
          6997: "d17460ab5384b4cc0bc3929d55b44d02",
          7003: "7cec63324c05f59b4cfdd9cc744c426c",
          7010: "80388615e47c48a72caa519df75b3a0c",
          7024: "64d0bf55772b2db19b3b8282b60a2630",
          7073: "c47c94cf44526cf0cfe637fdd9bbca8f",
          7224: "18dc2d491fabf15d1b822f85c6661a3f",
          7360: "cb44dcdb787fbf9fbfbc6de2387c0481",
          7436: "6b49756a9e076925ebffde8090ca4385",
          7452: "6679fcc7c426e7cd56bd663e229c38f3",
          7453: "ddab9772b8b6a6c4f1e47a579bd51bd4",
          7512: "d5cdb4cc35b52da2bfee36a0d912a118",
          7600: "5377e412ac969f09c638bf29493ec3f1",
          7926: "7b477f8f48e273ae121fea6461a13e79",
          7970: "1b75dbf2ee44c927440a4ed4b58aa1ac",
          8272: "c0c94b08c8acae2dfe52c52129921d54",
          8284: "4f02653b28bf18b2316f058b61b1138f",
          8348: "e2c3f0dd1d99c8230eef19048c5b3908",
          8391: "1b17b49d89407dbc1cd538782b0f0e6c",
          8431: "9df27d4175d64611a693204a71a5b504",
          8556: "7688e97c4946b80e43531cacc8fb8f06",
          8743: "05ec255e143f4eeb5c2f19759e9fb51d",
          8750: "16228226d74e3c0d8bb50a2c1e38969d",
          8755: "f22505a394395d1d01002d5ec4ba14b6",
          8843: "1f34c04fc0841fe332eb5b0de88526e6",
          8880: "6591d10bdb6a7302654a0d204e1daada",
          8970: "96c2e97ff7c4a1b2d63c815b4ae0abc6",
          9022: "8df22c4fd3ed4297bcf8667795b5c49a",
          9028: "e4d0c70da08d6d0e3ee7efbf12f661c4",
          9107: "ac1dc1758f6a9cba9b72640e6c3749ff",
          9126: "96e2fed9d44e8ec0d66fc679200278cd",
          9377: "2de942361bea63d582c27f07e6b1837f",
          9384: "8bf4953fed5556aaaf4c576ad5d13692",
          9419: "4424837e8fccf17144594370edc3e747",
          9550: "289daea63be22e4a9ffe47ffa0f6c90d",
          9615: "c5fe8d0bf85ae618730d14a8a0fef21c",
          9830: "21bb81f1f5690ad2f7d357b66930cc2a",
          9936: "1d2aa401e9b03536a6374b9c8aaac7d6",
          9940: "03c41147c1331c792c47355222d7d0ff",
          9990: "22031795c0faa0c928af8c1f41d773d4",
          9992: "b91f4ae71586fa6e823da62b9c771373"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          672: "c3ab51a748e0c1eeac2ca19a3a02627b",
          730: "a2d6407736dab396eeffda30107519b0",
          1947: "6cd6ed1f7ec476b645d80bafef5d1962",
          2507: "a4d0d05f2c595a76a83fc48160ec1820",
          2570: "384cddac2173849afd90c4a73e287f5e",
          2711: "17aa9a721b88917c56aa79b8ce96cd2f",
          4298: "99c2fd9adb621652406552432f4eb84c",
          4943: "72518ca966bc5c01f3e45685eb43a2c6",
          5071: "d6e2d87ee2c00aa56d71c6487b5def29",
          6175: "a183e3230fd27669a21ecdc8a082c2f7",
          6480: "25c722cb525ac6c6280af22b8a0c5b31",
          6801: "edcf47f275dd4a0907325018f66ee7cf",
          7003: "d6e2d87ee2c00aa56d71c6487b5def29",
          8348: "64347ce070cf4aadd218c489baa103d7",
          8556: "a183e3230fd27669a21ecdc8a082c2f7",
          9830: "384cddac2173849afd90c4a73e287f5e",
          9992: "407a28bcdab63c0b9127cb1f4518659d"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, c, f) => {
          if (t[e]) t[e].push(a);
          else {
            var d, b;
            if (void 0 !== c)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + c) {
                  d = s;
                  break
                }
              }
            d || (b = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", r + c), d.src = e), t[e] = [a];
            var l = (a, c) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var f = t[e];
                if (delete t[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach((e => e(c))), a) return a(c)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), b && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), b = {
          1283: [11438, 17523, 44019, 83166],
          1947: [31879],
          4943: [64064]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(b, e) && b[e].forEach((e => {
            var c = i.R;
            c || (c = []);
            var f = o[e];
            if (!(c.indexOf(f) >= 0)) {
              if (c.push(f), f.p) return a.push(f.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), i.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                t = (e, c, t, r, b, o) => {
                  try {
                    var n = e(c, t);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then((e => b(e, r)), d);
                    if (!o) return s;
                    a.push(f.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                r = (e, a, d) => t(a.get, f[1], c, 0, b, d),
                b = a => {
                  f.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(i, f[2], 0, 0, ((e, a, c) => e ? t(i.I, f[0], 0, e, r, c) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (c, f) => {
            f || (f = []);
            var d = a[c];
            if (d || (d = a[c] = {}), !(f.indexOf(d) >= 0)) {
              if (f.push(d), e[c]) return e[c];
              i.o(i.S, c) || (i.S[c] = {});
              var t = i.S[c],
                r = "@rockstargames/modules-core-newswire-article",
                b = (e, a, c, f) => {
                  var d = t[e] = t[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : r > b.from)) && (d[a] = {
                    get: c,
                    from: r,
                    eager: !!f
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = i(e);
                    if (!d) return;
                    var t = e => e && e.init && e.init(i.S[c], f);
                    if (d.then) return n.push(d.then(t, a));
                    var r = t(d);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === c && (b("@foundry/react", "1.25.4", (() => Promise.all([i.e(1271), i.e(9992), i.e(2711), i.e(2229), i.e(4853), i.e(1029)]).then((() => () => i(69992))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(5483), i.e(2229), i.e(5219)]).then((() => () => i(87768))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(9419), i.e(216), i.e(2229), i.e(5966), i.e(4298), i.e(6480), i.e(1121)]).then((() => () => i(61121))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(1271), i.e(8743), i.e(3190), i.e(9419), i.e(216), i.e(3877), i.e(2229), i.e(6188), i.e(3254), i.e(5966), i.e(1788), i.e(8750), i.e(2440), i.e(6801), i.e(5071), i.e(9384)]).then((() => () => i(29216))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(9419), i.e(2229), i.e(5966), i.e(4298), i.e(1947), i.e(2440), i.e(2507), i.e(6175)]).then((() => () => i(6175))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([i.e(1271), i.e(8743), i.e(3190), i.e(2498), i.e(2229), i.e(6188), i.e(3254), i.e(5966), i.e(1788), i.e(8750), i.e(672), i.e(8348)]).then((() => () => i(85650))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(1271), i.e(8743), i.e(3190), i.e(7512), i.e(2229), i.e(6188), i.e(3254), i.e(5966), i.e(1788), i.e(4853), i.e(7024), i.e(5834), i.e(2570)]).then((() => () => i(55834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(1271), i.e(8743), i.e(2229), i.e(6188), i.e(3254), i.e(3410)]).then((() => () => i(93514))))), b("dompurify", "2.4.7", (() => i.e(1515).then((() => () => i(21515))))), b("lodash", "4.17.21", (() => i.e(4282).then((() => () => i(14282))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(7360), i.e(2229)]).then((() => () => i(57360))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([i.e(5909), i.e(2229)]).then((() => () => i(15909))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(21604))))), b("react", "18.2.0", (() => i.e(3217).then((() => () => i(23217))))), b("text-balancer", "1.0.5", (() => i.e(4022).then((() => () => i(4022))))), o(25136), o(29441)), n.length ? e[c] = Promise.all(n).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var f = c.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = c[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = c[1] ? a(c[1]) : [];
              return c[2] && (f.length++, f.push.apply(f, a(c[2]))), c[3] && (f.push([]), f.push.apply(f, a(c[3]))), f
            },
            a = (c, f) => {
              if (0 in c) {
                f = e(f);
                var d = c[0],
                  t = d < 0;
                t && (d = -d - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, s, i = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= f.length || "o" == (s = (typeof(n = f[r]))[0])) return !o || ("u" == i ? b > d && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= d) {
                        if (n != c[b]) return !1
                      } else {
                        if (t ? n > c[b] : n < c[b]) return !1;
                        n != c[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < c.length; r++) {
                var h = c[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, f) : !u())
              }
              return !!u()
            },
            c = (c, f, d) => {
              var t = c[f];
              return (f = Object.keys(t).reduce(((c, f) => !a(d, f) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var f = 0;;) {
                  if (f >= a.length) return f < c.length && "u" != (typeof c[f])[0];
                  var d = a[f],
                    t = (typeof d)[0];
                  if (f >= c.length) return "u" == t;
                  var r = c[f],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && d != r) return d < r;
                  f++
                }
              })(c, f) ? c : f), 0)) && t[f]
            },
            f = (e => function(a, c, f, d) {
              var t = i.I(a);
              return t && t.then ? t.then(e.bind(e, a, i.S[a], c, f, d)) : e(a, i.S[a], c, f, d)
            })(((e, a, f, d, t) => {
              var r = a && i.o(a, f) && c(a, f, d);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            d = {},
            t = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(23217))))),
              16188: () => f("default", "lodash", [1, 4, 17, 21], (() => i.e(4282).then((() => () => i(14282))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(21604))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(1271), i.e(8743), i.e(6188), i.e(3254)]).then((() => () => i(93514))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(5483), i.e(7600)]).then((() => () => i(87768))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => i.e(7360).then((() => () => i(57360))))),
              2973: () => f("default", "dompurify", [1, 2, 4, 1], (() => i.e(1515).then((() => () => i(21515))))),
              92440: () => f("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(1271), i.e(8743), i.e(3190), i.e(7512), i.e(6188), i.e(3254), i.e(1788), i.e(4853), i.e(7024), i.e(5834), i.e(9830)]).then((() => () => i(55834))))),
              8506: () => f("default", "@foundry/react", [1, 1, 25, 4], (() => i.e(9992).then((() => () => i(69992))))),
              15310: () => f("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => i.e(8556).then((() => () => i(6175))))),
              20206: () => f("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => i.e(7003).then((() => () => i(29216))))),
              23608: () => f("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => Promise.all([i.e(6480), i.e(3502)]).then((() => () => i(61121))))),
              57770: () => f("default", "react-jsx-parser", [1, 2, 2, 2], (() => i.e(5909).then((() => () => i(15909))))),
              97384: () => f("default", "text-balancer", [1, 1, 0, 5], (() => i.e(4022).then((() => () => i(4022))))),
              20270: () => f("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([i.e(2498), i.e(672)]).then((() => () => i(85650)))))
            },
            r = {
              730: [8506, 15310, 20206, 23608, 57770, 97384],
              1788: [81788],
              1947: [2973],
              2229: [62229],
              2440: [92440],
              3254: [9623],
              4853: [44853],
              5071: [20270],
              5966: [95966],
              6188: [16188],
              7003: [20270]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(r, e) && r[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var c = a => {
                  d[e] = 0, i.m[e] = c => {
                    delete i.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete d[e], i.m[e] = c => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(d[e] = r.then(c).catch(f)) : c(r)
                } catch (e) {
                  f(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, c) => {
              e[a] ? c.push(e[a]) : 0 !== e[a] && {
                672: 1,
                730: 1,
                1947: 1,
                2507: 1,
                2570: 1,
                2711: 1,
                4298: 1,
                4943: 1,
                5071: 1,
                6175: 1,
                6480: 1,
                6801: 1,
                7003: 1,
                8348: 1,
                8556: 1,
                9830: 1,
                9992: 1
              } [a] && c.push(e[a] = (e => new Promise(((a, c) => {
                var f = i.miniCssF(e),
                  d = i.p + f;
                if (((e, a) => {
                    for (var c = document.getElementsByTagName("link"), f = 0; f < c.length; f++) {
                      var d = (r = c[f]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (d === e || d === a)) return r
                    }
                    var t = document.getElementsByTagName("style");
                    for (f = 0; f < t.length; f++) {
                      var r;
                      if ((d = (r = t[f]).getAttribute("data-href")) === e || d === a) return r
                    }
                  })(f, d)) return a();
                ((e, a, c, f, d) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", t.onerror = t.onload = c => {
                    if (t.onerror = t.onload = null, "load" === c.type) f();
                    else {
                      var r = c && ("load" === c.type ? "missing" : c.type),
                        b = c && c.target && c.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = b, t.parentNode && t.parentNode.removeChild(t), d(o)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, d, 0, a, c)
              })))(a).then((() => {
                e[a] = 0
              }), (c => {
                throw delete e[a], c
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (a, c) => {
            var f = i.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) c.push(f[2]);
              else if (/^(2(229|440|507)|6(188|480|801)|1788|1947|4298|4853|5071|5966|9830)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((c, d) => f = e[a] = [c, d]));
              c.push(f[2] = d);
              var t = i.p + i.u(a),
                r = new Error;
              i.l(t, (c => {
                if (i.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var d = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + d + ": " + t + ")", r.name = "ChunkLoadError", r.type = d, r.request = t, f[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var f, d, t = c[0],
                r = c[1],
                b = c[2],
                o = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (f in r) i.o(r, f) && (i.m[f] = r[f]);
                b && b(i)
              }
              for (a && a(c); o < t.length; o++) d = t[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            c = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), i.nc = void 0, i(23358), i(55974)
      })())
    }
  }
}));