try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c1d9b8d0-d861-47e1-8038-0c26a110d83f", e._sentryDebugIdIdentifier = "sentry-dbid-c1d9b8d0-d861-47e1-8038-0c26a110d83f")
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
        var e, d, f, c, r, t, b = {
            20154(e, a, d) {
              (0, d(89160).w)(1)
            },
            89160(e, a, d) {
              const f = d(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = f(d.y.meta.url, e)
              }
            },
            35649(e, a, d) {
              d(20154)
            },
            51908(e, a, d) {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var f = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, r = f.length; c !== a && r >= 0;) "/" === f[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = f.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            72892(e, a, d) {
              "use strict";
              var f = {
                  "./core": () => Promise.all([d.e(9512), d.e(6704), d.e(7284), d.e(4637), d.e(1270), d.e(3517), d.e(2909), d.e(6629)]).then(() => () => d(80917))
                },
                c = (e, a) => (d.R = a, a = d.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var f = "default",
                      c = d.S[f];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[f] = e, d.I(f, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => r
              })
            }
          },
          n = {};

        function o(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var d = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, o), d.loaded = !0, d.exports
        }
        return o.m = b, o.c = n, o.y = a, o.amdO = {}, o.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return o.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          o.r(c);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var t = 2 & f && a;
            ("object" == typeof t || "function" == typeof t) && !~e.indexOf(t); t = d(t)) Object.getOwnPropertyNames(t).forEach(e => r[e] = () => a[e]);
          return r.default = () => a, o.d(c, r), c
        }, o.d = (e, a) => {
          for (var d in a) o.o(a, d) && !o.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce((a, d) => (o.f[d](e, a), a), [])), o.u = e => "js/" + {
          131: "d32672c551e864bb653f3949e6b955e9",
          162: "72aa427b592a5c1a141b5e3d3770b693",
          277: "5711e180a4509f53535bdb5007fd8199",
          278: "82d5f2483acc2db7b7bf6e47837d41ca",
          299: "8a9f5a532008608f1b8b5d4a521310ab",
          314: "6de2acc3804d00341e16727f1aaf0e0c",
          359: "059e267853e7bcf39cd4bf907c1c2527",
          595: "92ded35724ccdd595eb516f5fe97a4b1",
          645: "afae82c0170e62dbd53115b5c122839f",
          662: "82f5fa04c59f50ab8c5d9b97061bf8c3",
          755: "8729254a8caa905261f686416435d3d5",
          784: "9a78f01dd552e18ee9c0d9f9a813906f",
          824: "3435d7bb1d3e9148335a31c7a03b8deb",
          906: "8ab2254a2e8bdab045a398eb8b4bc4f2",
          907: "bf83ac2e8ad5b1dcb1658ef5260c8e80",
          951: "f5ecd2fdc0b254ab96867d7bdeebf526",
          1010: "3681ea95fc2428aaaf7b5682428382da",
          1054: "615b12e54c04888e444e08504cc6d2cc",
          1242: "49d4a78d22d5df7a9a0d58c8272a6087",
          1338: "0ba22202a017e118fa4ec975ebbb6896",
          1421: "07837b7332435fdd68ad75ca214b2d0f",
          1495: "a935d7f4d31705646b86cedb489f9c86",
          1517: "d4a054428e1ee3a4b3f6cfbb98dbf40d",
          1822: "ba007833bb48b12a523e61723c772509",
          1868: "37c053352304f510cbe7b4bbd72c1b8c",
          1924: "97ece0293dcce2183693e8b17a1b613c",
          2e3: "3efc4042f3ab764237d46ae01be70af2",
          2044: "b13e73e029b27ea1ac694fdf4e2f6e41",
          2062: "ee92dc4b88e0308f1871af0c74c6c376",
          2080: "a50c27e04eccd678c8ff81be26c765c7",
          2156: "f4c34caa0bdf86d414917d75e2d6f3d0",
          2171: "7d03d03f74d45478ccc2850ba61d5bc8",
          2174: "cd2fd883a5db76332a76c2a51f4899ec",
          2221: "7af1455224dc047dbf20f45b038b95c1",
          2243: "4334ced50f7b3db694a69468cf955904",
          2347: "3f8f5f4c957b1f30826e311c1dada92a",
          2365: "45ea266061fdf791d40c6f727c7f41e2",
          2398: "b8ce6a874973e82d4629ef1c539bf060",
          2463: "f5c73f6e02aaf2da75c85e669714855d",
          2466: "b3dff6a894c11258323966f40290246b",
          2497: "2611d7511be80659e141ef0c75bc0fe5",
          2559: "ea0b382723d7ebaa9f2658c64eeb3680",
          2571: "abf08bf56bfad0a6125b1d88f9a643fb",
          2575: "c23c31a888e5fce3d9e91aed6dc08d0a",
          2581: "c0aadca9a207b4914cdb6fa671a6ca4e",
          2642: "f3ecc0ba554bc3423d83b8b5f6ad6073",
          2678: "3cee6eacde4b5813b36014a1fa44c42c",
          2823: "e7db4857993d5d6b9cdfc2334ab3fce6",
          2864: "565bcf6970b970cd400957048cf0f8d6",
          2976: "7118b7212fda137d2e055adcc01aabe5",
          3034: "669f3ec4a02cfff434ec30442ca9932a",
          3120: "1d57a54d9d7a733f886103da0af24f0a",
          3135: "75d6c184e01f6c241b3ceb5eb96133b9",
          3197: "2cd735244e535e1ad583654adf233d68",
          3199: "21e7b6776e510d8bd20c2285057b34f6",
          3266: "8cab37db4af1ac6a1f8396d69317728e",
          3343: "0b34b5f78d63b74988d3ccaf112ab9ee",
          3370: "705a9077776dcfed284c71783365aeca",
          3475: "ebddafa8bff28691ab9bda50597a39e7",
          3486: "344c610a3f06fa27c753aec338f8b54a",
          3529: "a51279c2141d5aa77709b83b2fd72ead",
          3541: "5da6f2a6bca933fc89537bdae2072306",
          3694: "1279210f54b79c8189aa68113a6b7fb6",
          3697: "109eb5796dedb4e58930eac4db891f94",
          3802: "45f527a4b483049c199c671edde15042",
          3876: "54b58f07b790c109c29d940e27130e12",
          3884: "4826e9f20411ced5edbe2d4efe89b1f1",
          3885: "1778338e4b5a067d789c50d287d1ee9d",
          3941: "ae895cb0de5b7a919a4fd798d13161a1",
          4011: "708a76b99988aee7573a413135050587",
          4078: "159e2c86342edf41c0799a18aa80b12d",
          4113: "bd5f6be2791622f1c514e236b860bff5",
          4379: "94843b321fa388d16dae792ec6e204cc",
          4446: "275b4e594d1f7d0bfebb82e7ec1a5f1b",
          4528: "30e3d9b10c1d7005f75a108e18734bde",
          4537: "b6f1944fdb6bf483a7bf2305083a67ac",
          4555: "92bf7fbbc1c39c0bdf422019e02dbe25",
          4621: "6639007af4ec2e72e5a0b85ea828c9a5",
          4700: "7fb3bd05cead50486b92ee5d590e60fc",
          4710: "1ca4ecc79857ae60e16403ea90cdb78e",
          4731: "15f121dd9624dd530c9540e25e625838",
          4770: "bb7becad35cd3c4b9fdacd2765e8c7e7",
          4799: "7269125da183e761c2f773e803fa9aaa",
          4844: "5d8bf714c13bf2374160eeeefa295ede",
          4851: "f1809390a5d70adfca0c80a924901f99",
          4861: "bbe601e6ab48c2a4de9a6831a9001803",
          4913: "1d4f203b00eada8a6d4f76389b758b7e",
          4921: "58fbb0eb0ed93fc7e06b4e771f271973",
          4956: "47009c1ddba7f1356f89baac0abf515d",
          5018: "b04ced1820808c4ba9b8523a0ea4249f",
          5047: "3f2df72609c92a656553d4804eb83e23",
          5056: "ef4976c518b84ef4062fa1ef1fa75def",
          5094: "d5f07abae7ae46b65fd38d551d6909e7",
          5204: "c7cee038dac79deb629f2d0c6ce03e00",
          5233: "e3e03a3ce8265fa2d9d95ff74dab283f",
          5259: "24b06c8a58146be1f80f695591d152bd",
          5381: "ed3340d325dade7ee80733a37c41a812",
          5530: "3114a4961f40605b477430105c4bcec3",
          5567: "37bfe8f0ff2acfb1455b74f807ca9021",
          5580: "228ec03205ae2c051d6b32359181ab65",
          5639: "220df286a5d0d75923f2bdb3ca68b773",
          5663: "7026b66adc9b67debbfa48522a20da6d",
          5711: "08849eef869bafc432271f8500b8349a",
          5742: "095f9f7c61feab3bd210182d91334d5a",
          5830: "a37204f5733bd51faa65a18bf7e2c124",
          5832: "3940803be33a2aecfe37ba92b7345cd7",
          5860: "d31eb14b8015b2baf407ecc3124a5b5d",
          5906: "0c664f998dc4001130f6ec43bd35cb13",
          5922: "baf19b744a003ce60c9b4011a8a8207c",
          6149: "f985de0dae5c8216dfa3e7b5047fb7dc",
          6260: "850e2281e9ec05bad89903ba9e39f240",
          6267: "cd001e9dad34914d4cf45c9c40ec5265",
          6280: "e2527092c3ee80624833995c02f029a3",
          6285: "75626cf87b99dfed1a305070cfefd0f6",
          6352: "5d160242a9c4878e35e8b02d5eb60909",
          6361: "b42284486443607306e0ab01818a228b",
          6629: "d66607ff69a2fb89b6712711bbd4e096",
          6663: "69ba7bfd2926db1e850b7c127ac50619",
          6664: "7a3e62472449f799bb4cecdccc662366",
          6704: "5a32ca8a725a038527b0aa5a14a2a647",
          6809: "b70a6f3d98e182606fa3dfe0bc94e50c",
          6879: "a12f35f2622c4b41160ea004b05e1287",
          6883: "ea7229fcc90a2422f68122dd1a5b4a3c",
          6891: "9fb02266486d1b77e38cd5aa74d8a93a",
          6936: "9338306a6ff369f0fd98578b2f93f05b",
          6986: "0506c73d5c17894cc3b3bf4c783b13b3",
          6997: "07a14d7c8b34532d1c0c80ebd27d13f5",
          7010: "c79f3041653d0ca509705999b93d52be",
          7073: "e2274a651dc646f885616fa93496c666",
          7176: "4943a54dc786bb21f674bdc50d632c89",
          7284: "d78a711b216aaa3604d6fac29c717f85",
          7428: "79e40e53ad98f6c2386a0faf6b42ffb9",
          7436: "1494bc67cbf79cf5184122128f488c31",
          7452: "36a353cf29953644b322a87011b52037",
          7453: "8c17aa063bdace950819e34f61f1282c",
          7645: "1e1df522c9c2e4fec9c410d670551fa7",
          7970: "797309550a1e2da2b3d732717702e1d4",
          8214: "2d9d70932860852aa3454308e2487abb",
          8272: "5d24ff0341e1ceef0efa20a40146e938",
          8295: "2097d7465dd6b3748f415f08c742e4f9",
          8391: "15ea4078a0b4a499ed4ef74d720f40a8",
          8403: "25e16b10ae002d50b7b8f9508dcceac1",
          8503: "5ae4d9e941d8007f8a72be5961509be1",
          8655: "def60abf3a0f397f33627607638298be",
          8679: "9428e73136fd06a8f63a161aef6131b7",
          8683: "a52a076e4dbcb5c7910eaea9b3a984dd",
          8729: "674866206e14e63f1a94d51ff06906de",
          8755: "f201a33bb6e154415f838be41954966c",
          8773: "e6f5462d665d6b228d9b63a555770d8c",
          8819: "555685311d92a3605471fbe24a745f87",
          8880: "7acb7ce62fb31834187d594e12f3051f",
          8957: "7bb146d9b25876ad204a8d0c28737611",
          8970: "2694b47105889ac55dee98b210ee6175",
          9022: "e639ca946e19e487138142a9b6dd76b9",
          9028: "1646d518c31ed1cd07e337b36fb84ada",
          9067: "938528fe7bbf996a68d76e6ddef95f62",
          9126: "9bc5ac4596bab72d6cc4812be9435d33",
          9190: "7e678c6cbd6d6bd9d960164cc89c80d2",
          9264: "6c16b5b9135e110a804b9c2266f88911",
          9377: "3177c3a02e9051c17d1f377fbfcbed7e",
          9500: "fc71def1db33290bfa82b7e0fb1f664e",
          9512: "ccf14ec814ec21c5a1fff47248d52127",
          9615: "8ef8d1bb34816ba1aa7ea6ee3a63c3d8",
          9793: "c30c5879addb8be7b6b57421f02fb128",
          9936: "75446ec8558eb289a9854b4479345e81",
          9990: "bd0b36695e3292e298181c21d91896c7"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          359: "040376449096dd08888c9864a2929db9",
          1584: "a918c070930a0014e79e0865fe7f82e9",
          2661: "a918c070930a0014e79e0865fe7f82e9",
          3317: "9605e4661b50b9d4fc907ee456d15b70",
          4379: "5e7159ddb9d86d421bed120ee145969f",
          5042: "a918c070930a0014e79e0865fe7f82e9",
          6352: "410e8856ca807ef4d9eff2cc3d023182",
          6629: "6cf2cfa51258f7bbc33f7ef4120df583",
          6704: "e9b0ca5c9fbce7a4ca9e364bfe93b5f9",
          8773: "9605e4661b50b9d4fc907ee456d15b70",
          9203: "a918c070930a0014e79e0865fe7f82e9"
        } [e] + ".css", o.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), o.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-header:", o.l = (e, a, d, r) => {
          if (f[e]) f[e].push(a);
          else {
            var t, b;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var l = n[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + d) {
                  t = l;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", o.nc && t.setAttribute("nonce", o.nc), t.setAttribute("data-webpack", c + d), t.src = e), f[e] = [a];
            var s = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var c = f[e];
                if (delete f[e], t.parentNode && t.parentNode.removeChild(t), c && c.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, o.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, o.f.remotes = (e, a) => {
          o.o(r, e) && r[e].forEach(e => {
            var d = o.R;
            d || (d = []);
            var f = t[e];
            if (!(d.indexOf(f) >= 0)) {
              if (d.push(f), f.p) return a.push(f.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), o.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                r = (e, d, r, t, b, n) => {
                  try {
                    var o = e(d, r);
                    if (!o || !o.then) return b(o, t, n);
                    var i = o.then(e => b(e, t), c);
                    if (!n) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                b = (e, a, c) => r(a.get, f[1], d, 0, n, c),
                n = a => {
                  f.p = 1, o.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(o, f[2], 0, 0, (e, a, d) => e ? r(o.I, f[0], 0, e, b, d) : c(), 1)
            }
          })
        }, (() => {
          o.S = {};
          var e = {},
            a = {};
          o.I = (d, f) => {
            f || (f = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(f.indexOf(c) >= 0)) {
              if (f.push(c), e[d]) return e[d];
              o.o(o.S, d) || (o.S[d] = {});
              var r = o.S[d],
                t = "@rockstargames/modules-core-header",
                b = (e, a, d, f) => {
                  var c = r[e] = r[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : t > b.from)) && (c[a] = {
                    get: d,
                    from: t,
                    eager: !!f
                  })
                },
                n = [];
              switch (d) {
                case "default":
                  b("@foundry-int/utils", "5.24.3", () => Promise.all([o.e(9512), o.e(2044), o.e(1270)]).then(() => () => o(62044))), b("@foundry-int/utils", "5.25.0-rc.5", () => Promise.all([o.e(9512), o.e(8214), o.e(1270)]).then(() => () => o(78214))), b("@foundry/icons", "5.24.3", () => Promise.all([o.e(5906), o.e(4637), o.e(8164), o.e(8773)]).then(() => () => o(35906))), b("@radix-ui/react-accordion", "1.2.12", () => Promise.all([o.e(1010), o.e(4637), o.e(4017), o.e(9394), o.e(7793), o.e(9793)]).then(() => () => o(81010))), b("@radix-ui/react-dialog", "1.1.15", () => Promise.all([o.e(5860), o.e(8819), o.e(4637), o.e(4017), o.e(9394), o.e(7793), o.e(1172), o.e(2174)]).then(() => () => o(88819))), b("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([o.e(4637), o.e(4017), o.e(9394), o.e(3876)]).then(() => () => o(83876))), b("@radix-ui/react-focus-scope", "1.1.8", () => Promise.all([o.e(4637), o.e(4017), o.e(7937), o.e(4956)]).then(() => () => o(4956))), b("@radix-ui/react-id", "1.1.1", () => Promise.all([o.e(4637), o.e(6883)]).then(() => () => o(96883))), b("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([o.e(5860), o.e(9067), o.e(4637), o.e(4017), o.e(9394), o.e(7793), o.e(4293), o.e(4555)]).then(() => () => o(79067))), b("@radix-ui/react-popover", "1.1.15", () => Promise.all([o.e(5860), o.e(8295), o.e(4637), o.e(4017), o.e(9394), o.e(7793), o.e(1172), o.e(1421)]).then(() => () => o(41421))), b("@radix-ui/react-portal", "1.1.10", () => Promise.all([o.e(4637), o.e(4017), o.e(7937), o.e(9190)]).then(() => () => o(29190))), b("@radix-ui/react-portal", "1.1.9", () => Promise.all([o.e(4637), o.e(4017), o.e(9394), o.e(5204)]).then(() => () => o(2823))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([o.e(4637), o.e(2976)]).then(() => () => o(2976))), b("@radix-ui/react-slot", "1.2.4", () => Promise.all([o.e(4637), o.e(8957)]).then(() => () => o(38957))), b("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([o.e(4637), o.e(2463)]).then(() => () => o(12463))), b("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([o.e(4637), o.e(4017), o.e(9394), o.e(5047)]).then(() => () => o(45047))), b("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([o.e(4637), o.e(4017), o.e(7937), o.e(5922)]).then(() => () => o(3541))), b("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(2080), o.e(9512), o.e(2497), o.e(4637), o.e(8403)]).then(() => () => o(68403))), b("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([o.e(2080), o.e(6260), o.e(359), o.e(6704), o.e(3135), o.e(4637), o.e(4017), o.e(7793), o.e(7937), o.e(8164), o.e(1270), o.e(7835), o.e(6352), o.e(3517)]).then(() => () => o(76352))), b("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(9512), o.e(5381), o.e(4637), o.e(4113), o.e(2909), o.e(2559)]).then(() => () => o(94113))), b("@vanilla-extract/recipes", "0.5.7", () => Promise.all([o.e(6260), o.e(5580)]).then(() => () => o(15580))), b("clsx", "2.1.1", () => o.e(4921).then(() => () => o(4921))), b("framer-motion", "12.38.0", () => Promise.all([o.e(6663), o.e(4637), o.e(6936)]).then(() => () => o(36663))), b("gsap", "3.12.5", () => o.e(3529).then(() => () => o(93529))), b("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(4637)]).then(() => () => o(30162))), b("react-remove-scroll", "2.7.2", () => Promise.all([o.e(1924), o.e(4637)]).then(() => () => o(31924))), b("react", "18.3.1", () => o.e(2581).then(() => () => o(22581))), b("spatial-navigation-polyfill", "1.3.1", () => o.e(4446).then(() => () => o(54446)));
                  break;
                case "header":
                  b("@foundry/react", "5.24.3", () => Promise.all([o.e(5860), o.e(2080), o.e(6260), o.e(8295), o.e(359), o.e(4379), o.e(6704), o.e(3135), o.e(6986), o.e(4637), o.e(4017), o.e(9394), o.e(7793), o.e(7937), o.e(1172), o.e(8164), o.e(1270), o.e(4293), o.e(7835), o.e(1844), o.e(9203)]).then(() => () => o(86986))), b("@foundry/react", "5.24.3", () => Promise.all([o.e(5860), o.e(2080), o.e(6260), o.e(8295), o.e(359), o.e(4379), o.e(6704), o.e(2497), o.e(8655), o.e(4637), o.e(4017), o.e(9394), o.e(7793), o.e(7937), o.e(1172), o.e(8164), o.e(1270), o.e(4293), o.e(7835), o.e(1844), o.e(5042)]).then(() => () => o(58655)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          o.g.importScripts && (e = o.g.location + "");
          var a = o.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var f = d.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = d[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = d[1] ? a(d[1]) : [];
              return d[2] && (f.length++, f.push.apply(f, a(d[2]))), d[3] && (f.push([]), f.push.apply(f, a(d[3]))), f
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var f = 0;;) {
                if (f >= a.length) return f < d.length && "u" != (typeof d[f])[0];
                var c = a[f],
                  r = (typeof c)[0];
                if (f >= d.length) return "u" == r;
                var t = d[f],
                  b = (typeof t)[0];
                if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                if ("o" != r && "u" != r && c != t) return c < t;
                f++
              }
            },
            d = e => {
              var a = e[0],
                f = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                f += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var c = 1, r = 1; r < e.length; r++) c--, f += "u" == (typeof(b = e[r]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, b);
                return f
              }
              var t = [];
              for (r = 1; r < e.length; r++) {
                var b = e[r];
                t.push(0 === b ? "not(" + n() + ")" : 1 === b ? "(" + n() + " || " + n() + ")" : 2 === b ? t.pop() + " " + t.pop() : d(b))
              }
              return n();

              function n() {
                return t.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            f = (a, d) => {
              if (0 in a) {
                d = e(d);
                var c = a[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, b = 1, n = !0;; b++, t++) {
                  var o, i, l = b < a.length ? (typeof a[b])[0] : "";
                  if (t >= d.length || "o" == (i = (typeof(o = d[t]))[0])) return !n || ("u" == l ? b > c && !r : "" == l != r);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (b <= c) {
                        if (o != a[b]) return !1
                      } else {
                        if (r ? o > a[b] : o < a[b]) return !1;
                        o != a[b] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (r || b <= c) return !1;
                    n = !1, b--
                  } else {
                    if (b <= c || i < l != r) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < a.length; t++) {
                var h = a[t];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? f(h, d) : !u())
              }
              return !!u()
            },
            c = (e, a) => e && o.o(e, a),
            r = e => (e.loaded = 1, e.get()),
            t = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            b = e => function(a, d, f, c, r) {
              var t = o.I(a);
              return t && t.then && !f ? t.then(e.bind(e, a, o.S[a], d, !1, c, r)) : e(a, o.S[a], d, f, c, r)
            },
            n = (e, a, d) => d ? d() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            i = b((e, d, f, b, o) => c(d, f) ? r(((e, d, f) => {
              var c = f ? t(e[d]) : e[d];
              return (d = Object.keys(c).reduce((e, d) => !e || a(e, d) ? d : e, 0)) && c[d]
            })(d, f, b)) : n(e, f, o)),
            l = b((e, b, o, i, l, s) => {
              if (!c(b, o)) return n(e, o, s);
              var u, h = ((e, d, f) => {
                var c = f ? t(e[d]) : e[d];
                return Object.keys(c).reduce((e, d) => !e || !c[e].loaded && a(e, d) ? d : e, 0)
              })(b, o, i);
              return f(l, h) || (u = ((e, a, f, c) => "Unsatisfied version " + f + " from " + (f && e[a][f].from) + " of shared singleton module " + a + " (required " + d(c) + ")")(b, o, h, l), "undefined" != typeof console && console.warn && console.warn(u)), r(b[o][h])
            }),
            s = {},
            u = {
              4637: () => l("default", "react", !1, [1, 18, 2, 0], () => o.e(2581).then(() => () => o(22581))),
              81270: () => l("default", "clsx", !1, [1, 2, 1, 1], () => o.e(4921).then(() => () => o(4921))),
              13517: () => l("default", "framer-motion", !1, [1, 12, 38, 0], () => o.e(6663).then(() => () => o(36663))),
              42909: () => l("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([o.e(2080), o.e(2497), o.e(784)]).then(() => () => o(68403))),
              13331: () => l("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(5381), o.e(4113)]).then(() => () => o(94113))),
              37116: () => l("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([o.e(2080), o.e(6260), o.e(359), o.e(3135), o.e(4017), o.e(7793), o.e(7937), o.e(8164), o.e(7835), o.e(6352)]).then(() => () => o(76352))),
              75257: () => i("header", "@foundry/react", !1, () => Promise.all([o.e(5860), o.e(2080), o.e(6260), o.e(8295), o.e(359), o.e(4379), o.e(2497), o.e(8655), o.e(4017), o.e(9394), o.e(7793), o.e(7937), o.e(1172), o.e(8164), o.e(4293), o.e(7835), o.e(1844), o.e(2661)]).then(() => () => o(58655))),
              16398: () => l("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(9512), o.e(2044), o.e(1270)]).then(() => () => o(62044))),
              19563: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([o.e(4017), o.e(7937), o.e(3541)]).then(() => () => o(3541))),
              84017: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => o.e(162).then(() => () => o(30162))),
              19394: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => o.e(595).then(() => () => o(2976))),
              20640: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => o.e(9264).then(() => () => o(96883))),
              80692: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => o.e(4844).then(() => () => o(12463))),
              27351: () => l("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => o.e(1924).then(() => () => o(31924))),
              45108: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => o.e(1495).then(() => () => o(83876))),
              73463: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => o.e(2823).then(() => () => o(2823))),
              27937: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => o.e(1338).then(() => () => o(38957))),
              84293: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => o.e(7428).then(() => () => o(45047))),
              21324: () => l("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(5906), o.e(3317)]).then(() => () => o(35906))),
              46929: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([o.e(5860), o.e(8295), o.e(9394), o.e(1172), o.e(3802)]).then(() => () => o(41421))),
              80676: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([o.e(5860), o.e(8819), o.e(9394), o.e(1172)]).then(() => () => o(88819))),
              33920: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([o.e(5860), o.e(9067), o.e(9394), o.e(4293)]).then(() => () => o(79067))),
              34364: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => o.e(6809).then(() => () => o(29190))),
              39080: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => o.e(2575).then(() => () => o(4956))),
              58754: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => Promise.all([o.e(1010), o.e(9394)]).then(() => () => o(81010))),
              59066: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => o.e(4446).then(() => () => o(54446))),
              94745: () => i("header", "@foundry/react", !1, () => Promise.all([o.e(5860), o.e(8295), o.e(4379), o.e(6986), o.e(9394), o.e(1172), o.e(4293), o.e(1844), o.e(1584)]).then(() => () => o(86986))),
              35812: () => l("default", "gsap", !1, [0], () => o.e(3529).then(() => () => o(93529))),
              76608: () => l("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(9512), o.e(8214)]).then(() => () => o(78214))),
              97336: () => l("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => o.e(3199).then(() => () => o(15580)))
            },
            h = {
              1172: [27351, 45108, 73463],
              1270: [81270],
              1844: [35812, 76608, 97336],
              2909: [42909],
              3517: [13517],
              4017: [84017],
              4293: [84293],
              4637: [4637],
              6352: [33920, 34364, 39080, 58754, 59066, 94745],
              6629: [13331, 37116, 75257],
              7793: [20640, 80692],
              7835: [21324, 46929, 80676],
              7937: [27937],
              8164: [16398, 19563],
              9394: [19394]
            },
            p = {};
          o.f.consumes = (e, a) => {
            o.o(h, e) && h[e].forEach(e => {
              if (o.o(s, e)) return a.push(s[e]);
              if (!p[e]) {
                var d = a => {
                  s[e] = 0, o.m[e] = d => {
                    delete o.c[e], d.exports = a()
                  }
                };
                p[e] = !0;
                var f = a => {
                  delete s[e], o.m[e] = d => {
                    throw delete o.c[e], a
                  }
                };
                try {
                  var c = u[e]();
                  c.then ? a.push(s[e] = c.then(d).catch(f)) : d(c)
                } catch (e) {
                  f(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            o.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                359: 1,
                1584: 1,
                2661: 1,
                3317: 1,
                4379: 1,
                5042: 1,
                6352: 1,
                6629: 1,
                6704: 1,
                8773: 1,
                9203: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var f = o.miniCssF(e),
                  c = o.p + f;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), f = 0; f < d.length; f++) {
                      var c = (t = d[f]).getAttribute("data-href") || t.getAttribute("href");
                      if ("stylesheet" === t.rel && (c === e || c === a)) return t
                    }
                    var r = document.getElementsByTagName("style");
                    for (f = 0; f < r.length; f++) {
                      var t;
                      if ((c = (t = r[f]).getAttribute("data-href")) === e || c === a) return t
                    }
                  })(f, c)) return a();
                ((e, a, d, f, c) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", o.nc && (r.nonce = o.nc), r.onerror = r.onload = d => {
                    if (r.onerror = r.onload = null, "load" === d.type) f();
                    else {
                      var t = d && d.type,
                        b = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ": " + b + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = t, n.request = b, r.parentNode && r.parentNode.removeChild(r), c(n)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, c, 0, a, d)
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
          o.f.j = (a, d) => {
            var f = o.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) d.push(f[2]);
              else if (/^(1(172|270|584|844)|4(017|293|637)|7(793|835|937)|3[35]17|2661|2909|5042|8164|9203|9394)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise((d, c) => f = e[a] = [d, c]);
              d.push(f[2] = c);
              var r = o.p + o.u(a),
                t = new Error;
              o.l(r, d => {
                if (o.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, f[1](t)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var f, c, [r, t, b] = d,
                n = 0;
              if (r.some(a => 0 !== e[a])) {
                for (f in t) o.o(t, f) && (o.m[f] = t[f]);
                b && b(o)
              }
              for (a && a(d); n < r.length; n++) c = r[n], o.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), o.nc = void 0, o(35649), o(72892)
      })())
    }
  }
});