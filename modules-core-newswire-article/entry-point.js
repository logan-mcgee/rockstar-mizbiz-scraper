! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5a3d1a0e-f1de-4986-b39d-dffc227ec49d", e._sentryDebugIdIdentifier = "sentry-dbid-5a3d1a0e-f1de-4986-b39d-dffc227ec49d")
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
        var e, f, r, t, b, o, n = {
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
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, f = 0, r = c.length; f !== a && r >= 0;) "/" === c[--r] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var t = c.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            55974: (e, a, d) => {
              "use strict";
              var c = {
                  "./index": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(7366), d.e(4246), d.e(6330), d.e(2052), d.e(2229), d.e(6188), d.e(6682), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(88468))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(1426), d.e(1269), d.e(2229), d.e(6188), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(636), d.e(495)]).then((() => () => d(90495))),
                  "./types": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(7366), d.e(4246), d.e(6330), d.e(2052), d.e(2229), d.e(6188), d.e(6682), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(11485)))
                },
                f = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      f = d.S[c];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => f,
                init: () => r
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
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          s.r(c);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, s.d(c, r), c
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "53779a9adba031677592c9dd360c1420",
          278: "d8afc32b3f56aea53c6c705faef41dc5",
          299: "e68668e459e73e8f0fe9957ca9c4520b",
          314: "fde60895381771a9c91479ac8319b252",
          377: "a21acad70213df38283d73c9295f8072",
          495: "c263decc09f2241e74d800b0f8fc5eab",
          561: "c51271b5b9bf5ca545688765c1947555",
          636: "e9fa1c4cb9462096c9ba7d89bfe2bdc1",
          662: "cd38f70a9a8bb2f4a3668227550b5cb8",
          721: "f2836d81cb27c5ee9158a9f9f39f9787",
          824: "b447f6a7519201d1501d57a55adae82f",
          888: "fdfafe76ca8ee491fd99f7f1be91704e",
          907: "751aba651c453da0a49824aa82581646",
          969: "65ca055e5df65292820e6aff69cfd45e",
          1054: "6998c4106470387e63b054673f061bf4",
          1242: "df4c88e39263960e8d598527e318e361",
          1269: "450d0580a6b933a37d1de20991567a2a",
          1426: "82af5abb03a2e9ea8a9e74ab8dbce9eb",
          1607: "9bd8eaafdcde519c5a9c85063b60ccd6",
          1673: "47cf7a946ff7a244c819c9845354ba30",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "1843e4496ed8a85dc018a21d2324d7d2",
          1868: "82e1d075f331400b6b9afb13edb6d5de",
          2024: "5cebf1e8c7f5223dcf9c64dcb629fd55",
          2052: "a77df4bbb2bac4d84c48812d64aece73",
          2156: "9731e2865a1c56d9366a7ae30e590b58",
          2171: "a63a0efe389a861d6c7b83817c447db8",
          2221: "0181ab7c549ab3b964eca87c3492b3af",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "9fab80da3563d87372fa13135e6f3a44",
          2339: "d952bfc0549f9162d68d6d6b90d8922e",
          2347: "9067bbd1852683f52d0d129155f93b5a",
          2365: "781a9b67b68242f572a80f972ef7958a",
          2398: "ee095dc802dfcd32816cdeb3c3548b30",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "4cf8fa8e8fd7170247032f927e36c83c",
          2642: "5934a4d00d2e5b4fee66a5467792f69e",
          2654: "f27226ee8c2b8851b1fa814c7dafa1e1",
          2678: "155b8ecd544bc6d27aac0fd4248e90f0",
          2781: "95f51451d47285a8607506c2cb83082c",
          2860: "1b8c43ecb25d4cd714825d92aaf0c807",
          2864: "4fc94c40cd56462b3776d2a0e36d09ca",
          2941: "6391567365f7dc25d85c0a368a2837d1",
          3034: "694a2804fa0133860d806109883df727",
          3197: "59acf824be3f87f58fa43e3aeda29fd0",
          3343: "163b096995ae1b145a9c1ceaaa049c9c",
          3365: "149d9f007c38e3c4715db001bbdbe2e2",
          3370: "f1a3322beb70e3c504f2c5bd22baa2b5",
          3447: "f2d55e4d9b20592aa828d20cec309b73",
          3475: "64370218dda170af900cf6c467e74f11",
          3486: "c8519580f34ad1611fbff3f787ee6937",
          3547: "40d47d42c52442181e374f1b92364e2d",
          3550: "b5395c72e76fd93432d2950094bd01d9",
          3622: "fdb362598a429457a59e4220cc9626c1",
          3697: "823053aae96e5d509902974f3d27ec3b",
          3717: "36e94a683a1532af9f1f6356561ce9cf",
          3855: "ca5b924f1add2cba8c14408bc721ad80",
          3881: "a631c5eda3f52036394f430c28dd9cab",
          3885: "af840140f8a82c4a483aae4629248107",
          3941: "ae2f9e185dc804da764d5a55f41d0658",
          4011: "071b33c9b33f0444a4744c2e83275765",
          4018: "b7f3bb98f0fea53dfbc536f5f593d41c",
          4054: "3a7f2eca60164ec7589edaf539abd584",
          4186: "f6bfe983dad232cc1d6d516f0ca47bab",
          4220: "7e0660ec505ab29f4a8f2b8793d8ff6d",
          4246: "f19f6db0fa3d7e0479efbbff7bd0f577",
          4324: "49a31043bcc2533b29d3354b5eeb9c9a",
          4378: "9080525e434b7209b77647841095adc3",
          4394: "41e35a034e9c787b4a6da0627c8428bf",
          4528: "51140cd5feb2db372905dc610ab6033a",
          4621: "5a69476333341d3897a420ff4fef395c",
          4700: "c89c43c7b5a6056d9cebbf0dbbeb34a8",
          4710: "9380276d333caa575306531f65c1233b",
          4731: "38cfe2790b00cf1e3359fbb04abad7f6",
          4799: "edf6250115b1186da0c36a4309e72e0c",
          4851: "65eb80741ebf3361ac1d603dd8ed82b9",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "d229c0f9d6cec60dcb0026342d941cfe",
          4864: "f7cddb5b5aff38cc9144988a39e2481c",
          4913: "a43968f7c91e9f8d79275a3db91e5523",
          5018: "28efac5ef33f0a700f3d928dc30ed088",
          5043: "e0f670719c010ac824c86991a2e80abe",
          5233: "532ec6442f4dff0d0e998bcd7f3ee37d",
          5247: "b3567d87a845001bc8e13d62fdefa68c",
          5254: "5ba999beb0c380f4ab74efa635a00a50",
          5259: "3938341327f0743909f3ecc59bab11e2",
          5530: "31132a77413a96fa7291b1d7bc83a274",
          5639: "8389a6082c8e9a4cd409308d9e4ad1f8",
          5663: "ed2e13901f12c6bda471bfa48dd1aae8",
          5742: "8f143febec78880819433549ef00b38a",
          5794: "5ff902331e46405d8f899b869d651da5",
          5830: "71f9044d886dc153dcc983bd77e38dd0",
          5832: "6c3615969a33ab6bfd23ca7cf6d80dd1",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "b7e9fd76768f980e00ece04228a02128",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "7d8878cc2e3c9431529794eadd443130",
          6280: "ede98cf6fe6a967374951c1c637d7273",
          6285: "e5b21821208a2d196343ca3c1cb88c41",
          6299: "dc3ff67ed78a857d05f88f6f034a214a",
          6330: "502b4a9cb90abee6066ebd0062a6d540",
          6361: "5ceb445db3adbfa65a14c1f3bf505371",
          6664: "2661e439f029328cdc8022c44caa4eda",
          6682: "f7c858b291eb9e03fb5b27279b8735f7",
          6879: "e8af6c64886a2ca7cc74be48bd24e6ab",
          6891: "c44cd75dce379570c408a52d2f75e17a",
          6940: "f0ee201500f5fc1493e867b22d82813b",
          6997: "6c6f99f36e9086f55ce3eb917028df06",
          7010: "d74e83a46e93b4e82f838c22736b5a3e",
          7039: "39f5b7a8f10a2daa6364eaa7ee2b3952",
          7073: "f7de53c4c2f6717c0419c64a4fad83b1",
          7366: "d48baa7432fdfe6c2c01a10ecbf965f8",
          7436: "e35260ffad323033923e417d6e196e4a",
          7452: "95c186e516dfd452c56e317654959697",
          7453: "3b6e3684d7556e2c29805c69413a66b5",
          7531: "9acc0722fce60e4e4339c72b89883c2d",
          7539: "e6d57b47e636312986f3e19959521472",
          7568: "3c1dfff5acdc7e50f1832930f407af34",
          7868: "f51aea2934ee98524ad79ba226312597",
          7970: "35f170bf5c68802c4804b47c921c2703",
          8110: "233171f2b36b606ea9337f4ef96316fb",
          8272: "2e92ae15b2f817c6290ad623d1acdc00",
          8391: "e1872a7985c7529df8197731942fd366",
          8714: "804fede5a576ebc754bbff532f609b64",
          8755: "4f1508c48daa1b8ffdf51ed7c7aa60e1",
          8880: "dff3f0f4292031254ca7ad32919d01cd",
          8970: "eafe9df20b660c50befb7c3f16a708f8",
          9022: "f92e99bd4f91da6b2380ca91574791d7",
          9028: "bc4ad7a2a7d4db8e72a5ddb22aecfd84",
          9126: "7c74c113651c2a7bead70af0f211a842",
          9377: "05d01445bff7de359e004faf398fa964",
          9474: "5a10860bec217f4cb65603803b772c74",
          9540: "fb74ac3d0b7c8d8b058bbb3f10ef35d3",
          9615: "ded486a0acffcd4b91be47cfa74c1253",
          9642: "87cc0a937af2cfec04b10abcbb9ffbd6",
          9936: "d2c64b1b795ed7b1b2ea7e730dcd51e9",
          9990: "b1fa7d0cc404eedafc84601c07b26d3a"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var i = o[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + d) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var l = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var c = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), c && c.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), b && document.head.appendChild(f)
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
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), s.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var n = e(d, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), f);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                t = (e, a, f) => r(a.get, c[1], d, 0, b, f),
                b = a => {
                  c.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(s, c[2], 0, 0, ((e, a, d) => e ? r(s.I, c[0], 0, e, t, d) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, c) => {
            c || (c = []);
            var f = a[d];
            if (f || (f = a[d] = {}), !(c.indexOf(f) >= 0)) {
              if (c.push(f), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var r = s.S[d],
                t = "@rockstargames/modules-core-newswire-article",
                b = (e, a, d, c) => {
                  var f = r[e] = r[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (f[a] = {
                    get: d,
                    from: t,
                    eager: !!c
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var r = e => e && e.init && e.init(s.S[d], c);
                    if (f.then) return n.push(f.then(r, a));
                    var t = r(f);
                    if (t && t.then) return n.push(t.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (b("@foundry/react", "1.25.4", (() => Promise.all([s.e(6035), s.e(7366), s.e(3881), s.e(6330), s.e(2229), s.e(4853), s.e(2781)]).then((() => () => s(23881))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(3717), s.e(4394), s.e(2229), s.e(5966), s.e(4324), s.e(8110), s.e(2654)]).then((() => () => s(88110))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(3717), s.e(7531), s.e(4394), s.e(7366), s.e(4246), s.e(2229), s.e(6188), s.e(6682), s.e(4853), s.e(5966), s.e(1788), s.e(2440), s.e(2860), s.e(3547)]).then((() => () => s(22860))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(3717), s.e(2229), s.e(5966), s.e(4324), s.e(5043), s.e(2440), s.e(6299), s.e(7568), s.e(3365)]).then((() => () => s(17568))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(2229), s.e(6188), s.e(6682), s.e(4853), s.e(5966), s.e(1788), s.e(7539), s.e(8714)]).then((() => () => s(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(2229), s.e(6188), s.e(6682), s.e(3855)]).then((() => () => s(46323))))), b("dompurify", "2.4.7", (() => s.e(561).then((() => () => s(20561))))), b("lodash", "4.17.21", (() => s.e(7868).then((() => () => s(17868))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(5794), s.e(2229)]).then((() => () => s(50556))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(2339), s.e(2229)]).then((() => () => s(12339))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), b("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), b("text-balancer", "1.0.5", (() => s.e(4864).then((() => () => s(74864))))), o(25136), o(29441)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
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
                var f = d[0],
                  r = f < 0;
                r && (f = -f - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, s = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= c.length || "o" == (i = (typeof(n = c[t]))[0])) return !o || ("u" == s ? b > f && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= f) {
                        if (n != d[b]) return !1
                      } else {
                        if (r ? n > d[b] : n < d[b]) return !1;
                        n != d[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (t = 1; t < d.length; t++) {
                var p = d[t];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, c) : !u())
              }
              return !!u()
            },
            d = (d, c, f) => {
              var r = d[c];
              return (c = Object.keys(r).reduce(((d, c) => !a(f, c) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var f = a[c],
                    r = (typeof f)[0];
                  if (c >= d.length) return "u" == r;
                  var t = d[c],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && f != t) return f < t;
                  c++
                }
              })(d, c) ? d : c), 0)) && r[c]
            },
            c = (e => function(a, d, c, f) {
              var r = s.I(a);
              return r && r.then ? r.then(e.bind(e, a, s.S[a], d, c, f)) : e(a, s.S[a], d, c, f)
            })(((e, a, c, f, r) => {
              var t = a && s.o(a, c) && d(a, c, f);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            f = {},
            r = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => s.e(7868).then((() => () => s(17868))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => s.e(5794).then((() => () => s(50556))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(6188), s.e(6682)]).then((() => () => s(46323))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              2973: () => c("default", "dompurify", [1, 2, 4, 1], (() => s.e(561).then((() => () => s(20561))))),
              92440: () => c("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(6188), s.e(6682), s.e(4853), s.e(1788), s.e(7539), s.e(9540)]).then((() => () => s(69540))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(7568).then((() => () => s(17568))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(2860).then((() => () => s(22860))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => s.e(8110).then((() => () => s(88110))))),
              57770: () => c("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(2339).then((() => () => s(12339))))),
              96711: () => c("default", "@foundry/react", [1, 1], (() => s.e(3881).then((() => () => s(23881))))),
              97384: () => c("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4864).then((() => () => s(74864)))))
            },
            t = {
              1788: [81788],
              2229: [62229],
              2440: [92440],
              3550: [15310, 20206, 23608, 57770, 96711, 97384],
              4853: [44853],
              5043: [2973],
              5966: [95966],
              6188: [16188],
              6682: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(t, e) && t[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete f[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(c)) : d(t)
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
              var f = new Promise(((d, f) => c = e[a] = [d, f]));
              d.push(c[2] = f);
              var r = s.p + s.u(a),
                t = new Error;
              s.l(r, (d => {
                if (s.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + f + ": " + r + ")", t.name = "ChunkLoadError", t.type = f, t.request = r, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, f, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in t) s.o(t, c) && (s.m[c] = t[c]);
                b && b(s)
              }
              for (a && a(d); o < r.length; o++) f = r[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(45408), s(55974)
      })())
    }
  }
}));