try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b26532c-a504-43df-bdbd-a4dce3632a80", e._sentryDebugIdIdentifier = "sentry-dbid-7b26532c-a504-43df-bdbd-a4dce3632a80")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var d = {},
    r = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, c, f, n, o, b = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            55974: (e, a, d) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([d.e(602), d.e(4237), d.e(4488), d.e(5117), d.e(5176), d.e(7545), d.e(5699), d.e(840), d.e(1302), d.e(2389), d.e(2229), d.e(6188), d.e(4853), d.e(5966), d.e(1788), d.e(9623), d.e(4572), d.e(2148), d.e(6130), d.e(6069), d.e(1913), d.e(2918), d.e(6536), d.e(2440), d.e(2358), d.e(8941), d.e(76), d.e(7577)]).then((() => () => d(28674))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(5117), d.e(8661), d.e(2229), d.e(6188), d.e(4853), d.e(5966), d.e(1788), d.e(4572), d.e(6130), d.e(6069), d.e(6536), d.e(2358), d.e(3410)]).then((() => () => d(4984))),
                  "./types": () => Promise.all([d.e(602), d.e(4237), d.e(4488), d.e(5117), d.e(5176), d.e(7545), d.e(5699), d.e(840), d.e(1302), d.e(2389), d.e(2229), d.e(6188), d.e(4853), d.e(5966), d.e(1788), d.e(9623), d.e(4572), d.e(2148), d.e(6130), d.e(6069), d.e(1913), d.e(2918), d.e(6536), d.e(2440), d.e(2358), d.e(8941), d.e(76), d.e(7577)]).then((() => () => d(76808)))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => c
              })
            },
            77027: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, c = r.length; t !== a && c >= 0;) "/" === r[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            93032: (e, a, d) => {
              d(28419)
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var d = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, i), d.loaded = !0, d.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          i.r(r);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & d && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(r, c), r
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, d) => (i.f[d](e, a), a)), [])), i.u = e => "js/" + {
          68: "29095c76080e63ab3649f52d7a9441af",
          131: "369a39a828ee2a0afd675b716f6f0b31",
          173: "28c89194313e71e94ac92e502051745e",
          278: "9ad3c2c22b9f0149c209dae02b5d525a",
          299: "f5c4ce39962d5bda51a97ce43bef57a8",
          314: "e530d8724ae66393bd792008eb201534",
          439: "ccb9fe574c7399782d5481d9db652873",
          602: "f8b0b04d46ec697d455cf749e7f901d1",
          662: "d94e54b81fcb1851d231ea57fd72a6e7",
          824: "02f7dacc15281a338edb9559190153e6",
          840: "c005f4842ef649e9fdc71e3917c81894",
          884: "604db30819c2e8f82384be3b71ed8b68",
          907: "8b3a609b23a45ca4a7043d1650045546",
          929: "e8356722f4bbe73b81e4bf21b7f0ba38",
          1054: "702989d93adffb67745d5e214e93fd66",
          1057: "eff6f9cf2f4393b38a19956878bef539",
          1098: "3b7e553f2b0ede51080d76919d881342",
          1242: "149ba6802f6039b208eb4bff5ff4f4e8",
          1302: "86fd35b4f8509cc120d81ad28f235984",
          1758: "313c24b4738f6010caa4201d22a0ecc9",
          1822: "a263032e54a7915f99869fbc65261524",
          1858: "06022c4d682ae3b674c790a40de8aabb",
          1868: "844c65f8daed6b9b1fb5b1e20eae479d",
          2148: "2bb3131092b67277fbb09f76a2e8f3e2",
          2156: "cae524d3a1cb8c1b4a8c440849414369",
          2169: "f2faac914c20f4d78cb310934440d94f",
          2171: "ec1142d9c7919f2a2add566d693934fe",
          2221: "55f890065a92f282ec1161f480f1e590",
          2234: "86a41cff883d17b5ac7060488b17539a",
          2243: "238c992cc3e761897803e0fba3deba76",
          2306: "6c020186b800aa68fca936144dbf4e39",
          2347: "beda500e34cf5d4c162277cb77fcc58b",
          2358: "a7e0e52fecdf3737ff733b021c0c3b75",
          2365: "1ba3a0982099494750f5b07ee2733f09",
          2389: "ee63504482db404adaa0022dc01ad245",
          2398: "077663f837fa96b8c1cf219705e59952",
          2466: "c12bdb821b3fdd31dfbc83ebe5a7349d",
          2642: "6ca58c77737702faa1f327f327ca3adc",
          2678: "dc93b377ddfd18e18c0bac685282716c",
          2864: "866ea2714bdfe60cccd19eaafbdb53fc",
          3034: "2f53369bd574f445064d8605b674d0e1",
          3197: "271e87bb6b3c530601d0f7c9397f2123",
          3343: "beb873e3ca79bba481b4064a930b9302",
          3370: "6c9d22ec24379cdabe80a17529e03772",
          3387: "09c3c56fcee88bb8139f72d81d721477",
          3410: "06e543d681ff31fe65ed85ed4f5931c1",
          3421: "5d74fdb00591d2bdb4fbda5e2aef779d",
          3438: "209ebe014d819c2d5d0d3d2c98ff82b3",
          3475: "476f7885ad5bc93c393fa984eaa9ec9c",
          3486: "ebf7fe56eb2b73ad7da0003da11bdf44",
          3697: "a7c72d4df54fe60856bc40b02a76fa94",
          3885: "53843cccd96b0d0d03ef5b68aeaa647e",
          3896: "20877d451f1f0453ae734864a70ac6b7",
          3941: "060ba808a10c19684ef032affcadd719",
          4011: "0b40a8ada77509369a5a3ff82999cadd",
          4237: "ca2b64f367d36449b21dc0da5a051e70",
          4488: "1d6f11b56726ef77ce3a9d3e518f8320",
          4528: "c56996e645f9493e24be3e4ab4d42a7b",
          4550: "856cd8ca9a33987c2263cd00e3c6bc96",
          4578: "671e06f65138e05ea707150b4f9890dd",
          4621: "d33102f6d889e0ffff87fc00af9e71a3",
          4700: "44c646085c38b2f043ae43f6f5bef922",
          4710: "67534ae1715bcd9a81112ffdcf4598eb",
          4731: "7fbe681e3b8dcea7e88999268a537444",
          4799: "c1fba6725f07b761a415ed5a8ef4c0f5",
          4851: "eee6f82262a3eacc64cf3d13b33bb15b",
          4861: "1a9efbcd10dbe85d6e0707d4f651e471",
          4913: "2a607a2b5cea1ccfa6b5f8e43d48f8e2",
          5018: "742595b228edc2951f656172f37bbc1f",
          5076: "23c1c1a1976a21c8e0c1cd8eb062bfdc",
          5117: "05563960e987778e6478e29365e05586",
          5176: "62e7e205a4e6bc263f02c74257ca48f4",
          5233: "63d82468667ce4532930d36e4c25aa36",
          5259: "9133dca427fbf5abb22678b9ac66084b",
          5265: "a0a3491b05eebdd9ab677e6a35dffc72",
          5389: "230b2f0347938aa3fc4f90a9ea5cd577",
          5400: "0d4e3c8ad92db7ebd89217566022be86",
          5415: "f409e174e52589dbd2cebe165b044bdc",
          5454: "348b22c6e088c242240f86af8807051c",
          5530: "7f0e02bce8f63b2f4fe342d02fdae967",
          5639: "20bba3a178e1f91be98ce366db4861d3",
          5663: "ab970250423de5f3edf9cc56c6b03b89",
          5699: "6562f1ac1b1ce2b428a8509d3b634aaf",
          5742: "f15dc8c1383a9f98ca82613b03a5a69a",
          5802: "edfdb0dabb7fe1485a6b110c66f13de1",
          5830: "8da9c2c53e04f20823165478eb5f8161",
          5832: "a41f18eccf79bf6c3c5b6d908d459999",
          5859: "403ef75ab041195a9764e9b35eb11580",
          6130: "5f37b69c09bbd570c81ac2387d3a5c4d",
          6267: "3627dd1f4cc015698832af63712131d8",
          6280: "00e1a8606b25994bb555a90cf4682750",
          6285: "1b4b16ee514017d2e8ece16366a07883",
          6321: "28143019e84d76feada41f56dddcd1e9",
          6327: "3d5c0480015509e49c90337f81058a85",
          6361: "6bb8443f98023374f2b5f036b55949e3",
          6471: "bdcd5b888bce4e5dc127b7a4ee8560b5",
          6664: "0529bb5da54ef9c339c052d33608a649",
          6716: "c732c7437a0c9a3529097ffa63535943",
          6879: "571ea264454593c5916916b546b8ffdd",
          6891: "332bba1190a86339a287689e9e12ff51",
          6997: "79bafe82f8dcce989fef2b89b92e61be",
          7010: "beeff3a23a9cda95010e1e76958945eb",
          7073: "7cd754f442c120d7743e4d2ad631b7f7",
          7407: "24b31616ce9f7c5165126f9cff67967d",
          7436: "14e15fa6df94377c531d796f9a5a2f39",
          7452: "7c3d3615ea5d5a800627f4d1ef5cf42c",
          7453: "604d6d026018d962906741799074d19d",
          7545: "0d86eba06dcbb04c0b8ee98d8d062e7f",
          7577: "2057c3543cb7fb265e7fcd100b649311",
          7785: "6627756d2465d5c3a0e63253f9401d52",
          7970: "569b210cc99d888c4fba7d80fddd0382",
          8068: "715175b2410657b8ab96e33f242bd126",
          8240: "f068a1d1d8b6a77b5faec081af8864d6",
          8272: "fa8fce0656ef667526fc3105c041a04d",
          8325: "be19fe0e2a04e507a635e5b8dcadf178",
          8391: "bd4a8bc0cb48b62342750a560c9b8a69",
          8431: "c1964fa36648f67b437ca4beb6bf7c07",
          8503: "f9f1d4e2f7af8aa022d851885a2aa971",
          8659: "4ffa7ecd5cb0631a1510179e07afcb14",
          8661: "b09ddfe42f8ce537eaf799fd4960c610",
          8702: "712a0626f55bfb98ac0172d1acf6b440",
          8708: "55992e0dc584ea42f2b6b90f981b4d29",
          8755: "b3d76602aad68c84ce9080df709d79e8",
          8845: "69fb1b505571e8cca8cfd9ad8b74479d",
          8880: "a3da34efca90eaf0506c0c146ce70e23",
          8938: "5032ac9ab64c5c0880c0e9bd9332fade",
          8941: "0367269c922b9514df197740f291769d",
          8970: "64540f84e963d29eea943a3428fbbbd3",
          9022: "5aa66a1b09bc90580b83648d2647ab0b",
          9028: "6b7172b4ac2c52400ddcca392642ca6f",
          9126: "fe2150712f5f7ad2f16f315ddc56585f",
          9377: "8871e6ed2f05e797db7c2f65b64a8d37",
          9407: "373eb203f0d961d44772837218f89de8",
          9477: "283faba5d6b33cc862d7368979d56c1c",
          9587: "1b3e272f783cb9e0cd9ba6d6dc45d84b",
          9615: "8ab2f5dd8abe6d861882a7b3cf03c8f4",
          9760: "833da862de833fb3cab20359c94b21e2",
          9936: "e71179b755097cbb03ba0e7f1e314a50",
          9990: "834a32009acb777ab4c079ba012d1d66"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          202: "8148c596ad38743495331b3acc2ee749",
          884: "214e2f94528af5f726d2150d0a4f2215",
          929: "349ef210e52e0db243b9e70eaf3f81d2",
          1057: "384cddac2173849afd90c4a73e287f5e",
          2358: "e79a4105235290f9d2d864ea28c87921",
          2389: "b9114e7f165f56a31e7f80563256d838",
          3438: "384cddac2173849afd90c4a73e287f5e",
          6069: "6a345130a21d6aba1c7f8052c5eb72c4",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          6716: "f2c993d4d6000a09fdf9adff375f9165",
          7577: "b4a003cdaff5f504c19b6f190d651b76",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "2185f6eb10d4c7769c05f1a343298050",
          8941: "9ca8a354d1d1a3e9958932e71c00fec9"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, d, r) => {
          if (c[e]) c[e].push(a);
          else {
            var t, n;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + d) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", f + d), t.src = e), c[e] = [a];
            var l = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach((e => e(d))), a) return a(d)
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
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach((e => {
            var d = i.R;
            d || (d = []);
            var r = o[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, n, o) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return n(b, f, o);
                    var s = b.then((e => n(e, f)), t);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                f = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, d) => e ? c(i.I, r[0], 0, e, f, d) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              i.o(i.S, d) || (i.S[d] = {});
              var c = i.S[d],
                f = "@rockstargames/modules-core-newswire-article",
                n = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
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
                    var c = e => e && e.init && e.init(i.S[d], r);
                    if (t.then) return b.push(t.then(c, a));
                    var f = c(t);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === d && (n("@foundry/react", "5.4.1", (() => Promise.all([i.e(602), i.e(5699), i.e(6716), i.e(1302), i.e(2229), i.e(4853), i.e(4572), i.e(430), i.e(9407)]).then((() => () => i(36716))))), n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), n("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(4488), i.e(7545), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then((() => () => i(89477))))), n("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(4488), i.e(7545), i.e(5699), i.e(840), i.e(2229), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(2440), i.e(929), i.e(8941), i.e(202)]).then((() => () => i(64733))))), n("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then((() => () => i(90884))))), n("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(2148), i.e(4550)]).then((() => () => i(32169))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(5117), i.e(2229), i.e(6188), i.e(4853), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then((() => () => i(99747))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(2148), i.e(8702)]).then((() => () => i(58702))))), n("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), n("dompurify", "2.5.8", (() => i.e(7785).then((() => () => i(27785))))), n("lodash", "4.17.21", (() => i.e(5076).then((() => () => i(15076))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), n("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(6327)]).then((() => () => i(76327))))), n("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(3387), i.e(2229)]).then((() => () => i(43387))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), n("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), n("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), n("text-balancer", "1.0.5", (() => i.e(5400).then((() => () => i(75400))))), o(25136), o(29441)), b.length ? e[d] = Promise.all(b).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = e => {
              var d = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                r += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : a(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (s = (typeof(b = r[f]))[0])) return !o || ("u" == i ? n > t && !c : "" == i != c);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || s < i != c) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, t, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(f).reduce(((a, r) => !d(t, r) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var r = 0;;) {
                  if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                  var t = a[r],
                    c = (typeof t)[0];
                  if (r >= d.length) return "u" == c;
                  var f = d[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && t != f) return t < f;
                  r++
                }
              })(a, r) ? a : r), 0)) && f[r]
            },
            t = e => {
              throw new Error(e)
            },
            c = (e => function(a, d, r, t, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], d, !1, t, c)) : e(a, i.S[a], d, r, t, c)
            })(((e, d, c, f, n, o) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return ((e, a, d) => d ? d() : ((e, a) => t("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var b, s = r(d, c, n, f);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void t(((e, d, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + a(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(d, e, c, n, f))
            })),
            f = {},
            n = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(5076).then((() => () => i(15076))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(2148), i.e(6321)]).then((() => () => i(58702))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(2148), i.e(2169)]).then((() => () => i(32169))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(7785).then((() => () => i(27785))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5117), i.e(6188), i.e(4853), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then((() => () => i(99747))))),
              61128: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], (() => i.e(8708).then((() => () => i(76327))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(8503).then((() => () => i(90884))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => i.e(929).then((() => () => i(64733))))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(8579), i.e(1858)]).then((() => () => i(89477))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(3387).then((() => () => i(43387))))),
              69190: () => c("default", "@foundry/react", !1, [1, 5, 4, 1], (() => Promise.all([i.e(6716), i.e(430)]).then((() => () => i(36716))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(5400).then((() => () => i(75400))))),
              50430: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421)))))
            },
            o = {
              430: [50430],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              7577: [15310, 20206, 42602, 57770, 69190, 97384],
              8941: [61128],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                76: 1,
                202: 1,
                884: 1,
                929: 1,
                1057: 1,
                2358: 1,
                2389: 1,
                3438: 1,
                6069: 1,
                6536: 1,
                6716: 1,
                7577: 1,
                8503: 1,
                8579: 1,
                8941: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var r = i.miniCssF(e),
                  t = i.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (f = d[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((t = (f = c[r]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        n = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), t(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (a, d) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(2(02|229|440|918)|4(30|572|853)|6(069|188|536)|1788|1913|5966|76|8579|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (d => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, n] = d,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(d); o < c.length; o++) t = c[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
}));