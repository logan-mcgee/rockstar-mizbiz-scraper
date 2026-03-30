try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b454bfb-b8fa-47e3-aece-7e868724c700", e._sentryDebugIdIdentifier = "sentry-dbid-7b454bfb-b8fa-47e3-aece-7e868724c700")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, a) {
  var f = {},
    r = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        f[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, d, c, n, o, b = {
            17411: (e, a, f) => {
              const r = f(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = r(f.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, f) => {
              (0, f(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = f
            },
            55974: (e, a, f) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([f.e(3004), f.e(7522), f.e(9403), f.e(5117), f.e(5744), f.e(4740), f.e(5087), f.e(4728), f.e(701), f.e(3834), f.e(1127), f.e(8429), f.e(8136), f.e(336), f.e(6990), f.e(181), f.e(1556), f.e(1874), f.e(6130), f.e(6069), f.e(2030), f.e(3226), f.e(1352), f.e(2358), f.e(5055), f.e(76), f.e(1125)]).then(() => () => f(28674)),
                  "./tinaBlockTemplates": () => Promise.all([f.e(5117), f.e(4740), f.e(1127), f.e(8429), f.e(8136), f.e(336), f.e(6990), f.e(1556), f.e(6130), f.e(6069), f.e(3226), f.e(2358), f.e(1409)]).then(() => () => f(4984)),
                  "./types": () => Promise.all([f.e(3004), f.e(7522), f.e(9403), f.e(5117), f.e(5744), f.e(4740), f.e(5087), f.e(4728), f.e(701), f.e(3834), f.e(1127), f.e(8429), f.e(8136), f.e(336), f.e(6990), f.e(181), f.e(1556), f.e(1874), f.e(6130), f.e(6069), f.e(2030), f.e(3226), f.e(1352), f.e(2358), f.e(5055), f.e(76), f.e(1125)]).then(() => () => f(76808))
                },
                t = (e, a) => (f.R = a, a = f.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), f.R = void 0, a),
                d = (e, a) => {
                  if (f.S) {
                    var r = "default",
                      t = f.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[r] = e, f.I(r, a)
                  }
                };
              f.d(a, {
                get: () => t,
                init: () => d
              })
            },
            77027: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var r = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, t = 0, d = r.length; t !== a && d >= 0;) "/" === r[--d] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return f.protocol + "//" + f.host + c
              };
              Number.isInteger
            },
            93032: (e, a, f) => {
              f(28419)
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var f = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
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
          var r = Object.create(null);
          i.r(r);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & f && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(r, d), r
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, f) => (i.f[f](e, a), a), [])), i.u = e => "js/" + {
          68: "07dca93a664ec0d93ad6562ee3d87db2",
          131: "27dc88c91a9e74aac301653e04a2a85c",
          173: "08823e94bc1e19607508cab6c8b41f34",
          278: "da73bb54a9da94a60b1fab066c86f12c",
          299: "ff049f2b7ffbf5ff86a90695252aba8e",
          314: "1b64872c5301465409ca8abc5ffe7bef",
          439: "221548651f769b8441052d5ea00597c6",
          602: "3c9359f28db8388da82ed4e621f35b7c",
          662: "397e5bad582a8ef1f413f8f354741699",
          701: "d3d14e6f9622ffd900162b79e4d52d78",
          824: "d245a1e040ec7ba14fa7b5002c68b7ef",
          884: "2f19571e98016ca4df241a42df7e92ad",
          907: "1b49cfd04de5d860b5dca6fc718186bf",
          961: "1130cfc8199b02221a51fc9459459847",
          1054: "20ab498e7fc5f0b46efa7ceef6c74aac",
          1057: "c73f298bad3c7859fa3898340f7a7b63",
          1078: "40022c6af3561cd303362482cd81f12c",
          1098: "c99caf091f01c443c04f0f4415f05dcc",
          1125: "87886a0b08e0933eb46776c79bf41314",
          1242: "df390abe6d812455d34f670660f6d376",
          1409: "bfc42c006de56f924dfa45a90bf6ac47",
          1758: "6a619f9483d0b6d774bbfdd6a8f58604",
          1822: "5bc14c65a17d044c3b1601a8365f05fc",
          1858: "686fb36bd168f8a0dcaa13f6c95e6af9",
          1868: "2ffe0d68397280c41ff82c6c8b6f04a9",
          2065: "43a2d6caab733535b2c5b49c9580305a",
          2156: "70c0edd83774f2e2a1f74d77b00dbcb1",
          2169: "8615cb3c022fef756e1130ef0c5ebb47",
          2171: "72106095bec6f6b046b023175a34eadf",
          2221: "18fbf0c4515c1262c5055249072ee111",
          2234: "fa781ef30c2fc818721f66317921286b",
          2243: "82802a7efc2a3466a858bfd1b47896a7",
          2306: "3a38460b4d41c61902544b338de3e182",
          2347: "e71343cfc1421a1c2a191b76703c59a5",
          2358: "fda1bb7904636aa929278f4d983eab25",
          2365: "15603e80323fc7b70c96f2aa5fbf37f7",
          2368: "f0e7a7e351253e454d4ff0fdfa649e03",
          2398: "505f625d02bb4f1612be3c43b10bd7fb",
          2424: "7a8756093bc1d5b2fbb548436820ef05",
          2466: "8ec9494d88557b8156fea3420b093233",
          2642: "fc6b53f50b43c7f0e4ffbad29f9b201d",
          2678: "cc788655b138d49ccbc430dea3615906",
          2787: "0a4140c0a3c29e9214801abc27f7e4f2",
          2864: "855ca2a8cccbb69492e7cbfe68cc0faa",
          3004: "96b16af68442d34a97380f7ea498e68b",
          3034: "06ba04167718983af97c066c136cbb37",
          3197: "3352d1d4be5f222d4155c2d102176663",
          3342: "7f6c58533c52227dcbbb30aa1610388b",
          3343: "535d863125be8087ea95fe8c0b625577",
          3370: "3e958ec2dbc13b0be8113c297902cfe3",
          3387: "b9a1678b00f4bffeb78e1bb7ba9969a6",
          3438: "5fe0b1786a82b9d80903df7a365d1d1b",
          3475: "fade958c591937ab47a4b9427c1ef8fa",
          3486: "edf95062e3fd212dd49cc7177732e079",
          3697: "a36c20cefa9a6be335a8ee82df102954",
          3834: "eac65762e9a9e5ba26acedd431d8df20",
          3885: "e399a73eebf9a7f81353a4b449e04978",
          3896: "2babed88cc29023dc76e1587b9bdad37",
          3941: "71d219cfd8dc58662adf8452310be587",
          4011: "ae033a834c6eca27e26e9201ab592964",
          4057: "d113d952d6ebc35cc0711e92c59e7b04",
          4232: "d673aa3495a09f0ea3e3ab5bf949f5ed",
          4528: "006b02f3a2185ef8f49490ea550233fc",
          4550: "23066748cbb6fec3292e07f5c45f170f",
          4578: "18bbd1a34ced2790e95adad1dc6df997",
          4621: "005f0f6e0c7076e2007d8784d9074e1d",
          4700: "2e7c0ee8dab76423b3ef3f3c2d953385",
          4710: "6a0abb608526701a32c170af30a6d378",
          4728: "6f5cfabc9808edf80563d65c94616169",
          4731: "3c31bb925e2cf7c795d5df637ed00142",
          4740: "9f0df42946294e1edb4af6d9aa11f515",
          4799: "84280cee2fd1017fc88c8d06d2550327",
          4851: "7dc65c183dc1faf35e5ab4969b118488",
          4861: "d7cfc9305cc27cc06f683c567d0eb1cc",
          4913: "e7bf1f19eb95577f8d50a084163260d3",
          5018: "0a4c396480c30f289a1b1e6c38dcb208",
          5055: "da9f20e8d4aa8906b105efa99d9d40a6",
          5076: "45f28c778675e6524fcdb5573359a52a",
          5087: "15c5ac237c847102f126b646e137b40f",
          5117: "b0eacd644a868b06f470ef63a817a823",
          5168: "a8956eae88cc7ab2731e4c8adeda7ab8",
          5233: "010b8ed0be137177642745a2c54207c5",
          5259: "d5eb670f24b98b241ae051825f211f2b",
          5265: "c28346d84eecaadfaa0145452e5c4614",
          5389: "b424460af03c6c3c77fb0bfed3445b9e",
          5400: "57d18232afafcf95bcd91906873820db",
          5415: "10486050a25bf8db808d97de0209975f",
          5493: "028ee4f99e825c2bd28369a8a0dd566d",
          5530: "35f83febe4ce30219d6dace30a4b6953",
          5639: "4807db32a228226b69a2a3bf73e562f2",
          5663: "0ea2c9e608a60f8d172cc76d05ecb91b",
          5742: "d4be607614d5efec6f1b410cf52b0abe",
          5744: "4aa9e34f297725e21de514d7e4d9b35b",
          5830: "1685f342a2e3878166a89d6f02d5c03b",
          5832: "206615583619c1a327280a0e13e1af8c",
          5859: "49388d958ef6c12b66deff0f7927e17b",
          6088: "0bba49dd9ea0384d3d7cd36049a6ec27",
          6130: "74f9441b20553859877acc0b52f9002b",
          6267: "74ac455f70b54fce5ae4be2a4ac9b34a",
          6280: "eb93bc42e8f3fff7865d048e305d40bb",
          6285: "66b99725e1da12166102f09f5005ecfa",
          6327: "83e9a12deb11ab96d9fa5f630d1fa225",
          6361: "4c283660b33ad0dc55375a23c08f8180",
          6471: "6075a31fea90c8de3d6aaefe2c2602b7",
          6664: "8e5369fc880805744a2a55db75fc0bc9",
          6879: "60570e96a4aad0a1e6f9e186fcb63b87",
          6891: "767b83c2e4149e0183203de06bf6d94b",
          6997: "8f06a4e467794624c545e5ce6498297f",
          7010: "3830c3e6fa123431737e753b5eb1133f",
          7041: "ab00449f42a8d88d90e35613bedcb2f0",
          7073: "8af73b05ed58f8b8cc85e74db9c13a24",
          7407: "55ebfc115012170f9749bf6fd451939f",
          7436: "e8eec89a6e2c953f80fa7847e01fbfac",
          7452: "689552f410850a8f0247f6906074517a",
          7453: "37fdffe3589c63729789d8fbe3e8db20",
          7522: "f09165da87dab9a7ab149354951b5de0",
          7785: "2fe92278f1b68bda5e33df219bd55571",
          7970: "4d4c87bde6cb0f4c2b0cf9d137d1da1d",
          8068: "0ca935a55dcf34ff88f5ce9a2166030e",
          8240: "c145d46cb7335980d0dba015c7a07fee",
          8272: "fefe268b9f0f2742dbadbade5c08449d",
          8325: "5fc5a69ea59bdfe68d972b80babf7e61",
          8391: "9575fbc59fe57de510f6c44c68880d68",
          8431: "787e6760455160f7d9f908bd91a52ef4",
          8708: "a4baac3efd61bf2947f39575181870c7",
          8755: "73581368ab6b1c36fdaa087433a49c20",
          8845: "2e405489a6be86636ae5e210528fc83b",
          8880: "62ae0f667d124398965596742ca3479d",
          8938: "ab38d4b2adecd202aeef018a18261764",
          8970: "128d09f1bac01bd245bc4ab58eb921d5",
          9022: "af14a1a6c0d9520caa9b09f897960c33",
          9028: "11bc7e0b715173c205dce00276fa84e3",
          9126: "70b8e78f58f2e95f17b241afe8be8be4",
          9377: "a3796493f9d76a7488f9df9c015d6501",
          9403: "8ed29fef42b11e0daca3c0cb85e9be97",
          9477: "f6129565223b69e4d6ec38f32e67b241",
          9615: "a750c220479143b7abd11f96242c7927",
          9760: "d9cadd1eeb10cda7e05a9ac75ba18cca",
          9923: "0ae40c5bc09f15fbb6e3cbca6b0e0736",
          9936: "aea4b9e60567b3ffce2cef12770ea5c3",
          9987: "71fbac56af15baa20ab0963f2d802dff",
          9990: "6cb3e91f72e1ba3c8e25d395ac83baa7"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "34cab69c02779739127f3b0ad51e5f64",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1078: "214e2f94528af5f726d2150d0a4f2215",
          1125: "d52d2ae8afd2665cf90fd98ed36f3c81",
          2358: "165fa99f963184aba806d81f713ae37c",
          3226: "3a4070d4c77506d8955255a1ccc7b2a6",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          3834: "ed78d69898cf7c75ad9f3c7f513105b2",
          4297: "15e4405e61879889fa95b861d8f64a87",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          5055: "bee7e71bb03044211d6b687fb92a9805",
          6069: "ff5d40a08af069c8bbed595ff7e87c9b",
          7041: "4aeb7ba6061f915cc88d91e3c08ad280",
          8683: "ec396ec8a36762ae49c6722682ad4e04",
          9923: "64d7f9e177dae263f83a61669b860024"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, f, r) => {
          if (d[e]) d[e].push(a);
          else {
            var t, n;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + f) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", c + f), t.src = e), d[e] = [a];
            var l = (a, f) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach(e => e(f)), a) return a(f)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), n && document.head.appendChild(t)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          1409: [11438, 17523, 44019, 83166],
          2358: [64064],
          3226: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var f = i.R;
            f || (f = []);
            var r = o[e];
            if (!(f.indexOf(r) >= 0)) {
              if (f.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, f, d, c, n, o) => {
                  try {
                    var b = e(f, d);
                    if (!b || !b.then) return n(b, c, o);
                    var s = b.then(e => n(e, c), t);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => d(a.get, r[1], f, 0, n, t),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, (e, a, f) => e ? d(i.I, r[0], 0, e, c, f) : t(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, r) => {
            r || (r = []);
            var t = a[f];
            if (t || (t = a[f] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var d = i.S[f],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, f, r) => {
                  var t = d[e] = d[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (t[a] = {
                    get: f,
                    from: c,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = i(e);
                    if (!t) return;
                    var d = e => e && e.init && e.init(i.S[f], r);
                    if (t.then) return b.push(t.then(d, a));
                    var c = d(t);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === f && (n("@foundry/react", "5.17.3", () => Promise.all([i.e(3004), i.e(4232), i.e(602), i.e(2787), i.e(9403), i.e(5744), i.e(4728), i.e(7041), i.e(1127), i.e(8429), i.e(1556), i.e(5168)]).then(() => () => i(26313))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(2787), i.e(5493), i.e(1127), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(3004), i.e(4232), i.e(7522), i.e(5744), i.e(4740), i.e(1127), i.e(8429), i.e(8136), i.e(1556), i.e(6069), i.e(8683), i.e(9477)]).then(() => () => i(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(3004), i.e(4232), i.e(7522), i.e(5744), i.e(5087), i.e(701), i.e(1127), i.e(8429), i.e(8136), i.e(6990), i.e(181), i.e(1556), i.e(1874), i.e(2030), i.e(1352), i.e(2424), i.e(5055), i.e(9923)]).then(() => () => i(89600))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([i.e(7522), i.e(9403), i.e(4740), i.e(1127), i.e(8429), i.e(8136), i.e(1556), i.e(6069), i.e(2030), i.e(3226), i.e(76), i.e(1078)]).then(() => () => i(90884))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(7522), i.e(5087), i.e(1127), i.e(6990), i.e(1874), i.e(2030), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(2065), i.e(8068), i.e(1127), i.e(8136), i.e(336), i.e(181), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(1127), i.e(8429), i.e(8136), i.e(336), i.e(6990), i.e(1874), i.e(6130), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(602), i.e(2065), i.e(4057), i.e(1127), i.e(336), i.e(6990), i.e(181), i.e(6088), i.e(3342)]).then(() => () => i(43342))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(1127)]).then(() => () => i(43387))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), o(25136), o(29441)), b.length ? e[f] = Promise.all(b).then(() => e[f] = 1) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var r = f.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = f[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = f[1] ? a(f[1]) : [];
              return f[2] && (r.length++, r.push.apply(r, a(f[2]))), f[3] && (r.push([]), r.push.apply(r, a(f[3]))), r
            },
            a = e => {
              var f = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (f + .5) {
                r += 0 == f ? ">=" : -1 == f ? "<" : 1 == f ? "^" : 2 == f ? "~" : f > 0 ? "=" : "!=";
                for (var t = 1, d = 1; d < e.length; d++) t--, r += "u" == (typeof(n = e[d]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
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
            f = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  d = t < 0;
                d && (t = -t - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(b = r[c]))[0])) return !o || ("u" == i ? n > t && !d : "" == i != d);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || s < i != d) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? f(h, r) : !u())
              }
              return !!u()
            },
            r = (a, f, r) => {
              var t = r ? (e => Object.keys(e).reduce((a, f) => (e[f].eager && (a[f] = e[f]), a), {}))(a[f]) : a[f];
              return Object.keys(t).reduce((a, f) => !a || !t[a].loaded && ((a, f) => {
                a = e(a), f = e(f);
                for (var r = 0;;) {
                  if (r >= a.length) return r < f.length && "u" != (typeof f[r])[0];
                  var t = a[r],
                    d = (typeof t)[0];
                  if (r >= f.length) return "u" == d;
                  var c = f[r],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && t != c) return t < c;
                  r++
                }
              })(a, f) ? f : a, 0)
            },
            t = (e, a, f) => f ? f() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, f, r, t, d) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], f, !1, t, d)) : e(a, i.S[a], f, r, t, d)
            })((e, d, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return t(e, c, b);
              var s, l, u = r(d, c, n);
              return f(o, u) || (l = ((e, f, r, t) => "Unsatisfied version " + r + " from " + (r && e[f][r].from) + " of shared singleton module " + f + " (required " + a(t) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              58136: () => d("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(602), i.e(2065), i.e(4057), i.e(336), i.e(6990), i.e(181), i.e(6088), i.e(961)]).then(() => () => i(43342))),
              10336: () => d("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              56990: () => d("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(2787), i.e(5493), i.e(5859)]).then(() => () => i(12841))),
              10181: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              1556: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61874: () => d("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([i.e(602), i.e(2065), i.e(8068), i.e(8136), i.e(336), i.e(181), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              22030: () => d("default", "@rsgweb/tina", !1, [4, 0, 0, 0], () => Promise.all([i.e(5117), i.e(8429), i.e(8136), i.e(336), i.e(6990), i.e(1874), i.e(6130), i.e(3438)]).then(() => () => i(99747))),
              48863: () => d("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              21352: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              93231: () => d("default", "@foundry/react", !1, [2, 5, 17], () => Promise.all([i.e(4232), i.e(602), i.e(2787), i.e(9403), i.e(4728), i.e(7041)]).then(() => () => i(26313))),
              6900: () => d("default", "@rsgweb/modules-core-engagement", !1, [4, 0, 0, 0], () => Promise.all([i.e(4232), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              9596: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [4, 0, 0, 0], () => i.e(884).then(() => () => i(90884))),
              36444: () => d("default", "@rsgweb/modules-core-highlights", !1, [4, 0, 0, 0], () => Promise.all([i.e(4297), i.e(9987)]).then(() => () => i(32368))),
              39540: () => d("default", "@rsgweb/modules-core-carousel", !1, [4, 0, 0, 0], () => Promise.all([i.e(4232), i.e(8683), i.e(1858)]).then(() => () => i(89477))),
              79518: () => d("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              87608: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400)))
            },
            o = {
              181: [10181],
              336: [10336],
              1125: [6900, 9596, 36444, 39540, 79518, 87608],
              1127: [71127],
              1352: [21352],
              1556: [1556],
              1874: [61874],
              2030: [22030],
              3226: [48863],
              5055: [93231],
              6990: [56990],
              8136: [58136],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var f = a => {
                  c[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(c[e] = t.then(f).catch(r)) : f(t)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, f) => {
              e[a] ? f.push(e[a]) : 0 !== e[a] && {
                76: 1,
                884: 1,
                1057: 1,
                1078: 1,
                1125: 1,
                2358: 1,
                3226: 1,
                3438: 1,
                3834: 1,
                4297: 1,
                5040: 1,
                5055: 1,
                6069: 1,
                7041: 1,
                8683: 1,
                9923: 1
              } [a] && f.push(e[a] = (e => new Promise((a, f) => {
                var r = i.miniCssF(e),
                  t = i.p + r;
                if (((e, a) => {
                    for (var f = document.getElementsByTagName("link"), r = 0; r < f.length; r++) {
                      var t = (c = f[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((t = (c = d[r]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(r, t)) return a();
                ((e, a, f, r, t) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = f => {
                    if (d.onerror = d.onload = null, "load" === f.type) r();
                    else {
                      var c = f && f.type,
                        n = f && f.target && f.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), t(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, t, 0, a, f)
              }))(a).then(() => {
                e[a] = 0
              }, f => {
                throw delete e[a], f
              }))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (a, f) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) f.push(r[2]);
              else if (/^(1(127|352|556|81|874)|8(136|429|683)|(203|504|699)0|(322|33|7)6|4297|6069)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((f, t) => r = e[a] = [f, t]);
              f.push(r[2] = t);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, f => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = f && ("load" === f.type ? "missing" : f.type),
                    d = f && f.target && f.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", c.name = "ChunkLoadError", c.type = t, c.request = d, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var r, t, [d, c, n] = f,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(f); o < d.length; o++) t = d[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            f = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});