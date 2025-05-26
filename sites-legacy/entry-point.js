! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "76f38daf-0b8c-4402-b34e-7caab129fb90", e._sentryDebugIdIdentifier = "sentry-dbid-76f38daf-0b8c-4402-b34e-7caab129fb90")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, d, c, o, n = {
            13218: (e, a, t) => {
              (0, t(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            44857: (e, a, t) => {
              t(13218)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(3222), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(8)]).then((() => () => t(90008))),
                  "./index": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(5932)]).then((() => () => t(45932))),
                  "./site-routes/Bully": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(7708)]).then((() => () => t(7708))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(884)]).then((() => () => t(20884))),
                  "./tina": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885)]).then((() => () => t(70885)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            67884: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            77600: (e, a, t) => {
              const r = t(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            }
          },
          b = {};

        function s(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = n, s.c = b, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          s.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, s.d(f, d), f
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          8: "62d6427292d84518d1e856ef6cd407dc",
          131: "3512fe4f8cf59cafe8b9eae6cac343ab",
          191: "ab0a88be1dbbfc96e85f9f4d75ad3f3b",
          276: "e15f935bf9bde2590eca7783cc9efcd1",
          278: "56c90c60a4c4cfb1157b7a4355899d9c",
          299: "71455b1d1500dfaf6aa96271f9437d91",
          308: "f97f319a53e11619cd202bafad14a368",
          314: "5b4139258b381dcc5bd3cbacc16b30b0",
          341: "beb97733cde52cc28392ad3ef814b7ca",
          621: "a5dc0856884f1d4849999f5f429247c8",
          656: "d97438846e4b66783d2bb041a520108b",
          662: "e8cdc89950168f45815ddfc3e594d7fe",
          823: "8e632fa2439e739be23c8457b7ca6597",
          824: "5ff6bf56ad99190f7110c09ac5b04fb4",
          838: "c9a60ed27ad9e4af371a5c72eca175a2",
          861: "cd67dd2acf32e3337bd6414b6f95787c",
          884: "cbd8ceaceedd1130bd58fea24ac02821",
          885: "0bd78f3425a34070592be3a2a278beca",
          907: "e136554944e1022b8c90a8e2e56c0858",
          970: "59576e25040c72c8f863deb0bd9718ea",
          1054: "afb78069c66195de21b26bdef47c0f84",
          1242: "de765c738f6d0ec212ac0850ec369f4b",
          1280: "67bc6d22822e652a1ebf257c9f967978",
          1381: "7b9a33588873bb1fae8292256a62abec",
          1478: "bd808c166e81f8d9630742cde84ab452",
          1559: "7e658bb4dfc0ff7b64c9f1a6bf11e36f",
          1822: "3d3b089a4a1f368113afc59637c33afd",
          1868: "f469a7c2df9d81af764b5046bc043733",
          2156: "2dd03a3b70a6dee4d74cad9bf52264d6",
          2171: "266c2e715c9e44469226b21c6e62e34f",
          2221: "647581673827de13759aacb9ce7c3097",
          2243: "e5e68ba13e3827abc1bee86d92f1862b",
          2327: "ea5cbe4bad4a9d3a53eb1e683a75448c",
          2347: "c6bc6242dcf036f4555ce4d1ee52b147",
          2365: "9cdfcdcb89a4a9b0ce29ccc2c29e304c",
          2398: "2fa42eef96a0f98246a03250e056f1a8",
          2466: "393ea7888a70ce6d9c176530e27271ca",
          2522: "68fade7569d6335730d8d4c41578116d",
          2572: "929bb3998e31a268ed0bfbe91aa44719",
          2578: "dff70881183ddc34440b8a0d0abe4ee2",
          2642: "03659dab714ae8fc16ed535fffd784c1",
          2678: "6ab159ea998ad4fb841de48a750a2806",
          2722: "daa11ad4c2936ea7aef761cabe6c3a7b",
          2864: "df0b5922cc1f182b8f6db889fe333a7c",
          3002: "0ddc7420870b4ae3bffbf42131874680",
          3034: "216f0c7e06c395b55d67921409f1aa8b",
          3041: "14711ab047d0ce7edad7e48538594342",
          3197: "79c1d5c4e0b36fdf62ccfa69683c27e7",
          3204: "c982a82b27e6c0510242b6b3d8ab58a7",
          3218: "b542ff1cad8790f1c51527fea5297864",
          3222: "3994572f87adbd15defe104c3bc3ffc1",
          3343: "cd245be691f429b929310a2429aa13cd",
          3352: "197db2aae81024876da3a62d6f3ea6a6",
          3370: "ef696599d2917b88337f1894077f80b0",
          3475: "bd707639c9e6d823640037e539243a65",
          3486: "2ef4a30032973b422fd0a677459def30",
          3586: "c75de7bcaac57c37fed85b13b7fd9004",
          3663: "e26ab3db252dcb59a88b853441e79cac",
          3672: "a8a5f92f51db62a92bef9a310f267b2c",
          3697: "cc1ccd2701a866120cb4a1e9ec58ccf7",
          3885: "d2920011997481fc9a3901e4d0b9084b",
          3940: "f2bc4d934140a28b6b7aa4c654b339b5",
          3941: "0fc27000ce89fa454a248fd96e8ea75a",
          4011: "ec893246fe28d9ccf06743c4e247572e",
          4105: "e92a567ab271aa2cf0d946d73595e031",
          4153: "7adfa5e51522e58759e628ee021dd3d4",
          4309: "953558f6e5a60edcabaf5a1c55eda2af",
          4480: "23a06691960236cf1babc52265bf5f4b",
          4528: "33c99f515ebc677838d9b8186c1602d5",
          4546: "a9c42d802f6f4bd87c64625de0c1bd8f",
          4621: "17c945591e488739a07b21ff72e4df69",
          4672: "3af0c6162ccb7042409f33b6cac6d781",
          4684: "787836355b37154fd4872aa72d70b0a3",
          4700: "65d39e7ff2a656dae4a6218def33ef08",
          4710: "33b874e6d14807d149ec20ccda952617",
          4731: "d07fa0a4b092b1494edcc81613353c40",
          4799: "224758b95ce8ad490576b4b0f468f89a",
          4851: "857b9ae437adb0c4fd9fbc020ee4b613",
          4861: "5bc745772f3764389572243ca68e6a5d",
          4913: "117e37fc7a5ca2e3f810131d4485e0cd",
          4981: "17ec6571a35127e5cd7fb7ff325d7720",
          5018: "fcfcefcbb70cdb67b3d4a53a4b1596fa",
          5233: "2a056d96fa6d025a8b1e0c5267d6f77b",
          5259: "44aacc13f4577d2e0245791fbd1e6385",
          5422: "73fa9a199263901ca6117dc26d975a32",
          5530: "d2731fea4f0d671413913f882b7d432c",
          5639: "6c137f599e83926242fe49978cf45b6d",
          5663: "71edc8ac5878e88b5126da23624acd09",
          5666: "446e023bbbdea88e092cc71466769e20",
          5734: "a2a19dd0e78b22e20db636628ff71558",
          5742: "a96729354b99ea1fdac560fd9935d59a",
          5830: "21830e57429bd0031fcaca14dc2c1bc0",
          5832: "9a06dfb81cf80cfeae98c5f1a9da0dd5",
          5854: "8bbe9766f6d5b1b627def7149e2778ae",
          5932: "a78c63742a5689d74b3714657bd55eb7",
          6186: "111c58894d40241c83c5341e94ac92e9",
          6267: "7f64a3020c3ddcc2ebb40eb01dc9e86a",
          6280: "a4ca5b4a4fdc965b96d57977395dda87",
          6285: "c6ce7d41dea7fb5389a7b8b6d7c0e48c",
          6361: "73b2514de56d95a8e35e9fe4e3c4f23d",
          6664: "e5b17b7103304b1febb8cb7581aa0c6a",
          6719: "3578ccd114a9f0f69844b2ee8308ba60",
          6879: "122a66f88be9ebd6c23673faf7d44528",
          6891: "73e473278855c5563c7a5747c5901dc0",
          6997: "385a8fc4fec07c3e946a86583d476965",
          7002: "a73c3c4c1f04de426d4a672ffd899694",
          7010: "0f53e2e4f0464ad6c094ae2d8286ca23",
          7073: "9ee20a1b64d1d3958d62e720639682fa",
          7353: "9728d1bf55d08765eb001bc61f09a4ca",
          7436: "8e23e219c8d19d363175b3c8eba5749b",
          7452: "a7b227b523c101f0a8c14f6b1a767682",
          7453: "9dcc9080062d684ef3d3cc06247d208f",
          7485: "615122bf673eb20f4cfc67d9f32a1b0e",
          7708: "3d81205c27b2f937983fb10a833b74fb",
          7709: "325a20a70da10ee368821007196585fc",
          7727: "d357bffc4308344aee2c7cf14797de97",
          7893: "e908460b563fe884b5567e1c4da285b3",
          7895: "71ced580c6f694c3ca089db6547c8c13",
          7902: "50c549323a8594e71c80f694b4e3f492",
          7970: "f1142fed11eab510535b5e13b6812af6",
          8272: "332438741e8afd632392bfdf75532ea5",
          8275: "ce81f341a8779077e81f078049972edb",
          8391: "ecf654ef18c1c3182441339b9b5b766a",
          8457: "bba0449b15a6c114c38971140449b439",
          8557: "06d3cb16c13da841eb3ef4043a4f8ecb",
          8654: "e4547f8b0a51a3372c60cb0afe376812",
          8755: "dc9c1007e9ab4262ca1f812d6ce42360",
          8880: "d86bd59de2391d99cfe6141a1bbef9c8",
          8970: "fe7d028448807e02359c775a66a7b72a",
          9022: "cf870e1576d2f3a13bec8ed677db6095",
          9028: "08139a2e7ecfa09d647e87f936bf6b86",
          9126: "3dccbc55eb5fb85ffe54e5debfbab6a4",
          9377: "c25e9e8932bd55750b6cc77a633d522d",
          9583: "1325d46c3fdcdacc9523bd8aaa7aa2e6",
          9615: "7b7b95c628ea6f46e790a428d1e6c7d8",
          9936: "237610a90a524606a72a5825d9b10f8a",
          9990: "ebf82a5217451911ede622cc377069c7"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          8: "1eac0d948be569c136035d072b953ab4",
          341: "82b8e41eb90eae7db3adfb9fff54d045",
          884: "52e55b769351b6e3f1602fe5d2baacd1",
          970: "1b2f72b09166cbba066de21e7a7b33e7",
          2722: "82b8e41eb90eae7db3adfb9fff54d045",
          3352: "89c7274604affd25ef392c3f9a9375d6",
          4672: "e70ba27106c58a2902fdf3deb822d60f",
          5666: "62cb6bfb390050db6a71d81fb427a37d",
          7708: "52e55b769351b6e3f1602fe5d2baacd1",
          9599: "8591dc87aae69356ef4710fc935c5ecf"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", s.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var i = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          885: [17523],
          3352: [31879]
        }, o = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(c, e) && c[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, o, n) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, c, n);
                    var s = b.then((e => o(e, c)), f);
                    if (!n) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(s, r[2], 0, 0, ((e, a, t) => e ? d(s.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var d = s.S[t],
                c = "@rockstargames/sites-legacy",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(3218), s.e(2229), s.e(838)]).then((() => () => s(35671))))), o("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([s.e(2229), s.e(9623), s.e(5966), s.e(4281), s.e(2440), s.e(7002), s.e(4672)]).then((() => () => s(67662))))), o("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([s.e(2327), s.e(2229), s.e(4281), s.e(2440), s.e(8619), s.e(9599), s.e(1559)]).then((() => () => s(21559))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([s.e(4981), s.e(6719), s.e(7709), s.e(2229), s.e(9623), s.e(5966), s.e(4309), s.e(7895)]).then((() => () => s(57895))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(4981), s.e(6186), s.e(2229), s.e(5966), s.e(4281), s.e(861), s.e(341)]).then((() => () => s(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(4981), s.e(6719), s.e(2229), s.e(9623), s.e(4309), s.e(5854)]).then((() => () => s(55247))))), o("focus-trap-react", "10.3.1", (() => Promise.all([s.e(7902), s.e(2229), s.e(7145)]).then((() => () => s(7902))))), o("framer-motion", "10.18.0", (() => Promise.all([s.e(308), s.e(2229)]).then((() => () => s(50308))))), o("framer-motion", "10.18.0", (() => Promise.all([s.e(3204), s.e(2229)]).then((() => () => s(70823))))), o("framer-motion", "7.10.3", (() => Promise.all([s.e(7485), s.e(2229)]).then((() => () => s(17485))))), o("graphql", "16.11.0", (() => s.e(4546).then((() => () => s(24546))))), o("prop-types", "15.8.1", (() => s.e(1478).then((() => () => s(61478))))), o("react-dom", "18.3.1", (() => Promise.all([s.e(3663), s.e(2229)]).then((() => () => s(53663))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(5422)]).then((() => () => s(65422))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(8275)]).then((() => () => s(78275))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(621)]).then((() => () => s(90621))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([s.e(2229), s.e(191)]).then((() => () => s(40191))))), o("react-router-dom", "6.30.0", (() => Promise.all([s.e(4105), s.e(2229), s.e(3271)]).then((() => () => s(94105))))), o("react", "18.2.0", (() => s.e(2522).then((() => () => s(42522))))), o("react", "18.3.1", (() => s.e(8654).then((() => () => s(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return n.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return n.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), n.length ? e[t] = Promise.all(n).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(o = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, o);
                return r
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var o = e[d];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : a(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, s, l = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(b = r[c]))[0])) return !n || ("u" == l ? o > f && !d : "" == l != d);
                  if ("u" == s) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == s)
                      if (o <= f) {
                        if (b != a[o]) return !1
                      } else {
                        if (d ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || o <= f) return !1;
                    n = !1, o--
                  } else {
                    if (o <= f || s < l != d) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, d) => {
              var c = d ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    o = (typeof c)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, t, r, f, d) {
              var c = s.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, s.S[a], t, !1, f, d)) : e(a, s.S[a], t, r, f, d)
            })(((e, t, d, c, o, n) => {
              if (!((e, a) => e && s.o(e, a))(t, d)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, n);
              var b, l = r(t, d, o, c);
              return l ? ((b = l).loaded = 1, b.get()) : n ? n() : void f(((e, t, r, f, d) => {
                var c = e[r];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, d, o, c))
            })),
            c = {},
            o = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], (() => s.e(8654).then((() => () => s(98654))))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([s.e(4105), s.e(3271)]).then((() => () => s(94105))))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6719), s.e(9623), s.e(4309)]).then((() => () => s(55247))))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], (() => s.e(4546).then((() => () => s(24546))))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6719), s.e(7709), s.e(9623), s.e(5966), s.e(4309), s.e(276)]).then((() => () => s(57895))))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(3218), s.e(8457)]).then((() => () => s(35671))))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3663).then((() => () => s(53663))))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6186), s.e(5966), s.e(861), s.e(2722)]).then((() => () => s(63516))))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(7485).then((() => () => s(17485))))),
              55799: () => d("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => s.e(2572).then((() => () => s(40191))))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], (() => s.e(2522).then((() => () => s(42522))))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], (() => s.e(1478).then((() => () => s(61478))))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => s.e(7902).then((() => () => s(7902))))),
              33804: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3041).then((() => () => s(65422))))),
              34977: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(656).then((() => () => s(78275))))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(3204).then((() => () => s(70823))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => s.e(5666).then((() => () => s(67662))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([s.e(9599), s.e(3940)]).then((() => () => s(21559))))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(308).then((() => () => s(50308))))),
              23271: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3002).then((() => () => s(90621)))))
            },
            n = {
              861: [44853],
              2229: [62229],
              2440: [92440],
              3271: [23271],
              3352: [2765, 33804, 34977, 82849, 84590, 87330],
              4281: [2918, 81788],
              4309: [16565],
              5966: [95966],
              7002: [90660],
              7145: [57145],
              8619: [55799, 61913],
              9599: [87052],
              9623: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(n, e) && n[e].forEach((e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var f = o[e]();
                  f.then ? a.push(c[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                8: 1,
                341: 1,
                884: 1,
                970: 1,
                2722: 1,
                3352: 1,
                4672: 1,
                5666: 1,
                7708: 1,
                9599: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = s.miniCssF(e),
                  f = s.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((f = (c = d[r]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", s.nc && (d.nonce = s.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, d.parentNode && d.parentNode.removeChild(d), f(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^((222|861|959)9|2440|3271|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = s.p + s.u(a),
                c = new Error;
              s.l(d, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                o = t[2],
                n = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                o && o(s)
              }
              for (a && a(t); n < d.length; n++) f = d[n], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(44857), s(58639)
      })())
    }
  }
}));