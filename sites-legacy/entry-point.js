try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5c914c32-fa99-4921-91f3-0aaa031578f1", e._sentryDebugIdIdentifier = "sentry-dbid-5c914c32-fa99-4921-91f3-0aaa031578f1")
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
        var e, f, r, d, c, n, o = {
            17411: (e, a, t) => {
              const f = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = f(t.y.meta.url, e)
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
              var f = {
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(8437)]).then(() => () => t(58437)),
                  "./index": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(9741)]).then(() => () => t(19741)),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(1649), t.e(6019)]).then(() => () => t(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(1649), t.e(9171)]).then(() => () => t(99171)),
                  "./tina": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(1649)]).then(() => () => t(81649))
                },
                r = (e, a) => (t.R = a, a = t.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var f = "default",
                      r = t.S[f];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[f] = e, t.I(f, a)
                  }
                };
              t.d(a, {
                get: () => r,
                init: () => d
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var f = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, r = 0, d = f.length; r !== a && d >= 0;) "/" === f[--d] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = f.slice(0, d + 1);
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
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          i.r(r);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(r, d), r
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          38: "c63e6a1542b09cab9090910e23237153",
          68: "f9a6af9fe74230a35698b76091748564",
          131: "8ca65347dc4be252a1a5864601934268",
          173: "246bdc4f90517bde352739de5c70e24a",
          278: "b713a3011810a69864be8ec1c7df1fe9",
          299: "a77701431095b4e5f175543873e89a97",
          314: "543a0b8e5c8ef294aaf8f145f51d1bee",
          439: "89d061782c9218045ff4481a7f69ac98",
          601: "9b9164483b720591b9b307a2f81091a1",
          662: "963993c06bc2046d9cc43e87ec104338",
          824: "3e6cca3e5f7de97fa8d182f03558112e",
          907: "48e2f4a3bb0180e05fa08c2de4281a1e",
          1054: "d6a8334fb38c2d5caf867fba84109c7d",
          1057: "95ad2eabf6879d0782205f602d552476",
          1098: "424e93cc4aa6201b5cb4291bc78ab937",
          1242: "1ad36dd8dabde435ca95dd01bacf7f04",
          1649: "d7229c57dd4085c2fdbd0402d18a0ed9",
          1673: "f36d770aa497372b00d423f57ac55fd1",
          1758: "8637fed9dc0bf5853a91f69f8a6cb496",
          1785: "1a689a02f90a805c2f53aad4d35f07f6",
          1822: "3d3a062e5add436524f7fa4eeb323af4",
          1868: "012063f563a0b4d79a8934db7f95b28b",
          2156: "2de138c5864a69d3fc0d2b0468fb4f2e",
          2169: "081adca989d5a79878934594b7a0b71b",
          2171: "a577ebc2294630f32b0796e9b468f233",
          2221: "43c113d482bb4f30b313910aff635240",
          2234: "b364ab10503c9c3548e09ab457ceb80e",
          2243: "262d6a541775b08ae1eef38b95153e99",
          2295: "a81c2eccf47c1cf06a5ab647c442bacb",
          2306: "88545869714f59153f6adfa65618ad12",
          2319: "323485bab6cf744042d12aead5141901",
          2323: "0d6f8a093c9613ec73997746e056fb14",
          2347: "40cbbfed82e7c3385eece133fc26ff06",
          2365: "5478c8a02236b6ecdc05af4ff1f9dfff",
          2368: "d8a4fc96828acaf573455844c363a727",
          2398: "69d1d992316e9c316954ca65c1ed21a1",
          2466: "de5fd084117fb36dd8d5faac9be284b3",
          2642: "84a14a5626229b11d458322c15086488",
          2678: "ad74118d4e4208aadbd96040c3b323f5",
          2787: "6f4b234c02a793b4371af8dc39705291",
          2864: "9fdcb3823400098f2d756839ab1cf663",
          3034: "cfbedc9e5ecb076a371bd75ca2b346f7",
          3197: "a62a6eeb99ff56a2635ec2644ce0f7c8",
          3342: "1b1ac89e82697e58ba7ba2d2bcf5627e",
          3343: "28c2cefd9459318026536fac8b3235bc",
          3370: "8c19b1ffc573e48f5d4dc8352e0e8bd7",
          3438: "eacb8ab47c1496510a0ac1cec9815ea6",
          3475: "10581adf5f37fbf785c7a37f96627ee8",
          3486: "69ac989d12eafe6adc97b1096247dd56",
          3611: "7f54a9bf7a5ab5d0fb980a2b69282a11",
          3697: "3b632174382657002779020903bd80a4",
          3885: "a6959cf621d79d9eeebcccc4561b0aba",
          3896: "687d71ece3d75a64b66a511e0f679ff0",
          3941: "d0abb323fa070ce9700384176735e147",
          4011: "0520dafa91c0cc6a45708f6b438484e1",
          4528: "1a5ed12e5e9f680260ffad0d30f22c41",
          4550: "45d1f6ac2cb0788e1ea115c7acd4663b",
          4578: "f8ca7c394f8ded28fc0f29a6aee1dc38",
          4621: "afbe5b14e88720ce489e607da1e4d96b",
          4700: "36a6454f9906686d4dc3e309c4b49a82",
          4708: "f5681ff6554200530da715b2e213c2d3",
          4710: "f444bdcec025cd8a5df0c3990d9bccdb",
          4731: "c7d26ef361167b625b302eb3e19e1d55",
          4799: "03727176ce6db333dd17be10e3cd1f6e",
          4851: "c4faaf30ea552e9d2a714cb109850c48",
          4861: "2a75a8774c89c81d4740b86602a2461a",
          4913: "3e7ca6117d64d1b563f23fc8c5cb70dd",
          4931: "fa197846301aa93eab17a0c1b18ca4c6",
          5018: "4eb45749dcb5fde8a8847a845a7dc1c9",
          5076: "af2d07b441dcfa5af8c2c102f5f94368",
          5117: "b5f565fb7433278f96698e6d6ef40291",
          5194: "7d16b1783ce73bffc278c478a5b7a24a",
          5233: "8b7387b6543036b5c4d69e56839ab714",
          5259: "297136497179c45aac2e92c4d78306a2",
          5265: "13b0e1c616b9beabc7f1a62ceb08a328",
          5288: "aa5680075d24c1d590adfb228ed25592",
          5389: "56fa656541f9f6b49a8d151c8f57087d",
          5415: "c7779fed06f5292e0c6390674718885b",
          5530: "2812120381715633a0a2b524cf41ddb3",
          5639: "ceffe7ea6fd24fec3c63b5130af18668",
          5663: "38633f4bd3540954c191b6589d347bc7",
          5742: "3ca1cd3633b9d3307fc05c50564e9007",
          5830: "0e76d1e5bc72840c2152397ecd6b348e",
          5832: "be08d750824c991094b6877c7cde411d",
          6019: "712f9986deb503a3b7c4ebc36b2a6182",
          6088: "a2a6c3179b71796aae3f1845ea6991b9",
          6266: "358e54fe5e00ad49210dddf800674d48",
          6267: "2b632305b046ebf8ffad7c10ba1f9995",
          6280: "f5e33b27e2b9781f3f42293b890c1cd9",
          6285: "01de99fb84f877d4c9334304597d1bd8",
          6327: "2b731bc48a23e8fe562987a466911771",
          6361: "d85ecc259cb6c09479311650cbfc436b",
          6471: "2e34affe23234ba75318154c28dcfdee",
          6664: "75cdf5b4d72cc5375a91c5f6df574fa0",
          6879: "845d2eb48b53e2321acafad91484982d",
          6891: "92b6309d505e10c2cba85a4fb049be3a",
          6997: "cf41310b94512247afe43dd14519e210",
          7010: "f93331369793f028f93ec37ba1d32b30",
          7073: "8c23ac1e91bc0a246fd57d3377442c51",
          7129: "065d96f46d7e714ffb5252aa2f97e7a3",
          7407: "23c997f24221fb378591064db8c36e77",
          7436: "1165f564046018446eeecbdddbcaf974",
          7452: "9f63fd628772dc090552cf40445d3267",
          7453: "719991ff748b5ed1b735c6096d04c892",
          7465: "49eab481e00de0cd89350dbe1b63df2d",
          7557: "fca37ef0a20cf88160d1f1f7fbb49eda",
          7970: "6148c212e230f7fdb20daaea42b06c5d",
          8068: "247fde844fef6dbf0272dd921dcdfc05",
          8272: "e9a0ddc734267db96e5ade46116821d4",
          8325: "ee9fa7123ad65d2ea4b364674c7d7cb6",
          8391: "e2babd6cb419bf94b0f7c57553b7b649",
          8431: "70d3ee4b03d06520f33748a722d8922c",
          8437: "c1fe2d88752807a4795cc4cf392dca4d",
          8665: "cb936fa1b4ac6a315b8bcfb37a7ac36f",
          8708: "b0f7a395cae32fa8d7855eaab03d7126",
          8755: "b8f2e7cf74ddfa21746a63a6553330c3",
          8844: "a05f29ad1a272f8798f2bdafc4d67d0b",
          8845: "a181b824bc186eacf4eceed4b80b0098",
          8880: "040f2dffb6501f382ef9545f6385f77d",
          8938: "d3aeda6a1a2a9205d820e170c52c4d8c",
          8970: "53b5b3d518cf89a3d91383e70c8f8c6e",
          9022: "6e013fc0eaa10bb29de75ccf63e806b8",
          9028: "39ae0ba7627dd44dcd8479e79269d7d8",
          9126: "d8a96033b17503fc2830319533497bde",
          9171: "1011afcd2e1be1608ec8b2aa6109bb58",
          9377: "284d62b4be3220a3620f893272fe972e",
          9615: "1e104bdcc14376fcaac10b86f1a30a01",
          9741: "fdfcc9a67d96e4247c0a3fc9043bf47e",
          9760: "0026b13f2dd2ca9f4ae43e9cdce5a57c",
          9936: "68a0d731c354fcca8ed4fc2ea38c01ea",
          9987: "b0338b5cec6a17448af7fc2d4bbf4aef",
          9990: "7aaf3c4ab2cf6884d992e3e1ab27a508"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          38: "f94c7054d4e986c11cdac638a3dfbd45",
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "01fd4a1b7dcafeb5ed7fca9004268171",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          4297: "4fc9b1b7dc3a3f98aa7535db17648e4e",
          5194: "8af84a027a4fbef1a99621cf58d0e055",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "7b7e81de8ef95d17fe40bdb1530d8afb",
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
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
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var f = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(e => e(t)), a) return a(t)
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
          38: [31879],
          1649: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var f = n[e];
            if (!(t.indexOf(f) >= 0)) {
              if (t.push(f), f.p) return a.push(f.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), i.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), r);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    r(e)
                  }
                },
                c = (e, a, r) => d(a.get, f[1], t, 0, o, r),
                o = a => {
                  f.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, f[2], 0, 0, (e, a, t) => e ? d(i.I, f[0], 0, e, c, t) : r(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, f) => {
            f || (f = []);
            var r = a[t];
            if (r || (r = a[t] = {}), !(f.indexOf(r) >= 0)) {
              if (f.push(r), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                c = "@rockstargames/sites-legacy",
                n = (e, a, t, f) => {
                  var r = d[e] = d[e] || {},
                    n = r[a];
                  (!n || !n.loaded && (!f != !n.eager ? f : c > n.from)) && (r[a] = {
                    get: t,
                    from: c,
                    eager: !!f
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3611), i.e(2787), i.e(1127), i.e(2319)]).then(() => () => i(2319))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(1127), i.e(181), i.e(8136), i.e(6990), i.e(1874), i.e(9915), i.e(4708), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(1127), i.e(6990), i.e(1874), i.e(9915), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(7129), i.e(8068), i.e(1127), i.e(181), i.e(8136), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(1127), i.e(8136), i.e(6990), i.e(8429), i.e(1874), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(5076), i.e(3611), i.e(7129), i.e(4931), i.e(1127), i.e(181), i.e(6990), i.e(6088), i.e(811), i.e(3342)]).then(() => () => i(43342))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(1127), i.e(8793)]).then(() => () => i(51673))), n("framer-motion", "12.35.0", () => Promise.all([i.e(5288), i.e(1127), i.e(2295)]).then(() => () => i(45288))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var r = e => e && e.init && e.init(i.S[t], f);
                  if (a.then) return o.push(a.then(r, e));
                  var d = r(a);
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
              for (var f = t.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = t[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = t[1] ? a(t[1]) : [];
              return t[2] && (f.length++, f.push.apply(f, a(t[2]))), t[3] && (f.push([]), f.push.apply(f, a(t[3]))), f
            },
            a = e => {
              var t = e[0],
                f = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                f += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var r = 1, d = 1; d < e.length; d++) r--, f += "u" == (typeof(n = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, n);
                return f
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
            t = (a, f) => {
              if (0 in a) {
                f = e(f);
                var r = a[0],
                  d = r < 0;
                d && (r = -r - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= f.length || "o" == (i = (typeof(b = f[c]))[0])) return !o || ("u" == s ? n > r && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= r) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= r) return !1;
                    o = !1, n--
                  } else {
                    if (n <= r || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, f) : !u())
              }
              return !!u()
            },
            f = (a, t, f) => {
              var r = f ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(r).reduce((a, t) => !a || !r[a].loaded && ((a, t) => {
                a = e(a), t = e(t);
                for (var f = 0;;) {
                  if (f >= a.length) return f < t.length && "u" != (typeof t[f])[0];
                  var r = a[f],
                    d = (typeof r)[0];
                  if (f >= t.length) return "u" == d;
                  var c = t[f],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && r != c) return r < c;
                  f++
                }
              })(a, t) ? t : a, 0)
            },
            r = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, t, f, r, d) {
              var c = i.I(a);
              return c && c.then && !f ? c.then(e.bind(e, a, i.S[a], t, !1, r, d)) : e(a, i.S[a], t, f, r, d)
            })((e, d, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return r(e, c, b);
              var s, l, u = f(d, c, n);
              return t(o, u) || (l = ((e, t, f, r) => "Unsatisfied version " + f + " from " + (f && e[t][f].from) + " of shared singleton module " + t + " (required " + a(r) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              58136: () => d("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(3611), i.e(7129), i.e(4931), i.e(181), i.e(6990), i.e(6088), i.e(8844)]).then(() => () => i(43342))),
              56990: () => d("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3611), i.e(2787), i.e(7557)]).then(() => () => i(2319))),
              18429: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              61874: () => d("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(7129), i.e(8068), i.e(181), i.e(8136), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
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
              38: [36444, 60478, 99101],
              181: [10181],
              811: [811],
              1127: [71127],
              1352: [21352],
              1874: [61874],
              4708: [1556],
              6990: [56990],
              8136: [58136],
              8429: [18429],
              8793: [28793],
              8844: [811],
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
                var f = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var r = n[e]();
                  r.then ? a.push(c[e] = r.then(t).catch(f)) : t(r)
                } catch (e) {
                  f(e)
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
                38: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                4297: 1,
                5194: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var f = i.miniCssF(e),
                  r = i.p + f;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), f = 0; f < t.length; f++) {
                      var r = (c = t[f]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (f = 0; f < d.length; f++) {
                      var c;
                      if ((r = (c = d[f]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(f, r)) return a();
                ((e, a, t, f, r) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) f();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), r(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, r, 0, a, t)
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
            var f = i.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) t.push(f[2]);
              else if (/^(1(127|352|81|874)|8(11|136|429|793)|4297|6990|9915)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((t, r) => f = e[a] = [t, r]);
              t.push(f[2] = r);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, t => {
                if (i.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")", c.name = "ChunkLoadError", c.type = r, c.request = d, f[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var f, r, [d, c, n] = t,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (f in c) i.o(c, f) && (i.m[f] = c[f]);
                n && n(i)
              }
              for (a && a(t); o < d.length; o++) r = d[o], i.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});