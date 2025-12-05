try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "13529cb3-0c49-461c-93d3-9ee0238f6316", e._sentryDebugIdIdentifier = "sentry-dbid-13529cb3-0c49-461c-93d3-9ee0238f6316")
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
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, c, d, f, o, n, b = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
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
              var t = {
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(2445), r.e(1302), r.e(7544), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(1082), r.e(2440), r.e(2358), r.e(5190), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(2445), r.e(1302), r.e(7544), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(1082), r.e(2440), r.e(2358), r.e(5190), r.e(76), r.e(1125)]).then(() => () => r(76808))
                },
                c = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      c = r.S[t];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => c,
                init: () => d
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, c = 0, d = t.length; c !== a && d >= 0;) "/" === t[--d] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var f = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + f
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
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var d = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = c(f)) Object.getOwnPropertyNames(f).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(t, d), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          68: "fdc764d19e6765acf0f460b291428c08",
          131: "14e6180248c40a1ebd57883db5b48748",
          173: "4581096b7935b90ce901ca1e232d2a4b",
          278: "65af1abb8b70d812296bd9cfefe35eab",
          299: "76500bd9e530942fe6a3920b707cfba0",
          314: "016ce433e8b2a070610376649729e545",
          439: "8d91c26aa2fd453ef8afe222aaa0cc43",
          602: "19c2cb76352c155e4d08edcdf2802b4d",
          662: "67266b2b002bf65cf428da4cd989723a",
          824: "e6ed6b37b8fe68595e41f5d60d01df26",
          884: "c5e26f72e8a897a7d5f902223b3314e5",
          907: "cc1c50e9f4bedb4069e639cf35d21c41",
          1054: "a78854a4ccbc35c6e42c4b955d3cb2d6",
          1057: "4e70d30c8d47e5e41c7dfe3dc3d222f8",
          1098: "41883be6095812bfb2b30165b571cda8",
          1125: "fef27c8945d6bf708d18d463f4a5757e",
          1242: "24534761d8ac9fdaf8e27c82d03ee477",
          1302: "fd21f3ed3b853709e113a68aef49d3ee",
          1758: "a4183a297f137c428a0da2a56fbfd685",
          1822: "e821420e2e87711f2353bdbfe5dabc53",
          1858: "beac9aa49bb910e016b514a0fe1cc8c1",
          1868: "242546eaf8c80a3bb8bd5cb2dbb3412c",
          2156: "1972487a887e94f8f02561eecb9b748d",
          2169: "27e2f05578d5026cca4444be7531ce50",
          2171: "9797b2f6a9dc4606b46833979f5ab839",
          2221: "adee77064a7eb3f1fdc2eb077808dbb7",
          2234: "98b4bdad941511bb71eb5ee5616267c3",
          2243: "b6e057c455738b9e226feecd2ea488ee",
          2306: "b680b5a08835f22056bf2bf178d7dddf",
          2347: "1b2d63dd1c37f4fbda3e88c943ba6a6f",
          2358: "5e0d4a866e0060eb25d93c2bab32c9be",
          2365: "8d00445ecf26bad644b5e0d15f978a47",
          2398: "9132823b2f8c57948e34b4ced596c6a3",
          2424: "a372ff5753ea6b7f82fd19ee6ef9ce94",
          2445: "4faaa61f241b5565bfe8fe3f299e23a2",
          2466: "53b631e71d18f02dd3011fff2405c273",
          2583: "c34840ef0e14a05e6e98c7cc86119361",
          2642: "2c25255716ac9a891ee47f6d17409109",
          2678: "ae75b6fe26a1b11716b2d12332b89614",
          2864: "a5ccf4edc792cbfc2c2376c693603f6b",
          3034: "d1599b9d3ebdaf641fb4d58b85aa136b",
          3197: "fe8722d6e9b2e9f8fa231f26973d5a9f",
          3343: "039e7490209426d751fb2148301d175f",
          3370: "8dc1b03f176742e7919745884b7ae61a",
          3387: "fe8c1667f473f82eb15cd1ae1700ee2a",
          3410: "d7b407824ddb06eec360dc3cc11ed338",
          3438: "989cd8134b55241120719bf06dcfcd4d",
          3475: "87f65b4f8dc138e7d3234c1843cf4879",
          3486: "b3aaeab37c9c6274905e9846af285243",
          3697: "090e2e10fb8826bf190bdcf7ed15a81c",
          3885: "b83dc0ef0a176e92bfd3d57c232824f1",
          3896: "45df7c9ba6154d9ed2e35b0281415fc9",
          3941: "599ab69dd3c92637eda0912502eaaa1c",
          4011: "7e9dc5ddda84d9db0182571c9253180c",
          4237: "88390045a8f00464ed6c7331c4734e58",
          4488: "00efcfd82a664109d04227095f62e060",
          4528: "73cade5b04b8c9330ed95c94cc315687",
          4550: "e0007de91c0df0bcfb051c92682e6ca3",
          4578: "e0fa0eca12be75d19d4c2a9e4b113ce5",
          4621: "0efbdf5e57fdbdfb4fd788071b655d65",
          4700: "b1628da60adb99d4f2dbb9c692c84667",
          4710: "67b8be458f726fc229ec43eec0456d07",
          4731: "398fa57426f30e694dad5df1b9f64623",
          4799: "b0342364fa3ae30ccdca09adcd2c0e26",
          4851: "6600c38c4edf544641c35b94dd9b759d",
          4861: "f18f1d47c682b9836d3ea158b02cc4f0",
          4913: "331e37c44a5e088b2205da848916bb3a",
          4964: "bc6d9ba85ef0e0b468ee71c4fb7440fa",
          5018: "57a494f0dbb2748e5ef65778121f3baf",
          5021: "44c09c42ea6a167ff5620940dae3da85",
          5076: "b514b7d1f343b6ca619ca8339d4707b6",
          5117: "99d1fa61a705a89425230f83b3078707",
          5190: "052203459b80d0b446788b7d2d548f11",
          5233: "df65df21feb05160ad53451202fac5da",
          5259: "37e50161634cc8d7842a45e6c85bff4b",
          5265: "6d01eb52421286a98d4bf775a4135297",
          5389: "180ae56603a7efd8b26622373dedbebd",
          5400: "db779e78580251cec25dc58ebd800303",
          5415: "ec5d0983fe58bc11e9a0006a0ec457a3",
          5454: "64a8be905f7e18f7f0f2218d758d87e8",
          5530: "0983d21639302fd0ade7df211d0533a9",
          5639: "54a95d324fb0ed7fa998af73867a524e",
          5663: "35f41ade11a62aa79a6f9ae70527d82c",
          5742: "50679289da0d06ade0629de4bcebbeac",
          5827: "db9c11a38f400aaaf9ad88ee573ad296",
          5830: "dc4fd6e723cbbe4e9e47b9f2bfeb8985",
          5832: "b93532bbf2fae5de79051b60245a4368",
          5859: "ccef5883497dc761286791080f63ccb5",
          6078: "92a77e40e52b86149f4544fdf151d138",
          6088: "d2298ac5b452597ddeabae1c89a4a02f",
          6130: "6ffe0979beecb3c014fcbe7e772f9ee3",
          6267: "9f73da01f1aa73b1caa9cfd987e36924",
          6280: "3cd96f0424859a9d8e7f442703d079bc",
          6285: "9fc333d79b26f8b17a8317d78beff680",
          6321: "dfbdbf7d371e73e7848c64db93fae056",
          6327: "49a315640e7c249277261b41603dff46",
          6361: "012a45886a5c455e3ec031208f0ef836",
          6471: "64afd36b1ce6cd48807867bf23de31be",
          6664: "1b3df61f7ab609a9d313f4bab05d7ce7",
          6879: "8e639d244c19b6b3211fa31d05cc842e",
          6891: "7b8ce3b206436af42ae32062c485c692",
          6997: "fc9ac8790032a1113b93f80bc4c20605",
          7010: "d8910676f6b89826a1558eaac04904d3",
          7073: "cdb51d6ed24e1a11ecf6d8a23542218d",
          7407: "79785d063eb422520c44fc9d92fc828d",
          7436: "03823d520b88359e047df10fec3bbd26",
          7452: "def2bc506cbc2c6dff7bc3c68a285e5f",
          7453: "ed756f5560b8128b93c6279ef50f4085",
          7544: "bf405f66cee7c750174e39da2d1dced6",
          7785: "d0591944aca2a7cf796012f2070d02bf",
          7970: "2e199f0e72c31de145db266f42cc4c06",
          8068: "7dcfe30ccf9dfefe070770cd4add23b9",
          8240: "4b13521344402422f322dfd953740a52",
          8272: "0c0d723b1706f4582a834505647457f1",
          8325: "7e350d43191f9785d43ba4dbf522781c",
          8391: "f5e18de9ba874250027667e5444b046f",
          8431: "2a4d64e424eb7e88232f4f588b4385f6",
          8503: "ab6e06d6067118c93b364e5aa734aa2c",
          8505: "7458444c9c44ccf72666f7994ddfbccb",
          8659: "56eacf30a2060bb55f882b5c1fe27dba",
          8661: "7985c0cb9d51ee403d2f50570484fb3c",
          8702: "e820aca3e3dd81f3fe267201873847ea",
          8708: "c5624d99cd0b38919a2623d5204e6de9",
          8755: "07c9edd324d5131a28b217e9324e585b",
          8845: "ca473ca0835d101956bd7f8a13468ccd",
          8880: "f3b3bcc79fa1d1d6f1803aa559c7d3b7",
          8938: "ad2bbbb48d7d2017ee1cdff02bd48564",
          8970: "9c31a4460968b570a9a69f437c9f2221",
          9022: "61360b06c587517a1238e35bcdd24a2b",
          9028: "e2e7063b92a1d16a3a82cd493dd208b2",
          9116: "5e10fdfcf91e4a69a507d4b4af4b17a4",
          9126: "595bfe3ec9e48eec2b975c3e70e705f0",
          9377: "b9478626650204208d57a52db9884290",
          9407: "16884574335bd46cafd69c92c68f3098",
          9477: "cbb7b9bbfd6821391c260110a30846ab",
          9587: "29a323a74dc506e5202db2a4fe0219b3",
          9615: "df433bbc834041f476106d745701850b",
          9760: "f05e1df1189cd993614a8713a36f5e14",
          9936: "2fb9e0191dabef3126ce3a429ae6634e",
          9990: "e95c9035013a91d38926c98cb1fc0d60"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "2c1fa675151d37269cfc7e15899887f6",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          5190: "bbfc715b58e04a52bcbba01c5d9281fc",
          6069: "d420c60ba06e5f6e5c66b05e81051c48",
          6078: "a5661b562d382c84db3960fe0546212f",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          8427: "64d7f9e177dae263f83a61669b860024",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "0feeae7db7f8003941dc17117c759189",
          9116: "ed78d69898cf7c75ad9f3c7f513105b2"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(o, e) && o[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, f, o, n) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then(e => o(e, f), c);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, a, c) => d(a.get, t[1], r, 0, o, c),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, (e, a, r) => e ? d(i.I, t[0], 0, e, f, r) : c(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var c = a[r];
            if (c || (c = a[r] = {}), !(t.indexOf(c) >= 0)) {
              if (t.push(c), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, r, t) => {
                  var c = d[e] = d[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (c[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = i(e);
                    if (!c) return;
                    var d = e => e && e.init && e.init(i.S[r], t);
                    if (c.then) return b.push(c.then(d, a));
                    var f = d(c);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (o("@foundry/react", "5.12.1", () => Promise.all([i.e(602), i.e(5021), i.e(2445), i.e(1302), i.e(6078), i.e(2229), i.e(4853), i.e(4572), i.e(1082), i.e(9407)]).then(() => () => i(92246))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), o("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(4488), i.e(5827), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then(() => () => i(89477))), o("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(5021), i.e(4488), i.e(5827), i.e(2445), i.e(7544), i.e(2229), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(1082), i.e(2440), i.e(2424), i.e(5190), i.e(8427)]).then(() => () => i(89600))), o("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), o("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(4853), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), o("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), o("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), o("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), o("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), o("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), o("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), n(25136), n(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var c = 1, d = 1; d < e.length; d++) c--, t += "u" == (typeof(o = e[d]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, o);
                return t
              }
              var f = [];
              for (d = 1; d < e.length; d++) {
                var o = e[d];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : a(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var c = a[0],
                  d = c < 0;
                d && (c = -c - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !n || ("u" == i ? o > c && !d : "" == i != d);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= c) {
                        if (b != a[o]) return !1
                      } else {
                        if (d ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || o <= c) return !1;
                    n = !1, o--
                  } else {
                    if (o <= c || s < i != d) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, c, d) => {
              var f = d ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce((a, t) => !r(c, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var c = a[t],
                    d = (typeof c)[0];
                  if (t >= r.length) return "u" == d;
                  var f = r[t],
                    o = (typeof f)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && c != f) return c < f;
                  t++
                }
              })(a, t) ? a : t, 0)) && f[t]
            },
            c = e => {
              throw new Error(e)
            },
            d = (e => function(a, r, t, c, d) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, c, d)) : e(a, i.S[a], r, t, c, d)
            })((e, r, d, f, o, n) => {
              if (!((e, a) => e && i.o(e, a))(r, d)) return ((e, a, r) => r ? r() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, n);
              var b, s = t(r, d, o, f);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void c(((e, r, t, c, d) => {
                var f = e[t];
                return "No satisfying version (" + a(c) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(r, e, d, o, f))
            }),
            f = {},
            o = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              16188: () => d("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(6321)]).then(() => () => i(58702))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              4572: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              2973: () => d("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              91082: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(4964).then(() => () => i(62583))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5117), i.e(4853), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then(() => () => i(99747))),
              61128: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              72521: () => d("default", "@foundry/react", !1, [1, 5, 12, 1], () => Promise.all([i.e(602), i.e(5021), i.e(1302), i.e(6078), i.e(4853)]).then(() => () => i(92246))),
              15310: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], () => i.e(8503).then(() => () => i(90884))),
              20206: () => d("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], () => Promise.all([i.e(5021), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              42602: () => d("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], () => Promise.all([i.e(8579), i.e(1858)]).then(() => () => i(89477))),
              57770: () => d("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              97384: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400)))
            },
            n = {
              1082: [91082],
              1125: [15310, 20206, 42602, 57770, 97384],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              4853: [44853],
              5190: [61128, 72521],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(n, e) && n[e].forEach(e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = o[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
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
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                76: 1,
                884: 1,
                1057: 1,
                1125: 1,
                2358: 1,
                3438: 1,
                5040: 1,
                5190: 1,
                6069: 1,
                6078: 1,
                6536: 1,
                8427: 1,
                8503: 1,
                8579: 1,
                9116: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  c = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var c = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (c === e || c === a)) return f
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var f;
                      if ((c = (f = d[t]).getAttribute("data-href")) === e || c === a) return f
                    }
                  })(t, c)) return a();
                ((e, a, r, t, c) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, d.parentNode && d.parentNode.removeChild(d), c(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, c, 0, a, r)
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
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1(082|788|913)|2(229|440|918)|6(069|188|536)|4572|4853|5040|5966|76|8427|8579|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise((r, c) => t = e[a] = [r, c]);
              r.push(t[2] = c);
              var d = i.p + i.u(a),
                f = new Error;
              i.l(d, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var c = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")", f.name = "ChunkLoadError", f.type = c, f.request = d, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, c, [d, f, o] = r,
                n = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < d.length; n++) c = d[n], i.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});