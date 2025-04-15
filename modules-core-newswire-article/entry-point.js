! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "942323d5-f181-4ac5-b6de-085341b1c3b4", e._sentryDebugIdIdentifier = "sentry-dbid-942323d5-f181-4ac5-b6de-085341b1c3b4")
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
  var d = {},
    c = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, r, t, b, o, n = {
            24075: (e, a, d) => {
              (0, d(47387).w)(1)
            },
            47387: (e, a, d) => {
              const c = d(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = c(d.y.meta.url, e)
              }
            },
            45408: (e, a, d) => {
              d(24075)
            },
            13099: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, f = 0, r = c.length; f !== a && r >= 0;) "/" === c[--r] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var t = c.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            55974: (e, a, d) => {
              "use strict";
              var c = {
                  "./index": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(7366), d.e(4246), d.e(6330), d.e(2052), d.e(2229), d.e(6188), d.e(6682), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(88468))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(1426), d.e(1269), d.e(2229), d.e(6188), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(636), d.e(495)]).then((() => () => d(90495))),
                  "./types": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(7366), d.e(4246), d.e(6330), d.e(2052), d.e(2229), d.e(6188), d.e(6682), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(11485)))
                },
                f = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      f = d.S[c];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => f,
                init: () => r
              })
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            25136: e => {
              "use strict";
              e.exports = c
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var d = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(d.exports, d, d.exports, s), d.loaded = !0, d.exports
        }
        return s.m = n, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          s.r(c);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, s.d(c, r), c
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "a93dc05acf366560e30011d46f5216f2",
          278: "ec57f5287d6b9e3129c64ad8daa8c83d",
          299: "f24a162fe3830ed6bb11c902af17ac50",
          314: "514e62d49389bad3610f07a375ae9d31",
          377: "22c1ce2f03beb89e74ee0f9bc05b4284",
          495: "5b586e4a36391fea9df71c3a5ab9b2f1",
          561: "5737b76ccd736c5c171a94504e5b0f1a",
          636: "5b2c5fccefa8f58a14e1550638aa8187",
          662: "1875c017795872f36e04756657cec495",
          721: "2af2b19a8bfca0e051cb4a15aafbc2b9",
          824: "15242549956055a1b4a1c2d21cab7da6",
          888: "41aaf8149c90136735c14b7f5f64a93b",
          907: "5485774c8a2334e0bd39726309241c0d",
          969: "335d0e316389fe53f4643ba7f465fc5d",
          1054: "dc559a83d4c8387a9e51137715645ff2",
          1242: "19126e37418a8c8487a5c1299fd4252e",
          1269: "3d686f84fe4c1a5629546aa5672b52dc",
          1426: "4d3d3d4d63a2aed5c7c6d9629125268e",
          1607: "bff3ed7a9c19ab7edaeb10f321150755",
          1673: "2e05829c63d726bc35d4b1a2b1e5870e",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "6d4813818f70aa43e9e1e52914535882",
          1868: "46a80ea0a66c97375fe7d23b220f2be7",
          2024: "5241ec2a16483888756aa91ec1f4a334",
          2052: "a2d120a0fd9ec4b014f6ab9c27a0784f",
          2156: "897a846efff26018a0fa61b3f617b677",
          2171: "9f047044e78be54b56ecb03ff4795096",
          2221: "c609cf893059f05319caedb4116a330f",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "a48bcf707b50d76d606c38525fc4a655",
          2339: "8e39c511fe4afd9f6e99c143f1fcdcaa",
          2347: "0630f9fd5c9bc11432b094d35277cf25",
          2365: "f5b04b8f0c1c0d1481e1f0fcbba38626",
          2398: "0358a070f8584acb35149a48d6e90dd9",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "c44fcc71fd5ed6a950a51c7db44f2cd7",
          2642: "0301a8a8102ccc51ff9151652725de83",
          2654: "d702797c67f65a7098bf07fca3cc5f75",
          2678: "a62dc81d55900f99cbcc3ff26485d423",
          2781: "2f6dc577a5d7de8d95be149af2791346",
          2860: "ab6c38fc028a390273ca71ec1f1f7771",
          2864: "3472df51289071a542495c540aee940e",
          2941: "e0c691c8aa741c6ade4d6b3488f33591",
          3034: "7a10f80055e8940d79b5807d30d39a16",
          3197: "982264d8daca914efaf193f75dd5af06",
          3343: "30b1f3aab43943aad2c1e824d79dda98",
          3365: "687d4804e52c26de64979798d743c4bb",
          3370: "df096f412238b01ce9547c6161adb707",
          3447: "dec4eadfb7b61c79cb15ed0814419823",
          3475: "f8db9561bcbe0c0985679f9646849b71",
          3486: "507a23de2de7675a54438c956d76ff9d",
          3547: "966a42900d06be4de207aff5fbff578b",
          3550: "d5d2ae142282a24738fe7a5d6bd06e66",
          3622: "da789dd292c27a1e0dd1aa49e496a2e7",
          3697: "d2691c602b353c1bca1e00716b016e12",
          3717: "b14baf52ef10b670be3c7e4e108af80a",
          3855: "6f9e3fe46f06ad988888f83cdc52b052",
          3881: "2493215f4b5a84599905fced15dae934",
          3885: "67992200ec8802aefa5f08036da6937f",
          3941: "ba056202288e4e2847aa8ee1bb33954a",
          4011: "67157cd453f4d7aff26c070992459fcd",
          4018: "358e67a1ec050e5193525f17007f383c",
          4054: "e731bef2dc167e660671bab93b0d130f",
          4186: "265451628e5c86b2cd832f35f0ae5740",
          4220: "527ea16c2a6afc2307a96c3100073445",
          4246: "99da0b678ed8ad123ab5242fe6399322",
          4324: "e39327aeae6f3965a8d02949ae191d6c",
          4378: "02af4428850b45c6cc92df2ba51d94d2",
          4394: "da5ccbfab0973470e67ad02e22bce857",
          4528: "ab427da6c34bce7b0edb04467a487db2",
          4621: "211f8743ae3943ab3d6659e3d0074b2d",
          4700: "f06b69efbccb14a9714ce2767938dcd0",
          4710: "aedec776e71f00ee0daafc8528b7bfb4",
          4731: "eb5cb33eb3419f18d521a8f72905c1d3",
          4799: "ca232415387b887ddae6dd9a58478e28",
          4851: "5bba0b5dbe8bdfffbf7e8fd8569b6cc6",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "6446c903153c81770ea081552b8b4e56",
          4864: "49af03b6f036fcee6c414924656708dd",
          4913: "339a50a3c1b0343a51558f148e5eef72",
          5018: "b69d8b54b80ca6186dac2db4daa66f15",
          5043: "161764f02cb684adb49b134d54fc2cba",
          5233: "8db6098d6ddc362eac2f37f87d09982b",
          5247: "a577f16fb069ee6b82cf8ae8662d6d15",
          5254: "ea3b57ffbe5b808a1136c29ccc5f447a",
          5259: "0991abe0ea2fd8eeac13a49c70d890b4",
          5530: "582109ff6636adbf3245a3ad24a73c1f",
          5639: "4a68d1e2dbff485669da6fd4df38e525",
          5663: "d1780cad90720bf554530d36b79658bb",
          5742: "0f929625cffb4e70caf0cc796a1d4766",
          5794: "2b21d5e6bb5b46993bc3c2e77507b9aa",
          5830: "7e119d4f425e12071c177e747d091003",
          5832: "bcd024f364e831a7ba6d2b8558f4d6e9",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "daf7ec83b4e22601606980dd74ec1df0",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "451b78af1067f5f0fb3dfa29f5b9d96d",
          6280: "de4d6e4ea85d8fa63148095035e7af6f",
          6285: "41f276347a13ac0f3424b2b74905aaea",
          6299: "b4d6a0ee62c982e4ebc511666f4dc3b6",
          6330: "3dcf404ba4b6376911d5f78a99498bbb",
          6361: "8d8ea1ca836fbd055ea5d02b8544db4e",
          6664: "b9a82b4aa218c343b3fb3157520f8784",
          6682: "8cb5c8f9c7b9d9484d8ed4f4ed5c6ee5",
          6879: "4d31ee5940222d0087f18785aee9abd5",
          6891: "eba5cbb8d6f0efeba8263098a18e1ffa",
          6940: "3ecb044f660d5cefd04927aa700d80c8",
          6997: "4e595aa9407b203640036a186726f3fb",
          7010: "dd58f64fd588fc117977437a09db4b38",
          7039: "f17d368482f9ae8ba54002ead45cefa5",
          7073: "6a7ee1f7dfe366757c148b75bd54a9bf",
          7366: "364a440fef73804607e832eac48923fa",
          7436: "2c4243c6581b28a1d92c7a0baca6db5e",
          7452: "78fff0ee6d4c793984cbee3ec84548d9",
          7453: "2f8440827f67c1fd962bcb8c44b90a6e",
          7531: "32d19dc7b29620f0902917d16763b1e1",
          7539: "d993d1b41c852afc7bc882c7e2b54b6d",
          7568: "d9f3846e33abb2e55f66f411c64fdc48",
          7868: "f2302380e476462c695fc52f83d8437f",
          7970: "3003b42dc0b48c6c658428774a7537fb",
          8110: "b42ea07565caf74dea6d02c8acfbdcf5",
          8272: "062cc42f24e4c3009c01adf3425bfb48",
          8391: "bedca9085beaf7bd242d6d6b928abad7",
          8714: "83935b9521b1fa2905f31a4024bbab04",
          8755: "03340e37b7a63f00514a0819fc55e37f",
          8880: "066b96c4455370eec455ea23d6af381f",
          8970: "4c40d018873bf5be6f88612c9673ca49",
          9022: "a4c81c3ece115baf02f945dca15afd20",
          9028: "c036bcc61fc17bd53efa326e0cfbe034",
          9126: "b973795e7d1e9337e8707e13516f43a7",
          9377: "c98871c8b02323d3c02323f9f3c8e90f",
          9474: "35b941b59935a85bc11c10eca6cf1413",
          9540: "7ef924ee4784a0ddf945e49ee8c9a769",
          9615: "bcc5df8ab1eb50eb94cc21da349a2482",
          9642: "1966b87f85af4b5ab4d8823d07db32a9",
          9936: "6680abc909b86b2d241ca2f3c7e03eb5",
          9990: "e159c7c136a48b8ae3f594c3dde96c92"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var i = o[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + d) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var l = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var c = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), c && c.forEach((e => e(d))), a) return a(d)
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
          495: [11438, 17523, 44019, 83166],
          636: [64064],
          5043: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(b, e) && b[e].forEach((e => {
            var d = s.R;
            d || (d = []);
            var c = o[e];
            if (!(d.indexOf(c) >= 0)) {
              if (d.push(c), c.p) return a.push(c.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), s.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var n = e(d, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), f);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                t = (e, a, f) => r(a.get, c[1], d, 0, b, f),
                b = a => {
                  c.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(s, c[2], 0, 0, ((e, a, d) => e ? r(s.I, c[0], 0, e, t, d) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, c) => {
            c || (c = []);
            var f = a[d];
            if (f || (f = a[d] = {}), !(c.indexOf(f) >= 0)) {
              if (c.push(f), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var r = s.S[d],
                t = "@rockstargames/modules-core-newswire-article",
                b = (e, a, d, c) => {
                  var f = r[e] = r[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (f[a] = {
                    get: d,
                    from: t,
                    eager: !!c
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var r = e => e && e.init && e.init(s.S[d], c);
                    if (f.then) return n.push(f.then(r, a));
                    var t = r(f);
                    if (t && t.then) return n.push(t.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (b("@foundry/react", "1.25.4", (() => Promise.all([s.e(6035), s.e(7366), s.e(3881), s.e(6330), s.e(2229), s.e(4853), s.e(2781)]).then((() => () => s(23881))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(3717), s.e(4394), s.e(2229), s.e(5966), s.e(4324), s.e(8110), s.e(2654)]).then((() => () => s(88110))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(3717), s.e(7531), s.e(4394), s.e(7366), s.e(4246), s.e(2229), s.e(6188), s.e(6682), s.e(4853), s.e(5966), s.e(1788), s.e(2440), s.e(2860), s.e(3547)]).then((() => () => s(22860))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(3717), s.e(2229), s.e(5966), s.e(4324), s.e(5043), s.e(2440), s.e(6299), s.e(7568), s.e(3365)]).then((() => () => s(17568))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(2229), s.e(6188), s.e(6682), s.e(4853), s.e(5966), s.e(1788), s.e(7539), s.e(8714)]).then((() => () => s(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(2229), s.e(6188), s.e(6682), s.e(3855)]).then((() => () => s(46323))))), b("dompurify", "2.4.7", (() => s.e(561).then((() => () => s(20561))))), b("lodash", "4.17.21", (() => s.e(7868).then((() => () => s(17868))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(5794), s.e(2229)]).then((() => () => s(50556))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(2339), s.e(2229)]).then((() => () => s(12339))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), b("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), b("text-balancer", "1.0.5", (() => s.e(4864).then((() => () => s(74864))))), o(25136), o(29441)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var c = d.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = d[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = d[1] ? a(d[1]) : [];
              return d[2] && (c.length++, c.push.apply(c, a(d[2]))), d[3] && (c.push([]), c.push.apply(c, a(d[3]))), c
            },
            a = (d, c) => {
              if (0 in d) {
                c = e(c);
                var f = d[0],
                  r = f < 0;
                r && (f = -f - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, s = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= c.length || "o" == (i = (typeof(n = c[t]))[0])) return !o || ("u" == s ? b > f && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= f) {
                        if (n != d[b]) return !1
                      } else {
                        if (r ? n > d[b] : n < d[b]) return !1;
                        n != d[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (t = 1; t < d.length; t++) {
                var p = d[t];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, c) : !u())
              }
              return !!u()
            },
            d = (d, c, f) => {
              var r = d[c];
              return (c = Object.keys(r).reduce(((d, c) => !a(f, c) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var f = a[c],
                    r = (typeof f)[0];
                  if (c >= d.length) return "u" == r;
                  var t = d[c],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && f != t) return f < t;
                  c++
                }
              })(d, c) ? d : c), 0)) && r[c]
            },
            c = (e => function(a, d, c, f) {
              var r = s.I(a);
              return r && r.then ? r.then(e.bind(e, a, s.S[a], d, c, f)) : e(a, s.S[a], d, c, f)
            })(((e, a, c, f, r) => {
              var t = a && s.o(a, c) && d(a, c, f);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            f = {},
            r = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => s.e(7868).then((() => () => s(17868))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => s.e(5794).then((() => () => s(50556))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(6188), s.e(6682)]).then((() => () => s(46323))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              2973: () => c("default", "dompurify", [1, 2, 4, 1], (() => s.e(561).then((() => () => s(20561))))),
              92440: () => c("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(6188), s.e(6682), s.e(4853), s.e(1788), s.e(7539), s.e(9540)]).then((() => () => s(69540))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(7568).then((() => () => s(17568))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(2860).then((() => () => s(22860))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => s.e(8110).then((() => () => s(88110))))),
              57770: () => c("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(2339).then((() => () => s(12339))))),
              96711: () => c("default", "@foundry/react", [1, 1], (() => s.e(3881).then((() => () => s(23881))))),
              97384: () => c("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4864).then((() => () => s(74864)))))
            },
            t = {
              1788: [81788],
              2229: [62229],
              2440: [92440],
              3550: [15310, 20206, 23608, 57770, 96711, 97384],
              4853: [44853],
              5043: [2973],
              5966: [95966],
              6188: [16188],
              6682: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(t, e) && t[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete f[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(c)) : d(t)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          s.b = document.baseURI || self.location.href;
          var e = {
            6947: 0
          };
          s.f.j = (a, d) => {
            var c = s.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) d.push(c[2]);
              else if (/^((17|61)88|2229|2440|4853|5966)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((d, f) => c = e[a] = [d, f]));
              d.push(c[2] = f);
              var r = s.p + s.u(a),
                t = new Error;
              s.l(r, (d => {
                if (s.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + f + ": " + r + ")", t.name = "ChunkLoadError", t.type = f, t.request = r, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, f, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in t) s.o(t, c) && (s.m[c] = t[c]);
                b && b(s)
              }
              for (a && a(d); o < r.length; o++) f = r[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(45408), s(55974)
      })())
    }
  }
}));