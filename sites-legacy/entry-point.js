! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "45e8ef3a-e6c3-4ceb-ae9a-ce2a0309e776", e._sentryDebugIdIdentifier = "sentry-dbid-45e8ef3a-e6c3-4ceb-ae9a-ce2a0309e776")
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
        var e, c, t, d, r, b, o = {
            49293: (e, a, f) => {
              (0, f(31789).w)(1)
            },
            31789: (e, a, f) => {
              const c = f(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = c(f.y.meta.url, e)
              }
            },
            23358: (e, a, f) => {
              f(49293)
            },
            90569: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var c = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, t = 0, d = c.length; t !== a && d >= 0;) "/" === c[--d] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var r = c.slice(0, d + 1);
                return f.protocol + "//" + f.host + r
              };
              Number.isInteger
            },
            58639: (e, a, f) => {
              "use strict";
              var c = {
                  "./bootstrap": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(9491), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(3298)]).then((() => () => f(13298))),
                  "./index": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(8312)]).then((() => () => f(58312))),
                  "./site-routes/Bully": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(7975), f.e(6208)]).then((() => () => f(96208))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(7975), f.e(6128)]).then((() => () => f(16128))),
                  "./tina": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(7975)]).then((() => () => f(17975)))
                },
                t = (e, a) => (f.R = a, a = f.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                d = (e, a) => {
                  if (f.S) {
                    var c = "default",
                      t = f.S[c];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[c] = e, f.I(c, a)
                  }
                };
              f.d(a, {
                get: () => t,
                init: () => d
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
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var d = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var r = 2 & f && a;
            "object" == typeof r && !~e.indexOf(r); r = c(r)) Object.getOwnPropertyNames(r).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(t, d), t
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, f) => (i.f[f](e, a), a)), [])), i.u = e => "js/" + {
          131: "a03e61ff6501c947b84ba81a6a43d226",
          241: "62a7b5a94275a2ff15bf6f7f6a38282a",
          278: "8708da621b98f4a441fc849d525a2eb7",
          299: "addd8b3a5a69e9072eaf870d41c871af",
          314: "2d4c4cb18f42fa22243fe70a87c6feda",
          662: "8e6e352e09960011efdca2c726e5bbac",
          707: "0d1052588146bad1aea1b64a3495fb80",
          824: "d1e3b57f5798a746a32f475294848986",
          907: "7bf3381671b07b4eae9f05bc41c10e5c",
          1029: "1a8383fa15a2a3618a961d01ef9813fc",
          1041: "d9276402073f24e8a31743fd5291c2a1",
          1054: "a7ed0c1a150c7679a778d341828bd591",
          1095: "a0fd6f11e0940902d1ca203726ec855d",
          1242: "c0d3ca6e4f6d2425f22d4ef69fd4d16f",
          1604: "2068bb3e00d5023f5dd7654d0e17bdf4",
          1822: "ea69d8e0a7854d531d8939697b4dc1cd",
          1868: "fb2bb3166a331247e262d3d3519aed20",
          2156: "2470f4409cec4fd8bfeb9f4e8799ed90",
          2171: "3f445acc7049c359d4b7d859ab4fa0a7",
          2221: "e32da160903fe18ebf4d663f2a463dcf",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "fc3ed2cf78d41625ebefd0b657f0427e",
          2283: "287cc0f631ff43ecd4a4bb8ce4895e48",
          2347: "b084813ce24516728f05d827a44889b5",
          2365: "e2960805f7617e7f75f593b639e29b0e",
          2398: "4b09755eae111c3e7518581e6c3dfae4",
          2440: "c30750136d805475662f793509d9f4b5",
          2457: "f9aa8adf06d05b1f074e3157dfe99dab",
          2466: "8540aed00003c91a7468cf17ca60ed87",
          2642: "4f6c8d44d589fffc69cf5caf9b495b11",
          2678: "135e34f6b2abab63a126d6d5fc3ffca9",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2864: "05010c24bce0d12ec4fe92c98bf3fcb9",
          2907: "a73227d7ecbfd1245743bed6f38be0a4",
          3001: "de5d80f514b91bdcdb1c85a40e63f614",
          3034: "a1a9529609f4790ed6b23f51fdedb554",
          3131: "ab1c06de7488fd408351b8f1af3ecb42",
          3197: "42a92ec631aae6e0584f9ce8c2b83345",
          3217: "66b9e4b9e7fc04a2dbebe0efd5fca1cd",
          3298: "aa08bce77b69a0040a73ae0b4e503693",
          3343: "5f9aa8d84dd8d758df4a2bcc3b5dc05c",
          3360: "9b9dc0b526000591d8c3d58aea8f323d",
          3370: "23b385734e6d3df16f35ea6fb03a78c9",
          3422: "67ddef6b8f11cd1553060d4eac87d073",
          3457: "e29df46bebd317626554dcc5c1df3f1f",
          3475: "e3dcc08babb8d7816af1d05e8afd8450",
          3486: "e024b4ec7cff27ea992e95bd5b94d5d9",
          3697: "b48ecf754bd80052aeed20874fa526cb",
          3759: "c3a6e8ac515b33ca02091da095f0d1d8",
          3885: "f4937bb68d87530effea9dfed7259a8d",
          3941: "234ad11ca68f9aa93536656774c5c957",
          3954: "18e8fb1e33474c2c26eea965bd116b79",
          4011: "d4a9f37f9c0d7d9748a2b698d6b4b0a3",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4282: "7a48967cc00078b1a2fc8e10a10387f2",
          4528: "6e4fac5305cc9a02aabf4dd649e80464",
          4561: "0729f5b9c1dba230c43ea9e3a12abd6b",
          4621: "23702526e6c664809141bcd63f1f7834",
          4700: "c1688f3289969bcb46346c907d1e0486",
          4710: "feb24d3827683fd1599090fa504d9e42",
          4731: "3fac241ba2f3a1f991d344465d5e30c6",
          4799: "907d1f004e0bc122fcbab625b7484622",
          4838: "21105357447b0145bb1be33046ea4234",
          4851: "c21379e1f7712b5660f6e2c2e3280e45",
          4861: "bc10e8a6a4d4abb42e5c991458888ddb",
          4913: "8b9a3e0a20896bff663f624084900227",
          5018: "40cbc82fa157b73349992ffe575e99e3",
          5219: "9ceccce9a589bebe6f9a0ff979b781e5",
          5233: "b95170338e14380d1cbd00b7fdfdf529",
          5259: "c9497234505b29037d88a9fc0376713d",
          5309: "659882cd20845a0ae9fa5118f6588504",
          5483: "aad950f89c927b29a540159c05890ba0",
          5530: "935600b7c8329c72e7c938e7ae1e1a96",
          5563: "0328a642255d48a2834835c9342006a3",
          5639: "12db37589c68f3cfeba44da36a9882bb",
          5663: "a74b6dc6ffa9ba9a2dfcfc7184a78305",
          5742: "b92b08bcfb241fcf28b9ab3bf993e5d7",
          5830: "1c1d17c2184acbdeab5be4ed076305fa",
          5832: "2461365c26605559f6256a2347d8eada",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6091: "69de2892bd473938749847681e8d0ad5",
          6128: "3cd6abf91aca258e5aa575059d3e7e78",
          6208: "6ff5e8bf195c4f3281b92f28980b2fa4",
          6267: "cfd351d905653c03e1f5760bf6ca967d",
          6280: "45a2c2068ed38b4c46a406cea051966e",
          6285: "229580468bb87a76a2bbd7c48da93c37",
          6286: "8e73c728dc2fcbdb4e2510e6fa5e719b",
          6304: "43df097d2bdb97c85370dfa2f22a6f13",
          6361: "592766672a7bdbda3a81390dc738e498",
          6521: "774bb9aeb78dfbe0ded414c9e56c0099",
          6664: "e0889e84b631edaa47c6a8f9dd2eec4a",
          6723: "4ce372ad663048dafbec9c72a4b04e29",
          6832: "b5a64ac457c83d929b59c84e4706bbd1",
          6864: "b3107530d48414bde67db4aecba2751d",
          6879: "798a641f36628e58f54153cbce24069a",
          6891: "ef72e58f35583eeaecb537be913c0e57",
          6942: "bb2226a6a2d76513a458c3d07793143a",
          6997: "8857f098abe0ca55efc86d5e0de8ea56",
          7010: "016ee92ed6ea1af60ec32215c106620f",
          7070: "9edba16cd51b97a5f4f121e823a21e32",
          7073: "8e7200787eaa780276d8dbb90c0d3c7e",
          7082: "a97bdf43d1085ef9a66b9ca8f8735ec4",
          7093: "78a3b95a7abee5e0ebf2f3c1bbce2e9c",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7214: "189316e744b21d465468c23ca5c4f096",
          7360: "9cf0a994298578db4625741967177902",
          7436: "ad7fa06b12ed417da3db7be08df86b6f",
          7452: "6e546d74430c218414bc596658f2bb6e",
          7453: "38939c7242ae986c79f5a4f8a4f4d743",
          7512: "0e812e6d26ad6e86a858ec1a9ea28442",
          7600: "733d718f33cff7e24201f5139175b725",
          7944: "fa1b7a9394f92be61f7dffa2676b8cfb",
          7970: "aa40b62716560590c7259166193ecd9a",
          7975: "bf3c962de4860be430cefd4a771dca50",
          8272: "0554a374eea3fa0c78ccb739d007cc88",
          8312: "2220938ed99dbddcb27cbc1cdf562fd9",
          8384: "c3bc1c2aeff58f7cb170872f749b6a8d",
          8391: "5bbfb1213651cfcda6a344acc620fd2e",
          8432: "06b2d2ad4615e8d20a367f496f7d9027",
          8688: "c9c5cd45c6cac44524e53ffc3c3d5786",
          8755: "d23a2d039d28460a42b6cbc29f54a1b7",
          8880: "0149aa09eeb177fc8649a36ac523e8f3",
          8970: "7ade96eca671a78e922d2b6e937809d1",
          9022: "ede0f508e523f479e5ef97abc8da411d",
          9028: "d3796f6a422a677921ca36d7cc92630a",
          9126: "a3ad68a5457b3b8a14e78742713835f9",
          9130: "400c9ba919dc2abbffc8602d38b00890",
          9157: "803edbd8973ec8cd8dbe1a3b2d7435ee",
          9292: "47b9f66e39994736c9dc4261ae93a621",
          9377: "737be31e7280a740cd6e69e4ad54f5ca",
          9491: "27c6d99c4a7dc22b6c00df4be5de3869",
          9514: "932bd4503622e8a5806580d0ee06b442",
          9550: "1f3f38b853230acffcdaac1abd7f5787",
          9615: "4dfc53f8f7242c06a47a1729e01dd35f",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9931: "a0a537edcb6ba05739ab778f5dd59dee",
          9936: "f1520ed2478c8c92457955090d0c832c",
          9990: "1f605481bc07cf6c291fef665a5ab41d"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          241: "0e8c3daf5bd134f711f7cce3e8132c42",
          2283: "3405c066acfb7fc31a1afb5aed7efd97",
          3298: "37ab6b245efbddb48787831524851730",
          5563: "82b8e41eb90eae7db3adfb9fff54d045",
          6128: "52e55b769351b6e3f1602fe5d2baacd1",
          6208: "52e55b769351b6e3f1602fe5d2baacd1",
          7093: "8e17920391e5641f9c622dc8dd7dc600",
          7214: "cba233c36516a197957118284f18a45c",
          7944: "82b8e41eb90eae7db3adfb9fff54d045",
          8384: "d96a84d212a40669fbfb32a4dfb0e786"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, f, c) => {
          if (t[e]) t[e].push(a);
          else {
            var r, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + f) {
                  r = s;
                  break
                }
              }
            r || (b = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, i.nc && r.setAttribute("nonce", i.nc), r.setAttribute("data-webpack", d + f), r.src = e), t[e] = [a];
            var l = (a, f) => {
                r.onerror = r.onload = null, clearTimeout(u);
                var c = t[e];
                if (delete t[e], r.parentNode && r.parentNode.removeChild(r), c && c.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: r
              }), 12e4);
            r.onerror = l.bind(null, r.onerror), r.onload = l.bind(null, r.onload), b && document.head.appendChild(r)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {
          241: [31879],
          7975: [17523]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(r, e) && r[e].forEach((e => {
            var f = i.R;
            f || (f = []);
            var c = b[e];
            if (!(f.indexOf(c) >= 0)) {
              if (f.push(c), c.p) return a.push(c.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), i.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                d = (e, f, d, r, b, o) => {
                  try {
                    var n = e(f, d);
                    if (!n || !n.then) return b(n, r, o);
                    var i = n.then((e => b(e, r)), t);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                r = (e, a, t) => d(a.get, c[1], f, 0, o, t),
                o = a => {
                  c.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, c[2], 0, 0, ((e, a, f) => e ? d(i.I, c[0], 0, e, r, f) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, c) => {
            c || (c = []);
            var t = a[f];
            if (t || (t = a[f] = {}), !(c.indexOf(t) >= 0)) {
              if (c.push(t), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var d = i.S[f],
                r = "@rockstargames/sites-legacy",
                b = (e, a, f, c) => {
                  var t = d[e] = d[e] || {},
                    b = t[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : r > b.from)) && (t[a] = {
                    get: f,
                    from: r,
                    eager: !!c
                  })
                },
                o = [];
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(5483), i.e(2229), i.e(5219)]).then((() => () => i(87768))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(9514), i.e(8384)]).then((() => () => i(48122))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(7082), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(2283), i.e(4561)]).then((() => () => i(14561))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(4282), i.e(8432), i.e(1095), i.e(2229), i.e(9623), i.e(5966), i.e(3457), i.e(3422)]).then((() => () => i(41041))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(4282), i.e(7512), i.e(2229), i.e(5966), i.e(4281), i.e(3001), i.e(5563)]).then((() => () => i(55834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(4282), i.e(8432), i.e(2229), i.e(9623), i.e(3457), i.e(1029)]).then((() => () => i(93514))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(6091), i.e(2229), i.e(7145)]).then((() => () => i(96091))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2907), i.e(2229)]).then((() => () => i(12907))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(8688), i.e(2229)]).then((() => () => i(78688))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9931), i.e(2229)]).then((() => () => i(69931))))), b("graphql", "16.10.0", (() => i.e(6286).then((() => () => i(26286))))), b("prop-types", "15.8.1", (() => i.e(6723).then((() => () => i(76723))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(7360), i.e(2229)]).then((() => () => i(57360))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(2457)]).then((() => () => i(42457))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(21604))))), b("react", "18.2.0", (() => i.e(3217).then((() => () => i(23217))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var t = i(25136);
                  if (!t) return;
                  var d = e => e && e.init && e.init(i.S[f], c);
                  if (t.then) return o.push(t.then(d, a));
                  var r = d(t);
                  if (r && r.then) return o.push(r.catch(a))
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
              for (var c = f.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = f[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = f[1] ? a(f[1]) : [];
              return f[2] && (c.length++, c.push.apply(c, a(f[2]))), f[3] && (c.push([]), c.push.apply(c, a(f[3]))), c
            },
            a = (f, c) => {
              if (0 in f) {
                c = e(c);
                var t = f[0],
                  d = t < 0;
                d && (t = -t - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, i, s = b < f.length ? (typeof f[b])[0] : "";
                  if (r >= c.length || "o" == (i = (typeof(n = c[r]))[0])) return !o || ("u" == s ? b > t && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= t) {
                        if (n != f[b]) return !1
                      } else {
                        if (d ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || b <= t) return !1;
                    o = !1, b--
                  } else {
                    if (b <= t || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < f.length; r++) {
                var h = f[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, c) : !u())
              }
              return !!u()
            },
            f = (f, c, t) => {
              var d = f[c];
              return (c = Object.keys(d).reduce(((f, c) => !a(t, c) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var c = 0;;) {
                  if (c >= a.length) return c < f.length && "u" != (typeof f[c])[0];
                  var t = a[c],
                    d = (typeof t)[0];
                  if (c >= f.length) return "u" == d;
                  var r = f[c],
                    b = (typeof r)[0];
                  if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
                  if ("o" != d && "u" != d && t != r) return t < r;
                  c++
                }
              })(f, c) ? f : c), 0)) && d[c]
            },
            c = (e => function(a, f, c, t) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], f, c, t)) : e(a, i.S[a], f, c, t)
            })(((e, a, c, t, d) => {
              var r = a && i.o(a, c) && f(a, c, t);
              return r ? (e => (e.loaded = 1, e.get()))(r) : d()
            })),
            t = {},
            d = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(23217))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(21604))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(8432), i.e(9623), i.e(3457)]).then((() => () => i(93514))))),
              16565: () => c("default", "graphql", [1, 16, 9, 0], (() => i.e(6286).then((() => () => i(26286))))),
              2918: () => c("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(8432), i.e(1095), i.e(9623), i.e(5966), i.e(3457), i.e(1041)]).then((() => () => i(41041))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(5483), i.e(7600)]).then((() => () => i(87768))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => i.e(7360).then((() => () => i(57360))))),
              92440: () => c("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(7512), i.e(5966), i.e(3001), i.e(7944)]).then((() => () => i(55834))))),
              90660: () => c("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9931).then((() => () => i(69931))))),
              22738: () => c("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(4838).then((() => () => i(42457))))),
              57145: () => c("default", "prop-types", [1, 15, 8, 1], (() => i.e(6723).then((() => () => i(76723))))),
              2765: () => c("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(6091).then((() => () => i(96091))))),
              82849: () => c("default", "framer-motion", [1, 10, 12, 18], (() => i.e(8688).then((() => () => i(78688))))),
              84590: () => c("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(7214).then((() => () => i(48122))))),
              87330: () => c("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => Promise.all([i.e(2283), i.e(6942)]).then((() => () => i(14561))))),
              87052: () => c("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2907).then((() => () => i(12907)))))
            },
            r = {
              241: [2765, 82849, 84590, 87330],
              2229: [62229],
              2283: [87052],
              2440: [92440],
              2738: [22738],
              3001: [44853],
              3457: [16565],
              4281: [2918, 81788],
              5966: [95966],
              7145: [57145],
              9514: [90660],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(r, e) && r[e].forEach((e => {
              if (i.o(t, e)) return a.push(t[e]);
              if (!b[e]) {
                var f = a => {
                  t[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete t[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var r = d[e]();
                  r.then ? a.push(t[e] = r.then(f).catch(c)) : f(r)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, f) => {
              e[a] ? f.push(e[a]) : 0 !== e[a] && {
                241: 1,
                2283: 1,
                3298: 1,
                5563: 1,
                6128: 1,
                6208: 1,
                7093: 1,
                7214: 1,
                7944: 1,
                8384: 1
              } [a] && f.push(e[a] = (e => new Promise(((a, f) => {
                var c = i.miniCssF(e),
                  t = i.p + c;
                if (((e, a) => {
                    for (var f = document.getElementsByTagName("link"), c = 0; c < f.length; c++) {
                      var t = (r = f[c]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (t === e || t === a)) return r
                    }
                    var d = document.getElementsByTagName("style");
                    for (c = 0; c < d.length; c++) {
                      var r;
                      if ((t = (r = d[c]).getAttribute("data-href")) === e || t === a) return r
                    }
                  })(c, t)) return a();
                ((e, a, f, c, t) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = f => {
                    if (d.onerror = d.onload = null, "load" === f.type) c();
                    else {
                      var r = f && ("load" === f.type ? "missing" : f.type),
                        b = f && f.target && f.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = b, d.parentNode && d.parentNode.removeChild(d), t(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, t, 0, a, f)
              })))(a).then((() => {
                e[a] = 0
              }), (f => {
                throw delete e[a], f
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, f) => {
            var c = i.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) f.push(c[2]);
              else if (/^(2(229|283|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((f, t) => c = e[a] = [f, t]));
              f.push(c[2] = t);
              var d = i.p + i.u(a),
                r = new Error;
              i.l(d, (f => {
                if (i.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var t = f && ("load" === f.type ? "missing" : f.type),
                    d = f && f.target && f.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", r.name = "ChunkLoadError", r.type = t, r.request = d, c[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var c, t, d = f[0],
                r = f[1],
                b = f[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (c in r) i.o(r, c) && (i.m[c] = r[c]);
                b && b(i)
              }
              for (a && a(f); o < d.length; o++) t = d[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(23358), i(58639)
      })())
    }
  }
}));