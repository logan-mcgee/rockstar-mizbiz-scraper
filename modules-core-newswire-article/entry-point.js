! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6ea46275-a55c-4c66-9d64-b782623389e3", e._sentryDebugIdIdentifier = "sentry-dbid-6ea46275-a55c-4c66-9d64-b782623389e3")
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
        var e, r, t, f, b, o, n = {
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
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, r = 0, t = c.length; r !== a && t >= 0;) "/" === c[--t] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var f = c.slice(0, t + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            55974: (e, a, d) => {
              "use strict";
              var c = {
                  "./index": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(8532), d.e(4246), d.e(3085), d.e(8486), d.e(2229), d.e(6188), d.e(6682), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(88468))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(1426), d.e(1269), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(636), d.e(495)]).then((() => () => d(90495))),
                  "./types": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(8532), d.e(4246), d.e(3085), d.e(8486), d.e(2229), d.e(6188), d.e(6682), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(11485)))
                },
                r = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                t = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      r = d.S[c];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => r,
                init: () => t
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          s.r(c);
          var t = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => t[e] = () => a[e]));
          return t.default = () => a, s.d(c, t), c
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "e0cfa071b4cf791eafd2e7bbe9a1fe62",
          278: "45b4fb86db776e019d28292a1960b3a5",
          299: "36cbafa6305106c03e70c7e9e14cfb11",
          314: "7d866ef0c59baca0ec67280b23da870e",
          377: "b4043e1f21fcea2f9431be030854eb35",
          495: "6c7838bdefda4fc78309346bd8233c73",
          561: "0ffaf2138476236321c300b926b90c46",
          636: "4427f3b3892dc23f2ee5878f6a2528fd",
          662: "d6c33e1f90b5913f992d05ba85537bbb",
          721: "f3d7fbfc6f82055c2868b2fcc68a4d0e",
          824: "593fc0dd700819bad370a131c389dfcc",
          888: "43fbe76e2320ad0512726a01a2e8c49c",
          907: "32cf2aeb1af8ccb8059ce383fc803403",
          969: "df2aa49a0204186e1bada7066d559681",
          1054: "b545a604a2d78eb88a57e44ab769b1fd",
          1242: "66f66a9a5745f964d602b7413594661b",
          1269: "668bd323fe5b9bee87ec49e626c8fad6",
          1426: "a195a0050dbd15642e40b0415b42f93b",
          1607: "b54bff224a94c6bdcaf24769e26458e4",
          1673: "e26cbe2eea436a3721222ba525c6b509",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "e6d3a6453b2309924cac3a0af8723e7b",
          1868: "33a6a50da3722eae13db249389af9524",
          2024: "b515cc70f035d10893e35d1c53f2c3ac",
          2156: "49caf3c2c12c87a500d719b0f49bf2b3",
          2171: "8f4a9fe3095133a2683e30965704d3fc",
          2221: "18b28a655bd24f2fccaa7ca18000b210",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "bb04ccc9f086989538673765cc7c2c1c",
          2339: "456734af0e87867f650c7a0c55e457e8",
          2347: "ae344b4ddd2d23df664b183998b119e6",
          2365: "e1bfbbdb09c919d39a93ca50025057c8",
          2398: "40fe2f4c29b10a9fba37ba21add4bd85",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "48784d15fc5ea3be10b514c5ac33aff4",
          2642: "5e8fa1c3120d6232b8d5672e6b183a6c",
          2654: "f05073b55f41cdcfde848b8a92ea52d8",
          2678: "467382d6ba9a0b47842b3efc24ae6cde",
          2781: "4cdd43b895141099c7b80d9d8f22734d",
          2860: "20a813be9c6cd883f1d361e65b9da781",
          2864: "73efc5150aec9d8ea7caa496a966e980",
          2941: "69fe5ffbce390bf293c61d9edbdfbf37",
          3034: "9403412e5fd08262a9bcfb07dc804442",
          3085: "e12357a3e689797a4b546b4cdac3ad14",
          3197: "de51d1a36c7c06dfac3d127dfda6bb75",
          3343: "6ab92180142f35db6639229ef1b525d6",
          3365: "ad9622ae9df24b3917e9280507d5dd5b",
          3370: "6a7fd917745d65f704ed3dd1d2e1f650",
          3447: "6f92738ed989ff6d0329d9a92f316cd8",
          3475: "7a56c560a69d34bf7a6bb361f948a8e7",
          3486: "06c288d1189f2d259c3491c0c8eda425",
          3547: "c4c9f466b2361599b2a7a9a15594a1e1",
          3550: "bcec8721fb88a5448420fa72a3002c9b",
          3622: "47d0022caf458c96bc2f0848d3f3c105",
          3697: "e7a237ca7075f4a76ce76b2e1e95e09e",
          3717: "63ca5df7461fbd4d995aa397eda975fd",
          3855: "5e6c46f209d28052ea850ef03a78c2da",
          3885: "6dc05671671d5e35c28452f2fb163a37",
          3941: "26d888ee20e33efdcd31589ae5811992",
          4011: "d88934f70425af7680af381dc4f7d98a",
          4018: "049b7545bf316f214bf5a4cfb9732bf2",
          4054: "12f746b53a337a961acf93ad5f553e67",
          4186: "a71da57ac88cc8388befefdf781bff04",
          4220: "6c5ad0c09ce5672ed9ccdd3b1a9515e9",
          4246: "e1e981c9a102068cedae5fc5f9721a7b",
          4324: "3742e29d8a907bb860035d1877a9cf5f",
          4378: "4d48de15c2d92bba9e1bd4851b974a4a",
          4394: "72b6a86b8f4f8536a947cacebdf09617",
          4528: "7c0fc47e931ecddc4a8e13c7587bb583",
          4621: "83cb08d5e3ce8bacea056c4b8f239b0e",
          4700: "5c84b7bf8f0890314a826c4139717c1b",
          4710: "070ac0a722e9bb04644895a357593916",
          4731: "a8d6bb81d8701133fc4d925d62b42d7c",
          4799: "9e2086a64a88e8b28c323cc39cb74c17",
          4851: "7dfbb6461425c0873c950d2da03650c6",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "fd8dedc58979233b45e1100e181e6e06",
          4864: "ff51cd59111735a79e49db8ad22abf07",
          4913: "6844ac1bad35ecf309e3a6eb5d61770f",
          5018: "81dea2723df7f99e1e1a65fcf69db661",
          5043: "7fb739a3d6f108fd0cdd4cfcd40af390",
          5233: "8dc2f70d2c43628fc2a03718000be8b7",
          5247: "5b4422251baa06401b64f7ec41f1d907",
          5254: "daa743d1d4ee799e18e684034b94c03c",
          5259: "e75b35d7ed327deb3c12c7ec80d24caa",
          5530: "77587e12a8cd1992641ccd2cc20a0d57",
          5639: "b5592b0f10d95c14a4d08a3c947945e6",
          5663: "468105ff0f2dbfc7806fdc85519e9b87",
          5742: "6b223f52b6ad044ed1c973989d07fa0e",
          5794: "f84942080163aeeb6c0e4a04ff4ed73d",
          5830: "7807f5d569cfd5e85095268613440589",
          5832: "75e28a45c7a4b5762009bbb53b884fdd",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "d77f17c5208abf686514fe806a8d2ff4",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "4b59f24942d2e163b9690ee0ee58562b",
          6280: "059f89f313702be2c1a91827ec6f2cab",
          6285: "956e8ff56b5ce30ef5318d1fcfd550c6",
          6299: "b0b28293830274aafb8b303188c0188f",
          6361: "092734c914e854bdfdce15f4bd95fae2",
          6664: "c1b11e033a6b0d77cc238b5650c2a16a",
          6682: "0e68ac514de470e9f27f0f9913040084",
          6879: "c55942f506a05dc363eb9f43f2c2f301",
          6891: "b85607654c9a00c801cb34b10962026e",
          6940: "b88905fb1ea220fba51b0c794e7ec377",
          6997: "744326c4c08393c4a5a5c4ca57c5c313",
          7010: "bced8f0e79be1369a0d7fd9d2bfea74e",
          7039: "a8c6d4131b2049eea504026f99ca6e40",
          7073: "efc831bec6336e8a6d2b874f7d98e904",
          7436: "90e854cb7f14fc3799488f801e5fe3a8",
          7452: "7afa942ecdd5c1504f552c1b0f3da45a",
          7453: "a72175a2dcbbd3837f37917ca8404286",
          7531: "eb266566f43458a21842aeaf557268c3",
          7539: "f5ad23b30680b6dc55db32ba9424819b",
          7568: "f7cf31fceb88e7533d94100c6bad62ee",
          7854: "d1a2230243880cc9898f56db0f8d420a",
          7868: "ab727d60bd445bc9f7f7febd9b7c3498",
          7970: "96bcc8aec4c4ec5aa893b1ea6dc843ed",
          8110: "9736e3eb0aa83f5bedb977c7a4c18750",
          8272: "e169f20589dc5bb383f95443901dfc0c",
          8391: "035c8fa611cdf58ee123328fc2b002ea",
          8486: "ec14b9f0845001f091e734bfb7724cc0",
          8532: "d280cc04bb2c591ba08b7bc26af0df6b",
          8714: "77aa7078d31ba3508bdffec1e4975f05",
          8755: "290c1ae1cd72ab313861421eb3628c82",
          8880: "35ab49bbd2e40c467314bb10f37e0589",
          8970: "eb220f9a0179472a65abbed23d74b234",
          9022: "bebb1e8b6cf60b5781969bde8d18b1e4",
          9028: "a3982256c6377971785e9c18837741d9",
          9126: "32668ec58f90861eb4bb560303ed9b4a",
          9377: "f76fd49f16f0b0809ed0fbd3e4f38f9b",
          9474: "e5f9dc5c0d9a11dcf372fc124634c943",
          9540: "bfc3883fdfdd5fc595ed3da88fa1b895",
          9615: "a99b26039626b3a251bfe6bfe0f18da2",
          9642: "50404cbfd74b09033646ff43eba414ed",
          9936: "fdefd48d1b477cd0b64e43a2f51143c0",
          9990: "df988ed5c1a090c0dc4eaf71933804da"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, c) => {
          if (t[e]) t[e].push(a);
          else {
            var r, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var i = o[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + d) {
                  r = i;
                  break
                }
              }
            r || (b = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, s.nc && r.setAttribute("nonce", s.nc), r.setAttribute("data-webpack", f + d), r.src = e), t[e] = [a];
            var l = (a, d) => {
                r.onerror = r.onload = null, clearTimeout(u);
                var c = t[e];
                if (delete t[e], r.parentNode && r.parentNode.removeChild(r), c && c.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: r
              }), 12e4);
            r.onerror = l.bind(null, r.onerror), r.onload = l.bind(null, r.onload), b && document.head.appendChild(r)
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
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), s.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                t = (e, d, t, f, b, o) => {
                  try {
                    var n = e(d, t);
                    if (!n || !n.then) return b(n, f, o);
                    var i = n.then((e => b(e, f)), r);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    r(e)
                  }
                },
                f = (e, a, r) => t(a.get, c[1], d, 0, b, r),
                b = a => {
                  c.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(s, c[2], 0, 0, ((e, a, d) => e ? t(s.I, c[0], 0, e, f, d) : r()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, c) => {
            c || (c = []);
            var r = a[d];
            if (r || (r = a[d] = {}), !(c.indexOf(r) >= 0)) {
              if (c.push(r), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var t = s.S[d],
                f = "@rockstargames/modules-core-newswire-article",
                b = (e, a, d, c) => {
                  var r = t[e] = t[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : f > b.from)) && (r[a] = {
                    get: d,
                    from: f,
                    eager: !!c
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var r = s(e);
                    if (!r) return;
                    var t = e => e && e.init && e.init(s.S[d], c);
                    if (r.then) return n.push(r.then(t, a));
                    var f = t(r);
                    if (f && f.then) return n.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (b("@foundry/react-v1", "1.28.2", (() => Promise.all([s.e(6035), s.e(8532), s.e(7854), s.e(3085), s.e(2229), s.e(4853), s.e(2781)]).then((() => () => s(47854))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(3717), s.e(4394), s.e(2229), s.e(5966), s.e(4324), s.e(8110), s.e(2654)]).then((() => () => s(88110))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(3717), s.e(7531), s.e(4394), s.e(8532), s.e(4246), s.e(2229), s.e(6188), s.e(6682), s.e(5966), s.e(1788), s.e(2440), s.e(2860), s.e(3547)]).then((() => () => s(22860))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(3717), s.e(2229), s.e(5966), s.e(4324), s.e(5043), s.e(2440), s.e(6299), s.e(7568), s.e(3365)]).then((() => () => s(17568))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(2229), s.e(6188), s.e(6682), s.e(5966), s.e(4853), s.e(1788), s.e(7539), s.e(8714)]).then((() => () => s(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(2229), s.e(6188), s.e(6682), s.e(3855)]).then((() => () => s(46323))))), b("dompurify", "2.4.7", (() => s.e(561).then((() => () => s(20561))))), b("lodash", "4.17.21", (() => s.e(7868).then((() => () => s(17868))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(5794), s.e(2229)]).then((() => () => s(50556))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(2339), s.e(2229)]).then((() => () => s(12339))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), b("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), b("text-balancer", "1.0.5", (() => s.e(4864).then((() => () => s(74864))))), o(25136), o(29441)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
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
                var r = d[0],
                  t = r < 0;
                t && (r = -r - 1);
                for (var f = 0, b = 1, o = !0;; b++, f++) {
                  var n, i, s = b < d.length ? (typeof d[b])[0] : "";
                  if (f >= c.length || "o" == (i = (typeof(n = c[f]))[0])) return !o || ("u" == s ? b > r && !t : "" == s != t);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= r) {
                        if (n != d[b]) return !1
                      } else {
                        if (t ? n > d[b] : n < d[b]) return !1;
                        n != d[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (t || b <= r) return !1;
                    o = !1, b--
                  } else {
                    if (b <= r || i < s != t) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < d.length; f++) {
                var p = d[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, c) : !u())
              }
              return !!u()
            },
            d = (d, c, r) => {
              var t = d[c];
              return (c = Object.keys(t).reduce(((d, c) => !a(r, c) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var r = a[c],
                    t = (typeof r)[0];
                  if (c >= d.length) return "u" == t;
                  var f = d[c],
                    b = (typeof f)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && r != f) return r < f;
                  c++
                }
              })(d, c) ? d : c), 0)) && t[c]
            },
            c = (e => function(a, d, c, r) {
              var t = s.I(a);
              return t && t.then ? t.then(e.bind(e, a, s.S[a], d, c, r)) : e(a, s.S[a], d, c, r)
            })(((e, a, c, r, t) => {
              var f = a && s.o(a, c) && d(a, c, r);
              return f ? (e => (e.loaded = 1, e.get()))(f) : t()
            })),
            r = {},
            t = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => s.e(7868).then((() => () => s(17868))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(6188), s.e(6682)]).then((() => () => s(46323))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => s.e(5794).then((() => () => s(50556))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              2973: () => c("default", "dompurify", [1, 2, 4, 1], (() => s.e(561).then((() => () => s(20561))))),
              92440: () => c("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(6188), s.e(6682), s.e(4853), s.e(1788), s.e(7539), s.e(9540)]).then((() => () => s(69540))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(7568).then((() => () => s(17568))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(2860).then((() => () => s(22860))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => s.e(8110).then((() => () => s(88110))))),
              56840: () => c("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => s.e(7854).then((() => () => s(47854))))),
              57770: () => c("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(2339).then((() => () => s(12339))))),
              97384: () => c("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4864).then((() => () => s(74864)))))
            },
            f = {
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
            s.o(f, e) && f[e].forEach((e => {
              if (s.o(r, e)) return a.push(r[e]);
              if (!b[e]) {
                var d = a => {
                  r[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete r[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var f = t[e]();
                  f.then ? a.push(r[e] = f.then(d).catch(c)) : d(f)
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
              var r = new Promise(((d, r) => c = e[a] = [d, r]));
              d.push(c[2] = r);
              var t = s.p + s.u(a),
                f = new Error;
              s.l(t, (d => {
                if (s.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var r = d && ("load" === d.type ? "missing" : d.type),
                    t = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + r + ": " + t + ")", f.name = "ChunkLoadError", f.type = r, f.request = t, c[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, r, t = d[0],
                f = d[1],
                b = d[2],
                o = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (c in f) s.o(f, c) && (s.m[c] = f[c]);
                b && b(s)
              }
              for (a && a(d); o < t.length; o++) r = t[o], s.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(45408), s(55974)
      })())
    }
  }
}));