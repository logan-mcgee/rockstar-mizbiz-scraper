try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "132d24dd-9b4c-45ab-a732-2b8c4dc01e8c", e._sentryDebugIdIdentifier = "sentry-dbid-132d24dd-9b4c-45ab-a732-2b8c4dc01e8c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, f, d, c, n, o = {
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(5548), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(8437)]).then(() => () => t(58437)),
                  "./index": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(5548), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(9741)]).then(() => () => t(19741)),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(5548), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(392), t.e(6019)]).then(() => () => t(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(5548), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(392), t.e(9171)]).then(() => () => t(99171)),
                  "./tina": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(5548), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(392)]).then(() => () => t(392))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          68: "2df3abf66ee9bf00eda35f2660c60c12",
          131: "8d71edb9fb3ce7340237fa6432eb0f06",
          173: "abbe33aaa7855efdda78d42cacf5ec3b",
          278: "21c60799c47f63a740d0eb6f4a10eb0f",
          299: "c2febdea8ef2474ae49952927c8e4a44",
          314: "091bbde9ec23e74e24a900e506991a08",
          392: "d462120015482322a4d0de68c50f0183",
          439: "3ead74ad0094a86596956cff98c7c54a",
          601: "07413bc150f071764be7fa012487b855",
          662: "33dfbb002d8ce05c2505cbec844fb457",
          824: "acf494fed94055fb5d705c7991143730",
          907: "ff2e4a4b715ca95e22df6f368c19f192",
          1054: "d95d4c5fc50615a2e33fb323290a8faf",
          1057: "b0777b0d0b93ae04ba4d427ca0452e7d",
          1098: "ebed88a121155ea96fb56275938eeb2c",
          1242: "77de94f7586a6db62caf9c4e2b2fc9cc",
          1277: "2490ed3acd801ff8f09be9ede0d46e0d",
          1673: "c5a5468a9a72bdc857e67c68a44dfa54",
          1758: "aed1d174ee404a1ebd7f594289463050",
          1785: "dd2dac2f96a917a634a469c56a61959f",
          1822: "007a0508abb7f973e4cb5fa46dca2619",
          1840: "ce9a531e0424b535a0fdc977309030c3",
          1868: "34427e4825e7d71bacbd4261741605ad",
          2156: "2ec9bfff5f4c13d3c73fdb96d7a54ab7",
          2169: "e807b71811113d364096a64c27101721",
          2171: "ada50721ea60e99502a8179d98b18210",
          2221: "ab819d64d7c70028426dc742fc331fd1",
          2234: "d6a546c1c688c4c5b81e92eecc86ac0e",
          2243: "d6e4553af9a683b32617f296703cfac8",
          2293: "912a5f70fc6b9a7a9d231de93394a499",
          2306: "23455537073851622c848b2b73aa798e",
          2323: "5f7431c7bf0fd7952836c2a41940708a",
          2347: "931be22911a28c23aab2cf30673146b3",
          2365: "c26954d5217237cad92c073f415d31e1",
          2368: "8cabac118af5a6118e37b3ff80571716",
          2398: "c949c622027c7e459dba12f0e98a9be4",
          2466: "643f50d3d790abcfa5ac160488645415",
          2583: "b3cae3924c954af64de96e2cca64865c",
          2642: "ff4c605851fb6a2260b416072defe1af",
          2678: "023c7fbd0cc8d25e912f918a4105a1b3",
          2864: "e0de5d1fe8c5c6e553ab926bbce4ecb6",
          3034: "6f3ed4ca1937d1c1115034b443cf7d0c",
          3197: "ef5fc560a1ac54f66cf0cf93f343ef23",
          3343: "0070eb95db3339ff3ab6cc81ec47e1cf",
          3370: "f2b0240423a1a61885eeb6a947eea118",
          3438: "345469d6a180bfc52bcf465f9d4aba7f",
          3475: "e0d3f6474f1bb512de327aa1625b5198",
          3486: "beac361efc8be66dff2302ad713730b8",
          3697: "15d51ecee56c4d4d8eeabf3ab5a4446a",
          3885: "0109507f2d7e9eb2eeaaaa951d6f2924",
          3896: "18bc5214cfe116fa51b6b1cdef5dd702",
          3941: "76495fae2457c76c1778b9fa8aa97a4f",
          4011: "99889a068be4bf29691127f37bf5c4d7",
          4528: "7dfbb7ca2188960dae2af50edb8b76f5",
          4550: "604e05f8e3fcad97bcca24d19f868ba2",
          4578: "afbcb6e426ff3b78cfa416938b275b84",
          4621: "abd24d3c1c651cecc5746e8f79f6481a",
          4700: "da38f66d2e76df0bb80d9f752aede13c",
          4710: "87412a47a93cb1c36f05f933f16efe89",
          4731: "c134d32575ea59a140b099b590ef5b70",
          4799: "e72d2ee22bf102fa6ee4176622607de8",
          4851: "2c608c4583c085e566daf500e686e873",
          4861: "87de86bf8cb4597b40e1867cb12e385d",
          4913: "868d6e450a1b48ebdf2a7207d9941d2a",
          4964: "a473d91163425459c22c708ed730d8e3",
          5018: "15a9780ff82c6fc60765a0602b444e21",
          5076: "931b5cb5d954d2933ad2c5e70ce8ec37",
          5114: "98306545725a56dd037dafca541c1220",
          5117: "add9c55fba9b13506ad7532e112cffc9",
          5233: "7c128e0bcd8f708822d8340a44ad6c2d",
          5259: "875ccb1482db8bc376fc73df46e8264d",
          5265: "e1ea3dd2223ea76aff9c88484dd1d675",
          5389: "f82932936cd41ad35b7e51fa6e925f75",
          5415: "b7343e6d303e115c1128843db831cfb3",
          5530: "582172ffe5768b6a4587bd612f757fdb",
          5548: "a7792fe305358edfd41bd8a31bc81ae7",
          5559: "d2440fdeb04cbbc82e2ca4f0a9e90db4",
          5639: "1fd6203ac31d20e0f50c02e0b99a6aad",
          5663: "efd9fbb877bc0dc956adaf9ae2f2f888",
          5742: "c0aca6d54164cea478cd933db3dc6e1b",
          5830: "d8c5336119a8a897062f0a81cf746182",
          5832: "a0121284fcc663a3177574ba1c4ec6c4",
          5859: "ea5f5fc42fec287b4b999f51590c46eb",
          5912: "4e58daafb599aae287654883c0920f3d",
          5997: "3a8a1d873ee3e4ceecc326d4f14a95f5",
          6019: "4dc8958f0ddec8bc9242d213b385b834",
          6088: "95e534372bff6b2c67d0ed6c2b216a20",
          6266: "3e65b977ca42f7418b1756686a34dece",
          6267: "c7f7fdc2b20ed40f914862ff4a59b2ef",
          6280: "936a51f86b9ad4f3ebea1dc9386854b8",
          6285: "3b7c68cbd7450510c362cb7032e34561",
          6321: "5b3ab5004caaf1ad1d7e8bf388846f8f",
          6327: "bd74c6b136b146cb68c8342883607a3b",
          6361: "a2ef1f9d8b3a6df01a7762cc0f53bb84",
          6471: "7bab15e3e6d54cd57a1ebcd1ad84badf",
          6664: "1823550cee3c7a29f80727064620850c",
          6879: "afb88cefe6b92638670f2634c5a47ea0",
          6891: "2135670e043bed196a06b49bfded9938",
          6997: "f3f65b39c50cf617d4f38292815167ad",
          7010: "8b81cb0dabf29519a4eeb877c04c6868",
          7073: "aa3b6551607e9474b48fdda827eb5252",
          7180: "7d5068d7236c49378cc0a22be7a5bd26",
          7407: "36178ee2109a53806110273a2b2ca017",
          7436: "c7619d92de8d3da25af7be21de40cf27",
          7452: "c87baa9fc4c16ca235aa537cee4ad33e",
          7453: "667bf3351d8a1e95bc6eabb0964a6d09",
          7465: "955a25043e5227bcf546130da58405bd",
          7970: "b35385860eaec7373e8f7158d1501092",
          8068: "3ae6b247cd4b612d1265a04b621fed02",
          8240: "d3e296fd75489af4634cf0e9fc074829",
          8272: "93c4db9e1d15df35444957fd085e4e18",
          8325: "36a829281ae7ac2ea145bc6a7fdee54e",
          8391: "fa186cd0a1bf27b6640eb7c512149b03",
          8431: "332ba5874f2da3fe7ff0cd3b48f74cb6",
          8437: "2809bc67c9350de22c4c0c53c406b8e5",
          8659: "fb82981b2767b636dc94957e0849d2f0",
          8665: "10be6591ebeeb98a1d27cd4b5aff4e40",
          8702: "cf0b530a698088ede831191309e780a1",
          8708: "3df2eabcc456781d644b752735088bcf",
          8755: "1dcd2fab5fb7b862135ec3bd9d9dc023",
          8845: "d55e35db1d5e2db8ff072752a26fff94",
          8880: "ca820d360eb884b1c8da5ff59870ba5e",
          8938: "61830d7cb58bc1cc198f8173eed4ed1f",
          8970: "a8a39f523788b1754491b526f1f764bf",
          9022: "4c20442956e66cdf1cb57d7b42e6c17e",
          9028: "4129c77e6d7ff3c356a355df4aac1f43",
          9126: "d6fc95014245ab86502c7b9de1bf0af2",
          9171: "b639ebe0a2ef12cbcc8fb8fdcbe2168b",
          9377: "42d16ba029d3758f01278c6fa06a9682",
          9587: "3a99c118b8304939aa0be74c0030c0f1",
          9615: "840a119c945642970ceed1744ff87045",
          9741: "d676dc36484f5da671de08cd7a8617a3",
          9760: "2b6bd43d9f077be6dce0f147fe23b197",
          9936: "b7866b6edbb7466f404d912d66f6e4ad",
          9987: "7446f78ae3ef17c6d7a22334374cbd16",
          9990: "59a53b440509685443c11f6a3e84afa8"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "bde1c4e0b23cbfd27b8e58c3e9b9719f",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          5114: "c7821584e9b8f5e7d8d657e039c4640d",
          5548: "870f0bed63c4e738931fb489bb7605a9",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "8711e961a261d74f8514e2dc9a33b1b2",
          8665: "cd135931d3ddd0c8c915bde00523e2a1",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9736: "81bb14ac88f3a651365e4427a5b9bac9"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(t)), a) return a(t)
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
          392: [17523],
          5114: [31879]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, (e, a, t) => e ? d(i.I, r[0], 0, e, c, t) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                c = "@rockstargames/sites-legacy",
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(4853), i.e(2918), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then(() => () => i(51673))), n("framer-motion", "10.18.0", () => Promise.all([i.e(1840), i.e(2229)]).then(() => () => i(91840))), n("framer-motion", "10.18.0", () => Promise.all([i.e(5559), i.e(2229)]).then(() => () => i(65559))), n("framer-motion", "7.10.3", () => Promise.all([i.e(5912), i.e(2229)]).then(() => () => i(75912))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return o.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(n = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return r
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
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
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
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, d) => {
              var c = d ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(a, r) ? a : r, 0)) && c[r]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, t, r, f, d) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, f, d)) : e(a, i.S[a], t, r, f, d)
            })((e, t, d, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(t, d)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, o);
              var b, s = r(t, d, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void f(((e, t, r, f, d) => {
                var c = e[r];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(t, e, d, n, c))
            }),
            c = {},
            n = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(6321)]).then(() => () => i(58702))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              4572: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5912).then(() => () => i(75912))),
              61128: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5559).then(() => () => i(65559))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], () => i.e(8665).then(() => () => i(21375))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], () => Promise.all([i.e(9736), i.e(9987)]).then(() => () => i(32368))),
              91082: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(4964).then(() => () => i(62583))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(1840).then(() => () => i(91840)))
            },
            o = {
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4853: [44853],
              5114: [2765, 82849, 84590, 87330, 91082],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              9458: [61128, 61913],
              9623: [9623],
              9736: [87052]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(c[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1057: 1,
                1785: 1,
                3438: 1,
                5114: 1,
                5548: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((f = (c = d[r]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|440|918)|9(458|623|736)|1788|4853|5966|6565|7145)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((t, f) => r = e[a] = [t, f]);
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, [d, c, n] = t,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});