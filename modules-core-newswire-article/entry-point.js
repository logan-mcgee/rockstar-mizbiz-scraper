! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "448ed1b5-1590-4991-8d71-80c8c2200b81", e._sentryDebugIdIdentifier = "sentry-dbid-448ed1b5-1590-4991-8d71-80c8c2200b81")
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
    f = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, c, r, t, b, o, n = {
            24075: (e, a, d) => {
              (0, d(47387).w)(1)
            },
            47387: (e, a, d) => {
              const f = d(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = f(d.y.meta.url, e)
              }
            },
            45408: (e, a, d) => {
              d(24075)
            },
            13099: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var f = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, r = f.length; c !== a && r >= 0;) "/" === f[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = f.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            55974: (e, a, d) => {
              "use strict";
              var f = {
                  "./index": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(9122), d.e(9665), d.e(3962), d.e(8486), d.e(2229), d.e(6188), d.e(6682), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(88468))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(1426), d.e(1269), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(636), d.e(495)]).then((() => () => d(90495))),
                  "./types": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(9122), d.e(9665), d.e(3962), d.e(8486), d.e(2229), d.e(6188), d.e(6682), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(11485)))
                },
                c = (e, a) => (d.R = a, a = d.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var f = "default",
                      c = d.S[f];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[f] = e, d.I(f, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => r
              })
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            25136: e => {
              "use strict";
              e.exports = f
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
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          s.r(f);
          var r = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = c(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, s.d(f, r), f
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "4bcb29be9f916b863a4c4f8389d851dc",
          188: "f68520a22fdeba448bd1460f9232dea8",
          278: "c652f6e181710e0c1fa7cf9c36714142",
          299: "8726621c2647634fa03369ddd6799cc4",
          314: "d6cf305281774f89bf87941ab7e6c959",
          495: "36301c8af861d5f7b3502191d48ef020",
          561: "ff458293d6ee30ae5a7faef9f8e2bada",
          636: "d44669b5bc0b1ed622341de5571a655c",
          662: "a45b68694308ea1a16ecff418062d240",
          721: "5ef789b053ba86e9e15ddb73ab4a3c20",
          824: "d2aafa777dee120dddd89ec73e89d62e",
          907: "d2a274042b732fd9759239745eb8bb0b",
          1054: "2311ee3226bdb21e4b14a60d48f338d0",
          1242: "725eed2da5e16d7b43f97e17386537be",
          1269: "c71f542241f4d0ee7de46b59c991baa2",
          1324: "710d9dd05e1dccc9c438c2f95d2226f9",
          1426: "3c9379e5a50c9812250d5e6067004edf",
          1667: "823bf63c83a169aed9a4d0388e9a52a4",
          1673: "87045f726fb8d8eed7a2bf305c2b3a9f",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1793: "0649d86f0f1a03bcaf8fe7eadf5c036a",
          1822: "065bf7a861bc39bd5ae7f584137896a6",
          1868: "142f6228e65abcc05d63d1036b533ccd",
          1962: "35525c5424d231f4804f21ce55bd172b",
          2024: "03c46e5d29f647e311bd8c43e1dfbf2f",
          2156: "d1cf52223778b4234c1bf8ae35cdda7a",
          2171: "4774938ab2b1e56f412b8bb105e0ed9e",
          2221: "010a554ff446ced1bf273a39437529c1",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "f5e208e170129656ea993be892ce1fdc",
          2339: "3fd12e86fd4fa60ecc3cd0b6c6e106ac",
          2347: "55fdcd6134de0f8dc444a2ec160cbac4",
          2365: "ad862bb4b123c433e51afa1b303fa91c",
          2398: "d79d1e0fbda63076689851e5345a9a2f",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "a1cc56f6b5cdea98196a939656bce2e0",
          2642: "34e9219b2f708911b6ef708ac74ef725",
          2654: "ccffd23e11b3b000242baf12944a3b0b",
          2678: "6e2ed23ab74525f19304e6fb39f388d2",
          2781: "dc52459df70f6a77906d2369abf9bb3c",
          2860: "32f3f9f20e7debc57a4ebaaa1cb65925",
          2864: "7d0d91e3a4196b901b0ad4620602c375",
          3034: "65073da7e411a8b3c6e98b1a9a0daf9f",
          3197: "cfb35835f15216006a44b2da1d2c4669",
          3241: "5f63c7a68540835f09f43eac31caae75",
          3343: "aa23c755ac250b31794112d180699159",
          3365: "5fd3b9c73a6d52c9887d2dae04110ff4",
          3370: "f1745c921128e8dddd7aead643f0a733",
          3447: "1576f3afb28e29effd71b14d1837a8a5",
          3475: "eeb44109568ca80e393276f3d2a1094c",
          3486: "f3d7f0514e289c83a286f3dc061ff3cc",
          3547: "9bcc3742fdecda665e7a6032067f0700",
          3550: "1fc32bf38af6a4b8f6fcb1a18a242796",
          3557: "88ab32e74677307c31730eda2e664686",
          3697: "fc860a53076f1f0cc846f57667ba1f97",
          3717: "286ad7468b1ef87623fc7a97ba6fab8b",
          3855: "f94ff854122c18944e04361255ee27f3",
          3885: "c4f1a871adab7307e586b629d091198e",
          3941: "3dc0c1928822b4efeba44be4d3d25300",
          3962: "adf64a61f95e8a0e4522b3d8456ffd6d",
          4011: "eeeb129b9b5b2433f903760cc858634d",
          4018: "77dab53ebf4c7b76c193805cc53bb29e",
          4054: "95d4203b59170a3fb549ec95fd6b233b",
          4324: "7ad6ac65bef04af6d159942a99bfca20",
          4378: "7cbda1f75fd23ea9a276d7423974ef25",
          4394: "3cef2549ce68927aff497864bc282557",
          4528: "1b81ebaa3368dfc4173a99b5152f52d8",
          4621: "c8999c78aecaa183059af5acdc7f1c57",
          4700: "a2de6c842da2acdb9e3aedbb0544b9f5",
          4710: "09bfdd261079071bf2c2992b8b04963f",
          4731: "3ede024bfd71bfa15495f61c9c8faeb2",
          4799: "376ae6f129feeb54137c79bf93c65082",
          4851: "e688cd227484644e957f815908cd55a1",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "7b51718655c7649cb349b0e07752e018",
          4864: "4e173086b7f1a4115e1baf09896dca20",
          4913: "c08f63a1765280541039c0baee8bbf57",
          5018: "3a35be67ee69f7392f75b5eac96fb7e4",
          5019: "d3706d8becc4f8815eb5a8f400b01402",
          5043: "100fff7ad0cb730b634d831f3958a460",
          5142: "2a6150d4bd674593f061f79ceff3d91e",
          5233: "63a6983f68c85d436883a228040586de",
          5254: "8aa13853fcffa085b2dc12375ac92074",
          5259: "27ce95c782d055aef9ed13836cc05587",
          5530: "1c8632da39be48edb508198a55d3908f",
          5639: "b80be0de8da6d1f56969df6e49a37999",
          5663: "31674428f99b1a1d52115c94a8717d2f",
          5742: "2a57111a63bf134410f65b346a0850b0",
          5794: "13c0c0dab451b95b92afb1d0714ece0f",
          5830: "166141262cd2447d3fa9a079fee91b52",
          5832: "d00e6ccd16a3435b1a05d37f14642ac4",
          5833: "0fefce06cf7fcb00ff83b3e080e587cd",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "4a490ec31691af5d61809b32e2cd0aff",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "73efc3f08e074f3238ddaf9575b15806",
          6280: "ea5f2da7f4af8e290d80eca44329d74b",
          6285: "f5cb64db597205f033e661ece0c97b68",
          6299: "1b4362dbe168b64f24821a2c781245f9",
          6361: "8c63d1f5b5d3d1bc6a102bb467f7e6c3",
          6536: "4bb44a947cea9354f20ee9669e942b27",
          6664: "93b04b8a749fc3993f627fca8ebf0a69",
          6682: "8a1517a2ce3fa0d740b089de00bbade2",
          6879: "59a5a88c8c1f4972e4969ca5fd3505c0",
          6891: "af1a29a918187e2c7c38531ccd0be06b",
          6997: "5dfe19a15f2ed2da989c859648d9644c",
          7010: "89ab8115fdeb9e0fda0b4c9b2950834c",
          7073: "1d18a9bb94e6a144ae3ca01a8e87fa21",
          7339: "80448422af7f063a4abb65861feca2a7",
          7436: "d7b9ea9c07ad40b74f7fd697c5a56dd7",
          7452: "8f0953aa47657b393d0ea9f563fc85b1",
          7453: "eb2f8da2428c278a1626fb308ae9bf7e",
          7531: "9430035da66fd97df6e12868c5cb4bb5",
          7539: "84b07f1531df5c24c2eb18b8b21fdcd4",
          7568: "5c11889288af3eddfa992c36e146b491",
          7868: "ba9e92c4a9881183e37457f4e9a87580",
          7970: "a78c34d62dc598965602e54a1366d33b",
          8110: "86291f88481f99d6f4676824964fb670",
          8272: "6292aa40a8cf48d8495b24bd97969203",
          8391: "88bccc4296a76a33913e6d7a0e3c5fa9",
          8486: "5b395378b5dae6bfdbd0cf6a4263caaf",
          8714: "ed7b70ec75a41292df59dd9a261cac27",
          8755: "6391b07cb3dccfa11306680af85528e1",
          8880: "8116f8f71c9c256cb2ac7ab27fbbb173",
          8970: "5e380a723432f2955de1a8717511ed27",
          9022: "f7714303517e2dbaf141538a33a57378",
          9028: "d3d8bd126676973f54e6eb069c4143f2",
          9122: "c84a89294c947f51811f115a56a02b7c",
          9126: "f8c5e592ea0352a21abe2ffd85e51de3",
          9214: "8a18d31b84543c1187aebb1d98aad80b",
          9377: "be3215b7a895b81147864dc0f2da4afe",
          9540: "6e19028a7ddf46e17c07e9d9ba089c22",
          9615: "594d5cd9eeecf35d449eb292b0cc8fc2",
          9665: "d16abb2cd750b879404cb498c80062fc",
          9873: "43c6f6836e5fda7192632f57dddc46fc",
          9936: "78d44188f70dddbf5081c1531adb371c",
          9990: "090a750474e728457faec6056209c80f"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var i = o[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + d) {
                  c = i;
                  break
                }
              }
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.setAttribute("data-webpack", t + d), c.src = e), r[e] = [a];
            var l = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var f = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), b && document.head.appendChild(c)
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
            var f = o[e];
            if (!(d.indexOf(f) >= 0)) {
              if (d.push(f), f.p) return a.push(f.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), s.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var n = e(d, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), c);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                t = (e, a, c) => r(a.get, f[1], d, 0, b, c),
                b = a => {
                  f.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(s, f[2], 0, 0, ((e, a, d) => e ? r(s.I, f[0], 0, e, t, d) : c()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, f) => {
            f || (f = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(f.indexOf(c) >= 0)) {
              if (f.push(c), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var r = s.S[d],
                t = "@rockstargames/modules-core-newswire-article",
                b = (e, a, d, f) => {
                  var c = r[e] = r[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : t > b.from)) && (c[a] = {
                    get: d,
                    from: t,
                    eager: !!f
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = s(e);
                    if (!c) return;
                    var r = e => e && e.init && e.init(s.S[d], f);
                    if (c.then) return n.push(c.then(r, a));
                    var t = r(c);
                    if (t && t.then) return n.push(t.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (b("@foundry/react-v1", "1.28.2", (() => Promise.all([s.e(6035), s.e(9122), s.e(1793), s.e(3962), s.e(2229), s.e(4853), s.e(2781)]).then((() => () => s(81793))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(3717), s.e(4394), s.e(2229), s.e(5966), s.e(4324), s.e(8110), s.e(2654)]).then((() => () => s(88110))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(3717), s.e(7531), s.e(4394), s.e(9122), s.e(9665), s.e(2229), s.e(6188), s.e(6682), s.e(5966), s.e(1788), s.e(2440), s.e(2860), s.e(3547)]).then((() => () => s(22860))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(3717), s.e(2229), s.e(5966), s.e(4324), s.e(5043), s.e(2440), s.e(6299), s.e(7568), s.e(3365)]).then((() => () => s(17568))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(2229), s.e(6188), s.e(6682), s.e(5966), s.e(4853), s.e(1788), s.e(7539), s.e(8714)]).then((() => () => s(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(2229), s.e(6188), s.e(6682), s.e(3855)]).then((() => () => s(46323))))), b("dompurify", "2.4.7", (() => s.e(561).then((() => () => s(20561))))), b("lodash", "4.17.21", (() => s.e(7868).then((() => () => s(17868))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(5794), s.e(2229)]).then((() => () => s(50556))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(2339), s.e(2229)]).then((() => () => s(12339))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), b("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), b("text-balancer", "1.0.5", (() => s.e(4864).then((() => () => s(74864))))), o(25136), o(29441)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var f = d.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = d[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = d[1] ? a(d[1]) : [];
              return d[2] && (f.length++, f.push.apply(f, a(d[2]))), d[3] && (f.push([]), f.push.apply(f, a(d[3]))), f
            },
            a = (d, f) => {
              if (0 in d) {
                f = e(f);
                var c = d[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, s = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= f.length || "o" == (i = (typeof(n = f[t]))[0])) return !o || ("u" == s ? b > c && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= c) {
                        if (n != d[b]) return !1
                      } else {
                        if (r ? n > d[b] : n < d[b]) return !1;
                        n != d[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (t = 1; t < d.length; t++) {
                var p = d[t];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, f) : !u())
              }
              return !!u()
            },
            d = (d, f, c) => {
              var r = d[f];
              return (f = Object.keys(r).reduce(((d, f) => !a(c, f) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var f = 0;;) {
                  if (f >= a.length) return f < d.length && "u" != (typeof d[f])[0];
                  var c = a[f],
                    r = (typeof c)[0];
                  if (f >= d.length) return "u" == r;
                  var t = d[f],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && c != t) return c < t;
                  f++
                }
              })(d, f) ? d : f), 0)) && r[f]
            },
            f = (e => function(a, d, f, c) {
              var r = s.I(a);
              return r && r.then ? r.then(e.bind(e, a, s.S[a], d, f, c)) : e(a, s.S[a], d, f, c)
            })(((e, a, f, c, r) => {
              var t = a && s.o(a, f) && d(a, f, c);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            c = {},
            r = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              16188: () => f("default", "lodash", [1, 4, 17, 21], (() => s.e(7868).then((() => () => s(17868))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(6188), s.e(6682)]).then((() => () => s(46323))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => s.e(5794).then((() => () => s(50556))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              2973: () => f("default", "dompurify", [1, 2, 4, 1], (() => s.e(561).then((() => () => s(20561))))),
              92440: () => f("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(6188), s.e(6682), s.e(4853), s.e(1788), s.e(7539), s.e(9540)]).then((() => () => s(69540))))),
              15310: () => f("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(7568).then((() => () => s(17568))))),
              20206: () => f("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(2860).then((() => () => s(22860))))),
              23608: () => f("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => s.e(8110).then((() => () => s(88110))))),
              56840: () => f("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => s.e(1793).then((() => () => s(81793))))),
              57770: () => f("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(2339).then((() => () => s(12339))))),
              97384: () => f("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4864).then((() => () => s(74864)))))
            },
            t = {
              1788: [81788],
              2229: [62229],
              2440: [92440],
              3550: [15310, 20206, 23608, 56840, 57770, 97384],
              4853: [44853],
              5043: [2973],
              5966: [95966],
              6188: [16188],
              6682: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(t, e) && t[e].forEach((e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var d = a => {
                  c[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete c[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(c[e] = t.then(d).catch(f)) : d(t)
                } catch (e) {
                  f(e)
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
            var f = s.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) d.push(f[2]);
              else if (/^((17|61)88|2229|2440|4853|5966)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((d, c) => f = e[a] = [d, c]));
              d.push(f[2] = c);
              var r = s.p + s.u(a),
                t = new Error;
              s.l(r, (d => {
                if (s.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, f[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var f, c, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (f in t) s.o(t, f) && (s.m[f] = t[f]);
                b && b(s)
              }
              for (a && a(d); o < r.length; o++) c = r[o], s.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(45408), s(55974)
      })())
    }
  }
}));