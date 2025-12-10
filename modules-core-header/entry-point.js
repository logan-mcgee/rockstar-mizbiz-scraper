try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "edf15b9b-80cd-443e-b55a-fb1303af18d0", e._sentryDebugIdIdentifier = "sentry-dbid-edf15b9b-80cd-443e-b55a-fb1303af18d0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, c, f, o = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            42029: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(8379), d.e(7152), d.e(1127), d.e(8429), d.e(1222), d.e(889), d.e(2372), d.e(3694), d.e(4572), d.e(1788), d.e(4836), d.e(1207), d.e(5966), d.e(6275)]).then(() => () => d(86859))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => c
              })
            },
            77027: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, c = r.length; t !== a && c >= 0;) "/" === r[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            93032: (e, a, d) => {
              d(28419)
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var d = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, b), d.loaded = !0, d.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, b.d(t, c), t
        }, b.d = (e, a) => {
          for (var d in a) b.o(a, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, d) => (b.f[d](e, a), a), [])), b.u = e => "js/" + {
          61: "b63528d517d3136ef45433351789a08c",
          68: "02da18e7de8a5d0c62ac3110c24ef7f0",
          131: "452a10e345b4ee686bd4df3d45a2fbbb",
          145: "4bd29e1289b34c538f598a59f1be09cb",
          173: "10ffe9abb13d73cd15f6056ac395157a",
          278: "a4a0aab71986042e4b260747d026a699",
          299: "c7dac5d1a5effddeb47d4fbe0a699d5e",
          314: "8a4449134a10aa5876cdf685513235b6",
          395: "12d8303faeef232761e534bd1d0e56d1",
          439: "8b0a86e9832b187f9ba4d70bf54add3e",
          450: "3db4180fc13d92d960d611c3ad941d72",
          662: "a0c0752a0389993bcadbe38126f555a5",
          710: "da76bdb9c3e2a9f843cfcc0648c04c35",
          824: "4da1436cd21dafcda3ed9f7b563f645d",
          887: "581ffad7e2b95a472658505d16f3b052",
          907: "a9258cf1ae7d34bf0fe68cd9e9e82d74",
          1054: "3fae04eaf6aa0d3b21bf710b0643cd5a",
          1098: "a433c2ccb9579dc57aaedd0231d43833",
          1242: "fb86194413d090c6c771cf76fa11bf54",
          1436: "6feb0c95e22a61e7b121f5208023040a",
          1758: "114f5c5ca5dea94b6e2a6d41c0d1a068",
          1822: "8e7e4ee8bbe1ca8c71ab5798db66e8ee",
          1828: "c09f4deadd50b61db120226fca5261bc",
          1868: "8d20a6d6a5f3d773566493eef7c882db",
          2156: "769794f43c0240bfccf1ed4ef253860b",
          2169: "4fc429c48bae9af2879fc98f7f59cc1b",
          2171: "1b29b658b2a9c654405270788a9a7767",
          2221: "eb5e1ea153e03a5baa7b3e15cf978b4e",
          2234: "a7b08f9b3c831b00aca059cde751144a",
          2243: "088deb16f9ca76d6029bc901127c3355",
          2280: "e8d619e6a593c13cec9e0fa9657895a3",
          2295: "85b270e02fda0ff85dee79b7342a6f72",
          2306: "66acd59f6f892586c85b71d985c08166",
          2347: "3795fbf06d5b37642cbc5e48807ba3cd",
          2365: "0bf2cfaaf8b7ce17bff30de92b8aa160",
          2398: "a0269fa5700f9b13184dae8c75a6a3ee",
          2442: "c4e42a91f85f0c30cfc1908077fa514e",
          2466: "7cf3bfdce4d7a794d511fab5723e7528",
          2583: "dab4fbefd32ea14fa02c4eae9f761daf",
          2642: "0f2b6ded7d2ad6a3c91b99dc428255fb",
          2649: "0d8a0701e6c5bcbc2a358434745854e9",
          2678: "25c4deebd6c85ced69a9670054281e71",
          2776: "c850e01797c6716a9ea805f5d9d9a87c",
          2864: "dd810bf143a86510e0d57a152f68bca1",
          2865: "7d551a77faa07941174e7febb712edb6",
          3034: "8546f6bb1719f2bb9950e02e35c4f980",
          3117: "3fe07219f0982bef2482cfb346971ec2",
          3197: "88b820efab194e9f0ff8517075481990",
          3343: "41321ef0df4925cd01ba2217166531fd",
          3370: "ced74caf8438d52a05dc66ddb8550ebe",
          3475: "35f09749add906646a108a18a0f9b333",
          3486: "e8e8e0851f0f1dc6de12d6e4773b7f94",
          3505: "3b1dacc40f0369be71e6051601ac3819",
          3571: "5cb25e79e5ca45ee9fd6dada1a17142d",
          3697: "34e59988b042571e83c42cdcf8896638",
          3745: "aa28f76556f93f77fdd9bd0df0f151c3",
          3885: "302a50274e1d7d01f96b233ecef06a97",
          3896: "e242c9fce8c374be71c142966c8e9a35",
          3941: "d87b6a8c3a47a0c135b552b6bb7caf25",
          4011: "6eed8a3e25489d16660fa1fd83167637",
          4237: "daae6d56aa324fc79cedd8551f3b98a5",
          4528: "3e270ec33c29506fb5babab84f9e56c3",
          4578: "174da762fb3109f49dee11e3490954ba",
          4621: "5108b934115f4ecb524eb759f5bd0622",
          4676: "c268dd40e000a3a200ce258298d1ced3",
          4700: "91dfcc9ec1599c792ec834d718629b8c",
          4710: "786f027a6141a254e178e0627a2f6185",
          4731: "785f8ee824ec70f29a4d4c112b0550ac",
          4799: "074bd5bf400a94920bd9e9dce4354364",
          4851: "32146d05164d0b8d59c23062bb520006",
          4861: "ca3b7da5a69d216f6d63dee785fe163c",
          4913: "86e34ef2dd497d142a4d6d52dd599816",
          4964: "9e6738640eac3084c6e6b0cb3982bfd6",
          5018: "a11393f3d9a00e84f871c025ec09c6f9",
          5021: "986d0aaf5b4707b48996f06b4d256c66",
          5076: "495bc0f4b472831e1b2ea1d32a04244c",
          5233: "dd86720edc3382dd4d370c3875b47db7",
          5246: "f5531ff7c5c0b0cf849cd505773ed41f",
          5259: "4547acbbb8a7822e6fbfd08cb2850f8c",
          5265: "a4c4d7a46b39aa570acaaa7a6b353e49",
          5389: "088ced193267049cb56b7f3f880a3d77",
          5415: "04911631e616e937f6b26934b0828dde",
          5498: "04e678c6710245cb22735fc4663224e1",
          5515: "e3c4398232e35ba45da5708a9c764c2f",
          5530: "22bf090876f8fe8cb0fac9b62c4aaa3f",
          5639: "2718a9fce22d6529161369433d2a5f04",
          5656: "bb85751a1f8c89f1387555f3ffd3bfe0",
          5663: "bd8850a93b7725a6146593f6d4bb1d58",
          5742: "afa08a4bae20dc8d4ba33b88c2a19ec5",
          5830: "cd18b4eb47e3d23c8e136b424ffd3736",
          5832: "4e01856affcd3a74c689517eeb8986dd",
          5859: "8f397c130e8442c594666356412b75c7",
          5886: "571afa4d4ae051d955d9d3210c2562e0",
          5912: "bbcffb9391853d74132a1d10b657c714",
          5941: "4070cb4465fdfa2a0f0a9d83a9ae9de2",
          6088: "d730927c111998eb0cab8ed8e3472d0f",
          6126: "9be8a27da629e77499bcafcdae2319ab",
          6267: "03b5e32a2744c2fc6a69cde07e471739",
          6275: "d7163cc487e03ba5cfc5b72f43206ca7",
          6280: "dabadadd17ef0d62736d2b5f3cef5f1f",
          6285: "40f651bde2c5a9e6641cf1047739228f",
          6361: "48f84d3d62a359c6b1823e033359851f",
          6471: "23bfa5f0f2010057ef1d2a2f00a55f3c",
          6491: "4be235b5d37015da89b5c44d7459bc98",
          6664: "0e300badc95c81a6176dcca540ab79db",
          6707: "461034ee65ba8ecbfad81bce396209da",
          6827: "6986225c4039babacb785a7ccfaa64a4",
          6879: "1a4148ef05042567d6bea9a61028e38f",
          6891: "3c9712db46bc4d43dc852ea52443971f",
          6997: "f37a8332362f157fb57bb4a31ac91cc9",
          7010: "9c2497065767b044294a1c1b4b440d4c",
          7073: "462c7667acbc4684e9ddb030334092ab",
          7145: "533de06b3c04bd3dd17bf3bce3ee6845",
          7152: "a4bbd0e1f48305720aed8e9f5447d6d0",
          7407: "078226e0575dc8df40b87132240ec09e",
          7436: "f1a7d182bc645d04e936a6dce0f311fd",
          7452: "fcf100f9a89ad985e6648e2f2b3adbf1",
          7453: "de2720a2426d961a07da564fc7df7883",
          7533: "f7158b2f8ea6993578018130fdb46853",
          7780: "8a83e2f957860c80715407fe61bc14e3",
          7896: "9e7aff2b1ee987b409cdeca49b37e4c8",
          7970: "3eea27fecda321e595d1845b21353089",
          8068: "54fb5bae260332608a9d459ff6c19267",
          8113: "824ef008c2405c691fdca86a62606703",
          8240: "3d8d0e189dbd10d75c54c00681fed4c0",
          8272: "dc547259dc8b9459eb47d719835fd8b5",
          8325: "c407fff464a1f129658efb0fe3914092",
          8379: "b6f6fc2b8fa1e0193aade68fb8959024",
          8391: "9dd64623e8a9ab0508f76d30d7e2a255",
          8431: "3474756c52746f9c6ecb5ef14f78272f",
          8659: "2e2c22256bdcf43b089cdcd2fad3e360",
          8755: "c7ebef731a680e9bb719b9f4672223dd",
          8845: "186f5a6ed70673c41ec44398fd842a9c",
          8872: "cdf95912c29cf4f9335d59e15e1987cf",
          8880: "18cf2af4d06966c7ee760c3db62b174a",
          8938: "e33ebc899715828d01d7d02643493c5b",
          8970: "838974a38df751b62b66c36479ca72d7",
          9022: "bb238835ed3a3200cde689cad820e58c",
          9028: "10f190aff018c4bdd73a6e6c81544da6",
          9055: "c0d07e5d75e4b9cbdf031df97831dc12",
          9126: "33290d720c170fafd946129917f12fb2",
          9377: "d18cbbdb359a8729b437661706877e09",
          9447: "830f177a40695ae0400f27cd08cf162a",
          9511: "cc1e1da43f416528cc10a70b352dafff",
          9512: "05f4be69eeb6542471cb1aece4fbe60f",
          9587: "7297e42141e06fee4c38be7b034bdeee",
          9615: "6a09efbb2267b73f49b79765e580e6b7",
          9627: "486e1b225c1b822ea9e027cabeae706d",
          9719: "80f7acfb260938327518c0848ebbd1a0",
          9757: "dd1679c18f3fa3c136bb49307b7eafe4",
          9760: "c77a74a9ad60fc8318e49df8465dd215",
          9936: "34e40ba34b2994eec19a79d30e2ddbf4",
          9990: "6125c3abe25b8b510ff386967dcaf868"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1913: "ed8a18e4768c2cfb55476973c2d36ae0",
          6275: "dc421a5a1c1497c34ffe052082a5bccd",
          6707: "968ae2db6a67e403cf448ff45ed20cf9",
          6827: "ed8a18e4768c2cfb55476973c2d36ae0",
          7152: "bd226c94514e55d31f2573092d125b96",
          8379: "1e4086942ee78c9a7c98998f1e91ef6b"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", b.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var l = n[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var s = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach(e => {
            var d = b.R;
            d || (d = []);
            var r = f[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var i = b.then(e => o(e, f), t);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, (e, a, d) => e ? c(b.I, r[0], 0, e, o, d) : t(), 1)
            }
          })
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              b.o(b.S, d) || (b.S[d] = {});
              var c = b.S[d],
                f = "@rockstargames/modules-core-header",
                o = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                n = [];
              switch (d) {
                case "default":
                  o("@foundry-int/utils", "5.13.1", () => Promise.all([b.e(2280), b.e(4572)]).then(() => () => b(2280))), o("@foundry/icons", "5.13.1", () => Promise.all([b.e(5021), b.e(1127), b.e(3694), b.e(4836), b.e(6827)]).then(() => () => b(45021))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([b.e(710), b.e(1127), b.e(1062), b.e(1222), b.e(889), b.e(2295)]).then(() => () => b(90710))), o("@radix-ui/react-dialog", "1.1.11", () => Promise.all([b.e(3571), b.e(1127), b.e(8429), b.e(889), b.e(9690), b.e(76), b.e(1208), b.e(4676)]).then(() => () => b(53571))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([b.e(887), b.e(1127), b.e(1062), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(6491)]).then(() => () => b(96491))), o("@radix-ui/react-focus-scope", "1.1.4", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5886)]).then(() => () => b(35886))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([b.e(1127), b.e(1062), b.e(1222), b.e(5656)]).then(() => () => b(25656))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([b.e(1127), b.e(6126)]).then(() => () => b(86126))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([b.e(887), b.e(9511), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(3694), b.e(7533)]).then(() => () => b(69511))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([b.e(887), b.e(7145), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(395)]).then(() => () => b(2776))), o("@radix-ui/react-portal", "1.1.6", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5515)]).then(() => () => b(65515))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(61)]).then(() => () => b(80061))), o("@radix-ui/react-slot", "1.2.0", () => Promise.all([b.e(1127), b.e(3117)]).then(() => () => b(13117))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([b.e(1127), b.e(9447)]).then(() => () => b(39447))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([b.e(1127), b.e(2865)]).then(() => () => b(22865))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([b.e(1127), b.e(1062), b.e(1222), b.e(9055)]).then(() => () => b(69055))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([b.e(9512), b.e(9587), b.e(1127), b.e(8240)]).then(() => () => b(12841))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([b.e(4237), b.e(8068), b.e(1127), b.e(6088), b.e(5966), b.e(8113)]).then(() => () => b(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([b.e(4237), b.e(450), b.e(1127), b.e(6088), b.e(1788), b.e(5941)]).then(() => () => b(89757))), o("clsx", "2.1.1", () => b.e(439).then(() => () => b(10439))), o("framer-motion", "7.10.3", () => Promise.all([b.e(5912), b.e(1127), b.e(2649)]).then(() => () => b(75912))), o("gsap", "3.12.5", () => b.e(9719).then(() => () => b(79719))), o("lodash", "4.17.21", () => b.e(5076).then(() => () => b(15076))), o("react-dom", "18.3.1", () => Promise.all([b.e(1098), b.e(1127)]).then(() => () => b(71098))), o("react-dom", "19.2.0", () => Promise.all([b.e(1127), b.e(2583)]).then(() => () => b(62583))), o("react-remove-scroll", "2.7.1", () => Promise.all([b.e(145), b.e(1127)]).then(() => () => b(80145))), o("react-router-dom", "6.30.1", () => Promise.all([b.e(5389), b.e(1127), b.e(8429)]).then(() => () => b(15389))), o("react", "18.2.0", () => b.e(8659).then(() => () => b(68659))), o("react", "18.3.1", () => b.e(8431).then(() => () => b(48431))), o("spatial-navigation-polyfill", "1.3.1", () => b.e(7780).then(() => () => b(17780)));
                  break;
                case "header":
                  o("@foundry/react", "5.13.1", () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(6707), b.e(8379), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(3694), b.e(4572), b.e(4836), b.e(6741), b.e(1207)]).then(() => () => b(26707)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var r = 0;;) {
                if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                var t = a[r],
                  c = (typeof t)[0];
                if (r >= d.length) return "u" == c;
                var f = d[r],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && t != f) return t < f;
                r++
              }
            },
            d = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : d(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, i, l = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= d.length || "o" == (i = (typeof(b = d[f]))[0])) return !n || ("u" == l ? o > t && !c : "" == l != c);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, c) {
              var f = b.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, b.S[a], d, !1, t, c)) : e(a, b.S[a], d, r, t, c)
            },
            i = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n((e, n, b, l, s, u) => {
              if (!t(n, b)) return i(e, b, u);
              var h = ((e, d, t, c) => {
                var o = c ? f(e[d]) : e[d];
                return (d = Object.keys(o).reduce((e, d) => !r(t, d) || e && !a(e, d) ? e : d, 0)) && o[d]
              })(n, b, s, l);
              return h ? c(h) : u ? u() : void o(((e, a, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + d(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(n, e, b, s, l))
            }),
            s = n((e, o, n, b, l, s) => {
              if (!t(o, n)) return i(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? f(e[d]) : e[d];
                return Object.keys(t).reduce((e, d) => !e || !t[e].loaded && a(e, d) ? d : e, 0)
              })(o, n, b);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, l), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][h])
            }),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8431).then(() => () => b(48431))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(1098).then(() => () => b(71098))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(1828).then(() => () => b(39447))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], () => b.e(3745).then(() => () => b(86126))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], () => b.e(5246).then(() => () => b(22865))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => Promise.all([b.e(1062), b.e(8429), b.e(2442)]).then(() => () => b(80061))),
              86683: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => Promise.all([b.e(1062), b.e(9627)]).then(() => () => b(25656))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([b.e(1062), b.e(1222), b.e(1436)]).then(() => () => b(69055))),
              4572: () => l("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(10439))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([b.e(9512), b.e(9587), b.e(5859)]).then(() => () => b(12841))),
              64836: () => l("default", "@foundry-int/utils", !1, [1, 5, 13, 1], () => Promise.all([b.e(2280), b.e(4572)]).then(() => () => b(2280))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([b.e(3571), b.e(9690), b.e(76), b.e(1208)]).then(() => () => b(53571))),
              90058: () => l("default", "@foundry/icons", !1, [1, 5, 13, 1], () => Promise.all([b.e(5021), b.e(1913)]).then(() => () => b(45021))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(450), b.e(6088), b.e(1788), b.e(9757)]).then(() => () => b(89757))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(8068), b.e(6088), b.e(2169)]).then(() => () => b(32169))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], () => Promise.all([b.e(887), b.e(9511), b.e(1062)]).then(() => () => b(69511))),
              19292: () => l("header", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(6707), b.e(1062), b.e(9690), b.e(6741)]).then(() => () => b(26707))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([b.e(887), b.e(7145), b.e(1062), b.e(9690), b.e(2776)]).then(() => () => b(2776))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => Promise.all([b.e(710), b.e(1062)]).then(() => () => b(90710))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], () => b.e(5912).then(() => () => b(75912))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8659).then(() => () => b(68659))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => b.e(7780).then(() => () => b(17780))),
              31062: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(4964).then(() => () => b(62583))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => b.e(145).then(() => () => b(80145))),
              80076: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(5498).then(() => () => b(13117))),
              55856: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(7896).then(() => () => b(65515))),
              56041: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(3505).then(() => () => b(35886))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([b.e(5389), b.e(8429)]).then(() => () => b(15389))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], () => b.e(5076).then(() => () => b(15076))),
              6630: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => b.e(8872).then(() => () => b(96491))),
              42828: () => l("default", "gsap", !1, [4, 3, 12, 5], () => b.e(9719).then(() => () => b(79719)))
            },
            p = {
              76: [80076],
              889: [74406, 79158],
              1062: [31062],
              1127: [71127],
              1207: [24780, 90058],
              1208: [55856, 56041],
              1222: [21222],
              1788: [81788],
              2372: [34902, 86683],
              3694: [63694],
              4572: [4572],
              4836: [64836],
              5966: [95966],
              6088: [9623, 16188],
              6275: [2918, 9046, 19292, 42638, 61339, 63582, 73579, 79952],
              6741: [6630, 42828],
              8429: [18429],
              9690: [19690]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(p, e) && p[e].forEach(e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, b.m[e] = d => {
                    delete b.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], b.m[e] = d => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var t = h[e]();
                  t.then ? a.push(u[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            b.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1913: 1,
                6275: 1,
                6707: 1,
                6827: 1,
                7152: 1,
                8379: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = b.miniCssF(e),
                  t = b.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (f = d[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((t = (f = c[r]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          b.f.j = (a, d) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(2(07|08|22)|062|127|788|913)|(23|45)72|(483|596|7)6|3694|6741|8429|889|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, d => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, o] = d,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) b.o(f, r) && (b.m[r] = f[r]);
                o && o(b)
              }
              for (a && a(d); n < c.length; n++) t = c[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), b.nc = void 0, b(93032), b(42029)
      })())
    }
  }
});