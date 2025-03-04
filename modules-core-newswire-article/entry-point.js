! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "17b5d178-4f78-4265-8d2a-31b07353d721", e._sentryDebugIdIdentifier = "sentry-dbid-17b5d178-4f78-4265-8d2a-31b07353d721")
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
    d = {};
  return Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, t, r, b, n, o = {
            49293: (e, a, c) => {
              (0, c(31789).w)(1)
            },
            31789: (e, a, c) => {
              const d = c(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = d(c.y.meta.url, e)
              }
            },
            23358: (e, a, c) => {
              c(49293)
            },
            90569: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var d = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, f = 0, t = d.length; f !== a && t >= 0;) "/" === d[--t] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var r = d.slice(0, t + 1);
                return c.protocol + "//" + c.host + r
              };
              Number.isInteger
            },
            55974: (e, a, c) => {
              "use strict";
              var d = {
                  "./index": () => Promise.all([c.e(1271), c.e(8743), c.e(9419), c.e(3190), c.e(7512), c.e(216), c.e(1956), c.e(3877), c.e(1897), c.e(9060), c.e(2229), c.e(6188), c.e(1597), c.e(4853), c.e(5966), c.e(1788), c.e(7024), c.e(4298), c.e(1947), c.e(2440), c.e(4943), c.e(6373), c.e(2507), c.e(2729)]).then((() => () => c(14743))),
                  "./tinaBlockTemplates": () => Promise.all([c.e(7512), c.e(1535), c.e(2229), c.e(6188), c.e(4853), c.e(5966), c.e(1788), c.e(7024), c.e(4298), c.e(1947), c.e(4943), c.e(1283)]).then((() => () => c(61283))),
                  "./types": () => Promise.all([c.e(1271), c.e(8743), c.e(9419), c.e(3190), c.e(7512), c.e(216), c.e(1956), c.e(3877), c.e(1897), c.e(9060), c.e(2229), c.e(6188), c.e(1597), c.e(4853), c.e(5966), c.e(1788), c.e(7024), c.e(4298), c.e(1947), c.e(2440), c.e(4943), c.e(6373), c.e(2507), c.e(2729)]).then((() => () => c(43193)))
                },
                f = (e, a) => (c.R = a, a = c.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                t = (e, a) => {
                  if (c.S) {
                    var d = "default",
                      f = c.S[d];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[d] = e, c.I(d, a)
                  }
                };
              c.d(a, {
                get: () => f,
                init: () => t
              })
            },
            29441: e => {
              "use strict";
              e.exports = c
            },
            25136: e => {
              "use strict";
              e.exports = d
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var c = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(c.exports, c, c.exports, s), c.loaded = !0, c.exports
        }
        return s.m = o, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          s.r(d);
          var t = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var r = 2 & c && a;
            "object" == typeof r && !~e.indexOf(r); r = f(r)) Object.getOwnPropertyNames(r).forEach((e => t[e] = () => a[e]));
          return t.default = () => a, s.d(d, t), d
        }, s.d = (e, a) => {
          for (var c in a) s.o(a, c) && !s.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, c) => (s.f[c](e, a), a)), [])), s.u = e => "js/" + {
          131: "1c971bae9e9ec3aa5be978020ada423e",
          216: "017d6407b7bff7cbeaa7c03cc2dd428c",
          278: "68243e4b85e6f2423b50cfc2429c6ce2",
          299: "e4f0bcd89e9b4a050717d9d6e2acf92a",
          314: "b09b9d7bc821482447ba41ab2e4f9e07",
          662: "d61982781f4be4bf637135495026e0a8",
          707: "dcca44a8cb7db27791e9c1b7355988ae",
          824: "fb52e0db5e7c73befd256cf21719df8d",
          907: "2f213f2c2539c1a70c87252e208f23d1",
          1029: "f4d59bd871caa1b25c1767c75318e63e",
          1054: "51e975c10d760d65709952e1d65768ff",
          1121: "bdac101a23a7a34b13287e5a89643a2c",
          1242: "becf39a470193ea1afba434b1171dbc3",
          1271: "920c23bf4407c267ac5b89de8df78ce5",
          1283: "e1167d0b0fa5e560c2869eb48432bad7",
          1515: "ec25fa7cb76ec1d4c3a8f15e1ae14093",
          1535: "6769e9975dd2ae00eb14f30c57c97af6",
          1597: "88c5f9bd0e4bf6ee59423c7c2782910f",
          1604: "458e6ab5161f253c2dc24bb2fcb61699",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "66505f5eb4fcabf1b67065a0a458972c",
          1868: "0205fecdad360a8d4c4e0d42648393d0",
          1897: "492dd94071d9a6a5cad926a8e7d3a60a",
          1947: "0c1a85bd90cadc730bf8dc38e47d3f5e",
          1956: "a6eeb9fa96fdf6abd3950a6addc84001",
          2156: "e019732b4146ce97a90752fc1331fe19",
          2171: "089023a4a204ca8e1eb5d76ff7e55222",
          2221: "f908baf0029c38bfe754947b196bcd91",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "1ff8d4c0cd524ac75c56b2178a5e9b66",
          2347: "7d8361f1d1e5ac10a8ee45ed4fda5bf2",
          2365: "d2b953b14261d8d6a2177a55e6c10c0f",
          2398: "5b0185be4888da948488234b7908a64c",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "1b78ab542ebd668daadf806db083cf68",
          2507: "04ca5b800d4fc295e86b6ba8a649c791",
          2570: "8e080783fd5d7fb973054a30f78b9d6d",
          2642: "9fe08bcb9664f4ca1ca9747f0e8c3873",
          2678: "447d68b0589a6a24f76d9082b367112c",
          2729: "a6dc97d10d65166f6ed12a1ac9d4d6d9",
          2864: "174b5606ff6b6d3af35db1c4373b52c3",
          3034: "513f80b1abdb69bba33607d6b497389f",
          3131: "10f924084c77e18f7fbf9d0152d5000b",
          3190: "8eccedc1264fc883f667c0c791c69758",
          3197: "214c859f754cbf88b7169db297d3b995",
          3217: "3af0f2f2e665f119a2939963d4f8785b",
          3343: "610df707fcde654a750aada0fd1bd7ba",
          3360: "edadefa9dd64bee948b2e3df804ef1c6",
          3370: "259d42263e0430d0f5b7254d4dffd58c",
          3410: "ba627f7b9ae65555aa8bb2e3dc353f83",
          3475: "e4089c1fea4b511863532f9e2a461723",
          3486: "14b6656d2bdb690cac71e2d71fa1c563",
          3502: "83ac078e43ce4d639618b8137ca23b24",
          3546: "2db6d0cd664bbc88292e3b52c42f71ce",
          3697: "0a4cf80fa8116e3b156e9324de947442",
          3759: "eacdf71000f95fe346c82d3b3cff902f",
          3877: "f35d1d602d5f53fe3a39d663e6164d53",
          3885: "e4ec75ec02e65c3d561ed2f4a1469add",
          3941: "9ef1edb6ba1e0bde473077f989466539",
          3954: "275a19e1f2d87e12ce7c7434f05c8959",
          4011: "7268a3b0b95902d42c3a6a184b255bc3",
          4022: "ba2b94805f340f1c385b26da3bc55aa9",
          4282: "574bef4da950fe749b7cdf6914e0a8df",
          4298: "ad8553c2f69145d8ac5b26ae29140289",
          4528: "355c9e9401311ad8373e63271fbde653",
          4621: "cf71f0ccbf1d510a2d0fc28c66c7600a",
          4700: "44b1b1b265d85771e7d5ff90000a5989",
          4710: "4847915fad542b050359263141ee5f8e",
          4731: "52debf77f7049338381ef1744f83ac33",
          4799: "afa8a6d86cc91df99c673f6af314da9b",
          4851: "ebf9fc67532d62572138677f1e550daa",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "87939096348c6020ecfa589cf17ccb94",
          4913: "c7ca110d9636b8398c5800eaa358b652",
          4943: "f4b1900046138cef9ac03e0da31e7042",
          5018: "6d898e46980c3b8b3d15c93296bd6b92",
          5219: "e5aec97916323b70ee496d6caffe9d3a",
          5233: "a479a70b75fc145292594dcc72dd26ae",
          5259: "16d86f46dc886850b0e4ebf0001ab7c9",
          5260: "215a2a8d8a5be6cf1de03b61b9bb24e2",
          5309: "77d17896d82f1cd72b09f3a9a1b2c1a9",
          5483: "ee316243755bf1513826f6281a508484",
          5530: "8644a305c31fdb13bace7706d39a70df",
          5639: "71f28ad132b32a98e2e26509600089a5",
          5663: "ed938aeb6ffbcd4359aefc6e8733fad6",
          5742: "bb7bb01755ab51d18197b58a9fc7e205",
          5830: "0efd1af53d7d96474322654527e23992",
          5832: "3cb6d2d24866d86d10060d707b67597d",
          5834: "ce257d6324b8bf0e47af0c4a0944bd48",
          5909: "e287c4ac03e0eefe0f8e7824d0784feb",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6175: "0aef3c7bff054f376597ef31a808c14c",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "71c35b5e37633dade2a2b5d113f78e1d",
          6280: "0418921c6562b43b8ede840724ad3138",
          6285: "5fed0fc700af8f4b0b2097a53f4c01aa",
          6304: "e6be766a0424db71251fbc0841c39f95",
          6361: "4b735879e373bdff94752bd3dced9159",
          6373: "2208e13206f8ede453b51f7f5b7f456b",
          6480: "c65aec89c8f4f0f3293d16f93b59c5ad",
          6521: "a34af17986d71015d6160d44d6f19ed0",
          6664: "0ebc41195759aa996c68fb220dffd2de",
          6832: "34b30f301a7a4916f244afce4279a4e7",
          6864: "081c152e8fc3df355979ba8e704d8970",
          6879: "b40d1c3a923a553da78998c949055427",
          6891: "38fb93f2c7110f52152be8e6009695c6",
          6997: "0af13016014b489b2226a2baafcdfd80",
          7010: "bf82c93c2171495aefb23cbc2b5ece31",
          7024: "4a8aa7214b7e0382cb10d111e24a2a81",
          7070: "aa3f1d6fb09fe18f01b98c90479cf92c",
          7073: "38b215348ee1770450cb0c1081b08d23",
          7360: "d79be1facb4dac0824930d29d49882f4",
          7436: "8c824a0eb422f64876ef252d4223cec6",
          7452: "d3e63579f9f77349e1b656dfd6fc57dd",
          7453: "1b9b5a7e032b948235dd0eaf892846c0",
          7512: "b84de193af62d408b143852a4142d53a",
          7600: "8ad235b47ad30d901e5851b032fb546a",
          7970: "a347738cfb782f2c89577c30a9d23dd4",
          8272: "a3a8583635cf306053985d2e8ea82bc9",
          8391: "f9dfa9840c7c62c7a329718ce75b58ab",
          8556: "f924f840d022f2a9f869b793fdefda1e",
          8743: "a5a5b849e4f84e57ebce0644a7714fee",
          8755: "e7cb0f85231fe105ae73c90f006981c2",
          8880: "afeea4011556b2a602b3f9ee8f7735f6",
          8970: "04dd87f84fe2316688e8729ab9f26c79",
          9022: "96bb8febcfe993173c6e82cc06a916e8",
          9028: "bcb36817a68e041d163c58f6e54c5d2b",
          9060: "56449719b3261b204b7d8edb4b011338",
          9126: "e4b3acebe6701a56911343650aea18a3",
          9130: "243f063badf71511da56558891485806",
          9157: "ba8c22ef4bf5fd56e947b674363f6d2d",
          9292: "88603efa3aa7c375f77da40e53fe1d6a",
          9377: "22e44619de284e1546cf6166c5a308f9",
          9384: "edc52f925a0a7c3faa6fbd4a58abcfaf",
          9419: "b8586f38ddc77cf01e791facc61d21aa",
          9550: "0767299d30d045148467a152d0049675",
          9615: "cfeb6314197cc42e3ba895e84829af80",
          9830: "21bb81f1f5690ad2f7d357b66930cc2a",
          9936: "e4b1c06d03938ab93e867af82427749b",
          9990: "9527f4138f1281d86b53bf20d441883c"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          1897: "17aa9a721b88917c56aa79b8ce96cd2f",
          1947: "6cd6ed1f7ec476b645d80bafef5d1962",
          2507: "a4d0d05f2c595a76a83fc48160ec1820",
          2570: "384cddac2173849afd90c4a73e287f5e",
          2729: "8e09d2f119becb4ff324f880c5a5e72e",
          3546: "56b16f9b66562a2c85844d5af8cf65a2",
          4298: "99c2fd9adb621652406552432f4eb84c",
          4943: "72518ca966bc5c01f3e45685eb43a2c6",
          5260: "691d4f39e23bcff413a388e9a01eccf8",
          6175: "a183e3230fd27669a21ecdc8a082c2f7",
          6373: "d18aae952df3b002e2d2296d29237958",
          6480: "25c722cb525ac6c6280af22b8a0c5b31",
          8556: "a183e3230fd27669a21ecdc8a082c2f7",
          9060: "aafb24bf83c233b46de2828a5d0ecb5c",
          9384: "65f5ec228557d449103ee2b21207e5eb",
          9830: "384cddac2173849afd90c4a73e287f5e"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, c, d) => {
          if (t[e]) t[e].push(a);
          else {
            var f, b;
            if (void 0 !== c)
              for (var n = document.getElementsByTagName("script"), o = 0; o < n.length; o++) {
                var i = n[o];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == r + c) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", r + c), f.src = e), t[e] = [a];
            var l = (a, c) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(c))), a) return a(c)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), b = {
          1283: [11438, 17523, 44019, 83166],
          1947: [31879],
          4943: [64064]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(b, e) && b[e].forEach((e => {
            var c = s.R;
            c || (c = []);
            var d = n[e];
            if (!(c.indexOf(d) >= 0)) {
              if (c.push(d), d.p) return a.push(d.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), s.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                t = (e, c, t, r, b, n) => {
                  try {
                    var o = e(c, t);
                    if (!o || !o.then) return b(o, r, n);
                    var i = o.then((e => b(e, r)), f);
                    if (!n) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                r = (e, a, f) => t(a.get, d[1], c, 0, b, f),
                b = a => {
                  d.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(s, d[2], 0, 0, ((e, a, c) => e ? t(s.I, d[0], 0, e, r, c) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (c, d) => {
            d || (d = []);
            var f = a[c];
            if (f || (f = a[c] = {}), !(d.indexOf(f) >= 0)) {
              if (d.push(f), e[c]) return e[c];
              s.o(s.S, c) || (s.S[c] = {});
              var t = s.S[c],
                r = "@rockstargames/modules-core-newswire-article",
                b = (e, a, c, d) => {
                  var f = t[e] = t[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : r > b.from)) && (f[a] = {
                    get: c,
                    from: r,
                    eager: !!d
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var t = e => e && e.init && e.init(s.S[c], d);
                    if (f.then) return o.push(f.then(t, a));
                    var r = t(f);
                    if (r && r.then) return o.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                o = [];
              return "default" === c && (b("@foundry/react", "1.25.4", (() => Promise.all([s.e(1271), s.e(1956), s.e(5260), s.e(1897), s.e(2229), s.e(4853), s.e(1029)]).then((() => () => s(65260))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(5483), s.e(2229), s.e(5219)]).then((() => () => s(87768))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(9419), s.e(216), s.e(2229), s.e(5966), s.e(4298), s.e(6480), s.e(1121)]).then((() => () => s(61121))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(1271), s.e(8743), s.e(9419), s.e(3190), s.e(216), s.e(1956), s.e(3877), s.e(2229), s.e(6188), s.e(1597), s.e(4853), s.e(5966), s.e(1788), s.e(2440), s.e(9384), s.e(6373), s.e(3546)]).then((() => () => s(29216))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(9419), s.e(2229), s.e(5966), s.e(4298), s.e(1947), s.e(2440), s.e(2507), s.e(6175)]).then((() => () => s(6175))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(1271), s.e(8743), s.e(3190), s.e(7512), s.e(2229), s.e(6188), s.e(1597), s.e(4853), s.e(5966), s.e(1788), s.e(7024), s.e(5834), s.e(2570)]).then((() => () => s(55834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(1271), s.e(8743), s.e(2229), s.e(6188), s.e(1597), s.e(3410)]).then((() => () => s(93514))))), b("dompurify", "2.4.7", (() => s.e(1515).then((() => () => s(21515))))), b("lodash", "4.17.21", (() => s.e(4282).then((() => () => s(14282))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(7360), s.e(2229)]).then((() => () => s(57360))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(5909), s.e(2229)]).then((() => () => s(15909))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(1604), s.e(2229)]).then((() => () => s(21604))))), b("react", "18.2.0", (() => s.e(3217).then((() => () => s(23217))))), b("text-balancer", "1.0.5", (() => s.e(4022).then((() => () => s(4022))))), n(25136), n(29441)), o.length ? e[c] = Promise.all(o).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var d = c.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = c[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = c[1] ? a(c[1]) : [];
              return c[2] && (d.length++, d.push.apply(d, a(c[2]))), c[3] && (d.push([]), d.push.apply(d, a(c[3]))), d
            },
            a = (c, d) => {
              if (0 in c) {
                d = e(d);
                var f = c[0],
                  t = f < 0;
                t && (f = -f - 1);
                for (var r = 0, b = 1, n = !0;; b++, r++) {
                  var o, i, s = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= d.length || "o" == (i = (typeof(o = d[r]))[0])) return !n || ("u" == s ? b > f && !t : "" == s != t);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (b <= f) {
                        if (o != c[b]) return !1
                      } else {
                        if (t ? o > c[b] : o < c[b]) return !1;
                        o != c[b] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (t || b <= f) return !1;
                    n = !1, b--
                  } else {
                    if (b <= f || i < s != t) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < c.length; r++) {
                var h = c[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            c = (c, d, f) => {
              var t = c[d];
              return (d = Object.keys(t).reduce(((c, d) => !a(f, d) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var d = 0;;) {
                  if (d >= a.length) return d < c.length && "u" != (typeof c[d])[0];
                  var f = a[d],
                    t = (typeof f)[0];
                  if (d >= c.length) return "u" == t;
                  var r = c[d],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && f != r) return f < r;
                  d++
                }
              })(c, d) ? c : d), 0)) && t[d]
            },
            d = (e => function(a, c, d, f) {
              var t = s.I(a);
              return t && t.then ? t.then(e.bind(e, a, s.S[a], c, d, f)) : e(a, s.S[a], c, d, f)
            })(((e, a, d, f, t) => {
              var r = a && s.o(a, d) && c(a, d, f);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            f = {},
            t = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => s.e(3217).then((() => () => s(23217))))),
              16188: () => d("default", "lodash", [1, 4, 17, 21], (() => s.e(4282).then((() => () => s(14282))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(1604).then((() => () => s(21604))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => s.e(7360).then((() => () => s(57360))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(1271), s.e(8743), s.e(6188), s.e(1597)]).then((() => () => s(93514))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(5483), s.e(7600)]).then((() => () => s(87768))))),
              2973: () => d("default", "dompurify", [1, 2, 4, 1], (() => s.e(1515).then((() => () => s(21515))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(1271), s.e(8743), s.e(3190), s.e(7512), s.e(6188), s.e(1597), s.e(4853), s.e(1788), s.e(7024), s.e(5834), s.e(9830)]).then((() => () => s(55834))))),
              15310: () => d("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(8556).then((() => () => s(6175))))),
              20206: () => d("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(9384).then((() => () => s(29216))))),
              23608: () => d("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => Promise.all([s.e(6480), s.e(3502)]).then((() => () => s(61121))))),
              57770: () => d("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(5909).then((() => () => s(15909))))),
              96711: () => d("default", "@foundry/react", [1, 1], (() => s.e(5260).then((() => () => s(65260))))),
              97384: () => d("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4022).then((() => () => s(4022)))))
            },
            r = {
              1597: [9623],
              1788: [81788],
              1947: [2973],
              2229: [62229],
              2440: [92440],
              2729: [15310, 20206, 23608, 57770, 96711, 97384],
              4853: [44853],
              5966: [95966],
              6188: [16188]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(r, e) && r[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var c = a => {
                  f[e] = 0, s.m[e] = c => {
                    delete s.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete f[e], s.m[e] = c => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(f[e] = r.then(c).catch(d)) : c(r)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            s.f.miniCss = (a, c) => {
              e[a] ? c.push(e[a]) : 0 !== e[a] && {
                1897: 1,
                1947: 1,
                2507: 1,
                2570: 1,
                2729: 1,
                3546: 1,
                4298: 1,
                4943: 1,
                5260: 1,
                6175: 1,
                6373: 1,
                6480: 1,
                8556: 1,
                9060: 1,
                9384: 1,
                9830: 1
              } [a] && c.push(e[a] = (e => new Promise(((a, c) => {
                var d = s.miniCssF(e),
                  f = s.p + d;
                if (((e, a) => {
                    for (var c = document.getElementsByTagName("link"), d = 0; d < c.length; d++) {
                      var f = (r = c[d]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (f === e || f === a)) return r
                    }
                    var t = document.getElementsByTagName("style");
                    for (d = 0; d < t.length; d++) {
                      var r;
                      if ((f = (r = t[d]).getAttribute("data-href")) === e || f === a) return r
                    }
                  })(d, f)) return a();
                ((e, a, c, d, f) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", t.onerror = t.onload = c => {
                    if (t.onerror = t.onload = null, "load" === c.type) d();
                    else {
                      var r = c && ("load" === c.type ? "missing" : c.type),
                        b = c && c.target && c.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = r, n.request = b, t.parentNode && t.parentNode.removeChild(t), f(n)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, f, 0, a, c)
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
          s.f.j = (a, c) => {
            var d = s.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) c.push(d[2]);
              else if (/^(2(229|440|507)|(178|429|618)8|1947|3546|4853|5966|6480|9830)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((c, f) => d = e[a] = [c, f]));
              c.push(d[2] = f);
              var t = s.p + s.u(a),
                r = new Error;
              s.l(t, (c => {
                if (s.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var f = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + f + ": " + t + ")", r.name = "ChunkLoadError", r.type = f, r.request = t, d[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var d, f, t = c[0],
                r = c[1],
                b = c[2],
                n = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (d in r) s.o(r, d) && (s.m[d] = r[d]);
                b && b(s)
              }
              for (a && a(c); n < t.length; n++) f = t[n], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            c = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), s.nc = void 0, s(23358), s(55974)
      })())
    }
  }
}));