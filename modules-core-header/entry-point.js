try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "002b1571-d071-4a9f-bc27-876d26cf31ec", e._sentryDebugIdIdentifier = "sentry-dbid-002b1571-d071-4a9f-bc27-876d26cf31ec")
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
        var e, r, t, d, c, f, o = {
            20154(e, a, r) {
              (0, r(89160).w)(1)
            },
            89160(e, a, r) {
              const t = r(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            35649(e, a, r) {
              r(20154)
            },
            51908(e, a, r) {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            72892(e, a, r) {
              "use strict";
              var t = {
                  "./core": () => Promise.all([r.e(2145), r.e(7706), r.e(31), r.e(5524), r.e(4637), r.e(1270), r.e(2909), r.e(3517), r.e(3331), r.e(6629)]).then(() => () => r(80917))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
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
          var d = Object.create(null);
          i.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          31: "00bfdc839c3649e579a5482cfdc56200",
          36: "49c78a96f59d7413c5d169a25d7cd2ea",
          162: "d93c7f76482827fd626b38ba446f575f",
          595: "ca4ded0fb4ace2e6a1b6219d7d59dfcb",
          675: "e0b1401be76cba02e5ef7c19951b76e7",
          685: "2255ddd5e714330fcaadf6e365350505",
          784: "483e5e5103bde499e553d511a28d5f99",
          799: "165105271092d9b792b2aba857bfe0e2",
          1003: "4d4d04fdd7b9a7a91e5df90b0673dd15",
          1010: "076a0c9e6ceb7c64a43ac9c36359e279",
          1256: "e34bf29a3fdfdd62c4e03711d1821839",
          1338: "96d019840481c934a2381bd2dc31919b",
          1374: "3cce998a85720797f74406c0993feb22",
          1378: "fc6911ab8728bbd8709e465fa5a98f7b",
          1421: "6356cecf8c3b0554b6532f5a905a1168",
          1433: "0f2bb65c0cb77a672a3ceca26ae1702f",
          1495: "8711775769608bc4f91ff91bcdb472ea",
          1924: "739e9961154e2c40adb21f268df1ad6a",
          2080: "4988c902554000fbcbcda7cb6462896e",
          2145: "2cceedd28c1539a7e1b6303f8b20c991",
          2174: "b1e2b09e3f2eb30094925a57b2781052",
          2463: "78e7cf2f38f08e388e07e92e4b5b881c",
          2497: "bee12310f95a33089609c35d8a28f303",
          2573: "fc2b30f9cef830ba7959b1e95b59283b",
          2575: "588a98d0e47a210b9026ca392f21e504",
          2581: "207d69dcf6fa560e8a4658a279020130",
          2823: "9ffd0ab152325a32f9bd210a9cd1d506",
          2976: "87b1eea91700a32df7cd827a3add0173",
          3135: "a4980e8ae98e0c4b5c442879cb2a551d",
          3180: "08c0afd8675d6543a4ceb32d007bef39",
          3200: "212528b1900578145431b8095aae89b9",
          3285: "3e13688d520bb65f662974bcd3799c24",
          3529: "8132a6c3d6c939800b7a5b641d560bb6",
          3541: "4235bebc68d3e71c8ec6a47b1ae14ae7",
          3802: "3494f1baab62575eb627dbba86050977",
          3876: "05c57e5bc4aa9c33e8af0bc823da6f40",
          3982: "e16dd8be16c92308ad887812315bc97e",
          4158: "bb4b462cf22d5d8eb54723f9b4c76dbf",
          4178: "b7dc90ad4ac202d68232f89ad7df7a55",
          4292: "5106522180c78f28a07b2bde57e1593e",
          4446: "1488336e4379ee7e883e9d35aa7ec809",
          4555: "c67226a350a53205a4ef03420b335e80",
          4656: "b9c27bb5f9b534eb316c9df47a8837b8",
          4844: "2eda1ba779376a69c011f791f607cdbb",
          4921: "248019ad923cfda07b18b3b99d54e46c",
          4956: "849287e38d2e053e16f9ed30009ff806",
          4976: "1803031646c41ec6713816371d545be5",
          5047: "e35b446233f758d297f33c39975c8b20",
          5083: "fec7f0b39a4e582a836ede370547211f",
          5127: "c1e1b1bcac21a4895ea12d9aec3ac197",
          5204: "1931b748ebce62a74e294851dabc126f",
          5456: "8c9b0d031abe188cd357020e81367b83",
          5524: "144c6aaa3e97da2e7ee3b542b1997409",
          5612: "f492ea41fc45890d7cde54e097ef7275",
          5721: "2aca392b892a87cb4171b9954fcc25a5",
          5860: "ec5d8fa82df07c71c2e33a80395a4f4a",
          5886: "fd77d6e321242aeb47737293323c7e97",
          5922: "d2ef084265d192f8d4aeb46ddf3b3b95",
          5924: "3369f28da0d2ac236176b5edfa6834a1",
          5963: "e6b01b2a1867b8a95e1e9039750fb343",
          5997: "a4a2568143a2e8b21c8528d5a989493b",
          6035: "7c98cdf765463221f1e4ab53c035d403",
          6233: "0c28ad0b491a4669cd479392e38f0887",
          6260: "53e67a4c58dbb8ccca4c430ffe9be7ae",
          6279: "be4cc215637067370c671c237902c3f7",
          6559: "da380a57549af42c0680b7799186848f",
          6583: "dfab7b2ae71515e200c2792a74e447e9",
          6629: "58a2fad7b353bed6b638855e76e51a21",
          6663: "6be07bca5c9774a24791885261a1b057",
          6809: "2aa7298f76dd45c767d42304479e35ef",
          6883: "10f517ce02821c4e4a31b8d66555eaf2",
          6936: "1b3bf634bcf17d735a2b8a2822eafeb7",
          7147: "a7a5b930e6d13f8dec206869c8919a5f",
          7227: "15c0f9a15a30c1398b42ba0aa0824e70",
          7342: "77d55ba8783cccf0f7772e6d43a65dd5",
          7428: "b4f9182c9728370387ab1e7b3b959ee0",
          7706: "5e791ee69f2fc4e800a4d4936d991f3f",
          7742: "9d282970673c34ea450300945e9097c5",
          7902: "b5f4363c233d22ef1ca34e6f27e472cd",
          8295: "3fbeafe47ccd27305ceaff8a9af44692",
          8403: "f60e2f4954fde584d22fd085746e436d",
          8517: "1b8a6bca66185e43cdbdfa952c2c9705",
          8614: "b4ead8c7a276906c5da23cae1b2b0d03",
          8805: "8d7201c7240b85fd66d60215c84a9d08",
          8819: "c64dcb9abf968673526323156d86c838",
          8853: "bd13b0336fa7db7b386f41e67ce8c66b",
          8940: "7bd30b834a8b4461eff9efb84f5da443",
          8957: "fc0bbfc72e0df11a4c2dd7a396859e60",
          9067: "a9f2adbd71cf3fd919daa9a84daf92f3",
          9190: "d569307cd51e1cf44d7ae5daa25665de",
          9264: "3733d671cbf69f594b32af8e993df147",
          9793: "788661a1811eeecf4d07cb2672f6e210",
          9968: "641555df04d7e2b89d97320e6bf6fdce"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1133: "a918c070930a0014e79e0865fe7f82e9",
          1433: "9605e4661b50b9d4fc907ee456d15b70",
          1530: "a918c070930a0014e79e0865fe7f82e9",
          3200: "07b9e06ab02239d83522449d9cad2a65",
          3514: "a918c070930a0014e79e0865fe7f82e9",
          5924: "418522d0d12f72d80b558f9733dd6579",
          6629: "6cf2cfa51258f7bbc33f7ef4120df583",
          7001: "9605e4661b50b9d4fc907ee456d15b70",
          7342: "f1e1a29dc9a5fa24023ed2fc4dcbeb6d",
          7706: "eda7209165962e3eebd3ea435c000fbe",
          9149: "a918c070930a0014e79e0865fe7f82e9"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-header:", i.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var b = n[l];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == d + r) {
                  f = b;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var s = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var i = e(r, c);
                    if (!i || !i.then) return o(i, f, n);
                    var l = i.then(e => o(e, f), d);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, o, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/modules-core-header",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@foundry-int/utils", "6.2.0", () => Promise.all([i.e(5721), i.e(1270)]).then(() => () => i(45721))), o("@foundry/icons", "6.2.0", () => Promise.all([i.e(4976), i.e(4637), i.e(6653), i.e(1433)]).then(() => () => i(64976))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([i.e(1010), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(9793)]).then(() => () => i(81010))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([i.e(5860), i.e(8819), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(1172), i.e(2174)]).then(() => () => i(88819))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(3876)]).then(() => () => i(83876))), o("@radix-ui/react-focus-scope", "1.1.8", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(4956)]).then(() => () => i(4956))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([i.e(4637), i.e(6883)]).then(() => () => i(96883))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([i.e(5860), i.e(9067), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(4293), i.e(4555)]).then(() => () => i(79067))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([i.e(5860), i.e(8295), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(1172), i.e(1421)]).then(() => () => i(41421))), o("@radix-ui/react-portal", "1.1.10", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(9190)]).then(() => () => i(29190))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(5204)]).then(() => () => i(2823))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([i.e(4637), i.e(2976)]).then(() => () => i(2976))), o("@radix-ui/react-slot", "1.2.4", () => Promise.all([i.e(4637), i.e(8957)]).then(() => () => i(38957))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([i.e(4637), i.e(2463)]).then(() => () => i(12463))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(5047)]).then(() => () => i(45047))), o("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(5922)]).then(() => () => i(3541))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(2080), i.e(2145), i.e(2497), i.e(31), i.e(4637), i.e(8403)]).then(() => () => i(68403))), o("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([i.e(2080), i.e(6260), i.e(5924), i.e(7706), i.e(3135), i.e(4637), i.e(4017), i.e(7793), i.e(7937), i.e(6653), i.e(7516), i.e(1270), i.e(7342), i.e(3517)]).then(() => () => i(67342))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(7147), i.e(31), i.e(6583), i.e(4637), i.e(5997), i.e(2909), i.e(3331), i.e(799)]).then(() => () => i(90799))), o("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(2145), i.e(7147), i.e(31), i.e(1378), i.e(4637), i.e(5997), i.e(2909), i.e(8940)]).then(() => () => i(18940))), o("@vanilla-extract/recipes", "0.5.7", () => Promise.all([i.e(6260), i.e(8614)]).then(() => () => i(78614))), o("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), o("framer-motion", "12.38.0", () => Promise.all([i.e(6663), i.e(4637), i.e(6936)]).then(() => () => i(36663))), o("gsap", "3.12.5", () => i.e(3529).then(() => () => i(93529))), o("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(4637)]).then(() => () => i(30162))), o("react-remove-scroll", "2.7.2", () => Promise.all([i.e(1924), i.e(4637)]).then(() => () => i(31924))), o("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), o("spatial-navigation-polyfill", "1.3.1", () => i.e(4446).then(() => () => i(54446)));
                  break;
                case "header":
                  o("@foundry/react", "6.2.0", () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(5924), i.e(3200), i.e(7706), i.e(3135), i.e(9968), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(6653), i.e(4293), i.e(7516), i.e(1270), i.e(5812), i.e(9149)]).then(() => () => i(17587))), o("@foundry/react", "6.2.0", () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(5924), i.e(3200), i.e(7706), i.e(2497), i.e(1256), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(6653), i.e(4293), i.e(7516), i.e(1270), i.e(5812), i.e(1133)]).then(() => () => i(91256)))
              }
              return e[r] = n.length ? Promise.all(n).then(() => e[r] = 1) : 1
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
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var t = 0;;) {
                if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                var d = a[t],
                  c = (typeof d)[0];
                if (t >= r.length) return "u" == c;
                var f = r[t],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && d != f) return d < f;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : r(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var i, l, b = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (l = (typeof(i = r[f]))[0])) return !n || ("u" == b ? o > d && !c : "" == b != c);
                  if ("u" == l) {
                    if (!n || "u" != b) return !1
                  } else if (n)
                    if (b == l)
                      if (o <= d) {
                        if (i != a[o]) return !1
                      } else {
                        if (c ? i > a[o] : i < a[o]) return !1;
                        i != a[o] && (n = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || l < b != c) return !1;
                    n = !1
                  } else "s" != b && "n" != b && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && i.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            o = e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            },
            n = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = o((e, r, t, o, i) => d(r, t) ? c(((e, r, t) => {
              var d = t ? f(e[r]) : e[r];
              return (r = Object.keys(d).reduce((e, r) => !e || a(e, r) ? r : e, 0)) && d[r]
            })(r, t, o)) : n(e, t, i)),
            b = o((e, o, i, l, b, s) => {
              if (!d(o, i)) return n(e, i, s);
              var u, h = ((e, r, t) => {
                var d = t ? f(e[r]) : e[r];
                return Object.keys(d).reduce((e, r) => !e || !d[e].loaded && a(e, r) ? r : e, 0)
              })(o, i, l);
              return t(b, h) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(o, i, h, b), "undefined" != typeof console && console.warn && console.warn(u)), c(o[i][h])
            }),
            s = {},
            u = {
              4637: () => b("default", "react", !1, [1, 18, 2, 0], () => i.e(2581).then(() => () => i(22581))),
              81270: () => b("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              42909: () => b("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(2080), i.e(2145), i.e(2497), i.e(784)]).then(() => () => i(68403))),
              13517: () => b("default", "framer-motion", !1, [1, 12, 38, 0], () => i.e(6663).then(() => () => i(36663))),
              13331: () => b("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(2145), i.e(7147), i.e(1378), i.e(5997), i.e(6559)]).then(() => () => i(18940))),
              37116: () => b("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([i.e(2080), i.e(6260), i.e(5924), i.e(3135), i.e(4017), i.e(7793), i.e(7937), i.e(6653), i.e(7516), i.e(7342)]).then(() => () => i(67342))),
              46857: () => l("header", "@foundry/react", !1, () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(5924), i.e(3200), i.e(2497), i.e(1256), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(6653), i.e(4293), i.e(7516), i.e(5812), i.e(3514)]).then(() => () => i(91256))),
              82199: () => b("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([i.e(7147), i.e(6583), i.e(5997), i.e(3180)]).then(() => () => i(90799))),
              19563: () => b("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([i.e(4017), i.e(7937), i.e(3541)]).then(() => () => i(3541))),
              94555: () => b("default", "@foundry-int/utils", !1, [0], () => Promise.all([i.e(5721), i.e(1270)]).then(() => () => i(45721))),
              84017: () => b("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              19394: () => b("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => i.e(595).then(() => () => i(2976))),
              20640: () => b("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => i.e(9264).then(() => () => i(96883))),
              80692: () => b("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => i.e(4844).then(() => () => i(12463))),
              27351: () => b("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => i.e(1924).then(() => () => i(31924))),
              45108: () => b("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => i.e(1495).then(() => () => i(83876))),
              73463: () => b("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => i.e(2823).then(() => () => i(2823))),
              27937: () => b("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => i.e(1338).then(() => () => i(38957))),
              84293: () => b("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => i.e(7428).then(() => () => i(45047))),
              39646: () => b("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => i.e(6233).then(() => () => i(78614))),
              46929: () => b("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([i.e(5860), i.e(8295), i.e(9394), i.e(1172), i.e(3802)]).then(() => () => i(41421))),
              52920: () => b("default", "@foundry/icons", !1, [0], () => Promise.all([i.e(4976), i.e(7001)]).then(() => () => i(64976))),
              80676: () => b("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([i.e(5860), i.e(8819), i.e(9394), i.e(1172)]).then(() => () => i(88819))),
              33920: () => b("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([i.e(5860), i.e(9067), i.e(9394), i.e(4293)]).then(() => () => i(79067))),
              34364: () => b("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => i.e(6809).then(() => () => i(29190))),
              39080: () => b("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => i.e(2575).then(() => () => i(4956))),
              58754: () => b("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => Promise.all([i.e(1010), i.e(9394)]).then(() => () => i(81010))),
              59066: () => b("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => i.e(4446).then(() => () => i(54446))),
              93121: () => l("header", "@foundry/react", !1, () => Promise.all([i.e(5860), i.e(8295), i.e(3200), i.e(9968), i.e(9394), i.e(1172), i.e(4293), i.e(5812), i.e(1530)]).then(() => () => i(17587))),
              35812: () => b("default", "gsap", !1, [0], () => i.e(3529).then(() => () => i(93529)))
            },
            h = {
              1172: [27351, 45108, 73463],
              1270: [81270],
              2909: [42909],
              3331: [13331],
              3517: [13517],
              4017: [84017],
              4293: [84293],
              4637: [4637],
              5812: [35812],
              6629: [37116, 46857, 82199],
              6653: [19563, 94555],
              7342: [33920, 34364, 39080, 58754, 59066, 93121],
              7516: [39646, 46929, 52920, 80676],
              7793: [20640, 80692],
              7937: [27937],
              9394: [19394]
            },
            p = {};
          i.f.consumes = (e, a) => {
            i.o(h, e) && h[e].forEach(e => {
              if (i.o(s, e)) return a.push(s[e]);
              if (!p[e]) {
                var r = a => {
                  s[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                p[e] = !0;
                var t = a => {
                  delete s[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = u[e]();
                  d.then ? a.push(s[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1133: 1,
                1433: 1,
                1530: 1,
                3200: 1,
                3514: 1,
                5924: 1,
                6629: 1,
                7001: 1,
                7342: 1,
                7706: 1,
                9149: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1(133|172|270|530)|3(51[47]|331)|4(017|293|637)|7(001|516|793|937)|2909|5812|6653|9149|9394)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, o] = r,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < c.length; n++) d = c[n], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(35649), i(72892)
      })())
    }
  }
});