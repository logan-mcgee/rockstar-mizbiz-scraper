! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "775a2419-993b-4f01-9dc7-95d7c76549a7", e._sentryDebugIdIdentifier = "sentry-dbid-775a2419-993b-4f01-9dc7-95d7c76549a7")
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
                  "./index": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(9122), d.e(9665), d.e(3962), d.e(1333), d.e(2229), d.e(6188), d.e(6682), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(88468))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(1426), d.e(1269), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(636), d.e(495)]).then((() => () => d(90495))),
                  "./types": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(9122), d.e(9665), d.e(3962), d.e(1333), d.e(2229), d.e(6188), d.e(6682), d.e(5966), d.e(4853), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(11485)))
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
          131: "bfc25d13dcea1e1280c107719a2ff5bc",
          188: "027c1759994e7df910c47da746aaffbd",
          278: "b173b0bd0458720f09f7147a2c1da76a",
          299: "6ad1515c2381a456d9ea62e92e09bb73",
          314: "2bbc4118ef6480d9c7c4c4094ef4d22b",
          495: "3df235d3a051cc5bda3d696b2131937b",
          561: "955604d5fb3feac46fa0d7918114ea11",
          636: "843cc40e7b5721e661fe51bd9a348d6c",
          662: "38476583508eaae5ef05c1a373649366",
          721: "ecdcc60a665fc3f894604dbc521ffa17",
          824: "d54d4751ff404afe65ea7ceb828bd5d0",
          907: "7c8f56e95617cd94306708040cb635c1",
          1054: "284da2967f71686dc4e3b0e96c2903a9",
          1242: "98ceb1cf68564386ad3ea873375533d3",
          1269: "828b41361058c48dbbbfeced3997b2c0",
          1324: "b1fb80aa527d2a50c9d4f736f51299c6",
          1333: "609e968d45f5724d6394bf1fc34b47e5",
          1426: "96add173d0d0e56336e30850ab65521e",
          1667: "dd464bab44e3dd78815912041d1fc870",
          1673: "24f3195cfa12b15231e967a9353b60b4",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1793: "27a7507b927d9c23e00f2b6bcd0ff8d2",
          1822: "9cc917e73c7a12cdbbc6de755a366d4a",
          1868: "ac9917bfc0e987e30549272c1ddf306c",
          1962: "6e9e770617d6701574a3342d174c9044",
          2024: "11a68a501a6e32ab83b4e194ab71bd2c",
          2156: "ae673f023baab259776fb7d822b0f151",
          2171: "04a284da3f93dd4424655b7a9ee10640",
          2221: "08aa13a4d61d3d7df439a29b6d6eaef5",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "b7b3990e83fb849836accddaababd2b9",
          2339: "47258398ae0a2ba1be2db5e980cc2e3b",
          2347: "9fed1b85b1babc9fe896a9e4efd98d25",
          2365: "649f4d3fb3109af29ca85cf46daa2109",
          2398: "e6da8584434d86f1a1a1ce4e6fee1ad2",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "78423aedb8f935b7daff961bd81d247f",
          2642: "ec64ea696705499bd12eee1d3ad00b2a",
          2654: "c174b2d305d16aa96efe3fae624e20ba",
          2678: "acf7104859d504237b0fbb2a9ca82f2d",
          2781: "ce28734ef5abda467a53737048904d08",
          2860: "56135f1ff122523e6b0e561fcc6d253a",
          2864: "3e70f1934f0f9ba92ef517def514c616",
          3034: "51bbc5ee22aad0a8f1ff29002372b12a",
          3197: "1ba4ee557d95b1e65883ff48a0af5097",
          3241: "0b8b5f93527a8e1f384c4400acfe0eae",
          3343: "3eb32556466f77b66d0af8807e64919b",
          3365: "a6970fefa61e243610ceb64a54cc9b6a",
          3370: "18f455da53fff71a09bb60293937178a",
          3447: "0ab8eb9b037e7ab860d2bec3e302923c",
          3475: "e7621933ad19950f784bf6ea3e8a22ee",
          3486: "e53f4e17c50c6ef90ea8087bcb14da93",
          3547: "512a060d7263cdc6568c5e8fe4a8a3e9",
          3550: "947fee744361e8489312606ff26b64a6",
          3557: "3296a24efb42d0db977d5eba04fe417a",
          3697: "dfd17f9489514740ce958ac34f0fac77",
          3717: "c61f2d4059c62b9d8cb048777aa27ea6",
          3855: "44ec35fa3794c8efb5c38b890098ffc1",
          3885: "8c1e69ff71c47bfc5e1b9169c96147df",
          3941: "163c00f71775bbd79cc321f58b5caf75",
          3962: "970fa32d19982a0c47229b0309412873",
          4011: "18f6dbfb6b7bff4ae7570b046f917725",
          4018: "bae110bb62addf1b13f01bb56f2ec68f",
          4054: "a5d1e5dbfa31db6b342576a2e9cb75ee",
          4324: "4be16699c3ec1e56eb94c1b2fa389be2",
          4378: "77211f1311adb5a605d33b1af3209a38",
          4394: "d7d49d78e454fb50ad7b766528da10e5",
          4528: "72107e3f17cf9f82e2285914f6584733",
          4621: "59e5fe96d32b3c8441c83546a149c242",
          4700: "823647de18b5e285a87521ac4f8ab4b8",
          4710: "4538d780c9973d2fef2b43e238d2f47e",
          4731: "e78128701e56237ae06b77af85426713",
          4799: "ada9cc32d6402fdcc3017a877486928f",
          4851: "391bfba0fcb409ff78b84a0f64360df6",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "1833b1838330131a2acd4a08320d62be",
          4864: "32a8f232cf8c9f2928052d641c439f74",
          4913: "751ea5ad759a2137a67d72cb12695446",
          5018: "62fedc271a25496a0d812ce276a804b2",
          5019: "43c89b31d62bfcf7c51263f4ceb75dc8",
          5043: "866194797aec070224b8d30de33dddc2",
          5142: "c25400884b7d2899fbc98c05017a83d5",
          5233: "109de2ab3ff7e72025f902cb35936a2f",
          5254: "5b1394cccbcda161a28e06d949604fbb",
          5259: "f978b6b622add4e101c79b9434d3817d",
          5530: "c8b48606e617fa476df0d2dfa89519b5",
          5639: "e53dc1686e704801bc44ef975b41ba2a",
          5663: "5d2ad27200c3181fb295b3a9adf911c5",
          5742: "316ecced3afb2352740b5032161856c9",
          5794: "946dd1d7cc6b5c26b85bc759f1f77008",
          5830: "eda4f01012b6217870618a3698218f64",
          5832: "fee1dcbdb49e18784083b23b32a40602",
          5833: "acdb76ba36eebff9221bd64c16e3311f",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "df3243c722afa59258780975deefbabe",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "f784f80b529ef14a195f639a660889b9",
          6280: "e198fd9971a988f8d8476a6e46f3aa34",
          6285: "f1dfd451b02020d9146b3236dbcacdec",
          6299: "bfef46dfcd46750dd506012bbf76a629",
          6361: "f617b1f67fe7483dd9d5d8dd1d96b16b",
          6536: "5f5da2002b975f765b7d78edbed5845f",
          6664: "f7c6bcaf800e24560217c92a5cb38a4e",
          6682: "9dd84518922999863f9f8c7af8a66106",
          6879: "d6a10134aa3e435db2ba42d56ee63f0f",
          6891: "d0c989eb3f28f0bf7a00834dabf50dcd",
          6997: "524652a3e088a7847a3b7f6513342dc8",
          7010: "797d70f39d0ffaab9768fdcca3f2ef31",
          7073: "9493964bd5efb051ef9c24bb3bf3a1b7",
          7339: "ce19d87ff8695307f73a6bd44e99fc1e",
          7436: "7529f9d81ad8da41112aa900fe64a2f7",
          7452: "a2d1c43272584c72046fac0301c083f5",
          7453: "4ad885fc48d802a2baec7b94e1b5e06d",
          7531: "76ef7067a0fb10dfb300d30b8381723c",
          7539: "67cba960a86e16c5c71ad73e1016e382",
          7568: "21e530d54f379de27bdeb7252ca8301b",
          7868: "d236832f8a6e70a43f5a12d9e7976950",
          7970: "f6844c3701d09a5c634e345a3a1db119",
          8110: "7d7d56dcf562e7b4acfce961ba6d59a9",
          8272: "4d11f64bda7b1cc93f81cb719ed21fd5",
          8391: "a4fc9a9bf55ebe5951f2c3f78a2d5717",
          8714: "f9ff5e45a28c170192db9e5390ba3221",
          8755: "09c60624b76cc5cbb6fafa738985f46e",
          8880: "7b44ba70af440bb98bbb33f3abf939f3",
          8970: "e5205ed2890a87b520fb33c6872835e5",
          9022: "46aefcc6b349fe30bdeca1eff61795dd",
          9028: "6366b572bbca6dc95e16a7a58edcbcdc",
          9122: "f770eff416f5505369086ef406816b08",
          9126: "3d5c005350c35f2499e848f23b265487",
          9214: "c8dfc4c2e7302985a2bddac6aa81bd7c",
          9377: "cb42be27c249e3f84756cce4b221a93e",
          9540: "e6240d85d14e1e2626f3f54da9733690",
          9615: "6e2b697c6e83c90dcb9998cd81ed1c02",
          9665: "a503befa9b79077bf3175568f4ce63b3",
          9873: "f6e041066ae98c549b41f1a9a98f7302",
          9936: "5ed8ead1d79c204d7eca5fa9234ee65f",
          9990: "2c040c7134c7cc63fb806bdd3d26f561"
        } [e] + ".js", s.g = function() {
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
        }), e), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, c) => {
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
              56840: () => c("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => s.e(1793).then((() => () => s(81793))))),
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