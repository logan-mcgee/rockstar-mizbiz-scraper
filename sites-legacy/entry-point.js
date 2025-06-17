! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8ef937c2-55d4-42d1-a440-3b4c7a9a480a", e._sentryDebugIdIdentifier = "sentry-dbid-8ef937c2-55d4-42d1-a440-3b4c7a9a480a")
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
        var e, r, f, c, d, o, n = {
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
                  "./bootstrap": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(3222), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(8)]).then((() => () => t(90008))),
                  "./index": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(5932)]).then((() => () => t(45932))),
                  "./site-routes/Bully": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(7708)]).then((() => () => t(7708))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(884)]).then((() => () => t(20884))),
                  "./tina": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885)]).then((() => () => t(70885)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => c
              })
            },
            67884: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, c = r.length; f !== a && c >= 0;) "/" === r[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + d
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
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, s.d(f, c), f
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          8: "4e3d43ee3ce60e5ef210bcb863c95de8",
          131: "7345b109526502363076a14f7591e2f4",
          191: "84a436d2121e816a424266b2a8fc59ff",
          276: "1d2711af5c93e1eafae54cc0b76b3d17",
          278: "7c869ed5a74b21d9996efafa082bd0fe",
          299: "a905e099a6e1824370d8a0fed5686eb1",
          308: "ba365768736eb86a9612588cbd22b2b1",
          314: "202845db879fd8993a236d6966fa7485",
          341: "b91c0c7857e5c5996fbdd1fcc940e098",
          621: "44b4df5a59f5d1ee707a4a88aa8e8f36",
          656: "64c83c807975c541595157c4d0e2e1f9",
          662: "24fe338d1bb61bbc38548af075a55516",
          823: "b7ebb7f584bd408832b85d44d9905be0",
          824: "6f557703296f603fb2ce786d6aaf710f",
          838: "06fc4719c5abec241b1e80caa1f44f83",
          861: "bfc6229813e2006f8420149896d6daa8",
          884: "025305ac3d47cb4aa48f4388f15ce42f",
          885: "7660e19d14a42d8f5cbcc992511d6563",
          907: "756908eb470ce7102015833ef81a3d22",
          1054: "e733f755da925d8eb0bf9cd01fab14cb",
          1242: "5f145046dd7cbf473afaee67f13e8b27",
          1280: "e7875ef92a11a8cc420c640f3fd3f0d9",
          1381: "1cc4835b162862bbbde8252cb7150123",
          1478: "c5ba030a2fef0b83ca133252221e9ff3",
          1559: "9969b0982406fcf1a07fb0f54597db33",
          1822: "53eacbed2a547305ab0776162b246f0d",
          1868: "e97e9b96fcfdaf55793516986d62b2dc",
          2156: "3f045c40b4b82f027b0bdb8883ce314b",
          2171: "e98d89dec6f367f571678bead0347035",
          2221: "a6c5ba779552274a5fb465dc8b5bd440",
          2243: "54c720425321f62067615f74ef7ede0e",
          2327: "6ab3711b71460c305993707f824f4c47",
          2347: "c571d23fa6bb9a1e325f088f1caeb618",
          2365: "2fad5828c1c025da50a8becfd4873c19",
          2398: "adc15e7eef435e427d5c933ba35eb6db",
          2466: "772e5f0f18f8b8088aa2f37541cca65d",
          2522: "a779fcb6518d3bfbf889d5388d96146e",
          2572: "93b2a3f725e58f757b0e3f139a878403",
          2578: "64a08871ab6198fcbd9730e83b48b920",
          2642: "8f249808242d408d0a00cdf98215b9ba",
          2678: "c69c84f983d1e33b33156151a05993fb",
          2722: "d17e343e1b9ace129058c280d916d42d",
          2864: "a791646db12b1a6069f36f2fead40b3c",
          3002: "c4f2fac4bc6b823e66bc9f476e518f3b",
          3034: "af9e37e6a5ba036a8cf20f84eb153a45",
          3041: "6ef1985579a923ab060c7490b9a73858",
          3197: "31b7788dfde278a82c94d05880a7b40f",
          3204: "0161aa937e2af9d7aac1215f5ad8a324",
          3218: "d43d50cdff2d27c490a6059a58e38dda",
          3222: "4ea4853b06da6ba94663edc7f95b8b8d",
          3343: "12cc15e5c00165a3da9cef712c50d79b",
          3352: "99533198de80c20bfbfbcf49d89f68ad",
          3370: "9672bcac3851450aa2b8c8ab23b06055",
          3469: "dbe1466880a312e7bd1488fbf7c9b6db",
          3475: "dda8046c13ca8e23c3f28a5526a3e4cf",
          3486: "aa5acbcf69bc4d3d99dd5f1809e70f88",
          3586: "1360081a5bc727b0c375e13d5ebbf602",
          3663: "92535e552b436253d43b816af479b651",
          3672: "5b726ec4316f3e1566247aa0e8ee77af",
          3697: "a407cd8e20af430299859e6e95619de7",
          3885: "2d7df940e71ac25d9b538fe6780a2311",
          3940: "d84cc76384f845ae385203cb371b94f5",
          3941: "36daf8a943b85d1422d07067e305f7ce",
          4011: "e1708e864bf968789f4f5aa4ac2484b9",
          4105: "c93aee6bc234828591b41dd42768f6b4",
          4153: "ec3d4e01736e2a4574b70f2222e43732",
          4309: "ebd10b4cbe378d87a4bf962f4b42ef8c",
          4480: "9d72f6edbdd6a656089524d5311fdef3",
          4528: "6ad2dc1b008220b413c390e95f3b8313",
          4546: "b063cc56cc9ba33dfcd2b094659b85e1",
          4621: "c5ea01128f5f765750880ab5499c3521",
          4672: "2632d7ae090d7eb30938dc2a071ea973",
          4684: "da20d1ffa1a0f95cde159c97e8385866",
          4700: "11d2fd9f703fe8cf93854b6cff736e88",
          4710: "fa49eb6c17c73cc5e4cb62a49e4afdf1",
          4731: "f3b484519ed06aa6b68aaa6ed9ac5f3f",
          4799: "e2690a6d7724c659946984cb0e0c1c34",
          4851: "60ff51b5db57c1b0f8e2b982eb460e6f",
          4861: "906a8de4bfa5f260e46fb28853fea891",
          4913: "ff99027951f9d8a096a01a53e4b46e1b",
          4981: "0c3f44d795822ea3b760f91d0373b2b2",
          5018: "6bca2f23e25761b12cd6520516277f8a",
          5233: "d513ad0c2028d60095c60661008bd9cd",
          5259: "9a00b4652954c3eeff39ba9c5544481c",
          5422: "0952f14ed222cd6d5b9239d843310b48",
          5530: "843d94b8856745feff066315a9501b25",
          5639: "00223285858d8993c9962717d5fe0f4b",
          5663: "92acf3ea32730219aa144d1791688b93",
          5666: "d52ff24caa412eeee5288cc95f4851f0",
          5734: "bc4bbe8c864f488602e72b6a0bdee75c",
          5742: "f0bd1712b41bfa1a9630eae6335d8859",
          5830: "44aaf198729b67e8ddc8c3dbde733487",
          5832: "a28dc92597e581ca358ac9b1b0346ad9",
          5854: "ca443cc58c88e14a3447544171e1034d",
          5932: "75137801f270c664b41dbf8b072623c4",
          6186: "84540651ec4e823c821ed011276ab3d5",
          6267: "e4208e85f9f068213b45e399f0a9932c",
          6280: "b4445fa459e28ff759859613d13ae33f",
          6285: "4b4c5f4e84314a6791685bb352019abd",
          6361: "13f96c08024a06cd977bdbecd8833c36",
          6664: "f7ffdde2f1b3774570e1e002ae1ef7ef",
          6719: "e5798217ad34ee65b757509c6e9d49ba",
          6879: "5374793dfdd33f1b334781cce6bdafac",
          6891: "dc22b0ff9fa2139814c21a202cdd01a4",
          6997: "0c69cb8942b0d9b558ac41c683af26fe",
          7002: "b690dcc07816a464445ab438377dce55",
          7010: "503f2646f5d6e5683e376239c6aec7fd",
          7073: "91a4fc62cc0d18995b44e45dabf64451",
          7353: "7c1f1c1b1f334c88137bb512f1578cfe",
          7436: "715b1e23e280cd613e69974fe3900f49",
          7452: "eaa6db19de98a8c105a23e0cc1c082ea",
          7453: "2ff52ce12609f9b29cb407e2086919c3",
          7485: "eee2b5526f21603d16c71b6256e2f7a1",
          7708: "727186c438d37e519956453e6bd5904b",
          7709: "1851634126c56f9b6b69f39507577e60",
          7727: "6bec7e42ab1f87e3525a888f9336cae0",
          7893: "e59bce7e6b45a48f818f86dfd2b1093d",
          7895: "d73aa90a6d195bf6f357c2428ada6612",
          7902: "47d9954b29790968ef42173e64e9c0a9",
          7970: "55fb62d0e2e18f34757c32f8f80f5325",
          8272: "ef3bb561d5b386e5ef5af3a9fbc91333",
          8275: "22034af930d968261ccf6965f6217889",
          8391: "840760da49e5244e78f3212333dc85fb",
          8457: "0d6b819276468986b38db7a259b1c8d0",
          8557: "fb3d5024341da193a7c52109276e6ddd",
          8654: "dce5b7db2f4735cbab205d9da40139e7",
          8755: "2bf7e89e74244c0dc7e190c5572c02ab",
          8880: "0e047fe047887b54cc6cc8ff4b53800c",
          8970: "c410695bb4eb6624adf285d913f88105",
          9022: "fcd460e3444c42a8e5d8fb706683ffab",
          9028: "5e9df77527280a738ae082e882faa7f7",
          9126: "295c10ae297b1537bc7becca23b5b856",
          9377: "0f8f87499ed977ae9d34b0989cbab4a6",
          9583: "0a171f613b49155018735d824adbf21b",
          9615: "2962b9e2a49c804903c864d73c3e6ed4",
          9649: "8aa12405716d2598474343d15158e72c",
          9936: "b1cc778a70ab360de2e9dbebacc8a17d",
          9990: "b78c0d57bdefc81284bc7dbd06cac8c7"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          8: "1eac0d948be569c136035d072b953ab4",
          341: "82b8e41eb90eae7db3adfb9fff54d045",
          884: "52e55b769351b6e3f1602fe5d2baacd1",
          2722: "82b8e41eb90eae7db3adfb9fff54d045",
          3352: "a287413b91e22d2183cac646a279852e",
          3469: "db1c0ba0699f10d1417e9b5ae22397d7",
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
        }), e), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-legacy:", s.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + t) {
                  d = l;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
            var i = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = i.bind(null, d.onerror), d.onload = i.bind(null, d.onload), o && document.head.appendChild(d)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          885: [17523],
          3352: [31879]
        }, o = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(d, e) && d[e].forEach((e => {
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
                c = (e, t, c, d, o, n) => {
                  try {
                    var b = e(t, c);
                    if (!b || !b.then) return o(b, d, n);
                    var s = b.then((e => o(e, d)), f);
                    if (!n) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => c(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(s, r[2], 0, 0, ((e, a, t) => e ? c(s.I, r[0], 0, e, d, t) : f()), 1)
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
              var c = s.S[t],
                d = "@rockstargames/sites-legacy",
                o = (e, a, t, r) => {
                  var f = c[e] = c[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(3218), s.e(2229), s.e(838)]).then((() => () => s(35671))))), o("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([s.e(2229), s.e(9623), s.e(5966), s.e(4281), s.e(2440), s.e(7002), s.e(4672)]).then((() => () => s(67662))))), o("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([s.e(2327), s.e(2229), s.e(4281), s.e(2440), s.e(8619), s.e(9599), s.e(1559)]).then((() => () => s(21559))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([s.e(4981), s.e(6719), s.e(7709), s.e(2229), s.e(9623), s.e(5966), s.e(4309), s.e(7895)]).then((() => () => s(57895))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(4981), s.e(6186), s.e(2229), s.e(5966), s.e(4281), s.e(861), s.e(341)]).then((() => () => s(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(4981), s.e(6719), s.e(2229), s.e(9623), s.e(4309), s.e(5854)]).then((() => () => s(55247))))), o("focus-trap-react", "10.3.1", (() => Promise.all([s.e(7902), s.e(2229), s.e(7145)]).then((() => () => s(7902))))), o("framer-motion", "10.18.0", (() => Promise.all([s.e(308), s.e(2229)]).then((() => () => s(50308))))), o("framer-motion", "10.18.0", (() => Promise.all([s.e(3204), s.e(2229)]).then((() => () => s(70823))))), o("framer-motion", "7.10.3", (() => Promise.all([s.e(7485), s.e(2229)]).then((() => () => s(17485))))), o("graphql", "16.11.0", (() => s.e(4546).then((() => () => s(24546))))), o("prop-types", "15.8.1", (() => s.e(1478).then((() => () => s(61478))))), o("react-dom", "18.3.1", (() => Promise.all([s.e(3663), s.e(2229)]).then((() => () => s(53663))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(5422)]).then((() => () => s(65422))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(8275)]).then((() => () => s(78275))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(9649)]).then((() => () => s(19649))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(621)]).then((() => () => s(90621))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([s.e(2229), s.e(191)]).then((() => () => s(40191))))), o("react-router-dom", "6.30.0", (() => Promise.all([s.e(4105), s.e(2229), s.e(3271)]).then((() => () => s(94105))))), o("react", "18.2.0", (() => s.e(2522).then((() => () => s(42522))))), o("react", "18.3.1", (() => s.e(8654).then((() => () => s(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return n.push(a.then(f, e));
                  var c = f(a);
                  if (c && c.then) return n.push(c.catch(e))
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
                for (var f = 1, c = 1; c < e.length; c++) f--, r += "u" == (typeof(o = e[c]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, o);
                return r
              }
              var d = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                d.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? d.pop() + " " + d.pop() : a(o))
              }
              return n();

              function n() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, o = 1, n = !0;; o++, d++) {
                  var b, s, l = o < a.length ? (typeof a[o])[0] : "";
                  if (d >= r.length || "o" == (s = (typeof(b = r[d]))[0])) return !n || ("u" == l ? o > f && !c : "" == l != c);
                  if ("u" == s) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == s)
                      if (o <= f) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || o <= f) return !1;
                    n = !1, o--
                  } else {
                    if (o <= f || s < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (d = 1; d < a.length; d++) {
                var h = a[d];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, c) => {
              var d = c ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    c = (typeof f)[0];
                  if (r >= t.length) return "u" == c;
                  var d = t[r],
                    o = (typeof d)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            f = e => {
              throw new Error(e)
            },
            c = (e => function(a, t, r, f, c) {
              var d = s.I(a);
              return d && d.then && !r ? d.then(e.bind(e, a, s.S[a], t, !1, f, c)) : e(a, s.S[a], t, r, f, c)
            })(((e, t, c, d, o, n) => {
              if (!((e, a) => e && s.o(e, a))(t, c)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, l = r(t, c, o, d);
              return l ? ((b = l).loaded = 1, b.get()) : n ? n() : void f(((e, t, r, f, c) => {
                var d = e[r];
                return "No satisfying version (" + a(f) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
              })(t, e, c, o, d))
            })),
            d = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(8654).then((() => () => s(98654))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([s.e(4105), s.e(3271)]).then((() => () => s(94105))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6719), s.e(9623), s.e(4309)]).then((() => () => s(55247))))),
              16565: () => c("default", "graphql", !1, [1, 16, 9, 0], (() => s.e(4546).then((() => () => s(24546))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6719), s.e(7709), s.e(9623), s.e(5966), s.e(4309), s.e(276)]).then((() => () => s(57895))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(3218), s.e(8457)]).then((() => () => s(35671))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3663).then((() => () => s(53663))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6186), s.e(5966), s.e(861), s.e(2722)]).then((() => () => s(63516))))),
              90660: () => c("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(7485).then((() => () => s(17485))))),
              55799: () => c("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => s.e(2572).then((() => () => s(40191))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(2522).then((() => () => s(42522))))),
              57145: () => c("default", "prop-types", !1, [1, 15, 8, 1], (() => s.e(1478).then((() => () => s(61478))))),
              2765: () => c("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => s.e(7902).then((() => () => s(7902))))),
              33804: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3041).then((() => () => s(65422))))),
              34977: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(656).then((() => () => s(78275))))),
              82849: () => c("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(3204).then((() => () => s(70823))))),
              84590: () => c("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => s.e(5666).then((() => () => s(67662))))),
              87330: () => c("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([s.e(9599), s.e(3940)]).then((() => () => s(21559))))),
              87052: () => c("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(308).then((() => () => s(50308))))),
              23271: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3002).then((() => () => s(90621)))))
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
              if (s.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var t = a => {
                  d[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete d[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var f = o[e]();
                  f.then ? a.push(d[e] = f.then(t).catch(r)) : t(f)
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
                2722: 1,
                3352: 1,
                3469: 1,
                4672: 1,
                5666: 1,
                7708: 1,
                9599: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = s.miniCssF(e),
                  f = s.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var d;
                      if ((f = (d = c[r]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", s.nc && (c.nonce = s.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = d, n.request = o, c.parentNode && c.parentNode.removeChild(c), f(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
              var c = s.p + s.u(a),
                d = new Error;
              s.l(c, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, r[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, c = t[0],
                d = t[1],
                o = t[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in d) s.o(d, r) && (s.m[r] = d[r]);
                o && o(s)
              }
              for (a && a(t); n < c.length; n++) f = c[n], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(44857), s(58639)
      })())
    }
  }
}));