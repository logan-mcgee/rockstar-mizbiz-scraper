try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b5565c97-7190-407e-8e37-eb4147ea4f37", e._sentryDebugIdIdentifier = "sentry-dbid-b5565c97-7190-407e-8e37-eb4147ea4f37")
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
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(7250), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(695), t.e(8437)]).then(() => () => t(58437)),
                  "./index": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(7250), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(695), t.e(9741)]).then(() => () => t(19741)),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(7250), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(695), t.e(6478), t.e(6019)]).then(() => () => t(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(7250), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(695), t.e(6478), t.e(9171)]).then(() => () => t(99171)),
                  "./tina": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(7250), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(695), t.e(6478)]).then(() => () => t(66478))
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
          68: "cceb585c0e6bee1b057a025800791827",
          131: "c2caa161968633b2dde651351ec780b5",
          173: "ef619295c21fc87e664552dbb212f181",
          278: "4c40e716bde17c5316e0b25da84dc6d1",
          299: "73ceb49ee77dbf2d7bd66fcf9525ac5b",
          314: "25b2a74f0e728137b2ddc58a9eb0e8b0",
          439: "4e83be9fb9a1902dac13b71f6d0c083c",
          601: "27bb5e6672f3634a14b1edda1080b443",
          662: "4f62a83bb5ba86305ed08940b208c598",
          695: "ad72a7c2a70a4088f79bae8ac71a5db2",
          824: "90013bbfec325949da476986da929431",
          907: "901396a2dc9c78db2b576cb087dabb1e",
          1054: "0aecc5a0ac9b78dbe5aceb813a49b0f6",
          1057: "6dea9d5380ebaddd928cb48fcd813e72",
          1098: "74ffc983e1f9cd10901da1b95751f51f",
          1242: "bd86fc91fd7c95ea0cf823f4b58bea05",
          1673: "5123b7ad1f4f38b898d954bf9a65d598",
          1758: "3dd60e36474be3aecc37b7fe7578d9c5",
          1785: "b2eafa56fc4e79abb1cde95d9c35b11f",
          1822: "34371d46377db69ab6282603f6f1f88c",
          1868: "ca2febd90119585fea276b071524871d",
          2156: "620e7608299731bb54cd850a306f0258",
          2169: "e372d43e303a88ae267497f0a91d0d33",
          2171: "85137fd21a6c4289f3f00fed99995aa7",
          2221: "9133e820a1b9964ae8ff6dc68886df82",
          2234: "9602c8a1bb518f692b698682a2678e54",
          2243: "3164c11f6e8cb91f7b237b1a344f5cb5",
          2295: "1bc10a88f2e7fa20c5e5932b011cbad5",
          2306: "d9e069e85d697932ef0908a497722739",
          2319: "44215837aeab3b5b1ae0237e91d50862",
          2323: "958e057b4045a1dd739b85038235c677",
          2347: "0aa4966d8d7b2a4a2bc7c4845efc97a0",
          2365: "cbea3ed9ca40647dd65efafc9b7bc094",
          2368: "f348e8f479799e7302ebfcb9ada3645c",
          2398: "d127e4016d80f682e71f50ae7193a928",
          2466: "b2922635fc2450a9b5c7b33053c56bcd",
          2642: "8f6719641384858d46e50abbc776fbca",
          2678: "eee4c06449a470de79ecc947c4319d36",
          2787: "d76abf5bba320345970c34f598037fd4",
          2864: "ba9b560ee0b08cae6fbc765575e7bce8",
          3034: "804de593d986a4e2de6de4d7165333e4",
          3197: "677aabe7e84eb71ae118e12bc50c747a",
          3343: "44834125aa5855c65a6c0d98fbb1c221",
          3370: "2b1ee597e9e85663542d995027d73eaf",
          3438: "f00952955aa9a0b4237b274c255c4f1e",
          3475: "e1a22620a54a9394d0bc2c1ee317d58e",
          3486: "31b440bd2cd6f88e5d443c3167bec030",
          3611: "6d6c5c0e72ce8bb8662f75672e4023db",
          3697: "578f542dc04a41696c113408e0bce26c",
          3885: "09899f847a9116c903c9e14fef2d1fac",
          3896: "1d922b6348d1d8adeefaa40b01abb3f4",
          3941: "5859c895f7565b49b155db7d6e7a7d2d",
          4011: "66050c527f60adb10855207cd0b301c8",
          4528: "bfd301df330ffc1d29b881b9a1d5ae25",
          4550: "c88fe2665139bbd757244e3b2a7fc916",
          4578: "6e74381c12026c44943d143c1583b804",
          4621: "be66810c3ad82ebe3705437395ff35e7",
          4700: "a1583f7492b4216d092879d4cb2dce99",
          4708: "566d0bbf38fdb7015671417881acba47",
          4710: "f080235bc3e0f0beec9c7039a46fed43",
          4731: "71208eb452e6437e9edc805e314302f1",
          4799: "047136162fe6bc67d62e96e5eac1d767",
          4851: "bb633906413cbbc6ed8fd34dcb16ded4",
          4861: "ea092d87eb2fdfefb69fa29e43459229",
          4913: "872e57cb575035c3ac30dbebb25b7fa4",
          4931: "f0512d091acb26ac6afe089b5bc42527",
          5018: "ea3d0c60368fcfeefafdafd410fae73d",
          5076: "52d80d2f1036fd257b68e46e28af7d29",
          5085: "bc7d9a574c6f51527d6ba142eef886f7",
          5117: "78e8d48d83592183613495dbf7334009",
          5233: "1f9b018748e5ecc8ec4a671a0706a129",
          5259: "e6938c9cee02b5960fedcd37e1f308a1",
          5265: "5a23b67b68b07ecca7c1e681a28d30c6",
          5288: "abe1478c08a45698b86e197994ef3b33",
          5389: "487cf03471f228e7229e38186c7ec578",
          5415: "cda8ee007e5388d8779cdeab8f07af26",
          5530: "80eb1f40008d42e04c0d673159eb4d65",
          5639: "a82e860e65ddf40f5bd06b98130afa1a",
          5663: "e66cc8e66e238f87e7447d30d243fd71",
          5742: "d4fa0aafdf06daac2aa9ec4e643b07ba",
          5830: "2996e9b0ffe540401cf6fbf995279d04",
          5832: "f33b1615e9a6a9b4f6d9f21670b1e112",
          6019: "7d0db84db93c79cd202f6e0c3853a0a4",
          6266: "918794df8f3501724891cf01526af81a",
          6267: "edba4cf164761500df07936863f45944",
          6280: "a5d77cfcc189cd23af6ee14648e0ff99",
          6285: "4ab67884fdfb786dacf92ea810ded5d3",
          6327: "e3ebaa0bad652fd9414a2d03b79e57d0",
          6361: "da5bcb824b7598ff2a6632167516b586",
          6471: "178e5ef54b1c6d46b4ed949367b95cf5",
          6478: "b47e5b55e77d9ab498df38c522fe6160",
          6664: "8d60a4a1d81c1b38a5029f8aa182e222",
          6783: "1aab2ce1048cab2f88187f4697d70c54",
          6879: "37cc915a5499402e75973891a5946668",
          6891: "23e9332aeb23cf7110d4030911bdb47b",
          6997: "19612638817f857aea516d9c4f9c7d39",
          7010: "0f306db9c2baa7284147ffa4f5e62a83",
          7073: "95d3e2e468353a983cf765182a3a12d9",
          7129: "e6807714dfa48cf96eb2ae9bfb11a0c6",
          7250: "d83a7abe0767372a57e2dd68134af17d",
          7407: "4ea6ceac08a83f9dc9461a4c73fd50aa",
          7436: "e251af2b3610d6ad4ec5e34be067951d",
          7452: "56e46122b714010a62048ae463c61345",
          7453: "1938105489d2ea46fdf5a2cf8cf90ac4",
          7465: "df0a5fa6f737eccdbb0b13d1a34ed206",
          7557: "8d216a9e2edde054f35819e6e2d946fe",
          7970: "a49e87f6e09d9572d0a6ac779f2792ec",
          8068: "b4d9743c1603b5c5d744458e4f74ca54",
          8272: "49b5bb71740b5066bf85f5e69145ea27",
          8325: "20bd739593741546ad2dfe4f4a6d4622",
          8391: "7d3ba4e568403a08b0bfe44a2121b37f",
          8431: "f131ed4b1c6b2c06247b67c4aac41dd5",
          8437: "5a2340c3b196a01b4cf4de173cd365f6",
          8665: "2e0e8589f58d993c14cbc658a2a30e09",
          8708: "abc1b77b4891307a4b38dac0600f46e3",
          8755: "bfe877514c3c5622977fd70505fcb1c7",
          8845: "8a947fd770ac127f63059f22f08ec021",
          8880: "257bf67662a72b818e30ea5266f1ae22",
          8938: "a2f8d8683986f519fe84a4339bed86d7",
          8970: "8308c476c87654d83408d640c806d17f",
          9022: "6c147dd4f239f4ab21cf777fa1fb2a62",
          9028: "c269cd554f0058c24084a55c7cb51f37",
          9126: "55534c3f60ff8e829271145d1e8719ec",
          9171: "eb3d3f6665fe005205aed94d89ca6475",
          9377: "142f9764613086bc76b4ea0764bd703a",
          9615: "9e16f1a151e480b5c32df7d6fa6bad29",
          9713: "061cdca3531d2d87cd25fc69ec5de9ff",
          9741: "48db0ec576a157da0869675f458d909a",
          9760: "43bced369a9b7564384375fa011eb55e",
          9936: "64137bae59a982f22fc5cf631c076ffc",
          9987: "db0e6c2d17407f975864552a9bcefa3c",
          9990: "89532b3091bce598f96eb8ef5217d32c"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          695: "bacc0c948d28685f6871c434b47582f6",
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "01fd4a1b7dcafeb5ed7fca9004268171",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          4297: "4fc9b1b7dc3a3f98aa7535db17648e4e",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          7250: "4c6f891ec5fde29ab57ee82f5513517d",
          8437: "4f3a9b3afebe39fcff8ed3806ad4cef4",
          8665: "b3313fda99862d6d64bd2a829ae71ca3",
          9171: "52e55b769351b6e3f1602fe5d2baacd1"
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
          695: [31879],
          6478: [17523]
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
              return "default" === t && (n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3611), i.e(2787), i.e(1127), i.e(2319)]).then(() => () => i(2319))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(1127), i.e(181), i.e(8136), i.e(6990), i.e(1874), i.e(9915), i.e(4708), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(1127), i.e(6990), i.e(1874), i.e(9915), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(7129), i.e(8068), i.e(1127), i.e(181), i.e(8136), i.e(6990), i.e(5085), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(1127), i.e(8136), i.e(6990), i.e(8429), i.e(1874), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(5076), i.e(3611), i.e(7129), i.e(4931), i.e(1127), i.e(181), i.e(6990), i.e(5085), i.e(811), i.e(6783)]).then(() => () => i(66783))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(1127), i.e(8793)]).then(() => () => i(51673))), n("framer-motion", "12.35.0", () => Promise.all([i.e(5288), i.e(1127), i.e(2295)]).then(() => () => i(45288))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
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
            r = (a, t, r) => {
              var f = r ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(f).reduce((a, t) => !a || !f[a].loaded && ((a, t) => {
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
              })(a, t) ? t : a, 0)
            },
            f = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, t, r, f, d) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, f, d)) : e(a, i.S[a], t, r, f, d)
            })((e, d, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return f(e, c, b);
              var s, l, u = r(d, c, n);
              return t(o, u) || (l = ((e, t, r, f) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(f) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              58136: () => d("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(3611), i.e(7129), i.e(4931), i.e(181), i.e(5085), i.e(9713)]).then(() => () => i(66783))),
              56990: () => d("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3611), i.e(2787), i.e(7557)]).then(() => () => i(2319))),
              18429: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              61874: () => d("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(7129), i.e(8068), i.e(181), i.e(8136), i.e(5085), i.e(2169)]).then(() => () => i(32169))),
              22030: () => d("default", "@rsgweb/tina", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(5117), i.e(8136), i.e(8429), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              48586: () => d("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(5288).then(() => () => i(45288))),
              1556: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              21352: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              28793: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              36444: () => d("default", "@rsgweb/modules-core-highlights", !1, [4, 0, 0, 0], () => Promise.all([i.e(4297), i.e(9987)]).then(() => () => i(32368))),
              60478: () => d("default", "@rsgweb/modules-core-hero", !1, [4, 0, 0, 0], () => i.e(8665).then(() => () => i(21375))),
              99101: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              811: () => d("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601)))
            },
            o = {
              181: [10181],
              695: [36444, 60478, 99101],
              811: [811],
              1127: [71127],
              1352: [21352],
              1874: [61874],
              4708: [1556],
              6990: [56990],
              8136: [58136],
              8429: [18429],
              8793: [28793],
              9713: [811],
              9915: [22030, 48586]
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
                695: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                4297: 1,
                6019: 1,
                7250: 1,
                8437: 1,
                8665: 1,
                9171: 1
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
              else if (/^(1(127|352|81|874)|8(11|136|429|793)|4297|6990|9915)$/.test(a)) e[a] = 0;
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