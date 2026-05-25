try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8c7f926e-c2d9-4f3b-b194-34336e6ee585", e._sentryDebugIdIdentifier = "sentry-dbid-8c7f926e-c2d9-4f3b-b194-34336e6ee585")
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
  var d = {},
    t = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      d.default = e.default || e, Object.keys(e).forEach(function(a) {
        d[a] = e[a]
      })
    }, function(e) {
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, f, c, b, n, o = {
            20154(e, a, d) {
              (0, d(89160).w)(1)
            },
            89160(e, a, d) {
              const t = d(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = t(d.y.meta.url, e)
              }
            },
            35649(e, a, d) {
              d(20154)
            },
            51908(e, a, d) {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var t = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, r = 0, f = t.length; r !== a && f >= 0;) "/" === t[--f] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
              };
              Number.isInteger
            },
            55974(e, a, d) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([d.e(4577), d.e(9512), d.e(3892), d.e(3600), d.e(3374), d.e(4156), d.e(4815), d.e(5971), d.e(1576), d.e(7717), d.e(7048), d.e(3082), d.e(4017), d.e(3331), d.e(2909), d.e(9646), d.e(6416), d.e(1270), d.e(2199), d.e(8046), d.e(2625), d.e(7301), d.e(8248), d.e(2285), d.e(8657), d.e(7480), d.e(840), d.e(693)]).then(() => () => d(32451)),
                  "./tinaBlockTemplates": () => Promise.all([d.e(4577), d.e(9512), d.e(3892), d.e(4156), d.e(7717), d.e(3082), d.e(4017), d.e(3331), d.e(2909), d.e(9646), d.e(1270), d.e(8046), d.e(2625), d.e(8248), d.e(8657), d.e(5819)]).then(() => () => d(26047)),
                  "./types": () => Promise.all([d.e(4577), d.e(9512), d.e(3892), d.e(3600), d.e(3374), d.e(4156), d.e(4815), d.e(5971), d.e(1576), d.e(7717), d.e(7048), d.e(3082), d.e(4017), d.e(3331), d.e(2909), d.e(9646), d.e(6416), d.e(1270), d.e(2199), d.e(8046), d.e(2625), d.e(7301), d.e(8248), d.e(2285), d.e(8657), d.e(7480), d.e(840), d.e(693)]).then(() => () => d(21667))
                },
                r = (e, a) => (d.R = a, a = d.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var t = "default",
                      r = d.S[t];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[t] = e, d.I(t, a)
                  }
                };
              d.d(a, {
                get: () => r,
                init: () => f
              })
            },
            29441(e) {
              "use strict";
              e.exports = d
            },
            25136(e) {
              "use strict";
              e.exports = t
            }
          },
          l = {};

        function s(e) {
          var a = l[e];
          if (void 0 !== a) return a.exports;
          var d = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, s), d.loaded = !0, d.exports
        }
        return s.m = o, s.c = l, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          s.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, s.d(t, f), t
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce((a, d) => (s.f[d](e, a), a), [])), s.u = e => "js/" + {
          22: "9c721a96287d7f829eb0d13cbb87c935",
          62: "157426358415747690626e68293bf891",
          131: "f85037e7c269eeabb720075637155016",
          162: "a7ae0891c906aba66b199a90abca56e6",
          277: "adfdb5fcefbc7a64e1797ed7b9fadb5f",
          278: "33aeed0e6af4b8096c7341172d944140",
          299: "5b3489b033603808fcd5a4ef2af43f0c",
          314: "fa59b2bdb256c6011a938ffb6018f475",
          662: "bc4cdf5aa2b448251570e2e14e9e5b5e",
          693: "be5fda8cbac1349f79fbef25269a1e18",
          755: "b12faef225afdb8439aff8492f8f9a26",
          824: "22fed6fe1f221902cd9991a0bf30b86b",
          906: "e8b2167b636841038aae1f7bf40891cd",
          907: "5c7c65291cb840617ce25e96e3d52ccf",
          951: "7210e4712868522e29ef4ef8d1098642",
          1054: "f7e855a9f57a0f2d92c1466465d6e397",
          1208: "7765048f7121fd7ddc20cd2db4220d0c",
          1242: "98fe9796cda5a46db1d2d78a18cb09c9",
          1282: "fccf3f1b52e1cc513af287f3c1a9fc41",
          1576: "5c521e79f723d78d3a2484339653d5eb",
          1627: "1b34b2a9ace071b002f1e6f7c7f52474",
          1822: "b306a85eee74dcf03761ad6da39e867f",
          1868: "c33bec1f6ff2026e7af2a6458fe4c76b",
          2e3: "a85c0492984da96e14f3ef2071fe59d1",
          2062: "783e2f4e6ed388b53fa3fcd0df4e9217",
          2066: "3ae3e6f2bceb5a7343258329eac6c47e",
          2156: "5d1e3aca815cb505df1992e4a1c3c0e8",
          2171: "c1059bb4e9fe62afa0d0df842269f1da",
          2221: "e85a994428dbef0562dff8b92688faf0",
          2243: "3a7ef1e7ab9460c942beb9923d1d7394",
          2301: "5da022460f37339dcdfa58b9a0fc0219",
          2347: "25732cdf7fff87aabc024b8f41e5740f",
          2365: "f0e01e53ca2bb18beeb9a14fac6936bb",
          2398: "827380fb3a3a7bc485b2fec719e76c36",
          2466: "df05f7e230e6fcf9a02f5033bf177d10",
          2497: "f60b959a1f57e3e2611fbbe11416ecab",
          2571: "ac1817f5c484d5f4bda1e41511eeac56",
          2581: "f10ae542716f329608a74c9b82f1b789",
          2631: "ec0605817cb4b636d276041409478958",
          2642: "7b0c3eed6b73ad4055dcb4e1f85efcf2",
          2678: "329bab8d773b08f2afb33f2038c8f308",
          2864: "b9cb83084ea217d9bac22e896aa7a2ec",
          3034: "2001b45beb84850dc01b2bc3b59dd4e5",
          3120: "248383ec847b92065b729e88990b2939",
          3197: "3f8b2e90a7d2bc8ae912d27235c0d193",
          3343: "742bb626703420c76294d3aa71f96d61",
          3370: "e5285f3e2c3157bad15a7b02f96354f0",
          3374: "cd2b3fa44b5c494befe0edb061d42b03",
          3475: "fda38df6353006f9d1053cfb81c92f50",
          3486: "b91a4b398848e104ca917e99f9ebc16d",
          3600: "e671964b3f5d2135814288e1457732d5",
          3694: "b89d02b949c2170e334030a3ad939ce1",
          3697: "e5c3006d015cf7fb0be6cbc809392695",
          3792: "6517b89e55bc4ef17dc29ad3f2f2bdde",
          3884: "abf34d2a27cdc4d3b47ed183bef8b40c",
          3885: "1cf88bbaecf4f1e5658d9e06f59c1855",
          3892: "4bb9fc805667d36e6b0a18b8d1b4a60e",
          3939: "771d0578fe605aececf65327dac1570a",
          3941: "855d7b0c25f9515dbd121a87362d3a8c",
          4011: "49e7b836c94631ed097aa0af8f743535",
          4016: "f1fb3576c5b6b0daf45049de6e013cef",
          4078: "b936e4ae4baedb73c79f7190e23b21f7",
          4156: "26720f956eaa1baebf7a11464ef57e08",
          4255: "be8762ff5bb056d63d323d5176f7d1c1",
          4269: "ee261e603126f715c4a7cbda2c3e3966",
          4439: "1553aa962515a7f908fa1102bc9f88eb",
          4528: "56c35d7d923dbaaa2e53909082fc200a",
          4537: "19702838b8923a8dcaa4d95bc63e0ab0",
          4577: "ec136c9272a33ef5adf32b9ebbc755f4",
          4621: "e3f2bd6d1cec3e00da350da67de06f38",
          4682: "3a13125c25a3f9c1889b5cacf47cea4a",
          4700: "596279e3b59171f533b0ea49f7249f5f",
          4710: "f11da8b20f7ae585d2c2cc06107030dd",
          4731: "11e7acd9840dbe02d5e861c73467ee72",
          4799: "5dad628170b3e049e374ec9bea0751f3",
          4815: "d7b7d9820e2683e9019bdaca6897721e",
          4851: "472e054e35afa1ed405c32b41aed00dd",
          4861: "7ff56c8f32be2ec47e55c49cf21dc4ca",
          4913: "8f4f83063bacb65c6a3615f13d442a66",
          4921: "5b68e7d415479dd88b1ae882214a2b8a",
          5018: "db384600e9dd09d60e3dc3d1e29847c7",
          5056: "5e4ab73cd19c0a662bbadade3007d486",
          5233: "3f62419ebb6aa1e1b801c19a8abd35ea",
          5259: "374a6a533e853d72894e85b394ab749d",
          5511: "a52e338ee0562f26c666d920e6341bf6",
          5519: "cb635f1d70bb3d0f5691344caf6e694f",
          5530: "3b9af398c2badebea809735ce15c4fc4",
          5639: "db8c3599cfb56fba9cd79a188dee4cf8",
          5663: "8d36c385e168457ac2f064a9a2313082",
          5684: "7b0773baf90cd43446baeb526694060f",
          5742: "64a80fdb76696eeb268ac9be1c9e9b79",
          5787: "f9e6433dade1acaf6b066e96fbc49621",
          5819: "ec02f1d3ddeba9b48899f5c4c8c872aa",
          5830: "ae6dac933fb13d760bccdf250684387e",
          5832: "b7fa3a7d243f0f85891ce2db6f1453a3",
          5971: "ab15b626bbdd7af05f2137e1e9d5c2aa",
          5997: "481ff5ddc255b022e3b43e1c9fe2d458",
          6048: "9ddfe47e20fc091291c6dedaf1dc4b3a",
          6150: "6512558e5b7d710f2e64416a736de415",
          6265: "97b9fde111e129dda9c2dcdc6142abff",
          6267: "4cc77e1855fc5263264d52764d148170",
          6280: "ed22de5f30ca80aa3f4e0d901725b1d3",
          6285: "df079d719ae8c7cd2f476f3911629706",
          6320: "fab36c32938ef371b6705231b3d89ea6",
          6361: "f28ff1dbd2ee7fe35a0b6983e174a68f",
          6583: "f6630f37f0951912fd22f44569098321",
          6664: "64725aaecbdde7526b2cda29e716e554",
          6879: "341f5b992f6ea920cb0630ccf0b67364",
          6891: "c2f5242c6601309ba33f051b5d8f3974",
          6932: "569a0f18d2546c654bdbe155491d5ee5",
          6997: "a5481902383fcc9b2d0286f76ad3b938",
          7010: "28903e0ab6d6475a065f713ad3c2c9f5",
          7048: "90049735231c5e5d7e100b9bcdc1a96c",
          7073: "b2d41f6ce4a3a3481d1ea5ce25a92458",
          7436: "e154cce37e99491d2cf081e4608cd90a",
          7452: "195bb1b34b8b0c0d42af4a81a9c03c3d",
          7453: "d34f6aa2778790c6f31e097b9d27636a",
          7480: "0afadaea37857cd60ede72d65bc63796",
          7645: "7ff3a25fcb301e8583cb1587673a00a6",
          7717: "15d45b35e7e94079dee10ec7f4b453cf",
          7892: "bb42d7df636f6589c13a2c0b2ee96820",
          7970: "0a4a351e13cf579af1f5f7a870ff0022",
          8046: "8a3e635b8370068324cf5c121f9022e5",
          8272: "54b9395d596762d84c0757c8e43faef3",
          8277: "1e99abd20a9fbb2dd5ef81aaf3af4f16",
          8349: "1d51a728692743bfb3a593bd46f8eb71",
          8391: "a6688527ead87339c8e74ef42044b62a",
          8646: "332c93064270514543743865f08d3529",
          8657: "d5307cb3d020d89aee4eb17cdd6a9cc4",
          8679: "f19e778539b33d14b52dc5e231454b12",
          8683: "76d1235fef84e51a6c1d57230ab6171f",
          8755: "d6f58ab246dc907831ecaf9a4e1b63e1",
          8880: "19080ef931b276c80dd7f6de8edeb123",
          8970: "39fbbda7387c8a45e716e60cd63e3be9",
          9022: "bdb94436d7c5283953c9adf027208d15",
          9028: "ea880c211170cfe4d0c0117e12eb71a4",
          9126: "1d34d048064a5e7eb5d3ac2bb3051fd8",
          9377: "ddddf445de079b4fb12d7812d763e836",
          9512: "84c8fb315850ec7ce89460890bd9d490",
          9615: "736c8de24a93474af6f9afe249492a45",
          9758: "758a5b1794237650c63a4f0ede6de369",
          9936: "796dc30468c6fb3dab86c62f4178429d",
          9990: "d9d82e024e4e725330b85f2617e6a15d"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          693: "4de1eff3e6bae7f890f83e7a006b0b8c",
          840: "3c5835265692f76421b2950357c7c31c",
          1089: "bfe4e4109fd9c58c236be27a4498cde6",
          1208: "7c575cc0a210038808b12a81bf37629b",
          1576: "6375eab2647ea5ee53b8db8ebc800a29",
          1627: "7c575cc0a210038808b12a81bf37629b",
          2625: "915d373fd494468e9b0648f0fc1b6314",
          3120: "bbb248e51e525579be49d44d8e87fc5e",
          3351: "101537b924f4411033bd9d2d8536a01a",
          4439: "bfe4e4109fd9c58c236be27a4498cde6",
          4852: "dd3dc51d96ce54cf1d6fc8fd4da5a62f",
          5787: "7a9a62d5337371f67f8028c3613bee3d",
          5819: "7c575cc0a210038808b12a81bf37629b",
          5971: "b4f3f49c91d820eb8c15e0b8d4df5a4d",
          6048: "384cddac2173849afd90c4a73e287f5e",
          6150: "384cddac2173849afd90c4a73e287f5e",
          7048: "d0728db0d05ca883d3ae2d89d79c385f",
          7480: "bee7e71bb03044211d6b687fb92a9805",
          8248: "3a4070d4c77506d8955255a1ccc7b2a6",
          8657: "e79a4105235290f9d2d864ea28c87921",
          9758: "bbb248e51e525579be49d44d8e87fc5e"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, t) => {
          if (f[e]) f[e].push(a);
          else {
            var r, b;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), o = 0; o < n.length; o++) {
                var l = n[o];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + d) {
                  r = l;
                  break
                }
              }
            r || (b = !0, (r = document.createElement("script")).charset = "utf-8", s.nc && r.setAttribute("nonce", s.nc), r.setAttribute("data-webpack", c + d), r.src = e), f[e] = [a];
            var i = (a, d) => {
                r.onerror = r.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], r.parentNode && r.parentNode.removeChild(r), t && t.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: r
              }), 12e4);
            r.onerror = i.bind(null, r.onerror), r.onload = i.bind(null, r.onload), b && document.head.appendChild(r)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), b = {
          5819: [11438, 17523, 44019, 83166],
          8248: [31879],
          8657: [64064]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(b, e) && b[e].forEach(e => {
            var d = s.R;
            d || (d = []);
            var t = n[e];
            if (!(d.indexOf(t) >= 0)) {
              if (d.push(t), t.p) return a.push(t.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), s.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, d, f, c, b, n) => {
                  try {
                    var o = e(d, f);
                    if (!o || !o.then) return b(o, c, n);
                    var l = o.then(e => b(e, c), r);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                c = (e, a, r) => f(a.get, t[1], d, 0, b, r),
                b = a => {
                  t.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(s, t[2], 0, 0, (e, a, d) => e ? f(s.I, t[0], 0, e, c, d) : r(), 1)
            }
          })
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, t) => {
            t || (t = []);
            var r = a[d];
            if (r || (r = a[d] = {}), !(t.indexOf(r) >= 0)) {
              if (t.push(r), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var f = s.S[d],
                c = "@rockstargames/modules-core-newswire-article",
                b = (e, a, d, t) => {
                  var r = f[e] = f[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : c > b.from)) && (r[a] = {
                    get: d,
                    from: c,
                    eager: !!t
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var r = s(e);
                    if (!r) return;
                    var f = e => e && e.init && e.init(s.S[d], t);
                    if (r.then) return o.push(r.then(f, a));
                    var c = f(r);
                    if (c && c.then) return o.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                o = [];
              return "default" === d && (b("@foundry/react", "5.24.3", () => Promise.all([s.e(4577), s.e(9512), s.e(8277), s.e(3892), s.e(3374), s.e(2497), s.e(5971), s.e(5787), s.e(3082), s.e(4017), s.e(1270), s.e(1627)]).then(() => () => s(25787))), b("@rsgweb/locale-tools", "0.0.0", () => Promise.all([s.e(4577), s.e(9512), s.e(2497), s.e(22), s.e(3082), s.e(8646)]).then(() => () => s(76602))), b("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([s.e(4577), s.e(9512), s.e(3892), s.e(3600), s.e(3082), s.e(4017), s.e(3331), s.e(1270), s.e(2625), s.e(3351), s.e(1208)]).then(() => () => s(42066))), b("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([s.e(4577), s.e(9512), s.e(3892), s.e(3600), s.e(4815), s.e(1576), s.e(3082), s.e(4017), s.e(3331), s.e(2909), s.e(6416), s.e(1270), s.e(2199), s.e(7301), s.e(2285), s.e(4255), s.e(7480), s.e(4439)]).then(() => () => s(28699))), b("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([s.e(3600), s.e(3374), s.e(3082), s.e(4017), s.e(3331), s.e(1270), s.e(2625), s.e(7301), s.e(8248), s.e(840), s.e(3120)]).then(() => () => s(9758))), b("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([s.e(3600), s.e(4815), s.e(3082), s.e(2909), s.e(2199), s.e(7301), s.e(2285), s.e(4852), s.e(1282)]).then(() => () => s(83792))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([s.e(8277), s.e(5684), s.e(6583), s.e(3082), s.e(3331), s.e(2909), s.e(9646), s.e(6416), s.e(5997), s.e(5511)]).then(() => () => s(27892))), b("@rsgweb/tina", "0.0.0", () => Promise.all([s.e(4577), s.e(4156), s.e(8349), s.e(3082), s.e(4017), s.e(3331), s.e(2909), s.e(9646), s.e(2199), s.e(8046), s.e(6048)]).then(() => () => s(60620))), b("@rsgweb/utils", "0.0.0-development", () => Promise.all([s.e(4577), s.e(9512), s.e(8277), s.e(5684), s.e(5519), s.e(3082), s.e(2909), s.e(9646), s.e(6416), s.e(5997), s.e(2301)]).then(() => () => s(42301))), b("clsx", "2.1.1", () => s.e(4921).then(() => () => s(4921))), b("dompurify", "2.5.9", () => s.e(62).then(() => () => s(50062))), b("lodash", "4.18.1", () => s.e(2631).then(() => () => s(2631))), b("react-dom", "18.3.1", () => Promise.all([s.e(162), s.e(3082)]).then(() => () => s(30162))), b("react-intersection-observer", "9.16.0", () => Promise.all([s.e(3082), s.e(6320)]).then(() => () => s(26320))), b("react-jsx-parser", "2.4.1", () => Promise.all([s.e(6932), s.e(3082)]).then(() => () => s(76932))), b("react-router-dom", "6.30.3", () => Promise.all([s.e(4269), s.e(3082), s.e(4017)]).then(() => () => s(74269))), b("react", "18.3.1", () => s.e(2581).then(() => () => s(22581))), b("text-balancer", "1.0.5", () => s.e(4016).then(() => () => s(34016))), n(25136), n(29441)), o.length ? e[d] = Promise.all(o).then(() => e[d] = 1) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var t = d.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = d[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = d[1] ? a(d[1]) : [];
              return d[2] && (t.length++, t.push.apply(t, a(d[2]))), d[3] && (t.push([]), t.push.apply(t, a(d[3]))), t
            },
            a = e => {
              var d = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                t += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var r = 1, f = 1; f < e.length; f++) r--, t += "u" == (typeof(b = e[f]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, b);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var b = e[f];
                c.push(0 === b ? "not(" + n() + ")" : 1 === b ? "(" + n() + " || " + n() + ")" : 2 === b ? c.pop() + " " + c.pop() : a(b))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, t) => {
              if (0 in a) {
                t = e(t);
                var r = a[0],
                  f = r < 0;
                f && (r = -r - 1);
                for (var c = 0, b = 1, n = !0;; b++, c++) {
                  var o, l, s = b < a.length ? (typeof a[b])[0] : "";
                  if (c >= t.length || "o" == (l = (typeof(o = t[c]))[0])) return !n || ("u" == s ? b > r && !f : "" == s != f);
                  if ("u" == l) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == l)
                      if (b <= r) {
                        if (o != a[b]) return !1
                      } else {
                        if (f ? o > a[b] : o < a[b]) return !1;
                        o != a[b] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || b <= r) return !1;
                    n = !1, b--
                  } else {
                    if (b <= r || l < s != f) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, b--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, t) : !u())
              }
              return !!u()
            },
            t = (a, d, t) => {
              var r = t ? (e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}))(a[d]) : a[d];
              return Object.keys(r).reduce((a, d) => !a || !r[a].loaded && ((a, d) => {
                a = e(a), d = e(d);
                for (var t = 0;;) {
                  if (t >= a.length) return t < d.length && "u" != (typeof d[t])[0];
                  var r = a[t],
                    f = (typeof r)[0];
                  if (t >= d.length) return "u" == f;
                  var c = d[t],
                    b = (typeof c)[0];
                  if (f != b) return "o" == f && "n" == b || "s" == b || "u" == f;
                  if ("o" != f && "u" != f && r != c) return r < c;
                  t++
                }
              })(a, d) ? d : a, 0)
            },
            r = (e, a, d) => d ? d() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, d, t, r, f) {
              var c = s.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, s.S[a], d, !1, r, f)) : e(a, s.S[a], d, t, r, f)
            })((e, f, c, b, n, o) => {
              if (!((e, a) => e && s.o(e, a))(f, c)) return r(e, c, o);
              var l, i, u = t(f, c, b);
              return d(n, u) || (i = ((e, d, t, r) => "Unsatisfied version " + t + " from " + (t && e[d][t].from) + " of shared singleton module " + d + " (required " + a(r) + ")")(f, c, u, n), "undefined" != typeof console && console.warn && console.warn(i)), (l = f[c][u]).loaded = 1, l.get()
            }),
            c = {},
            b = {
              93082: () => f("default", "react", !1, [0], () => s.e(2581).then(() => () => s(22581))),
              84017: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => s.e(162).then(() => () => s(30162))),
              13331: () => f("default", "@rsgweb/utils", !1, [0], () => Promise.all([s.e(4577), s.e(9512), s.e(8277), s.e(5684), s.e(5519), s.e(2909), s.e(9646), s.e(6416), s.e(5997), s.e(4682)]).then(() => () => s(42301))),
              42909: () => f("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([s.e(4577), s.e(9512), s.e(2497), s.e(22), s.e(6265)]).then(() => () => s(76602))),
              69646: () => f("default", "lodash", !1, [1, 4, 18, 1], () => s.e(2631).then(() => () => s(2631))),
              36416: () => f("default", "react-router-dom", !1, [0], () => Promise.all([s.e(4269), s.e(4017)]).then(() => () => s(74269))),
              81270: () => f("default", "clsx", !1, [1, 2, 1, 1], () => s.e(4921).then(() => () => s(4921))),
              82199: () => f("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([s.e(8277), s.e(5684), s.e(6583), s.e(3331), s.e(9646), s.e(6416), s.e(5997), s.e(7892)]).then(() => () => s(27892))),
              17301: () => f("default", "@rsgweb/tina", !1, [0], () => Promise.all([s.e(4577), s.e(4156), s.e(8349), s.e(4017), s.e(3331), s.e(2909), s.e(9646), s.e(2199), s.e(8046), s.e(6150)]).then(() => () => s(60620))),
              91681: () => f("default", "dompurify", !1, [1, 2, 5, 9], () => s.e(62).then(() => () => s(50062))),
              42285: () => f("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => s.e(3939).then(() => () => s(26320))),
              30013: () => f("default", "@foundry/react", !1, [0], () => Promise.all([s.e(8277), s.e(3374), s.e(2497), s.e(5971), s.e(5787)]).then(() => () => s(25787))),
              10475: () => f("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([s.e(4852), s.e(3792)]).then(() => () => s(83792))),
              35643: () => f("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([s.e(3351), s.e(2066)]).then(() => () => s(42066))),
              59139: () => f("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([s.e(4255), s.e(1089)]).then(() => () => s(28699))),
              72527: () => f("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => s.e(9758).then(() => () => s(9758))),
              87486: () => f("default", "text-balancer", !1, [1, 1, 0, 5], () => s.e(4016).then(() => () => s(34016))),
              92910: () => f("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => s.e(6932).then(() => () => s(76932)))
            },
            n = {
              693: [10475, 35643, 59139, 72527, 87486, 92910],
              1270: [81270],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              6416: [36416],
              7301: [17301],
              7480: [30013],
              8248: [91681],
              9646: [69646]
            },
            o = {};
          s.f.consumes = (e, a) => {
            s.o(n, e) && n[e].forEach(e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!o[e]) {
                var d = a => {
                  c[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                o[e] = !0;
                var t = a => {
                  delete c[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var r = b[e]();
                  r.then ? a.push(c[e] = r.then(d).catch(t)) : d(r)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            s.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                693: 1,
                840: 1,
                1089: 1,
                1208: 1,
                1576: 1,
                1627: 1,
                2625: 1,
                3120: 1,
                3351: 1,
                4439: 1,
                4852: 1,
                5787: 1,
                5819: 1,
                5971: 1,
                6048: 1,
                6150: 1,
                7048: 1,
                7480: 1,
                8248: 1,
                8657: 1,
                9758: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var t = s.miniCssF(e),
                  r = s.p + t;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), t = 0; t < d.length; t++) {
                      var r = (c = d[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((r = (c = f[t]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(t, r)) return a();
                ((e, a, d, t, r) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", s.nc && (f.nonce = s.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) t();
                    else {
                      var c = d && d.type,
                        b = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + b + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = b, f.parentNode && f.parentNode.removeChild(f), r(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, r, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          s.f.j = (a, d) => {
            var t = s.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) d.push(t[2]);
              else if (/^(2(199|285|625|909)|3(082|331|351)|1089|1270|4017|4852|6416|7301|8248|840|9646)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((d, r) => t = e[a] = [d, r]);
              d.push(t[2] = r);
              var f = s.p + s.u(a),
                c = new Error;
              s.l(f, d => {
                if (s.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var r = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + f + ")", c.name = "ChunkLoadError", c.type = r, c.request = f, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var t, r, [f, c, b] = d,
                n = 0;
              if (f.some(a => 0 !== e[a])) {
                for (t in c) s.o(c, t) && (s.m[t] = c[t]);
                b && b(s)
              }
              for (a && a(d); n < f.length; n++) r = f[n], s.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(35649), s(55974)
      })())
    }
  }
});