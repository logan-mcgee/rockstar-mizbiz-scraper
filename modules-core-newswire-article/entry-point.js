try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6c50ace4-18e9-4eee-a091-373968ef7f4c", e._sentryDebugIdIdentifier = "sentry-dbid-6c50ace4-18e9-4eee-a091-373968ef7f4c")
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
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(2445), r.e(1302), r.e(7544), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(1082), r.e(2440), r.e(2358), r.e(7409), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(2445), r.e(1302), r.e(7544), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(1082), r.e(2440), r.e(2358), r.e(7409), r.e(76), r.e(1125)]).then(() => () => r(76808))
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
          68: "58e148e04e0a7b5ca399b492a76c85a8",
          131: "75958c8ed89eb51bb18ec636e264e26c",
          173: "2d58695ab3e94d4f107c3641a2903673",
          278: "d11ac9ab287522ffe10f945211aa028d",
          299: "da856a37eba26b7cd08b6be2903330b1",
          314: "4267a46e25eb1ce2b81f618efb06152d",
          439: "8226c633ba41b3e35e06034be1c19db2",
          602: "9b8d016f97ffc672cc78abf1bf768aad",
          662: "033b0f7ae5ad70f105d3b91fd2f65263",
          824: "90ba563bb0b6729457852ae4501974a4",
          884: "0d7e8ce5f362085fd66cce1030af3506",
          907: "41c59ddfa1bc6df5fe3010badc360337",
          1054: "16f35a7643e8773ded302099e8d3aa95",
          1057: "026dffb66b92eba8762809bc97d7b89b",
          1098: "41d05d62d3ccf278b968efac9f379f5b",
          1125: "b86272c6a4ae1ac6b949f6e8bdc777a2",
          1242: "11e7ea482b4160ea79f24fa65c35340f",
          1302: "8a72b935477bdcfccdc752af727f156c",
          1758: "0613b42a2eac5720e6030b9c8bb5f8fa",
          1822: "0e9377bbfe42dfbcffbef494c2e89049",
          1858: "8d9da3cd325efdae6c6baa6dcb03a76a",
          1868: "705437d2a6902440c2e4bf8ad798b9ab",
          2156: "b988d3c91287fa85a2f839222f713209",
          2169: "b98ebd8a2cac146ac18320f9c53f923c",
          2171: "b589fa3438fb6a32f15d333b1f9dc693",
          2221: "756cf7b0253863269ca5806a227c1e7a",
          2234: "de776a7fa8a41e07de4e445f1c9bf9a5",
          2243: "e615625569bdaa663e775fb45cd0e899",
          2306: "8d4482800703621deb9e7c53a96df950",
          2347: "65985919cb48e80507bf609a7b57ba19",
          2358: "617386ffc2174be2f484f3731711bba8",
          2365: "dd6595a4fb0e4f3e27736429173f8f81",
          2398: "6ca7e6f4a03353bd69ac7a8d8f45bb59",
          2424: "89c0230a60634a176086744395d0d1f1",
          2445: "32330613880035dfc5ef109a265a7b39",
          2466: "39c3c43672cb98c4f0aa50df47c2d461",
          2583: "865ff423e246371002c530994b968abe",
          2642: "cad3c5cb7c2a7e21738936676ff4303e",
          2678: "a1efb5859d7291a7bc3281fc9f8d4cea",
          2864: "0e8ea16e6fc7e4ce06bd7a3ddbb75374",
          3034: "2a40a51326ee59a5f2e702e26fb44011",
          3197: "f4209af31fc4d1c9f57f8a9122a4ab92",
          3343: "63bfce8d0d42c8010ec2b0639bb1e748",
          3370: "1bde258dd021f360ba94915552e6e4d5",
          3387: "b1513f9ca6b68569eecbe5ac51ce2c6e",
          3410: "0e8466f7be6e995e211b4e5e9fc6e58e",
          3438: "ff848cf25cd0dc3cf7121c996c0b3b68",
          3475: "37f06701eb391512837a53b0772b9a23",
          3486: "cdbeabc4335723e97be6e78039e79c8b",
          3697: "98d679d165f14ea0dd492c68c0f2849f",
          3885: "08df95b2591fc1f2226d85b8b3638ce9",
          3896: "48e48a0e27190c40f5caa40a32c9682d",
          3941: "013cd7d9e1ab11d04239692e3a9d894f",
          4011: "0a95fd44a445eaf97d82c21cbe616701",
          4237: "45345ff4a086a83275d6916a06772306",
          4488: "cb5bc4957e922d54716fce61ff337b7c",
          4528: "f627f52238e9359e0b0316cebe665ba5",
          4550: "7951d4c9952e3ec42ba12e250540cbe0",
          4578: "0b96f6af9629124e544254fbc2fd8663",
          4621: "638eb0c49400b826fe1a81ad410af228",
          4700: "e3f577b0caa3b181dacac2f9027fbf7f",
          4710: "3f349fee475fb0689a47cda99ab18335",
          4731: "b475a6fb6dbbf0ef9622026cac9524b3",
          4799: "f617d26a3823f92418880a9585efd79a",
          4851: "08f1eba414dd51f4ba7a69c544f95a84",
          4861: "a89e4d81a38462d1391f70a8e4c603d6",
          4913: "e8d5b93785be64ef57d588452f76ae1a",
          4964: "6942eb694327408760e8973d159363e9",
          5018: "75b38c2b717f6b2d5280810285fd2fe4",
          5021: "7f6906acd29ab10cc87ffb70ec652439",
          5076: "8f7978f8b79916f169afc884d26bf379",
          5117: "43430ef715c0c7f18c95164a40a4a32d",
          5233: "1e9bcf08294b51397bb8bdca8312dd9c",
          5259: "6fb447b9ad35f09319f90bccc46ed7ec",
          5265: "e77fa66d36b920070d88ea44dc80852c",
          5389: "65c0f2580632eb5380d6df38bf2ae12f",
          5400: "8ab65679804697b9ed665fc5f5538391",
          5415: "0bdb5ebe2e54e3aee6822f353a45f7bd",
          5454: "0e3cd4ba8fbfa97e33777b11808cbf30",
          5530: "5022f15694ec035b6dd6c6fd8ddcc27c",
          5639: "df90bb2def0aab035923d924a1faff65",
          5663: "a81bfa8e0d2f53152396cf79b0d24046",
          5742: "de2ec20a03b66803b533ba2316c97a6b",
          5827: "d5ef6452fb5097063b1376ef6c6c49f7",
          5830: "864750fe8149f15f6ece5a3c65861722",
          5832: "e56ddb2d1082aec1ac504b449a7794d3",
          5859: "36d322045834356fed5ea966bed5874d",
          6088: "1b959865ce7cf462aed2b918430682e4",
          6130: "926c9fcbb09a5a41779c9a9a29dca6d8",
          6267: "9368041729b52cd55ea6e84be8dd2225",
          6280: "a156707344bb42def04abd8364bc0b50",
          6285: "30f488fab883f67c67b4327cf70877ad",
          6321: "c1d8426793a2f9791b4b99901d6a3873",
          6327: "8d93d132ba4f47400abbfda3e2fc08e9",
          6361: "699fbbb5f64494861d718a021514cf68",
          6471: "a02bb980feeb4068bb7725c45c7da9bb",
          6664: "e7661b6265cb65370ddbcba41ab17706",
          6879: "63525f8561048526a874f17d7d845466",
          6891: "4fe2dc3bcb2c7318a617e08d6b0f22e5",
          6937: "58ac37484863c755998a7fb59b9be545",
          6997: "561660a4a51244bd19a963aa12ec4ebf",
          7010: "9733fec0acd749cc52772c2af69964b5",
          7073: "dbfa73994f54e27722dfbc90f36c6a72",
          7407: "a4fd14f02f9a0d087db1335ab4fe82d3",
          7409: "33faaefc93e756081f4362bac174053e",
          7436: "d34ac99f64a172d630a0baf4572a91e1",
          7452: "d853fe97883ea5847b7ab01fec97137f",
          7453: "d0f1ad38ee6b3659941eeb197e4a3cb4",
          7544: "d778a69bad227597cdac134fb383f450",
          7785: "3d4874e6956dbbe19a5f77f7ba6ef19e",
          7970: "3a24e3592ec00b2c49f0496bb9cf3257",
          8068: "69db492b8ca944607634c230bc7e7e17",
          8240: "c44f98a1d1ff09f7f31b3798b40acd09",
          8272: "d13c6b93b07dc4238484546e27ec18d5",
          8325: "3443af241e5fec4e00063616e9aa3523",
          8391: "ba0ebbdf9370232f596029faa441d4cb",
          8431: "f7050329172562600d7c375bf1a4caa0",
          8503: "ffd345d25aa3b265a9cab43a2120ee1c",
          8505: "b760d4e0e32fe4dded5937530c9f8ca0",
          8659: "c8edb350fd88133c61f59821b58f5ea2",
          8661: "2fad28eaa5fb96d4d2eb924a8de5e9e5",
          8702: "204355973a76c628ee106ef449bd1224",
          8708: "269bdc7192e132d74a6a0fab624759fd",
          8755: "37a0b1b509bb3b7be013cd9fb7abce0e",
          8845: "2cbb0024e3c2d0bb61bd10761865cc26",
          8880: "c148b0c3394489ba257ee1e28cecb26b",
          8938: "113cc72085780492833ae25217a455d3",
          8970: "bd9b6cc7f9c611a23d68344bb59fabcb",
          9022: "2b860b7bfda0a2200f581df92e0fb04d",
          9028: "a7bec299e5dbb72ec6fee7987b6f6b17",
          9116: "d0d7af20c0869bcb6aaf1e31dc821f43",
          9126: "5080e4560feb918612c5aa4525c4ace8",
          9377: "9c79e16dc20e60d2bc46f5f575e91364",
          9407: "91d97220a6010855edbab583e983a5b2",
          9477: "52bc3be8f5fdd40ea0a1971d92d401d4",
          9587: "e863d65e415c5119e90be07265f7bee1",
          9615: "bc7d0e84bad190cba3f71c04917f81e3",
          9760: "7c43f86f56fef14b9a104252babec020",
          9936: "7e3165cb88768a82a9c7fa499b8222c1",
          9990: "4478c52141d47f4384d9ab75251b009c"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "2c1fa675151d37269cfc7e15899887f6",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          6069: "d420c60ba06e5f6e5c66b05e81051c48",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          6937: "a5afda78cd9e8ba3533ac0f2bf4f063b",
          7409: "bbfc715b58e04a52bcbba01c5d9281fc",
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
              return "default" === r && (o("@foundry/react", "5.13.1", () => Promise.all([i.e(602), i.e(5021), i.e(2445), i.e(1302), i.e(6937), i.e(2229), i.e(4853), i.e(4572), i.e(1082), i.e(9407)]).then(() => () => i(41121))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), o("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(4488), i.e(5827), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then(() => () => i(89477))), o("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(5021), i.e(4488), i.e(5827), i.e(2445), i.e(7544), i.e(2229), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(1082), i.e(2440), i.e(2424), i.e(7409), i.e(8427)]).then(() => () => i(89600))), o("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), o("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(4853), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), o("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), o("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), o("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), o("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), o("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), o("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), n(25136), n(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
              20820: () => d("default", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([i.e(602), i.e(5021), i.e(1302), i.e(6937), i.e(4853)]).then(() => () => i(41121))),
              61128: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
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
              5966: [95966],
              6188: [16188],
              6536: [2973],
              7409: [20820, 61128],
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
                6069: 1,
                6536: 1,
                6937: 1,
                7409: 1,
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