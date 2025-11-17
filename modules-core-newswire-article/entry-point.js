try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "83b2ae85-23d3-443b-a046-9c00ecfd6b6e", e._sentryDebugIdIdentifier = "sentry-dbid-83b2ae85-23d3-443b-a046-9c00ecfd6b6e")
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
        var e, d, c, f, o, n, b = {
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
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(6769), r.e(1302), r.e(4873), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(5463), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(6769), r.e(1302), r.e(4873), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(5463), r.e(76), r.e(1125)]).then(() => () => r(76808))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
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
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(t, c), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          68: "0159e189323878e6969488b3bf7eaf60",
          131: "ace0b37d389dca8676739dc024edef4f",
          173: "9345209ff67361b652d64822e052b36d",
          278: "5f3570429a1111264c16195ab5496f52",
          299: "7ed2b2df6d4757465eb2ca6da302786d",
          314: "d945b93b917044c12047ee55b43515ae",
          439: "a961ed1eaf16d7a6157db06ac12e449a",
          602: "d9d02aa4a9b2fe7214fc09370671093a",
          662: "888e0ba43b1003ccd65f2382097127d4",
          824: "64df9cb0c38acb4fdea8f1978ca53a11",
          884: "f361da67357b0f858af21277b810b5fa",
          907: "ed7d66e5e9bbf084143e3f11316847cc",
          1054: "8d27a020f690441568ca1d21cb7d8099",
          1057: "5a8d25c7fb0f2677c4e1f1430537526d",
          1098: "0bfefa8b61bc6392a8842ae9463231c8",
          1125: "472ec1d1c349d81e0e3340d784c91b74",
          1242: "13ef03dcd5bff7211838526d44f6787a",
          1302: "020183a9f00ee693140bd792cae0de80",
          1758: "2a60a1fb33a920221c116a60d3cff4e6",
          1822: "58bfd7da0f307eb9938c34f0a67236a7",
          1858: "1339cc65e7a8a5a6cfde5e389f68675d",
          1868: "22fdd8ff9d17d429b323195cfc28ef14",
          2156: "4e60578b555ac64703ebb33f3e536b0d",
          2169: "5e11c92e1d65b42476a8d0a11c9edcb5",
          2171: "8d27fbef7a6078ec011be4a4b81da357",
          2221: "70f58c365193a6e0d31b39398973ac1b",
          2234: "10b181bd7ac4fa5656c2e5fcfaa6c1f8",
          2243: "5c71cb088ce36b0039063795662fec0f",
          2306: "acc627ea2ee5231b715698a04ee89ebd",
          2347: "8197e8b77648bd5b069bdf31a0b95b51",
          2358: "b79c44881d45d178eef5e192a29d17e0",
          2365: "e243c874e9aa92636e629c650ab2898e",
          2398: "d605c51994881260a0c5023c18c2b71c",
          2466: "970d2e498c8b75f410708cefef84676c",
          2583: "1f2af7a29ec059534a2e62c49f2f2350",
          2642: "fd1d494f9a4963d30293af7b0efc3e32",
          2678: "f37002cfa9b7113db9b7e0e293dd06b8",
          2864: "46d0f86929dcf1f5f7a0e471c5b53974",
          3034: "96a830395ead72fd22f102e6f625044f",
          3197: "41e856eb5a67f65c252c2c3dfceccdc8",
          3343: "4340f838ce3e13f4e3ecd18427b04b4d",
          3370: "3230acad3188ba65bbbdc85d4817c755",
          3387: "4037eb0005875985db725f4f8a26f24e",
          3410: "06ae5e3fbfa5ceeb9367d1ede328cc4d",
          3438: "17a85de13a2f3251ddf8957eddf384ff",
          3475: "32a4ca08e28a4bf20859d9e6a0bef77f",
          3486: "4630701b531ff4df7abc7ab1d247519d",
          3697: "24771075f813baf87ec1a26fde222704",
          3885: "a0f20f01f3e666d665cadfeaa558365d",
          3896: "1788e3d6219d519a69d10b34d51c8c06",
          3941: "d369b5ec9a67d32ec7d87e6b431a80e8",
          4011: "9e3e5ec994bc2e0a70f94f4db23edfe1",
          4237: "6804568a8f7c608865c7d849f26fe2ce",
          4488: "a753c9cc6b4a43631d1c005a9fced56d",
          4528: "9ecc888c11c0543eeac2ceaf7f5995ea",
          4550: "15b8bc43588acaf2d72518d81de35dd8",
          4578: "dc60ed87c5177fbfbebc4ea1d9bc0878",
          4621: "fbee36d617556184a9ac43d2e8af2377",
          4700: "4c79eb3a7355bf227ad1221a6d4fc10f",
          4710: "f36f77eb17246f3959fd3afec1f31fea",
          4731: "231d0a87258b1b2e28679fd78fd24d7b",
          4799: "056baa6698ca7922aa314cbe87b4f86c",
          4851: "018a950576a95e9d6979ca5955a61966",
          4861: "cd190001e3c0eadd92e48b126657798c",
          4873: "28ce9796d54b03b3ca6e2a4945ab6bc8",
          4913: "e1b3a820907d5d0ce6a90e0268c13b71",
          4964: "e001f68e16678828d8813f589e7f2225",
          5018: "5d4e132cbfe9a332413a0e848259ac56",
          5076: "ceabe29bd3c5694e0307c43826ea3984",
          5117: "3624da5ab733b4ed452b93ef28144b02",
          5233: "9bd4c878181b74bbebbbd8afeb395905",
          5259: "bbcb5964746c8b4bf46c5364f602085c",
          5265: "312b4a32d23cc9fc32a055089d5d7062",
          5389: "80d1314a0055cf5567ef0d5168492af9",
          5400: "f0a67a16b3dd7d1af6324200918dac89",
          5415: "f48083053a08bdc07b28c3d0fc967a29",
          5454: "5dbb1bc1bd9656c61488612fd9d66197",
          5463: "8c81e553d334a99d21089af0b5644869",
          5530: "0364aecfa3ddeff5c2f3e7c86a1e82b6",
          5639: "7d40b6db1c5a7da84f397e27e7600153",
          5663: "0bd38c5cd90a74720b28d6540c895dc8",
          5742: "4598e7f971d6bdbab0a7e19fdc049d0b",
          5827: "2d8629525e11fefcecb9c1741cd21bc2",
          5830: "cb8b681a3f6b34882a766e9600c2bf43",
          5832: "5209843a1880770ef80a1c52156c7b6a",
          5859: "23aa380a7e7dcfb3e4199943ae60db83",
          6088: "bd83cfbaa1df835dec4c0c302d487088",
          6130: "832eed327d96e9efee2156bdb151bdc2",
          6267: "001d49b41d6eba6a76774acf669e45cb",
          6280: "b0f97cb240878839effb996e08c8b0d4",
          6285: "7cc2c5c78a37b694caf926f931142899",
          6321: "b2e882ab4d497858049134eb8a647376",
          6327: "6abcfc0eb11b66bb88bb47ba612bb63b",
          6361: "94f0ad251c0675642a1f4621d038d90a",
          6471: "6ab402d457dc776ca6453a8c26018ab3",
          6664: "9413137e404b094182e7cf038912c2a4",
          6769: "26f56fc915f91195c6de98f3d44153da",
          6879: "1970cec05866fa8b33ae3a31cefe32bb",
          6891: "fc609820afc7c347eeb831836bc88d82",
          6997: "dd03e6af6eff4e7854d0a9a346a2d38d",
          7010: "650314217a624c537b38420134dbe56b",
          7073: "bb2c025a6737983d85cc0cbfa0e749dd",
          7407: "3cd6eb830d95b7f659c4d2f1fbd2bb7b",
          7436: "5adf114601692702adaf4829ac6b6fba",
          7452: "1786a78a0af64bf24420f00aa8b9d274",
          7453: "bebd14b21e3b6ab0d84a266537745116",
          7678: "50f46f6246a57a3d5b490c91562c762d",
          7785: "5847858ac4cbfa5a2b071f50be356869",
          7970: "f48051518c1cd0cea25fb880a3de204b",
          8068: "a3842255d43eb37eea6425cc55273830",
          8240: "bfa36309ebaac015819b15ef89fe83b0",
          8272: "fa545498783ef45716e5965df5a55ed1",
          8325: "8fc680e4af313c02f612a2e34a2d4beb",
          8391: "195ff1368ae266ec1f6260723d814a73",
          8431: "1590697063c1d656f939e3f0135b6fc5",
          8503: "506c47e70c8787334f5828ac1d086a2f",
          8505: "76ad05a93f5c04fc9541871a0b886443",
          8659: "1b8994ebebe75d6ad72ad3589c4cffb1",
          8661: "fd7453e744e508bc65badf10de2c5d90",
          8702: "d8200deac759a533945a352db6f6aa8c",
          8708: "7feaf815deede7faf3cc1cee33f7630a",
          8731: "89a4d5c43a1dddca5c78262c7e1dadc6",
          8755: "98882386703e5d89ed074d72bcd27f23",
          8845: "d4cbbe21f8fd4936d7e7ac478c6509be",
          8880: "1125be94eded2d927ab01708e3622a5e",
          8938: "9b2794040e1dad136dc6550755f69fbb",
          8970: "3baf7c97f4b0c37a538dade0a6f977f8",
          9022: "e4f66764b0403f00afd78990067e45cb",
          9028: "3fc30fdd893b5855e2a7725265e016dc",
          9116: "b0fa001bbbd04b2ed91a07706e08d253",
          9126: "dd4fb73dfa4a25f54e9b16aace4a4f84",
          9377: "07dcac4790c2c76718abaee52960e91c",
          9407: "9be486917bc5e166bbf058b3b1b0387e",
          9477: "1673f9b36b780fb70ac4bdab0057ced7",
          9587: "1db17d30b096be9185fd6391ef94e1c5",
          9615: "ab49c79b32bd41a4c38008ba5dfcc645",
          9760: "26a1e8a340c7c9fc12bea54adfd398b5",
          9842: "3dd766a62c01adc7ae4bbd76d17579ed",
          9936: "510b3f976525f0a9a285114fbe47853f",
          9990: "7fee1c0cb689972dcd34edaa56157dac"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "2c1fa675151d37269cfc7e15899887f6",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          5463: "bbfc715b58e04a52bcbba01c5d9281fc",
          6069: "d420c60ba06e5f6e5c66b05e81051c48",
          6395: "443c4528b3078d79b29a4fc4dc6eeff5",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          8460: "881d6cf37a2a07cefa5a853913e349aa",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "0feeae7db7f8003941dc17117c759189",
          8731: "742693da22ad7a392de104bbd4a4bce1",
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (c[e]) c[e].push(a);
          else {
            var d, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  d = s;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", f + r), d.src = e), c[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), o && document.head.appendChild(d)
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
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then(e => o(e, f), d);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, f, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
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
                    var d = i(e);
                    if (!d) return;
                    var c = e => e && e.init && e.init(i.S[r], t);
                    if (d.then) return b.push(d.then(c, a));
                    var f = c(d);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (o("@foundry/react", "5.10.0", () => Promise.all([i.e(602), i.e(9842), i.e(6769), i.e(1302), i.e(8731), i.e(2229), i.e(4853), i.e(4572), i.e(1082), i.e(9407)]).then(() => () => i(44467))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), o("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(4488), i.e(5827), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then(() => () => i(89477))), o("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(9842), i.e(4488), i.e(5827), i.e(6769), i.e(4873), i.e(2229), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(1082), i.e(2918), i.e(2440), i.e(7678), i.e(5463), i.e(8460)]).then(() => () => i(25022))), o("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), o("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(4853), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), o("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), o("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), o("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), o("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), o("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), o("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), n(25136), n(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
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
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !n || ("u" == i ? o > d && !c : "" == i != c);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || s < i != c) return !1;
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
            t = (a, t, d, c) => {
              var f = c ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    c = (typeof d)[0];
                  if (t >= r.length) return "u" == c;
                  var f = r[t],
                    o = (typeof f)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  t++
                }
              })(a, t) ? a : t, 0)) && f[t]
            },
            d = e => {
              throw new Error(e)
            },
            c = (e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            })((e, r, c, f, o, n) => {
              if (!((e, a) => e && i.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, s = t(r, c, o, f);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(r, e, c, o, f))
            }),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(6321)]).then(() => () => i(58702))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5117), i.e(4853), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then(() => () => i(99747))),
              39978: () => c("default", "@foundry/react", !1, [1, 5, 10, 0], () => Promise.all([i.e(602), i.e(9842), i.e(1302), i.e(8731), i.e(4853), i.e(1082)]).then(() => () => i(44467))),
              61128: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], () => i.e(8503).then(() => () => i(90884))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], () => Promise.all([i.e(9842), i.e(1082), i.e(7678), i.e(6395)]).then(() => () => i(25022))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], () => Promise.all([i.e(8579), i.e(1858)]).then(() => () => i(89477))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400))),
              91082: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(4964).then(() => () => i(62583)))
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
              5463: [39978, 61128],
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
                  var d = o[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
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
                5463: 1,
                6069: 1,
                6395: 1,
                6536: 1,
                8460: 1,
                8503: 1,
                8579: 1,
                8731: 1,
                9116: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
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
              else if (/^(1(082|788|913)|2(229|440|918)|6(069|188|395|536)|4572|4853|5966|76|8460|8579|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, o] = r,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < c.length; n++) d = c[n], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});