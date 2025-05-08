! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6a285ac5-d323-46dd-bdac-673015ed006d", e._sentryDebugIdIdentifier = "sentry-dbid-6a285ac5-d323-46dd-bdac-673015ed006d")
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
        var e, d, t, r, c, b, o = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const d = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, t = 0, r = d.length; t !== a && r >= 0;) "/" === d[--r] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = d.slice(0, r + 1);
                return f.protocol + "//" + f.host + c
              };
              Number.isInteger
            },
            58639: (e, a, f) => {
              "use strict";
              var d = {
                  "./bootstrap": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6944), f.e(5771), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9679)]).then((() => () => f(9679))),
                  "./index": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6944), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9978)]).then((() => () => f(79978))),
                  "./site-routes/Bully": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6944), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(818)]).then((() => () => f(30818))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6944), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(8830)]).then((() => () => f(58830))),
                  "./tina": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(6944), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349)]).then((() => () => f(22349)))
                },
                t = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      t = f.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => t,
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
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & f && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, i.d(t, r), t
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, f) => (i.f[f](e, a), a)), [])), i.u = e => "js/" + {
          131: "138b26c4634215c50b84f2f0b62b0a24",
          188: "167fd0f6b3a2df48ee80b8ade556a29e",
          278: "039454430f56906be7ab61280db2396c",
          299: "2bdeb0a7b890a5beaa4065c1e5e8d652",
          314: "c123cacad9d7007a4ef9f29efd5770ce",
          364: "5197ebcc3b6425f22dc13147c762d319",
          391: "138b144456725db7ba4ca7d77d4e9de2",
          542: "20851557750e02a2d480e8dbbc6cd0f7",
          662: "28e88e18e40ce9dddc9c83b233938680",
          721: "95a9399eb2028764ab063eefead4eeda",
          818: "7c36e34c6200cc490bb7ed5c3d703692",
          824: "7263f71265d34bcc76b7d18a6835803a",
          842: "5547a6a5ba01c82fc75c488f79bcc4e9",
          907: "6f518e86c911ec16ce3b227d8ddc9d6f",
          1054: "7c81bf714ab78f5947f43fe7814026f2",
          1242: "13f89a55e87eac1e0c528c82cd82168e",
          1324: "b089685ba6a7266b77af487d657a3115",
          1426: "ba069e76bbd5b58c063cbd78aa3da2bf",
          1667: "f074756acc0e53fb62fe5fc5c86d80f1",
          1673: "a85912ed2fdbd4c4cb37a46399ae4fdc",
          1720: "105b152120706c1f6cc75ead1c09e174",
          1822: "0c12927e9ccd050e26ea01f414fff4db",
          1868: "243f9d3928039529c2e563adb275c4ab",
          1962: "c453b062fd42634ca449aa04e5c3ddfa",
          2024: "cd929949541a6418d8d965bc9456c8ed",
          2156: "cfd0ad6cd345a138921789693b9891ac",
          2171: "fa04e60a423b9a02c070379e20ba20c3",
          2221: "6ebc525d94f9d4f7508f605f6645548d",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "c3b5fa5e5e69fe1d9e6c77e90f386079",
          2246: "2f0d4ccacde166c777ea14dc5ab5759b",
          2347: "515687845f88b2fa1f414243bbf96546",
          2349: "cd7ebac446d724abcff9f56d54775b65",
          2365: "e7c6b015e2b016dce5c118aff2796495",
          2398: "0c31e02f25db51a846c3200cd5d37070",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "3b4066c52d734813ad19feb366658552",
          2637: "c9e89e271f43e598c01d4bf7714a1d79",
          2642: "810f1f6563819af201f1fa2b1d763dcf",
          2678: "915ee82211694a703b8755258ee9a8ca",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "92cab44f8cd9dc1f2b16723f7e4a7f24",
          2781: "d9060eebe4d6e90857e60ecd92d8bf6c",
          2817: "7616f4ccb6ef8b1468b47ac31dc6f9f2",
          2864: "4a65c4ea94fb646b9758844d07ca55b1",
          3034: "8b15dba06978c1c7221467134fa885d2",
          3197: "f8131aedb231579e93df91949575ba58",
          3241: "9c3aa4290ac19bf84efd36028086703b",
          3343: "2154d1b99ba222d8020c939680bfd6e5",
          3370: "0a44f1cf21580a6e6624a33727b6d637",
          3447: "a9aaafbe62bab5b1a21f1fe8bde7c27d",
          3475: "ff8aa6bfd02ebb1b40d1076d05af0473",
          3486: "aaf85e1b732880bd9ca9f9da29175760",
          3557: "5de6a7fa3fa530bfaeb5251ca306e459",
          3697: "ae4b62d319b384235cc5e00620a1fb24",
          3855: "1fe6be2ce7a84b4331f7d1603e14f180",
          3885: "58ccf998bf226e4486ecdd938b441ff1",
          3941: "1db6220b49b8ab3bd2bbabc1c4151cbb",
          4011: "d2b60b027c8567450099dc3b2a8cec8e",
          4018: "c5f3fe100f5c4d40a958e68663e27be4",
          4054: "4f523d231428ce18b0e3656cd39a7247",
          4116: "cceed6fa67b33dc43d1a4786728287b9",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "7b31184fef488e110cd6e956d4a13c9c",
          4621: "9afc254139ad0cc47d581890235f92c6",
          4700: "994c28baf36673ae313362e48ceb1609",
          4710: "ea19711a525dbb815c81929a20164e3d",
          4731: "17f1775fa6ab92e111ad1ccfa8916098",
          4799: "10b4238f49058c243c727f35ff886223",
          4851: "cf368059d890fd80f0d50cf84a166e94",
          4861: "97ec7c9ab54cb88842b5845181b88a6b",
          4913: "62c6693ee09b722e5497f3b00f2964c8",
          4977: "276ffd70845ca086857174a817af8b97",
          5018: "545c9be8097c05ce715da92cf2ff3b29",
          5019: "5a81bff6351dfc194e89024d7ed0d1e6",
          5142: "0954f084a47bf98f2c9aab1c28849403",
          5233: "859d9cebcdf1e09513149090b1885a51",
          5254: "2779dfa4ca242ddbdd483dbe209db38b",
          5259: "7f3a411a3af6daccc4fb28c48e27ea2d",
          5267: "3d61d66b95df694e263fdbc686302652",
          5440: "ac3fd4ee6c45d9fe1fa33aa963fdea3b",
          5530: "de6906d44e7ebb002609fdeb4c381169",
          5639: "1880f8522792b3bbe80789f4f7a07b33",
          5663: "f04bd2cd6e3582330fb358b3331dcba6",
          5742: "a674f9ca9950fe6d33bec8a740958ad4",
          5771: "e14f4187458c6f0f70a7db84d8466437",
          5794: "875293f90e0135256a0319d1f2926f39",
          5830: "82f8621fc62ba0869a863a0a7a94a59a",
          5832: "0ceafd8eeaf77b6d56805a57560fbf6c",
          5833: "279dd9a06a64d7418d30dec3797cfae5",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "356d18dad927d9b025691bf48b47c44e",
          6280: "f9047d88c65d458d706598f857d4472d",
          6285: "abbe0d710e40bab0584444974dd470f7",
          6361: "ae0515c779cedc637903d5c36c768995",
          6383: "b767bb40ae9d5c2f2dfd9f221195c9b8",
          6536: "db46ce54dfa94a7a5afa3d97bb4317cd",
          6664: "182f8c6e38962de8c81db41b7c5faf80",
          6879: "3b66b100a54783f41cd48d1636b838ec",
          6891: "0fc8fef7b39fc1950342003bdd0b24b7",
          6944: "79d75f8bc146bfe36e2b0a942986a5b8",
          6997: "efae11ce2a8d5e6b686c4154e1538d2e",
          7010: "819a570ff35aea5f11394d6e00f4d634",
          7073: "1dabc9ac2a3224617a3140df2ce608c2",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7339: "d8b00b78247f245e6922cb303ebff5f3",
          7436: "e0e151ebc5a4af42f7c1b511f4cfd906",
          7452: "482602a64ed1d94e256ac7611892803d",
          7453: "14171661feb6376380a9260050933b2d",
          7783: "5876e48c954cafd7b505e795907cb0e5",
          7868: "f128280b65a6bf076aea78437725b41f",
          7970: "ea8e96ce62f298d47adfcac036b4bd24",
          8156: "631001ef7db868ef2efa7cc793f21b4f",
          8272: "97d47efaf9e568968b344fa0fadaeecf",
          8391: "fa2d25a5fea54f8e7e10e7cb4481f191",
          8714: "5ab053c7ce96f74cd9b91ba9ae1aa4c4",
          8755: "fbc9dc1ee17d3f8b4754035919671f8a",
          8764: "ad45b96129822f6c269333d1e9c4ca42",
          8830: "45c362a374dc00cdf4e249d31eff555e",
          8880: "b2a2fed3a8d9be9435e810a33e82cff4",
          8970: "7003a551f421cd19ee95641d83e59918",
          9022: "74758bf6aec87f6a48bcfefb5c5f9919",
          9028: "586fdb054ba9e10e67ebb905723057b5",
          9126: "b27d819eb3a3c47a2f5a78d3ddf35d7f",
          9214: "f03c6774296270abfc1253e121ce3222",
          9235: "f3bf5275296b07ae60aeee255b7c0ea7",
          9377: "e6bf0b9b1f073c9a2512cc852a4ea772",
          9540: "b1ae7a6c92bedc628bc43422d052b50f",
          9615: "c0593456771127ad45dde7f510170d7b",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9679: "e8788af45188b941372c757651c7b918",
          9840: "49cd6bade9e03290f2488cdb845928af",
          9873: "de062c25243e73b398f9bed7af69efe1",
          9936: "739ebd84d511e8d59d5a3f1b7a9b0fc6",
          9964: "915bdf22bef5c69a36b9e205f2fc4804",
          9978: "d35478324cc1784e795361c2da7fb168",
          9990: "d9e8c023a2f159769520053233ceb747"
        } [e] + ".js", i.g = function() {
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/sites-legacy:", i.l = (e, a, f, d) => {
          if (t[e]) t[e].push(a);
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
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", r + f), c.src = e), t[e] = [a];
            var l = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(f))), a) return a(f)
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
            var d = b[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), i.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                r = (e, f, r, c, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, c, o);
                    var i = n.then((e => b(e, c)), t);
                    if (!o) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => r(a.get, d[1], f, 0, o, t),
                o = a => {
                  d.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(i, d[2], 0, 0, ((e, a, f) => e ? r(i.I, d[0], 0, e, c, f) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, d) => {
            d || (d = []);
            var t = a[f];
            if (t || (t = a[f] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var r = i.S[f],
                c = "@rockstargames/sites-legacy",
                b = (e, a, f, d) => {
                  var t = r[e] = r[e] || {},
                    b = t[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : c > b.from)) && (t[a] = {
                    get: f,
                    from: c,
                    eager: !!d
                  })
                },
                o = [];
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(842), i.e(364), i.e(2781)]).then((() => () => i(29592))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(4116), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(7783), i.e(9964)]).then((() => () => i(27783))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(2229), i.e(9623), i.e(5966), i.e(2246), i.e(391)]).then((() => () => i(2772))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(7868), i.e(1426), i.e(2229), i.e(5966), i.e(4281), i.e(5267), i.e(8714)]).then((() => () => i(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(2229), i.e(9623), i.e(2246), i.e(3855)]).then((() => () => i(46323))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(4977), i.e(2229), i.e(7145)]).then((() => () => i(24977))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(542), i.e(2229)]).then((() => () => i(10542))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2637), i.e(2229)]).then((() => () => i(72637))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229)]).then((() => () => i(19235))))), b("graphql", "16.10.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(2817).then((() => () => i(72817))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(5794), i.e(2229)]).then((() => () => i(83413))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(6383)]).then((() => () => i(56383))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), b("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var t = i(25136);
                  if (!t) return;
                  var r = e => e && e.init && e.init(i.S[f], d);
                  if (t.then) return o.push(t.then(r, a));
                  var c = r(t);
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
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (f, d) => {
              if (0 in f) {
                d = e(d);
                var t = f[0],
                  r = t < 0;
                r && (t = -t - 1);
                for (var c = 0, b = 1, o = !0;; b++, c++) {
                  var n, i, s = b < f.length ? (typeof f[b])[0] : "";
                  if (c >= d.length || "o" == (i = (typeof(n = d[c]))[0])) return !o || ("u" == s ? b > t && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= t) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= t) return !1;
                    o = !1, b--
                  } else {
                    if (b <= t || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < f.length; c++) {
                var h = f[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            f = (f, d, t) => {
              var r = f[d];
              return (d = Object.keys(r).reduce(((f, d) => !a(t, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var t = a[d],
                    r = (typeof t)[0];
                  if (d >= f.length) return "u" == r;
                  var c = f[d],
                    b = (typeof c)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && t != c) return t < c;
                  d++
                }
              })(f, d) ? f : d), 0)) && r[d]
            },
            d = (e => function(a, f, d, t) {
              var r = i.I(a);
              return r && r.then ? r.then(e.bind(e, a, i.S[a], f, d, t)) : e(a, i.S[a], f, d, t)
            })(((e, a, d, t, r) => {
              var c = a && i.o(a, d) && f(a, d, t);
              return c ? (e => (e.loaded = 1, e.get()))(c) : r()
            })),
            t = {},
            r = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(9623), i.e(2246)]).then((() => () => i(46323))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => i.e(5440).then((() => () => i(55440))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(9623), i.e(5966), i.e(2246), i.e(2772)]).then((() => () => i(2772))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => i.e(5794).then((() => () => i(83413))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(1426), i.e(5966), i.e(5267), i.e(9540)]).then((() => () => i(69540))))),
              90660: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9235).then((() => () => i(19235))))),
              22738: () => d("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(8764).then((() => () => i(56383))))),
              57145: () => d("default", "prop-types", [1, 15, 8, 1], (() => i.e(2817).then((() => () => i(72817))))),
              2765: () => d("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(4977).then((() => () => i(24977))))),
              82849: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2637).then((() => () => i(72637))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(364).then((() => () => i(29592))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => i.e(7783).then((() => () => i(27783))))),
              87052: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(542).then((() => () => i(10542)))))
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
              7145: [57145],
              7783: [87052],
              8156: [2765, 82849, 84590, 87330],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(t, e)) return a.push(t[e]);
              if (!b[e]) {
                var f = a => {
                  t[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete t[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = r[e]();
                  c.then ? a.push(t[e] = c.then(f).catch(d)) : f(c)
                } catch (e) {
                  d(e)
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
            var d = i.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(2(229|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((f, t) => d = e[a] = [f, t]));
              f.push(d[2] = t);
              var r = i.p + i.u(a),
                c = new Error;
              i.l(r, (f => {
                if (i.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + r + ")", c.name = "ChunkLoadError", c.type = t, c.request = r, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, t, r = f[0],
                c = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (d in c) i.o(c, d) && (i.m[d] = c[d]);
                b && b(i)
              }
              for (a && a(f); o < r.length; o++) t = r[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(45408), i(58639)
      })())
    }
  }
}));