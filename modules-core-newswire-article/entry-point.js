! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c7b79106-d107-4767-92e5-d9590ed4d2b9", e._sentryDebugIdIdentifier = "sentry-dbid-c7b79106-d107-4767-92e5-d9590ed4d2b9")
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
          131: "21da644a2a8e24b8e8564ae740d38af2",
          188: "e35902c9eb81f71d9ca67bd565a20dac",
          278: "cd0c6856f56bb650d707a4fe4397080b",
          299: "6224f3cc63bf91d814e922315779d1cb",
          314: "5633be0b9857377cae459e97f1a7f766",
          495: "6d0d65bcbb34317a69a7c298b79dc76c",
          561: "285dee51a96011f643af1eb565f16864",
          636: "4a24ef50437c7753295e6f2c774e161a",
          662: "c8b9354b78c2f265076470d6a97d4e54",
          721: "32739b6f9429dedc921f5a2c18121951",
          824: "2ae9825034e05a3816d9a80ef2f2313f",
          907: "62135f2e4cc757240efc20db60e1eee0",
          1054: "7c8ba1dcc0ae2cdbad77bae1de1d665e",
          1242: "a4758d390e2fecf0ef368c3748b02112",
          1269: "7776d8dfe0bf0aaf2e6a20b6f57626bd",
          1324: "452f71a0e72ad7ea2f23f47cada7615b",
          1426: "cfbf4b596c8944e64bc26d82d49bacf9",
          1667: "fd2fdc3a45eb20ee7afc6c258d59d7b6",
          1673: "668cade56dcb91733babb3b37b58ebc8",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1793: "c94f25f2659c5b3b62afe26e47895507",
          1822: "57c2b3c7c1e5a7ab9ef5b436619a0193",
          1868: "8b02b1bdd6dba0fc17fffb475e6203d5",
          1962: "31c3c8b7196fb9e7b34e44f81559bb72",
          2024: "0d89e9456be54ec875049f21a086b63f",
          2156: "35365bc644e695654f5661ecccbed34d",
          2171: "944c58dd0cf1d75b4209f6179faf9803",
          2221: "e9c940e4161ad65a004425145ed6cfd8",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "24cd7ae256fe065f0d53f581071c5116",
          2339: "c7c2467b70e28a9052511cc2f0f26a80",
          2347: "c245e51d33ec4ab939c10fdf2e5398b0",
          2365: "504551b6df04846927ef79a5690c377e",
          2398: "cf3a4956620aa8aaa07a64c737888c9a",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "a18ad7491f99abb19463439f1e8be3a7",
          2642: "e91fa650ff7e8a7e05c7cbe72be0147d",
          2654: "88f8c8b3b16f4f0af80cf74796b647a3",
          2678: "9a01c9d7fd7fc6f7a77c7c54899306aa",
          2781: "89a54afabe72b0c6e52a58d863f1822d",
          2860: "dd731e888fbadc62f8667063d5a36d52",
          2864: "c299ea47776035aa4b8aa3592cbd91d3",
          3034: "0dd97333232d8f25758aaaf4d01df109",
          3197: "a04db810438679d9de8126353fc4b0e8",
          3241: "703617d799d740c1660a44ef056c2031",
          3343: "24e0f4938c2d6da6912bf2120841e211",
          3365: "1133bc6dd884c238aff8db6b900d25e9",
          3370: "3b1725189231d62891ab12cc57fc268b",
          3447: "41f2a8ca9cf16522fb8dae2cebe8318e",
          3475: "2f1cb725e78945c07cfe9f1063b0c05d",
          3486: "bf3a206fcc6b6a026f32713970e78c32",
          3547: "169c8e93c5231174561a0145835223ed",
          3550: "8d5d10147af7c1e729eecf89471f20e3",
          3557: "0693adfe522517828e8757fcb658e6aa",
          3697: "276f5a92af2d933cd9ec562dca5772a1",
          3717: "7820be3b946f64d5b485764bf78cc430",
          3855: "0002aa9d95fc8d8b176bb599aca03ba0",
          3885: "834129c867dbb9f11be9d6d46acbdaa1",
          3941: "eb7f4d2499eb0f74c25305a63da069b8",
          3962: "1e6d1453b2ea32f9eab428eed0bfb39d",
          4011: "bb651499c6ac4a845fc17cb9556a1a51",
          4018: "477bfcbf97e99eddcae6d03fe22e882b",
          4054: "66e598b4fc2161ea9747054de80826fe",
          4324: "fb77fbe3221ea2dea2b23fbee4ca5650",
          4378: "cdef2f6031345c8b2b28fe437f6ef8ec",
          4394: "fe04e58b0850423a0993bc804dbfbaf3",
          4528: "d5b01772ff7530e1814d16cd0183cc32",
          4621: "7202d6a18944ecfeedfd20acf155f325",
          4700: "1b117774084658b8456e0a981743af29",
          4710: "38eea5625ff4061d631c4ab41a552fb7",
          4731: "ff334ff4b13d9513c9b3f9d37ab41124",
          4799: "e74a352ef8b51b48552bd361fb25e02f",
          4851: "525633d5c86cfa8149be594a0c4028ff",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "2b6567a68c8b7587564353c3dab3f3bf",
          4864: "6716529b57fdefa073723b02fdf4b641",
          4913: "909f9f0f1d90303e6c80b78aa04a549d",
          5018: "720f2f51a62bf4de90ff8746b493797f",
          5019: "71b5f8ef8337ea7f85325e1c7d51d168",
          5043: "c3413747a32fb378b5669437ff99c2cb",
          5142: "9a6cc76b10a61347ab0c9c77146623bc",
          5233: "5f2ba6a53b69c1ee387939c6b483a092",
          5254: "21fdb51af55ad7cab403dd2a58b22611",
          5259: "6863d7fafc0ed837f369d0e4241bf4d2",
          5530: "ee1eec0fe54164187eaf5737ee857b51",
          5639: "ff09a7f4922894a210ba657f95b80ed9",
          5663: "a29b7ba1555dbdb2e87d318a20b3da8e",
          5742: "5ec95dad769003ecc31110934b6a0134",
          5794: "0085665b4a29d8397dd48ae65fe004ce",
          5830: "e030c4c1e812512b27439e172019a4ac",
          5832: "26b18aea414978c54578af22f124a4c9",
          5833: "827045a6cb3b335d9dd5ccdc3e0cf510",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "ccf442c073eac7ac28a27b6f1711a13e",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "8c67755d4aa822b0463944133457303b",
          6280: "cc2c5facb10a8f593e0f8b449a54e136",
          6285: "513dfd5e9c065f42ddfe2495ca86c72f",
          6299: "378408584d566703fd4c8cd471bd7855",
          6361: "11c4547618ccb0b0c082459b77dc5bb2",
          6536: "51c60d149a8f214ffa086d6467b1c88c",
          6664: "df008cfccc169e43f1c49bdd62bd5032",
          6682: "a9c1e64e1651db2b3cbfac3ab36c1f6d",
          6879: "a87dc718513f4b3dafb1f5065a6ce3c3",
          6891: "dc036417bff8bcfe673aa813d5b22293",
          6997: "ec9cdc60acb95efa10e2ca1760ecf97d",
          7010: "69c0b3fee5da482af47078a1a637804f",
          7073: "06a9e75b50900a3b87db24143725e0f4",
          7339: "e6558b98690cc5a337104db7bec8f5d7",
          7436: "1004ac951fddf84b1fdecf1d4b86e1a6",
          7452: "4e8135cb2e3dcc7428c40a947f7182f5",
          7453: "80daa64e52ad34769d96bd4f2838fb9e",
          7531: "cdb5cca12fbc9a0fed4d520646c1e9d7",
          7539: "c948f0a44a487de3e95c1eab97f42262",
          7568: "eba37b0bc545de53f8176651e316411e",
          7868: "745e6fd930d4b1d7e7d1732b0dd6f63c",
          7970: "774ae08e532ea11625211721e96b63b4",
          8110: "8dc56da4f730ead92c474adff79cdfc8",
          8272: "2b09b53eaef69b2c95e1b036b2f11b57",
          8391: "7665d4c1c36cfd3bdfa97a66a80d38ca",
          8486: "932cf460370e5b357871fbfa37403ff0",
          8714: "d01539aa3495a518b8651a6c7f529309",
          8755: "279798423c81c2e9ef67ce24c8da3e54",
          8880: "19e048acbb63413918d22b05fe50bf65",
          8970: "48fe1b8184a932cb769140ea9e3b606a",
          9022: "f4e4c12f440fceca1ba5d67f33d83e9f",
          9028: "fd4ad2eb5b9cdcdef36e77ac5779aa9c",
          9122: "36c845e094885dda2da2b5a2b0fc4b92",
          9126: "836491c15536dca6b382a5f3a4ae5b20",
          9214: "b70ac6df16c2f3d64a32909ac8d53fa5",
          9377: "2e6b8449d1493a975e61f9d05d1a9786",
          9540: "36942e9c59308bf26ef40c72dd55383c",
          9615: "20b888d514b4cd344c2b8b4243c85c7c",
          9665: "e06963e858294a88565e1500a4d0fdd2",
          9873: "5b2754c5f65237aacfe184d8a2d69ca6",
          9936: "f457927435d3b743dae523ace06ac5f9",
          9990: "1d17b8cb576f564b684a2669516f4ded"
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