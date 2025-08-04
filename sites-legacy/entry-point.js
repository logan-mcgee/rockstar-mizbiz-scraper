try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "def48330-9aa2-4d6a-940c-c2e4315d84be", e._sentryDebugIdIdentifier = "sentry-dbid-def48330-9aa2-4d6a-940c-c2e4315d84be")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, f, d, c, n, o = {
            9944: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            37389: (e, a, r) => {
              r(21998)
            },
            58639: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => Promise.all([r.e(9489), r.e(2519), r.e(2209), r.e(8673), r.e(4670), r.e(6806), r.e(2229), r.e(9623), r.e(5966), r.e(1045), r.e(4853), r.e(4281), r.e(7964), r.e(2440), r.e(6905), r.e(8619), r.e(7145), r.e(102), r.e(6426)]).then((() => () => r(66426))),
                  "./index": () => Promise.all([r.e(9489), r.e(2519), r.e(2209), r.e(8673), r.e(4670), r.e(2229), r.e(9623), r.e(5966), r.e(1045), r.e(4853), r.e(4281), r.e(7964), r.e(2440), r.e(6905), r.e(8619), r.e(7145), r.e(102), r.e(8333)]).then((() => () => r(88333))),
                  "./site-routes/Bully": () => Promise.all([r.e(9489), r.e(2519), r.e(2209), r.e(8673), r.e(4670), r.e(2229), r.e(9623), r.e(5966), r.e(1045), r.e(4853), r.e(4281), r.e(7964), r.e(2440), r.e(6905), r.e(8619), r.e(7145), r.e(102), r.e(2700), r.e(8019)]).then((() => () => r(8019))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(9489), r.e(2519), r.e(2209), r.e(8673), r.e(4670), r.e(2229), r.e(9623), r.e(5966), r.e(1045), r.e(4853), r.e(4281), r.e(7964), r.e(2440), r.e(6905), r.e(8619), r.e(7145), r.e(102), r.e(2700), r.e(8995)]).then((() => () => r(78995))),
                  "./tina": () => Promise.all([r.e(9489), r.e(2519), r.e(2209), r.e(8673), r.e(4670), r.e(2229), r.e(9623), r.e(5966), r.e(1045), r.e(4853), r.e(4281), r.e(7964), r.e(2440), r.e(6905), r.e(8619), r.e(7145), r.e(102), r.e(2700)]).then((() => () => r(2700)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            },
            82788: (e, a, r) => {
              const t = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          102: "7877c1f8e7c39fca9685f79f927c4c6c",
          114: "1bfa453ae20b47036b15605b5b6cb5cf",
          131: "1728b7cdba24112c639d57d5a7297cd1",
          278: "adc3ca711c13cbc1cbf4417a51b722e7",
          299: "7d96a98f016cb8f6c1c9e02111ab0c29",
          314: "6ee99e1e53f3a4584c0856d68d3a7b4a",
          377: "1f19c4d8473a51e104e1d45cf8efaf78",
          456: "4c8647f6a9c5745006b9cbcd24c4530e",
          614: "1435d4b3bf52bbb473c2f03b35813ba5",
          662: "530af8a6346b4d5228d3c13c252ef633",
          824: "993d6341bd817eb9f794fc75bd2438d0",
          844: "37432d8ea36939bbf625d9663fcd2bda",
          888: "5ce3d48a630ac2ba59fb6c89155c1dce",
          907: "72cd9e8e559ef2b36770d830f180a959",
          954: "ca8412d5dec66882010c21dd7c2666df",
          969: "8b3a5366da16fa5c5c3e29b5e495c932",
          1045: "df67ec18e5ac329aec16868e81c1ed67",
          1054: "ed7f5898f55f61b67c8eff7ec7278bce",
          1138: "a465e8b63e1c64d49655ab571fd568df",
          1154: "6ebbaf98829df2d938cbb770879bc874",
          1242: "2392239d2410173df7b52d7809a5def0",
          1594: "0056189533ea4de3b8eb348cc75bf1c3",
          1607: "b39d6da523fd3cf85274a2e6703dc4a3",
          1822: "f6d3bff95487f9eb37f21452a029fbe0",
          1868: "32040db9828070b305fc0b0aa6da3117",
          2014: "fe9f8b4181a1d44f917686423351840f",
          2156: "bcb10b505c77b862495290fb31a3b4bb",
          2171: "4a459d943d3a28cf8690e1967afb7ece",
          2209: "719f02680652f7fcefd42e5723b928ea",
          2221: "4c7af8cfe426aa0dee7f729cfe119df7",
          2243: "8a31456f69c723b37e1e8642d360d289",
          2315: "9190d2cee0c3725a4469c8708b145727",
          2347: "a837c6cedb1ddd7ae00005dbd76edc44",
          2365: "a183d19baa1da1fd9eda973f348ea35f",
          2398: "344bf0cf10bd38115954070813f25ba8",
          2466: "3891c18ac69c4d3809227e14c9b5eb2b",
          2519: "694184c35ab4acca756c333ac71d424e",
          2642: "801d84b2201f0c568dda4f5987427721",
          2678: "6a408103ab96254c5ec77a88511138cd",
          2700: "0cdef539b621bba73fce8514bf3a0979",
          2864: "4d35b4826b65992c47e9ac783523aac6",
          2941: "c4f3646a7b5007118a246afa93c74a05",
          3034: "4fe8437b63d4afa32115b86010c9395d",
          3197: "c6d7dc6d27678a7bc94a910d87342466",
          3343: "4408e54e730d508773c0940ac0f22b6c",
          3370: "a3f6ab454359f94f1e40d548f3261d89",
          3475: "1584f2ace6ce752130eb50352eb6a529",
          3486: "7a1c9c04f510c46db97d7cff29e24640",
          3622: "b6df0fe2332366c0397be7d23b31505e",
          3697: "e4fc8fa654def88500c714c7c967e99a",
          3851: "293e75f1be43b4cdc0d5001f0dd3c50d",
          3885: "2a6e1c88e702af58a2a298dd7cb7a064",
          3941: "86770030001e8500427b24f0c18cbb92",
          3963: "eb8ac5962da19e8d58706aa0e41ef2d1",
          4011: "7c1a4a1338435c50cba54274ca3b32c3",
          4186: "da5fe8b08f25330346545dfa9a97e555",
          4220: "c156311e4985f2bd8dac638afab15c06",
          4528: "bdf8f3ceb83fe56cdfbd717af00ee1e7",
          4621: "f20ebea9f2ddec2620fecc6f07dffbd6",
          4670: "f00121c831c78c4660093d02a1245725",
          4700: "5e5663c4d1fa6131c7048ab46bdb19d8",
          4710: "110678ad572274933f8178b603a2bc80",
          4731: "faca829d2c8671673ab41879f2a8b9cb",
          4799: "d0113c8c4e326eabd99d6dfa002717df",
          4851: "1c9ff8f95b149932a1bdbeaffba68147",
          4861: "2d1ca842ec7b5db7f1b3ad6542985c2f",
          4913: "9bf0be56c73f84c50bcac960427ea5fe",
          5018: "1436ed3b12992f9d1f89dfdc8e4d654a",
          5233: "6f988f4d81564d2cb83f8abfb88c5c51",
          5247: "940ba4c5ec0aa1e99ebbdeeaa01a626d",
          5259: "321a79ffbf1bfe511611a89b14887291",
          5440: "a99601bfe36d994b995eee694656400b",
          5530: "4047fd9f3b2c59fbf176296f6e223ebb",
          5639: "41b54ef8eec59e114b469f7e6f3af4c7",
          5663: "caf7201c1208d60d30f4bfb49f85e19a",
          5742: "86d38b9f910aa034f939c9c2b5f02d2f",
          5830: "f536e2c10c1615d899a699777ade603a",
          5832: "0b195fd5b300ca7597b844fd6e1a6830",
          6019: "31b8537aa187f56eec50c1486efb7ee7",
          6204: "bad9a165486e2b5b765916474c9fffcf",
          6267: "8b1778b014c338e532f720ad351deffc",
          6280: "c73c9be5e2d13fca2eb2430e448fc0cf",
          6285: "0e485a1cd506163472be991bcfa63ee3",
          6361: "d6aec3d1d6442fc5c96fb021d76952e7",
          6426: "8f0f029e1329b94a27f6f31202d92c3b",
          6664: "d0d838f707797bbec6ee83bf332a77e5",
          6806: "4d0c4177b3eb28be2a64e65a08e373a0",
          6871: "0417534670eab6e0ee92af0bf9b4c5c4",
          6879: "d656f3427cbae3cd8ced70ea568db1de",
          6891: "08db14194c64482b95cd0b8608c0d71c",
          6905: "f43f1b8fbe5d48a29454f84b26b57b8f",
          6940: "68c5433f80c26fd8792626c92ab1ddb6",
          6997: "cae8c0bc527dc9a961796a99025d7583",
          7010: "19d51b310b336812b1ece0a2364ed01d",
          7039: "1ec1a7ec2821bfaa60b04e24749c6f4c",
          7073: "3af987b6ddad9b64357c4a8dbdaac433",
          7436: "42eec88b88eb328b8ba8fc4113fe230c",
          7452: "666e23695d34d2260e2190c1197ab675",
          7453: "d7c2b91ac49906a6e0492ca90f643576",
          7964: "0f72d3c553aad11bb6baa04ab9051792",
          7970: "16d658b9f621393b37672a874812092f",
          8019: "ffd137d5b4f2860fcc2c61a5038af60c",
          8272: "9e7cefddd9e5888944caf64618107809",
          8333: "1b5dd1fd7244fc90f87db50b6dc09f28",
          8389: "5eaf4fbc0e9b5bcf1df7a0e6b05463ca",
          8391: "5773982d2eed5930df0c40a3120516e9",
          8463: "a5756722a589b1b336ba0a74158d35ff",
          8626: "ca98376968d4eda2395210a2fe765950",
          8673: "ad6bc59059b6c07469cea1f9e2179219",
          8755: "d2cd41958bcc7bf6ff04583347fa7432",
          8773: "32e01f4135662958d262f62fb9b0acaf",
          8880: "253be6aeeb798691ed250169d94b70d9",
          8890: "cd131c205a5b686c1c3684455471e45e",
          8970: "479bdc9bb34bf145f553df3e317c13dc",
          8995: "028a257ad10e4b35c0466332acec81a7",
          9022: "a7e58c6b01962e69a93ece2c1646452c",
          9028: "b66ba8998d1ae3870fa57c3f150bc8df",
          9126: "7fa576d9e4cc94a706bd772f414d0cee",
          9213: "f8608700b00f568179a046ac706c0797",
          9252: "e957f7f08df05d038dbcfbb09a24a3ac",
          9368: "646e4d0c1211ed37f58293e34868dfbd",
          9377: "0565928b6a62593227fe84ddbd27d30f",
          9474: "d64cda1e69c8afa7f0466fee2c5d54ba",
          9489: "b03cc313a06a9caf5cc6913b76838ba5",
          9615: "bef2dd4080b138dd417813e5513e88a7",
          9633: "73c9a1e90d352d8cf46009a6af67948a",
          9642: "db2000ce9397fe0e5101dca1c56b0a1e",
          9728: "63694fca49d930556f3875b0179a5e55",
          9765: "2b54d06ba867a08fe0ec168c6cd0ac67",
          9936: "3c2bdd8216e763690b401534833de733",
          9990: "77f3f1e04bc33e0e1501dff802f82b62"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          102: "a287413b91e22d2183cac646a279852e",
          1594: "82b8e41eb90eae7db3adfb9fff54d045",
          4670: "db1c0ba0699f10d1417e9b5ae22397d7",
          6426: "1eac0d948be569c136035d072b953ab4",
          6444: "8591dc87aae69356ef4710fc935c5ecf",
          8019: "52e55b769351b6e3f1602fe5d2baacd1",
          8389: "e70ba27106c58a2902fdf3deb822d60f",
          8995: "52e55b769351b6e3f1602fe5d2baacd1",
          9213: "82b8e41eb90eae7db3adfb9fff54d045",
          9765: "62cb6bfb390050db6a71d81fb427a37d"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          102: [31879],
          2700: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, ((e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                c = "@rockstargames/sites-legacy",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2315), i.e(2229), i.e(1154)]).then((() => () => i(67439))))), n("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(6905), i.e(8389)]).then((() => () => i(58875))))), n("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(8673), i.e(2229), i.e(4281), i.e(2440), i.e(8619), i.e(6444), i.e(9633)]).then((() => () => i(99633))))), n("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(9489), i.e(2519), i.e(6204), i.e(2229), i.e(9623), i.e(5966), i.e(1045), i.e(9252)]).then((() => () => i(66871))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(9489), i.e(2209), i.e(2229), i.e(5966), i.e(4853), i.e(4281), i.e(7964), i.e(1594)]).then((() => () => i(66618))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(9489), i.e(2519), i.e(2229), i.e(9623), i.e(1045), i.e(954)]).then((() => () => i(50101))))), n("focus-trap-react", "10.3.1", (() => Promise.all([i.e(8890), i.e(2229), i.e(7145)]).then((() => () => i(28890))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(456), i.e(2229)]).then((() => () => i(60456))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(3851), i.e(2229)]).then((() => () => i(93851))))), n("framer-motion", "7.10.3", (() => Promise.all([i.e(3963), i.e(2229)]).then((() => () => i(53963))))), n("graphql", "16.11.0", (() => i.e(5440).then((() => () => i(55440))))), n("prop-types", "15.8.1", (() => i.e(8626).then((() => () => i(18626))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(6019), i.e(2229)]).then((() => () => i(66019))))), n("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(844)]).then((() => () => i(40844))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(9728), i.e(2229), i.e(4853)]).then((() => () => i(49728))))), n("react", "18.2.0", (() => i.e(614).then((() => () => i(20614))))), n("react", "18.3.1", (() => i.e(1138).then((() => () => i(11138))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return o.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
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
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
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
                for (var f = 1, d = 1; d < e.length; d++) f--, t += "u" == (typeof(n = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return t
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var n = e[d];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, f, d) => {
              var c = d ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(c).reduce(((a, t) => !r(f, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(a, t) ? a : t), 0)) && c[t]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, r, t, f, d) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, f, d)) : e(a, i.S[a], r, t, f, d)
            })(((e, r, d, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, d)) return ((e, a, r) => r ? r() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, o);
              var b, s = t(r, d, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void f(((e, r, t, f, d) => {
                var c = e[t];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(r, e, d, n, c))
            })),
            c = {},
            n = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], (() => i.e(1138).then((() => () => i(11138))))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(9728), i.e(4853)]).then((() => () => i(49728))))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(9489), i.e(2519), i.e(9623), i.e(1045)]).then((() => () => i(50101))))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(5440).then((() => () => i(55440))))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(6019).then((() => () => i(66019))))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(9489), i.e(2519), i.e(6204), i.e(9623), i.e(5966), i.e(1045), i.e(6871)]).then((() => () => i(66871))))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(2315), i.e(8773)]).then((() => () => i(67439))))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(9489), i.e(2209), i.e(5966), i.e(4853), i.e(7964), i.e(9213)]).then((() => () => i(66618))))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(3963).then((() => () => i(53963))))),
              55799: () => d("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => i.e(8463).then((() => () => i(40844))))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], (() => i.e(614).then((() => () => i(20614))))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], (() => i.e(8626).then((() => () => i(18626))))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => i.e(8890).then((() => () => i(28890))))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(3851).then((() => () => i(93851))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => i.e(9765).then((() => () => i(58875))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([i.e(6444), i.e(2014)]).then((() => () => i(99633))))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(456).then((() => () => i(60456)))))
            },
            o = {
              102: [2765, 82849, 84590, 87330],
              1045: [16565],
              2229: [62229],
              2440: [92440],
              4281: [2918, 81788],
              4853: [44853],
              5966: [95966],
              6444: [87052],
              6905: [90660],
              7145: [57145],
              8619: [55799, 61913],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(c[e] = f.then(r).catch(t)) : r(f)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                102: 1,
                1594: 1,
                4670: 1,
                6426: 1,
                6444: 1,
                8019: 1,
                8389: 1,
                8995: 1,
                9213: 1,
                9765: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  f = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((f = (c = d[t]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|2440|4281|4853|5966|6444|7145|8619|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, d = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(37389), i(58639)
      })())
    }
  }
}));