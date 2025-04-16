! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d3211fa2-3d97-4392-a307-7fc084b4e27f", e._sentryDebugIdIdentifier = "sentry-dbid-d3211fa2-3d97-4392-a307-7fc084b4e27f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var f = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, d, r, c, b, o = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const t = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = t(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var t = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, d = 0, r = t.length; d !== a && r >= 0;) "/" === t[--r] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, r + 1);
                return f.protocol + "//" + f.host + c
              };
              Number.isInteger
            },
            58639: (e, a, f) => {
              "use strict";
              var t = {
                  "./bootstrap": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6756), f.e(5771), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9679)]).then((() => () => f(9679))),
                  "./index": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6756), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9978)]).then((() => () => f(79978))),
                  "./site-routes/Bully": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6756), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(818)]).then((() => () => f(30818))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6756), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(8830)]).then((() => () => f(58830))),
                  "./tina": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6756), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349)]).then((() => () => f(22349)))
                },
                d = (e, a) => (f.R = a, a = f.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var t = "default",
                      d = f.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[t] = e, f.I(t, a)
                  }
                };
              f.d(a, {
                get: () => d,
                init: () => r
              })
            },
            25136: e => {
              "use strict";
              e.exports = f
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var f = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var r = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & f && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, i.d(d, r), d
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, f) => (i.f[f](e, a), a)), [])), i.u = e => "js/" + {
          131: "5f84a89f775d31a22805454c99e45035",
          278: "4198c5b738ca90406f148a0a0c8193f4",
          299: "54b19bf74232acde751a0434ac721cdf",
          314: "beed3cb66da379dd6180efd8e8690c6d",
          364: "8181c469d956eb480c59b7b487043c5c",
          377: "c7168117b6c6a63e729bfb23ac97de80",
          391: "40a142e1ef5f9b7562d37ff7f5b18209",
          542: "984595fcdeead4d5a3c350d45fcb4ddb",
          662: "4438ed0ea3813fc7ad226511c3f78c54",
          721: "2a0d1d82373487e26848bcf3dcf9ecf8",
          818: "3a88ab071147818b61734e74db1e0529",
          824: "37f2641c854c269403affd0f6c82c0e5",
          842: "36686c8f0c8e2188ba88058aa005182d",
          888: "146005ed282910fb9841988742eac147",
          907: "8db7e3a933ab5e1ed992f102489dba58",
          969: "f0a08074fd731593c339d27a5f4f6729",
          1054: "1ec31078ce6aba6b8bd1c9b7ebb696d1",
          1242: "576b8bfc108cd3356c77c2eb97e67637",
          1426: "37110765dcb8b7875a893aa9e3c9e35e",
          1607: "983c9432edc4e38e3ad6ae82f5c910cd",
          1673: "4ae0e8250e018388cc2ff99c14363644",
          1720: "73a0133f0f229fc0a8ae53a5373e0a43",
          1822: "8ac99f112226ea248ea8bf5c036dcceb",
          1868: "fc4e162c9130653f7cf936f03cc8eb56",
          2024: "214240918a8ec11c386a716b8a526c2a",
          2156: "d0ed38cb53d0520287dc163d8f9e178c",
          2171: "840c9b114425f1a4986d4fc8adb993bf",
          2221: "6b716b888b625115e805966b96e07bd4",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "639bbbcee1027273d8111349afb92bab",
          2246: "ee724bd6a9d3cae8ce521c27163060ed",
          2347: "258199f757fbc82f9410258b52a06b3e",
          2349: "8d1e01f7a676c067b2d29f8a929b5378",
          2365: "166fb34a7cbb88bf1dc3625213984dd2",
          2398: "4bb1a761e262d994a33d44dac5ee5740",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "f9577b4dde9a9fedc04e05e8efc25ee5",
          2637: "fdf2de6bc17dc59497106fa423f8bea0",
          2642: "9d63675ddcc941df475bf2bcfe11e917",
          2678: "1478744a7b9c5e5d90a3546faf898833",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "6ff8c297a9b7d7a8bc0f9d4f49b2458b",
          2781: "749fe0eb23400878e652969b9eb679ae",
          2817: "05fde63ff73fe9e02768030769d9bc61",
          2864: "3cb7d1d68953b4be07ccaecb1b091f5a",
          2941: "4246009f860a5a311e00b03906fe6ab4",
          3034: "a632cd65ee7bce165ccd6010dcaece08",
          3197: "7248d1c26f6a65a32ce6bb480155fda8",
          3343: "841e8b119abc7ec849b417b9a4965aa7",
          3370: "873ec67717299ba5fac62eaea2dea447",
          3447: "58138f4dd703c2e5cd006bf662e61cd1",
          3475: "c68b5a5034824a4c21b05f42288cc8e5",
          3486: "b9c623ff28437f140da703388b3bbe38",
          3622: "71e40b10d5f0663a6a81230f015b5a54",
          3697: "2e606edbcbf1cc9c2a937a6bf906dade",
          3855: "a07e103cf84a6e751092a47dc4fcab0a",
          3885: "c1787533df6b56dd27c82be7f351e4db",
          3941: "b1730bc1b520187a6a508906b3a1b6e5",
          4011: "5e464df01dd25e53f1b536b346cfbff8",
          4018: "2df15ef60bb2444ce3302b2cd262280e",
          4054: "44a93ed9e761a4f2e82fe38440ba9aed",
          4116: "0c00234e592d6eb29c3e7b53574a245a",
          4186: "520d3d95426e9eeb41d04fbf21b4daea",
          4220: "16e2560c8d67fd88e21f85833a94d673",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "ddfaa6aa19ab1c5c7b5cd99333b94f00",
          4621: "08902335bbf1bf1e31ffb5412998c130",
          4700: "1dde7a2a787d513038d5647e40cf178f",
          4710: "59928880e7a3822cfee0c984363f713b",
          4731: "e9cc2312c9232159bdd37f3094293753",
          4799: "9f02a97eb6011e58c38b6aff3e24ee32",
          4851: "43b155f49421a3861ca9212ac287bd31",
          4861: "880b72a1ca9b418c3ac688a5bb6c7594",
          4913: "894f28c52da06aee5a954142a08b59f1",
          4977: "672344d0258cd29391b48a10e7e68b4a",
          5018: "5f54546aeb2c595dce3e8153ffe64758",
          5233: "0f7c41bff4ef6f1a8f8db4abbaacefd7",
          5247: "dccdbb4ef34912083895a3b6b7c383e6",
          5254: "b2bc36410b3ec4478e2b281580eb10c1",
          5259: "17301ac5e83b9b574205d2717630f08d",
          5267: "a486a0ec92b5798ac2c4cf3fab877c5d",
          5440: "115698ac962662a4612ca9811a3d2d98",
          5530: "4527339050ffb40771bfef80e2d3a1f3",
          5639: "0e3bddf29fd92889334bc14cbafbde04",
          5663: "00e9c40fd9ce5bf56e0de75ef154f4fe",
          5742: "776f8e5fbf747b310756c6d4ab1d7915",
          5771: "e2a32cd16e121e770fc754d76f17505d",
          5794: "d62cc4c9857099b3bddb8d9d36b7313d",
          5830: "06d5f8332710ee6781f58e2f34fd7685",
          5832: "e7de1f5060988ccda36dbc7ef1670874",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "7054f94702b15ed62af0459e953ecda0",
          6280: "180401447a87ebbfaa068338a5466f44",
          6285: "a1730057554749db1691f512195a6e64",
          6361: "3eddbe1f8949a9d79e23966495cab8b5",
          6383: "1d56479ca27a38615f0466e2d3e54aa9",
          6497: "3292a807df9aa026d5b66dd832fa780e",
          6664: "fcb712202914b00b022f788ff32a61e7",
          6756: "a23a80897e6334a873df4776a77142b2",
          6879: "7dd2bf0674a5a696da86cac335250edc",
          6891: "affde8eecbd132a1987a372f3fe821e3",
          6940: "3df329f710870f3ef3768d3cd047bc77",
          6997: "5202a90df5b63815b4adc2fc8a317ca4",
          7010: "98dbafc76fa185597774508c11bc7778",
          7039: "7cd581741b957510d662705136660bc8",
          7073: "0ff7819c822574f8ffae16cd476f63c5",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7436: "77c9add54e935a0853e711a265c954b6",
          7452: "e1a3b0a77b7c103358ae75cf7deaebd4",
          7453: "7f850efc34d2d36f67b2717d28517af2",
          7868: "5122a92a7f1628cd9706f1fef3520513",
          7970: "366cd83a2d84093af5cbbbb33b8f064b",
          8156: "488425dd17ce1c3e6c71b9378311f449",
          8272: "6a0d0774e61a024215b21edf45a20f79",
          8391: "9d1366c75add74bcb569d4b523d12039",
          8714: "69b35261401f51259972fed218a5dd6a",
          8755: "b4a21b4d4cbca59347993bac656a7668",
          8764: "78bf5f957e0d21fe3c39863db7e629e6",
          8830: "954b85cd467b662170b8224bae269bd2",
          8880: "b89b9ba14dd39dc45171c08a4c05f6d2",
          8970: "bf97fc4aa1d577e61dda250e500b0d4f",
          9022: "dfd0d10370c101fdc90804bdc0c42b5e",
          9028: "679c461a258efefc37a78d801494565b",
          9126: "ef1bcd873234f3bd41e244b636dd9223",
          9235: "2e697a51e80351794f6f94b80556f350",
          9377: "deaf71e6fc90d096c32e6a7952f31e85",
          9474: "c663c22d7450e80e5813b5fc85c62c37",
          9540: "6cd95f8dd43ccce22891805498850f09",
          9615: "b8d0f8ce600e7b663318fe7a7f7c4ed8",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9642: "6bf0f56eaad2facb12c841df5eeada62",
          9679: "78feb9463e9b676737834734c7728c77",
          9840: "5d25788bbcc840e523fdbb37235da27b",
          9936: "2e95106238200a9746fcba65fd4047e6",
          9964: "566f6347c0c3e3291b3a456f13b80abf",
          9978: "7a67457b260f8b4e248e2b8a22ed6749",
          9990: "31cd4f389d4d753a5b0c1cbb1f219615"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, r = "@rockstargames/sites-legacy:", i.l = (e, a, f, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + f) {
                  c = s;
                  break
                }
              }
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", r + f), c.src = e), d[e] = [a];
            var l = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), b && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          2349: [17523],
          8156: [31879]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var f = i.R;
            f || (f = []);
            var t = b[e];
            if (!(f.indexOf(t) >= 0)) {
              if (f.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                r = (e, f, r, c, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, c, o);
                    var i = n.then((e => b(e, c)), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => r(a.get, t[1], f, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(i, t[2], 0, 0, ((e, a, f) => e ? r(i.I, t[0], 0, e, c, f) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, t) => {
            t || (t = []);
            var d = a[f];
            if (d || (d = a[f] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var r = i.S[f],
                c = "@rockstargames/sites-legacy",
                b = (e, a, f, t) => {
                  var d = r[e] = r[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : c > b.from)) && (d[a] = {
                    get: f,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(842), i.e(364), i.e(2781)]).then((() => () => i(29592))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(4116), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(6497), i.e(9964)]).then((() => () => i(86497))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(2229), i.e(9623), i.e(5966), i.e(2246), i.e(391)]).then((() => () => i(2772))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(7868), i.e(1426), i.e(2229), i.e(5966), i.e(4281), i.e(5267), i.e(8714)]).then((() => () => i(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(2229), i.e(9623), i.e(2246), i.e(3855)]).then((() => () => i(46323))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(4977), i.e(2229), i.e(7145)]).then((() => () => i(24977))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(542), i.e(2229)]).then((() => () => i(10542))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2637), i.e(2229)]).then((() => () => i(72637))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229)]).then((() => () => i(19235))))), b("graphql", "16.10.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(2817).then((() => () => i(72817))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(5794), i.e(2229)]).then((() => () => i(83413))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(6383)]).then((() => () => i(56383))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), b("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var d = i(25136);
                  if (!d) return;
                  var r = e => e && e.init && e.init(i.S[f], t);
                  if (d.then) return o.push(d.then(r, a));
                  var c = r(d);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[f] = Promise.all(o).then((() => e[f] = 1)) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var t = f.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = f[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = f[1] ? a(f[1]) : [];
              return f[2] && (t.length++, t.push.apply(t, a(f[2]))), f[3] && (t.push([]), t.push.apply(t, a(f[3]))), t
            },
            a = (f, t) => {
              if (0 in f) {
                t = e(t);
                var d = f[0],
                  r = d < 0;
                r && (d = -d - 1);
                for (var c = 0, b = 1, o = !0;; b++, c++) {
                  var n, i, s = b < f.length ? (typeof f[b])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(n = t[c]))[0])) return !o || ("u" == s ? b > d && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= d) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < f.length; c++) {
                var h = f[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, t) : !u())
              }
              return !!u()
            },
            f = (f, t, d) => {
              var r = f[t];
              return (t = Object.keys(r).reduce(((f, t) => !a(d, t) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var t = 0;;) {
                  if (t >= a.length) return t < f.length && "u" != (typeof f[t])[0];
                  var d = a[t],
                    r = (typeof d)[0];
                  if (t >= f.length) return "u" == r;
                  var c = f[t],
                    b = (typeof c)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && d != c) return d < c;
                  t++
                }
              })(f, t) ? f : t), 0)) && r[t]
            },
            t = (e => function(a, f, t, d) {
              var r = i.I(a);
              return r && r.then ? r.then(e.bind(e, a, i.S[a], f, t, d)) : e(a, i.S[a], f, t, d)
            })(((e, a, t, d, r) => {
              var c = a && i.o(a, t) && f(a, t, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : r()
            })),
            d = {},
            r = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(9623), i.e(2246)]).then((() => () => i(46323))))),
              16565: () => t("default", "graphql", [1, 16, 9, 0], (() => i.e(5440).then((() => () => i(55440))))),
              2918: () => t("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(9623), i.e(5966), i.e(2246), i.e(2772)]).then((() => () => i(2772))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950))))),
              44853: () => t("default", "react-dom", [1, 18, 2, 0], (() => i.e(5794).then((() => () => i(83413))))),
              92440: () => t("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(1426), i.e(5966), i.e(5267), i.e(9540)]).then((() => () => i(69540))))),
              90660: () => t("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9235).then((() => () => i(19235))))),
              22738: () => t("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(8764).then((() => () => i(56383))))),
              57145: () => t("default", "prop-types", [1, 15, 8, 1], (() => i.e(2817).then((() => () => i(72817))))),
              2765: () => t("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(4977).then((() => () => i(24977))))),
              82849: () => t("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2637).then((() => () => i(72637))))),
              84590: () => t("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(364).then((() => () => i(29592))))),
              87330: () => t("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => i.e(6497).then((() => () => i(86497))))),
              87052: () => t("default", "framer-motion", [1, 10, 12, 18], (() => i.e(542).then((() => () => i(10542)))))
            },
            c = {
              842: [90660],
              2229: [62229],
              2246: [16565],
              2440: [92440],
              2738: [22738],
              4281: [2918, 81788],
              5267: [44853],
              5966: [95966],
              6497: [87052],
              7145: [57145],
              8156: [2765, 82849, 84590, 87330],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var f = a => {
                  d[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete d[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = r[e]();
                  c.then ? a.push(d[e] = c.then(f).catch(t)) : f(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            8106: 0
          };
          i.f.j = (a, f) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) f.push(t[2]);
              else if (/^(2(229|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((f, d) => t = e[a] = [f, d]));
              f.push(t[2] = d);
              var r = i.p + i.u(a),
                c = new Error;
              i.l(r, (f => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + r + ")", c.name = "ChunkLoadError", c.type = d, c.request = r, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var t, d, r = f[0],
                c = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                b && b(i)
              }
              for (a && a(f); o < r.length; o++) d = r[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(45408), i(58639)
      })())
    }
  }
}));